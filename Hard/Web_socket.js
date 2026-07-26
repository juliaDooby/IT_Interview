Как получить доступ к веб-сокету с контроллера или другого компонента/сервиса?
Вопросы
SOCKET.IO
Как получить доступ к веб-сокету с контроллера или другого компонента/сервиса?
У меня есть REST API, я хочу отправить событие клиенту через веб-сокет. Как внедрить экземпляр веб-сокета в контроллер или другой компонент?

 18.01.2019 00:03
2
0
6 598
3
 Ответы 3
классGateway можно внедрить в другой компонент и использовать экземпляр сервера.

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly messageGateway: MessageGateway
  ) {}

  @Get()
  async getHello() {
    this.messageGateway.server.emit('messages', 'Hello from REST API');
    return this.appService.getHello();
  }
}
 18.01.2019 00:28
Лучшее решение — создать глобальный модуль. Затем вы можете генерировать события из любого другого модуля/контроллера. A. Подход Afir создаст несколько экземпляров Gateway, если вы попытаетесь использовать его в других модулях.

Примечание: это самое простое решение

Создать socket.module.ts

import { Module, Global } from '@nestjs/common';
import { SocketService } from './socket.service';

@Global()
@Module({
 controllers: [],
 providers: [SocketService],
 exports: [SocketService],
})
export class SocketModule {}
socket.service.ts

import { Injectable } from '@nestjs/common';
import { Server } from 'socket.io';

@Injectable()
export class SocketService {

 public socket: Server = null;

}
app.gateway.ts см. функцию afterInit

import { WebSocketGateway, OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect, WebSocketServer } from '@nestjs/websockets';
import { Logger } from '@nestjs/common';
import { Server, Socket } from 'socket.io';
import { SocketService } from './socket/socket.service';

@WebSocketGateway()
export class AppGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {

  constructor(private socketService: SocketService){

  }
  @WebSocketServer() public server: Server;
  private logger: Logger = new Logger('AppGateway');


  afterInit(server: Server) {
    this.socketService.socket = server;
  }

  handleDisconnect(client: Socket) {
    this.logger.log(`Client disconnected: ${client.id}`);
  }

  handleConnection(client: Socket, ...args: any[]) {
    this.logger.log(`Client connected: ${client.id}`);
  }

}
Затем импортируйте SocketModule в AppModule, и вы сможете использовать Socket service везде.

 15.01.2020 23:46
Я полагаю, что @Raold пропустил факт в документация:

Gateways should not use request-scoped providers because they must act as singletons. Each gateway encapsulates a real socket and cannot be instantiated multiple times.

Таким образом, это означает, что мы не можем ни создавать экземпляр класса шлюза несколько раз, ни делать это явно с использованием функций областей внедрения.

Таким образом, создание только одного шлюза для одного пространства имен будет правильным, и он создаст только один экземпляр сервера websocket или socket.io.

Спасибо за ответ. Я предложил лучшее решение для конкретного случая, которое работает. Я не думаю, что эта цитата имеет прямое отношение к моему примеру. Было бы лучше, если бы вы могли объяснить, почему это в корне неверно, и привести какой-то пример.

— 
Raold
 23.06.2021 18:56
