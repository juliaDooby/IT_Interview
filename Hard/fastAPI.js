Как подключиться к файлу sqlite3 db и получить содержимое в fastapi?
Вопросы
PYTHON
Как подключиться к файлу sqlite3 db и получить содержимое в fastapi?
У меня есть файл sqlite.db, который имеет 5 столбцов и 10 миллионов строк. Я создал API с помощью fastapi, теперь в одном из методов API я хочу подключиться к этому файлу sqlite.db и получить контент на основе определенных условий (на основе имеющихся столбцов). В основном я буду использовать SELECT и WHERE.

Как я могу это сделать, также используя асинхронные запросы. Я столкнулся с Tortoise ORM, но я не уверен, как правильно использовать его для получения результатов.

from fastapi import FastAPI, UploadFile, File, Form
from fastapi.middleware.cors import CORSMiddleware

DATABASE_URL = "sqlite:///test.db"


@app.post("/test")
async def fetch_data(id: int):
    query = "SELECT * FROM tablename WHERE ID = {}".format(str(id))

    # how can I fetch such query faster from 10 million records while taking advantage of async func
    return  results
 12.12.2020 23:48
4
0
9 545
2
Данный вопрос помечен как решенный
 Ответы 2
 Ответ принят как подходящий
Здесь вы упускаете момент, определения функции с помощью async недостаточно. Вам нужно использовать асинхронный драйвер базы данных, чтобы воспользоваться преимуществами использования сопрограммы.

Библиотека Encode Databases отлично подходит для этой цели.

pip install databases
Вы также можете установить необходимые драйверы базы данных с помощью:

pip install databases[sqlite]
В вашем случае это должно принести пользу.

from fastapi import FastAPI, UploadFile, File, Form
from fastapi.middleware.cors import CORSMiddleware
from databases import Database

database = Database("sqlite:///test.db")


@app.on_event("startup")
async def database_connect():
    await database.connect()


@app.on_event("shutdown")
async def database_disconnect():
    await database.disconnect()


@app.post("/test")
async def fetch_data(id: int):
    query = "SELECT * FROM tablename WHERE ID = {}".format(str(id))
    results = await database.fetch_all(query=query)

    return  results
 13.12.2020 00:20
Подход к доступу к данным из столбца в наборе результатов запроса:

Вы можете прочитать набор результатов db в фрейме данных Pandas. Оттуда вы можете использовать dataframe["имя столбца"] для доступа к данным столбца, который возвращает список, похожий на итерацию данных этого столбца. Вы можете использовать встроенный метод to_dict() фрейма данных для данных словаря.

Замените имя сервера поддельным именем сервера в заголовке ответа в fastapi
Вопросы
PYTHON 3.X
Замените имя сервера поддельным именем сервера в заголовке ответа в fastapi
Я использую uvicorn в качестве сервера для запуска приложения с использованием быстрого API. При выполнении URL-адреса конечной точки в Swagger в заголовке ответа сервера отображается следующее сообщение.

 content-length: 122 
 content-type: application/json 
 date: Sat12 Dec 2020 10:18:55 GMT 
 server: uvicorn 
Как изменить имя сервера на новое имя как server: firstproject? Следующий код объединяет имя сервера unciorn с новым именем

@app.middleware("http")
async def add_custom_header(request, call_next):
    response = await call_next(request)
    response.headers['server'] = 'firstproject'
    return response
Это дает следующий вывод

content-length: 122 
 content-type: application/json 
 date: Sat12 Dec 2020 10:19:33 GMT 
 server: uvicornfirstproject 
Как изменить имя сервера на server: firstproject в заголовке ответа?

РЕДАКТИРОВАТЬ

В start_server.py

 import uvicorn

from app.main import app

if __name__ == "__main__":
    uvicorn.run("start_server:app --header server:firstproject", host = "0.0.0.0", port=8000, reload=True)

    
выдает следующую ошибку

INFO:     Uvicorn running on http://0.0.0.0:8000 (Press CTRL+C to quit)
INFO:     Started reloader process [15256] using statreload
ERROR:    Error loading ASGI app. Attribute "app --header server:firstproject" not found in module "start_server".
Я запускаю код из Visual Studio

 12.12.2020 11:17
4
0
2 759
2
Данный вопрос помечен как решенный
 Ответы 2
 Ответ принят как подходящий
Вы можете установить собственный заголовок при запуске uvicorn.

--header TEXT Укажите настраиваемые заголовки ответов HTTP по умолчанию в виде пары «Имя: значение».

Когда вы запустите его таким образом, оно переопределит имя сервера по умолчанию.

uvicorn my_app:app --header server:firstproject
Если вы запускаете uvicorn из файла python. Вам нужно передать их как кортеж внутри списка.

if __name__ == "__main__":
    uvicorn.run("my_app:app", headers=[("server", "firstproject")])
 12.12.2020 11:27
Если вам нужно «удалить» заголовок «сервер», вы можете использовать опцию --no-server-header

uvicorn my_app:app --no-server-header
Если вы запускаете uvicorn из файла Python:

if __name__ == '__main__':
    uvicorn.run('my_app:app', server_header=False)

FastAPI: могу ли я также использовать Depends() для параметров в POST?
Вопросы
PYTHON
FastAPI: могу ли я также использовать Depends() для параметров в POST?
Обзор
Я создал зависимость на основе классов, похожую на ту, что описана в замечательном туториале по FastAPI.

Проблема
Это работает, за исключением того, что параметры в зависимости (часть Depends()) передаются как параметры запроса, что означает, что они являются частью URI/URL. Я использую зависимость на основе классов как средство упрощения доступа к Azure Datalake, чтобы параметры в зависимостях были хотя бы несколько секретными. Поэтому я бы предпочел, чтобы они были в части POST.

Вопрос
Есть ли способ использовать Depends(), но передавать параметры инициализации класса через полезную нагрузку POST, а не через URL-адрес?

Подробности
В качестве примера:

Класс зависимости (просто инициализация, которая фиксирует параметры зависимости):

class DatalakeConnection(object):
    """Using FastAPI's `Depends` Dependency Injection, this class can have all
    elements needed to connect to a data lake."""

    def __init__(
        self,
        dir: str = my_typical_folder,
        container: str = storage_container.value,
    ):
        service_client = DataLakeServiceClient(
            account_url=storage_uri,
            credential=storage_credential,
        )
        self.file_system_client = service_client.get_file_system_client(
            file_system=container
        )
        self.directory_client = self.file_system_client.get_directory_client(dir)
        self.file_client = None
Функция пути FastAPI:

@app.post("/datalake")  # I have no response model yet, but will add one
def predictions_from_datalake(
    query: schemas.Query, conn: DatalakeConnection = Depends()
):
    core_df = conn.read_excel(query.file_of_interest) # I create a DataFrame from reading Excel files
Краткое содержание
Как я уже сказал, это работает, но dir и container, необходимые для инициализации класса, принудительно добавляются в параметры запроса URL, но я бы хотел, чтобы они были парами ключ-значение в теле запроса POST:

 10.12.2020 16:17
1
1
6 865
2
Данный вопрос помечен как решенный
 Ответы 2
 Ответ принят как подходящий
Вы можете объявить их так же, как параметры тела операции пути. Подробнее здесь Единственное число в теле:

class DatalakeConnection(object):
    """Using FastAPI's `Depends` Dependency Injection, this class can have all
    elements needed to connect to a data lake."""

    def __init__(
            self,
            dir: str = Body("dir_default"),
            container: str = Body("container_default"),
    ):
        pass
Пример тела запроса:

{
  "dir": "string",
  "container": "string"
}
 11.12.2020 07:56
Если вы хотите использовать Depends с существующим классом, не обновляя значения по умолчанию для этого класса, вы можете создать функцию с правильной сигнатурой и передать ее в Depends.

def _body_dependify(model_cls):
    """
    Hack around fastapi not supporting Body(...) parameters in dependencies unless
    you specify them in the function signature.
    """
    import functools
    import inspect
    from collections import OrderedDict

    signature = inspect.signature(model_cls)
    signature = signature.replace(return_annotation=model_cls)
    parameters = OrderedDict(signature.parameters)
    for parameter_name in list(parameters):
        parameter = parameters[parameter_name]
        if parameter.default is inspect.Parameter.empty:
            parameter = parameter.replace(default=Body())
        else:
            parameter = parameter.replace(default=Body(parameter.default))
        parameters[parameter_name] = parameter
    signature = signature.replace(parameters=parameters.values())

    @functools.wraps(model_cls)
    def build(*args, **kwargs):
        return model_cls(*args, **kwargs)

    build.__signature__ = signature
    return Depends(build)

Затем в вашей конечной точке вы можете сделать:

@app.post("/datalake")  # I have no response model yet, but will add one
def predictions_from_datalake(
    query: schemas.Query, conn: DatalakeConnection = _body_dependify(DatalakeConnection)
):
    core_df = conn.read_excel(query.file_of_interest) # I create a DataFrame from reading Excel files
На странице /docs схема выглядит так:

Это также работает с моделями Pydantic, поскольку они устанавливают атрибут __signature__.



Когда я использую fastapi и pydantic для создания POST API, появляется TypeError: объект типа не сериализуем JSON
Вопросы
PYTHON
Когда я использую fastapi и pydantic для создания POST API, появляется TypeError: объект типа не сериализуем JSON
Я использую FastAPi и Pydantic для моделирования запросов и ответов на POST API.

Я определил три класса:

from pydantic import BaseModel, Field
from typing import List, Optional, Dict

class RolesSchema(BaseModel):
    roles_id: List[str]

class HRSchema(BaseModel):
    pk: int
    user_id: str
    worker_id: str
    worker_name: str
    worker_email: str
    schedulable: bool
    roles: RolesSchema
    state: dict

class CreateHR(BaseModel):
    user_id: str
    worker_id: str
    worker_name: str
    worker_email: str
    schedulable: bool
    roles: RolesSchema
И программа My API:

@router.post("/humanResource", response_model=HRSchema)
async def create_humanResource(create: CreateHR):
query = HumanResourceModel.insert().values(
    user_id=create.user_id, 
    worker_id=create.worker_id, 
    worker_name=create.worker_name,
    worker_email=create.worker_email,
    schedulable=create.schedulable,
    roles=create.roles
)
last_record_id = await database.execute(query)
return {"status": "Successfully Created!"}
Формат входных данных json:

{
     "user_id": "123",
     "worker_id": "010",
     "worker_name": "Amos",
     "worker_email": "Amos@mail.com",
     "schedulable": true,
     "roles": {"roles_id": ["001"]}
}
Когда я выполнил, я получил TypeError: объект типа RolesSchema не сериализуем JSON.

Как исправить нормальную работу программы?

 10.12.2020 09:32
8
2
6 637
2
Данный вопрос помечен как решенный
 Ответы 2
 Ответ принят как подходящий
Попробуйте использовать roles=create.roles.dict() для создания query вместо roles=create.roles

 10.12.2020 09:49
Если кто-то пришел сюда с сообщением об ошибке.

В моем случае:

data = MyBaseModel(**data) 

# bad - TypeError: Object of type is not JSON serializable
json.dumps(data)

# good
data.json()


Mastering FastAPI: Essential Interview Questions for Developer
Published
June 11, 2023
Maheshwar Ligade
Maheshwar Ligade
Learner, Love to make things simple, Full Stack Developer, StackOverflower, Passionate about using machine learning, deep learning and AI

On this page

Introduction:
Questions and Answer"
Conclusion:


Introduction:
FastAPI has emerged as one of the most powerful and efficient web frameworks for building APIs with Python. Its intuitive design, exceptional performance, and automatic documentation generation make it a favorite among developers. Whether you're preparing for a FastAPI interview or seeking to enhance your understanding of this framework, this article presents a collection of essential FastAPI interview questions to help you navigate the process with confidence.

Questions and Answer"
What is FastAPI, and what are its key features?

FastAPI is a modern, high-performance web framework for building APIs with Python 3.7+ based on type hints. It offers numerous features that make it stand out among other frameworks, including exceptional speed due to asynchronous support, automatic generation of interactive API documentation, automatic validation of request and response data, dependency injection, and seamless integration with third-party libraries like SQLAlchemy, Pydantic, and OAuth.

How does FastAPI handle request validation?

FastAPI leverages Python type hints and the Pydantic library to automatically validate request data. By declaring the expected data types in the function's parameters, FastAPI ensures that the incoming data adheres to the defined structure. If the data fails validation, FastAPI automatically returns appropriate error responses.

What is dependency injection in FastAPI?

Dependency injection is a powerful design pattern used in FastAPI to manage dependencies and ensure cleaner, modular code. FastAPI's dependency injection system allows you to declare dependencies directly in the function signature. These dependencies can be any Python objects, including databases, services, or configurations. FastAPI takes care of creating and managing these dependencies, making your code more maintainable and testable.

How does FastAPI handle asynchronous programming?

FastAPI fully supports asynchronous programming, leveraging Python's asyncio library. It allows you to define asynchronous endpoints using the async def syntax, enabling you to write concurrent code that efficiently handles multiple requests. Asynchronous support in FastAPI significantly boosts performance, allowing your API to handle more concurrent users without sacrificing responsiveness.

How does FastAPI generate interactive API documentation?

One of the standout features of FastAPI is its automatic generation of interactive API documentation. FastAPI uses the OpenAPI standard to generate comprehensive API documentation that includes request and response models, data types, validation rules, and even allows users to test API endpoints directly from the documentation. This feature saves developers a significant amount of time and effort in writing and maintaining separate documentation.

How can you handle authentication and authorization in FastAPI?

FastAPI provides easy integration with authentication and authorization mechanisms. You can use third-party libraries like OAuth2 and JWT (JSON Web Tokens) to implement secure authentication and authorization. FastAPI's OAuth2 support allows you to define scopes and permissions for different API routes, ensuring fine-grained access control.

How does FastAPI handle file uploads?

FastAPI provides convenient ways to handle file uploads. You can define an endpoint that accepts file uploads using the UploadFile type from the fastapi module. FastAPI automatically handles the file upload process, including storing the file on the server and providing you with access to the uploaded file's metadata and contents.

Can FastAPI handle WebSocket communication?

Yes, FastAPI supports WebSocket communication through the use of the WebSocket class. You can define WebSocket endpoints by using the WebSocket class as a parameter in your path operations. FastAPI simplifies WebSocket handling, allowing you to build real-time applications and bidirectional communication between clients and servers.

What is the difference between FastAPI and Flask?

FastAPI and Flask are both popular Python web frameworks, but they have distinct differences. FastAPI is designed for high-performance APIs and leverages modern Python features such as type hints and asynchronous programming. It provides automatic documentation generation and has built-in support for data validation and dependency injection. Flask, on the other hand, is a more lightweight framework that offers simplicity and flexibility. It is suitable for smaller projects and doesn't have the same level of performance optimizations as FastAPI.

How can you deploy a FastAPI application?

FastAPI applications can be deployed using various methods. You can deploy FastAPI on traditional web servers like Nginx or Apache using WSGI adapters such as Gunicorn or uWSGI. Another option is to use ASGI servers like Uvicorn or Hypercorn, which are specifically designed for asynchronous frameworks like FastAPI. Additionally, FastAPI can be deployed as serverless functions on platforms like AWS Lambda or Google Cloud Functions.

Does FastAPI support database integration?

Yes, FastAPI integrates seamlessly with databases. It works well with popular Python database libraries like SQLAlchemy and Tortoise ORM. These libraries provide powerful Object-Relational Mapping (ORM) capabilities, allowing you to interact with databases using Python objects and queries. FastAPI's dependency injection system makes it easy to manage and inject database connections into your application.

How can you handle cross-origin resource sharing (CORS) in FastAPI?

FastAPI includes built-in support for handling Cross-Origin Resource Sharing (CORS) to enable secure communication between different domains. You can configure CORS settings by using the fastapi.middleware.cors module. FastAPI allows you to specify the allowed origins, methods, headers, and other CORS-related settings to control access to your API.

Conclusion:
By expanding your knowledge of FastAPI and mastering a comprehensive range of interview questions, you can confidently showcase your skills and expertise in this powerful web framework. These additional questions and answers will further equip you with the necessary insights to excel in FastAPI interviews and demonstrate your ability to build efficient and robust APIs.

I hope this helps, you!!

More such articles:

https://medium.com/techwasti

https://www.youtube.com/@maheshwarligade

https://www.techwasti.com/

\==========================**=========================

If this article adds any value to you then please clap and comment.

Let’s connect on Stackoverflow, LinkedIn, & Twitter.

Как получить доступ к объекту запроса и зависимостям FastAPI в моделях, созданных из базовой модели Pydantic
Вопросы
PYTHON
Как получить доступ к объекту запроса и зависимостям FastAPI в моделях, созданных из базовой модели Pydantic
Я пишу API, используя стек FastAPI, Pydantic и SQL Alchemy, и я сталкивался со многими случаями, когда мне приходилось запрашивать базу данных для проверки значений полезной нагрузки. Давайте рассмотрим один пример API, /forgot-password. Этот API будет принимать email в полезной нагрузке, и мне нужно проверить наличие электронной почты в базе данных. Если электронная почта существует в базе данных, тогда будут выполнены необходимые действия, такие как создание токена и отправка почты, иначе Pydantic должен вызвать ответ об ошибке в этом поле. Ответы на ошибки должны быть стандартными ответами PydanticValueError. Это связано с тем, что все ошибки проверки будут иметь согласованные ответы, поскольку потребителям будет легко с ними справиться.

Полезная нагрузка -
{
    "email": "example@gmail.com"
}
В Pydantic эта схема и проверка электронной почты реализованы как:

class ForgotPasswordRequestSchema(BaseModel):
    email: EmailStr
    
    @validator("email")
    def validate_email(cls, v):
        # this is the db query I want to perform but 
        # I do not have access to the active session of this request.
        user = session.get(Users, email=v) 
        if not user:
            raise ValueError("Email does not exist in the database.")

        return v
Теперь с этим можно легко справиться, если мы просто создадим сеанс Alchemy в модели pydantic, подобной этой.

class ForgotPasswordRequestSchema(BaseModel):
    email: EmailStr
    _session = get_db() # this will simply return the session of database.
    _user = None
    
    @validator("email")
    def validate_email(cls, v):
        # Here I want to query on Users's model to see if the email exist in the 
        # database. If the email does. not exist then I would like to raise a custom 
        # python exception as shown below.

        user = cls._session.get(Users, email=v) # Here I can use session as I have 
        # already initialised it as a class variable.

        if not user:
            cls.session.close()
            raise ValueError("Email does not exist in the database.")

        cls._user = user # this is because we want to use user object in the request 
        # function.

        cls.session.close()

        return v

Но это неправильный подход, так как в запросе должна использоваться только одна сессия. Как вы можете видеть в приведенном выше примере, мы закрываем сеанс, поэтому мы не сможем использовать пользовательский объект в функции запроса как user = payload._user. Это означает, что нам придется снова запрашивать ту же строку в функции запроса. Если мы не закроем сессию, мы увидим такие исключения алхимии — sqlalchemy.exc.PendingRollbackError.

Теперь лучший подход — использовать тот же сеанс в модели Pydantic, который создается в начале запроса и также закрывается в конце запроса.

Итак, я в основном ищу способ передать этот сеанс в Pydantic в качестве контекста. Сессия для моей функции запроса предоставляется как зависимость.

 03.02.2023 13:32
1
3
69
2
Данный вопрос помечен как решенный
 Ответы 2
Не делай этого!

Целью классов pydantic является хранение словарей законным способом, поскольку они поддерживаются IDE и менее подвержены ошибкам. Валидаторы существуют для очень простых вещей, которые не затрагивают другие части системы (например, целочисленное положительное или электронная почта удовлетворяет регулярному выражению).

При этом вы должны использовать зависимости. Таким образом, вы можете быть уверены, что у вас есть один сеанс во время обработки всего запроса, и из-за менеджера контекста сеанс будет закрыт в любом случае.

Окончательное решение может выглядеть так:

from fastapi import Body, Depends
from fastapi.exceptions import HTTPException

def get_db():
    db = your_session_maker
    try:
        yield db
    finally:
        db.close()

@app.post("/forgot-password/")
def forgot_password(email: str = Body(...), db: Session = Depends(get_db)):
    user = db.get(Users, email=email)
    if not user:
        # If you really need to, you can for some reason raise pydantic exception here
        raise HTTPException(status_code=400, detail = "No email")
 
 04.02.2023 02:47
 Ответ принят как подходящий
Не рекомендуется запрашивать базу данных в схеме pydantic. Вместо этого используйте сеанс как зависимость.

Если вы хотите вызвать ошибки, такие как ошибка проверки pydantic, вам может понадобиться следующее:

def raise_custom_error(exc: Exception, loc: str, model: BaseModel, status_code=int, **kwargs):
    """
    This method will return error responses using pydantic error wrapper (similar to pydantic validation error).
    """
    raise HTTPException(
        detail=json.loads(ValidationError([ErrorWrapper(exc(**kwargs), loc=loc)], model=model).json()),
        status_code=status_code,
    )

Применение
class PayloadSchema(BaseModel):
    email: EmailStr

@app_router.post('/forgot-password')
def forgot_password(
    payload: PayloadSchema,
    session: Session = Depends(get_db),
    background_tasks: BackgroundTasks
):
    
    existing_user = db.get(Users, email=payload.email)
    if (existing_user):
        raise_custom_error(
        PydanticValueError, "email", PayloadSchema, status.HTTP_400_BAD_REQUEST
    )
    background_tasks(send_email, email=payload.email)


Модель ответа в виде списка строк вместо объектов
Вопросы
PYTHON
Модель ответа в виде списка строк вместо объектов
Я пытаюсь вернуть список элементов в FastAPI через модель Pydantic.

В настоящее время у меня есть маршрут:

from typing import List

from fastapi import Depends
from sqlalchemy.orm.session import Session

...

@router.get('/search-job-types', response_model=List[JobTypeDisplay])
def job_types(search_word: str, db: Session = Depends(get_db)):
  return db_dims.search_job_types(search_word, db)

#db_dims:
def search_job_types(search_word: str, db: Session):
  s_word = search_word.capitalize()
  s_word2 = "%{}%".format(s_word)
  all = db.query(DbJobType).filter(DbJobType.name.like(s_word2)).all()
  #list_jobs = []
  #for item in all:
    #list_jobs.append(item.name)

  return all
И моя схема выглядит следующим образом:

from pydantic import BaseModel

class JobTypeDisplay(BaseModel):
  name: str
  class Config:
        orm_mode = True
Я получаю список таких объектов:

[
  {
    "name": "Something3"
  },
  {
    "name": "Somethin2"
  },
  {
    "name": "Something1"
  }
]
Но хотелось бы что-то вроде этого:

['Something3', 'Somethin2', 'Something1']
Каков наилучший способ добиться этого и действительно ли мне нужен цикл для этого?

 01.02.2023 21:22
1
1
56
2
Данный вопрос помечен как решенный
 Ответы 2
Вы можете перейти на return_model=list[str] и изменить оператор возврата на

return [jt.name for jt in all]
 01.02.2023 22:16
 Ответ принят как подходящий
Если вас интересуют только значения столбца name в вашей таблице DbJobType, вам следует 1) изменить запрос к базе данных, чтобы фактически выбрать только этот столбец, и 2) использовать метод Result.scalars, чтобы вернуть только список струны.

Вот как это будет выглядеть:

from sqlalchemy.orm.session import Session
from sqlalchemy.sql.expression import select

# ... import DbJobType


def search_job_types(search_word: str, db: Session) -> list[str]:
    ...
    statement = select(DbJobType.name).filter()  # add your filter options here
    result = db.execute(statement)
    return result.scalars().all()
Технически вам также не нужно указывать response_model для маршрута. Если вы опустите этот аргумент, он все равно будет работать. Поскольку дополнительный синтаксический анализ не требуется, правильной аннотации типа возвращаемого значения list[str] будет достаточно, чтобы сгенерировать правильную схему OpenAPI для этого маршрута.

from fastapi import Depends, FastAPI
from sqlalchemy.orm.session import Session

# ... import search_job_types


app = FastAPI()
...

@app.get("/search-job-types")
def job_types(search_word: str, db: Session = Depends(get_db)) -> list[str]:
    return search_job_types(search_word, db)
Похоже, по крайней мере, для этого маршрута ваша JobTypeDisplay модель устарела.

спасибо за идею, просто небольшая проблема AttributeError: объект «Запрос» не имеет атрибута «скаляры»

— 
Tomas Am
 02.02.2023 18:36
@TomasAm Query — это устаревший код, и вам, вероятно, следует отказаться от его использования. Вот почему я использовал Session.execute , чтобы получить объект Result. У него есть метод scalars.

— 
Daniil Fajnberg

Как наложить определенные ограничения на параметры модели Pydantic?
Вопросы
PYTHON
Как наложить определенные ограничения на параметры модели Pydantic?
Как я могу наложить определенные ограничения на параметры модели Pydantic? В частности, я хотел бы:

start_date должно быть не менее "2019-01-01"
end_date должно быть больше, чем start_date
code должно быть одно и только одно из значений в наборе
cluster должно быть одно и только одно из значений в наборе
Код, который я использую, выглядит следующим образом:

from fastapi import FastAPI
from pydantic import BaseModel
from typing import Set
import uvicorn

app = FastAPI()


class Query(BaseModel):
    start_date: str
    end_date: str
    code: Set[str] = {
        "A1", "A2", "A3", "A4",
        "X1", "X2", "X3", "X4", "X5",
        "Y1", "Y2", "Y3"
    }
    cluster: Set[str] = {"C1", "C2", "C3"}

@app.post("/")
async def read_table(query: Query):
    return {"msg": query}

if __name__ == "__main__":
    uvicorn.run(app, host = "0.0.0.0", port=8000)
 31.01.2023 10:35
1
0
69
2
Данный вопрос помечен как решенный
 Ответы 2
 Ответ принят как подходящий
Pydantic имеет набор ограниченных типов, который позволяет вам определять конкретные ограничения на значения.

