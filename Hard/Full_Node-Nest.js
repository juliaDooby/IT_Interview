Ошибка при запуске nestjs в производственном режиме, не удается найти модуль
Вопросы
TYPESCRIPT
Ошибка при запуске nestjs в производственном режиме, не удается найти модуль
Я реализовал общий класс, как показано ниже, который может вызывать проблему,

    import { Logger } from '@nestjs/common';
    import { PaginationOptionsInterface, Pagination } from './paginate';
    import { Repository } from 'typeorm';

    export class EntityService<T> {
      private repository: Repository<T>;
      constructor(repository) {
        this.repository = repository;
      }

      async getEntityWithPagination(
        options: PaginationOptionsInterface,
      ): Promise<Pagination<T>> {
        const [results, total] = await this.repository.findAndCount({
          take: options.limit,
          skip: (options.page - 1) * options.limit,
        });
        return new Pagination<T>({ results, total });
      }
    }
и использование с другими сервисами организации, такими как

    @Injectable()
    export class CarService extends EntityService<CarEntity> {
      constructor(
        @InjectRepository(CarEntity)
        private carRepository: Repository<CarEntity>,
      ) {
        super(carRepository);
      }
код отлично работает с npm run start:dev, но выдает ошибку ниже при попытке запустить с производственным npm run start:prod

        internal/modules/cjs/loader.js:582
            throw err;
            ^

        Error: Cannot find module 'src/shared/entity.service'
            at Function.Module._resolveFilename (internal/modules/cjs/loader.js:580:15)
            at Function.Module._load (internal/modules/cjs/loader.js:506:25)
            at Module.require (internal/modules/cjs/loader.js:636:17)
            at require (internal/modules/cjs/helpers.js:20:18)
            at Object.<anonymous> (/home/tejas/Code/web/project/dist/car/car.service.js:27:26)
            at Module._compile (internal/modules/cjs/loader.js:688:30)
            at Object.Module._extensions..js (internal/modules/cjs/loader.js:699:10)
            at Module.load (internal/modules/cjs/loader.js:598:32)
            at tryModuleLoad (internal/modules/cjs/loader.js:537:12)
            at Function.Module._load (internal/modules/cjs/loader.js:529:3)
        npm ERR! code ELIFECYCLE
        npm ERR! errno 1
        npm ERR! project@0.0.0 start:prod: `node dist/main.js`
        npm ERR! Exit status 1
Я попытался удалить папку dist, но все равно не повезло. Я также пробовал обновлять пакеты, package.json выглядит следующим образом. Я понятия не имею, как это отладить.

        dependencies": {
            "@nestjs/common": "^5.5.0",
            "@nestjs/core": "^5.5.0",
            "@nestjs/jwt": "^0.2.1",
            "@nestjs/passport": "^5.1.0",
            "@nestjs/typeorm": "^5.2.2",
            "bcryptjs": "^2.4.3",
            "glob": "^7.1.3",
            "passport": "^0.4.0",
            "passport-http-bearer": "^1.0.1",
            "passport-jwt": "^4.0.0",
            "pg": "^7.7.1",
            "reflect-metadata": "^0.1.12",
            "rimraf": "^2.6.2",
            "rxjs": "^6.2.2",
            "typeorm": "^0.2.9",
            "typescript": "^3.2.2"
        },
        "devDependencies": {
            "@nestjs/testing": "^5.5.0",
            "@types/express": "^4.16.0",
            "@types/jest": "^23.3.1",
            "@types/node": "^10.12.18",
            "@types/supertest": "^2.0.7",
            "jest": "^23.5.0",
            "nodemon": "^1.18.9",
            "prettier": "^1.14.2",
            "supertest": "^3.1.0",
            "ts-jest": "^23.1.3",
            "ts-loader": "^4.4.2",
            "ts-node": "^7.0.1",
            "tsconfig-paths": "^3.5.0",
            "tslint": "5.11.0",
            "webpack": "^4.28.2",
            "webpack-cli": "^3.1.2",
            "webpack-node-externals": "^1.7.2"
        },
 28.12.2018 19:44
34
0
29 453
4
Данный вопрос помечен как решенный
 Ответы 4
 Ответ принят как подходящий
Я обнаружил проблему, это произошло из-за абсолютного пути при импорте класса.

import { EntityService } from '../shared/service-common'; //correct way

import { EntityService } from 'src/shared/service-common'; // wrong autoimport
Чтобы исправить автоматический импорт, я добавил этот параметр в VS Code

"typescript.preferences.importModuleSpecifier": "relative"
 05.01.2019 06:22
Я также видел ту же проблему из-за заглавной ссылки, когда имя файла в нижнем регистре:

import { SomeClass } from './Some.class'; 
но файл был назван some.class.ts

Исправление импорта устранило ошибку.

 19.11.2019 23:36
это вызвано заглавными буквами Имя файла.

Key-store.entity.ts -> key-store.entity.ts
переводить все имена файлов в нижний регистр.

 22.04.2020 08:05
Удалите каталог dist и снова запустите: npm run start:dev

Большое спасибо. Nest похож на Angular, но у него есть некоторые странные проблемы, которых нет у Angular.

— 
Marcin Pevik
 05.12.2021 19:40


Не проходить e2e-тесты во фреймворке NestJS
Вопросы
JAVASCRIPT
Не проходить e2e-тесты во фреймворке NestJS
Я использую фреймворк NestJS. При использовании @nestjs/типоформ я создаю репозиторий с пользователями. Используя этот подход к созданию репозитория, мой файл e2e тесты. При работе с базой все данные успешно сохраняются. Проблем с подключением нет. Вот мои файлы:

app.module.ts

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    AuthModule,
  ],
})
export class AppModule {
  constructor(private readonly connection: Connection) { }
}
auth.module.ts

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { Users } from '../../entity/Users';

@Module({
  imports: [TypeOrmModule.forFeature([Users])],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
auth.service.ts

...
      // my repo
      constructor(
        @InjectRepository(Users)
        private readonly usersRepository: Repository<Users>,
      ) { }
...
app.e2e-spec.ts

import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(404)
      .expect('{"statusCode":404,"error":"Not Found","message":"Cannot GET /"}'); //todo fix me
  });
});
Все написано в соответствии с документацией. При запуске npm запустить тест: e2e консоль выдает следующую ошибку:

> project@0.0.0 test:e2e 
> jest --config ./test/jest-e2e.json

[Nest] 7206   - 2/2/2019, 5:06:52 PM   [TypeOrmModule] Unable to connect to the database. Retrying (1)...
Error: getaddrinfo ENOTFOUND postgres postgres:5432
    at GetAddrInfoReqWrap.onlookup [as oncomplete] (dns.js:57:26)
[Nest] 7206   - 2/2/2019, 5:06:55 PM   [TypeOrmModule] Unable to connect to the database. Retrying (2)... +3234ms
Error: getaddrinfo ENOTFOUND postgres postgres:5432
    at GetAddrInfoReqWrap.onlookup [as oncomplete] (dns.js:57:26)
 FAIL  test/app.e2e-spec.ts (6.198s)
  AppController (e2e)
    ✕ / (GET) (6ms)

  ● AppController (e2e) › / (GET)

    Timeout - Async callback was not invoked within the 5000ms timeout specified by jest.setTimeout.

      at mapper (../node_modules/jest-jasmine2/build/queue_runner.js:41:52)

  ● AppController (e2e) › / (GET)

    TypeError: Cannot read property 'getHttpServer' of undefined

      17 |
      18 |   it('/ (GET)', () => {
    > 19 |     return request(app.getHttpServer())
         |                        ^
      20 |       .get('/')
      21 |       .expect(404)
      22 |       .expect('{"statusCode":404,"error":"Not Found","message":"Cannot GET /"}'); // todo fix me

      at Object.<anonymous> (app.e2e-spec.ts:19:24)
Пожалуйста помогите!

 02.02.2019 15:31
6
3
8 340
4
Данный вопрос помечен как решенный
 Ответы 4
Обязательно закройте объект app с помощью app.close() в примере по адресу https://docs.nestjs.com/fundamentals/testing#end-to-end-тестирование.

 16.04.2019 22:57
Эта ошибка может возникнуть, даже если вы неправильно ввели пути API. Он не регистрирует ошибку, но всегда выдает указанную вами строку. У меня также была похожая проблема, я помещал globalPrefix в /api и в своих тестах я забыл, что это еще один экземпляр вложенного приложения, поэтому удаление /api/ из макетов e2e все исправило.

 20.09.2019 19:35
Никогда не использует TypeOrmModule в модульном тесте. Это будет подключение к БД. Когда ваша БД не запущена, вы не сможете запустить модульный тест.

Попробуйте этот пример.

// mytest.e2e-spec.ts
import * as request from 'supertest';
import { Test } from "@nestjs/testing";
import { INestApplication } from '@nestjs/common';
import { MyTestsController } from './myTests.controller';
import { MyTestsService } from ".";
import { Warehouse } from './myTest.entity';
import { getRepositoryToken } from '@nestjs/typeorm';

describe("MyTestsController (e2e)", () => {

  let app: INestApplication;
  const myTests = [
    {
      id: "1ccc2222a-8072-4ff0-b5ff-103cc85f3be6",
      name: "Name #1",
    }
  ];

  const myTestsCount = 1;
  const getAllResult = { myTests, myTestsCount };
  // Mock data for service
  let myTestsService = { getAll: () => getAllResult };

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      providers: [
        MyTestsService,
        {
          provide: getRepositoryToken(Warehouse),
          useValue: myTestsService
        }
      ],
      controllers: [MyTestsController],
    })
      .overrideProvider(MyTestsService)
      .useValue(myTestsService)
      .compile();

    app = module.createNestApplication();
    await app.init();
  });

  beforeEach(async () => {});

  it(`/GET all myTests`, async() => {
    return await request(app.getHttpServer())
      .get('/myTests')
      .expect(200)
      .expect(myTestsService.getAll());
  });

  afterAll(async () => {
    await app.close();
  });

});
И сервис

// myTests.service.ts
public async getAll(query?): Promise<myTestsRO> {
  const qb = await this.repo.createQueryBuilder("myTests");
  const myTestsCount = await qb.getCount();

  if ("limit" in query) {
    qb.limit(query.limit);
  }

  if ("offset" in query) {
    qb.offset(query.offset);
  }

  const myTests = await qb
    .getMany()
    .then(myTests =>
      myTests.map(entity => WarehouseDto.fromEntity(entity))
    );

  return { myTests, myTestsCount };
}
И контроллер

// myTest.controller.ts
@Get()
public async getAll(@Query() query): Promise<myTestsRO> {
  try {
    return await this.myTestsService.getAll(query);
  } catch (error) {
    throw new InternalServerErrorException(error.message);
  }
}
Надеюсь, это поможет!

 02.01.2020 17:39
 Ответ принят как подходящий
Если вы хотите написать тесты e2e с макетами, вам не нужно импортировать AppModule, вы должны импортировать только свои AppController и AppService, таким образом вы избегаете подключения к своей базе данных и используете макеты для тестирования всего потока приложения.

import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import * as request from 'supertest';
import { AppController } from './../src/app.controller';
import { AppService } from './../src/app.service';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture = await Test.createTestingModule({
      imports: [],
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(404)
      .expect('{"statusCode":404,"error":"Not Found","message":"Cannot GET /"}'); //todo fix me
  });
});
При таком подходе вы получаете чистый тестовый модуль без TypeOrmModule. ПРИМЕЧАНИЕ. Если вам нужно имитировать сервис, у Test есть метод overrideProvider для переопределения вашего сервиса и такие методы, как useClass, useValue или useFactory, для предоставления вашего макета.

Если вы хотите написать интеграционный тест, чтобы убедиться, что все вместе работает нормально, вы можете переопределить конфигурацию вашего TypeOrmModule, передав ее модулю тестирования с новой конфигурацией БД, как описано в эта почта.

Надеюсь, я помог. Удачи и привет.

NestJs: Как сделать форму ввода Body отличной от DTO объекта?
Вопросы
JAVASCRIPT
NestJs: Как сделать форму ввода Body отличной от DTO объекта?
У меня есть DTO для моих объектов Photo и Tag, которые выглядят так:

export class PhotoDto {
    readonly title: string
    readonly file: string
    readonly tags: TagDto[]
}

export class TagDto {
    readonly name: string
}
Я использую PhotoDto в своем photo.service.ts и, в конечном итоге, в photo.controller.ts для создания фото:

// In photo.service.ts
async create(createPhotoDto: PhotoDto): Promise<PhotoEntity> {
   // ...
   return await this.photoRepo.create(createPhotoDto)
}

// In photo.controller.ts
@Post()
async create(@Body() createPhotoDto: PhotoDto): Promise<PhotoEntity> {
   // ...
}
Однако ожидается, что входные данные в теле API будут иметь следующую структуру:

{
   "title": "Photo Title",
   "file": "/some/path/file.jpg",
   "tags": [
      {
         "name": "holiday"
      },
      {
         "name": "memories"
      }
   ]
}
Как я могу изменить форму ввода Body, чтобы вместо этого принять эту структуру?

{
   "title": "Photo Title",
   "file": "/some/path/file.jpg",
   "tags": ["holiday", "memories"]
}
Я попытался создать 2 разных DTO, CreatePhotoDto и InputPhotoDto, один для желаемой входной формы в контроллере и один для использования с сервисом и сущностью, но это в конечном итоге очень беспорядочно, потому что есть много работы с преобразованием между 2 ДТО.

Каков правильный способ получить форму ввода, отличную от Body запроса Post, а затем превратить ее в DTO, необходимый для использования сущностью?

 01.04.2019 06:18
6
0
10 842
3
Данный вопрос помечен как решенный
 Ответы 3
Обновите DTO до

export class PhotoDto { readonly title: string readonly file: string readonly tags: Array<string> }

Это изменит структуру API на

{ "title": "Photo Title", "file": "/some/path/file.jpg", "tags": ["holiday", "memories"] }

в настоящее время ваше свойство тегов представляет собой массив объектов типа ТегDto, измените свойство тегов на просто массив строк.

 01.04.2019 08:43
Вы можете создать собственный декоратор nest для преобразования входных данных в ваш объект DTO.

export const ConvertToCreateCatDto = createRouteParamDecorator((data, req): CreateCatDto => { // `createParamDecorator` for nest old version
    if (req.body.tags.every(value => typeof value === "string")) { // if input tags is a string[]
        req.body.tags = (req.body.tags as string[]).map<TagDto>((tag) => {
            return { // convert to TagDto
                name: tag + ""
            }
        });
    }
    let result = new CreateCatDto(req.body);
    // TODO: validate `result` object
    return result;
});
добавить конструктор в CreateCatDto

export class CreateCatDto {
    readonly title: string;
    readonly file: number;
    readonly tags: TagDto[];

    constructor(obj: any) {
        this.title = obj.title;
        this.file = obj.file;
        this.tags = obj.tags;
    }
}
Наконец, используйте @ConvertToCreateCatDto вместо @Body в вашем контроллере.

// In photo.controller.ts
@Post()
async create(@ConvertToCreateCatDto() createPhotoDto: PhotoDto): Promise<PhotoEntity> {
   //...
}
 01.04.2019 09:20
 Ответ принят как подходящий
Вы можете использовать автотрансформацию ValidationPipe():

1) Добавьте ValidationPipe в свой контроллер:

@UsePipes(new ValidationPipe({ transform: true }))
@Post()
async create(@Body() createPhotoDto: PhotoDto): Promise<PhotoEntity> {
   // ...
}
2) Добавьте @Transform к PhotoDto:

// Transforms string[] to TagDto[]
const transformTags = tags => {
  if (Array.isArray(tags)) {
    return tags.map(tag => ({name: tag}))
  } else {
    return tags;
  }
}


import { Transform } from 'class-transformer';
export class PhotoDto {
    readonly title: string
    readonly file: string
    @Transform(transformTags, {toClassOnly: true})
    readonly tags: TagDto[]
}


Команда Nrwl nx для создания библиотеки для гнездового модуля
Вопросы
NESTJS
Команда Nrwl nx для создания библиотеки для гнездового модуля
Я новичок в nrwl nx cli, тщательно просмотрел их документацию и не смог найти команду для создания модуля nestjs как библиотеки, а не фактического модуля в приложении.

Причина, по которой я хочу создать модуль NestJS как lib, заключается в том, что у меня есть несколько приложений NestJS в моем монорепозитории и в соответствии с рекомендациями nrwl nx, если мне нужно поделиться кодом, который в моем случае является модулем, это должна быть библиотека. .

Может ли кто-нибудь поделиться командой, чтобы сделать следующее: -

Сгенерировать модуль nestsjs в libs
Создайте сервисnesjs для этого модуля в папке libs
Любая помощь горячо приветствуется.

 28.03.2019 13:33
8
0
5 586
3
 Ответы 3
Я получил команду, которая, наконец, выполняет свою работу и делится с другими, если им нужна помощь.

ng generate @nestjs/schematics:library mynestlib
 28.03.2019 13:52
Цитата из рабочей области Nx официальная документация:

Creating a Lib Adding new libs to an Nx Workspace is done by using the Angular CLI generate command, just like adding a new app.

ng generate lib mylib
ng generate library mylib # same thing
This will create a new lib, will place it in the libs directory, and will configure the angular.json and nx.json files to support the new lib.

Run ng generate lib --help to see the list of available options.

ng generate lib mylib --directory=myteam will create a new application in libs/myteam/mylib.

Если --directory не определен, он спросит вас, в каком каталоге он должен быть сгенерирован и какой фреймворк следует использовать (Angular или TS).

Если это не работает, пожалуйста, возможно, вам следует проверить свою версию Nx, а также ваш angular.json.

@nrwl/schematics не может быть коллекцией по умолчанию, используемой как Эта проблема упомянул.

угловой.json

"cli": {
  "defaultCollection": "@nrwl/schematics",
  "packageManager": "yarn"
},
 29.03.2019 10:02
Я столкнулся с той же проблемой в последнее время.

Хотя @Atul Chaudhary может решить проблему по-другому, Я смог решить свою проблему после этот комментарий

Таким образом, вам просто нужно добавить новый файл nest-cli.json в ваш корневая папка рабочей области nx и указать эту основную информацию в соответствии со структурой вашего проекта.

nest-cli.json базовый пример
{
  "collection": "@nestjs/schematics",
  "sourceRoot": "apps/api/src"
}
Надеюсь, это может помочь некоторым людям :)

Как выполнить несколько команд из саги оnesjs?
Вопросы
NESTJS
Как выполнить несколько команд из саги оnesjs?
Я создал сагу, чтобы отреагировать на данное событие. В этом случае необходимо выполнить несколько команд.

Моя сага выглядит так:

@Injectable()
export class SomeSagas {
    public constructor() {}

    onSomeEvent(events$: EventObservable<any>): Observable<ICommand> {
        return events$.ofType(SomeEvent).pipe(
            map((event: SomeEvent) => {
                return of(new SomeCommand(uuid()), new SomeCommand(uuid()));
            }),
        );
    }
}
При отладке я обнаружил, что возникает ошибка «CommandHandler not found exception!», что немного сбивает с толку, потому что в случае, если я возвращаю только один экземпляр SomeCommand, обработчик команд вызывается правильно.

Я что-то упустил или реализация саги просто не поддерживает выдачу нескольких команд?

 12.02.2019 12:05
3
0
1 288
3
Данный вопрос помечен как решенный
 Ответы 3
 Ответ принят как подходящий
Кажется, я нашел ответ на него - это связано с RxJS:

@Injectable()
export class SomeSagas {
    public constructor() {}

    onSomeEvent(events$: EventObservable<any>): Observable<ICommand> {
        return events$.ofType(SomeEvent).pipe(
            map((event: SomeEvent) => {
                const commands: ICommand[] = [
                  new SomeCommand(uuid()),
                  new SomeCommand(uuid()),
                  new SomeCommand(uuid()),
                ];
                return commands;
            }),
            flatMap(c => c), // piping to flatMap RxJS operator is solving the issue I had
        );
    }
}
 12.02.2019 15:55
Вы можете использовать mergeMap() для генерации другого наблюдаемого. Он будет продолжать испускать эту наблюдаемую до тех пор, пока не завершится, но в вашем случае это произойдет сразу, если вы используете наблюдаемую of().

    onSomeEvent(events$: EventObservable<any>): Observable<ICommand> {
        return events$.ofType(SomeEvent).pipe(
            mergeMap((event: SomeEvent) => of(
                  new SomeCommand(uuid()),
                  new SomeCommand(uuid()),
                  new SomeCommand(uuid()),
            ))
        );
    }
}
 01.08.2020 16:09
Поскольку flatMap устарел, вместо этого вы можете использовать mergeMap:

    @Injectable()
    export class Saga {
        public constructor() {}
    
        onSomeEvent(events$: EventObservable<any>): Observable<ICommand> {
            return events$.ofType(SomeEvent).pipe(
                map((event: SomeEvent) => {
                    const commands: ICommand[] = [
                      new FirstCommans(uuid()),
                      new SecondCommand(uuid()),
    
                    ];
                    return commands;
                }),
                mergeMap(c => c),
            );
        }
    }


Используйте пакет NestJs в проекте nodejs/express
Вопросы
NESTJS
Используйте пакет NestJs в проекте nodejs/express
Я разработал гнездовой JS-модуль. Я опубликовал это в npm, используя npm publish.

Теперь я хотел бы использовать этот модуль NestJS в проекте, построенном на nodejs и экспресс.

Пожалуйста, сообщите, могу ли я использовать модуль nestjs в проекте node/express. Если да, есть ли какая-либо документация по этому поводу.

Согласно комментарию пользователя, добавив еще несколько деталей.

Это своего рода библиотека, в которой есть модуль с несколькими экспортированными методами. Этот метод содержит реализацию, которая вызывает сервис aws sns для отправки push-уведомления.

Я нашел ссылку, теперь пытаюсь использовать это.

https://codeburst.io/https-chidume-nnamdi-com-npm-module-in-typescript-12b3b22f0724

Заранее спасибо.

 24.01.2019 16:23
0
2
2 397
3
 Ответы 3
Поскольку модуль NestJS сам по себе является модулем для экспресс-приложения, то, что вы можете сделать, чтобы сделать этот модуль пригодным для использования внутри другого приложения, которое в настоящее время не использует NestJS, — это смонтировать его как дополнительное приложение.

Я создал модуль NestJS и смонтировал его как подприложение ванильного экспресс-приложения, вы можете позаимствовать мой пример теста здесь: https://github.com/tzkmx/nestjs-graphql-as-express-subapp

Ключ экспортирует ваш модуль как уже инициализированное вспомогательное приложение, вы не можете смонтировать модуль непосредственно внутри другого экспресс-приложения, не используя в нем саму структуру NestJS.

// src/sub-app/boot.js
import { NestFactory } from '@nestjs/core'
import { SubAppModule } from './module'

export default async function bootstrap () {
  const app = await NestFactory.create(SubAppModule)

  return app
}
// src/app.js
import bootstrapSubApp from './sub-app/boot'
import express from 'express'

const app = express()

app.get('/', (req, res) => res.send('hello express\n'))

async function mountSubApp (app, mountPath, subAppBoot) {
  const subApp = await subAppBoot()
  await subApp.init()

  app.use(mountPath, subApp.getHttpAdapter().getInstance())
  return app
}

mountSubApp(app, '/sub', bootstrapSubApp)
.then(app => app.listen(4000))
Как видите, необходимо сначала вызвать subApp.init(), а затем получить экспресс-экземпляр с subApp.getHttpAdapter().getInstance(), чтобы смонтировать его в приложении vanilla js express.

 26.01.2019 01:02
Только для обновления.

Я экспортировал метод внутри main.ts/index.ts, в зависимости от того, какой файл является вашей точкой входа.

После этого я сделал

1: запустить сборку npm 2: публикация npm.

После этого, когда я установил опубликованный пакет внутри другого проекта Express/Nest, я смог вызвать методы.

Спасибо

 31.01.2019 08:37
Вы можете использовать ExpressAdapter для размещения экспресс-приложения внутри вашего приложения nest.js.

import { NestFactory } from '@nestjs/core'
import { SubAppModule } from './sub-app/module'
import {ExpressAdapter} from "@nestjs/core/adapters/express-adapter";
import {expressApp} from "./expressApp";

async function bootstrap () {
  const app = await NestFactory.create(SubAppModule, new ExpressAdapter(expressApp))
  app.listen(4444)
  return app
}

bootstrap()
вы можете увидеть полный пример, основанный на оригинальном примере @Jesús Franco: https://github.com/eylonmalin/nestjs-graphql-as-express-subapp

Как использовать внешние сущности в проекте nestjs с typeorm?
Вопросы
NESTJS
Как использовать внешние сущности в проекте nestjs с typeorm?
Я пытаюсь использовать объекты типа orm, определенные вне проекта. То есть у меня два проекта: модели и core-api. Models - это пакет npm, который экспортирует определение сущностей. Итак, из core-api (проект nestjs) я пытаюсь определить соединение, используя эти объекты. Что-то вроде этого:

@Module({
    imports: [ TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'postgres',
    port: 5432,
    username: 'myuser',
    password: 'mypass',
    database: 'mydb',
    entities: [
        __dirname + '../node_modules/something/models/src/*.entity.ts'
    ],
    synchronize: true,
    }), AModule ],
    controllers: [],
    providers: [],
})
export class AppModule {}
Затем в модуле A я импортирую объект A из пакета npm:

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AsController } from './As.controller';
import { AsService } from './As.service';
import { A } from 'something/models';

@Module({
  imports: [TypeOrmModule.forFeature([ A ])],
  controllers: [AController],
  providers: [AService],
})
export class AModule {}
Это заканчивается следующей ошибкой:

RepositoryNotFoundError: No repository for "A" was found. Looks like this entity is not registered in current "https://stackoverflow.com/a/54191513/3943197https://stackoverflow.com/a/54191513/3943197default" connection?

Я совершенно не понимаю, как следовать, так как не понимаю, как это работает под капотом. Я видел код typeorm и @ nestjs / typeorm, но не мог понять, как его решить.

Спасибо!

Обновлено: Я мог бы заставить его работать, добавив класс сущности вместо пути, как сказал @serianox. Кроме того, пакет npm something/models экспортирует автономный модуль вложенности. Этот модуль импортирует / экспортирует объекты, определенные в пакете. Таким образом, я мог внедрить сущности в основное приложение.

 09.01.2019 13:37
3
0
4 230
3
 Ответы 3
Похоже, вы импортируете файлы .ts из node_modules. Я считаю, что после того, как вы создали свой пакет npm, эти объекты теперь являются файлами .js. Вам следует попробовать изменить свое выражение, чтобы оно могло анализировать файлы .js.

Лично я никогда не использую ts-node, так как он приносит такие проблемы, и отладка с ним практически недоступна. Я считаю, что вам всегда следует использовать среду выполнения node и анализировать только файлы .js (кроме того, это ближе к рабочей среде).

 09.01.2019 15:12
Вы можете передавать ссылки на классы в «сущности» вместо пути, Например:

import {Entity1, Entity2} from '@models'

@Module({
    imports: [ TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'postgres',
    port: 5432,
    username: 'myuser',
    password: 'mypass',
    database: 'mydb',
    entities: [
        Entity1, Entity2
    ],
    synchronize: true,
    }), AModule ],
    controllers: [],
    providers: [],
})
export class AppModule {}
 15.01.2019 02:24
Думаю, нашел обходной путь для этой проблемы;

мы можем импортировать модули из модуля npm следующим образом

import * as Models from "your-models-package";
затем перебрать их и сохранить в массиве

const models = [];
for (const key in Models) {
  if (Models.hasOwnProperty(key)) {
    const model = Models[key];
    models.push(model);
  }
}
окончательное использование в определении модуля

const dbConfig = TypeOrmModule.forRoot({
  type: "postgres",
  database: config.postgres.db,
  host: config.postgres.host,
  port: Number(config.postgres.port),
  username: config.postgres.user,
  password: config.postgres.pass,
  entities: models,
  synchronize: true,
});
Я надеюсь, что это помогает

ваше здоровье


NestJs: зачем нам DTO и интерфейсы как в NestJS
Вопросы
NESTJS
NestJs: зачем нам DTO и интерфейсы как в NestJS
Документация NestJS демонстрирует, как добавить DTO для использования в контроллерах для проверки объектов запроса с помощью пакета class-validator. Описанные DTO - это классы TypeScript. Теперь, когда контроллеры имеют дело с DTO (классами TS), поставщики (или службы) NestJS, с другой стороны, используют интерфейсы TypeScript. Эти DTO и интерфейсы в значительной степени имеют одинаковую форму.

Теперь я вижу здесь дублирование определения формы. И интересно, нужны ли вообще интерфейсы?

Разве мы не можем сделать DTO источником истины для формы и валидации? Один из подходов, которые мы рассматривали (чтобы сделать DTO источником истины), заключался в том, чтобы генератор openapi принимал DTO в качестве входных данных и генерировал определение openapi, а оттуда другой кодогенератор мог бы сгенерировать набор интерфейсов машинописного текста для использования самим NestJS и которые могут использоваться совместно с другим набором потребительских приложений, таких как Угловой.

Кто-нибудь сталкивался с подобной проблемой? Что вы думаете об этом? Обратная связь приветствуется.

 29.11.2018 04:37
38
0
17 536
8
 Ответы 8
Я не эксперт, но я вообще не использую DTO. Я действительно не видел в них пользы. В каждом модуле у меня есть служба, модуль, объект и контроллер.

 29.11.2018 05:45
Думаю, важно знать, что такое DTO.

DTO(Data Transfer Object) - это концепция дизайна Java(J2EE).

Похоже на обычный объект Java Bean, который был создан для передачи объекта данных через несколько уровней (например, controller, service, database) в нашем бэкэнде, особенно в Distributed Systems.

Без модели DTO

Мы отправляем множество запросов для запроса некоторых данных, которые нам нужны, которые могут дублироваться.

Application -> WebService -> Database

Он потребляет большой объем трафика из-за дублирования запросов.
Небезопасно, он возвращает весь объект из database, который содержит некоторые атрибуты, которые не должны отображаться. Кстати, мы должны вручную добавить дополнительный код, чтобы ограничить его, что отстой.
С моделью DTO

Это помогает нам обрабатывать наш объект данных.

В руководстве NestJS, DTO действует как тело HTTP Request.

На мой взгляд, DTO содержит:

некоторые атрибуты мы бы использовали, но не в Database.
и маски DTO:

некоторые атрибуты, которые мы не хотим раскрывать.
Для использования с class-validator, DTO также может помочь нам элегантно проверить данные.

Иногда это выглядит так же с объектом interface.

Я думаю, что DTO имеет значение, когда наша коллекция баз данных огромна и сложна.

 01.12.2018 10:13
Чтобы расширить ответ @Victor относительно концепции DTO и ее роли, я хотел бы указать, что interfaces позволяет нам установить контракт, который представляет что-то значимое в нашем приложении. Затем мы можем реализовать и / или расширить этот контракт в других местах, где это необходимо, а также, в частности, например определение сущности для объектов базы данных - DAO, объекты передачи данных - DTO и определения бизнес-моделей.

Кроме того, interfaces для DTO могут совместно использоваться в серверной и интерфейсной части, так что оба проекта могут избежать дублирования кода и различий между объектами, которыми обмениваются для простоты разработки и удобства обслуживания.

 06.02.2020 20:59
Согласно документы Nestjs:

But first (if you use TypeScript), we need to determine the DTO (Data Transfer Object) schema. A DTO is an object that defines how the data will be sent over the network. We could determine the DTO schema by using TypeScript interfaces, or by simple classes. Interestingly, we recommend using classes here. Why? Classes are part of the JavaScript ES6 standard, and therefore they are preserved as real entities in the compiled JavaScript. On the other hand, since TypeScript interfaces are removed during the transpilation, Nest can't refer to them at runtime. This is important because features such as Pipes enable additional possibilities when they have access to the metatype of the variable at runtime.

 10.06.2020 18:58
Кстати, даже несмотря на то, что DTO - это соглашение Java, оно не может решить проблему общих полей, например:

@Get(url/${variable})
@Reponse({
   [$variable: string]: $value
})
Только интерфейсы TS могут решить эту проблему, но вы не можете описать ее в DTO. И чтобы показать это, вы передадите жестко запрограммированный пример

class ResponseDto {
  @ApiProperty({
    ...
    example: [...]
  })
  [$variable]: SomeTSInterface[]
}

@Reponse({ status: 200, type: ResponseDto })
 22.04.2021 17:11
одна вещь, которую dto предоставляет больше, чем интерфейс. с помощью dto и валидатора классов вы можете быстро выполнять проверки на уровне запроса. Но когда дело доходит до интерфейса, вы не можете добавить к нему валидатор класса. dtos - это класс в целом. это означает, что вы имеете дело не только с интерфейсом.

 20.08.2021 16:54
Я хотел бы объяснить концепцию DTO на простейшем возможном примере для вашего лучшего понимания. DTO расшифровывается как Data Transfer Object. Теперь DTO используются для уменьшения дублирования кода. Он просто определяет схему, которая передается в параметрах функций, чтобы упростить получение от них требуемых данных. Вот пример DTO

export class AuthCredentialsDto {
    email: string;
    password: string;
}
Теперь, если мы сделаем метод, чтобы проверить, правильный ли пароль или нет

async password_check(usercredentials: AuthCredentialsDTO)
{
    //Destructuring in JAVASCRIPT
    const {email} = usercredentials;
    //Database Logic to find the email
    return user;
}
Если бы мы не использовали DTO, то код выглядел бы так:

async password_check(email: string, password: string)
    {
        //Database Logic to find the email
        return user;
    }
также дело в том, что это всего лишь одна функция в структуре, множественная функция вызывает несколько других функций, которые требуют передачи параметров снова и снова. Просто учтите, что функция требует 10 параметров. вам придется проходить их несколько раз. хотя можно работать и без DTO, но это не очень удобно для разработчиков. Как только вы привыкнете к DTO, вы захотите использовать их, поскольку они экономят много дополнительного кода и усилий. С Уважением

 31.08.2021 20:19
Я не эксперт, но не понимаю, зачем мы используем Dto Когда мы можем использовать модель схемы - зачем нужны Dto и дополнительные объекты

Это не дает ответа на вопрос. Как только у вас будет достаточно репутация, вы сможете комментировать любой пост; вместо этого дать ответы, не требующие пояснений от спрашивающего. - Из обзора

— 
Stefano Sansone
 11.09.2021 13:15


Как справиться с ошибкой мангуста с помощью nestjs
Вопросы
TYPESCRIPT
Как справиться с ошибкой мангуста с помощью nestjs
Я последовал примеру из https://docs.nestjs.com/techniques/mongodb

Проблема заключается в том, что возникает ошибка проверки мангуста (например, у меня есть схема с обязательным полем, а она не предоставляется):

Из games.service.ts:

  async create(createGameDto: CreateGameDto): Promise<IGame> {
    const createdGame = new this.gameModel(createGameDto);
    return await createdGame.save();
  }
Функция save () возвращает обещание.

Теперь у меня есть это в game.controller.ts

  @Post()
  async create(@Body() createGameDto: CreateGameDto) {
    this.gamesService.create(createGameDto);
  }
Как лучше всего обработать ошибку, а затем вернуть ответ с другим статусом http и, возможно, текстом json? Вы бы обычно бросали HttpException, но откуда? Я не могу этого сделать, если буду обрабатывать ошибки с помощью .catch () в обещании.

(Только начал использовать фреймворк nestjs)

 14.06.2018 20:45
9
0
9 699
8
Данный вопрос помечен как решенный
 Ответы 8
В своем приложении я использую Exception Filters (https://docs.nestjs.com/exception-filters) и try/catch:

  async create(createGameDto: CreateGameDto): Promise<IGame> {
    try {
      const createdGame = new this.gameModel(createGameDto);
      return await createdGame.save();
    } catch (e) {
       // the e here would be MongoError
       throw new InternalServerException(e.message);
    }
  }
 15.06.2018 20:55
 Ответ принят как подходящий
Во-первых, вы забыли добавить return в свой метод создания внутри контроллера. Это распространенная, очень вводящая в заблуждение ошибка, которую я делал тысячу раз, и на ее отладку у меня уходили часы.

Чтобы поймать исключение:

Вы можете попытаться поймать MongoError с помощью @Catch.

Для своих проектов я делаю следующее:

import { ArgumentsHost, Catch, ConflictException, ExceptionFilter } from '@nestjs/common';
import { MongoError } from 'mongodb';

@Catch(MongoError)
export class MongoExceptionFilter implements ExceptionFilter {
  catch(exception: MongoError, host: ArgumentsHost) {
    switch (exception.code) {
      case 11000:
        // duplicate exception
        // do whatever you want here, for instance send error to client
    }
  }
}
Затем вы можете просто использовать его в своем контроллере (или даже использовать его как глобальный фильтр / фильтр с областью действия класса):

import { MongoExceptionFilter } from '<path>/mongo-exception.filter';

@Get()
@UseFilters(MongoExceptionFilter)
async findAll(): Promise<User[]> {
  return this.userService.findAll();
}
(Повторяющееся исключение не имеет смысла здесь, в вызове findAll (), но вы поняли идею).

Кроме того, я настоятельно рекомендую использовать валидаторы классов, как описано здесь: https://docs.nestjs.com/pipes

 31.07.2018 17:33
используйте try / catch

async getUser(id: string, validateUser ?: boolean): Promise<Users> {
    try {
      const user = await this.userModel.findById(id).exec();
      if (!user && validateUser) {
        throw new UnauthorizedException();
      }else if (!user) {
        throw new HttpException(`Not found this id: ${id}`, HttpStatus.NOT_FOUND)
      }
      return user;
    } catch (err) {
      throw new HttpException(`Callback getUser ${err.message}`, HttpStatus.BAD_REQUEST);
    }
 25.10.2018 14:30
Вы можете использовать Ошибка в мангусте и добавить его в AllExceptionFilter

Пожалуйста, обратитесь к документации NestJS для фильтры исключений

import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
  InternalServerErrorException
} from "@nestjs/common";

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  catch(exception: InternalServerErrorException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();

    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    /**
     * @description Exception json response
     * @param message
     */
    const responseMessage = (type, message) => {
      response.status(status).json({
        statusCode: status,
        path: request.url,
        errorType: type,
        errorMessage: message
      });
    };

    // Throw an exceptions for either
    // MongoError, ValidationError, TypeError, CastError and Error
    if (exception.message.error) {
      responseMessage("Error", exception.message.error);
    } else {
      responseMessage(exception.name, exception.message);
    }
  }
}
Вы можете добавить его в main.ts, но это действительно зависит от вашего варианта использования. Вы можете проверить это в Nest.js документация.

async function bootstrap() {

  const app = await NestFactory.create(AppModule);

  app.useGlobalFilters(new AllExceptionsFilter());

  await app.listen(3000);
}
bootstrap();
Надеюсь, поможет.

 04.02.2020 09:12
Я провел небольшое исследование и обнаружил, что этот работает. Создайте один фильтр исключений Mongo, как показано ниже

import { ExceptionFilter, Catch, ArgumentsHost, HttpStatus } from "@nestjs/common";
import { MongoError } from 'mongodb';
import { Response } from 'express';

@Catch(MongoError)
export class MongoExceptionFilter implements ExceptionFilter {

    catch(exception: MongoError, host: ArgumentsHost) {
        switch (exception.code) {
            case 11000:
                const ctx = host.switchToHttp();
                const response = ctx.getResponse<Response>();
                response.statusCode = HttpStatus.FORBIDDEN;
                response
                    .json({
                        statusCode: HttpStatus.FORBIDDEN,
                        timestamp: new Date().toISOString(),
                        message: 'You are already registered'
                    });
        }
    }
}

И не забудьте определить метод контроллера следующим образом:

@UseFilters(MongoExceptionFilter)
  @Post('signup')
  @HttpCode(HttpStatus.OK)
  async createUser(@Body() createUserDto: CreateUserDto) {
    await this.userService.create(createUserDto);
  }

Надеюсь, это кому-то поможет. Ваше здоровье!

 09.06.2020 10:36
Прибей это сегодня

проверка-error.filter.ts:

import { ArgumentsHost, Catch, RpcExceptionFilter } from '@nestjs/common';
import { Error } from 'mongoose';
import ValidationError = Error.ValidationError;

@Catch(ValidationError)
export class ValidationErrorFilter implements RpcExceptionFilter {

  catch(exception: ValidationError, host: ArgumentsHost): any {

    const ctx = host.switchToHttp(),
      response = ctx.getResponse();

    return response.status(400).json({
      statusCode: 400,
      createdBy: 'ValidationErrorFilter',
      errors: exception.errors,
    });
  }
}
main.ts:

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationErrorFilter } from './validation-error.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new ValidationErrorFilter());
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
результат:

{
  "statusCode": 400,
  "createdBy": "ValidationErrorFilter",
  "errors": {
    "dob": {
      "properties": {
        "message": "Path `dob` is required.",
        "type": "required",
        "path": "dob"
      },
      "kind": "required",
      "path": "dob"
    },
    "password": {
      "properties": {
        "message": "Path `password` is required.",
        "type": "required",
        "path": "password"
      },
      "kind": "required",
      "path": "password"
    }
  }
}
 29.07.2020 23:28
Я нашел здесь решения, то, что я использую, представляет собой комбинацию того и другого, чтобы отлавливать разные ошибки

import { ArgumentsHost, Catch, ExceptionFilter, RpcExceptionFilter } from '@nestjs/common';
import { Error } from 'mongoose';
import { IDTOError } from '../errors/bad-request-exception.error';
import ValidationError = Error.ValidationError;
import { MongoError } from 'mongodb';


@Catch(MongoError)
export class MongoExceptionFilter implements ExceptionFilter {
  catch(exception: MongoError, host: ArgumentsHost) {
    // switch (exception.code) {
    //   case 11000:
    //   default: console.info(exception,'ALERT ERROR CATCHED');
    //     // duplicate exception
    //     // do whatever you want here, for instance send error to client


    //     /** MAIGOD */
    // }
    const ctx = host.switchToHttp(),
      response = ctx.getResponse();

    return response.status(400).json(<IDTOError>{
      statusCode: 400,
      createdBy: 'ValidationErrorFilter, Schema or Model definition',
      errors: exception,
    });

  }
}

@Catch(ValidationError)
export class ValidationErrorFilter implements RpcExceptionFilter {

  catch(exception: ValidationError, host: ArgumentsHost): any {

    const ctx = host.switchToHttp(),
      response = ctx.getResponse();

    return response.status(400).json(<IDTOError>{
      statusCode: 400,
      createdBy: 'ValidationErrorFilter, Schema or Model definition',
      errors: exception.errors,
    });
  }
}
 28.10.2020 04:01
Я использую Moongose, и ни одно из решений здесь или в других вопросах не помогло мне; Я последовал примеру документации и сделал это, у меня это сработало.

SRC \ фильтры \ монго-исключение.filter.ts

import { ArgumentsHost, Catch, ExceptionFilter, HttpStatus } from '@nestjs/common';

import * as MongooseError from 'mongoose/lib/error'; // I couldn't see the error class is being exported from Mongoose

@Catch(MongooseError)
export class MongoExceptionFilter implements ExceptionFilter {
  catch(exception: MongooseError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    // const request = ctx.getRequest();

    let error;

    switch (exception.name) {
      case 'DocumentNotFoundError': {
        error = {
          statusCode: HttpStatus.NOT_FOUND,
          message: "Not Found"
        }
        break;
      }
      // case 'MongooseError': { break; } // general Mongoose error
      // case 'CastError': { break; }
      // case 'DisconnectedError': { break; }
      // case 'DivergentArrayError': { break; }
      // case 'MissingSchemaError': { break; }
      // case 'ValidatorError': { break; }
      // case 'ValidationError': { break; }
      // case 'ObjectExpectedError': { break; }
      // case 'ObjectParameterError': { break; }
      // case 'OverwriteModelError': { break; }
      // case 'ParallelSaveError': { break; }
      // case 'StrictModeError': { break; }
      // case 'VersionError': { break; }
      default: {
        error = {
          statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
          message: "Internal Error"
        }
        break;
      }
    }

    response.status(error.statusCode).json(error);
  }
}
src \ main.ts

import { MongoExceptionFilter } from './filters/mongo-exception.filter';

async function bootstrap() {
  // .......

  app.useGlobalFilters(new MongoExceptionFilter); // Use Mongo exception filter

  await app.listen(3000);
}
bootstrap();


Регистрация запроса/ответа в Nest.js
Вопросы
TYPESCRIPT
Регистрация запроса/ответа в Nest.js
Новое в Nest.js,
Я пытаюсь реализовать простой регистратор для отслеживания HTTP-запросов, например:

:method :url :status :res[content-length] - :response-time ms
Насколько я понимаю, лучшим местом для этого будет перехватчики. Но я также использую Охранники, и, как уже упоминалось, охранники запускаются промежуточным программным обеспечением после, но перехватчиками до.

Это означает, что мои запрещенные доступы не регистрируются. Я мог бы написать часть регистрации в двух разных местах, но не стал бы. Есть идеи?

Спасибо!

Мой код перехватчика:

import { Injectable, NestInterceptor, ExecutionContext, HttpException, HttpStatus } from '@nestjs/common';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable()
export class HTTPLoggingInterceptor implements NestInterceptor {

  intercept(context: ExecutionContext, call$: Observable<any>): Observable<any> {
    const now = Date.now();
    const request = context.switchToHttp().getRequest();

    const method = request.method;
    const url = request.originalUrl;

    return call$.pipe(
      tap(() => {
        const response = context.switchToHttp().getResponse();
        const delay = Date.now() - now;
        console.info(`${response.statusCode} | [${method}] ${url} - ${delay}ms`);
      }),
      catchError((error) => {
        const response = context.switchToHttp().getResponse();
        const delay = Date.now() - now;
        console.error(`${response.statusCode} | [${method}] ${url} - ${delay}ms`);
        return throwError(error);
      }),
    );
  }
}
 10.03.2019 23:30
32
1
33 622
7
Данный вопрос помечен как решенный
 Ответы 7
У меня была аналогичная проблема с регистрацией правильного кода состояния из-за фильтров, запущенных после перехватчика. Единственное решение, к которому я пришел, и которое меня устраивало, заключалось в том, чтобы реализовать ведение журнала в перехватчике. Очень похоже на то, как вы это сделали в своем коде. Пока фильтр запускается после запуска перехватчика, наблюдаемый объект можно использовать для выполнения функции после ее успешного завершения или ошибок.

Уловка для меня заключалась в том, что код состояния в ответе не гарантируется правильно установленным даже в операторах кран или catchError. Я решил это, проверив метод запроса, и если это метод POST, то я знаю, что успешный ответ — это 201, иначе это всегда 200. Если я получаю сообщение об ошибке, я беру код состояния из ошибки и использую его вместо кода состояния в объекте ответа. Поскольку мой фильтр исключений будет запущен до завершения наблюдаемого, я знаю, что в это время в моем объекте ошибки будет существовать код состояния.

 22.03.2019 22:27
 Ответ принят как подходящий
В итоге я внедрил классический регистратор в необработанное приложение. Это решение не самое лучшее, поскольку оно не интегрировано в поток Nest, но хорошо работает для стандартных потребностей ведения журнала.

import { NestFactory } from '@nestjs/core';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { ApplicationModule } from './app.module';
import * as morgan from 'morgan';

async function bootstrap() {
    const app = await NestFactory.create<NestFastifyApplication>(ApplicationModule, new FastifyAdapter());
    app.use(morgan('tiny'));

    await app.listen(process.env.PORT, '0.0.0.0');
}

if (isNaN(parseInt(process.env.PORT))) {
    console.error('No port provided. ?');
    process.exit(666);
}

bootstrap().then(() => console.info('Service listening ?: ', process.env.PORT));
 02.07.2019 17:25
Вы можете следовать LoggerПромежуточное ПО, приведенному в официальной документации, для реализации вашего пользовательского регистратора.

Вы можете применить регистратор к подстановочному * маршруту, чтобы регистрировать все запросы и ответы. И внутри класса регистратора вы можете выбрать настраиваемые поля для регистрации до и после запроса:

export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes('*');
  }
}

class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: Function) {
    console.info('Request', req.method, req.originalUrl, /*...*/);
    next();
    console.info('Response', res.statusCode, res.statusMessage, /*...*/);
  }
}
 02.06.2020 15:53
Попробуйте этот код =>

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: Function) {
        const { ip, method, originalUrl: url  } = req;
        const hostname = require('os').hostname();
        const userAgent = req.get('user-agent') || '';
        const referer = req.get('referer') || '';

        res.on('close', () => {
            const { statusCode, statusMessage } = res;
            const contentLength = res.get('content-length');
            logger.log(`[${hostname}] "${method} ${url}" ${statusCode} ${statusMessage} ${contentLength} "${referer}" "${userAgent}" "${ip}"`);
        });

        next();
    }
}
 23.07.2020 20:17
https://github.com/julien-sarazin/nest-playground/issues/1#issuecomment-682588094

Для этого вы можете использовать промежуточное ПО.

import { Injectable, NestMiddleware, Logger } from '@nestjs/common';

import { Request, Response, NextFunction } from 'express';

@Injectable()
export class AppLoggerMiddleware implements NestMiddleware {
  private logger = new Logger('HTTP');

  use(request: Request, response: Response, next: NextFunction): void {
    const { ip, method, path: url } = request;
    const userAgent = request.get('user-agent') || '';

    response.on('close', () => {
      const { statusCode } = response;
      const contentLength = response.get('content-length');

      this.logger.log(
        `${method} ${url} ${statusCode} ${contentLength} - ${userAgent} ${ip}`
      );
    });

    next();
  }
}
и в AppModule

export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(AppLoggerMiddleware).forRoutes('*');
  }
}
 17.09.2020 10:48
Как насчет использования события finish вместо события close.

import { Request, Response, NextFunction } from "express";
import { Injectable, NestMiddleware, Logger } from "@nestjs/common";

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  private logger = new Logger("HTTP");

  use(request: Request, response: Response, next: NextFunction): void {
    const { ip, method, originalUrl } = request;
    const userAgent = request.get("user-agent") || "";

    response.on("finish", () => {
      const { statusCode } = response;
      const contentLength = response.get("content-length");

      this.logger.log(
        `${method} ${originalUrl} ${statusCode} ${contentLength} - ${userAgent} ${ip}`,
      );
    });

    next();
  }
}
Потому что, насколько известно express, соединение сохраняется после отправки ответа.
Итак, событие close не может быть запущено

Ссылка
01. Документ узла о response событии.
02. Проблема с гитхабом

 03.12.2020 10:04
Я решил использовать Morgan в качестве промежуточного программного обеспечения для перехвата запросов, поскольку мне нравятся параметры форматирования, а также использовать стандартный Nest Logger для обработки вывода, чтобы сохранить согласованность с остальной частью моего приложения.

// middleware/request-logging.ts
import { Logger } from '@nestjs/common';
import morgan, { format } from 'morgan';

export function useRequestLogging(app) {
    const logger = new Logger('Request');
    app.use(
        morgan('tiny', {
            stream: {
                write: (message) => logger.log(message.replace('\n', '')),
            },
        }),
    );
}
// main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { useRequestLogging } from './middleware/request-logging';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    useRequestLogging(app);
    await app.listen(configService.get<number>('SERVER_PORT'));
    logger.log(`Application is running on: ${await app.getUrl()}`);
}


Как передать обычный текст в качестве тела запроса с помощью NestJS?
Вопросы
JAVASCRIPT
Как передать обычный текст в качестве тела запроса с помощью NestJS?
Предполагается, что один из методов контроллера в моем приложении NestJS принимает в качестве тела простой текст, но всякий раз, когда я пытаюсь сделать запрос, параметр принимается как пустой объект. Возможно ли это, или мне придется создать какой-то DTO для передачи этой единственной строки?

Пример:

@Post()
  myFunction(@Body() id: string) {
    // do something here
  }
 11.09.2018 22:24
9
2
10 247
7
Данный вопрос помечен как решенный
 Ответы 7
Семантика почтового запроса определяется заголовком, который указывает тип контента. Попробуйте убедиться, что заголовок запроса имеет тип text / plain, и вы увидите, как это поможет.

https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/POST

 12.09.2018 15:01
Nest несовместим с обычным / текстовым форматом, и вместо этого вы должны передать bodyparser в свое экспресс-приложение. Попробуйте что-то вроде этого:

import * as bodyParser from 'body-parser';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(bodyparser({ ...options })) // for plain/text bodies
  await app.listen(3000)
}
bootstrap();
где параметры создается из https://www.npmjs.com/package/body-parser

 12.09.2018 22:30
 Ответ принят как подходящий
Я вижу, что этот вопрос довольно старый, но он указан в Google одним из первых, поэтому я хочу добавить здесь ответ.

Если вы не хотите добавлять промежуточное ПО body-parser (например, вам нужен простой текст только в методе с одним контроллером), вы можете использовать raw-body (который уже существует в ваших node_modules), примерно так:

import * as rawbody from 'raw-body';
import { Controller, Post, Body, Req } from '@nestjs/common';

@Controller('/')
export class IndexController {

  @Post()
  async index(@Body() data, @Req() req) {

    // we have to check req.readable because of raw-body issue #57
    // https://github.com/stream-utils/raw-body/issues/57
    if (req.readable) {
      // body is ignored by NestJS -> get raw body from request
      const raw = await rawbody(req);
      const text = raw.toString().trim();
      console.info('body:', text);

    } else {
      // body is parsed by NestJS
      console.info('data:', data);
    }

    // ...
  }

}
вы также можете создать новый декоратор параметров

import * as rawbody from 'raw-body';
import { createParamDecorator, HttpException, HttpStatus } from '@nestjs/common';

export const PlainBody = createParamDecorator(async (data, req) => {
  if (req.readable) {
    return (await rawbody(req)).toString().trim();
  }
  throw new HttpException('Body aint text/plain', HttpStatus.INTERNAL_SERVER_ERROR);
});
и используйте это как

@Post()
async index(@PlainBody() text: string) {
  // ...
(Код декоратора не проверял, написал прямо здесь, в комментарии)

 08.01.2019 17:53
Добавление на Сообщение @ yumaa выше

Вот рабочий декоратор с NestJS v7.0.8:

import { createParamDecorator, ExecutionContext, BadRequestException } from '@nestjs/common';
import * as rawBody from "raw-body";

export const PlainBody = createParamDecorator(async (_, context: ExecutionContext) => {
    const req = context.switchToHttp().getRequest<import("express").Request>();
    if (!req.readable) { throw new BadRequestException("Invalid body"); }

    const body = (await rawBody(req)).toString("utf8").trim();
    return body;
})
 24.04.2020 21:54
Старый вопрос, но ничего из вышеперечисленного не сработало для меня, но сработало следующее:

Вышеупомянутые подходы с использованием декораторов или контроллеров не сработали для меня, поскольку буфер тела запроса всегда уже был прочитан.

Мне удалось заставить его работать с помощью следующего промежуточного программного обеспечения. (Обратите внимание, что в моем случае мне нужно было проверить веб-перехватчик Xero, поэтому пример ориентирован на это)

cache-raw-body-on-request.ts:

import { json } from 'body-parser';
import * as cloneBuffer from 'clone-buffer';

export const cachedRawBodyRequestKey = 'rawBodyBuffer';

/**
 * Clones the request buffer and stores it on the request object for reading later 
 */
export const cacheRawBodyOnRequest = json({
  verify: (req: any, res, buf, encoding) => {

    // only clone the buffer if we're receiving a Xero webhook request
    if (req.headers['x-xero-signature'] && Buffer.isBuffer(buf)) {
      req[cachedRawBodyRequestKey] = cloneBuffer(buf);
    }
    return true;
  },
});
main.ts:

app.use(cacheRawBodyOnRequest);
контроллер:

const textBody = req[cachedRawBodyRequestKey].toString('utf-8');
 08.11.2020 13:21
Это мой подход к получению необработанного (текстового) тела в обработчике NestJS:

настройте приложение с помощью preserveRawBodyInRequest, как показано в примере JSDoc
использовать декоратор RawBody в обработчике для получения необработанного (текстового) тела
raw-request.decorator.ts:

import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { NestExpressApplication } from "@nestjs/platform-express";

import { json, urlencoded } from "express";
import type { Request } from "express";
import type http from "http";

export const HTTP_REQUEST_RAW_BODY = "rawBody";

/**
 * make sure you configure the nest app with <code>preserveRawBodyInRequest</code>
 * @example
 * webhook(@RawBody() rawBody: string): Record<string, unknown> {
 *   return { received: true };
 * }
 * @see preserveRawBodyInRequest
 */
export const RawBody = createParamDecorator(
  async (data: unknown, context: ExecutionContext) => {
    const request = context
      .switchToHttp()
      .getRequest<Request>()
    ;

    if (!(HTTP_REQUEST_RAW_BODY in request)) {
      throw new Error(
        `RawBody not preserved for request in handler: ${context.getClass().name}::${context.getHandler().name}`,
      );
    }

    const rawBody = request[HTTP_REQUEST_RAW_BODY];

    return rawBody;
  },
);

/**
 * @example
 * const app = await NestFactory.create<NestExpressApplication>(
 *   AppModule,
 *   {
 *     bodyParser: false, // it is prerequisite to disable nest's default body parser
 *   },
 * );
 * preserveRawBodyInRequest(
 *   app,
 *   "signature-header",
 * );
 * @param app
 * @param ifRequestContainsHeader
 */
export function preserveRawBodyInRequest(
  app: NestExpressApplication,
  ...ifRequestContainsHeader: string[]
): void {
  const rawBodyBuffer = (
    req: http.IncomingMessage,
    res: http.ServerResponse,
    buf: Buffer,
  ): void => {
    if (
      buf?.length
      && (ifRequestContainsHeader.length === 0
        || ifRequestContainsHeader.some(filterHeader => req.headers[filterHeader])
      )
    ) {
      req[HTTP_REQUEST_RAW_BODY] = buf.toString("utf8");
    }
  };

  app.use(
    urlencoded(
      {
        verify: rawBodyBuffer,
        extended: true,
      },
    ),
  );
  app.use(
    json(
      {
        verify: rawBodyBuffer,
      },
    ),
  );
}
 24.11.2020 02:56
Если вы предпочитаете избегать дополнительных сторонних зависимостей, вы также можете воспользоваться подходом встроенный nodejs здесь:

function readPost(req: IncomingMessage) {
  return new Promise<string>((resolve, reject) => {
    let body = '';
    req.on('data', (data: string) => (body += data));
    req.on('error', (error: unknown) => reject(error));
    req.on('end', () => resolve(body));
  });
}
Использование:

import { Post, Req } from '@nestjs/common';
import { IncomingMessage } from 'http';
...
@Post()
myFunction(@Req() req: IncomingMessage) {
  const bodyStr = await readPost(req);
  console.info('request body:', bodyStr);
}


Как отправлять коды ошибок в приложениеnesjs с контроллера?
Вопросы
JAVASCRIPT
Как отправлять коды ошибок в приложениеnesjs с контроллера?
Как я могу отправлять коды ошибок вnesjs, кроме 200? я пытался ввести объект ответа в метод, но нет метода для отправки ошибки.

  save(  @Body() body:any,@Res() response: Response):string {

console.info("posting...")
    console.info(body)
    return "saving " + JSON.stringify(body)

  }
приведенный выше код отправляет тело со статусом 20X. Я хочу отправить другой код состояния, например 400 или 500.

 04.07.2019 09:48
3
0
19 882
6
Данный вопрос помечен как решенный
 Ответы 6
 Ответ принят как подходящий
я делал это неправильно, я импортировал ответ из nestjs/common, когда мне пришлось импортировать объект Response из экспресса.

 04.07.2019 10:31
Вы всегда можете выдать ошибку и позволить Nest обработать код ошибки за вас. Определены В документации есть много информации о том, какие ошибки уже, и они являются распространенными ошибками HTTP, поэтому они соответствуют ожидаемым кодам. Или вы могли бы выдать свои собственные ошибки, следуя синтаксису в документах

 04.07.2019 20:36
Какой бы код вы ни написали, он появится в вашем ответе.

@HttpCode(204)
create() {
  return 'This action adds a new cat';
}
 02.07.2020 12:09
Итак, полный пример возврата кода состояния http без выдачи ни ошибок, ни через статику @HttpCode():

import { Post, Res, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
...
  @Post()
  save(@Res() response: Response) {
    response
      .status(HttpStatus.BAD_REQUEST)
      .send("saving " + JSON.stringify(body));
  }

Вам нужно использовать декоратор @Res(), чтобы получить базовый объект expressResponse и использовать его метод status().

Хотя мне все еще интересно, есть ли какой-то другой способ, не связанный с работой с объектами с состоянием, а просто чистый возврат в nestjs, как если бы вы сделали весной...

 05.05.2021 23:33
Чтобы вернуть код состояния вnesjs, вам нужно включить @Res() в свои параметры. Обычно в nestjs для параметра passthrough объекта Response по умолчанию установлено значение false. Это означает, что все, что вы делаете, не будет передано в объект Response.

Вам не нужно возвращать объект ответа, так как если вы это сделаете, вы получите подобную ошибку, потому что он попытается заменить ваш пользовательский ответ стандартным ответом nestjs.

Cannot set headers after they are sent to the client

Кроме того, статус должен быть установлен до отправки ответа, иначе по умолчанию будет установлен код состояния 200.

async myfunction(@Param('id') id: string, @Res({passthrough: true}) response: Response) {

   //do stuff ....

   response.status(HttpStatus.FORBIDDEN).send('You are not allowed to do that');
   return;
}
 16.05.2021 20:33
Вместо этого вы должны использовать фильтры исключений в вашем случае.

В вашем случае вам понадобится:

throw new BadRequestException(error);
Или вы можете использовать

throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
Это вернется

{
  "statusCode": 403,
  "message": "Forbidden"
}
Документы: https://docs.nestjs.com/исключение-фильтры


Не удается подключить базу данных, защищенную SSL, к typeorm
Вопросы
POSTGRESQL
Не удается подключить базу данных, защищенную SSL, к typeorm
Я впервые использую NestJS, и у меня возникли проблемы с подключением моей базы данных Postgres, размещенной на Digitalocean, к NestJS.

Я искал в Интернете решения и пытался добавить "ssl": "true" or "extra": { "ssl": "true" }

Вот мой ormconfig.json

{
  "type": "postgres",
  "host": "host",
  "port": "port",
  "username": "username",
  "password": "password",
  "database": "database",
  "extra": {
    "ssl": "true"
  },
  "synchronize": "true",
  "logging": "true",
  "entities": ["src/**/*.entity.ts", "dist/**/*.entity.js"]
}
Я ожидаю, что он подключится к серверу. Ошибка, которую я получаю, это [TypeOrmModule] Unable to connect to the database. error: no pg_hba.conf entry for host "", user "", database "", SSL off

 19.06.2019 06:59
8
0
16 466
6
Данный вопрос помечен как решенный
 Ответы 6
 Ответ принят как подходящий
Если у кого-то есть такая же проблема, я исправил ее, добавив поле для ssl и установив свой сертификат ca, который я получил от Digital Ocean. Вот как выглядит мой ormconfig:

module.exports = {
  name: 'default',
  type: 'postgres',
  host: 'host',
  port: port,
  username: 'username',
  password: 'password',
  database: 'database',
  synchronize: true,
  dropSchema: false,
  logging: true,
  ssl: {
    ca: process.env.SSL_CERT,
  },
  entities: ['src/**/*.entity.ts', 'dist/**/*.entity.js'],
};
 20.06.2019 01:27
  ssl: {
    rejectUnauthorized: false,
    ca: fs.readFileSync('/path/to/server-certificates/root.crt').toString(),
    key: fs.readFileSync('/path/to/client-key/postgresql.key').toString(),
    cert: fs.readFileSync('/path/to/client-certificates/postgresql.crt').toString(),
  },
через https://node-postgres.com/features/ssl

 22.07.2020 23:39
Это работает, если вы подключаетесь к базе данных postgres на героку с локального хоста, используя typeorm.

ormconfig.json

{
  "name": "default",
  "type": "postgres",
  "url": "postgres://username:password@host:port/database",
  "synchronize": true,
  "logging": true,
  "entities": ["src/entity/*.*"],
  "ssl": true,
  "extra": {
    "ssl": {
      "rejectUnauthorized": false
    }
  }
}
 16.01.2021 18:36
Это моя конфигурация NestJS TypeORM на Heroku:

TypeOrmModule.forRoot({
  type: 'postgres',
  url: process.env.DATABASE_URL,
  autoLoadEntities: true,
  ssl:
    process.env.NODE_ENV === 'production'
      ? { rejectUnauthorized: false }
      : false,
}),
Опция SSL является обязательной, как описано здесь: https://devcenter.heroku.com/articles/heroku-postgresql#connecting-in-node-js.

 13.04.2021 23:36
Вы можете установить для переменной среды PQSSLMODE значение require — libpq будет читать их автоматически, если не указано иное, и устанавливать безопасное соединение.

См. также: https://www.postgresql.org/docs/current/libpq-envars.html

 13.09.2021 15:54
Добавьте эту строку в настройки конфигурации:

options: { encrypt: false }
Ваша конфигурация должна выглядеть примерно так:

TypeOrmModule.forRoot({
  type: 'mssql',
  host: 'your_db_server_address',
  port: 1433,
  username: 'user',
  password: 'pwd',
  database: 'your_db_name_here',
  entities: [Subscription],
  options: { encrypt: false }
  
})


Как создать производственную сборку API с помощью NESTJS
Вопросы
NODE.JS
Как создать производственную сборку API с помощью NESTJS
Я создаю производственную версию API, созданного с использованием платформы NESTJS, и хотел бы знать, какие файлы я должен загрузить на сервер. Когда я запускаю компиляцию «npm run start: prod», она создает папку «dist», но я пытался запустить только ее, но этого недостаточно для запуска моего приложения. Нужно ли загружать все файлы на сервер? Я сделал несколько тестов, удалив папки, которые использовал во время разработки, но удалось запустить только в рабочем режиме, когда я все равно был в режиме разработки.

Я искал в документации что-то об этом, но ничего не нашел. Кто-нибудь может мне помочь?

Спасибо

 17.02.2019 21:04
17
0
34 553
6
Данный вопрос помечен как решенный
 Ответы 6
В основном вам понадобятся только зависимости в node_modules. Вы должны создавать библиотеки на своем сервере, а не копировать их с вашей машины разработчика. Такие библиотеки, как bcrypt, имеют машинно-специфический код и, вероятно, не будут работать на другой машине. (30% библиотек npm имеют собственные привязки.)

Поэтому для вашего развертывания я бы порекомендовал проверить ваш репозиторий git на вашем сервере, а затем просто запустить npm run start:prod (который каждый раз собирает проект) прямо там.

 17.02.2019 21:36
 Ответ принят как подходящий
Честно говоря, вам действительно нужна только папка dist, поскольку это «соответствующие» файлы JS. Чтобы запустить ваше приложение, обычно вы используете эту команду node dist/main.js. Что касается того, какие файлы вы загружаете, это зависит от вас. Лично я использую непрерывную интеграцию, поэтому я просто клонирую репозиторий в свой контейнер/сервер и использую yarn start:prod. Это так, каждый раз, когда я развертываю, я создаю необходимые файлы для запуска в производственной среде.

Как упоминал @Kim Kern, некоторые модули узлов созданы с использованием узла-гироскопа; поэтому также всегда лучше создавать свои node_modules на сервере/контейнере при развертывании. Ваш сценарий развертывания должен выглядеть примерно так

git clone git@github.com:myuser/myrepo.git /var/www/
cd /var/www/
node -v && \
yarn && \
yarn build && \
yarn start:prod
Приведенный выше сценарий должен

1) перетащите необходимое репо в «размещенный» каталог
2) проверить версию узла
3) установить node_modules и собрать нативные скрипты и т. д.
4) построить производственный дистрибутив
5) запустить производственные JS-скрипты

Если вы посмотрите в свой файл package.json, вы заметите разные сценарии, которые запускаются при использовании yarn start, yarn start:dev и yarn start:prod. В dev вы заметите использование ts-node, который является типом запуска узлов машинописного текста (не могу вспомнить правильную фразу). Также скрипт start:dev использует режим узла для перезапуска скрипта ts-node. Вы также увидите, что скрипт start:prod использует node dist/main.js и что скрипт prestart:prod запускается rm -rf dist && tsc, который удаляет папку dist и «компилирует» javascript, необходимый для производственной среды.

Однако недостаток машинописного приложения на вашем сервере без непрерывной интеграции заключается в том, что существует вероятность ошибок компиляции машинописного текста, о которых вы не увидите и не узнаете, пока не запустите рабочие сценарии. Я бы порекомендовал создать процедуру для компиляции javascipt из машинописного текста перед развертыванием, поскольку вы не хотите удалять текущую сборку dist, прежде чем узнаете, что следующая версия будет собрана и запущена!

 18.02.2019 11:21
Мы не создаем наше приложение на производстве, а вместо этого создаем его при создании нашего контейнера Docker.

Шаги для нас примерно такие:

Запустите npm install и любые инструменты, необходимые для создания приложения.
Создайте докер-контейнер и скопируйте dist/, node_modules и package.json
Внутри докер-контейнера запустите npm rebuild bcrypt --update-binary
 24.04.2019 16:33
Для меня этот подход сработал, и все, что вам нужно, это папка dist для этого:

Создайте рабочую сборку вашего приложения, используя npm run start:prod, это создаст папку dist в исходном коде вашего приложения.
Скопируйте папку dist на свой сервер.
Чтобы получить все зависимости node_modules на вашем сервере, просто скопируйте файл package.json в папку dist (которую вы скопировали на сервер), а затем запустите npm install оттуда.
Если вы используете pm2 для запуска своих узловых приложений, просто запустите pm2 start main.js из папки dist
 01.10.2019 10:02
Просто используйте Nest-CLI и стройте с помощью

nest build
После этого вы получите папку dist с скомпилированным кодом. Затем вы можете разместить его на сервере для запуска, например. с менеджером процессов PM2:

production=true pm2 start dist/main.js
В предыдущей команде для переменной среды производство установлено значение истинный. Это могло бы, например. быть полезным при запуске сервера Nest.js через HTTPS.

Если вы хотите запустить сервер, защищенный HTTPS, вы также должны включить сертификаты в процесс запуска сервера. Когда производство переменной среды установлено и равно true, сертификаты включаются в начальный процесс приложения Nest.js в main.ts, как показано ниже:

async function bootstrap() {
let appConfig = {}
if (process.env.production) {
    console.info('process env production: ', process.env.production)
    const httpsOptions = {
        key: fs.readFileSync('/etc/certs/letsencrypt/live/testtest.de/privkey.pem'),
        cert: fs.readFileSync('/etc/certs/letsencrypt/live/testtest.de/fullchain.pem'),
    }
    
    // prod config
    appConfig = {
        httpsOptions,
    }
}

const app = await NestFactory.create<NestExpressApplication>(
    AppModule,
    appConfig,
)

app.enableCors()
app.setGlobalPrefix('v1')

await app.listen(3300)
}
bootstrap()
 21.07.2020 12:35
Мы используем NX для монорепозитория, где мы храним наши API. И мы используем докер для наших изображений и контейнеров. Когда нам нужно создать образ докера, запустите только: npx nx build <project> и создайте сборку на dist/apps/<project>. Эта папка идет в образ докера, с package.json и все. Вам не нужно добавлять node_modules, потому что они находятся в package.json. Просто не забудьте включить npm install в свой Dockerfile.


Стартап NestJS невероятно медленно развивается
Вопросы
NODE.JS
Стартап NestJS невероятно медленно развивается
Мое приложение в среде разработки работает раздражающе медленно на этапе запуска. Я установил журнал отладки в разных местах, чтобы увидеть, что занимает так много времени, и обнаружил, что мой main.ts на самом деле использует почти 9 минут ? только для импорта моего app.module!

Источник

import { performance } from 'perf_hooks';
const startTime = performance.now();

import { Log } from 'api/common/util/logger/log';
Log.log.info(`┌────────────────────────────────────────────────────────────┐`);
Log.log.info(`│    Starting: ${new Date().toISOString()}                      │`);
Log.log.info(`└────────────────────────────────────────────────────────────┘`);

// From here -------------------->
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import 'reflect-metadata';
import { existsSync, mkdirSync, writeFile } from 'fs';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as helmet from 'helmet';
import * as morgan from 'morgan';
import * as morganBody from 'morgan-body';
// <------ to here, imports fly in as expected.

// Theese take a bit longer, but not enormously
import { Config } from './api/common/config';
import { HttpExceptionFilter } from './api/common/filters/http-exception.filter';
import { LogService } from 'api/common/util/logger/log.service';

// This one takes up the most time on startup (several minutes)
import { AppModule } from './api/app.module';
Log.log.debug(` * imports done in ${(performance.now() - startTime).toFixed(3)}ms`);
Log.log.debug(` * Memory: ${readMem()}`);

function readMem() {
  const mem = process.memoryUsage();
  const convert = { Kb: n => (n / 1024), Mb: n => convert.Kb(n) / 1024 };
  const toHuman = (n, t) => `${convert[t](n).toFixed(2)}${t}`;
  return `Used ${toHuman(mem.heapUsed, 'Mb')} of ${toHuman(mem.heapTotal, 'Mb')} - RSS: ${toHuman(mem.rss, 'Mb')}`;
}
Вывод

Запуск производства:

$ node dist/main.js
info: ┌──────────────────────────────────────────────────────────────────────────┐
info: │    Starting: 2019-01-29T13:06:13.751Z                                    │
info: │      Memory: Used 6.54Mb of 11.70Mb - RSS: 25.33Mb                       │
info: │     Runtime: js                                                          │
info: └──────────────────────────────────────────────────────────────────────────┘
debug:  * imports done in 6862.350ms
debug:  * Memory: Used 87.99Mb of 113.76Mb - RSS: 133.58Mb
info: Nest application successfully started
info: ┌──────────────────────────────────────────────────────────────────────────┐
info: │             Memory: Used 93.71Mb of 122.52Mb - RSS: 144.20Mb             │
info: │             Launch: 2019-01-29T13:06:25.377Z                             │
info: │      Time to start: 11991.049ms                                          │
info: │     Bootstrap time: 5124.189ms                                           │
info: └──────────────────────────────────────────────────────────────────────────┘
Старт разработки:

$ ts-node -r tsconfig-paths/register src/main.ts
info: ┌──────────────────────────────────────────────────────────────────────────┐
info: │    Starting: 2019-01-29T13:08:06.914Z                                    │
info: │      Memory: Used 157.76Mb of 193.62Mb - RSS: 209.77Mb                   │
info: │     Runtime: ts                                                          │
info: └──────────────────────────────────────────────────────────────────────────┘
debug:  * imports done in 471159.063ms
debug:  * Memory: Used 297.45Mb of 385.35Mb - RSS: 408.90Mb
info: Nest application successfully started
info: ┌──────────────────────────────────────────────────────────────────────────┐
info: │             Memory: Used 216.64Mb of 383.35Mb - RSS: 409.11Mb            │
info: │             Launch: 2019-01-29T13:16:05.521Z                             │
info: │      Time to start: 483228.325ms                                         │
info: │     Bootstrap time: 12042.239ms                                          │
info: └──────────────────────────────────────────────────────────────────────────┘
Да, я начинаю это с ts-node, но это то, что NestJS рекомендует для разработки и отладки.

Вопрос
Как мне оптимизировать стартап, чтобы каждое незначительное изменение в бэкенде здесь не требовало 10-минутной прокрастинации? У меня и так достаточно проблем с концентрацией, это не помогает.

У меня слишком много модулей? Поможет ли, если я совмещаю некоторые из них? У меня есть около 15 моделей сущностей БД, каждая из которых включена в собственный модуль на основе graphql для удобства чтения, но многие из них имеют циклические зависимости, разрешенные внедрением forwardRef() в мой импорт модулей. Это наверное проблема?

Я стараюсь включать как можно меньше сторонних библиотек, чтобы избежать ада node_modules. То, что я импортирую в свои модули, — это либо мой собственный код, либо фреймворк NestJS. Конечно, я не знаю, сколько неявных зависимостей загружается, но может ли количество библиотек, которые я таскаю с собой, повлиять на производительность запуска? И если да, то как я могу отслеживать, что попадает в стек и сколько памяти/процессора потребляет каждый скрипт при оценке? И можно ли как-то предварительно скомпилировать что-то из этого, чтобы увеличить запуск?

У меня нет этой проблемы при запуске скомпилированного javascript в производстве.

 29.01.2019 10:53
18
8
12 037
6
 Ответы 6
Попробуйте установить env TS_NODE_TRANSPILE_ONLY=true.

например TS_NODE_TRANSPILE_ONLY=true ts-node -r tsconfig-paths/register src/main.ts

документы: https://github.com/TypeStrong/ts-node#cli-and-programmatic-options

Это ускоряет запуск моего приложения

 19.03.2019 10:33
Один из вариантов — использовать tsc-часы вместо ts-node и nodemon. Вы можете настроить команду запуска в вашем start:dev следующим образом:

{
  //this is assuming you're building to the dist folder
  ...
  "start:dev": "tsc-watch --onSuccess \"node dist/main.js\" --onFailure \"echo 
  There was a problem with the build!\" -p tscfonig.json" 
  ...
}
По моему опыту, я столкнулся со слишком большим количеством проблем с ts-node и регистрацией маршрутов, плюс меня убивало время загрузки. С tsc-watch я получаю свежую сборку проекта, перестраивая только те файлы, которые были изменены. Таким образом, вы также проверяете, работает ли tsc во время разработки.

Я также использую команду tsconfig-bootstrap для импорта своих пользовательских маршрутов (определенных в моем tsconfig) и добавляю их в команду запуска с помощью node -r path/to/my/script.js dist/main.js.

Надеюсь, это поможет вам немного!

 01.04.2019 20:37
установить последнюю версию @nestjs/cli как глобально, так и локально:

$ npm install -g @nestjs/cli
$ cd  /some/project/root/folder
$ npm install -D @nestjs/cli
замените/убедитесь, что у вас есть следующие сценарии, определенные в package.json

"build": "nest build",
"start": "nest start",
"start:dev": "nest start --watch",
"start:debug": "nest start --debug --watch",
убедитесь, что у вас есть автоматическое присоединение vs code к 

бегать

npm run start:dev
 11.03.2020 20:47
Логичное решение и то, что работает для решения проблемы, — это раскомментировать модули, которые вы не используете в настоящее время, из модуля приложения.


@Module({
 imports: [
   TypeOrmModule.forRoot(defaultOptions),
   // Commented for faster reloads 
   // NotUsingModule1
   // NotUsingModule2
   UsingModule1
 ],
 controllers: [AppController],
 providers: [AppService],
})
export class AppModule { }
Также в случае работы с RDBMS убедитесь, что для входа в систему не установлено значение true, а для dropSchema также не установлено значение true.

В некоторых случаях вы столкнетесь с проблемой с сущностями, неправильно формирующими отношения. Установите для dropSchema значение true, это УДАЛИТ ВСЕ СУЩЕСТВА ИЗ БАЗЫ ДАННЫХ. НЕ ДЕЛАЙТЕ ЭТОГО НА ПРОИЗВОДСТВЕ. ВЫ БЫЛИ ПРЕДУПРЕЖДЕНЫ
export const defaultOptions = {
    type: "postgres",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "awesome db",
    synchronize: true,
    // logging: true,
    // dropSchema: true,
    entities: ['dist/**/*.entity.js'],
 07.08.2020 06:09
Просто добавлю это на тот случай, если у кого-то еще может быть такая же причина, моя проблема была связана с импортом клиентов grpc, оба из которых не были достаточно конкретными, с какими прототипами включать, а также в слишком многих разных местах.

Наша структура protos довольно большая, поэтому загрузчик grpc загружался очень медленно, из-за чего запуск Nest занимал несколько минут.

Поэтому убедитесь, что вы используете только те службы, которые вам напрямую нужны в настроенном protoPath. Я не думаю, что параметры includeDirs имеют значение, поэтому просто protoPath.

 06.08.2021 11:51
У меня возникла эта проблема после обновления до nest@8.0.0 и я начал использовать узел v16. Проблема исчезла после того, как я понизил версию nodejs.


Доступ к необработанному телу веб-хука Stripe в Nest.js
Вопросы
NODE.JS
Доступ к необработанному телу веб-хука Stripe в Nest.js
Мне нужно получить доступ к необработанному телу запроса веб-перехватчика от Stripe в моем приложении Nest.js.

Следуя примеру это, я добавил приведенное ниже в модуль, в котором есть метод контроллера, которому требуется необработанное тело.

function addRawBody(req, res, next) {
  req.setEncoding('utf8');

  let data = '';

  req.on('data', (chunk) => {
    data += chunk;
  });

  req.on('end', () => {
    req.rawBody = data;

    next();
  });
}

export class SubscriptionModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(addRawBody)
      .forRoutes('subscriptions/stripe');
  }
}
В контроллере я использую @Req() req, а затем req.rawBody, чтобы получить необработанное тело. Мне нужно необработанное тело, потому что он будет использоваться вstructEvent API-интерфейса Stripe для проверки запроса.

Проблема в том, что запрос застрял. Кажется, что req.on не вызывается ни для данных, ни для конечного события. Таким образом, next() не вызывается в промежуточном программном обеспечении.

Я также пытался использовать raw-body, например здесь, но получил почти такой же результат. В этом случае req.readable всегда ложно, поэтому я тоже застрял там.

Я предполагаю, что это проблема с Nest.js, но я не уверен...

 24.01.2019 13:14
23
1
11 648
6
Данный вопрос помечен как решенный
 Ответы 6
 Ответ принят как подходящий
Вчера вечером я столкнулся с похожей проблемой, пытаясь аутентифицировать токен Slack.

Решение, которое мы использовали, действительно требовало отключения bodyParser из основного приложения Nest, а затем повторного включения его после добавления нового ключа rawBody к запросу с необработанным телом запроса.

    const app = await NestFactory.create(AppModule, {
        bodyParser: false
    });

    const rawBodyBuffer = (req, res, buf, encoding) => {
        if (buf && buf.length) {
            req.rawBody = buf.toString(encoding || 'utf8');
        }
    };

    app.use(bodyParser.urlencoded({verify: rawBodyBuffer, extended: true }));
    app.use(bodyParser.json({ verify: rawBodyBuffer }));

Затем в моем промежуточном программном обеспечении я мог получить к нему доступ следующим образом:

const isVerified = (req) => {
    const signature = req.headers['x-slack-signature'];
    const timestamp = req.headers['x-slack-request-timestamp'];
    const hmac = crypto.createHmac('sha256', 'somekey');
    const [version, hash] = signature.split('=');

    // Check if the timestamp is too old
    // tslint:disable-next-line:no-bitwise
    const fiveMinutesAgo = ~~(Date.now() / 1000) - (60 * 5);
    if (timestamp < fiveMinutesAgo) { return false; }

    hmac.update(`${version}:${timestamp}:${req.rawBody}`);

    // check that the request signature matches expected value
    return timingSafeCompare(hmac.digest('hex'), hash);
};

export async function slackTokenAuthentication(req, res, next) {
    if (!isVerified(req)) {
        next(new HttpException('Not Authorized Slack', HttpStatus.FORBIDDEN));
    }
    next();
}
Сиять на!

 20.02.2019 15:32
Для тех, кто ищет более элегантное решение, отключите bodyParser в main.ts. Создайте две функции промежуточного программного обеспечения, одну для rawbody, а другую для json-parsed-body.

json-body.middleware.ts

import { Request, Response } from 'express';
import * as bodyParser from 'body-parser';
import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class JsonBodyMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: () => any) {
        bodyParser.json()(req, res, next);
    }
}
сырье-тело.middleware.ts

import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
import * as bodyParser from 'body-parser';

@Injectable()
export class RawBodyMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: () => any) {
        bodyParser.raw({type: '*/*'})(req, res, next);
    }
}
Примените функции промежуточного программного обеспечения к соответствующим маршрутам в app.module.ts.

app.module.ts

[...]

export class AppModule implements NestModule {
    public configure(consumer: MiddlewareConsumer): void {
        consumer
            .apply(RawBodyMiddleware)
            .forRoutes({
                path: '/stripe-webhooks',
                method: RequestMethod.POST,
            })
            .apply(JsonBodyMiddleware)
            .forRoutes('*');
    }
}

[...]
И настройте инициализацию Nest, чтобы отключить bodyParser:

main.ts

[...]

const app = await NestFactory.create(AppModule, { bodyParser: false })

[...]
Кстати, req.rawbody давно удален из express.

https://github.com/expressjs/express/issues/897

 25.06.2019 04:00
Сегодня,

так как я использую NestJS и Stripe

Я установил парсер тела (npm), затем в main.ts, просто добавь

 app.use('/payment/hooks', bodyParser.raw({type: 'application/json'}));
и это будет ограничено этим маршрутом! без перегрузки

 21.04.2020 21:11
Это мой взгляд на получение необработанного (текстового) тела в обработчике NestJS:

настройте приложение с помощью preserveRawBodyInRequest, как показано в примере JSDoc (чтобы ограничить только веб-перехватчик с полосой, используйте "stripe-signature" в качестве заголовка фильтра)
используйте декоратор RawBody в обработчике для получения необработанного (текстового) тела
сырой-request.decorator.ts:

import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { NestExpressApplication } from "@nestjs/platform-express";

import { json, urlencoded } from "express";
import type { Request } from "express";
import type http from "http";

export const HTTP_REQUEST_RAW_BODY = "rawBody";

/**
 * make sure you configure the nest app with <code>preserveRawBodyInRequest</code>
 * @example
 * webhook(@RawBody() rawBody: string): Record<string, unknown> {
 *   return { received: true };
 * }
 * @see preserveRawBodyInRequest
 */
export const RawBody = createParamDecorator(
  async (data: unknown, context: ExecutionContext) => {
    const request = context
      .switchToHttp()
      .getRequest<Request>()
    ;

    if (!(HTTP_REQUEST_RAW_BODY in request)) {
      throw new Error(
        `RawBody not preserved for request in handler: ${context.getClass().name}::${context.getHandler().name}`,
      );
    }

    const rawBody = request[HTTP_REQUEST_RAW_BODY];

    return rawBody;
  },
);

/**
 * @example
 * const app = await NestFactory.create<NestExpressApplication>(
 *   AppModule,
 *   {
 *     bodyParser: false, // it is prerequisite to disable nest's default body parser
 *   },
 * );
 * preserveRawBodyInRequest(
 *   app,
 *   "signature-header",
 * );
 * @param app
 * @param ifRequestContainsHeader
 */
export function preserveRawBodyInRequest(
  app: NestExpressApplication,
  ...ifRequestContainsHeader: string[]
): void {
  const rawBodyBuffer = (
    req: http.IncomingMessage,
    res: http.ServerResponse,
    buf: Buffer,
  ): void => {
    if (
      buf?.length
      && (ifRequestContainsHeader.length === 0
        || ifRequestContainsHeader.some(filterHeader => req.headers[filterHeader])
      )
    ) {
      req[HTTP_REQUEST_RAW_BODY] = buf.toString("utf8");
    }
  };

  app.use(
    urlencoded(
      {
        verify: rawBodyBuffer,
        extended: true,
      },
    ),
  );
  app.use(
    json(
      {
        verify: rawBodyBuffer,
      },
    ),
  );
}
 24.11.2020 02:58
1.
Примените промежуточное ПО к модуль и назначьте контроллер.

import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common'
import { raw } from 'body-parser'

import { PaymentIntentController } from './payment-intent.controller'
import { PaymentIntentService } from './payment-intent.service'

@Module({
    controllers: [PaymentIntentController],
    providers: [PaymentIntentService]
})
export class PaymentIntentModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(raw({ type: 'application/json' })).forRoutes(PaymentIntentController)
    }
}
2.
Параметр bodyParser для ложный при начальной загрузке.

import { NestFactory } from '@nestjs/core'

import { AppModule } from './module'

async function bootstrap() {
    const app = await NestFactory.create(AppModule, { cors: true, bodyParser: false })

    await app.listen(8080)
}

bootstrap()
Ссылки:

https://docs.nestjs.com/middleware
https://github.com/nestjs/nest/issues/405#issuecomment-366092226
 17.02.2021 01:33
Я обнаружил, что по какой-то причине синтаксический анализатор тела не может передать управление следующему обработчику в цепочке.

NestJS уже поддерживает необработанные тела, когда тип контента «текстовый/обычный», поэтому мое решение таково:

import { Injectable, NestMiddleware } from "@nestjs/common";
import { Request, Response } from "express";

@Injectable()
export class RawBodyMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => unknown) {
    req.headers["content-type"] = "text/plain";
    next();
  }
}

NestJS Jwt-Паспорт Аутентификация
Вопросы
AUTHENTICATION
NestJS Jwt-Паспорт Аутентификация
Я хочу реализовать библиотеку распределенной аутентификации, чтобы использовать ее в нескольких проектах. Библиотека должна реализовывать метод аутентификации JWT. Код выглядит следующим образом:

jwt.strategy.ts

import {ExtractJwt, Strategy} from 'passport-jwt';
import {PassportStrategy} from '@nestjs/passport';
import {Injectable} from '@nestjs/common';
import {JwtPayload, User} from './interfaces';
import {ConfigService} from "./config.service";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(private readonly configService: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: configService.get('secretOrPrivateKey'),
    });
  }

  async validate(payload: JwtPayload): Promise<User> {
     return {
      uuid: payload.uuid,
      email: payload.email,
    }
  }
}
jwt.auth.module.ts:

import {Module, DynamicModule} from '@nestjs/common';
import {JwtModule} from '@nestjs/jwt';
import {JwtStrategy} from './jwt.strategy';
import {PassportModule} from '@nestjs/passport';
import {ConfigService} from "./config.service";
import {JwtOptions} from "./interfaces/jwt.options";

@Module({
})

export class JwtAuthModule {
  static forRoot(jwtOptions): DynamicModule {
    return {
      module: JwtAuthModule,
      imports: [
        // JwtModule.register(jwtOptions),
        // PassportModule.register({defaultStrategy: 'jwt'}),
      ],
      providers: [
        JwtStrategy,
        {
          provide: ConfigService,
          useValue: new ConfigService(jwtOptions),
        }
      ],
      exports: [ConfigService, JwtStrategy]
    };
  }
}
и я импортировал это в свой app.module.ts:

import { Module, NestModule, HttpModule } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { environment } from './environments';
import { AuthModule } from './auth/auth.module';
import { PermissionModule } from './permission/permission.module';
import {JwtAuthModule} from '@pe/nest-kit';
import {JwtModule} from '@nestjs/jwt';
import {PassportModule} from '@nestjs/passport';

@Module({
  imports: [
    JwtModule.register(environment.jwtOptions),
    PassportModule.register({defaultStrategy: 'jwt'}),
    JwtAuthModule.forRoot(environment.jwtOptions),
    HttpModule,
    AuthModule,
    PermissionModule,
    MongooseModule.forRoot(environment.mongodb),
  ],
})
export class ApplicationModule implements NestModule {
  configure() {
  }
}
однако каждый раз, когда я пытаюсь открыть url проекта, я получаю сообщение об ошибке:

[Nest] 27645 - 24.10.2018, 15:23:26 [ExceptionsHandler] Unknown authentication strategy "jwt" +4119ms Error: Unknown authentication strategy "jwt" at attempt (/home/user/workspace/permissions/node_modules/passport/lib/middleware/authenticate.js:187:37) at authenticate (/home/user/workspace/permissions/node_modules/passport/lib/middleware/authenticate.js:363:7) at Promise (/home/user/workspace/permissions/node_modules/@nestjs/passport/dist/auth.guard.js:83:3) at new Promise () at /home/user/workspace/permissions/node_modules/@nestjs/passport/dist/auth.guard.js:75:83 at MixinAuthGuard. (/home/user/workspace/permissions/node_modules/@nestjs/passport/dist/auth.guard.js:47:36) at Generator.next () at /home/user/workspace/permissions/node_modules/@nestjs/passport/dist/auth.guard.js:19:71 at new Promise () at __awaiter (/home/user/workspace/permissions/node_modules/@nestjs/passport/dist/auth.guard.js:15:12) at MixinAuthGuard.canActivate (/home/user/workspace/permissions/node_modules/@nestjs/passport/dist/auth.guard.js:40:20) at GuardsConsumer.tryActivate (/home/user/workspace/permissions/node_modules/@nestjs/core/guards/guards-consumer.js:13:34) at canActivateFn (/home/user/workspace/permissions/node_modules/@nestjs/core/router/router-execution-context.js:97:59) at /home/user/workspace/permissions/node_modules/@nestjs/core/router/router-execution-context.js:47:37 at /home/user/workspace/permissions/node_modules/@nestjs/core/router/router-proxy.js:8:23 at Layer.handle [as handle_request] (/home/user/workspace/permissions/node_modules/express/lib/router/layer.js:95:5)

Что я делаю неправильно?

 24.10.2018 14:45
6
0
11 562
6
 Ответы 6
Вы уверены, что добавили все необходимые пакеты? Попробуйте просмотреть документацию по аутентификации https://docs.nestjs.com/techniques/authentication, она очень хорошо объясняет, как работать с JWT.

 24.10.2018 19:59
это мой код в github: https://github.com/riadhriadh/prototype_nestjs/tree/dev

в jwt.strategy.ts

    import * as passport from 'passport';
    import { ExtractJwt, Strategy } from 'passport-jwt';
    import { Injectable } from '@nestjs/common';
    import { AuthService } from '../auth.service';
    const  config_projet =require("./projet_config");
    @Injectable()
    export class JwtStrategy extends Strategy {
      constructor(private readonly authService: AuthService) {
        super(
          {
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            passReqToCallback: true,
            secretOrKey: config_projet.secret,
          },
          async (req, payload, next) => await this.verify(req, payload, next)
        );
        passport.use(this);
      }

      public async verify(req, payload, done) {
        const isValid = await this.authService.validateUser(payload);
        if (!isValid) {
          return done('Unauthorized', false);
        }
        done(null, payload);
      }
}
===================

в: auth.service.ts
import { Injectable } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import { UsersService } from 'users/users.service';
const  config_projet =require("../projet_config");
var fs = require('fs');
@Injectable()
export class AuthService {

  constructor(private readonly usersService: UsersService) { }


  async createToken(email: string) {
    const expiresIn = 6000 * 60;
    const secretOrKey = fs.readFileSync("./key.pem");;
    const user = { email };

     const token = jwt.sign(user, secretOrKey,   { audience: 'urn:foo' });


    return { expires_in: expiresIn, token };
  }
  async validateUser(signedUser): Promise<boolean> {
    if (signedUser && signedUser.email) {
      return Boolean(this.usersService.getUserByEmail(signedUser.email));
    }

    return false;
  }
}
==============================

в: auth.controller.ts

================================

import { Controller, Post, HttpStatus, HttpCode, Get, Response, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersService } from 'users/users.service';
import { User } from 'users/user.entity';

@Controller("auth")
export class AuthController {
    constructor(
        private readonly authService: AuthService,
        private readonly userService: UsersService
    ) {}
    @Post('login')
    async loginUser(@Response() res: any, @Body() body: User) {
      if (!(body && body.email && body.password)) {
        return res.status(HttpStatus.FORBIDDEN).json({ message: 'Email and password are required!' });
      }

      const user = await this.userService.getUserByEmail(body.email);

      if (user) {
        if (await this.userService.compareHash(body.password, user.password)) {
          return res.status(HttpStatus.OK).json(await this.authService.createToken(user.email));
        }
      }

      return res.status(HttpStatus.FORBIDDEN).json({ message: 'Email or password wrong!' });
    } 
    @Post('register')
    async registerUser(@Response() res: any, @Body() body: User) {
      if (!(body && body.email && body.password && body.last_name && body.first_name)) {
        return res.status(HttpStatus.FORBIDDEN).json({ message: 'Username and password are required!' });
      }

      let user = await this.userService.getUserByEmail(body.email);

      if (user) {
        return res.status(HttpStatus.FORBIDDEN).json({ message: 'Email exists' });
      } else {
        let userSave = await this.userService.create(body);
       if (userSave){
         body.password=undefined;
       }
        return res.status(HttpStatus.OK).json(userSave);
      }
    }
}
 25.10.2018 01:26
решено. в PHP у нас есть одно дерево зависимостей для всего проекта. в npm у каждого пакета есть собственное поддерево зависимостей, например e. г.:
- паспорт
- @ pe / nest-kit
---- паспорт
nest-kit использует объекты из ----passport, но корневой проект использует объекты типа с таким же именем, но на самом деле это другой тип для компилятора nodejs. решение - реэкспорт AuthGuard из @ nestjs / паспорт через @ pe / nest-kit, и он работает.

 25.10.2018 14:57
Попробуйте добавить JwtStrategy в качестве провайдера в свой модуль:

@Module({
  imports: [
   ....
  ],
  providers: [JwtStrategy],
})
и попробуй еще раз !

 30.04.2020 07:26
Решил эту проблему установкой @types/passport. Использование NestJS, TypeScript и JWT.

 28.07.2020 14:48
Пожалуйста, добавьте JwtStrategy в качестве провайдера в свой модуль.

@Module({
   imports: [...],
   providers: [JwtStrategy],
})
https://docs.nestjs.com/techniques/authentication


NestJS позволяет использовать cors в производстве
Вопросы
JAVASCRIPT
NestJS позволяет использовать cors в производстве
Я включил CORS в своем приложении NestJS после официальный учебник, поэтому мой main.ts выглядит следующим образом:

import { FastifyAdapter, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, new FastifyAdapter(), { cors: true });
  await app.listen(3000);
}
bootstrap();
и он работает, когда я запускаю приложение с помощью npm run start:dev.

Однако, когда я пытаюсь сначала скомпилировать приложение с помощью npm run webpack, а затем запустить его с помощью node server.js, корс не будет работать.

HTTP-запрос от клиента завершится ошибкой:

Response to preflight request doesn't pass access control check: No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'http://localhost:8000' is therefore not allowed access. The response had HTTP status code 404.

 20.06.2018 15:18
32
1
48 317
6
Данный вопрос помечен как решенный
 Ответы 6
Попробуйте использовать подход, описанный здесь https://docs.nestjs.com/techniques/security#cors

const app = await NestFactory.create(ApplicationModule);
app.enableCors();
await app.listen(3000);
 21.06.2018 14:11
К сожалению, вы тоже пробовали:

const app = await NestFactory.create(ApplicationModule);
app.enableCors();
await app.listen(3000);
И это все еще не работает.

Убедитесь, что на стороне вашего сервера включен корс, что должно быть примерно таким:

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Accept');
  next();
});
А также убедитесь, что ваш браузер поддерживает корс. Если все это по-прежнему не работает, я посоветую вам загрузить расширение Allow-Control-Allow-Origin для Chrome, оно должно решить вашу проблему.

 21.06.2018 15:37
 Ответ принят как подходящий
Как-то проблема заключалась в его компиляции с использованием npm run webpack. Если я скомпилирую его с помощью prestart:prod, он заработает.

Спасибо @ georgii-rychko за предложение в комментариях.

 21.06.2018 17:11
Если вы запускаете NestJs с graphql, вы столкнетесь с проблемой, когда сервер Apollo переопределит настройку CORS см. ссылку. Это ниже решило проблему. Я потратил на это 8 часов своей жизни. :-( Надеюсь, вы это видите, а не то. См. ссылка на сайт и ссылка на сайт

        GraphQLModule.forRoot({
            debug: process.env.NODE_ENV !== 'production',
            playground: process.env.NODE_ENV !== 'production',
            typePaths: ['./**/*.graphql'],
            installSubscriptionHandlers: true,
            context: ({req}) => {
                return {req};
            },
            cors: {
                credentials: true,
                origin: true,
            },
        }),
затем в вашем main.ts:

        app.enableCors({
            origin: true,
            methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
            credentials: true,
        });
 13.11.2019 12:48
Я смог заставить его работать, предоставив свою собственную функцию происхождения. Полная функция enableCors будет похожа на NestJS или любой сервер NodeJS, например:

var whitelist = ['https://website.com', 'https://www.website.com'];
app.enableCors({
origin: function (origin, callback) {
  if (whitelist.indexOf(origin) !== -1) {
    console.info("allowed cors for:", origin)
    callback(null, true)
  } else {
    console.info("blocked cors for:", origin)
    callback(new Error('Not allowed by CORS'))
  }
},
allowedHeaders: 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept, Observe',
methods: "GET,PUT,POST,DELETE,UPDATE,OPTIONS",
credentials: true,
});
и appOptions, если вы используете NestJS Express:

const app = await NestFactory.create<NestExpressApplication>(AppModule);
 08.06.2020 13:54
возможно, вы получите undefined в источнике со следующим белым списком. Если вы не хотите блокировать Инструменты REST или межсерверные запросы, добавьте проверку !origin в исходную функцию следующим образом:

var whitelist = ['example.com', 'api.example.com'];
app.enableCors({
  origin: function (origin, callback) {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  },
  ...
});


ОШИБКА [MailerService] Транспортер готов. Nest.js. @nestjs-модули/мейлер
Вопросы
NESTJS
ОШИБКА [MailerService] Транспортер готов. Nest.js. @nestjs-модули/мейлер
В терминале возникает ошибка: [Nest]21016 - 05.03.2024, 19:05:42 ОШИБКА [MailerService] Транспортер готов. Письма отправляются. Я не знаю в чем проблема, мне нужна помощь.

Код проверен, ошибок нет.сюда введите описание изображения

 05.03.2024 11:13
8
0
5 169
5
Данный вопрос помечен как решенный
 Ответы 5
 Ответ принят как подходящий
Использование последней версии @nestjs-modules/mailer зарегистрирует эту ошибку в терминале, поэтому вместо этого я использую версию 1.10.3.

Обновление
Эта проблема исправлена ​​начиная с версии 2.0.2.

 05.03.2024 16:16
Работаем над решением этой проблемы :)

https://github.com/nest-modules/mailer/issues/1131

 20.03.2024 20:11
Решение смотрите в этой ссылке

Путь: lib/mailer.service.ts

private verifyTransporter(transporter: Transporter, name?: string): void {
const transporterName = name ?  '${name}' : '';
transporter.verify()
.then(() => this.mailerLogger.error(Transporter${transporterName} is ready))
❌ .then(() => this.mailerLogger.error(Transporter${transporterName} is ready))

измените это на

 ✅.then(() => this.mailerLogger.log(Transporter${transporterName} is ready))
Изменения: образ для перемен

Выход: Исправлена ​​проблема

 27.03.2024 07:42
моя версия: "@nestjs-modules/mailer": "^1.11.2",

Я исправил это таким образом Путь: node_modules/@nestjs-modules/mailer/dist/mailer.service.js

Я изменился then(() => this.mailerLogger.error(Transporter${transporterName} готов)) к then(() => this.mailerLogger.log(Transporter${transporterName} готов))

 30.03.2024 09:50
просто понизьте последнюю версию (1.11.2) до (1.10.3)

npm i @nestjs-modules/mailer@1.10.3


Протестируйте службу NestJS в реальной базе данных
Вопросы
JAVASCRIPT
Протестируйте службу NestJS в реальной базе данных
Я хотел бы иметь возможность протестировать свой сервис Nest в реальной базе данных. Я понимаю, что в большинстве модульных тестов следует использовать фиктивный объект, но иногда имеет смысл протестировать и саму базу данных.

Я просмотрел вопросы SO и GH для Nest и начинаю достигать транзитивного закрытия всех ответов. :-)

Я пытаюсь работать с https://github.com/nestjs/nest/issues/363#issuecomment-360105413. Ниже приведен мой модульный тест, в котором используется пользовательский провайдер для передачи репозитория моему классу обслуживания.

describe("DepartmentService", () => {
  const token = getRepositoryToken(Department);
  let service: DepartmentService;
  let repo: Repository<Department>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        DepartmentService,
        {
          provide: token,
          useClass: Repository
        }
      ]
    }).compile();

    service = module.get<DepartmentService>(DepartmentService);
    repo = module.get(token);
  });
Все компилируется правильно, TypeScript вроде доволен. Однако, когда я пытаюсь выполнить create или save в экземпляре мойRepository, базовый Repository кажется неопределенным. Вот трассировка стека:

TypeError: Cannot read property 'create' of undefined

  at Repository.Object.<anonymous>.Repository.create (repository/Repository.ts:99:29)
  at DepartmentService.<anonymous> (relational/department/department.service.ts:46:53)
  at relational/department/department.service.ts:19:71
  at Object.<anonymous>.__awaiter (relational/department/department.service.ts:15:12)
  at DepartmentService.addDepartment (relational/department/department.service.ts:56:16)
  at Object.<anonymous> (relational/department/test/department.service.spec.ts:46:35)
  at relational/department/test/department.service.spec.ts:7:71
Похоже, экземпляр EntityManager с классом TypeORM Repository не инициализируется; это ссылка undefined, на которую жалуется этот след.

Как мне заставить Repository и EntityManager правильно инициализироваться?

Спасибо, Том.

 16.04.2019 23:51
10
0
14 497
5
Данный вопрос помечен как решенный
 Ответы 5
 Ответ принят как подходящий
Чтобы правильно инициализировать typeorm, вы должны просто импортировать TypeOrmModule в свой тест:

Test.createTestingModule({
  imports: [
   TypeOrmModule.forRoot({
        type: 'mysql',
        // ...
   }),
   TypeOrmModule.forFeature([Department])
  ]
 17.04.2019 01:11
Вот обновление теста, в котором используется предложение Ким Керн.

describe("DepartmentService", () => {
  let service: DepartmentService;
  let repo: Repository<Department>;
  let module: TestingModule;

  beforeAll(async () => {
    module = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot(),
        TypeOrmModule.forFeature([Department])
      ],
      providers: [DepartmentService]
    }).compile();

    service = module.get<DepartmentService>(DepartmentService);
    repo = module.get<Repository<Department>>(getRepositoryToken(Department));
  });

  afterAll(async () => {
    module.close();
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });

  // ...
}
 17.04.2019 15:25
Я предпочитаю не использовать @nestjs/testing для простоты.

Прежде всего, создайте повторно используемый помощник:

/* src/utils/testing-helpers/createMemDB.js */
import { createConnection, EntitySchema } from 'typeorm'
type Entity = Function | string | EntitySchema<any>

export async function createMemDB(entities: Entity[]) {
  return createConnection({
    // name, // let TypeORM manage the connections
    type: 'sqlite',
    database: ':memory:',
    entities,
    dropSchema: true,
    synchronize: true,
    logging: false
  })
}
Затем напишите тест:

/* src/user/user.service.spec.ts */
import { Connection, Repository } from 'typeorm'
import { createMemDB } from '../utils/testing-helpers/createMemDB'
import UserService from './user.service'
import User from './user.entity'

describe('User Service', () => {
  let db: Connection
  let userService: UserService
  let userRepository: Repository<User>

  beforeAll(async () => {
    db = await createMemDB([User])
    userRepository = await db.getRepository(User)
    userService = new UserService(userRepository) // <--- manually inject
  })
  afterAll(() => db.close())

  it('should create a new user', async () => {
    const username = 'HelloWorld'
    const password = 'password'

    const newUser = await userService.createUser({ username, password })
    expect(newUser.id).toBeDefined()

    const newUserInDB = await userRepository.findOne(newUser.id)
    expect(newUserInDB.username).toBe(username)
  })
})
См. https://github.com/typeorm/typeorm/issues/1267#issuecomment-483775861

 26.12.2019 05:35
Я создал тестовую конфигурацию формы

// ../test/db.ts
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { EntitySchema } from 'typeorm';

type Entity = Function | string | EntitySchema<any>;

export const createTestConfiguration = (
  entities: Entity[],
): TypeOrmModuleOptions => ({
  type: 'sqlite',
  database: ':memory:',
  entities,
  dropSchema: true,
  synchronize: true,
  logging: false,
});
который я затем использую при настройке тестов

// books.service.test.ts
import { Test, TestingModule } from '@nestjs/testing';
import { HttpModule, HttpService } from '@nestjs/common';
import { TypeOrmModule, getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { BooksService } from './books.service';
import { Book } from './book.entity';
import { createTestConfiguration } from '../../test/db';

describe('BooksService', () => {
  let module: TestingModule;
  let service: BooksService;
  let httpService: HttpService;
  let repository: Repository<Book>;

  beforeAll(async () => {
    module = await Test.createTestingModule({
      imports: [
        HttpModule,
        TypeOrmModule.forRoot(createTestConfiguration([Book])),
        TypeOrmModule.forFeature([Book]),
      ],
      providers: [BooksService],
    }).compile();

    httpService = module.get<HttpService>(HttpService);
    service = module.get<BooksService>(BooksService);
    repository = module.get<Repository<Book>>(getRepositoryToken(Book));
  });

  afterAll(() => {
    module.close();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
Это позволяет запросить репозиторий после тестов и убедиться, что были вставлены правильные данные.

 19.04.2020 11:06
Обычно я импортирую AppModule для подключения к базе данных, и, наконец, после выполнения тестов я закрываю соединение:

  let service: SampleService;
  let connection: Connection;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [AppModule, TypeOrmModule.forFeature([SampleEntity])],
      providers: [SampleService],
    }).compile();

    service = module.get<SampleService>(SampleService);
    connection = await module.get(getConnectionToken());
  });

  afterEach(async () => {
    await connection.close();
  });


NestJs: невозможно прочитать переменные env в файлах модулей, но можно в служебных файлах?
Вопросы
JAVASCRIPT
NestJs: невозможно прочитать переменные env в файлах модулей, но можно в служебных файлах?
У меня есть файл .env в корне моего проекта NestJs с некоторыми переменными env.

Странно то, что я могу читать переменные в служебных файлах, но не в файлах модулей.

Итак, в служебном файле, таком как users.service.ts, это работает:

saveAvatar() {
    const path = process.env.AVATAR_PATH    // returns value from .env
}
Однако при доступе к пути в файле модуля, таком как auth.module.ts, это возвращает пустое значение:

@Module({
    imports: [
       JwtModule.register({
          secretOrPrivateKey: process.env.SECRET   // process.env.SECRET returns an empty string
       })
    ]
})
Почему это так? Как я могу получить надежный доступ к переменным среды в файле .env в NestJs?

 14.04.2019 10:35
13
2
14 181
5
Данный вопрос помечен как решенный
 Ответы 5
 Ответ принят как подходящий
Ваш файл .env еще не прочитан, когда создается экземпляр вашего JwtModule. Так что либо прочитайте это ранее, например. в вашем main.ts до создания вложенного приложения или лучше: создайте ConfigService и сделайте зависимость от вашей конфигурации явной:

JwtModule.registerAsync({
    imports: [ConfigModule],
    useFactory: async (configService: ConfigService) => ({
      secretOrPrivateKey: configService.jwtSecret,
    }),
    inject: [ConfigService],
}),
См. этот ответ о том, как создать ConfigService.

 14.04.2019 11:04
Вы можете использовать его как глобальный для доступа из других модулей.

When you want to use ConfigModule in other modules, you'll need to import it (as is standard with any Nest module). Alternatively, declare it as a global module by setting the options object's isGlobal property to true, as shown below. In that case, you will not need to import ConfigModule in other modules once it's been loaded in the root module (e.g., AppModule)

.https://docs.nestjs.com/techniques/configuration#use-module-globally

ConfigModule.forRoot({
  isGlobal: true
});
Также вы можете найти здесь, как использовать службу конфигурации: https://docs.nestjs.com/techniques/configuration#using-the-configservice

 24.07.2020 13:51
Как сказал @KimKen, проблема в том, что к моменту создания экземпляра JwtModule переменные среды все еще не загружены. Однако у меня другой подход к ответу @KimKen, который вас также может заинтересовать.

Прежде всего, NestJS предоставляет ConfigModule, который загружает переменные среды, поэтому вам не нужно его создавать, если только вы не хотите обрабатывать его иначе, чем обычно. (https://docs.nestjs.com/techniques/configuration)

Теперь, чтобы решить проблему, я сделал модуль (auth.module.ts) динамическим. Короче говоря, динамический модуль — это модуль, который получает параметры, и он зависит от этих входных параметров для его правильной реализации. (https://docs.nestjs.com/fundamentals/dynamic-modules)

На самом деле здесь происходит то, что JwtModule также является динамическим модулем, потому что он зависит от переменной для своего правильного экземпляра. Таким образом, ваш модуль также зависит от параметров для его правильной реализации, поэтому сделайте его динамическим! :).

Тогда ваш auth.module будет выглядеть примерно так:

@Module({})
export class AuthModule {

    static forRoot(): DynamicModule {
        return {
            imports: [
                JwtModule.register({
                    secretOrPrivateKey: process.env.SECRET   // process.env.SECRET will return the proper value
                })
            ],
            module: AuthModule
        }
    }

Тогда это будет так же просто, как в вашем app.module или где бы вы ни загружали auth.module, импортируйте его через статический метод forRoot.

import { ConfigModule } from '@nestjs/config';

@Module({
    imports: [ConfigModule.forRoot(), AuthModule.forRoot()]
})

Примечание. Я рекомендую один раз импортировать ConfigModule в app.module.ts.

PD: Вы можете заставить динамический auth.module получать параметр в методе forRoot, а в app.module передавать переменную среды process.env.SECRET

AuthModule.forRoot(process.env.SECRET)
но кажется, что динамические модули загружаются последними, поэтому в этом нет необходимости.

 03.12.2020 19:21
Я просто понимаю, что решаю и свою проблему, просто импортируя dotenv и вызывая конфигурацию метода в начале моего модуля (auth.module.ts).

import "dotenv" from dotenv;

dotenv.config({path:<path-to-env-file>})

Не нужно указывать путь, если вы используете файл .env по умолчанию в корне проекта.

 18.01.2021 15:32
Порядок объявления важен в вашем случае использования.

Это работает:

@Module({
  imports: [
    ConfigModule.forRoot(),
    ScheduleModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mongodb',
      host: process.env.SYN_MONGO_HOST,
      port: +process.env.SYN_MONGO_PORT,
      username: process.env.SYN_MONGO_USERNAME,
      password: process.env.SYN_MONGO_PASSWORD,
      database: process.env.SYN_MONGO_DATABASE,
      authSource: 'admin',
      autoLoadEntities: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class ConfigurationModule {}
Когда это не

@Module({
  imports: [
    ScheduleModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mongodb',
      host: process.env.SYN_MONGO_HOST,
      port: +process.env.SYN_MONGO_PORT,
      username: process.env.SYN_MONGO_USERNAME,
      password: process.env.SYN_MONGO_PASSWORD,
      database: process.env.SYN_MONGO_DATABASE,
      authSource: 'admin',
      autoLoadEntities: true,
    }),
    ConfigModule.forRoot(),
  ],
  controllers: [],
  providers: [],
})
export class ConfigurationModule {}
Это связано с тем, что ConfigModule загружается до или после TypeOrmModule.


Внедрите репозиторий TypeORM в сервис NestJS для тестирования фиктивных данных
Вопросы
JAVASCRIPT
Внедрите репозиторий TypeORM в сервис NestJS для тестирования фиктивных данных
В этом проблема есть долгое обсуждение того, как это сделать.

Я экспериментировал с рядом предложенных решений, но мне не повезло.

Может ли кто-нибудь привести конкретный пример того, как протестировать службу с внедренным репозиторием и имитировать данные?

 26.03.2019 21:54
41
0
42 619
5
Данный вопрос помечен как решенный
 Ответы 5
 Ответ принят как подходящий
Предположим, у нас есть очень простой сервис, который находит сущность пользователя по id:

export class UserService {
  constructor(@InjectRepository(UserEntity) private userRepository: Repository<UserEntity>) {
  }

  async findUser(userId: string): Promise<UserEntity> {
    return this.userRepository.findOne(userId);
  }
}
Затем вы можете смоделировать UserRepository с помощью следующей фиктивной фабрики (при необходимости добавьте дополнительные методы):

// @ts-ignore
export const repositoryMockFactory: () => MockType<Repository<any>> = jest.fn(() => ({
  findOne: jest.fn(entity => entity),
  // ...
}));
Использование фабрики гарантирует, что для каждого теста используется новый макет.

describe('UserService', () => {
  let service: UserService;
  let repositoryMock: MockType<Repository<UserEntity>>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        // Provide your mock instead of the actual repository
        { provide: getRepositoryToken(UserEntity), useFactory: repositoryMockFactory },
      ],
    }).compile();
    service = module.get<UserService>(UserService);
    repositoryMock = module.get(getRepositoryToken(UserEntity));
  });

  it('should find a user', async () => {
    const user = {name: 'Alni', id: '123'};
    // Now you can control the return value of your mock's methods
    repositoryMock.findOne.mockReturnValue(user);
    expect(service.findUser(user.id)).toEqual(user);
    // And make assertions on how often and with what params your mock's methods are called
    expect(repositoryMock.findOne).toHaveBeenCalledWith(user.id);
  });
});
Для безопасности типов и удобства вы можете использовать следующую типизацию для своих (частичных) макетов (далеко от совершенства, может быть лучшее решение, когда сама шутка начнет использовать машинописный текст в следующих основных выпусках):

export type MockType<T> = {
  [P in keyof T]?: jest.Mock<{}>;
};
 26.03.2019 22:18
Я также обнаружил, что это сработало для меня:

export const mockRepository = jest.fn(() => ({
  metadata: {
    columns: [],
    relations: [],
  },
}));
а также

const module: TestingModule = await Test.createTestingModule({
      providers: [{ provide: getRepositoryToken(Entity), useClass: mockRepository }],
    }).compile();
 19.06.2019 02:28
В моем решении используется база данных памяти sqlite, в которую я вставляю все необходимые данные и создаю схему перед каждым запуском теста. Таким образом, каждый тест учитывает один и тот же набор данных, и вам не нужно имитировать какие-либо методы TypeORM:

import { Test, TestingModule } from "@nestjs/testing";
import { CompanyInfo } from '../../src/company-info/company-info.entity';
import { CompanyInfoService } from "../../src/company-info/company-info.service";
import { Repository, createConnection, getConnection, getRepository } from "typeorm";
import { getRepositoryToken } from "@nestjs/typeorm";

describe('CompanyInfoService', () => {
  let service: CompanyInfoService;
  let repository: Repository<CompanyInfo>;
  let testingModule: TestingModule;

  const testConnectionName = 'testConnection';

  beforeEach(async () => {
    testingModule = await Test.createTestingModule({
      providers: [
        CompanyInfoService,
        {
          provide: getRepositoryToken(CompanyInfo),
          useClass: Repository,
        },
      ],
    }).compile();

    let connection = await createConnection({
        type: "sqlite",
        database: ":memory:",
        dropSchema: true,
        entities: [CompanyInfo],
        synchronize: true,
        logging: false,
        name: testConnectionName
    });    

    repository = getRepository(CompanyInfo, testConnectionName);
    service = new CompanyInfoService(repository);

    return connection;
  });

  afterEach(async () => {
    await getConnection(testConnectionName).close()
  });  

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return company info for findOne', async () => {
    // prepare data, insert them to be tested
    const companyInfoData: CompanyInfo = {
      id: 1,
    };

    await repository.insert(companyInfoData);

    // test data retrieval itself
    expect(await service.findOne()).toEqual(companyInfoData);
  });
});
Я вдохновился здесь: https://gist.github.com/Ciantic/be6a8b8ca27ee15e2223f642b5e01549

 30.09.2019 10:06
Вы также можете использовать тестовую БД и вставлять туда данные.

describe('EmployeesService', () => {
  let employeesService: EmployeesService;
  let moduleRef: TestingModule;

  beforeEach(async () => {
    moduleRef = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forFeature([Employee]),
        TypeOrmModule.forRoot({
          type: 'postgres',
          host: 'db',
          port: 5432,
          username: 'postgres',
          password: '',
          database: 'test',
          autoLoadEntities: true,
          synchronize: true,
        }),
      ],
      providers: [EmployeesService],
    }).compile();

    employeesService = moduleRef.get<EmployeesService>(EmployeesService);
  });

  afterEach(async () => {
    // Free DB connection for next test
    await moduleRef.close();
  });

  describe('findOne', () => {
    it('returns empty array', async () => {
      expect(await employeesService.findAll()).toStrictEqual([]);
    });
  });
});
Вам нужно будет создать БД вручную, например. psql -U postgres -c 'create database test;'. Синхронизация схемы произойдет автоматически.

 21.02.2021 02:25
Начав с приведенных выше идей и чтобы помочь с имитацией любого класса, мы создали эту MockFactory:

export type MockType<T> = {
    [P in keyof T]?: jest.Mock<unknown>;
};

export class MockFactory {
    static getMock<T>(type: new (...args: any[]) => T, includes?: string[]): MockType<T> {
        const mock: MockType<T> = {};

        Object.getOwnPropertyNames(type.prototype)
            .filter((key: string) => key !== 'constructor' && (!includes || includes.includes(key)))
            .map((key: string) => {
                mock[key] = jest.fn();
            });

        return mock;
    }
}

const module: TestingModule = await Test.createTestingModule({
    providers: [
        {
            provide: getRepositoryToken(MyCustomRepository),
            useValue: MockFactory.getMock(MyCustomRepository)
        }
    ]
}).compile();
Ваш ответ может быть улучшен с помощью дополнительной вспомогательной информации. Пожалуйста, редактировать добавьте дополнительную информацию, например цитаты или документацию, чтобы другие могли подтвердить правильность вашего ответа. Дополнительную информацию о том, как писать хорошие ответы, можно найти в справочном центре.

— 
Community
 17.12.2021 19:09


Как обслуживать статические файлы HTML в Nest.js?
Вопросы
JAVASCRIPT
Как обслуживать статические файлы HTML в Nest.js?
Я хочу обслуживать статические файлы HTML, которые находятся в папке /dist за пределами проекта Nest. index.html загружается успешно, но не может загрузить какой-либо файл JS (ошибка 404).

У меня есть проект Node/Express.js, который использует

app.use('/', express.static('../client/dist'))
и он отлично работает.

Однако в проекте Nest

app.setBaseViewsDir(join(__dirname, '../../client/dist'))
не делает трюк.

В AppController я пробовал

import { Response } from 'express';

@Get()
  get(@Res() res: Response) {
    res.sendFile('index.html', {
      root: '../client/dist',
    });
  }
Но не повезло.

Как уже упоминалось, index.html успешно загружен. Так что проблема не в неправильном пути. Также не проблема неправильных src-путей в index.html, потому что в проекте Express используются точно такие же файлы.

/dist
  |-index.html
  |-main.js
  |-etc.
В index.html:

<script type = "text/javascript" src = "main.js"></script>
Не работает и когда кладу папку dist в проект Nest (и адаптирую путь).

Я нашел решение:
Сейчас я использую экспресс-модуль:

import * as express from 'express';
...
app.use('/', express.static('../client/dist'));
 24.03.2019 15:54
18
4
25 699
5
 Ответы 5
Для обслуживания статических файлов вы должны использовать useStaticAssets() вместо setBaseViewsDir():

app.useStaticAssets(join(__dirname, '../../client/dist'))
При использовании useStaticAssets вам не нужно настраивать контроллер, все ваши файлы будут обслуживаться автоматически:

Допустим, под client/dist у вас есть файлы index.html и pic.jpg. Они будут служить:

localhost:3000 -> index.html
localhost:3000/pic.jpg -> pic.jpg
Настройка каталога базовых представлений необходима, если вы хотите использовать механизм просмотра, например, такой как hbs, см. документы.

 24.03.2019 17:13
Напишите app.useStaticAssets(join(__dirname, '../../client/dist')) в main.ts

А также вы можете попробовать приложение fastify:

import { resolve } from 'path';

app.useStaticAssets({
    root: resolve("./build")
});
 26.03.2019 17:49
Что касается официальная документация Nest.js, следует обслуживать статические файлы следующим образом:

Установите необходимый пакет:

npm install --save @nestjs/serve-static
Обновите app.module.ts, чтобы он выглядел следующим образом:

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client'),   // <-- path to the static files
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
 26.08.2019 14:04
Если у вас есть что-то вроде этого

/public
  |-index.html
  |-main.js
  |-etc.
/src
  |-app.controller.js
  |-app.module.js
  |-main.js
В main.ts или main.js

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setViewEngine('html');

  await app.listen(5000);
}
bootstrap();
В app.module.js

@Module({
  imports: 
  [ 
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
      exclude: ['/api*'],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
В app.controller.js

@Controller()
@Dependencies(AppService)
export class AppController {
  constructor(appService) {
    this.appService = appService;
  }

  @Get()
  @Render('index')
  root() {
  }
}
С этим кодом вы можете добиться цели :) :) :)

 18.03.2020 00:49
Если вы решите сделать это в "main.ts" или "app.module.ts" (они оба вам не нужны), лучше добавить опцию "prefix" в "main.ts":

app.useStaticAssets(join(__dirname, '..', 'public'), {prefix: '/public'});
Или вариант «serveRoot» в «app.module.ts»:

ServeStaticModule.forRoot({
   serveRoot: '/public',
   rootPath: join(__dirname, '..', 'public'),
}),
И сделайте ссылку на свои статические файлы как «[ваш хост]/public/[ваш каталог и файлы]» Чтобы разделить ваш статический путь, чем другие пути.


Как реализовать разбиение на страницы в NestJS с помощью TypeORM
Вопросы
TYPESCRIPT
Как реализовать разбиение на страницы в NestJS с помощью TypeORM
Есть ли способ получить общее количество и записи с помощью одного запроса вместо того, чтобы запускать его как два отдельных запроса?

Если это невозможно, есть ли способ повторно использовать условие where в обоих запросах?

async findAll(query): Promise<Paginate> {
  const take = query.take || 10
  const skip = query.skip || 0
  const keyword = query.keyword || ''

  const builder = this.userRepository.createQueryBuilder("user")
  const total = await builder.where("user.name like :name", { name: '%' + keyword + '%' }).getCount()
  const data = await builder.where("user.name like :name", { name: '%' + keyword + '%' }).orderBy('name', 'DESC').skip(skip).take(take).getMany();

  return {
    data: data,
    count: total
  }
}

{
  count: 10,
  data: [
    {
      id: 1,
      name: 'David'
    },
    {
      id: 2,
      name: 'Alex'
    }]
}
 25.12.2018 13:43
35
0
51 626
5
Данный вопрос помечен как решенный
 Ответы 5
 Ответ принят как подходящий
Вы можете найти хороший пример в этом проект. Короче говоря, у typeorm есть действительно хороший метод, специфичный для этого варианта использования findAndCount.

async findAll(query): Promise<Paginate> {
    const take = query.take || 10
    const skip = query.skip || 0
    const keyword = query.keyword || ''

    const [result, total] = await this.userRepository.findAndCount(
        {
            where: { name: Like('%' + keyword + '%') }, order: { name: "DESC" },
            take: take,
            skip: skip
        }
    );

    return {
        data: result,
        count: total
    }
}
Repository API вы можете найти здесь. Дополнительную документацию о классе Repository можно найти в здесь.

 25.12.2018 14:12
Если вам нужно выполнить разбиение на МНОГИЕ записи, то есть несколько итераций (возможно, во время миграции или массового обновления).

async getPaginatedResults(query: any, transactionManager?: EntityManager): Promise<any> {

}
 29.04.2019 21:32
подводя итоги ...

Это промежуточное программное обеспечение проверяет, есть ли у вас параметры take и skip в URL-адресе, если они есть, оно преобразует строку в число, если вы не используете значения по умолчанию. 10 для дубля и 0 для пропуска.

take - количество результатов на странице и skip, откуда следует начинать чтение записей.

При этом я настроил перехват маршрута «продукт / выгружаемый» только для метода GET.

С его помощью я могу получить эти значения в контроллере и перейти к TypeORM или SQL-запросу.

Folders

@Injectable()
export class PagerMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    req.query.take = +req.query.take || 10;
    req.query.skip = +req.query.skip || 0;
    next();
  }
}
и применить в модуле.
export class AdminFeatureApi implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(PagerMiddleware)
    .forRoutes({ path: 'product/paged', method: RequestMethod.GET })
  }
}
Контроллер
@Controller('product')
export class TrainingDomainController {
  constructor(private service: YourService) {}

  @Get('paged')
  get(@Query() { take, skip }) {
    return this.service.findAll(take, skip);
  }
}
и сервис
@Injectable()
export class YourService {
  constructor(
    @InjectRepository(YourEntity)
    private readonly repo: MongoRepository<YourEntity>
  ) {}

  async findAll(take: number = 10, skip: number = 0) {
    const [data, total] = await this.repo.findAndCount({ take, skip });
    return { data, total };
  }
}
хорошо?

 01.11.2019 14:03
Вы также можете взглянуть на этот пакет для NestJS и TypeORM:

https://github.com/nestjsx/nestjs-typeorm-paginate

 04.07.2020 14:45
я предпочитаю использовать страницу вместо прямого пропуска

пример конечной точки: /users?page=4&take=3

async findAll(query): Promise<Paginate> {
    const take = query.take || 10
    const page=query.page || 1;
    const skip= (page-1) * take ;
    const keyword = query.keyword || ''

    const [result, total] = await this.userRepository.findAndCount(
        {
            where: { name: Like('%' + keyword + '%') }, order: { name: "DESC" },
            take: take,
            skip: skip
        }
    );

    return {
        data: result,
        count: total
    }
}
2 /. лучший способ (обработать ответ):

 async findAll(query): Promise<Paginate> {
     const take = query.take || 10
     const page=query.page || 1;
     const skip= (page-1) * take ;
     const keyword = query.keyword || ''

     const data = await this.userRepository.findAndCount(
         {
             where: { name: Like('%' + keyword + '%') }, order: { name: "DESC" },
             take: take,
             skip: skip
         }
     );
     return paginateResponse(data ,page,limit)

 }
export function paginateResponse(data,page,limit) {
  const [result, total]=data;
  const lastPage=Math.ceil(total/limit);
  const nextPage=page+1 >lastPage ? null :page+1;
  const prevPage=page-1 < 1 ? null :page-1;
  return {
    statusCode: 'success',
    data: [...result],
    count: total,
    currentPage: page,
    nextPage: nextPage,
    prevPage: prevPage,
    lastPage: lastPage,
  }
}


Как вернуть PDF-файл из контроллера
Вопросы
JAVASCRIPT
Как вернуть PDF-файл из контроллера
Я пытаюсь вернуть файл PDF из конечной точки контроллера с помощью NestJs. Если не задан заголовок Content-type, данные, возвращаемые getDocumentFile, просто возвращаются пользователю. Однако, когда я добавляю заголовок, возвращаемый результат кажется странной формой GUID, ответ всегда выглядит так: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx, где x - шестнадцатеричный символ в нижнем регистре. Это также кажется совершенно не связанным с фактическим возвращаемым значением функции-обработчика, поскольку я даже получаю этот странный GUID, когда вообще ничего не возвращаю.

Если Content-type: application/pdf не установлен, функция просто возвращает данные буфера, однако мне нужно установить заголовок, чтобы браузер распознал ответ как файл PDF, что важно для моего варианта использования.

Контроллер выглядит так:

@Controller('documents')
export class DocumentsController {
  constructor(private documentsService: DocumentsService) {}

  @Get(':id/file')
  @Header('Content-type', 'application/pdf')
  async getDocumentFile(@Param('id') id: string): Promise<Buffer> {
    const document = await this.documentsService.byId(id)
    const pdf = await this.documentsService.getFile(document)

    // using ReadableStreamBuffer as suggested by contributor
    const stream = new ReadableStreamBuffer({
      frequency: 10,
      chunkSize: 2048,
    })
    stream.put(pdf)
    return stream
  }
}
и мой DocumentsService вот так:

@Injectable()
export class DocumentsService {
  async getAll(): Promise<Array<DocumentDocument>> {
    return DocumentModel.find({})
  }

  async byId(id: string): Promise<DocumentDocument> {
    return DocumentModel.findOne({ _id: id })
  }

  async getFile(document: DocumentDocument): Promise<Buffer> {
    const filename = document.filename
    const filepath = path.join(__dirname, '..', '..', '..', '..', '..', 'pdf-generator', 'dist', filename)

    const pdf = await new Promise<Buffer>((resolve, reject) => {
      fs.readFile(filepath, {}, (err, data) => {
        if (err) reject(err)
        else resolve(data)
      })
    })
    return pdf
  }
}
Изначально я только что вернул буфер (return pdf), но это дало тот же результат, что и попытка выше. В репозитории NestJs пользователь предложил использовать вышеуказанный метод, который, очевидно, у меня тоже не работает. См. Ветку GitHub здесь.

 27.11.2018 18:00
9
4
22 873
5
 Ответы 5
Меня устраивает.

@Get('pdf')
@HttpCode(HttpStatus.OK)
@Header('Content-Type', 'application/pdf')
@Header('Content-Disposition', 'attachment; filename=test.pdf')
pdf() {
    return createReadStream('./nodejs.pdf');
}
Кстати, я думаю, что лучше использовать Stream вместо readFile. Потому что он загружает все содержимое файла в оперативную память.

 30.11.2018 13:11
Я знаю эту старую ветку. Но это может кому-то помочь. похоже на @Victor

  @Get('pdf')
  @HttpCode(201)
  @Header('Content-Type', 'image/pdf')
  @Header('Content-Disposition', 'attachment; filename=test.pdf')
  public pdf() {
    return fs.createReadStream('./test.pdf');
  }
 30.01.2020 15:11
Можно просто использовать готовый декоратор @Res, это мое рабочее решение:

Контроллер (NestJs):

async getNewsPdfById(@Param() getNewsParams: GetNewsPdfParams, @Req() request: Request, @Res() response: Response): Promise<void> {
  const stream = await this.newsService.getNewsPdfById(getNewsParams.newsId, request.user.ownerId);

  response.set({
    'Content-Type': 'image/pdf',
  });

  stream.pipe(response);
}
В моем случае переменная потока - это просто готовый поток, созданный библиотекой html-pdf, потому что я создаю pdf с помощью html https://www.npmjs.com/package/html-pdf, но не имеет значения, как вы создаете свой поток. Дело в том, что вы должны использовать декоратор @Res и передать его по конвейеру, потому что это собственное решение NestJs.

Также вот код, как запросить файл на стороне клиента: https://gist.github.com/javilobo8/097c30a233786be52070986d8cdb1743

В любом случае, давайте попробуем это в вашем случае:

@Controller('documents')
export class DocumentsController {
  constructor(private documentsService: DocumentsService) {}

  @Get(':id/file')
  async getDocumentFile(@Param('id') id: string, @Res res: Response): Promise<Buffer> {
    const document = await this.documentsService.byId(id)
    const pdf = await this.documentsService.getFile(document)


    const stream = new ReadableStreamBuffer({
      frequency: 10,
      chunkSize: 2048,
    })

    res.set({
      'Content-Type': 'image/pdf',
    });

    stream.pipe(res);
  }
}
 22.05.2020 00:15
Обновление 2021 года:

Отныне в Nest Version 8 вы можете использовать класс StreamableFile:

import { Controller, Get, StreamableFile } from '@nestjs/common';
import { createReadStream } from 'fs';
import { join } from 'path';

@Controller('file')
export class FileController {
  @Get()
  getFile(): StreamableFile {
    const file = createReadStream(join(process.cwd(), 'package.json'));
    return new StreamableFile(file);
  }
}
Больше информации в официальных документах Nest: https://docs.nestjs.com/techniques/streaming-files

 19.08.2021 10:03
Также обновлено в 2021 году:

Я предпочитаю этот способ, так как мне не нужна логика постконтроллерного перехватчика. Мы можем контролировать имя файла и делать его встроенным или загружать файл.

@Get()
  download(@Res() res) {
    const filename = '123.pdf';
    // make it to be inline other than downloading
    // res.setHeader('Content-disposition', 'inline; filename=' + filename);
    res.setHeader('Content-disposition', 'attachment; filename=' + filename);
    const filestream = createReadStream('files/' + filename);
    filestream.pipe(res);
  }
Больше информации в официальных документах Nest: https://docs.nestjs.com/techniques/streaming-files


Миграции добавлены в корневую папку, а не в папку миграции
Вопросы
NESTJS
Миграции добавлены в корневую папку, а не в папку миграции
Я пытаюсь настроить миграции для Nestjs TypeORM, в моем TypeOrmModule.forRoot() я добавил желаемую папку для миграций, но он продолжает добавлять миграции в корневую папку.

TypeOrmModule.forRoot({
  type: 'mssql',
  host: 'test',
  port: 1,
  username: 'test',
  password: 'test',
  database: 'test',
  entities: [__dirname + '/**/entities/*{.ts,.js}'],
  synchronize: false,
  options: {
    useUTC: true,
  },
  migrations: [__dirname + '/**/migration/*.ts'],
  cli: {
    migrationsDir: __dirname + '/**/migration',
  },
})
 08.11.2018 13:24
2
0
5 817
5
 Ответы 5
Я думаю, это может быть из-за того, что когда вы создаете миграцию, вы, вероятно, используете пакет typeorm, верно? (вроде так typeorm migration:create -n PostRefactoring). Которая будет использовать совершенно другую конфигурацию по сравнению с той, которую вы указали в своем приложении-гнезде. Я полагаю, что самый простой способ - создать файл env и использовать TYPEORM_MIGRATIONS_DIR для определения каталога миграции.

См. Здесь доступные параметры окружения http://typeorm.io/#/using-ormconfig/using-environment-variables. Затем вы можете связать свои env со своим приложением, чтобы они были определены в одном месте.

Я не хочу быть тем человеком, который рекламирует свои собственные пакеты, вы можете легко добиться своей собственной настройки, если хотите. Я создал модуль конфигурации, который вы можете использовать для таких конфигураций

https://github.com/nestjs-community/nestjs-config#typeorm

import {Module} from '@nestjs/common';
import {ConfigModule, ConfigService} from 'nestjs-config';
import {TypeOrmModule} from '@nestjs/typeorm';
import * as path from 'path';

@Module({
    imports: [
        ConfigModule.load(path.resolve(__dirname, 'config/**/*.{ts,js}')),
        TypeOrmModule.forRootAsync({
            useFactory: (config: ConfigService) => config.get('database'),
            inject: [ConfigService],
        }),
    ],
})
export class AppModule {}
Это позволит вам определять свои конфигурации в таком файле

//src/config/database.ts
export default {
    type: 'mssql',
    host: process.env.TYPEORM_HOST,
    port: process.env.TYPEORM_PORT,
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    database: process.env.TYPEORM_DATABASE,
    entities: [process.env.TYPEORM_ENTITIES],
    synchronize: process.env.TYPEORM_SYNCHRONIZE == 'true',
    migrationsDir: process.env.TYPEORM_MIGRATIONS_DIR
};
Тогда ваш .env

TYPEORM_HOST=test
TYPEORM_USERNAME=test
TYPEORM_PASSWORD=test
TYPEORM_PORT=1
TYPEORM_MIGRATIONS_DIR=src/migrations
Теперь вы сможете использовать команду typeorm, и ваши конфигурации базы данных по-прежнему будут определены в одном месте. Надеюсь это поможет!

 09.11.2018 11:32
У меня была такая же проблема, и для меня проблема заключалась в имени подключения. Моя конфигурация подключения не использовала "default" в качестве имени, поэтому нам нужно было передать его имя в typeorm cli, например:

typeorm migration:create -n MyMigration -c my-connection-name
 08.11.2019 20:53
Просто поделитесь своим опытом. У меня typeorm 0.2.12

Я настроил сценарий typeorm, как описано здесь

Создал ormconfig.ts, экспортировавший конфиг: export = config; (точно)

Ставить migrationsDir без __dirname просто src/migrations

И это сработало для меня.

 02.04.2020 16:01
Команда CLI не видит (и ничего не знает об экспортированном имени typeOrmConfig, поэтому она использовала экспортированную конфигурацию по умолчанию, если таковая имеется). Итак, чтобы все заработало, по умолчанию конфигурация должна быть экспортирована. Но поскольку экспорт по умолчанию - плохой шаблон, я редко его использую.

Мой пример:

  // typeorm.config.ts file

  // Old code
  export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost' || process.env.DB_HOST,
    ...
  }

  // New code, make config visible for CLI commands
  module.exports = typeOrmConfig;
 24.07.2021 12:51
У меня была такая же проблема, я просто добавил опцию -d в команду CLI, чтобы указать каталог, например:

ts-node ./node_modules/typeorm/cli.js migration:generate -n migration -d src/infrastructure/migrations


Внедрить службу в охрану в Nest.JS
Вопросы
NODE.JS
Внедрить службу в охрану в Nest.JS
У меня есть KeysModule, который можно использовать для добавления или удаления ключей API. Эти ключи нужны мне для защиты некоторых маршрутов от несанкционированного доступа. Для защиты этих маршрутов я создал ApiGuard:

import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';

@Injectable()
export class ApiGuard implements CanActivate {

async canActivate(
    context: ExecutionContext,
  ): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    return request.headers.api_key;
  }
}
И затем я использую его в маршруте:

 @Get('/protected')
 @UseGuards(ApiGuard)
 async protected(@Headers() headers: Api) {
   const key = await this.ks.findKey({ key: headers.api_key });
   if (!key || !key.active) return 'Invalid Key';
   return 'Your API key works';
 }
Где ks - это KeyService, используемый для проверки правильности ключа. Это решение работает, но глупо. Мне нужно скопировать и вставить несколько строк кода везде, где я хочу использовать эту охрану (я имею в виду строки в маршруте).

Я попытался переместить всю логику в ApiGuard, но у меня возникла ошибка, что KeyService не может быть введен в класс ApiGuard. Чтобы объяснить, у меня есть KeyService у поставщиков в KeysModule, но ApiGuard используется во всем мире.

Ты хоть представляешь, как это сделать?

 17.10.2018 21:53
10
0
14 882
5
Данный вопрос помечен как решенный
 Ответы 5
Вы можете внедрить службу в охранник, как и в любой объект, аннотированный с помощью Injectable. Если вашему ApiGuard требуется KeyService, у вас есть два варианта:

Добавьте ApiGuard в модуль, который импортирует KeysModule. Затем импортируйте созданный модуль для глобального использования ApiGuard.
Добавьте ApiGuard в KeysModule и экспортируйте его.
 18.10.2018 00:33
Может быть, уже слишком поздно, но я столкнулся с той же проблемой и нашел решение. Может быть, есть лучший, но у меня он работает нормально:

Определите KeysModule как глобальный модуль, вы можете проверить, как это сделать, в документации nestjs: https://docs.nestjs.com/modules

После вы можете сделать это:

import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';

@Injectable()
export class ApiGuard implements CanActivate {

constructor(
@Inject('KeyService')
private readonly ks
) {}

const key = await this.ks.findKey();

"YOUR_CODE_HERE..."

}
Надеюсь, это поможет вам или кому-то, кто будет придерживаться этого в будущем.

 04.03.2019 20:18
 Ответ принят как подходящий
Чтобы внедрить сервис в охрану. Вы можете создать глобальный модуль.

// ApiModule
import {Module,Global} from '@nestjs/common';
import {KeyService} from '../';

@Global()
@Module({
    providers: [ KeyService ],
    exports: [KeyService]
})
export class ApiModule {}
Затем введите службу в охрану вот так

// guard
export class ApiGuard implements CanActivate {
constructor(@Inject('KeyService') private readonly KeyService) {}
}
 async canActivate(context: ExecutionContext) {
    // your code
    throw new ForbiddenException();
  }
Теперь проблема может быть решена, но у меня есть другая проблема. Я хочу что-то внедрить в сервис, но получаю такую ​​ошибку:

Nest can't resolve dependencies of the AuthGuard (?, +). Please make sure that the argument at index [0] is available in the current context.

И вот мое решение:

Чтобы внедрить другую зависимость в KeyService, например, документы nestjs.

global guards registered from outside of any module (with useGlobalGuards() as in the example above) cannot inject dependencies since this is done outside the context of any module.

Это их образец ：

// app.module.js
import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';

@Module({
  providers: [
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
})
export class ApplicationModule {}
Это сработало. Теперь я могу использовать глобальный охранник без ошибок зависимости.

 26.04.2019 09:56
Сервисы, используемые в охраннике, должны быть экспортированы в его модуль. Недостаточно оказания услуги!

 24.02.2021 18:35
Что касается NestJS v8, кажется, что внедрение службы, на которую ответил zsoca в принятом ответе, больше не работает.

Рабочее решение для NestJS 8 - предоставить ссылку на класс вместо строки:

  constructor(@Inject(KeyService) private keyService: KeyService) {}


Развертывание Nest.JS на Heroku
Вопросы
NODE.JS
Развертывание Nest.JS на Heroku
В настоящее время я пытаюсь развернуть базовый стартовый шаблон, сгенерированный интерфейсом командной строки Nest.JS (начиная с версии 5.3.0), и, похоже, у меня возникает тайм-аут при запуске приложения. Интересно, удалось ли кому-нибудь развернуться на Heroku?

Я не уверен, нужно ли мне включать какой-то Procfile?

Кроме того, похоже, не так много информации о развертывании Nest.JS

Журналы Heroku, когда я пытаюсь развернуть.

heroku[web.1]: Starting process with command `npm start`
app[web.1]: 
app[web.1]: > testy@0.0.0 start /app
app[web.1]: > ts-node -r tsconfig-paths/register src/main.ts
app[web.1]: 
app[web.1]: [Nest] 21   - 2018-10-16 06:52:17   [NestFactory] Starting Nest application...
app[web.1]: [Nest] 21   - 2018-10-16 06:52:17   [InstanceLoader] AppModule dependencies initialized +21ms
app[web.1]: [Nest] 21   - 2018-10-16 06:52:17   [RoutesResolver] AppController {/}: +48ms
app[web.1]: [Nest] 21   - 2018-10-16 06:52:17   [RouterExplorer] Mapped {/, GET} route +7ms
app[web.1]: [Nest] 21   - 2018-10-16 06:52:17   [NestApplication] Nest application successfully started +3ms
app[web.1]: Error waiting for process to terminate: No child processes
heroku[web.1]: Error R10 (Boot timeout) -> Web process failed to bind to $PORT within 60 seconds of launch
heroku[web.1]: Stopping process with SIGKILL
heroku[web.1]: Process exited with status 22
heroku[web.1]: State changed from starting to crashed
heroku[web.1]: State changed from crashed to starting
мой файл package.json ниже ...

{
  "name": "testy",
  "version": "0.0.0",
  "description": "description",
  "author": "",
  "license": "MIT",
  "scripts": {
    "format": "prettier --write \"src/**/*.ts\"",
    "start": "ts-node -r tsconfig-paths/register src/main.ts",
    "start:dev": "nodemon",
    "start:debug": "nodemon --config nodemon-debug.json",
    "prestart:prod": "rimraf dist && tsc",
    "start:prod": "node dist/main.js",
    "start:hmr": "node dist/server",
    "lint": "tslint -p tsconfig.json -c tslint.json",
    "test": "jest",
    "test:watch": "jest --watch",
    "test:cov": "jest --coverage",
    "test:e2e": "jest --config ./test/jest-e2e.json",
    "webpack": "webpack --config webpack.config.js"
  },
  "dependencies": {
    "@nestjs/common": "^5.1.0",
    "@nestjs/core": "^5.1.0",
    "reflect-metadata": "^0.1.12",
    "rxjs": "^6.2.2",
    "typescript": "^3.0.1"
  },
  "devDependencies": {
    "@nestjs/testing": "^5.1.0",
    "@types/express": "^4.16.0",
    "@types/jest": "^23.3.1",
    "@types/node": "^10.7.1",
    "@types/supertest": "^2.0.5",
    "jest": "^23.5.0",
    "nodemon": "^1.18.3",
    "prettier": "^1.14.2",
    "rimraf": "^2.6.2",
    "supertest": "^3.1.0",
    "ts-jest": "^23.1.3",
    "ts-loader": "^4.4.2",
    "ts-node": "^7.0.1",
    "tsconfig-paths": "^3.5.0",
    "tslint": "5.11.0",
    "webpack": "^4.16.5",
    "webpack-cli": "^3.1.0",
    "webpack-node-externals": "^1.7.2"
  },
  "jest": {
    "moduleFileExtensions": [
      "js",
      "json",
      "ts"
    ],
    "rootDir": "src",
    "testRegex": ".spec.ts$",
    "transform": {
      "^.+\\.(t|j)s$": "ts-jest"
    },
    "coverageDirectory": "../coverage",
    "testEnvironment": "node"
  }
}
Если у кого-то есть опыт развертывания этого стека, было бы здорово услышать от вас

 16.10.2018 09:03
6
1
9 053
5
 Ответы 5
Heroku назначает вам порт по умолчанию и добавляет порт в переменные среды (env), поэтому вы можете установить порт на фиксированное число, вам нужно изменить свой основной файл на:

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
 18.10.2018 17:08
Я внес следующие изменения для развертывания только что созданного приложения nest.js:

main.ts - изменено
await app.listen(3000);

к

await app.listen(process.env.PORT || 3000);

добавлено содержимое Procfile: web: npm run start:prod

package.json - добавлен скрипт heroku-postbuild, поэтому мои скрипты выглядят так:

  "scripts": {
    "build": "tsc -p tsconfig.build.json",
    "format": "prettier --write \"src/**/*.ts\"",
    "start": "ts-node -r tsconfig-paths/register src/main.ts",
    "start:dev": "nodemon",
    "start:debug": "nodemon --config nodemon-debug.json",
    "prestart:prod": "rimraf dist && npm run build",
    "start:prod": "node dist/main.js",
    "lint": "tslint -p tsconfig.json -c tslint.json",
    "test": "jest",
    "test:watch": "jest --watch",
    "test:cov": "jest --coverage",
    "test:debug": "node --inspect-brk -r tsconfig-paths/register -r ts-node/register node_modules/.bin/jest --runInBand",
    "test:e2e": "jest --config ./test/jest-e2e.json",
    "heroku-postbuild": "npm install --only=dev --no-shrinkwrap && npm run build"
  },

В настоящее время работает по адресу: https://server-ts.herokuapp.com

 13.02.2019 11:30
Если вы используете уровень бесплатного пользования в Heroku, вы можете использовать только npm start, а ваш - начало: прод. Попробуйте заменить "start:prod": "node dist/main.js" на "start": "node dist/main.js".

 26.07.2019 16:37
Через несколько часов ... все готово!

1. package.json (обратите внимание на: скрипты, версию @nestjs, движки)

{
  "name": "nest",
  "version": "0.0.0",
  "description": "description",
  "author": "",
  "license": "MIT",
  "scripts": {
    "build": "tsc -p tsconfig.build.json",
    "format": "prettier --write \"src/**/*.ts\"",
    "start": "ts-node -r tsconfig-paths/register src/main.ts",
    "start:dev": "nodemon",
    "start:debug": "nodemon --config nodemon-debug.json",
    "start:prod": "node dist/main.js",
    "prestart:prod": "rimraf dist && npm run build",
    "postinstall": "npm run prestart:prod",
    "lint": "tslint -p tsconfig.json -c tslint.json",
    "test": "jest",
    "test:watch": "jest --watch",
    "test:cov": "jest --coverage",
    "test:debug": "node --inspect-brk -r tsconfig-paths/register -r ts-node/register node_modules/.bin/jest --runInBand",
    "test:e2e": "jest --config ./test/jest-e2e.json",
    "heroku-postbuild": "npm install --only=dev --no-shrinkwrap && npm run build"
  },
  "dependencies": {
    "@nestjs/common": "6.7.2",
    "@nestjs/core": "6.7.2",
    "@nestjs/jwt": "0.2.0",
    "@nestjs/mongoose": "5.2.2",
    "@nestjs/passport": "5.1.0",
    "@nestjs/platform-express": "6.7.2",
    "bcrypt": "3.0.2",
    "mongoose": "5.3.15",
    "passport": "0.4.0",
    "passport-jwt": "4.0.0",
    "reflect-metadata": "0.1.12",
    "rimraf": "2.6.2",
    "rxjs": "6.2.2",
    "typescript": "3.0.1"
  },
  "devDependencies": {
    "@nestjs/testing": "5.1.0",
    "@types/express": "4.16.0",
    "@types/jest": "23.3.1",
    "@types/node": "10.7.1",
    "@types/supertest": "2.0.5",
    "jest": "23.5.0",
    "nodemon": "1.18.3",
    "prettier": "1.14.2",
    "supertest": "3.1.0",
    "ts-jest": "23.1.3",
    "ts-loader": "4.4.2",
    "ts-node": "7.0.1",
    "tsconfig-paths": "3.5.0",
    "tslint": "5.11.0"
  },
  "jest": {
    "moduleFileExtensions": [
      "js",
      "json",
      "ts"
    ],
    "rootDir": "src",
    "testRegex": ".spec.ts$",
    "transform": {
      ".+\\.(t|j)s$": "ts-jest"
    },
    "coverageDirectory": "../coverage",
    "testEnvironment": "node"
  },
  "engines": {
    "node": "8.9.4"
  }
}
2. Procfile (расположение - то же, что и package.json) Да, это файл без типа. Может быть создан с помощью Блокнота.

web: npm run start:prod
3. Включите установку devDependencies (при необходимости)

heroku config:set NPM_CONFIG_PRODUCTION=false
 30.11.2019 22:03
Похоже, что все решения здесь были для предыдущих версий Nest.

В моем случае (NestJS v7.5.1) команда запуска выглядит как "nest start"

И все заработало после добавления "@nestjs/cli" в зависимости.


NestJS: подключение к базе данных (TypeORM) по запросу (поддомен)
Вопросы
TYPEORM
NestJS: подключение к базе данных (TypeORM) по запросу (поддомен)
Я пытаюсь создать продукт SAAS через Nest / TypeORM, и мне нужно настроить / изменить соединение с базой данных по поддомену.

customer1.domain.com => connect to customer1 database
customer2.domain.com => connect to customer2 database
x.domain.com => connect to x database
Как я могу это сделать ? С перехватчиками или контекстом запроса (или Zone.js)?

Я не знаю, с чего начать. Кто-то уже это делает?

WIP: чем я сейчас занимаюсь:

добавить все настройки подключений в файл ormconfig
создать промежуточное ПО на всех маршрутах, чтобы внедрить поддомен в res.locals (имя экземпляра) и создать / предупредить соединение typeorm

import { Injectable, NestMiddleware, MiddlewareFunction } from '@nestjs/common';
import { getConnection, createConnection } from "typeorm";

@Injectable()
export class DatabaseMiddleware implements NestMiddleware {
    resolve(): MiddlewareFunction {
      return async (req, res, next) => {
          const instance = req.headers.host.split('.')[0]
          res.locals.instance = instance

          try {
              getConnection(instance)
          } catch (error) {
              await createConnection(instance)
          }

          next();
      };
    }
}
в контроллере: получить имя экземпляра из @Response и передать его в мою службу

@Controller('/catalog/categories')
export class CategoryController {
    constructor(private categoryService: CategoryService) {}

    @Get()
    async getList(@Query() query: SearchCategoryDto, @Response() response): Promise<Category[]> {
      return response.send(
        await this.categoryService.findAll(response.locals.instance, query)
      )
    }
в службе: получить TypeORM Manager для данного экземпляра и запросить базу данных через репозиторий

@Injectable()
export class CategoryService {
  // constructor(
  //   @InjectRepository(Category) private readonly categoryRepository: Repository<Category>
  // ) {}

  async getRepository(instance: string): Promise<Repository<Category>> {
      return (await getManager(instance)).getRepository(Category)
  }

  async findAll(instance: string, dto: SearchCategoryDto): Promise<Category[]> {
    let queryBuilder = (await this.getRepository(instance)).createQueryBuilder('category')

    if (dto.name) {
        queryBuilder.andWhere("category.name like :name", { name: `%${dto.name}%` })
    }

    return await queryBuilder.getMany();
  }
Кажется, это работает, но я не уверен почти во всем:

пул подключений (сколько я могу создать подключения к своему ConnectionManager?)
передать поддомен в response.locals ... плохая практика?
читаемость / понимание / добавление большого количества дополнительного кода ...
побочные эффекты: я боюсь делиться связями между несколькими поддоменами
побочные эффекты: производительность
Не очень приятно иметь дело с response.send () + Promise + await (s) + pass поддомен везде ...

Есть ли способ получить субдомен прямо в моем Сервисе?

Есть ли способ получить правильное соединение / репозиторий субдомена непосредственно в мою службу и ввести его в мой контроллер?

 17.07.2018 17:57
11
2
9 766
5
 Ответы 5
Я придумал другое решение.

Я создал промежуточное ПО для подключения к определенному клиенту:

import { createConnection, getConnection } from 'typeorm';
import { Tenancy } from '@src/tenancy/entity/tenancy.entity';

export function tenancyConnection(...modules: Array<{ new(...args: any[]): 
any; }>) {

  return async (req, res, next) => {

    const tenant = req.headers.host.split(process.env.DOMAIN)[0].slice(0, -1);

    // main database connection
    let con = ...

    // get db config that is stored in the main db
    const tenancyRepository = await con.getRepository(Tenancy);
    const db_config = await tenancyRepository.findOne({ subdomain: tenant });

    let connection;
    try {
       connection = await getConnection(db_config.name);
    } catch (e) {
      connection = await createConnection(db_config.config);
    }

    // stores connection to selected modules
    for (let module of modules) {
      Reflect.defineMetadata('__tenancyConnection__', connection, module);
    }

    next();
  };
}
Добавил в main.ts:

const app = await NestFactory.create(AppModule);
app.use(tenancyConnection(AppModule));
Чтобы получить доступ к соединению, вы можете расширить любую услугу:

export class TenancyConnection {

  getConnection(): Connection {
    return Reflect.getMetadata('__tenancyConnection__', AppModule);
  }
}
Это все еще черновик, но с помощью этого решения вы можете добавлять, удалять и редактировать соединение для каждого клиента во время выполнения. Надеюсь, это поможет вам в дальнейшем.

 11.12.2018 17:23
Я пишу реализацию этой проблемы для nest-mongodb, пожалуйста, проверьте, это может помочь.

Аналогичный вопрос https://stackoverflow.com/a/57842819/7377682

import {
    Module,
    Inject,
    Global,
    DynamicModule,
    Provider,
    OnModuleDestroy,
} from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';
import { MongoClient, MongoClientOptions } from 'mongodb';
import {
    DEFAULT_MONGO_CLIENT_OPTIONS,
    MONGO_MODULE_OPTIONS,
    DEFAULT_MONGO_CONTAINER_NAME,
    MONGO_CONTAINER_NAME,
} from './mongo.constants';
import {
    MongoModuleAsyncOptions,
    MongoOptionsFactory,
    MongoModuleOptions,
} from './interfaces';
import { getClientToken, getContainerToken, getDbToken } from './mongo.util';
import * as hash from 'object-hash';

@Global()
@Module({})
export class MongoCoreModule implements OnModuleDestroy {
    constructor(
        @Inject(MONGO_CONTAINER_NAME) private readonly containerName: string,
        private readonly moduleRef: ModuleRef,
    ) {}

    static forRoot(
        uri: string,
        dbName: string,
        clientOptions: MongoClientOptions = DEFAULT_MONGO_CLIENT_OPTIONS,
        containerName: string = DEFAULT_MONGO_CONTAINER_NAME,
    ): DynamicModule {

        const containerNameProvider = {
            provide: MONGO_CONTAINER_NAME,
            useValue: containerName,
        };

        const connectionContainerProvider = {
            provide: getContainerToken(containerName),
            useFactory: () => new Map<any, MongoClient>(),
        };

        const clientProvider = {
            provide: getClientToken(containerName),
            useFactory: async (connections: Map<any, MongoClient>) => {
                const key = hash.sha1({
                    uri: uri,
                    clientOptions: clientOptions,
                });
                if (connections.has(key)) {
                    return connections.get(key);
                }
                const client = new MongoClient(uri, clientOptions);
                connections.set(key, client);
                return await client.connect();
            },
            inject: [getContainerToken(containerName)],
        };

        const dbProvider = {
            provide: getDbToken(containerName),
            useFactory: (client: MongoClient) => client.db(dbName),
            inject: [getClientToken(containerName)],
        };

        return {
            module: MongoCoreModule,
            providers: [
                containerNameProvider,
                connectionContainerProvider,
                clientProvider,
                dbProvider,
            ],
            exports: [clientProvider, dbProvider],
        };
    }

    static forRootAsync(options: MongoModuleAsyncOptions): DynamicModule {
        const mongoContainerName =
            options.containerName || DEFAULT_MONGO_CONTAINER_NAME;

        const containerNameProvider = {
            provide: MONGO_CONTAINER_NAME,
            useValue: mongoContainerName,
        };

        const connectionContainerProvider = {
            provide: getContainerToken(mongoContainerName),
            useFactory: () => new Map<any, MongoClient>(),
        };

        const clientProvider = {
            provide: getClientToken(mongoContainerName),
            useFactory: async (
                connections: Map<any, MongoClient>,
                mongoModuleOptions: MongoModuleOptions,
            ) => {
                const { uri, clientOptions } = mongoModuleOptions;
                const key = hash.sha1({
                    uri: uri,
                    clientOptions: clientOptions,
                });
                if (connections.has(key)) {
                    return connections.get(key);
                }
                const client = new MongoClient(
                    uri,
                    clientOptions || DEFAULT_MONGO_CLIENT_OPTIONS,
                );
                connections.set(key, client);
                return await client.connect();
            },
            inject: [getContainerToken(mongoContainerName), MONGO_MODULE_OPTIONS],
        };

        const dbProvider = {
            provide: getDbToken(mongoContainerName),
            useFactory: (
                mongoModuleOptions: MongoModuleOptions,
                client: MongoClient,
            ) => client.db(mongoModuleOptions.dbName),
            inject: [MONGO_MODULE_OPTIONS, getClientToken(mongoContainerName)],
        };

        const asyncProviders = this.createAsyncProviders(options);

        return {
            module: MongoCoreModule,
            imports: options.imports,
            providers: [
                ...asyncProviders,
                clientProvider,
                dbProvider,
                containerNameProvider,
                connectionContainerProvider,
            ],
            exports: [clientProvider, dbProvider],
        };
    }

    async onModuleDestroy() {
        const clientsMap: Map<any, MongoClient> = this.moduleRef.get<
            Map<any, MongoClient>
        >(getContainerToken(this.containerName));

        if (clientsMap) {
            await Promise.all(
                [...clientsMap.values()].map(connection => connection.close()),
            );
        }
    }

    private static createAsyncProviders(
        options: MongoModuleAsyncOptions,
    ): Provider[] {
        if (options.useExisting || options.useFactory) {
            return [this.createAsyncOptionsProvider(options)];
        } else if (options.useClass) {
            return [
                this.createAsyncOptionsProvider(options),
                {
                    provide: options.useClass,
                    useClass: options.useClass,
                },
            ];
        } else {
            return [];
        }
    }

    private static createAsyncOptionsProvider(
        options: MongoModuleAsyncOptions,
    ): Provider {
        if (options.useFactory) {
            return {
                provide: MONGO_MODULE_OPTIONS,
                useFactory: options.useFactory,
                inject: options.inject || [],
            };
        } else if (options.useExisting) {
            return {
                provide: MONGO_MODULE_OPTIONS,
                useFactory: async (optionsFactory: MongoOptionsFactory) =>
                    await optionsFactory.createMongoOptions(),
                inject: [options.useExisting],
            };
        } else if (options.useClass) {
            return {
                provide: MONGO_MODULE_OPTIONS,
                useFactory: async (optionsFactory: MongoOptionsFactory) =>
                    await optionsFactory.createMongoOptions(),
                inject: [options.useClass],
            };
        } else {
            throw new Error('Invalid MongoModule options');
        }
    }
}
 08.09.2019 16:33
Меня вдохновило решение yoh, но я немного подправил его в соответствии с новыми функциями NestJS. Результат - меньше кода.

1) Я создал DatabaseMiddleware

import { Injectable, NestMiddleware, Inject } from '@nestjs/common';
import { getConnection, createConnection, ConnectionOptions } from "typeorm";

@Injectable()
export class DatabaseMiddleware implements NestMiddleware {

  public static COMPANY_NAME = 'company_name';

  async use(req: any, res: any, next: () => void) {
    const databaseName = req.headers[DatabaseMiddleware.COMPANY_NAME];

    const connection: ConnectionOptions = {
      type: "mysql",
      host: "localhost",
      port: 3307,
      username: "***",
      password: "***",
      database: databaseName,
      name: databaseName,
      entities: [
        "dist/**/*.entity{.ts,.js}",
        "src/**/*.entity{.ts,.js}"
      ],
      synchronize: false
    };

    try {
      getConnection(connection.name);
    } catch (error) {
      await createConnection(connection);
    }

    next();
  }

}
2) в main.ts используйте его для всех маршрутов

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(new DatabaseMiddleware().use);
  ...
3) В сервисе получить соединение

import { Injectable, Inject } from '@nestjs/common';
import { Repository, getManager } from 'typeorm';
import { MyEntity } from './my-entity.entity';
import { REQUEST } from '@nestjs/core';
import { DatabaseMiddleware } from '../connections';

@Injectable()
export class MyService {
  private repository: Repository<MyEntity>;

  constructor(@Inject(REQUEST) private readonly request) { 
    this.repository = getManager(this.request.headers[DatabaseMiddleware.COMPANY_NAME]).getRepository(MyEntity);
  }

  async findOne(): Promise<MyEntity> {
    return await this.repository
    ...
  }

}
 02.10.2019 13:13
Вы должны использовать настраиваемый поставщик с областью REQUEST.

Провайдер аренды

import { Global, Module, Scope } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { Connection, createConnection, getConnectionManager } from 'typeorm';

const connectionFactory = {
  provide: 'CONNECTION',
  scope: Scope.REQUEST,
  useFactory: async (req) => {
    const instance = req.headers.host.split('.')[0]
    if (instance) {
      const connectionManager = getConnectionManager();

      if (connectionManager.has(instance)) {
        const connection = connectionManager.get(instance);
        return Promise.resolve(connection.isConnected ? connection : connection.connect());
      }

      return createConnection({
        ...tenantsOrmconfig,
        entities: [...(tenantsOrmconfig as any).entities, ...(ormconfig as any).entities],
        name: instance,
        type: 'postgres',
        schema: instance
      });
    }
  },
  inject: [REQUEST]
};

@Global()
@Module({
  providers: [connectionFactory],
  exports: ['CONNECTION']
})
export class TenancyModule { }


Класс обслуживания

Тогда на ваших сервисах вы можете получить такое соединение:

import { Injectable} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GameEntity } from './game.entity';

@Injectable()
export class MyService {
  constructor(
    @Inject('CONNECTION') connection
  ) {
    this.myRepository = connection.getRepository(GameEntity);
  }

  findAll(): Promise<GameEntity[]> {
    return this.myRepository.find();
  }

}


Вы можете получить более подробную информацию в следующей статье о мультиарендаторах: https://tech.canyonlegal.com/multitenancy-with-nestjs-typeorm-postgres

 04.11.2020 10:45
Лучшим подходом было бы использование динамического модуля, как вы это сделали с областью запроса, чтобы получить соединение ORM и сделать его конкретным. действительно простой пример может быть таким:

const tenancyFactory: Provider = {
    provide: NEST_MYSQL2_TENANCY,
    scope: 'REQUEST',
    useFactory: async (mysql: Mysql, options: MysqlTenancyOption, req: Request): Promise<any> => {
        console.info("TENANCY FACTORY");

        const executer = function (mysqlPool: Mysql): MysqlExecuter {
            return {
                db: function (dbName: string): MysqlRunner {
                    return {
                        run: async function (sqlString: string) {
                            const q = `\nUSE ${dbName};\n` +
                                sqlString.replace("; ", ";\n");
                            if (options.debug) {
                                tLogger.verbose(q);
                            }
                            const [[_, ...queryResult], __] = await mysqlPool.query(q)
                            return queryResult as any;
                        }
                    }
                }
            }
        }
        return executer(mysql);
    },
    inject: [NEST_MYSQL2_CONNECTION, NEST_MYSQL2_TENANCY_OPTION],
};

@Global()
@Module({
    providers: [tenancyFactory],
    exports: [tenancyFactory],
})
export class MultiTenancyModule {
    constructor(

    ) { }
    public static register(options: MysqlTenancyOption): DynamicModule {
        return {
            module: MultiTenancyModule,
            providers: [{
                provide: NEST_MYSQL2_TENANCY_OPTION,
                useValue: options
            }]
        };
    }
}
в этом примере у меня есть пользовательский модуль mysql2-nestjs, но вы можете использовать свой собственный ORM для создания tenancyFactory

вы найдете этот образец в рабочем решении ниже. https://github.com/golkhandani/multi-tenancy/blob/main/test/src/tenancy.module.ts


Доступ к игровой площадке NestJs GraphQL
Вопросы
NODE.JS
Доступ к игровой площадке NestJs GraphQL
Я не могу получить доступ к игровой площадке GraphQL с помощью NestJS. Я изучаю документацию и следую этому https://docs.nestjs.com/graphql/quick-start до раздела Resolvers, чтобы сгенерировать schema.gql, но при попытке связаться с localhost:3000/graphql не удается подключиться.

Сначала я подумал, что мой код настроен неправильно, но я потратил некоторое время на изучение примеров Nest и обнаружил, что они также не работают при попытке доступа к конечной точке /graphql. Это работает, если я настрою конечную точку get для возврата тела JSON с использованием метода REST.

import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { RecipesModule } from './recipes/recipes.module';

@Module({
  imports: [
    RecipesModule,
    GraphQLModule.forRoot({
      installSubscriptionHandlers: true,
      autoSchemaFile: 'schema.gql',
    }),
  ],
})
export class AppModule {}
Это прямо из примера NestJS. Насколько я понимаю, GraphQLModule должен устанавливать соединение с конечной точкой /graphql. Следуя документам, все graphql, apollo-server-express, and graphql-tools были установлены.

Любая идея, почему маршрут graphql не подключается?

[Редактировать]: Вещи, которые я пробовал до сих пор:

установка playground: true явно с помощью GraphQLModule.forRoot
проверено NODE_ENV не является «производством»
подтвержденный сервер работает при создании распознавателей с использованием REST
curl'd localhost:3000/graphql и получите ошибку проверки graphql, поэтому подтвердите правильное подключение
 24.12.2020 18:04
6
6
7 339
4
Данный вопрос помечен как решенный
 Ответы 4
 Ответ принят как подходящий
Кажется, это проблема с WSL2, работающим в Windows 10. В этой ветке на github есть некоторое представление об этой проблеме.

Отключите быстрый запуск, чтобы разрешить доступ к локальному хосту.

https://github.com/microsoft/WSL/issues/5298

 26.12.2020 17:07
Я столкнулся с подобной проблемой, это то, что я сделал. Я надеюсь, что вы найдете это полезным. Я ценил поддержку каждого.

Шаг 1: // app.module.ts

  imports: [
    UsersModule,
    GraphQLModule.forRoot({
      // autoSchemaFile: true,    did not work!
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      // schema.gql will automatically be created
      debug: true,
      playground: true,
    }),
  ],
  providers: [AppResolver],   // all resolvers & service should be in providers
шаг 2:

Убедитесь, что у вас есть хотя бы один запрос bcz Mutation недостаточно, если вы не запустите игровую площадку GraphQL. Подробнее здесь

 19.05.2021 16:34
иногда helmet вызывает ту же проблему. если у вас загружен шлем в качестве промежуточного программного обеспечения, это, вероятно, также может вызвать это.

 20.01.2022 10:51
Мне помогло удаление папки dist и перезапуск приложения.


Как мне подключиться к моей базе данных Datastax Cassandra?
Вопросы
CASSANDRA
Как мне подключиться к моей базе данных Datastax Cassandra?
надеюсь с тобой все в порядке. В настоящее время я работаю с базой данных cassandra, и я почти закончил с этим. В настоящее время я развертываю свои службы, и произошла ошибка. Чтобы лучше работать с cassandra в моем бэкэнде nestjs, я использую фреймворк https://github.com/ifaim/nestjs-express-cassandra Это работает в бэкенде с фреймворком https://github.com/masumsoft/express-cassandra (который активно обновляется и много используется). Но теперь проблема в том, что, согласно документации datastax (где размещена моя база данных cassandra), мне нужно внести secureConnectBundle, чтобы иметь возможность подключиться к моей базе данных.

Как мне подключиться к моей базе данных Datastax Cassandra?

Как мне подключиться к моей базе данных Datastax Cassandra?

Как мне подключиться к моей базе данных Datastax Cassandra?

Как мне подключиться к моей базе данных Datastax Cassandra?

Как мне подключиться к моей базе данных Datastax Cassandra?

Тем не менее, я очень мало нашел в Интернете об этом, и обычно я нахожу больше примеров того, как подключиться к вашей базе данных datastax без secureConnectBundle, чем с помощью. Пока у меня но безуспешно и поэтому спрашиваю здесь. Я очень надеюсь, что мне не придется менять фреймворк, потому что это, вероятно, означало бы конец этого проекта.

 export const cassandraOptions: ExpressCassandraModuleOptions = {
  clientOptions: {
    contactPoints: [
      'e68eb980-c5c3-47fa-a423-472652519805-europe-west1.db.astra.datastax.com',
    ],
    protocolOptions: { port: 9042 },
    keyspace: 'partii',
    queryOptions: {
      fetchSize: 100,
      consistency: 1,
    },
    authProvider: new auth.PlainTextAuthProvider('X', 'X'),
  },
  ormOptions: {
    createKeyspace: false,
    defaultReplicationStrategy: {
      class: 'SimpleStrategy',
      replication_factor: 1,
    },
    migration: 'safe',
  },
};
 18.12.2022 03:27
1
8
116
4
Данный вопрос помечен как решенный
 Ответы 4
Похоже, вы используете DataStax Astra DB. DataStax Astra DB подключается не к порту Cassandra по умолчанию 9042, а к порту 29042. Однако даже при этом вам все равно придется передавать информацию SSL, которую сложно исправить вручную. Вот почему рекомендация ссылаться на пакет безопасного подключения — это простой путь.

Вы правы в том, что, похоже, нет примеров использования Astra DB с Express Cassandra. Хорошей новостью является то, что Express Cassandra выглядит так, как будто использует драйвер Cassandra nodejs. Это означает, что параметры клиента, вероятно, будут одинаковыми/похожими. Попробуйте что-то вроде этого:

export const cassandraOptions: ExpressCassandraModuleOptions = {
  clientOptions: {
    cloud: { secureConnectBundle: 'path/to/secure-connect-bundle.zip' },
    credentials: { username: 'clientid', password: 'secret' }
 },
 ormOptions: {
   createKeyspace: false,
   defaultReplicationStrategy: {
     class: 'SimpleStrategy',
     replication_factor: 1,
   },
   migration: 'safe',
 },
};
И если это не сработает, возможно, замените строку credentials на authProvider, которую вы используете выше.

 19.12.2022 13:00
Вы можете создать пространство ключей только через DevOps API или через GUI . Вы можете следовать приведенным примерам здесь.

 19.12.2022 13:46
Тем временем я решил настроить ssl-соединение вручную, и оно работает. Теперь осталось исправить ошибку.

apollo.model.tablecreation.dbschemaquery: ошибка при получении схемы таблицы БД «NoHostAvailableError: все хосты, пытавшиеся выполнить запрос, завершились неудачно. Первый хост пытался, 34.79.132.94:29080: ошибка [ERR_TLS_CERT_ALTNAME_INVALID]: имя хоста/IP не соответствует сертификату альтна mes: IP: 34.79.132.94 отсутствует в списке сертификатов: . См. внутренние ошибки.

 21.12.2022 02:26
 Ответ принят как подходящий
Это решено.

import {
  auth,
  ExpressCassandraModuleOptions,
} from '@iaminfinity/express-cassandra';
// get fs to read the certificate
import * as fs from 'fs';
// get path to resolve the certificate path
import * as path from 'path';

export const cassandraOptions: () => ExpressCassandraModuleOptions = () => {
  const sslOptions = {
    rejectUnauthorized: true,
    cert: fs.readFileSync(path.resolve(__dirname, '../src/database/cert')),
    key: fs.readFileSync(path.resolve(__dirname, '../src/database/key.pem')),
    ca: fs.readFileSync(path.resolve(__dirname, '../src/database/ca.crt')),
  };

  return {
    clientOptions: {
      contactPoints: [
        'host',
      ],
      protocolOptions: { port: 29042 },
      keyspace: 'partii',
      queryOptions: {
        fetchSize: 100,
        consistency: 1,
      },
      sslOptions: {
        ...sslOptions,
        host: '34.79.236.16',
        checkServerIdentity: function (host, cert) {
          return undefined;
        },
      },
      authProvider: new auth.PlainTextAuthProvider(
        'id',
        'secret',
      ),
    },
    ormOptions: {
      createKeyspace: false,
      defaultReplicationStrategy: {
        class: 'SimpleStrategy',
        replication_factor: 1,
      },
      migration: 'alter',
    },
  };
};
Отличный! Рад, что ты понял это. В следующий раз я собирался построить подобный пример.

— 
Aaron
 21.12.2022 14:54


Невозможно создать новый проект с помощью интерфейса командной строки Nest
Вопросы
JAVASCRIPT
Невозможно создать новый проект с помощью интерфейса командной строки Nest
Я следую учебнику это, чтобы создать проект гнезда. Я установил Гнездо CLI с помощью этой команды:

npm i -g @nestjs/cli
Невозможно создать новый проект с помощью интерфейса командной строки Nest

Я проверил список пакетов, установленных локально, с помощью следующей команды и обнаружил, что он был успешно установлен:

npm list -g --depth 0
Невозможно создать новый проект с помощью интерфейса командной строки Nest

но когда я попытался создать новый проект, используя следующую команду, это дало мне ошибку:

nest new project-name
Ошибка:

nest : The term 'nest' is not recognized as the name of a cmdlet, function, script file, or operable program. Check the spelling of the name, or if a path was included, verify that the path is correct and try again.

At line:1 char:1

nest new project-name


+ CategoryInfo          : ObjectNotFound: (nest:String) [], CommandNotFoundException

+ FullyQualifiedErrorId : CommandNotFoundException
Снимок экрана:

Невозможно создать новый проект с помощью интерфейса командной строки Nest

Why it is so? What's wrong with it? Can someone assist me in identifying the issue?
заранее спасибо

 30.07.2019 09:40
4
3
8 064
4
Данный вопрос помечен как решенный
 Ответы 4
 Ответ принят как подходящий
В большинстве случаев лучше использовать npx вместо установки глобальных пакетов npm, так как вы всегда будете использовать последнюю версию и не будете загромождать свою файловую систему вещами, которые вам часто не нужны.

Просто замените nest на npx @nestjs/cli для любой команды:

npx @nestjs/cli new project-name
 30.07.2019 13:03
В Windows 10 я смог решить эту проблему, добавив каталог установки npm в переменную среды Windows PATH. Мой глобальный путь установки npm был

C:\Users\<user.name>\AppData\Roaming\npm
 29.06.2021 06:27
Попробуйте установить последнюю версию npm, используя:

npm установить npm@latest -g

Это сработало для меня. Также нашел соответствующий ответ здесь:

https://github.com/nestjs/nest-cli/issues/223

 06.07.2021 14:55
Во многих случаях вам приходится управлять переменными среды вручную. Для окон;

Щелкните правой кнопкой мыши Пуск,
Щелкните Система,
Нажмите «Дополнительные параметры системы» в правой части раздела «Связанные параметры».
Появится настройка «Свойства системы». На вкладке «Дополнительно» нажмите «Переменные среды»,
В пользовательских переменных найдите переменную пути. Нажмите изменить,
Нажмите «Обзор» и найдите путь к папке npm (%AppData%\Roaming\npm), нажмите «Добавить».
Закройте все всплывающие окна, нажав ОК, и все.
Закройте любой открытый терминал, PowerShell и т. д.
Откройте новый терминал или PowerShell и введите nest -v нажмите Enter.
Если вы видите версию, то все в порядке.


Скаляр загрузки Nestjs Apollo graphql
Вопросы
JAVASCRIPT
Скаляр загрузки Nestjs Apollo graphql
Я использую платформу NestJS GraphQL и хочу использовать скалярную загрузку apollo.

Мне удалось использовать скаляр в другом проекте, в котором не было Nestjs.

схема.graphql App.module.ts регистрирует graphql

    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      resolvers: { Upload: GraphQLUpload },
      installSubscriptionHandlers: true,
      context: ({ req }) => ({ req }),
      playground: true,
      definitions: {
        path: join(process.cwd(), './src/graphql.classes.ts'),
        outputAs: 'class',
      },
      uploads: {
        maxFileSize: 10000000, // 10 MB
        maxFiles: 5
      }
    }),
Мутация pets.resolver.ts

@Mutation('uploadFile')
    async uploadFile(@Args('fileUploadInput') fileUploadInput: FileUploadInput) {
        console.info("TCL: PetsResolver -> uploadFile -> file", fileUploadInput);
        return {
            id: '123454',
            path: 'www.wtf.com',
            filename: fileUploadInput.file.filename,
            mimetype: fileUploadInput.file.mimetype
        }
    }
домашние животные.type.graphql

type Mutation {
        uploadFile(fileUploadInput: FileUploadInput!): File!
}
input FileUploadInput{
    file: Upload!
}

type File {
        id: String!
        path: String!
        filename: String!
        mimetype: String!
}

Я ожидаю, что скаляр работает с nestjs, но мой фактический результат

{"errors":[{"message":"Promise resolver undefined is not a function","locations":[{"line":2,"column":3}],"path":["createPet"],"extensions":{"code":"INTERNAL_SERVER_ERROR","exception":{"stacktrace":["TypeError: Promise resolver undefined is not a function","    at new Promise (<anonymous>)","    at TransformOperationExecutor.transform (E:\\projectos\\Gitlab\\latineo\\latineo-api\\src\\TransformOperationExecutor.ts:119:32)","    at E:\\projectos\\Gitlab\\latineo\\latineo-api\\src\\TransformOperationExecutor.ts:62:40","    at Array.forEach (<anonymous>)","    at TransformOperationExecutor.transform (E:\\projectos\\Gitlab\\latineo\\latineo-api\\src\\TransformOperationExecutor.ts:41:30)","    at _loop_1 (E:\\projectos\\Gitlab\\latineo\\latineo-api\\src\\TransformOperationExecutor.ts:226:43)","    at TransformOperationExecutor.transform (E:\\projectos\\Gitlab\\latineo\\latineo-api\\node_modules\\class-transformer\\TransformOperationExecutor.js:240:17)","    at ClassTransformer.plainToClass (E:\\projectos\\Gitlab\\latineo\\latineo-api\\src\\ClassTransformer.ts:43:25)","    at Object.plainToClass (E:\\projectos\\Gitlab\\latineo\\latineo-api\\src\\index.ts:37:29)","    at ValidationPipe.transform (E:\\projectos\\Gitlab\\latineo\\latineo-api\\node_modules\\@nestjs\\common\\pipes\\validation.pipe.js:50:41)","    at transforms.reduce (E:\\projectos\\Gitlab\\latineo\\latineo-api\\node_modules\\@nestjs\\core\\pipes\\pipes-consumer.js:15:28)","    at process._tickCallback (internal/process/next_tick.js:68:7)"]}}}],"data":null}
 12.05.2019 09:48
7
2
6 139
4
Данный вопрос помечен как решенный
 Ответы 4
 Ответ принят как подходящий
Я решил это, используя библиотеку graphql-upload. Сначала я создал класс для своего скаляра, используя GraphQLUpload из graphql-upload

import { Scalar } from '@nestjs/graphql';

import { GraphQLUpload } from 'graphql-upload';

@Scalar('Upload')
export class Upload {
  description = 'Upload custom scalar type';

  parseValue(value) {
    return GraphQLUpload.parseValue(value);
  }

  serialize(value: any) {
    return GraphQLUpload.serialize(value);
  }

  parseLiteral(ast) {
    return GraphQLUpload.parseLiteral(ast);
  }
}
Что я добавил в свой модуль приложения

@Module({
  imports: [
  ...
    DateScalar,
    Upload,
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
     ...
      uploads: {
        maxFileSize: 10000000, // 10 MB
        maxFiles: 5,
      },
    }),
  ...
  ],
...
})
export class ApplicationModule {}
я также добавил скаляр загрузки в свой graphql

scalar Upload
...
type Mutation {
  uploadFile(file: Upload!): String
}
и работает в моем распознавателе, у меня был доступ к загруженному файлу.

  @Mutation()
  async uploadFile(@Args('file') file,) {
    console.info('Hello file',file)
    return "Nice !";
  }
(примечание: я использовал https://github.com/jaydenseric/apollo-upload-client#function-createuploadlink для загрузки файла, в распознавателе это Node Stream)

 31.07.2019 14:00
Использовать импортировать {GraphQLUpload} из "Аполло-сервер-экспресс"
Нет из 'graphql-upload'

import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { createWriteStream } from 'fs';

import {GraphQLUpload} from "apollo-server-express"

@Resolver('Download')
export class DownloadResolver {
    @Mutation(() => Boolean)
    async uploadFile(@Args({name: 'file', type: () => GraphQLUpload})
    {
        createReadStream,
        filename
    }): Promise<boolean> {
        return new Promise(async (resolve, reject) => 
            createReadStream()
                .pipe(createWriteStream(`./uploads/${filename}`))
                .on('finish', () => resolve(true))
                .on('error', () => reject(false))
        );
    }
    
}


 25.08.2020 02:39
Обратите внимание, что эта старая версия не полностью совместима с Node 14.

Note: Apollo Server's built-in file upload mechanism is not fully supported in Node 14 and later, and it will be removed in Apollo Server 3. For details, see below.

 04.05.2021 14:09
Правильный ответ для всех версий Apollo Server (полностью совместим с Node 14)
Отключите встроенную обработку загрузки Apollo Server (для apollo 3+ не требуется) и добавьте промежуточное ПО graphqlUploadExpress в свое приложение.
import { graphqlUploadExpress } from "graphql-upload"
import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common"

@Module({
  imports: [
    GraphQLModule.forRoot({
      uploads: false, // disable built-in upload handling (for apollo 3+ not needed)
    }),
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(graphqlUploadExpress()).forRoutes("graphql")
  }
}
Удалите импорт GraphQLUpload из apollo-server-core и вместо этого импортируйте из graphql-upload
// import { GraphQLUpload } from "apollo-server-core" <-- remove this
import { FileUpload, GraphQLUpload } from "graphql-upload"


NestJs TypeORM не может подключиться к mysql
Вопросы
MYSQL
NestJs TypeORM не может подключиться к mysql
Я пытаюсь подключиться к MySQL. Я определил переменные подключения к БД в файле .env в корневом каталоге и инициализирую подключение в файле app.module.ts. единственная проблема, с которой я сталкиваюсь сейчас, - это создание или запуск миграции с использованием CLI, Я следовал документам typeorm здесь для настройки соединения, однако, когда я запускаю typeorm migrate:create -n myNewTable, он должен создать файл миграции в указанном каталоге, вместо этого он создает его в корневом каталоге приложения, аналогично, я решил проблему, используя флаг -d после typeorm migrate:create, чтобы указать каталог, однако, когда я пытаюсь запустить файлы миграции, я получаю это

No connection options were found in any of configurations file.

вот мой файл app.module.ts.

TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.TYPEORM_HOST,
      port: parseInt(process.env.TYPEORM_PORT, 10),
      username: process.env.TYPEORM_USERNAME,
      password: process.env.TYPEORM_PASSWORD,
      database: process.env.TYPEORM_DATABASE,
      synchronize: false,
      migrations: [process.env.TYPEORM_MIGRATIONS],
      cli: {
        migrationsDir: process.env.TYPEORM_MIGRATIONS_DIR,
      },
      logging: (process.env.TYPEORM_LOGGING === 'true') ? true : false,
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
    }),
 
и вот мой файл .env

# use .ts for development, .js for production
TYPEORM_CONNECTION = mysql
TYPEORM_HOST = 127.0.0.1
TYPEORM_PORT = 3306
TYPEORM_USERNAME = <username>
TYPEORM_PASSWORD = <password>
TYPEORM_DATABASE = <dbname>
TYPEORM_SYNCHRONIZE = true
TYPEORM_MIGRATIONSRUN = true
TYPEORM_LOGGING = true
TYPEORM_ENTITIES = src/**/**.entity.ts
#TYPEORM_ENTITIES = src/**/**.entity.js
TYPEORM_SUBSCRIBERS = src/subscriber/*.ts
#TYPEORM_SUBSCRIBERS = src/subscriber/*.js
TYPEORM_MIGRATIONS = src/database/migration/*.ts
TYPEORM_MIGRATIONS_DIR = src/database/migration
TYPEORM_SUBSCRIBERS_DIR = src/subscriber
любая помощь/подсказка высоко ценится, заранее спасибо.

 22.03.2019 15:04
5
2
15 533
4
 Ответы 4
вы можете попробовать следующее: я не использую файл .env, я использую файл конфигурации напрямую, надеюсь, он вам пригодится.

создать файл config.ts

вставьте это:

export const MYSQL = {
    HOST: 'localhost',
    PORT: 3306,
    USERNAME: 'db_user',
    PASSWORD: 'db_pass',
    DATABASE: 'db_name'
};
В файле, где находится ваша конфигурация подключения, напишите. В моем случае это модуль приложения:

import { MYSQL } from './config/config';

TypeOrmModule.forRoot({
      type: 'mysql',
      host: MYSQL.HOST,
      port: MYSQL.PORT,
      username: MYSQL.USERNAME,
      password: MYSQL.PASSWORD,
      database: MYSQL.DATABASE,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
 26.03.2019 15:36
Вы должны указать подключение в ormconfig.json в корневой папке проекта.

выглядит примерно так

{
    "type": "postgres",
    "host": "localhost",
    "port": <port>,
    "username": "",
    "password": "",
    "database": "",
    "entities": ["dist/**/*.entity{.ts,.js}"],
    "synchronize": true,
    "logging": "all",
    "migrations": [
        "migrations/**/*.js"
    ],
    "subscribers": [
        "subscriber/**/*.js"
    ],
    "cli": {
        "migrationsDir": "<migrations directory>",
        "subscribersDir": "<subscriber directory>"
    }
}
Подробнее читайте в главе документация

Кстати, вам, возможно, придется удалить папку расстояние /, чтобы изменения вступили в силу.

 15.11.2019 08:09
Попробуйте изменить каталог ваших сущностей в ormconfig.json или .env, у меня это сработало как:

"entities": ["dist/**/**.entity{.ts,.js}"]
 05.01.2020 21:31
Есть проблема, как вы загружаете **TypeOrmModule**. То, как вы загрузили, является синхронным, поэтому это просто означает, что пользовательский env не будет доступен мгновенно при загрузке приложения.

Итак, что вы можете сделать, так это загрузить ТипOrmModule` асинхронно, как показано ниже:

 ConfigModule.forRoot({
  isGlobal: true, // [REQUIRED if want to use env gloablly among all modules]
 }),
 TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'mysql',
        host: process.env.TYPEORM_HOST,
        port: parseInt(process.env.TYPEORM_PORT, 10),
        username: process.env.TYPEORM_USERNAME,
        password: process.env.TYPEORM_PASSWORD,
        database: process.env.TYPEORM_DATABASE,
        synchronize: false,
        migrations: [process.env.TYPEORM_MIGRATIONS],
        cli: {
          migrationsDir: process.env.TYPEORM_MIGRATIONS_DIR,
        },
        logging: process.env.TYPEORM_LOGGING === 'true' ? true : false,
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      }),
 }),


NestJS Получить текущего пользователя в преобразователе GraphQL, аутентифицированном с помощью JWT
Вопросы
NODE.JS
NestJS Получить текущего пользователя в преобразователе GraphQL, аутентифицированном с помощью JWT
В настоящее время я внедряю аутентификацию JWT с помощью Passport.js в приложение NestJS.

В некоторых моих преобразователях GraphQL мне нужно получить доступ к текущему аутентифицированному пользователю. Я знаю, что паспорт прикрепит аутентифицированного пользователя к объекту запроса (по крайней мере, я надеюсь, что это правильно), но я не знаю, как получить доступ к объекту запроса внутри резолвера.

Я следил за выпуском https://github.com/nestjs/nest/issues/1326 и упомянутой ссылкой https://github.com/ForetagInc/fullstack-boilerplate/tree/master/apps/api/src/app/auth внутри выпуска. Я видел некоторый код, который использует @Res() res: Request в качестве параметра метода в методах распознавателя GraphQL, но я всегда получаю undefined вместо res.

Это текущие реализации, которые у меня есть:

GQLAuth

import { Injectable, ExecutionContext } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GqlExecutionContext } from '@nestjs/graphql';
import { ExecutionContextHost } from '@nestjs/core/helpers/execution-context-host';
import { AuthenticationError } from 'apollo-server-core';

@Injectable()
export class GqlAuthGuard extends AuthGuard('jwt') {
  canActivate(context: ExecutionContext) {
    const ctx = GqlExecutionContext.create(context);
    const { req } = ctx.getContext();
    console.info(req);

    return super.canActivate(new ExecutionContextHost([req]));
  }

  handleRequest(err: any, user: any) {
    if (err || !user) {
      throw err || new AuthenticationError('GqlAuthGuard');
    }
    return user;
  }
}
Преобразователь, которому требуется доступ к текущему пользователю

import { UseGuards, Req } from '@nestjs/common';
import { Resolver, Query, Args, Mutation, Context } from '@nestjs/graphql';
import { Request } from 'express';

import { UserService } from './user.service';
import { User } from './models/user.entity';
import { GqlAuthGuard } from '../auth/guards/gql-auth.guard';

@Resolver(of => User)
export class UserResolver {
  constructor(private userService: UserService) {}

  @Query(returns => User)
  @UseGuards(GqlAuthGuard)
  whoami(@Req() req: Request) {
    console.info(req);
    return this.userService.findByUsername('aw');
  }
}
Стратегия JWT

import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { AuthService } from './auth.service';
import { JwtPayload } from './interfaces/jwt-payload.interface';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.SECRET,
    });
  }

  async validate(payload: JwtPayload) {
    const user = await this.authService.validateUser(payload);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
Авторизация и создание токенов JWT работает нормально. Защита GraphQL также отлично работает для методов, которым не требуется доступ к пользователю. Но для методов, которым нужен доступ к текущему аутентифицированному пользователю, я не вижу способа его получить.

Есть ли способ сделать что-то подобное?

 20.03.2019 21:38
22
2
16 483
4
Данный вопрос помечен как решенный
 Ответы 4
 Ответ принят как подходящий
Наконец-то нашел ответ... https://github.com/nestjs/graphql/issues/48#issuecomment-420693225 указал мне правильное направление создания пользовательский декоратор

// user.decorator.ts
import { createParamDecorator } from '@nestjs/common';

export const CurrentUser = createParamDecorator(
  (data, req) => req.user,
);
А затем используйте это в моем методе распознавателя:

 import { User as CurrentUser } from './user.decorator';

 @Query(returns => User)
  @UseGuards(GqlAuthGuard)
  whoami(@CurrentUser() user: User) {
    console.info(user);
    return this.userService.findByUsername(user.username);
  }
Теперь все работает как положено. Таким образом, все кредиты этого ответа принадлежат https://github.com/cschroeter.

 20.03.2019 22:21
Другой подход — проверить веб-токен с помощью любого пакета, который вы используете, а затем создать декоратор get-user.decorator.ts

import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';


export const GetUser = createParamDecorator((data, context: ExecutionContext)  => {
 const ctx = GqlExecutionContext.create(context).getContext();
return ctx.user
});
то в вашем распознавателе вы можете использовать этот декоратор (@GetUser() user: User) для доступа к пользователю

 04.07.2020 16:25
Хотел бы я получить здесь какую-либо оценку, я просто передаю информацию из курса NestJS Zero To Hero (кстати, абсолютно фантастический).

Для NestJS 7:

// get-user.decorator.ts

import { createParamDecorator, ExecutionContext } from '@nestjs/common';

import { User } from '../../user/entity/user.entity';

export const GetAuthenticatedUser = createParamDecorator((data, ctx: ExecutionContext): User => {
  const req = ctx.switchToHttp().getRequest();
  return req.user;
});
Вы можете реализовать это, как вам нравится. У меня есть auth.controller, который выглядит примерно так:

// auth.controller.ts

import { GetAuthenticatedUser } from './decarator/get-user.decorator';

...

@Controller('api/v1/auth')
export class AuthController {
  constructor(private authService: AuthService) {
    //
  }

  ...

  /**
   * Get the currently authenticated user.
   *
   * @param user
   */
   @Post('/user')
   @UseGuards(AuthGuard())
   async getAuthenticatedUser(@GetAuthenticatedUser() user: User) {
     console.info('user', user);
   }
Результат примерно такой:

// console.info output:

user User {
  id: 1,
  email: 'email@test.com',
  ...
}
 04.10.2020 17:27
import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';

export const CurrentUser = createParamDecorator(
  (data, context: ExecutionContext) => {
    const ctx = GqlExecutionContext.create(context).getContext();
    return ctx.req.user;
  },
);


Тестирование моделей мангуста с помощью NestJS
Вопросы
NESTJS
Тестирование моделей мангуста с помощью NestJS
Я использую модуль mongoose из NestJS, поэтому у меня есть схема и интерфейс, а в своем сервисе я использую @InjectModel для внедрения своей модели. Я не понимаю, как я могу издеваться над моделью для внедрения в свой сервис.

Мой сервис выглядит так:

    @Injectable()
    export class AuthenticationService {

        constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

        async createUser(dto: CreateUserDto): Promise<User> {
            const model = new this.userModel(dto);
            model.activationToken = this.buildActivationToken();
            return await model.save();
          }
    }
и в моем сервисном тесте у меня есть это:

    const mockMongooseTokens = [
      {
        provide: getModelToken('User'),
        useValue: {},
      },
    ];

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
          providers: [
            ...mockMongooseTokens,
            AuthenticationService,
          ],
        }).compile();

        service = module.get<AuthenticationService>(AuthenticationService);
      });
Но когда я запускаю тест, я получаю эту ошибку:

    TypeError: this.userModel is not a constructor
Я также хотел бы, чтобы моя модель выполняла над ней модульные тесты, как показано в этом статья.

 13.03.2019 14:48
15
1
12 090
4
 Ответы 4
Понимание модели мангуста
Сообщение об ошибке, которое вы получаете, довольно явное: this.userModel действительно не является конструктором, поскольку вы предоставили пустой объект для useValue. Чтобы обеспечить корректную инъекцию, useValue должен быть подклассом mongoose.Model. Сам мангуст гитхаб репозиторий дает последовательное объяснение основной концепции (из строки 63):

 * In Mongoose, the term "Model" refers to subclasses of the `mongoose.Model`
 * class. You should not use the `mongoose.Model` class directly. The
 * [`mongoose.model()`](./api.html#mongoose_Mongoose-model) and
 * [`connection.model()`](./api.html#connection_Connection-model) functions
 * create subclasses of `mongoose.Model` as shown below.
Другими словами, модель мангуста — это класс с несколькими методами, которые пытаются подключиться к базе данных. В нашем случае используется единственный метод модели — save(). Mongoose использует синтаксис функции конструктора javascript, тот же синтаксис можно использовать для написания нашего макета.

TL;DR
Макет должен быть функцией-конструктором с параметром save().

Написание макета
Сервисный тест выглядит следующим образом:

  beforeEach(async () => {
    function mockUserModel(dto: any) {
      this.data = dto;
      this.save  = () => {
        return this.data;
      };
    }

    const module = await Test.createTestingModule({
        providers: [
          AuthenticationService,
          {
            provide: getModelToken('User'),
            useValue: mockUserModel,
          },
        ],
      }).compile();

    authenticationService = module.get<AuthenticationService>(AuthenticationService);
  });
Я также сделал небольшой рефакторинг, чтобы обернуть все в блок beforeEach. Реализация save(), которую я выбрал для своих тестов, представляет собой простую функцию идентификации, но вы можете реализовать ее по-разному, в зависимости от того, как вы хотите утверждать возвращаемое значение createUser().

Ограничения этого решения
Одна из проблем с этим решением заключается именно в том, что вы утверждаете возвращаемое значение функции, но не можете утверждать количество вызовов, поскольку save() не является jest.fn(). Я не смог найти способ использовать module.get для доступа к токену модели за пределами области модуля. Если кто-нибудь найдет способ сделать это, пожалуйста, дайте мне знать.

Другая проблема заключается в том, что экземпляр userModel должен быть создан внутри тестируемого класса. Это проблематично, если вы хотите протестировать findById(), например, поскольку модель не создается, а метод вызывается для коллекции. Обходной путь состоит в добавлении ключевого слова new на уровне useValue:

    const module = await Test.createTestingModule({
        providers: [
          AuthenticationService,
          {
            provide: getModelToken('User'),
            useValue: new mockUserModel(),
          },
        ],
      }).compile();
Еще кое-что...
Синтаксис return await не следует использовать, так как он вызывает ошибку ts-lint (правило: не ждать возврата). См. соответствующий проблема с документом на гитхабе.

 18.06.2019 16:04
в ответ на решение @jbh способ решить проблему отсутствия экземпляра класса при вызове метода, такого как findById(), заключается в использовании статических методов, которые вы можете использовать так

class mockModel {

     constructor(public data?: any) {}

     save() {
         return this.data;
     }

     static findOne({ _id }) {
         return data;
     }
}

mockModel.findOne();
Подробнее о статических методах: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static.

 16.10.2019 15:49
Я знаю, что этот пост старше, но если кто-то снова вернется к этому вопросу в будущем, вот пример того, как настроить издевательскую модель и шпионить за любыми базовыми методами вызова запроса. Мне потребовалось больше времени, чем я хотел, чтобы понять это, но вот полный пример теста, который не требует каких-либо дополнительных заводских функций или чего-то еще.

import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';
import { Model } from 'mongoose';

// User is my class and UserDocument is my typescript type
// ie. export type UserDocument = User & Document; <-- Mongoose Type
import { User, UserDocument } from './models/user.model';
import { UsersRepository } from './users.repository';
import * as CustomScalars from '@common/graphql/scalars/data.scalar';

describe('UsersRepository', () => {
  let mockUserModel: Model<UserDocument>;
  let mockRepository: UsersRepository;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        { 
          provide: getModelToken(User.name), 
          useValue: Model  // <-- Use the Model Class from Mongoose
        },
        UsersRepository,
        ...Object.values(CustomScalars),
      ],
    }).compile();
    // Make sure to use the correct Document Type for the 'module.get' func
    mockUserModel = module.get<Model<UserDocument>>(getModelToken(User.name));
    mockRepository = module.get<UsersRepository>(UsersRepository);
  });

  it('should be defined', () => {
    expect(mockRepository).toBeDefined();
  });

  it('should return a user doc', async () => {
    // arrange
    const user = new User();
    const userID = '12345';
    const spy = jest
      .spyOn(mockUserModel, 'findById') // <- spy on what you want
      .mockResolvedValue(user as UserDocument); // <- Set your resolved value
    // act
    await mockRepository.findOneById(userID);
    // assert
    expect(spy).toBeCalled();
  });
});
 11.04.2021 22:50
beforeAll(async () => {
const app: TestingModule = await Test.createTestingModule({
    controllers: [UserController],
    providers: [
        // THIS IS MOCK FOR OUT TEST-APP, MODULE...
        {
            provide: getModelToken(User.name),
            useValue: {},
        },
        UserService, // SUPPOSE THESE PROVIDERS ALSO NEED OUR USER-MODEL
        HealthService, // SO THEY ARE SIBLINGS FOR OUT USER-MODEL
    ],
    imports: [UserModule],
}) // SO IN THIS PLACE WE MOCK USER-MODEL AGAIN
    .overrideProvider(getModelToken(User.name)) // <-----
    .useValue({}) // <-----
    .compile();
}); введите описание изображения здесь


NestJS TypeORM InjectRepository Не удается прочитать свойство «прототип» неопределенного
Вопросы
TYPESCRIPT
NestJS TypeORM InjectRepository Не удается прочитать свойство «прототип» неопределенного
Попытка юнит-теста. Получил следующую ошибку:

TypeError: Cannot read property 'prototype' of undefined

export class UserService {

constructor(@InjectRepository(User) private readonly userRepository: Repository < User>) { }

спец.ц:

describe('AuthController', () => {
let authController: AuthController;
let authService: AuthService;
let mockRepository = {

};
beforeEach(async () => {
    const module = await Test.createTestingModule({
        imports: [
            TypeOrmModule.forFeature([User]),
        ],
        controllers: [AuthController],
        providers: [AuthService, {
            provide: getRepositoryToken(User),
            useValue: mockRepository
        }]
    }).compile()
    authService = module.get<AuthService>(AuthService);
    authController = module.get<AuthController>(AuthController)
});
Может кто-нибудь поделиться решением, пожалуйста?

БОЛЬШЕ ИНФОРМАЦИИ:

Так что, похоже, что-то не так с typeorm

beforeEach(async () => {
    const module = await Test.createTestingModule({

    }).compile()
    authService = module.get<AuthService>(AuthService);
    authController = module.get<AuthController>(AuthController)
});
С этим кодом я получаю ту же ошибку. Так что единственная проблема заключается в добавлении typeorm к этому тестовому модулю.

Так что это не удается из-за зависимости: AuthController->AuthService->UserService->TypeORM

Кстати, только что проверил UserService с помощью API с Postman, все работает нормально.

До сих пор нет результата:

 module = await Test.createTestingModule({
        controllers: [AuthController],
        components: [
            {
                provide: AuthService,
                useValue: {}
            },
            {
                provide: UserService,
                useValue: {}
            },
            {
                provide: getRepositoryToken(User),
                useValue: {}
            }
        ],
        providers: [
            {
                provide: AuthService,
                useValue: {}
            },
            {
                provide: UserService,
                useValue: {}
            },
            {
                provide: getRepositoryToken(User),
                useValue: {}
            }
        ]
    }).compile()
    this.authController = module.get<AuthController>(AuthController)
Также

class AuthServiceMock {
    logIn(userName) {
        return { id:100, isDeleted:false, login:"login", password:"password"};
    }

    signUp() {
        return { expireIn: 3600, token:"token" };
    }
}

describe('AuthController', () => {
let module: TestingModule;
let authController: AuthController;
let authService: AuthService;

beforeEach(async () => {
    module = await Test.createTestingModule({
        controllers: [AuthController],
        components: [

        ],
        providers: [
            {
                provide: AuthService,
                useClass: AuthServiceMock
            },
        ]
    }).compile()
    this.authController = module.get<AuthController>(AuthController)
});
 05.03.2019 20:05
8
2
11 083
4
Данный вопрос помечен как решенный
 Ответы 4
Я только что передал объект пользователя в репозиторий, и он работает.

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>
    ) { }

}
Ознакомьтесь с документами здесь: https://docs.nestjs.com/techniques/база данных. У них очень хорошие документы.

 05.03.2019 20:57
Когда вы импортируете TypeOrmModule.forFeature(...), вы также должны импортировать TypeOrmModule.forRoot(...). Но в модульном тесте вы, вероятно, не хотите работать со своей базой данных, а вместо этого имитируете все зависимости.

Ваш контроллер не должен напрямую обращаться к базе данных, для чего и нужен сервис. Поэтому, если вы хотите протестировать свой контроллер, а он только внедряет службу, вам следует только объявить макет AuthService и ничего не импортировать:

const module = await Test.createTestingModule({
    controllers: [AuthController],
    providers: [{
        provide: AuthService,
        useValue: authServiceMock
    }]
}).compile()
Если вы хотите протестировать свой AuthService, и он только внедряет репозиторий, объявите свой mockRepository и оставьте все остальное.

 06.03.2019 08:27
 Ответ принят как подходящий
Я посмотрел проект, который вы предоставили в комментарии под Ким Керн (https://github.com/rankery/wof-сервер)

Вы используете файл бочонка (src/user/index.ts), экспортируете UserModule

export * from './user.module';
Я предполагаю, что вы используете этот файл ствола для импорта модуля позже.

Теперь каждый раз при импорте содержимого файла барреля выполняется код, содержащийся в встроенной версии вашего src/user/user.module.ts, который включает оформление класса UserModule, что, в свою очередь, заставит Typeorm попытаться построить репозиторий, что вызывает ошибка.

Вы должны удалить этот экспорт из src/user/index.ts (или просто удалить файл) и исправить сломанный импорт, вызванный этим удалением, и он должен работать.

 04.04.2019 15:57
Я потратил часы, чтобы понять это, и это работает

 async findAll() {
    
    return await this.userRepository.createCursor(this.userRepository.find()).toArray();
  }


Как использовать параметры запроса в Nest.js?
Вопросы
JAVASCRIPT
Как использовать параметры запроса в Nest.js?
Я новичок в Nest.js.

И мой код, как показано ниже

  @Get('findByFilter/:params')
  async findByFilter(@Query() query): Promise<Article[]> {

  }
Я использовал postman для тестирования этого маршрутизатора

http://localhost:3000/article/findByFilter/bug?google=1&baidu=2

Собственно, я могу получить результат запроса { google: '1', baidu: '2' }. Но мне непонятно, почему в URL есть строка 'bug'?

Если я удалю это слово так же, как

http://localhost:3000/article/findByFilter?google=1&baidu=2

тогда почтальон покажет статусCode 404.

На самом деле, мне не нужно слово bug, как настроить роутер так, чтобы он реализовывал мой пункт назначения так же, как http://localhost:3000/article/findByFilter?google=1&baidu=2

Вот еще вопрос, как сделать так, чтобы несколько роутеров указывали на один метод?

 02.03.2019 12:56
42
0
85 966
4
Данный вопрос помечен как решенный
 Ответы 4
 Ответ принят как подходящий
Параметры запроса
Вы должны удалить :params, чтобы он работал должным образом:

@Get('findByFilter')
async findByFilter(@Query() query): Promise<Article[]> {
  // ...
}
Параметры пути
Синтаксис :param предназначен для параметров пути и соответствует любой строке пути:

@Get('products/:id')
getProduct(@Param('id') id) {
соответствует маршрутам

localhost:3000/products/1
localhost:3000/products/2abc
// ...
Подстановочные знаки маршрута
Чтобы сопоставить несколько конечных точек одному и тому же методу, вы можете использовать подстановочные знаки маршрута:

@Get('other|te*st')
будет соответствовать

localhost:3000/other
localhost:3000/test
localhost:3000/te123st
// ...
 03.03.2019 05:01
мы можем использовать @Req()

@Get(':framework')
getData(@Req() request: Request): Object {
    return {...request.params, ...request.query};
}
/гнездо?версия=7

{
    "framework": "nest",
    "version": "7"
}
читать далее

 15.03.2020 01:25
Вы можете использовать декоратор @Req и использовать объект param, см.:

@Get()
  findAll(
    @Req() req: Request
  ): Promise<any[]> {
    console.info(req.query);
    // another code ....
  }
 30.05.2020 21:08
Если у вас есть параметр как часть или URL: /статьи/${articleId}/детали, вы должны использовать @Param

@Get('/articles/:ARTICLE_ID/details')
async getDetails(
    @Param('ARTICLE_ID') articleId: string
)
ЕСЛИ вы хотите предоставить параметры запроса /статья/findByFilter/ошибка?гугл=1&байду=2, вы можете использовать

@Get('/article/findByFilter/bug?')
async find(
    @Query('google') google: number,
    @Query('baidu') baidu: number,
)
Отлично. Спасибо!

— 
rinogo
 23.10.2021 19:57


Выброс NestJS из ExceptionFilter
Вопросы
JAVASCRIPT
Выброс NestJS из ExceptionFilter
Я пытаюсь использовать ExceptionFilter для сопоставления исключений с их аналогом HTTP.

Это мой код:

@Catch(EntityNotFoundError)
export class EntityNotFoundFilter implements ExceptionFilter {
    catch(exception: EntityNotFoundError, _host: ArgumentsHost) {
        throw new NotFoundException(exception.message);
    }
}
Но при выполнении кода фильтра я получил UnhandledPromiseRejectionWarning

 (node:3065) UnhandledPromiseRejectionWarning: Error: [object Object]
    at EntityNotFoundFilter.catch ([...]/errors.ts:32:15)
    at ExceptionsHandler.invokeCustomFilters ([...]/node_modules/@nestjs/core/exceptions/exceptions-handler.js:49:26)
     at ExceptionsHandler.next ([...]/node_modules/@nestjs/core/exceptions/exceptions-handler.js:13:18)
     at [...]/node_modules/@nestjs/core/router/router-proxy.js:12:35
     at <anonymous>
     at process._tickCallback (internal/process/next_tick.js:182:7)
 (node:3065) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). (rejection id: 5)
Как я могу это исправить ?

 01.03.2019 14:44
9
0
15 681
4
Данный вопрос помечен как решенный
 Ответы 4
 Ответ принят как подходящий
ExceptionFilter всегда является последним местом, которое вызывается перед отправкой ответа, оно отвечает за построение ответа. Вы не можете повторно создать исключение из ExceptionFilter.

@Catch(EntityNotFoundError)
export class EntityNotFoundFilter implements ExceptionFilter {
  catch(exception: EntityNotFoundError, host: ArgumentsHost) {
    const response = host.switchToHttp().getResponse();
      response.status(404).json({ message: exception.message });
  }
}
В качестве альтернативы вы можете создать Interceptor, который преобразует ваши ошибки:

@Injectable()
export class NotFoundInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    // next.handle() is an Observable of the controller's result value
    return next.handle()
      .pipe(catchError(error => {
        if (error instanceof EntityNotFoundError) {
          throw new NotFoundException(error.message);
        } else {
          throw error;
        }
      }));
  }
}
Попробуйте в этом кодыпесочница.

 01.03.2019 14:48
На основе решения Кима Керна я создал этот абстрактный класс

export abstract class AbstractErrorInterceptor<T> implements NestInterceptor {
    protected interceptedType: new (...args) => T;

    intercept(
        context: ExecutionContext,
        call$: Observable<any>,
    ): Observable<any> | Promise<Observable<any>> {
        return call$.pipe(
            catchError(exception => {
                if (exception instanceof this.interceptedType) {
                    this.handleError(exception);
                }
                throw exception;
            }),
        );
    }

    abstract handleError(exception: T);
}
И некоторые реализации

export class EntityNotFoundFilter extends AbstractErrorInterceptor<EntityNotFoundError> {
    interceptedType = EntityNotFoundError;

    handleError(exception: EntityNotFoundError) {
        throw new NotFoundException(exception.message);
    }
}
 01.03.2019 16:36
Кажется странным, что вы создаете свою собственную версию классов исключений на основе HTTP, которые уже поставляются с NestJS. По умолчанию они будут автоматически преобразованы в ответы HTTP с правильными кодами ошибок. Вы добавляете накладные расходы с помощью перехватчиков и реализаций абстрактных классов, когда вместо этого вы можете просто выдавать ошибки NestJS и получать их бесплатно. Это встроенный механизм, о котором вы говорили.

throw new BadRequestException('you done goofed');

приводит к:

{"statusCode":400,"error":"Bad Request","message":"you done goofed"}

Codesandbox (адаптировано от Кима)

 01.03.2019 18:42
Ключевым моментом здесь является расширение BaseExceptionFilter и делегирование суперклассу, а не выбрасывание:

import { BaseExceptionFilter } from '@nestjs/core';
// .. your other imports

@Catch(EntityNotFoundError)
export class EntityNotFoundFilter extends BaseExceptionFilter {
    catch(exception: EntityNotFoundError, host: ArgumentsHost) {
        super.catch(new NotFoundException(exception.message, host));
    }
}
Обязательно передайте аргумент applicationRef при создании фильтра во время начальной загрузки приложения, потому что BaseExceptionFilter необходимо, чтобы это свойство работало правильно.

import { HttpAdapterHost } from '@nestjs/core';
// .. your other imports

async function bootstrap(): Promise<void> {
  // .. blah blah
  const { httpAdapter } = app.get(HttpAdapterHost);
  app.useGlobalFilters(new GeneralErrorFilter(httpAdapter));
  // .. blah blah
}
Это приведет к обработке ошибок по умолчанию, которую вы получили бы, если бы вы выдали ту же ошибку.

Мне очень нравится это решение, потому что оно использует NestJS NotFoundException. Но я бы рекомендовал быть осторожным с пересылкой exception.message. В зависимости от вашего запроса вы можете раскрыть больше, чем намеревались. В моем случае я просто отказался от каких-либо подробностей.

— 
KiwiKilian
 12.05.2021 20:45


Сериализация ответов Nestjs с массивом объектов
Вопросы
NODE.JS
Сериализация ответов Nestjs с массивом объектов
Я хочу сериализовать ответ контроллера с помощью метода сериализации nestjs. Я не нашел никакого подхода, и мое решение выглядит следующим образом:

Пользовательская сущность
export type UserRoleType = "admin" | "editor" | "ghost";

@Entity()
export class User {
    @PrimaryGeneratedColumn() id: number;

    @Column('text')
        username: string;
    @Column('text') 
        password: string;
    @Column({
        type: "enum",
        enum: ["admin", "editor", "ghost"],
        default: "ghost"
    })
    roles: UserRoleType;
        @Column({ nullable: true })
                profileId: number;  
}
Классы ответа пользователя
import { Exclude } from 'class-transformer';

export class UserResponse {
    id: number;

    username: string;

    @Exclude()
    roles: string;

    @Exclude()
    password: string;

    @Exclude()
    profileId: number;  

    constructor(partial: Partial<UserResponse>) {
        Object.assign(this, partial);
    }
}

import { Exclude, Type } from 'class-transformer';
import { User } from 'src/_entities/user.entity';
import { UserResponse } from './user.response';

export class UsersResponse {

    @Type(() => UserResponse)
    users: User[]   

    constructor() { }
}
Контроллер
@Controller('user')
export class UsersController {
    constructor(
        private readonly userService: UserService
    ) {

    }
    @UseInterceptors(ClassSerializerInterceptor)
    @Get('all')
    async findAll(
    ): Promise<UsersResponse> {
        let users = await this.userService.findAll().catch(e => { throw new   NotAcceptableException(e) })
        let rsp =new UsersResponse() 
        rsp.users = users
        return rsp
    }
Это работает, но я должен явно назначить результат запроса к базе данных пользователю ответа. Есть ли способ лучше? Большое спасибо

Здесь фактический ответ и желаемый результат для лучшего объяснения.

Результат в этом подходе
{
  "users": [
    {
      "id": 1,
      "username": "a"
    },
    {
      "id": 2,
      "username": "bbbbbb"
    }
  ]
}
Требуемый результат
{
    {
      "id": 1,
      "username": "a"
    },
    {
      "id": 2,
      "username": "bbbbbb"
    }
}
 12.02.2019 15:33
7
1
20 578
4
Данный вопрос помечен как решенный
 Ответы 4
 Ответ принят как подходящий
Я бы порекомендовал напрямую поместить декораторы @Exclude в класс сущностей User вместо того, чтобы дублировать свойства в UserResponse. Следующий ответ предполагает, что вы это сделали.

Плоский ответ
Если вы посмотрите на код ClassSerializerInterceptor, вы увидите, что он автоматически обрабатывает массивы:

return isArray
  ? (response as PlainLiteralObject[]).map(item =>
      this.transformToPlain(item, options),
    )
  : this.transformToPlain(response, options);
Однако он преобразует их только в том случае, если вы вернете массив напрямую, поэтому return users вместо return {users: users}:

@UseInterceptors(ClassSerializerInterceptor)
@Get('all')
async findAll(): Promise<User> {
    return this.userService.findAll()
}
Вложенный ответ
Если вам нужен вложенный ответ, то ваш способ - хорошее решение. В качестве альтернативы вы можете напрямую вызывать serialize class-transformer вместо использования ClassSerializerInterceptor. Он также автоматически обрабатывает массивы:

import { serialize } from 'class-transformer';

@Get('all')
async findAll(): Promise<UsersResponse> {
  const users: User[] = await this.userService.findAll();
  return {users: serialize(users)};
}
 12.02.2019 16:21
Ничего себе, как легко, если я знаю! Отлично, это решает мою проблему. Также ваша рекомендация для User Entity с декоратором class-transformer @Exclue().

И я знаю, что в этом случае мне не нужен пользовательский класс UsersResponse. Это решение было тем, что я искал, но я преодолеваю этот довольно простой способ.

Большое спасибо за ваш сверхбыстрый ответ и решение проблемы.

Привет в Берлин из Ростока :)

Вот мой окончательный подход:

Контроллер
@UseInterceptors(ClassSerializerInterceptor)
@Get('all')
async findAll(
): Promise<User> {
    return await this.userService.findAll().catch(e => { throw new NotAcceptableException(e) })
}
Пользователь
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, OneToMany } from 'typeorm';
import { Profile } from './profile.entity';
import { Photo } from './photo.entity';
import { Album } from './album.entity';
import { Exclude } from 'class-transformer';

export type UserRoleType = "admin" | "editor" | "ghost";

@Entity()
export class User {
    @PrimaryGeneratedColumn() id: number;
    @Column('text')
    username: string;

    @Exclude()
    @Column('text')
    password: string;

    @Column({
        type: "enum",
        enum: ["admin", "editor", "ghost"],
        default: "ghost"
    })
    roles: UserRoleType;

    @Exclude()
    @Column({ nullable: true })
    profileId: number;

    @OneToMany(type => Photo, photo => photo.user)
    photos: Photo[];

    @OneToMany(type => Album, albums => albums.user)
    albums: Album[];

    @OneToOne(type => Profile, profile => profile.user)
    @JoinColumn()
    profile: Profile;
}
Результат ответа
[
  {
    "id": 1,
    "username": "a",
    "roles": "admin"
  },
  {
    "id": 2,
    "username": "bbbbbb",
    "roles": "ghost"
  }
]
 12.02.2019 23:35
У меня есть альтернативный способ решения вашей проблемы. вы можете удалить @UseInterceptors(ClassSerializerInterceptor) из своего Контроллер. Вместо этого используйте функции сериализовать и десериализовать.

import { serialize, deserialize } from 'class-transformer';
import { User } from './users.entity';

@Get('all')
async findAll() {
  const users = serialize(await this.userService.findAll());
  return {
     status: 200,
     message: 'ok',
     users: deserialize(User, users)
  };
}
это тоже работает для одиночных данных

import { Param } from '@nestjs/common';    
import { serialize, deserialize } from 'class-transformer';
import { User } from './users.entity';

@Get(':id')
async findById(@Param('id') id: number) {
  const user = serialize(await this.userService.findById(id));
  return {
    status: 200,
    message: 'ok',
    user: deserialize(User, user)
  };
}
 11.06.2021 19:07
Nestjs рекомендует ваш подход, но у него есть ошибка. Вы исключаете некоторые свойства из показа клиенту. Что, если вы работаете в проекте, в котором есть администратор, и администратор хочет видеть все данные о пользователях или продуктах. Если вы исключите поля в сущностях, ваш администратор также не увидит эти поля. Вместо этого оставьте сущности как есть и напишите dto для каждого контроллера или для каждого обработчика запросов, и в этом dto просто перечислите свойства, которые вы хотите предоставить.

Затем напишите собственный перехватчик и создайте конкретный dto для объекта ecah. Например, в вашем примере вы создаете userDto:

import { Expose } from 'class-transformer';

// this is a serizalization dto
export class UserDto {
  @Expose()
  id: number;
  @Expose()
  roles: UserRoleType;
  @Expose()
  albums: Album[];
 // Basically you list what you wanna expose here
}
пользовательский перехватчик немного запутан:

import {
  UseInterceptors,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { plainToClass } from 'class-transformer';

// Normally user entity goes into the interceptor and nestjs turns it into the JSON. But we we ill turn it to User DTO which will have all the serialization rules.then nest will take dto and turn it to the json and send it back as response


export class SerializerInterceptor implements NestInterceptor {
    // dto is the variable. so you can use this class for different entities
    constructor(private dto:any){

    }
  intercept(context: ExecutionContext, handler: CallHandler): Observable<any> {
   // you can write some code to run before request is handled
    return handler.handle().pipe(
      // data is the incoming user entity
      map((data: any) => {
        return plainToClass(this.dto, data, {
          //   this takes care of everything. this will expose things that are set in the UserDto
          excludeExtraneousValues: true,
        });
      }),
    );
  }
}
Теперь вы используете это в контроллере:

// See we passed UserDto. for different entities, we would just write a new dto for that entity and our custom interceptor would stay reusable
@UseInterceptors(new SerializerInterceptor(UserDto))
@Get('all')
    async findAll(
    ): Promise<UsersResponse> {
        let users = await this.userService.findAll().catch(e => { throw new   NotAcceptableException(e) })
        let rsp =new UsersResponse() 
        rsp.users = users
        return rsp
    }
stackoverflow.com/questions/68744139/… не могли бы вы помочь мне с этой проблемой.. вроде похоже
— 
rickster
 11.08.2021 19:53


Транзакция базы данных nestjs / TypeOrm
Вопросы
NESTJS
Транзакция базы данных nestjs / TypeOrm
Предполагая, что у нас есть 2 сервиса, A и B. Служба A выполняет следующие функции:

Проверить данные
Вызвать сервисную функцию B, которая вносит изменения в базу данных
Сделай еще кое-что
Внести изменения в базу данных
Теперь предположим, что один из следующих шагов 3 или 4 завершился неудачно. Поскольку служба B внесла изменения в базу данных, эти изменения все еще там.

Есть ли способ откатить базу данных в этом случае? Я думал о транзакциях с базой данных, но я не смог найти способ сделать это в nest js, хотя он поддерживается TypeOrm, это не выглядит естественным для вложения. Если нет, то сейчас я «застрял» с изменениями, внесенными службой B, но без изменений должны были произойти изменения в A.

Большое спасибо.

 08.12.2018 08:56
11
0
29 868
4
Данный вопрос помечен как решенный
 Ответы 4
В этом случае вы должны использовать один и тот же менеджер транзакций для обеих операций с базой данных. К сожалению, у меня нет репозитория примеров, но я нашел потенциальное решение с использованием Continuation Local Storage (CLS) в Node:

https://github.com/typeorm/typeorm/issues/1895

Это применимо к Express.js, но вы можете создать экземпляр TransactionManager (например, во вложенном промежуточном программном обеспечении) и сохранить его для каждого контекста запроса. Затем вы сможете повторно использовать этот диспетчер транзакций для вызовов методов службы при условии, что они аннотированы реализацией декоратора @Transaction по ссылке выше.

Если в вашей цепочке функций нет ошибок, диспетчер транзакций зафиксирует все сделанные изменения. В противном случае менеджер откатит любые изменения.

Надеюсь это поможет!

 16.12.2018 21:42
 Ответ принят как подходящий
Доступно множество решений, все они должны основываться на управлении транзакциями SQL.

Лично я считаю, что самый простой способ добиться этого - использовать тот же экземпляр EntityManager, когда вы выполняете код в своей базе данных. Тогда вы можете использовать что-то вроде:

getConnection().transaction(entityManager -> {
    service1.doStuff1(entityManager);
    service2.doStuff2(entityManager);
});
Вы можете создать QueryRunner из экземпляра EntityManager, который будет заключен в ту же транзакцию, если вы выполняете необработанный SQL вне операций ORM. Вам также необходимо создать экземпляры Repository из EntityManager, иначе они будут выполнять код вне основной транзакции.

 28.12.2018 15:03
Вот как я решил это, так как мне нужно было использовать пессимистическую блокировку.

Я считаю, что это "гнездовой" способ делать что-то, так как вы можете просто попросить NestJS внедрить экземпляр Typeorm Connection, и все готово.

@Injectable()
class MyService {
  // 1. Inject the Typeorm Connection
  constructor(@InjectConnection() private connection: Connection) { }

  async findById(id: number): Promise<Thing> {
    return new Promise(resolve => {
      // 2. Do your business logic
      this.connection.transaction(async entityManager => {
        resolve(
          await entityManager.findOne(Thing, id, {
            lock: { mode: 'pessimistic_write' },
          }),
        );
      });
    });
  }
}
Просто поместите любую другую логику, которая вам нужна, в блок .transaction, и все готово.

ЗАМЕТКА: Вы ДОЛЖНЫ использовать entityManager, предоставленный методом .transaction, иначе он не будет работать.

 14.01.2020 15:15
typeorm-транзакционный-cls-подключенный использует CLS (локальное хранилище продолжения) для обработки и распространения транзакций между различными репозиториями и методами обслуживания.

@Injectable()
export class PostService {
  constructor(
    private readonly authorRepository: AuthorRepository,
    private readonly postRepository: PostRepository,
  ) {}

  @Transactional() // will open a transaction if one doesn't already exist
  async createPost(authorUsername: string, message: string): Promise<Post> {
    const author = await this.authorRepository.create({ username: authorUsername });
    return this.postRepository.save({ message, author_id: author.id });
  }
}


Как интегрировать базу данных Neo4j, фреймворк NestJS и GraphQL?
Вопросы
NEO4J
Как интегрировать базу данных Neo4j, фреймворк NestJS и GraphQL?
Я пытаюсь интегрировать свой REST API (NestJS) с новой базой данных Neo4j с запросами GraphQL. Кому-нибудь удастся? заранее спасибо

РЕДАКТИРОВАТЬ 1: (я добавил свой код)

import { Resolver } from "@nestjs/graphql";
import { Query, forwardRef, Inject, Logger } from "@nestjs/common";
import { Neo4jService } from "src/shared/neo4j/neoj4.service";
import { GraphModelService } from "./models/model.service";
import { Movie } from "src/graphql.schema";

@Resolver('Movie')
    export class GraphService {
    constructor(private readonly _neo4jService: Neo4jService) {}

    @Query()
    async getMovie() {
        console.info("hello");
        return neo4jgraphql(/*i don't know how get the query and params*/);
    }
}
 29.11.2018 18:50
2
3
1 279
4
Данный вопрос помечен как решенный
 Ответы 4
Я не работал над GraphQL, но знаю, что есть пакет npm (Neo4j-graphql-js) для перевода запросов GraphQL в запросы Cypher. Это упрощает совместное использование GraphQL и Neo4j.

Также проверьте GRANDstack, это интеграция с полным стеком разработки для создания приложений на основе Graph.

Предлагаю вам посетить Сообщество Neo4j.

 01.12.2018 17:46
 Ответ принят как подходящий
Для этого я использую NestInterceptor:

@Injectable()
export class Neo4JGraphQLInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    const ctx = GqlExecutionContext.create(context);
    return neo4jgraphql(
      ctx.getRoot(),
      ctx.getArgs(),
      ctx.getContext(),
      ctx.getInfo(),
    );
  }
}
Чтобы использовать его в вашем Resolver:

@Resolver('Movie')
@UseInterceptors(Neo4JGraphQLInterceptor)
export class MovieResolver {}
Мой GraphQLModule настроен так:

@Module({
  imports: [
    GraphQLModule.forRoot({
      typePaths: ['./**/*.gql'],
      transformSchema: augmentSchema,
      context: {
        driver: neo4j.driver(
          'bolt://neo:7687',
          neo4j.auth.basic('neo4j', 'password1234'),
        ),
      },
    }),
  ],
  controllers: [...],
  providers: [..., MovieResolver, Neo4JGraphQLInterceptor],
})
Обратите внимание на использование transformSchema: augmentSchema для включения автоматически генерируемых мутаций и запросов (GRANDStack: расширение схемы)

Надеюсь, это немного поможет!

 23.03.2019 22:01
Это то, что у меня работает ... не так элегантно, как хотелось бы, но работает; Я хочу, чтобы только один сервис / провайдер имел доступ к моей базе данных, а не к сервису из каждого модуля, хотя это тоже работает. Поэтому я придерживаюсь формата Nest myModule-> myResolver-> myService -> Neo4jService. Итак, Neo4jService внедряется во все xService (ы). При необходимости я использую neo4jGraphql и augmentSchema и Cypher.

Код:

**appmodule.ts**
....
import { makeExecutableSchema } from 'graphql-tools';
import { v1 as neo4j } from 'neo4j-driver';
import { augmentTypeDefs, augmentSchema  } from 'neo4j-graphql-js';
import { Neo4jService } from './neo4j/neo4j.service';
import { MyModule } from './my/my.module';
import { MyResolver } from './my/my.resolver';
import { MyService } from './my/my.service';
....
import { typeDefs } from './generate-schema';  // SDL type file
...
const driver =  neo4j.driver('bolt://localhost:3000', neo4j.auth.basic('neo4j', 'neo4j'))

const schema = makeExecutableSchema({
  typeDefs: augmentTypeDefs(typeDefs),
 });
const augmentedSchema = augmentSchema(schema);   // Now we have an augmented schema

@Module({
  imports: [
    MyModule,

    GraphQLModule.forRoot({
      schema: augmentedSchema,       
      context: {
      driver,
       },
     }),
    ],
  controllers: [],

  providers: [ Neo4jService,
               myResolver,
             ],
})
export class AppModule {}

**myResolver.ts**

import { Args, Mutation, Query, Resolver  } from '@nestjs/graphql';

import { MyService } from './my.service';

@Resolver('My')
export class MyResolver {

    constructor(
        private readonly myService: MyService) {}

      @Query()
      async getData(object, params, ctx, resolveInfo) {
       return await this.myService.getData(object, params, ctx, resolveInfo);
      }

     *//Notice I am just passing the graphql params, etc to the myService*

}

**myService.ts**

import { Injectable } from '@nestjs/common';
import { Neo4jService } from '../neo4j/neo4j.service';

@Injectable()
export class MyService {

    constructor(private neo4jService: Neo4jService) {}

    async getData(object, params, ctx, resolveInfo) {
        return await this.neo4jService.getData(object, params, ctx, resolveInfo);
   }

     *// Again I am just passing the graphql params, etc to the neo4jService*
 }
**neo4jService.ts**
import { Injectable } from '@nestjs/common';
import { neo4jgraphql } from 'neo4j-graphql-js';


@Injectable()
export class Neo4jService {

        getData(object, params, ctx, resolveInfo) {
              return neo4jgraphql(object, params, ctx, resolveInfo);
            }
     .....
     ......
}
Поэтому в основном я отложил использование neo4jgraphql до тех пор, пока мы не дойдем до neo4jService. Теперь все мои вызовы БД здесь ... как я уже сказал, не элегантно, но работает.

Проблемы: Graphql generate не принимает @relation ... Я обнаружил, что были внесены изменения, и теперь вам нужен augmentTypeDefs. ...надеюсь это поможет РЕДАКТИРОВАТЬ Nestjs ужасно долго обрабатывает augmentSchema ... поэтому я бы рекомендовал пропустить его ... пока

 04.11.2019 00:31
Вот пример, который я создал для (NestJS + GraphQL + Neo4j). Надеюсь, это поможет!

NestJS + GraphQL + Neo4j

С декораторами это довольно легко читать и реализовывать! Спасибо

— 
gonzalo
 13.12.2019 10:04


Получение данных пользователя с помощью охранников (роли, JWT)
Вопросы
JAVASCRIPT
Получение данных пользователя с помощью охранников (роли, JWT)
Документация здесь довольно тонкая, поэтому я столкнулся с проблемой. Я пытаюсь использовать Guards для защиты контроллера или его действий, поэтому я буду запрашивать роль аутентифицированных запросов (от JWT). В моем auth.guard.ts я прошу «request.user», но он пуст, поэтому я не могу проверить роль пользователя. Я не знаю, как определить request.user. Вот мой модуль аутентификации и импорт.

auth.controller.ts

import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { RolesGuard } from './auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('token')
  async createToken(): Promise<any> {
    return await this.authService.signIn();
  }

  @Get('data')
  @UseGuards(RolesGuard)
  findAll() {
    return { message: 'authed!' };
  }
}
роли.guard.ts

Здесь user.request пуст, потому что я его никогда не определяю. В документации не указано, как и где.

import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const roles = this.reflector.get<string[]>('roles', context.getHandler());
    if (!roles) {
      return true;
    }
    const request = context.switchToHttp().getRequest();
    const user = request.user; // it's undefined
    const hasRole = () =>
      user.roles.some(role => !!roles.find(item => item === role));
    return user && user.roles && hasRole();
  }
}
auth.module.ts

import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { HttpStrategy } from './http.strategy';
import { UserModule } from './../user/user.module';
import { AuthController } from './auth.controller';
import { JwtStrategy } from './jwt.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secretOrPrivateKey: 'secretKey',
      signOptions: {
        expiresIn: 3600,
      },
    }),
    UserModule,
  ],
  providers: [AuthService, HttpStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
auth.service.ts

import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async signIn(): Promise<object> {
    // In the real-world app you shouldn't expose this method publicly
    // instead, return a token once you verify user credentials
    const user: any = { email: 'user@email.com' };
    const token: string = this.jwtService.sign(user);
    return { token };
  }

  async validateUser(payload: any): Promise<any> {
    // Validate if token passed along with HTTP request
    // is associated with any registered account in the database
    return await this.userService.findOneByEmail(payload.email);
  }
}
jwt.strategy.ts

import { ExtractJwt, Strategy } from 'passport-jwt';
import { AuthService } from './auth.service';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'secretKey',
    });
  }

  async validate(payload: any) {
    const user = await this.authService.validateUser(payload);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
Документация: https://docs.nestjs.com/guards

Спасибо за любую помощь.

 22.11.2018 08:44
21
0
15 707
4
Данный вопрос помечен как решенный
 Ответы 4
Работает ли при использовании req.authInfo?

Пока вы не предоставляете настраиваемый обратный вызов методу Passport.authenticate, пользовательские данные должны быть прикреплены к объекту запроса следующим образом.

req.authInfo должен быть объектом, который вы вернули в своем методе validate.

 22.11.2018 10:06
 Ответ принят как подходящий
В дополнение к вашему RolesGuard вам необходимо использовать AuthGuard.

Стандарт
Вы можете использовать стандартную реализацию AuthGuard, которая присоединяет пользовательский объект к запросу. Он выдает ошибку 401, когда пользователь не аутентифицирован.

@UseGuards(AuthGuard('jwt'))
Расширение
Если вам нужно написать собственную защиту, потому что вам нужно другое поведение, расширьте исходный AuthGuard и переопределите методы, которые вам нужно изменить (handleRequest в примере):

@Injectable()
export class MyAuthGuard extends AuthGuard('jwt') {

  handleRequest(err, user, info: Error) {
    // don't throw 401 error when unauthenticated
    return user;
  }

}
Зачем это делать?
Если вы посмотрите на исходный кодAuthGuard, вы увидите, что он присоединяет пользователя к запросу в качестве обратного вызова к методу паспорта. Если вы не хотите использовать / расширять AuthGuard, вам придется реализовать / скопировать соответствующие части.

const user = await passportFn(
  type || this.options.defaultStrategy,
  options,
  // This is the callback passed to passport. handleRequest returns the user.
  (err, info, user) => this.handleRequest(err, info, user)
);
// Then the user object is attached to the request
// under the default property 'user' which you can change by configuration.
request[options.property || defaultOptions.property] = user;
 22.11.2018 12:17
Вы можете соединить несколько охранников вместе (@UseGuards (AuthGuard ('jwt'), RolesGuard)) для передачи контекста между ними. Тогда у вас будет доступ к объекту req.user внутри RolesGuard.

 26.12.2019 09:02
После того, как выбранный ответ заработал (спасибо), я нашел и эту опцию, которую вы можете добавить в конструктор, который, по сути, делает то же самое.

http://www.passportjs.org/docs/authorize/

Association in Verify Callback

One downside to the approach described above is that it requires two instances of the same strategy and supporting routes.

To avoid this, set the strategy's passReqToCallback option to true. With this option enabled, req will be passed as the first argument to the verify callback.

    @Injectable()
    export class LocalStrategy extends PassportStrategy(Strategy, 'local') {
    
        constructor(private authService: AuthService) {
            super({
                passReqToCallback: true
            })
        }

        // rest of the strategy (validate)
    }


@ Получить DTO с несколькими параметрами в NestJs
Вопросы
NESTJS
@ Получить DTO с несколькими параметрами в NestJs
Я пытаюсь создать действие контроллера в NestJS, доступное через HTTP-запрос GET, который получает два параметра, но по какой-то причине они не определены.

Как это исправить?

@Get('/login')
login(@Param() params: LoginUserDto) {
  console.info(params)
  return 'OK'
}
import { ApiModelProperty } from '@nestjs/swagger';

export class LoginUserDto {
  @ApiModelProperty()
  readonly userName: string;

  @ApiModelProperty()
  readonly password: string;
}
 22.11.2018 01:46
10
0
16 623
4
 Ответы 4
Nest не поддерживает возможность автоматического преобразования параметров запроса Get в объект таким способом. Ожидается, что вы извлечете параметры по отдельности, передав имя параметра декоратору @Param.

Попробуйте изменить свою подпись на:

login(@Param('userName') userName: string, @Param('password') password: string)
Если вы хотите получить объект, вместо этого рассмотрите возможность перехода на использование Post и передачи объекта в теле запроса (что в любом случае имеет для меня больше смысла для действия входа в систему).

 22.11.2018 03:10
В браузере

localhost:3001/Products/v1/user2
Контроллер вроде этого:

@Controller('Products')
export class CrashesController {
  constructor(private readonly crashesService: CrashesService) { }

  @Get('/:version/:user')
  async findVersionUser(@Param('version') version: string, @Param('user') user: string): Promise<Crash[]> {
    return this.crashesService.findVersionUser(version, user);
  }
}
 26.07.2019 18:05
Прямо сейчас я использую nestJs на 7.0.0, и если вы сделаете это:

@Get('/paramsTest3/:number/:name/:age')
  getIdTest3(@Param() params:number): string{
    console.info(params);
    return this.appService.getMultipleParams(params);
  }
результат console.info (params) будет (значения являются только примерами):

{ number:11, name: thiago, age: 23 }
Я надеюсь, что спустя столько времени я был вам чем-то полезен!

 04.10.2020 02:20
Допустим, вам нужно передать один обязательный параметр с именем id, вы можете отправить его через header params, а дополнительные параметры можно отправить через query params;

 @Get('/:id')
  findAll(
    @Param('id') patientId: string,
    @Query() filter: string,
  ): string {
    console.info(id);
    console.info(filter);

    return 'Get all samples';
  }

Горячая перезагрузка фреймворка Nest.js не работает
Вопросы
NODE.JS
Горячая перезагрузка фреймворка Nest.js не работает
Я выполнил шаги документации:

https://docs.nestjs.com/techniques/hot-reload

Я запускаю эту команду: npm run webpack, но она закрывается, возвращает мне приглашение и не продолжает смотреть файлы:

    gabriel@roraima-tv:/var/www/studying/tera-ping-pong$ npm run webpack

    > tera-ping-pong@0.0.0 webpack /var/www/studying/tera-ping-pong
    > webpack --config webpack.config.js


    webpack is watching the files…

    Hash: 6e13d56ba7d77331e5c2
    Version: webpack 4.23.1
    Time: 3014ms
    Built at: 11/01/2018 1:39:11 PM
                       Asset       Size  Chunks             Chunk         Names
    dist/app.controller.d.ts  177 bytes          [emitted]  
        dist/app.module.d.ts   35 bytes          [emitted]  
       dist/app.service.d.ts   56 bytes          [emitted]  
              dist/main.d.ts   11 bytes          [emitted]  
          dist/main.hmr.d.ts   11 bytes          [emitted]  
                   server.js     39 KiB    main  [emitted]  main
    Entrypoint main = server.js
    [0] multi webpack/hot/poll?1000 ./src/main.hmr.ts 40 bytes {main}         [built]
    [./node_modules/webpack/hot/log-apply-result.js]         (webpack)/hot/log-apply-result.js 1.27 KiB {main} [built]
    [./node_modules/webpack/hot/log.js] (webpack)/hot/log.js 1.11 KiB         {main} [built]
    [./node_modules/webpack/hot/poll.js?1000] (webpack)/hot/poll.js?        1000 1.15 KiB {main} [built]
    [./src/app.controller.ts] 1.44 KiB {main} [built]
    [./src/app.module.ts] 1.03 KiB {main} [built]
    [./src/app.service.ts] 883 bytes {main} [built]
    [./src/main.hmr.ts] 1.07 KiB {main} [built]
    [@nestjs/common] external "@nestjs/common" 42 bytes {main} [built]
    [@nestjs/core] external "@nestjs/core" 42 bytes {main} [built]
    gabriel@roraima-tv:/var/www/studying/tera-ping-pong$ 
Поэтому всякий раз, когда я добавляю свои файлы * .ts, они меняются и не перезагружаются, пока сервер не перезагрузится.

 01.11.2018 20:12
2
1
2 967
4
Данный вопрос помечен как решенный
 Ответы 4
 Ответ принят как подходящий
Сначала установите необходимые пакеты:

npm i --save-dev webpack-node-externals start-server-webpack-plugin
После завершения установки создайте файл webpack-hmr.config.js в корневом каталоге вашего приложения.

 const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const StartServerPlugin = require('start-server-webpack-plugin');

module.exports = function(options) {
  return {
    ...options,
    entry: ['webpack/hot/poll?100', options.entry],
    watch: true,
    externals: [
      nodeExternals({
        allowlist: ['webpack/hot/poll?100'],
      }),
    ],
    plugins: [
      ...options.plugins,
      new webpack.HotModuleReplacementPlugin(),
      new webpack.WatchIgnorePlugin([/\.js$/, /\.d\.ts$/]),
      new StartServerPlugin({ name: options.output.filename }),
    ],
  };
};
Чтобы включить HMR, откройте файл входа приложения (main.ts) и добавьте следующие инструкции, связанные с веб-пакетом:

declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
 15.11.2020 23:25
вы можете просто использовать эту команду в CLI, она по умолчанию:

npm run start:dev
 31.07.2021 21:00
проблема в том, что вы использовали

npm start
только вместо

npm start:dev
который запускает сервер в режиме наблюдения:



 21.08.2021 17:11
Вы можете запустить nest в режиме просмотра

nest start --watch
Это должен быть принятый ответ !!

— 
ismaestro
 12.11.2021 13:43


Модуль nest.js swagger - объект в dto не отображается в swagger
Вопросы
SWAGGER
Модуль nest.js swagger - объект в dto не отображается в swagger
Я реализую небольшое приложение во вложении js с помощью swagger, у меня есть один столбец (postgresql) как объект json (простой тип json в typeorm), а вложенный объект не отображается в swagger. Мой код для этого:

@ApiModelProperty()
@IsOptional()
  readonly foo: {
  boo: string[];
  boo2: string;
  boo3: string;
  ..etc
 };
в swagger у меня есть только foo, видимый с пустым объектом, возможно ли с помощью модуля swagger nest js сделать видимым весь объект json?

спасибо заранее Кароль

 28.10.2018 16:13
1
1
3 273
4
 Ответы 4
Используйте явный тип

export interface Foo {
  boo: string[];
  boo2: string;
  boo3: string;
  ..etc
}
а также

@ApiModelPropertyOptional({ type: Foo })
@IsOptional()
readonly foo: Foo;
 31.10.2018 13:37
Не создавайте / не используйте интерфейс, создайте subDto (используйте экспорт или нет, если хотите), например:

export class SubDto {
    @ApiModelProperty({ type: String })
    @IsString()
    readonly subStringOne: string;

    @ApiModelProperty({ type: String })
    @IsString()
    readonly subStrinTwo: string;
}

export class MainDto {

    @ApiModelProperty({ type: String })
    @IsString()
    readonly mainStringOne: string;

    @ApiModelProperty({ type: [SubDto] })
    @IsArray()
    readonly mainArray: SubDto[];

    // or do the same thing for objects
    @ApiModelProperty({ type: SubDto })
    @IsJSON() // @IsOject doesn't exist in Nestjs so I use @IsJSON().
    readonly mainObject: SubDto;
}
 31.07.2019 15:11
Вместо этого используйте класс

Пример:

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsArray, IsNotEmpty, IsString } from 'class-validator';
import { Type } from 'class-transformer';

export class StickerRequest {

    @IsNotEmpty()
    @IsString()
    @ApiProperty({ example: 'sticker 01' })
    readonly name: string;

    @ApiPropertyOptional({ example: 'This is sticker description' })
    readonly description?: string;

    @ApiPropertyOptional({ example: 'ami-01, ami-02' })
    readonly tags?: string;

}

export class CollectionRequest {

  @ApiProperty({ example: 'Ami' })
  @IsNotEmpty()
  @IsString()
  readonly collectionName: string;

  @ApiPropertyOptional({ example: 'This is collection description' })
  readonly description?: string;

  @ApiProperty({ example: 'fffa73e4efca9245489e2bac' })
  @IsNotEmpty()
  @IsString()
  readonly author: string;

  @ApiProperty({ type: StickerRequest })
  @IsNotEmpty()
  @IsArray()
  @Type(() => StickerRequest)
  stickers: StickerRequest[];

}
 08.05.2020 11:02
Я считаю, что вы используете старую версию nestjs, поскольку @ApiModelProperty теперь называется @ApiProperty. Я предлагаю вам обновить nestjs и swagger до последних версий и выполнить следующие шаги, которые у меня сработали довольно хорошо:

https://docs.nestjs.com/recipes/swagger#openapi-swagger

надеюсь, это поможет.


Что такое допустимый @MessagePattern для микросервиса NestJS MQTT?
Вопросы
NODE.JS
Что такое допустимый @MessagePattern для микросервиса NestJS MQTT?
Я пытаюсь настроить микросервис MQTT с помощью NestJS в соответствии с документы.

Я запустил рабочий Mosquitto Broker с помощью Docker и проверил его работоспособность с помощью различных клиентов MQTT. Теперь, когда я запускаю службу NestJS, кажется, что она подключается правильно (mqqt.fx показывает новый клиент), но я не могу получать сообщения на своих контроллерах. Это моя начальная загрузка, как в документации:

main.ts

async function bootstrap() {
    const app = await NestFactory.createMicroservice(AppModule, {
        transport: Transport.MQTT,
        options: {
            host: 'localhost',
            port: 1883,
            protocol: 'tcp'
        }
    });
    app.listen(() => console.info('Microservice is listening'));
}
bootstrap();
app.controller.ts

@Controller()
export class AppController {

    @MessagePattern('mytopic') // tried {cmd:'mytopic'} or {topic:'mytopic'}
    root(msg: Buffer) {
        console.info('received: ', msg)
    }
}
Я неправильно использую декоратор шаблонов сообщений или я ошибаюсь в том, что микросервис NestJS MQTT должен делать? Я подумал, что он может подписаться на тему, которую я передаю декоратору. Мой единственный другой источник информации - соответствующий модульные тесты

 24.10.2018 10:18
5
1
6 569
4
Данный вопрос помечен как решенный
 Ответы 4
Документация не очень ясна, но кажется, что для mqtt, если у вас есть @MessagePattern('mytopic'), вы можете опубликовать команду в теме mytopic_ack, и вы получите ответ на mytopic_res. Я все еще пытаюсь выяснить, как опубликовать в брокере mqtt из службы.

См. https://github.com/nestjs/nest/blob/e019afa472c432ffe9e7330dc786539221652412/packages/microservices/server/server-mqtt.ts#L99

  public getAckQueueName(pattern: string): string {
    return `${pattern}_ack`;
  }

  public getResQueueName(pattern: string): string {
    return `${pattern}_res`;
  }
 20.01.2019 14:51
 Ответ принят как подходящий
Обработчик паттернов nest.js
На стороне nest.js есть следующий обработчик паттернов:

@MessagePattern('sum')
sum(data: number[]): number {
  return data.reduce((a, b) => a + b, 0);
}
Как объяснил @Alexandre, это будет фактически слушать sum_ack.

Клиент, отличный от nest.js
Клиент, отличный от nest.js, может выглядеть так (просто сохраните как client.js, запустите npm install mqtt и запустите программу с node client.js):

var mqtt = require('mqtt')
var client  = mqtt.connect('mqtt://localhost:1883')

client.on('connect', function () {
  client.subscribe('sum_res', function (err) {
    if (!err) {
      client.publish('sum_ack', '{"data": [2, 3]}');
    }
  })
})

client.on('message', function (topic, message) {
  console.info(message.toString())
  client.end()
})
Он отправляет сообщение по теме sum_ack и слушает сообщения по sum_res. Когда он получает сообщение на sum_res, он регистрирует сообщение и завершает программу. nest.js ожидает, что формат сообщения будет {data: myData}, а затем вызывает обработчик параметров sum(myData).

// Log:
{"err":null,"response":5} // This is the response from sum()
{"isDisposed":true} // Internal "complete event" (according to unit test)
Конечно, это не очень удобно ...

Клиент nest.js
Это потому, что он предназначен для использования с другим клиентом nest.js, а не с обычным клиентом mqtt. Клиент nest.js абстрагирует всю внутреннюю логику. См. этот ответ, в котором описывается клиент для redis (для mqtt нужно изменить только две строки).

async onModuleInit() {
  await this.client.connect();
  // no 'sum_ack' or {data: [0, 2, 3]} needed
  this.client.send('sum', [0, 2, 3]).toPromise();
}
 21.01.2019 17:42
Сегодня я боролся с MQTT, и это мне немного помогло, но у меня было больше проблем, и ниже вы можете увидеть мои выводы:

Неправильный способ настройки URL-адреса брокера
В моем случае, когда я использовал нелокальный сервер MQTT, я начал с этого:

  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.MQTT,
    options: {
      host: 'test.mosquitto.org',
      port: 1883,
      protocol: 'tcp',
    },
  });
  await app.listenAsync();
но, как вы можете читать в конструктор ServerMqtt, они используют только опцию url (если она не предоставлена, это откат к 'mqtt://localhost:1883'. Хотя у меня нет локального MQTT, он никогда не разрешит app.listenAsync(), который разрешен только на соединять, а также не будет запускать никакой обработчик.

Это начало работать, когда я настроил код для использования опции url.
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.MQTT,
    options: {
      url: 'mqtt://test.mosquitto.org:1883',
    },
  });
  await app.listenAsync();
Сообщения требуют свойства id
Вторая очень странная проблема заключалась в том, что когда я использовал сценарий Клиент, отличный от nest.js из @KimKern, мне пришлось зарегистрировать два шаблона сообщений: sum и sum_ack:

  @MessagePattern('sum')
  sum(data: number[]): number {
    return data.reduce((a, b) => a + b, 0);
  }

  @MessagePattern('sum_ack')
  sumAck(data: number[]): number {
    return data.reduce((a, b) => a + b, 0);
  }
Когда я использовал console.info, я обнаружил, что последний запускается, но только когда присутствует первый. Вы можете отправить то же сообщение брокеру, используя инструмент mqtt cli, чтобы проверить его:

mqtt pub -t 'sum_ack' -h 'test.mosquitto.org' -m '{"data":[1,2]}'

Но самая большая проблема заключалась в том, что это не ответил (опубликовать sum_res).

Решением было предоставить также id при отправке сообщения.
mqtt pub -t 'sum_ack' -h 'test.mosquitto.org' -m '{"data":[1,2], "id":"any-id"}'

Затем мы могли бы удалить MessagePattern 'sum_ack' и оставить только этот код:

  @MessagePattern('sum')
  sum(data: number[]): number {
    return data.reduce((a, b) => a + b, 0);
  }
Причина этого была скрыта внутри метода handleMessage ServerMqtt, который не будет отвечать публиковать от обработчика, если сообщение не имеет id.

TL / DR Указывайте URL-адрес брокера сообщений, используя только опцию url, и всегда предоставляйте id для сообщения.

Я надеюсь, что это сэкономит время другим.

Удачного взлома!

 21.07.2019 23:54
@ Танас прав. Nestjs / Microservice теперь слушает ваш $ [topic] и отвечает на $ [topic] / reply. Постфиксные _ack и _res устарели.

Например:

  @MessagePattern('helloWorld')
  getHello(): string {
    console.info("hello world")
    return this.appService.getHello();
  }
Слушает сейчас в теме: Привет, мир
Сейчас отвечает на тему helloWorld / ответ

Что касается ID

Вы должен также предоставляете идентификатор в полезной нагрузке (см. @Hakier), и Nestjs ответит ответом, содержащим ваш идентификатор. Если у вас нет идентификатора, ответа все равно не будет, но соответствующая логика все равно сработает.

Например (используя фрагмент сверху):
ваше сообщение:

{"data":"foo","id":"bar"}
Ответ Nestjs:

{"response":"Hello World!","isDisposed":true,"id":"bar"}
Без ID:

твое сообщение:

{"data":"foo"} or {}
Без ответа, но Привет, мир в Терминале


NestJS authGuard dosent работает
Вопросы
JAVASCRIPT
NestJS authGuard dosent работает
Я реализую @nestjs/passport ('jwt') и использую (точно так же, как в инструкциях) декоратор @UseGuards(AuthGuard()), но получаю следующее исключение:

common_1.Optional is not a function

Кто-нибудь знает, в чем может быть проблема?

Зависимости:

"@nestjs/common": "^5.0.0",

"@nestjs/core": "^5.0.0",
"@nestjs/cqrs": "^5.1.1",
"@nestjs/jwt": "^0.2.0",
"@nestjs/mongoose": "^5.1.0",
"@nestjs/passport": "^5.1.0",
"@nestjs/swagger": "^2.4.4",
"@nestjs/typeorm": "^5.2.2",
"automapper-ts": "^1.9.0",
"config": "^2.0.1",
"fastify-formbody": "^2.0.0",
"lodash": "^4.17.10",
"mongodb": "^3.1.6",
"mongoose": "^5.2.9",
"mysql": "^2.16.0",
"nestjs-rmq": "^0.1.3",
"nestjs-typegoose": "^5.0.1",
"passport": "^0.4.0",
"passport-jwt": "^4.0.0",
"reflect-metadata": "^0.1.12",
"rxjs": "^6.0.0",
"typegoose": "^5.4.0",
"typeorm": "^0.2.7",
"typescript": "^2.6.2",
 21.10.2018 14:57
1
5
1 110
4
 Ответы 4
Зависимости устарели. Попробуйте запустить npm update.

 21.10.2018 17:58
Возможно, я плохо понимаю вопрос, но чтобы использовать охранник, вы можете предоставить экземпляр охранника или предоставить класс и позволить nest создать экземпляр, охранник ** не функция *

@UseGuards (AuthGuard ()) должен быть: @UseGuards (новый AuthGuard ()) или @UseGuards (AuthGuard)

 17.07.2019 22:08
Похоже, вы используете старые зависимости.

установить npm g npm-check

ЗАПУСТИТЬ npm-check -u

https://www.npmjs.com/package/npm-check

 03.08.2020 05:27
проблема зависимостей

попробуй это :

$ sudo npm install -g npm-check

$ npm-check -u


Nest.js - объект запроса слишком большой PayloadTooLargeError: объект запроса слишком большой
Вопросы
JAVASCRIPT
Nest.js - объект запроса слишком большой PayloadTooLargeError: объект запроса слишком большой
Я пытаюсь сохранить JSON на сервере Nest.js, но сервер вылетает, когда я пытаюсь это сделать, и это проблема, которую я вижу в console.info:

[Nest] 1976 - 2018-10-12 09:52:04 [ExceptionsHandler] request entity too large PayloadTooLargeError: request entity too large

Во-первых, размер запроса JSON составляет 1095922 байта. Кто-нибудь знает, как в Nest.js увеличить размер действительного запроса? Спасибо!

 12.10.2018 18:54
31
0
21 989
4
Данный вопрос помечен как решенный
 Ответы 4
 Ответ принят как подходящий
Я нашел решение, так как эта проблема связана с экспрессом (Nest.js использует экспресс за сценой), я нашел решение в этом потоке Ошибка: объект запроса слишком большой, Что я сделал, так это изменил файл main.ts, добавив зависимость body-parser и добавив некоторую новую конфигурацию для увеличения размера запроса JSON, затем я использую экземпляр app, доступный в файле, чтобы применить эти изменения.

import { NestFactory } from '@nestjs/core';
import * as bodyParser from 'body-parser';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useStaticAssets(`${__dirname}/public`);
  // the next two lines did the trick
  app.use(bodyParser.json({limit: '50mb'}));
  app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
  app.enableCors();
  await app.listen(3001);
}
bootstrap();
 12.10.2018 21:16
Решением для меня было увеличение bodyLimit. Источник: https://www.fastify.io/docs/latest/Server/#bodylimit

const app = await NestFactory.create<NestFastifyApplication>(
AppModule,
new FastifyAdapter({ bodyLimit: 10048576 }),
 22.01.2020 22:49
вы также можете импортировать urlencoded и json из экспресс

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { urlencoded, json } from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.use(json({ limit: '50mb' }));
  app.use(urlencoded({ extended: true, limit: '50mb' }));
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
 30.01.2020 02:58
Предел по умолчанию, определенный парсером тела, составляет 100 КБ: https://github.com/expressjs/body-parser/blob/0632e2f378d53579b6b2e4402258f4406e62ac6f/lib/types/json.js#L53-L55

Надеюсь это поможет :)

Мне это помогло, и я установил 100 КБ на 50 МБ


Как использовать службу ведения журнала nestjs
Вопросы
JAVASCRIPT
Как использовать службу ведения журнала nestjs
Я пробовал использовать внутренний Logger nestjs (описан на https://docs.nestjs.com/techniques/logger ->, но без описания того, как его использовать)

Но у меня возникли проблемы (пробовал заколоть LoggerService и тд)

Кто-нибудь может объяснить, как это сделать?

 04.10.2018 17:51
44
1
53 415
4
 Ответы 4
Ответ прост. В классе Logger есть статические методы.

например

static log(message: string, context = '', isTimeDiffEnabled = true) 
Использование:

Logger.log('Only a test');
 05.10.2018 07:10
Лучшая практика
Лучше, чем статический доступ к Logger, - это создать экземпляр для вашего класса:

@Controller()
export class AppController {
  private readonly logger = new Logger(AppController.name);

  @Get()
  async get() {
    this.logger.log('Getting stuff');
  }
}
Почему так лучше?
Вы можете предоставить контекст в конструкторе, например new Logger(AppController.name), чтобы имя класса (или что-то еще) было частью всех сообщений журнала в этом классе.

Если вы в какой-то момент захотите расширить или заменить LoggerService по умолчанию, вам не нужно изменять какой-либо код вашего приложения, кроме установки нового регистратора. Ваш новый регистратор будет использован автоматически. Если вы обращаетесь к нему статически, он продолжит использовать реализацию по умолчанию.

const app = await NestFactory.create(AppModule, {logger: new MyLogger()});
Вы можете издеваться над Logger в своих тестах:
module.useLogger(new NoOpLogger());
 20.10.2018 18:21
Сначала вам нужно импортировать в свой класс:

import { Logger } from '@nestjs/common';
а затем вы можете начать с регистрации:

Logger.log('info')
Logger.warn('warning')
Logger.error('something went wrong! ', error)
 13.11.2018 14:46
Этот ответ может быть полезен для других, кто пытается использовать реализацию CustomLogger. Я пытаюсь показать образец реализации настраиваемого регистратора и то, как его можно внедрить в структуру Nestjs.

Я понимаю, что Nestjs по своей сути использует пино-логгер. Это просто кастомная реализация службы логгера (которую можно заменить на bunyan, winston и т. д.) Вот структура папок, которую я использую:

> src /  
>   modules /
>      database /
>        ...
>        database.module.ts
>      api /
>        services /
>        controllers /
>        interceptors /
>        middlewares /
>        models /
>        schemas /
>      shared /
>        services /
>           app.util.service.ts
>           pino.logger.service.ts
>        utils / 
>        interceptors /
>        filters /
>        main.ts    
>        app.controller.ts    
>        app.service.ts
>        server.util.service.ts 
В этом его суть. Итак, сервис логгера реализован следующим образом

import {Injectable, LoggerService, Scope} from "@nestjs/common";
import * as pino from 'pino';
import {AppUtilService} from "./app.util.service";
import * as os from "os";
import {APP_LOG_REDACT, APP_MESSAGE_KEY} from "../utils/app.constants";

    @Injectable({
        scope: Scope.DEFAULT
    })
    export class PinoLoggerService implements LoggerService{
        constructor(private appUtilService: AppUtilService) {

        }

        logService = (fileNameString): pino.Logger => {
            return pino({
                useLevelLabels: true,
                prettyPrint: this.appUtilService.isDevEnv(),
                // tslint:disable-next-line: object-literal-sort-keys
                messageKey: APP_MESSAGE_KEY,
                level: this.appUtilService.getLogLevel(),
                redact: {
                    paths: APP_LOG_REDACT,
                    censor: '**SECRET-INFO**'
                },
                base: {
                    hostName: os.hostname(),
                    platform: os.platform(),
                    processId: process.pid,
                    timestamp: this.appUtilService.getCurrentLocaleTimeZone(),
                    // tslint:disable-next-line: object-literal-sort-keys
                    fileName: this.appUtilService.getFileName(fileNameString),
                },
            });
        }

        debug(message: any, context?: string): any {
        }

        error(message: any, trace?: string, context?: string): any {
        }

        log(message: any, context?: string): any {
        }

        warn(message: any, context?: string): any {
        }

    }
Пользовательская реализация реализована с моими конкретными параметрами в pinojs github Я использую fastifyjs вместо экспресс (опять же, чтобы соответствовать моим потребностям в проекте). Итак, я добавил регистратор в параметры сервера fastify js. Если вы используете экспресс, лучше указать новую настраиваемую реализацию в адаптере приложения Nest, как указано выше.

Моя служебная служба, которая заботится о реализации сервера fastify

import * as fastify from "fastify";
import {Http2Server, Http2ServerRequest, Http2ServerResponse} from "http2";
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";
import * as fs from "fs";
import * as path from "path";
import * as uuid from "uuid";
import * as qs from "query-string";
import {PinoLoggerService} from "./modules/shared/services/pino.logger.service";
import {AppUtilService} from "./modules/shared/services/app.util.service";
import {AppConstantsService} from "./modules/shared/services/app.constants.service";
import {AppModel} from "./modules/shared/model/app.model";
import {Reflector} from "@nestjs/core";
export class ServerUtilService {
    private logService;
    private appConstantsService;
    private appUtilServiceInstance: AppUtilService;
    private fastifyInstance: fastify.FastifyInstance<Http2Server, Http2ServerRequest, Http2ServerResponse>;
    constructor() {
        this.appUtilServiceInstance = new AppUtilService();
        this.logService = new PinoLoggerService(this.appUtilServiceInstance);
        this.appConstantsService = new AppConstantsService(this.appUtilServiceInstance);
    }

    retrieveAppConstants(): AppModel {
        return this.appConstantsService.getServerConstants();
    }

    retrieveAppUtilService(): AppUtilService {
        return this.appConstantsService;
    }
    createFastifyServerInstance = (): fastify.FastifyInstance<Http2Server, Http2ServerRequest, Http2ServerResponse> => {
        const serverConstants = this.appConstantsService.getServerConstants();
        const httpsOptions = {
            cert: fs.readFileSync(path.join(process.cwd() + '/https-keys/cert.pem')),
            key: fs.readFileSync(path.join(process.cwd() + '/https-keys/key.pem')),

            allowHTTP1: true,
            rejectUnauthorized: true,
        };
        this.fastifyInstance = fastify({

            http2: true,
            https: httpsOptions,
            bodyLimit: 26214400,
            pluginTimeout: 20000,
            genReqId: () => {
                return uuid.v4().toString();
            },
            requestIdHeader: serverConstants.requestIdHeader,
            modifyCoreObjects: true,
            trustProxy: serverConstants.trustProxy,
            ignoreTrailingSlash: true,
            logger: this.logService,
            querystringParser: (str) => {
                return qs.parse(str);
            },
        });
        this.addContentTypeParser();
        return this.fastifyInstance;
    };

    private addContentTypeParser() {
        this.fastifyInstance.addContentTypeParser('*', (req, done) => {
            let data = '';
            req.on('data', chunk => {
                console.info('inside data listener event');
                return data += chunk; });
            req.on('end', () => {
                done(null,data);
            })
        });
    }


}
export const ServerUtilServiceInstance = new ServerUtilService();
И в моем main.ts

async function bootstrap() {
  const fastifyServerInstance = 
  ServerUtilServiceInstance.createFastifyServerInstance();
  const serverConstants = ServerUtilServiceInstance.retrieveAppConstants();
  const app: NestFastifyApplication = await NestFactory.create<NestFastifyApplication>(
      AppModule,
      new FastifyAdapter(fastifyServerInstance)
  );
    ....
    ... // global filters, interceptors, pipes
    ....
    await app.listen(serverConstants.port, '0.0.0.0');

}
Можете привести пример экспресса и винстона?

— 
Pini Cheyni
 23.06.2020 13:02
Извините. Я не пробовал винстон, так как я фанат пино. Но должно быть очень похоже

— 
vijayakumarpsg587
 23.06.2020 17:14


Как в Nest.js получить экземпляр службы внутри декоратора?
Вопросы
JAVASCRIPT
Как в Nest.js получить экземпляр службы внутри декоратора?
Как в CustomDecorator получить доступ к экземпляру службы, определенному в Nest.js?

export const CustomDecorator = (): MethodDecorator => {
  return (
    target: Object,
    propertyKey: string | symbol,
    descriptor: PropertyDescriptor
    ) => {

    // Here, is possibile to access a Nest.js service (i.e. TestService) instance?

    return descriptor;
  }
};
 31.08.2018 00:56
27
1
14 139
4
 Ответы 4
У нас есть несколько моментов:

Декоратор свойств, выполняемый до создания decorated instance.
Декоратор хочет использовать some instance, разрешенный Инжектором decorated instance.
Как простой способ - использовать some instance, введенный decorated instance.

@Injectable()
export class CatsService {
  constructor(public myService: MyService){}

  @CustomDecorator()
  foo(){}
}

export const CustomDecorator = (): MethodDecorator => {
  return (
    target: Object,
    propertyKey: string | symbol,
    descriptor: PropertyDescriptor
  ) => {

    const originalMethod = descriptor.value;

    descriptor.value = function () {
      const serviceInstance = this;
      console.info(serviceInstance.myService);

    }

    return descriptor;
  }
};
PS Я думаю, что как-то можно использовать экземпляр Injector для получения любого из желаемых экземпляров (например, угловой делает).

 11.09.2018 10:59
Наткнулся на этот вопрос и потратил день, пытаясь придумать хороший ответ. Это может не подходить для каждого варианта использования, но я смог скопировать общий шаблон из основного пакета Nest в соответствии со своими потребностями.

Я хотел создать свой собственный декоратор для аннотирования методов контроллера для обработки событий (например, @Subscribe('some.topic.key') async handler() { ... })).

Чтобы реализовать это, мой декоратор использовал SetMetadata из @nestjs/common для регистрации некоторых необходимых мне метаданных (имя метода, к которому он применялся, класс, к которому он принадлежал, ссылка на метод).

export const Subscribe = (topic: string) => {
  return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    SetMetadata<string, RabbitSubscriberMetadataConfiguration>(
      RABBITMQ_SUBSCRIBER,
      {
        topic,
        target: target.constructor.name,
        methodName: propertyKey,
        callback: descriptor.value,
      },
    )(target, propertyKey, descriptor);
  };
};
Оттуда я смог создать свой собственный модуль, который подключился к хукам жизненного цикла Nest, чтобы найти все методы, которые я украсил своим декоратором, и применить к нему некоторую логику, например:

@Module({
  imports: [RabbitmqChannelProvider],
  providers: [RabbitmqService, MetadataScanner, RabbitmqSubscriberExplorer],
  exports: [RabbitmqService],
})
export class RabbitmqModule implements OnModuleInit {
  constructor(
    private readonly explorer: RabbitmqSubscriberExplorer,
    private readonly rabbitmqService: RabbitmqService,
  ) {}

  async onModuleInit() {
    // find everything marked with @Subscribe
    const subscribers = this.explorer.explore();
    // set up subscriptions
    for (const subscriber of subscribers) {
      await this.rabbitmqService.subscribe(
        subscriber.topic,
        subscriber.callback,
      );
    }
  }
}
Служба проводника использовала некоторые утилиты в @nestjs/core для анализа контейнера и поиска всех украшенных функций с их метаданными.

@Injectable()
export class RabbitmqSubscriberExplorer {
  constructor(
    private readonly modulesContainer: ModulesContainer,
    private readonly metadataScanner: MetadataScanner,
  ) {}

  public explore(): RabbitSubscriberMetadataConfiguration[] {
    // find all the controllers
    const modules = [...this.modulesContainer.values()];
    const controllersMap = modules
      .filter(({ controllers }) => controllers.size > 0)
      .map(({ controllers }) => controllers);

    // munge the instance wrappers into a nice format
    const instanceWrappers: InstanceWrapper<Controller>[] = [];
    controllersMap.forEach(map => {
      const mapKeys = [...map.keys()];
      instanceWrappers.push(
        ...mapKeys.map(key => {
          return map.get(key);
        }),
      );
    });

    // find the handlers marked with @Subscribe
    return instanceWrappers
      .map(({ instance }) => {
        const instancePrototype = Object.getPrototypeOf(instance);
        return this.metadataScanner.scanFromPrototype(
          instance,
          instancePrototype,
          method =>
            this.exploreMethodMetadata(instance, instancePrototype, method),
        );
      })
      .reduce((prev, curr) => {
        return prev.concat(curr);
      });
  }

  public exploreMethodMetadata(
    instance: object,
    instancePrototype: Controller,
    methodKey: string,
  ): RabbitSubscriberMetadataConfiguration | null {
    const targetCallback = instancePrototype[methodKey];
    const handler = Reflect.getMetadata(RABBITMQ_SUBSCRIBER, targetCallback);
    if (handler == null) {
      return null;
    }
    return handler;
  }
}
Я не считаю, что это лучший способ справиться с этим, но у меня он хорошо сработал. Используйте этот код на свой страх и риск, он поможет вам начать :-). Я адаптировал код, доступный здесь: https://github.com/nestjs/nest/blob/5.1.0-stable/packages/microservices/listener-metadata-explorer.ts

 08.04.2019 02:14
Я пытался использовать свою службу конфигурации внутри ParamDecorator, поэтому я обращаюсь к своей службе, создавая ее новый экземпляр:

export const MyParamDecorator = createParamDecorator((data, req) => {

  // ...
  const configService = new ConfigService(`${process.env.NODE_ENV || 'default'}.env`);
  const myConfigValue = configService.getMyValue();
  // ...
});
 26.09.2019 11:45
Поздно к вечеринке, но поскольку у меня была аналогичная проблема (Использовать глобальный модуль в декораторе), и я наткнулся на этот вопрос.

import { Inject } from '@nestjs/common';
export function yourDecorator() {
  const injectYourService = Inject(YourServiceClass);

  return (target: any, propertyKey: string, propertyDescriptor: PropertyDescriptor) => {
    // this is equivalent to have a constructor like constructor(yourservice: YourServiceClass)
    // note that this will injected to the instance, while your decorator runs for the class constructor
    injectYourService(target, 'yourservice');

    // do something in you decorator

    // we use a ref here so we can type it
    const yourservice: YourServiceClass = this.yourservice;
    yourservice.someMethod(someParam);
  };
}


Nest-schedule npm не работает
Вопросы
NODE.JS
Nest-schedule npm не работает
Я использую структуру nest.js для разработки приложения на основе узлов. Я пытаюсь написать планировщик с использованием расписания вложений, как указано в https://www.npmjs.com/package/nest-schedule.

Почему-то код не работает при использовании с @Cron или @Schedule. Остальные декораторы работают нормально. Использование той же базы кода, что и в приведенной выше ссылке. Может ли кто-нибудь помочь мне с настройкой этого и с точным шаблоном cron, используемым в nodejs

 28.08.2018 08:58
6
0
3 813
4
 Ответы 4
Декораторы @Cron() и @Schedule() не работали до v0.3.1 (проблема с github).

Не могли бы вы попробовать Последняя версия?

package.json

{
    ...
    "dependencies": {
        "nest-schedule": "^0.3.1"
        ...
    }
    ...
}
scheduler.service.ts

import { Injectable } from '@nestjs/common';
import { Cron, NestSchedule } from 'nest-schedule';

@Injectable()
export class SchedulerService extends NestSchedule {

    // ...

    @Cron('* * * * * *') // Run every second
    scheduledJob() {
        console.info('[Scheduler]: scheduled jobs has been started');

        // ...
    }

    // ...

}
Работает для меня.

 06.09.2018 11:27
У меня была такая же проблема ... Проведя небольшое исследование, я обнаружил, что мне нужно использовать последнюю версию @ nestjs / common и @ nestjs / core, а если используется, также @ nestjs / platform-express

 16.09.2020 20:42
Для текущей версии Nest вы можете использовать nestjs / schedule. Посмотрите, как я этого добился с помощью nestjs / schedule.

1-й: установить nestjs cli

npm i -g @nestjs/cli
2-й: создать новый проект

nest new schedule-sample
3-й: установить расписание nestjs

npm install --save @nestjs/schedule
4-й: Создайте новую услугу, чтобы разместить вашу услугу.

nest generate service cron
После установки пакета добавьте его в app.module, как показано ниже:

import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
импортировать {Logger} из '@ nestjs / common';

@Module({
  imports: [
    ScheduleModule.forRoot()
  ],
})
export class AppModule {}
5-й: вы можете запустить его, как показано ниже (полные инструкции здесь https://docs.nestjs.com/techniques/task-scheduling):

@Cron('*/5 * * * * *')
runEvery10Seconds() {
 console.info('Run it every 5 seconds');
}
Вот полный пример (cron.service.ts).

импортировать {Logger} из '@ nestjs / common'; импортировать {Injectable} из '@ nestjs / common'; импортировать {Cron, Interval} из '@ nestjs / schedule';

@Injectable()
export class CronService {

    private readonly logger = new Logger(CronService.name);

    @Cron('*/5 * * * * *')
    runEvery10Seconds() {
        this.logger.debug('Run it every 5 seconds');
    }


    @Cron('10 * * * * *')
    handleCron() {
        this.logger.debug('Called when the current second is 10');
    }

    @Interval(10000)
    handleInterval() {
        this.logger.debug('Called every 10 seconds');
    }
}
Заключительные мысли:
Самый изощренный способ планирования заданий - использование динамических заданий cron. Для этого вы можете получить ссылку на экземпляр CronJob по имени из любого места вашего кода с помощью SchedulerRegistry API. Сначала внедрите SchedulerRegistry, используя стандартную инъекцию конструктора:

constructor(private schedulerRegistry: SchedulerRegistry) {}
НАМЕКАТЬ Импортируйте SchedulerRegistry из пакета @ nestjs / schedule. Затем используйте его в классе следующим образом. Предположим, что задание cron было создано со следующим объявлением:

@Cron('* * 8 * * *', {
  name: 'notifications',
})
triggerNotifications() {}
Чтобы получить доступ к этому заданию, используйте следующее:

const job = this.schedulerRegistry.getCronJob('notifications');

job.stop();
console.info(job.lastDate());
Я тестировал его в следующих версиях (package.json)

"@nestjs/common": "^7.6.15",
"@nestjs/core": "^7.6.15",
"@nestjs/schedule": "^0.4.3",
 07.06.2021 00:16
Вы добавили в модуль услугу о вашей работе?

https://github.com/nestjs/nest/tree/master/sample/27-scheduling/src/tasks

Пожалуйста, сформулируйте это как объясненный условный ответ, чтобы избежать впечатления, что вы задаете уточняющий вопрос вместо ответа (для которого следует использовать комментарий вместо ответа, сравните meta.stackexchange.com/questions/214173/…). Например, как «Если ваша проблема ... тогда решение ... потому что ....».

— 
Yunnosch
 18.06.2021 07:44


Почему onSelectionChange вызывается дважды?
Вопросы
ANGULAR
Почему onSelectionChange вызывается дважды?
Я использую автозаполнение углового материала следующим образом:

<mat-autocomplete #autocomplete = "matAutocomplete" [displayWith] = "displayFn" autoActiveFirstOption>
  <mat-option *ngFor = "let option of filteredOptions$ | async" [value] = "option" (onSelectionChange) = "onSelectionChanged(option)" >
    {{displayFn(option)}}
  </mat-option>
</mat-autocomplete>    
Это обработчик:

onSelectionChanged(option) {
  console.info('Selected ' + option.name);
}
По какой-то причине onSelectionChanged() вызывается дважды. Второй раз со значением Старый! Я не понимаю почему. Что здесь происходит?

При выборе элемента 1, затем элемента 2, а затем элемента 3 будет напечатано:

> Selected item 1
> Selected item 2
> Selected item 1  // The unwanted call with the old value
> Selected item 3
> Selected item 2  // The unwanted call with the old value
 26.10.2018 15:37
22
0
13 984
9
Данный вопрос помечен как решенный
 Ответы 9
 Ответ принят как подходящий
у материала есть optionSelected событие, вы можете его использовать

<mat-autocomplete #autocomplete = "matAutocomplete" (optionSelected) = "onSelectionChanged($event)" [displayWith] = "displayFn" autoActiveFirstOption>
 <mat-option *ngFor = "let option of filteredOptions$ | async" [value] = "option" >
    {{displayFn(option)}}
 </mat-option>
</mat-autocomplete>  
и получить свою ценность таким образом

onSelectionChanged(event) {
   console.info(event.option.value);
}
 26.10.2018 15:42
Как отмечено в Эта проблема, это ожидаемое поведение onSelectionChanged. Событие изменения выбора запускается не только при выборе параметра, но и при его отмене. Поэтому, когда опция выбрана, событие запускается для нее, а также для любой опции, которая не выбрана.

Попробуйте вместо этого использовать optionSelected.

 26.10.2018 15:44
Вы также можете использовать (изменить) событие

<mat-autocomplete #autocomplete = "matAutocomplete" [displayWith] = "displayFn" autoActiveFirstOption>
  <mat-option *ngFor = "let option of filteredOptions$ | async" [value] = "option" (change) = "onSelectionChanged(option)" >
    {{displayFn(option)}}
  </mat-option>
</mat-autocomplete>  
 26.10.2018 15:50
Вы можете проверить, было ли событие инициировано пользователем, следующим образом:

//.html 
 <mat-option *ngFor = "let option of filteredOptions$ | async" [value] = "option" (onSelectionChange) = "onSelectionChanged($event)" >


//.ts
onSelectionChanged(option) {
   if (option.isUserInput==true){
      console.info('Selected ' + option.name);
   }
}
 03.10.2019 13:20
Я столкнулся с той же проблемой для мат-вариант внутри mat-select и исправил это следующим образом:

Шаблон

<mat-select>
 <mat-option (onSelectionChange) = "handleMetaSignalChange(metaSignal.name,$event);" *ngFor = "let metaSignal of metaSignals" [value] = "metaSignal">
  {{ metaSignal.name }}
 </mat-option>
</mat-select>
Код

 handleMetaSignalChange(metaSignal: string, event: any) {
    if (event.isUserInput) {    // ignore on deselection of the previous option
      console.info('Meta Signal Changed to ' + metaSignal + event.isUserInput);
    }
 }
 27.11.2019 09:17
changeDegree(event) {
    if (event.isUserInput) { 
      console.info(event.source.value);

      this._degreeArray.length = 0;
      this.changeDegreeDetails(event.source.value.id);
    }
  }
 22.04.2020 19:35
Вы можете исправить это следующим образом:

Материальный путь:

<mat-select [(ngModel)] = "selectedLanguage" (ngModelChange) = "onLangChange($event)">
                                            <mat-option *ngFor = "let language of languages" [value] = "language">
                                                {{language}}
                                            </mat-option>
                                        </mat-select>    
Традиционный способ:

   <select [(ngModel)] = "status" (ngModelChange) = "onChangeStatus($event)"
                                                [ngModelOptions] = "{standalone: true}"
                                                class = "form-control custom-select" id = "status">
                                                <option i18n value = "All" selected>Statut</option>
                                                <option i18n value = "Yes">Visible</option>
                                                <option i18n value = "No">Non Visible</option>
                                            </select>    
В вашем файле компонента ts:

onChangeStatus(event) {
    if (event === "All") {
      this.status = ...
    }
    else
     ...
}
 19.11.2020 12:09
Просто использовал (щелкните) вместо этого. Взглянем:

  <mat-autocomplete #auto = "matAutocomplete">
    <mat-option
      (click) = "selected(entity)"
      *ngFor = "let entity of filteredOptions"
      [value] = "entity.short"
    >
      {{ entity.short_header}}
    </mat-option>
  </mat-autocomplete>
Обновлено: это не сработает, если вы используете клавиатуру для выбора опции. Таким образом, в качестве альтернативы, поскольку вы уже используете [displayWith], значением будет объект. и вы можете использовать вывод (optionSelected) в элементе mat-autocomplete:

<mat-autocomplete (optionSelected) = "optionSelected($event)" 
#auto = "matAutocomplete" [displayWith] = "displayEntity">
    <mat-option *ngFor = "let e of filteredEntities$ | async" [value] = "e">
        {{ e.short_header }}
    </mat-option>
</mat-autocomplete>
 09.04.2021 08:11
Если вам нужно получить весь ОБЪЕКТ и использовать его дочерние значения в компоненте:

1- Отправьте объект и $ событие из DOM в component.ts.

<!-- Printing out the country name and flag only -->

 <mat-autocomplete #auto = "matAutocomplete">
   <mat-option 
      *ngFor = "let country of filteredCountries$ | async" 
      [value] = "country.name"
      (onSelectionChange) = "getSelectedCountry(country, $event)">
      <img class = "example-option-img" aria-hidden [src] = "country.flag" height = "25">
      <span>{{country.name}}</span>
   </mat-option>
 </mat-autocomplete>
2- Теперь обновите свои значения в component.ts

getSelectedCountry(country: ICountry, event: any): void {
   if (event.isUserInput) {    // ignore on deselection of the previous option
     console.info("Selected country name: ", country.name);
     console.info("Selected country code: ", country.code);
     console.info("Selected country flag link: ", country.flag);
}
Примечание. ICountry - это интерфейс моей страны, который не требуется.


Горячая перезагрузка фреймворка Nest.js не работает
Вопросы
NODE.JS
Горячая перезагрузка фреймворка Nest.js не работает
Я выполнил шаги документации:

https://docs.nestjs.com/techniques/hot-reload

Я запускаю эту команду: npm run webpack, но она закрывается, возвращает мне приглашение и не продолжает смотреть файлы:

    gabriel@roraima-tv:/var/www/studying/tera-ping-pong$ npm run webpack

    > tera-ping-pong@0.0.0 webpack /var/www/studying/tera-ping-pong
    > webpack --config webpack.config.js


    webpack is watching the files…

    Hash: 6e13d56ba7d77331e5c2
    Version: webpack 4.23.1
    Time: 3014ms
    Built at: 11/01/2018 1:39:11 PM
                       Asset       Size  Chunks             Chunk         Names
    dist/app.controller.d.ts  177 bytes          [emitted]  
        dist/app.module.d.ts   35 bytes          [emitted]  
       dist/app.service.d.ts   56 bytes          [emitted]  
              dist/main.d.ts   11 bytes          [emitted]  
          dist/main.hmr.d.ts   11 bytes          [emitted]  
                   server.js     39 KiB    main  [emitted]  main
    Entrypoint main = server.js
    [0] multi webpack/hot/poll?1000 ./src/main.hmr.ts 40 bytes {main}         [built]
    [./node_modules/webpack/hot/log-apply-result.js]         (webpack)/hot/log-apply-result.js 1.27 KiB {main} [built]
    [./node_modules/webpack/hot/log.js] (webpack)/hot/log.js 1.11 KiB         {main} [built]
    [./node_modules/webpack/hot/poll.js?1000] (webpack)/hot/poll.js?        1000 1.15 KiB {main} [built]
    [./src/app.controller.ts] 1.44 KiB {main} [built]
    [./src/app.module.ts] 1.03 KiB {main} [built]
    [./src/app.service.ts] 883 bytes {main} [built]
    [./src/main.hmr.ts] 1.07 KiB {main} [built]
    [@nestjs/common] external "@nestjs/common" 42 bytes {main} [built]
    [@nestjs/core] external "@nestjs/core" 42 bytes {main} [built]
    gabriel@roraima-tv:/var/www/studying/tera-ping-pong$ 
Поэтому всякий раз, когда я добавляю свои файлы * .ts, они меняются и не перезагружаются, пока сервер не перезагрузится.

 01.11.2018 20:12
2
1
2 967
4
Данный вопрос помечен как решенный
 Ответы 4
 Ответ принят как подходящий
Сначала установите необходимые пакеты:

npm i --save-dev webpack-node-externals start-server-webpack-plugin
После завершения установки создайте файл webpack-hmr.config.js в корневом каталоге вашего приложения.

 const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const StartServerPlugin = require('start-server-webpack-plugin');

module.exports = function(options) {
  return {
    ...options,
    entry: ['webpack/hot/poll?100', options.entry],
    watch: true,
    externals: [
      nodeExternals({
        allowlist: ['webpack/hot/poll?100'],
      }),
    ],
    plugins: [
      ...options.plugins,
      new webpack.HotModuleReplacementPlugin(),
      new webpack.WatchIgnorePlugin([/\.js$/, /\.d\.ts$/]),
      new StartServerPlugin({ name: options.output.filename }),
    ],
  };
};
Чтобы включить HMR, откройте файл входа приложения (main.ts) и добавьте следующие инструкции, связанные с веб-пакетом:

declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
 15.11.2020 23:25
вы можете просто использовать эту команду в CLI, она по умолчанию:

npm run start:dev
 31.07.2021 21:00
проблема в том, что вы использовали

npm start
только вместо

npm start:dev
который запускает сервер в режиме наблюдения:



 21.08.2021 17:11
Вы можете запустить nest в режиме просмотра

nest start --watch
Это должен быть принятый ответ !!

— 
ismaestro
 12.11.2021 13:43


В nest.js можно ли получить экземпляр службы внутри декоратора параметров?
Вопросы
JAVASCRIPT
В nest.js можно ли получить экземпляр службы внутри декоратора параметров?
Я хочу добиться чего-то подобного с помощью nest.js: (что-то очень похожее на Spring framework)

@Controller('/test')
class TestController {
  @Get()
  get(@Principal() principal: Principal) {

  }
}
После нескольких часов чтения документации я обнаружил, что Nest.js поддерживает создание собственного декоратора. Поэтому я решил реализовать свой собственный @Principal декоратор. Декоратор отвечает за получение токена доступа из http-заголовка и получение принципала пользователя из моей собственной службы аутентификации с использованием токена.

import { createParamDecorator } from '@nestjs/common';

export const Principal = createParamDecorator((data: string, req) => {
  const bearerToken = req.header.Authorization;
  // parse.. and call my authService..
  // how to call my authService here?
  return null;
});

Но проблема в том, что я понятия не имею, как получить мой экземпляр службы внутри обработчика декоратора. Является ли это возможным? И как? заранее спасибо

 07.04.2019 17:50
11
0
8 342
3
Данный вопрос помечен как решенный
 Ответы 3
 Ответ принят как подходящий
Невозможно внедрить службу в ваш пользовательский декоратор.

Вместо этого вы можете создать AuthGuard, у которого есть доступ к вашему сервису. Затем охранник может добавить свойство к объекту request, к которому вы затем сможете получить доступ с помощью своего собственного декоратора:

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const bearerToken = request.header.Authorization;
    const user = await this.authService.authenticate(bearerToken);
    request.principal = user;
    // If you want to allow the request even if auth fails, always return true
    return !!user;
  }
}
import { createParamDecorator } from '@nestjs/common';

export const Principal = createParamDecorator((data: string, req) => {
  return req.principal;
});
а затем в вашем контроллере:

@Get()
@UseGuards(AuthGuard)
get(@Principal() principal: Principal) {
  // ...
}
Обратите внимание, что Nest предлагает несколько стандартных модулей для аутентификации, см. документы.

 07.04.2019 18:08
Вы можете использовать middlewar для всех контроллеров.

auth.middleware.ts


interface AccountData {
  accId: string;
  iat: number;
  exp: number;
}

interface RequestWithAccountId extends Request {
  accId: string;
}

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(private readonly authenticationService: AuthenticationService) {}
  async use(req: RequestWithAccountId, res: Response, next: NextFunction) {
    const token =
      req.body.token || req.query.token || req.headers['authorization'];
    if (!token) {
      throw new UnauthorizedException();
    }
    try {
      const {
        accId,
      }: AccountData = await this.authenticationService.verifyToken(token);
      req.accId = accId;
      next();
    } catch (err) {
      throw new UnauthorizedException();
    }
  }
}

Затем создайте декоратор AccountId

аккаунт-id.decorator.ts

import {
  createParamDecorator,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';

export const AccountId = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const req = ctx.switchToHttp().getRequest();
    const token = req.accId;
    if (!token) {
      throw new UnauthorizedException();
    }
    return token;
  },
);
Затем примените декоратор AccountId в своем контроллере.

ваш.controller.ts

  @Get()
  async someEndpoint(
    @AccountId() accountId,
  ) {
    console.info('accountId',accontId)
  }
 13.02.2021 21:08
для NestJS v7

Создать пользовательскую трубу

// parse-token.pipe.ts
import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable()
export class ParseTokenPipe implements PipeTransform {
    // inject any dependency
    constructor(private authService: AuthService) {}
    
    async transform(value: any, metadata: ArgumentMetadata) {
        console.info('additional options', metadata.data);
        return this.authService.parse(value);
    }
}
Используйте эту трубу с декоратором свойств

// decorators.ts
import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { ParseTokenPipe} from './parse-token.pipe';

export const GetToken = createParamDecorator((data: unknown, ctx: ExecutionContext) => {
  return ctx.switchToHttp().getRequest().header.Authorization;
});

export const Principal = (additionalOptions?: any) => GetToken(additionalOptions, ParseTokenPipe);
Используйте этот декоратор с дополнительными опциями или без них

@Controller('/test')
class TestController {
  @Get()
  get(@Principal({hello: "world"}) principal) {}
}


NestJS + TypeORM: использовать две или более баз данных?
Вопросы
JAVASCRIPT
NestJS + TypeORM: использовать две или более баз данных?
Я уже 2 дня пытаюсь это решить, возможно, я здесь просто упускаю из виду.

Моей целью было написать приложение NestJS (с включенным TypeORM), которое обслуживает RestAPI для 2 или 3 моих небольших проектов, вместо того, чтобы писать приложение NestJS для каждого из них.

Пока все хорошо, приложение готово, хорошо работает с отдельными проектами (которые находятся во вложенных папках со своими сущностями, контроллерами, службами, модулями), но я не могу заставить его работать со всеми из них.

Дело вроде в конфигурации, я использую ormconfig.json:

[ {
    "name": "Project1",
    "type": "mysql",
    "host": "localhost",
    "port": 3306,
    "username": "<username>",
    "password": "<pwd>",
    "database": "<database>",
    "synchronize": false,
    "entities": ["project1/*.entity.ts"],
    "subscribers": ["project1/*.subscriber.ts"],
    "migrations": ["project1/migrations/*.ts"],
    "cli": { "migrationsDir": "project1/migrations" }
}, {
    "name": "project2",
    "type": "mysql",
    "host": "localhost",
    "port": 3306,
    "username": "<another-username>",
    "password": "<another-pwd>",
    "database": "<another-database>",
    "synchronize": false,
    "entities": ["project2/*.entity.ts"],
    "subscribers": ["project2/*.subscriber.ts"],
    "migrations": ["project2/migrations/*.ts"],
    "cli": { "migrationsDir": "project2/migrations"
    } ]
В сообщении об ошибке говорится:

[ExceptionHandler] Cannot find connection default because its not defined in any orm configuration files

Конечно, "default" найти не удалось, потому что я предоставляю две конфигурации с уникальными именами, отличными от "default".

В ApplicationModule я мог бы указать имя соединения, например:

TypeOrmModule.forRoot( { name: "project1" } ),
но тогда это будет работать только для одного проекта.

Я мог бы смешать все в одной конфигурации, но тогда у меня было бы все в одной базе данных, один и тот же пользователь для всех и, возможно, смешал сущности ...

Может кто-нибудь подскажет, как это решить? Возможно, с getConnection(<name>) в каждом модуле, но как тогда запустить ApplicationModule?

С уважением,
Сагерберт

 23.08.2018 23:31
16
0
15 669
4
Данный вопрос помечен как решенный
 Ответы 4
 Ответ принят как подходящий
Я просто попытался настроить TypeORM с несколькими базами данных и ormconfig.json, и у меня это вообще не сработало. Казалось, что всегда использовалось соединение default, и когда не было найдено соединение по умолчанию (= без явного имени), возникала соответствующая ошибка.

Это действительно сработало, когда я вместо этого определил соединения в app.module.ts (я удалил ormconfig.json):

imports: [
  ...,
  TypeOrmModule.forRoot({
    name: 'Project1',
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: '<username>',
    password: '<pwd>',
    database: '<database>',
    synchronize: false,
    entities: ['project1/*.entity.ts'],
    subscribers: ['project1/*.subscriber.ts'],
    migrations: ['project1/migrations/*.ts'],
    cli: { migrationsDir: 'project1/migrations' },
  }),
  TypeOrmModule.forRoot({
    name: 'project2',
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: '<another-username>',
    password: '<another-pwd>',
    database: '<another-database>',
    synchronize: false,
    entities: ['project2/*.entity.ts'],
    subscribers: ['project2/*.subscriber.ts'],
    migrations: ['project2/migrations/*.ts'],
    cli: { migrationsDir: 'project2/migrations' },
  })
]
 24.08.2018 01:01
Вам необходимо явно передать имя соединения на том же уровне внутри TypeOrmModule.forRoot ({имя: 'db1Connection'}), если вы используете несколько соединений с базой данных.

TypeOrmModule.forRootAsync({
  name: DB1_CONNECTION,
  imports: [ConfigModule],
  useClass: TypeormDb1ConfigService,
}),

TypeOrmModule.forRootAsync({
  name: DB2_CONNECTION,
  imports: [ConfigModule],
  useClass: TypeormDb2ConfigService,
})
 29.12.2018 12:56
Для ясности и для других разработчиков, чтобы они пришли в этот пост:

От Документация NestJS:

If you don't set any name for a connection, its name is set to default. Please note that you shouldn't have multiple connections without a name, or with the same name, otherwise they simply get overridden.

Одно из ваших подключений должно иметь одно из следующего:

"name":"default"
Без имени.
Я бы рекомендовал объявлять все ваши соединения в ormconfig.json, а не объявлять это в коде.

Пример импорта подключений из ormconfig.json:

@Module({
    imports: [TypeOrmModule.forFeature([Entity1, Entity2]), //This will use default connection
    TypeOrmModule.forRoot({name: 'con1'}), // This will register globaly con1
    TypeOrmModule.forRoot({name: 'con2'}), // This will register globaly con2
    controllers: [...],
    providers: [...],
    exports: [...]
})
в вашем модуле (не обязательно быть корневым модулем, только модули, которые вам понадобятся для подключения).

 29.08.2019 10:47
Вот как мне удалось это исправить. С помощью одного файла конфигурации я могу запускать миграции в ускоренном режиме приложения или с помощью интерфейса командной строки TypeOrm.

SRC / config / ormconfig.ts

import parseBoolean from '@eturino/ts-parse-boolean';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
import { join } from 'path';

dotenv.config();

export = [
  {
    //name: 'default',
    type: 'mssql',
    host: process.env.DEFAULT_DB_HOST,
    username: process.env.DEFAULT_DB_USERNAME,
    password: process.env.DEFAULT_DB_PASSWORD,
    database: process.env.DEFAULT_DB_NAME,
    options: {
      instanceName: process.env.DEFAULT_DB_INSTANCE,
      enableArithAbort: false,
    },
    logging: parseBoolean(process.env.DEFAULT_DB_LOGGING),
    dropSchema: false,
    synchronize: false,
    migrationsRun: parseBoolean(process.env.DEFAULT_DB_RUN_MIGRATIONS),
    migrations: [join(__dirname, '..', 'model/migration/*.{ts,js}')],
    cli: {
      migrationsDir: 'src/model/migration',
    },
    entities: [
      join(__dirname, '..', 'model/entity/default/**/*.entity.{ts,js}'),
    ],
  } as TypeOrmModuleOptions,
  {
    name: 'other',
    type: 'mssql',
    host: process.env.OTHER_DB_HOST,
    username: process.env.OTHER_DB_USERNAME,
    password: process.env.OTHER_DB_PASSWORD,
    database: process.env.OTHER_DB_NAME,
    options: {
      instanceName: process.env.OTHER_DB_INSTANCE,
      enableArithAbort: false,
    },
    logging: parseBoolean(process.env.OTHER_DB_LOGGING),
    dropSchema: false,
    synchronize: false,
    migrationsRun: false,
    entities: [],
  } as TypeOrmModuleOptions,
];
src / app.module.ts

import configuration from '@config/configuration';
import validationSchema from '@config/validation';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoggerService } from '@shared/logger/logger.service';
import { UsersModule } from '@user/user.module';
import { AppController } from './app.controller';
import ormconfig = require('./config/ormconfig'); //path mapping doesn't work here

@Module({
  imports: [
    ConfigModule.forRoot({
      cache: true,
      isGlobal: true,
      validationSchema: validationSchema,
      load: [configuration],
    }),
    TypeOrmModule.forRoot(ormconfig[0]), //default
    TypeOrmModule.forRoot(ormconfig[1]), //other db
    LoggerService,
    UsersModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
package.json

  "scripts": {
    ...
    "typeorm": "ts-node -r tsconfig-paths/register ./node_modules/typeorm/cli.js --config ./src/config/ormconfig.ts",
    "typeorm:migration:generate": "npm run typeorm -- migration:generate -n",
    "typeorm:migration:run": "npm run typeorm -- migration:run"
  },

Структура проекта

src/
├── app.controller.ts
├── app.module.ts
├── config
│   ├── configuration.ts
│   ├── ormconfig.ts
│   └── validation.ts
├── main.ts
├── model
│   ├── entity
│   ├── migration
│   └── repository
├── route
│   └── user
└── shared
    └── logger


Внедрить сервис nestjs из другого модуля
Вопросы
JAVASCRIPT
Внедрить сервис nestjs из другого модуля
У меня есть PlayersModule и ItemsModule.

Я хочу использовать ItemsService в PlayersService.

Когда я добавляю его инъекцией:

import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { ModelType, Ref } from 'typegoose';
import { Player } from './player.model';
import { Item } from '../items/item.model';
import { ItemsService } from '../items/items.service';

@Injectable()
export class PlayersService {
    constructor(
        @InjectModel(Player) private readonly playerModel: ModelType<Player>,
        private readonly itemsService: ItemsService){}
Я получаю эту ошибку гнезда:

[Nest] 11592 - 2018-8-13 11:42:17 [ExceptionHandler] Nest can't resolve dependencies of the PlayersService (+, ?). Please make sure that the argument at index [1] is available in the current context.

Оба модуля импортированы в app.module.ts. Обе службы работают отдельно в своем модуле.

 13.08.2018 11:45
63
0
41 881
4
Данный вопрос помечен как решенный
 Ответы 4
 Ответ принят как подходящий
Вы должны экспортItemsService в модуле, который его предоставляет:

@Module({
  controllers: [ItemsController],
  providers: [ItemsService],
  exports: [ItemsService]
  ^^^^^^^^^^^^^^^^^^^^^^^
})
export class ItemsModule {}
а затем импортируйте экспортируемый модуль в модуль, который использует службу:

@Module({
  controllers: [PlayersController],
  providers: [PlayersService],
  imports: [ItemsModule]
  ^^^^^^^^^^^^^^^^^^^^^^
})
export class PlayersModule {}
⚠️ Не добавляйте одного и того же провайдера к нескольким модулям. Экспортируйте провайдера, импортируйте модуль. ⚠️

 13.08.2018 13:40
Я считаю, что вы столкнулись с той же проблемой, что и я. В моем сценарии было два дополнительных пользовательских модуля (пользователь, авторизация), которым необходимо было использовать сервисы друг друга. Я использовал круговой DI, чтобы решить эту проблему. пожалуйста, проверьте это ссылка на сайт

Сообщите мне, решило ли это вашу проблему, может быть, я могу вам посоветовать.

 29.08.2019 06:50
Я решил свою проблему, удалив @Inject() из аргумента в моем конструкторе, который передавал экспортированную службу.

 20.03.2020 15:32
Решил мою проблему, изменив способ импорта постоянной строки (TOKEN), используемой в @Inject ()) моего провайдера ... будьте осторожны, используя index.ts с экспортом * из module.ts, nest не разрешит зависимость


Как определить, изменился ли такой атрибут, как пароль, в typeorm
Вопросы
JAVASCRIPT
Как определить, изменился ли такой атрибут, как пароль, в typeorm
В типовой форме я пытаюсь использовать декоратор подписчика для хеширования пароля пользователя перед сохранением в базе данных. К сожалению, я не могу найти ссылку в документации.

В sequelizejs я использую следующий код,

User.hashPassword = (user, options) => {
    if (!user.changed('password')) {
      return null;
    }
    // hash password
    return Bcrypt.hash(user.get('password'), SALT_ROUNDS)
      .then(hash => user.set('password', hash));
  };
Прямо сейчас я пытаюсь перенести код на typeorm, и мой перевод примерно

@BeforeInsert()
@BeforeUpdate()
hashPassword() {
    // conditional to detect if password has changed goes here
    this.password = bcrypt.hashSync(this.password, SALT_ROUNDS);
}
Проблема в том, что я застрял на !user.changed('password'). Есть ли в typeorm эквивалентная функция для этого без развертывания моего собственного решения?

 05.08.2018 21:43
6
3
5 225
4
Данный вопрос помечен как решенный
 Ответы 4
 Ответ принят как подходящий
Решение этого вопроса было найдено в собственном проблема @ adetoola. Вы можете использовать @AfterLoad, чтобы загрузить пароль пользователя и проверить, отличается ли текущий пароль:

@Entity()
export class User extends BaseEntity {
    @PrimaryColumn()
    public username: string;

    @Column()
    public password: string;

    @Column({ nullable: true })
    public jwtToken: string;

    private tempPassword: string;


    @AfterLoad()
    private loadTempPassword(): void {
        this.tempPassword = this.password;
    }

    @BeforeUpdate()
    private encryptPassword(): void {
        if (this.tempPassword !== this.password) {
            //
        }
    }
 07.02.2019 09:50
Вы можете попробовать это:

@BeforeInsert()
@BeforeUpdate()
hashPassword() {
  if (this.password) {
    this.password = createHmac('sha256', this.password).digest('hex');
  }
}
Я просто проверяю, присутствует ли пароль в DTO (перед обновлением и вставкой). Если он присутствует, я должен его хэшировать.

 20.02.2019 12:27
----------

    private tempPassword: string

  /// commit to handle the password if i not change it it will be  not encription


  @AfterLoad()
  private loadTempPassword(): void {
    this.tempPassword = this.password;
  }




  @BeforeInsert()
  @BeforeUpdate()
  async hashPassword(): Promise<void> {
    // cheack if that password changing or not
    if (this.tempPassword !== this.password) {

      try {
        this.password = await bcrypt.hash(this.password, 10)

      } catch (e) {
        throw new InternalServerErrorException('there are some issiue in the hash')

      }
    }


  }
 20.12.2020 21:25
мы можем сделать выбор пароля из Колонки

 @Column('string', { select: false })
   password:string
затем мы пытаемся хешировать

we check if the password is found or not 
 if (this.password) {
//make hash 
}
или иначе он должен сделать приватный tempPassword: string

   @AfterLoad()
  private loadTempPassword(): void {
    this.tempPassword = this.password;
  }
или же

@BeforeInsert()
  @BeforeUpdate()
  async hashPassword(): Promise<void> {
    // cheack if that password changing or not
    if (this.password) {
      if (this.tempPassword !== this.password) {

        try {
          this.password = await bcrypt.hash(this.password, 10)

        } catch (e) {
          throw new InternalServerErrorException('there are some issiue in the hash')

        }
      }
    }


Nest не может разрешить зависимости PhotoService (?)
Вопросы
NODE.JS
Nest не может разрешить зависимости PhotoService (?)
Я начинаю с Nest.js и получаю сообщение об ошибке после создания службы:

Nest не может разрешить зависимости PhotoService (?). Убедитесь, что аргумент [0] доступен в текущем контексте.

Я следую примеру базы данных: https://docs.nestjs.com/techniques/database

Вот мой полный код: https://github.com/marceloHashzen/nestjsbasics

 12.06.2018 03:46
15
2
15 499
4
Данный вопрос помечен как решенный
 Ответы 4
 Ответ принят как подходящий
В вашем app.module.ts удалите PhotoService от провайдеров. Затем в PhotoModule просто экспортируйте PhotoService:

@Module({
  // ...prev code
  exports: [PhotoService],
})
 12.06.2018 07:34
Мне помогло тестовое использование PhotoService. Документация оказалась полезной https://docs.nestjs.com/fundamentals/custom-providers

Или взгляните на спецификацию теста, которую я написал.

import { Test, TestingModule } from '@nestjs/testing';
import { PhotoController } from './photo.controller';
import { PhotoService } from './photo.service';

describe('PhotoController', () => {
  let module: TestingModule;
  let photoController: PhotoController;
  let photoService: PhotoService;

  const resultAll = ['test'];

  const mockPhotoService = {
    findAll: () => (resultAll),
  };

  const photoServiceProvider = {
    provide: PhotoService,
    useValue: mockPhotoService,
  };

  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [PhotoController],
      providers: [photoServiceProvider],
    }).compile();

    photoService = module.get<PhotoService>(PhotoService);
    photoController = module.get<PhotoController>(PhotoController);
  });

  describe('findAll', () => {
    it('should return collection of photos', async () => {
      jest.spyOn(photoService, 'findAll').mockImplementation(() => resultAll);

      expect(await photoController.findAll()).toBe(resultAll);
    });
  });
});
Сообщите мне, помогло ли это и вам

 17.11.2018 23:52
Удалите все providers и controllers из app.module.ts. Даже если они были добавлены инструментом CLI.

В app.module.ts вы должны загружать только другие модули в imports.

imports: [
  WaterModule,
  FireModule,
  AirModule,
  EarthModule,
]
Каждый конкретный модуль может явно определить, какие imports, providers и exports можно использовать.

в: fire.module.ts

@Module({
  imports: [TypeOrmModule.forFeature([FireRepository])],
  controllers: [FireController],
  providers: [FireService],
  exports: [FireService],
})
export class FireModule {}
 22.12.2020 08:40
Ударьте ту же проблему при создании приложения без подмодулей (просто модуля приложения).

Мое решение состояло в том, чтобы получить репозиторий из соединения.

import { Injectable } from '@nestjs/common';
import { Repository, Connection } from 'typeorm';
import { AuthorEntity } from '../entities/AuthorEntity';

@Injectable()
export class AuthorsService {
    usersRepository: Repository<AuthorEntity>;

    constructor(private connection: Connection) {
        this.usersRepository = connection.getRepository(AuthorEntity);
    }
...
}


Декоратор для возврата 404 в контроллер Nest
Вопросы
JAVASCRIPT
Декоратор для возврата 404 в контроллер Nest
Я работаю над серверной частью, используя NestJS (что, кстати, потрясающе). У меня есть стандарт «получить один экземпляр ситуации с сущностью», аналогичный приведенному ниже примеру.

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}
    ..
    ..
    ..
    @Get(':id')
    async findOneById(@Param() params): Promise<User> {
        return userService.findOneById(params.id);
    }
Это невероятно просто и работает - однако, если пользователь не существует, служба возвращает undefined, а контроллер возвращает код состояния 200 и пустой ответ.

Чтобы контроллер возвращал 404, я придумал следующее:

    @Get(':id')
    async findOneById(@Res() res, @Param() params): Promise<User> {
        const user: User = await this.userService.findOneById(params.id);
        if (user === undefined) {
            res.status(HttpStatus.NOT_FOUND).send();
        }
        else {
            res.status(HttpStatus.OK).json(user).send();
        }
    }
    ..
    ..
Это работает, но это намного больше кода (да, его можно реорганизовать).

Это действительно может использовать декоратор для обработки этой ситуации:

    @Get(':id')
    @OnUndefined(404)
    async findOneById(@Param() params): Promise<User> {
        return userService.findOneById(params.id);
    }
Кто-нибудь знает декоратора, который делает это, или лучшее решение, чем приведенное выше?

 07.04.2018 18:19
17
1
14 387
4
Данный вопрос помечен как решенный
 Ответы 4
 Ответ принят как подходящий
Самый короткий способ сделать это -

@Get(':id')
async findOneById(@Param() params): Promise<User> {
    const user: User = await this.userService.findOneById(params.id);
    if (user === undefined) {
        throw new BadRequestException('Invalid user');
    }
    return user;
}
В декораторе здесь нет смысла, потому что он будет иметь тот же код.

Примечание:BadRequestException импортирован из @nestjs/common;

Редактировать

Через некоторое время у меня появилось другое решение, которое является декоратором в DTO:

import { registerDecorator, ValidationArguments, ValidationOptions, ValidatorConstraint } from 'class-validator';
import { createQueryBuilder } from 'typeorm';

@ValidatorConstraint({ async: true })
export class IsValidIdConstraint {

    validate(id: number, args: ValidationArguments) {
        const tableName = args.constraints[0];
        return createQueryBuilder(tableName)
            .where({ id })
            .getOne()
            .then(record => {
                return record ? true : false;
            });
    }
}

export function IsValidId(tableName: string, validationOptions?: ValidationOptions) {
    return (object, propertyName: string) => {
        registerDecorator({
            target: object.constructor,
            propertyName,
            options: validationOptions,
            constraints: [tableName],
            validator: IsValidIdConstraint,
        });
    };
}

Затем в вашем DTO:

export class GetUserParams {
    @IsValidId('user', { message: 'Invalid User' })
    id: number;
}
Надеюсь, это кому-то поможет.

 12.04.2018 10:29
Для этого нет встроенного декоратора, но вы можете создать перехватчик, который проверяет возвращаемое значение и бросает NotFoundException на undefined:

Перехватчик
@Injectable()
export class NotFoundInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle()
      .pipe(tap(data => {
        if (data === undefined) throw new NotFoundException();
      }));
  }
}
Затем вы можете использовать Interceptor, добавив его к одной конечной точке:

@Get(':id')
@UseInterceptors(NotFoundInterceptor)
findUserById(@Param() params): Promise<User> {
    return this.userService.findOneById(params.id);
}
или все конечные точки вашего Controller:

@Controller('user')
@UseInterceptors(NotFoundInterceptor)
export class UserController {
Динамический перехватчик
Вы также можете передавать значения вашему перехватчику, чтобы настроить его поведение для каждой конечной точки.

Передайте параметры в конструктор:

@Injectable()
export class NotFoundInterceptor implements NestInterceptor {
  constructor(private errorMessage: string) {}
              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

  intercept(context: ExecutionContext, stream$: Observable<any>): Observable<any> {
    return stream$
      .pipe(tap(data => {
        if (data === undefined) throw new NotFoundException(this.errorMessage);
                                                            ^^^^^^^^^^^^^^^^^
      }));
  }
}
а затем создайте перехватчик с new:

@Get(':id')
@UseInterceptors(new NotFoundInterceptor('No user found for given userId'))
findUserById(@Param() params): Promise<User> {
    return this.userService.findOneById(params.id);
}
 19.08.2018 15:54
Если это простой случай, я обычно делаю это таким ленивым способом, не добавляя лишнего вздора:

import {NotFoundException} from '@nestjs/common'
...
@Get(':id')
async findOneById(@Param() params): Promise<User> {
    const user: User = await this.userService.findOneById(params.id)
    if (!user) throw new NotFoundException('User Not Found')
    return user
}
 24.12.2019 22:10
Обновленная версия @ Ответ Кима Керна для последних версий Nestjs:

Как сказал в документации Nestjs:

The interceptors API has also been simplified. In addition, the change was required due to this issue which was reported by the community.

Обновленный код:

import { Injectable, NestInterceptor, ExecutionContext, NotFoundException, CallHandler } from '@nestjs/common';
import { Observable, pipe } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class NotFoundInterceptor implements NestInterceptor {
  constructor(private errorMessage: string) { }

  intercept(context: ExecutionContext, stream$: CallHandler): Observable<any> {
    return stream$
      .handle()
      .pipe(tap(data => {
        if (data === undefined) { throw new NotFoundException(this.errorMessage); }
      }));
  }
}



Подтверждение Socket.io в Nest.js
Вопросы
JAVASCRIPT
Подтверждение Socket.io в Nest.js
Я пытаюсь включить использование обратных вызовов подтверждения socket.io в Nest.js WebSocketGateways.

Я хотел бы иметь возможность испускать это:

socket.emit('event', 'some data', function (response) {
  //do something
})
И используйте обработчик сообщений следующим образом:

@SubscribeMessage('event')
onStart(client, data, ack) {
  //Do stuff
  ack('stuff completed');
}
Согласно проблеме эта проблема nestjs / nest GitHub в библиотеке нет поддержки для него, поэтому вам придется создать свой собственный адаптер веб-сокета. Я пробовал, но не знаю, как именно это сделать. Думаю, мне нужно сделать что-то особенное в функции bindMessageHandlers, но мои попытки были напрасны. Это реализация bindMessageHandlers в адаптере socket.io по умолчанию, входящем в состав фреймворка:

public bindMessageHandlers(
  client,
  handlers: MessageMappingProperties[],
  process: (data: any) => Observable<any>,
) {
  handlers.forEach(({ message, callback }) =>
    Observable.fromEvent(client, message)
      .switchMap(data => process(callback(data)))
      .filter(result => !!result && result.event)
      .subscribe(({ event, data }) => client.emit(event, data)),
  );
}
Есть ли у кого-нибудь указатели на то, как я буду это реализовывать?

 02.04.2018 15:55
15
0
5 801
4
Данный вопрос помечен как решенный
 Ответы 4
После непродолжительного исследования NestJS. Вот мое решение.

src
├── app.controller.spec.ts
├── app.controller.ts
├── app.module.ts
├── common
│   └── adapters
│       └── ws-adapter.ts
├── events
│   ├── events.gateway.ts
│   └── events.module.ts
└── main.ts
main.ts файл

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { WsAdapter } from './common/adapters/ws-adapter.ts';
import * as cors from 'cors';

let corsOptions = {
    origin: 'http://nestjs.test',
    credentials: true
}

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.useWebSocketAdapter(new WsAdapter(3000));
    app.use(cors(corsOptions));
    await app.listen(4000);
}
bootstrap();
Потому что, когда мы используем WebSocket Adapter, мы больше не можем использовать тот же порт с приложением NestJS.

common\adapters\ws-adapter.ts файл

import * as WebSocket from 'ws';
import { WebSocketAdapter } from '@nestjs/common';
import { IoAdapter } from '@nestjs/websockets';
import { MessageMappingProperties } from '@nestjs/websockets';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/observable/empty';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/filter';

export class WsAdapter extends IoAdapter {
  public bindMessageHandlers(
    client,
    handlers: MessageMappingProperties[],
    process: (data: any) => Observable<any>,
  ) {
    handlers.forEach(({ message, callback }) => {
        client.on('event', function (data, ack) {
            console.info('DATA', data)
            ack('woot')
        })
        Observable.fromEvent(client, message)
            .switchMap(data => process(callback(data)))
            .filter(result => !!result && result.event)
            .subscribe(({ event, data }) => client.emit(event, data))
        });
  }
}
Исходный код на стороне моего клиента

socket.emit('event', {data: 'some data'}, function (response) {
    console.info('RESPONSE', response)
});
socket.on('event', function(data) {
    console.info('ON EVENT', data);
});
И вот мой результат





Надеюсь на эту помощь !!

 15.04.2018 15:53
 Ответ принят как подходящий
Обновлять: В Nest 5.0 добавлена ​​поддержка подтверждений. Если поставщик сокета передает несколько аргументов в обработчик SubscribeMessage, параметр request будет массивом с этими аргументами.

Например, с адаптером socket.io по умолчанию:

@SubscribeMessage('event')
async onEvent(client, request) {
  let data = request[0]
  let ack = request[1] //the acknowledgement function
}
Одна проблема заключается в том, что если вы не предоставите функцию подтверждения, request не будет массивом, а будет просто объектом data.

В одном из моих текущих проектов я работал над этим, создав вспомогательную функцию, которая извлекает данные и функцию подтверждения или создает заполнитель, что означает, что я всегда могу вызвать функцию ack, не учитывая ее существование:

export function extractRequest (req: any): { data: any, ack?: Function } {
  if (Array.isArray(req)) {
    const [data, ack] = req
    return { data, ack }
  } else {
    return { data: req, ack: () => {} }
  }
}
Старый ответ:В настоящее время это невозможно без изменения исходного кода Nest. Он будет добавлен в следующем выпуске 5.0. Я дополню этот ответ примером, когда он будет выпущен.

Источник: https://github.com/nestjs/nest/issues/581

 25.04.2018 19:23
Вы можете попробовать этот модуль: https://www.npmjs.com/package/nestjs-socket-handlers-with-ack. Он вызывает функцию подтверждения под капотом, вам нужно только вернуть какое-то значение или выдать ошибку. Надеюсь, поможет

 26.06.2018 01:04
Просто используйте оператор return из SubscribeMessage

// server
@SubscribeMessage('message')
  async onMessage(
    client: Socket, query: string
  ) {
    try {
      console.info(query) 
      return 'hello'
    } catch (e) {
      // ...
    } 
  }
на стороне клиента использовать в качестве третьего параметра функцию

// client
this.socket.emit('message', query, (res) => {
  console.info(res); // should log 'hello'
});


Плагины Mongoose nestjs
Вопросы
NODE.JS
Плагины Mongoose nestjs
Как я могу реализовать плагин мангуста с помощью nestjs?

import * as mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';
import mongoosePaginate from 'mongoose-paginate';
import mongoose_delete from 'mongoose-delete';

const UsuarioSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: [true, 'El nombre de usuario es requerido']
    },
    password: {
        type: String,
        required: [true, 'La clave es requerida'],
        select: false
    }
});

UsuarioSchema.plugin(uniqueValidator, { message: '{PATH} debe ser único' });
UsuarioSchema.plugin(mongoosePaginate);
UsuarioSchema.plugin(mongoose_delete, { deletedAt : true, deletedBy : true, overrideMethods: true });
Ошибка: первым параметром schema.plugin() должна быть функция, получившая значение undefined.

 20.03.2018 15:53
6
0
5 309
4
 Ответы 4
вот пример использования плагина timestamp

import { Schema } from 'mongoose';
import * as timestamp from 'mongoose-timestamp';
export const ConversationSchema = new Schema({
  users: [String],
}).plugin(timestamp);
попробуйте заменить

import uniqueValidator from 'mongoose-unique-validator';
import mongoosePaginate from 'mongoose-paginate';
import mongoose_delete from 'mongoose-delete';
от

import * as uniqueValidator from 'mongoose-unique-validator';
import * as mongoosePaginate from 'mongoose-paginate';
import * as mongoose_delete from 'mongoose-delete';
 27.03.2018 11:58
Если вы следовали официальному документу, вы можете добавить плагины в этот файл:

`export const databaseProviders = [
  {
    provide: 'DbConnectionToken',
    useFactory: async () => {
      (mongoose as any).Promise = global.Promise;

      mongoose
        .plugin('pluginOne')
        .plugin('pluginTwo')

      return await mongoose.connect('mongodb://localhost/nest', {
        useMongoClient: true,
      });
    },
  },
];`
Напомним, если вы устанавливаете плагины в файле схемы, вы устанавливаете одни и те же плагины столько раз. Лучше всего устанавливать плагины только один раз.

 05.04.2018 09:18
Это фрагмент для тех, кто использует плагин мангуста с nestjs. Вы также можете установить @ типы / мангуст-paginate для получения поддержки набора текста

Код для добавления плагина paginate в схему:
import { Schema } from 'mongoose';
import * as mongoosePaginate from 'mongoose-paginate';

export const MessageSchema = new Schema({
// Your schema definitions here
});

// Register plugin with the schema
MessageSchema.plugin(mongoosePaginate);
Теперь в документе интерфейса сообщений
export interface Message extends Document {
// Your schema fields here
}

Теперь вы можете легко получить метод paginate внутри класса обслуживания, например
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PaginateModel } from 'mongoose';
import { Message } from './interfaces/message.interface';

@Injectable()
export class MessagesService {
    constructor(
        // The 'PaginateModel' will provide the necessary pagination methods
        @InjectModel('Message') private readonly messageModel: PaginateModel<Message>,
    ) {}

    /**
     * Find all messages in a channel
     *
     * @param {string} channelId
     * @param {number} [page=1]
     * @param {number} [limit=10]
     * @returns
     * @memberof MessagesService
     */
    async findAllByChannelIdPaginated(channelId: string, page: number = 1, limit: number = 10) {
        const options = {
            populate: [
                // Your foreign key fields to populate
            ],
            page: Number(page),
            limit: Number(limit),
        };
        // Get the data from database
        return await this.messageModel.paginate({ channel: channelId }, options);
    }
}
 08.05.2019 22:02
Попробуй это:

import * as mongoose from 'mongoose';
import * as uniqueValidator from 'mongoose-unique-validator';
import * as mongoosePaginate from 'mongoose-paginate';
import * as mongoose_delete from 'mongoose-delete';

const UsuarioSchema = new mongoose.Schema({
   username: {
    type: String,
    unique: true,
    required: [true, 'El nombre de usuario es requerido']
   },
   password: {
       type: String,
       required: [true, 'La clave es requerida'],
       select: false
   }
});

UsuarioSchema.plugin(uniqueValidator, { message: '{PATH} debe ser único' });
UsuarioSchema.plugin(mongoosePaginate);
UsuarioSchema.plugin(mongoose_delete, { deletedAt : true, deletedBy : true, overrideMethods: true });

export default UsuarioSchema;
Тогда вы можете использовать это так:

import UsuarioSchema from './UsuarioSchema'


Как упростить реализацию контроллера Nest.js с поддержкой JWT
Вопросы
NESTJS
Как упростить реализацию контроллера Nest.js с поддержкой JWT
Я создаю контроллер, защищенный JWTAuthGuard. Есть ли способ уменьшить размер контроллера? (декораторы, перехватчики и т. д.).

Мой текущий код:

import {User} from "../../user/entities/user.entity";

interface UserJwtPayload {
    user: {
        id: number,
        email: string
    },
}

class CreateDeviceLocationDto {
    lat: number
    long: number
    description: string
    user: User
}


@UseGuards(JwtAuthGuard)
@Controller('device-locations')
export class DeviceLocationsController {
    constructor(private readonly userService: UserService, private readonly deviceLocationsService: DeviceLocationsService) {
    }

    @Post()
    async create(@Body() createDeviceLocationDto: CreateDeviceLocationDto, @Req() request: Request & UserJwtPayload) {
        const user: User = await this.userService.findOne(request.user.id);

        createDeviceLocationDto.user = user;

        return this.deviceLocationsService.create(createDeviceLocationDto);
    }
}

@Injectable()
export class DeviceLocationsService {
    constructor(
        @InjectRepository(DeviceLocation)
        private readonly devicesLocationRepository: Repository<DeviceLocation>
    ) {
    }

    create(createDeviceLocationDto: CreateDeviceLocationDto) {
        const location = this.devicesLocationRepository.create(createDeviceLocationDto);
        return this.devicesLocationRepository.save(location);
    }
}
Добавлять @Req() request: Request & UserJwtPayload в каждом методе раздражает.
Есть ли способ сохранить модель в базе данных (я использую TypeORM), не загружая пользователя каждый раз? (const user: User = await this.userService.findOne(request.user.id);)? Мне нужно передать только идентификатор пользователя, который уже доступен из токена JWT.
Спасибо!

Приведенный выше код работает. Я просто хочу упростить это, если это возможно.

 20.03.2024 16:36
0
0
81
3
Данный вопрос помечен как решенный
 Ответы 3
Вы можете использовать Decorators. Вот пример:

  @Get('cart')
  @UseGuards(JwtAuthenticationGuard)
  async getCart(@GetCurrentUser() user: UserWithRolesAndOrganizations) {
    return await this.ordersService.getCart({
      userId: user.id,
      organizationId: user.organizationId,
    });
  }
А для GetCurrentUser это будет выглядеть примерно так:

import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { UserWithRolesAndOrganizations } from '../../users-repository/types/user-roles-organization.type';

export const GetCurrentUser = createParamDecorator(
  (_: undefined, context: ExecutionContext): UserWithRolesAndOrganizations => {
    const request = context.switchToHttp().getRequest();
    const user = request.user;
    return user;
  },
);
Но вы можете перенести свой request.user.id на охрану.

 20.03.2024 23:43
 Ответ принят как подходящий
Оооо... (Я мог бы пропустить некоторые импортные операции для краткости, надеюсь, это нормально).

Прежде всего:

Внедрите запрос в конструктор контроллера, чтобы сделать его глобально доступным для методов контроллера без использования декораторов параметров:

import { Controller, Get, Inject } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import type { Request } from 'express';


@UseGuards(JwtAuthGuard)
@Controller()
export class DeviceLocationsController {
  constructor(@Inject(REQUEST) private request: Request) {}
}
Подробнее об этом: https://docs.nestjs.com/fundamentals/injection-scopes#request-provider

Во-вторых, какую версию NestJS вы используете?

Кстати, в Nest 10 express.Request есть user определение из коробки. Просто не забудьте импортировать этот тип из express.

Если у вас там нет user, определите его в файле d.ts (например, src/request.d.ts):

export {}

declare global {
  namespace Express {
    export interface Request {
      user?: IUserInRequest;
    }
  }
}
В-третьих:

Если говорить о простоте и чистоте кода, то эта часть:

const user: User = await this.userService.findOne(request.user.id);
createDeviceLocationDto.user = user;
return this.deviceLocationsService.create(createDeviceLocationDto);
можно легко изменить на:

return this.deviceLocationService.create(createDeviceLocationDto, user);
где deviceLocationService имеет привязку для службы, которая может разрешить пользователя. Но! Действительно ли нужно иметь полного пользователя или, может быть, просто идентификатор пользователя?

Помните, что для получения токена JWT пользователь должен быть найден в базе данных, поэтому всякий раз, когда токен JWT действителен, это означает, что пользователю разрешено получить этот токен, и нет необходимости повторно получать его данные. В этом вся идея токенов JWT — ограничить количество вызовов БД до абсолютного минимума.

Если необходимы другие свойства пользователя, кроме свойств по умолчанию, сохраненных в запросе, просто сделайте их доступными в request.user, обновив метод canActivate в JwtAuthGuard примерно так:

const userInPayload = await this.jwtService.verifyAsync(token, {
    secret: 'wlazlkoteknaplotek',
});

const userData  = await this.userService.findOneOrThrow(userInPayload);

// id: 123, language: is-IS, etc.

request.user = payload; // to make language available in request.user
Если у вас по-прежнему возникают проблемы с вводом текста, расширьте запрос в d.ts, как указано выше :)

**Дополнительные комментарии :) **

Не обновляйте DTO в контроллере. Вместо этого передайте DTO и другие вещи в сервис отдельно. Это облегчит отладку кода (1), (2) лучшую типизацию — вам не нужно создавать отдельные типы для DTO без пользователя, который используется методом контроллера, и DTO с пользователем, который используется службой.
Кстати говоря, у вас есть тип DTO, который включает user: User. Это неправильно, потому что в теле запроса нет User, поэтому create(@Body() createDeviceLocationDto: CreateDeviceLocationDto) вызывает проблему небезопасности типов.
Что касается хранения пользователя в базе данных — нет абсолютно никакой причины передавать полную информацию о пользователе в хранилище пользователей. Независимо от того, используете ли вы реляционную базу данных или базу данных NoSQL, вам нужен только идентификатор пользователя. Таким образом, асинхронный вызов базы данных для поиска пользователя только для передачи полного пользователя в другой репозиторий, где он в любом случае, вероятно, будет возвращен к идентификатору пользователя, это излишество для ресурсов и для организации кода :) Это все, что вам нужно:
const { user } = this.request;
return this.deviceService.create(dto, user);
 20.03.2024 23:55
Бритва Оккама. Не умножайте декораторы по необходимости :)

@Req сам является декоратором. Нет никакой разницы, используете ли вы @Req или собственный декоратор. На самом деле, использование здесь собственного декоратора = больше декораторов, больше кода, больше строк для отладки и поддержки.
user есть в запросе. Итак, цель состоит в том, чтобы найти способ получить его из запроса. Вы можете использовать @Req, но если вы не хотите вызывать его снова и снова, специальный декоратор ничего не решит. Количество вызываемых декораторов - остается прежним. Внедрить запрос в конструктор :)


Как избежать множественного вызова токена обновления, если есть несколько вызовов API, которые становятся неавторизованными, поскольку срок действия токена доступа истек
Вопросы
ANGULAR
Как избежать множественного вызова токена обновления, если есть несколько вызовов API, которые становятся неавторизованными, поскольку срок действия токена доступа истек
Я пытаюсь реализовать аутентификацию с помощью токена доступа и обновления JWT для веб-сайта архива. Здесь во время вызова токена обновления он в некоторой степени аутентифицируется, но не очень эффективен, как показано на изображении ниже: при нескольких вызовах API токен обновления также вызывается несколько раз, а последний аутентифицируется и сеанс обновляется. Я хочу избежать и просто иметь один вызов обновления после аутентификации, а затем хочу, чтобы он продолжил вызовы API.

Изображение нескольких звонков

Ниже приведен код, который я пробовал на данный момент. Что касается структуры, у меня есть перехватчик аутентификации, который перехватывает запросы и добавляет заголовки для аутентификации в серверной части. Другой перехватчик ошибок перехватывает ошибки Http. Если возникает ошибка 401, он перехватывает ее, и функция обновления вызывается для обработки стратегии обновления токена.

Перехватчик аутентификации:

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private storage: StorageService, private authService: AuthService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const storedTokens = this.authService.getTokens()    
    if (storedTokens.access_token && !request.url.includes('/auth/refresh') ) {
      const cloned = request.clone({
        headers: request.headers.set("Authorization", storedTokens.access_token)
      });
      return next.handle(cloned);
    }
    else if (storedTokens.refresh_token && request.url.includes('/auth/refresh')){
      const cloned = request.clone({
        headers: request.headers.set("Authorization", storedTokens.refresh_token)
      });
      return next.handle(cloned);
    }
    else {
      return next.handle(request);
    }
  }
}
Перехватчик ошибок:

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private router: Router, private authService: AuthService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          // Access token has expired, attempt to refresh token
          return this.authService.refresh().pipe(
            switchMap(() => {
              const storedTokens = this.authService.getTokens()
              const updatedRequest = request.clone({
              headers: request.headers.set("Authorization", `${storedTokens.access_token}`)
              });
              return next.handle(updatedRequest);
            }),
            catchError((refreshError: any) => {
              // Token refresh failed or refresh token is invalid
              // Redirect user to login page
              this.authService.logout();
              return throwError(refreshError);
            })
          );
        } else if (error.status === 403) {
          // Unauthorized, redirect to login page
          this.authService.logout();
        }
        return throwError(() => new Error(error.message));
      })
    );
  }
}
 20.03.2024 14:29
0
0
126
3
Данный вопрос помечен как решенный
 Ответы 3
Я думаю, это потому, что срок действия токена истек, а компонент все еще использует несколько API (не API аутентификации). Итак, после того, как вы получите ошибку 401, перехватчик обратится к API для токена обновления, и в то же время компонент обращается к нескольким API в ngOnInit.

Для решения, я думаю, можно попробовать два варианта:

Сначала создайте глобальное состояние для проверки или проверки токена, что означает, что срок действия токена не истек и он действителен. Затем оберните функцию hit API, чтобы она выполнялась только в том случае, если токен действителен.

  getProductList(): void {
   if (isValidToken) {
     this.serviceName.hitApi().subscribe...;
    }
  }
Во-вторых, назначьте функцию обращения API к переменной с типом подписки и отмените ее подписку, отменяя повторяющиеся HTTP-вызовы в сети, например:

  getProductList(): void {
   this.$subscription?.unsubscribe()
   this.$subscription = this.serviceName.hitApi().subscribe...;
  }
Я надеюсь, что это поможет вам. Спасибо.

 20.03.2024 16:42
 Ответ принят как подходящий
Используйте оператор rxjs share() всякий раз, когда вы хотите сделать один http-вызов для потенциально нескольких вызывающих/подписчиков метода. Используйте одноэлементный сервис для хранения общего наблюдаемого.

HTTP-сервис:

refreshTokenObservable?: Observable<unknown>;
refreshToken(): Observable<unknown> {
    if (this.refreshTokenObservable) {
      return this.refreshTokenObservable;
    }

    this.refreshTokenObservable = this.authService.refresh()
      .pipe(share());

    return this.refreshTokenObservable;
}
Перехватчик ошибок:

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private router: Router, private authService: AuthService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          // Access token has expired, attempt to refresh token
          return this.httpService.refreshToken().pipe(
            switchMap(() => {
              const storedTokens = this.authService.getTokens()
              const updatedRequest = request.clone({
              headers: request.headers.set("Authorization", `${storedTokens.access_token}`)
              });
              return next.handle(updatedRequest);
            }),
            catchError((refreshError: any) => {
              // Token refresh failed or refresh token is invalid
              // Redirect user to login page
              this.authService.logout();
              return throwError(refreshError);
            })
          );
        } else if (error.status === 403) {
          // Unauthorized, redirect to login page
          this.authService.logout();
        }
        return throwError(() => new Error(error.message));
      })
    );
  }
}
 20.03.2024 17:46
Принятый ответ работает только для первого раунда токена обновления, для второй попытки и далее он не будет работать, поскольку RefreshTokenObservable не будет иметь значение NULL. Чтобы решить эту проблему, нам нужно будет перераспределить RefreshTokenObservable, как только он обнаружит, что предыдущая наблюдаемая выполнена.

По этой ссылке показано, как отслеживать ход наблюдаемой путем добавления логического значения.

конечный результат Http-сервиса:

refreshTokenObservable?: Observable<unknown>;
inProgress: boolean = false;

refreshToken(): Observable<unknown> {
    if (this.refreshTokenObservable && this.inProgress) {
      return this.refreshTokenObservable;
    }

    this.inProgress = true;
    this.refreshTokenObservable = this.authService.refresh().pipe(
        share(),
        map(res => {
            this.inProgress = false;
            return res;
        })
    );

    return this.refreshTokenObservable;
}
Надеюсь это поможет.


Nest.js с Drizzle ORM
Вопросы
POSTGRESQL
Nest.js с Drizzle ORM
Есть ли более элегантные способы использования Drizzle ORM в Nest.js, кроме провайдеров? Например, как и в Prisma с PrismaService, я нашел только таких поставщиков, как:

import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from './schema';

export const PG_CONNECTION = "PG_CONNECTION"; // ignore that it is not separate file

@Module({
  providers: [
    {
      provide: PG_CONNECTION,
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => {
        const connection = postgres(config.get("DATABASE_URL"));
        return drizzle(connection, { schema });
      },
    },
  ],
  exports: [PG_CONNECTION],
})
export class DrizzleModule {}
а потом:

import { Inject, Injectable } from '@nestjs/common';
import { PG_CONNECTION } from '../drizzle/drizzle.module';
import { dbType } from 'drizzle-orm/postgres-js'; // ignore, it doesn't matter yet
import * as schema from '../drizzle/schema';

@Injectable()
export class UsersService {
  constructor(@Inject(PG_CONNECTION) private drizzle: dbType<typeof schema>) {} // what I'm talking about

  async findAll() {
    return await this.drizzle.query.users.findMany();
  }
}
о чем я говорю, мы должны каждый раз вводить (провайдер?) импортировать константу и вводить из клиента БД вместо этого:

import { Inject, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service'

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return await this.prisma.users.findMany();
  }
}
Я пытался найти решение, но, похоже, эта тема действительно не популярна. Я ожидал, что у такого большого сообщества Nest.js и Drizzle ORM будет хорошее решение для использования Drizzle с Nest.

 16.03.2024 12:25
2
0
3 164
3
Данный вопрос помечен как решенный
 Ответы 3
 Ответ принят как подходящий
Вы можете создать свой собственный класс-оболочку вокруг токена инъекции PG_CONNECTION. Что-то вроде

@Injectable()
export class DrizzleService {
  constructor(@Inject(PG_CONNECTION) readonly db: dbType<typeof schema>) {}
}
И теперь вместо экспорта токена PG_CONNECTION из вашего DrizzleModule вы экспортируете DrizzleService. Это позволит вам использовать то же самое private readonly drizzle: DrizzleService, что и prisma, а затем получить доступ this.drizzle.db для доступа к вашей типизированной базе данных внутри других провайдеров.

 16.03.2024 17:12
дождь не дает класса. Но мы можем использовать drizzle как класс.

Обратите внимание, что нам нужно изменить цепочку прототипов, чтобы не допустить вызова onMoudleInit.

import { drizzle } from 'drizzle-orm/postgres-js';
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import * as postgres from 'postgres';
import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as schema from './schema';

type DrizzleFn = typeof drizzle<typeof schema>;
const Drizzle = drizzle as unknown as {
  new (...args: Parameters<DrizzleFn>): ReturnType<DrizzleFn>;
};

@Injectable()
export class DrizzleService
  extends Drizzle
  implements OnModuleInit, OnModuleDestroy
{
  private client: ReturnType<typeof postgres>;
  private migrationClient: ReturnType<typeof postgres>;

  constructor(private configService: ConfigService) {
    const dbUrl = configService.get('DATABASE_URL');
    const client = postgres(dbUrl);
    const migrationClient = postgres(dbUrl, {
      max: 1,
    });
    super(client, { schema, logger: true });
    this.client = client;
    this.migrationClient = migrationClient;
    Object.setPrototypeOf(Object.getPrototypeOf(this), DbService.prototype);
  }

  async onModuleInit() {
    await migrate(drizzle(this.migrationClient, { schema, logger: true }), {
      migrationsFolder: './drizzle',
      migrationsSchema: 'public',
    });
    this.migrationClient.end();
  }

  async onModuleDestroy() {
    await Promise.all([this.migrationClient.end(), this.client.end()]);
  }
}
 09.05.2024 05:27
У меня был немного более простой подход, который не требовал особых усилий. Вот пример того, как я это сделал.

'database.service.ts':

import { Injectable, OnModuleInit } from '@nestjs/common';

import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import { db, DatabaseType } from 'drizzle/db';

import {
  difficultyEnum,
  topicTagEnum,
  badgeEnum,
} from 'drizzle/schema/enums/enums';
import * as schema from '../drizzle/schema';

@Injectable()
export class DatabaseService implements OnModuleInit {
  private db: DatabaseType;

  constructor() {
    this.db = db;
  }

  async onModuleInit() {
    try {
      const sql = neon(process.env.DB_URL as string);
      this.db = drizzle(sql, {
        schema,
        logger: true,
      });

      console.info('Database connected successfully');
    } catch (error) {
      console.error('Failed to connect to the database', error);
      throw error;
    }
  }

  getDb() {
    return this.db;
  }
}
'database.module.ts':

import { Module } from '@nestjs/common';
import { DatabaseService } from './database.service';

@Module({
  providers: [DatabaseService],
  exports: [DatabaseService], // As we want to share an instance of the 'DatabaseService' between several other modules, we need to export the 'DatabaseService' provider.
})
export class DatabaseModule {}
'app.module.ts':

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuestionsModule } from './questions/questions.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    QuestionsModule,
    DatabaseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
'questions.module.ts':

import { Module } from '@nestjs/common';
import { QuestionsService } from './questions.service';
import { QuestionsController } from './questions.controller';
import { DatabaseModule } from 'src/database/database.module';

// This is a feature module
@Module({
  imports: [DatabaseModule], // This means 'QuestionsModule' can use any providers (service) that 'DatabaseModule' exports.
  controllers: [QuestionsController], // This is the controller that handles incoming HTTP requests related to questions (like fetching, adding, or deleting questions).
  providers: [QuestionsService], // This is included as a provider which is responsible for the business logic, such as interacting with the database to manage questions.
})
export class QuestionsModule {}
'questions.service.ts':

import { Injectable } from '@nestjs/common';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';

import { eq } from 'drizzle-orm';
import { DatabaseService } from 'src/database/database.service';

import {
  questionTable,
  QuestionTableType,
  NewQuestionTableType,
} from '../../drizzle/schema/models/question.model';
import { TopicTagType } from 'drizzle/schema/enums/enums';

@Injectable()
export class QuestionsService {
  // This is a default constructor
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createQuestionDto: CreateQuestionDto) {
    return 'This action adds a new question';
  }

  // GET all questions
  async findAllQuestions(): Promise<QuestionTableType[]> {
    console.info('question.services.ts findAllQuestions() called'); // debug

    try {
      const fetchedQuestions = await this.databaseService
        .getDb()
        .query.questionTable.findMany();

      console.info(
        `Database Fetch: Retrieved ${fetchedQuestions.length} questions.`,
        fetchedQuestions,
      ); // debug

      return fetchedQuestions as QuestionTableType[];
    } catch (error) {
      console.error('Error fetching questions from database:', error);
      throw new Error('Error fetching questions from database');
    }
  }

  async findQuestionById(
    questionId: number,
  ): Promise<QuestionTableType | null> {
    console.info('question.services.ts findQuestionById() called'); // debug

    try {
      const fetchedQuestion: QuestionTableType | undefined =
        await this.databaseService.getDb().query.questionTable.findFirst({
          where: eq(questionTable.id, questionId),
        });

      // Guard clause
      if (!fetchedQuestion) {
        console.error('Question not found in database');
        return null;
      }

      console.info('Database Fetch: Retrieved question:', fetchedQuestion); // debug

      return fetchedQuestion;
    } catch (error) {
      console.error('Error fetching question from database:', error);
      throw new Error('Error fetching question from database');
    }
  }

  async findQuestionsByTopic(
    topic: TopicTagType,
  ): Promise<QuestionTableType[]> {
    console.info('question.services.ts findQuestionsByTopic() called'); // debug

    try {
      const fetchedQuestions: QuestionTableType[] = await this.databaseService
        .getDb()
        .query.questionTable.findMany({
          where: eq(questionTable.topicTag, topic),
        });

      // Guard clause
      if (!fetchedQuestions) {
        console.error('Questions not found in database');
        return null;
      }

      console.info(
        `Database Fetch: Retrieved ${fetchedQuestions.length} questions by topic ${topic}`,
        fetchedQuestions,
      ); // debug

      return fetchedQuestions;
    } catch (error) {
      console.error('Error fetching questions from database:', error);
      throw new Error('Error fetching questions from database');
    }
  }

  async update(id: number, updateQuestionDto: UpdateQuestionDto) {
    return `This action updates a #${id} question`;
  }

  async remove(id: number) {
    return `This action removes a #${id} question`;
  }
}
'questions.controller.ts':

import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
  NotFoundException,
  ValidationPipe,
  ParseIntPipe,
  ParseFloatPipe,
  ParseBoolPipe,
  ParseArrayPipe,
  ParseUUIDPipe,
  ParseEnumPipe,
  DefaultValuePipe,
  ParseFilePipe,
} from '@nestjs/common';
import { QuestionsService } from './questions.service';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';
import { topicTagEnum, TopicTagType } from '../../drizzle/schema/enums/enums';

import {
  QuestionTableType,
  NewQuestionTableType,
} from 'drizzle/schema/models/question.model';

@Controller('questions')
export class QuestionsController {
  constructor(private readonly questionsService: QuestionsService) {}

  // This is an example method decorator that defines a route handler for POST requests to the specified route.
  @Post()
  create(@Body() createQuestionDto: CreateQuestionDto) {
    return this.questionsService.create(createQuestionDto);
  }

  @Get()
  findAll(): Promise<QuestionTableType[]> {
    return this.questionsService.findAllQuestions();
  }

  @Get(':id')
  async findQuestionById(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<QuestionTableType> {
    const question = await this.questionsService.findQuestionById(id);

    // Guard clause
    if (!question) {
      throw new NotFoundException(`Question with ID ${id} not found.`);
    }
    
    return question;
  }

  // @Get('topic/:topic')
  // findQuestionsByTopic(
  //   @Param('topic', new ParseEnumPipe(topicTagEnum)) topic: TopicTagType,
  // ): Promise<QuestionTableType[]> {
  //   const questions = this.questionsService.findQuestionsByTopic(topic);

  //   // Guard clause
  //   if (!questions) {
  //     throw new NotFoundException(`Questions with topic ${topic} not found.`);
  //   }

  //   return questions;
  // }

  @Get('topic/:topic')
  findQuestionsByTopic(
    @Param('topic') topic: TopicTagType,
  ): Promise<QuestionTableType[]> {
    const questions = this.questionsService.findQuestionsByTopic(topic);

    // Guard clause
    if (!questions) {
      throw new NotFoundException(`Questions with topic ${topic} not found.`);
    }

    return questions;
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateQuestionDto: UpdateQuestionDto,
  ) {
    return this.questionsService.update(+id, updateQuestionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.questionsService.remove(+id);
  }
}
Как сейчас написано, ваш ответ неясен. Пожалуйста, отредактируйте , чтобы добавить дополнительную информацию, которая поможет другим понять, как это относится к заданному вопросу. Более подробную информацию о том, как писать хорошие ответы, вы можете найти в справочном центре.

— 
Community
 16.05.2024 06:30


В javascript, как переименовать несколько свойств огромного объекта
Вопросы
JAVASCRIPT
В javascript, как переименовать несколько свойств огромного объекта
У меня есть объект с более чем 120 полями, и я ищу способ преобразовать объект в новый объект.

Новый объект в основном идентичен оригиналу, за исключением того, что несколько полей переименованы, а несколько полей преобразованы в объект Date из времени в миллисекундах.

Оригинальный объект: type: Record<string, unknown> Образец значения:

{
  "id":12,
  ...
  "created_at":1577999390226497 // Time in milliseconds
}
Новый объект type: Custom Object

export class NewDto {
  client_id: number;
  ...
  client_created_at: Date;
  
}
Я пытался использовать нарезку, но это не работает. Образец кода:

  const newObject = {
    ...originalObject,
    id: client_id,
    created_at: convertToDate(created_at)
  } as NewDto;
 27.05.2023 19:30
0
8
71
3
Данный вопрос помечен как решенный
 Ответы 3
Вы должны использовать присваивание деструктурирования, чтобы переименовать свойство. Однако нет сокращенного способа применения функции к значению свойства; вы должны сделать это вручную.

const {id: client_id, ...rest} = originalObject;
const res: NewDto = {...rest, client_id, client_created_at: 
                          convertToDate(originalObject.created_at)};
 27.05.2023 19:38
 Ответ принят как подходящий
Учитывая, что у вас мало изменений, вы можете просто клонировать весь объект, а затем внести простые изменения.

function transformed(orig) {
    // Clone the original.
    let cloned = {...orig};
    // Add/Overwrite any changes
    cloned.client_id=orig.id;
    cloned.created_at=new Date(orig.created_at/1000);
    // Remove any renamed fields
    delete cloned.id;
    return cloned;
}
 27.05.2023 20:29
Предоставленный вами код близок к достижению желаемого преобразования, но есть несколько проблем, которые необходимо решить. Вот обновленная версия кода, которая должна работать:

const newObject: NewDto = {
  client_id: originalObject.id as number,
  ...originalObject,
  client_created_at: new Date(originalObject.created_at as number),
};
В этом коде мы явно указываем тип newObject как NewDto для обеспечения безопасности типов. Затем мы назначаем поле client_id, приведя originalObject.id к числу, поскольку originalObject.id имеет неизвестный тип. Затем мы используем оператор расширения (...), чтобы скопировать все поля из originalObject в newObject.

Наконец, мы назначаем поле client_created_at, преобразовывая метку времени в миллисекундах в объект Date с помощью конструктора Date.

Убедитесь, что у вас есть необходимые импорты и что класс NewDto определен правильно. С помощью этого кода вы сможете преобразовать исходный объект в новый объект с желаемым переименованием поля и преобразованием в объект Date.


Как очищать базу данных после каждого интеграционного теста в NestJS и TypeORM?
Вопросы
NODE.JS
Как очищать базу данных после каждого интеграционного теста в NestJS и TypeORM?
Я использовал TypeORMModule для предоставления конфигурации для DataSource:

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.${process.env.NODE_ENV}`,
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        return {
          type: 'postgres',
          // host has to be the container name of the database
          host: config.get<string>('POSTGRES_HOST'),
          port: parseInt(config.get('POSTGRES_PORT')),
          username: config.get<string>('POSTGRES_USER'),
          password: config.get<string>('POSTGRES_PASSWORD'),
          database: config.get<string>('POSTGRES_DB'),
          synchronize: true,
          entities: [User],
        };
      },
    }),
    UsersModule,
  ],
})
Как мне очистить базу данных для каждого теста?

 26.05.2023 15:46
0
0
50
3
Данный вопрос помечен как решенный
 Ответы 3
Вы можете написать служебную функцию, которая усекает все таблицы вашей базы данных:

async function clearDatabase(app: INestApplication): Promise<void> {
    const entityManager = app.get<EntityManager>(EntityManager);
    const tableNames = entityManager.connection.entityMetadatas
        .map((entity) => entity.tableName)
        .join(', ');

    await entityManager.query(
        `truncate ${tableNames} restart identity cascade;`,
    );
}
Затем в ваших тестовых файлах вам просто нужно будет вызвать эту функцию с помощью afterEach :

describe('Context', () => {
    let app: INestApplication;

    beforeAll(async () => {
        const appModule = await Test.createTestingModule({
            imports: [DatabaseModule],
        }).compile();

        app = appModule.createNestApplication();
        await app.init();
    });

    afterEach(async () => {
        await clearDatabase(app);
        await app.close();
    });
});
 27.05.2023 14:58
можете добавить

dropSchema: true
в конфиг Typeorm для теста.

 28.05.2023 10:35
 Ответ принят как подходящий
Я получил dataSource от app.get(DataSource) и применил удаление:

afterEach(async () => {
    const dataSource = app.get(DataSource);
    await dataSource.createQueryBuilder().delete().from(User).execute();
  });
Я попытался выполнить запрос на усечение, как рекомендовал @reginald, но это не сработало.

— 
cyclonejet
 28.05.2023 12:22


Ошибка: загрузчик ESM по умолчанию в приложении NestJS, созданный с помощью NX в монорепозитории, поддерживает только URL-адреса со схемой в файле и данных
Вопросы
NESTJS
Ошибка: загрузчик ESM по умолчанию в приложении NestJS, созданный с помощью NX в монорепозитории, поддерживает только URL-адреса со схемой в файле и данных
У меня есть монорепозиторий, созданный с помощью NX v16. У меня есть работающее приложение React внутри. Я создал приложение NestJS с помощью команды генератора nx из плагина NX VS Code, но в тот момент, когда я запускаю приложение Nest с помощью nx run <ny-app-name>:serve, я получаю эту ошибку: Error: Only URLs with a scheme in: file and data are supported by the default ESM loader. On Windows, absolute paths must be valid file:// URLs. Received protocol 'c:'. У меня нет этой проблемы с моим приложением React, только с приложением NestJS. У меня Windows 11, моя версия Node 18.16.0. Скорее всего, это проблема, связанная с Windows, но я понятия не имею, как ее преодолеть, и я ничего не понял из Интернета, когда искал такое исправление. Это мой контент package.json:

{
  "name": "my-nx-monorepo",
  "version": "0.1.0",
  "license": "MIT",
  "scripts": {
    "graph": "npx nx graph",
    "dashboard": "npx nx run dashboard:serve",
    "dashboard:lint": "npx nx run dashboard:lint",
    "dashboard:test": "npx nx run dashboard:test",
    "dashboard:build": "npx nx run dashboard:build",
    "connect-to-nx-cloud": "npx nx connect-to-nx-cloud"
  },
  "private": true,
  "dependencies": {
    "@nestjs/common": "^9.1.1",
    "@nestjs/core": "^9.1.1",
    "@nestjs/platform-express": "^9.1.1",
    "@swc/helpers": "~0.5.0",
    "@tanstack/react-query": "^4.29.5",
    "@tanstack/react-query-devtools": "^4.29.6",
    "@xstate/react": "^3.2.2",
    "axios": "^1.4.0",
    "clsx": "^1.2.1",
    "i18next": "^22.4.15",
    "i18next-browser-languagedetector": "^7.0.1",
    "normalize.css": "^8.0.1",
    "react": "18.2.0",
    "react-aria": "^3.24.0",
    "react-dom": "18.2.0",
    "react-i18next": "^12.2.2",
    "react-router-dom": "^6.11.1",
    "react-stately": "^3.22.0",
    "reflect-metadata": "^0.1.13",
    "rxjs": "^7.8.0",
    "tslib": "^2.3.0",
    "xstate": "^4.37.2"
  },
  "devDependencies": {
    "@babel/preset-react": "^7.14.5",
    "@nestjs/schematics": "^9.1.0",
    "@nestjs/testing": "^9.1.1",
    "@nx/cypress": "16.1.0",
    "@nx/eslint-plugin": "16.1.0",
    "@nx/jest": "16.1.4",
    "@nx/js": "16.1.4",
    "@nx/linter": "16.1.0",
    "@nx/nest": "16.1.4",
    "@nx/node": "16.1.4",
    "@nx/react": "16.1.0",
    "@nx/vite": "16.1.0",
    "@nx/webpack": "16.1.4",
    "@nx/workspace": "16.1.0",
    "@swc/cli": "~0.1.62",
    "@swc/core": "~1.3.51",
    "@tanstack/eslint-plugin-query": "^4.29.4",
    "@testing-library/react": "14.0.0",
    "@total-typescript/ts-reset": "^0.4.2",
    "@types/jest": "^29.4.0",
    "@types/node": "18.14.2",
    "@types/react": "18.0.28",
    "@types/react-dom": "18.0.11",
    "@typescript-eslint/eslint-plugin": "^5.58.0",
    "@typescript-eslint/parser": "^5.58.0",
    "@vitejs/plugin-react": "^3.0.0",
    "@vitest/coverage-c8": "^0.31.0",
    "@vitest/ui": "^0.31.0",
    "cypress": "^12.11.0",
    "eslint": "~8.15.0",
    "eslint-config-prettier": "8.1.0",
    "eslint-plugin-cypress": "^2.10.3",
    "eslint-plugin-import": "2.27.5",
    "eslint-plugin-jsx-a11y": "6.7.1",
    "eslint-plugin-react": "7.32.2",
    "eslint-plugin-react-hooks": "4.6.0",
    "jest": "^29.4.1",
    "jest-environment-node": "^29.4.1",
    "jsdom": "~20.0.3",
    "nx": "16.1.0",
    "nx-cloud": "latest",
    "prettier": "^2.6.2",
    "react-test-renderer": "18.2.0",
    "sass": "^1.55.0",
    "ts-jest": "^29.1.0",
    "ts-node": "10.9.1",
    "typescript": "~5.0.2",
    "vite": "^4.3.4",
    "vite-plugin-eslint": "^1.8.1",
    "vite-tsconfig-paths": "^4.0.2",
    "vitest": "^0.31.0"
  }
}

 12.05.2023 11:13
5
0
360
3
Данный вопрос помечен как решенный
 Ответы 3
Попробуйте перечислить серверный проект под определенным именем тега с помощью этой команды:

nx list [tag-name] --project=[project-name]
а затем попробуйте создать свой бэкэнд с помощью этой команды:

nx build [tag-name] --with-deps
--with-deps флаг для запуска команды для проекта и его зависимостей

 12.05.2023 14:07
 Ответ принят как подходящий
Я только что узнал, что это конкретная ошибка, связанная с NX v16.1.4, которую команда NX исправила, но еще не выпустила. Решение, которое они предлагают, и оно достаточно хорошее, состоит в том, чтобы понизить версию пакетов monorepo nx с версии 16.1.4 до версии 16.1.0. Это работает, я только что проверил это, и все работает правильно. Они добавят свое исправление в будущем выпуске.

 12.05.2023 14:25
Я также пробовал только что обновить все пакеты nx и nrwl с версии 16.1.4 до версии 16.1.0, у меня это работает. Версия узла — 16.20 НПМ-8.19.4 Типскрипт — 4.8.2


Nest.js — создать индекс в схеме мангуста
Вопросы
NODE.JS
Nest.js — создать индекс в схеме мангуста
Как создать индекс свойства в схеме мангуста с помощью Nest.js?

Я попытался добавить индекс в качестве параметра свойства, но индекс не был создан:

@Schema()
export class Schema extends Document {

  @Prop()
  _id: string;

  @Prop({required: true, index: true})
  type: string;

  @Prop()
  creationDate: string;

  @Prop()
  name: string;
}

export const MySchema = SchemaFactory.createForClass(Schema);
Я тоже пробовал так:

export const MySchema = SchemaFactory.createForClass(Schema).index({ type: 1 });
Оба не работают должным образом.

Как это сделать?

Спасибо

 23.12.2020 09:58
4
3
9 873
3
Данный вопрос помечен как решенный
 Ответы 3
 Ответ принят как подходящий
Используйте следующую опцию для создания индекса

    @Schema({useCreateIndex: true})
    export class Schema extends Document {
    
      @Prop()
      _id: string;
    
      @Prop({required: true, index: true})
      type: string;
    
      @Prop()
      creationDate: string;
    
      @Prop()
      name: string;
    }

export const MySchema = SchemaFactory.createForClass(Schema);
используйте флаг useCreateIndex при определении схемы

или глобально установить такой же флаг при создании объекта соединения

 {
  uri: `....`,
  user: ,
  pass: ,
  //useNewUrlParser: true,
  useCreateIndex: true,
  //useUnifiedTopology: true,
  //useFindAndModify: false,
  retryAttempts: 3
}
Также добавлены другие флаги с комментариями, которые могут потребоваться.

 24.12.2020 10:30
Это работает для меня

export const MySchema = SchemaFactory.createForClass(Schema);
MySchema.index({ type: 1 }, { unique: true });
То же самое можно расширить и для составного индекса, например:

MySchema.index({ type: 1, name: 1 }, { unique: true });
 21.02.2021 16:05
Если кто-то пришел сюда в поисках того, как добавить индекс для геолокации/2dsphere, как и я, вы можете использовать следующее в NestJs.

@Prop({ index: "2dsphere" })
Также, когда вы настраиваете модуль мангуста, добавьте useCreateIndex: true.

MongooseModule.forRootAsync({
 useFactory: async (config: ConfigService) => ({
   uri: config.get('mongo_url'),
   useNewUrlParser: true,
   useCreateIndex: true,
 }),
 inject: [ConfigService],
})


Как расширить более одного класса dto в Nestjs
Вопросы
JAVASCRIPT
Как расширить более одного класса dto в Nestjs
Я новичок в nest.js и у меня есть вопрос по этому поводу.

Я хочу расширить более одного Dto к моему основному dto классу, но я знаю, что невозможно расширить более 2 dto классов. У вас есть идеи, как это сделать?

Вот мой основной dto класс:

export class CarDto extends PickupLocationDto {
  @ApiProperty({ example: 'Aventador', description: 'The car name' })
  readonly modelName: string;
}
В последнее время я могу расширить его только из класса PickupLocationDto, но я хочу расширить еще один класс dto до этого класса CarDto.

Любая помощь приветствуется.

 23.12.2020 07:51
2
1
5 650
3
Данный вопрос помечен как решенный
 Ответы 3
Для этого вы можете использовать mapped-types, сначала вам нужно установить пакет (yarn add @nestjs/mapped-types), а затем использовать IntersectionType вот так:

import { IntersectionType } from '@nestjs/mapped-types';

export class Dto3 extends IntersectionType(
  Dto1,
  Dto2,
) {}
 23.12.2020 08:02
 Ответ принят как подходящий
Поскольку я использую swagger, использование пакета @nestjs/mapped-types не показывает все переменные из пересекающихся dtos. поэтому я использую IntersectionType из swagger

import { ApiProperty, IntersectionType } from '@nestjs/swagger';

export class Dto3 extends IntersectionType(
  Dto1,
  Dto2,
) {}
 28.01.2021 15:41
Вы также можете использовать ключевое слово extend для расширения класса DTO.

    export class Dto3 extends Dto1 {
      public readonly dtoField: Dto2;
    }



Использование сервисов внутри скрипта NestJS запускается из командной строки
Вопросы
TYPESCRIPT
Использование сервисов внутри скрипта NestJS запускается из командной строки
Я знаю, как запустить скрипт из командной строки, используя npm или npx ts-node [script.ts], как указано здесь.

Мой вопрос в другом: теперь, когда я могу запускать сценарии, могу ли я использовать службы, которые находятся внутри модулей в моем проекте? Допустим, у меня есть такая структура, которую обычно вызывают внутри проекта другие модули:

foo/foo.module.ts

import { HttpModule, Module } from '@nestjs/common';

@Module({
  providers: [FooService],
  imports: [HttpModule],
  exports: [FooService]
})
export class FooModule { }
foo/foo.service.ts

import { HttpService, Injectable } from '@nestjs/common';

@Injectable()
export class FooService {
    constructor(
        private readonly httpService: HttpService,
    ) {}

    bar() {
        console.info('do stuff');
    }
}
как я могу вызвать bar() внутри файла /src/script.ts, а затем вызвать npx ts-node script.ts, сохранив весь импорт? Спасибо.

 11.12.2020 12:37
14
2
6 942
3
Данный вопрос помечен как решенный
 Ответы 3
Как правило, для использования службы необходимо создать экземпляр класса службы. Nest обычно делает это как часть NestFactory.create. Что вы можете сделать, это что-то вроде этого:

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(FooModule);
  const service = app.get<FooService>(FooService); // this sets the type of service and gets the instance
  service.bar();
  await app.close();
}
Теперь все, что вам нужно, это скомпилировать файлы и запустить их с помощью node, как обычно на сервере.

 11.12.2020 20:18
 Ответ принят как подходящий
Допустим, у вас есть такой модуль приложения:

import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    UsersModule,
  ],
})
export class ApplicationModule {}

И UserService, используемый UsersModule таким образом:

import { Module } from '@nestjs/common';

@Module({
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
И вы хотите создать команду для создания нового пользователя прямо из командной строки.

Вы можете создать файл с именем console.ts и поместить в него следующее содержимое:

import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './application.module';
import { UsersService } from './users/users.service';

async function bootstrap() {
  const application = await NestFactory.createApplicationContext(
    ApplicationModule,
  );

  const command = process.argv[2];

  switch (command) {
    case 'create-administrator-user':
      const usersService = application.get(UsersService);
      await usersService.create({
        username: 'administrator',
        password: 'password',
      });
      break;
    default:
      console.info('Command not found');
      process.exit(1);
  }

  await application.close();
  process.exit(0);
}

bootstrap();
И теперь в вашем package.json вы можете создать следующий скрипт:

"execute": "ts-node ./src/console.ts"
Теперь у вас есть возможность вызывать пользовательскую команду в контексте NestJS, как в следующем примере:

// Using Yarn
yarn execute create-administrator-user

// Using NPM
npm run execute create-administrator-user
 31.12.2020 15:48
Чтобы добавить к ответу @Emanuele. Если у вас есть проблема с относительным путем src/[...], то вместо запуска скрипта с ts-node попробуйте запустить его со следующим "узел -r ts-узел/зарегистрировать -r tsconfig-пути/зарегистрировать путь_к_скрипту"

Как сейчас написано, ваш ответ неясен. Пожалуйста, отредактируйте , чтобы добавить дополнительные сведения, которые помогут другим понять, как это отвечает на заданный вопрос. Вы можете найти больше информации о том, как писать хорошие ответы в справочном центре.

— 
Community
 11.08.2022 06:47


Я не могу использовать пакет Websocket на NestJS
Вопросы
JAVASCRIPT
Я не могу использовать пакет Websocket на NestJS
Я пытаюсь работать с веб-сокетами на Nestjs, я устанавливаю зависимости

yarn add @nestjs/websockets @nestjs/platform-socket.io

Я создал пример ресурса для веб-сокетов

nest g res messagesWs --no-spec

Затем это сообщение появляется в моем терминале

TypeError: this.metadataScanner.getAllMethodNames не является функцией

Это захват из задачи

Что я могу сделать? ПД: извините за мой плохой английский

Я ищу эту функцию getAllMethodNames, но ничего не получил

 07.02.2023 16:16
0
1
968
3
Данный вопрос помечен как решенный
 Ответы 3
Я возвращаюсь к В.

"@nestjs/platform-socket.io": "^7.6.15",
"@nestjs/websockets": "^7.6.15",
работает

 07.02.2023 17:15
Это работает для меня, выполните следующие действия:

удалить папку node_modules
из package.json удалить ^ перед номером версии
установка нпм
 08.02.2023 10:57
 Ответ принят как подходящий
У меня такая же проблема. Я решил это, понизив несколько версий.

От

"@nestjs/platform-socket.io": "9.3.6", "@nestjs/websockets": "9.3.6"

к

"@nestjs/platform-socket.io": "9.1.6", "@nestjs/websockets": "9.1.6"


Асинхронное ожидание не ждет
Вопросы
TYPESCRIPT
Асинхронное ожидание не ждет
Я пытаюсь перебрать массив и для каждого идентификатора обновить модель, а затем отправить результат в другой массив.

это мой код:

async function getSortedAnimals() {
  var i = 0;
  var sortedAnimals = [];
  ids.forEch(async (id) => {
    i++;
    const animal = await this.animalModel.findOneAndUpdate(
      { _id: id },
      {
        $set: {
          order: i,
        },
      },
    );
    sortedAnimals.push(animal);
  });
  console.info(sortedAnimals);
  return sortedAnimals;
} //function

когда я консольный журнал, массив пуст, я не знаю, почему! это похоже на то, что он не ждет окончания цикла.

какие-либо предложения ?

 23.12.2022 18:37
2
4
76
3
Данный вопрос помечен как решенный
 Ответы 3
 Ответ принят как подходящий
Поскольку вы регистрируете массив, прежде чем помещать в него объекты

Итерации являются асинхронными, но не глобальным циклом, однако вы можете использовать for await

var sortedAnimals = [];
var i = 0;

for await (const id of ids) {            
    i++;
    const animal = await this.animalModel.findOneAndUpdate(
        { _id: id },
        { 
            $set: {
               order: i,
            },
        );

    i++;
}

console.info(sortedAnimals)
 23.12.2022 18:40
Обещания результата игнорируются в конструкции forEach. Вы можете заменить его на for...of, как показано ниже:

async function getSortedAnimals() {
    const ids = [1,2,3];
    const sortedAnimals = [];
    for (const id of ids) {
        const animal = await findOneAndUpdate(
            {_id: id}
        );
        sortedAnimals.push(animal);
    }
    console.info(sortedAnimals);
}

async function findOneAndUpdate(o) {
    return o._id + 1;
}

getSortedAnimals();
 23.12.2022 18:46
Поскольку во всех ответах говорится, что forEach игнорирует Promise (async/await). Это обычная ситуация в Javascript. Я хотел бы предложить использовать Promise.all и Array.map вместо цикла for..of.

const findOneAndUpdate = async (id) => {
  return await this.animalModel.findOneAndUpdate(
    { _id: id },
    {
      $set: { order: i },
    }
  )
} 
const getSortedAnimals = async () => {
  const sortedAnimals = ids.map(async id => await findOneAndUpdate(id))
  return await Promise.all(sortedAnimals)
}


Почему горячая перезагрузка не работает в моем многоэтапном проекте NestJS/Docker-Compose?
Вопросы
DOCKER
Почему горячая перезагрузка не работает в моем многоэтапном проекте NestJS/Docker-Compose?
Горячая перезагрузка не работает. API не обновляется после сохранения изменений в коде. Вот код:

https://codesandbox.io/s/practical-snowflake-c4j6fh

При сборке (docker-compose up -V --build) я получаю следующие сообщения на терминале:

2022-12-16 09:29:53 redis                | 1:C 16 Dec 2022 12:29:53.411 # oO0OoO0OoO0Oo Redis is starting oO0OoO0OoO0Oo</br>2022-12-16 09:29:53 redis                | 1:C 16 Dec 2022 12:29:53.411 # Redis version=7.0.6, bits=64, commit=00000000, modified=0, pid=1, just started</br>2022-12-16 09:29:53 redis                | 1:C 16 Dec 2022 12:29:53.411 # Warning: no config file specified, using the default config. In order to specify a config file use redis-server /path/to/redis.conf</br>2022-12-16 09:29:53 redis                | 1:M 16 Dec 2022 12:29:53.411 * monotonic clock: POSIX clock_gettime</br>2022-12-16 09:29:53 redis                | 1:M 16 Dec 2022 12:29:53.411 * Running mode=standalone, port=6379.</br>2022-12-16 09:29:53 redis                | 1:M 16 Dec 2022 12:29:53.411 # Server initialized</br>2022-12-16 09:29:53 redis                | 1:M 16 Dec 2022 12:29:53.411 # WARNING Memory overcommit must be enabled! Without it, a background save or replication may fail under low memory condition. Being disabled, it can can also cause failures without low memory condition, see https://github.com/</br>jemalloc/jemalloc/issues/1328. To fix this issue add 'vm.overcommit_memory = 1' to /etc/sysctl.conf and then reboot or run the command 'sysctl vm.overcommit_memory=1' for this to take effect.</br>2022-12-16 09:29:53 redis                | 1:M 16 Dec 2022 12:29:53.412 * Ready to accept connections</br>2022-12-16 09:29:53 postgres             | The files belonging to this database system will be owned by user "postgres".</br>2022-12-16 09:29:53 postgres             | This user must also own the server process.</br>2022-12-16 09:29:53 postgres             | </br>2022-12-16 09:29:53 postgres             | The database cluster will be initialized with locale "en_US.utf8".</br>2022-12-16 09:29:53 postgres             | The default database encoding has accordingly been set to "UTF8".</br>2022-12-16 09:29:53 postgres             | The default text search configuration will be set to "english".</br>2022-12-16 09:29:53 postgres             | </br>2022-12-16 09:29:53 postgres             | Data page checksums are disabled.</br>2022-12-16 09:29:53 postgres             | </br>2022-12-16 09:29:53 postgres             | fixing permissions on existing directory /var/lib/postgresql/data ... ok</br>2022-12-16 09:29:53 postgres             | creating subdirectories ... ok</br>2022-12-16 09:29:53 postgres             | selecting dynamic shared memory implementation ... posix</br>2022-12-16 09:29:53 postgres             | selecting default max_connections ... 100</br>2022-12-16 09:29:53 postgres             | selecting default shared_buffers ... 128MB</br>2022-12-16 09:29:53 postgres             | selecting default time zone ... Etc/UTC</br>2022-12-16 09:29:53 postgres             | creating configuration files ... ok</br>2022-12-16 09:29:53 postgres             | running bootstrap script ... ok</br>2022-12-16 09:29:54 postgres             | performing post-bootstrap initialization ... ok</br>2022-12-16 09:29:54 postgres             | initdb: warning: enabling "trust" authentication for local connections</br>2022-12-16 09:29:54 postgres             | You can change this by editing pg_hba.conf or using the option -A, or</br>2022-12-16 09:29:54 postgres             | --auth-local and --auth-host, the next time you run initdb.</br>2022-12-16 09:29:54 postgres             | syncing data to disk ... ok</br>2022-12-16 09:29:54 postgres             | </br>2022-12-16 09:29:54 postgres             | </br>2022-12-16 09:29:54 postgres             | Success. You can now start the database server using:</br>2022-12-16 09:29:54 postgres             | </br>2022-12-16 09:29:54 postgres             |     pg_ctl -D /var/lib/postgresql/data -l logfile start</br>2022-12-16 09:29:54 postgres             | </br>2022-12-16 09:29:54 postgres             | waiting for server to start....2022-12-16 12:29:54.305 UTC [48] LOG:  starting PostgreSQL 12.13 (Debian 12.13-1.pgdg110+1) on x86_64-pc-linux-gnu, compiled by gcc (Debian 10.2.1-6) 10.2.1 20210110, 64-bit</br>2022-12-16 09:29:54 postgres             | 2022-12-16 12:29:54.311 UTC [48] LOG:  listening on Unix socket "/var/run/postgresql/.s.PGSQL.5432"</br>2022-12-16 09:29:54 store-backend-api-1  | </br>2022-12-16 09:29:54 store-backend-api-1  | > store-backend@0.0.1 start:dev</br>2022-12-16 09:29:54 store-backend-api-1  | > nest start --watch</br>2022-12-16 09:29:54 store-backend-api-1  | </br>2022-12-16 09:29:54 postgres             | 2022-12-16 12:29:54.338 UTC [49] LOG:  database system was shut down at 2022-12-16 12:29:54 UTC</br>2022-12-16 09:29:54 postgres             | 2022-12-16 12:29:54.345 UTC [48] LOG:  database system is ready to accept connections</br>2022-12-16 09:29:54 postgres             |  done</br>2022-12-16 09:29:54 postgres             | server started</br>2022-12-16 09:29:54 postgres             | </br>2022-12-16 09:29:54 postgres             | /usr/local/bin/docker-entrypoint.sh: ignoring /docker-entrypoint-initdb.d/*</br>2022-12-16 09:29:54 postgres             | </br>2022-12-16 09:29:54 postgres             | 2022-12-16 12:29:54.434 UTC [48] LOG:  received fast shutdown request</br>2022-12-16 09:29:54 postgres             | waiting for server to shut down....2022-12-16 12:29:54.444 UTC [48] LOG:  aborting any active transactions</br>2022-12-16 09:29:54 postgres             | 2022-12-16 12:29:54.445 UTC [48] LOG:  background worker "logical replication launcher" (PID 55) exited with exit code 1</br>2022-12-16 09:29:54 postgres             | 2022-12-16 12:29:54.445 UTC [50] LOG:  shutting down</br>2022-12-16 09:29:54 postgres             | 2022-12-16 12:29:54.482 UTC [48] LOG:  database system is shut down</br>2022-12-16 09:29:54 postgres             |  done</br>2022-12-16 09:29:54 postgres             | server stopped</br>2022-12-16 09:29:54 postgres             | </br>2022-12-16 09:29:54 postgres             | PostgreSQL init process complete; ready for start up.</br>2022-12-16 09:29:54 postgres             | </br>2022-12-16 09:29:54 postgres             | 2022-12-16 12:29:54.552 UTC [1] LOG:  starting PostgreSQL 12.13 (Debian 12.13-1.pgdg110+1) on x86_64-pc-linux-gnu, compiled by gcc (Debian 10.2.1-6) 10.2.1 20210110, 64-bit</br>2022-12-16 09:29:54 postgres             | 2022-12-16 12:29:54.552 UTC [1] LOG:  listening on IPv4 address "0.0.0.0", port 5432</br>2022-12-16 09:29:54 postgres             | 2022-12-16 12:29:54.552 UTC [1] LOG:  listening on IPv6 address "::", port 5432</br>2022-12-16 09:29:54 postgres             | 2022-12-16 12:29:54.563 UTC [1] LOG:  listening on Unix socket "/var/run/postgresql/.s.PGSQL.5432"</br>2022-12-16 09:29:54 postgres             | 2022-12-16 12:29:54.592 UTC [67] LOG:  database system was shut down at 2022-12-16 12:29:54 UTC</br>2022-12-16 09:29:54 postgres             | 2022-12-16 12:29:54.600 UTC [1] LOG:  database system is ready to accept connections</br>
И тогда предыдущие сообщения исчезают и показываются следующие:

[12:29:55 PM] Starting compilation in watch mode...</br>2022-12-16 09:29:55 store-backend-api-1  | </br>2022-12-16 09:29:58 store-backend-api-1  | [12:29:58 PM] Found 0 errors. Watching for file changes.</br>2022-12-16 09:29:58 store-backend-api-1  | </br>2022-12-16 09:29:59 store-backend-api-1  | [Nest] 29  - 12/16/2022, 12:29:59 PM     LOG [NestFactory] Starting Nest application...</br>2022-12-16 09:29:59 store-backend-api-1  | [Nest] 29  - 12/16/2022, 12:29:59 PM     LOG [InstanceLoader] TypeOrmModule dependencies initialized +65ms</br>2022-12-16 09:29:59 store-backend-api-1  | [Nest] 29  - 12/16/2022, 12:29:59 PM     LOG [InstanceLoader] ConfigHostModule dependencies initialized +1ms</br>2022-12-16 09:29:59 store-backend-api-1  | [Nest] 29  - 12/16/2022, 12:29:59 PM     LOG [InstanceLoader] AppModule dependencies initialized +0ms</br>2022-12-16 09:29:59 store-backend-api-1  | [Nest] 29  - 12/16/2022, 12:29:59 PM     LOG [InstanceLoader] ConfigModule dependencies initialized +1ms</br>2022-12-16 09:29:59 store-backend-api-1  | [Nest] 29  - 12/16/2022, 12:29:59 PM     LOG [InstanceLoader] TypeOrmCoreModule dependencies initialized +49ms</br>2022-12-16 09:29:59 store-backend-api-1  | [Nest] 29  - 12/16/2022, 12:29:59 PM     LOG [InstanceLoader] TypeOrmModule dependencies initialized +0ms</br>2022-12-16 09:29:59 store-backend-api-1  | [Nest] 29  - 12/16/2022, 12:29:59 PM     LOG [InstanceLoader] UserModule dependencies initialized +1ms</br>2022-12-16 09:29:59 store-backend-api-1  | [Nest] 29  - 12/16/2022, 12:29:59 PM     LOG [RoutesResolver] AppController {/api}: +7ms</br>2022-12-16 09:29:59 store-backend-api-1  | [Nest] 29  - 12/16/2022, 12:29:59 PM     LOG [RouterExplorer] Mapped {/api, GET} route +4ms</br>2022-12-16 09:29:59 store-backend-api-1  | [Nest] 29  - 12/16/2022, 12:29:59 PM     LOG [RouterExplorer] Mapped {/api/test, GET} route +0ms</br>2022-12-16 09:29:59 store-backend-api-1  | [Nest] 29  - 12/16/2022, 12:29:59 PM     LOG [RoutesResolver] UserController {/api/users}: +1ms</br>2022-12-16 09:29:59 store-backend-api-1  | [Nest] 29  - 12/16/2022, 12:29:59 PM     LOG [RouterExplorer] Mapped {/api/users, POST} route +1ms</br>2022-12-16 09:29:59 store-backend-api-1  | [Nest] 29  - 12/16/2022, 12:29:59 PM     LOG [RouterExplorer] Mapped {/api/users, GET} route +1ms</br>2022-12-16 09:29:59 store-backend-api-1  | [Nest] 29  - 12/16/2022, 12:29:59 PM     LOG [NestApplication] Nest application successfully started +3ms
 15.12.2022 18:03
2
0
504
3
Данный вопрос помечен как решенный
 Ответы 3
Попробуй это. Я скачал ваш код и протестировал его. У вас проблема с разрешением. Удалите контейнер и удалите тома докеров, затем запустите docker compose с этими изменениями в Dockerfile:

###################
# BUILD FOR LOCAL DEVELOPMENT
###################

FROM node:18-alpine As development
USER root
# Create app directory
WORKDIR /usr/src/app

# Copy application dependency manifests to the container image.
# A wildcard is used to ensure copying both package.json AND package-lock.json (when available).
# Copying this first prevents re-running npm install on every code change.
COPY package*.json ./

# Install app dependencies using the `npm ci` command instead of `npm install`
RUN npm ci

# Bundle app source
COPY  . .
RUN npm  run build

# Use the node user from the image (instead of the root user)
USER node
 15.12.2022 21:51
 Ответ принят как подходящий
ХОРОШО! Это очень странно!

Я, вероятно, решил это, удалив все файлы внутри моего проекта и воссоздав новые файлы.

Некоторые файлы я скопировал из репозитория туториала ниже. Другие файлы я воссоздал вручную. Но во все ставлю старый контент, без изменений.

Возможно, была какая-то проблема с правами доступа к файлу, из-за которой не разрешалась горячая перезагрузка. Я не уверен! Но горячая перезагрузка пока работает.

https://www.tomray.dev/nestjs-docker-compose-postgres

 16.12.2022 21:02
Добавьте это в tsconfig.json.
"watchOptions": {
    // Use native file system events for files and directories
    "watchFile": "priorityPollingInterval",
    "watchDirectory": "dynamicprioritypolling",
    // Poll files for updates more frequently
    // when they're updated a lot.
    "fallbackPolling": "dynamicPriority",
    // Don't coalesce watch notification
    "synchronousWatchDirectory": true,
    // Finally, two additional settings for reducing the amount of possible
    // files to track  work from these directories
    "excludeDirectories": ["**/node_modules", "dist"]
  }
Ваш ответ может быть улучшен с помощью дополнительной вспомогательной информации. Пожалуйста, отредактируйте , чтобы добавить дополнительные сведения, такие как цитаты или документация, чтобы другие могли подтвердить правильность вашего ответа. Вы можете найти больше информации о том, как писать хорошие ответы в справочном центре.

— 
Community
 26.12.2022 20:13



Тайм-аут обработки NestJS
Вопросы
NODE.JS
Тайм-аут обработки NestJS
У меня тяжелый запрос, выполнение которого занимает более 5 минут. В моих журналах я вижу, что NestJS каждые 5 минут сам выдает новый запрос, но я не вижу запроса от браузера. Как было рекомендовано, я установил

const app = await app.listen();
app.setTimeout(1800000);
и в моем разгроме

    @Get('/foo')
    async foo(@Req() req) {
      req.setTimeout(1800000);
      //...
    }
но это не работает, я вижу каждые 5 минут новый запрос в своих журналах. Я знаю, что лучшее решение - создать очередь и обрабатывать ее асинхронно, но на данный момент мне нужно просто как-то увеличить время ожидания. Является ли это возможным?

 27.10.2022 06:59
0
3
201
3
Данный вопрос помечен как решенный
 Ответы 3
Для этого вы должны использовать nginx или apache.

   proxy_read_timeout 5;
   proxy_connect_timeout 5;
   proxy_send_timeout 5;
Но если хотите поставить на экспресс - попробуйте так: http://expressjs.com/en/resources/middleware/timeout.html

 27.10.2022 11:16
Вы пробовали это?

NestJs: https://docs.nestjs.com/interceptors#more-operators
Для экспресса: https://github.com/expressjs/timeout
Пример:

import { Injectable, NestInterceptor, ExecutionContext, CallHandler, RequestTimeoutException } from '@nestjs/common';
import { Observable, throwError, TimeoutError } from 'rxjs';
import { catchError, timeout } from 'rxjs/operators';

@Injectable()
export class TimeoutInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      timeout(5000),
      catchError(err => {
        if (err instanceof TimeoutError) {
          return throwError(() => new RequestTimeoutException());
        }
        return throwError(() => err);
      }),
    );
  };
};
 28.10.2022 06:35
 Ответ принят как подходящий
Проблема была здесь:

nginx.ingress.kubernetes.io/proxy-read-timeout: 300


Bcrypt.compare всегда возвращает true
Вопросы
JAVASCRIPT
Bcrypt.compare всегда возвращает true
Я использую NestJS и Passport для создания простой формы входа/регистрации, и я использую bcrypt, чтобы увидеть, соответствует ли хешированный пароль паролю, который пользователь предоставляет в форме входа, но он всегда возвращает true

    async validateUser(username: string, pass: string): Promise<any> {
        const user = await this.usersService.findOne(username);
        if (user && bcrypt.compare('pass', user.password)) {
            const { password, ...result } = user;
            console.info(pass, user.password)
            return result;
        }
        return null;
    }
В приведенном выше коде, даже если я установлю аргумент в виде строки, он вернет true и войдет в оператор if, который должен быть ложным.

 08.10.2022 16:48
0
3
100
3
Данный вопрос помечен как решенный
 Ответы 3
compare возвращает правдивое обещание

Вы хотели использовать compareSync

 08.10.2022 16:57
 Ответ принят как подходящий
Поскольку функция сравнения возвращает обещание, вам нужно дождаться его. Попробуй это:

async validateUser(username: string, pass: string): Promise<any> {
        const user = await this.usersService.findOne(username);
        if (!user) return null;
        const pwCheck = await bcrypt.compare('pass', user.password);
        if (!pwCheck) return null;
        const { password, ...result } = user;
        return result;
    }
 08.10.2022 16:58
Поскольку bcrypt.compare всегда возвращает обещание, поэтому условие выполняется как истинное. Итак, если вы хотите получить ответ от bcrypt.compare, вы должны использовать блокировку await или.then. Таким образом, вы можете изменить свой код следующим образом:

async validateUser(username: string, pass: string): Promise<any> {
  const user = await this.usersService.findOne(username);
  const isPasswordMatched = await bcrypt.compare('pass', user.password);
  
  if (user && isPasswordMatched) {
      const { password, ...result } = user;
      console.info(pass, user.password)
      return result;
  }

  return null;
}


ОШИБКА [ExceptionsHandler] TypeError: невозможно прочитать свойства неопределенного (чтение «сообщения»)
Вопросы
TYPESCRIPT
ОШИБКА [ExceptionsHandler] TypeError: невозможно прочитать свойства неопределенного (чтение «сообщения»)
Я практикую преобразование ответа API-интерфейса мыла в ответ API-интерфейса отдыха. Я использовал nodejs для этого раньше, и это сработало. Теперь я пытаюсь использовать nestJS, но он продолжает выдавать ошибку: TypeError: Cannot read properties of undefined (reading 'post') <> Oops something went wrong. Please try again later {}, которая исходит из блока catch моего кода в remote.ts, когда axios вызывает метод POST. Вместо этого я удалил и использовал библиотеку мыла, но это дало ошибку createAsync. Я сейчас в замешательстве. Что я делаю не так? Я снова вернулся к использованию axios. Я вставил свои коды ниже. Возможно, я делаю что-то не так, что мне не очевидно.

parser.ts

import * as jsonxml from 'jsontoxml';
import * as xml2js from 'xml2js';
import { promisify } from 'util';

const parseString = promisify(xml2js.parseString);

const promisfiedParseString = promisify(parseString as any);

export default class Parser {
  static parseJSONBodyToXML(jsonArgument: any) {
    return jsonxml(jsonArgument, { html: true });
  }

  static async convertXMLToJSON(xmlMessage: xml2js.convertableToString) {
    const options = { trim: true, explicitArray: false, explicitRoot: false };
    const result = await promisfiedParseString(xmlMessage, options);
    return result;
  }
}

форматтер.ts

import Parser from './parser';

export default class Formatter {
  static convertJsonToSoapRequest(jsonArguments: any) {
    const soapBody = Parser.parseJSONBodyToXML(jsonArguments);

    return `
    <soap:Envelope xmlns:xsi = "http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd = "http://www.w3.org/2001/XMLSchema" xmlns:soap = "http://schemas.xmlsoap.org/soap/envelope/" xmlns = "http://tempuri.org/">
      <soap:Header/>
      <soap:Body>
        ${soapBody}
      </soap:Body>
    </soap:Envelope>
    `;
  }
}

удаленный.тс

import Formatter from './formatter';
import axios from 'axios';
import Parser from './parser';

const url = 'http://www.dneonline.com/calculator.asmx';

export default class Remote {
  static async multipleTwoOperands(operandA: any, operandB: any) {
    try {
      const payload = {
        Multiply: {
          intA: operandA,
          intB: operandB,
        },
      };

      const headers = {
        headers: {
          'Content-Type': 'text/xml; charset=utf-8',
          SOAPAction: 'http://tempuri.org/Multiply',
        },
      };

      const args = Formatter.convertJsonToSoapRequest(payload);
      console.info(args);
      let remoteResponse = await axios.post(url, args, headers);
      remoteResponse = await Parser.convertXMLToJSON(remoteResponse);

      console.info(remoteResponse);
    } catch (err) {
      throw new Error(
        `${err} <> Oops something went wrong. Please try again later ${JSON.stringify(
          err,
        )}`,
      );
    }
  }
}

преобразование.service.ts

import { Injectable } from '@nestjs/common';
import Remote from './util/remote';

@Injectable()
export class AppService {
  async getRemote(firstNumber: string, secondNumber: string): Promise<any> {
    const firstNum = parseInt(firstNumber);
    const secondNum = parseInt(secondNumber);

    return await Remote.multipleTwoOperands(firstNum, secondNum);
  }
}

преобразование.controller.ts

import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('remote')
  async getRemote(
    @Body('firstNumber') firstNumber: string,
    @Body('secondNumber') secondNumber: string,
  ): Promise<any> {
    console.info(firstNumber, secondNumber);

    return await this.appService.getRemote(firstNumber, secondNumber);
  }
}

axios.get также выдает ту же ошибку, но с «get». Никакой метод axios, похоже, не работает.

 07.10.2022 01:15
0
1
780
3
Данный вопрос помечен как решенный
 Ответы 3
Я считаю, что вы должны импортировать axios так:

import * as axios from 'axios';
или включите опцию esModuleInterop

 07.10.2022 01:38
последняя версия axios имеет ошибку. попробуйте использовать более старую версию.

я меняю

<script src = "https://unpkg.com/axios/dist/axios.min.js"></script>
Для этого и это работает

<script src = "https://cdnjs.cloudflare.com/ajax/libs/axios/0.21.1/axios.min.js"></script>
 07.10.2022 03:08
 Ответ принят как подходящий
Наконец-то я смог выяснить проблему с ошибкой без пробелов. Мне пришлось ссылаться на данные, используя remoteResponse = await Parser.convertXMLToJSON(remoteResponse.data); с моим remoteResponse в удаленном файле. Итак, окончательный код:

import Formatter from './formatter';
import axios from 'axios';
import Parser from './parser';

const url = `http://www.dneonline.com/calculator.asmx`;

export default class Remote {
  static async multipleTwoOperands(operandA: any, operandB: any) {
    try {
      const payload = {
        Multiply: {
          intA: operandA,
          intB: operandB,
        },
      };

      const headers = {
        headers: {
          'Content-Type': 'text/xml; charset=utf-8',
          SOAPAction: 'http://tempuri.org/Multiply',
        },
      };

      const args = Formatter.convertJsonToSoapRequest(payload);

      let remoteResponse = await axios.post(url, args, headers);

      remoteResponse = await Parser.convertXMLToJSON(remoteResponse.data);

      return remoteResponse;
    } catch (err) {
      throw new Error(
        `${err} <> Oops something went wrong. Please try again later ${JSON.stringify(
          err,
        )}`,
      );
    }
  }
}

NB: remoteResponse = await Parser.convertXMLToJSON(remoteResponse) заменено на remoteResponse = await Parser.convertXMLToJSON(remoteResponse.data). Спасибо.


Класс обслуживания не определен в узле
Вопросы
JAVASCRIPT
Класс обслуживания не определен в узле
Я хотел бы знать, что я делаю неправильно. Когда я пытаюсь сделать

var users = await this.userService.findByAccountId(id_bd_account);
я получаю ошибку

TypeError: Cannot read property 'findByAccountId' of undefined

Вот мой код

import { Injectable } from '@nestjs/common';
import { HttpService  } from '@nestjs/axios';
import {SaitAuthDto} from "./dto/sait-auth.dto";
import { AccountService } from "../account/account.service";
import { UserService } from '../user/user.service';

@Injectable()
export class ServicesSaitService {
    private readonly _saitCredential: SaitAuthDto = null;
    private readonly _urlSait: string = "";
    private readonly userService: UserService;
    private saitUrl =  "sait";
    private cuitUrl = "clienteCuentaCorriente";

    constructor(private readonly http: HttpService, private readonly acountService: AccountService ) {
        this._saitCredential = new SaitAuthDto();
        this._saitCredential.usuario = process.env.SAIT_USER;
        this._saitCredential.password = process.env.SAIT_USER_PASSWORD;
        this._urlSait = process.env.SAIT_BASE_URL;
    }
    
    public async getCustomerAccountByCuil(code:string, token:string): Promise<any> {
        const url = new URL([this.saitUrl, this.cuitUrl].join('/'), this._urlSait);
        url.searchParams.append('token', token);
        url.searchParams.append('codigo',code);
        return this.http.get(url.href).toPromise().then(async (value)=>{
            var bd_account = await this.acountService.getAccountByCuit(value.data.registros[0]['cuit']);
            var id_bd_account = bd_account[0].id;
            if (bd_account.length !== 0 ){
                var users = await this.userService.findByAccountId(id_bd_account);
                console.info(users);
            }
            return value.data;
        }).catch((error)=>{
            console.info(error);
            throw error;
        })
    }
}
 04.05.2022 15:48
0
3
45
3
Данный вопрос помечен как решенный
 Ответы 3
Вам нужно двигаться private readonly userService: UserService; в конструктор, чтобы в него была внедрена зависимость. Ваш код должен выглядеть так:

import { Injectable } from '@nestjs/common';
import { HttpService  } from '@nestjs/axios';
import {SaitAuthDto} from "./dto/sait-auth.dto";
import { AccountService } from "../account/account.service";
import { UserService } from '../user/user.service';

@Injectable()
export class ServicesSaitService {
    private readonly _saitCredential: SaitAuthDto = null;
    private readonly _urlSait: string = "";
    private saitUrl =  "sait";
    private cuitUrl = "clienteCuentaCorriente";

    constructor(private readonly http: HttpService, private readonly acountService: AccountService, private readonly userService: UserService ) {
        this._saitCredential = new SaitAuthDto();
        this._saitCredential.usuario = process.env.SAIT_USER;
        this._saitCredential.password = process.env.SAIT_USER_PASSWORD;
        this._urlSait = process.env.SAIT_BASE_URL;
    }
    
    public async getCustomerAccountByCuil(code:string, token:string): Promise<any> {
        const url = new URL([this.saitUrl, this.cuitUrl].join('/'), this._urlSait);
        url.searchParams.append('token', token);
        url.searchParams.append('codigo',code);
        return this.http.get(url.href).toPromise().then(async (value)=>{
            var bd_account = await this.acountService.getAccountByCuit(value.data.registros[0]['cuit']);
            var id_bd_account = bd_account[0].id;
            if (bd_account.length !== 0 ){
                var users = await this.userService.findByAccountId(id_bd_account);
                console.info(users);
            }
            return value.data;
        }).catch((error)=>{
            console.info(error);
            throw error;
        })
    }
}
 04.05.2022 16:21
this.userService не определен. Вам нужно добавить его как зависимость к вашему конструктору:

      constructor(private readonly http: HttpService, private readonly acountService: AccountService, private userService: UserService) {
           this._saitCredential = new SaitAuthDto();
           this._saitCredential.usuario = process.env.SAIT_USER;
           this._saitCredential.password = process.env.SAIT_USER_PASSWORD;
           this._urlSait = process.env.SAIT_BASE_URL;
      }
 04.05.2022 16:25
 Ответ принят как подходящий
вставьте userService как зависимость, если это часть вашего модуля, если нет, вы должны установить его как ссылку на модуль; вот примеры:

Внедрение зависимости:

import { Injectable } from '@nestjs/common';
import { HttpService  } from '@nestjs/axios';
import {SaitAuthDto} from "./dto/sait-auth.dto";
import { AccountService } from "../account/account.service";
import { UserService } from '../user/user.service';

@Injectable()
export class ServicesSaitService {
    private readonly _saitCredential: SaitAuthDto = null;
    private readonly _urlSait: string = "";
    private saitUrl =  "sait";
    private cuitUrl = "clienteCuentaCorriente";
   

    constructor(private readonly http: HttpService, private readonly acountService: AccountService,  private readonly userService: UserService) {
        this._saitCredential = new SaitAuthDto();
        this._saitCredential.usuario = process.env.SAIT_USER;
        this._saitCredential.password = process.env.SAIT_USER_PASSWORD;
        this._urlSait = process.env.SAIT_BASE_URL;
    }
    
     

    public async getCustomerAccountByCuil(code:string, token:string): Promise<any> {
        const url = new URL([this.saitUrl, this.cuitUrl].join('/'), this._urlSait);
        url.searchParams.append('token', token);
        url.searchParams.append('codigo',code);
        return this.http.get(url.href).toPromise().then(async (value)=>{
            var bd_account = await this.acountService.getAccountByCuit(value.data.registros[0]['cuit']);
            var id_bd_account = bd_account[0].id;
            if (bd_account.length !== 0 ){
                var users = await this.userService.findByAccountId(id_bd_account);
                console.info(users);
            }
            return value.data;
        }).catch((error)=>{
            console.info(error);
            throw error;
        })
    }
}
Ссылка на модуль

import { Injectable } from '@nestjs/common';
import { HttpService  } from '@nestjs/axios';
import {SaitAuthDto} from "./dto/sait-auth.dto";
import { AccountService } from "../account/account.service";
import { UserService } from '../user/user.service';
import { ModuleRef } from '@nestjs/core';

@Injectable()
export class ServicesSaitService {
    private readonly _saitCredential: SaitAuthDto = null;
    private readonly _urlSait: string = "";
    private saitUrl =  "sait";
    private cuitUrl = "clienteCuentaCorriente";
    private readonly userService: UserService
    constructor(private readonly http: HttpService, private readonly acountService: AccountService, private moduleRef: ModuleRef) {
        this._saitCredential = new SaitAuthDto();
        this._saitCredential.usuario = process.env.SAIT_USER;
        this._saitCredential.password = process.env.SAIT_USER_PASSWORD;
        this._urlSait = process.env.SAIT_BASE_URL;
    }
    onModuleInit() {
      this.userService = this.moduleRef.get(UserService, {
       strict: false,
      });
     }
    
    public async getCustomerAccountByCuil(code:string, token:string): Promise<any> {
        const url = new URL([this.saitUrl, this.cuitUrl].join('/'), this._urlSait);
        url.searchParams.append('token', token);
        url.searchParams.append('codigo',code);
        return this.http.get(url.href).toPromise().then(async (value)=>{
            var bd_account = await this.acountService.getAccountByCuit(value.data.registros[0]['cuit']);
            var id_bd_account = bd_account[0].id;
            if (bd_account.length !== 0 ){
                var users = await this.userService.findByAccountId(id_bd_account);
                console.info(users);
            }
            return value.data;
        }).catch((error)=>{
            console.info(error);
            throw error;
        })
    }
}
Спасибо. Это решение сработало. Просто нужно было добавить import { ModuleRef } из '@nestjs/core'; ко второму варианту.

— 
Dexter Naru
 04.05.2022 20:56


Невозможно запустить тесты, так как Nest не может найти модуль
Вопросы
NESTJS
Невозможно запустить тесты, так как Nest не может найти модуль
Я следовал примеру модульного теста, но не могу запустить тест, я не знаю, почему он не работает. У меня есть следующая ошибка: Cannot find module 'src/Application/Auth/Command/LoginCommandHandler' from 'LoginCommandHandler.spec.ts' но мой обработчик правильно импортирован. Спасибо за вашу помощь.

Вот мой модульный тест:

import { LoginCommandHandler } from 'src/Application/Auth/Command/LoginCommandHandler';
import { UserRepository } from 'src/Infrastructure/User/Repository/UserRepository';
import { EncryptionAdapter } from 'src/Infrastructure/Adapter/EncryptionAdapter';

// ...

const module: TestingModule = await Test.createTestingModule({
      providers: [LoginCommandHandler, UserRepository, EncryptionAdapter],
    }).compile();

    userRepository = module.get(UserRepository);
    encryptionAdapter = module.get(EncryptionAdapter);
    handler = new LoginCommandHandler(userRepository, encryptionAdapter);
Вот мой src/Application/Auth/Command/LoginCommandHandler/LoginCommandHandler:

export class LoginCommandHandler {
  constructor(
    @Inject('IUserRepository')
    private readonly userRepository: IUserRepository,
    @Inject('IEncryptionAdapter')
    private readonly encryptionAdapter: IEncryptionAdapter,
  ) {}
// ...
А вот мой AuthModule:

@Module({
  imports: [
    // ...
    TypeOrmModule.forFeature([User]),
  ],
  providers: [
    // ...
    { provide: 'IUserRepository', useClass: UserRepository },
    { provide: 'IEncryptionAdapter', useClass: EncryptionAdapter },
    LoginCommandHandler,
  ],
})
export class AuthModule {}

 21.06.2019 14:34
8
0
4 613
3
Данный вопрос помечен как решенный
 Ответы 3
 Ответ принят как подходящий
Jest не может найти модуль, связанный с абсолютным путем, который вы используете для импорта. Дополнительную информацию можно найти на этот вопрос stackoverflow.

Короче говоря, вам просто нужно сказать Jest о том, где искать ваши модули (либо в поле moduleDirectories из jest.config, либо в moduleNameMapper также в jest.config)

 21.06.2019 18:24
Добавьте это в конфигурацию шутки в файле package.json:

"moduleNameMapper": {
  "^src/(.*)$": "<rootDir>/$1"
}
 04.10.2020 23:21
Используйте относительные пути вместо абсолютных
import оператор с абсолютный путь выглядит так:

import { AuthService } from 'src/auth/auth.service'
import оператор с относительный путь выглядит так:

import { AuthService } from '../auth/auth.service'
Создатель Nest.js предлагает считает использование абсолютных путей плохой практикой. Вам необходимо преобразовать пути операторов импорта в вашем проекте в относительные пути, как показано выше.

Настройте VS Code для импорта с использованием относительных путей по умолчанию
VS Code по умолчанию использует абсолютный путь, как показано выше, когда мы автоматически импортируем с использованием автозавершения кода или Command/Ctrl + .. Нам нужно изменить этот параметр по умолчанию, чтобы использовать относительные пути.

Перейдите в настройки VS Code и найдите параметр: Import Module Specifier. Измените его с shortest на relative. Убедитесь, что вы изменили его в опции TypeScript, а не только в JavaScript.

Теперь VS Code будет автоматически импортировать с использованием относительных путей.

Вот и все! Надеюсь, это поможет!

Спасибо за совет по настройкам VS Code по умолчанию. Очень полезно, и это решило мои проблемы с модулем / тестированием в Nest.

— 
Loren.A
 18.12.2021 17:50


Мультитенантность запроса NestJS для нескольких баз данных
Вопросы
MULTI TENANT
Мультитенантность запроса NestJS для нескольких баз данных
Мы хотим реализовать мультитенантное решение NestJS, используя новую функцию области внедрения запроса в NestJS 6.

Я предполагаю, что для любой данной службы я мог бы сделать что-то вроде этого:

@Injectable({scope: Scope.REQUEST})
export class ReportService implements OnModuleInit { ... }
затем в конструкторе определите арендатора из запроса, подключитесь к соответствующей базе данных и создайте экземпляры репозиториев для нового подключения.

Мне интересно, это самый простой способ сделать это?

Можно ли вместо обновления каждой службы переопределить поставщика подключения и область действия это для запроса?

 13.06.2019 16:52
5
0
5 000
3
Данный вопрос помечен как решенный
 Ответы 3
 Ответ принят как подходящий
Вот что мы в итоге сделали...

Создайте простой глобальный TenancyModule, привязанный к области запроса:
аренда.модуль.тс

import { Global, Module, Scope } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { getConnection } from 'typeorm';

const connectionFactory = {
  provide: 'CONNECTION',
  scope: Scope.REQUEST,
  useFactory: (req) => {
    const tenant = someMethodToDetermineTenantFromHost(req.headers.host);
    return getConnection(tenant);
  },
  inject: [REQUEST],
};

@Global()
@Module({
  providers: [connectionFactory],
  exports: ['CONNECTION'],
})
export class TenancyModule {}
Внедрить специфичный для запроса 'CONNECTION' в сервисы модулей, из которых можно получить репозитории:
user.service.ts

...
@Injectable({scope: Scope.REQUEST})
export class UserService {
  private readonly userRepository: Repository<User>;

  constructor(@Inject('CONNECTION') connection) {
    this.userRepository = connection.getRepository(User);
  }
 09.07.2019 00:33
Я бы порекомендовал использовать подход @nurikabe с поставщиком фабрики с областью запроса и службами с областью запроса. Сам Nestjs имеет аналогичный пример фабрики в документах.

Но для полноты есть и другой подход: вы также можете использовать промежуточное программное обеспечение и прикрепить соединение к объекту запроса, как описано в этот ответ к аналогичному вопросу. Однако присоединение таких вещей, как подключение к запросу через промежуточное программное обеспечение, обходит механизм DI и отчуждает объект запроса, заставляя его вести себя как сервисный контейнер, который доставляет соединение, поэтому предпочтительным является фабричный подход.

 07.11.2019 12:01
Предпочтительно внедрить соединение как поставщика (исходя из фабрики), а не прикреплять его к запросу.

Обратите внимание, что оба подхода неизбежно приведут к увеличению количества создаваемых соединений. Это может привести к проблемам с производительностью, даже при объединении соединений в пул. По этой причине такой подход (одно соединение на одного арендатора) действительно эффективен только при относительно небольшом количестве арендаторов.

Один из способов сделать это с помощью подхода с несколькими схемами полностью задокументирован в эта статья.



Сервер Nestjs не обслуживает клиент socket.io
Вопросы
NESTJS
Сервер Nestjs не обслуживает клиент socket.io
У меня есть разделенное приложение, использующее nestjs на сервере и приложение Angular в качестве клиента. Настройка веб-сокетов с помощью socket.io показалась довольно простой с использованием модуля @nestjs/websockets и на клиенте, который я использовал ngx-socket-io. Я использовал этот репо в качестве основы. Теперь, когда я обновляю зависимость проекта @nestjs/websockets до последней версии, я получаю

ошибки CORS и
ошибка, что клиент не может загрузить файл js клиента socket.io Сервер Nestjs не обслуживает клиент socket.io
Я ожидал проблем с CORS, и после обновления я мог исправить их, добавив

  app.enableCors({
    origin: 'http://localhost:4200',
    credentials: true,
  });
в мой файл main.ts, но я не знаю, почему файл клиента не обслуживается. С версией репо (5.7.x) нет ни ошибок CORS, ни проблем с обслуживанием файла.

Я пробовал пару настроек @WebSocketGateway(), переход на другой порт, настройку serveClient (хотя по умолчанию должно быть true), но ничего не работало. Любой совет?

Спасибо

 04.05.2019 20:46
2
0
4 659
3
Данный вопрос помечен как решенный
 Ответы 3
 Ответ принят как подходящий
Проблема заключалась в том, что nestjs отделял платформу нижнего уровня (socket.io, express, fastify, ...) от модулей nestjs. Модуль websocket требует установки базовой платформы для socket.io.

npm install --save @nestjs/platform-socket.io

Чтобы обслуживать клиентский файл socket.io, похоже, также должна быть установлена ​​​​платформа HTTP для экспресс-доставки.

npm install --save @nestjs/platform-express

Дополнительная информация в руководство по миграции для версии 6.

 10.05.2019 09:09
В моем случае я заменил

app.useWebSocketAdapter(new WsAdapter(app));
от

import { WsAdapter } from '@nestjs/platform-ws';
с участием

app.useWebSocketAdapter(new IoAdapter(app));
в основном .ts от

import { IoAdapter } from '@nestjs/platform-socket.io';
Работал как шарм!

 18.07.2020 12:17
У меня такая же проблема. я открывал клиентскую часть приложения в веб-браузере, но непосредственно из своей файловой системы (например, я дважды щелкал файл index.html рядом с маленькой фикцией fake-front-end.js на моем рабочем столе). .). Кажется, что проблема CORS будет сохраняться до тех пор, пока я не получу доступ к index.html через правильный сервер. Поэтому я создал маршрут на своем бэкэнде, чтобы обслуживать index.html и fake-front-end.js.

В официальной документации socket.io есть раздел о CORS. И на веб-сайте nestjs есть раздел, но в моем случае оба не очень помогли.


Проверка необязательного параметра с использованием класса-валидатора в nestjs?
Вопросы
JAVASCRIPT
Проверка необязательного параметра с использованием класса-валидатора в nestjs?
Я хочу применить проверку полезной нагрузки запроса, например, есть имя поля со строковым типом. Но имя не является обязательным полем, но если оно существует, оно должно быть выполнено @IsNotEmpty()

Я пробовал что-то вроде этого @IsNotEmpty() name?: string // не учитывает ? необязательное ограничение

 08.04.2019 12:53
19
0
29 720
3
Данный вопрос помечен как решенный
 Ответы 3
 Ответ принят как подходящий
Вы можете использовать валидатор @IsOptional():

Checks if given value is empty (=== null, === undefined) and if so, ignores all the validators on the property.

 08.04.2019 16:19
Ответ Ким отличный. Если вы хотите применить это поведение ко всем вашим необязательным полям, вы также можете использовать skipMissingProperties: true с вашими каналами проверки.

 13.04.2020 03:19
класс-валидатор имеет валидатор @IsOptional(), который вы можете добавить вместе с любыми другими валидаторами, которые вы определили следующим образом:

@IsOptional() @IsNotEmpty() name: string;
Декораторы коммутативны, поэтому проверка не зависит от порядка валидаторов. Если необходимость проверки зависит от чего-то другого, кроме присутствия, вы можете использовать @ValidateIf(), который принимает аргумент функции.


52 interview questions on Nest.jsfor developers (2026)
Test your technical skills before an interview of Nest.js with 52 corrected questions. Beginner, Intermediate or Expert level.

Become a contributor
orDiscover our tests

Easy
1699

Medium
1740

Hard
1136

Expert
392
Technology

Profession

Test

Sort by
Newest
Most popular
Last review
Filter by
Published
3891
To review
25
ex: react hook


Published

To review

Newest



52 questions
Medium
15 votes
721 runs
0 comment
How to make an `ExceptionFilter` global so that it applies to your entire application in NestJS

Back-end developer
NestJS
nest
filters
Axel
at Sep 6, 2023
Easy
14 votes
723 runs
0 comment
How to declare a class as a controller in Nest.js

Back-end developer
NestJS
decorators
nest
Axel
at Sep 6, 2023
Easy
10 votes
719 runs
0 comment
What is the main responsibility of a pipe in Nest.js?

Back-end developer
NestJS
nest
pipes
Axel
at Sep 6, 2023
Easy
6 votes
715 runs
0 comment
Which decorator is used to associate a Guard with a route or controller in Nest?

Back-end developer
NestJS
decorators
guards
Axel
at Sep 6, 2023
Easy
5 votes
675 runs
0 comment
How to define a service or component that can be injected in Nest.js

Back-end developer
NestJS
nest
decorators
Axel
at Sep 6, 2023
Easy
5 votes
673 runs
0 comment
Nest module lifecycle methods execution order

Back-end developer
NestJS
nest
lifecycle
Axel
at Sep 6, 2023
Easy
4 votes
664 runs
0 comment
What is the main use of the `OnModuleInit` interface in Nest.js?

Back-end developer
NestJS
nest
module
Axel
at Sep 6, 2023
Easy
4 votes
655 runs
0 comment
Explain the use of the `switchToHttp` or `switchToWs` methods in a Nest.js guard or interceptor.

Back-end developer
NestJS
nest
guards
interceptors
Axel
at Sep 6, 2023
Medium
2 votes
178 runs
0 comment
Which of the following is not a predefined Nest.js interceptor?

Back-end developer
NestJS
nest
interceptors
Axel
at Jun 18, 2024
Easy
1 vote
655 runs
0 comment
Explain why you would use `forwardRef` in Nest.js.

Back-end developer
NestJS
nest
circular reference
Axel
at Sep 6, 2023
Easy
1 vote
642 runs
0 comment
Explain the use of the @Optional() decorator in Nest.

Back-end developer
NestJS
nest
dependency injection
Axel
at Sep 6, 2023
Easy
1 vote
627 runs
0 comment
What is the role of the `@Body()` decorator in this NestJS code snippet?

Back-end developer
NestJS
nest
decorators
Axel
at Sep 6, 2023
Medium
1 vote
512 runs
0 comment
What is the main purpose of asynchronous providers in Nest.js?

Back-end developer
NestJS
nest
async
Axel
at Sep 6, 2023
Easy
1 vote
237 runs
1 comment
Which of the following is not a module property in Nest?

Back-end developer
NestJS
nest
module
Axel
at Sep 6, 2023
Easy
1 vote
233 runs
0 comment
Access the `findAll()` method in NestJS

Back-end developer
NestJS
nest
controllers
routes
Axel
at Sep 6, 2023
Easy
1 vote
222 runs
0 comment
Create a new module in Nest.js

Back-end developer
NestJS
nest
command
Axel
at Sep 6, 2023
Medium
1 vote
60 runs
0 comment
When would it make sense to use a custom decorator rather than an integrated Pipe?

Back-end developer
NestJS
nest
decorators
Axel
at Sep 6, 2023
Easy
1 vote
51 runs
0 comment
How to declare a value provider in Nest.js?

Back-end developer
NestJS
nest
providers
Axel
at Sep 6, 2023
Easy
1 vote
46 runs
0 comment
What is the specific role of `useFactory` in the provider declaration?

Back-end developer
NestJS
nest
provider
Axel
at Sep 6, 2023
Hard
0 vote
688 runs
0 comment
Explain why modules are used in Nest.js

Back-end developer
NestJS
nest
modules

52 questions
Delete filters
Medium
0 vote
666 runs
1 comment
What is an interceptor in Nest.js?

Back-end developer
NestJS
nest
interceptor
Axel
at Sep 6, 2023
Easy
0 vote
665 runs
0 comment
How to make a Nest.js module global

Back-end developer
NestJS
nest
decorators
Axel
at Sep 6, 2023
Easy
0 vote
637 runs
0 comment
Define the intercept method when creating a custom interceptor in Nest

Back-end developer
NestJS
nest
interceptors
Axel
at Sep 6, 2023
Easy
0 vote
635 runs
0 comment
What happens when you declare a provider in a module's providers array, but don't add it to the exports array?

Back-end developer
NestJS
nest
providers
exports
Axel
at Sep 6, 2023
Easy
0 vote
617 runs
0 comment
Nest.js is a framework for building efficient and scalable Node.js applications.

Back-end developer
NestJS
nest
node.js
Axel
at Sep 6, 2023
Easy
0 vote
313 runs
0 comment
Which frameworks can Nest.js use for handling HTTP requests?

Back-end developer
NestJS
frameworks
http
Axel
at Sep 6, 2023
Medium
0 vote
263 runs
0 comment
How to customize the scope of a provider in Nest.js?

Back-end developer
NestJS
nest
providers
Axel
at Sep 6, 2023
Medium
0 vote
256 runs
0 comment
List the different scopes available for a provider in Nest.js

Back-end developer
NestJS
nest
provider
scope
Axel
at Sep 6, 2023
Hard
0 vote
251 runs
0 comment
How to define a GraphQL type in Nest.js?

Back-end developer
NestJS
nest
graphql
Axel
at Sep 6, 2023
Easy
0 vote
244 runs
0 comment
Retrieve the HTTP request context in Nest.js

Back-end developer
NestJS
nest
decorators
Axel
at Sep 6, 2023
Easy
0 vote
241 runs
0 comment
Access a specific configuration variable with the `ConfigService`

Back-end developer
NestJS
nest
config
Axel
at Sep 6, 2023
Easy
0 vote
165 runs
0 comment
Explain the difference between the `providers` and `exports` properties in the definition of a Nest.js module.

Back-end developer
NestJS
nest
dependency injection
Axel
at Sep 6, 2023
Easy
0 vote
104 runs
0 comment
Define a module in Nest

Back-end developer
NestJS
decorators
nest
Axel
at Sep 6, 2023
Easy
0 vote
102 runs
0 comment
Start a Nest application in development mode with hot-reloading support

Back-end developer
NestJS
nest
command
Axel
at Sep 6, 2023
Easy
0 vote
73 runs
0 comment
What is the primary role of controllers in Nest.js?

Back-end developer
NestJS
nest
controllers
Axel
at Sep 6, 2023
Easy
0 vote
65 runs
0 comment
Given a Nest.js module, determine if the module declares a controller to manage requests associated with the module.

Back-end developer
NestJS
nest
module
controller
Axel
at Sep 6, 2023
Easy
0 vote
64 runs
0 comment
How to associate an `ExceptionFilter` with a specific controller or route in Nest?

Back-end developer
NestJS
nest
filters
Axel
at Sep 6, 2023
Easy
0 vote
64 runs
0 comment
Which `ConfigModule` method would allow you to load an asynchronous configuration?

Back-end developer
NestJS
nest
async
Axel
at Sep 6, 2023
Medium
0 vote
63 runs
0 comment
Fix the provider declaration in Nest.js

Back-end developer
NestJS
nest
typescript
Axel
at Sep 6, 2023
Easy
0 vote
60 runs
0 comment
What is the main role of Guards in Nest.js ?


58 runs
0 comment
What is middleware in Nest.js?

Back-end developer
NestJS
nest
middleware
Axel
at Sep 6, 2023
Easy
0 vote
56 runs
0 comment
In the context of Nest.js, what does the `class-validator` library do?

Back-end developer
NestJS
nest
validation
Axel
at Sep 6, 2023
Medium
0 vote
54 runs
0 comment
Given a Nest.js service, determine if the `libraryService` property is injected via property-based injection.

Back-end developer
NestJS
nest
typescript
Axel
at Sep 6, 2023
Easy
0 vote
54 runs
0 comment
Which interface should a Guard implement in Nest.js to determine whether a request should be processed or not?

Back-end developer
NestJS
interfaces
nest
Axel
at Sep 6, 2023
Easy
0 vote
53 runs
0 comment
How to initialize a new Nest.js project using the CLI?

Back-end developer
NestJS
nest
cli
Axel
at Sep 6, 2023
Medium
0 vote
52 runs
0 comment
How to use `useFactory` to initialize a provider that depends on asynchronous data obtained from a remote API?

Back-end developer
NestJS
nest
async
Axel
at Sep 6, 2023
Medium
0 vote
48 runs
0 comment
Which of these objects is injected into the constructor of a custom Guard to obtain details about the current request?

Back-end developer
NestJS
nest
guards
Axel
at Sep 6, 2023
Medium
0 vote
46 runs
0 comment
How to add query parameters in swagger?

Back-end developer
NestJS
swagger
query parameters
Alwyn
at Sep 27, 2024
Medium
0 vote
45 runs
0 comment
How to ignore the absence of a `.env` file when initializing `ConfigModule` in Nest?

Back-end developer
NestJS
nest
config
Axel
at Sep 6, 2023
Easy
0 vote
35 runs
0 comment
What is the main responsibility of an `ExceptionFilter` in Nest.js?

Back-end developer
NestJS
nest
exception
Axel
at Sep 6, 2023
Medium
0 vote
22 runs
0 comment
Is it advisable to store sensitive information, such as passwords, directly in an `.env` file?

Back-end developer
NestJS
security
env
Alwyn
at Jan 31, 2025
Hard
-1 vote
43 runs
1 comment
Enable CORS in NestJS

Как обрабатывать загрузку файлов в NestJS и какую роль играет библиотека Multer?


Что такое NestJS?
NestJS — это прогрессивный фреймворк для создания серверных приложений на Node.js. Он основан на TypeScript и поддерживает современные принципы разработки, такие как модульность, инъекция зависимостей и использование паттернов проектирования, таких как MVC (Model-View-Controller).

Основные особенности NestJS:
Модульность: NestJS использует модульную архитектуру, что позволяет разделять приложение на самодостаточные модули. Это улучшает организацию кода и его тестируемость.
Инъекция зависимостей: Framework поддерживает инъекцию зависимостей, что позволяет легко управлять зависимостями между компонентами приложения, улучшая тем самым тестируемость и поддерживаемость.
Поддержка Microservices: NestJS предоставляет возможности для создания микросервисов, что позволяет индивидуально разрабатывать и масштабировать компоненты приложения.
Современен и модерен: NestJS строится на популярных библиотеках, таких как Express и Fastify, и использует TypeScript, что делает разработку более безопасной и предсказуемой.
Пример приложения на NestJS
Вот простой пример приложения на NestJS, которое создает REST API для управления задачами.

Установка NestJS CLI:
npm i -g @nestjs/cli
Создание нового проекта:
nestjs new project-name
Создание контроллера:
Для начала создадим контроллер для управления задачами. Выполните команду:

nest generate controller tasks
Это создаст файл tasks.controller.ts с базовой структурой.

import { Controller, Get, Post, Body } from '@nestjs/common';

@Controller('tasks')
export class TasksController {
  private tasks = [];

  @Get()
  getAllTasks() {
    return this.tasks;
  }

  @Post()
  createTask(@Body() task) {
    this.tasks.push(task);
    return task;
  }
}
Создание модуля:
Теперь нужно создать модуль:

nest generate module tasks
В результате будет создан файл tasks.module.ts. Импортируйте контроллер в модуль:

import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';

@Module({
  controllers: [TasksController],
})
export class TasksModule {}
Обновление основного модуля приложения:
Теперь необходимо импортировать созданный модуль в основном модуле приложения (обычно это app.module.ts).

import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [TasksModule],
})
export class AppModule {}
Запуск приложения:
Теперь можно запустить сервер с помощью команды:

npm run start
Ваше приложение теперь готово к работе, и вы сможете получать все задачи по адресу http://localhost:3000/tasks и добавлять задачи с помощью POST-запроса на тот же адрес.

Заключение
NestJS — это мощный инструмент для разработки серверных приложений. Его структура и возможности делают его идеальным выбором для создания больших и сложных приложений. С практикой вы сможете использовать его преимущества в своих проектах, увеличивая продуктивность и качество кода.

Какова цель пакета @nestjs/passport и как он упрощает аутентификацию в NestJS?
Пакет @nestjs/passport представляет собой обертку над библиотекой Passport.js, которая является популярным инструментом для реализации аутентификации в веб-приложениях. В NestJS, использование этого пакета значительно упрощает процесс авторизации, предоставляя интеграцию с различными стратегиями аутентификации, такими как локальная аутентификация, OAuth, JWT и другие.

Цели использования пакета @nestjs/passport:
Интеграция с Passport.js - Позволяет легко интегрировать Passport.js в NestJS, используя его стратегии аутентификации.
Модульность - Позволяет разбивать код на модули, что упрощает поддержку и расширение функционала приложения.
Гибкость - Поддерживает множество стратегий аутентификации, включая обработку JWT, OAuth, основные логины и другие.
Упрощение написания кода - Предоставляет декораторы и встроенные классы, которые упрощают настройку маршрутов и обработку аутентификации.
Пример использования @nestjs/passport
Для начала, вам нужно установить необходимые пакеты:

npm install @nestjs/passport passport passport-local
npm install @nestjs/jwt passport-jwt
Далее, создадим стратегию для локальной аутентификации:

// auth/local.strategy.ts
import { Strategy } from 'passport-local';
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({ usernameField: 'email' }); // Используем email как поле логина
  }

  async validate(email: string, password: string): Promise<any> {
    const user = await this.authService.validateUser(email, password);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
В AuthService мы реализуем метод validateUser, который проверяет, существует ли пользователь с переданными учетными данными:

// auth/auth.service.ts
import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.usersService.findByEmail(email); // Метод поиска пользователя
    if (user && user.password === password) {
      return user; // Возвращаем пользователя, если пароли совпадают
    }
    return null;
  }
}
Настройка контроллера для аутентификации
Теперь создадим контроллер, который будет обрабатывать запросы на аутентификацию:

// auth/auth.controller.ts
import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Body() body) {
    // Здесь можно сгенерировать JWT токен или вернуть информацию о пользователе
    return this.authService.login(user);
  }
}
Заключение
Пакет @nestjs/passport упрощает интеграцию аутентификации в приложениях NestJS, предоставляя мощные инструменты для работы со стратегиями аутентификации. За счет модульности и структуры кода, разработчикам становится легче реализовывать сложные механизмы безопасности, удерживая при этом код чистым и понятным.

Теперь вы знаете, как использовать @nestjs/passport для организации аутентификации в приложении NestJS. Это лишь один из основных сценариев, существует множество комбинаций и стратегий, которые вы можете реализовать в зависимости от требований вашего проекта.


Как NestJS поддерживает Server-Sent Events (SSE), и каковы основные преимущества использования SSE для реального времени в веб-приложениях?
Server-Sent Events (SSE) – это технология, позволяющая серверам отправлять обновления клиентским приложениям через HTTP-соединение в режиме реального времени. Это односторонняя связь: сервер посылает данные на клиент, а клиент не может отправлять данные обратно через это соединение. SSE часто используется для получения уведомлений о событиях, обновлений данных и других случаев, когда необходимо поддерживать связь в реальном времени без необходимости постоянного опроса сервера.

Поддержка SSE в NestJS
NestJS, как современный фреймворк для построения серверных приложений на Node.js, предоставляет простые инструменты для реализации SSE. Вы можете создать поток SSE, используя средства, предоставляемые библиотекой Express (в стандартной конфигурации NestJS).

Пример реализации SSE в NestJS
Рассмотрим пример простого приложения на NestJS, которое реализует серверные события:

Создание модуля и контроллера:
import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller('events')
export class EventsController {
  @Get()
  sendEvents(@Res() res: Response) {
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');

    // Отправка события каждый 5 секунд
    const intervalId = setInterval(() => {
      const data = JSON.stringify({ message: 'Обновление данных', timestamp: new Date() });
      res.write(`data: ${data}\n\n`);
    }, 5000);

    // Очистка при закрытии соединения
    res.on('close', () => {
      clearInterval(intervalId);
      res.end();
    });
  }
}
Импортирование контроллера в модуль:
import { Module } from '@nestjs/common';
import { EventsController } from './events.controller';

@Module({
  controllers: [EventsController],
})
export class EventsModule {}
Добавление модуля в основной модуль приложения:
import { Module } from '@nestjs/common';
import { EventsModule } from './events/events.module';

@Module({
  imports: [EventsModule],
})
export class AppModule {}
Как использовать SSE на фронтенде
На стороне клиента вы можете использовать стандартный API EventSource для подключения к SSE:

const eventSource = new EventSource('/events');

eventSource.onmessage = function(event) {
  const data = JSON.parse(event.data);
  console.log('Получено сообщение:', data);
};

eventSource.onerror = function(err) {
  console.error('Ошибка:', err);
};
Преимущества использования SSE
Постоянное соединение: С помощью SSE сервер может поддерживать постоянное соединение с клиентом, что позволяет отправлять данные в любое время.
Простота реализации: SSE проще в использовании по сравнению с WebSocket для задач с односторонней передачей данных.
Работа с текстовыми данными: SSE наиболее эффективно работает с текстовыми данными (например, JSON), что делает его хорошим выбором для приложений, где необходимо передавать текстовую информацию.
Автоматическое восстановление: Если соединение обрывается, клиент автоматически пытается восстановить его.
Заключение
Server-Sent Events в NestJS предоставляют удобный способ для серверной части отправки обновлений в реальном времени на клиентские приложения. Эта технология лучше всего подходит для сценариев, где требуется односторонняя связь, например, для уведомлений и обновлений данных. Используйте приведенный пример как основу для реализации SSE в своих проектах!



Как обрабатывать асинхронные операции в NestJS и какова роль объекта Promise?
Какие фреймворки для тестирования лучше всего подходят для NestJS?
Какова роль декоратора @Body()?
Что такое циклическая зависимость (dependency cycle) в NestJS и как ее исправить?
Типы связывания,сильное и слабое связывание, и приведите примеры того, как модули NestJS способствуют достижению слабого связывания в модульном приложении.
Что такое пользовательские провайдеры и чем они отличаются от стандартных провайдеров в NestJS?
Как объявить класс контроллером в NestJS?
Объясните концепцию внедрения зависимостей в NestJS. Как это помогает в построении модульных и тестируемых приложений?
Какова разница между внедрением зависимостей и инверсией управления (IoC)?
В чем разница между декораторами @Injectable() и @Inject()?
Какова разница между перехватчиками и посредниками?
В чем разница между NestJS и Angular?
Какой файл является входным в приложении NestJS?
Объясните концепцию переменных окружения в NestJS и как их можно использовать для управления конфигурацией?
Какова цель ExecutionContext в NestJS?
Объясните назначение ExecutionContext в промежуточном ПО NestJS
Объясните назначение принципа инверсии зависимостей (DIP) в NestJS
Объясните назначение DTO (Data Transfer Objects) в NestJS.
Объясните различные модули в NestJS.
Как генерировать документацию API с помощью Swagger в NestJS?
Как обрабатывать ошибки в NestJS?
Как обрабатывать загрузку файлов в NestJS и какую роль играет библиотека Multer?
Как можно обрабатывать транзакции баз данных в NestJS и почему транзакции важны в некоторых сценариях?
Как можно реализовать кеширование в NestJS?
Объясните назначение декоратора @InjectRepository() в NestJS.
Каковы основные компоненты приложения NestJS?
Что такое промежуточные модули (middleware) в контексте NestJS?
Какова роль миграционных скриптов в TypeORM и как создать и запустить миграции в приложении NestJS?
Как Nest логгер отличается от стандартного console.log() и когда вы предпочтете использовать один вместо другого?
Как NestJS поддерживает аутентификацию и авторизацию?
Как NestJS обрабатывает CORS (Cross-Origin Resource Sharing)?
Как NestJS обрабатывает взаимодействие с базами данных и какие базы данных поддерживаются?
Объясните назначение декораторов @nestjs/graphql Resolver и @nestjs/graphql Scalar и их связь с GraphQL в NestJS
Объясните роль промежуточного ПО NestJS в контексте микросервисов и приведите сценарий, где промежуточное ПО полезно в конфигурации микросервисов.
Какова цель пакета @nestjs/passport и как он упрощает аутентификацию в NestJS?
Как NestJS поддерживает Server-Sent Events (SSE), и каковы основные преимущества использования SSE для реального времени в веб-приложениях?
Какова разница между Провайдером и Сервисами в NestJS? Можем ли мы иметь провайдер без декоратора @Injectable?
Объясните цель пакета @nestjs/jwt в NestJS?
Поясните цель декораторов @nestjs/swagger ApiProperty() и ApiOperation()
Какова цель декоратора @Res() в контроллерах NestJS?
Как можно планировать задачи в NestJS?
Как обеспечить безопасность своего приложения на NestJS?
Объясните концепцию сериализации и десериализации в NestJS.
Как реализовать «мягкое» удаление в NestJS с использованием TypeORM и почему «мягкое» удаление может быть предпочтительнее «жесткого»?
Почему важно, чтобы токены имели время истечения? Как реализовать истечение токенов в NestJS, и какую роль играют обновляющие токены в поддержании пользовательских сессий?
Как реализовать механизм обновления токенов в NestJS?
Как токены используются для авторизации в API?
Можно ли использовать другие языки, такие как C++, Ruby или Python, с NestJS?
Как использовать параметры маршрута в контроллере NestJS?
Как использовать декораторы в контроллере NestJS?
Как реализовать версионность в API NestJS?
Что такое охранники (guards) в контексте NestJS?
Что такое пайпы в контексте NestJS?
Что такое интерсептор в контексте NestJS?
Что такое NestJS?
Главная
/
Вопросы
/
Вопросы по Nest.js
/
Какова разница между Провайдером и Сервисами в NestJS? Можем ли мы иметь провайдер без декоратора @Injectable?
Какова разница между Провайдером и Сервисами в NestJS? Можем ли мы иметь провайдер без декоратора @Injectable?
NestJS — это прогрессивный фреймворк для разработки серверных приложений на Node.js, который использует TypeScript. В NestJS ключевой концепцией являются "провайдеры" (providers) и "сервисы" (services). Давайте подробно рассмотрим их и их отличия.

Что такое Провайдеры и Сервисы в NestJS?
Провайдеры: провайдер — это любой класс, который может быть иньектирован в другие классы (например, контроллеры или другие провайдеры). Провайдеры могут предоставлять различные функциональности, такие как доступ к данным, бизнес-логика и другие возможности.
Сервисы: сервисы — это специализированные провайдеры, которые несут определенную бизнес-логику или абстракцию. Сервисы обычно используются для выполнения операций, связанных с конкретными задачами, например, взаимодействием с базой данных или обработкой данных.
Различия между Провайдером и Сервисами
Определение: Все сервисы — это провайдеры, но не все провайдеры являются сервисами. Провайдер может быть чем угодно (например, фабрики, значения, классы), в то время как сервисы обычно имеют более четкую бизнес-логическую роль.
Назначение: Сервисы предназначены для реализации бизнес-логики, а провайдеры могут предоставлять больше функциональности и могут быть более общими.
Пример Создания Провайдера и Сервиса
Вот как можно реализовать провайдер и сервис.

Создание Сервиса
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  private users = [];

  createUser(user: { name: string }) {
    this.users.push(user);
    return user;
  }

  findAllUsers() {
    return this.users;
  }
}
В этом примере UserService — это сервис, который инкапсулирует логику для создания и поиска пользователей. Мы используем декоратор @Injectable(), чтобы данный класс стал доступным для инъекции в другие классы.

Создание Провайдера без @Injectable
Так как любой класс можно сделать провайдером просто путем его добавления в массив провайдеров модуля, класс не обязательно должен быть помечен декоратором @Injectable. Однако, если вы планируете использовать его для инъекции в другие классы, он должен быть инъектируемым.

Пример:

export class ConfigProvider {
  getSecrets() {
    return {
      dbPassword: 'secret',
    };
  }
}
В этом примере мы создали провайдер ConfigProvider, который предоставляет доступ к некоторым секретам. Хотя мы не используем @Injectable, вы не сможете инъектировать ConfigProvider в другие классы.

Пример Использования Провайдера и Сервиса в Модуле
import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { ConfigProvider } from './config.provider';

@Module({
  providers: [UserService, ConfigProvider],
  exports: [UserService],
})
export class UserModule {}
В этом примере мы регистрируем как сервис, так и провайдер в модуле. Сервис UserService будет доступен для инъекции в другие классы, тогда как ConfigProvider, не имея @Injectable, не может быть инъектирован.

Заключение
В NestJS провайдеры и сервисы играют ключевую роль в структурировании вашего приложения. Понимание разных типов провайдеров и их использование поможет вам создавать более гибкие и поддерживаемые приложения.


Объясните цель пакета @nestjs/jwt в NestJS?
Пакет @nestjs/jwt — это библиотека, разработанная для использования в рамках фреймворка NestJS, которая предоставляет удобные средства для работы с JSON Web Tokens (JWT). JWT является стандартом для передачи информации между двумя сторонами безопасным образом, и он широко используется для аутентификации и авторизации пользователей в веб-приложениях.

Основные цели использования @nestjs/jwt:
Аутентификация пользователей: JWT обычно используется для подтверждения идентичности пользователя. После успешной аутентификации (обычно с помощью логина и пароля) сервер создает JWT и отправляет его клиенту. Клиент затем включает этот токен в заголовки своих последующих запросов.
Авторизация доступа: JWT может содержать информацию о ролях и правах доступа пользователя, что позволяет серверу проверять, есть ли у пользователя разрешение на выполнение определенных действий.
Безопасность: JWT подписываются с помощью секрета или открытого/закрытого ключа, что делает их трудными для подделки. Вы можете использовать алгоритмы шифрования, такие как HMAC или RSA.
Статистика: JWT не требуют серверного хранения сессий, так как они представляют собой самодостаточные токены. Это облегчает масштабирование приложений.
Установка
Чтобы начать использование @nestjs/jwt, вам требуется установить его и зависимости. Вот как это сделать:

npm install @nestjs/jwt passport-jwt
Пример использования
Давайте рассмотрим простой пример использования @nestjs/jwt в NestJS для создания и проверки JWT.

Создайте модуль аутентификации:
// auth.module.ts
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';

@Module({
  imports: [
    JwtModule.register({
      secret: 'ваш_секретный_ключ', // Лучше хранить в .env файле
      signOptions: { expiresIn: '60s' }, // Время действия токена
    }),
  ],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
Создайте сервис аутентификации:
// auth.service.ts
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  async login(user: any) {
    const payload = { username: user.username, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload), // Генерация токена
    };
  }
}
Создайте контроллер аутентификации:
// auth.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() user: any) {
    return this.authService.login(user);
  }
}
Проверка токена: Вы можете создать отдельный Guards для проверки токена в запросах к защищенным маршрутам.
// jwt-auth.guard.ts
import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {}
Таким образом, с использованием @nestjs/jwt, вы можете эффективно управлять аутентификацией и авторизацией пользователей в вашем приложении на NestJS. Это позволяет вам строить более безопасные и масштабируемые веб-приложения.


Поясните цель декораторов @nestjs/swagger ApiProperty() и ApiOperation()
В NestJS, библиотека @nestjs/swagger предоставляет мощные инструменты для генерации документации API в формате OpenAPI (Swagger). Декораторы ApiProperty() и ApiOperation() играют ключевую роль в этом процессе, позволяя разработчикам описывать структуру их API и его поведение.

ApiProperty()
Декоратор ApiProperty() используется для описания свойств модели данных, которая будет использоваться в запросах и ответах API. Он помогает Swagger понять, какие поля доступны, их типы и любые дополнительные метаданные, такие как обязательность или описание.

Пример использования ApiProperty()
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    description: 'Имя пользователя',
    type: String,
    example: 'Иван',
  })
  name: string;

  @ApiProperty({
    description: 'Электронная почта пользователя',
    type: String,
    example: 'ivan@example.com',
  })
  email: string;

  @ApiProperty({
    description: 'Пароль пользователя',
    type: String,
    example: 'secret',
  })
  password: string;
}
В этом примере мы создали класс CreateUserDto, который описывает структуру данных для создания нового пользователя. Декоратор ApiProperty добавляет описание и пример для каждого поля, что упрощает понимание API пользователями.

ApiOperation()
Декоратор ApiOperation() используется для описания операции API (например, HTTP-метода и его цели). Он помогает уточнить информацию о конкретном эндпоинте, такую как его описание, возможные ответы и другие важные детали.

Пример использования ApiOperation()
import { Controller, Post, Body } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';

@ApiTags('пользователи')
@Controller('users')
export class UsersController {
  @Post()
  @ApiOperation({ summary: 'Создать нового пользователя' })
  @ApiResponse({ status: 201, description: 'Пользователь успешно создан.' })
  @ApiResponse({ status: 400, description: 'Ошибка валидации.' })
  async create(@Body() createUserDto: CreateUserDto) {
    // Логика создания пользователя
  }
}
В этом примере у нас есть контроллер UsersController, который обрабатывает запросы на создание пользователя. Декоратор ApiOperation описывает, что данный метод создает нового пользователя. Мы также используем ApiResponse, чтобы указать, какие статусы ответа могут быть возвращены в результате запроса.

Заключение
Декораторы ApiProperty() и ApiOperation() значительно упрощают создание и поддержку документации для RESTful API в приложениях на NestJS. Используя их должным образом, разработчики могут сделать свои API более понятными и легкими для интеграции. Это также помогает поддерживать высокий уровень качества кода и документации в проектах.


Как обрабатывать асинхронные операции в NestJS и какова роль объекта Promise?
В NestJS, как и в других фреймворках на базе JavaScript, асинхронные операции играют важную роль, особенно при работе с внешними API, базами данных и другими интерактивными сервисами. В этом ответе мы обсудим, как обрабатывать асинхронные операции в NestJS, и какую роль в этом процессе играет объект Promise.

Асинхронные функции в NestJS
Асинхронные функции в NestJS могут быть определены с использованием ключевого слова async. Это позволяет вам использовать оператор await для ожидания завершения асинхронных операций. Ваша функция автоматически возвращает объект Promise, если она определена как async.

Пример использования асинхронных функций
Рассмотрим создание простого сервиса, который получает данные из базы данных. В этом примере мы будем использовать асинхронную функцию для получения данных.

import {Injectable} from '@nestjs/common';
import {User} from './user.entity'; // предположим, что у нас есть сущность User
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
    ) {
    }

    async findAll(): Promise<User[]> {
        return this.usersRepository.find(); // возвращаем Promise
    }

    async findOne(id: number): Promise<User> {
        return await this.usersRepository.findOne(id); // можем использовать await для ожидания выполнения
    }
}
Использование сервисов
Затем вы можете использовать этот сервис в контроллере. Контроллер также может быть асинхронным:

import {Controller, Get, Param} from '@nestjs/common';
import {UsersService} from './users.service';
import {User} from './user.entity';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {
    }

    @Get()
    async getAllUsers(): Promise<User[]> {
        return this.usersService.findAll(); // возвращаем Promise
    }

    @Get(':id')
    async getUser(@Param('id') id: string): Promise<User> {
        return this.usersService.findOne(Number(id)); // ожидание результата
    }
}
Объект Promise
Promise в JavaScript — это объект, представляющий возможное завершение (или неудачу) асинхронной операции и её результат. Он имеет три состояния:

Ожидание (pending) — начальное состояние, операция еще не завершена.
Выполнено (fulfilled) — операция завершена успешно.
Отклонено (rejected) — операция завершена с ошибкой.
Когда результат асинхронной операции доступен, Promise может перейти в состояние выполнено или отклонено.

Пример использования Promise
Вы также можете создать промис самостоятельно, если вам это нужно:

function exampleAsyncOperation(): Promise<number> {
    return new Promise((resolve, reject) => {
        const success = true; // меняйте на false, чтобы симулировать ошибку
        setTimeout(() => {
            if (success) {
                resolve(42);
            } else {
                reject(new Error('Ошибка выполнения'));
            }
        }, 1000);
    });
}

// Использование
exampleAsyncOperation()
    .then(result => console.log('Результат:', result))
    .catch(error => console.error('Ошибка:', error.message));
Заключение
Асинхронные операции являются важной частью разработки с использованием NestJS. Понимание работы с Promise и асинхронными функциями поможет вам эффективно обрабатывать операции ввода-вывода, такие как запросы к базе данных и внешним API. Используя async и await, код становится более читабельным и управляемым.

Если у вас есть вопросы или вам нужны дополнительные примеры, не стесняйтесь задавать их!


Какие фреймворки для тестирования лучше всего подходят для NestJS?
NestJS — это мощный фреймворк для создания серверных приложений на Node.js, который использует TypeScript. Одной из важных частей любого проекта является тестирование. В этом ответе мы рассмотрим несколько популярных фреймворков для тестирования, которые хорошо работают с NestJS, а также предоставим примеры кода.

1. Jest
Jest — это популярный фреймворк для тестирования JavaScript, который очень хорошо интегрируется с NestJS. Он предоставляет удобный интерфейс и мощные функции, такие как мокирование и отслеживание вызовов.

Установка Jest
Для начала установим Jest и необходимые зависимости:

npm install --save-dev jest @nestjs/testing ts-jest @types/jest
Пример теста с Jest
Рассмотрим простой контроллер, который мы будем тестировать:

// src/app.controller.ts
import { Controller, Get } from '@nestjs/common';

@Controller('app')
export class AppController {
  @Get()
  getHello(): string {
    return 'Hello World!';
  }
}
Теперь создадим тест для этого контроллера:

// src/app.controller.spec.ts
import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';

describe('AppController', () => {
  let appController: AppController;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
    }).compile();

    appController = module.get<AppController>(AppController);
  });

  it('should return "Hello World!"', () => {
    expect(appController.getHello()).toBe('Hello World!');
  });
});
2. Supertest
Supertest — это библиотека, которая позволяет тестировать HTTP-запросы в приложениях на Node.js. Она отлично подходит для тестирования RESTful API, созданных с использованием NestJS.

Установка Supertest
Установите Supertest:

npm install --save-dev supertest
Пример теста с Supertest
Добавим тесты для контроллера, используя Supertest:

// src/app.controller.spec.ts
import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/app (GET)', () => {
    return request(app.getHttpServer())
      .get('/app')
      .expect(200)
      .expect('Hello World!');
  });

  afterAll(async () => {
    await app.close();
  });
});
3. Mocha & Chai
Для разработчиков, предпочитающих другие фреймворки, такие как Mocha и Chai, также есть возможность их интеграции с NestJS. Эти инструменты предоставляют гибкость и подробные возможности для написания тестов.

Установка Mocha и Chai
npm install --save-dev mocha chai @types/mocha @types/chai
Пример теста с Mocha и Chai
Создадим пример теста с использованием Mocha и Chai:

// src/app.controller.spec.ts
import { expect } from 'chai';
import { AppController } from './app.controller';

describe('AppController', () => {
  let appController: AppController;

  before(() => {
    appController = new AppController();
  });

  it('should return "Hello World!"', () => {
    expect(appController.getHello()).to.equal('Hello World!');
  });
});
Заключение
NestJS отлично поддерживает различные фреймворки для тестирования, каждый из которых имеет свои особенности и преимущества. Jest является наиболее популярным выбором благодаря своей простоте использования и мощным функциям. Supertest хорошо подходит для тестирования API, а Mocha и Chai предоставляют гибкость для тех, кто предпочитает другие подходы. Выбор фреймворка зависит от ваших предпочтений и требований проекта.


Какова роль декоратора @Body()?
Декоратор @Body() в NestJS используется для извлечения данных из тела HTTP-запроса. Он предоставляет удобный способ получать данные, отправленные на сервер, например, через формы или API-запросы. Этот декоратор используется внутри методов контроллеров, позволяя вам обрабатывать входящие данные с минимальными усилиями.

Пример использования @Body()
Давайте рассмотрим простой пример, в котором мы используем @Body() для получения данных при создании нового пользователя.

import { Controller, Post, Body } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    // Здесь будет логика для сохранения пользователя в базе данных
    console.log(createUserDto);
    return 'Пользователь успешно создан';
  }
}
Объяснение кода
Импорт необходимых модулей: Мы импортируем Controller, Post, и Body из @nestjs/common. Также мы импортируем DTO (Data Transfer Object), который определяет структуру данных, ожидаемых от клиента.
Создание контроллера: Мы создаем контроллер UsersController, который будет обрабатывать HTTP-запросы к маршруту /users.
Определение метода create: Используя декоратор @Post(), мы указываем, что этот метод отвечает на POST-запросы. Метод create принимает один параметр, createUserDto, который мы заполняем с помощью декоратора @Body().
Логика обработки: В данном примере мы просто выводим переданные данные в консоль и возвращаем сообщение о том, что пользователь успешно создан.
DTO для создания пользователя
DTO — это объект, который определяет форму и валидацию данных, которые мы ожидаем в теле запроса. В нашем случае, CreateUserDto может выглядеть следующим образом:

import { IsString, IsEmail } from 'class-validator';

export class CreateUserDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  password: string;
}
Особенности использования @Body()
Валидация: Используя class-validator, вы можете добавлять правила валидации для полей DTO, что помогает гарантировать, что данные соответствуют ожидаемому формату.
Типизация: Использование DTO позволяет легко задавать типы данных, что улучшает читаемость кода и минимизирует ошибки.
Заключение
Декоратор @Body() в NestJS — это мощный инструмент для обработки данных запросов. Он упрощает извлечение данных и может быть использован вместе с DTO для обеспечения их валидации и структурирования. Попробуйте использовать его в своих проектах, чтобы упростить процесс работы с входящими данными.


Циклическая зависимость (или dependency cycle) в NestJS возникает, когда два или более модуля ссылаются друг на друга. Это приводит к тому, что NestJS не может корректно разрешить зависимости, вызывая ошибки во время выполнения приложения.

Пример циклической зависимости
Предположим, у нас есть два сервиса: AuthService и UserService.

// AuthService.ts
import { Injectable } from '@nestjs/common';
import { UserService } from './user.service';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  // методы аутентификации
}
// UserService.ts
import { Injectable } from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable()
export class UserService {
  constructor(private readonly authService: AuthService) {}

  // методы управления пользователями
}
В данном случае, когда AuthService пытается использовать UserService, а UserService пытается использовать AuthService, возникает циклическая зависимость.

Как исправить циклическую зависимость
Существует несколько способов избежать циклических зависимостей в NestJS:

1. Использование forwardRef
NestJS предоставляет функцию forwardRef, которая позволяет отложить разрешение зависимости до момента, когда все модули будут загружены. Вот как это можно сделать:

// AuthService.ts
import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { UserService } from './user.service';

@Injectable()
export class AuthService {
  constructor(@Inject(forwardRef(() => UserService)) private readonly userService: UserService) {}

  // методы аутентификации
}
// UserService.ts
import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable()
export class UserService {
  constructor(@Inject(forwardRef(() => AuthService)) private readonly authService: AuthService) {}

  // методы управления пользователями
}
2. Переработка архитектуры
Иногда проще изменить архитектуру приложения, чтобы избежать циклических зависимостей. Один из способов сделать это - вынести общую функциональность в отдельный модуль. Например, если у вас есть несколько сервисов, которые зависят друг от друга, подумайте о создании общего модуля, который будет содержать общие компоненты.

3. Объединение сервисов
Если два сервиса слишком зависят друг от друга, возможно, их стоит объединить в один сервис. Это помогает упростить структуру и избежать циклов.

Заключение
Циклические зависимости могут вводить в заблуждение и приводить к проблемам в проектах на NestJS. Следите за зависимостями в вашем коде, и используйте предложенные методы решения, чтобы легко избежать этих проблем.


Типы связывания,сильное и слабое связывание, и приведите примеры того, как модули NestJS способствуют достижению слабого связывания в модульном приложении.
Связывание (coupling) — это термин, используемый в программировании для описания степени зависимости между модулями или компонентами приложения. Существует два основных типа связывания:

Сильное связывание (Tight Coupling): Модули тесно связаны друг с другом, что затрудняет их повторное использование и тестирование. Они зависят от конкретных реализаций друг друга.
Слабое связывание (Loose Coupling): Модули слабо связаны друг с другом, что позволяет легко изменять или заменять один модуль без необходимости изменения других. Это способствует лучшей масштабируемости и поддерживаемости кода.
Пример сильного связывания
Рассмотрим простой пример. У нас есть класс UserService, который зависит от конкретной реализации модуля EmailService:

class EmailService {
  sendEmail(email: string, content: string) {
    console.log(`Sending email to ${email} with content: ${content}`);
  }
}

class UserService {
  private emailService: EmailService;

  constructor() {
    this.emailService = new EmailService(); // Сильное связывание
  }

  notifyUser(email: string) {
    this.emailService.sendEmail(email, 'Вы зарегистрированы!');
  }
}
В этом примере UserService жестко зависит от EmailService, и если мы захотим использовать другой сервис для отправки сообщений, нам нужно будет изменить код UserService.

Пример слабого связывания с использованием NestJS
NestJS предоставляет механизмы для достижения слабого связывания через использование инъекции зависимостей. Рассмотрим аналогичный пример, но с использованием интерфейсов и провайдеров NestJS:

interface EmailService {
  sendEmail(email: string, content: string): void;
}

@Injectable()
class SmtpEmailService implements EmailService {
  sendEmail(email: string, content: string) {
    console.log(`SMTP: Sending email to ${email} with content: ${content}`);
  }
}

@Injectable()
class UserService {
  constructor(private emailService: EmailService) {} // Слабое связывание с помощью инъекции зависимостей

  notifyUser(email: string) {
    this.emailService.sendEmail(email, 'Вы зарегистрированы!');
  }
}
Здесь UserService зависит от абстракции EmailService, а не от конкретной реализации. Кроме того, мы используем механизм зависимостей NestJS для передачи нужного сервиса при создании UserService.

Как NestJS способствует слабому связыванию
NestJS облегчает создание слабосвязанных компонентов с помощью:

Инъекции зависимостей: Вы можете легко предоставлять зависимости, не привязывая их к конкретным реализациям.
Интерфейсов и абстракций: Использование интерфейсов позволяет изменять реализацию, не изменяя само приложение.
Модулей: NestJS позволяет разделять приложение на модули, что уменьшает зависимости между ними.
Вот пример модуля в NestJS:

@Module({
  providers: [UserService, SmtpEmailService],
  exports: [UserService], // Экспортируем UserService для использования в других модулях
})
class UserModule {}
Заключение
Слабое связывание — ключевой аспект проектирования удобочитаемых, масштабируемых и сопровождаемых приложений. NestJS, благодаря своим средствам инъекции зависимостей и модульной архитектуре, значительно упрощает этот процесс, позволяя разработчикам сосредоточиться на бизнес-логике, а не на управлении зависимостями.


Что такое пользовательские провайдеры и чем они отличаются от стандартных провайдеров в NestJS?
NestJS — это мощный фреймворк для построения серверных приложений на TypeScript, который использует модульную архитектуру. В NestJS провайдеры (Providers) являются основным строительным блоком, который требуется для внедрения зависимостей (Dependency Injection). В этой статье мы рассмотрим пользовательские провайдеры и их отличие от стандартных.

Что такое провайдеры?
Провайдеры в NestJS — это классы, создающие и предоставляющие экземпляры, которые можно внедрять в другие классы через конструкторы. Они могут представлять собой сервисы, репозитории, фабрики и другие объекты.

Пример стандартного провайдера:

import { Injectable } from '@nestjs/common';

@Injectable()
export class CatsService {
    private readonly cats = [];

    addCat(cat: string) {
        this.cats.push(cat);
    }

    getCats() {
        return this.cats;
    }
}
Пользовательские провайдеры
Пользовательские провайдеры (Custom Providers) — это более гибкий способ создания провайдеров, который позволяет разрабатывать и регистрировать провайдеры, используя различные механизмы, такие как функции, значения или даже динамическое создание. Это позволяет улучшить модульность и предсказуемость кода.

Как создать пользовательский провайдер?
Вы можете создать пользовательский провайдер, используя useFactory, useClass или useValue.

Используя useClass
import { Injectable } from '@nestjs/common';

@Injectable()
export class MyService {
    // Пожалуй, это один из самых простых примеров пользовательского провайдера
}

@Module({
    providers: [
        { provide: 'MyToken', useClass: MyService },
    ],
})
export class MyModule {}
Используя useValue
const myValue = { name: 'MyValue' };

@Module({
    providers: [
        { provide: 'MyValueToken', useValue: myValue },
    ],
})
export class MyModule {}
Используя useFactory
const myFactory = () => {
    return { name: 'FactoryValue' };
};

@Module({
    providers: [
        { provide: 'FactoryToken', useFactory: myFactory },
    ],
})
export class MyModule {}
Разница между стандартными и пользовательскими провайдерами
Способ определения:
Стандартные провайдеры объявляются с помощью декоратора @Injectable().
Пользовательские провайдеры могут быть созданы с помощью функции, класса, значения или даже других компонентов и функций, которые возвращают требуемый экземпляр.
Гибкость:
Стандартные провайдеры могут быть легко внедрены, но если вам нужно создать провайдер с динамической логикой или конфигурацией, вам нужны пользовательские провайдеры.
Тестируемость:
Пользовательские провайдеры могут упростить процесс создания поддельных (mock) провайдеров для тестирования, поскольку они могут предоставлять зависимости, основанные на окружении.
Заключение
Пользовательские провайдеры в NestJS предоставляют разработчикам возможность создавать более гибкие и мощные механизмы внедрения зависимостей. Понимание различий между стандартными и пользовательскими провайдерами поможет вам лучше организовать ваш код и упростить проектирование сложных приложений.


Как объявить класс контроллером в NestJS?
NestJS — это прогрессивный фреймворк для создания серверных приложений на Node.js, который вдохновлен архитектурными паттернами, такими как MVC (Model-View-Controller). Контроллеры в NestJS отвечают за обработку входящих запросов и возврат ответов. В этом ответе мы рассмотрим, как объявить класс в качестве контроллера в NestJS.

Шаги для создания контроллера
Создайте новый контроллер. Вы можете создать контроллер вручную или использовать встроенный CLI NestJS для автоматической генерации.
Чтобы создать контроллер с помощью CLI, выполните следующую команду:
nest generate controller users

В результате будет создан файл users.controller.ts (или .js, если вы используете JavaScript).
Импортируйте необходимые модули. В вашем контроллере необходимо импортировать декораторы и классы из @nestjs/common:
import { Controller, Get, Post, Body, Param } from '@nestjs/common';
Объявите класс контроллера. Используйте декоратор @Controller() для объявления вашего класса контроллером. Вы можете передать в этот декоратор строку, которая будет служить базовым маршрутом для этого контроллера.
Например:
@Controller('users')
export class UsersController {
    @Get()
    findAll() {
        return 'Это возвращает всех пользователей';
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return `Это возвращает пользователя с id ${id}`;
    }

    @Post()
    create(@Body() userData: any) {
        return 'Пользователь создан';
    }
}
Разбор примера кода
Декоратор @Controller('users'): Указывает, что все маршруты в этом контроллере будут начинаться с /users.
Метод findAll(): Обрабатывает GET-запросы по маршруту /users и возвращает строку с информацией о всех пользователях.
Метод findOne(@Param('id') id: string): Обрабатывает GET-запросы по маршруту /users/:id, где :id — это переменная в маршруте, представляющая идентификатор пользователя. Этот метод возвращает строку с конкретным идентификатором пользователя.
Метод create(@Body() userData: any): Обрабатывает POST-запросы на /users и принимает данные пользователя из тела запроса.
Заключение
Теперь вы знаете, как создать и объявить класс контроллером в NestJS. Контроллеры играют важную роль в обработке запросов и распределении обязанностей между различными частями вашего приложения. Используйте декораторы и методы для определения маршрутов и специфики обработки запросов. Практика в создании контроллеров поможет вам лучше понимать, как работает NestJS и как строить эффективные серверные приложения.


Что такое внедрение зависимостей в Angular?
В соответствии с архитектурными принципами, внедрение зависимостей (Dependency Injection, DI) — это паттерн проектирования, который используется для достижения инверсии контроля. Он позволяет создавать классы и компоненты, которые не зависят от конкретных реализаций своих зависимостей. Вместо этого они получают необходимые зависимости через параметры конструктора или свойства.

Зачем необходимо внедрение зависимостей?
Упрощение тестирования: Зависимости можно легко заменять макетами (mock) для юнит-тестирования.
Лучшее управление зависимостями: Angular управляет жизненным циклом зависимостей, что позволяет избежать ненужного создания и уничтожения объектов.
Повышение гибкости и переиспользования компонентов: Легко заменить одну реализацию зависимости на другую без изменения логики самого компонента.
Как работает внедрение зависимостей в Angular?
Angular предоставляет встроенный механизм внедрения зависимостей, который использует Injector. Это специальный сервис, который отвечает за создание и предоставление экземпляров классов.

Пример использования внедрения зависимостей
Создание сервиса: Начнем с создания простого сервиса, который будет предоставлять данные.
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private data: string[] = ['Angular', 'React', 'Vue'];

  getData(): string[] {
    return this.data;
  }
}
В этом коде мы создаем сервис DataService, который имеет метод getData, возвращающий массив строк. Аннотация @Injectable сообщает Angular, что этот класс может быть внедрен в другие классы.

Использование сервиса в компоненте:
import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-data',
  template: `
    <ul>
      <li *ngFor="let item of items">{{ item }}</li>
    </ul>
  `,
})
export class DataComponent implements OnInit {
  items: string[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.items = this.dataService.getData();
  }
}
В этом компоненте DataComponent мы внедряем DataService через конструктор. Angular автоматически создает экземпляр DataService и передает его в DataComponent. Метод ngOnInit выполняется после инициализации компонента, где мы используем сервис для получения данных.

Заключение
Внедрение зависимостей является ключевым аспектом разработки с Angular. Понимание этого паттерна поможет вам более эффективно управлять зависимостями в ваших приложениях. Практикуйтесь в создании и использовании сервисов, чтобы стать более уверенным в использовании внедрения зависимостей в своих проектах.


Какова разница между внедрением зависимостей и инверсией управления (IoC)?
Веб-разработка и архитектура программного обеспечения часто используют концепции внедрения зависимостей (DI) и инверсии управления (IoC) для создания чистого, поддерживаемого и тестируемого кода. Хотя эти два термина часто используются вместе и могут перекрываться, у них есть свои уникальные характеристики и определения.

Внедрение зависимостей (Dependency Injection)
Внедрение зависимостей — это паттерн проектирования, который позволяет осуществлять передачу зависимостей объекту через конструктор, метод или поле. Вместо того чтобы объект сам создавал свои зависимости, они «внедряются» в него извне. Это делает систему более модульной и упрощает ее тестирование, так как можно легко подменить зависимости на моки или стабы.

Пример внедрения зависимостей в NestJS:

import { Injectable } from '@nestjs/common';

@Injectable()
class CatsService {
  getCats() {
    return ['Cat1', 'Cat2'];
  }
}

@Injectable()
class AppController {
  constructor(private readonly catsService: CatsService) {}

  getCats() {
    return this.catsService.getCats();
  }
}
В этом примере CatsService является зависимостью для AppController. Dependence Injection здесь позволяет NestJS автоматически инъектировать экземпляр CatsService в AppController.

Инверсия управления (Inversion of Control, IoC)
Инверсия управления — это более широкая концепция, которая относится к принципу, согласно которому управление потоком выполнения программной модели передается из приложения в фреймворк. Это означает, что вместо того, чтобы программа управляла потоком контроля, как в минималистичных приложениях, фреймворк управляет тем, как и когда какие процессы выполняются.

Инверсия управления достигается через внедрение зависимостей, но может также используется с другими паттернами, такими как фасады и события.

Сравнение
Область применения: DI фокусируется на том, как зависимые объекты передаются в класс, тогда как IoC охватывает более широкие аспекты управления управлением потока выполнения.
Гибкость: DI способствует большей гибкости и тестируемости, так как позволяет легко подменять зависимости. IoC упрощает интеграцию различных компонентов в единую систему.
Реализация: DI часто реализуется через IoC-контейнеры, такие как служба NestJS, которая автоматически управляет созданиями и передачами зависимостей.
Заключение
Понимание различий между внедрением зависимостей и инверсией управления является ключевым для разработки поддерживаемого и тестируемого кода. Responsibilities Inversion позволяет сосредоточиться на архитектуре приложения, в то время как Dependency Injection обеспечивает возможность легко управлять зависимостями внутри этой архитектуры.


В чем разница между декораторами @Injectable() и @Inject()?
В NestJS, фреймворке для создания серверных приложений на Node.js, существуют различные декораторы, которые облегчают работу с зависимостями и инъекциями. Два из наиболее часто используемых декораторов — это @Injectable() и @Inject(). Рассмотрим их отличие и области применения.

Декоратор @Injectable()
@Injectable() декоратор используется для определения класса как службы (service). Это значит, что экземпляры такого класса могут быть созданы и управляемы NestJS и могут быть использованы в качестве зависимостей в других классах, таких как контроллеры и другие сервисы.

Пример использования @Injectable():

import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [];

  addUser(user: any) {
    this.users.push(user);
  }

  findAll() {
    return this.users;
  }
}
В этом примере UsersService помечен декоратором @Injectable(), что позволяет NestJS управлять его жизненным циклом и инъекцией в другие классы.

Декоратор @Inject()
@Inject() декоратор используется для явной инъекции зависимости в класс. Он применяется, когда зависит от конкретного провайдера, особенно если необходимо переопределить имя зависимости или тип.

Пример использования @Inject():

import { Injectable, Inject } from '@nestjs/common';
import { DATABASE_CONNECTION } from './database.constants';

@Injectable()
export class UsersService {
  constructor(
    @Inject(DATABASE_CONNECTION) private dbConnection: any,
  ) {}

  async findAll() {
    return await this.dbConnection.query('SELECT * FROM users');
  }
}
В этом примере @Inject(DATABASE_CONNECTION) используется для инъекции конкретного провайдера, который был зарегистрирован в модуле. Обычно этот декоратор используется, когда вы хотите инъектировать зависимости, которые не имеют соответствующего типа в NestJS.

Основные отличия
Назначение:
@Injectable() предназначен для объявления класса как службы, чтобы NestJS мог управлять его экземплярами.
@Inject() используется для инъекции конкретных зависимостей в классы и позволяет явно указать, какую зависимость нужно инъекцировать.
Применение:
@Injectable() применяется на уровне классов.
@Inject() применяется на уровне конструктора и позволяет указать, какие именно зависимости необходимы для данного класса.
Заключение
Понимание различий между @Injectable() и @Inject() и их правильное использование — это важная часть работы с зависимостями в NestJS. В то время как @Injectable() объявляет сущность как пригодную для инъекции, @Inject() позволяет вам указать, какие конкретные зависимости вы хотите получить. Их совместное использование позволяет создавать гибкие и масштабируемые приложения.


Какова разница между перехватчиками и посредниками?
При работе с NestJS, многие начинающие разработчики могут сталкиваться с терминами "перехватчики" и "посредники" (middleware). Эти два концепта часто путают, однако они выполняют разные задачи в архитектуре приложения. Давайте разберёмся в их основных различиях и увидим примеры кода.

Определения
Промежуточное ПО (Middleware) — это функции, которые обрабатываются перед тем, как запрос достигнет маршрутизатора. Они могут использоваться для выполнения операций, таких как аутентификация, логирование, модификация объекта запроса и так далее. Middleware имеет доступ к объектам request, response и функции next, чтобы продолжить выполнение последовательности.

Перехватчики (Interceptors) — это функции, которые могут обрабатывать запросы и ответы во время обработки контроллером. Они обеспечивают более мощный способ для работы с результатами выполнения метода контроллера. Перехватчики могут трансформировать результат, модифицировать параметры запроса, а также реализовывать дополнительную логику перед возвращением ответа.

Пример использования Middleware
Давайте рассмотрим примеры кода для каждого из них.

Пример middleware
import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    console.log(`Request... Method: ${req.method} URL: ${req.url}`);
    next(); // Необходимо для перехода к следующему middleware или маршруту
  }
}

// Регистрация middleware в модуле
import { Module, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';

@Module({
  controllers: [AppController],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes('*'); // Применить ко всем маршрутам
  }
}
Пример использования Interceptor
Теперь давайте посмотрим на пример перехватчика.

Пример interceptor
import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const now = Date.now();
    return next
      .handle()
      .pipe(
        tap(() => console.log(`Response... ${Date.now() - now}ms`)),
      );
  }
}

// Регистрация interceptor в модуле
import { Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';

@Module({
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor,
    },
  ],
})
export class AppModule {}
Заключение
Middleware обрабатывает запрос до того, как он достигнет контроллера. Его основная цель — выполнять общие задачи, такие как аутентификация и логирование.
Interceptors могут изменять данные как до, так и после того, как они были обработаны контроллером, и могут обрабатывать результат выполнения.
Оба инструмента полезны в различных ситуациях, и понимание их различий поможет вам лучше проектировать свои приложения на NestJS.


В чем разница между NestJS и Angular?
NestJS и Angular — это оба популярные фреймворки, но они предназначены для разных задач в разработке приложений. Давайте рассмотрим их различия более подробно.

1. Назначение фреймворков
NestJS:
NestJS — это фреймворк для создания серверных приложений на языке программирования TypeScript. Он основан на идеях модульности, инъекции зависимостей и использует архитектуру, вдохновленную Angular. Если вы разрабатываете API или серверное приложение, NestJS — отличный выбор.
Angular:
Angular — это фреймворк для создания клиентских приложений, то есть для разработчиков, создающих интерфейсы пользователя. Он также написан на TypeScript и предоставляет мощные инструменты для построения отзывчивых и динамичных веб-приложений.
2. Архитектура
NestJS:
NestJS использует модульную архитектуру, где приложения делятся на модули, контроллеры и сервисы. Это позволяет структурировать код и повторно использовать компоненты.
import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
Angular:
Angular также использует модульную архитектуру, но она ориентирована на компоненты. Каждый компонент может содержать HTML-метки, CSS и логику программы, что делает компоненты независимыми и переиспользуемыми.
import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  userName: string = 'John Doe';
}
3. Зависимости и управление состоянием
NestJS:
В NestJS инъекция зависимостей является важным аспектом, который помогает управлять зависимостями между сервисами и контроллерами. Это упрощает тестирование и поддержку кода.
Angular:
Angular также поддерживает инъекцию зависимостей и предоставляет сервисы для управления состоянием приложения, такие как NgRx, позволяющие легко управлять состоянием приложения.
4. Использование
NestJS:
Используется для создания RESTful API, GraphQL-сервисов и микросервисов.
Angular:
Используется для создания интерактивных пользовательских интерфейсов и одностраничных приложений (SPA).
Заключение
Таким образом, основное отличие между NestJS и Angular заключается в области их применения: первый предназначен для серверной разработки, а второй — для клиентской. Выбор между ними зависит от ваших нужд: если вы разрабатываете сервер, выбирайте NestJS, а если — клиентское приложение, то Angular.

Знания об обоих фреймворках будут полезны для любого фронтенд-разработчика, поскольку они могут использоваться вместе для создания полностековых приложений.


Какой файл является входным в приложении NestJS?
В NestJS, входным файлом приложения является файл, который отвечает за инициализацию и запуск всего приложения. Обычно этот файл называется main.ts. В этом файле начинается процесс настройки приложения, регистрации модулей, создания экземпляра приложения и его запуска.

Пример содержимого файла main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}

bootstrap();
Объяснение кода
Импорт необходимых модулей:
NestFactory: это класс, который предоставляет методы для создания NestJS приложения.
AppModule: это основной модуль приложения, в котором вы определяете компоненты, контроллеры, сервисы и другие модули.
Функция bootstrap:
Это асинхронная функция, которая создает экземпляр приложения с помощью NestFactory.create(AppModule). На этом этапе NestJS загружает и инициализирует все модули, указанные в вашем AppModule.
Затем приложение начинает слушать входящие HTTP-запросы на определенном порту (в данном случае на порту 3000) с помощью await app.listen(3000);.
Параметры и дополнительные настройки
Вы можете передавать дополнительные параметры в метод listen, такие как конфигурация CORS, настройка логирования и другие опции. Например:

await app.listen(3000, '0.0.0.0', () => {
  console.log(`Приложение запущено: http://localhost:3000`);
});
Заключение
Файл main.ts — это ключевой элемент любой NestJS приложения, который отвечает за инициализацию и запуск всего приложения. Понимание его структуры и функций — essentiel для успешного начала работы с NestJS.


Объясните концепцию переменных окружения в NestJS, и как их можно использовать для управления конфигурацией?
Переменные окружения — это динамические именованные значения, которые могут влиять на поведение программной системы. Они часто используются для хранения конфиденциальной информации, такой как учетные данные базы данных, API-ключи и другие настройки, которые могут изменяться в зависимости от среды, в которой работает приложение (например, разработка, тестирование или производство).

В NestJS, как и в других современных фреймворках, использование переменных окружения помогает изолировать настройки конфигурации от кода и обеспечить более безопасный и гибкий процесс развертывания.

Как использовать переменные окружения в NestJS?
NestJS предоставляет встроенную поддержку для работы с переменными окружения через пакет @nestjs/config. Вот пошаговое руководство по настройке и использованию переменных окружения в вашем приложении.

Установка зависимостей:
Сначала необходимо установить пакет @nestjs/config. Сделайте это с помощью команды:
npm install @nestjs/config
Создание файла .env:
Создайте файл .env в корне вашего проекта. В этом файле вы можете определить свои переменные окружения:
DATABASE_URL=postgres://user:password@localhost:5432/mydatabase
JWT_SECRET=my_super_secret_key
NODE_ENV=development
Импортирование модуля конфигурации:
В вашем основном модуле приложения (обычно в app.module.ts), импортируйте и настройте модуль ConfigModule:
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Делаем ConfigModule глобальным
    }),
    // другие модули вашего приложения
  ],
})
export class AppModule {}
Использование переменных окружения:
Теперь вы можете использовать переменные окружения в ваших сервисах и контроллерах. Для этого вам нужно инжектировать ConfigService:
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(private configService: ConfigService) {}

  getDatabaseUrl(): string {
    return this.configService.get<string>('DATABASE_URL');
  }

  getJwtSecret(): string {
    return this.configService.get<string>('JWT_SECRET');
  }
}
Запуск приложения:
Убедитесь, что ваш файл .env находится в корне проекта, и запустите приложение. Переменные окружения будут загружены автоматически, и вы сможете получить к ним доступ в любом сервисе или контроллере.
Преимущества использования переменных окружения
Безопасность: Конфиденциальные данные, такие как пароли и токены, не должны быть жестко закодированы в приложении.
Гибкость: Легко менять настройки для разных сред (разработка, тестирование, производство) без изменения кода.
Удобство: Упрощает управление конфигурацией, особенно в больших приложениях или командах.
Заключение
Использование переменных окружения в NestJS — это простой и эффективный способ управления конфигурациями вашего приложения. С их помощью вы можете обеспечить безопасность и гибкость, что крайне важно в современном программировании. Не забывайте, что переменные окружения могут быть загружены из различных источников, таких как Docker, CI/CD системы и другие, что делает их особенно полезными в рамках DevOps практик.


Какова цель ExecutionContext в NestJS?
ExecutionContext в NestJS играет важную роль в процессе обработки запросов и отвечает за контекст выполнения в рамках обработки каждого запроса. Это позволяет разработчикам более удобно взаимодействовать с различными аспектами запроса, такими как пользовательские данные, параметры маршрута и другие элементы, необходимые для выполнения задачи.

Что такое ExecutionContext?
ExecutionContext — это интерфейс, который предоставляет информацию о текущем запросе и контексте выполнения. Он используется, например, в Guard'ах, Interceptors и других компонентах NestJS, которые должны принимать решения в зависимости от состояния запроса.

Основные функции ExecutionContext:
Получение информации о текущем запросе и ответе.
Определение текущего контекста выполнения, который может включать информацию о HTTP-запросе, WebSocket, RPC и т.д.
Доступ к метаданным о текущем обработчике маршрута.
Пример использования ExecutionContext
Рассмотрим пример использования ExecutionContext в Guard'е. В этом примере мы создадим Guard, который проверяет, авторизован ли пользователь, основываясь на токене, переданном в заголовках запроса.

import {Injectable, CanActivate, ExecutionContext} from '@nestjs/common';
import {Request} from 'express';

@Injectable()
export class AuthGuard implements CanActivate {
    canActivate(context: ExecutionContext): boolean {
        const request: Request = context.switchToHttp().getRequest();
        const token = request.headers['authorization'];

        // Простейшая проверка наличия токена (действительную логику проверки необходимо реализовать)
        return token ? true : false;
    }
}
Объяснение примера
Импорт необходимых модулей: Мы импортируем Injectable, CanActivate и ExecutionContext из @nestjs/common, а также Request из express.
Создание Guard'а: Мы создаем класс AuthGuard, который реализует интерфейс CanActivate.
Метод canActivate:
Мы получаем текущий request из ExecutionContext с помощью метода switchToHttp().getRequest().
Затем извлекаем токен из заголовков запроса.
Простая проверка: если токен существует, возвращаем true, чтобы разрешить доступ, иначе — false.
Заключение
ExecutionContext предоставляет удобный метод для доступа к информации о запросе и его контексте, что делает его незаменимым инструментом в разработке безопасных и масштабируемых приложений на NestJS. Новички должны понимать, как использовать этот интерфейс для улучшения функциональности своих приложений и реализации логики доступа.


Объясните назначение ExecutionContext в промежуточном ПО NestJS.
В NestJS промежуточное ПО (middleware) — это функция, которая имеет доступ к объекту запроса (request), объекту ответа (response) и следующей функции в цикле обработки запросов (next). Промежуточное ПО может выполнять код, изменять объект запроса и ответа, завершать запрос и т.д. Одним из ключевых аспектов работы с middleware в NestJS является использование ExecutionContext.

Что такое ExecutionContext?
ExecutionContext — это абстракция, предоставляемая NestJS, которая предоставляет информацию о текущем контексте выполнения обработки запроса. Он содержит данные о текущем запросе, ответе и используемом обработчике (handler). Это позволяет разработчикам более гибко управлять тем, как их промежуточное ПО работает.

Зачем использовать ExecutionContext?
Получение информации о текущем запросе: ExecutionContext позволяет получить доступ ко всей информации о запросе, что может быть полезно для логирования или валидации.
Получение информации о маршруте: Можно использовать ExecutionContext для определения маршрута, который обрабатывается, а также для извлечения параметров маршрута или тела запроса.
Контекст обработки: Если у вас есть более сложное промежуточное ПО, которое зависит от состояния обработки запроса, ExecutionContext может помочь вам управлять этим состоянием.
Пример использования ExecutionContext
Вот пример того, как можно использовать ExecutionContext в промежуточном ПО:

import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { ExecutionContext } from '@nestjs/common';

@Injectable()
export class LoggingMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const context = this.getExecutionContext(req);
    console.log(`Request... Method: ${req.method}, URL: ${req.url}`);
    console.log('Execution context details:', context);
    next();
  }

  private getExecutionContext(req: Request): ExecutionContext {
    // Здесь вы можете создать свой собственный ExecutionContext
    // на основе данных из запроса, если это необходимо.
    // В реальных приложениях ExecutionContext управляется NestJS автоматически.
    return {} as ExecutionContext; // Заполните детализироанным контекстом по мере необходимости
  }
}
В данном примере LoggingMiddleware выводит в консоль метод и URL запроса. Мы также создаем (или можем заполнить) наш собственный ExecutionContext, если хотим управлять ею вручную.

Заключение
ExecutionContext является важным инструментом для работы с промежуточным ПО в NestJS. Он предоставляет все необходимые данные о текущем контексте выполнения, что позволяет точно настраивать логику обработки запросов. Понимание его роли и способа его использования может значительно улучшить ваши навыки разработки на NestJS.


Объясните назначение принципа инверсии зависимостей (DIP) в NestJS.
Принцип инверсии зависимостей (DIP) является одним из пяти принципов SOLID, которые описывают лучшие практики проектирования объекта и архитектуры программного обеспечения. DIP гласит:

Модули верхнего уровня не должны зависеть от модулей нижнего уровня. Оба типа модулей должны зависеть от абстракций (например, интерфейсов).
Абстракции не должны зависеть от деталей. Дetails должны зависеть от абстракций.
Применение DIP в NestJS помогает создать гибкую и тестируемую архитектуру приложения, отделяя бизнес-логику от зависимости конкретных реализаций.

Зачем это нужно?
Гибкость: Применение принципа позволяет легко заменять модули и адаптировать приложение под новые требования.
Тестируемость: Код становится легче тестировать, так как зависимости можно подменять на мок-объекты при тестировании.
Читаемость и поддерживаемость: Структура кода становится более понятной, так как зависимости явно заявлены через интерфейсы.
Пример реализации
Рассмотрим пример, где у нас есть сервис, который отправляет уведомления. Мы можем определить интерфейс для уведомлений и реализовать его в различных классах. Это позволит нам легко менять тип уведомлений без изменения кода самого сервиса.

Шаг 1: Определяем интерфейс
// notification.interface.ts
export interface Notification {
    send(message: string): void;
}
Шаг 2: Реализуем интерфейс для EmailNotification
// email.notification.ts
import { Notification } from './notification.interface';

export class EmailNotification implements Notification {
    send(message: string): void {
        console.log(`Отправлено по электронной почте: ${message}`);
    }
}
Шаг 3: Реализуем интерфейс для SmsNotification
// sms.notification.ts
import { Notification } from './notification.interface';

export class SmsNotification implements Notification {
    send(message: string): void {
        console.log(`Отправлено через SMS: ${message}`);
    }
}
Шаг 4: Создаем NotificationService, который использует зависимость через интерфейс
// notification.service.ts
import { Injectable } from '@nestjs/common';
import { Notification } from './notification.interface';

@Injectable()
export class NotificationService {
    constructor(private readonly notification: Notification) {}

    notify(message: string) {
        this.notification.send(message);
    }
}
Шаг 5: Подключение в модуле
// app.module.ts
import { Module } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { EmailNotification } from './email.notification';

@Module({
    providers: [
        NotificationService,
        {
            provide: 'Notification',
            useClass: EmailNotification, // Можем менять реализацию на SmsNotification по необходимости
        },
    ],
    exports: [NotificationService],
})
export class AppModule {}
Заключение
Применение принципа инверсии зависимостей в NestJS позволяет создать систему, которая легко адаптируется к изменениям, предоставляет высокую степень тестируемости и облегчает процесс поддержки кода. Используя подход с интерфейсами и внедрением зависимостей, разработчики могут сосредоточиться на создании бизнес-логики, не беспокоясь о конкретных реализациях.


Объясните назначение DTO (Data Transfer Objects) в NestJS.
DTO (Data Transfer Object) в NestJS является одним из ключевых компонентов, который облегчает передачу данных между клиентом и сервером. Они особенно полезны для валидации данных, упрощения структуры кода и повышения безопасности вашего приложения.

Зачем нужны DTO?
Валидация данных: DTO могут содержать правила валидации, которые помогают убедиться, что данные, полученные от клиента, соответствуют необходимым форматам. Это позволяет избежать ошибки на уровне бизнес-логики и упрощает обработку данных.
Снижение избыточности данных: Используя DTO, вы можете определить только те поля, которые необходимы для выполнения операции (например, создание или обновление ресурса), и игнорировать лишние.
Улучшенная читаемость и поддержка кода: DTO помогают структурировать данные, делая соответствующие объекты легче читаемыми и понятными для других разработчиков.
Пример использования DTO в NestJS
Допустим, мы создаем приложение для управления пользователями. Нам нужно создать пользователя с полями: имя, email и возраст.

Создаем DTO для пользователя:
import {IsEmail, IsInt, IsNotEmpty, IsString} from 'class-validator';

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsEmail()
    email: string;

    @IsInt()
    age: number;
}
В этом примере мы используем декораторы из class-validator для валидации входных данных. Например, @IsEmail() проверяет, что значение поля относится к формату email, а @IsString() и @IsNotEmpty() проверяют, что поле не пустое.

Используем DTO в контроллере:
import {Controller, Post, Body} from '@nestjs/common';
import {CreateUserDto} from './create-user.dto';

@Controller('users')
export class UserController {
    @Post()
    create(@Body() createUserDto: CreateUserDto) {
        return `Пользователь с именем ${createUserDto.name} успешно создан!`;
    }
}
В этом контроллере мы создаем метод create, который принимает объект createUserDto типа CreateUserDto. NestJS автоматически выполнит валидацию полученных данных согласно определениям, заданным в DTO.

Настройка валидации в основном модуле:
Не забудьте также включить валидацию в своем NestJS приложении:

import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {ValidationPipe} from '@nestjs/common';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.useGlobalPipes(new ValidationPipe());
    await app.listen(3000);
}

bootstrap();
Использование ValidationPipe позволит NestJS автоматически проверять запросы при каждом поступлении данных.

Заключение
DTO в NestJS — это мощный инструмент для работы с данными, который помогает как улучшить структуру приложения, так и защитить его от некорректных данных. Используя DTO, вы существенно упростите разработку и поддержку своего приложения.


Объясните различные модули в NestJS
NestJS — это прогрессивный Node.js фреймворк, который использует TypeScript и основан на архитектуре, вдохновленной Angular. Одной из ключевых концепций в NestJS являются модули. В этом ответе мы рассмотрим, что такое модули, как они работают и как их использовать.

Что такое модули в NestJS?
Модули в NestJS — это классы, помеченные декоратором @Module(), которые собирают и организуют связанные функциональные элементы приложения. Они помогают разделить приложение на более мелкие части, что облегчает его поддержку и понимание структуры.

Каждый модуль может содержать следующие элементы:

Контроллеры (Controllers): Они обрабатывают входящие запросы и возвращают ответы.
Поставщики (Providers): Логика бизнес-логики или доступ к данным (например, сервисы, репозитории).
Импортированные модули (Imported Modules): Возможно импортировать другие модули для использования их функциональности.
Пример создания модуля в NestJS
Рассмотрим пример создания простого модуля CatsModule, который управляет данными о кошках.

Создайте файл cats.module.ts:
import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';

@Module({
  controllers: [CatsController],
  providers: [CatsService],
})
export class CatsModule {}
Создайте контроллер cats.controller.ts:
import { Controller, Get } from '@nestjs/common';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  findAll(): string {
    return this.catsService.findAll();
  }
}
Создайте сервис cats.service.ts:
import { Injectable } from '@nestjs/common';

@Injectable()
export class CatsService {
  findAll(): string {
    return 'This action returns all cats';
  }
}
Импортирование модуля
Теперь, чтобы использовать CatsModule, нужно импортировать его в корневом модуле приложения app.module.ts:

import { Module } from '@nestjs/common';
import { CatsModule } from './cats/cats.module';

@Module({
  imports: [CatsModule],
})
export class AppModule {}
Заключение
Модули в NestJS позволяют структурировать приложение и упрощают его масштабирование и поддержку. Каждый модуль выполняет самодостаточную задачу, что делает код более организованным и понятным. Приведённый пример демонстрирует, как создать модуль с контроллером и сервисом, а также как импортировать его в приложение. Изучение модулей — это важный шаг для каждого разработчика, работающего с NestJS.


Как генерировать документацию API с помощью Swagger в NestJS?
Документация API — это важная часть разработки, особенно когда речь идет о RESTful сервисах. Она помогает разработчикам легко ориентироваться в вашем API, становится основным инструментом для коммуникации между фронтенд и бэкенд командами и упрощает интеграцию. Swagger — это один из самых популярных инструментов для документирования API, который позволяет автоматизировать этот процесс и создавать интерактивную документацию.

Шаги для интеграции Swagger в NestJS
Установите необходимые зависимости: Убедитесь, что у вас установлен пакет @nestjs/swagger и swagger-ui-express. Вы можете установить их с помощью npm:
npm install @nestjs/swagger swagger-ui-express
Импортируйте модуль Swagger в ваше приложение. Это обычно делает в основном файле вашего приложения (например, main.ts):
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('API документация')
    .setDescription('Описание вашего API')
    .setVersion('1.0')
    .addTag('api') // добавьте теги, если хотите
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);

  await app.listen(3000);
}
bootstrap();
Создайте DTO классы и используйте декораторы. Для генерации документации могут использоваться классы, которые описывают ваши данные. Вы можете использовать декораторы из @nestjs/swagger, чтобы описать поля вашего класса.
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    description: 'Имя пользователя',
    example: 'John Doe',
  })
  name: string;

  @ApiProperty({
    description: 'Электронная почта пользователя',
    example: 'john@example.com',
  })
  email: string;
}
Документируйте ваши методы контроллеров. Используйте декораторы, такие как @ApiResponse, @ApiTags, и другие, чтобы описать ваши контроллеры:
import { Controller, Post, Body } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';

@ApiTags('users')
@Controller('users')
export class UsersController {
  @Post()
  @ApiOperation({ summary: 'Создать пользователя' })
  @ApiResponse({ status: 201, description: 'Пользователь успешно создан.' })
  @ApiResponse({ status: 400, description: 'Некорректные данные.' })
  async create(@Body() createUserDto: CreateUserDto) {
    // Логика создания пользователя
  }
}
Преимущества документирования API
Упрощение интеграции: Хорошо документированное API упрощает процесс интеграции для других разработчиков, так как они могут легко находить нужные ресурсы и понимать, как с ними взаимодействовать.
Уменьшение ошибок: Четкая документация помогает избежать ошибок, возникающих из-за неправильного использования API.
Ускорение процесса разработки: Разработчики могут быстрее ориентироваться в коде, когда у них есть доступ к подробной документации.
Поддержка изменений: Когда API изменяется, документация служит напоминанием о том, что было изменено, и как это может повлиять на пользователей.
Использование Swagger в NestJS позволяет легко поддерживать и обновлять документацию, увеличивая продуктивность команды и снижая количество ошибок на этапе разработки.


Как обрабатывать ошибки в NestJS?
В NestJS обработка ошибок — это важная часть разработки, которая позволяет обеспечить стабильность и безопасность вашего приложения. Рассмотрим несколько способов, как можно обрабатывать ошибки в NestJS.

1. Глобальный обработчик ошибок
Вы можете создать глобальный обработчик ошибок, который будет перехватывать все необработанные исключения в вашем приложении. Для этого нужно использовать класс ExceptionFilter.

Пример создания глобального обработчика ошибок:

import {ExceptionFilter, Catch, ArgumentsHost, HttpException} from '@nestjs/common';
import {Response} from 'express';

@Catch()  // Этот декоратор позволяет ловить все возможные ошибки
export class AllExceptionsFilter implements ExceptionFilter {
    catch(exception: unknown, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();
        const request = ctx.getRequest();
        const status = exception instanceof HttpException ? exception.getStatus() : 500;

        const errorResponse = {
            statusCode: status,
            timestamp: new Date().toISOString(),
            path: request.url,
        };

        response.status(status).json(errorResponse);
    }
}
Этот фильтр можно зарегистрировать в главном приложении:

import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {AllExceptionsFilter} from './all-exceptions.filter';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.useGlobalFilters(new AllExceptionsFilter());
    await app.listen(3000);
}

bootstrap();
2. Использование встроенных исключений
NestJS уже предоставляет несколько встроенных исключций, такие как HttpException, которые вы можете использовать для обработки ошибок через HTTP.

Пример использования HttpException внутри контроллера:

import {Controller, Get, HttpException, HttpStatus} from '@nestjs/common';

@Controller('cats')
export class CatsController {
    @Get()
    getAllCats() {
        throw new HttpException('Кошки не найдены', HttpStatus.NOT_FOUND);
    }
}
При возникновении этой ошибки клиент получит статус 404 с сообщением "Кошки не найдены".

3. Обработка ошибок в сервисах
Если вам нужно обрабатывать ошибки на уровне сервисов, то вы можете использовать try-catch блоки. Это полезно, если вы работаете с внешними источниками данных или API.

Пример:

import {Injectable, NotFoundException} from '@nestjs/common';

@Injectable()
export class CatsService {
    private readonly cats = [];

    findCat(id: number) {
        const cat = this.cats.find(cat => cat.id === id);
        if (!cat) {
            throw new NotFoundException(`Кошка с ID ${id} не найдена`);
        }
        return cat;
    }
}
Заключение
Обработка ошибок в NestJS может быть выполнена множеством способов, и выбор метода зависит от ваших потребностей. Глобальные обработчики исключений, встроенные исключения и обработка ошибок внутри сервисов — это основные инструменты, которые позволят вам создавать надежные и устойчивые приложения.

Кроме того, не забывайте добавлять логирование ошибок и уведомления о них, чтобы пользователи могли получать своевременные ответы на возникшие проблемы.


Как можно обрабатывать транзакции баз данных в NestJS и почему транзакции важны в некоторых сценариях?
Введение в транзакции
Транзакции в базах данных — это операции, которые выполняются как единое целое. Если одна часть транзакции не удается, вся транзакция отменяется, что помогает избежать нарушения целостности данных. Это особенно важно при выполнении нескольких связанных операций, где необходимо, чтобы все изменения были применены или не применялись вовсе.

Импорт необходимых модулей
Для работы с транзакциями в NestJS обычно используют библиотеку TypeORM. Прежде всего, убедитесь, что вы установили необходимые пакеты:

npm install @nestjs/typeorm typeorm mysql
Здесь мы установили @nestjs/typeorm для интеграции TypeORM с NestJS и сам typeorm, который предоставляет механизмы для работы с транзакциями. В данном примере мы используем MySQL в качестве базы данных.

Создание сервиса с транзакциями
Следующий шаг — создать сервис, в котором будем обрабатывать транзакции. Вот пример, как это можно сделать:

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Connection } from 'typeorm';
import { User } from './user.entity';
import { Order } from './order.entity';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
        @InjectRepository(Order)
        private orderRepository: Repository<Order>,
        private connection: Connection,
    ) {}

    async createUserAndOrder(userData: any, orderData: any): Promise<void> {
        await this.connection.transaction(async (entityManager) => {
            const user = await entityManager.save(User, userData);
            orderData.userId = user.id;
            await entityManager.save(Order, orderData);
        });
    }
}
Объяснение кода
Импорт модулей: Мы импортируем необходимые модули из nestjs и typeorm.
Сервис UserService: В этом сервисе мы инжектируем репозитории для пользователя и заказа, а также объект соединения для работы с транзакциями.
Метод createUserAndOrder: Здесь мы создаем новый пользователь и новый заказ. Внутри этого метода мы используем this.connection.transaction, чтобы обернуть операции в транзакцию. Если что-то пойдет не так, все изменения будут отменены.
Зачем использовать транзакции?
Транзакции необходимы в следующих сценариях:

Поддержание целостности данных: Гарантия, что данные не будут оставлены в неполном или некорректном состоянии.
Сложные операции: Когда необходимо выполнить несколько операций, которые должны быть выполнены вместе (например, создание пользователя и сопутствующего заказа).
Обработка ошибок: Упрощает управление ошибками. Если одна из операций не удалась, система может автоматически откатить все изменения, что делает систему более стабильной.
Заключение
Использование транзакций в NestJS с TypeORM — это мощный способ управления важными операциями с данными. Помните, что всегда следует заботиться о целостности и устойчивости ваших данных, особенно в сложных средах. Таким образом, вы сможете создать надежные и безопасные приложения.


Как можно реализовать кеширование в NestJS?
Кеширование — это один из способов оптимизации производительности вашего приложения, позволяющий уменьшить время отклика и нагрузку на базу данных. В NestJS существует встроенная поддержка кеширования, и в этой статье мы рассмотрим, как просто реализовать эту функциональность.

Установка зависимости
Сначала нужно установить пакет, который предоставляет механизмы для кеширования. Вы можете использовать встроенный @nestjs/cache-manager, который является оберткой для популярного модуля cache-manager.

npm install --save @nestjs/cache-manager cache-manager
Настройка модуля кеширования
После установки зависимости необходимо настроить модуль кеширования в вашем приложении. Вы можете сделать это в основном модуле вашего приложения, например, app.module.ts:

import { Module } from '@nestjs/common';
import { CacheModule } from '@nestjs/cache-manager';
import { AppService } from './app.service';
import { AppController } from './app.controller';

@Module({
  imports: [
    CacheModule.register({
      // Настройки кеширования, например, время TTL (time to live) в секундах
      ttl: 5, // время жизни кеша в секундах
      max: 100, // максимальное количество элементов в кеше
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
Использование кеша в сервисах
Теперь, когда модуль кеширования настроен, вы можете использовать его в своих сервисах. Рассмотрим пример, где мы создаем сервис, который кеширует результаты API-запроса.

import { Injectable, Cacheable } from '@nestjs/common';
import { Cache } from 'cache-manager';

@Injectable()
export class AppService {
  constructor(private cacheManager: Cache) {}

  // Пример метода с кешированием
  async getData(): Promise<string> {
    const cachedValue = await this.cacheManager.get('myKey');
    
    // Если значение найдено в кеше, возвращаем его
    if (cachedValue) {
      return cachedValue as string;
    }

    // Если значение не найдено, выполняем некоторую тяжелую операцию
    const result = 'Некоторые данные'; // Это может быть ваш API-запрос.
    
    // Сохраняем результат в кеш
    await this.cacheManager.set('myKey', result, { ttl: 60 }); // Кешируем на 60 секунд

    return result;
  }
}
В этом примере при первом вызове метода getData() данные будут загружены и сохранены в кеш. При последующих вызовах в течение 60 секунд, метод будет возвращать кешированные данные, что позволит сократить время обработки.

Заключение
Кеширование — это мощный инструмент для повышения производительности, особенно в микросервисной архитектуре или при работе с множеством API-запросов. Используя @nestjs/cache-manager, вы можете легко внедрить кеширование в своем приложении на NestJS, просто и эффективно.

Теперь у вас есть базовое понимание того, как реализовать кеширование в NestJS. Экспериментируйте с различными настройками и находите наиболее оптимальные решения для ваших задач!


Какова роль миграционных скриптов в TypeORM и как создать и запустить миграции в приложении NestJS?
Миграционные скрипты в TypeORM играют важную роль в управлении изменениями в структуре базы данных в течение жизненного цикла приложения. Миграции позволяют вам отслеживать изменения схемы базы данных и применять их последовательно в различных средах (например, на локальном компьютере разработчика, в тестовой среде и на сервере).

Зачем нужны миграции?
Версионность схемы: Миграции позволяют обновлять и понижать версии схемы базы данных, записывая каждое изменение в виде отдельного скрипта.
Совместная работа: В команде разработчиков миграции помогают избежать конфликтов при изменении схемы базы данных.
Автоматизация развертывания: Миграции можно автоматически применять в процессе развертывания приложения, что упрощает управление обновлениями.
Как создать и запустить миграции в NestJS?
Для работы с миграциями в NestJS вам потребуется настроенный проект с использованием библиотеки TypeORM. Перед началом убедитесь, что у вас установлены необходимые зависимости:

npm install --save typeorm @nestjs/typeorm
Шаг 1: Настройка подключения к базе данных
В файле app.module.ts настройте подключение к базе данных, указав необходимые параметры:

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres', // тип базы данных
      host: 'localhost',
      port: 5432,
      username: 'your_username',
      password: 'your_password',
      database: 'your_database',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
      synchronize: false, // обязательно устанавливайте false при использовании миграций
    }),
  ],
})
export class AppModule {}
Шаг 2: Создание миграции
Чтобы создать новую миграцию, используйте команду CLI TypeORM или создайте файл миграции вручную. Пример создания миграции с помощью CLI:

npx typeorm migration:create -n CreateUserTable
Это создаст файл миграции в папке, указанной в параметре migrations. Откройте созданный файл и добавьте ваши изменения. Пример миграции для создания таблицы пользователей:

import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateUserTable1612345678901 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'user',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'email',
            type: 'varchar',
            isUnique: true,
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('user');
  }
}
Шаг 3: Запуск миграции
После того как вы создали миграцию, вы можете ее запустить, используя следующую команду:

npx typeorm migration:run
Эта команда применит все миграции, которые еще не были выполнены.

Шаг 4: Откат миграции
Если вы хотите откатить миграцию, используйте команду:

npx typeorm migration:revert
Эта команда вернет последнюю выполненную миграцию.

Заключение
Использование миграций в TypeORM значительно упрощает процесс управления схемой базы данных. Это особенно полезно при работе над проектами в команде, так как позволяет поддерживать согласованность и упрощает работу с изменениями базы данных. Теперь, когда вы знаете, как создавать и управлять миграциями в NestJS, вы можете без опасений вносить изменения в структуру своей базы данных.


Как Nest логгер отличается от стандартного console.log() и когда вы предпочтете использовать один вместо другого?
NestJS предлагает встроенный логгер, который предоставляет более мощные возможности по сравнению со стандартным console.log(). Давайте рассмотрим несколько ключевых отличий и ситуаций, когда лучше использовать один подход, а не другой.

Отличия между Nest логгером и console.log()
Уровни логирования: Nest логгер имеет поддержку различных уровней логирования (например, log, error, warn, debug, verbose). Это позволяет более точно фильтровать и структурировать выводимые сообщения.
import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class AppService {
    private readonly logger = new Logger(AppService.name);

    someMethod() {
        this.logger.log('Это информационное сообщение'); // Уровень info
        this.logger.error('Это сообщение об ошибке'); // Уровень error
        this.logger.warn('Это предупреждение'); // Уровень warning
    }
}
Настраиваемость: Вы можете настраивать и расширять функциональность логгера в Nest, добавляя свои собственные логгеры или конфигурации. Это может быть полезно, если вы хотите отправлять логи в удаленные системы (например, Logstash, Sentry и т.д.).
Контекст: Nest логгер автоматически добавляет контекст к сообщениям, что позволяет быстро определить, в каком модуле или сервисе возникло сообщение.
Интеграция с другими модулями: Nest логгер интегрируется с другими частями фреймворка, что позволяет вам логировать запросы HTTP, ошибки и другие системные события.
Когда использовать Nest логгер, а когда console.log()
Использовать Nest логгер:
Когда ваше приложение требует регистрации ошибок и предупреждений с различными уровнями серьезности.
Если вам нужно логировать события в различных модулях приложения и вы хотите поддерживать единообразный формат логирования.
Когда вы работаете в производственной среде, где удобно иметь централизованный подход к логированию и возможность отправки логов в системы мониторинга.
Использовать console.log():
Для быстрого отладки в процессе разработки, когда нужно быстро проверить значение переменной или результат выполнения функции.
Если ваше приложение является небольшим и не требует сложного логирования.
В случаях, когда вы не хотите добавлять лишние зависимости или настройку, особенно в простых проектах.
Пример интеграции Nest логгера
Вот пример контроллера в NestJS, который использует логгер:

import { Controller, Get, Logger } from '@nestjs/common';

@Controller('example')
export class ExampleController {
    private readonly logger = new Logger(ExampleController.name);

    @Get()
    getExample() {
        this.logger.log('Начинаем обработку запроса');
        // Логика обработки запроса
        this.logger.log('Запрос успешно обработан');
        return { message: 'Пример ответа' };
    }
}
В этом примере логгер используется для записи сообщений перед и после обработки запроса, что может помочь в диагностике проблем.

Заключение
В целом, Nest логгер предоставляет более широкие и мощные возможности по сравнению с console.log(), что делает его предпочтительным выбором для разработки помимо простейшей отладки. Выбор между ними зависит от потребностей вашего проекта и специфики задачи.


Как NestJS поддерживает аутентификацию и авторизацию?
NestJS предоставляет мощные инструменты и популярные подходы для реализации аутентификации и авторизации в веб-приложениях. В этом ответе мы подробно рассмотрим, как это можно сделать с помощью NestJS, включая примеры кода.

1. Основные концепции
Аутентификация — это процесс проверки личности пользователя. Чаще всего это делается с помощью логина и пароля.
Авторизация — это процесс проверки прав пользователя на выполнение определенных действий или доступ к ресурсам.
В NestJS для аутентификации и авторизации чаще всего используются middleware, guards и decorators.

2. Установка необходимых пакетов
Для начала работы с аутентификацией и авторизацией придется установить несколько пакетов. Для аутентификации с использованием JWT (JSON Web Token) установим следующие зависимости:

npm install @nestjs/jwt passport passport-jwt
npm install @nestjs/passport
3. Настройка модуля аутентификации
Создадим модуль аутентификации (auth.module.ts):

import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: 'your_secret_key', // Убедитесь, что этот ключ хранится в безопасном месте
      signOptions: { expiresIn: '60s' }, // Токен будет действителен 60 секунд
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
})
export class AuthModule {}
4. Реализация сервиса аутентификации
Создадим сервис аутентификации (auth.service.ts):

import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  async login(user: { username: string }): Promise<{ access_token: string }> {
    const payload = { username: user.username };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
5. Создание контроллера аутентификации
Создадим контроллер аутентификации (auth.controller.ts):

import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() user: { username: string }): Promise<{ access_token: string }> {
    return this.authService.login(user);
  }
}
6. Реализация стратегии JWT
Создадим стратегию JWT (jwt.strategy.ts):

import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'your_secret_key', // Должен соответствовать ключу из jwt.module.ts
    });
  }

  async validate(payload: any) {
    // Здесь вы можете реализовать логику по извлечению пользователя на основе payload
    return { userId: payload.sub, username: payload.username };
  }
}
7. Защита маршрутов с помощью Guards
Теперь, когда у нас есть структура для аутентификации, можно защищать маршруты с помощью guards. Например, создадим guard для проверки JWT:

import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {}
Теперь мы можем использовать этот guard в любом контроллере:

import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from './jwt-auth.guard';

@Controller('protected')
export class ProtectedController {
  @UseGuards(JwtAuthGuard)
  @Get()
  getProtectedResource() {
    return { message: 'Этот ресурс защищен!' };
  }
}
Заключение
После выполнения этих шагов вы настроите базовую систему аутентификации и авторизации в своем приложении на NestJS. При необходимости можно расширить функционал, добавив различные уровни доступа, обработку пользовательских ролей и другие сложные сценарии.

Помните, что безопасность — это важная часть разработки, и всегда следите за тем, чтобы ваши ключи и доступы были защищены.


Как NestJS обрабатывает CORS (Cross-Origin Resource Sharing)?
CORS (Cross-Origin Resource Sharing) — это механизм, который позволяет ограничивать доступ к ресурсам веб-приложения из других источников. Это особенно важно для соблюдения безопасности при работе с API, когда ваша серверная часть может находиться на другом домене, чем ваш клиент.

NestJS предоставляет встроенные возможности для настройки CORS. В этой статье мы рассмотрим, как просто и эффективно активировать CORS в приложении NestJS.

Как включить CORS в NestJS
Для того чтобы настроить CORS в приложении NestJS, вы можете воспользоваться следующими шагами:

Установка NestJS: Если вы еще не создали проект NestJS, начните с установки CLI NestJS и создания нового проекта.
npm i -g @nestjs/cli
nest new my-nest-project
cd my-nest-project
Включение CORS: В файле main.ts, который используется для инициализации вашего приложения, вы можете настроить CORS, используя объект конфигурации.
Вот пример кода:
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Настройка CORS
  app.enableCors({
    origin: 'http://example.com', // Замените на адрес вашего клиента
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Разрешить включение учетных данных (например, cookie)
  });

  await app.listen(3000);
}
bootstrap();
Объяснение конфигурации CORS
origin: Определяет, какие источники могут обращаться к вашему API. Вы можете указать конкретный домен, например, http://example.com, или использовать '*', чтобы разрешить все запросы из всех источников (не рекомендуется на продакшене из соображений безопасности).
methods: Определяет, какие HTTP методы разрешены. Вы можете указать несколько методов, разделяя их запятыми. В примере перечислены все стандартные методы.
credentials: Указывает браузеру, следует ли включать учетные данные (такие как cookies) в запросы. Если вы устанавливаете этот параметр в true, убедитесь, что ваш сервер настроен для поддержки CORS с учетом учетных данных.
Использование middleware для дополнительной настройки CORS
В NestJS также можно использовать middleware для более тонкой настройки CORS. Для этого вы можете создать специальное middleware-настраиваемое поведение.

import {Injectable, NestMiddleware} from '@nestjs/common';

@Injectable()
class CustomCorsMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: Function) {
        res.header('Access-Control-Allow-Origin', 'http://example.com');
        res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
        res.header('Access-Control-Allow-Headers', 'Content-Type');
        next();
    }
}
Далее вы можете зарегистрировать это middleware в вашем модуле:

import {Module, MiddlewareConsumer} from '@nestjs/common';

@Module({
    // другие импорты и провайдеры
})
export class AppModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(CustomCorsMiddleware)
            .forRoutes('*');
    }
}
Заключение
Настройка CORS в NestJS очень проста и предоставляет множество опций для настройки в соответствии с вашими требованиями. Правильная конфигурация CORS критически важна для безопасности вашего приложения и предотвращения нежелательного доступа. Надеюсь, что эта статья помогла вам лучше понять, как обрабатывать CORS в ваших проектах на NestJS.


Как NestJS обрабатывает взаимодействие с базами данных и какие базы данных поддерживаются?
NestJS — это прогрессивный фреймворк для создания серверных приложений на Node.js, который использует TypeScript. Одной из важных возможностей NestJS является его возможность взаимодействовать с различными базами данных. Для работы с базами данных в NestJS используются модули, позволяющие интегрировать различные ORM (Object-Relational Mapping) библиотеки.

Основные ORM, поддерживаемые NestJS:
TypeORM: Поддерживает множество баз данных, таких как MySQL, PostgreSQL, SQLite, Microsoft SQL Server и другие. TypeORM является одним из самых популярных решений для работы с реляционными базами данных.
Sequelize: Также поддерживает несколько типов баз данных, включая MySQL, PostgreSQL, MariaDB и SQLite. Sequelize предоставляет богатый функционал для работы с асинхронными данными.
Mongoose: Это решение для работы с MongoDB, документно-ориентированной NoSQL базой данных. Mongoose позволяет легко управлять схемами и данными.
Установка и использование TypeORM в NestJS:
Давайте рассмотрим, как использовать TypeORM для взаимодействия с базой данных. Для начала вам необходимо установить необходимые пакеты:

npm install --save @nestjs/typeorm typeorm mysql2
Конфигурация TypeORM в NestJS
Вы можете настроить TypeORM в вашем приложении NestJS следующим образом:

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql', // тип базы данных
      host: 'localhost',
      port: 3306,
      username: 'test',
      password: 'test',
      database: 'test',
      entities: [User],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([User]),
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class AppModule {}
Создание сущности User
Теперь давайте создадим сущность User, которая будет отражать структуру таблицы в базе данных:

import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  age: number;
}
Создание сервиса для взаимодействия с данными
Теперь создадим сервис для управления пользователями, который будет использовать TypeORM для выполнения CRUD операций:

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOne(id: number): Promise<User> {
    return this.usersRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
Резюме
NestJS предоставляет мощные инструменты для работы с базами данных через интеграцию с ORM. TypeORM является одним из наиболее часто используемых решений благодаря своей гибкости и поддержке множества баз данных. Вы также можете легко интегрировать другие ORM, такие как Sequelize и Mongoose, в зависимости от ваших потребностей.

С помощью вышеописанных шагов, вы сможете настроить взаимодействие с базой данных в своем приложении на NestJS, что позволит вам сосредоточиться на бизнес-логике вашего приложения, не беспокоясь о деталях работы с базой данных.


Объясните назначение декораторов @nestjs/graphql Resolver и @nestjs/graphql Scalar и их связь с GraphQL в NestJS.
В NestJS, GraphQL может быть интегрирован с помощью модуля @nestjs/graphql, который предоставляет мощные инструменты для создания API на основе спецификации GraphQL. Два ключевых компонента этого модуля - это декораторы @Resolver и @Scalar.

Декоратор @Resolver
Декоратор @Resolver используется для определения класса, который отвечает за обработку запросов GraphQL для определённого типа (или нескольких типов). Каждый резолвер может содержать методы, которые сопоставляются с полями в GraphQL-схеме.

Пример использования @Resolver:
import { Resolver, Query, Args } from '@nestjs/graphql';
import { User } from './user.entity';
import { UsersService } from './users.service';

@Resolver(() => User)
export class UsersResolver {
  constructor(private usersService: UsersService) {}

  @Query(() => [User])
  async users() {
    return this.usersService.findAll();
  }

  @Query(() => User)
  async user(@Args('id') id: number) {
    return this.usersService.findOne(id);
  }
}
В этом примере класс UsersResolver определяет два метода users и user, которые объявлены как GraphQL-запросы (Query). Первый метод возвращает массив пользователей, а второй - конкретного пользователя по его id.

Декоратор @Scalar
Декоратор @Scalar используется для определения пользовательских скалярных типов, которые не входят в стандартные типы GraphQL (такие как Int, String, Float и т.д.). Это может понадобиться, например, для работы с специальными типами данных, такими как даты или JSON-объекты.

Пример использования @Scalar:
import { Scalar, CustomScalar } from '@nestjs/graphql';
import { Kind } from 'graphql';

@Scalar('Date', () => Date)
export class DateScalar implements CustomScalar<number, Date> {
  description = 'Date custom scalar type';

  parseValue(value: number): Date {
    return new Date(value); // Значение из переменной запроса
  }

  serialize(value: Date): number {
    return value.getTime(); // Значение, которое будет отправлено клиенту
  }

  parseLiteral(ast: any): Date {
    if (ast.kind === Kind.INT) {
      return new Date(parseInt(ast.value, 10)); // Преобразование значения
    }
    return null;
  }
}
В этом примере DateScalar определяет пользовательский скалярный тип для работы с датами. Методы parseValue, serialize и parseLiteral позволяют обрабатывать данные, когда они поступают из запросов и когда они возвращаются клиенту.

Связь с GraphQL
Декораторы @Resolver и @Scalar играют важную роль в построении структуры вашего GraphQL API в NestJS. @Resolver связывает конкретные классы с типами GraphQL, осуществляя обработку запросов и возрождение данных, в то время как @Scalar помогает определять и обрабатывать нестандартные типы данных.

Сквозное использование этих декораторов позволяет разработчикам гибко строить и расширять свои API, делая их более выразительными и соответствующими требованиям конкретных приложений.

Таким образом, освоение этих декораторов значительно улучшает опыт разработки и позволяет создавать более сложные и функциональные приложения на платформе NestJS с поддержкой GraphQL.


Объясните роль промежуточного ПО NestJS в контексте микросервисов и приведите сценарий, где промежуточное ПО полезно в конфигурации микросервисов.
Промежуточное ПО (middleware) в контексте NestJS — это функции, которые выполняются после запроса обработчиков и перед отправкой ответа. Они могут использоваться для выполнения различных задач, таких как обработка запросов, управление авторизацией и аутентификацией, логирование и обработка ошибок.

Роль промежуточного ПО в микросервисах
В микросервисной архитектуре промежуточное ПО играет важную роль, так как оно позволяет добавить дополнительный уровень обработки, который может использоваться для нескольких сервисов. Это позволяет обеспечить единообразие логики и облегчить управление взаимодействием между сервисами. Например, одно промежуточное ПО может обрабатывать авторизацию и проверку токенов для всех микросервисов, управляя потоком данных и соблюдением политики безопасности.

Пример использования промежуточного ПО в микросервисах
Предположим, у вас есть микросервис, отвечающий за аутентификацию пользователей, и другой, который обрабатывает заказы. Вы хотите убедиться, что все заказы могут быть сделаны только для аутентифицированных пользователей. Для этого вы можете создать промежуточное ПО, проверяющее токен пользователя.

Шаг 1: Создание промежуточного ПО
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).send('Unauthorized');
    }

    // Здесь можно добавить логику для проверки токена
    // Например, декодирование токена и проверка его действительности

    next();
  }
}
Шаг 2: Применение промежуточного ПО
Чтобы применить промежуточное ПО к маршрутам вашего микросервиса, вы можете использовать метод apply в модуле микросервиса:

import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AuthMiddleware } from './auth.middleware';
import { OrdersController } from './orders.controller';

@Module({
  controllers: [OrdersController],
})
export class OrdersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .forRoutes(OrdersController);
  }
}
Заключение
Промежуточное ПО в NestJS является мощным инструментом для управления логикой запросов, особенно в конфигурации микросервисов. Создание и использование промежуточного ПО позволяет вам эффективно обрабатывать авторизацию и другие общие задачи, обеспечивая безопасное и структурированное взаимодействие между различными сервисами.


Какова цель декоратора @Res() в контроллерах NestJS?
В NestJS декоратор @Res() используется в контроллерах для доступа к объекту ответа (Response object) от Express.js. Это позволяет разработчикам напрямую взаимодействовать с ответом HTTP, что предоставляет больше контроля над имением ответов.

Поддерживая Express.js под капотом, NestJS позволяет разработчикам использовать функции и методы, которые доступны в Express, через декоратор @Res(). Это может быть полезно, когда необходимо настроить заголовки ответа, код состояния, или вернуть файлы, json-данные и т. д.

Как использовать @Res()
Вот пример того, как использовать @Res() в контроллере NestJS:

import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller('example')
export class ExampleController {
  @Get()
  getHello(@Res() res: Response): void {
    res.status(200).send('Hello, World!');
  }

  @Get('json')
  getJson(@Res() res: Response): void {
    const data = { message: 'Hello, JSON!' };
    res.status(200).json(data);
  }

  @Get('file')
  getFile(@Res() res: Response): void {
    const filePath = 'path/to/file.txt';
    res.download(filePath, (err) => {
      if (err) {
        res.status(500).send('Error downloading file');
      }
    });
  }
}
Пояснение примеров
Метод getHello():
Здесь мы используем res.status(200).send('Hello, World!') для отправки простого текстового ответа с кодом состояния 200.
Метод getJson():
В этом методе мы возвращаем JSON-ответ с сообщением. res.status(200).json(data) автоматически устанавливает заголовок Content-Type в application/json.
Метод getFile():
Метод для отправки файла клиенту. В данном случае мы используем res.download(filePath), чтобы инициировать загрузку файла. Обратите внимание, что анонимная функция обрабатывает ошибки, если они возникают во время загрузки.
Заключение
Использование декоратора @Res() предоставляет мощные возможности для настройки ответов HTTP в контроллерах NestJS. Это особенно полезно в ситуациях, когда вам нужно больше контроля над тем, как и что отправляется клиенту. Однако, важно помнить, что соответствии с философией NestJS, вы можете также использовать встроенные методы для автоматического формирования ответов, что может упрощать ваш код.


Как можно планировать задачи в NestJS?
В NestJS вы можете планировать задачи с использованием модуля @nestjs/schedule, который предоставляет функционал для простого и удобного создания расписаний для выполнения задач в фоновом режиме. Это может быть полезно, например, для отправки периодических уведомлений, выполнения задач по расписанию или очистки баз данных.

Установка модуля
Первым шагом будет установка необходимого пакета. Вы можете сделать это с помощью npm или yarn:

npm install --save @nestjs/schedule
или

yarn add @nestjs/schedule
Настройка модуля
После установки модуля вам необходимо зарегистрировать его в вашем приложении. Откройте главный модуль вашего приложения (обычно это app.module.ts) и добавьте ScheduleModule:

import {Module} from '@nestjs/common';
import {ScheduleModule} from '@nestjs/schedule';
import {AppService} from './app.service';
import {AppController} from './app.controller';

@Module({
    imports: [
        ScheduleModule.forRoot(), // Регистрация модуля планирования
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
Создание задачи с использованием Cron
Теперь вы можете создать задачу, которая будет выполняться по расписанию. Для этого создайте новый сервис, например tasks.service.ts:

import {Injectable} from '@nestjs/common';
import {Cron} from '@nestjs/schedule';

@Injectable()
export class TasksService {
    // Задача, которая будет выполняться каждую минуту
    @Cron('* * * * *')
    handleCron() {
        console.log('Задача выполняется каждую минуту');
    }
}
Использование TasksService
Теперь вам нужно зарегистрировать этот сервис в вашем AppModule:

import {Module} from '@nestjs/common';
import {ScheduleModule} from '@nestjs/schedule';
import {AppService} from './app.service';
import {AppController} from './app.controller';
import {TasksService} from './tasks.service'; // Импортируйте ваш сервис

@Module({
    imports: [
        ScheduleModule.forRoot(),
    ],
    controllers: [AppController],
    providers: [AppService, TasksService], // Добавьте сервис в провайдеры
})
export class AppModule {
}
Использование другого планировщика - Interval
Если вам нужно выполнять задачу с определенным интервалом, вы можете использовать декоратор @Interval. Вот пример, как это сделать:

import {Injectable} from '@nestjs/common';
import {Interval} from '@nestjs/schedule';

@Injectable()
export class TasksService {
    @Interval(5000) // Эта задача будет выполняться каждые 5 секунд
    handleInterval() {
        console.log('Эта задача выполняется каждые 5 секунд');
    }
}
Заключение
С помощью модуля @nestjs/schedule вы можете легко планировать задачи в вашем приложении на NestJS. Теперь вы можете использовать @Cron, @Interval и @Timeout для создания расписаний, которые соответствуют вашим требованиям. Это делает вашу систему более управляемой и добавляет множество возможностей в обработку фоновых задач.

Если вам нужно больше информации, вы можете ознакомиться с документацией NestJS здесь.


Как обеспечить безопасность своего приложения на NestJS?
Обеспечение безопасности веб-приложения является критически важной задачей для разработчиков. В этом ответе мы рассмотрим основные подходы и рекомендации по безопасности вашего приложения на базе NestJS.

1. Использование SSL/TLS
Обеспечение защищенного соединения между клиентом и сервером является первым шагом в направлении безопасности. Используйте HTTPS вместо HTTP. Это можно сделать с помощью конфигурации вашего веб-сервера (например, Nginx или Apache) или с помощью самого NestJS.

2. Аутентификация и авторизация
Используйте JWT (JSON Web Tokens) для аутентификации пользователей. Это позволит защитить ваши конечные точки и обеспечить доступ только авторизованным пользователям.

Пример использования @nestjs/jwt:

npm install @nestjs/jwt passport-jwt passport
// app.module.ts
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth/auth.service';
import { AuthController } from './auth/auth.controller';

@Module({
  imports: [
    JwtModule.register({
      secret: 'секретныйключ', // используйте переменные окружения для хранения секретов
      signOptions: { expiresIn: '60s' }, // срок действия токена
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AppModule {}
3. Валидация вводимых данных
Всегда валидируйте данные, полученные от клиента. Используйте классические библиотеки для валидации, такие как class-validator и class-transformer.

npm install class-validator class-transformer
Пример DTO с валидацией:

import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;
}
4. Защита от атак
Защита от XSS (Cross-Site Scripting)
Защита от CSRF (Cross-Site Request Forgery)
Используйте заголовки безопасности, такие как CSP (Content Security Policy), и защищайте свои формы с помощью токенов CSRF.

5. Ограничение скорости запросов
Для предотвращения атак типа DoS (Denial of Service), вы можете использовать библиотеку express-rate-limit.

npm install express-rate-limit
Пример использования:

import { Module } from '@nestjs/common';
import { RateLimiterModule } from 'nestjs-rate-limiter';

@Module({
  imports: [
    RateLimiterModule.forRoot({
      points: 10, // количество запросов
      duration: 1, // временной промежуток в секундах
    }),
  ],
})
export class AppModule {}
Заключение
Соблюдение этих рекомендаций поможет вам значительно повысить уровень безопасности вашего приложения на NestJS. Не забывайте следить за обновлениями библиотек и фреймворков, чтобы защитить ваше приложение от известных уязвимостей.


Объясните концепцию сериализации и десериализации в NestJS.
Сериализация и десериализация — это важные концепции в разработке приложений, особенно когда дело касается обмена данными между клиентом и сервером. В рамках NestJS, который строится на основе TypeScript и Node.js, эти процессы играют ключевую роль в управлении входящими и исходящими данными.

Сериализация
Сериализация — это процесс превращения объекта в формат, который может быть легко передан по сети или сохранён в базе данных. Обычно это JSON, но могут использоваться и другие форматы, такие как XML.

В NestJS мы часто используем сериализацию, чтобы преобразовать объекты, возвращаемые нашим контроллерам, в формат JSON. Для этого мы можем использовать встроенные механизмы и декораторы.

Пример кода: Сериализация объекта
Допустим, у нас есть простой DTO (Data Transfer Object) для пользователя:

import {IsString, IsInt} from 'class-validator';

export class UserDto {
    @IsString()
    name: string;

    @IsInt()
    age: number;
}
Теперь, когда мы получаем объект пользователя в контроллере, мы можем вернуть его с помощью автоматической сериализации NestJS:

import {Controller, Get} from '@nestjs/common';
import {UserDto} from './user.dto';

@Controller('users')
export class UsersController {
    @Get()
    getUser(): UserDto {
        return {
            name: 'Иван',
            age: 30,
        };
    }
}
Десериализация
Десериализация — это обратный процесс, когда данные, полученные в формате JSON (или другом), преобразуются обратно в объект JavaScript, который можно использовать в приложении. В NestJS мы используем DTO и валидаторы для десериализации входящих данных.

Пример кода: Десериализация данных
Рассмотрим, как обработать входящие данные от клиента. Мы можем создать маршрутизатор, который принимает JSON с данными нового пользователя:

import {Controller, Post, Body} from '@nestjs/common';
import {UserDto} from './user.dto';

@Controller('users')
export class UsersController {
    @Post()
    createUser(@Body() userDto: UserDto): string {
        // Здесь userDto автоматически десериализуется и валидируется
        return `Пользователь ${userDto.name} создан`;
    }
}
В этом примере, когда клиент отправляет POST-запрос с данными пользователя, они автоматически десериализуются в объект UserDto. Кроме того, если мы используем классы-валидаторы, такие как class-validator, NestJS проведёт валидацию перед тем, как передать данные в метод.

Заключение
Сериализация и десериализация являются важными процессами в NestJS, позволяя нам легко управлять данными, поступающими и уходящими из приложения. Понимание этих концепций и умение их применять значительно упростит вашу работу в разработке приложений. Использование DTO и автоматическая сериализация/десериализация вашему коду делает его более чистым и поддерживаемым.


Как реализовать «мягкое» удаление в NestJS с использованием TypeORM и почему «мягкое» удаление может быть предпочтительнее «жесткого»?
Что такое «мягкое» и «жесткое» удаление?
Жесткое удаление (hard delete) подразумевает полное удаление записи из базы данных. После выполнения этой операции вы не можете восстановить удаленные данные.
Мягкое удаление (soft delete) при этом сохраняет запись в базе данных, но отмечает её как удалённую, например, с помощью флага (колонки), что позволяет скрыть её от обычных запросов. Это обеспечивает возможность восстановления данных.
Как реализовать «мягкое» удаление в NestJS с помощью TypeORM?
Для упрощенной демонстрации давайте создадим простой сервис с использованием Router и TypeORM.

Создаем сущность с флагом для «мягкого» удаления:
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ default: false })
  isDeleted: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
Создаем репозиторий и сервис для работы с пользователями:
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    // Мы выбираем только тех пользователей, которые не удалены
    return this.userRepository.find({ where: { isDeleted: false } });
  }

  async softDelete(id: number): Promise<void> {
    // Отметка пользователя как удаленного
    await this.userRepository.update(id, { isDeleted: true });
  }

  async restore(id: number): Promise<void> {
    // Восстановление пользователя
    await this.userRepository.update(id, { isDeleted: false });
  }
}
Создаем контроллер для обработки запросов:
import { Controller, Get, Param, Post, Delete } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async findAll() {
    return this.userService.findAll();
  }

  @Post('soft-delete/:id')
  async softDelete(@Param('id') id: number) {
    await this.userService.softDelete(id);
  }

  @Post('restore/:id')
  async restore(@Param('id') id: number) {
    await this.userService.restore(id);
  }
}
Почему «мягкое» удаление может быть предпочтительнее?
Восстановление данных: Легкость восстановления удаленных данных.
Логирование и аудит: Сохранение истории изменений и состояние данных.
Отладка: Возможность работы с тестовыми данными без потери содержимого.
Безопасность: Устранение риска случайного полного удаления важных данных.
Таким образом, мягкое удаление является полезной стратегией, особенно в приложениях, где сохранение целостности данных и возможность восстановления информации имеют критическое значение.


Почему важно, чтобы токены имели время истечения? Как реализовать истечение токенов в NestJS, и какую роль играют обновляющие токены в поддержании пользовательских сессий?
В современном веб-программировании вопрос безопасности играет ключевую роль. Аутентификация и управление пользователями являются более сложными задачами, чем когда-либо. Важным аспектом этих систем является использование токенов для аутентификации. В этом ответе мы обсудим, почему токены должны иметь время истечения, как реализовать истечение токенов в приложении на NestJS, и как обновляющие токены помогают поддерживать пользовательские сессии.

Почему токены должны иметь время истечения?
Токены, такие как JWT (JSON Web Tokens), часто используются для аутентификации пользователей в веб-приложениях. Установка времени истечения для этих токенов важна по нескольким причинам:

Безопасность: Если токен не имеет времени истечения, злоумышленник, получивший доступ к токену, может использовать его неограниченное время. Это увеличивает риск несанкционированного доступа.
Управление сессиями: Время истечения позволяет пользователям автоматически выходить из системы после определенного периода бездействия, что улучшает общее управление сессией.
Обновление токенов: Токены с истечением могут быть обновляемыми, что позволяет пользователю оставаться в системе, даже если старый токен истек.
Реализация истечения токенов в NestJS
Чтобы реализовать истечение токенов в вашем приложении на NestJS, вам нужно использовать библиотеку, такую как jsonwebtoken, для создания и валидации токенов. Также вам понадобится система, чтобы предоставить пользователю новый токен, когда старый истекает.

Вот пример, который показывает, как создать токен с установленным временем истечения:

import {Injectable} from '@nestjs/common';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthService {
    private readonly jwtSecret = 'your_jwt_secret';
    private readonly expiresIn = '1h'; // Токен истекает через 1 час

    generateAccessToken(userId: string): string {
        const payload = {id: userId};
        return jwt.sign(payload, this.jwtSecret, {expiresIn: this.expiresIn});
    }

    validateToken(token: string): any {
        try {
            return jwt.verify(token, this.jwtSecret);
        } catch (error) {
            return null; // Токен устарел или недействителен
        }
    }
}
В этом примере мы создаем метод generateAccessToken, который генерирует токен с истечением через 1 час. Метод validateToken проверяет токен и возвращает полезную информацию, если токен действителен, или null, если токен истек или недействителен.

Роль обновляющих токенов
Обновляющие токены используются для получения новых access-токенов без необходимости повторного входа в систему. Обычно обновляющие токены имеют более длительный срок действия по сравнению с access-токенами. Когда access-токен истекает, приложение может использовать обновляющий токен для получения нового access-токена.

Пример реализации обновляющего токена:


@Injectable()
export class AuthService {
    private readonly refreshTokens: string[] = [];

    generateRefreshToken(userId: string): string {
        const refreshToken = jwt.sign({id: userId}, this.jwtSecret, {expiresIn: '7d'}); // Обновляющий токен истекает через 7 дней
        this.refreshTokens.push(refreshToken); // Храним обновляющий токен (в реальном приложении используйте DB)
        return refreshToken;
    }

    refreshAccessToken(refreshToken: string): string | null {
        if (!this.refreshTokens.includes(refreshToken)) {
            return null; // Обновляющий токен недействителен
        }

        const payload = jwt.decode(refreshToken) as { id: string };
        return this.generateAccessToken(payload.id); // Генерируем новый access-токен
    }
}
В этом примере мы добавили методы для генерации и проверки обновляющего токена. Обновляющий токен хранится в массиве, но в реальном приложении лучше использовать базу данных для обеспечения безопасности.

Заключение
Время истечения токенов является критически важным аспектом безопасности в веб-приложениях. Реализация системы, которая поддерживает токены с истечением и обновляющие токены, значительно улучшает безопасность и управление сессиями пользователей. Используя приведенные выше примеры, вы можете начать создавать свою собственную систему аутентификации на NestJS.


Как реализовать механизм обновления токенов в NestJS?
Механизм обновления токенов (token refresh) является важной частью систем аутентификации, так как позволяет поддерживать пользовательские сессии без необходимости повторной аутентификации. В данной статье мы рассмотрим, как реализовать автоматическую стратегию обновления токенов в приложении на NestJS.

Основные концепции
Токены доступа и токены обновления:
Токен доступа (access token): используется для доступа к защищенным ресурсам и имеет короткое время жизни (например, 15 минут).
Токен обновления (refresh token): используется для получения нового токена доступа и имеет более длительное время жизни (например, 7 дней).
Стратегия обновления токенов:
Когда токен доступа истекает, клиент отправляет токен обновления на сервер, чтобы получить новый токен доступа.
Сервер проверяет токен обновления, и если он действителен, возвращает новый токен доступа.
Реализация в NestJS
Установка необходимых зависимостей
Сначала установим необходимые пакеты:

npm install @nestjs/jwt passport-jwt
Создание модуля аутентификации
Создадим модуль аутентификации, который будет содержать логику работы с токенами.

import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';

@Module({
  imports: [
    JwtModule.register({
      secret: 'your-secure-secret', // Убедитесь, что секрет безопасен
      signOptions: { expiresIn: '15m' }, // Время жизни токена доступа
    }),
  ],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
AuthService: Логика аутентификации и обновления токена
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  async generateAccessToken(userId: number) {
    return this.jwtService.sign({ userId });
  }

  async generateRefreshToken(userId: number) {
    return this.jwtService.sign({ userId }, { expiresIn: '7d' }); // Токен обновления
  }

  async refreshTokens(userId: number, refreshToken: string) {
    const payload = this.jwtService.verify(refreshToken); // Проверяем токен обновления
    if (!payload) throw new Error('Invalid refresh token');

    // Генерируем новый токен доступа
    const accessToken = await this.generateAccessToken(userId);
    return { accessToken };
  }
}
AuthController: Эндпоинт для обновления токена
import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('refresh')
  async refreshTokens(@Body('refreshToken') refreshToken: string) {
    // Здесь userId должен быть получен из базы данных, часто в реальных приложениях
    const userId = /* logic to get userId from refresh token */;
    return this.authService.refreshTokens(userId, refreshToken);
  }
}
Клиентская сторона
Для обновления токена с клиентской стороны (например, с использованием fetch):

async function refreshToken() {
  const response = await fetch('/auth/refresh', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ refreshToken: localStorage.getItem('refreshToken') }),
  });

  if (response.ok) {
    const data = await response.json();
    localStorage.setItem('accessToken', data.accessToken);
  } else {
    // Обработка ошибки: токен обновления недействителен
    console.error('Unable to refresh token');
  }
}
Заключение
Реализуя механизм обновления токенов в NestJS, вы улучшаете пользовательский опыт, позволяя пользователям оставаться в системе без частой повторной аутентификации. Этот пример служит базовым ориентиром, который можно адаптировать под более сложные сценарии в зависимости от требований вашего приложения.


Как токены используются для авторизации в API?
Когда речь заходит о веб-разработке и API, важно понимать два ключевых понятия: аутентификация и авторизация. Эти процессы часто путают, но это разные стадии работы с пользователем.

Аутентификация vs Авторизация
Аутентификация — это процесс проверки идентификационных данных пользователя. Проще говоря, это способ убедиться, что пользователь действительно тот, за кого себя выдает. Например, при вводе имени пользователя и пароля происходит аутентификация.
Авторизация — это процесс определения прав доступа пользователя после его аутентификации. То есть, даже если вы подтвердили личность пользователя, необходимо выяснить, какие действия и ресурсы ему доступны (например, может ли он редактировать запись или только просматривать).
Использование токенов для аутентификации и авторизации
Токены — это небольшие фрагменты данных, которые используются для подтверждения идентичности пользователя и предоставления ему доступа к определенным ресурсам.

Аутентификация с токенами:
После успешной аутентификации сервер генерирует токен (чаще всего JWT — JSON Web Token), который может быть отправлен клиенту. Токен включает в себя информацию о пользователе и срок действия.
Пример кода на NestJS для генерации токена:
import { sign } from 'jsonwebtoken';

const payload = { username: user.username, sub: user.id };
const token = sign(payload, secretKey, { expiresIn: '1h' });
Авторизация с токенами:
Каждый раз, когда клиент хвастит данные с сервера, он должен отправить свой токен в заголовке запроса. Сервер проверяет токен, и если он действителен и не истек, пользователь получает доступ к запрашиваемому ресурсу.
Пример использование токена в заголовке:
import axios from 'axios';

const token = 'ваш_токен';
const response = await axios.get('http://api.example.com/protected-resource', {
    headers: {
        Authorization: `Bearer ${token}`
    }
});
Реализация в NestJS
В NestJS можно использовать Guards для проверки токенов. Пример простого Guard-а:

import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService) {}

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const token = request.headers['authorization']?.split(' ')[1];

    try {
      const payload = this.jwtService.verify(token);
      request.user = payload; // Сохраняем пользователя в запросе
      return true;
    } catch (error) {
      return false; // Неправильный токен
    }
  }
}
Это более подробное представление о том, как токены используются для аутентификации и авторизации в API. Это поможет вам лучше понять эти важные аспекты веб-разработки.


Можно ли использовать другие языки, такие как C++, Ruby или Python, с NestJS?
NestJS — это фреймворк для разработки серверных приложений на языке TypeScript и JavaScript, который работает поверх Node.js. Основной язык, который поддерживает NestJS, — это TypeScript. Тем не менее, может возникнуть необходимость интегрировать наработки или сервисы, написанные на других языках, таких как C++, Ruby или Python.

Как это сделать?
Создание микросервисов: Одним из самых распространённых способов интеграции других языков с NestJS является использование микросервисной архитектуры. Вы можете создать микросервисы, написанные на желаемом языке (например, Python или Ruby), и взаимодействовать с ними через API или другие протоколы (например, gRPC, RabbitMQ и т.д.).
Пример использования HTTP API на другом языке:
Сервер на Python (Flask):
from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/api/data', methods=['GET'])
def get_data():
    return jsonify({'message': 'Hello from Python!'})

if __name__ == '__main__':
    app.run(port=5000)
Сервер на NestJS:
import { Controller, Get } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Controller('api')
export class AppController {
    constructor(private readonly httpService: HttpService) {}

    @Get('data')
    async getData() {
        const response = await firstValueFrom(this.httpService.get('http://localhost:5000/api/data'));
        return response.data;
    }
}

В этом примере сервер на Python предоставляет API, к которому сервер на NestJS обращается через HTTP-запрос.
Взаимодействие через базы данных: Если ваше приложение использует базу данных, вы можете обеспечить взаимодействие различных сервисов через общую базу данных. Например, у вас может быть сервис на Python, который записывает данные в базу данных, а сервер на NestJS считывает эти данные.
Использование внешних библиотек: Иногда требуется использовать библиотеки, написанные на других языках. Вы можете создать обертку для таких библиотек, используя Node.js, например, через child_process для выполнения команд в том же окружении.
Пример использования child_process для выполнения скрипта на Python:
import { Injectable } from '@nestjs/common';
import { exec } from 'child_process';
import { promisify } from 'util';

const execPromise = promisify(exec);

@Injectable()
export class ExternalService {
    async runPythonScript() {
        const { stdout, stderr } = await execPromise('python3 path/to/script.py');
        if (stderr) {
            throw new Error(`Error executing script: ${stderr}`);
        }
        return stdout;
    }
}
В этом примере мы используем child_process для вызова скрипта на Python. Это может быть полезно для выполнения алгоритмов или анализа данных, написанных на другом языке.

Заключение
Хотя NestJS в первую очередь предназначен для работы с TypeScript и JavaScript, существуют различные способы интеграции с другими языками. Архитектура микросервисов, использование HTTP API, работа с общими базами данных и вызов внешних библиотек — все это позволяет эффективно создавать гибкие и масштабируемые приложения.


Как использовать параметры маршрута в контроллере NestJS?
Параметры маршрутов в NestJS позволяют передавать данные через URL, что упрощает взаимодействие между клиентом и сервером. Это особенно полезно для получения информации о конкретных ресурсах, таких как пользователи или записи.

Основы работы с параметрами маршрутов
В NestJS параметры маршрутов определяются в пути контроллера и могут быть извлечены с помощью декоратора @Param(). Параметр маршрута обозначается двоеточием (:) перед его именем.

Пример использования параметров маршрутов
Давайте рассмотрим практический пример. Предположим, у нас есть контроллер пользователей, и мы хотим получить пользователя по его ID.

Шаг 1: Создание контроллера
Создаем файл users.controller.ts:

import { Controller, Get, Param } from '@nestjs/common';

@Controller('users')
export class UsersController {
  
  // Простой массив пользователей для примера
  private readonly users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' },
  ];

  // Метод для получения пользователя по ID
  @Get(':id')
  getUserById(@Param('id') id: string) {
    const user = this.users.find(user => user.id === parseInt(id));
    if (!user) {
      return { message: 'Пользователь не найден' };
    }
    return user;
  }
}
Шаг 2: Регистрация контроллера в модуле
Затем мы должны зарегистрировать контроллер в модуле, например, в app.module.ts:

import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';

@Module({
  imports: [],
  controllers: [UsersController],
  providers: [],
})
export class AppModule {}
Как это работает
В нашем контроллере UsersController мы определили маршрут GET /users/:id, где :id — это параметр маршрута.
При обращении к этому маршруту, метод getUserById будет вызван, и значение ID будет автоматически извлечено из URL и передано в метод в качестве аргумента.
Далее мы ищем пользователя по ID в массиве и возвращаем его или сообщение о том, что пользователь не найден.
Пример запроса
Когда вы выполните запрос на GET /users/2, ответ будет:

{
  "id": 2,
  "name": "Bob"
}
Если вы выполните запрос на GET /users/5, ответ будет:

{
  "message": "Пользователь не найден"
}
Заключение
Использование параметров маршрутов в NestJS — это отличный способ получать данные по конкретным запросам. Этот подход улучшает структуру вашего API и делает его более понятным для разработчиков и пользователей. Надеюсь, этот пример помог вам понять, как использовать параметры маршрутов в вашем приложении на NestJS!


Как использовать декораторы в контроллере NestJS?
NestJS — это фреймворк для создания серверных приложений на Node.js, который обеспечивает мощную архитектуру для построения масштабируемых приложений. Один из ключевых элементов NestJS — это декораторы, которые позволяют нам описывать поведение классов и их методов. В этом ответе мы разберем, как использовать декораторы в контроллере NestJS на примере простейшего приложения.

Что такое декораторы?
Декораторы в TypeScript — это специальные функции, которые позволяют добавлять метаданные к классам, методам и свойствам. В NestJS декораторы используются для установки маршрутов, обработки запросов и внедрения зависимостей.

Основные декораторы для контроллеров в NestJS
@Controller(): Декоратор, который определяет класс как контроллер.
@Get(), @Post(), @Put(), @Delete(): Декораторы для обработки HTTP методов.
@Param(): Декоратор для извлечения параметров из URL.
@Body(): Декоратор для извлечения тела запроса.
@Query(): Декоратор для извлечения параметров из строки запроса.
Пример использования декораторов в контроллере
Давайте создадим простой контроллер, который будет управлять записями "пользователь".

import { Controller, Get, Post, Body, Param } from '@nestjs/common';

@Controller('users')
export class UsersController {
  private users = []; // Наш «база данных» пользователей для примера

  @Get()
  getAllUsers() {
    return this.users;
  }

  @Post()
  createUser(@Body() createUserDto: { name: string; age: number }) {
    const newUser = {
      id: this.users.length + 1,
      ...createUserDto,
    };
    this.users.push(newUser);
    return newUser;
  }

  @Get(':id')
  getUserById(@Param('id') id: number) {
    return this.users.find(user => user.id === id);
  }
}
Разбор кода:
Импортируем декораторы: В начале файла мы импортируем нужные декораторы из пакета @nestjs/common.
Создаём класс контроллера: Мы используем декоратор @Controller('users'), чтобы указать, что этот контроллер будет обрабатывать запросы, начинающиеся с /users.
Метод getAllUsers: Используем декоратор @Get(), который указывает, что этот метод будет обрабатывать GET-запросы. Он возвращает всех пользователей из массива users.
Метод createUser: Этот метод использует декоратор @Post(), чтобы обрабатывать POST-запросы на создание нового пользователя. Декоратор @Body() позволяет получить данные из тела запроса.
Метод getUserById: Метод с декоратором @Get(':id'), который позволяет извлекать параметр id из URL и возвращать конкретного пользователя.
Заключение
Использование декораторов в NestJS позволяет создать четкую и структурированную архитектуру приложения. Декораторы делают код более читабельным и упрощают управление маршрутизацией, обработкой запросов и внедрением зависимостей. Убедитесь, что вы тщательно изучаете каждый декоратор и его применение для построения эффективных контроллеров в вашем приложении.


Как реализовать версионность в API NestJS?
Версионность API — это важный аспект разработки веб-приложений, позволяющий пользователям и разработчикам взаимодействовать с разными версиями вашего API без нарушения работы существующих функций и сервисов. В NestJS есть несколько способов реализации версионности. Рассмотрим основные подходы:

1. Версионность через URL
Один из самых простых способов реализации версионности — это добавление версии в URL. Например:

GET /api/v1/users
GET /api/v2/users
Для этого необходимо использовать декоратор @Controller с указанием версии:

import { Controller, Get } from '@nestjs/common';

@Controller('api/v1/users')
export class UsersV1Controller {
  @Get()
  getUsers() {
    return [{ id: 1, name: 'User V1' }];
  }
}

@Controller('api/v2/users')
export class UsersV2Controller {
  @Get()
  getUsers() {
    return [{ id: 1, name: 'User V2' }, { id: 2, name: 'New User V2' }];
  }
}
2. Версионность через заголовки
Еще один подход — использование HTTP заголовков для определения версии API. Например, вы можете использовать заголовок Accept:

Accept: application/vnd.myapp.v1+json
Для этого потребуется специальный миддлвер или фильтр, который будет определять, какую версию контроллера вызывают. Создадим фильтр:

import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class VersionMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const acceptHeader = req.headers['accept'];
    if (acceptHeader?.includes('vnd.myapp.v1')) {
      req.version = 'v1';
    } else if (acceptHeader?.includes('vnd.myapp.v2')) {
      req.version = 'v2';
    }
    next();
  }
}
Затем зарегистрируйте этот миддлвер в вашем модуле:

import { Module, MiddlewareConsumer } from '@nestjs/common';
import { UsersV1Controller } from './users-v1.controller';
import { UsersV2Controller } from './users-v2.controller';
import { VersionMiddleware } from './version.middleware';

@Module({
  controllers: [UsersV1Controller, UsersV2Controller],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(VersionMiddleware).forRoutes('*');
  }
}
3. Версионность через группировку
Если у вас много контроллеров, так же можно создавать группы для версий внутри одного контроллера:

import { Controller, Get, UseGuards } from '@nestjs/common';

@Controller('api/users')
export class UsersController {
  @Get('v1')
  getUsersV1() {
    return [{ id: 1, name: 'User V1' }];
  }

  @Get('v2')
  getUsersV2() {
    return [{ id: 1, name: 'User V2' }, { id: 2, name: 'New User V2' }];
  }
}
Заключение
Создание версионного API — это неотъемлемая часть планирования развития вашего приложения. Выберите подход, который лучше всего подходит для вашего проекта. Каждый метод имеет свои преимущества и недостатки, и его использование зависит от ваших конкретных требований и архитектуры приложения.

Не забывайте также проводить тестирование и документацию версий вашего API для разработчиков, которые будут его использовать.


Что такое охранники (guards) в контексте NestJS?
Охранники (guards) в NestJS — это специальные компоненты, которые отвечают за авторизацию и аутентификацию в приложении. Они позволяют контролировать доступ к определенным маршрутам и ресурсам в вашем приложении, проверяя, имеет ли пользователь необходимые права или не является ли он авторизованным.

Зачем нужны охранники?
Безопасность: Охранники помогают защитить ваше приложение, позволяя определить, кто может получить доступ к различным частям вашего API.
Упрощение логики: Они помогают отделить логику проверки прав доступа от основной бизнес-логики приложения.
Повторное использование: Однажды написанный охранник можно использовать в нескольких контроллерах или маршрутах.
Как создавать охранников?
Охранники в NestJS реализуются как классы, которые имплементируют интерфейс CanActivate. Давайте рассмотрим, как создать простой охранник.

Пример охранника
Создайте файл auth.guard.ts в вашей директории guards.
import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const user = request.user; // Получаем пользователя из запроса (предполагается, что он уже аутентифицирован)

    // Проверяем, авторизован ли пользователь
    return user ? true : false; // Если пользователь существует, доступ разрешен
  }
}
Теперь вы можете использовать этот охранник в ваших контроллерах. Например, чтобы защитить один из ваших маршрутов:
import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from './guards/auth.guard';

@Controller('profile')
export class ProfileController {
  @Get()
  @UseGuards(AuthGuard)
  getProfile() {
    return { message: 'Этот маршрут защищен!' };
  }
}
Как работают охранники?
Когда клиент делает запрос к маршруту, защищенному охранником, NestJS вызывает метод canActivate() охранника. Этот метод возвращает булево значение, которое указывает, можно ли продолжить выполнение запроса (true) или нет (false). Если метод canActivate() возвращает false, NestJS завершает запрос и возвращает ответ с ошибкой.

Заключение
Охранники (guards) являются важной частью архитектуры приложений на NestJS, обеспечивая уровень безопасности и контроля доступа. Понимание того, как их создавать и использовать, поможет вам разрабатывать более безопасные и структурированные приложения.

Для более глубокого понимания и изучения вы также можете ознакомиться с официальной документацией NestJS.


Что такое пайпы в контексте NestJS?
Пайпы (pipes) в NestJS — это специальный класс, который позволяет обрабатывать входящие данные перед их передачей в обработчик маршрута. Они могут использоваться для валидации, трансформации или обогащения данных. Пайпы обеспечивают уровень, на котором можно выполнить предварительную обработку данных, что способствует более чистой архитектуре приложения и улучшает его масштабируемость.

Создание собственного пайпа
Чтобы создать пайп, нужно реализовать интерфейс PipeTransform, который требует определения метода transform. Давайте рассмотрим пример.

Создание нового пайпа:
Создадим пайп, который будет проверять, что входные данные являются целым числом.

import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException } from '@nestjs/common';

@Injectable()
export class ParseIntPipe implements PipeTransform {
    transform(value: any, metadata: ArgumentMetadata) {
        const val = parseInt(value, 10);
        if (isNaN(val)) {
            throw new BadRequestException('Validation failed: not an integer');
        }
        return val;
    }
}
В этом коде ParseIntPipe проверяет значение, поступающее в обработчик, и если значение не может быть преобразовано в целое число, кидает исключение BadRequestException.

Использование пайпа в контроллере:
Теперь мы можем использовать наш пайп в контроллере.

import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';

@Controller('cats')
export class CatsController {
    @Get(':id')
    getCat(@Param('id', ParseIntPipe) id: number) {
        return `Cat ${id}`;
    }
}
В этом примере, когда пользователь отправляет GET-запрос на /cats/abc, будет выброшено исключение, поскольку "abc" не может быть преобразовано в целое число. Если же запрос будет на /cats/123, то id будет равен 123.

Встроенные пайпы
NestJS уже предоставляет несколько встроенных пайпов, таких как ValidationPipe, который облегчает валидацию входных данных, используя такие библиотеки, как class-validator. Вот пример его использования:

import { Controller, Post, Body, UsePipes } from '@nestjs/common';
import { ValidateNested, IsString } from 'class-validator';

class CreateCatDto {
    @IsString()
    name: string;

    @IsString()
    breed: string;
}

@Controller('cats')
export class CatsController {
    @Post()
    @UsePipes(new ValidationPipe())
    create(@Body() createCatDto: CreateCatDto) {
        return createCatDto;
    }
}
В этом примере, если объект, отправленный в теле POST-запроса, не имеет строковых значений для name или breed, будет возвращена ошибка валидации.

Заключение
Пайпы в NestJS — это мощный инструмент для обработки входящих данных, который может значительно упростить работу с валидацией и преобразованием данных. Они помогают поддерживать чистый код и улучшать читаемость и поддерживаемость приложения. Пользуясь встроенными пайпами и создавая свои собственные, разработчики могут гибко настраивать поведение своего приложения в соответствии с требованиями бизнес-логики.


Что такое интерсептор в контексте NestJS?
В NestJS интерсепторы (interceptors) представляют собой мощный инструмент, позволяющий делать дополнительные действия во время обработки запроса и ответа. Они работают на уровне обработки запросов и могут манипулировать результатами или даже отменить выполнение обработчиков.

Основное использование интерсепторов включает:

Изменение данных запроса или ответа - можно изменять входные данные перед передачей их в обработчик или модифицировать данные ответа перед отправкой клиенту.
Логирование - использование интерсепторов для журналирования данных о запросах и ответах.
Измерение производительности - можно учитывать время выполнения обработчиков.
Обработка ошибок - можно перехватывать и обрабатывать ошибки, возникающие в обработчиках.
Как создать интерсептор
Интерсептор создается как класс, который реализует интерфейс NestInterceptor из пакета @nestjs/common. Давайте рассмотрим пример простого интерсептора:

import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();
    const response = context.switchToHttp().getResponse();

    console.log(`Incoming Request: ${request.method} ${request.url}`);

    const start = Date.now();

    return next.handle().pipe(
      tap(() => {
        const end = Date.now();
        console.log(`Outgoing Response: ${response.statusCode} - ${end - start}ms`);
      }),
    );
  }
}
Пояснение к коду
Import: Импортируются необходимые декораторы и классы.
Injectable: Декоратор @Injectable() позволяет использовать этот интерсептор в других местах приложения.
intercept: Основной метод, который вызывается при выполнении запроса. Он получает контекст выполнения (ExecutionContext) и обработчик внутреннего вызова (CallHandler).
Логирование: Внутри метода intercept мы можем получить доступ к объекту запроса и ответа, и, например, вывести информацию о входящем запросе и затраченное время на ответ.
Как использовать интерсептор в модуле
Для использования интерсептора необходимо добавить его в провайдеры вашего модуля или же использовать глобально:

import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { LoggingInterceptor } from './logging.interceptor';

@Module({
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor,
    },
  ],
})
export class AppModule {}
Заключение
Интерсепторы в NestJS — это мощное средство для модификации поведения HTTP-запросов и ответов, и они могут быть полезны для логирования, обработки ошибок и многого другого. Понимание и использование интерсепторов поможет вам создавать более эффективные и производительные приложения на NestJS.







NestJS : Important Interview Question
#
nestjs
#
interview
#
backenddevelopment
#
programming
Unraveling NestJS: A Voyage for Backend Engineers with a Dash of Fun 🚀
Embark on a thrilling journey into the realm of NestJS! If you're prepping for an interview or just curious about NestJS's intricacies, this interactive article is your backstage pass. We're not just diving into questions; we're adding life scenarios to spice up the technical feast. Let's unfold the magic!

1) What is NestJS, and why is it the superstar for building Node.js applications?

Insight: NestJS isn't just a framework; it's a digital wizard that organizes your Node.js orchestra. Imagine NestJS as the musical conductor, orchestrating TypeScript and Node.js instruments to create a harmonious symphony. It's like writing a compelling story – NestJS gives your code narrative structure, making it a star player in building robust and scalable applications.

Scenario: Imagine you're the protagonist in a coding adventure. NestJS is your wise mentor, guiding you through the enchanted forest of software development. Just like a mentor, it provides a structured path, ensuring your code sings in harmony.

Example Program:

// Example: The protagonist (you) using NestJS as a mentor
import { Controller, Get } from '@nestjs/common';

@Controller('coding-adventure')
export class CodingAdventureController {
  @Get()
  findHarmony(): string {
    return 'Embarking on a coding adventure with NestJS as my mentor!';
  }
}
2) Can you explain the key features of NestJS?

Insight: NestJS isn't just a toolbox; it's an enchanted chest filled with developer delights. It's like having a Swiss Army knife for Node.js – equipped with modular structure, dependency injection magic, decorators for a touch of elegance, and middleware guardians ensuring your code's safe journey.

Scenario: Picture yourself as a code explorer armed with a magical wand (NestJS). You traverse the vast landscape of your application, encountering dragons (bugs) and using decorators as spells to enchant your code with clarity.

Example Program:

// Example: The code explorer (you) using NestJS as a magical wand
import { Controller, Get } from '@nestjs/common';

@Controller('code-exploration')
export class CodeExplorationController {
  @Get()
  castSpells(): string {
    return 'Wielding the magical wand of NestJS to enchant my code!';
  }
}
3) What's the main difference between NestJS and Express.js?

Insight: Express.js is like a trusty bicycle, swift and adaptable. In contrast, NestJS is your personalized flying Nimbus, adding layers of magic and structure to your coding journey. It's the express train of frameworks, offering not just speed but also a guided track with TypeScript at the conductor's podium.

Scenario: Imagine you're in a coding race. Express.js is your reliable bicycle, but NestJS is your supersonic spaceship, zooming past challenges with TypeScript as your co-pilot.

Example Program:

// Example: The coding racer (you) using Express.js and NestJS
// Express.js
app.get('/coding-race', (req, res) => {
  res.send('Zooming through the coding race with Express.js!');
});

// NestJS
@Controller('coding-race')
export class CodingRaceController {
  @Get()
  zoomPastChallenges(): string {
    return 'Zooming through the coding race with NestJS and TypeScript!';
  }
}
4) How does NestJS bring TypeScript into the Node.js universe?

Insight: NestJS and TypeScript are like the dynamic duo of the coding world. NestJS is the stage, and TypeScript is the spotlight, illuminating your code with strong typing and modern features. It's like having Sherlock Holmes (TypeScript) solve mysteries in your code.

Scenario: Picture your code as a detective story. NestJS and TypeScript join forces to solve the case of the elusive bugs, making your codebase a crime-free zone.

Example Program:

// Example: The detective (you) using TypeScript with NestJS
export class BugDetective {
  investigate(): string {
    return 'Solving the case of elusive bugs with TypeScript and NestJS!';
  }
}
5) Describe the architecture pattern used by NestJS and its magical benefits!

Insight: NestJS unfolds a magical realm of architecture, where modules are like enchanted islands, each holding a unique power. It's Hogwarts for your code, with separation of concerns as your magical cloak, offering invisibility to unnecessary complexities.

Scenario: Imagine your codebase as a magical school. NestJS is Hogwarts, and your code modules are different houses, each contributing its unique magic to the grand architecture.

Example Program:

// Example: The architect (you) designing magical modules with NestJS
import { Module } from '@nestjs/common';

@Module({
  controllers: [MagicController],
  providers: [SpellService],
})
export class MagicModule {}

Top 25 Nest Interview Questions & Answers
Get ready for your interview at Nest with a list of common questions you may encounter and how to prepare for them effectively.


InterviewPrep Company Career Coach
Published Apr 30, 2025
Nest, a notable subsidiary of Google, is a household name in the realm of smart home technology. Known for their innovative products like self-learning, sensor-driven, Wi-Fi-enabled thermostats, smoke detectors, and other security systems, Nest has revolutionized the way we interact with our homes. This article delves into the common interview questions at Nest, offering insights into what it takes to be part of a company that is shaping the future of domestic living.

Nest Hiring Process
The Nest hiring process typically begins with an online application, followed by a phone interview with HR. Candidates then proceed to technical interviews, which may be conducted over the phone or through video conferencing platforms like Microsoft Teams. These interviews often focus on object-oriented programming concepts, SQL server, and other relevant technologies. After the technical rounds, candidates may have a manager round where they discuss their projects and skills, followed by an HR round. The process is generally described as smooth and well-organized, with interviewers being polite and helpful. However, some candidates have reported delays in receiving feedback or offer letters.

Common Nest Interview Questions
1. How would you approach designing a smart home device that needs to be energy efficient and user-friendly?
Designing a smart home device that is both energy-efficient and user-friendly is a challenge that requires careful consideration of various factors. Interviewers ask this question to assess your understanding of the balance between functionality, aesthetics, and sustainability, while also gauging your creativity and problem-solving skills. They want to ensure you can develop innovative solutions that cater to the needs of the end-users and are environmentally responsible.

How to Answer:

Start by highlighting any past experience you have in designing energy-efficient and user-friendly devices. Discuss the importance of understanding user needs, market trends, and technical capabilities for successful design. Explain your process, may include researching similar products, brainstorming innovative features, creating prototypes and conducting usability tests to ensure efficiency and friendliness. If you’re a beginner, discuss how you would collaborate with experienced team members and use customer feedback to guide your design process.

Example: Designing a smart home device that is both energy efficient and user-friendly would require a holistic approach, focusing on the hardware, software, and user interface. For energy efficiency, I’d consider incorporating low-power components, such as sensors and processors, into the design. Additionally, implementing power management strategies in the software, like sleep modes or adaptive power control based on usage patterns, can further optimize energy consumption.

For user-friendliness, it’s crucial to ensure intuitive interaction with the device. This means creating an interface that is simple, clear, and easy for users of all technical abilities to navigate. It also involves considering how the device integrates with other smart devices in the home ecosystem. Furthermore, providing personalized features using AI or machine learning could enhance user experience by adapting to individual preferences over time. Ultimately, balancing these factors effectively will result in a product that not only conserves energy but also delivers a seamless user experience.

2. Explain the process you follow when debugging software code.
Debugging is a critical skill in software development, and asking about your process helps the interviewer understand your problem-solving abilities and attention to detail. They want to see how systematic, organized, and efficient you are when tackling issues in code, as well as how you collaborate with colleagues to ensure a high-quality product. Having a well-defined debugging process demonstrates your commitment to delivering reliable software and resolving issues in a timely manner.

How to Answer:

When asked about your debugging process, emphasize your systematic approach. Discuss how you first replicate the issue, then isolate and identify the problem within the code. Explain your use of debugging tools or techniques such as logs or breakpoints. Mention any experience with test-driven development strategies to prevent bugs. If possible, share a brief example where your thorough debugging led to a successful resolution. Remember, your goal is to demonstrate your logical thinking, attention to detail, and patience in solving software issues.

Example: When debugging software code, the first step I take is to reproduce the error. This helps me understand under what conditions the bug occurs and gives me a clear starting point for my investigation. Once I’ve reproduced the issue, I isolate the section of the code that’s causing it by using tools like breakpoints or log statements.

After identifying the problematic code, I try to understand why it’s not working as expected. This might involve tracing the logic flow, examining variable values at different stages, or researching unfamiliar functions or libraries used in the code. If the root cause isn’t immediately apparent, I may use techniques such as commenting out sections of code or introducing controlled changes to see how they affect the outcome.

Finally, once I’ve identified the problem, I implement a fix and then test thoroughly to ensure the issue has been resolved and hasn’t introduced new bugs. Throughout this process, I also make sure to document my findings and solutions so they can be referred back to if similar issues arise in the future.

3. Can you describe your experience with integrating third-party APIs into existing systems?
API integration is a critical skill for modern tech companies, as it allows for seamless communication and data sharing between various platforms and applications. By inquiring about your experience with third-party APIs, the interviewer wants to assess your ability to navigate these complex systems and ensure smooth operations, ultimately contributing to the company’s success and growth.

How to Answer:

Highlight your past experiences in integrating third-party APIs into systems and how it improved the overall functionality or efficiency. If you have not worked directly with this, emphasize on your technical skills, adaptability and eagerness to learn. Also, discuss steps you’d take to understand the API documentation, testing before integration, ensuring data security and coordinating with other developers.

Example: In my previous experience, I’ve had the opportunity to integrate several third-party APIs into various systems. One notable example was when I integrated Stripe’s payment gateway API into an e-commerce platform that previously only supported PayPal. This involved understanding both the existing system architecture and Stripe’s API documentation thoroughly.

The process required me to map out how data flowed through the current system and then design a solution that would allow Stripe transactions to fit seamlessly into this flow. The integration also needed robust error handling to ensure any issues with the Stripe API wouldn’t disrupt the overall functionality of the platform. After successful deployment, we saw an increase in user satisfaction due to more payment options and smoother checkout processes. It was a rewarding challenge that underscored the importance of careful planning, testing, and execution in API integrations.

4. What are some key considerations when selecting components for a hardware design project?
Selecting the right components for a hardware design project is a critical step in ensuring the success and longevity of a product. When asking this question, interviewers want to gauge your understanding of factors such as component compatibility, cost, performance, availability, reliability, and power consumption. They also want to see if you can balance trade-offs and make informed decisions to create an optimal design that meets project requirements and end-user expectations.

How to Answer:

Approach this question by detailing your process for selecting components. Talk about the importance of balancing cost and quality, considering product lifespan, compatibility with other system parts, availability of components, environmental factors like temperature or humidity, and regulatory standards. Highlight any specific experiences where these considerations played a crucial role in the success of a hardware design project.

Example: When selecting components for a hardware design project, it’s crucial to consider the functionality and performance of each component. This includes understanding the technical specifications such as power consumption, speed, size, and compatibility with other components. For instance, if we are designing a smart thermostat like Nest, we would need sensors that accurately measure temperature and humidity, along with a processor capable of handling data from these sensors and user inputs efficiently.

Another key consideration is cost-effectiveness. The selected components should not only meet the functional requirements but also fit within the budget constraints of the project. It’s important to strike a balance between quality and cost, ensuring that the end product provides value for money without compromising on performance or reliability. Additionally, considering the lifecycle of the components is essential too. We must ensure they have adequate support and availability in the market to avoid future supply chain issues.

Lastly, the environmental impact and regulatory compliance of the components cannot be overlooked. As a responsible organization, we should aim to use components that are energy-efficient, recyclable, and comply with regulations like RoHS and WEEE directives.

5. Describe a situation where you had to optimize an algorithm or data structure for better performance.
Optimization is a key skill in many tech roles, especially when dealing with complex algorithms and data structures. When interviewers ask about your experience in optimization, they want to see how you approach problem-solving and efficiency. They’re interested in your thought process, your ability to analyze different aspects of a problem, and your skill in implementing improvements that lead to better performance. Demonstrating your experience in this area shows that you can contribute to the company’s ongoing pursuit of innovation and excellence.

How to Answer:

To answer this question, think of specific instances where you’ve tuned an algorithm or data structure for better performance. Describe the initial problem, your thought process in identifying areas for improvement, the changes you made, and most importantly, the results achieved as a result of optimization. If you haven’t had such experience yet, talk about your theoretical knowledge on optimization techniques and how you would apply them in real-world scenarios.

Example: In a previous project, I had to work on an e-commerce website’s recommendation system. The original algorithm was based on collaborative filtering but it wasn’t performing efficiently due to the large volume of data. It took too much time and resources to generate recommendations for each user.

To optimize this, I decided to implement a hybrid model combining collaborative filtering with item-based filtering. This approach significantly improved the performance as it reduced the computation needed by focusing on items similarity rather than users’ similarity. Additionally, I also introduced batch processing where the recommendation lists were pre-computed during off-peak hours and stored, then served to users when requested. As a result, we saw a 40% improvement in response times and a decrease in server load.

6. How do you ensure thorough testing of both functional and non-functional requirements in a software application?
Thorough testing of software applications is critical to ensure not only that they function as intended, but also that they meet performance, security, and usability standards. By asking about your approach to testing both functional and non-functional requirements, hiring managers want to know if you have a comprehensive understanding of the testing process and can effectively identify and address any potential issues in the software. This demonstrates your commitment to delivering high-quality products and services that meet the needs and expectations of users and stakeholders.

How to Answer:

To answer this question, reflect on your past experiences with software testing. Highlight your detailed approach to functional requirements by discussing your method of creating test cases based on specifications or use cases. For non-functional requirements, explain how you consider aspects such as performance, usability and security. Show your knowledge in using various tools for different types of tests. If you’re new to the field, talk about your keen attention to detail and willingness to learn new testing methodologies. Remember, they are looking for systematic thinking and a meticulous approach towards quality assurance.

Example: To ensure thorough testing of both functional and non-functional requirements, it’s important to have a well-defined test strategy that includes different types of testing such as unit testing, integration testing, system testing, and acceptance testing. For instance, unit tests can be used to verify the functionality of individual components, while integration tests can help identify issues with how these components interact with each other.

In terms of non-functional requirements, performance testing, security testing, usability testing, and compatibility testing are key. Performance testing helps in determining the speed, responsiveness, and stability under a workload, whereas security testing checks for vulnerabilities and risks. Usability testing ensures the software is user-friendly and intuitive, and compatibility testing verifies the application’s ability to run in different environments or configurations.

It’s also crucial to use automated testing tools wherever possible to increase efficiency and coverage. However, manual exploratory testing should not be overlooked as it allows testers to leverage their skills and experience to uncover defects that may not be caught by automated tests. Lastly, continuous testing throughout the development process enables early detection of defects, reducing the cost and effort required for fixing them later.

7. Discuss a challenging bug you encountered during a previous internship, and how you resolved it.
When interviewing for a tech company, showcasing your problem-solving skills and adaptability is essential. Sharing your experience with a challenging bug demonstrates your ability to analyze, troubleshoot, and find solutions in a real-world scenario. It also highlights your perseverance and resourcefulness, which are important qualities for any developer or engineer.

How to Answer:

Begin by describing the bug in detail, including its impact and why it was challenging. Then discuss your problem-solving process – how you diagnosed the issue, what strategies or methodologies you used, and how you collaborated with others if applicable. Finally, explain how you resolved it, any lessons learned, and how this experience has improved your abilities for future problem solving. Remember to highlight your technical skills, perseverance, and teamwork throughout your response.

Example: During my previous internship, I encountered a particularly challenging bug in an IoT device we were developing. The device was supposed to send temperature and humidity data from sensors to a cloud-based server every minute. However, it would sporadically stop sending data for hours at a time before resuming again.

I started debugging by checking the code for any logical errors or race conditions but found none. Next, I analyzed the network traffic between the device and the server and realized that the issue occurred when there was a temporary drop in the network connection. The device wasn’t designed to handle such situations effectively – it simply stopped sending data if it couldn’t establish a connection with the server.

To resolve this, I implemented a retry mechanism where the device would attempt to reconnect to the server multiple times before giving up. Additionally, I also added a data buffer so that no sensor data was lost during these periods of disconnection. This resolved the issue and made the device more robust against network instability. It was a valuable lesson in considering all possible scenarios while designing systems, especially those reliant on external factors like network connectivity.

8. What is your preferred programming language, and can you explain why you prefer using it over others?
Asking about your preferred programming language allows interviewers to assess your technical expertise and gauge your ability to adapt to the company’s programming environment. Your response can reveal your strengths, versatility, and problem-solving approach, as well as how well you can articulate your thoughts and reasoning. This question also helps interviewers understand if you’re capable of using the preferred language for the projects at the company or if you’re open to learning new languages as needed.

How to Answer:

To answer this question, focus on your proficiency and comfort with the programming language you prefer. Describe how it enhances your efficiency or problem-solving abilities. Discuss specific projects where it was beneficial. However, also mention your adaptability in learning and using other languages as required. This shows both your technical prowess and flexibility, key qualities for a programmer.

Example: My preferred programming language is Python, primarily due to its readability and efficiency. The syntax in Python is clear and intuitive, which makes it excellent for beginners yet powerful enough for experts. It allows me to focus more on problem-solving and less on understanding complex syntax rules. Additionally, Python’s extensive standard library and rich ecosystem of packages such as NumPy and Pandas make it ideal for a wide range of tasks from data analysis to web development.

Furthermore, Python’s support for scripting and automation can significantly improve productivity by automating repetitive tasks. For instance, I once used Python to automate the generation of weekly reports, reducing what was previously a manual task taking several hours down to just a few minutes. This example illustrates how Python’s simplicity and versatility enable efficient problem-solving – an attribute that I believe would be valuable at Nest, given your focus on creating user-friendly smart home technology.

9. When developing firmware for a microcontroller, what strategies do you employ to minimize memory footprint and power consumption?
Memory management and power efficiency are critical factors when developing firmware for microcontrollers, especially in applications where the hardware has limited resources or runs on battery power. Interviewers want to ensure that you have the technical know-how and experience to optimize code, make smart design decisions, and prioritize system resources effectively. Demonstrating your ability to tackle these challenges highlights your value as a firmware developer and your potential to contribute to the company’s success.

How to Answer:

Highlight your technical skills and experiences that demonstrate your ability to optimize memory usage and power consumption. Discuss specific projects where you employed strategies like efficient coding practices, optimizing algorithms for space complexity, or using low-power modes. Explain how these strategies improved the functionality and performance of the product. If you’re a beginner, discuss theoretical knowledge about such optimization techniques and express your eagerness to apply them in practical scenarios.

Example: When developing firmware for a microcontroller, I use several strategies to minimize memory footprint and power consumption. First, I optimize data structures for size rather than speed as it can help reduce the memory footprint significantly. For instance, using bit fields or packed structures where appropriate can save space. Additionally, I make use of compiler optimizations that focus on reducing code size.

For minimizing power consumption, I design the software to keep the processor in low-power mode as much as possible. This involves careful management of peripherals and interrupts so that they wake up the processor only when necessary. Furthermore, I utilize features provided by the hardware itself, such as sleep modes, peripheral gating, and dynamic clock scaling.

An example from my experience is when I was working with an IoT device project. The device had severe constraints on both memory and power. By optimizing data structures and utilizing the low-power modes of the microcontroller effectively, we were able to extend the battery life of the device by 30% and fit the required functionality within the available memory.

10. Describe your experience working with cloud-based infrastructure and platforms such as AWS, GCP, or Azure.
Diving into your experience with cloud-based infrastructure showcases your technical skills and adaptability to modern technology. As companies increasingly rely on cloud platforms like AWS, GCP, or Azure for their operations, it’s essential to demonstrate that you can navigate, manage, and optimize these resources. This question allows you to highlight your expertise and reassure the interviewer of your ability to contribute effectively to the company’s technological environment.

How to Answer:

Reflect on your experience with cloud platforms. Discuss specific projects where you used AWS, GCP, or Azure and highlight the outcomes of those projects. If you are new to these platforms, discuss how quickly you can learn new technologies. Emphasize any similarities to tools you’ve previously mastered. Show enthusiasm for expanding your skill set within this area.

Example: I have extensive experience working with AWS, GCP and Azure for the deployment of various applications. For instance, while developing a machine learning model for predictive analysis at my previous company, I leveraged AWS’s S3 for data storage and EC2 for compute resources. This allowed us to scale our resources according to demand and significantly reduced our operational costs.

Additionally, I’ve used Google Cloud Platform’s BigQuery for running SQL-like queries on large datasets, which was extremely beneficial in terms of speed and efficiency. On Azure, my experience revolves around using its AI services like Azure Machine Learning Studio for building, training and deploying ML models. Overall, these experiences have given me a deep understanding of cloud-based infrastructure and platforms, their benefits, and how to leverage them effectively to optimize performance and cost.

11. How do you stay up-to-date on the latest advancements and best practices within your field?
In the fast-paced world of technology and innovation, it’s essential for professionals to stay abreast of the latest developments and best practices in their respective fields. By asking this question, interviewers seek to gauge your commitment to continuous learning and improvement, as well as your ability to adapt to the ever-changing landscape of the industry. They want to ensure that you’ll be an asset to the company by bringing in fresh ideas and staying ahead of the curve.

How to Answer:

In your response, highlight how you actively pursue learning opportunities to stay current. Talk about the professional journals or websites you follow, relevant podcasts you listen to, and any industry-specific conferences or webinars you attend. If applicable, also mention if you’re part of any professional groups or networks where knowledge sharing is encouraged. This will show your commitment towards constant self-improvement and staying updated with the latest trends in your field.

Example: I believe it’s crucial to stay informed about the latest advancements and best practices in my field, especially in a fast-paced industry like tech. I regularly read industry-specific news and articles on platforms such as TechCrunch and Wired. Additionally, I subscribe to several newsletters from leading tech companies and thought leaders which often provide valuable insights into upcoming trends.

Moreover, I am an active participant in various online communities and forums where professionals discuss recent developments and share their experiences with new tools and technologies. This not only helps me keep up-to-date but also allows me to gain practical knowledge of how these advancements can be applied effectively. Lastly, I attend webinars and conferences whenever possible, as they are excellent sources for learning directly from experts and networking with other professionals in the field.

12. Explain the concept of multithreading and how you have utilized it to improve an application’s performance.
Multithreading is a critical concept in modern software development, as it allows applications to run multiple tasks concurrently, which can lead to significant performance improvements. By inquiring about your experience with multithreading, the interviewer wants to gauge your understanding of this concept and your ability to apply it effectively. They’re interested in knowing whether you can optimize an application’s performance, making it more efficient and responsive, ultimately contributing to a better user experience.

How to Answer:

To answer this question effectively, start by defining multithreading in simple terms. Then, share specific instances where you implemented it to enhance an application’s performance. Talk about the challenges you faced and how you overcame them. Also, highlight any positive outcome or improvement that was a direct result of your utilization of multithreading. If you’re new to it, discuss how you understand the theory behind multithreading and show enthusiasm for applying this knowledge practically in future projects.

Example: Multithreading is a concept in programming where a single process runs multiple threads concurrently, allowing for efficient use of CPU resources. Each thread operates independently but can share the same data space with other threads from the same process, which allows for faster execution and improved responsiveness in applications.

In one of my projects, I utilized multithreading to optimize an image processing application. The application was initially slow because it processed large images sequentially. By implementing multithreading, I divided the image into smaller segments and assigned each segment to a different thread. This allowed the application to process multiple segments simultaneously, significantly reducing the overall processing time. Furthermore, by carefully managing the shared memory and avoiding race conditions, I ensured that the program remained stable and reliable while achieving higher performance.

13. Describe a time when you had to work with a cross-functional team to deliver a product successfully. How did you handle communication and collaboration?
Success in a modern company often depends on how well employees can collaborate across departments and functions. By asking about your experience working with cross-functional teams, the interviewer wants to gauge your ability to communicate effectively, adapt to different team dynamics, and contribute to a shared goal. They’re interested in hearing how you’ve navigated challenges and ensured that everyone involved worked together smoothly to achieve a successful outcome.

How to Answer:

Start by outlining the project, detailing your role and describing the cross-functional team’s composition. Explain how you ensured clear communication, perhaps using regular meetings, collaborative tools or reports. Discuss any challenges in collaboration and how you overcame them. Highlight the project’s successful outcome and what you learned about effective teamwork and communication. Remember to focus on your participation and leadership, not just the team’s success.

Example: In my previous experience, I was part of a team tasked with developing and launching a new smart home device. The project required collaboration between the software, hardware, design, and marketing teams. To ensure effective communication and collaboration, we established regular meetings to discuss progress, challenges, and next steps.

I took the initiative to create a shared online workspace where all relevant documents, timelines, and updates could be accessed by everyone. This ensured transparency and kept everyone on the same page. In addition, I encouraged open dialogue during our meetings so that each department could understand the needs and constraints of the others. This fostered mutual respect and understanding within the team, which ultimately led to successful product launch.

14. Can you provide an example of a complex problem you solved by breaking it down into smaller, manageable tasks?
Complex problems can be daunting, but breaking them down into smaller tasks is an essential skill for success in any job. When interviewers ask for an example of this, they want to know that you can approach challenges methodically and strategically. They’re looking for evidence of your problem-solving skills, your ability to prioritize tasks, and your capability to manage your time effectively—all of which are crucial in a fast-paced work environment.

How to Answer:

Start your response by recalling a situation where you faced a complex problem. It could be from any role, as long as it demonstrates your problem-solving skills. Break down the steps you took to solve the issue – how you identified it, strategized a plan, divided tasks, and executed them. Highlight your ability to stay calm under pressure, critical thinking, and effective decision-making. Use this opportunity to demonstrate your analytical abilities and detail-oriented approach in solving problems.

Example: In a previous project, I was tasked with developing an energy-efficient algorithm for a smart home system. The complexity of the problem resided in optimizing multiple variables such as temperature, humidity, light intensity, and power usage across several devices while ensuring user comfort.

I broke down this complex problem into smaller tasks by first focusing on understanding each variable’s impact individually. For instance, I studied how altering the thermostat settings at different times of the day affected overall energy consumption. Once I had a clear grasp of individual elements, I moved onto multi-variable optimization. I used machine learning models to predict optimal settings based on historical data and user preferences. This process involved continuous testing and tweaking to achieve the best results.

The outcome was a successful implementation of an algorithm that not only conserved energy but also maintained a comfortable living environment. This experience taught me the value of deconstructing intricate problems into manageable parts, which is a strategy I continue to use in my work.

15. How do you balance competing priorities and deadlines while maintaining high-quality work?
Finding the sweet spot between time management and producing top-notch work is a highly sought-after skill in any fast-paced work environment. Interviewers ask this question to gauge your ability to prioritize tasks, manage your time effectively, and maintain your focus on quality—even when juggling multiple projects or facing tight deadlines. They want to know if you can handle the pressure and still deliver exceptional results.

How to Answer:

Start by sharing relevant past experiences where you successfully juggled multiple priorities without compromising quality. Describe the strategies you used, such as effective time management, delegation or employing certain tools and technologies. Also, highlight your ability to stay calm under pressure. If possible, cite a situation where your methods led to a successful outcome. Remember to emphasize your commitment to maintaining high-quality work amidst challenges.

Example: Balancing competing priorities and deadlines requires a strategic approach that includes effective time management, clear communication, and prioritization. I use tools like Asana or Trello to organize my tasks based on their urgency and importance, which allows me to visualize my workload and allocate my time accordingly. For instance, if I have two projects with similar deadlines, I’ll break them down into smaller tasks and intersperse them throughout my schedule, ensuring neither project is neglected.

Maintaining high-quality work amidst these demands involves setting realistic expectations and not being afraid to ask for help when needed. If a task requires more time than initially allotted due to unforeseen complications, I communicate this early to relevant stakeholders, so adjustments can be made. Additionally, I always allocate time for proofreading and quality checks before considering a task complete. This way, even under pressure, the standard of my work remains consistent.

16. Explain the importance of version control systems and how they contribute to effective collaboration among developers.
Version control systems are the backbone of collaborative software development, as they allow multiple developers to work on a project simultaneously without stepping on each other’s toes. By tracking changes to the codebase and merging contributions from different team members, these systems ensure that everyone is working with the most up-to-date information and that conflicts are resolved efficiently. This ultimately leads to a smoother development process, higher code quality, and a more cohesive final product.

How to Answer:

To answer this question, discuss your experience with version control systems like Git. Highlight how they help in tracking changes made by different developers, preventing conflicts and ensuring code integrity. Showcase any instance where such a system has helped you or your team to avoid potential problems or easily revert to an older version. Also, express your understanding of its role in fostering effective collaboration among developers by providing a central repository for all project files, thereby facilitating coordination and transparency.

Example: Version control systems are crucial in software development, especially when working in a team. They allow multiple developers to work on the same codebase simultaneously without overwriting each other’s work. This is achieved through branching and merging features that isolate changes until they’re ready to be combined with the main code.

For instance, consider a scenario where two developers are working on separate features for the same application. Without version control, they would have to coordinate their work manually to avoid conflicts, which can be time-consuming and error-prone. However, with a version control system, each developer can create a separate branch and work independently. Once they’ve completed their features, they can merge their branches back into the main code, resolving any conflicts in a controlled manner. This makes collaboration more efficient and reduces the risk of errors or lost work. Furthermore, version control systems also provide a historical record of all changes, making it easier to track down bugs and understand how the code has evolved over time.

17. Describe your experience with continuous integration and deployment tools, such as Jenkins or CircleCI.
In today’s fast-paced development environment, companies require efficient and reliable deployment workflows. Understanding your experience with continuous integration and deployment tools, such as Jenkins or CircleCI, helps interviewers assess your ability to implement, manage, and troubleshoot these systems. This knowledge is vital for maintaining a seamless development process, ensuring rapid and error-free deployment of new features, and ultimately contributing to the company’s overall success.

How to Answer:

Highlight your hands-on experience with the mentioned tools, describing specific projects or tasks where you used them. Show how these experiences improved efficiency or solved problems in your previous roles. If you lack direct experience, focus on similar tools you’ve used and express your eagerness to learn new technologies. Demonstrate understanding of the concepts behind continuous integration and deployment as it will show your adaptability.

Example: Throughout my career, I’ve had extensive experience with continuous integration and deployment tools like Jenkins and CircleCI. For instance, in a recent project, we used Jenkins to automate our build and testing process. We configured it to pull code from our Git repository whenever changes were made. Jenkins would then run unit tests on the new code, and if all tests passed, it would automatically merge the changes into the main branch.

In addition to this, we also utilized Jenkins for deploying our application to different environments such as development, staging, and production. This was achieved through pipeline scripts which allowed us to create a streamlined delivery mechanism. On the other hand, I have used CircleCI in another project where we leveraged its Docker support to create reproducible build environments. This helped us ensure that our application worked consistently across all stages of the pipeline. Overall, these experiences have given me a deep understanding of how to effectively use CI/CD tools to improve software quality and speed up the release cycle.

18. How do you approach troubleshooting hardware issues? What steps do you take to identify and resolve them?
When it comes to troubleshooting hardware issues, employers want to ensure that you possess a systematic and logical approach to identify and resolve problems. They’re interested in your ability to think critically, work independently, and efficiently solve issues that may arise. Demonstrating your expertise and knowledge of hardware components, along with your experience in troubleshooting, will showcase your value as a potential employee.

How to Answer:

To tackle this question, discuss your systematic approach to troubleshooting. You might start by identifying the issue, then researching possible solutions or consulting with colleagues for their insight. Next, you’d test these solutions while documenting each step and noting any changes. If the problem persists, you’d reassess and try a different approach. Illustrate your answer with specific examples from past experiences, highlighting successful outcomes. Don’t forget to mention the importance of clear communication with all affected parties throughout the process.

Example: When troubleshooting hardware issues, I start with a systematic approach to identify the root cause. First, I gather as much information as possible about the issue from the user or system logs. This includes understanding any recent changes made to the system and the exact sequence of events leading up to the problem.

Next, I replicate the issue if possible. This helps me confirm the reported symptoms and observe firsthand what is going wrong. If replication isn’t feasible, I use diagnostic tools to examine the system’s status and health. This could involve checking error messages, running hardware diagnostics, examining system files, etc.

Once I’ve identified the potential cause, I plan and implement a solution. This might be as simple as replacing a faulty component, or it may require more complex steps like updating firmware or adjusting system settings. After implementing the fix, I verify that the issue has been resolved through testing and monitoring.

For instance, if there was an issue with a Nest thermostat not connecting to Wi-Fi, after gathering information, my initial step would be to check the device’s connectivity status and error messages. If necessary, I’d proceed with resetting the network settings or updating the device software. Post-resolution, I’d ensure the device maintains stable connectivity over time. Throughout this process, communication with stakeholders is key to keep them informed and manage expectations.

19. Explain the role of machine learning algorithms in improving the functionality of smart devices.
As the world becomes more connected, smart devices play an increasingly significant role in our daily lives. Machine learning algorithms enable these devices to learn from user data, adapt to changing conditions, and optimize performance. Interviewers ask about the role of machine learning to gauge your understanding of how these technologies enhance user experiences and contribute to the overall success of a company specializing in smart devices.

How to Answer:

To effectively answer this question, focus on your understanding of machine learning and its applications in smart devices. Discuss how algorithms can learn from and make decisions based on data, leading to improved device performance over time. If you have direct experience with machine learning or related projects, share those examples. Highlight the benefits, like predictive capabilities, automation, and user personalization. Even if you lack practical experience, expressing a clear understanding of the concept and eagerness to learn more will reflect positively.

Example: Machine learning algorithms play a critical role in enhancing the functionality of smart devices by enabling them to learn from user behavior and adapt accordingly. These algorithms analyze patterns and trends from collected data, allowing for predictive analytics that can anticipate user needs and automate processes. For instance, a smart thermostat like Nest learns your schedule and temperature preferences over time, then programs itself to save energy when you’re away and ensure comfort when you’re home.

Furthermore, machine learning also enhances the device’s ability to interact with users more naturally through features such as voice recognition and natural language processing. This is evident in smart speakers or virtual assistants which improve their speech recognition capabilities over time, providing more accurate responses and better understanding user commands. Thus, machine learning not only improves user experience but also contributes significantly to energy efficiency and cost savings.

20. How do you evaluate the security risks associated with a software application or hardware device, and how do you mitigate them?
Security is a top priority in the world of technology, and understanding how to assess and mitigate risks is crucial to ensuring the safety and integrity of a company’s products. With this question, interviewers aim to gauge your expertise in identifying vulnerabilities and implementing preventative measures. They want to ensure you can maintain the company’s reputation for secure and reliable devices and applications, while protecting both the company and its customers from potential threats.

How to Answer:

When answering, you should highlight your experience in risk assessment. Discuss how you identify potential vulnerabilities by conducting thorough reviews and tests of software applications or hardware devices. Mention the use of industry-standard security frameworks and tools. Share about mitigating risks through patches, updates, and user education. Finally, emphasize on staying updated with latest security threats and trends, to ensure proactive actions can be taken against possible risks.

Example: Evaluating the security risks associated with a software application or hardware device involves several steps. Firstly, I would conduct an initial risk assessment to identify potential vulnerabilities and threats. This could involve techniques like penetration testing, static code analysis, and dynamic analysis. Additionally, it’s crucial to consider both internal and external threats and evaluate how these could affect the confidentiality, integrity, and availability of data.

Once the risks are identified, they need to be prioritized based on their likelihood and potential impact. The next step is mitigation which can include various strategies such as patch management, encryption, access controls, and secure coding practices. For instance, if we find that a particular piece of hardware has a vulnerability that could allow unauthorized access, we might mitigate this by applying a firmware update from the manufacturer, or implementing additional network-level protections. It’s also important to have incident response plans in place for when breaches do occur. Security is not a one-time task but rather a continuous process of monitoring, evaluation, and improvement.

21. When faced with limited resources, how do you prioritize which features to develop first in a product?
Resource allocation is a critical skill for anyone working in product development. By asking this question, interviewers want to assess how well you can prioritize features based on factors like customer needs, business goals, and available resources. Your answer should demonstrate your ability to make strategic decisions and effectively balance competing factors, ultimately leading to a successful product launch.

How to Answer:

Reflect on your past experience in similar situations. Discuss how you use data-driven approaches to identify priority features, like customer feedback or market trends. Highlight any project management methodologies you’ve used, such as Agile, and explain how they aid in prioritization. If you’re less experienced, outline the steps you’d take to assess which features have the most value for customers and the business.

Example: When faced with limited resources, prioritizing features for development should be guided by a combination of business objectives, user needs, and technical feasibility. It’s crucial to understand the product vision and strategy first. This helps in aligning the feature development priorities with what will drive the most value towards achieving these goals.

Next, I would engage with users or conduct market research to understand their needs and pain points. Features that solve significant problems for our users should be given high priority. However, it’s also important to consider the technical feasibility and effort involved. If a highly desired feature requires an unfeasible amount of resources, it might make sense to focus on smaller enhancements that can collectively bring about substantial improvements.

Lastly, leveraging data is key. By analyzing usage patterns and feedback from existing features, we can gain insights into what works well and what doesn’t. This not only helps in refining current features but also informs future development decisions. The aim is always to create maximum value – for the business and the users – within the constraints we have.

22. Explain the concept of design patterns and provide an example of one that you have implemented.
Design patterns are reusable solutions to common problems that arise during software development. They provide a template-like approach to solving issues that can be tailored to fit the specific situation. Interviewers ask about design patterns to assess your understanding of these concepts and your ability to effectively apply them in your work. By providing an example of a design pattern you’ve implemented, you demonstrate both your theoretical knowledge and practical experience in using design patterns to create more efficient and maintainable code.

How to Answer:

Begin by defining design patterns and their importance in software development. Then, illustrate your understanding with a specific example from your previous work experience where you have effectively implemented a design pattern. Explain why it was chosen, the problem it solved, and its impact on project success. Also, include any challenges faced during implementation and how you overcame them to show your problem-solving ability.

Example: Design patterns are established solutions to common problems in software design. They represent best practices and can speed up the development process by providing tested, proven models of how certain coding challenges can be met. These patterns aren’t templates per se; rather, they’re more like guidelines that can be adapted to suit the specific needs of your own software.

For instance, I’ve utilized the Singleton pattern in a project where we needed to ensure that only one instance of a particular class was created throughout the application’s lifecycle. This was crucial for managing database connections. By implementing the Singleton pattern, we were able to maintain control over the database access point, ensuring data consistency while optimizing resource usage. The Singleton served as a single source of truth, preventing potential conflicts or inconsistencies that could have arisen from multiple instances.

23. Describe your experience working with IoT devices and their associated communication protocols.
IoT devices and their associated communication protocols are increasingly becoming a key part of many industries, including smart home technology. Understanding how these devices work and how to troubleshoot any issues that may arise is vital for ensuring seamless integration and user satisfaction. By asking this question, the interviewer wants to assess your technical knowledge, experience, and problem-solving skills in a rapidly evolving field that is essential to the company’s core offerings.

How to Answer:

Reflect on your past experiences with IoT devices and their communication protocols. Highlight specific instances where you successfully implemented or managed such devices. Discuss any challenges faced and how you overcame them. If you’re new to this, focus on related skills like adaptability and eagerness to learn new technologies. Consider mentioning knowledge of popular protocols if applicable. Remember, it’s not just about experience but also problem-solving and ability to learn quickly.

Example: In my previous experience, I have had the opportunity to work extensively with various IoT devices including smart home automation systems, wearable health monitors, and industrial monitoring equipment. My primary responsibility was to ensure seamless communication between these devices using different protocols such as MQTT, CoAP, HTTP, and WebSockets.

One of the most challenging projects involved implementing a robust communication system for an industrial monitoring setup. The project required real-time data transmission from numerous sensors spread across multiple locations. We decided on MQTT due to its lightweight nature and publish-subscribe model which was ideal for our bandwidth-constrained environment. This decision significantly improved the efficiency of data transmission and allowed us to effectively monitor and respond to changes in real-time. It also gave me deep insights into the nuances of MQTT protocol like Quality of Service levels, Retained Messages, and Last Will Testament features.

24. How would you ensure that a smart home device is accessible and usable by individuals with varying levels of technical proficiency?
Exploring your ability to make technology accessible to all users is essential in the smart home industry. As a candidate, you need to demonstrate your understanding of user-centered design and your ability to consider the needs and preferences of a diverse customer base. This question aims to gauge your empathy, communication skills, and problem-solving abilities when it comes to creating or supporting products that are user-friendly, inclusive, and adaptable to different levels of technical proficiency.

How to Answer:

When answering this question, highlight your ability to empathize with users of different technical abilities. Discuss your experience in designing or tailoring solutions that are user-friendly for all proficiency levels. You may mention how you simplify complex processes, provide clear instructions or conduct hands-on training sessions to help users adapt. If possible, share a specific instance where you made technology accessible for everyone. Ensure the interviewer understands your commitment to inclusivity and making technology accessible for all users.

Example: To ensure a smart home device is accessible and usable by individuals with varying levels of technical proficiency, I would advocate for a user-centric design approach. This means the product should be intuitive to use regardless of the user’s tech-savvy level. For instance, we could incorporate voice-activated commands that are simple and straightforward, reducing the need for manual setup or complex programming.

Furthermore, offering comprehensive customer support can also bridge the gap between different users’ technical abilities. This includes easy-to-understand manuals, online tutorials, and 24/7 customer service to assist with any troubleshooting issues. Additionally, incorporating feedback from user testing into future iterations of the product can help us continually improve its accessibility and usability. It’s crucial to remember that technology should adapt to people, not the other way around.

25. What steps would you take to address performance bottlenecks within a complex system?
When faced with performance bottlenecks in a complex system, interviewers want to know if you have the analytical skills and technical knowledge to identify, diagnose, and resolve issues that negatively impact efficiency and performance. They’re looking for your ability to devise a systematic approach, use appropriate tools and techniques, and collaborate with team members to optimize system performance and ultimately contribute to the company’s success.

How to Answer:

When faced with this question, it’s important to highlight your problem-solving skills. Discuss the systematic approach you would use when dealing with performance bottlenecks – starting with identifying the issue through tools like performance monitoring software, then analyzing data to pinpoint the root cause. Next, explain how you’d devise a solution and test its effectiveness before full implementation. Be sure to emphasize your ability to work collaboratively as these challenges often require cross-team efforts.

Example: Addressing performance bottlenecks in a complex system involves multiple steps. Firstly, I would start by identifying the bottleneck through monitoring and analyzing the system’s performance metrics. Tools like New Relic or Datadog can be very helpful for this purpose. Once identified, it’s crucial to understand whether the bottleneck is CPU, memory, disk IO, network related, or due to software limitations.

After pinpointing the issue, the next step would be to optimize that particular area. If it’s a hardware-related bottleneck, we might need to upgrade the infrastructure or balance the load better across existing resources. For example, if there’s an issue with CPU utilization, horizontal scaling (adding more servers) or vertical scaling (adding more power to an existing server) could help.

If it’s a software limitation, code profiling tools can help identify inefficient algorithms or functions that are consuming excessive resources. Refactoring these parts of the codebase, optimizing database queries, or implementing caching strategies could alleviate the problem. It’s important to note that after each change, we should retest and monitor the system closely to verify that the changes have indeed improved performance and haven’t introduced new issues.
