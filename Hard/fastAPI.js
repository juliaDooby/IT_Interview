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
