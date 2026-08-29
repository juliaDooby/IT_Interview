PYTHON
Не удается закрыть цикл запущенных событий, когда я вызываю run_forever, я не могу закрыть цикл
Когда я останавливаю поток websocket, мне также нужно остановить поток цикла, но когда я вызываю loop.stop() и loop.close(), возникает какая-то проблема, я не могу закрыть цикл, добавляется какая-то проблема, пожалуйста, помогите мне, далее мой код. Пожалуйста! Пожалуйста! Пожалуйста! Пожалуйста! Пожалуйста! Пожалуйста! Пожалуйста! Пожалуйста!

def start_loop(loop): 
    """
    start anthor thread and start event loop, general, it's started with app together
    return a loop
    """
    try:
        asyncio.set_event_loop(loop)
        loop.run_forever()
    except Exception as e:
        logger.info(str(e))

        
this is funtion about create thread and run asyncio loop
def start_loop_thread():
    """_summary_
    start anthor thread and start event loop, general, it's started with app together
    return a loop
    Returns:
        Loop: a event loop
    """
    loop = asyncio.new_event_loop()
    t = threading.Thread(target=start_loop, args=(loop,))
    t.setDaemon(True)
    t.start()
    return loop


async def recv_message(websocket,channel,host_sys_name,command,recv_data_dict):
    while True:
        recv_ready = channel.recv_ready()
        print(f"recv_ready:{recv_ready}")
        if channel.recv_ready():
            recv_data = bytes_to_str(channel.recv(65535))
            recv_data_dict["recv"] = recv_data
            print(f"recvrecvrecv:{recv_data_dict}")
            if len(recv_data) != 0:
                await websocket.send_text(recv_data)
            if host_sys_name in recv_data:
                break
        else:
            if host_sys_name in recv_data_dict["recv"]:
                break
            if "\r" in command:
                # time.sleep(5)
                continue
            else:
                break


@api_router.websocket("/{client_id}")
async def terminal_websocket_endpoint(websocket: WebSocket, server_info_depends:dict = Depends(get_server_info_depends)):
    await websocket.accept()
    if server_info_depends.get("code") == 1:
        await websocket.send_text(server_info_depends.get("message"))
        await websocket.close()
    loop = websocket.app.extra.get("loop",None)
    # if not loop:
    #     await websocket.send_text(server_info_depends.get("message"))
    #     await websocket.close()
    ip, port, username, password = server_info_depends.get("ip"),server_info_depends.get("port"),server_info_depends.get("username"),server_info_depends.get("password")
    # print(server_info_depends)
    ssh = NormalSshClient(ip=ip, port=port, username=username, password=base64_decode(password), websocket=websocket)
    ssh.connect()
    ssh.get_ssh_channel()
    time.sleep(0.1)
    host_sys_name = ""
    if ssh.channel:
        recv = bytes_to_str(ssh.channel.recv(2048))
        host_sys_name = get_host_system_name(recv)
        await websocket.send_text(recv)
    # start new thread
    loop = start_loop_thread()
    recv_data_dict = {"recv":""}
    # loop = asyncio.get_running_loop()
    try:
        while True:
            json_message = await websocket.receive()
            size = json_message.get("resize",None)
            if size and len(size)==2:
                try:
                    ssh.channel.resize_pty(*size)
                except Exception:
                    pass
            if json_message.get("code") == 1005:
                ssh.all_close()
                loop.stop()
                time.sleep(1)
                loop.close()
                return 0
            else:
                command = json_message.get("text")
                ssh.channel.send(command)
                # put coroutine in loop and running
                time.sleep(0.01)
                future = asyncio.run_coroutine_threadsafe(recv_message(websocket,ssh.channel,host_sys_name,command,recv_data_dict), loop)

    except Exception as e:
        print(e)
        
    finally:
        loop.stop()
        time.sleep(1)
        loop.close()
Когда я останавливаю поток websocket, мне также нужно остановить поток цикла, но когда я вызываю loop.stop() и loop.close(), возникают некоторые проблемы

ERROR:    Exception in ASGI application
Traceback (most recent call last):
  File "C:\Users\fhxx\.virtualenvs\fanhanprocess_v2-5XAg7VLT\lib\site-packages\uvicorn\protocols\websockets\websockets_impl.py", line 184, in run_asgi      
    result = await self.app(self.scope, self.asgi_receive, self.asgi_send)
  File "C:\Users\fhxx\.virtualenvs\fanhanprocess_v2-5XAg7VLT\lib\site-packages\uvicorn\middleware\proxy_headers.py", line 78, in __call__
    return await self.app(scope, receive, send)
  File "C:\Users\fhxx\.virtualenvs\fanhanprocess_v2-5XAg7VLT\lib\site-packages\fastapi\applications.py", line 269, in __call__
    await super().__call__(scope, receive, send)
  File "C:\Users\fhxx\.virtualenvs\fanhanprocess_v2-5XAg7VLT\lib\site-packages\starlette\applications.py", line 124, in __call__
    await self.middleware_stack(scope, receive, send)
  File "C:\Users\fhxx\.virtualenvs\fanhanprocess_v2-5XAg7VLT\lib\site-packages\starlette\middleware\errors.py", line 149, in __call__
    await self.app(scope, receive, send)
  File "D:\workspace2\python\fanhanprocess_v2\fanhanprocess_v2\config\middleware.py", line 52, in __call__
    await self.app(scope, receive, send)
  File "C:\Users\fhxx\.virtualenvs\fanhanprocess_v2-5XAg7VLT\lib\site-packages\starlette\middleware\cors.py", line 76, in __call__
    await self.app(scope, receive, send)
  File "C:\Users\fhxx\.virtualenvs\fanhanprocess_v2-5XAg7VLT\lib\site-packages\starlette\exceptions.py", line 69, in __call__
    await self.app(scope, receive, send)
  File "C:\Users\fhxx\.virtualenvs\fanhanprocess_v2-5XAg7VLT\lib\site-packages\fastapi\middleware\asyncexitstack.py", line 21, in __call__
    raise e
  File "C:\Users\fhxx\.virtualenvs\fanhanprocess_v2-5XAg7VLT\lib\site-packages\fastapi\middleware\asyncexitstack.py", line 18, in __call__
    await self.app(scope, receive, send)
  File "C:\Users\fhxx\.virtualenvs\fanhanprocess_v2-5XAg7VLT\lib\site-packages\starlette\routing.py", line 670, in __call__
    await route.handle(scope, receive, send)
  File "C:\Users\fhxx\.virtualenvs\fanhanprocess_v2-5XAg7VLT\lib\site-packages\starlette\routing.py", line 325, in handle
    await self.app(scope, receive, send)
  File "C:\Users\fhxx\.virtualenvs\fanhanprocess_v2-5XAg7VLT\lib\site-packages\starlette\routing.py", line 81, in app
    await func(session)
  File "C:\Users\fhxx\.virtualenvs\fanhanprocess_v2-5XAg7VLT\lib\site-packages\fastapi\routing.py", line 279, in app
    await dependant.call(**values)
  File "D:\workspace2\python\fanhanprocess_v2\fanhanprocess_v2\apps\terminal\ws_view.py", line 91, in terminal_websocket_endpoint
    loop.close()
  File "D:\software\python\an_3_10\lib\asyncio\proactor_events.py", line 677, in close
    raise RuntimeError("Cannot close a running event loop")
RuntimeError: Cannot close a running event loop
ERROR     2022-09-16 14:46:21.082 - uvicorn.protocols.websockets.websockets_impl:run_asgi - Exception in ASGI application
Traceback (most recent call last):

  File "D:\software\python\an_3_10\lib\runpy.py", line 196, in _run_module_as_main
    return _run_code(code, main_globals, None,
           │         │     └ {'__name__': '__main__', '__doc__': None, '__package__': '', '__loader__': <_frozen_importlib_external.SourceFileLoader objec...
           │         └ <code object <module> at 0x000002057DEEC240, file "c:\Users\fhxx\.vscode\extensions\ms-python.python-2022.14.0\pythonFiles\li...     
           └ <function _run_code at 0x000002057DEDB400>

  File "D:\software\python\an_3_10\lib\runpy.py", line 86, in _run_code
    exec(code, run_globals)
         │     └ {'__name__': '__main__', '__doc__': None, '__package__': '', '__loader__': <_frozen_importlib_external.SourceFileLoader objec...
         └ <code object <module> at 0x000002057DEEC240, file "c:\Users\fhxx\.vscode\extensions\ms-python.python-2022.14.0\pythonFiles\li...

  File "c:\Users\fhxx\.vscode\extensions\ms-python.python-2022.14.0\pythonFiles\lib\python\debugpy\__main__.py", line 39, in <module>
    cli.main()
    │   └ <function main at 0x0000020500C9E4D0>
    └ <module 'debugpy.server.cli' from 'c:\\Users\\fhxx\\.vscode\\extensions\\ms-python.python-2022.14.0\\pythonFiles\\lib\\python...

  File "c:\Users\fhxx\.vscode\extensions\ms-python.python-2022.14.0\pythonFiles\lib\python\debugpy/..\debugpy\server\cli.py", line 430, in main
    run()
    └ <function run_file at 0x0000020500C9E290>

  File "c:\Users\fhxx\.vscode\extensions\ms-python.python-2022.14.0\pythonFiles\lib\python\debugpy/..\debugpy\server\cli.py", line 284, in run_file
    runpy.run_path(target, run_name = "__main__")
    │     │        └ 'D:\\workspace2\\python\\fanhanprocess_v2\\fanhanprocess_v2\\main.py'
    │     └ <function run_path at 0x0000020500981750>
    └ <module '_pydevd_bundle.pydevd_runpy' from 'c:\\Users\\fhxx\\.vscode\\extensions\\ms-python.python-2022.14.0\\pythonFiles\\li...

  File "c:\Users\fhxx\.vscode\extensions\ms-python.python-2022.14.0\pythonFiles\lib\python\debugpy\_vendored\pydevd\_pydevd_bundle\pydevd_runpy.py", line 321, in run_path
    return _run_module_code(code, init_globals, run_name,
           │                │     │             └ '__main__'
           │                │     └ None
           │                └ <code object <module> at 0x0000020500CECB30, file "D:\workspace2\python\fanhanprocess_v2\fanhanprocess_v2\main.py", line 1>   
           └ <function _run_module_code at 0x00000205009813F0>

  File "c:\Users\fhxx\.vscode\extensions\ms-python.python-2022.14.0\pythonFiles\lib\python\debugpy\_vendored\pydevd\_pydevd_bundle\pydevd_runpy.py", line 135, in _run_module_code
    _run_code(code, mod_globals, init_globals,
    │         │     │            └ None
    │         │     └ {'__name__': '__main__', '__doc__': None, '__package__': '', '__loader__': None, '__spec__': None, '__file__': 'D:\\workspace...      
    │         └ <code object <module> at 0x0000020500CECB30, file "D:\workspace2\python\fanhanprocess_v2\fanhanprocess_v2\main.py", line 1>
    └ <function _run_code at 0x0000020500981000>

  File "c:\Users\fhxx\.vscode\extensions\ms-python.python-2022.14.0\pythonFiles\lib\python\debugpy\_vendored\pydevd\_pydevd_bundle\pydevd_runpy.py", line 124, in _run_code
    exec(code, run_globals)
         │     └ {'__name__': '__main__', '__doc__': None, '__package__': '', '__loader__': None, '__spec__': None, '__file__': 'D:\\workspace...
         └ <code object <module> at 0x0000020500CECB30, file "D:\workspace2\python\fanhanprocess_v2\fanhanprocess_v2\main.py", line 1>

  File "D:\workspace2\python\fanhanprocess_v2\fanhanprocess_v2\main.py", line 9, in <module>
    uvicorn.run("main:app", host = "0.0.0.0", port=8000)
    │       └ <function run at 0x000002050196F370>
    └ <module 'uvicorn' from 'C:\\Users\\fhxx\\.virtualenvs\\fanhanprocess_v2-5XAg7VLT\\lib\\site-packages\\uvicorn\\__init__.py'>

  File "C:\Users\fhxx\.virtualenvs\fanhanprocess_v2-5XAg7VLT\lib\site-packages\uvicorn\main.py", line 575, in run
    server.run()
    │      └ <function Server.run at 0x000002050196EDD0>
    └ <uvicorn.server.Server object at 0x0000020504156F20>

  File "C:\Users\fhxx\.virtualenvs\fanhanprocess_v2-5XAg7VLT\lib\site-packages\uvicorn\server.py", line 60, in run
    return asyncio.run(self.serve(sockets=sockets))
           │       │   │    │             └ None
           │       │   │    └ <function Server.serve at 0x000002050196EE60>
           │       │   └ <uvicorn.server.Server object at 0x0000020504156F20>
           │       └ <function run at 0x0000020500DABBE0>
           └ <module 'asyncio' from 'D:\\software\\python\\an_3_10\\lib\\asyncio\\__init__.py'>

  File "D:\software\python\an_3_10\lib\asyncio\runners.py", line 44, in run
    return loop.run_until_complete(main)
           │    │                  └ <coroutine object Server.serve at 0x000002050435C5F0>
           │    └ <function BaseEventLoop.run_until_complete at 0x0000020500DB5630>
           └ <ProactorEventLoop running=True closed=False debug=False>

  File "D:\software\python\an_3_10\lib\asyncio\base_events.py", line 633, in run_until_complete
    self.run_forever()
    │    └ <function ProactorEventLoop.run_forever at 0x0000020501624430>
    └ <ProactorEventLoop running=True closed=False debug=False>

  File "D:\software\python\an_3_10\lib\asyncio\windows_events.py", line 321, in run_forever
    super().run_forever()

  File "D:\software\python\an_3_10\lib\asyncio\base_events.py", line 600, in run_forever
    self._run_once()
    │    └ <function BaseEventLoop._run_once at 0x0000020500DB70A0>
    └ <ProactorEventLoop running=True closed=False debug=False>

  File "D:\software\python\an_3_10\lib\asyncio\base_events.py", line 1896, in _run_once
    handle._run()
    │      └ <function Handle._run at 0x0000020500D2A3B0>
    └ <Handle Task.task_wakeup(<Future finished result=None>)>

  File "D:\software\python\an_3_10\lib\asyncio\events.py", line 80, in _run
    self._context.run(self._callback, *self._args)
    │    │            │    │           │    └ <member '_args' of 'Handle' objects>
    │    │            │    │           └ <Handle Task.task_wakeup(<Future finished result=None>)>
    │    │            │    └ <member '_callback' of 'Handle' objects>
    │    │            └ <Handle Task.task_wakeup(<Future finished result=None>)>
    │    └ <member '_context' of 'Handle' objects>
    └ <Handle Task.task_wakeup(<Future finished result=None>)>

> File "C:\Users\fhxx\.virtualenvs\fanhanprocess_v2-5XAg7VLT\lib\site-packages\uvicorn\protocols\websockets\websockets_impl.py", line 184, in run_asgi      
    result = await self.app(self.scope, self.asgi_receive, self.asgi_send)
                   │    │   │    │      │    │             │    └ <function WebSocketProtocol.asgi_send at 0x0000020504428EE0>
                   │    │   │    │      │    │             └ <uvicorn.protocols.websockets.websockets_impl.WebSocketProtocol object at 0x0000020504577A60>  
                   │    │   │    │      │    └ <function WebSocketProtocol.asgi_receive at 0x0000020504428F70>
                   │    │   │    │      └ <uvicorn.protocols.websockets.websockets_impl.WebSocketProtocol object at 0x0000020504577A60>
                   │    │   │    └ {'type': 'websocket', 'asgi': {'version': '3.0', 'spec_version': '2.3'}, 'http_version': '1.1', 'scheme': 'ws', 'server': ('1...
                   │    │   └ <uvicorn.protocols.websockets.websockets_impl.WebSocketProtocol object at 0x0000020504577A60>
                   │    └ <uvicorn.middleware.proxy_headers.ProxyHeadersMiddleware object at 0x0000020504329660>
                   └ <uvicorn.protocols.websockets.websockets_impl.WebSocketProtocol object at 0x0000020504577A60>

  File "C:\Users\fhxx\.virtualenvs\fanhanprocess_v2-5XAg7VLT\lib\site-packages\uvicorn\middleware\proxy_headers.py", line 78, in __call__
    return await self.app(scope, receive, send)
                 │    │   │      │        └ <bound method WebSocketProtocol.asgi_send of <uvicorn.protocols.websockets.websockets_impl.WebSocketProtocol object at 0x0000...
                 │    │   │      └ <bound method WebSocketProtocol.asgi_receive of <uvicorn.protocols.websockets.websockets_impl.WebSocketProtocol object at 0x0...
                 │    │   └ {'type': 'websocket', 'asgi': {'version': '3.0', 'spec_version': '2.3'}, 'http_version': '1.1', 'scheme': 'ws', 'server': ('1...
                 │    └ <fastapi.applications.FastAPI object at 0x0000020504329780>
                 └ <uvicorn.middleware.proxy_headers.ProxyHeadersMiddleware object at 0x0000020504329660>

  File "C:\Users\fhxx\.virtualenvs\fanhanprocess_v2-5XAg7VLT\lib\site-packages\fastapi\applications.py", line 269, in __call__
    await super().__call__(scope, receive, send)
                           │      │        └ <bound method WebSocketProtocol.asgi_send of <uvicorn.protocols.websockets.websockets_impl.WebSocketProtocol object at 0x0000...
                           │      └ <bound method WebSocketProtocol.asgi_receive of <uvicorn.protocols.websockets.websockets_impl.WebSocketProtocol object at 0x0...
                           └ {'type': 'websocket', 'asgi': {'version': '3.0', 'spec_version': '2.3'}, 'http_version': '1.1', 'scheme': 'ws', 'server': ('1...

  File "C:\Users\fhxx\.virtualenvs\fanhanprocess_v2-5XAg7VLT\lib\site-packages\starlette\applications.py", line 124, in __call__
    await self.middleware_stack(scope, receive, send)
          │    │                │      │        └ <bound method WebSocketProtocol.asgi_send of <uvicorn.protocols.websockets.websockets_impl.WebSocketProtocol object at 0x0000...
          │    │                │      └ <bound method WebSocketProtocol.asgi_receive of <uvicorn.protocols.websockets.websockets_impl.WebSocketProtocol object at 0x0...
          │    │                └ {'type': 'websocket', 'asgi': {'version': '3.0', 'spec_version': '2.3'}, 'http_version': '1.1', 'scheme': 'ws', 'server': ('1...
          │    └ <starlette.middleware.errors.ServerErrorMiddleware object at 0x00000205044EAAA0>
          └ <fastapi.applications.FastAPI object at 0x0000020504329780>

  File "C:\Users\fhxx\.virtualenvs\fanhanprocess_v2-5XAg7VLT\lib\site-packages\starlette\middleware\errors.py", line 149, in __call__
    await self.app(scope, receive, send)
          │    │   │      │        └ <bound method WebSocketProtocol.asgi_send of <uvicorn.protocols.websockets.websockets_impl.WebSocketProtocol object at 0x0000...
          │    │   │      └ <bound method WebSocketProtocol.asgi_receive of <uvicorn.protocols.websockets.websockets_impl.WebSocketProtocol object at 0x0...
          │    │   └ {'type': 'websocket', 'asgi': {'version': '3.0', 'spec_version': '2.3'}, 'http_version': '1.1', 'scheme': 'ws', 'server': ('1...       
          │    └ <config.middleware.CusAuthenticationMiddleware object at 0x00000205044EAA40>
          └ <starlette.middleware.errors.ServerErrorMiddleware object at 0x00000205044EAAA0>

  File "D:\workspace2\python\fanhanprocess_v2\fanhanprocess_v2\config\middleware.py", line 52, in __call__
    await self.app(scope, receive, send)
          │    │   │      │        └ <bound method WebSocketProtocol.asgi_send of <uvicorn.protocols.websockets.websockets_impl.WebSocketProtocol object at 0x0000...
          │    │   │      └ <bound method WebSocketProtocol.asgi_receive of <uvicorn.protocols.websockets.websockets_impl.WebSocketProtocol object at 0x0...
          │    │   └ {'type': 'websocket', 'asgi': {'version': '3.0', 'spec_version': '2.3'}, 'http_version': '1.1', 'scheme': 'ws', 'server': ('1...       
          │    └ <starlette.middleware.cors.CORSMiddleware object at 0x00000205044EA9B0>
          └ <config.middleware.CusAuthenticationMiddleware object at 0x00000205044EAA40>

  File "C:\Users\fhxx\.virtualenvs\fanhanprocess_v2-5XAg7VLT\lib\site-packages\starlette\middleware\cors.py", line 76, in __call__
    await self.app(scope, receive, send)
          │    │   │      │        └ <bound method WebSocketProtocol.asgi_send of <uvicorn.protocols.websockets.websockets_impl.WebSocketProtocol object at 0x0000...
          │    │   │      └ <bound method WebSocketProtocol.asgi_receive of <uvicorn.protocols.websockets.websockets_impl.WebSocketProtocol object at 0x0...
          │    │   └ {'type': 'websocket', 'asgi': {'version': '3.0', 'spec_version': '2.3'}, 'http_version': '1.1', 'scheme': 'ws', 'server': ('1...       
          │    └ <starlette.exceptions.ExceptionMiddleware object at 0x00000205044EA860>
          └ <starlette.middleware.cors.CORSMiddleware object at 0x00000205044EA9B0>

  File "C:\Users\fhxx\.virtualenvs\fanhanprocess_v2-5XAg7VLT\lib\site-packages\starlette\exceptions.py", line 69, in __call__
    await self.app(scope, receive, send)
          │    │   │      │        └ <bound method WebSocketProtocol.asgi_send of <uvicorn.protocols.websockets.websockets_impl.WebSocketProtocol object at 0x0000...
          │    │   │      └ <bound method WebSocketProtocol.asgi_receive of <uvicorn.protocols.websockets.websockets_impl.WebSocketProtocol object at 0x0...
          │    │   └ {'type': 'websocket', 'asgi': {'version': '3.0', 'spec_version': '2.3'}, 'http_version': '1.1', 'scheme': 'ws', 'server': ('1...       
          │    └ <fastapi.middleware.asyncexitstack.AsyncExitStackMiddleware object at 0x00000205044EA7D0>
          └ <starlette.exceptions.ExceptionMiddleware object at 0x00000205044EA860>

  File "C:\Users\fhxx\.virtualenvs\fanhanprocess_v2-5XAg7VLT\lib\site-packages\fastapi\middleware\asyncexitstack.py", line 21, in __call__
    raise e

  File "C:\Users\fhxx\.virtualenvs\fanhanprocess_v2-5XAg7VLT\lib\site-packages\fastapi\middleware\asyncexitstack.py", line 18, in __call__
    await self.app(scope, receive, send)
          │    │   │      │        └ <bound method WebSocketProtocol.asgi_send of <uvicorn.protocols.websockets.websockets_impl.WebSocketProtocol object at 0x0000...
          │    │   │      └ <bound method WebSocketProtocol.asgi_receive of <uvicorn.protocols.websockets.websockets_impl.WebSocketProtocol object at 0x0...
          │    │   └ {'type': 'websocket', 'asgi': {'version': '3.0', 'spec_version': '2.3'}, 'http_version': '1.1', 'scheme': 'ws', 'server': ('1...       
          │    └ <fastapi.routing.APIRouter object at 0x00000205043DF070>
          └ <fastapi.middleware.asyncexitstack.AsyncExitStackMiddleware object at 0x00000205044EA7D0>

  File "C:\Users\fhxx\.virtualenvs\fanhanprocess_v2-5XAg7VLT\lib\site-packages\starlette\routing.py", line 670, in __call__
    await route.handle(scope, receive, send)
          │     │      │      │        └ <bound method WebSocketProtocol.asgi_send of <uvicorn.protocols.websockets.websockets_impl.WebSocketProtocol object at 0x0000...
          │     │      │      └ <bound method WebSocketProtocol.asgi_receive of <uvicorn.protocols.websockets.websockets_impl.WebSocketProtocol object at 0x0...
          │     │      └ {'type': 'websocket', 'asgi': {'version': '3.0', 'spec_version': '2.3'}, 'http_version': '1.1', 'scheme': 'ws', 'server': ('1...   
          │     └ <function WebSocketRoute.handle at 0x0000020501F49FC0>
          └ <fastapi.routing.APIWebSocketRoute object at 0x0000020504477AC0>

  File "C:\Users\fhxx\.virtualenvs\fanhanprocess_v2-5XAg7VLT\lib\site-packages\starlette\routing.py", line 325, in handle
    await self.app(scope, receive, send)
INFO      2022-09-16 14:46:21.346 - config.middleware:__call__ - eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Imx2eWl0YW8iLCJpZCI6NiwiZXhwIjoxNjYzMzEyNzY1fQ.BIG9rZkGpUKTrhWzjkx9gnZ254lVKTAzmsIeRJLnIEc
INFO      2022-09-16 14:46:21.379 - uvicorn.protocols.http.httptools_impl:send - 127.0.0.1:7263 - "GET /api/user/list HTTP/1.1" 200
INFO:     connection closed
INFO      2022-09-16 14:46:21.384 - websockets.legacy.server:handler - connection closed
INFO      2022-09-16 14:46:21.388 - uvicorn.protocols.http.httptools_impl:send - 127.0.0.1:7262 - "GET /favicon.ico HTTP/1.1" 200
это тестовая программа, вы можете использовать ее для тестирования

import asyncio
import threading as tg
if __name__ == '__main__':
    def start_loop(loop):
        asyncio.set_event_loop(loop) # set loop
        loop.run_forever()
 
    async def do_some_work(x):
        print('Waiting {}'.format(x))
        await asyncio.sleep(x)
        print('Done after {}s'.format(x))
        return x
        
    new_loop = asyncio.new_event_loop()
    t = tg.Thread(target=start_loop, args=(new_loop,))
    t.daemon = 1
    t.start()
    print('begin')
    tasks=[]
    for s in [6,4]:
        tasks.append(asyncio.run_coroutine_threadsafe(do_some_work(s), new_loop))
    for task in tasks:print(task.result())   
    new_loop.stop()
    print('abc',tg.active_count())
    print('end')
    new_loop.close()
 16.09.2022 09:04
1
0
123
3
Данный вопрос помечен как решенный
 Ответы 3
Сначала запустите всю задачу в цикле, а затем отмените, а затем, наконец, остановите цикл

pending = asyncio.all_tasks(loop=loop) 

for task in pending:
    task.cancel()
group = asyncio.gather(*pending, return_exceptions=True)
loop.run_until_complete(group) # wait for cancel errors complate
loop.close()

 16.09.2022 17:07
 Ответ принят как подходящий
Я нашел решение, добавьте асинхронную функцию:

async def stop():
    loop = asyncio.get_event_loop()
    loop.stop()
затем выполните функцию в подпотоке:

    asyncio.run_coroutine_threadsafe(stop(), new_loop)
Такого вы не увидите RuntimeError.

Я думаю, проблема с вашим кодом заключается в том, что выполнение new_loop.stop() в основном потоке не может повлиять на текущий цикл событий в подпотоке.

 20.09.2022 03:36
async def stop():
    loop = asyncio.get_event_loop()
    loop.stop()
    loop.close()
asyncio.run_coroutine_threadsafe(stop(), new_loop)
Это небольшие дополнительные замечания, и это полный ответ. Спасибо другим ответам и помощнику.

Значение не является допустимым dict при отправке данных JSON через Postman в серверную часть FastAPI

PYTHON
Значение не является допустимым dict при отправке данных JSON через Postman в серверную часть FastAPI
@app.post("/posts")
def post_req(payload: dict = Body(...)):
    print(payload)
    return {"Message": "Posted!!!"}
Я использую указанную выше функцию операции пути для получения запросов POST, но когда я пытаюсь сделать запрос с помощью Postman, он говорит value is not a valid dict.

В Postman я отправляю ниже в теле запроса:

{
    "title" : "This is title"
}
Ответ, который я получаю в Postman, выглядит следующим образом:

{
    "detail": [
        {
            "loc": [
                "body"
            ],
            "msg": "value is not a valid dict",
            "type": "type_error.dict"
        }
    ]
}
Терминал VS Code (на стороне сервера) показывает это:

127.0.0.1:51397 - "POST /posts HTTP/1.1" 422 Unprocessable Entity
 29.09.2022 21:59
1
4
590
3
Данный вопрос помечен как решенный
 Ответы 3
Вам нужно сделать:

{
    "payload": {"title": "This is title"}
}
 29.09.2022 22:01
 Ответ принят как подходящий
При определении параметра payloadBody следующим образом:

payload: dict = Body(...)
и поскольку это единственный параметр Body в вашей конечной точке, FastAPI будет ожидать body вроде:

{
  "some key": "some value"
}
Поскольку у вас есть один параметр body, вы также можете использовать специальный параметр Body для встраивания:

payload: dict = Body(..., embed=True)
в этом случае FastAPI будет ожидать body вроде:

{
  "payload": {"some key": "some value"}
}
Пожалуйста, ознакомьтесь с этим ответом , а также этим ответом и этим ответом для более подробной информации.

При отправке запроса через Postman
Кроме того, ошибка 422 Unprocessable Entity показывает, что полученный body не соответствует ожидаемому формату. Поэтому, пожалуйста, убедитесь, что вы правильно отправляете запрос body через Postman. То есть перейдите в Body -> raw и выберите JSON из выпадающего списка, чтобы указать формат ваших данных. Пожалуйста, взгляните на ответы здесь и здесь для более подробной информации.

 30.09.2022 11:37
Выберите тип данных, который вы отправляете как json в почтальоне. Это 100% устранит вашу ошибку.

Ваш ответ может быть улучшен с помощью дополнительной вспомогательной информации. Пожалуйста, отредактируйте , чтобы добавить дополнительные сведения, такие как цитаты или документация, чтобы другие могли подтвердить правильность вашего ответа. Вы можете найти больше информации о том, как писать хорошие ответы в справочном центре.

— 
user11717481
 20.10.2022 12:42



Безопасный способ запуска необработанных sql-запросов
Вопросы
PYTHON
Безопасный способ запуска необработанных sql-запросов
Я новичок в Python. Я создаю обучающее приложение, которое позволяет пользователям выполнять SQL-запросы к учебным таблицам непосредственно из браузера. Я использую FastAPI + Jinja2 + PostgreSQL. Я использую ACE в качестве редактора кода. Есть ли безопасный способ разрешить пользователям выполнять любые необработанные sql-запросы к базе данных? Можете ли вы дать мне несколько примеров кода?

Я пробовал asyncpg и psycopg, но не уверен, насколько это безопасно.

Спасибо.

 14.12.2022 09:16
1
2
87
3
Данный вопрос помечен как решенный
 Ответы 3
 Ответ принят как подходящий
ИМО, я не думаю, что это хорошая идея, чтобы позволить любым пользователям выполнять необработанные запросы к базе данных. Вместо этого я бы сначала поискал способ просто проверять запросы и не выполнять ни один из них, если только изменения в базе данных не являются фундаментальными для процесса обучения (что вы также можете смоделировать в качестве опции).

Тем не менее, в этом посте кому-то было предложено решение, которое хотело сделать что-то похожее на то, что вы предлагаете. В конце сообщения решение предлагает использовать одну базу данных для каждого пользователя в качестве подхода грубой силы, я не знаю, возможно ли это, но вы можете использовать базы данных sqlite, которые предоставляет Python, создавая их в памяти (сначала проверяя, будут ли они выполняться на стороне сервера или на стороне клиента).

По части просто проверки правильности запросов вы могли бы взглянуть на это, запустив скрипт на стороне сервера, используя файл, в который вы сбрасывали sql для проверки и возвращая результат анализа пользователю (будь то зная о проверке ввода, я был бы очень осторожен, чтобы выполнять на сервере что-либо, что может быть минимально создано пользователем).

 14.12.2022 09:59
какое определение для safe?

если безопасный означает с точки зрения безопасности, например, чтобы избежать инъекции SQL, вы должны использовать параметризованный запрос.
если это безопасно с точки зрения ресурсов, всегда уничтожайте длинные запросы более чем на x секунд, чтобы сервер базы данных не вышел из строя.
надеюсь, это поможет вам в изучении Python!

 14.12.2022 10:11
Как только вы разрешаете ненадежным пользователям писать код, который можно запускать на ваших системах, все становится очень сложно. Неважно, какой интерфейс базы данных вы используете.

Я бы предложил запустить отдельную копию PostgreSQL для каждого пользователя, чтобы они не могли нарушить работу друг друга или какой-либо базы данных, которую использует «бэкэнд» вашего веб-сайта. Таким образом, не имеет значения, что пользователи делают со своей копией, оставляют ли они какие-либо курсоры открытыми, снимают ли блокировки, эксплуатируют нулевые дни и т. д. им удается взломать его, они не собираются далеко уходить. Программное обеспечение для виртуальных машин позволяет устанавливать квоты на использование ЦП, ОЗУ и диска, поэтому один пользователь не может доминировать над другими.

В противном случае, если вы считаете, что у пользователя есть последний браузер, вы можете запустить Postgres в своем браузере, например. через WASM и просто периодически копируют данные во время сеанса.

Сведение вложенной модели Pydantic
Вопросы
PYTHON
Сведение вложенной модели Pydantic
from typing import Union
from pydantic import BaseModel, Field


class Category(BaseModel):
    name: str = Field(alias = "name")


class OrderItems(BaseModel):
    name: str = Field(alias = "name")
    category: Category = Field(alias = "category")
    unit: Union[str, None] = Field(alias = "unit")
    quantity: int = Field(alias = "quantity")
При создании такого экземпляра:

OrderItems(**{'name': 'Test','category':{'name': 'Test Cat'}, 'unit': 'kg', 'quantity': 10})
Он возвращает такие данные:

OrderItems(name='Test', category=Category(name='Test Cat'), unit='kg', quantity=10)
Но я хочу, чтобы вывод был таким:

OrderItems(name='Test', category='Test Cat', unit='kg', quantity=10)
Как я могу этого добиться?

 30.01.2023 20:18
2
6
129
3
Данный вопрос помечен как решенный
 Ответы 3
Попробуйте это при создании экземпляра:

myCategory = Category(name = "test cat")
OrderItems(
    name = "test",
    category=myCategory.name,
    unit = "kg",
    quantity=10)
 30.01.2023 20:33
Ну, мне было любопытно, так что вот безумный способ:

class Category(BaseModel):
    name: str = Field(alias = "name")


class OrderItems(BaseModel):
    name: str = Field(alias = "name")
    category: Category = Field(alias = "category")
    unit: Union[str, None] = Field(alias = "unit")
    quantity: int = Field(alias = "quantity")
    
    def json(self, *args, **kwargs) -> str:
        self.__dict__.update({'category': self.__dict__['category'].name})
        return super().json(*args, **kwargs)
    
c = Category(name='Dranks')
m = OrderItems(name='sodie', category=c, unit='can', quantity=1)
m.json()
И вы получаете:

'{"name": "sodie", "category": "Dranks", "unit": "can", "quantity": 1}'
Разумным способом, вероятно, будет:

class Category(BaseModel):
    name: str = Field(alias = "name")


class OrderItems(BaseModel):
    name: str = Field(alias = "name")
    category: Category = Field(alias = "category")
    unit: Union[str, None] = Field(alias = "unit")
    quantity: int = Field(alias = "quantity")
    
c = Category(name='Dranks')
m = OrderItems(name='sodie', category=c, unit='can', quantity=1)

r = m.dict()
r['category'] = r['category']['name']
 30.01.2023 20:51
 Ответ принят как подходящий
Вы должны максимально стараться определить свою схему так, как вы действительно хотите, чтобы данные выглядели в конце, а не так, как вы могли бы получить их откуда-то еще.

ОБНОВЛЕНИЕ: обобщенное решение (одно вложенное поле или более)
Чтобы обобщить эту проблему, предположим, что у вас есть следующие модели:

from pydantic import BaseModel


class Foo(BaseModel):
    x: bool
    y: str
    z: int


class _BarBase(BaseModel):
    a: str
    b: float

    class Config:
        orm_mode = True


class BarNested(_BarBase):
    foo: Foo


class BarFlat(_BarBase):
    foo_x: bool
    foo_y: str
Проблема: вы хотите иметь возможность инициализировать BarFlat аргументом foo точно так же, как BarNested, но данные должны оказаться в плоской схеме, в которой поля foo_x и foo_y соответствуют x и y на модели Foo (и вас это не интересует). в z).

Решение: определите собственный root_validator с pre=True, который проверяет наличие foo ключа/атрибута в данных. Если это так, он проверяет соответствующий объект на соответствие модели Foo, получает его значения x и y, а затем использует их для расширения данных с помощью ключей foo_x и foo_y:

from pydantic import BaseModel, root_validator
from pydantic.utils import GetterDict

...

class BarFlat(_BarBase):
    foo_x: bool
    foo_y: str

    @root_validator(pre=True)
    def flatten_foo(cls, values: GetterDict) -> GetterDict | dict[str, object]:
        foo = values.get("foo")
        if foo is None:
            return values
        # Assume `foo` must ba valid `Foo` data:
        foo = Foo.validate(foo)
        return {
            "foo_x": foo.x,
            "foo_y": foo.y,
        } | dict(values)
Обратите внимание, что нам нужно быть немного более осторожными внутри корневого валидатора с pre=True, потому что значения всегда передаются в форме GetterDict, который является неизменяемым объектом, подобным отображению. Поэтому мы не можем просто присвоить ему новые значения foo_x/foo_y, как словарю. Но ничто не мешает нам вернуть очищенные данные в виде обычного старого dict.

Чтобы продемонстрировать, мы можем добавить несколько тестовых данных:

test_dict = {"a": "spam", "b": 3.14, "foo": {"x": True, "y": ".", "z": 0}}
test_orm = BarNested(a = "eggs", b=-1, foo=Foo(x=False, y = "..", z=1))
test_flat = '{"a": "beans", "b": 0, "foo_x": true, "foo_y": ""}'
bar1 = BarFlat.parse_obj(test_dict)
bar2 = BarFlat.from_orm(test_orm)
bar3 = BarFlat.parse_raw(test_flat)
print(bar1.json(indent=4))
print(bar2.json(indent=4))
print(bar3.json(indent=4))
Выход:

{
    "a": "spam",
    "b": 3.14,
    "foo_x": true,
    "foo_y": "."
}
{
    "a": "eggs",
    "b": -1.0,
    "foo_x": false,
    "foo_y": ".."
}
{
    "a": "beans",
    "b": 0.0,
    "foo_x": true,
    "foo_y": ""
}
Первый пример имитирует распространенную ситуацию, когда данные передаются нам в виде вложенного словаря. Второй пример — это типичная ситуация с объектом ORM базы данных, где BarNested представляет схему, которую мы находим в базе данных. Третий — просто показать, что мы все еще можем правильно инициализировать BarFlat без аргумента foo.

Следует отметить, что валидатор не избавляется от ключа foo, если находит его в values. Если ваша модель настроена с Extra.forbid , это приведет к ошибке. В этом случае вам просто понадобится дополнительная строка, в которой вы сначала принуждаете исходный GetterDict к dict, а затем выталкиваете ключ "foo" вместо получаете его.

Исходное сообщение (свести одно поле)
Если вам нужна вложенная модель Category для вставки в базу данных, но вы хотите «плоскую» модель заказа, в которой category представляет собой просто строку в ответе, вы должны разделить ее на две отдельные модели.

Затем в модели ответа вы можете определить собственный валидатор с pre=True для обработки случая, когда вы пытаетесь инициализировать его, предоставляя экземпляр Category или dict для category.

Вот что я предлагаю:

from pydantic import BaseModel, validator


class Category(BaseModel):
    name: str


class OrderItemBase(BaseModel):
    name: str
    unit: str | None
    quantity: int


class OrderItemCreate(OrderItemBase):
    category: Category


class OrderItemResponse(OrderItemBase):
    category: str

    @validator("category", pre=True)
    def handle_category_model(cls, v: object) -> object:
        if isinstance(v, Category):
            return v.name
        if isinstance(v, dict) and "name" in v:
            return v["name"]
        return v
Вот демо:

if __name__ == "__main__":
    insert_data = '{"name": "foo", "category": {"name": "bar"}, "quantity": 1}'
    insert_obj = OrderItemCreate.parse_raw(insert_data)
    print(insert_obj.json(indent=2))
    ...  # insert into DB
    response_obj = OrderItemResponse.parse_obj(insert_obj.dict())
    print(response_obj.json(indent=2))
Вот результат:

{
  "name": "foo",
  "unit": null,
  "quantity": 1,
  "category": {
    "name": "bar"
  }
}
{
  "name": "foo",
  "unit": null,
  "quantity": 1,
  "category": "bar"
}
Одним из преимуществ этого подхода является то, что схема JSON остается согласованной с тем, что у вас есть в модели. Если вы используете это в FastAPI, это означает, что документация по чванству будет фактически отражать то, что получает потребитель этой конечной точки. Конечно, вы можете переопределить и настроить создание схемы, но... зачем? Просто правильно определите модель в первую очередь и избегайте головной боли в будущем.

гораздо более разумный, чем мой ответ

— 
Vetsin
 31.01.2023 00:53
@daniil-fajnberg без предварительного тоже работает нормально. Думаю нужно без пред. Запрос необходимо проверить как модель pydantic

— 
Russell
 31.01.2023 06:41
@ Даниил Фьянберг, очень мило! Однако как это может работать, если вы хотите объединить два дополнительных атрибута из класса Category (например, attr1 и attr2). Как будет выглядеть модель ответа и нужны ли нам отдельные валидаторы для каждого атрибута (по одному для category (name), attr1 и attr2?

— 
MrNetherlands
 03.02.2023 23:35
@MrNetherlands Как я уже сказал, вы должны определить, как вы хотите, чтобы ваша модель ответа выглядела. Как только вы это сделаете, все остальное станет вопросом «как мы можем сделать так, чтобы наши данные выглядели так?» Если у вас есть Category с attr1 и attr2 и вы хотите получить ответ с такими полями, как category_attr1 и category_attr2, например, вы можете определить root_validator для захвата объекта category и присвоения значений его атрибутов соответственно.

— 
Daniil Fajnberg
 04.02.2023 00:14
Спасибо, root_validator кажется действительно правильным. Однако в функции проверки аргумент values относится к классу GetterDict, который не допускает присвоения значения values["attr1"] = values["category"].attr1, дает: 'GetterDict' object does not support item assignment (type=type_error)

— 
MrNetherlands
 04.02.2023 11:33
@MrNetherlands Да, вы правы, с этим нужно обращаться немного иначе, чем с обычным dict. Это не задокументировано (потому что скоро выйдет Pydantic v2). Я обновил свой ответ, чтобы сначала представить более обобщенное решение.

— 
Daniil Fajnberg
 04.02.2023 13:24



Как получить данные изображения и json в FastAPI?
Вопросы
PYTHON
Как получить данные изображения и json в FastAPI?
Я отправляю и изображение, а также данные json в свой API следующим образом:

import requests
filename = "test_image.jpeg"
files = {'my_file': (filename, open(filename, 'rb'))}
json = {'first': "Hello", 'second': "World"}

response = requests.post('http://127.0.0.1:8000/file', files=files, params=json)
Как получить данные изображения и json на стороне сервера через FastAPI?

Мой код выглядит так:

@app.post('/file')
def _file_upload(my_file: UploadFile = File(...), params: str = Form(...)):

    image_bytes = my_file.file.read()
    decoded = cv2.imdecode(np.frombuffer(image_bytes, np.uint8), -1)
    pg_image = cv2.resize(decoded, (220, 220))
    return {"file_size": params}
Однако это дает мне следующую ошибку:

<Response [422]>
{'detail': [{'loc': ['body', 'params'], 'msg': 'field required', 'type': 'value_error.missing'}]}
Есть ли что-то, что я делаю неправильно здесь?

 22.12.2020 12:43
2
0
8 084
3
Данный вопрос помечен как решенный
 Ответы 3
Я думаю, что вы упускаете здесь довольно фундаментальный момент.

@app.post('/file')
def my_function(param1: str,  param2: str):
    ...
Предположим, у вас есть приведенный выше код, тело запроса, которое он ожидает, должно быть в этом формате.

{"param1": "some string", "param2": "some_string"}
Ключи тела запроса должны соответствовать вашим аргументам конечной точки. В противном случае выдавало бы ошибку.

Допустим, вы отправляете это тело запроса

{'first': "Hello", 'second': "World"}
Это сработает.

@app.post("/dummy")
def my_function(first: str = Body(...), second: str = Body(...)):
    ...
Это не удастся

@app.post('/file')
def my_function(param1: str = Body(...),  param2: str = Body(...)):
    ...
В вашем примере функция для вашей конечной точки /file ожидает две вещи в теле запроса, my_file и params, но вы отправляете {'first': "Hello", 'second': "World"} вместо params. Вот почему он вызывает ошибку.

 22.12.2020 13:02
 Ответ принят как подходящий
Вы должны определить аргументы, которые вы ожидаете в функции маршрутизатора, как:

# app.py
from fastapi import FastAPI, File, UploadFile, Form

app = FastAPI()


@app.post('/file')
def _file_upload(
        my_file: UploadFile = File(...),
        first: str = Form(...),
        second: str = Form("default value  for second"),
):
    return {
        "name": my_file.filename,
        "first": first,
        "second": second
    }
# client.py
import requests

filename = "requirements.txt"
files = {'my_file': (filename, open(filename, 'rb'))}
json = {'first': "Hello", 'second': "World"}

response = requests.post(
    'http://127.0.0.1:8000/file',
    files=files,
    data = {'first': "Hello", 'second': "World"}
)
print(response.json())
 22.12.2020 13:10
Я столкнулся с вашим вопросом, когда столкнулся с этой же проблемой. Я искал способ заставить свою конечную точку принимать тело JSON и файл (изображение). Ответ: вы не можете.

Это связано с тем, что они оба требуют разных типов контента, и я не думаю, что есть способ установить 2 типа контента при отправке запроса.

Я заметил это, когда открыл документацию. Тип контента, разрешающий изображения, является причиной того, что JSON не принимается. Вот почему ваша программа выдает ошибку о том, что эти поля отсутствуют.

Однако вы можете использовать форму для ввода всех параметров, которые вам нужны в теле JSON, как это предлагается в других комментариях. Это должно работать нормально, так как значения все еще могут быть приняты.

Но я решил использовать конечную точку, чтобы принимать JSON без изображения и давать объекту изображение по умолчанию. Затем я создал еще одну конечную точку для обновления образа.

Запуск fastapi в классе
                          
PYTHON
Запуск fastapi в классе
import uvicorn
from fastapi import FastAPI

# 2. Create the app object
app = FastAPI()

# 3. Index route, opens automatically on http://127.0.0.1:8000
class RunModel():
    @app.get('/')
    def index(self):
        return {'message': 'Hello'}

    @app.get('/predict')
    def get_res(self, feat1: float, feat2:float):
        res = feat1 + feat2
        return {'result': f'{res:.4f}'}

run_model = RunModel()
# 5. Run the API with uvicorn
#    Will run on http://127.0.0.1:8000
if __name__ == '__main__':
    uvicorn.run(app, host='127.0.0.1', port=8000)
Когда я запускаю это, в первую очередь я получаю сообщение об ошибке (в терминале, а не в браузере) 422 Unprocessable Entity. Следующее, когда я захожу на http://localhost:8000/docs, кажется, что он ожидает, что я введу 3 значения для маршрута /predict, две функции, как и ожидалось, и self. Итак, вопрос в том, как я могу использовать эту структуру классов и при этом использовать fastapi (т.е. игнорировать self).

 25.12.2020 09:42
1
0
4 609
3
Данный вопрос помечен как решенный
 Ответы 3
 Ответ принят как подходящий
Используйте представления на основе классов от fastapi-utils.

Создайте маршрутизатор с помощью InferringRouter, затем украсьте класс объектом cbv. Внутри класса вы можете начать создавать свои конечные точки с помощью вашего объекта router.

import uvicorn
from fastapi import FastAPI
from fastapi_utils.cbv import cbv
from fastapi_utils.inferring_router import InferringRouter


app = FastAPI()
router = InferringRouter()


@cbv(router)
class RunModel:
    @router.get("/")
    def index(self):
        return {"message": "Hello"}

    @router.get("/predict")
    def get_res(self, feat1: float, feat2: float):
        res = feat1 + feat2
        return {"result": f"{res:.4f}"}


app.include_router(router)
 25.12.2020 09:57
Вы можете сделать это следующим образом:

from fastapi import FastAPI
import uvicorn

class Settings:
    def __init__(self):
        self.api_version = "v1"
        self.api_name = "my_api"
        self.db = "some db"
        self.logger = "configured logger"
        self.DEBUG = True


class MyApi:
    def __init__(self, settings):
        self.settings = settings
        self._fastapi = FastAPI(
            version=self.settings.api_version,
        )
        self._fastapi.add_api_route(
            path = "/",
            endpoint=self.index,
            methods=["GET"]
        )

        self._fastapi.add_api_route(
            path = "/predict",
            endpoint=self.get_res,
            methods=["POST"]
        )

    async def index(self):
        if self.settings.DEBUG:
            pass
        return {"message": "Hello"}

    async def get_res(self, feat1: float, feat2: float):
        """
        You are able to access the settings
        """
        res = feat1 + feat2
        return {"result": f"{res:.4f}", "api_version": self.settings.api_version}

    def __getattr__(self, attr):
        if hasattr(self._fastapi, attr):
            return getattr(self._fastapi, attr)
        else:
            raise AttributeError(f"{attr} not exist")

    async def __call__(self, *args, **kwargs):
        return await self._fastapi(*args, **kwargs)


settings = Settings()
app = MyApi(settings)


if __name__ == "__main__":
    uvicorn.run(app, host = "0.0.0.0", port=8000)
 09.06.2021 19:11
К сожалению, все пакеты, оборачивающие FastAPI в классы, такие как fastapi-utils и fastapi-class, кажутся устаревшими, поэтому я бы предложил использовать FastAPI напрямую.

Основная проблема заключается в том, что FastAPI использует декораторы, такие как @app.get(...), которые плохо работают в классах.

Наследование
Итак, основываясь на ответе Константина, я написал небольшой пример, используя FastAPI в качестве базового класса:

from typing import Any

import uvicorn
from fastapi import FastAPI
from starlette.responses import HTMLResponse, JSONResponse


class App(FastAPI):
    def __init__(self, **extra: Any):
        super().__init__(**extra)

        self.add_api_route("/", self.get_root, methods=["GET"], include_in_schema=False)
        self.add_api_route("/version", self.get_version, methods=["GET"])

    @staticmethod
    async def get_root() -> HTMLResponse:
        return HTMLResponse('<meta http-equiv = "Refresh" content = "0; url=\'/docs\'" />')

    async def get_version(self) -> JSONResponse:
        return JSONResponse({"FastAPI version": self.version})


if __name__ == "__main__":
    url = "https://stackoverflow.com/q/65446591/5538913"
    app = App(
        title = "FastAPI from class",
        description=f"Source: <a href='{url}'>Stack Overflow</a>",
    )
    uvicorn.run(app, host = "127.0.0.1", port=8000)
Таким образом, App и его маршруты можно легко настроить, вы даже можете определить веб-сокеты с помощью self.add_api_websocket_route и т. д.

Состав
Другой подход — определить метод serve в вашем классе и реализовать там конечные точки:

import asyncio
from typing import Optional

import uvicorn
from fastapi import FastAPI
from fastapi.responses import HTMLResponse, JSONResponse


class MyClass:
    def __init__(self):
        self.version = "0.0.1"

        url = "https://stackoverflow.com/q/65446591/5538913"
        self.app = FastAPI(
            title = "FastAPI from class",
            description=f"Source: <a href='{url}'>Stack Overflow</a>",
        )
        self.serving_task: Optional[asyncio.Task] = None

    async def serve(self):
        app: FastAPI = self.app

        @app.get("/", include_in_schema=False)
        async def _get_root():
            """
            Redirect to /docs
            """
            return HTMLResponse('<meta http-equiv = "Refresh" content = "0; url=\'/docs\'" />')

        @app.get("/version")
        async def _get_version() -> JSONResponse:
            return JSONResponse({"MyClass version": self.version, "FastAPI version": app.version})

        # serve
        config = uvicorn.Config(app, host = "127.0.0.1", port=8000)
        server = uvicorn.Server(config)
        await server.serve()


if __name__ == "__main__":
    instance = MyClass()
    asyncio.run(instance.serve())



Как переопределить ответ 200 по умолчанию в документах fastapi
Вопросы
PYTHON
Как переопределить ответ 200 по умолчанию в документах fastapi
У меня есть это небольшое приложение fastapi

import uvicorn
from fastapi import FastAPI, APIRouter
from fastapi import Path
from pydantic import BaseModel
from starlette import status

app = FastAPI()


def test():
    print("creating the resource")
    return "Hello world"


router = APIRouter()


class MessageResponse(BaseModel):
    detail: str


router.add_api_route(
    path = "/test",
    endpoint=test,
    methods=["POST"],
    responses = {
        status.HTTP_201_CREATED: {"model": MessageResponse}
    }
)

app.include_router(router)


def main():
    uvicorn.run("run:app", host = "0.0.0.0", reload=True, port=8001)


if __name__ == "__main__":
    main()
когда я проверяю документы на http://127.0.0.1:8001/docs#/default/test_test_post, в списке ответов в документах я вижу два ответа: 200 и 201

У меня нет 200 ответов здесь. Я не хочу, чтобы 200 отображались для меня в документах.

Вот автоматически сгенерированный файл openapi.json с быстрым API.

{
    "openapi": "3.0.2",
    "info": {"title": "FastAPI", "version": "0.1.0"},
    "paths": {"/test": {
        "post": {"summary": "Test", "operationId": "test_test_post", "responses": {
            "200": {
                "description": "Successful Response", "content": {"application/json": {"schema": {}}}
            },
            "201": {
                "description": "Created",
                "content": {"application/json": {"schema": {"$ref": "#/components/schemas/MessageResponse"}}}}}}}
    },
    "components": {"schemas": {
        "MessageResponse": {"title": "MessageResponse", "required": ["detail"], "type": "object",
                            "properties": {"detail": {"title": "Detail", "type": "string"}}}}}}
я не должен видеть

                "description": "Successful Response", "content": {"application/json": {"schema": {}}}
            },
Что я должен делать?

ОБНОВЛЯТЬ:

этот тоже не работал

import uvicorn
from fastapi import FastAPI, APIRouter
from pydantic import BaseModel
from starlette import status
from starlette.responses import Response

app = FastAPI()


def test(response: Response):
    print("creating the resource")
    response.status_code = 201
    return "Hello world"


router = APIRouter()


class MessageResponse(BaseModel):
    detail: str


router.add_api_route(
    path = "/test",
    endpoint=test,
    methods=["POST"],
    response_model=None,
    responses = {
        200: {},
        status.HTTP_201_CREATED: {"model": MessageResponse}
    }
)

app.include_router(router)


def main():
    uvicorn.run("run:app", host = "0.0.0.0", reload=True, port=8001)


if __name__ == "__main__":
    main()

 03.06.2023 23:33
0
0
72
3
Данный вопрос помечен как решенный
 Ответы 3
 Ответ принят как подходящий
Ответ по умолчанию можно установить с помощью параметра status_code, а модель ответа по умолчанию также может напрямую контролироваться типом возвращаемого значения. В этом примере показано, как это сделать с помощью парадигмы декоратора, которая рекомендуется вместо ручного добавления маршрутов API.

class MessageResponse(BaseModel):
    detail: str

@router.post('/test', status_code=201)
def test() -> MessageResponse:
    print("creating the resource")
    return "Hello world"
Если вам действительно нужно сделать это с вашей текущей структурой, вы можете просто определить status_code в функции add_api_route.

router.add_api_route(
    path = "/test",
    endpoint=test,
    methods=["POST"],
    status_code=201,
    responses = {
        status.HTTP_201_CREATED: {"model": MessageResponse}
    }
)
 03.06.2023 23:59
Вы можете переопределить ответ по умолчанию, установив для него пустой словарь.

router.add_api_route(
    path = "/test",
    endpoint=test,
    methods=["POST"],
    responses = {
        200: {}, # Override the default 200 response
        status.HTTP_201_CREATED: {"model": MessageResponse}
    }
)
Он больше не должен присутствовать в вашей документации, но если вы хотите, чтобы код состояния 200 больше не присутствовал, вам нужно будет сделать это явно в своем коде.

from fastapi import status
from fastapi.responses import JSONResponse

def test():
    print("creating the resource")
    return JSONResponse(status_code=status.HTTP_201_CREATED, content = {"detail": "Hello world"})
 04.06.2023 00:02
это решение работает, но оно не идеально

import uvicorn
from fastapi import FastAPI, APIRouter
from pydantic import BaseModel
from starlette import status
from starlette.responses import Response

app = FastAPI()


def test(response: Response):
    print("creating the resource")
    response.status_code = 201
    return "Hello world"


router = APIRouter()


class MessageResponse(BaseModel):
    detail: str


router.add_api_route(
    path = "/test",
    endpoint=test,
    methods=["POST"],
    response_model=None,
    status_code=201,
    responses = {
        status.HTTP_201_CREATED: {"model": MessageResponse}
    }
)

app.include_router(router)


def main():
    uvicorn.run("run:app", host = "0.0.0.0", reload=True, port=8001)


if __name__ == "__main__":
    main()

Я должен повторить 201 дважды. это избыточно.

Я думаю, что это ошибка в fastapi.

В идеале мне не нужно этого делать

Это предполагаемое поведение в FastAPI и определенно не ошибка. Модель ответа по умолчанию существует для сокращения кода в большинстве случаев. Смотрите мой ответ для примера того, как.

— 
Squarish
 04.06.2023 00:39
@Squarish, но когда вы перечисляете ответы, значение по умолчанию следует удалить. Мне не нужно определять 201 дважды

— 
Amin Ba
 04.06.2023 00:47
Вам не нужно указывать значение по умолчанию в responses. Вы можете переместить модель ответа непосредственно в подсказку типа вашей конечной функции. Делая это здесь, вообще не нужно иметь responses=....

— 
Squarish
 04.06.2023 00:49
У меня есть несколько ответов и несколько моделей для каждого

— 
Amin Ba
 04.06.2023 00:50
в этом случае вы должны определить значение по умолчанию с помощью status_code и подсказку о типе возврата конечной точки, а затем определить другие ответы с помощью responses. По-прежнему приводит к меньшему количеству кода в целом и делает более интуитивно понятным, что является ожидаемым результатом по сравнению с результатами ошибок/пограничных случаев.

— 
Squarish
 04.06.2023 00:54
Я не согласен. У меня есть конечная точка, которая возвращает 204, 401, 403, 404. Я определяю их модели в respnses = {204: {.....}, 401: {.....}, 403: {.....}, 404: {.....}, а затем мне нужно снова определить status_code=204, чтобы избавиться от 200 в файле openapi.json.

— 
Amin Ba
 04.06.2023 00:58
В этом случае вы должны полностью удалить 204: {'model': PyModel} из responses и переместить его в test() -> PyModel:, добавив status_code=204, чтобы указать, что подсказанный ответ — это 204.

— 
Squarish
 04.06.2023 01:01
тогда модели ответов для 401, 403, 404 находятся не в том же месте, что и модели ответов для 204. Они будут в двух разных частях кода. Я хочу, чтобы они все были в одном месте

— 
Amin Ba
 04.06.2023 01:04
Я понимаю желание поставить все модели в одном месте, но здесь их быть не должно. Если вы заметили, 204 — это ответ об успехе 2xx, тогда как все остальные — это ответы об ошибке клиента 4xx. 204 является ожидаемым успешным ответом и должен отличаться от других.

— 
Squarish
 04.06.2023 01:11



Как вернуть json из FastAPI (Backend) с websocket в vue (Frontend)
Вопросы
PYTHON
Как вернуть json из FastAPI (Backend) с websocket в vue (Frontend)
У меня есть приложение, в котором Frontend работает через Vue, а Backend — через FastAPI, связь осуществляется через websocket.

В настоящее время внешний интерфейс позволяет пользователю вводить термин, который отправляется на серверную часть для создания автозаполнения, а также для выполнения поиска по URL-адресу, который возвращает json. В котором я сохраняю этот json в папке внешнего интерфейса. После этого серверная часть возвращает данные автозаполнения для рассматриваемого термина во внешний интерфейс. Интерфейс отображает автозаполнение вместе с данными json.

Однако, когда я изучил немного больше, я заметил, что есть способ отправить json, возвращенный URL-адресом запроса, в Vue (интерфейс), без необходимости сохранять его локально, избегая выдавать ошибку, не позволяющую выполнить этот процесс. чем один раз.

Мой текущий код выглядит следующим образом. Для FastAPI (бэкенд):

@app.websocket("/")
async def predict_question(websocket: WebSocket):
    await websocket.accept()
    while True:
        input_text = await websocket.receive_text()
        autocomplete_text = text_gen.generate_text(input_text)
        autocomplete_text = re.sub(r"[\([{})\]]", "", autocomplete_text)
        autocomplete_text = autocomplete_text.split()
        autocomplete_text = autocomplete_text[0:2]
        resp = req.get('www.description_url_search_='+input_text+'')
        datajson = resp.json()
        with open('/home/user/backup/AutoComplete/frontend/src/data.json', 'w', encoding='utf-8') as f:
            json.dump(datajson, f, ensure_ascii=False, indent=4)
        await websocket.send_text(' '.join(autocomplete_text))
Файл App.vue (интерфейс):

<template>
  <div class = "main-container">
    <h1 style = "color:#0072c6;">Title</h1>
    <p style = "text-align:center; color:#0072c6;">
      Version 0.1
      <br>
    </p>
    <Autocomplete />
    <br>
  </div>
  <div style = "color:#0072c6;">
    <JsonArq />
  </div>
  <div style = "text-align:center;">
    <img src = "./components/logo-1536.png" width=250 height=200 alt = "Logo" >
  </div>
</template>

<script>
import Autocomplete from './components/Autocomplete.vue'
import JsonArq from './components/EstepeJSON.vue'
export default {
  name: 'App',
  components: {
    Autocomplete, 
    JsonArq: JsonArq
  }
}
</script>

<style>

  .main-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-family: 'Fredoka', sans-serif;
  }

  h1 {
    font-size: 3rem;
  }

  @import url('https://fonts.googleapis.com/css2?family=Fredoka&display=swap');
</style>

Файл Autocomplete.vue в каталоге компонентов:

<template>
<div class = "pad-container">
  <div tabindex = "1" @focus = "setCaret" class = "autocomplete-container">
    <span @input = "sendText" @keypress = "preventInput" ref = "editbar" class = "editable" contenteditable = "true"></span>
    <span class = "placeholder" contenteditable = "false">{{autoComplete}}</span>    
  </div>
</div>

</template>

<script>
export default {
  name: 'Autocomplete',
  data: function() {
    return {
      autoComplete: "",
      maxChars: 75,
      connection: null
    }
  },
  mounted() {
    const url = "ws://localhost:8000/"
    this.connection = new WebSocket(url);
    this.connection.onopen = () => console.info("connection established");
    this.connection.onmessage = this.receiveText;
  },
  methods: {
    setCaret() {
      const range= document.createRange()
      const sel = window.getSelection();
      const parentNode = this.$refs.editbar;

      if (parentNode.firstChild == undefined) {
        const emptyNode = document.createTextNode("");
        parentNode.appendChild(emptyNode);
      }

      range.setStartAfter(this.$refs.editbar.firstChild);
      range.collapse(true);
      sel.removeAllRanges();
      sel.addRange(range);
    },
    preventInput(event) {
      let prevent = false;      

      // handles capital letters, numbers, and punctuations input
      if (event.key == event.key.toUpperCase()) {
        prevent = true;
      }

      // exempt spacebar input
      if (event.code == "Space") {
        prevent = false;
      }

      // handle input overflow
      const nChars = this.$refs.editbar.textContent.length;
      if (nChars >= this.maxChars) {
        prevent = true;
      }

      if (prevent == true) {
        event.preventDefault();
      }
    },
    sendText() {
      const inputText = this.$refs.editbar.textContent;
      this.connection.send(inputText);
    },
    receiveText(event) {
      this.autoComplete = event.data;
    }
  }
}
</script>


Файл EstepeJSON.ue в каталоге компонентов:

<template>
  <div width = "80%" v-for = "regList in myJson" :key = "regList" class = "container">
    <table>
        <thead>
          <tr>
            <th>Documento</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for = "countryList in regList[2]" :key = "countryList">
            <td style = "visibility: visible">{{ countryList}}</td>
          </tr>
        </tbody>
      </table>
    </div>

  <link
    rel = "stylesheet"
    href = "https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"
  />
</template>

<script>
import json from "@/data.json";

export default {
  name: "EstepeJson",
  data() {
    return {
      myJson: json,
    };
  },
};
</script>
Пример JSON, возвращаемого URL-адресом:

[
{
"Title": "SOFT-STARTER", 
"Cod": "Produto: 15775931", 
"Description": "A soft-starter SSW7000 permite o controle de partida/parada e proteção de motores.", 
"Technical_characteristics": ["Corrente nominal", "600 A", "Tensão nominal", "4,16 kV", "Tensão auxiliar", "200-240 V", "Grau de proteção", "IP41", "Certificação", "CE"]
},
{
"Title": "SOFT-STARTER SSW", 
"Cod": "Produto: 14223395", 
"Description": "A soft-starter SSW7000 permite o controle de partida/parada e proteção de motores de indução trifásicos de média tensão.", 
"Technical_characteristics": ["Corrente nominal", "125 A", "Tensão nominal", "6,9 kV", "Tensão auxiliar", "200-240 V", "Grau de proteção", "IP54/NEMA12", "Certificação", "CE"]
}
]
 29.11.2022 19:46
2
2
194
3
Данный вопрос помечен как решенный
 Ответы 3
Просто преобразуйте свои данные в строку json с помощью json.dumps(mydata)

 29.11.2022 20:39
Во-первых, вместо использования библиотеки Python requests (которая блокирует цикл обработки событий, см. этот ответ для получения более подробной информации), я настоятельно рекомендую использовать httpx , который также предлагает асинхронный API . Взгляните на этот ответ и этот ответ для более подробной информации и рабочих примеров.

Во-вторых, чтобы отправить data в формате JSON, вам нужно использовать await websocket.send_json(data), как описано в документации Starlette . Как показано в исходном коде веб-сокетов Starlette, Starlette/FastAPI будет использовать text = json.dumps(data) (для сериализации переданного вами data) при вызове функции send_json(). Следовательно, вам нужно передать объект Python dict. Подобно requests, в httpx вы можете вызвать метод .json() для объекта ответа, чтобы получить данные ответа в виде объекта dict, а затем передать метод data в send_json().

Пример
from fastapi import FastAPI, WebSocket
from fastapi.responses import HTMLResponse
import httpx

app = FastAPI()


html = """
<!DOCTYPE html>
<html>
    <head>
        <title>Chat</title>
    </head>
    <body>
        <h1>WebSocket Chat</h1>
        <form action = "" onsubmit = "sendMessage(event)">
            <input type = "text" id = "messageText" autocomplete = "off"/>
            <button>Send</button>
        </form>
        <ul id='messages'>
        </ul>
        <script>
            var ws = new WebSocket("ws://localhost:8000/ws");
            ws.onmessage = function(event) {
                var messages = document.getElementById('messages')
                var message = document.createElement('li')
                var content = document.createTextNode(event.data)
                message.appendChild(content)
                messages.appendChild(message)
            };
            function sendMessage(event) {
                var input = document.getElementById("messageText")
                ws.send(input.value)
                input.value = ''
                event.preventDefault()
            }
        </script>
    </body>
</html>
"""


@app.on_event("startup")
async def startup_event():
    app.state.client = httpx.AsyncClient()
    

@app.on_event('shutdown')
async def shutdown_event():
    await app.state.client.aclose()


@app.get('/')
async def get():
    return HTMLResponse(html)
    

@app.websocket('/ws')
async def websocket_endpoint(websocket: WebSocket):
    await websocket.accept()
    while True:
        data = await websocket.receive_text()
        # here, use httpx to issue a request, as demonstrated in the linked answers above
        r = await app.state.client.get('http://httpbin.org/get')
        await websocket.send_json(r.json())
 01.12.2022 09:39
 Ответ принят как подходящий
используя советы @Chris по HTTP, и после некоторых исследований мне удалось решить мою проблему. Ниже разрешение.

В моем бэкэнд-файле FastAPI я реализовал асинхронный протокол HTTPX (совет от @Chris). И после возврата JSON я взял термин автозаполнения и добавил его в первую позицию JSON. Таким образом, возвращая Vue (интерфейс) JSON с автозаполнением и данными HTTPX.

Файл FastAPI:

async def predict_question(websocket: WebSocket):
 await manager.connect(websocket)
 input_text = await websocket.receive_text()
 if not input_text:
  await manager.send_personal_message(json.dumps([]), websocket)
 else:
  autocomplete_text = text_gen.generate_text(input_text)
  autocomplete_text = re.sub(r"[\([{})\]]", "", autocomplete_text)
  autocomplete_text = autocomplete_text.split()
  autocomplete_text = autocomplete_text[0:2]
  resp = client.build_request("GET", 'www.description_url_search_='+input_text+'')
  r = await client.send(resp)
  datajson = r.json()
  datajson.insert(0, ' '.join(autocomplete_text))
  await manager.send_personal_message(json.dumps(datajson), websocket)
В файл Autocomplete.vue я внес небольшие изменения. Сначала я объединил файл EstepeJson.vue с Autocomplete.vue, особенно часть чтения json в html. Во-вторых, в data: function(){} я добавил еще один объект с именем myJson: [].

В-третьих, в методе receiveText я изменил способ получения данных из вебсокета. Теперь у меня есть JSON.parse для преобразования event.data в JSON. Затем я использую метод сдвига, чтобы занять первую позицию в json и удалить эти данные из файла. И, наконец, верните json в переменную myjson.

Файл Autocomplete.vue:

<template>
<div class = "pad-container">
  <div tabindex = "1" @focus = "setCaret" class = "autocomplete-container">
    <span @input = "sendText" @keypress = "preventInput" ref = "editbar" class = "editable" contenteditable = "true"></span>
    <span class = "placeholder" data-ondeleteId = "#editx" contenteditable = "false">{{autoComplete}}</span>    
  </div>
</div>
<div v-for = "regList in myJson" :key = "regList" class = "container" >
  <table>
    <thead>
      <tr>
        <th>Documento</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for = "countryList in regList[2]" :key = "countryList">
        <td style = "visibility: visible">{{ countryList}}</td>
      </tr>
    </tbody>
  </table>
  </div>
</template>

<script>
...
data: function() {
    return {
      autoComplete: "",
      maxChars: 75,
      connection: null, 
      myJson: []
    }
  },
.....
...
    receiveText(event) {
      let result = JSON.parse(event.data)
      this.autoComplete = result.shift();
      this.myJson = result
    }
</script>

Как вернуть результат от конечной точки fastapi, обрабатывающей массив чисел int32?
Вопросы
PYTHON
Как вернуть результат от конечной точки fastapi, обрабатывающей массив чисел int32?
Мне нужно выполнить следующее задание:

Создайте общедоступную службу http или https. Он должен иметь общедоступную точку, которая принимает массив чисел int32, закодированных как json, в теле запроса и возвращает результат в виде числа. После развертывания передайте URL-адрес этой конечной точки в корень этого сервиса в теле запроса в виде строки в кодировке utf8. В случае успеха вы получите код успеха, который можно передать нам через чат upwork.

Я создал сервис (пока еще локальный), используя FastAPI:

from fastapi import FastAPI, HTTPException
from pydantic import BaseModel

app = FastAPI()

class ListRequest(BaseModel):
    numbers: list[int]

@app.post("/")
async def root(request: ListRequest):
    # int32 range
    int32_min = -2**31
    int32_max = 2**31 - 1

    for number in request.numbers:
        if not (int32_min <= number <= int32_max):
            raise HTTPException(status_code=400, detail = "All elements must be int32 numbers")
    
    return {"result": "something???"}
Я не понимаю эту часть: return result as a number?

Может кто-нибудь помочь мне, что именно мне нужно вернуть?

Спасибо.

 04.09.2024 09:49
2
4
65
2
Данный вопрос помечен как решенный
 Ответы 2
 Ответ принят как подходящий
Я все равно рекомендовал бы задавать больше вопросов при работе над такой задачей, как эта.... это неясная задача, и если это что-то, что пойдет в производство, это может привести к множеству проблем, поэтому не стесняйтесь задавать вопросы о непонятные вещи.... Также я выбрал результат sum, потому что это самый «человечный» подход, когда меня спрашивают о «результате».

Я предполагаю, что вы не можете задавать вопрос, вот почему: я предполагаю, что они хотят от вас получить сумму результата от request.number, и после этого вам просто нужно передать URL-адрес, по которому числа будут складываться или где функция вернет HTTPException:

from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import List

app = FastAPI()

class ListRequest(BaseModel):
     numbers: List[int]


@app.post("/")

async def root(request: ListRequest):
    # int32 range

    int32_min = -2**31

    int32_max = 2**31 - 1

    for number in request.numbers:
         if not (int32_min <= number <= int32_max):
             raise HTTPException(status_code=400, detail = "All 
            elements must be int32 numbers")


    result = sum(request.numbers)

    return {"result": result}
 04.09.2024 10:19
Я думаю, что задача здесь — создать интерфейс такой конечной точки (схемы).

Итак, для выполнения этой задачи вам необходимо указать модель ответа и вернуть правильное значение.

Поскольку не сказано, как приводить массив к одному числу, вы можете использовать sum или просто вернуть 42.

Обратите внимание: сказано, что вы должны возвращать результат в виде числа, а не в формате JSON с номером.

Кроме того, вы можете улучшить свой код, указав ограничения элемента списка в вашей модели:

from typing import Annotated, TypeAlias
from annotated_types import Gt, Lt

MyInt: TypeAlias = Annotated[int, Gt(-2**31 - 1), Lt(2**31)]

class InputData(BaseModel):
    numbers: list[MyInt]

В этом случае это будет показано в схеме openapi. И вам не нужно проверять элементы в вашей конечной точке (FastAPI сделает это за вас).

Знаете ли вы, могу ли я передать локальный URL-адрес моей конечной точки (например, 127.0.0.1:8000) этой корневой службе или это должна быть общедоступная служба (например, я размещаю ее на Heroku)?

Role_required декоратор для маршрута FastAPI

PYTHON
Role_required декоратор для маршрута FastAPI
Отказ от ответственности и извинительные слова. Прошло довольно много времени с тех пор, как я не задаю здесь вопросы, а также я полный новичок в FastAPI, так что... пожалуйста, не судите слишком строго.

Я играю с авторизацией FastAPI и задаюсь вопросом, как я могу защитить свои маршруты от пользователей, которые прошли аутентификацию, но не имеют разрешения для этих конкретных маршрутов.

Я написал код, который решает эту проблему.

Вот мои маршруты:

@router.get('/student_route_only')
@role_required(allowed_roles=[UserRole(name='student')])
async def student_route_only(
    token: Annotated[str, Depends(oauth2_scheme)],
    auth_service: AuthService = Depends(get_auth_service),
    user_data: UserAuthResponse = None,
):
    return UserAuthResponse(
        user_id=user_data.user_id,
        role=user_data.role,
        name=user_data.name,
    )


@router.get('/routes_for_student_and_admin')
@role_required(allowed_roles=[UserRole(name='student'), UserRole(name='admin')])
async def routes_for_student_and_admin(
    token: Annotated[str, Depends(oauth2_scheme)],
    auth_service: AuthService = Depends(get_auth_service),
    user_data: UserAuthResponse = None,
):
    return UserAuthResponse(
        user_id=user_data.user_id,
        role=user_data.role,
        name=user_data.name,
    )
Это моя пидантическая модель:

class UserAuthResponse(BaseModel):
    user_id: int
    role: str
    name: str

class UserRole(BaseModel):
    name: str

    @validator('name')
    def name_must_be_valid(cls, value):
        allowed_roles = ['admin', 'student', 'teacher']
        if value.lower() not in allowed_roles:
            raise ValueError(
                f"Invalid role. Allowed roles are: {', '.join(allowed_roles)}"
            )
        return value
и это мой декоратор, который выполняет эту работу:

def role_required(allowed_roles: list[UserRole]):
    def decorator(func):
        @wraps(func)
        async def wrapper(*args, **kwargs):
            auth_service = kwargs.get('auth_service')
            token = kwargs.get('token')
            user_data = await auth_service.get_current_user(token)
            if not user_data or user_data.role not in [role.name for role in allowed_roles]:
                raise HTTPException(
                    status_code=status.HTTP_403_FORBIDDEN,
                    detail='This operation is forbidden for you',
                )
            kwargs['user_data'] = user_data  # pushing gotten user_data back
            return await func(*args, **kwargs)

        return wrapper

    return decorator
Я искал относительно простое решение для защиты ролевого маршрута в FastAPI, но не нашел чего-то, что было бы несложно реализовать.

Итак, я хотел бы спросить вас, можно ли использовать такой код в производстве?

Потому что я думаю, что его довольно просто использовать, например, если мне нужно защитить какой-то маршрут и сделать его доступным, скажем, только для администратора, я могу просто сделать это:

@router.get('/admin_route_only')
@role_required(allowed_roles=[UserRole(name='admin')])  # and that's it. The decorator does the rest of the job
async def admin_route_only(
    token: Annotated[str, Depends(oauth2_scheme)],
    auth_service: AuthService = Depends(get_auth_service),
    user_data: UserAuthResponse = None,
):
    return UserAuthResponse(
        user_id=user_data.user_id,
        role=user_data.role,
        name=user_data.name,
    )
С другой стороны, моему PyCharm не нравится, что auth_service и token в функции не используются (но они нужны в декораторе). Подойдет ли это другим разработчикам? А для линтеров?

А также можно ли таким образом делегировать авторизацию декоратору, а затем отправлять пользовательские данные обратно через kwargs..?

Заранее большое спасибо!

 14.08.2024 18:29
1
1
84
2
Данный вопрос помечен как решенный
 Ответы 2
 Ответ принят как подходящий
Для этой цели можно и удобно использовать Зависимости.

Вы можете реализовать зависимость как класс.

class Authorization:

    def __init__(self, allowed_roles: list[UserRole]):
        self.allowed_roles = allowed_roles

    def __call__(
        self,
        token: : Annotated[str, Depends(oauth2_scheme),
        auth_service: AuthService = Depends(get_auth_service),
    ):
        user_data = await auth_service.get_current_user(token)
        if not user_data or user_data.role not in [role.name for role in self.allowed_roles]:
            raise HTTPException(
                status_code=status.HTTP_403_FORBIDDEN,
                detail='This operation is forbidden for you',
            )

        return user_data
И затем ваши маршруты:

@router.get('/routes_for_student_and_admin')
async def routes_for_student_and_admin(
    user_data: Annotated[UserAuthResponse, Depends(Authorization(allowed_roles=[UserRole(name='student')]))],
):
    return user_data

Аналогичным образом реализуйте другие конечные точки с другим списком UserRoles. Вероятно, для запуска этого кода потребуются небольшие изменения. Но я надеюсь, что вы нашли подход!

 16.08.2024 15:47
Отказ от ответственности: я не самый опытный человек, когда дело касается fastapi, и решение, предложенное Дмитрием, кажется, больше соответствует способу fastapi.

Тем не менее, если вы хотите придерживаться своего подхода с использованием декораторов, небольшая адаптация следующего кода должна помочь:

def require_permission(permission: str) -> Callable:
    def decorator(func) -> Callable:
        @wraps(func)
        async def wrapper(*args, **kwargs) -> Callable:
            try:
                request = kwargs.pop("zz_permission_request",
                                 next(arg for _, arg in kwargs.items() if isinstance(arg, Request)))
            except StopIteration:
                raise HTTPException(
                    status_code=status.HTTP_401_UNAUTHORIZED,
                    detail='Permission check failed.',
                )
            auth_header = request.headers.get('Authorization')
            scheme, _, token = auth_header.partition(' ')
            if not auth_header or scheme.lower() != "bearer":
                raise HTTPException(
                    status_code=status.HTTP_401_UNAUTHORIZED,
                    detail = "Not authenticated",
                    headers = {"WWW-Authenticate": "Bearer"},
                )
            payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM], verify=True)
            token_data = TokenData.model_validate(payload)
            available_permissions = set(token_data.permissions).union(resolve_roles(token_data.roles))
            if not match_permission(permission, available_permissions):
                raise HTTPException(
                    status_code=status.HTTP_403_FORBIDDEN,
                    detail='missing permissions',
                )
            if inspect.iscoroutinefunction(func):
                return await func(*args, **kwargs)
            else:
                return func(*args, **kwargs)

        # if the Request is not already part of the wrapped func signature we want to add it
        sig = inspect.signature(func).parameters
        if not any(True for param in sig.values() if param.annotation == Request):
            wrapper.__signature__ = inspect.Signature(
                parameters=[
                    # Use all parameters from func
                    *sig.values(),
                    Parameter('zz_permission_request', Parameter.KEYWORD_ONLY, annotation=Request)
                ],
                return_annotation=inspect.signature(func).return_annotation,
                )
        return wrapper
    return decorator
Это все еще очень грубо, но по сути это то, что при необходимости манипулирует исходной сигнатурой функции, чтобы fastapi внедрил запрос. Имея доступный запрос, вы можете извлечь токен и проверить свои разрешения.

Перезагрузка UVICORN внутри докер-контейнера не работает
Вопросы
DOCKER
Перезагрузка UVICORN внутри докер-контейнера не работает
Попробовав почти все различные решения в Интернете, у меня все еще возникают проблемы с горячей перезагрузкой приложения FAST API внутри контейнера Docker.

Я вижу, что сопоставление томов работает, и файлы обновляются внутри контейнера докеров.

Журнал консоли сообщает мне, что uvicorn просматривает файлы внутри правильной папки. Но любое изменение, которое я делаю, не вызывает перезагрузку приложения.

У меня есть следующая настройка:

Мой докер составляет:

#docker-compose.yml
version: "3"

services:
  app:
    container_name: api
    image: api:latest
    depends_on:
      - mysqldb
    build: 
      context: .
      dockerfile: Dockerfile.dev
      args:
        DEV: "true"
    ports:
      - "8080:8080"
    env_file:
      - .env
    environment:
      - WATCHFILES_FORCE_POLLING=true
      - DEV=1
      - MYSQL_HOSTNAME=mysqldb
      - MYSQL_PORT=3306
    command: uvicorn app.main:app --host 0.0.0.0 --port 8080 --reload --reload-dir /src/app
    volumes:
      - ./app:/src/app
  mysqldb:
    container_name: mysqldb
    image: mysql:latest
    restart: always
    ports:
     - 3307:3306
    environment:
      MYSQL_ROOT_PASSWORD: randompassword
      MYSQL_DATABASE: my-database
И мой докер составляет

#dockerfile.dev
FROM python:3.10-slim-buster

ENV PYTHONUNBUFFERED 1

COPY requirements.txt /
COPY alembic.ini /
COPY migrations /migrations

RUN pip install --upgrade pip setuptools wheel gunicorn uvloop httptools
RUN pip install -r requirements.txt
RUN pip install torch torchvision --index-url https://download.pytorch.org/whl/cpu
RUN pip install sentence-transformers 

# Copy the source code to src folder
COPY . /src

ENV PYTHONPATH=/src

EXPOSE 8080

# FOR local dev the startup happens inside the docker-compose with reload options
COPY startup.sh /src/startup.sh
RUN chmod +x /src/startup.sh

CMD ["uvicorn", "app.main:app","--host", "0.0.0.0", "--port", "8080", "--reload"]
Перепробовал почти все возможные конфигурации перезагрузки.

Без запуска команды uvicorn внутри файла докера
С каталогом перезагрузки как root (/), app и src/app
Без перезагрузки каталога
С сервером guvicorn вместо сервера uvicorn
Так что я как бы застрял. Может кто-нибудь мне помочь?

 28.03.2024 18:38
1
4
529
3
Данный вопрос помечен как решенный
 Ответы 3
 Ответ принят как подходящий
После работы с различными настройками у нас теперь есть стабильное рабочее пространство для перезагрузки. Проблема с оператором uvicorn --reload была связана с сопоставлением томов и моментом вызова команды.

Теперь вместо запуска команды uvicorn из файла компоновки докера я запускаю команду, чтобы поддерживать контейнер в рабочем состоянии:

command: /bin/sh -c "while true; do sleep 30; done"
Затем я вручную подключаюсь к контейнеру:

docker exec -it ml_api /bin/bash
И тогда я смогу запустить (или перезапустить вручную) сервер uvicorn (или guvicorn). Оператор перезагрузки теперь работает правильно, и если произойдут какие-либо серьезные изменения, я могу перезапустить uvicorn, не перезапуская свой контейнер докера.

 22.04.2024 09:55
Ваш общий подход должен работать, но вы можете ошибочно полагаться на PYTHONPATH, что, в свою очередь, означает, что Python не видит смонтированный код.

Согласно пункту 7 в документации Docker , ENV в вашем Dockerfile отключается любым environment в скрипте docker-compose. Вы можете рассмотреть возможность использования WORKDIR в Dockerfile и, при необходимости, work_dir в файле компоновки, чтобы добиться аналогичного результата.

 22.04.2024 11:40
Это сработало для меня:

Установка working_dir: /app в docker Compose или WORKDIR /app в Dockerfile (/src/app в вашем случае). Если вы используете подход Dockerfile, сначала обязательно COPY установите приложение.
Установка env PYTHONPATH=/ (/src в вашем случае) в Dockerfile или docker compose.
Вы даже можете удалить --reload-dir /app или /src/app и WATCHFILES_FORCE_POLLING=true, поскольку на самом деле проблема не в них.

Источник: https://github.com/encode/uvicorn/discussions/1893#discussioncomment-5270426

Pytest- Как удалить созданные данные после каждой тестовой функции

PYTHON
Pytest- Как удалить созданные данные после каждой тестовой функции
У меня есть проект FastAPI + SQLAlchemy, и я использую Pytest для написания модульных тестов для API.

В каждой тестовой функции я создаю некоторые данные в некоторых таблицах (таблица пользователя, таблица сообщений, таблица комментариев и т. д.), используя SQLAlchemy. Эти созданные данные в каждой тестовой функции останутся в таблицах после завершения тестовой функции и повлияют на другие тестовые функции.

Например, в первой тестовой функции я создаю 3 сообщения и 2 пользователей, затем во второй тестовых функциях эти 3 сообщения и 2 пользователя остались в таблицах, что делает мои тестовые ожидания неверными.

Ниже приведена моя установка для pytest:

@pytest.fixture
def session(engine):
    Session = sessionmaker(bind=engine)
    session = Session()
    yield session
    session.rollback()  # Removes data created in each test method
    session.close()  # Close the session after each test
Я использовал session.rollback(), чтобы удалить все созданные данные во время сеанса, но данные не удаляются.

И вот мои тестовые функции:

class TestAllPosts(PostBaseTestCase):

    def create_logged_in_user(self, db):
        user = self.create_user(db)
        return user.generate_tokens()["access"]

    def test_can_api_return_all_posts_without_query_parameters(self, client, session):
        posts_count = 5
        user_token = self.create_logged_in_user(session)
        for i in range(posts_count):
            self.create_post(session)

        response = client.get(url, headers = {"Authorization": f"Bearer {user_token}"})
        assert response.status_code == 200
        json_response = response.json()
        assert len(json_response) == posts_count

    def test_can_api_detect_there_is_no_post(self, client, session):
        user_token = self.create_logged_in_user(session)
        response = client.get(url, headers = {"Authorization": f"Bearer {user_token}"})
        assert response.status_code == 404
В последней тестовой функции вместо 404 я получаю 200 с 5 сообщениями (из последней тестовой функции)

Как я могу удалить созданные данные в каждой тестовой функции после завершения тестовой функции?

 09.03.2024 13:43
5
3
1 199
5
Данный вопрос помечен как решенный
 Ответы 5
После фиксации транзакции вы не можете вернуться к состоянию до фиксации. В соответствии с принципами долговечности в ACID, после фиксации транзакции откат не повлияет на зафиксированные данные: https://dba.stackexchange.com/questions/188653/rollback-after-commit

Поэтому вам следует удалить эти записи вручную.

Редактировать:

Вы можете использовать оператор truncate, который удаляет все записи в таблице: https://dev.mysql.com/doc/refman/8.3/en/truncate-table.html

Примечание. Рассмотрите возможность усечения таблиц, в которых нет ссылки на их первичный ключ, чтобы избежать ошибок несогласованности.

Вот пример усечения с использованием SqlAlchemy: https://stackoverflow.com/a/42097818/12961420

 16.03.2024 09:40
Во-первых, в идеале ваши модульные тесты не должны зависеть друг от друга. Возможно, вам нужно подумать о том, чтобы перепроектировать их, чтобы они могли выполняться случайным образом. Я знаю, что иногда для этого требуется дополнительная работа...

Я использовал session.rollback() для удаления всех созданных данных во время сеанса, но данные не удаляются.

Это потому, что изменение было зафиксировано. Если вы зафиксируете изменения, откат не повлияет на них. Это влияет только на текущую транзакцию.

Здесь есть два возможных решения:

Не совершайте никаких обязательств. После открытия транзакции (внутри ваших тестов), создайте свои сообщения и что-то еще, затем не фиксируйте их, они будут отменены с вашим текущим фикстурой и не повлияют на базу данных. Вы по-прежнему сможете прочитать изменения и убедиться, что ваши тесты действительно работают. (для получения дополнительной информации ознакомьтесь с уровнями изоляции)
Примечание. Вам следует указать область действия "function" для вашего прибора, чтобы откат происходил в каждом отдельном тесте.

Примечание. Помните, что если вы используете менеджер контекста with sesison.begin() внутри своих тестов, он зафиксирует изменения при выходе из блока with. Если вы решили использовать это решение, вам следует избегать этого. Для открытия транзакции достаточно голого session.begin().

Внутри ваших тестов удалите созданные вами объекты и снова зафиксируйте сеанс.
 16.03.2024 14:36
Одним из решений было бы иметь приспособление, которое обрезало бы таблицы перед каждым тестом, поэтому вы могли бы использовать его в классе следующим образом:

import pytest
from sqlalchemy import text
from sqlalchemy.orm import Session

from models import user, post


@pytest.fixture()
def clean_db(session: Session):
    tables = [user.__tablename__, post.__tablename__]
    for table in tables:
        session.execute(text(f'TRUNCATE TABLE {table}'))
    session.commit()
и в классе тестов:

import pytest

@pytest.mark.usefixtures("clean_db", autouse=True)
class TestAllPosts(PostBaseTestCase):

...
 16.03.2024 16:31
 Ответ принят как подходящий
Проблема в том, что существует несколько сеансов.

Один используется вашими тестами. Другой(а) используется/используется сервером.

Поскольку вы используете client.get, вы отправляете запрос на сервер, который будет использовать собственный сеанс базы данных.

Чтобы решить вашу проблему, вы можете просто обрезать все таблицы в конце каждого теста: https://stackoverflow.com/a/25220958/5521670
@pytest.fixture
def session(engine):
    Session = sessionmaker(bind=engine)
    session = Session()
    yield session

    # Remove any data from database (even data not created by this session)
    with contextlib.closing(engine.connect()) as connection:
        transaction = connection.begin()
        connection.execute(f'TRUNCATE TABLE {",".join(table.name for table in reversed(Base.metadata.sorted_tables)} RESTART IDENTITY CASCADE;'))
        transaction.commit()

    session.rollback()  # Removes data created in each test method
    session.close()  # Close the session after each test
Другой альтернативой может быть заставить сервер использовать ваш тестовый сеанс (как предлагает документация FastAPI): https://fastapi.tiangolo.com/advanced/testing-database/
def override_get_db():
    try:
        db = TestingSessionLocal()
        yield db
    finally:
        db.close()


app.dependency_overrides[get_db] = override_get_db
 16.03.2024 16:55
Вам необходимо truncate таблицы перед каждым тестом:-


@pytest.fixture()
def clear(session: Session):
    data = [user.__tablename__, post.__tablename__]
    for i in data:
        session.execute(text(f'TRUNCATE TABLE {i}'))
    session.commit()
    
Теперь в тестовом классе просто используйте эту аннотацию, а затем свой код:

@pytest.mark.usefixtures("clear", autouse=True)


Как вернуть изображение в fastAPI?
Вопросы
PYTHON
Как вернуть изображение в fastAPI?
Используя модуль Python быстрый API, я не могу понять, как вернуть изображение. В колбе я бы сделал что-то вроде этого:

@app.route("/vector_image", methods=["POST"])
def image_endpoint():
    # img = ... # Create the image here
    return Response(img, mimetype = "image/png")
какой соответствующий вызов в этом модуле?

 26.04.2019 20:29
48
0
45 383
9
Данный вопрос помечен как решенный
 Ответы 9
Это еще не документировано должным образом, но вы можете использовать что угодно из Starlette.

Итак, вы можете использовать FileResponse, если это файл на диске с путем: https://www.starlette.io/responses/#fileresponse

Если это файлоподобный объект, созданный в вашем операция пути, в следующем стабильном выпуске Starlette (внутренне используемом FastAPI) вы также сможете вернуть его в файле StreamingResponse.

 26.04.2019 22:52
отвечать от @SebastiánRamírez указал мне правильное направление, но для тех, кто хочет решить проблему, мне нужно было несколько строк кода, чтобы заставить ее работать. Мне нужно было импортировать FileResponse из starlette (не fastAPI?), добавить поддержку CORS и вернуть из временного файла. Возможно, есть лучший способ, но я не смог заставить потоковую передачу работать:

from starlette.responses import FileResponse
from starlette.middleware.cors import CORSMiddleware
import tempfile

app = FastAPI()
app.add_middleware(
    CORSMiddleware, allow_origins=["*"], allow_methods=["*"], allow_headers=["*"]
)

@app.post("/vector_image")
def image_endpoint(*, vector):
    # Returns a raw PNG from the document vector (define here)
    img = my_function(vector)

    with tempfile.NamedTemporaryFile(mode = "w+b", suffix = ".png", delete=False) as FOUT:
        FOUT.write(img)
        return FileResponse(FOUT.name, media_type = "image/png")
 29.04.2019 16:04
 Ответ принят как подходящий
У меня была похожая проблема, но с изображением cv2. Это может быть полезно для других. Использует StreamingResponse.

import io
from starlette.responses import StreamingResponse

app = FastAPI()

@app.post("/vector_image")
def image_endpoint(*, vector):
    # Returns a cv2 image array from the document vector
    cv2img = my_function(vector)
    res, im_png = cv2.imencode(".png", cv2img)
    return StreamingResponse(io.BytesIO(im_png.tobytes()), media_type = "image/png")
 06.01.2020 21:03
Благодаря ответу @biophetik с важным напоминанием, которое вызвало у меня замешательство: Если вы используете BytesIO, особенно с PIL/skimage, не забудьте также сделать img.seek(0) перед возвращением!

@app.get("/generate")
def generate(data: str):
  img = generate_image(data)
  print('img=%s' % (img.shape,))
  buf = BytesIO()
  imsave(buf, img, format='JPEG', quality=100)
  buf.seek(0) # important here!
  return StreamingResponse(buf, media_type = "image/jpeg",
    headers = {'Content-Disposition': 'inline; filename = "%s.jpg"' %(data,)})
 16.04.2020 06:51
Все остальные ответы в точку, но теперь так легко вернуть изображение

from fastapi.responses import FileResponse

@app.get("/")
async def main():
    return FileResponse("your_image.jpeg")
 16.07.2020 19:48
Вы можете сделать что-то очень похожее в FastAPI

from fastapi import FastAPI, Response

app = FastAPI()

@app.post("/vector_image/")
async def image_endpoint():
    # img = ... # Create the image here
    return Response(content=img, media_type = "image/png")
 14.11.2020 18:50
Если у вас уже есть байты изображения в памяти
Верните fastapi.responses.Response с вашими обычными content и media_type.

Вам также нужно будет возиться с декоратором конечной точки, чтобы заставить FastAPI указать правильный тип носителя в спецификации OpenAPI.

@app.get(
    "/image",

    # Set what the media type will be in the autogenerated OpenAPI specification.
    # fastapi.tiangolo.com/advanced/additional-responses/#additional-media-types-for-the-main-response
    responses = {
        200: {
            "content": {"image/png": {}}
        }
    }

    # Prevent FastAPI from adding "application/json" as an additional
    # response media type in the autogenerated OpenAPI specification.
    # https://github.com/tiangolo/fastapi/issues/3258
    response_class=Response,
)
def get_image()
    image_bytes: bytes = generate_cat_picture()
    # media_type here sets the media type of the actual response sent to the client.
    return Response(content=image_bytes, media_type = "image/png")
См. Response документация.

Если ваше изображение существует только в файловой системе
Верните fastapi.responses.FileResponse.

См. FileResponse документация.

Будьте осторожны с StreamingResponse
Другие ответы предполагают StreamingResponse. StreamingResponse сложнее правильно использовать, поэтому я не рекомендую его, если вы не уверены, что не можете использовать Response или FileResponse.

В частности, такой код бессмысленен. Это не будет «потоковым» изображением каким-либо полезным способом.

@app.get("/image")
def get_image()
    image_bytes: bytes = generate_cat_picture()
    # ❌ Don't do this.
    image_stream = io.BytesIO(image_bytes)
    return StreamingResponse(content=image_stream, media_type = "image/png")
Прежде всего, потоки StreamingResponse(content=my_iterable) перебирают фрагменты, предоставленные my_iterable. Но когда эта итерация является BytesIO, куски будут \n-терминированными строками, что не имеет смысла для бинарного изображения.

И даже если деление на куски имело смысл, деление на куски здесь бессмысленно, потому что у нас был весь image_bytesbytes объект, доступный с самого начала. С тем же успехом мы могли просто передать все это в Response с самого начала. Мы ничего не получаем, утаивая данные от FastAPI.

Во-вторых, StreamingResponse соответствует Кодирование HTTP-передачи по частям. (Это может зависеть от вашего ASGI-сервера, но, по крайней мере, это относится к Увикорн.) И это не лучший вариант использования для кодирования передачи по частям.

Кодирование фрагментированной передачи имеет смысл, когда вы заранее не знаете размер своего вывода, и вы не хотите ждать, чтобы собрать все это, чтобы узнать, прежде чем начать отправлять его клиенту. Это может относиться к таким вещам, как обслуживание результатов медленных запросов к базе данных, но обычно это не относится к обслуживанию изображений.

Ненужное кодирование передачи по частям может быть вредным. Например, это означает, что клиенты не могут отображать индикаторы выполнения при загрузке файла. Видеть:

Заголовок Content-Length против фрагментированного кодирования
Стоит ли использовать Transfer-Encoding: chunked для статических файлов?
 12.05.2021 05:49
Вы можете использовать FileResponse, если это файл на диске с path:

import os

from fastapi import FastAPI 
from fastapi.responses import FileResponse

app = FastAPI()

path = "/path/to/files"

@app.get("/")
def index():
    return {"Hello": "World"}

@app.get("/vector_image", responses = {200: {"description": "A picture of a vector image.", "content" : {"image/jpeg" : {"example" : "No example available. Just imagine a picture of a vector image."}}}})
def image_endpoint():
    file_path = os.path.join(path, "files/vector_image.jpg")
    if os.path.exists(file_path):
        return FileResponse(file_path, media_type = "image/jpeg", filename = "vector_image_for_you.jpg")
    return {"error" : "File not found!"}
 10.10.2021 00:24
Мои потребности не были полностью удовлетворены из вышеперечисленного, потому что мой образ был создан с помощью PIL. Моя конечная точка fastapi принимает имя файла изображения, считывает его как изображение PIL и создает в памяти миниатюру jpeg, которую можно использовать в HTML, например:

<img src = "http://localhost:8000/images/thumbnail/bigimage.jpg">

import io
from PIL import Image
from fastapi.responses import StreamingResponse
@app.get('/images/thumbnail/{filename}',
  response_description = "Returns a thumbnail image from a larger image",
  response_class = "StreamingResponse",
  responses= {200: {"description": "an image", "content": {"image/jpeg": {}}}})
def thumbnail_image (filename: str):
  # read the high-res image file
  image = Image.open(filename)
  # create a thumbnail image
  image.thumbnail((100, 100))
  imgio = io.BytesIO()
  image.save(imgio, 'JPEG')
  imgio.seek(0)
  return StreamingResponse(content=imgio, media_type = "image/jpeg")


Существует ли передовая практика определения необязательных полей в моделях Pydantic?

PYTHON
Существует ли передовая практика определения необязательных полей в моделях Pydantic?
Я работаю с Pydantic для проверки данных в проекте Python и столкнулся с проблемой при указании необязательных полей в моем файле BaseModel.

from pydantic import BaseModel

class MyModel(BaseModel):
    author_id: int | None    # Case 1: throws error
    author_id: Optional[int] # Case 2: throws error
    author_id: int = None    # Case 3: works
Теперь, запрашивая конечную точку, которая принимает указанную выше модель в качестве тела JSON, я не предоставляю поле author_id в запросе.

Когда я использую author_id: int | None, я получаю сообщение об ошибке, сообщающее, что обязательное поле отсутствует. Однако, если я изменю его на author_id: Optional[int], я столкнусь с той же ошибкой. Но когда я использую author_id: int = None или author_id: Optional[int] = None, модель работает как положено, без ошибок. (Работает, если присутствует =)

Есть ли у вас какие-либо рекомендации о том, как правильно определять необязательные поля в моделях Pydantic? Существует ли конкретная версия Pydantic (или другой библиотеки), поддерживающая int | Нет синтаксиса правильно?

питон == 3.11
пидантик == 2.8.1
фастапи==0.111.1
 27.08.2024 20:17
1
1
51
2
Данный вопрос помечен как решенный
 Ответы 2
Я думаю, что случай 1 является каноническим решением, но вы еще не определили необязательное поле (поскольку вы не указали значение по умолчанию). Вы хотите:

from pydantic import BaseModel


class MyModel(BaseModel):
    author_id: int | None = None
С этим определением:

>>> MyModel()
MyModel(author_id=None)
>>> MyModel(author_id=1)
MyModel(author_id=1)
 27.08.2024 21:15
 Ответ принят как подходящий
Причина, по которой вы столкнулись с ошибкой, заключается в том, что не существует значения по умолчанию. Аннотации сами по себе ничего не делают.

Все приведенные ниже варианты работают и внутри практически эквивалентны. Третий вариант теперь рекомендуется для проектов, использующих только Python 3.10+.

from pydantic import BaseModel

class MyModel(BaseModel):
    author_id: Optional[int] = None # the original way
    author_id: Union[int, None] = None # another option
    author_id: int | None = None # more modern option (Python 3.10+)
Цитирование рекомендации третьего варианта по сравнению с остальными?

— 
Woodford
 27.08.2024 21:40
Он короче и доступен без дополнительного импорта из typing, но в остальном я не думаю, что он (настоятельно) рекомендуется по сравнению с двумя другими.

— 
chepner
 27.08.2024 21:49
docs.python.org/3.10/library/stdtypes.html#types-union по умолчанию используется новый синтаксис, PEP-604 описывает этот вариант как «упрощенный»
— 
TemaSaur
 27.08.2024 21:55
Я вижу, что стиль оператора объединения описан как эквивалент Optional, но не вижу рекомендаций в ту или иную сторону. Хороший ответ, но я бы заменил «рекомендуется» на «доступно».

— 
Woodford
 27.08.2024 22:47
Нашел! github.com/python/cpython/pull/30222

— 
TemaSaur
 27.08.2024 23:09


Вход FastAPI в маршруты в функциях Azure
Вопросы
AZURE FUNCTIONS
Вход FastAPI в маршруты в функциях Azure
Я заметил, что любой logging.info('stuff happened in a route') на маршруте не попадал в мой журнал Application Insights. Экземпляры logging.info('stuff happened in entrypoint') были. Я нашел этот небольшой совет, но решение немного расплывчатое и, похоже, специфичное для запуска uvicorn, и я не знаю, как применить его к Azure.

Для справки вот фрагменты моего __init__.py

import logging
import azure.functions as func
from fastapi import FastAPI
from .routes import route1

app = FastAPI()
app.include_router(route1.router)

@app.get("/api/test"):
def test():
    logging.info("entry test")
    return "test"

async def main(req: func.HttpRequest, context: func.Context) -> func.HttpResponse:
    return await func.AsgiMiddleware(app).handle_async(req, context)
Эти записи попадают в мои журналы

Тогда на маршруте 1 у меня есть

from fastapi import APIRouter
import logging

router=APIRouter(prefix = "/api/route1")

@router.get("/test")
def test():
    logging.info("resp route test")
    return "route test"
Сам маршрут работает, то есть, если я перейду к «api/route1/test», я получаю «тест маршрута ответа» в своем браузере, но затем, когда я проверяю журналы, у меня нет записи «тест маршрута».

Я попробовал добавить logging.config.dictConfig({"disable_existing_loggers": False, "version": 1}) в начало файла Route1.py, но это не помогло.

 26.06.2024 14:36
0
0
104
2
Данный вопрос помечен как решенный
 Ответы 2
Я внес несколько изменений в ваш код, чтобы получить журнал, а также вывод браузера.

__init__.py

import logging
import azure.functions as func
from fastapi import FastAPI
from .route import route1

app = FastAPI()
app.include_router(route1.router)

@app.get("/api/test")
async def test():
    logging.info('stuff happened in entrypoint')
    logging.info('entry test')
    return "test"

async def main(req: func.HttpRequest, context: func.Context) -> func.HttpResponse:
    logging.info('Received request from main')
    return await func.AsgiMiddleware(app).handle_async(req, context)
route1.py

from fastapi import APIRouter
import logging

router=APIRouter(prefix = "/api/route1")

@router.get("/test")
async def test():
    logging.info('stuff happened in a route')
    logging.info('resp route test')
    return "route test"
Я могу получить ожидаемый ответ при переходе к /api/route1/test на местном уровне.


Затем я опубликовал его в функциональном приложении.


Ниже приведены результаты в приложении-функции и в аналитике приложения.

 28.06.2024 09:56
 Ответ принят как подходящий
Я только что решил эту проблему и обнаружил несколько особенностей входа в приложения Azure Function Apps/Application Insights.

Насколько я могу судить, единственный регистратор, который работает в Azure, — это корневой регистратор. Это logging.info() или logger = logging.getLogger(). print() утверждения не работают. Созданные логгеры (customer_logger = logging.getLogger(__name__)) не работают.
Я добавил специальную конфигурацию в корневой регистратор, и это сломало его в Azure. (Я не уверен, какая именно часть сломала его... я думаю, это какая-то конфигурация обработки потока. Кроме того, logging.config.dictConfig(logging_config) выдал исключение при локальном запуске с использованием func host start.)
По умолчанию логи созданных тредов не работают.
@Дин, это объясняет поведение, которое ты видел, где logging.info('stuff happened in entrypoint') сработало, но logging.info('stuff happened in route').
Общие сведения о том, как FastAPI обрабатывает запросы: асинхронные конечные точки (async def function_name) запускать в основном потоке в цикле событий. Синхронные конечные точки (def function_name) получают каждый свой собственный нить. Таким образом, если ваш API получает 5 запросов одновременно, они не блокируют друг друга.
@Дин, твои синхронные конечные точки не регистрировались, потому что они выполнялись из созданных потоков. Ведение журнала с асинхронных конечных точек должно работать по умолчанию (согласно ответу @Ikhtesam выше), но будьте осторожны, потому что, если ваши асинхронные конечные точки содержат, например. синхронные вызовы базы данных, они заблокируют основной поток, и вы потеряете все преимущества параллельной работы, которые FastAPI предоставляет «из коробки».
Приложения-функции должны каким-то образом использовать модуль журналирования, поскольку для регистрации из созданного потока вам необходимо связать этот поток обратно с родительским потоком invocation_id (концепция Azure). Существует объект, который Azure передает с каждым запросом, который называется «контекст». «Контекст» содержит атрибут thread_local_storage. thread_local_storage имеет атрибут invocation_id, и вам нужно установить его из созданного потока. Каким-то образом, как только это установлено, журналы работают.
Здесь есть общий пример , который не выглядит слишком знакомым, если вы используете FastAPI...
Чтобы исправить это, вам нужно сначала передать 1) объект Azure контекста и 2) родительский поток invocation_id до вашей конечной точки, а затем из созданного потока/конечной точки вам нужно установить thread_local_storage.invocation_id в родительский invocation_id .

1. Подготовьте конечную точку для получения контекста
Для каждой конечной точки существует неявный параметр, называемый request. Если вы просто определите его как параметр, вы можете использовать его в своей конечной точке и проверять в отладчике.

from fastapi import Request

@app.get("/api/test")
def hello_world(request: Request):
    logging.info("hello world!") # remember print() doesn't work
Внутри этого объекта request есть словарь scope.

2а. AsgiFunctionApp / AsgiMiddleware
Если вы используете azure.functions.AsgiFunctionApp или azure.function.AsgiMiddleware (определенной версии, не совсем точно, но, я думаю, более поздней, чем 1.8), контекст thread_local_storage и родительский поток invocation_id фактически включены в область действия для вас.

В этом случае вы должны сделать следующее в своей синхронной конечной точке (помните, что нет необходимости делать это в конечной точке async):

from fastapi import Request

@app.get("/api/test")
def hello_world(request: Request):
    thread_local_storage = request.scope.get("azure_functions.thread_local_storage")
    if thread_local_storage is not None:
        parent_invocation_id = request.scope.get("azure_functions.invocation_id")
        thread_local_storage.invocation_id = parent_invocation_id
    logging.info("hello world!") # remember print() doesn't work
2б. Пользовательское промежуточное программное обеспечение
Если вы используете собственное промежуточное программное обеспечение, как в этом примере здесь, вам нужно будет добавить родительский элемент invocation_id и контекст (или объект thread_local_storage) в область видимости.

Что-то вроде этого:

Затем вы должны установить его в своей конечной точке следующим образом:

from fastapi import Request

@app.get("/api/test")
def hello_world(request: Request):
    context_obj = request.scope.get("azure_context", {}).get("context_obj")
    if context_obj and hasattr(context_obj, "thread_local_storage"):
        invocation_id = request.scope.get("azure_context", {}).get("invocation_id")
        if invocation_id:
            context_obj.thread_local_storage.invocation_id = request.scope.get("azure_context", {}
            ).get("invocation_id")
    logging.info("hello world!") # remember print() doesn't work
3. (Необязательно) Функция оболочки
Раздражает включать этот код в начало всех ваших функций, поэтому вы можете создать для него функцию-обертку (х/т Евгений Николаев)

from fastapi import Request
from functools import wraps

def logging_context_wrapper(func):
    """Passes invocation_id to the thread local context to enable proper Azure Functions logging.

    Can be applied to a sync handler which has request: Request parameter - to get the context from.
    """

    request_param = next(
        (param for (param, annotation) in func.__annotations__.items() if annotation is Request),
        None,
    )
    if not request_param:
        raise Exception("Function must have a request parameter of type Request.")

    @wraps(func)
    def wrapper(*args, **kwargs):
        request = kwargs[request_param]
        # if you were 2b from above, sub whatever code you used
        thread_local_storage = request.scope.get("azure_functions.thread_local_storage")
        if thread_local_storage is not None:
            thread_local_storage.invocation_id = request.scope.get("azure_functions.invocation_id")
        return func(*args, **kwargs)

    return wrapper



@app.get("/api/test")
@logging_context_wrapper
def hello_world(request: Request):
    logging.info("hello world!") # remember print() doesn't work
Краткое содержание
Не используйте print(), просто logging.info(), logging.warning() и т. д.
Не добавляйте конфигурацию в logging, по крайней мере, пока она не заработает.
Ведение журнала с синхронных конечных точек (def foo, а не async def foo) по умолчанию не работает, поскольку синхронные конечные точки выполняются в отдельных потоках.
Для входа в систему с синхронных конечных точек вам необходимо установить контекст thread_local_storage.invocation_id в созданном потоке/конечной точке на контекст invocation_id родительского потока.
Вещи, которые я хотел бы, чтобы кто-то объяснил
Как работает ведение журнала Azure и почему не работают операторы print() или созданные средства ведения журнала?
Как управляется пул потоков в приложениях-функциях? Я могу установить переменную среды под названием PYTHON_THREADPOOL_THREAD_COUNT. Определяет ли это, сколько потоков FastAPI ему доступно?

Как изменить pydantic список объектов в список строк?
Вопросы
PYTHON
Как изменить pydantic список объектов в список строк?
Я использую SQLModel для API.

Я хочу, чтобы объект был таким:

class Post(SQLModel):
    id: int
    categories: list[str]  # category.name
вместо вложенных объектов:

class Post(SQLModel):
    id: int
    categories: list[Category]
Нужно ли менять функцию сериализации или есть способ сделать это автоматически?

 10.06.2024 21:56
2
0
94
2
Данный вопрос помечен как решенный
 Ответы 2
 Ответ принят как подходящий
Насколько я понял Post это ваша модель БД. Я настоятельно рекомендую отделить вашу модель db (должна отражать структуру базы данных) от dto (следует использовать для удобной передачи данных между компонентами приложения)

class PostDTO(pydantic.BaseModel):
    id: int
    categories: list[str]

    @classmethod
    def from_db_model(cls, model: Post) -> "PostDTO":
        """Build Post DTO based on db model."""

        return cls(
            id=model.id,
            categories=[category.name for category in model.categories]
        )
   
post = Post(...)
post_dto = PostDTO.from_db_model(model=post)

Не бойтесь создавать дополнительный объект, если это сделает ваш код более масштабируемым, читабельным и логичным!

 11.06.2024 00:23
Не существует автоматического способа извлечения свойства из входящего объекта, подлежащего проверке. Вам нужно будет использовать field_validator, чтобы сделать это «автоматически»:

class Post(SQLModel):
    id: int
    categories: list[str]

    @field_validator("categories")
    @classmethod
    def normalize_categories(cls, value, info):
        return [item.name for item in value]

Функции подмодуля маршрутизации с использованием APIRouter FastAPI

PYTHON
Функции подмодуля маршрутизации с использованием APIRouter FastAPI
У меня в main.py есть следующее:

from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse
from fastapi.middleware.gzip import GZipMiddleware
from fastapi.templating import Jinja2Templates
from fastapi.staticfiles import StaticFiles
from my_app.web.views import default

app = FastAPI()
app.add_middleware(GZipMiddleware, minimum_size=500)
app.include_router(default.router)
#app.include_router(data_mgr_view.router)

app.mount("/static", StaticFiles(directory = "static"), name = "static")
app.mount("/templates", Jinja2Templates(directory = "templates"), name = "templates")


@app.get('/test')
async def test():
    return "test successful"
Это работает нормально. Я могу нажать на URL-адрес localhost:5000/test, и он вернет ожидаемую строку. Теперь у меня есть файл default.py, обработчики которого я хочу основывать на корневом каталоге:

import sys, traceback
import pandas as pd
from fastapi import APIRouter, Request, Query
from my_app.web.models.response_data import ResponseData
from my_app.data.providers.internals_provider import MktInternalsProvider
from my_app.config import tmplts

router = APIRouter(prefix = "")

@router.route('/')
async def root(request: Request):
    context = {"title":"Playground", "content":f"Place for my charts, studies, etc..."}
    return tmplts.TemplateResponse(request=request, name = "index.html", context=context)

@router.route('/test2')
async def test2():
    return "test2 success"
Первый метод работает нормально, когда я нажимаю localhost:5000/. Второй метод выдает исключение, когда я нажимаю localhost:5000/test2:

Traceback (most recent call last):
  File "/usr/local/lib/python3.11/site-packages/uvicorn/protocols/http/httptools_impl.py", line 411, in run_asgi
    result = await app(  # type: ignore[func-returns-value]
             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/usr/local/lib/python3.11/site-packages/uvicorn/middleware/proxy_headers.py", line 69, in __call__
    return await self.app(scope, receive, send)
           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/usr/local/lib/python3.11/site-packages/fastapi/applications.py", line 1054, in __call__
    await super().__call__(scope, receive, send)
  File "/usr/local/lib/python3.11/site-packages/starlette/applications.py", line 123, in __call__
    await self.middleware_stack(scope, receive, send)
  File "/usr/local/lib/python3.11/site-packages/starlette/middleware/errors.py", line 186, in __call__
    raise exc
  File "/usr/local/lib/python3.11/site-packages/starlette/middleware/errors.py", line 164, in __call__
    await self.app(scope, receive, _send)
  File "/usr/local/lib/python3.11/site-packages/starlette/middleware/gzip.py", line 24, in __call__
    await responder(scope, receive, send)
  File "/usr/local/lib/python3.11/site-packages/starlette/middleware/gzip.py", line 44, in __call__
    await self.app(scope, receive, self.send_with_gzip)
  File "/usr/local/lib/python3.11/site-packages/starlette/middleware/exceptions.py", line 65, in __call__
    await wrap_app_handling_exceptions(self.app, conn)(scope, receive, send)
  File "/usr/local/lib/python3.11/site-packages/starlette/_exception_handler.py", line 64, in wrapped_app
    raise exc
  File "/usr/local/lib/python3.11/site-packages/starlette/_exception_handler.py", line 53, in wrapped_app
    await app(scope, receive, sender)
  File "/usr/local/lib/python3.11/site-packages/starlette/routing.py", line 756, in __call__
    await self.middleware_stack(scope, receive, send)
  File "/usr/local/lib/python3.11/site-packages/starlette/routing.py", line 776, in app
    await route.handle(scope, receive, send)
  File "/usr/local/lib/python3.11/site-packages/starlette/routing.py", line 297, in handle
    await self.app(scope, receive, send)
  File "/usr/local/lib/python3.11/site-packages/starlette/routing.py", line 77, in app
    await wrap_app_handling_exceptions(app, request)(scope, receive, send)
  File "/usr/local/lib/python3.11/site-packages/starlette/_exception_handler.py", line 64, in wrapped_app
    raise exc
  File "/usr/local/lib/python3.11/site-packages/starlette/_exception_handler.py", line 53, in wrapped_app
    await app(scope, receive, sender)
  File "/usr/local/lib/python3.11/site-packages/starlette/routing.py", line 72, in app
    response = await func(request)
                     ^^^^^^^^^^^^^
TypeError: test2() takes 0 positional arguments but 1 was given
 10.05.2024 21:24
1
1
122
2
Данный вопрос помечен как решенный
 Ответы 2
это будет работать: Укажите метод с маршрутизатором, например get или post.

@router.get('/test2')
async def test2():
    return "test2 success"
 11.05.2024 10:08
 Ответ принят как подходящий
При использовании APIRouter (см. также документацию по классу APIRouter ) вам не следует использовать декоратор/метод route (который, кстати, кажется устаревшим в исходном коде Starlette, и его использование не рекомендуется).

Вместо этого вам следует использовать декоратор api_route. Пример:

from fastapi import FastAPI
from fastapi import APIRouter

router = APIRouter()

@router.api_route('/')
async def root():
    return {"op": "root"}

    
app = FastAPI()
app.include_router(router)
Метод HTTP по умолчанию, разрешенный для этого декоратора, — GET, но вы можете настроить его по своему желанию, используя параметр methods в декораторе. Пример:

@router.api_route('/', methods=["GET", "POST"])
В качестве альтернативы вы можете просто использовать декораторы @router.get, @router.post и т. д., как обычно. Пример:

@router.get('/')
@router.post('/')
Я настоятельно рекомендую взглянуть на этот ответ , этот ответ , а также этот ответ и этот ответ, которые связаны с предметом и должны оказаться полезными.

это сработало. я следил за тем, что считал последними документами. Спасибо большое!

— 
mike01010
 11.05.2024 19:22


Есть ли способ FastAPI для глобального доступа к текущим данным запроса?
Вопросы
FASTAPI
Есть ли способ FastAPI для глобального доступа к текущим данным запроса?
В рамках FastAPI:

Хотя данные запроса, безусловно, могут передаваться в качестве аргумента, я хотел бы знать, может ли функция получить доступ к информации о текущем запросе без передачи аргумента.

Отказ от ответственности: я не считаю глобальный доступ к данным запроса хорошей практикой, и все же у меня есть вариант использования, в котором было бы очень хорошо иметь возможность это сделать.

 25.07.2019 16:34
13
0
13 082
4
Данный вопрос помечен как решенный
 Ответы 4
Обычно я делаю это, используя очередь сообщений в стиле производитель-потребитель. У меня есть пример репо, показывающий, как я использую глобальную очередь для отправки данных из почтового запроса в WebSocket, который передает это клиентам.

Хотя это может быть не ваш конкретный вариант использования, вы должны быть в состоянии адаптировать его в соответствии с вашими потребностями.

Суть этого — класс Notifier, который помещает данные в очередь:

async def push(self, msg: str):
    await self.channel.default_exchange.publish(
        Message(msg.encode("ascii")),
        routing_key=self.queue_name,
    )
А на стороне потребителя у меня есть функция _notify, которая получает сообщения из очереди и отправляет их через WebSocket:

async def _notify(self, message: IncomingMessage):
    living_connections = []
    while len(self.connections) > 0:
        websocket = self.connections.pop()
        await websocket.send_text(f"{message.body}")
        living_connections.append(websocket)
    self.connections = living_connections
 19.10.2019 17:35
Вы можете получить/установить произвольные атрибуты request.state от Starlette.

https://www.starlette.io/requests/#other-state

Пожалуйста, обратитесь к приведенной ниже проблеме для подробного объяснения и реализации:

https://github.com/tiangolo/fastapi/issues/633

 06.12.2019 07:23
вы можете использовать звездочку Запрос

Например:

from starlette.requests import Request
from fastapi import FastApi

app = FastApi()
@app.get('/')
def get(request:Request):
    requests_header = request.headers
    return "Hi"
 07.03.2020 18:23
 Ответ принят как подходящий
Предоставленное решение здесь определяет диспетчер контекста, к которому вы можете получить глобальный доступ. Для каждого запроса вы извлекаете соответствующую информацию (например, заголовки) и передаете ее диспетчеру контекста.

Так как fastapi собран с Старлетт, вы можете использовать библиотеку звездочка-контекст. Он создает объект context, который вы можете использовать, не передавая его в качестве аргумента. Основное предостережение заключается в том, что вам все равно нужно передать объект запроса на все ваши маршруты.

Обновлено: В starlette-context==0.3.0 добавлено новое промежуточное ПО. Команда Starlette начала препятствовать (здесь) использованию их BaseHTTPMiddleware, в частности, для конечных точек StreamingResponse/FileResponse. Возможно, вы захотите использовать RawContextMiddleware, который также не требует объекта запроса, но является экспериментальным, поскольку в Starlette нет документации для написания пользовательского промежуточного программного обеспечения без интерфейса. Но, похоже, это работает.

Пример кода из этой библиотеки для иллюстрации:

import uvicorn
from fastapi import FastAPI
from starlette.requests import Request
from starlette.responses import JSONResponse
from starlette.middleware import Middleware

from starlette_context import context, plugins
from starlette_context.middleware import ContextMiddleware

middleware = [
    Middleware(
        ContextMiddleware,
        plugins=(
            plugins.RequestIdPlugin(),
            plugins.CorrelationIdPlugin()
        )
    )
]

app = FastAPI(debug=True, middleware=middleware)


@app.route('/')
async def index(request: Request):  # This argument is still needed here
    return JSONResponse(context.data)  # Your context data


uvicorn.run(app, host = "0.0.0.0")
Эй, я написал звездочка-контекст! Если у вас есть вопросы, не стесняйтесь открыть тикет на GH.

— 
Tom Wojcik
 28.09.2020 21:47
Привет, @TomWojcik, у меня проблема с starlette_context: я работаю над приложением FastAPI, и мне пришлось добавить ваш пакет, потому что мне нужно получить некоторые данные через заголовок http и поместить что-то в контекст, чтобы использовать его позже. Приложение работает отлично, но у меня есть несколько тестов, которые не пройдены, потому что «вы не использовали ContextMiddleware или пытаетесь получить доступ к объекту контекста вне цикла запрос-ответ». Теперь я использую ту же фабрику для создания объекта приложения со всеми правильными промежуточными программами, а тестовый вызов содержит заголовок, который мне нужно протестировать. Я не понимаю, почему возникает ошибка

— 
Bruno Ripa
 01.04.2021 15:33
Привет, @bruno-ripa, пожалуйста, создайте тикет на GH, но, скорее всего, это связано с неправильным порядком промежуточного программного обеспечения.

— 
Tom Wojcik
 02.04.2021 09:54


FastAPI через Docker не работает
Вопросы
PYTHON
FastAPI через Docker не работает
У меня есть следующие два файла, но я не могу заставить сервер FastAPI работать через Docker.

Я использую команду docker build -t my_project . для его сборки и docker run -it -p 8080:8080 my_project для запуска сервера. Наконец, я использую следующую команду Curl для вызова API, но получаю следующую ошибку: curl: (56) Recv failure: Connection reset by peer.

curl -X POST "http://127.0.0.1:8080/predict/" -H "Content-Type: application/json" -d '{"image_sha": "example_sha"}'
Локальный запуск этого через Python работает отлично.

сервер.py

import base64
import io

from fastapi import FastAPI
from typing import Any
import uvicorn
from PIL import Image
import pydantic

class ImageModelInput(pydantic.BaseModel):
    image_sha: str
    
    def get_base64_encoded_image(self) -> str:
        return "dummy_base64_image"

    def decode_image(self) -> Image.Image:
        image_data = base64.b64decode(self.image_base64)
        return Image.open(io.BytesIO(image_data))
        
class ImageModelOutput(pydantic.BaseModel):
    attributes: list[str]

class ImageModel:
    def __init__(self, model: Any):
        self.model = model
        self.app = FastAPI()
        
        @self.app.post("/predict/", response_model=ImageModelOutput)
        async def predict(input: ImageModelInput):
            image = input.get_base64_encoded_image()
            prediction = self.model_predict(image)
            return ImageModelOutput(attributes=prediction)
        
        @self.app.get("/readyz")
        async def readyz():
            return {"status": "ready"}

    def model_predict(self, image: Image.Image) -> list[str]:
        # Replace this method with actual model prediction logic
        return ["dummy_attribute_1", "dummy_attribute_2"]

    def run(self, host: str = "127.0.0.1", port: int = 8080):
        uvicorn.run(self.app, host=host, port=port)

# Example usage
if __name__ == "__main__":
    # Replace with your actual model loading logic
    dummy_model = "Your_Model_Here"
    image_model = ImageModel(model=dummy_model)
    image_model.run()
Докерфайл:

FROM python:3.12.4-slim@sha256:2fba8e70a87bcc9f6edd20dda0a1d4adb32046d2acbca7361bc61da5a106a914

WORKDIR /app

RUN --mount=type=cache,target=/root/.cache/pip \
    pip install -U pip poetry wheel

RUN addgroup --system somebody && \
    adduser --system --home /app --ingroup somebody somebody && \
    chown -R somebody:somebody /app

USER somebody

COPY requirements.txt /app/requirements.txt
RUN pip install --no-cache-dir -r requirements.txt
COPY my_project /app/my_project

ENV PYTHONUNBUFFERED=1

EXPOSE 8080
CMD python3 cx_ai_lightbox/server.py
 24.06.2024 08:18
1
1
88
2
Данный вопрос помечен как решенный
 Ответы 2
Вам не хватает следующей части в вашем файле докеров

# (change flask to what you use)
#     |||||
#     |||||             add this part
#     |||||          ~~~~~~~~  ~~~~~~~~~  
CMD ["flask", "run", "--host", "0.0.0.0"]
Без этого сопоставление IP-адресов не будет работать корректно. Вам также придется настроить часть host, так как в настоящее время она жестко запрограммирована в вашем файле Python.

 24.06.2024 08:38
 Ответ принят как подходящий
Передача 127.0.0.1 в качестве хоста uvicorn делает его доступным только внутри контейнера.

Вместо этого просто замените его на 0.0.0.0. Теперь вы можете получить доступ к своей конечной точке по адресу http://127.0.0.1:8080/predict/

curl http://127.0.0.1:8080
{"detail":"Not Found"}

Во время запуска uvicorn дочерний процесс умирает в кластере Kubernetes
Вопросы
PYTHON 3.X
Во время запуска uvicorn дочерний процесс умирает в кластере Kubernetes
Мы используем версию FastAPI 0.111.0 для нашего приложения. Запускаем сервер uvicron, как показано ниже, это работает на компьютере с Windows в нашей среде разработки/тестирования. Когда мы развертываем этот код в кластере Azure Kubernets, во время запуска дочерний процесс умирает.

  uvicorn.run(
                "main:app",
                host='0.0.0.0',
                port=8080,
                log_level = "DEBUG",
                workers=3
            )
Сообщение об ошибке:

INFO:     Uvicorn running on http://0.0.0.0:8080 (Press CTRL+C to quit)
INFO:     Started parent process [1]
INFO:     Waiting for child process [12]
INFO:     Child process [12] died
INFO:     Waiting for child process [13]
INFO:     Child process [13] died
INFO:     Waiting for child process [14]
INFO:     Child process [14] died
INFO:     Waiting for child process [13]
INFO:     Child process [13] died
INFO:     Waiting for child process [15]
Если мы удалим аргумент workers для вызова uvicron.run, приложение запустится в AKS. Я хотел бы понять, почему дочерний процесс умирает с аргументом workers.

Спасибо

 28.06.2024 03:58
1
1
246
3
Данный вопрос помечен как решенный
 Ответы 3
Предоставьте свой Dockerfile.

Попробуйте запустить образ на локальном компьютере с помощью Docker.
Проверьте ограничения ресурсов в k8s
Попробуйте запустить контейнер на миникубе или что-то в этом роде. Проверьте, ведет ли он себя так же
Попробуйте ограничить количество рабочих до 1, не удаляя строку полностью.
Не делитесь информацией, если выясните причину
 28.06.2024 06:27
То же самое. Откат на старую версию фастапи.

pip install fastapi[all]==0.110.3
редактировать: Не сработало.

редактировать 2: изменить рабочих с 4 на 2, сработало

редактировать 3: Произошло снова. Поменял рабочих с 2 на 1, сработало

 11.07.2024 10:39
 Ответ принят как подходящий
Кажется, это ошибка: https://github.com/encode/uvicorn/discussions/2372

Это будет исправлено в версии 0.30.2: https://github.com/encode/uvicorn/pull/2380

Я обновил uvicorn до 0.30.3, но проблемы остались.

— 
socrates
 22.07.2024 04:38


Как правильно использовать Regex в промежуточном программном обеспечении CORS для FastAPI?
Вопросы
PYTHON
Как правильно использовать Regex в промежуточном программном обеспечении CORS для FastAPI?
У меня есть приложение, которое использует бэкэнд FastAPI и интерфейс Next.js. В разработке и производстве со стабильным источником я могу без проблем использовать CORSMiddleware. Тем не менее, я развернул внешний интерфейс Next.js с помощью Vercel и хочу воспользоваться преимуществами автоматического развертывания предварительного просмотра, которое Vercel делает с каждым коммитом git, чтобы обеспечить качественное тестирование промежуточного типа и проверки работоспособности.

Я сталкиваюсь с проблемами CORS в предварительных развертываниях: поскольку каждое предварительное развертывание использует автоматически сгенерированный URL-адрес шаблона: <project-name>-<unique-hash>-<scope-slug>.vercel.app, я не могу добавить их непосредственно в аргумент allow_origins CORSMiddleware. Вместо этого я пытаюсь добавить шаблон в аргумент allow_origin_regex.

Я очень новичок в регулярных выражениях, но смог выяснить шаблон, который я протестировал для работы в REPL. Однако, поскольку у меня возникли проблемы, я переключился на использование сверхразрешающего регулярного выражения '.*', чтобы заставить что-нибудь работать, но это также не помогло.

main.py (соответствующие части)

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [
    "http://localhost",
    "http://localhost:8080",
    "http://localhost:3000",
    "https://my-project-name.vercel.app"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_origin_regex = ".*",
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
Я просмотрел файл FastAPI/Starlette cors.py, чтобы увидеть, как он принимает и использует исходное регулярное выражение, и не вижу, в чем может быть проблема. Я проверил те же методы в REPL без проблем. Я в недоумении относительно следующего пути расследования, чтобы решить эту проблему. Любая помощь, указатели или комментарии типа "эй, чувак, ты забыл об этом" приветствуются.

 22.10.2022 13:52
1
0
246
3
Данный вопрос помечен как решенный
 Ответы 3
 Ответ принят как подходящий
Всякий раз, когда создается новое развертывание, Vercel автоматически генерирует уникальный общедоступный URL-адрес, который состоит из следующих частей:

<project-name>-<unique-hash>-<scope-slug>.vercel.app
Чтобы разрешить запросы из любого развертывания Vercel, используйте:

allow_origin_regex='https://.*\.vercel\.app'
Чтобы разрешить запросы от определенного проекта Vercel, используйте:

allow_origin_regex='https://<project-name>-.*\.vercel\.app'
например:

allow_origin_regex = 'https://my-site-.*\.vercel\.app'
Пример ниже основан на том, как FastAPI/Starlette CORSMiddleware работает внутри (см. реализацию здесь). Пример показывает, что с помощью приведенного выше регулярного выражения найдено совпадение для источника, такого как https://my-site-xadvghg2z-acme.vercel.app.

import re

origin = 'https://my-site-xadvghg2z-acme.vercel.app'
allow_origin_regex = 'https://my-site-.*\.vercel\.app'
compiled_allow_origin_regex = re.compile(allow_origin_regex)

if (compiled_allow_origin_regex is not None
        and compiled_allow_origin_regex.fullmatch(origin)):
    print('Math found')
else:
    print('No match found')

Обязательно укажите правильный протокол (например, http, https) и порт (80, 8000, 3000) в allow_origin_regex.

 22.10.2022 14:52
Я не решаюсь признать, насколько глупым был ответ на этот вопрос, когда я осознал свою ошибку, но хотел быть интеллектуально честным и предоставить обновление на тот случай, если у кого-то еще есть аналогичный бланк и он столкнется с этим в будущем.

Я новичок во внешнем интерфейсе и разработке в целом по большей части и никогда раньше не имел дело с CORS. Я был так озабочен запуском предварительных развертываний во внешнем интерфейсе и проверкой автоматически созданных предварительных развертываний на Vercel, что забыл, где я на самом деле вносил изменения. У меня есть интерфейс и серверная часть моего проекта в виде подкаталогов в одном и том же репозитории, поэтому каждое нажатие git на серверный код вызывает автоматическое развертывание Vercel, и я просто отключил, чтобы это не вызывало обновление фактического кода FastAPI.

Как только я понял и внес изменения в свой бэкенд, все заработало как надо.

Я отметил другой ответ как правильный, потому что он был на 100% правильным при ответе на вопрос, который я задал, но предоставил его, поскольку это ответ на проблему, в которой я допустил настоящую ошибку.

 23.10.2022 15:00
Этот ответ сработал для меня. Но проблема с этим ответом заключается в том, что FASTAPI примет любой ответный запрос от любого развертывания Vercel. Если вы хотите, чтобы FASTAPI разрешал только запросы из вашей учетной записи Vercel, вы можете изменить переменную allow_origin_regex на,

allow_origin_regex = 'https://<YOUR_VERCEL-PROJECT-NAME>-*\.vercel\.app'
 08.01.202


Как присвоить индексный идентификатор моему загруженному файлу JSON в FastAPI?
Вопросы
PYTHON
Как присвоить индексный идентификатор моему загруженному файлу JSON в FastAPI?
[
  {
    "B4": 14,
    "B5": 12
  },
  {
    "B4": 58,
    "B5": 54
  },
  {
    "B4": 26,
    "B5": 65
  }
]
Я хочу создать идентификатор индекса в загруженном файле JSON. Файл JSON выглядит так, как на изображении. Я хочу, чтобы это было следующим образом:

[
  1: {
       "B4": 14,
       "B5": 12
     },
  2: {
       "B4": 58,
       "B5": 54
     },
  3: {
       "B4": 26,
       "B5": 65
     }
]
Нужно просто выполнить некоторые вычисления для каждого набора и отобразить результаты.

 31.03.2024 12:59
0
1
77
2
Данный вопрос помечен как решенный
 Ответы 2
 Ответ принят как подходящий
Импортируйте файл JSON, извлеките каждый элемент и добавьте его в словарь, указав его ключ в качестве индекса. Преобразуйте словарь в объект JSON и запишите его в файл JSON. Вот пример кода ниже:

import json
f = open('data.json')
data = json.load(f)
updated_data = dict()
for index, item in enumerate(data, start=1):
    updated_data[index] = item
json_object = json.dumps(updated_data)
with open("updated_data.json", "w") as outfile:
    outfile.write(json_object)
Выход:

{"1": {"B4": 14, "B5": 12}, "2": {"B4": 58, "B5": 54}, "3": {"B4": 26, "B5": 65}}
 31.03.2024 14:22
Список, который вы предоставили в качестве выходных данных, недействителен, поскольку список не может быть парой «ключ-значение». Вы имели в виду это - диктат диктов?

{
  1: {
       "B4": 14,
       "B5": 12
     },
  2: {
       "B4": 58,
       "B5": 54
     },
}
Чтобы получить это -

import json
with open("file/path.json") as file:
    data = json.load(file)  # Output a list of dict
    dict_with_index = dict(zip(range(1,len(data) + 1), data))


Как отключить приложение/json в автодокументах Swagger UI приложения FastAPI?
Вопросы
PYTHON
Как отключить приложение/json в автодокументах Swagger UI приложения FastAPI?
Мой API может возвращать только файл:

    @router.get(
        "/partners/{partner_id}/rsr-requests/{rsr_request_id}/{document_path}",
        responses = {200: {"content": {"application/octet-stream": {}}, "description": "Файл"}}
    )
    async def download_rsr_document(...):
        pass
Но в пользовательском интерфейсе Swagger я вижу, что application/json все еще остается. Как отключить его?

 01.04.2024 10:53
1
0
100
2
Данный вопрос помечен как решенный
 Ответы 2
 Ответ принят как подходящий
В документации вы используете параметр response_class с нужным типом Response.

    from fastapi import FastAPI
    from fastapi.responses import FileResponse
    
    some_file_path = "large-video-file.mp4"
    app = FastAPI()
    
    
    @app.get("/", response_class=FileResponse)
    async def main():
        return some_file_path
 01.04.2024 11:10
Поскольку ваш API может возвращать только файл, вы можете затем изменить класс ответа по умолчанию — application/json — в FastAPI, как описано в этом ответе (также см. соответствующую документацию).

Пример
from fastapi import FastAPI
from fastapi.responses import FileResponse

some_file_path = "some-file.txt"
app = FastAPI(default_response_class=FileResponse)


@app.get("/")
async def main():
    return some_file_path
    #return FileResponse(some_file_path)  # should work as well
Если вам нужно было сделать это только для определенных конечных точек в вашем API, вы можете использовать параметр response_class в декораторе вашей конечной точки, как показано ниже:

@app.get("/", response_class=FileResponse)
async def main():
    return some_file_path
    #return FileResponse(some_file_path)  # should work as well


Как создавать маршруты с помощью FastAPI внутри класса и classy-fastapi — продолжение
Вопросы
PYTHON
Как создавать маршруты с помощью FastAPI внутри класса и classy-fastapi — продолжение
Я уже некоторое время использую classy_fastapi, но заметил, что маршруты не переносятся в подклассы? это ожидаемое поведение? то есть

class A(Routable):
 def __init__():
    super().__init__()

   @get('/user')
   def get_user():
      return "some user"
class B(A):
   def __init__():
    super().__init__()

  @get('/company')
  def get_company():
      return "company"
Экземпляр класса B не будет знать о маршруте «/user».

Есть идеи?

Ожидается, что маршруты доступны в экземплярах подкласса.

 11.04.2024 07:09
1
3
100
2
Данный вопрос помечен как решенный
 Ответы 2
 Ответ принят как подходящий
Вам придется наследовать метод(ы) от класса A, чтобы сделать маршруты доступными.

class B(A):
    def __init__(self):
        super().__init__()

    # Inheriting the route from parent
    get_user = A.get_user

    @get('/company')
    def get_company(self):
        return "company"
 11.04.2024 07:52
Маршруты не наследуются, поскольку текущая реализация Routable использует метакласс, который проверяет члены класса, вызывая метод values членов dict, который не включает в себя члены какого-либо родительского класса:

class RoutableMeta(type):
    def __new__(cls: Type[type], name: str, bases: Tuple[Type[Any]], attrs: Dict[str, Any]) -> 'RoutableMeta':
        endpoints: List[EndpointDefinition] = []
        for v in attrs.values(): # <- this does not include members of parents
            if inspect.isfunction(v) and hasattr(v, '_endpoint'):
                endpoints.append(v._endpoint)
        attrs['_endpoints'] = endpoints
        return cast(RoutableMeta, type.__new__(cls, name, bases, attrs))
Вы можете сделать маршруты наследуемыми, переопределив Routable самостоятельно с помощью __init_subclass__ метода, который инициализирует подкласс после его создания, чтобы внутри метода он мог использовать dir(cls) для получения членов как подкласса, так и его базовых классов:

import inspect
from functools import partial
from classy_fastapi import Routable

class Routable:
    def __init_subclass__(cls):
        cls._endpoints = [
            obj._endpoint for obj in map(partial(getattr, cls), dir(cls))
            if inspect.isfunction(obj) and hasattr(obj, '_endpoint')
        ]

    __init__ = Routable.__init__
так что:

from fastapi import FastAPI
from fastapi.testclient import TestClient
from classy_fastapi import get

class A(Routable):
    @get('/user')
    def get_user(self):
        return "some user"

class B(A):
    pass
    
app = FastAPI()
app.include_router(B().router)
client = TestClient(app)
response = client.get('/user')
print(response.text)
выведет:

"some user"
Демо: https://replit.com/@blhsing1/StingyAthleticKeygens

Обратите внимание, что я также отправил мерж-реквест автору classy_fastapi, чтобы эту функцию можно было сделать официальной.


Как отобразить тело ошибки на внешнем интерфейсе с помощью axios
Вопросы
JAVASCRIPT
Как отобразить тело ошибки на внешнем интерфейсе с помощью axios
Моя конечная точка быстрого API находится здесь:

@app.post("/api/signup", status_code=status.HTTP_200_OK)
async def signup( credentials : signupcred ):
  try: 
   print(credentials.email,  credentials.password1, credentials.name )
   response = account.create(email= credentials.email, password= credentials.password1, name = credentials.name , user_id= ID.unique() )

   return {response}

  except Exception as e: 
         raise HTTPException(status_code= status.HTTP_403_FORBIDDEN)  # Return an appropriate error status code
во внешнем интерфейсе я хочу напечатать ответ после возникновения исключения, потому что ответ хорошо объясняет ошибку. Я не хочу отправлять пользователю код ошибки http.

мой интерфейс:

const handlesignup = async (e: any) => {
  e.preventDefault();
  setLoading((loading) => !loading);
  try {
    const signupresponse = await axios.post("/api/signup", {
      email: signupemail,
      password1: password1,
      name: name,
    }); // Send as query paramers );
    // const loginresponse = await axios.post('/api/login', {email, password} )// Send as query paramers );
    // setIsloggedin(()=> true)
    router.replace("/dashboard");
    setLoading((loading) => !loading);
  } catch (error) {
    alert(error);
  }
};
console.info не работает, потому что я использую nextjs с быстрым API-интерфейсом. Я просто хочу напечатать ответ от функции создания во внешнем интерфейсе, чтобы пользователи знали, почему произошла ошибка функции. На данный момент предупреждение показывает: AxiosError: Ошибка запроса с кодом состояния 403.

 14.04.2024 20:20
2
1
89
2
Данный вопрос помечен как решенный
 Ответы 2
Если я правильно понимаю, вы хотите использовать другой useState<AxiosError>(), поэтому в .catch(error) вы можете setError(error), а затем в возвращаемом компоненте вы можете отобразить его...

return (
    <div> 
        ...
        {error && error.response.data.message}
    </div>
);
Я не знаю точного пути к сообщению в AxiosError, но если вы используете Typescript, вы можете нажать F12 и просмотреть типы.

 15.04.2024 01:40
 Ответ принят как подходящий
См. Axios — Обработка ошибок

Вы можете получить доступ к телу ответа через error.response?.data.

Чтобы отобразить его в компоненте Next.js, вы обычно просто используете состояние React, например

const [error, setError] = useState<string>();

const handlesignup = async (e: any) => {
  e.preventDefault();
  setError("");
  setLoading(true);
  try {
    const signupresponse = await axios.post("/api/signup", {
      email: signupemail,
      password1: password1,
      name: name,
    }); // Send as query paramers );
    // const loginresponse = await axios.post('/api/login', {email, password} )// Send as query paramers );
    // setIsloggedin(()=> true)
    router.replace("/dashboard");
  } catch (error) {
    console.warn('Signup failed', error);
    setError(error.response?.data ?? error.message);
  } finally {
    setLoading(false);
  }
};

if (error) {
  return <p className = "error">{error}</p>;
}
Это сделало это, большое спасибо. Первоначальный словарь ошибок не показывал эту информацию, возможно, она была обрезана диалоговым окном предупреждения. Спасибо!

— 
C A OB1
 15.04.2024 17:29



Почему я получаю сообщение FastAPI value_error.missing?
Вопросы
PYTHON
Почему я получаю сообщение FastAPI value_error.missing?
Я создаю приложение FastAPI, которое принимает предложение и возвращает классификацию эмоций предложения на основе прогноза модели HuggingFace.

Вот мой код в файле model.py:

def changeDict(input):
   new_dict = {item['label']: item for item in input}
   return new_dict

def predict_pipeline(text):
   text = re.sub(r'[!@#$(),\n"%^*?\:;~`0-9]', " ", text)
   #text = re.sub(r"[[]]", " ", text)
   text = text.lower()
   prediction = changeDict(classifier(text)[0])
   #print(text)
   #print(prediction)
   return(prediction)
Вот код моего почтового маршрута в файле main.py:

app = FastAPI()

class textIn(BaseModel):
  sentence: str 

class PredictionOut(BaseModel):
  Emotion: dict

@app.get("/")
def home():
   return {"health check": "OKAY"}

@app.post("/predict/", response_model=PredictionOut)
async def predict(PayLoad: textIn):
   emotion = predict_pipeline(PayLoad.sentence)
   return {"emotion": emotion}
Когда я проверяю это, я получаю следующую ошибку. Может кто-нибудь помочь мне понять, почему?

pydantic.error_wrappers.ValidationError: 1 validation error for PredictionOut
response -> Emotion
 field required (type=value_error.missing)
 17.04.2024 05:18
1
0
71
2
Данный вопрос помечен как решенный
 Ответы 2
 Ответ принят как подходящий
Вашему классу PredictionOut требуется «Эмоция», но функция прогнозирования возвращает {»эмоцию»: эмоция}. Pydantic строго чувствителен к регистру. Пытаться:

@app.post("/predict/", response_model=PredictionOut)
async def predict(PayLoad: textIn):
   emotion = predict_pipeline(PayLoad.sentence)
   return {"Emotion": emotion}
 17.04.2024 10:36
Ваш response_model это PredictionOut. Тип возвращаемого значения должен быть таким же, как тот, который вы указали в response_model, или в словаре того же формата модели. Следовательно, вам нужно вернуть экземпляр Pydantic BaseModel, т. е. PredictionOut в данном случае.

Пример:

emotion = predict_pipeline(PayLoad.sentence)

# Convert the emotion dict to an instance of PredictionOut.
return PredictionOut(
    Emotion=emotion
)
или вы можете вернуть словарь в том же формате. то есть

emotion = predict_pipeline(PayLoad.sentence)

# Convert the emotion dict to an instance of PredictionOut.
return {"Emotion": emotion}
Разница здесь в том, что вы определили атрибут Emotion, но вернули emotion в ответе. Эти модели ответа чувствительны к регистру, поэтому они должны быть такими же, как то, что вы определили в исходной модели Pydantic.


Вызовы внешнего API работают при запуске кода как сценария, но получают ответ «500 Internal Server Error» при использовании FastAPI для запуска того же кода?
Вопросы
PYTHON
Вызовы внешнего API работают при запуске кода как сценария, но получают ответ «500 Internal Server Error» при использовании FastAPI для запуска того же кода?
У меня есть приложение для прогнозирования размера рыбы на изображении. Я создал конечную точку FastAPI --/predict/--, которая запускает многоэтапный процесс для получения такого прогноза. Эти шаги включают два вызова внешних API (не находящихся под моим контролем, поэтому я не вижу ничего, кроме того, что они возвращают).

Когда я запускаю свой код только из сценария, например, через IDE (я использую PyCharm), код для шагов прогнозирования выполняется правильно, и я получаю соответствующие ответы от обоих API.

Первый — это Roboflow, и вот пример результатов запуска скрипта (опять же, я просто вызываю это из командной строки или нажимаю «Выполнить» в Pycharm):

2024-03-30 10:59:36,073 - DEBUG - Starting new HTTPS connection (1): detect.roboflow.com:443
2024-03-30 10:59:36,339 - DEBUG - https://detect.roboflow.com:443 "POST /fish_measure/1?api_key=AY3KX4KMynZroEOyXUEb&disable_active_learning=False HTTP/1.1" 200 914
Второй — Fishial, и вот пример результата запуска скрипта (скрипта или через PyCharm), где он должен получить токен, URL-адрес и т. д.:

2024-03-30 11:02:31,866 - DEBUG - Starting new HTTPS connection (1): api-users.fishial.ai:443
2024-03-30 11:02:33,273 - DEBUG - https://api-users.fishial.ai:443 "POST /v1/auth/token HTTP/1.1" 200 174
2024-03-30 11:02:33,273 - INFO - Access token: eyJhbGciOiJIUzI1NiJ9.eyJleHAiOjE3MTE4MTE1NTMsImtpZCI6ImIzZjNiYWZlMTg2NGNjYmM3ZmFkNmE5YSJ9.YtlaecKMyxjipBDS97xNV3hYKcF3jRpOxTAVnwrxOcE
2024-03-30 11:02:33,273 - INFO - Obtaining upload url...
2024-03-30 11:02:33,582 - DEBUG - Starting new HTTPS connection (1): api.fishial.ai:443
2024-03-30 11:02:33,828 - DEBUG - https://api.fishial.ai:443 "POST /v1/recognition/upload HTTP/1.1" 200 1120
2024-03-30 11:02:33,829 - INFO - Uploading picture to the cloud...
2024-03-30 11:02:33,852 - DEBUG - Starting new HTTPS connection (1): storage.googleapis.com:443
2024-03-30 11:02:34,179 - DEBUG - https://storage.googleapis.com:443 "PUT /backend-fishes-storage-prod/6r9p24qp4llhat8mliso8xacdxm5?GoogleAccessId=services-storage-client%40ecstatic-baton-230905.iam.gserviceaccount.com&Expires=1711811253&Signature=gCGPID7bLuw%2FzUfv%2FLrTRPeQA060CaXQEqITPvW%2FWZ5GHXYKDRNCxVrUJ7UmpHVa0m60gIMFwFSQhYqsDmP3SkjI7ZnJSIEj53zxtOpcL7o2VGv6ZUuoowWwzmzqeM9yfbCHGI3TmtuW0lMhqAyi6Pc0wYhj73P12QU28wF8sdQMblHQLQVd1kFXtPl5yjSW12ADt4WEvB7dbnl7HmUTcL8WFS2SnJ1zcLljIbXTlRWcqc88MIcklSLG69z%2FJcUSh%2BeNxRp%2Fzotv5GitJBq9pF%2BzRt25lCt%2BYHGViJ46uu4rQapZBfACxsE762a1ZcrvTasy97idKRaijLJKAtZBRQ%3D%3D HTTP/1.1" 200 0
2024-03-30 11:02:34,180 - INFO - Requesting fish recognition...
2024-03-30 11:02:34,182 - DEBUG - Starting new HTTPS connection (1): api.fishial.ai:443
2024-03-30 11:02:39,316 - DEBUG - https://api.fishial.ai:443 "GET /v1/recognition/image?q=eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMksyUEE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--d37fdc2d5c6d8943a59dbd11326bc8a651f9bd69 HTTP/1.1" 200 10195
Вот код конечной точки:

from fastapi import FastAPI, File, UploadFile, HTTPException, BackgroundTasks
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Union

class PredictionResult(BaseModel):
    prediction: Union[float, str]
    eyeball_estimate: Union[float, str]
    species: str
    elapsed_time: float


@app.post("/predict/", response_model=PredictionResult)
    async def predict_fish_length(file: UploadFile = File(...)):
        try:
            # capture the start of the process so we can track duration
            start_time = time.time()
            # Create a temporary file
            temp_file = tempfile.NamedTemporaryFile(delete=False)
            temp_file_path = temp_file.name
    
            with open(temp_file_path, "wb") as buffer:
                shutil.copyfileobj(file.file, buffer)
    
            temp_file.close()
    
            prediction = process_one_image(temp_file_path)
            
            end_time = time.time()  # Record the end time
            elapsed_time = end_time - start_time  # Calculate the elapsed time
    
            return PredictionResult(
                prediction=prediction["prediction"][0],
                eyeball_estimate=prediction["eye_ratio_len_est"][0],
                species=prediction["species"][0],
                elapsed_time=elapsed_time
            )
    
        except Exception as e:
            # Clean up the temp file in case of an error
            os.unlink(temp_file_path)
            raise HTTPException(status_code=500, detail=str(e)) from e
Я запускаю это через uvicorn, затем пытаюсь вызвать конечную точку через curl следующим образом:

curl -X POST http://127.0.0.1:8000/predict/ -F "file=@/path/to/image.jpg"
Вызовы API Roboflow работают нормально, но теперь я получаю такой ответ от API Fishial (второго):

2024-03-30 10:48:09,166 - DEBUG - Starting new HTTPS connection (1): api.fishial.ai:443
2024-03-30 10:48:10,558 - DEBUG - https://api.fishial.ai:443 "GET /v1/recognition/image?q=eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMWkyUEE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--36e68766cd891eb0e57610e8fb84b76e205b639e HTTP/1.1" 500 89
INFO:     127.0.0.1:49829 - "POST /predict/ HTTP/1.1" 500 Internal Server Error
Я не уверен, где искать или, возможно, что распечатать/записать, чтобы получить дополнительную информацию. Я даже не уверен, возникла ли ошибка на моей стороне или исходит от API, который я вызываю (хотя конец 500 89 строки GET в конце заставляет меня думать, что она исходит от API, который я вызываю).

Большое спасибо!

Обновлено: Был сделан запрос на дополнительный код. Функция обработки изображения — это всего лишь серия вызовов других функций. Поэтому я включил сюда только код, который использую для вызова второго (Fishial) API:

def recognize_fish(file_path, key_id=key_id, key_secret=key_secret, identify=False):
    if not os.path.isfile(file_path):
        err("Invalid picture file path.")

    for dep in DEPENDENCIES:
        try:
            __import__(dep)
        except ImportError:
            err(f"Unsatisfied dependency: {dep}")

    logging.info("Identifying picture metadata...")

    name = os.path.basename(file_path)
    mime = mimetypes.guess_type(file_path)[0]
    size = os.path.getsize(file_path)
    with open(file_path, "rb") as f:
        csum = base64.b64encode(hashlib.md5(f.read()).digest()).decode("utf-8")

    logging.info(f"\n  file name: {name}")
    logging.info(f"  MIME type: {mime}")
    logging.info(f"  byte size: {size}")
    logging.info(f"   checksum: {csum}\n")

    if identify:
        return

    if not key_id or not key_secret:
        err("Missing key ID or key secret.")

    logging.info("Obtaining auth token...")

    data = {
        "client_id": key_id,
        "client_secret": key_secret
    }

    response = requests.post("https://api-users.fishial.ai/v1/auth/token", json=data)
    auth_token = response.json()["access_token"]
    auth_header = f"Bearer {auth_token}"

    logging.info(f"Access token: {auth_token}")

    logging.info("Obtaining upload url...")

    data = {
        "blob": {
            "filename": name,
            "content_type": mime,
            "byte_size": size,
            "checksum": csum
        }
    }

    headers = {
        "Authorization": auth_header,
        "Content-Type": "application/json",
        "Accept": "application/json"
    }

    response = requests.post("https://api.fishial.ai/v1/recognition/upload", json=data, headers=headers)
    signed_id = response.json()["signed-id"]
    upload_url = response.json()["direct-upload"]["url"]
    content_disposition = response.json()["direct-upload"]["headers"]["Content-Disposition"]

    logging.info("Uploading picture to the cloud...")

    with open(file_path, "rb") as f:
        requests.put(upload_url, data=f, headers = {
            "Content-Disposition": content_disposition,
            "Content-MD5": csum,
            "Content-Type": ""
        })

    logging.info("Requesting fish recognition...")

    response = requests.get(f"https://api.fishial.ai/v1/recognition/image?q = {signed_id}",
                            headers = {"Authorization": auth_header})
    fish_count = len(response.json()["results"])

    logging.info(f"Fishial Recognition found {fish_count} fish(es) on the picture.")

    if fish_count == 0:
        return []

    species_names = []

    for i in range(fish_count):
        fish_data = extract_from_json(f"results[{i}]", response.json())

        if fish_data and "species" in fish_data:
            logging.info(f"Fish {i + 1} is:")

            for j in range(len(fish_data["species"])):
                species_data = fish_data["species"][j]
                if "fishangler-data" in species_data and "metaTitleName" in species_data["fishangler-data"]:
                    species_name = species_data["fishangler-data"]["metaTitleName"]
                    accuracy = species_data["accuracy"]

                    logging.info(f"  - {species_name} [accuracy {accuracy}]")
                    species_names.append(species_name)
                else:
                    logging.error("  - Species name not found in the response.")
        else:
            logging.error(f"\nFish {i + 1}: Species data not found in the response.")

    return species_names
P.S. Такое ощущение, что это затянулось. Если размещение такого большого количества кода на Pastebin более уместно, я буду рад его отредактировать.

 30.03.2024 16:16
0
5
105
2
Данный вопрос помечен как решенный
 Ответы 2
Сообщение об ошибке, полученное вами от Fishial API, указывает на внутреннюю ошибку сервера 500. Это говорит о том, что проблема может быть на стороне сервера (Fishial API), а не в вашем коде.

Просмотрите документацию Fishial API, чтобы убедиться, что вы используете правильную конечную точку и параметры.

Убедитесь, что вы передаете правильный ключ API (если требуется) в своем запросе.

 30.03.2024 20:39
 Ответ принят как подходящий
Мне удалось решить проблему, хотя я не уверен, что действительно понимаю проблему.

Решением проблемы было предоставить Fishial API «настоящий» или «постоянный» путь вместо temp file. Я отредактировал свою конечную точку так:

записать файл в обработанное место в проекте (папка uploads или другое место)
получить "постоянный" (вице-"временный") путь к файлу
отправьте этот путь к файлу в Fishial API.
Моя пересмотренная конечная точка приведена ниже, и она работает правильно:

@app.post("/predict/", response_model=PredictionResult)
async def predict_fish_length(file: UploadFile = File(...), get_species: bool = Query(False)):
    try:
        # capture the start of the process so we can track duration
        start_time = time.time()

        # Create the uploads folder if it doesn't exist
        uploads_folder = "uploads"
        os.makedirs(uploads_folder, exist_ok=True)

        # Generate a unique file name
        file_name = f"{int(time.time())}_{file.filename}"
        file_path = os.path.join(uploads_folder, file_name)

        # Save the uploaded file to the uploads folder
        with open(file_path, "wb") as buffer:
            content = await file.read()
            buffer.write(content)

        prediction = process_one_image(file_path, get_species=get_species)
        logging.debug(f"Prediction result: {prediction}")

        if not isinstance(prediction, dict):
            raise ValueError("Invalid prediction format. Expected a dictionary.")

        required_keys = ["ml_prediction", "eye_ratio_len_est"]
        if get_species:
            required_keys.append("species")

        for key in required_keys:
            if key not in prediction:
                raise KeyError(f"Missing required key '{key}' in the prediction dictionary.")

        end_time = time.time()  # Record the end time
        elapsed_time = end_time - start_time  # Calculate the elapsed time

        return PredictionResult(
            ml_prediction=prediction["ml_prediction"],
            eyeball_estimate=prediction["eye_ratio_len_est"],
            species=prediction.get("species", [None])[0],
            elapsed_time_seconds=elapsed_time,
            path=prediction["image_path"]
        )

    except Exception as e:
        error_message = f"An error occurred: {str(e)}"
        logging.error(error_message)
        raise HTTPException(status_code=500, detail=error_message) from e


Как отправить массив на бэкэнд с помощью React и FastAPI. Я продолжаю получать код ошибки 422
Вопросы
PYTHON
Как отправить массив на бэкэнд с помощью React и FastAPI. Я продолжаю получать код ошибки 422
Вот мой код React. Я анализирую CSV, который загружаю в fileData. Я просто пытаюсь распечатать данные в консоли в своем Backend. CSV, вероятно, содержит около 350 строк.

const [fileData, setFileData] = useState([])

const changeHandler = (event) => {
        Papa.parse(event.target.files[0], {
            header: true,
            skipEmptyLines: true,
            complete: function (results) {
                setFileData(results.data)
            },
          });
      };

async function postData() {
        try{
          console.info('File Data:', fileData)
          const response = await axios.post(`${API_KEY}/uploadPlayerMins`, fileData)
          console.info(response.data)
        }
        catch (error) {
          console.error(error)
        }
      }
Вот код Python.

class PlayerInfo(BaseModel):
    Mins: str
    Player: str

@router.post("/uploadPlayerMins")
async def create_upload_file(player: PlayerInfo):
    try:
        print(player)
        return JSONResponse(status_code=status.HTTP_200_OK, content=jsonable_encoder({ 'status': 'success',
                                'status_code': 200, 
                                  "message":  'Data has been uploaded successfully.'}))
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
 28.02.2024 19:51
0
0
56
2
Данный вопрос помечен как решенный
 Ответы 2
Похоже, ваш маршрут ожидает тип объекта PlayerInfo:

async def create_upload_file(player: PlayerInfo)

но вы пытаетесь отправить массив. Возможно, вы могли бы изменить тип ожидаемого значения. вместо PlayerInfo используйте dict

async def create_upload_file(player: Dict)

 28.02.2024 20:01
 Ответ принят как подходящий
Код ошибки 422 означает, что интерфейс тела, определенный в бэкэнде (python), отличается в теле, в котором бэкэнд получен из внешнего интерфейса (реагировать).

В вашем случае интерфейс тела в серверной части — PlayerInfo. Таким образом, тело запроса должно представлять собой такой словарь:

{
 'Mins': ' ',
 'Player': ' ',
}
Но ваш запрос на отправку интерфейса с телом представляет собой массив PlayerInfo.

Чтобы исправить ошибку 422, вы можете изменить свой код на Python.

async def create_upload_file(player: List[PlayerInfo]):
Надеюсь, это полезно.


Правильно ли FastAPI генерирует это Enum, и если да, то почему генератор openapi считает его недействительным?
Вопросы
SWAGGER
Правильно ли FastAPI генерирует это Enum, и если да, то почему генератор openapi считает его недействительным?
Я не совсем уверен, в чем заключается проблема, но FastAPI генерирует файл OpenAPI, который, как я считаю, верен, а openapi-generator-cli в последней версии считает, что файл OpenAPI недействителен. Сообщение об ошибке:

Exception in thread "main" org.openapitools.codegen.SpecValidationException: There were issues with the specification. The option can be disabled via validateSpec (Maven/Gradle) or --skip-validate-spec (CLI).
 | Error count: 1, Warning count: 2
Errors: 
        -attribute paths.'/units/{id}/charts/'(get).parameters.[group_mode].schemas.required is not of type `array`
Warnings: 
        -attribute paths.'/units/{id}/charts/'(get).parameters.[group_mode].schemas.required is not of type `array`

        at org.openapitools.codegen.config.CodegenConfigurator.toContext(CodegenConfigurator.java:701)
        at org.openapitools.codegen.config.CodegenConfigurator.toClientOptInput(CodegenConfigurator.java:728)
        at org.openapitools.codegen.cmd.Generate.execute(Generate.java:519)
        at org.openapitools.codegen.cmd.OpenApiGeneratorCommand.run(OpenApiGeneratorCommand.java:32)
        at org.openapitools.codegen.OpenAPIGenerator.main(OpenAPIGenerator.java:66)
Вот как выглядит параметр OpenAPI:

А вот как это выглядит в коде FastAPI:

group_mode: GroupMode = Query(
        default = "1d",
        description = "Group by a parameter. Options are Minute, Hour, Day, Week, Month, Year.",
        required=True,
    ),
Первый вопрос будет заключаться в том, в чем заключается проблема. Верен ли OpenAPI, а настройки генератора кода (клиент — typescript-axios, но я пробовал с другими, та же проблема) неверны? Или генератор кода действительно правильный, а сгенерированная FastAPI спецификация неверна? Или это проблема с кодировкой на моей стороне?

 23.02.2024 12:54
1
2
399
2
Данный вопрос помечен как решенный
 Ответы 2
required внутри схемы должен быть массив и должен указывать хотя бы одно из свойств, определенных в схеме. Судя по тому, что я понял из вашего примера, вы ожидаете URL-адрес типа /units/{id}/charts?group_mode=week, который правильно определен ниже.

openapi: 3.0.3
info:
  name: test
  version: '1.0.0'
paths:
  '/units/{id}/charts':
    get:
      description: blah
      parameters:
        - $ref: '#/components/parameters/group_mode'
        - $ref: '#/components/parameters/id'
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema: {}
components:
  schemas:
    GroupMode:
      schema:
        type: string
        enum:
          - Hour
          - Minute
          - Day
          - Week
          - Month
          - Year
  parameters:
    group_mode:
      in: query
      required: false
      schema:
       - $ref: '#/components/schemas/GroupMode'
      description: your description
    id:
      in: path
      required: true
      schema:
        type: string
 23.02.2024 20:32
 Ответ принят как подходящий
Ваше объявление параметра немного неверно. Это приводит к тому, что FastAPI генерирует недопустимое определение OpenAPI, что, в свою очередь, вызывает ошибки кодирования.

В FastAPI параметры запроса требуются по умолчанию, если только параметр не имеет значения NULL (например, string | None) или не имеет значения по умолчанию. Так что аннотация required=True вам не нужна.

Кроме того, обязательные параметры не могут иметь значения по умолчанию. Предоставление значения по умолчанию является подсказкой для FastAPI сделать этот параметр необязательным. Если вы хотите предоставить пример значения для целей документации, используйте вместо этого ключевое слово example.

Для получения дополнительной информации см. документацию FastAPI в разделе Обязательные параметры запроса.


Чтобы решить эту проблему, измените объявление параметра на:

group_mode: GroupMode = Query(
        example = "1d",
        description = "Group by a parameter. Options are Minute, Hour, Day, Week, Month, Year.",
    ),
Я считаю, что это известная ошибка в openapi-generator-cli, заключающаяся в том, что GroupMode (или любой Enum) не генерируется должным образом, верно?

— 
creyD
 26.02.2024 14:41
@creyD Не знаю, попробуйте поискать в их трекере проблем: github.com/OpenAPITools/openapi-generator/issues

— 
Helen
 26.02.2024 15:59



FastAPI TestClient переопределяет функцию срока службы
Вопросы
PYTHON
FastAPI TestClient переопределяет функцию срока службы
В более сложной настройке с использованием инфраструктуры инжектора зависимостей Python я использую функцию продолжительности жизни для объекта приложения FastAPI, чтобы правильно все связать.

При тестировании я хотел бы заменить некоторые объекты разными версиями (подделками), и естественным способом добиться этого мне кажется переопределение или издевательство над функцией продолжительности жизни объекта приложения. Однако я не могу понять, смогу ли/как я это сделать.

MRE следует

import pytest
from contextlib import asynccontextmanager
from fastapi.testclient import TestClient
from fastapi import FastAPI, Response, status


greeting = None

@asynccontextmanager
async def _lifespan(app: FastAPI):
    # Initialize dependency injection
    global greeting
    greeting = "Hello"
    yield


@asynccontextmanager
async def _lifespan_override(app: FastAPI):
    # Initialize dependency injection
    global greeting
    greeting = "Hi"
    yield


app = FastAPI(title = "Test", lifespan=_lifespan)


@app.get("/")
async def root():
    return Response(status_code=status.HTTP_200_OK, content=greeting)


@pytest.fixture
def fake_client():
    with TestClient(app) as client:
        yield client


def test_override(fake_client):
    response = fake_client.get("/")
    assert response.text == "Hi"
Итак, в основном в приспособлении fake_client я бы хотел изменить его, чтобы использовать _lifespan_override вместо исходного _lifespan, чтобы фиктивный тестовый пример выше прошел.

Я ожидал, что что-то вроде with TestClient(app, lifespan=_lifespan_override) as client: сработает, но это не поддерживается. Есть ли способ высмеять его, чтобы добиться желаемого поведения?

(Приведенный выше пример работает, если вы замените «Привет» на «Привет» в операторе утверждения)

pyproject.toml ниже с необходимыми зависимостями

[tool.poetry]
name = "mre"
version = "0.1.0"
description = "mre"
authors = []

[tool.poetry.dependencies]
python = "^3.10"
fastapi = "^0.103.2"

[tool.poetry.group.dev.dependencies]
pytest = "^7.1.2"
httpx = "^0.25.0"


[build-system]
requires = ["poetry-core"]
build-backend = "poetry.core.masonry.api"
Обновлено: Попробовал расширить свой код с помощью предложения Хамеда Ахавана ниже следующим образом.

@pytest.fixture
def fake_client():
    app.dependency_overrides[_lifespan] = _lifespan_override
    with TestClient(app) as client:
        yield client
но это не работает, хотя кажется, что это правильный подход. Проблема с синтаксисом?

 06.10.2023 17:14
0
1
72
2
Данный вопрос помечен как решенный
 Ответы 2
 Ответ принят как подходящий
Я нашел решение своей проблемы, которое не включало переопределение функции продолжительности жизни, поэтому не является общим решением моих вопросов выше.

Как я уже упоминал, моя конкретная проблема в реальном приложении заключалась в использовании инфраструктуры инжектора зависимостей Python, которая предоставляет и переопределяет метод для своих контейнеров. Таким образом, решением было использовать эту функцию переопределения при подключении зависимостей во время тестирования, что означает, что функцию продолжительности жизни не нужно трогать.

Вот полный рабочий MRE, если кому-то интересно.

import pytest
from contextlib import asynccontextmanager
from fastapi.testclient import TestClient
from fastapi import FastAPI, Response, status, Depends
from dependency_injector import containers, providers
from dependency_injector.wiring import Provide, inject


class HelloGreeter():
    def greet(self):
        return "Hello"


class Container(containers.DeclarativeContainer):
    greeter = providers.Singleton(HelloGreeter)


@asynccontextmanager
async def _lifespan(app: FastAPI):
    # Initialize dependency injection
    container = Container()
    container.wire(modules=[__name__])
    yield


app = FastAPI(title = "Test", lifespan=_lifespan)


@app.get("/")
@inject
async def root(greeter=Depends(Provide[Container.greeter])):
    return Response(status_code=status.HTTP_200_OK, content=greeter.greet())


@pytest.fixture
def fake_client():
    class HiGreeter():
        def greet(self):
            return "Hi"
    with Container.greeter.override(HiGreeter()):
        with TestClient(app) as client:
            yield client


def test_override(fake_client):
    response = fake_client.get("/")
    assert response.text == "Hi"
 07.10.2023 08:45
Я считаю, что правильный способ переопределения lifespan в соответствии с документами FastAPI:

import app  # import your FastAPI app
app.dependency_overrides[lifespan] = _lifespan
Я попробовал ваше предложение, поэтому обновления выше. Может быть, есть какая-то небольшая синтаксическая проблема? Потому что это не сработало, даже если кажется, что это правильный подход.

— 
ajn
 07.10.2023 14:40


Как изменить аутентифицированное сообщение об ошибке в FastAPI?
Вопросы
PYTHON
Как изменить аутентифицированное сообщение об ошибке в FastAPI?
Могу ли я изменить сообщение об ошибке «аутентифицировано» в FastAPI?

Например, в моем разделе входа в систему текущее сообщение об ошибке:

{

"detail": "Not authenticated"

}
и я хочу изменить сообщение об ошибке

 01.10.2023 08:25
1
3
59
2
Данный вопрос помечен как решенный
 Ответы 2
Да, ты можешь. Посетите эти страницы: https://fastapi.tiangolo.com/tutorial/dependents/#dependents.

В вашей конечной точке вы можете использовать такой параметр, как: token: Depends(check_authorization). Затем напишите свой собственный check_authorization метод, в котором вы возвращаете свой собственный HTTPException. Вы можете найти хорошие примеры здесь: https://fastapi.tiangolo.com/tutorial/handling-errors/#handling-errors

 01.10.2023 08:37
 Ответ принят как подходящий
Моя проблема решена

OAuth2PasswordBearer класс, который автоматически отправляет клиенту ошибку, когда токен недействителен.

В этом классе есть запись (auto_error), которую мы можем указать при определении этого класса и избежать автоматической отправки этой ошибки.

Если эта запись заполнена, никакая ошибка не будет возвращена автоматически, а вместо этого будет возвращено значение None, после чего мы сможем отправить клиенту собственный настроенный код ошибки.


Как мне структурировать модули в большом приложении Python?
Вопросы
PYTHON
Как мне структурировать модули в большом приложении Python?
Я часто пишу и участвую в разработке веб-приложений на Python вместе с FastAPI. Я всегда использую одну и ту же структуру папок, которая выглядит следующим образом:

Я думаю, названия понятны, чтобы знать, что находится в каждом из них. Но я хочу сосредоточиться на двух папках: api и services. Внутри API находятся все модули с конечными точками приложения (по одному модулю на каждую "Сущность", например в модуле api/routers/users.py будут все конечные точки для пользователей. В этих конечных точках нет сложной логики , вся логика находится в папке "services". Итак, в модуле services/users.py будет целый класс User с логикой. Во многих случаях этот класс является просто CRUD, который наследуется от BASE CRUD и даже не расширяет класс Или, может быть, добавляет еще один или два метода. Однако в некоторых случаях «сущность» требует гораздо более сложной логики, уместно реализовать некоторые шаблоны проектирования, интерфейсы и т. д. Когда это происходит, я чувствую себя подавленным тем, что мне нужно поместить все в модуль services/users.py. (что подразумевает очень большой файл). Я даже видел, как другие разработчики продолжают расширять класс User (это просто пример, это может быть что угодно) множеством методов, которые не имеют ничего общего с классом, делая код слишком связанным и с низкой связностью. В качестве решения я подумал о создании папки как таковой для каждого объекта, а не модуля. Тогда это будут сервисы/пользователь, и вся пользовательская логика будет распределена более чем по одному модулю, если это необходимо. Но я не уверен, что поступаю правильно с точки зрения дизайна. Я все усложняю? Или это правильная стратегия?

 12.08.2023 06:41
0
1
56
2
Данный вопрос помечен как решенный
 Ответы 2
Я думаю, вам стоит попробовать некоторые подходы к дизайну с помощью Django и django-rest-framework.

Вы разделите свое приложение на небольшие приложения. Используйте модуль маршрутизатора для сопоставления URL-адресов с конкретными приложениями. Тогда в каждом приложении будут отдельные models, services, serializers и views. Кроме того, в папку src можно поместить часто используемые скрипты/контроллеры.

Этот подход к кодированию очень эффективен, если вы знакомы с ООП (я всегда рекомендую использовать ООП для больших проектов).

 12.08.2023 06:49
 Ответ принят как подходящий
перегружен необходимостью помещать все в модуль services/users.py.

Подобно методам и классам, модуль должен делать одна вещь и сделать это хорошо.

Посмотрите на верхнюю часть модуля пользователей. Есть ли у него """строка документации"""? Нет? Ну добавь один.

Теперь вы собираетесь добавить метод для новой службы, предположительно что-то, что тесно связано с сущностью пользователя. Прочтите первое предложение строки документации, в котором объясняется за что отвечает модуль. Соответствует ли ваша новая услуга ее компетенции? Если да, добавьте реализацию, в противном случае найдите или изобретите другой модуль, чтобы поместить его.

РЕДАКТИРОВАТЬ

может быть, мне просто следует перестать думать, что модули не должны быть «значительно большими». Ведь в этом нет ничего плохого.

Ну, я не совсем согласен с этим по трем основным причинам.

(1.) человеческое познание
Если модуль предлагает только один или два общедоступных символа, а затем есть тонна родственных модулей с несколько похожий функционал, это не делает Нежный Читатель любые милости. Беспорядок просто был перемещен на уровень выше, поэтому необходимо искать по модулям а не внутри модуля.

Мне нравится пример коллекции, который """реализует специализированные типы данных контейнера""". Использую ли я каждый контейнер одинаково часто? Нет. Но они имеют смысл, они связаны друг с другом, и я знаю, где искать.

Люди с готовностью отслеживают семь или около того предметов. Двойной или тройной, что может быть хорошо. я люблю делать красивый суп, но объект, который возвращается, имеет 133 открытых члена. (Хорошо, справедливости ради 96, после удаления синонимов get_text и getText.) Я утверждаю, что, как и ключевые слова PL/I и встроенные функции php, некоторые модули типа почтенный numpy (575) и панды (119) DataFrame (208) предлагают смущение богатства, слишком много богатства, больше, чем я отслеживаю или даже знаю, что нужно искать. И это даже после того, как DataFrame превосходно потрудился скрыть 139 _private элементов.

Я рад, что они предлагают так много, и я не предлагаю чтобы реорганизовать их в этот момент. Но имейте в виду, что вы не обязательно хотите ваш замысел так закончиться, ради какого-то недавно нанятого инженера, который должен учиться ваш общедоступный API. Если вы выделите хотя бы одну или две подкатегории, затем, когда будущие инженеры по обслуживанию добавят One More Feature они будут ориентироваться на ваш пример, и, возможно, добавить функцию в существующую небольшую категорию, или осмелится изобрести новую категорию.

(2.) скорость импорта
Минимальная единица детализации для доступа к вашей библиотеке это import. Даже если разработчик уровня приложения делает from numpy import NaN, что все еще требует полный анализ модуля numpy, отбрасывая все, что не является NaN. Полный объем памяти модуля висит за кулисами, кэшируется на случай, если могут быть запрошены другие символы.

Большой модуль, как правило, порождает кучу зависимостей, которые, в свою очередь, имеют транзитивные зависимости. Разработчик приложения несет расходы на все эти вложенные import зависимости.

Так что большой модуль не приходит "бесплатно", импорт всегда занимает несколько миллисекунд. В то время, когда вы обнаружите, что добавляете новую зависимость на которые опирается ваша новая функция, вы должны спросите себя, «уместен ли новый модуль?», «Будут ли некоторые потребители хотеть только А без затрат на загрузку Б?»

(3.) совместимость
Код Python довольно переносим, ​​но иногда код или его компоненты будет настаивать на диапазоне версий какой-либо библиотеки или определенной ОС, или недавний переводчик.

Конда, поэт и пип неплохо справляются с распутать пресловутый ад DLL, но 100% гарантии нет. Если вы можете предложить основные услуги некоторым пользователям вашей библиотеки с минимальными ошибками вы должны, чтобы облегчить их проблемы с обновлением версии.

Совет «docstring» — это определенно то, что я должен реализовать. Но представьте, что у меня есть модуль под названием «статистика». Затем я хочу реализовать стратегию шаблона проектирования и создать классы для различных «алгоритмов», которые наследуются от интерфейса. Что ж, это связано со статистикой, но, возможно, мне следует поместить его в другой модуль, чтобы не делать файл Statistics.py слишком длинным. Но, например, в текущем приложении, в котором я разрабатываю сервисы, есть более 50 модулей (без реализации моей идеи о папках вместо модулей). Так что у меня может получиться больше... не знаю... 100 модулей.

— 
Diego L
 12.08.2023 07:02
Вы можете написать """Этот модуль вычисляет статистику""" или написать """Этот модуль вычисляет байесовскую статистику измерений лабораторного оборудования, для которого задан гауссовский шум с нулевым средним значением.""" Первый модуль может оказаться немного больше. Выбор дизайна за вами.

— 
J_H
 12.08.2023 07:10
Ну, может, мне просто перестать думать, что модули не должны быть "значительно большими". Ведь в этом нет ничего плохого. Спасибо за ваш ответ.


Есть ли разница между фоновыми задачами Starlette/FastAPI и простым использованием многопроцессорности в Python?
Вопросы
PYTHON
Есть ли разница между фоновыми задачами Starlette/FastAPI и простым использованием многопроцессорности в Python?
Я ищу разные способы поставить в очередь функции, которые будут выполнять такие действия, как копирование файлов, очистка веб-сайтов и манипулирование файлами (задачи, которые займут значительное время). Я использую FastAPI в качестве внутреннего API, и я наткнулся на документацию по фоновым задачам FastAPI , а также документацию по фоновым задачам Starlette, и я не могу понять, почему я не мог просто использовать многопроцессорность.

Это то, что я делаю в настоящее время, используя многопроцессорную обработку, и она отлично работает.

from multiprocessing import Process
from fastapi import FastAPI, File, UploadFile
app = FastAPI()

def handleFileUpload(file):
    print(file)
    #handle uploading file here

@app.post("/uploadFileToS3")
async def uploadToS3(bucket: str, file: UploadFile = File(...)):
    uploadProcess = Process(target=handleFileUpload, args(file))
    uploadProcess.start()
    return {
        "message": "Data has been queued for upload. You will be notified when it is ready."
        "status": "OK"
    }
Если это работает, зачем существуют фоновые задачи FastAPI, если я могу сделать это так же просто, как с помощью многопроцессорной обработки? Мое единственное предположение, что это связано с масштабированием? Это может работать для меня, просто тестируя, но я знаю, что многопроцессорность связана с количеством ядер в системе. Я могу полностью упустить смысл многопроцессорности. Пожалуйста, помогите мне понять. Спасибо.

 25.05.2023 06:17
2
1
114
2
Данный вопрос помечен как решенный
 Ответы 2
 Ответ принят как подходящий
TL;DR
Эти фоновые задачи всегда будут выполняться в том же процессе, что и ваше основное приложение. Они будут либо просто запускаться асинхронно в цикле событий, либо в отдельном потоке.

Для операций, которые в основном не являются вводом-выводом, вам, вероятно, следует избегать их использования и вместо этого использовать многопроцессорность.

Подробности
Используйте многопроцессорность (правильно), если хотите
Я не понимаю, почему я не мог просто использовать многопроцессорность.

Мало того, что документация не препятствует использованию многопроцессорности, документация FastAPI явно предлагает ее для задач с интенсивными вычислениями.

Цитата: (выделено мной)

Если вам нужно выполнять тяжелые фоновые вычисления, и вам не обязательно, чтобы они выполнялись одним и тем же процессом (например, вам не нужно совместно использовать память, переменные и т. д.), вы можете воспользоваться другими более крупными инструментами [ ...].

Так что вы можете. И если вы хотите выполнять работу с привязкой к процессору в фоновом режиме, вам почти наверняка придется использовать собственную многопроцессорную настройку.

Но в примере, который вы показали в своем вопросе, кажется, что операция, которую вы хотите выполнить в фоновом режиме, - это загрузить куда-нибудь файл. Такая задача, вероятно, хорошо подходит для параллелизма на основе BackgroundTasks, потому что она связана с вводом-выводом. Создание другого процесса приводит к дополнительным накладным расходам, которые могут сделать его менее эффективным, чем то, что делают BackgroundTasks.

Кроме того, вы не указали в своем коде, когда и как вы присоединяетесь к этому новому процессу. Это важно и упоминается в рекомендациях по многопроцессорной обработке:

[...] когда процесс завершается, но не был присоединен, он становится зомби. [...] вероятно, хорошей практикой является явное присоединение ко всем процессам, которые вы запускаете.

Просто создать его и забыть о нем, вероятно, ужасная идея, особенно когда это происходит каждый раз, когда запрашивается этот маршрут.

И дочерний процесс не может просто присоединиться к самому себе, потому что это вызовет взаимоблокировку.

Технические отличия
Как вы знаете, фоновые задачи FastAPI — это просто повторный импорт класса BackgroundTasks из Starlette (см. документы). FastAPI просто интегрирует их в свою настройку обработки маршрутов таким образом, что пользователю не нужно явно возвращать их в какой-либо момент.

Но в документации Starlette четко указано, что класс

для внутрипроцессных фоновых задач.

И если мы посмотрим на исходный код, то увидим, что под капотом реализация __call__ на самом деле просто делает одну из двух вещей:

Если переданная вами функция асинхронна, она просто awaits.
Если переданная вами функция является «обычной» функцией (не async), она запускает ее в пуле потоков. (Если вы углубитесь, вы увидите, что он использует сопрограмму anyio.to_thread.run_sync.)
Это означает, что ни в какой другой момент в игре нет другого процесса. В случае 1) он даже запланирован в том же точном цикле событий, что и остальная часть приложения, что означает, что все это происходит в одном потоке. А в случае 2) операцию выполняет дополнительный поток.

Последствия очень очевидны, если у вас есть некоторый опыт работы с параллелизмом в Python: не используйте BackgroundTasks, если вы хотите выполнять там операции с привязкой к процессору. Это полностью заблокирует ваше приложение, потому что они либо 1) заблокируют цикл событий в единственном доступном потоке, либо 2) заставят GIL заблокировать основной поток.

Законные варианты использования
С другой стороны, если ваши задачи выполняют некоторые операции, связанные с вводом-выводом (пример, приведенный в документации, — подключение к серверу электронной почты для отправки чего-либо после обработки запроса), механизм BackgroundTasks очень удобен.

Основное преимущество BackgroundTasks для пользовательской настройки, на мой взгляд, заключается в том, что вам не нужно беспокоиться о том, как и когда именно будут ожидаться сопрограммы или объединяться потоки. Все это абстрагируется за обработчиком маршрута. Вам просто нужно указать, какую функцию вы хотите выполнить через некоторое время после ответа.

Вы могли бы просто, например. вызовите asyncio.create_task непосредственно перед окончанием функции обработчика маршрута. Это, вероятно, запланировало бы задачу сразу после обработки запроса и эффективно запустило бы ее в фоновом режиме. Но с этим есть три проблемы:

Нет никакой гарантии, что он будет назначен сразу после этого. Это может занять некоторое время, если обрабатывается много запросов.
У вас нет шансов на самом деле await выполнить эту задачу и гарантировать, что она действительно завершится (как и ожидалось, или с ошибкой), если только вы сами не разработаете какой-либо механизм, чтобы отслеживать ее вне обработчика маршрута.
Поскольку цикл обработки событий хранит только слабые ссылки на задачи, такая задача может попасть под сбор мусора до того, как будет завершена. (Это означает, что он просто исчезнет.)
 25.05.2023 10:48
Многопроцессорный процесс позволяет в полной мере использовать доступные аппаратные ресурсы, например несколько ядер ЦП. Распределяя рабочую нагрузку между процессами, вы можете воспользоваться преимуществами параллелизма и сократить время выполнения.

Функция BackgroundTask в FastAPI полезна, когда вы хотите выполнять определенные функции или методы асинхронно в фоновом режиме при обработке HTTP-запросов. Это позволяет планировать и выполнять задачи, выполнение которых может занять больше времени или включать операции ввода-вывода, не блокируя ответ API. Полезно использовать для связанных с вводом/выводом задач или периодических/запланированных задач.

Однако вы можете использовать оба вместе для достижения параллелизма и асинхронного выполнения задач в приложении FastAPI.

def handleFileUpload(file: UploadFile) -> None:
    print(file)

def check_worker_status(p: Process) -> None:
    while p.is_alive():
        print('Worker is still running...')
        time.sleep(5)
    p.terminate()
    print('Worker terminated')

@router.post("/uploadFileToS3")
async def uploadToS3(background_task: BackgroundTasks, bucket: str, file: UploadFile = File(...)) -> dict:
    uploadProcess = Process(target=handleFileUpload, args=(file,))
    uploadProcess.start()
    background_task.add_task(check_worker_status, uploadProcess)
    return {"message": "File uploaded successfully"}
Метод join() класса multiprocessing.Process используется для блокировки вызывающего процесса до тех пор, пока процесс, чей метод join() вызывается, не завершится. Если вы хотите избежать блокировки вызывающего процесса, вы можете использовать метод is_alive() класса multiprocessing.Process, чтобы проверить, выполняется ли процесс, а затем завершить его, используя метод terminate() того же класса.


Как вызвать пользовательские исключения в промежуточном программном обеспечении FastAPI?
Вопросы
PYTHON
Как вызвать пользовательские исключения в промежуточном программном обеспечении FastAPI?
У меня есть простая настройка FastAPI с пользовательским классом промежуточного программного обеспечения, унаследованным от BaseHTTPMiddleware. Внутри этого класса промежуточного программного обеспечения мне нужно завершить поток выполнения при определенных условиях. Итак, я создал собственный класс исключений с именем CustomError и raised исключение.

from fastapi import FastAPI, Request
from starlette.middleware.base import (
    BaseHTTPMiddleware,
    RequestResponseEndpoint
)
from starlette.responses import JSONResponse, Response

app = FastAPI()


class CustomError(Exception):
    def __init__(self, message):
        self.message = message

    def __str__(self):
        return self.message


class CustomMiddleware(BaseHTTPMiddleware):
    def execute_custom_logic(self, request: Request):
        raise CustomError("This is from `CustomMiddleware`")

    async def dispatch(
            self,
            request: Request,
            call_next: RequestResponseEndpoint,
    ) -> Response:
        self.execute_custom_logic(request=request)
        response = await call_next(request)
        return response


app.add_middleware(CustomMiddleware)


@app.exception_handler(CustomError)
async def custom_exception_handler(request: Request, exc: CustomError):
    return JSONResponse(
        status_code=418,
        content = {"message": exc.message},
    )


@app.get(path = "/")
def root_api():
    return {"message": "Hello World"}

К сожалению, FastAPI не смог обработать CustomError, хотя я добавил обработчик custom_exception_handler(...).

Вопросы
Как FastAPI справляется с такими ситуациями?
Почему мой код не работает?
Версии

FastAPI — 0.95.2
Питон — 3.8.13
 16.05.2023 22:03
1
0
115
2
Данный вопрос помечен как решенный
 Ответы 2
Пользовательские обработчики исключений FastAPI не обрабатывают исключения промежуточного уровня. Хотя это нигде не указано в документах, есть часть об HTTPException , в которой говорится, что вы можете поднять HTTPException, если вы находитесь внутри служебной функции, которую вы вызываете внутри своей функции операции пути. HTTPException имеет обработчик исключений по умолчанию, который действует абсолютно так же, как и пользовательские обработчики исключений.

Вы можете либо обработать свою ошибку (с помощью try/except) в одном и том же промежуточном программном обеспечении, либо иметь отдельное промежуточное программное обеспечение, например. ExceptionHandlerMiddleware (но вам придется соблюдать правильный порядок цепочки промежуточного программного обеспечения).

 16.05.2023 23:53
 Ответ принят как подходящий
Очевидным способом было бы вызвать HTTPException; однако в промежуточном программном обеспечении FastAPI/Starlette это не сработает, что приведет к ошибке Exception in ASGI application на стороне сервера, и, следовательно, клиенту будет возвращен Internal Server Error.

Вариант 1 - Использование блока middleware и try/except
Вы можете использовать блок try/except для обработки пользовательского исключения, возникшего в вашей пользовательской функции. После возникновения ошибки вы можете вернуть JSONResponse (или пользовательский Response, если хотите), включая msg (и любые другие аргументы) из CustomException, а также желаемый status_code (в примере, приведенном ниже, код состояния 500 используется, который можно заменить кодом состояния по вашему выбору).

Рабочий пример
from fastapi import FastAPI, Request, HTTPException
from fastapi.responses import JSONResponse

app = FastAPI()


class CustomException(Exception):
    def __init__(self, msg: str):
        self.msg = msg
 
 
def exec_custom_logic(request: Request):
    raise CustomException(msg='Something went wrong') 

    
@app.middleware("http")
async def custom_middleware(request: Request, call_next):
    try:    
        exec_custom_logic(request)
    except CustomException as e:
        return JSONResponse(status_code=500, content = {'message': e.msg})
        
    return await call_next(request)
    
    
@app.get('/')
async def main(request: Request):
    return 'OK'
Вариант 2. Использование APIRouter с пользовательским классом APIRoute
Вы можете использовать APIRouter с пользовательским классом APIRoute , как показано в варианте 4 этого ответа, и либо обработать пользовательское исключение внутри блока try/except (как показано в предыдущем варианте выше), либо поднимите HTTPException напрямую. Преимущества такого подхода: (1) вы можете поднять HTTPException напрямую, и, следовательно, нет необходимости использовать блоки try/except, и (2) вы можете добавить в APIRouter только те маршруты, которые вы хотели бы обрабатывать таким образом. , используя, например, декоратор @router.get(), а остальные маршруты можно добавить в экземпляр app, используя, например, декоратор @app.get().

Рабочий пример
from fastapi import FastAPI, APIRouter, Response, Request, HTTPException
from fastapi.routing import APIRoute
from typing import Callable


def exec_custom_logic(request: Request):
    raise HTTPException(status_code=500, detail='Something went wrong')
    

class CustomAPIRoute(APIRoute):
    def get_route_handler(self) -> Callable:
        original_route_handler = super().get_route_handler()

        async def custom_route_handler(request: Request) -> Response:
            exec_custom_logic(request)
            return await original_route_handler(request)
       
        return custom_route_handler


app = FastAPI()
router = APIRouter(route_class=CustomAPIRoute)


@router.get('/')
async def main(request: Request):
    return 'OK'
    
app.include_router(router)


"GET/HTTP/1.1" 405 Метод не разрешен
Вопросы
PYTHON
"GET/HTTP/1.1" 405 Метод не разрешен
У меня была проблема с тем, что я не могу использовать свой запрос Post в FastAPI, я использовал запрос Post, но терминал отобразил запрос Get, и я не знаю, почему. И когда я использовал Body(...) для объявления типа dict, но это не сработало

from fastapi.params import Body
from pydantic import BaseModel

app = FastAPI()
# payload : input parameter of the function
# dict: type of data
#  được truyền vào bằng cách sử dụng FastAPI's Body dependency. ... được sử dụng để chỉ định rằng tham số 
# này là bắt buộc và không thể bỏ qua.
@app.post("/create")
def create_posts(payload: dict = Body(...)):
    # It will extract all the field from the body to the dict
    print(payload)
    return {"message": f"successfully created posts: {payload['title']}"}

@app.get("/")
def get_data():
    return {"message": "Hello World"} 
вот моя ошибка

INFO:     Will watch for changes in these directories: ['T:\\FastAPI']
INFO:     Uvicorn running on http://127.0.0.1:8000 (Press CTRL+C to quit)
INFO:     Started reloader process [14464] using WatchFiles
INFO:     Started server process [3468]
INFO:     Waiting for application startup.
INFO:     Application startup complete.
INFO:     127.0.0.1:60812 - "GET /create HTTP/1.1" 405 Method Not Allowed
INFO:     127.0.0.1:60812 - "GET /cart.json HTTP/1.1" 404 Not Found
INFO:     127.0.0.1:60812 - "GET /create HTTP/1.1" 405 Method Not Allowed```
 19.04.2023 11:34
1
3
134
2
Данный вопрос помечен как решенный
 Ответы 2
Проблема в том, что ваш метод get определен на localhost:8000/ (если вы запускаете приложение с uvicorn в режиме по умолчанию)

@app.get("/")
def get_data():
    return {"message": "Hello World"}
Поэтому вы должны отправить запрос, например

Вместо

Вместо этого вы должны использовать POST

Или определить что-то вроде

@app.get("/create")
def get_data():
    return {"message": "Hello World"}
 19.04.2023 11:53
 Ответ принят как подходящий
Ваш код работает просто отлично. Скорее всего, единственная проблема заключается в том, что вы на самом деле не отправляете запрос POST. Откройте http://localhost:8000/docs в браузере и попробуйте выполнить запрос самостоятельно.

Как указать только один из нескольких необязательных параметров в FastAPI?
Вопросы
PYTHON
Как указать только один из нескольких необязательных параметров в FastAPI?
API должен обслуживать конечную точку, где пользователь может указать guid, path или code. Вот как должна выглядеть схема URL:

api/locations?code = {str}&guid = {str}&path = {str}
Текущий код выглядит следующим образом:

@router.get("/api/locations")
def get_functional_locations(
    guid: Optional[str] = None,
    code: Optional[str] = None,
    path: Optional[str] = None,
) -> Union[List[Locations], PlainTextResponse]:
   if guid:
        return ...

    if path:
        return ...

    if code:
        return ...

    return PlainTextResponse(status_code=status.HTTP_400_BAD_REQUEST)
Есть ли другой способ предоставить это несколько необязательных параметров и иметь XOR, который позволяет пользователю заполнять только один параметр?

 18.04.2023 13:51
1
0
124
2
Данный вопрос помечен как решенный
 Ответы 2
 Ответ принят как подходящий
Во-первых, я хотел бы спросить, если у вас есть три взаимоисключающих параметра, и все они являются способами получения одной и той же информации, не должны ли это быть три разные конечные точки, например. api/locations/guid/{guid}, api/locations/code/{code} и api/locations/path/{path}? Обычно предпочтительнее иметь несколько небольших функций, выполняющих одно действие.

Однако, если вы этого хотите, вы всегда можете написать для этого свой собственный код, например. используя класс в качестве зависимости , здесь вместе с корневым валидатором pydantic

from fastapi import Depends, HttpException
from pydantic import BaseModel, root_validator

class Params(BaseModel):
    guid: str | None = None
    code: str | None = None
    path: str | None = None

    @root_validator
    def validate(cls, values):
        if len([val for val in values.values() if val is not None]) != 1:
            raise HTTPException(400, "Exactly one of guid, code, and path must be provided")
        return values


@app.get("/api/locations")
def foo(params: Params = Depends()):
    ...
 18.04.2023 14:38
Вы можете использовать зависимость , которая представляет собой функцию, которая может принимать все те же параметры, что и конечная точка. Внутри функции зависимости вы можете выполнить необходимые проверки, чтобы убедиться, что пользователь предоставил только один из необязательных параметров. Если это так, верните словарь обратно в конечную точку, включая параметры и их значения, которые помогут вам определить, какой параметр (и его значение) использовался клиентом. В противном случае, если были предоставлены значения для более чем одного параметра, вы можете вызвать HTTPException, информируя пользователя об ограничениях, применяемых к этой конечной точке.

Обратите внимание, что в приведенном ниже примере используется ключевое слово Optional из модуля typing (как показано в примере, приведенном в вашем вопросе) для объявления необязательных параметров. Однако в Python 3.10+ можно также использовать, например, guid: str | None = None. В любом случае, самая важная часть для того, чтобы сделать параметр необязательным, — это часть = None. Пожалуйста, ознакомьтесь с этим ответом и этим ответом, чтобы найти более подробную информацию и все доступные варианты, чтобы сделать параметры необязательными в FastAPI.

Рабочий пример
from fastapi import FastAPI, Depends, HTTPException
from typing import Optional

app = FastAPI()


def params(
    guid: Optional[str] = None,
    code: Optional[str] = None,
    path: Optional[str] = None,
):
    if sum(i is not None for i in [guid, code, path]) != 1:
        raise HTTPException(400, 'Please provide only one of either guid, code or path')
    else:
        return {'guid': guid, 'code': code, 'path': path}


@app.get('/')
def main(d: dict = Depends(params)):
    for k, v in d.items():
        if v:
            return {k: v}

Развертывание FastAPI в Heroku с помощью реестра контейнеров Docker

DOCKER
Развертывание FastAPI в Heroku с помощью реестра контейнеров Docker
Проблема

Я развертываю образ Docker с использованием FastAPI в Heroku, используя метод развертывания Docker Container Registry. Когда я развертываю контейнер, я получаю следующие журналы при запуске:

2024-06-03T20:57:32.222808+00:00 app[api]: Release v29 created by user dxxxxxxxxxx@gmail.com
2024-06-03T20:57:32.222808+00:00 app[api]: Deployed web (228f5e77d4e2) by user dxxxxxxxxxx@gmail.com
2024-06-03T20:57:45.637479+00:00 heroku[web.1]: Starting process with command `/bin/sh -c \"./start.sh\ \$\{PORT\}\"`
2024-06-03T20:57:46.235100+00:00 heroku[web.1]: Process exited with status 127
2024-06-03T20:57:46.185240+00:00 app[web.1]: /bin/sh: 1: ./start.sh 53182: not found
2024-06-03T20:57:46.255899+00:00 heroku[web.1]: State changed from starting to crashed
В пользовательском интерфейсе Heroku я вижу команду для запуска процесса heroku logs --app <app-name> --tail — web, и это правильно, поскольку эта команда работает локально. Я даже запустил контейнер и запустил web /bin/sh -c \"./start.sh\ \$\{PORT\}\", чтобы убедиться, что он будет работать, и он работает (это означает, что я могу подключиться к любой и всем конечным точкам API и получить ожидаемые результаты).

Детали

Докерфайл

FROM node:21 as ui-build

ENV PORT $PORT

WORKDIR /opt/ui

COPY ui .
RUN npm ci && npm run build

FROM python:3.11 as final-build

WORKDIR /opt/app
COPY --from=ui-build /opt/ui/build ./ui/build
COPY server server

RUN cd server && pip install -r requirements.txt

# Apparently Heroku doesn't respect the EXPOSE directive.
EXPOSE $PORT

WORKDIR /opt/app/server
COPY ./start.sh .

# Not sure why these commands are not working but the start.sh script seems to be going in the right direction.
# ENTRYPOINT [ "uvicorn", "api.app:app" ]
# CMD [ "--host", "0.0.0.0", "--port", $PORT ]
CMD "./start.sh ${PORT}"
Я использую действие gonuit/heroku-docker-deploy Github Action для создания и отправки образа Docker в реестр контейнеров Heroku. Вот как я использую это действие в своем рабочем процессе.

name: Build and Push Image

on:
  push:
    branches:
      - main

jobs:
  build-image:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Build and Push to Heroku
        uses: gonuit/heroku-docker-deploy@v1.3.3
        with:
          email: test@gmail.com
          heroku_api_key: ${{ secrets.HEROKU_API_KEY }}
          heroku_app_name: <app-name>

Ссылки

Это некоторые из ссылок, которые я использовал, чтобы найти код, который у меня сейчас есть, но ни одна из них мне не помогла.

https://akshaykhatale.medium.com/deploy-fastapi-on-heroku-using-docker-container-a920f839de9b
Как развернуть быстрый API в качестве бэкэнда в докер-контейнере на Heroku
Эта последняя ссылка является официальной документацией Heroku по развертыванию с реестром контейнеров Docker, которую, насколько мне известно, я реализовал идентично.

https://devcenter.heroku.com/articles/container-registry-and-runtime
Решение

Идеальным решением для меня было бы развертывание моего приложения с помощью Docker и Github Actions. Если мне нужно добавить файл Procfile или Heroku.yml в приложение, меня это устраивает, просто кажется, что это не нужно для метода развертывания, который я использую.

Как использовать ведение журнала Python с uvicorn/FastAPI?
Вопросы
PYTHON
Как использовать ведение журнала Python с uvicorn/FastAPI?
Вот небольшое приложение, которое воспроизводит мою проблему:

import fastapi
import logging
import loguru

instance = fastapi.FastAPI()

@instance.on_event("startup")
async def startup_event():
    logger = logging.getLogger("mylogger")
    logger.info("I expect this to log")
    loguru.logger.info("but only this logs")
Когда я запускаю это приложение с помощью uvicorn app.main:instance --log-level=debug, я вижу это в своем терминале:

INFO:     Waiting for application startup.
2024-05-02 13:14:45.118 | INFO     | app.main:startup_event:28 - but only this logs
INFO:     Application startup complete.
Почему работает только логлайн loguru и как я могу заставить стандартное ведение журнала Python работать должным образом?

FastAPI Interview Questions and Answers
Home
Interview Questions
FastAPI
1 .What is FastAPI?
FastAPI is a modern, fast (high-performance), web framework for building APIs with Python 3.8+ based on standard Python type hints. It is designed to be easy to use, fast to develop with, and to provide efficient performance. FastAPI is built on top of Starlette and Pydantic.

Key features of FastAPI include :

* Fast : As the name suggests, FastAPI is designed to be fast. It leverages Python type hints and asynchronous programming to achieve high performance.

* Automatic Documentation : FastAPI generates OpenAPI and JSON Schema documentation automatically based on the Python type hints used in the code. This documentation is interactive and can be explored through Swagger UI and ReDoc.

* Type Checking : FastAPI uses Python type hints for request and response validation. This not only helps with automatic documentation but also enables the use of tools like Pydantic for data validation and serialization.

* Asynchronous Support : FastAPI fully supports asynchronous programming, allowing you to write asynchronous routes and take advantage of the performance benefits of asynchronous I/O operations.

* Dependency Injection System : FastAPI has a powerful dependency injection system that makes it easy to manage dependencies in a clean and organized way.

* Security Features : It includes features for handling security, including support for OAuth2, API key authentication, and more.

* WebSocket Support : FastAPI supports WebSocket communication, allowing real-time bidirectional communication between clients and the server.

* Compatibility with Standard Python Type Hints : FastAPI leverages Python type hints for request and response validation. This provides a clear contract for the API and allows for better tooling support.

* Compatibility with Other Web Frameworks : FastAPI is designed to be easy to integrate with other web frameworks, allowing you to use it alongside existing applications or services.

* Built-in Support for OAuth2 and JWT : FastAPI provides built-in support for OAuth2 and JSON Web Tokens (JWT) for handling authentication and authorization.
2 .Explain the asynchronous features of FastAPI
FastAPI leverages asynchronous programming to provide high-performance web applications and APIs. Asynchronous programming allows tasks to be executed concurrently without waiting for each to complete, making better use of system resources and improving overall application responsiveness. Here are some key aspects of the asynchronous features in FastAPI:

Async and Await Syntax : FastAPI uses Python's async and await syntax to define asynchronous functions. These functions can be used in route handlers, dependencies, and other parts of the application.
from fastapi import FastAPI

app = FastAPI()

@app.get("/")
async def read_root():
    return {"message": "Hello, World!"}?

Asynchronous Request Handlers : FastAPI allows you to define asynchronous request handlers using the async def syntax. This is particularly useful for handling requests concurrently, especially when dealing with I/O-bound operations such as database queries or external API calls.
from fastapi import FastAPI

app = FastAPI()

@app.get("/async_endpoint")
async def async_endpoint():
    result = await some_async_function()
    return {"result": result}?

Dependency Injection with Async Dependencies : FastAPI's dependency injection system supports asynchronous dependencies. Dependencies marked with async def can perform asynchronous operations, such as fetching data from a database or making asynchronous API calls.
from fastapi import Depends, FastAPI

app = FastAPI()

async def get_some_data():
    # Asynchronous operations here
    return {"data": "Some asynchronous data"}

@app.get("/")
async def read_data(data: dict = Depends(get_some_data)):
    return data?
Background Tasks : FastAPI provides a mechanism called BackgroundTasks that allows you to run asynchronous functions in the background after a response has been sent to the client. This is useful for performing non-blocking tasks after handling a request.
from fastapi import BackgroundTasks, FastAPI

app = FastAPI()

def write_log(message: str):
    with open("log.txt", mode="a") as log:
        log.write(message)

@app.post("/send-notification/{email}")
async def send_notification(
    email: str, background_tasks: BackgroundTasks
):
    message = f"message to {email}"
    background_tasks.add_task(write_log, message)
    return {"message": "Message sent in the background"}?

WebSocket Support : FastAPI supports asynchronous WebSocket communication. You can define WebSocket routes using asynchronous functions, enabling real-time bidirectional communication between clients and the server.
from fastapi import FastAPI, WebSocket

app = FastAPI()

@app.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):
    await websocket.accept()
    while True:
        data = await websocket.receive_text()
        await websocket.send_text(f"Message text was: {data}")

By embracing asynchronous programming, FastAPI is able to handle a large number of simultaneous connections efficiently, making it suitable for building scalable and performant web applications and APIs.

3 .How do you define a route in FastAPI?
In FastAPI, routes are defined using decorators. For example, to define a route that returns a list of users, you would use the @get decorator :

@get(“/users”)
def list_users():
return [{“username”: “jane”}, {“username”: “joe”}]?
4 .Can you explain the key differences between FastAPI and Flask and why you would choose FastAPI over Flask?
FastAPI and Flask are both Python web frameworks, but they differ significantly. FastAPI is built on Starlette for web routing and Pydantic for data validation, which allows it to offer high performance compared to Flask. It also supports modern functionalities like async and await keywords.

FastAPI automatically generates interactive API documentation using OpenAPI and JSON Schema standards, a feature not present in Flask. This makes it easier to test and debug APIs during development.

FastAPI’s use of Python type hints leads to better editor support, error checking, and refactoring capabilities. In contrast, Flask lacks this feature, making code maintenance more challenging.

The choice between FastAPI and Flask depends on the project requirements. For applications requiring high performance, modern asynchronous features, automatic API documentation, or extensive use of data validation, FastAPI would be the preferred choice over Flask due to its advanced features and superior performance.
5 .What is the role of Pydantic in FastAPI?
Pydantic plays a crucial role in FastAPI by providing data validation and settings management using Python type annotations. It ensures that incoming data matches the expected types, reducing runtime errors. Pydantic models define how requests and responses should be structured, enabling automatic request body parsing, validation, serialization, and documentation.
6 .What are some advantages of using FastAPI over Flask?
FastAPI and Flask are both popular web frameworks for building web applications and APIs in Python, but they have different design philosophies and features. Here are some advantages of using FastAPI over Flask:

* Performance : FastAPI is designed to be highly performant, thanks to its use of asynchronous programming. Asynchronous support allows FastAPI to handle a large number of concurrent requests efficiently, making it well-suited for applications with high performance requirements. Flask, on the other hand, is synchronous by default.

* Automatic API Documentation : FastAPI automatically generates interactive API documentation based on the Python type hints used in your code. This documentation is accessible through Swagger UI and ReDoc, making it easy for developers to understand and test the API without additional manual documentation efforts. Flask, while having documentation tools, may require more manual intervention for similar features.

* Type Hints and Validation : FastAPI leverages Python type hints to automatically validate requests and responses. This not only helps in catching errors early in the development process but also improves code readability. Flask, being a more traditional framework, doesn't enforce type hints as strictly.

* Dependency Injection : FastAPI provides a built-in dependency injection system that makes it easy to manage dependencies in a clean and organized way. This can be particularly useful for handling reusable components and ensuring proper separation of concerns. Flask, while having support for extensions, may not provide as built-in and structured a system for dependency injection.

* Asynchronous Database Operations : FastAPI's asynchronous support allows you to perform asynchronous database operations, which can significantly improve the efficiency of applications that involve database queries. Flask is synchronous by default, and while there are ways to integrate asynchronous code, it may not be as seamless as in FastAPI.

* WebSocket Support : FastAPI has built-in support for handling WebSocket communication, enabling real-time bidirectional communication between clients and the server. Flask, while having third-party extensions for WebSocket support, doesn't provide native support out of the box.

* Security Features : FastAPI includes features for handling security, such as built-in support for OAuth2, API key authentication, and other security-related functionalities. Flask, while having a robust ecosystem, may require additional third-party packages for certain security features.

* Data Validation with Pydantic : FastAPI encourages the use of Pydantic models for request and response data. Pydantic provides powerful data validation and serialization capabilities, ensuring that the data sent and received by your API is well-formed. While Flask has support for data validation, it may not be as integrated and based on Python type hints.
7 .How does FastAPI leverage type hints for automatic API documentation?
FastAPI leverages Python type hints to automatically generate comprehensive and interactive API documentation. Here's how it works:

* Type Hints in Function Signatures : When defining routes in FastAPI, you use Python type hints in the function signatures to declare the expected data types for request parameters, request bodies, and response objects.

* Pydantic Models for Request and Response Bodies : FastAPI encourages the use of Pydantic models, which are Python classes with type hints provided. These models define the structure and validation rules for request and response bodies.

* Automatic Validation and Documentation : FastAPI uses the provided type hints to automatically validate incoming requests and generate OpenAPI and JSON Schema documentation. This documentation includes details about the expected request parameters, request bodies, response objects, and their data types.

* Swagger UI and ReDoc Integration : FastAPI provides two interactive web interfaces, Swagger UI and ReDoc, that are automatically generated based on the OpenAPI documentation. These interfaces allow developers to explore and test the API interactively. Swagger UI is accessible at http://localhost:8000/docs, and ReDoc at http://localhost:8000/redoc.

* Validation and Documentation for Query Parameters : Query parameters are also automatically documented based on the provided type hints. The documentation includes information about the parameter name, its type, whether it's required or optional, default values, etc.
8 .Can you explain how you would implement authentication and authorization in FastAPI?
FastAPI provides a security module to implement authentication and authorization. For authentication, OAuth2PasswordBearer is used which requires a URL that the client will use for token retrieval. The get_current_user function uses Depends to inject dependencies, where it decodes the token and fetches user data. If invalid, HTTPException is raised.

For authorization, FastAPI offers Security Scopes. Each route can have a list of scopes as dependencies. When a request comes in, FastAPI checks if the current user has required scopes. If not, an error is returned.

Here’s a code snippet :
from fastapi import Depends, FastAPI, HTTPException, Security
from fastapi.security import OAuth2PasswordBearer, SecurityScopes
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")
def get_current_user(security_scopes: SecurityScopes, token: str = Depends(oauth2_scheme)):
    # decode token and fetch user data here
    raise HTTPException(status_code=403, detail="Not authenticated")
app = FastAPI()
@app.get("/items/", dependencies=[Depends(Security(get_current_user, scopes=["items:read"]))])
async def read_items():
    return [{"item": "Foo", "value": "Bar"}]?
9 .How does FastAPI take advantage of Python 3.6 type declarations?
FastAPI utilizes Python 3.6 type declarations to provide several benefits. It uses these annotations for data validation, serialization, and documentation while reducing the amount of code required. FastAPI leverages Pydantic models that use type hints to perform automatic request body JSON parsing, form data handling, and query parameter handling. This results in cleaner, more maintainable code. Additionally, it generates interactive API documentation automatically using OpenAPI standards based on these type declarations.
10 .How would you handle exception handling and custom error responses in FastAPI?
FastAPI provides built-in exception handling. To handle exceptions, use the HTTPException class from fastapi.exceptions module. This class accepts status_code and detail parameters to define HTTP status code and error message respectively.

For custom error responses, create a subclass of HTTPException and override its attributes. You can also customize the validation error response body by creating a route operation function that raises RequestValidationError from fastapi.exceptions and catch it in an exception handler.

Here’s a coding example :
from fastapi import FastAPI, HTTPException
app = FastAPI()
@app.exception_handler(HTTPException)
async def http_exception_handler(request, exc):
    return JSONResponse(
        status_code=exc.status_code,
        content={"message": f"Oops! {exc.detail}"},
    )
@app.get("/items/{item_id}")
async def read_item(item_id: str):
    if item_id not in items:
        raise HTTPException(status_code=404, detail="Item not found")?
11 .What is dependency injection in FastAPI?
Dependency injection in FastAPI is a mechanism that allows you to declare and manage the dependencies required by your route functions or other parts of your application. Dependencies are components or services that your application relies on, such as database connections, authentication services, or external API clients. FastAPI's dependency injection system helps organize and handle these dependencies in a clean and modular way.

Here's how dependency injection works in FastAPI :

Dependency Declaration : You declare dependencies using Python functions, which FastAPI refers to as "dependency functions." These functions can be asynchronous (async def) or synchronous (def), depending on the nature of the dependency.
from fastapi import Depends, FastAPI

app = FastAPI()

def get_db():
    # Function to get a database connection
    # ...

def get_current_user(token: str = Depends(get_token)):
    # Function to get the current user based on the token
    # ...

@app.get("/items/")
async def read_items(db: Session = Depends(get_db), current_user: User = Depends(get_current_user)):
    # Route function that depends on the database and current user
    # ...?
Dependency Injection in Route Functions : In the example above, the read_items route function has dependencies on a database connection (db) and the current user (current_user). FastAPI automatically injects these dependencies into the function when it is called.

Dependency Resolvers : FastAPI uses dependency resolvers to resolve and inject dependencies into route functions. Dependency resolvers are responsible for obtaining the required dependency instances before executing the route function.

Order of Execution : Dependencies are executed in the order they are declared in the function signature. FastAPI ensures that dependencies with shared sub-dependencies are only executed once, and their results are reused.

Reusable Components : By using dependency injection, you can create reusable components for common functionality. For example, you can define a get_db dependency that provides a database session, and then use it in multiple route functions.

Automatic Validation of Dependencies : FastAPI automatically validates and handles the dependencies based on the type hints provided in the dependency functions. If a required dependency cannot be resolved, FastAPI will raise an exception and return an error response.
12 .Explain the role of Pydantic in FastAPI
Pydantic plays a crucial role in FastAPI as it is used for data validation, serialization, and the automatic generation of interactive API documentation.

Here's an explanation of the key roles Pydantic plays in FastAPI :

* Data Validation : Pydantic is a data validation library for Python that is heavily used in FastAPI. It allows you to define data models using Python classes with type hints. These models not only serve as documentation for your data structures but also automatically validate incoming request data.

* Automatic Documentation Generation : Pydantic models, being a part of the FastAPI application, are leveraged to automatically generate detailed and interactive API documentation. FastAPI uses the type hints and validation rules in the Pydantic models to produce OpenAPI and JSON Schema documentation.

* Data Serialization : Pydantic models also play a role in serializing data for responses. When you return an instance of a Pydantic model from a route function, FastAPI automatically serializes it to JSON, ensuring that the response adheres to the structure defined in the model.

* Validation Errors Handling : When validation fails (e.g., due to incorrect data types or missing required fields), Pydantic raises validation errors. FastAPI handles these errors and automatically generates appropriate error responses, making it easy to communicate validation issues back to the client.

Pydantic's integration with FastAPI enhances the development experience by providing a clear and consistent way to define, validate, and document data structures within your application. It ensures that your API documentation is always up-to-date and that data validation is applied consistently throughout your FastAPI application.
13 .Can you give me an example of how to use HTTP methods with routes in FastAPI?
You can use HTTP methods with routes in FastAPI by specifying the methods argument with a list of methods when you add a route. For example, if you want to add a route that can be accessed with the GET and POST methods, you would do the following:

@app.get(“/my-route”, methods=[“GET”, “POST”])
def my_route():
return “Hello, world!”?
14 .How does FastAPI integrate with SQLAlchemy for database connection and ORM?
FastAPI integrates with SQLAlchemy through the use of Pydantic models and dependency injection. First, a SQLAlchemy model is defined for the database structure. Then, a Pydantic model is created to handle data validation and serialization. FastAPI uses these models in route functions to interact with the database.

Dependency injection allows for reusable dependencies that manage database sessions. A common pattern involves creating a function that yields a session, then closes it after request handling. This function can be included as a parameter in route functions, providing them with a session instance.

For SQL queries, SQLAlchemy’s ORM is used directly within the route functions. The session provided by the dependency handles transactions, ensuring changes are committed or rolled back appropriately.
15 .How would you handle file uploads in FastAPI?
FastAPI provides a simple way to handle file uploads using the File and UploadFile classes. To upload a file, you would define an endpoint that includes a parameter of type UploadFile. This parameter will be treated as a “form data” parameter.

Here’s a basic example :
from fastapi import FastAPI, UploadFile, File
app = FastAPI()
@app.post("/files/")
async def create_file(file: UploadFile = File(...)):
    return {"filename": file.filename}?

In this code, file: UploadFile = File(...) declares a new parameter of type UploadFile. The File function is a “special function” used to declare it.

The uploaded file is stored in memory up to a limit, and then passed to a temporary file stored on disk. You can access the file with .file, get metadata like filename or content type with .filename and .content_type.
16 .How would you implement rate limiting in FastAPI?
Rate limiting in FastAPI can be implemented using a middleware, such as SlowApi. This is an ASGI middleware for rate limiting based on the standard Python library ratelimit. To use it, you need to install SlowApi and its dependencies, then import and add it to your FastAPI application.

Here’s a basic example :
from slowapi import Limiter, _rate_limit_exceeded_handler
from slowapi.util import get_remote_address
limiter = Limiter(key_func=get_remote_address)
app.state.limiter = limiter
app.add_exception_handler(RateLimitExceeded, _rate_limit_exceeded_handler)
@app.get("/home", dependencies=[Depends(limiter.limit("5/minute"))])
async def home(request: Request):
    return {"Hello": "World"}?

In this code, we’re setting a limit of 5 requests per minute for the “/home” endpoint. The key_func parameter determines how to identify different clients, here we’re using the client’s IP address.
17 .What is the purpose of the BackgroundTasks class in FastAPI?
The BackgroundTasks class in FastAPI is used to schedule background tasks that should be executed after a response has been sent to the client. This allows you to perform non-blocking or time-consuming operations without delaying the response to the client.

The purpose of the BackgroundTasks class can be summarized as follows :

Non-blocking Operations : When handling a request, there are situations where you want to perform additional operations in the background without blocking the response to the client. For example, you might want to log information, send emails, or perform other tasks that do not need to be completed before responding to the client.


Usage in Route Functions : In a FastAPI route function, you can declare a parameter of type BackgroundTasks. FastAPI will automatically create an instance of the BackgroundTasks class and inject it into your route function.
from fastapi import FastAPI, BackgroundTasks

app = FastAPI()

def write_log(message: str):
    # Simulate a time-consuming task (e.g., writing to a log file)
    with open("log.txt", mode="a") as log:
        log.write(message)

@app.post("/send-notification/{email}")
async def send_notification(email: str, background_tasks: BackgroundTasks):
    message = f"message to {email}"
    background_tasks.add_task(write_log, message)
    return {"message": "Message sent in the background"}?

In this example, the send_notification route function takes an email parameter and a background_tasks parameter of type BackgroundTasks. The function sends a message and schedules the write_log function to run in the background.

Adding Tasks to the Background : You can add tasks to the background using the add_task method of the BackgroundTasks instance. Each task added will be executed asynchronously after the response has been sent to the client.


Execution After Response : The tasks scheduled with BackgroundTasks are executed in the order they are added, and they are executed after the response to the client has been sent. This ensures that the client receives a quick response, and any additional, potentially time-consuming tasks are performed in the background.


Here's an overview of how it works :
from fastapi import FastAPI, BackgroundTasks

app = FastAPI()

def write_log(message: str):
    with open("log.txt", mode="a") as log:
        log.write(message)

@app.post("/send-notification/{email}")
async def send_notification(email: str, background_tasks: BackgroundTasks):
    message = f"message to {email}"
    background_tasks.add_task(write_log, message)
    return {"message": "Message sent in the background"}?

In this example, when a POST request is made to /send-notification/{email}, the response is sent immediately with the message "Message sent in the background", and the write_log function is executed in the background to write to a log file. This ensures a responsive API while still allowing for additional background processing.
18 .Can you explain how you would set up unit tests for a FastAPI application?
To set up unit tests for a FastAPI application, you would first install pytest and requests libraries. Then, create a test file in your project directory named ‘test_main.py’. In this file, import the necessary modules including FastAPI’s TestClient, pytest, and your main app.


Next, instantiate the TestClient with your FastAPI application as an argument. This client will be used to simulate HTTP requests in your tests.

For each endpoint in your application, write a function that sends a request to it using the TestClient and checks the response. Use pytest’s assert statements to verify the status code, headers, and body of the response match what is expected.

Remember to isolate each test case by mocking external dependencies and resetting any changes made during the test. Pytest fixtures can help manage setup and teardown tasks.
19 .Could you demonstrate a case where you would prefer to use HTTP protocol directly instead of FastAPI's dependency injection?
FastAPI’s dependency injection system is highly efficient for managing dependencies and reducing code repetition. However, there are cases where using HTTP protocol directly might be preferred. One such case could be when dealing with low-level network operations or custom protocols.



For instance, if we need to implement a WebSocket server that communicates via a specific binary protocol, FastAPI’s dependency injection may not provide the necessary control over the raw data stream. In this scenario, it would be more appropriate to use an ASGI server like Uvicorn or Hypercorn directly along with Python’s built-in asyncio library for handling asynchronous I/O operations.

Here’s a simplified example of how you might set up a WebSocket server using Uvicorn:
import uvicorn
from starlette.websockets import WebSocket
async def app(scope, receive, send):
    websocket = WebSocket(scope, receive, send)
    await websocket.accept()
    while True:
        data = await websocket.receive_text()
        # Process data here...
        await websocket.send_text(f"Processed: {data}")
if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1", port=8000)?

In this example, we have direct access to the incoming data stream and can process it as needed without any abstraction layers introduced by FastAPI’s dependency injection system.
20 .How does FastAPI handle serialization and validation of data?
FastAPI uses Pydantic for data serialization and validation. Pydantic models define the shape of incoming or outgoing data, ensuring type correctness. When a request is received, FastAPI validates the data against the model’s schema using Python’s built-in typing system.

If the data doesn’t match the schema, FastAPI automatically sends an error response detailing the issue. For valid data, it serializes into JSON format for HTTP responses. This process also works in reverse for incoming JSON data, deserializing it into Python objects.
21 .Explain the concept of routers in FastAPI.
In FastAPI, routers are a way to organize and modularize your API by grouping related endpoints together. Routers allow you to create separate sets of routes that are logically grouped based on their functionality. This helps in maintaining a clean and organized codebase, making it easier to manage and scale your FastAPI application.

Here are key concepts related to routers in FastAPI:

Creating a Router : You create a router using the APIRouter class from FastAPI. This class allows you to define routes, dependencies, and other aspects of your API within a specific router instance.
from fastapi import APIRouter

router = APIRouter()?

Defining Routes in a Router : You can define routes within a router using the same decorators (@app.get, @app.post, etc.) that you use at the application level. The difference is that you use the decorators on the router instance instead of the main FastAPI application instance.
@router.get("/items/")
def read_items():
    return {"message": "Read items"}?

Mounting a Router : To include a router in your main FastAPI application, you use the app.include_router method. This mounts the routes defined in the router to a specific path in the application.
from fastapi import FastAPI

app = FastAPI()

app.include_router(router, prefix="/v1")?

In this example, all routes defined in the router will be accessible under the /v1 path.

Dependency Injection in Routers : Routers support dependency injection in the same way as route functions. You can define dependencies within a router, and FastAPI will handle the injection of dependencies when processing requests to routes in that router.
from fastapi import APIRouter, Depends

router = APIRouter()

def get_db():
    # Function to get a database connection
    # ...

@router.get("/items/")
def read_items(db: Session = Depends(get_db)):
    return {"message": "Read items"}?

Organizing Code : Routers help in organizing your code by allowing you to group related endpoints together. This is particularly useful as your application grows, and you have multiple sets of functionalities.

Sub-routers : You can create sub-routers by instantiating additional APIRouter instances within a router. This allows for hierarchical organization of routes within your application.
from fastapi import APIRouter

parent_router = APIRouter()
child_router = APIRouter()

@parent_router.get("/parent/")
def parent_route():
    return {"message": "Parent route"}

@child_router.get("/child/")
def child_route():
    return {"message": "Child route"}

parent_router.include_router(child_router, prefix="/child")?

In this example, the /child/ route is a sub-route of the /parent/ route.

Using routers helps in creating modular and maintainable APIs by allowing you to separate concerns and organize your code in a structured manner. It's especially useful when building larger applications with multiple sets of functionality.
22 .What are the advantages of using FastAPI over Django for building APIs?
Both FastAPI and Django are powerful Python web frameworks, but they have different design philosophies and are suited for different use cases. Here are some advantages of using FastAPI over Django for building APIs:

* Performance : FastAPI is designed to be high-performance, leveraging asynchronous programming to handle a large number of concurrent requests efficiently. This makes it well-suited for applications with high performance requirements. Django, while powerful, may have more overhead and is traditionally synchronous.

* Automatic API Documentation : FastAPI automatically generates interactive API documentation based on the Python type hints used in the code. This documentation is accessible through Swagger UI and ReDoc, providing developers with an easy way to understand and test the API. Django requires additional tools or manual documentation efforts.

* Type Hints and Validation : FastAPI uses Python type hints for request and response validation. This not only helps in catching errors early in the development process but also improves code readability. Django typically relies on serializers and forms for data validation.

* Asynchronous Support : FastAPI fully supports asynchronous programming, allowing you to write asynchronous routes and take advantage of the performance benefits of asynchronous I/O operations. Django supports asynchronous views as of version 3.1, but its core design is synchronous.

* Dependency Injection System : FastAPI has a built-in dependency injection system that makes it easy to manage and inject dependencies in a clean and organized way. Django, while having support for dependency injection, may not have it as seamlessly integrated as FastAPI.

* Minimal Boilerplate Code : FastAPI reduces the amount of boilerplate code required to build APIs, especially with automatic data validation and documentation. This can lead to faster development cycles and cleaner, more maintainable code.

* WebSocket Support : FastAPI has built-in support for handling WebSocket communication, enabling real-time bidirectional communication between clients and the server. Django channels provides WebSocket support for Django but may involve additional configuration and setup.

* Single-File Mode : FastAPI supports a "single-file" mode, allowing you to define routes directly in the main application file without the need for separate views, serializers, and other components. This can be convenient for small projects or quick prototyping.

* Simplicity and Explicitness : FastAPI is designed to be simple, explicit, and easy to use. It encourages the use of Python type hints and follows the principle of least surprise. Django, being a full-fledged web framework, may come with more features and abstractions, which could be overkill for API-focused projects.

* No ORM (Object-Relational Mapping) : FastAPI does not come with its own ORM. While Django's ORM is powerful and feature-rich, in certain scenarios, using an ORM may be unnecessary or overcomplicated for API-only projects. FastAPI allows developers to choose their preferred database tools.
23 .What is UTF8JSONResponse?
UTF8JSONResponse is a class used in FastAPI to return responses that are encoded in UTF-8 and formatted as JSON. This is useful for APIs that need to support international characters, as UTF-8 is a widely used encoding that can represent most languages.
24 .What are OpenAPI specifications and why are they important?
OpenAPI specifications are important because they provide a standard, language-agnostic way of describing REST APIs. This allows developers to more easily understand how an API works, and also allows for tools to be built that can automatically generate code or documentation based on the OpenAPI specification.
25 .Do clients need to support JSON schema or OpenAPI specifications to interact with your API?
No, clients do not need to support JSON schema or OpenAPI specifications to interact with your API. However, doing so would certainly make things easier, as it would allow them to automatically generate code to interact with your API.
26 .What are some common error codes returned by FastAPI?
Some common error codes that may be returned by FastAPI include :

-400 : Bad Request
-401 : Unauthorized
-403 : Forbidden
-404 : Not Found
-405 : Method Not Allowed
-500 : Internal Server Error
27 .Explain the difference between path parameters and query parameters in FastAPI.
In FastAPI, both path parameters and query parameters are used to extract information from the URL, but they serve different purposes and have distinct syntax. Here's an explanation of the differences between path parameters and query parameters:

Path Parameters :

1. Positional in the URL :  Path parameters are part of the URL path itself and are specified by enclosing them in curly braces {} within the route path. They are positional and must be included in the order they appear in the route definition.
from fastapi import FastAPI

app = FastAPI()

@app.get("/items/{item_id}")
def read_item(item_id: int):
    return {"item_id": item_id}?

In this example, the item_id is a path parameter that is part of the URL path /items/{item_id}.


2. Required by Default : Path parameters are required by default. If a path parameter is defined in the route, it must be provided in the URL, and its type is automatically validated based on the type hint in the route function.


Query Parameters :

1. Appended to the URL : Query parameters are appended to the URL after a question mark ? and are usually in the form of key=value pairs. They are optional and can be provided in any order.
from fastapi import FastAPI

app = FastAPI()

@app.get("/items/")
def read_item(query_param: str):
    return {"query_param": query_param}?

In this example, query_param is a query parameter that can be provided in the URL, e.g., /items/?query_param=value.

2. Optional and Specified with Defaults : Query parameters are optional by default. You can provide default values for query parameters in the route function to indicate a default value if the parameter is not provided in the URL.
from fastapi import FastAPI

app = FastAPI()

@app.get("/items/")
def read_item(query_param: str = "default_value"):
    return {"query_param": query_param}?

If the client does not provide a value for query_param, the default value "default_value" will be used.

Example :
from fastapi import FastAPI

app = FastAPI()

# Path parameter
@app.get("/items/{item_id}")
def read_item_by_id(item_id: int):
    return {"item_id": item_id}

# Query parameter with a default value
@app.get("/items/")
def read_items_with_query_param(query_param: str = "default_value"):
    return {"query_param": query_param}?

In the example above, /items/{item_id} expects a path parameter (item_id) in the URL path, while /items/ expects an optional query parameter (query_param) with a default value.
28 .Can you describe how you would handle CORS (Cross-Origin Resource Sharing) in FastAPI?
FastAPI has a built-in middleware for managing CORS, which can be added to the application instance. To enable it, import CORSMiddleware from fastapi.middleware.cors and add it to your FastAPI app using the .add_middleware() method. You need to specify parameters like allow_origins (a list of origins that are allowed), allow_credentials (whether cookies can be supported), allow_methods (HTTP methods allowed), and allow_headers (which HTTP headers are permitted). Here’s an example:
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
app = FastAPI()
origins = ["http://localhost:3000"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
@app.get("/")
async def main():
    return {"message": "Hello World"}?
29 .What features does FastAPI provide for form handling?
FastAPI provides robust form handling features. It uses Python type hints to validate incoming data, ensuring that it matches the expected format. This includes checking for required fields and validating field types. FastAPI also supports nested models for complex forms with sub-forms or lists of sub-forms.

Additionally, it allows for custom validation using Pydantic’s @validator decorator, enabling more complex checks beyond simple type validation. Furthermore, FastAPI can automatically generate interactive documentation for your API including form parameters, making it easier for users to understand how to interact with your endpoints.
30 .How can you serve static files with FastAPI?
FastAPI can serve static files using the StaticFiles class from starlette.staticfiles. First, import FastAPI and StaticFiles from fastapi and starlette.staticfiles respectively. Then create an instance of FastAPI and mount a new instance of StaticFiles to it. The directory parameter in StaticFiles should point to your static files’ location. For example :
from fastapi import FastAPI
from starlette.staticfiles import StaticFiles
app = FastAPI()
app.mount("/static", StaticFiles(directory="static"), name="static")?

In this code, “/static” is the path where your app will look for static files. “directory” is the folder with your static files.
31 .How would you deploy a FastAPI application to a production environment?
FastAPI deployment involves several steps. First, develop the FastAPI application locally and ensure it’s functioning as expected. Next, containerize your app using Docker for consistency across environments. Create a Dockerfile in your project directory that includes instructions to build an image of your app.

Here is a basic example :
FROM tiangolo/uvicorn-gunicorn-fastapi:python3.7
COPY ./app /app?

Then, build the Docker image with docker build -t myimage . and run it with docker run -d --name mycontainer -p 80:80 myimage.

For production, consider deploying on a cloud platform like AWS or Google Cloud. Use their respective services (ECS/Fargate for AWS, Kubernetes Engine for GCP) to manage your containers. Ensure you have set up proper logging and monitoring for your deployed application.
32 .Discuss the role of middleware in FastAPI.
Middleware in FastAPI plays a crucial role in request and response handling, allowing you to perform additional processing before and after route execution. Middleware functions intercept incoming requests and outgoing responses, providing a way to modify or augment them as they pass through the application.

Here's a discussion on the role and functionality of middleware in FastAPI:

1. Request Middleware :

* Pre-Processing Requests : Request middleware functions are executed before the route handler functions. They can inspect, modify, or validate incoming requests before they are passed to the corresponding route.

* Authentication and Authorization : Middleware can handle authentication and authorization tasks by validating tokens, checking user permissions, or enforcing access controls before allowing access to protected routes.

* Logging and Metrics : Middleware functions can log incoming requests, capture request metrics, or perform any other pre-processing tasks such as rate limiting or request filtering.


2. Response Middleware :

* Post-Processing Responses : Response middleware functions are executed after the route handler functions. They can modify or augment the response data generated by the route handlers before sending it back to the client.

* Error Handling : Middleware can handle errors and exceptions that occur during route execution, allowing you to customize error responses or perform additional error logging or recovery actions.

* Response Compression or Transformation : Middleware can compress response payloads, transform response data into different formats (e.g., JSON to XML), or add additional headers or metadata to the response before it's sent back to the client.

3. Implementing Middleware in FastAPI :

* Using Request and Response Hooks :  FastAPI provides hooks for registering middleware functions that are executed before and after route handlers. You can use the app.middleware decorator to register middleware functions for request and response processing.

* Custom Middleware Classes : You can implement custom middleware classes by subclassing starlette.middleware.base.BaseHTTPMiddleware. This gives you more control over the middleware behavior and allows for more complex middleware logic.

Example :
from fastapi import FastAPI, Request, Response
from starlette.middleware.base import BaseHTTPMiddleware

app = FastAPI()

class CustomMiddleware(BaseHTTPMiddleware):
    async def dispatch(self, request: Request, call_next):
        # Pre-processing logic
        # e.g., Authentication, Logging, Metrics

        response = await call_next(request)

        # Post-processing logic
        # e.g., Error Handling, Response Transformation

        return response

app.add_middleware(CustomMiddleware)?

In this example, CustomMiddleware is a custom middleware class that subclasses BaseHTTPMiddleware. The dispatch method intercepts incoming requests and outgoing responses, allowing you to perform pre-processing and post-processing tasks as needed.
33 .How do FastAPI�s response models work and what benefits do they provide?
FastAPI’s response models are Python classes that define the structure and data types of HTTP responses. They leverage Pydantic for data validation, serialization, and documentation. When a route function returns a Pydantic model, FastAPI automatically converts it into JSON, checks the data against the model’s schema, and generates an OpenAPI schema.

The benefits include :

1. Data Validation : Ensures only valid data is returned.

2. Serialization : Converts complex data types to JSON.

3. Documentation : Auto-generates API docs based on the model.

4. Code Reusability : Models can be reused across different routes.

5. Error Handling : Automatically handles errors when data doesn’t match the model.
34 .How does FastAPI integrate with GraphQL?
FastAPI integrates with GraphQL through third-party libraries that provide GraphQL support. One of the popular libraries for integrating GraphQL with FastAPI is tartiflette. Here's an overview of how you can use tartiflette to add GraphQL support to your FastAPI application:

1. Install Dependencies : You need to install the tartiflette library along with the aiohttp adapter to integrate it with FastAPI.
pip install tartiflette[aiohttp] uvicorn fastapi?

2. Define GraphQL Schema : Define your GraphQL schema using the GraphQL Schema Definition Language (SDL) or Python code. You can define your schema in a separate module or directly in your FastAPI application.
# schema.graphql
"""
type Query {
    hello: String!
}
"""

# schema.py
from tartiflette import Resolver, create_engine

@Resolver("Query.hello")
async def resolve_hello(parent, args, context, info):
    return "Hello, World!"?

3. Create FastAPI Application : Create a FastAPI application and mount the GraphQL endpoint using tartiflette. Use the TartifletteApp class provided by tartiflette.
from fastapi import FastAPI
from tartiflette import Engine
from schema import schema

app = FastAPI()

@app.post("/graphql")
async def graphql(request: Request):
    engine = Engine(schema)
    return await engine.handle_graphql_request(request)?
4. Run the Application : Run the FastAPI application using uvicorn.
uvicorn main:app --reload?

5. Access the GraphQL API : You can now access your GraphQL API by sending POST requests to the /graphql endpoint.
curl -X POST -H "Content-Type: application/json" -d '{"query": "{ hello }"}' http://localhost:8000/graphql?


Additional Considerations :

* Authentication and Authorization : You may need to implement authentication and authorization mechanisms separately in your FastAPI application and integrate them with your GraphQL resolvers as needed.

* Error Handling : FastAPI provides robust error handling capabilities, but you may need to handle GraphQL-specific errors within your resolver functions.

* Performance and Scalability : Consider performance and scalability implications when designing and implementing your GraphQL API, especially if you expect high traffic or complex query patterns.

* Schema Stitching and Federation : For more complex scenarios, you can use schema stitching or federation techniques to compose multiple GraphQL schemas into a single cohesive API.
35 .What is the purpose of the status_code parameter in FastAPI route functions?
In FastAPI route functions, the status_code parameter is used to specify the HTTP status code to be returned in the response. This parameter allows you to customize the status code returned by your API endpoints based on the outcome of the request processing.

Here's how the status_code parameter is used in FastAPI route functions :

* Default Status Code : By default, FastAPI route functions return a status code of 200 OK for successful responses.


* Customizing Status Code : You can specify a different status code using the status_code parameter in the route function decorator.
from fastapi import FastAPI, status

app = FastAPI()

@app.get("/items/", status_code=status.HTTP_201_CREATED)
def create_item():
    # Logic to create an item
    return {"message": "Item created successfully"}?

In this example, the /items/ endpoint returns a status code of 201 Created instead of the default 200 OK.


* Error Handling : You can use the status_code parameter to specify the appropriate HTTP status code for error responses, such as 404 Not Found, 400 Bad Request, or 500 Internal Server Error.
from fastapi import FastAPI, HTTPException, status

app = FastAPI()

@app.get("/items/{item_id}")
def read_item(item_id: int):
    # Logic to retrieve item from database
    item = ...

    if not item:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Item not found")

    return item?

In this example, if the requested item is not found, the route function raises an HTTPException with a status code of 404 Not Found.

* Semantic Meaning : Specifying the appropriate status code enhances the semantic meaning of your API endpoints and communicates the outcome of the request to the client in a standardized way.

Using the status_code parameter in FastAPI route functions allows you to customize the HTTP status codes returned by your API endpoints, providing clear and consistent communication of the request outcomes to clients.
36 .How does FastAPI handle cookies and sessions?
FastAPI doesn’t directly handle cookies and sessions, but it can be integrated with Starlette’s SessionMiddleware for this purpose. To use cookies, FastAPI has a ‘cookies’ parameter in path operation functions.

You declare the cookie name as a string argument to receive its value. For sessions, you add SessionMiddleware to your application, providing a secret key. This middleware uses signed cookies to store session data client-side. The data is cryptographically signed but not encrypted, so user can see contents but cannot modify them without invalidating signature.
37 .What are some of the security features provided by FastAPI and how can they be utilized?
FastAPI provides several security features. It supports OAuth2 with Password and Bearer, a standard for user authentication, allowing secure access to resources. This is achieved by using Python-Jose to encrypt and verify tokens. FastAPI also offers HTTPBasicAuth for simpler cases where username and password are required.

Another feature is the automatic generation of interactive API documentation with login functionality. This allows users to authenticate directly from their browser while testing endpoints.

FastAPI’s dependency system can be used to manage permissions effectively. By creating dependencies for different routes or groups of routes, you can control who has access to what data.

FastAPI also protects against common vulnerabilities like Cross-Site Scripting (XSS) and SQL Injection attacks by default. It uses Pydantic models which automatically validate incoming JSON requests, preventing malicious code from being executed.
38 .How can FastAPI be used with async and await, and what benefits does this provide?
FastAPI supports asynchronous request handling through Python’s async and await keywords. This allows for concurrent processing of requests, improving application performance. When a FastAPI route is defined with an async function, it becomes a coroutine that can be paused and resumed, allowing other tasks to run in the meantime.

For instance :
from fastapi import FastAPI
app = FastAPI()
@app.get("/")
async def read_root():
    return {"Hello": "World"}?

In this example, read_root is an asynchronous function. If it calls another async function with await, execution returns to the event loop, freeing up resources until the awaited function completes.

This non-blocking nature of async I/O operations means your app can handle more requests with fewer resources, as idle time waiting for I/O (like network or disk access) can be used to serve other requests. It also simplifies code by avoiding callback hell or threading complexities, making it easier to write and maintain.
39 .Discuss the role of the security parameter in FastAPI route functions.
In FastAPI, the security parameter in route functions is used to define security requirements for accessing the endpoint. It allows you to specify authentication and authorization mechanisms required to access the route. The security parameter is a list of security requirements, where each requirement can be a dependency or a security scheme.

Here's a detailed discussion on the role of the security parameter in FastAPI route functions:

1. Authentication and Authorization :

* Authentication Schemes : You can specify one or more authentication schemes required to authenticate the client making the request. Common authentication schemes include OAuth2, JWT (JSON Web Tokens), HTTP Basic Authentication, etc.

* Authorization Dependencies : The security requirements can include dependencies that handle user authentication and authorization. These dependencies can validate tokens, check user roles or permissions, and enforce access controls.

2. Defining Security Requirements :

* Security Schemes : FastAPI supports various security schemes, such as OAuth2PasswordBearer, OAuth2PasswordRequestForm, APIKey, HTTPBearer, etc. These schemes can be used as security requirements in the security parameter.

* Custom Dependencies : You can define custom dependencies that handle authentication and authorization logic according to your application's requirements. These dependencies can be reused across multiple routes to enforce consistent security policies.


3. Role-based Access Control :

* Role-based Requirements : You can specify security requirements based on user roles or permissions. For example, you may require certain routes to be accessible only to users with specific roles, such as administrators or moderators.
40 .How does FastAPI support automatic API documentation generation?
FastAPI supports automatic API documentation generation using the OpenAPI standard. OpenAPI is a specification for building and documenting APIs, and FastAPI leverages this specification to automatically generate interactive API documentation. Here's how FastAPI achieves automatic API documentation generation:

1. Pydantic Models : FastAPI uses Pydantic models to define request and response data structures. These models include type hints and validation rules, which serve as the basis for generating documentation.
from pydantic import BaseModel

class Item(BaseModel):
    name: str
    description: str = None
    price: float
    tax: float = None?


2. Route Decorators : FastAPI uses route decorators (@app.get, @app.post, etc.) to define API endpoints. These decorators include metadata such as route paths, parameter types, and response models, which are used for documentation generation.
from fastapi import FastAPI

app = FastAPI()

@app.post("/items/")
def create_item(item: Item):
    return item?


3. Automatic Documentation Generation : FastAPI automatically generates interactive API documentation based on the defined routes, request and response models, and other metadata. The generated documentation includes detailed information about each endpoint, including route paths, HTTP methods, request parameters, response models, and example usage.

4. Swagger UI and ReDoc : FastAPI provides built-in support for Swagger UI and ReDoc, which are popular tools for viewing and interacting with OpenAPI documentation. When you run your FastAPI application and navigate to /docs or /redoc endpoints in your browser, you will see the automatically generated API documentation.


5. OpenAPI Schema : FastAPI generates an OpenAPI schema (formerly known as Swagger schema) based on the defined routes and models. This schema is a machine-readable JSON document that describes the API endpoints, request and response models, and other details required for documentation.

Example :
from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class Item(BaseModel):
    name: str
    description: str = None
    price: float
    tax: float = None

@app.post("/items/")
def create_item(item: Item):
    return item?

When you run this FastAPI application and navigate to http://localhost:8000/docs in your browser, you will see the automatically generated API documentation with interactive features for testing endpoints.



Разница FastAPI между `json.dumps()` и `JSONResponse()`
Вопросы
PYTHON
Разница FastAPI между `json.dumps()` и `JSONResponse()`
Я изучаю FastAPI, и он работает на моем рабочем столе Docker в Windows. Вот мой main.py, который успешно развернут в Docker:

#main.py
import fastapi
import json
from fastapi.responses import JSONResponse

app = fastapi.FastAPI()

@app.get('/api/get_weights1')
async def get_weights1():
    weights = {'aa': 10, 'bb': 20}
    return json.dumps(weights)

@app.get('/api/get_weights2')
async def get_weights2():
    weights = {'aa': 10, 'bb': 20}
    return JSONResponse(content=weights, status_code=200)
И у меня есть простой файл Python get_weights.py для запросов к этим двум API:

#get_weights.py
import requests
import json

resp = requests.get('http://127.0.0.1:8000/api/get_weights1')
print('ok', resp.status_code)
if resp.status_code == 200:
    print(resp.json())

resp = requests.get('http://127.0.0.1:8000/api/get_weights2')
print('ok', resp.status_code)
if resp.status_code == 200:
    print(resp.json())
Я получаю одинаковые ответы от двух API, вывод:

ok 200
{"aa": 10, "bb": 20}
ok 200
{'aa': 10, 'bb': 20}
Ответ кажется одинаковым, использую ли я json.dumps() или JSONResponse(). Я прочитал документацию FastAPI по JSONResponse, но у меня остались следующие вопросы:

Могу ли я узнать, есть ли разница между двумя методами?

Если есть разница, какой метод рекомендуется (и почему?)?

Подводя итог: не используйте ни то, ни другое, просто верните объект, похожий на словарь, или с помощью orm_mode=True в вашей модели ответа объект, который поддерживает поиск атрибутов (например, строку SQLAlchemy). Используйте response_model в декораторе маршрута или укажите тип возвращаемого значения для функции, которая определяет, как вы хотите сериализовать ответ.

Top 33 FastAPI Interview Questions and Answers 2026
Editorial Team

Career
FastAPI Interview Questions and Answers
FastAPI has quickly become a go-to framework for building high-performance, scalable web applications with Python. Its emphasis on speed, ease of use, and automatic validation has made it a popular choice among developers looking to efficiently deploy robust APIs. As the demand for FastAPI expertise grows in the technology sector, understanding its core principles and functionalities can significantly enhance your career prospects.

Preparing for an interview that covers FastAPI requires a solid grasp of its features, best practices, and common use cases. This collection of the top 33 FastAPI interview questions and answers is designed to help you articulate your knowledge and experience with the framework. Whether you’re a seasoned developer or new to the world of FastAPI, these insights will help you approach your next interview with confidence.

FastAPI Interview Preparation Tips
Focus Area	Details	Tips
Understanding FastAPI	FastAPI is a modern, fast (high-performance) web framework for building APIs with Python 3.7+ based on standard Python type hints.	Make sure you are comfortable with Python, especially with async features and type hints. Study the official FastAPI documentation.
ASGI	FastAPI is built on top of Starlette for the web parts and uses Pydantic for the data parts. It’s an ASGI framework.	Understand ASGI (Asynchronous Server Gateway Interface) and its differences from WSGI.
API Design	Designing APIs with FastAPI, including path operations, query parameters, body requests, and response models.	Practice designing simple APIs. Learn how to use Pydantic models for request and response data.
Authentication & Security	FastAPI provides several tools and mechanisms to secure your application, such as OAuth2 with Password (and hashing), JWT tokens, and others.	Understand OAuth2 flow, how JWT tokens are used in FastAPI, and how to implement security schemes.
Database Integration	Integrating databases with FastAPI applications, using ORMs like SQLAlchemy or data access libraries like databases for async support.	Get familiar with async database libraries and how to use them in FastAPI for CRUD operations.
Dependency Injection	FastAPI supports dependency injection as a way to provide shared logic (like database session management) and data (like current user) across path operations.	Learn how to use dependencies for various scopes and how to override them for testing.
Testing FastAPI Applications	Testing is crucial for any application. FastAPI provides tools for testing with Pytest.	Learn how to write tests for API endpoints, including how to use TestClient for test requests.
Performance & Scaling	Understanding how to monitor, analyze, and improve the performance of FastAPI applications. Knowledge about deploying and scaling FastAPI apps.	Explore profiling tools, async features, and deployment options like Docker that help in scaling.
Each of these focus areas is critical for preparing for a FastAPI interview. Dive deep into the official FastAPI documentation, build sample projects, and practice writing tests to strengthen your understanding and skills.

1. What Is FastAPI, and What Are Its Key Features?
Tips to Answer:

Focus on explaining FastAPI as a modern, fast (high-performance) web framework for building APIs with Python 3.7+ based on standard Python type hints.
Highlight a few key features like automatic API documentation, data validation, and asynchronous support, which demonstrate its efficiency and ease of use.
Sample Answer: FastAPI is a contemporary web framework designed to create APIs with Python 3.7 or newer, emphasizing speed and rapid development. One of its standout features is the automatic generation of interactive API documentation using Swagger UI and ReDoc, making it incredibly user-friendly for both developers and end-users. Additionally, it leverages Python type hints for data validation, ensuring that the data exchanged through your API meets your specifications. This not only helps in catching errors early but also significantly simplifies the codebase by reducing boilerplate for input serialization and validation. FastAPI supports asynchronous request handling out of the box, allowing for scalable and high-performing applications by efficiently managing long-running operations and high-load situations. This blend of performance, ease of use, and robust functionality makes FastAPI a highly appealing choice for modern web API development.

2. How Does FastAPI Handle Request Validation?
Tips to Answer:

Highlight FastAPI’s built-in request validation capabilities, emphasizing its use of Pydantic models for schema definition and automatic validation.
Mention the benefits of having automatic documentation that reflects these validation schemas, streamlining the development and integration process.
Sample Answer: In FastAPI, request validation is seamlessly managed through the use of Pydantic models. When defining an endpoint, I specify the expected request body by referencing a Pydantic model. This model outlines the structure, types, and even validation constraints for the data. FastAPI then automatically validates incoming requests against this model before the request even reaches my endpoint logic. If the request data does not conform to the defined schema, FastAPI automatically returns a detailed error response, indicating exactly what was wrong. This not only ensures that my application receives data in the expected format but also significantly reduces the amount of manual validation code I need to write. The integration of these models with FastAPI’s automatic documentation means that the expected request format is clearly communicated to anyone using the API, further smoothing the development process.

3. What Is Dependency Injection In FastAPI?
Tips to Answer:

Discuss how FastAPI’s dependency injection system simplifies the development of complex web applications by promoting reusable and maintainable code.
Highlight the benefits of using dependency injection, such as easier testing and the ability to share common logic across different parts of the application.
Sample Answer: In FastAPI, dependency injection is a powerful feature that allows me to declare and manage dependencies independently from my path operation functions. This means I can use functions, database sessions, or other objects across my application without directly coupling them to my endpoint logic. By specifying dependencies in my path operation decorators, FastAPI takes care of providing the required elements when a request is processed. This approach not only makes my code cleaner and more modular but also significantly eases the testing process. I can easily swap out real dependencies with mocks or fakes during testing, ensuring that my tests are fast and reliable. Dependency injection in FastAPI has been instrumental in developing scalable and efficient web services, as it allows me to reuse common functionality and ensure my application remains easy to maintain as it grows.

4. How Does FastAPI Handle Asynchronous Programming?
Tips to Answer:

Emphasize FastAPI’s built-in support for asynchronous request handling, highlighting how this can improve the efficiency of web applications by allowing them to process multiple requests simultaneously.
Mention specific examples or features, such as the use of async and await keywords, to illustrate how FastAPI facilitates asynchronous programming.
Sample Answer: In FastAPI, asynchronous programming is a core feature that significantly enhances the performance of web applications. By integrating seamlessly with Python’s asyncio library, FastAPI allows me to write asynchronous code using the async and await syntax. This approach enables the server to handle multiple requests at the same time without waiting for one to complete before starting another. Consequently, my web applications become more scalable and responsive. Implementing asynchronous database calls, background tasks, or even interacting with external APIs becomes straightforward with FastAPI, ensuring that I can optimize I/O-bound operations efficiently.

5. How Does FastAPI Generate Interactive API Documentation?
Tips to Answer:

Highlight the automatic generation of documentation and its benefits for both developers and users.
Explain the role of OpenAPI and how FastAPI leverages it to create and customize the interactive API docs.
Sample Answer: FastAPI automatically generates interactive API documentation using OpenAPI specifications. This feature is incredibly beneficial as it offers a web interface where developers and users can see all the available endpoints, their expected request formats, and even try them out in real-time. The documentation is updated dynamically with every change in the code, ensuring it always reflects the most current state of the API. By leveraging OpenAPI, FastAPI allows for easy customization of the documentation, enabling me to tailor it to meet the specific needs of my projects and make it more user-friendly. This auto-generated documentation significantly streamlines the development process, fosters collaboration, and enhances the overall usability of the API.

6. How Can You Handle Cross-Origin Resource Sharing (CORS) in FastAPI?
Tips to Answer:

Highlight the importance of CORS for web application security and how FastAPI simplifies its management.
Discuss the use of FastAPI’s CORSMiddleware and how to configure it effectively for different scenarios.
Sample Answer: In my projects, I’ve found handling Cross-Origin Resource Sharing (CORS) pivotal for allowing my web applications to securely request resources from different origins. FastAPI makes this process straightforward with the CORSMiddleware from the fastapi.middleware.cors module. I usually start by importing CORSMiddleware and then add it to my application, specifying the origins allowed to communicate with the API. This setup involves defining a list of origins, or using ["*"] to allow all origins, which I only recommend for development. I also configure which methods and headers are allowed, and whether credentials are supported. This flexibility lets me tailor CORS settings to meet my application’s security and functionality requirements.

7. Does FastAPI Support Database Integration?
Tips to Answer:

Highlight specific libraries or ORM tools that FastAPI can integrate with for database operations.
Mention personal experience or examples demonstrating how database integration can be achieved in FastAPI projects.
Sample Answer: Yes, FastAPI supports database integration seamlessly. I’ve integrated databases into my FastAPI projects using SQL databases through SQLAlchemy and async ORM tools like Tortoise ORM for asynchronous support. For instance, in a project requiring high-performance data transactions, I utilized SQLAlchemy with Alembic for migrations to manage a PostgreSQL database efficiently. This setup allowed me to leverage FastAPI’s asynchronous capabilities, ensuring non-blocking database operations, which significantly improved the API’s response times. Connecting FastAPI with a database involves defining models, schemas, and database sessions, which are well-documented in FastAPI’s extensive documentation. My experience has shown that this integration not only enhances performance but also simplifies the development process.

8. How to Handle Cross-Origin Resource Sharing (CORS) in FastAPI?
Tips to Answer:

Understand the concept of CORS and why it’s critical for web security. Be ready to explain how CORS works and what problems it solves, especially in a FastAPI context.
Be specific about the steps or code snippets to enable CORS in FastAPI. Knowing the fastapi.middleware.cors module and how to use it effectively can set you apart.
Sample Answer: In FastAPI, handling Cross-Origin Resource Sharing (CORS) is straightforward thanks to built-in middleware. To set it up, I import CORSMiddleware from fastapi.middleware.cors and add it to my FastAPI application. I specify the origins allowed to communicate with my API by setting the allow_origins parameter. This can be a list of specific domains or ["*"] for allowing all. I also configure what resource sharing policies my API should adhere to, including allowed methods and headers. This setup ensures my API can be safely accessed from web applications hosted on different domains, maintaining security while allowing necessary interactions.

9. How to Upload A Large File (≥3GB) to FastAPI Backend?
Tips to Answer:

Mention the use of asynchronous file handling to ensure non-blocking operations.
Highlight the importance of configuring the server for large file sizes and possibly using a streaming approach.
Sample Answer: In handling the upload of large files, such as those over 3GB, to a FastAPI backend, I start by ensuring the server is configured to accept large payloads. This involves adjusting parameters such as request size limits in the FastAPI application and the web server (e.g., Uvicorn or Gunicorn) settings. I use asynchronous file handling within my endpoint to read the incoming file in chunks. This method allows the server to remain responsive, as it doesn’t block other operations while handling the large file. I might also consider a streaming approach, where the file is processed and stored in parts, reducing memory usage and improving the efficiency of the upload process. This strategy is crucial for maintaining the performance and reliability of the application when dealing with large file uploads.

10. How to Post JSON Data From JavaScript Frontend to FastAPI Backend?
Tips to Answer:

Focus on explaining the step-by-step process, starting from the JavaScript code to send the request, and then how to handle it in FastAPI.
Highlight the importance of setting the correct content type in the request headers and parsing JSON data appropriately in FastAPI.
Sample Answer: In my experience, posting JSON data from a JavaScript frontend to a FastAPI backend involves a few crucial steps. On the frontend side, I use the Fetch API or XMLHttpRequest to send data. I ensure to set the Content-Type header to application/json. Here’s a snippet:

fetch('http://example.com/api/data', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({key: 'value'}),
})
On the FastAPI side, I define an endpoint that expects a JSON body. I use Pydantic models to parse and validate the incoming data effortlessly. This approach provides automatic documentation and validation, which significantly simplifies the data handling process:

from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class Item(BaseModel):
    key: str

@app.post("/api/data")
async def create_item(item: Item):
    return {"received": item.key}
This method ensures that the data flow between frontend and backend is smooth and secure.

11. How to Return Data in JSON Format Using FastAPI?
Tips to Answer:

Highlight FastAPI’s built-in support for data serialization and the ease of converting Python objects to JSON.
Mention the use of Pydantic models for data validation and serialization, emphasizing how it automatically converts the output to JSON without extra work from the developer.
Sample Answer: In FastAPI, returning data in JSON format is straightforward thanks to the framework’s automatic serialization. When I define my endpoint, I often use Pydantic models to represent the data structure I want to return. This approach not only helps in validating the incoming request data but also in serializing the response data to JSON effortlessly. For example, when a client hits my endpoint, I process their request, and my function returns a Pydantic model or a list of models. FastAPI takes care of converting these models to JSON. This eliminates the need for manual serialization, making the development process smoother and more efficient.

12. How to Log Raw HTTP Request/Response in Python FastAPI?
Tips to Answer:

Highlight the importance of logging for debugging and monitoring purposes in a FastAPI application.
Mention specific middlewares or libraries that can be utilized for logging HTTP requests and responses.
Sample Answer: In FastAPI, logging raw HTTP requests and responses is crucial for debugging and gaining insights into the application’s performance. I usually implement custom middleware or utilize libraries such as starlette-context which allows logging important details without much hassle.

For instance, I create a middleware that captures incoming requests and outgoing responses, then logs the necessary information like the request path, method, and status code of the response. This approach not only helps in monitoring the application but also aids in quickly pinpointing issues. I ensure that sensitive information is either not logged or properly anonymized to adhere to privacy standards.

13. How to Add Both File and JSON Body in a FastAPI POST Request?
Tips to Answer:

Highlight the importance of using Form and File parameters from FastAPI to handle multipart requests.
Mention the use of Pydantic models for JSON body validation to ensure data integrity and simplify the request handling process.
Sample Answer: In handling a POST request in FastAPI that requires both a file and a JSON body, I start by defining a Pydantic model for the JSON data to leverage FastAPI’s automatic request validation. For the route, I specify parameters for both the file, using File(...), and the JSON body, using Form(...). This approach ensures that the endpoint can receive multipart/form-data requests properly. Here’s a quick example:

from fastapi import FastAPI, File, Form, UploadFile
from pydantic import BaseModel

app = FastAPI()

class Item(BaseModel):
    name: str
    description: str

@app.post("/upload/")
async def upload_file(item: Item = Form(...), file: UploadFile = File(...)):
    return {"filename": file.filename, "item_name": item.name, "description": item.description}
This method enables my API to accurately process incoming requests with both a file and structured JSON data, ensuring efficient and error-free data handling.

14. How to Initialize a Global Object or Variable and Reuse It in Every FastAPI Endpoint?
Tips to Answer:

Illustrate your understanding of Python’s global variables or singleton pattern to maintain state across FastAPI endpoints.
Emphasize the importance of thread safety and how you ensure that the global object’s state is consistent across requests.
Sample Answer: In my projects, I often use a singleton pattern to initialize a global object that I can reuse across all FastAPI endpoints. For instance, if I’m working with a database connection pool, I create a global variable in a separate module. This module is then imported wherever the connection pool is needed. Here’s a basic example:

# db_singleton.py
from some_database_library import ConnectionPool

pool = ConnectionPool()

# main.py
from fastapi import FastAPI
from db_singleton import pool

app = FastAPI()

@app.get("/")
def read_root():
    with pool.get_connection() as conn:
        # Use the connection
        pass
This approach ensures that the object is initialized once and reused, saving resources. I’m always careful to ensure that the global object is thread-safe, using locks if necessary, to maintain consistency across asynchronous requests.

15. Is Having a concurrent.futures.ThreadPoolExecutor Call Dangerous in a FastAPI Endpoint?
Tips to Answer:

Mention the importance of understanding the FastAPI’s asynchronous nature and how ThreadPoolExecutor can affect performance and scalability.
Highlight the need for careful consideration of thread management and potential blocking operations when integrating ThreadPoolExecutor in FastAPI.
Sample Answer: In my experience, using concurrent.futures.ThreadPoolExecutor in a FastAPI endpoint requires caution. FastAPI is designed to work well with asynchronous operations, making it highly efficient and scalable for handling web requests. Introducing ThreadPoolExecutor can be beneficial for offloading blocking IO operations to maintain responsiveness. However, it’s crucial to manage the threads wisely. Excessive use or mismanagement can lead to degraded performance due to context switching and can exhaust server resources, leading to scalability issues. I always ensure to limit the thread pool size according to the server’s capacity and specifically use it for operations that are truly blocking. This approach helps in leveraging the benefits of ThreadPoolExecutor without compromising the efficiency of FastAPI applications.

16. What Is the Proper Way To Make Downstream HTTPS Requests Inside Of Uvicorn/FastAPI?
Tips to Answer:

Ensure to focus on the importance of asynchronous requests when discussing downstream HTTPS requests in a FastAPI application hosted by Uvicorn.
Highlight the use of HTTP client libraries that support asynchronous operations, such as httpx, to maintain the efficiency and speed of your FastAPI application.
Sample Answer: In my experience, making downstream HTTPS requests within a FastAPI app running on Uvicorn requires attention to asynchronous programming. I use httpx, an async HTTP client library, which aligns with FastAPI’s async capabilities. This approach ensures that my application remains non-blocking and responsive, even when handling multiple downstream requests. By leveraging httpx, I can efficiently make HTTPS calls without disrupting the performance of my FastAPI application. It’s crucial to structure these requests correctly to maintain the app’s scalability and speed.

17. How to Upload a File Using FastAPI?
Tips to Answer:

Emphasize your understanding of FastAPI’s built-in support for file uploads, including the use of File and UploadFile types from FastAPI’s fastapi module.
Mention any specific experiences you have with handling file uploads in a FastAPI application, such as validating file types or sizes, or processing uploaded files asynchronously.
Sample Answer: In FastAPI, uploading a file is straightforward thanks to its comprehensive request handling system. When I need to implement a file upload feature, I start by importing File and UploadFile from the fastapi module. I prefer UploadFile because it’s async and saves memory for large files. Here’s a basic example:

from fastapi import FastAPI, File, UploadFile

app = FastAPI()

@app.post("/uploadfile/")
async def create_upload_file(file: UploadFile = File(...)):
    return {"filename": file.filename}
In this setup, the endpoint /uploadfile/ accepts a file upload. UploadFile has several useful attributes and methods, such as filename for the original file name, and it supports asynchronous operations. I ensure to validate the file size or type if needed, usually by checking the file’s content type or using custom validation logic before processing the file further. This method efficiently handles uploads, making them accessible and straightforward to manage in a FastAPI project.

18. How to Sort a Numerical List in Python Using FastAPI?
Tips to Answer:

Focus on demonstrating your understanding of Python’s sort methods and how they can be integrated within a FastAPI endpoint.
Mention the importance of efficient data handling and manipulation in building responsive APIs.
Sample Answer: In FastAPI, sorting a numerical list can be seamlessly integrated within an endpoint. Here’s how I typically handle it. First, I ensure the endpoint receives the list I need to sort. Python’s built-in sorted() function or the .sort() method on lists is my go-to for sorting. For instance, if I receive a list through a POST request, I’d parse the request body, extract the list, and apply sorted(list) to it. This sorted list can then be returned in the response. This approach ensures that my FastAPI endpoints can efficiently handle and manipulate data, providing sorted results wherever necessary.

19. How to Convert a List to a Tuple in FastAPI?
Tips to Answer:

Discuss the simplicity and efficiency of converting lists to tuples in Python, emphasizing its relevance in FastAPI for scenarios where an immutable sequence of values is preferable.
Highlight the significance of choosing the right data structure in FastAPI for enhancing the performance and security of your application, especially when dealing with data that should not be modified.
Sample Answer: In FastAPI, converting a list to a tuple can be a common requirement, especially when I need to ensure the immutability of data being processed. This might be crucial in scenarios where the data is being shared across different parts of the application and should remain unchanged. The process is straightforward in Python; I simply use the tuple() function and pass the list I want to convert as an argument. For example, if I have a list my_list = [1, 2, 3], converting it to a tuple would be as simple as doing my_tuple = tuple(my_list). This method is not only simple but also efficient, making it an excellent practice in FastAPI applications where data integrity and performance are key.

20. How to Achieve Multithreading in Python Using FastAPI?
Tips to Answer:

Highlight your understanding of Python’s threading module and how it can be integrated into FastAPI for asynchronous tasks.
Discuss the importance of thread safety and how to manage it when implementing multithreading in a FastAPI application.
Sample Answer: In FastAPI, I leverage the Python standard library’s threading module to implement multithreading. This allows me to perform multiple operations concurrently, improving the efficiency of my application. To ensure that my FastAPI application can handle multithreading, I pay careful attention to thread safety. This involves using thread-safe data structures and synchronizing access to shared resources to prevent race conditions. By effectively managing threads, I can enhance the responsiveness and throughput of my FastAPI applications, providing a better experience for end-users.

21. How to Remove the Last Object From a List in FastAPI?
Tips to Answer:

Emphasize understanding of Python list operations as FastAPI relies heavily on standard Python features.
Highlight practical experience with manipulating data structures within FastAPI endpoints, demonstrating problem-solving skills in real-world API development.
Sample Answer: In my projects using FastAPI, when I need to remove the last object from a list, I typically use Python’s built-in list methods. For instance, I would use the pop() method without an index, as it defaults to removing the last item of the list. This approach is both efficient and straightforward. Here’s a quick example:

my_list = [1, 2, 3, 4]
my_list.pop()
This snippet effectively removes the last element from my_list, adjusting the list to [1, 2, 3]. This method is particularly useful in FastAPI when processing or manipulating data received from client requests or before sending responses.

22. How to Reverse a List in FastAPI?
Tips to Answer:

Highlight the simplicity and effectiveness of Python’s built-in methods or slices that can be used in FastAPI to manipulate data structures, such as lists.
Emphasize the importance of understanding Python’s core functionalities to efficiently solve common programming tasks within FastAPI applications.
Sample Answer: In FastAPI, when I need to reverse a list, I typically rely on Python’s powerful and concise capabilities. For instance, if I have a list of items that I want to display in the reverse order from how they were inputted or stored, I would use the slice method. Here’s how I do it: reversed_list = my_list[::-1]. This method is not only straightforward but also efficient, as it doesn’t require me to import additional modules or write extensive code. Understanding and utilizing such Python features allow me to handle list manipulations effortlessly in any FastAPI project.

23. How to Generate Random Numbers in FastAPI?
Tips to Answer:

Understand and be able to discuss the Python standard library’s random module and its integration within FastAPI endpoints.
Explain how generating random numbers can be utilized in practical scenarios within FastAPI applications, for example, in token generation or in testing endpoints with random inputs.
Sample Answer: In FastAPI, generating random numbers is an operation that can be achieved by leveraging Python’s built-in random module. When I need to generate a random number within a FastAPI endpoint, I first import the random module. Then, depending on the requirement, I use random.randint() for integers or random.random() for floating-point numbers. For instance, to generate a random token, I might use random.randint(1000, 9999) to get a 4-digit code. This approach is especially useful in scenarios like OTP generation or simulating variable data for testing APIs. It’s a straightforward yet powerful method to introduce variability into our FastAPI applications.

24. What Advantage Do NumPy Arrays Have Over Nested Python Lists In FastAPI?
Tips to Answer:

Highlight the performance and efficiency of NumPy arrays compared to traditional Python lists, especially in the context of FastAPI where processing speed can be critical.
Discuss the importance of using NumPy for data-intensive operations within FastAPI endpoints, emphasizing on its ability to handle large datasets more effectively.
Sample Answer: In the realm of FastAPI, leveraging NumPy arrays instead of nested Python lists provides significant benefits, primarily due to their superior performance and efficiency. When developing FastAPI applications, processing speed is a vital factor, especially when dealing with data-intensive operations. NumPy arrays are specifically designed for numerical computation, offering optimized storage and faster computations compared to Python lists. This efficiency stems from the fact that NumPy arrays store data in a contiguous block of memory, allowing for vectorized operations and reducing the overhead of looping. Furthermore, NumPy arrays support broadcasting and advanced data manipulation techniques, which are indispensable for performing complex mathematical tasks and data analysis within FastAPI endpoints. Utilizing NumPy arrays ensures that my FastAPI applications are not only faster but also more scalable when handling large datasets, thereby enhancing the overall performance and user experience.

25. What Are Decorators in Python in the Context of FastAPI?
Tips to Answer:

Understand the concept of decorators as functions that modify the behavior of other functions or methods without changing their code.
Be able to explain how decorators can be used in FastAPI for tasks like authentication, routing, and response modification.
Sample Answer: In the context of FastAPI, decorators are a powerful feature of Python that allows me to modify or enhance the functionality of functions or methods without directly changing their code. For example, FastAPI uses decorators extensively to simplify API route creation. By using the @app.get() or @app.post() decorators, I can easily define endpoints. Additionally, I can use decorators to enforce authentication on specific endpoints, ensuring that only authenticated users can access certain functions. This makes my code cleaner, more modular, and easier to maintain, as I can reuse and apply common functionalities across different parts of my application.

26. What Are Python Modules And How Are They Used In FastAPI?
Tips to Answer:

Understand and explain the concept of Python modules as reusable pieces of code that can be imported to add functionality to a FastAPI application.
Highlight the importance of modular programming in building scalable and maintainable FastAPI applications.
Sample Answer: In my FastAPI projects, I leverage Python modules extensively to organize my code into manageable, reusable components. Modules in Python are essentially files containing Python definitions and statements. This structure allows me to compartmentalize different aspects of the application, like database models, schemas, utility functions, and service layers. By using modules, I ensure that my FastAPI application remains scalable and easy to maintain. For instance, I typically have a module for handling all database interactions and another module dedicated to business logic. This separation of concerns not only makes the codebase cleaner but also enhances collaboration among developers by allowing us to work on different modules without causing conflicts.

27. What Is Pickling And Unpickling In FastAPI?
Tips to Answer:

Understand the concepts of serialization and deserialization, as they relate to pickling and unpickling.
Provide examples of when you might use pickling and unpickling in a FastAPI project.
Sample Answer: In FastAPI, pickling is the process of converting a Python object into a byte stream, enabling it to be saved to a file or transmitted over a network. This is crucial for caching responses or storing session information in FastAPI applications. Unpickling is the reverse process, where the byte stream is converted back into a Python object. I’ve used pickling in FastAPI to efficiently cache data that was expensive to compute, such as results from database queries or external API calls. I ensure to use secure practices to avoid executing malicious code during the unpickling process, especially when the source of the pickle data is untrusted.

28. How Can You Share Global Variables Across Modules in FastAPI?
Tips to Answer:

Highlight the importance of using global variables carefully to prevent unintended side-effects or hard-to-debug issues in a FastAPI application.
Mention specific FastAPI or Python features, such as dependency injection or the use of a config module, which can be used to share global variables across modules effectively.
Sample Answer: In FastAPI, sharing global variables across modules requires careful consideration to ensure application stability. The key is to prevent direct modification of the global state from different parts of the application. I prefer to use a dedicated config module where I define all global variables. This module can then be imported wherever the variables are needed. Additionally, FastAPI’s dependency injection system offers a clean way to share and reuse global variables, such as database connections, by defining them as dependencies. This strategy keeps the global state accessible yet controlled, ensuring my Fast API applications remain maintainable and scalable.

29. How to Avoid a Newline When Using Multiple Print Statements in FastAPI?
Tips to Answer:

Highlight the use of the end parameter in the print function to control the behavior of the newline character.
Discuss the practical scenarios in FastAPI development where controlling newline characters in logging or console output could be beneficial.
Sample Answer: In FastAPI development, I often find myself needing to print multiple messages or data points on the same line, especially when logging request details or debugging. To achieve this, I use the print function’s end parameter. By default, print adds a newline character at the end, but setting end='' allows me to continue printing on the same line. For example, if I want to log the method and URL of a request without breaking into a new line, I’ll write print(request.method, end=' '); print(request.url, end=''). This technique is particularly useful in creating more readable and compact logs or output for monitoring FastAPI applications.

30. What Is The Default Data Type Of The Input() Method In FastAPI?
Tips to Answer:

Highlight your understanding of Python’s input() function and its relevance in FastAPI.
Discuss practical scenarios where converting the input data type is necessary for FastAPI applications.
Sample Answer: In FastAPI, when dealing with user inputs through the input() method, it’s essential to remember that this function, inherited from Python, always returns data as a string. This characteristic is crucial when processing and validating user input in FastAPI endpoints. For instance, if I’m expecting a numerical value from the user, I need to explicitly convert the input from a string to an integer or float. This step is vital for ensuring that the data types match my application’s requirements and for preventing type-related errors. In my experience, being mindful of the input’s data type has helped me design more robust and error-resistant FastAPI applications.

31. What Is Slicing in Python And How Is It Used in FastAPI?
Tips to Answer:

Focus on explaining the concept of slicing in Python clearly and concisely, mentioning how it allows for selecting subsets of data from sequences (like lists, tuples, strings, etc.).
Highlight the applicability and benefits of slicing for FastAPI development, such as manipulating request data or preparing responses.
Sample Answer: In Python, slicing is a technique that enables selecting parts of data from sequences, such as lists, strings, or tuples. It’s defined by the syntax [start:stop:step], where start is the index to begin slicing, stop is the index to end (not included), and step is the interval between elements. In FastAPI, slicing becomes particularly useful when dealing with request data or preparing data for responses. For instance, I might slice a list of query parameters to apply certain processing only to a subset. This feature of Python, when utilized in FastAPI, enhances data manipulation capabilities, making it easier to handle complex data structures efficiently.

32. What Does [::-1] Do in FastAPI?
Tips to Answer:

Focus on explaining the general Python concept of slicing and its application in any FastAPI context.
Highlight practical examples where such slicing could be useful in FastAPI projects, like reversing strings or lists.
Sample Answer: In Python, [::-1] is a slicing technique used to reverse the order of elements. In the context of FastAPI, this can be applied to strings, lists, or any sequence types handled within the endpoints or utility functions. For instance, if I need to reverse a URL slug or a list of items fetched from a database before sending it in the response, I’d use this slice operation. It’s concise and efficient, making the code cleaner and more readable. Whether I’m manipulating path parameters or processing JSON payloads, this technique proves invaluable for reversing sequences without needing additional functions or loops.

33. How Does Python Support Arguments Within A Function In FastAPI?
Tips to Answer:

Focus on explaining the different types of arguments in Python (positional, keyword, default, and variable-length) and how they can be used in FastAPI routes.
Give examples to illustrate the usage of different types of arguments in function definitions and calls within the context of FastAPI.
Sample Answer: In my experience, Python’s flexibility with function arguments significantly enhances FastAPI’s capability to handle various types of requests. Python supports positional arguments, which are mandatory and must be passed in the correct order. For example, in a FastAPI route, I can define a function to take specific query parameters as positional arguments to process a request.

Python also allows for keyword arguments, where the order of the arguments does not matter, and default arguments, which have a default value if not provided by the caller. This is extremely useful in FastAPI when you want to make some query parameters optional without having to handle missing arguments manually.

Finally, Python supports variable-length arguments (*args for a list of arguments and **kwargs for a dictionary of keyword arguments) which are perfect for scenarios where the number of inputs may vary. In FastAPI, I leverage this feature to accept a dynamic set of query parameters in a single endpoint, making my API more flexible and adaptable to different client needs.

15 FastAPI Interview Questions and Answers
July 15, 2025
FastAPI has rapidly gained popularity as a modern, fast (high-performance), web framework for building APIs with Python 3.7+ based on standard Python type hints. Its ease of use, automatic interactive API documentation, and high performance make it a preferred choice for developers looking to create robust and scalable web applications. FastAPI’s ability to handle asynchronous programming and its compatibility with popular data validation libraries further enhance its appeal.

This article provides a curated selection of interview questions designed to test your knowledge and proficiency with FastAPI. By working through these questions and their detailed answers, you will be better prepared to demonstrate your expertise and problem-solving abilities in a technical interview setting.

FastAPI Interview Questions and Answers
1. Explain the main features of FastAPI and why you would choose it over other web frameworks.
FastAPI is a web framework known for its high performance, ease of use, and modern features. It leverages Python type hints for automatic validation, serialization, and documentation, and supports asynchronous programming for handling many simultaneous connections. FastAPI’s dependency injection system enhances modularity and testing, while its automatic interactive documentation via Swagger UI and ReDoc aids developers in understanding and testing APIs. These features make FastAPI a compelling choice over frameworks like Flask or Django, especially for high-performance applications.

2. Describe how to use Pydantic models for request body validation. Provide a code example.
Pydantic models in FastAPI validate request bodies by defining expected data structures and types. This ensures incoming data is correctly formatted. Pydantic models are Python classes inheriting from BaseModel.

Example:

from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class Item(BaseModel):
    name: str
    price: float
    is_offer: bool = None

@app.post("/items/")
async def create_item(item: Item):
    return item
Here, the Item class defines the request body structure. The create_item endpoint expects a request body matching the Item model, with FastAPI automatically validating the data.

3. Explain how to use dependency injection in FastAPI. Provide a code example.
Dependency injection in FastAPI uses the Depends function to declare dependencies for path operation functions. Dependencies can include database connections or authentication mechanisms.

Example:

from fastapi import FastAPI, Depends

app = FastAPI()

def common_parameters(q: str = None, skip: int = 0, limit: int = 10):
    return {"q": q, "skip": skip, "limit": limit}

@app.get("/items/")
async def read_items(commons: dict = Depends(common_parameters)):
    return commons
In this example, common_parameters handles query parameters, and Depends injects this dependency into read_items. FastAPI calls common_parameters and passes its return value to read_items.

4. Write a middleware function that logs the details of each incoming request.
Middleware in FastAPI runs before and after each request, useful for logging, authentication, and modifying requests or responses. Here’s a middleware function to log incoming request details:

Example:

from fastapi import FastAPI, Request
import logging

app = FastAPI()

logging.basicConfig(level=logging.INFO)

@app.middleware("http")
async def log_requests(request: Request, call_next):
    logging.info(f"Request: {request.method} {request.url}")
    response = await call_next(request)
    logging.info(f"Response status: {response.status_code}")
    return response

@app.get("/")
async def read_root():
    return {"message": "Hello, World!"}
5. How can you run a background task in FastAPI? Provide an example.
In FastAPI, background tasks run operations while the main request is processed, useful for tasks like sending emails or updating databases. Use the BackgroundTasks class to define tasks executed after the response is sent.

Example:

from fastapi import FastAPI, BackgroundTasks

app = FastAPI()

def write_log(message: str):
    with open("log.txt", "a") as log_file:
        log_file.write(message + "\n")

@app.post("/send-notification/")
async def send_notification(background_tasks: BackgroundTasks, email: str):
    background_tasks.add_task(write_log, f"Notification sent to {email}")
    return {"message": "Notification sent in the background"}
Here, write_log writes a message to a log file, and send_notification adds this function as a background task.

6. Describe how to implement WebSocket communication in FastAPI. Provide a code example.
WebSocket communication in FastAPI allows real-time, bidirectional communication, useful for applications needing instant updates. FastAPI provides built-in support for WebSockets.

Example:

from fastapi import FastAPI, WebSocket
from fastapi.responses import HTMLResponse

app = FastAPI()

html = """


    
        
    
    
        
WebSocket Example

        Send Message
        

        

        
    

"""

@app.get("/")
async def get():
    return HTMLResponse(html)

@app.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):
    await websocket.accept()
    while True:
        data = await websocket.receive_text()
        await websocket.send_text(f"Message text was: {data}")
7. How do you write unit tests for FastAPI endpoints? Provide an example using pytest.
Unit testing FastAPI endpoints ensures reliability and correctness. Using pytest, you can write tests simulating requests and verifying responses.

Example:

from fastapi import FastAPI
from fastapi.testclient import TestClient
import pytest

app = FastAPI()

@app.get("/items/{item_id}")
def read_item(item_id: int, q: str = None):
    return {"item_id": item_id, "q": q}

client = TestClient(app)

def test_read_item():
    response = client.get("/items/42?q=foo")
    assert response.status_code == 200
    assert response.json() == {"item_id": 42, "q": "foo"}
Here, a simple FastAPI application is defined, and the TestClient simulates a request to the endpoint.

8. Explain how to integrate SQLAlchemy with FastAPI. Provide a code example.
Integrating SQLAlchemy with FastAPI involves setting up the database connection, defining models, and managing database sessions using dependency injection. FastAPI’s system simplifies session management.

First, install the required packages:

pip install fastapi sqlalchemy databases
Set up the database connection and create a SQLAlchemy engine:

from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

DATABASE_URL = "sqlite:///./test.db"

engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()
Define SQLAlchemy models:

from sqlalchemy import Column, Integer, String

class User(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    email = Column(String, unique=True, index=True)
Create a dependency to get the database session:

from fastapi import Depends, FastAPI
from sqlalchemy.orm import Session

app = FastAPI()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
Create FastAPI endpoints using the database session:

from fastapi import HTTPException

@app.post("/users/")
def create_user(name: str, email: str, db: Session = Depends(get_db)):
    db_user = User(name=name, email=email)
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user

@app.get("/users/{user_id}")
def read_user(user_id: int, db: Session = Depends(get_db)):
    db_user = db.query(User).filter(User.id == user_id).first()
    if db_user is None:
        raise HTTPException(status_code=404, detail="User not found")
    return db_user
9. How do you handle asynchronous database operations in FastAPI? Provide a code snippet.
FastAPI supports asynchronous programming, allowing non-blocking operations for tasks like database operations. Use asynchronous ORMs like Tortoise-ORM or SQLAlchemy with async support.

Example using Tortoise-ORM:

from fastapi import FastAPI
from tortoise.contrib.fastapi import register_tortoise
from tortoise.models import Model
from tortoise import fields

app = FastAPI()

class User(Model):
    id = fields.IntField(pk=True)
    name = fields.CharField(max_length=50)

@app.post("/users/")
async def create_user(name: str):
    user = await User.create(name=name)
    return user

register_tortoise(
    app,
    db_url='sqlite://db.sqlite3',
    modules={'models': ['__main__']},
    generate_schemas=True,
    add_exception_handlers=True,
)
Here, a User model and an asynchronous endpoint to create a user are defined.

10. Write an error handler for a custom exception in FastAPI.
In FastAPI, error handling involves defining custom exceptions and registering them to provide meaningful responses.

Example:

from fastapi import FastAPI, HTTPException, Request
from fastapi.responses import JSONResponse

app = FastAPI()

class CustomException(Exception):
    def __init__(self, name: str):
        self.name = name

@app.exception_handler(CustomException)
async def custom_exception_handler(request: Request, exc: CustomException):
    return JSONResponse(
        status_code=418,
        content={"message": f"Oops! {exc.name} did something wrong."},
    )

@app.get("/items/{name}")
async def read_item(name: str):
    if name == "bad":
        raise CustomException(name=name)
    return {"name": name}
11. How can you customize the automatically generated documentation in FastAPI?
FastAPI generates interactive API documentation using Swagger UI and ReDoc. You can customize this documentation with metadata, tags, and descriptions.

Example:

from fastapi import FastAPI

app = FastAPI(
    title="Custom API",
    description="This is a custom API with enhanced documentation",
    version="1.0.0",
    contact={
        "name": "API Support",
        "url": "http://www.example.com/support",
        "email": "[email protected]",
    },
)

@app.get("/items/", tags=["items"], summary="Get Items", description="Retrieve a list of items")
async def read_items():
    return [{"item_id": "Foo"}, {"item_id": "Bar"}]

@app.post("/items/", tags=["items"], summary="Create Item", description="Create a new item")
async def create_item(item: dict):
    return {"item_id": "Baz"}
12. How do you integrate a third-party service (e.g., an external API) with FastAPI? Provide a code snippet.
Integrating a third-party service with FastAPI involves making HTTP requests to the external API. FastAPI supports asynchronous programming for efficient handling of network requests. The httpx library is a popular choice for this.

Example:

from fastapi import FastAPI, HTTPException
import httpx

app = FastAPI()

@app.get("/external-api")
async def call_external_api():
    url = "https://api.example.com/data"
    async with httpx.AsyncClient() as client:
        response = await client.get(url)
        if response.status_code != 200:
            raise HTTPException(status_code=response.status_code, detail="Error calling external API")
        return response.json()
13. Explain how to use FastAPI with OAuth2 for token-based authentication. Provide a code example.
OAuth2 is a protocol for token-based authentication, allowing third-party applications to access user data securely. FastAPI provides built-in support for OAuth2.

Example:

from fastapi import FastAPI, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer
from pydantic import BaseModel

app = FastAPI()

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

class User(BaseModel):
    username: str

def fake_decode_token(token: str):
    return User(username=token + "fakedecoded")

async def get_current_user(token: str = Depends(oauth2_scheme)):
    user = fake_decode_token(token)
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid authentication credentials",
            headers={"WWW-Authenticate": "Bearer"},
        )
    return user

@app.post("/token")
async def login():
    return {"access_token": "fake-token", "token_type": "bearer"}

@app.get("/users/me")
async def read_users_me(current_user: User = Depends(get_current_user)):
    return current_user
14. Describe how to implement rate limiting in FastAPI. Provide a code example.
Rate limiting in FastAPI can be implemented using the slowapi library, which integrates seamlessly with FastAPI.

First, install the slowapi library:

pip install slowapi
Then, use it in your FastAPI application:

from fastapi import FastAPI, Request
from slowapi import Limiter, _rate_limit_exceeded_handler
from slowapi.util import get_remote_address
from slowapi.errors import RateLimitExceeded

app = FastAPI()
limiter = Limiter(key_func=get_remote_address)
app.state.limiter = limiter
app.add_exception_handler(RateLimitExceeded, _rate_limit_exceeded_handler)

@app.get("/items/")
@limiter.limit("5/minute")
async def read_items(request: Request):
    return {"message": "This is a rate-limited endpoint"}
In this example, the Limiter object is initialized with a key function determining the unique identifier for each client. The @limiter.limit("5/minute") decorator applies a rate limit of 5 requests per minute to the /items/ endpoint.

15. How do you handle file uploads in FastAPI? Provide a code example.
Handling file uploads in FastAPI involves using the File and UploadFile classes. The File class defines the file input parameter, while UploadFile provides methods to handle the uploaded file.

Example:

from fastapi import FastAPI, File, UploadFile
from fastapi.responses import HTMLResponse

app = FastAPI()

@app.post("/uploadfile/")
async def create_upload_file(file: UploadFile = File(...)):
    content = await file.read()
    return {"filename": file.filename, "content_type": file.content_type}

@app.get("/")
async def main():
    content = """
    

    Файл не выбран
    
    

    """
    return HTMLResponse(content=content)
In this example, the create_upload_file endpoint accepts a file upload using the UploadFile class. The file content is read asynchronously, and the filename and content type are returned in the response.

Как остановить цикл при выключении в FastAPI?
Вопросы
PYTHON
Как остановить цикл при выключении в FastAPI?
У меня есть маршрут /, который запустил бесконечный цикл (технически до тех пор, пока веб-сокет не будет отключен, но в этом упрощенном примере он действительно бесконечен). Как остановить этот цикл при выключении:

from fastapi import FastAPI

import asyncio

app = FastAPI()
running = True

@app.on_event("shutdown")
def shutdown_event():
    global running
    running = False

@app.get("/")
async def index():
    while running:
        await asyncio.sleep(0.1)
Согласно документам @app.on_event("shutdown") следует вызывать во время выключения, но подозревается, что оно вызывается аналогично событию времени жизни, которое вызывается после того, как все завершено, что в этой ситуации является тупиком.

Тестировать:

я запускаю его как uvicorn module.filename:app --host 0.0.0.0
завиток http://ip:порт/
затем остановите сервер (нажав CTRL+C)
и вы видите, что он зависает навсегда, так как для run никогда не устанавливается значение false, потому что shutdown_event не вызывается. (Да, вы можете принудительно завершить работу, нажав CTRL+C)

 10.04.2023 11:19
5
10
386
2
Данный вопрос помечен как решенный
 Ответы 2
Я думал, что это будет просто, но нет :-) Я думаю, что даже стоит запросить функцию в FastAPI для события «перед завершением работы», потому что это может быть просто, если оно встроено в код.

Итак, при запуске uvicorn регистрирует обратный вызов с циклом событий, который выполняется при запросе на выход. Это изменяет состояние объекта сервера uvicorn при однократном вызове (устанавливает для атрибута server.should_exit значение True). Таким образом, если у вас есть чистый способ запустить экземпляр сервера, вы можете просто опросить этот атрибут в своем долгосрочном обзоре, чтобы увидеть, должен ли он выйти. Я не нашел способа получить ссылку на работающий сервер.

Поэтому я решил зарегистрировать еще один обработчик сигналов: тот, который вы можете использовать в своем приложении, чтобы изменять состояния по мере необходимости. Проблема в том, что у asyncio может быть только один обработчик на сигнал, при регистрации обработчика предыдущий теряется. Это означает, что установка пользовательского обработчика удалит обработчики uvicorn, и он просто не выключится вообще.

Чтобы обойти это, мне пришлось проанализировать loop._signal_handlers в работающем асинхронном цикле: он должен быть закрытым, но при этом я мог связать исходный вызов обработчика сигнала после пользовательского обработчика сигнала.

Короче говоря, этот код работает для выхода из сервера по первому «ctrl + C»:

from fastapi import FastAPI, Request
import asyncio

from uvicorn.server import HANDLED_SIGNALS
from functools import partial

app = FastAPI()
running = True

#@app.on_event("shutdown")
#def shutdown_event():
    #global running
    #running = False

@app.get("/")
async def index(request: Request):
    while running:
        await asyncio.sleep(0.1)

@app.on_event("startup")
def chain_signals():
    loop = asyncio.get_running_loop()
    loop = asyncio.get_running_loop()
    signal_handlers = getattr(loop, "_signal_handlers", {})  # disclaimer 1: this is a private attribute: might change without notice.
                                                            # Also: unix only, won't work on windows
    for sig in HANDLED_SIGNALS:
        loop.add_signal_handler(sig, partial(handle_exit, signal_handlers.get(sig, None))  , sig, None)

def handle_exit(original_handler, sig, frame):
    global running
    running = False
    if original_handler:
        return original_handler._run()   # disclaimer 2: this should be opaque and performed only by the running loop. 
                                         # not so bad: this is not changing, and is safe to do. 


Я хотел бы подчеркнуть, что я смог добраться до этого рабочего фрагмента только потому, что вы предоставили минимальный рабочий пример своей проблемы. Вы удивитесь, как много авторов вопросов не делают этого.

 10.04.2023 17:54
 Ответ принят как подходящий
import signal
import asyncio
from fastapi import FastAPI

app = FastAPI()
running = True

def stop_server(*args):
    global running
    running = False

@app.on_event("startup")
def startup_event():
    signal.signal(signal.SIGINT, stop_server)

@app.get("/")
async def index():
    while running:
        await asyncio.sleep(0.1)
Источник: https://github.com/tiangolo/fastapi/discussions/9373#discussioncomment-5573492

Настройка и отлов сигнала SIGINT позволяет поймать первый CNTR+C. Это установит running в False, что завершит цикл в index(). Завершение текущего запроса, позволяющее отключить сервер.

TypeError - Образец Fastapi не работает во время загрузки
Вопросы
PYTHON 3.X
TypeError - Образец Fastapi не работает во время загрузки
Я впервые пробую fastapi и использую пример кода в документе.

from fastapi import FastAPI

app = FastAPI()


@app.get("/")
async def root():
    return {"message": "Hello World"}
Я также установил необходимые пакеты перед выполнением

pip install "fastapi[all]" 
pip install uvicorn
И выполнение не удалось с TypeError.

uvicorn model_sm:app --reload
INFO:     Will watch for changes in these directories: ['/Users/name/workplace/flask']
INFO:     Uvicorn running on http://127.0.0.1:8000 (Press CTRL+C to quit)
INFO:     Started reloader process [24303] using StatReload
Process SpawnProcess-1:
Traceback (most recent call last):
  File "/usr/local/Cellar/python@3.9/3.9.15/Frameworks/Python.framework/Versions/3.9/lib/python3.9/multiprocessing/process.py", line 315, in _bootstrap
    self.run()
  File "/usr/local/Cellar/python@3.9/3.9.15/Frameworks/Python.framework/Versions/3.9/lib/python3.9/multiprocessing/process.py", line 108, in run
    self._target(*self._args, **self._kwargs)
  File "/usr/local/lib/python3.9/site-packages/uvicorn/_subprocess.py", line 76, in subprocess_started
    target(sockets=sockets)
  File "/usr/local/lib/python3.9/site-packages/uvicorn/server.py", line 59, in run
    return asyncio.run(self.serve(sockets=sockets))
  File "/usr/local/Cellar/python@3.9/3.9.15/Frameworks/Python.framework/Versions/3.9/lib/python3.9/asyncio/runners.py", line 44, in run
    return loop.run_until_complete(main)
  File "/usr/local/Cellar/python@3.9/3.9.15/Frameworks/Python.framework/Versions/3.9/lib/python3.9/asyncio/base_events.py", line 647, in run_until_complete
    return future.result()
  File "/usr/local/lib/python3.9/site-packages/uvicorn/server.py", line 66, in serve
    config.load()
  File "/usr/local/lib/python3.9/site-packages/uvicorn/config.py", line 471, in load
    self.loaded_app = import_from_string(self.app)
  File "/usr/local/lib/python3.9/site-packages/uvicorn/importer.py", line 21, in import_from_string
    module = importlib.import_module(module_str)
  File "/usr/local/Cellar/python@3.9/3.9.15/Frameworks/Python.framework/Versions/3.9/lib/python3.9/importlib/__init__.py", line 127, in import_module
    return _bootstrap._gcd_import(name[level:], package, level)
  File "<frozen importlib._bootstrap>", line 1030, in _gcd_import
  File "<frozen importlib._bootstrap>", line 1007, in _find_and_load
  File "<frozen importlib._bootstrap>", line 986, in _find_and_load_unlocked
  File "<frozen importlib._bootstrap>", line 680, in _load_unlocked
  File "<frozen importlib._bootstrap_external>", line 850, in exec_module
  File "<frozen importlib._bootstrap>", line 228, in _call_with_frames_removed
  File "/Users/name/workplace/flask/model_sm.py", line 2, in <module>
    from fastapi import FastAPI
  File "/usr/local/lib/python3.9/site-packages/fastapi/__init__.py", line 7, in <module>
    from .applications import FastAPI as FastAPI
  File "/usr/local/lib/python3.9/site-packages/fastapi/applications.py", line 16, in <module>
    from fastapi import routing
  File "/usr/local/lib/python3.9/site-packages/fastapi/routing.py", line 478, in <module>
    class APIRouter(routing.Router):
  File "/usr/local/lib/python3.9/site-packages/fastapi/routing.py", line 497, in APIRouter
    lifespan: Optional[Lifespan[Any]] = None,
  File "/usr/local/Cellar/python@3.9/3.9.15/Frameworks/Python.framework/Versions/3.9/lib/python3.9/typing.py", line 277, in inner
    return func(*args, **kwds)
  File "/usr/local/Cellar/python@3.9/3.9.15/Frameworks/Python.framework/Versions/3.9/lib/python3.9/typing.py", line 768, in __getitem__
    _check_generic(self, params, len(self.__parameters__))
  File "/usr/local/lib/python3.9/site-packages/typing_extensions.py", line 97, in _check_generic
    raise TypeError(f"{cls} is not a generic class")
TypeError: typing.Union[typing.Callable[[ForwardRef('Starlette')], typing.AsyncContextManager[NoneType]], typing.Callable[[ForwardRef('Starlette')], typing.AsyncContextManager[typing.Mapping[str, typing.Any]]]] is not a generic class
В поиске ничего полезного не нашел. Любая подсказка, как это исправить?

 05.04.2023 01:37
0
1
85
2
Данный вопрос помечен как решенный
 Ответы 2
pip install fastapi
попробуйте установить fastapi с помощью приведенной выше команды, у меня это работает.

если вы используете macOS или Linux, вы должны использовать следующую команду.

pip3 install fastapi

Перед запуском этого скрипта откройте терминал и импортируйте FastAPI, чтобы убедиться, что он работает правильно. затем запустите этот скрипт.

 05.04.2023 02:26
 Ответ принят как подходящий
Обнаружено, что команда uvicorn зависит от Python3.9 для выполнения. Поэтому я переустановил все следующие пакеты, используя pip3.9, что устраняет проблему.

pip3.9 install typing-extensions
pip3.9 install uvicorn
pip3.9 install fastapi

Минимальный сценарий статического файлового сервера FastAPI

FASTAPI
Минимальный сценарий статического файлового сервера FastAPI
Я хочу написать минимальный статический файловый сервер FastAPI, запускаемый из сценария, который позволяет указать каталог для совместного использования в командной строке. Следуя примеру из документации FastAPI, я написал это.

import uvicorn
from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles

server = FastAPI()

if __name__ == "__main__":
    import sys

    directory = sys.argv[1]
    server.mount("/static", StaticFiles(directory=directory), name = "static")
    uvicorn.run(app = "my_package:server")
Если я запущу это с аргументом /my/directory, где этот каталог содержит file.txt, я ожидаю, что смогу загрузить file.txt по URL-адресу http://localhost:8000/static/file.txt, но это возвращает HTTP 404.

Как мне написать этот минимальный сценарий статического файлового сервера?

 23.11.2022 23:07
0
3
101
2
Данный вопрос помечен как решенный
 Ответы 2
 Ответ принят как подходящий
Предположение, которое я сделал о том, что sys.argv недоступен, когда uvicorn загружает ваш модуль, неверно, поэтому он должен работать так, как вы ожидаете, переместив вашу статическую настройку за пределы __main__ guard:

import uvicorn
import sys
from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles

server = FastAPI()
directory = sys.argv[1]
server.mount("/static", StaticFiles(directory=directory), name = "static")

if __name__ == "__main__":
    uvicorn.run(app = "my_package:server")
 23.11.2022 23:38
Когда вы вызываете uvicorn.run(app = "my_package:server"), он фактически запускает отдельный процесс, в который импортируется my_package. Поэтому все, что находится внутри if __name__ == "__main__":, не будет запускаться в процессе uvicorn, поэтому ваша директория никогда не будет смонтирована.

Одним из возможных решений может быть получение каталога из переменной среды, которая устанавливается из небольшого скрипта bash:

from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles

server = FastAPI()

directory = os.getenv("DIRECTORY")
server.mount("/static", StaticFiles(directory=directory), name = "static")
start.sh:

#!/usr/bin/env bash
DIRECTORY=$1 uvicorn mypackage:server


В JSON, созданном из pydantic.BaseModel, исключить Необязательно, если не установлено
Вопросы
PYTHON
В JSON, созданном из pydantic.BaseModel, исключить Необязательно, если не установлено
Я хочу исключить все необязательные значения, которые не установлены при создании JSON. В этом примере:

from pydantic import BaseModel
from typing import Optional


class Foo(BaseModel):
    x: int
    y: int = 42
    z: Optional[int]


print(Foo(x=3).json())
Я получаю {"x": 3, "y": 42, "z": null}. Но я хотел бы исключить z. Не потому, что его значение равно None, а потому, что оно является необязательным и для z не было ключевого аргумента. В двух приведенных ниже случаях я хотел бы иметь z в JSON.

Foo(x=1, z=None)
Foo(x=1, z=77)
Если есть какое-либо другое решение для установки z в необязательное в этом смысле, я хотел бы его увидеть.

 18.12.2020 19:59
15
0
20 650
2
Данный вопрос помечен как решенный
 Ответы 2
 Ответ принят как подходящий
Вы можете исключить только необязательные поля модели, которые не установлены, путем объединения полей модели, которые установлены, и тех, которые не являются None.

Pydantic предоставляет следующие аргументы для метода экспорта model.dict(...):

exclude_unset: следует ли исключать из возвращаемого словаря поля, которые не были заданы явно при создании модели; по умолчанию False.

exclude_none: следует ли исключать из возвращаемого словаря поля, равные None; по умолчанию False

Чтобы объединить два словаря, мы можем использовать выражение a = {**b, **c} (значения из c перезаписывают значения из b). Обратите внимание, что начиная с Python 3.9 это можно было сделать так же, как a = b | c.

from pydantic import BaseModel
from typing import Optional
from pydantic.json import pydantic_encoder
import json


class Foo(BaseModel):
    x: int
    y: int = 42
    z: Optional[int]

def exclude_optional_dict(model: BaseModel):
    return {**model.dict(exclude_unset=True), **model.dict(exclude_none=True)}

def exclude_optional_json(model: BaseModel):
    return json.dumps(exclude_optional_dict(model), default=pydantic_encoder)
    


print(exclude_optional_json(Foo(x=3)))  # {"x": 3, "y": 42}
print(exclude_optional_json(Foo(x=3, z=None)))  # {"x": 3, "z": null, "y": 42}
print(exclude_optional_json(Foo(x=3, z=77)))  # {"x": 3, "z": 77, "y": 42}
Обновлять
Чтобы этот подход работал с вложенными моделями, нам нужно выполнить глубокое объединение (или слияние) двух словарей, например:

def union(source, destination):
    for key, value in source.items():
        if isinstance(value, dict):
            node = destination.setdefault(key, {})
            union(value, node)
        else:
            destination[key] = value

    return destination

def exclude_optional_dict(model: BaseModel):
    return union(model.dict(exclude_unset=True), model.dict(exclude_none=True))

class Foo(BaseModel):
    x: int
    y: int = 42
    z: Optional[int]

class Bar(BaseModel):
    a: int
    b: int = 52
    c: Optional[int]
    d: Foo


print(exclude_optional_json(Bar(a=4, d=Foo(x=3))))
print(exclude_optional_json(Bar(a=4, c=None, d=Foo(x=3, z=None))))
print(exclude_optional_json(Bar(a=4, c=78, d=Foo(x=3, z=77))))
{"a": 4, "b": 52, "d": {"x": 3, "y": 42}}
{"a": 4, "b": 52, "d": {"x": 3, "y": 42, "z": null}, "c": null}
{"a": 4, "b": 52, "c": 78, "d": {"x": 3, "y": 42, "z": 77}}
 18.12.2020 22:00
Если вы используете FastAPI, то использование exclude_none не работает, когда в декораторе маршрута упоминается response_model.

@app.post("/items/", response_model=Item)
async def create_item(item: Item):
    return item.dict(exclude_none=True)
Быстрый API, кажется, перерабатывает dict с моделью pydantic.

Поэтому переопределение метода dict в самой модели должно работать.

def Item(BaseModel):
   name: str
   description: Optional[str]
   ...
   def dict(self, *args, **kwargs) -> Dict[str, Any]:
        kwargs.pop('exclude_none', None)
        return super().dict(*args, exclude_none=True, **kwargs)
(фактическое решение поместило бы это определение в отдельный подкласс BaseModel для повторного использования)

Примечание: просто изменить значение по умолчанию аргумента ключевого слова exclude_none недостаточно: кажется, что FastAPI всегда отправляет exclude_none=False в качестве аргумента.

Источник:
https://github.com/tiangolo/fastapi/issues/3314#issuecomment-962932368
FastAPI - шаблон рендеринга в index.html - не работает
Вопросы
SQLALCHEMY
FastAPI - шаблон рендеринга в index.html - не работает
Добрый день. Я использую FastAPI и хочу отобразить содержимое базы данных в index.html, однако получаю следующую ошибку:

INFO:     127.0.0.1:55139 - "GET /?skip=0&limit=100 HTTP/1.1" 500 Internal Server Error
ERROR:    Exception in ASGI application
Traceback (most recent call last):
  File "/Users/barnaby/.local/share/virtualenvs/fastapi-example-6xjq_vv2/lib/python3.9/site-packages/uvicorn/protocols/http/h11_impl.py", line 394, in run_asgi
    result = await app(self.scope, self.receive, self.send)
  File "/Users/barnaby/.local/share/virtualenvs/fastapi-example-6xjq_vv2/lib/python3.9/site-packages/uvicorn/middleware/proxy_headers.py", line 45, in __call__
    return await self.app(scope, receive, send)
  File "/Users/barnaby/.local/share/virtualenvs/fastapi-example-6xjq_vv2/lib/python3.9/site-packages/fastapi/applications.py", line 190, in __call__
    await super().__call__(scope, receive, send)
  File "/Users/barnaby/.local/share/virtualenvs/fastapi-example-6xjq_vv2/lib/python3.9/site-packages/starlette/applications.py", line 111, in __call__
    await self.middleware_stack(scope, receive, send)
  File "/Users/barnaby/.local/share/virtualenvs/fastapi-example-6xjq_vv2/lib/python3.9/site-packages/starlette/middleware/errors.py", line 181, in __call__
    raise exc from None
  File "/Users/barnaby/.local/share/virtualenvs/fastapi-example-6xjq_vv2/lib/python3.9/site-packages/starlette/middleware/errors.py", line 159, in __call__
    await self.app(scope, receive, _send)
  File "/Users/barnaby/.local/share/virtualenvs/fastapi-example-6xjq_vv2/lib/python3.9/site-packages/starlette/middleware/cors.py", line 78, in __call__
    await self.app(scope, receive, send)
  File "/Users/barnaby/.local/share/virtualenvs/fastapi-example-6xjq_vv2/lib/python3.9/site-packages/starlette/exceptions.py", line 82, in __call__
    raise exc from None
  File "/Users/barnaby/.local/share/virtualenvs/fastapi-example-6xjq_vv2/lib/python3.9/site-packages/starlette/exceptions.py", line 71, in __call__
    await self.app(scope, receive, sender)
  File "/Users/barnaby/.local/share/virtualenvs/fastapi-example-6xjq_vv2/lib/python3.9/site-packages/starlette/routing.py", line 566, in __call__
    await route.handle(scope, receive, send)
  File "/Users/barnaby/.local/share/virtualenvs/fastapi-example-6xjq_vv2/lib/python3.9/site-packages/starlette/routing.py", line 227, in handle
    await self.app(scope, receive, send)
  File "/Users/barnaby/.local/share/virtualenvs/fastapi-example-6xjq_vv2/lib/python3.9/site-packages/starlette/routing.py", line 41, in app
    response = await func(request)
  File "/Users/barnaby/.local/share/virtualenvs/fastapi-example-6xjq_vv2/lib/python3.9/site-packages/fastapi/routing.py", line 188, in app
    raw_response = await run_endpoint_function(
  File "/Users/barnaby/.local/share/virtualenvs/fastapi-example-6xjq_vv2/lib/python3.9/site-packages/fastapi/routing.py", line 137, in run_endpoint_function
    return await run_in_threadpool(dependant.call, **values)
  File "/Users/barnaby/.local/share/virtualenvs/fastapi-example-6xjq_vv2/lib/python3.9/site-packages/starlette/concurrency.py", line 34, in run_in_threadpool
    return await loop.run_in_executor(None, func, *args)
  File "/usr/local/Cellar/python@3.9/3.9.0_1/Frameworks/Python.framework/Versions/3.9/lib/python3.9/concurrent/futures/thread.py", line 52, in run
    result = self.fn(*self.args, **self.kwargs)
  File "./sql_app/main.py", line 51, in read_notes
    "title": title,
NameError: name 'title' is not defined
Main.py

from fastapi import FastAPI
from typing import List, Dict

from fastapi import Depends, FastAPI, HTTPException, Request, Response
from fastapi.responses import HTMLResponse
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from fastapi.templating import Jinja2Templates

from . import crud, models, schemas
from .database import SessionLocal, engine

models.Base.metadata.create_all(bind=engine)

templates = Jinja2Templates(directory = "templates")

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


# #original function
# @app.get("/notes", response_model=List[schemas.Note])
# def read_notes(request: Request, skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
#     notes = crud.get_notes(db=db, skip=skip, limit=limit)
#     print(notes)
#     return notes



@app.get("/", response_class=HTMLResponse)
def read_notes(request: Request, skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    notes = crud.get_notes(db=db, skip=skip, limit=limit)
    print(notes)
    return templates.TemplateResponse("index.html",{
        "request": request,
        "id": id,
        "title": title,
        "description": description
    })

@app.post("/notes", response_model=schemas.Note, status_code=201)
def create_note(note: schemas.NoteCreate, db: Session = Depends(get_db)):
    return crud.create_note(db=db, note=note)




@app.get("/notes/{note_id}", response_model=schemas.Note)
def read_user(note_id: int, db: Session = Depends(get_db)):
    db_note = crud.get_note(db=db, note_id=note_id)
    if db_note is None:
        raise HTTPException(status_code=404, detail = "Note not found")
    return db_note

@app.delete("/notes/{note_id}", status_code=204)
async def delete_note(note_id: int, db: Session = Depends(get_db)):
    return crud.delete_note(db=db, note_id=note_id)


@app.put("/notes/{note_id}", status_code=200)
async def put_note(note_id: int, note: schemas.NoteCreate, db: Session = Depends(get_db)):
    db_note = schemas.Note(id = note_id, title= note.title, description=note.description)
    crud.update_note(db=db, note=db_note)

@app.patch("/notes/{note_id}", status_code=200)
async def patch_note(note_id: int, note: schemas.NoteCreate, db: Session = Depends(get_db)):
    print(note_id)
    print(note.title)
    print(note.description)
    db_note = schemas.Note(id = note_id, title= note.title, description=note.description)
    crud.update_note(db=db, note=db_note)



if __name__ == '__main__':
    uvicorn.run("main:app", host = "127.0.0.1", port=8000)
crud.py

from sqlalchemy.orm import Session

from . import models, schemas


def get_note(db: Session, note_id: int):
    return db.query(models.Note).filter(models.Note.id == note_id).first()

def delete_note(db: Session, note_id: int):
    db_note = db.query(models.Note).filter(models.Note.id == note_id).first()
    db.delete(db_note)
    db.commit()
    return {}

def get_notes(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.Note).offset(skip).limit(limit).all()


def create_note(db: Session, note: schemas.NoteCreate):
    db_note = models.Note(title=note.title, description=note.description)
    db.add(db_note)
    db.commit()
    db.refresh(db_note)
    return db_note

def update_note(db: Session, note: schemas.Note):
    db_note = db.query(models.Note).filter(models.Note.id == note.id).first()
    db_note.title = note.title
    db_note.description = note.description
    db.commit()
    db.refresh(db_note)
    return db_note
схемы.py

class NoteBase(BaseModel):
    title: str
    description: str


class NoteCreate(NoteBase):
    pass

class Note(NoteBase):
    id: int

    class Config:
        orm_mode = True
модели.py

from sqlalchemy import Column, Integer, String
from sqlalchemy.orm import relationship

from .database import Base

class Note(Base):
    __tablename__ = "notes"
    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, nullable=True, default = "new")
    description = Column(String, nullable=True, default = "new")
index.html

{% extends 'layout.html' %} {% include 'header.html' %} {% block title %} Home {% endblock %} {% block body %}

<div class = "container">
    <div class = "row">
        <div class = "col md-12">
            <div class = "jumbotron">
                <table class = "table">
                <thead>
                    <tr>
                        <th scope = "col">ID</th>
                        <th scope = "col">Title</th>
                        <th scope = "col">Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {% for note in notes%}
                        <td>{{notes.id}}</td>
                        <td>{{notes.title}}</td>
                        <td>{{notes.description}}</td>
                        </tr>
                        {% endfor %}
                    <tr>
                </tbody>
                </table>
            </div>
        </div>
    </div>
</div>



{% endblock %}
Моя схема/модели настроены неправильно? Глядя на эту конечную точку - http://127.0.0.1:8000/notes я получаю следующее, отображаемое в index.html. Однако это в формате списка. Но почему-то я не могу отобразить его с помощью шаблона HTML.

[   {     "title": "title 3",     "description": "title 3 description",     "id": 3   },   {     "title": "title 1 updated",     "description": "string",     "id": 1   },   {     "title": "Title updated 2",     "description": "description updated2",     "id": 2   },   {     "title": "Note 4",     "description": "Note 4 description",     "id": 4   } ]
база данных.py

from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker


SQLALCHEMY_DATABASE_URL = "postgresql://postgres:123456789@localhost/notes"

engine = create_engine (SQLALCHEMY_DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()
 17.12.2020 07:41
0
0
4 515
2
Данный вопрос помечен как решенный
 Ответы 2
 Ответ принят как подходящий
Ваша ошибка является результатом неопределенной переменной title в строке 51 main.py в функции read_notes точно так, как указывает ваша трассировка стека.

Перепишите свою конечную точку, чтобы сделать что-то вроде следующего

@app.get("/", response_class=HTMLResponse)
def read_notes(request: Request, skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    notes = crud.get_notes(db=db, skip=skip, limit=limit)
    return templates.TemplateResponse("index.html", {
        "notes": notes,
    })
 17.12.2020 09:51
Я изменил код соответственно.

@app.get("/", response_class=HTMLResponse)
def read_notes(request: Request, skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    notes = crud.get_notes(db=db, skip=skip, limit=limit)
    return templates.TemplateResponse("index.html", {
        "request": request,
        "notes": notes,
    })
Также пришлось изменить цикл for в index.html, из-за чего таблица сходила с ума.

{% extends 'layout.html' %} {% include 'header.html' %} {% block title %} Home {% endblock %} {% block body %}

<div class = "container">
    <div class = "row">
        <div class = "col md-12">
            <div class = "jumbotron">
                <table class = "table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {%for note in notes%}
                        <tr>
                            <td>{{note.id}}</td>
                            <td>{{note.title}}</td>
                            <td>{{note.description}}</td>
                        </tr>
                        {%endfor%}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>

{% endblock %}
Спасибо за помощь. Я очень ценю это...

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
