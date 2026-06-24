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
