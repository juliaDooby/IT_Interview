
RedDeveloper
Блог
Вопросы
Теги
Поиск...
Реагируйте require("history").createBrowserHistory` вместо `require("history/createBrowserHistory")
Вопросы
REACTJS
Реагируйте require("history").createBrowserHistory` вместо `require("history/createBrowserHistory")
Так что в основном у меня проблема с использованием библиотеки истории в реакции.

Это из-за последней версии я должен попытаться понизить версию истории, но поскольку ошибка гласит, что Support for the latter will be removed in the next major release. так как я должен изменить и где я должен это изменить?

он говорит:

Warning: Please use `require("history").createBrowserHistory` instead of `require("history/createBrowserHistory")`. Support for the latter will be removed in the next major release.
А ТАКЖЕ

Warning: Please use `require("history").createHashHistory` instead of `require("history/createHashHistory")`. Support for the latter will be removed in the next major release.
Я не совсем уверен, как это исправить.

import createHistory from './history'

import { applyMiddleware, compose, createStore } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/es/storage'
import thunk from 'redux-thunk'
import createRootReducer from './reducers'

export const history = createHistory();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const persistConfig = {
  key: 'root',
  storage
};

const reducers = persistReducer( persistConfig, createRootReducer(history));
const exampleMiddleware =  store => next => action => {
  // if (action.type === 'message'){
  //   do something
  // } else {
  //   next(action);
  // }
}

export default () => {
  const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(routerMiddleware(history), thunk, exampleMiddleware))
  );
  let persistor = persistStore(store)

  return  { store, persistor }
}
import React, { Component } from 'react';
import { Provider, ReactReduxContext } from 'react-redux';
// import { createStore } from 'redux';
import { ConnectedRouter } from 'connected-react-router'
import { PersistGate } from 'redux-persist/integration/react'

import configureStore, { history } from './configureStore'
import Routers from './Routers';

const { persistor, store } = configureStore();

class App extends Component {
  render() {
    return (

      <Provider store = {store} context = {ReactReduxContext}>
        <div> SYNTIFY </div>
        <PersistGate loading = {null} persistor = {persistor}>

          <ConnectedRouter history = {history} context = {ReactReduxContext}>
            <Routers />
          </ConnectedRouter>

        </PersistGate>
      </Provider>

    );
  }
}

export default App;
история.js

import createHistory from 'history/createBrowserHistory';
export default createHistory;
Поскольку он показывает ошибку, ничего не отображается.

 02.04.2019 06:04
35
0
48 952
10
Данный вопрос помечен как решенный
 Ответы 10
просто создайте новый файл для истории и добавьте

    import createHistory from 'history/createBrowserHistory';
    export default createHistory();
импортировать историю из «пути к файлу, созданного для истории, он будет работать»

 02.04.2019 06:44
 Ответ принят как подходящий
Импортируйте creatBrowserHistory с фигурными скобками. Он экспортируется как именованный экспорт.

// history.js

import { createBrowserHistory } from "history";
export default createBrowserHistory(); 
Затем импортируйте и используйте его в index.

// index.js
import history from "./history";
import { Provider } from "react-redux";
import store from "./store/store";

const AppContainer = () => (
    <Router history = {history}>
        <Provider store = {store}>
             <Route path = "/" component = {App} />
        </Provider>
    </Router>
);

 12.04.2019 16:38
В моем коде эта ошибка возникает при запуске модульного теста. Фермент или шутка возможны, если интерпретировать код ES6 по-разному. Сделать в истории пакетов экспорт по умолчанию.

Мой код импорта сейчас

import { createBrowserHistory } from 'history'
Вот полный код history.js

import { createBrowserHistory } from 'history';
export default createBrowserHistory(); 
 13.05.2019 10:04
Я изменил это
import createHistory from 'history/createBrowserHistory'

к этому import { createBrowserHistory } from 'history'

 30.07.2019 20:41
перейти к node_modules > dva > lib > index.js 

index.js 

источник: https://www.cnblogs.com/fairylee/p/11198868.html

 05.08.2019 13:24
С помощью предложения мне удалось избавиться от ошибки в консоли при рендере.

// NO IMPORT ABOVE  (just set the import directly to a variable)
    const history = require("history").createBrowserHistory()


// then you can 
if ( *some-requirement*){
history.push("/desiredRoute")
}. 
// right from your App.js
 01.09.2020 06:26
Этот импорт работал для меня var createHistory = require('history').createBrowserHistory; вместо этого импорта import createHistory from 'history/createBrowserHistory'; Файл истории приведен ниже:

var createHistory = require('history').createBrowserHistory;
export default createHistory();
 14.12.2020 03:10
Обновите библиотеку React-Router-Dom

Если вы используете пряжа

пиши => yarn add React-Router-Dom

он автоматически обновится до текущей версии библиотеки Router

Так

 07.01.2021 07:08
Попробуйте следующее: установите эту версию react-router-dom@5.2.0. Если есть ошибка, установите webpack@3.1.0.

 05.05.2021 23:59
попробуй это

перейдите к node_modules/history/createBrowserHistory и сделайте, как сказано в предупреждении

удалите это ('createBrowserHistory') замените его этим в новой строке: require("history").createBrowserHistory

тогда

перейти к node_modules/history/createHashHistory

удалить ('createHashHistory') заменить его на это в новой строке: require("history").createHashHistory

 08.01.2022 11:55
Другие вопросы по теме
Подключение дочерних компонентов к хранилищу и подключение родительского компонента к хранилищу и передаче реквизитов
Можно ли добавлять новые свойства в состояние Redux во время изменения состояния?
У меня есть видео-курс по созданию чата Slack, и теперь у меня есть некоторые проблемы
Как использовать условие ИЛИ в тернарном операторе в ReactJS
Как вызвать дочерний метод для родительских событий с помощью реакции?
Редуктор Redux с Immutable
Как отправить действие thunk с машинописным текстом
Как добавить заголовок в axios.create в приложении react/redux
Как определить тип mapDispatchToProps функции редукционного преобразователя
React Native — данные теряются при переключении между экранами с использованием реагирующей навигации и реагирующей редукции
Похожие вопросы
Как сделать компонент списка, чтобы перечислить мои содержательные сообщения
Полное объяснение API контекста в React Native
Xcode10: не удается найти двойное преобразование входного файла сборки
Почему моя функция не получает результат от выборки?
ReactJS: фильтровать рендеринг списка только по целым именам?
Я не могу получить состояние. Проверьте этот код и мой вывод
Передача данных о вызове API из родительского в дочерний контейнер в реакции
Как сопоставить данные json, чтобы получить все отдельные компоненты?
Использование useEffect для выборки данных несколько раз
Использование useMemo вместо проблемы с синтаксисом React.memo
Разделы
Блог

Вопросы

Теги

О сайте

Контакты
info@reddeveloper.ru
Правовая информация
Политика конфиденциальности

Пользовательское соглашение


Находите ответы на сложные технические вопросы по программированию, с которыми сталкиваются инженеры по всему миру в своей ежедневной практике на сайте RedDeveloper.

© 2026 «RedDeveloper.ru»

RedDeveloper
Блог
Вопросы
Теги
Поиск...
Не удалось собрать проект iOS. Мы запустили команду «xcodebuild», но она завершилась с кодом ошибки 65
Вопросы
REACTJS
Не удалось собрать проект iOS. Мы запустили команду «xcodebuild», но она завершилась с кодом ошибки 65
Я новичок в разработке React Native. Я использую новый MacBook Air (M1, 2020 г.) с чипом M1. Я установил зависимость ниже:

Node =  v14.15.3
Npm  = 6.14.9
Homebrew  = 2.7.0
react-native-cli: 2.0.1
Xcode Version 12.3
Журнал создания проекта ниже:

alimran@Als-MacBook-Air prod % react-native init test
This will walk you through creating a new React Native project in /Users/alimran/workspace/reactnative/prod/test
Installing react-native...
Consider installing yarn to make this faster: https://yarnpkg.com
npm WARN deprecated @hapi/joi@15.1.1: Switch to 'npm install joi'
npm WARN deprecated @hapi/hoek@8.5.1: This version has been deprecated and is no longer supported or maintained
npm WARN deprecated @hapi/topo@3.1.6: This version has been deprecated and is no longer supported or maintained
npm WARN deprecated @hapi/address@2.1.4: Moved to 'npm install @sideway/address'
npm WARN deprecated @hapi/bourne@1.3.2: This version has been deprecated and is no longer supported or maintained
npm WARN deprecated core-js@2.6.12: core-js@<3 is no longer maintained and not recommended for usage due to the number of issues. Please, upgrade your dependencies to the actual version of core-js@3.
npm WARN deprecated fsevents@1.2.13: fsevents 1 will break on node v14+ and could be using insecure binaries. Upgrade to fsevents 2.
npm WARN deprecated urix@0.1.0: Please see https://github.com/lydell/urix#deprecated
npm WARN deprecated resolve-url@0.2.1: https://github.com/lydell/resolve-url#deprecated

> fsevents@1.2.13 install /Users/alimran/workspace/reactnative/prod/test/node_modules/fsevents
> node install.js

  SOLINK_MODULE(target) Release/.node
  CXX(target) Release/obj.target/fse/fsevents.o
  SOLINK_MODULE(target) Release/fse.node

> core-js@2.6.12 postinstall /Users/alimran/workspace/reactnative/prod/test/node_modules/core-js
> node -e "try{require('./postinstall')}catch(e){}"

Thank you for using core-js ( https://github.com/zloirock/core-js ) for polyfilling JavaScript standard library!

The project needs your help! Please consider supporting of core-js on Open Collective or Patreon: 
> https://opencollective.com/core-js 
> https://www.patreon.com/zloirock 

Also, the author of core-js ( https://github.com/zloirock ) is looking for a good job -)

npm notice created a lockfile as package-lock.json. You should commit this file.
npm WARN react-native@0.63.4 requires a peer of react@16.13.1 but none is installed. You must install peer dependencies yourself.
npm WARN use-subscription@1.5.1 requires a peer of react@^16.8.0 || ^17.0.0 but none is installed. You must install peer dependencies yourself.

+ react-native@0.63.4
added 732 packages from 414 contributors and audited 732 packages in 39.586s

12 packages are looking for funding
  run `npm fund` for details

found 3 low severity vulnerabilities
  run `npm audit fix` to fix them, or `npm audit` for details
info Setting up new React Native app in /Users/alimran/workspace/reactnative/prod/test
(node:14642) Warning: Accessing non-existent property 'padLevels' of module exports inside circular dependency
(Use `node --trace-warnings ...` to show where the warning was created)
info Adding required dependencies
+ react@16.13.1
added 1 package and audited 735 packages in 3.979s

12 packages are looking for funding
  run `npm fund` for details

found 3 low severity vulnerabilities
  run `npm audit fix` to fix them, or `npm audit` for details
info Adding required dev dependencies
npm WARN deprecated request@2.88.2: request has been deprecated, see https://github.com/request/request/issues/3142
npm WARN deprecated request-promise-native@1.0.9: request-promise-native has been deprecated because it extends the now deprecated request package, see https://github.com/request/request/issues/3142
npm WARN deprecated har-validator@5.1.5: this library is no longer supported

> core-js-pure@3.8.1 postinstall /Users/alimran/workspace/reactnative/prod/test/node_modules/core-js-pure
> node -e "try{require('./postinstall')}catch(e){}"

npm WARN tsutils@3.17.1 requires a peer of typescript@>=2.8.0 || >= 3.2.0-dev || >= 3.3.0-dev || >= 3.4.0-dev || >= 3.5.0-dev || >= 3.6.0-dev || >= 3.6.0-beta || >= 3.7.0-dev || >= 3.7.0-beta but none is installed. You must install peer dependencies yourself.

+ metro-react-native-babel-preset@0.59.0
+ @babel/core@7.12.10
+ babel-jest@25.5.1
+ @babel/runtime@7.12.5
+ jest@25.5.4
+ eslint@6.8.0
+ react-test-renderer@16.13.1
+ @react-native-community/eslint-config@1.1.0
added 582 packages from 308 contributors, updated 3 packages and audited 1317 packages in 24.86s

57 packages are looking for funding
  run `npm fund` for details

found 3 low severity vulnerabilities
  run `npm audit fix` to fix them, or `npm audit` for details
info Installing required CocoaPods dependencies
(node:14642) UnhandledPromiseRejectionWarning: Error: Failed to install CocoaPods dependencies for iOS project, which is required by this template.
Please try again manually: "cd ./test/ios && pod install".
CocoaPods documentation: https://cocoapods.org/
    at runPodInstall (/Users/alimran/workspace/reactnative/prod/test/node_modules/react-native/node_modules/@react-native-community/cli/build/tools/installPods.js:99:13)
    at processTicksAndRejections (internal/process/task_queues.js:93:5)
    at async installPods (/Users/alimran/workspace/reactnative/prod/test/node_modules/react-native/node_modules/@react-native-community/cli/build/tools/installPods.js:222:5)
    at async generateProject (/Users/alimran/workspace/reactnative/prod/test/node_modules/react-native/node_modules/@react-native-community/cli/build/commands/init/initCompat.js:136:5)
    at async Object.initCompat (/Users/alimran/workspace/reactnative/prod/test/node_modules/react-native/node_modules/@react-native-community/cli/build/commands/init/initCompat.js:105:3)
(node:14642) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). To terminate the node process on unhandled promise rejection, use the CLI flag `--unhandled-rejections=strict` (see https://nodejs.org/api/cli.html#cli_unhandled_rejections_mode). (rejection id: 2)
(node:14642) [DEP0018] DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code.
alimran@Als-MacBook-Air prod % 
Результат установки пода вручную:

alimran@Als-MacBook-Air prod % cd test
alimran@Als-MacBook-Air test % ls
App.js          app.json        ios         package-lock.json
__tests__       babel.config.js     metro.config.js     package.json
android         index.js        node_modules
alimran@Als-MacBook-Air test % cd ios
alimran@Als-MacBook-Air ios % sudo pod install
Password:
Traceback (most recent call last):
    5: from /usr/local/bin/pod:23:in `<main>'
    4: from /usr/local/bin/pod:23:in `load'
    3: from /Library/Ruby/Gems/2.6.0/gems/cocoapods-1.10.0/bin/pod:55:in `<top (required)>'
    2: from /Library/Ruby/Gems/2.6.0/gems/cocoapods-1.10.0/lib/cocoapods/command.rb:48:in `run'
    1: from /Library/Ruby/Gems/2.6.0/gems/cocoapods-1.10.0/lib/cocoapods/command.rb:102:in `ensure_not_root_or_allowed!'
/Library/Ruby/Gems/2.6.0/gems/claide-1.0.3/lib/claide/command.rb:439:in `help!': [!] You cannot run CocoaPods as root. (CLAide::Help)

Usage:

    $ pod COMMAND

      CocoaPods, the Cocoa library package manager.

Commands:

    + cache        Manipulate the CocoaPods cache
    + env          Display pod environment
    + init         Generate a Podfile for the current directory
    + install      Install project dependencies according to versions from a
                   Podfile.lock
    + ipc          Inter-process communication
    + lib          Develop pods
    + list         List pods
    + outdated     Show outdated project dependencies
    + repo         Manage spec-repositories
    + setup        Setup the CocoaPods environment
    + spec         Manage pod specs
    + update       Update outdated project dependencies and create new Podfile.lock

Options:

    --allow-root   Allows CocoaPods to run as root
    --silent       Show nothing
    --version      Show the version of the tool
    --verbose      Show more debugging information
    --no-ansi      Show output without ANSI codes
    --help         Show help banner of specified command
alimran@Als-MacBook-Air ios % 
Ошибка запуска проекта ниже:

alimran@Als-MacBook-Air test % react-native run-ios
error Could not find "Podfile.lock" at /Users/alimran/workspace/reactnative/prod/test/ios/Podfile.lock. Did you run "pod install" in iOS directory?
info Found Xcode project "test.xcodeproj"
info Building (using "xcodebuild -project test.xcodeproj -configuration Debug -scheme test -destination id=06B32499-BA8E-488E-B934-FDC4C7D2A385")
(node:16530) Warning: Accessing non-existent property 'padLevels' of module exports inside circular dependency
(Use `node --trace-warnings ...` to show where the warning was created)
error Failed to build iOS project. We ran "xcodebuild" command but it exited with error code 65. To debug build logs further, consider building your app with Xcode.app, by opening test.xcodeproj. Run CLI with --verbose flag for more details.
Command line invocation:
    /Applications/Xcode.app/Contents/Developer/usr/bin/xcodebuild -project test.xcodeproj -configuration Debug -scheme test -destination id=06B32499-BA8E-488E-B934-FDC4C7D2A385

note: Using new build system
note: Building targets in parallel
note: Planning build
note: Constructing build description
warning: Capabilities for Signing & Capabilities may not function correctly because its entitlements use a placeholder team ID. To resolve this, select a development team in the test editor. (in target 'test' from project 'test')
ProcessProductPackaging "" /Users/alimran/Library/Developer/Xcode/DerivedData/test-alolrygzfwbwxdfvdrglncimtovw/Build/Intermediates.noindex/test.build/Debug-iphonesimulator/test.build/test.app-Simulated.xcent (in target 'test' from project 'test')
    cd /Users/alimran/workspace/reactnative/prod/test/ios
    

Entitlements:

{
    "application-identifier" = "FAKETEAMID.org.reactjs.native.example.test";
    "keychain-access-groups" =     (
        "FAKETEAMID.org.reactjs.native.example.test"
    );
}


    builtin-productPackagingUtility -entitlements -format xml -o /Users/alimran/Library/Developer/Xcode/DerivedData/test-alolrygzfwbwxdfvdrglncimtovw/Build/Intermediates.noindex/test.build/Debug-iphonesimulator/test.build/test.app-Simulated.xcent

ProcessProductPackaging "" /Users/alimran/Library/Developer/Xcode/DerivedData/test-alolrygzfwbwxdfvdrglncimtovw/Build/Intermediates.noindex/test.build/Debug-iphonesimulator/test.build/test.app.xcent (in target 'test' from project 'test')
    cd /Users/alimran/workspace/reactnative/prod/test/ios
    

Entitlements:

{
    "com.apple.security.get-task-allow" = 1;
}


    builtin-productPackagingUtility -entitlements -format xml -o /Users/alimran/Library/Developer/Xcode/DerivedData/test-alolrygzfwbwxdfvdrglncimtovw/Build/Intermediates.noindex/test.build/Debug-iphonesimulator/test.build/test.app.xcent

PhaseScriptExecution Start\ Packager /Users/alimran/Library/Developer/Xcode/DerivedData/test-alolrygzfwbwxdfvdrglncimtovw/Build/Intermediates.noindex/test.build/Debug-iphonesimulator/test.build/Script-FD10A7F022414F080027D42C.sh (in target 'test' from project 'test')
    cd /Users/alimran/workspace/reactnative/prod/test/ios
    /bin/sh -c /Users/alimran/Library/Developer/Xcode/DerivedData/test-alolrygzfwbwxdfvdrglncimtovw/Build/Intermediates.noindex/test.build/Debug-iphonesimulator/test.build/Script-FD10A7F022414F080027D42C.sh

CompileC /Users/alimran/Library/Developer/Xcode/DerivedData/test-alolrygzfwbwxdfvdrglncimtovw/Build/Intermediates.noindex/test.build/Debug-iphonesimulator/test.build/Objects-normal/x86_64/main.o /Users/alimran/workspace/reactnative/prod/test/ios/test/main.m normal x86_64 objective-c com.apple.compilers.llvm.clang.1_0.compiler (in target 'test' from project 'test')
    cd /Users/alimran/workspace/reactnative/prod/test/ios
    export LANG\=en_US.US-ASCII
    /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/clang -x objective-c -target x86_64-apple-ios10.0-simulator -fmessage-length\=0 -fdiagnostics-show-note-include-stack -fmacro-backtrace-limit\=0 -std\=gnu99 -fobjc-arc -fmodules -gmodules -fmodules-cache-path\=/Users/alimran/Library/Developer/Xcode/DerivedData/ModuleCache.noindex -fmodules-prune-interval\=86400 -fmodules-prune-after\=345600 -fbuild-session-file\=/Users/alimran/Library/Developer/Xcode/DerivedData/ModuleCache.noindex/Session.modulevalidation -fmodules-validate-once-per-build-session -Wnon-modular-include-in-framework-module -Werror\=non-modular-include-in-framework-module -Wno-trigraphs -fpascal-strings -O0 -fno-common -Wno-missing-field-initializers -Wno-missing-prototypes -Werror\=return-type -Wunreachable-code -Wno-implicit-atomic-properties -Werror\=deprecated-objc-isa-usage -Wno-objc-interface-ivars -Werror\=objc-root-class -Wno-arc-repeated-use-of-weak -Wimplicit-retain-self -Wduplicate-method-match -Wno-missing-braces -Wparentheses -Wswitch -Wunused-function -Wno-unused-label -Wno-unused-parameter -Wunused-variable -Wunused-value -Wempty-body -Wuninitialized -Wconditional-uninitialized -Wno-unknown-pragmas -Wno-shadow -Wno-four-char-constants -Wno-conversion -Wconstant-conversion -Wint-conversion -Wbool-conversion -Wenum-conversion -Wno-float-conversion -Wnon-literal-null-conversion -Wobjc-literal-conversion -Wshorten-64-to-32 -Wpointer-sign -Wno-newline-eof -Wno-selector -Wno-strict-selector-match -Wundeclared-selector -Wdeprecated-implementations -DDEBUG\=1 -DOBJC_OLD_DISPATCH_PROTOTYPES\=0 -isysroot /Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator14.3.sdk -fasm-blocks -fstrict-aliasing -Wprotocol -Wdeprecated-declarations -g -Wno-sign-conversion -Winfinite-recursion -Wcomma -Wblock-capture-autoreleasing -Wstrict-prototypes -Wno-semicolon-before-method-body -fobjc-abi-version\=2 -fobjc-legacy-dispatch -index-store-path /Users/alimran/Library/Developer/Xcode/DerivedData/test-alolrygzfwbwxdfvdrglncimtovw/Index/DataStore -iquote /Users/alimran/Library/Developer/Xcode/DerivedData/test-alolrygzfwbwxdfvdrglncimtovw/Build/Intermediates.noindex/test.build/Debug-iphonesimulator/test.build/test-generated-files.hmap -I/Users/alimran/Library/Developer/Xcode/DerivedData/test-alolrygzfwbwxdfvdrglncimtovw/Build/Intermediates.noindex/test.build/Debug-iphonesimulator/test.build/test-own-target-headers.hmap -I/Users/alimran/Library/Developer/Xcode/DerivedData/test-alolrygzfwbwxdfvdrglncimtovw/Build/Intermediates.noindex/test.build/Debug-iphonesimulator/test.build/test-all-target-headers.hmap -iquote /Users/alimran/Library/Developer/Xcode/DerivedData/test-alolrygzfwbwxdfvdrglncimtovw/Build/Intermediates.noindex/test.build/Debug-iphonesimulator/test.build/test-project-headers.hmap -I/Users/alimran/Library/Developer/Xcode/DerivedData/test-alolrygzfwbwxdfvdrglncimtovw/Build/Products/Debug-iphonesimulator/include -I/Users/alimran/Library/Developer/Xcode/DerivedData/test-alolrygzfwbwxdfvdrglncimtovw/Build/Intermediates.noindex/test.build/Debug-iphonesimulator/test.build/DerivedSources-normal/x86_64 -I/Users/alimran/Library/Developer/Xcode/DerivedData/test-alolrygzfwbwxdfvdrglncimtovw/Build/Intermediates.noindex/test.build/Debug-iphonesimulator/test.build/DerivedSources/x86_64 -I/Users/alimran/Library/Developer/Xcode/DerivedData/test-alolrygzfwbwxdfvdrglncimtovw/Build/Intermediates.noindex/test.build/Debug-iphonesimulator/test.build/DerivedSources -F/Users/alimran/Library/Developer/Xcode/DerivedData/test-alolrygzfwbwxdfvdrglncimtovw/Build/Products/Debug-iphonesimulator -MMD -MT dependencies -MF /Users/alimran/Library/Developer/Xcode/DerivedData/test-alolrygzfwbwxdfvdrglncimtovw/Build/Intermediates.noindex/test.build/Debug-iphonesimulator/test.build/Objects-normal/x86_64/main.d --serialize-diagnostics /Users/alimran/Library/Developer/Xcode/DerivedData/test-alolrygzfwbwxdfvdrglncimtovw/Build/Intermediates.noindex/test.build/Debug-iphonesimulator/test.build/Objects-normal/x86_64/main.dia -c /Users/alimran/workspace/reactnative/prod/test/ios/test/main.m -o /Users/alimran/Library/Developer/Xcode/DerivedData/test-alolrygzfwbwxdfvdrglncimtovw/Build/Intermediates.noindex/test.build/Debug-iphonesimulator/test.build/Objects-normal/x86_64/main.o
In file included from /Users/alimran/workspace/reactnative/prod/test/ios/test/main.m:3:
/Users/alimran/workspace/reactnative/prod/test/ios/test/AppDelegate.h:1:9: fatal error: 'React/RCTBridgeDelegate.h' file not found
#import <React/RCTBridgeDelegate.h>
        ^~~~~~~~~~~~~~~~~~~~~~~~~~~
1 error generated.

CompileC /Users/alimran/Library/Developer/Xcode/DerivedData/test-alolrygzfwbwxdfvdrglncimtovw/Build/Intermediates.noindex/test.build/Debug-iphonesimulator/test.build/Objects-normal/x86_64/AppDelegate.o /Users/alimran/workspace/reactnative/prod/test/ios/test/AppDelegate.m normal x86_64 objective-c com.apple.compilers.llvm.clang.1_0.compiler (in target 'test' from project 'test')
    cd /Users/alimran/workspace/reactnative/prod/test/ios
    export LANG\=en_US.US-ASCII
    /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/clang -x objective-c -target x86_64-apple-ios10.0-simulator -fmessage-length\=0 -fdiagnostics-show-note-include-stack -fmacro-backtrace-limit\=0 -std\=gnu99 -fobjc-arc -fmodules -gmodules -fmodules-cache-path\=/Users/alimran/Library/Developer/Xcode/DerivedData/ModuleCache.noindex -fmodules-prune-interval\=86400 -fmodules-prune-after\=345600 -fbuild-session-file\=/Users/alimran/Library/Developer/Xcode/DerivedData/ModuleCache.noindex/Session.modulevalidation -fmodules-validate-once-per-build-session -Wnon-modular-include-in-framework-module -Werror\=non-modular-include-in-framework-module -Wno-trigraphs -fpascal-strings -O0 -fno-common -Wno-missing-field-initializers -Wno-missing-prototypes -Werror\=return-type -Wunreachable-code -Wno-implicit-atomic-properties -Werror\=deprecated-objc-isa-usage -Wno-objc-interface-ivars -Werror\=objc-root-class -Wno-arc-repeated-use-of-weak -Wimplicit-retain-self -Wduplicate-method-match -Wno-missing-braces -Wparentheses -Wswitch -Wunused-function -Wno-unused-label -Wno-unused-parameter -Wunused-variable -Wunused-value -Wempty-body -Wuninitialized -Wconditional-uninitialized -Wno-unknown-pragmas -Wno-shadow -Wno-four-char-constants -Wno-conversion -Wconstant-conversion -Wint-conversion -Wbool-conversion -Wenum-conversion -Wno-float-conversion -Wnon-literal-null-conversion -Wobjc-literal-conversion -Wshorten-64-to-32 -Wpointer-sign -Wno-newline-eof -Wno-selector -Wno-strict-selector-match -Wundeclared-selector -Wdeprecated-implementations -DDEBUG\=1 -DOBJC_OLD_DISPATCH_PROTOTYPES\=0 -isysroot /Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator14.3.sdk -fasm-blocks -fstrict-aliasing -Wprotocol -Wdeprecated-declarations -g -Wno-sign-conversion -Winfinite-recursion -Wcomma -Wblock-capture-autoreleasing -Wstrict-prototypes -Wno-semicolon-before-method-body -fobjc-abi-version\=2 -fobjc-legacy-dispatch -index-store-path /Users/alimran/Library/Developer/Xcode/DerivedData/test-alolrygzfwbwxdfvdrglncimtovw/Index/DataStore -iquote /Users/alimran/Library/Developer/Xcode/DerivedData/test-alolrygzfwbwxdfvdrglncimtovw/Build/Intermediates.noindex/test.build/Debug-iphonesimulator/test.build/test-generated-files.hmap -I/Users/alimran/Library/Developer/Xcode/DerivedData/test-alolrygzfwbwxdfvdrglncimtovw/Build/Intermediates.noindex/test.build/Debug-iphonesimulator/test.build/test-own-target-headers.hmap -I/Users/alimran/Library/Developer/Xcode/DerivedData/test-alolrygzfwbwxdfvdrglncimtovw/Build/Intermediates.noindex/test.build/Debug-iphonesimulator/test.build/test-all-target-headers.hmap -iquote /Users/alimran/Library/Developer/Xcode/DerivedData/test-alolrygzfwbwxdfvdrglncimtovw/Build/Intermediates.noindex/test.build/Debug-iphonesimulator/test.build/test-project-headers.hmap -I/Users/alimran/Library/Developer/Xcode/DerivedData/test-alolrygzfwbwxdfvdrglncimtovw/Build/Products/Debug-iphonesimulator/include -I/Users/alimran/Library/Developer/Xcode/DerivedData/test-alolrygzfwbwxdfvdrglncimtovw/Build/Intermediates.noindex/test.build/Debug-iphonesimulator/test.build/DerivedSources-normal/x86_64 -I/Users/alimran/Library/Developer/Xcode/DerivedData/test-alolrygzfwbwxdfvdrglncimtovw/Build/Intermediates.noindex/test.build/Debug-iphonesimulator/test.build/DerivedSources/x86_64 -I/Users/alimran/Library/Developer/Xcode/DerivedData/test-alolrygzfwbwxdfvdrglncimtovw/Build/Intermediates.noindex/test.build/Debug-iphonesimulator/test.build/DerivedSources -F/Users/alimran/Library/Developer/Xcode/DerivedData/test-alolrygzfwbwxdfvdrglncimtovw/Build/Products/Debug-iphonesimulator -MMD -MT dependencies -MF /Users/alimran/Library/Developer/Xcode/DerivedData/test-alolrygzfwbwxdfvdrglncimtovw/Build/Intermediates.noindex/test.build/Debug-iphonesimulator/test.build/Objects-normal/x86_64/AppDelegate.d --serialize-diagnostics /Users/alimran/Library/Developer/Xcode/DerivedData/test-alolrygzfwbwxdfvdrglncimtovw/Build/Intermediates.noindex/test.build/Debug-iphonesimulator/test.build/Objects-normal/x86_64/AppDelegate.dia -c /Users/alimran/workspace/reactnative/prod/test/ios/test/AppDelegate.m -o /Users/alimran/Library/Developer/Xcode/DerivedData/test-alolrygzfwbwxdfvdrglncimtovw/Build/Intermediates.noindex/test.build/Debug-iphonesimulator/test.build/Objects-normal/x86_64/AppDelegate.o
In file included from /Users/alimran/workspace/reactnative/prod/test/ios/test/AppDelegate.m:1:
/Users/alimran/workspace/reactnative/prod/test/ios/test/AppDelegate.h:1:9: fatal error: 'React/RCTBridgeDelegate.h' file not found
#import <React/RCTBridgeDelegate.h>
        ^~~~~~~~~~~~~~~~~~~~~~~~~~~
1 error generated.


** BUILD FAILED **


The following build commands failed:
    CompileC /Users/alimran/Library/Developer/Xcode/DerivedData/test-alolrygzfwbwxdfvdrglncimtovw/Build/Intermediates.noindex/test.build/Debug-iphonesimulator/test.build/Objects-normal/x86_64/main.o /Users/alimran/workspace/reactnative/prod/test/ios/test/main.m normal x86_64 objective-c com.apple.compilers.llvm.clang.1_0.compiler
    CompileC /Users/alimran/Library/Developer/Xcode/DerivedData/test-alolrygzfwbwxdfvdrglncimtovw/Build/Intermediates.noindex/test.build/Debug-iphonesimulator/test.build/Objects-normal/x86_64/AppDelegate.o /Users/alimran/workspace/reactnative/prod/test/ios/test/AppDelegate.m normal x86_64 objective-c com.apple.compilers.llvm.clang.1_0.compiler
(2 failures)

alimran@Als-MacBook-Air test % 
См. структуру папок ниже. Я надеюсь, что у некоторых есть правильное решение этой проблемы. #Спасибо

 26.12.2020 16:49
5
0
29 559
10
Данный вопрос помечен как решенный
 Ответы 10
 Ответ принят как подходящий
Я решил свою проблему сам. Если у кого-то есть такая проблема, пожалуйста, следуйте шагу ниже. Я надеюсь, что это будет полезно для решения вашей проблемы.

Прежде всего, если вы установили react-native-cli старую версию глобально на свой компьютер, пожалуйста, удалите ее, потому что она нам не нужна.
Если вы установили последнюю версию Pod, удалите ее и установите более раннюю версию: sudo gem install cocoapods -v 1.8.4.
Затем перейдите в свою рабочую папку и создайте новый проект с помощью npx: npx react-native init AwesomeProject -или- npx react-native init AwesomeProject --version X.XX.X.
Затем перейдите в каталог только что созданного проекта: cd AwesomeProject.
Перейдите в папку iOS: cd ios
Установить модуль: pod install
Вернуться к корню вашего проекта: cd ..
Рон команда: npx react-native start
Откройте другой терминал и выполните команду: npx react-native run-ios
Моя проблема была решена этим несколькими крутыми советами выше, и я надеюсь, что это будет полезно для вас.

 28.12.2020 05:26
В моем случае это решилось путем повторного клонирования репо и его повторного запуска.

Настраивать: Xкод 12.4 Мак М1 реактивный натив 63.4

 15.02.2021 19:48
Это известная проблема с Flipper.
1- Комментарий Flipper к PodFile

  post_install do |installer|
    flipper_post_install(installer)
  end
2- Установите капсулы cd ios/ && pod install

3- Теперь вы сможете запустить Симулятор cd .. && yarn ios

Вот открытый вопрос в отношении: https://github.com/facebook/flipper/issues/1940

 17.02.2021 22:58
Если у вас есть чип Apple M1, последняя версия Cocopods не полностью совместима.

Исправьте это:

sudo gem удалить Cocopods
sudo gem установить Cocopods -v 1.8.4
npx pod-установить
 22.02.2021 13:26
Я столкнулся с этой проблемой при запуске «npx run-ios».

Оказывается, у меня на компьютере установлено 2 Xcode (11.7, 12.4), а версия по умолчанию, работающая на терминале, — Xcode 11.7, и с ней были некоторые проблемы (проект не может быть открыт на 11.7, а на 12.4 все в порядке)

Я изменил версию по умолчанию и решил ее, как указано здесь: https://stackoverflow.com/a/58229921/11266070

 27.04.2021 08:05
Я использовал brew для установки CocoaPods, и это решило для меня все проблемы.

brew install cocoapods
 20.12.2021 13:30
открыть терминал с rosetta, мне помогло открыть розеткой

 15.01.2022 17:04
Очистите сборку в xcode и запустите в vsCode ---> npx react-native run-ios

 27.05.2022 09:12
Если не установлен cocopod. Сначала установите его.

Затем

запустить компакт-диск iOS

запустить установку модуля

CD ..

удалить папку сборки

запустить реактивный run-ios

если ошибка сохраняется, снова удалить папку сборки откройте папку /ios в x-code перейдите в «Файл» -> «Настройки проекта» -> «Система сборки» -> «Изменить» (настройки общей рабочей области и настройки рабочей области для каждого пользователя): «Система сборки» -> «Устаревшая система сборки».

 14.03.2023 06:17
В iOS запустите приложение. Я столкнулся с той же проблемой, я исправил эту проблему следующим образом.

Моя существующая структура папок, подобная этой

** New Folder** 
после изменения имени папки

/Пользователи/Загрузки/Новая папка

** NewFolder**
вот так после запуска приложения оно будет работать в чипе macM1

 30.03.2023 13:39
Другие вопросы по теме
Как вы можете сделать это представление в iOS Swift?
XCode: пользовательский шрифт не применяется
Как удалить пакет Swift из XCode?
Xcode 10.1 ViewController.h против ViewController.swift
Возникает ошибка: невозможно использовать член экземпляра 'card0' в инициализаторе свойства; инициализаторы свойств запускаются до того, как «я» станет доступным
Файл AppsFlyerLib/AppsFlyerTracker.h не найден. Кто-нибудь видел эту ошибку?
Где я могу включить переключатель в возможности покупки в приложении в Xcode 12?
Как вывести переменную из локальной области и иметь возможность использовать эту переменную в другом представлении или других функциях в Swift, Xcode?
Swift сохранит базовую локализацию и сделает все остальное английским
Flutter: Runner.app/Info.plist не существует. Фаза сборки Flutter «Thin Binary» должна запускаться после «Копировать ресурсы пакета»
Похожие вопросы
Почему моя функция устранения дребезга не работает в приложении React с хуками?
Невозможно передать реквизиты, такие как className или style, в реквизиты пользовательских компонентов
Asp.NET Core + ReactJs — как правильно хранить данные аутентификации?
Axios делает 2 запроса при обновлении
Как сбросить хук useMutation в Apollo Client
Как применить настройки функции шрифта в пользовательском интерфейсе материала makeStyles и динамически изменить backgorundColor с помощью реквизита
React Native — состояние возвращает значение null после установки состояния
Как импортировать тег скрипта с атрибутом данных в React?
Преобразовать сдвиг часового пояса в секундах из UTC в javascript
Как отправить запрос POST, используя axios с React Hooks?
Разделы
Блог

Вопросы

Теги

О сайте

Контакты
info@reddeveloper.ru
Правовая информация
Политика конфиденциальности

Пользовательское соглашение


Находите ответы на сложные технические вопросы по программированию, с которыми сталкиваются инженеры по всему миру в своей ежедневной практике на сайте RedDeveloper.

© 2026 «RedDeveloper.ru»

RedDeveloper
Блог
Вопросы
Теги
Поиск...
Предупреждение: isMounted (...) устарел в простых классах Javascript
Вопросы
JAVASCRIPT
Предупреждение: isMounted (...) устарел в простых классах Javascript
Я реализую 2 экрана с помощью реакции-навигации. Но при переходе на вторую страницу я получил предупреждение ниже:

Warning: isMounted(...) is deprecated in plain Javascript Classes. Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks.

Версии:

реагировать: 16.3.1
реагировать-родной: 0.55.2
реагировать-навигация: 1.5.11
Утилита: 0.10.3
Login.js

import React, { Component } from 'react';
import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import styles from "./styles";

export default class Login extends Component {
    constructor(props) {
    super(props);
}

render() {
    const { navigate } = this.props.navigation;     
    return (
        <View style = {styles.container}>         
            <View style = {styles.formContainer}>                 
                <TouchableOpacity style = {styles.button} onPress = {()=> navigate('Home')} >
                    <Text style = {styles.buttonText}>LOGIN</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
Home.js

import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styles from "./styles";

export default class Home extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { navigate } = this.props.navigation;
        return(
            <View style = {styles.container}>         
                <Text>Home Screen</Text>
            </View>
        )
    }
}
Что мне здесь не хватает?

 12.04.2018 08:09
32
6
15 212
11
Данный вопрос помечен как решенный
 Ответы 11
 Ответ принят как подходящий
Это проблема с последними версиями React Navigation и React Native. Чтобы заставить его замолчать, добавьте:

import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
Я ожидаю, что это будет исправлено в React Navigation в течение следующих нескольких недель.

 12.04.2018 09:48
Для меня работает следующее решение:

import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
 22.04.2018 13:05
Это на самом деле проблема React-Native

Вы можете подождать и проверить, когда будет доступно исправление, здесь: https://github.com/facebook/react-native/issues/18868

А пока вы можете скрыть предупреждение, как предлагается.

 24.04.2018 10:00
Проблема с реакцией-навигацией закрыта, можете посмотреть здесь

Они заявляют, что это проблема где-то внутри react-native

 03.05.2018 14:12
Это не из react-navigation, поскольку я изучал node_modules, а react-navigation не использует isMounted, он исходит откуда-то из React-Native, Я также сделал тот же хак, который использовал @Romsun

    import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
 03.05.2018 18:32
Игнорировать это сообщение - неправильный путь для хорошего разработчика. Если мы устраним эту проблему, то утечка памяти уменьшится.

 11.05.2018 19:53
Если вы используете EXPO для разработки RN, эта проблема теперь исправлена ​​в expo 27.0.2.

См. https://forums.expo.io/t/warnings-after-upgrade-to-expo-27/9579/12

 23.05.2018 07:32
Приведенные выше ответы не сработали для меня, но добавление следующего в index.js помогло:

console.ignoreYellowBox = ['Warning: isMounted(...) is deprecated'];
Или обновитесь до expo 27.0.2, который в основном добавляет вышеупомянутое к Expo.js. См. Дополнительную информацию здесь: https://forums.expo.io/t/warnings-after-upgrade-to-expo-27/9579/10

Как указывалось в некоторых других ответах, это проблема react-native, поэтому, надеюсь, она скоро будет исправлена ​​в следующей версии Expo.

 03.06.2018 12:58
Вот что я сделал для этой проблемы на данный момент:

Шаг 1. Нажмите на предупреждение

Шаг 2: В желтом окне нажмите на опцию трассировки стека в правом верхнем углу

Шаг 3: Найдите путь, по которому появилось предупреждение, например: C: \ Users \ username \ projectname \ node_modules \ react \ cjs \ react.development.js

Шаг 4: Откройте путь в редакторе

Шаг 5: Найдите ключевое слово isMounted под устаревшим API и удалите устаревшую функцию и предупреждение, относящиеся к нему.

Шаг 6: Сохраните и перезагрузите приложение !! Вот и все

 11.06.2018 08:22
Если вы используете клиент expo, обновите свою версию до expo@27.0.2, что устраняет это предупреждение. . .

 12.06.2018 16:22
Используйте этот оператор в index.js:

import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
 23.07.2018 12:23
Другие вопросы по теме
Как связать с конкретным маршрутом динамическую реакцию?
Как перенаправить на правильный клиентский маршрут после социальной аутентификации с помощью паспорта (реагировать, реагировать-маршрутизатор, экспресс, паспорт)
Метод DRY React для рендеринга одних и тех же свойств и текста для разных типов компонентов
Реагировать: .map - это не функция
JavaScript не может получить доступ к переменной в операторе возврата с несколькими значениями
XMLHttpRequest не может загрузить http://abc.mydomain.org/data/todo.js
Определить нажатый элемент и обновить значение aria-checked в React
Соединение фронтенда и бэкенда стека MERN
Реагируйте на ввод нескольких текстов, управляя каждым другим состоянием
Ошибка при настройке Less в ReactJS
Похожие вопросы
Проверьте, существует ли идентификатор электронной почты в AdminDirectory.Users
Удален пробел между кнопками пробелов в диалоге начальной загрузки
Как связать с конкретным маршрутом динамическую реакцию?
Вызов кода Wicket 6 из Javascript и возвращение значения
Ionic 1 - Как включить кнопку возврата в заголовке - angularjs
SDK Google javascript для проблем с выходом из системы
Вызвать диалоговое окно материала как предупреждение из файла service.ts
Вызов js-методов из java
Как я могу получить значение тега span, которое имеет то же имя класса и создается динамически с помощью JQuery?
Ошибки синтаксического анализа шаблона Angular: канал не может быть найден
Разделы
Блог

Вопросы

Теги

О сайте

Контакты
info@reddeveloper.ru
Правовая информация
Политика конфиденциальности

Пользовательское соглашение


Находите ответы на сложные технические вопросы по программированию, с которыми сталкиваются инженеры по всему миру в своей ежедневной практике на сайте RedDeveloper.

© 2026 «RedDeveloper.ru»

RedDeveloper
Блог
Вопросы
Теги
Поиск...
Как отменить выборку на componentWillUnmount
Вопросы
REACTJS
Как отменить выборку на componentWillUnmount
Думаю, название говорит само за себя. Желтое предупреждение отображается каждый раз, когда я отключаю компонент, который все еще загружается.

Console
Warning: Can't call setState (or forceUpdate) on an unmounted component. This is a no-op, but ... To fix, cancel all subscriptions and asynchronous tasks in the componentWillUnmount method.

  constructor(props){
    super(props);
    this.state = {
      isLoading: true,
      dataSource: [{
        name: 'loading...',
        id: 'loading',
      }]
    }
  }

  componentDidMount(){
    return fetch('LINK HERE')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson,
        }, function(){
        });
      })
      .catch((error) =>{
        console.error(error);
      });
  }
 18.04.2018 20:15
104
5
79 104
11
Данный вопрос помечен как решенный
 Ответы 11
 Ответ принят как подходящий
Когда вы запускаете обещание, может пройти несколько секунд, прежде чем оно разрешится, и к этому времени пользователь может перейти в другое место в вашем приложении. Поэтому, когда Promise разрешает, setState выполняется на отключенном компоненте, и вы получаете сообщение об ошибке - как и в вашем случае. Это также может вызвать утечку памяти.

Вот почему лучше всего вынести часть асинхронной логики из компонентов.

В противном случае вам нужно будет как-то отмени свое обещание. В качестве альтернативы - в крайнем случае (это антипаттерн) - вы можете сохранить переменную, чтобы проверять, смонтирован ли компонент:

componentDidMount(){
  this.mounted = true;

  this.props.fetchData().then((response) => {
    if (this.mounted) {
      this.setState({ data: response })
    }
  })
}

componentWillUnmount(){
  this.mounted = false;
}
Подчеркну еще раз - этот это антипаттерн, но может быть достаточным в вашем случае (как и в случае с реализацией Formik).

Аналогичное обсуждение на GitHub

Обновлено:

Вероятно, вот как я могу решить ту же проблему (не имея ничего, кроме React) с Хуки:

ВАРИАНТ А:

import React, { useState, useEffect } from "react";

export default function Page() {
  const value = usePromise("https://something.com/api/");
  return (
    <p>{value ? value : "fetching data..."}</p>
  );
}

function usePromise(url) {
  const [value, setState] = useState(null);

  useEffect(() => {
    let isMounted = true; // track whether component is mounted

    request.get(url)
      .then(result => {
        if (isMounted) {
          setState(result);
        }
      });

    return () => {
      // clean up
      isMounted = false;
    };
  }, []); // only on "didMount"

  return value;
}
ВАРИАНТ Б: В качестве альтернативы useRef, который ведет себя как статическое свойство класса, что означает, что он не выполняет повторную визуализацию компонента при изменении его значения:

function usePromise2(url) {
  const isMounted = React.useRef(true)
  const [value, setState] = useState(null);


  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    request.get(url)
      .then(result => {
        if (isMounted.current) {
          setState(result);
        }
      });
  }, []);

  return value;
}

// or extract it to custom hook:
function useIsMounted() {
  const isMounted = React.useRef(true)

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  return isMounted; // returning "isMounted.current" wouldn't work because we would return unmutable primitive
}
Пример: https://codesandbox.io/s/86n1wq2z8

 18.04.2018 20:29
Когда мне нужно «отменить все подписки и асинхронно», я обычно отправляю что-то в redux в componentWillUnmount, чтобы проинформировать всех других подписчиков и при необходимости отправить еще один запрос об отмене на сервер.

 18.04.2018 20:40
Думаю, я придумал способ обойти это. Проблема не столько в самой выборке, сколько в setState после закрытия компонента. Итак, решение заключалось в том, чтобы установить this.state.isMounted как false, а затем на componentWillMount изменить его на true, а в componentWillUnmount снова установить на false. Затем просто if (this.state.isMounted) setState внутри выборки. Вот так:

  constructor(props){
    super(props);
    this.state = {
      isMounted: false,
      isLoading: true,
      dataSource: [{
        name: 'loading...',
        id: 'loading',
      }]
    }
  }

  componentDidMount(){
    this.setState({
      isMounted: true,
    })

    return fetch('LINK HERE')
      .then((response) => response.json())
      .then((responseJson) => {
        if (this.state.isMounted){
          this.setState({
            isLoading: false,
            dataSource: responseJson,
          }, function(){
          });
        }
      })
      .catch((error) =>{
        console.error(error);
      });
  }

  componentWillUnmount() {
    this.setState({
      isMounted: false,
    })
  }
 18.04.2018 21:06
Суть этого предупреждения в том, что у вашего компонента есть ссылка на него, удерживаемая каким-то невыполненным обратным вызовом / обещанием.

Чтобы избежать антипаттерна сохранения вашего состояния isMounted (которое поддерживает работу вашего компонента), как это было сделано во втором шаблоне, сайт реакции предлагает используя необязательное обещание; однако этот код, кажется, также поддерживает ваш объект в живых.

Вместо этого я сделал это, используя закрытие с вложенной функцией привязки к setState.

Вот мой конструктор (машинописный текст)…

constructor(props: any, context?: any) {
    super(props, context);

    let cancellable = {
        // it's important that this is one level down, so we can drop the
        // reference to the entire object by setting it to undefined.
        setState: this.setState.bind(this)
    };

    this.componentDidMount = async () => {
        let result = await fetch(…);            
        // ideally we'd like optional chaining
        // cancellable.setState?.({ url: result || '' });
        cancellable.setState && cancellable.setState({ url: result || '' });
    }

    this.componentWillUnmount = () => {
        cancellable.setState = undefined; // drop all references.
    }
}
 03.05.2018 13:31
Дружелюбные люди из React рекомендую оборачивают ваши вызовы / обещания fetch в отменяемые обещания. Хотя в этой документации нет рекомендаций по хранению кода отдельно от класса или функции с выборкой, это кажется целесообразным, потому что другие классы и функции могут нуждаться в этой функциональности, дублирование кода является анти-шаблоном и независимо от устаревшего кода. следует утилизировать или аннулировать в componentWillUnmount(). Согласно React, вы можете вызвать cancel() для обернутого обещания в componentWillUnmount, чтобы избежать установки состояния на размонтированном компоненте.

Предоставленный код будет выглядеть примерно так, если мы воспользуемся React в качестве руководства:

const makeCancelable = (promise) => {
    let hasCanceled_ = false;

    const wrappedPromise = new Promise((resolve, reject) => {
        promise.then(
            val => hasCanceled_ ? reject({isCanceled: true}) : resolve(val),
            error => hasCanceled_ ? reject({isCanceled: true}) : reject(error)
        );
    });

    return {
        promise: wrappedPromise,
        cancel() {
            hasCanceled_ = true;
        },
    };
};

const cancelablePromise = makeCancelable(fetch('LINK HERE'));

constructor(props){
    super(props);
    this.state = {
        isLoading: true,
        dataSource: [{
            name: 'loading...',
            id: 'loading',
        }]
    }
}

componentDidMount(){
    cancelablePromise.
        .then((response) => response.json())
        .then((responseJson) => {
            this.setState({
                isLoading: false,
                dataSource: responseJson,
            }, () => {

            });
        })
        .catch((error) =>{
            console.error(error);
        });
}

componentWillUnmount() {
    cancelablePromise.cancel();
}
---- РЕДАКТИРОВАТЬ ----

Я обнаружил, что данный ответ может быть не совсем правильным, следя за проблемой на GitHub. Вот одна из версий, которые я использую, и она подходит для моих целей:

export const makeCancelableFunction = (fn) => {
    let hasCanceled = false;

    return {
        promise: (val) => new Promise((resolve, reject) => {
            if (hasCanceled) {
                fn = null;
            } else {
                fn(val);
                resolve(val);
            }
        }),
        cancel() {
            hasCanceled = true;
        }
    };
};
Идея заключалась в том, чтобы помочь сборщику мусора освободить память, сделав функцию или что-то еще, что вы используете, null.

 07.09.2018 17:53
Вы можете использовать AbortController для отмены запроса на выборку.

См. Также: https://www.npmjs.com/package/abortcontroller-polyfill

class FetchComponent extends React.Component{
  state = { todos: [] };
  
  controller = new AbortController();
  
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/todos',{
      signal: this.controller.signal
    })
    .then(res => res.json())
    .then(todos => this.setState({ todos }))
    .catch(e => alert(e.message));
  }
  
  componentWillUnmount(){
    this.controller.abort();
  }
  
  render(){
    return null;
  }
}

class App extends React.Component{
  state = { fetch: true };
  
  componentDidMount(){
    this.setState({ fetch: false });
  }
  
  render(){
    return this.state.fetch && <FetchComponent/>
  }
}

ReactDOM.render(<App/>, document.getElementById('root'))
<script src = "https://cdnjs.cloudflare.com/ajax/libs/react/15.1.0/react.min.js"></script>
<script src = "https://cdnjs.cloudflare.com/ajax/libs/react/15.1.0/react-dom.min.js"></script>
<div id = "root"></div>
 22.11.2018 18:37
Поскольку сообщение было открыто, добавлена ​​возможность прерывания. https://developers.google.com/web/updates/2017/09/abortable-fetch

(из документов :)

Контроллер + сигнальный маневр Встречайте AbortController и AbortSignal:

const controller = new AbortController();
const signal = controller.signal;
У контроллера есть только один метод:

controller.abort (); Когда вы это сделаете, он уведомит сигнал:

signal.addEventListener('abort', () => {
  // Logs true:
  console.info(signal.aborted);
});
Этот API предоставляется стандартом DOM, и это весь API. Он намеренно универсален, поэтому может использоваться другими веб-стандартами и библиотеками JavaScript.

например, вот как можно установить тайм-аут выборки через 5 секунд:

const controller = new AbortController();
const signal = controller.signal;

setTimeout(() => controller.abort(), 5000);

fetch(url, { signal }).then(response => {
  return response.text();
}).then(text => {
  console.info(text);
});
 26.12.2018 16:15
Я думаю, что если нет необходимости сообщать серверу об отмене - лучший подход - просто использовать синтаксис async / await (если он доступен).

constructor(props){
  super(props);
  this.state = {
    isLoading: true,
    dataSource: [{
      name: 'loading...',
      id: 'loading',
    }]
  }
}

async componentDidMount() {
  try {
    const responseJson = await fetch('LINK HERE')
      .then((response) => response.json());

    this.setState({
      isLoading: false,
      dataSource: responseJson,
    }
  } catch {
    console.error(error);
  }
}
 29.10.2019 17:20
В дополнение к примерам перехватчиков отменяемых обещаний в принятом решении может быть удобно иметь ловушку useAsyncCallback, которая обертывает обратный вызов запроса и возвращает отменяемое обещание. Идея та же, но с крючком, работающим как обычный useCallback. Вот пример реализации:

function useAsyncCallback<T, U extends (...args: any[]) => Promise<T>>(callback: U, dependencies: any[]) {
  const isMounted = useRef(true)

  useEffect(() => {
    return () => {
      isMounted.current = false
    }
  }, [])

  const cb = useCallback(callback, dependencies)

  const cancellableCallback = useCallback(
    (...args: any[]) =>
      new Promise<T>((resolve, reject) => {
        cb(...args).then(
          value => (isMounted.current ? resolve(value) : reject({ isCanceled: true })),
          error => (isMounted.current ? reject(error) : reject({ isCanceled: true }))
        )
      }),
    [cb]
  )

  return cancellableCallback
}
 02.12.2019 09:37
Используя пакет CPromise, вы можете отменить цепочки обещаний, в том числе вложенные. Он поддерживает AbortController и генераторы в качестве замены асинхронных функций ECMA. Используя декораторы CPromise, вы можете легко управлять своими асинхронными задачами, делая их отменяемыми.

Использование декораторов Живая демонстрация:

import React from "react";
import { ReactComponent, timeout } from "c-promise2";
import cpFetch from "cp-fetch";

@ReactComponent
class TestComponent extends React.Component {
  state = {
    text: "fetching..."
  };

  @timeout(5000)
  *componentDidMount() {
    console.info("mounted");
    const response = yield cpFetch(this.props.url);
    this.setState({ text: `json: ${yield response.text()}` });
  }

  render() {
    return <div>{this.state.text}</div>;
  }

  componentWillUnmount() {
    console.info("unmounted");
  }
}
Все этапы полностью отменяются / отменяются. Вот пример использования его с React Живая демонстрация

import React, { Component } from "react";
import {
  CPromise,
  CanceledError,
  ReactComponent,
  E_REASON_UNMOUNTED,
  listen,
  cancel
} from "c-promise2";
import cpAxios from "cp-axios";

@ReactComponent
class TestComponent extends Component {
  state = {
    text: ""
  };

  *componentDidMount(scope) {
    console.info("mount");
    scope.onCancel((err) => console.info(`Cancel: ${err}`));
    yield CPromise.delay(3000);
  }

  @listen
  *fetch() {
    this.setState({ text: "fetching..." });
    try {
      const response = yield cpAxios(this.props.url).timeout(
        this.props.timeout
      );
      this.setState({ text: JSON.stringify(response.data, null, 2) });
    } catch (err) {
      CanceledError.rethrow(err, E_REASON_UNMOUNTED);
      this.setState({ text: err.toString() });
    }
  }

  *componentWillUnmount() {
    console.info("unmount");
  }

  render() {
    return (
      <div className = "component">
        <div className = "caption">useAsyncEffect demo:</div>
        <div>{this.state.text}</div>
        <button
          className = "btn btn-success"
          type = "submit"
          onClick = {() => this.fetch(Math.round(Math.random() * 200))}
        >
          Fetch random character info
        </button>
        <button
          className = "btn btn-warning"
          onClick = {() => cancel.call(this, "oops!")}
        >
          Cancel request
        </button>
      </div>
    );
  }
}
Использование хуков и метода cancel

import React, { useState } from "react";
import {
  useAsyncEffect,
  E_REASON_UNMOUNTED,
  CanceledError
} from "use-async-effect2";
import cpAxios from "cp-axios";

export default function TestComponent(props) {
  const [text, setText] = useState("");
  const [id, setId] = useState(1);

  const cancel = useAsyncEffect(
    function* () {
      setText("fetching...");
      try {
        const response = yield cpAxios(
          `https://rickandmortyapi.com/api/character/${id}`
        ).timeout(props.timeout);
        setText(JSON.stringify(response.data, null, 2));
      } catch (err) {
        CanceledError.rethrow(err, E_REASON_UNMOUNTED);
        setText(err.toString());
      }
    },
    [id]
  );

  return (
    <div className = "component">
      <div className = "caption">useAsyncEffect demo:</div>
      <div>{text}</div>
      <button
        className = "btn btn-success"
        type = "submit"
        onClick = {() => setId(Math.round(Math.random() * 200))}
      >
        Fetch random character info
      </button>
      <button className = "btn btn-warning" onClick = {cancel}>
        Cancel request
      </button>
    </div>
  );
}
 02.12.2020 01:11
еще один альтернативный способ - обернуть вашу асинхронную функцию в оболочку, которая будет обрабатывать вариант использования, когда компонент размонтируется

поскольку мы знаем, что функция также является объектом в js, поэтому мы можем использовать их для обновления значений закрытия

const promesifiedFunction1 = (func) => {
  return function promesify(...agrs){
    let cancel = false;
    promesify.abort = ()=>{
      cancel = true;
    }
    return new Promise((resolve, reject)=>{
       function callback(error, value){
          if (cancel){
              reject({cancel:true})
          }
          error ? reject(error) : resolve(value);
       }
       agrs.push(callback);
       func.apply(this,agrs)
    })
  }
}

//here param func pass as callback should return a promise object
//example fetch browser API
//const fetchWithAbort = promesifiedFunction2(fetch)
//use it as fetchWithAbort('http://example.com/movies.json',{...options})
//later in componentWillUnmount fetchWithAbort.abort()
const promesifiedFunction2 = (func)=>{
  return async function promesify(...agrs){
    let cancel = false;
    promesify.abort = ()=>{
      cancel = true;
    }

    try {
      const fulfilledValue = await func.apply(this,agrs);
      if (cancel){
        throw 'component un mounted'
      }else{
        return fulfilledValue;
      }
    }
    catch (rejectedValue) {
      return rejectedValue
    }
  }
}
тогда внутри componentWillUnmount () просто вызовите promesifiedFunction.abort () это обновит флаг отмены и запустит функцию отклонения

 27.04.2021 17:00
Другие вопросы по теме
При экспорте именованной стрелочной функции возникла ошибка "Объект (...) не является функцией"
Статический компонент не выполняет повторную визуализацию при выполнении setState
Props.deleteComments не функция
DevExtreme React Grid выбираемые и невыбираемые строки
Невозможно получить доступ к способу загрузки изображения
Передача реквизита детям Отсутствие реквизита
React js createRef (), возвращающий undefined
React Router - this.history.push изменяет URL, но не показывает компонент
Динамическая загрузка компонентов из файла - React native
Reactjs Обновить отдельный элемент в массиве внутри состояния
Похожие вопросы
Лучший способ заполнить мою базу данных предопределенными значениями, если это первый раз, когда пользователь входит в систему
Ошибка получения запроса с телом ofx
Динамически изменять языковой стандарт без сокращения
Обновить вложенное состояние в реакции
Захват onClick на видео iframe в React
Как вы показываете контент до того, как запрос будет обработан с помощью React?
Sh: react-scripts-start: команда не найдена
'visualize' не определен no-undef в реакции
Material-ui Положение ящика
Как избежать автоматического закрытия DIV
Разделы
Блог

Вопросы

Теги

О сайте

Контакты
info@reddeveloper.ru
Правовая информация
Политика конфиденциальности

Пользовательское соглашение


Находите ответы на сложные технические вопросы по программированию, с которыми сталкиваются инженеры по всему миру в своей ежедневной практике на сайте RedDeveloper.

© 2026 «RedDeveloper.ru»

RedDeveloper
Блог
Вопросы
Теги
Поиск...
Встроенный стиль в фоне реакции: линейный градиент
Вопросы
JAVASCRIPT
Встроенный стиль в фоне реакции: линейный градиент
Я пытаюсь создать встроенные стили с помощью background, у которого есть linear-gradient, но стиль не применяется.

Вот мой код:

 <div className = "card" style = {{background:"linear-gradient(to bottom, Transparente 0%,Transparente 50%,red 50%,red 100%)"}}/>
Когда я добавляю «простой» цвет для своего фона, то есть без linear-gradient, он работает хорошо.

<div className = "card" style = {{background:"red"}}/>
Заранее спасибо.

 23.10.2018 15:42
20
2
35 096
11
 Ответы 11
Вы неправильно написали transparent на Transparente. Это работает: linear-gradient(to bottom, transparent 0%,transparent 50%,red 50%,red 100%)

 23.10.2018 15:46
Я считаю, что для градиентного фона вы должны использовать свойство background-image. Это должно выглядеть примерно так. У вас также есть опечатка с прозрачным.

 <div className = "card" style = "background-image:linear-gradient(to bottom, Transparent 0%,Transparent 50%,red 50%,red 100%)"></div>
 23.10.2018 15:51
Я не думаю, что вы правильно написали свой код. Смотрите примеры этого сайта Примеры

<div className = "card" style = {{background: "linear-gradient(#e66465, #9198e5);" }}>sada</div>
 23.10.2018 15:57
используйте этот код:

backgroundImage: "linear-gradient(to right, #4880EC, #019CAD)"
 07.12.2019 01:49
Возможно, я немного опоздал, но я нашел решение, что я сделал, я добавляю его на страницу css, затем проверяю элемент. Например: для * background: linear-gradient (вправо, # 000 0%, # 000 50%, #fff 50%, #fff 100%) *; если вы проверите его с помощью элемента inspect, вы найдете: -webkit-gradient (линейный, слева вверху, справа вверху, от (# 000), остановка цвета (50%, # 000), остановка цвета (50%, #fff)). Так что просто добавьте эту последнюю строку во встроенный стиль вашего компонента реакции:

<div className = "card" style = {{background:"-webkit-gradient(linear, left top, right top, from(#000), color-stop(50%, #000), color-stop(50%, #fff))"}}/>
в моем примере я использовал этот выше вместо:

<div className = "card" style = {{background: linear-gradient(to right, #000 0%,  #000 50%, #fff 50% #fff 100%)"}}/>
Итак, в заключение, добавьте это в файл css, он будет работать, увидеть результат в «элементе проверки», использовать его и отредактировать, как вам нравится, во встроенном стиле вашего компонента react js.

 31.12.2019 17:46
Please use Below code for adding the gradient and change the value (for Safari and Chrome)

-webkit-gradient: (linear, left top, right top, from(rgba(0,0,0,0.5)), color-stop(50%, rgba(0,0,0,0.2)));
 03.04.2020 22:08
Если вы пытаетесь сделать это встроенным, это сработало для меня.

<Button style = {{ backgroundImage: 'linear-gradient(#f67a36,#ed008c)' }}/>
 04.04.2020 17:20
Используется так с переменными

const color1 = "#343336";
const color2 = "#B408A4";
style = {{background: `linear-gradient(to bottom,  ${color1} 0%,${color2} 100%)`}}
 05.10.2020 03:11
У меня было что-то вроде:

<div style = {{background: `linear-gradient(190deg, #fa7c30 30%, rgba(0, 0, 0, 0)30%), url(${somePic});`}}/>
Это не работало из-за ; в конце linear-gradient. Я удалил его, и все заработало.

 12.11.2020 08:21
Итак, я наткнулся на ваш пост, потому что столкнулся с той же проблемой, но нашел решение.

<button style = {{ backgroundImage: `linear-gradient(to right, rgba(0, 224, 255, 1), rgba(0, 133, 255, 1))`, }} >
Обратите внимание, что я использовал «вместо», который решил проблему, и я не знаю почему.

 17.05.2021 06:23
for react version 17.0.2, i used bacgroundImage property to style div background as follows:

   <div
    style = {{
      backgroundImage: "linear-gradient(yellow,lightgreen)",
      color: "darkred",
    }}
  >
    Inline style in react background: linear-gradient
  </div>


 04.10.2021 18:34
Другие вопросы по теме
Проверьте, как получить доступ к элементам массива в Angular 5 HTML
Почему смайлы юникода в wordpress отображаются с тегом <img>?
Как исправить ширину TH и TD не одинаковыми в таблицах данных?
Bootstrap 4.1 - Выровнять вправо выпадающий курсор
Сделать элемент липким в IE11
Использование HTML 5 DatePicker с полем ввода даты
Почему мне следует избегать использования _.isEqual в shouldComponentUpdate
Передача значения в текстовое поле на веб-сайте с помощью Excel VBA
Цвет кнопки перехода при нажатии
Отображение и скрытие строк таблицы на основе кнопок алфавита
Похожие вопросы
Путаница в отношении контекста выполнения и подъема JavaScript
Php не может анализировать данные json в ajax
Javascript создает массив из существующего разделения по значению свойства
Кнопка удаления для элементов списка и функции зачеркивания (JavaScript)
Отправка формы в документе, полученном с помощью DOMParser
Значки Primeng не отображаются в IE11 после создания сборки продукта
Отфильтровать данные внутри объекта массива объекта массива с помощью javascript
Сортировка массива объектов по другому порядку массива
TypeScript: настраиваемый класс, расширяющий массив
Как получить ссылку на всплывающее окно из родительского элемента?
Разделы
Блог

Вопросы

Теги

О сайте

Контакты
info@reddeveloper.ru
Правовая информация
Политика конфиденциальности

Пользовательское соглашение


Находите ответы на сложные технические вопросы по программированию, с которыми сталкиваются инженеры по всему миру в своей ежедневной практике на сайте RedDeveloper.

© 2026 «RedDeveloper.ru»

RedDeveloper
Блог
Вопросы
Теги
Поиск...
Не удается избавиться от отсутствующей ошибки manifest.json
Вопросы
REACTJS
Не удается избавиться от отсутствующей ошибки manifest.json
Я создаю приложение ASP.NET Core с интерфейсом ReactJs в Visual Studio 2017.

Недавно стал замечать в консоли пропавшую ошибку manifest.json - см. Ниже. Кажется, это не влияет на мое приложение, но я хочу избавиться от этой ошибки. Не удается избавиться от отсутствующей ошибки manifest.json

Если я просматриваю свое приложение в Edge, я не вижу отсутствующей ошибки manifest.json, поэтому кажется, что эта ошибка содержится только в Chrome.

Я опубликовал приложение в Azure, и снова в Chrome я получаю ту же ошибку, но не в Edge.

Есть идеи, как я могу это решить?

 28.11.2018 21:57
24
17
39 289
11
Данный вопрос помечен как решенный
 Ответы 11
 Ответ принят как подходящий
Скорее всего, где-то в проекте есть ссылка на manifest.json, а сам файл / ресурс не существует.

Проверьте, есть ли у вас какие-либо теги link с rel=manifest, похожие на

<link rel = "manifest" href = "/manifest.webmanifest">
The .webmanifest extension is specified in the Media type registration section of the specification, but browsers generally support manifests with other appropriate extensions like .json.

т.е.

<link rel = "manifest" href = "/manifest.json">
и удалите его из кода, чтобы устранить ошибку.

Ссылка Манифест веб-приложения

 04.12.2018 02:17
Файл manifest.json, скорее всего, там, где он должен быть. Решение состоит в том, чтобы добавить запись в ваш файл web.config в раздел статического содержимого для файлов .json.

<?xml version = "1.0" encoding = "utf-8" ?>
<configuration>
  <system.webServer>
    <staticContent>
      <mimeMap fileExtension = ".json" mimeType = "application/json" />
  </staticContent>
</system.webServer>
</configuration>
Если вам нужно добавить или отредактировать файл web.config, вы можете сделать это с помощью Консоль отладки Kudu. (Замените yourapp своим приложением в ссылке)

Вы также можете запустить консоль отладки с портала в разделе Инструменты разработки для своего приложения: 

Если файл manifest.json действительно отсутствует, вы можете исправить это, выполнив Инструкции Google по добавлению файла manifest.json.

Манифест веб-приложения требуется Chrome для включения подсказки Добавить на домашний экран в веб-приложении.

 11.05.2019 16:15
В ответ вы можете найти manifest.json в своей общей папке и ссылку на этот файл в index.html.

manifest.json предоставляет метаданные, используемые при установке вашего веб-приложения на мобильное устройство или рабочий стол пользователя. См. https://developers.google.com/web/fundamentals/web-app-manifest/

<link rel = "manifest" href = "%PUBLIC_URL%/manifest.json" />

 28.09.2019 09:27
просто добавьте crossorigin = "use-credentials", чтобы он выглядел так: <link rel = "manifest" href = "/site.webmanifest" crossorigin = "use-credentials">

 21.10.2019 16:08
Для тех, кто охотится, и нет логического решения, попробуйте в другом режиме браузера или инкогнито. У меня была постоянная ошибка для этого файла, и это был (нежелательный) плагин для Chrome. Я часто вижу это в JS из-за плохой упаковки или оставленных отладчиков и других нарушений. Обратите внимание, JS - это очень опасно и сложный язык.

 03.01.2020 02:46
Так как та же ошибка произошла после загрузки клиента React в моем случае в движок приложений Google, когда присутствовал JSON манифеста, обновление app.yaml спасло ситуацию:

  - url: /(.*\.(js|css|png|jpg|svg|json|ico|txt))$
    secure: always
    static_files: build/\1
    upload: build/.*\.(js|css|png|jpg|svg|json|ico|txt)$
 26.03.2020 14:57
IIS также может ограничивать файлы по расширению. Убедитесь, что там нет .json!



 04.04.2020 21:41
Хорошо, просто сделайте следующее:

Просто заменил звонок:

<link rel = "manifest" href = "manifest.json">
от

<link rel = "manifest" href = "manifest.json" crossorigin = "use-credentials">
 25.06.2020 16:10
У меня была такая же проблема с ошибкой в ​​Lighthouse при поиске файла asset-manifest.json. Самый быстрый вариант - создать пустой файл с этим именем, что избавит от ошибки.

 09.10.2020 22:17
В моем случае, используя React с ядром asp.net и идентификатором, я начал получать эту ошибку, когда настраивал все мое приложение на требование аутентификации через Startup.cs.

services.AddAuthorization(options =>
        {
            options.FallbackPolicy = new AuthorizationPolicyBuilder()
                .RequireAuthenticatedUser()
                .Build();
        });
Это вызывало синтаксическую ошибку манифеста, потому что мой Index.html ссылался на manifest.json следующим образом:

<link rel = "manifest" href = "%PUBLIC_URL%/manifest.json" /> 
У моего приложения не было достаточных разрешений для доступа к файлу после требования аутентификации для всех страниц.

TL; DR; Даже если указанные вами файлы манифеста существуют, убедитесь, что у вас есть доступ к ним из приложения.

 15.01.2021 19:15
в вашем основном index.html будет такой код:

<link rel = "manifest" href = "%PUBLIC_URL%/manifest.json" />
замените это на это:

<link rel=“manifest” href = "/src/manifest.json">
 10.03.2021 18:19
Другие вопросы по теме
Как я могу создать файл Cmake из существующего проекта CPP Visual Studio?
Можно ли настроить Visual Studio для автоматической установки WinDbg .sympath и .srcpath?
Инструменты командной строки Visual Studio 2017 не работают при запуске из пакетного файла
Visual Studio CPP Нет записи
Новые элементы управления, добавленные в форму, не отображаются при отладке
Как создать экземпляр игрового объекта в той же позиции, где предыдущий был уничтожен
Возникло исключение: 'System.IO.FileLoadException' в Microsoft.VisualStudio.TestPlatform.Common.dll И System.Private.CoreLib.dll
Как получить доступ к аргументам
Entity Framework 5.0 с vs 13
Изменить размер файла после определенного условия. C++ resize_file не работает в цикле
Похожие вопросы
Как разделить компонент и сохранить работу реквизита
React.JS - передача данных от одного компонента к другому
Как я могу выполнить строковую интерполяцию в строковой переменной в React?
Как добавить дополнительную информацию во всплывающую подсказку точки / наведения
Почему эта функция javascript возвращает значение undefined?
Функция Emotion css не отображает стили (React)
Компонент рендеринга без метода рендеринга в ReactJS
Ошибка eslint при использовании псевдонима babel на nextjs
Остановка forEach при изменении свойства (ReactJS, Redux)
Невозможно прочитать карту свойства undefined, но я действительно вижу данные в консоли
Разделы
Блог

Вопросы

Теги

О сайте

Контакты
info@reddeveloper.ru
Правовая информация
Политика конфиденциальности

Пользовательское соглашение


Находите ответы на сложные технические вопросы по программированию, с которыми сталкиваются инженеры по всему миру в своей ежедневной практике на сайте RedDeveloper.

© 2026 «RedDeveloper.ru»

RedDeveloper
Блог
Вопросы
Теги
Поиск...
Почему я получил ошибку при создании приложения React?
Вопросы
REACTJS
Почему я получил ошибку при создании приложения React?
Я новичок и хочу изучить ReactJS, и я начинаю устанавливать новую пустую папку с помощью команды npx create-react-app .. У меня нпм v.6.4.1. и когда я пытаюсь выполнить команду, она выдает мне ошибку.

Error: EPERM: operation not permitted, mkdir 'C:\Users\LOGIVAR'
TypeError: Cannot read property 'get' of undefined
    at errorHandler (C:\Program Files\nodejs\node_modules\npm\lib\utils\error-handler.js:205:18)
    at C:\Program Files\nodejs\node_modules\npm\bin\npm-cli.js:78:20
    at cb (C:\Program Files\nodejs\node_modules\npm\lib\npm.js:228:22)
    at C:\Program Files\nodejs\node_modules\npm\lib\npm.js:266:24
    at C:\Program Files\nodejs\node_modules\npm\lib\config\core.js:83:7
    at Array.forEach (<anonymous>)
    at C:\Program Files\nodejs\node_modules\npm\lib\config\core.js:82:13
    at f (C:\Program Files\nodejs\node_modules\npm\node_modules\once\once.js:25:25)
    at afterExtras (C:\Program Files\nodejs\node_modules\npm\lib\config\core.js:173:20)
    at C:\Program Files\nodejs\node_modules\npm\node_modules\mkdirp\index.js:47:53
C:\Program Files\nodejs\node_modules\npm\lib\utils\error-handler.js:205
  if (npm.config.get('json')) {
                 ^

TypeError: Cannot read property 'get' of undefined
    at process.errorHandler (C:\Program Files\nodejs\node_modules\npm\lib\utils\error-handler.js:205:18)
    at process.emit (events.js:182:13)
    at process._fatalException (internal/bootstrap/node.js:485:27)
Install for create-react-app@latest failed with code 7
Я уже выполняю ту же команду в пустом проекте Laravel, но все равно выдает ту же ошибку.

Можете ли вы сказать мне, что является основной причиной проблемы и как это исправить?

Обновлено: Я уже запускаю терминал от имени администратора, но получаю другую ошибку:

npm ERR! code ENOLOCAL
npm ERR! Could not install from "2\AppData\Roaming\npm-cache\_npx\10552" as it does not contain a package.json file.

npm ERR! A complete log of this run can be found in:
npm ERR!     C:\Users\LOGIVAR TY 2\AppData\Roaming\npm-cache\_logs\2019-01-23T04_18_56_036Z-debug.log
Install for create-react-app@latest failed with code 1
 23.01.2019 05:11
14
0
19 893
11
Данный вопрос помечен как решенный
 Ответы 11
 Ответ принят как подходящий
Вы пробовали запустить это от имени администратора?

 23.01.2019 05:12
добавьте имя проекта, подобное этому, в вашу команду:

 npx create-react-app your-project-name
 23.01.2019 05:14
Это проблема с npx. В имени вашего компьютера есть пробел. Я бы рекомендовал npm install -g create-react-app, чтобы обойти проблему с npx.

 08.07.2019 20:15
В моем случае фактическая проблема была связана с наличием пробела в моей папке с именем пользователя Windows. Что также имеет место здесь, если посмотреть на первую строку трассировки стека,

Error: EPERM: operation not permitted, mkdir 'C:\Users\LOGIVAR'
Поскольку нет каталога с именем LOGIVAR, он пытается запустить mkdir, для которого его операция получения не разрешена.

Вот как я это исправил благодаря citoreek, g8up и gijswijs

запустите npm config edit, чтобы отредактировать вашу конфигурацию, это откроет текстовый файл в блокноте или настроенном вами редакторе,

затем измените cache path с

; cache=C:\Users\Gijs van Dam\AppData\Roaming\npm-cache
к

cache=C:\Users\GIJSVA~1\AppData\Roaming\npm-cache
Не забудьте удалить ; в начале, следующий вопрос: откуда мы знаем, что нужно заменить наше имя пользователя на GIJSVA~1?

Есть несколько способов нацелиться на это,

Перейдите в C:\Users, откройте Power Shell и выполните следующую команду.
cmd /c dir /x

что это делает, перечисляет все каталоги в текущем каталоге вместе с их короткими именами, которые не должны содержать пробелов и обычно имеют длину 6 символов или меньше. Скопируйте это короткое имя в свой каталог имен пользователей и используйте его в своем пути к кешу.

Вы заметите, что эти короткие имена существуют только для каталогов, содержащих пробелы или длиннее 6 символов, для остальных каталогов их короткие имена будут такими же, как их имя каталога,

Если вы не хотите использовать указанную выше команду, просто удалите все пробелы из имени пользователя в пути к кешу, затем возьмите первые 6 символов имени пользовательского каталога и добавьте к нему постфикс ~1. Вы также должны использовать заглавные буквы, но, похоже, это не имеет никакого значения.
После того, как вы закончите редактирование этого файла, сохраните свои изменения, а затем повторите попытку после закрытия любого активного процесса power shell / bash и повторного открытия их.

 21.10.2019 06:14
Сначала установите приложение create-реагировать

npm  install create-react-app
тогда

npx create-react-app app-name
 10.03.2020 11:53
Вышеупомянутая проблема связана с пробелами, содержащимися в имени папки. Лучший способ - внести изменения в файл конфигурации.

Введите npm config edit, чтобы войти в ваш файл конфигурации.

Затем измените

; cache=C:\Users\Sinojia Zeel\AppData\Roaming\npm-cache

к

cache=C:\Users\SINOJI~1\AppData\Roaming\npm-cache

Не забудьте убрать точку с запятой спереди

SINOJI~1 можно заменить именем вашей папки, которое содержит пробелы. Просто возьмите первые 6 букв имени вашего файла и добавьте к суффиксу ~1 (использование заглавных букв в имени файла необязательно, но часто это делается)

Сохраните файл, выйдите и повторно запустите команду npx create-react-app ..

 16.04.2020 16:36
Первая глобальная установка

npm install -g create-react-app
Создайте новое приложение

npx create-react-app your-app-name
это сработало для меня

 07.06.2020 07:36
Я столкнулся с аналогичной проблемой при создании приложения React от Linkedin, узнав, что у него есть команда - npx create-react-app my-website --use-npm для создания нового приложения React, но не упомянул, требуются ли для этого какие-либо предварительные условия.

Итак, чтобы запустить приведенную выше команду, сначала установите приложение create-react-app с npm install -g create-react-app

 20.07.2020 01:08
Я также получал ту же ошибку:

Error: EPERM: operation not permitted, mkdir 'C:\Users\Username'
command not found: create-react-app
Тогда у меня сработала следующая команда:

npm install -g create-react-app
npx create-react-app project-name
 27.05.2021 11:41
Следующая команда работала для меня:

npm install -g создать-реагировать-приложение
npx имя проекта create-реагировать на приложение
 27.07.2021 05:46
Если вы все еще сталкиваетесь с этой проблемой, после всего вышеперечисленного -

У меня была такая же проблема с пробелом в моем имени, я пробовал:

очистить кеш npm -f
проверка кэша npm
обновил путь к кешу с помощью "~!"
И ничего из этого не сработало для меня, но потом я побежал:

npm -g установить нпм
npm init реагировать-приложение мое-приложение
... и это наконец сработало. Надеюсь, это поможет кому-то там

 27.07.2021 16:11
Другие вопросы по теме
Является ли вывод отладки установки npm стандартным форматом, и если да, то каким?
BigCommerce Stencil Start Uncaught Error: сбой синтаксического анализа модуля
Есть ли пакет npm html для форматированного текста для содержательных
«TypeError: невозможно прочитать свойство «получить» неопределенного» для каждой команды npm
Использование сценария package.json для запуска другого сценария package.json
Вызов локального пакета JS с помощью NodeJS/npm
После переименования папки angular я получил ошибку: «Кажется, вы не зависите от «@angular/core». Это ошибка»
Firebase Admin SDK — Ошибка: «Реализация учетных данных предоставлена ​​для initializeApp()»
Инициализация приложения create-реагировать с определенной версией пакета
Транспортир, если еще с ожидаемым (условием)
Похожие вопросы
Как условно вывести данные на основе объекта JavaScript?
Обработка маршрутов Symfony в вызове axios/ajax
Использование тега HTML5 Video с приложением create-реагировать
Реагировать на Native navigation.goBack() внутри componentDidUpdate
Переменные среды не работают во вложенном файле JS (React)
Хранение JSX на сервере, получение его через API и рендеринг с помощью работающей функции onClick
Извлекать данные из API при нажатии кнопки поиска формы и отображать данные на другой странице в React JS
Как реагировать на роутер v4 в сабе?
Реакция js на добавление объекта в массив состояний
Как передать функцию другому компоненту в реакции
Разделы
Блог

Вопросы

Теги

О сайте

Контакты
info@reddeveloper.ru
Правовая информация
Политика конфиденциальности

Пользовательское соглашение


Находите ответы на сложные технические вопросы по программированию, с которыми сталкиваются инженеры по всему миру в своей ежедневной практике на сайте RedDeveloper.

© 2026 «RedDeveloper.ru»

	  RedDeveloper
Блог
Вопросы
Теги
Поиск...
Ошибка команды: gradlew.bat installDebug
Вопросы
JAVA
Ошибка команды: gradlew.bat installDebug
При разработке приложения я столкнулся со следующей ошибкой. Я попытался понизить версию Java с 11 до 8, но это не помогло.

FAILURE: Build failed with an exception.

* What went wrong:
Could not create service of type ScriptPluginFactory using BuildScopeServices.createScriptPluginFactory().
> Could not create service of type PluginResolutionStrategyInternal using BuildScopeServices.createPluginResolutionStrategy().

* Try:
Run with --stacktrace option to get the stack trace. Run with --info or --debug option to get more log output. Run with --scan to get full insights.

* Get more help at https://help.gradle.org

BUILD FAILED in 15s
Could not install the app on the device, read the error above for details.
Make sure you have an Android emulator running or a device connected and have
set up your Android development environment:
https://facebook.github.io/react-native/docs/getting-started.html

Command failed: gradlew.bat installDebug

Error: Command failed: gradlew.bat installDebug
    at checkExecSyncError (child_process.js:616:11)
    at Object.execFileSync (child_process.js:634:13)
    at runOnAllDevices (C:\Users\samie\Documents\React Native\auth\node_modules\react-native\local-cli\runAndroid\runAndroid.js:299:19)
    at buildAndRun (C:\Users\samie\Documents\React Native\auth\node_modules\react-native\local-cli\runAndroid\runAndroid.js:135:12)
    at isPackagerRunning.then.result (C:\Users\samie\Documents\React Native\auth\node_modules\react-native\local-cli\runAndroid\runAndroid.js:65:12)
    at process._tickCallback (internal/process/next_tick.js:68:7)
 20.02.2019 01:21
8
0
60 478
11
 Ответы 11
У меня была эта проблема, она в конце концов исчезла после того, как я удалил и переустановил Android Studio и Gradle, но сначала вы можете попробовать несколько других вещей.

1: Установка GRADLE_USER_HOME в переменных окружения (если в Windows)

2: понижение версии до версии 0.57.0.

3: Убедитесь, что у вас есть правильные разрешения для запуска команды и доступа к файлам.

4: Убедитесь, что ваши файлы gradle синхронизированы правильно, и что расположение gradle и android skd правильно в автономном режиме структуры проекта.

5: Проверьте Gradle на наличие обновлений

(Предполагая, что вы используете студию Android)

Удачи

 20.02.2019 02:26
Попробуйте запустить эту команду внутри файла вашего проекта.

react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res 
после этого

cd (path to project/android folder) && gradlew clean && cd .. && react-native run-android
всегда очищайте градуировку перед запуском react-native-run-android приведенная выше команда в основном очищает градиент и предыдущие сборки.

для ENOENT Ошибка Проверьте, работает ли $ yarn start. Метро-бандер не смог запуститься для меня на порту 8081, а мне нужно было запустить $ killall node

Обновлено:

Также обновите gradle-wrapper.properties добавлять

distributionUrl=https\://services.gradle.org/distributions/gradle-5.2.1-all.zip

удалите следующий код из build.gradle:

task wrapper(type: Wrapper) {
   gradleVersion = '5.2.1'
   distributionUrl = distributionUrl.replace("bin", "all")
}
после этого

cd (path to project/android folder) && gradlew clean && cd .. && react-native run-android
всегда очищайте градуировку перед запуском react-native-run-android. Приведенная выше команда в основном очищает градель и предыдущие сборки.

Вы готовы идти!

 20.02.2019 05:33
У меня тоже была эта проблема, и я смог ее исправить, создав новый проект в react-native 0.57.3 с помощью команды: react-native init --version = "0.57.3" MyNewApp

 21.02.2019 01:40
Откройте файл settings.grandler в папке Android.

Измените \ на /

Сохраните файл

Выполните команду react-native run-android

 27.02.2019 01:33
Вы должны обновить файл gradle-wrapper.properties, чтобы использовать новейшую версию gradle:

 distributionUrl=https\://services.gradle.org/distributions/gradle-5.2.1-all.zip
И удалите этот блок из файла build.gradle:

task wrapper(type: Wrapper) {
   gradleVersion = '5.2.1'
   distributionUrl = distributionUrl.replace("bin", "all")
}
Затем запустите Градлью чистый в папке android, и все должно заработать.

 01.03.2019 12:24
Как я решил эту проблему:

Во-первых, убедитесь, что у меня установлена ​​переменная %java_home%, а также %path% включает java sdk. Как настроить переменные среды Java

Во-вторых, перейдите в папку Android и выполните следующую команду:

C:\Projects\myproject\android>gradlew.bat app:installDebug.
Unzipping C:\Users\codeb.gradle\wrapper\dists\gradle-4.10.2-all\9fahxiiecdb76a5g3aw9oi8rv\gradle-4.10.2-all.zip to C:\Users\codeb.gradle\wrapper\dists\gradle-4.10.2-all\9fahxiiecdb76a5g3aw9oi8rv Exception in thread "main" java.util.zip.ZipException: error in opening zip file at java.util.zip.ZipFile.open(Native Method) at java.util.zip.ZipFile.(ZipFile.java:225) at java.util.zip.ZipFile.(ZipFile.java:155) at java.util.zip.ZipFile.(ZipFile.java:169) at org.gradle.wrapper.Install.unzip(Install.java:215) at org.gradle.wrapper.Install.access$600(Install.java:27) at org.gradle.wrapper.Install$1.call(Install.java:75) at org.gradle.wrapper.Install$1.call(Install.java:48) at org.gradle.wrapper.ExclusiveFileAccessManager.access(ExclusiveFileAccessManager.java:69) at org.gradle.wrapper.Install.createDist(Install.java:48) at org.gradle.wrapper.WrapperExecutor.execute(WrapperExecutor.java:107) at org.gradle.wrapper.GradleWrapperMain.main(GradleWrapperMain.java:61)

Как вы можете видеть, моя загрузка Gradle повреждена. Все, что вам нужно сделать, это удалить эту папку и повторно запустить команду.

C:\Projects\myproject\android>gradlew.bat app:installDebug
Downloading https://services.gradle.org/distributions/gradle-4.10.2-all.zip ............................................................................................................... Unzipping C:\Users\codeb.gradle\wrapper\dists\gradle-4.10.2-all\9fahxiiecdb76a5g3aw9oi8rv\gradle-4.10.2-all.zip to C:\Users\codeb.gradle\wrapper\dists\gradle-4.10.2-all\9fahxiiecdb76a5g3aw9oi8rv

Welcome to Gradle 4.10.2!

Here are the highlights of this release: - Incremental Java compilation by default - Periodic Gradle caches cleanup - Gradle Kotlin DSL 1.0-RC6 - Nested included builds - SNAPSHOT plugin versions in the plugins {} block

For more details see https://docs.gradle.org/4.10.2/release-notes.html

Теперь вы можете вернуться к своему родному проекту и запустить

react-native run-android
info JS server already running. info Building and installing the app on the device (cd android && gradlew.bat app:installDebug)...

Task :app:installDebug 01:03:18 V/ddms: execute: running am get-config 01:03:18 V/ddms: execute 'am get-config' on 'emulator-5554' : EOF hit. Read: -1 01:03:18 V/ddms: execute: returning Installing APK 'app-debug.apk' on 'Pixel_2_API_28(AVD) - 9' for app:debug 01:03:18 D/app-debug.apk: Uploading app-debug.apk onto device 'emulator-5554' 01:03:18 D/Device: Uploading file onto device 'emulator-5554' 01:03:18 D/ddms: Reading file permision of C:\Projects\xx\android\app\build\outputs\apk\debug\app-debug.apk as: rwx------ 01:03:18 V/ddms: execute: running pm install -r -t "/data/local/tmp/app-debug.apk" 01:03:19 V/ddms: execute 'pm install -r -t "/data/local/tmp/app-debug.apk"' on 'emulator-5554' : EOF hit. Read: -1 01:03:19 V/ddms: execute: returning 01:03:19 V/ddms: execute: running rm "/data/local/tmp/app-debug.apk" 01:03:19 V/ddms: execute 'rm "/data/local/tmp/app-debug.apk"' on 'emulator-5554' : EOF hit. Read: -1 01:03:19 V/ddms: execute: returning Installed on 1 device.

BUILD SUCCESSFUL in 9s 27 actionable tasks: 1 executed, 26 up-to-date info Running C:\Users\codeb\AppData\Local\Android\Sdk/platform-tools/adb -s emulator-5554 reverse tcp:8081 tcp:8081 info Starting the app on emulator-5554 (C:\Users\codeb\AppData\Local\Android\Sdk/platform-tools/adb -s emulator-5554 shell am start -n com.myproject/com.myproject.MainActivity)... Starting: Intent { cmp=com.myproject/.MainActivity }



 09.05.2019 17:05
Проблема в файле:

nameyourapp/android/local.properties

вы должны заменить на правильный путь: /Users/nameUser/AppData/Local/Android/sdk

 14.10.2019 16:29
Просто запустите sudo react-native run-android, и он создаст и установит ./gradlew app:installDebug внутри каталога Android для вас.

 07.05.2020 23:32
У меня такая же ошибка, я просто удаляю старую версию JDK и устанавливаю последнюю версию из https://www.oracle.com/java/technologies/javase-downloads.html, и теперь она работает.

 22.02.2021 19:19
У меня тоже была эта проблема, и я смог ее исправить, запустив ./gradlew app:installDebug в папке Android.

 19.09.2021 21:05
В моем случае я удалил свой java jdk17 и установил java jdk11. Это сработало для меня несколько секунд назад. Действительно счастлив :)))

 04.11.2021 07:35
Другие вопросы по теме
Правила AWS Cognito не могут соответствовать раскрывающемуся пользовательскому интерфейсу аутентификации с помощью aws amplify (Android)
Как получить и проанализировать HTTP Json-файл в Kotlin
Рекомендации по протоколу ультразвуковой передачи
Причина ошибки OutOfMemoryError с родным Android React
Android Retrofit2/RxJava2/Room — простая обработка данных
Как обновить текст в динамически созданном Android TextView?
Требуется разрешение на доступ к контактам, чтобы сохранить контактную информацию из приложения в собственные контакты?
Flutter - Как я могу установить состояние виджета Checkbox в динамическом списке Checkbox
Kotlin позволяет использовать
Android Studio - сгенерированный класс привязки не может найти символ, если он находится в пакете
Похожие вопросы
Если оператор с "?" оператор и сломать java
Программа выдает исключение NullPointerException
Запросите DynamoDB, выполнив операцию IN (begins_with (условное-выражение)) для ключа сортировки
Рекомендации по протоколу ультразвуковой передачи
Как вставить данные List<String[]> в базу данных с помощью JDBC?
Spring Cloud Data Flow за веб-прокси
Точки не заполняются при попытке нарисовать наконечник стрелки (треугольник) с помощью Graphics2D
Java Оптимизация частных методов
Переопределенный метод не вызывает исключение (реализуется в java)
Simba][SpannerJDBCDriver](100300) Сообщение об ошибке от сервера: INVALID_ARGUMENT: позиционные параметры не поддерживаются
Разделы
Блог

Вопросы

Теги

О сайте

Контакты
info@reddeveloper.ru
Правовая информация
Политика конфиденциальности

Пользовательское соглашение


Находите ответы на сложные технические вопросы по программированию, с которыми сталкиваются инженеры по всему миру в своей ежедневной практике на сайте RedDeveloper.

© 2026 «RedDeveloper.ru»

	  RedDeveloper
Блог
Вопросы
Теги
Поиск...
Данные не обновляются после входа на домашнюю страницу в reactjs
Вопросы
JAVASCRIPT
Данные не обновляются после входа на домашнюю страницу в reactjs
Я сохраняю пользовательские данные в localStorage в компоненте входа, а затем перенаправляю на домашнюю страницу. Имя пользователя на главной странице не обновляется при первом посещении. Я должен перезагрузить страницу. Затем данные привязываются к странице после обновления. Пожалуйста, помогите, как я могу показать данные о первом посещении?

ниже код моей домашней страницы

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
      isLogout: false,
      user: ""
    };
  }

  componentDidMount() {
    const userData = localStorage.getItem("userData");
    const user = JSON.parse(userData);
    this.setState({ user: user });
    if (userData) {
      this.setState({ isLogin: true });
    }
    console.info(userData);
    console.info(user);
  }

  logout = e => {
    e.preventDefault();
    localStorage.clear();
    this.setState({ isLogout: true });
  };

  render() {
    if (this.state.isLogin === false || this.state.isLogout === true) {
      return (
        <header
          id = "kr-header"
          className = "kr-header cd-auto-hide-header kr-haslayout"
        >
          <div className = "container">
            <div className = "row">
              <div className = "col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <strong className = "kr-logo">
                  <Link to = "/">
                    <img src = "images/logo.png" alt = "company logo here" />
                  </Link>
                </strong>
                <nav className = "kr-addnav">
                  <ul>
                    <li>
                      <Link
                        id = "kr-btnsignin"
                        className = "kr-btn kr-btnblue"
                        to = "login_register"
                      >
                        <i className = "icon-smiling-face" />
                        <span>Join Now</span>
                      </Link>
                    </li>
                    <li>
                      <a
                        className = "kr-btn kr-btngreen"
                        href = "dashboardaddlisting.html"
                      >
                        <i className = "icon-plus" />
                        <span>Add Listing</span>
                      </a>
                    </li>
                  </ul>
                </nav>
                <nav id = "kr-nav" className = "kr-nav">
                  <div className = "navbar-header">
                    <button
                      type = "button"
                      className = "navbar-toggle collapsed"
                      data-toggle = "collapse"
                      data-target = "#kr-navigation"
                      aria-expanded = "false"
                    >
                      <span className = "sr-only">Toggle navigation</span>
                      <span className = "icon-bar" />
                      <span className = "icon-bar" />
                      <span className = "icon-bar" />
                    </button>
                  </div>
                  <div
                    id = "kr-navigation"
                    className = "collapse navbar-collapse kr-navigation"
                  >
                    <ul>
                      <li>
                        <a href = "dashboard.html">Dasboard</a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </header>
      );
    } else {
      return (
        <header
          id = "kr-header"
          className = "kr-header cd-auto-hide-header kr-haslayout"
        >
          <div className = "container">
            <div className = "row">
              <div className = "col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <strong className = "kr-logo">
                  <Link to = "/">
                    <img src = "images/logo.png" alt = "company logo here" />
                  </Link>
                </strong>
                <nav className = "kr-addnav">
                  <ul>
                    <li>
                      <Link
                        id = "kr-btnsignin"
                        className = "kr-btn kr-btnblue"
                        to = "login_register"
                      >
                        <i className = "icon-smiling-face" />
                        <span>{this.state.user.user.firstname}</span>
                      </Link>
                    </li>
                    <li>
                      <a
                        className = "kr-btn kr-btngreen"
                        href = "dashboardaddlisting.html"
                      >
                        <i className = "icon-plus" />
                        <span>Add Listing</span>
                      </a>
                    </li>
                    <li>
                      <a onClick = {this.logout} className = "kr-btn kr-btngreen">
                        <i className = "icon-plus" />
                        <span>Logout</span>
                      </a>
                    </li>
                  </ul>
                </nav>
                <nav id = "kr-nav" className = "kr-nav">
                  <div className = "navbar-header">
                    <button
                      type = "button"
                      className = "navbar-toggle collapsed"
                      data-toggle = "collapse"
                      data-target = "#kr-navigation"
                      aria-expanded = "false"
                    >
                      <span className = "sr-only">Toggle navigation</span>
                      <span className = "icon-bar" />
                      <span className = "icon-bar" />
                      <span className = "icon-bar" />
                    </button>
                  </div>
                  <div
                    id = "kr-navigation"
                    className = "collapse navbar-collapse kr-navigation"
                  >
                    <ul>
                      <li>
                        <a href = "dashboard.html">Dasboard</a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </header>
      );
    }
  }
}
Ниже приведен код компонента входа-регистрации.

import React, {Component} from 'react';
import { Link,Redirect ,withRouter } from 'react-router-dom';
import PropTypes from "prop-types";
import Otp from './otp';
import axios from '../api';

export default class LoginRegister extends Component {
    static contextTypes = {
        router: PropTypes.object
      }
    constructor(props,context){
        super(props,context);
        this.state = {
            fname:'',
            lname:'',
            emailaddress:'',
            password:'',
            mobile:'',
            user:'',
            login_pass:'',
            isLogin:false
        }
        this.regi_data = this.regi_data.bind(this);
        this.login_data = this.login_data.bind(this);
        // this.otpModalRef = React.createRef();
    }

    regi_data(e){
        this.setState({[e.target.name] : e.target.value}
        );
    }
    login_data(e){
        this.setState({[e.target.name] : e.target.value})
    }

    // otpModalRef = ({onOpenModal}) => {
    //    this.showModal = onOpenModal;
    // }

    componentDidMount(){
        if (localStorage.getItem('userData')) {
            this.context.router.history.push({
                        pathname:'/',

                    });
        }
    }




    login = (e) => {
        e.preventDefault();
         axios.post('/api/signin', { 
                        user:this.state.user,
                        password:this.state.login_pass,
                    })
          .then(res => {
                //console.info(res);
                localStorage.setItem('userData', JSON.stringify(res.data));
                this.context.router.history.push({
                        pathname:'/',

                    });
//                  window.location.reload();
                    this.setState({isLogin: true});
          })
          .catch(function (error) {
            console.info(error.message);
          })
    }

    register = (e) => {
        e.preventDefault(); 
        axios.post('/api/user/add', { 
                        firstname: this.state.fname,
                        lastname:this.state.lname,
                        email:this.state.emailaddress,
                        password:this.state.password,
                        mobile:this.state.mobile 
                    },              
                )
          .then(res => {
                console.info(res);
                // this.showModal();
                 this.context.router.history.push({
                        pathname:'/otp_validate',
                    });            
          }).catch(function(error){
            alert(error.message)
          })
    }
 20.03.2019 09:15
10
8
12 456
11
 Ответы 11
Напишите эти две строки в верхней части метода render(). Так:

render() {
  const userData = localStorage.getItem("userData");
  const user = JSON.parse(userData);
  if (user) {
    return (...); // logged in ui
  } else {
    return (...); // logged out ui
  }
}
 20.03.2019 09:29
componentDidMount() {
    const userData = localStorage.getItem("userData");
    const user = JSON.parse(userData);
    this.setState({ user: user });
    if (userData) {
      this.setState({ isLogin: true });
    }
    console.info(userData);
    console.info(user);

    this.setState({})
  }
 20.03.2019 10:07
ПРОБЛЕМА
Из приведенного выше кода и проблемы, с которой вы столкнулись, похоже, что у вас есть общий компонент Header, который отображается из родительского компонента Login и HomePage, возможно, из центрального компонента приложения, где вы также должны были объявить маршруты для Login и Homepage. Если это так, проблема, с которой вы столкнулись, заключается в том, что когда приложение загружается в первый раз, заголовок также загружается в это время и вызывается его метод componentDidMount. Но поскольку вы не вошли в систему в это время, компонент заголовка не получает данные пользователя, необходимые для отображения имени пользователя. Позже, когда вы выполняете фактическое действие входа в систему, сохраняете данные в локальном хранилище и перенаправляете на домашнюю страницу, заголовок не размонтируется и не перемонтируется, потому что он выходит за рамки этих отдельных компонентов Login и Homepage, поэтому событие componentDidMount не будет запущено. и в компоненте заголовка не будет обнаружено никаких изменений.

ИСПРАВИТЬ
Подход 1: Либо создайте два разных компонента Header, один для входа в систему и один для выхода из системы, и поместите их в методы рендеринга компонентов Login и HomePage соответственно. В этом случае описанная выше логика локального хранилища, написанная в componentDidMount из этих Header компонентов, должна работать правильно.

Подход 2: Поднимите пользовательские данные к родительскому компоненту Header и передайте пользовательские данные в качестве реквизита этому компоненту. В этом случае вы можете напрямую использовать это свойство в методе рендеринга Header's.

 27.03.2019 09:31
Попробуйте этот подход.

login = (e) => {
    e.preventDefault();
     axios.post('/api/signin', { 
                    user:this.state.user,
                    password:this.state.login_pass,
                })
      .then(res => {

            localStorage.setItem('userData', JSON.stringify(res.data));
            // delay the redirection after udpated the local storage.  
            setTimeout(() => {
              this.context.router.history.push({
              pathname:'/',
              });
              this.setState({isLogin: true});
            }, 500);

      })
      .catch(function (error) {
        console.info(error.message);
      })
}
 28.03.2019 06:58
попробуйте так в компоненте входа

login = (e) => {
    e.preventDefault();
    axios.post('/api/signin', {
        user:this.state.user,
        password:this.state.login_pass,
    })
    .then(res => {
        localStorage.setItem('userData', JSON.stringify(res.data));
        this.context.router.history.push({
            pathname:'/',
            state: { userData: JSON.stringify(res.data) }
        });
        this.setState({isLogin: true});
    })
    .catch(function (error) {
        console.info(error.message);
    })
}
и на домашней странице проверьте реквизиты в componentDidMount

componentDidMount() {
    const { userData } = this.props.location.state
    // const user = JSON.parse(userData);
    this.setState({ user: userData });
    if (userData) {
        this.setState({ isLogin: true });
    }
    console.info(userData);
    console.info(user);
}
Здесь вы передаете реквизиты на домашнюю страницу после входа в систему. Он должен работать правильно. Если нет, спросите

 28.03.2019 08:43
В компоненте заголовка вы получаете data для отображения из двух достоверных источников. Локальное хранилище и Компоненты состояние.

Это вызовет проблемы, потому что теперь вам нужно убедиться, что два источника синхронизированы, что является проблемой, с которой вы сталкиваетесь в настоящее время.

Если я посмотрю на ваш компонент Header, вы получите состояние из LocalStorage, поэтому, если мы сможем избавиться от использования state, реакция всегда будет пытаться отобразить ваш компонент header, и вы избежите проблемы с попыткой сохранить два источника данные синхронизированы.

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
  let userData = localStorage.getItem("userData");
  if (userData) { // i.e. user IS logged in 
     let user = JSON.parse(userData);
     return ( /* Your code for showing user data. in logout link onClick, clear the local storage */ )
  } else {
     return ( /*Your login/register header*/)
  }

}

export default Header;
Если вы беспокоитесь о производительности, сначала измерьте влияние. Если ваши userData не являются глубоко вложенными огромными json, вероятность того, что накладные расходы на производительность будут незначительными. Помните, что React, вызывающий метод render, не означает, что он будет рисовать дом.

Я делаю одно предположение: вы можете полагаться на LocalStorage как на единственный источник правды. В идеале я бы посоветовал иметь некоторую логику аннулирования кеша, но это действительно зависит от вашего варианта использования и других мер безопасности, которые у вас есть.

 01.04.2019 14:10
Я считаю, что он работает так быстро, что когда вы перенаправляете пользователя на домашнюю страницу, после входа в систему userData еще не был записан в localStorage.

Поэтому вам нужно сначала проверить, были ли данные записаны до перенаправления.

const asyncLocalStorage = {
    setItem: async function (key, value) {
        await null
        return localStorage.setItem(key, value)
    },
    getItem: async function (key) {
        await null
        return localStorage.getItem(key)
    }
}

asyncLocalStorage.setItem('user', 'data')
  .then( () => asyncLocalStorage.getItem('user') )
  .then( data => {
    console.info('User', data)
    // Redirect ...
  } )
 01.04.2019 15:43
Чувак, твоя проблема в том, что у тебя есть 3 флага, которые делают одно и то же, и ты обращаешься с ними неправильно.

например, эта строка

if (this.state.isLogin === false || this.state.isLogout === true)

will будет неверным с самого начала, вы инициализируете оба флага как false, поэтому вы перейдете прямо к условию else.

посмотрите на эту другую строку прямо здесь

 if (userData) {
  this.setState({ isLogin: true });
 }
этот код никогда не сбрасывает флаг isLogout, и метод выхода из системы также имеет проблемы

logout = e => {
    e.preventDefault();
    localStorage.clear();
    this.setState({ isLogout: true });
  };

если вы войдете в систему, то isLogin станет истинным, а isLogout останется ложным. если вы выйдете из системы, то isLogout станет истинным, а isLogin останется верным!

в конце концов, если у вас нет пользовательских данных, то есть ваш пользователь нулевой, то вы вышли из системы, независимо от того, сколько логических значений говорят об обратном, у вас есть проблема с избыточностью логики, и вам нужно упростить ваш приложение.

 02.04.2019 18:42
setState на componentWillMount все то же самое, что и в вашем componentDidMount, но поместите его внутрь componentWillMount

 02.04.2019 23:38
Если вы используете компонент Header независимо от входа в систему и домашнего компонента, вы должны использовать getDerivedStateFromProps(props) вместо componentDidMount, так как componentDidMount вызывается только после первоначального рендеринга.

 03.04.2019 08:12
Вы можете использовать компонент жизненного цикла getDerivedStateFromProps (реквизит, состояние), поскольку он выполняется перед первоначальным рендерингом, а также для каждого повторного рендеринга. Метод жизненного цикла компонентDidMount() вызывается после выполнения метода рендеринга, то есть только после первоначального рендеринга. Таким образом, установка состояния здесь будет отражена после повторного рендеринга компонента. Но getDerivedStateFromProps вызывается до вызова метода рендеринга. Вы можете проверить условие там, если нет изменений, просто верните null, в противном случае обновите состояние там. В состоянии getDerived из реквизита вы можете установить состояние, вернув объект. функция setState здесь не сработает, так как это статический метод. Пожалуйста, обратитесь по этой ссылке https://reactjs.org/docs/react-component.html#static-getderivedstatefromprops

Используйте код, как показано ниже

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
      isLogout: false,
      user: {}
    };
  }

  static getDerivedStateFromProps(props, state){
      const userData = localStorage.getItem("userData");
      const user = JSON.parse(userData);

      if (state.user !== userData){
        return {
            user: user,
            isLogin: true
        }
      }

      return null;
  }

  logout = e => {
    e.preventDefault();
    localStorage.clear();
    this.setState({ isLogout: true, isLogin: false });
  };

  render() {
    if (this.state.isLogin === false || this.state.isLogout === true) {
      return (
        <header
          id = "kr-header"
          className = "kr-header cd-auto-hide-header kr-haslayout"
        >
          <div className = "container">
            <div className = "row">
              <div className = "col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <strong className = "kr-logo">
                  <Link to = "/">
                    <img src = "images/logo.png" alt = "company logo here" />
                  </Link>
                </strong>
                <nav className = "kr-addnav">
                  <ul>
                    <li>
                      <Link
                        id = "kr-btnsignin"
                        className = "kr-btn kr-btnblue"
                        to = "login_register"
                      >
                        <i className = "icon-smiling-face" />
                        <span>Join Now</span>
                      </Link>
                    </li>
                    <li>
                      <a
                        className = "kr-btn kr-btngreen"
                        href = "dashboardaddlisting.html"
                      >
                        <i className = "icon-plus" />
                        <span>Add Listing</span>
                      </a>
                    </li>
                  </ul>
                </nav>
                <nav id = "kr-nav" className = "kr-nav">
                  <div className = "navbar-header">
                    <button
                      type = "button"
                      className = "navbar-toggle collapsed"
                      data-toggle = "collapse"
                      data-target = "#kr-navigation"
                      aria-expanded = "false"
                    >
                      <span className = "sr-only">Toggle navigation</span>
                      <span className = "icon-bar" />
                      <span className = "icon-bar" />
                      <span className = "icon-bar" />
                    </button>
                  </div>
                  <div
                    id = "kr-navigation"
                    className = "collapse navbar-collapse kr-navigation"
                  >
                    <ul>
                      <li>
                        <a href = "dashboard.html">Dasboard</a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </header>
      );
    } else {
      return (
        <header
          id = "kr-header"
          className = "kr-header cd-auto-hide-header kr-haslayout"
        >
          <div className = "container">
            <div className = "row">
              <div className = "col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <strong className = "kr-logo">
                  <Link to = "/">
                    <img src = "images/logo.png" alt = "company logo here" />
                  </Link>
                </strong>
                <nav className = "kr-addnav">
                  <ul>
                    <li>
                      <Link
                        id = "kr-btnsignin"
                        className = "kr-btn kr-btnblue"
                        to = "login_register"
                      >
                        <i className = "icon-smiling-face" />
                                          <span>{Object.entries(this.state.user).length > 0 ? this.state.user.user.firstname : `-`}</span>
                      </Link>
                    </li>
                    <li>
                      <a
                        className = "kr-btn kr-btngreen"
                        href = "dashboardaddlisting.html"
                      >
                        <i className = "icon-plus" />
                        <span>Add Listing</span>
                      </a>
                    </li>
                    <li>
                      <a onClick = {this.logout} className = "kr-btn kr-btngreen">
                        <i className = "icon-plus" />
                        <span>Logout</span>
                      </a>
                    </li>
                  </ul>
                </nav>
                <nav id = "kr-nav" className = "kr-nav">
                  <div className = "navbar-header">
                    <button
                      type = "button"
                      className = "navbar-toggle collapsed"
                      data-toggle = "collapse"
                      data-target = "#kr-navigation"
                      aria-expanded = "false"
                    >
                      <span className = "sr-only">Toggle navigation</span>
                      <span className = "icon-bar" />
                      <span className = "icon-bar" />
                      <span className = "icon-bar" />
                    </button>
                  </div>
                  <div
                    id = "kr-navigation"
                    className = "collapse navbar-collapse kr-navigation"
                  >
                    <ul>
                      <li>
                        <a href = "dashboard.html">Dasboard</a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </header>
      );
    }
  }
} 
 03.04.2019 09:10
Другие вопросы по теме
Анимация ширины div временно останавливается, когда она попадает в текстовое содержимое
Установите 24-часовой формат времени на оси шкалы времени реакции
Папка сборки реакции при запуске с использованием пакета serve предоставляет файлы src в инспекторе
Функциональные компоненты не могут иметь ссылок. Вы хотели использовать React.forwardRef()?
Сделать древовидное представление из данных
Передача переменной в setState
TypeError: _this2.props.history не определен
Как отправить список идентификаторов в качестве параметра с помощью graphql
Почему значение, установленное во входном значении, имеет только строковый тип?
Реагировать: для веб-приложения, как добавить разные функциональные кнопки для разных представлений (мобильное и настольное представление)
Похожие вопросы
Получить значение реквизита предыдущего экземпляра Vue
Использование Async/Await для нескольких тайм-аутов
Функция увеличения диаграммы Ганта возможна в Splunk?
Как игнорировать специальный узел td и все его дочерние элементы?
Контур и граница в Fabricjs
Фоновое изображение нескольких классов. альтернативный z-индекс
Я использую аутентификацию Firebase для своего приложения. Кажется, существует бесконечный цикл, в котором страница продолжает перенаправляться снова и снова
Jquery установка фонового изображения при загрузке не работает
Как проверить, какой флажок установлен, и сохранить данные в базу данных с помощью Angular
Попытка обратить вспять триггер JavaScript переключателя HTML/CSS
Разделы
Блог

Вопросы

Теги

О сайте

Контакты
info@reddeveloper.ru
Правовая информация
Политика конфиденциальности

Пользовательское соглашение


Находите ответы на сложные технические вопросы по программированию, с которыми сталкиваются инженеры по всему миру в своей ежедневной практике на сайте RedDeveloper.

© 2026 «RedDeveloper.ru»

RedDeveloper
Блог
Вопросы
Теги
Поиск...
Ошибка Oauth invalid_request: redirect_uri не внесен в белый список
Вопросы
NODE.JS
Ошибка Oauth invalid_request: redirect_uri не внесен в белый список
Я пытаюсь разработать приложение с React и Node на основе этого документация:

Я следовал инструкциям шаг за шагом, но я застрял в тестировании приложения с этим форматом URL:

Я заменил адрес ngrok и свой магазин shopify, но получаю ошибку 404 (эта страница не найдена).

Я нашел тот же вопрос в этом связь. Поэтому я переименовал .env в process.env, но у меня все та же проблема.

Вот .env-файл:

Ошибка Oauth invalid_request: redirect_uri не внесен в белый список

пакет.json:

Ошибка Oauth invalid_request: redirect_uri не внесен в белый список

сервер.js:

Ошибка Oauth invalid_request: redirect_uri не внесен в белый список

Ошибка :

Ошибка Oauth invalid_request: redirect_uri не внесен в белый список

 30.04.2019 11:51
8
1
14 859
11
Данный вопрос помечен как решенный
 Ответы 11
 Ответ принят как подходящий
Да, есть проблема с вашим URL-адресом обратного вызова, вы должны определить URL-адрес своего приложения и URL-адрес обратного вызова в своей партнерской учетной записи Shopify, где вы создаете приложение Shopify

Партнерский аккаунт Shopify

Вы должны сделать следующее

открыть приложения >> ваше приложение >> настройка приложения >> Вставить URL-адреса (URL-адреса перенаправления из белого списка))

Как только вы внесете свой URL в белый список, проблема будет решена.

 01.05.2019 06:45
Я не думаю, что мой ответ поможет многим, но я все равно положу его здесь. Недавно у меня была такая же проблема, и я пробовал все в сообществе stack-overflow и shopify. И, наконец, проблема была я по ошибке скопировал apikey моего другого приложения. Таким образом, даже если apiKey неверен, ошибка, с которой вы, вероятно, столкнетесь, будет той же самой: «URI перенаправления не внесен в белый список».

 21.08.2020 22:20
Ошибка, которую я совершал, заключалась в том, что я забыл добавить /auth/callback к URL-адресу пересылки в раздел Разрешенные URL-адреса перенаправления, сгенерированный следующей командой:

ngrok http 3000
поэтому URL-адрес перенаправления будет выглядеть так:

https://SOME_STRING.ngrok.io/auth/callback
 05.09.2020 16:50
Ваш URL-адрес перенаправления из белого списка должен быть https

 09.03.2021 21:34
Проблема, с которой я столкнулся, заключалась в том, что SHOPIFY_API_KEY и SHOPIFY_API_SECRET в файле .env были в кавычках, которые одинаковы и в вашем случае. Для этой ошибки цитаты также показывалась та же ошибка. В основном это ошибка неправильных ключей API. Вы можете попробовать удалить кавычки и попробовать еще раз?

Если это не сработает, убедитесь, что вы используете URL-адрес HTTPS, а не HTTP.

 05.04.2021 07:29
Для меня это было потому, что я случайно закомментировал код, где я установил AccessToken и магазин

 19.05.2021 04:29
Я случайно использовал адрес http вместо https.

 30.05.2021 16:04
Я предполагаю, что это произойдет, как только вы перезапустите свой ngrok, и ваш URL-адрес адреса ngrok изменится, вам придется вручную обновить свой новый ngrok в следующей части:

Ваш AppUrl и URL-адрес перенаправления в настройках приложения. (Панель управления Shopify)

В вашем файле .env, где вы определили свой SHOPIFY_APP_URL. (редактор кода)

 01.06.2021 09:05
У меня был '/' в конце SHOPIFY_APP_URL в файле .env, поэтому URL-адрес перенаправления был неправильным с '//auth/callback'

 19.06.2021 16:35
Я застрял с этой ошибкой на 5-6 часов, и это было только потому, что я использовал ngrok, а https в ngrok не очень хорошо работает... поэтому я загружаю весь свой контент на настоящий сервер с субдоменом https, и теперь все работает нормально

 10.12.2021 14:20
Убедитесь, что URL-адрес приложения и URL-адрес перенаправления в настройках приложения указаны правильно. что-то типа -

URL-адрес приложения => https://example.com/
URL-адрес перенаправления => https://example.com/auth/обратный вызов (не ставьте «/» в конце)
а в вашем проекте HOST должно быть: https://example.com/

это обязательно вам поможет!!!

 24.01.2022 07:18
Другие вопросы по теме
Установите значение Antd TextArea для компонента Tag
Отправка действия за действием
Selenium-ide, загрузка файла не работает для реагирующего приложения
ReactJS - TypeError: не удается прочитать имя свойства неопределенного
React console.info не отображает значения массива состояний
Динамически создавать большие таблицы с помощью реакции
Карусельный компонент слайдера ReactJS
Получение проблемы с npm при запуске проекта
Как отобразить цвет точек в соответствии с некоторым значением диапазона в точечной диаграмме в реагирующей диаграмме Google
Как я могу получить доступ к состоянию, которого нет в магазине в React?
Похожие вопросы
Ошибка аутентификации AWS Iot при использовании Open Id Connectivity
Как обновить документ в MongoDB без вставки повторяющейся записи?
«Недопустимый размер холста» при рендеринге PDF в PNG с использованием pdf.js
SetInterval вложен в другой setInterval
Получение проблемы с npm при запуске проекта
Mongoose — запрос глубоко вложенных объектов
Создайте сокет на стороне клиента (Winsock, MQL5, MT5) и сокет на стороне сервера, используя (NodeJS + Socket.io)
Многодокументные транзакции Mongoose не работают
Как мне проверить, что ключи от объекта 1 присутствуют в объекте 2?
Как изменить настройки анализатора, чтобы позволить edge_ngram искать числа?
Разделы
Блог

Вопросы

Теги

О сайте

Контакты
info@reddeveloper.ru
Правовая информация
Политика конфиденциальности

Пользовательское соглашение


Находите ответы на сложные технические вопросы по программированию, с которыми сталкиваются инженеры по всему миру в своей ежедневной практике на сайте RedDeveloper.

© 2026 «RedDeveloper.ru»

RedDeveloper
Блог
Вопросы
Теги
Поиск...
RangeError: недопустимая длина массива
Вопросы
JAVASCRIPT
RangeError: недопустимая длина массива
Я хочу получить массив из ключей моего объекта, но длина должна быть равна 0, когда объект пуст. Длина массива верна, когда я пытаюсь console.info() с массивом, но мой код зависает, выдавая следующую ошибку в моем браузере, и он останавливает выполнение:

RangeError: invalid array length
burger/transformedIngredients<
src/components/Burger/Burger.js:8

   5 | const burger = (props) => {
   6 |   let transformedIngredients = Object.keys(props.ingredients).map(igKey => (
   7 |     // eslint-disable-next-line max-len,react/no-array-index-key
>  8 |     [...Array(props.ingredients[igKey])].map((_, i) => <BurgerIngredient key = {igKey + i} type = {igKey} />)
   9 |   )).reduce((arr, el) => (
  10 |     arr.concat(el)
  11 |   ), []);
Это код, который я использую:

const burger = (props) => {
  let transformedIngredients = Object.keys(props.ingredients).map(igKey => (
    // eslint-disable-next-line max-len,react/no-array-index-key
    [...Array(props.ingredients[igKey])].map((_, i) => <BurgerIngredient key = {igKey + i} type = {igKey} />)
  )).reduce((arr, el) => (
    arr.concat(el)
  ), []);

  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please add some ingredients!</p>;
  }
Я прохожу ingredients отсюда:

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice: 4,
  };
render() {
    return (
      <Fragment>
        <Burger ingredients = {this.state.ingredients} />
        <BuildControls
          ingredientAdded = {this.addIngredientHandler}
          ingredientRemoved = {this.removeIngredientHandler}
        />
      </Fragment>
    );
  }
 20.07.2019 13:26
4
0
17 381
11
Данный вопрос помечен как решенный
 Ответы 11
 Ответ принят как подходящий
Я действительно не понимаю, почему вы делаете дополнительное сопоставление ключей и создаете многомерный массив, но вы можете изменить свой код на это, если хотите отобразить ингредиент для каждого ключа:

const burger = (props) => {
  let transformedIngredients = Object.keys(props.ingredients).map((igKey, i) => (
    <BurgerIngredient key = {igKey + i} type = {igKey} />
  ));
}
 20.07.2019 13:38
Ошибка может возникнуть, если один из ингредиентов имеет отрицательное значение, например:

state = {
  ingredients: {
    salad: -1, // this will cause the error
    bacon: 0,
    cheese: 0,
    meat: 0,
  },
  totalPrice: 4,
};
Вы можете предотвратить эту ситуацию, гарантируя, что отрицательное число не будет передано в конструктор Array, например, вы можете передать 0, если число отрицательное:

[...Array(Math.max(0, props.ingredients[igKey]))]
 20.07.2019 13:47
Я прохожу тот же курс и получаю ту же ошибку. Проверьте свой файл reducer.js и сравните его с исходным кодом, предоставленным в курсе. В моем случае массив, переданный из reducer.js, не соответствовал массиву, полученному Burger.js. Ошибка исчезла после исправления файла reducer.js.

Мой код выглядит так после исправления:

    const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientName]: state.ingredients[action.ingredientName] + 1
        },
        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
      };
    case actionTypes.REMOVE_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientName]: state.ingredients[action.ingredientName] - 1
        },
        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
      };
    default:
      return state;
    }
    };    
 24.07.2019 16:02
Я учусь реагировать на тот же курс, и у меня была та же проблема, что и у вас. В вашем const INGREDIENT_PRICES все объекты должны иметь тот же регистр, что и в buildcontrols.js, и в этом const элементы управления проверяют верхнюю и нижнюю причину совпадения слов с INGREDIENT_PRICES, после чего проблема будет решена.

 15.10.2019 20:45
в этом случае я сузил свою ошибку до попытки передать значение цены в параметры запроса, установив Number.parseFloat и toFixed для целого числа цен, тем самым устранив ошибку, вызывающую строковое десятичное число.

purchaseContinueHandler = () => {            
            const queryParams = [];
            let price = Number.parseFloat(this.state.totalPrice).toFixed(2);

            for (let i in this.state.ingredients) {
                queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]));
            }
            queryParams.push('price=' + price);

            const queryString = queryParams.join('&'); 

            this.props.history.push({
                pathname: '/checkout',
                search: '?' + queryString
            });

ошибка была вызвана для меня наличием десятичной строки в значении цены.

 01.01.2020 11:58
Имеет ту же ошибку, что и у вас, возможно, ошибка была в добавлении ингредиентов.

Решил мою, изменив «[]» на «{}» в строке копирования объекта. Я не заметил, что использовал [].

 04.02.2020 07:54
Я тоже сделал ту же ошибку, заменив буквы "b" и "c" на заглавные. в "беконе" и "сыре".

Сделав каждый символ в одном и том же регистре, проблема решена:

const controls=[
  {label:'salad',type:'salad'},
  {label:'bacon',type:'bacon'},
  {label:'cheese',type:'cheese'},
  {label:'meat',type:'meat'}
  ];
 30.04.2020 10:12
Я следую тому же курсу, пожалуйста, проверьте название ингредиента, которое вы используете в своей базе данных, оно должно быть таким же, как в BuildControls.js, тип ингредиентов должен быть таким же, как вы пишете в своей базе данных. Это определенно решит вашу проблему.

Эта ошибка возникает из-за выбора неправильного имени, поэтому пишет Недопустимая длина массива.

 03.06.2020 12:42
Спасибо всем, кто нашел время, чтобы предоставить свой ответ и мысли. У меня была такая же проблема, и решение состояло в том, чтобы просто изменить значение ключа на нижний регистр,

Например, в приведенном ниже коде: Ошибка заключалась в том, что 'Price' в верхнем регистре вместо 'price' в нижнем.

checkoutContinuedHandler = () => {
        const queryParams = [];
        for (let ing in this.state.ingredients) {
            queryParams.push(encodeURIComponent(ing) + '=' + encodeURIComponent(this.state.ingredients[ing]));
        }
        queryParams.push('price=' + this.state.totalPrice.toFixed(2));
        const queryString = queryParams.join('&');
        this.props.history.push({
            pathname: '/checkout',
            search: '?' + queryString
        });
    }
 20.07.2020 13:45
Я следовал тому же курсу и столкнулся с той же проблемой. Включено totalPrice как пара ключ-значение в объект ингредиентов (в файле reducer.js), что не так, поскольку это отдельная пара ключ-значение в обновленном состоянии для каждого действия.

Перед исправлением-

import * as actionTypes from './actions';

const initialState = {
    ingredients: {
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0
    },
    totalPrice: 4,
};

const INGREDIENT_PRICES = {
    salad: 0.5,
    bacon: 1.3,
    cheese: 0.6,
    meat: 1,
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.ADD_INGREDIENT: return {
            ...state,
            ingredients: {
                ...state.ingredients,
                [action.ingredientName]: state.ingredients[action.ingredientName] + 1,
                `totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]`
            }
        };

        case actionTypes.REMOVE_INGREDIENT: return {
            ...state,
            ingredients: {
                ...state.ingredients,
                [action.ingredientName]: state.ingredients[action.ingredientName] - 1,
                `totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName]`
            }
        }

        default : return state;
    }
};

export default reducer;
После исправления-

import * as actionTypes from './actions';

const initialState = {
    ingredients: {
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0
    },
    totalPrice: 4,
};

const INGREDIENT_PRICES = {
    salad: 0.5,
    bacon: 1.3,
    cheese: 0.6,
    meat: 1,
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.ADD_INGREDIENT: return {
            ...state,
            ingredients: {
                ...state.ingredients,
                [action.ingredientName]: state.ingredients[action.ingredientName] + 1,
            },
            `totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]`
        };

        case actionTypes.REMOVE_INGREDIENT: return {
            ...state,
            ingredients: {
                ...state.ingredients,
                [action.ingredientName]: state.ingredients[action.ingredientName] - 1,
            },
            `totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName]`
        }

        default : return state;
    }
};

export default reducer;
 02.10.2020 19:07
Просто удалите оператор спреда из ...state.ingredients, и все заработает!

 13.01.2021 08:02
Другие вопросы по теме
GcAllowVeryLargeObjects установлен, но по-прежнему вызывает исключение System.ArgumentOutOfRangeException
Как вставить массив в mysql без выполнения цикла
Mysql, использующий объединение и сопоставление массива
Отображение объектов с глубокой вложенностью
Как передать команду через аргумент getopts и выполнить ее?
Как получить java-код — String.getBytes("UTF-8"); аналогичный вывод в javascript
Java: узел связанного списка не работает в моем коде
Векторизованный подход для извлечения строк массива конечных точек, который содержит элементы другого массива
Привязка JSON к массиву в выбранном Typescript
Matplotlib: гистограмма с накоплением
Похожие вопросы
Как передать данные из jquery в php, чтобы отправить сообщение на gmail
Как присоединиться к массиву значений, возвращая каждое значение в виде отдельной строки?
Невозможно прочитать "категорию" свойства неопределенного - ошибка при попытке использовать данные из состояния
Как создать автоматический генератор форм на основе пользовательского ввода
Наследование классов - правильный вызов методов
Обнаружение одновременного нажатия нескольких клавиш и отсутствие ответа при нажатии других клавиш
Как я могу выстрелить движущейся пулей?
Map() возвращает пары значений с объектом
Измените javascript для определения цвета шрифта для использования в R Shiny
Как написать строку RegExp в VScode, она всегда будет исправлена
Разделы
Блог

Вопросы

Теги

О сайте

Контакты
info@reddeveloper.ru
Правовая информация
Политика конфиденциальности

Пользовательское соглашение


Находите ответы на сложные технические вопросы по программированию, с которыми сталкиваются инженеры по всему миру в своей ежедневной практике на сайте RedDeveloper.

© 2026 «RedDeveloper.ru»

RedDeveloper
Блог
Вопросы
Теги
Поиск...
После установки $ npm появляется ошибка: не удается найти модуль '../lib/utils/unsupported.js'
Вопросы
JAVASCRIPT
После установки $ npm появляется ошибка: не удается найти модуль '../lib/utils/unsupported.js'
Я только что вернулся к работе над проектом React после работы в среде Rails и обнаружил, что не могу запускать никакие команды NPM в своем терминале Mac. Я перепробовал все средства, с которыми сталкивался, но ни одно из них не помогло. Более серьезная проблема заключается в том, что вызвало это и как я могу избежать этого снова.

Вот ошибка. Что мне нужно сделать? Пожалуйста помоги.

$npm install            

internal/modules/cjs/loader.js:550
    throw err;
    ^

Error: Cannot find module '../lib/utils/unsupported.js'
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:548:15)
    at Function.Module._load (internal/modules/cjs/loader.js:475:25)
    at Module.require (internal/modules/cjs/loader.js:598:17)
    at require (internal/modules/cjs/helpers.js:11:18)
    at /usr/local/lib/node_modules/npm/bin/npm-cli.js:19:21
    at Object.<anonymous> (/usr/local/lib/node_modules/npm/bin/npm-cli.js:92:3)
    at Module._compile (internal/modules/cjs/loader.js:654:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:665:10)
    at Module.load (internal/modules/cjs/loader.js:566:32)
    at tryModuleLoad (internal/modules/cjs/loader.js:506:12)
Я пробовал следующее:

$brew update
$brew uninstall node
$brew install node
После чего появляются следующие команды, когда раньше $ which npm была неизвестной командой:

$which npm
/usr/local/bin/npm

$which node
/usr/local/bin/node
Я даже пробовал запустить:

/usr/local/bin/npm -v
но получите ту же ошибку, что и выше, пока

/usr/local/bin/node -v
v9.11.1
работает отлично.

добавил следующее в мой файл .zshrc:

export PATH=/usr/local/bin/node:$PATH
export PATH=/usr/local/bin/npm:$PATH
Я также пробовал:

$brew uninstall --force node
$brew link --overwrite node 
Warning: Already linked: /usr/local/Cellar/node/9.11.1
To relink: brew unlink node && brew link node

$rm -rf /usr/local/lib/node_modules/npm    
тогда,

$node install
но это тоже не работает.

$echo $NODE_PATH
действительно появляется пустым, поэтому мне может потребоваться добавить следующее в мой .bashrc.

export PATH = "/usr/local/bin/npm:/usr/local/bin/node:/usr/local/bin:$PATH" 
Это тоже не работает.

 06.04.2018 05:32
30
5
50 613
12
Данный вопрос помечен как решенный
 Ответы 12
У меня такая же ошибка была после brew upgrade на mac. Я сделал brew postinstall node, и это исправило.

 06.04.2018 15:29
Попробуйте это: https://gist.github.com/DanHerbert/9520689

«Если вы являетесь пользователем Homebrew и установили узел через Homebrew, существует серьезная философская проблема, связанная с тем, как Homebrew и NPM работают вместе».

Престижность Дэну Герберту за решение.

 10.04.2018 07:43
 Ответ принят как подходящий
Удалить узел brew uninstall --force node
Удалите папку /usr/local/lib/node_modules
Установите снова brew install node
 19.04.2018 19:09
У меня возникла проблема после обновления моего Mac. Я пробовал разные решения, доступные при переполнении стека, и у меня ничего не работает.

This solution works for me.

Удалить узел все версии brew uninstall --force node
Установите его еще раз с этого brew install node
Во-первых, удалите все версии узлов, если они доступны.

Сделанный. Наслаждайтесь кодированием.

 01.07.2018 10:58
Предположим, что это происходит на MacOS, решение ниже работает для меня.

brew uninstall --force узел
Посетите https://nodejs.org/en/ и загрузите версию LTS и установите, ошибка исчезла
 28.09.2018 08:11
Извините, но в моем случае я получаю ту же ошибку, потому что мой index.js находится внутри папки de src, убедитесь, что вы находитесь в каталоге seme вашего index.js для запуска

 18.11.2018 17:01
Удалить все файлы из следующей папки

A) C: \ Users \\ AppData \ Roaming \ npm

Б) C: \ Users \\ AppData \ Roaming \ npm-cache

и снова install node

затем выполните команду "npm install -g @angular/cli"

 13.12.2018 17:38
Никто из других ответивших не решил мою проблему. После переустановки Node я все еще получал ту же ошибку (даже когда я просто написал npm -v).

Я следил за этот ответ здесь (удаление все, называемого node и npm), который решил эту проблему для меня.

 28.12.2018 10:32
Это случилось со мной после установки пряжи.

в терминале:

brew uninstall --force --ignore-dependencies node
brew install node
если у вас возникли проблемы с символической ссылкой на узел, в том же терминале:

sudo chown -R `whoami`:admin /usr/local/include
sudo chown -R `whoami`:admin /usr/local/bin
sudo chown -R `whoami`:admin /usr/local/share
sudo chown -R `whoami`:admin /usr/local/lib
brew link --overwrite node
Убедитесь, что ваша переустановка прошла успешно, набрав в терминале следующее:

node -v
 24.08.2019 11:51
В моем случае решением проблемы была переустановка узла с помощью официального установщика от https://nodejs.org (Mac OS).

Решение:

Загрузите установщик узла с https://nodejs.org
Установите это
P.S. Проблема возникла после установки пряжи.

 10.10.2019 16:24
В моем случае это произошло после того, как я выполнил очистку всех папок node_modules на всей машине. У меня был узел, установленный с NVM, и я начал получать эту ошибку, независимо от того, какое действие, связанное с узлом, я хотел запустить:

Error: Cannot find module '../lib/utils/unsupported.js'
Я решил это, выполнив следующие действия:

Перезагрузил мой компьютер
Неустановленный nvm
Установлена ​​другая версия узла
 15.02.2020 14:40
Еще одно предложение после их попытки, которое, наконец, сработало для меня, заключалось в простом обновлении моего узла, загрузив последнюю версию с помощью установщика загрузки и пакета отсюда:

https://nodejs.org/en/download/

Прежде чем сделать это, попытка запустить любую команду npm дала мне ту же ошибку, что и в вопросе OP

После этого у меня начали работать команды npm.

 28.05.2020 22:12
Другие вопросы по теме
Как выбрать случайный объект (?) Из файла JSON с помощью Javascript?
Nodemon медленно перезагружает сервер
Angular 1.6.9 и чат-приложение socket.io
Прототип объекта не работает в Node.JS
Можно ли использовать Vuex без Vue? (На стороне сервера Vuex?)
Удаление объектов AWS / S3 из Node.JS (JavaScript)
Как изменить каталог (внешний каталог, например, рабочий стол) файловой системы в node.js
Есть ли в Node JS функция apply like, подобная python
Как перенаправить запрос GET из моего корня в app.js на маршрут в папке моих контроллеров в Express.js?
Node.js - изменяет ли значение переменной из другого файла и эту переменную в другом файле?
Похожие вопросы
Как выбрать случайный объект (?) Из файла JSON с помощью Javascript?
Проверенное свойство Checkbox не работает
Обнаружение автономного режима в старой версии Chrome
Свойство Flex-wrap для flexbox
Я не могу найти способ имитировать щелчок / касание с помощью WKWebView и Java Script
Window.onbeforeunload = null не работает
Подсветка синтаксиса JavaScript - статус является ключевым словом? - для чего это использовалось?
Предупреждение DataTables: table id = tblList - запрошенный неизвестный параметр. Дополнительную информацию об этой ошибке см. На http://datatables.net/tn/4
Прототип объекта не работает в Node.JS
Можно ли использовать Vuex без Vue? (На стороне сервера Vuex?)
Разделы
Блог

Вопросы

Теги

О сайте

Контакты
info@reddeveloper.ru
Правовая информация
Политика конфиденциальности

Пользовательское соглашение


Находите ответы на сложные технические вопросы по программированию, с которыми сталкиваются инженеры по всему миру в своей ежедневной практике на сайте RedDeveloper.

© 2026 «RedDeveloper.ru»

RedDeveloper
Блог
Вопросы
Теги
Поиск...
React-Native: не удалось загрузить пакет. Не удается прочитать свойство throwlfClosureRequired
Вопросы
REACTJS
React-Native: не удалось загрузить пакет. Не удается прочитать свойство throwlfClosureRequired
Приложение устанавливается и открывается, но сразу после его открытия появляется красный экран с приведенным ниже сообщением об ошибке.

TBH Я не совсем уверен, что делаю, и мне действительно нужна помощь. Мне удалось заставить работать мой другой проект, но когда я начал свой второй проект, это возникло при попытке запустить код. Код - это просто базовый код, который вы получаете при запуске: response-native init projectName

React-Native: не удалось загрузить пакет. Не удается прочитать свойство throwlfClosureRequired

 21.04.2018 02:27
12
0
18 554
12
Данный вопрос помечен как решенный
 Ответы 12
Фиксированный. babel выпустил обновление до 5.0.0. установите ваши предустановки на 4.0.0, и он исправит это.

https://github.com/facebook/react-native/issues/18962

 21.04.2018 05:02
 Ответ принят как подходящий
Измените версию «babel-preset-react-native» на «4.0.0». Проблема возникает в последней версии 5.0.0.

После изменения версии запустите npm install. Затем запустите эмулятор.
Даже тогда, если вы столкнетесь с проблемой, удалите каталог node_modules, повторите шаг 1.
Перезагрузите компьютер, если проблема снова появится даже после всех попыток.
Проверить проблема с github

 21.04.2018 12:09
^^ что они сказали ... измените ваш "babel-preset-react-native" на 4.0.0.

 22.04.2018 03:02
Попробуйте эту команду реагировать-родное обновление

 09.07.2018 13:24
Я получил вышеупомянутую ошибку только сейчас. Я использую React Native v0.57, и в моем файле json было это

 {
  "name": "AwesomeProject",
  "version": "0.0.1",
  "private": true,
  "scripts": {
    "start": "node node_modules/react-native/local-cli/cli.js start",
    "test": "jest"
  },
  "dependencies": {
    "react": "16.5.0",
    "react-native": "0.57.1"
  },
  "devDependencies": {
    "babel-jest": "23.6.0",
    "jest": "23.6.0",
    "metro-react-native-babel-preset": "0.45.6",
    "react-test-renderer": "16.5.0"
  },
  "jest": {
    "preset": "react-native"
  }
}
Я добавил «babel-preset-react-native»: «4.0.0» и удалил «metro-react-native-babel-preset»: «0.45.6» в «devDependencies», и ошибка была устранена.

 22.09.2018 20:11
Была такая же проблема. Переход на "babel-preset-react-native": "4.0.0" не сработал. это сработало для меня

npm добавить @ babel / время выполнения

 02.10.2018 03:26
Решение Джонатана тоже сработало для меня:

Фиксированный. babel выпустил обновление до 5.0.0. установите ваши предустановки на 4.0.0, и он исправит это.

https://github.com/facebook/react-native/issues/18962

 02.10.2018 05:31
Попробуйте следующее: очистите папку сборки и попробуйте еще раз.

запустить react-native start --reset-cache на одной вкладке

а потом запустить react-native на другой вкладке

 07.10.2018 17:37
Для меня этот ответ сработал:

https://stackoverflow.com/a/40966360/4483716

В основном мне нужно было дать разрешение на папку

/Users/[username]/Library/LaunchAgents.

Используйте эту команду:

$ sudo chown $(whoami) /Users/$(whoami)/Library/LaunchAgents
 09.11.2018 04:00
Добавьте babel-preset-react-native версии 4.0.0 к вашему devDependencies в package.json
"devDependencies": { "babel-preset-react-native": "4.0.0" },

npm install
react-native run-ios или андроид
Если по-прежнему не работает, попробуйте rm -rf node_modules/ и повторите шаги 2 и 3.

 17.11.2018 05:04
Я перешел на

"react-native": 0.57.7

"metro-react-native-babel-preset": "0.48.5",

Теперь пакет загружается, как ожидалось.

 12.12.2018 23:16
Моя текущая версия:

"react-native": "0.57.8",
"metro-react-native-babel-preset": "0.51.1",

Вот как я исправил:

Добавлять

"devDependencies": {
  "babel-preset-react-native": "4.0.0"
},
удалить node_modules

npm install

Вуаля! Оно работает!

 28.01.2019 04:52
Другие вопросы по теме
Как передать реквизит в StackNavigator
Секретный ключ Secure Server (паспорт laravel), хранящийся в собственном или собственном мобильном коде реакции
Могу ли я запустить обновление модуля после ссылки на response-native с помощью response-native-image-picker?
Отладка расплывчатых ошибок времени выполнения iOS?
Индивидуальный стиль Picker.Item в React Native
D3 и React-Native
Как горизонтально центрировать React Native Flexbox Text, который переносится через несколько строк
Как в react-native-video отключить функцию поиска?
Как загрузить файл изображения в firebase
ReactNative: отключите индикатор активности только после завершения перехода на новую страницу
Похожие вопросы
Как передать реквизит в StackNavigator
Как я могу передать опору на мой домашний маршрут после перенаправления?
Сделайте React js мобильным для мобильных устройств
Состояние Redux перезаписано состоянием по умолчанию из редуктора
Панель поиска Video.js - точка поиска за курсором мыши
Почему я получаю неправильный макет при использовании компонента «Сетка» в 'semantic-ui-react'?
Влияние файла css на другой файл в React js
Как получить доступ к "этому" из компонентного метода
Next.JS: Как сделать ВСЕ запросы на стороне сервера
React js: цикл через массив, полученный от blade-сервера
Разделы
Блог

Вопросы

Теги

О сайте

Контакты
info@reddeveloper.ru
Правовая информация
Политика конфиденциальности

Пользовательское соглашение


Находите ответы на сложные технические вопросы по программированию, с которыми сталкиваются инженеры по всему миру в своей ежедневной практике на сайте RedDeveloper.

© 2026 «RedDeveloper.ru»

RedDeveloper
Блог
Вопросы
Теги
Поиск...
«Ошибка: нельзя вызывать store.getState () во время выполнения редуктора»
Вопросы
JAVASCRIPT
«Ошибка: нельзя вызывать store.getState () во время выполнения редуктора»
Я только что обновил свое полнофункциональное приложение, поддерживающее реакцию, до Redux v4, но теперь получаю следующую ошибку:

Error: Error: Error: Error: You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.

Я подозреваю, что проблема в том, что у меня есть множество компонентов внутри других, каждый со своим собственным connect(mapStateToProps, mapDispatchToProps)(Component), и я полагаю, что это неправильный способ его реализации, хотя я не уверен, как это сделать.

Любое направление приветствуется!

Трассировки стека:

    This error is located at:
    in Connect(SideBarApp) (at SceneView.js:9)
    in SceneView (at createTabNavigator.js:10)
    in RCTView (at View.js:43)
    in RCTView (at View.js:43)
    in ResourceSavingScene (at createBottomTabNavigator.js:86)
    in RCTView (at View.js:43)
    in RCTView (at View.js:43)
    in TabNavigationView (at createTabNavigator.js:127)
    in NavigationView (at createNavigator.js:59)
    in Navigator (at createNavigationContainer.js:376)
    in NavigationContainer (at SceneView.js:9)
    in SceneView (at SwitchView.js:12)
    in SwitchView (at createNavigator.js:59)
    in Navigator (at createNavigationContainer.js:376)
    in NavigationContainer (at AppNavigator.js:36)
    in App (created by Connect(App))
    in Connect(App) (at index.ios.js:23)
    in Provider (at index.ios.js:22)
    in TheNewsApp (at renderApplication.js:32)
    in RCTView (at View.js:43)
    in RCTView (at View.js:43)
    in AppContainer (at renderApplication.js:31)

This error is located at:
    in NavigationContainer (at SceneView.js:9)
    in SceneView (at SwitchView.js:12)
    in SwitchView (at createNavigator.js:59)
    in Navigator (at createNavigationContainer.js:376)
    in NavigationContainer (at AppNavigator.js:36)
    in App (created by Connect(App))
    in Connect(App) (at index.ios.js:23)
    in Provider (at index.ios.js:22)
    in TheNewsApp (at renderApplication.js:32)
    in RCTView (at View.js:43)
    in RCTView (at View.js:43)
    in AppContainer (at renderApplication.js:31)

This error is located at:
    in NavigationContainer (at AppNavigator.js:36)
    in App (created by Connect(App))
    in Connect(App) (at index.ios.js:23)
    in Provider (at index.ios.js:22)
    in TheNewsApp (at renderApplication.js:32)
    in RCTView (at View.js:43)
    in RCTView (at View.js:43)
    in AppContainer (at renderApplication.js:31)
getState@http://localhost:8081/index.ios.bundle?platform=ios&dev=true&minify=false:79579:24
runComponentSelector@http://localhost:8081/index.ios.bundle?platform=ios&dev=true&minify=false:78896:56
initSelector@http://localhost:8081/index.ios.bundle?platform=ios&dev=true&minify=false:79019:28
Connect(SideBarApp)@http://localhost:8081/index.ios.bundle?platform=ios&dev=true&minify=false:78969:29
constructClassInstance@http://localhost:8081/index.ios.bundle?platform=ios&dev=true&minify=false:20826:32
updateClassComponent@http://localhost:8081/index.ios.bundle?platform=ios&dev=true&minify=false:22393:35
performUnitOfWork@http://localhost:8081/index.ios.bundle?platform=ios&dev=true&minify=false:24922:27
workLoop@http://localhost:8081/index.ios.bundle?platform=ios&dev=true&minify=false:24955:47
renderRoot@http://localhost:8081/index.ios.bundle?platform=ios&dev=true&minify=false:24988:21
performWorkOnRoot@http://localhost:8081/index.ios.bundle?platform=ios&dev=true&minify=false:25549:23
performWork@http://localhost:8081/index.ios.bundle?platform=ios&dev=true&minify=false:25481:30
performSyncWork@http://localhost:8081/index.ios.bundle?platform=ios&dev=true&minify=false:25456:20
requestWork@http://localhost:8081/index.ios.bundle?platform=ios&dev=true&minify=false:25362:26
scheduleWork@http://localhost:8081/index.ios.bundle?platform=ios&dev=true&minify=false:25224:28
enqueueSetState@http://localhost:8081/index.ios.bundle?platform=ios&dev=true&minify=false:20681:23
setState@http://localhost:8081/index.ios.bundle?platform=ios&dev=true&minify=false:2380:37
dispatch@http://localhost:8081/index.ios.bundle?platform=ios&dev=true&minify=false:80901:27
navigate@http://localhost:8081/index.ios.bundle?platform=ios&dev=true&minify=false:80517:24
nav@http://localhost:8081/index.ios.bundle?platform=ios&dev=true&minify=false:80470:44
combination@http://localhost:8081/index.ios.bundle?platform=ios&dev=true&minify=false:79810:38
dispatch@http://localhost:8081/index.ios.bundle?platform=ios&dev=true&minify=false:79628:38
setLoginStatus@http://localhost:8081/index.ios.bundle?platform=ios&dev=true&minify=false:112247:19
http://localhost:8081/index.ios.bundle?platform=ios&dev=true&minify=false:112199:44
tryCallOne@http://localhost:8081/index.ios.bundle?platform=ios&dev=true&minify=false:8818:16
http://localhost:8081/index.ios.bundle?platform=ios&dev=true&minify=false:8919:27
_callTimer@http://localhost:8081/index.ios.bundle?platform=ios&dev=true&minify=false:8162:17
_callImmediatesPass@http://localhost:8081/index.ios.bundle?platform=ios&dev=true&minify=false:8198:19
callImmediates@http://localhost:8081/index.ios.bundle?platform=ios&dev=true&minify=false:8417:33
__callImmediates@http://localhost:8081/index.ios.bundle?platform=ios&dev=true&minify=false:7741:32
http://localhost:8081/index.ios.bundle?platform=ios&dev=true&minify=false:7580:34
__guard@http://localhost:8081/index.ios.bundle?platform=ios&dev=true&minify=false:7721:15
flushedQueue@http://localhost:8081/index.ios.bundle?platform=ios&dev=true&minify=false:7579:21
flushedQueue@[native code]
invokeCallbackAndReturnFlushedQueue@[native code]
 24.07.2018 18:08
76
5
20 132
12
 Ответы 12
В моем случае мне нужно удалить composeWithDevTools - плагин для хрома

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

// const enhancer = composeWithDevTools(applyMiddleware(thunk))
const enhancer = applyMiddleware(thunk)

const store = createStore(reducers, enhancer);
 28.11.2018 04:35
У меня была такая же ошибка с сборкой PWA с полимером 3. Store.js также пытался использовать инструменты redux dev, которые мне пришлось деактивировать:

...
// Sets up a Chrome extension for time travel debugging.
// See https://github.com/zalmoxisus/redux-devtools-extension for more information.
//const devCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const devCompose =  compose;

// Initializes the Redux store with a lazyReducerEnhancer (so that you can
// lazily add reducers after the store has been created) and redux-thunk (so
// that you can dispatch async actions). See the "Redux and state management"
// section of the wiki for more details:
// https://github.com/Polymer/pwa-starter-kit/wiki/4.-Redux-and-state-management
export const store = createStore(
  state => state,
  devCompose(
    lazyReducerEnhancer(combineReducers),
    applyMiddleware(thunk))
);
...
 28.11.2018 04:41
Это проблема с новый выпуск v2.16.0 для сокращение-devtools-расширение.
Вот парочка обходной путь пока ждем исправления ...

Вернуться назад до рабочей версии v2.15.5 (Для Chrome)

Скачать https://github.com/zalmoxisus/redux-devtools-extension/releases/download/2.15.5/extension.zip
Извлеките почтовый индекс
Введите chrome://extensions в URL-адрес и переключите developer mode на top right страницы.
Появится кнопка Load Unpacked. После нажатия кнопки выберите извлеченную папку.
Или просто сейчас запрещать ваш расширение redux-devtool.

либо на уровне браузера, либо через ваш код (где вы создаете хранилище redux)
К вашему сведению: это не решает вопрос OP, но решает проблему, когда разработчики получают следующее сообщение об ошибке, начиная с 27.11.18.

Error: You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.

ОБНОВИТЬ
v2.16.2 было выпущенный

Для тех, кто ранее отключал расширение, просто снова включите его и обновите инструменты разработки redux с 2.16.0 до 2.16.2 Обновите инструменты Redux Dev

 28.11.2018 05:19
В моем проекте. Эта проблема просто появляется из ниоткуда в один прекрасный день.

Мое решение: Отключите расширение Chrome - Redux Devtools. Потом все вернулось в норму.

Таким образом, с такой ошибкой вы должны протестировать в нескольких браузерах, чтобы найти проблему.

 28.11.2018 05:20
Вот что я сделал: просто прокомментировал строку для Chrome Redux Devtools Extension из моего файла store.js.

....

 const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware)
   ///This line--> window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 
  )
);

....
И вопрос только начался час назад. Как мы все знаем, расширение очень удобно во время разработки, так что давайте подождем реальных исправлений от властей.

 28.11.2018 06:23
Отключение расширения Chrome или удаление composeWithDevTool из вашего кода будет быстрым решением. Но все мы знаем, что нам нужно расширение, чтобы отслеживать состояние нашего приложения и правильно им управлять. Итак, я создал проблему сегодня, пожалуйста, поддержите, надеюсь, кто-то из команды redux свяжется с нами.

Или, если вы ищете временное решение (для Chrome), вы можете загрузить https://github.com/zalmoxisus/redux-devtools-extension/releases/download/2.15.5/extension.zip, а затем распаковать его в какую-нибудь папку.

Введите chrome: // extensions и включите режим разработчика в верхнем левом углу, затем нажмите «Загрузить распакованные» и выберите извлеченную папку для использования.

Проблема: https://github.com/reduxjs/redux-devtools/issues/413

 28.11.2018 07:03
Решение, которое работает для меня

Отключите расширение Chrome для Инструменты Redux Dev. или удалите регистратор из вашего кода.

Обновить: обновите инструменты разработки redux с 2.16.0 до 2.16.1 Обновите инструменты Redux Dev.

 28.11.2018 11:12
Должен быть исправлен сейчас. Обновите инструменты redux dev с 2.16.0 до 2.16.1

https://github.com/zalmoxisus/redux-devtools-extension/issues/588#issuecomment-442396540

 28.11.2018 11:37
В моем случае проблема не была связана с расширением dev. Я столкнулся с этой ошибкой при работе с глубокими ссылками - обновлял запрос маршрута внутри reducer. Логика переноса, связанная с манипулированием URL-адресом внутри settimeout, исправила ошибку.

 16.07.2019 12:26
У меня была эта проблема с Chrome. Понижение моей версии redux с 4.0.2 до 3.7.2 исправило это для меня.

npm uninstall redux

npm install redux@3.7.2

 07.10.2020 20:59
tl; dr
Убедитесь, что у вас нет кода, вызывающего побочные эффекты в ваших редукторах!

Чистые редукторы
Редукторы Redux должны быть чистыми. Это означает, что у них не должно быть побочных эффектов. Побочные эффекты должны идти в саги или загадки. В моем случае редуктор выглядел так:

case REDIRECT_ON_EVENT: {
  history.push('/some-route'); // side effect: redirection
  return {
    ...state,
    path: action.payload.path,
  };
}
Часть history.push('/some-route'); испортила управление состоянием. Удаление его из редуктора и его размещение в саге, которая вызывается для того же типа действия, устранило проблему:

function redirectToSomeRoute() {
  history.push('/some-route');
}

takeEvery(REDIRECT_ON_EVENT, redirectToSomeRoute),
 16.04.2021 05:32
Note: I am using Saga

В моем случае я добавил код навигации внутри редуктора.

    sendOTPSuccess: (state, action) => {
      state.wip = false;

      RootNavigation.navigate('LoginOTPScreen');
    },
Вначале он работал, но когда я использовал / получал доступ к состоянию внутри вызванного нового экрана

import { useDispatch, useSelector } from "react-redux";
import * as sessionActions from "../../models/session";

const LoginOTP: () => Node = (props) => {
  const session = useSelector(sessionActions.selectSession);
  const dispatch = useDispatch();
  ...
выскочила ошибка.

“Error: You may not call store.getState() while the reducer is executing.”
Причина
Редуктор должен быть чистой функцией. Он должен принимать полезные данные и изменять состояние и ничего больше. Что-то еще считается побочным эффектом.

В моем случае я загрузил новый компонент, который также потребляет данные state, и изменение состояния еще не завершено. Это вызывает проблему.

Решение
Я просто переместил навигацию на соответствующий saga

// worker Saga:
function* sendOTPSaga({ payload }) {
  const { phoneNumber } = payload;
  try {
    const response = yield call(Api.sendOtp, { phoneNumber });
    if (response.status == 200) {
      yield put(sessionActions.sendOTPSuccess(response.data));
      RootNavigation.navigate('LoginOTPScreen'); // <---- Here
    ...
 15.06.2021 05:23
Другие вопросы по теме
React Native array prop сбивает с толку
Вызов родительской функции в дочернем компоненте
ComponentDidMount вызывается каждый раз, когда размер браузера изменяется в React JS
Как сделать текстовое поле пользовательского интерфейса материала менее широким, когда оно находится в таблице
Изменение массива в состоянии не отображается на странице
Реагирование веб-приложения на статический веб-сайт с помощью gatsby
Реагируйте, создавая оптимальные производственные пакеты с помощью webpack
Реагировать на элемент кнопки onClick как на узел javascript
Работа с неопределенными атрибутами в контролируемых полях в Reactjs
Связать виртуальное пианино с миди-клавиатурой
Похожие вопросы
Как мне использовать здесь несколько файлов csv и сделать так, чтобы график обновлялся каждые 5 секунд?
Как привязать данные массива для выбора опции
Связывание переключателей с данными во Vue с помощью render / createElement
Общаться по Telnet с Javascript?
Редактор кода JavaScript для переполнения стека: элементы окна глобального объекта доступны напрямую
Как включить файл JavaScript в код TypeScript?
Javascript находит строки без тегов элементов
React Native array prop сбивает с толку
Асинхронная функция Nodejs работает не во всех функциях
Newsletter2Go - Форма не работает после заполнения ее javascript?
Разделы
Блог

Вопросы

Теги

О сайте

Контакты
info@reddeveloper.ru
Правовая информация
Политика конфиденциальности

Пользовательское соглашение


Находите ответы на сложные технические вопросы по программированию, с которыми сталкиваются инженеры по всему миру в своей ежедневной практике на сайте RedDeveloper.

© 2026 «RedDeveloper.ru»

		RedDeveloper
Блог
Вопросы
Теги
Поиск...
NPM - Не удалось заменить env в конфигурации: $ {NPM_TOKEN}
Вопросы
NODE.JS
NPM - Не удалось заменить env в конфигурации: $ {NPM_TOKEN}
Я пытаюсь создать приложение для реагирования, но когда я выполняю команду npm -i, я получаю следующую ошибку:

Error: Failed to replace env in config: ${NPM_TOKEN}
    at /usr/local/lib/node_modules/npm/lib/config/core.js:415:13
    at String.replace (<anonymous>)
    at envReplace (/usr/local/lib/node_modules/npm/lib/config/core.js:411:12)
    at parseField (/usr/local/lib/node_modules/npm/lib/config/core.js:389:7)
    at /usr/local/lib/node_modules/npm/lib/config/core.js:330:24
    at Array.forEach (<anonymous>)
    at Conf.add (/usr/local/lib/node_modules/npm/lib/config/core.js:328:23)
    at ConfigChain.addString (/usr/local/lib/node_modules/npm/node_modules/config-chain/index.js:244:8)
    at Conf.<anonymous> (/usr/local/lib/node_modules/npm/lib/config/core.js:316:10)
    at /usr/local/lib/node_modules/npm/node_modules/graceful-fs/graceful-fs.js:78:16
/usr/local/lib/node_modules/npm/lib/npm.js:61
      throw new Error('npm.load() required')
      ^

Error: npm.load() required
    at Object.get (/usr/local/lib/node_modules/npm/lib/npm.js:61:13)
    at process.errorHandler (/usr/local/lib/node_modules/npm/lib/utils/error-handler.js:205:18)
    at process.emit (events.js:182:13)
    at process._fatalException (internal/bootstrap/node.js:448:27)
Я использую MacOS High Sierra. Я попытался установить NPM_TOKEN как переменную среды с помощью следующей команды:

set -x NPM_TOKEN = xyz
но это не работает. В чем проблема?

 25.08.2018 11:15
81
4
77 465
12
Данный вопрос помечен как решенный
 Ответы 12
Для пользователей Ubuntu из Google:

нано ~ / .bash_aliases
экспорт NPM_TOKEN = "PUT_YOUR_TOKEN_HERE"
CTRL + X для выхода
Y, чтобы сохранить
 28.09.2018 22:23
 Ответ принят как подходящий
Первое возможное решение:
Простое решение: rm -f ./.npmrc (удаление файла .npmrc)

Второе возможное решение:
Однако, если вы не хотите удалять файл, вы можете просто удалить эту строку кода из файла .npmrc.

Строка кода: //registry.npmjs.org/:_authToken=${NPM_TOKEN} (Удалите этот код)

Третье возможное решение
Худший вариант развития событий:

nano ~/.bash_aliases или nano ~/.bash_profile
добавить export NPM_TOKEN = "XXXXX-XXXXX-XXXXX-XXXXX"
CTRL + X для выхода
Y, чтобы сохранить
 10.12.2018 22:41
Если вы впервые установили свой ~ / .profile (OSX, Ubuntu) и добавили эту строку: export NPM_TOKEN = "XXXXX-XXXXX-XXXXX-XXXXX". Затем вы должны ввести эту строку в терминал после этого:

source ~/.profile
 31.01.2019 15:03
Собственно правильное решение
Обновите конфигурацию развертывания CI:

npm config set '//registry.npmjs.org/:_authToken' "${NPM_TOKEN}"
npm publish
Удалите эту строку из файла .npmrc:

//registry.npmjs.org/:_authToken=${NPM_TOKEN}
Пример конфигурации сборки
Вы можете увидеть это решение на практике в одном из моих репозиториев GitHub: https://github.com/Jezorko/lambda-simulator/blob/master/.travis.yml

Зашифрованная переменная среды - это токен NPM.

Почему другие «решения» - это просто обходные пути
Я видел ответы здесь и в разделе этот вопрос, которые рекомендуют просто полностью удалить строку настройки переменной или файл .npmrc.

Дело в том, что файл .npmrc не может игнорироваться вашей системой VCS, и его изменение может привести к случайным отправкам в репозиторий вашего проекта. Кроме того, файл может содержать другие важные настройки.

Проблема здесь в том, что .npmrc не допускает использования значений по умолчанию при настройке переменных среды. Например, если бы был разрешен следующий синтаксис, проблема не существовала бы:

//registry.npmjs.org/:_authToken=${NPM_TOKEN:-undefined}

 10.04.2019 12:45
У меня есть простое решение этой проблемы. После того, как вы установили свой NPM_TOKEN глобально в своей среде, замените

//registry.npmjs.org/:_authToken=${NPM_TOKEN}
с

//registry.npmjs.org/:_authToken=$NPM_TOKEN
У меня это хорошо сработало на macOS Catalina.

 20.01.2020 07:34
Моей проблемой было запустить npm install в IDE (например, WebStorm). Я добавил переменную среды NPM_TOKEN в .bash_profile и перезапустил свой Терминал, но не свою IDE! IDE не улавливала изменения в среде, пока я тоже не перезапустил ее.

 08.04.2020 18:48
Следующее сработало для меня. Я должен был разместить

export NVM_DIR = "$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
ПОСЛЕ строки, в которой я указываю

export NPM_TOKEN='mytoken'
 29.12.2020 21:43
В моем случае перемещение экспорта токена внутри моего .zsh (или .bash_profile) в начало файла устранило проблему, потому что раньше он был инициализирован слишком поздно.

 03.01.2021 22:43
В моем случае я просто добавляю экспорт NPM_TOKEN в ~ / .bashrc export NPM_TOKEN = 60 ______- 69 __- 44 __- be __- 2f__________ Это для bash Ubuntu 20.04

 31.01.2021 15:08
https://www.runoob.com/linux/linux-shell-variable.html заменять

'//registry.npmjs.org/:_authToken=${NPM_TOKEN}'
с

'//registry.npmjs.org/:_authToken='${NPM_TOKEN}
 20.02.2021 09:44
У меня также возникает эта проблема, но я нахожу решение, когда нажимаю свое репо на Heroku, поэтому я замечаю, что Heroku запускает команду response-script start или build

//registry.npmjs.org/:_authToken=${NPM_TOKEN}
поэтому этот синтаксис не выдает ошибки, но когда я использую тот же синтаксис в своей системе и запускаю команду, которую он мне дает. Потому что обычно, когда мы запускаем нашу систему, мы используем cmd npm или yarn, но если вы используете response-script, он не выдаст ошибку

 07.06.2021 14:58
У меня возникла эта проблема при попытке настроить задание CI / CD в Gitlab. В конце концов я обнаружил, что ошибка была вызвана тем, что переменная, которая вызывала ошибку, была установлена ​​в защищенную переменную.

Я изменил его в разделе «Настройки»> «CI / CD»> «Переменные».

 08.06.2021 15:43
Другие вопросы по теме
Meteor js, React custom image redirect / meteor WebApp
ReactJs -> Автозаполнение текстового поля с использованием .NET framework
React - отображение через массив изображений
Webpack 4 basic React js hello world завершается с ошибкой «Ошибка синтаксического анализа модуля: неожиданный токен»
Ошибка при сопоставлении массива объектов в приложении React
ReactJS / Javascript: функция карты и JSON
Как редукторы обновляют магазин
Как избежать сложных иерархий в индексе reactjs
Обновление магазина перед пользовательским маршрутом
Путь прохождения React.js в качестве реквизита
Похожие вопросы
Сортировка Mongodb без учета регистра
NodeJS пересылка клиентских SSL-сертификатов
Почему мое приложение прослушивает порт 80 вместо порта 3000, когда я устанавливаю его для работы внутри контейнера докеров?
Невозможно использовать сокет io в героку
Как заменить скобки в строке с помощью регулярного выражения в node js?
Mongodb находит записи, которых нет на определенную дату
SyntaxError: Неожиданный токен - в JSON в позиции 0, при загрузке файлов PDF в почтальоне
Как упаковать миграции knex в модуль?
Заголовок Access-Control-Allow-Origin 'содержит несколько значений с веб-узлами в узле
Express JS не выполняет удаление
Разделы
Блог

Вопросы

Теги

О сайте

Контакты
info@reddeveloper.ru
Правовая информация
Политика конфиденциальности

Пользовательское соглашение


Находите ответы на сложные технические вопросы по программированию, с которыми сталкиваются инженеры по всему миру в своей ежедневной практике на сайте RedDeveloper.

© 2026 «RedDeveloper.ru»

		RedDeveloper
Блог
Вопросы
Теги
Поиск...
Пустая страница после успешного развертывания Firebase
Вопросы
REACTJS
Пустая страница после успешного развертывания Firebase
Мое приложение ReactJs отлично работает на моем локальном компьютере, когда я использую команду npm start. Однако, когда я пытаюсь развернуть свое приложение с помощью firebase init в Firebase, я вижу пустую страницу. Что я делаю не так?

Обновлять: мне пришлось отредактировать файл Firebase.json, чтобы удалить

"predeploy": ["npm --prefix \"$RESOURCE_DIR\" run lint"],
line, поскольку я получал связанные с этим ошибки.

Firebase.json:

{
  "database": {
    "rules": "database.rules.json"
  },
  "firestore": {
    "rules": "firestore.rules",
    "indexes": "firestore.indexes.json"
  },
  "functions": {
    "source": "functions"
  },
  "hosting": {
    "public": "public",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  },
  "storage": {
    "rules": "storage.rules"
  }
}
Выходные данные команды развертывания Firebase:

=== Deploying to 'socialmedia-5ec0a'...

i  deploying database, storage, firestore, functions, hosting
i  database: checking rules syntax...
+  database: rules syntax for database socialmedia-5ec0a is valid
i  storage: checking storage.rules for compilation errors...
+  storage: rules file storage.rules compiled successfully
i  firestore: checking firestore.rules for compilation errors...
+  firestore: rules file firestore.rules compiled successfully
i  functions: ensuring necessary APIs are enabled...
+  functions: all necessary APIs are enabled
i  storage: uploading rules storage.rules...
i  firestore: uploading rules firestore.rules...
i  functions: preparing functions directory for uploading...
i  hosting[socialmedia-5ec0a]: beginning deploy...
i  hosting[socialmedia-5ec0a]: found 5 files in public
+  hosting[socialmedia-5ec0a]: file upload complete
i  database: releasing rules...
+  database: rules for database socialmedia-5ec0a released successfully
+  storage: released rules storage.rules to firebase.storage/socialmedia-5ec0a.appspot.com
+  firestore: released rules firestore.rules to cloud.firestore
i  hosting[socialmedia-5ec0a]: finalizing version...
+  hosting[socialmedia-5ec0a]: version finalized
i  hosting[socialmedia-5ec0a]: releasing new version...
+  hosting[socialmedia-5ec0a]: release complete

+  Deploy complete!

Project Console: https://console.firebase.google.com/project/socialmedia-5ec0a/overview
Hosting URL: https://socialmedia-5ec0a.firebaseapp.com
Выход Chrome F12:Пустая страница после успешного развертывания Firebase

 05.09.2018 06:45
24
2
16 488
12
Данный вопрос помечен как решенный
 Ответы 12
Взгляните на свойство public вашего package.json

"public": "public",
Он указывает на папку ресурсов, в которой хостинг firebase будет искать ваше приложение. Если папка ресурсов пуста, вам будет представлена ​​пустая страница.

Когда вы создаете свое приложение для реагирования, все файлы по умолчанию попадают в папку build, если вы не указали иное. Поэтому установите общедоступное свойство в папку сборки responsejs.

 05.09.2018 07:57
 Ответ принят как подходящий
У меня была такая же проблема. http: // локальный: 3000 / хорошо обслуживал приложение, но когда я развернул его с помощью npm run build, а затем firebase deploy, я увидел пустую страницу.

Я не уверен, почему, но я изменил свойство public в файле firebase.json на build, и это сработало.

вот мой новый документ firebase.json.

{
  "hosting": {
    "public": "build",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}
 05.09.2018 15:39
Еще одна вещь, которую вы также можете проверить, не работает ли изменение файла firebase.json.

в инструментах разработчика Chrome перейдите на Application->Clear Storage
нажмите на clean site data
затем refresh приложение.
В некоторых случаях это работает.

 16.10.2018 11:29
После того, как вы инициализировали приложение Firebase с помощью firebase init, у вас должен быть файл firebase.json в папке вашего проекта. Дело в том, что открытый ключ должен указывать на вашу папку сборки. Например, в приложении create-response-app папка сборки - строить/ после первого запуска npm запустить сборку. Тогда firebase.json должен выглядеть примерно так:

{
  "hosting": {
    "public": "build",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}
Открытые ключевые точки для построения. Затем попробуйте другое развертывание с firebase deploy.

 03.12.2018 02:58
Убедитесь, что свойство homepage не задано внутри package.json. У меня это было, потому что я сначала развертывал на страницах Github. Снял, перестроил, развернул и заработал.

 22.02.2019 20:23
Если изменение свойства 'public' в firebase.json не работает, сначала выясните, в какой папке находится ваш файл index.html, убедитесь, что это index.html, который вы написали, потому что firebase может поместить фиктивный index.html в основной папке и переместите ваш index.html в папку «build», в ней также может быть другая папка с именем вашего приложения внутри папки «build». Затем вам нужно изменить свойство public в файле firebase.json на имя этой папки, например:

     {
      "hosting": {
        "public": "my-app",
        "ignore": [
          "firebase.json",
          "**/.*",
          "**/node_modules/**"
        ],
        "rewrites": [
          {
            "source": "**",
            "destination": "/index.html"
          }
        ]
      }
    }
 04.04.2019 00:19
100% рабочий пример.

Решенная ошибка пустой страницы в хостинге приложений React в Firebase.

Нашел решение в этом блог

Разместите свое веб-приложение на React за несколько минут.

Неправильная последовательность =>

firebase login

firbase init

firebase deploy

npm run build

Правильная последовательность =>

firebase login

firbase init

npm run build

firebase deploy

 24.05.2019 12:48
У меня была такая же проблема. Но после того, как папка сборки была указана на. . . Я все еще видел пустой хост. В этом случае вы можете скопировать папку сборки, содержащую код инициализации firebase, и вставить ее в общую папку. Убедитесь, что вы добавили свой <div id=root> </div> в раздел body, а затем снова npm run build. Также убедитесь, что ваш firebase.json указывает на сборку, как упоминалось в предыдущих сообщениях.

 05.02.2020 02:03
использовать сборку для сборки

{
  "hosting": {
    "build": "build",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}
 27.11.2020 07:52
удалить папку .firebase
удалите папку сборки и создайте ее снова с помощью "npm run build"
Затем снова инициализируйте свое приложение с помощью "firebase init".
Что вы хотите использовать в качестве общедоступного каталога? build // public напрямую должен быть построен
Настроить как одностраничное приложение (переписать все URL-адреса в /index.html)? Да // правила перезаписи да
Настроить автоматическую сборку и развертывание с помощью GitHub? (y / N) n // автоматическая сборка нет
Файл build / index.html уже существует. Перезаписать? (y / N) n // не следует переписывать самую важную часть index.html
firebase deploy // все готово.
 05.02.2021 09:20
Просто удалите ключ homepage из файла package.json, если вы также развернули его на GitHub. У меня это сработало, надеюсь, и у вас тоже.

 09.06.2021 15:49
Я обнаружил, что хостингу firebase требуется некоторое время для запуска всего вашего сайта. Для меня загрузка первый раз занимает около 30 минут. Последующие обновления должны загружаться мгновенно.

Если вы заметили в инструментах разработчика инспектора, что активна только html-страница, а не остальная часть страницы, то это может быть решением.

Так что мой совет - наберитесь терпения и выпейте чашку кофе :)

 24.07.2021 02:17
Другие вопросы по теме
Правила безопасности Firestore Несколько get () не работают должным образом
Как заставить функции Firebase действовать как пользователь, а не как администратор?
Интеграция с mailchimp в React Native Application
Изменить аккаунт Firebase Cloud Message
Можно ли ограничить пользователей проекта firebase для редактирования только определенных документов и коллекций с консоли?
Разница в производительности Firestore через функции Firebase и Firestore SDK
Обновление базы данных Firebase обновляет неправильные записи в дополнение к правильной записи
Firebase toDate () использует CEST вместо localTime
Получать значения из ключей с тем же именем android firebase
Все данные, кроме изображения, отображаемого из fireBase
Похожие вопросы
Meteor Reactjs Сова Карусель
Reactjs - Вызов пользовательской функции для замены символов по мере ввода пользователем
Объекты недопустимы как реакция дочерней ошибки. Найден объект с ключами ()
Метод Mongoose populate () не возвращает данные из базы данных
Обновить значение в дочернем узле в состоянии
Обновить календарь при создании нового события в react js
Самый эффективный способ отрисовки JSX-элементов при итерации массива данных в React
React Router dom не маршрутизирует
Странный синтаксис JS, что это значит?
Проблема с условным рендерингом в React Native с использованием значения falsey
Разделы
Блог

Вопросы

Теги

О сайте

Контакты
info@reddeveloper.ru
Правовая информация
Политика конфиденциальности

Пользовательское соглашение


Находите ответы на сложные технические вопросы по программированию, с которыми сталкиваются инженеры по всему миру в своей ежедневной практике на сайте RedDeveloper.

© 2026 «RedDeveloper.ru»

		RedDeveloper
Блог
Вопросы
Теги
Поиск...
Пустая страница после успешного развертывания Firebase
Вопросы
REACTJS
Пустая страница после успешного развертывания Firebase
Мое приложение ReactJs отлично работает на моем локальном компьютере, когда я использую команду npm start. Однако, когда я пытаюсь развернуть свое приложение с помощью firebase init в Firebase, я вижу пустую страницу. Что я делаю не так?

Обновлять: мне пришлось отредактировать файл Firebase.json, чтобы удалить

"predeploy": ["npm --prefix \"$RESOURCE_DIR\" run lint"],
line, поскольку я получал связанные с этим ошибки.

Firebase.json:

{
  "database": {
    "rules": "database.rules.json"
  },
  "firestore": {
    "rules": "firestore.rules",
    "indexes": "firestore.indexes.json"
  },
  "functions": {
    "source": "functions"
  },
  "hosting": {
    "public": "public",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  },
  "storage": {
    "rules": "storage.rules"
  }
}
Выходные данные команды развертывания Firebase:

=== Deploying to 'socialmedia-5ec0a'...

i  deploying database, storage, firestore, functions, hosting
i  database: checking rules syntax...
+  database: rules syntax for database socialmedia-5ec0a is valid
i  storage: checking storage.rules for compilation errors...
+  storage: rules file storage.rules compiled successfully
i  firestore: checking firestore.rules for compilation errors...
+  firestore: rules file firestore.rules compiled successfully
i  functions: ensuring necessary APIs are enabled...
+  functions: all necessary APIs are enabled
i  storage: uploading rules storage.rules...
i  firestore: uploading rules firestore.rules...
i  functions: preparing functions directory for uploading...
i  hosting[socialmedia-5ec0a]: beginning deploy...
i  hosting[socialmedia-5ec0a]: found 5 files in public
+  hosting[socialmedia-5ec0a]: file upload complete
i  database: releasing rules...
+  database: rules for database socialmedia-5ec0a released successfully
+  storage: released rules storage.rules to firebase.storage/socialmedia-5ec0a.appspot.com
+  firestore: released rules firestore.rules to cloud.firestore
i  hosting[socialmedia-5ec0a]: finalizing version...
+  hosting[socialmedia-5ec0a]: version finalized
i  hosting[socialmedia-5ec0a]: releasing new version...
+  hosting[socialmedia-5ec0a]: release complete

+  Deploy complete!

Project Console: https://console.firebase.google.com/project/socialmedia-5ec0a/overview
Hosting URL: https://socialmedia-5ec0a.firebaseapp.com
Выход Chrome F12:Пустая страница после успешного развертывания Firebase

 05.09.2018 06:45
24
2
16 488
12
Данный вопрос помечен как решенный
 Ответы 12
Взгляните на свойство public вашего package.json

"public": "public",
Он указывает на папку ресурсов, в которой хостинг firebase будет искать ваше приложение. Если папка ресурсов пуста, вам будет представлена ​​пустая страница.

Когда вы создаете свое приложение для реагирования, все файлы по умолчанию попадают в папку build, если вы не указали иное. Поэтому установите общедоступное свойство в папку сборки responsejs.

 05.09.2018 07:57
 Ответ принят как подходящий
У меня была такая же проблема. http: // локальный: 3000 / хорошо обслуживал приложение, но когда я развернул его с помощью npm run build, а затем firebase deploy, я увидел пустую страницу.

Я не уверен, почему, но я изменил свойство public в файле firebase.json на build, и это сработало.

вот мой новый документ firebase.json.

{
  "hosting": {
    "public": "build",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}
 05.09.2018 15:39
Еще одна вещь, которую вы также можете проверить, не работает ли изменение файла firebase.json.

в инструментах разработчика Chrome перейдите на Application->Clear Storage
нажмите на clean site data
затем refresh приложение.
В некоторых случаях это работает.

 16.10.2018 11:29
После того, как вы инициализировали приложение Firebase с помощью firebase init, у вас должен быть файл firebase.json в папке вашего проекта. Дело в том, что открытый ключ должен указывать на вашу папку сборки. Например, в приложении create-response-app папка сборки - строить/ после первого запуска npm запустить сборку. Тогда firebase.json должен выглядеть примерно так:

{
  "hosting": {
    "public": "build",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}
Открытые ключевые точки для построения. Затем попробуйте другое развертывание с firebase deploy.

 03.12.2018 02:58
Убедитесь, что свойство homepage не задано внутри package.json. У меня это было, потому что я сначала развертывал на страницах Github. Снял, перестроил, развернул и заработал.

 22.02.2019 20:23
Если изменение свойства 'public' в firebase.json не работает, сначала выясните, в какой папке находится ваш файл index.html, убедитесь, что это index.html, который вы написали, потому что firebase может поместить фиктивный index.html в основной папке и переместите ваш index.html в папку «build», в ней также может быть другая папка с именем вашего приложения внутри папки «build». Затем вам нужно изменить свойство public в файле firebase.json на имя этой папки, например:

     {
      "hosting": {
        "public": "my-app",
        "ignore": [
          "firebase.json",
          "**/.*",
          "**/node_modules/**"
        ],
        "rewrites": [
          {
            "source": "**",
            "destination": "/index.html"
          }
        ]
      }
    }
 04.04.2019 00:19
100% рабочий пример.

Решенная ошибка пустой страницы в хостинге приложений React в Firebase.

Нашел решение в этом блог

Разместите свое веб-приложение на React за несколько минут.

Неправильная последовательность =>

firebase login

firbase init

firebase deploy

npm run build

Правильная последовательность =>

firebase login

firbase init

npm run build

firebase deploy

 24.05.2019 12:48
У меня была такая же проблема. Но после того, как папка сборки была указана на. . . Я все еще видел пустой хост. В этом случае вы можете скопировать папку сборки, содержащую код инициализации firebase, и вставить ее в общую папку. Убедитесь, что вы добавили свой <div id=root> </div> в раздел body, а затем снова npm run build. Также убедитесь, что ваш firebase.json указывает на сборку, как упоминалось в предыдущих сообщениях.

 05.02.2020 02:03
использовать сборку для сборки

{
  "hosting": {
    "build": "build",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}
 27.11.2020 07:52
удалить папку .firebase
удалите папку сборки и создайте ее снова с помощью "npm run build"
Затем снова инициализируйте свое приложение с помощью "firebase init".
Что вы хотите использовать в качестве общедоступного каталога? build // public напрямую должен быть построен
Настроить как одностраничное приложение (переписать все URL-адреса в /index.html)? Да // правила перезаписи да
Настроить автоматическую сборку и развертывание с помощью GitHub? (y / N) n // автоматическая сборка нет
Файл build / index.html уже существует. Перезаписать? (y / N) n // не следует переписывать самую важную часть index.html
firebase deploy // все готово.
 05.02.2021 09:20
Просто удалите ключ homepage из файла package.json, если вы также развернули его на GitHub. У меня это сработало, надеюсь, и у вас тоже.

 09.06.2021 15:49
Я обнаружил, что хостингу firebase требуется некоторое время для запуска всего вашего сайта. Для меня загрузка первый раз занимает около 30 минут. Последующие обновления должны загружаться мгновенно.

Если вы заметили в инструментах разработчика инспектора, что активна только html-страница, а не остальная часть страницы, то это может быть решением.

Так что мой совет - наберитесь терпения и выпейте чашку кофе :)

 24.07.2021 02:17
Другие вопросы по теме
Правила безопасности Firestore Несколько get () не работают должным образом
Как заставить функции Firebase действовать как пользователь, а не как администратор?
Интеграция с mailchimp в React Native Application
Изменить аккаунт Firebase Cloud Message
Можно ли ограничить пользователей проекта firebase для редактирования только определенных документов и коллекций с консоли?
Разница в производительности Firestore через функции Firebase и Firestore SDK
Обновление базы данных Firebase обновляет неправильные записи в дополнение к правильной записи
Firebase toDate () использует CEST вместо localTime
Получать значения из ключей с тем же именем android firebase
Все данные, кроме изображения, отображаемого из fireBase
Похожие вопросы
Meteor Reactjs Сова Карусель
Reactjs - Вызов пользовательской функции для замены символов по мере ввода пользователем
Объекты недопустимы как реакция дочерней ошибки. Найден объект с ключами ()
Метод Mongoose populate () не возвращает данные из базы данных
Обновить значение в дочернем узле в состоянии
Обновить календарь при создании нового события в react js
Самый эффективный способ отрисовки JSX-элементов при итерации массива данных в React
React Router dom не маршрутизирует
Странный синтаксис JS, что это значит?
Проблема с условным рендерингом в React Native с использованием значения falsey
Разделы
Блог

Вопросы

Теги

О сайте

Контакты
info@reddeveloper.ru
Правовая информация
Политика конфиденциальности

Пользовательское соглашение


Находите ответы на сложные технические вопросы по программированию, с которыми сталкиваются инженеры по всему миру в своей ежедневной практике на сайте RedDeveloper.

© 2026 «RedDeveloper.ru»

		RedDeveloper
Блог
Вопросы
Теги
Поиск...
Не удается импортировать SVG в Next.js
Вопросы
REACTJS
Не удается импортировать SVG в Next.js
Когда я пытаюсь импортировать изображение SVG, появляется следующая ошибка. Какой загрузчик я должен использовать для импорта изображений SVG?

./static/Rolling-1s-200px.svg 1:0
Module parse failed: Unexpected token (1:0)
You may need an appropriate loader to handle this file type.
> <svg xmlns = "http://www.w3.org/2000/svg" viewBox = "0 0 2000 2000"><filter id = "b"><feGaussianBlur stdDeviation = "12" /></filter><path fill = "#817c70" d = "M0 0h2000v2000H0z"/><g filter = "url(#b)" transform = "translate(4 4) scale(7.8125)" fill-opacity = ".5"><ellipse fill = "#000210" rx = "1" ry = "1" transform = "matrix(50.41098 -3.7951 11.14787 148.07886 107 194.6)"/><ellipse fill = "#eee3bb" rx = "1" ry = "1" transform = "matrix(-56.38179 17.684 -24.48514 -78.06584 205 110.1)"/><ellipse fill = "#fff4bd" rx = "1" ry = "1" transform = "matrix(35.40604 -5.49219 14.85017 95.73337 16.4 123.6)"/><ellipse fill = "#79c7db" cx = "21" cy = "39" rx = "65" ry = "65"/><ellipse fill = "#0c1320" cx = "117" cy = "38" rx = "34" ry = "47"/><ellipse fill = "#5cb0cd" rx = "1" ry = "1" transform = "matrix(-39.46201 77.24476 -54.56092 -27.87353 219.2 7.9)"/><path fill = "#e57339" d = "M271 159l-123-16 43 128z"/><ellipse fill = "#47332f" cx = "214" cy = "237" rx = "242" ry = "19"/></g></svg>
 15.03.2019 05:13
59
2
85 733
12
Данный вопрос помечен как решенный
 Ответы 12
 Ответ принят как подходящий
Вам нужно предоставить загрузчик веб-пакетов, который будет обрабатывать импорт SVG, один из известных — СВГР.

Чтобы настроить его для работы со следующим, вам нужно добавить в свой файл next.config.js использование загрузчика, например:

// next.config.js
    
module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        test: /\.(js|ts)x?$/,
       // for webpack 5 use
       // { and: [/\.(js|ts)x?$/] }
      },
      
      use: ['@svgr/webpack'],
    });

    return config;
  },
};
Для получения дополнительной информации о конфигурации проверить документы.

Не забывайте, чтобы сначала установить @svgr/webpack:

$ npm install --save-dev @svgr/webpack
Редактировать

Я добавил раздел issuer, который ограничивает эти svg как компоненты только для svg, импортированных из файлов js / ts. Это позволяет настроить другое поведение для svg, которые импортируются из других типов файлов (например, .css).

 15.03.2019 11:17
Установите следующие изображения.

yarn add -D next-images
Создайте next.config.js в своем проекте.

// next.config.js
const withImages = require('next-images')
module.exports = withImages()
 22.06.2019 18:56
Это сработало для меня без какой-либо другой зависимости

// In next.config.js

module.exports = {
    webpack (config, options) {
        config.module.rules.push({
            test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
            use: {
                loader: 'url-loader',
                options: {
                    limit: 100000
                }
            }
        });
        return config;
    }
};
 05.08.2019 07:35
Вы можете использовать Babel-плагин-встроенный-реагировать-SVG

import React from 'react';
import CloseSVG from './close.svg';

const MyComponent = () => <CloseSVG />;
npm install --save-dev babel-plugin-inline-react-svg
// .babelrc
{
  "plugins": [
    "inline-react-svg"
  ]
}
Или смотрите ссылку для получения дополнительных инструкций.

 28.01.2020 18:15
Лично я предпочитаю плагин следующий-реагировать-SVG, который позволяет обрабатывать изображения SVG как компоненты React и автоматически встраивать их, подобно тому, как это делает приложение Create React.

Вот как это использовать:

Установить next-react-svg:
npm i next-react-svg
Добавьте необходимые настройки в next.config.js:
const withReactSvg = require('next-react-svg')
const path = require('path')

module.exports = withReactSvg({
  include: path.resolve(__dirname, 'src/assets/svg'),
  webpack(config, options) {
    return config
  }
})
Параметр include является обязательным и указывает на папку с изображениями SVG.

Если у вас уже есть какие-либо подключаемые модули для вашего Next.js, рассмотрите возможность использования следующий компоновщик-плагины для их правильного объединения.

Импортируйте свои SVG как обычные компоненты React:
import Logo from 'assets/svg/Logo.svg';

export default () => (
  <Logo />
);
Вот и все. Отныне Next.js будет включать изображения SVG, импортированные таким образом, в отображаемую разметку в виде тегов SVG.

 17.05.2020 17:49
Вы можете просто импортировать его через тег <img>.

<img src='./next.svg' alt='next' />
Просто убедитесь, что svg находится в общей папке.

 28.08.2020 05:09
Вы можете использовать next-plugin-svgr и next-compose-plugins для очистки плагинов (если они у вас есть):

// next.config.js
const withPlugins = require("next-compose-plugins");
const withSvgr = require("next-svgr");
 
module.exports = withPlugins([
  withSvgr
  // your other plugins here
]);
или просто next-plugin-svgr:

// next.config.js
const withSvgr = require('next-plugin-svgr');
 
module.exports = withSvgr({
  webpack(config, options) {
    return config;
  },
});
Источник: https://www.npmjs.com/package/next-plugin-svgr

 29.04.2021 22:34
Быстрый способ: <img> или <Image>
Не подходит для интерактивных SVG или если вы собираетесь манипулировать SVG с помощью внешнего CSS/JS.

Можно использовать официальный компонент next/image или тег img (как указано в этом отвечать).

Вам просто нужно переместить файл svg в public вместо static и сделать что-то вроде этого:

import Image from 'next/image';

// ...

<Image src = "/Rolling-1s-200px.svg" width = "2000" height = "2000" />
Но при использовании этого метода содержимое файла svg не будет присутствовать непосредственно в ответе; браузер получит тег <img src = "..." ...></img>.

Также нужно указать width и height, но можно посчитать из атрибута viewbox.

В Next.js v11 и выше вы также можете:

import Image from 'next/image';

import Illustration from '../static/Rolling-1s-200px.svg';

// ...

<Image src = {Illustration} />

// one needs to use `Illustration.src` to get the source URL
// <img src = {Illustration.src} ... />
Включение SVG внутри HTML (для webpack-5, TS)
принятый ответ показал, как это сделать с помощью webpack-4, но поскольку webpack-5 теперь используется по умолчанию, я делюсь соответствующей конфигурацией. Вы можете использовать его после установки @svgr/webpack (yarn add -D @svgr/webpack или npm install @svgr/webpack --save-dev):

// next.config.js
// https://github.com/gregberge/svgr/issues/551#issuecomment-839772396

module.exports = {
  // other configs...

  // future: { webpack5: true }, // -- not needed since Next.js v11.0.0
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: { and: [/\.(js|ts|md)x?$/] },
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            prettier: false,
            svgo: true,
            svgoConfig: { plugins: [{ removeViewBox: false }] },
            titleProp: true,
          },
        },
      ],
    });
    return config;
  },
};
Если вы не используете options для загрузчика, вы можете просто написать это:

use: ['@svgr/webpack']
Если вы используете v6 of @svgr/webpack, вам нужно указать конфигурацию SVGO следующим образом:

// ...

plugins: [
  {
    name: 'preset-default',
    params: {
      overrides: { removeViewBox: false },
    },
  },
],

// ...
Если вы используете машинописный текст, вам необходимо определить соответствующие модули (в каталоге, откуда вы импортируете svg, или, возможно, добавить его в корень как <some-name>.d.ts и включить его tsconfig):

// index.d.ts

declare module '*.svg' {
  const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  export default ReactComponent;
}
Затем вы можете использовать его как:

import Illustration from '../static/Rolling-1s-200px.svg';

// ...

<Illustration />
Примечание: Next.js v11.0.1+ объявили SVG как модули, экспортирующие any. Ваша пользовательская конфигурация не будет переопределять типы, установленные next-env.d.ts, если вы не исключите последний. См. это.

[УСТАРЕЛО (Фиксированный)] ОБНОВИТЬ :

Если вы используете Next.js v11.0.0, вы можете получать ошибки при импорте SVG. Пожалуйста, обновите до v11.0.1 или выше. Воспользуйтесь обходным решением, упомянутым в этот комментарий.

 21.05.2021 19:21
Как импортировать SVG в компонент Next.js?

Другое решение без установки какой-либо библиотеки

import React from "react";
export default function GoogleLogo() {
  return (
    <svg className = "svgIcon-use" width = "25" height = "37" viewBox = "0 0 25 25">
      <g fill = "none" fillRule = "evenodd">
        <path
          d = "M20.66 12.693c0-.603-.054-1.182-.155-1.738H12.5v3.287h4.575a3.91 3.91 0 0 1-1.697 2.566v2.133h2.747c1.608-1.48 2.535-3.65 2.535-6.24z"
          fill = "#4285F4"
        />
        <path
          d = "M12.5 21c2.295 0 4.22-.76 5.625-2.06l-2.747-2.132c-.76.51-1.734.81-2.878.81-2.214 0-4.088-1.494-4.756-3.503h-2.84v2.202A8.498 8.498 0 0 0 12.5 21z"
          fill = "#34A853"
        />
        <path
          d = "M7.744 14.115c-.17-.51-.267-1.055-.267-1.615s.097-1.105.267-1.615V8.683h-2.84A8.488 8.488 0 0 0 4 12.5c0 1.372.328 2.67.904 3.817l2.84-2.202z"
          fill = "#FBBC05"
        />
        <path
          d = "M12.5 7.38c1.248 0 2.368.43 3.25 1.272l2.437-2.438C16.715 4.842 14.79 4 12.5 4a8.497 8.497 0 0 0-7.596 4.683l2.84 2.202c.668-2.01 2.542-3.504 4.756-3.504z"
          fill = "#EA4335"
        />
      </g>
    </svg>
  );
}
и используйте:

import GoogleLogo from "./GoogleLogo";

  class Login extends React.Component {
    render() {
      return (
        <LoginLayout title = "Login Page">
          <div>
            <Link href = "/auth/google">
              <a className = "button">
                <div>
                  <span className = "svgIcon t-popup-svg">
                    <GoogleLogo />
                  </span>

                </div>
              </a>
            </Link>
          </div>
        </LoginLayout>
      );
    }
  }
 22.05.2021 12:37
Я попробовал первый ответ, но получил ошибку, так что это работает:

module.exports = {
webpack(config) {
  config.module.rules.push({
    test: /\.svg$/,
    use: ["@svgr/webpack"]
  });

  return config;
}};
 12.08.2021 21:06
С Next.js 12.0.9 и Webpack 5 это работает для меня:

yarn add --dev url-loader @svgr/webpack
// next.config.js
module.exports = {
    webpack(config, options) {
        config.module.rules.push({
          test: /\.svg$/,
          use: ['@svgr/webpack', 'url-loader'],
        });
    
        return config;
    },
  };

 02.02.2022 20:24
Если вы хотите использовать файлы SVG в своем коде БЕЗ КОНФИГУРАЦИИ ИЛИ УСТАНОВКИ ЗАВИСИМОСТИ и иметь полный контроль в атрибутах тега, лучшим решением будет преобразование файла SVG в компоненты JSX или TSX.

JSX-решение:

export const YourSVg = ({color, width, height}) => (
   <svg fill = {color} height = {height} width = {width}>
    ..rest of the svg tags...
   </svg>
)
TSX-решение:

   export const YourSVg:React.FC<{color:string, width:string, height:string}> =
       ({color, width, height}) => (
          <svg color = {color} height = {height} width = {width}>
            ..rest of the svg tags...
          </svg>
    )
Как это использовать?

может импортировать его как обычный компонент и использовать так же, как и раньше

например:

import YourSVg from '../from the path/path


<YourSVg color='red' width='10px' height='10px/>
 10.02.2022 07:25
Другие вопросы по теме
Webpack: коммитится ли webpack.config.js?
Чтение process.env во время выполнения веб-пакета
Библиотека Angular не может включать в комплект сторонние библиотеки
Есть ли причина использовать файловый загрузчик при использовании URL-загрузчика с опцией ограничения?
MQTT.js и Webpack — «WS не конструктор»
Почему загрузка фрагментов веб-пакета игнорируется портом devServer?
Инкапсулированный css с Angular 7 + Webpack 4
HtmlWebpackPlugin - вставить js в тело в определенном месте
Можно ли настроить реагирующую сборку (сборка веб-пакета)?
Как импортировать XML с помощью загрузчика Webpack БЕЗ автоматического преобразования в JSON
Похожие вопросы
ReactJS - Реквизит не был передан компоненту
Диаграмма Google не отображается должным образом - React JS
Реквизиты из Stateful-компонента, вызывающего Функциональный компонент, изменяет тип
Как отобразить список пользователей из ReqRes API с помощью React
Вопрос о потоке при обработке HOC с помощью React.Abstract<Config, Instance>
Почему я получаю сообщение об ошибке, которое не определено?
Дождитесь обновления состояния при использовании хуков
Правильный способ вызова реквизита в React
Могу ли я сохранить компонент реакции на состояние? так что я могу загрузить его динамически
Один запрос для всех данных?
Разделы
Блог

Вопросы

Теги

О сайте

Контакты
info@reddeveloper.ru
Правовая информация
Политика конфиденциальности

Пользовательское соглашение


Находите ответы на сложные технические вопросы по программированию, с которыми сталкиваются инженеры по всему миру в своей ежедневной практике на сайте RedDeveloper.

© 2026 «RedDeveloper.ru»

		RedDeveloper
Блог
Вопросы
Теги
Поиск...
Как исправить белый экран после сборки с помощью приложения create-реагировать?
Вопросы
REACTJS
Как исправить белый экран после сборки с помощью приложения create-реагировать?
Я использовал react-router-dom и создаю свое приложение для реагирования. Когда я развертываю его на сервере, я получаю пустую страницу, а консоль пуста.

Мой App.js:

import React, { Component } from 'react';
import { Route, Switch, BrowserRouter} from 'react-router-dom';
import Agenda from './components/Agenda/Agenda';
import Planning from './components/Planning/Planning';
class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter  basename = "/">
          <Switch>
            <Route exact path = "/"  component = {Agenda} />
            <Route path = "/planning" component = {Planning} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
Мой index.js:

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
        <App/>
, document.getElementById('root'));
Мой index.html:

<!DOCTYPE html>
<html lang = "en">
  <head>
    <meta charset = "utf-8" />
    <link rel = "shortcut icon"  href = "favicon.ico">
    <meta
      name = "viewport"
      content = "width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    <meta name = "theme-color" content = "#000000" />
     <link rel = "stylesheet" href = "https://cdnjs.cloudflare.com/ajax/libs/material-design-iconic-font/2.2.0/css/material-design-iconic-font.min.css">
     <link href = "https://fonts.googleapis.com/css?family=Titillium+Web:300,400,700" rel = "stylesheet"> 
     <link rel = "stylesheet" href = "//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"/>
     <link rel = "manifest" href = "manifest.json">
     <link rel = "data" href = "data.json">
     <script src = "https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity = "sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin = "anonymous"></script>
    <title>Test</title>
  </head>
  <body>
    <div id = "root"></div>
    <script src = "https://unpkg.com/react@16.0.0/umd/react.production.min.js"></script>
  </body>
</html>
В моем package.json у меня есть:

"homepage": "."
И когда я меняю homepage на https://dev.test.com/Reactи когда я запускаю его, я получаю пустую страницу, например адрес, который я развернул: https://dev.test.com/React/ Он не является общедоступным. Когда я запускаю serve-s build, я получаю пустой экран на консоли, я получаю:

Как исправить белый экран после сборки с помощью приложения create-реагировать?

Мой index.html на производстве:

<!doctype html>
<html lang = "en">
    <head>
        <meta charset = "utf-8"/>
        <link rel = "shortcut icon" href = "favicon.ico">
        <meta name = "viewport" content = "width=device-width,initial-scale=1,shrink-to-fit=no"/>
        <meta name = "theme-color" content = "#000000"/>
        <link rel = "stylesheet" href = "https://cdnjs.cloudflare.com/ajax/libs/material-design-iconic-font/2.2.0/css/material-design-iconic-font.min.css">
        <link href = "https://fonts.googleapis.com/css?family=Titillium+Web:300,400,700" rel = "stylesheet">
        <link rel = "stylesheet" href = "//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"/>
        <link rel = "manifest" href = "manifest.json">
        <link rel = "data" href = "data.json">
        <script src = "https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity = "sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin = "anonymous">
        </script>
        <title>Test</title>
        <link href = "/React/static/css/2.2aa93811.chunk.css" rel = "stylesheet">
        <link href = "/React/static/css/main.ca6e1d23.chunk.css" rel = "stylesheet">
    </head>
    <body>
        <div id = "root"></div>
        <script src = "https://unpkg.com/react@16.0.0/umd/react.production.min.js"></script>
        <script>!function(f){function e(e){for(var r,t,n=e[0],o=e[1],u=e[2],l=0,a=[];l<n.length;l++)t=n[l],c[t]&&a.push(c[t][0]),c[t]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(f[r]=o[r]);for(s&&s(e);a.length;)a.shift()();return p.push.apply(p,u||[]),i()}function i(){for(var e,r=0;r<p.length;r++){for(var t=p[r],n=!0,o=1;o<t.length;o++){var u=t[o];0!==c[u]&&(n=!1)}n&&(p.splice(r--,1),e=l(l.s=t[0]))}return e}var t = {},c = {1:0},p=[];function l(e){if (t[e])return t[e].exports;var r=t[e] = {i:e,l:!1,exports:{}};return f[e].call(r.exports,r,r.exports,l),r.l=!0,r.exports}l.m=f,l.c=t,l.d=function(e,r,t){l.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(r,e){if (1&e&&(r=l(r)),8&e)return r;if (4&e&&"object"==typeof r&&r&&r.__esModule)return r;var t=Object.create(null);if (l.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:r}),2&e&&"string"!=typeof r)for(var n in r)l.d(t,n,function(e){return r[e]}.bind(null,n));return t},l.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(r,"a",r),r},l.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},l.p = "/ReactCalendar/";var r=window.webpackJsonp=window.webpackJsonp||[],n=r.push.bind(r);r.push=e,r=r.slice();for(var o=0;o<r.length;o++)e(r[o]);var s=n;i()}([])</script>
        <script src = "/React/static/js/2.4a7f0704.chunk.js"></script>
        <script src = "/React/static/js/main.f9268394.chunk.js"></script>
    </body>
</html>
Как я могу это исправить?

 09.05.2019 09:27
19
2
55 097
12
Данный вопрос помечен как решенный
 Ответы 12
 Ответ принят как подходящий
Попробуйте заменить basename = "/" на BrowserRouter на basename = "/React". react-router необходимо, если используется в подкаталоге.

Из react-router документы:

basename: The base URL for all locations. If your app is served from a sub-directory on your server, you'll want to set this to the sub-directory. A properly formatted basename should have a leading slash, but no trailing slash.

Также измените homepage в package.json на URL вашей производственной цели. homepage = "." означает, что он будет работать на каждом домене, где он расположен в корне сервера (и это также поведение по умолчанию).

Из Документы React относительно развертывания:

By default, Create React App produces a build assuming your app is hosted at the server root. To override this, specify the homepage in your package.json, for example:

"homepage": "http://mywebsite.com/relativepath",
This will let Create React App correctly infer the root path to use in the generated HTML file.

 09.05.2019 10:23
Я столкнулся с той же проблемой и решил ее!

Если у кого-то все еще есть эта проблема, выполните следующие действия.

1 - Вам необходимо обновить браузер. Обратитесь к этому, https://create-react-app.dev/docs/supported-browsers-features/#configuring-supported-browsers

2- Вам нужно добавить зависимость "react-router-dom": к файлу package.json, используя npm i react-router-dom

3- Добавьте "homepage": ".", в файл package.json.

Надеюсь это поможет.

 21.02.2020 08:05
У меня тоже была такая проблема, пустой белый экран, ошибок нет. Ни один из этих ответов не решил мою проблему. Я оставлю решение моей проблемы здесь, чтобы кто-то вроде меня не потратил 2 часа на маленькую ошибку.

Просто убедитесь, что вы загружаете все файлы в папку /build на сервер.

 18.04.2020 03:33
У меня была эта проблема. Я пытался открыть приложение после сборки, дважды щелкнув index.html, и это тоже не сработало, я получил пустую страницу, но если встроенные файлы запускаются в серверной среде, работает. https://create-react-app.dev/docs/deployment/

 22.09.2020 17:15
Подобная перестановка сработала для меня, удалить точно? из корневого пути

<Router>
  <Route exact path = "/about" component = {About} />
  <Route path = "/" component = {App} />
</Router>

 05.12.2020 06:22
Я просто добавляю basename='/index.html' в свой index.html, подробнее смотрите код ниже:

import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import LoginPage from './components/LoginPage/LoginPage';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  return (
    <Router basename='/index.html'>
      <Switch>
        <Route path='/' exact component = {LoginPage} />
        <Route path='/dashboard' component = {Dashboard}/>
      </Switch>
    </Router>
  );
}

export default App;

Надеюсь, это поможет.

 20.04.2021 00:37
У меня была такая же проблема с «белым экраном», которую я решил, просто добавив:

<BrowserRouter basename = "/"> 
basename = "/" в файле index.js.

это сработало для меня, надеюсь, что это сработает для вас.

 07.05.2021 23:56
Ни один из приведенных выше ответов не работает для меня. Поэтому я попытался запустить его в другом порту, и он работает.

serve -s build -l 4000 
 13.06.2021 20:17
Это может быть связано со страницей, маршрут которой вы переименовали.

У меня был белый экран, на котором не было ошибок, потому что я использовал history.push, чтобы отправить пользователя на страницу, которую мы переименовали.

Страницы больше не существовало, поэтому отображался пустой белый экран.

 30.06.2021 22:18
Просто добавлю дополнительный ответ, поскольку я знаю, что для этого есть много причин. У меня была белая страница после сборки, и я увидел 404 в консоли браузера для веб-фрагментов. Я установил «домашнюю страницу» в package.json и был озадачен.

Кэширование на стороне сервера
Однако я заметил в сообщении 404, что фрагмент ссылается на имел другой хеш, чем тот, что находится в моей папке сборки; эти "старые" куски пытались получить, а не новые из последней сборки с другими хэшами в имени файла.

например, ошибка 404 в консоли моего браузера указывала на фрагмент с хешем, например:

main.f1d2d060.chunk.css // from an old build
     ^^^^^^^^^
Где, как и в папке /build, фрагмент был на самом деле:

main.adg25e108.chunk.css // from latest build
     ^^^^^^^^^
Таким образом, я понял, что какой-то файл должен быть кэширован, пытаясь получить старую вещь, а не новую. Оказалось, что у меня был включен кэширование на стороне сервера, и старые веб-фрагменты пытались получить кэшированной версией asset-manifest.json... :sigh: ...Мне удалось очистить кеш для моего веб-хостинга (SiteGround).

Сброс кеша зависит от вашего хоста: https://www.siteground.com/kb/clear-site-cache/

Что-то, что следует учитывать, если вы пробовали все остальное - дважды и трижды проверьте, что хеш-строка в 404 в вашей консоли совпадает с вашей /build папкой, иначе вы можете оказаться в той же ситуации со старым активом-манифест.json, пытающимся чтобы получить неправильный материал.

 30.07.2021 04:06
Что сработало для меня, так это добавление basename = "/index.html" к BrowserRouter:

<BrowserRouter basename = "/index.html">
   ...
</BrowserRouter>
 29.09.2021 10:48
Была эта проблема с react-router-dom v6. Мне помогло заменить <BrowserRouter> на <HashRouter> и добавить "homepage": "." в package.json

 07.01.2022 06:05
Другие вопросы по теме
Колконная сборка ROS2 не показывает никаких сообщений об ошибках в Windows
Какой экземпляр GCP Compute Engine использовать для создания образа Docker?
Сборка сборки Android портит графический интерфейс
Проблема в сборке gradle Ошибка: нет такого свойства: GradleVersion для класса: JetGradlePlugin
Конвейеры Azure и yaml: как обращаться к файлам через несколько папок?
Нужно ли устанавливать все рабочие нагрузки VS на сервер сборки TFS?
Размер сборки для LLVM 6.0.0 огромен (42G)
Повторяющееся объявление типа 'в токене';' при попытке объявить тип SELinux
Как собрать SpiderMonkey под Windows?
Сбой сборки Gemfury с SyntaxError
Похожие вопросы
Проверьте метод рендеринга ConnectedField
Событие клика OutSider с использованием React Hook
Динамическое использование компонента Link в React-Router
Изменение URL без повторного рендеринга в маршрутизаторе React
Event.persist не является функцией - JEST & Enzyme
Условный рендеринг через многомерный цикл с массивом
React Redux, мой компонент не подключен к Redux Store. Я протестировал действие и редуктор в другом компоненте, работает ли он для других компонентов?
Как сохранить ввод, введенный пользователем, в состоянии, которое является массивом в React
Когда реагируют, выполните componentDidMount и componentWillUnmount
Req.body пуст, и я не могу понять, почему
Разделы
Блог

Вопросы

Теги

О сайте

Контакты
info@reddeveloper.ru
Правовая информация
Политика конфиденциальности

Пользовательское соглашение


Находите ответы на сложные технические вопросы по программированию, с которыми сталкиваются инженеры по всему миру в своей ежедневной практике на сайте RedDeveloper.

© 2026 «RedDeveloper.ru»

		RedDeveloper
Блог
Вопросы
Теги
Поиск...
Проверка с помощью Yup для проверки длины строки или числа
Вопросы
JAVASCRIPT
Проверка с помощью Yup для проверки длины строки или числа
Есть ли функция, которая проверяет определенную длину?

Я пробовал .min(5) и .max(5), но мне нужно что-то, что гарантирует, что номер будет ровно 5 символов (например, почтовый индекс).

 17.04.2018 22:24
46
0
61 075
13
Данный вопрос помечен как решенный
 Ответы 13
 Ответ принят как подходящий
Я не думаю, что есть что-то встроенное, но это легко реализовать с помощью test:

yup.string()
  .test('len', 'Must be exactly 5 characters', val => val.length === 5)
https://runkit.com/tamlyn/5ad9b99a4ba1230012d7ac21

 20.04.2018 12:08
Для справки в будущем, если вы хотите проверить номер (почтовый индекс), вышеуказанное решение требует небольшой настройки. Функция должна быть:

Yup.number().test('len', 'Must be exactly 5 characters', val => val.toString().length === 5)

.length не работает с числами, только со строками.

 29.10.2018 19:56
@Tamlyn отвечать довольно хорошо охватывает аспект проверки длины вопроса.

В случае почтового индекса вы можете использовать регулярное выражение для обеспечения длины и ограничения числовых значений в Yup.string() (вы не захотите использовать тип Yup.number(), поскольку он не будет поддерживать почтовые индексы, начинающиеся с нуля 0####)

// ##### format zip code
Yup.string().matches(/^[0-9]{5}$/, 'Must be exactly 5 digits')

// ##### and #####-#### format zip codes
Yup.string().matches(/^[0-9]{5}(?:-[0-9]{4})?$/, 'Must be 5 or 9 digits')
 03.07.2019 17:01
Чтобы добавить к другим ответам, никто из них не проверяет, существует ли значение (я вижу, что некоторые упомянули об этом в комментариях после публикации этого) ...

Если его нет и поле оставлено пустым, он будет пытаться получить длину undefined или null, что затем выдаст вам ошибку javascript и предотвратит работу других условий, таких как .required() (если вы настроили его, как, конечно, ).

Вероятно, это было бы немного лучше:

// Check we have a value as well
Yup.number().test('len', 'Must be exactly 5 characters', val => val && val.toString().length === 5 )
 29.08.2019 15:36
Вы также можете использовать string.length.

yup.string().length(5)
Но не работает с числами, начинающимися с нуля:

const yup = require('yup')

const schema = yup.string().length(5)

console.info(schema.isValidSync(12345)) // (true) This is valid.
console.info(schema.isValidSync(00123)) // (false) This is NOT valid.
 10.09.2019 14:50
отвечать @ efru отлично подходит для чисел, длина которых меньше 22 символов. Однако val.toString().length не работает с числами, длина которых превышает 22 символа. Причина этого в том, что большие числа преобразуются в экспоненциальный формат при преобразовании в строку в javascript.

Лучше всего работает следующее решение:

Yup.number().test('len', 'Must be exactly 25 characters', val => Math.ceil(Math.log10(val + 1)) === 25)

 24.01.2020 00:57
Эта проверка приводит к лучшему опыту проверки:

Yup.string()
.required()
.matches(/^[0-9]+$/, "Must be only digits")
.min(5, 'Must be exactly 5 digits')
.max(5, 'Must be exactly 5 digits')
выход:

12f1    // Must be only digits
123     // Must be exactly 5 digits
123456  // Must be exactly 5 digits
01234   // valid
11106   // valid
Демо: https://codesandbox.io/s/yup-y6uph

 21.02.2020 21:09
Тестовый API сталкивается с проблемами с ReactJs, когда ваше поле не имеет значения. Вместо этого вы можете использовать API длины

Yup.string().length(4, 'This field has to be exactly 4 characters!')
 03.03.2020 11:29
Ваш путь правильный и самый простой.

Yup.string()
.required()
.min(5, 'Must be exactly 5 digits')
.max(5, 'Must be exactly 5 digits')
 19.05.2020 23:36
import { string, date} from 'yup' // Take out what is needed in import

string()
.trim()
.matches(
  /^[0-9]{4}[0-9]{2}[0-9]{2}T 0-9]{2}:[0-9]{2}:[0-9]{2}.[0-9]{3}Z$/,
  'createdOn is not in correct format',
)
.max(24),
 30.07.2020 15:14
Попробуй это:

Yup.number()
.required()
.min(10000, 'Must be exactly 5 characters')
.max(99999, 'Must be exactly 5 characters')
.label("Zip Code"),
 04.08.2020 06:37
Вы также можете использовать проверку для числа, но при использовании теста для проверки длины вы должны преобразовать его в строку, прежде чем проверять ее.

Yup.object().shape({
  zipCode: Yup.number()
    .required('Zip code is a required field')// optional
    .typeError('Zip code can only be a number')// optional as well
    .test('len', 'Zip code needs to be excatly 5 digits', val => val.toString().length === 5)
});
 16.02.2021 12:20
Работает как амулет для типа числа.

yup.number().test('len', 'Max 6 numbers', (val) => val.toString().length <= 6)
 09.04.2021 04:19
Другие вопросы по теме
Функция handleclick не работает
Загрузчик шрифтов postcss
Попытка создать эффект набора текста на reactjs
Добавление параметров в функцию onKeyPress
Действия разделяются в разных браузерах и вкладках React Redux
Обновить сразу несколько вычисленных свойств с помощью setState?
Я не могу получить доступ к свойству value из материала Ui Date-Picker
Может ли babylonjs связываться с конечной точкой REST?
Изменение размера кладки при изменении ориентации или изменении размера окна
Как создать новую статическую функцию React getDerivedStateFromProps в качестве метода жизненного цикла с использованием HoC в библиотеке перекомпоновки?
Похожие вопросы
Как использовать событие onclick javascript для хранения информации в базе данных
Как я могу решить это свойство Null в Javascript?
Router.use требует функции промежуточного программного обеспечения, но получил объект: node.js / express
Приостановить индикатор выполнения jQuery, если вкладка или браузер изменены
Как сделать так, чтобы функция переключения классов изменяла и отменяла стиль кнопки CSS при нажатии?
Rxjs повторяет вызов api в зависимости от продолжительности, указанной в ответе
Имитируйте щелчок человека и выберите в раскрывающемся меню
Функции JavaScript, выполняемые с разными аргументами
Возникли проблемы с аккордеоном с JQuery
ACF Google Map - кластеризация маркеров
Разделы
Блог

Вопросы

Теги

О сайте

Контакты
info@reddeveloper.ru
Правовая информация
Политика конфиденциальности

Пользовательское соглашение


Находите ответы на сложные технические вопросы по программированию, с которыми сталкиваются инженеры по всему миру в своей ежедневной практике на сайте RedDeveloper.

© 2026 «RedDeveloper.ru»

		RedDeveloper
Блог
Вопросы
Теги
Поиск...
Как перенаправить на новую страницу из функции в React?
Вопросы
REACTJS
Как перенаправить на новую страницу из функции в React?
Прямо сейчас у меня есть эта функция, и я использую ее, чтобы вернуться к входу в систему, а также для проверки сброса значения localStorage, для которого я использую функцию, а с тех пор, как с ее помощью я не могу сбросить значение локального хранилища. Функция ниже: -

logout(){
    localStorage.clear();
    console.info("cliasdk");
    return(
        <Redirect to = "/login"/>
    )
  }
Это выполняется при нажатии на div, но я не могу перейти на страницу / login. Как это сделать?

 11.06.2018 10:14
18
1
59 313
13
 Ответы 13
logout(){
    localStorage.clear();
    this.setState({redirect: true})
  }

//inside Render
render(){
    const {redirect} = this.state;
   if (redirect){
    return <Redirect push to = "/login"/> 
}
}
 11.06.2018 10:20
Вы можете использовать переменную истории в реквизитах или, если у них нет истории в реквизитах, вы можете использовать withRouter HOC (https://reacttraining.com/react-router/web/api/withRouter)

history.push("/login") 
или же

history.replace("/login")
 11.06.2018 10:48
Если вы используете пакет react-router-dom, вы можете обернуть свой компонент маршрутизатором, и тогда у вас будет возможность программно перенаправить пользователя, например this.props.history.push('/login').

Например:

import {withRouter} from 'react-router-dom';

class Component extends React.component {

    constructor(props){

    }

    componentDidMount(){
        this.props.history.push('/login');
    }

}

export default withRouter(Component);
См .: https://www.npmjs.com/package/react-router-dom.

 11.06.2018 10:49
Вы можете изменить маршрут программно с такой историей:

export default class Logout extends Component {
  logout = () => {
    this.props.history.push("login");
  };

  render() {
    return (
      <div>
        <h1>Logout</h1>
        <button onClick = {this.logout}>Logout</button>
      </div>
    );
  }
}
Если вам нужен localStorage.clear();, просто введите его в функцию выхода. Вы можете увидеть полный (рабочий) пример кода здесь: https://codesandbox.io/s/py8w777kxj

 11.06.2018 10:50
Вам нужно импортировать Redirect из react-router-dom, например:

import { Redirect } from 'react-router-dom';
 06.12.2018 01:37
вы можете использовать этот пример для перенаправления после рендеринга функции

import React from 'react';
import { Redirect } from 'react-router-dom';

class MyComponent extends React.Component {
  state = {
    redirect: false
  }
  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/target' />
    }
  }
  render () {
    return (
       <div>
        {this.renderRedirect()}
        <button onClick = {this.setRedirect}>Redirect</button>
       </div>
    )
  }
}
 19.06.2019 13:02
Для справки в будущем, если вы не заинтересованы в использовании React Router, вы можете попробовать то же самое, что я использую прямо сейчас, который использует местоположение браузера (URL):

logout(){
    // stuff...
    location.href = "/login/"
  }
 20.01.2020 09:14
Если вы пытаетесь выйти из приложения React (которое использует шаблон URL /#/page) через функцию очистки локального хранилища / перенаправления, попробуйте использовать go:

import { createHashHistory } from "history";

const history = createHashHistory();

history.go("/login");
go загружает конкретный URL из списка истории, его можно использовать для возврата в историю, а также для продолжения, в этом случае «вперед» будет использовать /login и абсолютный путь для перенаправления.

Обновлять
На React Router 6 вы можете использовать useNavigate для программной навигации.

 24.01.2020 20:42
Попробуй это


import React from "react";
const createHistory = require("history").createBrowserHistory;

class Logout extends React.Component {
    constructor(props) {
        super(props);
        let history = createHistory();
        history.push("/login");
        let pathUrl = window.location.href;
        window.location.href = pathUrl;   

    }

    render() {

        return (
            <div>
            </div>
        );
    }
}

export default Logout;
 19.02.2020 16:17
Со всеми предыдущими ответами я опишу здесь этот вариант использования:

on `/login` page, I would like to go to `/` when login is OK:
Добавить импорт:

import { Redirect } from 'react-router-dom';
Добавьте в состояние вашего компонента по умолчанию перенаправление на false:

state = {
  redirect: false,
}
Добавьте в свою бизнес-логику (например, onLoginOk()) изменение состояния перенаправления

this.setState({ redirect: true })
Добавьте где-нибудь в корневой элемент render:

 { this.state.redirect ? (<Redirect push to = "/"/>) : null }
Вот и все.

 05.06.2020 14:34
В React router 6 перенаправление выглядит так:

const navigate = useNavigate();
const goToLoginPage = () => navigate('/login');
Весь код можно увидеть здесь: https://github.com/anmk/redirect/blob/redirect/src/App.js

Вы также можете написать компонент для этого: https://github.com/anmk/redirect/tree/redirect_to_component

 25.07.2020 13:28
Это самый простой вариант, если вы не хотите иметь дело с response-router-dom.
Вот пример, написанный в функциональных компонентах React

const Page = () => {
   const redirect = () => {
      window.location.href = '/anotherPagePath'
   }
   return (
      <button onClick = {redirect}>go to another page</button>
   )
}
 10.04.2021 21:32
import React from "react"
import { useHistory } from "react-router-dom";

export const Component = ( props ) => {
  const history = useHistory()
  const handler = () => {
    //Redirect to another route
    history.push("/route-link") 
  }
}
Может это то, что вы ищете.

 13.04.2021 22:05
Другие вопросы по теме
Путь маршрута React JS не работает
Восстановление предыдущего состояния в Redux при возврате в историю с помощью React-router
Как правильно определять маршруты в React?
Реагировать автоматически нажмите кнопку
Использование конечного пути реактивного маршрутизатора для активного класса navlink
Как я могу переименовать index.html в проекте create-react-app?
Как сохранить состояние React New Context API при маршрутизации между компонентами?
Реагировать: скрыть компонент на определенном маршруте
Маршрутизатор React изменяет URL-адрес, но не загружает веб-страницу должным образом
Проблемы с нулевым ответом объекта сопоставления React Router
Похожие вопросы
Нужен ли супер (реквизит)?
Как импортировать HTML-файл в компонент React и использовать его как компонент?
React Virtualized Masonry не изменяет размер в браузере
Распечатать значения из JSON API React Native
Добавьте горизонтальные линии на оси Y под метками
Firebase возвращает "Undefined" на "downloadURL"
Опора React Response orinetation начинается с нуля
Событие touchmove не запускается в Google Chrome для Android
Я не могу выполнить родительский метод props внутри обработчика событий
Использование этого ключевого слова внутри строки шаблона es6 и передача этой строки в опасноSetInnerHtml
Разделы
Блог

Вопросы

Теги

О сайте

Контакты
info@reddeveloper.ru
Правовая информация
Политика конфиденциальности

Пользовательское соглашение


Находите ответы на сложные технические вопросы по программированию, с которыми сталкиваются инженеры по всему миру в своей ежедневной практике на сайте RedDeveloper.

© 2026 «RedDeveloper.ru»

	  RedDeveloper
Блог
Вопросы
Теги
Поиск...
Axios Удалить запрос с телом и заголовками?
Вопросы
JAVASCRIPT
Axios Удалить запрос с телом и заголовками?
Я использую Axios при программировании в ReactJS и делаю вид, что отправляю запрос DELETE на свой сервер.

Для этого мне нужны заголовки:

headers: {
  'Authorization': ...
}
и тело состоит из

var payload = {
    "username": ..
}
Я искал в интервалах и только обнаружил, что метод DELETE требует «param» и не принимает «data».

Пытался отправить вот так:

axios.delete(URL, payload, header);
или даже

axios.delete(URL, {params: payload}, header);
Но вроде ничего не работает ...

Может ли кто-нибудь сказать мне, возможно ли (я предполагаю, что это возможно) отправить запрос DELETE с заголовками и телом и как это сделать?

Заранее спасибо!

 27.06.2018 20:45
156
0
240 373
13
Данный вопрос помечен как решенный
 Ответы 13
axios.delete поддерживает тело запроса. Он принимает два параметра: url и необязательный config. Вы можете использовать config.data для установки тела запроса и заголовков следующим образом:

axios.delete(url, { data: { foo: "bar" }, headers: { "Authorization": "***" } });
Смотрите здесь - https://github.com/axios/axios/issues/897

 27.06.2018 21:01
аксиос.Удалить - это передал URL-адрес и необязательную конфигурацию.

axios.delete(url[, config])

Поля доступные для конфигурации могут включать заголовки.

Это делает так, что вызов API может быть записан как:

const headers = {
  'Authorization': 'Bearer paperboy'
}
const data = {
  foo: 'bar'
}

axios.delete('https://foo.svc/resource', {headers, data})
 27.06.2018 21:05
Чтобы отправить HTTP DELETE с некоторыми заголовками через axios, я сделал следующее:

  const deleteUrl = "http//foo.bar.baz";
  const httpReqHeaders = {
    'Authorization': token,
    'Content-Type': 'application/json'
  };
  // check the structure here: https://github.com/axios/axios#request-config
  const axiosConfigObject = {headers: httpReqHeaders}; 

  axios.delete(deleteUrl, axiosConfigObject);
Синтаксис axios для разных HTTP-глаголов (GET, POST, PUT, DELETE) сложен, потому что иногда второй параметр должен быть телом HTTP, а иногда (когда он может не понадобиться) вы просто передаете заголовки как второй параметр.

Однако предположим, что вам нужно отправить запрос HTTP POST без тела HTTP, тогда вам нужно передать undefined в качестве второго параметра.

Помните, что согласно определению объекта конфигурации (https://github.com/axios/axios#request-config) вы все равно можете передавать тело HTTP в HTTP-вызове через поле data при вызове axios.delete, однако для команды HTTP DELETE он будет проигнорирован.

Эта путаница между вторым параметром, который иногда является телом HTTP, а иногда и целым объектом config для axios, связана с тем, как были реализованы правила HTTP. Иногда тело HTTP не требуется для того, чтобы HTTP-вызов считался действительным.

 08.10.2018 17:28
Вот краткое описание форматов, необходимых для отправки различных http-глаголов с аксиомами:

GET: два пути

Первый способ

axios.get('/user?ID=12345')
  .then(function (response) {
    // Do something
  })
Второй способ

axios.get('/user', {
    params: {
      ID: 12345
    }
  })
  .then(function (response) {
    // Do something
  })
Два приведенных выше эквивалентны. Обратите внимание на ключевое слово params во втором методе.

POST и PATCH

axios.post('any-url', payload).then(
  // payload is the body of the request
  // Do something
)

axios.patch('any-url', payload).then(
  // payload is the body of the request
  // Do something
)
DELETE

axios.delete('url', { data: payload }).then(
  // Observe the data keyword this time. Very important
  // payload is the request body
  // Do something
)
Ключевые выводы
Запросы get необязательно требуют ключа params для правильной установки параметров запроса.
Запросы delete с телом должны быть установлены под ключом data
 12.11.2018 15:02
Я столкнулся с той же проблемой ... Я решил это, создав собственный экземпляр axios. и используя это для выполнения аутентифицированного запроса на удаление ..

const token = localStorage.getItem('token');
const request = axios.create({
        headers: {
            Authorization: token
        }
    });

await request.delete('<your route>, { data: { <your data> }});
 29.11.2018 02:01
У меня была такая же проблема, которую я решил вот так:

axios.delete(url, {data:{username:"user", password:"pass"}, headers:{Authorization: "token"}})
 18.12.2018 11:25
Для удаления вам нужно будет сделать следующее

axios.delete("/<your endpoint>", { data:<"payload object">})
У меня это сработало.

 27.02.2019 20:27
 Ответ принят как подходящий
Итак, после нескольких попыток я обнаружил, что это работает.

Пожалуйста, соблюдайте последовательность заказа очень важно иначе не получится

axios.delete(URL, {
  headers: {
    Authorization: authorizationToken
  },
  data: {
    source: source
  }
});
 19.05.2019 20:32
Собственно, axios.delete поддерживает тело запроса.
Он принимает два параметра: URL и дополнительный config. Это...

axios.delete(url: string, config?: AxiosRequestConfig | undefined)
Вы можете сделать следующее, чтобы задать тело ответа для запроса на удаление:

let config = { 
    headers: {
        Authorization: authToken
    },
    data: { //! Take note of the `data` keyword. This is the request body.
        key: value,
        ... //! more `key: value` pairs as desired.
    } 
}

axios.delete(url, config)
Я надеюсь, что это поможет кому-то!

 06.05.2020 22:25
Я нашел способ, который работает:

axios
      .delete(URL, {
        params: { id: 'IDDataBase'},
        headers: {
          token: 'TOKEN',
        },
      }) 
      .then(function (response) {
        
      })
      .catch(function (error) {
        console.info(error);
      });
Я надеюсь, что это сработает и для вас.

 06.10.2020 14:11
Я попробовал все вышеперечисленное, но у меня не получилось. В итоге я просто перешел с PUT (вдохновение нашло здесь) и просто изменил логику на стороне сервера, чтобы выполнить удаление этого URL-адреса. (переопределение функции django rest framework).

например

.put(`http://127.0.0.1:8006/api/updatetoken/20`, bayst)
      .then((response) => response.data)
      .catch((error) => { throw error.response.data; });
 13.10.2020 10:23
Для тех, кто пробовал все вышеописанное и до сих пор не видит полезную нагрузку с запросом - убедитесь, что у вас есть:

"axios": "^0.21.1" (not 0.20.0)
Затем приведенные выше решения работают

axios.delete("URL", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: {
        var1: "var1",
        var2: "var2"
      },
    })
Вы можете получить доступ к полезной нагрузке с помощью

req.body.var1, req.body.var2
Вот в чем проблема:

https://github.com/axios/axios/issues/3335

 14.02.2021 16:49
Если мы имеем:

myData = { field1: val1, field2: val2 }
Мы могли бы преобразовать данные (JSON) в строку, а затем отправить ее в качестве параметра (в бэкэнд):

axios.delete("http://localhost:[YOUR PORT]/api/delete/" + JSON.stringify(myData), 
     { headers: { 'authorization': localStorage.getItem('token') } }
 )
На стороне сервера мы возвращаем наш объект:

app.delete("/api/delete/:dataFromFrontEnd", requireAuth, (req, res) => {
    const myData = JSON.parse(req.params.dataFromFrontEnd)
    // we could get our object back:
    //      myData = { field1: val1, field2: val2 }
 })
 14.06.2021 04:22
Другие вопросы по теме
Опора передана компоненту return undefined
Почему Collection.find () не работает в моем клиенте Meteor?
React Router отображает пустые страницы с помощью React Redux
React Select: раскрывающийся синий контур с возможностью поиска
Пользовательский стиль для MenuOption во всплывающем меню React native
Как мне вызвать метод внутри компонента, который обновился из сторонней библиотеки в react.js?
React-router-dom v4 не отображает компонент при загрузке страницы
Передача данных ag-grid от дочернего к родительскому
Redux.js - мне не удается сопоставить блок mapStateToProps с помощью React Redux - My React Component в исходном состоянии хранилища и не удается обновить при обновлении store.state
Невозможно выбрать элемент из раскрывающегося списка на веб-странице React с помощью Robotframework selenium
Похожие вопросы
Автозаполнение в обычном JS из данных obj
Как изменить конфигурацию узла в памяти
Передайте конкретную отправленную форму функции с jQuery / Javascript
Опора передана компоненту return undefined
Как использовать текущее, а также следующее значение итерации внутри ngFor (Angular 4)
Обновление таблицы подключенной базы данных по мере добавления строк в таблицу ASP.NET MVC
Почему Collection.find () не работает в моем клиенте Meteor?
Как решить эту ошибку с помощью async?
Попытка передать переменные сеанса PHP в файлы Node JS
Отображение веб-страницы в IFrame без атрибута src
Разделы
Блог

Вопросы

Теги

О сайте

Контакты
info@reddeveloper.ru
Правовая информация
Политика конфиденциальности

Пользовательское соглашение


Находите ответы на сложные технические вопросы по программированию, с которыми сталкиваются инженеры по всему миру в своей ежедневной практике на сайте RedDeveloper.

© 2026 «RedDeveloper.ru»

	RedDeveloper
Блог
Вопросы
Теги
Поиск...
Требуется Babel "7.0.0-0", но был загружен "6.26.3"
Вопросы
REACTJS
Требуется Babel "7.0.0-0", но был загружен "6.26.3"
Продолжайте получать эту ошибку, независимо от того, что я пытался установить (в случае с Babel), поскольку я слежу за другими аналогичными отчетами. это трассировка стека:

error: bundling failed: Error: Requires Babel "^7.0.0-0", but was
loaded with "6.26.3". If you are sure you have a compatible version of
@babel/core, it is likely that something in your build process is
loading the wrong version. Inspect the stack trace of this error to
look for the first entry that doesn't mention "@babel/core" or
"babel-core" to see what is calling Babel. (While processing preset:
"C:\\Users\\Admin-ESS\\Absent\\node_modules\\@babel\\preset-env\\lib\\index.js")
    at throwVersionError (C:\Users\Admin-ESS\Absent\node_modules\@babel\preset-env\node_modules\@babel\helper-plugin-utils\lib\index.js:65:11)
    at Object.assertVersion (C:\Users\Admin-ESS\Absent\node_modules\@babel\preset-env\node_modules\@babel\helper-plugin-utils\lib\index.js:13:11)
    at _default (C:\Users\Admin-ESS\Absent\node_modules\@babel\preset-env\lib\index.js:150:7)
    at C:\Users\Admin-ESS\Absent\node_modules\@babel\preset-env\node_modules\@babel\helper-plugin-utils\lib\index.js:19:12
    at C:\Users\Admin-ESS\Absent\node_modules\metro\node_modules\babel-core\lib\transformation\file\options\option-manager.js:317:46
    at Array.map (<anonymous>)
    at OptionManager.resolvePresets (C:\Users\Admin-ESS\Absent\node_modules\metro\node_modules\babel-core\lib\transformation\file\options\option-manager.js:275:20)
    at OptionManager.mergePresets (C:\Users\Admin-ESS\Absent\node_modules\metro\node_modules\babel-core\lib\transformation\file\options\option-manager.js:264:10)
    at OptionManager.mergeOptions (C:\Users\Admin-ESS\Absent\node_modules\metro\node_modules\babel-core\lib\transformation\file\options\option-manager.js:249:14)
    at OptionManager.init (C:\Users\Admin-ESS\Absent\node_modules\metro\node_modules\babel-core\lib\transformation\file\options\option-manager.js:368:12)
    at File.initOptions (C:\Users\Admin-ESS\Absent\node_modules\metro\node_modules\babel-core\lib\transformation\file\index.js:212:65)
    at new File (C:\Users\Admin-ESS\Absent\node_modules\metro\node_modules\babel-core\lib\transformation\file\index.js:135:24)
    at Pipeline.transform (C:\Users\Admin-ESS\Absent\node_modules\metro\node_modules\babel-core\lib\transformation\pipeline.js:46:16)
    at Object.transform (C:\Users\Admin-ESS\Absent\node_modules\metro\src\transformer.js:135:5)
    at Object.transformCode [as transform] (C:\Users\Admin-ESS\Absent\node_modules\metro\src\JSTransformer\worker\index.js:253:15)
    at execMethod (C:\Users\Admin-ESS\Absent\node_modules\jest-worker\build\child.js:92:29)
    at process.on (C:\Users\Admin-ESS\Absent\node_modules\jest-worker\build\child.js:42:7)
    at process.emit (events.js:180:13)
    at emit (internal/child_process.js:783:12)
и мой package.json:

{
  "name": "Absent",
  "version": "0.1.0",
  "private": true,
  "devDependencies": {
    "babel-preset-react-native-stage-0": "^1.0.1",
    "jest": "^23.5.0",
    "jest-react-native": "^18.0.0",
    "react-test-renderer": "16.3.1"
  },
  "scripts": {
    "start": "react-native start",
    "android": "react-native run-android",
    "ios": "react-native run-ios",
    "test": "jest"
  },
  "jest": {
    "preset": "react-native"
  },
  "dependencies": {
    "@babel/core": "^7.0.0-rc.1",
    "@babel/preset-env": "^7.0.0-rc.1",
    "@babel/preset-react": "^7.0.0-rc.1",
    "jail-monkey": "^1.0.0",
    "prop-types": "^15.6.2",
    "react": "16.3.1",
    "react-native": "^0.55.4",
    "react-native-device-info": "^0.22.4",
    "react-native-elements": "^0.19.1",
    "react-native-firebase": "^4.3.8",
    "react-native-modal": "^6.5.0",
    "react-native-router-flux": "^4.0.1",
    "react-native-size-matters": "^0.1.2",
    "react-native-vector-icons": "^5.0.0",
    "react-redux": "^5.0.7",
    "redux": "^4.0.0",
    "redux-thunk": "^2.3.0"
  },
  "rnpm": {
    "assets": [
      "./assets/fonts/"
    ]
  }
}
Здесь будут очень благодарны за любые указатели ...

 16.08.2018 11:14
57
1
34 835
13
Данный вопрос помечен как решенный
 Ответы 13
 Ответ принят как подходящий
Похоже, вам нужно установить babel-core, как предлагают документы: https://jestjs.io/docs/en/getting-started#using-babel

yarn add --dev babel-jest babel-core@^7.0.0-bridge.0 @babel/core regenerator-runtime

 17.08.2018 20:45
Ни одно из решений, которые я нашел в Интернете, не сработало, я исправил это следующим образом:

Удалите jest и @babel/core из package.json (оставьте мост babel-core v7)
Удалите node_modules и package-lock.json
npm install
npm install jest @ babel / core --save-dev
 11.10.2018 18:05
Проверьте, какую версию вы используете, с помощью cmd

babel -V
Если это не версия 7 или выше

npm uninstall babel-cli -g
npm uninstall babel-core -g
И

npm install @babel/cli -g
npm install @babel/core -g
Если вы используете Jest run

npm install babel-core@7.0.0-bridge.0 --save-dev
Uninstall and reinstall @babel/node solves the problem if you do node development.

 25.12.2018 20:33
Для тех, кто все еще борется с этим, 4 дня назад выпущен Jest v24 с нативной поддержкой babel 7. Наслаждайтесь.

 29.01.2019 05:36
Иногда это связано с тем, что вы установили как babel-cli и babel / cli, так и babel-core и @ babel / core Это вызывает конфликты

Так

1) удалить node_modules

2) удалите babel-cli, babel-core из вашего package.json, сохраните @ babel / core, @ babel / cli

3) установка npm

Babel-Cli конфликтует с @ babel / cli

bable-core конфликтует с @ babel / core

 13.02.2020 06:38
Проблема с моей стороны заключалась в конфликте между babel-core, импортированным babel-register, и @babel/core, требуемым документацией Babel для последнего использования и установленной как корневая зависимость npm.

Кажется, babel-register был перенесен на @babel/register. Babel не обновлял документы с новым именем модуля, хотя они это сделали для своих пакетов cli / core

Вот обновление настроить babel doc, которое мне подходит:

Монтаж

npm install --save-dev @babel/register
использование

В файле package.json внесите следующие изменения:

{
  "scripts": {
    "test": "mocha --require @babel/register"
  }
}
 29.07.2020 20:25
В моем корневом каталоге случайно оказался файл .babelrc со следующим содержимым:

{
  "presets": ["@babel/preset-env"]
}
После того, как я удалил этот файл, я больше не получал эту ошибку при запуске моей команды gulp.

 19.08.2020 17:07
Иногда у вас есть локальная версия, поэтому удалите ее, чтобы запускалась глобальная версия:

npm uninstall babel-cli
npm uninstall babel-core
 20.08.2020 14:06
Из документации Babel я обнаружил, что существует проблема с порядком, в котором вы устанавливаете deps.

Note: Please install @babel/cli and @babel/core first before npx babel, otherwise npx will install out-of-dated babel 6.x.

Согласно использованию документы. Я обнаружил, что удаление обоих элементов из package.json и добавление их по порядку устранило мою проблему. Причудливый крайний случай.

 11.09.2020 03:54
НЕ рекомендуется устанавливать babel глобально. Возможно, ваша IDE распознала ваш глобально установленный пакет и основывается на нем. Или, что более вероятно, у вас есть пакеты, которые конфликтуют друг с другом. например, babel-cli конфликтует с @ babel / cli

While you can install Babel CLI globally on your machine, it's much better to install it locally project by project.

yarn remove global @babel/cli @babel/core
В каталоге проекта ...

yarn remove babel-cli 
yarn add @babel/cli @babel/core @babel/node --dev
 07.11.2020 05:05
Удалите модули узлов.
Обновите свои devdepdencies до
"devDependencies": {
      "@babel/core": "^7.13.10",
      "babel-core": "^7.0.0-bridge.0",
      ........
}
npm install
 21.03.2021 20:00
Удалить node_modules
Обновите devDependencies до:
"devDependencies": {
      "@babel/core": "^7.13.10",
      "babel-core": "^7.0.0-bridge.0",
}
Снова установите npm:
npm install
 19.04.2021 20:29
вам понадобятся эти 4 пакета, которые решат проблему:

 npm install @babel/cli
 npm install @babel/core
 npm install @babel/node
 npm install @babel/preset-env
 21.05.2021 00:53
Другие вопросы по теме
Программное нажатие кнопки в React Native
Перезагрузка страницы после ошибки, redux
Как отреагировать на встроенную глубокую ссылку, чтобы открыть собственное приложение камеры?
Wix React-Native-Navigation Change Tab и экран нажатия
Как отображать данные из хеша в React Native?
Как сделать верхний левый острый угол в пузыре сообщений чата WhatsApp в React Native
Отправьте новый объект по определенному индексу с помощью помощника по неизменяемости
Изменить цвет значка активного меню в DrawerNagivation react-native
Animated API createAnimatedComponent делает ссылку FlatList неопределенной в react-native
Возникли проблемы с добавлением массива дат в firestore
Похожие вопросы
React-bootstrap-table - собственное количество элементов пагинации
Проблемы с получением переменных из URL-адреса
Как получить доступ к другому компоненту в React
Как реорганизовать содержимое <List> с помощью метода map () в React JSX?
Возврат offsetWidth элемента в процентах или с десятичными знаками, чтобы ширина перекрывающегося div была одинаковой - React / Javascript
Перезагрузка страницы после ошибки, redux
JS: ошибка линта: неожиданный токен =
ReactJS fetching API - ошибка CORS
Запрос POST с использованием выборки не работает
Как именно работает параметр в "super" классов javascript?
Разделы
Блог

Вопросы

Теги

О сайте

Контакты
info@reddeveloper.ru
Правовая информация
Политика конфиденциальности

Пользовательское соглашение


Находите ответы на сложные технические вопросы по программированию, с которыми сталкиваются инженеры по всему миру в своей ежедневной практике на сайте RedDeveloper.

© 2026 «RedDeveloper.ru»

	RedDeveloper
Блог
Вопросы
Теги
Поиск...
Как изменить цвет границы Material-UI <TextField />
Вопросы
REACTJS
Как изменить цвет границы Material-UI <TextField />
Кажется, я не могу понять, как изменить цвет контура выделенного варианта Я посмотрел на проблемы с GitHub, и люди, кажется, указывают на использование свойства «InputProps», но это, похоже, ничего не дает. Как изменить цвет границы Material-UI &lt;TextField /&gt; Вот мой код в его текущем состоянии

import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';

const styles = theme => ({
field: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    height: '30px !important'
},
});

class _Field extends React.Component {
      render() {
          const { classes, fieldProps } = this.props;
             return (
                <TextField
                {...fieldProps}
                label = {this.props.label || "<Un-labeled>"}
                InputLabelProps = {{ shrink: true }} // stop from animating.
                inputProps = {{ className: classes.fieldInput }}
                className = {classes.field}
                margin = "dense"
               variant = "outlined"
            />
        );
    }
}

_Field.propTypes = {
    label: PropTypes.string,
    fieldProps: PropTypes.object,
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(_Field);
 21.10.2018 02:28
80
0
127 865
13
Данный вопрос помечен как решенный
 Ответы 13
 Ответ принят как подходящий
Вы можете переопределить все имена классов, введенные Material-UI, благодаря свойству classes. Взгляните на раздел переопределение с классами и реализация компонента для более подробной информации.

и наконец :

Документация API компонента Input React. Узнайте больше о свойствах и точках настройки CSS.

 21.10.2018 08:35
Взгляните на это, я сделал небольшую демонстрацию:

https://stackblitz.com/edit/material-ui-custom-outline-color

Он изменяет цвет границы по умолчанию и цвет метки TextField Material-UI, но сохраняет основной цвет при фокусировке.

Также взгляните на эту ссылку, она дала мне "идею":

https://github.com/mui-org/material-ui/issues/13347

Если вы хотите изменить цвет при фокусировке, посмотрите эти примеры из документации:

https://material-ui.com/demos/text-fields/#customized-inputs

 16.11.2018 11:57
const styles = theme => ({
  notchedOutline: {
    borderWidth: "1px",
    borderColor: "yellow !important"
  }
});

 <TextField
              variant = "outlined"
              rows = "10"
              fullWidth
              InputProps = {{
                classes: {
                  notchedOutline: classes.notchedOutline
                }
              }}
              id = "standard-textarea"
              label = "Input Set"
              helperText = "Enter an array with elemets seperated by , or enter a JSON object"
              placeholder = "Placeholder"
              multiline
              value = {"" + this.props.input}
              onChange = {this.props.handleChangeEventValue("input")}
              className = {classes.textField}
              margin = "normal"
            />


 29.03.2019 16:28
Расширение отвечать Питера. Вы также можете изменить все цвета событий без !important:

 cssOutlinedInput: {
        "&:not(hover):not($disabled):not($cssFocused):not($error) $notchedOutline": {
          borderColor: "red" //default      
        },
        "&:hover:not($disabled):not($cssFocused):not($error) $notchedOutline": {
          borderColor: "blue" //hovered
        },
        "&$cssFocused $notchedOutline": {
          borderColor: "purple" //focused
        }
      },
      notchedOutline: {},
      cssFocused: {},
      error: {},
      disabled: {}
https://stackblitz.com/edit/material-ui-custom-outline-color-c6zqxp

 30.04.2019 23:27
https://codesandbox.io/s/6rx8p

                      <CssTextField      

                       label = "Username"

                       className = "username"
                       name = "username"
                       onChange = {this.onChange}
                       type = "text"
                       autoComplete = "current-password"
                       margin = "normal"
                       inputProps = {{ style: { fontFamily: 'nunito', color: 'white'}}}

                    />
// объявляем константу и добавляем стиль пользовательского интерфейса материала

const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: 'white',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'yellow',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'white',
      },
      '&:hover fieldset': {
        borderColor: 'white',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'yellow',
      },
    },
  },
})(TextField);
 12.07.2019 09:34
  inputProps = {{ style: { fontFamily: 'nunito', color: 'white'}}}
Inputprops работает путем стилизации введенных входных данных в текстовое поле, а также мы можем использовать className для пользовательской раскраски.

      const CssTextField = withStyles({
     root: {
    '& label.Mui-focused': {
     color: 'white',
      },
     '& .MuiInput-underline:after': {
      borderBottomColor: 'yellow',
     },
    '& .MuiOutlinedInput-root': {
     '& fieldset': {
     borderColor: 'white',
     },
     '&:hover fieldset': {
      borderColor: 'white',
       },
     '&.Mui-focused fieldset': {
       borderColor: 'yellow',
     },
     },
    },
Этот константный стиль работает с внешним видом текстового поля ...

Выше предлагается изменить стиль внешней части пользовательского интерфейса материала ...

 01.08.2019 07:04
The overrides key enables you to customize the appearance of all instances of a component type,... Material-Ui

В этом случае есть короткий ответ, вам нужно использовать ThemeProvider и createMuiTheme.

import React from 'react';
import {
  createMuiTheme,
  ThemeProvider
} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ff5722' //your color
    }
  }
});

function CustomTextfield(props) {
  return (
    <ThemeProvider theme = {theme}>
      <TextField variant='outlined'/>
    </ThemeProvider>
  );
}
Для более полной настройки вы можете использовать имена тем по умолчанию поддон. Если вы не знаете, где находятся имена или соглашения об именах. Использование инспектора браузера в разделе стилей - ваше спасение, вы можете заметить, как цепочка css сделана в material-ui.

.MuiFilledInput-root {
position: relative;
transition: background-color 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms;
background-color: rgba(255,255,255,0.8);
border-top-left-radius: 4px;
border-top-right-radius: 4px;
}
MuiFilledInput> корень> цвет фона:

нам нужно создать тему, используя данные из инспектора, нам нужно только поместить цепочку в переопределения: {}

const theme = createMuiTheme({
  overrides: {
    MuiFilledInput: {
      root: {
        backgroundColor: 'rgba(255,255,255,0.8)',
        '&:hover': {
          backgroundColor: 'rgba(255,255,255,1)'
        },
        '&.Mui-focused': {
          backgroundColor: 'rgba(255,255,255,1)'
        }
      }
    }
  }
});
Теперь вы можете выполнить переопределение с помощью ThemeProvider.

import {
  createMuiTheme,
  ThemeProvider
} from '@material-ui/core/styles';

const theme = createMuiTheme({
  overrides: {
    MuiFilledInput: {
      root: {
        backgroundColor: 'rgba(255,255,255,0.8)',
        '&:hover': {
          backgroundColor: 'rgba(255,255,255,1)'
        },
        '&.Mui-focused': {
          backgroundColor: 'rgba(255,255,255,1)'
        }
      }
    }
  }
});

function CustomTextfield(props) {
  return (
    <ThemeProvider theme = {theme}>
      <TextField variant='filled' />
    </ThemeProvider>
  );
}
Поэтому для этого вопроса вам нужно искать свои собственные компоненты, потому что они имеют разные имена.

 13.02.2020 04:20
Если кто-то хочет сделать это с помощью стилизованных компонентов:

import styled from "styled-components";
import {TextField} from "@material-ui/core";

const WhiteBorderTextField = styled(TextField)`
  & label.Mui-focused {
    color: white;
  }
  & .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border-color: white;
    }
  }
`;
Это заняло у меня слишком много времени, чтобы понять. Надеюсь, это кому-то поможет.

 30.07.2020 18:03
используйте это свойство переопределения CSS

.MuiFormLabel-root.Mui-focused {
  color: red !important;
}
.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
  border-color: red !important;
}

 12.10.2020 20:39
Проблема с границей текстового поля заключается в том, что цвет, который вы хотите установить имеет более низкий специфичность, чем исходный стиль, установленный Material-UI (MUI).

Например. MUI устанавливает этот класс при фокусировке:

.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: (some color);
}
который более конкретен, чем пользовательский селектор, например:

.Component-cssNotchedOutline {
    border-color: #f0f;
}
Решение A (не рекомендуется)
Вы можете добавить в цвет исключение !important, но это 'плохая практика':

import React from 'react';
import { createStyles, TextField, WithStyles, withStyles } from '@material-ui/core';
interface IProps extends WithStyles<typeof styles> {}

const styles = createStyles({
    notchedOutline: { borderColor: '#f0f !important' },
});

export const TryMuiA = withStyles(styles)((props: IProps) => {
    const { classes } = props;
    return ( <TextField variant = { 'outlined' } label = { 'my label' }
        InputProps = { {
            classes: {
                notchedOutline: classes.notchedOutline,
            },
        } }
    /> );
});
Решение B (рекомендуемые)
официальный пример MUI использует другие способы повышения специфичности.

«Уловка» в том, что, чтобы не стилизовать элемент напрямую, например:

.someChildElement { border-color: #f0f }
но добавить несколько дополнительных селекторов (больше, чем в MUI *), например:

.myRootElement.someExtra { border-color: #f0f }
.myRootElement .someChildElement { border-color: #f0f }
...
* (Собственно достаточно использовать те же селекторы, что и MUI, потому что, если специфика селекторов одинакова, затем используются более поздние)

Включите родителя: Вы могли заметить, что настройка notchedOutlineделает устанавливает цвет для несфокусированного элемента, но не для сфокусированного. Это потому, что стиль MUI включает в себя элемент родитель поля ввода (.MuiOutlinedInput-root.Mui-focused). Так что вам нужно также включить родителя.

import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = {
    root: {                           // - The TextField-root
        border: 'solid 3px #0ff',     // - For demonstration: set the TextField-root border
        padding: '3px',               // - Make the border more distinguishable

        // (Note: space or no space after & matters. See SASS "parent selector".)
        '& .MuiOutlinedInput-root': {  // - The Input-root, inside the TextField-root
            '& fieldset': {            // - The <fieldset> inside the Input-root
                borderColor: 'pink',   // - Set the Input border
            },
            '&:hover fieldset': {
                borderColor: 'yellow', // - Set the Input border when parent has :hover
            },
            '&.Mui-focused fieldset': { // - Set the Input border when parent is focused 
                borderColor: 'green',
            },
        },
    },
};

export const TryMui = withStyles(styles)(function(props) {
    const { classes } = props;
    return (<TextField label = "my label" variant = "outlined"
        classes = { classes }
    />);
})
Примечание, специфичность которого можно увеличивать разными способами, например это тоже сработает (немного по-другому):

    '& fieldset.MuiOutlinedInput-notchedOutline': {
        borderColor: 'green',
    },
Замечание: Может показаться немного грязным добавлять селекторы только для повышения специфичности, когда они вам действительно не «нужны». Я думаю, что это так, но этот обходной путь иногда единственное решение с тех пор, как был изобретен CSS, поэтому он считается вроде приемлемый.

 19.11.2020 16:18
вы можете сослаться на этот код:

styles.js

cssLabel: {
  color : 'rgb(61, 158, 116) !important'
}, 
notchedOutline: {
  borderWidth: '1px',
  borderColor: 'rgb(61, 158, 116) !important',
  color: 'rgb(61, 158, 116)',
},
form.js

<TextField
                name = "creator"
                focused = "true" 
                variant = "outlined" 
                label = "Creator"  
                fullwidth
                InputLabelProps = {{
                    classes: {
                      root: classes.cssLabel,
                      focused: classes.cssLabel,
                    },
                }}
                InputProps = {{
                    classes: {
                      root: classes.notchedOutline,
                      focused: classes.notchedOutline,
                      notchedOutline: classes.notchedOutline,
                    },
                    
                 }}
               
 />
в основном, вам нужно правильно установить цвет границы notchedOutline для InputProps.

 23.02.2021 18:33
Вот этот пример на выбранном входе:

import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  OutlinedInput as MuiOutlinedInput,
} from "@material-ui/core";
    
const OutlinedInput = withStyles((theme) => ({
  notchedOutline: {
    borderColor: "white !important",
  },
}))(MuiOutlinedInput);

const useStyles = makeStyles((theme) => ({
  select: {
    color: "white",
  },
  icon: { color: "white" },
  label: { color: "white" },
}));

function Component() {
  return (
    <FormControl variant = "outlined">
      <InputLabel id = "labelId" className = {classes.label}>
        Label
      </InputLabel>
      <Select
        labelId = "labelId"
        classes = {{
          select: classes.select,
          icon: classes.icon,
        }}
        input = {<OutlinedInput label = "Label" />}
      >
        <MenuItem>A</MenuItem>
        <MenuItem>B</MenuItem>
      </Select>
    </FormControl>
  );
}
 10.03.2021 00:15
Вот как я решил свою.

Я хотел изменить цвет текстового поля при включении. Как вы уже знаете, цвет текстового поля по умолчанию для материала Ui, когда он находится в фокусе, является синим. Синий - основной цвет.

Итак, вот хак, я перешел к внешнему компоненту App, а затем определил функцию под названием createMuiTheme. Эта функция возвращает объект под названием палитра. Внутри палитры вы указываете свой цвет. Вы будете использовать ThemeProvider из materia ui, чтобы применить новую определенную цветовую тему к вашему приложению, как показано ниже. Для получения дополнительной информации перейдите по этой ссылке https://material-ui.com/customization/palette/

import {createMuiTheme, ThemeProvider} from '@material-ui/core';
import FormInput from './FormInput';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "your own color", //this overide blue color
      light: "your own color", //overides light blue
      dark: "your own color", //overides dark blue color
    },
  },
});


//apply your new color theme to your app component
function App(){
return(
<ThemeProvider theme = {theme}> //applies custom theme
   <FormInput/>
</ThemeProvider>
)
}
 28.05.2021 02:52
Другие вопросы по теме
Получите кнопки разбивки на страницы и строки на странице слева в пользовательском интерфейсе материала
Предупреждение об устаревшей типографике при использовании настраиваемой темы в Material-UI
Как использовать hls.js с React
Радиокнопка с динамическим значением из ввода в качестве метки
OnKeyDown не отвечает
Как использовать компонент Material UI в React
Как изменить размер шрифта в кнопке?
Как изменить размер содержимого карты до его размера в пользовательском интерфейсе материала?
Почему модули npm, такие как material-ui, экспортируют файлы es6 и es5?
Включение или отключение кнопки на основе значения TextField в React.js
Похожие вопросы
Метод mongoose findOne возвращает значение null
Как передать большой список данных от родительского к дочернему компоненту
Как правильно отрендерить поток тяжелых веб-сокетов в React?
Метод не работает должным образом в компоненте на основе класса React.js
На обработчике кликера без использования привязки этот метод
Отправка не является ошибкой функции при изменении с mapDispatchToProps на mergeProps?
Не удается импортировать файл css в React Web App
React Native: как я могу поместить переменную внутрь require, не выдавая мне ошибки
Create-response-app: проблема с первой командой, использующей npm
Почему у меня возникают ошибки в React при загрузке данных из базы данных Postgresql?
Разделы
Блог

Вопросы

Теги

О сайте

Контакты
info@reddeveloper.ru
Правовая информация
Политика конфиденциальности

Пользовательское соглашение


Находите ответы на сложные технические вопросы по программированию, с которыми сталкиваются инженеры по всему миру в своей ежедневной практике на сайте RedDeveloper.

© 2026 «RedDeveloper.ru»

RedDeveloper
Блог
Вопросы
Теги
Поиск...
Как я могу использовать перехватчики React в классическом компоненте React `class`?
Вопросы
JAVASCRIPT
Как я могу использовать перехватчики React в классическом компоненте React `class`?
В этом примере у меня есть класс реакции:

class MyDiv extends React.component
   constructor(){
      this.state = {sampleState:'hello world'}
   }
   render(){
      return <div>{this.state.sampleState}
   }
}
Вопрос в том, могу ли я добавить к этому хуки React. Я понимаю, что React-Hooks - альтернатива стилю React Class. Но если я хочу постепенно перейти на хуки React, могу ли я добавить полезные хуки в классы?

 19.11.2018 10:09
62
0
83 227
13
 Ответы 13
Компоненты класса не поддерживают хуки -

Согласно Хуки-FAQ:

You can’t use Hooks inside of a class component, but you can definitely mix classes and function components with Hooks in a single tree. Whether a component is a class or a function that uses Hooks is an implementation detail of that component. In the longer term, we expect Hooks to be the primary way people write React components.

 19.11.2018 10:14
Это будет невозможно с вашими существующими компонентами класса. Вам нужно будет преобразовать свой компонент класса в функциональный компонент, а затем сделать что-то в строках -

function MyDiv() {
const [sampleState, setSampleState] = useState('hello world');
return (
      <div>{sampleState}</div>
    )
}
 19.11.2018 10:14
Хуки предназначены не для классов, а для функций. Если вы хотите использовать хуки, вы можете начать с написания нового кода в виде функциональных компонентов с хуками.

Согласно Ответы на часто задаваемые вопросы

You can’t use Hooks inside of a class component, but you can definitely mix classes and function components with Hooks in a single tree. Whether a component is a class or a function that uses Hooks is an implementation detail of that component. In the longer term, we expect Hooks to be the primary way people write React components.

const MyDiv = () => {
   const [sampleState, setState] = useState('hello world');
   render(){
      return <div>{sampleState}</div>
   }
}
 19.11.2018 10:15
Как уже объясняется в других ответах, API-интерфейс хуков был разработан для предоставления функциональным компонентам функциональности, которая в настоящее время доступна только в компонентах класса. Хуки не должны использоваться в компонентах класса.

Компоненты класса могут быть написаны для облегчения перехода к функциональным компонентам.

С одним состоянием:

class MyDiv extends Component {
   state = {sampleState: 'hello world'};

   render(){
      const { state } = this;
      const setState = state => this.setState(state);

      return <div onClick = {() => setState({sampleState: 1})}>{state.sampleState}</div>;
   }
}
конвертируется в

const MyDiv = () => {
   const [state, setState] = useState({sampleState: 'hello world'});

   return <div onClick = {() => setState({sampleState: 1})}>{state.sampleState}</div>;
}
Обратите внимание, что средство установки состояния useState не объединяет свойства состояния автоматически, это должно быть покрыто setState(prevState => ({ ...prevState, foo: 1 }));

С несколькими состояниями:

class MyDiv extends Component {
   state = {sampleState: 'hello world'};

   render(){
      const { sampleState } = this.state;
      const setSampleState = sampleState => this.setState({ sampleState });

      return <div onClick = {() => setSampleState(1)}>{sampleState}</div>;
   }
}
конвертируется в

const MyDiv = () => {
   const [sampleState, setSampleState] = useState('hello world');

   return <div onClick = {() => setSampleState(1)}>{sampleState}</div>;
}
 19.11.2018 10:46
Компоненты высокого порядка - вот как мы делали подобные вещи, пока не появились хуки. Вы можете написать простую оболочку компонента высокого порядка для вашего хука.

function withMyHook(Component) {
  return function WrappedComponent(props) {
    const myHookValue = useMyHook();
    return <Component {...props} myHookValue = {myHookValue} />;
  }
}
Хотя на самом деле это не совсем использование ловушки непосредственно из компонента класса, это, по крайней мере, позволит вам использовать логика вашей ловушки из компонента класса без рефакторинга.

class MyComponent extends React.Component {
  render(){
    const myHookValue = this.props.myHookValue;
    return <div>{myHookValue}</div>;
  }
}

export default withMyHook(MyComponent);
 17.01.2019 00:43
Компоненты с сохранением состояния, контейнеры или компоненты на основе классов когда-либо поддерживают функции React Hooks, поэтому нам не нужно React Hooks в компонентах с отслеживанием состояния только в компонентах без состояния.

Некоторая дополнительная информация

Что такое перехватчики React? Так что же такое хуки? Хуки - это новый способ или новый способ написания наших компонентов.

До сих пор, конечно, у нас есть функциональные и классовые компоненты, не так ли? Функциональные компоненты получают реквизиты, а вы возвращаете некоторый JSX-код, который должен отображаться на экране.

Они отлично подходят для презентации, поэтому для визуализации части пользовательского интерфейса, не столько о бизнес-логике, и они обычно ориентированы на одну или несколько целей для каждого компонента.

С другой стороны, компоненты на основе классов также получат реквизиты, но у них также есть это внутреннее состояние. Поэтому компоненты на основе классов - это компоненты, которые на самом деле содержат большую часть нашей бизнес-логики, поэтому под бизнес-логикой я имею в виду такие вещи, как мы делаем HTTP-запрос, и нам нужно обработать ответ и изменить внутреннее состояние приложения или, возможно, даже без HTTP. Пользователь заполняет форму, и мы хотим показать это где-нибудь на экране, нам нужно состояние для этого, нам нужны компоненты на основе классов для этого, и поэтому мы также обычно используем компоненты на основе классов для координации наших других компонентов и передачи нашего состояния вниз. например, в качестве опоры для функциональных компонентов.

Теперь у нас есть одна проблема с этим разделением со всеми преимуществами, которые оно добавляет, но одна проблема, которая у нас есть, заключается в том, что преобразование из одной формы компонента в другую раздражает. Это не очень сложно, но раздражает.

Если вы когда-нибудь оказывались в ситуации, когда вам нужно было преобразовать функциональный компонент в компонент на основе классов, вам придется много печатать и много печатать всегда одни и те же вещи, поэтому это раздражает.

Более серьезная проблема в кавычках состоит в том, что хуки жизненного цикла сложно использовать правильно.

Очевидно, нетрудно добавить componentDidMount и выполнить там некоторый код, но зная, какой крючок жизненного цикла использовать, когда и как его правильно использовать, это может быть сложно, особенно в более сложных приложениях, и в любом случае, было бы неплохо, если бы мы был один способ создания компонентов, и этот суперкомпонент мог затем обрабатывать как состояние, так и побочные эффекты, такие как HTTP-запросы, а также отображать пользовательский интерфейс?

Что ж, в этом и суть крючков. Хуки дают нам новый способ создания функциональных компонентов, и это важно.

 04.04.2019 17:01
React Hooks позволяет использовать функции и жизненный цикл реакции без написания класса. Это похоже на эквивалентную версию компонента класса с гораздо меньшим и удобочитаемым форм-фактором. Вам следует перейти на хуки React, потому что писать их весело. Но вы не можете писать перехватчики реакции внутри компонента класса, как это было введено для функционального компонента.

Это можно легко преобразовать в:

class MyDiv extends React.component
   constructor(){
      this.state = {sampleState:'hello world'}
   }
   render(){
      return <div>{this.state.sampleState}
   }
}

const MyDiv = () => {
   const [sampleState, setSampleState] = useState('hello world');
   return <div>{sampleState}</div>
}
 19.05.2019 15:30
Для меня React.createRef () был полезен.

бывший.:

constructor(props) {
      super(props);
      this.myRef = React.createRef();
   }

...


<FunctionComponent ref = {this.myRef} />
Сообщение происхождения здесь.

 16.09.2019 10:51
Вы можете использовать библиотеку универсальные хуки. Он позволяет вам использовать функции «useXXX» в функции рендеринга компонентов класса.

До сих пор у меня это работало отлично. Единственная проблема заключается в том, что, поскольку он не использует официальные хуки, значения не показывают react-devtools.

Чтобы обойти это, я создал эквивалент, обернув хуки и заставив их хранить свои данные (используя мутацию объекта для предотвращения повторного рендеринга) на component.state.hookValues. (вы можете получить доступ к компоненту, автоматически обернув функции компонента render, чтобы запустить набор currentCompBeingRendered = this)

Дополнительные сведения об этой проблеме (и подробные сведения об обходном пути) см. Здесь: https://github.com/salvoravida/react-universal-hooks/issues/7

 25.10.2019 18:23
Дополняя Хороший ответ Джоэла Кокса

Рендеринг реквизита также позволяет использовать хуки внутри компонентов класса, если требуется большая гибкость:

class MyDiv extends React.Component {
  render() {
    return (
      <HookWrapper
        // pass state/props from inside of MyDiv to Hook
        someProp = {42} 
        // process Hook return value
        render = {hookValue => <div>Hello World! {hookValue}</div>} 
      />
    );
  }
}

function HookWrapper({ someProp, render }) {
  const hookValue = useCustomHook(someProp);
  return render(hookValue);
}
Для хуков побочного эффекта без возвращаемого значения:

function HookWrapper({ someProp }) {
  useCustomHook(someProp);
  return null;
}

// ... usage
<HookWrapper someProp = {42} />
Источник: React Обучение

 06.05.2020 00:18
да, но не напрямую.

Попробуйте react-iifc, подробности в readme.

https://github.com/EnixCoda/react-iifc

 03.07.2020 10:17
Попробуйте with-component-hooks: https://github.com/bplok20010/with-component-hooks
import withComponentHooks from 'with-component-hooks';


class MyComponent extends React.Component {

    render(){
        const props = this.props;
        const [counter, set] = React.useState(0);

        //TODO...

    }
}

export default withComponentHooks(MyComponent)

2. попробуйте response-iifc ： https://github.com/EnixCoda/react-iifc

 22.02.2021 02:53
вы можете добиться этого с помощью общего Компоненты высокого порядка

HOC
import React from 'react';
const withHook = (Component, useHook, hookName = 'hookvalue') => {
  return function WrappedComponent(props) {
    const hookValue = useHook();
    return <Component {...props} {...{[hookName]: hookValue}} />;
  };
};

export default withHook;
использование
class MyComponent extends React.Component {
      render(){
        const myUseHookValue = this.props.myUseHookValue;
        return <div>{myUseHookValue}</div>;
      }
    }

export default withHook(MyComponent, useHook, 'myUseHookValue');
 01.09.2021 10:11
Другие вопросы по теме
Функция тестирования React Unit vs ArrowFunction
Redux - не получает состояние от mapStateToProps
Нажатие кнопки ОК, нажатой после открытия модального окна
Ошибка выполнения React Native Build Ошибка выполнения для задачи ': react-native-get-sms-android: verifyReleaseResources'
Как создать вертикальный разделитель в css?
Стили не работают через стилизованные компоненты
Response-md SelectField onChange не обновляется должным образом
Передайте параметр из внешнего js в React prop
React.js при использовании переменной, не относящейся к состоянию. Получение ошибки, поскольку компонент изменяет неконтролируемый ввод текста, подлежащего контролю
React-Redux: this.props.data.map не является ошибкой функции
Похожие вопросы
Несколько самореференционных ассоциаций типа "многие ко многим" в SQL (Sequelize.js)
Как сделать сортировку нескольких div на Zepto
Суммируйте значения с разделителем тысяч
Нажатие кнопки ОК, нажатой после открытия модального окна
Как открыть функцию из расширения Chrome devtools "до" загрузки страницы?
Загрузка файла перетаскиванием не работает в Firefox
Запрос предварительной проверки JQuery CORS
Простой способ предотвратить добавление объекта с тем же значением в массив
Как отрендерить панель вкладок Ext.js в элемент html div
JQuery: выполнить после завершения анимации
Разделы
Блог

Вопросы

Теги

О сайте

Контакты
info@reddeveloper.ru
Правовая информация
Политика конфиденциальности

Пользовательское соглашение


Находите ответы на сложные технические вопросы по программированию, с которыми сталкиваются инженеры по всему миру в своей ежедневной практике на сайте RedDeveloper.

© 2026 «RedDeveloper.ru»


RedDeveloper
Блог
Вопросы
Теги
Поиск...
Как сравнить oldValues ​​и newValues ​​на React Hooks useEffect?
Вопросы
REACTJS
Как сравнить oldValues ​​и newValues ​​на React Hooks useEffect?
Скажем, у меня есть 3 входа: скорость, sendAmount и receiveAmount. Я поместил эти 3 входа в параметры различий useEffect. Правила следующие:

Если sendAmount изменился, я рассчитываю receiveAmount = sendAmount * rate
Если receiveAmount изменилась, я рассчитываю sendAmount = receiveAmount / rate
Если скорость изменилась, я вычисляю receiveAmount = sendAmount * rate, когда sendAmount > 0, или я вычисляю sendAmount = receiveAmount / rate, когда receiveAmount > 0
Вот коды и ящик https://codesandbox.io/s/pkl6vn7x6j, чтобы продемонстрировать проблему.

Есть ли способ сравнить oldValues и newValues, как на componentDidUpdate, вместо того, чтобы делать 3 обработчика для этого случая?

Спасибо

Вот мое окончательное решение с usePrevioushttps://codesandbox.io/s/30n01w2r06

В этом случае я не могу использовать несколько useEffect, потому что каждое изменение приводит к одному и тому же сетевому вызову. Вот почему я также использую changeCount для отслеживания изменений. Этот changeCount также полезен для отслеживания изменений только локально, поэтому я могу предотвратить ненужные сетевые вызовы из-за изменений с сервера.

 23.11.2018 12:40
283
2
235 919
13
Данный вопрос помечен как решенный
 Ответы 13
 Ответ принят как подходящий
Вы можете написать собственный хук, чтобы предоставить вам предыдущие реквизиты с использованием useRef

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}
а затем использовать его в useEffect

const Component = (props) => {
    const {receiveAmount, sendAmount } = props
    const prevAmount = usePrevious({receiveAmount, sendAmount});
    useEffect(() => {
        if (prevAmount.receiveAmount !== receiveAmount) {

         // process here
        }
        if (prevAmount.sendAmount !== sendAmount) {

         // process here
        }
    }, [receiveAmount, sendAmount])
}
Однако его яснее и, вероятно, лучше и яснее для чтения и понимания, если вы используете два useEffect отдельно для каждого идентификатора изменения, который вы хотите обрабатывать их отдельно.

 23.11.2018 13:22
Поскольку состояние не тесно связано с экземпляром компонента в функциональных компонентах, предыдущее состояние не может быть достигнуто в useEffect без его предварительного сохранения, например, с помощью useRef. Это также означает, что обновление состояния, возможно, было неправильно реализовано в неправильном месте, поскольку предыдущее состояние доступно в функции средства обновления setState.

Это хороший вариант использования useReducer, который предоставляет хранилище в стиле Redux и позволяет реализовать соответствующий шаблон. Обновления состояния выполняются явно, поэтому нет необходимости выяснять, какое свойство состояния обновляется; это уже ясно из отправленного действия.

Вот как это может выглядеть пример:

function reducer({ sendAmount, receiveAmount, rate }, action) {
  switch (action.type) {
    case "sendAmount":
      sendAmount = action.payload;
      return {
        sendAmount,
        receiveAmount: sendAmount * rate,
        rate
      };
    case "receiveAmount":
      receiveAmount = action.payload;
      return {
        sendAmount: receiveAmount / rate,
        receiveAmount,
        rate
      };
    case "rate":
      rate = action.payload;
      return {
        sendAmount: receiveAmount ? receiveAmount / rate : sendAmount,
        receiveAmount: sendAmount ? sendAmount * rate : receiveAmount,
        rate
      };
    default:
      throw new Error();
  }
}

function handleChangeEvent(e) {
  const { name, value } = e.target;
  dispatch({
    type: name,
    payload: value
  });
}

...
const [state, dispatch] = useReducer(reducer, {
  rate: 2,
  sendAmount: 0,
  receiveAmount: 0
});
...
 23.11.2018 13:45
Вариант 1 - запускать useEffect при изменении значения
const Component = (props) => {

  useEffect(() => {
    console.info("val1 has changed");
  }, [val1]);

  return <div>...</div>;
};
Демо

Вариант 2 - хук useHasChanged
Сравнение текущего значения с предыдущим значением является распространенным шаблоном и оправдывает собственный собственный крючок, скрывающий детали реализации.

const Component = (props) => {
  const hasVal1Changed = useHasChanged(val1)

  useEffect(() => {
    if (hasVal1Changed ) {
      console.info("val1 has changed");
    }
  });

  return <div>...</div>;
};

const useHasChanged= (val: any) => {
    const prevVal = usePrevious(val)
    return prevVal !== val
}

const usePrevious = (value) => {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
}


Демо

 29.06.2019 13:58
На случай, если кто-то ищет версию использования TypeScript.

В модуле .tsx:

import { useEffect, useRef } from "react";

const usePrevious = <T extends unknown>(value: T): T | undefined => {
  const ref = useRef<T>();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};
Или в модуле .ts:

import { useEffect, useRef } from "react";

const usePrevious = <T>(value: T): T | undefined => {
  const ref = useRef<T>();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};
 29.08.2019 11:06
Для действительно простого сравнения опор вы можете использовать useEffect, чтобы легко проверить, обновилась ли опора.

const myComponent = ({ prop }) => {
  useEffect(() => {
    ---Do stuffhere----
  }, [prop])
}
useEffect будет запускать ваш код только в том случае, если свойство изменится.

 20.09.2019 11:29
Использование Ref внесет в приложение новый вид ошибки.

Давайте посмотрим на этот случай с использованием usePrevious, который кто-то ранее прокомментировал:

prop.minTime: 5 ==> ref.current = 5 | установить опорный ток
prop.minTime: 5 ==> ref.current = 5 | новое значение равно справочному току
prop.minTime: 8 ==> ref.current = 5 | новое значение НЕ равно справочному току
prop.minTime: 5 ==> ref.current = 5 | новое значение равно справочному току
Как мы видим здесь, мы не обновляем внутренний ref, потому что мы используем useEffect.

 28.11.2019 16:32
Я только что опубликовал реакция-дельта, который решает именно такой сценарий. На мой взгляд, у useEffect слишком много обязанностей.

Обязанности
Он сравнивает все значения в своем массиве зависимостей, используя Object.is.
Он запускает обратные вызовы эффекта / очистки на основе результата # 1
Разделение обязанностей
react-delta разбивает обязанности useEffect на несколько более мелких крючков.

Ответственность # 1

usePrevious(value)
useLatest(value)
useDelta(value, options)
useDeltaArray(valueArray, options)
useDeltaObject(valueObject, options)
some(deltaArray)
every(deltaArray)
Ответственность # 2

useConditionalEffect(callback, boolean)
По моему опыту, этот подход более гибкий, чистый и лаконичный, чем решения useEffect / useRef.

 12.12.2019 16:20
Исходя из принятого ответа, альтернативного решения, не требующего настраиваемого крючка:

const Component = ({ receiveAmount, sendAmount }) => {
  const prevAmount = useRef({ receiveAmount, sendAmount }).current;
  useEffect(() => {
    if (prevAmount.receiveAmount !== receiveAmount) {
     // process here
    }
    if (prevAmount.sendAmount !== sendAmount) {
     // process here
    }
    return () => { 
      prevAmount.receiveAmount = receiveAmount;
      prevAmount.sendAmount = sendAmount;
    };
  }, [receiveAmount, sendAmount]);
};
Это предполагает, что вам действительно нужна ссылка на предыдущие значения для чего-либо в битах «процесс здесь». В противном случае, если ваши условия не выходят за рамки прямого сравнения !==, самым простым решением здесь было бы просто:

const Component = ({ receiveAmount, sendAmount }) => {
  useEffect(() => {
     // process here
  }, [receiveAmount]);

  useEffect(() => {
     // process here
  }, [sendAmount]);
};
 08.04.2020 22:09
Вот пользовательский хук, который я использую, который, на мой взгляд, более интуитивно понятен, чем использование usePrevious.

import { useRef, useEffect } from 'react'

// useTransition :: Array a => (a -> Void, a) -> Void
//                              |_______|  |
//                                  |      |
//                              callback  deps
//
// The useTransition hook is similar to the useEffect hook. It requires
// a callback function and an array of dependencies. Unlike the useEffect
// hook, the callback function is only called when the dependencies change.
// Hence, it's not called when the component mounts because there is no change
// in the dependencies. The callback function is supplied the previous array of
// dependencies which it can use to perform transition-based effects.
const useTransition = (callback, deps) => {
  const func = useRef(null)

  useEffect(() => {
    func.current = callback
  }, [callback])

  const args = useRef(null)

  useEffect(() => {
    if (args.current !== null) func.current(...args.current)
    args.current = deps
  }, deps)
}
Вы бы использовали useTransition следующим образом.

useTransition((prevRate, prevSendAmount, prevReceiveAmount) => {
  if (sendAmount !== prevSendAmount || rate !== prevRate && sendAmount > 0) {
    const newReceiveAmount = sendAmount * rate
    // do something
  } else {
    const newSendAmount = receiveAmount / rate
    // do something
  }
}, [rate, sendAmount, receiveAmount])
Надеюсь, это поможет.

 08.05.2020 15:22
Если вы предпочитаете подход замены useEffect:

const usePreviousEffect = (fn, inputs = []) => {
  const previousInputsRef = useRef([...inputs])

  useEffect(() => {
    fn(previousInputsRef.current)
    previousInputsRef.current = [...inputs]
  }, inputs)
}
И используйте это так:

usePreviousEffect(
  ([prevReceiveAmount, prevSendAmount]) => {
    if (prevReceiveAmount !== receiveAmount) // side effect here
    if (prevSendAmount !== sendAmount) // side effect here
  },
  [receiveAmount, sendAmount]
)
Обратите внимание, что за время выполнения эффекта первый предыдущие значения, переданные в ваш fn, будут такими же, как ваши исходные входные значения. Это будет иметь значение для вас только в том случае, если вы захотите что-то сделать при изменении значения не.

 12.10.2020 16:24
Вы можете использовать useImmer вместо useState и получить доступ к состоянию. Пример: https://css-tricks.com/build-a-chat-app-using-react-hooks-in-100-lines-of-code/

 18.10.2020 05:57
В вашем случае (простой объект):

useEffect(()=>{
  // your logic
}, [rate, sendAmount, receiveAmount])
В другом случае (сложный объект)

const {cityInfo} = props;
useEffect(()=>{
  // some logic
}, [cityInfo.cityId])
 28.12.2020 10:00
Мне не понравился ни один из приведенных выше ответов, мне нужна была возможность передавать массив логических значений, и если одно из них истинно, поэтому повторно выполните рендеринг

/**
 * effect fires if one of the conditions in the dependency array is true
 */
export const useEffectCompare = (callback: () => void, conditions: boolean[], effect = useEffect) => {
  const shouldUpdate = useRef(false);
  if (conditions.some((cond) => cond)) shouldUpdate.current = !shouldUpdate.current;
  effect(callback, [shouldUpdate.current]);
};

//usage - will fire because one of the dependencies is true.
useEffectCompare(() => {
  console.info('test!');
}, [false, true]);
 25.07.2021 12:12
Другие вопросы по теме
React Hooks - измененное состояние не отображается сразу
Реагировать - использовать ref в компоненте И передать его родителю в реквизитах
Импортировать хуки в React Typescript
TypeError при использовании хуков React - useReducer
Используйте ловушку React для реализации счетчика с самоприращением
Когда и как выбирать между прохождением React Hooks и старых HOC props?
Неперехваченная ошибка: хуки могут быть вызваны только внутри тела функционального компонента в компоненте класса
Правильный способ получения данных с помощью реакции с помощью socket.io
Пользовательский хук React `useFetch` - нужно ли поддерживать несколько состояний?
Как отслеживать хуки React?
Похожие вопросы
Не удается прочитать свойство muiName для undefined в t.isMuiElement?
Как вывести изображение с сервера в nodejs и gridfs на интерфейс в reactjs
Отказался от применения стиля из http: // localhost: 8081 / src / assets / materialIcons.css, потому что это MIME
Реагировать на создание структуры папок с помощью команды ubuntu? какая версия npm используется?
Могу ли я сделать что-то подобное в React внутри компонента?
Localhost http 500 внутренняя ошибка сервера полоса реагирует
React Native - переход на другой экран из компонента в навигации по вкладкам
Передача второго аргумента (ownProps) в mapDispatchToProps - это плохая практика?
Удалите знак% согласно условию в React
Компонент не перерисовывается при нажатии на ссылку
Разделы
Блог

Вопросы

Теги

О сайте

Контакты
info@reddeveloper.ru
Правовая информация
Политика конфиденциальности

Пользовательское соглашение


Находите ответы на сложные технические вопросы по программированию, с которыми сталкиваются инженеры по всему миру в своей ежедневной практике на сайте RedDeveloper.

© 2026 «RedDeveloper.ru»

RedDeveloper
Блог
Вопросы
Теги
Поиск...
Текст обрезается в Android для реагирования на родной
Вопросы
ANDROID
Текст обрезается в Android для реагирования на родной
Я работаю над React Native, и я новичок в этом. Я пытаюсь отобразить текст, но он отображается в конце текста Android ... и не показывает полный текст. Это происходит только в Android, в iOS работает нормально.

Я написал следующий код

<Text
  numberOfLines = {1}
  adjustsFontSizeToFit
  minimumFontScale = {0.1}
  style = {labelStyle} //labelStyle nothing I have written
></Text>
Может ли кто-нибудь предложить мне, где я делаю неправильно в коде?

Текст обрезается в Android для реагирования на родной

 18.02.2019 16:27
14
1
20 570
13
Данный вопрос помечен как решенный
 Ответы 13
 Ответ принят как подходящий
Обычно это происходит, когда у вас есть это: fontWeight:bold и ваше устройство Android, например, Oneplus или Oppo (хотя есть и другие бренды), это конфликт с вашим системным шрифтом.
Чтобы исправить, вы можете добавить другие fontFamily или поставить 2 пробела перед словом, кажется, это тоже работает.
См.: https://github.com/facebook/react-native/issues/15114

Редактировать

Установка textBreakStrategy на simple в текстовом элементе также работает для некоторых устройств, таких как Samsung Galaxy S10, Google Pixel

 18.02.2019 16:41
Если вы удалите numberOfLines, он будет отображаться правильно. Если он по-прежнему не отображается, возможно, родительское представление имеет фиксированную высоту (или maxHeight).

 18.02.2019 18:01
У меня была проблема с вырезанием текста по горизонтали. используя lineHeight для текстовых компонентов, и бум, моя проблема решена

 17.09.2019 18:19
Как оказалось, последняя строка наших абзацев обрезалась из-за 'highQuality' значения параметра textBreakStrategy. Мы изменили это на 'simple', и теперь отображается весь наш текст. Судя по всему highQuality на самом деле низкое качество.

 08.01.2020 22:24
Для тех, кто нашел предоставленные решения, не работающие, как в моем случае вот мое решение для вырезания текста на телефонах OnePlus:

просто установите стиль компонента с этими свойствами

alignSelf: 'stretch',
textAlign: 'center',
это, вероятно, эквивалент настройки Android match_parent. Не проверял, как это повлияет на iOS, поскольку сейчас у меня нет такой возможности.

 14.01.2020 16:29
Вы можете исправить это, добавив дополнительный пробел в конце, который равен не хороший обходной путь.

Рекомендуемые: Включите семейство шрифтов по умолчанию в ваше приложение, и оно будет одинаково работать на всех устройствах.

 03.04.2020 12:41
После долгой борьбы с этим я, наконец, понял это.

Похоже, что по умолчанию Text устанавливает для свойства textBreakСтратегия значение *highQuality*.

Изменение его на * простое * решило мою проблему.

Ссылка здесь: https://reactnative.dev/docs/0.56/text#textbreakstrategy

 09.04.2020 21:36
В моем случае добавление fontFamily: 'arial' к текстовому компоненту помогло. Даже fontFamily: 'abc' тоже работает. Я думаю, что для этого просто нужно установить fontFamily.

 05.08.2020 17:10
Добавление дополнительного пространства или добавление textBreakStrategy как «простого» у меня не сработало.

Я добавил alignSelf:"stretch" для стиля компонента «Текст», и, наконец, это сработало. Если вы хотите, чтобы текст был в центре, просто добавьте textAlign: "center".

Надеюсь, это кому-то поможет.

 06.08.2020 18:41
Есть и другие лучшие способы решить эту проблему. но в моем случае добавление custom font устранило проблему с вырезанием текста и выравниванием шрифта на разных устройствах.

Добавление пользовательского шрифта может легко решить проблему.

Как добавить пользовательские шрифты = проверить этот ответ StackOverflow

реактивные официальные документы по пользовательским шрифтам

 06.02.2021 05:02
Добавление стиля flex: x к <View> вокруг вырезаемого элемента <Text> сработало для меня при использовании OnePlus 7T.

 23.02.2021 10:52
попробуй это.

удалить fontWight : полужирный
добавьте стиль в текстовый тег, например, = ширина: «100%» (в соответствии с вашим размером текста)
 02.03.2021 11:51
Я просто добавил отступы, и проблема решена

если текст обрезан слева, просто добавьте paddingLeft:10

в моем случае текст был обрезан сверху, когда я увеличивал размер шрифта, поэтому я добавил paddingTop:20

если текст обрезан сверху добавить textAlignVertical: 'bottom'

 14.09.2021 09:05
Другие вопросы по теме
<select> не меняет выбранный <option> при установке значения по умолчанию
Реакция — упражнение на собеседование
React redux не поддерживает состояние
React Infinite Scroller — два дочерних элемента с одним и тем же ключом. Функция loadMore вызывается дважды
Не удается заставить приложение Sringboot увидеть мое приложение ReactJS
Как изменить цвет текста при выборе с помощью библиотеки эмоций
Как отобразить таблицу на той же странице, нажав на ссылку?
React Native не может вернуть массив
Пользовательский метод сортировки для столбца в ReactTable
React Native дочерний компонент не отображается в событии onPress
Похожие вопросы
Как я могу переопределить ограничения логического PhotoViewAttacher onFling (MotionEvent, MotionEvent, float, float)?
Android Bluetooth Low Energy отправляет сообщение на устройство для ответа
Использование std::bad_function_call с LIBCPP_ABI_UNSTABLE
Поместите ошибку автозаполнения при автозаполнении: OVER_QUERY_LIMIT
Совместно используемые библиотеки C++ имеют повторяющиеся символы
Как мне поместить видео в этот образец игры Unity (Trash Dash)?
Как заставить viewpager скользить изображение с URL-адресом изображения?
Как перезапустить камеру в ZXing после того, как она найдет QR-код
Создать представление с прозрачным кругом
DialogFragment не отображается
Разделы
Блог

Вопросы

Теги

О сайте

Контакты
info@reddeveloper.ru
Правовая информация
Политика конфиденциальности

Пользовательское соглашение


Находите ответы на сложные технические вопросы по программированию, с которыми сталкиваются инженеры по всему миру в своей ежедневной практике на сайте RedDeveloper.

© 2026 «RedDeveloper.ru»

RedDeveloper
Блог
Вопросы
Теги
Поиск...
Сброс в исходное состояние с помощью React Hooks
Вопросы
REACTJS
Сброс в исходное состояние с помощью React Hooks
В настоящее время я работаю над формой регистрации, и ниже приведен фрагмент моего кода:

const Signup = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')

    const clearState = () => {
        setUsername('')
        setEmail('')
        setPassword('')
        setPasswordConfirmation('')
    }

    const handleSubmit = signupUser => e => {
        e.preventDefault()
        signupUser().then(data => {
            console.info(data)
            clearState() // <-----------
        })
    }

    return <JSX />
}

export default Signup
Каждая часть состояния используется для контролируемого ввода формы.

По сути, то, что я хочу сделать, это после того, как пользователь успешно зарегистрировался, я хочу, чтобы состояние вернулось к исходному состоянию с очищенными полями.

Крайне важно вручную установить каждую часть состояния обратно в пустые строкиclearState Мне было интересно, есть ли метод или функция, поставляемая с React, которая сбрасывает состояние обратно к его начальным значениям?

 27.02.2019 00:39
88
0
147 757
13
Данный вопрос помечен как решенный
 Ответы 13
Насколько я знаю (читая реактивные документы), пока нет способа сделать это.

 27.02.2019 00:46
Вы можете использовать одну переменную состояния, как описано в FAQ здесь: https://reactjs.org/docs/hooks-faq.html#should-i-use-one-or-many-state-variables

Конечно, это зависит от вашего варианта использования.

Смена ключа компонента из родительского контейнера, конечно, также автоматически сбросит его.

 27.02.2019 00:47
 Ответ принят как подходящий
К сожалению, нет встроенного способа установить состояние в его начальное значение.

Ваш код выглядит хорошо, но если вы хотите уменьшить количество необходимых функций, вы можете поместить все состояние формы в один объект переменной состояния и сбросить его до исходного объекта.

Пример

const { useState } = React;

function signupUser() {
  return new Promise(resolve => {
    setTimeout(resolve, 1000);
  });
}

const initialState = {
  username: "",
  email: "",
  password: "",
  passwordConfirmation: ""
};

const Signup = () => {
  const [
    { username, email, password, passwordConfirmation },
    setState
  ] = useState(initialState);

  const clearState = () => {
    setState({ ...initialState });
  };

  const onChange = e => {
    const { name, value } = e.target;
    setState(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    signupUser().then(clearState);
  };

  return (
    <form onSubmit = {handleSubmit}>
      <div>
        <label>
          Username:
          <input value = {username} name = "username" onChange = {onChange} />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input value = {email} name = "email" onChange = {onChange} />
        </label>
      </div>
      <div>
        <label>
          Password:
          <input
            value = {password}
            name = "password"
            type = "password"
            onChange = {onChange}
          />
        </label>
      </div>
      <div>
        <label>
          Confirm Password:
          <input
            value = {passwordConfirmation}
            name = "passwordConfirmation"
            type = "password"
            onChange = {onChange}
          />
        </label>
      </div>
      <button>Submit</button>
    </form>
  );
};

ReactDOM.render(<Signup />, document.getElementById("root"));
<script src = "https://unpkg.com/react@16/umd/react.development.js"></script>
<script src = "https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>

<div id = "root"></div>
 27.02.2019 00:52
Наряду с другими ответами я бы порекомендовал подобрать вспомогательную библиотеку нравится или создать собственную абстракцию поверх хуков, если это то, что вы будете делать часто.

useState и друзья на самом деле являются просто низкоуровневыми примитивами для вас, пользователя, для создания более полезных крючков поверх них. У меня есть проекты, в которых необработанные useState звонки довольно редки.

 27.02.2019 00:53
Я полностью согласился с ответом @Tholle.

Если вам нужно запустить некоторые функции после очистки состояния

const clearState = () => {
  setState({...initialState});
  return {
    foo,
    bar,
    // ...
  };
};

// when component is unmounted

() => clearState().foo();
() => clearState().bar();
 22.05.2019 05:57
У меня был похожий вариант использования. Полностью не связан с механизмом входа в систему, регистрацией, но я изменил его, чтобы он был связан с вашим вариантом использования.

На мой взгляд, простой способ решить эту проблему — использовать родительский компонент.

const initUser = {
  name: '',
  email: '',
  password: '',
  passwordConfirmation: ''      
}

const LoginManager = () => {
  const [user, setUser] = useState(initUser)

  return <Signup user = {user} resetUser = {setUser} />
}

const Signup = ({user, resetUser}) => {
    const [username, setUsername] = useState(user.name)
    const [email, setEmail] = useState(user.email)
    const [password, setPassword] = useState(user.password)
    const [passwordConfirmation, setPasswordConfirmation] = useState(user.passwordConfirmation)


    const handleSubmit = signupUser => e => {
        e.preventDefault()
        signupUser().then(data => {
            console.info(data)
            resetUser(initUser) // <-----------
        })
    }

    return <JSX />
}

export default Signup
 12.06.2019 15:22
Я думаю, что проголосовавший ответ все еще правильный, но недавно React выпустил новый встроенный useReducer, который, по их собственным словам,

handy for resetting the state later in response to an action

https://reactjs.org/docs/hooks-reference.html#usereducer

Также в нем говорится, что использованиеReducer обычно предпочтительнее, когда у вас есть сложная логика состояния, которая включает несколько подзначений или когда следующее состояние зависит от предыдущего.

Используя тот же образец в ответе, за который проголосовали, вы можете использовать useReducer следующим образом:

Javascript
import React, { useReducer } from "react";

const initialState = {
    username: "",
    email: "",
    password: "",
    passwordConfirmation: "",
};

const reducer = (state, action) => {
    if (action.type === "reset") {
        return initialState;
    }

    const result = { ...state };
    result[action.type] = action.value;
    return result;
};

const Signup = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { username, email, password, passwordConfirmation } = state;

    const handleSubmit = e => {
        e.preventDefault();

        /* fetch api */

        /* clear state */
        dispatch({ type: "reset" });
    };

    const onChange = e => {
        const { name, value } = e.target;
        dispatch({ type: name, value });
    };

    return (
        <form onSubmit = {handleSubmit}>
            <div>
                <label>
                    Username:
                    <input value = {username} name = "username" onChange = {onChange} />
                </label>
            </div>
            <div>
                <label>
                    Email:
                    <input value = {email} name = "email" onChange = {onChange} />
                </label>
            </div>
            <div>
                <label>
                    Password:
                    <input
                        value = {password}
                        name = "password"
                        type = "password"
                        onChange = {onChange}
                    />
                </label>
            </div>
            <div>
                <label>
                    Confirm Password:
                    <input
                        value = {passwordConfirmation}
                        name = "passwordConfirmation"
                        type = "password"
                        onChange = {onChange}
                    />
                </label>
            </div>
            <button>Submit</button>
        </form>
    );
};

export default Signup;
Машинопись
import React, { FC, Reducer, useReducer } from "react";

interface IState {
    email: string;
    password: string;
    passwordConfirmation: string;
    username: string;
}

interface IAction {
    type: string;
    value?: string;
}

const initialState: IState = {
    email: "",
    password: "",
    passwordConfirmation: "",
    username: "",
};

const reducer = (state: IState, action: IAction) => {
    if (action.type === "reset") {
        return initialState;
    }

    const result: IState = { ...state };
    result[action.type] = action.value;
    return result;
};

export const Signup: FC = props => {
    const [state, dispatch] = useReducer<Reducer<IState, IAction>, IState>(reducer, initialState, () => initialState);
    const { username, email, password, passwordConfirmation } = state;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        /* fetch api */

        /* clear state */
        dispatch({ type: "reset" });
    };

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        dispatch({ type: name, value });
    };

    return (
        <form onSubmit = {handleSubmit}>
            <div>
                <label>
                    Username:
                    <input value = {username} name = "username" onChange = {onChange} />
                </label>
            </div>
            <div>
                <label>
                    Email:
                    <input value = {email} name = "email" onChange = {onChange} />
                </label>
            </div>
            <div>
                <label>
                    Password:
                    <input
                        value = {password}
                        name = "password"
                        type = "password"
                        onChange = {onChange}
                    />
                </label>
            </div>
            <div>
                <label>
                    Confirm Password:
                    <input
                        value = {passwordConfirmation}
                        name = "passwordConfirmation"
                        type = "password"
                        onChange = {onChange}
                    />
                </label>
            </div>
            <button>Submit</button>
        </form>
    );
};
Обратите внимание, что я создал эту reducer функцию const как можно более универсальной, но вы можете полностью изменить ее и протестировать различные типы действий (кроме простых имен свойств состояния) и выполнять сложные вычисления перед возвратом измененного состояния. В приведенной выше ссылке есть несколько примеров.

 16.09.2019 12:52
Вот как вы можете сбросить входные значения (из объекта) в хуки после отправки формы.

Вы можете определить несколько входных значений в одном и том же useState, например имя, фамилия, и т.д...

const [state, setState] = React.useState({ firstName: "", lastName: "" });

Образец кода.

export default function App() {
  const [state, setState] = React.useState({ firstName: "", lastName: "" });
  const handleSubmit = e => {
    e.preventDefault();
    setState({firstName:'',lastName:''})
  };
  const handleChangeEvent = e => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  console.info(state)
  return (
    <form onSubmit = {handleSubmit}>
      <input
        type = "text"
        name = "firstName"
        placeholder = "Enter first name"
        value = {state.firstName}
        onChange = {handleChangeEvent}
      />
      <input
        type = "text"
        name = "lastName"
        placeholder = "Enter last name"
        value = {state.lastName}
        onChange = {handleChangeEvent}
      />
      <input type = "submit" value = "Submit" />
    </form>
  );
}
If you want multiple input to define in object instead of declaring seperately.

 08.01.2020 10:31
Вы могли бы использовать useRef в хуках примерно так

 const myForm = useRef(null)

 const submit = () => {

   myForm.current.reset(); // will reset the entire form :)

   }

  <form ref = {myForm} onSubmit = {submit}>

   <input type = "text" name = "name" placeholder = "John Doe">

     <input type = "email" name = "name" placeholder = "usman@gmail.com">

     <button type = "submit">Submit</button>

 </form>
 23.01.2020 11:55
Если вам нужен быстрый и грязный метод, вы можете попробовать просто изменить ключ компонента, что заставит React размонтировать ваш старый экземпляр компонента и смонтировать новый.

Я использую Lodash здесь для создания уникального одноразового идентификатора, но вы, вероятно, также можете обойтись Date.now() или подобным, предполагая, что необходимое временное разрешение превышает 1 миллисекунду.

Я передаю ключ второй раз, чтобы debugKey было легче видеть, что происходит, но это не обязательно.

const StatefulComponent = ({ doReset, debugKey }) => {
  const [counter, setCounter] = React.useState(0);
  const increment = () => setCounter(prev => prev + 1); 
  return (
    <React.Fragment>
      <p>{`Counter: ${counter}`}</p>
      <p>{`key=${debugKey}`}</p>
      <button onClick = {increment}>Increment counter</button>
      <button onClick = {doReset}>Reset component</button>
    </React.Fragment>
  );
};

const generateUniqueKey = () => `child_${_.uniqueId()}`;

const App = () => {
  const [childKey, setChildKey] = React.useState(generateUniqueKey());
  const doReset = () => setChildKey(generateUniqueKey());
  return (
    <div className = "App">
      <StatefulComponent key = {childKey} debugKey = {childKey} doReset = {doReset} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
<script src = "https://cdn.jsdelivr.net/npm/lodash@4.17.15/lodash.min.js"></script>
<script src = "https://cdnjs.cloudflare.com/ajax/libs/react/16.13.1/umd/react.production.min.js"></script>
<script src = "https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.13.1/umd/react-dom.production.min.js"></script>


<div id = "root"></div>
 15.05.2020 19:25
Короткий ответ
Это имеет очень простое решение. Вы можете изменить ключевую опору, где находится компонент рендеринга. например, когда у нас есть компонент для редактирования, мы можем передать другой ключ, чтобы очистить предыдущие состояния.

return <Component key = {<different key>} />
 07.11.2020 11:32
Я только что написал собственный хук, который возвращает настоящие хуки вместе с функцией resetState.

Использование:

const [{
    foo: [foo, setFoo],
    bar: [bar, setBar],
  },
  resetState,
] = useStateWithReset({
  foo: null,
  bar: [],
})

// - OR -

const [
    [foo, setFoo],
    [bar, setBar],
  ],
  resetState,
] = useStateWithReset([
  null,
  [],
])
Последний менее читаем, но первый дублирует ключи, поэтому идеального решения нет.

Код:

const useStateWithReset = initialState => {
  const hooksArray = Object.fromEntries(
    Object.entries(initialState).map(([k, v]) => {
      return [k, useState(v)]
    })
  );
  const resetState = () =>
    Object.entries(initialState).map(
      ([k, v]) => hooksArray[k][1](v)
    );
  return [hooksArray, resetState];
};
 25.02.2021 13:51
Вы можете «обернуть» свой useState в другое использование [любое имя, которое вы хотите] и включить функцию сброса, то есть как пользовательский хук, как предложил Августин в своем ответе.

Взяв пример формы ввода, поскольку есть хороший реальный пример, который вы можете использовать и просмотреть источник, как указано ниже, вы должны использовать настраиваемый хук, подобный этому:

function ContactForm(props) {
  const [state, handleSubmit, reset] = useForm("contactForm");

  const clearForm = e => {
    e.preventDefault();
    reset();  // <---- the extra reset function
    // Any other code you want like hiding 
    // or removing the form div from the 
    // DOM etc.
  }

  if (state.succeeded) {
      return (
        <React.Fragment>
          <p>Thanks fro your input!</p>
          <button className = "default-button" onClick = {clearForm}>Ok</button>
        </React.Fragment>
      );
  }
  return (
      <form onSubmit = {handleSubmit}> // <-- the standard setSate type function
      <label htmlFor = "email" className = "form-element">
        Email Address
      </label>
      <input
        id = "email"
        type = "email"
        name = "email"
        className = "form-element"
      />
      // etc - Your form code...
      <button className = "default-button" type = "submit" disabled = {state.submitting}>
        Submit
      </button>
    </form>
  );
}
Вы можете увидеть это в действии в примерах реакции репозитория fomrspree git (на момент написания) — функция определена в исходном коде useForm, и есть пример ее использования в 'useForm.test.js':

https://github.com/formspree/formspree-реагировать
 12.01.2022 10:06
Другие вопросы по теме
Действие useReducer отправлено дважды
Расширение функционального компонента React Stateful
React State возвращает несинхронизированные данные
React.useState не перезагружает состояние из реквизита
Как useState() в реакции получает правильный объект состояния и функцию для функционального компонента при использовании хука состояния?
Как сфокусироваться на элементе списка с помощью хука реакции useRef
Как показать/скрыть элемент array.map()
Реагировать: useContext, как получить его из внешнего компонента?
Как вызвать событие изменения в компоненте реакции-выбора с библиотекой реакции-тестирования?
React Hooks и useContext: хороший ли это паттерн?
Похожие вопросы
Наследование компонента приложения Nextjs (pages/_app.js) в ReasonReact
Реагировать на хук, эквивалентный функции обратного вызова после установки состояния
Компонент реакции не удалось скомпилировать
Как распечатать ответное сообщение в React Native
Локальная стратегия Passport не работает с React
Как я могу хранить данные json из выборки и получать к ним доступ к реакции?
Как я могу использовать карту для отображения списка элементов, но сгруппированных по каждым 3 элементам?
Рендеринг определенных элементов из массива в React
ReactJS: как обновить компонент без задержки в 1 клик
Реагировать на собственное состояние TypeError: один из источников для назначения имеет перечисляемый ключ в цепочке прототипов
Разделы
Блог

Вопросы

Теги

О сайте

Контакты
info@reddeveloper.ru
Правовая информация
Политика конфиденциальности

Пользовательское соглашение


Находите ответы на сложные технические вопросы по программированию, с которыми сталкиваются инженеры по всему миру в своей ежедневной практике на сайте RedDeveloper.

© 2026 «RedDeveloper.ru»

RedDeveloper
Блог
Вопросы
Теги
Поиск...
Как я могу использовать несколько ссылок для массива элементов с хуками?
Вопросы
JAVASCRIPT
Как я могу использовать несколько ссылок для массива элементов с хуками?
Насколько я понял, я могу использовать refs для одного элемента следующим образом:

const { useRef, useState, useEffect } = React;

const App = () => {
  const elRef = useRef();
  const [elWidth, setElWidth] = useState();

  useEffect(() => {
    setElWidth(elRef.current.offsetWidth);
  }, []);

  return (
    <div>
      <div ref = {elRef} style = {{ width: "100px" }}>
        Width is: {elWidth}
      </div>
    </div>
  );
};

ReactDOM.render(
  <App />,
  document.getElementById("root")
);
<script src = "https://unpkg.com/react@16/umd/react.production.min.js"></script>
<script src = "https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>

<div id = "root"></div>
Как я могу реализовать это для массива элементов? Явно не так: (я это знал, даже не пробовал :)

const { useRef, useState, useEffect } = React;

const App = () => {
  const elRef = useRef();
  const [elWidth, setElWidth] = useState();

  useEffect(() => {
    setElWidth(elRef.current.offsetWidth);
  }, []);

  return (
    <div>
      {[1, 2, 3].map(el => (
        <div ref = {elRef} style = {{ width: `${el * 100}px` }}>
          Width is: {elWidth}
        </div>
      ))}
    </div>
  );
};

ReactDOM.render(
  <App />,
  document.getElementById("root")
);
<script src = "https://unpkg.com/react@16/umd/react.production.min.js"></script>
<script src = "https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>

<div id = "root"></div>
Я видел это и, следовательно, это. Но я все еще не понимаю, как реализовать это предложение для этого простого случая.

 11.02.2019 16:18
141
4
146 526
10
Данный вопрос помечен как решенный
 Ответы 10
 Ответ принят как подходящий
Ссылка изначально является просто объектом { current: null }. useRef хранит ссылку на этот объект между рендерами компонентов. Значение current в первую очередь предназначено для ссылок на компоненты, но может содержать что угодно.

В какой-то момент должен быть массив ссылок. В случае, если длина массива может варьироваться между рендерами, массив должен масштабироваться соответствующим образом:

const arrLength = arr.length;
const [elRefs, setElRefs] = React.useState([]);

React.useEffect(() => {
  // add or remove refs
  setElRefs((elRefs) =>
    Array(arrLength)
      .fill()
      .map((_, i) => elRefs[i] || createRef()),
  );
}, [arrLength]);

return (
  <div>
    {arr.map((el, i) => (
      <div ref = {elRefs[i]} style = {...}>
        ...
      </div>
    ))}
  </div>
);
Этот фрагмент кода можно оптимизировать, развернув useEffect и заменив useState на useRef, но следует отметить, что использование побочных эффектов в функции рендеринга обычно считается плохой практикой:

const arrLength = arr.length;
const elRefs = React.useRef([]);

if (elRefs.current.length !== arrLength) {
  // add or remove refs
  elRefs.current = Array(arrLength)
    .fill()
    .map((_, i) => elRefs.current[i] || createRef());
}

return (
  <div>
    {arr.map((el, i) => (
      <div ref = {elRefs.current[i]} style = {...}>
        ...
      </div>
    ))}
  </div>
);
 11.02.2019 16:32
Обратите внимание, что вы не должны использовать useRef в цикле по простой причине: порядок используемых хуков имеет значение!

В документации говорится

Don’t call Hooks inside loops, conditions, or nested functions. Instead, always use Hooks at the top level of your React function. By following this rule, you ensure that Hooks are called in the same order each time a component renders. That’s what allows React to correctly preserve the state of Hooks between multiple useState and useEffect calls. (If you’re curious, we’ll explain this in depth below.)

Но учтите, что это, очевидно, относится к динамическим массивам... но если вы используете статические массивы (вы ВСЕГДА визуализируете одно и то же количество компонентов), не беспокойтесь об этом слишком сильно, знайте, что вы делаете, и используйте это. ?

 11.02.2019 17:09
Как вы нельзя использовать хуки внутри циклов, вот решение, чтобы заставить его работать, когда массив меняется с течением времени.

Я полагаю, что массив исходит из реквизита:

const App = props => {
    const itemsRef = useRef([]);
    // you can access the elements with itemsRef.current[n]

    useEffect(() => {
       itemsRef.current = itemsRef.current.slice(0, props.items.length);
    }, [props.items]);

    return props.items.map((item, i) => (
      <div 
          key = {i} 
          ref = {el => itemsRef.current[i] = el} 
          style = {{ width: `${(i + 1) * 100}px` }}>
        ...
      </div>
    ));
}
 09.05.2019 17:42
Вы можете использовать массив (или объект), чтобы отслеживать все ссылки и использовать метод для добавления ссылок в массив.

ПРИМЕЧАНИЕ. Если вы добавляете и удаляете ссылки, вам придется очищать массив каждый цикл рендеринга.

import React, { useRef } from "react";

const MyComponent = () => {
   // intialize as en empty array
   const refs = useRefs([]); // or an {}
   // Make it empty at every render cycle as we will get the full list of it at the end of the render cycle
   refs.current = []; // or an {}

   // since it is an array we need to method to add the refs
   const addToRefs = el => {
     if (el && !refs.current.includes(el)) {
       refs.current.push(el);
     }
    };
    return (
     <div className = "App">
       {[1,2,3,4].map(val => (
         <div key = {val} ref = {addToRefs}>
           {val}
         </div>
       ))}
     </div>
   );

}
рабочий пример https://codesandbox.io/s/serene-hermann-kqpsu

 26.01.2020 04:07
Мы не можем использовать состояние, потому что нам нужно, чтобы ссылка была доступна до вызова метода рендеринга. Мы не можем вызывать useRef произвольное количество раз, но можем вызвать его один раз:

Предполагая, что arr - это реквизит с множеством вещей:

const refs = useRef([]);
// free any refs that we're not using anymore
refs.current = refs.current.slice(0, arr.length);
// initialize any new refs
for (let step = refs.current.length; step < arr.length; step++) {
    refs.current[step] = createRef();
}
 19.02.2020 22:51
Есть два способа

используйте один ссылка с несколькими элементами Текущий
const inputRef = useRef([]);

inputRef.current[idx].focus();

<input
  ref = {el => inputRef.current[idx] = el}
/>
const {useRef} = React;
const App = () => {
  const list = [...Array(8).keys()];
  const inputRef = useRef([]);
  const handler = idx => e => {
    const next = inputRef.current[idx + 1];
    if (next) {
      next.focus()
    }
  };
  return (
    <div className = "App">
      <div className = "input_boxes">
        {list.map(x => (
        <div>
          <input
            key = {x}
            ref = {el => inputRef.current[x] = el} 
            onChange = {handler(x)}
            type = "number"
            className = "otp_box"
          />
        </div>
        ))}
      </div>
    </div>
  );
}
ReactDOM.render(<App />, document.getElementById("root"));
<div id = "root"></div>
<script src = "https://cdnjs.cloudflare.com/ajax/libs/react/16.12.0/umd/react.production.min.js"></script>
<script src = "https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.12.0/umd/react-dom.production.min.js"></script>
используйте массив ссылка

Как сказано в приведенном выше сообщении, это не рекомендуется, поскольку официальное руководство (и внутренняя проверка на ворсинки) не позволит ему пройти.

Don’t call Hooks inside loops, conditions, or nested functions. Instead, always use Hooks at the top level of your React function. By following this rule, you ensure that Hooks are called in the same order each time a component renders.

Однако, поскольку это не наш текущий случай, приведенная ниже демонстрация все еще работает, но не рекомендуется.

const inputRef = list.map(x => useRef(null));

inputRef[idx].current.focus();

<input
  ref = {inputRef[idx]}
/>
const {useRef} = React;
const App = () => {
const list = [...Array(8).keys()];
const inputRef = list.map(x => useRef(null));
const handler = idx => () => {
  const next = inputRef[idx + 1];
  if (next) {
    next.current.focus();
  }
};
return (
  <div className = "App">
    <div className = "input_boxes">
      {list.map(x => (
      <div>
        <input
          key = {x}
          ref = {inputRef[x]}
          onChange = {handler(x)}
          type = "number"
          className = "otp_box"
        />
      </div>
      ))}
    </div>
  </div>
);
}
ReactDOM.render(<App />, document.getElementById("root"));
<div id = "root"></div>
<script src = "https://cdnjs.cloudflare.com/ajax/libs/react/16.12.0/umd/react.production.min.js"></script>
<script src = "https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.12.0/umd/react-dom.production.min.js"></script>
 01.04.2020 20:08
Предполагая, что ваш массив содержит не примитивы, вы можете использовать WeakMap в качестве значения Ref.

function MyComp(props) {
    const itemsRef = React.useRef(new WeakMap())

    // access an item's ref using itemsRef.get(someItem)

    render (
        <ul>
            {props.items.map(item => (
                <li ref = {el => itemsRef.current.set(item, el)}>
                    {item.label}
                </li>
            )}
        </ul>
    )
}
 10.06.2020 10:21
Если я правильно понимаю, useEffect следует использовать только для побочных эффектов, по этой причине вместо этого я решил использовать useMemo.

const App = props => {
    const itemsRef = useMemo(() => Array(props.items.length).fill().map(() => createRef()), [props.items]);

    return props.items.map((item, i) => (
        <div 
            key = {i} 
            ref = {itemsRef[i]} 
            style = {{ width: `${(i + 1) * 100}px` }}>
        ...
        </div>
    ));
};
Затем, если вы хотите манипулировать элементами/использовать побочные эффекты, вы можете сделать что-то вроде:

useEffect(() => {
    itemsRef.map(e => e.current).forEach((e, i) => { ... });
}, [itemsRef.length])
 18.10.2020 03:28
Самый простой и эффективный способ — вообще не использовать useRef. Просто используйте ссылка обратного вызова, который создает новый массив ссылок при каждом рендеринге.

function useArrayRef() {
  const refs = []
  return [refs, el => el && refs.push(el)]
}
Демо
<div id = "root"></div>

<script type = "text/babel" defer>
const { useEffect, useState } = React

function useArrayRef() {
  const refs = []
  return [refs, el => el && refs.push(el)]
}

const App = () => {
  const [elements, ref] = useArrayRef()
  const [third, setThird] = useState(false)
  
  useEffect(() => {
    console.info(elements)
  }, [third])

  return (
    <div>
      <div ref = {ref}>
        <button ref = {ref} onClick = {() => setThird(!third)}>toggle third div</button>
      </div>
      <div ref = {ref}>another div</div>
      { third && <div ref = {ref}>third div</div>}
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
</script>

<script src = "https://unpkg.com/@babel/standalone@7/babel.min.js"></script>
<script src = "https://unpkg.com/react@17/umd/react.production.min.js"></script>
<script src = "https://unpkg.com/react-dom@17/umd/react-dom.production.min.js"></script>
 24.07.2021 12:47
React будет повторно отображать элемент при изменении его ссылки (ссылочное равенство/проверка «тройного равенства»).

Большинство ответов здесь не учитывают это. Еще хуже: когда родитель визуализирует и повторно инициализирует объекты ref, все дочерние элементы будут повторно визуализированы, даже если это запомненные компоненты (React.PureComponent или React.memo)!

Приведенное ниже решение не имеет ненужных повторных рендеров, работает с динамическими списками и даже не создает реальных побочных эффектов. Доступ к неопределенной ссылке невозможен. Ссылка инициализируется при первом чтении. После этого он остается референциально устойчивым.

const useGetRef = () => {
  const refs = React.useRef({})
  return React.useCallback(
    (idx) => (refs.current[idx] ??= React.createRef()),
    [refs]
  )
}

const Foo = ({ items }) => {
  const getRef = useGetRef()
  return items.map((item, i) => (
    <div ref = {getRef(i)} key = {item.id}>
      {/* alternatively, to access refs by id: `getRef(item.id)` */}
      {item.title}
    </div>
  ))
}
Предостережение: Когда items со временем сжимается, неиспользуемые объекты ref не удаляются. Когда React размонтирует элемент, он правильно установит ref[i].current = null, но «пустые» ссылки останутся.

 03.01.2022 23:53
Другие вопросы по теме
GatsbyJS: ошибка TS2451: невозможно повторно объявить переменную блочной области 'react_1'
Как передать переменную при отправке функции выборки в реагирующем компоненте?
Как обновить THREE.DataTexture в ответ из буфера массива
TypeError: Object(...) не является функцией при экспорте страницы
SyntaxError: JSON.parse: неожиданный конец данных в строке 1 столбца 1 данных JSON[Подробнее]
Параметр маршрута на первом месте всегда перемонтирует компонент - React Router v4
Функция вызова передается как реквизит в Enzym
Невозможно воспроизвести эффект затухания в React
Переменные состояния связаны с именами редукторов в избыточности
Как проверить конкретное значение css-свойства React-элемента?
Похожие вопросы
Открыть в новой вкладке, но не сгруппировать с родительской вкладкой
GatsbyJS: ошибка TS2451: невозможно повторно объявить переменную блочной области 'react_1'
Как передать переменную при отправке функции выборки в реагирующем компоненте?
Массив фильтров (с вложенными объектами) с помощью динамических реквизитов
Среднее значение каждого часа в массиве
Как получить свойства нижнего уровня из массива объектов внутри другого массива объектов в JavaScript
SyntaxError: JSON.parse: неожиданный конец данных в строке 1 столбца 1 данных JSON[Подробнее]
Скрытие и отображение определенного элемента
Инициализировать var одного компонента, когда я вызываю функцию этого компонента?
Поиск чисел в массиве с определенной суммой
Разделы
Блог

Вопросы

Теги

О сайте

Контакты
info@reddeveloper.ru
Правовая информация
Политика конфиденциальности

Пользовательское соглашение


Находите ответы на сложные технические вопросы по программированию, с которыми сталкиваются инженеры по всему миру в своей ежедневной практике на сайте RedDeveloper.

© 2026 «RedDeveloper.ru»

RedDeveloper
Блог
Вопросы
Теги
Поиск...
Преобразование массива объектов в новую структуру массива
Вопросы
JAVASCRIPT
Преобразование массива объектов в новую структуру массива
Извиняюсь, но я изучаю манипулирование массивами, пробовал кое-что, как и раньше, но просто не могу понять это. Я создаю приложение для реагирования и получил свои данные обратно из пользовательского интерфейса, но мне нужно переформатировать для API. Мой груз выглядит так...

0: {from: "U20", Id: "1922", to: "U21"}
1: {from: "U20", Id: "9338", to: "U21"}
2: {from: "U20", Id: "1927", to: "U21"}
3: {from: "U20", Id: "1730", to: "U21"}
Мне нужно создать группу для всех ids и опубликовать поля from и to.

{
    "from": "U20",
    "Ids": ["1922","9338","1927","1730"],
    "to:": "U21"
}
У меня есть lodash в качестве вспомогательной библиотеки.

 12.02.2019 14:50
1
2
89
10
Данный вопрос помечен как решенный
 Ответы 10
 Ответ принят как подходящий
Для группировки по 2-м ключам можно сделать что-то подобное с помощью reduce. Создайте объект-аккумулятор с новым ключом, представляющим собой комбинацию from и to.

const input = [
    { from: "U20", Id: "1922", to: "U21" },
    { from: "U20", Id: "9338", to: "U21" },
    { from: "U20", Id: "1927", to: "U21" },
    { from: "U20", Id: "1730", to: "U21" }
];

const merged = input.reduce((acc, { from, to, Id }) => {
    const key = `${from}-${to}`;
    acc[key] = acc[key] || { from, to, Ids:[] };
    acc[key]["Ids"].push(Id);
    return acc;
}, {})

const output = Object.values(merged);
console.info(output);
В вашем случае, если вы хотите просто первый объект, то output[0]

 12.02.2019 14:57
Если есть вероятность того, что в полях from и to будут разные значения, тогда ваш API должен измениться, чтобы принимать массив значений вместо одной строки. Однако, работая в предположении, что значения from и to всегда будут одинаковыми для каждого элемента в массиве...

const payload = [
  {from: "U20", Id: "9338", to: "U21"},
  {from: "U20", Id: "1927", to: "U21"},
  {from: "U20", Id: "1730", to: "U21"},
];

const newValue = {
  from: payload[0].from,
  to: payload[0].to,
  Ids: payload.map(item => item.Id)
};
 12.02.2019 15:01
Используйте уменьшение массива и в аккумуляторе передайте пустой объект. С помощью hasOwnProperty проверить, есть ли у объекта свойство from и если его значение совпадает, то в массив id протолкнуть значение

let data = [{
    from: "U20",
    Id: "1922",
    to: "U21"
  },
  {
    from: "U20",
    Id: "9338",
    to: "U21"
  },
  {
    from: "U20",
    Id: "1927",
    to: "U21"
  },
  {
    from: "U20",
    Id: "1730",
    to: "U21"
  }
]


let newData = data.reduce(function(acc, curr) {
  if (acc.hasOwnProperty('from') && acc.from === curr.from) {
    acc.id.push(curr.Id)
  } else {
    acc = {
      from: curr.from,
      id: [curr.Id],
      to: curr.to
    }

  }
  return acc;
}, {});

console.info(newData)
 12.02.2019 15:02
const a = [
  {from: "U20", Id: "1922", to: "U21"},
  {from: "U20", Id: "9338", to: "U21"},
  {from: "U20", Id: "1927", to: "U21"},
  {from: "U20", Id: "1730", to: "U21"},
  {from: "U21", Id: "1745", to: "U22"},
  {from: "U21", Id: "1755", to: "U22"},
]

const f = array => {
  const result = []
  // key-value storage
  const variations = {}
  array.forEach(item => {
    // set storage key
    const key = `${item.from}-${item.to}`;
    // check if key exists
    // if exists use it, if not - create empty array
    variations[key] = variations[key] || []
    // push item ids to storage
    variations[key].push(item.Id)
  })
  Object.keys(variations).map(variation => {
    // deconstruct storage key back to "from" and "to" values
    const [from, to] = variation.split('-');
    const obj = {};
    // write "from" and "to" values
    obj.from = from;
    obj.to = to;
    // add stored values
    obj.ids = variations[variation]
    // save
    result.push(obj)
  })
  console.info(result)
}

f(a)
 12.02.2019 15:03
С помощью следующего вы можете вести учет каждого списка Ids для каждой пары ключей from -> to.

const entries = [
	{ from: 'U20', to: 'U21', Id: '1922' },
	{ from: 'U20', to: 'U21', Id: '9338' },
	{ from: 'U20', to: 'U21', Id: '1927' },
	{ from: 'U20', to: 'U21', Id: '1730' },
]

const output = entries.reduce((map, {from, to, Id}) =>
{
	if (!map[from])
	{
		map[from] = {}
	}
	
	if (!map[from][to])
	{
		map[from][to] = {from, to, Ids: []}
	}
	
	map[from][to].Ids.push(Id)
	
	return map
}, {})

console.info(output)
 12.02.2019 15:06
Попробуй это

var idArray = [];
var newObj = {};
 var objArray = [{
    "from": "U20",
    "Id": "1922",
    "to": "U21"
},
{
    "from": "U20",
    "Id": "9338",
    "to": "U21"
},
{
    "from": "U20",
    "Id": "1927",
    "to": "U21"
},
{
    "from": "U20",
    "Id": "1730",
    "to": "U21"
}
]

      for(var i=0; i<objArray.length; i++) {
    for(var key in objArray[i]) {
      if (key == 'Id') idArray.push(objArray[i][key])
    }
  }
  newObj.from = objArray[0].from;
  newObj.to = objArray[0].to;
  newObj.Id = idArray;
  console.info(JSON.stringify(newObj));
 12.02.2019 15:17
Немного другой подход, использующий Map и объединенный ключ для группировки с двумя значениями.

var data = [{ from: "U20", Id: "1922", to: "U21" }, { from: "U20", Id: "9338", to: "U21" }, { from: "U20", Id: "1927", to: "U21" }, { from: "U20", Id: "1730", to: "U21" }, { from: "U20", Id: "1730", to: "U22" }, { from: "U21", Id: "1730", to: "U22" }],
    result = Array.from(data
        .reduce(
             (m, { from, to, Id }) =>
                 (k => m.set(k, { from, to, Ids: [...(m.has(k) ? m.get(k).Ids : []), Id] }))
                 ([from, to].join('|')),
             new Map
        )
        .values()
    );

console.info(result);
.as-console-wrapper { max-height: 100% !important; top: 0; }
 12.02.2019 15:18
И еще одно решение:

const compare = (o1, o2) => o1.from === o2.from && o1.to === o2.to
return entries
    .reduce((arr,entry) => !arr.find(a=>compare(a,entry)) ? arr.concat(entry) : arr, [])
    .map( ({from,to})=> ({
        from,
        to,
        ids: entries.filter(i=>compare(i,{from,to})).map(({id})=>id)
        }))
 12.02.2019 16:39
Это решение использует Лодаш/fp для группировки всех объектов в массиве с помощью комбинации реквизитов from и to. Затем он отображает все группы обратно в массив, объединяя все объекты в каждой группе. Если объединенный реквизит — Id, он объединяет значения в массив.

const { flow, groupBy, props, join, map, mergeAllWith, cond, nthArg, eq, concat } = _;

const fn = flow(
  groupBy(flow(                // group by joining from and to as the key
    props(['from', 'to']),
    join('-')
  )),
  map(mergeAllWith(cond([[     // merge all objects in each group
    flow(nthArg(2), eq('Id')), // if the prop name is Id, concat the values
    concat
  ]])))
);

const input = [
    { from: "U20", Id: "1922", to: "U21" },
    { from: "U20", Id: "9338", to: "U21" },
    { from: "U20", Id: "1927", to: "U21" },
    { from: "U20", Id: "1730", to: "U21" }
];

const result = fn(input);

console.info(result);
<script src='https://cdn.jsdelivr.net/g/lodash@4(lodash.min.js+lodash.fp.min.js)'></script>
 12.02.2019 20:51
Это просто. Ты можешь это сделать

const arr = [
     {from: "U20", Id: "1922", to: "U21"},
     {from: "U20", Id: "9338", to: "U21"},
     {from: "U20", Id: "1927", to: "U21"},
     {from: "U20", Id: "1730", to: "U21"}]

const newObject = {
    from: arr[0].from,
    Ids: arr.map(record => (record.Id)),
    to: arr[0].to
    }
 13.02.2019 07:40
Другие вопросы по теме
Как привязать цветовую карту к массиву?
Почему я не могу вводить значения по 0-му индексу массива строк?
Распечатать каждый N-й элемент из массива JS
Python – сортировка огромного массива на несколько
PHP вставляет mysql NULL в значение пустого массива для вставки PDO
Упорядочить массив и сгруппировать по типам ввода
Как получить значение, которое присутствует в атрибуте массива?
Преобразование многомерного массива в разные массивы в javascript
Итерация массива внутри массива и привязка данных в html с использованием интерполяции строк в angular
Удаление элементов из списка массивов без использования позиции
Похожие вопросы
Как использовать канал значения ключа Angular 6.1 и указать отображаемые пары значений ключа?
Подключить ECONNREFUSED 127.0.0.1:443 при вызове запроса POST внутри запроса GET
Автообновление страницы JSP по таймеру
Не удается отобразить pdf, передав Uint8Array в параметре файла viewer.html при использовании pdfjs
Как скрыть/отобразить кнопку маршрутизатора для определенного компонента в vuejs
Собственный способ JavaScript для просмотра дерева документов при сравнении объектов
Как преобразовать kebab-case в PascalCase?
Фильтр JQuery на основе совпадения текста в строке
Я хочу запустить пользовательский JS, но браузер говорит, что это небезопасно, и не загружает его, не разрешив скрипт вручную в браузере
Решить Минимизировать глубину критических запросов - Производительность страницы
Разделы
Блог

Вопросы

Теги

О сайте

Контакты
info@reddeveloper.ru
Правовая информация
Политика конфиденциальности

Пользовательское соглашение


Находите ответы на сложные технические вопросы по программированию, с которыми сталкиваются инженеры по всему миру в своей ежедневной практике на сайте RedDeveloper.

© 2026 «RedDeveloper.ru»

RedDeveloper
Блог
Вопросы
Теги
Поиск...
Метод push в React Hooks (useState)?
Вопросы
JAVASCRIPT
Метод push в React Hooks (useState)?
Как вставить элемент внутрь массива useState React hook? Это старый метод в состоянии реакции? Или что-то новое?

Например. Пример push-уведомления setState ?

 13.02.2019 19:21
232
0
284 931
10
Данный вопрос помечен как решенный
 Ответы 10
 Ответ принят как подходящий
Когда вы используете useState, вы можете получить метод обновления для элемента состояния:

const [theArray, setTheArray] = useState(initialArray);
затем, когда вы хотите добавить новый элемент, вы используете эту функцию и передаете новый массив или функцию, которая создаст новый массив. Обычно последнее, поскольку обновления состояния являются асинхронными и иногда пакетными:

setTheArray(oldArray => [...oldArray, newElement]);
Иногда вы можете обойтись без использования этой формы обратного вызова, если вы Только обновите массив в обработчиках для определенных конкретных пользовательских событий, таких как click (но не как mousemove):

setTheArray([...theArray, newElement]);
События, для которых React гарантирует, что рендеринг сбрасывается, являются «дискретными событиями», перечисленными здесь.

Живой пример (передача обратного вызова в setTheArray):

const {useState, useCallback} = React;
function Example() {
    const [theArray, setTheArray] = useState([]);
    const addEntryClick = () => {
        setTheArray(oldArray => [...oldArray, `Entry ${oldArray.length}`]);
    };
    return [
        <input type = "button" onClick = {addEntryClick} value = "Add" />,
        <div>{theArray.map(entry =>
          <div>{entry}</div>
        )}
        </div>
    ];
}

ReactDOM.render(
    <Example />,
    document.getElementById("root")
);
<div id = "root"></div>
<script src = "https://cdnjs.cloudflare.com/ajax/libs/react/16.8.1/umd/react.production.min.js"></script>
<script src = "https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.8.1/umd/react-dom.production.min.js"></script>
Поскольку единственное обновление для theArray есть в событии click (одно из «дискретных» событий), я мог бы обойтись прямым обновлением в addEntry:

const {useState, useCallback} = React;
function Example() {
    const [theArray, setTheArray] = useState([]);
    const addEntryClick = () => {
        setTheArray([...theArray, `Entry ${theArray.length}`]);
    };
    return [
        <input type = "button" onClick = {addEntryClick} value = "Add" />,
        <div>{theArray.map(entry =>
          <div>{entry}</div>
        )}
        </div>
    ];
}

ReactDOM.render(
    <Example />,
    document.getElementById("root")
);
<div id = "root"></div>
<script src = "https://cdnjs.cloudflare.com/ajax/libs/react/16.8.1/umd/react.production.min.js"></script>
<script src = "https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.8.1/umd/react-dom.production.min.js"></script>
 13.02.2019 19:25
Точно так же вы делаете это с «нормальным» состоянием в компонентах класса React.

пример:

function App() {
  const [state, setState] = useState([]);

  return (
    <div>
      <p>You clicked {state.join(" and ")}</p>
      //destructuring
      <button onClick = {() => setState([...state, "again"])}>Click me</button>
      //old way
      <button onClick = {() => setState(state.concat("again"))}>Click me</button>
    </div>
  );
}
 13.02.2019 19:27
Чтобы немного расшириться, вот несколько распространенных примеров. Начиная с:

const [theArray, setTheArray] = useState(initialArray);
const [theObject, setTheObject] = useState(initialObject);
Вставить элемент в конец массива

setTheArray(prevArray => [...prevArray, newValue])
Нажмите/обновите элемент в конце объекта

setTheObject(prevState => ({ ...prevState, currentOrNewKey: newValue}));
Нажмите/обновите элемент в конце массива объектов

setTheArray(prevState => [...prevState, {currentOrNewKey: newValue}]);
Вставьте элемент в конец объекта массивов

let specificArrayInObject = theObject.array.slice();
specificArrayInObject.push(newValue);
const newObj = { ...theObject, [event.target.name]: specificArrayInObject };
theObject(newObj);
Вот несколько рабочих примеров. https://codesandbox.io/s/reacthooks-push-r991u

 25.10.2019 11:44
setTheArray([...theArray, newElement]); — самый простой ответ, но будьте осторожны с изменением элементов в массив. Используйте глубокое клонирование элементов массива.

 13.12.2019 06:20
Наиболее рекомендуемый метод — совместное использование функции-оболочки и оператора распространения. Например, если вы инициализировали состояние под названием name вот так,

const [names, setNames] = useState([])

Вы можете нажать на этот массив следующим образом:

setNames(names => [...names, newName])
Надеюсь, это поможет.

 09.04.2020 16:21
// Save search term state to React Hooks with spread operator and wrapper function

// Using .concat(), no wrapper function (not recommended)
setSearches(searches.concat(query))

// Using .concat(), wrapper function (recommended)
setSearches(searches => searches.concat(query))

// Spread operator, no wrapper function (not recommended)
setSearches([...searches, query])

// Spread operator, wrapper function (recommended)
setSearches(searches => [...searches, query])
https://medium.com/javascript-in-plain-english/how-to-add-to-an-array-in-react-state-3d08ddb2e1dc

 13.05.2020 20:20
Я попробовал описанные выше методы для помещения объекта в массив объектов в useState, но при использовании Машинопись возникла следующая ошибка:

Type 'TxBacklog[] | undefined' must have a 'Symbol.iterator' method that returns an iterator.ts(2488)

Настройка для tsconfig.json, по-видимому, была правильной:

{
   "compilerOptions": {
   "target": "es6",
   "lib": [
      "dom",
      "dom.iterable",
      "esnext",
      "es6",
],
Этот обходной путь решил проблему (мой пример кода):

Интерфейс:

   interface TxBacklog {
      status: string,
      txHash: string,
   }
Переменная состояния:

    const [txBacklog, setTxBacklog] = React.useState<TxBacklog[]>();
Вставьте новый объект в массив:

    // Define new object to be added
    const newTx = {
       txHash: '0x368eb7269eb88ba86..',
       status: 'pending'
    };
    // Push new object into array
    (txBacklog) 
       ? setTxBacklog(prevState => [ ...prevState!, newTx ])
       : setTxBacklog([newTx]);
 13.11.2020 11:40
если вы хотите нажать после определенного индекса, вы можете сделать следующее:

   const handleAddAfterIndex = index => {
       setTheArray(oldItems => {
            const copyItems = [...oldItems];
            const finalItems = [];
            for (let i = 0; i < copyItems.length; i += 1) {
                if (i === index) {
                    finalItems.push(copyItems[i]);
                    finalItems.push(newItem);
                } else {
                    finalItems.push(copyItems[i]);
                }
            }
            return finalItems;
        });
    };
 16.11.2020 15:00
Вы можете добавить массив данных в конце пользовательского состояния:

  const [vehicleData, setVehicleData] = React.useState<any[]>([]);
  setVehicleData(old => [...old, ...newArrayData]);
Например, ниже вы видите пример аксиом:

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        {
          url: `http://localhost:4000/api/vehicle?page=${page + 1}&pageSize=10`,
          method: 'get',
        }
      );
      setVehicleData(old => [...old, ...result.data.data]);
    };

    fetchData();
  }, [page]);
 22.12.2020 18:25
Создание состояния массива с помощью useState() Во-первых, давайте посмотрим, как использовать хук useState() для создания переменной состояния массива.

import React from "react";

const { useState } = React;

const [myArray, setMyArray] = useState([]);
Однако с React нам нужно использовать метод, возвращаемый из useState, для обновления массива.

setMyArray(oldArray => [...oldArray, newElement]);
узнать больше

 27.08.2021 00:30
Другие вопросы по теме
Можно ли анимировать вид при обновлении состояния в родном реагировании
Yelp API (fusion) в интерфейсном проекте React
При отправке редукционной формы циклическая запись axios для множественных значений
Как использовать Tinypaginator с шрифтом в ReactJS?
Реагировать на диспетчеризацию асинхронных действий
Ответ не конвертируется в JSON
Приложение React аварийно завершает работу, если API-URL недействителен
Как показать компонент в React и обновить его жизненный цикл каждый раз, когда он показывается?
Нечетный красивый отступ с React
DraftJS сохраняет данные и управляет данными в блоке рендеринга
Похожие вопросы
Как создать линейный график QChart.js
Я хотел бы добавить кнопку удаления в свое приложение Angular
Функция сумматора процентного калькулятора Javascript не работает
Динамически изменять функцию обработчика onPress в реактивном нативе
Как выровнять и избавиться от перекрывающихся видео?
Как мне иметь несколько классов для прослушивания события click в Javascript?
Неожиданное поведение при экранировании обратной косой черты JS
Yelp API (fusion) в интерфейсном проекте React
React-Native FlatList с индивидуальным состоянием для каждого компонента
У меня проблема в случае переключения *javascript
Разделы
Блог

Вопросы

Теги

О сайте

Контакты
info@reddeveloper.ru
Правовая информация
Политика конфиденциальности

Пользовательское соглашение


Находите ответы на сложные технические вопросы по программированию, с которыми сталкиваются инженеры по всему миру в своей ежедневной практике на сайте RedDeveloper.

© 2026 «RedDeveloper.ru»

  RedDeveloper
Блог
Вопросы
Теги
Поиск...
Reactjs «Ошибка: ENOENT: нет такого файла или каталога, откройте ..» после преобразования файла jsx в tsx
Вопросы
REACTJS
Reactjs «Ошибка: ENOENT: нет такого файла или каталога, откройте ..» после преобразования файла jsx в tsx
У меня есть приложение create-react-app, и я перевожу файлы с jsx на typescript. Например, один файл называется /code/app_react/src/common/Action.jsx, и я переименовал его в /code/app_react/src/common/Action.tsx. Я внес необходимые изменения, чтобы успешно преобразовать его в tsx, но получаю сообщение об ошибке, связанное с изменением имени:

./src/common/Action.jsx Error: ENOENT: no such file or directory, open '/code/src/common/Action.jsx'

переустановка не помогает
почему-то ожидается старая версия файла
Файл, импортирующий этот файл, является файлом jsx, но теперь я импортирую в него файл tsx.

Это приложение CRA, так есть ли правильный способ устранить эту ошибку?

РЕШЕНИЕ: Мне пришлось удалить их из репозитория git, используя команду git rm, вот так:

git rm /code/src/common/Action.jsx
Как только я это сделал, он удалил jsx из зафиксированных файлов, а затем я смог использовать новые tsx файлы.

 06.03.2019 04:55
34
6
55 101
10
 Ответы 10
Возможно, вы не импортировали файл. Вам нужно импортировать файл, чтобы использовать его.

import Action from '/code/app_react/src/common/Action.tsx';
Также добавьте это в свой webpack.config.js.

resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"]
},
Вы готовы идти!

 06.03.2019 05:38
У меня была эта проблема (хотя я переименовал js в jsx, а не jsx в tsx), и решение, добавленное к вопросу (запуск git rm в исходном файле), у меня не сработало.

Что сработало, было предложено эта ветка r/reactjs Reddit: удаление и переустановка node_modules:

rm -rf node_modules && npm i
 29.10.2019 11:15
У меня была такая же проблема, не нужно удалять node_modules или удалять целевой файл, вам просто нужно убить процесс узла.

Если вы на windows:

ctrl+alt+delete для запуска диспетчера задач
найти node
завершить процесс
Если вы на linux:

наверное что-то вроде pkill node и т.д.
После того, как я убил процесс node и снова запустил npm start, он находит целевой файл.

 05.02.2020 07:30
Убил мой запущенный процесс пряжи, убил vscode, перезапустил оба, и он работает

 14.02.2020 16:38
Я работал с редуксом, а потом наткнулся на эту ошибку!

Я попытался убить узел, удалить модули узла, перезагрузить ноутбук, но он все равно выдавал ту же ошибку, а позже я начал отлаживать index.js.

Я прокомментировал каждую строку и начал раскомментировать сверху, чтобы увидеть, где код ломается, а затем заметил

I had not installed

redux

I had only installed react-redux

 27.09.2020 02:57
Просто перезапустите сервер npm, он автоматически обнаружит файл машинописного текста и внесет коррективы.

 27.09.2020 04:47
У меня была такая же проблема с преобразованием .jsx в .tsx. Если вы используете Parcel для создания своего приложения, удалите папку .cache. Вот где Parcel кэширует файлы сборки. Это исправило это для меня.

 22.10.2020 19:07
Это происходит из-за предустановленного кеша. Простым решением было бы перезапустить ваше приложение nodejs и реагировать.

В Linux

$ pkill node   

$ killall node  

$ kill -9 <pid>
В Windows

C:\>taskkill /im node.exe

C:\>taskkill /f /im node.exe

C:\>taskkill /pid <PID of node>
В MacOS

$sudo killall -9 node
А затем снова запустите приложение React.

npm start
 07.01.2021 12:51
Я вручную удалил папку node_modules и переустановил их, запустив npm i, и трюк у меня сработал.

 24.01.2021 16:40
Простой перезапуск сервера работает.

Например: NPM RUN DEV или любой стартовый скрипт у меня работал.

 01.12.2021 06:53
Другие вопросы по теме
GAS/clasp: как заставить автозаполнение/intellisense работать в VSCode для сторонних библиотек
Проблемы с записью во вложенный массив объектов в Angular
Тестирование типизированных исключений с помощью Jest
Облачная транзакция Firebase вызывает ошибку
Каков вариант использования? Класс машинописного текста только со статическими членами и объектом со свойствами
Код Visual Studio с использованием JavaScript с файлом TypeScript в качестве эталона для Intellisense
Как определить тип TypeScript для оболочки объекта, которая имеет строку в качестве ключа и React SFC в качестве значения?
Фабрика компонентов не найдена для... Открытие модального окна
Как вы получаете свойства универсального типа в Typescript
Angular CanDeactivate Guard не работает с Sweet Alert JS
Похожие вопросы
Сортировка массива со значениями состояния в React и JSX
Как отображать уведомления из инструментов разработчика веб-браузера с помощью JavaScript?
Создание выпадающего меню - константная ошибка - Непредвиденная ошибка, требуется синтаксис ';'
Как получить событие клика в строке таблицы в реакции js
Можно ли передать функцию с параметрами в качестве реквизита, а затем ссылаться на эту функцию как на реквизит?
Пользовательские маркеры react-map-gl не остаются в точном положении при увеличении
Как получить внешний файл JSON в Django Rest Framework для использования с React?
ReactJs: Input onChange требует обновления каждый раз, чтобы изменить значение на входе
Как передать данные модальному дизайну Ant
Реагировать на состояние значения пусто после обновления состояния в ComponentDidMount
Разделы
Блог

Вопросы

Теги

О сайте

Контакты
info@reddeveloper.ru
Правовая информация
Политика конфиденциальности

Пользовательское соглашение


Находите ответы на сложные технические вопросы по программированию, с которыми сталкиваются инженеры по всему миру в своей ежедневной практике на сайте RedDeveloper.

© 2026 «RedDeveloper.ru»

  RedDeveloper
Блог
Вопросы
Теги
Поиск...
Реагировать на красивое DnD перетаскивание проблемы с позиции
Вопросы
REACTJS
Реагировать на красивое DnD перетаскивание проблемы с позиции
Я создал перетаскиваемую таблицу с перетаскиваемыми строками.
Я использую react beautiful-dnd для этого.
Когда я перетаскиваю строку, она смещается с места, а не на позицию моего курсора.
Когда я перетаскиваю строку, она получает position: fixed и некоторые top и left стили.
Я подозреваю, что проблема в этом, но почему он получает неправильные числа, из-за чего он не отображается в правильной позиции? Этот гифка покажет проблему.
Реагировать на красивое DnD перетаскивание проблемы с позиции

Это мой полный код:

import update from "immutability-helper";
import * as React from "react";
import * as ReactDnD from "react-dnd";
import { WithNamespaces, withNamespaces } from "react-i18next";
import { toastr } from "react-redux-toastr";
import * as HttpHelper from "../../httpHelper";
import { FormState } from "../common/ValidatedForm";
import Addtagmodal from "../common/AttributeModal";
import AttributeModal from "./AttributeModal";
import PreviewModal from "./PreviewModal";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
/* import locale from "react-json-editor-ajrm/locale/en"; */
type Props = WithNamespaces & {
  id: number;
  displayName: string;
};

interface Fields {
  columns: any;
}

type State = FormState<Fields> & {
  isLoading: boolean,
  canSave: boolean,
  isSaving: boolean,
  possibleTags: any,
  configTagModalActive: boolean,
  previewModalActive: boolean,
  activeTag: any
};
const getItemStyle = (draggableStyle: any) => ({
  ...draggableStyle
});
const Card = (props: any) => {
  const opacitys = props.isDragging ? 0.3 : 1;

  function findindex(val: any) {
    return props.tags.some((item: any) => val === item.name);
  }
  let select;
  let selectStyle = {};
  let tagInputStyle = {};
  if (props.tags.length == 0 || props.tags.length > 3) {
    selectStyle = { border: "0px", outline: "none", width: "100%", height: "20px", backgroundColor: "transparent", zIndex: 0, float: "left", position: "relative" };
    tagInputStyle = {border: "1px solid #ced4da", height: "auto", width: "400px", padding: "8px", minHeight: "38px", background: "white"};
  }
  else {
    selectStyle = { border: "0px", outline: "none", width: "100%", height: "20px", backgroundColor: "transparent", zIndex: 0, float: "left", top: "-20px", position: "relative" };
    tagInputStyle = {border: "1px solid #ced4da", height: "auto", width: "400px", padding: "8px", minHeight: "38px", background: "white", marginTop: "10px"};
  }
  if (props.tags.length < 4) {
    select =
  <select value = "" className = "autocomplete-select" style = {selectStyle} id = {props.index} onChange = {props.onaddtag}>
    <option value = "" disabled ></option>
    {props.possibleTags.map((i: any) =>

      <option value = {i.name} disabled = {i.uses == 0 || findindex(i.name) == true ? true : false}>{i.name}</option>

    )}
  </select>;
  }
  else {
    select = undefined;
  }
  return (
        <tr ref = {props.provided.innerRef}
        {...props.provided.draggableProps} style = {getItemStyle(props.provided.draggableProps.style)} className = {(props.indexnr % 2 ? "whiterow" : "grayrow")} key = {props.indexnr} data-id = {props.indexnr} >
          <td {...props.provided.dragHandleProps} style = {{width: "50px", textAlign: "center"}}><i className = "fa fa-bars" style = {{lineHeight: "40px", fontSize: "24px"}}></i></td>
          <td style = {{ textAlign: "center", width: "80px" }}>
            <input
              type = "checkbox"
              className = "flipswitch"
              id = {props.index}
              checked = {props.export}
              onChange = {props.oncheck}
            />
          </td>
          <td>
            <input
              type = "text"
              name = "caption"
              id = {props.index}
              className = "form-control"
              value = {props.caption}
              onChange = {props.ontextupdate}
            />
          </td>
          <td>
            <input
              type = "text"
              name = "fieldname"
              id = {props.index}
              className = "form-control"
              value = {props.fieldname}
              onChange = {props.ontextupdate}
            />
          </td>
          <td style = {{width: "400px"}}>
            <div className = "tags-input" style = {tagInputStyle}>
            {Object.keys(props.tags).map((key, i) =>
              <div key = {key} style = {{backgroundColor: "#0753ad", height: "20px", borderRadius: "3px", display: "inline-block", padding: "5px", lineHeight: "12px", float: "left", color: "white", marginRight: "5px", fontSize: "10px", width: "90px", position: "relative", zIndex: 20}}>
                {props.tags[i].name} <i className = "fa fa-trash" id = {props.index} data-key = {i} data-name = {props.tags[i].name} onClick = {props.ondeletetag} style = {{float: "right"}} ></i><i className = "fa fa-cog" data-id = {i} data-parent = {props.index} style = {{float: "right", marginRight: "5px"}} onClick = {props.onConfigButtonClicked}></i>
              </div>
            )}
            {select}
            </div>
           </td>
          <td style = {{ textAlign: "center", width: "80px" }}>
          <button onClick = {() => props.ondeleterow(props.index)} type = "button" style = {{padding : "8px 16px" }} className = "btn btn-danger btn-rounded"><i className = "fa fa-trash"></i></button>
          </td>
        </tr>
  );
};
const reorder = (list: any, startIndex: any, endIndex: any) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  console.info(startIndex, endIndex, removed);
  result.splice(endIndex, 0, removed);

  return result;
};
interface SetColumnsResponse extends HttpHelper.ResponseData { columns: any; }

class CrmConnectorColumns extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.moveCard = this.moveCard.bind(this);
    this.oncheck = this.oncheck.bind(this);
    this.ontextupdate = this.ontextupdate.bind(this);
    this.ondeleterow = this.ondeleterow.bind(this);
    this.onaddnewrow = this.onaddnewrow.bind(this);
    this.ondeletetag = this.ondeletetag.bind(this);
    this.onaddtag = this.onaddtag.bind(this);
    this.onConfigButtonClicked = this.onConfigButtonClicked.bind(this);
    this.onPreviewButtonClicked = this.onPreviewButtonClicked.bind(this);
    this.onClosePreview = this.onClosePreview.bind(this);
    this.state = {
      isLoading: true,
      isSaving: false,
      canSave: false,
      errorColor: "danger",
      fields: { columns: {} },
      deleteModalActive: false,
      configTagModalActive: false,
      previewModalActive: false,
      activeTag: {name: "", attributes: [{name: "", value: ""}]},
      possibleTags: [
        {name: "SUBTITLE", status: "new", helptexts: [{language: "nl", helptext: "Dit is de subtitel van een record"}], attributes: [], uses: 1},
        {name: "URL", status: "new", helptexts: [{language: "nl", helptext: "De waarde wordt gezien als html link."}], attributes: [{name: "link", status: "new", helptexts: [{language: "nl", helptext: "De link is deze waarde. Voorbeeld waarde is \"http://www.google.nl?search=[naam]\". op de plaats van \"[naam]\" wordt de waarde van het veld \"naam\" ingevuld."}], uses: undefined}]},
        {name: "TITLE", status: "new", helptexts: [{language: "nl", helptext: "Dit is de hoofdtitel van een record"}], attributes: [], uses: 1},
        {name: "PHONE", status: "new", helptexts: [{language: "nl", helptext: "De waarde wordt gezien telefoonnummer"}], attributes: [], uses: undefined},
        {name: "BUTTON", status: "new", helptexts: [{language: "nl", helptext: "Uiterlijk van een knop"}], attributes: [], uses: undefined},
        {name: "EMAIL", status: "new", helptexts: [{language: "nl", helptext: "De waarde wordt gezien e-mail adres"}], attributes: [], uses: undefined},
        {name: "IMAGE", status: "new", helptexts: [{language: "nl", helptext: "De waarde wordt als afbeelding weergegeven"}], attributes: [], uses: undefined},
        {name: "HTML", status: "new", helptexts: [{language: "nl", helptext: "De waarde wordt gezien als HTML"}], attributes: [{name: "HTML code", status: "new", helptexts: [{language: "nl", helptext: "Vul hier je custom HTML code in. De waarde tussen de [] word vervangen door de data."}], uses: undefined}]}
      ]
    };
    this.onDragEnd = this.onDragEnd.bind(this);
  }
  onDragEnd(result: any) {
    // dropped outside the list
    if (!result.destination) {
      return;
    }
    let newlist = [...this.state.fields.columns];
    newlist = reorder(
      newlist,
      result.source.index,
      result.destination.index
    );
    Object.keys(newlist).forEach((nr) => {
      newlist[parseInt(nr, 10)].index = parseInt(nr, 10);
      });
    this.setState({ fields: { columns: newlist } });
    console.info(this.state.fields.columns);
    this.setState({ canSave: true });




  }
  async componentDidMount() {
    console.info("Start select columns");

    const fields = await HttpHelper.getJson<Fields>(`/connectortypes/${this.props.id}/columns`);
    this.setState(prevState => {
      return update(prevState, {
        fields: { $set: fields },
        isLoading: { $set: false },
      });
    });
    for (let i = 0; i < fields.columns.length; i++) {
      fields.columns[i].index = i;
    }
    this.setState({ fields: { columns: fields.columns } });
    const newlist = [...this.state.possibleTags];
    console.info(newlist);
    for (const column of fields.columns) {
      for (const tags of column.tags) {
        const index = newlist.findIndex(item => item.name == tags.name);
        if (newlist[index].uses > 0) {
          newlist[index].uses = 0;
        }
      }
    }
    this.setState({ possibleTags: newlist });
    console.info(this.state.possibleTags);

  }
  moveCard (index: any, indexnr: any) {
    const cards = this.state.fields.columns;
    const sourceCard = cards.find((card: any) => card.index === index);
    const sortCards = cards.filter((card: any) => card.index !== index);
    sortCards.splice(indexnr, 0, sourceCard);
     Object.keys(sortCards).forEach((nr) => {
    sortCards[nr].index = parseInt(nr, 10);
    });
    this.setState({ fields: { columns: sortCards } });
    console.info(this.state.fields.columns);
    this.setState({ canSave: true });
  }
  oncheck(e: any) {
    const cards = this.state.fields.columns;
    cards[e.target.id].export = e.target.checked;
    this.setState({ fields: { columns: cards } });
    console.info(this.state.fields.columns);
    this.setState({ canSave: true });
  }
  ondeleterow(nr: any) {
    console.info(nr);
    const array = [...this.state.fields.columns]; // make a separate copy of the array
    const arrayCopy = array.filter((row: any) => row.index !== nr);
    this.setState({ fields: { columns: arrayCopy }});
    console.info(this.state.fields.columns);
    this.setState({ canSave: true });
  }
  ontextupdate(e: any) {
    const cards = this.state.fields.columns;
    cards[e.target.id][e.target.name] = e.target.value;
    this.setState({ fields: { columns: cards } });
    this.setState({ canSave: true });
  }
  onaddnewrow() {
    const columnsCopy = this.state.fields.columns;
    columnsCopy.push({index: this.state.fields.columns.length, export: true, editable: false, fieldname: "", caption: "", tags: [] });
    this.setState({ fields: { columns: columnsCopy } });
    this.setState({ canSave: true });
  }
  onDragStart = (e: any) => {
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/html", e.target.parentNode);
    e.dataTransfer.setDragImage(e.target.parentNode, 20, 20);
  }
  ondragOver(e: any) {
    e.preventDefault();
    const columnsCopy = this.state.fields.columns;
    columnsCopy.pop();
    columnsCopy.push({index: e.target.dataset.id, export: true, editable: false, fieldname: "", caption: "", tags: [] });
    this.setState({ fields: { columns: columnsCopy } });
  }
  onaddtag(e: any) {
    function findindex(element: any) {
      return element.name == e.target.value;
    }
    const index = this.state.possibleTags.findIndex(findindex);
    const array = this.state.fields.columns;

    for (const column of array) {

      if (column.index == e.target.id) {
         const newArray = [ ...array[e.target.id].tags, {name: this.state.possibleTags[index].name, attributes: [] } ];
         array[e.target.id].tags = newArray;
      }
      else {
        const newArray = [...column.tags];
        column.tags = newArray;
      }
      this.setState({ fields: { columns: array } });
    }
    this.setState({ canSave: true });
    const tags = this.state.possibleTags;
    if (tags[index].uses > 0) {
      tags[index].uses = 0;
    }
    this.setState({ possibleTags: tags });
  }
  ondeletetag(e: any) {
    const array = this.state.fields.columns;
    for (const column of array) {
      if (column.index == e.target.id) {
        const newlist = [].concat(array[e.target.id].tags); // Clone array with concat or slice(0)
        newlist.splice(e.target.dataset.key, 1);
        array[e.target.id].tags = newlist;
      }
      else {
        const newArray = [...column.tags];
        column.tags = newArray;
      }
    }
    this.setState({ fields: { columns: array } });
    this.setState({ canSave: true });
    function findindex(element: any) {
      return element.name == e.target.dataset.name;
    }
    const index = this.state.possibleTags.findIndex(findindex);
    const tags = this.state.possibleTags;
    if (tags[index].uses == 0) {
      tags[index].uses = 1;
    }
    this.setState({ possibleTags: tags });
  }
  onUpdateAttribute() {
    this.setState({ configTagModalActive: false });
    this.setState({ canSave: true });
  }
  onPreviewButtonClicked() {
    this.setState({ previewModalActive: true });
  }
  onClosePreview() {
    this.setState({ previewModalActive: false });
  }
  onCancelUpdateAttribute() {
    this.setState({ configTagModalActive: false });
  }
  onConfigButtonClicked(e: any) {
    e.preventDefault();
    this.setState({ activeTag: this.state.fields.columns[e.target.dataset.parent].tags[e.target.dataset.id]});
    this.setState({ configTagModalActive: true, errorMessage: undefined });
    console.info(this.state.activeTag);
  }
  onSubmit = (e: any) => {
    e.preventDefault();
    console.info("Start saving changes");
    this.setState({ isSaving: true }, () => {
      if (this.state.fields) {
        HttpHelper.postJson<SetColumnsResponse>(`/connectortypes/${this.props.id}/columns/`, { columns: this.state.fields.columns }).then((responseData) => {
          if (responseData.responseStatus !== undefined && responseData.responseStatus !== null && responseData.responseStatus.message !== null) {
            this.setState({ isSaving: false, errorMessage: responseData.responseStatus.message });
          }
          else {
            this.setState({ canSave: false, isSaving: false, fields: { columns: responseData.columns } }, () => {
              toastr.success(this.props.displayName, this.props.t("columnsUpdated"));
            });
          }
        });
      }
    });
  }
  public render() {
    const columns = this.state.fields.columns || [] ;
    const { t } = this.props;
    return (
    <form>
      <div className = "App">
        <main>
          <button onClick = {this.onSubmit} className = "btn btn-primary" type = "submit" style = {{float: "right"}} disabled = {!this.state.canSave || this.state.isSaving}>{this.state.isSaving ? <i className = "fa fa-spinner fa-spin"></i> : ""} {this.props.t("update")}</button><br/><br/>
          <DragDropContext onDragEnd = {this.onDragEnd}>
          <Droppable droppableId = "droppable">
          {(provided: any) => (
          <table ref = {provided.innerRef} className = "col-8 table columns" style = {{border: "1px solid #dee2e6"}} >
          <thead className = "thead-dark" style = {{border: "1px solid #1b2847"}}>
          <tr>
          <th colSpan = {2}>
            <button onClick = {this.onaddnewrow} type = "button" style = {{padding : "8px 16px" }} className = "btn btn-primary btn-rounded"><i className = "fa fa-plus"></i> </button>
          </th>
           <th>{t("displayname")}</th>
           <th>Element</th>
           <th>Tags</th>
           <th>
             <button onClick = {this.onPreviewButtonClicked} type = "button" className = "btn btn-primary"  style = {{float: "right"}} >Preview</button>
          </th>
          </tr>
        </thead>
        <tbody>
            {Object.keys(columns).map((key, i) => (
              <Draggable key = {i} draggableId = {key} index = {i}>
              {(provided) => (
             <Card
             key = {columns[i].index}
             indexnr = {i}
             oncheck = {this.oncheck}
             ontextupdate = {this.ontextupdate}
             ondeleterow = {this.ondeleterow}
             ondeletetag = {this.ondeletetag}
             onaddtag = {this.onaddtag}
             possibleTags = {this.state.possibleTags}
             onConfigButtonClicked = {this.onConfigButtonClicked}
             onPreviewButtonClicked = {this.onPreviewButtonClicked}
             onClosePreview = {this.onClosePreview}
             provided = {provided}
             {...columns[i]}
           />
           )}
           </Draggable>
           ))}
            </tbody>
          </table>
          )}
         </Droppable>
      </DragDropContext>
        </main>
      </div>
      <AttributeModal
        startAction = {this.onUpdateAttribute.bind(this)}
        isOpen = {this.state.configTagModalActive}
        headerText = {t("header")}
        activeTag = {this.state.activeTag}
        addText = {t("close")}
        possibleTags = {this.state.possibleTags} >
      </AttributeModal>

      <PreviewModal
        startAction = {this.onClosePreview.bind(this)}
        isOpen = {this.state.previewModalActive}
        headerText = "Preview"
        addText = {t("close")}
        columns = {this.state.fields.columns} >
      </PreviewModal>
    </form>
    );
  }
}

export default withNamespaces("crmConnectorColumns")(CrmConnectorColumns);
Кто-нибудь знает, почему мой перетаскиваемый элемент смещается?
Единственный css, который я использую, это bootstrap и те, что в моем коде.

 04.03.2019 12:20
15
0
24 117
10
Данный вопрос помечен как решенный
 Ответы 10
Подобная вещь случилась со мной во время использования react-beautiful-dnd. В моем случае причина заключалась в том, что у меня было два элемента с одинаковым идентификатором.

 04.03.2019 20:56
 Ответ принят как подходящий
У меня была такая же проблема, и я понял это! :-)

Решение можно найти здесь: https://github.com/atlassian/react-beautiful-dnd/blob/master/docs/patterns/using-a-portal.md

В основном, когда библиотека использует position: fixed, как упоминалось в OP, иногда возникают непредвиденные последствия - и в этих случаях вам нужно использовать портал.

Я заставил его работать, посмотрев на пример портала здесь: https://github.com/atlassian/react-beautiful-dnd/blob/master/stories/src/portal/portal-app.jsx

решение найдено благодаря этому комментарию: https://github.com/atlassian/react-beautiful-dnd/issues/485#issuecomment-385816391

 16.05.2019 08:09
В моем случае проблема заключалась в том, что один из родительских элементов Draggable имел свойство css «преобразование» внутри анимации «ключевые кадры». Удаление решило проблему.

 12.06.2019 13:21
В моем случае помогло переопределение position: 'fixed' перетаскиваемого элемента с помощью position: 'static'.

 20.09.2019 22:53
Найдите в дереве отверстий элементы с атрибутами transition или transform, как упоминалось в @Glib, и удалите их. Если вы обновляете устаревший код или интегрируетесь с другими библиотеками, могут быть основные элементы с этими атрибутами, о которых вы не знаете.

 08.01.2020 13:28
Я продолжаю натыкаться на эту тему, так что вот еще одна (очень простая) ошибка, которая вызовет такое поведение: Вы поставили {provided.placeholder} не туда или вообще не поставили, или недостаточно раз :).

Пример (у вас вложенная настройка):

<DragDropContext ...>
    <Droppable ...>
      {(provided) => (
        <div
          ref = {provided.innerRef}
        >
          {items.map((item, index) => (
            <Draggable ...>
              {(provided, snapshot) => (
                <div>
                  <div ref = {provided.innerRef} ...>
                    <ComponentWithDroppableInsideWithItsOwnPlaceHolder item = {item}/>
                  </div>
                  {provided.placeholder} //<--- Observe our "out of place" placeholder
                </div>
              )}
            </Draggable>
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  </DragDropContext>
Таким образом, «обычно» вам нужен только 1 заполнитель в качестве последнего тега каждого выпадающего элемента (обычно прямо под перетаскиваемыми элементами). Так что, если у вас есть дроппинг, вложенный в другой, вам нужно только два, верно? Неа. Вам нужно три, потому что вы хотите, чтобы каждый droppable обрабатывал свои собственные dragables И хотите также перетаскивать droppables второго уровня, и они должны оказаться где-то во время перетаскивания.

Отсутствие этого вызовет очень похожую проблему, как в опубликованном gif, где все элементы можно перетаскивать, но они выпадают из экрана, когда вы перемещаете их куда-то, где они ожидают заполнителя, но его нет.

One more
В аналогичном вложенном случае вы хотите отсортировать свой атрибут типа на Droppable-s из документы:

type: A TypeId(string) that can be used to simply accept only the specified class of <Draggable />. <Draggable />s always inherit type from the <Droppable /> they are defined in. For example, if you use the type PERSON then it will only allow <Draggable />s of type PERSON to be dropped on itself. <Draggable />s of type TASK would not be able to be dropped on a <Droppable /> with type PERSON. If no type is provided, it will be set to 'DEFAULT'.

 18.08.2020 10:11
У меня была похожая проблема (к моему <Draggable/> применялось преобразование из родительского элемента). Я решил это, используя Клонирование API, чтобы переназначить мой <Draggable/> в правильное местоположение DOM во время перетаскивания. react-beautiful-dnd теперь рекомендует этот метод вместо создания собственного портала.

 22.08.2020 19:38
Исправьте, удалив transform из родительского элемента
Если для какого-либо родительского элемента установлено правило transform, отличное от none, а также наличие will-change: transform на родительском элементе вызовет эту проблему.

Я обнаружил, что Chrome Dev Tools может очень помочь в этом случае, чтобы найти родительский элемент с таким правилом:

Перейдите в Elements -> Styles -> Computed -> filter transform и найдите во всех родительских элементах любые правила, которые могут быть причиной этого.

Исправьте, переназначив <Draggable />
Если удаление этого правила невозможно, в библиотеке есть решение и для этого, потому что вы можете использовать родитель или использовать портал в React (что они, однако, не рекомендуют)

 17.11.2020 09:21
У меня была такая же проблема с положением, когда я пытался показать react-beautiful-dnd внутри react-modal, и я нашел решение, добавив эти CSS к перетаскиваемым элементам.

.draggable {
  top: auto !important;
  left: auto !important;
}
 13.04.2021 15:37
Если вы не установили ключевую опору для перетаскиваемого компонента, ее установка может решить проблему. Это было для меня.

 14.09.2021 17:47
Другие вопросы по теме
Отказаться от функции «уйти с дороги»?
Как протестировать функцию «перетаскивания» из библиотеки react-beautiful-dnd с помощью Selenium в Java?
Draggables в react-beautiful-dnd не перетаскиваются, а только создают заполнитель
React-beautiful-dnd: не удается найти элемент ручки перетаскивания внутри Draggable
Есть ли способ добавить метку к перетаскиваемым и отбрасываемым элементам в react-dnd
Измените Json, чтобы использовать его в React, красивое перетаскивание
Response-beautiful-dnd draggable не отображается во время перетаскивания
Издевательство над react-beautiful-dnd с помощью Jest
React MaterialUI <ListItemSecondaryAction> зависает при перетаскивании внутрь react-beautiful-dnd Draggable?
Перетащить задачу в React JS с помощью кнопок
Похожие вопросы
Шуточный снимок прерывается эмоциями 10 / вавилон 7 с использованием фермента
React Router - не удается прочитать «историю» свойств неопределенного
Настройка видео реакции opentok для использования полной высоты вложенного div
Адаптивный макет в приложении React
Невозможно сопоставить массив в React
Созданная React Router ссылка запрещена по умолчанию
React-router не отображает функциональный компонент
Ленивая загрузка react-router-dom, webpack не работает
Как вызвать функцию генератора редукционной саги?
Обновите состояние с помощью setState ReactJs
Разделы
Блог

Вопросы

Теги

О сайте

Контакты
info@reddeveloper.ru
Правовая информация
Политика конфиденциальности

Пользовательское соглашение


Находите ответы на сложные технические вопросы по программированию, с которыми сталкиваются инженеры по всему миру в своей ежедневной практике на сайте RedDeveloper.

© 2026 «RedDeveloper.ru»

                RedDeveloper
Блог
Вопросы
Теги
Поиск...
Реагировать на ловушки в реагирующей библиотеке, выдающие неверную ошибку вызова ловушки
Вопросы
REACTJS
Реагировать на ловушки в реагирующей библиотеке, выдающие неверную ошибку вызова ловушки
Я создаю библиотеку реагирования, используя https://www.npmjs.com/package/create-react-library И успешно использовал его в другом проекте React. Но когда я попытался использовать функциональные возможности реагирующих хуков внутри библиотеки, это дало мне следующую ошибку.

Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
    1. You might have mismatching versions of React and the renderer (such as React DOM)
    2. You might be breaking the Rules of Hooks
    3. You might have more than one copy of React in the same app
.....
Моя библиотека Я только что попытался использовать useState в своем компоненте следующим образом.

import React, { useState } from 'react'

const General = (props) => {

    const [count, setCount] = useState(0);
    return (
        <div>
           General component
        </div>
    )
}

export default General
я использую "react": "^16.8.6" и "react-dom": "^16.8.6"

Мое приложение React Создал приложение с использованием https://github.com/facebook/создать-реагировать-приложение и использовал вышеуказанную библиотеку следующим образом.

import Reactfrom 'react'
import { General } from 'my.lib'
const accountSummary = props => {

  return (
    <div>
      <General>
    </div>
  )
}

export default accountSummary
Оба имеют одинаковые версии реакции, и библиотека использует те же версии реакции и реакции, что и peerDependencies

 07.05.2019 13:00
30
12
15 328
10
Данный вопрос помечен как решенный
 Ответы 10
Я создал библиотеку React с create-react-library этой библиотекой — вашим General компонентом. Я опубликовал его в npm здесь https://www.npmjs.com/package/stackoverflow-тест и в приложении React для использования здесь https://codesandbox.io/s/mm7yl83o28.

Просто нажмите на General component текст, и count будет увеличено.

Я не могу воспроизвести вашу проблему, просто используйте этот тест, чтобы проверить вашу реализацию.

 07.05.2019 15:25
 Ответ принят как подходящий
Я включил свою библиотеку компонентов (в этом отношении любую библиотеку) в свое приложение, как это сделал @Janith, используя my-comp-lib:"file:../.." (я не хочу публиковать каждый раз, когда хочу протестировать), и столкнулся с той же проблемой.

Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:

You might have mismatching versions of React and the renderer (such as React DOM)
You might be breaking the Rules of Hooks
You might have more than one copy of React in the same app See react-invalid-hook-call for tips about how to debug and
fix this problem

Я смог исправить это, заставив мое приложение и библиотеку указывать на одно и то же место реакции (пакета).

Below are the steps I followed :
1. In Your Application:
a) cd node_modules/react && npm link
b) cd node_modules/react-dom && npm link

2. In Your Library
a) npm link react
b) npm link react-dom

3)Stop your dev-server and do `npm start` again.
Оно работает!!

Пожалуйста, обратитесь к ссылкам ниже для получения более подробной информации ..

https://github.com/facebook/реагировать/issues/14721

https://github.com/facebook/реагировать/тянуть/14690

https://github.com/facebook/реагировать/issues/13991

Примечание. Эта проблема не возникнет, если вы опубликуете свой пакет в Artifactory и установите, потому что у вас будут react и react-dom в качестве одноранговых зависимостей, и они не будут включены в дистрибутив. Таким образом, ваш пакет и приложение используют ту же реакцию, которая установлена ​​в приложении.

 09.08.2019 02:40
Я только что столкнулся с той же проблемой. Я смог это исправить, указав на ту же реакцию в моем примере приложения, что и в моей библиотеке:

Структура приложения

Корень

Пример
пакет.json
источник (библиотека)
пакет.json
Итак, из примера > package.json я изменил реакцию на:

    "react": "link:../node_modules/react",
Это очень похоже на npm link, перечисленное выше, но оно не исчезнет при каждой установке npm.

 10.09.2019 20:38
У меня это сработало, когда я изменил ссылку из приложения на библиотеку на «ссылка:../» вместо «файл:../», в дополнение к связыванию реакции и реакции-дом.

 07.01.2020 21:53
Добавьте в свою библиотеку компонентов package.json

"peerDependencies": {
  "react": "<your version>"
}
так что ваш пакет lib будет использовать тот же пакет react, что и ваше основное приложение. https://nodejs.org/es/blog/npm/peer-dependencies/

 28.06.2020 14:46
React 17 + Библиотека тестирования React + Umi (интерфейсный фреймворк, встроенный реагирующий маршрутизатор)

В моем случае, когда я запускаю модульный тест, я получаю сообщение об ошибке «неверный вызов ловушки».

После периода попыток я нашел два способа решения.

Перейдите на React 16.x, тогда все будет хорошо.
Продолжайте использовать React 17.x и
Надо еще написать import React from 'react'
Установить react-router-dom отдельно
Я думаю, что это может быть проблема с реактивным маршрутизатором, но из-за моего ограниченного понимания у меня пока нет лучшего решения.

 24.04.2021 17:18
Также проверьте свою версию npm. У меня была версия 7.0.8 которая устарела, после смены на 6.14.8 все заработало нормально!

 03.06.2021 22:36
ПРИ ТЕСТИРОВАНИИ РЕАЛЬНОГО ПРИЛОЖЕНИЯ В REACT NATIVE

У меня такая же проблема, и я удаляю файл node_module в своей пользовательской библиотеке, и я исправил его.

проблема при установке прямого модуля

пряжа добавить c:/user......./react-native-some-lib

 05.07.2021 15:47
У меня была та же проблема, когда я работал с срочным монорепозиторием, настраивал пользовательский интерфейс и создавал приложения с использованием nextjs.

Решения были добавлены в следующий код на package.json

"resolutions": {
  "react": "17.0.1", // verificate your react version
  "react-dom": "17.0.1"
}
В библиотеке package.json:

"peerDependencies": {
   "react": "17.0.1",
   "react-dom": "17.0.1"
 },
Подробнее здесь: https://github.com/vercel/next.js/issues/9022#issuecomment-728688452

 03.08.2021 06:12
В моем случае я создаю свою собственную общую библиотеку. Хотя я экспортировал createContext, useContext и useState из "react", я просто забыл также импортировать экспорт по умолчанию, React.

Изменение моего оператора импорта с этого:
import { createContext, useContext, useState } from "react";

на это:
import React, { createContext, useContext, useState } from "react";

исправил это для меня. Возможно, вам придется сделать это в каждом компоненте/контексте React и т. д., которые вы экспортируете из своей библиотеки реагирования.

Редактировать:

В другом из моих приложений, использующих эту общую библиотеку, эта проблема также была исправлена ​​с помощью npm link, как описано в документации React (Предупреждение о недопустимом хуке):

This problem can also come up when you use npm link or an equivalent. In that case, your bundler might “see” two Reacts — one in application folder and one in your library folder. Assuming myapp and mylib are sibling folders, one possible fix is to run npm link ../myapp/node_modules/react from mylib. This should make the library use the application’s React copy.

Итак, в моем случае я перешел к своей общей библиотеке и запустил npm link ../path-to-my-app/node_modules/react.

Изменить (23.02.2022)

Надеемся, что окончательное редактирование - другое решение состоит в том, чтобы просто глобально установить проблемную зависимость, если все приложения предполагают использовать одну и ту же версию, например. npm install react -g

 16.02.2022 11:42
Другие вопросы по теме
This.props.history.push работает сразу после обновления
Заменить текущий URL без перезагрузки страницы
Я пытаюсь добавить компоненты, которые хранятся в отдельных файлах .js, на новую страницу при использовании Redirect из react-router-dom?
Вложенные маршруты вместе с редукционной интеграцией не работают?
Передать переменную в реквизитах компонента Route в 'react-router-dom'
Показать github, youtube как прогресс при каждом изменении маршрута
Ссылка отображается, но не перенаправляется с помощью <Link>
Реагировать на добавление события для перехода пользователя на маршрут
Компонент Firebase/React/Redux имеет странное поведение при обновлении, состояние должно быть в порядке
Вложенные маршруты в реакции не отображают вложенный компонент
Похожие вопросы
Добавление пользовательских цветов в палитру приводит к тому, что объект, возможно, «не определен». ТС2532
Реакция: стиль шрифта большого календаря
Увеличение и уменьшение высоты div при прокрутке (React)
Как получить доступ к свойству в функции, отправив значения из вызова функции
Как сохранить URL-адрес загруженного файла в firebase, используя реакцию
TypeScript: создание типа или интерфейса значений перечисления
Мой сервер NodeJS падает после 6 запросов на отправку Axios
Как визуализировать svg в реагирующем компоненте
Как протестировать стилизованный компонент, чтобы иметь свойство с Jest и Enzyme
Хуки и Redux Saga
Разделы
Блог

Вопросы

Теги

О сайте

Контакты
info@reddeveloper.ru
Правовая информация
Политика конфиденциальности

Пользовательское соглашение


Находите ответы на сложные технические вопросы по программированию, с которыми сталкиваются инженеры по всему миру в своей ежедневной практике на сайте RedDeveloper.

© 2026 «RedDeveloper.ru»

                RedDeveloper
Блог
Вопросы
Теги
Поиск...
Уведомление об устаревании: ReactDOM.render больше не поддерживается в React 18
Вопросы
JAVASCRIPT
Уведомление об устаревании: ReactDOM.render больше не поддерживается в React 18
Я получаю эту ошибку каждый раз, когда создаю новое приложение React, и я не знаю, как это исправить:

Warning: ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot

Я создал свое приложение для реагирования, используя: npx create-react-app my-app

 29.03.2022 22:11
22
0
21 265
10
Данный вопрос помечен как решенный
 Ответы 10
 Ответ принят как подходящий
В вашем файле index.js измените на:

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
 29.03.2022 22:29
Как указано в вашей ошибке, ReactDOM.render больше не поддерживается. Так что используйте новый createRoot. Как видно из приведенного ниже кода (который был взят из документы), все, что вам нужно сделать, это заменить ReactDOM.render на createRoot.

// Before
import { render } from 'react-dom';
const container = document.getElementById('app');
render(<App tab = "home" />, container);

// After
import { createRoot } from 'react-dom/client';
const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App tab = "home" />);
 29.03.2022 22:31
Чтобы обеспечить более или менее эквивалент предыдущих версий реакции, я использую эту слегка сжатую версию вышеизложенного, по-прежнему окружая <App><React.StrictMode>. Еще одна причина, по которой я сокращаю это, заключается в том, что мне никогда не нужен доступ к корневой переменной, в результате чего операторы объединяются в цепочку, и весь файл состоит всего из 5 строк кода:

import React from 'react';
import ReactDOM from "react-dom/client";

import './index.css';
import App from './App';

    ReactDOM.createRoot(document.querySelector("#root")).render(<React.StrictMode><App /></React.StrictMode>);
[P.S. Не забудьте, если вам нужна функциональность webvitals, чтобы также добавить к приведенному выше коду]

 30.03.2022 08:16
Как вы сказали, вы создали свое приложение React, используя: npx создать-реагировать-приложение мое-приложение.

Ваш index.js должен выглядеть так после выполнения команды.
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
Ваш код после правок, упомянутых в консоли
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);

reportWebVitals();
 30.03.2022 13:17
React 18 был отправлен вчера (29 марта). ReactDOM.render устарела в React18 и в настоящее время выдает предупреждение и работает в совместимом режиме.

Устаревшие

Устаревшие

react-dom: ReactDOM.render устарело. Его использование предупредит и запустит ваше приложение в режиме React 17.
react-dom: ReactDOM.hydrate устарело. Его использование предупредит и запустит ваше приложение в режиме React 17.
react-dom: ReactDOM.unmountComponentAtNode устарело.
react-dom: ReactDOM.renderSubtreeIntoContainer устарело.
react-dom/server: ReactDOMServer.renderToNodeStream устарело.
Чтобы решить эту проблему, вы можете либо вернуться к предыдущей версии React, либо обновить файл index.js, чтобы он соответствовал синтаксису React 18.

Пример:

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
 31.03.2022 04:42
В вашем файле index.js:

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// Используйте это, прежде чем реагировать на версию 18

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );
// Используйте это в версии реакции 18

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
 31.03.2022 11:38
Это должно сделать это:

import React from 'react';
import {createRoot}  from 'react-dom/client';
import App from './App';

const root = createRoot(document.getElementById("root"))
root.render
  (
    <App />
  )
 31.03.2022 21:54
React 18 был выпущен 29 марта 2022 года, и нам нужно знать о нескольких критические изменения и Устаревшие.

react-dom: ReactDOM.render устарел. Использование этого предупредит и запустите свое приложение в режиме React 17.
react-dom: ReactDOM.hydrate устарел. Использование этого предупредит и запустите свое приложение в режиме React 17.
react-dom: ReactDOM.unmountComponentAtNode устарел.
react-dom: ReactDOM.renderSubtreeIntoContainer устарел.
react-dom/server: ReactDOMServer.renderToNodeStream был устарел.
React 18 поставляет два корневых API: Legacy Root API и New Root API.

Устаревший корневой API: Это существующий API с именем ReactDOM.render. Он создает корень, работающий в «устаревшем» режиме, который работает так же, как React 17. Перед выпуском мы добавим в этот API предупреждение о том, что он устарел, и переключимся на New Root API.

Новый корневой API: Новый корневой API вызывается с помощью ReactDOM.createRoot. Он создает корень, работающий в React 18, который добавляет все улучшения React 18 и позволяет вам использовать параллельные функции. Это будет корневой API в будущем.

В New Root API вызывающая сторона создает корень, а затем вызывает для него рендеринг:

import * as ReactDOMClient from 'react-dom/client';
import App from 'App';

const container = document.getElementById('app');

// Create a root.
const root = ReactDOMClient.createRoot(container);

// Initial render: Render an element to the root.
root.render(<App tab = "home" />);

// During an update, there's no need to pass the container again.
root.render(<App tab = "profile" />);
Также проверьте официальную документацию React для обновление до реактивной версии 18.

Ссылка: ReactDOM.render больше не поддерживается в React 18.

 02.04.2022 00:30
// До

import { render } from 'react-dom';
const container = document.getElementById('app');
render(<App tab = "home" />, container);
// После

import { createRoot } from 'react-dom/client';
const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App tab = "home" />);
//До того, как в вашем файле index.js

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
// Измените, как показано ниже, в файл index.js импортировать React из «реагировать»;

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<React.StrictMode>
  <App />
</React.StrictMode>);


reportWebVitals();
 06.04.2022 09:34
Если ваше приложение использует React-Router, то следующий код будет работать нормально:

import { createRoot } from "react-dom/client";
const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
Он будет работать отлично (с реактивным маршрутизатором)

 06.04.2022 10:46
Другие вопросы по теме
Не удается сопоставить полученные данные из пользовательского хука useFetch()
Ошибка при повторном развертывании моего реагирующего приложения с помощью nodemon, он продолжает говорить: «Плагин «реагировать» конфликтовал между «package.json» eslint-config-react»-app »
Реагировать на проблему добавления className
Как вызвать компонент класса с переменной?
Отображение ответа от API в компоненте реакции
Изменить значок с FontAwesomeIcon на функцию (onChange Text Input)
Почему мой onSubmit не работает в диалоговом окне PrimeReact?
Шаги Antd формируют проверку в reactjs
Маршрутизатор React с ленивым и приостановкой всегда возвращается к маршруту с подстановочными знаками при обновлении страницы
Использование node-fetch в приложении React — «Не удается найти модуль «узел: http»»
Похожие вопросы
Javascript: как захватить «DOMException: Aborted» из AbortController в операторе IF?
Плагин Croppie неправильно обрезает изображение, когда я использую модальное окно
Ошибка при повторном развертывании моего реагирующего приложения с помощью nodemon, он продолжает говорить: «Плагин «реагировать» конфликтовал между «package.json» eslint-config-react»-app »
Jacascript Loop — пропустить шаг на основе переменной
Правило Firestore не работает на игровой площадке правил (как и ожидалось), но проходит на моем действующем сайте
Как я могу остановить цикл от завершения, когда он получает первый возвращенный объект из API?
Отображение ответа от API в компоненте реакции
Как включить/отключить кнопку на основе определенного входного значения?
Как мне сделать этот вывод более аккуратной строкой меньшего размера?
API карты Google показывает маркеры внутри многоугольника рисования
Разделы
Блог

Вопросы

Теги

О сайте

Контакты
info@reddeveloper.ru
Правовая информация
Политика конфиденциальности

Пользовательское соглашение


Находите ответы на сложные технические вопросы по программированию, с которыми сталкиваются инженеры по всему миру в своей ежедневной практике на сайте RedDeveloper.

© 2026 «RedDeveloper.ru»

                RedDeveloper
Блог
Вопросы
Теги
Поиск...
Импорт "rest_framework" не может быть разрешен. Но я установил djangorestframework, я не знаю, что происходит
Вопросы
PYTHON
Импорт "rest_framework" не может быть разрешен. Но я установил djangorestframework, я не знаю, что происходит
Вот мои настройки.py:

INSTALLED_APPS = [
    'rest_framework',
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'api.apps.ApiConfig'
]
 19.12.2020 12:57
19
4
23 765
10
Данный вопрос помечен как решенный
 Ответы 10
 Ответ принят как подходящий
Если вы используете VSCode, Ctrl + Shift + P -> Введите и выберите «Python: Select Interpreter» и войдите в виртуальную среду вашего проекта. Это то, что сработало для меня.

 21.12.2020 23:26
Запустить в терминале

pip install django-rest-framework
Добавьте 'rest_framework' в УСТАНОВЛЕННЫЕ ПРИЛОЖЕНИЯ в settings.py

Если это не работает, перезапустите редактор (vscode или что-то в этом роде)

 22.07.2021 20:41
Добавьте свой файл python, например C:\Users\hendrialqory\AppData\Local\Programs\Python\Python39-32\Lib\site-packages, перейдите к настройке переменных среды и введите свой файл python.

 31.08.2021 05:22
Контрол + шифт + р.
введите «Python: Select Interpreter» и выберите то же самое.
выберите свою виртуальную среду из списка если его нет в списке, выберите Введите путь интерпретатора'
Укажите путь следующим образом: «c:\users\user\django\myvenv\scripts\python.ex»
 10.02.2022 18:30
Что делать, если вы выбрали правильный интерпретатор (интерпретатор виртуальной среды), но все равно получаете эту ошибку?

Затем сначала проверьте путь вашего пипа в терминале этой виртуальной среды.
Используйте эту команду: which pip
Он должен указывать только на путь, по которому находится папка вашей виртуальной среды, например:

name_of_virtualenv/bin/pip
name_of_virtualenv/скрипты/пип

Если показано иначе, для решения этой проблемы:

удалите папку виртуальной среды и создайте ее снова.
which pip теперь должен показывать правильный путь в новом виртуальном терминале env.
переустановите пакеты.
 29.04.2022 22:09
У меня была аналогичная проблема.

перейдите в папку venv> Lib
убедитесь, что вы видите папку djangorestframework и rest_framework
если они отсутствуют, вы должны знать, что вы устанавливаете эти пакеты. в неправильном venv.
 27.05.2022 17:05
Мне помогли ответы @nayburz и @Faseela.

Контрол + шифт + р.
введите «Python: Select Interpreter» и выберите то же самое.
выберите свою виртуальную среду из списка, если ее нет в списке, выберите «Ввести путь к интерпретатору».
путь к вашему виртуальному файлу env python.exe.
мой был: D:\Python\Python_Django\trydjango\env\Scripts\python.exe

Вы можете найти аналогичный путь в соответствии с вашим проектом

 23.09.2022 03:32
для других, использующих venv, и если выполнение «Python: выбор интерпретатора» и выбор вашего venv не работает, попробуйте выполнить следующие действия. Это для Мака.

открыть терминал
перейдите в папку вашего проекта.
активировать виртуальную среду (> source {path_to_venv_home}\bin\activate)
теперь откройте vscode с помощью «кода».
В случае «код .» не работает, тогда следует добавить к вашему пути. Попробуйте раздел «Запуск из командной строки» из https://code.visualstudio.com/docs/setup/mac

 24.09.2022 11:51
Если вы установили все, как указано здесь, и у вас все еще есть эта ошибка. убедитесь, что вы проверили в своем редакторе кода, находитесь ли вы в каталоге, где находится ваша виртуальная среда.

Стоит отметить, что когда вы открываете редактор кода (например, код VS), убедитесь, что вы открываете его в каталоге, где находится ваша виртуальная среда (venv). это обязательно будет так.

 30.10.2022 08:09
Для тех, кто использует VSCode, если выбор интерпретатора Python все еще не удался, а также, когда вы запускаете which pip, результат не указывает на вашу виртуальную среду, что-то path/to/myvenv/bin/pip, тогда сделайте следующее:

Удалить текущую виртуальную среду
Перейдите в каталог, в котором должна находиться ваша виртуальная среда.
Создайте новый, выполнив команду: python3 -m venv myvenv
Активируйте виртуальную среду, выполнив команду: source venv/bin/activate
Если все пойдет хорошо, вы сможете увидеть имя вашей виртуальной среды в командной строке терминала. Например, (myvenv) user@computer:~$
Теперь запуск which pip должен вывести что-то вроде /path/to/myvenv/bin/pip как подтверждение того, что ваша виртуальная среда настроена и активирована.
Теперь вы можете переустановить пакет rest_framework как pip install djangorestframework, и pylance сможет распознать rest_framework
По крайней мере, это сработало для меня, когда я столкнулся с теми же проблемами с линтером. Также обратите внимание, что вам нужно будет активировать виртуальную среду каждый раз, когда вы открываете новое окно терминала перед выполнением любой команды, например pip, python и других.

 28.04.2023 10:08
Другие вопросы по теме
Результат теста - имя класса не обновлено
В React Hook useEffect отсутствует зависимость: «История»
ReactDOM не определяется с помощью react/17.0.1/umd/react.development.js
Почему автоматическое определение otp не отображает код в React
Ссылки маршрутизатора ReactJS не работают при нажатии на них
Преобразование проекта React/Relay в TypeScript — ошибка синтаксического анализа при импорте типа
Добавляйте элементы React динамически в зависимости от высоты контента
Есть ли способ загрузить весь оставшийся фрагмент после загрузки основного фрагмента или вручную указать, какой фрагмент загружать - Webpack
Как показать местоположение маркера из localStorage в листовке реакции
Запрос PUT API выборки Javascript
Похожие вопросы
Невозможно автоматически определить частоту кадра данных Quandl Time Series
Как обновить графический интерфейс Python?
Проблема с отображением вывода DFT с imshow openCV
Как перехватить первое значение генератора и прозрачно вывести из остальных
«exists_or_mkdir» не определено после использования Oct2Py в файле *.m (Matlab) в Google Colab
Как скопировать один элемент списка по ссылке, а не по значению?
Ошибка в цикле Python при попытке очистки с помощью BeautifulSoup
Обучение модели Fasttext
Itertools Permutation: возврат только определенных комбинаций
Работа с прозрачным фоном с помощью OpenCV
Разделы
Блог

Вопросы

Теги

О сайте

Контакты
info@reddeveloper.ru
Правовая информация
Политика конфиденциальности

Пользовательское соглашение


Находите ответы на сложные технические вопросы по программированию, с которыми сталкиваются инженеры по всему миру в своей ежедневной практике на сайте RedDeveloper.

© 2026 «RedDeveloper.ru»

                                      RedDeveloper
Блог
Вопросы
Теги
Поиск...
React Router V6 — ошибка: useRoutes () может использоваться только в контексте компонента <Router>
Вопросы
REACTJS
React Router V6 — ошибка: useRoutes () может использоваться только в контексте компонента <Router>
Я установил react-router-domV6-beta. Следуя примеру с веб-сайта, я могу использовать новую опцию useRoutes. Я настроил маршруты страниц и возвращаю их в файл App.js.

После сохранения получаю следующую ошибку:

Ошибка: useRoutes() можно использовать только в контексте компонента.

Мне интересно, если я что-то пропустил здесь? Я создал страницы внутри папки src/pages.

Мой код:

import { BrowserRouter, Link, Outlet, useRoutes } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Prices from './pages/Prices';
import Contact from './pages/Contact';

const App = () => {
    const routes = useRoutes([
        { path: '/', element: <Home /> },
        { path: 'o-nama', element: <About /> },
        { path: 'usluge', element: <Services /> },
        { path: 'galerija', element: <Gallery /> },
        { path: 'cjenovnik', element: <Prices /> },
        { path: 'kontakt', element: <Contact /> }
    ]);

    return routes;
};

export default App;
 23.12.2020 15:26
95
0
192 866
10
Данный вопрос помечен как решенный
 Ответы 10
Я думаю, проблема в том, что вам все еще нужно обернуть routes (Routes/useRoutes) внутри элемента Router.

Таким образом, пример будет выглядеть примерно так:

import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";

const Component1 = () => {
  return <h1>Component 1</h1>;
};

const Component2 = () => {
  return <h1>Component 2</h1>;
};

const App = () => {
  let routes = useRoutes([
    { path: "/", element: <Component1 /> },
    { path: "component2", element: <Component2 /> },
    // ...
  ]);
  return routes;
};

const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default AppWrapper;
Рефакторинг в соответствии с вашими потребностями.

 23.12.2020 17:04
это означает, что в вашем индексе js или приложение JS обертывается с помощью BrowserRouter, как это

import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
    <React.StrictMode>
        <Provider store = {store}>
            <BrowserRouter>  // Like This here I am using
                <App />
           </BrowserRouter>
       </Provider>
    </React.StrictMode>,
    document.getElementById("root"),
);

 02.02.2021 21:24
Упомяните ниже код в index.js

import { BrowserRouter as Router } from "react-router-dom";
 07.04.2021 12:17
 Ответ принят как подходящий
У вас должен быть <BrowserRouter> (или любой из предоставленных маршрутизаторов) выше в дереве. Причина этого в том, что <BrowserRouter> предоставляет контекст истории, который необходим во время создания маршрутов с использованием useRoutes(). Обратите внимание, что более высокий уровень означает, что он не может быть в самом <App>, но, по крайней мере, в компоненте, который его отображает.

Вот как может выглядеть ваша точка входа:

import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root'),
);

 01.11.2021 12:05
Просто хочу сообщить о похожей проблеме — на момент написания (v6.2.1) кажется, что вы действительно сталкиваетесь с этой ошибкой, если вы импортируете из react-router вместо react-router-dom. Дорогостоящая опечатка с моей стороны.

То есть убедитесь, что вы импортируете Routes и Route из react-router-dom, а НЕ react-router

// This is deceptively valid as the components exist, but is not the intended usage
import { Routes, Route } from 'react-router';

// This works and is the intended usage
import { Routes, Route } from 'react-router-dom';
 11.01.2022 01:04
Код: index.js

import {BrowserRouter as Router}  from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
  <Router>
    <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
app.js

function App() {
  return (
  <>
    <Routes>
    <Route path  = "/" element = {<Main />} />
    <Route path  = "gigs" element = {<Gigs />} />
    </Routes>
</>
  );
}
 16.03.2022 15:28
> Following codes works since react-router-dom syntax changed because of React 18.

  import logo from './logo.svg';
    import './App.css';
    import Header from './components/Header';
    import Login from './components/Login';
    import {
      BrowserRouter as Router,
      Routes,
      Route,
      useRoutes,
    } from 'react-router-dom';
    import Signup from './components/Signup';
    
    function AppRoutes() {
      const routes = useRoutes(
        [
          {path:'/',element:<Login/>},
          {path:'/signup',element:<Signup/>}
        ]
      )
      return routes;
    }
    function App(){
      return (
        <Router>
          <Header/>
          <AppRoutes />
        </Router>
      )
    }
    
    export default App;
 29.03.2022 22:46
Пытаться

const Routes = () => useRoutes([]) 
а затем оберните это так в App.js

<BrowserRouter> 
    <Routes />
</BrowserRouter>
Это сработало для меня

 15.11.2022 09:18
Попробуйте добавить свои маршруты в index.js, а не в App.js. Ваш App.js вызывается из index.js. В index.js ваша внешняя страница называется так

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Navbar />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
 17.11.2022 16:39
Я получил эту ошибку, потому что у меня были две разные версии react-router-dom в комплекте.

Если вы используете рабочие пространства npm/yarn, убедитесь, что в папке node_modules верхнего уровня установлена ​​только одна версия react-router-dom.

 06.02.2023 05:05
Другие вопросы по теме
Реагируйте на маршрутизацию, чтобы получить пакеты во вложенной папке
Как интегрировать React Router в Meteor?
Как настроить NGINX для перенаправления приложения React Router, созданного на поддоменах?
Реагировать-маршрутизатор с контекстом - почему он не работает с якорем и ссылкой
Почему реагирующая одностраничная навигация работает только в компонентах без конструктора и состояния?
React router Ссылка на кнопку условного рендеринга
Как перенаправить успешный вход с Axios на другую страницу?
Как сформировать URL-адрес обратного вызова в строку запроса в ответных хуках
Вложение маршрутизатора React
Typescript не может разрешить реакцию-маршрутизатор-дом
Похожие вопросы
Как передать строку запроса из Shopify во встроенное приложение?
Как создать функцию в Reactjs, которая не вызывается прослушивателем событий?
Как я могу обновить хук из одного компонента и в результате обновить другой компонент?
Как удалить дочерний элемент div в реакции с помощью хука useRef?
Проблема в создании, обновлении и удалении куки с использованием реактивного куки
Рендеринг внутреннего цикла React JSX
Переключить неработающие флажки пользовательского интерфейса материала при печати в цикле
Как сделать запрос API автоматически в React?
Не удалось поймать ошибку в axios react.js
Компонент автозаполнения React, вызывайте конечную точку каждый раз, когда набирается буква
Разделы
Блог

Вопросы

Теги

О сайте

Контакты
info@reddeveloper.ru
Правовая информация
Политика конфиденциальности

Пользовательское соглашение


Находите ответы на сложные технические вопросы по программированию, с которыми сталкиваются инженеры по всему миру в своей ежедневной практике на сайте RedDeveloper.

© 2026 «RedDeveloper.ru»

                                      RedDeveloper
Блог
Вопросы
Теги
Поиск...
ComponentWillReceiveProps, componentDidUpdate для React Hook
Вопросы
JAVASCRIPT
ComponentWillReceiveProps, componentDidUpdate для React Hook
Я сталкиваюсь с двумя проблемами:

Даже если в соответствии с рекомендациями React производное состояние не рекомендуется, но в некоторых крайних случаях он все же нужен.
С точки зрения функционального компонента с React Hook, Какова эквивалентная реализация с React Hook, если мне нужно производное состояние, которое в компоненте класса будет обновляться в componentWillReceiveProps при каждом родительском рендеринге
см. пример кода ниже:

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: props.count > 100 ? 100 : props.count,
    }

  }

  /*What is the equivalent implementation when React Hook is used here componentWillReceiveProps*/
  componentWillReceiveProps(nextProps) {
    if (nextProps.count !== this.props.count) {
      this.setState({
        count: nextProps.count > 100 ? 100 : nextProps.count
      });
    }
  }

  render() {
    return ( <
      div > {
        this.state.count
      } <
      /div>
    );
  }
}

export default App;
Что касается componentDidUpdate, у componentDidUpdate есть аналог, когда используется React Hook, вы должны использовать его так:

  React.useEffect(() => {
    return () => {

     };
  }, [parentProp]);
Второй параметр для useEffect гарантирует, что код будет выполняться только при изменении пропса, но что, если я хочу выполнять соответствующие задачи на основе нескольких соответствующих изменений реквизита? как это сделать с использованиемЭффект?

см. пример кода ниже:

class App extends Component {


  /*What is the equivalent implementation when functional component with React Hook is used here */
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.groupName !== this.props.groupName) {
      console.info('Let'
        's say, I do want to do some task here only when groupName differs');
    } else if (prevProps.companyName !== this.props.companyName) {
      console.info('Let'
        's say, I do want to do some different task here only when companyName differs');
    }

  }


  render() {
    /*for simplicity, render code is ignored*/
    return null;
  }
}

export default App;
 23.02.2019 17:35
63
0
71 647
10
 Ответы 10
Вы можете использовать хук useMemo для хранения вычислений и поместить props.count в массив, указанный в качестве второго аргумента, чтобы пересчитать значение при его изменении.

const { useState, useEffect, useMemo } = React;

function App() {
  const [count, setCount] = useState(50);

  useEffect(() => {
    setTimeout(() => {
      setCount(150);
    }, 2000);
  }, []);

  return <DisplayCount count = {count} />;
}

function DisplayCount(props) {
  const count = useMemo(() => props.count > 100 ? 100 : props.count, [props.count]);

  return <div> {count} </div>;
}

ReactDOM.render(<App />, document.getElementById("root"));
<script src = "https://unpkg.com/react@16/umd/react.production.min.js"></script>
<script src = "https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>

<div id = "root"></div>
Самый простой способ сделать отдельные эффекты при изменении отдельных реквизитов — создать несколько хуков useEffect, которые запускаются только при изменении одного из отдельных реквизитов.

const { useState, useEffect } = React;

function App() {
  const [groupName, setGroupName] = useState('foo');
  const [companyName, setCompanyName] = useState('foo');

  useEffect(() => {
    setTimeout(() => {
      setGroupName('bar');
    }, 1000);
    setTimeout(() => {
      setCompanyName('bar');
    }, 2000);
  }, []);

  return <DisplayGroupCompany groupName = {groupName} companyName = {companyName} />;
}

function DisplayGroupCompany(props) {
  useEffect(() => {
    console.info("Let's say, I do want to do some task here only when groupName differs");
  }, [props.groupName])
  useEffect(() => {
    console.info("Let's say,I do want to do some different task here only when companyName differs");
  }, [props.companyName])

  return <div> {props.groupName} - {props.companyName} </div>;
}

ReactDOM.render(<App />, document.getElementById("root"));
<script src = "https://unpkg.com/react@16/umd/react.production.min.js"></script>
<script src = "https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>

<div id = "root"></div>
 23.02.2019 18:18
Я понимаю, что ваш пример «производного состояния» намеренно прост, но поскольку существует так мало законных случаев производного состояния, трудно дать рекомендацию по замене, кроме как в каждом конкретном случае, поскольку это зависит от причины, по которой вы используют производное состояние. В приведенном вами конкретном примере не было причин использовать производное состояние в случае класса, и поэтому по-прежнему нет причин в случае ловушки (значение может быть просто получено локально, не помещая его в состояние). Если полученное значение дорого, вы можете использовать useMemo как подарок Tholle. Если они не соответствуют более реалистичным случаям, которые вы имеете в виду, вам нужно будет представить более конкретный случай, который действительно требует производного состояния.

Что касается вашего примера componentDidUpdate, если то, что вы хотите сделать для разных реквизитов, является независимым, то вы можете использовать отдельные эффекты для каждого (например, несколько вызовов useEffect). Если вы хотите сделать точно, как в вашем примере (т. е. сделать что-то только для companyName изменения, если groupName также не изменилось, как указано вашим else if), вы можете использовать судьи для более сложных условий. Вы должны нет изменить ссылку во время рендеринга (всегда существует вероятность того, что рендеринг будет отброшен/переделан после поддержки параллельного режима), поэтому в примере используется последний эффект для обновления ссылок. В моем примере я использую ссылку, чтобы избежать работы с эффектами при первоначальном рендеринге (см. ответ Толле в этот связанный вопрос) и определить, изменилось ли groupName, при принятии решения о том, следует ли выполнять работу на основе companyName изменения.

const { useState, useEffect, useRef } = React;

const DerivedStateFromProps = ({ count }) => {
  const derivedCount = count > 100 ? 100 : count;

  return (
    <div>
      Derived from {count}: {derivedCount}{" "}
    </div>
  );
};
const ComponentDidUpdate = ({ groupName, companyName }) => {
  const initialRender = useRef(true);
  const lastGroupName = useRef(groupName);
  useEffect(
    () => {
      if (!initialRender.current) {
        console.info("Do something when groupName changes", groupName);
      }
    },
    [groupName]
  );
  useEffect(
    () => {
      if (!initialRender.current) {
        console.info("Do something when companyName changes", companyName);
      }
    },
    [companyName]
  );
  useEffect(
    () => {
      if (!initialRender.current && groupName === lastGroupName.current)
        console.info(
          "Do something when companyName changes only if groupName didn't also change",
          companyName
        );
    },
    [companyName]
  );
  useEffect(
    () => {
      // This effect is last so that these refs can be read accurately in all the other effects.
      initialRender.current = false;
      lastGroupName.current = groupName;
    },
    [groupName]
  );

  return null;
};
function App() {
  const [count, setCount] = useState(98);
  const [groupName, setGroupName] = useState("initial groupName");
  const [companyName, setCompanyName] = useState("initial companyName");
  return (
    <div>
      <div>
        <DerivedStateFromProps count = {count} />
        <button onClick = {() => setCount(prevCount => prevCount + 1)}>
          Increment Count
        </button>
      </div>
      <div>
        <ComponentDidUpdate groupName = {groupName} companyName = {companyName} />
        groupName:{" "}
        <input
          type = "text"
          value = {groupName}
          onChange = {event => setGroupName(event.target.value)}
        />
        <br />
        companyName:{" "}
        <input
          type = "text"
          value = {companyName}
          onChange = {event => setCompanyName(event.target.value)}
        />
        <br />
        change both{" "}
        <input
          type = "text"
          onChange = {event => {
            const suffix = event.target.value;
            setGroupName(prev => prev + suffix);
            setCompanyName(prev => prev + suffix);
          }}
        />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
<div id = "root"></div>
<script crossorigin src = "https://unpkg.com/react@16/umd/react.development.js"></script>
<script crossorigin src = "https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
Edit Derived state and componentDidUpdate

 23.02.2019 19:09
В вашем сценарии вам вообще не нужно использовать или повторно реализовывать getDerivedStateFromProps. Вам просто нужно создать новую переменную, чтобы получить новую форму данных. Использование состояния в этом сценарии просто вызовет еще один повторный рендеринг, что не очень хорошо с точки зрения производительности.

import React from 'react';

const App = ({ count }) => {
  const derivedCount = count > 100 ? 100 : count;

  return (
    <div>Counter: {derivedCount}</div>
  );
}

App.propTypes = {
  count: PropTypes.number.isRequired
}
Демо здесь: https://codesandbox.io/embed/qzn8y9y24j?fontsize=14

Вы можете узнать больше о различных способах решения таких сценариев без использования getDerivedStateFromProps здесь: https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

Если вам действительно нужно использовать отдельное состояние, вы можете использовать что-то вроде этого

import React, { useState } from 'react';

const App = ({ count }) => {
  const [derivedCounter, setDerivedCounter] = useState(
    count > 100 ? 100 : count
  );

  useEffect(() => {
    setDerivedCounter(count > 100 ? 100 : count);
  }, [count]); // this line will tell react only trigger if count was changed

  return <div>Counter: {derivedCounter}</div>;
};
 29.04.2019 10:06
Хук реакции, эквивалентный старому реквизиту componentWillReceive, можно сделать с помощью хука useEffect, просто указав реквизит, который мы хотим прослушивать на предмет изменений в массиве зависимостей.

То есть:

export default (props) => {

    useEffect( () => {
        console.info('counter updated');
    }, [props.counter])

    return <div>Hi {props.counter}</div>
}
Для componentDidUpdate просто опуская массив зависимостей, функция useEffect будет вызываться после каждого повторного рендеринга.

То есть:

export default (props) => {

    useEffect( () => {
        console.info('counter updated');
    })

    return <div>Hi {props.counter}</div>
}
 11.10.2019 18:17
setCount вызовет повторный рендеринг. Использование useEffect с [count] в качестве массива зависимостей гарантирует, что хук будет вызывать setCount только при изменении значения count.

Вот как вы заменяете любую componentWillReceiveProps логику, которую вы могли бы написать в старом стиле React, основанном на классах. Я считаю полезным принцип «Каждый рендер имеет свои реквизиты и состояние»: если вы хотите инициировать повторный рендеринг только при изменении определенных свойств, у вас может быть несколько хуков useEffect.

useEffect(() => {
  count > 100 ? setCount(100) : setCount(count)
}, [count]) 
 
useEffect(() => {
  console.info('groupName has changed');
  // do something with groupName
}, [groupName])
    
useEffect(() => {
  console.info('companyName has changed');
  // do something with companyName
}, [companyName]) 
 24.10.2019 11:09
просто используя useEffect вот так.

useEffect( () => {
    props.actions.fetchSinglePost(props.match.params.id); //> I'm dispatching an action here.
}, [props.comments]) //> and here to watch comments and call the action in case there is any change.
 01.04.2020 00:50
1.) What is the equivalent implementation with React Hook, If I do need derived state?

Производное состояние для хуков = установить состояние условно и напрямую на этапе рендеринга:

constComp = (props) => {
  const [derivedState, setDerivedState] = useState(42);
  if (someCondition) {
    setDerivedState(...);
  }
  // ...
}
Это обновляет состояние без дополнительной фазы фиксации, в отличие от useEffect. Приведенный выше шаблон поддерживается Реагировать на строгий режим (без предупреждений):

const App = () => {
  const [row, setRow] = React.useState(1);

  React.useEffect(() => {
    setTimeout(() => {
      setRow(2);
    }, 3000);
  }, []);

  return (
    <React.StrictMode>
      <Comp row = {row} />
    </React.StrictMode>
  );
}

const Comp = ({ row }) => {
  const [isScrollingDown, setIsScrollingDown] = React.useState(false);
  const [prevRow, setPrevRow] = React.useState(null);

  console.info("render, prevRow:", prevRow)

  if (row !== prevRow) {
    console.info("derive state");
    // Row changed since last render. Update isScrollingDown.
    setIsScrollingDown(prevRow !== null && row > prevRow);
    setPrevRow(row);
  }

  return `Scrolling down: ${isScrollingDown}`;
};

ReactDOM.render(<App />, document.getElementById("root"));
<script src = "https://cdnjs.cloudflare.com/ajax/libs/react/16.13.1/umd/react.development.js" integrity = "sha256-4gJGEx/zXAxofkLPGXiU2IJHqSOmYV33Ru0zw0TeJ30 = " crossorigin = "anonymous"></script>
<script src = "https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.13.1/umd/react-dom.development.min.js" integrity = "sha256-9xBa2Hcuh2S3iew36CzJawq7T9iviOAcAVz3bw8h3Lo = " crossorigin = "anonymous"></script>
<div id = "root"></div>
Примечание 1: componentWillReceiveProps уже давно устарел. getDerivedStateFromProps является преемником компонентов класса с точки зрения производного состояния.

Заметка 2: Проверьте предпочтительные решения, прежде чем вы прибегнете к производному состоянию.

2.) What if I want to do respective tasks based on multiple respective props changes?

Вы можете либо полностью убрать useEffect deps, либо добавить еще один реквизит:

React.useEffect(() => {
  return () => { };
}, [parentProp, secondProp]);
 20.04.2020 20:40
Если вы используете хук useMemo поверх вашего компонента и он зависит от всех ваших реквизитов, он запускается перед всем при каждом изменении реквизитов. useEffect срабатывает после обновленного рендеринга и, поскольку зависит от всех реквизитов, он срабатывает после повторного рендеринга в зависимости от всех реквизитов.

const Component = (...props) => {
   // useState, useReducer if have
   useMemo(() => {
     // componentWillReceiveProps
   },[...props]);
   // ...other logic and stuff
   useEffect(() => {
     // componentDidUpdate
   }, [...props]);
};
 02.07.2020 19:29
В случае, если вы хотите реплицировать систему журналов, такую ​​как почему ты рендерил, и вам нужен nextProps здесь помогает хук.

в соответствии со старой функцией lifeCycle переименуйте вещи в props и nextProps
nextProps означает текущий реквизит
реквизит означает предыдущий реквизит
const useComponentWillReceiveProps(nextProps, callback) {
  const props = useRef(nextProps) 

  useEffect(() => {
    callback(nextProps, props.current)
    props.current = nextProps
  })
}
использование
const diffLogger = (nextProps, props, { name = "Component" } = {}) => {
  Object.keys(nextProps)
    .filter((key) => nextProps[key] !== props[key])
    .forEach((key) => {
      console.info(
        `%c${name}:%c${key}`,
        "color:#ff5722; font-size:1rem; font-weight:bold;",
        "color:#ffc107; font-size:1.2rem; font-weight:bold;",
        {
          from: props[key],
          to: nextProps[key],
        }
      )
    })
}
const Button = (props) => {
 useComponentWillReceiveProps(props, diffLogger, {name: 'Button'})
 return <button onClick = {props.onClick}>Button</button>
}
В настоящее время Если ваша кнопка перерисовывается, например. по onClick новой ссылке вы получите что-то вроде этого: 

 02.04.2021 14:34
Я использую React Native. Я добавил это в свой экранный компонент, где мне нужна была функциональность componentWillReceiveProps:

    const propsRef = useRef(props)

    // component will receive props
    const componentWillReceiveProps = () => {
        const propsHaveChanged = !isEqual(propsRef.current, props)

        propsRef.current = props

        if (propsHaveChanged){
            setIndex(0)
        }

        
    }
Здесь isEqual — это функция lodash, которая выполняет глубокое сравнение. Затем просто вызовите функцию.

componentWillReceiveProps()
Это вызывается в верхней части функционального компонента. Таким образом, его следует вызывать до того, как функциональный компонент отобразит свое представление.

 24.08.2021 17:01
Другие вопросы по теме
Столкнулся с проблемой при создании нового приложения в reactjs
Как отобразить несколько компонентов в reactjs, что я делаю не так?
ReactJS Bootstrap Navbar и маршрутизация не работают вместе
Как правильно загружать готовые базы данных SQlite с PouchDB или без него в приложении React
Пользовательский замечательный плагин уценки, анализирующий только первый экземпляр совпадающего регулярного выражения
Размытие фонового модального окна, когда в нем открывается другое модальное модальное окно
Styled-components переключает классы
Состояние не обновляется в ответ
Firebase + React Native — получите идентификатор каждого документа
Горизонтальный шаг React Semantic-UI
Похожие вопросы
Утверждение Chai не терпит неудачу при использовании асинхронной команды?
Как аутентифицировать администратора?
Хранилище Firebase возвращает странные результаты для snapshot.bytesTransferred
Разрешить запуск функции n раз только с функцией-оболочкой
ReferenceError: клиент Discord не определен
Ошибка lint кортежа машинописного текста не согласована [vscode]
Журнал консоли TypeScript только в режиме разработки
Вложенная функция внутри функции цикла for | добавить/удалить класс | анимация ключевых кадров
Jquery — управление свойствами CSS элементов в соответствии со свойствами CSS других элементов
Множественный выбор раскрывающегося списка AngularJS не снимается при изменении выбора
Разделы
Блог

Вопросы

Теги

О сайте

Контакты
info@reddeveloper.ru
Правовая информация
Политика конфиденциальности

Пользовательское соглашение


Находите ответы на сложные технические вопросы по программированию, с которыми сталкиваются инженеры по всему миру в своей ежедневной практике на сайте RedDeveloper.

© 2026 «RedDeveloper.ru»

                RedDeveloper
Блог
Вопросы
Теги
Поиск...
Инвариантное нарушение: вы не должны использовать <Switch> вне <Router>
Вопросы
JAVASCRIPT
Инвариантное нарушение: вы не должны использовать <Switch> вне <Router>
У меня проблема, которую я не знаю, как решить, я получаю эту ошибку при запуске теста npm

Invariant Violation: You should not use <Switch> outside a <Router>

В чем может быть проблема и как ее решить? Тест, который я провожу, - это стандартный app.test.js, который поставляется с response.

class App extends Component {
  render() {
    return (
      <div className = 'app'>
        <nav>
          <ul>
            <li><Link exact activeClassName = "current" to='/'>Home</Link></li>
            <li><Link exact activeClassName = "current" to='/TicTacToe'>TicTacToe</Link></li>
            <li><Link exact activeClassName = "current" to='/NumGame'>Quick Maths</Link></li>
            <li><Link exact activeClassName = "current" to='/HighScore'>Highscore</Link></li>
            <li><Link exact activeClassName = "current" to='/Profile'>Profile</Link></li>
            <li><Link exact activeClassName = "current" to='/Login'>Sign out</Link></li>
          </ul>
        </nav>
        <Switch>
          <Route exact path='/' component = {Home}></Route>
          <Route path='/TicTacToe' component = {TicTacToe}></Route>
          <Route path='/NumGame' component = {NumberGame}></Route>
          <Route path='/HighScore' component = {HighScore}></Route>
          <Route path='/Profile' component = {Profile}></Route>
          <Route path='/Login' component = {SignOut1}></Route>
        </Switch>
      </div>
    );
  }
};
 29.05.2018 14:38
69
1
77 110
11
Данный вопрос помечен как решенный
 Ответы 11
 Ответ принят как подходящий
Ошибка правильная. Вам нужно обернуть SwitchBrowserRouter или другими альтернативами, такими как HashRouter, MemoryRouter. Это связано с тем, что BrowserRouter и альтернативы являются общим низкоуровневым интерфейсом для всех компонентов маршрутизатора, и они используют HTML 5 history API, и вам это нужно для перехода между вашими маршрутами.

Попробуй сделать это скорее

import { BrowserRouter, Switch, Route } from 'react-router-dom';
А потом все так завернуть

<BrowserRouter>
 <Switch>
  //your routes here
 </Switch>
</BrowserRouter>
 29.05.2018 14:44
Всегда помещайте BrowserRouter в компоненты навигации, следуйте примеру:

import React, { Component } from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom'

var Componente1 = () => (<div>Componente 1</div>)
var Componente2 = () => (<div>Componente 2</div>)
var Componente3 = () =>  (<div>Componente 3</div>)

class Rotas extends Component {
    render() {

        return (
                <Switch>
                    <Route exact path='/' component = {Componente1}></Route>
                    <Route exact path='/comp2' component = {Componente2}></Route>
                    <Route exact path='/comp3' component = {Componente3}></Route>
                </Switch>
        )
    }
}


class Navegacao extends Component {
    render() {
        return (

                <ul>
                    <li>
                        <NavLink to = "/">Comp1</NavLink>
                    </li>
                    <li>
                        <NavLink exact  to = "/comp2">Comp2</NavLink>
                    </li>
                    <li>
                        <NavLink exact to = "/comp3">Comp3</NavLink>
                    </li>
                </ul>
        )
    }
}

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Navegacao />
                    <Rotas />
                </div>
            </BrowserRouter>
        )
    }
}

render(<App/>, document.getElementById("root"))
Примечание: BrowserRouter принимает только один дочерний элемент.

 30.12.2018 14:43
Я столкнулся с той же проблемой. Это разрешается, когда я «импортирую BrowserRouter из дома-реактора». и написать код

<BrowserRouter>
 <Switch>
  //your routes here
 </Switch>
</BrowserRouter>
 27.10.2019 08:30
Правильный способ справиться с этим, по мнению разработчиков React Router, - обернуть свой модульный тест в Router. Рекомендуется использовать MemoryRouter, чтобы иметь возможность перезагружать маршрутизатор между тестами.

Вы все еще можете сделать что-то вроде следующего:

<BrowserRouter>
  <App />
</BrowserRouter>
Затем в App:

<Switch>
  <Route />
  <Route />
</Switch>
Ваши модульные тесты для App обычно выглядят примерно так:

const content = render(<App />); // Fails Unit test
Обновите модульный тест до:

const content = render(<MemoryRouter><App /></MemoryRouter>); // Passes Unit test
 12.01.2020 03:05
Вы не можете использовать response-router 4.3 с react-router-dom 4.4 или наоборот. (Обновлено: написать это так: почему это не считается критическим изменением?)

Убедитесь, что у вас будут одинаковые версии

 29.04.2020 14:20
Убедитесь, что у всех вложенных компонентов есть правильный импорт. Вы можете получить эту ошибку, если один из них импортирует Switch из response-router вместо response-router-dom. Сохранение всего согласованного с 'response-router-dom' (который в любом случае реэкспортирует компоненты реактивного маршрутизатора). Проверено:

"react-router": "^5.2.0",
"react-router-dom": "^5.2.0",
 09.06.2020 13:28
Вы должны написать свой код вот так

import {BrowserRouter, Switch, Router} from 'react-router-dom
 
 class App extends Component {
  render() {
    return (
      <div className = 'app'>
        <nav>
          <ul>
            <li><Link exact activeClassName = "current" to='/'>Home</Link></li>
            <li><Link exact activeClassName = "current" to='/TicTacToe'>TicTacToe</Link></li>
            <li><Link exact activeClassName = "current" to='/NumGame'>Quick Maths</Link></li>
            <li><Link exact activeClassName = "current" to='/HighScore'>Highscore</Link></li>
            <li><Link exact activeClassName = "current" to='/Profile'>Profile</Link></li>
            <li><Link exact activeClassName = "current" to='/Login'>Sign out</Link></li>
          </ul>
        </nav>

     <BrowserRouter>
        <Switch>
          <Route exact path='/' component = {Home}></Route>
          <Route path='/TicTacToe' component = {TicTacToe}></Route>
          <Route path='/NumGame' component = {NumberGame}></Route>
          <Route path='/HighScore' component = {HighScore}></Route>
          <Route path='/Profile' component = {Profile}></Route>
          <Route path='/Login' component = {SignOut1}></Route>
        </Switch>
      <BrowserRouter/>
      </div>
    );
  }
};
 23.06.2020 05:42
Я обновил зависимости с помощью yarn add react-router-dom или npm install react-router-dom, удалил папку node_modules и снова запустил yarn или npm install.

 30.08.2020 20:18
Error: Invariant failed: You should not use <Link>,<Switch>,<Route> outside a <Router>[][1]

[Error: Invariant failed: You should not use <Link>,<Switch>,<Route> outside a <Router> ][1]

 1. Open Index.js or Index.jsx
 2. add-> import { BrowserRouter } from "react-router-dom";
 3.Rap <App /> in <BrowserRouter> and </BrowserRouter> 
should  look like :
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
 19.09.2020 10:32
я нашел решение для решения этой проблемы

вот пример кода

import React from 'react';
import Home from './HomeComponent/Home';
import { Switch, Route } from 'react-router';
import { BrowserRouter } from "react-router-dom";
class App extends React.Component{
render(){
return(
         <BrowserRouter>
           <Switch>
            <Route path = "/" render = {props => (
                <Home {...props}/>
            )}/>
          </Switch>
        </BrowserRouter>
    )
  }
}
export default App;
 22.12.2020 13:14
Мои NavLink и Route находятся в отдельных файлах, чтобы устранить эту ошибку, мне пришлось обернуть их оба в BrowserRouter:

import React from 'react';
import { NavLink, BrowserRouter } from 'react-router-dom'
const MainNav = () => (
  <BrowserRouter>
      <nav>
      <ul>
        <li>
          <NavLink exact activeClassName='current' to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink exact activeClassName='current' to='/users'>Users</NavLink>
        </li>
      </ul>
    </nav>
  </BrowserRouter>
);


export default MainNav;

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../views/HomeView';
import UsersView from '../views/UsersView';
import { BrowserRouter } from 'react-router-dom';

const MainRoutes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component = {Home}></Route>
      <Route exact path='/users' component = {UsersView}></Route>
    </Switch>
  </BrowserRouter>
);

export default MainRoutes;`
 30.04.2021 21:29
Другие вопросы по теме
Как создать вспомогательную (компонент более высокого порядка) в преакте?
Как импортировать контакт Outlook с помощью Reactjs
Как получить значения из одного и того же типа ввода из нескольких полей в React?
Значение jest.fn () должно быть фиктивной функцией или полученной шпионской функцией: [Function getTemplates]
React HOC with Context - не следует использовать <Route render> и <Route children> в одном маршруте
React-bootstrap-table установить общее количество столбцов таблицы в состоянии
Как вызвать последовательные действия одно за другим - и убедиться, что оба отрисовываются (response-redux)?
MongoDB получает undefined при поиске
Добавить ввод с помощью кнопки добавления в React
Отправить форму после проверки данных
Похожие вопросы
Вызов события дочернего щелчка при щелчке по родительскому элементу
(элемент управления: AbstractControl):
Активировать вкладку на основе текущего URL
Получить путь к рабочему столу локального компьютера с помощью javascript
Использование javascript для установки поля (форма редактирования элемента SharePoint 2013)
Как изменить теги привязки и заголовки в ckeditor, нажав опцию удаления формата в ckeditor.js
Как создать вспомогательную (компонент более высокого порядка) в преакте?
Элементы массива не помещаются в async.queue
WebDriver JavaScriptExecutor не нажимает кнопку
Blockchain Tierion API - загрузка файлов в реальном времени с использованием Node.js
Разделы
Блог

Вопросы

Теги

О сайте

Контакты
info@reddeveloper.ru
Правовая информация
Политика конфиденциальности

Пользовательское соглашение


Находите ответы на сложные технические вопросы по программированию, с которыми сталкиваются инженеры по всему миру в своей ежедневной практике на сайте RedDeveloper.

© 2026 «RedDeveloper.ru»

                RedDeveloper
Блог
Вопросы
Теги
Поиск...
--fix не исправляет ошибки с помощью eslint
Вопросы
JAVASCRIPT
--fix не исправляет ошибки с помощью eslint
Я использую eslint в визуальном коде для форматирования файлов js, но он выдает ошибки каждый раз, когда я запускаю его, вот моя командная строка для его запуска node ./node_modules/eslint/bin/eslint -- src --fix сообщение об ошибке

E:\PATH\src\reducers\roote-reducer.js
  1:8   error  There should be no space after '{'                object-curly-spacing
  1:26  error  There should be no space before '}'               object-curly-spacing
  6:1   error  Expected indentation of 1 tab but found 2 spaces  indent
  7:1   error  Expected indentation of 1 tab but found 2 spaces  indent
  8:4   error  Newline required at end of file but not found     eol-last

E:\PATH\src\reducers\schedule-reducer.js
   1:8   error  There should be no space after '{'                  object-curly-spacing
   1:22  error  There should be no space before '}'                 object-curly-spacing
   4:1   error  Expected indentation of 1 tab but found 4 spaces    indent
   7:24  error  Missing space before function parentheses           space-before-function-paren
   7:54  error  Missing space before opening brace                  space-before-blocks
   8:1   error  Expected indentation of 1 tab but found 4 spaces    indent
   9:1   error  Expected indentation of 1 tab but found 4 spaces    indent

E:\PATH\src\register-service-worker.js
   12:1  error  Expected indentation of 1 tab but found 2 spaces    indent
   17:1  error  Expected indentation of 5 tabs but found 6 spaces   indent
   17:7  error  Use regex shorthands to improve readability         unicorn/regex-shorthand
   22:1  error  Expected indentation of 1 tab but found 2 spaces    indent

✖ 309 problems (309 errors, 0 warnings)
  309 errors, 0 warnings potentially fixable with the `--fix` option.
Как я могу их исправить автоматически?

 10.07.2018 14:39
24
2
43 516
11
 Ответы 11
Чтобы использовать опцию --fix, вам нужно запустить eslint напрямую.

Попробуй это

./node_modules/.bin/eslint src --fix
В Windows:

.\node_modules\.bin\eslint src\** --fix
 10.07.2018 14:48
Формат должен быть:

./node_modules/.bin/eslint --fix path/to/file.js
См. эта ветка (и ответ aravind1078) для получения дополнительной информации.

 30.01.2019 17:50
Если это не так

extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
          options: {
            fix: true
          }
        })
      }
    }
You. You can use this on the first page
    const colors = require('vuetify/es5/util/colors').default
    const pkg = require('./package')
    require('dotenv').config()

    module.exports = {
      mode: 'universal',
      /*
      ** Headers of the page
      */
      head: {
        titleTemplate: '%s - ' + process.env.npm_package_name,
        title: process.env.npm_package_name || '',
        meta: [
          { charset: 'utf-8' },
          { name: 'viewport', content: 'width=device-width, initial-scale=1' },
          {
            hid: 'description',
            name: 'description',
            content: process.env.npm_package_description || ''
          }
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
      },
      /*
      ** Customize the progress-bar color
      */
      loading: { color: '#fff' },
      /*
      ** Global CSS
      */
      css: [],
      /*
      ** Plugins to load before mounting the App
      */
      plugins: [],
      /*
      ** Nuxt.js dev-modules
      */
      buildModules: [
        // Doc: https://github.com/nuxt-community/eslint-module
        '@nuxtjs/eslint-module',
        '@nuxtjs/vuetify'
      ],
      /*
      ** Nuxt.js modules
      */
      modules: [
        // Doc: https://axios.nuxtjs.org/usage
        '@nuxtjs/axios',
        '@nuxtjs/pwa',
        // Doc: https://github.com/nuxt-community/dotenv-module
        '@nuxtjs/dotenv'
      ],
      /*
      ** Axios module configuration
      ** See https://axios.nuxtjs.org/options
      */
      axios: {},
      /*
      ** vuetify module configuration
      ** https://github.com/nuxt-community/vuetify-module
      */
      /*
      ** Build configuration
      */
      build: {
        extend(config, ctx) {
          // Run ESLint on save
          if (ctx.isDev && ctx.isClient) {
            config.module.rules.push({
              enforce: 'pre',
              test: /\.(js|vue)$/,
              loader: 'eslint-loader',
              exclude: /(node_modules)/,
              options: {
                fix: true
              }
            })
          }
        }
      }
    }
If you still don't understand me.

 22.02.2020 18:11
Попробуй бежать

eslint --fix
вам нужно сначала установить eslint

npm install -g eslint
 15.04.2020 11:45
У меня была та же проблема, что и я

eslint --fix fileName.extention
 16.04.2020 23:03
Выполните следующую команду в новом терминале:

./node_modules/.bin/eslint --fix . --ext .js,.vue src

 09.06.2020 09:48
Пакет первой установки: npm install -g eslint

а также

Запустить: eslint --fix

 22.07.2020 13:34
Сначала установите eslint, если вы еще этого не сделали

npm install -g eslint
Тогда беги

eslint --fix path/to/file.extension

Note: You will have to run the the above command every time after making changes to that particular file.

 10.08.2020 16:08
в каталоге, в котором существует код, запустите:

eslint --fix .
вместо

eslint --fix 
поскольку команде нужен аргумент, который указывает каталог, в котором существует код, или сам файл, к которому вы хотите применить линтинг

 04.10.2020 13:31
Используйте Терминал командной строки, чтобы выполнить приведенные ниже команды в Visual Studio Code.

Убедитесь, что файл .eslintrc.yml настроен для рабочего проекта.

Чтобы исправить проблемы с ворсом в файле

npx eslint file1.js --fix
Чтобы исправить проблемы с ворсом во всех файлах в папке

npx eslint ./folder_name --fix
 28.12.2020 15:43
У меня возникли трудности при использовании --fix, когда я использую eslint-config-airbnb-base вместо @ nuxtjs / eslint-модуль в проекте Nuxt.js
В то время у меня работал eslint direclty: ./node_modules/.bin/eslint --fix

Однако я предпочитаю написать еще два скрипта в package.json.

"lint": "eslint --ext \".js,.vue\" --ignore-path .gitignore .",
"lint-fix": "npm run lint -- --fix"
И запустите yarn lint-fix или npm run lint-fix

 17.03.2021 16:05
Другие вопросы по теме
Использование compose () и connect () вместе в React JS redux
Почему он возвращает undefined из этой отправки?
Lodash создает новый массив из выбранных ключей
Ошибка: не удается установить заголовки после их отправки SSR React + Node
Реагировать на ошибку карты листовок при рендеринге на стороне сервера
Есть ли способ определить, удалил ли пользователь какой-либо элемент из локального хранилища
Создать кнопку с текстом слева и изображением / значком справа на reactjs
Операция FooQuery, обертывающая Foo, ожидает переменную, но она не была найдена с помощью response-apollo
Адаптивная таблица React js Material-UI
Флажок Handle в приложении React
Похожие вопросы
Всплывающая подсказка в three.js
Прокрутка к следующему или предыдущему DIV при нажатии с помощью jQuery
Установка значений по умолчанию в модальном диалоговом окне
Почему он возвращает undefined из этой отправки?
TypeError <анонимный> ошибка javascript
Lodash создает новый массив из выбранных ключей
Не удается найти способ заменить часть текста в ячейке из столбца с помощью скрипта Google App
Веб-сервис, использующий NodeJS, который имитирует выполнение браузера со страницы html с помощью javascript
Почему я не вижу $ (this) ссылки в console.info?
'Поменять местами' значения в пределах диапазона
Разделы
Блог

Вопросы

Теги

О сайте

Контакты
info@reddeveloper.ru
Правовая информация
Политика конфиденциальности

Пользовательское соглашение


Находите ответы на сложные технические вопросы по программированию, с которыми сталкиваются инженеры по всему миру в своей ежедневной практике на сайте RedDeveloper.

© 2026 «RedDeveloper.ru»

                                      RedDeveloper
Блог
Вопросы
Теги
Поиск...
Реагировать на загрузку пакета javascript на 100% зависает
Вопросы
REACTJS
Реагировать на загрузку пакета javascript на 100% зависает
когда я пытаюсь выполнить npm start, он работает нормально, но когда я пытаюсь запустить приложение с помощью expo, процесс идет до 100%, и после этого ничего не происходит. Я не понимаю, в чем именно заключается проблема. У меня есть следующие вещи в package.json .... пожалуйста, помогите мне решить эту проблему.

{
  "name": "ProMeeting",
  "version": "0.1.0",
  "private": true,
  "devDependencies": {
    "jest-expo": "~29.0.0",
    "react-native-scripts": "^1.14.0",
    "react-test-renderer": "16.3.1"
  },
  "main": "./node_modules/react-native-scripts/build/bin/crna-entry.js",
  "scripts": {
    "start": "react-native-scripts start",
    "eject": "react-native-scripts eject",
    "android": "react-native-scripts android",
    "ios": "react-native-scripts ios",
    "test": "jest"
  },
  "jest": {
    "preset": "jest-expo"
  },
  "dependencies": {
    "@babel/preset-react": "^7.0.0-beta.56",
    "expo": "^29.0.0",
    "firebase": "^5.3.1",
    "native-base": "^2.7.2",
    "react": "16.3.1",
    "react-native": "^0.55.4",
    "react-native-firebase": "^4.3.8",
    "react-native-vector-icons": "^5.0.0",
    "react-navigation": "^2.11.2"
  }
}
Снимок экрана добавлен для иллюстрации

Реагировать на загрузку пакета javascript на 100% зависает

 22.08.2018 14:30
44
1
16 083
11
 Ответы 11
Вам следует попробовать настроить новый проект, поддерживающий реакцию, и перенести ваши файлы в новый проект, а затем попробовать запустить его снова, эта проблема возникает, когда файлы сборки отсутствуют.

 22.08.2018 16:33
Кажется, это могло произойти по нескольким причинам. Я попытался запустить другие приложения на своем симуляторе, перезапустил симулятор и даже попытался удалить папки сборки и перестроить с нуля, но ни один из этих подходов не решил проблему.

Что в итоге сработало, так это перезапуск React Native Debugger, который у меня был в фоновом режиме все время.

Вы также можете проверить вкладку «Сеть» в React Native Debugger, если вы включили автономное регулирование. Отключение его также должно решить проблему в некоторых случаях.

 23.01.2019 00:52
response-native-firebase часто вызывает ту же проблему.

ниже - официальное руководство по интеграции react-native-firebase. https://rnfirebase.io/docs/v5.x.x/installation/ios

Б) В начале метода didFinishLaunchingWithOptions: (NSDictionary *) launchOptions добавьте следующую строку:

[Настройка FIRApp]; «Рекомендуется добавить строку в метод ПЕРЕД созданием RCTRootView. В противном случае инициализация может произойти после того, как уже требуется в вашем коде JavaScript, что приведет к исключениям, которые приложение не инициализирует».

У вас есть GoogleService-Info.plist? Вы установили pod? Вы «Аппаратное обеспечение»> «Стереть все содержимое и настройки в симуляторе»?

 23.01.2019 03:16
что ж, этот пост старый, но пойдем, как я решил для себя эту проблему:

> install yarn
> run: yarn remove react-native
> run: yarn add react-native
> run: react-native run-android
 23.01.2019 05:22
В моем случае мой код работал в Android, но не в симуляторе iOS.

SplashScreen.preventAutoHide(); был проблемой.

Я дважды вызвал метод, App.js и Main.js соответственно.

После удаления в App.js все заработало.

(Думаю, restarting the React Native Debugger тоже помог)

 02.08.2019 14:54
В моем случае это всегда происходило при включенной удаленной отладке JS. Пакет JS загружался до 100%, но затем приложение зависало. React Native Debugger не может подключиться, появляется сообщение об ошибке Another debugger is already connected.

Попробовав все виды вещей (сброс кеша, перезапуск Metro Builder, перезапуск симулятора) безуспешно, я вспомнил, что единственным «другим отладчиком», который я когда-либо использовал, были Chrome Devtools, поэтому я вышел из Chrome, и сразу все снова заработало. .

Оказывается, даже несмотря на то, что я закрыл вкладку Chrome, на которой отлаживал приложение, какой-то фоновый процесс в Chrome все еще был прикреплен к приложению в качестве отладчика (также после перезагрузки симулятора). Затем он достиг какой-то точки останова или исключения при запуске, поэтому он приостановился, и все, что я мог видеть, было сообщение Downloading Javascript bundle 100%.

 05.09.2019 22:13
Вот как я решил проблему на Mac.

Мой экран завис при загрузке пакета javascript 100%
Screen stuck Downloading javascript bundle 100%

Выберите Simulator, нажмите (Command + D) на Mac, симулятор отобразит набор параметров.
Click on Stop RemoteJS Debugging

Приложение загрузится
Application will load now

 05.04.2020 09:54
Что ж, в моем случае я удалил цикл for, который был у меня в моем коде, и этого было достаточно, чтобы исправить эту проблему. По-видимому, мое приложение для реагирования вылетало каждый раз при запуске этого цикла.

 27.05.2020 15:32
в моем случае ;

Я добавил новый пакет (@ khanshamshad32 / carousel) v1.0.1. Я предполагаю, что у пакета есть проблемы, и моя выставка на реальном устройстве застряла% 100 .. и я собираюсь удалить все элементы пакета.

1- из package.json (относительный экземпляр)

2- из package-lock.json (относительный экземпляр)

3- из папки "имя пакета" node_modules

и это сработало

 09.08.2020 22:08
Я тоже застрял на той же проблеме и делал все возможное, но это не сработало, я возвращаю все изменения, но проблема все еще существует ..

I created my own solution and it works perfectly for me, maybe it might help someone, you can try it with Apple and Android too

Обновите expo-cli и react-native с npm update -g expo-cli и npm update -g react-native
Удалите приложение expo на эмуляторе или устройстве и переустановите его.
Создайте новый проект с expo init project_name (используйте исходное имя проекта, переименуйте предыдущее для резервного копирования).
Попробуйте запустить это новое пустое приложение в своем приложении expo, оно должно работать правильно.
Теперь установите каждую зависимость из неработающего package.json по одной или сразу, но без указания версии с помощью команды expo install package_name (вручную, потому что это может быть возможно из-за конфликта версий).
Теперь добавьте файлы и каталоги старого проекта, включая app.json и App.js, в этот новый проект.
Снова запустите свой проект с помощью команды expo start -c.
И вот вам рабочий проект!
Удачного кодирования !!!

 28.10.2020 09:14
По состоянию на январь 2021 года версия вашего узла может быть одной из причин этой проблемы.

Проверьте версию своего узла с помощью node -v, и если версия - 15.x.x, попробуйте понизить версию до 14.15.1:

$ npm install -g n
$ n 14.15.1
 30.01.2021 10:51
Другие вопросы по теме
Отсутствует разрешение камеры на выставке
Обновление response-native 56.0: разные тесты снимков
React Native + Enzyme + Jest: вызов фиктивной функции redux не зарегистрирован / вызывается ноль раз
Ошибка при обновлении преобразования свойств представления, управляемого RCTView
Ширина поля анимации в React Native
React Native Книжная анимация
Где указывать материалы Firebase в структуре проекта React Native
Плоский список данных рендеринга из json api как 3 элемента в строке
React Navigation - не удается обновить заголовок
Что такое реквизит в приложении класса
Похожие вопросы
React - заменяется двоеточие
React pass props на onChange
Размер холста карты MapboxGL JS
Использование записи Immutable.js в качестве состояния компонента
Node.js в Webpack, что такое роль?
Reactjs дает модуль ошибки не найден
Передайте аргумент анонимной функции
Почему response-router совмещает предыдущий маршрут с новым?
Компонент React дает мне непредсказуемые результаты
Как работает определение класса?
Разделы
Блог

Вопросы

Теги

О сайте

Контакты
info@reddeveloper.ru
Правовая информация
Политика конфиденциальности

Пользовательское соглашение


Находите ответы на сложные технические вопросы по программированию, с которыми сталкиваются инженеры по всему миру в своей ежедневной практике на сайте RedDeveloper.

© 2026 «RedDeveloper.ru»

                                      RedDeveloper
Блог
Вопросы
Теги
Поиск...
Есть ли способ изменить заголовок страницы с помощью React-Router v4 +?
Вопросы
REACTJS
Есть ли способ изменить заголовок страницы с помощью React-Router v4 +?
Я ищу способ изменить заголовок страницы, когда React-Router v4 + меняет местоположение. Раньше я прислушивался к действию изменения местоположения в Redux и проверял этот маршрут на объект metaData.

При использовании React-Router v4 + нет списка фиксированных маршрутов. Фактически, различные компоненты сайта могут использовать Route с одной и той же строкой пути. Это означает, что старый метод, который я использовал, больше не будет работать.

Есть ли способ обновить заголовок страницы, вызывая действия при изменении определенных основных маршрутов, или есть лучший способ обновить метаданные сайта?

 21.09.2018 18:30
64
4
52 648
11
Данный вопрос помечен как решенный
 Ответы 11
 Ответ принят как подходящий
В вашем методе componentDidMount() сделайте это для каждой страницы

componentDidMount() {
  document.title = 'Your page title here';
}
Это изменит заголовок вашей страницы, сделайте вышеупомянутое для каждого маршрута.

Также, если это больше, чем просто часть заголовка, проверьте реактивный шлем. Это очень удобная библиотека для этого, и она также обрабатывает некоторые приятные граничные случаи.

 21.09.2018 18:53
Компоненты <Route /> имеют свойство оказывать. Таким образом, вы можете изменить заголовок страницы при изменении местоположения, объявив свои маршруты следующим образом:

<Route
  exact
  path = "/"
  render = {props => (
    <Page {...props} component = {Index} title = "Index Page" />
  )}
/>

<Route
  path = "/about"
  render = {props => (
    <Page {...props} component = {About} title = "About Page" />
  )}
/>
В компоненте Page вы можете указать название маршрута:

import React from "react"

/* 
 * Component which serves the purpose of a "root route component". 
 */
class Page extends React.Component {
  /**
   * Here, we define a react lifecycle method that gets executed each time 
   * our component is mounted to the DOM, which is exactly what we want in this case
   */
  componentDidMount() {
    document.title = this.props.title
  }
  
  /**
   * Here, we use a component prop to render 
   * a component, as specified in route configuration
   */
  render() {
    const PageComponent = this.props.component

    return (
      <PageComponent />
    )
  }
}

export default Page
Обновление 1 августа 2019 г.. Это работает только с response-router> = 4.x. Благодаря @ su Supremebeing7

Обновленный ответ с использованием Реагировать на хуки:

Вы можете указать название любого маршрута с помощью компонента ниже, который построен с использованием useEffect.

import { useEffect } from "react";

const Page = (props) => {
  useEffect(() => {
    document.title = props.title || "";
  }, [props.title]);
  return props.children;
};

export default Page;
А затем используйте Page в опоре render маршрута:

<Route
  path = "/about"
  render = {(props) => (
    <Page title = "Index">
      <Index {...props} />
    </Page>
  )}
/>

<Route
  path = "/profile"
  render = {(props) => (
    <Page title = "Profile">
      <Profile {...props} />
    </Page>
  )}
/>
 09.01.2019 15:50
Исходя из отличного ответ phen0menon, почему бы не расширить Route вместо React.Component?

import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

const Page = ({ title, ...rest }) => {
  useEffect(() => {
    document.title = title;
  });
  return <Route {...rest} />;
};

Page.propTypes = {
  title: PropTypes.string.isRequired,
};

export { Page };
Это приведет к удалению служебного кода, как показано ниже:

// old:
(
  <Route
    exact
    path = "/"
    render = {props => (
      <Page {...props} component = {Index} title = "Index Page" />
    )}
  />
);

// improvement:
(
  <Page
    exact
    path = "/"
    component = {Index}
    title = "Index Page"
  />
);
Обновлять:, другой способ сделать это - Хуки:

import { useEffect } from 'react';

/** Hook for changing title */
export const useTitle = title => {
  useEffect(() => {
    title && (document.title = title);
  }, [title]);
};
 29.03.2019 11:46
Я немного поработал над решением Thierry Prosts и в итоге получил следующее:

ОБНОВЛЕНИЕ Январь 2020: Теперь я обновил свой компонент, чтобы он тоже был в Typescript:

ОБНОВЛЕНИЕ Август 2021: Я добавил свой частный маршрут в TypeScript

import React, { FunctionComponent, useEffect } from 'react';
import { Route, RouteProps } from 'react-router-dom';

interface IPageProps extends RouteProps {
  title: string;
}

const Page: FunctionComponent<IPageProps> = props => {
  useEffect(() => {
    document.title = "Website name | " + props.title;
  });

  const { title, ...rest } = props;
  return <Route {...rest} />;
};

export default Page;
Обновлено: Компонент My Page.jsx теперь является функциональным и с хуком useEffect:

import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';

const Page = (props) => {
  useEffect(() => {    
    document.title = "Website name | " + props.title;
  });

  const { title, ...rest } = props;
  return <Route {...rest} />;
}

export default Page;
Ниже вы можете найти мое исходное решение:

// Page.jsx
import React from 'react';
import { Route } from 'react-router-dom';

class Page extends Route {
  componentDidMount() {
    document.title = "Website name | " + this.props.title;
  }

  componentDidUpdate() {      
      document.title = "Website name | " + this.props.title;
  }

  render() {
    const { title, ...rest } = this.props;
    return <Route {...rest} />;
  }
}

export default Page;
И моя реализация Router выглядела так:

// App.js / Index.js
<Router>
    <App>
      <Switch>
         <Page path = "/" component = {Index} title = "Index" />
         <PrivateRoute path = "/secure" component = {SecurePage} title = "Secure" />
      </Switch>
    </App>    
  </Router>
Настройка частного маршрута:

// PrivateRoute
function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Page
      {...rest}
      render = {props =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to = {{
              pathname: "/",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
}
Частный маршрут в TypeScript:

export const PrivateRoute = ({ Component, ...rest }: IRouteProps): JSX.Element => {
  return (
    <Page
      {...rest}
      render = {(props) =>
        userIsAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to = {{
              pathname: Paths.login,
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};
Это позволило мне обновить как общие области с новым заголовком, так и частные области.

 29.03.2019 13:50
С небольшой помощью Helmet:

import React from 'react'
import Helmet from 'react-helmet'
import { Route, BrowserRouter, Switch } from 'react-router-dom'

function RouteWithTitle({ title, ...props }) {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Route {...props} />
    </>
  )
}

export default function Routing() {
  return (
    <BrowserRouter>
      <Switch>
        <RouteWithTitle title = "Hello world" exact = {true} path = "/" component = {Home} />
      </Switch>
    </BrowserRouter>
  )
}
 17.05.2019 17:33
Вот мое решение, которое почти такое же, как простая установка document.title, но с использованием useEffect

/**
* Update the document title with provided string
 * @param titleOrFn can be a String or a function.
 * @param deps? if provided, the title will be updated when one of these values changes
 */
function useTitle(titleOrFn, ...deps) {
  useEffect(
    () => {
      document.title = isFunction(titleOrFn) ? titleOrFn() : titleOrFn;
    },
    [...deps]
  );
}
Это имеет то преимущество, что повторная визуализация выполняется только в том случае, если предоставленное вами изменение deps. Никогда не перерисовывать:

const Home = () => {
  useTitle('Home');
  return (
    <div>
      <h1>Home</h1>
      <p>This is the Home Page</p> 
    </div>
  );
}
Выполните повторную визуализацию, только если мой userId изменится:

const UserProfile = ({ match }) => {
  const userId = match.params.userId;
  useTitle(() => `Profile of ${userId}`, [userId]);
  return (
    <div>
      <h1>User page</h1>
      <p>
        This is the user page of user <span>{userId}</span>
      </p>
    </div>
  );
};

// ... in route definitions
<Route path = "/user/:userId" component = {UserProfile} />
// ...
CodePen здесь, но не может обновить заголовок фрейма

Если вы осмотрите <head> рамы, вы увидите изменение: screenshot

 17.05.2019 17:52
Используя функциональный компонент на вашей главной странице маршрутизации, вы можете изменить заголовок при каждом изменении маршрута с помощью useEffect.

Например,

const Routes = () => {
    useEffect(() => {
      let title = history.location.pathname
      document.title = title;
    });

    return (
      <Switch>
        <Route path='/a' />
        <Route path='/b' />
        <Route path='/c' />
      </Switch>
    );
}
 30.05.2019 23:52
Вы также можете использовать метод render

const routes = [
 {
   path: "/main",
   component: MainPage,
   title: "Main Page",
   exact: true
 },
 {
   path: "/about",
   component: AboutPage,
   title: "About Page"
 },
 {
   path: "/titlessPage",
   component: TitlessPage
 }
];

const Routes = props => {
 return routes.map((route, idx) => {
   const { path, exact, component, title } = route;
   return (
     <Route
       path = {path}
       exact = {exact}
       render = {() => {
         document.title = title ? title : "Unknown title";
         console.info(document.title);
         return route.component;
       }}
     />
   );
 });
};
пример в коды (Открыть результат в новом окне, см. заголовок)

 06.02.2020 16:40
Пожалуйста, используйте реактивный шлем. Я хотел привести пример машинописного текста:

import { Helmet } from 'react-helmet';

const Component1Title = 'All possible elements of the <head> can be changed using Helmet!';
const Component1Description = 'No only title, description etc. too!';

class Component1 extends React.Component<Component1Props, Component1State> {
  render () {
    return (
      <>
        <Helmet>
          <title>{ Component1Title }</title>
          <meta name = "description" content = {Component1Description} />

        </Helmet>
        ...
      </>
    )
  }
}
Подробнее: https://github.com/nfl/react-helmet#readme

 18.04.2020 15:10
Дэн Абрамов (создатель Redux и нынешний член команды React) создал компонент для установки заголовка, который также работает с новыми версиями React Router. Его очень легко использовать, и вы можете прочитать об этом здесь:

https://github.com/gaearon/react-document-title

Например:

<DocumentTitle title='My Web App'>
 17.05.2020 19:22
Я отвечаю на это, потому что чувствую, что вы могли бы сделать дополнительный шаг, чтобы избежать повторений в ваших компонентах, и вы могли бы просто обновить заголовок из одного места (модуля маршрутизатора).

Обычно я объявляю свои маршруты как массив, но вы можете изменить свою реализацию в зависимости от вашего стиля. так что в основном что-то вроде этого ==>

import {useLocation} from "react-router-dom";
const allRoutes = [
  {
        path: "/talkers",
        component: <Talkers />,
        type: "welcome",
        exact: true,
    },
    {
        path: "/signup",
        component: <SignupPage />,
        type: "onboarding",
        exact: true,
    },
  ]

const appRouter = () => {
    const theLocation = useLocation();
    const currentLocation = theLocation.pathname.split("/")[1];
    React.useEffect(() => {
        document.title = `Grade | 
        ${currentLocation[0].toUpperCase()}${currentLocation.slice(1,)}`
    }, [currentLocation])

   return (
     <Switch>
      {allRoutes.map((route, index) => 
        <Route key = {route.key} path = {route.path} exact = {route.exact} />}
    </Switch>

   )

}

Другой подход заключался бы в объявлении заголовка уже в каждом объекте allRoutes и наличии здесь чего-то вроде решения @Denis Skiba.

 24.10.2020 03:09
Другие вопросы по теме
Маршрутизация с итерационным списком в React JS
Получение синтаксической ошибки при использовании const {icon, ... other} = this.props;
React-Router Link to = пытается загрузить x.app.js при нажатии
Response-router: не отображать компонент после обновления URL
ReactRouter v4 Prompt - переопределить предупреждение по умолчанию
Изменение компонента корневого уровня приводит к повторному рендерингу дочернего компонента маршрута
Метод React Head 404
React Router v4 Разница в маршрутах
Невозможно прочитать свойство push of undefined в реакции
React Router - Создание панировочных сухарей
Похожие вопросы
Маршрутизация с итерационным списком в React JS
React: Импорт состояния из одного компонента в другой компонент?
Неожиданное использование глобальных переменных без ограничений
Как реализовать тернарный обработчик в обработчике по клику
Проверка реквизита в методе обратного вызова с помощью jest
React Redux - мутация редуктора
Детский компонент focus с использованием createRef не работает
Как установить прокси для axios или fetch в React на стороне клиента
Переход на Webpack 4 из Webpack 3
Вызов экспортируемой функции по строковому значению имени функции
Разделы
Блог

Вопросы

Теги

О сайте

Контакты
info@reddeveloper.ru
Правовая информация
Политика конфиденциальности

Пользовательское соглашение


Находите ответы на сложные технические вопросы по программированию, с которыми сталкиваются инженеры по всему миру в своей ежедневной практике на сайте RedDeveloper.

© 2026 «RedDeveloper.ru»

RedDeveloper
Блог
Вопросы
Теги
Поиск...
Как использовать Jest для тестирования функций с помощью crypto или window.msCrypto
Вопросы
JAVASCRIPT
Как использовать Jest для тестирования функций с помощью crypto или window.msCrypto
При запуске модульных тестов с Jest в реакции API window.crypto вызывает проблемы. Я не нашел способа включить криптовалюту в Jest без установки других пакетов, чего я не могу сделать. Итак, без использования другого пакета npm, есть ли способ протестировать функции, которые используют: crypto.getRandomValues() в них, что не приводит к сбою Jest? Любые ссылки, советы или подсказки приветствуются.

 02.10.2018 17:58
17
0
10 579
11
Данный вопрос помечен как решенный
 Ответы 11
 Ответ принят как подходящий
Это должно сработать. Используйте следующий код для глобальной настройки свойства crypto. Это позволит Jest получить доступ к window.crypto и не вызовет никаких проблем.

const crypto = require('crypto');

Object.defineProperty(global.self, 'crypto', {
  value: {
    getRandomValues: arr => crypto.randomBytes(arr.length)
  }
});
 02.10.2018 18:13
Добавьте crypto global для вашей среды шуток, как если бы он был в браузере. Ваш jest.config.js должен выглядеть так:

const {defaults} = require('jest-config');

module.exports = {
  globals: {
    ...defaults.globals,
    crypto: require('crypto')
  }
};
Ссылка: https://jestjs.io/docs/en/configuration#globals-object

 17.06.2020 18:03
Как и @RwwL, принятый ответ у меня не сработал. Я обнаружил, что полифилл, используемый в этой библиотеке, действительно работает: совершить с помощью полифилла

//setupTests.tsx
const nodeCrypto = require('crypto');
window.crypto = {
  getRandomValues: function (buffer) {
    return nodeCrypto.randomFillSync(buffer);
  }
};
//jest.config.js
module.exports = {
 //...
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.tsx"],
};
 26.06.2020 21:18
Для nodeJS + typescript просто используйте global вместо global.self

import crypto from 'crypto'

Object.defineProperty(global, 'crypto', {
  value: {
    getRandomValues: (arr:any) => crypto.randomBytes(arr.length)
  }
});
 05.09.2020 03:56
У меня есть эта проблема в Angular 8 с тестами Jest для lib, которые используют генератор uuid. В шутливой тестовой настройке я издеваюсь над этим:

Object.defineProperty(global.self, 'crypto', {
  value: {
    getRandomValues: arr => arr
  },
});
 16.10.2020 16:11
const crypto = require('crypto');
global.crypto = crypto;
 10.02.2021 21:28
Начиная с узла 15.x вы можете использовать crypto.webcrypto

например.

import crypto from "crypto";

Object.defineProperty(global.self, "crypto", {
  value: {
    subtle: crypto.webcrypto.subtle,
  },
});
 18.03.2021 09:12
Исходя из ответа AIVeligs:

Поскольку в Jest я использую среду "node", мне пришлось использовать

module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  globals: {
    crypto: {
      getRandomValues: (arr) => require("crypto").randomBytes(arr.length),
    },
  },
};
 22.04.2021 16:39
Я использую vue-jest, и у меня сработала следующая конфигурация в файле jest.config.js:

module.exports = {
   ...
   setupFiles: [
      '<rootDir>/tests/settings/jest.crypto-setup.js',
   ],
};
и в jest.crypto-setup.js:

global.crypto = { 
     getRandomValues: (arr) => require('crypto').randomBytes(arr.length) 
};
Добавление определения функции getRandomValues непосредственно в module.exports не сработало, поскольку объект globals должен быть json-сериализуемым (как указано здесь: https://jestjs.io/docs/configuration#globals-object).

 30.04.2021 12:17
Зависимость crypto по умолчанию у меня не работала во время тестирования с Jest.

Вместо этого я использовал библиотеку @peculiar/webcrypto:

yarn add -D @peculiar/webcrypto
Затем в вашем установочном файле Jest просто добавьте это:

import { Crypto } from "@peculiar/webcrypto";


window.crypto = new Crypto();
 13.08.2021 06:14
Полифиллы в текущих ответах неполные, поскольку Crypto.getRandomValues() изменяет свой аргумент на месте, а также возвращает его. Вы можете проверить это, запустив что-то вроде const foo = new Int8Array(8); console.info(foo === crypto.getRandomValues(foo)) в консоли вашего браузера, которая напечатает true.

getRandomValues() также не принимает Array в качестве аргумента, он принимает только целое число TypedArrays. Функция crypto.randomBytes() в Node.js не подходит для этого полифилла, поскольку она выводит необработанный байты, тогда как getRandomValues() может принимать массивы целых чисел со знаком с элементами до 32 бит. Если вы попробуете crypto.getRandomValues(new Int32Array(8)) в своем браузере, вы можете увидеть что-то вроде [ 304988465, -2059294531, 229644318, 2114525000, -1735257198, -1757724709, -52939542, 486981698 ]. Но если вы попробуете node -e 'console.info([...require("crypto").randomBytes(8)])' в командной строке, вы можете увидеть [ 155, 124, 189, 86, 25, 44, 167, 159 ]. Ясно, что они не эквивалентны, и ваш тестируемый компонент может вести себя не так, как ожидалось, если тестируется с последним.

Последние версии Node.js решают эту проблему с помощью webcrypto модуль (это должно быть связано с настройкой globalThis.crypto = require('crypto').webcrypto). Если вы используете старую версию Node (v14 или ниже), возможно, вам больше повезет с использованием crypto.randomFillSync(), который следует использовать в качестве замены для getRandomValues(), поскольку он изменяет переданный буфер / TypedArray на месте.

В вашем установочном файле Jest (не может быть установлен через Конфигурация globals, поскольку он допускает только JSON-совместимые значения):

const { randomFillSync } = require('crypto')

Object.defineProperty(globalThis, 'crypto', {
  value: { getRandomValues: randomFillSync },
})
 15.09.2021 23:25
Другие вопросы по теме
Какое лицо дальше в параллельных проекциях?
React Native анимация flexDirection
Node.js не может создать приложение после обновления
Кнопка Reactjs в родительском компоненте, которая отправляет форму Redux в дочерний компонент
Как размонтировать все компоненты корневого уровня в ReactJs
Firefox не загружает правильный файл на компьютер
React-redux подключает HOC как декоратор классов, @connect
React Modal в reactjs
Звук не воспроизводится в React
Как я могу заставить Google Map Marker отображать поверх наложенных видов?
Похожие вопросы
Отображение - только один объект свойства - среди множества объектов свойств, в которых объекты заключены в массив
NgModel во входном радио?
Как отредактировать пакет NPM для индивидуальных требований в Angular
Какое лицо дальше в параллельных проекциях?
S3-amazon image Проблема CORS (произошла только в некоторых браузерах через 5-8 часов)
Как выполнить обещания и избежать дублирования ответов?
Оптимизация обновлений Firestore в реальном времени в приложении чата
Перезагрузка и выгрузка CSS в модальных слушателях событий
Поиску фильтра jquery необходимо выполнять поиск по категориям
Связывание данных JavaScript в объекте с элементами HTML
Разделы
Блог

Вопросы

Теги

О сайте

Контакты
info@reddeveloper.ru
Правовая информация
Политика конфиденциальности

Пользовательское соглашение


Находите ответы на сложные технические вопросы по программированию, с которыми сталкиваются инженеры по всему миру в своей ежедневной практике на сайте RedDeveloper.

© 2026 «RedDeveloper.ru»


RedDeveloper
Блог
Вопросы
Теги
Поиск...
React Native 0.57.1 ​​Android дублирующиеся ресурсы
Вопросы
ANDROID
React Native 0.57.1 ​​Android дублирующиеся ресурсы
При запуске ./android/gradlew assembleRelease я получаю следующую ошибку:

`` '' * Что пошло не так: Не удалось выполнить задачу ': app: mergeReleaseResources'.

[drawable-xhdpi-v4/node_modules_reactnavigation_src_views_assets_backicon] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/src/main/res/drawable-xhdpi/node_modules_reactnavigation_src_views_assets_backicon.png [drawable-xhdpi-v4/node_modules_reactnavigation_src_views_assets_backicon] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/build/generated/res/react/release/drawable-xhdpi/node_modules_reactnavigation_src_views_assets_backicon.png: Error: Duplicate resources [drawable-xxhdpi-v4/node_modules_reactnavigation_src_views_assets_backicon] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/src/main/res/drawable-xxhdpi/node_modules_reactnavigation_src_views_assets_backicon.png [drawable-xxhdpi-v4/node_modules_reactnavigation_src_views_assets_backicon] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/build/generated/res/react/release/drawable-xxhdpi/node_modules_reactnavigation_src_views_assets_backicon.png: Error: Duplicate resources [drawable-hdpi-v4/node_modules_reactnavigation_src_views_assets_backicon] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/src/main/res/drawable-hdpi/node_modules_reactnavigation_src_views_assets_backicon.png [drawable-hdpi-v4/node_modules_reactnavigation_src_views_assets_backicon] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/build/generated/res/react/release/drawable-hdpi/node_modules_reactnavigation_src_views_assets_backicon.png: Error: Duplicate resources [drawable-mdpi-v4/app_assets_images_characters_marilyn_monroe_trophies_cookoo30x] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/src/main/res/drawable-mdpi/app_assets_images_characters_marilyn_monroe_trophies_cookoo30x.png [drawable-mdpi-v4/app_assets_images_characters_marilyn_monroe_trophies_cookoo30x] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/build/generated/res/react/release/drawable-mdpi/app_assets_images_characters_marilyn_monroe_trophies_cookoo30x.png: Error: Duplicate resources [drawable-mdpi-v4/app_assets_images_characters_cleopatra_emotions_blinking_5] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/src/main/res/drawable-mdpi/app_assets_images_characters_cleopatra_emotions_blinking_5.png [drawable-mdpi-v4/app_assets_images_characters_cleopatra_emotions_blinking_5] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/build/generated/res/react/release/drawable-mdpi/app_assets_images_characters_cleopatra_emotions_blinking_5.png: Error: Duplicate resources [drawable-mdpi-v4/app_assets_images_coins_5] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/src/main/res/drawable-mdpi/app_assets_images_coins_5.png [drawable-mdpi-v4/app_assets_images_coins_5] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/build/generated/res/react/release/drawable-mdpi/app_assets_images_coins_5.png: Error: Duplicate resources [drawable-mdpi-v4/app_assets_images_characters_marilyn_monroe_emotions_blinking_2] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/src/main/res/drawable-mdpi/app_assets_images_characters_marilyn_monroe_emotions_blinking_2.png [drawable-mdpi-v4/app_assets_images_characters_marilyn_monroe_emotions_blinking_2] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/build/generated/res/react/release/drawable-mdpi/app_assets_images_characters_marilyn_monroe_emotions_blinking_2.png: Error: Duplicate resources [drawable-mdpi-v4/app_assets_images_characters_leonardo_da_vinci_emotions_angry_4] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/src/main/res/drawable-mdpi/app_assets_images_characters_leonardo_da_vinci_emotions_angry_4.png [drawable-mdpi-v4/app_assets_images_characters_leonardo_da_vinci_emotions_angry_4] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/build/generated/res/react/release/drawable-mdpi/app_assets_images_characters_leonardo_da_vinci_emotions_angry_4.png: Error: Duplicate resources [drawable-mdpi-v4/app_assets_images_characters_leonardo_da_vinci_emotions_happy_2] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/src/main/res/drawable-mdpi/app_assets_images_characters_leonardo_da_vinci_emotions_happy_2.png [drawable-mdpi-v4/app_assets_images_characters_leonardo_da_vinci_emotions_happy_2] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/build/generated/res/react/release/drawable-mdpi/app_assets_images_characters_leonardo_da_vinci_emotions_happy_2.png: Error: Duplicate resources [drawable-mdpi-v4/app_assets_images_unlockablecharacters] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/src/main/res/drawable-mdpi/app_assets_images_unlockablecharacters.png [drawable-mdpi-v4/app_assets_images_unlockablecharacters] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/build/generated/res/react/release/drawable-mdpi/app_assets_images_unlockablecharacters.png: Error: Duplicate resources [drawable-mdpi-v4/app_assets_images_characters_cleopatra_emotions_happy_6] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/src/main/res/drawable-mdpi/app_assets_images_characters_cleopatra_emotions_happy_6.png [drawable-mdpi-v4/app_assets_images_characters_cleopatra_emotions_happy_6] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/build/generated/res/react/release/drawable-mdpi/app_assets_images_characters_cleopatra_emotions_happy_6.png: Error: Duplicate resources [drawable-mdpi-v4/app_assets_images_characters_marilyn_monroe_trophies_cookoo3x] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/src/main/res/drawable-mdpi/app_assets_images_characters_marilyn_monroe_trophies_cookoo3x.png [drawable-mdpi-v4/app_assets_images_characters_marilyn_monroe_trophies_cookoo3x] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/build/generated/res/react/release/drawable-mdpi/app_assets_images_characters_marilyn_monroe_trophies_cookoo3x.png: Error: Duplicate resources [drawable-mdpi-v4/app_assets_images_characters_leonardo_da_vinci_emotions_happy_3] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/src/main/res/drawable-mdpi/app_assets_images_characters_leonardo_da_vinci_emotions_happy_3.png [drawable-mdpi-v4/app_assets_images_characters_leonardo_da_vinci_emotions_happy_3] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/build/generated/res/react/release/drawable-mdpi/app_assets_images_characters_leonardo_da_vinci_emotions_happy_3.png: Error: Duplicate resources [drawable-mdpi-v4/app_assets_images_characters_leonardo_da_vinci_emotions_angry_5] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/src/main/res/drawable-mdpi/app_assets_images_characters_leonardo_da_vinci_emotions_angry_5.png [drawable-mdpi-v4/app_assets_images_characters_leonardo_da_vinci_emotions_angry_5] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/build/generated/res/react/release/drawable-mdpi/app_assets_images_characters_leonardo_da_vinci_emotions_angry_5.png: Error: Duplicate resources [drawable-mdpi-v4/app_assets_images_characters_marilyn_monroe_emotions_blinking_3] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/src/main/res/drawable-mdpi/app_assets_images_characters_marilyn_monroe_emotions_blinking_3.png [drawable-mdpi-v4/app_assets_images_characters_marilyn_monroe_emotions_blinking_3] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/build/generated/res/react/release/drawable-mdpi/app_assets_images_characters_marilyn_monroe_emotions_blinking_3.png: Error: Duplicate resources [drawable-mdpi-v4/app_assets_images_coinsmodal_mostpopularlabel] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/src/main/res/drawable-mdpi/app_assets_images_coinsmodal_mostpopularlabel.png [drawable-mdpi-v4/app_assets_images_coinsmodal_mostpopularlabel] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/build/generated/res/react/release/drawable-mdpi/app_assets_images_coinsmodal_mostpopularlabel.png: Error: Duplicate resources [drawable-mdpi-v4/app_assets_images_characters_cleopatra_emotions_blinking_4] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/src/main/res/drawable-mdpi/app_assets_images_characters_cleopatra_emotions_blinking_4.png [drawable-mdpi-v4/app_assets_images_characters_cleopatra_emotions_blinking_4] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/build/generated/res/react/release/drawable-mdpi/app_assets_images_characters_cleopatra_emotions_blinking_4.png: Error: Duplicate resources [drawable-mdpi-v4/app_assets_images_coins_4] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/src/main/res/drawable-mdpi/app_assets_images_coins_4.png [drawable-mdpi-v4/app_assets_images_coins_4] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/build/generated/res/react/release/drawable-mdpi/app_assets_images_coins_4.png: Error: Duplicate resources [drawable-mdpi-v4/app_assets_images_characters_napoleon_trophies_cookoo30x] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/src/main/res/drawable-mdpi/app_assets_images_characters_napoleon_trophies_cookoo30x.png [drawable-mdpi-v4/app_assets_images_characters_napoleon_trophies_cookoo30x] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/build/generated/res/react/release/drawable-mdpi/app_assets_images_characters_napoleon_trophies_cookoo30x.png: Error: Duplicate resources [drawable-mdpi-v4/app_assets_images_earthbg] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/src/main/res/drawable-mdpi/app_assets_images_earthbg.png [drawable-mdpi-v4/app_assets_images_earthbg] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/build/generated/res/react/release/drawable-mdpi/app_assets_images_earthbg.png: Error: Duplicate resources [drawable-mdpi-v4/app_assets_images_characters_einee_emotions_happy_6] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/src/main/res/drawable-mdpi/app_assets_images_characters_einee_emotions_happy_6.png [drawable-mdpi-v4/app_assets_images_characters_einee_emotions_happy_6] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/build/generated/res/react/release/drawable-mdpi/app_assets_images_characters_einee_emotions_happy_6.png: Error: Duplicate resources [drawable-mdpi-v4/app_assets_images_characters_einee_trophies_angry10x] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/src/main/res/drawable-mdpi/app_assets_images_characters_einee_trophies_angry10x.png [drawable-mdpi-v4/app_assets_images_characters_einee_trophies_angry10x] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/build/generated/res/react/release/drawable-mdpi/app_assets_images_characters_einee_trophies_angry10x.png: Error: Duplicate resources [drawable-mdpi-v4/app_assets_images_characters_leonardo_da_vinci_trophies_3conversations] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/src/main/res/drawable-mdpi/app_assets_images_characters_leonardo_da_vinci_trophies_3conversations.png [drawable-mdpi-v4/app_assets_images_characters_leonardo_da_vinci_trophies_3conversations] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/build/generated/res/react/release/drawable-mdpi/app_assets_images_characters_leonardo_da_vinci_trophies_3conversations.png: Error: Duplicate resources [drawable-mdpi-v4/app_assets_images_characters_napoleon_trophies_cookoo10x] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/src/main/res/drawable-mdpi/app_assets_images_characters_napoleon_trophies_cookoo10x.png [drawable-mdpi-v4/app_assets_images_characters_napoleon_trophies_cookoo10x] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/build/generated/res/react/release/drawable-mdpi/app_assets_images_characters_napoleon_trophies_cookoo10x.png: Error: Duplicate resources [drawable-mdpi-v4/app_assets_images_characters_einee_emotions_angry_2] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/src/main/res/drawable-mdpi/app_assets_images_characters_einee_emotions_angry_2.png [drawable-mdpi-v4/app_assets_images_characters_einee_emotions_angry_2] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/build/generated/res/react/release/drawable-mdpi/app_assets_images_characters_einee_emotions_angry_2.png: Error: Duplicate resources [drawable-mdpi-v4/app_assets_images_characters_napoleon_profile] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/src/main/res/drawable-mdpi/app_assets_images_characters_napoleon_profile.png [drawable-mdpi-v4/app_assets_images_characters_napoleon_profile] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/build/generated/res/react/release/drawable-mdpi/app_assets_images_characters_napoleon_profile.png: Error: Duplicate resources [drawable-mdpi-v4/app_assets_images_characters_einee_emotions_happy_4] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/src/main/res/drawable-mdpi/app_assets_images_characters_einee_emotions_happy_4.png [drawable-mdpi-v4/app_assets_images_characters_einee_emotions_happy_4] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/build/generated/res/react/release/drawable-mdpi/app_assets_images_characters_einee_emotions_happy_4.png: Error: Duplicate resources [drawable-mdpi-v4/app_assets_images_characters_einee_trophies_angry30x] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/src/main/res/drawable-mdpi/app_assets_images_characters_einee_trophies_angry30x.png [drawable-mdpi-v4/app_assets_images_characters_einee_trophies_angry30x] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/build/generated/res/react/release/drawable-mdpi/app_assets_images_characters_einee_trophies_angry30x.png: Error: Duplicate resources [drawable-mdpi-v4/app_assets_images_coins_6] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/src/main/res/drawable-mdpi/app_assets_images_coins_6.png [drawable-mdpi-v4/app_assets_images_coins_6] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/build/generated/res/react/release/drawable-mdpi/app_assets_images_coins_6.png: Error: Duplicate resources [drawable-mdpi-v4/app_assets_images_characters_cleopatra_emotions_blinking_6] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/src/main/res/drawable-mdpi/app_assets_images_characters_cleopatra_emotions_blinking_6.png [drawable-mdpi-v4/app_assets_images_characters_cleopatra_emotions_blinking_6] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/build/generated/res/react/release/drawable-mdpi/app_assets_images_characters_cleopatra_emotions_blinking_6.png: Error: Duplicate resources [drawable-mdpi-v4/app_assets_images_characters_einee_bg] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/src/main/res/drawable-mdpi/app_assets_images_characters_einee_bg.jpg [drawable-mdpi-v4/app_assets_images_characters_einee_bg] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/build/generated/res/react/release/drawable-mdpi/app_assets_images_characters_einee_bg.jpg: Error: Duplicate resources [drawable-mdpi-v4/app_assets_images_characters_cleopatra_emotions_cookoo_2] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/src/main/res/drawable-mdpi/app_assets_images_characters_cleopatra_emotions_cookoo_2.png [drawable-mdpi-v4/app_assets_images_characters_cleopatra_emotions_cookoo_2] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/build/generated/res/react/release/drawable-mdpi/app_assets_images_characters_cleopatra_emotions_cookoo_2.png: Error: Duplicate resources [drawable-mdpi-v4/app_assets_images_characters_leonardo_da_vinci_emotions_blinking_3] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/src/main/res/drawable-mdpi/app_assets_images_characters_leonardo_da_vinci_emotions_blinking_3.png [drawable-mdpi-v4/app_assets_images_characters_leonardo_da_vinci_emotions_blinking_3] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/build/generated/res/react/release/drawable-mdpi/app_assets_images_characters_leonardo_da_vinci_emotions_blinking_3.png: Error: Duplicate resources [drawable-mdpi-v4/app_assets_images_characters_cleopatra_emotions_happy_4] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/src/main/res/drawable-mdpi/app_assets_images_characters_cleopatra_emotions_happy_4.png [drawable-mdpi-v4/app_assets_images_characters_cleopatra_emotions_happy_4] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/build/generated/res/react/release/drawable-mdpi/app_assets_images_characters_cleopatra_emotions_happy_4.png: Error: Duplicate resources [drawable-mdpi-v4/app_assets_images_characters_cleopatra_emotions_angry_2] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/src/main/res/drawable-mdpi/app_assets_images_characters_cleopatra_emotions_angry_2.png [drawable-mdpi-v4/app_assets_images_characters_cleopatra_emotions_angry_2] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/build/generated/res/react/release/drawable-mdpi/app_assets_images_characters_cleopatra_emotions_angry_2.png: Error: Duplicate resources [drawable-mdpi-v4/app_assets_images_characters_leonardo_da_vinci_trophies_allconversations1x] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/src/main/res/drawable-mdpi/app_assets_images_characters_leonardo_da_vinci_trophies_allconversations1x.png [drawable-mdpi-v4/app_assets_images_characters_leonardo_da_vinci_trophies_allconversations1x] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/build/generated/res/react/release/drawable-mdpi/app_assets_images_characters_leonardo_da_vinci_trophies_allconversations1x.png: Error: Duplicate resources [drawable-mdpi-v4/app_assets_images_coinsmodal_coins500] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/src/main/res/drawable-mdpi/app_assets_images_coinsmodal_coins500.png [drawable-mdpi-v4/app_assets_images_coinsmodal_coins500] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/build/generated/res/react/release/drawable-mdpi/app_assets_images_coinsmodal_coins500.png: Error: Duplicate resources [drawable-mdpi-v4/app_assets_images_characters_cleopatra_emotions_angry_3] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/src/main/res/drawable-mdpi/app_assets_images_characters_cleopatra_emotions_angry_3.png [drawable-mdpi-v4/app_assets_images_characters_cleopatra_emotions_angry_3] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/build/generated/res/react/release/drawable-mdpi/app_assets_images_characters_cleopatra_emotions_angry_3.png: Error: Duplicate resources [drawable-mdpi-v4/app_assets_images_characters_cleopatra_emotions_happy_5] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/src/main/res/drawable-mdpi/app_assets_images_characters_cleopatra_emotions_happy_5.png [drawable-mdpi-v4/app_assets_images_characters_cleopatra_emotions_happy_5] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/build/generated/res/react/release/drawable-mdpi/app_assets_images_characters_cleopatra_emotions_happy_5.png: Error: Duplicate resources [drawable-mdpi-v4/app_assets_images_characters_leonardo_da_vinci_emotions_blinking_2] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/src/main/res/drawable-mdpi/app_assets_images_characters_leonardo_da_vinci_emotions_blinking_2.png [drawable-mdpi-v4/app_assets_images_characters_leonardo_da_vinci_emotions_blinking_2] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/build/generated/res/react/release/drawable-mdpi/app_assets_images_characters_leonardo_da_vinci_emotions_blinking_2.png: Error: Duplicate resources [drawable-mdpi-v4/app_assets_images_characters_cleopatra_emotions_cookoo_3] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/src/main/res/drawable-mdpi/app_assets_images_characters_cleopatra_emotions_cookoo_3.png [drawable-mdpi-v4/app_assets_images_characters_cleopatra_emotions_cookoo_3] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/build/generated/res/react/release/drawable-mdpi/app_assets_images_characters_cleopatra_emotions_cookoo_3.png: Error: Duplicate resources [drawable-mdpi-v4/app_assets_images_characters_einee_trophies_angry100x] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/src/main/res/drawable-mdpi/app_assets_images_characters_einee_trophies_angry100x.png [drawable-mdpi-v4/app_assets_images_characters_einee_trophies_angry100x] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/build/generated/res/react/release/drawable-mdpi/app_assets_images_characters_einee_trophies_angry100x.png: Error: Duplicate resources [drawable-mdpi-v4/app_assets_images_characters_donald_trump_bg] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/src/main/res/drawable-mdpi/app_assets_images_characters_donald_trump_bg.jpg [drawable-mdpi-v4/app_assets_images_characters_donald_trump_bg] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/build/generated/res/react/release/drawable-mdpi/app_assets_images_characters_donald_trump_bg.jpg: Error: Duplicate resources [drawable-mdpi-v4/app_assets_images_characters_cleopatra_trophies_allconversations3x] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/src/main/res/drawable-mdpi/app_assets_images_characters_cleopatra_trophies_allconversations3x.png [drawable-mdpi-v4/app_assets_images_characters_cleopatra_trophies_allconversations3x] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/build/generated/res/react/release/drawable-mdpi/app_assets_images_characters_cleopatra_trophies_allconversations3x.png: Error: Duplicate resources [drawable-mdpi-v4/app_assets_images_characters_leonardo_da_vinci_emotions_angry_6] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/src/main/res/drawable-mdpi/app_assets_images_characters_leonardo_da_vinci_emotions_angry_6.png [drawable-mdpi-v4/app_assets_images_characters_leonardo_da_vinci_emotions_angry_6] /Users/Ilyakar/Documents/Business/Development/My_Projects/new/Einee/App/android/app/build/generated/res/react/release/drawable-mdpi/app_assets_images_characters_leonardo_da_vinci_emotions_angry_6.png: Error: Duplicate resources ```

Я уже безуспешно пробовал следующее из ответов, которые нашел на React Native Duplicate resources:

Попытка №1:

«Удаление чертежей с помощью rm -rf android / app / src / main / res / drawable- * и создание APK в Android Studio сработало для меня».

Попытка №2:

"rm -rf android / app / src / main / res / drawable- *

пакет response-native --platform android --dev false --entry-file index.js --bundle-output android / app / src / main / assets / index.android.bundle --assets-dest android / app / src / main / res /

И скомпилируйте андроид снова, реагируй-родной run-android "

Есть другие идеи?

 03.10.2018 19:50
42
5
20 284
11
Данный вопрос помечен как решенный
 Ответы 11
llya сегодня я столкнулся с подобной проблемой и исправился следующими шагами:

обновлен путь к классам com.android.tools.build:gradle:3.1.3 на путь к классам com.android.tools.build:gradle:3.2.0 в build.gradle.

изменен distributionUrl = https: //services.gradle.org/distributions/gradle-4.4-all.zip на distributionUrl = https: //services.gradle.org/distributions/gradle-4.6-all.zip в / android / gradle / обертка / gradle-wrapper.properties

Удален android.enableAapt2 = false из gradle.properties.

Обновлен buildTools, версия: 27.0.3.

чистый проект

снова синхронизировать gradle в студии Android.

bundle и повторите попытку, чтобы создать сборку выпуска.

 03.10.2018 20:53
Была такая же ошибка. Что я сделал, чтобы решить эту проблему:

удалить все картинки в вытяжной папке Android / приложение / SRC / основной / res
сгенерировать apk cd android && gradlew buildRelease
 17.10.2018 15:27
Я просто удалил папку android/app/build/generated/, и сборка прошла успешно.

 18.01.2019 12:42
Последние версии React Native (> 0.57.0) повысили уровень оболочки Gradle до 4.4, а плагин Gradle до 3.1.4, как указано в журнале изменений. Это приводит к тому, что процесс сборки Gradle сохраняет результаты AAPT, которые теперь требуются, в другом каталоге, чем раньше. Итак, в основном вам нужно отредактировать файл /node_modules/react-native/react.gradle и добавьте doLast сразу после блока doFirst вручную.

doFirst { ... }
doLast {
    def moveFunc = { resSuffix ->
        File originalDir = file("$buildDir/generated/res/react/release/drawable-${resSuffix}");
        if (originalDir.exists()) {
            File destDir = file("$buildDir/../src/main/res/drawable-${resSuffix}");
            ant.move(file: originalDir, tofile: destDir);
        }
    }
    moveFunc.curry("ldpi").call()
    moveFunc.curry("mdpi").call()
    moveFunc.curry("hdpi").call()
    moveFunc.curry("xhdpi").call()
    moveFunc.curry("xxhdpi").call()
    moveFunc.curry("xxxhdpi").call()
}
 06.03.2019 18:16
 Ответ принят как подходящий
Вот простое решение:

Удалить строить внутри папки Android / приложение
Удалить строить внутри папки андроид
запустить rm -rf $HOME/.gradle/caches/
Откройте build.gradle -> Android / приложение / build.gradle
прокомментируйте эту строку
//apply from: "../../node_modules/react-native/react.gradle"

Удалите файл index.android.bundle из папки ресурсов и создайте заново с помощью react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res

запустить react-native run-androidИли запустить react-native run-android --variant=release

Удачного кодирования ..

 19.03.2019 17:06
Эта проблема возникает, когда у вас есть 2 изображения с одинаковыми именами и разными типами.

Просто проверьте свои активы и не называйте их одинаковыми.

 29.04.2019 16:07
удалите все файлы с именами вроде node_modules_ {some_path} _ {imagename}. {extension} или src_images_ {imagename}. {extension}

из всех папок в android / app / src / main / res, например

android / приложение / src / main / res / drawable-xhdpi / node_modules_reactnavigation_src_views_assets_backicon.png Android / приложение / SRC / основной / res / вытяжка-xhdpi / src_images_mylogo.jpg

Вероятно, они были помещены туда с помощью пакета response-native, и они вызывают ошибку дублирования ресурса

 22.05.2019 19:54
Перейдите по пути android/app/src/res/ и затем удалите все папки drawable-hdpi, mdpi, xhdpi, xxhdpi, xxxhdpi, raw.

 08.11.2019 07:33
Если сборка завершится неудачно после выполнения Задача: приложение: bundleReleaseJsAndAssets, вы увидите эту ошибку при следующей попытке.

Самый простой способ найти повторяющиеся записи - использовать контроль версий.

Если вы используете Git. Вы можете получить все неотслеживаемые файлы с помощью команды

git status

& удалите файлы в каталогах / android / app / src / main / res / drawable **.

Повторно запустить сборку должно работать.

 23.12.2019 11:57
Удалить необработанный файл в SRC / основной / res / raw

Затем запустите This cmd =>

npx response-native bundle --platform android --dev false --entry-file index.js --bundle-output android / app / src / main / assets / index.android.bundle --assets-dest android / app / сборка / промежуточные / res / объединенные / выпуск /

Потом иди беги / android => agradlew assemblyRelease

 24.11.2020 12:09
Лучший ответ, который я могу сказать, - когда вы впервые успешно создаете собственное приложение для реагирования, вы сгенерируете некоторые ресурсы сборки выпуска.

Удалите их все и удалите папку сборки в android / app / build.

И перезапустите npm, запустите android.

 27.12.2020 09:36
Другие вопросы по теме
Возвращаемое значение в обещаниях
React-Apollo: вызовы запроса для списка переменных
Связывание двух входных текстов с помощью React
Реагировать - 'отклонить' не определено
React: create-response-app завершается с ошибкой «Не удается найти модуль lodash»
Как можно построить React поверх Drupal?
Состояние не меняется в reactjs
Заголовок набора appolo-link-rest
Выровнять текст с предыдущим текстом после разрыва строки
Response-dropzone - Как читать файлы через папку?
Похожие вопросы
RecyclerView.onScrolled () не вызывается
Оберните метод в команды с помощью обработки аннотаций
Флажок для Android
Работает ли Web Worker в основном потоке пользовательского интерфейса Android или в отдельном потоке?
Создание квадрата на основе ширины экрана android с использованием макета ограничений
Плагин аутентификации телефона Ionic firebase не установлен
Проблема преобразования речи в текст Android
Прокрутка MapView и Expandablelistview
Виджет с отслеживанием состояния в теле Scaffold
Выражение регулярного выражения не работает для специальных символов перед строкой в ​​Android Studio
Разделы
Блог

Вопросы

Теги

О сайте

Контакты
info@reddeveloper.ru
Правовая информация
Политика конфиденциальности

Пользовательское соглашение


Находите ответы на сложные технические вопросы по программированию, с которыми сталкиваются инженеры по всему миру в своей ежедневной практике на сайте RedDeveloper.

© 2026 «RedDeveloper.ru»


RedDeveloper
Блог
Вопросы
Теги
Поиск...
Как установить переменную окружения в React JS ..?
Вопросы
JAVASCRIPT
Как установить переменную окружения в React JS ..?
Я новичок в React JS. Я пытаюсь создать военный файл из приложения React, но застрял где-то внизу. Это дает мне ошибки ниже.

Creating an optimized production build...

Treating warnings as errors because process.env.CI = true.
Most CI servers set it automatically.

Failed to compile.



./src/Home.js
  Line 2:   'AppNavbar' is defined but never used  no-unused-vars
  Line 3:  'Link' is defined but never used       no-unused-vars
  Line 4:  'Button' is defined but never used     no-unused-vars
  Line 4:  'Container' is defined but never used  no-unused-vars

./src/App.js
  Line 5:   'MenuBar' is defined but never used        no-unused-vars
  Line 6:   'PrivilegeList' is defined but never used  no-unused-vars
  Line 8:   'logo' is defined but never used           no-unused-vars


  npm ERR! code ELIFECYCLE
  npm ERR! errno 1
  npm ERR! my-app@0.1.0 build: `react-scripts build`
  npm ERR! Exit status 1
  npm ERR!
  npm ERR! Failed at the my-app@0.1.0 build script.
  npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

  npm ERR! A complete log of this run can be found in:
    npm ERR!     D:\ReactJS-workspace\my-app\npm\cache\_logs\2018-10-19T07_44_19_233Z-debug.log
    [INFO] ------------------------------------------------------------------------
    [INFO] BUILD FAILURE
    [INFO] ------------------------------------------------------------------------
    [INFO] Total time: 01:36 min
    [INFO] Finished at: 2018-10-19T13:14:19+05:30
    [INFO] ------------------------------------------------------------------------
    [ERROR] Failed to execute goal org.codehaus.mojo:exec-maven-plugin:1.3.2:exec (npm run build (compile)) on project my-app: Command execution failed.: Process exited with an error: 1 (Exit value: 1) -> [Help 1]
    [ERROR]
    [ERROR] To see the full stack trace of the errors, re-run Maven with the -e switch.
    [ERROR] Re-run Maven using the -X switch to enable full debug logging.
    [ERROR]
    [ERROR] For more information about the errors and possible solutions, please read the following articles:
    [ERROR] [Help 1] http://cwiki.apache.org/confluence/display/MAVEN/MojoExecutionException
Ниже представлена ​​моя структура папок.

Как установить переменную окружения в React JS ..?

Я хочу установить process.env.CI = false, как установить переменную среды в React JS?

 19.10.2018 10:05
15
5
32 621
11
Данный вопрос помечен как решенный
 Ответы 11
Создайте файл с именем .eslintrc в корневой папке и добавьте в этот файл следующие правила -

{
    "rules": {
        "no-unused-vars": "off"
    }
}
Это отключит строгую проверку правила eslint no-unused-vars. Вы можете добавить больше правил в этот файл, если хотите их отключить.

Подробнее читайте в руководстве - https://eslint.org/docs/user-guide/configuring.

 19.10.2018 10:14
проверьте этот пакет dotenv,

создайте новый файл .env в вашем рабочем каталоге

установить dotenv с помощью npm install dotenv

добавьте это в свое приложение require('dotenv').config()

в этом файле напишите process.env.CI = false

добавьте .env к вашему .gitignore [при использовании git]

перезапустите ваше приложение.

ИЛИ запустите этот CI=false npm run build

 19.10.2018 10:15
Похоже, вам нужно, чтобы ваше приложение имело доступ к переменным process.env.

Для этого у вас есть несколько вариантов (один из которых включает использование сторонней библиотеки, указанной выше, что является хорошим вариантом, но выполняет несколько задач).

1) Задайте переменные среды в вашей команде запуска, например: CI=travis npm start. В этом случае у вас будет доступ к process.env.CI в вашем приложении.

2) Установите переменную окружения в вашем, вы знаете, окружении. Если вы используете Mac или Linux, просто добавьте переменную среды, как обычно, если ваша оболочка будет экспортировать. Проверить с echo $VAR

3) Вручную сделайте что-нибудь глупое в своем приложении для записи в глобальные переменные. Наверное, не беспокойтесь.

4) Просто используйте .dotenv. То, что он делает, на самом деле несложно, но он предлагает решение, которое практически необходимо для большинства проектов по нескольким причинам.

 19.10.2018 10:52
 Ответ принят как подходящий
Чтобы установить его для выполнения текущего процесса, просто отредактируйте файл package.json и измените сценарий "build" следующим образом:

"scripts": {
"start": "react-scripts start",
"build": "set \"CI=false\" && react-scripts build",
"test": "react-scripts test",
"eject": "react-scripts eject" }
Это установит для переменной среды CI значение «false». Теперь вы можете выполнить команду сборки с установленной переменной CI:

npm run build
 08.01.2019 07:12
Заголовок вашего вопроса сильно отличается от того, что происходит в описании.

Чтобы использовать переменные среды в React, они должны иметь префикс REACT_APP_.

Например, приложение React уловит следующее:

REACT_APP_API_URL=/api

В то время как это не будет:

API_URL=/api

Для получения дополнительной информации см. Официальную документацию:

 17.04.2019 11:19
Я пришел к этому вопросу, когда искал интеграцию с Bitbucket Pipelines.

Для всех, кто ищет то же самое, вы можете добавить CI как false в Settings/Repository Variables для своего репо (если вы не хотите, чтобы он был частью вашего кода, контролируемого версиями).

Если вы хотите добавить его для всех ваших репозиториев в битбакете, вы должны добавить его в свои глобальные настройки, но, вероятно, лучше всего добавить его на основе репо за репо.

 23.03.2020 13:52
"scripts": {
    "start": "react-scripts start",
    "build": "CI=false react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"  
  },
Попробуйте это ... Это установит для CI значение false

 14.04.2020 11:54
Вы должны создать файл .env в корневом каталоге и определить переменную в этом файле. Пожалуйста, убедитесь, что каждый варибал начинается с REACT_APP_, как REACT_APP_IS_PROD=1

Вам необходимо перезапускать сервер каждый раз, когда вы меняете или создаете новую переменную.

Ссылка

 27.09.2020 07:37
Создайте файл .env или еще .env.dev, .env.qa, .env.stg ... и т. д.

Добавьте в этот файл следующую строку

CI=false
если вы еще не установили env-cmd, сначала установите его и включите в package.json

Затем добавьте следующие строки в «скрипты» package.json.

  "scripts": {
    "start": "env-cmd -f .env.dev react-scripts start",
    "build": "react-scripts build",
    "build:dev": "env-cmd -f .env.dev npm run-script build",
    "build:qa": "env-cmd -f .env.qa npm run-script build",
    "build:stg": "env-cmd -f .env.stg npm run-script build",
    "build:prod": "env-cmd -f .env.prod npm run-script build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
Затем выполните сборку с помощью "npm run build: dev" или соответствующей команды.

 14.05.2021 08:40
Для Windows

установить REACT_APP_ENV = разработка && запуск сценариев реакции

Для Linux, Ubuntu, macOs

REACT_APP_ENV = запуск сценариев реакции разработки

 09.07.2021 13:04
Вы можете установить переменные среды в файле .env

Вот шаги

создать файл с именем .env в корневой папке проекта

Теперь, когда вы добавляете переменную, вам нужно добавить префикс REACT_APP например: вы хотите добавить переменную API_URL для своего API. Поэтому вам нужно добавить переменную с префиксом RECT_APP, как показано ниже.

REACT_APP_API_URL

Остановите свой работающий сервер и перезапустите, используя npm start

Чтобы получить доступ к переменной env, вы должны вызвать: process.env.REACT_APP_API_URL

Ну вот. Теперь вы можете получить доступ к переменной env

Примечание:

Убедитесь, что вы добавили префикс (REACT_APP)
Пожалуйста, остановите свой сервер и перезапустите, чтобы он загрузил переменную env, если она добавлена
 14.09.2021 17:48
Другие вопросы по теме
Как npm установить все каталоги функций с помощью AWS CodeBuild
Проблема с запуском проекта на сервере с nodejs
Получить метаданные с любого веб-сайта, используя только интерфейс для расширений Chrome?
Может ли mocha запускать тесты .skip вместе с обычными тестами?
Приложение Node.js подключается к существующему веб-сайту
Где хранить файлы локально, чтобы они не удалялись после удаления приложения Electron?
Webpack может конвертировать js в es6?
Выполните проверку схемы для индексов массива в javascript
"недостаточные области аутентификации" из Google API при вызове из кластера K8S
MongoDB Aggregation - производительность поиска $
Похожие вопросы
Как преобразовать объект json в массив json в javascript
Самый быстрый способ получить определенные поля в объекте - Javascript
Проблема с запуском проекта на сервере с nodejs
Вызов функции компонентов из службы - возможная циклическая зависимость - Angular
Адаптивная круговая диаграмма с React-Vis
Получить метаданные с любого веб-сайта, используя только интерфейс для расширений Chrome?
Как определить, нажата ли карта или маркер
Javascript Vanilla - обработчик событий двойного щелчка на входах / GetElementsByTagName
Тестовый кейс в жасмине
Приложение Node.js подключается к существующему веб-сайту
Разделы
Блог

Вопросы

Теги

О сайте

Контакты
info@reddeveloper.ru
Правовая информация
Политика конфиденциальности

Пользовательское соглашение


Находите ответы на сложные технические вопросы по программированию, с которыми сталкиваются инженеры по всему миру в своей ежедневной практике на сайте RedDeveloper.

© 2026 «RedDeveloper.ru»