start_date должно быть не меньше "2019-01-01"
>>> class Foo(BaseModel):
...   d: condate(ge=datetime.date.fromisoformat('2019-01-01')

>>> Foo(d=datetime.date.fromisoformat('2018-01-12'))
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
  File "pydantic\main.py", line 342, in pydantic.main.BaseModel.__init__
pydantic.error_wrappers.ValidationError: 1 validation error for Foo
d
  ensure this value is greater than or equal to 2019-01-01 (type=value_error.number.not_ge; limit_value=2019-01-01)

>>> Foo(d=datetime.date.fromisoformat('2020-01-12'))
Foo(d=datetime.date(2020, 1, 12))
end_date должен быть больше start_date
Для более сложных правил можно использовать корневой валидатор:

from pydantic import BaseModel, root_validator
from datetime import date

class StartEnd(BaseModel):
    start: date
    end: date
    
    @root_validator
    def validate_dates(cls, values):
        if values['start'] > values['end']:
            raise ValueError('start is after end')
            
        return values
        

StartEnd(start=date.fromisoformat('2023-01-01'), end=date.fromisoformat('2022-01-01'))
Дает:

pydantic.error_wrappers.ValidationError: 1 validation error for StartEnd
__root__
  start is after end (type=value_error)
Для кода и кластера вы можете вместо этого использовать Enum
from pydantic import BaseModel
from enum import Enum  # StrEnum in 3.11+


class ClusterEnum(str, Enum):
    C1 = "C1"
    C2 = "C2" 
    C3 = "C3"
    

class ClusterVal(BaseModel):
    cluster: ClusterEnum
        

print(ClusterVal(cluster='C3').cluster.value)
# outputs C3
 31.01.2023 11:46
Вы можете использовать класс Enum или Literal для проверки кода и кластера, а затем использовать root_validator для даты. Также введите подсказку в поле даты с датой и временем вместо строки str. Вот так:

from datetime import datetime
from enum import Enum
from typing import Literal

from pydantic import BaseModel, root_validator

"""using Literal to validater the code and cluster"""

class Query(BaseModel):
    start_date: datetime
    end_date: datetime
    code: Literal[
        "A1", "A2", "A3", "A4", "X1", "X2", "X3", "X4", "X5", "Y1", "Y2", "Y3"
    ]
    cluster: Literal["C1", "C2", "C3"]

    @root_validator()
    def validate_dates(cls, values):
        if datetime(year=2019, month=1, day=1) < values.get("start_date"):
            raise ValueError("Date cannot be earlier than 2019-01-01")

        if values.get("end_date") < values.get("start_date"):
            raise ValueError("end date cannot be earlier than start date")

        return values
если вы хотите использовать Enum для проверки кода и кластера, вы определите класс Enum следующим образом

class Cluster(Enum):
    C1 = "C1"
    C2 = "C3"
    C3 = "C3"


class Code(Enum):
    A1 = "A1"
    A2 = "A2"
    A3 = "A3"
    A4 = "A4"
    X1 = "X1"
    X2 = "X2"
    X3 = "X3"
    X4 = "X4"
    X5 = "X5"
    Y1 = "Y1"
    Y2 = "Y2"
    Y3 = "Y3"
а затем замените литералы в классе Query этим

code: Code
cluster: Cluster

Как перенаправить пользователя на другую страницу после входа в систему с помощью POST-запроса fetch()?
Вопросы
JAVASCRIPT
Как перенаправить пользователя на другую страницу после входа в систему с помощью POST-запроса fetch()?
Используя следующий код JavaScript, я делаю запрос на получение токена firebase, а затем POST запрос, используя fetch(), к моему серверу FastAPI, чтобы войти в систему пользователя. Затем в бэкенде, как видно ниже, я проверяю, действителен ли токен, и если да, то возвращаю перенаправление (т. е. RedirectResponse). Проблема в том, что редирект в браузере не работает, и остается предыдущая страница.

function loginGoogle() {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            //.currentUser.getToken(provider)
            .signInWithPopup(provider)
            .then((result) => {
                /** @type {firebase.auth.OAuthCredential} */
                var credential = result.credential;

                // This gives you a Google Access Token. You can use it to access the Google API.
                var token = credential.idToken;
            
                // The signed-in user info.
                var user = result.user;
                
                // ...
            })
            .catch((error) => {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
                // ...
                
                });

        firebase.auth().currentUser.getIdToken(true).then(function(idToken) {
            console.info(idToken)

            const token = idToken;
            const headers = new Headers({
                    'x-auth-token': token
            });
            const request = new Request('http://localhost:8000/login', {
                    method: 'POST',
                    headers: headers
            });
            fetch(request)
            .then(response => response.json())
            .then(data => console.info(data))
            .catch(error => console.error(error));

         
        })
Конечная точка в бэкенде, которая возвращает страницу входа, содержащую HTML-код с кнопкой и функцией loginGoogle:

@router.get("/entrar")
def login(request: Request):
    return templates.TemplateResponse("login.html", {"request": request})
Я называю это POST конечной точкой, а затем перенаправляю на /1, который является GET маршрутом, а status_code является 303, как @tiangolo указывает в документе, чтобы перенаправить с POST на GET маршрут.

@router.post("/login")
async def login(x_auth_token: str = Header(None)):
    valid_token = auth.verify_id_token(x_auth_token)
   
    if valid_token:
        print("token validado")
        return RedirectResponse(url = "/1", status_code=status.HTTP_303_SEE_OTHER)
    else:
        return {"msg": "Token no recibido"}
Это конечная точка GET, на которую должен быть перенаправлен пользователь, но это не так:

@app.get("/1")
def get_landing(request: Request):
    return templates.TemplateResponse("landing.html", {"request": request})
Скриншот Swagger тестирования конечной точки /login:

 20.01.2023 14:07
1
19
195
2
Данный вопрос помечен как решенный
 Ответы 2
Основная «проблема», которая, как я вижу, может привести к тому, что это не сработает, заключается в том, что вы делаете это быстро, формируя запрос Post для запроса Get.

После некоторого поиска в Интернете я наткнулся на это [ОШИБКА] RedirectResponse с маршрута запроса POST на маршрут запроса GET если вы прочитаете эту ошибку, вы увидите, что они указывают, что иногда вам может понадобиться 307, вместо этого вы можете прочитать про ответ 307 здесь 307 Temporary Redirect.

В соответствии с этим должно помочь следующее:

import starlette.status as status
from fastapi.responses import RedirectResponse

@router.post("/login")
async def login(x_auth_token: str = Header(None))
    # Implementation details ...
    return RedirectResponse('/1', status_code=status.HTTP_302_FOUND)

@app.get("/1")
def get_landing(request: Request):
    return templates.TemplateResponse("landing.html", {"request": request})
Из того, что я видел здесь, решение заключалось в использовании status_code=status.HTTP_302_FOUND, вы можете узнать больше об этом здесь: Что такое код состояния 302?

Вы также можете обратиться к следующим ссылкам для получения дополнительной информации:

fastapi (starlette) RedirectResponse перенаправляет на сообщение вместо получения метода
Как сделать Post/Redirect/Get (PRG) в FastAPI?
[ВОПРОС] Как разместить/перенаправить/получить
RedirectResponse
Согласно @Chris в комментариях, у вас также есть следующее:

Как перенаправить пользователя обратно на главную страницу с помощью FastAPI после отправки HTML-формы?
RedirectResponse FastAPI не работает должным образом в пользовательском интерфейсе Swagger
Как отправить RedirectResponse с POST на GET маршрут в FastAPI?
 20.01.2023 15:12
 Ответ принят как подходящий
Вариант 1 - Возвращение RedirectResponse
При использовании fetch() для отправки HTTP-запроса к серверу, который отвечает RedirectResponse, ответ перенаправления будет автоматически следовать на стороне клиента (как описано здесь ), так как установлен режим redirect на follow по умолчанию в методе fetch(). Это означает, что пользователь не будет перенаправлен на новый URL-адрес, а скорее fetch() будет следовать этому перенаправлению за кулисами и возвращать ответ с URL-адреса перенаправления. Вы могли бы ожидать, что вместо этого установка redirect на manual позволит вам получить URL-адрес перенаправления (содержащийся в заголовке ответа Location ) и вручную перейти на новую страницу, но это не тот случай, как описано здесь.

Тем не менее, вы все равно можете использовать значение redirect по умолчанию в запросе fetch(), то есть follow (нет необходимости указывать его вручную, так как оно уже установлено по умолчанию — в приведенном ниже примере оно определено вручную только для ясности), и затем используйте Response.redirected , чтобы проверить, является ли ответ результатом перенаправленного вами запроса. Если это так, вы можете использовать Response.url , который вернет «конечный URL-адрес, полученный после любых перенаправлений», и с помощью window.location.href JavaScript вы можете перенаправить пользователя на целевой URL (т.е. страницу перенаправления).

Вместо window.location.href также можно использовать window.location.replace() . Отличие от установки значения свойства href заключается в том, что при использовании метода location.replace() после перехода по указанному URL-адресу текущая страница не будет сохранена в истории сеанса, то есть пользователь не сможет использовать кнопку «Назад». чтобы перейти к нему.

Рабочий пример
app.py

from fastapi import FastAPI, Request, status, Depends
from fastapi.templating import Jinja2Templates
from fastapi.responses import RedirectResponse
from fastapi.security import OAuth2PasswordRequestForm

app = FastAPI()
templates = Jinja2Templates(directory='templates')


@app.get('/')
async def index(request: Request):
    return templates.TemplateResponse('index.html', {'request': request})

    
@app.post('/login')
async def login(data: OAuth2PasswordRequestForm = Depends()):
    # perform some validation, using data.username and data.password
    credentials_valid = True
    
    if credentials_valid:
        return RedirectResponse(url='/welcome',status_code=status.HTTP_302_FOUND)
    else:
        return 'Validation failed'
 

@app.get('/welcome')
async def welcome():
    return 'You have been successfully redirected'
шаблоны/index.html

<!DOCTYPE html>
<html>
   <head>
      <script>
         document.addEventListener("DOMContentLoaded", (event) => {
            document.getElementById("myForm").addEventListener("submit", function (e) {
              e.preventDefault(); // Cancel the default action
              var formElement = document.getElementById('myForm');
              var data = new FormData(formElement);
              fetch('/login', {
                    method: 'POST',
                    redirect: 'follow',
                    body: data,
                 })
                 .then(res => {
                    if (res.redirected) {
                       window.location.href = res.url;  // or, location.replace(res.url); 
                       return;
                    } 
                    else
                       return res.text();
                 })
                 .then(data => {
                    document.getElementById("response").innerHTML = data;
                 })
                 .catch(error => {
                    console.error(error);
                 });
            });
         });
             
      </script>
   </head>
   <body>
      <form id = "myForm">
         <label for = "username">Username:</label><br>
         <input type = "text" id = "username" name = "username" value = "user@mail.com"><br>
         <label for = "password">Password:</label><br>
         <input type = "password" id = "password" name = "password" value = "pa55w0rd"><br><br>
         <input type = "submit" value = "Submit" class = "submit">
      </form>
      <div id = "response"></div>
   </body>
</html>
Вариант 2. Возврат ответа JSON, содержащего URL-адрес перенаправления.
Вместо того, чтобы возвращать RedirectResponse с сервера, вы можете заставить сервер возвращать обычный ответ JSON с URL-адресом, включенным в объект JSON. На стороне клиента вы можете проверить, содержит ли объект JSON, возвращенный с сервера в результате запроса fetch(), ключ url, и если да, то получить его значение и перенаправить пользователя на целевой URL-адрес, используя window.location.href или window.location.replace() JavaScript. .

В качестве альтернативы можно добавить URL-адрес перенаправления в собственный заголовок ответа на стороне сервера (см. примеры здесь и здесь о том, как установить заголовок ответа в FastAPI), и получить к нему доступ на стороне клиента, после отправив запрос с помощью fetch(), как показано здесь (Обратите внимание, что если вы делаете запрос между источниками , вам нужно будет установить заголовок ответа Access-Control-Expose-Headers на стороне сервера ( см. примеры здесь и здесь , а также документацию FastAPI CORSMiddleware о том, как использовать аргумент expose_headers), указывая, что ваш собственный заголовок ответа, который включает URL-адрес перенаправления, должен быть доступен для сценариев JS. работает в браузере, так как по умолчанию отображаются только заголовки ответов CORS-безопасного списка).

Рабочий пример
app.py

from fastapi import FastAPI, Request, status, Depends
from fastapi.templating import Jinja2Templates
from fastapi.security import OAuth2PasswordRequestForm

app = FastAPI()
templates = Jinja2Templates(directory='templates')


@app.get('/')
async def index(request: Request):
    return templates.TemplateResponse('index.html', {'request': request})

    
@app.post('/login')
async def login(data: OAuth2PasswordRequestForm = Depends()):
    # perform some validation, using data.username and data.password
    credentials_valid = True
    
    if credentials_valid:
        return {'url': '/welcome'}
    else:
        return 'Validation failed'
 

@app.get('/welcome')
async def welcome():
    return 'You have been successfully redirected'
шаблоны/index.html

<!DOCTYPE html>
<html>
   <head>
      <script>
         document.addEventListener("DOMContentLoaded", (event) => {
            document.getElementById("myForm").addEventListener("submit", function (e) {
              e.preventDefault(); // Cancel the default action
              var formElement = document.getElementById('myForm');
              var data = new FormData(formElement);
              fetch('/login', {
                    method: 'POST',
                    body: data,
                 })
                 .then(res => res.json())
                 .then(data => {
                    if (data.url)
                       window.location.href = data.url; // or, location.replace(data.url);
                    else
                       document.getElementById("response").innerHTML = data;
                 })
                 .catch(error => {
                    console.error(error);
                 });
            });
         });
      </script>
   </head>
   <body>
      <form id = "myForm">
         <label for = "username">Username:</label><br>
         <input type = "text" id = "username" name = "username" value = "user@mail.com"><br>
         <label for = "password">Password:</label><br>
         <input type = "password" id = "password" name = "password" value = "pa55w0rd"><br><br>
         <input type = "submit" value = "Submit" class = "submit">
      </form>
      <div id = "response"></div>
   </body>
</html>
Вариант 3 — Использование HTML <form> во внешнем интерфейсе
Если использование запроса fetch() не является требованием для вашего проекта, вместо этого вы можете использовать обычный HTML <form> и попросить пользователя нажать кнопку отправить, чтобы отправить запрос POST на сервер. Таким образом, использование RedirectResponse на стороне сервера (как показано в Варианте 1) приведет к тому, что пользователь на стороне клиента будет автоматически перенаправлен на целевой URL без каких-либо дополнительных действий.

Рабочие примеры можно найти в этом ответе , а также этом ответе и этом ответе.

TypeError: объект типа «тип» не сериализуем JSON
Вопросы
PYTHON
TypeError: объект типа «тип» не сериализуем JSON
Код отлично работает в Postman и дает правильный ответ, но не может генерировать автоматические документы пользовательского интерфейса OpenAPI/Swagger.

class Role(str, Enum):
     Internal = "internal"
     External = "external"


class Info(BaseModel):
    id: int
    role: Role

class AppInfo(Info):
    info: str


@app.post("/api/v1/create", status_code=status.HTTP_200_OK)
async def create(info: Info, apikey: Union[str, None] = Header(str)):
    if info:
        alias1 = AppInfo(info = "Portal Gun", id=123, role=info.role)
        alias2 = AppInfo(info = "Plumbus", id=123, , role=info.role)
        info_dict.append(alias1.dict())
        info_dict.append(alias2.dict())

        
        return {"data": info_dict}
    else:
        
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"Please provide the input"
        )
Получена ошибка:

TypeError: Object of type 'type' is not JSON serializable
 20.01.2023 07:43
2
4
220
2
Данный вопрос помечен как решенный
 Ответы 2
Я думаю, что проблема может быть в:

apikey: Union[str, None] = Header(str)
в асинхронной функции create()

Может быть, функция или класс Header() не принимает str на вход?

Хотя я действительно не знаю, что делает эта функция, // из какой библиотеки она.

 20.01.2023 07:48
 Ответ принят как подходящий
Проблема
Причина, по которой вы получаете следующую ошибку в консоли (обратите внимание, что эта ошибка также может быть вызвана другими причинами — см. здесь):

TypeError: Object of type 'type' is not JSON serializable
а также приведенная ниже ошибка в браузере при попытке загрузить автодокументы пользовательского интерфейса OpenAPI/Swagger по адресу /docs:

Fetch error
Internal Server Error /openapi.json
связано со следующей строкой в ​​вашем коде:

apikey: Union[str, None] = Header(str)
                                  ^^^
Решение
При объявлении параметра Заголовка (или параметра любого другого типа, т. е. Path, Query, Cookie и т. д.) первое значение, которое передается конструктору класса Заголовка (т. е. методу __init__ ), — это default значение, которое может быть либо None, либо некоторым значением по умолчанию, основанным на типе, который вы указали для параметра — в вашем случае это может быть строковое значение, например, 'some-api-key', а не тип str). Поскольку вы определили параметр как Optional, вы можете просто передать None как значение по умолчанию:

apikey: Union[str, None] = Header(None)
Пожалуйста, ознакомьтесь с этим ответом и этим ответом для более подробной информации о параметрах Optional в FastAPI.

FastAPI/Starlette: как обрабатывать исключения внутри фоновых задач?
Вопросы
PYTHON
FastAPI/Starlette: как обрабатывать исключения внутри фоновых задач?
Я разработал некоторые конечные точки API, используя FastAPI. Этим конечным точкам разрешено работать BackgroundTasks. К сожалению, я не знаю, как справиться с непредсказуемыми проблемами из этих задач.

Пример моего API показан ниже:

# main.py

from fastapi import FastAPI
import uvicorn


app = FastAPI()


def test_func(a, b):
    raise ...


@app.post("/test", status_code=201)
async def test(request: Request, background_task: BackgroundTasks):
    background_task.add_task(test_func, a, b)
    return {
        "message": "The test task was successfully sent.",
    }
if __name__ == "__main__":
    uvicorn.run(
        app=app,
        host = "0.0.0.0",
        port=8000
    )
# python3 main.py to run
# fastapi == 0.78.0
# uvicorn == 0.16.0
Можете ли вы помочь мне обработать любое исключение из такой фоновой задачи? Должен ли я добавить exception_middleware от Starlette, чтобы добиться этого?

 17.01.2023 12:02
1
1
109
2
Данный вопрос помечен как решенный
 Ответы 2
 Ответ принят как подходящий
Можете ли вы помочь мне обработать любое исключение из такой фоновой задачи?

Фоновые задачи , как следует из названия, — это задачи, которые будут выполняться в фоновом режиме после получения ответа. Следовательно, вы не можете raise и Exception ожидать, что клиент получит какой-то ответ. Если вы просто хотите поймать любое Exception происходящее внутри фоновой задачи, вы можете просто использовать блок try-except, чтобы поймать любое Исключение и обработать его по желанию. Например:

def test_func(a, b):
    try:
        # some background task logic here...
        raise <some_exception>
    except Exception as e:
        print('Something went wrong')
        # use `print(e.detail)` to print out the Exception's details 
Если вы хотите регистрировать любые исключения, возникающие в задаче (вместо того, чтобы просто распечатывать их), вы можете использовать модуль Python logging — посмотрите этот ответ , а также этот ответ и этот ответ о том, как это сделать. Вы также можете найти полезную информацию о пользовательских/глобальных обработчиках исключений FastAPI/Starlette в этом посте и этом посте , а также здесь , здесь и здесь.

Наконец, этот ответ поможет вам детально понять разницу между конечными точками def и async def (а также функциями фоновых задач) в FastAPI и найти решения для задач, блокирующих event loop (если вы когда-нибудь сталкивались с этой проблемой).

 17.01.2023 13:19
Я не уверен на 100%, что вы подразумеваете под «непредсказуемыми ошибками» и каково будет поведение в случае возникновения исключения?

Оператор try/except может работать.

# main.py

from fastapi import FastAPI
import uvicorn


app = FastAPI()


def test_func(a, b):
    raise ...


@app.post("/test", status_code=201)
async def test(request: Request, background_task: BackgroundTasks):
    try:
        background_task.add_task(test_func, a, b)
        return {
            "message": "The test task was successfully sent.",
        }
    except Exception as e:
        # exception handling code
if __name__ == "__main__":
    uvicorn.run(
        app=app,
        host = "0.0.0.0",
        port=8000
    )
# python3 main.py to run
# fastapi == 0.78.0
# uvicorn == 0.16.0

Как создать изображение PNG в PIL и отобразить его в шаблоне Jinja2 с помощью FastAPI?
Вопросы
PYTHON
Как создать изображение PNG в PIL и отобразить его в шаблоне Jinja2 с помощью FastAPI?
У меня есть конечная точка FastAPI, которая создает изображения PIL. Затем я хочу отправить полученное изображение в виде потока на Jinja2 TemplateResponse. Это упрощенная версия того, что я делаю:

import io
from PIL import Image

@api.get("/test_image", status_code=status.HTTP_200_OK)
def test_image(request: Request):
    '''test displaying an image from a stream.
    '''
    test_img = Image.new('RGBA', (300,300), (0, 255, 0, 0))

    # I've tried with and without this:
    test_img = test_img.convert("RGB")

    test_img = test_img.tobytes()
    base64_encoded_image = base64.b64encode(test_img).decode("utf-8")

    return templates.TemplateResponse("display_image.html", {"request": request,  "myImage": base64_encoded_image})
С помощью этого простого html:

<html>
   <head>
      <title>Display Uploaded Image</title>
   </head>
   <body>
      <h1>My Image<h1>
      <img src = "data:image/jpeg;base64,{{ myImage | safe }}">
   </body>
</html>
Я работал над этими ответами и пробовал несколько их перестановок:

Как отобразить загруженное изображение на HTML-странице с помощью FastAPI и Jinja2?

Как преобразовать объект PIL Image.image в строку base64?

Как я могу отобразить изображение PIL в html с колбой render_template?

Кажется, это должно быть очень просто, но все, что я получаю, это значок html для изображения, которое не отображается.

Что я делаю не так? Спасибо.

Я использовал ответ Марка Сетчелла, который ясно показывает, что я делал неправильно, но все еще не получаю изображение в html. Мой FastAPI:

@api.get("/test_image", status_code=status.HTTP_200_OK)
def test_image(request: Request):
# Create image
    im = Image.new('RGB',(1000,1000),'red')

    im.save('red.png')

    print(im.tobytes())

    # Create buffer
    buffer = io.BytesIO()

    # Tell PIL to save as PNG into buffer
    im.save(buffer, 'PNG')

    # get the PNG-encoded image from buffer
    PNG = buffer.getvalue()

    print()
    print(PNG)

    base64_encoded_image = base64.b64encode(PNG)

    return templates.TemplateResponse("display_image.html", {"request": request,  "myImage": base64_encoded_image})
и мой html:

<html>
   <head>
      <title>Display Uploaded Image</title>
   </head>
   <body>
      <h1>My Image 3<h1>
      <img src = "data:image/png;base64,{{ myImage | safe }}">
   </body>
</html>
Когда я запускаю, если я создаю изображение 1x1, я получаю точные распечатки в ответе Марка. Если я запускаю эту версию с изображением 1000x1000, она сохраняет red.png, который я могу открыть и посмотреть. Но, в конце концов, на html-странице есть заголовок и значок, означающий, что изображение не отображается. Сейчас я явно делаю что-то не так, когда отправляю в html.

 11.01.2023 05:07
2
0
71
2
Данный вопрос помечен как решенный
 Ответы 2
 Ответ принят как подходящий
Здесь есть несколько проблем. Я сделаю новый раздел для каждого, чтобы четко разделить его.

Если вы хотите отправить PNG в кодировке base64, вам нужно изменить свой HTML на:

<img src = "data:image/png;base64,{{ myImage | safe }}">
Если вы создадите изображение одного красного пикселя следующим образом:

im = Image.new('RGB',(1,1),'red')
print(im.tobytes())
ты получишь:

b'\xff\x00\x00'
Это не изображение в формате PNG, как это могло быть - вы не сказали PIL, что вам нужен PNG, или JPEG, или TIFF, поэтому он не может знать. Это просто дает вам 3 необработанных пикселя RGB в виде байтов #ff0000.

Если вы сохраните это изображение на диск в формате PNG и выгрузите его, вы получите:

im.save('red.png')
Затем сбросьте это:

xxd red.png

00000000: 8950 4e47 0d0a 1a0a 0000 000d 4948 4452  .PNG........IHDR
00000010: 0000 0001 0000 0001 0802 0000 0090 7753  ..............wS
00000020: de00 0000 0c49 4441 5478 9c63 f8cf c000  .....IDATx.c....
00000030: 0003 0101 00c9 fe92 ef00 0000 0049 454e  .............IEN
00000040: 44ae 4260 82                             D.B`.
Теперь вы можете увидеть подпись PNG в начале. Итак, нам нужно создать то же самое, но только в памяти, не заморачиваясь на диске:

import io
import base64
from PIL import image

# Create image
im = Image.new('RGB',(1,1),'red')

# Create buffer
buffer = io.BytesIO()

# Tell PIL to save as PNG into buffer
im.save(buffer, 'PNG')
Теперь мы можем получить изображение в формате PNG из буфера:

PNG = buffer.getvalue()
И если мы его распечатаем, он будет подозрительно идентичен PNG на диске:

b'\x89PNG\r\n\x1a\n\x00\x00\x00\rIHDR\x00\x00\x00\x01\x00\x00\x00\x01\x08\x02\x00\x00\x00\x90wS\xde\x00\x00\x00\x0cIDATx\x9cc\xf8\xcf\xc0\x00\x00\x03\x01\x01\x00\xc9\xfe\x92\xef\x00\x00\x00\x00IEND\xaeB`\x82'
Теперь вы можете закодировать его в base64 и отправить:

base64_encoded_image = base64.b64encode(PNG)
Примечание. Я сделал 1x1 только в демонстрационных целях, чтобы показать вам весь файл. Сделайте его больше 1x1 при тестировании, иначе вы его никогда не увидите 😀

 11.01.2023 09:07
Я использовал ответ и комментарии Марка Сетчелла, чтобы придумать этот полный код. Я подумал, что полезно показать, что работает:

import base64
from PIL import Image

@api.get("/test_image", status_code=status.HTTP_200_OK)
def test_image(request: Request):
# Create image
    im = Image.new('RGB',(1000,1000),'red')

    # Create buffer
    buffer = io.BytesIO()

    # Tell PIL to save as PNG into buffer
    im.save(buffer, 'PNG')

    # get the PNG-encoded image from buffer
    PNG = buffer.getvalue()

    # the only difference is the .decode("utf-8") added here:
    base64_encoded_image = base64.b64encode(PNG).decode("utf-8")

    return templates.TemplateResponse("display_image.html", {"request": request,  "myImage": base64_encoded_image})
<html>
   <head>
      <title>Display Uploaded Image</title>
   </head>
   <body>
      <h1>My Image 3<h1>
      <img src = "data:image/png;base64,{{ myImage | safe }}">
   </body>
</html>
Это включало устранение некоторых неполадок: Как отобразить изображение байтового типа в шаблоне HTML/Jinja2 с помощью FastAPI?

Пожалуйста, не забудьте правильно close объекты Image и BytesIO, чтобы освободить их память (см. соответствующие ответы здесь , а также здесь).

— 
Chris

Пидантическая модель внутри модели
Вопросы
PYTHON
Пидантическая модель внутри модели
Итак, я пытаюсь использовать существующую модель pydantic в другой модели pydantic, как я видел на примерах. Это мои пидантические модели:

class DriverCategoryOut(BaseModel):
    internal_id: int
    category: str

    class Config:
        orm_mode = True
class DocListOut(BaseModel):
    driver_categories: DriverCategoryOut

    class Config:
        orm_mode = True
Это мой код маршрута:

@router.get('/document', response_model=shemas.DocListOut)
def get_doc_list(db: Session = Depends(get_db)):
    driver_categories = db.query(DriverCategory).first()
    return driver_categories
Я получаю сообщение об ошибке:

pydantic.error_wrappers.ValidationError: 1 validation error for DocListOut
response -> driver_categories

field required (type=value_error.missing)
Если я перехожу на response_model=shemas.DriverCategoryOut, все работает нормально. Что не так с моей DocListOut моделью?

 01.01.2023 21:25
0
0
64
2
Данный вопрос помечен как решенный
 Ответы 2
 Ответ принят как подходящий
Эта строка driver_categories = db.query(DriverCategory).first() извлекает (и анализирует запись как а) DriverCategory. Предполагая, что это идеально сопоставляется с DriverCategoryOut, почему это должно быть автоматически проанализировано для объекта, у которого есть свойство типа DriverCategoryOut?

Вы можете попробовать следующее:

@router.get('/document', response_model=shemas.DocListOut)
def get_doc_list(db: Session = Depends(get_db)):
    driver_categories = db.query(DriverCategory).first()
    return {'driver_categories': driver_categories}
Теперь этот JSON будет преобразован в ваш response_model (в данном случае DocListOut).

 01.01.2023 21:32
есть еще один способ унаследовать вашу модель

class DocListOut(DriverCategoryOut):
      class Config:
            orm_mode = True
            # if you want to exclude some fields
            fields = {
                    "internal_id": {'exclude': True},
                  }
если ваш вывод - это списки

class DocListOut(BaseModel):
      driver_category: List[DriverCategoryOut] = []
      class Config:
            orm_mode=True

Операция удаления FASTAPI дает внутреннюю ошибку сервера
Вопросы
PYTHON
Операция удаления FASTAPI дает внутреннюю ошибку сервера
У меня есть этот код для операции удаления в БД Postgresql:

@app.delete("/posts/{id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_post(id: int):
    print("ID IS ",id)
    cursor.execute("""DELETE FROM public."Posts" WHERE id = %s""", (str(id),))
    deleted_post = cursor.fetchone()  <--- Showing error for this line
    conn.commit()
    if deleted_post is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail=f"Post with {id} not found")
    return Response(status_code=status.HTTP_204_NO_CONTENT)
Операции создания и чтения работают нормально. Если я передам существующий или несуществующий идентификатор для удаления, я получу ошибку внутреннего сервера 500. Однако строка удаляется из таблицы.

Если я прокомментирую эту строку deleted_post = cursor.fetchone(), она работает нормально.

Вот трассировка ошибок:

