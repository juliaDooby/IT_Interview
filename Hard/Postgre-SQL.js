SQLAlchemy не выполняет обновление, пока не пройдёт код с помощью отладчика
Вопросы
PYTHON
SQLAlchemy не выполняет обновление, пока не пройдёт код с помощью отладчика
Я искренне озадачен поведением, которое наблюдаю, поэтому надеюсь, что кто-нибудь сможет пролить свет на то, что здесь происходит. По сути, у меня есть веб-приложение, использующее FastAPI и SQLAlchemy на внутренней стороне, в котором пользователи публикуют ответы на опрос. В конечной точке, принимающей запрос на публикацию ответа, в базе данных создается объект Response, затем в базе данных создается несколько объектов Match с внешним ключом к созданному объекту Response. Во время анализа и создания объектов Match из полезных данных я агрегирую переменную number_correct_matches (которая является положительным целым числом), а затем обновляю объект Response, чтобы включить number_correct_matches через сеанс SQLAlchemy в класс crud, который имеет функцию update.

Поведение, которое меня сбивает с толку, заключается в том, что когда я выполняю код, выполняющий эту операцию обновления, либо при запуске всего проекта локально на моем Raspberry Pi 4, где я разрабатываю (используя локальную базу данных PostgreSQL), либо через модульный тест (используя в памяти sqlite db), обновление в базе данных для объекта Response не происходит. Однако существует два сценария, в которых обновление работает:

Если я запускаю модульный тест в режиме отладки в vscode и прохожу цикл for в функции обновления по одной строке за раз, объект Response корректно обновляется в базе данных.

Если я помещаю оператор журнала в функцию обновления и если оператор журнала печатает db_object, который обновляется, объект Response обновляется правильно. Если я добавлю оператор logger, который не включает db_object, оператор logger выводится в журналы, но объект не обновляется.

Ожидаемое поведение происходит только для любого из двух вышеперечисленных сценариев, в противном случае код буквально пропускается (см. ниже). Кроме того, у меня есть другие модели в приложении, которые успешно используют одну и ту же функцию обновления для разных атрибутов (например, существует конечная точка обновления для пользовательских объектов, которая использует ту же функцию, и через нее я могу успешно обновить пароль пользователя).

Я не понимаю, как код, по-видимому, выполняется только при прямом прохождении в режиме отладки или при печати аргумента db_object. Я знаю, что могу просто просмотреть объекты Match в полезной нагрузке, прежде чем создавать их в базе данных, просто чтобы получить значение number_correct_matches и в первую очередь создать объект Response с этим значением, но я действительно хочу понять, как это работает, только когда я проходить по одной строке за раз или когда у меня есть конкретный оператор журнала, а не при обычном запуске кода без лишних журналов.

API/response.py

response = crud.response.update(
    session=session,
    db_object=response, # <- this is the already created Response object in the database
    object_in=schemas.ResponseUpdate(
        number_correct_matches=number_correct_matches
    ),
)
схемы/response.py

# properties to receive via API update
class ResponseUpdate(ResponseBase):
    number_correct_matches: int = 0
crud_base.py (расширен crud_response)

def update(
        self,
        session: Session,
        *,
        db_object: ModelType,
        object_in: Union[UpdateSchemaType, Dict[str, Any]]
    ) -> ModelType:
        """
        Updates an object in the database

        Args:
            session (Session): a SQLAlchemy Session object that is connected to the database.
            db_object (ModelType): An object from the database.
            object_in (Union[UpdateSchemaType, Dict[str, Any]]): A pydantic model object used to update the db model object.

        Returns:
            ModelType: The updated db model object.
        """
        # logger.info(f"updating {db_object}") <- with just this logging statement, it works correctly
        logger.info("updating 1")
        # update the db object
        update_data = ( # <- If breakpoint is set here and then I jump to below the for loop without stepping through, it does not work
            object_in
            if isinstance(object_in, dict)
            else object_in.model_dump(exclude_unset=True)
        )
        for field in jsonable_encoder(db_object): # <- It works if breakpoint is set here and then I walk through one line at a time to the end of the for loop
            logger.info("updating 2")
            if field in update_data.keys():
                logger.info("updating 3")
                setattr(db_object, field, update_data[field])
        logger.info("updating 4")
        # update the db object through the session
        session.add(db_object) # <- If breakpoint is set here, it does not work
        session.commit()
        session.refresh(db_object)
        return db_object
Приведенный выше код при запуске «как есть» (с закомментированным первым оператором журнала) приводит к созданию следующих журналов:

2024-07-12 20:53:52.228 | INFO     | app.crud.crud_base:update:82 - updating 1
2024-07-12 20:53:52.229 | INFO     | app.crud.crud_base:update:94 - updating 4
Я также добавлю, что хотя я разместил код в конечной точке ответа, я также вызываю crud.response.update в conftest.py и получаю точно такое же поведение.

 13.07.2024 03:10
0
0
54
2
Данный вопрос помечен как решенный
 Ответы 2
Не полный ответ, просто подсказка для дальнейшей отладки (это не поместится в комментарий)

Я считаю, что здесь происходит какой-то странный крайний случай кэширования:

если вы вызываете объект __repr__, он имеет побочные эффекты (некоторые значения кэшируются в db_object), что изменяет вывод его
использование отладчика имеет побочные эффекты? Отладчик может получить внутренний доступ к некоторым полям вашего объекта, хотя мне в это трудно поверить.
Два отведения для отладки:

Что произойдет, если вы добавите точку останова внутри jsonable_encoder. Это работает? Если нет, вы можете выяснить, почему именно он возвращает пустую последовательность.

что будет, если заменить

        for field in jsonable_encoder(db_object): # <- It works if breakpoint is set here and then I walk through one line at a time to the end of the for loop
            logger.info("updating 2")
            if field in update_data.keys():
                logger.info("updating 3")
                setattr(db_object, field, update_data[field])
с

        fields = jsonable_encoder(db_object)
        for field in fields: # <- It works if breakpoint is set here and then I walk through one line at a time to the end of the for loop
            logger.info("updating 2")
            if field in update_data.keys():
                logger.info("updating 3")
                setattr(db_object, field, update_data[field])
        else:
            logger.error(f"no fields found: {fields=}, {db_object=}")            
 14.07.2024 13:11
 Ответ принят как подходящий
Итак, это частичный ответ, поскольку он решает проблему, но я до сих пор не до конца понимаю все поведение, которое описал в исходном вопросе. Добавление session.refresh(response) прямо перед вызовом обновления ответа приводит к правильному поведению. Я предполагаю, что проблема в том, что у меня есть связь «многие к одному» между таблицей Match и таблицей Response, и когда я создаю объекты Match перед обновлением response, объекты Match имеют атрибут, который является внешним ключом для идентификатора объекта Response. . Мое лучшее предположение относительно того, что происходит, заключается в том, что при создании объектов Match таблица базы данных для Response обновляется ссылками на вновь созданные объекты Match, но объект ответа в памяти затем не соответствует тому, что находится в базе данных. Я не уверен, почему операторы журнала или работа с отладчиком приводят к обновлению объекта, но как только объект обновляется сеансом, он может быть обновлен в коде.


PL / PGSQL. Как работает этот оператор цикла в примере Фибоначчи
Вопросы
POSTGRESQL
PL / PGSQL. Как работает этот оператор цикла в примере Фибоначчи
CREATE OR REPLACE FUNCTION fibonacci (n INTEGER) 
   RETURNS INTEGER AS $$ 
DECLARE
   counter INTEGER := 0; 
   i INTEGER := 0; 
   j INTEGER := 1;
BEGIN
   IF (n < 1) THEN
      RETURN 0;
   END IF; 

   LOOP 
      EXIT WHEN counter = n; 
      counter := counter + 1; 
      SELECT j, i + j INTO i, j;
   END LOOP; 
   RETURN i;
END; 
$$ LANGUAGE plpgsql;
Всем привет, я думаю, что приведенный выше код прост, но я не понимаю, как работает одна строка,

SELECT j, i + j INTO i, j;
Я предполагаю, что j начинается с 1 и i = 1, когда n = 1 когда N = 2, j становится 2, так что строка становится 2, 3 (i и J)

Однако i = 1, когда n = 2. Что я сделал не так?

 08.10.2018 14:26
0
0
144
2
 Ответы 2
i начинается с 0, j начинается с 1. Когда n = 2, выполняются два цикла.

В каждом цикле i получает текущее значение j, а j увеличивается на текущее значение i (до того, как ему будет присвоено значение j).

Первый цикл: i становится 1 (j равен 1), а j становится / остается 1: i (0) + j (1) = 1

Вторая петля, i становится / остается 1 (j все еще 1), j становится 2: i (1) + j (1) = 2

 08.10.2018 15:00
SELECT j, i + j
возвращает одну строку с двумя столбцами

Добавление

... INTO i, j
сохраняет первый столбец в переменной i, а второй - в переменной j.

Итак, вы выполнили два задания в одном заявлении.

Следующий псевдокод показывает, что происходит:

col1 := j;
col2 := i + j;
i := col1;
j := col2;
Спасибо, Лаунренц. Сделал w ошибку, если думал, что j увеличивается со счетчиком. Ваше объяснение очень ясное.

— 
user2315860
 08.10.2018 16:38



Я получаю синтаксическую ошибку в переменной hstore при вставке
Вопросы
POSTGRESQL
Я получаю синтаксическую ошибку в переменной hstore при вставке
CREATE EXTENSION hstore;

CREATE TABLE skm_employee_skillset
(
    employee_id                   integer PRIMARY KEY,
    created_date                  DATE DEFAULT current_date,
    last_update                   DATE DEFAULT current_date,
    created_by                    integer NOT NULL,
    updated_by                    integer NOT NULL,
    employee_skill_values         hstore
);

CREATE OR REPLACE FUNCTION skm_skills_manager__employee_skillset_insert(
                v_employee_id           integer,
                v_user              integer,
                v_skill_type_prefix         char(2),
                v_skill_type_id             integer,
                v_skill_level_confirmed         boolean,
                v_skill_level_confirmed_by      integer )

  RETURNS boolean AS '

BEGIN    

    Insert into skm_employee_skillset
        (employee_id ,
        created_date,
        last_update ,
        created_by,
        updated_by,
        employee_skill_values)
    VALUES
        (v_employee_id,
        DEFAULT,
        DEFAULT,
        v_user,
        v_user,
        '"skill_type_prefix" => v_skill_type_prefix,
         "skill_type_id" => v_skill_type_id,
         "skill_level_confirmed"    => v_skill_level_confirmed, 
         "skill_level_confirmed_by" => v_skill_level_confirmed_by' );

    return TRUE; 
EXCEPTION
    when others then return FALSE;

end;' language 'plpgsql';
ERROR: syntax error at or near ""skill_type_prefix"" LINE 508: '"skill_type_prefix" => v_skill_type_prefix, ^**

 09.10.2018 08:46
0
3
307
2
 Ответы 2
Когда блок кода разделен одинарными кавычками, вы не можете использовать одинарные кавычки без кавычек внутри самого блока кода, потому что одинарные кавычки не вкладываются.

Самое простое решение - использовать определенный разделитель долларовая котировка для тела кода, например, в

CREATE FUNCTION name(arguments...) RETURNS ...
AS $BODY$

   ...
   ... body of the function
   ...

 $BODY$ language plpgsql;
Как только эта часть будет решена, вы можете сосредоточиться на синтаксисе вашего hstore как на строковом литерале, свободно используя одинарные кавычки, чтобы заключить это значение.

 09.10.2018 12:33
CREATE EXTENSION hstore;


CREATE TABLE skm_employee_skillset
(
    employee_id                   integer PRIMARY KEY,
    created_date                  DATE DEFAULT current_date,
    last_update                   DATE DEFAULT current_date,
    created_by                    integer NOT NULL,
    updated_by                    integer NOT NULL,
    employee_skill_values         hstore
);

CREATE OR REPLACE FUNCTION skm_skills_manager__employee_skillset_insert(
                v_employee_id           integer,
                v_user              integer,
                v_skill_type_prefix         char(2),
                v_skill_type_id             integer,
                v_skill_level_confirmed         boolean,
                v_skill_level_confirmed_by      integer )
RETURNS boolean AS $$
BEGIN    

    Insert into skm_employee_skillset
        (employee_id ,
        created_date,
        last_update ,
        created_by,
        updated_by,
        employee_skill_values)
    VALUES
        (v_employee_id,
        DEFAULT,
        DEFAULT,
        v_user,
        v_user,
        hstore(ARRAY['skill_type_prefix','skill_type_id','skill_level_confirmed','skill_level_confirmed_by']
             , ARRAY[v_skill_type_prefix::TEXT,v_skill_type_id::TEXT,v_skill_level_confirmed::TEXT,v_skill_level_confirmed_by::TEXT]) );

    return TRUE; 
EXCEPTION
    when others then return FALSE;
end;
$$ language plpgsql;


select skm_skills_manager__employee_skillset_insert(4,2,'aa',4,true,2);

select * from skm_employee_skillset;



employee_id |created_date |last_update |created_by |updated_by |employee_skill_values                                                                                             |
------------|-------------|------------|-----------|-----------|------------------------------------------------------------------------------------------------------------------|
4           |2018-10-09   |2018-10-09  |2          |2          |"skill_type_id"=>"4", "skill_type_prefix"=>"aa", "skill_level_confirmed"=>"true", "skill_level_confirmed_by"=>"2" |
далее, как мне загрузить значения, если employee_skill_values ​​имеет значение hstore []? Извините, что я вредитель, но я добираюсь до цели.

— 
Gary
 10.10.2018 04:07
Я нашел способ, но по какой-то причине не могу скопировать его из pgadmin и пропустить его здесь ???? в основном я создаю переменную типа hstore и загружаю ее с помощью hstore (Array .... как указано выше, затем в значениях ARRAY [v_hstore] .... Спасибо за вашу помощь.

— 
Gary
 10.10.2018 05:43
кстати, прежде чем углубляться в hstore, я предлагаю вам проверить jsonb, у вас введено значение hstore is text-> text only

— 
cske
 10.10.2018 05:47
Еще раз спасибо, cske, сначала мне нужно обновить Postgresql. А пока каков будет эквивалентный синтаксис для типа JSON?

— 
Gary
 11.10.2018 10:41
Это то, что у меня есть (можно ли это сделать с помощью ARRAY, как указано выше) json = '{"skill_id": "' || v_skill_id || '",' || '"skill_details": {' || '"skill_level": "' || v_skill_level || '",' || '"skill_level_confirmed": "' || v_skill_level || '",' || '"skill_level_confirmed_by": "' || v_skill_level_confirmed_by || '"}}';

— 
Gary
 11.10.2018 17:00
@Gary будьте осторожны, json и jsonb разные, вы можете использовать jsonb_build_object

— 
cske
 11.10.2018 20:08
Еще раз спасибо, похоже, мне нужно обновить Postgresql, чтобы я мог воспользоваться преимуществами типов jasonb. Я новичок в этом типе вещей (пришел из мэйнфреймов), поэтому мне придется научиться обновлять свою рабочую станцию ​​VMware, поскольку именно там у меня установлены другие элементы нашего проекта.

— 
Gary
 12.10.2018 01:37
Спасибо за ваши усилия. Это отлично работает в json, как мне его переписать, чтобы использовать json_build_object? v_json = '{"skill_id": "' || v_skill_id || '",' || '"skill_details": {' || '"skill_level": "' || v_skill_level || '",' || '"skill_level_confirmed": "' || v_skill_level || '",' || '"skill_level_confirmed_by": "' || v_skill_level_confirmed_by || '"}}';

— 
Gary
 12.10.2018 04:31
Я не понимаю, является ли это допустимым содержимым поля JSON .... вывод уведомления о повышении ..... ({"skill_id": "aa000001", "skill_details": "skill_level": "5", " s‌ kill_level_confirmed‌ ":" 5 "," skill_level_c‌ onfirmed_by ":" 624 "}} ‌) Как мне извлечь значение skill_level как 5? Извиняюсь за упрощенный вопрос, похоже, я никуда не ухожу. Привет, Гэри. P.S. как сохранить это в формате?

— 
Gary
 13.10.2018 06:58
вы удвоили } в конце

— 
cske
 13.10.2018 06:59
Приношу свои извинения, я, должно быть, удалил '{' перед "skill_levels", пытаясь сохранить форматирование сообщения. v_json json; поднять уведомление '>>>> (%)', v_json; ВНИМАНИЕ: >>>> ({"skill_id": "aa000001", "skill_details": {"skill_level": "5", "‌ skill_level_confirme‌ d": "5", "skill_level_‌ Verified_by": "624" } ‌})

— 
Gary
 13.10.2018 09:02
Спасибо за вашу помощь. Отсутствующий '{' был лишь частью публикации здесь. Моя проблема все та же.

— 
Gary
 14.10.2018 01:30



Правильная техника соединения столов?
Вопросы
SQL
Правильная техника соединения столов?
Я пытаюсь получить значение NUMSESSION из таблицы members_benefit. Моя функция имеет идентификатор преимущества и идентификатор членства в качестве параметров, а members_benefit нужны оба этих значения, иначе она вернет несколько строк.

Вот суть функции

`CREATE OR REPLACE FUNCTION benefit_when(_benefitid integer, _membershipid 
 integer) RETURNS text AS $$
 DECLARE
     bfrec record;
 BEGIN
     if _membershipid is not null then
         select 
             benefit.*,
             membership_benefit.numsession as numsession
         from benefit 
             left join membershiptype on benefit.membershiptypeid=membershiptype.id
             left join membership_benefit on _membershipid = membership_benefit.membershipid
         where benefit.id=_benefitid
             AND (membership_benefit.membershipid is null or membership_benefit.membershipid = _membershipid);`
Значение numsession не возвращается правильно. Если я напечатаю значение двух параметров и просто запросю БД, он вернет правильный, но не в этой функции. Разрешено ли вам использовать переменную для присоединения, как я, и если нет, есть ли лучший способ получить число, которое я ищу, с двумя параметрами, которые у меня есть?

Заранее спасибо.

 24.10.2018 22:12
0
5
52
2
 Ответы 2
измените свой запрос:

select 
         benefit.*,
         membership_benefit.numsession as numsession
     from benefit 
         left join membershiptype on benefit.membershiptypeid=membershiptype.id
         left join membership_benefit on _membershipid = membership_benefit.membershipid
     where benefit.id=_benefitid
в это:
select benefit.*, membership_benefit.numsession as numsession from benefit left join membershiptype on benefit.membershiptypeid=membershiptype.id where benefit.id=_benefitid and _membershipid = membership_benefit.membershipid

 24.10.2018 22:22
Если вам просто нужен numsession, я не уверен, зачем вы выполняете внешнее соединение. Вы действительно этого хотите?

select mb.numsession
from membership_benefit mb
where mb.membershipid = _membershipid and
      mb.benefitid = _benefitid;
Если вам всегда нужна строка для выгоды, вместе с этой информацией:

select b.*, mb.numsession as numsession
from benefit b join
     membership_benefit mb
     on mb.benefitid = b.id and
        mb.membershipid = _membershipid and
        b.id =_benefitid
where b.id = _benefitid;
Я предполагаю, что вы хотите одну из этих двух вещей.

Разве предложение where во втором запросе не приведет к тому, что это будет внутреннее соединение?

— 
Andrew
 25.10.2018 00:08
@Эндрю . . . Хороший улов. Я действительно хотел внутреннее соединение.


Можно ли выполнить IF-условие в функции PL / pgSQL в PostgreSQL 9.4?
Вопросы
POSTGRESQL
Можно ли выполнить IF-условие в функции PL / pgSQL в PostgreSQL 9.4?
У меня есть такая рабочая функция:

DROP FUNCTION org_sbase2_func.mis_sjekk_lovlige_lmkolonner(integer);
CREATE OR REPLACE FUNCTION org_sbase2_func.mis_sjekk_lovlige_lmkolonner(livsm integer)
  RETURNS void AS
$BODY$
DECLARE
  feil text;
  lmrad RECORD;
  colname text;

BEGIN
  -- Test if all mandatory attributes exists
  -- For all rows
  FOR lmrad IN select * from org_sbase2_tmp.ban492lmpol_5_0_kurs where livsmiljo = livsm LOOP
    --For all columns in tmp
    FOR colname IN (select kol_navn from org_sbase2_func.mis_lovlige_kolonner_alle_lm UNION select kol_navn from org_sbase2_func.mis_lovlige_kolonner_lmX where livsmiljo = livsm) LOOP
      --If column exists in tmp and is not null, but the column is not mandatory: ERROR - value must be null
      IF colname IN (SELECT column_name from information_schema.columns WHERE table_schema LIKE 'org_sbase2_tmp' AND table_name LIKE 'ban492lmpol_5_0_kurs') 
         --and colname.value is not null) 
         AND colname in (select kol_navn from org_sbase2_func.mis_lovlige_kolonner_alle_lm UNION select kol_navn from org_sbase2_func.mis_lovlige_kolonner_lmX where livsmiljo != livsm)  THEN
        feil = 'Livsmiljø ' || lmrad.livsmiljo || ' and column ' || colname ||' must be empty, but has value.';
        PERFORM org_sbase2_func.mis_registrer_feil_pa_objekt('lmpol', lmrad.ogc_fid,'ban492',feil,'mis_sjekk_lovlige_lmkolonner');
      END IF;
    END LOOP;
  END LOOP;
  RAISE NOTICE 'Ferdig med mis_sjekk_lovlige_lmkolonner';
END;
$BODY$
  LANGUAGE plpgsql VOLATILE
  COST 100;
Запускаю функцию с select org_sbase2_func.mis_sjekk_lovlige_lmkolonner(2);

Оно работает. Однако мне нужно изменить его, так как мне нужно включить что-то вроде and lmrad.||colname|| is not null. Пробую с EXECUTE. В качестве начала (просто для проверки EXECUTE) я использую тот же код, что и выше (перед включением проверки нулевого значения конкретного столбца в строке), просто чтобы попытаться получить все `` правильные '':

DROP FUNCTION org_sbase2_func.mis_sjekk_lovlige_lmkolonner(integer);
CREATE OR REPLACE FUNCTION org_sbase2_func.mis_sjekk_lovlige_lmkolonner(livsm integer)
  RETURNS void AS
$BODY$
DECLARE
  feil text;
  lmrad RECORD;
  colname text;

BEGIN
  -- Test if all mandatory attributes exists
  -- For all rows
  FOR lmrad IN select * from org_sbase2_tmp.ban492lmpol_5_0_kurs where livsmiljo = livsm LOOP
    --For all columns in tmp
    FOR colname IN (select kol_navn from org_sbase2_func.mis_lovlige_kolonner_alle_lm UNION select kol_navn from org_sbase2_func.mis_lovlige_kolonner_lmX where livsmiljo = livsm) LOOP
      --If column exists in tmp and is not null, but the column is not mandator: ERROR - value must be null
      EXECUTE 'IF '||colname||' IN (SELECT column_name from information_schema.columns WHERE table_schema LIKE ''org_sbase2_tmp'' AND table_name LIKE ''ban492lmpol_5_0_kurs'') --and lmrad.'||colname||' is not null
         AND '||colname||' in (select kol_navn from org_sbase2_func.mis_lovlige_kolonner_alle_lm UNION select kol_navn from org_sbase2_func.mis_lovlige_kolonner_lmX where livsmiljo != livsm)  THEN
        feil = ''Livsmiljø '' || lmrad.livsmiljo || '' og kolonne '' || colname ||'' skulle vært tom, men har verdi'';
        PERFORM org_sbase2_func.mis_registrer_feil_pa_objekt(''lmpol'', lmrad.ogc_fid,''ban492'',feil,''mis_sjekk_lovlige_lmkolonner'');
      END IF;'; 
    END LOOP;
  END LOOP;
  RAISE NOTICE 'Ferdig med mis_sjekk_lovlige_lmkolonner';
END;
$BODY$
  LANGUAGE plpgsql VOLATILE
  COST 100;
Теперь при запуске select org_sbase2_func.mis_sjekk_lovlige_lmkolonner(2); выдает ошибку:

ERROR:  syntax error at or near "IF"
LINE 1: IF LDVLAUS302 IN (SELECT column_name from information_schema...
        ^
QUERY:  IF LDVLAUS302 IN (SELECT column_name from information_schema.columns WHERE table_schema LIKE 'org_sbase2_tmp' AND table_name LIKE 'ban492lmpol_5_0_kurs') --and lmrad.LDVLAUS302 is not null
         AND LDVLAUS302 in (select kol_navn from org_sbase2_func.mis_lovlige_kolonner_alle_lm UNION select kol_navn from org_sbase2_func.mis_lovlige_kolonner_lmX where livsmiljo != livsm)  THEN
        feil = 'Livsmiljø ' || lmrad.livsmiljo || ' og kolonne ' || colname ||' skulle vært tom, men har verdi';
        PERFORM org_sbase2_func.mis_registrer_feil_pa_objekt('lmpol', lmrad.ogc_fid,'ban492',feil,'mis_sjekk_lovlige_lmkolonner');
      END IF;
CONTEXT:  PL/pgSQL function org_sbase2_func.mis_sjekk_lovlige_lmkolonner(integer) line 15 at EXECUTE
Как я могу выполнить IF-условие - если это возможно?

 28.10.2018 16:03
0
2
534
2
Данный вопрос помечен как решенный
 Ответы 2
В postgres вообще нет оператора IF/THEN, кроме CASE/WHEN, как обычно, в SQL. Этот оператор задокументирован в главе 9.17. Условные выражения. Еще более удобным для вашего случая может быть использование COALESCE, который проверяет столбец на то, что он является нулевым, и в этом случае возвращает другой столбец, как описано в той же главе документации postgres.

 28.10.2018 16:55
 Ответ принят как подходящий
Благодаря комментариям @wildplasser и @ jens-vagts мне удалось переписать свои запросы и тесты в функции, чтобы она работала:

DROP FUNCTION org_sbase2_func.mis_sjekk_lovlige_lmkolonner(integer);
CREATE OR REPLACE FUNCTION org_sbase2_func.mis_sjekk_lovlige_lmkolonner(livsm integer)
  RETURNS void AS
$BODY$
DECLARE
  colname text;
  sporring text;
  feil text;
  i integer;

BEGIN
  --Hvis kolonna ikke fins i tmp, men kolonna er påkrevd (verdi er enten påkrevd eller opsjon): FEIL - egenskapen mangler
  --Test 1: Check if tmp table is missing mandatory columns (attributes) for livsmiljo X
  --For all columns in tmp
  FOR colname IN (SELECT kol_navn FROM org_sbase2_func.mis_lovlige_kolonner_alle_lm UNION SELECT kol_navn FROM org_sbase2_func.mis_lovlige_kolonner_lmX WHERE livsmiljo = livsm) LOOP
    IF colname NOT IN (SELECT column_name FROM information_schema.columns WHERE table_schema LIKE 'org_sbase2_tmp' AND table_name LIKE 'ban492lmpol_5_0_kurs') THEN
      RAISE NOTICE 'Test 1: Kolonne % mangler',colname;
      feil = 'Test 1: Kolonne som er påkrevd for livsmiljø '||livsm||' mangler: '||colname;
      PERFORM org_sbase2_func.mis_registrer_feil_pa_datasett('ban492',feil,'mis_sjekk_lovlige_lmkolonner');
    END IF;
  END LOOP;

  --Using a temporary table to store result from query, deletes the table if it exits before re-creating it
  DROP TABLE IF EXISTS org_sbase2_tmp.tmp_testresultat;
  CREATE UNLOGGED TABLE org_sbase2_tmp.tmp_testresultat (
    testres BOOLEAN
  );

  --Hvis kolonna fins i tmp og er ikke NULL, men kolonna er ikke påkrevd: FEIL - verdi skal være NULL
  --Test 3: Check that irrelevant columns (attributes) have no values (are null)
  --For all columns that doesn't matter for livsmiljo X
  FOR colname IN (SELECT column_name FROM information_schema.columns WHERE table_schema LIKE 'org_sbase2_tmp' AND table_name LIKE 'ban492lmpol_5_0_kurs' AND column_name NOT IN (SELECT kol_navn FROM org_sbase2_func.mis_lovlige_kolonner_alle_lm UNION SELECT kol_navn FROM org_sbase2_func.mis_lovlige_kolonner_lmX WHERE livsmiljo = livsm)) LOOP
    TRUNCATE org_sbase2_tmp.tmp_testresultat;
    sporring = 'INSERT INTO org_sbase2_tmp.tmp_testresultat SELECT '||colname||' is null FROM org_sbase2_tmp.ban492lmpol_5_0_kurs WHERE livsmiljo = '||livsm;
    EXECUTE sporring;
    SELECT count(1) FROM org_sbase2_tmp.tmp_testresultat WHERE testres = false INTO i;
    IF i > 0 THEN
      RAISE NOTICE 'Test 3: % %', i, colname;
      feil = 'Test 3: Kolonne som IKKE er relevant for livsmiljø '||livsm||' har verdi: '||colname;
      PERFORM org_sbase2_func.mis_registrer_feil_pa_datasett('ban492',feil,'mis_sjekk_lovlige_lmkolonner');
    END IF;
  END LOOP;

  RAISE NOTICE 'Ferdig med mis_sjekk_lovlige_lmkolonner';
END;
$BODY$
  LANGUAGE plpgsql VOLATILE
  COST 100;


Ссылка на столбец "id" неоднозначна - она ​​может относиться либо к переменной PL / pgSQL, либо к столбцу таблицы
Вопросы
POSTGRESQL
Ссылка на столбец "id" неоднозначна - она ​​может относиться либо к переменной PL / pgSQL, либо к столбцу таблицы
У меня есть эта простая тестовая функция в Postgres (в моей схеме test).

CREATE OR REPLACE FUNCTION test.func_001
(
par_id int
)
RETURNS TABLE
(
id int
)

AS
$BODY$
DECLARE

    var_id int;

BEGIN

    update test.item    --- this is a table 
    set 
    id = 4
    WHERE
    id = 44;

return query 
select 1000 as id;

END;
$BODY$
LANGUAGE  plpgsql;
В таблице test.item есть единственный столбец идентификаторов.

Я получаю указанную ниже ошибку при попытке запустить функцию.

Query execution failed

Reason:
SQL Error [42702]: ERROR: column reference "id" is ambiguous
  Detail: It could refer to either a PL/pgSQL variable or a table column.
  Where: PL/pgSQL function test.func_001(integer) line 8 at SQL statement
Эта ошибка кажется странной, означает ли это, что Postgres обнаруживает конфликт / конфликт между столбцом test.item.id и столбцом id из возвращенной таблицы ?! Как придешь? В этом нет никакого смысла.

Я не могу поверить в это, но я не вижу здесь других применений id.

Обратите внимание, что если я закомментирую только эту часть.

-- WHERE
-- id = 44;
потом вдруг функция работает нормально.

Кажется, что Постгрес путает идентификатор в том, где предложение с чем-то еще с именем id ?!

С чем?

Это совершенно нелогично и противоречит интуиции.

Может кто-нибудь объяснить?

 08.11.2018 10:29
0
2
2 073
2
Данный вопрос помечен как решенный
 Ответы 2
Существует конфликт имен между переменной id, которая определяется предложением RETURNS TABLE, и столбцом с тем же именем.

Подобные вещи вызывают проблемы во всех языках программирования, только PostgreSQL достаточно хорош, чтобы предупредить вас, а не делать что-то, что может быть не тем, что вы планировали.

Укажите ссылку на столбец следующим образом, чтобы устранить двусмысленность:

WHERE test.item.id = 44
 08.11.2018 10:43
 Ответ принят как подходящий
Пункт FUNCTION fx() RETURNS TABLE(x int, y int, ...) аналогичен пункту FUNCTION(OUT x int, OUT y int) RETURNS SETOF record. Итак, в вашем случае есть неявная переменная id, хотя вы не используете ее явно.

Дизайн PostgreSQL позволяет создавать строки без SQL.

CREATE OR REPLACE FUNCTION foo(a int)
RETURNS TABLE(b int, c int) AS $$
BEGIN
  FOR i IN 1..a
  LOOP
    b := i; c := i * 10;
    RETURN NEXT;
  END LOOP;
END;
$$ LANGUAGE plpgsql;
См., Пожалуйста, документ следующий.

There is another way to declare a function as returning a set, which is to use the syntax RETURNS TABLE(columns). This is equivalent to using one or more OUT parameters plus marking the function as returning SETOF record (or SETOF a single output parameter's type, as appropriate). This notation is specified in recent versions of the SQL standard, and thus may be more portable than using SETOF.


«ОШИБКА: недопустимое завершение транзакции» при попытке выполнить процедуру с вложенным контролем транзакции
Вопросы
POSTGRESQL
«ОШИБКА: недопустимое завершение транзакции» при попытке выполнить процедуру с вложенным контролем транзакции
Согласно документации (https://www.postgresql.org/docs/current/app-psql.html), даже если AUTOCOMMIT выключен, PSQL выдает неявный BEGIN непосредственно перед любой командой, которая еще не находится в блоке транзакции и сама не является BEGIN или другой командой управления транзакцией, или командой, которая не может выполняться внутри блока транзакции, такого как VACUUM. (К сожалению, CALL не обрабатывается так же, как VACCUM). И, согласно Шону Томасу (https://blog.2ndquadrant.com/pg-phriday-stored-procedures-postgres-11/), ошибка завершения недопустимой транзакции возникает из-за невозможности закрыть текущую транзакцию (в данном случае инициированную PSQL) изнутри процедуры. Я пробовал использовать все настройки PSQL, связанные с управлением транзакциями, но ошибка завершения недопустимой транзакции возникает со всеми из них; даже если файл команд, обрабатываемый PSQL, содержит только оператор CALL.

Я вызываю эту процедуру:

create or replace procedure producto$cargar_imagenes(_super$ bigint, _archivo$ character varying) as $$
declare
    _msg character varying;
    _log rastro_proceso%ROWTYPE;
begin
    perform rastro_proceso_temporal$insert(_super$);
    perform producto$cargar_imagenes$biz(_super$, _archivo$);
    if (_super$ is not null and _super$ > 0) then
        perform producto$cargar_imagenes$log(_super$, _archivo$);
    else
        perform tarea_usuario$private$update(6519204281880642486, null);
    end if;
    commit;
end;
$$ language plpgsql set search_path = public;
Он терпит неудачу в операторе commit; это работает, если я это прокомментирую.

 08.11.2018 20:21
4
4
10 033
2
 Ответы 2
Удалите пункт SET. За документация:

If a SET clause is attached to a procedure, then that procedure cannot execute transaction control statements (for example, COMMIT and ROLLBACK, depending on the language).

 08.11.2018 23:46
Похоже, что в pg11 (проверено в версии 11.6) у вас есть та же проблема, если вы включите предложение "SECURITY DEFINER" в определение процедуры. Итак, я предполагаю, что SECURITY DEFINER квалифицируется как предложение «SET».

Когда я удаляю SECURITY DEFINER, я могу включить оператор COMMIT в определение процедуры, не получая сообщения ERROR: недопустимое завершение транзакции в операторе COMMIT.

К сожалению, это ошибка времени выполнения, а НЕ ошибка компиляции.

Чтобы подтвердить свое подозрение: «Процедура SECURITY DEFINER не может выполнять операторы управления транзакциями» - postgresql.org/docs/current/sql-createprocedure.html

— 
W1M0R
 13.05.2020 22:15



Plpgsql возвращает составной тип с несколькими строками. Использование оператора select в качестве параметра IN для функции
Вопросы
ORACLE
Plpgsql возвращает составной тип с несколькими строками. Использование оператора select в качестве параметра IN для функции
Это вопрос из двух частей. В настоящее время я работаю над преобразованием некоторых функций Oracle в Postgres.

Я преобразовал приведенное ниже в postgres, но проблема в том, что он выводит только одну строку:

CREATE TYPE m_t_stts_ot AS (
id INTEGER,
name TEXT,
stts_nm TEXT,
stts_ds TEXT,
f_s_f CHARACTER(1),
t_ts TIMESTAMP WITHOUT TIME ZONE,
e_id INTEGER,
s_efctv_dt TIMESTAMP WITHOUT TIME ZONE,
m_s_id INTEGER,
m_d_o_fl CHARACTER(1)
);


CREATE OR REPLACE FUNCTION get_s_fn(IN in_cur integer[], IN in_ts TIMESTAMP WITHOUT TIME ZONE)
RETURNS SETOF m_t_stts_ot 
AS
$BODY$
DECLARE
    o_rec s_ot;
    v_id s_id%TYPE;
    rec record;

BEGIN
FOR rec IN       
        SELECT sr.*,
             mtsv.id,
             mtsv.name,
             mtsv.status ,
             mtsv.stts_ds ,
             mtsv.ts,
             coalesce(mtsv.ts,sr.crtd_dt),
             mtsv.e_dt,
             mtsv.ovrrd_fl
        FROM RAW sr
        LEFT JOIN (select * from get_task_stts_fn(ARRAY(SELECT distinct id
                                                        FROM prpty
                                                       WHERE value_nb in (select * from unnest(in_cur))
                                                         AND prpty_id in( 20017, 21021, 22017)), in_ts))mtsv
          ON ( sr.event_id = mtsv.event_id AND
               mtsv.f_stts_fl = 'Y'    AND
               mtsv.task_ts <= in_ts )
       WHERE sr.id in(select * from unnest(in_cur))        
         AND sr.crtd_dt <= cast(in_ts as date)
         AND ( mtsv.id is not null OR
               sr.event_id is null
             )
       ORDER BY ( case
                  when mtsv.id is not null then
                       task_ts
                  else
                       sr.crtd_dt
                  end ) asc


    LOOP
            IF ((o_rec).STTS_CD = 'A')
            THEN
                IF (((o_rec).c_cd IN ('E', 'R')) AND (rec.chng_ts > (o_rec).M_DT::DATE - INTERVAL '13 month') AND ((o_rec).ROLL_FL = 'Y')) THEN
                    o_rec.M_DT := (o_rec).M_DT::DATE + INTERVAL '12 month';

                    IF (o_rec).c_cd = 'R' THEN
                        o_rec.C_END_DT := (o_rec).M_DT::DATE - INTERVAL '12 month';
                    END IF;
                END IF;

                IF (((o_rec).c_cd NOT IN ('E', 'R')) AND (rec.chng_ts > (o_rec).M_DT::DATE - INTERVAL '7 month') AND ((o_rec).ROLL_FL = 'Y')) THEN
                    o_rec.M_DT :=(o_rec).M_DT::DATE + INTERVAL '12 month';
                END IF;

                IF (((o_rec).c_cd = 'E') AND (rec.chng_ts > (o_rec).M_DT::DATE - INTERVAL '12 month') AND ((o_rec).ROLL_FL = 'N')) THEN
                    o_rec.c_cd := 'DBT';
                END IF;
            END IF;

            IF ((rec.c_type_cd LIKE 'SUB%' AND rec.c_type_cd NOT LIKE '%-AMNDT%') OR (rec.event_id IS NULL AND rec.c_type_cd IS NULL)) THEN
                o_rec.s_id := rec.s_id;
                o_rec.c_nb := rec.c_nb;
                o_rec.f_nm := rec.f_nm;
                o_rec.f_c_nm := rec.f_c_nm;
                o_rec.f_c_e_tx := rec.f_c_e_tx;
                o_rec.f_c_t_t := rec.f_c_t_t;
                o_rec.f_a_t := rec.f_a_t;
                o_rec.f_c_nm := rec.f_c_nm;
                o_rec.f_s_c := rec.f_s_c;
                o_rec.f_z_t := rec.f_z_t;
                o_rec.g_s_t := rec.g_s_t;
                o_rec.p_a := rec.p_a;
                o_rec.a_b_a := rec.a_b_a;
                o_rec.e_dt := rec.e_dt;
                o_rec.M_DT := rec.M_DT;
                o_rec.t_nb := rec.t_nb;
                o_rec.i_t_cd := rec.i_t_cd;
                o_rec.i_r := rec.i_r;
                o_rec.i_r_tx := rec.i_r_tx;
                o_rec.i_f_tx := rec.i_f_tx;
                o_rec.c_cd := rec.c_cd;
                o_rec.s_t_cd := rec.s_t_cd;
                o_rec.s_s_cd := rec.s_s_cd;
                o_rec.ROLL_FL := rec.ROLL_FL;
                o_rec.C_END_DT := rec.C_END_DT;
                o_rec.f_m_s_l_fl := rec.f_m_s_l_fl;
                o_rec.p_p_p_fl := rec.p_p_p_fl;
                o_rec.a_m_o_e_fl := rec.a_m_o_e_fl;
                o_rec.e_tx := rec.e_tx;
                o_rec.e_l_fl := rec.e_l_fl;
                o_rec.r_u_u_fl := rec.r_u_u_fl;
                o_rec.r_p_fl := rec.r_p_fl;
                o_rec.n_o_n := rec.n_o_n;
                o_rec.n_a := rec.n_a;
                o_rec.n_s_d := rec.n_s_d;
                o_rec.n_f_t := rec.n_f_t;
                o_rec.a_m_o_e_fl := rec.a_m_o_e_fl;
                o_rec.e_tx := rec.e_tx;
                o_rec.s_a_i_a_fl := rec.s_a_i_a_fl;
                o_rec.l_r_t_a_m_fl := rec.l_r_t_a_m_fl;
                o_rec.d_o_fl := rec.d_o_fl;
                o_rec.o_c_nb := rec.o_c_nb;
                o_rec.d_cmt_tx := rec.d_cmt_tx;
                o_rec.f_cmt_tx := rec.f_cmt_tx;

                IF rec.name LIKE 'N L A' THEN
                    IF rec.stts LIKE 'S T F A' THEN
                        o_rec.s_s_cd := 'Approved';
                        o_rec.e_dt := COALESCE(rec.mrdt_sbl_efctv_dt::date, rec.task_ts::date);
                        o_rec.M_DT := (o_rec).e_dt + ((o_rec).t_nb::NUMERIC || ' days')::INTERVAL;
                        o_rec.d_o_fl := rec.m_d_o_fl;
                        IF (o_rec).c_cd = 'R' THEN
                            o_rec.C_END_DT := (o_rec).M_DT::DATE - INTERVAL '12 month';
                        END IF;
                    ELSIF rec.stts LIKE 'D' THEN
                        o_rec.s_s_cd := 'D';
                    ELSIF rec.stts LIKE 'W' THEN
                        o_rec.s_s_cd := 'W';
                    ELSIF rec.stts LIKE 'S C' THEN
                        o_rec.s_s_cd := 'C';
                    ELSE
                        o_rec.s_s_cd := 'S';
                    END IF;
                END IF;
            ELSIF ((rec.event_id IS NOT NULL AND rec.c_type_cd = 'S-R-A' AND rec.lfcyc_stts_ds = 'A') OR (rec.event_id IS NULL AND rec.c_type_cd = 'S-R-A'))
            THEN
                IF (rec.M_DT IS NOT NULL) THEN
                    o_rec.M_DT := rec.M_DT;
                     o_rec.t_nb :=  extract(epoch from age((o_rec).M_DT, (o_rec).e_dt))/3600;

                    IF (rec.ROLL_FL IS NOT NULL) THEN
                        o_rec.ROLL_FL := rec.ROLL_FL;
                    END IF;

                    IF (o_rec).c_cd = 'R' THEN
                        o_rec.C_END_DT := (o_rec).M_DT::DATE - INTERVAL '12 month';
                    END IF;
                END IF;

                IF (rec.i_t_cd IS NOT NULL) THEN
                    o_rec.i_t_cd := rec.i_t_cd;
                    o_rec.i_r := rec.i_r;
                    o_rec.i_r_tx := rec.i_r_tx;
                    o_rec.i_f_tx := rec.i_f_tx;
                END IF;
            ELSIF rec.event_id IS NULL
            THEN
                NULL;
            END IF;


        IF (o_rec).s_id IS NOT NULL
        THEN
            IF ((o_rec).s_s_cd = 'A')
            THEN
                IF (((o_rec).c_cd IN ('E', 'R')) AND (LEAST(current_date, (o_rec).M_DT::date) > (o_rec).M_DT::DATE - INTERVAL '13 month') AND ((o_rec).ROLL_FL = 'Y')) THEN
                    o_rec.M_DT := (o_rec).M_DT::DATE + INTERVAL '12 month';

                    IF (o_rec).c_cd = 'R' THEN
                        o_rec.C_END_DT := (o_rec).M_DT::DATE - INTERVAL '12 month';
                    END IF;
                END IF;

                IF (((o_rec).c_cd NOT IN ('E', 'R')) AND (LEAST(current_date, (o_rec).M_DT::date) > (o_rec).M_DT::DATE - INTERVAL '7 month') AND ((o_rec).ROLL_FL = 'Y')) THEN
                    o_rec.M_DT := (o_rec).M_DT::DATE + INTERVAL '12 month';
                END IF;

                IF (((o_rec).c_cd = 'E') AND (LEAST(current_date, (o_rec).M_DT::date) > (o_rec).M_DT::DATE - INTERVAL '12 month') AND ((o_rec).ROLL_FL = 'N')) THEN
                    o_rec.c_cd := 'DBT';
                END IF;
            END IF;

        END IF;
    END LOOP;        
    RETURN next o_rec;
END;
$BODY$
LANGUAGE  plpgsql;
Затем я вызываю функцию, используя:

select * from get_s_fn(ARRAY(select v_nb::integer from p where p_s_d_p_id in( 20017, 21021, 22017)), now()::timestamp);
Он работает нормально, но возвращает только 1 строку. Я хочу, чтобы он мог возвращать несколько строк. Я где-то читал, что составные типы берут только первую строку, а затем отбрасывают остальные, есть ли способ обойти это? Я ищу ответ, который не требует от меня слишком больших изменений, у меня есть много этих функций, которые мне нужно преобразовать, и я хочу изменить как можно меньше.

В следующей части я пытаюсь использовать оператор select с несколькими строками в качестве параметра IN для типа или курсора. Вот функция, которую я преобразовал (я не проверял, работает ли она на самом деле, потому что она не принимает несколько строк):

create type get_a_fn_type_in as(
s integer,
efctv_dt timestamp without time zone,
p_a float,
i_f_t text,
m_e_dt timestamp without time zone
);

CREATE OR REPLACE FUNCTION get_a_fn(in_cur get_a_fn_in[], IN in_ts TIMESTAMP WITHOUT TIME ZONE)
RETURNS SETOF s_p_n
AS
$BODY$
DECLARE
    o_rec s_p_o;
    v_s_id integer;
    v_i_f_t text;
    v_efctv_dt timestamp without time zone;
    v_p_a integer;
    v_m_e_dt timestamp without time zone;
    v_m_dt timestamp without time zone;
    v_i_r S_R.i_r%TYPE;
    v_i_t_cd text;
    v_a_a integer;
    v_a_d timestamp without time zone;
    rec record;
BEGIN
    LOOP
        select * from unnest(in_cur) INTO v_s_id, v_efctv_dt, v_p_a, v_i_f_t, v_m_e_dt;
        EXIT WHEN (NOT FOUND);


            SELECT
                MAX(p_dt)
                INTO STRICT v_a_d
                FROM s_p_r
                WHERE s_id = v_s_id AND pymnt_type_cd = 'I';

        v_a_d := (CASE
            WHEN v_a_d IS NULL THEN v_efctv_dt
            ELSE v_a_d
        END)::TIMESTAMP WITHOUT TIME ZONE;
        v_i_f_t := UPPER(SUBSTR(TRIM(v_i_f_t), 1, 1));

            v_m_dt := NULL;
            v_i_r := NULL;
            v_a_a := NULL;
            v_a_d := (CASE
                WHEN v_i_f_t = 'M' THEN v_a_d + INTERVAL '1 month'
                WHEN v_i_f_t = 'Q' THEN v_a_d + INTERVAL '3 months'
                WHEN v_i_f_t = 'S' THEN v_a_d + INTERVAL '6 months'
                WHEN v_i_f_t = 'A' THEN v_a_d + INTERVAL '12 months'
                WHEN v_i_f_t = 'D' THEN v_a_d + INTERVAL '1 days'
                ELSE NULL
            END)::TIMESTAMP WITHOUT TIME ZONE;

            BEGIN
              SELECT s_fn.mtrty_dt,
                                   s_fn.intrs_rt,
                                   s_fn.intrs_type_cd
                              INTO v_m_dt,
                                   v_i_r ,
                                   v_i_t_cd
                              FROM
                              (select * from get_s_fn((v_s_id), ci_ts))s_fn; 
                BEGIN
                END;
                EXCEPTION
                    WHEN others THEN
                        NULL;
            END;

            IF ((v_a_d <= v_m_dt - INTERVAL '12 months') AND (v_m_e_dt IS NULL OR v_a_d < v_m_e_dt) AND (v_a_d <= in_ts) AND (v_p_a > 0) AND (v_i_t_cd = 'F'))

            THEN
                v_a_a := ((v_p_a * v_i_r) /
                CASE
                    WHEN v_i_f_t = 'M' THEN 12
                    WHEN v_i_f_t = 'Q' THEN 4
                    WHEN v_i_f_t = 'S' THEN 2
                    WHEN v_i_f_t = 'A' THEN 1
                    WHEN v_i_f_t = 'D' THEN 365

                    ELSE NULL
                END)::NUMERIC;
                v_a_a := ROUND(v_a_a, 2);
            ELSE
                EXIT;

            END IF;


            IF (v_a_a > 0) THEN
                RETURN NEXT ARRAY[ROW (v_s_id, 'I', v_a_d, v_a_a, 'Accrual', v_a_d)::s_p_ot];
            END IF;
    END LOOP;
END;
$BODY$
LANGUAGE  plpgsql;
Я называю это, используя

select * from get_a_fn(ARRAY[(select row(id::integer, efctv_dt::timestamp, p_a::float, i_f_tx::text, m_dt::timestamp) from s_raw)]::get_a_fn_type_in[], current_timestamp::timestamp)
И я получаю сообщение об ошибке ERROR: cannot cast type record to get_a_fn_type_in. Проблема аналогична описанной выше, за исключением того, что я хочу использовать несколько строк для файла in.

В обоих случаях я изучал использование курсоров, но я не слишком знаком с ними. Кроме того, для примеров функций, которые использовали курсоры, все они использовали курсор с оператором select внутри фактической функции, тогда как я хочу передать курсор в качестве параметра. Опять же, я хочу изменить как можно меньше, потому что есть много функций, которые мне нужно преобразовать, которые следуют аналогичному шаблону. Я где-то читал о создании временной таблицы для хранения значений, но это не то, что я могу сделать, если это не может быть выполнено каким-либо образом внутри функции. Функция должна работать из простого выбора * из функции (a, b);

 08.11.2018 22:26
0
0
119
2
Данный вопрос помечен как решенный
 Ответы 2
Ваша процедура довольно длинная и плохо читается - и проблема, вероятно, связана с плохой структурой. Строка создается командой RETURN NEXT. Когда я читаю первый пример, эта команда выполняется только один раз, потому что она находится вне тела цикла. Увидеть конец вашей функции

    END LOOP;        
    RETURN next o_rec;
END;
$BODY$
LANGUAGE  plpgsql;
Некоторые примечания. Использование бесполезных скобок - это плохо, и читаемость кода хуже.

   IF (o_rec).s_id IS NOT NULL
   THEN
        IF ((o_rec).s_s_cd = 'A')
        THEN
Просто пиши

   IF o_rec.s_id IS NOT NULL
   THEN
        IF o_rec.s_s_cd = 'A'
        THEN
Второй пример - линии

 LOOP
        select * from unnest(in_cur) INTO v_s_id, v_efctv_dt, v_p_a, v_i_f_t, v_m_e_dt;
        EXIT WHEN (NOT FOUND);
не имеет никакого смысла. Если вы хотите перебрать массив, используйте оператор FOREACH IN ARRAY. Сообщение об ошибке «не удается преобразовать запись типа в get_a_fn_type_in» - вероятно, вам следует сначала преобразовать в get_a_fn_type_in, а затем построить массив. Приведение к get_a_fn_type_in [] выходит за рамки возможностей PostgreSQL (или, возможно, у вас неправильное количество столбцов, типов).

Запрос select * from get_a_fn(ARRAY[(select row(id::integer, efctv_dt::timestamp, p_a::float, i_f_tx::text, m_dt::timestamp) from s_raw)]::get_a_fn_type_in[], current_timestamp::timestamp)

Я создал функцию fx(get_a_fn_type_in[]) и таблицу foo с необходимыми столбцами:

postgres=# select fx(ARRAY[(select row(id::integer, efctv_dt::timestamp, p_a::float, i_f_tx::text, m_dt::timestamp) from foo)]::get_a_fn_type_in[]);
ERROR:  cannot cast type record to get_a_fn_type_in
LINE 1: select fx(ARRAY[(select row(id::integer, efctv_dt::timestamp...
                    ^
Итак, я переместил кастинг во вложенный выбор, и теперь все в порядке:

postgres=# select fx(ARRAY[(select row(id, efctv_dt, p_a, i_f_tx, m_dt)::get_a_fn_type_in from foo)]);
┌────┐
│ fx │
╞════╡
│    │
└────┘
(1 row)
 09.11.2018 10:37
 Ответ принят как подходящий
В итоге я превратил ввод в строку и заставил мою функцию принять строку, а затем выполнить ее.

так:

select * from function_ex('select 1', current_timestamp::timestamp);
затем внутри функции, которую я сделал

execute in_cur


Выполнить SELECT с динамическим выражением ORDER BY внутри функции
Вопросы
POSTGRESQL
Выполнить SELECT с динамическим выражением ORDER BY внутри функции
Я пытаюсь ВЫПОЛНИТЬ некоторые SELECT для использования внутри функции, мой код выглядит примерно так:

DECLARE
result_one record;

BEGIN 
    EXECUTE 'WITH Q1 AS 
        (
            SELECT id
            FROM table_two
            INNER JOINs, WHERE, etc, ORDER BY... DESC
        )

        SELECT Q1.id
        FROM Q1 
        WHERE, ORDER BY...DESC';

RETURN final_result;
END;    
Я знаю, как это сделать в MySQL, но в PostgreSQL у меня ничего не получается. Что мне следует изменить или как мне это сделать?

 12.11.2018 16:24
0
4
905
2
 Ответы 2
Чтобы функция могла возвращать несколько строк, она должна быть объявлена ​​как returns table() (или returns setof).

И чтобы действительно вернуть результат из функции PL / pgSQL, вам нужно использовать return query (как задокументировано в руководстве)

Для построения динамического SQL в Postgres настоятельно рекомендуется использовать функцию format(), чтобы правильно работать с идентификаторами (и упростить чтение исходного кода).

Итак, вам нужно что-то вроде:

create or replace function get_data(p_sort_column text)
  returns table (id integer)
as
$$
begin
  return query execute 
    format(
     'with q1 as (
           select id
           from table_two
             join table_three on ...
         )
         select q1.id
         from q1
         order by %I desc', p_sort_column);
end;
$$
language plpgsql;
Обратите внимание, что order by внутри CTE в значительной степени бесполезен, если вы сортируете окончательный запрос, если вы не используете LIMIT или distinct on () внутри запроса.

Вы можете упростить себе жизнь, если воспользуетесь другим уровнем долларовой квоты для динамического SQL:

create or replace function get_data(p_sort_column text)
  returns table (id integer)
as
$$
begin
  return query execute 
    format(
     $query$ 
       with q1 as (
           select id
           from table_two
             join table_three on ...
         )
         select q1.id
         from q1
         order by %I desc
     $query$, p_sort_column);
end;
$$
language plpgsql;
 12.11.2018 16:45
Что сказал a_horse. И:

Как вернуть результат SELECT внутри функции в PostgreSQL?
Плюс, чтобы динамически выбирать столбец для ORDER BY, вы должны добавить этот столбец в список SELECT вашего CTE, что приведет к осложнениям, если столбец может быть продублирован (например, с передачей 'id') ...

А еще лучше, полностью удалить CTE. В любом случае в вашем вопросе нет ничего, что могло бы гарантировать его использование. (Используйте CTE только при нужный в Postgres, они обычно медленнее, чем эквивалентные подзапросы или простые запросы.)

CREATE OR REPLACE FUNCTION get_data(p_sort_column text)
  RETURNS TABLE (id integer) AS
$func$
BEGIN
RETURN QUERY EXECUTE format(
   $q$ 
   SELECT t2.id  -- assuming you meant t2?
   FROM   table_two   t2
   JOIN   table_three t3 on ...
   ORDER  BY t2.%I DESC NULL LAST  -- see below!
   $q$, $1);
END
$func$  LANGUAGE plpgsql;
Я добавил NULLS LAST - вы, вероятно, тоже захотите этого:

PostgreSQL сортирует по дате и времени asc, сначала null?
Если p_sort_column все время находится из одной и той же таблицы, жестко закодируйте имя / псевдоним этой таблицы в предложении ORDER BY. В противном случае передайте имя / псевдоним таблицы по отдельности и автоматически закажите их отдельно, чтобы быть в безопасности:

Определить имена таблиц и столбцов в качестве аргументов в функции plpgsql?
Я предлагаю квалифицировать все имена столбцов в более крупном запросе с несколькими объединениями (t2.id, а не только id). Избегает различного рода неожиданных результатов / недоразумений / злоупотреблений.

И вы можете захотеть квалифицировать схему имен ваших таблиц (myschema.table_two), чтобы избежать подобных проблем при вызове функции с другим search_path:

Как search_path влияет на разрешение идентификатора и "текущую схему"


EXTRACT INTO с несколькими строками (PostgreSQL)
Вопросы
POSTGRESQL
EXTRACT INTO с несколькими строками (PostgreSQL)
это моя функция:

CREATE OR REPLACE FUNCTION SANDBOX.DAILYVERIFY_DATE(TABLE_NAME regclass, DATE_DIFF INTEGER)
    RETURNS void AS $$
 DECLARE
RESULT BOOLEAN;
DATE DATE;
 BEGIN
      EXECUTE 'SELECT VORHANDENES_DATUM AS DATE, CASE WHEN DATUM IS NULL THEN FALSE ELSE TRUE END AS UPDATED FROM
      (SELECT DISTINCT DATE VORHANDENES_DATUM FROM ' || TABLE_NAME ||
       ' WHERE DATE > CURRENT_DATE -14-'||DATE_DIFF|| '  
       ) A
 RIGHT JOIN
          (
  WITH compras AS (
    SELECT ( NOW() + (s::TEXT || '' day'')::INTERVAL )::TIMESTAMP(0) AS DATUM
    FROM generate_series(-14, -1, 1) AS s
)
SELECT DATUM::DATE
FROM compras)
              B
          ON DATUM = VORHANDENES_DATUM'
     INTO date,result;
        RAISE NOTICE '%', result;
      INSERT INTO SANDBOX.UPDATED_TODAY VALUES (TABLE_NAME, DATE, RESULT);
    END;
    $$ LANGUAGE plpgsql;
Предполагается загрузить строки в таблицу SANDBOX.UPDATED_TODAY, которая содержит имя таблицы, date и boolean. boolean показывает, была ли запись для этой даты в таблице. Вся часть, которая находится внутри EXECUTE ... INTO, работает нормально и дает мне те дни.

тем не мение, этот код вставляет только первую строку результата запроса. Я хочу, чтобы были вставлены все 14 строк. Очевидно, мне нужно преобразовать его в нечто вроде цикла или что-то совершенно другое, но как именно это будет работать?

Боковое примечание: я удалил некоторые ненужные части, касающиеся этих двух параметров, которые вы видите. Это не имеет никакого отношения к этому.

 29.11.2018 17:21
0
3
203
2
Данный вопрос помечен как решенный
 Ответы 2
 Ответ принят как подходящий
Поместите оператор INSERT в EXECUTE. Вам не нужен результат SELECT ни для чего, кроме его вставки в эту таблицу, верно? Так что просто вставьте его прямо как часть того же запроса:

CREATE OR REPLACE FUNCTION SANDBOX.DAILYVERIFY_DATE(TABLE_NAME regclass, DATE_DIFF INTEGER)
    RETURNS void AS 
$$
BEGIN
    EXECUTE
        'INSERT INTO SANDBOX.UPDATED_TODAY
        SELECT ' || QUOTE_LITERAL(TABLE_NAME) || ', VORHANDENES_DATUM, CASE WHEN DATUM IS NULL THEN FALSE ELSE TRUE END
        FROM (
            SELECT DISTINCT DATE VORHANDENES_DATUM FROM ' || TABLE_NAME ||
            ' WHERE DATE > CURRENT_DATE -14-'||DATE_DIFF|| '  
        ) A
        RIGHT JOIN (
            WITH compras AS (
                SELECT ( NOW() + (s::TEXT || '' day'')::INTERVAL )::TIMESTAMP(0) AS DATUM
                FROM generate_series(-14, -1, 1) AS s
            )
            SELECT DATUM::DATE
            FROM compras
        ) B
            ON DATUM = VORHANDENES_DATUM';
END;
    $$ LANGUAGE plpgsql;
 29.11.2018 18:16
Идиоматический способ перебирать результаты динамического запроса был бы

FOR date, result IN
   EXECUTE 'SELECT ...'
LOOP
   INSERT INTO ...
END LOOP;


Как проверить, является ли данный текстовый столбец допустимым oid
Вопросы
POSTGRESQL
Как проверить, является ли данный текстовый столбец допустимым oid
В PL / pgSQL у меня есть столбец, который может содержать или не содержать oid. Мне нужно определить, есть это или нет.

На данный момент делаю так:

  select oidtext from t into x where name = fname;
  if found then
    begin
        select x::oid into looid;
    exception
        when SQLSTATE '22P02' then -- invalid oid    
           null;
но это кажется немного взломанным. Есть ли положительный тест, т.е. «является ли этот текстовый столбец допустимым типом x» или «это допустимое приведение»?

 05.12.2018 00:16
2
5
345
2
 Ответы 2
Кажется, что единственный способ - поймать исключение, но вы можете сделать это с помощью удобной функции вроде этой:

create or replace function oid_or_null(text)
returns oid language plpgsql immutable as $$
begin
    return $1::oid;
exception when invalid_text_representation then
    return null;
end $$;

select oid_or_null('123'), oid_or_null('abc');

 oid_or_null | oid_or_null 
-------------+-------------
         123 |            
(1 row) 
Вы можете создать более общую логическую функцию:

create or replace function is_valid_cast(text, text)
returns boolean language plpgsql immutable as $$
begin
    execute format('select %L::%I', $1, $2);
    return true;
exception when others then
    return false;
end $$;

select 
    is_valid_cast('123', 'oid') as oid, is_valid_cast('abc', 'oid') as not_oid,
    is_valid_cast('2018-10-10', 'date') as date, is_valid_cast('2018-20-20', 'date') as not_date;

 oid | not_oid | date | not_date 
-----+---------+------+----------
 t   | f       | t    | f
(1 row)     
 05.12.2018 01:26
Мое решение не требует фиксации ошибок:

CREATE FUNCTION is_oid(text) RETURNS boolean
   LANGUAGE sql IMMUTABLE STRICT AS
$$SELECT CASE WHEN trim(leading '0' from $1) ~ '^\d{1,10}$'
              THEN $1::bigint BETWEEN 0 AND 4294967295
              ELSE FALSE
         END$$;
oid - это 4-байтовое целое число без знака, поэтому оно должно состоять не более чем из 10 цифр и находиться в диапазоне от 0 до 4294967295.

Я думал о подобном подходе, но такой разбор может быть немного неточным, например '01234567890'::oid действителен.

— 
klin
 05.12.2018 08:43
Я не думал об этом; фиксированный.

— 
Laurenz Albe
 05.12.2018 10:00
Дело в том, что нет встроенных универсальных функций trycast или istype. Я буду придерживаться своего метода, основанного на исключениях, тогда

— 
pm100
 05.12.2018 18:29
Или CASE WHEN $1 ~ '^0*\d{1,10}$' ... THEN $1::bigint < 4294967296 ...

— 
Erwin Brandstetter
 07.12.2018 20:33



Как запустить функцию postgresql (при запуске отображается ошибка)
Вопросы
POSTGRESQL
Как запустить функцию postgresql (при запуске отображается ошибка)
Я создал такую ​​функцию Postgresql. И пробовал разные способы запустить его, как указано в этом вопросе. Ни одной работы.

CREATE OR REPLACE FUNCTION func_update_count(
  updateType text,
  userid     text
)
  RETURNS integer AS $$
DECLARE
    _qry char(1024);
    l_rows integer;
BEGIN
    RAISE NOTICE 'Running ++';
    IF updateType = '+' THEN
        RAISE NOTICE 'Running ++';
        UPDATE user_account SET tptcount = tptcount + 1 WHERE useridcode = '@userid';
    ELSIF updateTYpe = '-' THEN
        RAISE NOTICE 'Running --';
        UPDATE user_account SET tptcount = tptcount - 1 WHERE useridcode = '@userid';
    ELSE
        RAISE NOTICE 'Not running any';
    END IF;

    GET DIAGNOSTICS l_rows = ROW_COUNT; 
    RETURN l_rows;  
END;
$$
LANGUAGE 'plpgsql';
Пытался выполнить такую ​​функцию:

Успешно работает:

UPDATE user_account SET tptcount = tptcount + 1 WHERE useridcode = 'chris_32'; 
=====

Увидеть ошибку: ERROR: prepared statement "func_update_count" does not exist для запроса ниже.

EXECUTE func_update_count("+", "chris_32"); -- Does not work
=====

Увидеть ошибку: ERROR: column "+" does not exist LINE 1: SELECT func_update_count("+", "chris_32"); -- Does not work для запроса ниже

SELECT func_update_count("+", "chris_32"); -- Does not work
 09.12.2018 23:19
0
1
37
2
Данный вопрос помечен как решенный
 Ответы 2
В PostgreSQL значения в двойных кавычках интерпретируются как ссылки на столбцы, а не как строковые литералы. Таким образом:

SELECT func_update_count("+", "chris_32"); 
 --pulls values from the column named + and column named chris_32
Вероятно, должно быть:

SELECT func_update_count('+', 'chris_32'); 
 09.12.2018 23:32
 Ответ принят как подходящий
Seeing error: ERROR: prepared statement "func_update_count" does not exist for below query.

EXECUTE используется для выполнения подготовленных операторов, а не для запуска функций postgresql. См. ВЫПОЛНЯТЬ в руководстве.

Вы могли бы выполнить функцию, вызвав ее из запроса (согласно вашей второй попытке).

Seeing error: ERROR: column "+" does not exist

Двойные кавычки " используются для заключения идентификаторов в кавычки, если в них есть пробелы (например, "my column"), или для сохранения регистра (например, "MyColumn").

См. Синтаксис для идентификаторов и ключевых слов.

Одинарные кавычки (') могут использоваться для строковых литералов, а также для других стилей - см. Константы в руководстве.


Postgresql обновляет определенные поля на основе значения (триггера)
Вопросы
SQL
Postgresql обновляет определенные поля на основе значения (триггера)
Я пишу триггер в Postgresql для динамического обновления содержимого определенных столбцов таблица доходов на основе вставок в стол для консультаций. [редактировать] Вот как выглядят мои столы

SELECT * FROM psy_revenues;
id | owner_id | January | February | March | April | etc | etc
---+----------+---------+----------+-------+-------+-----+----
2  | 1        |0        | 0        | 0     | 0     |     |

SELECT * FROM psy_consultations;
id | first_name | last_name |        date                 | payed | owner_id
---+------------+-----------+-----------------------------+-------+---------
3  | Gérard     | Bouchard  |2018-12-05 04:49:26.064397+01| 80    |1
4  | Pasti      | Lami      |2018-12-05 23:23:52.454849+01| 60    |2
Я ищу простое решение для УСТАНОВКИ только столбца (месяца), соответствующего метке времени НОВОЙ строки, добавленной в консультации. Достаточно легко получить название месяца на основе временных меток в psql: to_char (2018-12-05 04: 42: 11.66867 + 01, 'Месяц') ==> Декабрь.

[проблема] Однако я не знаю, как использовать это, чтобы указать, какой столбец psql следует обновить. Вот общее представление о том, что я ищу. Основная проблема в том, что я использую ценность для обозначения поле (см. Строку SET). Есть ли обходной путь, чтобы я мог напрямую выбрать соответствующее поле? (Я пробовал несколько вещей, но мне это не удалось)

CREATE OR REPLACE FUNCTION update_revenues()
RETURNS trigger AS
$BODY$
BEGIN
    UPDATE psy_revenues
    SET to_char(NEW.date, 'Month') = (
        SELECT SUM(payed) 
        FROM psy_consultations
        WHERE (
            owner_id = NEW.owner_id 
            AND to_char(date, 'Month')=to_char(NEW.date, 'Month')
        )
    );

RETURN NEW;
END;
$BODY$ LANGUAGE plpgsql;

CREATE TRIGGER update_revenues
AFTER INSERT 
ON psy_consultations
FOR EACH ROW 
EXECUTE PROCEDURE update_revenues();
 17.12.2018 01:30
0
0
128
2
Данный вопрос помечен как решенный
 Ответы 2
Вам необходимо использовать динамический sql из своей триггерной функции: сгенерируйте строку, содержащую правильный код SQL, и используйте ключевое слово EXECUTE для ее запуска.

Следующий код должен помочь:

CREATE OR REPLACE FUNCTION update_revenues()
RETURNS trigger AS
$BODY$
    DECLARE 
        new_month text;
        new_owner_id integer;
    BEGIN
        new_month    := to_char(NEW.date, 'Month');
        new_owner_id := NEW.owner_id;
        EXECUTE 
            'UPDATE psy_revenues 
            SET ' || new_month || ' = (
                SELECT SUM(payed) FROM psy_consultations 
                WHERE (
                    owner_id = ' || new_owner_id || ' 
                    AND to_char(date, ''Month'') = ' || new_month || '
                )
            )';

    RETURN NEW;
    END;
$BODY$ LANGUAGE plpgsql;
 17.12.2018 02:06
 Ответ принят как подходящий
Вам следует использовать динамический SQL. Избегайте конкатенации, чтобы избежать внедрения SQL, используйте функцию format и позиционные аргументы.

CREATE OR REPLACE FUNCTION update_revenues()
RETURNS trigger AS
$BODY$
    DECLARE 
    BEGIN
        EXECUTE format (
            'UPDATE psy_revenues 
              SET  %I = (
                SELECT SUM(payed) FROM psy_consultations WHERE 
                    owner_id =  $1 AND to_char(date, ''MM-YYYY'') = $2 
                    )'
             ,to_char(NEW.date, 'FMMonth') )      --column name to update(%I)
 USING NEW.owner_id , to_char(NEW.date, 'MM-YYYY');--values for owner_id & month
    RETURN NEW;
    END;
$BODY$ LANGUAGE plpgsql;
РЕДАКТИРОВАТЬ: Кажется, TO_CHAR() заполняет пробелы для строки месяца, я добавил модификатор FM (как предложил @horse), чтобы удалить его.

Видеть это:

knayak=# select '|'||to_char(current_date,'Month')||'|' as mon ;
     mon
-------------
 |December |
(1 row)
Демо

ОШИБКА: «Декабрь» не существует для «psy_revenue» СТРОКА 2: НАБОР «Декабрь» = (

— 
zar3bski
 17.12.2018 12:42
Похоже, декабрь по-прежнему считается str, а не именем поля

— 
zar3bski
 17.12.2018 12:42
@DavidZarebski: Проблема не в этом. Я изменил его на «месяц» вместо «Месяц», проверить сейчас? Надеюсь, ваши столбцы месяцев не созданы с другим регистром (с использованием кавычек)?

— 
Kaushik Nayak
 17.12.2018 12:45
та же проблема. Мои имена столбцов - январь, февраль и т.д. Помимо SELECT * FROM psy_revenue; , как я могу быть уверен в том, как были сгенерированы имена моих столбцов?

— 
zar3bski
 17.12.2018 12:55
@DavidZarebski: Отредактируйте свой вопрос и покажите нам определение вашей таблицы как для задействованных таблиц, так и для некоторых примеров данных для каждой из них. Трудно сказать, не проверив сам.

— 
Kaushik Nayak
 17.12.2018 12:59
Выполнено. Это так странно. Имена совпадают, но как будто, как бы я ни старался, я не мог использовать строки для обозначения имен полей (я говорю это в очень приятном смысле)

— 
zar3bski
 17.12.2018 13:45
@DavidZarebski: Проверьте сейчас. Я изменил ваш код триггера и добавил пример, чтобы показать, что было не так. Теперь он работает, как ожидалось, проверьте демо-ссылку.

— 
Kaushik Nayak
 17.12.2018 14:09
Нет необходимости в trim (). Используйте модификатор FM, чтобы избавиться от пробелов: to_char(current_date,'FMMonth')

— 
a_horse_with_no_name
 17.12.2018 14:13
@a_horse_with_no_name: Спасибо !!

— 
Kaushik Nayak
 17.12.2018 14:16



Перед вставкой триггера для замены новых данных postgres
Вопросы
POSTGRESQL
Перед вставкой триггера для замены новых данных postgres
У меня есть таблица с двумя столбцами данных: col1 и col2. Col1 - текстовое поле, col2 - время. Col1 является обязательным, col2 - нет, поэтому он должен иметь значение по умолчанию null. Я использую pgAdmin, который для меня совершенно новый, как и sql-триггер. У меня есть следующий код функции триггера:

CREATE OR REPLACE FUNCTION schema.table_replace()
  RETURNS trigger AS
  LANGUAGE 'plpgsql';
$BODY$
BEGIN
    (CASE
        WHEN NEW.col1='111' THEN NEW.col1='aaa'
        WHEN NEW.col1='222' THEN NEW.col1='bbb'
        WHEN NEW.col1='333' THEN NEW.col1='ccc'
        ELSE NEW.col1='error'
    END);
return NEW;
END;
$BODY$
И это может быть триггер до (должны быть затронуты только текущие значения, а не все строки):

CREATE TRIGGER schema.table_replace
  BEFORE INSERT
  ON schema.table
  EXECUTE PROCEDURE schema.table_replace();
По правде говоря, я ничего не знаю о pgAdmin, это кажется намного сложнее, чем написать код и запустить его с помощью инструмента запросов. Проблема состоит в том, чтобы обработать случай, когда нет второго значения (это необязательно), и в этом случае столбец 2 строки должен быть оставлен нетронутым, и код SQL также возвращает ошибки. Не могли бы вы помочь запустить его и создать функцию и триггер? Спасибо.

 30.12.2018 01:22
0
0
6 117
2
Данный вопрос помечен как решенный
 Ответы 2
 Ответ принят как подходящий
CASE как структура управления закрывается с помощью END CASE (тогда как выражение закрывается только с помощью END). А в ветках есть утверждения, их нужно заканчивать точкой с запятой.

Ваш LANGUAGE тоже потерян. Это принадлежит концу. И вам не нужны одинарные кавычки.

Вы можете использовать IF только для замены, когда col2 не равен нулю.

CREATE OR REPLACE FUNCTION schema.table_replace()
                           RETURNS trigger AS
$BODY$
BEGIN
  IF NEW.col2 IS NOT NULL THEN
    CASE
      WHEN NEW.col1 = '111' THEN
        NEW.col1 = 'aaa';
      WHEN NEW.col1 = '222' THEN
        NEW.col1 = 'bbb';
      WHEN NEW.col1 = '333' THEN
        NEW.col1 = 'ccc';
      ELSE
        NEW.col1 = 'error';
    END CASE;
  END IF;

  RETURN NEW;
END;
$BODY$
LANGUAGE plpgsql;
Вам также необходимо объявить триггер как триггер FOR EACH ROW, чтобы NEW работал.

И имя триггера не может быть уточнено схемой.

CREATE TRIGGER table_replace
               BEFORE INSERT
               ON schema.table
               FOR EACH ROW
               EXECUTE PROCEDURE schema.table_replace();
 30.12.2018 01:43
Основная проблема вашего примера - отсутствие предложения FOR EACH ROW в вашем операторе CREATE TRIGGER. Без этого предложения созданный триггер является триггером оператора с другим поведением. Ваша задача может быть решена с помощью SQL-оператора CASE.

CREATE OR REPLACE FUNCTION schema.table_replace()
RETURNS trigger AS
LANGUAGE 'plpgsql';
$BODY$
BEGIN
  IF NEW.col2 NOT NULL THEN
    NEW.col1 := CASE NEW.col1
                     WHEN '111' THEN 'aaa'
                     WHEN '222' THEN 'bbb'
                     WHEN '333' THEN 'ccc'
                     ELSE 'error' END CASE;
  END IF;
  RETURN NEW;
END;
$BODY$
RETURN NEW меня выручил !!!

— 
EvgenyKolyakov
 26.11.2021 19:47



Nestjs/GraphQL — Playground возвращает нулевую ошибку для запроса. Мои резольверы?
Вопросы
GRAPHQL
Nestjs/GraphQL — Playground возвращает нулевую ошибку для запроса. Мои резольверы?
Playground в моем браузере хорошо показывает созданную Nestjs схему, но запросы возвращаются null. Что-то не так с моим кодом?

"errors": [
    {
      "message": "Cannot return null for non-nullable field Query.getUsers.",
      "locations": [
        {
          "line": 2,
          "column": 3
    }
Это означает, что данные не найдены.

схема.graphql:

type UsersGQL {
    User_id: ID!
    first_name: String!
    last_name: String!
    main_skill_title: String!
    user_name: String!
    ....
}

type Query {
    getUser(user_id: ID!): UsersGQL!
    getUsers: [UsersGQL!]!
}
Компилируется в Nestjs с GraphQL в graphql.schema.ts

export class UsersGQL {
    user_id: string;
    first_name: string;
    last_name: string;
    main_skill_title: string;
    user_name: string;
    ...
}

export abstract class IQuery {
    abstract getUser(user_id: string): UsersGQL | Promise<UsersGQL>;

    abstract getUsers(): UsersGQL[] | Promise<UsersGQL[]>;

    abstract temp__(): boolean | Promise<boolean>;
}
пользователи.resolvers.ts

import { Query, Resolver } from '@nestjs/graphql';
import { UsersService } from './users.service';

import { UsersGQL } from '../graphql.schema';
// import { UsersDTO } from './users.dto';


@Resolver('UsersGQL')
export class UsersResolvers {
  constructor(
    private readonly userService: UsersService
  ) {}

  @Query()
  async getUsers() {
    return await this.userService.findAll();
  }
}
Служба отлично работает для моего REST API Nestjs. БД это Постгрес.

пользователи.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getManager, getRepository } from 'typeorm';
import { Members } from './members.entity';

@Injectable()
export class UsersService {

  private entityManager = getManager();

  constructor(
    @InjectRepository(Users)
    private readonly usersRepository: Repository<Users>
  ) {}

  async findAll(): Promise<Users[]> {
    return await this.usersRepository.find();
  }
}
Запрос на игровую площадку:

{
  getUsers {
    first_name
    last_name
  }
}
Ошибка возвращается в Playground:

{
  "errors": [
    {
      "message": "Cannot return null for non-nullable field Query.getUsers.",
      "locations": [
        {
          "line": 2,
          "column": 3
        }
      ],
      "path": [
        "getUsers"
      ],
      "extensions": {
        "code": "INTERNAL_SERVER_ERROR",
        "exception": {
          "stacktrace": [
             ...
  ],
  "data": null
}
Изменить — добавлены users.module.ts, app.module.ts и ormconfig.json. Весь этот модуль загружен лениво. REST и GraphQL находятся рядом в модуле. Я также разделил компоненты REST и GQL.

пользователи.module.ts

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

// REST
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { Users } from './users.entity';

// GraphQL
import { UsersResolvers } from './users.resolvers';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Users
      ]),
  ],
  providers: [
    UsersService,
    UsersResolvers
  ],
  controllers: [UsersController],
})

export class UsersModule {}
app.module.ts

import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';

import { LoggerMiddleware } from './logger.middleware';

import { UsersModule } from './users/users.module';

import { UsersController } from './users/users.controller';



@Module({
  imports: [
    TypeOrmModule.forRoot(),
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/graphql.schema.ts'),
        outputAs: 'class',
      },
      debug: true,
    }),
    UsersModule
  ],
  controllers: [
  ],
  exports: [
  ],
  providers: [
  ]
})

export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .with('AppModule')
      .forRoutes(
        UsersController
    )};
}
ormconfig.json

...
"entities": [
    "src/**/**.entity{.ts,.js}",
    // "src/graphql.schema.ts"  This doesn't work.  Must use REST entity.
  ],
...
Если я сделаю запрос обнуляемым, удалю "!", тогда результаты запроса будут { "data": { "getMembers": null } } Это, по-видимому, означает, что данные не возвращаются через службу, которая в настоящее время работает нормально для моего REST API.

— 
Preston
 10.03.2019 02:39


Установка значения для результата подзапроса в функции в postgresql
Вопросы
SQL
Установка значения для результата подзапроса в функции в postgresql
Я пытаюсь написать функцию для триггера, которая проверяет, больше ли дата в новой записи отношения, чем запись в другом отношении. Если это так, я хочу обновить значение даты в моем новом отношении к значению даты в другом моем отношении:

create or replace function curDate()
returns trigger as $$
Begin
    if (new.date >= (select date from other where new.name = other.name )) then
        set new.date = (select date from playlist where new.name = other.name );
    end if;
end; $$ language plpgsql;
Я получаю синтаксическую ошибку: set new.date = (select date from playlist where new.name = other.name )

Однако это нормально работает:

create or replace function curDate()
    returns trigger as $$
    declare dateVar date;
Begin
    dateVar := (select date from other where new.name = other.name);
    if (new.datum >= dateVar) then
        new.datum = dateVar;
    end if;
end; $$ language plpgsql;
Это почему?

 05.01.2019 18:07
3
3
2 153
2
 Ответы 2
Чтобы сохранить результат запроса в переменной, используйте выбрать в

create or replace function curDate()
returns trigger as $$
Begin
  if (new.date >= (select date from other where new.name = other.name )) then
    select date 
      into new.date 
    from other 
    where new.name = other.name;
  end if;
end; $$ language plpgsql;
Это можно оптимизировать, выполнив только один раз SELECT.

create or replace function curDate()
returns trigger as $$
declare
   l_date date;
Begin
  select date 
    into l_date
  from other 
  where new.name = other.name;

  if (new.date >= l_date) then
    new.date := l_date;
  end if;
end; $$ language plpgsql;
 05.01.2019 22:47
Предполагая, что все задействованы столбцы NOT NULL и other.name UNIQUE, чтобы избежать осложнений.

Используйте запрос одинSELECT, назначающий NEW.datum:

CREATE OR REPLACE FUNCTION trg_cur_date()
  RETURNS TRIGGER AS
$func$
BEGIN
   SELECT o.datum
   FROM   other o
   WHERE  o.name  = NEW.name
   AND    o.datum < NEW.datum

   UNION ALL SELECT NEW.datum
   LIMIT  1

   INTO   NEW.datum;

   RETURN NEW;  -- required for BEFORE INSERT trigger
END
$func$  LANGUAGE plpgsql;
Для такого триггера:

CREATE TRIGGER playlist_ins_bef
BEFORE INSERT ON playlist
FOR EACH ROW EXECUTE PROCEDURE trg_cur_date();
db <> рабочий пример здесь

SELECT INTO(not to confused with SQL SELECT INTO, the use of which is discouraged) может выполнять назначение точно так же, как = или :=. Здесь нет SET.

Если ни одна строка не подходит, простой SELECT INTO назначит NULL. Руководство:

... target will be set to the first row returned by the query, or to nulls if the query returned no rows.

Вместо этого добавление UNION ALL SELECT NEW.datum LIMIT 1 по умолчанию к исходному значению. Видеть:

Вернуть значение, если запись не найдена
Таким образом, мы всегда выполняем запрос один только с назначением один.


Как использовать pl / pgSQL для обработки результатов, возвращаемых списком, разделенным запятыми?
Вопросы
SQL
Как использовать pl / pgSQL для обработки результатов, возвращаемых списком, разделенным запятыми?
Я пробую UNION ALL с множеством таблиц в новую таблицу. Столбцы старых таблиц такие же, но порядок столбцов другой, поэтому приведенный ниже оператор SQL даст неправильный результат:

CREATE TABLE sum_7_2018_xia_weijian
AS
(
        SELECT * FROM huiwen
        UNION
        SELECT * FROM penglai
        UNION
        SELECT * FROM baoluo
        UNION
        SELECT * FROM dongge
        UNION
        SELECT * FROM resultdonglu
        UNION
        SELECT * FROM resultwencheng
        UNION
        SELECT * FROM tan_illeg
);
Я, наконец, исправил это, но SQL-запросы слишком уж избыточны:

шаг 1. получить имена столбцов одной из старых таблиц с именем huiwen

SELECT string_agg(column_name, ',')
                FROM information_schema.columns
                WHERE table_schema = 'public' AND table_name   = 'huiwen';
Результаты:

>                                      string_agg                                     
> ----------------------------------------------------------------------
>
>  gid,id,geom,sxm,sxdm,sxxzqdm,xzqhdm,xzmc,sfzgjsyd,sfkfbj,sfjbnt,sfld,sflyhx,sfhyhx
шаг 2. объединить таблицы в новую таблицу. Я копирую string_agg таблицы huiwen в каждый SELECT-UNION, чтобы сохранить порядок столбцов, это неуклюже.

CREATE TABLE sum_2018_xia_weijian
AS
(
        SELECT gid,id,geom,sxm,sxdm,sxxzqdm,xzqhdm,xzmc,sfzgjsyd,sfkfbj,sfjbnt,sfld,sflyhx,sfhyhx
        FROM huiwen
        UNION ALL
        SELECT gid,id,geom,sxm,sxdm,sxxzqdm,xzqhdm,xzmc,sfzgjsyd,sfkfbj,sfjbnt,sfld,sflyhx,sfhyhx
        FROM penglai
        UNION ALL
        SELECT gid,id,geom,sxm,sxdm,sxxzqdm,xzqhdm,xzmc,sfzgjsyd,sfkfbj,sfjbnt,sfld,sflyhx,sfhyhx
        FROM baoluo
);
Результаты:

> Query returned successfully: 2206 rows affected, 133 msec execution time.
Я попытался выполнить некоторую оптимизацию с помощью pl/pgSQL, используя переменную Declarations для обработки имен столбцов, но не смог найти, что какой-либо тип данных SQL может справиться с этим. Использование RECORD результата Pseudo-Types ERROR ：

CREATE or replace FUNCTION ct() RETURNS RECORD AS $$
DECLARE
    clms RECORD;
BEGIN
    SELECT column_name INTO clms
        FROM information_schema.columns
        WHERE table_schema = 'public' AND table_name = 'huiwen';
    RETURN clms;
END;
$$ LANGUAGE plpgsql;
CREATE TABLE sum_2018_xia_weijian
AS
(
    SELECT ct() FROM huiwen
    UNION ALL
    SELECT ct() FROM penglai
    UNION ALL
    SELECT ct() FROM baoluo
    UNION ALL
    SELECT ct() FROM dongge
    UNION ALL
    SELECT ct() FROM resultdonglu
    UNION ALL
    SELECT ct() FROM resultwencheng
    UNION ALL
    SELECT ct() FROM tan_illeg
);
 09.01.2019 06:09
0
4
99
2
Данный вопрос помечен как решенный
 Ответы 2
Вместо того, чтобы усложнять программный блок, вы можете следовать некоторым нижеприведенным концепциям из документации Union или Union All, как говорится:

Количество столбцов во всех запросах должно быть одинаковым.
Соответствующие столбцы должны иметь совместимый тип данных.
Имена столбцов первого запроса определяют имена столбцов объединенного набора результатов.
Предложения GROUP BY и HAVING применяются к каждому отдельному запросу, а не к окончательному набору результатов.
Предложение ORDER BY применяется к объединенному набору результатов, а не к индивидуальному набору результатов.
Следуя третьему пункту, скорректируйте свой запрос Union так, чтобы он ссылался на таблицу, порядок столбцов которой ожидается в результате.

 09.01.2019 07:27
 Ответ принят как подходящий
Вы можете использовать STRING_AGG дважды для получения UNION ALL. Вы можете получить все столбцы в определенном порядке, явно упорядочив их по column_name в string_agg.

Вот общая функция, которая принимает массив таблиц и окончательное имя таблицы.

CREATE or replace FUNCTION fn_create_tab(tname_arr TEXT[], p_tab_name TEXT) 
RETURNS VOID AS $$
DECLARE
l_select TEXT;
BEGIN
   select STRING_AGG(query,' UNION ALL ' ) INTO l_select
    FROM
    (
     SELECT 'select ' || string_agg( column_name,','
     ORDER BY column_name ) || ' from ' || table_name as query
       FROM information_schema.columns
      WHERE table_schema = 'public' AND table_name = ANY (tname_arr)
     GROUP BY table_name
     ) s;

 IF l_select IS NOT NULL
  THEN
    EXECUTE format ('DROP TABLE IF EXISTS %I',p_tab_name);
    EXECUTE format ('create table %I  AS %s',p_tab_name,l_select);
  END IF;    
END;
$$ LANGUAGE plpgsql;
Теперь запустите функцию следующим образом:

select fn_create_tab(ARRAY['huiwen','penglai'],'sum_2018_xia_weijian');
Ты спас мне день, @KaushikNayak. Я проверил функцию, она работает нормально! Но мне нужно время, чтобы полностью понять это ...


Как выбрать несколько переменных внутри функции триггера?
Вопросы
POSTGRESQL
Как выбрать несколько переменных внутри функции триггера?
Вот чего я хотел бы добиться:

CREATE FUNCTION f() RETURNS trigger AS $$
  BEGIN
    SELECT COUNT(*) AS total_num, SUM(width) AS total_width
    FROM some_table WHERE foo = NEW.foo;
    IF total_num > 0 AND total_width > 100
    THEN
      RAISE EXCEPTION 'this is bad';
    END IF;
    RETURN NEW;
  END;
$$ LANGUAGE plpgsql;
Но это еще не синтаксически правильно.

Я прочитал, что мне сначала нужно записать переменные DECLARE (в данном случае total_num и total_width), чтобы я мог использовать их и использовать SELECT INTO, но я видел примеры только с одной переменной / оператором SELECT. Что, если у меня их будет больше?

 09.01.2019 23:04
0
0
368
2
Данный вопрос помечен как решенный
 Ответы 2
Обновлено: я не уверен, делается ли здесь акцент на использовании переменных или фактическом IF. Это означает ответ на последнее:

Вы можете сделать это без переменных, используя HAVING и EXISTS.

IF EXISTS (SELECT ''
                  FROM some_table
                  WHERE foo = new.foo
                  HAVING count(*) > 0
                         AND sum(width) > 100) THEN
  RAISE EXCEPTION 'this is bad';
END IF;
 09.01.2019 23:10
 Ответ принят как подходящий
Вы можете указать несколько переменных в части into. И declare раздел должен быть перед первым begin:

CREATE FUNCTION f() RETURNS trigger 
AS $$
declare
  total_num bigint;
  total_width bigint;
BEGIN
   SELECT COUNT(*), SUM(width)
       into total_num, total_width
   FROM some_table 
   WHERE foo = NEW.foo;

   IF total_num > 0 AND total_width > 100 THEN
      RAISE EXCEPTION 'this is bad';
   END IF;
   RETURN NEW;
END;
$$ LANGUAGE plpgsql;

Postgresql Выбрать из диапазона дат между массивом дат
Вопросы
SQL
Postgresql Выбрать из диапазона дат между массивом дат
Если этот запрос возвращает даты, существующие в запрошенном диапазоне.

select created_at from user where created_at between '2015-01-06 00:00:00.000000' and '2015-03-06 00:00:00.000000'
Есть ли способ получить такой результат, но с несколькими датами, содержащимися в массиве дат.

Просто для примера того, что я пытаюсь сказать. У меня есть этот массив дат, всегда будет первое и последнее свидание.

Array['2015-01-06 00:00:00.000000','2015-02-10 15:17:18.895000' <- First range
      '2017-10-05 14:41:04.191000','2017-10-11 14:49:36.454000' <- Second range
так есть ли способ поставить сценарий, который выглядит примерно так?

select created_at from win_users 
where (created_at between [First Date] and [Second Date])
or (created_at between [Third Date] and [Fourth Date])
но без использования цикла для объединения оператора where?

 13.01.2019 01:04
3
2
2 397
2
Данный вопрос помечен как решенный
 Ответы 2
Если ваш массив диапазонов всегда находится в том формате, который вы опубликовали (т.е. 4 элемента, причем первые два элемента являются первым диапазоном, а последние два - вторым диапазоном), вы можете написать такой запрос:

WITH ranges AS (
    SELECT '{2015-01-06 00:00:00.000000,2015-02-10 15:17:18.895000,2017-10-05 14:41:04.191000,2017-10-11 14:49:36.454000}'::date[] dates
)
    SELECT win_users.created_at FROM win_users, ranges
        WHERE (win_users.created_at > ranges.dates[1] AND win_users.created_at < ranges.dates[2]) OR (win_users.created_at > ranges.dates[3] AND win_users.created_at < ranges.dates[4]);
 13.01.2019 01:51
 Ответ принят как подходящий
Массив дат в этом случае очень неудобен. Используйте массивы daterange и оператор сдерживания <@, например:

with my_table(id, created_at) as (
values 
    (1, '2015-01-10'::timestamp),
    (2, '2016-05-10'),
    (3, '2017-10-10')
)

select *
from my_table
where created_at::date <@ any(array[
    daterange('2015-01-06','2015-02-10'), 
    daterange('2017-10-05','2017-10-11')])

 id |     created_at      
----+---------------------
  1 | 2015-01-10 00:00:00
  3 | 2017-10-10 00:00:00
(2 rows)
Если вы абсолютно хотите использовать массив дат (честно говоря, я так не думаю), используйте эту функцию, чтобы преобразовать его в массив daterange:

create or replace function date_pairs_to_ranges(date[])
returns daterange[] language sql as $$
    select array_agg(daterange(d1, d2))
    from unnest($1) with ordinality as u1(d1, o1)
    join unnest($1) with ordinality as u2(d2, o2)
    on o1/ 2* 2 < o1 and o2 = o1+ 1
$$;

with my_table(id, created_at) as (
values 
    (1, '2015-01-10'::timestamp),
    (2, '2016-05-10'),
    (3, '2017-10-10')
)

select *
from my_table
where created_at::date <@ any(
    date_pairs_to_ranges(array[
        '2015-01-06','2015-02-10',
        '2017-10-05','2017-10-11']::date[]))
Я собираюсь попробовать, объяснение было гладким, так что я уверен, что это сработает

— 
Luis Cardoza Bird
 13.01.2019 03:30
Вы сэр гений :) спасибо! Идеально работает @klin

— 
Luis Cardoza Bird
 13.01.2019 04:54



Как исправить отсутствие записи в предложении FROM для таблицы?
Вопросы
SQL
Как исправить отсутствие записи в предложении FROM для таблицы?
У меня есть функция с запросом. Если условие истинно, я обновляю строку новыми значениями.

Я делаю запрос:

SELECT * FROM transfer_flight(41313, '2017-08-15 20:00:00+05');
и я получаю сообщение об ошибке:

ERROR: missing FROM-clause entry for table "flights" LINE 1: SELECT (flights.scheduled_departure < $2) ^ QUERY: SELECT (flights.scheduled_departure < $2) CONTEXT: PL/pgSQL function transfer_flight(integer,timestamp with time >zone) line 7 at IF

CREATE OR REPLACE FUNCTION flightFunc(
    flight_identificator INTEGER, 
    new_timestamp timestamp with time zone) 
RETURNS TABLE(
    flight_id INTEGER,
    flight_no CHARACTER(6),
    departure_airport character(3),
    scheduled_departure timestamp with time zone,
    arrival_airport character(3),
    scheduled_arrival timestamp with time zone
)
LANGUAGE plpgsql
AS $$
DECLARE 
    flight_d timestamp with time zone =  scheduled_arrival - 
scheduled_departure;

BEGIN

    IF (flights.scheduled_departure < $2)
    THEN
        UPDATE flights
            scheduled_departure = $2,
            scheduled_arrival = $2 + flight_d
        FROM flights
        WHERE flights.flight_id = $1
        RETURNING 
            flights.flight_id,  
            flights.flight_no,
            flights.departure_airport,
            flights.scheduled_departure,
            flights.arrival_airport,        
            flights.scheduled_arrival;
    END IF;

END;
$$;
В результате мне нужно обновить только одну строку с помощью input_identificator

 15.01.2019 22:32
1
0
1 082
2
 Ответы 2
Убрать пункт FROM! Это делает CROSS JOIN. И вам нужен SET. Так:

UPDATE flights
    SET scheduled_departure = $2,
        scheduled_arrival = $2 + flight_d
    WHERE flights.flight_id = $1
RETURNING 
    flights.flight_id,  
    flights.flight_no,
    flights.departure_airport,
    flights.scheduled_departure,
    flights.arrival_airport,        
    flights.scheduled_arrival;
 15.01.2019 22:34
Мне кажется, вам следует избавиться от переменной flight_d и блока IF и перенести логику в сам запрос, например:

CREATE OR REPLACE FUNCTION flightFunc(
    flight_identificator INTEGER, 
    new_timestamp timestamp with time zone) 
RETURNS TABLE(
    flight_id INTEGER,
    flight_no CHARACTER(6),
    departure_airport character(3),
    scheduled_departure timestamp with time zone,
    arrival_airport character(3),
    scheduled_arrival timestamp with time zone
)
LANGUAGE plpgsql
AS $$

BEGIN

    UPDATE flights SET
        scheduled_departure = $2,
        scheduled_arrival = $2 + flights.scheduled_arrival - flights.scheduled_departure
    WHERE flights.flight_id = $1 AND flights.scheduled_departure < $2
    RETURNING 
        flights.flight_id,  
        flights.flight_no,
        flights.departure_airport,
        flights.scheduled_departure,
        flights.arrival_airport,        
        flights.scheduled_arrival;

END;
$$;



Вложенные кавычки в операторе plpgsql EXECUTE
Вопросы
SQL
Вложенные кавычки в операторе plpgsql EXECUTE
Я пишу функцию plpgsql с именем таблицы в качестве параметра для обработки моих задач обновления базы данных postgis, но сталкиваюсь с проблемой кавычек в кавычках в операторе EXECUTE.

вот простой сценарий SQL, и он отлично работает:

UPDATE baoluo SET sfzgjsyd='同时落在总规建设用地内外' 
        FROM lu_plan AS lu
        WHERE ST_Overlaps(lu.geom, baoluo.geom) 
        AND lu.is_construc = '建设用地'
когда в plpgsql я использовал двойные кавычки для китайских иероглифов, вот соответствующая часть кода:

CREATE or replace FUNCTION process(_tb1 regclass, town_name TEXT, town_id TEXT) 
RETURNS VOID AS
$func$
DECLARE
   city_name text := '文昌市';  -- assign at declaration
   city_code text := '469005';
BEGIN
    --更新字段：
    EXECUTE format('
        UPDATE %s SET sfzgjsyd = "同时落在总规建设用地内外" 
        FROM lu_plan 
        WHERE ST_Overlaps(lu_plan.geom, %s.geom) 
        AND lu_plan.is_construc = "建设用地"', _tb1, _tb1); 
END; 
$func$
LANGUAGE plpgsql;
select process('public.baoluo', '保罗镇', '469005000');
Я ожидаю, что он работает нормально, но журнал показывает ошибку с the field not exists.

 17.01.2019 03:46
1
3
518
2
Данный вопрос помечен как решенный
 Ответы 2
 Ответ принят как подходящий
In format() strings, single quotes will get wrong with Chinese characters.

Проблема с вложенными кавычками, а не с китайскими иероглифами. Используйте долларовые кавычки и %I для идентификаторов:

...
EXECUTE format($ex$
    UPDATE %I SET sfzgjsyd= '同时落在总规建设用地内外'
    FROM lu_plan 
    WHERE ST_Overlaps(lu_plan.geom, %I.geom) 
    AND lu_plan.is_construc = '建设用地'
    $ex$, _tb1, _tb1); 
...
 17.01.2019 05:56
Я также пробовал с предложением @muistooshort двойных одинарных кавычек, он отлично работает.

...
EXECUTE format('
    UPDATE %I SET sfzgjsyd=''同时落在总规建设用地内外'' 
    FROM lu_plan 
    WHERE ST_Overlaps(lu_plan.geom, %I.geom) 
    AND lu_plan.is_construc = ''建设用地''', _tb1, _tb1); 
...


Ссылка на столбец неоднозначна для локальной переменной в функции
Вопросы
SQL
Ссылка на столбец неоднозначна для локальной переменной в функции
Ниже приведена моя функция

CREATE OR REPLACE FUNCTION  add_config_to_enterprise(configKey character varying, enterpriseValue character varying) RETURNS void AS 
$BODY$
DECLARE
entId character varying;
   BEGIN
        FOR entId IN
    SELECT enterprise_id
    FROM tenant
LOOP
    INSERT INTO enterprise_configuration(enterprise_configuration_id, product_configuration_id, enterprise_id, value)
SELECT *
FROM 
    (SELECT uuid_generate_v4(),
        (SELECT pc.product_configuration_id
        FROM product_configuration pc
        WHERE pc.configuration_key = configKey), 
            entId, enterpriseValue) AS tmp
            WHERE NOT EXISTS 
            (SELECT e.enterprise_configuration_id
            FROM enterprise_configuration e
            WHERE e.enterprise_id = entId AND e.product_configuration_id = 
                (SELECT p.product_configuration_id
                FROM product_configuration p
                WHERE p.configuration_key = configKey));

END LOOP;


   END;

$BODY$ LANGUAGE 'plpgsql'
Но это дает мне следующую ошибку, когда эта функция вызывается

ERROR:  column reference "entid" is ambiguous
LINE 12:             WHERE e.enterprise_id = entId AND e.product_conf...
                                             ^
DETAIL:  It could refer to either a PL/pgSQL variable or a table column.
Ни в одной таблице нет столбца с именем entid. Почему выдает такую ​​ошибку?

 23.01.2019 08:06
0
2
316
2
Данный вопрос помечен как решенный
 Ответы 2
 Ответ принят как подходящий
Используйте псевдоним подзапроса в условии WHERE:

...
SELECT *
FROM 
    (SELECT uuid_generate_v4(),
        (SELECT pc.product_configuration_id
        FROM product_configuration pc
        WHERE pc.configuration_key = configKey), 
            entId, enterpriseValue) AS tmp
            WHERE NOT EXISTS 
            (SELECT e.enterprise_configuration_id
            FROM enterprise_configuration e
            WHERE e.enterprise_id = tmp.entId AND e.product_configuration_id = -- here
                (SELECT p.product_configuration_id
                FROM product_configuration p
                WHERE p.configuration_key = configKey));
...
или переименуйте entId в списке SELECT подзапроса:

...
SELECT *
FROM 
    (SELECT uuid_generate_v4(),
        (SELECT pc.product_configuration_id
        FROM product_configuration pc
        WHERE pc.configuration_key = configKey), 
            entId as eId, enterpriseValue) AS tmp -- here
            WHERE NOT EXISTS 
            (SELECT e.enterprise_configuration_id
            FROM enterprise_configuration e
            WHERE e.enterprise_id = entId AND e.product_configuration_id =
                (SELECT p.product_configuration_id
                FROM product_configuration p
                WHERE p.configuration_key = configKey));
...
 23.01.2019 08:59
Проблема в том, что подзапрос с псевдонимом tmp, который вы определяете в своем запросе, имеет столбец с именем entid, поэтому синтаксический анализатор не знает, относится ли ссылка на entid в условии WHERE к этому столбцу или к функциональной переменной.

Правда, они содержат одно и то же значение, так что на самом деле это не имеет значения, но синтаксическая неоднозначность все равно есть.

Вы должны квалифицировать entid в условии WHERE либо с помощью псевдонима tmp, либо с именем функции add_config_to_enterprise, чтобы устранить двусмысленность.

Ваш запрос излишне сложен и имеет неправильные отступы, настолько, что я не могу его понять и улучшить. Упрощение избавило бы от проблемы.


Функция PostgreSQL для обновления столбца последовательного ключа для таблицы переменных
Вопросы
POSTGRESQL
Функция PostgreSQL для обновления столбца последовательного ключа для таблицы переменных
У меня есть система, которая синхронизирует различные таблицы между серверами в разное время. Он работает нормально, за исключением того, что в некоторых таблицах есть ключевые столбцы SERIAL, которые устаревают, потому что синхронизация не обновляет последовательности. Итак, я пытаюсь написать функцию pl/pgsql, чтобы убедиться, что если таблица (названная в параметре) имеет серийный ключ, ее следующее значение на единицу больше, чем наибольшее значение в таблице.

На самом деле, я думаю, что наконец-то сделал это, но я решил, что все равно опубликую вопрос, чтобы люди могли использовать его или предлагать улучшения.

 23.01.2019 17:40
0
1
52
2
 Ответы 2
Кажется, это работает. Кажется, нужно часто использовать EXECUTE.

-- Update the serial key sequence of this given table, if appropriate.
CREATE OR REPLACE FUNCTION update_serial(i_table CHARACTER VARYING)
  RETURNS CHARACTER VARYING AS $$
DECLARE
    v_key_col CHARACTER VARYING;
    v_seq_name CHARACTER VARYING;
    v_max RECORD;

BEGIN
    -- Get the name of the primary key, if any.
    SELECT c.column_name, c.data_type INTO v_key_col
    FROM information_schema.table_constraints tc
    JOIN information_schema.constraint_column_usage AS ccu USING (constraint_schema, constraint_name)
    JOIN information_schema.columns AS c
        ON c.table_schema = tc.constraint_schema AND tc.table_name = c.table_name AND ccu.column_name = c.column_name
    WHERE constraint_type = 'PRIMARY KEY' and tc.table_name = i_table;

    IF v_key_col IS NULL THEN RETURN 'No key found';
        END IF;

    -- Get the name of the sequence that determines the next number for the primary key, if any.
    SELECT pg_get_serial_sequence(i_table, v_key_col) INTO v_seq_name;

    IF v_seq_name IS NULL THEN RETURN 'No sequence found';
        END IF;

    -- Get the maximum value in the primary key data, and add 1.
    EXECUTE 'SELECT MAX(' || v_key_col || ') + 1 m FROM ' || i_table INTO v_max;

-- Set the value of the sequence, converting to regclass and back to text so as to clean up the name and remove
-- the schema. It needs to put its output somewhere though we're not using it, so it goes back into v_max.
SELECT SETVAL(quote_ident(v_seq_name::regclass::text), v_max.m) INTO v_max;

    RETURN 'Done';
END;
$$ LANGUAGE 'plpgsql';
COMMENT ON FUNCTION update_serial(i_table CHARACTER VARYING) IS
'Update the serial key sequence of this given table, if appropriate.';
 23.01.2019 17:40
Вам действительно не нужна функция для этого. С вариантом этот ответ это можно сделать с помощью одного оператора:

Сначала нам нужно найти все столбцы, которые используют последовательность в качестве значения по умолчанию:

select table_schema, table_name, column_name,
       pg_get_serial_sequence(format('%I.%I', table_schema, table_name), column_name)
from information_schema.columns
where table_schema = 'public'
  and column_default like 'nextval%'
Затем мы можем вычислить максимальное значение для каждого из этих столбцов с помощью query_to_xml() и использовать этот результат для вызова setval() для каждой последовательности.

with sequences as (
  select table_schema, table_name, column_name,
         pg_get_serial_sequence(format('%I.%I', table_schema, table_name), column_name) as col_sequence
  from information_schema.columns
  where table_schema = 'public' --<< adjust for your schemas
    and column_default like 'nextval%'
), maxvals as (
  select table_schema, table_name, column_name, col_sequence,
          (xpath('/row/max/text()',
             query_to_xml(format('select coalesce(max(%I),0) from %I.%I', column_name, table_schema, table_name), true, true, ''))
          )[1]::text::bigint as max_val
  from sequences
  where col_sequence is not null
) 
select table_schema, 
       table_name, 
       column_name, 
       col_sequence,
       max_val,
       setval(col_sequence, max_val)
from maxvals;



Как перепроверить функцию SQL, созданную с помощью check_function_bodies=false?
Вопросы
POSTGRESQL
Как перепроверить функцию SQL, созданную с помощью check_function_bodies=false?
После этот ответ я узнал, что могу отключить проверку синтаксиса для функции SQL, установив check_function_bodies=false.

В моем случае: запуск обновления с помощью Flyway, где

Порядок создания функции не определен.
Некоторые функции используют другие функции, которые еще предстоит создать в рамках того же обновления.
Мой вопрос: можно ли выполнить «перепроверку» такой функции без ее фактического вызова - когда все остальные зависимости установлены? Что-то похожее на Oracle alter function ... compile.

В идеале я хотел бы установить check_function_bodies=false в начале обновления, а затем перепроверить каждую функцию SQL в конце.

Я хочу избежать необходимости:

управлять порядком запуска скриптов.
перезапустите скрипты создания функций
Что я пробовал:

Делаем макет alter function
Звонок pg_get_functiondef
 29.01.2019 15:00
3
0
487
2
Данный вопрос помечен как решенный
 Ответы 2
 Ответ принят как подходящий
Я могу думать о двух способах:

Вы можете напрямую вызвать функцию проверки языка:

SELECT lanname, lanvalidator::regprocedure FROM pg_language;

  lanname   |         lanvalidator         
------------+------------------------------
 internal   | fmgr_internal_validator(oid)
 c          | fmgr_c_validator(oid)
 sql        | fmgr_sql_validator(oid)
 plpgsql    | plpgsql_validator(oid)
 plpython3u | plpython3_validator(oid)
(5 rows)
Для функций SQL это будет работать следующим образом:

SET check_function_bodies = off;
CREATE FUNCTION bad() RETURNS void LANGUAGE sql AS 'SELECT $1';

SET check_function_bodies = on;
SELECT fmgr_sql_validator('bad()'::regprocedure);

ERROR:  there is no parameter $1
LINE 1: SELECT $1
               ^
QUERY:  SELECT $1
Вы можете переопределить функцию и проверить, не выдает ли она ошибку:

SET check_function_bodies = on;
DO $$BEGIN
   EXECUTE pg_get_functiondef('bad()'::regprocedure);
END;$$;
 29.01.2019 15:34
Следуя блестящему ответу Лоренца, я написал эту маленькую вспомогательную функцию - совместное использование на благо других.

CREATE OR REPLACE FUNCTION recompile_functions()
RETURNS void
LANGUAGE plpgsql
VOLATILE
AS $$
DECLARE
    l_func regproc;
BEGIN
    --schema name can also be an input param or current_schema.
    --test sql functions
    FOR l_func IN (
        SELECT oid
        FROM pg_proc
        WHERE pronamespace='my_schema'::regnamespace
        AND prolang=(SELECT oid FROM pg_language WHERE lanname='sql')
    ) 
    LOOP
        PERFORM fmgr_sql_validator(l_func);
    END LOOP;

    --test plpgsql functions
    FOR l_func IN (
        SELECT oid
        FROM pg_proc
        WHERE pronamespace='my_schema'::regnamespace
        AND prolang=(SELECT oid FROM pg_language WHERE lanname='plpgsql')
    ) 
    LOOP
        PERFORM plpgsql_validator(l_func);
    END LOOP;

EXCEPTION
    WHEN OTHERS THEN
        RAISE EXCEPTION 'Function % failed validation checks: %', l_func::text, SQLERRM;
END; $$;


Как получить доступ к переменным внешней области видимости из функции в PostgreSQL?
Вопросы
POSTGRESQL
Как получить доступ к переменным внешней области видимости из функции в PostgreSQL?
У меня есть этот код:

DO $$
DECLARE
    NODE_ID bigint :=  46;
BEGIN
    CREATE OR REPLACE FUNCTION funk(VAL bigint) 
    RETURNS bigint AS $f$
        BEGIN
            RETURN VAL;
        END; $f$ LANGUAGE plpgsql;

    RAISE NOTICE '%', funk(NODE_ID);
END $$;
Я работаю как положено и выводит 46 на консоль. Я хочу избавиться от параметров, потому что переменная глобальная. Но я получаю ошибки:

DO $$
DECLARE
    NODE_ID bigint :=  46;
BEGIN
    CREATE OR REPLACE FUNCTION funk() 
    RETURNS bigint AS $f$
        BEGIN
            RETURN NODE_ID;
        END; $f$ LANGUAGE plpgsql;

    RAISE NOTICE '%', funk();
END $$;
Я получаю «NODE_ID не существует». Есть ли способ получить доступ к внешней переменной в функции?

 31.01.2019 11:02
1
0
278
2
Данный вопрос помечен как решенный
 Ответы 2
 Ответ принят как подходящий
Нет, это не сработает, потому что эта функция никак не связана с вашим блоком DO. Это постоянный объект базы данных, который будет продолжать существовать в базе данных после завершения блока DO.

По сути, функция — это просто строка с телом функции (и некоторыми метаданными, см. pg_proc); в этом случае тело функции состоит из текста между открывающим и закрывающим $f$. Он интерпретируется обработчиком языка при запуске функции.

Единственные данные базы данных, на которые вы можете ссылаться в функции, — это другие постоянные объекты базы данных, а переменная в блоке DO к ним не относится.

В PostgreSQL нет глобальных переменных, за исключением, так сказать, параметров конфигурации. Вы можете получить к ним доступ с помощью команд SET и SHOW SQL и, что более удобно, в коде, с помощью функций set_config и current_setting.

 31.01.2019 11:45
Или используйте динамический SQL:

DO $$
DECLARE
    NODE_ID bigint :=  46;
    src text := format('
        CREATE OR REPLACE FUNCTION funk() 
        RETURNS bigint AS $f$
            BEGIN
                RETURN %s;
            END; 
        $f$ LANGUAGE plpgsql;
    ', NODE_ID::text);
BEGIN
    execute src;
    RAISE NOTICE '%', funk();
END $$;
(работает для меня, приземляясь на ваш вопрос в поисках решения той же проблемы)


Как вызвать ошибку, если запрос на выборку возвращает строки
Вопросы
POSTGRESQL
Как вызвать ошибку, если запрос на выборку возвращает строки
У меня есть представление, которое возвращает «плохие» строки. Я хотел бы, чтобы процедура вызывала исключение, если представление возвращает какие-либо записи. Я вызову это из внешней программы. Как это можно реализовать? Далее следует псевдокод:

create procedure pr_bad_records_check()
language sql
as
$$
if 
    select count(*) from vw_my_bad_records > 0
then 
    raise error 'some bad rows were found, run select * from vw_my_bad_records for details'
end if
$$;
 05.02.2019 14:44
0
2
235
2
Данный вопрос помечен как решенный
 Ответы 2
 Ответ принят как подходящий
Я знаю, что есть принятый ответ, но позвольте мне показать вам другой подход. Вам не нужно объявлять какие-либо переменные, так как вы можете использовать специальную переменную FOUND. Кроме того, было бы лучше добавить предложение LIMIT к вашему выбору, так как одной строки достаточно, чтобы вызвать исключение:

CREATE OR REPLACE FUNCTION pr_bad_records_check() RETURNS void AS $$
BEGIN 
  PERFORM * FROM vw_my_bad_records LIMIT 1;
  IF FOUND THEN 
    RAISE EXCEPTION 'some bad rows were found, run select * from vw_my_bad_records for details'; 
  END IF; 
END;
$$ LANGUAGE plpgsql;
 05.02.2019 16:19
PLpgSQL позволяет использовать SQL-запросы внутри выражений. Таким образом, ваша задача может иметь простое, читаемое и быстрое решение:

CREATE OR REPLACE FUNCTION pr_bad_records_check()
RETURNS void AS $$
BEGIN
  IF EXISTS(SELECT * FROM vw_my_bad_records) THEN
    RAISE EXCEPTION
       USING MESSAGE='some bad rows were found',
             HINT='Run select * from vw_my_bad_records for details.';
  END IF;
END;
$$ LANGUAGE plpgsql;


Запрос plpgsql - как я могу совместить, если, то с обновлением?
Вопросы
POSTGRESQL
Запрос plpgsql - как я могу совместить, если, то с обновлением?
У меня есть следующий запрос:

create or replace function test_function()
    returns trigger as $body$
begin
    if (tg_table_name = 'mytable' and tg_op='insert') then
        INSERT into another_table(id, name) values(new.id, new.name);
        return new;
    else if (tg_table_name = 'mytable' and tg_op='update') then
        INSERT into another_table(id, name) values(new.id, new.name);
        return new;
    end if;
    return null;
end;
$body$ language plpsql;
Обновлено: Мне нужно сделать:

update table mytable set name = 'test';
EDIT2: это не сработало, значение2 не было обновлено до нуля;

BEGIN   
IF (TG_OP = 'INSERT' AND TG_TABLE_NAME='tableA') THEN
    INSERT INTO tableB(
            columnA,
            columnB)
        VALUES(
            new.value1,
            new.value2);
new.value2 := null;
RETURN NEW;
ELSEIF (TG_OP = 'UPDATE' AND 
TG_TABLE_NAME='tableA') THEN
    INSERT INTO tableB(
            columnA,
            columnB)
        VALUES(
            new.value1,
            new.value2);
new.value2 := null;
RETURN NEW;
END IF;
RETURN null;
END;
Обновлено: 4

create trigger add_notif_trigger after insert or update on 
 mytable for each row when (new.name > 100) execute 
 procedure function test_function();
Мне нужно сделать обновление в любом случае. Я не могу понять, как это сделать.

С уважением,

 06.02.2019 11:14
0
0
49
2
Данный вопрос помечен как решенный
 Ответы 2
 Ответ принят как подходящий
Если вы хотите изменить значения столбцов базовой таблицы, вам не нужно другое обновление, вы просто назначаете NEW.column_name

if
..

NEW.name := 'test';

else if
..

NEW.name := 'test';
 06.02.2019 11:21
ЕСЛИ ТО ЕСЛИ новое.значение = истина, ТО КОНЕЦ ЕСЛИ;

КОНЕЦ ЕСЛИ;

будь осторожен, когда вы используете обновление (TG_OP = 'UPDATE'), у вас есть старое и новое значение, во время вставки у вас есть только новое значение


Postgres — создание триггерных функций с аргументами
Вопросы
POSTGRESQL
Postgres — создание триггерных функций с аргументами
Мне было интересно, можно ли создать триггерную функцию с аргументами, поскольку логика функции такая же, но может просто вставляться в разные таблицы и имена столбцов.

Вот функция:

CREATE OR REPLACE FUNCTION 
    createInstance(table_name TEXT, column_name TEXT) 
RETURNS TRIGGER AS
$BODY$
BEGIN
    INSERT INTO
        table_name
        (
            column_name,
            account_id
        )
    VALUES
        (
            new._id,
            new.account_id
        );

    RETURN new;
END;
$BODY$
language plpgsql;
Ошибка:

ERROR:  trigger functions cannot have declared arguments
HINT:  The arguments of the trigger can be accessed through TG_NARGS and TG_ARGV instead.
CONTEXT:  compilation of PL/pgSQL function "createinstance" near line 1
Пример триггера:

CREATE TRIGGER trig_instanced_item_copy
    AFTER INSERT ON creator.items
    FOR EACH ROW
    EXECUTE PROCEDURE createInstance();
 07.02.2019 08:24
3
2
2 217
2
 Ответы 2
Вы не определяете параметры для триггерной функции, но вы можете указать аргументы для нее в операторе CREATE TRIGGER.

Эти аргументы должны быть константами и будут доступны триггерной функции через массив TG_ARGV.

Таким образом, вы можете параметризовать триггер для каждой таблицы, например, передав имена таблиц и столбцов, с которыми должен работать триггер. В этом случае вам придется использовать динамический SQL с EXECUTE в триггере.

 07.02.2019 08:39
Не мог понять, как это сделать динамически, поэтому использовал это:

CREATE OR REPLACE FUNCTION 
    insertIntoInstancedItem () 
RETURNS TRIGGER AS $BODY$
DECLARE
BEGIN
    INSERT INTO
        creator.instanced_items
        (
            item_id,
            account_id
        )
    VALUES
        (
            new._id,
            new.account_id
        );

    RETURN 
        *;
END
$BODY$
language plpgsql;        

CREATE TRIGGER trig_item_insertion
    AFTER INSERT ON creator.items
    FOR EACH ROW
    EXECUTE PROCEDURE insertIntoInstancedItem();



Как использовать параметр функции в курсоре, который включен в динамический SQL в функциях Postgres?
Вопросы
POSTGRESQL
Как использовать параметр функции в курсоре, который включен в динамический SQL в функциях Postgres?
Создал эту функцию Postgres, которая работает нормально, но фактическое требование состоит в том, чтобы передать входной параметр в функцию курсору, который использует динамический SQL следующим образом:

Ниже приведена функция

CREATE OR REPLACE FUNCTION ssp2_pcat.find_shift_dates (date_to_find date)
  RETURNS void
  LANGUAGE 'plpgsql'

  COST 100
  VOLATILE 
AS $BODY$

DECLARE
C1 CURSOR FOR
SELECT TABLE_NAME, 'SELECT COUNT(*) FROM ' || TABLE_NAME || ' WHERE ' || 
COLUMN_NAME || ' = '||
'CASE WHEN ' || COLUMN_NAME || ' LIKE ' || '''%START%'''||' THEN 
 date_to_find ELSE date_to_find-1 END;' SQL_TEXT 
FROM (
SELECT TABLE_NAME, COLUMN_NAME
FROM INFORMATION_SCHEMA.COLUMNS 
WHERE TABLE_NAME IN (SELECT TABLE_NAME FROM RESET_DATES WHERE RESET_IT = 
'Y') AND
UPPER(DATA_TYPE) = 'DATE' 
AND (COLUMN_NAME LIKE '%START%' OR COLUMN_NAME LIKE '%END%')
AND (COLUMN_NAME NOT LIKE '%TEST%' 
AND COLUMN_NAME NOT LIKE '%PCAT%' 
AND COLUMN_NAME NOT LIKE '%ORDER%' 
AND COLUMN_NAME NOT LIKE '%SEASON%' 
AND COLUMN_NAME NOT LIKE '%_AT')
ORDER BY 1, 2) A;

END_COUNT     INTEGER := 0;
START_COUNT   INTEGER := 0;
TABLENAME     VARCHAR(32) := 'ALFU';
l_start       TIMESTAMP;
l_end         TIMESTAMP;
Time_Taken    VARCHAR(20);

BEGIN
  l_start  := clock_timestamp();
  DELETE FROM SHIFT_DATES_COUNT;
  FOR I IN C1 LOOP
    IF I.TABLE_NAME <> TABLENAME THEN
      INSERT INTO SHIFT_DATES_COUNT VALUES (TABLENAME, START_COUNT, 
      END_COUNT, current_timestamp::timestamp(0));
      TABLENAME := I.TABLE_NAME;
      END_COUNT := 0;
      START_COUNT := 0;
    END IF;
    IF STRPOS(I.SQL_TEXT, 'END') > 0 THEN
     EXECUTE I.SQL_TEXT INTO END_COUNT;
     RAISE NOTICE '% ', ('END: ' || I.SQL_TEXT); 
    ELSE
     EXECUTE I.SQL_TEXT INTO START_COUNT;
     RAISE NOTICE '% ', ('START: ' || I.SQL_TEXT); 
    END IF;
  END LOOP;
 INSERT INTO SHIFT_DATES_COUNT VALUES (TABLENAME, START_COUNT, END_COUNT, 
 current_timestamp::timestamp(0));
 RAISE NOTICE '% ', ('INSERT INTO SHIFT_DATES_COUNT Done...'); 
 l_end  := clock_timestamp();
 Time_Taken := (l_end-l_start); 

 RAISE NOTICE '% ', ('FIND_SHIFT_DATES Took: ' || Time_Taken );
END;

$BODY$;
Пожалуйста, дайте мне знать, как я могу использовать входной параметр date_to_find в динамическом SQL в курсоре в приведенной выше функции.

 07.02.2019 23:04
0
0
1 146
2
 Ответы 2
Вы можете использовать предложение EXECUTE для открытия курсора, см. документацию PostgreSQL. https://www.postgresql.org/docs/10/plpgsql-cursors.html#PLPGSQL-CURSOR-OPENING Пример:

OPEN curs1 FOR EXECUTE format('SELECT * FROM %I WHERE col1 = $1',tabname) USING keyvalue;
 10.02.2019 20:21
Вы можете использовать несвязанный курсор, пункт fetch для получения данных из курсора и выйти, если он не найден, чтобы закончить, например:

CREATE OR REPLACE  FUNCTION example (p_name text)  RETURNS void LANGUAGE 'plpgsql' AS $$

DECLARE
C1 refcursor; 
res record;
BEGIN
OPEN c1 FOR EXECUTE 'SELECT * FROM pg_database WHERE datname like ''%'||p_name||'%''';


 LOOP
FETCH c1 INTO res;
EXIT WHEN not found;
raise notice 'value datname: %',res.datname;
END LOOP;

CLOSE c1;
RETURN;
END;   $$;


--in my case
select example ('test')
NOTICE:  value datname: test
NOTICE:  value datname: test_msmov
NOTICE:  value datname: test_resources
NOTICE:  value datname: test_load_table
NOTICE:  value datname: test_resources2
Total query runtime: 63 msec
1 row retrieved.

Запросы с данными, передаваемыми через JSONB
Вопросы
JSON
Запросы с данными, передаваемыми через JSONB
Итак, у меня есть функция, которая принимает тип JSONB и выполняет SELECT и INSERT на основе различных ключей из этого блока данных. PostgreSQL выдает ошибки относительно PERFORM и INSERT. Как правильно использовать данные json в запросах SQL?

CREATE OR REPLACE FUNCTION add_revision(d jsonb)
RETURNS jsonb AS $$
DECLARE
    did INT;
BEGIN
    did:=get_drawing_id(d->>'Name');
    IF did=NULL THEN
        did:=create_drawing(d->>'Name',d->>'Discipline',
            d->>'Doc Type');
    END IF;
    PERFORM * FROM revisions WHERE drawingid=did AND Sequence=d->>'Sequence';
    IF NOT FOUND THEN
        INSERT INTO revisions (Sequence,Revision,State,Meta) VALUES(d->>'Sequence',
            d->>'Version',d->>'State',d);
        RETURN jsonb_build_object('ok',true);
    END IF;
    RETURN jsonb_build_object('ok',false,'message','Already exists');
END;
$$ LANGUAGE plpgsql;
вот и вылетает ошибка

Fatal error: Uncaught exception 'PDOException' with message 'SQLSTATE[42883]: Un
defined function: 7 ERROR:  operator does not exist: integer = text
LINE 1: ... * FROM revisions WHERE drawingid=did AND Sequence=(d->>'Seq...
 13.02.2019 11:10
0
0
37
2
Данный вопрос помечен как решенный
 Ответы 2
 Ответ принят как подходящий
Вы не можете сравнить целое число с текстом. PostgreSQL строг.

Проверьте типы в этом разделе.

 drawingid=did AND Sequence=d->>'Sequence'
Это не должно быть проблемой, связанной с JSONB.

 13.02.2019 11:25
Совершенно нормально использовать функции JSONB в запросах, мне просто нужно было привести тип к нужному типу:

CREATE OR REPLACE FUNCTION add_drawing_revision(d jsonb)
RETURNS jsonb AS $$
DECLARE
    did INT;
BEGIN
    did:=get_drawing_id(d->>'Name');
    IF did<0 THEN
        did:=create_drawing(d->>'Name',d->>'Discipline',
            d->>'Doc Type');
    END IF;
    PERFORM * FROM revisions WHERE drawingid=did AND Sequence=(d->>'Sequence')::INT;
    IF NOT FOUND THEN
        INSERT INTO revisions (Sequence,Revision,State,Meta) VALUES((d->>'Sequence')::INT,
            d->>'Version',d->>'State',d);
        RETURN jsonb_build_object('ok',true);
    END IF;
    RETURN jsonb_build_object('ok',false,'message','Already exists');
END;
$$ LANGUAGE plpgsql;


Используйте боковое соединение, чтобы перебрать все таблицы из схемы
Вопросы
SQL
Используйте боковое соединение, чтобы перебрать все таблицы из схемы
Я хочу подсчитать определенные значения во всех таблицах схемы, содержащих столбец, который может содержать эти значения.

Надеялся использовать соединение LATERAL для перебора всех таблиц, но столкнулся с проблемами:

select
    fully_qualified_table_name,
    cnt
from (
    select
        'datastore.' || table_name as fully_qualified_table_name
    from
        information_schema.columns
    where
        table_schema = 'datastore'
        and column_name = 'dss_current_flag'
    
    cross join lateral
    
    select
        count(*) as cnt
    from
        information_schema.fully_qualified_table_name
    );
Это возможно?

 10.01.2023 10:44
1
1
59
2
Данный вопрос помечен как решенный
 Ответы 2
Я боюсь, что невозможно выполнять динамические запросы, используя чистый SQL. Вместо этого вы можете проверить PL/pgSQL, например.

CREATE OR REPLACE FUNCTION count_records() 
RETURNS bigint AS $$
DECLARE  
  rec record;
  res bigint = 0; ct bigint = 0;
BEGIN
  FOR rec IN 
    SELECT table_schema AS sch,table_name AS tb
    FROM information_schema.columns
    WHERE table_schema = 'datastore' AND column_name = 'dss_current_flag'   
  LOOP
    EXECUTE format($ex$ SELECT count(*) FROM %I.%I $ex$,rec.sch,rec.tb) 
    INTO ct;
    res := res + ct;
  END LOOP;
  RETURN res;
END $$ LANGUAGE 'plpgsql';
Более гибким подходом было бы предоставление имен схем и таблиц в качестве параметров вызова функции вместо жесткого кодирования их в теле функции, например CREATE FUNCTION count_records(_schema_name text, _table_name text) .., или даже полного имени таблицы в качестве одного параметра: CREATE FUNCTION count_records(_qualified_table_name text) ... .

Демо: db<>рабочий пример

 10.01.2023 11:21
 Ответ принят как подходящий
Основываясь на ответе @jim-jones, мое окончательное решение было

CREATE TYPE datastore.schema_table_column_counts_type AS (
    schema_name text,
    table_name text,
    column_name text,
    value text,
    count_p bigint);

CREATE OR REPLACE FUNCTION datastore.count_records_in_schema_where_column_has_value(_schema_name text, _column_name text, _value text) 
RETURNS setof datastore.schema_table_column_counts_type language plpgsql AS $$
DECLARE  
  rec record;
  result_record datastore.schema_table_column_counts_type;
BEGIN   
  FOR rec IN 
    SELECT 
        table_schema AS sch,
        table_name AS tb, 
        $2 as cn, 
        $3 as v
    FROM information_schema.columns
    WHERE table_schema = $1
    AND column_name = $2
  LOOP
    EXECUTE format($ex$ 
        SELECT 
            '%1$s' as schema_name, 
            '%2$s' as table_name, 
            '%3$s' as column_name,
            '%4$s' as value,
            count(*) 
        FROM 
            %1$s.%2$s
        WHERE
            %3$s = %4$L 
        $ex$
        , rec.sch, rec.tb, rec.cn, rec.v) 
    INTO result_record;
    return next result_record;
  END LOOP;
END $$ ;

SELECT * from datastore.count_records_in_schema_where_column_has_value('datastore', 'dss_current_flag', 'P');
выглядит неплохо! +1 просто будьте осторожны с %1$s.%2$s, если у вас есть таблицы с именами, содержащими специальные символы .. ура!

— 
Jim Jones
 13.01.2023 12:27



Как ПОДНЯТЬ УВЕДОМЛЕНИЕ в PostgreSQL?
Вопросы
POSTGRESQL
Как ПОДНЯТЬ УВЕДОМЛЕНИЕ в PostgreSQL?
Я использую pgAdmin и хочу получить простое уведомление о повышении; ссылаясь на это, я ввел RAISE NOTICE 'note'; и получил эту ошибку:

ERROR:  syntax error at or near "RAISE"
LINE 1: RAISE NOTICE 'note';
Единственный способ, которым мне удалось получить результат, - это использовать это (что я тоже плохо понимаю):

DO $$
BEGIN
RAISE NOTICE 'note';
END;
$$ LANGUAGE plpgsql
И получил этот вывод:

NOTICE:  note
DO
Может кто-нибудь объяснить это?

 06.01.2023 10:35
0
0
214
2
Данный вопрос помечен как решенный
 Ответы 2
RAISE — это команда PL/pgSQL , которую можно использовать только внутри PL/pgSQL. Команда DO создает анонимный блок PL/pgSQL (что-то вроде «временной процедуры»), и поэтому вы можете использовать RAISE внутри этого кода PL/pgSQL.

RAISE нельзя использовать в обычном SQL, поэтому выдает ошибку

 06.01.2023 10:43
 Ответ принят как подходящий
Оберните RAISE процедурой

create procedure raise_notice (s text) language plpgsql as 
$$
begin 
    raise notice '%', s;
end;
$$;
и вызовите его в SQL

call raise_notice('note');
Для версии PG до 11 создайте функцию, которая returns void с тем же телом и select из него в SQL

select raise_notice('note');


Как вернуть данные в функцию входа в PL/pgSQL? Я хочу вернуть таблицу, в которой совпадают адрес электронной почты и пароль. Электронная почта уникальна
Вопросы
SQL
Как вернуть данные в функцию входа в PL/pgSQL? Я хочу вернуть таблицу, в которой совпадают адрес электронной почты и пароль. Электронная почта уникальна
Функция не выдает никаких ошибок и не показывает никакого возвращаемого значения.

CREATE OR REPLACE FUNCTION login(iemail VARCHAR,ipassword VARCHAR)
RETURNS TABLE(id INTEGER, name VARCHAR, lastName VARCHAR, age INTEGER, mobile VARCHAR,email VARCHAR)
LANGUAGE 'plpgsql'
AS $$
#variable_conflict use_variable
BEGIN
RETURN QUERY SELECT id, name, lastName, age, mobile,email from usertable WHERE email = iemail AND password = ipassword;
END;
$$;
Ниже запрос дает мне возвращаемое значение. Итак, я знаю, что мой запрос правильный. Также проверяются возвращаемые типы переменных.

SELECT id, name, lastName, age, mobile,email from usertable 
WHERE email='jaysrdra@gmail.com' AND password ='passwords';
я вызываю функцию с помощью:

SELECT * FROM login('jaysrdra@gmail.com','passwords');
 17.01.2023 09:02
1
3
55
2
Данный вопрос помечен как решенный
 Ответы 2
Похоже, вы неправильно вызываете функцию, должно быть что-то вроде этого, чтобы вызвать ее.

SELECT * INTO some_variable FROM login('jaysrdra@gmail.com', 'passwords');
 17.01.2023 09:10
 Ответ принят как подходящий
#variable_conflict use_variable является причиной. Поскольку все ваши выходные переменные (= столбцы) имеют то же имя, что и столбцы таблицы, Postgres возвращает выходные «переменные», которые не инициализированы.

Используйте явную ссылку на таблицу внутри запроса функции, чтобы избежать конфликта имен:

CREATE OR REPLACE FUNCTION login(iemail VARCHAR,ipassword VARCHAR)
RETURNS TABLE(id INTEGER, name VARCHAR, lastName VARCHAR, age INTEGER, mobile VARCHAR, email VARCHAR)
LANGUAGE plpgsql
AS $$
BEGIN
  RETURN QUERY 
    SELECT u.id, u.name, u.lastname, u.age, u.mobile, u.email 
    from usertable u
    WHERE u.email = iemail 
    AND u.password = ipassword;
END;
$$;
Обратите внимание, что для инкапсуляции простого запроса в функцию лучше всего подходит функция language sql — она также позволяет избежать конфликта между переменными и именами столбцов:

CREATE OR REPLACE FUNCTION login(iemail VARCHAR,ipassword VARCHAR)
  RETURNS TABLE(id INTEGER, name VARCHAR, lastName VARCHAR, age INTEGER, mobile VARCHAR, email VARCHAR)
LANGUAGE sql
AS $$
  SELECT id, name, lastname, age, mobile, email 
  from usertable 
  WHERE email = iemail 
  AND password = ipassword;
$$;
Спасибо, @horse_with_no_name. Я использовал #variable_conflict use_variable, чтобы избежать ERROR: column reference "name" is ambiguous. Никаких ошибок после его использования, но это усложнило отладку.

— 
Jay Sardar
 17.01.2023 17:41
Использование явной ссылки на таблицу внутри запроса функции, чтобы избежать конфликта имен; все решил.

— 
Jay Sardar
 17.01.2023 18:15



Перебор таблиц для получения максимальных дат из созданного столбца дат в Postgres
Вопросы
POSTGRESQL
Перебор таблиц для получения максимальных дат из созданного столбца дат в Postgres
Мне нужно отслеживать текущий поток данных, используя последнюю дату создания для набора таблиц. В принципе, мне нужно запустить пакет

SELECT MAX(z_date_creation)  
FROM table_schema.table_name
в наборе таблиц, которые я получаю с помощью

SELECT  
  c.table_schema,  
  c.table_name  
FROM information_schema."columns" c  
WHERE c.column_name LIKE '%z_date_creation'  
AND c.table_schema = 'datawarehouse'  
AND c.table_name NOT LIKE 'partition%'
а затем передать его в специальную таблицу «ods.dates_derniere_maj», по которой я буду подключать отчеты.

Я использую курсор как лучшую идею, чтобы перебирать таблицы, в которых нужно получить MAX(z_date_creation). Мне удается передать значения table_schema и table_name в мою таблицу ods.dates_derniere_maj, но я не могу найти способ также получить MAX(z_date_creation) из этих таблиц.

Я застрял с частью вложенного запроса.

Вот что я придумал до сих пор:

DO $$  
DECLARE  
    table_rec record ;  
    max_date TEXT DEFAULT NOW();  
    cursor1 CURSOR FOR  
      SELECT DISTINCT c.table_schema, c.table_name, c.column_name  
      FROM information_schema."columns" c  
      WHERE c.table_schema = 'datawarehouse'  
      AND c.table_name NOT LIKE 'partition%'  
      AND c.column_name LIKE '%creation%';  
    from_clause TEXT;  
    date_column TEXT;  
BEGIN  
  FOR table_rec IN cursor1
  LOOP  
  from_clause := CONCAT(table_rec.table_schema, '.', table_rec.table_name);  
  date_column := CONCAT(table_rec.table_schema, '.', table_rec.table_name,'.','z_date_creation');  

Which code herebelow ?

PREPARE nom_req (text, text) AS  
  SELECT MAX($1) FROM $2 ; ---> not working, syntax error on $2  
max_date := EXECUTE nom_req (date_column, from_clause) ; ---> not working  
  SELECT MAX(date_column) INTO max_date FROM CONCAT(from_clause) ; ----> not working  
 
INSERT INTO ods.dates_derniere_maj (schema_name, table_name, z_date_creation_max)  
    VALUES (table_rec.table_schema, table_rec.table_name, max_date);  
END LOOP;  
END $$;`
Я попытался передать переменные table_rec.table_schema и table_rec.table_name непосредственно в предложении FROM, но это не сработало, поэтому я попытался объединить их заранее.

Любая помощь будет высоко ценится !

Огромное спасибо !

Франк

 20.01.2023 19:41
0
0
52
2
Данный вопрос помечен как решенный
 Ответы 2
 Ответ принят как подходящий
Попробуйте что-то вроде этого:

CREATE FUNCTION max_date() RETURNS date LANGUAGE plpgsql AS
$$
DECLARE
  table_rec record ;
  max_date date ;
  result date ;
  cursor1 CURSOR FOR  
      SELECT DISTINCT c.table_schema, c.table_name, c.column_name  
      FROM information_schema."columns" c  
      WHERE c.table_schema = 'datawarehouse'  
      AND c.table_name NOT LIKE 'partition%'  
      AND c.column_name LIKE '%creation%';  
BEGIN
  FOR table_rec IN cursor1
  LOOP  
    EXECUTE FORMAT( 'SELECT max(%I) FROM %I.%I'
                  , table_rec.column_name
                  , table_rec.table_schema
                  , table_rec.table_name
                  ) 
    INTO max_date ;
    result = greatest(result, max_date) ;
  END LOOP ;
  RETURN result ;
END ;
$$ ;
см. результат теста в dbfiddle

 20.01.2023 23:53
Вот что я придумал с неоценимой помощью Эдуарда!

DO $$ 
DECLARE
    table_rec record ;
    max_date TEXT DEFAULT NOW();
    cursor1 CURSOR FOR SELECT DISTINCT c.table_schema, c.table_name, c.column_name
            FROM information_schema."columns" c
            WHERE c.table_schema = 'datawarehouse'
            AND c.table_name NOT LIKE 'partition%'
            AND c.column_name LIKE '%creation%';

BEGIN 
    FOR table_rec IN cursor1
    LOOP
        EXECUTE FORMAT( 'SELECT max(%I) FROM %I.%I'
                      , table_rec.column_name
                      , table_rec.table_schema
                      , table_rec.table_name
                      ) 
        INTO max_date ;
        INSERT INTO ods.dates_derniere_maj (schema_name, table_name, z_date_creation_max)
            VALUES (table_rec.table_schema, table_rec.table_name, max_date);
    END LOOP;
END $$;


Оператор выбора PL/pgSQL внутри триггера возвращает null, используя где NEW
Вопросы
SQL
Оператор выбора PL/pgSQL внутри триггера возвращает null, используя где NEW
я создаю триггер, который срабатывает при INSERT в таблице, и я хочу регистрировать структуру вставленных таблиц, поэтому я написал эту функцию

CREATE OR REPLACE FUNCTION update_table_log_received()
RETURNS TRIGGER AS $$
DECLARE
  added_column TEXT;
  target_table_name TEXT;
  old_column text;
BEGIN
  -- Check if a new column has been added
  IF (TG_OP = 'INSERT') THEN
    added_column := NEW."COLUMN_NAME";
    target_table_name := NEW."TABLE_NAME";
  END IF;
    SELECT column_name into old_column
                   FROM information_schema."columns"
                   WHERE table_schema = 'items' 
                   and table_name = LOWER(NEW."TABLE_NAME")
                  and column_name = LOWER(NEW."COLUMN_NAME");
if (coalesce(old_column,'')='' or old_column='' or old_column = added_column) THEN
  -- If a new column has been added
  IF (Lower(added_column) != 'sync') then
    
    -- Add the new column to the target table
        EXECUTE 'ALTER TABLE items.' || LOWER(target_table_name)|| ' ADD COLUMN ' || LOWER(added_column) || ' VARCHAR(50)';
  END IF;
end if;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;
выполняется этим TRIGGER :

CREATE TRIGGER update_table_log_received_trigger
AFTER INSERT
ON items."TABLE_LOG_RECEIVED"
FOR EACH ROW
EXECUTE FUNCTION update_table_log_received();
возвращаемое исключение следующее:

! ОШИБКА: столбец «x» отношения «y» уже существует Где: инструкция SQL « ALTER TABLE items. ДОБАВИТЬ СТОЛБЦ x VARCHAR(50) »

моя проблема сейчас в том, что он не должен проходить проверки If (я вставил код после многих изменений, у меня есть два условия if, которые делают одно и то же просто потому, что), я отлаживал и регистрировал операторы, чтобы отметить, что запрос выбора внутри моей функции, по-видимому, возвращает null. я также пытался использовать «ИСПОЛЬЗОВАНИЕ НОВОГО», но я не эксперт, поэтому я не мог заставить его работать

это проблема с объявленной переменной, которая не заполняется из «НОВОЙ» записи, или я неправильно выполняю оператор выбора?

Обновлено: tl; dr для моей проблемы, я хотел бы обновить таблицу в базе данных2 всякий раз, когда та же таблица (с той же структурой) изменяется из базы данных1, будь то добавленный столбец или измененный столбец, на данный момент я застрял на первая проблема добавить столбец.

Я записываю структуры своих таблиц в виде строк в новую таблицу и синхронизирую ее с Database2, чтобы затем триггер изменил ту же измененную таблицу из Database1, надеюсь, теперь это имеет больше смысла.

Database1 log_table, которая регистрирует все структуры моих таблиц: База данных2 log_table_received, которая является копией log_table, которая выполняется триггер всякий раз, когда вставляются новые значения;

 08.02.2023 10:17
0
2
60
2
Данный вопрос помечен как решенный
 Ответы 2
Попробуйте этот синтаксис:

CREATE OR REPLACE FUNCTION update_table_log_received()
RETURNS TRIGGER AS $$
DECLARE
  added_column TEXT;
  target_table_name TEXT;
  old_column text;
BEGIN
  -- Check if a new column has been added
  IF (TG_OP = 'INSERT') THEN
    added_column := new."column_name";
    target_table_name := new."table_name";
  END IF;

  if not exists(select 1 from information_schema."columns" where table_name = target_table_name and column_name = added_column) 
  then 
      EXECUTE 'ALTER TABLE items.' || LOWER(target_table_name)|| ' ADD COLUMN ' || LOWER(added_column) || ' VARCHAR(50)';
  end if; 
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;
Я попробовал на своей БД, это работает. Некоторые детали вы можете изменить самостоятельно.

 08.02.2023 19:13
 Ответ принят как подходящий
Зафиксированный; Вопрос должен был быть:

Как выбрать таблицы и столбцы таблицы внутри функции в postgresql.
Использованная литература: Как добавить столбец, если его нет в PostgreSQL?

Как проверить, существует ли таблица в заданной схеме

Как получить список имен столбцов и типов данных таблицы в PostgreSQL?

По сути, доступ к information_schema может получить только владелец, то есть пользователь, или (i) увидеть результат, когда я его запрашиваю, но он возвращает FALSE при выполнении внутри скрипта, подробнее здесь: https://stackoverflow.com/a/24089729/15170264

Полный триггер после исправления с помощью CTE для запроса pg_catalog также добавил ADD COLUMN IF NOT EXISTS в мой запрос на выполнение на всякий случай.

CREATE OR REPLACE FUNCTION update_table_log_received()
RETURNS TRIGGER AS $$
DECLARE
  added_column TEXT;
  target_table_name TEXT;
  old_column varchar;
    old_table varchar;
BEGIN
  -- Check if a new column has been added
  IF (TG_OP = 'INSERT') THEN
    added_column := NEW."COLUMN_NAME";
    target_table_name := NEW."TABLE_NAME";
  END IF;
 /*
  * --------------- --CTE to find Columns of table "Target_table_name" from pg_catalog
  */

    WITH cte_tables AS (
   SELECT
    pg_attribute.attname AS column_name,
    pg_catalog.format_type(pg_attribute.atttypid, pg_attribute.atttypmod) AS data_type
FROM
    pg_catalog.pg_attribute
INNER JOIN
    pg_catalog.pg_class ON pg_class.oid = pg_attribute.attrelid
INNER JOIN
    pg_catalog.pg_namespace ON pg_namespace.oid = pg_class.relnamespace
WHERE
    pg_attribute.attnum > 0
    AND NOT pg_attribute.attisdropped
    AND pg_namespace.nspname = 'items'
    AND pg_class.relname = 'trace'
ORDER BY
    attnum ASC
)
select column_name into old_column from cte_tables where 
column_name=LOWER(added_column);

 
  if (old_column is null )  then 
    -- Add the new column to the target table
        old_column := added_column;
        EXECUTE 'ALTER TABLE items.' || LOWER(target_table_name)|| ' ADD COLUMN IF NOT EXISTS ' || LOWER(added_column) || ' VARCHAR(50)';
    else
        old_column := added_column || 'already exists ! ';
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;


create TRIGGER update_table_log_received_trigger
AFTER INSERT
ON items."TABLE_LOG_RECEIVED"
FOR EACH ROW
EXECUTE FUNCTION update_table_log_received();
Переменная old_column хранит сообщение условия else, но я не возвращаю его, если бы это была простая функция.


Как сохранить определенные данные из многомерного массива в переменную
Вопросы
SQL
Как сохранить определенные данные из многомерного массива в переменную
У меня есть многомерный массив, подобный этому:

coeficiente VARCHAR[2][2];

В этом массиве я сохранил эту информацию:

{{"uwu","2"},{"owo","5"}}
У меня есть еще 2 переменные:

variable1 VARCHAR;
variable2 VARCHAR;
Я хочу сохранить «2» в переменной1 и «5» в переменной2 из этого примера содержимого многомерного массива.

Как мне это сделать?

Я думал, может быть, цикл for, но я до сих пор не знаю, как выполнить итерацию внутри структуры ARRAY[][] в plpgsql.

Ближайшие примеры, которые я мог найти в Интернете, были:

переполнение стека. Но они хранят массив из многомерного массива. Мне нужно только получить переменную внутри него.

Документация по Postgres. Но это не объясняет, как попасть внутрь одного конкретного «слота».

 17.12.2020 08:21
0
0
79
2
Данный вопрос помечен как решенный
 Ответы 2
Вы можете зацикливаться на двумерном массиве, используя два цикла for, также называемых вложенными циклами. Аналогично, чтобы зациклить n-мерный массив, вам нужно n циклов, вложенных друг в друга.

 17.12.2020 08:49
 Ответ принят как подходящий
Может я что-то упускаю, но:

variable1 := coeficiente[1][2];
variable2 := coeficiente[2][2];
будет делать то, что вы хотите.

do
$$
declare
  coeficiente VARCHAR[2][2] := '{{"uwu","2"},{"owo","5"}}';
  variable1 VARCHAR;
  variable2 VARCHAR;  
begin
  variable1 := coeficiente[1][2];
  variable2 := coeficiente[2][2];
  
  raise notice 'var1=%', variable1;
  raise notice 'var2=%', variable2;
end;
$$  
Выведет:

var1=2
var2=5


Различная обработка ошибок по умолчанию в Oracle и PostgreSQL
Вопросы
ORACLE
Различная обработка ошибок по умолчанию в Oracle и PostgreSQL
Я сравниваю поведение Oracle и PostgreSQL по умолчанию после обнаружения ошибки в коде PL/SQL (PL/pgSQL). Для этой цели я написал аналогичный код Oracle и PostgreSQL, показанный ниже.

Код Oracle (db<>fiddle):

CREATE TABLE table1 (col1 int);

CREATE PROCEDURE raise_error AS
BEGIN
  INSERT INTO table1 VALUES (1/0);
END;
/

INSERT INTO table1 VALUES (1);
CALL raise_error();
COMMIT;
SELECT * FROM table1;
Код PostgreSQL (db<>fiddle):

CREATE TABLE table1 (col1 int);

CREATE PROCEDURE raise_error() AS $$
BEGIN
  INSERT INTO table1 VALUES (1/0);
END;
$$ LANGUAGE plpgsql;

BEGIN TRANSACTION; -- disable auto-commit

INSERT INTO table1 VALUES (1);
CALL raise_error();
COMMIT;
SELECT * FROM table1;
Примечание. В PostgreSQL я дополнительно запускаю оператор BEGIN TRANSACTION, чтобы отключить автоматическую фиксацию, потому что в Oracle нет автоматической фиксации, и я хочу, чтобы оба кода были аналогичными.

Результатом запроса SELECT * FROM table1 является одна строка в Oracle и ни одной строки в PostgreSQL.

Как видите, аналогичный код в Oracle и PostgreSQL дает разные результаты. В чем причина этой разницы в обработке ошибок по умолчанию?

 17.12.2020 15:15
2
3
517
2
Данный вопрос помечен как решенный
 Ответы 2
В Oracle вы используете две отдельные транзакции, первая успешна, а вторая терпит неудачу. В PostgreSQL вы явно указываете ему использовать только одну транзакцию и обрабатывать операторы вместе.

В Oracle, если вы используете анонимный блок PL/SQL для группировки операторов в одну транзакцию:

BEGIN
  INSERT INTO table1 VALUES (1);
  raise_error();
END;
/
И, что то же самое, в PostgreSQL:

DO
$$
BEGIN
  INSERT INTO table1 VALUES (1);
  CALL raise_error();
END;
$$ LANGUAGE plpgsql;
Тогда в таблице не будет строк, так как исключение из процедуры откатит всю транзакцию.

Или в Oracle вы можете сделать:

INSERT INTO table1 VALUES (1);

DECLARE
  divide_by_zero EXCEPTION;
  PRAGMA EXCEPTION_INIT( divide_by_zero, -1476 );
BEGIN
  raise_error();
EXCEPTION
  WHEN DIVIDE_BY_ZERO THEN
    ROLLBACK;
END;
/
Это имело бы тот же эффект отката обеих транзакций до последней фиксации.

db<>fiddle Oracle PostgreSQL

 17.12.2020 15:24
 Ответ принят как подходящий
Oracle и PostgreSQL действительно ведут себя здесь по-разному.

В Oracle есть то, что я бы назвал «откатом на уровне оператора»: если оператор, выполняющийся внутри транзакции, вызывает ошибку, откатываются только результаты этого оператора, и транзакция продолжается.

В PostgreSQL любая ошибка внутри транзакции прерывает всю транзакцию, поэтому вы можете только откатить транзакцию, и это не имеет никакого эффекта. Это больше в духе «все или ничего», но, насколько я понимаю, в стандарте SQL нет конкретных указаний по этому поводу, так что оба варианта поведения можно оспорить.

Однако вы можете использовать стандартные соответствующие точки сохранения в PostgreSQL для «восстановления» после ошибки в транзакции:

START TRANSACTION;

INSERT INTO table1 VALUES (1);

/* set a savepoint we can revert to */
SAVEPOINT x;

CALL raise_error();

ROLLBACK TO SAVEPOINT x;

/* now the INSERT can be committed */
COMMIT;
Но имейте в виду, что вы не используете слишком много точек сохранения (не более 64) на транзакцию, иначе производительность может пострадать.

Подробнее об атомарности на уровне операторов в документации Oracle

— 
kfinity
 17.12.2020 17:20



Как параметризовать параметрический тип столбца в PostgreSQL `execute format()`?
Вопросы
POSTGRESQL
Как параметризовать параметрический тип столбца в PostgreSQL `execute format()`?
У меня есть такой код PL/pgSQL:

DECLARE
    v_schema_name pg_catalog.pg_namespace.nspname%type := 'my_schema';
    v_table_name pg_catalog.pg_tables.tablename%type := 'my_table';
    v_column_name pg_catalog.pg_attribute.attname%type := 'my_column';
    v_new_type TEXT := 'DECIMAL(16, 12)';
BEGIN
    -- Omitted other code using v_new_type
    EXECUTE format(
        'ALTER TABLE %I.%I ALTER COLUMN %I TYPE %I',
        v_schema_name,
        v_table_name,
        v_column_name,
        v_new_type
    );
END;
Это приводит к следующей ошибке:

ОШИБКА: тип "DECIMAL(16, 12)" не существует

Вместо этого я попытался изменить последнюю часть строки формата на %L, но это приводит к этой ошибке:

ОШИБКА: синтаксическая ошибка в или около "'DECIMAL(16, 12)'"

Как мне параметризовать этот запрос? Мне нужно разбить его на три части или что-то в этом роде?

Обновлять:

«Типы десятичного и числового эквивалентны».
Тип numeric можно найти с помощью select * from pg_catalog.pg_type where typname = 'numeric';, поэтому v_new_type pg_catalog.pg_type.typname%type := 'decimal'; можно использовать.
 31.03.2023 02:47
1
2
68
2
Данный вопрос помечен как решенный
 Ответы 2
Объявление типа не является ни идентификатором, ни литералом. Используйте %s.

 31.03.2023 03:09
 Ответ принят как подходящий
спецификация типа в Postgres может быть очень сложной из-за типов ANSI SQL, таких как DOUBLE PRECISION или TIMESTAMP WITH TIME ZONE. Разбор этих типов должен поддерживаться парсером Postgres, и тогда этот синтаксис разрешен только для встроенных типов. Для более распространенных типов спецификация типа состоит из двух частей: идентификатора и необязательного модификатора типа. Итак, ваш код должен выглядеть так:

DECLARE
    v_schema_name pg_catalog.pg_namespace.nspname%type := 'my_schema';
    v_table_name pg_catalog.pg_tables.tablename%type := 'my_table';
    v_column_name pg_catalog.pg_attribute.attname%type := 'my_column';
    v_new_type TEXT := 'decimal'; -- Postgres uses lowercase notation
    v_new_type_mod TEXT := '(16, 12)'
BEGIN
    -- Omitted other code using v_new_type
    EXECUTE format(
        'ALTER TABLE %I.%I ALTER COLUMN %I TYPE %I%s',
        v_schema_name,
        v_table_name,
        v_column_name,
        v_new_type,
        v_new_type_mod
    );
END;
Примечание. Вы можете использовать %s, как предлагает @klin, и вы можете очистить его, приведя к regtype. Но для этого требуется правильно введенное имя типа.

DECLARE
  ...
  v_new_type TEXT := 'decimal(16, 12)';
BEGIN
  -- sanitize data type
  PERFORM v_new_type::regtype;
  EXECUTE format(... TYPE %s',
     ...
     v_new_type);
END;
Я проголосую, когда у меня будет время проверить, но это похоже на хорошее решение!

— 
l0b0
 01.04.2023 01:41
Перевернув это, я смог использовать v_new_type regtype := 'decimal(16, 12)'; со строкой формата %I и v_new_type::text там, где мне нужен был тип в виде строки.

— 
l0b0
 05.04.2023 04:35



Как составить список таблиц конкретной базы данных и отсортировать их по размеру с помощью PostgreSQL?
Вопросы
DATABASE
Как составить список таблиц конкретной базы данных и отсортировать их по размеру с помощью PostgreSQL?
Я попытался выбрать список баз данных и выбрать все таблицы из каждой базы данных, упорядочив первые десять таблиц по их размеру, включая их индексы, через PL/pgSQL, но у меня возникла проблема с объединением запроса к базе данных с помощью запрос таблиц и их размеров, входящих в конкретную базу данных.

Я начал так:

    DO $$
DECLARE
  database_name pg_database.datname%TYPE;
  total_table_size pg_tables.tablename%TYPE;
    rec record;
BEGIN
    FOR rec IN SELECT datname
  FROM pg_database
LOOP
  database_name := rec.datname;
 
  raise notice 'Database name: %', database_name;
 
  SELECT tablename,
  pg_total_relation_size(table_name) AS total_table_size
  FROM pg_tables
  INTO table_name, total_table_size
  ORDER BY pg_total_relation_size(relid) DESC
  LIMIT 10;
 END LOOP;
END;
$$;
Я не знаю, как указать, что я хочу, чтобы первые десять имен таблиц и их размеры были упорядочены от наибольшего к наименьшему из текущей выбранной базы данных. Может ли кто-нибудь помочь мне с этим, пожалуйста?

Я думал о том, чтобы как-то объединить запросы, но не нашел столбца, который можно было бы использовать для объединения.

Я искал подобные проблемы в сообществе, но чего-то столь конкретного не нашел.

Заранее спасибо.

 04.10.2023 12:21
1
0
81
2
Данный вопрос помечен как решенный
 Ответы 2
Если вы подключены к одной базе данных, я не уверен, что вы сможете получить информацию из другой базы данных. Возможно, это можно сделать с помощью dblink.

Ниже будет приведен список размеров таблиц в текущей базе данных.

    SELECT
  schema_name,
  relname,
  pg_size_pretty(table_size) AS size,
  table_size
FROM (
       SELECT
         pg_catalog.pg_namespace.nspname           AS schema_name,
         relname,
         pg_relation_size(pg_catalog.pg_class.oid) AS table_size
       FROM pg_catalog.pg_class
         JOIN pg_catalog.pg_namespace ON relnamespace = pg_catalog.pg_namespace.oid
     ) t
WHERE schema_name NOT LIKE 'pg_%'
ORDER BY table_size DESC;
 04.10.2023 13:11
 Ответ принят как подходящий
Вы уже ограничиваете результат только 10 верхними строками, добавляя LIMIT 10. Вы просто дублируете одни и те же 10 строк столько раз, сколько баз данных в вашем каталоге, но все равно это результаты для текущей базы данных, к которой вы подключены.

Вы, вероятно, знакомы со всеми функциями размера объектов базы данных, но хотя упорядочивать по размеру в байтах удобно, пропустите их pg_size_pretty() в разделе выбора, чтобы сделать их читабельными.

Не забывайте о схемах/пространствах имен . Вы можете иметь несколько таких таблиц в одной базе данных и таблицу с одинаковым именем в каждой. В pg_tables это под schemaname, в information_schema.tables это под table_schema. Рекомендация такая

Поскольку информационная схема соответствует стандарту SQL, а описанные здесь представления специфичны для PostgreSQL, обычно лучше использовать информационную схему, если она предоставляет всю необходимую информацию.

Хотя вы можете перечислить все базы данных, роли и табличные пространства, доступные в кластере, в системных каталогах, общекластерного каталога для пространств имен и таблиц не существует. В PostgreSQL нет собственного/встроенного/стандартного способа переключения баз данных внутри сеанса, а также способа ссылаться на объекты в других базах данных, будь то в том же кластере или где-либо еще. Чтобы иметь возможность делать эти вещи внутри сеанса, вам нужен postgres_fdw или dblink, оба из которых фактически запускаются, и дополнительный клиент от вашего имени.

Вне базы данных вы можете просто поручить своему клиенту открывать и закрывать соединения где угодно и как угодно (идея с \c или \connect -reuse-previous=on в psql), пока вы в порядке, перелопачивая данные самостоятельно и поддерживать отдельную утилиту.

Существуют готовые внешние инструменты, которые можно использовать для мониторинга PostgreSQL.

CREATE VIEW v_pg_total_relation_sizes в каждой из ваших баз данных (здесь приведены примеры, которые вы можете просто добавить в начале create view ... as). Чтобы он присутствовал по умолчанию в базах данных, создаваемых в будущем, создайте его также в базе данных template1 . Сделайте их видимыми через postgres_fdw, затем создайте представление union локального и всех связанных. В зависимости от размера ваших баз данных, если это происходит медленно, вы можете рассмотреть возможность создания материализованного представления для его кэширования.

Вот демо-версия пункта 6 выше: (db<>fiddle)

create table local_table as
select generate_series(1,2e5,1), (gen_random_uuid())::text;

create view v_pg_total_relation_sizes as 
SELECT nspname || '.' || relname AS "relation",
    pg_size_pretty(pg_total_relation_size(C.oid)) AS "readable_size",
    pg_total_relation_size(C.oid) as size
FROM pg_class C
LEFT JOIN pg_namespace N ON (N.oid = C.relnamespace)
WHERE nspname NOT IN ('pg_catalog', 'information_schema', 'pg_toast')
ORDER BY pg_total_relation_size(C.oid) DESC;
Подключитесь к своей базе данных template1 (она всегда создается во время первоначальной настройки PostgreSQL, поскольку она должна быть именно шаблоном для всех новых баз данных) и создайте аналогичные объекты:

create schema neighbour_schema;

create table neighbour_schema.neighbour_table as
select generate_series(1,3e5,1), (gen_random_uuid())::text;

create view neighbour_schema.v_pg_total_relation_sizes as 
SELECT nspname || '.' || relname AS "relation",
    pg_size_pretty(pg_total_relation_size(C.oid)) AS "readable_size",
    pg_total_relation_size(C.oid) as size
  FROM pg_class C
  LEFT JOIN pg_namespace N ON (N.oid = C.relnamespace)
  WHERE nspname NOT IN ('pg_catalog', 'information_schema', 'pg_toast')
  ORDER BY pg_total_relation_size(C.oid) DESC;

create database neighbour_db;
Теперь, когда они есть в template1, все новые базы данных, созданные с помощью create database, будут иметь его с самого начала.

При настройке postgres_fdw (и/или dblink) обратите внимание, что по умолчанию будет использоваться локальный сокет домена Unix , если вы не предоставите информацию об хосте и пользователе. Для разных пользователей и хостов убедитесь, что вы также обновляете pg_hba.conf на всех экземплярах, к которым вы подключаетесь/ссылаетесь.

В вашей основной базе данных:

create extension postgres_fdw;

CREATE SERVER foreign_server
        FOREIGN DATA WRAPPER postgres_fdw
        OPTIONS (dbname 'neighbour_db');
CREATE USER MAPPING FOR current_user
        SERVER foreign_server
        OPTIONS (user 'postgres');
CREATE FOREIGN TABLE fdw_v_pg_total_relation_sizes (
        relation text,
        readable_size text,
        size bigint )
  SERVER foreign_server
  OPTIONS (schema_name 'neighbour_schema', 
           table_name 'v_pg_total_relation_sizes');
Настройте материализованное представление, а также UNION ALL локальные и связанные представления:

create materialized view f_v_cluster_pg_total_relation_sizes as 
select current_database() as dbname,* from v_pg_total_relation_sizes
union all
select 'neighbour_db',* from fdw_v_pg_total_relation_sizes
order by size desc;

refresh materialized view f_v_cluster_pg_total_relation_sizes;

select * from f_v_cluster_pg_total_relation_sizes;
имя базы данных связь readable_size размер сосед_дб сосед_схема.neighbour_table 22 МБ 23076864 постгрес public.local_table 15 МБ 15736832 постгрес public.f_v_cluster_pg_total_relation_sizes 16 КБ 16384 постгрес public.pg_temp_16464 8192 байта 8192 постгрес public.dblink_pkey_results 0 байт 0 постгрес public.fdw_v_pg_total_relation_sizes 0 байт 0 постгрес public.v_pg_total_relation_sizes 0 байт 0 сосед_дб сосед_схема.v_pg_total_relation_sizes 0 байт 0
Обратите внимание, что это представление необходимо переопределять каждый раз при добавлении новых баз данных, что можно автоматизировать с помощью динамического SQL в подпрограмме PL/pgSQL, хотя и не полностью, поскольку ни обычный триггер pg_databse не может быть создан, ни событие . триггер ddl_statement_start/_end может срабатывать при create database.

Спасибо за ваш ответ. Я начал пробовать. Как вы сказали, я уже решил пункт 1 и исправил пункты 2 и 3. Но могу ли я спросить... То есть вы имеете в виду, что я могу использовать либо dblink, либо postgres_fdw, чтобы обеспечить взаимодействие баз данных, или мне все равно придется использовать оба? И что вы подразумеваете под «Сделать их видимыми через postgres_fdw», есть ли у вас пример? Спасибо.

— 
Diogo dos Santos
 04.10.2023 16:04
Не оба dblink и postgres_fdw, только один из них. Если вам нужна рекомендация, я бы выбрал postgres_fdw. В документе есть пример. Несмотря на то, что вы работаете с представлениями, вы все равно связываете их с помощью create foreigntablethe_linked_thing. Как только это будет сделано, вы сможете удобно select * from the_linked_thing; использовать базу данных, к которой вы сейчас подключены, даже если объект находится где-то еще.

— 
Zegarek
 04.10.2023 17:46
В итоге я запутался и не обратил внимания на детали. Это следует делать с использованием баз данных, расположенных в одном экземпляре. Поэтому вместо подключения баз данных через dblink или postgres_fdw мне просто нужно будет добавить «\c 'datname'» в мой код PL/pgSQL для каждой найденной базы данных, а затем сделать выбор для объектов.

— 
Diogo dos Santos
 05.10.2023 13:43
Кстати, знаете ли вы, какой тип данных я мог бы использовать для возврата pg_relation_size или total_pg_relation_size? Я получаю сообщение об ошибке, когда пытаюсь выбрать его в переменную oid через PL/pgSQL.

— 
Diogo dos Santos
 05.10.2023 14:05
1) \c — это метакоманда psql, не имеющая эквивалента в простом SQL или PL/pgSQL. Конечно, вполне жизнеспособное решение — настроить внешнюю утилиту, которая делает все это (демон/фоновый сервис, подключающийся через psql), но это немного выходит за рамки вопроса в этой теме. Кроме того, между этим и вышеописанным будет небольшая разница — и dblink, и postgres_fdw используют внешний клиент, но они позволяют вам использовать его из вашей базы данных декларативным образом, без необходимости поддерживать отдельную, автономную вещь.

— 
Zegarek
 05.10.2023 14:12
2) Вы можете проверить это в документе: pg_total_relation_size ( regclass ) → bigint - они оба возвращают bigint, поэтому лучше принять их вывод в столбец их собственного типа.
— 
Zegarek
 05.10.2023 14:13
Уточняю 1) далее: в PostgreSQL нет собственного/встроенного/стандартного способа переключения баз данных изнутри сеанса, а также нет способа ссылаться на объекты в других базах данных (за исключением каталогов уровня кластера), будь то в одном и том же кластер или где-то еще. Если бы это было так, было бы тривиально просто указать запросу извлекать записи из соседней/удаленной базы данных вместо локальной базы данных или, по крайней мере, собирать записи из цикла, переключая целевую базу данных между итерациями. Вот тут-то и появляются postgres_fdw и dblink, и обеспечение этого является их основной целью.

— 
Zegarek
 05.10.2023 14:31
Я понимаю, что вы имеете в виду, большое спасибо и прошу прощения, если я плохо выразился. Я обнаружил, что не могу использовать postgres_fdw, у меня нет пакета, который мне нужен, поэтому мне нужно будет использовать dblink. Вероятно, мне придется задать еще один вопрос. Я хотел бы создать функцию, которая бы брала необходимую мне информацию об объектах из каждой базы данных в кластере. Мне уже удалось сделать это в текущей базе данных, но я не совсем уверен, как собрать эту информацию из других баз данных, но я понял, что для этого мне понадобится dblink.

— 
Diogo dos Santos
 05.10.2023 14:56
Вы можете поделиться ссылкой на следующий вопрос здесь, я посмотрю. В демо-версии вы можете увидеть пример использования dblink, если это поможет. Также есть dblink_fdw, который вы можете использовать почти так же, как postgres_fdw.

— 
Zegarek
 05.10.2023 15:01



Хранимая процедура PostgreSQL для получения сотрудника по входному идентификатору из объединенной таблицы
Вопросы
SQL
Хранимая процедура PostgreSQL для получения сотрудника по входному идентификатору из объединенной таблицы
Я пытаюсь написать хранимую процедуру, чтобы получить сотрудника по входному идентификатору. В SQL Server это выглядит так:

CREATE PROCEDURE [dbo].[GetbyID]
    (@ID NVARCHAR(50))
AS
BEGIN
    SELECT * 
    FROM dbo.Employee AS M
    LEFT OUTER JOIN dbo.Position AS F1 ON M.PositionID = F1.PositionID
    LEFT OUTER JOIN dbo.Department AS F2 ON F1.DepartmentID = F2.DepartmentID
    WHERE M.ID = @ID
END
Я переписываю это в PostgreSQL следующим образом:

DROP PROCEDURE IF EXISTS GetbyID(p_ID TEXT);

CREATE OR REPLACE PROCEDURE GetbyID(p_ID TEXT)
LANGUAGE plpgsql
AS $$
BEGIN
    SELECT * FROM "Employee" AS M
    LEFT OUTER JOIN "Position" AS F1 ON M."PositionID" = F1."PositionID_P"
    LEFT OUTER JOIN "Department" AS F2 ON F1."DepartmentID_P" = F2."DepartmentID"
    WHERE M."ID" = p_ID;
END;
$$;
Однако он говорит: «Запрос успешно возвращен», однако, когда я пытаюсь проверить с помощью CALL, например:

CALL GetbyID('E12345');
Я получаю эту ошибку:

ОШИБКА: запрос не имеет места назначения для данных результата
СОВЕТ: если вы хотите отказаться от результатов SELECT, используйте вместо этого PERFORM.
КОНТЕКСТ: функция PL/pgSQL getbyid(text) строка 3 в операторе SQL
Состояние SQL: 42601

Как я могу решить эту проблему? Спасибо.

 22.02.2024 11:10
0
1
354
2
Данный вопрос помечен как решенный
 Ответы 2
Я бы использовал функцию, а не хранимую процедуру, функции могут возвращать набор результатов, чего вы, похоже, и пытаетесь достичь с помощью своего оператора SELECT.

DROP FUNCTION IF EXISTS GetbyID(TEXT);

CREATE OR REPLACE FUNCTION GetbyID(p_ID TEXT)
RETURNS SETOF RECORD
LANGUAGE plpgsql
AS $$
BEGIN
    RETURN QUERY SELECT M.*, F1.*, F2.* FROM "Employee" AS M
    LEFT OUTER JOIN "Position" AS F1 ON M."PositionID" = F1."PositionID_P"
    LEFT OUTER JOIN "Department" AS F2 ON F1."DepartmentID_P" = F2."DepartmentID"
    WHERE M."ID" = p_ID;
END;
$$;
Чтобы вызвать эту функцию и получить ее результат, вы должны использовать следующее:

SELECT * FROM GetbyID('E12345') AS t( /* column list */ );
При использовании AS t(/* column list */);, вам необходимо указать структуру возвращаемой таблицы, перечислив столбцы и их типы данных, соответствующие выходным данным вашей функции. Например, если ваша функция возвращает два столбца employee_name TEXT and department_name TEXT, вы должны написать:

SELECT * FROM GetbyID('E12345') AS t(employee_name TEXT, department_name TEXT);
 22.02.2024 11:48
 Ответ принят как подходящий
Сначала прочтите документацию для PL/pgSQL. Это не против вас, просто если у вас есть опыт работы с MSSQL - ваш пример похож на T-SQL, вам следует вообще забыть о процедурах. PostgreSQL похож на Oracle, а написание хранимых процедур в Oracle или PostgreSQL сильно отличается от написания хранимых процедур в MSSQL.

Процедуры PostgreSQL не могут возвращать набор результатов. Если есть возможность, вы можете использовать переменные OUT, но это не относится к процедуре. Процедуры в Postgres следует использовать, когда вы хотите контролировать транзакции, когда вы хотите (или должны) использовать операторы COMMIT или ROLLBACK внутри кода. В другом месте вам следует использовать функции.

create table foo(id int primary key, a int, b int);
insert into foo values(1, 10, 20);
insert into foo values(2, 30, 40);

create table boo(foo_id int, z int);
insert into boo values(1, 100);
insert into boo values(2, 1000);

CREATE OR REPLACE PROCEDURE public.foo_boo(OUT a integer, OUT b integer, OUT z integer, IN f integer)
 LANGUAGE plpgsql
AS $procedure$
begin
  select foo.a, foo.b, boo.z into a, b, z 
    from foo join boo on foo.id = boo.foo_id
    where foo_id = f;
  return;
end;
$procedure$

(2024-02-22 12:20:16) postgres=# call foo_boo(null, null, null, 1);
┌────┬────┬─────┐
│ a  │ b  │  z  │
╞════╪════╪═════╡
│ 10 │ 20 │ 100 │
└────┴────┴─────┘
(1 row)
Это работает, но если вы хотите скрыть зависимости между таблицами и упростить использование, просто используйте представление:

create view foo_boo_v as 
  select foo.a, foo.b, boo.z, boo.foo_id
    from foo join boo on foo.id = boo.foo_id;
 
CREATE VIEW
(select * from foo_boo_v where foo_id = 1;
┌────┬────┬─────┬────────┐
│ a  │ b  │  z  │ foo_id │
╞════╪════╪═════╪════════╡
│ 10 │ 20 │ 100 │      1 │
└────┴────┴─────┴────────┘
(1 row)
Или вы можете использовать функцию. Для этих функций с одним оператором лучшими функциями являются функции, написанные на языке SQL.

create or replace function foo_boo_f(out a int, out b int, out z int, f int)
returns setof record as $$ 
  select foo.a, foo.b, boo.z 
    from foo join boo on foo.id = boo.foo_id
    where foo_id = f;
$$ language sql stable;
Не забудьте установить флаг stable. Без него запрос не будет встроенным, а невстроенные функции SQL не будут быстрыми. Вы можете проверить встраивание:

(2024-02-22 12:28:37) postgres=# explain analyze select * from foo_boo_f(1);
┌─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
│                                                     QUERY PLAN                                                      │
╞═════════════════════════════════════════════════════════════════════════════════════════════════════════════════════╡
│ Nested Loop  (cost=0.15..46.53 rows=11 width=12) (actual time=0.054..0.061 rows=1 loops=1)                          │
│   ->  Index Scan using foo_pkey on foo  (cost=0.15..8.17 rows=1 width=12) (actual time=0.026..0.029 rows=1 loops=1) │
│         Index Cond: (id = 1)                                                                                        │
│   ->  Seq Scan on boo  (cost=0.00..38.25 rows=11 width=8) (actual time=0.021..0.023 rows=1 loops=1)                 │
│         Filter: (foo_id = 1)                                                                                        │
│         Rows Removed by Filter: 1                                                                                   │
│ Planning Time: 0.511 ms                                                                                             │
│ Execution Time: 0.130 ms                                                                                            │
└─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘
(8 rows)
PL/pgSQL также можно использовать:

create or replace function foo_boo_f(out a int, out b int, out z int, f int) returns setof record as $$
begin
  return query select foo.a, foo.b, boo.z 
    from foo join boo on foo.id = boo.foo_id
    where foo_id = f;
end;
$$ language plpgsql stable;
CREATE FUNCTION
(2024-02-22 12:32:39) postgres=# explain analyze select * from foo_boo_f(1);
┌─────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
│                                                 QUERY PLAN                                                  │
╞═════════════════════════════════════════════════════════════════════════════════════════════════════════════╡
│ Function Scan on foo_boo_f  (cost=0.25..10.25 rows=1000 width=12) (actual time=0.833..0.834 rows=1 loops=1) │
│ Planning Time: 0.119 ms                                                                                     │
│ Execution Time: 0.891 ms                                                                                    │
└─────────────────────────────────────────────────────────────────────────────────────────────────────────────┘
(3 rows)
Функция PL/pgSQL никогда не может быть встроена, но выполнение функции plpgsql должно быть быстрее, чем выполнение не встроенной функции SQL (по нескольким причинам).

Опять же, очень важна правильная установка флага stable. Без него функция помечается как volatile и некоторые возможные оптимизации блокируются. Почитайте об этом в документации — тема о ключевых словах volatile, stable или immutable очень важна для производительности.

Процедуры или функции могут возвращать курсоры. Внутренне это похоже на то, что делает T-SQL.

CREATE OR REPLACE PROCEDURE public.foo_boo_c(IN f integer, OUT c refcursor)
 LANGUAGE plpgsql
AS $procedure$
begin
  open c for select foo.a, foo.b, boo.z              
    from foo join boo on foo.id = boo.foo_id
    where foo_id = f;
  return;
end;
$procedure$
;
CREATE PROCEDURE
(2024-02-23 07:09:52) postgres=# begin;
BEGIN
(2024-02-23 07:09:59) postgres=# call foo_boo_c(1, NULL);
┌────────────────────┐
│         c          │
╞════════════════════╡
│ <unnamed portal 1> │
└────────────────────┘
(1 row)

(2024-02-23 07:10:14) postgres=# fetch all from "<unnamed portal 1>";
┌────┬────┬─────┐
│ a  │ b  │  z  │
╞════╪════╪═════╡
│ 10 │ 20 │ 100 │
└────┴────┴─────┘
(1 row)

(2024-02-23 07:10:39) postgres=# close "<unnamed portal 1>";
CLOSE CURSOR
(2024-02-23 07:11:00) postgres=# call foo_boo_c(2, NULL);
┌────────────────────┐
│         c          │
╞════════════════════╡
│ <unnamed portal 2> │
└────────────────────┘
(1 row)

(2024-02-23 07:11:06) postgres=# fetch all from "<unnamed portal 2>";
┌────┬────┬──────┐
│ a  │ b  │  z   │
╞════╪════╪══════╡
│ 30 │ 40 │ 1000 │
└────┴────┴──────┘
(1 row)

(2024-02-23 07:11:32) postgres=# close "<unnamed portal 2>";
CLOSE CURSOR
(2024-02-23 07:11:37) postgres=# commit;
COMMIT
Если вы не вызываете эту процедуру рекурсивно, вы можете передать имя курсора в качестве аргумента, но вы должны убедиться, что это имя не будет использоваться в этот раз:

CREATE OR REPLACE PROCEDURE public.foo_boo_c2(IN f integer, c refcursor)
 LANGUAGE plpgsql
AS $procedure$
begin
  open c for select foo.a, foo.b, boo.z
    from foo join boo on foo.id = boo.foo_id
    where foo_id = f;
  return;
end;
$procedure$
;
CREATE PROCEDURE
(2024-02-23 07:18:52) postgres=# begin;                                                                  
BEGIN
(2024-02-23 07:18:56) postgres=# call foo_boo_c2(2, 'mycursor');
CALL
(2024-02-23 07:19:13) postgres=# fetch all from mycursor;
┌────┬────┬──────┐
│ a  │ b  │  z   │
╞════╪════╪══════╡
│ 30 │ 40 │ 1000 │
└────┴────┴──────┘
(1 row)

(2024-02-23 07:19:28) postgres=# close mycursor;
CLOSE CURSOR
(2024-02-23 07:19:34) postgres=# commit;
COMMIT
Это имеет смысл. Спасибо. Но если в моей таблице много столбцов и я хочу вернуть их все, есть ли другие способы вместо перечисления всех переменных OUT?

— 
Alan
 22.02.2024 21:38
@Алан - если вы работаете с одной таблицей, вы можете использовать составной тип, но его неудобно использовать, когда результат получен из объединенных таблиц. Вы можете использовать курсоры. Я написал пример в ответе.

— 
Pavel Stehule
 23.02.2024 07:03



Проверить массив имен таблиц
Вопросы
SQL
Проверить массив имен таблиц
У меня есть требование, чтобы сценарий bash передавал строку, содержащую имена таблиц, в анонимный блок PL/pgSQL, который будет обрабатывать таблицы, если они существуют в базе данных Postgres.

Ниже приведен код PL/pgSQL, предполагающий, что переменная заданных_таблиц содержит строку, состоящую из имен таблиц, предоставленных с помощью сценария bash.

do $do$
<<outerblock>>
declare
    tab text;
    given_tables text[] := ARRAY['ocab1.cust_docu_map','ocsbc2.cust_docu_map'];
    table_names  text[] := ARRAY(
                              BEGIN
                                FOREACH tab IN ARRAY given_tables loop
                                    IF EXISTS
                                        ( SELECT 1
                                          FROM pg_class
                                          WHERE oid = tab::regclass
                                        )
                                    THEN
                                          SELECT concat_ws('.',relnamespace::regnamespace::text,relname)
                                          FROM pg_class
                                          WHERE oid = tab::regclass
                                          AND relreplident != 'f';
                                    END IF;
                                END LOOP;
                              END
                            );
begin
  foreach table in array table_names loop
    raise notice 'here is the table - %',outerblock.table;  
  end loop;
end $do$;
Но ошибки кода:

ERROR:  mismatched parentheses at or near ";"
LINE 18:             AND relreplident != 'f';
                                            ^
Не знаете, где я ошибаюсь?

 03.04.2024 20:11
1
2
57
2
Данный вопрос помечен как решенный
 Ответы 2
Этот код недействителен, вы не можете создать такой массив. И оно вам тоже не понадобится, просто выполните запрос на получение таблиц из pg_class. Что-то вроде этого:

DO
$do$
    DECLARE
        given_tables TEXT[] = ARRAY ['ocab1.cust_docu_map','ocsbc2.cust_docu_map'];
        _tab          TEXT;
        _row         RECORD;
    BEGIN
        FOREACH _tab IN ARRAY given_tables
            LOOP
                FOR _row IN
                    SELECT CONCAT_WS('.', relnamespace::REGNAMESPACE::TEXT, relname) AS t
                    FROM pg_class
                    WHERE oid = _tab::REGCLASS -- error when table doesn't exist!
                      AND relreplident != 'f'
                    LOOP
                        RAISE NOTICE 'here is the table - %', _row.t;
                    END LOOP;
            END LOOP;
    END
$do$;
Будьте осторожны: этот запрос завершается ошибкой при поиске несуществующей таблицы. Вам лучше запросить имя relname и имя схемы. В этом случае вы просто не получите результата.

 03.04.2024 20:52
 Ответ принят как подходящий
DO
$do$
DECLARE
   _given_tbls text[] := '{ocab1.cust_docu_map,ocsbc2.cust_docu_map}';
   _tbl text;
BEGIN
   FOR _tbl IN
      SELECT format('%I.%I', n.nspname, c.relname)         -- properly quoted
      FROM   unnest(_given_tbls) t(tbl)
      JOIN   pg_class     c ON c.oid = to_regclass(t.tbl)  -- does not raise exception
      JOIN   pg_namespace n ON n.oid = c.relnamespace
      WHERE  c.relreplident != 'f'
   LOOP
      RAISE NOTICE 'valid table: %', _tbl;  
      -- or do something here!
   END LOOP;
END
$do$;
to_regclass(_tab) не вызывает исключения для недопустимых имен таблиц. Видеть:

Как проверить, существует ли таблица в данной схеме
Помните, что идентификаторы, хранящиеся в таблицах каталога, могут нуждаться в двойных кавычках. Используйте format() или quote_ident() в кавычках для защиты от синтаксических ошибок или даже атак SQL-инъекций.
Значения regclass заключаются автоматически при преобразовании в текст, но только при необходимости с указанием схемы с текущим search_path. Кажется, вам нужны полные имена. Видеть:

Имя таблицы как параметр функции PostgreSQL
Кроме того, гораздо дешевле выполнить один запрос и просмотреть результаты (если вам вообще нужен цикл?), чем запускать другой запрос (или даже два!) для каждого элемента массива.

Спасибо за to_regclass(), не знал этой функции. Спасибо!

— 
Frank Heikens
 04.04.2024 21:19



Как создать массив заданного размера с заполненным одним полем?
Вопросы
ARRAYS
Как создать массив заданного размера с заполненным одним полем?
Я хотел бы создать функцию, которая, учитывая значение любого типа, размерность одномерного массива и устанавливаемый столбец, будет возвращать одномерный массив, заполненный нулевыми значениями, за исключением одного заданного значения в заданной позиции.

Код ниже — это то, что я предварительно создал для этого, но он не работает:

create function arraycol(v anyelement,n int,i int)
  returns anyarray language plpgsql as $$ 
declare r anyarray; 
begin
    r=array_fill(null,array[n]);
    r[i]=v;
    return r;
end $$;
Возможно ли, чтобы функция возвращала тип полиморфного массива?

можно ли создать переменную типа полиморфного элемента?

 09.05.2024 01:06
2
3
65
2
Данный вопрос помечен как решенный
 Ответы 2
 Ответ принят как подходящий
Вы были близко.

r anyarray; недопустимый синтаксис для объявления переменной полиморфного входного типа anyarray. Чтобы объявить переменную полиморфного типа ввода, используйте конструкцию %TYPE:

DECLARE
   array_element v%TYPE;
К сожалению, в этом случае нам нужно работать только с параметром типа anyelement, что усложняет задачу. Видеть:

Как узнать тип элементов массива?
Вместо этого я использую параметр OUT или печатаю anyarray, чтобы упростить.

Кроме того, вам необходимо передать фактический тип элемента в функцию array_fill(). Ненапечатанный null не подойдет. Чтобы полностью пропустить объявление переменной, я специально создаю типизированное нулевое значение с помощью NULLIF(v, v):

CREATE OR REPLACE FUNCTION arraycol (v anyelement, n int, i int, OUT r anyarray)
   LANGUAGE plpgsql IMMUTABLE PARALLEL SAFE AS
$func$
BEGIN
   r := array_fill(NULLIF(v, v), ARRAY[n]);
   -- if i > n then this assignment auto-fills positions in between with null
   r[i] := v;
END
$func$;
Эквивалентный вариант без array_fill(). В заданиях работает нетипизированный нуль:

CREATE OR REPLACE FUNCTION arraycol (v anyelement, n int, i int, OUT r anyarray)
   LANGUAGE plpgsql IMMUTABLE PARALLEL SAFE AS
$func$
BEGIN
   r[1] := null;  -- assuming 1-based indexes!
   r[i] := v;     -- auto-fills positions in between with null
   IF n > i THEN
      r[n] := null;
   END IF;
END
$func$;
рабочий пример

Тот же звонок, тот же результат. Пример:

SELECT arraycol (1, 3, 2);
массивкол {NULL,1,NULL}
Конечно, я бы поставил проверки, чтобы обеспечить разумный ввод. Например, принудительно ввести размер > 1.

 09.05.2024 04:58
Postgres не позволит вам declare r anyarray; или declare r v%type[]. Что он вообще не будет возражать, так это то, что к этому моменту он уже объявлен:

create function arraycol(v anycompatiblenonarray,n int,i int, 
  r anyarray default array[null])--here, just don't tell anyone
  returns anycompatiblearray language plpgsql as $f$ 
begin
    r=array_fill(nullif (v,v),array[n]);
    r[i]=v;
    return r;
end $f$;
Это не совсем то же самое, что возврат через параметр OUT — режим r argmode используется по умолчанию IN, но по сути он достигает почти той же цели, почти так же, как , который .
Демо на db<>fiddle:

select arraycol(1,3,2);
select arraycol('some_text',3,2);
select arraycol(true,3,2);
select arraycol('{"a":true}'::jsonb,3,2);
select arraycol(tstzrange('now','tomorrow','[]'),3,2);
массивкол {NULL,1,NULL}
массивкол {NULL,some_text,NULL}
массивкол {NULL, т, NULL}
массивкол {NULL,"{"a": true}",NULL}
массивкол {NULL,"["2024-05-10 14:05:47.265587+01","2024-05-11 00:00:00+01"]",NULL}
Единственное, чего он не сделает, — это предоставит вам массивы массивов.

select arraycol(array[1,2,3],3,2);
ERROR:  function arraycol(integer[], integer, integer) does not exist
LINE 17: select arraycol(array[1,2,3],3,2);
                ^
HINT:  No function matches the given name and argument types. You might need to add explicit type casts.
Даже если поменять anycompatiblenonarray на обычный anycompatible

ERROR:  could not find array type for data type integer[]
Что может быть и к лучшему, потому что все это кажется очень неправильным.

Вот как это можно сделать с помощью простого SQL:

create function arraycol_arr(
  v anycompatiblenonarray,n int,i int, 
  r anyarray default array[null])
  returns anycompatiblearray immutable strict parallel safe as $f$ 
select arr[:i-1]||array[v]||arr[i+1:]
from(select array_fill(nullif (v,v),array[n]) arr)_;
$f$ language sql;

create function arraycol_sql_gens_agg(
  v anycompatiblenonarray,n int,i int, 
  r anyarray default array[null])
  returns anycompatiblearray immutable strict parallel safe as $f$ 
select array_agg(case x when i then v end)
from(select generate_series(1,n)x)_;
$f$ language sql;
Что, согласно тестам в конце демо, является хорошим способом ухудшить вашу производительность.


Функция для инкапсуляции логики поиска
Вопросы
SQL
Функция для инкапсуляции логики поиска
Я хочу написать функцию Postgres, которая ищет значение столбца в заданной таблице.

Пример настройки:

CREATE SCHEMA IF NOT EXISTS example;

CREATE TABLE example.price_table (
    symbol text NOT NULL,
    time_of timestamptz NOT NULL,
    price float8 null,
    volume float8 null );

CREATE TABLE example.interesting_times (
    symbol text NOT NULL,
    time_of timestamptz NOT NULL );
Образец данных

INSERT INTO example.price_table VALUES
    ('GME', '2016-01-01 00:00:00', 10.0, 10),
    ('GME', '2016-01-02 00:00:00', 11.0, 3),
    ('GME', '2016-01-03 00:00:00', 9.0 , 7),
    ('GME', '2016-01-03 00:40:00', 10.5, 76),
    ('GME', '2016-01-04 00:00:00', 11.0, 10),
    ('BBBY', '2016-01-01 00:00:00', 20.0, 5),
    ('BBBY', '2016-01-02 02:30:00', 2123.0, 1),
    ('BBBY', '2016-01-02 03:30:00', 2133.0, 1),
    ('BBBY', '2016-01-02 04:30:00', 2144.0, 100),
    ('BBBY', '2016-01-03 00:00:00', 29.0, 999),
    ('BBBY', '2016-01-03 03:40:00', 20.5, 1),
    ('BBBY', '2016-01-03 04:40:00', 20.6, 54),
    ('BBBY', '2016-01-04 00:00:00', 21.0, 34),
    ('BBBY', '2016-01-06 00:00:00', 666.0, 1);   
 
INSERT INTO example.interesting_times VALUES
    ('GME', '2016-01-01 00:00:00'),
    ('GME', '2016-01-02 00:30:00'),
    ('GME', '2016-01-03 05:00:00'),
    ('GME', '2016-01-03 00:40:00'),
    ('GME', '2016-01-04 00:00:00'),
    ('BBBY', '2016-01-01 01:00:00'),
    ('BBBY', '2016-01-02 00:00:00'),
    ('BBBY', '2016-01-03 00:00:00'),
    ('BBBY', '2016-01-03 07:40:00'),
    ('BBBY', '2016-01-04 00:00:00');
При запросе таблицы interesting_times я хочу добавить самую раннюю рыночную цену из таблицы markout_price_table, как минимум на 3 часа, но не более чем на 3 часа + 24 часа в будущее. В идеале я бы просто вызвал функцию markout_price_table, например:

select symbol
     , time_of
     , markout_price_table(  symbol
                           , time_of
                           , 'price'
                           , '3 hours'
                           , '24 hours') as price_3_hours_later
from example.interesting_times 
order by symbol, time_of;
Я мог бы получить разное время разметки, добавив:

markout_price_table(symbol, time_of, 'price', '6 hours', '24 hours') as price_6_hours_later`
или

markout_price_table(symbol, time_of, 'volume', '0 hours', '24 hours') as volume_at_time
Можно ли инкапсулировать логику в такой функции? Если да, то будет ли это так же быстро, как загрузка всех данных и локальное слияние?

Я могу получить желаемый результат из вышеизложенного, используя несколько слияний, но мне это не нравится как решение, поскольку я хотел бы инкапсулировать хорошую логику для слияний, а не копировать и вставлять приведенное ниже много раз в каждый запрос.

with tabA as (
    select a.symbol as symbol
         , a.time_of as time_of
         , b.price as price_3_hours_later
         , b.time_of - (a.time_of + '3 hours')  as timeliness
    from  example.interesting_times a 
    left join example.price_table b 
      on (a.symbol = b.symbol) 
     and (a.time_of + '3 hours' < b.time_of) 
     and (a.time_of + '3 hours' + '24 hours' > b.time_of) 
    order by b.time_of - (a.time_of + '3 hours')
)
, tabB as (
    select  symbol
          , time_of
          , price_3_hours_later
          , timeliness
          , min(timeliness) over w1 as min_tim
    from tabA
    window w1 as (partition by symbol, time_of order by timeliness) 
) 
select symbol
     , time_of
     , price_3_hours_later 
from tabB 
where (timeliness = min_tim) 
   or (timeliness is null) 
order by symbol, time_of;
Итак, результат должен выглядеть так:

Symbol  time_of                         price_3_hours_later
BBBY    2016-01-01 01:00:00.000 +0000   2123.0
BBBY    2016-01-02 00:00:00.000 +0000   2133.0
BBBY    2016-01-03 00:00:00.000 +0000   20.5
BBBY    2016-01-03 07:40:00.000 +0000   21.0
BBBY    2016-01-04 00:00:00.000 +0000   NULL
GME     2016-01-01 00:00:00.000 +0000   11.0
GME     2016-01-02 00:30:00.000 +0000   9.0
GME     2016-01-03 00:40:00.000 +0000   11.0
GME     2016-01-03 05:00:00.000 +0000   11.0
GME     2016-01-04 00:00:00.000 +0000   NULL
 05.06.2024 21:15
2
2
103
2
Данный вопрос помечен как решенный
 Ответы 2
 Ответ принят как подходящий
Вы можете сократить этот запрос и обернуть его функцией : демо в db<>fiddle

create function markout_price_table(
  p_symbol text, p_time_of timestamptz, min_after interval, max_after interval)
returns float8 language sql return (
  select price from example.price_table 
   where symbol=p_symbol
     and time_of between p_time_of+min_after
                     and p_time_of+max_after
   order by time_of limit 1);
И это будет работать именно так, как вы хотели:

select symbol
     , time_of
     , markout_price_table(symbol, time_of, '3 hours', '27 hours') as price_3_hours_later
from example.interesting_times 
order by symbol, time_of;
символ время цена_3_hours_later толстушка 2016-01-01 01:00:00+00 2123 толстушка 2016-01-02 00:00:00+00 2133 толстушка 2016-01-03 00:00:00+00 20,5 толстушка 2016-01-03 07:40:00+00 21 толстушка 2016-01-04 00:00:00+00 нулевой ГМЕ 2016-01-01 00:00:00+00 11 ГМЕ 2016-01-02 00:30:00+00 9 ГМЕ 2016-01-03 00:40:00+00 11 ГМЕ 2016-01-03 05:00:00+00 11 ГМЕ 2016-01-04 00:00:00+00 нулевой
Поскольку вы поставили price прямо в имени функции, я не думаю, что имеет смысл передавать 'price' в качестве параметра.

Если бы вы хотели, чтобы функция динамически выбирала столбец price, это немного усложнило бы ситуацию. Вам придется сделать ее полиморфной функцией и передать в нее образец значения, чтобы она могла определить тип возвращаемого значения во время вызова.

 06.06.2024 10:31
Можно решить с помощью одного простого оператора SQL с использованием подзапроса LATERAL:

SELECT i.symbol, i.time_of, p.price_3_hours_later
FROM   interesting_times i
LEFT   JOIN LATERAL (
   SELECT p.price AS price_3_hours_later
   FROM   price_table p
   WHERE  p.symbol = i.symbol
   AND    p.time_of >= i.time_of + interval '3h'
   AND    p.time_of <= i.time_of + interval '27h'
   ORDER  BY p.time_of
   LIMIT  1
   )p ON true
ORDER  BY i.symbol, i.time_of;
Для быстрой работы нужен индекс price_table (symbol, time_of). В идеале:

CREATE INDEX ON price_table (symbol, time_of) INCLUDE (price);
Если вы настаиваете, вы можете обернуть это в функцию SQL:

CREATE OR REPLACE FUNCTION markout_price_table(_start interval, _duration interval)
  RETURNS TABLE (symbol text
               , time_of timestamptz
               , price float8
                )
  LANGUAGE sql STABLE STRICT PARALLEL SAFE AS
$func$
SELECT i.symbol, i.time_of, p.price_3_hours_later
FROM   interesting_times i
LEFT   JOIN LATERAL (
   SELECT p.price AS price_3_hours_later
   FROM   price_table p
   WHERE  p.symbol = i.symbol
   AND    p.time_of >= i.time_of + _start
   AND    p.time_of <= i.time_of + _start + _duration
   ORDER  BY p.time_of
   LIMIT  1
   )p ON true
ORDER  BY i.symbol, i.time_of;
$func$;
Вызов:

SELECT * FROM markout_price_table('3h', '24h');
Зегарек уже предоставил действительную версию функции. Но обязательно добавьте соответствующие метки функций, чтобы не снижать производительность:

CREATE OR REPLACE FUNCTION markout_price(_symbol text, _time_of timestamptz, _start interval, _duration interval)
  RETURNS float8
  LANGUAGE sql STABLE STRICT PARALLEL SAFE AS  -- !
$func$
SELECT p.price
FROM   price_table p
WHERE  p.symbol = _symbol
AND    p.time_of >= _time_of + _start
AND    p.time_of <= _time_of + _start + _duration
ORDER  BY p.time_of
LIMIT  1;
$func$;
Вызов:

SELECT i.symbol, i.time_of
     , markout_price(i.symbol, i.time_of, '3 h', '24 h') AS price_3_hours_later
FROM   interesting_times i;
рабочий пример

так будет ли это так же быстро, как загрузка всех данных и локальное слияние?

На самом деле любое решение (включая решение Зегарека) будет значительно быстрее, если у вас есть этот индекс.

Связанный:

Оптимизируйте запрос GROUP BY, чтобы получить последнюю строку для каждого пользователя


Каковы преимущества использования plpgsql в postgresql
Вопросы
POSTGRESQL
Каковы преимущества использования plpgsql в postgresql
Помимо синтаксического сахара и выразительности, каковы различия в эффективности выполнения. Я имею в виду, что plpgsql может быть быстрее, чем, скажем, plpythonu или pljava? Или все они примерно равны?

Мы используем хранимые процедуры для обнаружения почти повторяющихся записей людей в базе данных среднего размера (около 10 миллионов записей).

 29.10.2008 18:42
8
1
2 626
3
Данный вопрос помечен как решенный
 Ответы 3
 Ответ принят как подходящий
plpgsql обеспечивает большую безопасность типов. Я считаю, что вам нужно выполнять явное приведение типов, если вы хотите выполнять операции с использованием двух разных столбцов аналогичного типа, таких как varchar и text или int4 и int8. Это важно, потому что, если вам нужно иметь ваши сохраненные индексы использования proc, postgres требует, чтобы типы точно совпадали между условиями соединения (редактировать: для проверки равенства, я думаю).

Возможно, для этого есть возможность на других языках, но я их не использовал. В любом случае, я надеюсь, что это даст вам лучшую отправную точку для вашего расследования.

 29.10.2008 18:54
Не проводя фактического тестирования, я ожидал бы, что plpgsql будет несколько более эффективным, чем другие языки, из-за своего небольшого размера. Сказав это, помните, что функции SQL, вероятно, будут даже быстрее, чем plpgsql, если функция достаточно проста, чтобы вы могли написать ее только на SQL.

 31.10.2008 01:19
plpgsql очень хорошо интегрирован с SQL - исходный код должен быть очень чистым и читабельным. Для языков SQL, таких как PLJava или PLPython, операторы SQL должны быть изолированы - SQL не является частью языка. Поэтому вам нужно написать немного больше кода. Если в вашей процедуре много операторов SQL, процедура plpgsql должна быть чище, короче и немного быстрее. Если ваша процедура не имеет операторов SQL, тогда процедуры на внешних языках могут быть быстрее, но внешним языкам (интерпретаторам) требуется некоторое время для инициализации, поэтому для простых задач процедуры на языке SQL или plpgsql должны быть быстрее.

Внешние языки используются, когда вам нужны некоторые функции, такие как доступ к сети, доступ к файловой системе - http://www.postgres.cz/index.php/PL/Perlu_-_Untrusted_Perl_%28en%29

Насколько я знаю, люди обычно используют комбинацию языков PL - (SQL, plpgsql, plperl) или (SQL, plpgsql, plpython).


Вернуть несколько столбцов и строк из функции PostgreSQL вместо записи
Вопросы
SQL
Вернуть несколько столбцов и строк из функции PostgreSQL вместо записи
Я читал в Интернете о функциях PostgreSQL и возвращает результаты В этой ссылке:

Тип возвращаемого значения функции SQL: таблица и записи SETOF
Как ссылаться на именованные параметры в функциях Postgres sql?
http://www.postgresqltutorial.com/plpgsql-function-returns-a-table/
Я написал эту функцию:

create or replace function brand_hierarchy(account_value int)
  RETURNS table (topID INTEGER, accountId INTEGER, liveRowCount bigint,archiveRowCount bigint)
  AS
$BODY$
  SELECT * FROM my_client_numbers
where accountId  = coalesce($1,accountId);
$BODY$
LANGUAGE sql;
Что работает и возвращает результаты в одном столбце Тип записи. Обратите внимание, что может быть возвращено более одной строки.

Теперь ответ:

record
(1172,1172,1011,0)
(1172,1412,10,40)
.....
Я хочу получать результаты не в виде записи, а в виде нескольких столбцов

|---------|---------|------------|----------------|
| topID   |accountId|liveRowCount|archiveRowCount |
|---------|---------|------------|----------------|
| 1172    |1172     | 1011       |  0             |
| 1172    |1412     | 10         |  40            |
Есть ли способ вернуть несколько столбцов из функции PostgreSQL

 15.03.2018 13:46
4
0
3 737
3
Данный вопрос помечен как решенный
 Ответы 3
 Ответ принят как подходящий
Я смог увидеть это, как и ожидалось, с помощью этого запроса:

SELECT * FROM brand_hierarchy (id)
 15.03.2018 13:58
Функции, возвращающие таблицу (или setof), должны использоваться в предложении FROM:

select * 
from brand_hierarchy(1234)
 15.03.2018 14:10
Я нашел эту функцию crosstab Думаю, это то, что вы ищете https://www.postgresql.org/docs/9.3/tablefunc.html


Как мне создать функцию в postgres, которая обновляет поле серией 'REGEXP_REPLACE's
Вопросы
POSTGRESQL
Как мне создать функцию в postgres, которая обновляет поле серией 'REGEXP_REPLACE's
Я пытаюсь создать функцию, которая гомогенизирует текстовые столбцы. Это серия regex_replaces в случае, когда function.

Я считаю, что следующий (сокращенный) код должен дать мне решение:

CREATE OR REPLACE FUNCTION clean_data(address_token text) RETURNS 
setof text
AS
$$
BEGIN
return case when address_token like '%allee' OR address_token LIKE '%ally' OR address_token LIKE '%aly' then regexp_replace(address_token,'(allee|ally|aly)$', 'alley')
when address_token like '%annex' OR address_token LIKE '%annx' OR address_token LIKE '%anx' then regexp_replace(address_token,'(annex$|annx$|anx$)', 'anex')
when address_token like '%arc' then regexp_replace(address_token ,'arc$', 'arcade')

.
.
.

when address_token like '%wls' then regexp_replace(address_token ,'wls$', 'wells') else address_token;
END;
$$ LANGUAGE plpgsql;

CREATE TABLE newtable AS
select postcode, (clean_data(address1)) as address1 (clean_data(address2)) as address2, (clean_data(address3)) as address3
from oldtable where postcode SIMILAR TO '(a|b)%';
Однако когда я запускаю это, я получаю сообщение об ошибке:

RETURN cannot have a parameter in function returning set
LINE 5:   return case when address_token like '%allee' OR address_to...
             ^
HINT:  Use RETURN NEXT or RETURN QUERY.
Когда я следую его совету и использую вместо этого «ЗАПРОС ВОЗВРАТА», мне говорят:

syntax error at or near "case"
LINE 5:   return query case when address_token like '%allee' OR addr...
Что я не считаю очень полезным.

Как правильно написать эту функцию?

Я относительно новичок в функциях SQL и не уверен на 100% в:

'возвращает набор текста': вернет ли это поле, как ожидалось?
язык: это SQL или plpgsql
RETURN vs RETURN NEXT vs RETURN QUERY: я не уверен в разнице здесь
Я гуглил последние пару часов с очень небольшим прогрессом и очень мало понимания, поэтому любая помощь будет оценена

 17.04.2018 16:57
0
0
67
3
Данный вопрос помечен как решенный
 Ответы 3
В руководстве PostgreSQL говорится:

SQL function can be declared to return a set (that is, multiple rows) by specifying the function's return type as SETOF sometype, or equivalently by declaring it as RETURNS TABLE(columns)

Итак, вы используете setof для возврата rows. В вашем случае вы возвращаете «поле». Таким образом, вы должны изменить свой возврат на RETURNS TEXT (без setof) или, если вам нужна таблица, вы должны установить вывод вашего дела в запись или строку.

 17.04.2018 17:17
 Ответ принят как подходящий
Ключевая ошибка заключается в том, что setof возвращает несколько строк данных: ваша функция работает с одной строкой за раз, поэтому должна просто возвращать text. Вы пометили это как plpgsql, но поскольку это всего лишь один оператор, он будет работать так же хорошо, как и SQL: операторы BEGIN и END не требуются в SQL, и в результате вы получите select, а не return. Хотя ваш оператор CASE довольно длинный, это все еще простая функция с одним входом и одним выходом как в документах.

Вторая ошибка заключается в том, что вы пропустили END оператора CASE: вам нужно завершить регистр, а затем завершить функцию plpgsql, так что у вас будет двойной конец.

CREATE OR REPLACE FUNCTION clean_data(address_token text) RETURNS text
AS
$$
BEGIN
return case when address_token like '%allee' OR address_token LIKE '%ally' OR address_token LIKE '%aly' then regexp_replace(address_token,'(allee|ally|aly)$', 'alley')
.
.
.
when address_token like '%wls' then regexp_replace(address_token ,'wls$', 'wells') else address_token
end;
END;
$$ LANGUAGE plpgsql;
 17.04.2018 17:23
Зачем вообще заморачиваться с падежным выражением. Просто используйте свои функции regexp_replace как есть, они уже воплощают предикаты в ваших операторах case.

А еще лучше поместить свои выражения в таблицу и просто просмотреть их в цикле:

SQL Fiddle

Настройка схемы PostgreSQL 9.3:

create table samples(address_token text);
create table replacements(exp varchar(30), value varchar(30), flags varchar(10));

INSERT INTO samples
    (address_token)
VALUES
    ('DB Ally'),
    ('SQL Annex'),
    ('Penny Arc'),
    ('CPU Wls')
;

INSERT INTO replacements
    (exp, value, flags)
VALUES
    ('(allee|ally|aly)$', 'alley', 'i'),
    ('(annex$|annx$|anx$)', 'anex', 'i'),
    ('arc$', 'arcade', 'i'),
    ('wls$', 'wells', 'i')
;

create or replace function clean_data(address_token text) returns text
as
$$
DECLARE
  r record;
  result text;
BEGIN
  result := address_token;
  for r in (select exp, value, flags from replacements) loop
      result := regexp_replace(result, r.exp, r.value, r.flags);
  end loop;
  return result;
end;
$$ LANGUAGE plpgsql;
/
Запрос 1:

select * from replacements
Полученные результаты:

|                 exp |  value | flags |
|---------------------|--------|-------|
|   (allee|ally|aly)$ |  alley |     i |
| (annex$|annx$|anx$) |   anex |     i |
|                arc$ | arcade |     i |
|                wls$ |  wells |     i |
Запрос 2:

select address_token, clean_data(address_token) new_val
  from samples
Полученные результаты:

| address_token |      new_val |
|---------------|--------------|
|       DB Ally |     DB alley |
|     SQL Annex |     SQL anex |
|     Penny Arc | Penny arcade |
|       CPU Wls |    CPU wells |
Спасибо за этот ответ Sentinel. Я выбрал ответ @Adrian Cox, поскольку он исправил мой запрос в соответствии с просьбой. Я думал об использовании метода, аналогичного описанному вами, но у меня сложилось впечатление, что, когда таблица замен становится очень большой, ее просмотр может стать довольно затратным по времени. Однако Адриан упоминает тот случай, когда он также работает с одной строкой за раз, поэтому это может занять такое же количество времени. Я поэкспериментирую, когда у меня появится шанс.

— 
DaveJay
 17.04.2018 18:00
Также спасибо за то, что поделились SQLfiddle, похоже, ценный ресурс, о существовании которого я не знал.

— 
DaveJay
 17.04.2018 18:04
Использование оператора CASE имеет одно преимущество в том, что после выбора одной ветки никакие другие ветки не тестируются, но для выбранной ветки тот же тест повторяется с помощью регулярного выражения. Чтобы получить аналогичную функцию короткого замыкания в версии цикла for, добавьте условие выхода: EXIT WHEN result <> address_token; непосредственно перед END LOOP;.

— 
Sentinel
 17.04.2018 18:14



PostgreSQL - закрыть файл .sql, если условие истинно, не запускать строки под (при обработке с помощью bash)
Вопросы
SQL
PostgreSQL - закрыть файл .sql, если условие истинно, не запускать строки под (при обработке с помощью bash)
Я обрабатываю файлы .sql с помощью bash автоматически в своем решении CI в цикле for, чтобы выявить ошибочные миграции перед развертыванием.

MIGS - это массив bash, содержащий во времени .sql в папке

for sqlfile in ${MIGS[@]};
do
    psql myproject_unit < $sqlfile
done
Есть ли способ прекратить обработку .sql, если условие выполнено?

Итак, что я делаю сейчас:

файл sql20180515n.sql

CREATE TABLE IF NOT EXISTS something (
...
/* imagine here other 400 lines of SQL */
То, что я ищу (замените первые две строки на правильный синтаксис, если это возможно, или сообщите мне, если это невозможно)

IF TABLE_EXISTS(something) /* we already ran, no need */
EXIT;

CREATE TABLE something (
...
/* imagine here other 400 lines of SQL */
Итак, чтобы подтвердить: если условие выполнено (таблица / столбец / триггер / индекс уже существует), я хотел бы перейти к следующему источнику .sql в моем цикле for, поэтому не выходите из всей оболочки, а только для процессора psql, как определено в файле .sql, когда его прекратить.

 15.05.2018 15:20
1
3
963
3
 Ответы 3
вам, скорее всего, понадобится логика plpgsql и, следовательно, инструкция DO, ниже приведен пример:

MacBook-Air:Downloads vao$ psql so << EOF
>  do \$\$
>  begin
>   if (select count(*) from pg_class where oid = 'public.t'::regclass and relkind = 'r') > 0 then
>  insert into t values(1);
>  update t set i = 9 where i = 1;
>  end if;
>  end;
>  \$\$;
> select * from t;
> EOF
Timing is on.
Pager usage is off.
DO
Time: 8.952 ms
 i
---
 9
 9
 9
(3 rows)
 15.05.2018 17:12
PlPgsql сортирует его, мы используем следующий код в качестве образца для начала.

-- USE THIS AS EXAMPLE CODE FOR CREATING MORE COMPLEX TABLE STRUSCTURES NEVER TO BE DEFINED TWICE

CREATE OR REPLACE FUNCTION install_these_tables()
RETURNS INT AS $$

DECLARE

  does_exist int;

BEGIN

SELECT COUNT(*) as cnt INTO does_exist from pg_tables where tablename = 'testtable'; -- REPLACE TABLE NAME

  IF does_exist = 1 THEN
    RAISE NOTICE 'Existed';
    RETURN 1;
  ELSE
    -- REPLACE START
    CREATE TABLE testtable (
      id_testtable bigserial PRIMARY KEY,
      status text DEFAULT NULL
    );
    -- REPLACE END
    RAISE NOTICE 'Not existed, created';
    RETURN 0;
  END IF;

END; $$ LANGUAGE plpgsql;

SELECT install_these_tables();
DROP FUNCTION install_these_tables();
Также PostgreSQL 10 поддерживает \ if, но мы используем 9.6, и нам было нелегко изменить примеры кодов для этого.

 15.05.2018 17:35
Другие ответы хороши, но, возможно, вы предпочтете сохранить свою логику в оболочке.

Вы можете запросить условие в отдельном вызове psql.

В следующем примере я проверяю наличие таблицы something:

psql -d mydb -c "SELECT 'something'::regclass" >/dev/null 2>&1
# run the script only if the above errors out
if [ $? -ne 0 ]; then
    # create "something" since it doesn't exist
    psql -d mydb -1 -f create_something.sql
    if [ $? -ne 0 ]; then
        # exit with error if script fails
        exit 1
    fi
fi


Чтобы отсортировать буквы в строке по алфавиту в PostgreSQL
Вопросы
SQL
Чтобы отсортировать буквы в строке по алфавиту в PostgreSQL
В настоящее время я использую этот метод для сортировки букв в строке по алфавиту в PostgreSQL. Есть ли другие действенные методы?

select string_agg(c, '') as s
from   (select unnest(regexp_split_to_array('ijsAafhareDbv', '')) as c 
        order  by c) as t; 

       s   
 --------------
 ADaabefhijrsv
 18.05.2018 19:31
3
3
2 348
3
Данный вопрос помечен как решенный
 Ответы 3
Если вам нужно решение без регулярных выражений, вы можете использовать это:

WITH t(s) AS (VALUES ('amfjwzeils'))
SELECT string_agg(substr(t.s, g.g, 1), ''
                  ORDER BY substr(t.s, g.g, 1)
                 )
FROM t
   CROSS JOIN LATERAL generate_series(1, length(t.s)) g;

 string_agg 
------------
 aefijlmswz
(1 row)
Я бы проверил, какое решение быстрее.

 18.05.2018 21:08
Я создал 3 функции, одну с использованием моего запроса, другую с использованием запроса Лауренца и еще одну: я создал функцию Python (plpythonu) для сортировки. Наконец, я создал таблицу со 100000 строками (пока я делал это со своего ноутбука Mac) каждый из которых содержит случайную 15-символьную строку, сгенерированную с помощью функции random_string в этом Ссылка на сайт

create table t as select random_string(15) as s FROM generate_series(1,100000);
Вот 3 функции.

CREATE or REPLACE FUNCTION sort1(x TEXT) RETURNS TEXT AS $$
select string_agg(c, '') as s
from   (select unnest(regexp_split_to_array($1, '')) as c 
        order  by c) as t;
$$ LANGUAGE SQL IMMUTABLE;


CREATE or REPLACE FUNCTION sort2(x TEXT) RETURNS TEXT AS $$
WITH t(s) AS (VALUES ($1))
SELECT string_agg(substr(t.s, g.g, 1), ''
                  ORDER BY substr(t.s, g.g, 1)
                 )
FROM t
   CROSS JOIN LATERAL generate_series(1, length(t.s)) g;

$$ LANGUAGE SQL IMMUTABLE;


create language plpythonu;
CREATE or REPLACE FUNCTION pysort(x text)
  RETURNS text
AS $$
  return ''.join(sorted(x))
$$ LANGUAGE plpythonu IMMUTABLE;
Это результаты EXPLAIN ANALYSE для всех трех.

knayak=# EXPLAIN ANALYSE select sort1(s)  FROM t;
                                                 QUERY PLAN                                                  
-------------------------------------------------------------------------------------------------------------
 Seq Scan on t  (cost=0.00..26541.00 rows=100000 width=32) (actual time=0.266..7097.740 rows=100000 loops=1)
 Planning time: 0.119 ms
 Execution time: 7106.871 ms
(3 rows)

knayak=# EXPLAIN ANALYSE select sort2(s)  FROM t;
                                                 QUERY PLAN                                                  
-------------------------------------------------------------------------------------------------------------
 Seq Scan on t  (cost=0.00..26541.00 rows=100000 width=32) (actual time=0.418..7012.935 rows=100000 loops=1)
 Planning time: 0.270 ms
 Execution time: 7021.587 ms
(3 rows)

knayak=# EXPLAIN ANALYSE select pysort(s) FROM t;
                                                 QUERY PLAN                                                 
------------------------------------------------------------------------------------------------------------
 Seq Scan on t  (cost=0.00..26541.00 rows=100000 width=32) (actual time=0.060..389.729 rows=100000 loops=1)
 Planning time: 0.048 ms
 Execution time: 395.760 ms
(3 rows)
Из этого анализа выясняется, что Сортировка Python был самым быстрым и никаких существенных различий между первыми 2. Однако необходимо проверить производительность в реальном времени для огромных таблиц в наших системах.

 19.05.2018 09:03
 Ответ принят как подходящий
Функция, реализованная в C, на существенно быстрее, чем все, что мы можем достичь с LANGUAGE sql или plpgsql. Так что ваша функция plpythonu выигрывает конкурс производительности с большим отрывом.

Но plpythonu - это процедурный язык ненадежный. Он не устанавливается по умолчанию, и только суперпользователи могут создавать функции на ненадежных языках. Вы должны знать о последствиях для безопасности. А ненадежные языки вообще недоступны в большинстве облачных сервисов. Текущее руководство (цитата со стр. 10):

PL/Python is only available as an “untrusted” language, meaning it does not offer any way of restricting what users can do in it and is therefore named plpythonu. A trusted variant plpython might become available in the future if a secure execution mechanism is developed in Python. The writer of a function in untrusted PL/Python must take care that the function cannot be used to do anything unwanted, since it will be able to do anything that could be done by a user logged in as the database administrator. Only superusers can create functions in untrusted languages such as plpythonu.

Тестируемые вами функции SQL недостаточно оптимизированы. Еще есть тысяча и один способы повышения производительности:

Демо
-- func to create random strings
CREATE OR REPLACE FUNCTION f_random_string(int)
  RETURNS text AS
$func$
SELECT array_to_string(ARRAY(
   SELECT substr('0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz', (ceil(random()*62))::int, 1)
   FROM generate_series(1, $1)
   ), '')
$func$  LANGUAGE sql VOLATILE;

-- test tbl with 100K rows
CREATE TABLE tbl(str text);
INSERT INTO tbl
SELECT f_random_string(15)
FROM   generate_series(1, 100000) g;
VACUUM ANALYZE tbl;
-- 1: your test function 1 (inefficient)
CREATE OR REPLACE FUNCTION sort1(text)  RETURNS text AS
$func$  -- your test function 1 (very inefficient)
SELECT string_agg(c, '')
FROM  (SELECT unnest(regexp_split_to_array($1, '')) AS c ORDER  BY c) t;
$func$ LANGUAGE sql IMMUTABLE;

-- 2: your test function 2 ( inefficient)
CREATE OR REPLACE FUNCTION sort2(text)  RETURNS text AS
$func$
WITH t(s) AS (VALUES ($1))
SELECT string_agg(substr(t.s, g.g, 1), '' ORDER BY substr(t.s, g.g, 1))
FROM   t
CROSS  JOIN LATERAL generate_series(1, length(t.s)) g;
$func$  LANGUAGE sql IMMUTABLE;

-- 3: remove pointless CTE from sort2
CREATE OR REPLACE FUNCTION sort3(text)  RETURNS text AS
$func$
SELECT string_agg(substr($1, g, 1), '' ORDER BY substr($1, g, 1))
FROM   generate_series(1, length($1)) g;
$func$  LANGUAGE sql IMMUTABLE;

-- 4: use unnest instead of calling substr N times
CREATE OR REPLACE FUNCTION sort4(text)  RETURNS text AS
$func$
SELECT string_agg(c, '' ORDER BY c)
FROM   unnest(string_to_array($1, NULL)) c
$func$  LANGUAGE sql IMMUTABLE;

-- 5: ORDER BY in subquery
CREATE OR REPLACE FUNCTION sort5(text)  RETURNS text AS
$func$
SELECT string_agg(c, '')
FROM  (
   SELECT c
   FROM   unnest(string_to_array($1, NULL)) c
   ORDER  BY c
   ) sub
$func$  LANGUAGE sql IMMUTABLE;

-- 6: SRF in SELECT list
CREATE OR REPLACE FUNCTION sort6(text)  RETURNS text AS
$func$
SELECT string_agg(c, '')
FROM  (SELECT unnest(string_to_array($1, NULL)) c ORDER BY 1) sub
$func$  LANGUAGE sql IMMUTABLE;

-- 7: ARRAY constructor instead of aggregate func
CREATE OR REPLACE FUNCTION sort7(text)  RETURNS text AS
$func$
SELECT array_to_string(ARRAY(SELECT unnest(string_to_array($1, NULL)) c ORDER BY c), '')
$func$  LANGUAGE sql IMMUTABLE;

-- 8: The same with COLLATE "C"
CREATE OR REPLACE FUNCTION sort8(text)  RETURNS text AS
$func$
SELECT array_to_string(ARRAY(SELECT unnest(string_to_array($1 COLLATE "C", NULL)) c ORDER BY c), '')
$func$  LANGUAGE sql IMMUTABLE;
SELECT str, sort1(str), sort2(str), sort3(str), sort4(str), sort5(str), sort6(str), sort7(str), sort8(str) FROM tbl LIMIT 1;  -- result sample 
str             | sort1           | sort2           | sort3           | sort4           | sort5           | sort6           | sort7           | sort8          
:-------------- | :-------------- | :-------------- | :-------------- | :-------------- | :-------------- | :-------------- | :-------------- | :--------------
tUkmori4D1rHhI1 | 114DhHiIkmorrtU | 114DhHiIkmorrtU | 114DhHiIkmorrtU | 114DhHiIkmorrtU | 114DhHiIkmorrtU | 114DhHiIkmorrtU | 114DhHiIkmorrtU | 114DHIUhikmorrt
EXPLAIN (ANALYZE, TIMING OFF) SELECT sort1(str) FROM tbl;
| QUERY PLAN                                                                               |
| :--------------------------------------------------------------------------------------- |
| Seq Scan on tbl  (cost=0.00..26541.00 rows=100000 width=32) (actual rows=100000 loops=1) |
| Planning time: 0.053 ms                                                                  |
| Execution time: 2742.904 ms                                                              |
EXPLAIN (ANALYZE, TIMING OFF) SELECT sort2(str) FROM tbl;
| QUERY PLAN                                                                               |
| :--------------------------------------------------------------------------------------- |
| Seq Scan on tbl  (cost=0.00..26541.00 rows=100000 width=32) (actual rows=100000 loops=1) |
| Planning time: 0.105 ms                                                                  |
| Execution time: 2579.397 ms                                                              |
EXPLAIN (ANALYZE, TIMING OFF) SELECT sort3(str) FROM tbl;
| QUERY PLAN                                                                               |
| :--------------------------------------------------------------------------------------- |
| Seq Scan on tbl  (cost=0.00..26541.00 rows=100000 width=32) (actual rows=100000 loops=1) |
| Planning time: 0.079 ms                                                                  |
| Execution time: 2191.228 ms                                                              |
EXPLAIN (ANALYZE, TIMING OFF) SELECT sort4(str) FROM tbl;
| QUERY PLAN                                                                               |
| :--------------------------------------------------------------------------------------- |
| Seq Scan on tbl  (cost=0.00..26541.00 rows=100000 width=32) (actual rows=100000 loops=1) |
| Planning time: 0.075 ms                                                                  |
| Execution time: 2194.780 ms                                                              |
EXPLAIN (ANALYZE, TIMING OFF) SELECT sort5(str) FROM tbl;
| QUERY PLAN                                                                               |
| :--------------------------------------------------------------------------------------- |
| Seq Scan on tbl  (cost=0.00..26541.00 rows=100000 width=32) (actual rows=100000 loops=1) |
| Planning time: 0.083 ms                                                                  |
| Execution time: 1902.829 ms                                                              |
EXPLAIN (ANALYZE, TIMING OFF) SELECT sort6(str) FROM tbl;
| QUERY PLAN                                                                               |
| :--------------------------------------------------------------------------------------- |
| Seq Scan on tbl  (cost=0.00..26541.00 rows=100000 width=32) (actual rows=100000 loops=1) |
| Planning time: 0.075 ms                                                                  |
| Execution time: 1866.407 ms                                                              |
EXPLAIN (ANALYZE, TIMING OFF) SELECT sort7(str) FROM tbl;
| QUERY PLAN                                                                               |
| :--------------------------------------------------------------------------------------- |
| Seq Scan on tbl  (cost=0.00..26541.00 rows=100000 width=32) (actual rows=100000 loops=1) |
| Planning time: 0.067 ms                                                                  |
| Execution time: 1863.713 ms                                                              |
EXPLAIN (ANALYZE, TIMING OFF) SELECT sort8(str) FROM tbl;
| QUERY PLAN                                                                               |
| :--------------------------------------------------------------------------------------- |
| Seq Scan on tbl  (cost=0.00..26541.00 rows=100000 width=32) (actual rows=100000 loops=1) |
| Planning time: 0.074 ms                                                                  |
| Execution time: 1569.376 ms                                                              |
db <> рабочий пример здесь

Последний сортирует без правил COLLATION, то есть строго по байтовым значениям символов, что существенно дешевле. Но вы можете или не можете нужно порядок сортировки для другой локали.

Руководство по выражениям COLLATION.

Замечательный! Спасибо, Эрвин.

— 
Kaushik Nayak
 21.05.2018 08:32



Как мне вернуть конструктор строки из функции PL / pgSQL?
Вопросы
SQL
Как мне вернуть конструктор строки из функции PL / pgSQL?
Я пытаюсь вернуть конструктор строки из функции PL / pgSQL, но он не работает со следующей ошибкой: запись возвращаемого типа не соответствует целому числу ожидаемого типа в столбце 1

Вот упрощенная версия с простой функцией SQL для сравнения. Функция SQL работает нормально, функция PL / pgSQL выдает следующую ошибку. Что мне здесь не хватает?

Функции тестирования

CREATE FUNCTION test_sql()
RETURNS TABLE (
    a int,
    b int
)
LANGUAGE SQL
IMMUTABLE
AS $$
    SELECT (1, 1);
$$;

CREATE FUNCTION test_plpgsql()
RETURNS TABLE (
    a int,
    b int
)
LANGUAGE plpgsql
IMMUTABLE
AS $$
BEGIN
    RETURN QUERY SELECT (1, 1);
END;
$$;

SELECT * FROM test_sql();     -- OK
SELECT * FROM test_plpgsql(); --error
Сообщение об ошибке

[42804] ERROR: structure of query does not match function result type
Detail: Returned type record does not match expected type integer in column 1.
Where: PL/pgSQL function test_plpgsql() line 3 at RETURN QUERY
 31.05.2018 16:53
2
2
150
3
Данный вопрос помечен как решенный
 Ответы 3
 Ответ принят как подходящий
Используйте обычный запрос (возвращающие столбцы, а не кортеж) в RETURN QUERY:

CREATE OR REPLACE FUNCTION test_plpgsql()
RETURNS TABLE (
    a int,
    b int
)
LANGUAGE plpgsql
IMMUTABLE
AS $$
BEGIN
    RETURN QUERY SELECT 1, 1;
END;
$$;
 31.05.2018 17:07
На самом деле обе функции неверны. SELECT (1, 1) выбирает строку из одного столбца типа записывать, а не из двух столбцов целого типа.

По какой-то причине это может быть неявно преобразовано в функцию SQL. Но изменение его на SELECT 1, 1 в обеих функциях даст вам то, что вы хотите для обеих.

 31.05.2018 17:08
Я вижу в вашем дизайне две проблемы:

это SRF (функция возврата набора), и в данном случае она бесполезна.
Вы используете SELECT для константы, это тоже бесполезно - и работает медленнее:
postgres=# CREATE OR REPLACE FUNCTION test_plpgsql(OUT a int, OUT b int)
AS $$
BEGIN
  a := 1; b := 1;
END;
$$ LANGUAGE plpgsql IMMUTABLE;
CREATE FUNCTION

postgres=# SELECT * FROM test_plpgsql();
┌───┬───┐
│ a │ b │
╞═══╪═══╡
│ 1 │ 1 │
└───┴───┘
(1 row)


Как использовать настройки переменных в функциях триггера?
Вопросы
POSTGRESQL
Как использовать настройки переменных в функциях триггера?
Я хотел бы записать идентификатор пользователя в сеансе / транзакции, используя SET, чтобы я мог получить к нему доступ позже в функции триггера, используя current_setting. По сути, я пробую вариант n2 из очень похожий билет, размещенный ранее, с той разницей, что я использую PG 10.1.

Я пробовал 3 подхода к установке переменной:

SET local myvars.user_id = 4, тем самым устанавливая его локально в транзакции;
SET myvars.user_id = 4, тем самым установив его в сеансе;
SELECT set_config('myvars.user_id', '4', false), который в зависимости от последнего аргумента будет ярлыком для двух предыдущих вариантов.
Ни один из них не может использоваться в триггере, который получает NULL при получении переменной через current_setting. Вот сценарий, который я разработал для его устранения (его можно легко использовать с изображением докера postgres):

database=$POSTGRES_DB
user=$POSTGRES_USER
[ -z "$user" ] && user = "postgres"

psql -v ON_ERROR_STOP=1 --username "$user" $database <<-EOSQL
    DROP TRIGGER IF EXISTS add_transition1 ON houses;
    CREATE TABLE IF NOT EXISTS houses (
        id SERIAL NOT NULL,
        name VARCHAR(80),
        created_at TIMESTAMP WITHOUT TIME ZONE DEFAULT now(),
        PRIMARY KEY(id)
    );

    CREATE TABLE IF NOT EXISTS transitions1 (
        id SERIAL NOT NULL,
        house_id INTEGER,
        user_id INTEGER,
        created_at TIMESTAMP WITHOUT TIME ZONE DEFAULT now(),
        PRIMARY KEY(id),
        FOREIGN KEY(house_id) REFERENCES houses (id) ON DELETE CASCADE

    );

    CREATE OR REPLACE FUNCTION add_transition1() RETURNS TRIGGER AS \$\$
        DECLARE
            user_id integer;
        BEGIN
            user_id := current_setting('myvars.user_id')::integer || NULL;
            INSERT INTO transitions1 (user_id, house_id) VALUES (user_id, NEW.id);
            RETURN NULL;
        END;
    \$\$ LANGUAGE plpgsql;

    CREATE TRIGGER add_transition1 AFTER INSERT OR UPDATE ON houses FOR EACH ROW EXECUTE PROCEDURE add_transition1();

    BEGIN;
    %1% SELECT current_setting('myvars.user_id');
    %2% SELECT set_config('myvars.user_id', '55', false);
    %3% SELECT current_setting('myvars.user_id');
    INSERT INTO houses (name) VALUES ('HOUSE PARTY') RETURNING houses.id;
    SELECT * from houses;
    SELECT * from transitions1;
    COMMIT;
    DROP TRIGGER IF EXISTS add_transition1 ON houses;
    DROP FUNCTION IF EXISTS add_transition1;
    DROP TABLE transitions1;
        DROP TABLE houses;
EOSQL
Я пришел к выводу, что функция запускается в другой транзакции и в другом (?) Сеансе. Можно ли это настроить, чтобы все происходило в одном контексте?

 16.08.2018 17:46
15
0
6 005
3
Данный вопрос помечен как решенный
 Ответы 3
Непонятно, почему вы пытаетесь объединить NULL с user_id, но, очевидно, это причина проблемы. Избавиться от этого:

CREATE OR REPLACE FUNCTION add_transition1() RETURNS TRIGGER AS $$
    DECLARE
        user_id integer;
    BEGIN
        user_id := current_setting('myvars.user_id')::integer;
        INSERT INTO transitions1 (user_id, house_id) VALUES (user_id, NEW.id);
        RETURN NULL;
    END;
$$ LANGUAGE plpgsql;
Обратите внимание, что

SELECT 55 || NULL
всегда выдает NULL.

 22.08.2018 16:00
Вы можете поймать исключение, когда значение не существует - вот изменения, которые я сделал, чтобы это работало:

CREATE OR REPLACE FUNCTION add_transition1() RETURNS TRIGGER AS $$
    DECLARE
        user_id integer;
    BEGIN
        BEGIN
            user_id := current_setting('myvars.user_id')::integer;
        EXCEPTION WHEN OTHERS THEN
            user_id := 0;
        END;

        INSERT INTO transitions1 (user_id, house_id) VALUES (user_id, NEW.id);
        RETURN NULL;
    END;
$$ LANGUAGE plpgsql;

 CREATE OR REPLACE FUNCTION insert_house() RETURNS void as $$
 DECLARE
    user_id integer;
 BEGIN 
   PERFORM set_config('myvars.user_id', '55', false);

   INSERT INTO houses (name) VALUES ('HOUSE PARTY');
 END; $$ LANGUAGE plpgsql;
 28.08.2018 02:11
 Ответ принят как подходящий
Правильно обработайте все возможные случаи для индивидуальный вариант:

опция еще не установлена

Все ссылки на него вызывают исключение, включая current_setting(), если только не вызывается со вторым параметром missing_ok. Руководство:

If there is no setting named setting_name, current_setting throws an error unless missing_ok is supplied and is true.

опция установлена ​​в действительный целочисленный литерал

опция установлена ​​на недопустимый целочисленный литерал

сброс опции (который сгорает до особого случая 3.)

Например, если вы устанавливаете индивидуальную опцию с помощью SET LOCAL или set_config('myvars.user_id3', '55', true), значение опции сбрасывается в конце транзакции. Он по-прежнему существует, на него можно ссылаться, но теперь он возвращает пустую строку (''), которую нельзя преобразовать в integer.

Помимо очевидных ошибок в вашей демонстрации, вам нужно подготовиться ко всем 4 случаям. Так:

CREATE OR REPLACE FUNCTION add_transition1()
  RETURNS trigger AS
$func$
DECLARE
   _user_id text := current_setting('myvars.user_id', true);  -- see 1.
BEGIN
   IF _user_id ~ '^\d+$' THEN  -- one or more digits?

      INSERT INTO transitions1 (user_id, house_id)
      VALUES (_user_id::int, NEW.id);  -- valid int, cast is safe

   ELSE

      INSERT INTO transitions1 (user_id, house_id)
      VALUES (NULL, NEW.id);           -- use NULL instead

      RAISE WARNING 'Invalid user_id % for house_id % was reset to NULL!'
                  , quote_literal(_user_id), NEW.id;  -- optional
   END IF;

   RETURN NULL;  -- OK for AFTER trigger
END
$func$  LANGUAGE plpgsql;
db <> рабочий пример здесь

Примечания:

Избегайте имен переменных, которые соответствуют именам столбцов. Очень подвержен ошибкам. Одним из популярных соглашений об именах является добавление к именам переменных символа подчеркивания: _user_id.

Назначьте во время объявления, чтобы сохранить одно задание. Обратите внимание на тип данных text. Мы проведем приведение позже, после того, как отсортируем недопустимый ввод.

Избегайте возникновения / перехвата исключения если возможно. Руководство:

A block containing an EXCEPTION clause is significantly more expensive to enter and exit than a block without one. Therefore, don't use EXCEPTION without need.

Проверьте правильность целочисленных строк. Это простое регулярное выражение допускает только цифры (без начального знака и пробелов): _user_id ~ '^\d+$'. Я сбрасываю на NULL для любого недопустимого ввода. Адаптируйтесь к вашим потребностям.

Я добавил дополнительный WARNING для удобства отладки.

Случаи 3. и 4. возникают только потому, что настраиваемые параметры являются строковыми литералами (тип text), допустимые типы данных не могут быть применены автоматически.

Связанный:

Пользовательские переменные в PostgreSQL
Есть ли способ определить именованную константу в запросе PostgreSQL?
Помимо всего этого, могут быть более элегантные решения для того, что вы пытаетесь сделать, без индивидуальных опций, в зависимости от ваших конкретных требований. Может быть, это:

Самый быстрый способ получить OID текущего пользователя в Postgres?
Ваш ответ был наиболее полным, хотя я предложил вариант ответа @garysieling. Но вы затронули большинство важных вопросов; вначале myvars.user_id имеет значение NULL, после использования SET LOCAL он сбрасывается до '' в конце транзакции, и я должен учитывать все случаи.

— 
ChuckE
 28.08.2018 13:58



Использование SELECT с новым методом CREATE PROCEDURE
Вопросы
POSTGRESQL
Использование SELECT с новым методом CREATE PROCEDURE
Я пытаюсь сохранить простой запрос SELECT с новым методом CREATE PROCEDURE в PostgreSQL 11. Моя идея состоит в том, чтобы хранить запросы в базе данных, потому что у меня может быть очень простой код на моем сервере API, и, возможно, мне не нужно разработать конструктор запросов, если я могу использовать if / else в функции sql с принудительной безопасностью типов. У меня есть этот минимальный пример:

Сначала я попробовал эту функцию plpgsql:

CREATE OR REPLACE PROCEDURE test_proc() AS $$
    BEGIN
        SELECT * FROM my_db
        LIMIT 1;
    END;
$$ LANGUAGE plpgsql;

CALL test_proc();
Однако выдает эту ошибку:

ERROR: query has no destination for result data HINT: If you want to discard the results of a SELECT, use PERFORM instead. CONTEXT: PL/pgSQL function test_proc() line 3 at SQL statement SQL state: 42601

Если я пытаюсь использовать RETURN QUERY:

CREATE OR REPLACE PROCEDURE test_proc() AS $$
    BEGIN
        RETURN QUERY;
        SELECT * FROM my_db
        LIMIT 1;
    END;
$$ LANGUAGE plpgsql;
Я получаю такую ​​ошибку:

ERROR: cannot use RETURN QUERY in a non-SETOF function LINE 17: RETURN QUERY; ^ SQL state: 42804 Character: 310

Я также получаю сообщение об ошибке, когда пытаюсь использовать RETURNS void AS $$ или RETURNS table(...) AS $$. Кажется, что RETURNS не поддерживается в CREATE PROCEDURE? Итак, можно ли вернуть таблицу с помощью нового метода хранимой процедуры? Или, если нет, может быть, JSON?

 28.08.2018 21:04
4
2
7 629
3
Данный вопрос помечен как решенный
 Ответы 3
 Ответ принят как подходящий
Процедуры в PostgreSQL (Oracle, DB2) не такие, как процедуры в MS-SQL. У него другая цель, и вы не можете его использовать. Обычно лучшее, что вы можете сделать, - забыть все, что вы знаете о MSSQL. Процедурная часть действительно отличается.

Только функции могут возвращать некоторые данные - поэтому вам нужно использовать функции. Функции могут возвращать скалярное значение, составное значение, значение массива или таблицу. Вам нужна функция, возвращающая таблицу.

CREATE OR REPLACE FUNCTION fx()
RETURNS SETOF mytab AS $$
BEGIN
  RETURN QUERY SELECT * FROM mytab;
END
$$ LANGUAGE plpgsql;

SELECT * FROM fx();
Для записи:

Вы можете использовать функцию SQL, которая может иметь лучшую (или худшую) производительность (зависит от контекста). Эти функции иногда называют параметризованными представлениями.

CREATE OR REPLACE FUNCTION fx()
RETURNS SETOF mytab AS $$
  SELECT * FROM mytab;
$$ LANGUAGE sql;
Внимание: эта техника антипаттерн !!! Не делайте этого. Это действительно плохая идея. Функции не должны переносить запросы. Если вы хотите скрыть некоторую сложность запросов, используйте вьюхи. Не используйте файл functions. Функции являются эффективным препятствием для оптимизатора запросов, и когда вы используете этот антипаттерн, оптимизатор не может хорошо оптимизировать любые нетривиальные запросы, которые используют в этой форме оцениваемые подзапросы.

Используйте его - если вам нужны очень медленные приложения - или если ваша модель данных или запросы примитивны. В других случаях не делайте этого.

Не бойтесь SQL - это отличный язык, предназначенный для ручного использования. Хорошо разместить весь доступ к данным в одном модуле (модели), чтобы не обращаться к базе данных повсюду в вашем коде, но плохо слишком скрывать SQL в вашем коде.

 30.08.2018 08:08
PostgreSql 11. Мы должны создать хранимую процедуру.

есть решение: Создать процедуру для выполнения запроса в PostgreSQL

 15.05.2019 17:15
Прежде всего, процедура была введена в PostgreSQL 11. Если вы используете версию ниже 11, вы не можете использовать процедуры. Вместо «Процедуры» вы можете использовать функции.

Синтаксис для создания функции

    CREATE or replace function function_name(_parameter varchar) 
    returns table(col1 varchar, col2 varchar, col3 varchar) 
          language 'plpgsql' 
          as $BODY$ 
          BEGIN
                  return query select a.col1, a.col2, b.col3 from table a
                  join table2 as b on a.col1 = b.col1;
        END;
        $BODY$;
вы можете вызвать функцию, аналогичную таблице

select * From function_name('sample data');
синтаксис для создания процедуры.

CREATE OR REPLACE PROCEDURE procedure_name(_parameter varcar,INOUT result refcursor)
LANGUAGE 'plpgsql'
AS $BODY$         
BEGIN
open result for SELECT ,  * from sampletable where a = _parameter; 
END;
$BODY$;
вы можете выполнить процедуру с помощью ключевого слова вызов внутри транзакции

BEGIN;
CALL public.procedure_name( 'sample data',  'test');
fetch all in "test";
COMMIT;
«Функция не поддерживает динамические запросы» - неверно

— 
a_horse_with_no_name
 05.07.2019 13:17
«Вы не можете использовать DML как запросы вставки / обновления / удаления в функциях» - неверно

— 
a_horse_with_no_name
 05.07.2019 13:17
«Тип возвращаемого значения функции должен соответствовать структуре таблицы в функции.» - неверно. Вы можете определить любую структуру вывода, которая вам нравится. Таким образом, это предложение должно быть "должен соответствовать структуре запрос в функции"

— 
a_horse_with_no_name
 05.07.2019 13:18
@a_horse_with_no_name, пробовали ли вы динамические запросы и запросы DML в функциях Postgresql. если вы пытались поделиться с нами. когда я попробовал, я не смог этого сделать.

— 
Raja A
 05.07.2019 13:38
Тогда вы сделали что-то не так, потому что это определенно работает.

— 
a_horse_with_no_name
 05.07.2019 13:39
должен соответствовать структуре запроса в функции: я сказал то же самое, мистер @a_horse_with_no_name. Тип возвращаемого значения функции должен соответствовать структуре запроса
— 
Raja A
 05.07.2019 13:40
Вы написали «должен соответствовать структуре Таблица» - это нечто иное, чем сопоставление структуры запроса.

— 
a_horse_with_no_name
 05.07.2019 13:43
@a_horse_with_no_name спасибо за rextester.com/GVFZ46005. Возможно ли создать временную таблицу в функции и вернуть данные из этой временной таблицы ???

— 
Raja A
 05.07.2019 13:47
Да, это возможно, но обычно совершенно бесполезно, так как вы можете вернуть результат выбора напрямую. Postgres - это не SQL Server.

— 
a_horse_with_no_name
 05.07.2019 13:54



Дата неявно преобразуется в целое число
Вопросы
POSTGRESQL
Дата неявно преобразуется в целое число
Я изучаю PL/pgSQL. Я хочу напечатать даты следующих 15 дней в одном столбце. Поэтому я создал следующую функцию:

CREATE or replace FUNCTION p15d() 
  RETURNS table(date_ date ) AS $$ 
  declare 
  i date := current_date; 
  ii date := current_date + integer '15'; 
 BEGIN 
  loop 
      return query execute'select ' || (i + interval '1 day')::date; 
      i = i + 1; 
      exit when i = ii; 
  end loop; 
 END; 
 $$ 
 LANGUAGE plpgsql; 
Но когда я запускаю эту функцию, я получаю эту ошибку:

ERROR:  structure of query does not match function result type
DETAIL:  Returned type integer does not match expected type date in column 1.
CONTEXT:  PL/pgSQL function p15d() line 8 at RETURN QUERY
 01.03.2019 09:55
0
0
35
2
Данный вопрос помечен как решенный
 Ответы 2
 Ответ принят как подходящий
Вам не требуется динамический SQL для добавления интервала к выражению.

CREATE or replace FUNCTION p15d() 
  RETURNS table(date_ date ) AS $$ 
  declare 
  i date := current_date; 
  ii date := current_date + integer '15'; 
 BEGIN 
  loop 
      return query  select ( i + interval '1 day' )::date; 
      i = i + 1; 
      exit when i = ii; 
  end loop; 
 END; 
 $$ 
 LANGUAGE plpgsql; 
Но в такой функции нет необходимости, в Postgres уже есть функция generate_series, которая дает то, что вы хотите.

CREATE or replace FUNCTION p15d() 
  RETURNS table(date_ date ) AS 
 $$ 
   select generate_series(current_date+1,current_date + 15,interval '1 day' )::date; 
 $$ 
 LANGUAGE SQL; 
Демо

 01.03.2019 10:09
Причина вашего сообщения об ошибке заключается в том, что выполняемый вами запрос (сегодня):

select 2019-03-02
Добавить поле в функцию RETURNS TABLE pgplsql
Вопросы
POSTGRESQL
Добавить поле в функцию RETURNS TABLE pgplsql
Как добавить поле в ТАБЛИЦУ ВОЗВРАТА функции plpgpsql, значение, которое я хочу добавить, отсутствует в SELECT, выполняемом внутри функции:

У меня есть эта функция, которая измеряет сумму процессора и оперативной памяти, используемых заданиями каждые «шаговые» секунды между start_date и end_date (временная метка эпохи):

CREATE OR REPLACE FUNCTION resources(start_date INTEGER, end_date INTEGER, step INTEGER) 
RETURNS TABLE (
    cpu bigint
  , ram bigint)  AS $$
DECLARE
   counter INTEGER := 0 ;
BEGIN
  counter := start_date;
  LOOP 
    EXIT WHEN counter > end_date ;
RETURN QUERY EXECUTE
    'SELECT sum(j_ram) as ram, sum(j_cpu) as cpu from jobs where j_start_time <= ' || counter || ' and j_end_time >= ' || counter;
    counter := counter + step ; 
  END LOOP ; 

END;
$$ LANGUAGE plpgsql;    
Выведенные результаты выглядят примерно так:

 cpu   |  ram 
-------+------
     0 |      
     6 | 12000
     6 | 11000
     1 | 1000
Как добавить значение переменной «счетчик» в таблицу, чтобы было что-то вроде:

 cpu   |  ram  | counter 
-------+-------+--------
     0 |       |     100        
     6 | 12000 |     110      
     6 | 11000 |     120       
     1 |  1000 |     130      
 28.02.2019 10:23
0
0
152
2
Данный вопрос помечен как решенный
 Ответы 2
Здесь нет необходимости в динамическом SQL. И если вы пропустите это, вы можете просто добавить переменную в выбор:

CREATE OR REPLACE FUNCTION resources(start_date INTEGER, end_date INTEGER, step INTEGER) 
  RETURNS TABLE (
      cpu bigint
    , ram bigint 
    , counter bigint)  
AS $$

DECLARE
   counter INTEGER := 0;
BEGIN
  counter := start_date;
  LOOP 
    EXIT WHEN counter > end_date;

    RETURN QUERY 
      SELECT sum(j_ram) as ram, sum(j_cpu) as cpu, counter 
      from jobs 
      where j_start_time <= counter 
        and j_end_time >= counter;

    counter := counter + step; 
  END LOOP; 

END;
$$ LANGUAGE plpgsql;   
 28.02.2019 11:01
 Ответ принят как подходящий
На самом деле вам не нужен EXECUTE для вашего случая, так как нет динамического параметра, такого как имя таблицы, имя столбца и т. д. Меняется только значение, переданное в предложение where. Счетчик может быть частью select.

CREATE OR REPLACE FUNCTION resources(start_date INTEGER, end_date INTEGER, 
step INTEGER) 
RETURNS TABLE (
    cpu bigint
  , ram bigint
  , counter int)  AS $$
DECLARE
   counter INTEGER := 0 ;
BEGIN
  counter := start_date;
  LOOP 
    EXIT WHEN counter > end_date ;
RETURN QUERY 
    SELECT sum(j_ram)::bigint as ram, sum(j_cpu)::bigint as cpu,
           counter from jobs 
        where j_start_time <= counter
    and  j_end_time >= counter;
    counter := counter + step ; 
  END LOOP ; 
END;
$$ LANGUAGE plpgsql;    
Я бы порекомендовал вам избегать циклов, одного запроса с использованием generate_series было бы достаточно. Тогда функция может быть простой SQL-функция, если вам не нужно ничего делать, кроме как возвращать только результат запроса.

CREATE OR REPLACE FUNCTION resources2(start_date INTEGER, end_date INTEGER, 
step INTEGER) 
RETURNS TABLE (
    cpu bigint
  , ram bigint
  , counter int)  AS $$
   SELECT sum(j_ram) :: BIGINT AS ram, 
         sum(j_cpu) :: BIGINT AS cpu, 
       g.counter 
    FROM   jobs j 
       JOIN (SELECT generate_series(start_date, end_date, step) AS counter) g 
         ON j_start_time <= g.counter 
            AND j_end_time >= g.counter 
   GROUP  BY g.counter 
    ORDER  BY g.counter; 
$$ LANGUAGE sql;   
Демо

Вторая функция может быть даже language sql не нужна для PL/pgSQL там

— 
a_horse_with_no_name
 28.02.2019 11:07
Спасибо, теперь я лучше понимаю, единственный недостаток в том, что если «выбрать из заданий» не возвращает никаких заданий, у меня не будет записи для текущего счетчика.

— 
Tony Morris
 01.03.2019 11:13
С решением, использующим LOOP, у меня есть строка, когда не выбрано ни одно задание (таким образом, процессор/ОЗУ равно 0). Однако решение с generate_series кажется чище.

— 
Tony Morris
 01.03.2019 11:34



Теперь 2019 минус 3 минус 2 равно 2014, то есть целому числу.


Как вызвать массив в хранимой процедуре?
Вопросы
POSTGRESQL
Как вызвать массив в хранимой процедуре?
Могу ли я узнать, как вызвать массив в хранимой процедуре? Я попытался заключить его в скобку, чтобы указать имя столбца, которое нужно вставить в новую таблицу.

CREATE OR REPLACE PROCEDURE data_versioning_nonull(new_table_name VARCHAR(100),column_name VARCHAR(100)[], current_table_name VARCHAR(100))
language plpgsql
as $$
BEGIN
    EXECUTE ('CREATE TABLE ' || quote_ident(new_table_name) || ' AS SELECT ' || quote_ident(column_name) || ' FROM ' || quote_ident(current_table_name));
END $$;

CALL data_versioning_nonull('sales_2019_sample', ['orderid', 'product', 'address'], 'sales_2019');
 23.11.2022 19:37
1
0
70
2
Данный вопрос помечен как решенный
 Ответы 2
Во-первых, измените хранимую процедуру, чтобы преобразовать выбранные столбцы из массива в csv следующим образом.

CREATE OR REPLACE PROCEDURE data_versioning_nonull(new_table_name VARCHAR(100),column_name VARCHAR(100)[], current_table_name VARCHAR(100))
language plpgsql
as $$
BEGIN
    EXECUTE ('CREATE TABLE ' || quote_ident(new_table_name) || ' AS SELECT ' || array_to_string(column_name, ',') || ' FROM ' || quote_ident(current_table_name));
END $$;
Затем назовите это как:

CALL data_versioning_nonull('sales_2019_sample', '{"orderid", "product", "address"}', 'sales_2019');
 23.11.2022 20:00
 Ответ принят как подходящий
Использование execute format() позволяет заменить все заполнители quote_ident() на %I в одном тексте, а не в серии связанных фрагментов. %1$I позволяет повторно использовать первый аргумент.
Лучше всего, если вы используете ARRAY['a','b','c']::VARCHAR(100)[], чтобы явно сделать его массивом желаемого типа. '{"a","b","c"}'::VARCHAR(100)[] тоже работает.
Вам нужно будет преобразовать массив в список столбцов другим способом, потому что при преобразовании в текст он получит фигурные скобки, которые не разрешены в синтаксисе списка столбцов. Демо
Не рекомендуется вводить случайные ограничения — PostgreSQL не ограничивает длину идентификатора 100 символами, так что вам это тоже не нужно. Ограничение по умолчанию составляет 63 байта , так что вы можете использовать намного больше, чем 100 символов ( демо ). Вы можете переключить этот тип данных на обычный текст . Интересно, что превышение указанной длины varchar просто преобразует его в неограниченный varchar, что сделает его просто синтаксическим шумом.
Онлайн-демонстрация DBFiddle

CREATE TABLE sales_2019(orderid INT,product INT,address INT);

CREATE OR REPLACE PROCEDURE data_versioning_nonull(
  new_table_name     TEXT,
  column_names       TEXT[], 
  current_table_name TEXT)
LANGUAGE plpgsql AS $$
DECLARE
  list_of_columns_as_quoted_identifiers TEXT;
BEGIN
  SELECT string_agg(quote_ident(name),',')
  INTO list_of_columns_as_quoted_identifiers
  FROM unnest(column_names) name;
  
  EXECUTE format('CREATE TABLE %1$I.%2$I AS SELECT %3$s FROM %1$I.%4$I',
                   current_schema(),
                   new_table_name,
                   list_of_columns_as_quoted_identifiers,
                   current_table_name);
END $$;

CALL data_versioning_nonull(
  'sales_2019_sample', 
  ARRAY['orderid', 'product', 'address']::text[], 
  'sales_2019');
Осведомленность о схеме: в настоящее время процедура создает новую таблицу в схеме по умолчанию на основе таблицы в той же схеме по умолчанию — выше я сделал это явным, но в любом случае это то, что она будет делать без вызовов current_schema(). Вы можете добавить параметры new_table_schema и current_table_schema, и если большую часть времени вы не ожидаете, что они будут использоваться, вы можете для удобства скрыть их за перегрузками процедур, используя current_schema(), чтобы сохранить неявное поведение. Демо


Выберите из разных таблиц в зависимости от состояния
Вопросы
POSTGRESQL
Выберите из разных таблиц в зависимости от состояния
Я хотел бы выбрать из разных таблиц на основе параметра, возможно ли это сделать? Обе таблицы имеют совместимую структуру.

select * from
  (
    case when p_target then
      select * from table_a
    else
      select * from table_b
    end
  );
 13.03.2019 13:55
0
2
1 076
2
Данный вопрос помечен как решенный
 Ответы 2
 Ответ принят как подходящий
Хотя это вовсе не лучшая практика, и вам действительно следует взглянуть на свою модель данных, вот способ сделать это:

with table_a as (
select 1::int, 'a'::text param
), table_b as (
select 2::int, 'b'::text param
)
select *
from (
    select *
    from table_a
    union all
    select *
    from table_b
) rs
where param = 'a'
Просто добавьте столбец параметра ко всем таблицам, объедините их, а затем добавьте их все в подзапрос, из которого вы можете выбрать параметр конкретной таблицы.

 13.03.2019 14:35
Ответ Георгия лучше всего решает вопрос, который я задал, поэтому для будущих читателей это, вероятно, будет правильным ответом.

Однако для моей ситуации я выбрал другой подход, я инкапсулировал эту функцию обмена таблицами в процедуру, которая выглядит следующим образом:

create function table_swap(p_target character varying)
  returns TABLE(id int)
language plpgsql
as $$
begin     
case
  when p_target = 'a' then
    return query
      select * from table_a;

  when p_target = 'b' then
    return query
      select * from table_b;

  else
    return;
 end case;
Что затем позволило мне сделать следующее

select * from table_swap(p_target);


Доступ к имени динамического столбца типа строки в функции триггера
Вопросы
SQL
Доступ к имени динамического столбца типа строки в функции триггера
Я пытаюсь создать динамическую функцию для настройки триггеров.

CREATE OR REPLACE FUNCTION device_bid_modifiers_count_per()
  RETURNS TRIGGER AS
$$
  DECLARE
    devices_count INTEGER;
    table_name    regclass := TG_ARGV[0];
    column_name   VARCHAR  := TG_ARGV[1];
  BEGIN
    LOCK TABLE device_types IN EXCLUSIVE MODE;
    EXECUTE format('LOCK TABLE %s IN EXCLUSIVE MODE', table_name);

    SELECT INTO devices_count device_types_count();

    IF TG_OP = 'DELETE' THEN
      SELECT format(
        'PERFORM validate_bid_modifiers_count(%s, %s, OLD.%s, %s)',
        table_name,
        column_name,
        column_name,
        devices_count
      );
    ELSE
      SELECT format(
        'PERFORM validate_bid_modifiers_count(%s, %s, NEW.%s, %s)',
        table_name,
        column_name,
        column_name,
        devices_count
      );
    END IF;
    RETURN NEW;
  END;
$$ LANGUAGE plpgsql;
Моя проблема связана с выполнением динамической функции validate_bid_modifiers_count(). В настоящее время выдает:

ERROR:  query has no destination for result data
HINT:  If you want to discard the results of a SELECT, use PERFORM instead.
CONTEXT:  PL/pgSQL function device_bid_modifiers_count_per() line 21 at SQL statement
Я не могу уложить это в голове. Я понимаю, что format() возвращает правильную строку вызова функции с аргументами. Как это исправить и заставить работать?

 19.03.2019 17:05
1
2
502
2
Данный вопрос помечен как решенный
 Ответы 2
 Ответ принят как подходящий
Это должно сделать это:

CREATE OR REPLACE FUNCTION device_bid_modifiers_count_per()
  RETURNS TRIGGER AS
$func$
DECLARE
   devices_count int      := device_types_count();
   table_name    regclass := TG_ARGV[0];
   column_name   text     := TG_ARGV[1];
BEGIN
   LOCK TABLE device_types IN EXCLUSIVE MODE;
   EXECUTE format('LOCK TABLE %s IN EXCLUSIVE MODE', table_name);

   IF TG_OP = 'DELETE' THEN
      PERFORM validate_bid_modifiers_count(table_name
                                         , column_name
                                         , (row_to_json(OLD) ->> column_name)::bigint
                                         , devices_count);
   ELSE
      PERFORM validate_bid_modifiers_count(table_name
                                         , column_name
                                         , (row_to_json(NEW) ->> column_name)::bigint
                                         , devices_count);
   END IF;

   RETURN NEW;
END
$func$  LANGUAGE plpgsql;
Непосредственной причиной сообщения об ошибке был внешний SELECT. Без цели вам нужно заменить ее на PERFORM в plpgsql. Но внутренний PERFORM в строке запроса, переданной EXECUTE, тоже был неправильным. PERFORM — это команда plpgsql, недопустимая в строке SQL, переданной EXECUTE, которая ожидает код SQL. Вы должны использовать SELECT там. Наконец, OLD и NEW не видны внутри EXECUTE, и каждый из них вызовет собственное исключение, как это было у вас. Все проблемы решаются сбросом EXECUTE.

Простой и быстрый способ получить значение имя динамического столбца из типов строк OLD и NEW: привести к json, после чего вы можете параметризовать имя ключа, как показано. Должно быть немного проще и быстрее, чем альтернатива с динамическим SQL, что также возможно, например:

  ...
  EXECUTE format('SELECT validate_bid_modifiers_count(table_name
                                                    , column_name
                                                    , ($1.%I)::bigint
                                                    , devices_count)', column_name)
  USING OLD;
  ...
Связанный:

Получить значения из разных столбцов в общем триггере
Триггер с именем динамического поля
В сторону: не уверен, зачем вам нужны тяжелые замки.

Сторона 2: вместо этого рассмотрите возможность написания отдельной триггерной функции для каждого триггера. Более шумный DDL, но более простой и быстрый в исполнении.

 19.03.2019 18:51
Как я указал в комментарии к Ответ Эрвина Брандштеттера, изначально у меня практически идентичное решение.

Но проблема заключалась в том, что я получал ошибку

ERROR: record "new" has no field "column_name"
CONTEXT: SQL statement "SELECT validate_bid_modifiers_count(table_name, column_name, NEW.column_name, devices_count)"
PL/pgSQL function device_bid_modifiers_count_per() line 15 at PERFORM
Вот почему я подумал, что мне нужен способ динамической оценки вещей.

В настоящее время это работает со следующим все еще уродливым решением для меня (уродливым, потому что мне не нравятся 2 утверждения IF, я бы хотел, чтобы он был супердинамичным, но, возможно, я прошу слишком многого):

CREATE OR REPLACE FUNCTION device_bid_modifiers_count_per()
  RETURNS TRIGGER AS
$func$
  DECLARE
    row           RECORD;
    table_name    regclass := TG_ARGV[0];
    column_name   text := TG_ARGV[1];
    devices_count INTEGER;

  BEGIN
    LOCK TABLE device_types IN EXCLUSIVE MODE;
    EXECUTE format('LOCK TABLE %s IN EXCLUSIVE MODE', table_name);

    devices_count := device_types_count();

    IF TG_OP = 'DELETE' THEN
      row := OLD;
    ELSE
      row := NEW;
    END IF;

    IF column_name = 'campaign_id' THEN
      PERFORM validate_bid_modifiers_count(table_name, column_name, row.campaign_id, devices_count);
    ELSIF column_name = 'adgroup_id' THEN
      PERFORM validate_bid_modifiers_count(table_name, column_name, row.adgroup_id, devices_count);
    ELSE
      RAISE EXCEPTION 'invalid_column_name %', column_name;
    END IF;
    RETURN NEW;
  END;
$func$ LANGUAGE plpgsql;
Я открыт для более надежных предложений решения.

По сути, второе условие почти противоречит цели иметь одну функцию, я мог бы в этот момент также разделить ее на две функции. Потому что цель состоит в том, чтобы определить несколько (2) триггеров с помощью этой функции (предоставив ей аргументы).


Область имен столбцов, псевдонимы и параметры OUT в функции PL/pgSQL
Вопросы
SQL
Область имен столбцов, псевдонимы и параметры OUT в функции PL/pgSQL
Мне трудно понять, почему я могу ссылаться на выходные столбцы в returns table(col type).

В приведенном ниже коде есть небольшая ошибка: переменная order by относится к res в returns, а не к data1, которому мы присвоили псевдоним res. res в where всегда равно нулю, и мы получаем 0 строк.

Почему я могу ссылаться на имя столбца в выводе?
В каких случаях я этого хочу?

CREATE OR REPLACE FUNCTION public.test(var INTEGER)
RETURNS table(res int )
LANGUAGE plpgsql
AS $function$
begin
    return query 
    select data1 res 
    from table_with_data 
    where res < var;
end
$function$
 26.10.2022 13:54
1
0
91
2
Данный вопрос помечен как решенный
 Ответы 2
 Ответ принят как подходящий
Почему я могу ссылаться на имя столбца в выводе
Из инструкции, раздел о параметрах функций:

column_name Имя выходного столбца в синтаксисе RETURNS TABLE. Фактически это еще один способ объявления именованного параметра OUT, за исключением того, что RETURNS TABLE также подразумевает RETURNS SETOF.

Это означает, что в вашем случае res фактически является записываемой переменной, набор которой вы планируете возвращать. Как и любая другая переменная без присвоенного значения по умолчанию, она начинается с null.

В каком случае я хочу этого
Вы можете вернуть несколько записей из функции этого типа с помощью одного return query, но другим способом является серия из нескольких return query или return next - во втором случае каждый раз заполняя поля в записи вашей выходной таблицы . Вы могли бы ожидать, что оператор return завершит функцию, но в этом сценарии только один return; без каких-либо добавлений имел бы такой эффект.

create table public.test_res (data integer);

CREATE OR REPLACE FUNCTION public.test(var INTEGER)
RETURNS table(res int )
LANGUAGE plpgsql
AS $function$
begin
    insert into public.test_res select res;--to inspect its initial value later
    select 1 into res;
    return next;
    return next;--note that res isn't reset after returning next
    return query select 2;--doesn't affect the current value of res
    return next;--returning something else earlier didn't affect res either
    return;--it will finish here
    select 3 into res;
    return next;
end
$function$;
select * from test(0);
-- res
-------
--   1
--   1
--   2
--   1
--(4 rows)
table public.test_res; --this was the initial value of res within the function
-- data
--------
-- null
--(1 row)
Что самое полезное с LOOPs

CREATE OR REPLACE FUNCTION public.test(var INTEGER)
RETURNS table(comment text,res int) LANGUAGE plpgsql AS $function$
declare  rec record;
         array_slice int[];
begin
    return query select 'return query returned these multiple records in one go', a from generate_series(1,3,1) a(a);
    res:=0;
    comment:='loop exit when res>4';
    loop exit when res>4;
        select res+1 into res;
        return next;
    end loop;
    comment:='while res between 5 and 8 loop';
    while res between 5 and 8 loop
      select res+2 into res;
      return next;
    end loop;
    comment:='for element in reverse 3 .. -3 by 2 loop';
    for element in reverse 3 .. -3 by 2 loop
      select element into res;
      return next;
    end loop;
    comment:='for <record> in <expression> loop';
    for rec in select pid from pg_stat_activity where state<>'idle' loop
      select rec.pid into res;
      return next;
    end loop;
    comment:='foreach array_slice slice 1 in array arr loop';
    foreach array_slice SLICE 1 in array ARRAY[[1,2,3],[11,12,13],[21,22,23]] loop
      select array_slice[1] into res;
      return next;
    end loop;
end
$function$;
Пример результатов

select * from public.test(0);
--                        comment                         |  res
----------------------------------------------------------+--------
-- return query returned these multiple records in one go |      1
-- return query returned these multiple records in one go |      2
-- return query returned these multiple records in one go |      3
-- loop exit when res>4                                   |      1
-- loop exit when res>4                                   |      2
-- loop exit when res>4                                   |      3
-- loop exit when res>4                                   |      4
-- loop exit when res>4                                   |      5
-- while res between 5 and 8 loop                         |      7
-- while res between 5 and 8 loop                         |      9
-- for element in reverse 3 .. -3 by 2 loop               |      3
-- for element in reverse 3 .. -3 by 2 loop               |      1
-- for element in reverse 3 .. -3 by 2 loop               |     -1
-- for element in reverse 3 .. -3 by 2 loop               |     -3
-- for <record> in <expression> loop                      | 118786
-- foreach array_slice slice 1 in array arr loop          |      1
-- foreach array_slice slice 1 in array arr loop          |     11
-- foreach array_slice slice 1 in array arr loop          |     21
--(18 rows)
 28.10.2022 16:01
Правда, параметры OUT (включая имена полей в предложении RETURNS TABLE (...)) видны во всех операторах SQL DML в теле функции PL/pgSQL, как и другие переменные. Подробнее см. в главах руководства Подстановка переменных и Возврат из функции для PL/pgSQL.

Однако здесь на первое место выходит более фундаментальное недоразумение. Синтаксис вашего вложенного SELECT изначально неверен. Переменная PL/pgSQL маскирует эту проблему (другой проблемой). В SQL вы не можете ссылаться на имена выходных столбцов (псевдонимы столбцов в предложении SELECT) в предложении WHERE. Это неверно:

select data1 res 
from table_with_data 
where res < var;
Инструкция:

Имя выходного столбца можно использовать для ссылки на значение столбца в ORDER BY и GROUP BY, но не в WHERE или HAVING предложениях; вместо этого вы должны написать выражение.

Это отличается от ORDER BY, который вы упоминаете в тексте, но не включаете в запрос. Видеть:

GROUP BY + оператор CASE
Исправление немедленной проблемы
Можно отремонтировать так:

CREATE OR REPLACE FUNCTION public.test1(var int)
  RETURNS TABLE(res int)
  LANGUAGE plpgsql AS
$func$
BEGIN
   RETURN QUERY
   SELECT data1 AS res     -- column alias is just noise (or documentation)
   FROM   table_with_data
   WHERE  data1 < var;     -- original column name!
END
$func$
рабочий пример

Видеть:

Сравнение действительных чисел на сходство триграмм
Псевдоним столбца в этом случае просто шум. Имя столбца, возвращаемого функцией, в любом случае — res, как определено в предложении RETURNS TABLE.

Примечание: рекомендуется не опускать ключевое слово AS для псевдонимов столбцов (в отличие от псевдонимов таблиц). Видеть:

Запрос к ORDER BY количеству строк, возвращаемых из другого SELECT
Если между именем столбца и переменной была фактическая неоднозначность — скажем, вы объявили параметр OUT или переменную с именем data1 — вы получите сообщение об ошибке, подобное этому:

ERROR:  column reference "data1" is ambiguous
LINE 2:    select data1 
                  ^
DETAIL:  It could refer to either a PL/pgSQL variable or a table column.
Исправление грубой силы
Можно исправить специальной командой в начале тела функции:

CREATE OR REPLACE FUNCTION public.test3(var int)
  RETURNS TABLE(data1 int)
  LANGUAGE plpgsql AS
$func$
#variable_conflict use_column  -- ! to resolve conflicts
BEGIN
   RETURN QUERY
   SELECT data1
   FROM   table_with_data
   WHERE  data1 < var;         -- !
END
$func$
Видеть:

Конфликт имен между параметром функции и результатом JOIN с предложением USING
Правильное исправление
Уточняйте имена столбцов в таблице и избегайте конфликтующих имен переменных с самого начала.

CREATE OR REPLACE FUNCTION public.test4(_var int)
  RETURNS TABLE(res int)
  LANGUAGE plpgsql STABLE AS
$func$
BEGIN
   RETURN QUERY
   SELECT t.data1            -- table-qualify column name
   FROM   table_with_data t
   WHERE  t.data1 < _var;    -- !
END
$func$
Пример:

Вызов функции PostgreSQL из Java


Избегайте почти дублирующего запроса в функции postgres plpgsql
Вопросы
SQL
Избегайте почти дублирующего запроса в функции postgres plpgsql
Есть ли лучший способ написать этот запрос в функции plpgsql, чем почти дважды дублировать запрос? Как можно сказать, что если valB равно null, то оно должно соответствовать чему-либо в colB, по существу удаляясь из предложения where?

if (valB is not null) then
    update mytable set colA = valA where (colB, colC) = (valB, valC);
else
    update mytable set colA = valA where (colC) = (valC);
end if;
 24.03.2019 17:25
0
0
25
2
 Ответы 2
Вы можете использовать условие OR с параметром:

update mytable 
   set colA = valA 
where (valb is null and colC = valC)
   or (valb is not null and (colb, colc) = (valb, valc));
 24.03.2019 17:29
Вы можете использовать or. Я бы сформулировал это так:

update mytable 
   set colA = valA 
where colC = valC and
       (valb is null or colb = valb);
Не могли бы вы сказать, что есть какая-то практическая разница между тем, что вы предложили, и небольшим изменением, заменой (valb is null or colb = valb) на (colb = case when valb is null then colb else valb end), или они идентичны? Есть ли у другого способа какие-либо недостатки с точки зрения производительности или чего-то еще (кроме того, что чтение немного дольше)?

— 
user779159
 26.03.2019 15:14
@user779159 . . . Я предпочитаю оставлять case выражения вне where предложений.

— 
Gordon Linoff
 27.03.2019 02:03



Может ли фиксация Postgres существовать в процедуре с блоком исключения?
Вопросы
POSTGRESQL
Может ли фиксация Postgres существовать в процедуре с блоком исключения?
Мне трудно понять транзакции в Postgres. У меня есть процедура, которая может столкнуться с исключением. Есть части процедуры, в которых я, возможно, захочу зафиксировать свою работу до сих пор, чтобы ее нельзя было откатить, если возникнут исключения.

Я хочу иметь блок обработки исключений в конце процедуры, где я перехватываю исключение и вставляю информацию из исключения в таблицу регистрации.

Я свел проблему к простой процедуре, описанной ниже, которая не работает в PostgreSQL 11.2 с

2D000 cannot commit while a subtransaction is active
PL/pgSQL function x_transaction_try() line 6 at COMMIT
    drop procedure if exists x_transaction_try;
    create or replace procedure x_transaction_try()
        language plpgsql
    as $$
    declare
    begin
         raise notice 'A';
         -- TODO A: do some insert or update that I want to commit no matter what
         commit;
         raise notice 'B';
         -- TODO B: do something else that might raise an exception, without rolling
         -- back the work that we did in "TODO A".
    exception when others then
      declare
        my_ex_state text;
        my_ex_message text;
        my_ex_detail text;
        my_ex_hint text;
        my_ex_ctx text;
      begin
          raise notice 'C';
          GET STACKED DIAGNOSTICS
            my_ex_state   = RETURNED_SQLSTATE,
            my_ex_message = MESSAGE_TEXT,
            my_ex_detail  = PG_EXCEPTION_DETAIL,
            my_ex_hint    = PG_EXCEPTION_HINT,
            my_ex_ctx     = PG_EXCEPTION_CONTEXT
          ;
          raise notice '% % % % %', my_ex_state, my_ex_message, my_ex_detail, my_ex_hint, my_ex_ctx;
          -- TODO C: insert this exception information in a logging table and commit
      end;
    end;
    $$;

    call x_transaction_try();
Почему эта хранимая процедура не работает? Почему мы никогда не видим вывод raise notice 'B', а вместо этого идем в блок исключений? Можно ли сделать то, что я описал выше, с хранимой процедурой Postgres 11?

Обновлено: это полный пример кода. Вставьте приведенный выше полный пример кода (включая операторы create procedure и call) в файл sql и запустите его в базе данных Postgres 11.2 для воспроизведения. Желаемым результатом будет вывод функции A, а затем B, но вместо этого она печатает A, а затем C вместе с информацией об исключении.

Также обратите внимание, что если вы закомментируете весь блок обработки исключений, чтобы функция вообще не перехватывала исключения, то функция будет выводить «A», а затем «B» без возникновения исключения. Вот почему я озаглавил вопрос так, как я это сделал: «Может ли Postgres Commit существовать в процедуре с блоком исключения?»

 28.03.2019 21:56
12
3
8 853
2
Данный вопрос помечен как решенный
 Ответы 2
Проблема в пункте EXCEPTION.

В PL/pgSQL это реализовано как субтранзакция (то же самое, что и SAVEPOINT в SQL), который откатывается при достижении блока исключений.

Вы не можете COMMIT, пока активна субтранзакция.

См. этот комментарий в src/backend/executor/spi.c:

/*
 * This restriction is required by PLs implemented on top of SPI.  They
 * use subtransactions to establish exception blocks that are supposed to
 * be rolled back together if there is an error.  Terminating the
 * top-level transaction in such a block violates that idea.  A future PL
 * implementation might have different ideas about this, in which case
 * this restriction would have to be refined or the check possibly be
 * moved out of SPI into the PLs.
 */
if (IsSubTransaction())
    ereport(ERROR,
            (errcode(ERRCODE_INVALID_TRANSACTION_TERMINATION),
             errmsg("cannot commit while a subtransaction is active")));
 29.03.2019 09:18
 Ответ принят как подходящий
Семантика обработка ошибок PL/pgSQL диктует, что:

When an error is caught by an EXCEPTION clause ... all changes to persistent database state within the block are rolled back.

Это реализовано с помощью подтранзакций, которые в основном аналогичны точки сохранения. Другими словами, когда вы запускаете следующий код PL/pgSQL:

BEGIN
  PERFORM foo();
EXCEPTION WHEN others THEN
  PERFORM handle_error();
END
... на самом деле происходит что-то вроде этого:

BEGIN
  SAVEPOINT a;
  PERFORM foo();
  RELEASE SAVEPOINT a;
EXCEPTION WHEN others THEN
  ROLLBACK TO SAVEPOINT a;
  PERFORM handle_error();
END
COMMIT внутри блока полностью сломает это; ваши изменения станут постоянными, точка сохранения будет удалена, а обработчик исключений останется без возможности отката. В результате коммиты в этом контексте не допускаются, и попытка выполнить COMMIT приведет к ошибке «невозможно зафиксировать, пока активна подтранзакция».

Вот почему вы видите, как ваша процедура переходит к обработчику исключений вместо запуска raise notice 'B': когда она достигает commit, она выдает ошибку, и обработчик ее перехватывает.

Однако это довольно просто обойти. Блоки BEGIN ... END могут быть вложенными, и только блоки с предложениями EXCEPTION предполагают установку точек сохранения, поэтому вы можете просто обернуть команды до и после коммита в их собственные обработчики исключений:

create or replace procedure x_transaction_try() language plpgsql
as $$
declare
  my_ex_state text;
  my_ex_message text;
  my_ex_detail text;
  my_ex_hint text;
  my_ex_ctx text;
begin
  begin
    raise notice 'A';
  exception when others then
    raise notice 'C';
    GET STACKED DIAGNOSTICS
      my_ex_state   = RETURNED_SQLSTATE,
      my_ex_message = MESSAGE_TEXT,
      my_ex_detail  = PG_EXCEPTION_DETAIL,
      my_ex_hint    = PG_EXCEPTION_HINT,
      my_ex_ctx     = PG_EXCEPTION_CONTEXT
    ;
    raise notice '% % % % %', my_ex_state, my_ex_message, my_ex_detail, my_ex_hint, my_ex_ctx;
  end;

  commit;

  begin
    raise notice 'B';
  exception when others then
    raise notice 'C';
    GET STACKED DIAGNOSTICS
      my_ex_state   = RETURNED_SQLSTATE,
      my_ex_message = MESSAGE_TEXT,
      my_ex_detail  = PG_EXCEPTION_DETAIL,
      my_ex_hint    = PG_EXCEPTION_HINT,
      my_ex_ctx     = PG_EXCEPTION_CONTEXT
    ;
    raise notice '% % % % %', my_ex_state, my_ex_message, my_ex_detail, my_ex_hint, my_ex_ctx;
  end;      
end;
$$;
К сожалению, это приводит к большому количеству дублирования в обработчиках ошибок, но я не могу придумать хороший способ избежать этого.


Можно ли читать/записывать/удалять файлы ОС с помощью plpgsql?
Вопросы
POSTGRESQL
Можно ли читать/записывать/удалять файлы ОС с помощью plpgsql?
Можно ли читать, писать, удалять файлы ОС с помощью PL/pgSQL?

Могу ли я запускать команды ОС?

Я видел несколько примеров того, что вы можете копировать файлы, такие как CSV, но можете ли вы читать/записывать/удалять файлы ОС? Вы можете выполнять команды ОС?

 02.04.2019 15:21
1
1
352
2
Данный вопрос помечен как решенный
 Ответы 2
 Ответ принят как подходящий
Нет, это невозможно.

PL/pgSQL является надежным языком и поэтому не позволяет получить доступ к ресурсам сервера, не говоря уже о выполнении команд ОС.

Объяснение «доверенного языка»

The optional key word TRUSTED specifies that the language does not grant access to data that the user would not otherwise have. Trusted languages are designed for ordinary database users (those without superuser privilege) and allows them to safely create functions and procedures. Since PL functions are executed inside the database server, the TRUSTED flag should only be given for languages that do not allow access to database server internals or the file system

Доступны некоторые SQL-функции, которые позволяют ролям с привилегиями суперпользователя работать с файлами читать на сервере, но это не зависит от PL/pgSQL.

Если вы хотите открыть сервер базы данных для всех видов атак, используйте ненадежный язык, например ЯП/Питон, или, если вы действительно предприимчивы, пл/ш

 02.04.2019 15:27
PostgreSQL имеет несколько функции для чтения файлов в каталоге данных: pg_read_file и pg_read_binary_file

расширение «админпак» имеет функцию записи файлов: pg_file_write

Возможно, вы можете злоупотреблять COPY ... TO PROGRAM для запуска кода на сервере.

Но разумнее всего написать функцию на PL/PerlU или PL/Python.

Большое спасибо за ваше время, я очень ценю это, но пользователь a_horse_with_no_name ответил первым.

— 
Iakovos Belonias
 02.04.2019 15:40
Конечно. Я опубликовал его, тем не менее, так как у меня было несколько разных вещей, чтобы поделиться.

— 
Laurenz Albe
 02.04.2019 15:43



Как обновить ту же строку, что и вставка/обновление в plpgsql, не достигая max_stack_depth
Вопросы
POSTGRESQL
Как обновить ту же строку, что и вставка/обновление в plpgsql, не достигая max_stack_depth
Моя проблема в том, что я достиг предела стека. И сообщение об ошибке говорит: «Вы должны увеличить max_stack_depth» и показывает мне строку, которую я использую для обновления другого столбца.

Я сталкиваюсь с этой ошибкой после запроса на обновление (код ниже).

Я знаю, что моя проблема может выглядеть как другие вопросы, но ни один из них не объясняет, почему я получаю эту ошибку.

То, что я хочу сделать, простое, и я делал это много раз, но здесь мне чего-то не хватает.

Я хочу: если есть обновление на столе support_fh нажать на курок. Я ожидаю, что этот триггер сделает:

если новые значения запроса на обновление section= 'DISTRIBUTION' и modulo= '6' и fabricant = 'NEXANS' и capacite = 12, то установите diametre = '12.5' (код ниже).

Конечно, это строка diametre из той же строки, что и запрос на обновление.

Кроме того, я знаю, что должен использовать тип character varying вместо типа integer, но меня попросили сделать так.

Моя триггерная функция:

create or replace function maj_diam() returns trigger
as
$$
Declare fab_loc character varying;
Declare section_loc character varying;
Declare capa_loc character varying;
Declare modulo_loc character varying;

BEGIN
    Select fabricant into fab_loc from support_fh where id = new.id;
    Select section into section_loc from support_fh where id = new.id;
    Select capcite into capa_loc from support_fh where id = new.id;
    Select modulo into modulo_loc from support_fh where id = new.id;

    if fab_loc = 'NEXANS' and section_loc = 'DISTRIBUTION'
       and capa_loc = '12' and modulo_loc = '6' then
        update support_fh set diametre = '12.2' where id = new.id;
    endif;

    return new;
end;
$$;
Мой триггер:

create trigger maj_diam
After update on support_fh
for each row
execute procedure maj_diam();
Мой запрос на обновление для проверки моего триггера:

update support_fh set fabricant = 'NEXANS', section = 'DISTRIBUTION', capacite = '12', modulo = '6' 
where id = 11827;
Я хочу извлечь из этого урок, поэтому, если возможно, объясните мне, что я здесь делаю неправильно, или в моем подходе не хватает понимания.

 09.04.2019 11:35
1
2
38
2
Данный вопрос помечен как решенный
 Ответы 2
 Ответ принят как подходящий
Вы получаете эту проблему, потому что обновление в триггере снова запускает триггер, вызывая бесконечный цикл. Никакое значение max_stack_depth не является достаточно большим для этого (и слишком большое увеличение этого значения в любом случае опасно).

Вместо того, что вы делаете, вы должны создать триггер BEFORE и изменить значение NEW, которое должно быть вставлено:

IF NEW.fab_loc = 'NEXANS' AND NEW.section_loc = 'DISTRIBUTION'
   AND NEW.capa_loc = '12' AND NEW.modulo_loc = '6'
THEN
   NEW.diametre := '12.2';
END IF;
 09.04.2019 11:56
Если вы хотите изменить столбцы в обновляемой (или вставленной) строке, не используйте UPDATE в функции триггера. Объявите триггер как BEFORE UPDATE, затем просто назначьте новые значения.

Вам также не нужны четыре оператора select для чтения четырех столбцов из одной и той же таблицы.

Но поскольку вы получаете доступ только к столбцам из той же строки, которая была обновлена, вам вообще не нужен SELECT.

Таким образом, ваша триггерная функция может быть упрощена до:

create or replace function maj_diam() returns trigger
as
$$
BEGIN
   if new.fabricant = 'NEXANS' 
      and new.section = 'DISTRIBUTION' 
      and new.capcite = '12' 
      and new.modulo = '6' 
   then
     new.diametre := '12.2';
   end if;
   return new;
end;
$$;
Предполагая, что капцит, модуль и диаметр на самом деле являются числами, вы не должны сравнивать их со значениями varchar. Таким образом, приведенный выше код, вероятно, должен быть: new.diametre := 12.2; или new.capcite = 12.

И определение триггера необходимо изменить на:

create trigger maj_diam
BEFORE update on support_fh
for each row
execute procedure maj_diam();


Что такое «не-SETOF-функция»?
Вопросы
POSTGRESQL
Что такое «не-SETOF-функция»?
Знакомство с PL/pgSQL…

Я все еще изучаю синтаксис. Иногда я сталкивался с этим сообщением об ошибке:

ERROR: cannot use RETURN QUERY in a non-SETOF function

Звучит загадочно, и я не смог найти информацию в документации Postgres. Отсюда вопрос:

Что такое не-SETOF-функция?
И аналогичным образом, если есть такая вещь, что такое функция SETOF?

 15.04.2019 13:42
6
0
11 867
2
Данный вопрос помечен как решенный
 Ответы 2
 Ответ принят как подходящий
What's a non-SETOF function?

Это функция, возвращающая одно (скалярное) значение, например. integer или varchar, например.

select upper('foo')` 
upper() — это функция «не SETOF», она возвращает только одно значение. Таким образом, функция, которая, например, определяется как returns integer не может вернуть полный результат запроса SELECT, ему нужно использовать return 42;, но нельзя использовать return query ...;

what's a SETOF function?

Это функция, которая возвращает набор результатов, похожий на таблицу (обычно она объявляется как returns table (...). И вы можете использовать ее как таблицу:

select *
from some_set_returning_function();
 15.04.2019 13:45
Как говорит документация:

an SQL function can be declared to return a set (that is, multiple rows) by specifying the function's return type as SETOF sometype, or equivalently by declaring it as RETURNS TABLE(columns). In this case all rows of the last query's result are returned.

Например, если он возвращает строку или скаляр, это будет не-SETOF.


Как преобразовать рекурсию в функцию в plpgsql?
Вопросы
POSTGRESQL
Как преобразовать рекурсию в функцию в plpgsql?
у меня есть этот рабочий код, но мне нужно преобразовать его в функцию с динамическим атрибутом tid=1645, где число 1645 всегда будет меняться.

with recursive r as (
    select tid, boss from titles where tid=1645
    union
    select titles.tid, titles.boss from titles join r on titles.tid = r.boss
)
select * from r
Теперь у меня так же:

DROP FUNCTION bosses_of_rsd_tids(integer);
CREATE OR REPLACE FUNCTION public.bosses_of_rsd_tids(rsd_tid int)
    RETURNS table (c_tid int, c_boss int)
    LANGUAGE plpgsql
AS $function$
    begin
        with recursive r as (
            select tid, boss from titles where tid=rsd_tid
            union
            select titles.tid, titles.boss from titles join r on titles.boss = r.tid
        )

        select c_tid, c_boss;
    end;
 $function$
;
В результате мне нужна таблица результатов... Я пытался return select c_tid, c_boss;, но выдает ошибку: ошибка рядом с возвратом

 07.05.2019 16:02
0
5
121
2
Данный вопрос помечен как решенный
 Ответы 2
Вы должны использовать «запрос возврата» для всех запросов (с включенными)

Вы забыли "от r" в основном выборе

/* РЕДАКТИРОВАТЬ */ в вашем примере вы выбираете c_tid и c_boss вместо tid и boss и проверка соединения инвертируется

запрос обновлен:

  DROP FUNCTION bosses_of_rsd_tids(integer);
  CREATE OR REPLACE FUNCTION public.bosses_of_rsd_tids(rsd_tid int)
   RETURNS table (c_tid int, c_boss int)
LANGUAGE plpgsql
 AS $function$
    begin
       return query with recursive r as (
        select tid, boss from titles where tid=rsd_tid
        union
        select titles.tid, titles.boss from titles join r on titles.tid = r.boss        )

    select tid, boss from r;
end;
$function$
;
 07.05.2019 16:29
 Ответ принят как подходящий
CREATE OR REPLACE FUNCTION public.bosses_of_rsd_tids(rsd_tid int)
  RETURNS TABLE (c_tid int, c_boss int) AS
$func$
BEGIN
   RETURN QUERY
   WITH RECURSIVE r AS (
      SELECT tid, boss
      FROM   titles
      WHERE  tid = rsd_tid

      UNION ALL                           -- ?!
      SELECT t.tid, t.boss
      FROM   r
      JOIN   titles t ON t.tid = r.boss   -- !
      )
   TABLE r;                               -- !
END
$func$  LANGUAGE plpgsql;
Вы хотите UNION ALL вместо UNION, поскольку нет смысла пытаться складывать дубликаты, поднимаясь по иерархии. (Дубликат вызовет бесконечный цикл.)

TABLE r — это сокращение от SELECT * FROM r. Ваша орг. select c_tid, c_boss был неправ. Видеть:

Есть ли ярлык для SELECT * FROM?
Также может быть более простой функцией SQL:

CREATE OR REPLACE FUNCTION public.bosses_of_rsd_tids(rsd_tid int)
  RETURNS TABLE (c_tid int, c_boss int) AS
$func$
   WITH RECURSIVE r AS (
      SELECT tid, boss
      FROM   titles
      WHERE  tid = rsd_tid

      UNION ALL
      SELECT t.tid, t.boss
      FROM   r
      JOIN   titles t ON t.tid = r.boss
      )
   TABLE r;
$func$  LANGUAGE sql;
Видеть:

Разница между языком sql и языком plpgsql в функциях PostgreSQL


Как преобразовать рекурсию в функцию в plpgsql?
Вопросы
POSTGRESQL
Как преобразовать рекурсию в функцию в plpgsql?
у меня есть этот рабочий код, но мне нужно преобразовать его в функцию с динамическим атрибутом tid=1645, где число 1645 всегда будет меняться.

with recursive r as (
    select tid, boss from titles where tid=1645
    union
    select titles.tid, titles.boss from titles join r on titles.tid = r.boss
)
select * from r
Теперь у меня так же:

DROP FUNCTION bosses_of_rsd_tids(integer);
CREATE OR REPLACE FUNCTION public.bosses_of_rsd_tids(rsd_tid int)
    RETURNS table (c_tid int, c_boss int)
    LANGUAGE plpgsql
AS $function$
    begin
        with recursive r as (
            select tid, boss from titles where tid=rsd_tid
            union
            select titles.tid, titles.boss from titles join r on titles.boss = r.tid
        )

        select c_tid, c_boss;
    end;
 $function$
;
В результате мне нужна таблица результатов... Я пытался return select c_tid, c_boss;, но выдает ошибку: ошибка рядом с возвратом

 07.05.2019 16:02
0
5
121
2
Данный вопрос помечен как решенный
 Ответы 2
Вы должны использовать «запрос возврата» для всех запросов (с включенными)

Вы забыли "от r" в основном выборе

/* РЕДАКТИРОВАТЬ */ в вашем примере вы выбираете c_tid и c_boss вместо tid и boss и проверка соединения инвертируется

запрос обновлен:

  DROP FUNCTION bosses_of_rsd_tids(integer);
  CREATE OR REPLACE FUNCTION public.bosses_of_rsd_tids(rsd_tid int)
   RETURNS table (c_tid int, c_boss int)
LANGUAGE plpgsql
 AS $function$
    begin
       return query with recursive r as (
        select tid, boss from titles where tid=rsd_tid
        union
        select titles.tid, titles.boss from titles join r on titles.tid = r.boss        )

    select tid, boss from r;
end;
$function$
;
 07.05.2019 16:29
 Ответ принят как подходящий
CREATE OR REPLACE FUNCTION public.bosses_of_rsd_tids(rsd_tid int)
  RETURNS TABLE (c_tid int, c_boss int) AS
$func$
BEGIN
   RETURN QUERY
   WITH RECURSIVE r AS (
      SELECT tid, boss
      FROM   titles
      WHERE  tid = rsd_tid

      UNION ALL                           -- ?!
      SELECT t.tid, t.boss
      FROM   r
      JOIN   titles t ON t.tid = r.boss   -- !
      )
   TABLE r;                               -- !
END
$func$  LANGUAGE plpgsql;
Вы хотите UNION ALL вместо UNION, поскольку нет смысла пытаться складывать дубликаты, поднимаясь по иерархии. (Дубликат вызовет бесконечный цикл.)

TABLE r — это сокращение от SELECT * FROM r. Ваша орг. select c_tid, c_boss был неправ. Видеть:

Есть ли ярлык для SELECT * FROM?
Также может быть более простой функцией SQL:

CREATE OR REPLACE FUNCTION public.bosses_of_rsd_tids(rsd_tid int)
  RETURNS TABLE (c_tid int, c_boss int) AS
$func$
   WITH RECURSIVE r AS (
      SELECT tid, boss
      FROM   titles
      WHERE  tid = rsd_tid

      UNION ALL
      SELECT t.tid, t.boss
      FROM   r
      JOIN   titles t ON t.tid = r.boss
      )
   TABLE r;
$func$  LANGUAGE sql;
Видеть:

Разница между языком sql и языком plpgsql в функциях PostgreSQL


Триггер | как удалить строку вместо обновления на основе значения ячейки
Вопросы
POSTGRESQL
Триггер | как удалить строку вместо обновления на основе значения ячейки
Постгрескл 10/11.
Мне нужно удалить строку вместо обновления, если значение целевой ячейки равно null.

Итак, я создал эту триггерную функцию:

CREATE OR REPLACE FUNCTION delete_on_update_related_table() RETURNS trigger
AS $$
    DECLARE
        refColumnName text = TG_ARGV[0];
    BEGIN
        IF TG_NARGS <> 1 THEN
            RAISE EXCEPTION 'Trigger function expects 1 parameters, but got %', TG_NARGS;
        END IF;
        EXECUTE 'DELETE FROM ' || TG_TABLE_NAME || ' WHERE $1 = ''$2'''
        USING refColumnName, OLD.id;
        RETURN NULL;
    END;
$$ LANGUAGE plpgsql;
И триггер BEFORE UPDATE:

CREATE TRIGGER proper_delete
BEFORE UPDATE OF def_id
ON public.definition_products 
FOR EACH ROW
WHEN (NEW.def_id IS NULL)
EXECUTE PROCEDURE delete_on_update_related_table('def_id');
Таблица проста:

id  uuid primary key
def_id  uuid not null
Тестовое задание:

UPDATE definition_products SET
    def_id = NULL 
WHERE id = 'f47415e8-6b00-4c65-aeb8-cadc15ca5890';
-- rows affected 0
В документации говорится:

Row-level triggers fired BEFORE can return null to signal the trigger manager to skip the rest of the operation for this row (i.e., subsequent triggers are not fired, and the INSERT/UPDATE/DELETE does not occur for this row).

Раньше я использовал RULE вместо триггера. Но нельзя использовать предложения WHERE и RETURNING в одном правиле.

You need an unconditional ON UPDATE DO INSTEAD rule with a RETURNING clause

Итак, есть ли способ?

 14.05.2019 23:35
4
1
1 435
2
Данный вопрос помечен как решенный
 Ответы 2
Это работает для меня, с несколькими небольшими изменениями:

CREATE OR REPLACE FUNCTION delete_on_update_related_table() RETURNS trigger
AS $$
    DECLARE
        refColumnName text = quote_ident(TG_ARGV[0]);
    BEGIN
        IF TG_NARGS <> 1 THEN RAISE EXCEPTION 'Trigger function expects 1 parameters, but got %', TG_NARGS; END IF;
        EXECUTE format('DELETE FROM %s WHERE %s = %s', quote_ident(TG_TABLE_NAME), refColumnName, quote_literal(OLD.id));
        RETURN NULL;
    END;
$$ LANGUAGE plpgsql;

-- create trigger
CREATE TRIGGER proper_delete
BEFORE UPDATE OF def_id
ON public.definition_products 
FOR EACH ROW
WHEN (NEW.def_id IS NULL)
EXECUTE PROCEDURE delete_on_update_related_table('id');   --Note id, not def_id

 15.05.2019 15:37
 Ответ принят как подходящий
Хотя ответ Джереми — это хорошо, есть еще возможности для улучшения.

Проблемы
Вы должны быть очень точный в определении цели. Ваше заявление:

I need to delete row instead of update in case if target cell value is null.

... не означает, что столбец был изменен на NULL в UPDATE под рукой. Возможно, это было NULL до того, как вы внедрили триггер. Так что нет:

BEFORE UPDATE OF def_id ON public.definition_products
Но просто:

BEFORE UPDATE ON public.definition_products 
Конечно, если колонка определена NOT NULL (как, наверное, и должно быть), эффективной разницы нет — кроме шума и дополнительной точки отказа. Руководство:

A column-specific trigger (one defined using the UPDATE OFcolumn_name syntax) will fire when any of its columns are listed as targets in the UPDATE command's SET list. It is possible for a column's value to change even when the trigger is not fired, because changes made to the row's contents by BEFORE UPDATE triggers are not considered.

Кроме того, ничто в вашем вопросе не указывает на необходимость динамического SQL. (Это было бы в том случае, если вы хотите повторно использовать одну и ту же функцию триггера для нескольких триггеров в разных таблицах. И даже в этом случае часто лучше просто создать несколько отдельных функций триггера по нескольким причинам: проще, быстрее, менее подвержены ошибкам, легче читать и поддерживать, ...)

Что касается «подверженных ошибкам»: ваш исходный динамический оператор был просто недействителен:

EXECUTE 'DELETE FROM ' || TG_TABLE_NAME || ' WHERE $1 = ''$2'''
    USING refColumnName, OLD.id;
Невозможно передать имя столбца как стоимость (refColumnName).
Нельзя заключать в одинарные кавычки $2, который передается как стоимость и, следовательно, не нуждается в кавычках.
Безоговорочный TG_TABLE_NAME без кавычек может привести к ужасным ошибкам, что особенно важно для тяжелой функции, которая удаляет строки.
Версия Джереми исправляет большинство ошибок, но по-прежнему содержит безоговорочный TG_TABLE_NAME.

Это было бы хорошо:

EXECUTE format('DELETE FROM %s WHERE %I = $1', TG_RELID::regclass, refColumnName)   -- refColumnName still unquoted
USING OLD.id;
Или:

EXECUTE format('DELETE FROM %I.%I WHERE %I = $1', TG_TABLE_SCHEMA, TG_TABLE_NAME, refColumnName)
USING OLD.id;
Связанный:

Почему запрос PostgreSQL SELECT возвращает разные результаты, если указано имя схемы?
Имя таблицы как параметр функции PostgreSQL
Решение
Более простая функция триггера:

CREATE OR REPLACE FUNCTION delete_on_update_related_table()
  RETURNS trigger AS
$func$
BEGIN
  DELETE FROM public.definition_products WHERE id = OLD.id;  -- def_id?
  RETURN NULL;
END
$func$  LANGUAGE plpgsql;
Более простой триггер:

CREATE TRIGGER proper_delete
BEFORE UPDATE ON public.definition_products 
FOR EACH ROW
WHEN (NEW.def_id IS NULL)                            -- that's the defining condition!
EXECUTE PROCEDURE delete_on_update_related_table();  -- no parameter
Вероятно, вы хотите использовать OLD.id, а не OLD.def_id. (Строка для удаления лучше всего определяется ее PK, а не столбцом, измененным на NULL.) Но это не совсем ясно.

Спасибо, использование TG_RELID::regclass действительно намного лучше.

— 
Jeremy
 13.07.2019 13:03



Рекурсивный вызов TreeRelation в хранимой процедуре вызывает ошибку курсора «уже используется»
Вопросы
SQL
Рекурсивный вызов TreeRelation в хранимой процедуре вызывает ошибку курсора «уже используется»
Я создал простое отношение дерева в postgres. Отцовский узел может иметь n узлов. Чтобы получить все дочерние элементы от родительского узла, я хочу написать хранимую процедуру, которая рекурсивно вызывает себя. Это тот момент, когда я застрял.

Моя идея заключалась в том, что я вызываю процедуру с отцовским узлом, затем получаю все его дочерние узлы, снова вызываю процедуру для каждого дочернего узла. Рекурсивный шаг, вызов метода, кажется, убивает процедуру, но я не могу сказать, почему.

Код:

CREATE OR REPLACE PROCEDURE treeDown(INTEGER)
LANGUAGE plpgsql
AS $$
DECLARE
    cur_childs CURSOR FOR select * from TreeRelation where von = $1 AND from < to;
    rec RECORD;
BEGIN
    FOR rec IN cur_childs LOOP
        CALL treeDown(rec.to); -- seems to die here
        RAISE NOTICE '% is a child from %', rec.to, $1;
    end loop;
END;
$$;
Сообщение об ошибке:

[42P03] ERROR: cursor "cur_childs" already in use Wobei: PL/pgSQL function treedown(integer) line 6 at FOR over cursor SQL statement "CALL treeDown(rec.nach)" PL/pgSQL function treedown(integer) line 7 at CALL

Есть идеи? Правильно ли я выполняю вызов или есть другой способ вызвать хранимую процедуру в хранимой процедуре.

 22.05.2019 21:06
0
1
134
2
Данный вопрос помечен как решенный
 Ответы 2
 Ответ принят как подходящий
Вместо именованного курсора вы можете использовать анонимный курсор, поэтому нет необходимости повторно использовать уже существующий.

...
FOR rec IN (SELECT *
                   FROM treerelation
                   WHERE ...) LOOP
...
 22.05.2019 21:24
Я также нашел рабочий способ, используя WITH RECURSIVE:

-- 3 is our start node in this case
WITH RECURSIVE test(s) AS (
            select to from TreeRelation where from = 3 AND from < to
        UNION
            select to from test, TreeRelation where from = test.s AND from < to
        ) select * from test;
Чему я научился? WITH RECURSIVE всегда есть 1 non-recursive select и 1 recursive select. Рекурсивный выбор может получить доступ к данным из нашей временной таблицы test, которая заполняется нашим нерекурсивным выбором. Рекурсивная функция (2-й выбор) вызывается для каждой записи test, полученной из нерекурсивного выбора (1-го).

Как правильно разделить два массива
Вопросы
POSTGRESQL
Как правильно разделить два массива
У меня есть два массива: foo_array text[], bar_array text[] внутри функции. Каждый из них содержит строки, которые будут разбиты на элементы массива с помощью функции 'string_to_array' и приведены к типу bigint.

Я хочу вернуть эти массивы в таблицу (out1 bigint, out2 bigint).

Например, foo_array и bar_array содержат по 10 элементов, и я ожидаю, что функция вернет 10 строк с этими элементами. Я могу вывести только 20 элементов и не очень понимаю.

CREATE OR REPLACE FUNCTION ___two_unnests()
RETURNS TABLE(out1 bigint, out2 bigint) AS $$
DECLARE
    foo_array text[];
    bar_array text[];

    foo1 text := array_to_string(ARRAY[1, 2, 3, 4, 5], ',');
    foo2 text := array_to_string(ARRAY[11, 22, 33, 44, 55], ',');

    bar1 text := array_to_string(ARRAY[6, 7, 8, 9, 10], ',');
    bar2 text := array_to_string(ARRAY[66, 77, 88, 99, 1010], ',');
BEGIN
    foo_array := (SELECT foo_array || foo1 || foo2);
    bar_array := (SELECT bar_array || bar1 || bar2);

    RAISE NOTICE 'foo_array: %', foo_array;
    RAISE NOTICE 'bar_array: %', bar_array;

    RETURN QUERY 
    SELECT 
      unnest(string_to_array(foo, ',')::bigint[]),
      unnest(string_to_array(bar, ',')::bigint[])
    FROM 
      unnest(foo_array) as foo,
      unnest(bar_array) as bar;
END;
$$ LANGUAGE plpgsql;


SELECT * FROM ___two_unnests();
Фактический результат функции.

out1 |  out2
-----+-----
1    |  6
2    |  7
3    |  8
4    |  9
5    |  10
1    |  11
2    |  22
3    |  33
4    |  44
5    |  55
11   |  6
22   |  7
33   |  8
44   |  9
55   |  10
11   |  11
22   |  22
33   |  33
44   |  44
55   |  55
Вывод, который я хочу:

out1 |  out2
-----+-----
1    |  6
2    |  7
3    |  8
4    |  9
5    |  10
11   |  66
22   |  77
33   |  88
44   |  99
55   |  1010
РЕШЕНИЕ Использование предложения липкий бит

CREATE OR REPLACE FUNCTION ___two_unnests() RETURNS TABLE(out1 bigint, out2 bigint) AS $$
DECLARE
    foo_array text[];
    bar_array text[];

    foo_slice text;
    foo_text text := '';
    foo_firstiter boolean := true;

    bar_slice text;
    bar_text text := '';
    bar_firstiter boolean := true;

    out1_array bigint[];
    out2_array bigint[];

    foo1 text := array_to_string(ARRAY[1, 2, 3, 4, 5], ',');
    foo2 text := array_to_string(ARRAY[11, 22, 33, 44, 55], ',');

    bar1 text := array_to_string(ARRAY[6, 7, 8, 9, 10], ',');
    bar2 text := array_to_string(ARRAY[66, 77, 88, 99, 1010], ',');
BEGIN
    foo_array := (SELECT foo_array || foo1 || foo2);
    bar_array := (SELECT bar_array || bar1 || bar2);

    RAISE NOTICE 'foo_array: %', foo_array;
    RAISE NOTICE 'bar_array: %', bar_array;

    FOREACH foo_slice IN ARRAY foo_array LOOP
        IF foo_firstiter = true THEN
            foo_text := foo_text || foo_slice;
            foo_firstiter := false;
        ELSE
            foo_text := foo_text || ',' || foo_slice;
        END IF;
    END LOOP;

    FOREACH bar_slice IN ARRAY bar_array LOOP
        IF bar_firstiter = true THEN
            bar_text := bar_text || bar_slice;
            bar_firstiter := false;
        ELSE
            bar_text := bar_text || ',' || bar_slice;
        END IF;
    END LOOP;


    out1_array := (SELECT string_to_array(foo_text, ',')::bigint[]);
    out2_array := (SELECT string_to_array(bar_text, ',')::bigint[]);

    RAISE NOTICE 'out1_array: %', out1_array;
    RAISE NOTICE 'out2_array: %', out2_array;


    RETURN QUERY SELECT un1.val::bigint,
            un2.val::bigint
       FROM unnest(out1_array) WITH ORDINALITY un1 (val, ord)
            FULL JOIN unnest(out2_array) WITH ORDINALITY un2 (val, ord)
                      ON un2.ord = un1.ord;

END;
$$ LANGUAGE plpgsql;


SELECT * FROM ___two_unnests();
 29.05.2019 12:33
1
0
1 286
2
Данный вопрос помечен как решенный
 Ответы 2
 Ответ принят как подходящий
Вы можете unnest()WITH ORDINALITY, чтобы каждый элемент получил индекс и выполнил полное объединение результатов.

SELECT un1.val::bigint,
       un2.val::bigint
       FROM unnest(ARRAY[1, 2, 3, 4, 5, 11, 22, 33, 44, 55]) WITH ORDINALITY un1 (val, ord)
            FULL JOIN unnest(ARRAY[6, 7, 8, 9, 10, 66, 77, 88, 99, 1010]) WITH ORDINALITY un2 (val, ord)
                      ON un2.ord = un1.ord;
дб <> рабочий пример

 29.05.2019 12:47
Если у вас современный PostgreSQL, вы можете использовать функцию с несколькими столбцами unnest.

SELECT * FROM unnest(ARRAY[1, 2, 3, 4, 5] || ARRAY[11, 22, 33, 44, 55],
                     ARRAY[6, 7, 8, 9, 10] || ARRAY[66, 77, 88, 99, 1010]);

┌────────┬────────┐
│ unnest │ unnest │
╞════════╪════════╡
│      1 │      6 │
│      2 │      7 │
│      3 │      8 │
│      4 │      9 │
│      5 │     10 │
│     11 │     66 │
│     22 │     77 │
│     33 │     88 │
│     44 │     99 │
│     55 │   1010 │
└────────┴────────┘
Не используйте подзапросы вместо выражений

Это плохо (код менее читабелен и медленнее)

var := (SELECT a || b || c); -- don't do this!
вместо

var := a || b || c;

Как я могу получить строку с минимальным значением из группы и связанные значения из других таблиц?
Вопросы
SQL
Как я могу получить строку с минимальным значением из группы и связанные значения из других таблиц?
Итак, у меня есть три таблицы (Products, Stock и ProductsBatches), и я пытаюсь получить партию, срок действия которой истекает первой (из ProductsBatches) для каждого продукта, и некоторую дополнительную информацию из продуктов (например, название продукта) и запасов (например, общее количество)

Мне удалось получить только самую раннюю дату для каждого продукта, но когда я добавляю некоторые другие столбцы и присоединяюсь, это все портит, и я получаю всевозможные даты.

PRODUCTS  TABLE: 

   | PRODUCT ID (PK)|  NAME  | PRICE |    
   |     1          | CHEESE | 12.0  |

STOCK TABLE :

   | PRODUCT ID (PFK)| TOTAL QUANTITY |
   |     1           |      100       |

PRODUCTS BATCHES TABLE:

   | PRODUCT ID (PFK) | BATCH (PFK) | BATCH QUANTITY | BATCH EXPIRY |    
   |     1            |   XYZ       |       50       |  2019-01-01  |
   |     1            |   XZZ       |       50       |  2020-01-01  |
Пока у меня есть:

| PRODUCT ID | BATCH EXPIRY |
|            |              |
|     1      | 2019-01-01   | 
С SELECT productID,min(batchExpiry) from PRODUCTSBATCHES group by (productID)

Что мне нужно:

|PRODUCT ID| NAME |TOTAL QUANTITY|PRICE|BATCH|BATCH QUANTITY|BATCH EXPIRY|
|     1    |CHEESE|        100   |12.0 | XYZ |  50          | 2019-01-01 |
Я пробовал это, но тоже не хорошо:

SELECT DISTINCT ON (b.productID) b.productID, p.name, s.totalquantity, 
p.price, b.batch, b.batchquantity, b.batchExpiry 
FROM productsbatches as b 
INNER JOIN ( 
  SELECT productID,min(batchExpiry) from PRODUCTSBATCHES group by (productID)
) as exmin b.productID = exmin.productID 
INNER JOIN stock as s ON b.productID = s.productID 
INNER JOIN products as p ON s.productID = p.productID
Спасибо.

 15.06.2019 21:52
0
0
32
2
Данный вопрос помечен как решенный
 Ответы 2
 Ответ принят как подходящий
Вы близки, но забыли соединить столбец batchExpiry с min batchExpiry, полученным с помощью подзапроса:

SELECT 
  p.productID, p.name, s.totalquantity, 
  p.price, b.batch, b.batchquantity, b.batchExpiry
FROM products as p
INNER JOIN stock as s ON p.productID = s.productID 
INNER JOIN productsbatches as b ON p.productID = b.productID 
INNER JOIN ( 
  SELECT productID, min(batchExpiry) as batchExpiry 
  FROM PRODUCTSBATCHES 
  GROUP BY productID
) as exmin ON b.productID = exmin.productID AND b.batchExpiry = exmin.batchExpiry
 15.06.2019 22:04
DISTINCT ON это правильный путь. Вам просто нужно правильно его использовать:

SELECT DISTINCT ON (p.productID) p.productID, p.name, s.totalquantity, 
       p.price, b.batch, pb.batchquantity, pb.batchExpiry
FROM products p INNER JOIN
     stock s
     ON p.productID = s.productID INNER JOIN
     productsbatches pb
     ON pb.productID = p.productID 
ORDER BY p.productID, pb.batchExpiry;
По сути, все, что вам нужно, это ORDER BY. Подзапрос не нужен.

В моей фактической базе данных у меня есть две таблицы productsBatches для двух разных видов продуктов, и я использовал это с объединением с productsBatchesNo2, и, похоже, я не получил первую партию с истечением срока действия. Однако при использовании решения forpas я получаю две строки, если есть две партии одного и того же продукта с одинаковой датой истечения срока годности. Итак, я объединил два ответа, добавил DISTINCT к решению и получил то, что хотел. Спасибо за ответ !

— 
Vlad
 18.06.2019 23:03



Как включить цитату в функцию plpgsql
Вопросы
SQL
Как включить цитату в функцию plpgsql
Следующая функция идентифицирует столбцы с нулевыми значениями. Как я могу расширить предложение where для проверки нулевого или пустого значения?

coalesce(TRIM(string), '') = ''
CREATE OR REPLACE FUNCTION public.is_column_empty(IN table_name varchar, IN column_name varchar)
    RETURNS bool
    LANGUAGE plpgsql
AS $function$
declare 
    count integer;
    BEGIN
execute FORMAT('SELECT COUNT(*) from %s WHERE %s IS NOT NULL', table_name, quote_ident(column_name)) into count;
    RETURN (count = 0);
    END;
$function$
;
 16.09.2022 10:53
1
0
53
2
Данный вопрос помечен как решенный
 Ответы 2
Вам нужно удвоить кавычки, например:

CREATE OR REPLACE FUNCTION public.is_column_empty(IN table_name varchar, IN column_name varchar)
    RETURNS bool
    LANGUAGE plpgsql
AS $function$
declare 
    count integer;
    BEGIN
execute FORMAT('SELECT COUNT(*) from %s WHERE COALESCE(TRIM(%s),'''') <> ''''', table_name, quote_ident(column_name)) into count;
    RETURN (count = 0);
    END;
$function$
;
Обновлено:

Перечитав ваш вопрос, я немного не был уверен, что вы получаете то, что хотите. В нынешнем виде функция возвращает false, если хотя бы одна строка имеет значение в данном столбце, даже если все остальные строки пусты. Это действительно то, что вам нужно, или вы скорее ищете столбцы, где в любой строке этот столбец пуст?

 16.09.2022 11:19
 Ответ принят как подходящий
Есть больше возможностей - например, вы можете использовать собственные разделители строк:

CREATE OR REPLACE FUNCTION public.is_column_empty(IN table_name varchar,
                                                  IN column_name varchar)
  RETURNS bool
LANGUAGE plpgsql
AS $function$
 DECLARE _found boolean; /* attention "count" is keyword */
BEGIN
  EXECUTE format($_$SELECT EXISTS(SELECT * FROM %I WHERE COALESCE(trim(%I), '') <> '')$_$, 
                 table_name, column_name)
    INTO _found;
  RETURN NOT _found;
END;
$function$;
ваш пример имеет больше проблем:

не используйте count там, где вам действительно нужно знать количество строк (элементов). Это может быть довольно медленным на больших столах.
Обычно для ключевых слов используются символы верхнего регистра.
не используйте имена переменных, которые являются ключевыми словами SQL, PL/pgSQL (зарезервированными или незарезервированными), в некоторых контекстах могут возникнуть проблемы (count, user, ...)
это классический пример некоторого хаоса в данных - вы должны запретить пустые строки в данных. Затем вы можете использовать индекс и предикат COLNAME IS NOT NULL. Это может быть довольно быстро.
отсутствует запись FROM-предложения для ошибки таблицы. кажется, подзапрос неполный

— 
kitchenprinzessin
 19.09.2022 03:29
@kitchenprinzessin - теперь должно работать

— 
Pavel Stehule
 19.09.2022 07:10
Функция Btrim не работает должным образом в PostgreSQL - просто нужно привести тип - trim(%I::text), тогда она заработает. благодарить ;)

— 
kitchenprinzessin
 21.09.2022 06:25
@kitchenprinzessin - в другом контексте могут быть довольно большие накладные расходы на бесполезное использование функции обрезки (для нетекстовых типов). Но в этом контексте функция обрезки будет вызываться только один раз, так что это не проблема.

— 
Pavel Stehule
 21.09.2022 07:29



Невозможно выполнить откат, пока активна подтранзакция — ошибка 2D000
Вопросы
SQL
Невозможно выполнить откат, пока активна подтранзакция — ошибка 2D000
Я написал хранимую процедуру, которая в основном перебирает массив fields и выполняет некоторые манипуляции в БД для каждой итерации. Чего я хочу добиться, так это либо всех итераций циклов, либо ни одного из них.

Итак, допустим, в массиве полей было 5 элементов, и цикл повторяется до 3-го элемента, прежде чем заметить, что какое-то условие истинно, и выдать ошибку, я хочу откатить все изменения, которые произошли во время первых 2 итераций. Я использовал операторы ROLLBACK для достижения того же, но каждый раз, когда он достигает оператора ROLLBACK, он выдает следующую ошибку:

Cannot rollback while a subtransaction is active : 2D000

Удивительно, но это работает как обычно, если я закомментирую оператор outobj := json_build_object('code',0); в блоке EXCEPTION WHEN OTHERS THEN или полностью удалю этот блок.

Я проверил Документация PostgreSQL по кодам ошибок, но это не очень помогло. Моя хранимая процедура выглядит следующим образом:


CREATE OR REPLACE PROCEDURE public.usp_add_fields(
    field_data json,
    INOUT outobj json DEFAULT NULL::json)
LANGUAGE 'plpgsql'
AS $BODY$
DECLARE 
v_user_id bigint;
farm_and_bussiness json;
_field_obj json;
_are_wells_inserted boolean;
BEGIN

-- get user id
 v_user_id = ___uf_get_user_id(json_extract_path_text(field_data,'user_email'));

IF(v_user_id IS NULL) THEN
    outobj := json_build_object('code',17);
    RETURN;
END IF;

-- Loop over entities to create farms & businesses
FOR _field_obj IN SELECT * FROM json_array_elements(json_extract_path(field_data,'fields'))
LOOP
    -- check if irrigation unit id is already linked to some other field
    IF(SELECT EXISTS(
        SELECT field_id FROM user_fields WHERE irrig_unit_id LIKE json_extract_path_text(_field_obj,'irrig_unit_id') AND deleted=FALSE
    )) THEN
        outobj := json_build_object('code',26);
        -- Rollback any changes made by previous iterations of loop
        ROLLBACK;
        RETURN;
    END IF;
    
    -- check if this field name already exists
    IF( SELECT EXISTS(
            SELECT uf.field_id FROM user_fields uf
            INNER JOIN user_farms ufa ON (ufa.farm_id=uf.user_farm_id AND ufa.deleted=FALSE)
            INNER JOIN user_businesses ub ON (ub.business_id=ufa.user_business_id AND ub.deleted=FALSE)
            INNER JOIN users u ON (ub.user_id = u.user_id AND u.deleted=FALSE)
            WHERE u.user_id = v_user_id
            AND uf.field_name LIKE json_extract_path_text(_field_obj,'field_name')
            AND uf.deleted=FALSE
        )) THEN 
        outobj := json_build_object('code', 22);
        -- Rollback any changes made by previous iterations of loop
        ROLLBACK;
        RETURN;
    END IF;

    --create/update user business and farm and return farm_id 
    CALL usp_add_user_bussiness_and_farm(
        json_build_object('user_email', json_extract_path_text(field_data,'user_email'),
                          'business_name', json_extract_path_text(_field_obj,'business_name'),
                          'farm_name', json_extract_path_text(_field_obj,'farm_name')
        ), farm_and_bussiness);

    IF(json_extract_path_text(farm_and_bussiness, 'code')::int != 1) THEN
        outobj := farm_and_bussiness;
        -- Rollback any changes made by previous iterations of loop
        ROLLBACK;
        RETURN;
    END IF;

    -- insert into users fields
    INSERT INTO user_fields (user_farm_id, irrig_unit_id, field_name, ground_water_percent, surface_water_percent)
    SELECT json_extract_path_text(farm_and_bussiness,'farm_id')::bigint,
    json_extract_path_text(_field_obj,'irrig_unit_id'),
    json_extract_path_text(_field_obj,'field_name'),
    json_extract_path_text(_field_obj,'groundWaterPercentage'):: int,
    json_extract_path_text(_field_obj,'surfaceWaterPercentage'):: int;

    -- add to user wells
    CALL usp_insert_user_wells(json_extract_path(_field_obj,'well_data'), v_user_id, _are_wells_inserted);
END LOOP;

outobj := json_build_object('code',1);
RETURN;

EXCEPTION WHEN OTHERS THEN 
    raise notice '% : %', SQLERRM, SQLSTATE;
    outobj := json_build_object('code',0);
RETURN;

END;
$BODY$;
 09.05.2022 16:14
1
0
43
2
Данный вопрос помечен как решенный
 Ответы 2
Если у вас есть предложение EXCEPTION в блоке PL/pgSQL, весь этот блок будет выполняться в подтранзакции, которая откатывается при возникновении исключения. Таким образом, вы не можете использовать COMMIT или ROLLBACK в таком блоке.

Если вам действительно нужен этот ROLLBACK, перепишите свой код следующим образом:

DECLARE
   should_rollback boolean := FALSE;
BEGIN
   FOR ... LOOP
      BEGIN  -- inner block for exception handling
         /* do stuff */
         IF (/* condition that should cause a rollback */) THEN
            should_rollback := TRUE;
            EXIT;  -- from LOOP
         END IF;
      EXCEPTION
         WHEN OTHERS THEN
            /* handle the error */
      END;
   END LOOP;

   IF should_rollback THEN
      ROLLBACK;
      /* do whatever else is needed */
   END IF;
END;
Теперь откат не происходит в блоке с обработчиком исключений, и он должен работать так, как вы хотите.

 09.05.2022 17:21
 Ответ принят как подходящий
Объяснение:
Основываясь на подсказке, предоставленной @Laurez Albe, я придумал более чистый способ решить вышеуказанную проблему.

По сути, я поднял custom exception всякий раз, когда условие true. Поэтому, когда возникает исключение, все изменения, сделанные block X, корректно откатываются. Я даже могу выполнить очистку в последнюю минуту в условных блоках исключений.

Реализация:
CREATE OR REPLACE procedure mProcedure(INOUT resp json DEFAULT NULL::JSON)
LANGUAGE 'plpgsql'
AS $BODY$
DECLARE
field_data json := '{ "fields": [1,2,3,4,5] }';
_field_id int;
BEGIN

-- Start of block X
FOR _field_id IN SELECT * FROM json_array_elements(json_extract_path(field_data,'fields'))
LOOP
    INSERT INTO demo VALUES(_field_id);
    
    IF(_field_id = 3) THEN
      RAISE EXCEPTION USING ERRCODE='22013';
    END IF;
   
    IF(_field_id = 5) THEN
      RAISE EXCEPTION USING ERRCODE='22014';
    END IF;
END LOOP;

SELECT json_agg(row_to_json(d)) INTO resp FROM demo d;
RETURN;
-- end of block X


-- if an exception occurs in block X, then all the changes made within the block are rollback
-- and the control is passed on to the EXCEPTION WHEN OTHERS block.  
EXCEPTION 
WHEN sqlstate '22013' THEN
resp := json_build_object('code',26);

WHEN sqlstate '22014' THEN
resp := json_build_object('code',22);

END;
$BODY$;
Демо:
Дбфиддл


Установка типа данных возвращаемой таблицы того же типа, что и для другой таблицы
Вопросы
POSTGRESQL
Установка типа данных возвращаемой таблицы того же типа, что и для другой таблицы
У меня есть табличная функция postgres, которая в настоящее время объявлена ​​​​как таковая:

CREATE OR REPLACE FUNCTION apolloqa.my_func(arguments...) 
 RETURNS TABLE(first_name text, last_name text, age int)   
LANGUAGE plpgsql AS $function$
 BEGIN     
RETURN QUERY         
    select first_name, last_name, age         
    from person_table         ;
END 
$function$ ; 
Когда я запускаю этот код, postgres жалуется, что first_name и last_name в возвращаемой таблице не соответствуют возвращаемому типу запроса. Это правда. Но как объявить first_name и last_name так, чтобы они соответствовали типу возвращаемого запроса или типу столбца базовой таблицы person_table без повторения одного и того же типа? Есть ли способ сказать что-то вроде:

RETURNS TABLE(first_name TYPE is person_table.first_name, ... ) ?

В Postgres есть функция «нравится», но она выбирает все столбцы из данной таблицы. Я хочу выбрать всего несколько из одной таблицы и несколько из другой. Моими решениями в прошлом было жесткое кодирование типа данных из базовой таблицы, поэтому varchar (150) или что-то в этом роде. Но я бы хотел, чтобы тип ссылался на другой тип, если это возможно.

 28.03.2022 21:03
0
1
26
2
Данный вопрос помечен как решенный
 Ответы 2
Вы можете использовать Тип копирования

By using %TYPE you don't need to know the data type of the structure you are referencing, and most importantly, if the data type of the referenced item changes in the future (for instance: you change the type of user_id from integer to real), you might not need to change your function definition.

https://www.postgresql.org/docs/current/plpgsql-declarations.html#PLPGSQL-DECLARATION-TYPE

ваше имя параметра INPUT и OUTPUT функции совпадает с именем столбца тела запроса. Это может привести к некоторым ошибкам в будущем. См. Скрипка БД: последний блок кода

CREATE OR REPLACE FUNCTION apolloqa.my_func(p_age person_table.age%type)
 RETURNS TABLE(_first_name person_table.first_name%type,
                _last_name person_table.last_name%type,
                 _age  person_table.age%type)
LANGUAGE plpgsql AS $function$
BEGIN
RETURN QUERY 
    select first_name, last_name, age from person_table where age = p_age;
END
$function$;
 29.03.2022 08:03
 Ответ принят как подходящий
Да, вы можете сделать почти то, что вы указали, просто синтаксис немного другой. Использовать

 returns table(first_name  person_table.first_name%type 
              ,last_name   person_table.last_name%type
              ,age int
              );
Поскольку ваша функция имеет только SQL, вы также можете определить ее как функцию SQL:

create or replace function  my_func(arguments text) 
 returns table(first_name  person_table.first_name%type 
              ,last_name   person_table.last_name%type
              ,age int
              )
language  sql as $function$          
    select first_name, last_name, age         
    from person_table ;
$function$ ; 


В plpgsql вернуть набор составного типа без приведения?
Вопросы
POSTGRESQL
В plpgsql вернуть набор составного типа без приведения?
Это работает, но мне нужны слепки (::name_value_pair). Мне это кажется немного некрасивым. Есть ли способ сделать это без слепков?

create type name_value_pair as (name text, value text);

create or replace function test1()
   returns setof name_value_pair
as $$
begin
    return next ROW('email', 'foo@example.com')::name_value_pair;
    return next ROW('user_id', 'abc123')::name_value_pair;
    return;
end;
$$ language plpgsql;
Вот ошибка без приведения. Как он не знает, что это text? Я думал, что строковый литерал в одинарных кавычках — это text, если только вы не приведете его к чему-то другому.

psql: ERROR:  returned record type does not match expected record type
DETAIL:  Returned type unknown does not match expected type text in column 1.
CONTEXT:  PL/pgSQL function test1() line 4 at RETURN NEXT
Выбор:

=> select * from test1();
  name   |      value      
---------+-----------------
 email   | foo@example.com
 user_id | abc123
Я использую бета-версию PostgreSQL 12.

 17.06.2019 17:54
2
2
925
2
Данный вопрос помечен как решенный
 Ответы 2
Проблема здесь в том, что строковые константы типа 'email' относятся к типу unknown, а не к типу text.

Вы можете переписать свой пример следующим образом:

create type name_value_pair as (name text, value text);

create or replace function test1()
   returns setof name_value_pair
as $$
begin
    return next ROW('email'::text, 'foo@example.com'::text);
    return next ROW('user_id'::text, 'abc123'::text);
    return;
end;
$$ language plpgsql;
 17.06.2019 18:13
 Ответ принят как подходящий
Проблема в вашей функции заключается в том, что конструктор ROW «наносит удар первым», создавая составной тип из двух значений неизвестный, для которых не существует неявного преобразования типов.

Вот 5 способов без использования явного приведения:

1. По-прежнему используется предопределенный составной тип/тип строки с явным, подробным синтаксисом (в основном в образовательных целях). Подзапрос делает неизвестные типы по умолчанию равными textдо, они объединены в тип ROW:

CREATE OR REPLACE FUNCTION test1()
  RETURNS SETOF name_value_pair AS
$func$
BEGIN
   RETURN NEXT (SELECT t FROM (SELECT 'email', 'foo@example.com') t);
   RETURN NEXT (SELECT t FROM (SELECT 'user_id', 'abc123') t);
END
$func$  LANGUAGE plpgsql IMMUTABLE;

SELECT * FROM test1();
2. Вместо этого используйте RETURNS TABLE и RETURN QUERY. Для начала не нужно формировать составные типы, пусть функция сама сделает этот последний шаг:

CREATE OR REPLACE FUNCTION test2()
  RETURNS TABLE (name text, value text) AS
$func$
BEGIN
   RETURN QUERY SELECT 'email', 'foo@example.com';
   RETURN QUERY SELECT 'user_id', 'abc123';
END
$func$  LANGUAGE plpgsql IMMUTABLE;

SELECT * FROM test2();
3. Или по-прежнему используйте составной тип для определения возвращаемого типа. Возможно, вам больше подойдет:

CREATE OR REPLACE FUNCTION test3()
  RETURNS SETOF name_value_pair AS
$func$
BEGIN
   RETURN QUERY SELECT 'email', 'foo@example.com';
   RETURN QUERY SELECT 'user_id', 'abc123';
END
$func$  LANGUAGE plpgsql IMMUTABLE;

SELECT * FROM test3();
4. Хотя это так просто, простой VALUES выражение в простой функции SQL короче и быстрее:

CREATE OR REPLACE FUNCTION test4()
  RETURNS SETOF name_value_pair AS
$func$
VALUES
  ('email', 'foo@example.com')
, ('user_id', 'abc123');
$func$  LANGUAGE sql IMMUTABLE;

SELECT * FROM test4();
5. Или, если имеет будет PL/pgSQL:

CREATE OR REPLACE FUNCTION test5()
  RETURNS SETOF name_value_pair AS
$func$
BEGIN
RETURN QUERY VALUES
  ('email', 'foo@example.com')
, ('user_id', 'abc123');
END
$func$  LANGUAGE plpgsql IMMUTABLE;

SELECT * FROM test5();
дб <> рабочий пример здесь

Неявное преобразование из unknown в text для скалярных возвращаемых значений функции было добавлено в Постгрес 10. Postgres 9.6 или более ранние версии более строгие и будут вызывать аналогичную ошибку для альтернатив 1–3. (Только функции 4 и 5. работают в любой версии Postgres.)

ERROR: structure of query does not match function result type
DETAIL: Returned type unknown does not match expected type text in column 1.
Можно спорить, было ли все еще строгое поведение для типа ROW недосмотром в этом обновлении или по замыслу. Дело может быть сделано для любого, я думаю.

Связанный:

Как вернуть результат SELECT внутри функции в PostgreSQL?
Я знаю, что есть способ добавить неявные «приведения» к PG. Есть ли способ добавить такое приведение от row(unk, unk) к row(text, text) и/или к типу name_value_pair? Я не вижу способа сослаться на row(unk,unk) в таблице pg_cast. Похоже, что приведение типов работает только для типов названный.

— 
Rob N
 24.06.2019 14:28
@RobN: Как вы узнали, добавление в pg_cast невозможно. unknown является псевдотип и не допускается в CREATE TYPE. Таким образом, вы не можете зарегистрировать составной тип с вложенными полями unknown, а значит, и на его основе не приводить типы. Я добавил еще три альтернативы выше. Я думаю, что это лучше, все же.

— 
Erwin Brandstetter
 25.06.2019 02:44



PLPGSQL, как использовать параметры функции?
Вопросы
POSTGRESQL
PLPGSQL, как использовать параметры функции?
РАБОЧИЙ КОД В КОНЦЕ

Я пытаюсь ладить с plpgsql, но мне тяжело. Я пытаюсь создать в базе данных функцию, которая будет вызываться моим сервером для расширения или создания моего ландшафта. Я не могу заставить его скомпилироваться, что бы я ни пытался, он блокируется при первом использовании одного из двух параметров, которые имеет функция.

Я пробовал несколько способов объявления параметров (обращаясь к ним как ALIAS FOR $1 или объявляя их с именем, как показано в следующем коде). Я также пытался изменить тип параметра на INTEGER или NUMERIC.

CREATE FUNCTION public.generate_terrain (
  inner NUMERIC,
  outer NUMERIC
)
RETURNS void AS
$body$
DECLARE
q NUMERIC;
r NUMERIC;
BEGIN
q := -outer;
r := -outer;
WHILE q < outer DO
    WHILE r < outer DO
        IF(r > -inner AND r < inner AND q > -inner AND q > inner) THEN
            r := inner;
        END IF;;
        --insert into public.t_cell (coo_q, coo_r) values (q,r);
        RAISE NOTICE 'Cell %,%', q,r;
        r := r + 1;
    END WHILE;
    q := q + 1;
END WHILE;
END;
$body$
LANGUAGE 'plpgsql'
VOLATILE
CALLED ON NULL INPUT
SECURITY INVOKER
PARALLEL UNSAFE;
Я получаю это сообщение об ошибке, когда пытаюсь его скомпилировать:

ERROR:  syntax error at end of input
LINE 8: q := -outer;
                   ^
Я не могу заставить своего клиента выполнять цикл, а затем помещать результаты в базу данных, которая будет генерировать большой трафик. Я хочу, чтобы моя база данных делала это самостоятельно, поэтому мне нужно иметь возможность скомпилировать это. Пожалуйста помоги !

РЕДАКТИРОВАТЬ 1
Я забыл объяснить, что я хотел, чтобы эта функция делала: мне нужна функция, которая заполняет мою базу данных согласованными «ячейками» карты декартовой сетки (ось q = x, ось r = y, потому что на самом деле это шестиугольная карта). Эта функция должна иметь возможность вызываться для расширения их карты, поэтому, если мой первоначальный вызов generate_terrain(0,2), он должен создать следующую местность:

#####
#####
##0##
#####
#####
(0 — центр сетки (0,0)) где координаты варьируются от (-2,-2) в левом нижнем углу до (2,2) в правом верхнем углу. Позже, когда мне нужно расширить карту, я должен иметь возможность вызывать generate_terrain(3,4) для создания следующих ячеек моего ландшафта:

#########
#########
##     ##
##     ##
##  0  ##
##     ##
##     ##
#########
#########
(0 — центр сетки (0,0)) Где координаты варьируются от (-4,-4) в нижнем левом углу до (4,4) в верхнем правом углу, но внутренний «квадрат» уже присутствует в базе данных

Функция, которую я использовал, и которая, кажется, работает, выглядит следующим образом:

CREATE OR REPLACE FUNCTION public.generate_terrain (
  _inner integer,
  _outer integer
)
RETURNS integer AS
$body$
DECLARE
q integer = 0;
r integer = 0;
BEGIN
q := q - _outer;
r := r - _outer;

WHILE q <= _outer 
LOOP
    WHILE r <= _outer 
    LOOP
        -- This condition is to skip the inner square that is already
        -- present in the database.
        IF r > -_inner 
        AND r < _inner 
        AND q > -_inner 
        AND q < _inner THEN
            r := _inner;
        END IF;
        --insert into public.t_cell (coo_q, coo_r) values (q, r);
        RAISE NOTICE 'Cell %,%', q,r;
        r := r + 1;
    END LOOP;
    q := q + 1;
    r := - _outer;
END LOOP;
RETURN 1;
END;
$body$
LANGUAGE 'plpgsql'
 09.07.2019 16:17
0
2
52
2
Данный вопрос помечен как решенный
 Ответы 2
 Ответ принят как подходящий
Помимо использования зарезервированных слов, таких как a_horse, у вас есть несколько синтаксических нарушений. Это будет работать:

CREATE OR REPLACE FUNCTION public.generate_terrain (_inner NUMERIC, _outer NUMERIC)
  RETURNS void AS
$func$
DECLARE
   q NUMERIC := -_outer;
   r NUMERIC := -_outer;
BEGIN
WHILE q < _outer
LOOP                           -- !
    WHILE r < _outer
    LOOP                       -- !
        IF r > -_inner
       AND r <  _inner
       AND q > -_inner 
       AND q >  _inner THEN    -- ??
            r := _inner;
        END IF;                -- !
        --insert into public.t_cell (coo_q, coo_r) values (q,r);
        RAISE NOTICE 'Cell %,%', q,r;
        r := r + 1;
    END LOOP;                  -- !
    q := q + 1;
END LOOP;                      -- !
END
$func$  LANGUAGE plpgsql;
Но это кажется излишне искривленным. _inner вообще никогда не используется. Вы случайно не хотели написать q < _inner? (Все равно странно.)

В противном случае вы можете просто использовать это вместо этого:

CREATE OR REPLACE FUNCTION public.generate_terrain_simple (_outer int)
  RETURNS void AS
$func$
INSERT INTO public.t_cell (coo_q, coo_r)
SELECT -_outer, g FROM generate_series (-_outer, _outer -1) g
$func  LANGUAGE sql;
 09.07.2019 16:57
Незначительная оптимизация для Erwin Last Query.

create or replace function
    public.generate_terrain_simple_1(_outer int)
returns void as $$
    declare _x int; _y int;
    begin
    <<test>>
    for _x, _y in
    select -_outer, g from generate_series(-_outer,_outer - 1) g
    loop
    raise info 'test % %', _x,_y;
    end loop test;
    end
    $$ language plpgsql;

select * from generate_terrain_simple_1(4);
_x будет таким же, как -4, _y будет от -4 до 3


Функция postgres, которая возвращает случайное перечисление
Вопросы
POSTGRESQL
Функция postgres, которая возвращает случайное перечисление
Я хочу написать функцию random_enum(enum_name), которая возвращает случайное значение перечисления

остановился на этом варианте

create type  myenum
as enum (
   'one',
   'two',
   'three',
   'four'
);


create or replace function random_enum(relation_name anyelement) returns anyenum as $$
begin
  return execute format(
    $sql$
      select unnest(enum_range(NULL::%1$I)) ORDER BY random() LIMIT 1;
    $sql$,
    pg_typeof(relation_name)
  );
end;
$$ language plpgsql;

select random_enum(null::myenum)
вы можете попробовать это здесь

но не работает из-за

ERROR:  syntax error at or near "("
LINE 12:   return execute format(
 15.07.2019 18:43
2
0
417
2
Данный вопрос помечен как решенный
 Ответы 2
 Ответ принят как подходящий
Используйте параметр out следующим образом:

create or replace function random_enum(relation_name anyelement, out result anyenum) 
as $$
begin
  execute format(
    $sql$
      select elem 
      from unnest(enum_range(null::%1$I)) as elem
      order by random() 
      limit 1;
    $sql$,
    pg_typeof(relation_name)
  ) into result;
end;
$$ language plpgsql;
дб <> рабочий пример.

 15.07.2019 19:02
Альтернатива без параметра OUT и определяется как функция SQL.

create or replace function random_enum(
                  relation_name_in  text
                ) 
          returns text 
         language sql strict
as $$
    select e.enumlabel::text
      from pg_type t 
      join pg_enum e on t.oid = e.enumtypid  
      join pg_catalog.pg_namespace n on n.oid = t.typnamespace
     where t.typname = lower(relation_name_in)
     order by random()
     limit 1;
$$ ;

-- test 
select soq.random_enum('myenum');



Выбрать несколько переменных в PostgreSQL
Вопросы
POSTGRESQL
Выбрать несколько переменных в PostgreSQL
У меня проблема с назначением нескольких переменных одновременно. Запуск кода ниже

select v1, v2 into x, y from (values (1,2)) as t (v1, v2);
выдает ошибку:

ERROR:  syntax error at or near ","
LINE 1: select v1, v2 into x, y from (values (1,2)) as t (v1, v2);
Ссылка на dbfiddle:

https://dbfiddle.uk/?rdbms=postgres_11&fiddle=98285b190de7871354ccb444d17eb25f

Кто-нибудь сможет помочь?

Спасибо.

 24.07.2019 15:27
2
0
3 928
2
Данный вопрос помечен как решенный
 Ответы 2
Используйте псевдонимы отдельно рядом с каждым выходом следующим образом:

select v1 as x, v2 as y from (values (1,2)) as t(v1,v2);

 24.07.2019 15:35
 Ответ принят как подходящий
Переменные SQL в Postgres не поддерживаются. Вы можете использовать этот тип назначения в язык PL/pgSQL, в функции или блок анонимного кода, например:

do $$
declare 
    x int; 
    y int;
begin
    select v1, v2 into x, y 
    from (values (1,2)) as t (v1, v2);
end $$;
дб <> рабочий пример.


Обработка пустого значения '' в числовой переменной функции
Вопросы
POSTGRESQL
Обработка пустого значения '' в числовой переменной функции
Я пытаюсь обработать пустые значения '' в переменной FUNCTION. Каким должен быть правильный способ ничего не возвращать при вызове функции с пустым значением, как показано ниже

SELECT *
FROM metadata.fn_get_id('mea', 'sau', '');




DROP FUNCTION IF EXISTS metadata.fn_get_id(VARCHAR, VARCHAR, NUMERIC);

CREATE OR REPLACE FUNCTION metadata.fn_get_id(a1 CHARACTER VARYING, b2 CHARACTER VARYING,
                                                            c3 NUMERIC DEFAULT 0
) RETURNS INT
    LANGUAGE plpgsql
AS
$$
DECLARE
    linked_id INT;
BEGIN
    EXECUTE
            'SELECT linked_id::INT FROM ' || $1 || '_region
                WHERE 1=1 AND iso=upper(' || QUOTE_LITERAL($2) || ') AND id = '|| $3 ||' limit 1;'
        INTO linked_id;
    RETURN linked_id;

END


$$;

-- TEST LINK_ID 1213506417 (PASS)
SELECT *
FROM metadata.fn_get_id('mea', 'sau', 414803422);

-- TEST Null (PASS)
SELECT *
FROM metadata.fn_get_id('mea', 'sau');

-- TEST empty (FAILS ... HOW to Handle)
SELECT *
FROM metadata.fn_get_id('mea', 'sau', '');
 23.03.2022 14:14
1
1
21
2
Данный вопрос помечен как решенный
 Ответы 2
 Ответ принят как подходящий
Сделайте c3 тип аргумента функции text default null и первым делом проверьте наличие пустой строки в теле функции.

create or replace function metadata.fn_get_id(a1 text, b2 text, c3 text default null)
RETURNS integer language plpgsql as
$$
declare 
 -- your declarations
begin
    if nullif (c3, '') is null then
        return null;
    end if;
 -- your function body
$$;
Вызов:

SELECT *
FROM metadata.fn_get_id('mea', 'sau', 414803422::text);
Кстати, функция в примере подвержена инъекциям.

 23.03.2022 14:28
Просто вызовите функцию следующим образом:

metadata.fn_get_id('mea', 'sau', nullif ('', ''))
Так что пустая строка заменяется на NULL.


Передать List<String> в функцию postgres в качестве параметра
Вопросы
JAVA
Передать List<String> в функцию postgres в качестве параметра
У меня есть интерфейс репозитория данных spring, например:

public interface MyEntityRepository extends 
        JpaRepository<MyEntity, Long> {

    @Query(nativeQuery = true, value = "select * from my_func(:myList)")
    Page<MyEntity> findBy(
            @NonNull @Param("myList") List<String> myList,
            @NonNull Pageable pageable);

}
Функция Postgres, которую я определил так (но я могу изменить ее, если я сделал это неправильно):

CREATE OR REPLACE FUNCTION my_func(variadic myList text[])
RETURNS SETOF myEntityTable AS $$
... some logic
select * from myEntityTable t where t.foo in (myList);
Когда я вызываю этот метод репозитория, я получаю эту ошибку:

ERROR: operator does not exist: character varying = text[]
Hint: No operator matches the given name and argument type(s). You might need to add explicit type casts.
Where: PL/pgSQL function f_najdi_autorizaciu_na_spracovanie(text[]) line 28 at RETURN QUERY
Не могли бы вы сказать мне, какой тип я должен использовать в своей функции postgres? Спасибо за совет.

Обновлено: Я не могу использовать собственный запрос выше метода репозитория и передать его список в предложение IN, потому что у меня в функции БД больше логики, переменных и т. д. ... это должна быть функция БД.

 14.03.2019 19:35
3
11
7 753
3
Данный вопрос помечен как решенный
 Ответы 3
Боюсь, я не знаю, как это сделать с помощью Spring Data JPA, но с простым JDBC вам нужно просто привести переменную связывания к text[] и передать тип String[] вместо списка. Например:

try (PreparedStatement s = conn.prepareStatement("select * from my_func(?::text[])")) {
    s.setObject(1, myList.toArray(new String[0]));

    try (ResultSet rs = s.executeQuery()) {
        // ...
    }
}
Ключевым сообщением здесь является то, что драйвер JDBC будет ожидать массив, а не список.

 14.03.2019 21:39
 Ответ принят как подходящий
Я использовал следующее обходное решение в аналогичной ситуации:

1) Создал две вспомогательные функции:

-- Convert a variable number of text arguments to text array
-- Used to convert Java collection to the text array
--
create or replace function list_to_array(variadic _list text[]) returns text[] language sql as $$
select _list;
$$;
-- Convert the bytea argument to null.
-- Used to convert Java null to PostgreSQL null
--
create or replace function list_to_array(_list bytea) returns text[] language sql as $$
select null::text[];
$$;
2) Используется any вместо in в основной функции, например:

create or replace function my_func(_params text[]) 
returns table (field1 text, field2 text) 
language sql as 
$$
select
  t.field1 as field1,
  t.field2 as field2,
from
  my_table t
where
  array_length(_params, 1) is null or t.foo = any(_params);
$$;
3) Затем использовал их в методе репозитория, например:

@NonNull
@Query(value = "select ... from my_func(list_to_array(?1))", nativeQuery = true)
List<MyProjection> getFromMyFunc(@Nullable Set<String> params, @NonNull Pageable page);
 15.03.2019 10:38
Не уверен, что это добавляет большую ценность, я просто надеюсь, что это поможет.

Окончательный формат, который функция PostgreSQL ожидает от списка в качестве входных данных, имеет следующий шаблон с использованием массива:

select my_func(array['item1','item2']::my_type[]);
См. полный пример на Администраторы баз данных.SE.

В твоем случае:

select my_func(array['item1','item2']::text[]);
и я обнаружил в своих собственных тестах, что

select my_func(array['item1','item2']);
уже должно хватить.

Тогда единственная цель — получить этот формат из исходного типа Java. На этот вопрос ответил другой вопрос. Этот ответ просто показывает цель всего этого.

Вернуть вывод INSERT из функции
Вопросы
SQL
Вернуть вывод INSERT из функции
Когда выполняется INSERTего вывод является тегом команды, например. INSERT 0 1.

Я хотел бы захватить тот же тег команды внутри функции и вернуть его.

Я думал, что предложение RETURNING поможет мне, тем не менее, оно работает аналогично запросу SELECT над вставленными строками, возвращая табличное множество. Мне этого не надо. Я хочу вернуть простой тег команды (то есть текст «INSERT 0 1»), который вы получаете при выполнении INSERT.

Вот пример псевдокода того, чего я хочу достичь (конечно, RETURN QUERY не работает в этом случае, так как INSERT является функцией, отличной от SETOF

CREATE FUNCTION insert_user_test (
    p_username text)
    RETURNS text
    LANGUAGE plpgsql
    AS $$
BEGIN
    RETURN QUERY INSERT INTO users(username) values(p_username));
END $$;
Как мне достичь того, что мне нужно?

 05.06.2019 22:42
0
1
680
3
Данный вопрос помечен как решенный
 Ответы 3
Используйте CTE с INSERT:

WITH i as (
      INSERT INTO users (username)
          VALUES (p_username)
      RETURNING *
     )
SELECT i.*
FROM i;
 05.06.2019 22:44
 Ответ принят как подходящий
Вы не можете захватить сообщение INSERT 0 1 буквально, потому что оно не возвращается оператором INSERT, а генерируется инструментом командной строки psql на основе положение дел оператора INSERT.

Поэтому, если вы хотите увидеть это сообщение, вам нужно сгенерировать его самостоятельно в функции (PL/pgSQL для этого не нужен):

CREATE FUNCTION insert_user_test (p_username text)
    RETURNS text
    LANGUAGE SQL
  AS $$
    with inserted as (
      INSERT INTO users(username) values(p_username))
      returning *
    )
    select concat('INSERT 0 ', count(*))
    from inserted;
  $$;
Если вы не хотели видеть сообщение INSERT 0 1, вы можете просто вернуть имя пользователя:

CREATE FUNCTION insert_user_test (p_username text)
    RETURNS text
    LANGUAGE SQL
  AS $$
      INSERT INTO users(username) values(p_username))
      returning username;
  $$;
Или полная строка, включая вставленные значения по умолчанию:

CREATE FUNCTION insert_user_test (p_username text)
    RETURNS setof users
    LANGUAGE SQL
  AS $$
      INSERT INTO users(username) values(p_username))
      returning *;
  $$;
 06.06.2019 03:34
Тег команды «INSERT 0 1» недоступен напрямую для среды plpgsql. Вы можете получить ту же информацию в другом формате с помощью команды GET DIAGNOSTICS.

DO $$
  DECLARE _oid oid; _rc bigint;
BEGIN
  INSERT INTO foo VALUES(10);
  GET DIAGNOSTICS _oid = RESULT_OID; -- it is not supported on 12+
  GET DIAGNOSTICS _rc = ROW_COUNT;
  RAISE NOTICE 'INSERT % %', _oid, _rc;
END;
$$;
Если вам нужно больше, то вы должны использовать другой язык, чем PLpgSQL - особый вариант - это язык C, где доступна вся информация.


Невозможно подготовить оператор Postgres в Java (java.sql.PreparedStatement)
Вопросы
JAVA
Невозможно подготовить оператор Postgres в Java (java.sql.PreparedStatement)
Рассмотрим два оператора, которые я могу отправить на свой сервер из Java.

Простой SQL: это обычно оператор вставки.
insert into table_things (thing_1_value, thing_2_value) values(?, ?);
плпгскл: Я хочу избежать обращения к базе данных, выполнив вход в базу данных. Нам не разрешено использовать хранимые процедуры или функции в базе данных (причины кажутся уважительными).
do $$
declare
    my_thing1 varchar(100) = ?;
    my_thing2 varchar(100) = ?;
begin
    insert into table_things
    (
          thing_1_value
        , thing_2_value
    )
    values
    (
          my_thing1
        , my_thing2
    )
    ;
end
$$;
Код, который выполняет эти операторы, представлен ниже в тестовых примерах Java8:

package com.somecompany.someservice.test.database;

import org.apache.commons.dbcp2.BasicDataSource;
import org.junit.Assert;
import org.junit.Test;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Types;

public class PreparedStatementDatabaseTest {
    private static final String CONNECTION_URI = "jdbc:postgresql://localhost:5432/somedb?user=someuser&password=somepass";

    private static final String PLPGSQL_STATEMENT = "" +
            "do $$\n" +
            "declare\n" +
            "    my_thing1 varchar(100) = ?;\n" +
            "    my_thing2 varchar(100) = ?;\n" +
            "begin\n" +
            "    insert into table_things\n" +
            "    (\n" +
            "          thing_1_value\n" +
            "        , thing_2_value\n" +
            "    )\n" +
            "    values\n" +
            "    (\n" +
            "          my_thing1\n" +
            "        , my_thing2\n" +
            "    )\n" +
            "    ;\n" +
            "end\n" +
            "$$;";

    private static final String EASY_SQL_STATEMENT = "insert into table_things (thing_1_value, thing_2_value) values(?, ?);";

    @Test
    public void testPlpgsqlStatement() throws Exception {
        Class.forName("org.postgresql.Driver");
        BasicDataSource basicDataSource = new BasicDataSource();
        basicDataSource.setUrl(CONNECTION_URI);
        Connection conn = basicDataSource.getConnection();
        PreparedStatement statement = conn.prepareStatement(PLPGSQL_STATEMENT, ResultSet.TYPE_SCROLL_INSENSITIVE, ResultSet.CONCUR_UPDATABLE);
        statement.setObject(1, "hello", Types.VARCHAR);
        statement.setObject(2, "world", Types.VARCHAR);
        boolean isResultSet = statement.execute();
        conn.close();
        Assert.assertFalse(isResultSet);
    }

    @Test
    public void testEasySqlStatement() throws Exception {
        Class.forName("org.postgresql.Driver");
        BasicDataSource basicDataSource = new BasicDataSource();
        basicDataSource.setUrl(CONNECTION_URI);
        Connection conn = basicDataSource.getConnection();
        PreparedStatement statement = conn.prepareStatement(EASY_SQL_STATEMENT, ResultSet.TYPE_SCROLL_INSENSITIVE, ResultSet.CONCUR_UPDATABLE);
        statement.setObject(1, "hello", Types.VARCHAR);
        statement.setObject(2, "world", Types.VARCHAR);
        boolean isResultSet = statement.execute();
        conn.close();
        Assert.assertFalse(isResultSet);
    }
}
testEasySqlStatement работает, но testPlpgsqlStatement выдает исключение:

org.postgresql.util.PSQLException: The column index is out of range: 1, number of columns: 0.

    at org.postgresql.core.v3.SimpleParameterList.bind(SimpleParameterList.java:65)
    at org.postgresql.core.v3.SimpleParameterList.setStringParameter(SimpleParameterList.java:128)
    at org.postgresql.jdbc.PgPreparedStatement.bindString(PgPreparedStatement.java:996)
    at org.postgresql.jdbc.PgPreparedStatement.setString(PgPreparedStatement.java:326)
    at org.postgresql.jdbc.PgPreparedStatement.setObject(PgPreparedStatement.java:528)
    at org.postgresql.jdbc.PgPreparedStatement.setObject(PgPreparedStatement.java:881)
    at org.apache.commons.dbcp2.DelegatingPreparedStatement.setObject(DelegatingPreparedStatement.java:185)
    at org.apache.commons.dbcp2.DelegatingPreparedStatement.setObject(DelegatingPreparedStatement.java:185)
    at com.somecompany.someservicetest.database.PreparedStatementDatabaseTest.testPlpgsqlStatement(PreparedStatementDatabaseTest.java:44)
    at sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)
    at sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)
    at sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)
    at java.lang.reflect.Method.invoke(Method.java:498)
    at org.junit.runners.model.FrameworkMethod$1.runReflectiveCall(FrameworkMethod.java:50)
    at org.junit.internal.runners.model.ReflectiveCallable.run(ReflectiveCallable.java:12)
    at org.junit.runners.model.FrameworkMethod.invokeExplosively(FrameworkMethod.java:47)
    at org.junit.internal.runners.statements.InvokeMethod.evaluate(InvokeMethod.java:17)
    at org.junit.runners.ParentRunner.runLeaf(ParentRunner.java:325)
    at org.junit.runners.BlockJUnit4ClassRunner.runChild(BlockJUnit4ClassRunner.java:78)
    at org.junit.runners.BlockJUnit4ClassRunner.runChild(BlockJUnit4ClassRunner.java:57)
    at org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)
    at org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)
    at org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)
    at org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)
    at org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)
    at org.junit.runners.ParentRunner.run(ParentRunner.java:363)
    at org.junit.runner.JUnitCore.run(JUnitCore.java:137)
    at com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)
    at com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:47)
    at com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:242)
    at com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)

Вопрос: как я могу отправить код типа PLPGSQL_STATEMENT в базу данных Postgres?

Я мог бы сделать это, но это плохая практика из-за риска SQL-инъекции:

    @Test
    public void testSqlInjectionRisk() throws Exception {
        String hello = "hello-testSqlInjectionRisk";
        String world = "world-testSqlInjectionRisk";

        String PLPGSQL_STATEMENT = "" +
                "do $$\n" +
                "declare\n" +
                "    my_thing1 varchar(100) = '" + hello + "';\n" +
                "    my_thing2 varchar(100) = '" + world + "';\n" +
                "begin\n" +
                "    insert into table_things\n" +
                "    (\n" +
                "          thing_1_value\n" +
                "        , thing_2_value\n" +
                "    )\n" +
                "    values\n" +
                "    (\n" +
                "          my_thing1\n" +
                "        , my_thing2\n" +
                "    )\n" +
                "    ;\n" +
                "end\n" +
                "$$;";

        Class.forName("org.postgresql.Driver");
        BasicDataSource basicDataSource = new BasicDataSource();
        basicDataSource.setUrl(CONNECTION_URI);
        Connection conn = basicDataSource.getConnection();
        PreparedStatement statement = conn.prepareStatement(PLPGSQL_STATEMENT, ResultSet.TYPE_SCROLL_INSENSITIVE, ResultSet.CONCUR_UPDATABLE);
        boolean isResultSet = statement.execute();
        conn.close();
        Assert.assertFalse(isResultSet);
Вопрос изменен: Что-то не так с тем, как я пытаюсь подготовиться PLPGSQL_STATEMENT? PLPGSQL_STATEMENT можно приготовить?

Обновлять: @Izruo указал, что я должен использовать prepareCall, и это, кажется, часть ответа. Но, к сожалению, следующий код не работает с тем же исключением:

    @Test
    public void testEasySqlStatement2() throws Exception {
        final String SQL_STATEMENT = "" +
                "do $$\n" +
                "declare\n" +
                "    x varchar(100) = ?;\n" +
                "    y varchar(100) = ?;\n" +
                "begin\n" +
                "    insert into table_things\n" +
                "    (\n" +
                "          my_thing1\n" +
                "        , my_thing2\n" +
                "    )\n" +
                "    values\n" +
                "    (\n" +
                "          x\n" +
                "        , y\n" +
                "    )\n" +
                "    ;\n" +
                "end\n" +
                "$$;";

        Class.forName("org.postgresql.Driver");
        BasicDataSource basicDataSource = new BasicDataSource();
        basicDataSource.setUrl(CONNECTION_URI);
        System.out.println(SQL_STATEMENT);
        Connection conn = basicDataSource.getConnection();
        CallableStatement statement = conn.prepareCall(SQL_STATEMENT);
        statement.setObject(1, "hello", Types.VARCHAR);
        statement.setObject(2, "world", Types.VARCHAR);
        boolean isResultSet = statement.execute();
        conn.close();
        Assert.assertFalse(isResultSet);
Если я скопирую оператор sql, напечатанный System.out.println(SQL_STATEMENT);, в DataGrip (среда разработки базы данных от JetBrains) и запущу его, то DataGrip попросит меня ввести два значения параметра (для двух вопросительных знаков) и успешно запустит оператор sql. Другими словами, код plpgsql синтаксически корректен (после замены параметров).

Кажется, здесь есть три возможности, и я не могу сказать, какая из них верна:

Эта функциональность (создание CallableStatement/PreparedStatement с переменными plpgsql в нем) не поддерживается.
Эта функция поддерживается, но я делаю это неправильно.
Функционал поддерживается, я им правильно пользуюсь, но есть баг.
 07.06.2019 18:04
3
2
1 304
3
Данный вопрос помечен как решенный
 Ответы 3
Вы не можете вызвать динамическую процедуру напрямую.

Вы должны сначала создать процедуру (вручную или динамически с помощью вызова оператора), а затем вызвать процедуру по имени.

Statement stmt = conn.createStatement();
stmt.execute("CREATE OR REPLACE FUNCTION myfunc(x text, y text) RETURNS refcursor AS '"
        + "do $$\n"
        + "begin\n"
        + "    insert into table_things\n"
        + "    (\n"
        + "          my_thing1\n"
        + "        , my_thing2\n"
        + "    )\n"
        + "    values\n"
        + "    (\n"
        + "          x\n"
        + "        , y\n"
        + "    )\n"
        + "    ;\n"
        + "end\n"
        + "$$;"
        + "' language plpgsql");
stmt.close();

// We must be inside a transaction for cursors to work.
conn.setAutoCommit(false);

// Procedure call.
CallableStatement proc = conn.prepareCall("{ call myfunc(?,?)}");
CallableStatement statement = conn.prepareCall(SQL_STATEMENT);
statement.setObject(1, "hello", Types.VARCHAR);
statement.setObject(2, "world", Types.VARCHAR);
 11.06.2019 04:26
    try (Connection con = DriverManager.getConnection(dbConnectionString, user, password);
         Statement st = con.createStatement();
         ResultSet rs = st.executeQuery("SELECT  * FROM public.\"Airplanes\" ")) {
        while (rs.next()) {

            //use result
        }

    } catch (SQLException ex) {

        //handle exception
    }

    return results;
}
 17.06.2019 14:22
 Ответ принят как подходящий
Хотя ответ Mạnh Quyết Nguyễn находится на правильном пути, он лишен объяснения, и предлагаемый обходной путь не является жизнеспособным в моем случае (я думаю, в большинстве случаев).

Я получил авторитетный ответ от postgresql.org.

you attempted to add question marks to a location where they are not interpreted as parameters.

Basically you wrote:

SELECT 'let me say ? ? to you';

Which is a perfectly valid query that has zero input parameters and will return:

"let me say ? ? to you"

It has no input parameters because the question marks you wrote are inside a string literal.

The $$...$$ in your DO statement also denote a string literal.

Это прискорбно, насколько я могу судить, это означает, что весь язык PL/pgSQL недоступен, если вам нужно передать параметры в этот код PL/pgSQL. (Если, конечно, вы не компилируете процедуры или функции PL/pgSQL «на лету» или как часть разработки схемы). Похоже, я не могу отправить «скрипт» PL/pgSQL в базу данных вместе с параметрами.


Есть ли способ добавить подзапрос в условиях случая?
Вопросы
SQL
Есть ли способ добавить подзапрос в условиях случая?
У меня есть функция ниже в Postgres, которая работала нормально. но затем мне пришлось добавить другие типы, поэтому я попытался добавить к нему случаи. Но это не работает, как ожидалось.

В основном то, что я пытаюсь сделать, это если пользователь ALPHA, то добавьте последние 2 пункта where. Если это БЕТА, используйте только предпоследнее предложение и игнорируйте последнее предложение where.

Старый метод без проверки роли пользователя, вошедшего в систему:

     begin
         return query SELECT distinct(gl.user_id) as user_id, u.name_tx FROM contact_linking cl
         INNER JOIN group_contacts gc ON gc.contact_id = cl.contact_id
         INNER JOIN group_linking gl ON gl.group_id = gc.group_id
         INNER JOIN group_contacts_w gcw ON gcw.group_link_id = gl.group_link_id
         INNER JOIN users u ON u.user_id = gl.user_id
         WHERE cl.ref_contact_type_cd = 'PRIMARY' 
         AND cl.users_id = userId AND cl.activ_yn = 'Y' AND gl.activ_yn = 'Y' AND cl.contact_id IS NOT NULL
         AND gc.type LIKE 'ALPHA%'
         AND gcw.type = gc.type

         UNION ALL
         select userId as user_id; 
     end
После добавления нового типа:

    begin
        return query SELECT distinct(gl.user_id) as user_id FROM contact_linking cl
        INNER JOIN group_contacts gc ON gc.contact_id = cl.contact_id
        INNER JOIN group_linking gl ON gl.group_id = gc.group_id
        INNER JOIN group_contacts_w gcw ON gcw.group_link_id = gl.group_link_id
        INNER JOIN users u ON u.user_id = gl.user_id
        WHERE cl.ref_contact_type_cd = 'PRIMARY' 
        AND cl.users_id = userId AND cl.activ_yn = 'Y' AND gl.activ_yn = 'Y' AND cl.contact_id IS NOT NULL
        AND CASE 
            WHEN 'ALPHA' = (SELECT ref_user_cd FROM users WHERE user_id = userId) THEN gc.type LIKE 'ALPHA%'
            WHEN 'BETA' = (SELECT ref_user_cd FROM users WHERE user_id = userId) THEN gc.type LIKE '%BETA'
            ELSE true
        END
        AND CASE 
            WHEN 'ALPHA' = (SELECT ref_user_cd FROM users WHERE user_id = userId) THEN gcw.type = gc.type
            ELSE true
        END
            
        UNION ALL
        select userId as user_id; 
    end
Не могли бы вы помочь в том, чтобы этот запрос работал.

 25.10.2022 18:15
0
5
62
3
Данный вопрос помечен как решенный
 Ответы 3
Попробуйте эту новую версию, установленную из вашей собственной пробной версии:

return query
  SELECT distinct(gl.user_id) as user_id 
    FROM contact_linking cl
   INNER JOIN group_contacts gc
      ON gc.contact_id = cl.contact_id
   INNER JOIN group_linking gl
      ON gl.group_id = gc.group_id
   INNER JOIN group_contacts_w gcw
      ON gcw.group_link_id = gl.group_link_id
   INNER JOIN users u
      ON u.user_id = gl.user_id
   WHERE cl.ref_contact_type_cd = 'PRIMARY' 
     AND cl.users_id = userId
     AND cl.activ_yn = 'Y'
     AND gl.activ_yn = 'Y'
     AND cl.contact_id IS NOT NULL
     AND (   (     (SELECT ref_user_cd = 'ALPHA' FROM users WHERE user_id = userId) 
               AND gc.type LIKE 'ALPHA%'
               AND gcw.type = gc.type
             )
          OR (     (SELECT ref_user_cd = 'BETA' FROM users WHERE user_id = userId)
               AND gc.type LIKE '%BETA'
             )
          OR (SELECT ref_user_cd <> 'ALPHA' AND ref_user_cd <> 'BETA' FROM users WHERE user_id = userId)
        )
UNION ALL
  select userId as user_id; 
 25.10.2022 19:56
Ответ @Edouard - неплохое представление о том, как упростить этот запрос. Но поскольку я был внутри функции, у меня была возможность использовать переменные, и я хотел бы поделиться своим ответом, поскольку я не нашел ничего подобного.

DECLARE
    loggedin_ref_user_cd character varying(25);
BEGIN
    
    loggedin_ref_user_cd := (SELECT ref_user_cd FROM users WHERE user_id = userId);
    --RAISE WARNING 'value of loggedin_ref_user_cd : %', loggedin_ref_user_cd;  -- just for debugging
    
    RETURN QUERY
    SELECT distinct(gl.user_id) as user_id FROM contact_linking cl
    INNER JOIN group_contacts gc ON gc.contact_id = cl.contact_id
    INNER JOIN group_linking gl ON gl.group_id = gc.group_id
    INNER JOIN group_contacts_w gcw ON gcw.group_link_id = gl.group_link_id
    INNER JOIN users u ON u.user_id = gl.user_id
    WHERE cl.ref_contact_type_cd = 'PRIMARY' 
    AND cl.users_id = userId AND cl.activ_yn = 'Y' AND gl.activ_yn = 'Y' AND cl.contact_id IS NOT NULL
    AND CASE 
        WHEN loggedin_ref_user_cd = 'ALPHA' THEN ( gc.type LIKE 'ALPHA%' AND gcw.type = gc.type )
        WHEN loggedin_ref_user_cd = 'BETA' THEN gc.type LIKE '%BETA'
        ELSE true
    END
        
    UNION ALL
    select userId as user_id; 
    
END
 25.10.2022 21:11
 Ответ принят как подходящий
Упрощенный:

DECLARE
   loggedin_ref_user_cd text := (SELECT ref_user_cd FROM users WHERE user_id = userId);
BEGIN
   RETURN QUERY
   SELECT DISTINCT gl.user_id  -- No parentheses around gl.user_id!
   FROM   contact_linking  cl
   JOIN   group_contacts   gc  USING (contact_id)
   JOIN   group_linking    gl  ON gl.group_id = gc.group_id
   JOIN   group_contacts_w gcw ON gcw.group_link_id = gl.group_link_id
-- JOIN   users            u   ON u.user_id = gl.user_id  -- unused ballast
   WHERE  cl.ref_contact_type_cd = 'PRIMARY' 
   AND    cl.users_id = userId
   AND    cl.activ_yn = 'Y'                      -- should be boolean
-- AND    cl.contact_id IS NOT NULL              -- established by join condition
   AND    gl.activ_yn = 'Y'                      -- should be boolean
   AND    CASE loggedin_ref_user_cd 
          WHEN 'ALPHA' THEN gc.type LIKE 'ALPHA%' AND gcw.type = gc.type
          WHEN 'BETA'  THEN gc.type LIKE '%BETA'
          ELSE true
          END
   UNION ALL
   SELECT userid;  -- AS user_id  -- noise
END
Использование более простого «переключаемого» SQL-выражения CASE.
Но разделение отдельных случаев обычно приводит к более быстрым планам запросов для каждого из них:

BEGIN
   -- plpgsql CASE, not to be confused with SQL CASE!
   CASE (SELECT ref_user_cd FROM users WHERE user_id = userId)
   WHEN 'ALPHA' THEN
      RETURN QUERY
      SELECT DISTINCT gl.user_id
      FROM   contact_linking  cl
      JOIN   group_contacts   gc  USING (contact_id)
      JOIN   group_linking    gl  ON gl.group_id = gc.group_id
      JOIN   group_contacts_w gcw ON gcw.group_link_id = gl.group_link_id
      WHERE  cl.ref_contact_type_cd = 'PRIMARY' 
      AND    cl.users_id = userId
      AND    cl.activ_yn = 'Y'
      AND    gl.activ_yn = 'Y'
      AND    gc.type LIKE 'ALPHA%'
      AND    gcw.type = gc.type;

   WHEN 'BETA'  THEN
      RETURN QUERY
      SELECT DISTINCT gl.user_id  -- do we still need DISTINCT ???
      FROM   contact_linking  cl
      JOIN   group_contacts   gc  USING (contact_id)
      JOIN   group_linking    gl  ON gl.group_id = gc.group_id
      WHERE  cl.ref_contact_type_cd = 'PRIMARY' 
      AND    cl.users_id = userId
      AND    cl.activ_yn = 'Y'
      AND    gl.activ_yn = 'Y'
      AND    gc.type LIKE '%BETA';
      
   ELSE
      RETURN QUERY
      SELECT DISTINCT gl.user_id  -- do we still need DISTINCT ???
      FROM   contact_linking  cl
      JOIN   group_contacts   gc  USING (contact_id)
      JOIN   group_linking    gl  ON gl.group_id = gc.group_id
      WHERE  cl.ref_contact_type_cd = 'PRIMARY' 
      AND    cl.users_id = userId
      AND    cl.activ_yn = 'Y'
      AND    gl.activ_yn = 'Y';
   END CASE;
   
   RETURN QUERY
   SELECT userid;
END
Использование «переключенного» выражения PL/pgSQL CASE. И никакой дополнительной переменной PL/pgSQL и отдельного запроса. Дешевле. Не путайте SQL и PL/pgSQL CASE. Видеть:

CASE-оператор PostgreSQL
Упростите функцию PL/pgSQL с помощью множества операторов if-else и JSONification
Отображать имя столбца с максимальным значением между несколькими столбцами
В зависимости от ваших нераскрытых определений таблиц вы, вероятно, можете упростить их еще больше. Я уже удалил соединение с group_contacts_w в двух случаях. И я подозреваю, что вам вообще не нужны, возможно, дорогие DISTINCT.

Не используйте круглые скобки после DISTINCT, которое является ключевым словом SQL, а не функцией. С одним столбцом в выражении это работает, но с большим количеством столбцов оно сломается. Видеть:

Объедините два запроса, чтобы подсчитать разные строки с разными фильтрами


Ошибка вызова процедуры в posgres «Ни одна процедура не соответствует заданному имени и типам аргументов. Возможно, вам потребуется добавить явные приведения типов»
Вопросы
POSTGRESQL
Ошибка вызова процедуры в posgres «Ни одна процедура не соответствует заданному имени и типам аргументов. Возможно, вам потребуется добавить явные приведения типов»
CREATE or replace PROCEDURE mytransactions (n_transactions_id VARCHAR,
n_transaction_amount SMALLINT, 
n_transaction_date TIMESTAMP,
n_Delivery_date Date,
n_customer_id VARCHAR,
n_product_id VARCHAR,
n_store_id VARCHAR)
LANGUAGE plpgsql AS
  $BODY$
      BEGIN
        INSERT INTO transactions
(transactions_id, 
  transaction_amount,
  transaction_date,
Delivery_date,
customer_id,
product_id,
store_id)
        VALUES
  (n_transactions_id, n_transaction_amount, 
n_transaction_date,
n_Delivery_date,
n_customer_id,
n_product_id,
n_store_id);
      END;
  $BODY$
Вот моя хранимая процедура, она успешно создается, однако как только я вызываю

CALL mytransactions
('555', 3, current_timestamp , to_date('2022-10-25','YYYY-MM-DD'), 
  '003', '300', '002RW');
это я получаю ошибку.

ERROR:  procedure mytransactions(unknown, integer, timestamp with time zone, date, unknown, unknown, unknown) does not exist
LINE 1: CALL mytransactions
             ^
HINT:  No procedure matches the given name and argument types. You might need to add explicit type casts.
Здесь вы можете найти полные таблицы https://dbfiddle.uk/9_NIQDw6

 26.10.2022 13:56
0
0
295
3
Данный вопрос помечен как решенный
 Ответы 3
 Ответ принят как подходящий
Вам нужно типизировать параметры. Это будет работать, хотя вы получите другие ошибки, когда процедура сделает свое дело.

CALL mytransactions
('555'::varchar, 3::smallint, current_timestamp::timestamp , to_date('2022-10-25','YYYY-MM-DD'), 
  '003'::varchar, '300'::varchar, '002RW'::varchar);
 26.10.2022 14:12
Проблема в ваших втором и третьем аргументах. Как видно из ошибки, Postgres предполагает, что второй аргумент (3) является целым числом, а не smallint, а третий аргумент создается с помощью current_timestamp, который возвращает временную метку с часовым поясом, а не временную метку.

Вы можете решить проблему с smallint, просто приведя к smallint. Для метки времени вам нужно выяснить, какое значение вы на самом деле хотите. Я бы рекомендовал использовать временную метку с часовым поясом везде, если это возможно.

Вот пример вызова вашей процедуры, которая будет работать, но отметка времени может быть не такой, какой вы на самом деле хотите:

CALL mytransactions
('555', 3::smallint, current_timestamp::timestamp , to_date('2022-10-25','YYYY-MM-DD'), 
  '003', '300', '002RW');
Будьте осторожны с этим преобразованием в метку времени, так как результат будет зависеть от настроек часового пояса клиента SQL.

 26.10.2022 14:12
Типы данных ваших аргументов не соответствуют типам данных параметров, и неявные приведения типов не могут быть применены. Например, 3 — это integer, которое не может быть неявно приведено к smallint. Вам нужно будет использовать явное приведение типов, например CAST (3 AS smallint).

Чтобы избежать этой проблемы, рекомендуется использовать предпочтительные типы данных для параметров функции. Каждый класс типа данных имеет один из них. Для строковых типов это text, для чисел numeric и для даты/времени это timestamp with time zone. Тогда правила разрешения типов обычно будут работать так, как вы хотите.


«Группировать по» не группируется в том порядке, в котором мне это нужно
Вопросы
SQL
«Группировать по» не группируется в том порядке, в котором мне это нужно
Я хочу «группировать» сорта пива, чтобы они были сгруппированы вместе, а совокупный рейтинг уважения и дегустаторы (люди, которые оценивают пиво) перечислены в отдельных столбцах.

Вот мой код:

create or replace view tasters_avg_ratings1
as
select a.taster as taster, a.beer as beer, round(avg(a.rating),1) as rating 
from allratings a
group by beer, taster
;
Тем не менее, мой вывод выглядит следующим образом:

beers=# select * from tasters_avg_ratings1;
 taster |          beer          | rating 
--------+------------------------+--------
 Peter  | XXXX                   |    5.0
 Sarah  | James Squire Pilsener  |    3.0
 Raghu  | Sierra Nevada Pale Ale |    3.0
 Hector | Fosters                |    3.0
 John   | Chimay Red             |    3.0
 John   | Sierra Nevada Pale Ale |    5.0
 Geoff  | James Squire Pilsener  |    4.0
 Ramez  | Sierra Nevada Pale Ale |    4.0
 John   | 80/-                   |    4.0
 John   | Rasputin               |    4.0
 Adam   | Old                    |    4.0
 John   | Crown Lager            |    2.0
 Jeff   | Sierra Nevada Pale Ale |    4.0
 Sarah  | Burragorang Bock       |    4.0
 Sarah  | Scharer's Lager        |    3.0
 Sarah  | New                    |    2.0
 Geoff  | Redback                |    4.0
 Adam   | Victoria Bitter        |    1.0
 Sarah  | Victoria Bitter        |    1.0
 Raghu  | Rasputin               |    3.0
 Ramez  | Bigfoot Barley Wine    |    3.0
 Hector | Sierra Nevada Pale Ale |    4.0
 Sarah  | Old                    |    3.0
 Jeff   | Burragorang Bock       |    3.0
 John   | Empire                 |    3.0
 Sarah  | James Squire Amber Ale |    3.0
 Rose   | Redback                |    5.0
 Geoff  | Empire                 |    3.0
 Adam   | New                    |    1.0
 Jeff   | Rasputin               |    1.0
 Raghu  | Old Tire               |    5.0
 John   | Victoria Bitter        |    1.0
(32 rows)

Как видите, сорта пива НЕ сгруппированы вместе. В идеале, например, пиво «Victoria Bitter» должно отображаться как группа, а не отдельно.

Желаемый результат достигается с помощью «упорядочить по». Например:

create or replace view tasters_avg_ratings1
as
select a.taster as taster, a.beer as beer, round(avg(a.rating),1) as rating 
from allratings a
group by beer, taster
order by a.beer
;
ВЫВОД:

beers=# select * from tasters_avg_ratings1;
 taster |          beer          | rating 
--------+------------------------+--------
 John   | 80/-                   |    4.0
 Ramez  | Bigfoot Barley Wine    |    3.0
 Jeff   | Burragorang Bock       |    3.0
 Sarah  | Burragorang Bock       |    4.0
 John   | Chimay Red             |    3.0
 John   | Crown Lager            |    2.0
 Geoff  | Empire                 |    3.0
 John   | Empire                 |    3.0
 Hector | Fosters                |    3.0
 Sarah  | James Squire Amber Ale |    3.0
 Geoff  | James Squire Pilsener  |    4.0
 Sarah  | James Squire Pilsener  |    3.0
 Adam   | New                    |    1.0
 Sarah  | New                    |    2.0
 Adam   | Old                    |    4.0
 Sarah  | Old                    |    3.0
 Raghu  | Old Tire               |    5.0
 Jeff   | Rasputin               |    1.0
 John   | Rasputin               |    4.0
 Raghu  | Rasputin               |    3.0
 Geoff  | Redback                |    4.0
 Rose   | Redback                |    5.0
 Sarah  | Scharer's Lager        |    3.0
 Hector | Sierra Nevada Pale Ale |    4.0
 Jeff   | Sierra Nevada Pale Ale |    4.0
 John   | Sierra Nevada Pale Ale |    5.0
 Raghu  | Sierra Nevada Pale Ale |    3.0
 Ramez  | Sierra Nevada Pale Ale |    4.0
 Adam   | Victoria Bitter        |    1.0
 John   | Victoria Bitter        |    1.0
 Sarah  | Victoria Bitter        |    1.0
 Peter  | XXXX                   |    5.0
(32 rows)

Итак, хотя я знаю, что order by достигает моего результата, почему «group by» не делает то же самое? Это расстраивает, потому что я видел в Интернете множество примеров использования «группировать по» и добивался успеха, особенно в случаях, подобных моему, с неагрегированными и совокупными столбцами. Например: https://learnsql.com/blog/error-with-group-by/, совет №3.

Любая помощь будет оценена, спасибо!

Как правило, предложение ORDER BY требуется, когда необходимо применить определенную сортировку. Использование GROUP BY устанавливает GROUPING (поэтому он называется GROUP BY, а не ORDER BY), поэтому ORDER BY по-прежнему необходим.

— 
Jonas Metzler
 22.11.2022 14:48
Эй, Джонас, не могли бы вы уточнить, что вы подразумеваете под «группировкой» наборов «группировкой»? Означает ли это, что все сорта пива с одинаковым названием не обязательно будут помещены в последовательный блок таблицы? Как насчет примера, который я привел на веб-сайте. Спасибо

— 
Rayyan Khan
 22.11.2022 14:50
GROUP BY позволяет суммировать/подсчитывать/и т.д. значения (вы называете это агрегацией), СГРУППИРОВАННЫЕ ПО определенным столбцам. В вашем примере средний рейтинг будет строиться по дегустатору и пиву. Без GROUP BY средний рейтинг не отличался бы, а всегда рассчитывался на основе всей таблицы. GROUP BY не имеет ничего общего с сортировкой. Для сортировки требуется предложение ORDER BY. Об этом больше нечего сказать. На этот вопрос был дан ответ много лет назад: stackoverflow.com/questions/28149876/…

— 
Jonas Metzler
 22.11.2022 14:57
Вам нужно указать логику для сборки этих подгрупп (пиво, без пива и т. д.). Вам нужно либо создать для него новый столбец, либо определить логику для их вычисления на лету.

— 
The Impaler
 22.11.2022 14:58
Вы уже знаете, как добиться упорядоченности. Так сделай это. Зачем добровольно разочаровываться из-за ерунды?

— 
jjanes
 22.11.2022 17:03
@jjanes Привет, я не думаю, что это очень полезный вопрос, и звучит почти снисходительно. Как указано в моем посте, я знаю, что упорядочение достигает моего результата, но я поясняю, почему группировка этого не делает, несмотря на то, что интернет-источник показывает, что он работает таким же образом. Другие разъяснили, почему это так, в полезной и доброжелательной манере, поэтому у меня есть ответ, который мне нужен. Если вы все еще пытаетесь понять мой вопрос, я буду более чем счастлив уточнить!

— 
Rayyan Khan
 22.11.2022 23:10



PostgreSQL: получение нескольких значений из типа записи
Вопросы
SQL
PostgreSQL: получение нескольких значений из типа записи
Я пишу программу sql, которая создает таблицу со столбцами, вычисляемыми в функции. Функция возвращает тип записи. Вот как выглядит заголовок:

create or replace function get_items(col1 int, col2 int) returns record
То, что я хотел бы сделать, это:

create table table_items as (
with q as (
    select *,
   (SELECT * FROM get_items(t.col1, t.col2) AS (item1 integer, item2 integer))
    from 
    table_t as t
    )
    select * from q
);
однако это приводит к:

ERROR:  subquery must return only one column
Чтобы исправить ошибку, я изменил код на:

create table table_items as (
with q as (
    select *,
   (SELECT item1 FROM get_items(t.col1, t.col2) AS (item1 integer, item2 integer)),
   (SELECT item2 FROM get_items(t.col1, t.col2) AS (item1 integer, item2 integer)) 
    from 
    table_t as t
    )
    select * from q
);
Это решение работает, но в два раза медленнее, когда в дополнение к item1 получается item2. Я предполагаю, что это потому, что один и тот же запрос выполняется дважды. Есть ли способ получить оба элемента, вызывая функцию только один раз? Большое спасибо!

 21.12.2022 13:03
1
0
59
3
Данный вопрос помечен как решенный
 Ответы 3
 Ответ принят как подходящий
Это хороший пример использования бокового соединения.

create table table_items as 
select *
from table_t as t
cross join lateral
get_items(t.col1, t.col2) as l(item1 integer, item2 integer);
 21.12.2022 13:41
Я предполагаю, что причина в том, что returns record полиморфен. Попробуйте с RETURNS TABLE (col1 int, col2 int) или верните пользовательский тип

 21.12.2022 13:50
Прямая реализация того, что вы планировали изначально, должна быть быстрее, чем боковое соединение. Как предложил @esmin : если вы получаете только (item1 integer, item2 integer) тип записи из функции, лучше определить его заранее ( вот онлайн-демонстрация для всего ниже):

drop function if exists get_items;

create type get_items_return_rec as (a int, b int);

create or replace function get_items(col1 int,col2 int) 
  returns get_items_return_rec language plpgsql as $$
begin
    return (col1,col2)::get_items_return_rec;
end $$;
Что позволит вам обращаться к его полям напрямую, именно так, как вы хотели - вызывая его только один раз, а затем разбивая на поля:

explain analyze 
select a,
       b,
       (rec).a,
       (rec).b 
from (
  select a,
         b,
         get_items(a,b) as rec
  from test) subquery;
--                                                   QUERY PLAN
------------------------------------------------------------------------------------------------------------------
-- Seq Scan on test  (cost=0.00..360098.00 rows=700000 width=16) (actual time=2.244..816.545 rows=700000 loops=1)
-- Planning Time: 0.061 ms
-- JIT:
--   Functions: 2
--   Options: Inlining false, Optimization false, Expressions true, Deforming true
--   Timing: Generation 0.451 ms, Inlining 0.000 ms, Optimization 0.193 ms, Emission 1.807 ms, Total 2.451 ms
-- Execution Time: 841.719 ms
Сравните это с боковым соединением и вашим первоначальным решением на том же примере из 700 тыс. строк:

explain analyze
  select a,
         b,
         (select c from get_items(a,b) as rec(c int,d int)),
         (select d from get_items(a,b) as rec(c int,d int))
  from test;
--                                                        QUERY PLAN
-----------------------------------------------------------------------------------------------------------------------------
-- Seq Scan on test  (cost=0.00..374098.00 rows=700000 width=16) (actual time=6.845..2275.461 rows=700000 loops=1)
--   SubPlan 1
--     ->  Function Scan on get_items rec  (cost=0.25..0.26 rows=1 width=4) (actual time=0.001..0.001 rows=1 loops=700000)
--   SubPlan 2
--     ->  Function Scan on get_items rec_1  (cost=0.25..0.26 rows=1 width=4) (actual time=0.001..0.001 rows=1 loops=700000)
-- Planning Time: 0.073 ms
-- JIT:
--   Functions: 18
--   Options: Inlining false, Optimization false, Expressions true, Deforming true
--   Timing: Generation 1.311 ms, Inlining 0.000 ms, Optimization 0.319 ms, Emission 6.256 ms, Total 7.886 ms
-- Execution Time: 2300.981 ms
explain analyze
  select a,
         b
  from  test
  cross join lateral
  get_items(a,b) as rec(c int,d int);

--                                                      QUERY PLAN
-------------------------------------------------------------------------------------------------------------------------
-- Nested Loop  (cost=0.25..24098.25 rows=700000 width=8) (actual time=0.064..1116.634 rows=700000 loops=1)
--   ->  Seq Scan on test  (cost=0.00..10098.00 rows=700000 width=8) (actual time=0.014..44.813 rows=700000 loops=1)
--   ->  Function Scan on get_items rec  (cost=0.25..0.26 rows=1 width=0) (actual time=0.001..0.001 rows=1 loops=700000)
-- Planning Time: 0.080 ms
-- Execution Time: 1140.850 ms
Если вам нужна скорость, посмотрите, можете ли вы переписать свою функцию как простую функцию SQL вместо использования plpgsql. Пример тривиален, но он все же иллюстрирует сравнительную разницу, которую вы можете ожидать:

drop function if exists get_items;
create or replace function get_items(col1 int,col2 int) 
  returns get_items_return_rec language sql stable as $$
select (col1,col2)::get_items_return_rec
$$;

explain analyze
select a,
       b,
       (rec).a,
       (rec).b
from (
  select a,
         b,
         get_items(a,b) as rec
  from test) subq;
--                                                  QUERY PLAN
----------------------------------------------------------------------------------------------------------------
-- Seq Scan on test  (cost=0.00..10098.00 rows=700000 width=16) (actual time=0.010..64.552 rows=700000 loops=1)
-- Planning Time: 0.085 ms
-- Execution Time: 88.892 ms
Кроме того, проверьте уровни волатильности функций и, если ваша функция не вызывает побочных эффектов, сделайте их как минимум stable.

Большое спасибо за ваш ответ. Я сравнил два решения, оказалось, что решение с использованием перекрестного соединения позже было примерно в 4 раза быстрее на срезе набора данных из 1000 строк.

— 
Marina
 21.12.2022 17:10
@Marina Они не исключают друг друга, так что вы можете их комбинировать. Вы пытались переключить функцию на обычный sql?

— 
Zegarek
 21.12.2022 19:04
Я объединил их по приведенному вами примеру (спасибо!). Время выполнения программы сравнимо с тем, что использует тип записи. Я попытался изменить plpgsql на sql, но он выдает синтаксическую ошибку при объявлении переменной. Мне потребуется некоторое время, чтобы понять, как это сделать. Еще раз спасибо за помощь.

— 
Marina
 23.12.2022 14:33



Postgres: как вообще сделать столбец неизменным?
Вопросы
POSTGRESQL
Postgres: как вообще сделать столбец неизменным?
Вот в чем проблема.

create table customer (
  customer_id int generated by default as identity (start with 100) primary key
);
create table cart (
  cart_id int generated by default as identity (start with 100) primary key
);
Я хочу защитить customer_id и cart_id от общего обновления после их вставки. Как?

UPD: Пока писал вопрос, нашел ответ на свой первоначальный вопрос. Вот:

create table cart (
  cart_id int generated by default as identity (start with 100) primary key,
  name text not null,
  at timestamp with time zone
);

create or replace function table_update_guard() returns trigger
language plpgsql immutable parallel safe cost 1 as $body$
begin
  raise exception
    'trigger %: updating is prohibited for %',
    tg_name, tg_argv[0]
    using errcode = 'restrict_violation';
  return null;
end;
$body$;

create or replace trigger cart_update_guard
before update of cart_id, name on cart for each row
-- NOTE: the WHEN clause below is optional
when (
     old.cart_id is distinct from new.cart_id
  or old.name    is distinct from new.name
)
execute function table_update_guard('cart_id, name');

> insert into cart (cart_id, name) values (0, 'prado');
INSERT 0 1
> update cart set cart_id = -1 where cart_id = 0;
ERROR:  trigger cart_update_guard: updating is prohibited for cart_id, name
CONTEXT:  PL/pgSQL function table_update_guard() line 3 at RAISE
> update cart set name = 'nasa' where cart_id = 0;
ERROR:  trigger cart_update_guard: updating is prohibited for cart_id, name
CONTEXT:  PL/pgSQL function table_update_guard() line 3 at RAISE
> update cart set at = now() where cart_id = 0;
UPDATE 1
Предложение WHEN было предложено Belayer в его ответе . Полное объяснение в моем исследовании . Дополнительно я рассмотрел подход к игре с привилегиями. ПРИМЕЧАНИЕ. Некоторые люди говорят, что такие триггеры, как здесь, убивают производительность. Они не правы. Как вы думаете, как postgres реализует внутренние ограничения? — Использование неявных триггеров, как описано здесь.

 13.01.2023 04:13
0
6
82
3
Данный вопрос помечен как решенный
 Ответы 3
 Ответ принят как подходящий
TL;DR
Что я пробовал? Отзыв UPDATE привилегии не работает.

# \c danissimo danissimo
You are now connected to database "danissimo" as user "danissimo".

> revoke update (customer_id) on customer from danissimo;
REVOKE
> insert into customer (customer_id) values (0);
INSERT 0 1
> update customer set customer_id = 0 where customer_id = 0;
UPDATE 1
> update customer set customer_id = -1 where customer_id = 0;
UPDATE 1
Ладно, поставим охрану.

create or replace function customer_id_guard() returns trigger
language plpgsql as $body$
begin
  if old.customer_id != new.customer_id then
    raise exception
      'trigger %: updating is prohibited for %',
      tg_name, 'customer_id' using
      errcode = 'restrict_violation';
  end if;
  return new;
end;
$body$;

create or replace trigger customer_id_guard
after update on customer for each row
execute function customer_id_guard();
Теперь давайте дадим им немного работы.

> update customer set customer_id = -1 where customer_id = -1;
UPDATE 1
Правильно, я не менял значение. Как насчет этого:

> update customer set customer_id = 0 where customer_id = -1;
ERROR:  trigger customer_id_guard: updating is prohibited for customer_id
CONTEXT:  PL/pgSQL function customer_id_guard() line 4 at RAISE
Да, вот оно. Хорошо, давайте тоже защитим cart_id. Я не хочу копировать триггерные функции, поэтому попытаюсь обобщить:

create or replace function generated_id_guard() returns trigger
language plpgsql as $body$
declare
  id_col_name text := tg_argv[0];
  equal boolean;
begin
  execute format('old.%1$I = new.%1$I', id_col_name) into equal;
  if not equal then
    raise exception
      'trigger %: updating is prohibited for %',
      tg_name, id_col_name using
      errcode = 'restrict_violation';
  end if;
  return new;
end;
$body$;

create or replace trigger cart_id_guard
after update on cart for each row
execute function generated_id_guard('cart_id');
Как вы могли заметить, я передаю имя столбца функции триггера, генерирую выражение и помещаю результат этого выражения в equal, который затем проверяет.

> insert into cart (cart_id) values (0);
INSERT 0 1
> update cart set cart_id = 0 where cart_id = 0;
ERROR:  syntax error at or near "old"
LINE 1: old.cart_id = new.cart_id
        ^
QUERY:  old.cart_id = new.cart_id
CONTEXT:  PL/pgSQL function generated_id_guard() line 6 at EXECUTE
Хммм... Он прав, что за болтающийся old.cart_id = new.cart_id? Что, если я напишу

execute format('select old.%1$I = new.%1$I', id_col_name) into equal;

> update cart set cart_id = 0 where cart_id = 0;
ERROR:  missing FROM-clause entry for table "old"
LINE 1: select old.cart_id = new.cart_id
               ^
QUERY:  select old.cart_id = new.cart_id
CONTEXT:  PL/pgSQL function generated_id_guard() line 6 at EXECUTE
Правильно, правильно ... Что, если я напишу

declare
  id_old int;
  id_new int;
begin
  execute format('select %I from old', id_col_name) into id_old;
  execute format('select %I from new', id_col_name) into id_new;
  if id_old != id_new then

> update cart set cart_id = 0 where cart_id = 0;
ERROR:  relation "old" does not exist
LINE 1: select cart_id from old
                            ^
QUERY:  select cart_id from old
CONTEXT:  PL/pgSQL function generated_id_guard() line 7 at EXECUTE
Ага, «отношения «старого» не существует»...

Ну и последнее средство:

drop table cart;
create table cart (
  cart_id int generated by default as identity (start with 100) primary key,
  at timestamp with time zone
);
insert into cart (cart_id) values (0);

create or replace function surrogate_id_guard() returns trigger
language plpgsql immutable parallel safe cost 1 as $body$
begin
  raise exception
    'trigger %: updating is prohibited for %',
    tg_name, tg_argv[0] using
    errcode = 'restrict_violation';
  return null;
end;
$body$;

create or replace trigger cart_id_guard
before update of cart_id on cart for each row
execute function surrogate_id_guard('cart_id');
Я просто заставляю его срабатывать при любой попытке обновления cart_id. Давай проверим:

> update cart set cart_id = 0 where cart_id = 0;
ERROR:  trigger cart_id_guard: updating is prohibited for cart_id
CONTEXT:  PL/pgSQL function surrogate_id_guard() line 3 at RAISE
> update cart set at = now() where cart_id = 0;
UPDATE 1
Ну, наконец, я ответил на свой первоначальный вопрос в этот момент. Но все же возникает другой вопрос: как применить тот же алгоритм, закодированный в функции, к столбцам, заданным в аргументах этой функции?

 13.01.2023 04:13
Если я правильно понимаю, вы хотите запретить любому пользователю изменять идентификатор таблицы после его установки и чтобы общая функция создавала исключение, при этом разрешая другие обновления. Вы можете добиться этого, изменив триггер, а не функцию. Укажите предикат WHEN для самого триггера. Тогда для таблицы cart:

create or replace trigger cart_id_guard
   before update of cart_id 
       on cart for each row
          when (old.cart_id is distinct from new.cart_id)
       execute function surrogate_id_guard('cart_id');
Для таблицы customer триггером становится:

create or replace trigger customer_id_guard
   before update of customer_id 
       on customer for each row
     when (old.customer_id is distinct from new.customer_id)
  execute function surrogate_id_guard('customer_id');
Сама функция триггера не меняется. (демо здесь)

 15.01.2023 22:34
Самая первая попытка в моем предыдущем исследовании заключалась в отзыве привилегий. Как указал Laurenz Albe в своем комментарии, мне пришлось отозвать привилегию на обновление всей таблицы вместо отзыва привилегии на обновление определенного столбца. Вот код:

# \c danissimo danissimo
You are now connected to database "danissimo" as user "danissimo".

create table cart (
  cart_id int generated by default as identity (start with 100) primary key,
  at timestamp with time zone default now()
);
insert into cart default values;

revoke update on cart from danissimo;
Могу ли я обновить таблицу сейчас?

> update cart set at = at - interval '1 day';
ERROR:  permission denied for table cart
Хорошо, давайте предоставим право на обновление столбцов, отличных от cart_id:

> grant update (at) on cart to danissimo;
> update cart set at = at - interval '1 day';
UPDATE 1
Все идет нормально. Теперь время идет, и в конце концов danissimo добавляет еще одну колонку item_ids:

alter table cart add column item_ids int[];
Может ли danissimo обновить новую колонку сейчас? Имейте в виду, что у него была отозвана привилегия на обновление всей таблицы, а привилегия на обновление нового столбца не была предоставлена:

> update cart set item_ids = array[1, 3, 7 ,5];
ERROR:  permission denied for table cart
А если я предоставлю ему привилегию?

> grant update (item_ids) on cart to danissimo;
> update cart set item_ids = array[1, 3, 7 ,5];
UPDATE 1
Что все это значит? Я рассматривал два подхода. Один из них — запретить обновления столбца после того, как ему будет присвоено значение. Другой - играть с привилегиями. В наших проектах обычно мы добавляем новые столбцы по мере развития проектов. Если я придерживаюсь привилегий, я должен предоставлять привилегию для обновления нового столбца каждый раз, когда я добавляю новый. С другой стороны, если я защищаю некоторые столбцы с помощью триггера, я просто добавляю новые столбцы и больше не беспокоюсь.

ВЫВОД: Используйте триггеры, как показано выше 👆🏼.


ОШИБКА: синтаксическая ошибка в месте «QUERY» или рядом с ним. QUERY EXECUTE 'set Enable_parallel_append = off';
Вопросы
POSTGRESQL
ОШИБКА: синтаксическая ошибка в месте «QUERY» или рядом с ним. QUERY EXECUTE 'set Enable_parallel_append = off';
У меня есть функция plpgsql ниже -

CREATE OR REPLACE FUNCTION public.end_to_end_query(part_id integer)
 LANGUAGE plpgsql IMMUTABLE
AS $function$
DECLARE
  query_pw varchar := format(
    $dynsql$
    ALTER TABLE metric_events_%s SET (parallel_workers = 16)
    $dynsql$, part_id
  );

BEGIN
    RAISE NOTICE 'Value: %', query;
    QUERY EXECUTE 'set enable_parallel_append = off';
    QUERY EXECUTE "SET work_mem TO '1GB'";
    QUERY EXECUTE query_pw;
    QUERY EXECUTE "SET max_parallel_workers_per_gather = 16";
    QUERY EXECUTE "set max_worker_processes=8";
END $function$;
Когда я запускаю вышеуказанную функцию, я получаю сообщение об ошибке:

ОШИБКА: синтаксическая ошибка в строке «QUERY» или рядом с ней.

СТРОКА 13: ЗАПРОС ВЫПОЛНИТЬ 'set Enable_parallel_append = off'; ^

Состояние SQL: 42601

Персонаж: 1419

Как я могу исправить эту ошибку?

 15.04.2024 05:43
0
1
86
3
Данный вопрос помечен как решенный
 Ответы 3
 Ответ принят как подходящий
query execute не является допустимой командой SQL, вам просто нужно вызвать execute:

CREATE OR REPLACE FUNCTION public.end_to_end_query(part_id integer)
 LANGUAGE plpgsql IMMUTABLE
AS $function$
DECLARE
  query_pw varchar := format(
    $dynsql$
    ALTER TABLE metric_events_%s SET (parallel_workers = 16)
    $dynsql$, part_id
  );

BEGIN
    RAISE NOTICE 'Value: %', query;
    EXECUTE 'set enable_parallel_append = off';
    EXECUTE 'SET work_mem TO ''1GB''';
    EXECUTE query_pw;
    EXECUTE "SET max_parallel_workers_per_gather = 16";
    EXECUTE "set max_worker_processes=8";
END $function$;
 15.04.2024 05:57
Команда PL/pgSQL для выполнения строк динамического запроса — EXECUTE, а не QUERY EXECUTE. (Также доступно в комбинированной форме RETURN QUERY EXECUTE, чтобы фактически возвращать результаты динамического запроса.)

Но это лишь одна из множества серьезных ошибок в функции. Это может сработать:

CREATE OR REPLACE FUNCTION public.end_to_end_query(part_id integer)
  RETURNS void
  LANGUAGE plpgsql VOLATILE AS
$func$
DECLARE
   _query text := format($x$ALTER TABLE metric_events_%s SET (parallel_workers = 16)$x$, part_id);
BEGIN
   IF part_id IS NULL THEN
      RAISE EXCEPTION 'A notnull part_id must be given!';
   END IF;

   SET enable_parallel_append = off;
   SET work_mem = '1GB';
   SET max_parallel_workers_per_gather = 16;
   -- SET max_worker_processes = 8;  -- double nonsense!

   RAISE NOTICE 'Query: %', _query;
   EXECUTE _query;
END
$func$;
Вы не можете создать функцию без объявления типа возвращаемого значения, обычно с помощью предложения RETURNS. Вместо этого вам может понадобиться PROCEDURE. Видеть:

Когда использовать хранимую процедуру/пользовательскую функцию?
Двойные кавычки не предназначены для строковых литералов. Видеть:

Вставка текста в одинарных кавычках в PostgreSQL
Вам не нужен EXECUTE для простых статических SET команд.

Вы не можете установить max_worker_processes в такой функции. Требуется перезагрузка сервера.

Глупо устанавливать max_worker_processes ниже max_parallel_workers_per_gather.

Функция VOLATILE, а не IMMUTABLE.

Вы должны защититься от ввода NULL, иначе строка динамического запроса либо вызовет исключение, либо сделает что-то неожиданное.

Смешение этих общих команд SET с установкой параметра таблицы кажется странным. Вы уверены, что хотите упаковать это в одну функцию?

 15.04.2024 07:49
Когда вы вносите изменения в конфигурацию отдельно для одной функции, вам следует использовать такой синтаксис:

CREATE OR REPLACE FUNCTION foo(a int)
RETURNS void AS $$
BEGIN
  RAISE NOTICE '% %', a, current_setting('work_mem');
END
$$ LANGUAGE plpgsql SET work_mem = '20MB';
Этот синтаксис гарантирует, что объем изменения конфигурации будет ограничен только выполнением функции, и после этого изменения конфигурации будут возвращены обратно.


Макросы/Метапрограммирование в запросах Postgres
Вопросы
SQL
Макросы/Метапрограммирование в запросах Postgres
В случае, если у меня есть те же данные примера, что и в этом вопросе, и дополнительно объявляю следующие две функции:

CREATE OR REPLACE FUNCTION example.markout_666_example_666_price_table_666_price(_symbol text, _time_of timestamptz, _start interval, _duration interval)
  RETURNS float8
  LANGUAGE sql STABLE STRICT PARALLEL SAFE AS  -- !
$func$
SELECT p.price
FROM   example.price_table p
WHERE  p.symbol = _symbol
AND    p.time_of >= _time_of + _start
AND    p.time_of <= _time_of + _start + _duration
ORDER  BY p.time_of
LIMIT  1;
$func$;

CREATE OR REPLACE FUNCTION example.markout_666_example_666_price_table_666_volume(_symbol text, _time_of timestamptz, _start interval, _duration interval)
  RETURNS float8
  LANGUAGE sql STABLE STRICT PARALLEL SAFE AS  -- !
$func$
SELECT p.volume
FROM   example.price_table p
WHERE  p.symbol = _symbol
AND    p.time_of >= _time_of + _start
AND    p.time_of <= _time_of + _start + _duration
ORDER  BY p.time_of
LIMIT  1;
$func$;
Эти две функции похожи, но ссылаются на разные столбцы. В более общем случае они могут также ссылаться на разные таблицы. Однако я указываю две разные функции, поскольку ввод имени столбца (или другого имени таблицы) в функцию кажется антишаблоном при написании функций Postgres.

Я могу использовать обе эти функции в запросе типа:

SELECT symbol, time_of, example.markout_666_example_666_price_table_666_price(symbol, time_of, '3 hours', '24 hours') as markout_price,
                        example.markout_666_example_666_price_table_666_price(symbol, time_of, '25 hours', '24 hours') as markout_price_2,
                        example.markout_666_example_666_price_table_666_volume(symbol, time_of, '3 hours', '24 hours') as markout_volume
from example.interesting_times it; 
Однако это довольно многословно, и нам нужно написать символы и time_of несколько раз. Если у нас объявлены функции для большего количества таблиц и больше функций этих таблиц, запросы могут стать довольно сложными. Можно ли вместо этого написать что-то вроде:

SELECT symbol, time_of, example.markout('example.price_table', 'price', '3 hours', '24 hours') as markout_price,
                        example.markout('example.price_table', 'price', '25 hours', '24 hours') as markout_price_2,
                        example.markout('example.price_table', 'volume', '3 hours', '24 hours') as markout_volume
from example.interesting_times it; 
где example.markout — конструкция типа макро/метапрограммирования, и оценивается ли эта функция так же, как если бы мы использовали более вебозный синтаксис? Можно ли здесь использовать какую-либо технику, подобную метапрограммированию?

Все, что я могу найти при поиске, это sql_macro в базе данных oracle и эту страницу по «макрокомандам» в устаревшей версии Postgres, которой больше нет в руководстве Postgres.

 07.06.2024 02:16
4
0
102
3
Данный вопрос помечен как решенный
 Ответы 3
Вы можете использовать динамический SQL для удовлетворения своих потребностей, как показано ниже:

CREATE OR REPLACE FUNCTION example.markout(
    _tbl text, 
    _col text, 
    _symbol text, 
    _time_of timestamptz, 
    _start interval, 
    _duration interval
)
RETURNS float8
AS
$func$
DECLARE
    _stmt text;
    _result float8;
BEGIN
    _stmt = FORMAT(
        'SELECT p.%I
         FROM   %I p
         WHERE  p.symbol = %L
         AND    p.time_of >= %L + %L
         AND    p.time_of <= %L + %L + %L
         ORDER  BY p.time_of
         LIMIT  1;', 
         _col, _tbl, _symbol, _time_of, _start, _time_of, _start, _duration
    );

    RAISE NOTICE '%', _stmt;  -- For debugging

    EXECUTE _stmt INTO _result;  -- Fetch the result into a variable

    RETURN _result;  -- Return the fetched result
END;
$func$ LANGUAGE plpgsql STABLE STRICT PARALLEL SAFE;

Это можно вызвать как:

select  markout('example.price_table', 'price', symbol, time_of, '3 hours', '24 hours') as markout_price,
        markout('example.price_table', 'price', symbol, time_of, '25 hours', '24 hours') as markout_price_2,
        markout('example.price_table', 'volume', symbol, time_of, '3 hours', '24 hours') as markout_volume
from example.interesting_times it;
Э&ЕО

 07.06.2024 07:45
Просто создайте одну функцию и выберите только те столбцы, которые вам нужны. Встраивание функции должно работать в вашем случае, а затем ненужные столбцы будут удалены как обычно. Вам просто нужно изменить его на RETURNS TABLE и удалить STRICT.

CREATE OR REPLACE FUNCTION example.price_table_666(_symbol text, _time_of timestamptz, _start interval, _duration interval)
  RETURNS TABLE
  LANGUAGE sql STABLE PARALLEL SAFE AS  -- !
$func$
SELECT
    p.price,
    p.volume
FROM   example.price_table p
WHERE  p.symbol = _symbol
AND    p.time_of >= _time_of + _start
AND    p.time_of <= _time_of + _start + _duration
ORDER  BY p.time_of
LIMIT  1;
$func$;
Затем вы используете это в FROM или латеральном JOIN, например

SELECT
  t.*,
  price1.price,
  price1.volume,
  price2.price AS price2
FROM someTable t
CROSS JOIN example.price_table_666(symbol, time_of, '3 hours', '24 hours') AS price1
CROSS JOIN example.price_table_666(symbol, time_of, '25 hours', '24 hours') AS price2;
В более общем случае с несколькими таблицами вы можете использовать серию UNION ALL с условиями. Опять же, если параметр является константой, то весь союз будет сокращен до соответствующей ветви.

CREATE OR REPLACE FUNCTION example.price_table_666(_tableName text, _symbol text, _time_of timestamptz, _start interval, _duration interval)
  RETURNS TABLE
  LANGUAGE sql STABLE PARALLEL SAFE AS  -- !
$func$
SELECT p.*
FROM (
    SELECT
        p.price,
        p.volume
    FROM   example.price_table p
    WHERE  p.symbol = _symbol
    AND    p.time_of >= _time_of + _start
    AND    p.time_of <= _time_of + _start + _duration
    AND    _tableName = 'price'
    ORDER  BY p.time_of
    LIMIT  1
) p

UNION ALL
SELECT p.*
FROM (
    SELECT
        p.price,
        p.volume
    FROM   example.price_table2 p
    WHERE  p.symbol = _symbol
    AND    p.time_of >= _time_of + _start
    AND    p.time_of <= _time_of + _start + _duration
    AND    _tableName = 'price2'
    ORDER  BY p.time_of
    LIMIT  1
) p
;
$func$;
 07.06.2024 12:50
 Ответ принят как подходящий
Чтобы функция работала для разных таблиц и разных (наборов) столбцов, вам нужен динамический SQL. Делает дизайн более изысканным. Вам необходимо знать свой PL/pgSQL и остерегаться SQL-инъекций!

Если вы не уверены и имеется всего пара справочных таблиц, лучше создайте одну специальную функцию для каждой таблицы, возвращающую супермножество возможных столбцов. Даже я бы сделал это.

Тем не менее, это совершенно безопасная и оптимизированная функция.
Существует несколько продвинутых концепций.

CREATE OR REPLACE FUNCTION f_markout(_tbl regclass
                                   , _symbol text
                                   , _time_of timestamptz
                                   , _start interval
                                   , _duration interval
                                   , VARIADIC _cols text[]  -- last IN param!
                                   , OUT _rec record        -- short syntax
                                    )
  LANGUAGE plpgsql STABLE STRICT PARALLEL SAFE AS
$func$
BEGIN
   EXECUTE format(
      $q$
      SELECT %1$s
      FROM   %2$s p
      WHERE  p.symbol = $1
      AND    p.time_of >= $2
      AND    p.time_of <= $3
      ORDER  BY p.time_of
      LIMIT  1;
      $q$
    , (SELECT string_agg(quote_ident(c), ', ') FROM unnest(_cols) c)  -- %1 (quoted as identifiers!)
    , _tbl                                                            -- %2 (auto-quoted!)                                                    
      )
   USING _symbol                        -- $1
       , _time_of + _start              -- $2
       , _time_of + _start + _duration  -- $3
   INTO _rec;
END
$func$;
рабочий пример

Вызов:

SELECT *
FROM f_markout('price_table', 'GME', '2016-01-02 00:30+0', '3h', '24h', 'price', 'volume') AS p(p1 float8, v1 float8);  -- !!!
Это один из редких случаев, когда функция, возвращающая анонимные записи, действительно имеет смысл.
Обратите внимание, что при вызове требуется список определений столбцов. Используйте любые имена столбцов, но типы данных должны совпадать!

Ваш запрос:

SELECT i.symbol, i.time_of, m1.*, m2.*
FROM   interesting_times i
     , f_markout('price_table' , i.symbol, i.time_of, '3 h', '24 h', 'price', 'volume')     AS m1(price1 float8, volume float8)
     , f_markout('price_table2', i.symbol, i.time_of, '3 h', '24 h', 'price', 'Clown Item') AS m2(price2 float8, "Clown Item" text);
Обратите внимание, как я вызываю функцию в списке FROM. Запятая фактически является коротким синтаксисом для CROSS JOIN LATERAL, что безопасно для моей функции. (Было бы небезопасно для «табличной функции», которая может возвращать 0 строк, тем самым уничтожая все результаты. Поэтому вместо этого мы будем использовать LEFT JOIN.) О LATERAL:

В чем разница между LATERAL JOIN и подзапросом в PostgreSQL?
Таким образом, каждая функция вызывается только один раз. Если бы вы поместили функцию в список SELECT и выполнили ее прямую декомпозицию, это привело бы к множественным вызовам функций для нескольких столбцов результатов. Видеть:

Разделить возвращаемую функцией запись на несколько столбцов
Как избежать многократного вычисления функции с синтаксисом (func()).* в запросе?
Таким образом, мы можем получить доступ к каждой таблице один раз за период времени. Повторное выполнение этого действия для нескольких столбцов результатов также приведет к увеличению затрат.

Вы хотите иметь возможность передавать любое количество имен столбцов. В то же время мы не хотим передавать это как объединенную строку, которая будет открыта для внедрения SQL. Чистое и элегантное решение — это параметр VARIADIC. Чтобы быть однозначным, он должен быть последним в списке параметров IN.

Перед объединением я проверяю, что имя каждого столбца заключено в двойные кавычки, где это необходимо, что делает SQL-инъекцию совершенно невозможной. Имена столбцов должны передаваться с учетом регистра! Видеть:

Как использовать ввод текста в качестве имени столбца в функции Postgres?
Чувствительны ли имена столбцов PostgreSQL к регистру?
SQL-инъекция в функции Postgres и подготовленные запросы
Имя таблицы передается как тип regclass. Автоматически обеспечивает правильное цитирование и немедленно завершается сбоем для несуществующих таблиц. Также позволяет определять схему входных данных или нет. Видеть:

Имя таблицы как параметр функции PostgreSQL
Я передаю значения как значения в EXECUTE с предложением USING. Делает невозможным SQL-инъекцию, а также позволяет избежать затрат и потенциальных ошибок при преобразовании входных данных в текст, объединении и обратном преобразовании в запросе.

Обычный SQL
Напоминаем: простой SQL все равно будет немного быстрее. Более многословно, но менее подвержено ошибкам.
Эквивалент приведенного выше запроса:

SELECT i.symbol, i.time_of, p1.*, p2.*
FROM   interesting_times i
LEFT   JOIN LATERAL (
   SELECT p.price AS price1, volume AS volume1
   FROM   price_table p
   WHERE  p.symbol = i.symbol
   AND    p.time_of >= i.time_of + interval '3h'
   AND    p.time_of <= i.time_of + interval '27h'
   ORDER  BY p.time_of
   LIMIT  1
   ) p1 ON true
LEFT   JOIN LATERAL (
   SELECT p.price AS price2, p."Clown Item"
   FROM   price_table2 p
   WHERE  p.symbol = i.symbol
   AND    p.time_of >= i.time_of + interval '3h'
   AND    p.time_of <= i.time_of + interval '27h'
   ORDER  BY p.time_of
   LIMIT  1
   ) p2 ON true
ORDER  BY 1, 2;
Обратите внимание на LEFT JOIN в этом случае.

рабочий пример


Инструмент для перевода Oracle PL / SQL в Postgresql PL / pgSQL
Вопросы
ORACLE
Инструмент для перевода Oracle PL / SQL в Postgresql PL / pgSQL
Есть ли инструмент (желательно бесплатный), который переводит язык хранимых процедур Oracle PL / SQL на язык хранимых процедур Postgresql PL / pgSQL?

 01.10.2008 19:48
8
0
17 226
4
Данный вопрос помечен как решенный
 Ответы 4
 Ответ принят как подходящий
В http://ora2pg.darold.net/ доступен инструмент, который можно использовать для преобразования схем Oracle в схемы Postgres, но я не уверен, что он также будет переводить хранимые процедуры. Но это может дать начало.

 01.10.2008 19:58
Также существует EnterpriseDB, который в некоторой степени совместим с Oracle, чтобы облегчить переход с Oracle. Версия с совместимостью с Oracle платная, но ее стоит посмотреть, если вы выполняете более одного перевода процедуры.

 01.10.2008 20:07
Долгое время работал над преобразованием Oracle в Postgres. Единственный способ сделать это - вручную. Между двумя языками есть тонкие различия, которые могут вас сбить с толку. Мы пробовали использовать автоматизированный инструмент, но это только усугубило проблему, и в итоге мы испортили результат.

 25.10.2010 20:43
Используйте ora2pg для перевода вашей схемы.

Для хранимых процедур:

Вручную преобразуйте все операторы DECODE () в CASE и все внешние соединения Oracle WHERE (+) старого стиля в явные операторы LEFT OUTER JOIN. Я не нашел для этого инструмента.
Переведите функции PL / SQL в PL / PGSQL (см. Ниже).
Было бы очень хорошо, если бы кто-нибудь для этого запустил проект sourceforge. Подсказка Подсказка...

Вот что я имею в виду для (2) выше:

CREATE OR REPLACE FUNCTION trunc(
  parmDate   DATE    ,
  parmFormat VARCHAR ) 
RETURNS date 
AS $$
DECLARE
  varPlSqlFormat VARCHAR;
  varPgSqlFormat VARCHAR;
BEGIN
  varPgSqlFormat := lower(parmFormat);

  IF varPgSqlFormat IN (
    'syyyy' ,
    'yyyy'  ,
    'year'  ,
    'syear' ,
    'yyy'   ,
    'yy'    ,
    'y'     ) THEN
    varPgSqlFormat := 'year';
  ELSEIF varPgSqlFormat IN (
    'month' ,
    'mon'   ,
    'mm'    ,
    'rm'    ) THEN 
    varPgSqlFormat := 'month';
  ELSEIF varPgSqlFormat IN (
    'ddd' ,
    'dd'  ,
    'j'   ) THEN 
    varPgSqlFormat := 'day';
  END IF;

  RETURN DATE_TRUNC(varPgSqlFormat,parmDate);
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION trunc(
  parmDate   DATE) 
RETURNS date 
AS $$
DECLARE
BEGIN
  RETURN DATE_TRUNC('day',parmDate);
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION last_day(in_date date) RETURNS date 
AS $$
DECLARE
BEGIN
  RETURN CAST(DATE_TRUNC('month', in_date) + '1 month'::INTERVAL AS DATE) - 1;
END;
$$ LANGUAGE plpgsql;


PostgreSQL - функция с локальными переменными - ссылка на столбец неоднозначна
Вопросы
POSTGRESQL
PostgreSQL - функция с локальными переменными - ссылка на столбец неоднозначна
Я рассмотрел другие вопросы, которые соответствуют моей теме, но в моем случае двусмысленность, как мне кажется, исходит от переменной, имя которой совпадает с именем столбца.

Вот упрощенная версия функции, которую я пытаюсь создать:

CREATE OR REPLACE FUNCTION get_user_id(username TEXT) 
RETURNS INTEGER AS $$
  DECLARE
    user_id BIGINT;
    other_param TEXT;
  BEGIN
    SELECT INTO user_id user_id FROM users WHERE users.username = get_user_id.username;

    SELECT INTO other_param users.value FROM users WHERE users.user_id = user_id;

    RETURN user_id;
  END
$$ LANGUAGE PLPGSQL 
Проблема в том, что user_id на правой стороне WHERE обрабатывается как ссылка на столбец.

Мне определенно нужен user_id в локальной переменной, так как он будет использоваться в операциях UPDATE и DELETE далее по функции, но я не получу его в качестве параметра, только имя пользователя.

После некоторого чтения и наличия некоторых проблем с параметрами я понял, что могу использовать get_user_id.username, но он применяется только к параметрам, а не к локальным переменным (если я использую его с переменной, запрос завершится ошибкой, поскольку для get_user_id нет предложения FROM).

Поэтому мне не хватает чего-то (не такого) очевидного в использовании переменных в запросах внутри функции?

--- редактировать

Извините, я слишком упростил функцию, конечно, есть первый запрос, который получает user_id, и эта часть работает нормально.

 30.05.2018 23:03
3
4
2 207
4
Данный вопрос помечен как решенный
 Ответы 4
Не пропала ли фильтрация по логинам? Я думаю, вам нужно что-то вроде:

SELECT users.user_id INTO user_id FROM users WHERE users.username = username;
Таким образом, значение users.user_id будет установлено в переменной user_id после фильтрации имени пользователя.

 30.05.2018 23:11
 Ответ принят как подходящий
Я префикс параметров и переменных, чтобы они меньше конфликтовали с именами столбцов:

CREATE OR REPLACE FUNCTION get_user_id (in_username TEXT) 
RETURNS INTEGER AS $$
  DECLARE
    v_user_id BIGINT;
  BEGIN
    SELECT u.user_id  INTO v_user_id FROM users u WHERE u.user_id = in_user_id;

    RETURN v_user_id;
  END
$$ LANGUAGE PLPGSQL 
Предположительно, вы хотите сравнить имена пользователей:

    SELECT u.user_id  INTO v_user_id FROM users u WHERE u.username = in_username;
 30.05.2018 23:13
https://www.postgresql.org/docs/current/static/plpgsql-implementation.html

Sometimes it is impractical to fix all the ambiguous references in a large body of PL/pgSQL code. In such cases you can specify that PL/pgSQL should resolve ambiguous references as the variable

и так далее ... таким образом:

t=# CREATE OR REPLACE FUNCTION get_user_id(username TEXT)
RETURNS INTEGER AS $$
#variable_conflict use_variable
  DECLARE
    user_id BIGINT;
    other_param TEXT;
  BEGIN
    SELECT INTO user_id users.user_id FROM users WHERE users.username = username;
    RETURN user_id;
  END
$$ LANGUAGE PLPGSQL
;
CREATE FUNCTION
давай проверим:

t=# create table users (user_id int, username text);
CREATE TABLE
t=# insert into users values (1,'a');
INSERT 0 1
t=# select get_user_id('a');
 get_user_id
-------------
           1
(1 row)
Внимание - эта проверка имеет большой смысл, и если вы ее отключите, вы можете получить очень некрасивые и очень незаметные ошибки. Это довольно опасно. Не делай этого, пожалуйста.

Не используйте его, если не видите невидимых ошибок или не держите КАЖДУЮ строку под контролем.

 31.05.2018 09:53
Любая локальная переменная может быть квалифицирована меткой блока

create table foo(a integer);
insert into foo values(10);

do $$
<<mylabel>>
declare
  a int default 5;
  r record;
begin
  select foo.a into r
    from foo
    where foo.a = mylabel.a + 5;
  raise notice '%', r.a;
end;
$$;
NOTICE:  10
DO
Обычно все возможные конфликтные локальные переменные имеют префикс - общий префикс - _.


Как перенести конвейерную функцию Oracle в PostgreSQL
Вопросы
POSTGRESQL
Как перенести конвейерную функцию Oracle в PostgreSQL
Поскольку я новичок в plpgSQL,

Я застрял при переносе запроса Oracle в PostgreSQL.

Запрос Oracle:

create or replace FUNCTION employee_all_case(
   p_ugr_id IN integer,
   p_case_type_id IN integer
)
RETURN number_tab_t PIPELINED
--       LANGUAGE 'plpgsql'
--     COST 100
--     VOLATILE 
--     AS $$
--     DECLARE
is
  l_user_id        NUMBER;
  l_account_id     NUMBER;
BEGIN
  l_user_id      := p_ugr_id;
  l_account_id   := p_case_type_id;
  FOR cases IN
    (SELECT ccase.case_id, ccase.employee_id
     FROM ct_case ccase
       INNER JOIN ct_case_type ctype
         ON (ccase.case_type_id=ctype.case_type_id)
     WHERE ccase.employee_id = l_user_id)
  LOOP
    IF cases.employee_id IS NOT NULL THEN
      PIPE ROW (cases.case_id);
    END IF;
  END LOOP;
  RETURN;
END;
--$$
Когда я выполняю эту функцию, я получаю следующий результат

select * from table(select employee_all_case(14533,1190) from dual)
Как перенести конвейерную функцию Oracle в PostgreSQL

У меня вопрос: я действительно не понимаю конвейерную функцию и как я могу получить в PostgreSQL тот же результат, что и запрос Oracle?

Пожалуйста помоги.

 20.12.2018 13:09
2
1
1 895
4
 Ответы 4
Вы бы переписали это на установить возвращающую функцию:

Измените тип возврата на

RETURNS SETOF integer
и покончить с PIPELINED.

Измените оператор PIPE ROW на

RETURN NEXT cases.case_id;
Конечно, вам придется внести очевидные синтаксические изменения, например, использовать integer вместо NUMBER и поставить IN перед именем параметра.

Но на самом деле писать функцию для этого совсем не обязательно. Сделать это в одном операторе SELECT было бы проще и быстрее.

 20.12.2018 13:20
Конвейерные функции лучше всего переводить в простую функцию SQL, возвращающую таблицу.

Что-то вроде этого:

create or replace function employee_all_case(p_ugr_id integer, p_case_type_IN integer)
   returns table (case_id integer)
as
$$
  SELECT ccase.case_id
  FROM ct_case ccase
     INNER JOIN ct_case_type ctype ON ccase.case_type_id = ctype.case_type_id
  WHERE ccase.employee_id = p_ugr_id
    and cases.employee_id IS NOT NULL;
$$
language sql;
Обратите внимание, что в вашем примере кода не используется второй параметр p_case_type_id.

Использование также более простое:

select * 
from employee_all_case(14533,1190);
 20.12.2018 13:41
Спасибо, ребята, ваше решение было очень полезным.

Нашел результат желания:

-- select * from employee_all_case(14533,1190);

-- drop function employee_all_case

  create or replace FUNCTION employee_all_case(p_ugr_id IN integer ,p_case_type_id IN integer)
returns table (case_id double precision)
  -- PIPELINED
   LANGUAGE 'plpgsql'
COST 100
 VOLATILE 
 AS $$
 DECLARE
 -- is
  l_user_id        integer;
  l_account_id     integer;
BEGIN
  l_user_id      := cp_lookup$get_user_id_from_ugr_id(p_ugr_id);
  l_account_id   := cp_lookup$acctid_from_ugr(p_ugr_id);
  RETURN QUERY SELECT ccase.case_id
    FROM ct_case ccase
    INNER JOIN ct_case_type ctype ON ccase.case_type_id = ctype.case_type_id
    WHERE ccase.employee_id = p_ugr_id
    and ccase.employee_id IS NOT NULL; 
    --return NEXT;
END;
$$


 20.12.2018 14:43
Прежде чем погрузиться в решение, я предоставлю некоторую информацию, которая поможет вам лучше понять. Итак, в основном PIPELINED появился для улучшения распределения памяти во время выполнения.

Как вы все знаете, коллекции будут занимать место, когда они были созданы. Таким образом, чем больше вы используете, тем больше памяти будет выделено.

Конвейерная обработка сводит на нет необходимость создавать огромные коллекции, выводя строки из функции по конвейеру.

экономия памяти и запуск последующей обработки до того, как будут сгенерированы все строки.

Конвейерные табличные функции включают предложение PIPELINED и используют вызов PIPE ROW для выталкивания строк из функции сразу после их создания, а не для создания коллекции таблиц.

By using Pipelined how memory usage will be optimized?

Все очень просто. вместо хранения данных в массиве просто обработайте данные с помощью ряд труб (желаемый тип). Это фактически возвращает строку и обрабатывает следующую строку.

coming to solution in plpgsql

просто, но не рекомендуется при хранении больших объемов данных.
Удалите PIPELINED из декларации возврата и верните массив желаемого типа. что-то вроде RETURNS typrec2[].

Где бы вы ни использовали pipe row (), добавьте эту запись в массив и, наконец, верните этот массив.

создать временную таблицу, например
CREATE TEMPORARY TABLE temp_table (required fields) ON COMMIT DROP;

и вставляем в него данные. Замените ряд труб оператором вставки и, наконец, оператором возврата, например

return query select * from temp_table

** Лучшая ссылка для понимания ТРУБОПРОВОД в Oracle [https://oracle-base.com/articles/misc/pipelined-table-functions]
довольно обычная ссылка на postgres [http://manojadinesh.blogspot.com/2011/11/pipelined-in-oracle-as-well-in.html]
Надеюсь, это поможет кому-то концептуально.


Глобальная переменная на основе сеанса в хранимой процедуре Postgresql?
Вопросы
ORACLE
Глобальная переменная на основе сеанса в хранимой процедуре Postgresql?
В Oracle PL / SQL я могу создать глобальную переменную на основе сеанса с определением пакета. С Postgresql PLpg / SQL это невозможно, поскольку нет пакетов, только независимые процедуры и функции.

Вот синтаксис PL / SQL для объявления g_spool_key как глобального ...

CREATE OR REPLACE PACKAGE tox IS
        g_spool_key spool.key%TYPE := NULL;
        TYPE t_spool IS REF CURSOR RETURN spool%ROWTYPE;
        PROCEDURE begin_spool;
        PROCEDURE into_spool
            (
            in_txt IN spool.txt%TYPE
            );
        PROCEDURE reset_spool;
        FUNCTION end_spool
            RETURN t_spool;
        FUNCTION timestamp
            RETURN VARCHAR2;
    END tox;
Как мне реализовать глобальную переменную на основе сеанса с PLpg / SQL?

 06.01.2009 00:09
9
0
10 677
6
 Ответы 6
Из Форумы Postgresql ...

So, a couple of questions....

Can you declare global values from plpgsql?
If so, is there a way of avoiding namespace pollution? (perhaps the equivalent to Oracle's use of plsql package variables)
plpgsql не имеет глобальных переменных.

 06.01.2009 00:44
PostgreSQL не поддерживает глобальные (сессионные) переменные, но вы должны использовать некоторые хитрости

http://www.pgsql.cz/index.php/PostgreSQL_SQL_Tricks_II#Any_other_session_variableshttp://www.postgresql.org/docs/8.3/static/plperl-global.html

С уважением Павел Стехуле

 06.01.2009 10:03
Вы можете определить некоторые классы пользовательских переменных в своем postgresql.conf и использовать их в качестве переменных соединения в своей хранимой процедуре. См. документы.

Пример использования класса пользовательских переменных imos:

imos=> set imos.testvar to 'foobar';
SET
Time: 0.379 ms
imos=> show imos.testvar;
 imos.testvar
--------------
 foobar
(1 row)

Time: 0.333 ms
imos=> set imos.testvar to 'bazbar';
SET
Time: 0.144 ms
imos=> show imos.testvar;
 imos.testvar
--------------
 bazbar
(1 row)
В хранимых процедурах вы можете использовать встроенную функцию current_setting ('imos.testvar').

 06.01.2009 19:59
К сожалению, в PL / pgSQL нет глобальных переменных, хотя вы можете найти их на других языках PL, которые поставляются с PostgreSQL, в частности, в PL / Perl, PL / Python и PL / Tcl.

 05.09.2009 07:56
Другой вариант - создать временную таблицу и использовать ее для хранения всех ваших временных переменных.

CREATE TEMPORARY TABLE tmp_vars( 
    name varchar(64),
    value varchar(64),
    PRIMARY KEY (name)
);
Вы даже можете создать хранимую процедуру для управления всем, создав таблицу, если она еще не существует. Один для извлечения и один для хранения.

 03.12.2009 02:32
Пример сценария PL/pgsql, который сохраняет и извлекает глобальные переменные из таблицы:

CREATE TABLE global_vars (name TEXT PRIMARY KEY, value TEXT);

CREATE FUNCTION put_var(key TEXT, data TEXT) RETURNS VOID AS '
  BEGIN
    LOOP
        UPDATE global_vars SET value = data WHERE name = key;
        IF found THEN
            RETURN;
        END IF;
        BEGIN
            INSERT INTO global_vars(name,value) VALUES (key, data);
            RETURN;
        EXCEPTION WHEN unique_violation THEN
            -- do nothing, and loop to try the UPDATE again
        END;
    END LOOP;
  END;
' LANGUAGE plpgsql;

CREATE FUNCTION get_var(key TEXT) RETURNS TEXT AS '
  DECLARE
    result TEXT;
  BEGIN
    SELECT value FROM global_vars where name = key INTO result;
    RETURN result;
  END;
' LANGUAGE plpgsql;


CREATE FUNCTION del_var(key TEXT) RETURNS VOID AS '
  BEGIN
    DELETE FROM global_vars WHERE name = key;
  END;
' LANGUAGE plpgsql;

Как массово вставить список Pydantic с помощью SQLAlchemy?
Вопросы
PYTHON
Как массово вставить список Pydantic с помощью SQLAlchemy?
Я пытаюсь вставить список Pydantic в базу данных Postgres с помощью SQlAlchemy, но не могу понять, как это сделать правильно.

Вот мой код:

Модель
class Material(Base):
    __tablename__ = 'materials'

    sap_code = Column(String, primary_key=True, nullable=False)
    sap_name = Column(String, nullable=False)
    coating = Column(String, nullable=True)
    hs_code = Column(String, nullable=True)
    quantity = Column(String, nullable=True)
    esavdo_code = Column(String, nullable=True)
    esavdo_name = Column(String, nullable=True)
    series = Column(String, nullable=True)

Схема
class MaterialBase(BaseModel):
    sap_code: str
    sap_name: str
    coating: Optional[str]
    hs_code: Optional[str]
    quantity: Optional[str]
    esavdo_code: Optional[str]
    esavdo_name: Optional[str]
    series: Optional[str]


class MaterialsList(BaseModel):
    Items: List[MaterialBase]

    class Config:
        orm_mode = True
Вставить функцию
@router.post('/update-db', status_code=status.HTTP_200_OK, response_model=schemas.MaterialBase)
async def add_new_materials(payload: schemas.MaterialBase, db: Session = Depends(get_db)):
    db.add_all(payload)  
    db.commit()    
    db.refresh(payload)    
    return payload
Шаблон полезной нагрузки
{
  "Items": [
    {
      "sap_code": "String",
      "sap_name": "String",
      "coating": "String",
      "hs_code": "String",
      "quantity": "String",
      "esavdo_code": "String",
      "esavdo_name": "String",
      "series": "String"
    },
    {
      "sap_code": "String",
      "sap_name": "String",
      "coating": "String",
      "hs_code": "String",
      "quantity": "String",
      "esavdo_code": "String",
      "esavdo_name": "String",
      "series": "String"
    }
  ]
}
Ошибка
{
  "detail": [
    {
      "loc": [
        "body",
        "sap_code"
      ],
      "msg": "field required",
      "type": "value_error.missing"
    },
    {
      "loc": [
        "body",
        "sap_name"
      ],
      "msg": "field required",
      "type": "value_error.missing"
    }
  ]
}
Я понимаю, что моя схема и модель БД не совпадают, поэтому я попытался проанализировать полезную нагрузку вручную, но у меня возникли проблемы с сопоставлением.

 11.05.2023 10:50
0
1
75
2
Данный вопрос помечен как решенный
 Ответы 2
Для массовой вставки лучше использовать необработанные запросы.

db.query(
    `INSERT INTO test_table(
      name,
      age,
      mark
    )
    SELECT * FROM UNNEST (
      $1::text[],
      $2::int[],
      $3::int[]
    )`,
    [
      ["James", "Andrew"],
      [25, 27],
      [464, 745],
    ],
  )
 11.05.2023 11:17
 Ответ принят как подходящий
Я придумал этот кусок кода:

@router.post('/update-db', status_code=status.HTTP_200_OK, response_model=schemas.MaterialsList)
async def add_new_materials(payload: schemas.MaterialsList, db: Session = Depends(get_db)):
    materials_list = payload.dict()['Items']
    for material in materials_list:
        new_material = models.Material(**material)
        db.add(new_material)
        db.commit()
        db.refresh(new_material)
    return payload
Вместо массовой вставки я решил добавить по одному для простоты, и это не повлияет на производительность в моем случае.

Зациклить каждый элемент массива Postgresql
Вопросы
POSTGRESQL
Зациклить каждый элемент массива Postgresql
У меня есть функция, в которой я хочу перебросить каждый элемент массива в цикл. Я получаю строку на входе вроде 'tab1 # tab2 # tab3' ... Каждый элемент строки должен быть разделен (по #), чтобы получить tab1, tab2, tab3 в myArray. Моя функция:

CREATE OR REPLACE FUNCTION funcA(
myUid integer,
mytable_name varchar,
state varchar)
RETURNS void AS

$BODY$


declare

TABarray varchar[];
indx int;

BEGIN  


    select REGEXP_REPLACE('{'||myTABLE_NAME||'}','#','','g') into TABarray;


    for indx in 1..array_length(TABarray, 1) loop

    execute 'update ' || TABarray(indx) || ' set CODE_STATO = ''' || state || ''' where uid = ' ||  myUid || 'and CODE_STATO <> ''N'' ';
    raise notice 'i: %', TABarray[ indx ];

    end loop;

    END; $BODY$
    LANGUAGE plpgsql stable
В результате я ожидаю 3 разделенных строки, например:

-tab1

-tab2

-tab3

Прямо сейчас myFunction print {tab1tab2tab3}.

   select oms_write_stato (10, 'tab1#tab2#tab3', '')
Что я делаю не так?

Заранее спасибо!

 05.10.2018 17:23
0
3
43
2
Данный вопрос помечен как решенный
 Ответы 2
 Ответ принят как подходящий
Вы можете использовать string_to_array для разделения строки на массив. Кроме того, вы использовали () для ссылки на элементы индекса вместо [].

CREATE OR replace FUNCTION funca( myuid integer, mytable_name varchar, state varchar) 
    returns void AS 
    $BODY$
    DECLARE 
    tabarray VARCHAR[];
    indx    int;
    BEGIN 
      SELECT string_to_array(mytable_name ,'#') 
      INTO   tabarray; 
      for indx IN 1..array_length(tabarray, 1) 
      LOOP 
     --check the o/p of this notice below to see if update statement is correct
     --raise notice '%', 'update ' || tabarray[indx] || ' set CODE_STATO = ''' || state || ''' where uid = ' || myuid || 'and CODE_STATO <> ''N'' ';
        execute 'update ' || tabarray[indx] || ' set CODE_STATO = ''' || state || ''' where uid = ' ||  myUid || ' and CODE_STATO <> ''N'' ';
      raise notice 'i: %', tabarray[ indx ]; 
    END LOOP;
    END;
 $BODY$ language plpgsql stable;
 05.10.2018 18:04
Для этого в PL / pgSQL есть инструкция FOREACH IN ARRAY:

Ваша задача может быть записана примерно так:

-- Don't use case mixed identifiers (prohibit camel notation)
create or replace function funca(uid integer,
                                 tablenames varchar,
                                 state varchar)
returns void as $$
declare tablename text;
begin
  foreach tablename in array string_to_array(tablenames, '#')
  loop
    execute format('update %I set code_stato = $1 where uid = $2 and code_state <>'N',
                   tablename)
      using state, uid;
  end loop;
end;
$$ language plpgsql;
Примечания:

не смешивайте верхние и нижние символы в идентификаторах
не смешивайте верхние и нижние ключевые слова - есть несколько вариантов - ключевые слова в верхнем регистре или все в нижнем регистре, но сочетание плохо для чтения
когда вы используете динамический SQL, затем дезинфицируйте свои данные, прежде чем использовать их в динамическом запросе - используйте функции quote_ident, quote_literal или функцию format с безопасными заполнителями и, когда это возможно, переходите с предложением USING.
В postgres есть типы массивов - использование str1#str2#str3#str4 в Postgres немного неясно - используйте собственные массивы, такие как ARRAY['str1','str2','str3','str4'].


Как прочитать результат функции A из функции B
Вопросы
SQL
Как прочитать результат функции A из функции B
У меня есть две функции postgres. Функция A вызывает функцию B, которая возвращает 2 записи типа varchar.

Функция А

 CREATE OR REPLACE FUNCTION A(
 IN r1 character varying,
 IN r2 character varying,
 OUT code character varying,
 OUT msg character varying)

 RETURNS record AS
 $BODY$

 BEGIN  

 perform function B(r1,r2);

 END; $BODY$
 LANGUAGE plpgsql VOLATILE
При выполнении

 select * from function A ('r1', 'r2')
Я получил недействительный код столбца и сообщение.

Выполняется функция A, функция B работает нормально, код возврата и сообщение. Как я могу прочитать эти два возвращаемых значения из функции A?

Заранее спасибо!

 03.10.2018 11:12
1
0
43
2
Данный вопрос помечен как решенный
 Ответы 2
 Ответ принят как подходящий
Когда вы выполняете PERFORM, результат вашего SELECT отбрасывается, что не является тем, что мы ищем.

Если у вас есть функция, объявленная с параметрами OUT, вам необходимо заполнить их значениями, используя

SELECT ... INTO ...
Таким образом, способ сделать это - получить значения, исходящие из функции B, а затем заполнить ими свои выходные параметры, например:

SELECT * INTO code, msg FROM B(r1, r2);
При этом ваша функция будет выглядеть так:

CREATE OR REPLACE FUNCTION A(
 IN r1 character varying,
 IN r2 character varying,
 OUT code character varying,
 OUT msg character varying)
RETURNS record AS
$BODY$
BEGIN  
  SELECT * INTO code, msg FROM B(r1, r2);
END; 
$BODY$
LANGUAGE plpgsql VOLATILE;
И вы должны называть это так:

SELECT * FROM A('first_arg', 'second_arg');
Примечания:

Подумайте, действительно ли вам нужен VOLATILE. Возможно, вам подойдет только STABLE, в зависимости от кода функции B. Это может немного ускорить процесс
Чтобы сократить объявление типа данных, character varying - это то же самое, что и varchar. Рассмотрите возможность его использования.
 03.10.2018 11:34
Вы можете использовать SELECT INTO, как упоминалось ранее, но этот оператор предназначен не для простых выборок (имеет предложение FROM). Использование SELECT INTO только для получения результата двух или более функций переменных может повлиять на производительность. Лучше использовать составную переменную или переменную записи и назначить команду. Просто:

DECLARE r record;
BEGIN
  r := B(r1, r2);
  RAISE NOTICE 'code: %, message: %', r.code, r.message;
  ...

Как уменьшить стоимость set_bit в Postgres?
Вопросы
POSTGRESQL
Как уменьшить стоимость set_bit в Postgres?
Я запускаю PostgreSQL 9.6 и провожу эксперимент со следующей структурой таблицы:

CREATE TABLE my_bit_varying_test (
  id SERIAL PRIMARY KEY,
  mr_bit_varying BIT VARYING
);
Чтобы понять, какой производительности я мог бы ожидать, если бы я сбрасывал биты на 100000-битных данных одновременно, я написал небольшой блок PL / pgSQL, подобный этому:

DO $$
DECLARE
  t  BIT VARYING(100000) := B'0';
  idd INT;
BEGIN
  FOR I IN 1..100000
  LOOP
    IF I % 2 = 0 THEN
      t := t || B'1';
    ELSE
      t := t || B'0';
    end if;
  END LOOP ;

  INSERT INTO my_bit_varying_test (mr_bit_varying) VALUES (t) RETURNING id INTO idd;
  UPDATE my_bit_varying_test SET mr_bit_varying = set_bit(mr_bit_varying, 100, 1) WHERE id = idd;
  UPDATE my_bit_varying_test SET mr_bit_varying = set_bit(mr_bit_varying, 99, 1) WHERE id = idd;
  UPDATE my_bit_varying_test SET mr_bit_varying = set_bit(mr_bit_varying, 34587, 1) WHERE id = idd;
  UPDATE my_bit_varying_test SET mr_bit_varying = set_bit(mr_bit_varying, 1, 1) WHERE id = idd;

  FOR I IN 1..100000
  LOOP
    IF I % 2 = 0 THEN
      UPDATE my_bit_varying_test
      SET mr_bit_varying = set_bit(mr_bit_varying, I, 1)
      WHERE id = idd;
    ELSE
      UPDATE my_bit_varying_test
      SET mr_bit_varying = set_bit(mr_bit_varying, I, 0)
      WHERE id = idd;
    end if;
  END LOOP ;
END
$$;
Однако когда я запускаю PL / pgSQL, это занимает несколько минут, и я сузил его до цикла for, который обновляет таблицу. Он медленно работает из-за сжатия на колонке BIT VARYING? Есть ли способ улучшить производительность?

Редактировать Это смоделированный упрощенный пример. На самом деле это связано с тем, что у меня работают десятки тысяч заданий, каждое из которых должно сообщать о своем статусе, который обновляется каждые несколько секунд.

Теперь я мог бы нормализовать его и иметь таблицу «состояния выполнения», в которой будут храниться все рабочие и их статусы, но это потребует хранения десятков тысяч строк. Итак, я думал, что я мог бы использовать растровое изображение для хранения клиента и статуса, и маска сообщала бы мне в порядке, какие из них были запущены, а какие завершены. Передний бит будет использоваться как «бит ошибки», поскольку мне не нужно точно знать, какой клиент отказал, только то, что сбой существует.

Так, например, у вас может быть 5 рабочих на одну работу. Если все они выполнены, статус будет «01111», что указывает на то, что все задания выполнены, и ни одно из них не завершилось ошибкой. Если рабочий номер 2 терпит неудачу, то статус будет «111110», что указывает на то, что произошла ошибка и все рабочие процессы завершены, кроме последнего.

Таким образом, вы можете рассматривать это как надуманный способ обработки большого количества статусов заданий. Конечно, я готов к другим идеям, но даже если я пойду этим путем, на будущее я все равно хотел бы знать, как быстро обновить переменную, потому что мне любопытно.

 22.09.2018 20:46
1
9
193
2
Данный вопрос помечен как решенный
 Ответы 2
Вы можете попробовать подход, основанный на наборах, чтобы заменить второй цикл. Подход, основанный на наборах, обычно более толстый, чем цикл. Используйте generate_series(), чтобы получить индексы.

UPDATE my_bit_varying_test
       SET mr_bit_varying = set_bit(mr_bit_varying, gs.i, abs(gs.i % 2 - 1))
       FROM generate_series(1, 100000) gs(i)
       WHERE id = idd;
Также рассмотрите возможность создания индекса на my_bit_varying_test (id), если у вас его еще нет.

 23.09.2018 23:01
 Ответ принят как подходящий
Если ваша проблема действительно заключается в сжатии TOAST, вы можете просто отключить его для этой таблицы:

ALTER TABLE my_bit_varying_test SET STORAGE EXTERNAL;


После обновления триггера в postgresql не работает должным образом
Вопросы
POSTGRESQL
После обновления триггера в postgresql не работает должным образом
Созданный ниже триггер в postgresql (для выполнения той же логики, что и триггер sqlserver, определенный в приведенном ниже коде)

CREATE TABLE IF NOT EXISTS lookup_dbo.finlstatassetdesignation(
    finlstatassetdesignation CHAR(10) NOT NULL,
    finlstatassetdesignationdesc VARCHAR(50) NOT NULL,
    updoperation NUMERIC(5,0) NOT NULL DEFAULT (0),
    upddate TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CLOCK_TIMESTAMP()
);
CREATE OR REPLACE FUNCTION TR_FinlStatAssetDesignation_U_TrFunc()
RETURNS TRIGGER LANGUAGE  plpgsql
   AS $$
   DECLARE
   AtDateTime  TIMESTAMP;
   SWV_error INTEGER;
   SWV_RowCount INTEGER;
BEGIN
   SWV_error := 0;
   GET DIAGNOSTICS SWV_RowCount = ROW_COUNT;
   IF (SWV_RowCount = 0) then 
      RETURN NULL;
   end if;                                  
   AtDateTime := LOCALTIMESTAMP;                                    

   if OLD.FinlStatAssetDesignation IS DISTINCT FROM NEW.FinlStatAssetDesignation then

      RAISE EXCEPTION 'Invalid attempt to update OID FinlStatAssetDesignation in FinlStatAssetDesignation';
      -- Rollback 
      RETURN NULL;
   end if;                                      

   if not OLD.UpdDate IS DISTINCT FROM NEW.UpdDate then

      SWV_error := 0;
      begin
         UPDATE lookup_dbo.finlstatassetdesignation
         SET UpdDate = AtDateTime
         WHERE a.FinlStatAssetDesignation = NEW.FinlStatAssetDesignation;
         EXCEPTION
         WHEN OTHERS
         THEN
            SWV_error := -1;
            RETURN NULL;
      end;
      if SWV_error <> 0 then

         -- RollBack 
         RETURN NULL;
      end if;

      SWV_error := 0;
   end if;

   RETURN NULL;
   END; $$;
CREATE Trigger tr_finlstatassetdesignation_u
    AFTER Update on lookup_dbo.finlstatassetdesignation FOR EACH ROW
    EXECUTE PROCEDURE lookup_dbo.tr_finlstatassetdesignation_u_trfunc();                                        
Исходный код триггера SQL Server: -

-- Add Update Trigger to FinlStatAssetDesignation                                       
CREATE Trigger TR_FinlStatAssetDesignation_U on FinlStatAssetDesignation for Update NOT FOR REPLICATION as                                      
    IF (@@RowCount = 0) return                                  
    DECLARE @AtDateTime datetime                                    

    SELECT @AtDateTime = GETDATE()                                  

if Update(FinlStatAssetDesignation)                                     
Begin                                       
    RaisError( 'Invalid attempt to update OID FinlStatAssetDesignation in FinlStatAssetDesignation', 16, 1 )                                    
    Rollback Tran                                   
    return                                  
end                                     


if not Update(UpdDate)                                      
begin                                       
    Update a                                    
    set UpdDate = @AtDateTime                                   
    from FinlStatAssetDesignation a, Inserted i                                 
    where a.FinlStatAssetDesignation = i.FinlStatAssetDesignation                                   
    if @@ERROR<>0                                   
    begin                                   
        RollBack tran                               
        return/* Execution stops here! */                               
    end                                 
end                                     
go  
Преобразованный триггер в postgresql и даже исходный sqlserver состоит из двух частей ... для первой ... кажется, что преобразование сообщений в postgresql работает, но вторая часть не работает ... пожалуйста, помогите

 18.09.2018 09:26
1
3
142
2
Данный вопрос помечен как решенный
 Ответы 2
Это твоя проблема:

GET DIAGNOSTICS SWV_RowCount = ROW_COUNT;
IF (SWV_RowCount = 0) THEN 
   RETURN NULL;
END IF;
Поскольку вы выполняете это в начале функции и не было предыдущего SQL-оператора в функции, значение всегда будет нулевым, и триггер немедленно завершит работу.

Кажется, вы предполагаете, что ROW_COUNT будет содержать количество строк, измененных в операторе, запустившем функцию, но это не так. Он содержит количество строк, измененных последним оператором SQL в самой этой функции.

Вы можете просто снять эту галочку. Функция триггера будет вызываться для каждой измененной строки, поэтому она не будет вызываться вообще, если не будет изменена ни одна строка.

Наконец, RETURN NEW; из функции триггера является хорошей привычкой, если у вас нет веской причины предотвратить выполнение других триггеров AFTER UPDATE для этой функции.

 18.09.2018 09:43
 Ответ принят как подходящий
Если вы хотите предотвратить определенные обновления и хотите изменить значения строки обновления (или вставленной), не используйте триггер AFTER. Используйте триггер BEFORE и просто назначьте желаемое значение. Кроме того, вы не можете остановить ОБНОВЛЕНИЕ в триггере AFTER.

Проверка количества затронутых строк в триггере уровня строки совершенно бесполезна. Если запускается триггер с номером всегда1.

Если я правильно понимаю ваши намерения, ваш упрощенный код должен быть:

CREATE OR REPLACE FUNCTION tr_finlstatassetdesignation_u_trfunc()
   RETURNS TRIGGER 
   LANGUAGE plpgsql
AS 
$$
BEGIN
   if old.finlstatassetdesignation IS DISTINCT FROM new.finlstatassetdesignation then
      RAISE EXCEPTION 'Invalid attempt to update FinlStatAssetDesignation in FinlStatAssetDesignation';
      -- Rollback 
      RETURN NULL;
   end if;                                      

   if not old.upddate IS DISTINCT FROM new.upddate then
     new.upddate := clock_timestamp();  
   end if;

   -- this is important in a BEFORE trigger!
   RETURN new;
END
$$;
Вместе со следующим определением триггера:

CREATE Trigger tr_finlstatassetdesignation_u
    BEFORE Update on lookup_dbo.finlstatassetdesignation 
    FOR EACH ROW
    EXECUTE PROCEDURE lookup_dbo.tr_finlstatassetdesignation_u_trfunc();
Онлайн-пример: http://rextester.com/EWILW61724

@a_horse_with_no_name ... мои извинения за возникновение путаницы ... я просто вставил исходный код сервера sql, который я преобразовал в sqlserver ... чтобы вам было легче понять ... Я хочу такую ​​же логику триггер sqlserver (вставлен выше) в postgresql ... похоже, только после триггера обновления

— 
rock_techie
 18.09.2018 14:37
@rock_techie: что это за "логика"? Единственное, что я вижу, это обновить столбец upddate и предотвратить изменения в finlstatassetdesignation. Если это действительно полная логика, невозможно воспроизвести сложность триггера T-SQL в Postgres. Код в моем ответе сделает это точно. Если в вашем коде скрыто больше логики, вам нужно объяснить, что это такое. В SQL Server нет концепции триггера «до», не говоря уже о триггере на уровне строки. Это так просто, как кажется в Postgres. Не нужно слишком усложнять

— 
a_horse_with_no_name
 18.09.2018 14:39
@a_horse_with_no_name .... да, это единственная логика кода SQLSERVER, которую я вставил выше .... я намерен воспроизвести то же самое в postgresql ..... который, как вы подтвердили, ваш код будет делать то же самое в posgresql ... . однако у меня все еще есть одно сомнение ... как я могу проверить обновление столбца с новой меткой времени, т.е. протестировать вторую часть этого триггера самостоятельно?

— 
rock_techie
 18.09.2018 14:49
@rock_techie, почему вы хотите реплицировать что-то бесполезно неэффективное в Postgres? Если вы используете оператор UPDATE в триггере AFTER, вы, по сути, обновляете одну и ту же строку дважды каждый раз, когда меняете ее. Это неэффективно и медленно. Назначение новое значение - это правильный и эффективный способ сделать это в Postgres. Вы должны понять, что Postgres сильно отличается от SQL Server, и там все по-другому. Если вы настаиваете на том, чтобы делать что-то «по-Microsoft» в Postgres, вы останетесь только с медленной системой и неподдерживаемым кодом.

— 
a_horse_with_no_name
 18.09.2018 14:53
@a_horse_with_no_name ... rextester.com/JIUZGS76155, пожалуйста, проверьте мой вывод ... он также обновляет столбец напрямую

— 
rock_techie
 18.09.2018 15:21
@rock_techie: а разве это не твоя "логика"? Если столбец upddateнет изменен оператором обновления, то триггер должен его обновить?

— 
a_horse_with_no_name
 18.09.2018 15:24
@a_horse_with_no_name ... да, действительно ... однако в вашем примере ... "- ничего не изменится, если столбец будет обновлен напрямую" ......... это неверно, так как это позволяет мне изменить обновление столбца напрямую

— 
rock_techie
 18.09.2018 15:35
@rock_techie: но это то, что делает ваш код T-SQL. if not Update(UpdDate) then не имеет части else, что означает, что если столбец был явно изменен в операторе UPDATE, ваш исходный триггер также не изменит его.

— 
a_horse_with_no_name
 18.09.2018 15:39
Я вижу спасибо, но я просто хотел обновить ваш пример ... большое спасибо за вашу помощь

— 
rock_techie
 18.09.2018 16:04


Перебрать составной массив в plpgsql
Вопросы
POSTGRESQL
Перебрать составной массив в plpgsql
Я хочу определить составной массив, инициализировать три элемента массива а затем перебрать каждый из элементов в цикле. Мне нужен этот цикл, и я перебираю его как требование для решения имеющейся у меня проблемы.

В течение нескольких дней я пытался написать код и обратиться к нескольким ресурсам в сети, но это не сработало. Может кто поможет с этим. Вот код, даже первая инициализация не работает, поэтому у меня нет кода для остальной части требования (для итерации после инициализации)

CREATE TYPE temp_n_inv_item AS (
    name            text,
    supplier_id     integer,
    price           numeric
);



CREATE OR REPLACE function temp_n_bulk_load2()
returns void
as
$$
declare
   v_t temp_n_inv_item[]; 


BEGIN


      v_t[1] := ARRAY ['Item1',1,10];
      v_t[2] := ARRAY ['Item2',2,20];
      v_t[3] := ARRAY ['Item3',3,30];


 --  raise notice 'first array % ', v_t[1];
--raise notice 'first array % ', v_t[2];
--raise notice 'first array % ', v_t[3];

--iterate though each of the v_t array in a loop 

null; --added as a temporary placeholder 

END;
$$
language plpgsql;

--select temp_n_bulk_load2()
С уважением, DbuserN

ОБНОВИТЬ Удивительно, но после публикации вопроса я увидел, что одна ссылка и назначение теперь работают, но я пытаюсь изменить тип возвращаемого значения на массив, который не работает (что является дополнительной проблемой), хотя назначение теперь исправлено, как показано ниже, но ошибка, приведенная ниже, - «ОШИБКА: невозможно вернуть несоставное значение из функции, возвращающей составной тип»Пересмотренный код :

CREATE OR REPLACE function temp_n_bulk_load2()
returns temp_n_inv_item
as
$$
declare
   v_t temp_n_inv_item[]; 


BEGIN


      v_t[1] := row ('Item1',1,10);
      v_t[2] := row ('Item2',2,20);
      v_t[3] := row ('Item3',3,30);


  raise notice 'first array % ', v_t[1];
raise notice 'first array % ', v_t[2];
raise notice 'first array % ', v_t[3];

--iterate though each of the v_t array in a loop 

null; --added as a temporary placeholder 
return v_t;

END;
$$
language plpgsql;
 15.09.2018 09:57
2
0
787
2
Данный вопрос помечен как решенный
 Ответы 2
 Ответ принят как подходящий
Здесь вы создаете массив типа данных, который вы сгенерировали с помощью

CREATE TYPE temp_n_inv_item AS (
    name            text,
    supplier_id     integer,
    price           numeric
);
Поэтому просто верните массив типа данных как temp_n_inv_item[].

CREATE OR REPLACE FUNCTION adm.temp_n_bulk_load2()
  RETURNS boolean AS
$BODY$
declare
   v_t temp_n_inv_item[]; 


BEGIN

/*CREATE TYPE temp_n_inv_item AS (
    name            text,
    supplier_id     integer,
    price           numeric
);*/
      v_t[1] := row ('Item1',1,10);
      v_t[2] := row ('Item2',2,20);
      v_t[3] := row ('Item3',3,30);


raise notice 'first array % ', v_t[1];
raise notice 'first array % ', v_t[2];
raise notice 'first array % ', v_t[3];

--iterate though each of the v_t array in a loop 
//updated
  FOR cnt in 1..(array_length(v_t,1))
            LOOP
Raise notice ' array value % ', v_t[cnt];

 END LOOP;

return true;

END;
$BODY$
LANGUAGE plpgsql VOLATILE
COST 100;
Надеюсь, это решит вашу проблему.

 15.09.2018 11:43
В PLpgSQL есть специальный оператор для итерации по массиву. Для больших массивов это намного эффективнее (для небольших массивов не слишком значимо):

create type tp as (a int, b int);

do $$
declare a tp[];
          r record;
begin
  /* composite array initialization */
  a = array[(1,2),(3,4),(5,6)];

  /* iterate over a array */
  foreach r in array a
  loop
    raise notice '% % %', r, r.a, r.b;
  end loop;
end;
$$;

NOTICE:  (1,2) 1 2
NOTICE:  (3,4) 3 4
NOTICE:  (5,6) 5 6
DO
Не бойтесь читать документация.

Спасибо, Стив. да, это тоже отлично подойдет для моих нужд. Я читал документацию, но думаю, что на данный момент для меня это слишком много, чтобы найти решение моей потребности после ее изучения, но я действительно сослался на этот документ.

— 
dbusern
 17.09.2018 19:54


ТАБЛИЦА ТИПОВ, от Oracle к PostgreSQL
Вопросы
SQL
ТАБЛИЦА ТИПОВ, от Oracle к PostgreSQL
В настоящее время я переношу некоторые процедуры с Oracle на Postgres, эти процедуры используют тип, созданный для обработки неизвестного количества значений:

TYPE array_text IS TABLE OF VARCHAR2 (50);
Таким образом, они могут объявить такую ​​переменную, как:

myValues in array_text;
И использовать его позже таким образом:

myValues(1) := 'VALUE1';
myValues(2) := 'VALUE2';
...
Итак, я учился и пытался воспроизвести это поведение с помощью Postgres, но до сих пор не могу найти правильный способ. Я пробовал создать составной тип, например:

CREATE TYPE array_text AS (
    val varchar(50)
);
Или

CREATE TYPE array_text AS (
    v varchar(50)[]
);
Однако я не могу использовать их так же, как используется оригинал, и на самом деле я не смог создать успешный тест.

Как я мог добиться такого поведения или чего-то подобного? Таким образом, я могу устанавливать и получать значения и даже считать его длину, как в Oracle.

 13.09.2018 00:34
2
0
4 904
2
Данный вопрос помечен как решенный
 Ответы 2
postgres не разрешает таблицы (или составные типы) с безымянными столбцами

в отличие от таблиц массивы могут быть многомерными, а также могут начинаться не с [1] или [0], поэтому вам может потребоваться проверить, что ввод имеет правильную форму (если только неправильный ввод неявно вызывает ошибку)

CREATE TYPE array_text AS (
    val varchar(50)[]
);
но это создает составной тип с одним атрибутом, который является массивом ... поэтому вам нужно использовать .val для доступа к массиву.

jasen=# do $$ 
declare a array_text;
begin 
   a.val[0]='won';
   a.val[1]='too';
   raise notice 'len=%',array_length(a.val,1); end;
$$;
NOTICE:  len=2
DO
но если вы объявляете массив в строке, вы можете просто использовать простое имя.

jasen=# do $$ 
declare a varchar(50)[];
begin 
   a[5]='eigh';
   a[6]='bee';
   raise notice 'len=%',array_length(a,1); end;
$$;
NOTICE:  len=2
DO
 13.09.2018 07:07
 Ответ принят как подходящий
В Postgres это намного проще, чем в Oracle - вам не нужно определять тип коллекции. Просто объявите массив.

Разумная и самая эффективная замена TYPE array_text IS TABLE OF VARCHAR2 (50); - это text[] в Postgres.

Чтобы получить длину массива, используйте cardinality(). Вам не нужен специальный метод для увеличения его емкости, просто присвойте значение нужному индексу. Единственное существенное отличие состоит в том, что в Postgres нет (простого) способа сокращаться массива.

declare
   myValues text[];
   num_values int;
begin

  myValues[1] := 'VALUE1';
  myValues[2] := 'VALUE2';

  num_values := cardinality(myvalues); // yields 2

  myValues[3] := 'VALUE3';
  num_values := cardinality(myvalues); // yields 3
end;
Чтобы расширить ответ: вы также можете использовать такие типы таблиц. Таким образом, вам не нужно определять промежуточный тип коллекции «таблица», просто чтобы использовать тип таблицы для массива.

create table person
(
  id integer,
  firstname text,
  lastname text
);
Тогда вы можете использовать

do
$$
declare
  people_list person[];
begin
  people_list[1] := row(42, 'Arthur', 'Dent')::person;
  raise notice 'Name %', people_list[1].firstname;
end;
$$
Oracle также имеет CARDINALITY() функция - просто вы также можете использовать myValues.COUNT, и это, по-видимому, более известное решение Oracle.

— 
MT0
 13.09.2018 15:12


Функция Postgresql, возвращающая количество записей
Вопросы
POSTGRESQL
Функция Postgresql, возвращающая количество записей
Я хотел бы создать функцию, возвращающую количество записей, которые может сгенерировать выражение SQL, переданное в качестве параметра. Может ли кто-нибудь направить меня на правильный путь?

 09.09.2018 17:05
1
2
72
2
Данный вопрос помечен как решенный
 Ответы 2
Ваша функция должна возвращать некоторый (запись) тип SETOF. Затем вы используете синтаксис RETURN NEXT для возврата каждой строки.

См. Пример на странице документации. https://www.postgresql.org/docs/current/static/plpgsql-control-structures.html#id-1.8.8.8.3.4

 09.09.2018 18:18
 Ответ принят как подходящий
В простом SQL вы можете получить количество возвращенных строк, используя производную таблицу (поместив запрос в подзапрос в предложении FROM) следующим образом:

select count(*)
from (
    <your query>
    ) s;
Сделайте то же самое в функции plpgsql. Вам нужен динамическая команда, поскольку функция должна работать для любого допустимого SQL-запроса:

create or replace function number_of_rows(query text)
returns bigint language plpgsql as $$
declare
    c bigint;
begin
    execute format('select count(*) from (%s) s', query) into c;
    return c;
end $$;
Пример:

select number_of_rows('select * from generate_series(1, 3)');

 number_of_rows 
----------------
              3
(1 row) 
Thanyou klin Я следовал вашим указаниям, и он отлично работает! :-)

— 
Jacopo Russo
 09.09.2018 21:46


Возврат в PLPGSQL
Вопросы
PLPGSQL
Возврат в PLPGSQL
Я создал эту процедуру хранилища для возврата row_version, если идентификатор организации находится в базе данных.

CREATE OR REPLACE FUNCTION sote.validate_row_version(a BIGINT, b BIGINT) 
RETURNS text AS $$
DECLARE
  ret RECORD;
  v_error_stack text;
BEGIN
  SELECT row_version INTO ret
  FROM sote.organizations
  WHERE organization_id = a;
  EXCEPTION
    WHEN NO_DATA_FOUND THEN
      RAISE EXCEPTION 'Organization Id (%) was not found', myOrganizationID;
      GET STACKED DIAGNOSTICS v_error_stack = PG_EXCEPTION_CONTEXT;
      RETURN to_json(v_error_stack);
  RETURN '0';
END;$$ LANGUAGE plpgsql;
Когда я запускаю эту команду,

SELECT sote.validate_row_version(2,4);
Я получаю следующую ошибку. Не понимаю почему. Любая помощь была бы замечательной.

ERROR: control reached end of function without RETURN
 11.08.2018 21:59
0
0
397
2
 Ответы 2
Есть 2 проблемы:

ваш оператор select не вызовет исключения, если вы не укажете SELECT ... INTO STRICT

ваш оператор RETURN '0' является частью обработчика исключений и никогда не будет выполнен.

Таким образом, вы можете переписать свою функцию как

CREATE OR REPLACE FUNCTION sote.validate_row_version(a BIGINT, b BIGINT) 
RETURNS text AS $$
DECLARE
  ret RECORD;
  v_error_stack text;
BEGIN
  SELECT row_version INTO STRICT ret
  FROM sote.organizations
  WHERE organization_id = a;
  RETURN '0';
  EXCEPTION
    WHEN NO_DATA_FOUND THEN
      RAISE EXCEPTION 'Organization Id (%) was not found',   myOrganizationID;
      GET STACKED DIAGNOSTICS v_error_stack = PG_EXCEPTION_CONTEXT;
      RETURN to_json(v_error_stack);

END;$$ LANGUAGE plpgsql;
 11.08.2018 22:37
Вам нужно переместить RETURN '0', чтобы он запускался перед обработчиком EXCEPTION:

CREATE OR REPLACE FUNCTION sote.validate_row_version(a BIGINT, b BIGINT) 
RETURNS text AS $$
DECLARE
  ret RECORD;
  v_error_stack text;
BEGIN
  SELECT row_version INTO ret
  FROM sote.organizations
  WHERE organization_id = a;

  RETURN '0';
EXCEPTION
  WHEN NO_DATA_FOUND THEN
    RAISE EXCEPTION 'Organization Id (%) was not found', myOrganizationID;
    GET STACKED DIAGNOSTICS v_error_stack = PG_EXCEPTION_CONTEXT;
    RETURN to_json(v_error_stack);
END;$$ LANGUAGE plpgsql;
Код ниже EXCEPTION является частью блока исключения и не будет выполняться, если не произойдет исключение.

Удачи.

Postgres получает доступ к значениям строк в цикле FOR
Вопросы
POSTGRESQL
Postgres получает доступ к значениям строк в цикле FOR
Я новичок в Postgres. Вот структура и некоторые примеры данных для моего стол job_defn:

CREATE TABLE job_defn (
        job_id INTEGER NOT NULL,
        job_name CHARACTER VARYING(255) NOT NULL,
        system CHARACTER VARYING(50) NOT NULL,
        frequency CHARACTER VARYING(10) NOT NULL,
        run_day_id INTEGER NOT NULL,
        run_day_of_month INTEGER NOT NULL,
        eff_start_date DATE NOT NULL,
        eff_end_date DATE NOT NULL
    );
Пример данных:

---------------------------
job_id         frequency
---------------------------
1001           DAILY 
1002           WEEKLY
---------------------------
При запуске следующего функция я ожидал, что переменная l_freq будет содержать значение столбца frequency из таблицы. Однако он всегда выводит NULL, даже если строка таблицы содержит значение:

CREATE OR REPLACE FUNCTION testing()
   RETURNS void AS $$
   DECLARE

       l_job_id INTEGER;
       l_job_defn_record job_defn%ROWTYPE;
       l_freq CHARACTER VARYING(10);
   BEGIN
       FOR l_job_defn_record IN 
               SELECT job_id, frequency FROM job_defn ORDER BY job_id ASC
       LOOP
               l_job_id := l_job_defn_record.job_id;
               l_freq := l_job_defn_record.frequency;
               raise info'job id: %,  frq: %', l_job_id, l_freq;
               raise info'row==>%', l_job_defn_record;

       END LOOP;
   END;
   $$ LANGUAGE plpgsql VOLATILE;
Бревно:

17:50:52  [CREATE - 0 row(s), 0.036 secs]  Command processed. No rows were affected
Code: 0 SQL State: 00000 --- job id: 10001,  frq: <NULL>
Code: 0 SQL State: 00000 --- row==>(10001,DAILY,,,,,,,,,,)
Code: 0 SQL State: 00000 --- job id: 10001,  frq: <NULL>
Code: 0 SQL State: 00000 --- row==>(10001,DAILY,,,,,,,,,,)
Code: 0 SQL State: 00000 --- job id: 10001,  frq: <NULL>
Code: 0 SQL State: 00000 --- row==>(10001,DAILY,,,,,,,,,,)
Code: 0 SQL State: 00000 --- job id: 10001,  frq: <NULL>
Code: 0 SQL State: 00000 --- row==>(10001,DAILY,,,,,,,,,,)
Code: 0 SQL State: 00000 --- job id: 10001,  frq: <NULL>
Code: 0 SQL State: 00000 --- row==>(10001,DAILY,,,,,,,,,,)
Code: 0 SQL State: 00000 --- job id: 10001,  frq: <NULL>
Code: 0 SQL State: 00000 --- row==>(10001,DAILY,,,,,,,,,,)
Code: 0 SQL State: 00000 --- job id: 10001,  frq: <NULL>
Code: 0 SQL State: 00000 --- row==>(10001,DAILY,,,,,,,,,,)
Code: 0 SQL State: 00000 --- job id: 10002,  frq: <NULL>
Code: 0 SQL State: 00000 --- row==>(10002,WEEKLY,,,,,,,,,,)
... 1 statement(s) executed, 0 row(s) affected, exec/fetch time: 0.036/0.000 sec  [0 successful, 1 warnings, 0 errors]
 07.08.2018 00:02
2
2
568
2
Данный вопрос помечен как решенный
 Ответы 2
 Ответ принят как подходящий
Вы объявили переменную записи l_job_defn_record как тип job_defn%ROWTYPE. Как вы позже пояснили, таблица job_defn на самом деле состоит не только из двух столбцов, которые вы указали вначале. Присваивание в цикле FOR только присваивает первые два поля переменной записи:

...
   FOR l_job_defn_record IN 
      SELECT job_id, frequency FROM ...  -- wrong!
...
Таким образом, второй столбец из запроса SELECT (job_defn.frequency) назначается второму полю переменной записи (l_job_defn_record.job_name) - очевидно, не так, как предполагалось. Это работает, так как frequency также относится к типу varchar. Завершающие поля записи не назначаются и по умолчанию имеют значение NULL.

Это исправит:

...
   FOR l_job_defn_record IN 
      SELECT * FROM job_defn ORDER BY job_id
...
Часто SELECT * является подозрительным кодированием, но в данном случае это правильный путь, поскольку l_job_defn_record по определению имеет тот же тип строки, что и таблица job_defn.

 07.08.2018 03:28
Эрвин ясно объяснил причину ошибки в своем ответе. Я бы предложил использовать для переменной типа RECORD вместо ROWTYPE.

    l_job_defn_record RECORD;
Фактическая структура такой переменной определяется динамически, когда ей присваивается значение. Следовательно, нет возможности несовместимости между переменной и присвоенным значением.

Большое спасибо, предложенные изменения исправили :)

— 
Raghavendra Chary Desoju
 07.08.2018 15:15


КУРСОР против оператора выбора в цикле
Вопросы
POSTGRESQL
КУРСОР против оператора выбора в цикле
Я только что видел простой пример в другом вопросе StackOverflow, в котором для просмотра таблицы использовался курсор. Я бы просто перебирал результаты запроса на выборку вместо того, чтобы заключать запрос выбора в курсор. В чем преимущество использования курсора?

(Я не мог включить этот пример сюда, потому что StackOverflow думал, что мой вопрос был в основном кодом, и требовал более подробной информации. Раньше я сталкивался с этим досадным ограничением. Если я смогу четко задать свой вопрос всего несколькими словами, я смогу to. Я посмотрю, смогу ли я найти ссылку на этот вопрос, и если смогу, я добавлю ссылку сюда.)

Вот оригинальный вопрос, где я видел CURSOR.

 30.07.2018 16:49
1
0
2 132
2
 Ответы 2
What is the advantage of using a cursor?

Единственное преимущество в том, что вам нужно писать больше кода (если вам платят за каждую строку кода).

do $$
declare
    rec record;
    cur cursor for select i from generate_series(1, 3) i;
begin
    open cur;
    loop
        fetch cur into rec;
        exit when rec is null;
        raise notice '%', rec.i;
    end loop;
    close cur;
end
$$;
Цикл по результатам запроса просто открывает (виртуальный) курсор, выбирает строки, проверяет диапазон, при необходимости выходит и закрывает курсор за вас.

do $$
declare
    rec record;
begin
    for rec in select i from generate_series(1, 3) i
    loop
        raise notice '%', rec.i;
    end loop;
end
$$;
 30.07.2018 17:44
Есть несколько способов:

Используйте явный курсор в PL / pgSQL, пропустите его и обработайте каждую строку результатов.

Пример:

OPEN c FOR SELECT id FROM a WHERE ok;
LOOP
   UPDATE b SET a_ok = TRUE WHERE a_id = c.id;
END LOOP;
Используйте FOR r IN SELECT ... LOOP в PL / pgSQL. Фактически это то же самое, что и 1. с более ясным синтаксисом.

Пример:

FOR c IN SELECT id FROM a WHERE ok LOOP
   UPDATE b SET a_ok = TRUE WHERE a_id = c.id;
END LOOP;
Запустите запрос SELECT без курсора и обработайте каждую строку результатов на стороне клиента, возможно, выпуская запрос к базе данных для каждого результата.

Пример (в псевдокоде):

resultset := db_exec('SELECT id FROM a WHERE ok');
while (resultset.next()) {
    db_exec('UPDATE b SET a_ok = TRUE WHERE a_id = ' || resultset.get('id'));
}
Используйте JOIN.

Пример:

UPDATE b SET a_ok = TRUE
FROM a
WHERE a.id = b.a_id AND a.ok;
Метод 3. - это самый ужасный из возможных способов решения проблемы, потому что он вызывает множество обращений к серверу и клиент-серверу и требует, чтобы база данных анализировала огромное количество операторов. Увы, новички в SQL часто решают проблему именно так. Я называю это соединение самодельных вложенных циклов. Вдобавок ко всему, клиентское программное обеспечение часто перехватывает полный набор результатов первого запроса в память, что вызывает еще одну проблему.

Методы 1. и 2. эквивалентны, за исключением того, что 2. более элегантен. Он сохраняет циклы обработки и использует подготовленные операторы под капотом, поэтому нет необходимости постоянно анализировать UPDATE. Тем не менее, исполнителю приходится запускаться много раз, а PL / pgSQL, как известно, не очень быстр. Это также своего рода домашнее объединение вложенных циклов.

Метод 4 - это то, что вам нужно. Мало того, что все выполняется в одном запросе, PostgreSQL также может использовать более эффективную стратегию соединения, если это лучше.


PostgreSQL - как определить, активна ли транзакция?
Вопросы
POSTGRESQL
PostgreSQL - как определить, активна ли транзакция?
Позвольте мне начать, сказав: да, я знаю о Определить, активна ли транзакция (Postgres)

К сожалению, единственный ответ на этот вопрос слишком специфичен для предоставленного варианта использования и фактически не указывает, активна ли транзакция.

Уловка select txid_current();, предложенная Как проверить ожидающие операции в транзакции PostgreSQL, похоже, не работает - я всегда получаю тот же идентификатор транзакции из соседних вызовов этой функции. Возможно, это потому, что я пытаюсь протестировать его с помощью pgAdmin, который прозрачно запускает транзакции ...? (Примечание: меня на самом деле не волнует, есть ли ожидающие изменения или активные блокировки, поэтому просмотр pg_locks бесполезен - что, если ничего не было затронуто с момента начала транзакции?)

Итак: Как я могу определить в коде PostgreSQL PL / pgSQL, активна ли в данный момент транзакция?

Один из вариантов использования возможный: рассматриваемый SP / FN будет выполнять свое собственное явное управление транзакциями, и вызов его с уже активной транзакцией будет сильно мешать этому. Я хочу вызвать ошибку, чтобы можно было исправить ошибку кодирования при вызове этого SP / FN в транзакции.

Однако есть и другие варианты использования.

В идеале то, что я ищу, эквивалентно MSSQL @@TRANCOUNT (хотя мне все равно как глубоко, транзакции могут быть вложенными ...)

 28.07.2018 03:21
4
0
1 685
2
 Ответы 2
Postgres запускает PL/pgSQL внутри транзакции. Таким образом, вы не можете контролировать транзакцию изнутри PL/pgSQL. Код будет выглядеть так:

begin;
  select plpgsql_fn();
  do '/*same any plpgsql*/';
end;
Итак, отвечая на ваш вопрос:

Если у вас есть PL/pgSQL с запущенным банкоматом, у вас есть активный банкомат для транзакции ...

Конечно, вы можете проделать некоторые трюки, например, начать / закончить работу над dblink или тому подобным. но тогда вы можете успешно проверить select txid_current(); через dblink ...

 28.07.2018 09:02
Если вы хотите определить, были ли какие-либо изменения данных в вашей транзакции, позвоните в txid_current_if_assigned(). Он возвращает NULL, если ничего еще не было изменено.

Если вы хотите знать, находитесь ли вы внутри какой-либо транзакции, вы можете избавить себя от проблем, потому что вы всегда.

До PostgreSQL v11 вы не могли использовать операторы управления транзакциями в функции.


Каков наиболее эффективный способ объединения таблиц разных размеров?
Вопросы
SQL
Каков наиболее эффективный способ объединения таблиц разных размеров?
У меня такая схема:

CREATE TABLE products (
  id                    BIGSERIAL NOT NULL,
  created_at_timestamp  TIMESTAMP NOT NULL DEFAULT NOW(),
  last_update_timestamp TIMESTAMP NOT NULL DEFAULT NOW(),
  PRIMARY KEY (id)
);

CREATE TABLE product_names (
  product_id BIGINT NOT NULL,
  language   TEXT   NOT NULL,
  name       TEXT   NOT NULL,
  PRIMARY KEY (product_id, language),
  FOREIGN KEY (product_id) REFERENCES products (id)
);

CREATE TABLE product_summaries (
  product_id BIGINT NOT NULL,
  language   TEXT   NOT NULL,
  summary    TEXT   NOT NULL,
  PRIMARY KEY (product_id, language),
  FOREIGN KEY (product_id) REFERENCES products (id)
);
И я хочу select все продукты.

Однако, как вы можете видеть, Продукт содержит список имен и резюме (для каждого языка).

Я могу получить все продукты

SELECT * FROM products

А затем перебрать все строки (в данном случае в Котлине), а затем запросить имена и резюме:

SELECT * FROM product_names WHERE product_id = $id

А также

SELECT * FROM product_summaries WHERE product_id = $id

Однако это кажется неэффективным, поскольку я делаю 3 отдельных запроса к базе данных.

Я хотя бы использовал JOINs, чтобы получить все это с помощью одного запроса, но тогда я получаю несколько повторяющихся строк для каждой записи product_names и product_summaries.

Итак, в конце концов, есть ли лучший способ запросить все эти данные одним запросом?

 20.07.2018 01:42
0
5
409
2
Данный вопрос помечен как решенный
 Ответы 2
 Ответ принят как подходящий
Вы определенно не хотите выполнять несколько запросов, а затем перебирать их в коде. Это ужасно неэффективно. Когда вы делаете второй JOIN, вам нужно включить language в JOIN. Это должно уберечь вас от дублирования строк. Это должно дать вам строку один для каждой уникальной комбинации [products.id, product_names.language]

SELECT
    products.id
    ,products.created_at_timestamp
    ,products.last_update_timestamp
    ,product_names.name 
    ,product_summaries.summary
    ,product_names.language
FROM
    products
INNER JOIN
    product_names ON product_names.product_id = products.id
INNER JOIN
    product_summaries ON product_summaries.product_id = products.id 
    AND product_summaries.language = product_names.language 
 20.07.2018 05:18
Я нашел способ сделать это:

SELECT * FROM products as p INNER JOIN
(SELECT json_agg(product_names) as names, product_id FROM product_names GROUP BY product_id) as tb_names ON tb_names.product_id = p.id
INNER JOIN
(SELECT json_agg(product_summaries) as summaries, product_id FROM product_summaries GROUP BY product_id) as tb_summaries ON tb_summaries.product_id = p.id
возвращает:

1 | 2018-07-20 09:36:21.56904 | 2018-07-20 09:36:21.56904 | [{"product_id":1,"language":"EN","name":"lol"}, {"product_id":1,"language":"DE","name":"lel"}] | 1 [{"product_id":1,"language":"EN","summary":"deded"}, {"product_id":1,"language":"DE","summary":"rererere"}, {"product_id":1,"language":"FR","summary":"jejejeje"}] | 1

В основном я конвертирую многомерные таблицы в JSON :)

Postgres потрясающий!



PostgreSQL Interview Questions and Answers
Last Updated : 6 May, 2026
PostgreSQL basic interview questions cover fundamental concepts required to understand and work with PostgreSQL databases effectively.

Focus on core PostgreSQL concepts and features.
Help build a strong foundation in database management.
Improve confidence for interviews and practical use.
Include topics like queries, constraints and data types.
Prepare candidates for real-world database scenarios.
1. What Is PostgreSQL And How Does It Differ From Other SQL Databases?
PostgreSQL is an open-source database system used to store and manage data. It supports SQL for working with tables and also supports JSON for flexible data. It provides useful features like complex queries, foreign keys and triggers, making it powerful and flexible.

2. What Are the Advantages of Using PostgreSQL?
PostgreSQL offers several advantages that make it a powerful and reliable database system:

It is open-source and free to use.
It supports advanced features like JSON, indexing and transactions.
It ensures data integrity with ACID compliance.
It handles large amounts of data efficiently.
3. How to Create a New Database In PostgreSQL?
To create a new database in PostgreSQL, you can use the CREATE DATABASE command. For example:

CREATE DATABASE mydatabase;
4. How to Create a New Table In PostgreSQL?
To create a new table in PostgreSQL, you can use the CREATE TABLE command. For example:

CREATE TABLE employees (
    employee_id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    position VARCHAR(100),
    salary NUMERIC,
    hire_date DATE
);
5. What is a Primary Key in PostgreSQL?
A primary key is a column or a set of columns that uniquely identifies each row in a table. It ensures that the values in the primary key column(s) are unique and not null. For example:

CREATE TABLE employees (
    employee_id SERIAL PRIMARY KEY,
    name VARCHAR(100)
);
6. How to Insert Data Into a Table in PostgreSQL?
To insert data into a table, you can use the INSERT INTO command. For example:

INSERT INTO employees (name, position, salary, hire_date)
VALUES ('John Doe', 'Software Engineer', 80000, '2021-01-15');
7. How to Query Data From a Table in PostgreSQL?
To query data from a table, you can use the SELECT statement. For example:

SELECT * FROM employees;
8. What is a Foreign Key in PostgreSQL?
A foreign key is a column or a set of columns that establishes a link between data in two tables. It ensures that the value in the foreign key column matches a value in the referenced column of another table, enforcing referential integrity. For example:

CREATE TABLE departments (
    department_id SERIAL PRIMARY KEY,
    department_name VARCHAR(100)
);

CREATE TABLE employees (
    employee_id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    department_id INT,
    FOREIGN KEY (department_id) REFERENCES departments(department_id)
);
9. How to Update Data in a Table in PostgreSQL?
To update data in a table, you can use the UPDATE statement. For example:

UPDATE employees
SET salary = 85000
WHERE name = 'John Doe';
10. How to Delete Data From a Table in PostgreSQL?
To delete data from a table, you can use the DELETE statement.

Example:

DELETE FROM employees
WHERE name = 'John Doe';
11. What is a View in PostgreSQL?
A view is a virtual table based on the result of a SELECT query. It allows you to encapsulate complex queries and reuse them as if they were tables.

12. How to Create an Index in PostgreSQL?
To create an index in PostgreSQL, you can use the CREATE INDEX statement. Indexes improve query performance by allowing faster retrieval of records. For example:

CREATE INDEX idx_employee_name ON employees(name);
13. What Is a Transaction In PostgreSQL?
A transaction is a sequence of one or more SQL statements that are executed as a single unit of work. It ensures data integrity and consistency by making sure that either all operations are completed successfully or none are applied.

BEGIN;
UPDATE employees SET salary = 90000 WHERE name = 'John Doe';
COMMIT;
14. What is VACUUM in PostgreSQL?
VACUUM is a process in PostgreSQL that cleans up dead rows (tuples) created due to UPDATE and DELETE operations.

15. How to Handle Backup and Restore in PostgreSQL?
To backup a PostgreSQL database, you can use the pg_dump utility. To restore a database, you can use the psql utility. For example:

pg_dump mydatabase > mydatabase_backup.sql
psql mydatabase < mydatabase_backup.sql
PostgreSQL Intermediate Interview Questions
This section covers advanced PostgreSQL topics such as complex SQL queries, data modeling, performance tuning and transaction management. These questions help enhance skills for both database developers and administrators, preparing you for more challenging roles in the field.

16. What is a Schema in PostgreSQL and How to Use It?
A schema in PostgreSQL is a way to organize and group database objects such as tables, views and functions. It helps manage namespaces, so objects with the same name can exist in different schemas. To create and use a schema, you can use the following commands:

CREATE SCHEMA myschema;
CREATE TABLE myschema.mytable (id SERIAL PRIMARY KEY, name VARCHAR(100));
SELECT * FROM myschema.mytable;
17. What Are Joins in PostgreSQL?
Joins are used to combine rows from two or more tables based on a related column. They help retrieve related data from multiple tables in a single query.

18. What Is a Subquery in PostgreSQL?
A subquery is a query written inside another SQL query. It is used to perform operations that depend on the result of another query.

19. What are Triggers in PostgreSQL and How to Create Them?
Triggers are special procedures that automatically execute when certain events (INSERT, UPDATE, DELETE) occur on a table. To create a trigger:

CREATE FUNCTION update_timestamp() RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_timestamp
BEFORE UPDATE ON employees
FOR EACH ROW
EXECUTE FUNCTION update_timestamp();
20. What Are Constraints in PostgreSQL?
Constraints are rules applied to table columns to ensure data accuracy and integrity in the database.

PRIMARY KEY: Uniquely identifies each record and does not allow NULL values.
FOREIGN KEY: Maintains relationships between tables.
UNIQUE : Ensures all values in a column are different.
NOT NULL: Prevents NULL values.
CHECK : Ensures values meet a specific condition.
21. How to Create a View?
To create a view:

CREATE VIEW high_salary_employees AS
SELECT name, salary
FROM employees
WHERE salary > 80000;
22. How to Handle Exceptions in PL/pgSQL?
In PL/pgSQL, exceptions are handled using the EXCEPTION block, which allows you to manage errors during execution.

Example:

DO $$
BEGIN
    -- Attempt to insert a duplicate key
    INSERT INTO employees (employee_id, name) VALUES (1, 'John Doe');
EXCEPTION
    WHEN unique_violation THEN
        RAISE NOTICE 'Duplicate key error!';
END;
$$;
23. What are CTEs (Common Table Expressions) in PostgreSQL?
Common Table Expressions (CTEs) are temporary result sets that we can reference within a SELECT, INSERT, UPDATE or DELETE statement. CTEs improve query readability and organization. To use a CTE:

WITH employee_salaries AS (
    SELECT department_id, AVG(salary) AS avg_salary
    FROM employees
    GROUP BY department_id
)
SELECT * FROM employee_salaries;
24. How to Use Window Functions in PostgreSQL?
Window functions perform calculations across a set of table rows related to the current row. They are used for ranking, running totals and moving averages. For example:

SELECT name, salary, 
    RANK() OVER (ORDER BY salary DESC) AS salary_rank
FROM employees;
25. Explain the Concept of JSON Data Types in PostgreSQL.
PostgreSQL supports JSON data types, which allow us to store and query JSON (JavaScript Object Notation) data. This enables semi-structured data storage. You can use json or jsonb types, where jsonb is a binary format that is more efficient for indexing. Example:

CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    details JSONB
);

INSERT INTO products (details) VALUES ('{"name": "Laptop", "price": 1200}');
26. How to Implement Partitioning in PostgreSQL?
Partitioning divides a large table into smaller, more manageable pieces, improving performance and maintenance. PostgreSQL supports range and list partitioning. Example:

CREATE TABLE sales (
    sale_id SERIAL,
    sale_date DATE,
    amount NUMERIC
) PARTITION BY RANGE (sale_date);

CREATE TABLE sales_2021 PARTITION OF sales
FOR VALUES FROM ('2021-01-01') TO ('2022-01-01');
27. What Is The pg_hba.conf File and What Is Its Purpose?
The pg_hba.conf file controls client authentication in PostgreSQL. It specifies which clients are allowed to connect, their authentication methods and the databases they can access. It is essential for securing our PostgreSQL server.

28. How Do You Optimize Queries In PostgreSQL?
To optimize queries, we can:

Use indexes to speed up data retrieval
Analyze and vacuum tables regularly
Write efficient SQL queries (avoid SELECT *)
Use EXPLAIN to understand query execution plans
Optimize joins and subqueries
29. Explain The Concept Of Table Inheritance In PostgreSQL.
Table inheritance allows a table to inherit columns from a parent table. This feature helps organize data hierarchically. Example:

CREATE TABLE employees (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100)
);

CREATE TABLE managers (
    department VARCHAR(100)
) INHERITS (employees);
30. How to Perform Full-Text Search in PostgreSQL?
Full-text search allows you to search for text within a large corpus of documents. PostgreSQL supports full-text search using tsvector and tsquery types. Example:

CREATE TABLE documents (
    id SERIAL PRIMARY KEY,
    content TEXT,
    tsvector_content TSVECTOR
);

UPDATE documents SET tsvector_content = to_tsvector(content);

SELECT * FROM documents
WHERE tsvector_content @@ to_tsquery('search_term');
PostgreSQL Advanced Interview Questions
This section covers in-depth PostgreSQL topics like index optimization, replication, partitioning and advanced data handling techniques. Tackling these questions will enhance expertise, making us well-prepared for senior roles and technical interviews.

31. What Is The WAL (Write-Ahead Logging) In PostgreSQL and How Does It Work?
Write-Ahead Logging (WAL) in PostgreSQL is a method used to ensure data integrity. Before any changes are made to the database, the changes are first recorded in a log (WAL). This log helps in recovering the database to a consistent state in case of a crash. WAL operates by writing the changes to a log file before they are applied to the database, ensuring that the data is safe even if a failure occurs.

32. How to Configure Replication in PostgreSQL?
Replication in PostgreSQL involves copying data from one database server (master) to another (slave). To configure replication:

Edit postgresql.conf on the master server to enable WAL archiving and set up replication parameters.
wal_level = replica
max_wal_senders = 3
archive_mode = on
archive_command = 'cp %p /var/lib/postgresql/wal_archive/%f'
Create a replication user on the master.
CREATE ROLE replication_user WITH REPLICATION PASSWORD 'password' LOGIN;
Set up pg_hba.conf to allow replication connections from the slave.
host replication replication_user 192.168.1.10/32 md5
On the slave, set up recovery.conf with the connection information
standby_mode = 'on'
primary_conninfo = 'host=192.168.1.1 port=5432 user=replication_user password=password'
trigger_file = '/tmp/postgresql.trigger'
Start the slave server and it will begin replicating data from the master.
33. What are the Different Types of Indexes Available in PostgreSQL?
PostgreSQL provides different types of indexes to improve query performance by enabling faster data retrieval.

B-Tree Index: Default index type, suitable for most queries and comparisons.
Hash Index: Used for equality comparisons (= operator).
GiST Index: Supports complex data types like geometric data and full-text search.
SP-GiST Index: Handles partitioned data structures efficiently.
GIN Index: Optimized for full-text search and JSONB data.
BRIN Index: Efficient for large tables with naturally ordered data.
34. Explain the Concept of MVCC (Multi-Version Concurrency Control) in PostgreSQL.
Multi-Version Concurrency Control (MVCC) in PostgreSQL is a method to handle concurrent transactions without locking. It allows multiple transactions to access the database simultaneously by maintaining multiple versions of data. Each transaction sees a consistent snapshot of the database, ensuring isolation. MVCC helps avoid conflicts and improves performance in a multi-user environment.

35. How to Use the pg_stat_activity View to Monitor PostgreSQL?
The pg_stat_activity view provides information about the current activity in the PostgreSQL database. It includes details like active queries, process IDs, user information and query start times. To use it:

SELECT pid, usename, application_name, state, query
FROM pg_stat_activity;
This query lists all active connections and their current state.

36. What are the Different Isolation Levels in PostgreSQL?
PostgreSQL supports four isolation levels to control how transactions interact:

Read Uncommitted: Same as Read Committed; dirty reads are not allowed.
Read Committed: Each query sees only committed data.
Repeatable Read: Transaction sees the same data throughout (no changes from others).
Serializable: Highest level; transactions behave as if run one by one.
37. How to Handle Deadlocks in PostgreSQL?
Deadlocks occur when two or more transactions block each other.It automatically detects deadlocks and terminates one of the transactions to resolve it. To minimize deadlocks:

Access tables in a consistent order.
Keep transactions short and simple.
Use explicit locking carefully.
To investigate deadlocks, check the pg_locks view and PostgreSQL logs.
38. Explain the Concept of the Query Planner and Optimizer in PostgreSQL.
The query planner and optimizer in PostgreSQL analyze SQL queries to determine the most efficient execution plan. The planner uses statistics about the tables and indexes to estimate the cost of different execution strategies and chooses the one with the lowest cost. The optimizer considers factors like join methods, index usage and query rewriting to improve performance.

39. How Do You Implement Sharding In PostgreSQL?
Sharding involves partitioning data across multiple servers to distribute load and improve performance. PostgreSQL doesn't have built-in sharding but can be implemented using logical replication, partitioning and custom routing logic in the application. Tools like Citus can also be used to add sharding capabilities to PostgreSQL.

40. What are the Different Types of Backup Strategies in PostgreSQL?
PostgreSQL supports several backup strategies:

SQL Dump: Using pg_dump to create a logical backup of the database.
File System Level Backup: Using tools like rsync to copy the data directory while the server is offline.
Continuous Archiving: Using WAL archiving and pg_basebackup for continuous backups.
Logical Replication: Setting up logical replication for real-time data backup and recovery.
PostgreSQL Query-Based Interview Questions
This section focuses on practical SQL query challenges in PostgreSQL, including complex joins, subqueries, aggregate functions and window functions. Mastering these questions will strengthen your query-building skills and prepare you to handle real-world database scenarios confidently.

We have created some table for the reference of the questions like: Departments Table, Projects Table, Employees Table, Tasks Table and TimeLogs Table

CREATE TABLE Departments (
    DepartmentID SERIAL PRIMARY KEY,
    DepartmentName VARCHAR(100) NOT NULL
);

INSERT INTO Departments (DepartmentID, DepartmentName) VALUES
(1, 'Engineering'),
(2, 'Design'),
(3, 'Management');
Output

Screenshot-2026-05-06-115439
Department table
CREATE TABLE Projects (
    ProjectID SERIAL PRIMARY KEY,
    ProjectName VARCHAR(100) NOT NULL,
    Budget DECIMAL(15, 2),
    StartDate DATE,
    EndDate DATE,
    DepartmentID INT REFERENCES Departments(DepartmentID)
);

INSERT INTO Projects (ProjectName, Budget, StartDate, EndDate, DepartmentID) VALUES
('Project Alpha', 100000, '2021-01-01', '2021-12-31', 1),
('Project Beta', 200000, '2021-02-01', '2021-11-30', 2),
('Project Gamma', 150000, '2021-03-01', '2022-03-01', 3);
Output:

Screenshot-2026-05-06-115801
Projects Table
CREATE TABLE Employees (
    EmployeeID SERIAL PRIMARY KEY,
    Name VARCHAR(100) NOT NULL,
    Age INT,
    Position VARCHAR(100),
    Salary DECIMAL(10, 2),
    DepartmentID INT REFERENCES Departments(DepartmentID),
    HireDate DATE
);

INSERT INTO Employees (Name, Age, Position, Salary, DepartmentID, HireDate) VALUES
('John Doe', 28, 'Software Engineer', 80000, 1, '2021-01-15'),
('Jane Smith', 34, 'Project Manager', 95000, 1, '2019-06-23'),
('Emily Johnson', 41, 'CTO', 150000, 3, '2015-03-12'),
('Michael Brown', 29, 'Software Engineer', 85000, 1, '2020-07-30'),
('Sarah Davis', 26, 'UI/UX Designer', 70000, 2, '2022-10-12');
Output

Screenshot-2026-05-06-121129
Employees Table
CREATE TABLE Tasks (
    TaskID SERIAL PRIMARY KEY,
    TaskName VARCHAR(100) NOT NULL,
    ProjectID INT REFERENCES Projects(ProjectID),
    AssignedTo INT REFERENCES Employees(EmployeeID),
    Status VARCHAR(50),
    Deadline DATE
);

INSERT INTO Tasks (TaskName, ProjectID, AssignedTo, Status, Deadline) VALUES
('Design Database', 1, 1, 'Completed', '2021-03-01'),
('Develop API', 1, 1, 'In Progress', '2021-06-01'),
('Create UI', 2, 5, 'Not Started', '2021-09-01'),
('Project Planning', 3, 2, 'Completed', '2021-05-01'),
('Market Analysis', 3, 3, 'In Progress', '2021-12-01');
Output

Screenshot-2026-05-06-122133
Task Table
CREATE TABLE TimeLogs (
    LogID SERIAL PRIMARY KEY,
    EmployeeID INT REFERENCES Employees(EmployeeID),
    TaskID INT REFERENCES Tasks(TaskID),
    HoursWorked DECIMAL(5, 2),
    LogDate DATE
);

INSERT INTO TimeLogs (LogID, EmployeeID, TaskID, HoursWorked, LogDate) VALUES
(1, 1, 40, '2021-02-01'),
(1, 2, 35, '2021-04-01'),
(5, 3, 20, '2021-07-01'),
(2, 4, 25, '2021-03-01'),
(3, 5, 30, '2021-10-01');
Output

Screenshot-2026-05-06-123136
TimeLogs Table
41. Find all Employees Who have Logged More than 30 Hours on a Single Task
Query:

SELECT E.Name, T.TaskName, TL.HoursWorked
FROM Employees E
JOIN TimeLogs TL ON E.EmployeeID = TL.EmployeeID
JOIN Tasks T ON TL.TaskID = T.TaskID
WHERE TL.HoursWorked > 30;
Output

Screenshot-2026-05-06-123529
Explanation: This query joins the Employees, TimeLogs and Tasks tables and filters the results to show employees who have logged more than 30 hours on a single task.

42. List the Total Hours Worked by Each Employee on All Projects
Query:

SELECT E.Name, SUM(TL.HoursWorked) AS TotalHoursWorked
FROM Employees E
JOIN TimeLogs TL ON E.EmployeeID = TL.EmployeeID
GROUP BY E.Name;
Output

Screenshot-2026-05-06-124604
Explanation: This query sums the total hours worked by each employee by grouping the results by the employee name.

43. Find the Average Salary of Employees in Each Department Where the Average Salary is Greater Than 75,000
Query:

SELECT D.DepartmentName, AVG(E.Salary) AS AvgSalary
FROM Departments D
JOIN Employees E ON D.DepartmentID = E.DepartmentID
GROUP BY D.DepartmentName
HAVING AVG(E.Salary) > 75000;
Output:

Screenshot-2026-05-06-124940
Explanation: This query calculates the average salary of employees in each department and filters the results to show only those departments where the average salary is greater than 75,000.

44. Retrieve the Details of Projects That Have More Than 2 Tasks Assigned
Query:

SELECT P.ProjectName, P.Budget, P.StartDate, P.EndDate, D.DepartmentName
FROM Projects P
JOIN Tasks T ON P.ProjectID = T.ProjectID
JOIN Departments D ON P.DepartmentID = D.DepartmentID
GROUP BY P.ProjectName, P.Budget, P.StartDate, P.EndDate, D.DepartmentName
HAVING COUNT(T.TaskID) > 2;
Output

Screenshot-2026-05-06-125538
Explanation: This query groups the tasks by project and filters the results to show projects that have more than 2 tasks assigned.

45. List the Employees Who Have Not Been Assigned to Any Tasks
Query:

SELECT E.Name
FROM Employees E
LEFT JOIN Tasks T ON E.EmployeeID = T.AssignedTo
WHERE T.AssignedTo IS NULL;
Output

Screenshot-2026-05-06-142143
Explanation: This query performs a left join between the Employees and Tasks tables and filters the results to show employees who have not been assigned to any tasks.

46. Find the Project with the Highest Total Budget and Display Its Department Name
Query:

SELECT P.ProjectName, P.Budget, D.DepartmentName
FROM Projects P
JOIN Departments D ON P.DepartmentID = D.DepartmentID
ORDER BY P.Budget DESC
LIMIT 1;
Output

Screenshot-2026-05-06-142251
Explanation: This query orders the projects by budget in descending order and limits the result to show only the project with the highest budget, along with its department name.

47. Calculate the Total Budget Allocated to Each Department
Query:

SELECT D.DepartmentName, SUM(P.Budget) AS TotalBudget
FROM Departments D
JOIN Projects P ON D.DepartmentID = P.DepartmentID
GROUP BY D.DepartmentName;
Output

Screenshot-2026-05-06-142350
Explanation: This query sums the total budget allocated to each department by grouping the results by the department name.

48. List the Names of Employees Who Have Worked on 'Project Alpha'
Query:

SELECT DISTINCT E.Name
FROM Employees E
JOIN Tasks T ON E.EmployeeID = T.AssignedTo
JOIN Projects P ON T.ProjectID = P.ProjectID
WHERE P.ProjectName = 'Project Alpha';
Output

Screenshot-2026-05-06-142628
Explanation: This query joins the Employees, Tasks and Projects tables and filters the results to show employees who have worked on 'Project Alpha'.

49. Find the Department with the Most Employees and Display the Number of Employees
Query:

SELECT D.DepartmentName, COUNT(E.EmployeeID) AS NumberOfEmployees
FROM Departments D
JOIN Employees E ON D.DepartmentID = E.DepartmentID
GROUP BY D.DepartmentName
ORDER BY NumberOfEmployees DESC
LIMIT 1;
Output

Screenshot-2026-05-06-142823
Explanation: This query counts the number of employees in each department, orders the results by the number of employees in descending order and limits the result to show only the department with the most employees.

50. Retrieve the Details of Employees Who Have Been Hired in the Last Two Years
Query:

SELECT *
FROM Employees
WHERE HireDate >= (CURRENT_DATE - INTERVAL '2 years');
Output

Screenshot-2026-05-06-143143
Explanation: This query retrieves the details of employees who have been hired in the last two years by comparing their hire date with the current date minus two years.

Гайд по PostgreSQL для продвинутых разработчиков
10.10.2025sql
Гайд по PostgreSQL для продвинутых разработчиков
PostgreSQL – одна из самых мощных СУБД с открытым исходным кодом. Этот гайд подробно охватывает ключевые аспекты PostgreSQL: от внутренней архитектуры до приёмов оптимизации. Мы рассмотрим администрирование, производительность, расширения, инструменты, а также сравним популярные ORM для Python и Go. В конце приведён список продвинутых вопросов, часто встречающихся на собеседованиях.

t.me/sqlhub -разбор тех собеседований у нас в телеграмме.

1. Основы и архитектура PostgreSQL
Архитектура процессов и памяти
PostgreSQL имеет многопроцессную архитектуру. При запуске запускается основной процесс postmaster, который инициализирует общий участок памяти (shared memory) и порождает фоновые процессыseveralnines.com. Каждый новый клиент подключается через отдельный backend-процесс (серверный процесс), порождаемый postmaster’ом. 

Shared memory (общая память) используется для кеширования данных и журналов транзакций (WAL). Ключевые области – shared_buffers (кеш страниц таблиц/индексов в памяти) и WAL buffers (кеш изменений для WAL). Shared Buffers минимизирует обращения к диску, удерживая часто используемые страницы в памяти. WAL Buffer временно хранит записи журнала до сброса их на диск. 

Фоновые процессы PostgreSQL включают: процесс записи журналов (logger), чекпоинтер (checkpointer), бэкграундный писатель (background writer), wal writer, запускатель autovacuum и др. Например, checkpointer сбрасывает «грязные» страницы на диск при наступлении контрольной точки (checkpoint), background writer периодически записывает изменённые страницы из shared_buffers на диск. Это разгружает работу чекпоинтов и снижает скачки нагрузки при них. Autovacuum-ланчер запускает autovacuum-воркеры для очистки «мертвых» кортежей (об этом ниже). 

Backend-процессы – это серверы, обслуживающие SQL-запросы клиентов. Их число ограничено параметром max_connections (по умолчанию 100). Если приложению нужно значительно больше параллельных соединений, рекомендуется использовать пул соединений (например, PgBouncer) вместо бесконтрольного роста max_connections. При слишком большом количестве подключений каждый backend может получать слишком маленькую долю CPU и памяти.

MVCC, транзакции и уровни изоляции
PostgreSQL реализует многоверсионный контроль конкурентности (MVCC) – многоверсионную модель, в которой каждое изменение данных создаёт новую версию строки, а старые версии сохраняются до их уборки (VACUUM). Это позволяет транзакциям читать данные без блокировок на запись и наоборот: чтения не блокируют записи, записи не блокируют чтения. Каждая транзакция видит консистентный снимок данных на момент её старта – даже если параллельно другие транзакции изменяют те же строки. За счёт MVCC PostgreSQL обеспечивает изоляцию транзакций: чтения не видят «грязных» (незафиксированных) данных, и даже на самом строгом уровне изоляции (Serializable) чтения не блокируют записи. 

Уровни изоляции в PostgreSQL: Read Committed (по умолчанию), Repeatable Read и Serializable. (Уровень Read Uncommitted запрашивается, но фактически работает как Read Committed postgresql.org.) Кратко:

Read Committed – каждая команда внутри транзакции видит данные, зафиксированные до начала этой команды. Повторный SELECT в одной транзакции может видеть изменения, которые другая транзакция успела зафиксировать после предыдущего SELECT. Неповторяемые чтения (non-repeatable reads) и фантомы возможны, но «грязные» чтения (dirty read) исключены.
Repeatable Read – весь SELECT внутри транзакции видит снимок состояния на момент начала транзакции. Никакие новые коммиты других транзакций в ходе текущей не видны. Это предотвращает неповторяемые чтения; фантомные чтения в PostgreSQL также не возникают на этом уровне (хотя по стандарту допускаются)postgresql.orgpostgresql.org. Реализовано как Snapshot Isolation: все SELECT работают с одним снимком. Однако на этом уровне возможны более тонкие аномалии – т.н. write skew (ситуации, требующие полноценной сериализации).
Serializable – самый строгий уровень, гарантирующий полную сериализуемость: параллельное выполнение транзакций эквивалентно некоторому их последовательному порядку PostgreSQL достигает этого без тотальной блокировки – с помощью Serializable Snapshot Isolation (SSI): отслеживает потенциальные конфликтующие операции через «призрачные» блокировки (predicate locks) и при обнаружении опасной ситуации откатывает одну из транзакций с ошибкой could not serialize access due to read/write dependencies. Таким образом, при уровне Serializable разработчик должен быть готов к повторному выполнению транзакций при получении ошибок сериализации. В PG Serializable транзакции выполняются с той же мгновенной фиксацией снимка, что и Repeatable Read, но сверху добавлен контроль конфликтов.
💡 Примечание: До версии PostgreSQL 9.1 уровень Serializable фактически работал как нынешний Repeatable Read (snapshot isolation). Начиная с 9.1, для получения старого поведения Serializable следует использовать Repeatable Read.

Механизм блокировок при MVCC минимизируется. Тем не менее PostgreSQL использует блокировки на уровне строк для координации одновременных записей: если транзакция A изменила строку, транзакция B при попытке её изменить будет ждать завершения A или получит ошибку сериализации (на соотв. уровне изоляции). Кроме того, доступны явные блокировки: share/exclusive table locks, advisory locks и т.д., но при правильном использовании MVCC обычно в них нет нужды.

WAL и контрольные точки (checkpoint)
PostgreSQL обеспечивает надежность (принцип D – Durability из ACID) через механизм Write-Ahead Logging (WAL) – журнал предзаписи. Суть WAL: все изменения данных сначала записываются в журнал на диск, и только потом в основные файлы таблиц. Это гарантирует, что при сбое система сможет восстановиться, повторно применив операции из WAL (REDO). Благодаря WAL нет необходимости немедленно синхронизировать на диск сами страницы данных при каждом COMMIT – достаточно сбросить журнал; если транзакция зафиксирована (коммит), но изменения ещё не попали в таблицы на диске, после сбоя они будут восстановлены из WAL. Запись WAL идёт последовательным потоком, что намного эффективнее случайных записей по разным таблицам. В результате количество операций ввода-вывода существенно снижается: для подтверждения транзакции нужно синхронизировать (fsync) в основном только WAL-файл, а не все изменённые страницы данных. 

WAL также даёт возможность онлайн-бэкапов и репликации: сохраняя последовательность WAL-сегментов, можно откатить базу к любому моменту (Point-In-Time Recovery) или транслировать эти журналы на реплику для воспроизведения изменений. 

Контрольные точки (checkpoints) – это моменты, когда PostgreSQL гарантирует, что все изменения до определённого LSN (позиции в WAL) записаны в основные файлы БД. При чекпоинте все «грязные» страницы из буферов сбрасываются на диск WAL-сегмент за checkpoint может быть отброшен после архивирования (или перезаписан), ведь система знает, что до этого момента данные на диске актуальны. Параметры checkpoint_timeout (по умолчанию 5 мин) и max_wal_size определяют частоту чекпоинтов. Важно настроить их так, чтобы чекпоинты происходили не слишком часто (лишняя нагрузка) и не слишком редко (риск долгого восстановления после сбоя, рост объёма WAL). Например, при массивной загрузке данных стоит временно увеличить max_wal_size, чтобы снизить частоту чекпоинтов и избежать лишних сбросов на диск. 

Во время чекпоинта создаётся нагрузка ввода-вывода (массовый сброс страниц). Чтобы смягчить влияние чекпоинтов, PostgreSQL использует background writer и checkpoint spreading: фоновые записи распределяют запись изменённых страниц во времени, а во время чекпоинта обновления пишутся порциями, избегая пикового I/O. Если чекпоинты случаются слишком часто (в логах можно увидеть предупреждения при интервалах менее checkpoint_warning, по умолчанию 30 сек), стоит увеличить max_wal_size или настроить checkpoint_timeout.

Недавно на Stepik вышел свежий курс – PostgreSQL для разработчиков: от основ к созданию API.В этом курсе на пальцах объясняют не только как писать SQL-запросы, а строить настоящие backend-сервисы с базой данных как у профи. Если хотите много практики, рекомендую.

2. Администрирование PostgreSQL
Установка и настройка (best practices для production)
Установка. Рекомендуется использовать официальные пакеты PostgreSQL (репозиторий PGDG) для вашей ОС – это обеспечивает актуальные версии и удобные обновления. Например, в Debian/Ubuntu – пакет postgresql-15, в RedHat/CentOS – через yum install postgresql15-server после подключения репозитория. После установки инициализируется кластер БД (обычно initdb выполняется автоматически скриптами). Обратите внимание на расположение директории данных (PGDATA), права доступа к ней и конфигурационные файлы (postgresql.conf, pg_hba.conf). 

Базовая настройка под продакшн выходит за рамки дефолтов: PostgreSQL «из коробки» нацелен на совместимость, а не производительностьwiki.postgresql.org. Вот ключевые параметры и best practices:

Аппаратные ресурсы. При выделенном сервере под PostgreSQL важно настроить использование памяти. Типично рекомендуют shared_buffers ~ 25% от RAM машиныwiki.postgresql.org (на системах с >1 ГБ RAM) – это объём памяти под кеш страниц БД. Слишком низкое значение приведёт к лишним чтениям с диска, слишком высокое – к давлению на ОС. Для крупных систем иногда эффективно и 30-40% RAM под shared_buffers, но учтите: ОС тоже кеширует файлы, поэтому излишне раздувать буфер PostgreSQL не всегда полезно.
effective_cache_size. Это оценка объёма памяти, доступной под файловый кеш ОС + shared_buffers. Обычно ставят ~ 50% от общей RAM (или чуть больше)wiki.postgresql.org. Этот параметр не выделяет память, а влияет на планировщик запросов (Query Planner) – он оценивает, сколько данных вероятно уже в памяти, и агрессивнее использует индексы при большом effective_cache_size. Например, при 32 ГБ ОЗУ можно выставить effective_cache_size = 24GB (если 8 ГБ занято ОС и прочим).
work_mem. Объём памяти на одну сортировку или хеш-операцию (в рамках одного запроса). По умолчанию часто 4 МБ, что консервативно. Для продакшена можно увеличить (например, 16МБ-64МБ), но внимание: этот объём расходуется на каждую сортировку/хеш в каждом потоке запроса. То есть при work_mem = 50MB и одновременном выполнении 10 запросов, каждый из которых делает 2 крупных сортировки, суммарно может уйти 10250 = 1000 МБ. Поэтому значение work_mem зависит от нагрузки и max_connections – при большом числе соединений держите work_mem умеренным, чтобы не съесть всю RAMwiki.postgresql.org. Большие work_mem полезны для аналитических запросов (DW), где лучше развернуть один крупный сорт в памяти, чем спиливать на диск (операция External Sort видна в плане как Disk: <n>kB при EXPLAIN ANALYZE). Настраивайте work_mem под типичную сложность запросов: для OLTP (простые запросы) можно 4-8 МБ, для OLAP может потребоваться 64 МБ и более.
maintenance_work_mem. Память для операций обслуживания – VACUUM, CREATE INDEX, ALTER TABLE ADD FOREIGN KEY и т.п. Разумно поставить значительно выше обычного work_mem (например, 128 МБ или несколько сотен МБ), чтобы VACUUM и построение индексов шли быстрееwiki.postgresql.org. Этот параметр – максимум на поток автовакуума или индексации.
Конфигурация WAL и чекпоинтов. По умолчанию max_wal_size (суммарный объём WAL-журнала до принудительного чекпоинта) может быть около 1 ГБ. Для write-heavy нагрузок стоит увеличить (например, 2-4 ГБ или больше), чтобы чекпоинты случались пореже и шли более плавноpostgresql.org. checkpoint_timeout обычно 5 минут – можно увеличить до 10-15 мин в системах с батарейкой (гарантированное питание) и хорошим диском, чтобы опять же реже делать чекпоинты, но учесть, что время восстановления после сбоя будет дольше (все WAL за период надо проиграть). Всегда держите включённым full_page_writes = on (по умолчанию включено) – это гарантия целостности страниц при сбое питания (хотя и увеличивает объём WAL).
Журналирование. Для продакшна важно настроить логирование. Рекомендуется задать информативный log_line_prefix. Например:log_line_prefix = '%t [%p] db=%d,user=%u,app=%a 'Это добавит в каждый лог-ряд время %t, PID процесса %p, базу %d, пользователя %u и имя приложения %apostgresql.org. Также полезно включить log_duration = on или сразу log_min_duration_statement – порог времени (в мс), после которого длительный SQL будет залогирован. Например, log_min_duration_statement = 500 (логировать запросы > 500мс).
Другие полезные настройки: log_checkpoints = on (будет записывать в лог, когда произошёл checkpoint и сколько данных записано), log_lock_waits = on (логировать, если ожидание блокировки более deadlock_timeout), log_temp_files = 0 (логировать создание временных файлов на диск, признак неподошедшего work_mem), log_statement = none (не логировать все подряд запросы, если только для отладки – обычно достаточно min_duration). Формат логов важно согласовать с инструментами анализа (например, pgBadger – популярный парсер логов – требует, чтобы лог содержал время и процесс, обычно %t [%p] достаточноmanpages.ubuntu.comftp.sas.com).
Аутентификация и сеть. В pg_hba.conf настройте доступ: по умолчанию локально peer/md5. Для production на отдельном сервере чаще включают подключение по сети (host all all 0.0.0.0/0 md5 или scram-sha-256) с указанием listen_addresses = '*' в postgresql.conf, чтобы сервер слушал внешний интерфейсwiki.postgresql.org. Не забудьте создать сильные пароли для пользователей или настроить TLS при удалённых подключениях.
Best practices:

По возможности размещайте данные (pg_wal) на надёжном и быстром хранилище (NVMe, SSD). WAL интенсивно пишется, поэтому вынос pg_wal на отдельный диск может повысить производительность записи.
Настройте резервное копирование (см. ниже про бэкапы). Регулярные бэкапы + WAL-архивирование = залог надёжности.
Мониторьте состояние: настраивайте track_io_timing = on (если нужна детализация по времени I/O в планах), убедитесь, что shared_preload_libraries включает нужные расширения мониторинга (например, pg_stat_statements). Также проверьте, что включён autovacuum (по умолчанию да). Много параметров autovacuum обсуждается далее в разделе «Производительность».
Наконец, после настройки перезапустите PostgreSQL и проверьте, применились ли конфиги:

SHOW config_file; SHOW shared_buffers; SHOW work_mem;
Так вы убедитесь, что файл конфигурации правильный и значения обновлены.

Репликация, фейловер, резервное копирование
Репликация в PostgreSQL бывает физическая (streaming replication) и логическая.

Физическая репликация (потоковая) – это режим Hot Standby, когда один или несколько standby-серверов получают поток WAL-записей с основного (primary) и применяют их. Реплика настраивается либо через непрерывное архивирование WAL и восстановление (restore_command + recovery.conf в старых версиях, в новых просто параметры в postgresql.conf), либо через потоковую репликацию – основной сервер запускает процесс wal sender, а реплика – wal receiver по протоколу streaming. Для настройки: на мастере включают wal_level = replica (по умолчанию), создают слот репликации (pg_create_physical_replication_slot – опционно, чтобы удерживать WAL), и выдают права (пользователь с REPLICATION). Затем выполняют базовый бэкап (например, утилитой pg_basebackup) для инициализации standby. Standby настраивают с параметрами primary_conninfo (адрес мастера) и (опционально) primary_slot_name для использования слота. В результате standby получает WAL и может работать в режиме только чтение (hot standby), отвечая на SELECT’ы для разгрузки мастера.
PostgreSQL различает асинхронную и синхронную репликацию:

Асинхронная – основная (primary) не ждёт подтверждения от реплики, что ведёт к небольшому отставанию: при сбое мастера последние транзакции, не долетевшие до реплики, потеряютсяpostgresql.org. Этот режим стандартно используется, т.к. не задерживает работу мастера.
Синхронная – мастер будет ждать, пока хотя бы один синхронный репликационный узел запишет WAL (по настройкам synchronous_commit и synchronous_standby_names). Даёт гарантию, что транзакция не потеряется при фейловере на синхронную репликуpostgresql.org, но увеличивает время коммита (задержка сети).
Для High Availability применяют автоматический failover: с помощью сторонних средств (Patroni, repmgr, etcd, etc) мониторят мастера и при его недоступности продвигают (promote) реплику в мастера. PostgreSQL сам по себе обеспечивает команду pg_promote (раньше trigger_file) для повышения standby до мастера. Важно учесть сплит-брейн: при автоматическом фейловере убедитесь, что старый мастер не остался в живых и не продолжил писать – используйте fencing.

Логическая репликация – репликация отдельных таблиц или данных между базами. Введена с версии 10. Позволяет настройкой PUBLICATION на мастере и SUBSCRIPTION на подписчике передавать данные выбранных таблиц (или всех) в реальном времени. Логическая репликация работает на уровне изменений строк (decoding из WAL) и даёт возможность, например, реплицировать данные между разными версиями PostgreSQL или в разные топологии (напр. агрегировать из нескольких мастеров в одну целевую БД). Архитектура – “publish-subscribe”: паблишер стримит изменения подписчикамpostgresql.org. Изначально при подключении логической подписки происходит снимок данных и начальная копия таблицы на подписчик, затем идут дельты измененийpostgresql.org. Логическая репликация – гибкий инструмент для миграций (миграция с версии на версию без простоя), распределённых систем (разные узлы держат разные наборы таблиц), и интеграции с внешними системами.
Бэкапы и восстановление. Существует два основных подхода к резервному копированию PostgreSQL:

Логические бэкапы – утилиты pg_dump, pg_dumpall генерируют SQL-скрипт или архив с командами для воссоздания БД. Подход прост, но на больших базах занимает много времени и не даёт «моментального снимка». Подходит для небольших баз или структурных бэкапов (схемы без данных).
Физические бэкапы – копирование файлов базы. Обычно используются снимки файлами с помощью утилиты pg_basebackup или сторонних средств (Barman, pgBackRest). pg_basebackup делает консистентную копию всего кластера, возможно в формат tar или сжатую, по сети или локальноpostgresql.orgpostgresql.org. Физический бэкап требует подключенного WAL-архивирования или сохранения всех WAL, с момента начала бэкапа до его окончания и далее, чтобы при восстановлении «догнать» новые транзакции.
WAL-архивирование: Для возможности Point-in-Time Recovery (PITR) и восстановления после сбоев, настраивают archive_mode = on и archive_command – команду копирования каждого заполненного WAL-сегмента в надёжное хранилище (например, на другой диск или сервер)postgresql.orgpostgresql.org. PostgreSQL гарантирует, что WAL-сегмент не перезапишется, пока archive_command не выполнится успешно (должен возвращать 0)postgresql.orgpostgresql.org. Пример простого archive_command на Unix:

archive_command = 'test ! -f /backup/wal_archive/%f && cp %p /backup/wal_archive/%f'
который копирует WAL на сетевое хранилище (и не перезаписывает, если файл уже есть)postgresql.org. С архивацией WAL мы можем после восстановления из base backup откатить или «промотать» базу до нужного времени, последовательно применяя WAL (команда pg_wal_replay делается утилитой pg_restore или непосредственно сервером при recovery). 

Периодичность бэкапов: Организуйте регулярные полные бэкапы (например, раз в сутки) и храните все WAL с момента последнего бэкапа. Это даст возможность восстановить базу на любой момент внутри этого окна. Если база очень большая, рассмотрите дифференциальные/инкрементальные бэкапы. В PostgreSQL 15+ pg_basebackup поддерживает инкрементальный бэкап (с ключом --manifest и --incremental), который на основании backup manifest прошлого бэкапа копирует только изменённые блоки данныхpostgresql.orgpostgresql.org. Это требует, чтобы на сервере был включён сбор summary WAL (в pg_wal/summaries) и хранится manifest предыдущего бэкапа для сравнения. Инкрементальные бэкапы уменьшают объём копируемых данных для больших баз, но восстановление требует цепочки базовых и всех инкрементных копийpostgresql.org. 

Проверки восстановления: Не забывайте регулярно тестировать восстановление из бэкапов на стендах – имитировать потерю сервера и поднимать новый из резервной копии. Это единственный способ убедиться, что процесс отлажен и копии не битые.

Мониторинг и логгирование
Эффективное администрирование PostgreSQL невозможно без мониторинга. Вот ключевые механизмы и инструменты:

Статистические представления. PostgreSQL собирает статистику в реальном времени (через background process stats collector). Основные представления: pg_stat_activity – показывающий все активные соединения и их текущий запрос; pg_stat_user_tables и pg_stat_user_indexes – счётчики операций (кол-во seq scan, idx scan, tuples fetched и т.д. по каждой таблице/индексу); pg_stat_database – агрегированная статистика по базам. Включено по умолчанию (параметр track_counts = on). С помощью этих представлений можно отслеживать, какие таблицы чаще всего читаются или пишутся, сколько прошло vacuum/analyze, и пр.
pg_stat_statements – расширение (module) для сбора статистики запросов. Обязательно включайте его в продакшене для анализа медленных запросов и нагрузки. Чтобы задействовать: добавить в shared_preload_libraries = 'pg_stat_statements' (требуется перезапуск сервера)postgresql.org, затем выполнить CREATE EXTENSION pg_stat_statements; в нужной базе. Это расширение хранит сводные статистики по каждому типу запросов (похожие запросы с разными параметрами нормализуются). Можно узнать, какие SQL чаще всего выполняются, среднее и максимум время, количество блоков, кэш-хитов и промахов и т.д. (например:SELECT query, calls, total_exec_time, mean_exec_time, rows FROM pg_stat_statementsORDER BY total_exec_time DESC LIMIT 5;покажет 5 самых «тяжёлых» запросов). Примечание: начиная с PG 13 требуется, чтобы параметр compute_query_id был включён (по умолчанию auto), иначе pg_stat_statements не будет группировать запросыpostgresql.org. В представлении pg_stat_statements доступны поля: сколько раз выполнялся запрос, общее и среднее время выполнения, количество возвращённых строк, количество чтений из shared_buffers и с диска (shared_blks_hit/read), и др.postgresql.orgpostgresql.org.
auto_explain – расширение для автоматического логирования плана запросов, которые выполнялись дольше заданного порога. Очень полезно, чтобы видеть план запроса прямо в логе для медленных операций. Настройка: в postgresql.conf добавить auto_explain в shared_preload_libraries (с PG 12+ можно и через session_preload_libraries, если не хотите глобально)postgresql.org, затем установить параметры:auto_explain.log_min_duration = '500ms' # порог времени auto_explain.log_analyze = on # чтобы выполнялся с ANALYZE (реальное время и строки) auto_explain.log_buffers = on # логировать данные по буферам (требует log_analyze) auto_explain.log_timing = off # можно выключить измерение времени на узел, чтобы снизить оверхед:contentReference[oaicite:64]{index=64}После этого все запросы дольше 500 мс будут попадать в лог с подробным планом исполнения (как вывод EXPLAIN ANALYZE). Это позволяет сразу увидеть, какой узел плана внёс основной вклад во время, были ли чтения с диска (shared read), использовался ли индекс и т.д. Обратите внимание: auto_explain добавляет небольшой оверхед (измерение времени), но если log_min_duration поставить достаточно большим (скажем, 200-500 мс), это не повлияет на лёгкие запросы, а тяжёлые будут зафиксированы. Этот инструмент бесценен при отладке производительности в продакшене, когда нет возможности вручную выполнять EXPLAIN каждого запроса.
Мониторинг ОС и СУБД. В дополнение к встроенным средствам PostgreSQL стоит использовать внешние системы мониторинга: как минимум настроить метрики через Prometheus + экспортер (например, postgres_exporter), либо применять готовые решения (Grafana dashboards, Percona Monitoring and Management, Zabbix шаблоны и т.п.). Важные метрики: нагрузка на CPU, I/O, использование памяти, размер файлов БД, число блокировок, длительность самых долгих запросов, статистика autovacuum (видна в pg_stat_user_tables, поля last_vacuum и т.п.), состояние репликации (отставание реплики – в pg_stat_replication на мастере). Регулярно просматривайте логи на предмет ошибок или предупреждений (например, deadlock detected, checkpoints occurring too frequently и др.).
pgBadger – утилита для анализа логов PostgreSQL (на стороне клиента). Если логи настроены подробно (как упомянуто выше), pgBadger может парсить их и генерировать HTML-отчёты: распределение медленных запросов, частота различных команд, какие запросы самые тяжёлые. Он поддерживает различные форматы log_line_prefix (важно, чтобы были время и PID)pgbadger.darold.net. Запуск: pgbadger -f stderr /path/to/logfile – в результате получится отчет. Это удобно для ретроспективного анализа производительности за день/неделю.
Utilities CLI/GUI. Администратору не помешает знать утилиты: psql (командная строка psql – поддерживает команды \dt, \l, \x для удобства, табличный вывод, и пр.), pgAdmin 4 (официальная GUI – позволяет управлять БД через веб-интерфейс, выполнять запросы, просматривать статистику), DBeaver и другие клиенты. Об инструментах – см. раздел 4 далее.
Резюмируя: включите необходимые расширения мониторинга (pg_stat_statements, auto_explain и др.), логируйте медленные запросы, используйте статистические представления для наблюдения за активностью. Это позволит проактивно находить узкие места и настраивать систему под нагрузку.

3. Производительность
Оптимизация производительности PostgreSQL – обширная тема. Рассмотрим индексы, партиционирование, анализ планов и управление уборкой (VACUUM).

Индексы в PostgreSQL: B-Tree, GIN, GiST, BRIN
Индексы – критичный инструмент ускорения запросов. PostgreSQL поддерживает несколько типов индексов, каждый для своих случаевpostgresql.org:

B-Tree – индексы на основе сбалансированных деревьев. По умолчанию CREATE INDEX создаёт B-Treepostgresql.org, т.к. они подходят для большинства ситуаций. B-Tree эффективно поддерживает поиск по равенству и диапазону (=, <, <=, >, >=)postgresql.org. Он также может использоваться для LIKE ‘prefix%’ поиска по префиксу строки (если локаль C или специальный опкласс)postgresql.org. B-Tree обеспечивает упорядоченное хранение ключей, поэтому способен отдавать данные уже отсортированными (иногда избегая SORT в плане запроса). Пример: индекс по (column1) позволит быстро выполнить WHERE column1 = ... или BETWEEN ... AND .... Для текстовых полей с нечувствительным к регистру поиском B-Tree можно задействовать с опклассом citext или varchar_pattern_ops. Важно: B-Tree не поможет для условий LIKE '%substr%' (с ведущим %), т.к. такая маска не соответствует началу строки.
Hash – хэш-индексы (начиная с PostgreSQL 10 считаются надежными). Они работают только для равенства (=)postgresql.org. Раньше хэш-индексы редко использовались (B-Tree сопоставим или лучше, плюс до версии 10 хэш-индексы не реплицировались). Сейчас хэш может иметь ограниченное применение: например, для очень длинных ключей, где сравнение по хэшу быстрее, или для равенств на JSONB (но чаще GIN предпочтителен). В целом Hash индексы используются редко.
GIN (Generalized Inverted Index) – инвертированный индекс. Предназначен для данных, содержащих множество элементов: массивы, JSONB, полнотекстовые документы. GIN хранит пары (ключ -> список ROW ID) для каждого значения из документаpostgresql.org. Например, для массива значений GIN индексирует каждый элемент, для JSONB – каждую пару ключ-значение (зависит от опкласса), для текста – каждое слово. GIN эффективен для поиска присутствия элемента: WHERE 'foo' = ANY(array_col) или jsonb_col ? 'key' или full-text @@ поиск по tsvector. GIN-индекс, грубо говоря, позволяет быстро найти все строки, в которых содержится искомый компонент. Минусы GIN: он сравнительно «тяжёлый» при модификациях (INSERT/UPDATE), т.к. приходится обновлять много позиций (каждое слово или ключ – отдельная запись)enterprisedb.com. Поэтому вставки в таблицу с GIN индексом медленнее, а сам индекс занимает больше места. Однако при поиске по содержимому – незаменим. Пример: для JSONB колонки data индекс GIN (опкласс jsonb_path_ops или jsonb_ops) позволяет запросы WHERE data @> '{"status": "active"}' (проверка, содержит ли JSON поле status со значением “active”) выполнять очень быстро – по индексу.
GiST (Generalized Search Tree) – это «обобщённое дерево» для различных задач. Сам по себе GiST – это каркас, а поведение определяется опклассом. Например, стандартные опклассы GiST включают индексы для геометрических типов (точки, полигоны) – они хранят bounding box объектов и поддерживают такие операторы, как «intersects», «contains» для геометрииpostgresql.org. GiST также используется для индексов по диапазонам (range types) – чтобы ускорить WHERE ts_range && '[2023-01-01, 2023-02-01]' (пересекается ли диапазон). Ещё GiST может создавать лингвистические (терминологические) индексы: к примеру, есть опкласс pg_trgm (триграммы) – он может быть на основе GiST или GIN, позволяя поиск по шаблону %строка%. GiST поддерживает поиск ближайших соседей (K-NN search) для некоторых опклассов – например, можно быстро найти 10 ближайших точек к заданной координате, используя оператор расстояния <->postgresql.org. Выбирая GiST или GIN для полнотекстового поиска: GIN обычно быстрее при чтении, GiST – может быстрее при вставке и позволяет сразу учитывать рейтинги (поиск ближайших соседей для ранжирования документов по релевантности). В большинстве случаев для полнотекста выбирают GIN (быстрый поиск), а для геоданных – GiST (Rectangular bounding boxes). Итого: GiST – универсальный инструмент, применяемый для сложных пользовательских типов (гео, фасетный поиск), поддерживает нестандартные операторы.
SP-GiST (Space-partitioned GiST) – ещё один обобщённый индекс, позволяющий использовать другие структуры (например, quadtree, kdtree, radix tree)postgresql.org. В стандартной поставке SP-GiST есть опклассы для точек (2D), для текстовых шаблонов (prefix tree для LIKE) и др. Редко применяется напрямую, но знать стоит: SP-GiST может быть эффективен для разреженных данных или специальных задач (например, индекс префиксов строк – быстрый поиск по LIKE 'prefix%').
BRIN (Block Range Index) – индиксы по блокам. Очень компактные индексы, хранящие для каждого диапазона страниц (например, по 128 страниц = ~1МБ, настраивается pages_per_range) минимум и максимум значения колонкиpostgresql.org. Подход: если данные в таблице отсортированы или коррелированы с физическим порядком, BRIN поможет выполнить диапазонные запросы практически без затрат. Пример: большая таблица логов с полем timestamp по возрастанию – BRIN-индекс на этом поле займет килобайты, а запрос WHERE timestamp BETWEEN '2023-01-01' AND '2023-01-31' быстро найдёт диапазон блоков, где могут быть такие значенияpostgresql.org. Блоки вне диапазона сразу отсеются. BRIN не даёт точной позиции – только указывает «в этом диапазоне страниц есть значения в нужном интервале», и PostgreSQL потом читает те страницы и фильтрует записи. Поэтому BRIN эффективен, когда данные сильно кластеризованы. Типичные кейсы: огромные архивные таблицы, отсортированные по дате, идентификатору, гео-штука (например, GPS координаты, которые по таблице идут более-менее сгруппировано). Индекс BRIN практически не влияет на вставки (очень маленький и только дописывается) и требует периодического summarize (проводится autovacuumом).
Когда какой индекс использовать:

По умолчанию – B-Tree для ключевых колонок (PK, FK, часто фильтруемые поля).
GIN – для JSONB, ARRAY, TSVECTOR (полнотекстовый поиск), когда нужно искать по содержимому. Например, для столбца tags text[] запрос WHERE 'postgres' = ANY(tags) ускорит GIN.
GiST – для географических данных (тип geometry из PostGIS) – почти всегда, для диапазонов (тип tsrange и др., хотя тут и B-Tree может работать через GiST опкласс), для поиска ближайшего соседа.
BRIN – для очень больших таблиц (десятки миллионов+ строк), где значения монотонно увеличиваются или коррелируют с физическим расположением. Например, таблица измерений с возрастающим временем – BRIN по времени позволит быстро отбирать недавние данные. Также BRIN хорош для экономии места: большой таблице можно сделать как основной индекс BRIN + последовательное сканирование, если она лежит на SSD – иногда достаточно, если запросы почти всегда по недавнему диапазону.
Hash – крайне редко, только равенство. Может быть полезен при длинных текстовых ключах, но чаще B-Tree достаточно.
Продвинутые приёмы с индексами:

Индекс-обратные (covering indexes): в PostgreSQL есть Index-Only Scan – когда запрос может быть выполнен, читая только данные из индекса, не обращаясь к таблице. Это возможно, если индекс содержит все колонки, нужные запросу, и все записи в нужных страницах индексных видимы (не удалены, контроль через Visibility Map). Чтобы этого достичь, можно создавать индексы с включёнными колонками (PostgreSQL 12+): CREATE INDEX ... INCLUDE (col1, col2). Такие поля не участвуют в ключе индексного дерева, но хранятся на листьях – чтобы покрыть запрос. Пример: SELECT data, value FROM metrics WHERE ts = ... – если сделать индекс по (ts) INCLUDE (data, value), то Index-Only Scan вернёт сразу data и value.
Partially-Indexed Data: PostgreSQL позволяет частичные индексы – с условием. Например, CREATE INDEX idx_active_users ON users(status) WHERE status = 'ACTIVE'; – индексирует только активных пользователей. Запросы WHERE status='ACTIVE' будут очень быстры, а неактивные не тратят место в индексе. Это полезно, когда в таблице маленькая горячая часть, а остальное редко запрашивается.
Оптимизация вставок в GIN: Для GIN-индексов есть параметр fastupdate (по умолчанию on), который собирает вставки в куст, применяет их потом пакетно. В PostgreSQL 14+ fastupdate всегда effectively on (стало default, а в PG 12+ GIN и без того улучшен). Если вставки всё равно тормозят – можно временно отключить индекс или создавать GIN индекс после загрузки большого объёма данных.
Параллельные индексы: B-Tree, GiST, GIN поддерживают параллельное построение (index build) на множестве ядер, что ускоряет создание индекса на больших таблицах.
Партиционирование таблиц: декларативное партиционирование и приёмы
Партиционирование – разделение одной логической таблицы на несколько физических кусочков (partitions). Это делается для управляемости очень больших таблиц и повышения эффективности определённых запросов. PostgreSQL поддерживает декларативное партиционирование (с версии 10) – когда вы указываете шаблон разделения, и СУБД сама маршрутизирует записи в нужные партиции. 

Типы партиционирования:

Range (диапазоны) – каждый партишен отвечает за диапазон значений ключа. Например, партиционирование по дате: январь 2023 в одной партиции, февраль 2023 – в другой и т.д.
List – партиционирование по спискам значений. Например, партиция для region IN ('Europe','Asia'), другая – для region IN ('Americas') и т.д.
Hash – хеш-разделение (с PG 11): партиций определённое число, строка идёт в партицию по хэш-функции от ключа (равномерное распределение).
Настройка партиций:
Чтобы создать партиционированную таблицу, используется CREATE TABLE ... PARTITION BY RANGE/ LIST/ HASH (col). Затем для каждой партиции: CREATE TABLE ... PARTITION OF parent FOR VALUES .... Пример:

CREATE TABLE measurements ( ts timestamptz, value numeric ) PARTITION BY RANGE (ts);CREATE TABLE measurements_2023_01 PARTITION OF measurements FOR VALUES FROM ('2023-01-01') TO ('2023-02-01'); CREATE TABLE measurements_2023_02 PARTITION OF measurements FORVALUES FROM ('2023-02-01') TO ('2023-03-01'); -- и т.д.
В декларативном подходе можно также указать DEFAULT партицию, куда попадут не подходящие под другие диапазоны данные (например, если вставили запись с датой за пределами указанных) – полезно, чтобы не падали вставкиaccess.crunchydata.com. 

Почему партиционировать:

Улучшается производительность запросов, которые обращаются к части данных. Если запрос содержит условие по партиционному ключу, планировщик выполняет pruning – отсекает ненужные партиции и сканирует только соответствующие. Например, запрос ... WHERE ts >= '2023-02-01' AND ts < '2023-03-01' обратится только к партиции за февраль 2023, а остальные в план даже не войдут. Это ускоряет чтение пропорционально числу партиций – вместо сканирования 100 млн строк всей таблицы читается, например, 8 млн строк одной партиции.
Масштабируемость: партиции можно хранить на разных Tablespace (например, старые данные на более медленном диске).
Обслуживание: крупные операции можно делать путем манипуляции партициями. Например, удалить большое количество старых данных – вместо DELETE миллионов строк можно просто DROP PARTITION – это мгновенно удалит файл и не нагрузит WALaccess.crunchydata.com. Или архивировать данные: ALTER TABLE ... DETACH PARTITION – отсоединить партицию (она становится обычной таблицей) и, например, загрузить её на архивный сервер. Bulk загрузка данных тоже упрощается: можно создать новую партицию и загрузить в неё данные отдельно, минимально влияя на остальные.
Автоочистка: если настроить pg_partman (расширение, автоматизирующее создание партиций), можно без участия DBA создавать новые разделы (например, каждый месяц) и удалять старые по ретеншен-политике.
Лучшие практики партиционирования:

Партиционировать имеет смысл очень большие таблицы (правило – если таблица на сотни миллионов строк или десятки гигабайт)access.crunchydata.com. На мелких таблицах партиции только усложнят планировщик без выгоды.
Выбирайте ключ партиции так, чтобы запросы часто могли фильтровать по нему. Классический случай – timestamp (временной признак) для логов, метрик. Тогда диапазонные запросы за период задействуют партиции. Другие случаи: географический признак, идентификатор клиента (если разные клиенты всегда работают со своими данными).
Не создавайте слишком много партиций. Хотя PostgreSQL 15+ значительно улучшил масштабирование (сотни и даже тысячи партиций обрабатываются лучше, чем раньше), всё же очень большое число разделов (скажем, >1000) приводит к увеличению накладных расходов планировщика и автовакуума. Обычно достаточно разбивать по крупным интервалам – например, по месяцам (12 партиций в год). Если данных очень много, можно по дням (365 в год), но мониторьте планировщик.
Обязательно поддерживайте индексы на партициях. В декларативной схеме можно создать индекс сразу на родительской таблице – тогда он автоматически создастся на всех партициях (кроме исключений). Индексы нужны так же, как и без партиций, но учтите: на каждый раздел свой индекс (нет глобального индекса). Поэтому уникальный ключ, покрывающий весь набор, возможно, придётся реализовывать по-другому (например, через включение ключа партиции).
pg_partman расширение очень помогает: он может автоматически создавать будущие партиции. Например, держать на 2 недели вперёд партиции по дням (параметр premake – сколько заранее создать)access.crunchydata.com, а старые – удалять, сохраняя только нужную историю. Это спасает от ситуации, когда внезапно приходит новая дата, а партиции нет – иначе вставка упадёт (или уйдёт в DEFAULT, если определена). Pg_partman работает как фоновой планировщик: можно вызвать функцию run_maintenance() регулярно (через cron или pg_cron), и он будет делать CREATE PARTITION/DROP PARTITION по расписанию.
Запросы. Партиции прозрачны для SQL – вы обращаетесь к родительской таблице. Однако, чтобы помочь планировщику, всегда включайте условие по партиционному ключу в запросы, иначе придётся читать все партиции. Например, если у вас партиция по дате, а запрос SELECT * FROM events WHERE user_id=5 – он вынужден пройти по всем партициям, т.к. нет фильтра по дате. Решение – добавить хоть какой-то диапазон по дате, или если это распространено – возможно, ваш ключ партиционирования выбран неудачно.
Кластеризация данных. Если помимо партиции нужен ещё один ключ для частых range-сканов, можно внутри каждой партиции отсортировать данные (командой CLUSTER по индексу или pg_repack) – это улучшит локальность доступа. Партиции меньше, их можно чаще перебирать.
Производительность партиционирования: При правильном использовании запросы по ключу работают быстрее (меньше данных сканируется). Однако вставки и обновления могут слегка замедлиться, так как система должна определить партицию (операция O(log N) по числу партиций) и выполнить вставку в нужной партиции. На больших N это может стать ощутимо, но обычно пренебрежимо для разумных чисел партиций. 

Проблемные места:

Партиционирование не решает проблемы индексного увеличения для больших объёмов – например, COUNT(*) по всей таблице всё равно медленный (надо пройти по всем партициям). Но можно запускать такие запросы параллельно на партициях (PostgreSQL умеет параллельно сканировать партиции).
Транзакции, затрагивающие много партиций, могут вызывать рост ресурсов (каждая партиция – своя очередь блокировок, и т.п.).
Внешние ключи от партифицированных таблиц не поддерживаются (нельзя сделать REFERENCES на всю партиционированную таблицу, хотя 15 версия кое-что улучшила). Решается созданием FK на каждую партицию – расширения (например, pg_pathman раньше) это позволяли, сейчас можно вручную или отказаться от FK, применив логический контроль.
Итог: партиционирование – мощный инструмент управления большими данными. Применяйте его, когда нужно облегчить работу с “историческими” данными или ускорить типовые диапазонные запросы. Помните, что выгода проявится только при очень больших размерах и правильном выборе ключа.

EXPLAIN/ANALYZE и планировщик запросов
Планировщик запросов (Query Planner) в PostgreSQL решает, как выполнить каждый SQL: какой индекс задействовать, как соединить таблицы (Nested Loop, Hash Join, Merge Join), делать ли последовательное сканирование и т.д. Для оптимизации важно уметь читать планы. 

EXPLAIN – команда, которая выводит план запроса без его выполнения. Пример:

EXPLAIN SELECT * FROM orders WHERE customer_id = 123;
может вывести:

Index Scan using idx_orders_customer on orders  (cost=0.42..35.00 rows=10 width=...)
  Index Cond: (customer_id = 123)
Здесь видно, что будет Index Scan по индексу idx_orders_customer с предикатом (customer_id = 123). cost=0.42..35.00 – внутренние единицы стоимости (первые – стартовые, вторые – суммарные). cost считается относительными: ~1.0 соответствует, условно, стоимости чтения 1 страницы с диска. rows=10 – прогноз кол-ва строк, width – средний размер строки в байтах. Планировщик стремится минимизировать cost. 

EXPLAIN ANALYZE – выполняет запрос и показывает реальное исполнение. Например:

EXPLAIN ANALYZE SELECT * FROM orders WHERE customer_id = 123;
выводит план с дополнительными колонками (actual time, rows). Например (условно):

Index Scan using idx_orders_customer on orders  (cost=0.42..35.00 rows=10 width=...)
 (actual time=0.5..1.2 rows=12 loops=1)
 Index Cond: (customer_id = 123)
Появилось (actual time=0.5..1.2 rows=12 loops=1). Это значит: фактически на индекс-сканирование ушло от 0.5 до 1.2 мс (начало-конец), получено 12 строк, цикл выполнен 1 разpostgresql.orgpostgresql.org. loops >1 бывают, когда узел плана выполнялся многократно (например, inner scan в Nested Loop делался для каждой строки внешней таблицы). В таких случаях actual rows и time показываются в среднем на один loop, а loops – количество повторовpostgresql.org. Чтобы получить общее фактическое время узла, надо умножить среднее на loops (план обычно в конце показывает Execution Time: X ms – полное время). 

Buffers: Если включить опцию BUFFERS (или auto_explain.log_buffers), EXPLAIN покажет статистику по блокам:

Buffers: shared hit=24 read=6
Это означает, что узел прочитал 30 страниц: 24 нашли в shared_buffers (cache hits), 6 пришлось читать с диска (read)postgresql.org. hit – попадание в кеш (быстро), read – физ. чтение с диска, dirtied/written – страницы изменены или сброшены. Анализ Buffers помогает понять, был ли запрос I/O-bound (много read) или всё брали из памяти (высокий hit). 

Важные моменты чтения плана:

Смотрите, где actual rows сильно отличаются от rows (оценка). Большие расхождения означают неточные статистики (надо выполнить ANALYZE) или сложные корреляции, которых планировщик не учёл. Например, оценка rows=10, а реально rows=10000 – значит планировщик ожидал мало строк (и выбрал, допустим, Nested Loop), а вышло много – это может привести к медленному выполнению. И наоборот – думал будет много, а оказалось мало.
Тип сканирования: Sequential Scan (Seq Scan) – полный просмотр таблицы. Index Scan – поиск по индексу, причем для каждой найденной ссылки читается соответствующая строка. Bitmap Index Scan + Bitmap Heap Scan – планировщик выбрал собрать битовую карту совпадающих страниц, затем загрузить эти страницы пачкой; это происходит, когда возвращается много строк (Bitmap-скан уменьшает случайные доступа, группируя их). Index Only Scan – как упоминалось, индексы обрабатываются без обращения к таблице (будет строчка Heap Fetches: 0 если вообще не трогал таблицу).
Соединения: Nested Loop – вложенные циклы (для каждой строки внешней – просматриваем внутреннюю, иногда с индексом), хорошо работает для небольших внешних или очень выборочных внутренних. Hash Join – строит хеш по одной таблице (или подзапросу) и затем сканирует другую, ищет в хеше – эффективен для больших равноправных множеств по = (если влезает в память). Merge Join – сливает два отсортированных потока, полезно для диапазонов или когда обе входные последовательности уже упорядочены по ключу соединения (например, есть подходящие индексы по join-колонкам).
Sort: Если видите Sort Method: external merge или Disk usage – сортировка не влезла в work_mem и пошла на диск, это плохо для скорости – увеличьте work_mem или оптимизируйте запрос.
Параллелизм: План может содержать узлы Gather / Gather Merge и под ними Parallel Seq Scan, Parallel Hash Join и т.п. PostgreSQL автоматически пытается распараллелить последовательное сканирование больших таблиц и некоторые join’ы, если позволяет ситуация и max_parallel_workers_per_gather > 0. Actual loops у параллельных узлов – каждый worker.
Роль статистики: PostgreSQL полагается на статистику данных (собираемую ANALYZE). Это гистограммы, выборочные распределения для колонок. Если статистика устарела или default_statistics_target слишком мал (по умолчанию 100), оценки будут неточны. Например, если в таблице очень неравномерное распределение, можно повысить statistics_target для данной колонки (до 1000 максимум) и выполнить ANALYZE, чтобы планировщик знал о “heavy-tailed” значениях. 

Пример разборки плана:

Nested Loop  (cost=4.65..118.50 rows=10 width=488) (actual time=0.017..0.051 rows=10 loops=1)
   ->  Bitmap Heap Scan on tenk1 t1  (cost=4.36..39.38 rows=10 width=244) (actual time=0.009..0.017 rows=10 loops=1)
         Recheck Cond: (unique1 < 10)
         Heap Blocks: exact=10
         Buffers: shared hit=3 read=5 written=4
         ->  Bitmap Index Scan on tenk1_unique1_idx  (cost=0.00..4.36 rows=10 width=0) (actual time=0.004..0.004 rows=10 loops=1)
               Index Cond: (unique1 < 10)
               Buffers: shared hit=2
   ->  Index Scan using tenk2_unique2_idx on tenk2 t2  (cost=0.29..7.90 rows=1 width=244) (actual time=0.003..0.003 rows=1 loops=10)
         Index Cond: (unique2 = t1.unique2)
         Buffers: shared hit=24 read=6
 Planning:
   Buffers: shared hit=15 dirtied=9
 Planning Time: 0.485 ms
 Execution Time: 0.073 ms
Здесь Nested Loop соединяет результаты из t1 (где unique1<10) и соответствующие строки из t2. t1 отфильтрован Bitmap Index Scan-ом по условию unique1 < 10 (нашлось 10 строк, actual rows=10). Потом для каждой (loops=10) выполняется Index Scan по t2 (loops=10, каждый дал 1 строку). Buffers показывают, что для t1 было 5 чтений с диска (видимо, страницы не были в кеше) и 3 попадания. t2 читался 6 страниц с диска и 24 хита. Планировщик очень точно оценил rows=10 vs actual 10 – потому что значения уникальны и распределение равномерное. Execution Time 0.073 ms – очень быстро, все данные были маленькие. 

Как использовать EXPLAIN на практике:

Запускайте EXPLAIN (ANALYZE, BUFFERS) для медленных запросов на тестовом окружении или в продакшене (с осторожностью – в прод может выполнить долгий запрос; можно отменить). Анализируйте, какая часть плана самая «дорогая» (смотрите на большие время на узлах).
Если узел Seq Scan и rows очень большой – подумайте об индексе.
Если Nested Loop, а inner side возвращает очень много (loops * rows >> 1000) – может лучше Hash Join (который не повторяет сканы)? Попробуйте SET enable_nestloop=off и посмотреть альтернативный план.
Если видите Sort (disk) – увеличьте work_mem и повторите.
Если видите неожиданный Bitmap Heap Scan вместо Index Scan – планировщик решил, что выборка не очень селективна. Возможно, много значений – тогда всё нормально. Если вы уверены, что условие очень селективно, но планировщик думает иначе – проблема со статистикой или множественными условиями (которые Corellation not known). Поможет ANALYZE или multivariate stats (с PG 14 появились extended statistics для корреляций – CREATE STATISTICS).
Важная часть оптимизации – профилирование: используйте auto_explain (как выше) или просто EXPLAIN ANALYZE, чтобы увидеть реальные цифры. Нередко небольшое изменение запроса (добавить индекс, перестроить запрос) снижает затраты в разы.

VACUUM/ANALYZE и настройка autovacuum
MVCC приносит цену: обновлённые и удалённые строки не удаляются сразу из таблицы, а помечаются как «неактуальные» (не видимые новым транзакциям). Эти «мертвые» строки занимают место и должны периодически убираться – этим занимается команда VACUUMpostgresql.org. Также со временем нужно обновлять статистику (команда ANALYZE, или VACUUM ANALYZE делает и то, и другое). Автоматизация этого – задача autovacuum-демона. 

VACUUM (обычный):

Удаляет физически невидимые более версии строк (те, чьи транзакции завершились и ни одна открытая транзакция их не видит). Он помечает пространство как reusable (может быть занято новыми данными)postgresql.org. Обычный VACUUM не сжимает таблицу – он просто отмечает места свободными (кроме случая, когда целые страницы в конце таблицы пустые – тогда они возвращаются ОС)postgresql.org.
Обновляет visibility map – это битовая карта страниц, где нет необработанных обновлений. Этот map нужен для index-only scan: если вся страница помечена как «нет неопределённых tuples», то индекс-онли скан может не трогать её, доверяя индексуpostgresql.org.
Предотвращает разрастание файла: без Vacuum ваша таблица будет только расти, ибо старые версии накапливаются.
VACUUM FULL – перестраивает таблицу полностью, убирая весь пустой промежуток, и пишет новую копию таблицы без дырpostgresql.org. В результате размер сокращается максимально, но:

Требует блокировки таблицы на запись на всё время выполнения (простой).
Требует дополнительное дисковое пространство (нужна копия).
Долго выполняется (по сути, переписывает всю таблицу).
Поэтому VACUUM FULL не должен использоваться регулярно, только в экстренных случаях: например, если таблица сильно раздута (80% пусто) и мы хотим вернуть место ОС, и можем позволить простой. Цель регулярного обслуживания – не доводить до необходимости VACUUM FULLpostgresql.org.
Автоочистка (autovacuum). По умолчанию PostgreSQL запускает autovacuum-воркеры, которые периодически вакуумят и анализируют таблицы. В postgresql.conf:

autovacuum = on (по умолчанию да).
Параметры autovacuum_vacuum_threshold (по умолчанию 50) и autovacuum_vacuum_scale_factor (0.2) определяют, когда запускать вакуум: условие примерно такое – если с последнего vacuum прошло более threshold + scale_factor * N изменений строк, то таблицу стоит вакуумить. Например, для таблицы с 1 млн строк: threshold 50 + 0.2*1e6 = 200050; т.е. после ~200k модификаций autovacuum её запустит.
Аналогично для autovacuum_analyze_threshold (50) и scale_factor (0.1 по умолчанию) – когда собрать статистику (ANALYZE).
Есть ограничения: autovacuum не запускается, если таблица меньше autovacuum_vacuum_threshold изменений и scale_factor*N, как выше. Если у вас огромная таблица, 20% mod может быть слишком большим – поэтому для крупных таблиц scale_factor лучше уменьшить. Напр., для 100 млн строк 20% = 20 млн. Возможно, стоит поставить scale_factor=0.02 (2%) для таких, чтобы чаще чистилось. Можно переопределять параметры per-table (через ALTER TABLE ... SET (autovacuum_vacuum_scale_factor=..., autovacuum_vacuum_threshold=...)).
Autovacuum запускается фоновой службой с интервалом (параметры autovacuum_naptime = 1 мин – проверяет таблицы раз в минуту, autovacuum_max_workers = 3 по умолчанию – сколько потоков может параллельно вакуумить разные таблицы).
Autovacuum by default работает “лениво”, чтобы не мешать: у него есть cost delay. autovacuum_vacuum_cost_limit (200) и autovacuum_vacuum_cost_delay (20ms) – механизмы чтобы вакуум почистил чуть страниц и поспал. Если у вас сильная нагрузка записи, можно увеличить cost_limit или уменьшить delay, чтобы autovacuum работал агрессивнее (но потенциально нагружал диск). В PostgreSQL 12+ autovacuum умеет “притормаживать” под нагрузкой, но ручная настройка всё равно важна.
Настройка autovacuum:

Убедитесь, что он вообще работает (в pg_stat_activity должны иногда мелькать процессы типа autovacuum: VACUUM public.yourtable). Если autovacuum отключён или сильно отстаёт, таблицы раздуются мёртвыми кортежами, а ещё может наступить опасность XID wraparound (каждая транзакция – номер, ~4 млрд уникальных номеров – если не убирать старые, через ~2 млрд XID Postgres начнёт принудительно vacuum-ить чтобы не случился переполнения счетчика)postgresql.orgpostgresql.org.
Большие таблицы с постоянными изменениями: возможно, дефолты autovacuum срабатывают поздновато. Например, таблица на 100 млн строк, 20% = 20 млн изменений – а 20 млн может накопиться долго, и за это время таблица разбухнет. Решение: снизить scale_factor, например до 0.05 (5%) и threshold поднять немного, или даже задать scale_factor=0 (отключить процент) и threshold скажем 500k – тогда vacuum будет через каждые 500k изменений.
Автовакуум не успевает. Если постоянно идёт запись, autovacuum может работать почти непрерывно. Смотрите в pg_stat_all_tables: поля n_dead_tup (кол-во мёртвых кортежей), last_autovacuum. Если n_dead_tup очень большое и растёт – autovacuum не справляется. Можно повысить autovacuum_max_workers (но каждый – нагрузка CPU и диска), или настроить параллельный vacuum (PG 13+ VACUUM может в несколько потоков, но autovacuum так не делает).
Freeze (заморозка XID): autovacuum также защищает от переполнения счетчика транзакций. Старые неиспользуемые XID помечаются как Frozen. Если autovacuum выключен, через примерно 2 миллиардов транзакций СУБД насильно стопорнёт записи и начнёт emergency vacuum (это очень плохо). Не отключайте его! В log будет предупреждение, если таблица близка к wraparound (если видели «database is not accepting commands to avoid wraparound» – это оно). Так что autovacuum must run.
Когда запускать ручной VACUUM:

Если вы только что удалили или обновили огромную часть таблицы (например, DELETE FROM table WHERE ... затронул 30% строк), а ждать autovacuum долго – можете выполнить VACUUM ANALYZE table; сами, чтобы быстрее освободить место и обновить статистику.
После загрузки большого объёма данных стоит запустить ANALYZE (или VACUUM (ANALYZE)) чтобы обновить статистику – иначе планировщик будет «думать», что таблица пуста, что неверно.
Принудительный FULL – как сказано, очень редко. Иногда лучше решается партиционированием (например, отрезать старые данные вместо полного вакуума).
Если autovacuum давится об непростой запрос (бывает, VACUUM can be IO heavy, но он уважает cost_delay – поэтому он обычно не мешает критически). Выключать autovacuum совсем – плохая идеяpostgresql.org. Вместо этого, можно (1) настроить его более щадяще (если мешает) или (2) наоборот агрессивнее, чтобы успевал.
Диагностика bloat (раздувания): Посмотрите на pg_stat_all_tables: n_live_tup vs n_dead_tup. Если dead много (более 10-20% от live) – таблица содержит много мусора. Также в расширении pgstattuple есть функция pgstattuple('table'), показывающая % занятости, или используйте утилиты типа pg_bloat_check. Если bloat велик (например, 50% таблицы мёртвое) – надо увеличить частоту vacuum или, разово, сделать VACUUM FULL или CLUSTER, чтобы вернуть место. Но учтите блокировку при этом. 

Автовакуум и индексы: VACUUM чистит и таблицу, и каждый индекс (удаляет ссылки на удалённые строки). Индексы, кстати, тоже могут «бухнуть» – если часто обновляется индексируемое поле, индекс тоже хранит старые ссылки. VACUUM на индексе тоже помечает свободное место внутри индексных страниц. Однако PostgreSQL не сжимает индексы автоматически. Если индекс стал гораздо больше, чем должно (например, были массовые удалении, но ключи все удалены остаются пустыми ветвями), то иногда помогает REINDEX – перестроить индекс. Но это блокирует индекс (в PG 12+ REINDEX CONCURRENTLY можно без полной блокировки, но дольше). В целом, хорошо настроенный autovacuum снижает необходимость reindex. 

Вывод: Держите автовакуум включённым, следите за его работой. “VACUUM early, VACUUM often” – лучше часто понемногу, чем редко и потом мучительно долго. Это сохранит вашу БД в стабильном размерном состоянии и планировщик будет счастлив свежими данными о статистике.

4. Расширения и экосистема PostgreSQL
Одно из преимуществ PostgreSQL – богатая экосистема расширений, дополняющих функциональность. Рассмотрим полезные расширения и инструменты, а также работу с современными возможностями (JSONB, полнотекстовый поиск, незалогированные таблицы, материализованные представления).

Полезные расширения PostgreSQL
PostGIS – знаменитое геопространственное расширение. Добавляет поддержку геометрических и географических типов (точки, полигоны, линии), функции для гео-расчётов (площади, расстояния, пересечения) и пространственные индексы (GiST/SP-GiST для геоданных). По сути, превращает PostgreSQL в полноценную GIS-систему. PostGIS расширяет возможности PostgreSQL, позволяя хранить, индексировать и запрашивать гео-данные (координаты, формы)postgis.net. Используется для картографических сервисов, геоаналитики и т.д. С точки зрения установки – это расширение (обычно пакет postgis, и затем CREATE EXTENSION postgis;). Достаточно знать, что PostGIS – почти отдельная огромная тема, но интегрирована в PG.
TimescaleDB – открытое расширение для временных рядов (time-series). Это фактически надстройка (ранее форк) PostgreSQL, предоставляющая оптимизации для данных, помеченных временем: прозрачное партиционирование (гипертаблицы), сжатие исторических данных, специальные функции агрегации по времени (time_bucket и др.). TimescaleDB устанавливается как расширение (CREATE EXTENSION timescaledb;) и позволяет создавать hypertable – таблицу, автоматически партиционируемую по времени и, опционально, по ключу (“space” part). Главная идея – масштабировать обработку временных рядов (метрик, логов) без ручного партиционирования. TimescaleDB также поддерживает колоночное сжатие старых данных. Пример:SELECT time_bucket('1 day', ts) AS day, avg(value) FROM metrics WHERE ts > now() -interval '30 days' GROUP BY day;– агрегирует среднесуточно за последние 30 дней, и Timescale может выполнять такие агрегации очень эффективно. Как заявлено, TimescaleDB – расширение PostgreSQL для высокопроизводительной аналитики по временным рядамgithub.comgithub.com. Это популярное решение для хранения телеметрии, IoT, трейдинговых данных и т.п. Обратите внимание: начиная с Timescale 2.0, часть функций стала проприетарной (в «enterprise»), но основной функционал открыт.
pg_partman – расширение PostgreSQL Partition Manager. Автоматизирует создание и обслуживание партиций по времени или последовательности. Вы сами можете, конечно, создать партиции, но pg_partman берет рутину на себя: создает новые партиции опережающе, вызывает DROP старых по расписанию, обеспечивает наличие DEFAULT и ее обслуживание. Как указано в доке, pg_partman упрощает менеджмент партиций по времени/числуaccess.crunchydata.com. Вы можете настроить интервал (например, партиции по дням, держать 30 дней истории, создавать за 7 дней вперёд). Оно использует фоновой воркер (с PG >= 11) или cron job.
После установки (CREATE EXTENSION pg_partman;) конфигурация осуществляется через таблицу настроек и вызов функций: create_parent() – делает таблицу партиционированной, создает начальные партиции; run_maintenance() – создаёт новые / удаляет старые. Pg_partman особенно удобен, когда партиций уже сотни – он обрабатывает и, например, не даёт бесконтрольно разрастаться их числу (поддерживает retention), а главное – не даёт вашему приложению влететь в ситуацию “нет подходящей партиции” (создаёт заранее)access.crunchydata.com.
Пример:SELECT partman.create_parent('public.log_table', 'log_date', 'native', 'daily', p_start_partition := '2023-01-01');– сделает таблицу log_table партиционированной по дням от 2023-01-01. Дальше pg_partman по default будет держать premake = 4 будущих партиций, вы можете менять параметры (в part_config таблице).
Summing up: Если вы используете партиционирование – pg_partman избавит от рутины, уменьшит риски. Он популярен и хорошо поддерживается сообществом.
pg_stat_statements – мы уже обсудили, но напомним: расширение для мониторинга запросов. Обязательный инструмент DBA. Его нужно явно включать и создавать. После этого – смотрите view pg_stat_statements для выявления тяжёлых запросов. (См. раздел 2). Очень полезен, без него «куда бечь» при проблемах непонятно. Цитируя: модуль pg_stat_statements предоставляет средство отслеживания статистики выполнения всех SQL-выраженийpostgresql.org.
pg_cron – расширение-планировщик заданий внутри Postgres. Позволяет по крон-расписанию запускать SQL. Например,SELECT cron.schedule('vacuum_job', '0 3 * * *', 'VACUUM ANALYZE mytable');– выполнит каждый день в 3:00 вакуум для mytable. Pg_cron работает как background worker. Это удобно для тех, кто не хочет внешние cron jobs или когда SGBD в контейнере (чтобы не зависеть от внешней системы расписания). Pg_cron – простой крон-ориентированный планировщик задач для PostgreSQL, работающий внутри базыdocs.yugabyte.com. Удобно для автоматизации: очистка старых данных, регулярные отчёты, autovacuum tune (но лучше autovacuum), Materialized view refresh (если нужно в определённое время обновлять материализованные представления).
Установка: CREATE EXTENSION pg_cron; + настраивается cron.database_name (в каком из баз worker активен).
Аналоги: есть более продвинутое pgAgent (GUI аддон от pgAdmin) или pg_timetable. Но pg_cron – самый легковесный.
pg_partman, PostGIS, pg_cron, pg_stat_statements – это далеко не полный список. Другие популярные:
citext – модуль case-insensitive text. Добавляет тип данных citext (строка, сравнения по нижнему регистру) – удобен, чтобы не писать LOWER(column) в запросах и иметь уникальные ключи без учёта регистраpostgresql.orgpostgresql.org.
hstore – ключ-значение стор для маленьких справочников (до JSONB он был, сейчас JSONB вытесняет).
pg_trgm – триграммный индекс: эффективный поиск по шаблону LIKE ‘%foo%’ или по похожести (трёхсимвольные комбинации, оператор %==%). Хорош для реализации поиска по подстроке, авто-дополнения и т.п. Работает через GiST или GIN.
pg_crypto – криптографические функции: хэширование (MD5, SHA), генерирование случайных, шифрование. Например, gen_random_uuid() для получения UUID v4 (кстати, в PG13+ доступен просто при подключении pgcrypto, можно вместо uuid-ossp).
uuid-ossp – генерация UUID (v1, v4 и др.). Сейчас лучше использовать pgcrypto’s gen_random_uuid (требует CREATE EXTENSION pgcrypto;).
pg_repack – утилита (не расширение SQL, а внешняя) для online-рекомпакта таблиц и индексов без блокировок. Удобно, когда нужно “сжать” таблицу без простоя (использует логические триггеры).
Итого, расширения – это способ не переизобретать велосипед: прежде чем писать свою функцию, посмотрите, нет ли расширения. В PostgreSQL есть PGXN (сеть расширений) и множество готовых модулей.

Работа с JSONB, полнотекстовый поиск, unlogged tables, materialized views
JSONB (бинарный JSON) – одна из «фишек» PostgreSQL, позволяющая хранить полуструктурированные данные. Типы json (текстовый JSON, ввели в 9.2) и jsonb (бинарный, с 9.4) предназначены для хранения документа JSON прямо в записи. Разница json vs jsonb: json хранится как строка (и валидируется при вставке), а jsonb – в двоичном формате (разобран и оптимизирован для поиска)postgresql.org. JSONB при вставке имеет накладные расходы на разбор, но потом гораздо быстрее при запросах, и главное – поддерживает индексыpostgresql.org. Поэтому используйте jsonb почти всегда. JSONB не сохраняет порядок ключей и пробелы, объединяет дубли ключей (оставляет последний)postgresql.org, но эти детали редко критичны. 

В PostgreSQL богатый набор функций для JSONB:

Операторы: -> и ->> для получения поля/элемента (второй – текстовое значение), #> – для пути, @> – один JSON содержит ли другой (например, jsonb_col @> '{"status":"active"}'), ? – содержит ли ключ, ?|/?& – содержит ли хоть один/все из списка ключей.
Функции: jsonb_extract_path(), jsonb_array_elements(), to_jsonb() и др. А с PG12+ – поддержка SQL/JSON стандарта: функция jsonb_path_query, синтаксис @? (JSONPath).
Индексация JSONB: можно создать GIN-индекс, опкласс jsonb_path_ops (индексирует только presence ключей/значений) или jsonb_ops (полный индекс всех ключей и значений). С GIN можно ускорить ? (по ключу), @> (содержит JSON). Также возможно B-Tree индекс по выражению, например, (data->>'id') – если часто фильтруете по конкретному полю внутри JSON.
Использование: JSONB удобен, когда схема неточная или нужно хранить дополнительные атрибуты (гибкая схема). Он позволяет совместить NoSQL подход с SQL-возможностями. Однако не злоупотребляйте: если данные чётко структурированы, лучше нормализовать в колонки – так легче поддерживать целостность, типизацию и индексы.
Пример:

CREATE TABLE events(id serial, payload jsonb); INSERT INTO events(payload) VALUES('{"action": "click", "user": {"id": 123, "name": "John"}}'); SELECT payload->'user'->>'name' AS user_name FROM events WHERE payload->>'action' = 'click';
Этот запрос вернёт “John” для user_name, используя JSONB операторы. Для ускорения WHERE payload->>'action' = 'click' можно создать индекс:

CREATE INDEX ON events((payload->>'action'));
тогда будет B-Tree по значению action. Либо:

CREATE INDEX ON events USING GIN (payload jsonb_path_ops);
– GIN, ускоряющий любые запросы наличия ключей/значений. 

Полнотекстовый поиск – встроен в PostgreSQL через тип tsvector (текст, разбитый на лексемы с позицией) и tsquery (запрос). Он позволяет эффективно искать по тексту с учётом форм слов (стемминг) и т.п. Как пользоваться:

Преобразовать текстовую колонку в tsvector, например:ALTER TABLE articles ADD COLUMN fts tsvector; UPDATE articles SET fts =to_tsvector('russian', title || ' ' || content); CREATE INDEX idx_fts ON articles USING GIN(fts);– это материализованный подход (хранить vector). Или использовать функциональный индекс:CREATE INDEX idx_fts ON articles USING GIN(to_tsvector('russian', title || ' ' ||content));
Запрос:SELECT * FROM articles WHERE to_tsvector('russian', title||' '||content) @@ plainto_tsquery('russian', 'postgresql оптимизация');– найдёт статьи по словам “postgresql” и “оптимизация”.
Оператор @@ – соответствует ли документ запросу. plainto_tsquery – разберёт строку в tsquery (с учётом языка).
Поскольку to_tsvector(...) @@ to_tsquery(...) сделано, планировщик при наличии GIN индекса на tsvector будет использовать его. GIN индекс очень эффективен: поиск слов идёт почти мгновенно даже по миллионам документов.
PostgreSQL поддерживает ранжирование результатов: функция ts_rank/ts_rank_cd – вычисляет ранг (чем больше совпадений, ближе к началу текста, реже слово – тем выше ранг). Пример сортировки: ORDER BY ts_rank(fts, to_tsquery('...')) DESC. 

Улучшение полнотекста:

Используйте конфигурации (русский, english, etc) – они определяют стоп-слова и стеммер.
Настройте если нужно свои словари (synonym, thesaurus).
Можно реализовать поиск по части слова: с помощью расширения pg_trgm (3-граммы) – тогда LIKE '%ред%' будет использован GiST/GIN индекс trigram. Или комбинировать: trigram + fulltext (например, для коротких слов trigram полезнее).
Для многоязычного поиска – может понадобиться хранить отдельные tsvector для каждого языка.
Unlogged tables – специальные таблицы, чьи операции не пишутся в WALdba.stackexchange.com. Это достигается объявлением CREATE UNLOGGED TABLE .... Плюсы:

Вставки/обновления быстрее, т.к. не тратится время на WAL (уменьшает IO и CPU на формирование журнала)docs.aws.amazon.com.
Меньше WAL – если у вас временные данные, можно таким образом снизить поток WAL (и реплика не будет получать эти данные).
Минусы:
Не надёжны: при крэше сервера данные в unlogged таблице могут потеряться. После аварийного рестарта PostgreSQL просто обнуляет такие таблицы (он даже пишет в лог предупреждение). Они как бы “куклы” – без гарантии durabilitydocs.aws.amazon.com. В коммитах, кстати, rollback работает как обычно (не запись в WAL определяет rollback, а MVCC).
Не реплицируются: streaming replication передаёт только WAL, а unlogged не генерирует WAL – поэтому на реплике эти таблицы просто отсутствуют (создаются пустышки). Это означает, что если произойдёт failover, данные unlogged пропадут.
Use cases: sессионые временные данные, кэши, какие-то расчётные таблички, которые можно восстановить при сбое. Например, этап импорта данных – можно использовать unlogged промежуточную таблицу, быстро её заполнить (без WAL), обработать, потом перенести в нормальную таблицу и уже в итоговую внести. Или таблицы сбора метрик, где потеря последних секунд данных не критична.
Если требование – много писать и не грузить диск, а надёжность не важна – unlogged подходит. Пример: CREATE UNLOGGED TABLE temp_events(...); – запись в неё не будет генерировать WAL.
🛈 Совет: Если у вас heavy insert таблица, которую вы могли бы пометить unlogged, но всё же нужна надёжность – рассмотрите кластер без реплики и с fsync=off (аналог – но очень опасно, все данные могут убиться). Или подумайте, почему столько записи – может, стоит агрегировать или батчить.

Materialized Views (материализованные представления) – представление, чьи данные записаны на диск как результат запроса. Иначе говоря, это заранее вычисленный и сохранённый результат сложного запроса.

Создаётся: CREATE MATERIALIZED VIEW mv_name AS <query>. При создании сразу выполняет запрос и сохраняет результатpostgresql.org.
После этого SELECT * FROM mv_name; фактически читает таблицу с материализованными данными (быстро).
Проблема: данные не обновляются автоматически при изменении исходных таблиц (в отличие от обычных VIEW). Чтобы обновить, нужно выполнить REFRESH MATERIALIZED VIEW mv_name; – это заново выполнит запрос и заменит содержимое представленияpostgresql.orgstackoverflow.com. По умолчанию REFRESH работает с эксклюзивной блокировкой, но есть опция CONCURRENTLY – тогда представление перестраивается без блокировки чтения (но требует, чтобы был уникальный индекс на представлении).
Когда использовать: если у вас тяжёлый агрегирующий запрос, который меняется нечасто, или например ежедневный отчёт – можно материализовать его. Пользователи получают мгновенный SELECT (в обмен на «слightly stale data»). Материализованные view позволяют сэкономить время на запросах ценой работы на обновлениеstackoverflow.com. Хороший пример – дэшборды: обновляйте материализованные представления раз в 5 минут (cron job или pg_cron), а front будет за 5 мс получать готовые агрегаты.
Индексы: так как материализованное представление хранится как физическая таблица, на него можно создавать индексы (например, на колонку агрегата – для ускорения фильтрации). Это плюс по сравнению с обычным view.
Ограничения: нельзя явно задать условия обновления (только полный REFRESH, PG15 добавил начальную поддержку инкрементальных refresh for some cases, но это ограничено).
Materialized views – мощный инструмент, если грамотно применён. Например, вам нужен топ-1000 записей по какому-то критерию – такой запрос дорогой, а данные обновляются раз в сутки: можно ночью делать REFRESH, а весь день использовать результат.
Вопрос целостности: при REFRESH, если он не concurrent, запросы к view будут ждать (или видеть старые данные до commit refresh, зависит). Concurrent – не блокирует, но требует дополнительной памяти. 

Итог: PostgreSQL предоставляет возможности, привычные для NoSQL (JSONB) и продвинутого поиска (FTS), а также инструменты оптимизации (материализованные представления). Важно разумно применять:

JSONB – отлично для гибких схем, но индексы по JSONB продумывайте (GIN – при поиске внутри, функциональные – для конкретных полей).
FTS – используйте tsvector, GIN и не храните огромные сырые тексты без индекса, иначе поиск будет медленным.
Unlogged – замечательно для временных/кэширующих таблиц, ускоряет запись, но не для данных, которые нельзя потерять.
Материализованные представления – применяйте для тяжёлых агрегаций, которые нужно часто читать. Расписывайте план обновления (cron или триггеры, или ручной запуск).
CLI-инструменты (psql, pgcli, pgbadger и др.) и GUI-инструменты (pgAdmin, DBeaver, TablePlus)
CLI-инструменты:

psql – основной клиент командной строки PostgreSQL. Очень мощный: позволяет выполнять скрипты SQL, *-команды для метаданных (\dt – список таблиц, \d table – описание, \c – подключиться к базе, и т.д.), поддерживает автодополнение. В psql удобно делать отладку, писать админ.скрипты. Например:psql -h dbhost -U user -d mydb -f migrate.sqlвыполнит скрипт миграции. Или интерактивно:psql mydb mydb=# EXPLAIN ANALYZE SELECT * FROM foo;Psql хорошо умеет форматировать результат (\x – расширенный вывод, \pset для настроек). Это основной “швейцарский нож” DBA.
pg_dump / pg_restore – утилиты бэкапа/восстановления. Упомянем: pg_dump делает логический бэкап (SQL или custom format .dump), pg_restore – распаковывает .dump.
pg_basebackup – бэкап кластера на уровне файлов (для физического бэкапа).
psql – ещё один трюк: флаги \watch для повторения запросов (удобно мониторить, напр. SELECT count(*) FROM queue; \watch 5 – раз в 5 сек).
pgcli – сторонний улучшенный CLI (Python-приложение). Отличается удобством: автодополнение на лету (с подсказками из схемы), раскраска синтаксиса, приятный интерфейс. Для тех, кто много руками вводит SQL – pgcli повышает эффективность. Установка через pip, подключается так же, как psql. Pgcli не входит в поставку PG, но популярен.
pgbadger – как упоминалось, анализатор логов. Это не CLI взаимодействия с сервером, но CLI утилита для пост-анализа. Genерирует HTML, графики по логу. Поддерживает huge logs (крупные).
pgbench – утилита нагрузки (бенчмарк) поставляемая с PG. Может создавать тестовую БД и выполнять N параллельных потоков, определённое кол-во транзакций. Полезна для оценки производительности сервера, сравнения настроек.
pg_activity, pg_top – консольные “top-like” утилиты для PostgreSQL, показывающие активные запросы, блокировки в режиме реального времени.
GUI-инструменты:

pgAdmin 4 – официальная управляющая консоль (веб-приложение, обычно запускается локально или как веб-сервер). Позволяет через графический интерфейс делать всё: просматривать/создавать объекты БД, управлять ролями, выполнять запросы (есть редактор), строить графики объяснения плана, управлять бэкапами/restore, мониторингом (подключается к статистикам). PgAdmin полезен для тех, кто предпочитает GUI или незнаком с SQL командой для каждого действия. Но он известен, что не очень шустрый, т.к. тяжелый (Python/JavaScript). Впрочем, для админов бывает проще открыть pgAdmin, чем вспоминать DDL синтаксис.
DBeaver – универсальный DB-клиент (поддерживает PG, MySQL, Oracle etc.). Очень популярен у разработчиков. Дает удобный редактор SQL с автодополнением, экспорт/импорт CSV, визуальный просмотр схемы, ER-диаграммы. DBeaver хорош тем, что единый инструмент для разных СУБД, имеет сообщество. Для PG он тоже хорошо подходит, включая поддержку специфичных типов (например, показывает структуру JSON).
TablePlus – легковесный коммерческий (есть бесплатный) клиент для macOS/Windows. Быстрый, красивый UI, поддерживает основные СУБД. Любим многими за UX. По функциям более ограничен, чем DBeaver, но для 90% операций хватает: писать запросы, править данные вручную (грид-редактор), смотреть схему.
DataGrip (JetBrains) – мощная IDE для БД, интегрированная с идеями IntelliJ. Хороша для разработки (подсветка, рефакторинг SQL), поддерживает PG.
HeidiSQL, Navicat – тоже клиенты, но менее распространены среди PG (Heidi популярна для MySQL).
Открытые веб-интерфейсы: есть варианты вроде Adminer (PHP скрипт) или PHPPgAdmin (устарел). Но обычно pgAdmin сейчас закрывает потребность.
Выбор GUI – дело вкуса. Все они позволяют проводить SQL-запросы и управлять объектами. В контексте продакшна GUI часто не используется (многие DBA предпочитают скрипты + psql), но для разработки и аналитики GUI ускоряют работу. 

Интеграция с языками:

Мы уже говорили ORM и драйверах (см. раздел 5): но упомянем: для Python есть отличные инструменты от консоли – например, Jupyter Notebook с SQL-магией, или PSQL-магия.
Для Go – можно embed SQL migrations.
Есть PGCLI plugin для Vim/Emacs 🙂
В итоге, экосистема инструментов вокруг PG очень богата: от малых утилит до комплексных решений. Понимание их возможностей делает работу DBA и разработчика комфортнее.

5. ORM и библиотеки для Python и Go
ORM (Object-Relational Mapping) упрощают работу с БД, позволяя работать с данными как с объектами языка программирования. Рассмотрим популярные ORM и библиотеки для Python и Go, их особенности и лучшие практики использования.

Python: SQLAlchemy, Django ORM, Tortoise ORM, asyncpg
SQLAlchemy (Python) – мощнейший ORM и одновременно слой абстракции для SQL. Состоит из Core (генератор SQL выражений) и ORM (сопоставление с классами Python).

Особенности: Очень гибкий, поддерживает сложные связи, запросы строятся либо через “методы питона” (Query API), либо можно писать необработанный SQL при необходимости. Имеет Unit of Work модель: сессия отслеживает объекты, можно делать .add() и .commit() для транзакции. Привлекательность SQLAlchemy – он не навязывает структуру проекта (в отличие от Django), может использоваться как в синхронном, так и асинхронном коде (с 1.4 версии есть async support поверх asyncio). Он широко признан как наиболее всеобъемлющий ORM для Pythonlibhunt.com. Немного крутая learning curve, но де-факто стандарт вне фреймворков.
Пример:from sqlalchemy import create_engine, Column, Integer, String from sqlalchemy.orm import declarative_base, sessionmaker Base = declarative_base() class User(Base): __tablename__ = 'users' id = Column(Integer, primary_key=True) name = Column(String) engine = create_engine('postgresql://user:pass@localhost/mydb') Session = sessionmaker(bind=engine) session = Session() session.add(User(name="Alice")) session.commit()Это создаст запись в таблице users.
Плюсы: поддержка сложных схем, производительность при правильном использовании (SQLAlchemy умеет lazy load, eager load, джойнить и пр.). Минусы: чуть вербозный, бывает легко сделать неоптимальный запрос (N+1 проблема при неопытности). Однако, SQLAlchemy часто лучший выбор, если нет специфических требований.
Django ORM – встроенный ORM фреймворка Django. Он заточен под удобство в контексте веб-приложения: описываете модели (классы Django), Django миграции строит сама, запросы через методов .filter(), .select_related() и т.п.

Особенности: Django ORM достаточно высокоуровневый и ограниченный сложностью запросов (нет прямого JOIN условий, raw SQL можно но тогда теряете часть удобств). Зато простота: например, User.objects.filter(age__gte=18) – читается почти как естественный язык. Django ORM хорошо оптимизирован для типичных задач, но для сложных аналитических запросов может не хватать выразительности.
Он синхронный (но Django 4+ поддерживает async, ORM всё равно выполняет запросы синхронно, просто не блокирует event loop).
Django ORM не поддерживает явного управления транзакциями в коде (Django использует autocommit, а для атомарных операций – декоратор transaction.atomic).
Плюсы: простота, интеграция с Django admin, migrations auto. Минусы: не так гибок вне Django, и если ваше приложение не Django – его ORM отдельно тяжело использовать (возможно, но не популярно).
Django ORM реализует Active Record подход (методы моделей). SQLAlchemy – Data Mapper.
Tortoise ORM – современный асинхронный ORM (подходит для async frameworks типа FastAPI, Starlette). По стилю напоминает Django ORM (авторы вдохновлялись им), но работает на asyncio и типизации.

Особенности: API типа await User.filter(name="Bob").values("id", "name"). Под капотом он тоже генерирует SQL. Tortoise менее зрелый, чем SQLAlchemy, но динамично развивается. Есть поддержка связей, prefetch_related (чтобы избежать N+1).
Его плюс – простота и async-first (не нужно запускать в threadpool как SQLAlchemy).
Пример:from tortoise import Tortoise, fields from tortoise.models import Model classUser(Model): id = fields.IntField(pk=True) name = fields.TextField() awaitTortoise.init(db_url='postgres://user:pass@host/db', modules={'models': ['__main__']}) await User.create(name="Bob") user = await User.get(name="Bob")
Плюсы: Легче осваивается, чем SQLAlchemy, встроенная валидация, типизация (можно использовать pydantic integration). Минусы: поменьше комьюнити, возможно, не покрывает экзотические случаи. В бенчмарках Tortoise на уровне или чуть медленнее SQLAlchemy (что неплохо)betterstack.com.
asyncpg – не ORM, а асинхронный драйвер для PostgreSQL. Это библиотека низкого уровня, написанная на C, очень быстрая. Используется, если вы хотите работать с PG без ORM, но с async.

Особенности: Вы вручную пишете SQL и получаете результаты. asyncpg предоставляет пул соединений, поддержку prepared statements, типизацию PG -> Python (напрямую возвращает datetime для timestamptz, decimal для numeric и т.д.).
Пример:import asyncio import asyncpg async def run(): conn = awaitasyncpg.connect(user='user', password='pass', database='test', host='127.0.0.1') values = await conn.fetch('SELECT id, name FROM users WHERE age >= $1', 18) forrecord in values: print(record['id'], record['name']) await conn.close() asyncio.run(run())
Плюсы: максимальная производительность (почти на уровне C), гибкость SQL. Минусы: надо писать SQL, вручную маппить к структурам. В большом приложении много такой рутины. Но некоторые предпочитают этот подход (контроль над запросами). В принципе, SQLAlchemy Core может работать поверх asyncpg, так что можно сочетать.
Сравнение Python ORM:

SQLAlchemy vs Django ORM: Если не используете Django – SQLAlchemy wins. Если используете Django – используйте встроенный (хотя можно подключить SQLAlchemy, это будет лишняя сложность).
Tortoise vs SQLAlchemy (async): Tortoise проще стартовать для async приложений. SQLAlchemy тоже может async (через create_async_engine), но внутри всё равно блокирующее и делает в threadpool (они это скрывают). LibHunt quote: “SQLAlchemy … наиболее функциональный и надёжный ORM в Python… likely best default choice”libhunt.com. Tortoise – вариант, когда хочется Django-подобный синтаксис в async-среде, и не нужны все навороты SQLAlchemy.
Когда не использовать ORM: Если ваше приложение делает мегасложные аналитические SQL, которые ORM-ом сложно выразить или ORM генерирует неоптимальные запросы – можно писать raw SQL частично. ORM хорошо для C.R.U.D. и связной бизнес-логики, но часто тяжелые отчёты лучше выносить в хранимые функции или raw queries. Также, ORM могут добавлять оверхед: например, вставка миллиона строк ORM-ом будет долгой (каждая через объект) – лучше через COPY или batch insert SQL.
ORM скрывают транзакции: убедитесь, что понимаете, когда они начинаются/коммитятся. У SQLAlchemy по умолчанию autocommit off – нужно явно session.commit(). У Django autocommit on – каждое сохранение сразу.
N+1 проблема: Пример – получить список пользователей и их заказов. На ORM наивно:users = User.objects.all() for u in users: print(u.name, u.orders.first().total)– это сделает 1 запрос на users и N запросов на orders (N=кол-во пользователей). Решение – select_related('orders') или join + prefetch. Опытные ORM-разработчики знают эти моменты, но новичок может не заметить. Поэтому мониторьте в логе SQL (Django может выводить, SQLAlchemy echo=True).
Миграции: Django имеет встроенные. SQLAlchemy – библиотека Alembic (миграции на основе сравнения моделей).
Pydantic etc: Tortoise и SQLAlchemy интегрируются с Pydantic (генерация схем).
Без ORM: В некоторых случаях вместо ORM используют генераторы типа Databases (encode/databases) – либка, которая позволяет писать SQL и получать Pydantic модели, или типа PonyORM (еще один ORM с generator expressions). Но те, что перечислены – наиболее известны.
Go: GORM, sqlc, pgx
GORM (Go) – самый популярный ORM для Go. По синтаксису ближе к ActiveRecord: позволяет делать db.Find(&users) или db.Where("age > ?", 18).First(&user).

Особенности: GORM – удобный, но критиковался за производительность. Он отражает модели через struct tags, поддерживает associations, hooks.
Плюсы: скорость разработки, сообщество, много фич (Preload, Transactions, etc). Минусы: дополнительные аллокации, runtime reflection, иногда неожиданные SQL генерирует. Как говорит один обзор: “GORM обменивает безопасность и скорость на удобство”dev.to.
Для Go, где ценно контроль и типобезопасность, появились альтернативы (см. ниже). Тем не менее, для простых приложений GORM – нормальный выбор.
Пример:type User struct { ID uint; Name string; Age int } db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{}) // Создание: db.Create(&User{Name: "Alice", Age: 30}) // Чтение: var users []User db.Where("age > ?", 18).Find(&users)
Производительность: Если приложение высоконагруженное, GORM может стать bottleneck при массовых оп-циях.
sqlc – генератор кода, который берёт на вход SQL-запросы (в отдельных .sql файлах) и генерирует для них Go-код: типы результатов (структуры) и функции доступа. Идеология sqlc: “не нужен громоздкий ORM, напишите чистый SQL – и получите 100% типобезопасный код”brandur.org.

Особенности: sqlc парсит SQL (поддерживает PostgreSQL расширения) и связывает типы PG с Go типами. Например, вы пишете:-- name: GetUser :one SELECT id, name, age FROM users WHERE id = $1;sqlc сгенерирует в пакете db примерно:func (q *Queries) GetUser(ctx context.Context, id int64) (User, error)где User – сгенерированная struct соответствующая колонкам.
Плюсы: производительность – вы работаете практически на уровне database/sql (sqlc по умолчанию использует pgx v4 как драйвер). Типобезопасность: запросы проверяются на этапе компиляции: если поменялась схема – sqlc пересоберите, получите ошибки компиляции, где запрос не соответствует. Простота деплоя: нет лишней runtime dependency, только сгенеренный код.
Минусы: больше кода поддерживать (нужно писать SQL, запускать генератор). Нет ленивой подгрузки – но вы сами можете JOIN или несколько запросов orchestrate. То есть меньше магии – что одновременно плюс (прозрачность) и минус (надо руками).
sqlc хорошо подходит для микросервисов, где чётко определён доступ к БД, и важна скорость. Мнение известное: “sqlc – правильный ответ для Postgres в Go, маппит запросы к структурам без бойлерплейта”brandur.org.
У sqlc хорошая поддержка, можно даже указать модель данных, он сам SELECT * генерирует – но лучше явно.
Использование: включить в CI, чтобы код генерился при изменении .sql.
pgx (pgxpool) – “PG driver for Go”. Стал практически стандартным драйвером вместо lib/pq. Он поддерживает и low-level соединения, и пул, и copying. Многие Go ORM (включая GORM, sqlc) используют pgx под капотом. Можно использовать pgxpool напрямую:

pool, _ := pgxpool.Connect(ctx, os.Getenv("DATABASE_URL")) var name string err := pool.QueryRow(ctx, "SELECT name FROM users WHERE id=$1", 42).Scan(&name)
Это даст name пользователя с id 42.

Особенности: pgx написан с упором на производительность, умеет протокол PG очень хорошо. Есть также pgx.Conn (единичное соединение).
Плюсы: минимальный overhead, поддержка фич PG (например, CopyFrom для bulk вставок, слушать notifications, работать с специфичными типами). Минусы: raw usage – надо самим заботиться о SQL.
Однако, многих устраивает связка: pgx + sqlc. Pgx — драйвер, sqlc — кодоген, и никакого reflection runtime.
Варианты: pgx vs database/sql. pgx можно использовать в двух режимах: “native” (своё API) или как драйвер database/sql. Разница: native может быть чуть быстрее.
pgx vs GORM: pgx намного быстрее, но GORM проще, если со SQL не очень.
Другие Go ORM/библиотеки:

Ent (by Facebook) – Code First ORM: вы определяете schema кодом (структуры + fluent builder), генерится код запросов. Type-safe, подобно sqlc, но schema из Go. Ent многофункционален (GraphQL integration, миграции). Минус: кривая обучения и не raw SQL – он сам генерирует.
Bun – ORM, совместимый с интерфейсами pgx. Позиционируется как более быстрый аналог GORM (наследник проекта go-pg). Поддерживает context, eager, модуль bunrouter, миграции. В бенчмарках Bun быстрее GORM (но sqlc всё равно быстрее всех).
sqlx – надстройка над database/sql, которая облегчает некоторые задачи: сканирование в struct без суффиксов, placeholders. Не ORM, но расширяет стд. библиотеку.
Xorm, beego ORM – старые ORM, сейчас менее популярны.
Когда избегать ORM в Go:

В Go сообщество склоняется к тому, что ORM не так нужны: Go – статически типизирован, и SQL не слишком тяжело писать. ORMs как GORM упрощают CRUD, но за сложные JOINы всё равно часто пишут сырой SQL.
ORM добавляет слой, который скрывает SQL. А Go-разработчики ценят явность.
Тем не менее, для быстрых прототипов GORM или Bun ускоряют старт (сгенерить CRUD).
Best practice: Если используете ORM (GORM, Bun) – профилируйте запросы. Возможно, стоит где-то заменить на ручной SQL.
Если производительность критична, рассматривайте sqlc/pgx.
Если нужна гибкая схемогенерация на Go, Ent может быть хорошим вариантом (особенно, если любите GraphQL, они хорошо дружат).
Лучшие практики ORM (в целом для Python/Go):

Не смешивайте логику и ORM сильно. Т.е. старайтесь, чтобы ORM просто доставал/сохранял данные, а бизнес-логика не зависела от конкретных методов ORM. Тогда при необходимости вы сможете поменять способ доступа (например, на прямой SQL) без переписывания всей логики.
Используйте отложенную загрузку (lazy) осмотрительно. Это про N+1: либо заранее делайте select_related/prefetch (Django, Tortoise) или Preload (GORM/Bun), либо пишите отдельные SQL.
Пакетные операции: Если нужно обновить 1000 записей – вместо 1000 .save() ORM-ом лучше один UPDATE table SET ... WHERE id IN (...). Многие ORM позволяют писать сырые запросы/bulk.
Транзакции: Выясните, как ORM работает с транзакциями. В Django – явно оборачивать в atomic. В SQLAlchemy – по Session (session = autocommit False, commit() запускает транзакцию). GORM – db.Transaction(func(tx *gorm.DB) error { ... }) для транзакционного выполнения.
Миграции: Используйте инструменты миграций: alembic (sqlalchemy), Django built-in, GORM – AutoMigrate (но production лучше вручную), sqlc – не занимается этим, можно писать sql миграции и применять с go-migrate или Flyway.
Когда избегать ORM вообще:

Микросервис только читает из PG простые запросы – ORM лишь добавит прослойку. Проще pgx + scan.
При высоких требованиях к latency: ORM чуть проигрывает прямому SQL (особенно заметно на множественных небольших запросах).
Если у команды сильные SQL навыки – иногда проще написать складный SQL, чем разбираться как заставить ORM его сделать.
Однако, ORM экономит время разработки и снижает ошибки (отсутствие SQL-инъекций, маппинг типов). По опыту, смешанный подход работает: базовые операции через ORM, отчётные тяжелые – через raw SQL или хранимки.
6. Фишки PostgreSQL и «трюки»
В PostgreSQL есть богатый набор продвинутых возможностей SQL, которые позволяют писать очень выразительные запросы и решать сложные задачи.

Common Table Expressions (CTE, WITH запросы)
CTE – это временный результирующий набор, определённый в начале запроса и доступный последующим выражениям SELECT. Синтаксис:

WITH cte_name AS ( <подзапрос> ) SELECT ... FROM cte_name JOIN ...;
Применения:

Разбить сложный запрос на логические части. Например, сначала выбрать определённые данные в CTE, а потом использовать их в нескольких местах основного запроса (чтобы не дублировать подзапрос).
Рекурсивные CTE – с WITH RECURSIVE – позволяют делать обходы графов и иерархий (например, организационная структура, дерево категорий) чистым SQL. Рекурсивный CTE имеет две части – начальное подмножество и рекурсивный запрос, ссылающийся на свое же имя. Постоянно объединяет результаты пока новые строки появляются.
Пример:WITH RECURSIVE subordinates(id, name, manager_id) AS ( SELECT id, name, manager_id FROM employees WHERE manager_id IS NULL  -- топы UNION ALL SELECT e.id, e.name, e.manager_id FROM employees e JOIN subordinates s ON e.manager_id = s.id ) SELECT *FROM subordinates;Это получит всех сотрудников в порядке иерархии (дерево подчинённых).
Материализация vs Inline: Ранее (до PostgreSQL 12) CTE по умолчанию материализовался – выполнялся отдельно, его результат сохранялся, и основной запрос обращался к сохранённому (как стабильному). Это служило барьером оптимизации – планировщик не “проталкивал” условия в CTE и не изменял план внутри CTE. С PG12 поведение изменилось: по умолчанию CTE inlined (подзапрос как будто вставляется в запрос) если на него нет VOLATILE функций и не указано MATERIALIZED. Теперь, если хотите старое поведение, явно пишите WITH cte AS MATERIALIZED (...).
Зачем материализация? Если CTE используется несколько раз, лучше материализовать чтобы вычислить один раз. Если CTE большой, а основному запросу нужно лишь часть – лучше инлайн, чтобы условие WHERE прошло внутрь. Теперь PG умный – делает как выгоднее, но можно подсказать.
Примеры пользы:
Вычислить агрегат, а потом использовать его и детали:WITH totals AS (SELECT dept_id, SUM(salary) as total_sal FROM employees GROUP BYdept_id) SELECT e.name, e.salary, t.total_sal FROM employees e JOIN totals t ONe.dept_id = t.dept_id WHERE t.total_sal > 1000000;Мы посчитали total per dept, а потом выбрали сотрудников только из департаментов с крупным фондом ЗП. Это можно было решить подзапросом, но CTE улучшает читаемость.
Разложить сложный условный запрос. Если SQL получается монструозным, CTE помогают его логически секционировать.
Рекурсия: альтернативы без CTE – хранимые процедуры или рекурсивные запросы на клиенте. CTE позволяет сделать, например, обход графа друзей (social graph) одной инструкцией.
Window Functions (оконные функции) 

Оконные функции позволяют выполнять вычисления по набору строк, связанного с текущей строкой, не группируя результат по этим строкам. Синтаксис:

<функция>() OVER ([PARTITION BY cols] [ORDER BY cols] [frame])
Окно – это определённый фрейм строк относительно текущей строки (по умолчанию – все строки в разделении до текущей включительно).
Примеры функций: ROW_NUMBER() – номер строки в рамке, RANK() – ранг (с пропуском при равных), DENSE_RANK(), LAG(col, n) – значение колонки из предыдущей n-й строки, LEAD – из следующей строки, SUM()/AVG() как агрегат, но по окну (бегущая сумма и пр.).

PARTITION BY – аналог GROUP BY для окна: разбивает набор на группы, внутри которых окно независимое.
ORDER BY – определяет порядок внутри окна (для функций типа ROW_NUMBER() и для frame specification).
Frame – можно ограничивать окно: например ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW – это накопительная сумма от начала до текущей (по умолчанию для SUM() OVER (ORDER BY X) так и есть). Или ROWS BETWEEN 1 PRECEDING AND 1 FOLLOWING – включить соседей (скользящее окно 3-х).
Можно RANGE – по значению границы, ROWS – конкретное кол-во строк, GROUPS – по порядку distinct ordering.
Примеры применения:

Нумерация строк:SELECT id, value, ROW_NUMBER() OVER (ORDER BY value DESC) as rownum FROM sales;– пронумерует продажи по убыванию value (1 – самая большая). Если две равных, их получат разные номера (последовательные).
Топ-N из категории:SELECT category, item, price, RANK() OVER (PARTITION BY category ORDER BY price DESC) as rank FROM products;– результат будет все товары с ранговым номером. Можно обернуть внешним запросом WHERE rank <= 3 – получим топ-3 дорогих товара по каждой категории.
Скользящее среднее:SELECT date, AVG(value) OVER (ORDER BY date ROWS BETWEEN 6 PRECEDING AND CURRENTROW) as avg_week FROM metrics;– для каждой даты считает среднее за последние 7 дней (текущий + 6 предыдущих). Отличается от обычного AVG с GROUP BY тем, что выводятся все дни, а среднее считается по “окну” вокруг каждой строки.
Разность с предыдущей записью: value - LAG(value) OVER (ORDER BY date) – покажет, как изменилось значение по сравнению с предыдущей датой.
Накопительная сумма: SUM(value) OVER (ORDER BY date ROWS UNBOUNDED PRECEDING) – сумма от начала до текущей даты (кумулятивная метрика).
Первый/последний элемент группы без подзапроса:
Например, нужно взять первую покупку каждого клиента:SELECT client_id, item, purchase_date FROM ( SELECT *, ROW_NUMBER() OVER (PARTITIONBY client_id ORDER BY purchase_date) as rn FROM purchases ) sub WHERE rn = 1;– здесь CTE/подзапрос с ROW_NUMBER внутри, потом фильтр rn=1. Это часто эффективнее, чем соединять таблицу саму с собой на мин/макс (планировщик может оптимизировать).
Периодические значения: Выбрать строку на начало каждого месяца: можно c использованием first_value() или комбинированием PARTITION + ORDER BY + frame. Но проще: DISTINCT ON или подзапрос.
В общем, оконные функции – мощный инструмент. С их помощью сложные аналитические запросы решаются без дополнительных JOIN и подзапросов. Например, “какой процент кумулятивного итога составляет текущая запись” – value / SUM(value) OVER () * 100 (OVER без PARTITION и ORDER – по всей выборке).
UPSERT (ON CONFLICT) 

Ранее, чтобы вставить запись или обновить если она уже есть (merge), приходилось либо ловить исключение уникальности, либо делать два запроса (SELECT, потом UPDATE or INSERT). PostgreSQL 9.5 ввёл INSERT ... ON CONFLICT ....

DO NOTHING – игнорировать конфликт:INSERT INTO users(id, name) VALUES (1, 'Alice') ON CONFLICT DO NOTHING;Если запись с таким уникальным ключом уже есть, ничего не делать, иначе вставить новую.
DO UPDATE – обновить при конфликте:INSERT INTO users(id, name, hits) VALUES (1, 'Alice', 1) ON CONFLICT (id) DO UPDATESET hits = users.hits + 1;Здесь предполагаем уникальный индекс по id. Если id=1 уже есть, мы увеличим hits на 1 вместо вставки новой. В DO UPDATE можно использовать EXCLUDED псевдотаблицу – значения, которые пытались вставить. Например,ON CONFLICT (id) DO UPDATE SET name = EXCLUDED.name, updated_at = now();– обновит имя на новое.
ON CONFLICT можно указать конкретный уникальный индекс или ограничение (или ON CONFLICT ON CONSTRAINT constraint_name).
Пример использования:
Счётчики: вставляем запись счётчика, если уже есть – увеличиваем (как hits выше).
Импорт данных: вместо предварительного DELETE/INSERT можно UPSERT – всё вставится, изменив уже существующие.
Атомарное обеспечение уникальности: ON CONFLICT DO NOTHING позволяет безопасно параллельно выполнять вставки без риска ошибки уникальности.
Внутри PG: ON CONFLICT DO UPDATE реализуется через UPDATE в СУБД, при этом он считается безопасным к гонкам – если две транзакции одновременно сделают UPSERT одной строки, одна победит (обновит), другая увидит конфликт на update и повторит (стандартно, одна может получить исключение serialization_failure, который нужно ловить и повторять).
Сравнение с MERGE: MERGE – новый SQL стандарт, PG15 реализовал MERGE (более универсально – можно несколько WHEN MATCHED/NOT MATCHED условий). ON CONFLICT – более лаконичный именно для “вставь или обнови”. MERGE может помочь, когда сложное условие matching.
Лайфхак: ON CONFLICT можно использовать, чтобы избежать уникальных нарушений, не зная, есть запись или нет. Например,INSERT INTO table(key, ...) VALUES(...) ON CONFLICT (key) DO UPDATE SETkey=table.key RETURNING ...;– если запись уже была, команда не упадёт, просто ничего не изменит (set key=key).
Ограничения:
Работает только на уникальных индексах/констрейнтах – надо указать, по какому конфликтовать.
Не подходит, если нужно сложное условие обновления – тогда MERGE.
Триггеры AFTER INSERT всё равно вызовутся (и на UPDATE тоже, если conflict).
Генерируемые столбцы (IDENTITY) не используются, если конфликт – update не меняет их.
LATERAL JOIN 

Латеральное соединение позволяет подзапросу в части FROM ссылаться на ранее перечисленные таблицы. То есть,

SELECT * FROM users u, LATERAL (SELECT * FROM orders o WHERE o.user_id = u.id ORDER BYo.date DESC LIMIT 1) latest_order;
Здесь подзапрос latest_order выполняется для каждой строки u. Он может использовать значения из этой конкретной строки (u.id). Это как “для каждого пользователя вытянуть последнюю покупку”. Без LATERAL это было бы непросто в одном запросе. С LATERAL – элегантно.

LATERAL фактически как foreach (для каждой строки внешней, выполнить суб-выражение)heap.io.
Используется автоматически: при CROSS JOIN с подзапросом PostgreSQL по умолчанию ведёт его как LATERAL, если тот ссылается на внешние. Но надо явно написать LATERAL, если не CROSS.
Пример:
Функция на каждую строку. Допустим, есть функция, разбивающая строку на слова: regexp_split_to_table(text, pattern). Если хотим для таблицы texts получить все слова:
SELECT t.id, w.word FROM texts t, LATERAL regexp_split_to_table(t.content, '\s+') ASw(word);Здесь LATERAL позволяет функции брать t.content из текущей строки, и возвращает каждое слово как отдельная строка (разворачивает one-to-many).
2) LEFT JOIN LATERAL – если подзапрос не вернёт ничего, то с LEFT JOIN получится NULL-значения (то есть, “никакого последнего заказа”). CROSS JOIN LATERAL будет отфильтровывать (как INNER).
3) Комплексный пример:SELECT u.name, o.item, o.date FROM users u LEFT JOIN LATERAL ( SELECT item, dateFROM orders WHERE orders.user_id = u.id ORDER BY date DESC LIMIT 1 ) o ON true;– ON true потому что у LATERAL условие соединения не нужно – он уже “связан” через ссылку. Здесь LEFT JOIN, так что если пользователь не имеет заказов, он всё равно появится с NULL.
Когда нужен LATERAL:
Получить TOP-N подзапроса для каждой строки из основной таблицы.
Распаковать массив/JSON – PG 9.3+ поддерживает jsonb_array_elements как табличную функцию, её нужно LATERAL применять.
Когда подзапрос зависит от внешней таблицы – стандартный SQL этого не позволяет вне LATERAL.
Производительность: LATERAL обычно приводит к Nested Loop (выполняет subquery N раз). Если N велико и подзапрос не очень селективен, может быть дорого. Но PG умеет оптимизировать некоторые LATERAL, особенно если subquery LIMIT 1 – он может брать индекс (как в примере – likely Index Scan by date desc, Stop after 1, good).
Альтернатива: CROSS APPLY (в T-SQL) – аналог LATERAL.
Не переборщить: LATERAL – инструмент аккуратный. Часто задачу можно решить и обычными средствами (например, “последний заказ” можно решить через ROW_NUMBER() в подзапросе, или DISTINCT ON). Но LATERAL иногда значительно упрощает запись.
Генерация UUID, sequence и identity columns 

PostgreSQL предоставляет несколько способов генерации уникальных ключей:

Серийные/Sequence (Serial, BigSerial): pseudo-тип serial – удобство, создаёт sequence (автоинкрементный счетчик) и DEFAULT nextval(seq) для колонки. bigserial – аналог для bigint. Недостаток – не является SQL-стандартом, и при дампе/восстановлении sequence может сбиться (pg_dump всё учитывает, но…).
Identity Columns (GENERATED {ALWAYS|BY DEFAULT} AS IDENTITY) – появились в PG10 как стандартный способ. Пример:CREATE TABLE users ( id BIGINT GENERATED ALWAYS AS IDENTITY, name text );Это ближе к serial, но по стандарту. PostgreSQL реализует identity тоже через sequence за кулисами, но“GENERATED AS IDENTITY – стандартная замена старому SERIAL”neon.com.
Advantages: можно иметь несколько identity в таблице (Serial – type, только одна колонка может быть serial, иначе несколько sequence).
ALWAYS vs BY DEFAULT: ALWAYS – всегда генерируется, даже если вы вставляете значение явно (можно override только OVERRIDING SYSTEM VALUE). BY DEFAULT – если вставляется значение, оно используется, иначе генерируется. (Serial аналогичен BY DEFAULT).
Identity лучше при портировании БД между СУБД, а также понятнее контролировать (sequence имя привязано).
Экспорт/импорт: identity остаётся identity.
Рекомендация: в новых проектах используйте identity вместо serialstackoverflow.com.
Sequence – самостоятельный объект (create sequence, nextval, currval, setval). Можно использовать для сложных случаев: например, глобальный счётчик, не привязанный к одной таблице, или “дырявые” серии.
Sequence – не транзакционный (increments won’t roll back if txn fails, except w/ some override in serializable).
currval(seq) – получить последний использованный в этой сессии (ошибка, если nextval не был вызыван).
UUID – универсальные уникальные идентификаторы. PostgreSQL имеет type uuid. Для генерации:
Расширение uuid-ossp – функции uuid_generate_v4() (рандом UUIDv4), uuid_generate_v1() (на основе времени+MAC) и др. Подключение: CREATE EXTENSION uuid-ossp;.
Либо через pgcrypto: функция gen_random_uuid() (PG13+ – доступна, если подключить pgcrypto; PG14+ – вынесена даже в core? Actually, still requires pgcrypto).
UUID хорош для распределённых систем, но они длиннее (16 байт) и менее последовательны, могут фрагментировать индексы (random v4). Можно использовать time-based (v1) – почти по порядку, но там MAC-адрес светится.
Indices по uuid больше и медленнее, чем integer.
Use case: публичные идентификаторы (скрыть количество записей, невозможно угадать следующий).
Комбинированные ключи: Нередко генерируют id как комбинацию, например, timestamp и sequence (уникально, sortable). Можно добиться: default to_char(current_timestamp, 'YYYYMMDD')||nextval('seq') – но хранится как текст. Или bigserial + prefix (not globally unique across clusters though).
Snowflake ID (как в Twitter) – нет из коробки, но можно самостоятельно (через uloing functions).
ULID – сортируемые UUID (есть libs, not built-in).
Правильный выбор:
Для простых случаев – BIGINT GENERATED BY DEFAULT AS IDENTITY – удобно, до ~9e18 записей.
Для распределённых – UUID (с gen_random_uuid()).
Если нужен “человекочитаемый” ключ – генерируйте на уровне приложения (e.g. nanoid).
Помните: PK на последовательностях – легко предсказуем (можно infer volume). PK на uuid – непредсказуем, но объём базы по косвенным признакам (count) всё равно узнать можно.
Работа с временными интервалами и датами 

PostgreSQL имеет мощный функционал по работе с датами/временем:

Типы: DATE (дата без времени), TIME [WITH TIME ZONE], TIMESTAMP [WITH TIME ZONE] (неявно WITH – хранит в UTC). Рекомендуется всегда использовать TIMESTAMP WITH TIME ZONE (aka timestamptz) для абсолютных моментов времени – PG хранит в UTC, выводит с timezone клиента.
Интервал (INTERVAL) – тип длительности. Можно складывать/вычитать интервал с датами.
Пример: '2025-01-01'::date + INTERVAL '1 day' = '2025-01-02'.
Интервал может включать годы/месяцы (период с неопределённой длиной в днях), и дни/часы/секунды (точная часть). Например, INTERVAL '1 year 2 months 3 days 4 hours'.
Операции с датами:
Вычитание дат: date '2025-01-10' - date '2025-01-01' = 9 (дней, integer), а timestamptz – timestamptz = interval (точная разница).
Добавление: как выше, timestamp + interval.
Функции:
AGE(timestamp, [timestamp]) – разница, но нормализует в годах-месяцах-днях, игнорируя timezones. AGE('2025-02-10', '2020-01-01') -> “5 years 1 mon 9 days”.
JUSTIFY_DAYS/ HOURS/ INTERVAL – приводит интервал к нормализованному виду (т.е. 24 hours -> 1 day).
EXTRACT(part FROM date/timestamp/interval) – извлекает компонент (year, month, dow, hour, epoch, etc.).
Пример: EXTRACT(EPOCH FROM interval '1 day 3 hours') = 97200 (sec).
date_trunc('month', timestamp) – усекает до начала месяца (например, 2025-05-15 13:34 -> 2025-05-01 00:00). Удобно для группировки по дням/часам: SELECT date_trunc('day', ts), count(*) FROM events GROUP BY 1.
NOW()/CURRENT_TIMESTAMP – текущее время (with time zone). CURRENT_DATE – текущая дата без времени.
LOCALTIMESTAMP vs CURRENT_TIMESTAMP – первый без TZ (like alias for now() at time zone).
generate_series(start, stop, interval) – мощная вещь: генерирует ряд дат с шагом. Например:SELECT generate_series(date '2023-01-01', date '2023-01-10', INTERVAL '1 day');даст 10 дат. Можно LEFT JOIN с этим series, чтобы заполнить “дыры” дат пустыми значениями (когда нужно вывести нулевые данные за дни без записей).
Работа с таймзонами: AT TIME ZONE – переводит timestamptz->timestamp и vice versa. Например, timestamptz '2025-01-01 00:00 UTC' AT TIME ZONE 'America/Los_Angeles' даст локальное время (timestamp without tz) 16:00:00 31-Dec-2024. Или наоборот '2025-01-01 00:00'::timestamp AT TIME ZONE 'UTC' – трактует 00:00 local как UTC и выдаёт timestamptz.
Примеры задач:
Найти все записи за последнюю неделю:WHERE ts >= now() - INTERVAL '7 days';
Группировка по неделям/месяцам: date_trunc('week', ts) как ключ.
Учитывать начало недели не с понедельника: PG считает week Monday-based (можно date_trunc('week', ts + '1 day'::interval) - '1 day'::interval if needed).
Расчёт возраста: age(birthdate) – человекочитаемое “XX years YY mons”.
Добавить 1 месяц к 31 Jan: date '2025-01-31' + interval '1 month' = 28 Feb 2025 (автоматически подправит на конец февраля).
Последний день месяца:date_trunc('month', some_date) + '1 month'::interval - '1 day'::interval – начало месяца + месяц – 1 день = последний день месяца. Или EXTRACT('days' FROM date_trunc('month', some_date) + '1 month'::interval - '1 day'::interval) = количество дней в месяце.
Temporal joins: LATERAL can help if one has an event and need next event’s time, etc.
PostgreSQL также поддерживает составные интерваловые поля (YEAR TO MONTH, DAY TO SECOND). Обычно достаточно INTERVAL без спецификации, но чтобы исключить, можно cast: INTERVAL '2 months' YEAR TO MONTH etc. 

Итого: PostgreSQL отлично подходит для временных данных – имеет богатые функции и точность (микросекунды). Главное – внимательно с часовыми поясами: предпочтительно хранить в timestamptz (UTC inside), а отображать/принимать – конвертировать. 

Обобщённо о “трюках”:

Используйте CTE для ясности кода (и рекурсии).
Оконные функции для сложной аналитики вместо вложенных запросов и процедур – oftensimpler и faster.
ON CONFLICT (UPSERT) – для удобных upsert-операций.
LATERAL – для subquery per row.
Новые фичи SQL:
JSON/JSONPath – уже обсуждали JSONB, PG15 добавил соответствие SQL/JSON: SELECT json_string ->> '$.name', more standard way (but PG’s original ops often simpler).
MERGE – PG15:MERGE INTO table t USING source s ON t.id = s.id WHEN MATCHED THEN UPDATE ... WHEN NOT MATCHED THEN INSERT ...;– но ON CONFLICT всё еще проще для 1 таблицы.
INSERT … RETURNING – не трюк, а фича PG: сразу вернуть вставленные строки. Например, INSERT... RETURNING id – получите новые id.
Data modification CTE:WITH moved AS (DELETE FROM queue WHERE ready=true RETURNING *) INSERT INTOhistory SELECT * FROM moved;– за одну команду удалить из очереди и переместить в историю (в других СУБД надо транзакцией с двумя stmt).
GRANT … WITH GRANT OPTION – для администрирования.
Event Triggers – возможно, advanced: ловить DDL события.
Foreign Data Wrapper – подключение внешних источников (таблицы из другой PG, или CSV, или API). PG имеет mysql_fdw, file_fdw, postgres_fdw (distributed queries).
Parallel query – PG сам решает, но можно SET max_parallel_workers_per_gather = 0 to off, etc.
Все эти приёмы помогают решать задачи лаконично. Зная их, на собеседованиях можно блеснуть знаниями PostgreSQL.
7. Вопросы с собеседований (типовые и продвинутые)
Ниже приведён список вопросов, которые часто встречаются на собеседованиях по PostgreSQL (включая концепции индексации, транзакций, плана запросов, JSONB и конкурентности). Попробуйте ответить на них, опираясь на материалы выше:

MVCC и VACUUM: Объясните, как работает MVCC в PostgreSQL и зачем нужен VACUUM. Что произойдёт, если VACUUM долго не запускать?postgresql.orgpostgresql.org
Уровни изоляции: В чём разница между уровнями изоляции Read Committed, Repeatable Read и Serializable в PostgreSQL? Какие аномалии предотвращаются на каждом уровне?postgresql.orgpostgresql.org
Deadlocks: Что такое дедлок в контексте транзакций PostgreSQL? Как PostgreSQL обнаруживает deadlock и что происходит после обнаружения? Как можно предотвратить ситуацию дедлока на уровне приложения?
Explain plan: На что указывает cost=... в выводе EXPLAIN? Что означают rows и width? Как интерпретировать секцию (actual time=…, rows=…, loops=…)?postgresql.orgpostgresql.org
Типы соединения (Join Types): Какие алгоритмы соединений использует PostgreSQL? В каких случаях планировщик выбирает Nested Loop, Hash Join, Merge Join?
Индексы: Перечислите основные типы индексов в PostgreSQL и опишите, в каких случаях каждый применяется (B-Tree, GIN, GiST, BRIN). Например, почему GIN подходит для JSONB?postgresql.orgpostgresql.org
Index-only scan: Что такое “index-only scan” и при каких условиях он возможен? Почему вид операции “Bitmap Heap Scan” может появиться даже при наличии подходящего индекса?
Transакции и блокировки: Что такое row-level lock в PostgreSQL? Чем отличается блокировка Share от Exclusive? Как работает SELECT … FOR UPDATE?
Autovacuum tuning: Как настроить autovacuum для таблицы с очень интенсивными изменениями? Какие параметры autovacuum можно изменить, если заметили рост “dead tuples”?postgresql.orgpostgresql.org
Hot / Cold data: Если у вас есть “горячие” данные (часто запрашиваемые) и “холодные” архивные данные, какие подходы в PostgreSQL помогут оптимизировать хранение и доступ? (Ожидаются ответы про партиционирование, BRIN индексы, tablespaces на разных типах хранилищ, сжатие TimescaleDB и т.д.)
JSONB vs. реляционные столбцы: Когда имеет смысл хранить данные в JSONB колонке, а когда лучше в нормализованных таблицах? Какие плюсы/минусы у JSONB?postgresql.orgpostgresql.org
Запросы JSONB: Как создать индекс, чтобы ускорить запросы по JSONB полю? Например, WHERE data->>'status' = 'active'. Будет ли использоваться обычный B-Tree индекс? (Ожидается упоминание GIN, функциональных индексов)postgresql.org
Full-text search: Как реализовать полнотекстовый поиск по текстовой колонке в PostgreSQL? Из каких компонентов состоит механизм полнотекстового поиска (типы, словари, индексы)? Как найти все строки, содержащие слово “postgres”? (Ожидается ответ про to_tsvector, to_tsquery, @@, GIN индекс)
WAL и Durability: Что такое Write-Ahead Log и как он обеспечивает надёжность транзакций? Что делает параметр fsync и почему не рекомендуется отключать его на production?postgresql.orgpostgresql.org
Репликация: В чём разница между физической и логической репликацией PostgreSQL? Как настроить streaming replication? Что такое replication slot?postgresql.orgpostgresql.org
Partitioning: Какие способы партиционирования поддерживает PostgreSQL (назовите хотя бы Range и List)? Что такое декларативное партиционирование? Нужно ли прикладному коду знать о наличии партиций или это прозрачно?access.crunchydata.comaccess.crunchydata.com
Vacuum Freeze: Зачем PostgreSQL “замораживает” (freeze) старые транакционные метки (XIDs)? Что будет, если этого не делать? (Ожидается понимание проблемы переполнения XID, wraparound и роли vacuum в этом)postgresql.org
ORM N+1 проблема: Что такое проблема N+1 запросов в ORM (например, Django или SQLAlchemy)? Как её можно выявить и устранить? (Например: использовать select_related/join для связанных объектов, либо debug SQL log)
Connection Pool: Зачем нужен пул соединений (connection pool) к PostgreSQL (например, PGBouncer)? В каком случае вы бы его применили? (Ожидается: если приложение создаёт очень много коротких соединений, overhead на установку TCP/SSL и auth велик; пул решает, переиспользуя коннекты. Также PG имеет лимит max_connections).
Backup стратегии: Какие подходы к бэкапу PostgreSQL вы знаете? Как бы вы организовали резервное копирование большой базы (несколько сотен гигабайт) с минимальным временем простоя? (Ожидается: физический бэкап pg_basebackup + WAL archiving, либо реплика + промоут реплики для backup, логические pg_dump для структуры или малых БД, PITR.)
Нестаандартные типы: Какие специальные типы данных PostgreSQL вы использовали или знаете? (Например, ARRAY, hstore, JSONB, enum, geometric types, UUID, RANGE types). Как определить столбец как массив строк?
Explain EXPLAIN: Что означает в плане запросов вывод Buffers: shared hit=..., read=..., dirtied=..., written=...? Чем отличается hit от read?postgresql.orgpostgresql.org
Составной индекс vs несколько индексов: Имеется таблица (user_id, created_at). Чем отличается наличие отдельного индекса по (user_id, created_at) от двух индексов по user_id и по created_at? Когда планировщик сможет использовать составной индекс? (Ожидается: составной индекс используется для запросов, в условии которых присутствует первый столбец (user_id) – слева; если фильтр только по created_at, нужен отдельный или скан по всему составному.)
Data alignment: В PostgreSQL, какой тип займёт больше места: char(10) или varchar(10) или text, если хранится слово “hello”? (Ожидается: text/varchar хранят только фактические символы + 1-4 байта длины; char(n) – фиксированная длина, при “hello” может дополнять пробелами или не (в PG char(n) padded with spaces to n on compare but stores without trailing spaces?), key point: in PG char(n) = blank padded type of length n, still variable storage though trailing spaces are trimmed for storage? Actually, internal storage of char(n) is similar to varchar but with a length check. The difference mainly at insertion/comparison. So storage not fixed n always. The question likely expects: use text unless specific requirement, char(n) is not space efficient for varying length.)
High Availability: Как обеспечить высокодоступный кластер PostgreSQL? (Речь про то, что одного мастера недостаточно, описать master-standby репликацию + виртуальный IP или PATRONI etc, либо multi-master via citus for scale-out reads, etc.)
Tablesample: Что делает TABLESAMPLE в PostgreSQL? (Ожидается: позволяет выбрать случайную выборку строк с заданным процентом или количеством, с разными методами BERNOULLI/SYSTEM.)
Sec. Indexes vs PK: Может ли PostgreSQL использовать больше одного индекса при выполнении одного запроса? (Да, bitmap index scan может объединять несколько индексов, например, condition on col1 AND col2 with separate indexes, it will do BitmapAnd of two bitmap index scans.)
Covering Index: Что такое INCLUDE в определении индекса? (Ожидается: Postgres 11+ allow INCLUDE columns not part of key, to satisfy index-only scanspostgresql.org.)
Lock escalation: Есть ли в PostgreSQL понятие “эскалации блокировок” как в MS SQL (когда берётся table lock при множестве row locks)? (Ожидается: нет, PG не эскалирует row locks to table-level, он может держать очень много row locks, but heavy locking can lead to out-of-memory (max_pred_locks_per_transaction for SSI? Actually predicate locks separate).)
Эти вопросы покрывают широкий диапазон тем – от основ до тонкостей. Подготовившись по ним, вы будете хорошо ориентироваться в возможностях PostgreSQL и смежных инструментах.

Top 45 PostgreSQL Interview Questions And Answers [2025]
Updated on Dec 18, 2024 | Praveen Kumar | 14 min read | 115.4K views
FacebookTwitterLinkedInWhatsAppРесурс
PostgreSQL interview questions
PostgreSQL was launched in 1989 by Michael Stonebraker and his team at the University of California, Berkeley, and is currently regarded as the top advanced technology among the primary databases across the globe. In the midst of open-source databases, it has achieved the second placement. As its reputation persists, there is a growing need for competent experts and experience in PostgreSQL. Here we are with the top 45 PostgreSQL interview questions and answers. We’ve organized a complete list that includes everything from the fundamentals to PostgreSQL.

Table of Contents
Basic-Level PostgreSQL Interview Questions 
Here is a list of some most frequently asked PostgreSQL basics interview questions and answers for freshers.

1. What do you understand by the term “PostgreSQL”?
PostgreSQL is a sophisticated, robust, open-source object-relational database system. It utilizes and expands the SQL language with multiple attributes and facilitates both SQL (relational) and JSON (non-relational) querying. 

2. What is the full form of PostgreSQL?
The full form of PostgreSQL is “Postgres Structured Query Language”.

3. How PostgreSQL can be used?
PostgreSQL is mainly employed as a powerful back-end database that enables you to save vast data warehouses for many web, mobile, geospatial, and analytics applications. It helps programmers to create the utmost complicated programs, making use of their abilities and a comprehensive set of features.

4.  Why is PostgreSQL preferred over MYSQL?
 Postgres is highly adaptable and can assist multiple data types. PostgreSQL is preferred over MySQL because it provides data types that MySQL does not. Over an extended period, MySQL and PostgreSQL were competing with their databases. Still, eventually, PostgreSQL conquer the game along with a multitude of distinctive functionality which are not offered in MySQL.

5. Why do companies prefer PostgreSQL?
It provides a superior standard of flexibility, scalability, adaptability, and expandability. It allows companies to modify and personalize the database to their particular requirements.
It provides expandability possibilities to manage vast quantities of datasets and advanced data transfer workloads, permitting organizations to develop their systems and deal with rising needs.
Serving as a non-proprietary database, PostgreSQL removes license-driven expenses, forming it an engaging option for corporates searching for affordable approaches without sacrificing capabilities and functioning.
6. What are the advantages of PostgreSQL?
It is open-source and positively adaptable.
It primarily conforms to SQL standards.
It is feasible to deal with complicated data types on PostgreSQL.
7. What are the disadvantages of PostgreSQL?
It is not accessible on every system by default.
Its extensible manuals are solely accessible in English only!
It has a slow reading speed.
Also Read: SQL Interview Questions

8. List 3 advanced PostgreSQL features.
Inheritance: PostgreSQL assists in inheritance to facilitate consumers to build clean tables that depict their data structures successfully.
Support for JSON Data – The capability to retain and query JSON enables PostgreSQL to operate NoSQL projects. 
Managing Geospatial Data in Postgres: PostgreSQL with GIS component enables an individual to save geometrical coordinates and structure details inside the tables.
9. Which are the data types used in PostgreSQL?
There are numerous data types supported by PostgreSQL:

Boolean: It symbolizes true/false values.
Character: It works with text and strings.
Numeric: It operates with various precision.
Temporal: It handles date and time data.
UUID: It offers specialized identifiers.
Array: It saves lists of values.
JSON: It manages organized data in JSON format.
hstore:  It offers adaptable key-value storage.
Special: It contains specific-purpose types like spatial and IP addresses.
10. Define Indices in PostgreSQL?
Indices are database frameworks applied to enhance the execution of data searches. They are generated on multiple attributes of a table to help faster data retrieval. 

11. What do you mean by the partitioned table in PostgreSQL?
In PostgreSQL, Partitioning is a rational table that signifies diving one huge table into tiny physical parts. Every division includes a subcategory of data built on predefined partitioning conditions, for example, “a span of data or a specific condition”. 

12. Differentiate between PostgreSQL and  MySQL.
PostgreSQL with MySQL are the most popular databases, let’s see the key differences between them.

PostgreSQL	MySQL
PostgreSQL is an object-based relational DBMS	MySQL is a relational-based DBMS.
PostgreSQL endorses sophisticated data types such as arrays, hstore, and user-defined types.	MySQL solely assists Standard data types
PostgreSQL slower and more complicated.	MySQL is steady, easy, and faster.
13. What do you mean by tokens in PostgreSQL?
In PostgreSQL, tokens refer to the constructing units of any program code. Tokens include numerous kinds of unique character symbols like constants, quoted identifiers, other tags, and keywords. 

14. Differentiate between a ‘view’ and ‘table’ in PostgreSQL?
Here is the major difference between the ‘view’ and ‘table’ 

View	Table
It is built from a query.	It is built from the physical storage of data.
It is derived from a combination of tables.	It consists of the actual data.
It does not save data permanently.	It stores data consistently.
15. What is a primary key in PostgreSQL?
In PostgreSQL, a primary key is a set of columns that specifically recognize every row in a database. It verifies that the data in these columns are neither null (meaning they must have a value) nor distinct (meaning no two rows can have the same values). A primary key integrates the “NOT NULL” and “UNIQUE” conditions.

Intermediate-Level PostgreSQL DBA Interview Questions
Here is a list of some PostgreSQL interview questions and answers for intermediate-level candidates:

16. What is a user-defined function in PostgreSQL?
It is a set of random SQL statements assigned to execute a certain task. These operations are usually built to manage unique cases. It is feasible to carry out select, insert, update, and delete operations within a function.

17. Difference between the ‘CHAR’ and ‘VARCHAR’ data types in PostgreSQL.
Here are the following points for the main differences between ‘CHAR’ and ‘VARCHAR’.

CHAR	VARCHAR
It has a fixed-length string data structure.	It has a Variable-length string data structure.
It has trailing spaces that are conserved.	It has trailing spaces that are not conserved.
It occupies more storage space.	It occupies less storage space.
18. What is the purpose of the ‘ EXPLAIN’ statement in PostgreSQL?
 In PostgreSQL, the purpose of the ‘EXPLAIN’ statement is to offer the performance plan built by the PostgreSQL planner for a given query. ‘EXPLAIN’ not just only presents the plan and PostgreSQL’s predictions, but it also runs the query (so be cautious with UPDATE and DELETE queries !)

Also Read: MySQL Interview Questions

19. What is the trigger in Postgresql?
In PostgreSQL, Triggers are the term that refers to the database callback functions. It is called independently each time an event such as an insert, update, or deletion takes place.

20. How can you prevent data inconsistencies in PostgreSQL?
To avoid data variations in PostgreSQL:

Apply transactions to assure integrity and manage data reliability.
Execute limitations to impose data accuracy standards in the entire database.
Verify and sanitize client information to stop the incorporation of unreliable or harmful data.
Build connections among tables employing foreign key conditions to uphold relationship integrity.
21. How can you implement data replication in PostgreSQL?
Data replication in PostgreSQL can be executed by making use of various techniques like logical replication, streaming replication, or third-party tools like pgpool-II. These approaches allow you to copy data from one PostgreSQL server to another for redundancy or expandability goals.

22. What are the steps to monitor database performance in PostgreSQL?
By making use of integrated tools such as pg_stat_statements and pg_stat_activity.
By installing tracking tools like pgAdmin or DataDog.
By examining records for sluggish queries and errors.
By keeping track of system resources.
By improving queries for optimal performance.
23. How can you secure a PostgreSQL database?
Protecting a PostgreSQL database requires executing precautions. Some precautions are applying secure passwords, allowing SSL encryption, configuring firewall rules, and restricting permission by means of valid authentication. These measures safeguard against access breaches, data intrusion, and other security threats.

24. What is the importing and exporting of data in PostgreSQL?
Importing and exporting data in PostgreSQL can be done by making use of the COPY command. You can import data from a file into a table by using this command. It can also be used with a suitable query to export data from a table to a file in multiple configurations such as CSV or plain text.

25. What is a recursive query in PostgreSQL
A recursive query in PostgreSQL is a kind of query that refers to itself in order to retrieve structured or loop data. It enables you to navigate links or hierarchies by repeatedly querying the same table or output with a revised condition until the desired outcomes are acquired.

26. How can you perform a full-text search in PostgreSQL?
Full-text search in PostgreSQL can be executed by applying the integrated tool known as tsvector and tsquery. It requires building a full-text search index on the connected columns, constructing queries using the tsquery syntax, and running these queries to search for specific string patterns within the indexed data.

27. How will you create and manage user roles and permissions in PostgreSQL?
User roles and rights in PostgreSQL can be built and handled by applying SQL commands like CREATE ROLE, ALTER ROLE, and GRANT/REVOKE authority. Roles can be granted exact permissions and privileges on database systems, schemas, tables, and other database objects to control access and manage security within the PostgreSQL database.

28. What are stored procedures in PostgreSQL
Stored procedures in PostgreSQL are fixed groups of SQL statements saved in the database performed afterward by applying a designated name. They offer a way to encapsulate and recycle complicated data manipulation, enhance efficiency, and improve safety by restricting direct entry to base tables and data.

29. What is the VACUUM command in PostgreSQL
The VACUUM command in PostgreSQL is engaged to retrieve storage capacity filled by modified rows. It helps assists in maximizing database speed by minimizing excessive growth, preserving data consistency, and securing dependable query planning and execution.

30. What are ‘database callback functions’ in PostgreSQL?
Triggers in PostgreSQL are known as database callback functions. They get invoked automatically when a database event occurs that has been defined inside the trigger.

Advanced-Level PostgreSQL Interview Questions
Here is a list of PostgreSQL interview questions and answers for experienced candidates:

31. How would you start, stop and restart the PostgreSQL server on Windows?
Activating the server: Start the PostgreSQL service by the Services Management Console or command line utility.
Stopping the server: stop the PostgreSQL service through the Services Management Console or command line.
Restarting the server: Either restart the PostgreSQL service utilizing the Services Management Console or stop and start it again.
32. How to select the first 10 records in PostgreSQL?
We need to use a keyword called LIMIT for selecting the first 10 records in PostgreSQL.

For example:

SELECT * FROM Teacher ORDER BY Exp DESC LIMIT 10
In this example, we have a table called “Teacher” that holds information about teachers. The “ORDER BY” command is used to sort the data. The “Exp” field represents teaching experience. Using “DESC” indicates descending order. By using the “LIMIT” keyword, we can display the top 10 teachers with the highest teaching experience in descending order.

Also Read: PL/SQL Interview Questions

33. What are the three events that must be interrupted between concurrent transactions in PostgreSQL?
The three events that need to be stopped between the concurrent transactions in PostgreSQL are:

Inconsistent reads – when an object is read twice and the object has different values.
Lost updates – when the same record gets updated at the same time by two different transactions.
Dirty reads – when data is modified by a transaction that is yet to be committed and is read by another transaction.
34. What is a sequence in PostgreSQL?
A special type of data that is created for generating multiple numeric identifiers in the database is known as a sequence in PostgreSQL. It is generally used for creating sequences and artificial primary keys that are similar to the Auto_increment of MySQL.

35. What is an inverted file in PostgreSQL?
An index data structure that is used for mapping the location of content to a database file inside a document is known as an inverted file in PostgreSQL. It basically contains distinct words found in a text and the frequency of each word in that text.

36. What are the steps for changing the data type of a column in PostgreSQL?
To change the data type of a column in PostgreSQL we can use the following commands:

ALTER TABLE
ALTER COLUMN
For Example:

ALTER TABLE table_name
ALTER COLUMN column_name TYPE new_data_type;
37. What are parallel queries in PostgreSQL and how do they work?
Parallel query is a feature in PostgreSQL that enables multiple work processes to run parallelly for a single query to improve the time taken in the execution of a query. It breaks down the query into chunks and processes them in parallel.

38. What is the process of creating a backup of the database in PostgreSQL?
We can take a backup of the database in PostgreSQL using a command known as “pg_dump”.

To take a backup of a SQL text file first, we need to login into our database server and then run the following command in the terminal:

Pg_dump db_name > txt_file_name.sql
The database can be retrieved from the backup using the following command:

/usr/local/bin/pg_dump db_name > db_name.pgdump
39. What do you know about reserved words in PostgreSQL?
SQL keywords and some other symbols that have special meanings are known as reserved words in PostgreSQL. Reserved words are utilized to address SQL syntax, data types, functions, operators, and other database-specific characters. They are a primary part of the PostgreSQL language and cannot be changed or used distinctly.

40. What is the main difference between clustered and non-clustered indexes in PostgreSQL?
Clustered indexes in a table have rows organized in a comparable pattern like the data pages. There can potentially have just one clustered index per table. In contrast, non-clustered indexes have rows arranged in a distinct order from the data pages. A table can have several non-clustered indexes.

41. What is the disadvantage of DROP TABLE in PostgreSQL?
DROP_TABLE command deletes entire data from a table in PostgreSQL but the main disadvantage in using this command to delete data is that it wipes out the structure of the table with data so we need to create a new table for storing data.

42. What is the role of table space in PostgreSQL?
Table spaces are directories where the files containing the data can be stored in PostgreSQL. They provide an easy way to handle disk layout during installation and permit administrators to enhance performance by using database object patterns effectively.

43. What is ‘WAL’ in PostgreSQL?
WAL or Write-Ahead Logging is a protocol that ensures the integrity of data. Actions and changes are written into a transaction log using WAL. It provides the feature to improve the reliability of the database by updating it or recording changes before making any modifications.

44. What are the database administration tools in PostgreSQL?
The database administration tools used in PostgreSQL are:

Psql – It enables the user to connect to EDB advanced server or PostgreSQL.
Pgadmin – It is used for communicating with relational databases and Postgres on both remote and local servers.
Phppgadmin – It is a web-based utility software for managing PostgreSQL databases.
45. What is the use of the enable_debug command in PostgreSQL?
The enable_debug command is used by the developers to find out bugs or errors in the source code that may occur during the execution in PostgreSQL. It compiles all libraries and applications and delays the system and also amplifies binary file size.

Conclusion

PostgreSQL interview questions will help you understand the foundation for your database management skills and will offer you a base for your knowledge and preparation for the interview. However, it is crucial to note that the actual questions may vary depending on the specific organization and position that you are applying for. Therefore, make sure you carefully review the job description thoroughly to ensure proper preparation for the interview.

PostgreSQL Interview Questions


Introduction to PostgreSQL Interview Questions and Answers
PostgreSQL is an object-relational database management systems (ORDBMS). It is a powerful, open-source object-relational database system. Any corporation or other private entity does not control PostgreSQL, and the source code is available free of charge. PostgreSQL runs on all major operating systems, including Linux, UNIX, and Windows. It supports text, images, sounds, and video and includes C/C++, Java, Perl, Python, Ruby, and Open Database Connectivity programming interfaces.

Installation
Follow these steps to install PostgreSQL on the Windows system:

Pick the most relevant version of PostgreSQL from EnterpriseDB.
Run the downloaded software as administrator. Please select the location where you want to install it.
The next step of the installation is selecting the directory where data should be stored. By default, it is stored under the “data” directory.
It will prompt you to enter a password to make the data stored more secure.
The next step is to set a default port.
On completion of the installation, a message is displayed.
Features of PostgreSQL

Language support: PostgreSQL supports four standard procedural languages PL/pgSQL, PL/Tcl, PL/Perl, and PL/Python.
Indexes: PostgreSQL supports B+ tree, hash, generalized search trees, and inverted indexes. Users can also create customized indexes.
Views: PostgreSQL supports views that create virtual tables.
Rules allow a hierarchy of incoming queries to be re-written and supported by PostgreSQL.
Inheritance: in PostgreSQL, a table can be set to inherit its characteristics from a “parent” table.
User-defined functions: it supports the creation of almost all new objects inside the database like Casts, conversions, dataTypes, domains, functions including aggregate functions, and indexes including custom indexes for custom types operator.
Now, if you are looking for a job related to PostgreSQL, you must prepare for the 2023 PostgreSQL Interview Questions. Every interview differs from the job profiles, but you must have a good and precise knowledge of PostgreSQL processes to clear the interview. Here, we have prepared the vital PostgreSQL Interview Questions and answers to help you succeed in your interview.

Below are the 12 crucial PostgreSQL Interview Questions and answers frequently asked in an interview. These questions are divided into two parts as follows:

Part 1 – PostgreSQL Interview Questions (Basic)
This first part covers basic PostgreSQL Interview Questions and Answers.

Q1. What are the main features of PostgreSQL?
Answer:
Following are some of the features of PostgreSQL

Object-relational database.
Support and extensibility for SQL.
Flexible API and database validation.
MVCC and procedural languages,
WAL and Client-Server.
Q2. What is Cube Root Operator (||/) in PostgreSQL?
Answer:
Returns Cube Root of a number
e.g., Select ||/ 16 “Cube Root of 16.”

Q3. Provide a brief explanation of the functions in PostgreSQL.
Answer:
Functions are essential because they help execute the code on the server. Some of the languages to program functions are PL/pgSQL, a native language of PostgreSQL, and other scripting languages like Perl, Python, PHP, etc. The statistical language PL/R can also be used to increase the efficiency of the functions.

Let us move to the following PostgreSQL Interview Questions.

Q4. Can you explain Pgadmin?
Answer:
Pgadmin is a feature known to form a graphical front-end administration tool. This feature is available under free software released under an Artistic License. PgAdmin III is a new database administration tool that has been released under the Artistic License.

Q5. What is Multi-version control?
Answer:
Multi-version concurrency control, or MVCC, avoids unnecessary database locking. This removes the time lag for the user to log into his database. This feature or time lag occurs when someone else is accessing the content. All transactions are kept as a record.

Q6. What will be the new characteristics of PostgreSQL 9.1?
Answer:
During updating the project, one can never be sure which features will go in and which won’t make the cut. The project has precise and stringent standards for quality, and some patches may or may not match them before the set deadline. The 9.1 version is currently incorporating several essential features, such as JSON support, synchronous replication, nearest-neighbor geographic searches, column-level collation, SQL/MED external data connections, security labels, and index-only access. However, this list will likely change completely when Postgre 9.1 is released.

Part 2 – PostgreSQL Interview Questions (Advanced)
Let us now have a look at the advanced PostgreSQL Interview Questions.

Q7. What is command enable-debug?
Answer:
The command enable-debug enables the compilation of all the applications and libraries. The execution of this procedure usually impedes the system, but it also amplifies the binary file size. Debugging symbols that are present generally assists the developers in spotting the bugs and other problems which may arise associated with their script.

Q8. What are the indices of PostgreSQL?
Answer:
These are inbuilt functions or methods like GIST Indices, hash table, and B-tree, which the user can use to scan the index backwardly. Users can also define their indices of PostgreSQL.

Q9. What is the option in PostgreSQL to check rows affected in a previous part of the transaction?
Answer:
The SQL standard defines four transaction isolation levels that pertain to three phenomena. We must prevent the occurrence of the three phenomena between concurrent transactions. The unwanted phenomenon is

Phantom read: a transaction that re-executes a query, returning a set of rows that satisfy a search condition and then finds that the location of rows helping the situation has changed due to another recently committed transaction.
Non-repeatable read: a transaction that re-reads the data that it has previously read and then finds that another transaction has already modified data.
Dirty reads: a transaction that reads data written by a concurrent uncommitted transaction is the dirty read.
Let us move to the following PostgreSQL Interview Questions.

Q10. What is A CTID?
Answer:
CTIDs are a field in every PostgreSQL table and are known to identify specific physical rows according to their block and offset positions within a particular table. They are used by index entries to point to physical rows. It is unique for each record in the table and quickly denotes the location of a tuple. Updating a logical row causes a change in its CTID, rendering it unsuitable for long-term row identification. In certain cases, it can be beneficial to identify a row within a transaction when there is no expectation of any competing update.

Q11. What are the tokens?
Answer:
Tokens are the building blocks of any source code. We categorize these symbols as constant, quoted identifiers, other identifiers, and keywords due to their unique characteristics and composition. Tokens which are keywords, consist of pre-defined SQL commands and meanings. Identifiers represent variable names such as columns, tables, etc.

Q12. What is the purpose of Array_To_String in PostgreSQL?
Answer:
The Array_To_String function concatenates array elements using a provided delimiter.

30 самых часто задаваемых вопросов на собеседованиях по PostgreSQL

Топ-30 вопросов и ответов по PostgreSQL в 2022 году
1. Как выглядит секционированная таблица PostgreSQL?
Секционированная таблица представляет собой логическую структуру. Она используется для разбиения большой таблицы на более мелкие части.

2. Как избежать ненужной блокировки базы данных?
Чтобы избежать ненужной блокировки базы данных, можно использовать MVCC (управление параллелизмом нескольких версий).

3. Какую цель выполняет pgAdmin в PostgreSQL?
pgAdmin в PostgreSQL — это инструмент администрирования данных. Он служит для получения, разработки, тестирования и обслуживания баз данных.

4. Как называется функция PostgreSQL, которая позволяет разбивать большую таблицу на более мелкие части?
Она называется разбиением (секционированием) таблицы.

5. Что вы знаете о PL/Python?
PL/Python — это процедурный язык, поддержку которого обеспечивает PostgreSQL.

6. Какие методы предоставляет PostgreSQL для создания новой базы данных?
Для создания новой базы данных PostgreSQL предоставляет следующие методы:

Использование команды SQL CREATE DATABASE

Использование утилиты creatdb в командной строке

7. Как вы думаете, какая наиболее важная информация включается в схему?
Схема содержит таблицы вместе с типами данных, представлениями, индексами, операторами, последовательностями и функциями.

8. Какие существуют операторы в PostgreSQL?
Операторы PostgreSQL включают в себя арифметические операторы, операторы сравнения, логические операторы и побитовые операторы.

9. Как удалить базу данных PostgreSQL?
Удалить базу данных можно, используя один из следующих вариантов:

С помощью команды SQL DROP DATABASE

С помощью утилиты командной строки dropdb

10. Как вы думаете, для чего используются индексы?
Индексы используются поисковой системой для ускорения поиска данных.

11. Как вы думаете, для чего нужен кластерный индекс?
Кластерный индекс сортирует строки данных таблицы на основе значений их ключей.

12. Как вы думаете, что такое колбэк-функции базы данных? Как они помогают приложению?
Функции базы данных называются триггерами PostgreSQL. Когда происходит указанное событие базы данных, триггеры PostgreSQL выполняются или вызываются автоматически.

13. Каковы преимущества указания типов данных в столбцах при создании таблицы?
Некоторые из преимуществ включают: согласованность, компактность, проверку и производительность.

14. Что нужно сделать, чтобы обновить статистику в PostgreSQL?
Чтобы обновить статистику в PostgreSQL, нам нужно использовать специальную функцию, называемую vacuum.

15. В чем, по вашему мнению, недостаток команды DROP TABLE?
Хотя команда DROP TABLE позволяет полностью удалить данные из существующей таблицы, у нее есть недостаток — она удаляет полную структуру таблицы из базы данных. Из-за этого нам нужно заново создать таблицу для хранения данных.

16. Как полностью удалить таблицу?
Полностью удалить данные из существующей таблицы можно с помощью команды PostgreSQL TRUNCATE TABLE.

17. Каковы различные свойства транзакции в PostgreSQL? Какая аббревиатура используется для их обозначения?
К свойствам транзакции в PostgreSQL относятся атомарность, согласованность, изолированность и долговечность. Они обозначаются аббревиатурой ACID (англ. Atomicity, Consistency, Isolation, and Durability).

18. Для какой цели служит поле CTIDs?
Поле CTIDs идентифицирует конкретные физические строки в таблице в соответствии с их блоками и смещениями в таблице.

19. Какие команды используются для управления транзакциями в PostgreSQL?
Для управления транзакциями в PostgreSQL используются следующие команды: BEGIN TRANSACTION, COMMIT и ROLLBACK.

20. Каковы основные различия между SQL и PostgreSQL?
PostgreSQL — это продвинутая версия SQL. Из различий можно обозначить следующие пункты:

В отличие от SQL, представления в PostgreSQL не подлежат обновлению.

Еще одно отличие состоит в том, что SQL предоставляет вычисляемые столбцы; от PostgreSQL того же ожидать нельзя.

В отличие от SQL, в PostgreSQL не нужно создавать DLL, чтобы увидеть, что делает код.

PostgreSQL поддерживает динамические действия, тогда как SQL их не поддерживает.

21. Как обеспечивается безопасность в PostgreSQL?
PostgreSQL использует соединения SSL для шифрования связи клиента или сервера, чтобы обеспечить безопасность.

22. Какова функция свойства Atomicity в PostgreSQL?
Свойство Atomicity обеспечивает успешное завершение всех операций в транзакции.

23. Каковы, по вашему мнению, преимущества использования PostgreSQL?
Некоторыми из преимуществ PostgreSQL являются СУБД с открытым исходным кодом, поддержка сообщества, совместимость с ACID, разнообразные методы индексации, полнотекстовый поиск, различные методы репликации, разнообразные функции расширения и т. д.

24. Как вам может помочь ведение журнала с предзаписью?
Ведение журнала с предзаписью повышает надежность базы данных, регистрируя изменения до того, как в базу данных будут внесены какие-либо изменения или обновления.

25. Какие есть важные инструменты администрирования PostgreSQL?
Некоторые из важных инструментов администрирования данных, поддерживаемых PostgreSQL — это Psql, Pgadmin и Phppgadmin.

26. Как можно хранить двоичные данные в PostgreSQL?
Можно хранить двоичные данные в PostgreSQL либо с помощью байтов, либо с помощью больших объектов.

27. Что вы думаете о термине «некластеризованный индекс»?
В некластеризованном индексе порядок строк индекса не соответствует порядку в реальных данных.

28. Как вы думаете, для какой цели в PostgreSQL служит табличное пространство?
Это место на диске. При этом PostgreSQL хранит файлы данных, содержащие индексы, таблицы и т. д.

29. Как вы думаете, есть ли недостатки у PostgreSQL?
Да, есть несколько недостатков. Некоторые из них:

PostgreSQL медленнее MySQL в плане производительности.

У PostgreSQL нет поддержки большого количества приложений с открытым исходным кодом, в отличие от MySQL.

Поскольку он больше ориентирован на совместимость, изменения, внесенные для повышения скорости, требуют дополнительной работы.

30. Что представляет собой токен в SQL выражении?
В операторе SQL токен представляет собой идентификатор, ключевое слово, идентификатор в кавычках, специальный символ или константу.

Top PostgreSQL Interview Questions for 2026 | Prep Guide
By Sachin Satish
Share This Article:
Last updated on Dec 14, 202512118
Top 50+ Most Asked PostgreSQL Interview Questions for 2026
After reading our top 50+ PostgreSQL interview questions with answers for beginners and intermediate level candidates, you know exactly what interviewers are looking for in an applicant. You can use this list to prepare yourself and nail your next postgreSQL query interview without any stress.

Top 50+ PostgreSQL Interview Questions and Answers for 2026
1. What does a PostgreSQL partitioned table look like?
The partitioned table is a logical structure. It is used to split a large table into smaller pieces, which are called partitions.

2. How can you avoid locking a database unnecessarily?
We can use MVCC (Multi-version concurrency control) to avoid unnecessary locking of a database.

3. What purpose does pgAdmin serve in PostgreSQL?
The pgAdmin in PostgreSQL is a data administration tool. It serves the purpose of retrieving, developing, testing, and maintaining databases.

4. What is the PostgreSQL feature called that splits a large table into smaller pieces?
It is called table partitioning.

5. What do you know about PL/Python?
PL/Python is a procedural language to which PostgreSQL provides support.

6. What methods does PostgreSQL provide to create a new database?
PostgreSQL provides the following methods to create a new database:

Using CREATE DATABASE, an SQL command
Using created a command-line executable
7. What would be the most important pieces of information you would want to include in a schema?
A schema contains tables along with data types, views, indexes, operators, sequences, and functions.

8. What are some of the different operators in PostgreSQL?
The PostgreSQL operators include: Arithmetic operators, Comparison operators, Logical operators, and Bitwise operators.

9. How can you delete a PostgreSQL database?
We can delete the database by using any one of the below options:

Using DROP DATABASE, an SQL command
Using dropdb a command-line executable
10. What do you think indexes are used for?
Indexes are used by the search engine to speed up data retrieval.

11. What do you think is a Cluster index's purpose?
Cluster index sorts table data rows based on their key values.

12. What do you think are database call back functions? How do they help your application?
The database call back functions are called PostgreSQL Triggers. When a specified database event occurs, the PostgreSQL Triggers are performed or invoked automatically.

13. What are the benefits of specifying data types in columns while creating a table?
Some of these benefits include consistency, compactness, validation, and performance.

14. What do you need to do to update statistics in PostgreSQL?
To update statistics in PostgreSQL, we need to use a special function called a vacuum.

15. What do you think is the disadvantage of the DROP TABLE command?
Though the DROP TABLE command has the ability to delete complete data from an existing table, the disadvantage with it is: it removes complete table structure from the database. Due to this, we need to re-create a table to store data.

Become a Data Science & Business Analytics Professional
28%
Annual Job Growth By 2026
11.5 M
Expected New Jobs For Data Science By 2026
SQL Certification Course
SQL Certification Course
24x7 learner assistance and support
View Program
Microsoft 
AI-Powered Full Stack Developer Program
Learn through 100+ hours of core curriculum delivered in live online classes by industry experts
Enhance your coding skills using AI-driven tools like ChatGPT, CodeWhisperer, Copilot, and Hugging Face
9 months
View Program
Here's what learners are saying regarding our programs:
Wayne RyanWayne RyanWeb Developer, Smith Drug Company
The program helped me bridge the gap between traditional software development knowledge and modern industry practices. I gained hands-on exposure to technologies like Docker, DevOps, and application architecture, which improved my problem-solving skills and helped me contribute more effectively to real-world development challenges at work.

John Carlo ApelacioJohn Carlo Apelacio
The program has boosted my confidence and made my goal of becoming a software engineer feel achievable. The structured learning and hands-on practice gave me clarity and direction. I’m now focused on building skills, gaining experience, and steadily working toward a long-term career in software engineering.

Not sure what you’re looking for?View all Related Programs
16. How can you completely delete a table?
We can delete complete data from an existing table using the PostgreSQL TRUNCATE TABLE command.

17. What are the different properties of a transaction in PostgreSQL? Which acronym is used to refer to them?
The properties of a transaction in PostgreSQL include Atomicity, Consistency, Isolation, and Durability. These are referred to by the acronym, namely ACID. 

18. What purpose does the CTIDs field serve?
The CTIDs field identifies the specific physical rows in a table according to their block and offsets positions in that table.

19. Which are the commands used to control transactions in PostgreSQL?
The commands used to control transactions in PostgreSQL are BEGIN TRANSACTION, COMMIT, and ROLLBACK.

20. What are the main differences between SQL and PostgreSQL?
PostgreSQL is an advanced version of SQL. Some of the differences between these two include the following:

Unlike SQL, views in PostgreSQL are not updatable.
Another difference is that SQL provides computed columns; the same cannot be expected from PostgreSQL.
Unlike SQL, in PostgreSQL, you don’t need to create a DLL to see what the code is doing.
PostgreSQL supports dynamic actions whereas SQL doesn’t support them.
21. How is security ensured in PostgreSQL?
PostgreSQL uses SSL connections to encrypt client or server communications so that security will be ensured.

22. What is the function of the Atomicity property in PostgreSQL?
Atomicity property ensures the successful completion of all the operations in a work unit.

23. What do you think are some of the advantages of using PostgreSQL?
Some of the advantages of PostgreSQL are open-source DBMS, community support, ACID compliance, diverse indexing techniques, full-text search, a variety of replication methods, and diversified extension functions, etc.

24. How does Write-Ahead Logging help you?
The Write-Ahead Logging enhances database reliability by logging changes before any changes or updates are made to the database.

25. What are some of the important PostgreSQL administration tools?
Some of the important data administration tools supported by PostgreSQL are Psql, Pgadmin, and Phppgadmin.

26. How do you think you can store binary data in PostgreSQL?
We can store the binary data in PostgreSQL either by using bytes or by using the large object feature.

27. What do you think of the term "non-clustered index"?
In a non-clustered index, the index row order doesn’t match the order in actual data.

28. What purpose do you think table space serves in PostgreSQL?
It is a location in the disk. In this, PostgreSQL stores the data files, which contain indices and tables, etc.

29. Do you think there are any disadvantages with PostgreSQL?
 Yes. There are a few disadvantages. Some of these include the following:

It is slower than MySQL on the performance front.
It doesn’t have the support of a good number of open source applications when compared to MySQL.
Since it focuses more on compatibility, changes made to improve the speed need more work.
30. What does a token in a SQL statement represent?
In a SQL Statement, a token represents an identifier, keyword, quoted identifier, special character symbol, or a constant.

31. What is the process of splitting a large table into smaller pieces called in PostgreSQL?
In PostgreSQL, the process of splitting a large table into smaller pieces is called table partitioning. It can be done using several different methods, including range partitioning, list partitioning, and hash partitioning. 

32. What are database callback functions called? What is its purpose?
Database callback functions are also known as database triggers. They are instructions automatically executed in response to specific events on a database table, such as insert, update, or delete operations. The purpose of a database trigger is to maintain data integrity, enforce business rules, and perform additional actions, such as auditing or cascading updates. 

33. What does a Cluster index do? 
A clustered index organizes the data rows in a table based on the order of the indexed columns. This means the rows with the same indexed values will be physically stored together on the storage media. This improves the performance of queries that involve those indexed columns, as the database engine can retrieve the relevant data faster.

34. What is PostgreSQL?
PostgreSQL is a free, open-source relational database management system (RDBMS) that emphasizes extensibility and SQL compliance. It is known for its robust feature set, high performance, and reliability. 

35. What are the most important features of PostgreSQL?
PostgreSQL is a powerful, open-source relational database management system known for its stability, data integrity, and robust feature set. Some of its most important features include:

ACID compliance
Support for advanced data types and SQL
Multi-version concurrency control (MVCC)
Rich indexing options
Become a Data Science & Business Analytics Professional
28%
Annual Job Growth By 2026
11.5 M
Expected New Jobs For Data Science By 2026
SQL Certification Course
SQL Certification Course
24x7 learner assistance and support
View Program
Microsoft 
AI-Powered Full Stack Developer Program
Learn through 100+ hours of core curriculum delivered in live online classes by industry experts
Enhance your coding skills using AI-driven tools like ChatGPT, CodeWhisperer, Copilot, and Hugging Face
9 months
View Program
Here's what learners are saying regarding our programs:
Wayne RyanWayne RyanWeb Developer, Smith Drug Company
The program helped me bridge the gap between traditional software development knowledge and modern industry practices. I gained hands-on exposure to technologies like Docker, DevOps, and application architecture, which improved my problem-solving skills and helped me contribute more effectively to real-world development challenges at work.

John Carlo ApelacioJohn Carlo Apelacio
The program has boosted my confidence and made my goal of becoming a software engineer feel achievable. The structured learning and hands-on practice gave me clarity and direction. I’m now focused on building skills, gaining experience, and steadily working toward a long-term career in software engineering.

Not sure what you’re looking for?View all Related Programs
36. What are the different data types used in PostgreSQL?
In PostgreSQL, several data types can be used, including integers , floating-point numbers, character and string types, binary data, date and time types, and Boolean values.

37. What do you understand about a base directory in PostgreSQL?
In PostgreSQL, the base directory refers to the top-level directory where all data files for a specific database cluster are stored. This includes subdirectories for each database within the cluster, as well as files containing configuration settings and other metadata.

38. What do you understand about string constants in PostgreSQL?
In PostgreSQL, a string constant is a fixed sequence of characters that is enclosed in single quotes. 

39. What is the maximum size for a table in PostgreSQL?
The size for a table in PostgreSQL is 32 terabytes. 

40. What is Multi-Version Concurrency Control in PostgreSQL? Why is it used?
Multi-Version Concurrency Control (MVCC) is a technique used in PostgreSQL to allow multiple transactions to access the same data simultaneously without conflicting with each other. It is used by creating a separate version of a row for each transaction that modifies it.

41. What is the key difference between multi-version and lock models?
A multi-version model allows multiple versions of the same data to exist simultaneously, while a lock model only allows one version of the data to exist at a time, and locks the data while it is being edited.

42. What are the Indices of PostgreSQL?
Indices in PostgreSQL are used to improve the performance of data retrieval operations by providing a faster way to look up specific rows in a table. 

43. What are the tokens in PostgreSQL?
In PostgreSQL, a token is a sequence of characters that represents a single syntactic element in a SQL query. Tokens include keywords, operators, and identifiers, and are used by the PostgreSQL parser to understand the structure and meaning of a query.

44. What are some new characteristics introduced in Postgre 9.1?
PostgreSQL 9.1 introduced several new features, including support for parallel query execution, improved indexing options, and support for replication slots. It also added support for unlogged tables and improved support for JSON data types. 

45. What do you know about the history of PostgreSQL?
PostgreSQL was first released in 1996. It was developed at the University of California, Berkeley as a part of the Postgres project, and is the most popular open-source database in use today. 

46. How can you start, stop, and restart the PostgreSQL server on Windows?
To start, stop, and restart the PostgreSQL server on Windows, use the command "pg_ctl start/stop/restart -D [data directory]" in the command prompt. 

47. What is the difference between clustered index and non clustered index in PostgreSQL?
A clustered index helps in determining the physical order of data in a table, while a non-clustered index provides a faster way to look up data without affecting the physical order of the table in PostgreSQL.

48. What is the difference between PostgreSQL and MongoDB databases?
PostgreSQL is a RDBMS while MongoDB is a document-oriented NoSQL database. 

49. What do you understand about parallel queries in PostgreSQL? How does it work?
Parallel query in PostgreSQL is a feature that allows multiple parallel worker processes to work on a single query to improve performance and speed up query execution time by breaking down the query into smaller parts and processing them in parallel. 

50. What is the use of command enable-debug in PostgreSQL?
The "enable_debug" command in PostgreSQL is used to enable or disable debugging output for various subsystems of the database system.

51. What are the reserved words in PostgreSQL?
The reserved words in PostgreSQL are keywords that have a special meaning in the SQL language and cannot be used as identifiers (such as table or column names) without being quoted. 

52. What is tablespace in PostgreSQL? What is its usage?
A tablespace in PostgreSQL is a location on disk where data files of specific tables or indexes can be stored, allowing for more control over disk usage and file placement. 

53. What are the three phenomena that must be prevented between concurrent transactions in PostgreSQL?
The three phenomena that must be prevented between concurrent transactions in PostgreSQL are lost updates, dirty reads, and inconsistent reads.

54. What are the key differences between Oracle and PostgreSQL?
Oracle is a proprietary database management system while PostgreSQL is open-source

55. What do you understand about a sequence in PostgreSQL?
A sequence in PostgreSQL is a database object that generates a sequence of unique integers, which can be used as the default value for a column or as part of a primary key. 

Become a Data Science & Business Analytics Professional
28%
Annual Job Growth By 2026
11.5 M
Expected New Jobs For Data Science By 2026
SQL Certification Course
SQL Certification Course
24x7 learner assistance and support
View Program
Microsoft 
AI-Powered Full Stack Developer Program
Learn through 100+ hours of core curriculum delivered in live online classes by industry experts
Enhance your coding skills using AI-driven tools like ChatGPT, CodeWhisperer, Copilot, and Hugging Face
9 months
View Program
Here's what learners are saying regarding our programs:
Wayne RyanWayne RyanWeb Developer, Smith Drug Company
The program helped me bridge the gap between traditional software development knowledge and modern industry practices. I gained hands-on exposure to technologies like Docker, DevOps, and application architecture, which improved my problem-solving skills and helped me contribute more effectively to real-world development challenges at work.

John Carlo ApelacioJohn Carlo Apelacio
The program has boosted my confidence and made my goal of becoming a software engineer feel achievable. The structured learning and hands-on practice gave me clarity and direction. I’m now focused on building skills, gaining experience, and steadily working toward a long-term career in software engineering.

Not sure what you’re looking for?View all Related Programs
56. What do you understand about the inverted file in PostgreSQL?
An inverted file in PostgreSQL is a data structure used to efficiently search and retrieve data from a table or index by mapping terms or keywords to the corresponding rows or documents in which they appear.

PostgreSQL Interview Questions for Developers
Use our engineer-created questions to interview and hire the most qualified PostgreSQL developers for your organization.

Get a demo
Back to interview questions

PostgreSQL
Popular for its ability to handle complex queries and its rich set of features, PostgreSQL is an open-source database management system also known for its strong concurrency control and support for advanced data types.

According to the DB-Engines Ranking, PostgreSQL is the fourth most popular database management system currently in use.

To evaluate the PostgreSQL skills of developers during coding interviews, we’ve provided realistic coding exercises and interview questions below.

Additionally, we’ve outlined a set of best practices to ensure that your interview questions accurately assess the candidates’ PostgreSQL skills.

Table of Contents
PostgreSQL example question
Junior PostgreSQL interview questions
Intermediate PostgreSQL interview questions
Senior PostgreSQL interview questions
More PostgreSQL interview resources
Interview best practices for PostgreSQL roles
PostgreSQL example question
Correctly query this employee database
We have 4 questions that we will walk through together during the interview.

This pad comes with a database attached to it that you can write queries against! We have placed the schema in the database tab in the right-hand pane, while also providing a diagram within the starter code to show the relationships.

Questions:
1 – Sort the current employees at the company by who has the highest salary

2 – Show all of the employees that worked on the project “Build a cool site”

3 – For the project “Build a cool site”, if an employee was paid on the 1st and the 15th of every month, show how much each employee made for the duration of the project.

4 – No Code Required! Talk us through how you’d break down the data to figure out who was the most valuable employee to the company


PostgreSQL skills to assess
Database design
SQL query building
Performance tuning
Jobs using PostgreSQL
Database Administrator
Data Analyst
Full stack developer
Business intelligence developer
Junior PostgreSQL interview questions
Question: Write a SQL query to retrieve the first name, last name, and salary of all employees in the ‘Sales’ department.

SELECT first_name, last_name, salary
FROM employees
WHERE department_id = (SELECT id FROM departments WHERE name = 'Sales');
Code language: PostgreSQL SQL dialect and PL/pgSQL (pgsql)
Answer: The above query will retrieve the first name, last name, and salary of all employees who belong to the ‘Sales’ department.

Question: What is normalization in database design and why is it important?

Answer: Normalization is the process of organizing data in a database to reduce redundancy and improve data integrity. It is important because it helps to ensure that data is consistent and accurate, which in turn helps to improve the efficiency of the database and reduce errors.

Question: Write a SQL query to retrieve the names of all employees who are working on a project with a budget of more than $100,000.

SELECT e.first_name, e.last_name
FROM employees e
JOIN employees_projects ep ON e.id = ep.employee_id
JOIN projects p ON ep.project_id = p.id
WHERE p.budget > 100000;
Code language: PostgreSQL SQL dialect and PL/pgSQL (pgsql)
Answer: The above query will retrieve the names of all employees who are working on a project with a budget of more than $100,000.

Question: What is a primary key in a database table and why is it important?

Answer: A primary key is a unique identifier for each row in a database table. It is important because it allows for efficient retrieval of data, helps to ensure data integrity, and allows for the creation of relationships between tables.

Question: Write a SQL query to retrieve the names of all employees who are not working on any project.

SELECT first_name, last_name
FROM employees
WHERE id NOT IN (SELECT employee_id FROM employees_projects);
Code language: PostgreSQL SQL dialect and PL/pgSQL (pgsql)
Answer: The above query will retrieve the names of all employees who are not working on any project.

Question: What is an index in a database and why is it important?

Answer: An index is a data structure that allows for efficient retrieval of data from a database table. It is important because it can significantly improve the performance of database queries, particularly when dealing with large datasets.

Question: Write a SQL query to retrieve the names of all employees who are working on a project that started before January 1, 2022 and ended after December 31, 2022.

SELECT e.first_name, e.last_name
FROM employees e
JOIN employees_projects ep ON e.id = ep.employee_id
JOIN projects p ON ep.project_id = p.id
WHERE p.start_date < '2022-01-01' AND p.end_date > '2022-12-31';
Code language: PostgreSQL SQL dialect and PL/pgSQL (pgsql)
Answer: The above query will retrieve the names of all employees who are working on a project that started before January 1, 2022, and ended after December 31, 2022.

Question: What is a foreign key in a database table and how does it relate to other tables?

Answer: A foreign key is a field in a database table that refers to the primary key of another table. It is used to establish relationships between tables and ensure data integrity by enforcing referential integrity constraints.

Question: Write a SQL query to retrieve the names of all employees who are working on more than one project.

SELECT first_name, last_name
FROM employees
WHERE id IN (SELECT employee_id FROM employees_projects GROUP BY employee_id HAVING COUNT(*) > 1);
Code language: PostgreSQL SQL dialect and PL/pgSQL (pgsql)
Answer: The above query will retrieve the names of all employees who are working on more than one project.

Question: What is a transaction in a database and why is it important?

Answer: A transaction is a sequence of database operations that are performed as a single unit of work. It is important because it helps to ensure data consistency and integrity, even in the face of unexpected events such as system failures or network disruptions. Transactions allow for multiple operations to be treated as a single unit, ensuring that all of the changes are either committed together or rolled back together if an error occurs. This helps to ensure that data is always in a valid state and that the database remains consistent.

Intermediate PostgreSQL interview questions
Question: Write a query to display the total salary of employees in each department.

SELECT SUM(salary), department_id FROM employees GROUP BY department_id;
Code language: SQL (Structured Query Language) (sql)
Question: What is a subquery in PostgreSQL and how is it used?

A subquery is a query that is nested within another query. It is used to retrieve data that will be used in the main query’s WHERE clause to further restrict the data that is retrieved. Subqueries can also be used in the SELECT clause, FROM clause, or HAVING clause to calculate values or retrieve data.

Question: Write a query to find the titles of all projects that have at least one employee assigned to them.

SELECT title FROM projects JOIN employees_projects ON projects.id = employees_projects.project_id;
Code language: SQL (Structured Query Language) (sql)
Question: What is the purpose of the EXPLAIN command in PostgreSQL?

The EXPLAIN command in PostgreSQL is used to analyze how a query will be executed by the PostgreSQL query planner. It returns a query plan that shows the sequence of operations that will be performed by the query planner to retrieve the data. This information can be used to optimize the performance of the query by identifying which parts of the query are taking the most time to execute.

Question: Write a query to find the names of all employees who have worked on a project with a budget greater than $100,000.

SELECT first_name, last_name FROM employees JOIN employees_projects ON employees.id = employees_projects.employee_id JOIN projects ON projects.id = employees_projects.project_id WHERE projects.budget > 100000;
Code language: SQL (Structured Query Language) (sql)
Question: What is a trigger in PostgreSQL and how is it used?

A trigger in PostgreSQL is a special kind of function that is automatically executed in response to certain events, such as a change to a table’s data. Triggers can be used to enforce business rules, such as validating data before it is inserted into a table, or to maintain data integrity by automatically updating related tables when data in one table is modified.

Question: Write a query to find the average salary of employees in each department, sorted by department name in ascending order.

SELECT AVG(salary), departments.name FROM employees JOIN departments ON employees.department_id = departments.id GROUP BY department_id ORDER BY departments.name ASC;
Code language: SQL (Structured Query Language) (sql)
Question: What is a materialized view in PostgreSQL and how is it different from a regular view?

A materialized view in PostgreSQL is a view that stores the results of a query as a physical table. Unlike a regular view, which is just a saved query that is executed each time it is accessed, a materialized view’s results are stored in the database and can be accessed quickly without having to execute the underlying query each time. Materialized views can be refreshed manually or automatically on a schedule.

Question: Write a query to find the number of employees who have worked on each project.

SELECT COUNT(employee_id), project_id FROM employees_projects GROUP BY project_id;
Question: What is a window function in PostgreSQL and how is it used?

A window function in PostgreSQL is a special kind of function that operates on a set of rows, called a window, within a result set. Window functions are used to perform calculations that require access to multiple rows in a result set, such as running totals or moving averages. Window functions can be used in SELECT, ORDER BY, and HAVING clauses, and can also be used to partition the result set into subsets based on one or more columns.

Senior PostgreSQL interview questions
Question: The following function is intended to return a table of all employees who earn a salary greater than the average salary in their department. However, the query fail with an error “column reference ‘department_id’ in the subquery is ambiguous”. How can it be fixed?

CREATE FUNCTION get_high_earners() RETURNS TABLE (
 id INT,
 first_name VARCHAR,
 last_name VARCHAR,
 salary INT,
 department_id INT
) AS $$
BEGIN
 RETURN QUERY SELECT e.id, e.first_name, e.last_name, e.salary, e.department_id
              FROM employees e
              JOIN (SELECT department_id, AVG(salary) AS avg_salary
                    FROM employees
                    GROUP BY department_id) d
              ON e.department_id = d.department_id
              WHERE e.salary > d.avg_salary;
END;
$$ LANGUAGE plpgsql;
Code language: PostgreSQL SQL dialect and PL/pgSQL (pgsql)
Answer: The issue is that the subquery that calculates the average salary is missing an alias to the table “employees”. This alias must be used for all the subquery fields: department_id and salary. Here is the fixed code.

CREATE FUNCTION get_high_earners() RETURNS TABLE (
 id INT,
 first_name VARCHAR,
 last_name VARCHAR,
 salary INT,
 department_id INT
) AS $$
BEGIN
 RETURN QUERY SELECT e.id, e.first_name, e.last_name, e.salary, e.department_id
              FROM employees e
              JOIN (SELECT e2.department_id, AVG(e2.salary) AS avg_salary
                    FROM employees e2
                    GROUP BY e2.department_id) d
              ON e.department_id = d.department_id
              WHERE e.salary > d.avg_salary;
END;
$$ LANGUAGE plpgsql;
Code language: PostgreSQL SQL dialect and PL/pgSQL (pgsql)
Question: What are indexes in PostgreSQL and how can they improve query performance?

Answer: Indexes are database structures that are used to speed up the process of querying data. An index is essentially a data structure that contains a subset of the data in a table and provides a quick way to look up data based on a particular value. By creating an index on a table column, queries that filter or sort based on that column can run much faster because the index can be used to look up the data directly, rather than scanning the entire table.

Question: The following query is intended to retrieve a list of all projects along with the total number of employees who are assigned to each project. However, the query is returning an error. What is wrong with the code and how can it be fixed?

SELECT p.title, COUNT(ep.employee_id) AS num_employees
FROM projects p
JOIN employees_projects ep
ON p.id = ep.project_id
GROUP BY p.id;
Code language: PostgreSQL SQL dialect and PL/pgSQL (pgsql)
Answer: The issue with this code is that the GROUP BY clause should reference the title column instead of the id column since we want to group by project title, not project id. Changing the GROUP BY clause to reference p.title will fix the issue:

SELECT p.title, COUNT(ep.employee_id) AS num_employees
FROM projects p
JOIN employees_projects ep
ON p.id = ep.project_id
GROUP BY p.title;
Code language: PostgreSQL SQL dialect and PL/pgSQL (pgsql)
Question: What are stored procedures in PostgreSQL and how can they be used to simplify database administration?

Answer: Stored procedures are precompiled database code that can be used to perform complex operations or calculations. They can be used to simplify database administration by encapsulating complex logic into a single function that can be called from other parts of the system. Stored procedures can also be used to enforce business rules or perform validation checks before data is inserted or updated, ensuring data consistency across the database.

Question:The following trigger is intended to update the modified_date column in the employees table whenever a row is updated. However, the trigger is not working as intended.

CREATE OR REPLACE FUNCTION update_employee_mod_date() RETURNS TRIGGER AS $$
BEGIN
  NEW.modified_date := NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_employee_mod_date_trigger
BEFORE UPDATE ON employees
FOR EACH ROW
EXECUTE FUNCTION update_employee_mod_date();
Code language: PostgreSQL SQL dialect and PL/pgSQL (pgsql)
Answer: The issue with the trigger is that it is not handling updates to the modified_date column correctly. When the trigger sets the value of the modified_date column to NOW(), it triggers another update, which in turn triggers the trigger again in an infinite loop. This can be fixed by checking if the modified_date column has changed before updating it. Here’s the corrected code:

CREATE OR REPLACE FUNCTION update_employee_mod_date() RETURNS TRIGGER AS $$
BEGIN
  IF NEW.modified_date = OLD.modified_date THEN
    NEW.modified_date := NOW();
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_employee_mod_date_trigger
BEFORE UPDATE ON employees
FOR EACH ROW
EXECUTE FUNCTION update_employee_mod_date();
Code language: PostgreSQL SQL dialect and PL/pgSQL (pgsql)
Question: What is the difference between a view and a table in PostgreSQL and when should you use one over the other?

Answer: A table in PostgreSQL is a collection of data stored in rows and columns, while a view is a virtual table that is derived from a query. Views can be used to simplify complex queries by abstracting away details and providing a simpler, more focused interface to the data. Views can also be used to restrict access to sensitive data by hiding certain columns or rows from users who do not have permission to see them. Tables are typically used to store large amounts of data that will be frequently accessed, while views are more suitable for ad-hoc or reporting queries.

Question: The following query is intended to retrieve a list of all employees and their corresponding department name. However, the query is returning an error. What is wrong with the code and how can it be fixed?

SELECT e.first_name, e.last_name, d.name AS department_name
FROM employees e
JOIN departments d
ON e.department_id = d.id;
Code language: PHP (php)
Answer: The query is not returning an error. However, if there are no corresponding departments for any of the employees, those employees will not be included in the result set. To include all employees regardless of whether they have a corresponding department, you should use a LEFT JOIN instead of an INNER JOIN:

SELECT e.first_name, e.last_name, d.name AS department_name
FROM employees e
LEFT JOIN departments d
ON e.department_id = d.id;
Code language: PostgreSQL SQL dialect and PL/pgSQL (pgsql)
This will ensure that all employees are included in the result set, with NULL values in the department_name column for any employees who do not have a corresponding department.

Question: What are window functions in PostgreSQL and how can they be used to analyze data?

Answer: Window functions are a type of function in PostgreSQL that allow you to perform calculations across a set of rows that are related to the current row, without grouping the rows together. Window functions are particularly useful when you need to perform calculations that depend on the values of other rows in the same table, such as calculating a running total or a moving average.

Window functions can be used to analyze data by providing more flexibility and power than traditional aggregate functions. They can be used to calculate running totals, moving averages, rank data, and more. By using window functions, you can perform complex calculations over a set of rows without having to group the rows together or use subqueries.

Question: A junior developer has created a query to retrieve a list of all employees and their corresponding projects, but it is causing a memory leak in the database. Can you provide a fixed query to retrieve the same information without causing a memory leak?

Erroneous Query:

SELECT e.id, e.first_name, e.last_name, p.title AS project_title
FROM employees e
JOIN employees_projects ep
ON e.id = ep.employee_id
JOIN projects p
ON ep.project_id = p.id;
Code language: PHP (php)
Answer:

SELECT e.id, e.first_name, e.last_name, 
       array_agg(p.title) AS project_titles
FROM employees e
JOIN employees_projects ep
ON e.id = ep.employee_id
JOIN projects p
ON ep.project_id = p.id
GROUP BY e.id;
Code language: PHP (php)
The issue with the original query is that it was retrieving all employees and their corresponding projects using a JOIN, which can cause a memory leak if the number of employees and projects is very large. The corrected query uses array_agg function to aggregate all project titles into an array for each employee, and then groups the results by employee ID to avoid the memory leak issue.

Question: What are common table expressions (CTEs) in PostgreSQL and how can they be used to simplify complex queries?

Answer: Common table expressions (CTEs) are a way to define a temporary result set that can be referenced within a larger query. CTEs are particularly useful when you need to simplify complex queries by breaking them down into smaller, more manageable pieces.

CTEs are defined using the WITH clause, which allows you to create a temporary table that can be used within the context of the larger query. Once defined, the CTE can be referenced in the same way as a regular table, allowing you to perform additional joins and filtering operations on the temporary result set.

By using CTEs, you can simplify complex queries and make them more readable and maintainable. Additionally, CTEs can improve query performance by allowing the database to optimize the execution plan of the query based on the defined CTE.

PostgreSQL Interview Questions and Answers For Freshers
Let’s go through basic-level PostgreSQL interview questions and Answers, which will help you gain an understanding of the database and its capabilities.

1. What is PostgreSQL?
PostgreSQL is a feature-rich relational database management system. It is also called Postgres. It is one of the most popular and widely used Object-Relational Database Management Systems (ORDBMS).

2. What are the important features of PostgreSQL?
It supports all the main operating systems.
It supports procedural languages and MVCC.
It also includes Nested transactions.
3. What is the latest version of PostgreSQL?
As of May 2026, the latest version of PostgreSQL is PostgreSQL 18, released in 2025. The latest minor release is PostgreSQL 18.4, released in May 2026.

4. What are the new features covered in the latest version of PostgreSQL?
The new features of PostgreSQL 18 include:

Asynchronous I/O(AIO) – It allows PostgreSQL to process multiple I/O requests.
B-Tree skip scan – It enables skip scan on multi-column indexes.
UUIDv7 support – It helps generate time-ordered UUIDs, which increases index performance.
Virtual generated columns – They help save storage and reduce write overhead.
OAuth authentication support – It enables token-based access and simplifies database integration with modern identity systems.
5. What are the primary applications of PostgreSQL?
PostgreSQL enables you to:

Create, update, and delete tables in the database
Manipulate, modify, and access data in tables
Summarise and retrieve the required information from a single table or multiple tables
Remove or add particular rows or columns from a table.
6. What methods can you use to create a new database in PostgreSQL?
PostgreSQL uses the following methods:

CREATE DATABASE command
a command-line executable
Master the real-world skills behind these interview questions and walk into your next technical round with confidence through our PostgreSQL training program.
7. What is a Schema in PostgreSQL, and what does it contain?
A database schema defines the logical and physical structure of a relational database. In PostgreSQL, a schema contains tables with views, data types, indexes, constraints, functions, and sequences.

8. Define a Join in PostgreSQL.
Joins can be used to combine and retrieve records from two or more tables. PostgreSQL uses SQL joins to perform these operations.

9. Why do you use constraints in PostgreSQL?
We use constraints to ensure the data integrity in tables and avoid unnecessary actions.

10. What are the different operators in PostgreSQL?
The PostgreSQL operators include the following:

Arithmetic
Comparison
Logical
Bitwise.
11. What are the primary constraints of PostgreSQL?
PostgreSQL offers the following constraints:

Not-Null constraints
Unique constraints
Check constraints
Foreign keys
Primary keys
Exclusive constraints.
12. What are the different types of Joins used in PostgreSQL?
Inner Join: It returns the records with matching values in both tables.
Right Join: It returns all records from the right table and the matched records from the left table.
Left Join: It returns all records from the left table and the matched records from the right table.
Full Join: It returns all records when there is a match in either the left or the right table.
13. What is a view in PostgreSQL?
A view displays the results of a query against one or more inherent tables. Views simplify complex queries. We can define views once and query directly.

14. What is a Sequence?
In PostgreSQL, a sequence is a database object that generates a sequence of unique integers that we can use as default values for a column or as part of a primary key.

15. What is a tablespace?
A tablespace is a disk location where we can store the data files for specific tables or indexes. It helps to have good control over disk usage and file placement.

16. Explain Normalization.
In a database, normalization is a mechanism for creating or modifying databases to address inefficiencies in data storage, query processing, or data modification. In other words, normalization helps reduce data complexity and redundancy.

17. Describe Triggers.
Triggers are also called callback functions. They are specifications that require a database to automatically execute a specific function whenever a particular kind of operation is performed. 

We can define triggers that execute before or after INSERT, UPDATE, or DELETE operations. If a trigger event occurs, the trigger’s function is invoked at the appropriate time to handle the event. 

18. What is a primary key?
In PostgreSQL, a primary key is a column or set of columns that uniquely identifies each row in a table. It ensures the integrity and uniqueness of the data in the table. 

Moreover, the values of primary key columns should be unique, and a primary key column must not include null values.

To define a primary key in PostgreSQL, we can use the “PRIMARY KEY” constraint when creating or altering a table. We can define only one primary key per table.

19. What is the difference between a primary key and a foreign key?
A primary key consists of unique values and non-null values, whereas a foreign key is shared between two or more tables.

21. What are the benefits of PostgreSQL?
There are several benefits of using PostgreSQL as follows:

PostgreSQL offers excellent scalability and performance.
It efficiently manages massive amounts of data and parallel connections.
It provides advanced features, including support for complex data types, geospatial data, and full-text search.
It enables us to create custom data types, procedural languages, and functions.
It ensures data integrity, reliability, and ACID properties.
22. Can you run PostgreSQL on the Cloud?
Yes, we can run PostgreSQL on many cloud providers, including AWS, Google Cloud, and Azure.

23. Explain Multi-Version Concurrency Control.
Multi-Version Concurrency Control (MVCC) is an advanced feature of PostgreSQL. It improves the database performance in multi-user scenarios. 

Therefore, when we query a database, every transaction sees a snapshot of the database from some point in the past, regardless of the database's current state.

24. What are the advantages of partitioning?
Partitioning enables you to divide a table into smaller, more manageable partitions, improving query performance. It’s ideal for handling large tables.

25. What commands must you execute to control transactions in PostgreSQL?
There are three primary commands for controlling transactions in PostgreSQL.

BEGIN TRANSACTION or BEGIN: It can be used for starting a transaction
ROLLBACK: It is used to undo transactions that have not been committed to the database.
COMMIT or END Transaction: It is used for saving changes. The “COMMIT” command saves all transactions to the database, whereas the “ROLLBACK” command rolls back all transactions.
26. What purpose does pgAdmin serve in the PostgreSQL environment?
PgAdmin in PostgreSQL is a data administration tool. It serves to retrieve, develop, test, and maintain databases.

27. How can you enhance the query performance in PostgreSQL?
We can use the following strategies to enhance the query performance:

Indexing for queries that include WHERE clauses.
Performing partitioning for large tables.
Developing SQL statements for reducing overhead, for instance, by preventing unnecessary columns in the SELECT statement.
Maximizing memory usage by tuning server parameters to match hardware specifications.
28. How can you handle errors in PostgreSQL?
We can adopt the following ways to handle errors:

Using Callback functions to handle error and warning conditions. 
Using SQL variables to gain detailed information about the warnings or errors.
29. What are database callback functions called? What is their purpose?
The database callback functions are called PostgreSQL Triggers. When a specified database event occurs, PostgreSQL Triggers are automatically executed.

We hope that these basic questions have helped you become familiar with PostgreSQL.MindMajix Youtube Channel

Top PostgreSQL Interview Questions For Intermediate Learners
Next, we will learn PostgreSQL questions and answers to take your knowledge to the next level. 

30. How can you add new values to a particular table?
PostgreSQL uses the “INSERT INTO” statement to add data to an SQL table.

31. Explain transactions in PostgreSQL.
A transaction is a sequence of database operations considered as a single logical unit. It ensures the atomicity, isolation, durability, and consistency properties of a group of associated database engines.

If any part of the transaction fails, all the modifications within the transaction can be rolled back, maintaining the data integrity.

In PostgreSQL, we can handle transactions internally via auto-commit mode, where each statement is treated as a separate transaction. It can be done externally via the BEGIN, ROLLBACK, and COMMIT statements to define transaction constraints.

32. What does a clustered index do?
A clustered index sorts table rows by their key values.

33. What are the benefits of specifying data types in columns while creating a table?
Some of the benefits include consistency, compactness, validation, and performance.

34. What do you need to perform to update statistics in PostgreSQL?
To update statistics in PostgreSQL, we need to use the VACUUM function.

35. What is the disadvantage of the DROP TABLE command in deleting complete data from an existing table?
Though the DROP TABLE command can delete all data from an existing table, it also removes the table's structure from the database. As a result, we need to recreate a table to store the data.

36. How can you create a database backup in PostgreSQL?
We can use the following methods for backing up PostgreSQL:

Online backups
SQL dumps
File-system-level backups.
37. What is the quick way to remove all rows in a large table?
There are two ways to remove rows from a table: 

The TRUNCATE command
The DELETE command
The TRUNCATE command removes rows more efficiently without scanning individual rows. The DELETE command rapidly scans all the rows and removes them. Thus, the TRUNCATE command is the quickest way to delete rows.

38. How do you delete a database in PostgreSQL?
We can delete the database by:

Using the DROP DATABASE command
Using the dropdb command.
39. How can you ensure security in PostgreSQL?
In PostgreSQL, security is addressed on various levels:

All files stored in a database are protected from read access by accounts other than the PostgreSQL superuser.
We can limit client connections to a username or IP address.
Connections from a client to the database server are enabled only through the local Unix socket.
We can authenticate client connections through external packages.
Each PostgreSQL user is assigned a username and a password.
We can assign users to groups and limit table access per group privileges.
40. How can you delete a table and its dependent objects?
To delete a table in PostgreSQL, we can use the “DROP TABLE” command, followed by the name of the table. 

The “CASCADE” command automatically removes dependent objects such as views.

41. What is the importance of logs for troubleshooting?
PostgreSQL logs are a valuable resource for troubleshooting problems, auditing database activity, and tracking performance. PostgreSQL includes a wide variety of logs, including error logs. These logs can help you identify queries and statements that cause errors during execution.

42. When do you use the “EXPLAIN ANALYZE” command in PostgreSQL?
The “EXPLAIN” command displays the execution plan of the SQL statement. It includes how we can process the tables referenced in our statement, use algorithms for complex operations, and estimate execution time.

We can use the “ANALYZE” command to get the actual time needed. We can use the “EXPLAIN ANALYZE” command to identify problems in complex queries and rewrite them to improve performance.

43. What is the use of the “pg_dump” method?
The “pg_dump” method enables us to create a text file with a group of SQL commands. When we run the commands on the PostgreSQL server, it will recreate the database in the same state as it was at the time of the dump.

44. What will be the maximum table size for a table in PostgreSQL?
In PostgreSQL, the maximum table size is 32 TB.

45. How can you create an index in PostgreSQL?
In PostgreSQL, we use the “CREATE INDEX” statement to create an index. Here is an example:

The above statement will create an index on the “Employee” table.

46. Explain Composite Type.
In PostgreSQL, a composite type enables you to define custom data structures that can store multiple values of different data types. It allows you to create user-defined types made up of the available data types. 

Composite types are useful for grouping related data elements into a single entity. To define a Composite type, we can utilize the “CREATE TYPE” statement.

In the above example, the country_type composite type includes three fields: state, city, and district.

47. What are the different properties of a transaction in PostgreSQL?
The properties of a transaction in PostgreSQL include Atomicity, Consistency, Isolation, and Durability. These are referred to as the ACID properties.

48. What purpose does the CTIDs field serve?
The CTIDs field identifies the specific physical rows in a table by their block and offset positions.

49. What are the commands used to control transactions in PostgreSQL?
The commands used to control transactions in PostgreSQL are given as:

BEGIN TRANSACTION
COMMIT
ROLLBACK
50. Describe Materialized Views.
In PostgreSQL, a materialized view is a database object that stores the results of the query as a physical table. Unlike regular views, materialized views are precomputed and updated manually or periodically.

For creating the materialized view, we can use the “CREATE MATERIALIZED VIEW” statement, defining the contents of the view. The materialized view is created or refreshed using a query.

By storing and precomputing results, we can achieve significant performance gains when querying materialized views.

51. How can you perform bulk inserts?
We can utilize the “INSERT INTO SELECT…” statement or the “COPY” command to perform bulk inserts effectively.

INSERT INTO … SELECT statement

By using the INSERT INTO … SELECT statement, we can insert multiple rows in a single SQL statement. We can define the columns and their values in the “SELECT” clause. We need to repeat the “SELECT” statement for each row we want to insert. 

This method is used when we need to insert data generated dynamically or retrieved from another table.

COPY Command

The “COPY” command reads data from the file specified by “data_file” and inserts it into the specified table. The file must include data in the format specified. This method is rapid and useful for huge datasets.

52. Describe Stored Procedures.
A stored procedure is a pre-compiled database object that binds a set of SQL statements. It enables you to perform complex operations and implement them as a unit. 

The advantages of using stored procedures are:

Code reusability
Improved security
Enhanced performance
For creating a stored procedure, we must execute CREATE PROCEDURE or CREATE FUNCTION statements. 

A stored procedure will include input and output parameters, control flow logic, and local variables used in loops and conditionals. It will also return the result sets through the “OUT” or “RETURN TABLE” parameters.

53. How do you create a view?
To create a view in PostgreSQL, we must use the "CREATE VIEW" command. Example:

The view above is created for employees of the 'HR' department in the 'emp' table.

54. What is the difference between CTE and Subquery?
The primary difference between CTE and Subquery lies in their usage and structure.

A CTE is the temporary result set defined in the query. We can create this result set using the "WITH" clause and refer to it multiple times in the same query. It enhances query readability and enables recursive queries. They are more useful

when a complex query requires multiple subqueries that share a common table.

On the other hand, a subquery is a nested query in another query. We can use the subquery in the "WHERE ', "HAVING", or "FROM" clauses. Subqueries are assessed first, and their results can be used in the outer query. We cannot reuse subqueries. It may impact query performance when subqueries are used excessively.

55. Differentiate between "UNION" and "UNION ALL" operators.
Both UNION ALL and UNION operators are used for combining the results of multiple "SELECT" statements. But they differ in terms of their result sets and behavior.

The "UNION ALL" operator combines the results of multiple "SELECT" statements without removing duplicate rows. It contains all the rows from every "SELECT" statement, containing duplicates. This operator is more rapid than the "UNION statement because it does not need duplicate elimination.

On the other hand, the "UNION" operator combines the results of multiple "SELECT" statements and removes duplicate rows from the final result set. It performs a distinct operation, ensuring that unique rows are returned. This operation will incur overhead due to duplicate elimination.

56. How do you implement the table partitioning?
Table Partitioning allows a large table to be split into smaller, more manageable partitions. Each partition stores a subset of the data based on the specified partitioning key. 

To implement the table partitioning, follow the steps below:

Create a parent table with all the required columns, like the partitioning key.
Create a child table that inherits from the parent table. Every child's table represents a particular partition.
Define the constraints on every child table to limit the partitioning key values.
Create the indexes on the child tables to optimize the query performance.
The partitioning feature in PostgreSQL automatically routes data to the appropriate partitions based on the partitioning key, simplifying data management and improving query performance.

57. What is the use of ensuring the atomicity property in PostgreSQL?
The atomicity property ensures that all operations in a work unit complete successfully.

58. What does Write-Ahead Logging do?
Write-ahead logging enhances database reliability by recording changes before they are applied to databases.

59. What are some of the important data administration tools supported by PostgreSQL?
Some important PostgreSQL data administration tools include psql, PgAdmin, and phpPgAdmin.

60. How can you store the binary data in PostgreSQL?
We can store binary data in PostgreSQL either as bytes or as large objects.

61. What is a non-clustered index?
In a non-clustered index, the order of the index rows doesn’t match the order in the actual data.

62. Are there any disadvantages of PostgreSQL?
Yes, there are a few disadvantages. Some of them are outlined here:

PostgreSQL doesn’t have as much support from open-source applications as MySQL does.
Since it focuses on compatibility, the speed-improvement changes demand more effort.
63. What does a token represent in a SQL Statement?
In a SQL statement, a token represents an identifier, keyword, quoted identifier, special character symbol, or constant.

64. What is the use of "VACUUM" in PostgreSQL?
In PostgreSQL, VACUUM is a critical process that handles disk space occupied by outdated or deleted data. The VACCUM process will identify reusable pages and free up space for future use.

It mainly performs the following two primary tasks:

Updating the Statistics: VACCUM analyzes the data distribution and updates the statistics used by the query planner. It enables PostgreSQL to select optimal query plans, thereby improving performance.
Releasing disk space: When data is deleted or updated in PostgreSQL, it is not immediately freed on disk. Rather, it is marked as reusable by the future inserts.
Advanced PostgreSQL Interview Questions
Let’s move on to advanced PostgreSQL interview questions and detailed answers in this section.

65. How do you implement replication in PostgreSQL?
PostgreSQL supports several methods for implementing replication to ensure data redundancy and high availability. 

The two primary replication methods are physical replication and logical replication. 

Physical Replication

This method involves creating an exact copy of the main database by continuously streaming write-ahead logs to multiple standby servers. We can use the standby servers as read-only query failover targets if the primary server becomes unavailable. 

Streaming Replication is a type of physical replication that is easy to set up and offers real-time applications with low latency.

Logical Replication

This method replicates changes to specific databases or tables, rather than to the entire database cluster. It uses publications, subscriptions, and slots to define which data must be replicated. It offers more flexibility but needs continuous monitoring.

66. How can you select the first seven rows in the table called “employees” in PostgreSQL?
By executing the following query, we can select the first seven rows in a table:

67. Describe full-text search.
In PostgreSQL, full-text search allows you to perform advanced text indexing and searching. It is particularly useful for searching large sets of natural language or unstructured text. 

PostgreSQL provides the tsquery and tsvector data types for full-text search. The tsvector type represents a document's textual content, whereas the tsquery type represents a search query.

To perform a full-text search, we must create a full-text index on the required column using a GIN or GiST index with the "USING" method. After that, we can use the "@@" operator for matching the search query against the indexed column.

68. How can you handle the concurrent updates?
PostgreSQL manages concurrent updates using its Multi-Version MVCC mechanism. MVCC enables multiple transactions to use the same data simultaneously without causing conflicts or blocking.

For example, when two transactions attempt to modify the same data concurrently, PostgreSQL ensures isolation by creating separate copies of the data for each transaction. 

PostgreSQL provides multiple isolation levels and locking mechanisms to handle concurrent updates and resolve conflicts. We can select proper transaction isolation levels like REPEATABLE READ, READ COMMITTED, and SERIALIZABLE based on the application’s needs.

69. How do you use the JSON data in PostgreSQL?
PostgreSQL has excellent support for working with JSON data. We can store, manipulate, and query JSON documents using various parameters and functions. To store JSON data, we can use the JSON and jsonb data types. The JSONB offers binary storage and provides querying and indexing capabilities.

For querying JSON data, PostgreSQL provides functions such as:

jsonb_array_elements
jsonb_extract_path
jsonb_agg
These functions enable the extraction of specific values, navigation through JSON arrays and objects, and aggregation of JSON data. 

We can also use operators such as -> and → to access JSON values and fields directly in SQL queries. Moreover, PostgreSQL supports indexing on the JSONB columns, enabling effective querying of JSON data.

70. How do you perform the data migration?
In PostgreSQL, we will perform the data migration using the steps shown in the image below.

71. Differentiate Regular Views and Materialized Views.
The primary difference between regular and materialized views lies in how they store and handle data.

In PostgreSQL, regular views are virtual tables defined by a query. They will not store any data; instead, they will dynamically fetch it from underlying tables whenever the view is queried.

Materialized Views store the results of inherent data in a physical table-like structure. The data is stored and computed as it is created and is periodically refreshed. These views are more useful when the underlying data is too large to compute or when the view data has to be indexed for fast retrieval.

Selection between regular and materialized views depends on specific use cases and the frequency of data updates.

72. How do you perform the logical replication?
For performing logical Replication, we have to follow the steps below:

Enable the logical operation feature by setting the "wal_level" configuration parameter to logical in the PostgreSQL.conf file.
Create the publication on the source database through the "CREATE PUBLICATION" statement. It will define the tables or schemas that can be replicated.
Create the subscription on the target database through the "CREATE SUBSCRIPTION" statement.
Specify connection information for the source database and publication to replicate.
Begin the replication process by implementing the "ALTER SUBSCRIPTION" statement with the "ENABLE" option.
After that, PostgreSQL will replicate the table or schema from the source database to the target database, keeping them synchronized.

73. Explain the foreign key in PostgreSQL.
In PostgreSQL, a foreign key is a column or set of columns that establishes a link between two tables. It shows the relationship between the referenced table (parent table) and the referencing table (child table). 

The foreign key ensures referential integrity, applying the rules below:

The values in foreign key columns should be available in the primary key or unique key constraint of the referenced table.
Deletions or updates to the referenced table are controlled to maintain consistency with the referencing table.
We can use a foreign key constraint when creating or altering a table to define a foreign key in PostgreSQL.
The foreign key columns in the referencing table should have the same data type as the primary key columns in the referenced table.
74. Explain PostgreSQL Architecture.
PostgreSQL uses a client-server model to receive requests from clients, process the requests, and return results. It follows the process-per-connection approach.

Let’s explore more about the PostgreSQL Architecture

Postmaster Supervisor Process

Postmaster serves as the supervisor in PostgreSQL, and it is the first process to start after PostgreSQL starts. It serves as the Listener and is responsible for authorizing and authenticating incoming client requests and allocating a new Postgres connection for each connection.

Shared Memory Segments

Shared Memory Segments are memory-backed caches reserved for transactions and maintenance activities. We can allocate various shared memory segments to perform different operations.

Background process of PostgreSQL

Background processes maintain consistency between disk and memory, enabling PostgreSQL to operate properly. Checkpointer, Background Writer, WAL Writer, Statistics Collector, and Physical Files are the background processes.

75. How do you implement the parallel query execution?
To implement parallel query execution, we can follow the steps below:

Ensure that the max_parallel_workers configuration parameter is set to a value greater than zero in the Postgresql.conf file. It determines the maximum number of parallel workers for query execution.
Adjust the max_parallel_workers_per_gather configuration to control the number of parallel tasks per query gather. It allows restricting parallelism on an individual query.
Set the min_parallel_index_scan_size and min_parallel_table_scan_size configuration parameters to control the minimum index or table size required for parallel scans to be considered.
If required, we can manually disable or enable parallel execution for particular queries through the SET max_parallel_workers_per_gather statement or by modifying the index or table settings with "ALTER INDEX" or "ALTER TABLE."
By configuring these settings and using the parallel-safe operators. PostgreSQL will parallelize query execution across multiple orders, improving query performance.

76. What are the different kinds of Indexes?
PostgreSQL supports the following kinds of Indexes:

Hash Index: Effective for equality-based lookups but not ideal for range queries.
B-tree Index: This is the default index type, ideal for equality conditions and range queries.
Generalized Inverted Index (GIN): It is suitable for full-text search and arrays.
Generalized Search Tree (GIST) Index: It supports several data types and operators, including text and spatial search.
SP-Gist (Space-Partitioned Generalized Search Tree) Index: It is suitable for custom data types and supports several search strategies.
Block Range Index (BRIN): It is designed for large tables that store sorted data, enabling efficient scans by partitioning data into blocks.
Bloom Filter Index: It provides approximate matching, which is helpful for massive datasets.
Every index type has its benefits and is ideal for different scenarios. The index type selection is based on your data's particular characteristics and requirements.

77. What is the use of the pg_stat_activity view?
In PostgreSQL, the pg_stat_activity view provides information about the server's currently active sessions. It includes a row for every session linked to the database, containing details such as username, process ID, application name, and more.

It is generally used to monitor the database server, check for idle or blocked connections, identify long-running queries, and gather performance-related information. By querying this view, we can gain insights into current activity and the database's state, troubleshoot issues, optimize performance, and manage connections efficiently.

78. Describe a recursive query.
In PostgreSQL, a Recursive query is a query that references its own output. It enables you to perform repetitive operations or traverse hierarchical or graph-like structures. 

This query is built using the "WITH RECURSIVE" clause, also known as a Common Table Expression (CTE). 

CTE includes two parts, including:

The anchor member
The recursive member
The anchor member, which serves as the base case, whereas the recursive member depends on the result of the previous iteration.

The recursive member enables you to query iteratively until a particular condition is satisfied. This recursion will enable you to perform hierarchical queries, traverse the tree structures, and handle the recursive data relationships.

79. What are the differences between PostgreSQL and SQL Server?
Comparison factors	PostgreSQL	SQL Server
License	Open Source	A commercial Microsoft product. However, you can use the free ‘Express’ version.
OS Support	Support cross-platform	Though it supports Linux and Windows, it delivers good performance on Windows.
Syntax	It uses PL/pgSQL and is standards-compliant.	It uses T-SQL and is case-sensitive.
80. What is the primary difference between lock and multi-version models?
A multi-version model enables multiple versions of the same data to exist in parallel. In contrast, a lock model allows only one version to be available at a time and locks the data while it is being edited.

81. How do you create and handle the user-defined functions?
To create and handle user-defined functions, we can use the “CREATE FUNCTION” statement. The code below is an example.

We can declare the return types and argument types as per the requirements. We can write the function logic within the BEGIN and END blocks.

For calling the function, we will use the following statement.

82. What is the use of the pg_stat_replication view?
The pg_stat_replication view provides information on the activity and status of standby servers in a streaming replication setup. By using this view, we can get the following details:

Standby server name and connection information
Replication lag between the standby and primary servers.
Received and applied for WAL positions
Replication state
This view is used to monitor the synchronization and health status of the standby servers and to ensure the overall stability of the replication setup.

83. How do you implement Sharding in PostgreSQL?
Sharding refers to horizontally partitioning data across multiple shards or servers to distribute load and scale the database system. 

We must follow these steps to implement sharding.

84. How do you implement row-level security?
In PostgreSQL, row-level security enables us to limit access to rows in a table based on specific policies or conditions. 

To implement row-level security, we have to follow the following steps:

Enable row-level security by setting the row_security configuration parameter in the PostgreSQL.conf file, or use ALTER TABLE to enable it for individual tables.
Define the security policy on the table through the “ALTER TABLE” statement with the “ENABLE ROW LEVEL SECURITY” clause. It relates to the table that lists the security policy names.
Create the security policy using the “CREATE POLICY” statement, specifying the conditions that determine which rows we can modify or access. We can use column values, custom functions, or user roles to define policy rules.
Grant the appropriate privileges to database roles using the “GRANT” statement, enabling them to access the table with the specified security policies.
After implementing row-level security, PostgreSQL automatically applies security policies whenever queries are executed against the related table.

85. How do you implement data encryption?
We can use the following techniques to implement data encryption:

86. What three phenomena should be prevented between the concurrent transactions?
The three phenomena that should be prevented between the concurrent transactions are:

Dirty Reads
Lost Updates, and
Inconsistent Reads.
PostgreSQL	Oracle
PostgreSQL is an open-source, free object-relational database management system that supports SQL extensibility and standards.	Oracle is an object-relational database management system. It is the first database management system developed for grid computing.
It is developed and implemented in the C Language.	It is developed and implemented in C++, C, and assembly language.
Compared with Oracle, PostgreSQL is a newer database. The PostgreSQL Global Development Group designed it on 8th July 1996.	Compared to PostgreSQL, Oracle is an older database. Bob and Larry Ellison designed it.
PostgreSQL offers good security support, but less than Oracle.	Oracle offers advanced security options.
PostgreSQL is free to use and open-source.	To use Oracle, you need a license.
Check out our in-depth comparison of Oracle vs. PostgreSQL

87. What are the differences between MongoDB and PostgreSQL?
Let's see the comparison of MongoDB vs PostgreSQL:

MongoDB	PostgreSQL
It is a NoSQL Database.	PostgreSQL is the classic relational database system that supports all the SQL standards.
It is developed in C++.	It is developed in C.
It is a non-relational database management system.	It is a relational database management system.
MongoDB is a document-oriented database.	PostgreSQL is an object-relational database management system.
PostgreSQL Interview Preparation Tips
Here, we provide you with some key interview preparation tips that will help you crack your PostgreSQL interviews easily.

Understand the job description

First and foremost, read it thoroughly. Customize your resume and plan your preparation accordingly. It helps you deliver relevant and accurate answers to questions.

Strengthen the basics of PostgreSQL

Interviewers are usually interested in how well you know the basics. So, develop a strong foundation in PostgreSQL basic concepts.

Prepare for common questions

Recruiters ask these in every interview, such as self-introduction, strengths and weaknesses, career goals, and so on. Prepare short, impressive answers to these questions.

Maintain a positive tone

Practice multiple mock interviews before attending your interviews. It will help you stay positive and deliver sharp, quick answers during the interview. No doubt, good communication will yield the best results.

Show your practical expertise

Employers expect candidates with strong hands-on experience. Work on more labs and projects to enhance your hard skills and show the samples in the interview.

Conclusion
We hope that these PostgreSQL Interview Questions and answers have helped improve your knowledge of PostgreSQL. Learning these questions will be highly helpful in preparing for PostgreSQL job interviews.

If you want to learn more about PostgreSQL, you can register for a PostgreSQL course by MindMajix. By the end of the course, you will gain strong expertise in PostgreSQL database management, which will help you in your career advancement.

Frequently Asked Questions
1. Can beginners learn PostgreSQL easily?
Yes, beginners can learn PostgreSQL with ease. If you have a basic understanding of database concepts and management, it will help you learn the DBMS more quickly.

2. Is PostgreSQL a database or a language?
PostgreSQL is a relational database. It is an open-source software and supports multiple platforms.

3. How long will it take to learn PostgreSQL?
You can learn PostgreSQL in four weeks. You will become a skilled PostgreSQL professional if you continue practicing on your labs and projects even after the training.

4. Can I get any additional learning resources for PostgreSQL?
Yes, MindMajix provides the following learning resources to enhance your PostgreSQL skills.

PostgreSQL Blog
PostgreSQL Quizzes
5. What is the difference between PostgreSQL and MySQL?
MySQL is easy to use and suitable for basic use cases, whereas PostgreSQL is feature-rich and ACID-compliant. Particularly, PostgreSQL supports advanced data types and complex queries.

10 PostgreSQL Interview Questions and Answers
Author's photo
Andrew Bone
postgresql
SQL Interview Questions
Table of Contents

Top 10 Postgres Job Interview Questions
1. What Is PostgreSQL?
2. What Data Types Are Available in PostgreSQL?
3. How Does GROUP BY Work in PostgreSQL?
4. What Are Aggregate Functions?
5. What’s the Difference Between the WHERE and HAVING Clauses in PostgreSQL?
6. What Is NULL?
7. What Is a Subquery?
8. How Do You Change Data in a PostgreSQL Database?
SQL UPDATE Syntax
SQL INSERT Syntax
SQL DELETE Syntax
9. What Is a SQL View?
10. Why Is PostgreSQL a Good Choice for Data Engineering?
Ace Your PostgreSQL Interview!
Job interviews are always stressful. Interviewing and getting asked technical questions about PostgreSQL is even more of a challenge! In this article, we’ll cover some of the PostgreSQL interview questions you can expect when applying for a new job.

By the end of the article, you should be able to handle most of the questions you are likely to face. We’ve previously covered common questions you can expect at a SQL job interview, but this article will be focused on Postgres specifically.

Let’s get started!

Top 10 Postgres Job Interview Questions
1. What Is PostgreSQL?
PostgreSQL is quickly becoming one of the most popular databases. It is an open-source, relational database that offers security and an impressive feature set. It has also fostered a strong community that strives to keep it on the cutting edge of design and functionality.

Check out this article to learn more about the history of PostgreSQL.

2. What Data Types Are Available in PostgreSQL?
PostgreSQL supports the common SQL data types; it also supports some unexpected ones, such as JSON. Check some of the most notable data types below:

Numeric Types: “Numeric types consist of two, four, and eight-byte integers; four and eight-byte floating-point numbers; and selectable-precision decimals.” [Source: PostgreSQL documentation]
Character Types: SQL defines two primary character types: “character varying(n) and character(n), where n is a positive integer. Both of these types can store strings up to n characters in length. The notations VARCHAR(n) and CHAR(n) are aliases for character varying(n) and character(n).” [Source: PostgreSQL documentation]
Binary Data Types: A binary string is a sequence of bytes.
Date/Time Types: These store dates, times, or dates and times (timestamps).
Boolean: Boolean values store only TRUE, FALSE, and NULL values.
Enumerated Types: “Enumerated (ENUM) types comprise a static, ordered set of values. They are equivalent to the ENUM types supported in a number of programming languages. An example of an ENUM type might be the days of the week, or a set of status values for a piece of data”. [Source: PostgreSQL documentation]
XML: The XML data type stores XML data.
JSON: The JSON data type stores JSON (JavaScript Object Notation) data. Apart from knowing these data types, you should know how to convert one data type to another. For instance, there are tools available for converting JSON to XML or vice versa.
These were just some of the most notable types that PostgreSQL supports. For more details, check out this overview of PostgreSQL data types.

Try out our SQL from A to Z in PostgreSQL track. 7 hands-on SQL courses with over 800 exercises!

3. How Does GROUP BY Work in PostgreSQL?
Knowing the GROUP BY clause can demonstrate a slightly more advanced knowledge of SQL. Thus, you may be asked how the GROUP BY clause works in PostgreSQL.

The GROUP BY clause allows you to group the data that results from your queries. Organizing data into groups is useful in making sense of data and in the use of aggregate functions.

Imagine you have an eCommerce website that sells several product types. In your database, you have a table that stores information about the inventory you have in stock. If you want to find the count of each product type, you can use GROUP BY with the COUNT() aggregate function. (Note: Aggregate functions are covered in more detail in the next section.) Here’s what the query would look like:

SELECT product_type, COUNT(product_id)
FROM stock
GROUP BY product_type
GROUP BY also has GROUP BY extensions, which are a more advanced topic. Check out this post about GROUP BY extensions just in case the topic comes up during an interview.

4. What Are Aggregate Functions?
In PostgreSQL, aggregate functions perform a calculation over multiple rows and return one value. As mentioned previously, aggregate functions are often used alongside the GROUP BY clause, but there are many possible uses for these functions.

There are five aggregate functions in SQL:

COUNT(): Returns the number of rows that fit the criteria stated in the WHERE clause.
SUM(): Calculates the total of all values in a column or an expression.
AVG(): Calculates the average column value.
MIN(): Returns the smallest value from a set.
MAX(): Returns the largest value from a set.
Being able to recall what each function does should be sufficient; however, if you would like to see practical examples of each aggregate function, check out this article.

5. What’s the Difference Between the WHERE and HAVING Clauses in PostgreSQL?
Another question that interviewers may use to gauge your knowledge of PostgreSQL is to ask you the difference between the WHERE and HAVING clauses.

The WHERE and HAVING clauses filter data and restrict unwanted data from appearing in your result set. The main difference between these filters is:

WHERE is applied at the record level.
HAVING is applied to sets of records.
To get more details on this topic, along with some examples, check out this post on the differences between the WHERE and HAVING clauses. You can also practice queries involving GROUP BY and HAVING clauses with this learning track.

6. What Is NULL?
Unless you’re a complete beginner to SQL, you’ll have heard of NULL. But what exactly is NULL?

PostgreSQL Interview Questions and Answers
In the simplest terms, NULL means there is no value for a given field. Note that this does not mean the value of the field is 0 or an empty string. Think of NULL as a placeholder for a future value.

The existence of NULL values can affect your SQL queries in different ways. For more details on this, check out this article that explains NULL values in greater detail.

7. What Is a Subquery?
A SQL subquery is a query placed inside of another query. Sometimes subqueries are also referred to as nested queries. Below is an example where the subquery comes after the WHERE clause; however, it is possible to have subqueries in the SELECT or FROM part of your queries.

SELECT name
FROM employees
WHERE id IN
  (SELECT id FROM sales_team)
If you want to learn more about subqueries, check out this beginner’s guide to subqueries or this slightly more advanced article that covers the different types of subqueries. You can also watch this clip on YouTube:


Remember to subscribe to the channel.

8. How Do You Change Data in a PostgreSQL Database?
Thankfully, PostgreSQL provides us with many methods of modifying the data that is in our database. You have probably heard of these commands before. They are the INSERT, UPDATE, and DELETE commands. Each of these operations has a different impact on the data inside your tables. Let’s take a look at the syntax of each of these statements.

SQL UPDATE Syntax
The syntax of the UPDATE statement is:

UPDATE table_name
SET column1 = value1,
        column2 = value2,
        …
[WHERE conditions]
Note that the WHERE condition is optional, although you’ll often use it. Check out this article on UPDATE in SQL to learn more.

All SQL in PostgreSQL knowledge you’ll ever need. Try our SQL from A to Z in PostgreSQL track!

SQL INSERT Syntax
You can write an INSERT statement with or without explicitly declaring the column names. The syntax for using INSERT without column names is:

INSERT INTO table_name
VALUES (value1, value2, value3, ...);
Note that you’ll need to provide a value for every column in the table if you omit the column names.

If you want to add data to some or all the columns in a table, use INSERT with column names:

INSERT INTO table_name (column1, column2, column3, ...)
VALUES (value1, value2, value3, ...);
You can learn more about SQL INSERTs here.

SQL DELETE Syntax
The syntax for using DELETE is:

DELETE FROM table_name
[WHERE condition]
Although the WHERE clause in this syntax is optional, I would always include it. Without a WHERE clause, the DELETE operation will delete everything from your table. If you want to practice using these commands, check out this course on how to INSERT, UPDATE, and DELETE data in SQL.

9. What Is a SQL View?
A view is a database object that acts as a temporary or virtual table. You can query it like a regular table. It can be used in the FROM clause of a SELECT, and you can reference view columns in SELECT, WHERE, GROUP BY, and other clauses.

Views and tables differ in some important ways:

Views do not store any records anywhere.
Tables store records physically, on a disk.
Views use existing records; they can also calculate new records as needed.
Views are useful for summarizing the data from single or multiple tables. They also provide an additional layer of data security. For example, you can create a view and only give the relevant users access to that view.

A simple example of a view might look like this:

CREATE VIEW european_customers AS
SELECT customer_id, customer_name
FROM customers
WHERE region = 'Europe';
To use this view, you’d write:

SELECT *
FROM european_customers;
For a more extensive look at SQL views, see this article on learning SQL views in under 30 minutes.

10. Why Is PostgreSQL a Good Choice for Data Engineering?
SQL is essential to succeed in any data-focused job, especially data engineering. The more you know about SQL, the easier it’ll be for you to manipulate and query data.

In your interview, you may be asked why PostgreSQL is a good choice for data engineering. You may want to include the reasons below in your answer:

Parallel Queries: PostgreSQL makes it possible to run parallel queries. This is when CPU power is leveraged to allow the running of multiple queries at once. This is especially important in data science, where often there is a general query
Full SQL syntax support: PostgreSQL supports a lot of SQL syntax and places an emphasis on SQL standard compliance. As a result, it supports window functions, table inheritance, and common table expressions.
Extended Data Support: PostgreSQL supports NoSQL data structures like JSON and XML.
Declarative Partitioning: This is when tables are split up into different segments called partitions. For example, you can create a different partition for each area code for large, geographically-distributed datasets.
These are some of the reasons PostgreSQL is an excellent choice for data science and data engineering. If you’re more interested in business analyst roles, check out this useful article on common SQL interview questions for business analysts.

<
Ace Your PostgreSQL Interview!
We’ve covered a lot of different topics! One area of SQL we didn’t touch on was JOIN. We decided it was such a big topic that we dedicated an entire article to it, so check it out!

If you can answer each of the questions we’ve poised today, you should be well on your way to acing those upcoming PostgreSQL interviews. If you’d like to get more practice with technical SQL challenges, check out this SQL practice set. It covers some of the topics we have discussed in this article.

If you have the SQL skills required but are struggling to find your first SQL job or get started as a SQL freelancer, check out these great resources:

This post covers the 10 best websites to find SQL jobs.
This article explains the steps required to becoming a successful SQL freelancer.
You should have everything you need to take the first steps towards your successful career that involves the use of SQL.

https://labex.io/ru/tutorials/postgresql-postgresql-interview-questions-and-answers-593697

66 PostgreSQL interview questions to ask to hire top developers

Siddhartha Gunti
Siddhartha Gunti
September 09, 2024


Hiring the right PostgreSQL developer can make or break your database management and application performance. Asking the right interview questions is key to identifying candidates with the necessary skills and expertise to excel in your team.

This blog post provides a comprehensive list of PostgreSQL interview questions categorized by difficulty level and specific areas of focus. From basic concepts to advanced query optimization techniques, we cover everything you need to assess candidates effectively.

By using these questions, you can gain valuable insights into a candidate's PostgreSQL knowledge and problem-solving abilities. Consider complementing your interview process with a PostgreSQL skills test to get a more complete picture of your applicants' capabilities.

Table of contents
15 basic PostgreSQL interview questions and answers to assess applicants
8 PostgreSQL interview questions and answers to evaluate junior developers
12 intermediate PostgreSQL interview questions and answers to ask mid-tier developers
7 PostgreSQL interview questions and answers related to database indexing
14 PostgreSQL questions related to query optimization
10 situational PostgreSQL interview questions for hiring top developers
Which PostgreSQL skills should you evaluate during the interview phase?
Tips for Conducting Effective PostgreSQL Interviews
Use PostgreSQL interview questions and skills tests to hire talented developers
Download PostgreSQL interview questions template in multiple formats
15 basic PostgreSQL interview questions and answers to assess applicants
15 basic PostgreSQL interview questions and answers to assess applicants
To effectively assess candidates for database developer roles, use these 15 basic PostgreSQL interview questions. These questions will help you gauge applicants' foundational knowledge and practical understanding of PostgreSQL, ensuring you identify candidates with the right skills for your team.

What is PostgreSQL and how does it differ from other relational databases?
Can you explain the concept of ACID properties in PostgreSQL?
How would you create a new database and table in PostgreSQL?
What is the difference between TRUNCATE and DELETE commands?
Explain the purpose of indexes in PostgreSQL and when you would use them.
How do you perform a simple SELECT query with conditions in PostgreSQL?
What are PostgreSQL schemas and why are they useful?
Can you describe the difference between INNER JOIN and LEFT JOIN?
How would you backup a PostgreSQL database?
What is the purpose of the VACUUM command in PostgreSQL?
Explain the concept of transactions in PostgreSQL.
How do you grant and revoke user permissions in PostgreSQL?
What are PostgreSQL extensions and can you name a few common ones?
How would you optimize a slow-running query in PostgreSQL?
Can you explain the difference between a view and a materialized view in PostgreSQL?
8 PostgreSQL interview questions and answers to evaluate junior developers
8 PostgreSQL interview questions and answers to evaluate junior developers
Ready to put your junior PostgreSQL developers through their paces? These 8 interview questions will help you evaluate their foundational knowledge and problem-solving skills. While they won't require candidates to write complex queries on the spot, these questions will give you insight into their understanding of PostgreSQL's core concepts and their ability to apply them in real-world scenarios.

1. Can you explain the difference between a primary key and a unique constraint in PostgreSQL?
A primary key is a column or set of columns that uniquely identifies each row in a table. It automatically creates a unique index and cannot contain NULL values. A unique constraint, on the other hand, ensures that all values in a column or set of columns are distinct, but it can allow NULL values (unless specified otherwise).

When evaluating responses, look for candidates who can clearly articulate that primary keys are used to identify records uniquely and are often used as references in other tables, while unique constraints are used to ensure data integrity within a single table. A strong candidate might also mention that a table can have only one primary key but multiple unique constraints.

2. How would you approach optimizing a slow query in PostgreSQL?
To optimize a slow query in PostgreSQL, I would follow these steps:

Use EXPLAIN ANALYZE to understand the query execution plan
Check for missing indexes and add them where appropriate
Rewrite the query to use more efficient JOIN conditions or subqueries
Consider partitioning large tables if dealing with massive datasets
Ensure statistics are up-to-date by running ANALYZE
Look for opportunities to use materialized views for complex, frequently-run queries
A strong candidate should demonstrate a systematic approach to query optimization and show familiarity with PostgreSQL's performance tuning tools. Look for responses that prioritize understanding the query plan before making changes, as this indicates a thoughtful, data-driven approach to optimization.

3. What is the purpose of the SERIAL data type in PostgreSQL?
The SERIAL data type in PostgreSQL is used to create auto-incrementing integer columns. When you define a column as SERIAL, PostgreSQL automatically creates a sequence object and sets the default value of the column to the next value from this sequence.

This is commonly used for primary key columns where you want each new row to automatically get a unique identifier. It's important to note that SERIAL is not a true data type, but rather a shorthand notation for creating an integer column with a default value from a sequence.

Look for candidates who understand that SERIAL is a convenience feature and can explain its typical use cases. A strong response might also mention that SERIAL is equivalent to INT NOT NULL DEFAULT nextval('tablename_colname_seq') and discuss the implications for inserting rows or resetting the sequence.

4. How does PostgreSQL handle concurrent transactions?
PostgreSQL handles concurrent transactions using a multi-version concurrency control (MVCC) model. This approach allows multiple transactions to read and write data simultaneously without locking each other out. When a transaction modifies data, it creates a new version of that data, while other transactions can still read the old version.

The MVCC model ensures that:

Readers don't block writers
Writers don't block readers
Each transaction sees a consistent snapshot of the database
A strong candidate should be able to explain that this approach eliminates the need for read locks and improves overall database performance. They might also mention isolation levels and how PostgreSQL uses them to balance consistency and performance. Look for responses that demonstrate an understanding of how MVCC impacts database design and query performance in real-world applications.

5. What is the difference between a view and a materialized view in PostgreSQL?
A view in PostgreSQL is a virtual table defined by a SELECT query. It doesn't store data itself but provides a way to encapsulate complex queries and present data in a simplified manner. Views are dynamically updated whenever the underlying data changes.

A materialized view, on the other hand, stores the result of a query physically. It's like a snapshot of the data at a specific point in time. Materialized views need to be refreshed manually or through a trigger to reflect changes in the underlying data.

When evaluating responses, look for candidates who can clearly articulate the trade-offs between views and materialized views. A strong answer might discuss scenarios where each type is more appropriate, such as using regular views for real-time data access and materialized views for improving query performance on complex, infrequently changing data sets. Candidates should also be aware that materialized views can significantly improve query performance but at the cost of data freshness and storage space.

6. Can you explain what a foreign key is and how it's used in PostgreSQL?
A foreign key in PostgreSQL is a column or group of columns in a table that references the primary key of another table. It establishes a link between two tables, ensuring referential integrity in the database. Foreign keys are used to enforce relationships between tables and prevent actions that would destroy these links.

When using foreign keys:

The referenced table is called the parent table
The table with the foreign key is called the child table
Foreign keys can be used to create one-to-many, many-to-many, or one-to-one relationships between tables
Look for candidates who understand that foreign keys are crucial for maintaining data consistency across related tables. A strong response might include examples of how foreign keys are used in real-world database designs, such as linking orders to customers in an e-commerce system. Candidates should also be aware of the impact of foreign keys on insert, update, and delete operations, and how they can be used with cascading actions to maintain data integrity automatically.

7. What is the purpose of the EXPLAIN command in PostgreSQL?
The EXPLAIN command in PostgreSQL is used to display the execution plan of a query without actually executing it. It shows how the query planner intends to process the query, including information about table scans, join methods, and index usage.

Key points about EXPLAIN:

It helps in understanding query performance
It can be used to identify inefficient queries
The ANALYZE option actually executes the query and provides real-time statistics
When evaluating responses, look for candidates who understand that EXPLAIN is a crucial tool for query optimization. A strong answer might include examples of how to interpret the output, such as recognizing when an index scan is preferable to a sequential scan. Candidates should also be aware that EXPLAIN ANALYZE provides more detailed information but actually runs the query, which can be important to consider for long-running or data-modifying queries.

8. How would you handle database migrations in a PostgreSQL environment?
Handling database migrations in PostgreSQL typically involves using a migration tool or framework to manage changes to the database schema over time. This process ensures that database changes are versioned, repeatable, and can be applied consistently across different environments.

A common approach to handling migrations includes:

Writing migration scripts for each change (e.g., creating tables, adding columns)
Versioning these scripts and storing them in version control
Using a migration tool to apply or rollback changes
Ensuring migrations are idempotent (can be run multiple times without side effects)
Testing migrations in a staging environment before applying to production
Look for candidates who understand the importance of managing database schema changes systematically. A strong response might mention specific migration tools like Flyway or Alembic, and discuss strategies for handling complex migrations, such as data transformations or dealing with large tables. Candidates should also be aware of the challenges in coordinating database migrations with application deployments and how to minimize downtime during updates.

12 intermediate PostgreSQL interview questions and answers to ask mid-tier developers
12 intermediate PostgreSQL interview questions and answers to ask mid-tier developers
To ensure your applicants can handle intermediate PostgreSQL tasks, use these questions to uncover their depth of knowledge and practical skills. These carefully curated questions will help you evaluate mid-tier developers effectively, much like a database developer job description outlines key responsibilities.

Can you explain how to use the `CTE` (Common Table Expressions) in PostgreSQL and provide an example?
What are window functions, and how are they used in PostgreSQL?
How do you handle JSON data in PostgreSQL, and what are the advantages of using JSONB?
What is the process of indexing expressions in PostgreSQL, and when would you use it?
Explain partitioning in PostgreSQL and provide scenarios where it would be useful.
How do you monitor and troubleshoot performance issues in a PostgreSQL database?
Can you describe the role of pg_stat_statements and how it can be used for performance tuning?
What are the different types of replication available in PostgreSQL, and when would you use each?
How do you implement full-text search in PostgreSQL, and what are its benefits?
What is the difference between synchronous and asynchronous replication in PostgreSQL?
How would you perform a bulk data insertion in PostgreSQL while ensuring minimal impact on performance?
Can you explain the concept of table inheritance and its use cases in PostgreSQL?
7 PostgreSQL interview questions and answers related to database indexing
7 PostgreSQL interview questions and answers related to database indexing
Ready to dive into the world of PostgreSQL indexing? These seven interview questions will help you assess a candidate's understanding of database indexing in PostgreSQL. Whether you're hiring a database developer or administrator, these questions will give you insight into their knowledge and problem-solving skills. Remember, the best candidates will not only provide correct answers but also demonstrate their ability to apply these concepts in real-world scenarios.

1. Can you explain the concept of B-tree indexes in PostgreSQL and when they are most effective?
B-tree indexes are the default index type in PostgreSQL. They are balanced tree structures that maintain sorted data for efficient searching, insertion, and deletion operations. B-tree indexes are most effective for columns with high cardinality (many unique values) and are particularly useful for equality and range queries.

A strong candidate should explain that B-tree indexes work well for:

Columns frequently used in WHERE clauses
Columns involved in ORDER BY or GROUP BY operations
Foreign key columns
Look for candidates who can discuss the trade-offs between improved query performance and the overhead of maintaining indexes during data modifications. They should also mention that B-tree indexes might not be ideal for low-cardinality data or when dealing with very large tables where the index size becomes a concern.

2. How would you decide whether to create a single-column or multi-column index in PostgreSQL?
The decision between single-column and multi-column indexes depends on the query patterns and data distribution in the database. Single-column indexes are simpler and work well for queries that filter or sort by a single column. Multi-column indexes can be more efficient for queries that frequently use multiple columns in their WHERE clauses or for sorting.

A knowledgeable candidate should mention:

Analyzing the most common and performance-critical queries
Considering the selectivity of the columns
Evaluating the trade-off between index size and query performance
Using EXPLAIN ANALYZE to compare query plans with different index configurations
Look for candidates who understand that multi-column indexes are particularly useful when the leading column has low selectivity, but the combination of columns is highly selective. They should also be aware that the order of columns in a multi-column index is crucial for its effectiveness.

3. What is the difference between a partial index and a normal index in PostgreSQL?
A partial index in PostgreSQL is an index that is created on a subset of rows in a table, defined by a WHERE clause. In contrast, a normal index includes all rows in the table. Partial indexes are useful for improving query performance and reducing index size when you frequently query a specific subset of data.

Key points a strong candidate should mention:

Partial indexes can significantly reduce index size and maintenance overhead
They are particularly useful for columns with skewed data distribution
Partial indexes can improve query performance for frequently accessed subsets of data
They can be combined with other index types (e.g., B-tree, GiST)
Look for candidates who can provide examples of when to use partial indexes, such as indexing only active users in a user table or only recent orders in an order table. They should also understand that the query planner needs to match the WHERE clause of the query with the partial index definition for it to be used effectively.

4. How does PostgreSQL handle index-only scans, and when are they beneficial?
Index-only scans in PostgreSQL allow the database to retrieve the required data directly from the index without accessing the table. This is possible when all the columns needed for the query are included in the index. Index-only scans can significantly improve query performance by reducing I/O operations.

A knowledgeable candidate should explain:

Index-only scans work with B-tree indexes
They are most beneficial for queries that only need columns included in the index
The visibility map helps determine which index entries are up-to-date
INCLUDE clause can be used to add non-key columns to an index for index-only scans
Look for candidates who understand the trade-offs involved, such as increased index size when including additional columns. They should also be aware that index-only scans might not always be chosen by the query planner if the visibility map is not up-to-date or if the table is small enough that a sequential scan is faster.

5. What are GIN indexes in PostgreSQL, and for what types of data are they most suitable?
GIN (Generalized Inverted Index) indexes in PostgreSQL are designed for handling cases where multiple values are associated with a single row. They are particularly useful for indexing array columns, full-text search, and jsonb data types. GIN indexes store each element of an array or each token in a text document as a separate entry, allowing for efficient searching of specific values within these complex data types.

A strong candidate should mention:

GIN indexes are excellent for "contains" queries on arrays
They support full-text search when combined with text search configurations
GIN indexes are beneficial for jsonb columns, especially for querying specific keys or values
They can be slower to build and update compared to B-tree indexes, but offer faster searches
Look for candidates who can discuss the trade-offs between GIN and other index types, such as GiST. They should understand that while GIN indexes can be larger and slower to update, they provide faster search capabilities for complex data types. Candidates should also be aware of the maintenance considerations, such as the need for periodic VACUUM to manage index bloat.

6. How would you approach index maintenance in PostgreSQL to ensure optimal performance?
Index maintenance in PostgreSQL is crucial for maintaining optimal database performance. A comprehensive approach includes regular monitoring, analysis, and proactive management of indexes. This involves identifying unused or redundant indexes, rebuilding bloated indexes, and ensuring that indexes remain effective as data and query patterns change over time.

Key strategies a knowledgeable candidate should mention:

Regularly running ANALYZE to update statistics used by the query planner
Using VACUUM (or autovacuum) to reclaim space and update the visibility map
Monitoring index usage with pg_stat_user_indexes to identify unused indexes
Periodically rebuilding indexes with high bloat using REINDEX
Reviewing and updating indexes based on changing query patterns
Look for candidates who understand the importance of balancing index maintenance with database performance. They should be able to discuss how to schedule maintenance tasks during low-traffic periods and the benefits of using database administrator tools for monitoring and automating index maintenance tasks. Strong candidates will also mention the need to consider the impact of index maintenance on replication and backup processes.

7. Can you explain the concept of covering indexes in PostgreSQL and how they can improve query performance?
Covering indexes in PostgreSQL, also known as indexes with INCLUDE columns, are indexes that contain all the data required to satisfy a query without needing to access the table. They are created by adding non-key columns to an index using the INCLUDE clause. This allows for index-only scans on queries that need data from both the indexed columns and the included columns.

A strong candidate should explain:

Covering indexes can significantly reduce I/O by eliminating table lookups
They are particularly useful for queries that frequently access a small subset of columns
The INCLUDE clause allows adding columns to the index without affecting the B-tree structure
Covering indexes can be larger than standard indexes due to the additional data
Look for candidates who can discuss the trade-offs between query performance improvement and increased index size and maintenance overhead. They should be able to provide examples of when covering indexes are most beneficial, such as in reporting queries or frequently accessed summary data. Strong candidates will also mention that careful analysis of query patterns is necessary to determine the optimal set of columns to include in a covering index.

14 PostgreSQL questions related to query optimization
14 PostgreSQL questions related to query optimization
To assess a candidate's proficiency in query optimization, consider using these 14 PostgreSQL interview questions. These questions are designed to evaluate an applicant's ability to enhance database performance and efficiency, crucial skills for any database professional.

How would you identify and resolve a query that's causing high CPU usage in PostgreSQL?
Can you explain the concept of query plan caching in PostgreSQL and its impact on performance?
What strategies would you employ to optimize a query involving multiple joins on large tables?
How does the PostgreSQL query planner work, and how can you influence its decisions?
Can you describe the use of parallel query execution in PostgreSQL and when it's most beneficial?
What are the pros and cons of using subqueries versus joins for query optimization?
How would you optimize a query that involves heavy use of aggregate functions?
Can you explain the concept of query rewriting in PostgreSQL and provide an example?
What role does statistics collection play in query optimization, and how would you ensure it's up to date?
How would you approach optimizing a query that uses a lot of temporary tables or CTEs?
Can you describe scenarios where denormalization might improve query performance in PostgreSQL?
What are the considerations for optimizing queries involving text search in PostgreSQL?
How would you optimize a query that involves complex date/time calculations?
Can you explain the concept of query hints in PostgreSQL and when you might use them?
10 situational PostgreSQL interview questions for hiring top developers
10 situational PostgreSQL interview questions for hiring top developers
To evaluate whether your candidates have the ability to handle real-world challenges in PostgreSQL, consider using these situational interview questions. They are designed to bring out practical skills and problem-solving capabilities, making it easier to identify top talent in your team for positions like database developer.

How would you handle a situation where a critical query is consistently timing out? What steps would you take to diagnose and resolve the issue?
Imagine you are tasked with migrating a large PostgreSQL database to a new server with minimal downtime. How would you approach this task?
If a user reports that they cannot access a database they should have permissions for, how would you troubleshoot and resolve the issue?
Suppose you discover that a recently added index is not improving query performance as expected. What actions would you take to investigate?
You need to implement a new feature that requires changes to multiple database tables. How would you manage these changes while ensuring data integrity?
A senior developer asks for a specific database configuration to optimize performance. How would you evaluate and implement their request?
Imagine that you identified a significant increase in disk space usage after a batch job. What steps would you take to investigate and mitigate the issue?
If you had to design a solution for archiving old data in PostgreSQL, what factors would you consider, and how would you implement it?
How would you approach a scenario where you need to troubleshoot slow performance in a PostgreSQL application that was previously working fine?
If you were asked to create a reporting structure that requires data from multiple sources, how would you design the database schema to accommodate this?
Which PostgreSQL skills should you evaluate during the interview phase?
While a single interview may not unveil every aspect of a candidate's capabilities, focusing on key PostgreSQL skills can significantly streamline the assessment process. Highlighting these skills ensures you target what's most relevant for roles involving this robust database management system.

Which PostgreSQL skills should you evaluate during the interview phase?
SQL Query Writing
The ability to write efficient SQL queries is the backbone of effective database management. This skill ensures that a developer can retrieve, manipulate, and analyze data swiftly, making it a direct indicator of their proficiency with PostgreSQL.

To effectively gauge a candidate's SQL skills, consider utilizing a SQL Online Test. This test comprises relevant MCQs designed to assess various aspects of SQL knowledge, ensuring a comprehensive evaluation.

For a deeper insight into their query writing skills, pose the following question during the interview:

What is the difference between INNER JOIN and OUTER JOIN in SQL?

Look for a clear understanding of how different joins affect query results and performance. A proficient candidate will not only define each but also provide scenarios where one might be preferred over the other.

Database Design
Database design is critical as it impacts the scalability and performance of applications. A well-designed database ensures data integrity and optimization, which are crucial for any PostgreSQL-based system.

To assess their capabilities in database design, ask them:

Can you explain how you would design a database schema for a multi-user application?

The candidate’s answer should reflect a thoughtful approach to aspects like normalization, data types, and indexing, indicating their depth of understanding in structuring a PostgreSQL database effectively.

Performance Tuning
Performance tuning is essential in managing databases as it directly influences the efficiency of data retrieval and resource utilization. Mastery in this area signifies a candidate’s ability to optimize PostgreSQL environments.

Evaluate their knowledge of performance tuning by asking:

How would you improve the performance of a slow-running query in PostgreSQL?

Desirable answers should include techniques such as indexing, query rewriting, or configuration changes. This response demonstrates their problem-solving skills and practical knowledge of PostgreSQL optimization.

Tips for Conducting Effective PostgreSQL Interviews
Before putting your PostgreSQL interview questions to use, consider these tips to maximize the effectiveness of your hiring process.

1. Implement Skills Tests Prior to Interviews
Using skills tests before interviews can help you filter candidates more effectively. This approach saves time and ensures you're interviewing the most qualified applicants.

For PostgreSQL roles, consider using a PostgreSQL test to evaluate technical proficiency. You might also want to include a SQL coding test to assess practical skills.

These tests can provide objective data on a candidate's abilities. Use the results to tailor your interview questions and focus on areas that need further exploration.

2. Prepare a Balanced Set of Interview Questions
With limited interview time, it's crucial to ask the right questions. Aim for a mix of technical PostgreSQL questions and those that assess other relevant skills.

Consider including questions about database design, query optimization, and data modeling. You might also want to explore the candidate's knowledge of related technologies like ETL processes or data warehousing.

Don't forget to assess soft skills such as problem-solving and communication. These are equally important for a PostgreSQL developer's success in your team.

3. Ask Insightful Follow-up Questions
Prepared questions are a good start, but follow-up questions can reveal a candidate's true depth of knowledge. They help you distinguish between memorized answers and genuine understanding.

For example, if you ask about indexing in PostgreSQL, a follow-up might be, "Can you describe a situation where adding an index might not improve query performance?" This probes the candidate's practical experience and problem-solving skills.

PostgreSQL: Полное руководство по собеседованию по навыкам
Библиотека интервью по навыкам RoleCatcher - рост для всех уровней

Руководство по интервью/ Карьера/ Знание/ Информационные и коммуникационные технологии (ИКТ)/ Проектирование и администрирование баз данных и сетей/ PostgreSQL
Введение
Последнее обновление: октябрь 2024 года
Добро пожаловать в наше подробное руководство по подготовке вопросов для собеседования по PostgreSQL. В этом руководстве мы стремимся предоставить всестороннее понимание набора навыков, необходимых разработчикам PostgreSQL, а также помочь кандидатам подтвердить свой опыт.

Углубляясь в нюансы технологии и ее приложений, мы стремимся чтобы дать вам знания и уверенность, необходимые для успеха на следующем собеседовании. В нашем руководстве представлен полный обзор PostgreSQL, от основ до продвинутых концепций, который поможет вам подготовиться к успешному собеседованию.

Но подождите, это еще не все! Просто зарегистрировав бесплатную учетную запись RoleCatcher здесь, вы открываете целый мир возможностей повысить свою готовность к собеседованию. Вот почему вы не должны пропустить:

🔐 Сохраните избранное: Добавьте в закладки и без труда сохраните любой из наших 120 000 вопросов для практического собеседования. Ваша персонализированная библиотека ждет вас и доступна в любое время и в любом месте.
🧠 Уточняйте свои ответы с помощью обратной связи с ИИ: создавайте свои ответы с точностью, используя обратную связь с ИИ. Улучшайте свои ответы, получайте полезные советы и легко совершенствуйте свои коммуникативные навыки.
🎥 Видеопрактика с обратной связью от искусственного интеллекта: Поднимите свою подготовку на новый уровень, отрабатывая свои ответы через видео. Получайте информацию на основе искусственного интеллекта, чтобы улучшить свою производительность.
🎯 Подберите свою целевую работу: Настройте свои ответы так, чтобы они идеально соответствовали конкретной вакансии, на которую вы проходите собеседование. Адаптируйте свои ответы и увеличьте свои шансы произвести неизгладимое впечатление.
Не упустите шанс улучшить свою игру на собеседовании с помощью расширенных функций RoleCatcher. Зарегистрируйтесь сейчас, чтобы превратить подготовку в преобразующий опыт! 🌟


Иллюстрация профессии в виде изображения PostgreSQL


Ссылки на вопросы:
.
1: Объясните концепцию нормализации в PostgreSQL.
2: Как оптимизировать запросы в PostgreSQL?
3: Как выполняется резервное копирование и восстановление в PostgreSQL?
4: Как обеспечить безопасность в PostgreSQL?
5: Какова роль индексов в PostgreSQL?
6: В чем разница между представлением и таблицей в PostgreSQL?
7: Как выполняется миграция данных в PostgreSQL?


Подготовка к собеседованию: руководства по собеседованию по компетенциям


Загляните в наш Справочник по собеседованиям по компетенциям, чтобы вывести подготовку к собеседованию на новый уровень.
Разделенная сцена: изображение человека на собеседовании: слева кандидат неподготовлен и потеет, справа он использовал руководство по собеседованию RoleCatcher и теперь уверен в себе и проявляет уверенность на собеседовании







Вопрос 1:

Объясните концепцию нормализации в PostgreSQL.
Анализ:
Интервьюер ищет понимание того, как PostgreSQL реализует нормализацию данных. Они хотят знать, понимает ли кандидат преимущества нормализации и как реализовать ее в базе данных.
Подход:
Кандидат должен определить нормализацию и объяснить различные формы нормализации. Он также должен привести примеры того, как нормализация может помочь в обслуживании и управлении базой данных.
Избегать:
Кандидат должен избегать давать расплывчатое или неполное определение нормализации. Он также должен избегать использования технического жаргона без объяснения его сути.
Пример ответа: адаптируйте этот ответ под себя
Bold
Italic
Strikethrough
Link
Heading
Quote
Code
Bullets
Numbers
Decrease Level
Increase Level
Undo
Redo

Нормализация — это процесс организации данных в базе данных для уменьшения избыточности и зависимости. PostgreSQL реализует нормализацию с помощью различных форм нормализации, таких как Первая Нормальная Форма

Напишите свои ответы здесь.

Повысьте свою готовность к собеседованию еще больше!
Зарегистрируйте бесплатную учетную запись RoleCatcher, чтобы сохранять свои правки и многое другое!






Вопрос 2:

Как оптимизировать запросы в PostgreSQL?
Анализ:
Интервьюер ищет понимание того, как улучшить производительность запросов в PostgreSQL. Они хотят знать, понимает ли кандидат различные методы оптимизации запросов и как применять их в базе данных.
Подход:
Кандидат должен объяснить методы оптимизации запросов, такие как использование индексов, сокращение количества соединений и оптимизация подзапросов. Он также должен предоставить примеры того, как применять эти методы в базе данных.
Избегать:
Кандидат должен избегать неопределенных или неполных ответов. Он также должен избегать предложения методов, которые неприменимы или неэффективны.
Пример ответа: адаптируйте этот ответ под себя
Bold
Italic
Strikethrough
Link
Heading
Quote
Code
Bullets
Numbers
Decrease Level
Increase Level
Undo
Redo

Для оптимизации запросов в PostgreSQL мы можем использовать индексы для ускорения извлечения данных. Мы можем создавать индексы для часто запрашиваемых столбцов для повышения производительности запросов. Мы также можем сократить количество объединений в запросе для повышения производительности. Другой метод — оптимизировать подзапросы с помощью оператора EXISTS вместо IN или NOT IN. Например, вместо использования подзапроса для проверки существования значения в другой таблице мы можем использовать оператор EXISTS, который быстрее и эффективнее.

Напишите свои ответы здесь.

Повысьте свою готовность к собеседованию еще больше!
Зарегистрируйте бесплатную учетную запись RoleCatcher, чтобы сохранять свои правки и многое другое!






Вопрос 3:

Как выполняется резервное копирование и восстановление в PostgreSQL?
Анализ:
Интервьюер ищет понимание того, как выполнять резервное копирование и восстановление в PostgreSQL. Они хотят знать, понимает ли кандидат важность резервного копирования и как выполнять его в базе данных.
Подход:
Кандидат должен объяснить различные методы резервного копирования и восстановления, доступные в PostgreSQL, такие как использование pg_dump и pg_restore. Он также должен объяснить важность резервного копирования и как планировать регулярное резервное копирование.
Избегать:
Кандидат должен избегать дачи неопределенных или неполных ответов. Он также должен избегать предложения методов, которые не являются надежными или безопасными.
Пример ответа: адаптируйте этот ответ под себя
Bold
Italic
Strikethrough
Link
Heading
Quote
Code
Bullets
Numbers
Decrease Level
Increase Level
Undo
Redo

Резервные копии необходимы для управления базами данных, и PostgreSQL предоставляет различные методы для выполнения резервного копирования и восстановления. Мы можем использовать утилиту pg_dump для создания файла резервной копии базы данных и использовать pg_restore для восстановления файла резервной копии. Мы также можем использовать утилиту pg_basebackup для выполнения физического резервного копирования кластера PostgreSQL. Важно запланировать регулярное резервное копирование, чтобы обеспечить безопасность данных и предотвратить потерю данных.

Напишите свои ответы здесь.

Повысьте свою готовность к собеседованию еще больше!
Зарегистрируйте бесплатную учетную запись RoleCatcher, чтобы сохранять свои правки и многое другое!






Вопрос 4:

Как обеспечить безопасность в PostgreSQL?
Анализ:
Интервьюер ищет понимание того, как реализовать безопасность в PostgreSQL. Они хотят знать, понимает ли кандидат различные меры безопасности, доступные в PostgreSQL, и как применять их в базе данных.
Подход:
Кандидат должен объяснить различные меры безопасности, доступные в PostgreSQL, такие как использование шифрования SSL, аутентификация пользователей и контроль доступа. Они также должны предоставить примеры того, как применять эти меры в базе данных.
Избегать:
Кандидат должен избегать дачи неопределенных или неполных ответов. Он также должен избегать предложения методов, которые не являются безопасными или надежными.
Пример ответа: адаптируйте этот ответ под себя
Bold
Italic
Strikethrough
Link
Heading
Quote
Code
Bullets
Numbers
Decrease Level
Increase Level
Undo
Redo

Безопасность имеет решающее значение для управления базами данных, и PostgreSQL предоставляет различные меры для реализации безопасности. Мы можем использовать шифрование SSL для защиты сетевых подключений и реализовать аутентификацию пользователей для управления доступом к базе данных. Мы также можем использовать контроль доступа для ограничения привилегий пользователей, например, предоставления определенным пользователям доступа только для чтения. Важно регулярно обновлять PostgreSQL, чтобы гарантировать применение последних исправлений безопасности.

Напишите свои ответы здесь.

Повысьте свою готовность к собеседованию еще больше!
Зарегистрируйте бесплатную учетную запись RoleCatcher, чтобы сохранять свои правки и многое другое!






Вопрос 5:

Какова роль индексов в PostgreSQL?
Анализ:
Интервьюер ищет понимание роли индексов в PostgreSQL. Они хотят знать, понимает ли кандидат, как работают индексы и как они могут улучшить производительность базы данных.
Подход:
Кандидат должен определить индексы и объяснить, как они работают в PostgreSQL. Он также должен привести примеры того, как индексы могут улучшить производительность запросов.
Избегать:
Кандидат должен избегать давать расплывчатое или неполное определение индексов. Он также должен избегать предположений, что индексы являются решением всех проблем производительности.
Пример ответа: адаптируйте этот ответ под себя
Bold
Italic
Strikethrough
Link
Heading
Quote
Code
Bullets
Numbers
Decrease Level
Increase Level
Undo
Redo

Индексы — это структуры данных, используемые PostgreSQL для повышения производительности запросов. Они работают, создавая отсортированную копию столбца или набора столбцов, ускоряя поиск определенных значений. Например, если у нас есть таблица с большим количеством строк, запрос к ней без индекса может быть медленным. Однако, если мы создадим индекс для столбца, который хотим запросить, PostgreSQL сможет использовать индекс для быстрого поиска нужных нам строк.

Напишите свои ответы здесь.

Повысьте свою готовность к собеседованию еще больше!
Зарегистрируйте бесплатную учетную запись RoleCatcher, чтобы сохранять свои правки и многое другое!






Вопрос 6:

В чем разница между представлением и таблицей в PostgreSQL?
Анализ:
Интервьюер ищет понимание разницы между представлениями и таблицами в PostgreSQL. Они хотят знать, понимает ли кандидат, как работают представления и чем они отличаются от таблиц.
Подход:
Кандидат должен определить представления и таблицы и объяснить, как они работают в PostgreSQL. Он также должен предоставить примеры того, как создавать и использовать представления и таблицы.
Избегать:
Кандидат должен избегать давать расплывчатые или неполные определения представлений и таблиц. Он также должен избегать предположений, что одно лучше другого, без объяснения контекста.
Пример ответа: адаптируйте этот ответ под себя
Bold
Italic
Strikethrough
Link
Heading
Quote
Code
Bullets
Numbers
Decrease Level
Increase Level
Undo
Redo

Таблица — это набор данных, хранящихся в базе данных, в то время как представление — это виртуальная таблица, созданная из запроса. Представления не хранят сами данные, а вместо этого предоставляют способ доступа к данным из одной или нескольких таблиц. Например, мы можем создать представление, которое показывает общие продажи продукта, суммируя продажи из таблицы продаж. Затем мы можем запросить представление, как если бы это была таблица, но представление будет показывать самые последние данные о продажах.

Напишите свои ответы здесь.

Повысьте свою готовность к собеседованию еще больше!
Зарегистрируйте бесплатную учетную запись RoleCatcher, чтобы сохранять свои правки и многое другое!






Вопрос 7:

Как выполняется миграция данных в PostgreSQL?
Анализ:
Интервьюер ищет понимание того, как выполнять миграцию данных в PostgreSQL. Они хотят знать, есть ли у кандидата опыт миграции данных между различными системами баз данных и понимают ли они связанные с этим проблемы.
Подход:
Кандидат должен объяснить различные методы миграции данных, такие как использование скриптов SQL, инструментов ETL или репликации. Они также должны предоставить примеры того, как переносить данные из одной системы в другую и как обрабатывать несоответствия данных.
Избегать:
Кандидат должен избегать дачи неопределенных или неполных ответов. Он также должен избегать предложения методов, которые не являются надежными или безопасными.
Пример ответа: адаптируйте этот ответ под себя
Bold
Italic
Strikethrough
Link
Heading
Quote
Code
Bullets
Numbers
Decrease Level
Increase Level
Undo
Redo

Миграция данных может быть сложной, особенно при миграции между различными системами баз данных. Мы можем использовать скрипты SQL для извлечения данных из исходной базы данных и загрузки их в целевую базу данных. Мы также можем использовать инструменты ETL, такие как Talend или Pentaho, для автоматизации процесса миграции. Репликация — это еще один метод миграции данных, при котором данные непрерывно синхронизируются между исходной и целевой базами данных. Важно обрабатывать несоответствия данных, такие как отсутствующие или недействительные данные, во время процесса миграции, чтобы обеспечить целостность данных.

Напишите свои ответы здесь.

Повысьте свою готовность к собеседованию еще больше!
Зарегистрируйте бесплатную учетную запись RoleCatcher, чтобы сохранять свои правки и многое другое!




Подготовка к собеседованию: подробные руководства по навыкам
Взгляните на наш PostgreSQL Руководство по навыкам, которое поможет вывести подготовку к собеседованию на новый уровень.
Изображение, иллюстрирующее библиотеку знаний для представления руководства по навыкам PostgreSQL


PostgreSQL Руководства по собеседованию по смежным профессиям

Вопросы и ответы на собеседовании по PostgreSQL

PostgreSQL
Beginner
Вопросы и ответы на собеседовании по PostgreSQL
Вопросы и ответы на собеседовании по PostgreSQL

Практиковаться сейчас
Содержание

Введение
Основы и ключевые концепции PostgreSQL
SQL-запросы и манипулирование данными
Архитектура и администрирование PostgreSQL
Оптимизация производительности
Репликация, резервное копирование и восстановление
Устранение неполадок и отладка PostgreSQL
Безопасность и контроль доступа
Расширенные возможности и расширения
Сценарные и практические применения
Вопросы по ролям (Разработчик, DBA, DevOps)
Резюме
Default VM Cover
Практиковаться сейчас
Введение
Добро пожаловать в это исчерпывающее руководство, призванное вооружить вас знаниями и уверенностью, необходимыми для успешного прохождения собеседований по PostgreSQL. Независимо от того, являетесь ли вы опытным администратором баз данных, начинающим разработчиком или инженером DevOps, этот документ охватывает широкий спектр тем: от фундаментальных концепций и SQL-запросов до продвинутой архитектуры, оптимизации производительности и безопасности. Мы тщательно собрали коллекцию часто задаваемых вопросов и подробных ответов, а также сценариев с задачами и вопросов, специфичных для различных ролей, чтобы помочь вам основательно подготовиться и продемонстрировать свой опыт в постоянно развивающемся мире PostgreSQL. Погрузитесь и продвиньте свою карьеру!

POSTGRESQL

Основы и ключевые концепции PostgreSQL
Что такое PostgreSQL и каковы его основные возможности?
Ответ:

PostgreSQL — это мощная объектно-реляционная система управления базами данных с открытым исходным кодом, известная своей надежностью, широким набором функций и производительностью. Ключевые возможности включают соответствие свойствам ACID, поддержку различных типов данных (включая JSONB), расширяемость и передовые методы индексирования.

Объясните концепцию свойств ACID в контексте PostgreSQL.
Ответ:

ACID расшифровывается как Atomicity (Атомарность), Consistency (Согласованность), Isolation (Изоляция) и Durability (Долговечность). PostgreSQL обеспечивает эти свойства для транзакций: Атомарность означает «всё или ничего»; Согласованность гарантирует соблюдение правил целостности данных; Изоляция означает, что параллельные транзакции не мешают друг другу; Долговечность означает, что зафиксированные данные сохраняются даже после сбоев системы.

В чем разница между типами данных VARCHAR и TEXT в PostgreSQL?
Ответ:

VARCHAR(n) хранит строки длиной до n символов, применяя ограничение длины. TEXT хранит строки произвольной длины без предопределенного ограничения. Функционально разница в производительности невелика, но VARCHAR(n) добавляет накладные расходы на проверку длины.

Опишите назначение ограничений PRIMARY KEY и FOREIGN KEY.
Ответ:

PRIMARY KEY (первичный ключ) уникально идентифицирует каждую запись в таблице и обеспечивает целостность данных, гарантируя отсутствие дубликатов или пустых значений. FOREIGN KEY (внешний ключ) устанавливает связь между двумя таблицами, обеспечивая ссылочную целостность путем гарантии того, что значения в столбце внешнего ключа соответствуют значениям первичного ключа другой таблицы.

Что такое индекс в PostgreSQL и зачем он используется?
Ответ:

Индекс — это объект базы данных, который повышает скорость операций извлечения данных из таблицы базы данных. Он работает путем создания отсортированного списка значений из одного или нескольких столбцов, позволяя базе данных быстро находить строки без сканирования всей таблицы. Это критически важно для производительности запросов на больших наборах данных.

Объясните концепцию транзакций в PostgreSQL.
Ответ:

Транзакция — это единая логическая единица работы, состоящая из одного или нескольких SQL-операторов. PostgreSQL гарантирует, что либо все операторы в рамках транзакции успешно завершены (зафиксированы), либо ни один из них не выполнен (откачен), поддерживая целостность и согласованность данных.

Какова роль файла pg_hba.conf в PostgreSQL?
Ответ:

pg_hba.conf (host-based authentication — аутентификация на основе хоста) — это файл конфигурации аутентификации клиентов PostgreSQL. Он контролирует, какие хосты могут подключаться, какие пользователи PostgreSQL могут подключаться с этих хостов, к каким базам данных они могут подключаться, и какой метод аутентификации используется (например, trust, md5, scram-sha-256).

Как проверить версию PostgreSQL, которую вы используете?
Ответ:

Вы можете проверить версию PostgreSQL, подключившись к базе данных и выполнив SQL-запрос SELECT version();. Эта команда возвращает строку, содержащую полный номер версии и информацию о сборке.

Кратко объясните WAL (Write-Ahead Logging — журналирование с упреждающей записью) в PostgreSQL.
Ответ:

WAL — это стандартный метод обеспечения целостности и долговечности данных. Прежде чем какие-либо изменения будут записаны в основные файлы базы данных, они сначала записываются в файл журнала (WAL). Это гарантирует, что в случае сбоя база данных может быть восстановлена до согласованного состояния путем воспроизведения журнала.

SQL-запросы и манипулирование данными
Объясните разницу между операторами DELETE, TRUNCATE и DROP в SQL.
Ответ:

DELETE удаляет строки по одной, может быть отменен (rollback) и вызывает триггеры. TRUNCATE быстро удаляет все строки, не может быть отменен и не вызывает триггеры. DROP удаляет всю структуру таблицы и её данные безвозвратно.

Каково назначение предложения GROUP BY и как оно работает с агрегатными функциями?
Ответ:

GROUP BY группирует строки, имеющие одинаковые значения в указанных столбцах, в сводные строки. Он используется с агрегатными функциями (например, COUNT, SUM, AVG, MAX, MIN) для выполнения расчетов над каждой группой, а не над всем результирующим набором.

Опишите различные типы операций JOIN в SQL.
Ответ:

Распространенные типы JOIN включают INNER JOIN (возвращает совпадающие строки из обеих таблиц), LEFT JOIN (возвращает все строки из левой таблицы и совпадающие строки из правой), RIGHT JOIN (возвращает все строки из правой таблицы и совпадающие строки из левой) и FULL OUTER JOIN (возвращает все строки, когда есть совпадение в любой из таблиц).

Что такое подзапрос и когда его следует использовать?
Ответ:

Подзапрос (или внутренний запрос) — это запрос, вложенный внутрь другого SQL-запроса. Он может использоваться для возврата данных, которые будут использоваться основным запросом в качестве условия, или для предоставления набора значений для сравнения. Они полезны для сложной фильтрации или когда значение зависит от результата другого запроса.

Объясните разницу между предложениями WHERE и HAVING.
Ответ:

WHERE используется для фильтрации отдельных строк до группировки. HAVING используется для фильтрации групп строк после применения предложения GROUP BY и вычисления агрегатных функций. HAVING может использовать агрегатные функции, WHERE — нет.

Что такое оконные функции в SQL и приведите пример?
Ответ:

Оконные функции выполняют расчеты по набору строк таблицы, связанных с текущей строкой, без их свертывания. Они позволяют выполнять такие расчеты, как ранжирование, скользящие средние или кумулятивные суммы. Пример: ROW_NUMBER() OVER (PARTITION BY category ORDER BY sales DESC).

Как обрабатывать дублирующиеся записи в таблице с помощью SQL?
Ответ:

Чтобы найти дубликаты, используйте GROUP BY с COUNT(*) > 1. Чтобы удалить их, вы можете использовать DELETE с подзапросом или CTE для идентификации и удаления всех экземпляров, кроме одного, или использовать DISTINCT в операторах SELECT для получения уникальных строк.

Что такое Общее Табличное Выражение (CTE) и почему оно полезно?
Ответ:

CTE (определяется с помощью предложения WITH) — это временный именованный набор результатов, на который можно ссылаться в одном операторе SELECT, INSERT, UPDATE или DELETE. Он улучшает читаемость, упрощает сложные запросы и может быть рекурсивным.

Объясните концепцию значений NULL в SQL и как они обрабатываются при сравнениях.
Ответ:

NULL представляет отсутствующие или неизвестные данные. Он не равен нулю или пустой строке. При сравнениях NULL ведет себя особым образом: NULL = NULL дает UNKNOWN, а не TRUE. Для проверки значений NULL необходимо использовать IS NULL или IS NOT NULL.

Как можно вставить несколько строк в таблицу с помощью одного оператора INSERT?
Ответ:

Вы можете вставить несколько строк, предоставив несколько наборов значений, разделенных запятыми, после ключевого слова VALUES. Пример: INSERT INTO products (name, price) VALUES ('Laptop', 1200), ('Mouse', 25), ('Keyboard', 75);

Архитектура и администрирование PostgreSQL
Объясните основные компоненты архитектуры PostgreSQL.
Ответ:

Архитектура PostgreSQL состоит из серверного процесса (Postmaster), фоновых процессов (например, Wal Writer, Checkpointer, Autovacuum), общей памяти и файлов данных. Клиентские приложения подключаются к Postmaster, который создает новый фоновый процесс для каждого соединения для обработки запросов.

Какова роль WAL (Write-Ahead Logging — журналирование с упреждающей записью) в PostgreSQL?
Ответ:

WAL обеспечивает целостность и долговечность данных. Все изменения в файлах данных сначала записываются в журнал WAL. Это позволяет выполнять восстановление после сбоев (воспроизведение журналов для восстановления состояния) и восстановление на определенный момент времени (PITR) путем архивирования сегментов WAL.

Опишите назначение pg_basebackup.
Ответ:

pg_basebackup используется для создания согласованной базовой резервной копии работающего кластера PostgreSQL. Он копирует все файлы данных и необходимые сегменты WAL, формируя основу для восстановления на определенный момент времени или для настройки реплики.

Как выполнить восстановление на определенный момент времени (PITR) в PostgreSQL?
Ответ:

PITR включает восстановление базовой резервной копии, а затем воспроизведение заархивированных сегментов WAL до определенной временной метки или идентификатора транзакции. Для этого требуется файл recovery.conf (или postgresql.conf в более новых версиях), указывающий целевой объект восстановления и местоположение архива WAL.

Что такое Autovacuum и почему он важен?
Ответ:

Autovacuum — это набор фоновых процессов, которые автоматически освобождают пространство, занимаемое "мертвыми" кортежами (dead tuples), и обновляют статистику. Он предотвращает переполнение идентификаторов транзакций (transaction ID wraparound), повышает производительность запросов, поддерживая эффективность индексов, и уменьшает раздувание таблиц (table bloat).

Объясните разницу между VACUUM и VACUUM FULL.
Ответ:

VACUUM освобождает пространство от "мертвых" кортежей для повторного использования, но не возвращает его операционной системе, и может выполняться параллельно с другими операциями. VACUUM FULL полностью переписывает таблицу, возвращая пространство операционной системе, но требует эксклюзивной блокировки и выполняется значительно медленнее.

Как бы вы устранили проблему высокой утилизации ЦП в PostgreSQL?
Ответ:

Я бы начал с проверки pg_stat_activity на предмет активных запросов, pg_stat_statements на предмет дорогостоящих запросов и pg_top или top для оценки утилизации ЦП на уровне системы. Следующими шагами были бы анализ планов запросов (EXPLAIN ANALYZE) и проверка на наличие отсутствующих индексов.

Что такое tablespaces в PostgreSQL и когда их следует использовать?
Ответ:

Tablespaces позволяют хранить объекты базы данных (таблицы, индексы) в разных местах файловой системы. Они полезны для управления хранилищем на нескольких дисках, повышения производительности ввода-вывода путем разделения часто используемых данных или для специфических требований к хранению.

Как осуществлять мониторинг производительности PostgreSQL?
Ответ:

Ключевые инструменты мониторинга включают pg_stat_activity, pg_stat_statements, pg_locks и pg_buffercache. Также часто используются внешние инструменты, такие как Prometheus/Grafana или специализированные решения для мониторинга, для отслеживания таких метрик, как количество соединений, дисковый ввод-вывод и время выполнения запросов.

Опишите назначение pg_dump и pg_restore.
Ответ:

pg_dump создает логическую резервную копию базы данных PostgreSQL, которая может быть в простом текстовом или пользовательском формате. pg_restore используется для восстановления резервных копий, созданных pg_dump в пользовательском или каталоговом формате, предлагая гибкость для восстановления отдельных объектов.

Оптимизация производительности
Как выявлять медленные запросы в PostgreSQL?
Ответ:

Медленные запросы можно выявить с помощью EXPLAIN ANALYZE, чтобы увидеть план выполнения и время выполнения. Расширение pg_stat_statements также бесценно для отслеживания статистики запросов, включая общее время выполнения и количество вызовов, что позволяет определить наиболее ресурсоемкие запросы.

Что такое EXPLAIN ANALYZE и как он используется для оптимизации производительности?
Ответ:

EXPLAIN ANALYZE показывает план выполнения запроса и фактически выполняет его, предоставляя реальное время выполнения каждого шага. Это помогает выявить узкие места, такие как последовательное сканирование (sequential scans), дорогостоящие соединения (joins) или неэффективное использование индексов, направляя на добавление индексов или переписывание запросов.

Когда следует использовать индекс и какие типы индексов доступны в PostgreSQL?
Ответ:

Индексы используются для ускорения операций выборки данных, особенно для предложений WHERE, условий JOIN, ORDER BY и GROUP BY. PostgreSQL предлагает индексы B-tree (наиболее распространенные), Hash, GiST, SP-GiST, GIN и BRIN, каждый из которых оптимизирован для различных типов данных и шаблонов запросов.

Объясните концепцию VACUUM в PostgreSQL и ее важность для производительности.
Ответ:

VACUUM освобождает пространство, занимаемое "мертвыми" кортежами (строки, помеченные для удаления, но еще не удаленные), и обновляет статистику для планировщика запросов. Регулярное выполнение VACUUM предотвращает раздувание таблиц (table bloat), повышает производительность запросов за счет уменьшения объема сканируемых данных и имеет решающее значение для предотвращения переполнения идентификаторов транзакций (transaction ID wraparound).

Что такое раздувание таблиц (table bloat) и как его можно уменьшить?
Ответ:

Раздувание таблиц происходит, когда накапливаются "мертвые" кортежи, что приводит к тому, что таблицы и индексы занимают больше дискового пространства, чем необходимо, и замедляют запросы. Его можно уменьшить с помощью регулярного VACUUM и VACUUM FULL (хотя VACUUM FULL блокирует таблицу), а также путем настройки соответствующих параметров autovacuum.

Как оптимизировать операции JOIN в PostgreSQL?
Ответ:

Оптимизируйте операции JOIN, убедившись в наличии соответствующих индексов на столбцах соединения. Учитывайте порядок таблиц в соединении (хотя оптимизатор часто справляется с этим) и используйте EXPLAIN ANALYZE, чтобы увидеть, выбирает ли оптимизатор эффективные методы соединения, такие как Nested Loop, Hash Join или Merge Join.

Какие ключевые параметры конфигурации PostgreSQL вы бы настроили для повышения производительности?
Ответ:

Ключевые параметры включают shared_buffers (для кэширования блоков данных), work_mem (для сортировки/хеширования в памяти), maintenance_work_mem (для операций VACUUM/INDEX), wal_buffers (для записей WAL) и effective_cache_size (для информирования оптимизатора о размере кэша ОС).

Как работает планировщик запросов PostgreSQL и как на него можно повлиять?
Ответ:

Планировщик (оптимизатор) анализирует SQL-запросы и генерирует наиболее эффективный план выполнения. Он использует статистику таблиц (обновляемую ANALYZE и VACUUM) для оценки затрат. Вы можете повлиять на него, создавая соответствующие индексы, переписывая сложные запросы и иногда используя SET enable_seqscan = off; для тестирования.

Опишите роль pg_stat_statements в мониторинге производительности.
Ответ:

pg_stat_statements — это расширение, которое отслеживает статистику выполнения всех запросов, выполненных сервером. Оно предоставляет информацию о частоте запросов, общем времени выполнения, среднем времени, возвращенных строках и многом другом, что делает его незаменимым для выявления N самых медленных запросов и анализа общей рабочей нагрузки.

Когда следует рассматривать секционирование (partitioning) большой таблицы?
Ответ:

Секционирование большой таблицы рассматривается, когда она становится слишком большой для эффективного управления, что приводит к медленным запросам, обслуживанию и резервному копированию. Оно повышает производительность, позволяя запросам сканировать только релевантные разделы, упрощает обслуживание (например, удаление старых данных) и может улучшить производительность индексов.

Репликация, резервное копирование и восстановление
Каково назначение WAL (Write-Ahead Log — журналирование с упреждающей записью) в PostgreSQL и как оно связано с репликацией и восстановлением?
Ответ:

WAL обеспечивает целостность и долговечность данных, записывая все изменения перед их применением к файлам данных. Для репликации записи WAL передаются на резервные серверы (standby servers). Для восстановления WAL воспроизводятся для возвращения базы данных в согласованное состояние после сбоя или до определенного момента времени.

Объясните разницу между физической и логической репликацией в PostgreSQL.
Ответ:

Физическая репликация (streaming replication) копирует весь каталог данных и записи WAL, делая его идентичным байт в байт. Логическая репликация реплицирует изменения данных на логическом уровне (строка за строкой), позволяя выборочную репликацию, работу с разными основными версиями и гетерогенными средами.

Что такое базовая резервная копия (base backup) и почему она важна для восстановления?
Ответ:

Базовая резервная копия — это согласованный снимок файлов базы данных на определенный момент времени. Она важна, поскольку обеспечивает отправную точку для восстановления. Записи WAL, сгенерированные после базовой резервной копии, затем применяются для обновления базы данных до актуального состояния или до желаемого момента времени.

Опишите шаги, необходимые для выполнения восстановления на определенный момент времени (PITR) в PostgreSQL.
Ответ:

PITR включает восстановление базовой резервной копии, а затем применение сегментов WAL из места хранения архива до желаемого времени восстановления или идентификатора транзакции. Это позволяет восстановить базу данных до любого конкретного момента, для которого доступны записи WAL.

Что такое pg_basebackup и каковы его ключевые преимущества?
Ответ:

pg_basebackup — это утилита для создания согласованных базовых резервных копий работающего кластера PostgreSQL. Его преимущества включают отсутствие необходимости в снимке файловой системы, возможность потоковой передачи резервной копии напрямую и автоматическое включение необходимых файлов WAL для восстановления.

Как настроить потоковую репликацию (streaming replication) в PostgreSQL?
Ответ:

Настройте wal_level = replica, archive_mode = on и archive_command на первичном сервере (primary). На резервном сервере (standby) настройте primary_conninfo в postgresql.conf и создайте файл standby.signal. Затем на резервный сервер восстанавливается базовая резервная копия с первичного сервера.

Что такое pg_rewind и когда его следует использовать?
Ответ:

pg_rewind — это утилита, которая синхронизирует каталог данных PostgreSQL с другой копией той же базы данных после того, как они разошлись. Обычно она используется для возвращения бывшего первичного сервера в режим резервного после переключения при сбое (failover), избегая полной базовой резервной копии.

Объясните роль recovery.conf (или standby.signal и postgresql.conf в более новых версиях) в восстановлении и репликации.
Ответ:

В старых версиях recovery.conf указывал параметры восстановления, такие как restore_command и primary_conninfo. В PostgreSQL 12+ эти параметры перемещены в postgresql.conf, а наличие файлов standby.signal или recovery.signal указывает на режим резервного сервера или восстановления соответственно.

Что такое слот репликации (replication slot) и почему он важен для логической репликации?
Ответ:

Слот репликации гарантирует, что первичный сервер сохраняет сегменты WAL, необходимые резервному серверу или подписчику логической репликации, даже если подписчик отстает. Это предотвращает удаление первичным сервером файлов WAL, которые все еще требуются, избегая потери данных или необходимости полного повторного синхронизации.

Как можно отслеживать отставание репликации (replication lag) в PostgreSQL?
Ответ:

Отставание репликации можно отслеживать с помощью представления pg_stat_replication на первичном сервере, в частности, просматривая write_lag, flush_lag и replay_lag. На резервном сервере pg_last_wal_receive_lsn() и pg_last_wal_replay_lsn() можно сравнить с текущим LSN первичного сервера.

Устранение неполадок и отладка PostgreSQL
Как вы обычно начинаете устранять проблемы с производительностью в PostgreSQL?
Ответ:

Обычно я начинаю с проверки журналов PostgreSQL на наличие ошибок или предупреждений. Затем я использую pg_stat_activity для просмотра активных запросов и выявления длительных или заблокированных транзакций. Наконец, я анализирую pg_stat_statements для часто выполняемых или медленных запросов.

Каковы распространенные причины медленных запросов в PostgreSQL?
Ответ:

К распространенным причинам относятся отсутствующие или неэффективные индексы, плохие планы запросов (например, полное сканирование таблиц), высокое время ожидания ввода-вывода (I/O wait times), недостаточное выделение памяти (work_mem, shared_buffers) и чрезмерное блокирование или конкуренция. Устаревшая статистика также может приводить к плохим планам запросов.

Как вы выявите взаимоблокировку (deadlock) транзакций в PostgreSQL?
Ответ:

PostgreSQL автоматически обнаруживает и разрешает взаимоблокировки, прерывая одну из транзакций. Информацию о взаимоблокировках можно найти в журналах сервера PostgreSQL. Для проактивного выявления потенциальных блокировок я бы запрашивал pg_locks и pg_stat_activity, чтобы увидеть, какие запросы удерживают блокировки, а какие ожидают.

Объясните назначение EXPLAIN ANALYZE и когда его следует использовать.
Ответ:

EXPLAIN ANALYZE выполняет запрос, а затем отображает его план выполнения, включая фактическое количество строк, время выполнения и затраты на ввод-вывод. Я использую его, чтобы понять, как PostgreSQL обрабатывает запрос, выявить узкие места и проверить, эффективно ли используются индексы, особенно для медленных запросов.

Что такое autovacuum и почему он важен для здоровья PostgreSQL?
Ответ:

Autovacuum — это фоновый процесс, который автоматически освобождает пространство, занимаемое "мертвыми" кортежами, и обновляет статистику. Он имеет решающее значение для предотвращения раздувания таблиц (table bloat), повышения производительности запросов за счет поддержания эффективности индексов и обеспечения того, чтобы не произошло переполнение идентификаторов транзакций (transaction ID wraparound), которое может привести к потере данных.

Как проверить проблемы с дисковым пространством в PostgreSQL?
Ответ:

Сначала я бы проверил использование диска операционной системой (df -h в Linux). В PostgreSQL я могу запросить pg_database_size() для общего размера базы данных и pg_relation_size() или pg_table_size() для отдельных таблиц/индексов, чтобы точно определить большие объекты, занимающие пространство.

Клиент сообщает, что его приложение часто получает ошибки "connection refused" при попытке подключения к PostgreSQL. Каковы ваши первые шаги для диагностики этого?
Ответ:

Сначала я бы проверил, запущен ли сервис PostgreSQL. Затем я бы проверил postgresql.conf на наличие listen_addresses и pg_hba.conf на правила аутентификации клиентов. Также была бы проверена сетевая связность (брандмауэр, порт 5432) между клиентом и сервером.

Каковы некоторые распространенные причины высокой загрузки ЦП на сервере PostgreSQL?
Ответ:

Высокая загрузка ЦП часто возникает из-за сложных запросов, выполняющих обширные вычисления или сортировку, неэффективных планов запросов, приводящих к большому сканированию данных, высокой конкуренции с множеством активных соединений или недостаточной памяти, вынуждающей больше операций ввода-вывода и обработки ЦП. Чрезмерное ведение журналов также может способствовать этому.

Как бы вы отладили запрос, который постоянно возвращает некорректные результаты?
Ответ:

Я бы начал с ручного выполнения частей запроса или подзапросов, чтобы изолировать источник некорректных данных. Проверка типов данных, соединений (joins) и условий предложения WHERE на наличие логических ошибок имеет решающее значение. Иногда просмотр необработанных данных в задействованных таблицах помогает выявить несоответствия.

Опишите сценарий, в котором вам пришлось бы вручную запускать VACUUM FULL.
Ответ:

Я бы рассмотрел VACUUM FULL для таблиц, которые испытали значительное раздувание (bloat), и где обычный VACUUM (или autovacuum) не освобождает пространство эффективно. Он переписывает всю таблицу, освобождая дисковое пространство, но требует эксклюзивной блокировки и может быть очень медленным, поэтому это крайняя мера при сильном раздувании.

Безопасность и контроль доступа
Как вы управляете аутентификацией пользователей в PostgreSQL?
Ответ:

PostgreSQL поддерживает различные методы аутентификации, такие как md5, scram-sha-256, ident, peer, trust, а также внешние методы, такие как LDAP или Kerberos. Они настраиваются в файле pg_hba.conf, который контролирует аутентификацию клиентов на основе типа соединения, базы данных, пользователя и IP-адреса.

Объясните концепцию ролей в PostgreSQL и как они используются для контроля доступа.
Ответ:

Роли являются основой для управления разрешениями в PostgreSQL. Роль может быть пользователем (с правами на вход) или группой (без прав на вход). Роли могут владеть объектами базы данных и иметь разрешения на эти объекты. Вы можете предоставлять роли другим ролям, создавая иерархическую структуру разрешений.

В чем разница между GRANT и REVOKE в PostgreSQL?
Ответ:

GRANT используется для назначения конкретных привилегий (например, SELECT, INSERT, UPDATE, DELETE) на объекты базы данных (таблицы, представления, функции) ролям. REVOKE используется для удаления ранее предоставленных привилегий. Обе команды необходимы для детального контроля доступа.

Как можно ограничить доступ пользователя к определенным столбцам в таблице?
Ответ:

Вы можете предоставлять привилегии SELECT, INSERT, UPDATE или REFERENCES на конкретные столбцы таблицы. Например, GRANT SELECT (column1, column2) ON my_table TO my_user;. Это обеспечивает очень гранулярный контроль над доступом к данным.

Что такое ROW LEVEL SECURITY (RLS) и когда его следует использовать?
Ответ:

Безопасность на уровне строк (Row Level Security, RLS) позволяет определять политики, которые ограничивают, какие строки пользователь может видеть или изменять в таблице, на основе атрибутов пользователя или других критериев. Это полезно для многопользовательских приложений или когда разные пользователи должны иметь доступ только к подмножеству данных в одной и той же таблице, без необходимости создания отдельных представлений.

Как включить и определить простую политику RLS для таблицы?
Ответ:

Сначала включите RLS для таблицы: ALTER TABLE my_table ENABLE ROW LEVEL SECURITY;. Затем создайте политику, например: CREATE POLICY my_policy ON my_table FOR SELECT USING (user_id = current_user);. Эта политика гарантирует, что пользователи видят только те строки, где user_id совпадает с их текущим именем пользователя.

Каково назначение файла pg_hba.conf?
Ответ:

Файл pg_hba.conf (host-based authentication — аутентификация на основе хоста) контролирует, каким хостам разрешено подключаться к серверу PostgreSQL, какие учетные записи пользователей PostgreSQL они могут использовать и какой метод аутентификации требуется для успешного подключения. Это основной файл конфигурации для аутентификации клиентов.

Объясните предложение WITH ADMIN OPTION при предоставлении ролей.
Ответ:

Когда роль предоставляется другой роли WITH ADMIN OPTION, получающая роль может затем предоставлять эту же роль другим ролям, а также отзывать ее. Это делегирует административный контроль над членством в ролях, позволяя децентрализованно управлять разрешениями.

Как можно аудировать события, связанные с безопасностью, в PostgreSQL?
Ответ:

Средства ведения журналов PostgreSQL могут быть настроены для захвата событий, связанных с безопасностью. Параметры, такие как log_connections, log_disconnections, log_statement и log_hostname, могут быть установлены в postgresql.conf. Для более продвинутого аудита расширения, такие как pgAudit, предоставляют подробное, настраиваемое ведение журналов SQL-инструкций и соединений.

Что такое подготовленные выражения (prepared statements) и как они связаны с безопасностью?
Ответ:

Подготовленные выражения — это предварительно разобранные SQL-инструкции, которые могут выполняться многократно с различными параметрами. Они имеют решающее значение для предотвращения атак SQL-инъекций, поскольку параметры отправляются отдельно от SQL-запроса, гарантируя, что они обрабатываются как значения данных, а не как исполняемый код.

Расширенные возможности и расширения
Объясните назначение расширений PostgreSQL и приведите пример часто используемого.
Ответ:

Расширения PostgreSQL — это пакеты объектов SQL (функции, типы данных, операторы и т. д.), которые расширяют функциональность базы данных. Они позволяют пользователям добавлять новые возможности без изменения основного кода PostgreSQL. Распространенным примером является pg_stat_statements, который отслеживает статистику выполнения всех SQL-инструкций.

Какова роль pg_stat_statements и как ее можно включить и использовать для оптимизации производительности?
Ответ:

pg_stat_statements отслеживает статистику выполнения всех SQL-инструкций, выполненных сервером. Чтобы включить его, добавьте pg_stat_statements в shared_preload_libraries в postgresql.conf и перезапустите сервер. Затем выполните CREATE EXTENSION pg_stat_statements;. Он помогает выявлять медленные запросы, показывая количество вызовов, общее время и среднее время для каждого уникального запроса.

Опишите концепцию Foreign Data Wrappers (FDW) в PostgreSQL. Когда их следует использовать?
Ответ:

Foreign Data Wrappers (FDW) позволяют PostgreSQL подключаться к внешним источникам данных и запрашивать данные из них так, как если бы они были локальными таблицами. Вы будете использовать FDW для интеграции данных, федеративных запросов к различным базам данных (например, MySQL, Oracle, другим экземплярам PostgreSQL) или для прямого доступа к внешним файлам (например, CSV) из SQL.

Как реализовать пользовательский тип данных в PostgreSQL? Приведите простой концептуальный пример.
Ответ:

Пользовательские типы данных могут быть реализованы путем определения их внутреннего представления и предоставления функций ввода/вывода. Например, чтобы создать тип complex_number, вы определите его как составной тип или используете функции C для внутреннего управления, а затем определите функции complex_in и complex_out для преобразования строк.

Что такое методы секционирования таблиц (Table Partitioning) в PostgreSQL и почему это выгодно?
Ответ:

PostgreSQL поддерживает декларативное секционирование таблиц (RANGE, LIST, HASH), которое разделяет большую таблицу на более мелкие, управляемые части, называемые секциями. Преимущества включают улучшенную производительность запросов (pruning), упрощенное управление данными (например, архивирование старых данных) и более быстрое перестроение индексов на меньших секциях.

Объясните разницу между логической репликацией (Logical Replication) и физической репликацией (Physical Replication) в PostgreSQL.
Ответ:

Физическая репликация (например, потоковая репликация) копирует целые блоки данных, что делает ее блочной и подходящей для аварийного восстановления. Логическая репликация реплицирует изменения данных на уровне строк, позволяя выборочную репликацию, разные версии схем и репликацию между различными основными версиями PostgreSQL или даже другими базами данных.

Что такое pg_repack и почему он предпочтительнее VACUUM FULL для онлайн-реорганизации таблиц?
Ответ:

pg_repack — это расширение, которое удаляет раздувание (bloat) из таблиц и индексов, не удерживая эксклюзивную блокировку таблицы в процессе. В отличие от VACUUM FULL, который требует эксклюзивной блокировки и блокирует все операции, pg_repack позволяет одновременный доступ на чтение/запись, что делает его подходящим для онлайн-операций.

Как можно использовать dblink для межбазовой коммуникации в PostgreSQL?
Ответ:

dblink — это расширение, которое позволяет подключаться к другим базам данных PostgreSQL (даже на том же сервере) и выполнять на них запросы. Вы можете использовать его для получения данных из удаленной базы данных или выполнения DDL/DML-инструкций. Например: SELECT * FROM dblink('dbname=mydb', 'SELECT col1 FROM mytable') AS t(col1 text);

Каково назначение pg_cron и как он упрощает планирование задач в PostgreSQL?
Ответ:

pg_cron — это расширение, которое позволяет планировать команды PostgreSQL непосредственно в базе данных, используя синтаксис cron. Оно упрощает планирование задач, устраняя необходимость во внешних заданиях cron или планировщиках на уровне операционной системы, сохраняя задачи, связанные с базой данных, под управлением самой базы данных.

Опишите сценарий использования PostGIS в PostgreSQL.
Ответ:

PostGIS — это мощное пространственное расширение для PostgreSQL, которое добавляет поддержку географических объектов (точек, линий, полигонов) и пространственных функций. Оно используется для хранения, запроса и анализа данных, основанных на местоположении, позволяя приложениям, таким как картография, геокодирование и анализ близости, работать непосредственно в базе данных.

Сценарные и практические применения
У вас наблюдается медленная производительность запросов к таблице users с миллионами строк при фильтрации по last_login_date. Что бы вы исследовали в первую очередь и как бы вы это решили?
Ответ:

Я бы сначала проверил, существует ли индекс по столбцу last_login_date. Если нет, я бы создал индекс B-tree: CREATE INDEX idx_users_last_login ON users (last_login_date);. Затем я бы выполнил ANALYZE users; для обновления статистики для планировщика запросов.

Критический отчетный запрос выполняется слишком долго. Вы определили, что он выполняет полное сканирование таблицы orders большого размера. Как бы вы оптимизировали это, не изменяя код приложения?
Ответ:

Я бы проанализировал предложения WHERE и JOIN медленного запроса, чтобы выявить столбцы, часто используемые для фильтрации или соединения. Затем я бы создал соответствующие индексы для этих столбцов. Например, CREATE INDEX idx_orders_customer_id ON orders (customer_id);, если фильтрация идет по клиенту.

Вам необходимо обеспечить целостность данных для таблицы orders, где каждый заказ должен принадлежать существующему customer в таблице customers. Как бы вы обеспечили это отношение?
Ответ:

Я бы использовал ограничение внешнего ключа (Foreign Key constraint). В таблице orders я бы добавил: ALTER TABLE orders ADD CONSTRAINT fk_customer FOREIGN KEY (customer_id) REFERENCES customers (id);. Это гарантирует, что customer_id в orders должен существовать как id в customers.

Опишите сценарий, в котором вы бы использовали Общее Табличное Выражение (CTE) в PostgreSQL.
Ответ:

Я бы использовал CTE для разбиения сложных запросов на более читаемые, управляемые шаги или для многократного обращения к одному и тому же подзапросу без его повторного выполнения. Например, расчет среднего объема продаж по регионам, а затем поиск регионов, превышающих общий средний показатель.

Вам нужно получить 5 лучших клиентов, которые разместили наибольшее количество заказов за последний месяц. Как бы вы написали этот запрос?
Ответ:

Я бы использовал GROUP BY и ORDER BY с LIMIT. SELECT customer_id, COUNT(order_id) AS total_orders FROM orders WHERE order_date >= NOW() - INTERVAL '1 month' GROUP BY customer_id ORDER BY total_orders DESC LIMIT 5;

Ваша база данных быстро растет, и вы обеспокоены дисковым пространством и производительностью запросов для исторических данных. Какая функция PostgreSQL может помочь в управлении этим?
Ответ:

Я бы рассмотрел возможность внедрения секционирования таблиц. Это позволяет разделять большую таблицу на более мелкие, управляемые части на основе ключа (например, order_date). Это улучшает производительность запросов за счет сканирования меньшего объема данных и упрощает политики хранения данных.

Вам необходимо выполнить обновление базы данных, но время простоя должно быть сведено к минимуму. Какую стратегию вы бы рассмотрели для обновления PostgreSQL?
Ответ:

Для минимизации времени простоя я бы рассмотрел использование логической репликации (например, pglogical или встроенной логической репликации в более новых версиях) для настройки нового сервера с обновленной версией PostgreSQL в качестве реплики. После синхронизации я бы переключил трафик приложения на новый сервер.

Разработчик случайно удалил большое количество записей из производственной таблицы. Как бы вы восстановили данные с минимальной потерей данных?
Ответ:

Если включено восстановление на момент времени (point-in-time recovery, PITR), я бы восстановил недавнюю базовую резервную копию, а затем воспроизвел файлы журнала упреждающей записи (Write-Ahead Log, WAL) до момента непосредственно перед случайным удалением. Это требует надежной стратегии резервного копирования и архивирования WAL.

Вы разрабатываете новую функцию, которая требует хранения полуструктурированных данных (например, предпочтений пользователя с различными атрибутами). Какой тип данных PostgreSQL вы бы рекомендовали?
Ответ:

Я бы рекомендовал использовать тип данных JSONB. Он хранит данные JSON в разложенном бинарном формате, что позволяет эффективно индексировать и запрашивать конкретные ключи или элементы внутри JSON-документа, в отличие от JSON, который хранит его как обычный текст.

Как бы вы определили самые дорогие запросы, выполняющиеся в вашем экземпляре PostgreSQL?
Ответ:

Я бы включил и настроил pg_stat_statements. Это расширение отслеживает статистику выполнения всех SQL-инструкций. Затем я мог бы запросить представление pg_stat_statements, отсортировав по total_time или mean_time, чтобы найти самые медленные запросы.

Вам необходимо убедиться, что определенный столбец email в таблице users содержит только уникальные значения. Как бы вы это обеспечили?
Ответ:

Я бы добавил ограничение UNIQUE к столбцу email. Это можно сделать с помощью ALTER TABLE users ADD CONSTRAINT uq_users_email UNIQUE (email);. Это автоматически создаст уникальный индекс B-tree по столбцу.

Вопросы по ролям (Разработчик, DBA, DevOps)
Разработчик: Как вы решаете проблемы с запросами N+1 в приложении PostgreSQL?
Ответ:

Запросы N+1 возникают при выборке списка родительских объектов, а затем выполнении отдельного запроса для каждого родителя для выборки связанных дочерних объектов. Это можно смягчить, используя операции JOIN (например, LEFT JOIN) для выборки всех связанных данных в одном запросе, или используя предложения WITH (CTE) для сложных отношений. ORM часто предоставляют механизмы "жадной загрузки" (eager loading) для достижения этого.

Разработчик: Объясните разницу между LEFT JOIN и INNER JOIN в PostgreSQL.
Ответ:

INNER JOIN возвращает только те строки, которые имеют совпадающие значения в обеих таблицах. LEFT JOIN (или LEFT OUTER JOIN) возвращает все строки из левой таблицы и совпадающие строки из правой таблицы. Если для строки из левой таблицы нет совпадения, для столбцов правой таблицы возвращаются значения NULL.

Разработчик: Когда бы вы использовали VIEW в PostgreSQL и каковы его ограничения?
Ответ:

VIEW — это виртуальная таблица, основанная на результирующем наборе SQL-запроса, используемая для упрощения сложных запросов, ограничения доступа к данным или представления данных в другом формате. Ограничения включают потенциальные накладные расходы на производительность для сложных представлений, и они не всегда обновляемы (особенно если они включают соединения, агрегации или предложения distinct).

DBA: Какие ключевые параметры вы бы настраивали в postgresql.conf для повышения производительности?
Ответ:

Ключевые параметры включают shared_buffers (для кэширования блоков данных), work_mem (для сортировки/хеширования в памяти), maintenance_work_mem (для операций VACUUM/INDEX), wal_buffers (для записей WAL) и effective_cache_size (для оценок оптимизатора). max_connections и настройки autovacuum также имеют решающее значение.

DBA: Опишите назначение VACUUM и ANALYZE в PostgreSQL.
Ответ:

VACUUM освобождает пространство, занимаемое "мертвыми" кортежами (строками, помеченными для удаления, но еще не удаленными), предотвращая раздувание таблиц и обеспечивая предотвращение переполнения идентификаторов транзакций (transaction ID wraparound). ANALYZE собирает статистику о содержимом таблиц, которую планировщик запросов использует для определения наиболее эффективных планов выполнения запросов.

DBA: Как вы решаете проблему полного дискового пространства на сервере PostgreSQL?
Ответ:

Сначала определите самые большие таблицы/индексы с помощью pg_relation_size() или pg_database_size(). Затем рассмотрите возможность удаления старых данных, выполнения VACUUM FULL (с осторожностью из-за блокировок), перемещения данных в другое табличное пространство или добавления дополнительного хранилища. Также проверьте наличие больших файлов журналов или временных файлов.

DevOps: Как бы вы настроили высокую доступность (high availability) для базы данных PostgreSQL?
Ответ:

Высокая доступность может быть достигнута с использованием потоковой репликации (физической репликации) с основным и одним или несколькими резервными серверами. Инструменты, такие как Patroni или repmgr, могут автоматизировать процессы отработки отказа (failover) и переключения (switchover). Логическая репликация также может использоваться для конкретных сценариев, но потоковая репликация является стандартом для HA.

DevOps: Какова роль pg_basebackup в стратегии резервного копирования PostgreSQL?
Ответ:

pg_basebackup используется для создания согласованной базовой резервной копии работающего кластера PostgreSQL. Он создает бинарную копию каталога данных, которая затем может быть использована для восстановления на момент времени (point-in-time recovery, PITR) в сочетании с непрерывным архивированием WAL. Это необходимо для настройки новых реплик или восстановления с нуля.

DevOps: Как вы отслеживаете производительность PostgreSQL в производственной среде?
Ответ:

Мониторинг включает отслеживание ключевых метрик, таких как загрузка ЦП, использование памяти, ввод-вывод диска, сеть, активные соединения, время выполнения запросов, коэффициенты попадания в кэш и активность WAL. Обычно используются такие инструменты, как Prometheus/Grafana, Datadog или специализированные решения для мониторинга PostgreSQL (например, pg_stat_statements, pg_activity).

DevOps: Объясните концепцию восстановления на момент времени (Point-In-Time Recovery, PITR) в PostgreSQL.
Ответ:

PITR позволяет восстановить базу данных PostgreSQL до любого конкретного момента времени, даже до границы транзакции. Это требует полной базовой резервной копии (например, из pg_basebackup) и непрерывного архива файлов журнала упреждающей записи (WAL). Во время восстановления восстанавливается базовая резервная копия, а затем файлы WAL воспроизводятся до целевого момента восстановления.

Резюме
Овладение PostgreSQL для собеседований — это путь, который начинается с усердной подготовки. Тщательно просмотрев распространенные вопросы и поняв основные концепции, вы вооружились знаниями и уверенностью, чтобы эффективно излагать свой опыт. Эта подготовка не только поможет вам успешно пройти собеседования, но и укрепит ваше фундаментальное понимание этой мощной системы баз данных.

Помните, мир PostgreSQL постоянно развивается. Продолжайте изучать новые функции, лучшие практики и продвинутые темы. Примите непрерывное обучение как основной принцип вашего профессионального развития. Ваша преданность делу поддержания актуальности знаний, несомненно, приведет к большему успеху и более глубокому пониманию в вашей карьере.