File "D:\Python Projects\FASTAPI\venv\lib\site-packages\anyio\to_thread.py", line 31, in run_sync
    return await get_asynclib().run_sync_in_worker_thread(
  File "D:\Python Projects\FASTAPI\venv\lib\site-packages\anyio\_backends\_asyncio.py", line 937, in run_sync_in_worker_thread
    return await future
  File "D:\Python Projects\FASTAPI\venv\lib\site-packages\anyio\_backends\_asyncio.py", line 867, in run
    result = context.run(func, *args)
  File "D:\Python Projects\FASTAPI\.\app\main.py", line 80, in delete_post
    deleted_post = cursor.fetchone()
  File "D:\Python Projects\FASTAPI\venv\lib\site-packages\psycopg2\extras.py", line 86, in fetchone
    res = super().fetchone()
psycopg2.ProgrammingError: no results to fetch
Что здесь происходит на самом деле??

 28.12.2022 13:44
0
0
54
2
Данный вопрос помечен как решенный
 Ответы 2
 Ответ принят как подходящий
Запрос DELETE не возвращает никаких результатов, поэтому вызов fetchone() вызывает ошибку. Попробуйте добавить предложение RETURNING:

@app.delete("/posts/{id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_post(id: int):
    print("ID IS ",id)
    cursor.execute("""DELETE FROM public."Posts" WHERE id = %s RETURNING id""", (str(id),))
    deleted_post = cursor.fetchone()  <--- Showing error for this line
    conn.commit()
    if deleted_post is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail=f"Post with {id} not found")
    return Response(status_code=status.HTTP_204_NO_CONTENT)
 28.12.2022 14:00
Paweł уже обнаружил проблему, но я настоятельно рекомендую вам использовать ORM, это упрощает вещи:

def delete_post(id: int, db: Session = Depends(get_db)):
    post = db.query(Posts).get(id)
    if post is None:
        raise
    post.delete() # depends on session settings you need to do db.commit() or not
    return Response()
Для настройки зависимостей смотрите здесь:

Как отправить письмо в fastapi с помощью шаблона
Вопросы
PYTHON
Как отправить письмо в fastapi с помощью шаблона
conf = ConnectionConfig(
    USERNAME=config.mail_username,
    PASSWORD=config.mail_pasword,
    FROM=config.mail_from,
    PORT=config.mail_port,
    SERVER=config.mail_server,
    USE_CREDENTIALS=True,
    VALIDATE_CERTS=True,
    TEMPLATE_FOLDER='./templates'
)

async def send_email(email_to: EmailSchema, body:EmailSchema) -> JSONResponse:
    message = MessageSchema(
        subject = "fastapi",
        recipients=[email_to],
        body=body,
        subtype = "html"
    )

    fm = FastMail(conf)
    
    await fm.send_message(message,template_name='email.html')

data = "xyz"
@app.get("/email")
async def endpoint_send_email(
): 
    await send_email(
        email_to=email_to,
        body=data
        )


email.html

<!DOCTYPE html>
<html>
  <head>
  <title>email</title>
  </head>
  <body>
    <h4>Hi Team</h4>
    <p>get the data of date {{date}}</p><br />
    {{body.data}}
    <br /><br />
    <h4>thanks,</h4>
    <h4>Team</h4>
  </body>
</html>
Когда я пытаюсь отправить электронное письмо без использования имени шаблона, его отправка со значениями тела xyz (обычный)

Мне нужно отправить в этом формате шаблона, если я использую имя шаблона, я получаю ошибку ниже. Помогите найти решение спасибо

ошибка типа: объект posixpath не является итерируемым python

 14.12.2022 12:19
0
0
112
2
Данный вопрос помечен как решенный
 Ответы 2
 Ответ принят как подходящий
ну, вы передаете свой HTML-файл в виде текста, поэтому вы не получите электронное письмо в виде шаблона. вы можете использовать библиотеку jinja2, чтобы отобразить свой шаблон и правильно его отправить. вы создаете переменную окружения

env = Environment(
   loader=PackageLoader('app', 'templates'),#where you are getting the templates from
   autoescape=select_autoescape(['html', 'xml']))
template = env.get_template(template_name)
html = template.render(
    name=email,
    code=code,
    subject=subject
)
затем вы используете MessageSchema и отправляете его, как вы это делали! надеюсь, мой ответ поможет вам

 14.12.2022 17:24
env = Environment(
    loader=FileSystemLoader(searchpath = "./templates"),
    autoescape=select_autoescape(['html', 'xml'])
)
async def sendMail(url,email_to: EmailSchema):
  conf = ConnectionConfig(
    USERNAME=config.mail_username,
    PASSWORD=config.mail_pasword,
    FROM=config.mail_from,
    PORT=config.mail_port,
    SERVER=config.mail_server,
    USE_CREDENTIALS=True,
    VALIDATE_CERTS=True,
 )
  template = env.get_template('email.html')
   html = template.render(
        url=url,
  )
  message = MessageSchema(
        subject = "fastapi",
        recipients=[email_to],
        body=body,
        subtype = "html"
   )

  fm = FastMail(conf)
    await fm.send_message(message)

data = "xyz"
@app.get("/email")
async def endpoint_send_email(
): 
    await send_email(
        email_to=email_to,
        url=data
    )

Не удалось собрать столбцы первичного ключа для сопоставленной таблицы SQLAlchemy
Вопросы
PYTHON
Не удалось собрать столбцы первичного ключа для сопоставленной таблицы SQLAlchemy
Когда я пытаюсь запустить приложение FastAPI, появляется эта ошибка.

sqlalchemy.exc.ArgumentError: Mapper mapped class DTabelle->dtabelle could not assemble any primary key columns for mapped table 'dtabelle'
Когда я удаляю файл d_tabelle.py, все работает.

Я думаю, что это может быть дубликат this, но я не нашел для себя ответа.

Я думаю, все в порядке. С таблицами O и V все в порядке. Я не вижу разницы между таблицей V или O и таблицей D.

Эти 4 файла находятся в одном каталоге d_tabelle.py, v_tabelle.py, o_tabelle.py,t_tabelle.py.

d_таблица.py:


from sqlmodel import SQLModel, Field, Relationship
from typing import Optional, List, Union
from datetime import datetime

from models.t_tabelle import TTabelle


class DTabelleBase(SQLModel):
    __tablename__ = 'd_tabelle'
    __table_args__ = {'schema': 'CDR_CIRPACK'}
    d_id: Optional[int] = Field(default=None, primary_key=True)
    dfi: datetime
    t_id: Optional[int] = Field(default=None, foreign_key = "cdr_cirpack.t_tabelle.t_id")
    signalpointcode: Optional[str]
    callident: Optional[str]


class DTabelleRead(DTabelleBase):
    dfi: datetime


class DTabelle(SQLModel, table=True):
    # rel_t_tabelle_t_id: Union[TTabelle, None] = Relationship(back_populates='rel_d_tabelle_t_id')
    rel_t_tabelle_t_id: Union[TTabelle, None] = Relationship(back_populates='rel_d_tabelle_t_id', sa_relationship_kwargs = {'primaryjoin': 'TTabelle.t_id==DTabelle.t_id'})
о_таблица.py:


from sqlmodel import SQLModel, Relationship, Field, Relationship
from typing import Optional, Union, List
from datetime import datetime

from models.t_tabelle import TTabelle


class OTabelleBase(SQLModel):
    __tablename__ = 'o_tabelle'
    __table_args__ = {'schema': 'CDR_CIRPACK'}
    o_id: Optional[int] = Field(default=None, primary_key=True)
    dfi: datetime
    t_id: Optional[int] = Field(default=None, foreign_key = "cdr_cirpack.t_tabelle.t_id")
    dur: Optional[str]
    bytesend: Optional[str]
    byterec: Optional[str]
    packsent: Optional[str]
    packrec: Optional[str]
    packloss: Optional[str]
    averjitter: Optional[str]
    avertransdelay: Optional[str]
    addinfo: Optional[str]
    ipport: Optional[str]


class OTabelleRead(OTabelleBase):
    packSent: str
    packRec: str
    packLoss: str
    averJitter: str
    addInfo: str
    ipPort: str


class OTabelle(OTabelleBase, table=True):
    # rel_t_tabelle_t_id: Union[TTabelle, None] = Relationship(back_populates='rel_o_tabelle_t_id')
    rel_t_tabelle_t_id: Union[TTabelle, None] = Relationship(back_populates='rel_o_tabelle_t_id', sa_relationship_kwargs = {'primaryjoin': 'TTabelle.t_id==OTabelle.t_id'})


v_tablele.py



from sqlmodel import SQLModel, Field, Relationship
from typing import Optional, List, Union
from datetime import datetime

from models.t_tabelle import TTabelle


class VTabelleBase(SQLModel):
    __tablename__ = 'v_tabelle'
    __table_args__ = {'schema': 'CDR_CIRPACK'}
    v_id: Optional[int] = Field(default=None, primary_key=True)
    dfi: datetime
    t_id: Optional[int] = Field(default=None, foreign_key = "cdr_cirpack.t_tabelle.t_id")
    codecpaytype: Optional[str]
    ptime: Optional[str]
    silsupp: Optional[str]
    echocancel: Optional[str]
    event: Optional[str]
    addinfo: Optional[str]


class VTabelleRead(VTabelleBase):
    codecPayType: str
    echoCancel: str
    event: str
    addInfo: str


class VTabelle(VTabelleBase, table=True):
    # rel_t_tabelle_t_id: Union[TTabelle, None] = Relationship(back_populates='rel_v_tabelle_t_id')

    # # relations:
    rel_t_tabelle_t_id: Union[TTabelle, None] = Relationship(
        back_populates='rel_v_tabelle_t_id',
        sa_relationship_kwargs = {'primaryjoin': 'TTabelle.t_id==VTabelle.t_id'}
    )

t_tablele.py


from sqlmodel import SQLModel, Field, Relationship
from typing import Optional, List
from datetime import datetime


class TTabelleBase(SQLModel):
    __tablename__ = 't_tabelle'
    __table_args__ = {'schema': 'CDR_CIRPACK'}
    t_id: Optional[int] = Field(default=None, primary_key=True)
    dfi: datetime
    flag: Optional[str]
    account: Optional[str]
    direction: Optional[str]
    cstartdate: Optional[str]
    cstarttime: Optional[str]
    condur: Optional[str]
    conringdur: Optional[str]
    totcalldur: Optional[str]
    ipaddr: Optional[str]
    accesscode: Optional[str]
    accesstype: Optional[str]
    pres: Optional[str]
    numplan_partynum: Optional[str]
    category: Optional[str]
    fwdcallind: Optional[str]
    natcallingnum: Optional[str]
    callingnum: Optional[str]
    nataddcallpartyaddr: Optional[str]
    addcallpartyaddr: Optional[str]
    accesstypecallnum: Optional[str]
    numplancallparty: Optional[str]
    natcallednum: Optional[str]
    callednum: Optional[str]
    catrealcallnum: Optional[str]
    typerealcallnum: Optional[str]
    natrealcallnum: Optional[str]
    realcallnum: Optional[str]
    billing: Optional[str]
    servcode: Optional[str]
    relloc: Optional[str]
    cause: Optional[str]
    opid: Optional[str]
    inccid: Optional[str]
    outcid: Optional[str]
    intrunkgroup: Optional[str]
    outtrunkgroup: Optional[str]
    unit: Optional[str]
    ts: Optional[datetime]


class TTabelleRead(TTabelleBase):
    t_id: int
    account: str
    direction: str
    cStartDate: str
    cStartTime: str
    conDur: str
    totCallDur: str
    pres: str
    natCallingNum: str
    callingNum: str
    addCallPartyAddr: str
    realCallNum: str
    relLoc: str
    cause: str
    inTrunkGroup: str
    outTrunkGroup: str


class TTabelle(TTabelleBase, table=True):
    rel_v_tabelle_t_id: List['VTabelle'] = Relationship(back_populates='rel_t_tabelle_t_id', sa_relationship_kwargs = {'primaryjoin': 'TTabelle.t_id==VTabelle.t_id'})
    rel_o_tabelle_t_id: List['OTabelle'] = Relationship(back_populates='rel_t_tabelle_t_id', sa_relationship_kwargs = {'primaryjoin': 'TTabelle.t_id==OTabelle.t_id'})
    rel_d_tabelle_t_id: List['DTabelle'] = Relationship(back_populates='rel_t_tabelle_t_id', sa_relationship_kwargs = {'primaryjoin': 'TTabelle.t_id==DTabelle.t_id'})


 05.12.2022 12:16
0
0
60
2
Данный вопрос помечен как решенный
 Ответы 2
 Ответ принят как подходящий
DTabelle не наследуется от DTabelleBase. Таким образом, у него нет первичного ключа, т.е. как d_id: Optional[int] = Field(default=None, primary_key=True). Принимая во внимание, что у OTabelle есть базовый класс с первичным ключом. По крайней мере я так понимаю эту настройку я раньше не использовал sqlmodel.

Поэтому либо добавьте в DTabelle базовый класс с первичным ключом, либо добавьте каталог столбца первичного ключа в DTabelle.

 05.12.2022 19:47
изменить это:

class DTabelle(SQLModel, table=True):
    rel_t_tabelle_t_id: Union[TTabelle, None] = Relationship(back_populates='rel_d_tabelle_t_id', sa_relationship_kwargs = {'primaryjoin': 'TTabelle.t_id==DTabelle.t_id'})
к этому:

class DTabelle(DTabelleBase, table=True):
    rel_t_tabelle_t_id: Union[TTabelle, None] = Relationship(back_populates='rel_d_tabelle_t_id', sa_relationship_kwargs = {'primaryjoin': 'TTabelle.t_id==DTabelle.t_id'})

Использование обеих моделей pydantic в качестве ответа вызывает ошибку
Вопросы
PYTHON
Использование обеих моделей pydantic в качестве ответа вызывает ошибку
У меня есть реализация fastapi, где main.py:

@app.get(
    "/licence_ol/",
    summary = "Query Licence info by product id",
    response_description = "Successful Query",
    response_model=list[EvergreenOutput],
    tags=[Tags.items]
)
def get_product_id(session: Session = Depends(get_session))-> list[EvergreenOutput]: 

    query = select(Evergreen).where(Evergreen.product_id == Mapping.eim_product_id).limit(200)
    
    return session.exec(query).fetchall()
И следующее schemas.py:

class Mapping(SQLModel,table=True):
    id_seq: Optional[int] = Field(default=None,primary_key=True)
    eim_product_id: Optional[int] = None
    mem_product_id: Optional[int] = None
    vendor: Optional[str] = None
    name: Optional[str] = None
    eim_name: Optional[str] = None
    product_alias: Optional[str] = None
    lev: Optional[int] = None
    manufacturer: Optional[str] = None

class MappingOutput(SQLModel):
    eim_product_id: Optional[int] = None
    mem_product_id: Optional[int] = None
    vendor: Optional[str] = None
    name: Optional[str] = None
    eim_name: Optional[str] = None
    product_alias: Optional[str] = None
    lev: Optional[int] = None
    manufacturer: Optional[str] = None


class Evergreen(SQLModel,table=True):
    id_seq: Optional[int] = Field(default=None,primary_key=True)
    product_id: int 
    phase_type: Optional[str] = None
    phase_start: Optional[date] = None
    phase_end: Optional[date] = None
    product_name: Optional[str] = None
    software_product_version_name: Optional[str] = None
    software_product_version_id: Optional[int] = None

class EvergreenOutput(SQLModel):
    product_id: int 
    phase_type: Optional[str] = None
    phase_start: Optional[date] = None
    phase_end: Optional[date] = None
    product_name: Optional[str] = None
    software_product_version_name: Optional[str] = None
    software_product_version_id: Optional[int] = None
Первый main.py работает, однако, если я хочу использовать как EvergreenOutput, так и MappingOutput в качестве моделей ответов, выдает ошибку:

@app.get(
    "/licence_ol/",
    summary = "Query Licence info by product id",
    response_description = "Successful Query",
    response_model=list[EvergreenOutput,MappingOutput],
    tags=[Tags.items]
)
def get_product_id(session: Session = Depends(get_session))-> list[EvergreenOutput,MappingOutput]: 

    query = select(Evergreen,Mapping).where(Evergreen.product_id == Mapping.eim_product_id).limit(200)
    
    return session.exec(query).fetchall()
ошибка:

INFO:     127.0.0.1:53172 - "GET /licence_ol/ HTTP/1.1" 500 Internal Server Error
ERROR:    Exception in ASGI application
Traceback (most recent call last):
  File "C:\Users\45291029\Documents\venv\ml\lib\site-packages\uvicorn\protocols\http\httptools_impl.py", line 404, in run_asgi
    result = await app(  # type: ignore[func-returns-value]
  File "C:\Users\45291029\Documents\venv\ml\lib\site-packages\uvicorn\middleware\proxy_headers.py", line 78, in __call__
    return await self.app(scope, receive, send)
  File "C:\Users\45291029\Documents\venv\ml\lib\site-packages\fastapi\applications.py", line 270, in __call__
    await super().__call__(scope, receive, send)
  File "C:\Users\45291029\Documents\venv\ml\lib\site-packages\starlette\applications.py", line 124, in __call__
    await self.middleware_stack(scope, receive, send)
  File "C:\Users\45291029\Documents\venv\ml\lib\site-packages\starlette\middleware\errors.py", line 184, in __call__
    raise exc
  File "C:\Users\45291029\Documents\venv\ml\lib\site-packages\starlette\middleware\errors.py", line 162, in __call__
    await self.app(scope, receive, _send)
  File "C:\Users\45291029\Documents\venv\ml\lib\site-packages\starlette\middleware\exceptions.py", line 75, in __call__
    raise exc
  File "C:\Users\45291029\Documents\venv\ml\lib\site-packages\starlette\middleware\exceptions.py", line 64, in __call__
    await self.app(scope, receive, sender)
  File "C:\Users\45291029\Documents\venv\ml\lib\site-packages\fastapi\middleware\asyncexitstack.py", line 21, in __call__
    raise e
  File "C:\Users\45291029\Documents\venv\ml\lib\site-packages\fastapi\middleware\asyncexitstack.py", line 18, in __call__
    await self.app(scope, receive, send)
  File "C:\Users\45291029\Documents\venv\ml\lib\site-packages\starlette\routing.py", line 680, in __call__
    await route.handle(scope, receive, send)
  File "C:\Users\45291029\Documents\venv\ml\lib\site-packages\starlette\routing.py", line 275, in handle
    await self.app(scope, receive, send)
  File "C:\Users\45291029\Documents\venv\ml\lib\site-packages\starlette\routing.py", line 65, in app
    response = await func(request)
  File "C:\Users\45291029\Documents\venv\ml\lib\site-packages\fastapi\routing.py", line 253, in app
    content = await serialize_response(
  File "C:\Users\45291029\Documents\venv\ml\lib\site-packages\fastapi\routing.py", line 139, in serialize_response
    raise ValidationError(errors, field.type_)
pydantic.error_wrappers.ValidationError: 200 validation errors for EvergreenOutput
response -> 0 -> product_id
  field required (type=value_error.missing)
Ответ без предоставления аннотации типа имеет следующую структуру:

[
  {
    "Evergreen": {
      "id_seq": 344,
      "phase_start": "2011-07-22",
      "product_name": "HTTP Server (IHS)",
      "software_product_version_id": 359483,
      "phase_end": "2018-04-30",
      "product_id": 359496,
      "phase_type": "Generally Available",
      "software_product_version_name": "IBM HTTP Server v8.0"
    },
    "Mapping": {
      "eim_product_id": 359496,
      "mem_product_id": 19,
      "name": "HTTP Server (IHS)",
      "product_alias": "IHS",
      "manufacturer": "IBM",
      "id_seq": 0,
      "vendor": "IBM",
      "eim_name": "HTTP Server (IHS)",
      "lev": 100
    }
  },
 05.12.2022 05:47
0
0
68
2
Данный вопрос помечен как решенный
 Ответы 2
Похоже, ваш запрос не соответствует вашей пидантической модели.

Попробуйте это,


class EvergreenOutput(SQLModel):
    product_id: int
    phase_type: Optional[str] = None
    phase_start: Optional[date] = None
    phase_end: Optional[date] = None
    product_name: Optional[str] = None
    software_product_version_name: Optional[str] = None
    software_product_version_id: Optional[int] = None
    # below line is added
    mapping: list[MappingOutput]

...


@app.get(
    "/licence_ol/",
    summary = "Query Licence info by product id",
    response_description = "Successful Query",
    response_model=list[EvergreenOutput],
    tags=[Tags.items]
)
def get_product_id(session: Session = Depends(get_session)) -> list[EvergreenOutput, MappingOutput]:
    query = select(Evergreen, Mapping).where(Evergreen.product_id == Mapping.eim_product_id).limit(200)

    return session.exec(query).fetchall()
 05.12.2022 07:06
 Ответ принят как подходящий
Response_model является статической, ее нельзя переключать в зависимости от данных.

Ваше сообщение об ошибке

pydantic.error_wrappers.ValidationError: 200 ошибок проверки для EvergreenOutput ответ -> 0 -> product_id

указанный 'product_id' не найден в сопоставлениях.

response_model в операции пути должна быть одна модель или список из одной модели.

Если вы хотите вернуть отдельные 2 словаря в один response, объедините их в одиночные модели pydantic, как показано ниже.

class FuncResult(BaseModel):
    Evergreen: EvergreenOutput
    Mapping: MappingOutput

@app.get(
    "/licence_ol/",
    summary = "Query Licence info by product id",
    response_description = "Successful Query",
    response_model=list[FuncResult],
    tags=[Tags.items]
)
def get_product_id(session: Session = Depends(get_session)) -> list[EvergreenOutput, MappingOutput]:
    query = select(Evergreen, Mapping).where(Evergreen.product_id == Mapping.eim_product_id).limit(200)
    return  session.exec(query).fetchall()

да, это все спасибо. Я пробовал class UnEverOut(EvergreenOutput,MappingOutput): pass, но это тоже не сработало, так как он объединил слова

— 
moth
 05.12.2022 08:22
Я никогда не унаследовал от тебя модели. Пожалуйста, прочтите еще раз то, что я написал.

Удалить записи из коллекции mongodb после пропуска с помощью beanie ODM
Вопросы
MONGODB
Удалить записи из коллекции mongodb после пропуска с помощью beanie ODM
Я хочу удалить некоторые записи после сортировки и пропустить элементы, но этот запрос всегда удаляет все записи после find.as если сортировка и пропуск ничего не делают ':

await Book.find(Book.owner.id == user.id).sort("-created_at").skip(2).delete()
 03.12.2022 14:52
0
1
96
2
Данный вопрос помечен как решенный
 Ответы 2
 Ответ принят как подходящий
Для достижения цели вы можете сначала получить документы, применив функцию пропуска, а затем использовать функцию deleteMany.

Примечание. Вы также можете использовать sort({_id:-1}) для сортировки документов.

См. Пример кода ниже:

const data = await Book.find(pass-your-query-here).sort({_id:-1}).skip(2);
        if (data.length>0){
          const ress = await Book.deleteMany({ _id: {$lte: data[0]._id } });
        }
 03.12.2022 17:56
Мы можем удалить элементы по функциональности шапочки следующим образом:

from app.models.book_model import Book
from beanie.operators import In

books= await Book.find(Book.owner.id == user.id).sort("-created_at").skip(2).to_list()

books_del= Book.find(In(Book.id, [_.id for _ in books]))
await books_del.delete()

Добавьте пользовательский javascript на веб-страницу документов FastAPI Swagger UI в Python
Вопросы
PYTHON
Добавьте пользовательский javascript на веб-страницу документов FastAPI Swagger UI в Python
Я хочу загрузить свой пользовательский файл или код javascript на веб-страницу пользовательского интерфейса FastAPI Swagger, чтобы добавить динамическое взаимодействие при создании объекта FastAPI.

Например, в пользовательском интерфейсе Swagger на веб-странице документов я хотел бы

<script src = "custom_script.js"></script> 
или

<script> alert('worked!') </script>
Я попытался:

api = FastAPI(docs_url=None)

api.mount("/static", StaticFiles(directory = "static"), name = "static")

@api.get("/docs", include_in_schema=False)
async def custom_swagger_ui_html():
    return get_swagger_ui_html(
        openapi_url=api.openapi_url,
        title=api.title + " - Swagger UI",
        oauth2_redirect_url=api.swagger_ui_oauth2_redirect_url,
        swagger_js_url = "/static/sample.js",
        swagger_css_url = "/static/sample.css",
    )
Но это не работает. Есть ли способ просто вставить мой собственный код javascript на веб-страницу документов FastAPI Swagger UI с Python?

 02.12.2022 21:14
3
0
173
2
Данный вопрос помечен как решенный
 Ответы 2
Наконец я заставил его работать. Вот что я сделал:

from fastapi.openapi.docs import (
    get_redoc_html,
    get_swagger_ui_html,
    get_swagger_ui_oauth2_redirect_html,
)
from fastapi.staticfiles import StaticFiles

api = FastAPI(docs_url=None) 

path_to_static = os.path.join(os.path.dirname(__file__), 'static')
logger.info(f"path_to_static: {path_to_static}")
api.mount("/static", StaticFiles(directory=path_to_static), name = "static")

@api.get("/docs", include_in_schema=False)
        async def custom_swagger_ui_html():
            return get_swagger_ui_html(
                openapi_url=api.openapi_url,
                title = "My API",
                oauth2_redirect_url=api.swagger_ui_oauth2_redirect_url,
                swagger_js_url = "/static/custom_script.js",
                # swagger_css_url = "/static/swagger-ui.css",
                # swagger_favicon_url = "/static/favicon-32x32.png",
            )
Важные заметки:

Убедитесь, что статический путь правильный и все ваши файлы находятся в статической папке, по умолчанию статическая папка должна находиться в той же папке, что и скрипт, создавший объект FastAPI.
Например:

 -parent_folder
     Build_FastAPI.py
     -static_folder
         custom_script.js
         custom_css.css
Найдите swagger-ui-bundle.js в Интернете и скопируйте и вставьте все его содержимое в custom_script.js, затем добавьте свой пользовательский код javascript в начало или в конец custom_script.js.
Например:

setTimeout(function(){alert('My custom script is working!')}, 5000);
...
.....
/*! For license information please see swagger-ui-bundle.js.LICENSE.txt */
            !function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.SwaggerUIBundle=t():e.SwaggerUIBundle=t()}
...
.....
Сохраните и обновите браузер, все готово!
ЕСЛИ КТО-ТО ЗНАЕТ ЛУЧШИЙ ОТВЕТ, ДОБРО ПОЖАЛОВАТЬ, ЛУЧШИЙ ОТВЕТ БУДЕТ ПРИНЯТ!

 03.12.2022 10:41
 Ответ принят как подходящий
Если вы посмотрите на функцию get_swagger_ui_html, импортированную из fastapi.openapi.docs, вы увидите, что HTML для страницы документов создается вручную посредством интерполяции/конкатенации строк. Было бы тривиально изменить эту функцию, включив в нее дополнительный элемент сценария, как показано ниже:

# custom_swagger.py

import json
from typing import Any, Dict, Optional

from fastapi.encoders import jsonable_encoder
from fastapi.openapi.docs import swagger_ui_default_parameters
from starlette.responses import HTMLResponse

def get_swagger_ui_html(
    *,
    openapi_url: str,
    title: str,
    swagger_js_url: str = "https://cdn.jsdelivr.net/npm/swagger-ui-dist@4/swagger-ui-bundle.js",
    swagger_css_url: str = "https://cdn.jsdelivr.net/npm/swagger-ui-dist@4/swagger-ui.css",
    swagger_favicon_url: str = "https://fastapi.tiangolo.com/img/favicon.png",
    oauth2_redirect_url: Optional[str] = None,
    init_oauth: Optional[Dict[str, Any]] = None,
    swagger_ui_parameters: Optional[Dict[str, Any]] = None,
    custom_js_url: Optional[str] = None,
) -> HTMLResponse:
    current_swagger_ui_parameters = swagger_ui_default_parameters.copy()
    if swagger_ui_parameters:
        current_swagger_ui_parameters.update(swagger_ui_parameters)

    html = f"""
    <!DOCTYPE html>
    <html>
    <head>
    <link type = "text/css" rel = "stylesheet" href = "{swagger_css_url}">
    <link rel = "shortcut icon" href = "{swagger_favicon_url}">
    <title>{title}</title>
    </head>
    <body>
    <div id = "swagger-ui">
    </div>
    """
    
    if custom_js_url:
        html += f"""
        <script src = "{custom_js_url}"></script>
        """

    html += f"""
    <script src = "{swagger_js_url}"></script>
    <!-- `SwaggerUIBundle` is now available on the page -->
    <script>
    const ui = SwaggerUIBundle({{
        url: '{openapi_url}',
    """

    for key, value in current_swagger_ui_parameters.items():
        html += f"{json.dumps(key)}: {json.dumps(jsonable_encoder(value))},\n"

    if oauth2_redirect_url:
        html += f"oauth2RedirectUrl: window.location.origin + '{oauth2_redirect_url}',"

    html += """
    presets: [
        SwaggerUIBundle.presets.apis,
        SwaggerUIBundle.SwaggerUIStandalonePreset
        ],
    })"""

    if init_oauth:
        html += f"""
        ui.initOAuth({json.dumps(jsonable_encoder(init_oauth))})
        """

    html += """
    </script>
    </body>
    </html>
    """
    return HTMLResponse(html)
Добавлен новый необязательный параметр с именем custom_js_url:

    custom_js_url: Optional[str] = None,
Если для этого параметра указано значение, элемент скрипта вставляется в DOM непосредственно перед элементом скрипта для swagger_js_url (это произвольный выбор, вы можете изменить расположение пользовательского элемента скрипта в зависимости от ваших потребностей).

    if custom_js_url:
        html += f"""
        <script src = "{custom_js_url}"></script>
        """
Если значение не указано, созданный HTML-код совпадает с исходной функцией.

Не забудьте обновить операторы импорта для get_swagger_ui_html и обновить функцию для конечной точки /docs, как показано ниже:

from fastapi.openapi.docs import (
    get_redoc_html,
    get_swagger_ui_oauth2_redirect_html,
)
from fastapi.staticfiles import StaticFiles

from custom_swagger import get_swagger_ui_html

api = FastAPI(docs_url=None) 

path_to_static = os.path.join(os.path.dirname(__file__), 'static')
logger.info(f"path_to_static: {path_to_static}")
api.mount("/static", StaticFiles(directory=path_to_static), name = "static")

@api.get("/docs", include_in_schema=False)
        async def custom_swagger_ui_html():
            return get_swagger_ui_html(
                openapi_url=api.openapi_url,
                title = "My API",
                oauth2_redirect_url=api.swagger_ui_oauth2_redirect_url,
                swagger_js_url = "/static/swagger-ui-bundle.js",
                swagger_css_url = "/static/swagger-ui.css",
                # swagger_favicon_url = "/static/favicon-32x32.png",
                custom_js_url = "/static/custom_script.js",
            )
Это все еще довольно хакерское решение, но я думаю, что оно намного чище и проще в сопровождении, чем размещение кучи пользовательского javascript внутри файла swagger-ui-bundle.js.


Как загрузить файл csv с помощью шаблонов Jinja2 и FastAPI и вернуть его после модификации?
Вопросы
PYTHON
Как загрузить файл csv с помощью шаблонов Jinja2 и FastAPI и вернуть его после модификации?
Я использую FastAPI для загрузки CSV-файла, внесения в него некоторых изменений, а затем возвращаю его на HTML-страницу. Я использую Jinja2 в качестве механизма шаблонов и HTML во внешнем интерфейсе.

Как я могу загрузить файл csv с помощью шаблона Jinja2, изменить его, а затем вернуть клиенту?

Код Python
from fastapi.templating import Jinja2Templates
from fastapi import FastAPI, File, UploadFile, Request
from io import BytesIO
import pandas as pd
import uvicorn

app = FastAPI()
templates = Jinja2Templates(directory = "templates")

@app.get("/")
def form_post(request: Request):
result = "upload file"
return templates.TemplateResponse('home.html', context = {'request': request, 'result': result})

@app.post("/")
def upload(request: Request, file: UploadFile = File(...)):

    contents1 = file.file.read()
    buffer1 = BytesIO(contents1)
    test1 = pd.read_csv(buffer1)
    buffer1.close()
    file.file.close()
    test1 = dict(test1.values)
    
    return templates.TemplateResponse('home.html', context = {'request': request, 'result': test1})

if __name__ == "__main__":
    uvicorn.run(app)
HTML-код
\<!DOCTYPE html\>
\<html lang = "en"\>
\<head\>
\<meta charset = "UTF-8"\>
\<title\>RUL_PREDICTION\</title\>
\</head\>
\<body\>
\<h1\>RUL PREDICTION\</h1\>
\<form method = "post"\>
\<input type = "file" name = "file" id = "file"/\>
\<button type = "submit"\>upload\</button\>
\</form\>
\<p\>{{ result }}\</p\>
\</body\>
\</html\>
 25.11.2022 14:36
1
5
180
2
Данный вопрос помечен как решенный
 Ответы 2
Это может сработать:

@app.post("/")
def upload(file: UploadFile):

    with open("temp.csv", "wb") as f:
        for row in file.file:
            f.write(row)
    
    with open("temp.csv", "r", encoding = "utf-8") as csv:
        # modifications
    

    return FileResponse(path = "temp.csv", filename = "new.csv", media_type = "application/octet-stream")
 25.11.2022 14:55
 Ответ принят как подходящий
Приведенный ниже рабочий пример получен из ответов здесь , здесь , а также здесь , здесь и здесь, на которые я предлагаю вам взглянуть для более подробной информации и объяснение.

Образец данных
данные.csv

Id,name,age,height,weight
1,Alice,20,62,120.6
2,Freddie,21,74,190.6
3,Bob,17,68,120.0
Вариант 1. Верните измененные данные в новый CSV-файл.
app.py

from fastapi import FastAPI, File, UploadFile, Request, Response, HTTPException
from fastapi.templating import Jinja2Templates
from io import BytesIO
import pandas as pd

app = FastAPI()
templates = Jinja2Templates(directory='templates')

@app.post('/upload')
def upload(file: UploadFile = File(...)):
    try:
        contents = file.file.read()
        buffer = BytesIO(contents) 
        df = pd.read_csv(buffer)
    except:
        raise HTTPException(status_code=500, detail='Something went wrong')
    finally:
        buffer.close()
        file.file.close()

    # remove a column from the DataFrame
    df.drop('age', axis=1, inplace=True)
    
    headers = {'Content-Disposition': 'attachment; filename = "modified_data.csv"'}
    return Response(df.to_csv(), headers=headers, media_type='text/csv')
    

@app.get('/')
def main(request: Request):
    return templates.TemplateResponse('index.html', {'request': request})
шаблоны/index.html

<!DOCTYPE html>
<html>
   <head>
      <meta charset = "utf-8">
      <meta name = "viewport" content = "width=device-width, initial-scale=1">
   </head>
   <body>
      <form method = "post" action = "/upload"  enctype = "multipart/form-data">
         <label for = "csvFile">Choose a CSV file</label>
         <input type = "file" id = "csvFile" name = "file" onchange = "enableSubmitBtn();"><br><br>
         <input type = "submit" id = "submitBtn" value = "submit" disabled>
      </form>
      <script>
         function enableSubmitBtn() {
            document.getElementById('submitBtn').removeAttribute("disabled");
         }
      </script>
   </body>
</html>
Вариант 2. Вернуть измененные данные в новый шаблон Jinja2.
Если вы хотите вернуть новый шаблон Jinja2 с измененными данными вместо CSV-файла, как показано выше, вы можете использовать приведенное ниже.

Способ 1
Используйте pandas.DataFrame.to_html() для отображения DataFrame в виде HTML-таблицы. При желании вы можете использовать параметр classes в функции to_html() для передачи имени class или списка имен, которые будут использоваться в таблице стилей в вашем интерфейсе для стилизации таблицы. Кроме того, вы можете удалить border, указав border=0 в to_html().

app.py

# ... (rest of code is same as in Option 1)

@app.post('/upload')
def upload(request: Request, file: UploadFile = File(...)):
    # ... (rest of code is same as in Option 1)

    context = {'request': request, 'table': df.to_html()}
    return templates.TemplateResponse('results.html', context)

шаблоны/результаты.html

<!DOCTYPE html>
<html>
    <body>{{ table | safe }}</body>
</html>
Способ 2
Используйте pandas.DataFrame.to_dict(), чтобы преобразовать DataFrame в словарь и вернуть его.

app.py

# ... (rest of code is same as in Option 1)

@app.post('/upload')
def upload(request: Request, file: UploadFile = File(...)):
    # ... (rest of code is same as in Option 1)

    context = {'request': request, 'data': df.to_dict(orient='records'), 'columns': df.columns.values}
    return templates.TemplateResponse('results.html', context)

шаблоны/результаты.html

<!DOCTYPE html>
<html>
    <body>
        <table style = "width:50%">
            <tr>
                {% for c in columns %}<td>{{ c }}</td>{% endfor %}
            </tr>
            {% for d in data %}
                <tr>
                    {% for v in d.values() %}
                        <td>{{ v }}</td>
                    {% endfor %}
                    <br>
                </tr>
            {% endfor %}
        </table>
    </body>
</html>


Почему url_for генерирует URL-адрес с localhost в качестве имени хоста вместо имени домена?
Вопросы
PYTHON
Почему url_for генерирует URL-адрес с localhost в качестве имени хоста вместо имени домена?
У меня есть веб-приложение FastAPI, использующее шаблоны Jinja2, которое отлично работает на localhost, но не в рабочей среде. Проблема в том, что URL-адреса для JavaScript и других файлов static неправильно генерируются. Я развернул его на экземпляре EC2, используя gunicorn и nginx.

У меня есть эта строка кода в моем файле HTML:

<script src = "{{ url_for('static', path='js/login_signup.js') }}"></script>
Проблема в том, что он генерирует URL-адрес следующим образом:

<script src = "http://127.0.0.1:8000/static/js/login_signup.js"></script>
Я хочу создать что-то вроде этого:

<script src = "http://my_domain.com/static/js/login_signup.js"></script>
 23.11.2022 16:13
1
1
196
2
Данный вопрос помечен как решенный
 Ответы 2
Подавать на 0.0.0.0 вместо 127.0.0.1. Если вы используете uvicorn, который является веб-сервером по умолчанию для FastAPI, вам необходимо передать --host 0.0.0.0 при запуске сервера. Для других серверов найдите эквивалентный флаг.

 23.11.2022 16:16
 Ответ принят как подходящий
Поскольку вы упомянули, что используете gunicorn, вам нужно убедиться, что вы привязываете gunicorn к 0.0.0.0. Например:

gunicorn --bind 0.0.0.0:80 
Кроме того, поскольку вы используете Nginx, обязательно настройте раздел конфигурации «сервер», как описано здесь:

 server {
        server_name example.com
        location / {
            proxy_redirect     off;
            proxy_set_header   X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header   X-Forwarded-Proto $scheme;
            proxy_set_header   Host $host;
            proxy_set_header   X-Real-IP $remote_addr;
            proxy_set_header   X-Forwarded-Host $server_name;

           ...
        }


    listen 443 ssl; 
Если описанное выше не помогло решить проблему, см. другие варианты ниже.

Опция 1
Вместо этого вы можете использовать реальные пути, как описано здесь и здесь. Пример:

<link href = "static/styles.css'" rel = "stylesheet">
Вариант 2
Вы можете создать пользовательскую функцию (например, my_url_for() в примере ниже), которая будет использоваться для замены доменного имени URL-адреса (имени хоста) — вы можете опустить номер порта при замене имени хоста, если вы полагаетесь на порт по умолчанию Протокол HTTP (80) или HTTPS (443) и используйте эту функцию в своих шаблонах Jinja2 вместо обычной функции url_for(). Если вы также хотите включить в URL-адрес параметры запроса, а не только параметры пути, посмотрите этот ответ и этот ответ. Пример:

Бэкенд

from fastapi import FastAPI, Request
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from typing import Any
import urllib

app = FastAPI()

def my_url_for(request: Request, name: str, **path_params: Any) -> str:
    url = request.url_for(name, **path_params)
    parsed = list(urllib.parse.urlparse(url))
    #parsed[0] = 'https'  # Change the scheme to 'https' (Optional)
    parsed[1] = 'my_domain.com'  # Change the domain name
    return urllib.parse.urlunparse(parsed)
    

app.mount('/static', StaticFiles(directory='static'), name='static')
templates = Jinja2Templates(directory='templates')
templates.env.globals['my_url_for'] = my_url_for
Внешний интерфейс

<link href = "{{ my_url_for(request, 'static', path='/styles.css') }}" rel = "stylesheet">


FastAPI возвращает «Ошибка 422: необрабатываемый объект», когда я отправляю данные составной формы с помощью JavaScript Fetch API
Вопросы
JAVASCRIPT
FastAPI возвращает «Ошибка 422: необрабатываемый объект», когда я отправляю данные составной формы с помощью JavaScript Fetch API
У меня возникла проблема с использованием метода JavaScript Fetch API при отправке простого formData, например:

function register() {
  var formData = new FormData();
  var textInputName = document.getElementById('textInputName');
  var sexButtonActive = document.querySelector('#buttonsMW > .btn.active');
  var imagesInput = document.getElementById('imagesInput');

  formData.append('name', textInputName.value);
  if (sexButtonActive != null){
    formData.append('sex', sexButtonActive.html())
  } else {
    formData.append('sex', "");
  }
  formData.append('images', imagesInput.files[0]);

  fetch('/user/register', {
    method: 'POST',
    data: formData,
  })
  .then(response => response.json());
}
document.querySelector("form").addEventListener("submit", register);
А на стороне сервера (FastAPI):

@app.post("/user/register", status_code=201)
def register_user(name: str = Form(...), sex: str = Form(...), images: List[UploadFile] = Form(...)):
try:
    print(name)
    print(sex)
    print(images)
    return "OK"
except Exception as err:
    print(err)
    print(traceback.format_exc())
    return "Error"
После нажатия на кнопку отправки я получаю Error 422: Unprocessable entity. Итак, если я пытаюсь добавить заголовок Content-Type: multipart/form-data, это также не помогает, потому что я получаю другой Error 400: Bad Request. Хочу понять, что я делаю не так, и как обработать formData без таких ошибок?

 20.11.2022 11:27
2
0
323
2
Данный вопрос помечен как решенный
 Ответы 2
 Ответ принят как подходящий
Тело ответа 422 будет содержать сообщение об ошибке о том, какие поля отсутствуют или не соответствуют ожидаемому формату. Поскольку вы не предоставили это (пожалуйста, сделайте это), я предполагаю, что ошибка вызвана тем, как вы определили параметр images в своей конечной точке. Поскольку ожидается, что images будет List из File(s), вы должны вместо этого определить его, используя тип File вместо Form. Например:

images: List[UploadFile] = File(...)
                           ^^^^    
При использовании UploadFile, вам не нужно использовать File() в значении по умолчанию параметра. Следовательно, ниже также должно работать:

images: List[UploadFile]
Кроме того, во внешнем интерфейсе обязательно используйте параметр body (не data) в функции fetch() для передачи объекта FormData (см. пример в MDN Web Docs). Например:

fetch('/user/register', {
      method: 'POST',
      body: formData,
   })
   .then(res => {...
Пожалуйста, ознакомьтесь с этим ответом , а также этим ответом, в которых приведены рабочие примеры того, как загружать несколько files и form данных в серверную часть FastAPI, используя Fetch API во внешнем интерфейсе.

Что касается ручного указания Content-Type при отправке multipart/form-data, вам не нужно (и не следует) этого делать, а лучше позволить браузеру установить Content-Type — пожалуйста, взгляните на этот ответ для получения более подробной информации.

 20.11.2022 12:21
Итак, я обнаружил, что у меня есть ошибка в этой части кода:

formData.append('images', imagesInput.files[0]);
Правильный способ загрузки нескольких файлов:

for (const image of imagesInput.files) {
    formData.append('images', image);
}
Кроме того, мы должны использовать File в аргументах метода FastAPI images: List[UploadFile] = File(...) (вместо Form) и изменить данные на тело в методе JS. Это не ошибка, потому что после вызова метода мы получаем правильный тип данных, например:

Name: Bob
Sex: Man
Images: [<starlette.datastructures.UploadFile object at 0x7fe07abf04f0>]

Спроектировать поле на основе условия MongoDB
Вопросы
PYTHON
Спроектировать поле на основе условия MongoDB
Моя схема в MongoDB выглядит так:

{
  "_id": "be9e9198-86ab-456e-97e1-f1039cb07b59",
  "isDeleted": false,
  "user": {
    "name": "john2",
    "surname": "doe2",
    "email": "123.abcd@gmail.com",
    "phone": "+012345678912",
    "age": 20,
    "gender": "male",
    "nationality": "smth",
    "universityMajor": "ENGINEERING",
    "preferences": null,
    "highPrivacy": false,
  }
  (Other stuff)
  .
  .
  .
}
Я пытаюсь включить поле user.phone только тогда, когда для user.highPrivacy установлено значение False. В противном случае я хочу исключить поле.

Например, для указанного выше пользователя я должен вернуть номер телефона. Но если позже для user.highPrivacy было установлено значение True, оно не должно включать его.

То, что я пробовал до сих пор, это:

dbConnection.aggregate([
            {"$match" : 
                {"_id": userId, "isDeleted" : False} 
            },
            {
                "$project" : {
                    "postings" : 0,
                    "starredPostings" : 0, 
                    "user.timestamp" : 0, 
                    "user.phone" : { "$cond" : [{"$eq": ["$user.highPrivacy", True]}, 0, "$user.phone"] },
                }
            },
            ])
Это продолжает давать мне ошибку:

pymongo.errors.OperationFailure: Invalid $project :: caused by :: Cannot use expression other than $meta in exclusion projection
Но ответы, которые здесь:

Условно включить поле (_id или другое) в агрегацию проекта mongodb?
Проецируйте разные поля в зависимости от разных условий
https://kb.objectrocket.com/mongo-db/mongodb-project-condition-how-to-use-project-with-a-condition-469
используют ту же проекцию, что и я, или, по крайней мере, я так думаю.

Так где именно проблема в моей агрегации?

 11.11.2022 15:58
0
0
63
2
Данный вопрос помечен как решенный
 Ответы 2
Я бы использовал этап $cond и ключевое слово $$REMOVE.

Смотрите пример на детской площадке: https://mongoplayground.net/p/x09lSOojjiY

Пример данных коллекции:

[
  {
    "_id": "1",
    "isDeleted": false,
    "user": {
      "name": "john2",
      "phone": "+012345678912",
      "highPrivacy": false
    }
  },
  {
    "_id": "2",
    "isDeleted": false,
    "user": {
      "name": "john2",
      "phone": "+012345678912",
      "highPrivacy": true
    }
  }
]
Совокупный запрос:

db.collection.aggregate([
  {
    $match: {
      "isDeleted": false
    }
  },
  {
    $project: {
      "isDeleted": 1,
      "user.name": 1,
      "user.highPrivacy": 1,
      "user.phone": {
        $cond: {
          if: {
            $eq: [ "$user.highPrivacy", true ]
          },
          then: "$user.phone",
          else: "$$REMOVE"
        }
      }
    }
  }
])
Результат:

[
  {
    "_id": "1",
    "isDeleted": false,
    "user": {
      "highPrivacy": false,
      "name": "john2"
    }
  },
  {
    "_id": "2",
    "isDeleted": false,
    "user": {
      "highPrivacy": true,
      "name": "john2",
      "phone": "+012345678912"
    }
  }
]
 11.11.2022 16:40
 Ответ принят как подходящий
Запрос

если вы хотите, чтобы поле вычислялось из выражения и удалялось, вы не делаете это 0 вы используете системную переменную $$REMOVE
вы можете использовать $project или $set ниже, чтобы сохранить или удалить телефон в зависимости от поля highPrivacy
Плеймонго

aggregate(
[{"$set": 
   {"user.phone": 
     {"$cond": 
       [{"$eq": ["$user.highPrivacy", true]}, "$$REMOVE", "$user.phone"]}}}]

FastAPI - «TypeError: issubclass () arg 1 должен быть классом» с модульным импортом
Вопросы
PYTHON
FastAPI - «TypeError: issubclass () arg 1 должен быть классом» с модульным импортом
При работе с модульным импортом с FastAPI и SQLModel я получаю следующую ошибку, если открываю /docs:

TypeError: issubclass() arg 1 должен быть классом

Питон 3.10.6
пидантик 1.10.2
быстрый доступ 0.85.2
sqlmodel 0.0.8
макОС 12.6
Вот воспроизводимый пример.

user.py

from typing import List, TYPE_CHECKING, Optional
from sqlmodel import SQLModel, Field

if TYPE_CHECKING:
    from item import Item

class User(SQLModel):
    id: int = Field(default=None, primary_key=True)
    age: Optional[int]
    bought_items: List["Item"] = []
item.py

from sqlmodel import SQLModel, Field

class Item(SQLModel):
    id: int = Field(default=None, primary_key=True)
    price: float
    name: str
main.py

from fastapi import FastAPI

from user import User

app = FastAPI()

@app.get("/", response_model=User)
def main():
    return {"message": "working just fine"}
Я следовал руководству от sqlmodel https://sqlmodel.tiangolo.com/tutorial/code-structure/#make-circular-imports-work. Если бы я поместил модели в один файл, все бы работало нормально. Поскольку мои реальные модели довольно сложны, мне нужно полагаться на модульный импорт.

Выслеживать:

Traceback (most recent call last):
  File "/Users/felix/opt/anaconda3/envs/fastapi_test/lib/python3.10/site-packages/fastapi/utils.py", line 45, in get_model_definitions
    m_schema, m_definitions, m_nested_models = model_process_schema(
  File "pydantic/schema.py", line 580, in pydantic.schema.model_process_schema
  File "pydantic/schema.py", line 621, in pydantic.schema.model_type_schema
  File "pydantic/schema.py", line 254, in pydantic.schema.field_schema
  File "pydantic/schema.py", line 461, in pydantic.schema.field_type_schema
  File "pydantic/schema.py", line 847, in pydantic.schema.field_singleton_schema
  File "pydantic/schema.py", line 698, in pydantic.schema.field_singleton_sub_fields_schema
  File "pydantic/schema.py", line 526, in pydantic.schema.field_type_schema
  File "pydantic/schema.py", line 921, in pydantic.schema.field_singleton_schema
  File "/Users/felix/opt/anaconda3/envs/fastapi_test/lib/python3.10/abc.py", line 123, in __subclasscheck__
    return _abc_subclasscheck(cls, subclass)
TypeError: issubclass() arg 1 must be a class
 07.11.2022 13:24
1
4
519
2
Данный вопрос помечен как решенный
 Ответы 2
 Ответ принят как подходящий
TL;DR
Вам нужно вызвать User.update_forward_refs(Item=Item) перед настройкой OpenAPI.

Объяснение
Итак, это на самом деле немного сложнее, и я пока не совсем уверен, почему это не упоминается в документах. Может быть, я что-то упускаю. Так или иначе...

Если вы проследите трассировку, вы увидите, что ошибка возникает из-за того, что в строке 921 функции pydantic.schema в функции field_singleton_schema выполняется проверка, чтобы убедиться, что issubclass(field_type, BaseModel) и в этот момент field_type на самом деле не является экземпляром type.

Небольшая отладка показывает, что это происходит, когда создается схема для модели User и обрабатывается поле bought_items. В этот момент аннотация обрабатывается, и аргумент типа для List по-прежнему является прямой ссылкой на Item. Это означает, что это не настоящий Item класс. И это то, что передается issubclass и вызывает ошибку.

Это довольно распространенная проблема при работе с рекурсивными или циклическими отношениями между моделями Pydantic, поэтому они были так любезны предоставить специальный метод именно для этого. Это объясняется в разделе Отложенные аннотации документации. Это метод update_forward_refs, и, как следует из названия, он предназначен для разрешения прямых ссылок.

Что сложно в этом случае, так это то, что вам нужно предоставить ему обновленное пространство имен, чтобы разрешить ссылку Item. Для этого вам действительно нужно иметь реальный класс Item в области видимости, потому что это то, что должно быть в этом пространстве имен. Где вы это делаете, не имеет большого значения. Например, вы можете импортировать модель User в свой модуль item и вызвать ее там (очевидно, под определением Item):

from sqlmodel import SQLModel, Field

from .user import User

class Item(SQLModel):
    id: int = Field(default=None, primary_key=True)
    price: float
    name: str

User.update_forward_refs(Item=Item)
Но этот вызов должен произойти до того, как будет предпринята попытка настроить эту схему. Таким образом, вам как минимум нужно импортировать модуль item в ваш модуль main:

from fastapi import FastAPI

from .user import User
from . import item

api = FastAPI()

@api.get("/", response_model=User)
def main():
    return {"message": "working just fine"}
В этот момент, вероятно, проще иметь подпакет только с модулями модели и импортировать их все в __init__.py этого подпакета.

Причина, по которой я привел пример размещения вызова User.update_forward_refs под вашим определением Item, заключается в том, что такие ситуации обычно возникают, когда у вас на самом деле есть круговые отношения, то есть если ваш класс Item, например, имеет поле users, которое было введено как list[User]. Тогда вам все равно придется импортировать User туда и можно просто обновить там ссылки.

В вашем конкретном примере у вас фактически нет циклических зависимостей, поэтому, строго говоря, нет необходимости в побеге TYPE_CHECKING. Вы можете просто сделать from .item import Item внутри user.py и поместить фактический класс в свою аннотацию как bought_items: list[Item]. Но я предполагаю, что вы упростили фактический вариант использования и просто забыли включить циклическую зависимость.

Может быть, я что-то упускаю, и кто-то еще может найти способ вызвать update_forward_refs без необходимости явно указывать Item, но этот способ определенно должен работать.

 07.11.2022 22:02
Для тех, кто оказался здесь, кто (как и я) получил ту же ошибку, но не смог решить ее с помощью приведенного выше решения, мой сценарий выглядел так. Кажется, что SQLModel зависит от pydantic.BaseModel, поэтому это решение также применимо и здесь.

from pydantic import BaseModel

class Model(BaseModel):
    values: list[int, ...]

class SubModel(Model):
    values = list[int, int, int]
Мне потребовалось много времени, чтобы понять, в чем была моя ошибка, но в SubModel я использовал = (присваивание), тогда как должен был использовать : (подсказка типа).

Самое странное, что это работало в контейнере докера (Linux), но не локально (Windows). Кроме того, mypy не заметил этого.

Asyncio одновременно запускает несколько асинхронных функций с uvicorn и fastapi
Вопросы
PYTHON
Asyncio одновременно запускает несколько асинхронных функций с uvicorn и fastapi
У меня проблемы с запуском собственных асинхронных функций с помощью uvicorn (fastapi)

Моя цель — иметь возможность запускать функцию queue manager, а также веб-приложение uvicorn. Однако кажется, что моя функция start блокирует выполнение кода uvicorn.run.


async def queue_manager(self):
        while True:
            job = await self.queue.get()
            print(job)
            await asyncio.sleep(2)

async def start():
    task1 = asyncio.create_task(queue_manager())
    await asyncio.gather(task1)

app = FastAPI()
app.include_router(server.router)

if __name__ == "__main__":
    asyncio.run(start())
    uvicorn.run("main:app", host = "0.0.0.0", port=5959)
Чтобы исправить это, я попытался запустить uvicorn.run внутри моей функции start, однако это привело к следующей ошибке:

line 35, in <module>
    asyncio.run(start())
line 17, in start
    await uvicorn.run("main:app", host = "0.0.0.0", port=5959)
RuntimeError: asyncio.run() cannot be called from a running event loop
async def start():
    task1 = asyncio.create_task(custom_instance_manager.queue_manager())
    task2 = asyncio.create_task(uvicorn.run(
        "main:app", host = "0.0.0.0", port=5959))
    await asyncio.gather(task1, task2)

if __name__ == "__main__":
    asyncio.run(start())
 07.11.2022 02:47
0
0
175
2
Данный вопрос помечен как решенный
 Ответы 2
 Ответ принят как подходящий
Вы можете использовать событие запуска.

async def queue_manager(self):
        while True:
            job = await self.queue.get()
            print(job)
            await asyncio.sleep(2)


app = FastAPI()
app.include_router(server.router)

@app.on_event('startup')
async def start():
    asyncio.create_task(queue_manager())

if __name__ == "__main__":
    uvicorn.run("main:app", host = "0.0.0.0", port=5959)
 07.11.2022 03:21
Вместо использования uvicorn.run вы можете использовать асинхронную функцию uvicorn server с быстрой конфигурацией API.

async def run_server():
    api = configure_fastapi()
    config = uvicorn.Config(api, port=8021, host='0.0.0.0')
    server = uvicorn.Server(config)
    await server.serve()

Как отправить значение HTML-формы <input> с помощью шаблонов FastAPI и Jinja2?
Вопросы
PYTHON
Как отправить значение HTML-формы <input> с помощью шаблонов FastAPI и Jinja2?
Я столкнулся со следующей проблемой при попытке передать значение из элемента HTML-формы <input> в атрибут формы action и отправить его на сервер FastAPI.

Вот как загружается шаблон Jinja2 (HTML):

# Test TEMPLATES
@app.get("/test",response_class=HTMLResponse)
async def read_item(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})
Моя HTML-форма:

<form action = "/disableSubCategory/{{subCatName}}">
    <label for = "subCatName">SubCategory:</label><br>
    <input type = "text" id = "subCatName" name = "subCatName" value = ""><br>
    <input type = "submit" value = "Disable">
</form>
Моя конечная точка FastAPI, которая будет вызываться в действии формы:

# Disable SubCategory
@app.get("/disableSubCategory/{subCatName}")
async def deactivateSubCategory(subCatName: str):
    disableSubCategory(subCatName)
    return {"message": "SubCategory [" + subCatName + "] Disabled"}
Ошибка, которую я получаю:

"GET /disableSubCategory/?subCatName=Barber HTTP/1.1" 404 Not Found
Я пытаюсь добиться следующего вызова FastAPI:

/disableSubCategory/{subCatName} ==> "/disableSubCategory/Barber"
Любой, кто мог бы помочь мне понять, что я делаю неправильно?

Спасибо. Лео

 04.11.2022 15:34
0
4
952
2
Данный вопрос помечен как решенный
 Ответы 2
 Ответ принят как подходящий
Опция 1
Вы можете определить имя категории как параметр Form в бэкэнде и отправить запрос POST из внешнего интерфейса, используя HTML <form>, как описано в методе 1 этого ответа.

app.py

from fastapi import FastAPI, Form, Request
from fastapi.responses import HTMLResponse
from fastapi.templating import Jinja2Templates

app = FastAPI()
templates = Jinja2Templates(directory='templates')

@app.post('/disable')
def disable_cat(cat_name: str = Form(...)):
    return f'{cat_name} category has been disabled.'

@app.get('/', response_class=HTMLResponse)
def main(request: Request):
    return templates.TemplateResponse('index.html', {'request': request})
шаблоны/index.html

<!DOCTYPE html>
<html>
   <head>
      <meta charset = "utf-8">
      <meta name = "viewport" content = "width=device-width, initial-scale=1">
   </head>
   <body>
      <h1>Disable a category</h1>
      <form method = "post" action = "/disable">
         <label for = "cat_name">Enter a category name to disable:</label><br>
         <input type = "text" id = "cat_name" name = "cat_name">
         <input class = "submit" type = "submit" value = "Submit">
      </form>
   </body>
</html>
Вариант 2
Вы можете объявить имя категории в качестве параметра запроса в своей конечной точке, а во внешнем интерфейсе использовать подход, аналогичный тому, который продемонстрирован в вашем вопросе, чтобы преобразовать значение формы элемента формы <input> в параметр запроса, а затем добавить его в запрос строка URL (в атрибуте action).

Обратите внимание, что ниже используется запрос GET, в отличие от приведенного выше (в этом случае вам нужно использовать @app.get() в бэкэнде и <form method = "get" ... во внешнем интерфейсе, что в любом случае является методом по умолчанию). Имейте в виду, что большинство браузеров кэшируют запросы GET (т. е. сохраняются в истории браузера), что делает их менее безопасными по сравнению с POST, поскольку отправляемые данные являются частью URL-адреса и видны всем, у кого есть доступ к устройству. Таким образом, метод GET не следует использовать при отправке паролей или другой конфиденциальной информации.

app.py

from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse
from fastapi.templating import Jinja2Templates

app = FastAPI()
templates = Jinja2Templates(directory='templates')

@app.get('/disable')
def disable_cat(cat_name: str):
    return f'{cat_name} category has been disabled.'

@app.get('/', response_class=HTMLResponse)
def main(request: Request):
    return templates.TemplateResponse('index.html', {'request': request})
шаблоны/index.html

<!DOCTYPE html>
<html>
   <head>
      <meta charset = "utf-8">
      <meta name = "viewport" content = "width=device-width, initial-scale=1">
   </head>
   <body>
      <h1>Disable a category</h1>
      <form method = "get" id = "myForm" action='/disable{{ cat_name }}'>
         <label for = "cat_name">Enter a category name to disable:</label><br>
         <input type = "text" id = "cat_name" name = "cat_name">
         <input class = "submit" type = "submit" value = "Submit">
      </form>
   </body>
</html>
Если вместо этого вы хотите использовать запрос POST, который немного безопаснее, чем GET, поскольку параметры не сохраняются в истории браузера и имеет больше смысла при обновлении контента/состояния на сервере по сравнению с GET, который должен быть используется при запросе (без изменения) данных — вы можете определить конечную точку FastAPI с помощью @app.post() и заменить приведенный выше шаблон приведенным ниже (аналогично методу 2 этого ответа), который отправляет форму с использованием метода POST после преобразования данных формы. в параметры запроса:

<!DOCTYPE html>
<html>
   <head>
      <meta charset = "utf-8">
      <meta name = "viewport" content = "width=device-width, initial-scale=1">
      <script>
         document.addEventListener('DOMContentLoaded', (event) => {
            document.getElementById("myForm").addEventListener("submit", function (e) {
               var myForm = document.getElementById('myForm');
               var qs = new URLSearchParams(new FormData(myForm)).toString();
               myForm.action = '/disable?' + qs;
            });
         });
      </script>
   </head>
   <body>
      <h1>Disable a category</h1>
      <form method = "post" id = "myForm">
         <label for = "cat_name">Enter a category name to disable:</label><br>
         <input type = "text" id = "cat_name" name = "cat_name">
         <input class = "submit" type = "submit" value = "Submit">
      </form>
   </body>
</html>
Вариант 3
Вы по-прежнему можете определить его как параметр пути и использовать JavaScript во внешнем интерфейсе для изменения атрибута action элемента <form>, передав значение элемента формы <input> в качестве параметра пути в URL-адрес, аналогично тому, что было описано ранее.

app.py

from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse
from fastapi.templating import Jinja2Templates

app = FastAPI()
templates = Jinja2Templates(directory='templates')

@app.post('/disable/{name}')
def disable_cat(name: str):
    return f'{name} category has been disabled.'

@app.get('/', response_class=HTMLResponse)
def main(request: Request):
    return templates.TemplateResponse('index.html', {'request': request})
шаблоны/index.html

<!DOCTYPE html>
<html>
   <head>
      <meta charset = "utf-8">
      <meta name = "viewport" content = "width=device-width, initial-scale=1">
      <script>
         document.addEventListener('DOMContentLoaded', (event) => {
            document.getElementById("myForm").addEventListener("submit", function (e) {
               var myForm = document.getElementById('myForm');
               var catName = document.getElementById('catName').value;
               myForm.action = '/disable/' + catName;
            });
         });
      </script>
   </head>
   <body>
      <h1>Disable a category</h1>
      <form method = "post" id = "myForm">
         <label for = "catName">Enter a category name to disable:</label><br>
         <input type = "text" id = "catName" name = "catName">
         <input class = "submit" type = "submit" value = "Submit">
      </form>
   </body>
</html>
Вариант 4
Если вы хотите предотвратить перезагрузку/перенаправление страницы при нажатии кнопки submit в HTML <form> и получить результаты на той же странице, вы можете использовать Fetch API , интерфейс/библиотеку JavaScript, чтобы создать асинхронный HTTP-запрос, аналогичный этому ответу , а также этому ответу и этому ответу . Кроме того, можно вызвать функцию Event.preventDefault() , как описано в этом ответе, чтобы предотвратить действие по умолчанию. Приведенный ниже пример основан на предыдущем варианте (т. е. варианте 3); однако тот же подход, описанный ниже (т. е. создание асинхронного HTTP-запроса), также можно использовать для вариантов 1 и 2, продемонстрированных ранее, если вы не хотите, чтобы браузер обновлял страницу при отправке <form>.

app.py

from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse
from fastapi.templating import Jinja2Templates

app = FastAPI()
templates = Jinja2Templates(directory='templates')

@app.post('/disable/{name}')
def disable_cat(name: str):
    return f'{name} category has been disabled.'

@app.get('/', response_class=HTMLResponse)
def main(request: Request):
    return templates.TemplateResponse('index.html', {'request': request})
шаблоны/index.html

<!DOCTYPE html>
<html>
   <head>
      <meta charset = "utf-8">
      <meta name = "viewport" content = "width=device-width, initial-scale=1">
      <script>
         document.addEventListener('DOMContentLoaded', (event) => {
            document.getElementById("myForm").addEventListener("submit", function (e) {
               e.preventDefault() // Cancel the default action
               var catName = document.getElementById('catName').value;
               fetch('/disable/' + catName, {
                     method: 'POST',
                  })
                  .then(resp => resp.text()) // or, resp.json(), etc.
                  .then(data => {
                     document.getElementById("response").innerHTML = data;
                  })
                  .catch(error => {
                     console.error(error);
                  });
            });
         });
      </script>
   </head>
   <body>
      <h1>Disable a category</h1>
      <form id = "myForm">
         <label for = "catName">Enter a category name to disable:</label><br>
         <input type = "text" id = "catName" name = "catName">
         <input class = "submit" type = "submit" value = "Submit">
      </form>
      <div id = "response"></div>
   </body>
</html>
 06.11.2022 18:48
Просто чтобы предоставить вам обратную связь и следить за решением, которое я внедрил.

Как упоминал @Chris, я перешел к предложенному решению 3.

Пожалуйста, найдите ниже мой новый код:

== FastAPI ==

# Test TEMPLATES
@app.get("/test",response_class=HTMLResponse)
async def read_item(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})

# Disable SubCategory
@app.post("/disableSubCategory/{subCatName}")
async def deactivateSubCategory(subCatName: str):
    disableSubCategory(subCatName)
    return {"message": "Sub-Category [" + subCatName + "] Disabled"}

# Enable SubCategory
@app.post("/enableSubCategory/{subCatName}")
async def activateSubCategory(subCatName: str):
    enableSubCategory(subCatName)
    return {"message": "Sub-Category [" + subCatName + "] Enabled"}
== HTML ==

<html>
<head>
    <title>Item Details</title>
    <link href = "{{ url_for('static', path='/styles.css') }}" rel = "stylesheet">

    <script>
        document.addEventListener('DOMContentLoaded', (event) => {
           document.getElementById("disableSubCategory").addEventListener("submit", function (e) {
              var myForm = document.getElementById('disableSubCategory');
              var disableSubCatName = document.getElementById('id_disableSubCategory').value;
              myForm.action = '/disableSubCategory/' + disableSubCatName;
           });
        });
     </script>

    <script>
        document.addEventListener('DOMContentLoaded', (event) => {
           document.getElementById("enableSubCategory").addEventListener("submit", function (e) {
              var myForm2 = document.getElementById('enableSubCategory');
              var enableSubCatName = document.getElementById('id_enableSubCategory').value;
              myForm2.action = '/enableSubCategory/' + enableSubCatName;
           });
        });
     </script>

</head>
<body>

    <form id = "disableSubCategory" enctype = "multipart/form-data" method = "post">
        <label for = "subCatName">SubCategory:</label><br>
        <input type = "text" id = "id_disableSubCategory" value = ""><br>
        <input type = "submit" value = "Disable" id = "disable">
    </form>

    <form id = "enableSubCategory" enctype = "multipart/form-data" method = "post">
        <label for = "subCatName">SubCategory:</label><br>
        <input type = "text" id = "id_enableSubCategory" value = ""><br>
        <input type = "submit" value = "Enable" id = "enable">
    </form>

</body>
</html>

Приложение Fastapi: пустой массив или TypeError: логическое значение этого предложения не определено
Вопросы
PYTHON
Приложение Fastapi: пустой массив или TypeError: логическое значение этого предложения не определено
Итак, я делаю простое приложение todo-api с fastapi и sqlmodel. Миграция прошла нормально, но если я запускаю свой сервер, я не вижу ничего, кроме пустого массива. Я добавил некоторые данные в файл базы данных с помощью браузера баз данных для SQLite, поэтому он не пуст. И когда я запускаю свой сервер и перехожу к "/", я вижу только пустой массив и никаких данных, а если я перехожу к "/1/", я вижу это: TypeError: логическое значение этого предложения не определено

Мой main.py:

from fastapi import FastAPI
import uvicorn
from endpoints.routers import router
from database.db import engine
from sqlmodel import SQLModel

app = FastAPI()
app.include_router(router)

# def create_db_and_tables():
#     SQLModel.metadata.create_all(engine)

if __name__ == '__main__':
    uvicorn.run("main:app", host='localhost', port=8000, reload=True)
    # create_db_and_tables()
маршрутизаторы.py

from fastapi import APIRouter
from models.todo import ToDo
from repos.todo_repo import select_all_todos, select_todo
from database.db import session
from sqlmodel import Session, select

router = APIRouter()

@router.get("/", tags=['Todos'])
def show_todos():
    todos = select_all_todos()
    return todos


@router.get('/{id}/', response_model=ToDo, tags=['Todos'])
def select_one(id: int):
    todo_found = select_todo(id)
    return todo_found
репозитории:

from models.todo import ToDo
from sqlmodel import Session, select, or_

def select_all_todos():
    with Session(engine) as session:
        todos = select(ToDo)
        results = session.exec(todos)
        todo = results.all()
        return todo
    
def select_todo(id):
    with Session(engine) as session:
        statement = select(ToDo)
        statement = statement.where(ToDo.id==id)
        if not statement:
            return "Error"
        result = session.exec(statement)
        return result.first()
модели:

from sqlmodel import Field, SQLModel


class ToDo(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    name: str
    is_done: bool = False
файл базы данных.py:

from sqlmodel import create_engine, Session

eng = 'database.db'

sqlite_url = f'sqlite:///{eng}'
engine = create_engine(sqlite_url, echo=True)
session = Session(bind=engine)
Выслеживать:

Traceback (most recent call last):
  File "/home/aleksandr/Programming/Sites/myTodo/backend/venv/lib/python3.10/site-packages/uvicorn/protocols/http/h11_impl.py", line 407, in run_asgi
    result = await app(  # type: ignore[func-returns-value]
  File "/home/aleksandr/Programming/Sites/myTodo/backend/venv/lib/python3.10/site-packages/uvicorn/middleware/proxy_headers.py", line 78, in __call__
    return await self.app(scope, receive, send)
  File "/home/aleksandr/Programming/Sites/myTodo/backend/venv/lib/python3.10/site-packages/fastapi/applications.py", line 270, in __call__
    await super().__call__(scope, receive, send)
  File "/home/aleksandr/Programming/Sites/myTodo/backend/venv/lib/python3.10/site-packages/starlette/applications.py", line 124, in __call__
    await self.middleware_stack(scope, receive, send)
  File "/home/aleksandr/Programming/Sites/myTodo/backend/venv/lib/python3.10/site-packages/starlette/middleware/errors.py", line 184, in __call__
    raise exc
  File "/home/aleksandr/Programming/Sites/myTodo/backend/venv/lib/python3.10/site-packages/starlette/middleware/errors.py", line 162, in __call__
    await self.app(scope, receive, _send)
  File "/home/aleksandr/Programming/Sites/myTodo/backend/venv/lib/python3.10/site-packages/starlette/middleware/exceptions.py", line 75, in __call__
    raise exc
  File "/home/aleksandr/Programming/Sites/myTodo/backend/venv/lib/python3.10/site-packages/starlette/middleware/exceptions.py", line 64, in __call__
    await self.app(scope, receive, sender)
  File "/home/aleksandr/Programming/Sites/myTodo/backend/venv/lib/python3.10/site-packages/fastapi/middleware/asyncexitstack.py", line 21, in __call__
    raise e
  File "/home/aleksandr/Programming/Sites/myTodo/backend/venv/lib/python3.10/site-packages/fastapi/middleware/asyncexitstack.py", line 18, in __call__
    await self.app(scope, receive, send)
  File "/home/aleksandr/Programming/Sites/myTodo/backend/venv/lib/python3.10/site-packages/starlette/routing.py", line 680, in __call__
    await route.handle(scope, receive, send)
  File "/home/aleksandr/Programming/Sites/myTodo/backend/venv/lib/python3.10/site-packages/starlette/routing.py", line 275, in handle
    await self.app(scope, receive, send)
  File "/home/aleksandr/Programming/Sites/myTodo/backend/venv/lib/python3.10/site-packages/starlette/routing.py", line 65, in app
    response = await func(request)
  File "/home/aleksandr/Programming/Sites/myTodo/backend/venv/lib/python3.10/site-packages/fastapi/routing.py", line 231, in app
    raw_response = await run_endpoint_function(
  File "/home/aleksandr/Programming/Sites/myTodo/backend/venv/lib/python3.10/site-packages/fastapi/routing.py", line 162, in run_endpoint_function
    return await run_in_threadpool(dependant.call, **values)
  File "/home/aleksandr/Programming/Sites/myTodo/backend/venv/lib/python3.10/site-packages/starlette/concurrency.py", line 41, in run_in_threadpool
    return await anyio.to_thread.run_sync(func, *args)
  File "/home/aleksandr/Programming/Sites/myTodo/backend/venv/lib/python3.10/site-packages/anyio/to_thread.py", line 31, in run_sync
    return await get_asynclib().run_sync_in_worker_thread(
  File "/home/aleksandr/Programming/Sites/myTodo/backend/venv/lib/python3.10/site-packages/anyio/_backends/_asyncio.py", line 937, in run_sync_in_worker_thread
    return await future
  File "/home/aleksandr/Programming/Sites/myTodo/backend/venv/lib/python3.10/site-packages/anyio/_backends/_asyncio.py", line 867, in run
    result = context.run(func, *args)
  File "/home/aleksandr/Programming/Sites/myTodo/backend/endpoints/routers.py", line 17, in select_one
    todo_found = select_todo(id)
  File "/home/aleksandr/Programming/Sites/myTodo/backend/repos/todo_repo.py", line 16, in select_todo
    if not statement:
  File "/home/aleksandr/Programming/Sites/myTodo/backend/venv/lib/python3.10/site-packages/sqlalchemy/sql/elements.py", line 590, in __bool__
    raise TypeError("Boolean value of this clause is not defined")
TypeError: Boolean value of this clause is not defined
 26.10.2022 12:59
0
1
152
2
Данный вопрос помечен как решенный
 Ответы 2
Прочитав Traceback, я бы сказал, что какой бы тип ни возвращал statement.where(ToDo.id==id), похоже, не определен __bool__() Magic Method. Таким образом, вы не можете проверить «правдивость» утверждения if.

 26.10.2022 13:47
 Ответ принят как подходящий
Итак, исключение состоит в том, что вы на самом деле не выполняете оператор в select_todo перед проверкой на наличие ошибок. В операторе SqlModel используется объект особого типа для построения и обработки запроса, поэтому его нельзя напрямую проверить на наличие логического значения.

Если вы хотите проверить, есть ли какие-либо результаты, поместите это утверждение под exec и вместо этого отметьте results.

Нет смысла проверять сам оператор, если он построен успешно, если в этой точке не возникло исключения.

Как я могу реализовать Fastapi, например Depends(), без использования какого-либо пакета или использования необработанного кода Python?
Вопросы
PYTHON
Как я могу реализовать Fastapi, например Depends(), без использования какого-либо пакета или использования необработанного кода Python?
Я хочу реализовать свою собственную инъекцию зависимостей, например Fastapi Depends(), без использования внешнего пакета или фреймворка. Какой будет подход? Пример кода будет полезен для меня. Заранее спасибо.

from typing import Callable, Optional, Any

class Depends:
    def __init__(self, dependencies= Optional[Callable[..., Any]]):
        self.dependencies = dependencies
        
        
def get_db():
    pass

    
def get_token():
    pass

def get_current_user(db= Depends(get_db),  token= Depends(get_token)):
    pass
 22.10.2022 22:57
0
4
158
2
Данный вопрос помечен как решенный
 Ответы 2
Вы можете сделать что-то вроде этого?

async def get_db(db_con=Depends(get_db_con)) -> AsyncIterable[Session]:
    session = Session(bind=db_con)
    try:
        yield session
    finally:
        session.close()
Функция get_db_con может вернуть инициализированную базу данных (или вызвать ошибку подключения).

Надеюсь это поможет

ваше здоровье.

 23.10.2022 09:22
 Ответ принят как подходящий
Отправной точкой может быть что-то вроде этого, где мы создаем декоратор, который позволяет нам вытеснять любые вызовы функции и разрешать любые зависимости.

from typing import Dict, Callable, Any
from functools import wraps
import inspect


# Our decorator which inspects the function and resolves any
# dependencies when called
def resolve_dependencies(func):
    # based on https://stackoverflow.com/a/69170441/
    f_sig = inspect.signature(func)

    @wraps(func)
    def resolve_nice_to_have(*args, **kwargs):
        bound = f_sig.bind(*args, **kwargs)
        bound.apply_defaults()

        for k, arg in bound.arguments.items():
            if type(arg) == ItWouldBeNice:
                bound.arguments[k] = arg()

        return func(*bound.args, **bound.kwargs)

    return resolve_nice_to_have


# Our actual dependency wrapper, with a simple cache to avoid
# invocating an already resolved dependency.
# Slightly friendlier named than actually depending on something.
class ItWouldBeNice:
    cache: Dict[Callable, Any] = {}

    def __init__(self, dependency: Callable):
        self.dependency = dependency

    def __call__(self) -> Any:
        if self.dependency in ItWouldBeNice.cache:
            return ItWouldBeNice.cache[self.dependency]

        result = self.dependency()
        ItWouldBeNice.cache[self.dependency] = result
        return result
Пример использования:

from iwant import ItWouldBeNice, resolve_dependencies


def late_eval():
    print("late was called")
    return "static string"


@resolve_dependencies
def i_want_it(s: str = ItWouldBeNice(late_eval)):
    print(s)


@resolve_dependencies
def i_want_it_again(s: str = ItWouldBeNice(late_eval)):
    print(s)


i_want_it()
i_want_it_again()
Это не поддерживает иерархические зависимости и т. д., но должно, по крайней мере, проиллюстрировать концепцию, которую вы могли бы применить, чтобы сделать что-то подобное.

Файл Docker и Python
Вопросы
PYTHON 3.X
Файл Docker и Python
Извините, я очень новичок в Docker. У меня есть следующий файл Docker, который содержит следующие команды (см. ниже). Я не уверен, что понимаю все команды, и был бы признателен за некоторые пояснения. Я прокомментировал все строки, которые понял, но поставил вопросительный знак в других. Пожалуйста, смотрите ниже

#That this line means that python will be our base. Can some comment here please and explain this line more?
FROM python:3.9 as base
 
#create a working directory in the virtual machine (VM)
WORKDIR /code    

# copy all the python requirements stored in requirements.txt into the new directoy (in the VM)
COPY ./requirements.txt /code/requirements.txt    


# activate the package manager pip. But why use no-cache-dir?
RUN pip install --no-cache-dir --upgrade -r /code/requirements.txt

# copy all files to the new directory (in the VM)
COPY ./ /code/

# I don't understand the line below. Please explain? why uvicorn? app.main:app is the 
 #location of the fastapi
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "180"]
Спасибо

 21.10.2022 17:27
0
0
84
2
Данный вопрос помечен как решенный
 Ответы 2
 Ответ принят как подходящий
В файле Docker указаны все шаги, которые Docker выполнит при создании вашего образа. Из этого образа можно создать контейнер.

#That this line means that python will be our base. Can some comment here please and explain this line more?
FROM python:3.9 as base
Это очень простой материал для работы с докером, следуйте инструкциям (для начинающих), и вы узнаете гораздо больше, чем простое ложное кормление небольшими кусочками знаний.

#create a working directory in the virtual machine (VM)
WORKDIR /code    
Вы создаете образ контейнера, а не виртуальную машину. Это похожее, но совершенно другое понятие, и его не следует смешивать.

# copy all the python requirements stored in requirements.txt into the new directoy (in the VM)
COPY ./requirements.txt /code/requirements.txt    
Это копирует все файлы в образ.

# activate the package manager pip. But why use no-cache-dir?
RUN pip install --no-cache-dir --upgrade -r /code/requirements.txt
RUN — это шаг сборки образа, и результат будет зафиксирован в образе Docker. Итак, на этом этапе вы говорите докеру, что вам нужен образ, в котором все установлено, как указано в requirements.txt с помощью pip. Нет кеша, по умолчанию PIP сохраняет whl пакетов, которые вы устанавливаете, но это только увеличит изображение и больше не требуется. Так что кэша нет.

# copy all files to the new directory (in the VM)
COPY ./ /code/
Опять же, не ВМ, а образ, образ, который в дальнейшем будет использоваться для создания контейнера.

# I don't understand the line below. Please explain? why uvicorn? app.main:app is the 
 #location of the fastapi
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "180"]
Поскольку вы пытаетесь запустить проект FastAPI, а FastAPI — это просто приложение; вам нужен сервер, чтобы действительно иметь возможность запускать запрос в FastAPI. На самом деле это объясняется на самой первой странице документации FastAPI.

 21.10.2022 17:52
«app.main: app» указывает, что ваш проект имеет такой файл python:

<Project Root Dir>
   app - folder
     main.py -- python file
В main.py вы запускаете экземпляр FastAPI с именем app, например:

# main.py
....
app = FastAPI()
...
unicorn используйте приведенные выше правила, чтобы получить экземпляр FastAPI app, затем загрузите его.

Как скрыть поле дискриминатора Pydantic из документов FastAPI
Вопросы
PYTHON
Как скрыть поле дискриминатора Pydantic из документов FastAPI
У нас есть поле дискриминатора type, которое мы хотим скрыть от документов пользовательского интерфейса Swagger:

class Foo(BDCBaseModel):
    type: Literal["Foo"] = Field("Foo", exclude=True)
    Name: str

class Bar(BDCBaseModel):
    type: Literal["Bar"] = Field("Bar", exclude=True)
    Name: str

class Demo(BDCBaseModel):
    example: Union[Foo, Bar] = Field(discriminator = "type")
Следующий маршрутизатор:

@router.post("/demo")
async def demo(
    foo: Foo,
):
    demo = Demo(example=foo)
    return demo
И это показано в документах Swagger:

Мы не хотим, чтобы пользователь видел поле типа, так как оно в любом случае для него бесполезно. Мы попытались сделать поле приватным: _type что скрывает его от документов, но тогда его больше нельзя использовать в качестве дискриминатора:

    class Demo(BDCBaseModel):
  File "pydantic\main.py", line 205, in pydantic.main.ModelMetaclass.__new__
  File "pydantic\fields.py", line 491, in pydantic.fields.ModelField.infer
  File "pydantic\fields.py", line 421, in pydantic.fields.ModelField.__init__
  File "pydantic\fields.py", line 537, in pydantic.fields.ModelField.prepare
  File "pydantic\fields.py", line 639, in pydantic.fields.ModelField._type_analysis
  File "pydantic\fields.py", line 753, in pydantic.fields.ModelField.prepare_discriminated_union_sub_fields
  File "pydantic\utils.py", line 739, in pydantic.utils.get_discriminator_alias_and_values
pydantic.errors.ConfigError: Model 'Foo' needs a discriminator field for key '_type'
 20.10.2022 11:01
1
2
232
2
Данный вопрос помечен как решенный
 Ответы 2
Проблема в базовой концепции. Если ваша модель моделирует параметры API, и вы выбираете, какую модель использовать на основе значения параметра «тип», тогда пользователь API должен (это обязательное поле) отправить этот ключ! Почему вы все равно хотите это скрыть?

 20.10.2022 11:49
 Ответ принят как подходящий
Это очень распространенная ситуация, и решение очень простое. Выделите это поле type в отдельную модель.

Типичный способ сделать это — создать один FooBase со всеми полями, валидаторами и т. д., которые будут общими для всех дочерних моделей (в этом примере только name), а затем подклассировать его по мере необходимости. В этом примере вы должны создать один подкласс Foo с этим полем type, которое вы затем используете для аннотации Demo, и один класс FooRequest без каких-либо дополнений.

Вот полный рабочий пример:

from typing import Literal, Union

from fastapi import FastAPI
from pydantic import BaseModel, Field

class FooBase(BaseModel):
    name: str

class FooRequest(FooBase):
    pass  # possibly configure other request specific things here

class Foo(FooBase):
    type: Literal["Foo"] = Field("Foo", exclude=True)

    class Config:
        orm_mode = True

class Bar(BaseModel):
    type: Literal["Bar"] = Field("Bar", exclude=True)
    name: str

class Demo(BaseModel):
    example: Union[Foo, Bar] = Field(discriminator = "type")

api = FastAPI()

@api.post("/demo")
async def demo(foo: FooRequest):
    foo = Foo.from_orm(foo)
    return Demo(example=foo)
Обратите внимание, что я использовал настройку orm_mode = True только для того, чтобы иметь очень краткий способ преобразования экземпляра FooRequest в экземпляр Foo внутри функции обработчика маршрута. В этом нет необходимости. Вы также можете просто сделать foo = Foo.parse_obj(foo.dict()) там.

Кроме того, добавление модели FooRequest здесь, конечно, избыточно. Вы также можете использовать FooBase в качестве модели запроса. Я написал это таким образом, чтобы продемонстрировать типичный шаблон, потому что иногда модель запроса имеет дополнительные вещи, которые отличают ее от своих братьев и сестер. В вашем примере это перебор.

FastAPI не заменяет символ «+» плюс в запросе GET
Вопросы
PYTHON
FastAPI не заменяет символ «+» плюс в запросе GET
Я понимаю, что это не проблема FastAPI, но как избежать этого с помощью FastAPI?

Например:

from fastapi import FastAPI

app = FastAPI()


@app.get('/')
async def root(q: str):
    return {"message": f"{q}"}
Выдача следующего запроса:

http://127.0.0.1:8000/?q=1+1
возвращает:

{"message":"1 1"}
 19.10.2022 15:18
1
0
244
2
Данный вопрос помечен как решенный
 Ответы 2
+ — это зарезервированный символ в URL-адресах, который используется для обозначения пробелов (как показывает ваш результат). URL-кодируйте свои значения, чтобы избежать этого:

http://127.0.0.1:8000/?q=1%2b1
 19.10.2022 15:20
 Ответ принят как подходящий
Знак плюс (+) имеет семантическое значение в строке запроса, т. е. представляет символ пробела. Точно так же знак амперсанда (&), который используется для разделения различных пар key=value в строке запроса.

Когда приходит запрос, FastAPI обрабатывает параметры запроса после декодирования URL, и, следовательно, любые знаки + в строке запроса декодируются в пробел. Если вы хотите сохранить знак +, вам следует закодировать параметры запроса в URL-адресе перед отправкой HTTP-запроса, чтобы все знаки + были преобразованы в %2B. Затем, когда ваш сервер FastAPI декодирует строку запроса, все знаки %2B будут преобразованы обратно в знаки +.

В JavaScript вы можете использовать функцию encodeURI(), которая принимает в качестве аргумента полный URI:

var encodedURL = encodeURI('http://127.0.0.1:8000/?q=1+1');
или используйте функцию encodeURIComponent, которая принимает любой объект (например, строку или число):

var encodedURL =  'http://127.0.0.1:8000/?q=' + encodeURIComponent('1+1');
Если вы отправляете запрос непосредственно из браузера (т. е. вводя URL-адрес в адресной строке браузера), обязательно отправьте его в кодировке URL-адреса:

http://127.0.0.1:8000/?q=1%2B1
Если вы все еще хотите отправить запрос в этом формате http://127.0.0.1:8000/2?q=1+1 и получить ответ с сохранением знаков +, вы можете использовать request.url.query, который вернет необработанную строку запроса, что позволит вам разделить пары key=value и получить значение параметра q в исходном виде. Пример:

from fastapi import Request

@app.get('/')
def root(request: Request):
    q = request.url.query.split('&')[0].split('=')[1]
    return {'message': q}

Вызов AJAX с jQuery не работает как CURL
Вопросы
JQUERY
Вызов AJAX с jQuery не работает как CURL
Я хочу сделать вызов API в javascript, используя AJAX, предоставленный jQuery, но я получаю необрабатываемую ошибку объекта (ответ на ошибку pydantic от моего сервера fastapi). Странно то, что команда curl работает. Мне непонятно, почему мой сервер может различать ошибочный вызов ajax и успешный вызов curl.

curl -X 'POST' \
  'http://127.0.0.1:8010/api/update' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{"gsid":"634ad79ee29c42396b0d4055","ticker":"SPX230317C04200000","security_type":5,"security_subtype":2005,"option_flavor":2,"underlying":{"gsid":"634ad6d1d89536dac325f871","ticker":"SPX"},"denominated_ccy":{"gsid":"634ad6d1d89536dac325f86e","ticker":"USD"},"expiry_date":"2023-03-17","strike":4200,"option_exercise":1,"expiry_series_type":20,"expiry_time_of_day":1,"settlement_type":1,"primary_exchange":"CBO","multiplier":100,"issuer":0,"description":0,"website":0,"as_of_date":"1970-01-01T00:00-05:00","expiry_datetime":"1969-12-31T19:00-05:00","identifiers":[{"id_type":2,"value":""},{"id_type":3,"value":""},{"id_type":4,"value":""},{"id_type":5,"value":""}]}'
Мой API правильно отвечает на этот вызов со следующим ответом 200:

{
  "success": true,
  "created_security": false,
  "gsid": "634ad79ee29c42396b0d4055",
  "available_versions": [
    "1970-01-01T00:00:00-05:00"
  ],
  "message": "success"
}
AJAX-вызов с jQuery

data = {"gsid":"634ad79ee29c42396b0d4055","ticker":"SPX230317C04200000","security_type":5,"security_subtype":2005,"option_flavor":2,"underlying":{"gsid":"634ad6d1d89536dac325f871","ticker":"SPX"},"denominated_ccy":{"gsid":"634ad6d1d89536dac325f86e","ticker":"USD"},"expiry_date":"2023-03-17","strike":4200,"option_exercise":1,"expiry_series_type":20,"expiry_time_of_day":1,"settlement_type":1,"primary_exchange":"CBO","multiplier":100,"issuer":0,"description":0,"website":0,"as_of_date":"1970-01-01T00:00-05:00","expiry_datetime":"1969-12-31T19:00-05:00","identifiers":[{"id_type":2,"value":""},{"id_type":3,"value":""},{"id_type":4,"value":""},{"id_type":5,"value":""}]};
payload = JSON.stringify(data);

$.ajax({
    url: 'http://127.0.0.1:8010/api/update',
    type : "POST",
    dataType: 'json',
    processData: false,
    success: function(data){
        console.info('success: '+JSON.stringify(data));
    },
    error: function(data){
        console.info('error: '+JSON.stringify(data));
    },
    data : payload,
});
Здесь я получаю следующий ответ необрабатываемой сущности 422 от моего сервера:

{"readyState":4,"responseText":"{\"status_code\":10422,\"message\":\"4 validation errors for Request body value is not a valid dict (type=type_error.dict) body value is not a valid dict (type=type_error.dict) body value is not a valid dict (type=type_error.dict) body value is not a valid dict (type=type_error.dict)\",\"data\":null}","responseJSON":{"status_code":10422,"message":"4 validation errors for Request body value is not a valid dict (type=type_error.dict) body value is not a valid dict (type=type_error.dict) body value is not a valid dict (type=type_error.dict) body value is not a valid dict (type=type_error.dict)","data":null},"status":422,"statusText":"Unprocessable Entity"}
 19.10.2022 02:09
0
2
51
2
Данный вопрос помечен как решенный
 Ответы 2
 Ответ принят как подходящий
РЕДАКТИРОВАТЬ Добавление следующего к вызову ajax:

contentType: "application/json"
Ответ предложен @addjunior

 20.10.2022 01:26
Лично я бы НИКОГДА не использовал jQuery ни для чего.

Вот как это будет сделано в JavaScript.

fetch('http://127.0.0.1:8010/api/update', {
    method: 'POST',
    headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        'gsid': '634ad79ee29c42396b0d4055',
        'ticker': 'SPX230317C04200000',
        'security_type': 5,
        'security_subtype': 2005,
        'option_flavor': 2,
        'underlying': {
            'gsid': '634ad6d1d89536dac325f871',
            'ticker': 'SPX'
        },
        'denominated_ccy': {
            'gsid': '634ad6d1d89536dac325f86e',
            'ticker': 'USD'
        },
        'expiry_date': '2023-03-17',
        'strike': 4200,
        'option_exercise': 1,
        'expiry_series_type': 20,
        'expiry_time_of_day': 1,
        'settlement_type': 1,
        'primary_exchange': 'CBO',
        'multiplier': 100,
        'issuer': 0,
        'description': 0,
        'website': 0,
        'as_of_date': '1970-01-01T00:00-05:00',
        'expiry_datetime': '1969-12-31T19:00-05:00',
        'identifiers': [
            {
                'id_type': 2,
                'value': ''
            },
            {
                'id_type': 3,
                'value': ''
            },
            {
                'id_type': 4,
                'value': ''
            },
            {
                'id_type': 5,
                'value': ''
            }
        ]
    })
});

FastAPI не закрывается при нажатии Ctr+c
Вопросы
PYTHON
FastAPI не закрывается при нажатии Ctr+c
У меня возникли трудности с выходом из FastAPI. Ctr+c не работает. Вот мой pyproject.toml

[tool.pyright]
exclude = ["app/worker"]
ignore = ["app/worker"]

[tool.poetry]
name = "api"
version = "0.1.0"
description = ""
authors = ["SamiAlsubhi <sami@alsubhi.me>"]

[tool.poetry.dependencies]
python = ">=3.8,<3.9"
fastapi = "^0.65.2"
tortoise-orm = "^0.17.4"
asyncpg = "^0.23.0"
aerich = "^0.5.3"
networkx = "^2.5.1"
numpy = "^1.21.0"
ldap3 = "^2.9.1"
fastapi-jwt-auth = "^0.5.0"
python-multipart = "^0.0.5"
torch = "1.7.1"
pyts = "0.11.0"
Pint = "^0.17"
Cython = "^0.29.24"
python-dotenv = "^0.19.0"
arq = "^0.22"
uvicorn = {extras = ["standard"], version = "^0.15.0"}


[tool.poetry.dev-dependencies]
pytest = "^6.2.4"
requests = "^2.25.1"
asynctest = "^0.13.0"
coverage = "^5.5"
pytest-html = "^3.1.1"
pytest-sugar = "^0.9.4"
pytest-json-report = "^1.4.0"
pytest-cov = "^2.12.1"
pylint = "^2.11.1"
autopep8 = "^1.5.7"
black = "^22.3.0"
aiosqlite = "^0.17.0"

[build-system]
requires = ["poetry-core>=1.0.0"]
build-backend = "poetry.core.masonry.api"
вот моя точка входа

"""running API in a local dev environment"""
import os
import uvicorn
from dotenv import load_dotenv

# laoding env values
load_dotenv("../.env")

if __name__ == "__main__":
    port = os.getenv("FASTAPI_PORT")
    port = int(port) if port else None
    uvicorn.run("app.main:app", host=os.getenv("FASTAPI_HOST"),
                port=port, reload=True)
Это то, что я получаю, когда запускаю его, а затем пытаюсь выйти, процесс зависает и не возвращается к терминалу:

(trendr) sami@Samis-MBP backend % python run.py
INFO:     Will watch for changes in these directories: ['/Users/name/Desktop/etc']
INFO:     Uvicorn running on http://0.0.0.0:1000 (Press CTRL+C to quit)
INFO:     Started reloader process [70087] using watchgod
INFO:     Started server process [70089]
INFO:     Waiting for application startup.
INFO:     Application startup complete.
^CINFO:     Shutting down
INFO:     Finished server process [70089]
INFO:     ASGI 'lifespan' protocol appears unsupported.
 18.10.2022 21:24
0
4
198
2
Данный вопрос помечен как решенный
 Ответы 2
Я читал об этой проблеме при использовании uvicorn и нашел приведенный ниже фрагмент кода, чтобы решить эту проблему:

# Add the below code snippet to your app.py module after the app initialization.


def receive_signal(signalNumber, frame):
    print('Received:', signalNumber)
    sys.exit()


@app.on_event("startup")
async def startup_event():
    import signal
    signal.signal(signal.SIGINT, receive_signal)
    # startup tasks
Ссылка:

CTRL^C не работает во время запуска

Все еще не решает проблему, он печатает Received: 2, но вывод такой же, как в вопросе.

Мокающие зависимости FastAPI
Вопросы
PYTHON
Мокающие зависимости FastAPI
Я пишу модульные тестовые примеры для своего проекта fastapi и не могу издеваться над вызовом dynamodb.

Файл_1
В этом файле есть все методы для выполнения действий DynamoDB с использованием вызовов boto3.

класс DynamoDBRepository:

Вставить элемент — вставляет значение
Получить элемент — возвращает значение
#Файл_2

Имеет класс AppConfig, который будет использоваться в качестве зависимости в более позднем файле.


from file_1 import DynamoDBRepository 

class AppConfig:

    def __init__(self) -> None:
        """Constructor class to instantiate dynamodb"""
        self._job_table = "Dynamo_DB_Table"
        self._region = "Table_region"
        self._dynamodb_repository = DynamoDBRepository(table=self._job_table, region=self._region) # created a object for the dynamodb class mentioned in file 1.
Файл_3:

Этот файл имеет декоратор маршрута fast_api.

from file_2 import AppConfig
@router.get(
    "/object/{object_id}"
)
def get_request(
    object_id: str,
    objects: AppConfig = Depends(AppConfig),
) -> ObjectBody:

    try:
        object_detail = objects._dynamodb_repository.get_item({"object_id": object_id})
        return object_detail["Item"]


Я пытаюсь издеваться над методом get_item в своем тестовом файле:

Файл_4

Это мой тестовый файл, в котором

client = TestClient(fast_api_app)

class MockAppConfig:


    def __init__(self) -> None:
        """Constructor class to instantiate dynamodb and lambda"""
         self._job_table = "Dynamo_DB_Table"
        self._region = "Table_region"
        self._dynamodb_repository = DynamoDBRepository(table=self._job_table, region=self._region)


def test_get_request():
    fast_api_app.dependency_overrides[AppConfig] = MockAppConfig
    MockAppConfig()._dynamodb_repository.get_item = {
         "id": "1234",
         "title": "Foo",
         "description": "Hello",
     }

        response = client.get("/objects/1234")
        assert response.status_code == 200
        assert response.json() == {
            "id": "foo",
            "title": "Foo",
            "description": "Hi",
        }
Насмешка над get_item не работает, и она по-прежнему запрашивает исходную базу данных и терпит неудачу из-за проверки учетных данных.

Я пробовал фикстуры monkeypatch и fastapi_dep, а также исправление, но почему-то насмешка над методом get_item не работает

 16.10.2022 10:01
1
0
197
2
Данный вопрос помечен как решенный
 Ответы 2
 Ответ принят как подходящий
Будет ли работать метод насмешки get_item?

class MockDynamoDBRepository():
     def get_item(*args, **kwargs):
         return {
             "Item": {
             "id": "foo",
             "title": "Foo",
             "description": "Hi",
             }
         }

class MockAppConfig:
    def __init__(self) -> None:
        """Constructor class to instantiate dynamodb and lambda"""
         self._job_table = "Dynamo_DB_Table"
        self._region = "Table_region"
        self._dynamodb_repository = MockDynamoDBRepository(table=self._job_table, region=self._region)

def test_get_request():
    fast_api_app.dependency_overrides[AppConfig] = MockAppConfig

    response = client.get("/objects/1234")
    assert response.status_code == 200
    assert response.json() == {
            "id": "foo",
            "title": "Foo",
            "description": "Hi",
        }
 16.10.2022 10:09
Основываясь на ответе @svfat, вот как вы можете выполнить тест с помощью fastapi_dep - выберите любой из подходов к тестированию - с предложением или косвенным параметром:

class MockDynamoDBRepository():
    def __init__(self, *args, **kwargs):
        pass

    def get_item(self, *args, **kwargs):
        return {
            "Item": {
                "id": "foo",
                "title": "Foo",
                "description": "Hi",
            }
        }


class MockAppConfig:

    def __init__(self) -> None:
        """Constructor class to instantiate dynamodb and lambda"""
        self._job_table = "Mock Dynamo_DB_Table"
        self._region = "Mock Table_region"
        self._dynamodb_repository = MockDynamoDBRepository(table=self._job_table,
                                                       region=self._region)


def test_get_request_deps(fastapi_dep):
    with fastapi_dep(fast_api_app).override(
        {
            AppConfig: MockAppConfig,
        }
    ):
        response = client.get("/objects/1234")
        assert response.status_code == 200
        assert response.json() == {
            "id": "foo",
            "title": "Foo",
            "description": "Hi",
        }


@pytest.mark.parametrize(
    "fastapi_dep",
    [
        (
            fast_api_app,
            {AppConfig: MockAppConfig},
        )
    ],
    indirect=True,
)
def test_get_request_deps_indirect(fastapi_dep):
    response = client.get("/objects/1234")
    assert response.status_code == 200
    assert response.json() == {
        "id": "foo",
        "title": "Foo",
        "description": "Hi",
    }
Если вы не хотите создавать все дополнительные классы, вы можете использовать чистый фиктивный подход следующим образом:

from mock.mock import MagicMock

def test_get_request_deps_mock(fastapi_dep):
    my_mock = MagicMock()
    my_mock._dynamodb_repository.get_item.return_value = {
        "Item": {
            "id": "foo",
            "title": "Foo",
            "description": "Hi",
        }
    }
    with fastapi_dep(file_3.app).override(
        {
            AppConfig: lambda: my_mock,
        }
    ):
        response = client.get("/objects/1234")
        assert response.status_code == 200
        assert response.json() == {
            "id": "foo",
            "title": "Foo",
            "description": "Hi",
        }

«Значение не является допустимым адресом электронной почты» при отправке нескольких адресов электронной почты с использованием пользовательского интерфейса Pydantic, FastAPI и Swagger
Вопросы
PYTHON
«Значение не является допустимым адресом электронной почты» при отправке нескольких адресов электронной почты с использованием пользовательского интерфейса Pydantic, FastAPI и Swagger
Я использую пакет fastapi-mail и пытаюсь отправить несколько файлов на несколько адресов электронной почты. Когда я отправляю электронное письмо только на один адрес электронной почты, приложение работает должным образом. Однако, когда я перехожу на List[EmailStr] для отправки на несколько адресов электронной почты, я получаю эту ошибку:

not a valid email address
Вот мой код:

@app.post("/file")async def send_file(
background_tasks: BackgroundTasks,
email:List[EmailStr] = Form(...), #I Change here before EmailStr = Form(...)
file:Optional[List[UploadFile]] = File(...),) -> JSONResponse:
print(email)
print(file)
message = MessageSchema(
    subject = "Fastapi mail module",
    recipients=email,
    body = "Simple background task",
    subtype = "html",
    attachments=file)

fm = FastMail(ConnectionConfig(
    MAIL_USERNAME=res("MAIL_USERNAME"),
    MAIL_PASSWORD=res("MAIL_PASSWORD"),
    MAIL_FROM = "admin@acsebs.com",
    MAIL_PORT=res("MAIL_PORT"),
    MAIL_SERVER=res("MAIL_SERVER"),
    MAIL_FROM_NAME = "send attachment email service",
    MAIL_TLS=res("MAIL_TLS"),
    MAIL_SSL=res("MAIL_SSL"),
    USE_CREDENTIALS=res("USE_CREDENTIALS"),
    VALIDATE_CERTS=res("VALIDATE_CERTS")
))

background_tasks.add_task(fm.send_message, message)

return JSONResponse(status_code=200, content = {"message": "email has been sent"})
Размещение данных через пользовательский интерфейс Swagger:
Ошибка:
 14.10.2022 06:28
0
0
454
2
Данный вопрос помечен как решенный
 Ответы 2
Похоже, ваша конечная точка принимает объект JSON, где вы должны правильно предоставить типы из-за проверки pydantic, почему бы вам просто не предоставить запрос в формате JSON, например:

curl -X 'POST' \
  'http://10.11.12.110:8000/file' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "filename": ["fileA", "fileB", "fileC"],
  "email": ["user1@example.com", "user2@example.com"]
}'
 14.10.2022 09:46
 Ответ принят как подходящий
Проблема не в вашем коде, а в пользовательском интерфейсе Swagger при отправке нескольких значений для одного и того же поля. Как описано в этом ответе, пользовательский интерфейс Swagger неправильно добавляет все элементы в список как один элемент, разделенный запятой (вы можете подтвердить это, посмотрев на второй предоставленный вами снимок экрана в разделе «Завиток»). Например, когда вы передаете два или более адресов электронной почты на конечную точку через пользовательский интерфейс Swagger, они отправляются как:

['user1@example.com, user2@example.com']
вместо того:

['user1@example.com', 'user2@example.com']
Следовательно, возникает ошибка, поскольку 'user1@example.com, user2@example.com' (все вместе как одна строка) не является допустимым адресом электронной почты. Если бы вы отправили запрос с помощью HTML <form> или JavaScript fetch — аналогично методу 1 и методу 3 этого ответа — вы бы увидели, что ваш код будет работать нормально.

Примечание 1. Используйте разные элементы <input> для каждого email адреса, но используйте одно и то же значение name для всех (т. е. emails, которое является именем параметра, определенного в конечной точке).

Примечание 2. Кстати, имейте в виду, что «самой важной частью для создания параметра Optional является часть = None», как описано в этом ответе и этом комментарии. Похоже, вы определили свой параметр files в своей конечной точке с помощью ключевого слова Optional, но использование = File(...) или полное игнорирование этой части сделало бы files обязательным полем; следовательно, обязательно используйте = File(None), если вы хотите, чтобы он был необязательным.

Пример:
@app.post("/email")
def send_email(emails: List[EmailStr] = Form(...),
              files: Optional[List[UploadFile]] = File(None)):
    return emails


@app.get('/emailForm', response_class=HTMLResponse)
def index():
    return """
    <html>
       <body>
          <form method = "POST" action = "/email" enctype = "multipart/form-data">
             <label for = "email1">Email 1:</label>
             <input type = "text" id = "email1" name = "emails"><br><br>
             <label for = "email2">Email 2:</label>
             <input type = "text" id = "email2" name = "emails"><br><br>
             <input type = "file" id = "files" name = "files" multiple>
             <input type = "submit" value = "Submit">
          </form>
       </body>
    </html>
    """
Настройте конечную точку для работы с пользовательским интерфейсом Swagger.
Если вам нужно использовать пользовательский интерфейс Swagger и вы хотите, чтобы ваша конечная точка работала и при отправке запросов через него, вот решение, предложенное здесь . Выполните проверку length списка адресов электронной почты, и если он равен 1 (это означает, что список содержит один элемент), затем разделите этот элемент с помощью разделителя-запятой, чтобы получить фактический список адресов электронной почты. Наконец, просмотрите список, чтобы проверить каждое электронное письмо с помощью валидатора электронной почты, который используется Pydantic за кулисами.

Пример:
from fastapi import FastAPI, Depends, UploadFile, File, Form, HTTPException, status
from email_validator import validate_email, EmailNotValidError
from typing import List, Optional


def check_email(email: str):
    try:
        validation = validate_email(email, check_deliverability=False)
        return validation.email
    except EmailNotValidError as e:
        raise HTTPException(detail=f"'{email}' is not a valid email address. {str(e)}",
                            status_code=status.HTTP_422_UNPROCESSABLE_ENTITY)


def email_checker(emails: List[str] = Form(...)):
    if len(emails) == 1:
        emails = [item.strip() for item in emails[0].split(',')]

    return [check_email(email) for email in emails]


@app.post("/email")
def send_email(emails: List[str] = Depends(email_checker)):
    return emails
О, я понимаю, поэтому мне просто нужно разделить форму, но обычный список str с запятой через цикл, а затем добавить его снова к проверке без использования EmailStr, хорошо, спасибо, Крис, позвольте мне попробовать, я сообщу вам результат позже

Почему я получаю ошибку атрибуции в fast-api? AttributeError: тип объекта не имеет атрибута
Вопросы
PYTHON
Почему я получаю ошибку атрибуции в fast-api? AttributeError: тип объекта не имеет атрибута
Я использую fast-api и pydantic для моделирования в своем проекте, я создал функцию преобразования атрибутов в словарь.

from pydantic import BaseModel


class WidgetItem(BaseModel):
    """Class for WidgetItem"""
    adId: str = ''

    @classmethod
    def generate_widget_item_dict(cls):
        return {
            'adId': cls.adId
        }
Я пытаюсь вызвать generate_widget_item_dict(), но получаю эту ошибку:

AttributeError: объект типа «WidgetItem» не имеет атрибута «adId»

 05.10.2022 09:39
0
1
276
2
Данный вопрос помечен как решенный
 Ответы 2
Это происходит потому, что WidgetItem должен быть инициирован, поскольку он наследуется от BaseModel.

Это отличается от, например:

class WidgetModel:
    adId: str = ""

    @classmethod
    def generate_widget_item_dict(cls):
        return {
            'adId': cls.adId
        }
В таком случае это сработает. Однако это не модель Pydantic.

Если вы хотите создать dict из модели Pydantic, вы можете просто сделать:

from pydantic import BaseModel


class WidgetItem(BaseModel):
    """Class for WidgetItem"""
    adId: str


w = WidgetItem(adId = "id")
w.dict()
 05.10.2022 09:49
 Ответ принят как подходящий
В случае, когда вам нужны только некоторые атрибуты данного класса, я бы создал несколько классов и вернул правильно «замаскированный» класс. Вот пример для иллюстрации:
Примечание. Это может быть сложно, если у вас много зависимостей.

from pydantic import BaseModel


class WidgetItem1(BaseModel):
    """
    Class for WidgetItem

    Note: this class only has 1 attribute
    """
    attr_1: str = 'one'


class WidgetItem2(WidgetItem1):
    """
    A more granular class for WidgetItem ->
    Inherited from `WidgetItem1`

    Note: this class has 3 attributes
    """
    attr_2: str = 'two'
    attr_3: str = 'three'

Учитывая конечную точку fastapi, вы можете вернуться определенные атрибуты, в зависимости от вашего response_model:

WidgetItem1: вернется только attr_1
WidgetItem2: вернет 3 атрибута: attr_1, attr_2, attr_3 Вот код для демонстрации:
# Choose the response model you want to return

from fastapi import FastAPI

app = FastAPI()


# Create a function to use for multiple endpoints
def get_widget():
    """
    Returns a dummy widget to demonstrate
    functionality. Change the `response_model` to
    see different attributes returned.
    """
    # Initially set all 3 attributes and see
    # which are returned by fastapi based on `response_model`
    result = {
        "attr_1": "one",
        "attr_2": "two",
        "attr_3": "three"
    }
    return result


@app.get("/widgets-1", response_model=WidgetItem1)
def get_widget_1():
    """
    Endpoint which wraps `get_widget()` 
    with `WidgetItem1` as the response model
    """
    return get_widget()

@app.get("/widgets-2", response_model=WidgetItem2)
def get_widget_2():
    """
    Endpoint which wraps `get_widget()` 
    with `WidgetItem2` as the response model
    """
    return get_widget()

В качестве альтернативы вы можете создать собственную функциональность для возврата специально отформатированного словаря. Если это так, другие ответы должны работать на вас.

С Pydantic, как я могу создать свою собственную причину ValidationError
Вопросы
PYTHON
С Pydantic, как я могу создать свою собственную причину ValidationError
кажется невозможным установить ограничение регулярного выражения с полем __root__, подобным этому:

class Cars(BaseModel):
    __root__: Dict[str, CarData]

поэтому я прибегал к этому в конечной точке:

@app.post("/cars")
async def get_cars(cars: Cars = Body(...)):
    x = cars.json()
    y = json.loads(x)
    keys = list(y.keys())
    try:
        if any([re.search(r'^\d+$', i) is None for i in keys]):
            raise ValidationError
    except ValidationError as ex:
        return 'wrong type'
    return 'works'

это хорошо работает, поскольку я получаю wrong type, если я не использую цифру в теле запроса.

но я хотел бы вернуть что-то похожее на то, что возвращает pydantic, но с пользовательским сообщением:

{
  "detail": [
    {
      "loc": [
        "body",
        "__root__",
      ],
      "msg": "hey there, you can only use digits!",
      "type": "type_error.???"
    }
  ]
}
 06.10.2022 06:05
0
4
128
2
Данный вопрос помечен как решенный
 Ответы 2
 Ответ принят как подходящий
Вы можете передать свою собственную строку ошибки, используя raise ValidationError("Wrong data type"). Надеюсь, это поможет.

 06.10.2022 08:01
если это кому-то поможет, вот как я проверил динамическое поле:

class Cars(BaseModel):
    __root__: Dict[str, CarData]
    
    @pydantic.root_validator(pre=True)
    @classmethod
    def car_id_is_digit(cls, fields):
        car_ids = list(list(fields.values())[0].keys())
        print(car_ids)
        if any([bool(re.search(r'^\d+$', car_id)) == False for car_id in car_ids]):
            raise ValueError("car_id must be a string that is a digit.")
        else:
            return fields
поскольку для обычного поля validator требуется имя поля в качестве аргумента, я использовал root_validator, который проверяет все поля и не требует этого аргумента.

все это потому, что на __root__, похоже, нельзя ссылаться в обычном валидаторе полей.

однако это означает, что у вас могут быть только поля __root__ - и все они будут подчиняться одним и тем же правилам проверки... не знаю, как с этим добавить больше полей.

Ошибка декодирования JSON при попытке поиска в файле JSON через FAST Api
Вопросы
PYTHON
Ошибка декодирования JSON при попытке поиска в файле JSON через FAST Api
поднять JSONDecodeError («Ожидаемое значение», s, err.value) из None json.decoder.JSONDecodeError: Ожидаемое значение: строка 1, столбец 1 (символ 0)

это ошибка, которую я получаю, когда запускаю следующий код:

read = open('sample.json')
@app.get("/key/{hole}", status_code=200)
def fetch_message(*, hole: int): 
    data = json.load(read)
    for i in data:
     if i['id'] == hole:
        return(i['message'])
        break
Мой файл json выглядит примерно так:

{
    "id": 0,
    "name": "John Doe",
    "message": "Hello World!"
}
 30.09.2022 18:56
0
2
169
2
Данный вопрос помечен как решенный
 Ответы 2
 Ответ принят как подходящий
Вы пытаетесь перебрать ключи одной записи в ваших данных json. Я считаю, что вы хотите перебрать список записей данных json, чтобы вместо этого ваш sample.json был таким:

[
    {
        "id": 0,
        "name": "John Doe",
        "message": "Hello World!"
    }
]
 30.09.2022 19:34
Вы пытаетесь перебрать json, ясно, что это не может пойти хорошо.

Эта версия работает с файлом, содержащим 1 объект json, как у вас.

read = open('sample.json')
@app.get("/key/{hole}", status_code=200)
def fetch_message(*, hole: int): 
    data = json.load(read)
    if data['id'] == hole:
        return(data['message'])
        break  # this is not reacheable

Корневой путь в Fast API за ALB
Вопросы
PYTHON
Корневой путь в Fast API за ALB
Я развертываю быстрое приложение API за AWS ALB с шаблоном пути правила прослушивателя /api/v1/, указывающим на быстрый API. Мое приложение выглядит так

from typing import Union
import os
import mysql.connector
from fastapi import FastAPI

app = FastAPI()


@app.get("/")
def read_root():
    print("Root path hit")
    return {"App": "Fargate"}


@app.get("/api/v1/")
def read_apiv1():
    print("Root path hit")
    return {"App": "Path Fargate API v1"}

Я развернул приложение в ECS с помощью докера, и моя команда запуска докера

CMD ["uvicorn", "app.main:app", "--proxy-headers", "--host", "0.0.0.0", "--port", "80", "--root-path", "/api/v1"]
Теперь, когда я нажимаю на свой DNS-сервер AWS ALB с суффиксом /api/v1/, я вижу конечную точку /api/v1, которая выдает ответ {"App": "Path Fargate API v1"}. Однако, основываясь на документации из fast API, он должен загружать конечную точку API с помощью /.

Может ли кто-нибудь помочь мне, почему я получаю это неожиданное поведение? Нужно ли вручную писать /api/v1 перед всеми моими конечными точками?

 15.09.2022 15:14
0
0
246
2
Данный вопрос помечен как решенный
 Ответы 2
 Ответ принят как подходящий
Наличие прокси с префиксом пути в этом случае означает, что вы можете объявить путь в /app в своем коде, но затем вы добавите слой поверх (прокси), который поместит ваше приложение FastAPI по пути, например /api/v1 .

В этом случае исходный путь / фактически будет обслуживаться в /api/v1.

Несмотря на то, что весь ваш код написан при условии, что есть только /.

И прокси-сервер будет «снимать» префикс пути на лету перед передачей запроса в Uvicorn, чтобы ваше приложение было уверено, что оно обслуживается в /, так что вам не нужно обновлять весь свой код, чтобы включить префикс /api/v1.

Ссылка: https://fastapi.tiangolo.com/advanced/behind-a-proxy/?h=root_#proxy-with-a-stripped-path-prefix

О root_path
Имейте в виду, что сервер (Uvicorn) не будет использовать этот root_path ни для чего другого, кроме передачи его приложению.

Но если вы перейдете в браузере по адресу http://127.0.0.1:8000/app, вы увидите нормальный ответ:

{
    "message": "Hello World",
    "root_path": "/api/v1"
}
Таким образом, он не будет доступен в http://127.0.0.1:8000/api/v1/app.

Uvicorn ожидает, что прокси-сервер получит доступ к Uvicorn по адресу http://127.0.0.1:8000/app, и тогда прокси-сервер должен будет добавить дополнительный префикс /api/v1 сверху.

 18.09.2022 17:24
Вот как я добавил /api/v1 ко всем своим маршрутам:

from sys import prefix
from typing import Union
import os
from fastapi import FastAPI, APIRouter

app = FastAPI()

prefix_router = APIRouter(prefix = "/api/v1")

@prefix_router.get("/")
def read_root():
    print("Root path hit")
    return {"App": "Fargate"}


@prefix_router.get("/something/")
def read_apiv1():
    print("Root path hit")
    return {"App": "Path Fargate API v1"}

app.include_router(prefix_router)
После этого, когда я иду по пути http://127.0.0.1/api/v1/something/, он автоматически перенаправляет меня на второй маршрут.

Не удается подключить базу данных PostgreSQL к FastAPI
Вопросы
PYTHON
Не удается подключить базу данных PostgreSQL к FastAPI
Так привет. С SQLite все работает, но при попытке добавить PostgreSQL согласно руководству пользователя по FastAPI ничего не получается и получаю:

sqlalchemy.exc.ProgrammingError: (psycopg2.ProgrammingError) invalid dsn: invalid connection option "check_same_thread"

Мой database.py это:

from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

#SQLALCHEMY_DATABASE_URL = "sqlite:///./sql_app.db"
SQLALCHEMY_DATABASE_URL = "postgresql://user:password@postgresserver/db"

engine = create_engine(
    SQLALCHEMY_DATABASE_URL, connect_args = {"check_same_thread": False}
)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()
 06.07.2022 14:47
0
0
346
2
Данный вопрос помечен как решенный
 Ответы 2
check_same_thread — это аргумент, специфичный для sqlite. Поскольку вы указали URL-адрес Postgres, вы можете удалить этот аргумент, и у вас не должно возникнуть проблем с созданием механизма.

то есть:

from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

SQLALCHEMY_DATABASE_URL = "postgresql://user:password@postgresserver/db"

engine = create_engine(SQLALCHEMY_DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()
 06.07.2022 14:54
 Ответ принят как подходящий
SQLAlchemy нужен немного другой dsn. Чтобы убедиться, используйте PostgresDsn от pydantic.

from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from pydantic import PostgresDsn

SQLALCHEMY_DATABASE_URI = PostgresDsn.build(
    scheme = "postgresql",
    user = "POSTGRES_USER",
    password = "POSTGRES_PASSWORD",
    host = "POSTGRES_SERVER",
    path=f"/{'POSTGRES_DB' or ''}",
)
engine = create_engine(
    SQLALCHEMY_DATABASE_URI,
    pool_pre_ping=True,
)
SessionLocal = sessionmaker(
    autocommit=False,
    autoflush=False,
    bind=engine
)
try:
    db = SessionLocal()
    db.execute("SELECT 1")
except Exception as e:
    raise e

Как добавить файл и форму JSON в запрос FastAPI POST?
Вопросы
PYTHON
Как добавить файл и форму JSON в запрос FastAPI POST?
В частности, я хочу, чтобы приведенный ниже пример работал:

app.py

from fastapi import FastAPI,File,UploadFile,Form,Body
import uvicorn

app = FastAPI()

@app.get("/")
async def root():
    return {"message": "Hello World"}


@app.get("/hello/{name}")
async def say_hello(name: str):
    return {"message": f"Hello {name}"}

@app.post("/jsk")
async def save_image_meta(farm_name: str = Form(...), files: UploadFile = File(...)):
    print('*'*100)
    return {
        "farm_name": farm_name
    }

if __name__ == "__main__":
    uvicorn.run("main:app", host = "127.0.0.1", port=8088, reload=True)

Если это не правильный способ для запроса POST, пожалуйста, сообщите мне, как выбрать необходимые столбцы из загруженного файла изображения в FastAPI.

test.py

import base64
import hmac
import json
import requests

def parse_params_to_str(params):
    url = "?"
    for key, value in params.items():
        url = url + str(key) + '=' + str(value) + '&'
    return url[1:-1]

def hash_string(qs, secret_key):
    mac = hmac.new(bytes(secret_key, encoding='utf8'), bytes(qs, encoding='utf-8'), digestmod='sha256')
    d = mac.digest()
    validating_secret = str(base64.b64encode(d).decode('utf-8'))
    return validating_secret

def sample_request():
    access_key = "dfaa65a6-ee25-4b03-916b-bedb9095-35f9-4485-a72e-5da4e161a12b"
    secret_key = "GWpnn56bUOnCedhpiUWYJl9dtZ3WllWtUeBUGQva"
    qs = dict(key=access_key)
    header_secret = hash_string(parse_params_to_str(qs), secret_key)
    url = f"http://127.0.0.1:8088/jsk"
    headers = {
        'Content-Type': 'multipart/form-data',
        'Accept': 'application/json',
        'secret': header_secret
    }
    file = "/Users/jskim/Downloads/111111.jpg"
    files = {'files': open(file, 'rb')}
    payload = {"farm_name": "11111"}
    res = requests.post(url, data=payload, headers=headers, files=files)
    return res

sample_request()
Я получаю ошибку 400 Bad Request. Помощь.

Если это не правильный способ для запроса POST, пожалуйста, сообщите мне, как выбрать необходимые столбцы из загруженного файла изображения в FastAPI.

 17.05.2022 11:27
0
0
19
2
Данный вопрос помечен как решенный
 Ответы 2
 Ответ принят как подходящий
Вы не должны определять заголовок Content-Type multipart/form-data самостоятельно. Библиотека requests позаботится об этом автоматически, определив границу. Если вы установите этот заголовок самостоятельно, requests не будет этого делать, и ваш сервер не будет знать, какую границу ожидать (если только вы не решите также установить границу самостоятельно).

Для работы ваш заголовок должен быть без типа содержимого:

    headers = {
        'Accept': 'application/json',
        secret: header_secret
    }
 17.05.2022 14:23
я дам вам то, что я сделал в моем проекте, я надеюсь, что это поможет вам

это просто, но полезно

my schema

class UserProfileSchema(BaseModel):
       first_name: str 
       last_name: str 
       address: Optional[Text]
       image: Optional[str]
       postal_code: Optional[str]
       national_code: Optional[int]

      @classmethod
      def as_form(cls, first_name: str = Form(...), last_name: str = Form(...), address: Optional[Text] = Form(...),
            postal_code: Optional[str] = Form(...),
            national_code: Optional[str] = Form(...)):
           return cls(first_name=first_name,
               last_name=last_name,
               address=address,
               postal_code=postal_code,
               national_code=national_code)
     class Config:
           orm_mode = True
my view

    @wrapper_auth('/profile')
    class Profile:
        async def post(profile: UserProfileSchema = Depends(UserProfileSchema.as_form), file: UploadFile = File(...),
                       current_user: User = Security(get_current_user), db: get_session = Depends(get_db)) -> jsonable_encoder:
.......

Ответ API (получить) (JSON) не отображается в ngFor - Angular
Вопросы
PYTHON
Ответ API (получить) (JSON) не отображается в ngFor - Angular
Я пытаюсь получить ответ в JSON моего API и отобразить значения на моей странице Угловой, используя нгфор

У меня нет ошибок сборки, значения просто не отображаются на странице, только в консоли, используя console.info(), поэтому я не могу понять.

Это мой компонент.ts:

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vps',
  templateUrl: './vps.component.html',
  styleUrls: ['./vps.component.scss'],
})

export class VpsComponent implements OnInit {
  vpsOptions: any;
  baseUrl: string = "http://127.0.0.1:8000/"
  valor: number = 555;
  tipo: any = "mês";

ngOnInit(): void {
   this.getVps()
   console.info("ngOnInit")
   console.info(this.vpsOptions)
}

constructor(private httpClient: HttpClient) {
    this.vpsOptions = []
}
public getVps() {
 this.httpClient.get(this.baseUrl+'vps').subscribe((result:any) =>{
  for(let item in result){
   this.vpsOptions.push(result[item]);
  }
});
Это мой компонент.html:

<ng-container *ngFor = "let vps of vpsOptions">
      <div class = "swiper-slide">
        <div class = "mini-card">
          <div class = "card-header img-fluid border-0">
            <h3 class = "card-title titulo-mini-card">{{vps.nome}}</h3>
          </div>
          <div class = "card mb-xl-8">
            <div class = "card-body body-vps pt-0">
              <p class = "texto-vps">
                <span class = "primeira-linha"> R$ <span class = "valor-vps">{{valor}},00</span>/{{tipo}}</span> <br>
                <span class = "descritivo-valor">**Preço na contratação de 48 meses </span><br>
                {{vps.processador}} <br>
                {{vps.memoria}} <br>
                {{vps.disco1}} de Armazenamento <br>
                {{vps.banda}} de Banda <br>
                {{vps.ips}} IP(s) dedicado(s) <br>
                100% Acesso Root <br>
                100Mb/s Rede <br>
                Suporte 8/5 <br> <br>
                <button type = "submit" class = "btn btn-primary" style = "background-color: #213B89;"
                >Solicitar Orçamento</button>
                <!-- <a class = "link-vps" href = "">Veja todas as caracterísicas</a> -->
              </p>
            </div>
          </div>
        </div>
      </div>
</ng-container>
Это мой ответный API (я использую fastAPI Python):

Ответ API (получить) (JSON) не отображается в ngFor - Angular

Это ответ в консоли браузера: Ответ API (получить) (JSON) не отображается в ngFor - Angular

 16.05.2022 17:47
0
0
29
2
Данный вопрос помечен как решенный
 Ответы 2
 Ответ принят как подходящий
ваш vpsOptions должен быть наблюдаемым

в вашем ts вы должны сделать:

vpsOptions$: new Observable<any>;

 ...

ngOnInit(): void {
   this.vpsOptions$ = this.getVps()
   ...
}
или более чистый способ:

vpsOptions$ = this.getVps();

...
а затем в вашем шаблоне вы можете сделать:

<ng-container *ngFor = "let vps of (vpsOptions$ | async)">
    ...your content
</ng-container>
Это.

удачи и наслаждайтесь угловым!

 16.05.2022 19:25
Я реорганизовал свой код и создал другие классы, чтобы абстрагировать некоторые функции, чтобы было больше практики.

Я создал interface.ts, чтобы отформатировать мой get:

export interface Vps{
  id?: number;
  nome?:string;
  ...
Я создал service.ts, чтобы абстрагировать функцию httpClient.get():

import { Vps } from './vps.interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })

export class VpsService {
  private readonly baseUrl: string = "http://127.0.0.1:8000/"
  constructor(private httpClient: HttpClient) {}

  getVps(): Observable<Vps[]> {
    const url = this.baseUrl+'vps';
    return this.httpClient.get<Vps[]>(url);
  }
}
Спасибо @Dario за ответ, я использовал Observable<Vps[]>: //объявление объекта

vpsOptions: Observable<Vps[]>;
//Инициализация объекта, вызывающего service.ts

constructor(private vpsService: VpsService) {
    this.vpsOptions = this.vpsService.getVps();
  }
// Наконец, я изменил component.html, чтобы правильно получить объект (Observable)

<ng-container *ngIf = "vpsOptions | async as options">
    <ng-container *ngFor = "let option of options">
         <!-- my display logic here -->
     </ng-container>
</ng-container>

Python3 — проблема с разбором json после использования данных ответа (unirest)
Вопросы
JSON
Python3 — проблема с разбором json после использования данных ответа (unirest)
Я делаю HTTPSConnection, используя (Python)Unirest, и в ответе есть такие символы, как ", \ и \n, поэтому я жестко закодировал свой код Python и, наконец, я получил правильный ответ без каких-либо символов на консоли, используя sys.stderr.write(data2)

    @router.get("/data", status_code=status.HTTP_200_OK)
    async def data_detail(type: str ):
        try:
            conn = http.client.HTTPSConnection("example.com")
            conn.request("GET", "/test.php?type = "+type)
            res = conn.getresponse()
            data = res.read()
            data2 = data.decode("utf-8")
            data2 = data2[1:-1]
            data2 = data2.replace("\\n", '')
            data2 = data2.replace("\\", '')

            res = {
                "status"    :   "OK" ,
                "result"    :   data2
                }
            return JSONResponse(res)
        except Exception as e:
            raise HTTPException(status_code=400, detail = "Error")
теперь, когда я возвращаю data пользователю обратную косую черту \ снова возвращаюсь к ответу данных

данные, которые я получил от третьей стороны:

"{\"list1\":[{\"one\":\"one\",\"tow\":\"tow\",\"three\":\"three\"},{\"test1\":\"test1\",\"test2\":\"test2\",\"test3\":\"test3\"},],\"list2\":[]}\n"
после замены символов я получил это на системной консоли

{"list1":[{"one":"one","tow":"tow","three":"three"},{"test1":"test1","test2":"test2","test3":"test3"}],"list2":[]}
но когда я добавляю эти данные в окончательный ответ json, обратная косая черта снова возвращается к выводу, и все данные хранятся как одно значение в result

любое решение этой проблемы

 04.05.2022 21:43
0
2
30
2
Данный вопрос помечен как решенный
 Ответы 2
Вы никогда не заменяете одну обратную косую черту. Вам нужно добавить строку типа

data2 = data2.replace("\", '')
 04.05.2022 21:51
 Ответ принят как подходящий
Расшифруйте JSON.

Сначала import json, а затем попробуйте заменить:

data2 = data2[1:-1]
data2 = data2.replace("\\n", '')
data2 = data2.replace("\\", '')
по

data2 = json.loads(data2)
После этого ваш окончательный ответ json будет построен правильно.

Вы должны использовать json.dumps(data2), чтобы вывести эти данные на консоль. В общем, используйте json.dumps для красивой печати данных Python в формате JSON.

См. https://docs.python.org/3/library/json.html для получения дополнительной помощи по обработке JSON в python.

FastAPI запускает API-вызовы последовательно, а не параллельно
Вопросы
PYTHON
FastAPI запускает API-вызовы последовательно, а не параллельно
У меня есть следующий код:

import time
from fastapi import FastAPI, Request
    
app = FastAPI()
    
@app.get("/ping")
async def ping(request: Request):
        print("Hello")
        time.sleep(5)
        print("bye")
        return {"ping": "pong!"}
Если я запускаю свой код на своем локальном сервере, например, http://localhost:8501/ping, на разных вкладках одного и того же окна Firefox, я получаю:

    Hello
    bye
    Hello
    bye
    ...
Вместо:

    Hello
    Hello
    bye
    bye
Я читал об использовании httpx, но все равно не могу добиться настоящего распараллеливания. В чем проблема?

 17.03.2022 17:49
0
0
219
2
Данный вопрос помечен как решенный
 Ответы 2
Q :
" ... What's the problem? "

А:
В документации FastAPI прямо говорится, что фреймворк использует внутрипроцессные задачи (унаследованные от Старлетт).

Это само по себе означает, что все такие задачи соревнуются за получение (время от времени) GIL-блокировки интерпретатора Python — эффективно являющегося терроризирующим MUTEX Global Interpreter Lock, который, по сути, повторно [SERIAL]-использует любое и все количество Внутрипроцессные потоки интерпретатора Python
для работы как один-и-только-один-РАБОТАЕТ-пока все остальные ждут...

В более мелком масштабе вы видите результат — если порождение другого обработчика для второго (инициированного вручную из второй вкладки FireFox) приходящего http-запроса на самом деле занимает больше времени, чем спящий режим, результат GIL-lock чередуется ~ 100 [ms] time-quanta round-robin (все-подождите-один-может-работать ~ 100 [ms] перед каждым следующим раундом GIL-lock release-acquire-roulette) Внутренняя работа интерпретатора Python не показывает более подробной информации, вы можете использовать более подробную информацию (в зависимости от по типу или версии ОС) из здесь, чтобы увидеть больше в потоке LoD, например, внутри выполняемого асинхронного кода:

import time
import threading
from   fastapi import FastAPI, Request

TEMPLATE = "INF[{0:_>20d}]: t_id( {1: >20d} ):: {2:}"

print( TEMPLATE.format( time.perf_counter_ns(),
                        threading.get_ident(),
                       "Python Interpreter __main__ was started ..."
                        )
...
@app.get("/ping")
async def ping( request: Request ):
        """                                __doc__
        [DOC-ME]
        ping( Request ):  a mock-up AS-IS function to yield
                          a CLI/GUI self-evidence of the order-of-execution
        RETURNS:          a JSON-alike decorated dict

        [TEST-ME]         ...
        """
        print( TEMPLATE.format( time.perf_counter_ns(),
                                threading.get_ident(),
                               "Hello..."
                                )
        #------------------------------------------------- actual blocking work
        time.sleep( 5 )
        #------------------------------------------------- actual blocking work
        print( TEMPLATE.format( time.perf_counter_ns(),
                                threading.get_ident(),
                               "...bye"
                                )
        return { "ping": "pong!" }
И последнее, но не менее важное: не стесняйтесь читать больше обо всех кодах, основанных на потоках другие акулы, которые могут пострадать... или даже вызвать... за кулисами...

Рекламный меморандум
Смесь GIL-lock, пулов на основе потоков, асинхронных декораторов, блокировки и обработки событий - верная смесь с неопределенностями и HWY2HELL; о)

 17.03.2022 19:55
 Ответ принят как подходящий
Согласно Документация FastAPI:

When you declare a path operation function with normal def instead of async def, it is run in an external threadpool that is then awaited, instead of being called directly (as it would block the server).

Таким образом, def (синхронные) маршруты выполняются в отдельном потоке из пула потоков, или, другими словами, сервер обрабатывает запросы одновременно, тогда как async def маршруты выполняются в основном (одиночном) потоке, т. е. сервер обрабатывает запросы последовательно - до тех пор, пока внутри таких маршрутов нет вызова await для I/O-bound операций, таких как данные в ожидании от клиента для отправки по сети, содержимое файла на диске для чтения, операция базы данных для завершения и т. д. - иметь посмотри здесь. Асинхронный код с async и await много раз описывались как использование сопрограмм.. Корутины являются совместными (или совместно многозадачный): «в любой момент времени программа с сопрограммами запускает только одну из своих сопрограмм, и эта работающая сопрограмма приостанавливает свое выполнение только тогда, когда она явно запрашивает приостановку» (см. здесь и здесь для получения дополнительной информации на сопрограммах). Однако это не относится к операциям CPU-bound. CPU-bound операции, даже если они объявлены в async def функциях и вызываются с помощью await, блокируют основной поток. Это также означает, что операция блокировки, такая как time.sleep(), в маршруте async def заблокирует весь сервер (как в вашем случае).

Таким образом, если ваша функция не собирается выполнять какие-либо вызовы async, вместо этого вы должны объявить ее с помощью def, как показано ниже:

@app.get("/ping")
def ping(request: Request):
    #print(request.client)
    print("Hello")
    time.sleep(5)
    print("bye")
    return "pong"
В противном случае, если вы собираетесь вызывать async функции, которые вам нужно await, вы должны использовать async def. Чтобы продемонстрировать это, ниже используется функция asyncio.sleep() из библиотеки асинцио. Аналогичный пример приведен также для здесь и здесь.

import asyncio
 
@app.get("/ping")
async def ping(request: Request):
    print("Hello")
    await asyncio.sleep(5)
    print("bye")
    return "pong"
Обе приведенные выше функции будут печатать ожидаемый результат, как указано в вашем вопросе, если два запроса поступят примерно в одно и то же время.

Hello
Hello
bye
bye
Примечание: когда вы вызываете конечную точку во второй (третий и т. д.) раз, не забудьте сделать это из вкладки, изолированной от основного сеанса браузера; в противном случае запросы будут отображаться как исходящие от одного и того же клиента (вы можете проверить это с помощью print(request.client) - число port будет одинаковым, если обе вкладки открыты в одном окне), и, следовательно, запросы будут обрабатываться последовательно . Вы можете либо перезагрузить ту же вкладку (как она работает), либо открыть новую вкладку в окне инкогнито, либо использовать другой браузер/клиент для отправки запроса.

Async/await и дорогие операции с привязкой к ЦП (длительные вычислительные задачи)
Если вам необходимо использовать async def (как вам может понадобиться await для сопрограмм внутри вашего маршрута), но также у вас есть какая-то синхронная длительная вычислительная задача, которая может блокировать сервер и не позволяет проходить другим запросам, например:

@app.post("/ping")
async def ping(file: UploadFile = File(...)):
    print("Hello")
    contents = await file.read()
    some_long_computation_task(contents)  # this blocks other requests
    print("bye")
    return "pong"
потом:

Используйте больше рабочие (например, uvicorn main:app --workers 4). Примечание: Каждый рабочий "имеет свои вещи, переменные и память". Это означает, что global переменные/объекты и т. д. не будут использоваться совместно процессами/воркерами. В этом случае следует рассмотреть возможность использования хранилища базы данных или хранилищ ключей и значений (кэшей), как описано в здесь и здесь. Кроме того, «если вы потребляете большой объем памяти в своем коде, каждый процесс будет потреблять эквивалентный объем памяти».

Используйте модуль FastAPI (Starlette) run_in_threadpool() from concurrency (github src здесь и здесь) — как предложил @tiangolo здесь — который «будет запускать функцию в отдельном потоке, чтобы гарантировать, что основной поток (где запускаются сопрограммы) не будет заблокирован» (см. здесь). Как описано @tiangolo здесь, «run_in_threadpool — ожидаемая функция, первый параметр — обычная функция, следующие параметры передаются этой функции напрямую. Она поддерживает аргументы последовательности и аргументы ключевого слова».

from fastapi.concurrency import run_in_threadpool
response = await run_in_threadpool(some_long_computation_task, contents)
В качестве альтернативы используйте asynciorun_in_executor:

loop = asyncio.get_running_loop()
response = await loop.run_in_executor(None, lambda: 
some_long_computation_task(contents))
Вы также должны проверить, можете ли вы изменить определение вашего маршрута на def. Например, если единственным ожидаемым методом в вашей конечной точке является чтение содержимого файла (как вы упомянули в разделе комментариев ниже), FastAPI может прочитать для вас bytes файла (однако это должно работать для небольшие файлы, так как все содержимое будет храниться в памяти, см. здесь), или вы могли бы даже вызвать метод read() объекта SpooledTemporaryFile напрямую, чтобы вам не пришлось ждать метода read() - и поскольку теперь вы можете объявить ваш маршрут с помощью def, каждый запрос будет выполняться в отдельном потоке.

@app.post("/ping")
def ping(file: UploadFile = File(...)):
    print("Hello")
    contents = file.file.read()
    some_long_computation_task(contents)
    print("bye")
    return "pong"
Посмотрите этот ответ, а также документацию здесь, чтобы найти другие предлагаемые решения.

На самом деле это была попытка проверить, почему другой вызов выполнялся последовательно. Другая функция вызывает «UploadFile» и выполняет «ожидание file.read ()», а также запускает последовательный режим. Более того, это выполняется внутри продукта сервера amazon после шлюза API от amazon, и, следовательно, все запросы поступают с одного и того же IP-адреса, поскольку пользователь подключается к amazon, а сервер amazon вызывает мой API. Проблема в том, что операция с файлом длинная, и если у меня это сериализовано в конце, у меня есть тайм-ауты из-за ограничений Amazon. Думаю, мне придется перейти по последней ссылке, которую вы предоставили!

— 
Learning from masters
 17.03.2022 20:53
Могу я спросить, является ли file.read() единственной async функцией, которую вам нужно await?

— 
Chris
 17.03.2022 21:22
После загрузки файла (изображения) я выполняю жесткую обработку изображения и загружаю изображение на сервер AWS (есть обработчики S3). Однако в коде нет других явных ожиданий.

— 
Learning from masters
 18.03.2022 00:12
@Learningfrommasters Затем вы можете объявить маршрут как def и объявить параметр файла как bytes. Таким образом, FastAPI прочитает файл за вас, и вы получите его содержимое; и поскольку это маршрут def, каждый запрос будет выполняться в отдельном потоке. Как описано здесь, это будет работать с небольшими файлами, так как содержимое будет храниться в памяти. Если вам нужно получить другие атрибуты, например, имя файла, вы можете передать их как Form данные на вашу конечную точку.

— 
Chris
 18.03.2022 04:20
Чтобы загрузить изображение, у меня есть: def myfunc(image: bytes = File(...)): Image.open(BytesIO(image)).convert('RGB'), но теперь это не удается. До этого было: async def myfunc(image: UploadFile = File(...)): Image.open(BytesIO(await image.read())).convert('RGB') Как быть без асинхронности и ожидания?

— 
Learning from masters
 18.03.2022 10:24
Давайте продолжить обсуждение в чате.

— 
Learning from maste

Веб-сокет FastAPI не может подключиться
Вопросы
PYTHON
Веб-сокет FastAPI не может подключиться
Я пытаюсь разрешить моему приложению Vue.js общаться с моим локальным сервером FastAPI (на основе starlette) с помощью веб-сокетов. Я попытался использовать тот же код, что и в их примере: https://fastapi.tiangolo.com/tutorial/вебсокеты/. Однако происходит что-то странное, потому что мой сервер не может запуститься по причине: AttributeError: 'FastAPI' object has no attribute 'websocket'. Это странно, потому что именно этот код является официальной документацией FastAPI.
После этого я использовал код примера Starlette: https://www.starlette.io/вебсокеты/. Однако, когда я пытаюсь подключиться к нему, FastApi выводит на терминал: WARNING: Invalid HTTP request received.
Я попытался использовать другой клиент, Simple WebSocket Client: https://chrome.google.com/webstore/detail/simple-websocket-client/pfdhoblngboilpfeibdedpjgfnlcodoo, но на терминале появляется та же ошибка.
Что я здесь делаю неправильно? Во-первых, мне кажется странным, что код FastAPI не работает на моем компьютере, кто-нибудь знает, почему?

Заранее спасибо!

 28.05.2019 20:05
0
0
2 074
2
Данный вопрос помечен как решенный
 Ответы 2
 Ответ принят как подходящий
Очевидно, функциональность WebSocket была добавлена ​​в FastAPI 0.24, который только что вышел. Я использовал более старую версию.

 29.05.2019 09:32
запустите pip install websockets и настройте его следующим образом:

from fastapi import FastAPI, WebSocket

@app.websocket("/ws")
async def send_data(websocket:WebSocket):
    print('CONNECTING...')
    await websocket.accept()
    while True:
        try:
            await websocket.receive_text()
            resp = {
            "message":"message from websocket"
            }
            await websocket.send_json(resp)
        except Exception as e:
            print(e)
            break
    print("CONNECTION DEAD...")

FastAPI/Pydantic в проекте с MyPy
Вопросы
PYTHON
FastAPI/Pydantic в проекте с MyPy
В настоящее время я работаю над руководством по fastAPI, и моя среда настроена на черный, flake8, бандит и mypy. Все в туториале работает нормально, но мне постоянно приходится # набирать: игнорировать вещи, чтобы заставить mypy сотрудничать.

class Item(BaseModel):
    name: str
    description: str = None
    price: float
    tax: float = None


@app.post("/items/")
async def create_items(item: Item) -> Item:
    return item
Mypy затем ошибки:

 ❯ mypy main.py                                                                                                                                                                                                 [14:34:08]
main.py:9: error: Incompatible types in assignment (expression has type "None", variable has type "str")
main.py:11: error: Incompatible types in assignment (expression has type "None", variable has type "float") 
Я мог # напечатать: ignore, но тогда я теряю подсказки типа и проверку в моем редакторе. Я упустил что-то очевидное, или я должен просто отключить mypy для проектов FastAPI?

 21.05.2019 20:36
1
0
1 710
2
Данный вопрос помечен как решенный
 Ответы 2
 Ответ принят как подходящий
Вы можете использовать Optional:

from typing import Optional

class Item(BaseModel):
    name: str
    description: Optional[str] = None
    price: float
    tax: Optional[float] = None
Это говорит mypy, что значение должно быть такого типа, но None допустимо.

 21.05.2019 21:57
Если вы используете mypy, он может жаловаться на объявления типов, например:

tax: float = None
С ошибкой вроде: Несовместимые типы в присваивании (выражение имеет тип "None", переменная имеет тип "float") В этих случаях вы можете использовать Optional, чтобы сообщить mypy, что значение может быть None, например:

tax: Optional[float] = None
В приведенном выше коде Посмотрите это видео, это было объяснено в этом Описание базовой модели здесь


Условно установить модель ответа FastAPI для маршрута
Вопросы
PYTHON
Условно установить модель ответа FastAPI для маршрута
Я пытаюсь вернуть список объектов типа Company, включая только «одобренные», и с большим или меньшим количеством атрибутов в зависимости от того, является ли пользователь, запрашивающий список, суперпользователем или обычным пользователем. Это мой код на данный момент:

@router.get("/", response_model=List[schema.CompanyRegularUsers])
def get_companies(db: Session = Depends(get_db), is_superuser: bool = Depends(check_is_superuser)):
    """
    If SU, also include sensitive data.
    """
    if is_superuser:
        return crud.get_companies_admin(db=db)
    return crud.get_companies_user(db=db)
#
Функция правильно возвращает объекты в соответствии с запросом (т.е. только компании is_approved=True, если обычный запрос, и is_approved=True, и is_approved=False, если запрашивается суперпользователем. Проблема в том, что оба случая используют schema.CompanyRegularUsers, и я хотел бы использовать schema.CompanySuperusers, когда SU сделать запрос.

Как я могу добиться этой функции? То есть, есть ли способ условно установить свойство response_model функции декоратора?

Я пробовал использовать JSONResponse и вызывать schema.CompanySuperusers.from_orm() Pydantic, но он не работает со списком компаний ...

 03.04.2021 19:14
0
3
44
2
Данный вопрос помечен как решенный
 Ответы 2
Вы можете попробовать использовать оператор типа Union.

Ваш код станет

from typing import Union

@router.get("/", response_model=List[Union[schema.CompanyRegularUsers, schema.CompanySuperUser]])
таким образом, вы указываете в качестве модели ответа список schema.CompanyRegularUsers или schema.CompanySuperUser

Сообщите мне, работает ли это, так как я не тестировал

 03.04.2021 22:36
 Ответ принят как подходящий
В итоге я решил загадку, вернув собственный ответ JSONResponse. Это не отображается в автоматической документации, но я думаю, что смогу решить эту проблему в будущем. Код выглядит следующим образом, если он помогает кому-то другому:

...
from pydantic import parse_obj_as
from fastapi.responses import JSONResponse
from fastapi.encoders import jsonable_conder
...

@router.get("/", response_model=List[schema.CompanyRegularUsers])
def get_companies(db: Session = Depends(get_db), is_superuser: bool = Depends(check_is_superuser)):
    """
    If SU, also include sensitive data.
    """
    if is_superuser:
        companies = parse_obj_as(List[schema.CompanyAdmin], crud.get_companies_admin(db=db))
        return JSONResponse(jsonable_encoder(companies))
    return crud.get_companies_user(db=db)
Итак, в ветви is_admin операция пути вызывает parse_obj_as pydantic для сопоставления списка объектов, возвращаемых запросом SQLAlchemy, с (списком) объектов CompanyAdmin. Затем он использует jsonable_encoder, кодировщик, который FastAPI использует под капотом для каждого ответа по умолчанию, для сериализации списка.


Подсказка работает в браузере БД SQLite, но не в коде? --- моя проблема, решено
Вопросы
PYTHON
Подсказка работает в браузере БД SQLite, но не в коде? --- моя проблема, решено
Я пытаюсь отфильтровать список акций на основе данных о ценах. Честно говоря, я действительно не знаю, что делаю, поэтому любая помощь очень ценится. Я перейду к делу. По сути, это приглашение

        select * from (
            select symbol, name, stock_id, max(close), date
            from stock_price join stock on stock.id = stock_price.stock_id
            group by stock_id
            order by symbol
        ) where date = '2021-04-01'
отлично работает в браузере БД (SQLite). В приложении я хочу, чтобы он работал как фильтр «Новый максимум закрытия»:

import sqlite3, config
from fastapi import FastAPI, Request
from fastapi.templating import Jinja2Templates
from datetime import date

app = FastAPI()
templates = Jinja2Templates(directory = "templates")

@app.get("/")
def index(request: Request):
    stock_filter = request.query_params.get('filter', False)

    connection = sqlite3.connect(config.DB_FILE)
    connection.row_factory = sqlite3.Row
    cursor = connection.cursor()

    if stock_filter == 'new_closing_highs':
        cursor.execute("""
        select * from (
            select symbol, name, stock_id, max(close), date
            from stock_price join stock on stock.id = stock_price.stock_id
            group by stock_id
            order by symbol
        ) where date = ?
        """, (date.today().isoformat(),))

    else: 
        cursor.execute("""
            SELECT id, symbol, name FROM stock order by symbol
        """)

    rows = cursor.fetchall()

    return templates.TemplateResponse("index.html", {"request": request, "stocks": rows})

@app.get("/stock/{symbol}")
def index(request: Request, symbol):
    connection = sqlite3.connect(config.DB_FILE)
    connection.row_factory = sqlite3.Row
    cursor = connection.cursor()

    cursor.execute("""
        SELECT id, symbol, name FROM stock WHERE symbol = ?
    """, (symbol,))

    row = cursor.fetchall()

    cursor.execute("""
        SELECT *FROM stock_price WHERE stock_ID = ? ORDER BY date DESC
    """, (row['id'],))

    prices = cursor.fetchall()

    return templates.TemplateResponse("stock_detail.html", {"request": request, "stock": row, "bars": prices})
Если бы фильтр не был определен в коде, он просто вернулся бы ко всем акциям, но вместо этого он показывает пустую таблицу, и я не могу понять, почему. Запускаем это с uvicorn.

На данный момент в базе данных есть две таблицы: акции, содержащие все торгуемые активные активы, предоставленные Alpaca API:

id  symbol  name                                     Exchange
65  AAA     AAF First Priority CLO Bond ETF          ARCA
66  AAAU    Goldman Sachs Physical Gold ETF Shares   ARCA 
и stock_price:

id stock_id    date      open    high    low     close  volume
1   65      2020-10-02  24.9127 24.925  24.9127  24.92  2944
2   65      2020-10-05  24.91   24.94   24.91    24.92  29000
3   65      2020-10-06  24.89   24.91   24.89    24.91  4019
4   65      2020-10-07  24.9017 24.91   24.9     24.91  3800
5   65      2020-10-08  24.9    24.905  24.9     24.9   1534
6   65      2020-10-09  24.88   24.91   24.88    24.89  16273
Пожалуйста, дайте мне знать, если я не предоставил здесь достаточно информации. большое спасибо за то, что нашли время

 02.04.2021 18:49
1
1
38
2
 Ответы 2
Не думаю, что ваш запрос действительно работает. Возможно, это срабатывает случайно для ваших данных и конкретной даты '2021-04-01'.
Если вы хотите получить на определенную дату самую высокую цену каждой акции, вам следует присоединиться к таблицам, сгруппировать по акциям и агрегировать:

SELECT s.symbol, s.name, s.id, MAX(p.close) max_price, p.date
FROM stock s INNER JOIN stock_price p
ON p.stock_id = s.id
WHERE p.date = ?
GROUP BY s.symbol, s.name, s.id
 02.04.2021 19:18
МОЯ ВИНА! У меня пока нет данных на сегодня! Я думал, что да, но скрипт не запустился по расписанию. Надо было просто перепроверить. Извините, если я зря потратил ваше время


Python3.6 async / await по-прежнему работает синхронно с fastAPI
Вопросы
PYTHON
Python3.6 async / await по-прежнему работает синхронно с fastAPI
У меня есть приложение fastAPI, которое отправляет два запроса, один из них длиннее (если это помогает, это запросы Elasticsearch, и я использую модуль Асинхронный поиск, который уже возвращает сопрограмму). Это моя попытка:

class my_module:
    search_object = AsyncElasticsearch(url, port)

    async def do_things(self):
        resp1 = await search_object.search() #the longer one
        print(check_resp1)
        resp2 = await search_object.search() #the shorter one
        print(check_resp2)
        process(resp2)
        process(resp1)
        do_synchronous_things()
        return thing

app = FastAPI()
@app.post("/")
async def service(user_input):
    result = await my_module.do_things()
    return results
Я заметил, что вместо ожидания resp1 к тому времени, когда он добрался до check_resp1, это уже полный ответ, как будто я вообще не использовал async.

Я новичок в python async, я знал, что мой код не будет работать, но я не знаю, как это исправить. Насколько я понимаю, когда интерпретатор видит await, он запускает функцию, а затем просто переходит к следующему запросу, который в этом случае должен немедленно отправить следующий запрос. Как мне это сделать?

Я думаю, вы тут что-то напутали. Когда вы используете await, то буквально означает «остановитесь здесь и подождите, пока не придет результат». Естественно, через одну строчку после await search_object.search() ответ полностью доступен. Если не хотите ждать, не используйте await.

— 
Tomalak
 02.04.2021 12:10
Единственная разница между использованием await и синхронным вызовом функции заключается в том, что await приостанавливает только текущую функцию, а не весь мир. Ваша программа может делать другие вещи, в то время как любое количество функций чего-то ждет. Но с точки зрения функций result = await asynchronous_thing() и result = synchronous_thing() ведут себя одинаково.

— 
Tomalak
 02.04.2021 12:22
@Tomalak Спасибо! Так что я действительно понял это неправильно. Как вы сказали, если await приостанавливает выполнение «текущей функции», означает ли это, что каждая задача, связанная с вводом-выводом, должна быть записана в отдельной функции? И как к этому вернуться? Я предполагаю, что это более низкий уровень, но могу ли я просто принять как должное, что это произойдет, когда закончите?

— 
Xuekai Du
 02.04.2021 12:35
Вы можете выполнять задачи последовательно, используя await один раз для каждой задачи (a = await func_a(); b = await func_b()) или параллельно, выполняя задачи подряд и используя await один раз для группы (tasks = [func_a(), func_b()]; a, b = await asyncio.gather(*tasks)), где asyncio.gather() - помощник, который дает вам одну ожидаемую задачу который завершается, когда завершены все его аргументы.

FastAPI NameError: имя Request не определено
Вопросы
PYTHON
FastAPI NameError: имя Request не определено
Я вольно слежу за туториалом по созданию приложения для торговли с полным стеком и пытаюсь запустить этот скрипт с FastAPI и uvicorn. Я действительно не могу найти свою ошибку, а также действительно не знаю, что делаю, поэтому любая помощь действительно приветствуется.

Код:

import sqlite3, config
from fastapi import FastAPI
from fastapi.templating import Jinja2Templates

app = FastAPI()
templates = Jinja2Templates(directory = "templates")

@app.get("/")
def index(request: Request):
    connection = sqlite3.connect(config.DB_FILE)
    connection.row_factory = sqlite3.Row
    cursor = connection.cursor()

    cursor.execute("""
        SELECT id, symbol, name FROM stock order by symbol
    """)

    rows = cursor.fetchall()

    return templates.TemplateResponse("index.html", {"request": request, "stocks": rows})

@app.get("/stock/{symbol}")
def index(request: Request, symbol):
    connection = sqlite3.connect(config.DB_FILE)
    connection.row_factory = sqlite3.Row
    cursor = connection.cursor()

    cursor.execute("""
        SELECT id, symbol, name FROM stock WHERE symbol = ?
    """, (symbol,))

    row = cursor.fetchall()

    return templates.TemplateResponse("stock_detail.html", {"request": request, "stock": row})

Ошибка

line 9, in <module>
    def index(request: Request):
NameError: name 'Request' is not defined
Большое спасибо за то, что нашли время

 02.04.2021 03:56
0
0
45
2
Данный вопрос помечен как решенный
 Ответы 2
Вам необходимо импортировать Request. Заменил вам первую строку:

from fastapi import FastAPI, Request

Kubernetes с сервером и клиентами, взаимодействующими внутри кластера. Я получаю сообщение об отказе в соединении. Как это сделать?
Вопросы
PYTHON
Kubernetes с сервером и клиентами, взаимодействующими внутри кластера. Я получаю сообщение об отказе в соединении. Как это сделать?
Я хотел бы создать клиент/серверный фреймворк в Kubernetes, чтобы каждый клиент мог обрабатывать часть задачи, а сервер нечасто использовать для синхронизации. Я использую Python для создания своего сервера и клиентов с FastAPI для сервера.

В качестве очень маленького примера сервер выглядит так. из fastapi импортировать FastAPI

app = FastAPI()

@app.get("/")
def read_root():
    return {"Hello": "World"}
со следующим файлом докеров

FROM python
COPY server.py /
COPY requirements.txt /
RUN pip install -r requirements.txt
CMD [ "fastapi", "run", "server.py", "--port", "8000"]
Клиент выглядит так.

import requests

try:
    f = requests.get("http://0.0.0.0:8000")
    print(f.text)
except Exception as e:
    print(e)
    exit(5)
Со следующим файлом докеров:

FROM python
COPY client.py /
COPY requirements.txt /
RUN pip install -r requirements.txt
CMD [ "python", "client.py" ]
и yaml kubernetes выглядит так

apiVersion: v1
kind: Deployment
metadata:
  name: server
spec:
  selector:
    matchLabels:
      app: server
  replicas: 1
  template:
    metadata:
      labels:
        app: server
    spec:
      containers:
      - name: server
        image: server
        imagePullPolicy: IfNotPresent
        ports:
          - containerPort: 8000
---
apiVersion: v1
kind: Deployment
metadata:
  name: client
spec:
  selector:
    matchLabels:
      app: client
  replicas: 1
  template:
    metadata:
      labels:
        app: client
    spec:
      containers:
      - name: client
        image: client
        imagePullPolicy: IfNotPresent
        ports:
          - containerPort: 8000
После создания контейнеров (docker build -t ...), их загрузки (kind load docker-image ...) и применения yaml (kubectl apply -f app.yaml) я могу просмотреть журналы и увидеть, что сервер работает, но клиент получает ошибку connection refused.

Я предполагаю, что мне нужно использовать что-то, чтобы открыть порты помимо того, что я уже сделал, но я не могу понять, что именно.

 26.08.2024 13:03
0
5
73
1
Данный вопрос помечен как решенный
 Ответы 1
 Ответ принят как подходящий
Как упоминалось в комментариях @MO, вам необходимо использовать DNS-имя службы вместо IP-адреса в вашей настройке. Поэтому измените IP http://0.0.0.0 с именем службы на что-то вроде http://<my-svc>.<my-namespace>.

В kubernetes вам необходимо использовать службу для предоставления пода внутри кластера. Сервисы K8s действуют как уровень абстракции, который позволяет структурированно получать доступ к модулям в кластере. Поэтому вам необходимо создать службу для предоставления доступа к модулю (серверу) и предоставить стабильное DNS-имя, которое может использовать клиент. После завершения создания службы вы можете обновить имя DNS в сценарии и заставить клиента использовать этот DNS для доступа к серверу (модулю).

Вы можете определить службу следующим образом:

apiVersion: v1
kind: Service
metadata:
  name: server-service
spec:
  selector:
    app: server
  ports:
    - protocol: TCP
      port: 80
      targetPort: 8000
Используйте эту службу в клиентском скрипте примерно так

import requests

try:
    f = requests.get("http://server-service")
    print(f.text)
except Exception as e:
    print(e)
    exit(5)
Это поможет клиенту реже обращаться к серверу для синхронизации.


Невозможно запустить сервер Uvicorn/приложение FastAPI через Docker
Вопросы
PYTHON
Невозможно запустить сервер Uvicorn/приложение FastAPI через Docker
Я новичок в компьютерных сетях и Docker и пытаюсь развернуть и запустить небольшое приложение FastAPI с помощью Docker. Приложение работает успешно, когда я запускаю его локально с помощью Uvicorn, но не запускается, когда я пытаюсь развернуть его с помощью Docker. Ниже приведено сообщение об ошибке. Моя ОС — Windows. Я получаю:

Невозможно запустить сервер Uvicorn/приложение FastAPI через Docker
источник/main.py

from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def read_root():
    return {"Hello": "World"}
Вот мой Dockerfile

FROM python:3.10-slim

WORKDIR /code

COPY ./requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

COPY ./src ./src

CMD ["uvicorn", "src.main:app", "--host", "0.0.0.0", "--port", "80", "--reload"]
Вот команды, которые я использовал в терминале:

docker build -t fastapi-image . 
docker run --name fastapi-container -p 80:80 fastapi-image
вот мой журнал докера:

INFO:     Will watch for changes in these directories: ['/code']
INFO:     Uvicorn running on http://0.0.0.0:80 (Press CTRL+C to quit)
INFO:     Started reloader process [1] using StatReload
INFO:     Started server process [8]
INFO:     Waiting for application startup.
INFO:     Application startup complete.
моя файловая структура:

requirements.txt
Dockerfile
src
|--main.py
требования.txt

fastapi
uvicorn
 27.08.2024 17:37
2
9
80
1
Данный вопрос помечен как решенный
 Ответы 1
 Ответ принят как подходящий
Воспроизведя проблему, вы можете увидеть результат на localhost:80.

См. также эти посты, чтобы узнать больше о различиях между localhost и 0.0.0.0:

В чем разница между 0.0.0.0, 127.0.0.1 и localhost?
https://serverfault.com/questions/78048/whats-the-difference-between-ip-address-0-0-0-0-and-127-0-0-1


Почему происходит нарушение потоков при возврате многопоточного генератора FastAPI?
Вопросы
PYTHON
Почему происходит нарушение потоков при возврате многопоточного генератора FastAPI?
Я хочу реализовать веб-сервис с потоковым выводом с использованием FastAPI. В ходе проверки давления обнаружено, что для одного и того же запроса постоянно выполняется не один и тот же поток. В результате некоторые промежуточные переменные, хранящиеся в threadlocal, неупорядочены. Я реализовал демо-версию и протестировал ее. Показать, что поток не возвращает тот же поток по одному и тому же запросу? Могу я спросить, почему?

import logging
import threading
import time

import uvicorn
from fastapi import FastAPI
from sse_starlette import EventSourceResponse

app = FastAPI()


@app.get("/")
def stream_output():
    logging.warning(f"{threading.current_thread().ident}")
    return EventSourceResponse(num_generator(10), headers = {"thread": str(threading.current_thread().ident)})


def num_generator(n):
    for i in range(n):
        logging.warning(f"{threading.currentThread().ident}: %s" % i)
        time.sleep(2)
        yield f"thread: {threading.current_thread().ident} num: {i}"
    logging.warning(f"{threading.current_thread().ident}: end")


if __name__ == "__main__":
    uvicorn.run(app, host='localhost', port=8000)
Результат испытания под давлением:

результат одного из запросов:

data: thread: 39404 num: 0  
  
data: thread: 39404 num: 1  
  
data: thread: 57624 num: 2  
  
data: thread: 39404 num: 3  
  
data: thread: 52536 num: 4  
  
data: thread: 39404 num: 5  
  
data: thread: 52536 num: 6  
  
data: thread: 39404 num: 7  
  
data: thread: 39404 num: 8  
  
data: thread: 52536 num: 9
Я ожидаю того же потока для того же запроса

data: thread: 56052 num: 0

data: thread: 56052 num: 1

data: thread: 56052 num: 2

data: thread: 56052 num: 3

data: thread: 56052 num: 4

data: thread: 56052 num: 5

data: thread: 56052 num: 6

data: thread: 56052 num: 7

data: thread: 56052 num: 8

data: thread: 56052 num: 9
 15.08.2024 09:33
1
1
60
1
Данный вопрос помечен как решенный
 Ответы 1
 Ответ принят как подходящий
Ответ, который вы ищете, должен частично находиться в исходном коде сторонней библиотеки, которую вы используете для отправки SSE; точнее, в реализации класса EventSourceResponse, который вы возвращаете из конечной точки stream_output().

Аналогично официальному FastAPI/Starlette StreamingResponse — пожалуйста, посмотрите этот ответ и этот ответ для получения более подробной информации и объяснений — причина появления различных потоков в журналах заключается в том, что когда вы передаете синхронный генератор EventSourceResponse (т. е. обычная функция def вместо async def), такая как функция num_generator() в вашем примере, EventSourceResponse выполнит функцию def в отдельном потоке из внешнего пула потоков, используя iterate_in_threadpool() Starlette (см. соответствующую реализацию EventSourceResponse ).

Опять же, для получения более подробной информации ознакомьтесь с ответами по ссылкам выше.

Спасибо за ваш исчерпывающий комментарий! Я прочитал эти ответы и попробовал несколько раз. Но все же остался один вопрос. Когда генератор был обработан в asyncgenerator в iterate_in_threadpool(), один поток из пула потоков выполняет один asyncgenerator или выполняет один единственный шаг asyncgenerator? Есть ли какие-либо методы достижения ожидаемого результата?

— 
Bo.Ge
 16.08.2024 09:18
Если вместо этого вы передадите генератор async, он будет работать непосредственно в цикле событий, который выполняется в основном потоке; следовательно, никакие потоки из пула потоков использоваться не будут. В дополнение к ссылкам, приведенным выше, вы также можете найти этот ответ полезным в отношении пула потоков.

— 
Chris
 16.08.2024 10:13
В любом случае спасибо, я попробовал другие способы решения проблемы.


Блокировка ресурса в FastAPI — использование многопроцессорного Worker
Вопросы
PYTHON
Блокировка ресурса в FastAPI — использование многопроцессорного Worker
Я хотел бы создать сервис FastAPI с одной конечной точкой /get, которая будет возвращать результат вывода модели ML. Реализовать это довольно легко, но загвоздка в том, что мне периодически нужно обновлять модель на более новую версию (через запрос на другой сервер с моделями, но это не имеет значения), и здесь я вижу проблему!

Что произойдет, если один запрос вызовет старую модель, но в данный момент старая модель заменяется более новой?? Как я могу реализовать такой механизм блокировки с помощью asyncio?

Вот код:

import asyncio
import time
from concurrent.futures import ProcessPoolExecutor

from fastapi import FastAPI, Request
from sentence_transformers import SentenceTransformer

app = FastAPI()
sbertmodel = None


def create_model():
    global sbertmodel
    sbertmodel = SentenceTransformer('multi-qa-MiniLM-L6-cos-v1')


# if you try to run all predicts concurrently, it will result in CPU trashing.
pool = ProcessPoolExecutor(max_workers=1, initializer=create_model)


def model_predict():
    ts = time.time()
    vector = sbertmodel.encode('How big is London')
    return vector


async def vector_search(vector):
    # simulate I/O call (e.g. Vector Similarity Search using a VectorDB)
    await asyncio.sleep(0.005)


@app.get("/")
async def entrypoint(request: Request):
    loop = asyncio.get_event_loop()
    ts = time.time()
    # worker should be initialized outside endpoint to avoid cold start
    vector = await loop.run_in_executor(pool, model_predict)
    print(f"Model  : {int((time.time() - ts) * 1000)}ms")
    ts = time.time()
    await vector_search(vector)
    print(f"io task: {int((time.time() - ts) * 1000)}ms")
    return "ok"
Обновление моей модели будет реализовано с помощью повторяющихся задач (но сейчас это не важно): https://fastapi-utils.davidmontague.xyz/user-guide/repeated-tasks/

В этом идея сервировки модели: https://luis-sena.medium.com/how-to-optimize-fastapi-for-ml-model-serving-6f75fb9e040d

Обновлено: что важно для одновременного выполнения нескольких запросов, и пока модель обновляется, получите блокировку, чтобы запросы не терпели неудачу, им следует просто подождать немного дольше, потому что это небольшая модель.

 07.08.2024 18:51
1
6
50
1
Данный вопрос помечен как решенный
 Ответы 1
 Ответ принят как подходящий
Спасибо за ваш фрагмент. Когда оно видно, можно написать предложение. для чего там нужно - как оказалось, нужно обновить модель в подпроцессе, и в асинхронной части кода основного процесса не о чем беспокоиться. Сигнализация однако рабочие процессы обновлений требуют некоторого внимания.

Поскольку вы используете рабочие ProcessPool, вам нужен способ предоставить переменные из корневой процесс, который могут «видеть» работники процесса —

Python имеет это в форме multiprocessing.Manager объекты -

Ниже я выберу ваш код и добавлю части. необходимо для вашего реквизита «не сразу, но и без противоречий» обновление используемой модели. Оказывается, когда у нас есть переменные, которые можно увидеть в рабочий, все, что нужно, это проверка в модель-раннере сам метод, чтобы узнать, нужно ли обновить модель.\

Я не запускал этот фрагмент — поэтому в именах переменных может быть какая-то опечатка или даже недостающая скобка — используйте в качестве модели, не "копировать+вставить" (но я тестировал "подвижные части" объектов Manager.Namespace() и передать их в качестве параметров как initargs в ProcessPoolExecutor)

import asyncio
import time
import threading
from concurrent.futures import ProcessPoolExecutor
from multiprocessing import Manager


from fastapi import FastAPI, Request
from sentence_transformers import SentenceTransformer

sbertmodel = None
local_model_iteration = -1
shared_namespace = None

# pool, and other multi-processing objects can`t simply
# be started in the top level of the body, or they't be re
# created in each subprocess!!
# check https://fastapi.tiangolo.com/advanced/events/#lifespan


@asynccontextmanager
async def lifespan(app: FastAPI):
    global pool, root_namespace
    manager = Manager()

    root_namespace = manager.NameSpace()
    
    # Values assigned to the "namespace" object are 
    # visible on the subprocess created by the pool
    
    root_namspace.model_iteration = 0
    root_namespace.model_parameters = "multi-qa-MiniLM-L6-cos-v1"
    
    # (as long as we send the namespace object to each subprocess
    # and store it there)
    pool = ProcessPoolExecutor(max_workers=1, initializer=initialize_subprocess, initargs=(root_namespace,))
    with pool, manager:
        # pass control to fastapi: all the app is executed
        yield
    # end of "with" block:
    # both the pool and manager are shutdown when fastapi server exits!
    

app = FastAPI(lifespan=lifespan)

# if you try to run all predicts concurrently, it will result in CPU trashing.


def initialize_subprocess(shared_namespace_arg):
    global shared_namespace
    # Store the shared namespace in _this_ process:
    shared_namespace = shared_namespac_arg
    update_model()
    
def update_model():
    "called on worker subprocess start, and at any time the model is outdated" 
    global local_model_iteration, sbertmodel
    local_model_iteration = shared_namespace.model_iteration
    # retrieve parameter posted by root process:
    sbertmodel = SentenceTransformer(shared_namespace.model_parameters)



def model_predict():
    ts = time.time()
    # verify if model was updatd from the root process
    if shared_namespace.model_iteration > local_model_iteration:
        # if so, just update the model
        update_model()
    # model is synchronied, just do our job:
    vector = sbertmodel.encode('How big is London')
    return vector


async def vector_search(vector):
    # simulate I/O call (e.g. Vector Similarity Search using a VectorDB)
    await asyncio.sleep(0.005)


@app.get("/")
async def entrypoint(request: Request):
    loop = asyncio.get_event_loop()
    ts = time.time()
    # worker should be initialized outside endpoint to avoid cold start
    vector = await loop.run_in_executor(pool, model_predict)
    print(f"Model  : {int((time.time() - ts) * 1000)}ms")
    ts = time.time()
    await vector_search(vector)
    print(f"io task: {int((time.time() - ts) * 1000)}ms")
    return "ok"

@app.get("/update_model")
async def update_model_endpoint(request: Request):
    # extract from the request the needed paramters for the new model
    ...
    new_model_parameters = ...
    # uodate the model parameters and model iteration so they are visible
    # in the worker(s)
    root_namespace.model_parameters = new_model_parameters
    # This increment taking place _after_ the "model_parameters" are set 
    # is all that is needed to keep things running in order here:
    root_namespace.model_iteration += 1
    return {} # whatever response needed by the endpoint
    
    



Introduction:
FastAPI has emerged as one of the most powerful and efficient web frameworks for building APIs with Python. Its intuitive design, exceptional performance, and automatic documentation generation make it a favorite among developers. Whether you're preparing for a FastAPI interview or seeking to enhance your understanding of this framework, this article presents a collection of essential FastAPI interview questions to help you navigate the process with confidence.

Questions and Answer"
What is FastAPI, and what are its key features?

FastAPI is a modern, high-performance web framework for building APIs with Python 3.7+ based on type hints. It offers numerous features that make it stand out among other frameworks, including exceptional speed due to asynchronous support, automatic generation of interactive API documentation, automatic validation of request and response data, dependency injection, and seamless integration with third-party libraries like SQLAlchemy, Pydantic, and OAuth.

How does FastAPI handle request validation?

FastAPI leverages Python type hints and the Pydantic library to automatically validate request data. By declaring the expected data types in the function's parameters, FastAPI ensures that the incoming data adheres to the defined structure. If the data fails validation, FastAPI automatically returns appropriate error responses.

What is dependency injection in FastAPI?

Dependency injection is a powerful design pattern used in FastAPI to manage dependencies and ensure cleaner, modular code. FastAPI's dependency injection system allows you to declare dependencies directly in the function signature. These dependencies can be any Python objects, including databases, services, or configurations. FastAPI takes care of creating and managing these dependencies, making your code more maintainable and testable.

How does FastAPI handle asynchronous programming?

FastAPI fully supports asynchronous programming, leveraging Python's asyncio library. It allows you to define asynchronous endpoints using the async def syntax, enabling you to write concurrent code that efficiently handles multiple requests. Asynchronous support in FastAPI significantly boosts performance, allowing your API to handle more concurrent users without sacrificing responsiveness.

How does FastAPI generate interactive API documentation?

One of the standout features of FastAPI is its automatic generation of interactive API documentation. FastAPI uses the OpenAPI standard to generate comprehensive API documentation that includes request and response models, data types, validation rules, and even allows users to test API endpoints directly from the documentation. This feature saves developers a significant amount of time and effort in writing and maintaining separate documentation.

How can you handle authentication and authorization in FastAPI?

FastAPI provides easy integration with authentication and authorization mechanisms. You can use third-party libraries like OAuth2 and JWT (JSON Web Tokens) to implement secure authentication and authorization. FastAPI's OAuth2 support allows you to define scopes and permissions for different API routes, ensuring fine-grained access control.

How does FastAPI handle file uploads?

FastAPI provides convenient ways to handle file uploads. You can define an endpoint that accepts file uploads using the UploadFile type from the fastapi module. FastAPI automatically handles the file upload process, including storing the file on the server and providing you with access to the uploaded file's metadata and contents.

Can FastAPI handle WebSocket communication?

Yes, FastAPI supports WebSocket communication through the use of the WebSocket class. You can define WebSocket endpoints by using the WebSocket class as a parameter in your path operations. FastAPI simplifies WebSocket handling, allowing you to build real-time applications and bidirectional communication between clients and servers.

What is the difference between FastAPI and Flask?

FastAPI and Flask are both popular Python web frameworks, but they have distinct differences. FastAPI is designed for high-performance APIs and leverages modern Python features such as type hints and asynchronous programming. It provides automatic documentation generation and has built-in support for data validation and dependency injection. Flask, on the other hand, is a more lightweight framework that offers simplicity and flexibility. It is suitable for smaller projects and doesn't have the same level of performance optimizations as FastAPI.

How can you deploy a FastAPI application?

FastAPI applications can be deployed using various methods. You can deploy FastAPI on traditional web servers like Nginx or Apache using WSGI adapters such as Gunicorn or uWSGI. Another option is to use ASGI servers like Uvicorn or Hypercorn, which are specifically designed for asynchronous frameworks like FastAPI. Additionally, FastAPI can be deployed as serverless functions on platforms like AWS Lambda or Google Cloud Functions.

Does FastAPI support database integration?

Yes, FastAPI integrates seamlessly with databases. It works well with popular Python database libraries like SQLAlchemy and Tortoise ORM. These libraries provide powerful Object-Relational Mapping (ORM) capabilities, allowing you to interact with databases using Python objects and queries. FastAPI's dependency injection system makes it easy to manage and inject database connections into your application.

How can you handle cross-origin resource sharing (CORS) in FastAPI?

FastAPI includes built-in support for handling Cross-Origin Resource Sharing (CORS) to enable secure communication between different domains. You can configure CORS settings by using the fastapi.middleware.cors module. FastAPI allows you to specify the allowed origins, methods, headers, and other CORS-related settings to control access to your API.
