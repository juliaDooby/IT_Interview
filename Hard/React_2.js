RedDeveloper
Блог
Вопросы
Теги
Поиск...
Пакет response-scripts, предоставляемый приложением Create React, требует зависимости:
Вопросы
JAVASCRIPT
Пакет response-scripts, предоставляемый приложением Create React, требует зависимости:
Возможно, возникла проблема с деревом зависимостей проекта. Скорее всего, это не ошибка в приложении Create React, а то, что вам нужно исправить локально.

Пакет response-scripts, предоставляемый приложением Create React, требует зависимости:

"бабель-эслинт": "9.0.0"

Не пытайтесь установить его вручную: ваш менеджер пакетов делает это автоматически. Однако выше в дереве была обнаружена другая версия babel-eslint:

 02.01.2019 02:33
29
5
32 333
11
 Ответы 11
Часть предоставленного вами вывода говорит:

Check if C:\Users\chawki\node_modules\babel-eslint is outside your project directory. For example, you might have accidentally installed something in your home folder.

Перейдите к C:\Users\chawki\node_modules\ и удалите папку babel-eslint или просто удалите C:\Users\chawki\node_modules.

 02.01.2019 08:08
Вот что я сделал ...

C:\user\[yourUserName]\node_modules\babel-eslint и удалите файл
C:\user\[yourUserName]\node_modules\eslint и удалите файл
 02.01.2019 15:36
У меня была такая же проблема, и я выполнил все предложенные шаги, но проблема все еще, поэтому моя ошибка в том, что у меня есть reactApp внутри другого приложения Javascript, у меня была эта структура.

--MyProjects
----NodeJsApp
----node_modules of NodeJsApp
----package.json of NodeJsApp
----ReactApp
------node_modules of ReactApp
------package.json of ReactApp
Проблема решена: я удалил каталог node_modules в ReactApp, затем я реструктурировал свои каталоги, потому что у меня катастрофа.

--MyProjects
----NewDirectory (inside all about NodeJsApp)
------node_modules of NodeJsApp
------package.json of NodeJsApp
----ReactApp
------package.json of ReactApp
После этого я делаю:

npm install
а затем npm start, и моя проблема исправлена, я думаю, что проблема в том, что в родительском каталоге не может быть проекта javascript / nodeJs / или чего-то, что имеет node_modules.

 21.05.2019 17:58
создайте файл .env в файле проекта и добавьте следующий оператор

SKIP_PREFLIGHT_CHECK=true
Сохраните файл

Удалите node_modules, yarn.lock, package.lock

Затем переустановите node_modules с помощью

npm install
Это должно работать

 07.07.2019 10:28
Удалите файлы eslint и babel-eslint из модулей узлов на вашем компьютере, например. -C:\Users\vishnu\node_modules Файлы -delete eslint и babel-eslint.

В вашем проекте:

yarn remove eslint
yarn add --dev eslint@6.1.0
yarn remove babel-eslint
yarn add --dev babel-eslint@10.0.3
 03.10.2019 23:30
в package.json

resolutions:{
    "babel-eslint": "9.0.0"
}
если вы переустановите все свои зависимости, вы заставите «babel-eslint» установить версию «9.0.0». если вы запустите приложение, у вас не будет проблем.

 21.11.2019 03:41
Я просто удалил папку node_modules (для меня это была C:\user\[yourUserName]\node_modules\) и переустановил ее.

 08.05.2020 11:55
Моя проблема заключалась в том, что я установил webpack как глобальный пакет ... после того, как я удалил webpact и запустил npm install, проблема исчезла

 11.08.2020 15:42
Убедитесь, что у вас нет глобального пакета webpack или где-то выше по структуре каталогов. В моем случае он был установлен глобально. Удаление, а затем запуск npm install, а затем npm start работали отлично.

 08.10.2020 16:57
Запустите npm ls babel-eslint и посмотрите, какие зависимости используют его или устанавливают другую версию. Попробуйте обновить эти библиотеки.

У меня это сработало.

 16.10.2020 19:11
Если вы не хотите создавать файл .env, есть еще одна альтернатива, вы можете передать SKIP_PREFLIGHT_CHECK=true прямо в скрипт. Например

   "start": "SKIP_PREFLIGHT_CHECK=true react-scripts start",
 17.09.2021 13:06
Другие вопросы по теме
Запустить функцию после того, как jquery ujs отправит удаленную форму
Как мне обновить график с изменением состояния
Как отключить автофокус нескольких всплывающих окон пользовательского интерфейса материалов?
Компонент React некорректно отображается
Почему при использовании аутентификации firebase содержимое отображается только для одного пользователя?
ReactJS с useEffect не отображает каждое состояние
Тайм-аут подключения к firebase createUserWithEmailAndPassword
Программная навигация при использовании HashRouter
Реагировать на передачу значений состояния на var не работает
Вложенные маршруты в React Router v4 не отображаются должным образом
Похожие вопросы
Django - переменная не отправляется с запросом POST
Почему этот хвостовой рекурсивный цикл вызывает переполнение стека в javascript / node?
Подсветка синтаксиса в динамических сообщениях блога не работает
Операторы if / else регистрируют только if, а не else
Компонент React некорректно отображается
Почему при использовании аутентификации firebase содержимое отображается только для одного пользователя?
Пользовательский интерфейс материала - Expand Panel не сжимает вышеуказанный div
Наложение текста - через определенное время
Преобразование дочернего элемента при наведении курсора с помощью Javascript
Возврат родительского совпадения во вложенном цикле с использованием ES6
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
Пустая страница после запуска сборки в приложении create-реагировать
Вопросы
REACTJS
Пустая страница после запуска сборки в приложении create-реагировать
Пытаюсь развернуть приложение create-реагировать на netlify, однако моя сборка пустая страница. Я использую файл .env для загрузки ключа Firebase API, это проблема для сборки?

Даже когда я пытался открыть его локально на своем компьютере, его пустая страница и вывод ошибки в консоли: «Ошибка загрузки файла с исходным кодом: ///event-app/static/js/main.108757a0.js»

пакет.json: https://gist.github.com/Verthon/f82371ad2bb636b2e95c5b7697aa0bb5

➜  event-app git:(master) ✗ npm run build

> event-app@0.1.0 build /home/jurr/Projects/event-app
> node scripts/build.js

Creating an optimized production build...
Compiled with warnings.

./src/components/Router.js
  Line 12:  'withFirebase' is defined but never used  no-unused-vars

./src/components/Firebase.js
  Line 21:  'Firebase' is defined but never used  no-unused-vars

Search for the keywords to learn more about each warning.
To ignore, add // eslint-disable-next-line to the line before.

File sizes after gzip:

  282.86 KB  build/static/js/main.108757a0.js
  3.1 KB     build/static/css/main.8e671453.css

 08.04.2019 09:59
47
0
77 423
11
Данный вопрос помечен как решенный
 Ответы 11
 Ответ принят как подходящий
Я решил проблему, установив

"homepage": "."
в package.json согласно этот документ

 09.04.2019 14:33
Добавлять

"homepage": ".",
в вашем package.json, затем снова постройте.

 31.08.2019 21:47
Итак, проблема заключается в кэшировании вашего приложения в браузере.

Я решил эту проблему с serviceWorker() в create-react-app.

Вот решение: просто добавьте это в свой файл index.js и удалите реестр сервисного работника.

import { unregister } from './registerServiceWorker';
unregister();
 03.03.2020 12:56
Беги npm run eject

Отредактируйте файл webpack.config в папке config

Найдите путь с "static/" или "static/js/" или "static/css/" в файле и удалите такой путь

Создайте свой проект снова

Эта работа для меня. надеюсь, это сработает и для вас.

 31.03.2020 09:37
Как сказал @Вертон, добавив "homepage": ".", в файл package.json, в высший уровень вот так:

{
     "name": "myApp",
     "homepage": ".",
     // all other package.json stuff...
}
 25.05.2020 17:38
Если вы используете react-router и пытаетесь открыть index.html прямо в браузере (или используете электрон, который, по сути, и делает это), в дополнение к настройке homepage, как предлагали другие, замените BrowserRouter на HashRouter.

Я пытался создать электронное приложение, используя приложение create-реагировать. При запуске в разработке все было нормально, но когда я создал CRA, а затем указал электронному приложению на файл index.html, я получил пустую страницу.

Я обнаружил, что это точно так же, как открытие файла index.html непосредственно в браузере. Все говорят "установить homepage в package.json", но у меня это уже было. И что теперь!?

В конце концов я понял, что проблема была react-router. Я использовал BrowserRouter. Переход на HashRouter решил проблему для меня.

 06.08.2020 08:16
Я пытался открыть приложение после сборки, дважды щелкнув index.html, и это тоже не сработало, я получил пустую страницу, но если встроенные файлы запускаются в серверной среде, работает. https://create-react-app.dev/docs/deployment/

 22.09.2020 17:08
Оооо, как я только что узнал, что я делал снова и снова: вы опубликовали папку публичный вместо папки строить.



 20.11.2020 16:10
У меня был комментарий внутри моего метода return, и это вызвало у меня проблему.

Если сообщение об ошибке в консоли браузера

Minified React error #152;

Тогда удаление любого комментария внутри метода return может решить вашу проблему, как и мою.

 07.03.2021 15:44
Для меня проблема заключалась в том, что встроенный сценарий выполнения не запускался, так как я получал сообщение об ошибке:

Refused to execute inline script because it violates the following Content Security Policy directive: "script-src 'self'". Either the 'unsafe-inline' keyword, a hash ('sha256-5='), or a nonce ('nonce-...') is required to enable inline execution.

Это было исправлено путем добавления переменной INLINE_RUNTIME_CHUNK=false в скрипт сборки.

"build": "INLINE_RUNTIME_CHUNK=false react-scripts build",
Это связано с Политика безопасности контента браузеров: «Браузер, совместимый с CSP, будет выполнять только сценарии, загруженные в исходные файлы, полученные из этих разрешенных доменов, игнорируя все остальные сценарии (включая встроенные сценарии и HTML-атрибуты обработки событий)».

 26.05.2021 08:07
Я столкнулся с подобной проблемой. Но если вы будете правильно следовать React-развертывание, вы поймете, что есть "домашняя страница":"." // Пользователь "." если вы развертываете на своем локальном компьютере, но на сервере, размещенном где-то, вы можете использовать свой домен или IP-адрес в поле домашней страницы.

{
  "homepage":"https://example.com"
}
 27.09.2021 13:10
Другие вопросы по теме
Импорт JS-файла Google Maps API с помощью React
Имена классов модулей CSS не определены
Как я могу выбрать все папки и подпапки любой глубины с пользовательским окончанием файла?
Каково значение списка браузеров в package.json, созданном приложением create-реагировать
Как я могу открыть реагирующее приложение по этому URL-адресу: js-api.local.dev?
Недопустимый URI при отправке запроса на серверную часть с помощью приложения create-реагировать
Тестирование приложения create-реагировать «Реакция не определена»
Как добавить функции отладки, которые я могу вызывать из консоли отладчика Chrome, в приложение Create React?
Загрузка scss в строковую переменную с помощью create-react-app 2.0 без извлечения
GetElementById() не работает при входе с помощью <Link> реактивного маршрутизатора
Похожие вопросы
Есть ли способ принудительно обновить компоненты, изменив URL-адрес, используя redux и react-router?
Выпадающий список множественного выбора с уникальным выбором - React JS
Как я могу изменить состояние массивов с помощью хуков?
Как установить динамический размер шрифта для каждого элемента в серии древовидной диаграммы amchart4
Реагировать: невозможно добавить свойство «X», объект не расширяемый
Как изменить состояние внутри «нового метода» с помощью Mobx
Не удалось найти "магазин", даже если рут завёрнут в Provider
Как разделить панель инструментов material-ui на левую и правую части
Переменная React не обновляется
Как проверить, вошел ли пользователь в реагирующий компонент при использовании аутентификации laravel?
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
InvalidCharacterError: не удалось выполнить createElement для документа: указанное имя тега (/static/media/index.c6592bb6.ts) не является допустимым именем
Вопросы
REACTJS
InvalidCharacterError: не удалось выполнить createElement для документа: указанное имя тега (/static/media/index.c6592bb6.ts) не является допустимым именем
У меня есть приложение для реагирования, которое я пытаюсь преобразовать для использования машинописного текста.

но я получаю следующую ошибку: InvalidCharacterError: Failed to execute 'createElement' on 'Document': The tag name provided ('/static/media/index.c6592bb6.ts') is not a valid name.

Что вообще означает эта ошибка? Похоже, ему не нравится расширение машинописного текста

Есть идеи, как исправить?

 02.01.2019 10:09
18
1
50 900
14
 Ответы 14
Это означает, что у вас есть код, который пытается это сделать:

document.createElement("/static/media/index.c6592bb6.ts")
... прямо или косвенно. Поскольку /static/media/index.c6592bb6.ts не является допустимым именем тега (например, div или span), он не работает.

 02.01.2019 10:10
В моем случае я создавал свое веб-приложение и создал файл javaScript в IDE IntelliJ. Но в папке в имени файла отсутствовал суффикс «.js». Поэтому, когда я использовал команду npm run dev в терминале, мне не удалось найти созданный мной файл.

Если он у вас такой же, то просто зайдите в папку и добавьте суффикс «.js» в имя файла.

Я думаю, что это ошибка в IntelliJ. Надеюсь, они исправят ее позже.

 09.03.2019 17:37
Не уверен, что это помогает, но у меня было такое же сообщение об ошибке, и в нем отмечалось следующее:

ReactDOM.render ( <App />, document.getElementById('root'));
Для меня это была простая ошибка (как уже упоминалось кем-то) отсутствия файла с правильным расширением. В моем случае это был дочерний элемент SearchBox, который был сохранен как текстовый файл, а не как «SearchBox.js». В вашем случае это будет файл «Индекс». Конечно, я новичок в этом и все еще учусь, просто подумал, что поделюсь, поскольку чтение предыдущих ответов на ваш вопрос помогло мне исправить мою проблему!

 04.04.2019 18:43
Для меня проблема заключалась в том, что я пытался визуализировать файлы ts. React не может «создавать элементы» из ts файлов. Файлы TS необходимо перенести в JS. Я думал, что мой загрузчик babel настроен правильно, но это не так. Загрузчик babel не проверял файлы ts или tsx.

 03.05.2019 21:41
Прежде всего, убедитесь, что в исходной папке или в общей папке есть файл без правильного расширения означает "

index

"добавьте к нему правильное расширение или удалите его.

 20.08.2019 07:10
ха-ха, у меня такая же ошибка и долго беспокоила.

import GuessLikeList from './GuessLikeList/GuessLikeList.jsx';
и ошибка

Failed to execute 'createElement' on 'Document': The tag name provided ('./GuessLikeList/GuessLikeList.jsx') is not a valid name.
Это означает, что невозможно выполнить с '.jsx', поэтому вам нужно изменить расширение имени файла или импортировать некоторые модули для компиляции jsx

 20.01.2020 07:26
У меня такая ошибка. Случалось, что в конце имени папки js были пробелы. Кажется, React не распознает пространство в именах папок / файлов.

 22.04.2020 14:57
У меня тоже была эта ошибка, и я не вижу, чтобы она описывалась в решениях, это была ошибка с моей стороны из-за того, что цитаты были частью моего назначения компонента Route.

<Route component = "{ NotFound }" />
Удаление кавычек решило проблему.

<Route component = { NotFound } />
 01.05.2020 07:58
На всякий случай, если это не было указано ранее, у меня была такая же проблема с домашним документом, потому что я использовал это:

<Route path = "/" component = "{Home}" />
Вместо этого

<Route path = "/" component = {Home} />
Обратите внимание на кавычки. Надеюсь, это кому-то поможет.

 30.05.2020 23:38
В моем случае у меня была ошибка в моем App.js. У App.js было неправильное имя на пути маршрута, как это, поэтому мне пришлось исправить имя пути, и это устранило мою ошибку.

 13.11.2020 02:37
В моем случае это был просто импорт такого актива

import { ReactComponent as PaintIcon } from "./assets/paint.svg";
вместо

import PaintIcon from "./assets/paint.svg";
Спасибо.

 27.06.2021 10:46
убедитесь, что вы добавили .js в имя вашего файла, а также при его импорте

 09.08.2021 12:33
В имени индекса может быть фиктивный файл, не имеющий суффикса «.js».

Или ваш индексный файл может не иметь суффикса ".js".

Так переименуйте это

 23.08.2021 17:56
в моем случае я импортировал SVG, например:

import SidebarButton from '../../assets/images/sidebarbutton.svg';
И просто используя это:

<SideBarButtonImg>
Это устранило проблему:

const SideBarButtonImg = () => (
  <button style = {{height: '100%'}}>
    <img
      src = {sidebarbutton}
      alt = ""
      style = {{
        height: '100%',
        background: '#fff',
      }}
    />
  </button>
)
 16.09.2021 11:21
Другие вопросы по теме
Перенос значений базы данных firebase в новый массив
Как получить Observable для данных из запроса Firestore в Angular 7?
Изображение дисплея Angular 6, полученное из AWS S3
Angular 7 чипов ngx рабочий функционал
Угловые вспомогательные маршруты к именованным выходам внутри MatDialog
Как перетащить элемент в угловой 6?
Я хочу отключить следующую кнопку, когда форма показывает последнюю запись, и отключить предыдущую кнопку, когда форма показывает первую запись
Как я могу объявить интерфейс машинописного текста как атрибут класса
Как разобрать общий список коллекций C# в машинописном тексте
Машинописный эквивалент python isinstance
Похожие вопросы
Как переопределить встроенные классы material-ui
Импорт файла компонента React с помощью node js
Slice () на массив объекта не вернул ссылку?
Форма реакции не работает должным образом (проблема с реквизитом (?))
Календарь резки React datepicker на экране мобильного телефона
В общем, что лучше использовать один или несколько хуков useEffect в одном компоненте?
React-native-image-picker продолжительность видео
Как запускать события в Node JS, когда наступает будущая дата, время, хранящееся в базе данных?
Выровнять элементы по горизонтали бутстрап
Использование классов начальной загрузки с компонентами в стиле reactjs
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
Библиотека не найдена для -lDoubleConversion
Вопросы
IOS
Библиотека не найдена для -lDoubleConversion
Я попытался построить на XCode, но возникла ошибка ld: library not found for -lDoubleConversion. Я мог собрать react-native run-ios. Это сработало бы, но XCode не смог построить ...

ld: warning: directory not found for option '-L/Users/xxxxx/Library/Developer/Xcode/DerivedData/xxxxx/Build/Products/Debug-iphonesimulator/DoubleConversion' ld: warning: directory not found for option '-L/Users/xxxxx/Library/Developer/Xcode/DerivedData/xxxxx/Build/Products/Debug-iphonesimulator/Folly' ld: warning: directory not found for option '-L/Users/xxxxx/Library/Developer/Xcode/DerivedData/xxxxx/Build/Products/Debug-iphonesimulator/GTMOAuth2' ld: warning: directory not found for option '-L/Users/xxxxx/Library/Developer/Xcode/DerivedData/xxxxx/Build/Products/Debug-iphonesimulator/GTMSessionFetcher' ld: warning: directory not found for option '-L/Users/xxxxx/Library/Developer/Xcode/DerivedData/xxxxx/Build/Products/Debug-iphonesimulator/Google-Maps-iOS-Utils' ld: warning: directory not found for option '-L/Users/xxxxx/Library/Developer/Xcode/DerivedData/xxxxx/Build/Products/Debug-iphonesimulator/GoogleToolboxForMac' ld: warning: directory not found for option '-L/Users/xxxxx/Library/Developer/Xcode/DerivedData/xxxxx/Build/Products/Debug-iphonesimulator/Protobuf' ld: warning: directory not found for option '-L/Users/xxxxx/Library/Developer/Xcode/DerivedData/xxxxx/Build/Products/Debug-iphonesimulator/React' ld: warning: directory not found for option '-L/Users/xxxxx/Library/Developer/Xcode/DerivedData/xxxxx/Build/Products/Debug-iphonesimulator/glog' ld: warning: directory not found for option '-L/Users/xxxxx/Library/Developer/Xcode/DerivedData/xxxxx/Build/Products/Debug-iphonesimulator/leveldb-library' ld: warning: directory not found for option '-L/Users/xxxxx/Library/Developer/Xcode/DerivedData/xxxxx/Build/Products/Debug-iphonesimulator/nanopb' ld: warning: directory not found for option '-L/Users/xxxxx/Library/Developer/Xcode/DerivedData/xxxxx/Build/Products/Debug-iphonesimulator/react-native-google-maps' ld: warning: directory not found for option '-L/Users/xxxxx/Library/Developer/Xcode/DerivedData/xxxxx/Build/Products/Debug-iphonesimulator/react-native-maps' ld: warning: directory not found for option '-L/Users/xxxxx/Library/Developer/Xcode/DerivedData/xxxxx/Build/Products/Debug-iphonesimulator/yoga' ld: library not found for -lDoubleConversion clang: error: linker command failed with exit code 1 (use -v to see invocation)

 28.05.2018 10:58
25
0
20 918
14
 Ответы 14
XCode не может найти библиотеку lDoubleConversion, вам нужно добавить библиотеку в файл какао-стручков.

вы можете легко сделать это, выполнив следующие действия

1. Добавьте файл библиотеки в свой подфайл.

pod 'DoubleConversion', :podspec => './../node_modules/react-native/third-party-podspecs/DoubleConversion.podspec'
2. удалить Podfile.lock

3. запустить установку модуля

4. Добавьте DoubleConversion.a в связанные с xcode фреймворки и библиотеки.

5. Очистите проект и постройте заново.

Это должно сработать.

 12.06.2018 01:56
У меня была эта проблема немного назад после обновления до RN 0.59.

Решение, которое сработало для меня, заключалось в том, чтобы удалить папку ios/build, а затем сделать следующее:

cd ios

pod install
Когда я это сделал, я увидел ошибку Folly, и люди рекомендовали это сделать:

pod deintegrate

pod install
Я сделал это, но он все равно будет выдавать ошибку о Folly, поэтому я удалил Podfile.lock, потому что в модулях хранится старая версия Folly, несовместимая с RN 0.59.

ПРИМЕЧАНИЕ. Я нашел сообщение от кого-то, в котором говорится, что удаление всего файла блокировки не рекомендуется. Вместо этого вы должны удалить только соответствующие строки в файле блокировки, те строки, которые относятся к Folly. Я уже удалил файл блокировки, но все обошлось.

Я запустил pod update, который обновил кучу вещей и успешно завершился.

В следующий раз, когда я запустил pod install, он выдал хороший список «зеленых», успешных установок.

Затем я снова сделал react-native run-ios, и это сработало впервые за долгое время, за исключением того, что создавало красный экран смерти.

Поэтому я удалил свое приложение с устройства симулятора iOS, а затем запустил:

rm -rf node_modules

npm install

killall -9 node
killall -9 node предназначен только для того, чтобы убить Metro Bundler. Это моя любимая широкая команда для этого. Если вы используете на своем компьютере двенадцать API-интерфейсов node.js, возможно, вместо этого выполните что-то вроде sudo lsof -i :8081 и найдите идентификатор процесса для Metro Bundler (ов) и уничтожьте их по PID. Например, если вы видите, что Metro Bundler работает как PID 27322, выполните kill -9 27322.

Затем я запустил это в автономном терминале:

npm start -- --reset-cache
обратно в интегрированный терминал VS Code:

react-native run-ios
ЭТО СРАБОТАЛО !!!!!!!!

Затем я побежал:

react-native run-android
это сработало, но застряло на 0% на устройстве симулятора, поэтому я удалил APK с симулятора и снова запустил react-native run-android.

ЭТО СРАБОТАЛО !!!!!!!!

 20.04.2019 20:13
Для меня я решил просто открыть MyAppName.xcworkspace вместо MyAppName.xcodeproj, а затем собрать.

 16.07.2019 10:28
Иногда это так же просто, как pod install внутри /ios, затем закрыть xcode, снова открыть его и пересобрать. Работал у меня.

 16.07.2019 15:37
Для меня сработали следующие шаги:

Удалите use_frameworks! из ios / Podfile.

target 'AwesomeProject' do
    # use_frameworks!
    ...
end
Добавить модуль DoubleConversion в ios / Podfile

target 'AwesomeProject' do
    # use_frameworks!
    ...
    pod 'DoubleConversion', :podspec => '../node_modules/react-native/third-party-podspecs/DoubleConversion.podspec'
end
Очистить стручки.

pod deintegrate

pod rm Podfile.lock
Переустановите капсулы

pod install --repo-update --verbose
Откройте AwesomeProject.xcworkspace и запустите приложение.

Надеюсь, это кому-то поможет :)

 05.08.2019 04:51
Моя проблема заключалась в том, что я перешел на React Native 0.60 с cocoapods, и я забыл обновить свой процесс сборки Fastlane для сборки с использованием .xcworkspace вместо файла .xcproj.

Я сузил круг вопросов, заметив, что могу создавать и архивировать сборку с помощью Xcode, но моя сборка Fastlane не удалась. Новичек.

 11.09.2019 00:11
Активация Find Implicit Dependencies для схемы на xcode решила проблему в моем проекте.



 30.04.2020 07:38
Это случилось со мной при создании проекта на терминале, а не на XCode, и это произошло как на CI, так и на моем ноутбуке.

Это происходит потому, что вы собираете проект app.xcodeproj вместо рабочего пространства app.xcworkspace.

Итак, вам нужно изменить параметр в вашем вызове с -project app.xcodeproj на -workspace app.xcworkspace. Обратите внимание, что меняется не только значение, но и имя параметра.

А теперь полный пример звонка.

Из:

xcodebuild -sdk iphoneos -configuration yourconfig -project app.xcodeproj -scheme yourscheme build -UseModernBuildSystem=YES CODE_SIGN_STYLE=Automatic

К:

xcodebuild -sdk iphoneos -configuration yourconfig -workspace app.xcworkspace -scheme yourscheme build -UseModernBuildSystem=YES CODE_SIGN_STYLE=Automatic

 12.05.2020 12:58
Я просто обновляю цель развертывания до 11.4 с 10, и она сработала

 01.09.2020 18:52
Для меня:

Измените цель развертывания на 11.0, Также измените цель развертывания AppNameTEST на 11.0

rm -rf node_modules

npm install

pod update

pod install
 17.09.2020 19:52
используйте platform: ios, '10 .0 'вместо platform: ios, '11 .0' в Podfile.

 24.11.2020 11:11
Все остальное я пробовал часами, то, что работало, было установлено в моем подфиле:

platform :ios, '10.0'
То же, что и iOS Deployment Target Version в Info.plist. Они были разные.

 03.01.2021 16:12
После 3 дней своих усилий я нашел следующие решения.

Убедитесь, что вам нужно открыть MyAppName.xcworkspace вместо MyAppName.xcodeproj
Закройте Xcode и попробуйте деинтегрировать Pod, а затем Pod Install.
Измените настройку сборки с Legacy на New build system.
Для меня вариант 3 сработал.

 26.02.2021 12:44
Я немного новичок в процессе сборки iOS, и я поделюсь своим решением, чтобы, надеюсь, избавить кого-либо от часов разочарования.

В моем случае это была просто устаревшая / плохая сборка. Убедитесь, что вы открыли правильную папку Xcode в Xcode <YOUR_APP>.xcworkspace, в верхнем меню Xcode выберите Product -> Clean Build Folder

 02.03.2021 06:16
Другие вопросы по теме
Как отфильтровать массив по маршруту в React.js?
React Js отправляет данные массива в api
Срок действия токена Reactjs
Примеры внешнего интерфейса reactjs для backend aiohttp
Загруженная фотография не отображается в firefox
Ошибка при использовании редактора React Markdown
Компоненты Apollo Query с react-native
Как повторно использовать компонент и изменить некоторые значения, такие как текст и изображения, в другом компоненте с помощью React?
Как установить только один флажок в Reactjs
Использование свойств ThemeProvider в компонентах с глобальным стилем
Похожие вопросы
Ошибка AdMob EU Consent SDK iOS: форму согласия можно использовать только при выборе специального поставщика
Objective-C: я хочу сравнивать / отсортировать массивы по блокам
Передача данных из Tableview в CollectionView SWIFT
Как получить отмену и вызов действия пользователя из UIAlertView
Невозможно протестировать симулятор iOS 10 (iphone 5) с помощью XCode 9
IOS, Swift, XCode: почему положение моих элементов на разных устройствах разное?
Использование группы отправки для возврата значения из закрытия приостановить пользовательский интерфейс
Несколько изображений в веб-просмотре не смахиваются должным образом
Назначьте делегата для мобильных объявлений IronSource
Код в делегате приложения против View Controller
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
У пряжи проблемы с подключением к сети
Вопросы
REACTJS
У пряжи проблемы с подключением к сети
Я пытался сегодня установить пакет с пряжей и получил это

yarn install
yarn install v1.9.4
[1/4] ?  Resolving packages...
info There appears to be trouble with your network connection. Retrying...
info There appears to be trouble with your network connection. Retrying...
info There appears to be trouble with your network connection. Retrying...
info There appears to be trouble with your network connection. Retrying...
error An unexpected error occurred: "https://registry.yarnpkg.com/eslint: getaddrinfo ENOTFOUND     registry.yarnpkg.com registry.yarnpkg.com:443".
info If you think this is a bug, please open a bug report with the information provided in "/Users/daviddragovacz/Documents/GitHub/react-    project-one/dragi/yarn-error.log".
info Visit https://yarnpkg.com/en/docs/cli/install for documentation about this command.
кто-нибудь знает, как это исправить? Моя сеть вроде в порядке, совсем не медленная.

Это происходит с каждым пакетом, который я пробовал.

package.json

{
    "name": "dragi",
    "version": "0.1.0",
    "private": true,
    "dependencies": {
        "axios": "^0.18.0",
        "prop-types": "^15.6.2",
        "react": "^16.4.2",
        "react-dom": "^16.4.2",
        "react-redux": "^5.0.7",
        "react-router": "^4.3.1",
        "react-router-dom": "^4.3.1",
        "react-scripts": "1.1.5",
        "redux": "^4.0.0",
        "redux-devtools-extension": "^2.13.5",
        "redux-thunk": "^2.3.0",
        "semantic-ui-css": "^2.3.3",
        "semantic-ui-react": "^0.82.3",
        "validator": "^10.7.0"
    },
    "scripts": {
        "start": "react-scripts start",
        "build": "react-scripts build",
        "test": "react-scripts test --env=jsdom",
        "eject": "react-scripts eject",
        "lint": "eslint src"
    },
    "devDependencies": {
        "eslint": "^5.5.0",
        "eslint-config-airbnb": "^17.1.0",
        "eslint-config-prettier": "^3.0.1",
        "eslint-plugin-import": "^2.14.0",
        "eslint-plugin-jsx-a11y": "^6.1.1",
        "eslint-plugin-prettier": "^2.6.2",
        "eslint-plugin-react": "^7.11.1",
        "prettier": "^1.14.2"
    },
    "proxy": "http://localhost:8080"
}
Также небольшое примечание: npm i работает нормально - проблемы возникают только с пряжей

 02.09.2018 11:53
24
3
35 247
12
Данный вопрос помечен как решенный
 Ответы 12
 Ответ принят как подходящий
Попробуйте очистить cache

$ yarn cache clean
$ yarn // to install dependencies, no need for "yarn install"
Подход 2

$ yarn install --network-timeout 1000000
Ссылка https://github.com/yarnpkg/yarn/issues/4890#issuecomment-358179301

 02.09.2018 11:55
Попробуйте увеличить время ожидания сети

yarn install --network-timeout 1000000
нашел это на GitHub issues https://github.com/yarnpkg/yarn/issues/4890

 02.09.2018 12:21
повторная попытка несколько раз сработала для меня по аналогичной проблеме.

 27.06.2019 09:57
У меня была другая ошибка, но та же проблема с сетевым подключением. я прочитал эту ветку: https://github.com/yarnpkg/yarn/issues/15

и закончил тем, что удалил / переустановил node / npm, что устранило мою проблему. может быть, что-то не так с установкой вашего узла?

 26.07.2019 15:33
Проверьте скорость / силу подключения к Интернету. У меня была эта проблема, когда я был на пятнистой общедоступной сети Wi-Fi. Заметил, что это был другой пакет, который каждый раз выдавал ошибку, когда я пытался. И как только я стал быстрее / стабильнее в Интернете, эта проблема исчезла. (Пакеты были слишком большими для моего плохого соединения).

 24.09.2019 11:09
Я тоже понял.

Я запустил yarn install --no-lockfile, и он сработал, поэтому я снова удалил модули узлов и удалил yarn.lock. Похоже на ошибку в yarn, потому что yarn не было проблем в предыдущих версиях моего приложения.

 18.10.2019 22:22
У меня была такая же проблема, и я решил ее, выполнив следующие действия:

Запустите команду терминала

Очистить кеш npm
очистка кеша npm --force
установить http_proxy =
Установите https_proxy =
Прокси-сервер для удаления пряжи
Npm config rm https-прокси
Npm config rm прокси
Перезагрузите свой терминал
пряжа
Пряжа –network-timeout 100000
Перезагрузите терминал.

у меня это сработало.

 14.01.2020 20:34
У меня была такая же проблема с повторной попыткой сети, когда я использовал yarn install, просто использование yarn сработало для меня.

 11.02.2020 18:42
Возможно, изначально библиотека использовала npm вместо yarn. В моем случае мне пришлось устанавливать все с помощью npm вместо yarn. Я удалил файл yarn.lock, а затем:

npm install
 29.03.2020 18:03
Если вы используете WSL для Linux, просто добавьте текущий IP-домен в: C: \ Windows \ System32 \ drivers \ etc \ hosts, например:

104.16.21.35    registry.yarnpkg.com
 13.04.2020 13:50
Я много пробовал:

npm clean cache
yarn clean cache
yarn config delete proxy
yarn config delete https-proxy
yarn config delete registry
yarn install --network-timeout 1000000
наконец то работает!

 25.07.2020 07:16
В моем случае был скрытый файл .npmrc, в котором реестр указывал на местоположение в другой частной сети, к которой моя сеть не имела доступа. Как только я закомментировал записи, связанные с частной сетью, в этом файле, yarn install начал работать. Также был сгенерирован yarn-error.log, который содержал эту информацию.

 18.11.2020 03:14
Другие вопросы по теме
Установите тайм-аут для каждого SHELL_EXEC в цикле PHP
Передает ли отправитель TCP повторно тот же самый SYN, что и предыдущий SYN, после истечения таймера?
Панель поиска для фильтрации результатов таблицы в React с таймаутом
PHP и Nginx, внезапно чрезвычайно медленные по SSL, но идеальные по HTTP
Тайм-аут запроса PHP для простой функции
Нестабильный обратный вызов WCF ServiceHost
Невозможно удаленно выполнить пакетный файл, содержащий перенаправление / тайм-ауты, с помощью сценария PowerShell
Обрыв php скрипта в середине для разбора больших файлов
Ошибка Vagrant up с несколькими частными сетями
Установка тайм-аута соединения / сокета JDBC через persistence.xml
Похожие вопросы
При рендеринге с помощью вспомогательной функции я получаю: «Объекты недопустимы как дочерние элементы React»
Как я могу добавить или удалить класс при прокрутке в React?
Перенаправление с согласованными параметрами с помощью response-router-dom не работает
Как использовать метод post в React Native?
Можно ли использовать reactjs без написания какого-либо класса?
Сопоставление состояния редукции с реквизитом - состояние уничтожено?
Произошла ошибка при подписке на creat-response-app
Реагируйте на странный console.info, созданный не мной
React Native Enforce английская клавиатура
Установка реактивного маршрутизатора без обновления файла package.json
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
Redux TypeError: невозможно прочитать свойство 'apply' из undefined
Вопросы
JAVASCRIPT
Redux TypeError: невозможно прочитать свойство 'apply' из undefined
Я отключил инструменты разработки реагирования и инструменты разработки redux.

Я часами искал способы справиться с этой проблемой, и большинство проблем уже в компоновке, а я вообще не меняю код.

import { createStore, applyMiddleware,compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};

const middleware = [thunk];

const store = createStore(rootReducer,initialState,
    compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__()
        )   
    );


export default store;
Я действительно не понимаю, почему это произошло. Я ничего не меняю, и последнее, что я делаю, это просто добавляю git push origin master в свой репозиторий, и внезапно, когда я скомпилировал, я получил эту ошибку:

Я использую это в моем интерфейсе:

  "@material-ui/core": "^3.3.1",
    "@material-ui/icons": "^3.0.1",
    "axios": "^0.18.0",
    "jwt-decode": "^2.2.0",
    "prop-types": "^15.6.2",
    "react": "^16.6.0",
    "react-dom": "^16.6.0",
    "react-redux": "^5.1.0",
    "react-router-dom": "^4.3.1",
    "react-scripts": "2.0.5",
    "react-select": "^2.1.1",
    "recharts": "^1.3.5",
    "redux": "^4.0.1",
    "redux-thunk": "^2.3.0",
    "typeface-roboto": "0.0.54"
Бэкэнд:

 "dependencies": {
    "bcryptjs": "^2.4.3",
    "body-parser": "^1.18.3",
    "express": "^4.16.4",
    "mongoose": "^5.3.11",
    "multer": "^1.4.1",
    "passport": "^0.4.0",
    "passport-jwt": "^4.0.0",
    "path": "^0.12.7",
    "validator": "^10.9.0",
    "xlsx": "^0.14.1"
  },
  "devDependencies": {
    "concurrently": "^4.0.1",
    "nodemon": "^1.18.6",
  },
Ошибка результата:

Redux TypeError: невозможно прочитать свойство &apos;apply&apos; из undefined

Redux:

Redux TypeError: невозможно прочитать свойство &apos;apply&apos; из undefined

 28.11.2018 09:04
43
0
44 950
17
Данный вопрос помечен как решенный
 Ответы 17
Последний стек показывает вызов compose в client/src/store.js:9, где вторым аргументом является window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__().

Однако, если у вас отключены инструменты разработчика, __REDUX_DEVTOOLS_EXTENSION__ не определен и становится вторым аргументом для создания функции. Он по-прежнему предоставляется явно, что отличается от того, что он неявно не определен по пропуску, поэтому реализация compose считает, что есть два действительных аргумента, и ожидает, что они будут функциями, а не неопределенными.

Вы должны вернуть фиктивную функцию в случае, если нет доступных инструментов разработчика, что-то вроде «возможно», хотя я не совсем уверен, какой должна быть точная подпись, чтобы удовлетворить функцию createStore.

window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (a) -> a

 28.11.2018 11:08
 Ответ принят как подходящий
Обновите инструменты redux dev с 2.16.0 до 2.16.1

ИЛИ

Удалите эту строку из своего кода

window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__()
 28.11.2018 12:07
У меня была такая же проблема, когда я хотел протестировать свое веб-приложение в окне инкогнито (расширения не отображаются в окнах в режиме инкогнито).

Проблема в том, что compose от redux ожидает, что все его аргументы будут функциями. Так когда

window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 
оценивается в этой среде, он возвращает логическое значение.

Как упоминал @knutwalker. Вам нужно будет вернуть функцию, которая ничего не возвращает. Это исправило это для меня,

      window.__REDUX_DEVTOOLS_EXTENSION__
        ? window.__REDUX_DEVTOOLS_EXTENSION__()
        : f => f
 27.04.2019 17:16
Что касается меня, я добавил расширение redux-devtools в Chrome, и ошибка исчезла, как только я добавил в браузер redux-devtools, и вам также не нужно использовать тернарный оператор.

https://github.com/reduxjs/redux/issues/2359#issuecomment-362340634

 12.05.2019 08:48
В моем случае лучший способ решить эту проблему - просто.

Вы знаете, что кипарис открывает хром в режиме разработчика, в котором нет ваших расширений, включая redux devtools.

Итак, когда окно на Chrome открывается с ошибкой, нажмите меню> дополнительные инструменты> Расширения и перейдите в интернет-магазин Chrome из, чтобы установить redux devtools.

 04.06.2019 16:01
Причина этой ошибки в самом вопросе. Просто включить расширение React и Redux DevTools. Это сработало для меня из-за той же ошибки.

 11.09.2019 17:13
Убедитесь, что у вас есть скачано расширение redux-devtools для Chrome, и измените доступ к сайту на На всех сайтах или по конкретным, перейдя в Управление расширением> Redux DevTools (подробности)> Доступ к сайту

 04.12.2019 11:06
Это случилось со мной с версией 2.17.0 Redux DevTools.

Что-то испортилось в расширении.

Я просто удалил расширение из Chome, переустановил его, и оно отлично заработало.

 11.02.2020 08:01
Эта ошибка возникает из-за:

const store=createStore(rootreducer,
    initialstate,
    compose(applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
)
При развертывании проекта вы этого не сделали:

window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 
Во время выполнения команды npm run build убедитесь, что вы удалили это. Правильный способ:

const store=createStore(rootreducer,
    initialstate,
    compose(applyMiddleware(...middleware))
)
 04.09.2020 19:55
Я столкнулся с аналогичной проблемой, и удаление этих строк помогло,

 window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
но это не постоянное решение, так как для повторного использования инструментов redux dev вам понадобятся эти строки. Вместо этого используйте

process.env.NODE_ENV== = "development" ?
       window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() : compose,
он использует переменные env, чтобы проверить погоду, использовать ли промежуточное ПО инструментов Reduxdev или нет. так как я не видел этого решения в этой теме, я опубликовал его, надеюсь, что оно будет кому-то полезно ..

 16.10.2020 16:55
Я изменился

window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
к этому:

typeof window.__REDUX_DEVTOOLS_EXTENSION__ === "undefined"
? a => a
: window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
и проблема была решена

 25.10.2020 15:43
Это сработало для меня:

Эта ошибка возникает из-за:

const store=createStore(rootreducer,
    initialstate,
    compose(applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
)
При развертывании проекта удалите последнюю строку следующим образом:

window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
При выполнении команды npm run build убедитесь, что вы удалили это. Правильный способ:

const store=createStore(rootreducer,
    initialstate,
    compose(applyMiddleware(...middleware))
)
 11.01.2021 13:47
Была такая же ошибка в окне Chrome в режиме инкогнито. Поменял на нормальный Chrome, и все заработало.

 28.02.2021 08:52
Это полный отвечать @Koop, который мне подходит:

Для всех, кто столкнулся с ошибкой TypeError: невозможно прочитать свойство «apply» of undefined »в node_modules / redux / es / redux.js: error: Немедленное исправление: установите расширение Chrome Redux Devtools. Постоянное исправление для всех браузеров:

В каталоге клиента: npm install --save-dev redux-devtools-extension
Измените client / src / store / index.js на:
import { applyMiddleware, createStore, } from ‘redux’;
import createSagaMiddleware from ‘redux-saga’;

import rootReducer from ‘./reducers/index’;
import rootSaga from ‘./sagas/index’;
import { composeWithDevTools } from ‘redux-devtools-extension’;

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga);
export default store;
 03.03.2021 23:29
В моем случае эта ошибка вызывала пустой / белый экран в производственной сборке в мобильном браузере, но не в браузере настольного компьютера. Принятый ответ не сработал для меня, мне пришлось удалить строку, добавить расширение devtools и выполнить рефакторинг для использования импорта composeWithDevTools. То есть ответ от @Roman был для меня полностью рабочим решением (спасибо, сэр). Но это может помочь другим пояснить, что проблема может возникать независимо от саги о сокращении. Мое приложение просто использовало базовый redux-thunk. Я установил redux-devtools-extension в качестве зависимости разработчика, а затем заменил это:

import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};

const middleware = [thunk];

if (nodeEnv !== 'production') {
  const store = createStore(rootReducer, initialState, compose(applyMiddleware(...middleware)));
} else {
  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(...middleware),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    ),
  );
}

export default store;
с этим:

import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
И это исправило это.

 17.03.2021 14:03
изменение этой строки

window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

к

window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f

решит проблему, и это сработало для меня.

 09.07.2021 08:59
Перед ошибкой:

import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};

const middleWare = [thunk];

const store = createStore(rootReducer, initialState, compose(
    applyMiddleware(...middleWare),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

export default store;
После удаления ошибки:

В Store.js мы должны удалить

window.REDUX_DEVTOOLS_EXTENSION && window.REDUX_DEVTOOLS_EXTENSION()

import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};

const middleWare = [thunk];

const store = createStore(rootReducer, initialState, compose(
    applyMiddleware(...middleWare)
));

export default store;
 04.11.2021 09:43
Другие вопросы по теме
Получить данные в ReactJS
Тест на реакцию, подсчет количества обновлений после действия отправки
TypeScript и React: как перегрузить компонент / декоратор более высокого порядка?
Получите данные JSON в нескольких компонентах с помощью reactjs и redux
React Native - в чем разница между этими двумя приложениями, в которых одно использует AppRegistry.registerComponent, а другое - нет?
Как преобразовать QR-код в img и сохранить его в хранилище firebase
Как вызвать набор данных для возврата в ответ на рендеринг?
React-konva получить атрибуты <Group /> в объявлении субкомпонента
Реагировать на хуки: в чем разница между useMutationEffect и useLayoutEffect?
Невозможно загрузить данные в компонент ag-grid
Похожие вопросы
Как убедиться, что приложение Electron Express доступно только изнутри электронного окна
Как добавить CSS при нажатии кнопки
Получить данные в ReactJS
Как изменить положение некоторого элемента асинхронно использовать jquery
Angular 7 - проверка регулярного выражения веб-URL дает разные результаты при каждом вызове
Как нарисовать вертикальную ось в диаграммах Google
Обслуживание веб-приложения с файлами Gzip js и css под nginx
Как восстановить файл из base64 в pdf в javascript?
Как я могу вызвать функцию javascript, имея вызов ajax из Java с помощью ScriptEngine?
Как изменить строку на основе массива флажков?
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
Ошибка React Hooks: хуки можно вызывать только внутри тела функционального компонента
Вопросы
JAVASCRIPT
Ошибка React Hooks: хуки можно вызывать только внутри тела функционального компонента
Я получаю эту ошибку при использовании ловушки useState. У меня есть это в базовой форме, я смотрю на реагировать на документы для справки, но все еще получаю эту ошибку. Я готов к моменту ладони лица ...

export function Header() {
  const [count, setCount] = useState(0)
  return <span>header</span>
}
 28.10.2018 04:20
82
4
101 135
19
Данный вопрос помечен как решенный
 Ответы 19
 Ответ принят как подходящий
Обновлено: 2018-декабрь
Вышла новая версия react-hot-loader, ссылка. Хуки теперь работают из коробки. Спасибо автору Кашей.

Посмотрите этот шаблон https://github.com/ReeganExE/react-hooks-boilerplate

Реагировать на хуки
React Hot Loader
Webpack, Babel, ESLint Airbnb
Предыдущий ответ:
Сначала убедитесь, что вы установили react@next и react-dom@next.

Затем проверьте, используете ли вы react-hot-loader или нет.

В моем случае отключите горячий загрузчик, и HMR может заставить его работать.

См. https://github.com/gaearon/react-hot-loader/issues/1088.

Цитата:

Yes. RHL is 100% not compatible with hooks. There is just a few reasons behind it:

SFC are being converted to Class components. There is reason - to be able to forceUpdate on HMR, as long there is no "update" method on SFC. I am looking for other way of forcing the update (like this. So RHL is killing SFC.

"hotReplacementRender". RHL is trying to do React's job, and render the old and the new app, to merge them. So, obviously, that's broken now.

I am going to draft a PR, to mitigate both problems. It will work, but not today.

Есть более подходящее исправление, которое подействует - холодный API

Вы можете отключить RHL для любого настраиваемого типа.

import { cold } from 'react-hot-loader';

cold(MyComponent);
Найдите "useState/useEffect" внутри исходного кода компонента и "охладите" его.

Обновлено:
Согласно обновлено от сопровождающего react-hot-loader, вы можете попробовать react-hot-loader@next и установить конфигурацию, как показано ниже:

import { setConfig } from 'react-hot-loader';

setConfig({
  // set this flag to support SFC if patch is not landed
  pureSFC: true
});
Спасибо @loganfromlogan за обновление.

 28.10.2018 09:11
Проблема для меня действительно была реактивно-горячий загрузчик.

Вы можете отключить react-hot-loader для одного компонента вместо всего приложения, используя метод cold, например:

import { cold } from 'react-hot-loader'

export const YourComponent = cold(() => {

  // ... hook code

  return (
    // ...
  )
})
ИЛИ

export default cold(YourComponent)
 30.10.2018 07:04
Я смог решить эту проблему, импортировав примитивные хуки React в файл компонента, а затем передав их в мои собственные хуки. По какой-то причине ошибка возникает только тогда, когда я импортирую ловушку React (например, useState) в свой файл настраиваемой ловушки.

Я импортирую useState в свой файл компонента:

import React, {useState} from 'react'; // import useState

import {useCustomHook} from '../hooks/custom-hook'; // import custom hook

const initialState = {items: []};
export default function MyComponent(props) {
    const [state, actions] = useCustomHook(initialState, {useState});
    ...
}
Затем в моем файле с крючками:

// do not import useState here

export function useCustomHook(initialValue, {useState}) {
    const [state, setState] = useState(initialValue || {items: []});

    const actions = {
        add: (item) => setState(currentState => {
            const newItems = currentState.items.concat([item]);
            return {
                ...currentState,
                items: newItems,
            };
        }),
    };

    return [state, actions];
}
Этот метод улучшил тестируемость моих хуков, потому что мне не нужно имитировать библиотеку React для предоставления примитивных хуков. Вместо этого мы можем передать фиктивный хук useState прямо в функцию пользовательского хука. Я думаю, что это улучшает качество кода, поскольку ваши пользовательские хуки теперь не связаны с библиотекой React, что обеспечивает более естественное функциональное программирование и тестирование.

 04.11.2018 10:31
Моя проблема заключалась в том, что я забыл обновить модуль react-dom. См. Проблему.

 05.11.2018 09:30
У меня возникла эта ошибка при использовании Замена горячего модуля посылки, и она исправлена ​​обновлением react-dom до альфа-версии:

yarn add react-dom@16.7.0-alpha.0
См. Эту проблему.

 13.11.2018 17:51
нашел этот обходной путь для react-hot-loader, в то время как PR для его исправления является входящим.

Оберните функцию, вызывающую хуки, в React.memo, чтобы предотвратить горячую перезагрузку, если она не изменилась.

const MyFunc = React.memo(({props}) => {...

Кредит для решения: https://github.com/gatsbyjs/gatsby/issues/9489

 15.11.2018 01:36
У меня была проблема в монорепозитории, где пакет docz использовал react@16.6.3, а окончательный выходной пакет имел две версии реакции.

Проблема на Github

Исправлено удалением пакета ?

 20.11.2018 12:51
обновить версию package.json в качестве реакции

 28.11.2018 04:07
Если вы используете приложение Create React, вам необходимо обновить версию "react-scripts" также с помощью версии react и response-dom.

 "react-scripts": "2.1.5",
 "react": "^16.8.1",
 "react-dom": "^16.8.1",
эта комбинация отлично работает.

 12.02.2019 08:55
Моя проблема заключалась в следующем:

Я делал: ReactDOM.render(Example(), app);

В то время как я должен был делать: ReactDOM.render(<Example />, app);

 26.02.2019 09:20
Была такая же проблема. Моя проблема была связана с React Router. Я случайно использовал

<Route render = {ComponentUsingHooks} />
вместо того

<Route component = {ComponentUsingHooks} />
 28.02.2019 11:01
Тем, кто сталкивается с этой проблемой при использовании MobX и упаковке компонента в observer, убедитесь, что вы используете mobx-react-lite вместо mobx-react.

ОБНОВЛЕНИЕ 29 МАЯ

Начиная с mobx-react6.0.0, компоненты на основе хуков теперь поддерживаются mobx-react, таким образом, больше нет необходимости в использовании mobx-react-lite (если это была ваша проблема).

 28.03.2019 15:26
Чтобы уточнить ответ @rista404, включая повторяющиеся версииreact (и, возможно, react-dom), вы получите ту же ошибку в зависимости от того, где вы используете свои хуки. Вот два примера ...

Внешняя зависимость включает другую версию react в свой dependencies, вероятно, по ошибке, поскольку react обычно должен быть одноранговой зависимостью. Если npm не выполняет автоматическое копирование этой версии в вашу локальную версию, вы можете увидеть эту ошибку. Это то, о чем имел в виду @ rista404.
Вы npm link пакет, который включает react в его devDependencies или dependencies. Теперь для модулей в этом пакете вы можете увидеть ошибки, если они извлекут другую версию react из своего локального каталога node_modules, а не из родительского проекта.
Последнее может быть исправлено при объединении с webpack с помощью resolve.alias вот так ...

    resolve: {
        alias: {
            'react': path.resolve(__dirname, 'node_modules/react'),
            'react-dom': path.resolve(__dirname, 'node_modules/react-dom')
        }
    }
Это гарантирует, что react всегда извлекается из каталога node_modules родительского проекта.

 17.06.2019 16:18
Для меня это произошло, потому что у меня была новая версия react (16.8.6) и старая версия react-dom (16.6.1).

https://reactjs.org/warnings/invalid-hook-call-warning.html#mismatching-versions-of-react-and-react-dom

Обновление обоих до @latest (16.8.6) устранило ошибку.

 12.07.2019 19:09
Для других пользователей рабочих пространств yarn, вот моя ситуация и то, как я ее понял.

пакеты
фу
react@16.8.6
бар
react@16.10.1
Документы Facebook на Предупреждение о недопустимом вызове трубки ничего не говорят о рабочих пространствах пряжи, поэтому я предположил, что моя конфигурация верна. Но это было не так. Вы можете исправить ошибку, только используя одну и ту же версию в все ваши пакеты.

В приведенном выше примере вы должны поднять версию response с «foo» до 16.10.1, чтобы она соответствовала версии response из «bar».

Бонус: см. это обсуждение на GitHub за красивую коллекцию эмоционального багажа, выгруженную в Интернет.

 28.09.2019 23:13
Другое решение, если вы столкнулись с этим при использовании ссылки npm:

Вы можете реагировать на npm link в своей библиотеке, как описано здесь: https://reactjs.org/warnings/invalid-hook-call-warning.html#duplicate-react

или установите реакцию в своей библиотеке как peerDependency, а затем используйте npm link --only=production

 05.12.2019 11:46
Что ж, в моем случае я вызывал useSelector внутри useEffect !!

 29.10.2020 12:26
ОТВЕТ ИЮНЯ 2021 ГОДА
У меня возникла эта проблема с приложением реагировать-электрон-шаблон.

Многие плагины и библиотеки, такие как Material-UI, не могли быть использованы в моем проекте из-за этой досадной ошибки, и после долгих поисков я смог решить проблему:

Я только что обновил react и react-dom до последних версий.

Эта команда выполнила свою работу!

yarn add react@latest react-dom@latest
 13.06.2021 16:39
Убедитесь, что версии react и react-dom - строго равный. Обратите внимание на символ циркумфлекса ^ на версиях.

"17.0.0" не может быть таким же, как "^17.0.0"

npm - диапазоны Carret: https://github.com/npm/node-semver#caret-ranges-123-025-004 Реагировать - Список изменений: https://github.com/facebook/react/blob/main/CHANGELOG.md

Это одна из причин, по которой лучше устанавливать пакеты с -E или --save-точным.

npm install --save --save-exact <package@vesion>
 26.10.2021 17:33
Другие вопросы по теме
Почему современные JavaScript-фреймворки препятствуют прямому взаимодействию с DOM
Как использовать this.setState для обновления состояния приложения реакции
Отображать сообщения получателя в this.state.message
Зачем нам вызывать super (props) и как это работает в React?
Реагировать на передачу данных на родительскую ошибку this.props. это не функция
Как выполнять обработку событий в React, JavaScript
Доступ к состоянию редукции в новых вкладках / окнах
Create-response-app> error css-loader@1.0.0: "узел" движка несовместим с этим модулем. Ожидаемая версия "> = 6.9.0 <7.0.0 ||> = 8.9.0"
ReactJS - изменить значение атрибута при нажатии
GeoFireStore, где запрос
Похожие вопросы
Как мне прервать компоновку или конвейерную передачу и вернуть все текущие данные?
Остановить свайпер при наведении указателя мыши и начать воспроизведение при наведении указателя мыши
Почему современные JavaScript-фреймворки препятствуют прямому взаимодействию с DOM
Как создать 2 div с одинаковой высотой без начальной загрузки или jquery
Адаптивное меню только с CSS не отображается
Nearley Moo - грамматика не работает с используемым лексером Moo
Как использовать this.setState для обновления состояния приложения реакции
JQuery onclick функция копирования и вставки
Рассчитайте разницу между несколькими входами и напишите на странице
Отфильтровать массив по вложенному значению, которое соответствует определенному условию во Vue
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
Бесконечный цикл в использовании
Вопросы
REACTJS
Бесконечный цикл в использовании
Я поигрался с новой системой ловушек в React 16.7-alpha и застрял в бесконечном цикле в useEffect, когда состояние, которое я обрабатываю, является объектом или массивом.

Сначала я использую useState и запускаю его с пустым объектом, например:

const [obj, setObj] = useState({});
Затем в useEffect я использую setObj, чтобы снова установить для него пустой объект. В качестве второго аргумента я передаю [obj], надеясь, что он не обновится, если содержание объекта не изменилось. Но он продолжает обновляться. Я думаю, потому что независимо от содержимого, это всегда разные объекты, заставляющие React думать, что он постоянно меняется?

useEffect(() => {
  setIngredients({});
}, [ingredients]);
То же самое и с массивами, но как примитив он не застревает в цикле, как ожидалось.

Используя эти новые хуки, как мне обрабатывать объекты и массив при проверке того, изменилось ли содержимое или нет?

 30.10.2018 19:45
158
3
122 993
15
Данный вопрос помечен как решенный
 Ответы 15
 Ответ принят как подходящий
Передача пустого массива в качестве второго аргумента для useEffect заставляет его работать только при монтировании и размонтировании, тем самым останавливая любые бесконечные циклы.

useEffect(() => {
  setIngredients({});
}, []);
Это было разъяснено мне в сообщении блога о перехватчиках React на https://www.robinwieruch.de/react-hooks/

 31.10.2018 00:53
Была такая же проблема. Я не знаю, почему они не упоминают об этом в документации. Просто хочу добавить немного к ответу Тобиаса Хогена.

Для запуска в каждый компонент / родительский рендер вам необходимо использовать:

  useEffect(() => {

    // don't know where it can be used :/
  })
Чтобы запустить что-либо только раз после монтирования компонента (будет отрисовано один раз), вам необходимо использовать:

  useEffect(() => {

    // do anything only one time if you pass empty array []
    // keep in mind, that component will be rendered one time (with default values) before we get here
  }, [] )
Чтобы выполнить любое изменение один раз при монтировании компонента и на data / data2:

  const [data, setData] = useState(false)
  const [data2, setData2] = useState('default value for first render')
  useEffect(() => {

// if you pass some variable, than component will rerender after component mount one time and second time if this(in my case data or data2) is changed
// if your data is object and you want to trigger this when property of object changed, clone object like this let clone = JSON.parse(JSON.stringify(data)), change it clone.prop = 2 and setData(clone).
// if you do like this 'data.prop=2' without cloning useEffect will not be triggered, because link to data object in momory doesn't changed, even if object changed (as i understand this)
  }, [data, data2] )
Как я использую его чаще всего:

export default function Book({id}) { 
  const [book, bookSet] = useState(false) 

  const loadBookFromServer = useCallback(async () => {
    let response = await fetch('api/book/' + id)
    response  = await response.json() 
    bookSet(response)
  }, [id]) // every time id changed, new book will be loaded

  useEffect(() => {
    loadBookFromServer()
  }, [loadBookFromServer]) // useEffect will run once and when id changes


  if (!book) return false //first render, when useEffect did't triggered yet we will return false

  return <div>{JSON.stringify(book)}</div>  
}
 31.10.2018 21:08
Я тоже однажды столкнулся с той же проблемой и исправил ее, убедившись, что я передаю примитивные значения во втором аргументе [].

Если вы передадите объект, React сохранит только ссылку на объект и запустит эффект при изменении ссылки, что обычно происходит каждый раз (хотя я сейчас не знаю, как это сделать).

Решение состоит в том, чтобы передать значения в объект. Ты можешь попробовать,

const obj = { keyA: 'a', keyB: 'b' }

useEffect(() => {
  // do something
}, [Object.values(obj)]);
или

const obj = { keyA: 'a', keyB: 'b' }

useEffect(() => {
  // do something
}, [obj.keyA, obj.keyB]);
 09.02.2019 05:32
Как сказано в документации (https://reactjs.org/docs/hooks-effect.html), ловушка useEffect предназначена для использования когда вы хотите, чтобы какой-то код выполнялся после каждого рендеринга. Из документов:

Does useEffect run after every render? Yes!

Если вы хотите настроить это, вы можете следовать инструкциям, которые появятся позже на той же странице (https://reactjs.org/docs/hooks-effect.html#tip-optimizing-performance-by-skipping-effects). По сути, метод useEffect принимает второй аргумент, который React исследует, чтобы определить, нужно ли запускать эффект снова или нет.

useEffect(() => {
  document.title = `You clicked ${count} times`;
}, [count]); // Only re-run the effect if count changes
В качестве второго аргумента можно передать любой объект. Если этот объект не изменится, ваш эффект сработает только после первого маунта.. Если объект изменится, эффект сработает снова.

 11.02.2019 19:02
Я не уверен, что это сработает для вас, но вы можете попробовать добавить .length следующим образом:

useEffect(() => {
        // fetch from server and set as obj
}, [obj.length]);
В моем случае (я получал массив!) Он получал данные при монтировании, затем снова только при изменении, и это не входило в цикл.

 27.04.2019 18:09
Ваш бесконечный цикл связан с округлостью

useEffect(() => {
  setIngredients({});
}, [ingredients]);
setIngredients({}); изменит значение ingredients (каждый раз будет возвращать новую ссылку), что запустит setIngredients({}). Чтобы решить эту проблему, вы можете использовать любой подход:

Передайте другой второй аргумент для useEffect
const timeToChangeIngrediants = .....
useEffect(() => {
  setIngredients({});
}, [timeToChangeIngrediants ]);
setIngrediants будет работать после изменения timeToChangeIngrediants.

Я не уверен, какой вариант использования оправдывает изменение ингредиентов после его изменения. Но если это так, вы передаете Object.values(ingrediants) в качестве второго аргумента useEffect.
useEffect(() => {
  setIngredients({});
}, Object.values(ingrediants));
 29.06.2019 16:08
If you use this optimization, make sure the array includes all values from the component scope (such as props and state) that change over time and that are used by the effect.

Я считаю, что они пытаются выразить возможность того, что можно использовать устаревшие данные, и знать об этом. Не имеет значения тип значений, которые мы отправляем в array для второго аргумента, если мы знаем, что если какое-либо из этих значений изменится, он выполнит эффект. Если мы используем ingredients как часть вычислений внутри эффекта, мы должны включить его в array.

const [ingredients, setIngredients] = useState({});

// This will be an infinite loop, because by shallow comparison ingredients !== {} 
useEffect(() => {
  setIngredients({});
}, [ingredients]);

// If we need to update ingredients then we need to manually confirm 
// that it is actually different by deep comparison.

useEffect(() => {
  if (is(<similar_object>, ingredients) {
    return;
  }
  setIngredients(<similar_object>);
}, [ingredients]);

 22.08.2019 17:53
Лучший способ - сравнить предыдущее значение с текущим значением, используя usePrevious () и _.равно() из Лодаш. Импортируйте равно и useRef. Сравните ваше предыдущее значение с текущим значением внутри useEffect (). Если они такие же, больше ничего не обновляйте. usePrevious (значение) - это настраиваемая ловушка, которая создает ссылка с useRef ().

Ниже приведен фрагмент моего кода. Я столкнулся с проблемой бесконечного цикла с обновлением данных с помощью крючка firebase

import React, { useState, useEffect, useRef } from 'react'
import 'firebase/database'
import { Redirect } from 'react-router-dom'
import { isEqual } from 'lodash'
import {
  useUserStatistics
} from '../../hooks/firebase-hooks'

export function TMDPage({ match, history, location }) {
  const usePrevious = value => {
    const ref = useRef()
    useEffect(() => {
      ref.current = value
    })
    return ref.current
  }
  const userId = match.params ? match.params.id : ''
  const teamId = location.state ? location.state.teamId : ''
  const [userStatistics] = useUserStatistics(userId, teamId)
  const previousUserStatistics = usePrevious(userStatistics)

  useEffect(() => {
      if (
        !isEqual(userStatistics, previousUserStatistics)
      ) {
        
        doSomething()
      }
     
  })
 06.09.2019 15:58
Если вы создаете собственный хук, иногда вы можете вызвать бесконечный цикл по умолчанию следующим образом

function useMyBadHook(values = {}) {
    useEffect(()=> { 
           /* This runs every render, if values is undefined */
        },
        [values] 
    )
}
Исправление состоит в том, чтобы использовать один и тот же объект вместо создания нового при каждом вызове функции:

const defaultValues = {};
function useMyBadHook(values = defaultValues) {
    useEffect(()=> { 
           /* This runs on first call and when values change */
        },
        [values] 
    )
}
Если вы столкнулись с этим в коде вашего компонента цикл может быть исправлен, если вы используете defaultProps вместо значений по умолчанию ES6

function MyComponent({values}) {
  useEffect(()=> { 
       /* do stuff*/
    },[values] 
  )
  return null; /* stuff */
}

MyComponent.defaultProps = {
  values = {}
}
 29.10.2019 07:41
Если вы включите пустой массив в конец useEffect:

useEffect(()=>{
        setText(text);
},[])
Он бы запустился один раз.

Если вы также включите параметр в массив:

useEffect(()=>{
            setText(text);
},[text])
Он будет запускаться при изменении текстового параметра.

 02.03.2020 10:08
Если вам НЕОБХОДИМО сравнивать объект и когда он обновляется, вот ловушка deepCompare для сравнения. Принятый ответ, конечно же, не касается этого. Наличие массива [] подходит, если вам нужно, чтобы эффект запускался только один раз при монтировании.

Кроме того, другие проголосовавшие ответы касаются только проверки примитивных типов, выполняя obj.value или что-то подобное, чтобы сначала перейти на уровень, на котором он не вложен. Это может быть не лучшим случаем для глубоко вложенных объектов.

Итак, вот тот, который будет работать во всех случаях.

import { DependencyList } from "react";

const useDeepCompare = (
    value: DependencyList | undefined
): DependencyList | undefined => {
    const ref = useRef<DependencyList | undefined>();
    if (!isEqual(ref.current, value)) {
        ref.current = value;
    }
    return ref.current;
};
Вы можете использовать то же самое в хуке useEffect

React.useEffect(() => {
        setState(state);
    }, useDeepCompare([state]));
 19.04.2020 15:21
Вы также можете деструктурировать объект в массиве зависимостей, то есть состояние будет обновляться только при обновлении определенных частей объекта.

Для этого примера предположим, что ингредиенты содержат морковь, мы могли бы передать это в зависимость, и только если морковь изменилась, состояние обновилось.

Затем вы можете пойти дальше и обновлять количество морковок только в определенных точках, тем самым контролируя, когда будет обновляться состояние, и избегая бесконечного цикла.

useEffect(() => {
  setIngredients({});
}, [ingredients.carrots]);
Примером использования чего-то подобного является вход пользователя на веб-сайт. Когда они входят в систему, мы можем деструктурировать объект пользователя, чтобы извлечь их cookie и роль разрешений, и соответствующим образом обновить состояние приложения.

 24.07.2020 12:17
мой случай был особенным при столкновении с бесконечным циклом, сенарио было таким:

У меня был объект, скажем, objX, который исходит из реквизита, и я деструктурировал его в реквизитах, например:

const { something: { somePropery } } = ObjX
и я использовал somePropery как зависимость от моего useEffect, например:


useEffect(() => {
  // ...
}, [somePropery])

и это вызвало у меня бесконечный цикл, я попытался справиться с этим, передав весь something в качестве зависимости, и он работал правильно.

 27.09.2020 12:01
Основная проблема в том, что useEffect сравнивает входящее значение с текущим значением неглубоко. Это означает, что эти два значения сравниваются с использованием сравнения '===', которое проверяет только ссылки на объекты, и хотя значения массива и объекта совпадают, оно рассматривает их как два разных объекта. Я рекомендую вам ознакомиться с моим статья о useEffect как методах жизненного цикла.

 23.03.2021 11:19
Другое рабочее решение, которое я использовал для состояния массивов:

useEffect(() => {
  setIngredients(ingredients.length ? ingredients : null);
}, [ingredients]);
 12.05.2021 01:13
Другие вопросы по теме
Проблема с увеличением типов реакции в машинописном тексте
React Hooks - создание запроса Ajax
Ошибка импорта пользовательских хуков в React 16.7.0-alpha
Перехватчики React: Что / Почему `useEffect`?
Функционирует ли пакетное обновление состояния React при использовании хуков?
Можем ли мы использовать деструктуризацию объекта для useState () в хуках reactjs?
Ошибка React Hooks: хуки можно вызывать только внутри тела функционального компонента
Состояние не обновляется при использовании обработчика состояния React в setInterval
Как React.useState вызывает повторный рендеринг?
Диспетчер TypeError.useState не является функцией при использовании React Hooks
Похожие вопросы
Реагировать, передавая перетаскивание событий вверх; this.props.onDragStart не функция
Есть ли простой способ реструктурировать путь к папке проекта React?
Повторно использовать компонент React с разными вызовами методов
Нужны пояснения по базовой настройке
React возвращает несколько переменных из json
ReactJS + NodeJS: как разделить маршруты для приложения и для API?
Sidenav в стиле Stripe с помощью React
Неизменное нарушение: конфигурация просмотра не найдена для параметра имени (React Native)
Redux, лучший способ доступа и использования состояния внутри промежуточного программного обеспечения
Изменение значков на панели расширения
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
Реагировать на хуки useState () с объектом
Вопросы
JAVASCRIPT
Реагировать на хуки useState () с объектом
Как правильно обновить состояние вложенного объекта в React with Hooks?

export Example = () => {
  const [exampleState, setExampleState] = useState(
  {masterField: {
        fieldOne: "a",
        fieldTwo: {
           fieldTwoOne: "b"
           fieldTwoTwo: "c"
           }
        }
   })
Как можно использовать setExampleState для обновления exampleState до a (добавление поля)?

const a = {
masterField: {
        fieldOne: "a",
        fieldTwo: {
           fieldTwoOne: "b",
           fieldTwoTwo: "c"
           }
        },
  masterField2: {
        fieldOne: "c",
        fieldTwo: {
           fieldTwoOne: "d",
           fieldTwoTwo: "e"
           }
        },
   }
}

b (изменение значений)?

const b = {masterField: {
        fieldOne: "e",
        fieldTwo: {
           fieldTwoOne: "f"
           fieldTwoTwo: "g"
           }
        }
   })
 11.01.2019 17:47
202
3
330 353
15
Данный вопрос помечен как решенный
 Ответы 15
 Ответ принят как подходящий
Вы можете передать новое значение следующим образом:

  setExampleState({...exampleState,  masterField2: {
        fieldOne: "a",
        fieldTwo: {
           fieldTwoOne: "b",
           fieldTwoTwo: "c"
           }
        },
   })
 11.01.2019 17:53
Как правило, вы должны следить за глубоко вложенными объектами в состоянии React. Чтобы избежать неожиданного поведения, состояние должно обновляться постоянно. Когда у вас есть глубокие объекты, вы заканчиваете их глубоким клонированием для неизменности, что может быть довольно дорогостоящим в React. Почему?

После того, как вы глубоко клонируете состояние, React пересчитает и повторно отрендерит все, что зависит от переменных, даже если они не изменились!

Итак, прежде чем пытаться решить вашу проблему, подумайте, как вы можете сначала сгладить состояние. Как только вы это сделаете, вы найдете удобные инструменты, которые помогут работать с большими состояниями, такие как useReducer ().

Если вы подумали об этом, но все еще уверены, что вам нужно использовать глубоко вложенное дерево состояний, вы все равно можете использовать useState () с такими библиотеками, как immutable.js и Неизменяемость-помощник. Они упрощают обновление или клонирование глубоких объектов, не беспокоясь об изменчивости.

 18.07.2019 23:18
Я оставляю вам служебную функцию для неизменного обновления объектов

/**
 * Inmutable update object
 * @param  {Object} oldObject     Object to update
 * @param  {Object} updatedValues Object with new values
 * @return {Object}               New Object with updated values
 */
export const updateObject = (oldObject, updatedValues) => {
  return {
    ...oldObject,
    ...updatedValues
  };
};
Так что вы можете использовать это так

const MyComponent = props => {

  const [orderForm, setOrderForm] = useState({
    specialities: {
      elementType: "select",
      elementConfig: {
        options: [],
        label: "Specialities"
      },
      touched: false
    }
  });


// I want to update the options list, to fill a select element

  // ---------- Update with fetched elements ---------- //

  const updateSpecialitiesData = data => {
    // Inmutably update elementConfig object. i.e label field is not modified
    const updatedOptions = updateObject(
      orderForm[formElementKey]["elementConfig"],
      {
        options: data
      }
    );
    // Inmutably update the relevant element.
    const updatedFormElement = updateObject(orderForm[formElementKey], {
      touched: true,
      elementConfig: updatedOptions
    });
    // Inmutably update the relevant element in the state.
    const orderFormUpdated = updateObject(orderForm, {
      [formElementKey]: updatedFormElement
    });
    setOrderForm(orderFormUpdated);
  };

  useEffect(() => {
      // some code to fetch data
      updateSpecialitiesData.current("specialities",fetchedData);
  }, [updateSpecialitiesData]);

// More component code
}
Если нет, у вас здесь есть другие утилиты: https://es.reactjs.org/docs/update.html

 29.01.2020 18:19
Я опаздываю на вечеринку .. :)

@aseferov ответ работает очень хорошо, когда намерение состоит в том, чтобы повторно ввести всю структуру объекта. Однако, если цель / цель - обновить конкретное значение поля в объекте, я считаю, что приведенный ниже подход лучше.

ситуация:

const [infoData, setInfoData] = useState({
    major: {
      name: "John Doe",
      age: "24",
      sex: "M",
    },

    minor:{
      id: 4,
      collegeRegion: "south",

    }

  });
Обновление конкретной записи потребует возврата к предыдущему состоянию prevState.

Здесь:

setInfoData((prevState) => ({
      ...prevState,
      major: {
        ...prevState.major,
        name: "Tan Long",
      }
    }));
возможно

setInfoData((prevState) => ({
      ...prevState,
      major: {
        ...prevState.major,
        name: "Tan Long",
      },
      minor: {
        ...prevState.minor,
        collegeRegion: "northEast"

    }));
Надеюсь, это поможет любому, кто пытается решить подобную проблему.

 13.04.2020 18:48
Если кто ищет обновления хуков useState () для объект

- Through Input

        const [state, setState] = useState({ fName: "", lName: "" });
        const handleChangeEvent = e => {
            const { name, value } = e.target;
            setState(prevState => ({
                ...prevState,
                [name]: value
            }));
        };

        <input
            value = {state.fName}
            type = "text"
            onChange = {handleChangeEvent}
            name = "fName"
        />
        <input
            value = {state.lName}
            type = "text"
            onChange = {handleChangeEvent}
            name = "lName"
        />
   ***************************

 - Through onSubmit or button click
    
        setState(prevState => ({
            ...prevState,
            fName: 'your updated value here'
         }));
 16.04.2020 06:47
Спасибо, Филип, это помогло мне - в моем случае у меня была форма с множеством полей ввода, поэтому я сохранил исходное состояние как объект, и я не смог обновить состояние объекта. Приведенный выше пост помог мне :)

const [projectGroupDetails, setProjectGroupDetails] = useState({
    "projectGroupId": "",
    "projectGroup": "DDD",
    "project-id": "",
    "appd-ui": "",
    "appd-node": ""    
});

const inputGroupChangeHandler = (event) => {
    setProjectGroupDetails((prevState) => ({
       ...prevState,
       [event.target.id]: event.target.value
    }));
}

<Input 
    id = "projectGroupId" 
    labelText = "Project Group Id" 
    value = {projectGroupDetails.projectGroupId} 
    onChange = {inputGroupChangeHandler} 
/>


 13.05.2020 16:24
function App() {

  const [todos, setTodos] = useState([
    { id: 1, title: "Selectus aut autem", completed: false },
    { id: 2, title: "Luis ut nam facilis et officia qui", completed: false },
    { id: 3, title: "Fugiat veniam minus", completed: false },
    { id: 4, title: "Aet porro tempora", completed: true },
    { id: 5, title: "Laboriosam mollitia et enim quasi", completed: false }
  ]);

  const changeInput = (e) => {todos.map(items => items.id === parseInt(e.target.value) && (items.completed = e.target.checked));
 setTodos([...todos], todos);}
  return (
    <div className = "container">
      {todos.map(items => {
        return (
          <div key = {items.id}>
            <label>
<input type = "checkbox" 
onChange = {changeInput} 
value = {items.id} 
checked = {items.completed} />&nbsp; {items.title}</label>
          </div>
        )
      })}
    </div>
  );
}
 23.06.2020 19:30
Изначально я использовал объект в useState, но затем перешел на хук useReducer для сложных случаев. Я почувствовал улучшение производительности при рефакторинге кода.

useReducer is usually preferable to useState when you have complex state logic that involves multiple sub-values or when the next state depends on the previous one.

useReducer React документы

Я уже реализовал такой хук для себя:

/**
 * Same as useObjectState but uses useReducer instead of useState
 *  (better performance for complex cases)
 * @param {*} PropsWithDefaultValues object with all needed props 
 * and their initial value
 * @returns [state, setProp] state - the state object, setProp - dispatch 
 * changes one (given prop name & prop value) or multiple props (given an 
 * object { prop: value, ...}) in object state
 */
export function useObjectReducer(PropsWithDefaultValues) {
  const [state, dispatch] = useReducer(reducer, PropsWithDefaultValues);

  //newFieldsVal = {[field_name]: [field_value], ...}
  function reducer(state, newFieldsVal) {
    return { ...state, ...newFieldsVal };
  }

  return [
    state,
    (newFieldsVal, newVal) => {
      if (typeof newVal !== "undefined") {
        const tmp = {};
        tmp[newFieldsVal] = newVal;
        dispatch(tmp);
      } else {
        dispatch(newFieldsVal);
      }
    },
  ];
}
более связанные хуки.

 11.08.2020 16:28
Думаю, лучшее решение - Погружать. Это позволяет вам обновлять объект, как если бы вы напрямую изменяли поля (masterField.fieldOne.fieldx = 'abc'). Но реального объекта это, конечно, не изменит. Он собирает все обновления для чернового объекта и в конце выдает окончательный объект, который можно использовать для замены исходного объекта.

 25.08.2020 18:48
, сделайте это как в этом примере:

первое состояние создания объектов:

const [isSelected, setSelection] = useState([{ id_1: false }, { id_2: false }, { id_3: false }]);
затем измените их значение:

// if the id_1 is false make it true or return it false.

onValueChange = {() => isSelected.id_1 == false ? setSelection([{ ...isSelected, id_1: true }]) : setSelection([{ ...isSelected, id_1: false }])}
 27.12.2020 13:41
Вы должны использовать параметры Rest и синтаксис распространения (https://javascript.info/rest-parameters-spread) И установить функцию с preState в качестве аргумента setState.

Не работает (отсутствует функция)

[state, setState] = useState({})
const key = 'foo';
const value = 'bar';
setState({
  ...state,
  [key]: value
});
Работает!

[state, setState] = useState({})
const key = 'foo';
const value = 'bar';
setState(prevState => ({
  ...prevState,
  [key]: value
}));
 30.03.2021 09:28
Я думаю, что более элегантным решением будет создание обновленного объекта состояния с сохранением предыдущих значений состояния. Свойство Object, которое необходимо обновить, может быть представлено в виде массива примерно так:

import React,{useState, useEffect} from 'react'
export default function Home2(props) {
    const [x, setX] = useState({name : '',add : {full : '', pin : '', d : { v : '' }}})
    const handleClick = (e, type)=>{
        let obj = {}
        if (type.length > 1){
            var z = {}
            var z2 = x[type[0]]
        
        type.forEach((val, idx)=>{
            if (idx === type.length - 1){
                z[val] = e.target.value
            }
            else if (idx > 0){
                Object.assign(z , z2) /*{...z2 , [val]:{} }*/
                z[val] = {}
                z = z[val]
                z2 = z2[val]
            }else{
                z = {...z2}
                obj = z
            }
        })
    }else obj = e.target.value
    setX( { ...x ,   [type[0]] : obj  } )
    
}
return (
    <div>
        <input value = {x.name} onChange = {e=>handleClick(e,["name"])}/>
        <input value = {x.add.full} onChange = {e=>handleClick(e,["add","full"])}  />
        <input value = {x.add.pin} onChange = {e=>handleClick(e,["add","pin"])}  /><br/>
        <input value = {x.add.d.v} onChange = {e=>handleClick(e,["add","d","v"])}  /><br/>
        {x.name} <br/>
        {x.add.full} <br/>
        {x.add.pin} <br/>
        {x.add.d.v}
    </div>
)
}
 19.05.2021 14:31
Я привел примеры обновлений «Добавление», «Обновление всего объекта» и «Конкретные ключевые обновления» для решения проблемы.
Добавление и изменение обоих можно выполнить простым шагом. Я думаю, что это более стабильный и безопасный вариант, который не имеет неизменяемых или изменяемых зависимостей.

Вот как вы можете добавить новый объект

setExampleState(prevState => ({
    ...prevState,
    masterField2: {
        fieldOne: "c",
        fieldTwo: {
            fieldTwoOne: "d",
            fieldTwoTwo: "e"
        }
    },
}))
Предположим, вы хотите снова изменить объект masterField2. Может быть две ситуации. Вы хотите обновить весь объект или обновить определенный ключ объекта.

Обновить весь объект - Итак, здесь будет обновлено все значение ключа masterField2.

setExampleState(prevState => ({
    ...prevState,
    masterField2: {
        fieldOne: "c",
        fieldTwo: {
            fieldTwoOne: "d",
            fieldTwoTwo: "e"
        }
    },
}))
Но что, если вы хотите изменить только ключ fieldTwoOne внутри объекта masterField2. Вы делаете следующее.

let oldMasterField2 = exampleState.masterField2
oldMasterField2.fieldTwo.fieldTwoOne = 'changed';
setExampleState(prevState => ({
    ...prevState,
    masterField2: oldMasterField2
}))
 31.05.2021 06:29
Ваш объект, для которого вы хотите сделать состояние

let teams = {
  team: [
    {
      name: "one",
      id: "1"
    },
  ]
}
Создание объекта "Состояние команд"

const [state, setState] = useState(teams);
Обновить состояние как это

setState((prevState)=>({...prevState,team:[
     ...prevState.team,
     {
     name: "two",
      id: "2"
     }
]}))
После обновления Состояние становится

{
  team: [
    {
      name: "one",
      id: "1"
    },
    {
      name: "two",
      id: "2"
    }
  ]
}
Для рендеринга элементов в соответствии с текущим состоянием используйте функцию карты

{state.team.map((curr_team) => {
      return (
        <div>
           <p>{curr_team.id}</p>
           <p>{curr_team.name}</p>
        </div>
      )
})}
 26.11.2021 16:52
Для управления сложным состоянием можно использовать ловушку useReducer вместо useState. Для этого сначала инициализируйте состояние и функцию обновления следующим образом:

const initialState = { name: "Bob", occupation: "builder" };
const [state, updateState] = useReducer(
  (state, updates) => ({
    ...state,
    ...updates,
  }),
  initialState
);
А затем вы можете обновить состояние, передавая только частичные обновления, например:

updateState({ ocupation: "postman" })
 21.12.2021 12:10
Другие вопросы по теме
Что на самом деле делает NextJS .prepare ()?
Как добавить обработчик событий к дочернему компоненту, который отображает несколько результатов?
Jest Fails при импорте и экспорте
Реакция-выбор с выбираемыми групповыми метками
Получение данных в реагирующем компоненте, все компоненты получают одни и те же данные
Как перенаправить пользователя после аутентификации из действия Redux?
Как исправить 'index.js: 1446 Предупреждение: невозможно вызвать setState (или forceUpdate) на отключенном компоненте ... "в ReactJS
Реагировать на синтаксис es6
ReactJS Поиск ввода по нескольким значениям
Стресс / нагрузочное тестирование веб-приложения с ReactJS FE / Java BE: какой инструмент использовать
Похожие вопросы
Почему [[], [], []] отличается от new Array (3) .fill ([])?
Можно ли скрыть URL-адрес запроса на вкладке сети веб-инспектора Chrome?
Что на самом деле делает NextJS .prepare ()?
Программное удаление данных приложения на ios из командной строки
Сложите число с нулями в javascript
Получение «ERROR TypeError: jit_nodeValue_6 (...) is not a function», когда я пытаюсь запустить метод с ngIf
Не удается найти модуль '@ angular-devkit / schematics / tasks'
Применить CKEditor Wordcount только к определенному полю
Как обработать ответ XMLHttpRequest, где responseText является сжатым (gzip) форматом
Как лучше всего обрабатывать нестандартные вложенные объекты / массивы с помощью Meteor
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
Повторяющийся идентификатор LibraryManagedAttributes
Вопросы
REACTJS
Повторяющийся идентификатор LibraryManagedAttributes
У меня та же проблема, что и в:

React typescript (2312,14): повторяющийся идентификатор LibraryManagedAttributes

а также

Ошибка TypeScript: повторяющийся идентификатор LibraryManagedAttributes

Но я просто не могу найти никакого решения.

Я уже обновился до последних версий node / npm / yarn / typescript. Также попробовал понизить версию. Ничего не помогает.

yarn build --verbose
yarn run v1.9.4
$ react-scripts-ts build --verbose
Creating an optimized production build...
Starting type checking and linting service...
Using 1 worker with 2048MB memory limit
ts-loader: Using typescript@3.0.3 and C:\dev\project\frontend\tsconfig.prod.json
Warning: member-ordering - Bad member kind: public-before-private
Failed to compile.

C:/dev/project/frontend/node_modules/@types/prop-types/node_modules/@types/react/index.d.ts
(2312,14): Duplicate identifier 'LibraryManagedAttributes'.


error Command failed with exit code 1.
--verbose почему-то не дает мне дополнительной информации.

Как я вижу, LibraryManagedAttributes определяется в:

node_modules/@types/react/index.d.ts
node_modules/@types/prop-types/node_modules/@types/react/index.d.ts
node_modules/@types/react-overlays/node_modules/@types/react/index.d.ts
....
Откуда это взялось? Как мне этого избежать?

Я хочу выяснить, откуда взялась эта ошибка, чтобы сообщить об этом нужному объекту, но я не знаю, с чего начать.

Что еще можно попробовать?

 19.09.2018 08:53
88
3
43 949
16
 Ответы 16
Похоже, это проблема с машинописным текстом.

Мой текущий обходной путь - добавление "skipLibCheck": true в tsconfig.json.

Я хочу подчеркнуть, что это всего лишь обходной путь, а не решение самой проблемы.

 19.09.2018 12:49
Кажется, это происходит потому, что Yarn разрешает несколько версий пакета; @types/react в данном конкретном случае. Yarn разрешает @types/react из вашего package.json и как зависимость от @types/react-dom.

Возьмите следующий фрагмент из моего package.json:

"devDependencies": {
  "@types/react": "^15.0.16",
  "@types/react-dom": "^0.14.23"
  ...
}
yarn.lock, который создается после запуска yarn install, содержит что-то похожее на это:

"@types/react-dom@^0.14.23":
  version "0.14.23"
  resolved "https://registry.yarnpkg.com/@types/react-dom/-/react-dom-0.14.23.tgz#cecfcfad754b4c2765fe5d29b81b301889ad6c2e"
  dependencies:
    "@types/react" "*"

"@types/react@*":
  version "16.4.14"
  resolved "https://registry.yarnpkg.com/@types/react/-/react-16.4.14.tgz#47c604c8e46ed674bbdf4aabf82b34b9041c6a04"
  dependencies:
    "@types/prop-types" "*"
    csstype "^2.2.0"

"@types/react@^15.0.16":
  version "15.6.19"
  resolved "https://registry.yarnpkg.com/@types/react/-/react-15.6.19.tgz#a5de18afe65b0f29767328836b48c498a5d3a91b"
Обратите внимание, что @types/react-dom зависит от любой версии @types/react, как указано в "*". Yarn разрешает две версии @types/react: "16.4.14" и "15.6.19". Это приводит к конфликтам типов, о которых вы упомянули.

Решение состоит в том, чтобы добавить поле разрешений к вашему package.json, чтобы указать Yarn разрешить конкретную версию @types/react. Возьмите следующий образец:

"resolutions": {
  "@types/react": "^15.0.16"
}
Снова запустите yarn install. Обратите внимание на изменение в файле yarn.lock:

"@types/react-dom@^0.14.23":
  version "0.14.23"
  resolved "https://registry.yarnpkg.com/@types/react-dom/-/react-dom-0.14.23.tgz#cecfcfad754b4c2765fe5d29b81b301889ad6c2e"
  dependencies:
    "@types/react" "*"

"@types/react@*", "@types/react@^15.0.16":
  version "15.6.19"
  resolved "https://registry.yarnpkg.com/@types/react/-/react-15.6.19.tgz#a5de18afe65b0f29767328836b48c498a5d3a91b"
Yarn теперь разрешает одну и ту же версию "15.6.19" для зависимостей "@types/react@*" и "@types/react@^15.0.16".

Я сам хотел бы знать, зачем это нужно. Я ожидаю, что Yarn поймет, что он может разрешить зависимость "@types/react" "*" с "@types/react@^15.0.16" вместо того, чтобы разрешать ее с помощью последней версии @types/react.

 20.09.2018 12:02
Самый простой способ исправить это для меня - удалить каталог node_modules и файлы yarn.lock / package-lock, а затем выполнить установку yarn для переустановки всех модулей node.

 30.11.2018 15:59
У меня такая же проблема после yarn upgrade @types/react-router-dom. git diff показывает, что несколько версий @types/react разрешены. В моем случае yarn upgrade @types/react решает проблему. Удаление yarn.lock должно помочь.

Кажется, что новая (без yarn.lock) установка разрешит пакеты в согласованное состояние, но частичное обновление не разрешит зависимости глобально. Таким образом, для обновления всех задействованных пакетов могут потребоваться ручные настройки.

 17.12.2018 07:00
В моем случае я получил сообщение об ошибке, указывающее, что «LibraryManagedAttributes» объявлен в 2 разных местах. Следуя по путям, я понял, что в установленном модуле также есть файл package.json, который также добавляет "@ types / response" в качестве dep, и его версия отличается от версии в корневом файле package.json. Я заменил эти два на одну и ту же версию, и проблема была решена.

 14.03.2019 04:07
У меня такая же ошибка. Мне удалось исправить это, удалив мои «@ types / response», а затем снова установив их.

yarn remove @types/react
yarn add --dev @types/react
 01.07.2019 21:43
Что касается меня, у меня были типы реакции, дублированные в react-redux, react и react-intl, когда я обновлял react-intl. Наименее навязчивое исправление, которое у меня сработало до сих пор, - это запустить следующее:

npx yarn-deduplicate --packages @types/react yarn.lock

Если полученное различие файла блокировки выглядит правильно, удалите node_modules, затем yarn, чтобы получить свежие пакеты из дедуплицированного файла блокировки.

 12.08.2019 23:59
В связи с вопросом, запуск npm list @types/react из каталога вашего package.json должен отображать повторяющиеся определения типов, найденные в вашем проекте.

 21.10.2019 22:31
У меня был запрос конфликтующей версии для реакции в другом используемом мной модуле. Исправление этого и повторная установка с помощью пряжи мне тоже не помогли.

Однако использование NPM вместо Yarn решило эту проблему для меня.

Надеюсь, это кому-то поможет.

 02.12.2019 12:57
У меня сработало удаление react и @types/react из package.json, а затем в zsh:

rm -rf node_modules/**/react
npm i react @types/react
 22.12.2019 03:33
C:/Users/japa/source/repos/ReactTestApp/TemplateExample/ClientApp/node_modules/@types/react/index.d.ts
TypeScript error in C:/Users/japa/source/repos/ReactTestApp/TemplateExample/ClientApp/node_modules/@types/react/index.d.ts(2835,14):
Duplicate identifier 'LibraryManagedAttributes'.  TS2300
В моем случае мне нужно было решить проблему вручную (по принципу, описанному в TS2300). Проблема возникла, когда я добавил в свой проект ReactKendo.

Пошел в каталог ClientApp в моем проекте ClientApp\node_modules\@types
Сделал резервную копию каталога react, а затем удалил его
Очистить + построить + запустить проект, и больше ошибок не будет.
Я восстановил папку react после того, как ошибка исчезла, и кажется, что ошибка исчезла навсегда, поэтому мне кажется, что это типичная волшебная ошибка где-то во вселенной :-)
Больше ничего менять в конфигурационных файлах мне не пришлось.

 05.02.2020 10:18
Для меня это вызвано только упомянутым @types/react-redux. Исправлено npm i --save-dev @types/react, поэтому package.json выглядит так:

  ...
  "devDependencies": {
    "@types/react": "^16.9.19",
    "@types/react-redux": "^7.1.7"
    ...
  }
 11.02.2020 13:55
У меня возникла эта проблема при работе со связанными зависимостями. Мой связанный пакет находится в репозитории lerna, и у него был @types/react как devDependency. Я добавил @types/react как peerDependency, переключил свой рабочий процесс на ялк и смог продолжить.

 22.04.2020 18:51
В нашем случае мы исправили это

Перенос всех пакетов @types/* в devDependencies

rm -rf yarn.lock и rm -rf node_modules

Снова запустите yarn install

 15.05.2020 04:00
Использование пряжа-дедупликация устранило проблему для меня.

Шаги:

Необязательно установить пакет yarn-deduplicate или использовать npx на втором шаге
npm install -g yarn-deduplicate
или

yarn global add yarn-deduplicate
Запускаем yarn-deduplicate
yarn-deduplicate yarn.lock --packages @types/react yarn.lock
или

npx yarn-deduplicate --packages @types/react yarn.lock
Удалить папку node_modules
rm -rf node_modules
Переустановите зависимости
yarn install
 05.09.2020 15:44
В моем случае ошибка появилась, когда номера версий @types/react (v17.0.3) и @types/react-dom (v17.0.2) не были синхронизированы.

Чтобы решить эту проблему, я удалил @types/react, потому что он поднимается с @types/react-dom. В этом можно убедиться, запустив yarn why @types/react.

 10.03.2021 00:02
Другие вопросы по теме
Передача данных из службы в родительский компонент, а затем из родительского в дочерний компонент
Консоль Chrome не работает, отображаются неопределенные значения
Обновить значение в formArray
Как вызвать внешний url?
Как я могу отображать данные на основе выбора полей сразу, не обновляя страницу?
Конструктор в классе MyApp вызывает поставщика только один раз
Как отображать различные сообщения об ошибках на основе пользовательского ввода в Angular 6
Ошибка: проверка схемы завершилась неудачно из-за следующих ошибок: Путь к данным "" НЕ должен иметь дополнительных свойств (проект)
Как я могу прочитать и привязать данные из этого JSON к раскрывающемуся списку Select в Angular 2+
Jquery_1.default не является функцией webpack
Похожие вопросы
Элемент списка не изменит высоту в ответ на большой текст из-за включения специальных возможностей
Получение ошибки при сохранении раскрывающегося списка response-native-material-material внутри плоского списка
Реализация BackHandler в react-native
Реагировать на приоритет css
Маршрутизатор и промежуточное ПО Express React
Как отображать товары в модальном теле
В: Бэкэнд для ReactJS
Назначьте идентификатор компонентам React
Можно ли получить значения для <options> из конечной точки, которая отправляет ответ json с помощью axios?
React Native require (изображение) возвращает число
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
Не удалось скомпилировать. Модуль не найден: не удается разрешить 'response-router-dom'
Вопросы
JAVASCRIPT
Не удалось скомпилировать. Модуль не найден: не удается разрешить 'response-router-dom'
После npm start браузер выдает ошибку:

Failed to compile ./src/components/App/App.js Module not found: Can't resolve 'react-router-dom'.

React-router-dom был добавлен к зависимостям в npm, и поэтому он имеет response-router и response.

Проект был создан с использованием командной строки create-react-app myapp. Это запускается на локальном хосте, сервере узла. У меня есть папка api и app внутри папки моего проекта. Я пробовал разные вещи. Обновил вручную мой package.json внутри папки приложения, переустановил response-router-dom, удалил package-lock.json в папке приложения и повторно инициализировал его. Моя папка api не содержит ничего, кроме node_modules, моего файла api, route.js, config.js, index.js, а также package.json и package-lock.json. Я пробовал команду сборки npm в папке моего приложения. Он просто создает папку «build», которая содержит те же файлы, что и моя общая папка, внутри моей папки приложения. Я также пробовал запустить yarn add react-router-dom.

//=========App.js file=========

//dependencies
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

//components
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Home from '../Pages/Home';
import StudentOverview from '../Pages/StudentOverview';
import StudentDetails from '../Pages/StudentDetails';
import Management from '../Pages/Management';
import StudentAdd from '../Pages/StudentAdd';
import Exercise from '../Exercise/Exercise';

//includes
import '../../../public/css/kdg-fonts.css';
import '../../../public/css/normalize.css';
import '../../../public/css/responsive.css';
import '../../../public/css/say-my-name.css';
import '../../../public/css/style.css';

//Run
class App extends Component {
  render() {
    return (
      <Router>
        <div className = "App">
          <Route path='*' component = {Header} />
          <Route path='*' component = {Footer} />
          <Route exact path='/' component = {Home} />
          <Route exact path='/studenten' component = {StudentOverview} />
          <Route exact path='/studenten/:id' component = {StudentDetails} />
          <Route exact path='/beheer' component = {Management} />
          <Route exact path='/beheer/add' component = {StudentAdd} />
          <Route exact path='/oefenen' component = {Exercise} />
        </div>
      </Router>
    );
  }
}

export default App;

//=========appfolder/package.json file=========

{
  "name": "saymyname",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "react": "^16.7.0",
    "react-dom": "^16.7.0",
    "react-scripts": "2.1.1"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": "react-app"
  },
  "browserslist": [
    ">0.2%",
    "not dead",
    "not ie <= 11",
    "not op_mini all"
  ],
  "devDependencies": {
    "gulp": "^4.0.0",
    "gulp-changed": "^3.2.0",
    "gulp-clean-css": "^4.0.0",
    "gulp-rename": "^1.4.0",
    "gulp-sass": "^4.0.2",
    "gulp-uglify": "^3.0.1"
  }
}
UPDATE: npm install -S react-router-dom resolved the error.

 24.12.2018 14:18
61
9
164 242
16
 Ответы 16
Чтобы исправить эту ошибку, выполните следующие действия. Шаг 1: npm install --save react-router-dom
Шаг 2:<script src = "https://unpkg.com/react-router-dom/umd/react-router-dom.min.js"></script>
тег скрипта помещаем в общедоступный / index.js

 08.06.2019 12:38
Я столкнулся с той же проблемой. Следующая команда разрешит это:

npm install react-router-dom --save

 02.12.2019 12:10
Проблема в том, что в вашем проекте React нет модуля response-router-dom. Вы можете установить и сохранить его с помощью следующей команды. Просто запустите эту команду в корне вашего проекта, и все будет работать нормально.

npm install --save react-router-dom

 09.04.2020 08:49
В моем случае я использую Typescript, и мне нужно было установить

npm i react-router-dom
И

npm i @types/react-router-dom
После обеих установок ошибки пропали.

 04.06.2020 22:22
npm i react-router-dom
или

npm install react-router-dom --save
Эта ошибка возникает из-за отсутствия пакета npm реагировать-маршрутизатор-дом. установите их, используя приведенный выше cmd.

 26.06.2020 13:44
Вам необходимо использовать --save при установке «response-router-dom». Это гарантирует, что пакет будет храниться в файле package.json как зависимость, и когда вы попытаетесь собрать решение на любом другом компьютере или на сервере сборки, он возьмет все зависимости из файла package.json и установит их.

Если вы хотите установить все зависимости на новую машину, выполните команду - npm install

 06.10.2020 13:32
For this problem "Module not found: Can't resolve 'react-router-dom' in"

//I found the following solving

// using ES6 modules

import { BrowserRouter, Route, Link } from "react-router-dom";
если он не работает, вы должны использовать следующее, что я использовал с модулями CommonJS

const BrowserRouter = require("react-router-dom").BrowserRouter;

const Route = require("react-router-dom").Route;

const Link = require("react-router-dom").Link;
 02.12.2020 01:02
Обязательно используйте npm install --save response-router-dom not npm install --save response-router

 18.12.2020 01:26
npm install react-router-dom 
Эта команда решает ту же проблему, с которой я столкнулся.

 06.02.2021 10:22
Если вы уже установили зависимости, проверьте файл package.Json на наличие зависимости response-router-dom, и он по-прежнему не работает ... В этом случае убедитесь, что вы импортируете пакеты из response-router-dom в файл index.js.

импортировать {BrowserRouter as Router, Switch, Route} из "response-router-dom"

 23.02.2021 10:16
Я решил проблему, когда Docker и yarn были связаны с ошибкой.

Ключ заключался в том, чтобы перестроить образ Docker после установки response-router-dom в качестве зависимости разработчика, как и многие ответы здесь подробно. Папка node_modules внутри контейнера докеров нуждается в обновлении! Если ваш файл параметров docker-compose.yaml не перемонтирует node_modules как том или иным образом не обновляет его, то этот ответ не будет работать для вашего проекта. Шаги:

docker-compose down в корне проекта или остановите демон в Docker Desktop
yarn remove react-router-dom
yarn add --dev react-router-dom добавляет response-router-dom как зависимость dev
docker-compose build для восстановления образа Docker
docker-compose up -d для запуска devserver с демоном
В моем случае я использовал Docker, а create-react-app использовал шаблон Typescript. Я использую docker-compose для подъема и опускания контейнеров с помощью демона Docker. Если вы не используете docker-compose, вам необходимо соответствующим образом изменить команды запуска / остановки контейнера.

React Router уже установлен и работает правильно (yarn start вне контейнера Docker не сообщал об ошибках). Докер, содержащий интерфейсный сервер, работал некорректно.

 23.03.2021 14:04
 "dependencies": {
    "react": "^16.7.0",
    "react-dom": "^16.7.0",
    "react-scripts": "2.1.1"
  },
Это зависимости, которые вы используете в своем проекте, не забудьте установить react-router-dom в свой проект реакции.

Использовать npm i react-router-dom или yarn add react-router-dom для установки response-router-dom в ваш проект.

Если вы используете машинописный текст в своем проекте, вам также необходимо установить @types/react-router-dom.

Используйте npm i @types/react-router-dom или yarn add @types/react-router-dom для их установки.

Наконец, если вы успешно установили эти библиотеки в свой проект, ваш package.json может выглядеть так:

"dependencies": {
    "react": "^16.7.0",
    "react-dom": "^16.7.0",
    "react-scripts": "2.1.1"
     ......
    "react-router-dom": "^x.x.x",
     .....
    "@types/react-router-dom": "^x.x.x",
  },
 01.05.2021 21:23
Используйте npm install react-router-dom --save для его установки.

 01.06.2021 15:31
если вы используете пряжу вместо npm, это поможет, это решило ту же проблему для меня.

пряжа добавить реагировать-маршрутизатор-дом - сохранить

 04.08.2021 07:16
просто установите response-router-dom, используя

yarn add react-router-dom
или

npm install --save react-router-dom
 22.08.2021 08:00
npm установить response-router-dom --save

Это будет работать

 19.09.2021 15:06
Другие вопросы по теме
Не могу развернуть мое домашнее приложение Nodejs на Heroku: remote: FATAL: не могу найти приложение Meteor
Newman CLI возвращает сообщение «ошибка: невозможно получить сертификат локального эмитента» в сборке teamcity
Node JS сохраняет несколько записей в Mongo за одну транзакцию
Мой запрос Sequelize всегда делает неправильный запрос, когда я использую findById (req.params.id)
SyntaxError: неожиданный токен} в JSON в позиции
Невозможно использовать проверку внутри конструктора родительского класса с классом-валидатором
Публикуйте и подписывайтесь на темы MQTT с помощью MQTT.js и Mosquitto
Как производить значение каждые 1 секунду на rxjs
Почему $ push не добавляет newCategory
Размещение функции обратного вызова Node / JS
Похожие вопросы
Отключить кнопку отправки, если флажок не установлен
Когда эта ошибка возникает в реакции native: transformClassesWithDexBuilderForDebug?
Передача значения одноуровневому компоненту с использованием общей службы
Асинхронная обработка задач javascript
Почему существует переменная Google, если она никогда не была объявлена?
Моя функция возвращает строку, но сравнение всегда неверно
React Recharts - получение данных из разных объектов
Быстрая загрузка BLOB-объектов
Синтаксис распространения Vue js с Vuex
Редактировать расширение с помощью Regex
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
Метод useState не сразу отражает изменение
Вопросы
JAVASCRIPT
Метод useState не сразу отражает изменение
Я пытаюсь выучить хуки, и метод useState сбил меня с толку. Я присваиваю начальное значение состоянию в виде массива. Метод установки в useState у меня не работает ни с оператором спреда, ни без него.

Я создал API на другом ПК, который я вызываю и получаю данные, которые я хочу установить в состояние.

Вот мой код:

<div id = "root"></div>

<script type = "text/babel" defer>
// import React, { useState, useEffect } from "react";
// import ReactDOM from "react-dom";
const { useState, useEffect } = React; // web-browser variant

const StateSelector = () => {
  const initialValue = [
    {
      category: "",
      photo: "",
      description: "",
      id: 0,
      name: "",
      rating: 0
    }
  ];

  const [movies, setMovies] = useState(initialValue);

  useEffect(() => {
    (async function() {
      try {
        // const response = await fetch("http://192.168.1.164:5000/movies/display");
        // const json = await response.json();
        // const result = json.data.result;
        const result = [
          {
            category: "cat1",
            description: "desc1",
            id: "1546514491119",
            name: "randomname2",
            photo: null,
            rating: "3"
          },
          {
            category: "cat2",
            description: "desc1",
            id: "1546837819818",
            name: "randomname1",
            rating: "5"
          }
        ];
        console.info("result  = ", result);
        setMovies(result);
        console.info("movies  = ", movies);
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  return <p>hello</p>;
};

const rootElement = document.getElementById("root");
ReactDOM.render(<StateSelector />, rootElement);
</script>

<script src = "https://unpkg.com/@babel/standalone@7/babel.min.js"></script>
<script src = "https://unpkg.com/react@17/umd/react.production.min.js"></script>
<script src = "https://unpkg.com/react-dom@17/umd/react-dom.production.min.js"></script>
Ни setMovies(result), ни setMovies(...result) не работают.

Я ожидаю, что переменная результата будет помещена в массив фильмов.

 07.01.2019 07:05
502
2
393 602
16
Данный вопрос помечен как решенный
 Ответы 16
 Ответ принят как подходящий
Подобно setState в компонентах класса, созданных расширением React.Component или React.PureComponent, обновление состояния с помощью средства обновления, предоставляемого ловушкой useState, также является асинхронным и не будет отражено немедленно.

Кроме того, основная проблема здесь не только в асинхронном характере, но и в том, что значения состояния используются функциями на основе их текущих закрытий, а обновления состояния будут отражаться в следующем повторном рендеринге, при котором существующие закрытия не будут затронуты, но будут добавлены новые. созданы. Теперь в текущем состоянии значения внутри хуков получаются существующими замыканиями, и когда происходит повторный рендеринг, замыкания обновляются в зависимости от того, воссоздана ли функция снова или нет.

Даже если вы добавите функцию setTimeout, хотя по истечении некоторого времени, по истечении которого произойдет повторный рендеринг, пройдет тайм-аут, setTimeout все равно будет использовать значение из своего предыдущего закрытия, а не обновленное.

setMovies(result);
console.info(movies) // movies here will not be updated
Если вы хотите выполнить действие при обновлении состояния, вам необходимо использовать ловушку useEffect, как при использовании componentDidUpdate в компонентах класса, поскольку установщик, возвращаемый useState, не имеет шаблона обратного вызова

useEffect(() => {
    // action on update of movies
}, [movies]);
Что касается синтаксиса для обновления состояния, setMovies(result) заменит предыдущее значение movies в состоянии на значения, доступные из асинхронного запроса.

Однако, если вы хотите объединить ответ с ранее существовавшими значениями, вы должны использовать синтаксис обратного вызова обновления состояния вместе с правильным использованием синтаксиса распространения, например

setMovies(prevMovies => ([...prevMovies, ...result]));
 07.01.2019 07:15
Additional details to the previous answer:

Хотя React setStateявляется асинхронен (и классы, и хуки), и заманчиво использовать этот факт для объяснения наблюдаемого поведения, это не Причина, почему, это случается.

TL; DR: причина в области закрытие вокруг неизменного значения const.

Решения:
прочтите значение в функции рендеринга (не внутри вложенных функций):

  useEffect(() => { setMovies(result) }, [])
  console.info(movies)
добавить переменную в зависимости (и использовать правило eslint реагировать-хуки / исчерпывающие-депс):

  useEffect(() => { setMovies(result) }, [])
  useEffect(() => { console.info(movies) }, [movies])
используйте временную переменную:

  useEffect(() => {
    const newMovies = result
    console.info(newMovies)
    setMovies(newMovies)
  }, [])
используйте изменяемую ссылку (если нам не нужно состояние и мы хотим запомнить только значение - обновление ссылки не вызывает повторного рендеринга):

  const moviesRef = useRef(initialValue)
  useEffect(() => {
    moviesRef.current = result
    console.info(moviesRef.current)
  }, [])
Объяснение, почему это происходит:
Если бы асинхронность была единственной причиной, возможно, await setState().

Однако и props, и state являются предполагается, что не меняется в течение 1 рендера.

Treat this.state as if it were immutable.

С помощью хуков это предположение усиливается за счет использования постоянные значения с ключевым словом const:

const [state, setState] = useState('initial')
Значение может отличаться между двумя рендерингами, но остается постоянным внутри самого рендера и внутри любого закрытие (функции, которые живут дольше даже после завершения рендеринга, например, useEffect, обработчики событий, внутри любого Promise или setTimeout).

Рассмотрим следующую подделку, но синхронный, React-подобную реализацию:

// sync implementation:

let internalState
let renderAgain

const setState = (updateFn) => {
  internalState = updateFn(internalState)
  renderAgain()
}

const useState = (defaultState) => {
  if (!internalState) {
    internalState = defaultState
  }
  return [internalState, setState]
}

const render = (component, node) => {
  const {html, handleClick} = component()
  node.innerHTML = html
  renderAgain = () => render(component, node)
  return handleClick
}

// test:

const MyComponent = () => {
  const [x, setX] = useState(1)
  console.info('in render:', x) // ✅
  
  const handleClick = () => {
    setX(current => current + 1)
    console.info('in handler/effect/Promise/setTimeout:', x) // ❌ NOT updated
  }
  
  return {
    html: `<button>${x}</button>`,
    handleClick
  }
}

const triggerClick = render(MyComponent, document.getElementById('root'))
triggerClick()
triggerClick()
triggerClick()
<div id = "root"></div>
 15.11.2019 14:16
// replace
return <p>hello</p>;
// with
return <p>{JSON.stringify(movies)}</p>;
Теперь вы должны увидеть, что ваш код на самом деле делает работает. Что не работает, так это console.info(movies). Это потому, что movies указывает на старое состояние. Если вы переместите console.info(movies) за пределы useEffect, прямо над возвратом вы увидите обновленный объект фильмов.

 18.05.2020 08:49
Я только что закончил переписывание с помощью useReducer, следуя статье @kentcdobs (ссылка ниже), которая действительно дала мне твердый результат, который не страдает от этих проблем с закрытием.

См .: https://kentcdodds.com/blog/how-to-use-react-context-effectively

Я сжал его читабельный шаблон до моего предпочтительного уровня СУХОСТИ - чтение его реализации в песочнице покажет вам, как это на самом деле работает.

import React from 'react'

// ref: https://kentcdodds.com/blog/how-to-use-react-context-effectively

const ApplicationDispatch = React.createContext()
const ApplicationContext = React.createContext()

function stateReducer(state, action) {
  if (state.hasOwnProperty(action.type)) {
    return { ...state, [action.type]: state[action.type] = action.newValue };
  }
  throw new Error(`Unhandled action type: ${action.type}`);
}

const initialState = {
  keyCode: '',
  testCode: '',
  testMode: false,
  phoneNumber: '',
  resultCode: null,
  mobileInfo: '',
  configName: '',
  appConfig: {},
};

function DispatchProvider({ children }) {
  const [state, dispatch] = React.useReducer(stateReducer, initialState);
  return (
    <ApplicationDispatch.Provider value = {dispatch}>
      <ApplicationContext.Provider value = {state}>
        {children}
      </ApplicationContext.Provider>
    </ApplicationDispatch.Provider>
  )
}

function useDispatchable(stateName) {
  const context = React.useContext(ApplicationContext);
  const dispatch = React.useContext(ApplicationDispatch);
  return [context[stateName], newValue => dispatch({ type: stateName, newValue })];
}

function useKeyCode() { return useDispatchable('keyCode'); }
function useTestCode() { return useDispatchable('testCode'); }
function useTestMode() { return useDispatchable('testMode'); }
function usePhoneNumber() { return useDispatchable('phoneNumber'); }
function useResultCode() { return useDispatchable('resultCode'); }
function useMobileInfo() { return useDispatchable('mobileInfo'); }
function useConfigName() { return useDispatchable('configName'); }
function useAppConfig() { return useDispatchable('appConfig'); }

export {
  DispatchProvider,
  useKeyCode,
  useTestCode,
  useTestMode,
  usePhoneNumber,
  useResultCode,
  useMobileInfo,
  useConfigName,
  useAppConfig,
}
Примерно так:

import { useHistory } from "react-router-dom";

// https://react-bootstrap.github.io/components/alerts
import { Container, Row } from 'react-bootstrap';

import { useAppConfig, useKeyCode, usePhoneNumber } from '../../ApplicationDispatchProvider';

import { ControlSet } from '../../components/control-set';
import { keypadClass } from '../../utils/style-utils';
import { MaskedEntry } from '../../components/masked-entry';
import { Messaging } from '../../components/messaging';
import { SimpleKeypad, HandleKeyPress, ALT_ID } from '../../components/simple-keypad';

export const AltIdPage = () => {
  const history = useHistory();
  const [keyCode, setKeyCode] = useKeyCode();
  const [phoneNumber, setPhoneNumber] = usePhoneNumber();
  const [appConfig, setAppConfig] = useAppConfig();

  const keyPressed = btn => {
    const maxLen = appConfig.phoneNumberEntry.entryLen;
    const newValue = HandleKeyPress(btn, phoneNumber).slice(0, maxLen);
    setPhoneNumber(newValue);
  }

  const doSubmit = () => {
    history.push('s');
  }

  const disableBtns = phoneNumber.length < appConfig.phoneNumberEntry.entryLen;

  return (
    <Container fluid className = "text-center">
      <Row>
        <Messaging {...{ msgColors: appConfig.pageColors, msgLines: appConfig.entryMsgs.altIdMsgs }} />
      </Row>
      <Row>
        <MaskedEntry {...{ ...appConfig.phoneNumberEntry, entryColors: appConfig.pageColors, entryLine: phoneNumber }} />
      </Row>
      <Row>
        <SimpleKeypad {...{ keyboardName: ALT_ID, themeName: appConfig.keyTheme, keyPressed, styleClass: keypadClass }} />
      </Row>
      <Row>
        <ControlSet {...{ btnColors: appConfig.buttonColors, disabled: disableBtns, btns: [{ text: 'Submit', click: doSubmit }] }} />
      </Row>
    </Container>
  );
};

AltIdPage.propTypes = {};
Теперь все плавно сохраняется везде на всех моих страницах

 16.06.2020 19:02
React useEffect имеет собственное состояние / жизненный цикл, связанный с изменением состояния, он не будет обновлять состояние до тех пор, пока эффект не будет уничтожен.

Просто передайте один аргумент в параметре state или оставьте черный массив, и он будет работать отлично.

React.useEffect(() => {
    console.info("effect");
    (async () => {
        try {
            let result = await fetch("/query/countries");
            const res = await result.json();
            let result1 = await fetch("/query/projects");
            const res1 = await result1.json();
            let result11 = await fetch("/query/regions");
            const res11 = await result11.json();
            setData({
                countries: res,
                projects: res1,
                regions: res11
            });
        } catch {}
    })(data)
}, [setData])
# or use this
useEffect(() => {
    (async () => {
        try {
            await Promise.all([
                fetch("/query/countries").then((response) => response.json()),
                fetch("/query/projects").then((response) => response.json()),
                fetch("/query/regions").then((response) => response.json())
            ]).then(([country, project, region]) => {
                // console.info(country, project, region);
                setData({
                    countries: country,
                    projects: project,
                    regions: region
                });
            })
        } catch {
            console.info("data fetch error")
        }
    })()
}, [setData]);
В качестве альтернативы вы можете попробовать React.useRef () для мгновенного изменения хука реакции.

const movies = React.useRef(null);
useEffect(() => {
movies.current='values';
console.info(movies.current)
}, [])

 20.08.2020 13:50
Я знаю, что уже есть очень хорошие ответы. Но я хочу дать другую идею, как решить ту же проблему и получить доступ к последнему состоянию «фильма», используя мой модуль реагировать-useStateRef.

Как вы понимаете, используя состояние React, вы можете отображать страницу при каждом изменении состояния. Но используя React ref, вы всегда можете получить самые свежие значения.

Таким образом, модуль react-useStateRef позволяет вам использовать состояния и ссылки вместе. Он обратно совместим с React.useState, поэтому вы можете просто заменить инструкцию import

const { useEffect } = React
import { useState } from 'react-usestateref'

  const [movies, setMovies] = useState(initialValue);

  useEffect(() => {
    (async function() {
      try {

        const result = [
          {
            id: "1546514491119",
          },
        ];
        console.info("result  = ", result);
        setMovies(result);
        console.info("movies  = ", movies.current); // will give you the latest results
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);
Дополнительная информация:
реагировать на использование
 24.12.2020 10:28
Есть много хороших ответов, которые показывают, как исправить ваш код, но есть пакет NPM, который позволяет вам исправить это, просто изменив import. Это называется реагировать-useStateRef.

В твоем случае:

import useState from 'react-usestateref'
const [movies, setMovies,moviesRef] = useState(initialValue);
....
useEffect(() => {
   setMovies(...)
   console.info(moviesRef.current) // It will have the last value
})
Как видите, использование этой библиотеки позволит вам получить доступ к последнему состоянию.

 24.03.2021 06:20
Я нашел, что это хорошо. Вместо определения состояния (подход 1), например,

const initialValue = 1;
const [state,setState] = useState(initialValue)

Попробуйте этот подход (подход 2),

const [state = initialValue,setState] = useState()

Это решило проблему повторного рендеринга без использования useEffect, поскольку в этом случае нас не интересует его подход к внутреннему закрытию.

P.S .: Если вас беспокоит использование старого состояния для любого варианта использования, необходимо использовать useState с useEffect, так как оно должно иметь это состояние, поэтому в этой ситуации следует использовать подход 1.

 25.03.2021 11:38
Для более удобной работы с обещаниями существует специальный синтаксис, который называется «async / await». Его на удивление легко понять и использовать.

В этом случае с setState может быть несколько решений. Одно из самых простых и удобных решений, которое я нашел, выглядит следующим образом:

В функциональном компоненте используйте useEffect () как async / await. То есть здесь, в приведенном выше примере, useEffect () уже реализована как асинхронная функция. Теперь сделайте setMovies (results) как await, например:

await setMovies(results);
Это обязательно решит проблему немедленной смены. Ключевое слово Ждите заставляет JavaScript ждать, пока это обещание не будет выполнено, и вернет свой результат.

Вам также не нужно устанавливать начальное значение, как написано в вопросе.

Вы можете объявлять только фильмы с переменными параметрами, например

const [movies, setMovies] = useState([]);
Для получения дополнительной информации см. Асинхронный / ожидание.

 09.04.2021 21:30
С настраиваемыми хуками из моей библиотеки вы можете дождаться обновления значений состояния:

useAsyncWatcher(...values):watcherFn(peekPrevValue: boolean)=>Promise - это оболочка обещания вокруг useEffect, которая может ждать обновлений и возвращать новое значение и, возможно, предыдущее, если для необязательного аргумента peekPrevValue установлено значение true.
(Живая демонстрация)

    import React, { useState, useEffect, useCallback } from "react";
    import { useAsyncWatcher } from "use-async-effect2";
    
    function TestComponent(props) {
      const [counter, setCounter] = useState(0);
      const [text, setText] = useState("");
    
      const textWatcher = useAsyncWatcher(text);
    
      useEffect(() => {
        setText(`Counter: ${counter}`);
      }, [counter]);
    
      const inc = useCallback(() => {
        (async () => {
          await new Promise((resolve) => setTimeout(resolve, 1000));
          setCounter((counter) => counter + 1);
          const updatedText = await textWatcher();
          console.info(updatedText);
        })();
      }, []);
    
      return (
        <div className = "component">
          <div className = "caption">useAsyncEffect demo</div>
          <div>{counter}</div>
          <button onClick = {inc}>Inc counter</button>
        </div>
      );
    }
    
    export default TestComponent;
useAsyncDeepState - это реализация с глубоким состоянием (похожая на this.setState (patchObject)), сеттер которой может возвращать обещание, синхронизированное с внутренним эффектом. Если установщик вызывается без аргументов, он не изменяет значения состояния, а просто подписывается на обновления состояния. В этом случае вы можете получить значение состояния из любого места внутри вашего компонента, поскольку закрытие функций больше не является помехой.
(Живая демонстрация)

import React, { useCallback, useEffect } from "react";
import { useAsyncDeepState } from "use-async-effect2";

function TestComponent(props) {
  const [state, setState] = useAsyncDeepState({
    counter: 0,
    computedCounter: 0
  });

  useEffect(() => {
    setState(({ counter }) => ({
      computedCounter: counter * 2
    }));
  }, [state.counter]);

  const inc = useCallback(() => {
    (async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      await setState(({ counter }) => ({ counter: counter + 1 }));
      console.info("computedCounter = ", state.computedCounter);
    })();
  });

  return (
    <div className = "component">
      <div className = "caption">useAsyncDeepState demo</div>
      <div>state.counter : {state.counter}</div>
      <div>state.computedCounter : {state.computedCounter}</div>
      <button onClick = {() => inc()}>Inc counter</button>
    </div>
  );
}
 23.05.2021 12:43
Нашел хитрость в перехвате setState. Вы не должны использовать старую переменную. Вы должны создать новую переменную и передать ее на перехватчик. Например:

const [users, setUsers] = useState(['Ayşe', 'Fatma'])

useEffect(() => {
    setUsers((oldUsers) => {
        oldUsers.push(<div>Emir</div>)
        oldUsers.push(<div>Buğra</div>)
        oldUsers.push(<div>Emre</div>)
        return oldUsers
    })
}, [])

return (
    <Fragment>
        {users}
    </Fragment>
)
Вы увидите только пользователей Ayşe и Fatma. Потому что вы возвращаете (или передаете) переменную oldUsers. Эта переменная имеет ТАКУЮ ССЫЛКУ со ссылкой на старое состояние. Вы должны вернуть НОВОЕ СОЗДАННУЮ переменную. Если вы передадите ту же указанную переменную, тогда Reactjs не обновит состояние.

const [users, setUsers] = useState(['Ayşe', 'Fatma'])

useEffect(() => {
    setUsers((oldUsers) => {
        const newUsers = [] // Create new array. This is so important.
        
        // you must push every old item to our newly created array
        oldUsers.map((user, index) => {
            newUsers.push(user)
        })
        // NOTE: map() function is synchronous
        
        newUsers.push(<div>Emir</div>)
        newUsers.push(<div>Buğra</div>)
        newUsers.push(<div>Emre</div>)
        return newUsers
    })
}, [])

return (
    <Fragment>
        {users}
    </Fragment>
)
 17.06.2021 09:43
var [state,setState]=useState(defaultValue)

useEffect(()=>{
   var updatedState
   setState(currentState=>{    // Do not change the state by get the updated state
      updateState=currentState
      return currentState
   })
   alert(updateState) // the current state.
})
 01.07.2021 22:19
Используйте библиотеку Таймер фона. Это решило мою проблему.

const timeoutId = BackgroundTimer.setTimeout(() => {
    // This will be executed once after 1 seconds
    // even when the application is the background
    console.info('tac');
}, 1000);
 07.07.2021 09:02
Закрытие - не единственная причина.

На основе исходного кода useState (упрощенного ниже). Мне кажется, значение никогда не назначается сразу.

Что происходит, так это то, что действие обновления ставится в очередь, когда вы вызываете setValue. И после того, как расписание сработает, и только когда вы перейдете к следующему рендерингу, это действие обновления применяется к этому состоянию.

Это означает, что даже у нас нет проблемы с закрытием, реагирующая версия useState не даст вам сразу новое значение. Новое значение даже не существует до следующего рендеринга.

  function useState(initialState) {
    let hook;
    ...

    let baseState = hook.memoizedState;
    if (hook.queue.pending) {
      let firstUpdate = hook.queue.pending.next;

      do {
        const action = firstUpdate.action;
        baseState = action(baseState);            // setValue HERE
        firstUpdate = firstUpdate.next;
      } while (firstUpdate !== hook.queue.pending);

      hook.queue.pending = null;
    }
    hook.memoizedState = baseState;

    return [baseState, dispatchAction.bind(null, hook.queue)];
  }

function dispatchAction(queue, action) {
  const update = {
    action,
    next: null
  };
  if (queue.pending === null) {
    update.next = update;
  } else {
    update.next = queue.pending.next;
    queue.pending.next = update;
  }
  queue.pending = update;

  isMount = false;
  workInProgressHook = fiber.memoizedState;
  schedule();
}

Также есть статья, объясняющая вышесказанное аналогичным образом, https://dev.to/adamklein/we-don-t-know-how-react-state-hook-works-1lp8

 09.07.2021 06:09
Если нам нужно только обновить состояние, то лучшим способом будет использование для этого метода push.

Вот мой код. Я хочу сохранить URL-адреса из Firebase в состоянии.

const [imageUrl, setImageUrl] = useState([]);
const [reload, setReload] = useState(0);

useEffect(() => {
    if (reload === 4) {
        downloadUrl1();
    }
}, [reload]);


const downloadUrl = async () => {
    setImages([]);
    try {
        for (let i = 0; i < images.length; i++) {
            let url = await storage().ref(urls[i].path).getDownloadURL();
            imageUrl.push(url);
            setImageUrl([...imageUrl]);

            console.info(url, 'check', urls.length, 'length', imageUrl.length);
        }
    }
    catch (e) {
        console.info(e);
    }
};

const handleSubmit = async () => {
    setReload(4);
    await downloadUrl();
    console.info(imageUrl);
    console.info('post submitted');
};
Этот код работает, чтобы поместить URL-адреса в состояние в виде массива. Это также может сработать для вас.

 28.08.2021 01:31
Реализовать обратный вызов установки состояния (без useEffect) в рамках функции установщика несложно.

Используйте обещание для разрешения нового состояния в теле функции установки:

const getState = <T>(
  setState: React.Dispatch<React.SetStateAction<T>>
): Promise<T> => {
  return new Promise((resolve) => {
    setState((currentState: T) => {
      resolve(currentState);
      return currentState;
    });
  });
};
В этом примере показано сравнение count и outOfSyncCount / syncCount в рендеринге пользовательского интерфейса:

const App: React.FC = () => {
  const [count, setCount] = useState(0);
  const [outOfSyncCount, setOutOfSyncCount] = useState(0);
  const [syncCount, setSyncCount] = useState(0);

  const handleOnClick = async () => {
    setCount(count + 1);
    setOutOfSyncCount(count);
    const newCount = await getState(setCount);
    setSyncCount(newCount);
    // Or then'able
    // getState(setCount).then(setSyncCount);
  };

  return (
    <>
      <h2>Count = {count}</h2>
      <h2>Synced count = {syncCount}</h2>
      <h2>Out of sync count = {outOfSyncCount}</h2>
      <button onClick = {handleOnClick}>Increment</button>
    </>
  );
};
Я думаю, что привлекательный вариант использования этого подхода - это контекстный api и асинхронные и / или побочные эффекты, которые очень похожи на преобразователи Redux. Это также потребует меньшей сложности, чем Метод Кента. (Я не использовал это в больших примерах или производстве, поэтому я не знаю, может быть, вы можете попасть в какие-то странные состояния).

Пример:

// Sample "thunk" with async and side effects
const handleSubmit = async (
  setState: React.Dispatch<SetStateAction<FormState>>
): Promise<void> => {
  const state = await getState(setState);
​
  if (!state.validated) {
    return;
  }
​
  // Submit endpoint
  await fetch('submitFormUrl', { method: 'post', body: state });
  tackFormSuccess(state);
  setState({ ...state, submitted: true });
};
​
// Component consuming the thunk
const SubmitComponent: React.FC = () => {
  const dispatch = useFormDispatch();
  return <button onclick = {() => handleSubmit(dispatch)}>Submit</button>
}
 18.12.2021 18:31
Другие вопросы по теме
Отправка запроса POST из приложения React с массивом файлов, полученная как массив строк в Spring API
React-native: как сделать условный сетевой запрос
Классы утилит в React, использующие React-redux
Не удалось загрузить ресурс: сервер ответил статусом 405 (не разрешен), требуется помощь по nginx.conf
Как получить разницу с динамически добавленными полями - React
Неожиданный импорт токена при попытке использовать pm2 в моем приложении для реагирования на каплю digitalocean
Mocha + Webpack + Typescript (React): ошибка не может найти модуль (компонент машинописного текста)
Как визуализировать массив внутри объекта массива в React Native
Youtube API iframe не работает в продакшене
Ошибка сборки модуля в команде npm
Похожие вопросы
Как установить maxDate на Air-datepicker на 03 месяца
FindOneAndUpdate () подмассив на основе условий в поисковом запросе
Как выполнить отмену повтора в ткани js с помощью enlivenObjects
React-native: как сделать условный сетевой запрос
Преобразование десятичного числа в шестнадцатеричное не работает для 8020224
Есть ли лучший способ заменить последнюю строку после пробела другой строкой при соблюдении некоторых условий?
Индекс в Promise.all
При использовании babel с nodemon представление не обновляется при изменении файлов?
Указать положение изображений на перетаскиваемой области с помощью n-го дочернего элемента в javascript
Как получить разницу с динамически добавленными полями - React
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
React-native google signin выдает ошибку разработчика
Вопросы
ANDROID
React-native google signin выдает ошибку разработчика
Я пытаюсь войти в Google с помощью плагина React-native-google-signin, но он выдает ошибку Developer_Error. Я сделал точно так же, как указано в его документе. Вот мой код и шаги.

1.Установлен плагин react-native-google-signin с помощью npm i react-native-google-signin. 2.Затем связали его с реакцией на нативную ссылку 3. После этого я настроил файл build.gradle, как они упоминают в документах.

    ext {
        buildToolsVersion = "27.0.3"
        minSdkVersion = 16
        compileSdkVersion = 27
        targetSdkVersion = 26
        supportLibVersion = "27.1.1"
        googlePlayServicesAuthVersion = "15.0.1"
    }

    dependencies {
        classpath 'com.android.tools.build:gradle:3.1.2' 
        classpath 'com.google.gms:google-services:3.2.1' 
    }
    allprojects {
        repositories {
                mavenLocal()
                google() 
                maven {url "https://maven.google.com"}
                jcenter()
                maven {
                // All of React Native (JS, Obj-C sources, Android binaries) is installed from npm
                url "$rootDir/../node_modules/react-native/android"
                }
                maven {
                    url 'https://maven.google.com/'
                    name 'Google'
                }
        }
    }
4.Обновлен android/app/build.gradle,

    dependencies {

        implementation 'com.facebook.android:facebook-android-sdk:4.34.0'
        implementation project(':react-native-fbsdk')
        compile project(':react-native-vector-icons')
        compile project(':react-native-fused-location')
        compile project(':react-native-fs')
        compile project(':react-native-image-resizer')
        compile project(':react-native-geocoder')
        compile project(':react-native-device-info')
        compile project(':react-native-image-picker')
        compile fileTree(dir: "libs", include: ["*.jar"])
        compile "com.android.support:appcompat-v7:${rootProject.ext.supportLibVersion}"
        compile "com.facebook.react:react-native:+"  // From node_modules
        implementation project(":react-native-google-signin")
        compile (project(':react-native-maps')){
            exclude group: "com.google.android.gms" 
        }
        implementation 'com.google.android.gms:play-services-auth:15.0.1'
        implementation 'com.google.android.gms:play-services-maps:15.0.1'
        implementation 'com.google.android.gms:play-services-location:15.0.1'
        implementation 'com.google.android.gms:play-services-base:15.0.1' 

    }

    task copyDownloadableDepsToLibs(type: Copy) {
        from configurations.compile
        into 'libs'
    }
    apply plugin: 'com.google.gms.google-services' 
5. Затем сгенерируйте ключ SHA1 с помощью android studion debug.keystore и сгенерируйте файл google-services.json в firebase.

6. Затем настройте страницу login.js следующим образом.

    async componentDidMount() {
        this._configureGoogleSignIn();

    }
    _configureGoogleSignIn() {
        GoogleSignin.configure({
            webClientId: '775060548127-5nfj43q15l75va9pfav2jettkha7hm2a.apps.googleusercontent.com',// my clientID
            offlineAccess: false
        });
    }
    async GoogleSignin() {
    try {
        await GoogleSignin.hasPlayServices();
        const userInfo = await GoogleSignin.signIn();
        // this.setState({ userInfo, error: null });
        Alert.alert("success:" + JSON.stringify(userInfo));

    } catch (error) {
        if (error.code === statusCodes.SIGN_IN_CANCELLED) {
            // sign in was cancelled
            Alert.alert('cancelled');
        } else if (error.code === statusCodes.IN_PROGRESS) {
            // operation in progress already
            Alert.alert('in progress');
        } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
            Alert.alert('play services not available or outdated');
        } else {
            Alert.alert('Something went wrong', error.toString());
            this.setState({
                error,
            });
        }
    }
}
Это мои данные, поэтому, пожалуйста, помогите мне в этом, я не могу найти подходящее решение в Интернете. И да, мои SHA1 и clientID верны, я уже проверил это.

 29.01.2019 10:02
22
5
33 547
16
Данный вопрос помечен как решенный
 Ответы 16
 Ответ принят как подходящий
У меня тоже была эта проблема, и я просмотрел множество ответов, в которых говорилось, что проверьте идентификатор вашего клиента и хэш ключа, оба из которых, как я был уверен, были правильными.

У меня это заработало: я открыл идентификаторы OAuth в консоли управления проектом (не Firebase) в https://console.cloud.google.com/apis/credentials и добавил идентификатор клиента Android Oauth с правильной подписью (по какой-то причине у меня не было ни одного из них раньше). Повторно загрузите JSON-файл GoogleServices.

Мне также нужно было установить для webClientId значение «client_type»: 3 Идентификатор клиента Oauth. Тогда это сработало.

 27.05.2019 06:53
Это просто из-за того, что ваш androidClientId не соответствует вашему проекту консоли Google.

создайте новый идентификатор клиента аутентификации из консоли API вашего проекта: https://console.developers.google.com/apis/credentials

обновить конфигурацию до: myfile.js, например:

GoogleSignin.configure({ androidClientId:'YOUR CLIENT ID' )} 

 20.09.2019 11:49
Для нативных проектов React:

В контрольном списке есть много пунктов, чтобы избавиться от DEVELOPER_ERROR. Кажется, существует много путаницы в том, где нужно установить ключ SHA-1.

После того, как вы создали android client_id в консоли разработчика Google, у вас есть возможность установить ключ SHA-1 и имя пакета.

Вы можете получить имя пакета из AndroidManifest.xml (projPath/android/app/src/main/AndroidManifest.xml) и установить его в текстовом поле в консоли разработчика Google (очень важно проверять наличие опечаток).

Затем извлеките свой ключ SHA-1 из debug.keystore, используя следующую команду, для которой пароль «android»

Сначала выясните местоположение хранилища ключей:

Ваше приложение может выбирать из

     `pathToReactNativeProj/projName/android/app/debug.keystore`
или: ~/.android/debug.keystore

Затем извлеките свой ключ SHA-1 из debug.keystore, используя следующую команду, для которой пароль — android.

keytool -exportcert -alias androiddebugkey -keystore pathToKeyStore -list -v

скопируйте и вставьте сгенерированный ключ SHA-1. Это должно решить проблему.

Код выглядит следующим образом:

try {
      GoogleSignin.configure(
      {
        //webClientId is required if you need offline access
        offlineAccess: true,
        webClientId:'2423432-43234234232432423234.apps.googleusercontent.com',
        androidClientId: '3242343242322432-2342323432232324343323.apps.googleusercontent.com',
        scopes: ['profile', 'email']
      });
      await GoogleSignin.hasPlayServices();
      console.info("reached google sign in");
      const userInfo = await GoogleSignin.signIn();
      console.info(userInfo);
      this.setState({ userInfo });
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.info("error occured SIGN_IN_CANCELLED");
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.info("error occured IN_PROGRESS");
        // operation (f.e. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.info("error occured PLAY_SERVICES_NOT_AVAILABLE");
      } else {
        console.info(error)
        console.info("error occured unknow error");
      }
    }
Путаница вокруг ключа firebase SHA-1:

Установка этого ключа не требуется для получения информации о пользователе из Google. Если вы не используете firebase для хранения данных пользователей, полученных из Google, вам не нужно об этом беспокоиться.

 22.09.2019 18:07
Я думаю, что иногда старый отпечаток пальца (от другого разработчика в прошлом) может конфликтовать. Так что SHA1 должен быть правильным. Удалите старый SHA-1 и повторно загрузите google-services.json.

 21.05.2020 15:02
Я пробовал keytool -exportcert -keystore ~/.android/debug.keystore -list -v, который, конечно же, давал мне ключ SHA1, но он не работал, после некоторого поиска я также заглянул в свою папку project/android/app и обнаружил, что там тоже есть ключ debug.keystore (чей пароль по умолчанию — android, в случае некоторые должны знать) поэтому я попробовал cd android и команду keytool -exportcert -keystore app/debug.keystore -list -v, и ключ, который я получил, работал очень хорошо. Надеюсь, это поможет.

 09.06.2020 12:12
В моем случае мой ключ SHA-1, который я добавил в проект firebase, недействителен, потому что я получил его от /Users/apple/.android/debug.keystore.

Правильный SHA-1 должен находиться в папке android внутри примера проекта: /Users/apple/Documents/Project/testGoogleFirebaseLogin/android/app/debug.keystore (testGoogleFirebaseLogin — это имя папки моего проекта)

Итак, самый удобный способ — cd android && ./gradlew signingReport. Он сгенерирует много-много строк данных, прокрутите вниз и найдите SHA-1 из того, у которого есть Store: (your project path).

ПРИМЕЧАНИЕ. Не тот, у которого есть Store: /Users/apple/.android/debug.keystore.

(Извините за мое знание английского, я буду признателен, если кто-нибудь исправит мою грамматику и сделает этот ответ более легким для чтения)

 21.09.2020 10:31
Для тех, кто все еще ищет решения:

Пожалуйста, сопоставьте свой отпечаток ключа в консоли Firebase.

Не инициализируйте конфигурацию ключами, повторюсь, не предоставляйте никаких объектов конфигурации в функции .configure() Сделайте это GoogleSignIn.configure().

Пункт 2 решит проблему. :)

 17.12.2020 11:34
Добавьте значение ключа SHA1 в файл google-services.json. Для этого откройте google-services.json файл в любом текстовом редакторе и добавьте

"certificate_hash": "5e8f16062ea3cd2c4a0d547876baa6f38cabf625"

с вашим значением хеша без двоеточия (:) в android_client_info

Демонстрационный файл google-services.json

{
  "project_info": {
    "project_number": "108005055433",
    "firebase_url": "https://se-ai-camera.firebaseio.com",
    "project_id": "demo-app",
    "storage_bucket": "demo-app.appspot.com"
  },
  "client": [
    {
      "client_info": {
        "mobilesdk_app_id": "1:108005055433:android:323bf88853cd2899872618",
        "android_client_info": {
          "package_name": "com.myapp",
          "certificate_hash": "5e8f16062ea3cd2c4a0d547876baa6f38cabf625"
        }
      },
      "oauth_client": [
        {
          "client_id": "108005055433-q748qmcrn9a3j4qmg9srrkbotvr4emh1.apps.googleusercontent.com",
          "client_type": 3
        }
      ],
      "api_key": [
        {
          "current_key": "AIzaSyAuGCMQoW0tM7QMhpAgMIi0sK3vj0Nj8lk"
        }
      ],
      "services": {
        "appinvite_service": {
          "other_platform_oauth_client": [
            {
              "client_id": "108005055433-q748qmcrn9a3j4qmg9srrkbotvr4emh1.apps.googleusercontent.com",
              "client_type": 3
            }
          ]
        }
      }
    }
  ],
  "configuration_version": "1"
}
или добавьте ключ SHA1 в настройки приложения (консоль firebase) и загрузите обновленный файл google-services.json.

Затем измените параметр метода GoogleSignIn.configure() на пустой. Это самый важный шаг.

 18.12.2020 07:38
Прохождение для разных режимов:

Разработка Firebase
запустить cd android && ./gradlew signingReport.
Скопируйте хэш SHA-1 и вставьте его в консоль firebase в разделе Android в настройках проекта.
Загрузите файл google-services.json из настроек Firebase и вставьте файл в android/app.
Используйте clientId client_type: 3 клиента внутри config.
Разработка без Firebase
запустить cd android && ./gradlew signingReport.
Скопируйте хэш SHA-1
Перейдите к Консоль облачной платформы Google и нажмите Create Credentials -> OAuthClientID. Выберите тип Android, вставьте хэш и заполните форму.
Создайте еще один клиент, нажав Create Credentials, но на этот раз выберите тип Web application.
Используйте веб-клиент в своем коде
Производственная/Релизная версия
Перейдите в консоль Google Play и скопируйте ключ SHA-1 с Release -> Setup -> App Integrity.
Перейдите к Консоль облачной платформы Google и нажмите Create Credentials -> OAuthClientID. Выберите тип Android, вставьте хэш и заполните форму.
Создайте еще один клиент, нажав Create Credentials, но на этот раз выберите тип Web application.
Используйте веб-клиент в своем коде
 26.05.2021 15:16
Я тоже застрял в этой ситуации, когда публиковал свое первое приложение. Документация React Native рассказывает о создании хранилища ключей. Но поскольку я использовал firebase для аутентификации Google, в настройках проекта необходимо указать sha этого хранилища ключей.

Чтобы получить SHA1 из сгенерированного хранилища ключей, выполните следующие команды:

cd android
cd app

keytool -list -v -keystore {keystore-name}.keystore -alias {alias-name}
Теперь запросит пароль. введите пароль, который вы создали при создании хранилища ключей. Он распечатает все детали, и здесь вы можете найти SHA1. Скопируйте отпечаток SHA1 и добавьте в консоль firebase> настройки проекта> приложение для Android.

 01.06.2021 20:33
Люди, которые используют Firebase для входа в Google

Я публикую этот ответ, потому что я пробовал много методов, и только это работало нормально для меня. Проблема возникает из-за того, что в RN версии 0.61 был представлен новый debug.keystore. Из-за этого затрагиваются существующие/новые проекты.

Чтобы решить эту проблему,

Создайте новый ключ отладки Android в папке android/app. Перейдите в корневую папку вашего приложения для реагирования и выполните приведенную ниже команду.
keytool -list -v -keystore ./android/app/debug.keystore -alias androiddebugkey -storepass android -keypass android

После запуска вышеуказанной команды в терминале отобразится SHA1. Скопируйте это.

Перейдите в свой проект firebase.console и на вкладке General в project settings вставьте скопированный SHA1 и сохраните его.
Сделанный. Теперь запустите приложение, и оно должно работать нормально.

Для получения дополнительной информации https://github.com/react-native-google-signin/google-signin/issues/823

 14.06.2021 12:43
Убедитесь, что вы добавили отладочные и выпускные отпечатки пальцев в настройках проекта firebase.

В противном случае создайте отпечатки ключей отладки и выпуска с помощью app/build.gradle -> signingConfigs -> debug.

$ keytool -list -v -keystore android/app/debug.keystore -alias androiddebugkey -storepass android -keypass android


$ keytool -list -v -keystore android/app/release.keystore -alias androidrelease-aliaskey -storepass android -keypass android
затем скопируйте отпечатки sha1/sha256 и добавьте их в project settings -> firebase.

 15.06.2021 09:30
проблема для меня заключалась в использовании webClientID без androidClientID.

webClientID: в google-services.json => "client_type": 3

androidClientID: в google-services.json => "client_type": 1 Затем в вашем файле js:

 GoogleSignin.configure({
      androidClientId:
"something.apps.googleusercontent.com",
      webClientId:
 "something.apps.googleusercontent.com",
 });
 26.08.2021 16:21
В React Native есть 2 типа хранилищ ключей:

debug.keystore: только для отладки.
yourownkeystore.keystore: это для производства. и вам нужно его создать. проверьте эту ссылку, чтобы узнать, как: https://reactnative.dev/docs/signed-apk-android
пока в производстве. при создании yourownkeystore.keystore. вы получите определенный SHA-1, который будет использоваться для производства. возьмите это для yourownkeystore.keystore и замените его в консоли firebase вашего проекта. затем повторно загрузите файл google-services.json и замените его в своем приложении android/app. затем получите clientID и androidID из этого файла json и поместите их в конфигурацию вашего метода подписи Google в js.

 26.08.2021 22:31
попробуй это, не использовать webClientId и offlineAccess: true

 GoogleSignin.configure({
     ClientId:
        '48774575517-o9j0crni6shsal3jnoerm1o19pdqkg05.apps.googleusercontent.com',
      
    });
мне это помогло, и я не использую firebase, googlePlayServicesAuthVersion = "15.0.1", classpath 'com.google.gms: google-services: 3.2.1', ничего такого

просто я устанавливаю

npm i @react-native-google-signin/google-signin
cd android и gradlew clean
Теперь запустите приложение, и оно должно работать нормально.

 28.09.2021 11:58
Для решения этой проблемы необходимо установить @react-native-google-signin/google-signin

и следуйте этому:



 31.10.2021 14:45
Другие вопросы по теме
В App Bar с кнопками material-ui/core’: v3.9.1 обрезка backgroundImage
Конфликт со статическим классом реакции и контекстом реакции (компонент высокого порядка)
В то время как this.state является объектом Javascript, почему состояние равно null даже после передачи в него состояния, содержащего данные?
Как выбрать часть текста в текстовом поле в событии onFocus с интерфейсом материала в React?
Реагировать на изменение динамического состояния не просыпается
Push-уведомление не работает в React Native
Как передать этот API локального сервера в веб-API для развертывания моего приложения в героку?
Реализация условной логики через свойства объекта
Обновить токен в приложении Reactjs redux
В чем разница между шаблоном React HOC и render-props?
Похожие вопросы
Как реализовать и нарисовать пользовательскую кнопку на Android SurfaceView
Загрузка массива JSON с несколькими файлами
Андроид макс. размер пользовательского уведомления
Как ИТ-администраторы могут настроить приложение Android с помощью управляемых конфигураций
Поддерживает ли Recyclerview.addOnItemTouchListener ввод с удаленного управления?
Планирование текстовых сообщений
Установка выбранного элемента счетчика с помощью JSON
При удалении изображения из каталога приложения оно автоматически появляется в галерее
Если я активирую какую-то часть адаптера запроса Firebase, она не работает, хотя другие работают
Изображение не отображается в imageView
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
Окно не определено в приложении Next.js React
Вопросы
JAVASCRIPT
Окно не определено в приложении Next.js React
В моем приложении Next.js я не могу получить доступ к window:

Unhandled Rejection (ReferenceError): window is not defined

componentWillMount() {
    console.info('window.innerHeight', window.innerHeight);
}
Окно не определено в приложении Next.js React

 13.03.2019 21:53
123
1
195 680
16
Данный вопрос помечен как решенный
 Ответы 16
 Ответ принят как подходящий
Переместите код с componentWillMount() на componentDidMount():

componentDidMount() {
  console.info('window.innerHeight', window.innerHeight);
}
В Next.js componentDidMount() выполняется только на клиенте, где будут доступны window и другие специфичные для браузера API. Из Next.js вики:

Next.js is universal, which means it executes code first server-side, then client-side. The window object is only present client-side, so if you absolutely need to have access to it in some React component, you should put that code in componentDidMount. This lifecycle method will only be executed on the client. You may also want to check if there isn't some alternative universal library which may suit your needs.

В том же духе componentWillMount() будет устарел в v17 React, поэтому его фактически будет потенциально небезопасно использовать в самом ближайшем будущем.

 13.03.2019 22:01
componentWillMount() Хук жизненного цикла работает как на стороне сервера, так и на стороне клиента. В вашем случае сервер не будет знать о window или document во время обслуживания страницы, предлагается переместить код либо в

Решение 1:

componentDidMount()
Или, решение 2

Если это то, что вы хотите выполнять только в этом случае, вы можете написать что-то вроде:

componentWillMount() {
    if (typeof window !== 'undefined') {
        console.info('window.innerHeight', window.innerHeight);
    }
}
 14.03.2019 06:28
Другое решение является использование ̶p̶r̶o̶c̶e̶s̶s̶.̶b̶r̶o̶w̶s̶e̶r ̶ в выполнении лишь ̶ вашей команды в течение рендер на КЛИЕНТЕ ее стороны.

Но объект process устарел в Webpack5, а также в NextJS, потому что это переменная NodeJS только для серверной части.

Таким образом, мы должны использовать обратный объект window из браузера.

if (typeof window !== "undefined") {
  // Client-side-only code
}
Другим решением является использование хука реакции для замены componentDidMount:

useEffect(() => {
    // Client-side-only code
})
 16.03.2019 12:46
Без ССР

https://nextjs.org/docs/advanced-features/dynamic-import#with-no-ssr

import dynamic from 'next/dynamic'

const DynamicComponentWithNoSSR = dynamic(
  () => import('../components/hello3'),
  { ssr: false }
)

function Home() {
  return (
    <div>
      <Header />
      <DynamicComponentWithNoSSR />
      <p>HOME PAGE is here!</p>
    </div>
  )
}

export default Home
 09.09.2019 07:28
В конструкторе вашего класса Компонент вы можете добавить

if (typeof window === 'undefined') {
    global.window = {}
}
Пример:

import React, { Component } from 'react'

class MyClassName extends Component {

    constructor(props){
        super(props)
        ...
        if (typeof window === 'undefined') {
            global.window = {}
        }
}
Это позволит избежать ошибки (в моем случае ошибка произойдет после того, как я нажму кнопку перезагрузки страницы).

 25.11.2019 18:42
Если вы используете Реагировать на хуки, вы можете переместить код в Хук Эффекта:

import * as React from "react";

export const MyComp = () => {

  React.useEffect(() => {
    // window is accessible here.
    console.info("window.innerHeight", window.innerHeight);
  }, []);

  return (<div></div>)
}
Код внутри useEffect выполняется только на клиенте (в браузере), поэтому он имеет доступ к window.

 19.12.2019 04:42
Я столкнулся с той же проблемой, когда разрабатывал веб-приложение в next.js. Это устранило мою проблему, вам нужно обратиться к объекту окна в методе жизненного цикла или к хуку реакции. Например, скажем, я хочу создать переменную хранилища с избыточностью, и в этом хранилище я хочу использовать объект Windows, я могу сделать это следующим образом:

let store
useEffect(()=>{
    store = createStore(rootReducers,   window.__REDUX_DEVTOOLS_EXTENSION__ && 
    window.__REDUX_DEVTOOLS_EXTENSION__())
 }, [])
 ....
Итак, в основном, когда вы работаете с объектом окна, всегда используйте хук для игры или метод жизненного цикла componentDidMount()

 14.10.2020 20:03
Мне нужно получить доступ к хешу из URL-адреса, поэтому я придумал это

const hash = global.window && window.location.hash;
 07.03.2021 06:04
Для таких случаев в Next.js есть Динамический импорт.

Модуль, включающий библиотеку, которая работает только в браузере, рекомендуется использовать динамический импорт. Ссылаться

 05.07.2021 21:51
Ошибка возникает из-за того, что окно еще недоступно, а компонент все еще монтируется. Вы можете получить доступ к объекту окна после того, как компонент смонтирован.

Вы можете создать очень полезный хук для получения динамики window.innerHeight или window.innerWidth.

const useDeviceSize = () => {

  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)

  const handleWindowResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }

  useEffect(() => {
    // component is mounted and window is available
    handleWindowResize();
    window.addEventListener('resize', handleWindowResize);
    // unsubscribe from the event on component unmount
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return [width, height]

}

export default useDeviceSize 
Вариант использования:

const [width, height] = useDeviceSize();
 24.07.2021 12:45
Дата: 08.06.2021

Проверьте, существует ли объект окна или нет, а затем следуйте коду вместе с ним.

 function getSelectedAddress() {
    if (typeof window === 'undefined') return;

    // Some other logic
 }
 06.08.2021 17:15
Вы можете определить переменную состояния и использовать дескриптор события окна для обработки подобных изменений.

const [height, setHeight] = useState();

useEffect(() => {
    if (!height) setHeight(window.innerHeight - 140);
    window.addEventListener("resize", () => {
        setHeight(window.innerHeight - 140);
    });
}, []);
 01.09.2021 16:08
Вот простой в использовании обходной путь, который я сделал.

const runOnClient = (func: () => any) => {
  if (typeof window !== "undefined") {
    if (window.document.readyState == "loading") {
      window.addEventListener("load", func);
    } else {
      func();
    }
  }
};
Применение:

runOnClient(() => {
// access window as you like
})

// or async
runOnClient(async () => {
// remember to catch errors that might be raised in promises, and use the `await` keyword wherever needed
})
Это лучше, чем просто typeof window !== "undefined", потому что если вы просто проверите, что окно не является неопределенным, оно не будет работать, если ваша страница была перенаправлена ​​на, оно просто срабатывает один раз при загрузке. Но этот обходной путь работает, даже если страница была перенаправлена, а не только один раз во время загрузки.

 18.10.2021 12:35
Я хочу оставить этот подход, который показался мне интересным, для будущих исследователей. Он использует специальный хук useEventListener, который можно использовать во многих других случаях.

Обратите внимание, что вам нужно будет внести небольшое изменение в исходное сообщение, как я предлагаю здесь.

Таким образом, это закончится так:

import { useRef, useEffect } from 'react'

export const useEventListener = (eventName, handler, element) => {
  const savedHandler = useRef()

  useEffect(() => {
    savedHandler.current = handler
  }, [handler])

  useEffect(() => {
    element = !element ? window : element
    const isSupported = element && element.addEventListener
    if (!isSupported) return

    const eventListener = (event) => savedHandler.current(event)

    element.addEventListener(eventName, eventListener)

    return () => {
      element.removeEventListener(eventName, eventListener)
    }
  }, [eventName, element])
}

 30.11.2021 23:18
Лучшее решение

import dynamic from 'next/dynamic';

const Chart = dynamic(()=> import('react-apexcharts'), {
    ssr:false,
})
 02.12.2021 16:43
Если это приложение NextJS и внутри _document.js, используйте ниже:

<script dangerouslySetInnerHTML = {{
        __html: `
            var innerHeight = window.innerHeight;
        `
        }} />
 16.12.2021 11:49
Другие вопросы по теме
Влияет ли Checked на событие onChange?
SetState() приводит к тому, что переменная состояния не определена
Доступ к зависимостям для компонента react-toggle
Гэтсби: как передавать данные в React Context во время сборки
Semantic UI React: как переместить кнопку слева направо
Плавная анимация смахивания вверх (React Native Animation)
ReactJS: рендеринг массива изображений
Есть ли способ поймать событие, когда все вложенные переходы завершены?
Полное размещение веб-приложения на экране с помощью React
Как отправить пример входа в Material UI?
Похожие вопросы
Php - Как я могу отображать время после выбранного значения в том же поле ввода
Нажмите кнопку, чтобы добавить в поле field_tag ​​rails jQuery
JavaScript: остановить анимацию на индикаторе выполнения
Почему «ответ» недоступен в текущем контексте?
Как кнопка показать и скрыть html-форму с угловым
Обрабатывает ли сборщик мусора Typescript/Javascript циклические ссылки или утечка памяти?
Как вызвать метод асинхронного контроллера MVC из ajax
Как нарисовать изображение мазком кисти на холсте
Как эффективно создать хронологическую временную шкалу анимации в CSS или Javascript?
Неверные данные: отсутствует разделитель ":" [0x3a] nodejs
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
Если указано, "прокси" в package.json должен быть строкой
Вопросы
REACTJS
Если указано, "прокси" в package.json должен быть строкой
Я хотел бы иметь прокси в моем реактивном клиенте, мой package.json содержит:

...
"scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "proxy": {
    "/auth/google": {
      "target": "http://localhost:5000"
    }
   },
...
Но когда я его запустил, у меня возникла ошибка

When specified, "proxy" in package.json must be a string.
[1] Instead, the type of "proxy" was "object".
[1] Either remove "proxy" from package.json, or make it a string.
Я попытался преобразовать в строку, ошибок нет, но прокси не работает

"proxy": "http://localhost:5000"
Мой App.js

<div className = "App">
        <header className = "App-header">
          <img src = {logo} className = "App-logo" alt = "logo" />
          <p>hey there</p>
          <a href = "/auth/google">Sign In With Google</a>
        </header>
      </div>
 02.10.2018 11:54
48
1
47 893
17
 Ответы 17
Я думаю, это проблема "создания-реагирования-приложения".

Вы можете перейти на https://github.com/facebook/create-react-app/issues/5103 к переходу на новый метод работы с прокси.

Короче говоря, вам просто нужно установить новую библиотеку под названием «http-proxy-middleware».

npm install http-proxy-middleware --save
Затем создайте новый файл src / setupProxy.js и введите

const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(proxy('/auth/google', { target: 'http://localhost:5000/' }));
};
Надеюсь, это поможет решить вашу проблему, удачного взлома!

 02.10.2018 16:51
Проблема, с которой вы столкнулись, связана с CRA v2.

Во-первых, вам не потребуется дополнительная настройка, если вы просто используете в своем прокси-сервере обычную строку. Но в тот момент, когда вы используете объект, вы используете расширенную конфигурацию.

Итак, вам нужно будет выполнить шаги, перечисленные ниже:

Установите http-proxy-middleware, набрав npm i --save http-proxy-middleware

Удалите записи из package.json:

"proxy": {
    "/auth/google": {
        "target": "http://localhost:5000"
    }
}
Теперь создайте установочный файл для вашего прокси. Вы должны назвать его setupProxy.js в папке src на стороне клиента и ввести следующий код:
const proxy = require('http-proxy-middleware');
module.exports = function(app) {
    app.use(proxy('/auth/google', 
        { target: 'http://localhost:5000/' }
    ));
}
для получения дополнительной информации проверьте это

 03.10.2018 07:29
Сначала установите http-proxy-middleware с помощью npm или Yarn:

$ npm install http-proxy-middleware --save
$ # or
$ yarn add http-proxy-middleware
Затем создайте src / setupProxy.js и поместите в него следующее содержимое:

const proxy = require('http-proxy-middleware')

module.exports = function(app) {
  // ...
}
Теперь перенесите каждую запись в вашем прокси-объекте одну за другой, например:

"proxy": {
  "/api": {
    "target": "http://localhost:5000/"
    },
  "/*.svg": {
    "target": "http://localhost:5000/"
  }
}
Поместите записи в src/setupProxy.js следующим образом:

const proxy = require('http-proxy-middleware')

module.exports = function(app) {
  app.use(proxy('/api', { target: 'http://localhost:5000/' }))
  app.use(proxy('/*.svg', { target: 'http://localhost:5000/' }))
}
Вы также можете использовать здесь полностью настраиваемую логику! Я получил рабочий ответ по этой ссылке и, следовательно, обмен-https://github.com/facebook/create-react-app/issues/5103

 25.11.2018 18:32
После создания файла на стороне клиента (приложение React) с именем src/setupProxy.js обязательно перезапустите сервер. Необходимо перезапустить файл package.json, поскольку вы работали с файлом вне исходного каталога.

 15.02.2019 21:06
install "http-proxy-middleware" into your client, "not inside server".

Добавьте setupProxy.js в каталог client / src /. (должно быть так: client / src / setupProxy.js)

Добавьте к нему следующие строки.

const proxy = require("http-proxy-middleware");

module.exports = app => {
   app.use(proxy("/auth/google", { target: "http://localhost:5000/" }));
};
Вот и все, войдите в консоль разработчика Google и добавьте в свой проект localhost: 3000 / auth / google / callback.

 09.03.2019 20:46
Измените прокси на что-то вроде этого и надейтесь, что он будет работать так же, как и у меня.

"прокси": "http: // локальный: 5000 / auth / google"

 19.03.2019 11:49
В моих случаях мне не понадобился src / setupProxy.js ... Я делаю это с помощью axios ... Проверить прокси Axios

Проверьте библиотеку узлов, если она у вас есть или нет: http-proxy-middleware необязательно, мне это не нужно !!!

Просто попробуйте перезапустить серверную часть, и все !!! Добавить для проверки:

componentDidMount(){
    axios.get('/api/path-you-want').then(response=>{
      console.info(response)
    })
  } 
 09.04.2019 17:05
https://github.com/facebook/create-react-app/issues/5103

Переместите расширенную конфигурацию прокси в src / setupProxy.js

Это изменение требуется только для лиц, которые использовали расширенную конфигурацию прокси в v1.

Чтобы проверить, требуется ли действие, найдите ключ прокси в package.json. Затем следуйте таблице ниже.

Я не смог найти прокси-ключ в package.json Никаких действий не требуется! Значение прокси - это строка (например, http: // локальный: 5000) Никаких действий не требуется! Значение прокси - это объект Следуйте приведенным ниже инструкциям по миграции. Если ваш прокси является объектом, это означает, что вы используете расширенную конфигурацию прокси.

Опять же, если ваше поле прокси является строкой, например http: // локальный: 5000, ничего делать не надо. Эта функция по-прежнему поддерживается и ведет себя так же.

Сначала установите http-proxy-middleware с помощью npm или Yarn:

$ npm install http-proxy-middleware --save
$ # or
$ yarn add http-proxy-middleware
Затем создайте src / setupProxy.js и поместите в него следующее содержимое:

const proxy = require('http-proxy-middleware')

module.exports = function(app) {
  // ...
}
Теперь перенесите каждую запись в вашем прокси-объекте одну за другой, например:

"proxy": {
  "/api": {
    "target": "http://localhost:5000/"
    },
  "/*.svg": {
    "target": "http://localhost:5000/"
  }
}
Поместите записи в src / setupProxy.js следующим образом:

const proxy = require('http-proxy-middleware')

module.exports = function(app) {
  app.use(proxy('/api', { target: 'http://localhost:5000/' }))
  app.use(proxy('/*.svg', { target: 'http://localhost:5000/' }))
}
Вы также можете использовать здесь полностью настраиваемую логику! Раньше это было невозможно.

Это сработало.

 15.07.2019 18:09
app.use(
  '/api',
  proxy({ target: 'http://www.example.org', changeOrigin: true })
);


changeOrigin:true
 22.08.2019 05:55
Это связано с ошибкой в ​​create-react-app version2.

Просто беги

$ npm install react-scripts@next --save
$ # or
$ yarn add react-scripts@next
Ответ найден по адресу:

https://github.com/facebook/create-react-app/issues/5103

 13.09.2019 00:16
        ...
        "scripts": {
            "start": "react-scripts start",
            "build": "react-scripts build",
            "test": "react-scripts test",
            "eject": "react-scripts eject"
          },
          "proxy": {
            "/auth/google": {
              "target": "http://localhost:5000"
            }
           },
        ...

    When specified, "proxy" in package.json must be a string.
    Just change `"proxy": "http://localhost:5000"` and you are good to go.
    If that doesn't solve the problem then register your proxy using **http-proxy-middleware**

    $ npm install http-proxy-middleware --save
    $ # or
    $ yarn add http-proxy-middleware

    Then create setypProxy.js file under src directory the put the following code.
const proxy = require('http-proxy-middleware');
module.exports = app => {
  app.use(
    proxy('/auth/google', {
      target: 'http://localhost:5000'
    })
  );
 app.use(
    proxy('/auth/facebook', {
      target: 'http://localhost:6000'
    })
  );
};
 15.09.2019 10:30
Если вам нужно отправлять запросы прокси и переписывать URL-адреса, например localhost:3000/api/backend/some/method на https://api-server.example.com/some/method, вам также необходимо использовать опцию pathRewrite:

const {createProxyMiddleware} = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(
    "/api/backend",
    createProxyMiddleware({
      target: "https://api-server.example.com",
      changeOrigin: true,
      pathRewrite: {
        "^/api/backend": "",
      },
    })
  );
};
 14.03.2020 19:08
Для меня сработало следующее:

Удалите «прокси» из вашего package.json.

Установите http-proxy-middleware в каталог клиента. Для этого перейдите в каталог клиента и запустите «npm i --save http-proxy-middleware». Затем создайте новый файл в каталоге src вашего клиента с именем «setupProxy.js». Поместите в этот файл следующий код:

const { createProxyMiddleware } = require('http-proxy-middleware');
const proxy = require('http-proxy-middleware');
module.exports = function(app) {
    app.use(createProxyMiddleware('/api/', // replace with your endpoint
        { target: 'http://localhost:8000' } // replace with your target
    ));
}
перезапустите сервер, и все будет в порядке.

 14.05.2020 19:24
Для людей в 2020 году, Установите http-proxy-middleware, набрав npm i --save http-proxy-middleware в папке client.

Удалите записи из package.json:

"proxy": {
    "/auth/google": {
        "target": "http://localhost:5000"
    }
}
Теперь создайте установочный файл для вашего прокси. Вы должны назвать его setupProxy.js в папке src на стороне клиента и ввести следующий код:

const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/auth/google", { target: "http://localhost:5000/" })
  );
};
PS: Вам не нужно включать setupProxy.js в server.js или index.js. просто скопируйте и вставьте.

 29.06.2020 23:39
Создайте файл setupProxy.js внутри папки src и скопируйте и вставьте приведенный ниже код.

const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/auth/google", {
      target: "http://localhost:5000/",
    })
  );
};
 29.10.2020 17:00
На данный момент я использую Реагировать 16.8.13, это отлично работает:

1- удалить "proxy": {***} из файла package.json

2-тип npm install http-proxy-middleware

3- создать файл src/setupProxy.js

4-вставьте следующий код:

const {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = (app) => {
    app.use(
        createProxyMiddleware('/endpoint/*', {
            target: 'http://address/',
            secure: false,
        }),
    );
};

 02.11.2020 10:38
У меня это сработало (как уже ответили несколько человек). Но я пишу это на всякий случай, если кто-то спросит, верен ли этот ответ в 2021 году.

Удалите это из файла package.json:
  "proxy": {
            "/auth/google": {
              "target": "http://localhost:5000"
            }
Установите промежуточное ПО прокси, запустив npm install --save http-proxy-middleware.
Создайте файл setupProxy.js в своем файле src (рядом с файлом index.js) на веб-интерфейсе.
В этом файле setupProxy.js поместите:
const proxy = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(proxy('/auth/google', 
        { target: 'http://localhost:5000/' }
    ));
Конечно, ваш порт может быть любым. Это не обязательно должно быть 5000. Где бы вы ни работали с серверной службой. Вот и все. Вам не нужно никуда импортировать этот файл. Работает как есть.

 30.04.2021 16:13
Другие вопросы по теме
Reactstrap с модулями CSS
Expo React Navigation кнопка возврата Android
Как применять разные стили в зависимости от имени пути в браузере?
Состояние настройки реакции не работает, когда я создаю поля формы динамически
Как разрешить функции вызывать всплывающее окно загрузочного мода?
Определите место назначения API с помощью React на производственном сервере
Массив получает данные только при обновлении страницы
React-select не показывает значение в Laravel-mix
Плагин не определен в файле конфигурации webpack
Функция электронной коммерции для выбора размера или цвета продукта
Похожие вопросы
Перевести название вкладки React-admin
React: onClick - получить только выбранный элемент, а не дочерние элементы
Вход в Facebook с помощью React Js
Почему состояние не объявляется, если оно было установлено правильно?
Не удалось создать собственный проект с реакцией, чтобы сервер вернул ошибку ответа 500 в собственном ответе?
React Redux - невозможно передать строку через действие отправки
Как создать прозрачный topBar и нарисовать за ним (RNN V2)
Программно найти диапазон выбранного листа
Показать / скрыть компонент в React с помощью состояния
У меня вопрос о событиях "Фокус" и "Размытие"
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

				  RedDeveloper
Блог
Вопросы
Теги
Поиск...
Приложение Create React не устанавливается, показывает ошибку и прерывает установку
Вопросы
NODE.JS
Приложение Create React не устанавливается, показывает ошибку и прерывает установку
Я переустановил Node.js и Yarn. Теперь я получаю эту ошибку.

Информация о моей среде:

Node: v8.12.0

NPM: 6.4.1

Yarn: 1.10.1

OS: Windows 10

PS C:\Users\mdbel\Desktop\Project\redux> npx create-react-app learnredux

Creating a new React app in C:\Users\mdbel\Desktop\Project\redux\learnredux.

Installing packages. This might take a couple of minutes.
Installing react, react-dom, and react-scripts...

yarn add v1.10.1
[1/4] Resolving packages...
[2/4] Fetching packages...
error An unexpected error occurred: "https://registry.yarnpkg.com/@xtuc/long/-/long-4.2.1.tgz: Request failed \"404 Not Found\"".
info If you think this is a bug, please open a bug report with the information provided in "C:\\Users\\mdbel\\Desktop\\Project\\redux\\learnredux\\yarn-error.log".
info Visit https://yarnpkg.com/en/docs/cli/add for documentation about this command.

Aborting installation.
  yarnpkg add --exact react react-dom react-scripts --cwd C:\Users\mdbel\Desktop\Project\redux\learnredux has failed.

Deleting generated file... package.json
Deleting generated file... yarn.lock
Done.
 18.10.2018 22:33
14
1
26 778
18
Данный вопрос помечен как решенный
 Ответы 18
Я столкнулся с той же проблемой при использовании npx и смог решить ее, выполнив следующие действия:

Обновлен до последней версии пряжи: $ npm i @yarn@latest
Удалить папку node_modules
Удалите yarn.lock (если он существует).
Удалите .npmrc из папки пользователя.
Если проблема не исчезла, вы можете использовать команду yarn: $ yarn create react-app learnredux.

yarn create доступен в пряжи 0.25+.

 18.10.2018 22:59
У меня была такая же проблема, и я решил ее:

Установка последней версии node, npm и yarn.

npm install -g npm@latest
nvm install node
npm install -g yarn

nvm устанавливает Node.js, а npm управляет пакетами.

 25.10.2018 01:46
Я решил эту проблему, удалив файл .yarnrc из C:\Users\yourUserName\

 31.12.2018 22:59
обновление до последней стабильной версии пряжи и удаление папки кэша пряжи в папке AppData решило мою проблему C: \ Users \ test \ AppData \ Local \ Yarn

 02.04.2019 17:31
У меня была такая же ошибка на моем Mac.

Я только что повторно загрузил установщик с веб-сайта Node.js. Это должно переустановить все зависимости и убедиться, что все пути действительны.

https://nodejs.org/en/download/

 24.04.2019 05:33
После того, как вы очистили кеш пряжи, запустив:

yarn cache clean
затем последующие вызовы:

npx create-react-app your-app
буду работать.

 03.06.2019 17:51
Я также решил свою проблему, установив последнюю версию узла из

https://nodejs.org/en/download/

И затем я запускаю команду ниже

npm install -g create-react-app
в терминале За ним следует «создать-реагировать-приложение» или «создать-реагировать-приложение». если вы уже находитесь в папке.

 21.12.2019 10:03
У меня была такая же проблема, тогда я попробовал следующую команду, и она устранила мою проблему
npm cache clean --force
Вышеупомянутая команда не решила вашу проблему, попробуйте следующую.

npm init -y
npx create-react-app your-app-name
 29.01.2020 06:55
 Ответ принят как подходящий
удаление .npmrc из C:\Users\you\.npmrc также может решить проблему.

 29.01.2020 08:54
Попробуй это!

npm install -g npm@latest  

npm install node


npm install -g yarn


npx create-react-app appname

cd firstapp

yarn start
 03.02.2020 05:09
Обновите модули узлов до версии 13.12.0, которая мне подходит

https://nodejs.org/es/download/current/

 03.04.2020 18:44
Да, у меня такая же проблема, и я не могу ее решить, но после удаления yarn и обновления узла до последней версии.

Также убедитесь, что вы установили

npm i -g create-react-app
после обновления пакетов.

Очистите кеш также, чтобы освободить его от ошибок, это определенно сработает.

 23.08.2020 04:50
Это может помочь в операционной системе Linux.

sudo npm install -g npm@latest
npm install node
npm init
npm install -g yarn
yarn cache clean
npx create-react-app my-app
 27.10.2020 09:59
Лучший способ для пользователей Windows - обновить пряжу Если вы используете npx и получили ошибку, чем обновить пряжу, используйте npx У меня такая же ошибка в Windows 8.1, я обновил пряжу, и она решила мою проблему

Npm I yarn@latest
npx creat-react-app  app name
 02.12.2020 18:35
Я столкнулся с той же проблемой. Похоже, это происходит при нарушении установки npm и node. Однако иногда очистка кеша не работает. Мне пришлось не просто удалить, но удалить / очистить все файлы npm и node в моей системе и снова установить их.

Удалить узел и npm

sudo rm -rf /usr/local/lib/node_modules
sudo rm -rf ~/.npm

sudo apt remove --purge npm
sudo apt remove --purge node
sudo apt remove --purge nodejs
Проверьте, удалены ли npm и узел, запустив: which node и which npm Если вы все еще видите некоторые папки, попробуйте удалить их, используя:

sudo apt-get remove nodejs
sudo apt-get remove npm
Обновите систему, на всякий случай

sudo apt-get update
Установите узел и npm

sudo apt-get install nodejs
sudo apt-get install npm
Проверить установку

npm -v
node -v
Примечание: Здесь необходимо удалить существующие модули и вернуть их обратно. Мне также пришлось вручную удалить nodejs с помощью Программы и характеристики (для Windows).

 03.12.2020 17:34
Я случайно спрятал файл .yarnrc, и это вызвало проблему.

 20.12.2020 18:00
У меня такая же проблема. Вместо пряжи вы можете использовать npm для создания приложения. Просто добавьте флаг --use-npm так:

npx create-react-app app --use-npm
 08.01.2021 04:00
У меня сработала переустановка узла на последнюю версию.

https://nodejs.org/en/download/

 24.03.2021 10:10
Другие вопросы по теме
Как сбросить полосу загрузки в React JS?
Как изменить размер шрифта при нажатии кнопки?
Невозможно установить состояние после выполнения componentDidMount
Не может прочитать свойство 'name' неопределенной ошибки в React
Почему этот реактивный маршрутизатор не маршрутизирует правильно?
React - отправка сохраненных значений состояния в почтовом запросе - искаженные данные
Реагировать: состояние не срабатывает, возврат
Внутренний стиль в React
React array.splice вызывает метод несколько раз подряд
React fetch ('http: // localhost: 3000 / profile /: id')
Похожие вопросы
Функция фильтра не возвращает значение
Dialogflow v2 Nodejs Client Library UpdateIntent при добавлении обучающих фраз
Как очистить содержимое хеш-ссылок javascript?
Ошибка Mongoose TypeError: невозможно прочитать свойство googleID из undefined
Невозможно подключить MongoDB к nodejs
Как заставить Webpack и Typescript использовать внешнюю папку node_module?
Кукловод получает ответ по ссылке для скачивания pdf
React fetch ('http: // localhost: 3000 / profile /: id')
Отсутствующие параметры в объекте - не должны быть определены
Невозможно создать стабильную реализацию веб-сокета
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
Как использовать дросселирование или устранение дребезга с помощью React Hook?
Вопросы
REACTJS
Как использовать дросселирование или устранение дребезга с помощью React Hook?
Я пытаюсь использовать метод throttle из lodash в функциональном компоненте, например:

const App = () => {
  const [value, setValue] = useState(0)
  useEffect(throttle(() => console.info(value), 1000), [value])
  return (
    <button onClick = {() => setValue(value + 1)}>{value}</button>
  )
}
Поскольку метод внутри useEffect переопределяется при каждом рендеринге, эффект дросселирования не работает.

У кого-нибудь есть простое решение?

 13.02.2019 10:14
102
2
124 524
23
Данный вопрос помечен как решенный
 Ответы 23
 Ответ принят как подходящий
По прошествии некоторого времени я уверен, что гораздо проще справляться с вещами самостоятельно с помощью setTimeout/clearTimeout (и перемещая это в отдельный пользовательский хук), чем работать с функциональными помощниками. Обработка позже одного создает дополнительные проблемы сразу после того, как мы применим это к useCallback, который может быть воссоздан из-за изменения зависимости, но мы не хотим сбрасывать отложенное выполнение.

оригинальный ответ ниже

вам может (и, вероятно, понадобится) useRef для хранения значения между рендерами. Так же, как это рекомендуется для таймеров

Что-то такое

const App = () => {
  const [value, setValue] = useState(0)
  const throttled = useRef(throttle((newValue) => console.info(newValue), 1000))

  useEffect(() => throttled.current(value), [value])

  return (
    <button onClick = {() => setValue(value + 1)}>{value}</button>
  )
}
Что касается useCallback:

Это может работать также как

const throttled = useCallback(throttle(newValue => console.info(newValue), 1000), []);
Но если мы попытаемся воссоздать обратный вызов после изменения value:

const throttled = useCallback(throttle(() => console.info(value), 1000), [value]);
мы можем обнаружить, что это не задерживает выполнение: как только value изменяется, обратный вызов немедленно воссоздается и выполняется.

Так что я вижу useCallback в случае отложенного запуска не дает существенного преимущества. Тебе решать.

[UPD] изначально было

  const throttled = useRef(throttle(() => console.info(value), 1000))

  useEffect(throttled.current, [value])
но таким образом throttled.current связался с начальным value(0) замыканием. Поэтому он никогда не менялся даже на следующих рендерах.

Так что будьте осторожны, помещая функции в useRef из-за функции закрытия.

 13.02.2019 10:20
Я написал два простых хука (использовать эффект дросселирования и использовать дебаунс-эффект) для этого варианта использования, возможно, это будет полезно для кого-то еще, кто ищет простое решение.

import React, { useState } from 'react';
import useThrottledEffect  from 'use-throttled-effect';

export default function Input() {
  const [count, setCount] = useState(0);

  useEffect(()=>{
    const interval = setInterval(() => setCount(count=>count+1) ,100);
    return ()=>clearInterval(interval);
  },[])

  useThrottledEffect(()=>{
    console.info(count);     
  }, 1000 ,[count]);

  return (
    {count}
  );
}
 14.09.2019 10:35
Если вы используете его в обработчике, я совершенно уверен, что это способ сделать это.

function useThrottleScroll() {
  const savedHandler = useRef();

  function handleEvent() {}

  useEffect(() => {
    savedHandleEvent.current = handleEvent;
  }, []);

  const throttleOnScroll = useRef(throttle((event) => savedHandleEvent.current(event), 100)).current;

  function handleEventPersistence(event) {
    return throttleOnScroll(event);
  }

  return {
    onScroll: handleEventPersistence,
  };
}
 05.10.2019 20:29
Я использую что-то вроде этого, и он отлично работает:

let debouncer = debounce(
  f => f(),
  1000,
  { leading: true }, // debounce one on leading and one on trailing
);

function App(){
   let [state, setState] = useState();

   useEffect(() => debouncer(()=>{
       // you can use state here for new state value
   }),[state])

   return <div />
}
 07.12.2019 14:27
Это может быть крошечный пользовательский хук, например:

useDebounce.js

import React, { useState, useEffect } from 'react';

export default (value, timeout) => {
    const [state, setState] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => setState(value), timeout);

        return () => clearTimeout(handler);
    }, [value, timeout]);

    return state;
}
Пример использования:

import React, { useEffect } from 'react';

import useDebounce from '/path/to/useDebounce';

const App = (props) => {
    const [state, setState] = useState({title: ''});    
    const debouncedTitle = useDebounce(state.title, 1000);

    useEffect(() => {
        // do whatever you want with state.title/debouncedTitle
    }, [debouncedTitle]);        

    return (
        // ...
    );
}
// ...
Примечание: Как вы, наверное, знаете, useEffect всегда запускается при начальном рендеринге, и из-за этого, если вы используете мой ответ, вы, вероятно, увидите, что рендеринг вашего компонента выполняется дважды, не волнуйтесь, вам просто нужно написать еще один пользовательский хук. проверьте мой другой ответ для получения дополнительной информации.

 25.12.2019 20:24
В моем случае мне также нужно было пройти событие. Пошел с этим:

const MyComponent = () => {
  const handleScroll = useMemo(() => {
    const throttled = throttle(e => console.info(e.target.scrollLeft), 300);
    return e => {
      e.persist();
      return throttled(e);
    };
  }, []);
  return <div onScroll = {handleScroll}>Content</div>;
};
 04.03.2020 17:46
Я создал свой собственный хук под названием useDebouncedEffect, который будет ждать выполнения useEffect до тех пор, пока состояние не обновится на время задержки.

В этом примере ваш эффект будет зарегистрирован в консоли после того, как вы перестанете нажимать кнопку в течение 1 секунды.

Пример песочницыhttps://codesandbox.io/s/react-use-debounced-effect-6jppw

App.jsx
import { useState } from "react";
import { useDebouncedEffect } from "./useDebouncedEffect";

const App = () => {
  const [value, setValue] = useState(0)

  useDebouncedEffect(() => console.info(value), [value], 1000);

  return (
    <button onClick = {() => setValue(value + 1)}>{value}</button>
  )
}

export default App;
useDebouncedEffect.js
import { useEffect } from "react";

export const useDebouncedEffect = (effect, deps, delay) => {
    useEffect(() => {
        const handler = setTimeout(() => effect(), delay);

        return () => clearTimeout(handler);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [...deps || [], delay]);
}
Комментарий для отключения исчерпывающих отложений обязателен, если вы не хотите видеть предупреждение, потому что lint всегда будет жаловаться на отсутствие эффекта в качестве зависимости. Добавление эффекта в качестве зависимости будет запускать useEffect при каждом рендеринге. Вместо этого вы можете добавить проверку в useDebouncedEffect, чтобы убедиться, что он передает все зависимости. (увидеть ниже)

Добавление исчерпывающей проверки зависимостей в useDebouncedEffect

Если вы хотите, чтобы eslint проверял useDebouncedEffect исчерпывающие зависимости, вы можете добавить его в конфигурацию eslint в package.json

  "eslintConfig": {
    "extends": [
      "react-app"
    ],
    "rules": {
      "react-hooks/exhaustive-deps": ["warn", {
        "additionalHooks": "useDebouncedEffect"
      }]
    }
  },
https://github.com/facebook/react/tree/master/packages/eslint-plugin-react-hooks#advanced-configuration

 09.04.2020 20:36
useThrottle , useDebounce
Как использовать оба
const App = () => {
  const [value, setValue] = useState(0);
  // called at most once per second (same API with useDebounce)
  const throttledCb = useThrottle(() => console.info(value), 1000);
  // usage with useEffect: invoke throttledCb on value change
  useEffect(throttledCb, [value]);
  // usage as event handler
  <button onClick = {throttledCb}>log value</button>
  // ... other render code
};
useThrottle (Лодаш)
import _ from "lodash"

function useThrottle(cb, delay) {
  const options = { leading: true, trailing: false }; // add custom lodash options
  const cbRef = useRef(cb);
  // use mutable ref to make useCallback/throttle not depend on `cb` dep
  useEffect(() => { cbRef.current = cb; });
  return useCallback(
    _.throttle((...args) => cbRef.current(...args), delay, options),
    [delay]
  );
}
const App = () => {
  const [value, setValue] = useState(0);
  const invokeDebounced = useThrottle(
    () => console.info("changed throttled value:", value),
    1000
  );
  useEffect(invokeDebounced, [value]);
  return (
    <div>
      <button onClick = {() => setValue(value + 1)}>{value}</button>
      <p>value will be logged at most once per second.</p>
    </div>
  );
};

function useThrottle(cb, delay) {
  const options = { leading: true, trailing: false }; // pass custom lodash options
  const cbRef = useRef(cb);
  useEffect(() => {
    cbRef.current = cb;
  });
  return useCallback(
    _.throttle((...args) => cbRef.current(...args), delay, options),
    [delay]
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
<script src = "https://cdnjs.cloudflare.com/ajax/libs/react/16.13.0/umd/react.production.min.js" integrity = "sha256-32Gmw5rBDXyMjg/73FgpukoTZdMrxuYW7tj8adbN8z4 = " crossorigin = "anonymous"></script>
<script src = "https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.13.0/umd/react-dom.production.min.js" integrity = "sha256-bjQ42ac3EN0GqK40pC9gGi/YixvKyZ24qMP/9HiGW7w = " crossorigin = "anonymous"></script>
<script src = "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.15/lodash.min.js" integrity = "sha256-VeNaFBVDhoX3H+gJ37DpT/nTuZTdjYro9yBruHjVmoQ = " crossorigin = "anonymous"></script>
<script>var { useReducer, useEffect, useState, useRef, useCallback } = React</script>
<div id = "root"></div>
useDebounce (Лодаш)
import _ from "lodash"

function useDebounce(cb, delay) {
  // ...
  const inputsRef = useRef({cb, delay}); // mutable ref like with useThrottle
  useEffect(() => { inputsRef.current = { cb, delay }; }); //also track cur. delay
  return useCallback(
    _.debounce((...args) => {
        // Debounce is an async callback. Cancel it, if in the meanwhile
        // (1) component has been unmounted (see isMounted in snippet)
        // (2) delay has changed
        if (inputsRef.current.delay === delay && isMounted())
          inputsRef.current.cb(...args);
      }, delay, options
    ),
    [delay, _.debounce]
  );
}
const App = () => {
  const [value, setValue] = useState(0);
  const invokeDebounced = useDebounce(
    () => console.info("debounced", value),
    1000
  );
  useEffect(invokeDebounced, [value]);
  return (
    <div>
      <button onClick = {() => setValue(value + 1)}>{value}</button>
      <p> Logging is delayed until after 1 sec. has elapsed since the last invocation.</p>
    </div>
  );
};

function useDebounce(cb, delay) {
  const options = {
    leading: false,
    trailing: true
  };
  const inputsRef = useRef(cb);
  const isMounted = useIsMounted();
  useEffect(() => {
    inputsRef.current = { cb, delay };
  });

  return useCallback(
    _.debounce(
      (...args) => {
        // Don't execute callback, if (1) component in the meanwhile 
        // has been unmounted or (2) delay has changed
        if (inputsRef.current.delay === delay && isMounted())
          inputsRef.current.cb(...args);
      },
      delay,
      options
    ),
    [delay, _.debounce]
  );
}

function useIsMounted() {
  const isMountedRef = useRef(true);
  useEffect(() => {
    return () => {
      isMountedRef.current = false;
    };
  }, []);
  return () => isMountedRef.current;
}

ReactDOM.render(<App />, document.getElementById("root"));
<script src = "https://cdnjs.cloudflare.com/ajax/libs/react/16.13.0/umd/react.production.min.js" integrity = "sha256-32Gmw5rBDXyMjg/73FgpukoTZdMrxuYW7tj8adbN8z4 = " crossorigin = "anonymous"></script>
<script src = "https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.13.0/umd/react-dom.production.min.js" integrity = "sha256-bjQ42ac3EN0GqK40pC9gGi/YixvKyZ24qMP/9HiGW7w = " crossorigin = "anonymous"></script>
<script src = "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.15/lodash.min.js" integrity = "sha256-VeNaFBVDhoX3H+gJ37DpT/nTuZTdjYro9yBruHjVmoQ = " crossorigin = "anonymous"></script>
<script>var { useReducer, useEffect, useState, useRef, useCallback } = React</script>
<div id = "root"></div>
Настройки
1. Вы можете заменить Lodash своим собственным кодом throttle или debounce, например:

const debounceImpl = (cb, delay) => {
  let isDebounced = null;
  return (...args) => {
    clearTimeout(isDebounced);
    isDebounced = setTimeout(() => cb(...args), delay);
  };
};

const throttleImpl = (cb, delay) => {
  let isThrottled = false;
  return (...args) => {
    if (isThrottled) return;
    isThrottled = true;
    cb(...args);
    setTimeout(() => {
      isThrottled = false;
    }, delay);
  };
};

const App = () => {
  const [value, setValue] = useState(0);
  const invokeThrottled = useThrottle(
    () => console.info("throttled", value),
    1000
  );
  const invokeDebounced = useDebounce(
    () => console.info("debounced", value),
    1000
  );
  useEffect(invokeThrottled, [value]);
  useEffect(invokeDebounced, [value]);
  return <button onClick = {() => setValue(value + 1)}>{value}</button>;
};

function useThrottle(cb, delay) {
  const cbRef = useRef(cb);
  useEffect(() => {
    cbRef.current = cb;
  });
  return useCallback(
    throttleImpl((...args) => cbRef.current(...args), delay),
    [delay]
  );
}

function useDebounce(cb, delay) {
  const cbRef = useRef(cb);
  useEffect(() => {
    cbRef.current = cb;
  });
  return useCallback(
    debounceImpl((...args) => cbRef.current(...args), delay),
    [delay]
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
<script src = "https://cdnjs.cloudflare.com/ajax/libs/react/16.13.0/umd/react.production.min.js" integrity = "sha256-32Gmw5rBDXyMjg/73FgpukoTZdMrxuYW7tj8adbN8z4 = " crossorigin = "anonymous"></script>
<script src = "https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.13.0/umd/react-dom.production.min.js" integrity = "sha256-bjQ42ac3EN0GqK40pC9gGi/YixvKyZ24qMP/9HiGW7w = " crossorigin = "anonymous"></script>
<script>var { useReducer, useEffect, useState, useRef, useCallback } = React</script>
<div id = "root"></div>
2. useThrottle можно сократить, если всегда использовать с useEffect (то же самое для useDebounce):

const App = () => {
  // useEffect now is contained inside useThrottle
  useThrottle(() => console.info(value), 1000, [value]);
  // ...
};
const App = () => {
  const [value, setValue] = useState(0);
  useThrottle(() => console.info(value), 1000, [value]);
  return (
    <div>
      <button onClick = {() => setValue(value + 1)}>{value}</button>
      <p>value will be logged at most once per second.</p>
    </div>
  );
};

function useThrottle(cb, delay, additionalDeps) {
  const options = { leading: true, trailing: false }; // pass custom lodash options
  const cbRef = useRef(cb);
  const throttledCb = useCallback(
    _.throttle((...args) => cbRef.current(...args), delay, options),
    [delay]
  );
  useEffect(() => {
    cbRef.current = cb;
  });
  // set additionalDeps to execute effect, when other values change (not only on delay change)
  useEffect(throttledCb, [throttledCb, ...additionalDeps]);
}

ReactDOM.render(<App />, document.getElementById("root"));
<script src = "https://cdnjs.cloudflare.com/ajax/libs/react/16.13.0/umd/react.production.min.js" integrity = "sha256-32Gmw5rBDXyMjg/73FgpukoTZdMrxuYW7tj8adbN8z4 = " crossorigin = "anonymous"></script>
<script src = "https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.13.0/umd/react-dom.production.min.js" integrity = "sha256-bjQ42ac3EN0GqK40pC9gGi/YixvKyZ24qMP/9HiGW7w = " crossorigin = "anonymous"></script>
<script src = "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.15/lodash.min.js" integrity = "sha256-VeNaFBVDhoX3H+gJ37DpT/nTuZTdjYro9yBruHjVmoQ = " crossorigin = "anonymous"></script>
<script>var { useReducer, useEffect, useState, useRef, useCallback } = React</script>
<div id = "root"></div>
 26.05.2020 09:45
Используя функцию debounce lodash, вот что я делаю:

import debounce from 'lodash/debounce'

// The function that we want to debounce, for example the function that makes the API calls
const getUsers = (event) => {
// ...
}


// The magic!
const debouncedGetUsers = useCallback(debounce(getUsers, 500), [])
В вашем JSX:

<input value = {value} onChange = {debouncedGetUsers} />
 30.05.2020 22:30
Я довольно поздно с этим, но вот способ опровергнуть setState()

/**
 * Like React.setState, but debounces the setter.
 * 
 * @param {*} initialValue - The initial value for setState().
 * @param {int} delay - The debounce delay, in milliseconds.
 */
export const useDebouncedState = (initialValue, delay) => {
  const [val, setVal] = React.useState(initialValue);
  const timeout = React.useRef();
  const debouncedSetVal = newVal => {
    timeout.current && clearTimeout(timeout.current);
    timeout.current = setTimeout(() => setVal(newVal), delay);
  };

  React.useEffect(() => () => clearTimeout(timeout.current), []);
  return [val, debouncedSetVal];
};
 22.07.2020 16:28
Это мой useDebounce:

export function useDebounce(callback, timeout, deps) {
    const timeoutId = useRef();

    useEffect(() => {
        clearTimeout(timeoutId.current);
        timeoutId.current = setTimeout(callback, timeout);

        return () => clearTimeout(timeoutId.current);
    }, deps);
}
И вы можете использовать его следующим образом:

const TIMEOUT = 500; // wait 500 milliseconds;

export function AppContainer(props) {
    const { dataId } = props;
    const [data, setData] = useState(null);
    //
    useDebounce(
        async () => {
            data = await loadDataFromAPI(dataId);
            setData(data);
        }, 
        TIMEOUT, 
        [dataId]
    );
    //
}
 18.08.2020 13:55
Я пишу простой useDebounce хук, который учитывает очистку, как работает useEffect.

import { useState, useEffect, useRef, useCallback } from "react";

export function useDebounceState<T>(initValue: T, delay: number) {
  const [value, setValue] = useState<T>(initValue);
  const timerRef = useRef(null);
  // reset timer when delay changes
  useEffect(
    function () {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
    },
    [delay]
  );
  const debounceSetValue = useCallback(
    function (val) {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
      timerRef.current = setTimeout(function () {
        setValue(val);
      }, delay);
    },
    [delay]
  );
  return [value, debounceSetValue];
}

interface DebounceOptions {
  imediate?: boolean;
  initArgs?: any[];
}

const INIT_VALUE = -1;
export function useDebounce(fn, delay: number, options: DebounceOptions = {}) {
  const [num, setNum] = useDebounceState(INIT_VALUE, delay);
  // save actual arguments when fn called
  const callArgRef = useRef(options.initArgs || []);
  // save real callback function
  const fnRef = useRef(fn);
  // wrapped function
  const trigger = useCallback(function () {
    callArgRef.current = [].slice.call(arguments);
    setNum((prev) => {
      return prev + 1;
    });
  }, []);
  // update real callback
  useEffect(function () {
    fnRef.current = fn;
  });
  useEffect(
    function () {
      if (num === INIT_VALUE && !options.imediate) {
        // prevent init call
        return;
      }
      return fnRef.current.apply(null, callArgRef.current);
    },
    [num, options.imediate]
  );
  return trigger;
}
суть здесь: https://gist.github.com/sophister/9cc74bb7f0509bdd6e763edbbd21ba64

а это живая демонстрация: https://codesandbox.io/s/react-hook-debounce-demo-mgr89?file=/src/App.js

использование:

const debounceChange = useDebounce(function (e) {
    console.info("debounced text change: " + e.target.value);
  }, 500);
  // can't use debounceChange directly, since react using event pooling
  function deboucnedCallback(e) {
    e.persist();
    debounceChange(e);
  }

// later the jsx
<input onChange = {deboucnedCallback} />
 25.08.2020 12:45
Я хотел бы присоединиться к вечеринке со своим заблокированным и отклоненным вводом, используя useState:

// import { useState, useRef } from 'react' // nomral import
const { useState, useRef } = React // inline import

// Throttle

const ThrottledInput = ({ onChange, delay = 500 }) => {
  const t = useRef()
  
  const handleChangeEvent = ({ target }) => {
    if (!t.current) {
      t.current = setTimeout(() => {
        onChange(target.value)
        clearTimeout(t)
        t.current = null
      }, delay)
    }
  }
  
  return (
    <input
      placeholder = "throttle"
      onChange = {handleChangeEvent}
    />
  )
}


// Debounce

const DebouncedInput = ({ onChange, delay = 500 }) => {
  const t = useRef()
  
  const handleChangeEvent = ({ target }) => {
    clearTimeout(t.current)
    t.current = setTimeout(() => onChange(target.value), delay)
  }
  
  return (
    <input
      placeholder = "debounce"
      onChange = {handleChangeEvent}
    />
  )
}

// ----

ReactDOM.render(<div>
  <ThrottledInput onChange = {console.info} />
  <DebouncedInput onChange = {console.info} />
</div>, document.getElementById('root'))
<script src = "https://cdnjs.cloudflare.com/ajax/libs/react/16.8.1/umd/react.production.min.js"></script>
<script src = "https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.8.1/umd/react-dom.production.min.js"></script>
<div id = "root"></div>
 07.09.2020 05:45
Вот настоящий дроссельный крюк. Вы можете использовать экран или компонент для всех функций, которые хотите регулировать, и они будут использовать одно и то же регулирование. Или вы можете вызывать useThrottle() несколько раз и иметь разные дроссели для отдельных функций.

Используйте так:

import useThrottle from '../hooks/useThrottle';

const [navigateToSignIn, navigateToCreateAccount] = useThrottle([
        () => { navigation.navigate(NavigationRouteNames.SignIn) },
        () => { navigation.navigate(NavigationRouteNames.CreateAccount) }
    ])
И сам крючок:

import { useCallback, useState } from "react";

// Throttles all callbacks on a component within the same throttle.  
// All callbacks passed in will share the same throttle.

const THROTTLE_DURATION = 500;

export default (callbacks: Array<() => any>) => {
    const [isWaiting, setIsWaiting] = useState(false);

    const throttledCallbacks = callbacks.map((callback) => {
        return useCallback(() => {
            if (!isWaiting) {
                callback()
                setIsWaiting(true)
                setTimeout(() => {
                    setIsWaiting(false)
                }, THROTTLE_DURATION);
            }
        }, [isWaiting]);
    })

    return throttledCallbacks;
}
 10.11.2020 22:24
Вот простой хук, чтобы отклонить ваши звонки.

Чтобы использовать приведенный ниже код, все, что вам нужно сделать, это объявить его как таковой.

const { debounceRequest } = useDebounce(someFn);

И тогда назовите это так

debounceRequest(); 
Реализация показана ниже

import React from "react";

const useDebounce = (callbackFn: () => any, timeout: number = 500) => {
const [sends, setSends] = React.useState(0);

const stabilizedCallbackFn = React.useCallback(callbackFn, [callbackFn]);

const debounceRequest = () => {
  setSends(sends + 1);
};

// 1st send, 2nd send, 3rd send, 4th send ...
// when the 2nd send comes, then 1st set timeout is cancelled via clearInterval
// when the 3rd send comes, then 2nd set timeout is cancelled via clearInterval
// process continues till timeout has passed, then stabilizedCallbackFn gets called
// return () => clearInterval(id) is critical operation since _this_ is what cancels 
//  the previous send.
// *? return () => clearInterval(id) is called for the previous send when a new send 
// is sent. Essentially, within the timeout all but the last send gets called.

React.useEffect(() => {
  if (sends > 0) {
     const id = window.setTimeout(() => {
       stabilizedCallbackFn();
       setSends(0);
     }, timeout);
     return () => {
      return window.clearInterval(id);
     };
  }
 }, [stabilizedCallbackFn, sends, timeout]);

 return {
   debounceRequest,
 };
};

export default useDebounce;
 23.11.2020 02:26
const useDebounce = (func: any) => {
    const debounceFunc = useRef(null);

    useEffect(() => {
        if (func) {
            // @ts-ignore
            debounceFunc.current = debounce(func, 1000);
        }
    }, []);

    const debFunc = () => {
        if (debounceFunc.current) {
            return debounceFunc.current;
        }
        return func;
    };
    return debFunc();
};
 24.11.2020 12:05
Дебунс с помощью хука useCallback.

import React, { useState, useCallback } from 'react';
import debounce from 'lodash.debounce';

function App() {
    const [value, setValue] = useState('');
    const [dbValue, saveToDb] = useState(''); // would be an API call normally

    // highlight-starts
    const debouncedSave = useCallback(
        debounce(nextValue => saveToDb(nextValue), 1000),
        [], // will be created only once initially
    );
    // highlight-ends

    const handleChangeEvent = event => {
        const { value: nextValue } = event.target;
        setValue(nextValue);
        // Even though handleChangeEvent is created on each render and executed
        // it references the same debouncedSave that was created initially
        debouncedSave(nextValue);
    };

    return <div></div>;
}
 11.12.2020 09:03
react-table имеет хорошую useAsyncDebounce функцию, представленную на https://react-table.tanstack.com/docs/faq#how-can-i-debounce-rapid-table-state-changes

 28.12.2020 02:56
И еще одна реализация. Пользовательский крючок:

function useThrottle (func, delay) {
  const [timeout, saveTimeout] = useState(null);

  const throttledFunc = function () {
    if (timeout) {
      clearTimeout(timeout);
    }

    const newTimeout = setTimeout(() => {
      func(...arguments);
      if (newTimeout === timeout) {
        saveTimeout(null);
      }
    }, delay);

    saveTimeout(newTimeout);
  }

  return throttledFunc;
}
и использование:

const throttledFunc = useThrottle(someFunc, 200);
Надеюсь, это поможет кому-то.

 22.02.2021 15:16
Я сделал простой хук для создания экземпляров дросселя.

Он использует немного другой подход, передавая функцию для вызова каждый раз, а не пытаясь обернуть ее и управлять мутациями. Многие другие решения не учитывают, что функция может вызвать потенциальное изменение. Паттерн хорошо работает с газом или дебаунсом.

// useThrottle.js
import React, { useCallback } from 'react';
import throttle from 'lodash/throttle';

export function useThrottle(timeout = 300, opts = {}) {
  return useCallback(throttle((fn, ...args) => {
    fn(...args);
  }, timeout, opts), [timeout]);
}
Пример использования:

...
const throttleX = useThrottle(100);

const updateX = useCallback((event) => {
  // do something!
}, [someMutableValue])

return ( 
 <div onPointerMove = {(event) => throttleX(updateX, event)}></div>
)
...
 12.03.2021 12:12
Я считаю, что этот хук работает правильно, давая возможность немедленно выстрелить.

import { useState, useRef, useEffect } from 'react';

const useDebounce = <T>(
  value: T,
  timeout: number,
  immediate: boolean = true
): T => {
  const [state, setState] = useState<T>(value);
  const handler = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    if (handler.current) {
      clearTimeout(handler.current);
      handler.current = undefined;
    } else if (immediate) {
      setState(value);
    }

    handler.current = setTimeout(() => {
      setState(value);
      handler.current = undefined;
    }, timeout);
  }, [value, timeout, immediate]);

  return state;
};

export default useDebounce;
 30.04.2021 03:53
Я только что придумал следующий шаблон, пытаясь решить проблему с устаревшим состоянием:

Мы можем сохранить отмененную функцию в ref и обновлять ее каждый раз, когда компонент перерисовывается в useEffect следующим образом:

  // some state
  const [counter, setCounter] = useState(0);

  // store a ref to the function we will debounce
  const increment = useRef(null);

  // update the ref every time the component rerenders
  useEffect(() => {
    increment.current = () => {
      setCounter(counter + 1);
    };
  });

  // debounce callback, which we can call (i.e. in button.onClick)
  const debouncedIncrement = useCallback(
    debounce(() => {
      if (increment) {
        increment.current();
      }
    }, 1500),
    []
  );

  // cancel active debounces on component unmount
  useEffect(() => {
    return () => {
      debouncedIncrement.cancel();
    };
  }, []);

Песочница кода: https://codesandbox.io/s/debounced-function-ref-pdrfu?file=/src/index.js

Я надеюсь, что это сэкономит кому-то несколько часов борьбы

 26.06.2021 10:38
Вы можете использовать хук useMemo для оптимизации обработчика регулируемых событий.

Пример кода ниже:

const App = () => {
  const [value, setValue] = useState(0);

  // ORIGINAL EVENT HANDLER
  function eventHandler(event) {
    setValue(value + 1);
  }

  // THROTTLED EVENT HANDLER
  const throttledEventHandler = useMemo(() => throttle(eventHandler, 1000), [value]);
  
  return (
    <button onClick = {throttledEventHandler}>Throttled Button with value: {value}</button>
  )
}
 13.07.2021 09:02
Другие вопросы по теме
Найти индекс объекта в javascript, используя его имя свойства
Фильтрация ключей и значений объектов
Event.preventDefault не предотвращает прокрутку
Преобразование массива объектов в новую структуру массива
NODEJS - RangeError: превышен максимальный размер стека вызовов
Как объединить объект mutil в массиве с lodash?
Сортировка массива по строковому значению даты не возвращает правильный порядок результатов (по убыванию)
Подсчет свойств длины каждого объекта object.entry
Как добавить динамический ключ со значением в существующий объект Javascript?
Как сохранить определенные свойства объекта?
Похожие вопросы
Как обновить состояние при нажатии кнопки
Неопределенный параметр в компоненте реакции
Версия Local React Development показывает пустую страницу в IE
Как импортировать css в реагирующий компонент в Meteor.js
Почему нельзя возвращать несколько элементов в React?
Как использовать функцию карты с получением объекта JSON через API
Использование метода обновления Apollo GraphQL извне
Reactjs: как правильно получить запись каждого пользователя из базы данных при нажатии всплывающей кнопки с помощью Reactjs
Условный рендеринг компонента на основе маршрутизации в реакции
Как протестировать Formik Fields с Enzyme и Jest?
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
TypeScript и React - детский тип?
Вопросы
REACTJS
TypeScript и React - детский тип?
У меня есть очень простой функциональный компонент:

import * as React from 'react';

export interface AuxProps  { 
    children: React.ReactNode
 }


const aux = (props: AuxProps) => props.children;

export default aux;
И еще один компонент:

import * as React from "react";

export interface LayoutProps  { 
   children: React.ReactNode
}

const layout = (props: LayoutProps) => (
    <Aux>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main>
            {props.children}
        </main>
    <Aux/>
);

export default layout;
Я получаю следующую ошибку:

[ts] JSX element type 'ReactNode' is not a constructor function for JSX elements. Type 'undefined' is not assignable to type 'ElementClass'. [2605]

Как мне это правильно набрать?

 09.12.2018 03:38
417
1
277 252
18
 Ответы 18
Компоненты React должны иметь один узел-оболочку или возвращать массив узлов.

Компонент <Aux>...</Aux> имеет два узла: div и main.

Попробуйте обернуть своих детей компонентом div в Aux.

import * as React from 'react';

export interface AuxProps  { 
  children: React.ReactNode
}

const aux = (props: AuxProps) => (<div>{props.children}</div>);

export default aux;
 09.12.2018 03:50
Чтобы использовать <Aux> в вашем JSX, это должна быть функция, возвращающая ReactElement<any> | null. Это определение функциональная составляющая.

Однако в настоящее время он определен как функция, возвращающая React.ReactNode, который является гораздо более широким типом. Как говорят типы React:

type ReactNode = ReactChild | ReactFragment | ReactPortal | boolean | null | undefined;
Убедитесь, что нежелательные типы нейтрализованы, заключив возвращаемое значение в React Fragment (<></>):

const aux: React.FC<AuxProps> = props =>
  <>{props.children}</>;
 09.12.2018 04:43
Вот что сработало для меня:

interface Props {
  children: JSX.Element[] | JSX.Element
}
Редактировать Я бы порекомендовал использовать вместо этого children: React.ReactNode.

 04.01.2019 19:36
С сайта TypeScript: https://github.com/Microsoft/TypeScript/issues/6471

The recommended practice is to write the props type as {children?: any}

У меня это сработало. Дочерним узлом может быть много разных вещей, поэтому явная типизация может пропустить случаи.

Здесь более подробно обсуждается следующая проблема: https://github.com/Microsoft/TypeScript/issues/13618, но любой подход по-прежнему работает.

 26.04.2019 01:11
Просто children: React.ReactNode.

 29.07.2019 13:57
вы можете объявить свой компонент следующим образом:

const MyComponent: React.FunctionComponent = (props) => {
    return props.children;
}
 13.08.2019 09:02
Общее способ найти любой тип на собственном примере. Прелесть машинописного текста в том, что у вас есть доступ к типам все, если у вас есть правильные файлы @types/.

Чтобы ответить на этот вопрос, я просто подумал об использовании компонента React, который имеет опору children. Первое, что пришло в голову? Как насчет <div />?

Все, что вам нужно сделать, это открыть vscode и создать новый файл .tsx в проекте реакции с @types/react.

import React from 'react';

export default () => (
  <div children = {'test'} />
);

При наведении указателя мыши на опору children отображается тип. А что вы знаете - его тип - ReactNode (в ReactNode[] нет необходимости).



Затем, если вы щелкните определение типа, вы сразу перейдете к определению children, полученному из интерфейса DOMAttributes.

// node_modules/@types/react/index.d.ts
interface DOMAttributes<T> {
  children?: ReactNode;
  ...
}
Note: This process should be used to find any unknown type! All of them are there just waiting for you to find them :)

 05.10.2019 19:55
В качестве типа, содержащего дочерние элементы, я использую:

type ChildrenContainer = Pick<JSX.IntrinsicElements["div"], "children">
Этот тип дочернего контейнера является достаточно общим, чтобы поддерживать все различные случаи, а также согласован с API ReactJS.

Итак, для вашего примера это будет примерно так:

const layout = ({ children }: ChildrenContainer) => (
    <Aux>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main>
            {children}
        </main>
    <Aux/>
)
 04.02.2020 12:46
Тип возвращаемого значения функционального компонента ограничен JSXElement | null в TypeScript. Это текущее ограничение типа, возвращаемые типы чистого React позволяет больше.

Минимальный демонстрационный фрагмент

Вы можете использовать утверждение типа или фрагменты в качестве обходного пути:

const Aux = (props: AuxProps) => <>props.children</>; 
const Aux2 = (props: AuxProps) => props.children as ReactElement; 
ReactNode
children: React.ReactNode может быть неоптимальным, если цель состоит в том, чтобы иметь сильные типы для Aux.

Практически все может быть отнесено к текущему типу ReactNode, который эквивалентен {} | undefined | null. Более безопасным вариантом для вашего случая может быть:

interface AuxProps {
  children: ReactElement | ReactElement[]
}
Пример:

Учитывая, что Aux нуждается в элементах React как children, мы случайно добавили к нему string. Тогда выше решение будет ошибкой в ​​отличие от ReactNode - взгляните на связанные игровые площадки.

Типизированный children также полезен для свойств, отличных от JSX, таких как обратный вызов Рендеринг опоры.

 17.03.2020 12:39
Эти ответы кажутся устаревшими - React теперь имеет встроенный тип PropsWithChildren<{}>. Он определяется аналогично некоторым правильным ответам на этой странице:

type PropsWithChildren<P> = P & { children?: ReactNode };

 13.05.2020 12:37
Вы можете использовать ReactChildren и ReactChild:

import React, { ReactChildren, ReactChild } from 'react';
 
interface AuxProps {
  children: ReactChild | ReactChildren;
}

const Aux = ({ children }: AuxProps) => (<div>{children}</div>);

export default Aux;
Если вам нужно передать плоские массивы элементов:

interface AuxProps {
  children: ReactChild | ReactChild[] | ReactChildren | ReactChildren[];
}
 03.06.2020 12:26
Вы также можете использовать React.PropsWithChildren<P>.

type ComponentWithChildProps = React.PropsWithChildren<{example?: string}>;
 23.06.2020 13:35
У меня всегда работало:

type Props = {
  children: JSX.Element;
};
 17.08.2020 23:35
React Node относится к одному из следующих типов:

Boolean (игнорируется)
null или undefined (игнорируется)
Number
String
React element (результат JSX)
Массив любого из вышеперечисленных, возможно, вложенный
 03.09.2020 08:16
Я использую следующие

type Props = { children: React.ReactNode };

const MyComponent: React.FC<Props> = ({children}) => {
  return (
    <div>
      { children }
    </div>
  );

export default MyComponent;
 25.12.2020 17:37
Также можно использовать JSX.ElementChildrenAttribute

export default function Layout({children}: JSX.ElementChildrenAttribute) {
    return <div>
        {children}
    </div>
}
 04.08.2021 12:08
вы должны знать, что любой компонент реакции должен возвращает null или React.Element, но тип props.children - React.ReactNode, поэтому вам нужно использовать props.children внутри Element, чтобы babel настраивал конструктор Element.

Второе правило любого компонента реакции состоит в том, что первая буква имени должен должна быть заглавной, чтобы позволить реакции распознавать, что компонент не является тегом html.

так что код должен быть таким.

const Aux = (props: AuxProps) => <>props.children</>;
еще один совет, если вы все еще используете машинописный текст, функциональный компонент должен быть типа React.FC, как это

type Props = {
   title: string;
}

const Aux:React.FC<Props> = (props) =>
(
    <div>
        <h3>{props.title}</h3>
        { props.children }
        {/* children is exist by default in type React.FC */}
    </div>
)
 19.08.2021 13:17
import { ReactNode, FC } from 'react'

type Props = { children: ReactNode }

const App: FC<Props> = ({children}) => (<div>{children}</div>)
 19.11.2021 04:13
Другие вопросы по теме
Не получить событие от немого компонента
Angular - Полная конфигурация изменения календаря в зависимости от ширины экрана
Как управлять часовым поясом с помощью DatePipe в Angular?
Ошибка TS2339: свойство sendemailverification не существует для типа UserCredential
Как добавить изображение к кнопке ZoomToExtent в открытых слоях?
Nativescript Angular 6 - Добавление значка со строкой в ​​заголовок панели действий
Определение типа для функции, возвращающей расширенный анонимный класс
Как интерпретировать тип объединения как один из типов компонентов
Typescript не выполняет проверку свойств в объединении типа функции и типа объекта
Ссылка на компонент TypeScript React-Redux в другом компоненте TypeScript вызывает ошибку «нет элемента экспорта»
Похожие вопросы
Как сделать страницу, которая останется на странице с динамическими вопросами и вариантами ответов в reactjs?
Проблема с пониманием различий между curl и axios реагирует
Передача массива props дочернему компоненту
Как загрузить скрипты веб-сборки в React Native?
Как установить состояние в ComponentDidMount
React-native AJAX и API - рендеринг данных JSON
Определение внутренних переменных класса внутри методов класса с использованием Javascript?
Как я могу экспортировать статические HTML-страницы из next.js, когда им нужны данные из стороннего API?
Разрешить обещание только после того, как пользователь ввел ввод в React.js
Получение данных из подстрок в кодировке JSON API
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
Как я могу заставить компонент повторно визуализироваться с помощью хуков в React?
Вопросы
JAVASCRIPT
Как я могу заставить компонент повторно визуализироваться с помощью хуков в React?
Рассматривая ниже пример крючков

   import { useState } from 'react';

   function Example() {
       const [count, setCount] = useState(0);

       return (
           <div>
               <p>You clicked {count} times</p>
               <button onClick = {() => setCount(count + 1)}>
                  Click me
               </button>
          </div>
        );
     }
В основном мы используем метод this.forceUpdate (), чтобы заставить компонент немедленно повторно визуализироваться в компонентах класса React, как показано ниже.

    class Test extends Component{
        constructor(props){
             super(props);
             this.state = {
                 count:0,
                 count2: 100
             }
             this.setCount = this.setCount.bind(this);//how can I do this with hooks in functional component 
        }
        setCount(){
              let count = this.state.count;
                   count = count+1;
              let count2 = this.state.count2;
                   count2 = count2+1;
              this.setState({count});
              this.forceUpdate();
              //before below setState the component will re-render immediately when this.forceUpdate() is called
              this.setState({count2: count
        }

        render(){
              return (<div>
                   <span>Count: {this.state.count}></span>. 
                   <button onClick = {this.setCount}></button>
                 </div>
        }
 }
Но мой вопрос: как я могу заставить вышеуказанный функциональный компонент немедленно перерисовать с помощью хуков?

 08.11.2018 21:00
175
4
265 268
18
Данный вопрос помечен как решенный
 Ответы 18
Желательно, чтобы ваш компонент зависел только от состояния и свойств, и он будет работать так, как ожидалось, но если вам действительно нужна функция для принудительного повторного рендеринга компонента, вы можете использовать ловушку useState и вызывать функцию при необходимости.

Пример

const { useState, useEffect } = React;

function Foo() {
  const [, forceUpdate] = useState();

  useEffect(() => {
    setTimeout(forceUpdate, 2000);
  }, []);

  return <div>{Date.now()}</div>;
}

ReactDOM.render(<Foo />, document.getElementById("root"));
<script src = "https://unpkg.com/react@16.7.0-alpha.0/umd/react.production.min.js"></script>
<script src = "https://unpkg.com/react-dom@16.7.0-alpha.0/umd/react-dom.production.min.js"></script>

<div id = "root"></div>
 08.11.2018 21:17
 Ответ принят как подходящий
Это возможно с useState или useReducer, поскольку useState использует useReducer внутри:

const [, updateState] = React.useState();
const forceUpdate = React.useCallback(() => updateState({}), []);
forceUpdate не предназначен для использования в нормальных условиях, только для тестирования или других неурегулированных случаев. Эту ситуацию можно разрешить более традиционным способом.

setCount является примером неправильно используемого forceUpdate, setState является асинхронным по соображениям производительности и не должен быть синхронным только потому, что обновления состояния не были выполнены правильно. Если состояние зависит от ранее установленного состояния, это должно быть выполнено с помощью функция обновления,

If you need to set the state based on the previous state, read about the updater argument below.

<...>

Both state and props received by the updater function are guaranteed to be up-to-date. The output of the updater is shallowly merged with state.

setCount не может быть иллюстративным примером, потому что его цель неясна, но это относится к функции обновления:

setCount(){
  this.setState(({count}) => ({ count: count + 1 }));
  this.setState(({count2}) => ({ count2: count + 1 }));
  this.setState(({count}) => ({ count2: count + 1 }));
}
Это переводится как 1: 1 в хуки, за исключением того, что функции, которые используются как обратные вызовы, лучше запоминать:

   const [state, setState] = useState({ count: 0, count2: 100 });

   const setCount = useCallback(() => {
     setState(({count}) => ({ count: count + 1 }));
     setState(({count2}) => ({ count2: count + 1 }));
     setState(({count}) => ({ count2: count + 1 }));
   }, []);
 08.11.2018 21:18
Как уже упоминали другие, useState работает - вот как mobx-react-lite реализует обновления - вы можете сделать что-то подобное.

Определите новый хук, useForceUpdate -

import { useState, useCallback } from 'react'

export function useForceUpdate() {
  const [, setTick] = useState(0);
  const update = useCallback(() => {
    setTick(tick => tick + 1);
  }, [])
  return update;
}
и использовать его в компоненте -

const forceUpdate = useForceUpdate();
if (...) {
  forceUpdate(); // force re-render
}
См. https://github.com/mobxjs/mobx-react-lite/blob/master/src/utils.ts и https://github.com/mobxjs/mobx-react-lite/blob/master/src/useObserver.ts

 26.04.2019 08:38
Вы можете просто определить useState следующим образом:

const [, forceUpdate] = React.useState(0);
И использование: forceUpdate(n => !n)

Надеюсь на эту помощь!

 03.07.2019 06:13
Вы можете (ab) использовать обычные хуки для принудительного повторного рендеринга, воспользовавшись тем фактом, что React не печатает логические значения в коде JSX

// create a hook
const [forceRerender, setForceRerender] = React.useState(true);

// ...put this line where you want to force a rerender
setForceRerender(!forceRerender);

// ...make sure that {forceRerender} is "visible" in your js code
// ({forceRerender} will not actually be visible since booleans are
// not printed, but updating its value will nonetheless force a
// rerender)
return (
  <div>{forceRerender}</div>
)

 11.07.2019 13:31
Возможный вариант - принудительное обновление только определенного компонента с помощью key. Обновление ключа запускает рендеринг компонента (который раньше не обновлялся)

Например:

const [tableKey, setTableKey] = useState(1);
...

useEffect(() => {
    ...
    setTableKey(tableKey + 1);
}, [tableData]);

...
<DataTable
    key = {tableKey}
    data = {tableData}/>
 14.07.2019 21:25
Для обычных компонентов на основе React Class см. React Docs для API forceUpdate по URL-адресу это. В документах упоминается, что:

Normally you should try to avoid all uses of forceUpdate() and only read from this.props and this.state in render()

Однако в документации также упоминается, что:

If your render() method depends on some other data, you can tell React that the component needs re-rendering by calling forceUpdate().

Итак, хотя варианты использования forceUpdate могут быть редкими, и я никогда его не использовал, тем не менее я видел, как его использовали другие разработчики в некоторых устаревших корпоративных проектах, над которыми я работал.

Итак, для эквивалентной функциональности для функциональных компонентов обратитесь к React Docs for HOOKS по URL-адресу это. По указанному выше URL-адресу можно использовать ловушку «useReducer», чтобы предоставить функциональные возможности forceUpdate для функциональных компонентов.

Ниже представлен рабочий образец кода that does not use state or props, который также доступен на CodeSandbox по адресу это URL.

import React, { useReducer, useRef } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  // Use the useRef hook to store a mutable value inside a functional component for the counter
  let countref = useRef(0);

  const [, forceUpdate] = useReducer(x => x + 1, 0);

  function handleClick() {
    countref.current++;
    console.info("Count = ", countref.current);
    forceUpdate(); // If you comment this out, the date and count in the screen will not be updated
  }

  return (
    <div className = "App">
      <h1> {new Date().toLocaleString()} </h1>
      <h2>You clicked {countref.current} times</h2>
      <button
        onClick = {() => {
          handleClick();
        }}
      >
        ClickToUpdateDateAndCount
      </button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
ПРИМЕЧАНИЕ. Альтернативный подход с использованием ловушки useState (вместо useReducer) также доступен по URL-адресу это.

 01.10.2019 20:04
Альтернатива ответу @MinhKha:

useReducer может быть намного чище:

const [, forceUpdate] = useReducer(x => x + 1, 0);
Использование: forceUpdate() - очиститель без параметров

 13.10.2019 06:47
Как правило, можно использовать любой подход к обработке состояния, при котором требуется запускать обновление.

С TypeScript
codeandbox пример

useState
const forceUpdate: () => void = React.useState()[1].bind(null, {})  // see NOTE below
useReducer
const forceUpdate = React.useReducer(() => ({}), {})[1] as () => void
как индивидуальный крючок
Просто оберните любой подход, который вы предпочитаете, вот так

function useForceUpdate(): () => void {
  return React.useReducer(() => ({}), {})[1] as () => void // <- paste here
}
Как это работает?
«Для запуска обновления» означает сообщить движку React, что какое-то значение изменилось и что он должен повторно отрендерить ваш компонент.

[, setState] от useState() требует параметра. Избавляемся от него привязав свежий объект {}.
() => ({}) в useReducer - это фиктивный редуктор, который возвращает новый объект каждый раз при отправке действия. {}(свежий объект) требуется, чтобы запускать обновление, изменяя ссылку в состоянии.

PS: useState просто оборачивает useReducer внутри. источник

ЗАМЕТКА: Использование .bind с useState вызывает изменение ссылки на функцию между отрисовками. Можно обернуть его внутри useCallback как уже объяснено здесь, но тогда это не будет сексуальная однострочник ™. Версия Reducer уже держит ссылается на равенство между рендерами. Это важно, если вы хотите передать функцию forceUpdate в props.

простой JS
const forceUpdate = React.useState()[1].bind(null, {})  // see NOTE above
const forceUpdate = React.useReducer(() => ({}))[1]
 29.10.2019 12:26
Мой вариант forceUpdate не через counter, а через объект:

// Emulates `forceUpdate()`
const [unusedState, setUnusedState] = useState()
const forceUpdate = useCallback(() => setUnusedState({}), [])
Потому что {} !== {} каждый раз.

 21.11.2019 14:01
Официальное решение Часто задаваемые вопросы по React Hooks для forceUpdate:

const [_, forceUpdate] = useReducer((x) => x + 1, 0);
// usage
<button onClick = {forceUpdate}>Force update</button>
Рабочий пример
const App = () => {
  const [_, forceUpdate] = useReducer((x) => x + 1, 0);

  return (
    <div>
      <button onClick = {forceUpdate}>Force update</button>
      <p>Forced update {_} times</p>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
<script src = "https://cdnjs.cloudflare.com/ajax/libs/react/16.10.1/umd/react.production.min.js" integrity = "sha256-vMEjoeSlzpWvres5mDlxmSKxx6jAmDNY4zCt712YCI0 = " crossorigin = "anonymous"></script>
<script src = "https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.10.1/umd/react-dom.production.min.js" integrity = "sha256-QQt6MpTdAD0DiPLhqhzVyPs1flIdstR4/R7x4GqCvZ4 = " crossorigin = "anonymous"></script>
<script>var useReducer = React.useReducer</script>
<div id = "root"></div>
 05.01.2020 18:25
Это будет отображать зависимые компоненты 3 раза (массивы с одинаковыми элементами не равны):

const [msg, setMsg] = useState([""])

setMsg(["test"])
setMsg(["test"])
setMsg(["test"])
 23.01.2020 11:42
Решение в одной строке:

const [,forceRender] = useReducer((s) => s+1, 0)
Вы можете узнать об useReducer здесь. https://reactjs.org/docs/hooks-reference.html#usereducer

 11.05.2020 08:15
Простой код

const forceUpdate = React.useReducer(bool => !bool)[1];
Использовать:

forceUpdate();
 06.06.2020 20:53
Однострочное решение:

const useForceUpdate = () => useState()[1];

useState возвращает пару значений: текущее состояние и функция, которая его обновляет - штат и сеттер, здесь мы используем только сеттер для принудительного повторного рендеринга.

 22.06.2020 08:48
У react-tidy есть специальный хук только для этого под названием useRefresh:

import React from 'react'
import {useRefresh} from 'react-tidy'

function App() {
  const refresh = useRefresh()
  return (
    <p>
      The time is {new Date()} <button onClick = {refresh}>Refresh</button>
    </p>
  )
}
Узнать больше об этом крючке

Отказ от ответственности Я автор этой библиотеки.

 08.10.2020 15:49
Есть много способов принудительного повторного рендеринга в Hook.

Для меня простой способ с useState() и подсказкой значений эталонного объекта.

const [, forceRender] = useState({});

// Anywhre
forceRender({});
Codesandbox Пример

 16.04.2021 04:46
const useForceRender = () => {
  const [, forceRender] = useReducer(x => !x, true)
  return forceRender
}
использование

function Component () {
  const forceRender = useForceRender() 
  useEffect(() => {
    // ...
    forceRender()
  }, [])
 15.10.2021 13:12
Другие вопросы по теме
Отображение html в браузере, но не в текстовом поле
Как связать функцию с хуками в React?
Перенаправление не разрешено для предполетного запроса
SetState массива к значениям другого массива
Как я могу предварительно инициализировать состояние с помощью хуков в React?
Как отображать записи в раскрывающемся списке с помощью React Redux
React, как удалить мертвый код в React?
Создание ссылки в провайдере контекста реакции
Многостраничная загрузка S3 с помощью React JS
Как использовать методы жизненного цикла с хуками в React?
Похожие вопросы
Как автоматически запустить расширение Chrome в фоновом режиме?
Прошедшее время с использованием JavaScript
Отображение html в браузере, но не в текстовом поле
Связь с удаленными серверами в плагинах XD
Группировать элементы массива объектов Js
Как сделать резервный img в v-img в Vuetify?
Как связать функцию с хуками в React?
Экспресс-маршрут, начинающийся с?
Добавить прослушиватель событий в веб-компонент Polymer по идентификатору
SetState массива к значениям другого массива
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
Ожидаемое присвоение или вызов функции: без неиспользуемых выражений ReactJS
Вопросы
REACTJS
Ожидаемое присвоение или вызов функции: без неиспользуемых выражений ReactJS
class Game extends Component 
{
  constructor() 
  {
    super()
    this.state = {
      speed: 0
    }
    //firebaseInit()
  }
  render()
  {
    return 
    (
      <div>
        <h1>The Score is {this.state.speed};</h1>
      </div>
    )
  }
}

export default Game;
Я новичок в React, и для этого кода он дает эту ошибку

Expected an assignment or function call and instead saw an expression  no-unused-expressions
Не понимаю, где ошибаюсь, пожалуйста, помогите

 26.10.2018 19:08
85
7
244 699
17
Данный вопрос помечен как решенный
 Ответы 17
 Ответ принят как подходящий
Это происходит из-за того, что вы поместили скобку return в следующую строку. Это может быть распространенной ошибкой, если вы пишете js без точек с запятой и используете стиль, в котором открывающиеся фигурные скобки помещаются в следующую строку.

Интерпретатор считает, что вы вернули undefined, и не проверяет вашу следующую строку. Это операторская штука return.

Разместите открытую скобу на одной линии с return.

 26.10.2018 19:49
В моем случае я никогда не помещал возвращение в стрелочную функцию так что мой код следует

`<ProductConsumer>
   {(myvariable)=>{
      return  <h1>{myvariable}</h1>
   }}
</ProductConsumer> `
 12.03.2019 10:43
В моем случае у меня были фигурные скобки вместо скобок.

const Button = () => {
    <button>Hello world</button>
}
Где это должно было быть:

const Button = () => (
    <button>Hello world</button>
)
Причина этого, как объяснено в MDN Docs, заключается в том, что функция стрелки, заключенная в (), будет возвращать значение, которое она обертывает, поэтому, если я хотел использовать фигурные скобки, мне пришлось добавить ключевое слово return, например:

const Button = () => {
    return <button>Hello world</button>
}
 04.04.2019 02:35
import React from 'react';

class Counter extends React.Component{
    state = {
        count: 0,
    };

    formatCount() {
        const {count} = this.state;
        // use a return statement here, it is a importent,
        return count === 0 ? 'Zero' : count;
    }
    render() {
        return(
          <React.Fragment>
              <span>{this.formatCount()}</span>
              <button type = "button" className = "btn btn-primary">Increment</button>
          </React.Fragment>
        );
    }
}

export default Counter;
 01.06.2019 13:15
Для меня ошибка возникла при использовании карты. И я не использовал оператор return внутри карты.

{cart.map((cart_products,index) => {
    <span>{cart_products.id}</span>; 
})};
Выше кода возникла ошибка.

{cart.map((cart_products,index) => {
    return (<span>{cart_products.id}</span>); 
})};
Простое добавление return решило эту проблему.

 07.01.2020 06:31
В моем случае ошибка произошла из-за новой строки после оператора return.

Ошибка: ожидалось присвоение или вызов функции, а вместо этого было обнаружено выражение

return
(
    <ul>
        {
            props.numbers.map(number => <li key = {number.toString()}>number</li>)
        }
    </ul>
);
Работает нормально. Нет ошибки

return (
    <ul>
        {
            props.numbers.map(number => <li key = {number.toString()}>number</li>)
        }
    </ul>
);
 16.01.2020 08:12
Вместо того

 return 
 (
  <div>
    <h1>The Score is {this.state.speed};</h1>
  </div>
 )
Используйте код ниже

 return(
   <div>
     <h1>The Score is {this.state.speed};</h1>
   </div>
  )
Обычно используйте скобку "(" в той же строке возврата, что и "возвращение(". Это решит эту проблему. Спасибо.

 27.02.2020 05:14
Если вы используете JSX внутри функции с фигурными скобками, вам необходимо преобразовать его в круглые скобки.

Неверный код

return this.props.todos.map((todo) => {
            <h3> {todo.author} </h3>;
        });
Правильный код

//Change Curly Brace To Paranthesis   change {} to => ()
return this.props.todos.map((todo) => (
            <h3> {todo.author} </h3>;
        ));
 20.04.2020 21:52
В моем случае я получил эту ошибку, потому что использовал вызов внутри условия без точки с запятой:

  private async _setActive(active: boolean) {
    if (this.isActive === active) {
      return;
    }
    this.isActive = active;

    this.isActive ? this._start() : this._stop();
  }
Я его поменял, и ошибка исчезла:

  private async _setActive(active: boolean) {
    if (this.isActive === active) {
      return;
    }
    this.isActive = active;

    if (this.isActive) {
      await this._start();
    } else {
      this._stop();
    }
  }
 29.04.2020 08:24
В моем случае я получил ошибку в строке setState:

increment(){
  this.setState(state => {
    count: state.count + 1
  });
}
Поменял на это, теперь работает

increment(){
  this.setState(state => {
    const count = state.count + 1

    return {
      count
    };
  });
}
 18.05.2020 18:10
Я столкнулся с той же ошибкой с приведенным ниже кодом.

    return this.state.employees.map((employee) => {
      <option value = {employee.id}>
        {employee.name}
      </option>
    });
Вышеупомянутая проблема была решена, когда я заменил фигурные скобки круглыми скобками, как указано в измененном фрагменте кода ниже.

      return this.state.employees.map((employee) => (
          <option value = {employee.id}>
            {employee.name}
          </option>
        ));
 21.05.2020 22:33
В моем случае это произошло из-за фигурных скобок функции, если вы используете jsx, вам нужно изменить фигурные скобки на круглые скобки, см. Код ниже

const [страны] = useState (["США", "Великобритания", "BD"])

I tried this but not work, don't know why

 {countries.map((country) => {
        <MenuItem value = {country}>{country}</MenuItem>
  })}
But when I change Curly Braces to parentheses and Its working fine for me

  {countries.map((country) => ( //Changes is here instead of {
        <MenuItem value = {country}>{country}</MenuItem>
  ))} //and here instead of }
             
Надеюсь, это поможет и вам ...

 09.08.2020 11:21
Ошибка - «Ожидал присвоения или вызова функции, а вместо этого увидел выражение no-unused-expressions» возникает, когда мы используем фигурные скобки, т.е. {}, чтобы вернуть буквальное выражение объекта. В таком случае мы можем исправить это двумя способами.

Используйте круглые скобки, т.е. ()
Используйте оператор return с фигурными скобками, т.е. {}
Пример :

const items = ["Test1", "Test2", "Test3", "Test4"];
console.info(articles.map(item => { `this is ${item}` })); // wrong
console.info(items.map(item => (`this is ${item}`))); // Option1
console.info(items.map(item => { return `this is ${item}` })); // Option2
 05.09.2020 14:34
На случай, если у кого-то возникнет такая же проблема, как у меня. Я использовал круглые скобки с оператором return в той же строке, в которой я написал остальную часть кода. Кроме того, я использовал функцию карты и реквизиты, поэтому у меня было так много скобок. В этом случае, если вы новичок в React, вы можете избегать скобок вокруг реквизита, потому что теперь все предпочитают использовать функции стрелок. И в функции карты вы также можете избежать скобок вокруг обратного вызова функции.

props.sample.map(function callback => (
   ));
вот так. В приведенном выше примере кода вы можете видеть, что слева от обратного вызова функции есть только открывающая скобка.

 12.09.2020 16:21
В моем случае я использовал в конструкторе запятые вместо точки с запятой.

Пример с ошибками:

class foo(bar1, bar2, bar3){
    this.bar1=bar1,
    this.bar2=bar2,
    this.bar3=bar3,

}
вместо этого я должен был использовать точки с запятой, как показано ниже:

class foo(bar1, bar2, bar3){
    this.bar1=bar1;
    this.bar2=bar2;
    this.bar3=bar3;
}
 17.06.2021 18:39
Move the start of the bracket

Это непростой вопрос. Когда вы используете ключевое слово return, просто убедитесь, что НАЧАЛО скобки НАХОДИТСЯ НА ОДНОЙ СТРОКЕ, что и ключевое слово return. Если вы это сделаете, все должно работать нормально. Если вы этого не сделаете, вы получите указанную выше ошибку.

Я добавил диаграмму, чтобы (надеюсь) сделать ее максимально понятной для всех и избавить некоторых из вас от необходимости покупать себе новый монитор. Надеюсь, это предельно ясно, и если не напишу комментарий, я постараюсь его отредактировать.

 05.07.2021 08:49
Просто хочу добавить свое решение на случай, если кто-то еще столкнется с этой ошибкой. В моем случае это не имело ничего общего с скобками, стрелочной функцией или отсутствующим оператором возврата. У меня был такой чек

if (this.myProperty) {
    this.myProperty == null
}
Мне пришлось удалить это, после чего ошибка исчезла. Разобраться в этом было сложно, потому что сообщение об ошибке не было описательным.

 14.08.2021 02:30
Другие вопросы по теме
Как задать непрозрачность для каждого элемента в виде сетки в React Native?
Синтаксическая ошибка "Неожиданный токен, ожидаемый}" выдается после попытки визуализации JSX внутри функции обратного вызова
Почему я не могу включить завершение вкладки для JSX с помощью Emmet в Atom IDE
React + встроенный стиль + внешний объект js - изображение не отображается
Почему tabIndex не работает после первой вкладки для выбора li?
Получение дочерних данных во вложенном объекте React
Рекомендуемая практика JSX для передачи истинного значения prop
Невозможно использовать атрибуты HTML в пользовательских компонентах в TSX
Обновление состояния одного компонента из другого в ReactJS
ReactiveSearch's ReactiveList не обновляется при изменении ES
Похожие вопросы
Как развернуть созданное мной приложение на сервере?
ActiveClassName в реактивном маршрутизаторе выделяет две ссылки NavLink одновременно
Как скрыть модальное окно начальной загрузки с помощью React JSX
Лайтбоксы на массиве изображений
Материальный интерфейс: когда больше нет смысла использовать библиотеку?
Данные Nodejs Api не сохраняются в массиве в Reactjs
Получение неперехваченной ошибки: недопустимое смещение NaN, указанное в React-virtualized, когда моя ширина меньше, чем размер моего элемента
React-Select Multi Searchable: НЕ позволяет мне искать по разделенным буквам или фрагментам слов
Как обновить этот компонент с помощью кнопки
Компонент жирной стрелки
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
Реакция: импорт имени класса CSS не работает
Вопросы
REACTJS
Реакция: импорт имени класса CSS не работает
У меня есть div <main> в моем реагирующем компоненте, и я импортирую какое-то имя класса из файла класса css, но имя класса не интегрируется в основной div, когда я пытаюсь проверить его в браузере. когда я просто использую другие имена классов, он работает как <main className = "test">, но импорт классов не работает.

Это моя составляющая:

import React from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.css';

const layout = (props) => (
<Aux>
    <div>
        Test paragraph
    </div>
    <main className = {classes.Content}>
        {props.children}

    </main>
</Aux>
);

export default layout;
Это мой css

.Content{
   color: red;
   margin-top: 20px;
}
Я выполнил команду npm run eject после создания, если что-то связано с файлом конфигурации веб-пакета, пожалуйста, помогите мне (я не внес никаких изменений после команды извлечения)

Вот часть css конфигурационного файла webpack dev

{
        test: cssRegex,
        exclude: cssModuleRegex,
        use: getStyleLoaders({
          importLoaders: 1,
        }),
      },
      // Adds support for CSS Modules (https://github.com/css-modules/css-modules)
      // using the extension .module.css
      {
        test: cssModuleRegex,
        use: getStyleLoaders({
          importLoaders: 1,
          modules: true,
          getLocalIdent: getCSSModuleLocalIdent,
        }),
 },
 01.12.2018 16:20
11
0
12 752
15
 Ответы 15
Разве вам не нужно указывать расширение файла, например import classes from './layout.css';?

Попробуйте установить пакеты style-loader и css-loader. Затем добавьте в свой веб-пакет это:

{
    test: /\.css$/,
    loaders: [
        'style-loader?sourceMap',
        'css-loader?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]'
    ]
}
Я получил его от документация по css-модулям, и я надеюсь, что он поможет вам достичь того, что вам нужно.

 01.12.2018 16:30
import './Layout.css';

Затем используйте его как обычный CSS

<main className = "Content">

Вы также можете использовать свои классы как объекты в этом формате:

В вашем файле CSS:
Оберните свои классы и идентификаторы в :local(.className)

Пример
:local(.Content) { width: 100px; }

В вашем компоненте React:
import classes from './stylesheet.css'

<div className = {classes.Content}></div>

 01.12.2018 16:57
Чтобы использовать имена классов как объекты, вам нужно сделать 2 вещи:

Напишите импорт как import * as classes from './Layout.css';
Включите определение набора текста для вашего стиля.
Пример для Typescript - создайте файл Layout.css.d.ts с export const Content: string;

Убедитесь, что вы определили опцию camelCase для css-loader, чтобы разрешить тире-классы в свойства верблюжьего регистра, которые вы определяете в Layout.css.d.ts.

 12.03.2019 15:56
На самом деле я использовал это так:

import classes from './Layout.module.css';
Как вы видите в тексте вашего вопроса:

// using the extension .module.css

 28.03.2019 17:08
Вам нужно настроить некоторые кадры. Следуй этим шагам:

npm run eject запустите эту команду в корневом каталоге вашего проекта.
найдите cssRegex и добавьте следующие строки в use: getStyleLoaders({

    modules:true,
    localIdentName:'[name]__[local]__[hash:base64:5]'
Наслаждаться!

 18.04.2019 09:49
Я также работал над учебником по реагированию и столкнулся с той же проблемой.

Я обновил свой файл webpack.config.js в строке 420, и тогда он работал у меня. Пожалуйста, попробуйте.



строка 420:

localIdentName: '[имя] [местный] [hash: base64: 5]',
 06.07.2019 13:59
Убедитесь, что команда 'npm run eject' запущена успешно, после чего вы сможете получить доступ к файлу webpack.config.js в папке config.

Остановите сервер.
Перейдите в webpack.config.js
Найдите cssRegex и обновите, как показано на изображении webpack.config.js
Перезагрузите сервер
 21.09.2019 09:00
Вот решение:

yarn run eject
Заходим в config / webpack.config.js

Обновите файл как снимок экрана.

            // "postcss" loader applies autoprefixer to our CSS.
            // "css" loader resolves paths in CSS and adds assets as dependencies.
            // "style" loader turns CSS into JS modules that inject <style> tags.
            // In production, we use MiniCSSExtractPlugin to extract that CSS
            // to a file, but in development "style" loader enables hot editing
            // of CSS.
            // By default we support CSS Modules with the extension .module.css
            {
              test: cssRegex,
              exclude: cssModuleRegex,
              use: getStyleLoaders({
                importLoaders: 1,
                sourceMap: isEnvProduction && shouldUseSourceMap,
                modules: true,
                localIdentName:'[name]__[local]__[hash:base64:5]',
              }),
              // Don't consider CSS imports dead code even if the
              // containing package claims to have no side effects.
              // Remove this when webpack adds a warning or an error for this.
              // See https://github.com/webpack/webpack/issues/6571
              sideEffects: true,
            },
            // Adds support for CSS Modules (https://github.com/css-modules/css-modules)
            // using the extension .module.css
            {
              test: cssModuleRegex,
              use: getStyleLoaders({
                importLoaders: 1,
                sourceMap: isEnvProduction && shouldUseSourceMap,
                modules: true,
                getLocalIdent: getCSSModuleLocalIdent
              }),
            },
 13.11.2019 08:23
Если вы используете Windows, не называйте файл «Aux», это зарезервированное имя.

Решение - просто назвать ваши файлы CSS как (в вашем случае) Layout.module.css, а затем импортировать их как таковые.

Вам не нужно извлекать, как из Создать приложение React 2.0, поскольку он использует модули CSS из коробки.

 06.01.2020 14:53
Для последней версии не нужно устанавливать

localIdentName: '[name] [местный] [hash: base64: 5]', // не нужно указывать где

Просто укажите свое имя css с постфиксом, например FileName.module.css ex Personal.module.css

Затем имя класса, как показано ниже filename_classname_randomstring

Personal_Person__3L9tz

это работает для меня

 31.03.2020 22:19
это работает для меня

{
          test: cssRegex,
          exclude: cssModuleRegex,
          use: getStyleLoaders({
            importLoaders: 1,
            sourceMap: isEnvProduction && shouldUseSourceMap,
          modules: {
                localIdentName: '[name]__[local]___[hash:base64:5]'
            }
}

 25.05.2020 12:21
другие ответы не сработали для меня поэтому я использовал это решение и отлично работал

1: запустите команду npm run eject

2: перейдите к config/webpack.config.js и найдите cssRegex

3: используйте этот код в этом конкретном разделе

test: cssRegex,
exclude: cssModuleRegex,
use: getStyleLoaders({
  importLoaders: 1,
  modules:{
    localIdentName:'[name]__[local]__[hash:base64:5]'
  },
}),
 22.07.2020 19:58
Просто добавьте приведенную ниже конфигурацию в config / webpack.config.js после запуска npm run eject в командной строке в папке проекта и выберите «Да», когда это будет предложено.



 27.07.2020 06:47
Я заметил много ссылок на блок test: cssRegex, хотя у вас его может не быть в конфигурации webpack. Если это ваш случай, попробуйте открыть webpack.config.dev.js и найти блок, начинающийся с test: /\.css$/, (строка 160 в моем случае). Затем добавьте следующие строки, чтобы окончательный результат выглядел так:

  {
    test: /\.css$/,
    use: [
      require.resolve('style-loader'),
      {
        loader: require.resolve('css-loader'),
        options: {
          importLoaders: 1,
          modules: true,
          localIdentName: '[name]__[local]__[hash:base64:5]'
      },
   },
Это должно позволить модулям css работать.

 01.08.2020 12:47
Ни одно из вышеперечисленных решений не помогло мне, если вы используете версию реакции с response-scripts@2.0.0 и выше, они, вероятно, не будут работать и для вас.

вы должны использовать модули CSS вместе с обычными таблицами стилей, используя соглашение об именах файлов [name] .module.css. Модули CSS позволяют определять область действия CSS путем автоматического создания уникального имени класса в формате [имя файла] _ [имя класса] __ [хэш].

пример Header.module.css nb: заголовок здесь может быть любым

 04.08.2020 13:24
Другие вопросы по теме
Развернуть в хранилище недействительных URL-адресов heroku
Проблема с развертыванием приложения angular js на сервере WAS
Как настроить index.js с hapi npm для развертывания
Почтальон не возвращает стол
Невозможно получить входные данные формы рядом друг с другом
Доступ к политике корзины Amazon s3 запрещен при размещении статической веб-страницы
Как я могу использовать ссылку на моем веб-сайте, чтобы открыть приложение?
Django: как я могу реализовать ключ "запомнить меня" на моей странице входа в систему
Flask + React + Nginx: страницы, показывающие 404, не найдены для всех маршрутов с номером порта 80
Должен ли я использовать только стандарты w3 для рабочих сайтов?
Похожие вопросы
Используем React и пытаемся вывести значение точно из {this.state.value}
React js не рендеринг через JSON из rest api
Текстовые вводы React Auto RTL
Как я могу отображать ошибки в React; я получаю ошибки массива от redux?
Не может получить доступ к индексу массива в состоянии ReactJS
Пробуем работать с openlayers, Golden Layout, reactjs. Но карта открытых слоев отображается только в одном окне золотой раскладки, а не в других
Ошибка обработки нескольких списков столбцов в React.js
Навигация в ReactNative
Куда должна идти бизнес-логика (создатели действий или редукторы) при реагировании с использованием redux?
Доступ к элементам вложенного массива в javascript
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
React useEffect вызывает: невозможно выполнить обновление состояния React для несмонтированного компонента
Вопросы
JAVASCRIPT
React useEffect вызывает: невозможно выполнить обновление состояния React для несмонтированного компонента
При извлечении данных я получаю: Не удается выполнить обновление состояния React для несмонтированного компонента. Приложение все еще работает, но реакция предполагает, что я могу вызвать утечку памяти.

This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function."

Почему я продолжаю получать это предупреждение?

Я попытался исследовать эти решения:

https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal

https://developer.mozilla.org/en-US/docs/Web/API/AbortController

но это все еще давало мне предупреждение.

const  ArtistProfile = props => {
  const [artistData, setArtistData] = useState(null)
  const token = props.spotifyAPI.user_token

  const fetchData = () => {
    const id = window.location.pathname.split("/").pop()
    console.info(id)
    props.spotifyAPI.getArtistProfile(id, ["album"], "US", 10)
    .then(data => {setArtistData(data)})
  }
  useEffect(() => {
    fetchData()
    return () => { props.spotifyAPI.cancelRequest() }
  }, [])
  
  return (
    <ArtistProfileContainer>
      <AlbumContainer>
        {artistData ? artistData.artistAlbums.items.map(album => {
          return (
            <AlbumTag
              image = {album.images[0].url}
              name = {album.name}
              artists = {album.artists}
              key = {album.id}
            />
          )
        })
        : null}
      </AlbumContainer>
    </ArtistProfileContainer>
  )
}
Редактировать:

В моем файле API я добавил AbortController() и использовал signal, чтобы я мог отменить запрос.

export function spotifyAPI() {
  const controller = new AbortController()
  const signal = controller.signal

// code ...

  this.getArtist = (id) => {
    return (
      fetch(
        `https://api.spotify.com/v1/artists/${id}`, {
        headers: {"Authorization": "Bearer " + this.user_token}
      }, {signal})
      .then(response => {
        return checkServerStat(response.status, response.json())
      })
    )
  }

  // code ...

  // this is my cancel method
  this.cancelRequest = () => controller.abort()
}
Мой spotify.getArtistProfile() выглядит так

this.getArtistProfile = (id,includeGroups,market,limit,offset) => {
  return Promise.all([
    this.getArtist(id),
    this.getArtistAlbums(id,includeGroups,market,limit,offset),
    this.getArtistTopTracks(id,market)
  ])
  .then(response => {
    return ({
      artist: response[0],
      artistAlbums: response[1],
      artistTopTracks: response[2]
    })
  })
}
но поскольку мой сигнал используется для отдельных вызовов API, которые разрешаются в Promise.all я не могу abort() это обещание, поэтому я всегда буду устанавливать состояние.

 02.03.2019 02:25
104
4
240 143
13
Данный вопрос помечен как решенный
 Ответы 13
Вы можете попробовать установить такое состояние и проверить, смонтирован ли ваш компонент или нет. Таким образом, вы уверены, что если ваш компонент размонтирован, вы не пытаетесь что-то получить.

const [didMount, setDidMount] = useState(false); 

useEffect(() => {
   setDidMount(true);
   return () => setDidMount(false);
}, [])

if (!didMount) {
  return null;
}

return (
    <ArtistProfileContainer>
      <AlbumContainer>
        {artistData ? artistData.artistAlbums.items.map(album => {
          return (
            <AlbumTag
              image = {album.images[0].url}
              name = {album.name}
              artists = {album.artists}
              key = {album.id}
            />
          )
        })
        : null}
      </AlbumContainer>
    </ArtistProfileContainer>
  )
Надеюсь, что это поможет вам.

 02.03.2019 16:50
 Ответ принят как подходящий
Разделение AbortController между fetch() запросами — правильный подход.
Когда Любые из Promise прерывается, Promise.all() отклоняется с AbortError:

function Component(props) {
  const [fetched, setFetched] = React.useState(false);
  React.useEffect(() => {
    const ac = new AbortController();
    Promise.all([
      fetch('http://placekitten.com/1000/1000', {signal: ac.signal}),
      fetch('http://placekitten.com/2000/2000', {signal: ac.signal})
    ]).then(() => setFetched(true))
      .catch(ex => console.error(ex));
    return () => ac.abort(); // Abort both fetches on unmount
  }, []);
  return fetched;
}
const main = document.querySelector('main');
ReactDOM.render(React.createElement(Component), main);
setTimeout(() => ReactDOM.unmountComponentAtNode(main), 1); // Unmount after 1ms
<script src = "//cdnjs.cloudflare.com/ajax/libs/react/16.8.3/umd/react.development.js"></script>
<script src = "//cdnjs.cloudflare.com/ajax/libs/react-dom/16.8.3/umd/react-dom.development.js"></script>
<main></main>
 03.03.2019 00:52
Мне помогла очистка состояния в размонтировании компонента.

 const [state, setState] = useState({});

useEffect(() => {
    myFunction();
    return () => {
      setState({}); // This worked for me
    };
}, []);

const myFunction = () => {
    setState({
        name: 'Jhon',
        surname: 'Doe',
    })
}

 25.11.2020 16:25
У меня была аналогичная проблема с прокруткой вверх, и ответ @CalosVallejo решил ее :) Большое спасибо!!

const ScrollToTop = () => { 

  const [showScroll, setShowScroll] = useState();

//------------------ solution
  useEffect(() => {
    checkScrollTop();
    return () => {
      setShowScroll({}); // This worked for me
    };
  }, []);
//-----------------  solution

  const checkScrollTop = () => {
    setShowScroll(true);
 
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
 
  };

  window.addEventListener("scroll", checkScrollTop);

  return (
    <React.Fragment>
      <div className = "back-to-top">
        <h1
          className = "scrollTop"
          onClick = {scrollTop}
          style = {{ display: showScroll }}
        >
          {" "}
          Back to top <span>&#10230; </span>
        </h1>
      </div>
    </React.Fragment>
  );
};
 08.03.2021 07:13
Эта ошибка возникает, когда вы выполняете обновление состояния текущего компонента после перехода к другому компоненту:

Например

  axios
      .post(API.BASE_URI + API.LOGIN, { email: username, password: password })
      .then((res) => {
        if (res.status === 200) {
          dispatch(login(res.data.data)); // line#5 logging user in
          setSigningIn(false); // line#6 updating some state
        } else {
          setSigningIn(false);
          ToastAndroid.show(
            "Email or Password is not correct!",
            ToastAndroid.LONG
          );
        }
      })
В приведенном выше случае в строке № 5 я отправляю действие login, которое, в свою очередь, направляет пользователя на панель инструментов, и, следовательно, экран входа в систему теперь отключается. Теперь, когда React Native достигает строки № 6 и видит, что состояние обновляется, он громко кричит, как мне это сделать, login component больше нет.

Решение:
  axios
      .post(API.BASE_URI + API.LOGIN, { email: username, password: password })
      .then((res) => {
        if (res.status === 200) {
          setSigningIn(false); // line#6 updating some state -- moved this line up
          dispatch(login(res.data.data)); // line#5 logging user in
        } else {
          setSigningIn(false);
          ToastAndroid.show(
            "Email or Password is not correct!",
            ToastAndroid.LONG
          );
        }
      })
Просто переместите обновление состояния реакции выше, переместите строку 6 вверх по строке 5.
Теперь состояние обновляется перед уходом пользователя. ПОБЕДА ПОБЕДА

 24.03.2021 14:32
Например, у вас есть компонент, который выполняет какие-то асинхронные действия, затем записывает результат в состояние и отображает содержимое состояния на странице:

export default function MyComponent() {
    const [loading, setLoading] = useState(false);
    const [someData, setSomeData] = useState({});
    // ...
    useEffect(() => {
        setLoading(true);
        someResponse = await doVeryLongRequest(); // it needs some time
        // When request is finished:
        setSomeData(someResponse.data); // (1) write data to state
        setLoading(false); // (2) write some value to state
    }, []);

    return (
        <div className = {loading ? "loading" : ""}>
            {someData}
            <a href = "SOME_LOCAL_LINK">Go away from here!</a>
        </div>
    );
}
Допустим, пользователь нажимает на какую-то ссылку, когда doVeryLongRequest() все еще выполняется. MyComponent размонтирован, но запрос все еще жив, и когда он получает ответ, он пытается установить состояние в строках (1) и (2) и пытается изменить соответствующие узлы в HTML. Мы получим ошибку от темы.

Мы можем исправить это, проверив, смонтирован ли компонент или нет. Давайте создадим ссылку componentMounted (строка (3) ниже) и установим ее true. Когда компонент размонтирован, мы установим для него значение false (строка (4) ниже). И давайте проверять переменную componentMounted каждый раз, когда мы пытаемся установить состояние (строка (5) ниже).

Код с исправлениями:

export default function MyComponent() {
    const [loading, setLoading] = useState(false);
    const [someData, setSomeData] = useState({});
    const componentMounted = useRef(true); // (3) component is mounted
    // ...
    useEffect(() => {
        setLoading(true);
        someResponse = await doVeryLongRequest(); // it needs some time
        // When request is finished:
        if (componentMounted.current){ // (5) is component still mounted?
            setSomeData(someResponse.data); // (1) write data to state
            setLoading(false); // (2) write some value to state
        }
        return () => { // This code runs when component is unmounted
            componentMounted.current = false; // (4) set it to false when we leave the page
        }
    }, []);

    return (
        <div className = {loading ? "loading" : ""}>
            {someData}
            <a href = "SOME_LOCAL_LINK">Go away from here!</a>
        </div>
    );
}
 31.03.2021 18:46
Если пользователь уйдет или что-то еще приведет к уничтожению компонента до того, как асинхронный вызов вернется и попытается установить для него setState, это вызовет ошибку. Как правило, это безвредно, если это действительно асинхронный вызов с поздним завершением. Есть несколько способов заглушить ошибку.

Если вы реализуете такой хук, как useAsync, вы можете объявить свои useStates с помощью let вместо const, а в деструкторе, возвращаемом useEffect, установить функцию (функции) setState в неактивную функцию.


export function useAsync<T, F extends IUseAsyncGettor<T>>(gettor: F, ...rest: Parameters<F>): IUseAsync<T> {
  let [parameters, setParameters] = useState(rest);
  if (parameters !== rest && parameters.some((_, i) => parameters[i] !== rest[i]))
    setParameters(rest);

  const refresh: () => void = useCallback(() => {
    const promise: Promise<T | void> = gettor
      .apply(null, parameters)
      .then(value => setTuple([value, { isLoading: false, promise, refresh, error: undefined }]))
      .catch(error => setTuple([undefined, { isLoading: false, promise, refresh, error }]));
    setTuple([undefined, { isLoading: true, promise, refresh, error: undefined }]);
    return promise;
  }, [gettor, parameters]);

  useEffect(() => {
    refresh();
    // and for when async finishes after user navs away //////////
    return () => { setTuple = setParameters = (() => undefined) } 
  }, [refresh]);

  let [tuple, setTuple] = useState<IUseAsync<T>>([undefined, { isLoading: true, refresh, promise: Promise.resolve() }]);
  return tuple;
}
Однако это не будет хорошо работать в компоненте. Там вы можете обернуть useState в функцию, которая отслеживает монтирование/размонтирование, и оборачивает возвращаемую функцию setState с проверкой if.

export const MyComponent = () => {
  const [numPendingPromises, setNumPendingPromises] = useUnlessUnmounted(useState(0));
  // ..etc.

// imported from elsewhere ////

export function useUnlessUnmounted<T>(useStateTuple: [val: T, setVal: Dispatch<SetStateAction<T>>]): [T, Dispatch<SetStateAction<T>>] {
  const [val, setVal] = useStateTuple;
  const [isMounted, setIsMounted] = useState(true);
  useEffect(() => () => setIsMounted(false), []);
  return [val, newVal => (isMounted ? setVal(newVal) : () => void 0)];
}
Затем вы можете создать крючок useStateAsync, чтобы немного упростить.

export function useStateAsync<T>(initialState: T | (() => T)): [T, Dispatch<SetStateAction<T>>] {
  return useUnlessUnmounted(useState(initialState));
}
 02.04.2021 03:45
Попробуйте добавить зависимости в useEffect:

  useEffect(() => {
    fetchData()
    return () => { props.spotifyAPI.cancelRequest() }
  }, [fetchData, props.spotifyAPI])
 28.04.2021 18:05
У меня такое же предупреждение, это решение сработало для меня ->

useEffect(() => {
    const unsubscribe = fetchData(); //subscribe
    return unsubscribe; //unsubscribe
}, []);
если у вас есть более одной функции выборки, то

const getData = () => {
    fetch1();
    fetch2();
    fetch3();
}

useEffect(() => {
    const unsubscribe = getData(); //subscribe
    return unsubscribe; //unsubscribe
}, []);
 04.05.2021 15:31
Простой способ

    let fetchingFunction= async()=>{
      // fetching
    }

React.useEffect(() => {
    fetchingFunction();
    return () => {
        fetchingFunction= null
    }
}, [])
 31.05.2021 20:40
есть много ответов, но я подумал, что смогу более просто продемонстрировать, как работает abort (по крайней мере, как это решило проблему для меня):

useEffect(() => {
  // get abortion variables
  let abortController = new AbortController();
  let aborted = abortController.signal.aborted; // true || false
  async function fetchResults() {
    let response = await fetch(`[WEBSITE LINK]`);
    let data = await response.json();
    aborted = abortController.signal.aborted; // before 'if' statement check again if aborted
    if (aborted === false) {
      // All your 'set states' inside this kind of 'if' statement
      setState(data);
    }
  }
  fetchResults();
  return () => {
    abortController.abort();
  };
}, [])
Другие методы: https://medium.com/wesionary-team/how-to-fix-memory-leak-issue-in-react-js-using-hook-a5ecbf9becf8

 15.06.2021 21:38
варианты = {{ filterType: "флажок" , текстовые метки: { тело: { noMatch: Загрузка? : «К сожалению, нет соответствующих данных для отображения», }, }, }}

 29.07.2021 15:17
Обычно эта проблема возникает, когда вы показываете компонент условно, например:

showModal && <Modal onClose = {toggleModal}/> 
Вы можете попробовать сделать несколько маленьких трюков в функции Modal onClose, например

setTimeout(onClose, 0)
 30.12.2021 06:56
Другие вопросы по теме
Как добавить элементы в объект - React
Как я могу вставить незакрытые div в свой массив?
Что в вашем коде может помешать включению javascript в вашем браузере?
Как использовать обратный вызов с хуком useState в реакции
Как многократно выполнять оконную функцию в GatsbyJS/ReactJS?
Как экспортировать мою библиотеку с путями с помощью веб-пакета?
Настройка реакции на собственное сообщение общего доступа на основе приложения
React Native Fetch (uri) говорит, что сеть [TypeError: сетевой запрос не выполнен], когда я пытаюсь получить локальное изображение
Опубликовать объект массива в API в ReactJs
Как назначить значение асинхронного хранилища непосредственно для состояния
Похожие вопросы
Переопределить Element.prototype.attachShadow с помощью расширения Chrome
Получить первый уровень подсчета длины объекта из JSON в js
Поиск Mongodb для получения одного элемента вместо объекта
Блокировка чтения из разных источников (CORB) с типом MIME application/json
Попытка использовать сгенерированный код Babel на страницах .Net Core Razor
Как сделать редактируемый event.keyCode
Динамически добавлять раскрывающийся список на холсте
Перенаправить страницу только после успеха в PHP с помощью Fetch
Группировать вложенные массивы в объект в js (Tree Vue.js)
Как добавить элементы в объект - React
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
Как создать приложение React прямо в текущей папке
Вопросы
REACTJS
Как создать приложение React прямо в текущей папке
Я знаю, что делал это раньше, но нигде не могу найти ответ. Я хочу запустить приложение create-реагировать, не создавая совершенно другую папку в папке, в которой я уже нахожусь. Я считаю, что это просто дополнительный флаг, добавленный к команде.

 09.03.2019 23:27
129
0
82 382
13
Данный вопрос помечен как решенный
 Ответы 13
 Ответ принят как подходящий
Вы можете создать новое приложение React в текущем каталоге, написав . вместо имени проекта.

create-react-app .
 09.03.2019 23:32
If you've previously installed create-react-app globally via npm install -g create-react-app, we recommend you uninstall the package using npm uninstall -g create-react-app to ensure that npx always uses the latest version.

Для новой версии create-react-app (v3):

npx create-react-app .
Обратите внимание на полная остановка(точка) в конце команды ., которая соответствует текущему каталогу.

 19.01.2020 14:53
Создать текстовый проект в текущем каталоге, в котором вы находитесь, так же просто, как запустить приведенную ниже команду.

npx create-react-app . 
Или это, когда у вас есть приложение для создания реакции, установленное глобально.

 create-react-app . 
Одна важная вещь, которую я хочу, чтобы вы заметили, это точка (точка или точка) в конце каждой команды. Эта точка означает, что вы хотите создать приложение в текущей папке.

надеюсь, это поможет

 19.01.2020 16:43
Следующее работает Только, если ваш текущий каталог соответствует ограничениям именования npm.

npx create-react-app . 
Текущий каталог должен:

содержать только символы, удобные для URL
нет заглавных букв
Например, текущий каталог не может называться «React App». Это должно быть «реагированное приложение».

 02.03.2020 11:38
если вы используете последнюю версию узлы, вы можете использовать этот код:

npx create-react-app your-app-name
вы проверяете версию Node по этому коду:

node --version
он должен быть выше v10

 02.03.2020 11:44
Когда вы используете create-react-app app-name, часть, которая идет после create-react-app, сообщает CRA куда о создании приложения для реагирования. Таким образом, create-react-app app-name на самом деле говорит CRA создать реагирующее приложение в новом каталоге под названием «my-app». Это может вызвать множество проблем с развертыванием для неопытного разработчика.

Используя npx create-react-app ., мы можем указать CRA создать приложение для реагирования здесь или в текущем каталоге. Это поможет предотвратить любые проблемы, которые могут возникнуть из-за того, что ваше реагирующее приложение не находится непосредственно в корневом каталоге вашего проекта или репозитория.

 28.05.2020 18:35
это очень просто

npx create-react-app .
Примечание: убедитесь, что имя вашей папки начинается с нижнего регистра

 16.07.2020 15:16
Вы простой тип. вместо имени реакции-приложения

npx create-react-app .
Если у вас уже было имя папки, начинающееся с . то вы получите ошибку. Вам нужно удалить папку, а затем попробовать команду выше

 24.03.2021 04:24
npx create-react-app . my-app --template typescript
 14.05.2021 16:57
создать-реагировать-приложение.

Я нашел это очень полезным для разделения моего клиента и сервера на отдельные каталоги в каталоге родительского проекта. Таким образом, вы можете разделить сервер и клиент и легко узнать, какие API работают должным образом.

 02.07.2021 06:13
Это работает для меня.

npx create-react-app .

Сначала перейдите в каталог, в котором вы хотите создать приложение для реагирования.
Затем выполните команду npx create-react-app .
просто поставить точку (.) вместо имени проекта.
Примечание: Если вы устанавливаете пакет create-react-app напрямую через npm с помощью этой команды npm install create-react-app, вам нужно выполнить следующую команду, чтобы создать приложение для реагирования в текущем каталоге create-react-app . (тогда не нужно добавлять npx).

 18.09.2021 11:49
Вы можете создать новое приложение React в текущем каталоге, написав ./ вместо имени проекта.

Запустите эту команду в своем терминале> npx create-react-app ./

бывший.-

PS E:\React Course\covid-19-state-vice-cases>npx create-react-app ./

 30.09.2021 13:41
В моем случае я использовал Windows PowerShell, и npx create-react-app ./ у меня не работало, поэтому вместо этого я использовал это -

npx create-react-app .
 10.10.2021 09:07
Другие вопросы по теме
Grep несколько текстовых файлов с выводом каждого файла в новой строке
Некоторые команды Docker не работают в Windows Powershell ISE, но работают в других инструментах командной строки
Как создать файл Jar с параметрами выполнения?
Эквивалент Windows для Linux: Find -name
Facebook Graph API: невозможно получить пол пользователя с помощью curl
Find: указать дату и размер без использования -printf
Как дать разрешение на запись в папку
Sed: распечатать дерево каталогов со временем и информацией ls -altr
Превращение класса Java в исполняемый файл с помощью командной строки
Принудительный пользовательский ввод через командную строку в python
Похожие вопросы
Как уменьшить конкретную высоту строки в таблице React / таблице флажков React
(Развертывание React и Firebase) пустая страница при обновлении
Как отобразить элемент в матрице в реакции?
Передать параметр реквизиту, который на самом деле является компонентом?
Как исправить «TypeError: items.map не является функцией» при работе с React и API?
Получение ошибки при создании проекта реакции
Применение функции карты работает, а функция foreach не реагирует
Проблемы с Testcafe LocalStorage
ReferenceInput с вложенным CheckBoxGroupInput ведет себя странно
Firebase не загружает значение в моментальный снимок
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
Кнопка реакции на странице перенаправления щелчка
Вопросы
JAVASCRIPT
Кнопка реакции на странице перенаправления щелчка
Я работаю над веб-приложением, используя React и bootstrap. Когда дело доходит до применения кнопки onClick, мне трудно разрешить перенаправление моей страницы на другую. если после href, я не могу перейти на другую страницу.

Не могли бы вы сказать мне, есть ли необходимость в использовании реакции-навигации или чего-то еще для навигации по странице с помощью кнопки onClick?

import React, { Component } from 'react';
import { Button, Card, CardBody, CardGroup, Col, Container, Input, InputGroup, InputGroupAddon, InputGroupText, Row, NavLink  } from 'reactstrap';

class LoginLayout extends Component {

  render() {
    return (
 <div className = "app flex-row align-items-center">
        <Container>
     ...
                    <Row>
                      <Col xs = "6">                      
                        <Button color = "primary" className = "px-4">
                            Login
                         </Button>
                      </Col>
                      <Col xs = "6" className = "text-right">
                        <Button color = "link" className = "px-0">Forgot password?</Button>
                      </Col>
                    </Row>
               ...
        </Container>
      </div>
    );
  }
}
 01.06.2018 15:52
89
1
342 521
14
Данный вопрос помечен как решенный
 Ответы 14
Простой обработчик щелчка по кнопке и настройка window.location.hash сделают свое дело, если ваш пункт назначения также находится в приложении.

Вы можете прослушать событие hashchange на window, проанализировать полученный URL, вызвать в this.setState(), и у вас будет собственный простой маршрутизатор библиотека не нужна.

class LoginLayout extends Component {
    constuctor() {
      this.handlePageChange = this.handlePageChange.bind(this);
      this.handleRouteChange = this.handleRouteChange.bind(this);
      this.state = { page_number: 0 }
    }

  handlePageChange() {
    window.location.hash = "#/my/target/url";
  }

  handleRouteChange(event) {
    const destination = event.newURL;
    // check the URL string, or whatever other condition, to determine
    // how to set internal state.
    if (some_condition) {
      this.setState({ page_number: 1 });
    }
  }

  componentDidMount() {
    window.addEventListener('hashchange', this.handleRouteChange, false);
  }

  render() {
    // @TODO: check this.state.page_number and render the correct page.
    return (
      <div className = "app flex-row align-items-center">
        <Container>
          ...
                <Row>
                  <Col xs = "6">                      
                    <Button 
                       color = "primary"
                       className = "px-4"
                       onClick = {this.handlePageChange}
                    >
                        Login
                     </Button>
                  </Col>
                  <Col xs = "6" className = "text-right">
                    <Button color = "link" className = "px-0">Forgot password </Button>
                  </Col>
                </Row>
           ...
        </Container>
      </div>
    );
  }
}
 01.06.2018 15:59
Обновить:

React Router v5 с хуками:

import React from 'react';
import { useHistory } from "react-router-dom";
function LoginLayout() {

  const history = useHistory();

  const routeChange = () =>{ 
    let path = `newPath`; 
    history.push(path);
  }

  return (
      <div className = "app flex-row align-items-center">
        <Container>
          ...
          <Row>
            <Col xs = "6">                      
              <Button color = "primary" className = "px-4"
                onClick = {routeChange}
                  >
                  Login
                </Button>
            </Col>
            <Col xs = "6" className = "text-right">
              <Button color = "link" className = "px-0">Forgot password?</Button>
            </Col>
          </Row>
          ...
        </Container>
      </div>
  );
}
export default LoginLayout;
с React Router v5:

import { useHistory } from 'react-router-dom';
import { Button, Card, CardBody, CardGroup, Col, Container, Input, InputGroup, InputGroupAddon, InputGroupText, Row, NavLink  } from 'reactstrap';

class LoginLayout extends Component {

  routeChange=()=> {
    let path = `newPath`;
    let history = useHistory();
    history.push(path);
  }

  render() {
    return (
      <div className = "app flex-row align-items-center">
        <Container>
          ...
          <Row>
            <Col xs = "6">                      
              <Button color = "primary" className = "px-4"
                onClick = {this.routeChange}
                  >
                  Login
                </Button>
            </Col>
            <Col xs = "6" className = "text-right">
              <Button color = "link" className = "px-0">Forgot password?</Button>
            </Col>
          </Row>
          ...
        </Container>
      </div>
    );
  }
}

export default LoginLayout;
с React Router v4:

import { withRouter } from 'react-router-dom';
import { Button, Card, CardBody, CardGroup, Col, Container, Input, InputGroup, InputGroupAddon, InputGroupText, Row, NavLink  } from 'reactstrap';

class LoginLayout extends Component {
  constuctor() {
    this.routeChange = this.routeChange.bind(this);
  }

  routeChange() {
    let path = `newPath`;
    this.props.history.push(path);
  }

  render() {
    return (
      <div className = "app flex-row align-items-center">
        <Container>
          ...
          <Row>
            <Col xs = "6">                      
              <Button color = "primary" className = "px-4"
                onClick = {this.routeChange}
                  >
                  Login
                </Button>
            </Col>
            <Col xs = "6" className = "text-right">
              <Button color = "link" className = "px-0">Forgot password?</Button>
            </Col>
          </Row>
          ...
        </Container>
      </div>
    );
  }
}

export default withRouter(LoginLayout);
 01.06.2018 16:13
Я пытался найти способ с помощью Redirect, но потерпел неудачу. Перенаправление onClick проще, чем мы думаем. Просто поместите следующий базовый JavaScript в свою функцию onClick, без обезьяньих дел:

window.location.href = "pagelink"
 18.09.2019 21:22
 Ответ принят как подходящий
Не используйте кнопку как ссылку. Вместо этого используйте ссылку, стилизованную под кнопку.

<Link to = "/signup" className = "btn btn-primary">Sign up</Link>
 02.10.2019 10:57
Очень простой способ сделать это:

onClick = {this.fun.bind(this)}
и для функции:

fun() {
  this.props.history.push("/Home");
}
Finlay вам нужно импортировать с помощью Router:

import { withRouter } from 'react-router-dom';
и экспортировать как:

export default withRouter (comp_name);
 01.11.2019 23:40
Это можно сделать очень просто, вам не нужно использовать для этого другую функцию или библиотеку.

onClick = {event =>  window.location.href='/your-href'}
 25.11.2019 06:50
С React Router v5.1:

import {useHistory} from 'react-router-dom';
import React, {Component} from 'react';
import {Button} from 'reactstrap';
.....
.....
export class yourComponent extends Component {
    .....
    componentDidMount() { 
        let history = useHistory;
        .......
    }

    render() {
        return(
        .....
        .....
            <Button className = "fooBarClass" onClick = {() => history.back()}>Back</Button>

        )
    }
}

 01.12.2019 12:02
React Router v5.1.2:

import { useHistory } from 'react-router-dom';
const App = () => {
   const history = useHistory()
   <i className = "icon list arrow left"
      onClick = {() => {
        history.goBack()
   }}></i>
}
 30.12.2019 05:47
У меня также были проблемы с переходом к другому виду с помощью navlink.

Моя реализация была следующей и работает отлично;

<NavLink tag='li'>
  <div
    onClick = {() =>
      this.props.history.push('/admin/my- settings')
    }
  >
    <DropdownItem className='nav-item'>
      Settings
    </DropdownItem>
  </div>
</NavLink>
Оберните его в div, назначьте ему обработчик onClick. Используйте объект истории, чтобы отправить новое представление.

 31.03.2020 23:58
Сначала импортируйте его:

import { useHistory } from 'react-router-dom';
Затем в функции или классе:

const history = useHistory();
Наконец, вы помещаете его в функцию onClick:

<Button onClick = {()=> history.push("/mypage")}>Click me!</Button>
 06.04.2020 13:17
useHistory() от react-router-dom может решить вашу проблему

import React from 'react';
import { useHistory } from "react-router-dom";
function NavigationDemo() {
  const history = useHistory();
  const navigateTo = () => history.push('/componentURL');//eg.history.push('/login');

  return (
   <div>
   <button onClick = {navigateTo} type = "button" />
   </div>
  );
}
export default NavigationDemo;
 29.04.2020 08:06
Если все вышеперечисленные методы не работают, используйте что-то вроде этого:

    import React, { Component } from 'react';
    import { Redirect } from "react-router";
    
    export default class Reedirect extends Component {
        state = {
            redirect: false
        }
        redirectHandler = () => {
            this.setState({ redirect: true })
            this.renderRedirect();
        }
        renderRedirect = () => {
            if (this.state.redirect) {
                return <Redirect to='/' />
            }
        }
        render() {
            return (
                <>
                    <button onClick = {this.redirectHandler}>click me</button>
                    {this.renderRedirect()}
                </>
            )
        }
    }
 15.07.2020 12:12
если вы хотите перенаправить на маршрут по событию Click.
Просто сделай это

В функциональном компоненте
props.history.push('/link')
В компоненте класса
this.props.history.push('/link')

Пример:

<button onClick = {()=>{props.history.push('/link')}} >Press</button>
Проверено на:
реагировать-маршрутизатор-дом: 5.2.0,

реагировать: 16.12.0

 21.08.2020 02:53
Если вы уже создали класс для определения свойств вашей кнопки (если у вас уже есть класс кнопки), и вы хотите вызвать его в другом классе и связать его с другой страницей с помощью кнопки, созданной в этом новом классе, просто импортируйте вашу «кнопку» (или имя вашего класса кнопок) и используйте приведенный ниже код:

import React , {useState} from 'react';
import {Button} from '../Button';

function Iworkforbutton() {
const [button] = useState(true);

return (
    <div className='button-class'>
        {button && <Button onClick = {()=> window.location.href='/yourPath'}
            I am Button </Button>
    </div>
    )
}

export default Iworkforbutton
 04.05.2021 13:29
Другие вопросы по теме
Как запустить React.js на сервере Scala REST API
Typescript React псевдоним HOC (для использования <Component.alias />) проблемы с типизацией
Как поделиться текущим URL в ReactJS
Что является аналогом элемента devextreme dxItem в React?
Изменение состояния реакции не показывает изменения при возврате
Reactjs ToggleButtonGroup с типом радио не работает
Функция React не возвращает элемент <div>
ReactJS undefined arr.map
React 2 компонента одного и того же класса в переключателе, переходя от 1 к другому, больше не отображается
Транспилируйте ES7 в ES6 для современных браузеров
Похожие вопросы
Округлите число с помощью JavaScript
Ext-js: невозможно отобразить данные на панели календаря
Сложение чисел с плавающей запятой в javascript
Vscode автоматическое сворачивание при открытом файле
Транспортир, проверяющий, равен ли текущий URL строковому URL
Невозможно прочитать свойство currentHash из undefined
Чтение реестра Windows Reg_SZ в javascript
Javascript For loop autoincreament не работает
Получить значение из объекта json с помощью javascript
Как настроить указатель стрелки манометра с помощью D3.js или C3.js?
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
Как скачать файл в React JS
Вопросы
JAVASCRIPT
Как скачать файл в React JS
Я получаю URL-адрес файла в качестве ответа от api. когда пользователь нажимает кнопку загрузки, файл должен быть загружен без открытия предварительного просмотра файла в новой вкладке. Как этого добиться в React JS?

 05.06.2018 09:51
91
3
265 962
14
Данный вопрос помечен как решенный
 Ответы 14
Это не связано с React. Однако вы можете использовать атрибут download в элементе привязки <a>, чтобы указать браузеру загрузить файл.

<a href='/somefile.txt' download>Click to download</a>
Это поддерживается не во всех браузерах: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a

 05.06.2018 09:57
 Ответ принят как подходящий
Запускать загрузку браузера из внешнего интерфейса ненадежно.

Что вам нужно сделать, так это создать конечную точку, которая при вызове будет предоставлять правильные заголовки ответов, тем самым инициируя загрузку браузера.

Фронтенд-код может не так много. Например, атрибут «загрузка» может просто открыть файл в новой вкладке в зависимости от браузера.

Заголовки ответов, на которые вам нужно обратить внимание, вероятно, это Content-Type и Content-Disposition. Вы должны проверить этот отвечать для более подробного объяснения.

 05.06.2018 10:20
браузеры достаточно умны, чтобы обнаруживать ссылку и загружать ее напрямую при нажатии на тег привязки без использования атрибута загрузки.

после получения ссылки на файл из api просто используйте простой javascript, создав тег привязки, и удалите его после динамического щелчка сразу на лету.

const link = document.createElement('a');
link.href = `your_link.pdf`;
document.body.appendChild(link);
link.click();
document.body.removeChild(link);
 01.11.2018 13:57
Если вы используете React Router, используйте это:

<Link to = "/files/myfile.pdf" target = "_blank" download>Download</Link>
Где /files/myfile.pdf находится внутри вашей папки public.

 26.06.2019 03:08
Вы можете определить компонент и использовать его где угодно.

import React from 'react';
import PropTypes from 'prop-types';


export const DownloadLink = ({ to, children, ...rest }) => {

  return (
    <a
      {...rest}
      href = {to}
      download
    >
      {children}
    </a>
  );
};


DownloadLink.propTypes = {
  to: PropTypes.string,
  children: PropTypes.any,
};

export default DownloadLink;
 11.02.2020 14:12
React создает проблему безопасности при использовании тега a с target = "_blank".

Мне удалось заставить его работать вот так:

<a href = {uploadedFileLink} target = "_blank" rel = "noopener noreferrer" download>
   <Button>
      <i className = "fas fa-download"/>
      Download File
   </Button>
</a>
 03.05.2020 10:52
Вот как я это сделал в React:

import MyPDF from '../path/to/file.pdf';
<a href = {myPDF} download = "My_File.pdf"> Download Here </a>
Важно переопределить имя файла по умолчанию с помощью download = "name_of_file_you_want.pdf", иначе файл получит хэш-номер, прикрепленный к нему при загрузке.

 09.06.2020 02:08
У меня точно такая же проблема, и вот решение, которым я сейчас пользуюсь: (Заметьте, мне это кажется идеальным, потому что он сохраняет файлы, тесно связанные с приложением SinglePageApplication React, которое загружается из Amazon S3. Таким образом, это похоже на хранение на S3 и в приложении, которое знает, где оно находится в S3, относительно говоря .

Шаги
3 шага:

Используйте файловую заставку в проекте: npmjs / пакет / хранитель файлов (npm install file-saver или что-то в этом роде)
Поместите файл в свой проект Вы говорите, что это в папке компонентов. Что ж, есть вероятность, что если у вас есть веб-пакет, он попытается его минимизировать. (Кто-нибудь, пожалуйста, укажите, что веб-пакет будет делать с файлом ресурсов в папке компонентов), и поэтому я не думаю, что это то, что вам нужно. . Итак, я предлагаю поместить актив в папку public под именем resource или asset. Webpack не касается папки public и index.html, и ваши ресурсы копируются в производственную сборку как есть, где вы можете ссылаться на них, как показано на следующем шаге.
Обратитесь к файлу в вашем проекте Пример кода:
import FileSaver from 'file-saver';
FileSaver.saveAs(
    process.env.PUBLIC_URL + "/resource/file.anyType",
    "fileNameYouWishCustomerToDownLoadAs.anyType");
Источник
Create-React-App.dev | Использование общей папки
Github | Документация по хранению файлов
Приложение
Я также пробую Link компонент react-routerReact-router-docs / Ссылка. ZIP-файл загрузился и каким-то образом распаковался должным образом. Как правило, ссылки имеют синий цвет, чтобы унаследовать родительскую цветовую схему, просто добавьте опору, например: style = {color: inherit}, или просто назначьте класс своей библиотеки CSS, например button button-primary или что-то в этом роде, если вы Bootstrappin '
Другие мудрые вопросы, с которыми он тесно связан:
скачать файл в React
как скачать файл в React JS
кнопка для загрузки файла в responseJS
загрузить образец файла в общую папку (отреагировать)
 12.07.2020 02:29
Вы можете использовать FileSaver.js для достижения этой цели:

const saveFile = () => {
fileSaver.saveAs(
  process.env.REACT_APP_CLIENT_URL + "/resources/cv.pdf",
  "MyCV.pdf"
);
};

<button className = "cv" onClick = {saveFile}>
    Download File
</button>
 16.08.2020 18:40
tldr; получить файл с URL-адреса, сохранить его как локальный Blob, вставить элемент ссылки в DOM и щелкнуть его, чтобы загрузить Blob

У меня был файл PDF, который хранился в S3 за URL-адресом Cloudfront. Я хотел, чтобы пользователь мог нажать кнопку и немедленно инициировать загрузку, не открывая новую вкладку с предварительным просмотром PDF. Как правило, если файл размещен по URL-адресу, домен которого отличается от домена, на котором в настоящее время находится пользователь, немедленная загрузка блокируется многими браузерами из соображений безопасности пользователя. Если вы используете это решение, не инициирует загрузку файла, если пользователь не нажимает кнопку для преднамеренной загрузки.

Чтобы справиться с этим, мне нужно было получить файл по URL-адресу, обойдя любые политики CORS, чтобы сохранить локальный Blob-объект, который затем стал бы источником загруженного файла. В приведенном ниже коде убедитесь, что вы заменили свои собственные fileURL, Content-Type и FileName.

fetch('https://cors-anywhere.herokuapp.com/' + fileURL, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/pdf',
    },
  })
  .then((response) => response.blob())
  .then((blob) => {
    // Create blob link to download
    const url = window.URL.createObjectURL(
      new Blob([blob]),
    );
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute(
      'download',
      `FileName.pdf`,
    );

    // Append to html link element page
    document.body.appendChild(link);

    // Start download
    link.click();

    // Clean up and remove the link
    link.parentNode.removeChild(link);
  });
Это решение ссылается на решения получение большого двоичного объекта из URL-адреса и с использованием прокси-сервера CORS.

Обновлять Начиная с 31 января 2021 г., демонстрация cors -where, размещенная на серверах Heroku, разрешает только ограниченное использование в целях тестирования и не может использоваться для производственных приложений. Вам нужно будет разместить свой собственный сервер cors -where, следуя корс везде или корс-сервер.

 19.09.2020 08:28
Решение (Идеально подходит для React JS, Next JS)

Вы можете использовать js-файл-загрузка, и это мой пример:

import axios from 'axios'
import fileDownload from 'js-file-download'
 
...

handleDownload = (url, filename) => {
  axios.get(url, {
    responseType: 'blob',
  })
  .then((res) => {
    fileDownload(res.data, filename)
  })
}
 
...

<button onClick = {() => {this.handleDownload('https://your-website.com/your-image.jpg', 'test-download.jpg')
}}>Download Image</button>
Этот плагин может загружать Excel и другие типы файлов.

 22.09.2020 05:39
Мы можем использовать компонент response-download-link для загрузки контента в виде файла.

<DownloadLink
label = "Download"
filename = "fileName.txt"
exportFile = {() => "Client side cache data here…"}/>
https://frugalisminds.com/how-to-download-file-in-react-js-react-download-link/

 10.11.2020 12:16
Скачать файл
Для загрузки вы можете использовать несколько способов, как описано выше, кроме того, я также предоставлю свою стратегию для этого сценария.

npm install --save react-download-link
import DownloadLink from "react-download-link";
Ссылка для загрузки React для данных кеша на стороне клиента
<DownloadLink 
    label = "Download" 
    filename = "fileName.txt"
    exportFile = {() => "Client side cache data here…"}
/>
Ссылка для скачивания данных кеша на стороне клиента с помощью обещаний
<DownloadLink
    label = "Download with Promise"
    filename = "fileName.txt"
    exportFile = {() => Promise.resolve("cached data here …")}
/>
Ссылка для загрузки данных из URL-адреса с функцией обещаний для извлечения данных из URL-адреса
 getDataFromURL = (url) => new Promise((resolve, reject) => {
    setTimeout(() => {
        fetch(url)
            .then(response => response.text())
            .then(data => {
                resolve(data)
            });
    });
}, 2000);
Компонент DownloadLink вызывает функцию Fetch
<DownloadLink
      label=”Download”
      filename=”filename.txt”
      exportFile = {() => Promise.resolve(this. getDataFromURL (url))}
/>
Удачного кодирования! ;)
 26.02.2021 04:34
fetchFile(){
  axios({
        url: `/someurl/thefiles/${this.props.file.id}`,
        method: "GET",
        headers: headers,
        responseType: "blob" // important
    }).then(response => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute(
            "download",
            `${this.props.file.name}.${this.props.file.mime}`
        );
        document.body.appendChild(link);
        link.click();
    });
}
render(){
  return( <button onClick = {this.fetchFile}> Download file </button>)
}
 22.04.2021 11:08
Другие вопросы по теме
Url-адрес responsejs изменяется на navlink, но вид не меняется
Реагировать на обновление отключенного компонента
Чтение CSV-файла для Graph
Невозможно создать составную сгруппированную гистограмму с помощью chart.js / react-chartjs-2 в React
Bootstrap / React - заполнить параметры выбора массивом
Как разрешить FOUC в React.js
Как вызвать компонент внутри компонента для динамической реакции
Как отображать отдельные экраны перед экраном с вкладками в Wix React Native Navigation
Как запретить пользователю покинуть текущий маршрут? Реагировать
Как проверить, активен ли маршрут?
Похожие вопросы
Url-адрес responsejs изменяется на navlink, но вид не меняется
Удалить объект из массива JavaScript
Реагировать на обновление отключенного компонента
CodeIgniter - сохранение значения из полей ввода, динамически добавляемого в форму в таблицу MySQL
Лучший способ достичь желаемых результатов для следующего кода
Черное пространство после окончания HTML
Проблема с анимацией текста css
Транспортир, невозможно получить элемент с помощью element (by.css)
Создать контроллер с помощью службы - Get ... не является функцией
Как включить или отключить кнопку, пока пользователь набирает текст в Vue Ui-select
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
Есть ли способ перезаписать цвет, который предоставляет пакет npm Material UI Icons в React?
Вопросы
REACTJS
Есть ли способ перезаписать цвет, который предоставляет пакет npm Material UI Icons в React?
Я новичок в React и использую значки пользовательского интерфейса материала пакета npm (https://www.npmjs.com/package/@material-ui/icons) и отображаю значки в компоненте React как таковые:

Импорт:

import KeyboardArrowRightIcon from 'material-ui/svg-icons/hardware/keyboard-arrow-right';
и рендеринг:

readMoreLink = {<a href = {someUrl} >Read more <KeyboardArrowRightIcon /></a>}
Однако, поскольку KeyboardArrowRightIcon - это SVG, предоставляемый пакетом npm, он имеет собственный цвет заливки:

Например: <svg viewBox = "0 0 24 24" style = "display: inline-block; color: rgba(0, 0, 0, 0.54);...

Я знаю, что могу переопределить этот цвет, установив атрибут стиля в элементе, например:

<KeyboardArrowRightIcon style = {{ fill: '#0072ea' }} />
Но есть ли способ сделать это переменной SCSS (style = {{ fill: $link-color }})?

Я волнуюсь, если цвет ссылки изменится в таблице стилей, кому-то позже придется выслеживать все эти жестко закодированные экземпляры.

 15.06.2018 01:56
46
0
53 626
14
 Ответы 14
Вы можете сделать свой стиль динамичным. Вот ответ: ответ stackoverflow

Вы должны быть осторожны с тем, что вы перезаписываете

С Уважением

 15.06.2018 02:35
Самый простой способ указать / переопределить цвет значка в Material-UI - использовать настраиваемый Имя класса CSS.

Предположим, вы хотите показать зеленый флажок, а не красный треугольник, в зависимости от результата некоторого процесса.

Вы создаете функцию где-то внутри своего кода, например, так:

function iconStyles() {
  return {
    successIcon: {
      color: 'green',
    },
    errorIcon: {
      color: 'red',
    },
  }
}
Затем вы применяете makeStyles к этой функции и запускаете результат.

import { makeStyles } from '@material-ui/core/styles';
...

const classes = makeStyles(iconStyles)();
Теперь внутри вашей функции рендеринга вы можете использовать объект classes:

  const chosenIcon = outcome
    ? <CheckCircleIcon className = {classes.successIcon} />
    : <ReportProblemIcon className = {classes.errorIcon} />;
Функция, которую я упомянул первой в этом ответе, фактически принимает тему в качестве входных данных и позволяет вам изменять / обогащать эту тему: это гарантирует, что ваши пользовательские классы не будут рассматриваться как исключения, а скорее как интеграции внутри более комплексного визуального решения (например, , цвета значков в теме лучше всего отображаются как кодировки).

Material-UI очень богат, и я бы посоветовал вам изучить также другие существующие механизмы настройки.

 05.08.2019 13:13
Самый простой способ, который я нашел, - это использовать следующее.

import { styled } from '@material-ui/styles';
import { Visibility } from '@material-ui/icons';

const MyVisibility = styled(Visibility)({
    color: 'white',
});
 09.08.2019 19:32
Вы можете использовать SvgIcon из документация:

The SvgIcon component takes an SVG path element as its child and converts it to a React component that displays the path, and allows the icon to be styled and respond to mouse events. SVG elements should be scaled for a 24x24px viewport.

Вы должны использовать devTools для извлечения пути к значку KeyboardArrowRightIcon:

svg path

Затем используйте его со своим индивидуальным цветом, например:

<SvgIcon
  component = {svgProps => {
    return (
      <svg {...svgProps}>
        {React.cloneElement(svgProps.children[0], {
          fill: myColorVariable
        })}
      </svg>
    );
  }}
>
   <path d = "M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"></path>
</SvgIcon>
 03.09.2019 16:15
У меня была такая же проблема, мое решение было:

import React from 'react';
import pure from 'recompose/pure';
import {SvgIcon} from '@material-ui/core';

let smile = (props) => (
 <SvgIcon {...props}
  component = {props => {
    return (
      <svg {...props}>
        {React.cloneElement(props.children[0], {
          fill: "#4caf50"
        })}
      </svg>
    );
  }}
>
   <path d = "M256,32C132.281,32,32,132.281,32,256s100.281,224,224,224s224-100.281,224-224S379.719,32,256,32z M256,448
            c-105.875,0-192-86.125-192-192S150.125,64,256,64s192,86.125,192,192S361.875,448,256,448z M160,192c0-26.5,14.313-48,32-48
            s32,21.5,32,48c0,26.531-14.313,48-32,48S160,218.531,160,192z M288,192c0-26.5,14.313-48,32-48s32,21.5,32,48
            c0,26.531-14.313,48-32,48S288,218.531,288,192z M384,288c-16.594,56.875-68.75,96-128,96c-59.266,0-111.406-39.125-128-96"></path>
</SvgIcon>
);
smile = pure(smile);
smile.displayName = 'smile';
smile.muiName = 'SvgIcon';

export default smile;
 21.09.2019 21:40
Это то, что я делаю

how it looks

Использую MUI v4.5.1. Используйте опору colorAPI с наследуемым значением, добавьте вокруг него обертку div или span и добавьте туда свой цвет.

Из документации API

color default value:inherit. The color of the component. It supports those theme colors that make sense for this component.

Добавить значок звездочки

import React from 'react';
import Star from '@material-ui/icons/StarRounded';
import './styles.css';

export function FavStar() {
  return (
    <div className = "star-container">
      <Star size = "2em" fontSize = "inherit" />
    </div>
  );
}
В style.css

.star-container {
  color: red;
  font-size: 30px;
}
 31.10.2019 11:00
Просто добавьте стиль fill: "green"

Пример: <Star style = {{fill: "green"}}/>

 18.12.2019 11:31
Единственное правильное решение, которое охватывает двухцветные (двухтональные) значки, - передать ему свойство htmColor:

React.createElement(Icon, {htmlColor: "#00688b"})
 26.12.2019 15:43
Вы можете установить цвет по умолчанию для всех значков, создав настраиваемая тема с createMuiTheme():

createMuiTheme({
  props: {
    MuiSvgIcon: {
      htmlColor: '#aa0011',
    }
  }
})
Это установит значение свойства htmlColor по умолчанию для каждого значка, такого как <KeyboardArrowRightIcon/>. Вот список других реквизитов, которое вы можете установить.

 06.06.2020 07:28
Изменить цвет значка
<HomeIcon />
<HomeIcon color = "primary" />
<HomeIcon color = "secondary" />
<HomeIcon color = "action" />
<HomeIcon color = "disabled" />
<HomeIcon style = {{ color: green[500] }} />
<HomeIcon style = {{ color: 'red' }} />
Изменить размер значка
<HomeIcon fontSize = "small" />
<HomeIcon />
<HomeIcon fontSize = "large" />
<HomeIcon style = {{ fontSize: 40 }} />
MDI с использованием компонента Icon
<Icon>add_circle</Icon>
<Icon color = "primary">add_circle</Icon>
<Icon color = "secondary">add_circle</Icon>
<Icon style = {{ color: green[500] }}>add_circle</Icon>
<Icon fontSize = "small">add_circle</Icon>
<Icon style = {{ fontSize: 30 }}>add_circle</Icon>
Для шрифта
<Icon className = "fa fa-plus-circle" />
<Icon className = "fa fa-plus-circle" color = "primary" />
<Icon className = "fa fa-plus-circle" color = "secondary" />
<Icon className = "fa fa-plus-circle" style = {{ color: green[500] }} />
<Icon className = "fa fa-plus-circle" fontSize = "small" />
<Icon className = "fa fa-plus-circle" style = {{ fontSize: 30 }} />
Ресурсы, чтобы узнать об этом больше, Иконки

 23.07.2020 12:42
Просто добавьте стиль в компонент значка

<KeyboardArrowRightIcon style = {{color:"red"}} />
Но вы можете использовать условный стиль, как показано ниже

    import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > span": {
      margin: theme.spacing(2)
    }
  }
}));

export default function Icons() {
  //let we want chnage the icon color of
  // somecontition varaiable is not empty
  const somecontition = "some";
  //here is some different style objects
  const style = {  // old style object
    color: "red"
  };
  const new_style = { //new style  object
    color: "blue"
  };
  const classes = useStyles();

  return (
    <div className = {classes.root}>
      {/* if somecondition var is not empty the use new_style other wise it will use old style*/}
      <Icon style = {somecontition ? style : new_style}>add_circle</Icon>
    </div>
  );
}
 20.01.2021 07:28
Замена цвета значка пользовательского интерфейса материала, как показано ниже

в js

        const [activeStar, setActiveStar] = useState(false);

        <IconButton onClick = {() => setActiveStar(!activeStar)}>
          {activeStar ? (
            <StarOutlined className = "starBorderOutlined" />
          ) : (
            <StarBorderOutlined />
          )}
        </IconButton>
в Css

      .starBorderOutlined {
        color: #f4b400 !important;
       }
 07.03.2021 11:03
Удивлен, что еще никто не предложил решения для всего сайта.

Вы можете переопределить цвета, назначенные для параметра «цвета» здесь https://material-ui.com/api/icon/#props

добавив переопределение к вашей теме (вам нужно будет определить собственную тему, если вы еще этого не сделали) https://material-ui.com/customization/theming/#createmuitheme-options-args-theme

Однако после определения темы это так же просто, как

const theme = createMuiTheme({
  "overrides": {
    MuiSvgIcon: {
      colorPrimary: {
        color: ["#625b5b", "!important"],
      },
      colorSecondary: {
        color: ["#d5d7d8", "!important"],
      },
    },
    ...
});
 20.05.2021 16:26
Можно сделать так: <PlusOne htmlColor = "#ffaaee" />

 24.06.2021 02:52
Другие вопросы по теме
Использование миксинов в material-ui для настройки компонентов в React
Пользовательские цвета профиля
Проблема с созданием динамической цветовой палитры с оттенками в SASS
Angular с использованием scss / sass и css в одном проекте
Переменные Storybook Global Scss
Sass: import + extension внутри класса
Функция Less и SCSS calc
Настройка Foundation 6 и Vue-CLI
Как устранить ошибку gulp Watch
Sublime 3 + Livereload на локальном хосте (с запущенным sass)
Похожие вопросы
Nock для макета axios на 400 не возвращает определенное значение
Отладка SSR node.js на стороне сервера VSCode
Проблема с кодированием изображений AWS Rekognition
Как отобразить резервный URL-адрес, если данные JSON не определены?
Как я могу исправить ошибку "Failed to Compile" в npm для разработки приложения React?
Реагировать на рендеринг при просмотре статической страницы rails
Повторное использование модального окна в компоненте React с другими дочерними элементами
Попытка использовать несколько компонентов для одного пути
Отправить данные из формы React в Nodemailer
Stripe Checkout в ReactJS
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
Реагирующий маршрутизатор не работает в ведре aws s3
Вопросы
JAVASCRIPT
Реагирующий маршрутизатор не работает в ведре aws s3
Я развернул папку build/ моего веб-сайта React в корзине AWS S3.

Если я перейду на www.mywebsite.com, он сработает, и если я нажму на тег a, чтобы перейти на страницы Project и About, он приведет меня на нужную страницу. Однако, если я скопирую и отправлю URL-адрес страницы или перейду прямо по ссылке, например: www.mywebsite.com/projects, он вернет 404.

Вот мой код App.js:

const App = () => (
    <Router>
        <div>
            <NavBar/>
            <Switch>
                <Route exact path = "/" component = {Home}/>
                <Route exact path = "/projects" component = {Projects}/>
                <Route exact path = "/about" component = {About}/>
                <Route component = {NoMatch}/>
            </Switch>
        </div>
    </Router>
);
 07.07.2018 02:21
100
2
43 007
14
Данный вопрос помечен как решенный
 Ответы 14
Почему так происходит

Ваша проблема в том, что вы хотите передать ответственность за маршрутизацию своему реагирующему приложению / javascript. Ссылка будет работать, потому что react может прослушивать щелчок по ссылке и просто обновлять маршрут в адресной строке браузера. Однако, если вы перейдете в место, где ваш скрипт (index.html и bundle.js или где находится код вашего приложения) не загружен, то JavaScript никогда не загружается и не имеет возможности обработать запрос. Вместо этого, независимо от того, что запускает ваш сервер, он позаботится о запросе, посмотрит, есть ли в этом месте ресурс, и вернет ошибку 404 или что-то еще, что он обнаружил.

Решение

Как упоминалось в комментариях, это причина, по которой вам нужно перенаправить 404-ошибки в точное место, где размещено ваше приложение. В этом нет ничего специфического для Amazon, это общее требование для настройки вашего приложения для реагирования.

Чтобы решить эту проблему, вам нужно выяснить, что обрабатывает маршрутизацию на вашем сервере и как ее настроить. Например, если у вас есть сервер Apache, файл .htaccess может решить эту проблему следующим образом:

<IfModule mod_rewrite.c>
    RewriteEngine On
    RewriteBase /
    RewriteRule ^index\.html$ - [L]
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteRule . /index.html [L]
 </IfModule>
Этот файл позволяет серверу перенаправлять ненайденные ошибки в index.html. Имейте в виду, что это может повлиять на другие правила маршрутизации, которые есть на вашем сервере, поэтому эта конфигурация является самой простой, если ваше приложение для реагирования имеет собственное место, не мешая другим вещам.

 07.07.2018 11:51
Я не уверен, что вы уже решили это. Я была такая же проблема.

Это потому, что AWS S3 ищет ту папку (проекты) для обслуживания, которой у вас нет.

Просто укажите в документе об ошибке index.html.



Это сработало для меня. Вы можете обрабатывать страницы ошибок в response-router.

 15.09.2018 11:44
 Ответ принят как подходящий
Update 1 May 2020:

Поскольку этот пост довольно активен, мне нужно обновить ответ:

Итак, у вас есть несколько вариантов решения проблемы:

Вы можете поместить index.html в поле Документ об ошибке (как предложил Алан Фридман).
Перейдите в свою корзину (ту, в которой на самом деле есть код, а не ту, которую вы используете для перенаправления) -> Характеристики -> Статический хостинг веб-сайтов:
Это не "хакерство", но работает из-за способа react-router работает: он обрабатывает запросы от внешнего интерфейса и направляет пользователей на другие маршруты, но в целом приложение React является одностраничным заявление.
Если вы хотите React на стороне сервера, подумайте об использовании Next.js.


Вы можете поместить указанный файл ошибки error.html в папку общественный вашего приложения React и в поле Статический хостинг веб-сайтов: Документ об ошибке, вставив: error.html. Это тоже работает. Я это проверил.

Используйте AWS CloudFront> Распределения CloudFront> Распределение вашего ведра> Страницы ошибок и добавьте нужный код ошибки. Если вы не используете react-router (как в примере ниже), корзина ответит Ошибка 403, так что вы можете ответить своим error.html.



Для TypeScript в настоящее время react-router не поддерживает его, поэтому вам следует рассмотреть вариант 2 и 3. Они собираются обновить библиотеку в будущей версии 6.* согласно эта ветка.
 15.09.2018 17:35
Я столкнулся с этой проблемой, несмотря на использование конфигурации, описанной в принятом ответе, но если вы по-прежнему получаете ошибку 403, И вы используете AWS Cloudflare Manager, вы можете создать страницу с ошибкой на вкладке «Страницы ошибок» в настройках распространения. , со следующей конфигурацией:

Error Code: 404,
Customize Error Response: Yes, 
Response Page Path: /index.html, 
HTTP Response Code: 200
Изображение конфигурации страницы ошибок для передачи обработки маршрута маршрутизатору браузера

Это сработало для меня, хотя я никоим образом не разбираюсь в правильном администрировании сервера, надеюсь, кто-нибудь скажет мне, является ли это серьезной проблемой, если это будет случайность.

 07.03.2019 08:44
Вариант использования Cloudfront для S3:

https://hackernoon.com/hosting-static-react-websites-on-aws-s3-cloudfront-with-ssl-924e5c134455

3b) AWS CloudFront - страницы ошибок После создания раздачи CloudFront, когда он находится в состоянии «Выполняется», перейдите на вкладку «Страницы ошибок». Обрабатывайте коды ответов 404 и 403 с помощью настройки ответа на ошибку.

Google рекомендует 1 неделю или 604800 секунд кеширования. Здесь мы настраиваем CloudFront для обработки отсутствующих html-страниц, что обычно происходит, когда пользователь вводит недопустимый путь или, в частности, когда они обновляют путь, отличный от корневого.

Когда это произойдет:

CloudFront будет искать файл, которого нет в корзине S3; в корзине только 1 html-файл, и это index.html для случая одностраничного приложения, такого как этот пример проекта. Будет возвращен ответ 404, и наша настраиваемая настройка ответа на ошибку захватит его. Вместо этого мы вернем код ответа 200 и страницу index.html. Маршрутизатор React, который будет загружен вместе с файлом index.html, будет смотреть на URL-адрес и отображать правильную страницу вместо корневого пути. Эта страница будет кешироваться на время TTL для всех запросов к запрошенному пути. Почему нам также нужно обрабатывать 403? Это связано с тем, что этот код ответа вместо 404 возвращается Amazon S3 для активов, которых нет. Например, URL-адрес https://yourdomain.com/somewhere будет искать файл, названный где-то (без расширения), который не существует.

PS. Раньше он возвращал 404, но теперь кажется, что он возвращает 403; в любом случае лучше обрабатывать оба кода ответа).

 18.06.2019 21:13
В случае, если этот сегмент S3 обслуживается из Распространение CloudFront:

Создайте настраиваемая страница ошибок (AWS Docs) в раздаче CloudFront, который направляет ошибку 404 в index.html и возвращает код ответа 200. Таким образом ваше приложение будет обрабатывать маршрутизацию.

Пользовательские страницы ошибок


 21.11.2019 16:27
Согласно предыдущим ответам, лучший способ решить проблему: переопределить запасную стратегию. Если вы хотите узнать больше о маршрутизации на стороне клиента и на стороне сервера, и особенно о различных подходах к маршрутизации в React JS, ознакомьтесь с эта статья.

 28.01.2020 23:57
На этот вопрос уже есть несколько отличных ответов. Хотя вопрос сейчас старый, я столкнулся с этой проблемой сегодня, поэтому я чувствую, что, возможно, этот ответ может помочь.

S3 имеет два типа конечных точек, и если вы столкнулись с этой ошибкой, вы, вероятно, выбрали сегмент S3 непосредственно в качестве конечной точки в поле «Имя исходного домена» для вашего распространения CloudFront.

Это будет выглядеть примерно так: bucket-name.s3.amazonaws.com и является вполне допустимой конечной точкой. Фактически, может показаться, что AWS действительно ожидает такого поведения по умолчанию; эта запись будет в раскрывающемся списке, который будет у вас при создании раздачи CloudFront.

Однако выполнение этого и последующая настройка страниц ошибок может решить вашу проблему, а может и не решить.

Однако у S3 есть выделенная конечная точка веб-сайта. Это доступно в вашем сегменте S3> Свойства> Статический хостинг веб-сайтов. (Вы увидите ссылку вверху).

Вы должны использовать эту ссылку вместо исходной автоматически заполняемой ссылки, которая появляется в CloudFront. Вы можете ввести это при создании вашего дистрибутива или после создания, вы можете редактировать на вкладке Origins и Origins Groups, а затем аннулировать кеши.

Эта ссылка будет выглядеть так: bucket-name.s3-website.region-name.amazonaws.com.

Как только это распространится и изменится, это должно решить вашу проблему.

tl; dr: не используйте конечную точку S3 по умолчанию в CloudFront. Вместо этого используйте конечную точку веб-сайта S3. Ваш исходный домен должен выглядеть так: my-application.s3-website.us-east-1.amazonaws.com, а не my-application.s3.amazonaws.com.

Дополнительная информация о конечных точках веб-сайтов доступна в документации AWS здесь.

 22.04.2020 19:17
Перенаправление 4xx на index.html будет работать, но это решение может вызвать у вас множество других проблем, например, Google не сможет сканировать эти страницы. Пожалуйста, проверьте эта ссылка, он решил эту проблему с помощью правил перенаправления для корзины S3.

 23.04.2020 00:09
обновить конфигурацию s3 со статическим хостингом и по умолчанию с index.html введите описание изображения здесь

добавить CloudFront со страницей ошибок

404 error-> index.html->status 200
введите описание изображения здесь

 05.10.2020 03:58
Я исправил это, используя HashRouter вместо Router

import { Switch, Route, HashRouter } from 'react-router-dom';

const App = () => (
    <HashRouter>
        <div>
            <NavBar/>
            <Switch>
                <Route exact path = "/" component = {Home}/>
                <Route exact path = "/projects" component = {Projects}/>
                <Route exact path = "/about" component = {About}/>
                <Route component = {NoMatch}/>
            </Switch>
        </div>
    </HashRouter>
);
Приложение поддерживает что-то вроде https://your-domain.s3.amazonaws.com/index.html?someParam=foo&otherPram=bar/#/projects

на локальном хосте, как https://localhost:3000/?someParam=foo&otherPram=bar/#/projects

Никаких изменений в S3 не потребовалось.

 20.10.2020 11:16
Я использую NextJS, и у меня такая же проблема. Мое решение состояло в том, чтобы проверить информацию о маршруте и нажать, если она не подходит.

const router = useRouter();
useEffect(() => {
    if (!router.pathname.startsWith(router.asPath)) {
      router.push(router.asPath);
    }
  });
На стороне S3 ничего не нужно было изменять, кроме перенаправления страницы с ошибкой в ​​index.html.

 31.10.2020 18:13
Эта ветка мне очень помогла. Я знаю, что это старый, но я хотел бы добавить фрагмент кода aws-cdk, который, наконец, сработал для меня. В моем сценарии использования я использовал aws-cdk, поэтому я добавляю его сюда, если вы с нетерпением ждете решения на основе aws-cdk.

Фрагмент кода добавляет index.html в качестве страницы ошибки в s3, а также в облачном интерфейсе. В частности, для облачного интерфейса я добавил страницу ошибки как /index.html для 404 и 403 с ответом 200.


// imports...
// import * as cdk from '@aws-cdk/core';
// import * as s3 from '@aws-cdk/aws-s3';
// import * as cloudfront from '@aws-cdk/aws-cloudfront';

// following code snippet has to be added in a 
// class which extends to a Construct or a Stack

    const bucket = new s3.Bucket(this, '<Specify a name>', {
      bucketName: '<add your bucket name>',
      websiteIndexDocument: 'index.html',
      websiteErrorDocument: 'index.html',
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
      removalPolicy: cdk.RemovalPolicy.DESTROY, // edit it according to your use case, I'll change it though
      autoDeleteObjects: true,
    });

    const cloudFrontOAI = new cloudfront.OriginAccessIdentity(this, 'OAI');

    const distribution = new cloudfront.CloudFrontWebDistribution(this, props?.stackName + 'AbcWebsiteDistribution', {
      defaultRootObject: "index.html",
      errorConfigurations: [{
        errorCode: 404,
        responsePagePath: "/index.html",
        responseCode: 200
      }, {
        errorCode: 403,
        responsePagePath: "/index.html",
        responseCode: 200
      }],
      originConfigs: [
        {
          s3OriginSource: {
            s3BucketSource: bucket,
            originAccessIdentity: cloudFrontOAI,
            originPath: "/artifacts" // change this based on your use case
          },
          behaviors: [{ isDefaultBehavior: true }]
        }
      ]
    })

    bucket.grantRead(cloudFrontOAI.grantPrincipal);
Ответы, которые мне действительно помогли из этой ветки:

https://stackoverflow.com/a/56655629/6211961

https://stackoverflow.com/a/58978355/6211961

https://stackoverflow.com/a/64201582/6211961

 31.01.2021 07:24
Ниже конфигурация решена 

Обновлены страницы ошибок в соответствующем распределении облачного фронта с настраиваемым ответом об ошибке от кода состояния http 404-не найден до кода 200-OK в пути к странице ответа как / и почти нулевое время жизни

 28.06.2021 13:04
Другие вопросы по теме
Обертка кнопок React-Native, кнопка
React-testing-library validateDOMNesting Error
Реагировать на вызов функции js из события
Как установить продолжительность перехода для стилизованных компонентов в React
Пользователи получают мой предыдущий пакет
Ошибка Cypress: Ошибка: не удается найти модуль './preprocessor' из '/ Users / stein / node_modules / parse5 / lib / tokenizer'
Как управлять данными, поступающими из компонента React?
Я установил несколько библиотек таким же образом, и React регистрирует все, кроме одной. Почему он не может найти именно этот модуль?
React Изменение свойств компонента и не рендеринг каждый раз
Redux не выполняет повторный рендеринг компонента
Похожие вопросы
Прямая загрузка файла S3 Django и Heroku
Странное поведение bootstrap selectpicker
Webview на React Navive
Добавление функций ES5 в приложение vuejs, скомпилированное с помощью babel?
Обертка кнопок React-Native, кнопка
Создание различных результатов диаграммы на лету вызывает мерцание
Node.js изменения, внесенные в файлы, не отражаются до второго запуска
ActiveX WScript.Shell: открытие нескольких PDF-файлов с помощью цикла
Не могу получить файлы CryptosJS
Как я могу убедиться, что каждое динамически созданное изображение принимает свою собственную информацию / данные, извлеченные из API?
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
Не удается найти модуль '@ babel / core'
Вопросы
NODE.JS
Не удается найти модуль '@ babel / core'
Я слежу за этим руководством по webpack4 / react:

https://thewikihow.com/video_deyxI-6C2u4

Я следил за ним точно до той части, где он запускает npm start. Разница в том, что его приложение запускается, а мое выдает ошибку:

Не удается найти модуль '@ babel / core'

Полная ошибка:

ERROR in ./src/index.js
Module build failed (from ./node_modules/babel-loader/lib/index.js):
Error: Cannot find module '@babel/core'
    at Function.Module._resolveFilename (module.js:547:15)
    at Function.Module._load (module.js:474:25)
    at Module.require (module.js:596:17)
    at require (internal/module.js:11:18)
    at Object.<anonymous> (C:\Users\joeyf\Desktop\Code\Github\webpack4-sample\node_modules\babel-loader\lib\index.js:5:15)
    at Module._compile (module.js:652:30)
    at Object.Module._extensions..js (module.js:663:10)
    at Module.load (module.js:565:32)
    at tryModuleLoad (module.js:505:12)
    at Function.Module._load (module.js:497:3)
 @ multi (webpack)-dev-server/client?http://localhost:8080 (webpack)/hot/dev-server.js ./src/index.js main[2]
Я попытался переустановить babel-core, но его все еще не нашли. Вот мой package.json:

{
  "name": "webpack4-sample",
  "version": "1.0.0",
  "description": "A sample setup of Webpack4 with React and Babel",
  "main": "index.js",
  "scripts": {
    "start": "webpack-dev-server --mode development --open --hot",
    "build": "webpack --mode production"
  },
  "author": "Joey Fenny",
  "license": "ISC",
  "dependencies": {
    "babel": "^6.23.0",
    "babel-cli": "^6.26.0",
    "react": "^16.4.2",
    "react-dom": "^16.4.2"
  },
  "devDependencies": {
    "babel-core": "^7.0.0-rc.4",
    "babel-loader": "^8.0.0",
    "babel-preset-env": "^1.7.0",
    "babel-preset-react": "^6.24.1",
    "html-webpack-plugin": "^3.2.0",
    "webpack": "^4.17.1",
    "webpack-cli": "^3.1.0",
    "webpack-dev-server": "^3.1.6"
  }
}
Мой webpack.config.js:

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'index_bundle.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: path.join(__dirname, '/node_modules'),
            use: {
                loader: 'babel-loader'
            }
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
}
Вот ссылка на репозиторий git:

https://gitlab.com/jfny/webpack4-sample

Кто-нибудь знает, что происходит? Спасибо.

 29.08.2018 02:40
89
0
108 674
14
Данный вопрос помечен как решенный
 Ответы 14
 Ответ принят как подходящий
Попробуйте запустить это.

npm install @babel/core --save
babel изменили свой пакет, поэтому ваш babel-core не будет таким же, как @babel/core.

 29.08.2018 02:46
Недавнее обновление Babel до версии 7 изменило наименования пакетов узлов.

Например, теперь вам нужно установить

npm install --save-dev @babel/core @babel/preset-env
и

npm install --save-dev @babel/preset-react
чтобы заставить его работать с React. Затем вы можете использовать их в своем файле .babelrc:

{
  "presets": [
    "@babel/preset-env",
    "@babel/preset-react"
  ]
}
Или в качестве альтернативы, если у вас нет .babelrc, в вашем package.json:

...
"keywords": [],
"author": "",
"license": "ISC",
"babel": {
  "presets": [
    "@babel/preset-env",
    "@babel/preset-react"
  ]
},
"devDependencies": {
...
Если вы хотите больше узнать об этом, вы можете проверить этот недавний Настройка Webpack + Babel + React.

 21.09.2018 04:14
Я могу исправить эту проблему, используя команду ниже

npm install @babel/core --save
 21.12.2018 12:59
babel-loader @ 8 требует Babel 7.x (пакет '@ babel / core'). Если вы хотите использовать Babel 6.x ('babel-core'), вам следует установить 'babel-loader @ 7'.

 08.05.2019 08:44
В моем случае мне пришлось удалить babel 6

npm uninstall --save-dev babel-cli  babel-core babel-polyfill babel-preset-es2015 babel-preset-stage-2 babel-register
а затем переустановите babel 7

npm i  --save-dev  @babel/cli  @babel/core @babel/node  @babel/polyfill  @babel/preset-env
и это сработало для меня.

 18.07.2019 15:51
для тех из вас, кто использует @ babel / core вместе с babel-node: Я только что установил @ babel / core с помощью npm i @babel/core --save-dev, но когда я попытался использовать babel-node, он не распознал пакет @ babel / core, я удалил @ babel / core и снова установил его с помощью npm i @babel/core --save, и он снова заработал!

 31.07.2019 17:45
попробуйте установить npm install @ babel / core --save если не работает, попробуйте удалить node_modules и переустановить

 29.09.2019 10:20
Я решил ту же ошибку, удалив все модули babel из dev Зависимости, выполнив следующую команду:

npm install -D babel-loader @babel/core @babel/preset-env

Вы можете обратиться к этой ссылке, если указанная выше команда не работает:

[https://github.com/babel/babel/issues/8599#issuecomment-417866691]

 02.10.2019 19:56
Я удалил существующие npm uninstall babel-core babel-preset-env babel-preset-react

и добавили свои новые имена npm install --save-dev @babel/core @babel/preset-env @babel/preset-react это работает для меня отлично.

 18.11.2019 15:45
Я исправил:

 npm install --save-dev babel-loader@7 babel-core babel-preset-env webpack webpack-cli -D
 03.12.2019 16:19
Зайдите, запустив в Windows, %USERPROFILE%\.quokka

Конфигурация ~/.quokka ограничена файлом config.json и любыми пакетами, которые существуют в ~/quokka/node_modules.

Поместите следующее в config.js,

{
  "pro":true, 
  "babel": {
    "presets": ["@babel/preset-env", " @babel/preset-react"],
    "plugins": [
      ["@babel/plugin-proposal-pipeline-operator", { "proposal": "minimal" }],
      ["@babel/plugin-proposal-decorators", { "legacy": true }],
      ["@babel/plugin-proposal-class-properties", { "loose": true }]
    ]
  }
}
 16.12.2019 21:04
Я занимаюсь этой проблемой несколько часов, и она таинственным образом исчезла, когда я добавил раздел «devDependencies» в свой файл package.json и переместил в него зависимости @types.

 09.12.2020 23:17
если у вас есть приложение для реагирования, и вы получаете сообщение об ошибке, измените конфигурацию babel на ниже:

 {
"presets": [
    [
        "@babel/preset-env",
        {
            "useBuiltIns": "entry",
            "corejs": 3,
            "modules": false
        }
    ],
    "@babel/preset-react"
],
"plugins": [
    ["@babel/transform-async-to-generator"],
    ["@babel/plugin-transform-runtime"],
    ["@babel/syntax-dynamic-import"],
    ["@babel/plugin-transform-classes", {
    "loose": true
    }],
    [
        "babel-plugin-transform-builtin-extend",
        {
            "globals": ["Error"]
        }
    ]
]
}

 14.02.2021 22:34
мои два цента для тех, кто начинает работать с react, webpack, babel, jsx, У меня проблема с npm run build

ERROR in ./src/app.js
Module build failed (from ./node_modules/babel-loader/lib/index.js):
Error: Cannot find module 'babel-core'
Когда вы пытались постепенно установить каждый компонент, вы могли столкнуться с конфликтом версий между пакетами, то есть вы могли получить файл package.json, подобный этому

  "dependencies": {
    "@babel/core": "^7.13.15",
    "@babel/preset-env": "^7.13.15",
    "@babel/preset-react": "^7.13.13",
    "babel-loader": "^7.1.5",
    "webpack": "^5.33.2",
    "webpack-cli": "^4.6.0"
Ясно, что сообщение об ошибке загрузки babel-loader не связано с тем, что у меня не был установлен babel-loader. Поэтому, думаю, попробовал бы еще раз переустановить с npm i babel-loader.

И я получил это сообщение

$ npm install babel-loader
npm ERR! code ERESOLVE
npm ERR! ERESOLVE unable to resolve dependency tree
npm ERR! 
npm ERR! While resolving: indecision-app@1.0.0
npm ERR! Found: webpack@5.33.2
npm ERR! node_modules/webpack
npm ERR!   webpack@"^5.33.2" from the root project
npm ERR! 
npm ERR! Could not resolve dependency:
npm ERR! peer webpack@"2 || 3 || 4" from babel-loader@7.1.5
npm ERR! node_modules/babel-loader
npm ERR!   babel-loader@"^7.1.5" from the root project
Заметил, что использую Webpack v.5. Следовательно, я удаляю babel-loader из файла package.json и снова делаю npm i babel-loader.

На этот раз npm run build удался!

 15.04.2021 04:59
Другие вопросы по теме
Базовые стили CSS не отображаются в промежуточном env
Компонент ListView рабочего стола React: проблема с отображением элементов списка из массива
Как обновить состояние вложенного массива из массива объектов без изменения
Как я могу заставить компонент отключиться, когда я перехожу на новую страницу в React?
Реагируйте на Redux с правилами ESLint
Material-ui createMuiTheme тип палитры dark не изменяет цвет текста на светлый
Пользовательский интерфейс материала - воспроизведение сообщения об ошибке "обязательного" текстового поля
React + Three.js с OrbitControls на нескольких холстах
Как добавить данные в Firebase.database () с помощью React?
Реагировать на неопределенные ошибки
Похожие вопросы
Не удалось загрузить ресурс: net :: ERR_CONNECTION_REFUSED: Nodejs
Обещание - решение после нескольких событий
Onclick не работает с EJS и Node
Щелчок Nightmare JS на основе: содержит
Вызов функции из отдельного файла Javascript из HTML не работает
Как можно обновить в mongodb?
Узел с webpack - «Не удается найти модуль 'fs'», несмотря на включение target: node в webpac
Может ли приложение узла подключаться / записывать в MongoDB при работе в качестве службы PM2?
Javascript разбивает текст из файла в массив с помощью Regex на основе ДД / ММ / ГГГГ
Запрос Node JS post дает 400, тогда как от Postman он работает
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
Что такое useState () в React?
Вопросы
JAVASCRIPT
Что такое useState () в React?
В настоящее время я изучаю концепцию хуков в React и пытаюсь понять приведенный ниже пример.

import { useState } from 'react';

function Example() {
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick = {() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
В приведенном выше примере увеличивается значение счетчика самого параметра функции-обработчика. Что, если я хочу изменить значение счетчика внутри функции обработчика событий

Рассмотрим пример ниже:

setCount = () => {
  //how can I modify count value here. Not sure if I can use setState to modify its value
  //also I want to modify other state values as well here. How can I do that
}

<button onClick = {() => setCount()}>
  Click me
</button>
 06.11.2018 05:56
206
1
282 245
14
Данный вопрос помечен как решенный
 Ответы 14
Хуки - это новая функция в React v16.7.0-alphauseState - это «Крючок». useState() устанавливает значение по умолчанию для любой переменной и управляет функциональным компонентом (функции PureComponent). ex : const [count, setCount] = useState(0); устанавливает значение по умолчанию для счетчика 0. u может использовать значение от setCount до increment или decrement. onClick = {() => setCount(count + 1)} увеличивает значение счетчика.

 06.11.2018 06:09
Синтаксис ловушки useState прост.

const [value, setValue] = useState(defaultValue)

Если вы не знакомы с этим синтаксисом, перейдите здесь.

Я бы порекомендовал вам прочитать документация. Там есть отличные объяснения с приличным количеством примеров.

import { useState } from 'react';

function Example() {
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(0);
  
  // its up to you how you do it
  const buttonClickHandler = e => {
   // increment
   // setCount(count + 1)
   
   // decrement
   // setCount(count -1)
   
   // anything
   // setCount(0)
  }
  

  return (
       <div>
          <p>You clicked {count} times</p>
         <button onClick = {buttonClickHandler}>
             Click me
         </button>
      </div>
   );
 }
 06.11.2018 06:20
 Ответ принят как подходящий
Реагировать на хуки - это новый способ (все еще разрабатываемый) для доступа к основным функциям реакции, таким как state, без использования классов, в вашем примере, если вы хотите увеличить счетчик непосредственно в функции обработчика, не указывая его непосредственно в опоре onClick, вы могли бы сделать что-то вроде:

...
const [count, setCounter] = useState(0);
const [moreStuff, setMoreStuff] = useState(...);
...

const setCount = () => {
    setCounter(count + 1);
    setMoreStuff(...);
    ...
};
и onClick:

<button onClick = {setCount}>
    Click me
</button>
Давайте быстро объясним, что происходит в этой строке:

const [count, setCounter] = useState(0);
useState(0) возвращает кортеж, в котором первый параметр count - это текущее состояние счетчика, а setCounter - метод, который позволит нам обновить состояние счетчика. Мы можем использовать метод setCounter для обновления состояния count где угодно - в этом случае мы используем его внутри функции setCount, где мы можем делать больше; идея с хуками состоит в том, что мы можем сохранить наш код более функциональным и избегать компоненты на основе классов, если он не желателен / необходим.

Я написал полную статью о хуках с множеством примеров (включая счетчики), например этот код, я использовал useState, useEffect, useContext и нестандартные хуки. Я мог бы получить более подробную информацию о том, как работают хуки в этом ответе, но документация очень хорошо объясняет государственный крюк и другие хуки в деталях, надеюсь, это поможет.

Обновить:Хуки больше не предложение, поскольку версия 16,8 теперь доступна для использования, на сайте React есть раздел, который отвечает на некоторые из часто задаваемые вопросы.

 06.11.2018 06:26
useState - один из хуков, доступных в React v16.8.0. Это в основном позволяет вам превратить ваши компоненты, не имеющие состояния / функциональные, в компоненты, которые могут иметь собственное состояние.

На самом базовом уровне это используется следующим образом:

const [isLoading, setLoading] = useState(true);
Затем это позволяет вам вызвать setLoading, передав логическое значение. Это отличный способ иметь функциональный компонент с отслеживанием состояния.

 06.11.2018 06:44
useState () - это пример встроенной ловушки React, которая позволяет вам использовать состояния в ваших функциональных компонентах. Это было невозможно до React 16.7.

Функция useState - это встроенный обработчик, который можно импортировать из пакета реакции. Это позволяет вам добавлять состояние к вашим функциональным компонентам. Используя ловушку useState внутри функционального компонента, вы можете создать часть состояния, не переключаясь на компоненты класса.

 06.11.2018 07:33
useState - это один из встроенных хуков реагирования, доступных в версии 0.16.7.

useState следует использовать только внутри функциональных компонентов. useState - это способ, если нам нужно внутреннее состояние и не нужно реализовывать более сложную логику, такую ​​как методы жизненного цикла.

const [state, setState] = useState(initialState);
Returns a stateful value, and a function to update it.

During the initial render, the returned state (state) is the same as the value passed as the first argument (initialState).

The setState function is used to update the state. It accepts a new state value and enqueues a re-render of the component.

Пожалуйста, обрати внимание, что useState перехватывает обратный вызов для обновления состояния ведет себя иначе, чем компоненты this.setState. Чтобы показать вам разницу, я приготовил два примера.

class UserInfoClass extends React.Component {
  state = { firstName: 'John', lastName: 'Doe' };
  
  render() {
    return <div>
      <p>userInfo: {JSON.stringify(this.state)}</p>
      <button onClick = {() => this.setState({ 
        firstName: 'Jason'
      })}>Update name to Jason</button>
    </div>;
  }
}

// Please note that new object is created when setUserInfo callback is used
function UserInfoFunction() {
  const [userInfo, setUserInfo] = React.useState({ 
    firstName: 'John', lastName: 'Doe',
  });

  return (
    <div>
      <p>userInfo: {JSON.stringify(userInfo)}</p>
      <button onClick = {() => setUserInfo({ firstName: 'Jason' })}>Update name to Jason</button>
    </div>
  );
}

ReactDOM.render(
  <div>
    <UserInfoClass />
    <UserInfoFunction />
  </div>
, document.querySelector('#app'));
<script src = "https://unpkg.com/react@16.7.0-alpha.0/umd/react.development.js"></script>
<script src = "https://unpkg.com/react-dom@16.7.0-alpha.0/umd/react-dom.development.js"></script>

<div id = "app"></div>
Новый объект создается при использовании обратного вызова setUserInfo. Обратите внимание, что мы потеряли ключевое значение lastName. Чтобы исправить это, мы могли передать функцию внутри useState.

setUserInfo(prevState => ({ ...prevState, firstName: 'Jason' })
См. Пример:

// Please note that new object is created when setUserInfo callback is used
function UserInfoFunction() {
  const [userInfo, setUserInfo] = React.useState({ 
    firstName: 'John', lastName: 'Doe',
  });

  return (
    <div>
      <p>userInfo: {JSON.stringify(userInfo)}</p>
      <button onClick = {() => setUserInfo(prevState => ({
        ...prevState, firstName: 'Jason' }))}>
        Update name to Jason
      </button>
    </div>
  );
}

ReactDOM.render(
    <UserInfoFunction />
, document.querySelector('#app'));
<script src = "https://unpkg.com/react@16.7.0-alpha.0/umd/react.development.js"></script>
<script src = "https://unpkg.com/react-dom@16.7.0-alpha.0/umd/react-dom.development.js"></script>

<div id = "app"></div>
Unlike the setState method found in class components, useState does not automatically merge update objects. You can replicate this behavior by combining the function updater form with object spread syntax:

setState(prevState => {
  // Object.assign would also work
  return {...prevState, ...updatedValues};
});
Для получения дополнительной информации о useState см. официальная документация.

 02.12.2018 22:02
useState() - это перехватчик React. Хуки позволяют использовать состояние и изменчивость внутри функциональных компонентов.

Хотя вы не можете использовать хуки внутри классов, вы можете обернуть свой компонент класса функцией один и использовать хуки из него. Это отличный инструмент для переноса компонентов из класса в форму функции. Вот полный пример:

В этом примере я буду использовать компонент счетчика. Это оно:

class Hello extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: props.count };
  }
  
  inc() {
    this.setState(prev => ({count: prev.count+1}));
  }
  
  render() {
    return <button onClick = {() => this.inc()}>{this.state.count}</button>
  }
}

ReactDOM.render(<Hello count = {0}/>, document.getElementById('root'))
<script src = "https://cdnjs.cloudflare.com/ajax/libs/react/16.6.3/umd/react.production.min.js"></script>
<script src = "https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.6.3/umd/react-dom.production.min.js"></script>
<div id='root'></div>
Это простой компонент класса с состоянием подсчета, а обновление состояния выполняется методами. Это очень распространенный шаблон в компонентах класса. Во-первых, оберните его функциональным компонентом с тем же именем, который делегирует все свои свойства обернутому компоненту. Также вам нужно отобразить завернутый компонент в возвращении функции. Вот:

function Hello(props) {
  class Hello extends React.Component {
    constructor(props) {
      super(props);
      this.state = { count: props.count };
    }

    inc() {
      this.setState(prev => ({count: prev.count+1}));
    }

    render() {
      return <button onClick = {() => this.inc()}>{this.state.count}</button>
    }
  }
  return <Hello {...props}/>
}

ReactDOM.render(<Hello count = {0}/>, document.getElementById('root'))
<script src = "https://cdnjs.cloudflare.com/ajax/libs/react/16.6.3/umd/react.production.min.js"></script>
<script src = "https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.6.3/umd/react-dom.production.min.js"></script>
<div id='root'></div>
Это точно такой же компонент, с таким же поведением, тем же именем и одинаковыми свойствами. Теперь давайте перейдем к состоянию подсчета к функциональному компоненту. Вот как это происходит:

function Hello(props) {
  const [count, setCount] = React.useState(0);
  class Hello extends React.Component {
    constructor(props) {
      super(props);
      this.state = { count: props.count };
    }

    inc() {
      this.setState(prev => ({count: prev.count+1}));
    }

    render() {
      return <button onClick = {() => setCount(count+1)}>{count}</button>
    }
  }
  return <Hello {...props}/>
}

ReactDOM.render(<Hello count = {0}/>, document.getElementById('root'))
<script src = "https://cdnjs.cloudflare.com/ajax/libs/react/16.8.6/umd/react.production.min.js" integrity = "sha256-3vo65ZXn5pfsCfGM5H55X+SmwJHBlyNHPwRmWAPgJnM = " crossorigin = "anonymous"></script>
<script src = "https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.8.6/umd/react-dom.production.min.js" integrity = "sha256-qVsF1ftL3vUq8RFOLwPnKimXOLo72xguDliIxeffHRc = " crossorigin = "anonymous"></script>
<div id='root'></div>
Обратите внимание, что метод inc все еще существует, он никому не повредит, на самом деле это мертвый код. Это идея, просто продолжайте поднимать состояние. Когда вы закончите, вы можете удалить компонент класса:

function Hello(props) {
  const [count, setCount] = React.useState(0);

  return <button onClick = {() => setCount(count+1)}>{count}</button>;
}

ReactDOM.render(<Hello count = {0}/>, document.getElementById('root'))
<script src = "https://cdnjs.cloudflare.com/ajax/libs/react/16.8.6/umd/react.production.min.js" integrity = "sha256-3vo65ZXn5pfsCfGM5H55X+SmwJHBlyNHPwRmWAPgJnM = " crossorigin = "anonymous"></script>
<script src = "https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.8.6/umd/react-dom.production.min.js" integrity = "sha256-qVsF1ftL3vUq8RFOLwPnKimXOLo72xguDliIxeffHRc = " crossorigin = "anonymous"></script>

<div id='root'></div>
Хотя это позволяет использовать хуки внутри компонентов класса, я бы не рекомендовал вам это делать, за исключением случаев, когда вы выполняете миграцию, как я в этом примере. Смешивание компонентов функций и классов приведет к беспорядку в управлении состоянием. надеюсь, это поможет

С уважением

 06.08.2019 02:25
Спасибо loelsonk, я так и сделал

const [dataAction, setDataAction] = useState({name: '', description: ''});

    const _handleChangeEventName = (data) => {
        if (data.name)
            setDataAction( prevState  => ({ ...prevState,   name : data.name }));
        if (data.description)
            setDataAction( prevState  => ({ ...prevState,   description : data.description }));
    };
    
    ....return (
    
          <input onChange = {(event) => _handleChangeEventName({name: event.target.value})}/>
          <input onChange = {(event) => _handleChangeEventName({description: event.target.value})}/>
    )
 17.12.2019 11:43
useState - это ловушка, которая позволяет добавлять состояние к функциональному компоненту. Он принимает аргумент, который является начальным значением свойства состояния, и возвращает текущее значение свойства состояния и метод, который может обновлять это свойство состояния. Вот простой пример:

import React, { useState } from react    

function HookCounter {    
  const [count, setCount]= useState(0)    
    return(    
      <div>     
        <button onClick{( ) => setCount(count+1)}> count{count}</button>    
      </div>    
    )   
 }
useState принимает начальное значение переменной состояния, которое в данном случае равно нулю, и возвращает пару значений. Текущее значение состояния было вызвано count, а метод, который может обновлять переменную состояния, был вызван как setCount.

 16.05.2020 20:35
По сути, React.useState(0) волшебным образом видит, что он должен вернуть кортеж count и setCount (метод изменения count). Параметр useState устанавливает начальное значение count.

  const [count, setCount] = React.useState(0);
  const [count2, setCount2] = React.useState(0);

  // increments count by 1 when first button clicked
  function handleClick(){
    setCount(count + 1);
  } 

  // increments count2 by 1 when second button clicked
  function handleClick2(){
    setCount2(count2 + 1);
  } 

  return (
    <div>
      <h2>A React counter made with the useState Hook!</h2>
      <p>You clicked {count} times</p>
      <p>You clicked {count2} times</p>
      <button onClick = {handleClick}>
        Click me
      </button> 
      <button onClick = {handleClick2}>
        Click me2
      </button>
  );
Основано на примере Энмануэля Дюрана, но показывает два счетчика и записывает лямбда-функции как обычные функции, поэтому некоторым людям это может быть проще.

 20.09.2020 08:36
Приведенные выше ответы хороши, но позвольте мне просто вмешаться, useState является асинхронным, поэтому, если ваше следующее состояние зависит от вашего предыдущего состояния, лучше всего передать useState обратный вызов. См. Пример ниже:

import { useState } from 'react';

function Example() {
    const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      // passing a callback to useState to update count
      <button onClick = {() => setCount(count => count + 1)}>
        Click me
      </button>
    </div>
  );
}
Это рекомендуемый способ, если ваше новое состояние зависит от вычислений из старого состояния.

 28.09.2020 16:55
useState - это ловушка, которая позволяет вам иметь переменные состояния в функциональных компонентах.

В React есть два типа компонентов: класс и функциональные компоненты.

Компоненты класса - это классы ES6, которые происходят от React.Component и могут иметь методы состояния и жизненного цикла:

class Message extends React.Component {
constructor(props) {
super(props);
this.state = {
  message: ‘’    
 };
}

componentDidMount() {
/* ... */
 }

render() {
return <div>{this.state.message}</div>;
  }
}
Функциональные компоненты - это функции, которые просто принимают аргументы как свойства компонента и возвращают действительный JSX:

function Message(props) {
  return <div>{props.message}</div>
 }
// Or as an arrow function
const Message = (props) =>  <div>{props.message}</div>
Как видите, нет методов состояния или жизненного цикла.

 08.12.2020 11:16
React useState - это React Hook, который позволяет вам управлять состоянием в функциональных компонентах.

Например:

import React, { useState } from 'react'

const Example = () => {
  // create the "counter" state
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>Button clicked {count} times</p>
      <button onClick = {() => setCount(count + 1)}>
        Count + 1
      </button>
    </div>
  )
}

export default Example
С помощью useState вы можете легко создавать функциональные компоненты с отслеживанием состояния. Старый эквивалентный способ использования компонентов класса с классом Component и setState:

import React, { Component } from 'react'

class Example extends Component {
  constructor(props) {
    super(props)
    this.state = { count: 0 }
  }

  render() {
    const { count } = this.state
    return (
      <div>
        <p>Button clicked {count} times</p>
        <button onClick = {() => this.setState({ count: count + 1 })}>
          Count + 1
        </button>
      </div>
    )
  }
}

export default Example
Источник:

React useState Hook: что нового и как его использовать
Ссылки:

Документация по React Hooks
 02.04.2021 18:54
Давайте разберемся в useState очень легко и просто

предположим, у нас есть код реакции: -

index.js

import React from 'react';
import ReactDOM from 'react-dom';
import Test from './components/Test.jsx'
ReactDOM.render(
  <div>
      <Test />
  </div>
,
  document.getElementById('root')
);
Test.jsx

import React from "react";

function Test() {
  var x = 5;
  function update() {
    console.info(x);
    return x++;
  }
  return (
    <div>
      <h1>{x}</h1>
      <button onClick = {update}>click</button>
    </div>
  );
}
export default Test;
здесь на странице будет отображаться 5, хотя мы вызываем функцию обновления, нажимая кнопку, потому что мы обновляем x, но не между тегами h1, но на самом деле x постоянно меняется всякий раз, когда мы нажимаем на, но он может видеть на консоли

посмотреть результат и проверить консоль, нажав на эту ссылку

здесь usState волшебным образом работает,

Test.jsx с использованием useState

import React, { useState } from "react";

function Test() {
  var x = 5;
  const [value, setValue] = useState(x);

  function update() {
    setValue(value + 1);
  }

  return (
    <div>
      <h1>{value}</h1>
      <button onClick = {update}>click</button>
    </div>
  );
}
export default Test;
посмотреть результат, нажав на эту ссылку

здесь, при нажатии кнопки значение будет постоянно обновляться, потому что здесь мы используем useState, это функция, которая возвращает 2 вещи: одна - текущее значение состояния, а другая - функция, если мы передадим какое-либо значение этому функция, он обновит текущее состояние vlue, а текущее значение состояния обновит свое value во всех местах, где бы оно ни использовалось, без написания дополнительного кода.

 21.07.2021 13:09
Другие вопросы по теме
Как настроить COR в Reactjs в производственной среде
Свойство Material-UI 'children' не определено для SvgIcon
Реагировать - невозможно прочитать свойство setState из undefined
Проблема с отображением навигации по вкладкам React Native
Не удалось получить элемент из DynamoDB через React form-submit, но через автономный код nodejs он работает
Как показать текущий фильтр списка в списке ресурсов
Как инициализировать Fancybox в компоненте reactjs?
Изменить цвет фона меню в React-Admin
Reactjs: выполнять скрипт только после завершения рендеринга после изменения определенной части состояния
Реагировать на собственное приложение, отображающее ошибку как ошибку тайм-аута?
Похожие вопросы
При выполнении проекта замкового камня API не удается получить значение из ввода текста
Во время выполнения теста Cucumber выдает ошибку и неопределяет реализацию со следующим фрагментом
Начальное значение Flipclock 939 511 314?
Получение "длины свойства чтения неопределенного" при попытке ввести дату
Ionic 4, пытаясь показать 2 в строке с col-6, по-прежнему помещает слишком много в строке
Как настроить COR в Reactjs в производственной среде
Как использовать условие * ngIf внутри поля <td> таблицы с использованием angular, где * ngFor зацикливается?
Уведомление браузера не появляется
Асинхронный или синхронный? Как мне обрабатывать эти вызовы API?
В VueJS после добавления () элемента метод щелчка не работает
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
Ошибка регистрации Service Worker: неподдерживаемый тип MIME ('text / html')
Вопросы
JAVASCRIPT
Ошибка регистрации Service Worker: неподдерживаемый тип MIME ('text / html')
Я использую создать-реагировать-приложение с сервером выражать.

create-react-app имеет предварительно настроенный ServiceWorker, который кэширует локальные активы (https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#making-a-progressive-web-app).

Проблема, с которой я столкнулся при попытке публикации на своем сервере, заключается в том, что файл service-worker.js был доступен, но я получал ошибки в консоли браузера, когда он пытался его зарегистрировать.

В Firefox я получил эту ошибку:

Error during service worker registration:

TypeError: ServiceWorker script at https://my-domain.com/service-worker.js for scope https://my-domain.com/ encountered an error during installation.

В Chrome я получаю более описательную ошибку:

Error during service worker registration: DOMException: Failed to register a ServiceWorker: The script has an unsupported MIME type ('text/html').

Разумеется, если я посмотрю на вкладку «Сеть» в своих инструментах разработчика и найду файл service-worker.js, я вижу, что в заголовках HTTP указан неправильный тип MIME.

Однако я не мог понять, почему у него неправильный тип MIME?

 30.03.2018 00:40
43
0
60 613
15
Данный вопрос помечен как решенный
 Ответы 15
 Ответ принят как подходящий
В моем приложении Express-сервера у меня есть один маршрут с подстановочными знаками (звездочка / *), который перенаправляет на index.html:

// Load React App
// Serve HTML file for production
if (env.name === "production") {
  app.get("*", function response(req, res) {
    res.sendFile(path.join(__dirname, "public", "index.html"));
  });
}
Это очень распространенный шаблон проектирования. Однако это означает, что любые запросы на неизвестные текстовые файлы изначально перенаправляются на index.html и, следовательно, возвращаются с MIME-типом "text/html", даже если это на самом деле JavaScript, SVG или какой-либо другой тип открытого текстового файла.

Решение, которое я нашел, заключалось в том, чтобы добавить конкретный маршрут для service-worker.jsперед подстановочный маршрут:

app.get("/service-worker.js", (req, res) => {
  res.sendFile(path.resolve(__dirname, "public", "service-worker.js"));
});
app.get("*", function response(req, res) {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});
Теперь, когда браузер ищет service-worker.js, Express вернет его с правильным типом MIME.

(Обратите внимание, что если вы попытаетесь добавить маршрут service-worker.js после подстановочного символа, это не сработает, потому что подстановочный маршрут будет переопределен.)

 30.03.2018 00:40
ServiceWorker поддерживает типы MIME: text / javascript, application / javascript и application / x-javascript. перейдите в файл вашего сервера и установите

    response.writeHead(201, {
        'Content-Type': 'application/javascript'
    });
 23.08.2018 11:26
Сценарий имеет неподдерживаемый MIME-тип ('text / html'). Не удалось загрузить ресурс: net :: ERR_INSECURE_RESPONSE (индекс): 1 Неперехваченный (в обещании) DOMException: не удалось зарегистрировать ServiceWorker: сценарий имеет неподдерживаемый тип MIME ('text / html').

Код для корневого файла template.js

export default ({ markup, css }) => {
  return `<!doctype html>
      <html lang = "en">
        <head>
          <meta charset = "utf-8">
          <meta name = "viewport" content = "width=device-width, initial-scale=1.0">
          <title>MERN Marketplace</title>
          <link rel = "stylesheet" href = "https://fonts.googleapis.com/css?family=Roboto:100,300,400">
          <link rel = "stylesheet" href = "https://fonts.googleapis.com/icon?family=Material+Icons">

          <style>
              a{
                text-decoration: none
              }
          </style>
          <link rel = "manifest" href = "./manifest.json">
        </head>
        <body style = "margin:0">
            <div id = "root">${markup}</div>
          <style id = "jss-server-side">${css}</style>
          <script type = "text/javascript" src = "/dist/bundle.js"></script>
          <script>
          if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('/sw.js').then(function() { 
              console.info("Service Worker Registered"); 
            });
          }
          </script>
        </body>
      </html>`;
};
 11.09.2018 06:35
Замена:

'/service-worker.js'
с участием:

'./service-worker.js'  // Add a dot before slash.
решил мою аналогичную проблему.

(in navigator.serviceWorker.register('/service-worker.js'))

 16.01.2019 07:25
Реагировать: общедоступный / index.html

<script> 
  if ('serviceWorker' in navigator) {
    window.addEventListener('sw-cached-site.js', function() {
      navigator.serviceWorker.register('service-worker.js', {
        scope: '/',
      });
    });
  } 
  window.process = { env: { NODE_ENV: 'production' } };
</script>
Примечание: полное приложение / сайт общедоступный / sw-cached-site.js

const cacheName = 'v1';
self.addEventListener('activate', (e) =>{
  e.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== cacheName) { 
            return caches.delete(cache);
          }
        })
      )
    })
  )
});
self.addEventListener('fetch', e => { 
  e.respondWith(
      fetch(e.request)
        .then(res => {
            const resClone = res.clone();
            caches
                .open(cacheName)
                .then(cache => {
                    cache.put(e.request, resClone);
                }); 
                return res;
        }).catch(err => caches.match(e.request).then(res => res))
  );
});
 16.01.2019 20:58
Убедитесь, что файл служебного исполнителя создан (Chrome DevTools -> Источники -> Файловая система). Вы можете получить такую ​​ошибку, если файл сервис-воркера вообще не сгенерирован (проверьте свой сценарий развертывания).

 25.01.2019 23:04
В случае, если вы работаете над NodeJS, файл serviceWorker следует разместить в общей папке. Если вы используете Webpack для экспорта serviceWorker в публичный доступ, вам необходимо использовать copy-webpack-plugin.

 24.09.2019 04:30
Я использую nginx для обслуживания приложения реагирования, и я решил эту проблему, добавив типы mime в nginx:

http {
    include    mime.types; // <--- this line

    # another config details
}
Также вы можете найти файл mime.types здесь

 09.11.2019 19:19
Я столкнулся с той же проблемой, и удаление других библиотек firebase из моей конфигурации решило проблему для меня Проверьте это на Github


// Change this 
var firebaseConfig = {
    apiKey: "*********",
    authDomain: "**********",
    databaseURL: "*********",
    projectId: "***********",
    storageBucket: "************",
    messagingSenderId: "***********",
    appId: "************"
};

// To =>
var firebaseConfig = {
  apiKey: "*****************",
  projectId: "**********",
  messagingSenderId: "*******",
  appId: "***********"
};

 11.04.2020 00:54
Я думаю, что файл сервисного работника отсутствует на http://localhost:3000/service-worker.js, поэтому сервер вместо этого возвращает index.html. Тогда функция регистрации не знает, что делать с файлом index.html, и сообщает вам, что тип MIME неверен.

Быстрое решение - скопировать файл service-worker.js в папку public, чтобы при нажатии http://localhost:3000/service-worker.js вы видели файл в браузере.

Не забудьте перейти в ChromeDev> Приложения> ServiceWorkers и нажать Отказаться от подписки. чтобы удалить ошибочный. Не забудьте также отключить кеш

 05.07.2020 14:37
В моем случае для Vue мне нужно было сгенерировать mockServiceWorker.js в общедоступном каталоге с помощью инструмента командной строки, как описано здесь:

https://mswjs.io/docs/getting-started/integrate/browser

Мне это не было ясно из образцов. В частности, команда CLI для запуска:

npx msw init ./public
 25.08.2020 15:35
self.addEventListener('fetch', function(event) {});
Добавьте код выше в файл service-worker.js

 22.09.2020 12:17
При запуске сервера webpack dev он отображает index.html по умолчанию для отсутствующего ресурса.

Если вы используете свой браузер для загрузки http://localhost:3000/sw.js, вы фактически увидите обработанное приложение реакции (запускаемое index.html). Вот почему тип пантомимы - это html, а не javascript.

Этот резервный вариант index.html разработан для поддержки СПА с интерфейсными маршрутами. Например, /product/123/reviews не имеет такого html-файла в бэкэнде, приложение JS SPA позаботится об этом во внешнем интерфейсе.

Почему ваш файл отсутствует? Я предполагаю, что вы создали этот файл в корневой папке вашего проекта.

Сервер разработки Webpack не обслуживается из этой корневой папки.

Переместите свой sw.js в папку public / вашего проекта, он будет обслуживаться, как ожидалось.
 12.04.2021 12:55
Я предполагаю, что файл служебного исполнителя должен находиться по корневому пути. В моем случае я не могу использовать корневой путь, поэтому перенаправляю service-worker.js на свой дополнительный путь, используя правило перенаправления apache.

 RewriteRule "^/service-worker.js$"  "/sub/service-worker.js"
 09.05.2021 17:41
У меня была аналогичная проблема при размещении сайта на Python. Ни одно из решений здесь не помогло мне, и я наткнулся на ошибка опубликована на форуме chrome dev, который помог решить мою проблему. По-видимому, в моем случае это была проблема, связанная с Windows, поскольку в записи реестра для файлов .js был установлен тип содержимого text / plain из-за некоторой предыдущей конфигурации, которую мне пришлось изменить обратно на application / javascript.

TL; DR:

Открыть редактор реестра
Перейдите в Computer \ HKEY_CLASSES_ROOT \ .js
Измените тип содержимого на приложение / javascript
Перезагрузите Chrome и запустите свой сайт
Надеюсь, это поможет кому-то, если ничего из вышеперечисленного не работает.

 14.05.2021 09:58
Другие вопросы по теме
Reactjs перезапускает видео при нажатии аудиоплеера
Условный встроенный стиль с помощью React Native
В React, как установить флажок ввода в зависимости от значения объекта
Установка состояния на пустую строку не вызывает у меня повторного рендеринга?
Как предотвратить бесконечный цикл в создателе цикла while?
HOC Redux Dispatch вызывается после вызова дочернего компонента React componentDidMount
JestJS: Как проверить значение состояния в catch ()
Uncaught TypeError: невозможно прочитать значение свойства null в React
Как определить, какой компонент вызвал функцию обратного вызова?
Слежка за функцией, вызванной в отклоненном обещании
Похожие вопросы
Тестирование, если что-то внутри функции имеет необработанное отклонение обещания
Как удалить строку из таблицы
Условный встроенный стиль с помощью React Native
Создание следующих страниц через javascript без обновления или новой страницы?
JQueryUI Автозаполнение раскрывающегося списка отсутствует форматирование
Изображения не отображаются в шаблоне веб-пакета Vue-cli
Удалить элемент HTML по истечении установленного времени
Стрелка d3 график svg не отображается
Помещать значения в пустой массив?
Добавить много классов в стиль в jquery
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
Ошибка eslint при развертывании на локальном сервере реагирующего веб-приложения
Вопросы
REACTJS
Ошибка eslint при развертывании на локальном сервере реагирующего веб-приложения
Возможно, возникла проблема с деревом зависимостей проекта. Скорее всего, это не ошибка в приложении Create React, а то, что вам нужно исправить локально.

Пакет response-scripts, предоставляемый приложением Create React, требует зависимости:

"eslint": "5.6.0"
Не пытайтесь установить его вручную: ваш менеджер пакетов делает это автоматически. Однако выше в дереве была обнаружена другая версия eslint:

D:\chintu\blog-exambunker-master\blog-exambunker-master\node_modules\eslint (version: 5.6.1)
как установить версию 5.6.0 Я устанавливаю eslint, который всегда устанавливается с последней версией, может кто-нибудь посоветовать мне, что делать?

 01.10.2018 09:44
11
0
16 078
15
 Ответы 15
У меня точно такая же проблема. Я пробовал что-нибудь из этих предложений:

Удалите package-lock.json (не package.json!) И / или yarn.lock в папке вашего проекта.
Удалите node_modules из папки вашего проекта.
Удалите eslint из dependencies и / или devDependencies в файле package.json в папке проекта.
Запустите npm install или yarn, в зависимости от того, какой менеджер пакетов вы используете.
В большинстве случаев этого должно быть достаточно, чтобы устранить проблему. Если это не помогло, вы можете попробовать еще несколько вещей:

Если вы использовали npm, установите yarn и вместо этого повторите с ним вышеуказанные шаги. Это может помочь, потому что у npm есть известные проблемы с подъемом пакетов, которые могут быть решены в будущих версиях.

Убедитесь, что C:\Users\User\node_modules\eslint находится вне каталога вашего проекта. Например, вы могли случайно что-то установить в свою домашнюю папку.

Попробуйте запустить npm ls eslint в папке вашего проекта. Это скажет вам, какой еще пакет (кроме ожидаемых сценариев реакции) установил eslint.

ничего не работало. каждый раз, когда я делаю npm install/yarn, он продолжает устанавливать старую версию eslint.

 05.10.2018 13:00
хорошо, я нашел свою проблему: у меня были пакеты npm и еще немного дерьма за пределами папок проектов (на c: / users / user), у них могла быть старая версия eslint. Разберись с этим и скажи мне, есть ли у тебя проблема или нет.

 05.10.2018 13:29
Добавьте SKIP_PREFLIGHT_CHECK = true в файл .env в вашем проекте.

 11.10.2018 19:00
Я удалил папку модулей узлов, которая содержала более старую версию eslint. Я обнаружил, что это самое простое решение, а не изменение зависимостей.

 24.10.2018 01:25
Я искал, где был eslint:

npm ls eslint
затем я удалил его с помощью:

npm uninstall ls eslint
Наконец я побежал

npm start
и это сработало.

 28.10.2018 19:37
Возможно, возникла проблема с деревом зависимостей проекта. Скорее всего, это не ошибка в приложении Create React, а то, что вам нужно исправить локально.

Пакет response-scripts, предоставляемый приложением Create React, требует зависимости:

"eslint": "5.6.0"

Не пытайтесь установить его вручную: ваш менеджер пакетов делает это автоматически. Однако выше в дереве была обнаружена другая версия eslint:

/ Users / macbook / node_modules / eslint (версия: 3.19.0)

Известно, что ручная установка несовместимых версий вызывает проблемы, которые сложно отладить.

Если вы предпочитаете игнорировать эту проверку, добавьте SKIP_PREFLIGHT_CHECK = true в файл .env в своем проекте. Это навсегда отключит это сообщение, но вы можете столкнуться с другими проблемами.

Чтобы исправить дерево зависимостей, попробуйте выполнить следующие шаги в точном порядке:

Удалите package-lock.json (не package.json!) И / или yarn.lock в папке вашего проекта.
Удалите node_modules в папке вашего проекта.
Удалите "eslint" из зависимостей и / или devDependencies в файле package.json в папке вашего проекта.
Запустите npm install или yarn, в зависимости от того, какой менеджер пакетов вы используете.
В большинстве случаев этого должно быть достаточно, чтобы устранить проблему. Если это не помогло, вы можете попробовать еще несколько вещей:

Если вы использовали npm, установите пряжу (http://yarnpkg.com/) и вместо этого повторите с ней вышеуказанные шаги. Это может помочь, потому что у npm есть известные проблемы с подъемом пакетов, которые могут быть решены в будущих версиях.

Убедитесь, что / Users / macbook / node_modules / eslint находится вне каталога вашего проекта. Например, вы могли случайно что-то установить в свою домашнюю папку.

Попробуйте запустить npm ls eslint в папке вашего проекта. Это скажет вам, какой еще пакет (кроме ожидаемых сценариев реакции) установил eslint.

Если ничего не помогает, добавьте SKIP_PREFLIGHT_CHECK = true в файл .env в своем проекте. Это навсегда отключит эту предполетную проверку, если вы все равно захотите продолжить.

P.S. Мы знаем, что это длинное сообщение, но, пожалуйста, прочтите шаги выше :-) Надеемся, вы найдете их полезными!

npm ERR! код ELIFECYCLE npm ERR! ошибка 1 npm ERR! my-app@0.1.0 начало: react-scripts start npm ERR! Статус выхода 1 npm ERR! npm ERR! Ошибка при запуске сценария my-app@0.1.0. npm ERR! Вероятно, это не проблема npm. Скорее всего, выше есть дополнительный вывод журнала.

npm ERR! Полный журнал этого запуска можно найти в: npm ERR! /Users/macbook/.npm/_logs/2018-11-01T15_26_42_405Z-debug.log

 01.11.2018 16:29
(Не делайте того, что я сделал, если вы не читаете все, что я опубликовал) По крайней мере, со мной я только что понизил версию eslint 5.8.0 до 5.6.0 (вручную). Почему? Поскольку, когда я использую какую-то библиотеку eslint, такую ​​как airbnb, она автоматически устанавливает последнюю версию eslint (5.8.0), проблема здесь в том, что эта версия конфликтует с предыдущей версией eslint, используемой response (5.6.0), поэтому, когда вы downgrade, вы просто вернетесь к предыдущему установленному eslint, так что здесь он работает нормально, но вы должны быть осторожны при обновлении вашей версии реакции.

 02.11.2018 18:09
Ошибка заключается в несовместимости версий eslint и babel-eslint. Чтобы решить эту проблему, сначала вам нужно удалить пакет eslint с помощью npm uninstall eslint. Эта команда удалит ваш пакет eslint. После этого вам необходимо установить версию 5.6.0eslint, поэтому напишите эту команду npm i eslint@5.6.0. Я надеюсь, что это будет вам полезно. Кроме того, вы можете удалить папку node_modules и затем установить ее.

 06.12.2018 12:55
Что решило это для меня, так это то, что в сообщении об ошибке он сказал мне, что в проекте был установлен eslint с 5.6.0, а другой установлен в users/andrew/nodemodules/eslint с версией 4.1.6. Я попытался сделать npm uninstall -g eslint, но это не сработало, поэтому я просто искал все файлы и папки в users/andrew/nodemodules/eslint и удалил их, и тогда это сработало. Я не уверен, что это хороший способ сделать это, но он сработал.

 01.01.2019 13:22
Создайте файл .env в корневом каталоге.

И вы можете проигнорировать чек, поставив

SKIP_PREFLIGHT_CHECK=true
в файле .env.

Ссылка: https://github.com/facebook/create-react-app/issues/5247#issuecomment-427221678

Обновлено: это не решение этой проблемы. Просто проигнорируйте ошибку, как она обсуждается в выпуске.

 15.01.2019 08:55
Просто удалите package-lock.json и node_modules, затем запустите npm install, затем npm start

еще вы могли бы установить npm я eslint@5.6.0, тогда npm start

наслаждайся работой :)

Пункт списка
 22.02.2019 19:23
Откройте окно терминала НОВЫЙ в корневом каталоге.

Запустите команду

npm ls eslint
это должно показать вам установки, которые находятся «выше» по дереву зависимостей.

Перейдите в папки, содержащие gulp-eslint / eslint / babel-eslint или даже скрытые node_modules /, которые не должны были устанавливаться глобально.

Затем запустите одну или все эти команды в зависимости от того, где находятся файлы.

rm -rf node_modules/
rm -rf (name of other folders like eslint/gulp-eslint)
ВЕРНУТЬСЯ К ВАШЕМУ ПРОЕКТУ

Лучше на всякий случай, чем сожалеть, выполните следующие команды, чтобы убедиться, что он снова будет работать правильно.

В корневом каталоге вашего проекта

rm -rf node_modules/
rm -rf package-lock.json
(Если он не удалил node_modules, просто удалите его из своей папки)

Наконец, запустите следующее.

npm install
тогда

npm start
 19.08.2019 18:23
перейдите в папку node_modules и откройте response-scripts / package.json, найдите зависимости eslint и измените их. это исправлено таким образом.

 05.12.2019 23:58
https://github.com/wesbos/eslint-config-wesbos/issues/17

В вышеупомянутой ссылке они предложили установить @ abhijithvijayan / eslint-config как одноранговую зависимость. Посмотрите, работает ли это для вас.

 29.06.2020 11:35
вы можете установить глобальный eslint, подобный этому

{22:14}~/go/src/github.com ➭ npm ls eslint      
/Users/demon
└── eslint@6.1.0 
затем беги

{22:14}~/go/src/github.com ➭ npm uninstall eslint
в глобальном терминале вместо терминала vscode. затем беги

npm start
 20.12.2020 15:21
Другие вопросы по теме
Горячий перезагрузчик с редукцией create-response-app не работает
Добавить атрибут цели данных к элементу кнопки после нажатия
React / Webpack исключает обновляемый файл конфигурации из пакета
Вставьте React "root" dom, чтобы он был на странице программно
Делаем простой секвенсор с помощью WAAClock и реагируем?
Использование <Grow> на <Tab>
Контекстное меню React в таблице реакции с помощью react-contextxify
Ошибка React-Native при добавлении видео с использованием Expo в App.js для фона
Использовать один и тот же экземпляр сокета в приложении React
Маркер редактора React Ace выделяет всю строку, даже если startCol и endCol определены для ограничения столбцов
Похожие вопросы
Не удается найти модуль joi в index.js при запуске тестов Jests в Jenkins
Жизненный цикл какого компонента вызывается каждый раз, когда экран монтируется в React Native?
Как я могу изменить внутреннее состояние с помощью .reduce () в react native?
Как импортировать или использовать только дочерние компоненты?
Как обновить динамически сгенерированную форму в React JS
Почему мы расширяем React.Component при создании компонента класса в React?
Веб-приложение React после перенаправления, показывающее пустой контент, после обновления страницы, показывающей контент
GetDerivedStateFromProps отображает для каждого обновления поля в реакции
Машинопись: Почему Material-UI «withStyles ()» не работает с явным конструктором?
Проблема с загрузкой css response-datepicker в файл jsx
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
Бесконечный цикл в использовании
Вопросы
REACTJS
Бесконечный цикл в использовании
Я поигрался с новой системой ловушек в React 16.7-alpha и застрял в бесконечном цикле в useEffect, когда состояние, которое я обрабатываю, является объектом или массивом.

Сначала я использую useState и запускаю его с пустым объектом, например:

const [obj, setObj] = useState({});
Затем в useEffect я использую setObj, чтобы снова установить для него пустой объект. В качестве второго аргумента я передаю [obj], надеясь, что он не обновится, если содержание объекта не изменилось. Но он продолжает обновляться. Я думаю, потому что независимо от содержимого, это всегда разные объекты, заставляющие React думать, что он постоянно меняется?

useEffect(() => {
  setIngredients({});
}, [ingredients]);
То же самое и с массивами, но как примитив он не застревает в цикле, как ожидалось.

Используя эти новые хуки, как мне обрабатывать объекты и массив при проверке того, изменилось ли содержимое или нет?

 30.10.2018 19:45
158
3
122 993
15
Данный вопрос помечен как решенный
 Ответы 15
 Ответ принят как подходящий
Передача пустого массива в качестве второго аргумента для useEffect заставляет его работать только при монтировании и размонтировании, тем самым останавливая любые бесконечные циклы.

useEffect(() => {
  setIngredients({});
}, []);
Это было разъяснено мне в сообщении блога о перехватчиках React на https://www.robinwieruch.de/react-hooks/

 31.10.2018 00:53
Была такая же проблема. Я не знаю, почему они не упоминают об этом в документации. Просто хочу добавить немного к ответу Тобиаса Хогена.

Для запуска в каждый компонент / родительский рендер вам необходимо использовать:

  useEffect(() => {

    // don't know where it can be used :/
  })
Чтобы запустить что-либо только раз после монтирования компонента (будет отрисовано один раз), вам необходимо использовать:

  useEffect(() => {

    // do anything only one time if you pass empty array []
    // keep in mind, that component will be rendered one time (with default values) before we get here
  }, [] )
Чтобы выполнить любое изменение один раз при монтировании компонента и на data / data2:

  const [data, setData] = useState(false)
  const [data2, setData2] = useState('default value for first render')
  useEffect(() => {

// if you pass some variable, than component will rerender after component mount one time and second time if this(in my case data or data2) is changed
// if your data is object and you want to trigger this when property of object changed, clone object like this let clone = JSON.parse(JSON.stringify(data)), change it clone.prop = 2 and setData(clone).
// if you do like this 'data.prop=2' without cloning useEffect will not be triggered, because link to data object in momory doesn't changed, even if object changed (as i understand this)
  }, [data, data2] )
Как я использую его чаще всего:

export default function Book({id}) { 
  const [book, bookSet] = useState(false) 

  const loadBookFromServer = useCallback(async () => {
    let response = await fetch('api/book/' + id)
    response  = await response.json() 
    bookSet(response)
  }, [id]) // every time id changed, new book will be loaded

  useEffect(() => {
    loadBookFromServer()
  }, [loadBookFromServer]) // useEffect will run once and when id changes


  if (!book) return false //first render, when useEffect did't triggered yet we will return false

  return <div>{JSON.stringify(book)}</div>  
}
 31.10.2018 21:08
Я тоже однажды столкнулся с той же проблемой и исправил ее, убедившись, что я передаю примитивные значения во втором аргументе [].

Если вы передадите объект, React сохранит только ссылку на объект и запустит эффект при изменении ссылки, что обычно происходит каждый раз (хотя я сейчас не знаю, как это сделать).

Решение состоит в том, чтобы передать значения в объект. Ты можешь попробовать,

const obj = { keyA: 'a', keyB: 'b' }

useEffect(() => {
  // do something
}, [Object.values(obj)]);
или

const obj = { keyA: 'a', keyB: 'b' }

useEffect(() => {
  // do something
}, [obj.keyA, obj.keyB]);
 09.02.2019 05:32
Как сказано в документации (https://reactjs.org/docs/hooks-effect.html), ловушка useEffect предназначена для использования когда вы хотите, чтобы какой-то код выполнялся после каждого рендеринга. Из документов:

Does useEffect run after every render? Yes!

Если вы хотите настроить это, вы можете следовать инструкциям, которые появятся позже на той же странице (https://reactjs.org/docs/hooks-effect.html#tip-optimizing-performance-by-skipping-effects). По сути, метод useEffect принимает второй аргумент, который React исследует, чтобы определить, нужно ли запускать эффект снова или нет.

useEffect(() => {
  document.title = `You clicked ${count} times`;
}, [count]); // Only re-run the effect if count changes
В качестве второго аргумента можно передать любой объект. Если этот объект не изменится, ваш эффект сработает только после первого маунта.. Если объект изменится, эффект сработает снова.

 11.02.2019 19:02
Я не уверен, что это сработает для вас, но вы можете попробовать добавить .length следующим образом:

useEffect(() => {
        // fetch from server and set as obj
}, [obj.length]);
В моем случае (я получал массив!) Он получал данные при монтировании, затем снова только при изменении, и это не входило в цикл.

 27.04.2019 18:09
Ваш бесконечный цикл связан с округлостью

useEffect(() => {
  setIngredients({});
}, [ingredients]);
setIngredients({}); изменит значение ingredients (каждый раз будет возвращать новую ссылку), что запустит setIngredients({}). Чтобы решить эту проблему, вы можете использовать любой подход:

Передайте другой второй аргумент для useEffect
const timeToChangeIngrediants = .....
useEffect(() => {
  setIngredients({});
}, [timeToChangeIngrediants ]);
setIngrediants будет работать после изменения timeToChangeIngrediants.

Я не уверен, какой вариант использования оправдывает изменение ингредиентов после его изменения. Но если это так, вы передаете Object.values(ingrediants) в качестве второго аргумента useEffect.
useEffect(() => {
  setIngredients({});
}, Object.values(ingrediants));
 29.06.2019 16:08
If you use this optimization, make sure the array includes all values from the component scope (such as props and state) that change over time and that are used by the effect.

Я считаю, что они пытаются выразить возможность того, что можно использовать устаревшие данные, и знать об этом. Не имеет значения тип значений, которые мы отправляем в array для второго аргумента, если мы знаем, что если какое-либо из этих значений изменится, он выполнит эффект. Если мы используем ingredients как часть вычислений внутри эффекта, мы должны включить его в array.

const [ingredients, setIngredients] = useState({});

// This will be an infinite loop, because by shallow comparison ingredients !== {} 
useEffect(() => {
  setIngredients({});
}, [ingredients]);

// If we need to update ingredients then we need to manually confirm 
// that it is actually different by deep comparison.

useEffect(() => {
  if (is(<similar_object>, ingredients) {
    return;
  }
  setIngredients(<similar_object>);
}, [ingredients]);

 22.08.2019 17:53
Лучший способ - сравнить предыдущее значение с текущим значением, используя usePrevious () и _.равно() из Лодаш. Импортируйте равно и useRef. Сравните ваше предыдущее значение с текущим значением внутри useEffect (). Если они такие же, больше ничего не обновляйте. usePrevious (значение) - это настраиваемая ловушка, которая создает ссылка с useRef ().

Ниже приведен фрагмент моего кода. Я столкнулся с проблемой бесконечного цикла с обновлением данных с помощью крючка firebase

import React, { useState, useEffect, useRef } from 'react'
import 'firebase/database'
import { Redirect } from 'react-router-dom'
import { isEqual } from 'lodash'
import {
  useUserStatistics
} from '../../hooks/firebase-hooks'

export function TMDPage({ match, history, location }) {
  const usePrevious = value => {
    const ref = useRef()
    useEffect(() => {
      ref.current = value
    })
    return ref.current
  }
  const userId = match.params ? match.params.id : ''
  const teamId = location.state ? location.state.teamId : ''
  const [userStatistics] = useUserStatistics(userId, teamId)
  const previousUserStatistics = usePrevious(userStatistics)

  useEffect(() => {
      if (
        !isEqual(userStatistics, previousUserStatistics)
      ) {
        
        doSomething()
      }
     
  })
 06.09.2019 15:58
Если вы создаете собственный хук, иногда вы можете вызвать бесконечный цикл по умолчанию следующим образом

function useMyBadHook(values = {}) {
    useEffect(()=> { 
           /* This runs every render, if values is undefined */
        },
        [values] 
    )
}
Исправление состоит в том, чтобы использовать один и тот же объект вместо создания нового при каждом вызове функции:

const defaultValues = {};
function useMyBadHook(values = defaultValues) {
    useEffect(()=> { 
           /* This runs on first call and when values change */
        },
        [values] 
    )
}
Если вы столкнулись с этим в коде вашего компонента цикл может быть исправлен, если вы используете defaultProps вместо значений по умолчанию ES6

function MyComponent({values}) {
  useEffect(()=> { 
       /* do stuff*/
    },[values] 
  )
  return null; /* stuff */
}

MyComponent.defaultProps = {
  values = {}
}
 29.10.2019 07:41
Если вы включите пустой массив в конец useEffect:

useEffect(()=>{
        setText(text);
},[])
Он бы запустился один раз.

Если вы также включите параметр в массив:

useEffect(()=>{
            setText(text);
},[text])
Он будет запускаться при изменении текстового параметра.

 02.03.2020 10:08
Если вам НЕОБХОДИМО сравнивать объект и когда он обновляется, вот ловушка deepCompare для сравнения. Принятый ответ, конечно же, не касается этого. Наличие массива [] подходит, если вам нужно, чтобы эффект запускался только один раз при монтировании.

Кроме того, другие проголосовавшие ответы касаются только проверки примитивных типов, выполняя obj.value или что-то подобное, чтобы сначала перейти на уровень, на котором он не вложен. Это может быть не лучшим случаем для глубоко вложенных объектов.

Итак, вот тот, который будет работать во всех случаях.

import { DependencyList } from "react";

const useDeepCompare = (
    value: DependencyList | undefined
): DependencyList | undefined => {
    const ref = useRef<DependencyList | undefined>();
    if (!isEqual(ref.current, value)) {
        ref.current = value;
    }
    return ref.current;
};
Вы можете использовать то же самое в хуке useEffect

React.useEffect(() => {
        setState(state);
    }, useDeepCompare([state]));
 19.04.2020 15:21
Вы также можете деструктурировать объект в массиве зависимостей, то есть состояние будет обновляться только при обновлении определенных частей объекта.

Для этого примера предположим, что ингредиенты содержат морковь, мы могли бы передать это в зависимость, и только если морковь изменилась, состояние обновилось.

Затем вы можете пойти дальше и обновлять количество морковок только в определенных точках, тем самым контролируя, когда будет обновляться состояние, и избегая бесконечного цикла.

useEffect(() => {
  setIngredients({});
}, [ingredients.carrots]);
Примером использования чего-то подобного является вход пользователя на веб-сайт. Когда они входят в систему, мы можем деструктурировать объект пользователя, чтобы извлечь их cookie и роль разрешений, и соответствующим образом обновить состояние приложения.

 24.07.2020 12:17
мой случай был особенным при столкновении с бесконечным циклом, сенарио было таким:

У меня был объект, скажем, objX, который исходит из реквизита, и я деструктурировал его в реквизитах, например:

const { something: { somePropery } } = ObjX
и я использовал somePropery как зависимость от моего useEffect, например:


useEffect(() => {
  // ...
}, [somePropery])

и это вызвало у меня бесконечный цикл, я попытался справиться с этим, передав весь something в качестве зависимости, и он работал правильно.

 27.09.2020 12:01
Основная проблема в том, что useEffect сравнивает входящее значение с текущим значением неглубоко. Это означает, что эти два значения сравниваются с использованием сравнения '===', которое проверяет только ссылки на объекты, и хотя значения массива и объекта совпадают, оно рассматривает их как два разных объекта. Я рекомендую вам ознакомиться с моим статья о useEffect как методах жизненного цикла.

 23.03.2021 11:19
Другое рабочее решение, которое я использовал для состояния массивов:

useEffect(() => {
  setIngredients(ingredients.length ? ingredients : null);
}, [ingredients]);
 12.05.2021 01:13
Другие вопросы по теме
Проблема с увеличением типов реакции в машинописном тексте
React Hooks - создание запроса Ajax
Ошибка импорта пользовательских хуков в React 16.7.0-alpha
Перехватчики React: Что / Почему `useEffect`?
Функционирует ли пакетное обновление состояния React при использовании хуков?
Можем ли мы использовать деструктуризацию объекта для useState () в хуках reactjs?
Ошибка React Hooks: хуки можно вызывать только внутри тела функционального компонента
Состояние не обновляется при использовании обработчика состояния React в setInterval
Как React.useState вызывает повторный рендеринг?
Диспетчер TypeError.useState не является функцией при использовании React Hooks
Похожие вопросы
Реагировать, передавая перетаскивание событий вверх; this.props.onDragStart не функция
Есть ли простой способ реструктурировать путь к папке проекта React?
Повторно использовать компонент React с разными вызовами методов
Нужны пояснения по базовой настройке
React возвращает несколько переменных из json
ReactJS + NodeJS: как разделить маршруты для приложения и для API?
Sidenav в стиле Stripe с помощью React
Неизменное нарушение: конфигурация просмотра не найдена для параметра имени (React Native)
Redux, лучший способ доступа и использования состояния внутри промежуточного программного обеспечения
Изменение значков на панели расширения
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
Реагировать на переменные среды .env return undefined
Вопросы
REACTJS
Реагировать на переменные среды .env return undefined
Я создаю приложение для реагирования, и мне нужно получить данные из моего api, теперь я хочу сохранить URL-адрес api в качестве переменной среды. У меня есть файл .env, установлен dotenv, вот мой код process.env.API_URL возвращает undefined.

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from '../src/components/Home'
import dotenv from  'dotenv'
import path from 'path'


class App extends Component {
  render() {
    console.info(process.env.API_URL)
    return (
      <div>
        <Home/>
      </div>
    );
  }
}

export default App;
 10.11.2018 09:31
99
2
81 504
15
 Ответы 15
Вероятно, вам нужно будет вызвать в dotenv.config(), как предлагает документ

Если вы используете приложение create-response-app, вам не нужен пакет dotenv. Вам нужно будет добавить префикс REACT_APP_ к имени переменной в файле .env. См. Документ здесь

 10.11.2018 09:48
Здесь следует отметить три вещи

переменная должна быть с префиксом с REACT_APP_

например: REACT_APP_WEBSITE_NAME=hello

Вам необходимо рестарт на сервере, чтобы отразить изменения.

Убедитесь, что у вас есть файл .env в папке корень (там же, где у вас package.json), а НЕ в папке src.

После этого вы можете получить доступ к переменной, например, process.env.REACT_APP_SOME_VARIABLE

Дополнительные советы

Не нужно заключать значение переменной в одинарные или двойные кавычки.
Не ставьте точку с запятой ; или запятую , в конце каждой строки.
Подробнее здесь (мой собственный пост) и официальный документы

 10.11.2018 10:11
Привет, спасибо, парень, что я сделал и работал, так это создал файл config.js

 const dev = {
    API_URL:"http://localhost:300"
}

const prod = {
    API_URL:"llll"
}
const config=process.env.NODE_ENV=='development'?dev:prod
export default  config
Затем я импортирую где угодно в компоненте и получаю свои данные.

 12.11.2018 21:36
Еще одна возможная ловушка, в которую я попал, заключалась в том, чтобы определить переменные не в папке create-react-app, а в папке выше (где находится Node server / backend .env). Убедитесь, что вы не делаете этого, потому что вы потратите драгоценное время, как я сделал сегодня.

 16.08.2019 16:19
Убедитесь, что вы использовали префикс REACT_APP для каждой переменной.

Убедитесь, что имена переменных в файле .env совпадают с именами в
. ваш файл js. Например, REACT_APP_KEY в .env по сравнению с process.env.REACT_APP_KY

Если сервер разработки был запущен, остановите его, а затем перезапустите, используя npm Начни это. Я действительно боролся с этим (переменная - неопределенная ошибка).
Каждый раз, когда вы обновляете файл .env, вам нужно останавливать сервер и перезапустите его, так как переменные среды обновляются только во время сборки (переменная - неопределенная ошибка).
Удалите цитаты из значений переменных.
// Wrong: 
REACT_APP_KEY=”AHEHEHR”

// Right:
REACT_APP_KEY=AHEHEHR
 05.04.2020 12:22
Добавьте префикс REACT_APP_ в переменные среды React.

apiKey: process.env.REACT_APP_API_KEY
Убедитесь, что файл .env находится в корневом каталоге.

src/
.env
.gitignore
package.json
package-lock.json
После внесения изменений в файл .env перезапустите сервер разработки.

Скопируйте только значение внутри кавычек и не забудьте удалить запятые в конце (это преследовало меня несколько часов). Эти примеры выдадут вам ошибку.

REACT_APP_API_KEY=Ach2o1invVocSn25FcQhash209,
REACT_APP_API_KEY = "Ach2o1invVocSn25FcQhash209",
REACT_APP_API_KEY = "Ach2o1invVocSn25FcQhash209"
 07.04.2020 09:47
Если приведенные выше решения не работают для вас, проверьте, где находится ваш файл ".env". Как и в моем случае, все, что я сделал правильно, но ошибка в том, что я поместил ".env" вне каталога моего проекта, из-за чего я получаю сообщение об ошибке.

Примечание. Ваш файл ".env" должен находиться в том же каталоге, что и ваш "package.json".

 28.10.2020 08:12
попробуйте также очистить кеш.

npx react-native start --reset-cache
 16.01.2021 02:47
перезапустите vscode (закройте проект, закройте редактор)
открой это снова
запустить проект
В моем случае это очень помогает. Также не забудьте начать имя вашего ключа с REACT_APP_YOUR_NAME_KEY

 07.04.2021 15:47
ИСПРАВИТЬ:

в babel.config.js, если вы используете необязательную конфигурацию:

    {
  "plugins": [
    ["module:react-native-dotenv", {
      "moduleName": "@env",
      "path": ".env",
      "blacklist": null,
      "whitelist": null,
      "safe": false,
      "allowUndefined": true
    }]
  ]
}
вы должны затем импортировать:

import {API_URL, API_TOKEN} from "@env"
вместо того:

import {API_URL, API_TOKEN} from "react-native-dotenv"
само описание Пакет NPM имеет это несоответствие

 10.05.2021 17:18
НЕ СОХРАНЯЙТЕ И НЕ ИСПОЛЬЗУЙТЕ КЛЮЧИ API ВО ФРОНТЕНДНОМ КОДЕ, ПОСКОЛЬКУ ЭТО ЛЕГКО ПРОЧИТАЕТСЯ С ПОМОЩЬЮ ИНСТРУМЕНТОВ DEV

Сохранение ключей API в .env и их использование в приложении React по-прежнему будет незащищенным, поскольку ключ API можно прочитать из DevTools.

Используйте простой бэкэнд-код, который будет действовать как прокси для вашей службы.

Отправьте необходимые данные через запрос, а затем серверная часть должна использовать эти данные, включая ключ API, хранящийся на сервере, а затем сделать запрос какой-либо конкретной службе, которой нужен этот ключ API.

 11.05.2021 02:36
Не нужно ставить префикс REACT_APP_, просто определите свою среду -

если вы находитесь в среде разработки (запуск npm), вы должны добавить переменную среды в .env.development, например - API_URL=http://example.com
если вы находитесь в производственной среде, обновление .env должно работать
Затем используйте то же самое в своем файле JS, что и process.env.API_URL

Примечание: Я тестировал это на React JS v16.8

 03.08.2021 11:38
Решение:
1. Удалите двойные кавычки. ("...").
2. Префикс Должен быть REACT_APP для каждой переменной.

Правильно:

REACT_APP_API_URL=http://localhost:8002
Надеюсь, это сработает.

 04.08.2021 14:44
при вызове переменной .env из файла JS вам нужно вызвать его по префиксу process.env., прежде чем записывать переменную .env

таким образом это будет выглядеть как process.env.REACT_APP_NOT_SECRET_CODE

и не забудьте начать имя переменной с префикса REACT_APP_, как упоминалось в предыдущих ответах, иначе React проигнорирует его по соображениям безопасности.

 22.08.2021 20:57
Если вы используете dev-сервер на локальном хосте, знайте, что .env здесь не работает, вам необходимо развернуть веб-сайт на «обычном» сервере, это причина безопасности, чтобы не позволять браузеру видеть .env при постановке.

 04.11.2021 12:49
Другие вопросы по теме
Параметры Firefox JavaScript, переданные в функцию, не определены в событии <audio>
Ошибка машины для маршрутизации листовок: геокодер не определен
Если тест на [undefined]
Laravel, когда база данных пуста, я получаю ошибку, иначе нет, но я должен использовать это
Невозможно прочитать свойство 'nid' неопределенного значения, необходимо передать объект другому контроллеру
Типографский линтер вызывает при сопоставлении 'объект возможен не определен', когда объект уже был проверен фильтром
C++ undefined ссылка на пространство имен Visual Studio Code
Как определить черепаху в Python без создания новой?
TypeScript: действительно ли вопросительные знаки для необязательных свойств CLASS имеют какое-либо значение?
Переменная javascript не определена, несмотря на то, что она была определена
Похожие вопросы
SetState не обновляет DOM
Express Multer проверяет поля перед загрузкой
Приложение create-response-app с машинописным текстом компилирует функции во что-то очень странное
В чем разница между свойством simple, highQuality, сбалансированным для textBreakStrategy в React Native?
Как сделать так, чтобы экраны соответствовали устройству в React Native
Почему новая версия Node и React дает мне пустую страницу для маршрута?
This.setState () в обратном вызове this.setState ()
Вложенный маршрутизатор React: скрыть родительский компонент при отображении вложенного дочернего компонента
Попытка развернуть мое приложение (Node, React, Socketio) на Heroku дает мне «sh: 1: response-scripts: Permission denied»
Карта в объекте массива с индексом другого параметра карты
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
Предупреждения React Hook для асинхронной функции в useEffect: функция useEffect должна возвращать функцию очистки или ничего
Вопросы
JAVASCRIPT
Предупреждения React Hook для асинхронной функции в useEffect: функция useEffect должна возвращать функцию очистки или ничего
Я пробовал пример useEffect примерно так:

useEffect(async () => {
    try {
        const response = await fetch(`https://www.reddit.com/r/${subreddit}.json`);
        const json = await response.json();
        setPosts(json.data.children.map(it => it.data));
    } catch (e) {
        console.error(e);
    }
}, []);
и я получаю это предупреждение на своей консоли. Но я думаю, что очистка необязательна для асинхронных вызовов. Я не знаю, почему я получаю это предупреждение. Связывание песочницы для примеров. https://codesandbox.io/s/24rj871r0pПредупреждения React Hook для асинхронной функции в useEffect: функция useEffect должна возвращать функцию очистки или ничего

 16.11.2018 07:07
344
0
392 568
15
Данный вопрос помечен как решенный
 Ответы 15
Когда вы используете асинхронную функцию, например

async () => {
    try {
        const response = await fetch(`https://www.reddit.com/r/${subreddit}.json`);
        const json = await response.json();
        setPosts(json.data.children.map(it => it.data));
    } catch (e) {
        console.error(e);
    }
}
он возвращает обещание, а useEffect не ожидает, что функция обратного вызова вернет обещание, скорее он ожидает, что ничего не будет возвращено или функция будет возвращена.

В качестве обходного пути для предупреждения вы можете использовать самозапускающуюся асинхронную функцию.

useEffect(() => {
    (async function() {
        try {
            const response = await fetch(
                `https://www.reddit.com/r/${subreddit}.json`
            );
            const json = await response.json();
            setPosts(json.data.children.map(it => it.data));
        } catch (e) {
            console.error(e);
        }
    })();
}, []);
или, чтобы сделать его более чистым, вы можете определить функцию, а затем вызвать ее

useEffect(() => {
    async function fetchData() {
        try {
            const response = await fetch(
                `https://www.reddit.com/r/${subreddit}.json`
            );
            const json = await response.json();
            setPosts(json.data.children.map(it => it.data));
        } catch (e) {
            console.error(e);
        }
    };
    fetchData();
}, []);
второе решение упростит чтение и поможет вам написать код для отмены предыдущих запросов, если запущен новый, или сохранить последний ответ на запрос в состоянии

Рабочие коды

 16.11.2018 07:11
 Ответ принят как подходящий
Предлагаю посмотреть Дэн Абрамов (один из разработчиков ядра React) отвечает здесь:

I think you're making it more complicated than it needs to be.

function Example() {
  const [data, dataSet] = useState<any>(null)

  useEffect(() => {
    async function fetchMyAPI() {
      let response = await fetch('api/data')
      response = await response.json()
      dataSet(response)
    }

    fetchMyAPI()
  }, [])

  return <div>{JSON.stringify(data)}</div>
}
Longer term we'll discourage this pattern because it encourages race conditions. Such as — anything could happen between your call starts and ends, and you could have gotten new props. Instead, we'll recommend Suspense for data fetching which will look more like

const response = MyAPIResource.read();
and no effects. But in the meantime you can move the async stuff to a separate function and call it.

Вы можете узнать больше о экспериментальное ожидание здесь.

Если вы хотите использовать внешние функции с eslint.

 function OutsideUsageExample({ userId }) {
  const [data, dataSet] = useState<any>(null)

  const fetchMyAPI = useCallback(async () => {
    let response = await fetch('api/data/' + userId)
    response = await response.json()
    dataSet(response)
  }, [userId]) // if userId changes, useEffect will run again
               // if you want to run only once, just leave array empty []

  useEffect(() => {
    fetchMyAPI()
  }, [fetchMyAPI])

  return (
    <div>
      <div>data: {JSON.stringify(data)}</div>
      <div>
        <button onClick = {fetchMyAPI}>manual fetch</button>
      </div>
    </div>
  )
}
Если вы будете использовать useCallback, посмотрите, как это работает useCallback. Песочница.

import React, { useState, useEffect, useCallback } from "react";

export default function App() {
  const [counter, setCounter] = useState(1);

  // if counter is changed, than fn will be updated with new counter value
  const fn = useCallback(() => {
    setCounter(counter + 1);
  }, [counter]);

  // if counter is changed, than fn will not be updated and counter will be always 1 inside fn
  /*const fnBad = useCallback(() => {
      setCounter(counter + 1);
    }, []);*/

  // if fn or counter is changed, than useEffect will rerun
  useEffect(() => {
    if (!(counter % 2)) return; // this will stop the loop if counter is not even

    fn();
  }, [fn, counter]);

  // this will be infinite loop because fn is always changing with new counter value
  /*useEffect(() => {
    fn();
  }, [fn]);*/

  return (
    <div>
      <div>Counter is {counter}</div>
      <button onClick = {fn}>add +1 count</button>
    </div>
  );
}
 01.12.2018 17:02
Пока React не предоставит лучший способ, вы можете создать помощник useEffectAsync.js:

import { useEffect } from 'react';


export default function useEffectAsync(effect, inputs) {
    useEffect(() => {
        effect();
    }, inputs);
}
Теперь вы можете передать асинхронную функцию:

useEffectAsync(async () => {
    const items = await fetchSomeItems();
    console.info(items);
}, []);
Обновлять

Если вы выберете такой подход, обратите внимание, что это дурной тон. Я прибегаю к этому, когда знаю, что это безопасно, но это всегда дурной тон и случайность.

Приостановка получения данных, который все еще является экспериментальным, решит некоторые из случаев.

В других случаях вы можете моделировать асинхронные результаты как события, чтобы вы могли добавлять или удалять слушателя в зависимости от жизненного цикла компонента.

Или вы можете смоделировать асинхронные результаты как Наблюдаемый, чтобы вы могли подписываться и отказываться от подписки в зависимости от жизненного цикла компонента.

 11.02.2019 20:27
Я прочитал этот вопрос и считаю, что лучший способ реализовать useEffect не упоминается в ответах. Допустим, у вас есть сетевой вызов, и вы хотите что-то сделать, когда получите ответ. Для простоты сохраним ответ сети в переменной состояния. Кто-то может захотеть использовать действие / редуктор для обновления магазина с помощью сетевого ответа.

const [data, setData] = useState(null);

/* This would be called on initial page load */
useEffect(()=>{
    fetch(`https://www.reddit.com/r/${subreddit}.json`)
    .then(data => {
        setData(data);
    })
    .catch(err => {
        /* perform error handling if desired */
    });
}, [])

/* This would be called when store/state data is updated */
useEffect(()=>{
    if (data) {
        setPosts(data.children.map(it => {
            /* do what you want */
        }));
    }
}, [data]);
Ссылка => https://reactjs.org/docs/hooks-effect.html#tip-optimizing-performance-by-skipping-effects

 26.08.2019 05:53
пытаться

const MyFunctionnalComponent: React.FC = props => {
  useEffect(() => {
    // Using an IIFE
    (async function anyNameFunction() {
      await loadContent();
    })();
  }, []);
  return <div></div>;
};
 04.12.2019 09:34
Для других читателей ошибка может возникать из-за отсутствия скобок, заключающих асинхронную функцию:

Учитывая асинхронную функцию initData

  async function initData() {
  }
Этот код приведет к вашей ошибке:

  useEffect(() => initData(), []);
Но этот не будет:

  useEffect(() => { initData(); }, []);
(Обратите внимание на скобки вокруг initData ()

 30.01.2020 16:39
Здесь можно использовать недействительный оператор. Вместо:

React.useEffect(() => {
    async function fetchData() {
    }
    fetchData();
}, []);
или

React.useEffect(() => {
    (async function fetchData() {
    })()
}, []);
можно было написать:

React.useEffect(() => {
    void async function fetchData() {
    }();
}, []);
Он немного чище и красивее.

Асинхронные эффекты могут вызвать утечку памяти, поэтому важно выполнить очистку при отключении компонента. В случае выборки это могло бы выглядеть так:

function App() {
    const [ data, setData ] = React.useState([]);

    React.useEffect(() => {
        const abortController = new AbortController();
        void async function fetchData() {
            try {
                const url = 'https://jsonplaceholder.typicode.com/todos/1';
                const response = await fetch(url, { signal: abortController.signal });
                setData(await response.json());
            } catch (error) {
                console.info('error', error);
            }
        }();
        return () => {
            abortController.abort(); // cancel pending fetch request on component unmount
        };
    }, []);

    return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
 24.05.2020 02:16
Пожалуйста, попробуйте это

 useEffect(() => {
        (async () => {
          const products = await api.index()
          setFilteredProducts(products)
          setProducts(products)
        })()
      }, [])
 31.01.2021 11:05
Для выборки из внешнего API с использованием React Hooks вы должны вызвать функцию, которая извлекает из API внутри ловушки useEffect.

Нравится:

async function fetchData() {
    const res = await fetch("https://swapi.co/api/planets/4/");
    res
      .json()
      .then(res => setPosts(res))
      .catch(err => setErrors(err));
  }

useEffect(() => {
    fetchData();
}, []);
Я настоятельно рекомендую вам не определять свой запрос внутри ловушки useEffect, потому что он будет повторно визуализироваться бесконечное количество раз. И поскольку вы не можете сделать useEffect асинхронным, вы можете сделать функцию внутри него асинхронной.

В показанном выше примере вызов API находится в другом разделенная асинхронная функция, поэтому он гарантирует, что вызов является асинхронным и выполняется только один раз. Кроме того, массив зависимостей useEffect's ([]) пуст, что означает, что он будет вести себя так же, как componentDidMount из компонентов класса React, он будет выполняться только один раз при монтировании компонента.

Для текста загрузки вы можете использовать условный рендеринг React, чтобы проверить, являются ли ваши сообщения нулевыми, если они есть, отобразить текст загрузки, иначе отобразить сообщения. Else будет истинным, когда вы завершите выборку данных из API и сообщения не будут нулевыми.

{posts === null ? <p> Loading... </p> 
: posts.map((post) => (
    <Link key = {post._id} to = {`/blog/${post.slug.current}`}>
      <img src = {post.mainImage.asset.url} alt = {post.mainImage.alt} />
      <h2>{post.title}</h2>
   </Link>
))}
Я вижу, что вы уже используете условный рендеринг, поэтому я рекомендую вам углубиться в него, особенно для проверки, является ли объект нулевым или нет!

Я рекомендую вам прочитать следующие статьи, если вам нужна дополнительная информация об использовании API с помощью хуков.

https://betterprogramming.pub/how-to-fetch-data-from-an-api-with-react-hooks-9e7202b8afcd

https://reactjs.org/docs/conditional-rendering.html

 09.03.2021 01:40
С хуком useAsyncEffect, предоставляемым настраиваемым библиотека, безопасное выполнение асинхронного кода и выполнение запросов внутри эффектов становится тривиальным делом, поскольку он делает ваш код автоматически отменяемым (это только одна вещь из списка функций). Проверьте Живая демонстрация с загрузкой JSON

import React from "react";
import { useAsyncEffect } from "use-async-effect2";
import cpFetch from "cp-fetch";

/*
 Notice: the related network request will also be aborted
 Checkout your network console
 */

function TestComponent(props) {
  const [cancel, done, result, err] = useAsyncEffect(
    function* () {
      const response = yield cpFetch(props.url).timeout(props.timeout);
      return yield response.json();
    },
    { states: true, deps: [props.url] }
  );

  return (
    <div className = "component">
      <div className = "caption">useAsyncEffect demo:</div>
      <div>
        {done ? (err ? err.toString() : JSON.stringify(result)) : "loading..."}
      </div>
      <button className = "btn btn-warning" onClick = {cancel} disabled = {done}>
        Cancel async effect
      </button>
    </div>
  );
}

export default TestComponent;
Та же демонстрация с использованием axios

 08.05.2021 18:58
Оберните его в useCallback и используйте как зависимость от ловушки useEffect.

const getPosts = useCallback(async () => {
    try {
        const response = await fetch(`https://www.reddit.com/r/${subreddit}.json`);
        const json = await response.json();
        setPosts(json.data.children.map(it => it.data));
    } catch (e) {
        console.error(e);
    }
}, []);

useEffect(async () => {
    getPosts();
}, [getPosts]);
 08.06.2021 23:30
Вы также можете использовать формат IIFE, чтобы не усложнять

function Example() {
    const [data, dataSet] = useState<any>(null)

    useEffect(() => {
        (async () => {
            let response = await fetch('api/data')
            response = await response.json()
            dataSet(response);
        })();
    }, [])

    return <div>{JSON.stringify(data)}</div>
}
 20.06.2021 04:22
Просто заметка о том, КАК УДИВИТЕЛЬНО язык purescript решает эту проблему устаревших эффектов с монадой Aff.

БЕЗ ЧИСТОГО СКРИПТА
вам нужно использовать AbortController

function App() {
    const [ data, setData ] = React.useState([]);

    React.useEffect(() => {
        const abortController = new AbortController();
        void async function fetchData() {
            try {
                const url = 'https://jsonplaceholder.typicode.com/todos/1';
                const response = await fetch(url, { signal: abortController.signal });
                setData(await response.json());
            } catch (error) {
                console.info('error', error);
            }
        }();
        return () => {
            abortController.abort(); // cancel pending fetch request on component unmount
        };
    }, []);

    return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
или stale (из примера NoahZinsmeister / web3-react)

function Balance() {
  const { account, library, chainId } = useWeb3React()

  const [balance, setBalance] = React.useState()
  React.useEffect((): any => {
    if (!!account && !!library) {      
      let stale = false
      
      library 
        .getBalance(account)
        .then((balance: any) => {
          if (!stale) {
            setBalance(balance)
          }
        })
        .catch(() => {
          if (!stale) {
            setBalance(null)
          }
        })

      return () => { // NOTE: will be called every time deps changes
        stale = true
        setBalance(undefined)
      }
    }
  }, [account, library, chainId]) // ensures refresh if referential identity of library doesn't change across chainIds

  ...
С PURESCRIPT
проверь как useAff убивает свой Aff в функции cleanup

Aff реализован как состояние машины (без обещаний)

но для нас важно то, что:

Aff кодирует, как остановить Aff - Здесь вы можете поместить свой AbortController
он ОСТАНОВИТ запуск Effect (не тестировался) и Aff (он не будет запускать then из второго примера, поэтому НЕ будет setBalance(balance)) ЕСЛИ ошибка была брошен НА волокно ИЛИ ВНУТРИ волокна
 18.09.2021 15:30
В таком случае лучше всего использовать КСВ.

Базовый пример:

import useSWR from 'swr'

function Profile() {
  const { data, error } = useSWR('/api/user', fetcher)

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
  return <div>hello {data.name}!</div>
}
В этом примере ловушка useSWR принимает ключевую строку и функцию извлечения. key - это уникальный идентификатор данных (обычно URL-адрес API), который передается в fetcher. fetcherможет быть любой асинхронной функцией, который возвращает данные, вы можете использовать встроенную выборку или такие инструменты, как Axios.

Итак, сборщик может быть определен с помощью всего:

import fetch from 'unfetch'
const fetcher = url => fetch(url).then(r => r.json())
Хук возвращает 2 значения: данные и ошибку, в зависимости от статуса запроса.

Таким образом, вы также получаете там обработку ошибок и множество других интересных функций, таких как Автоматическая повторная проверка.

Источник: Реагировать на ловушки для извлечения данных

 22.10.2021 12:28
Не обращайте внимания на предупреждение и используйте ловушку useEffect с async function следующим образом:

import { useEffect, useState } from "react";

function MyComponent({ objId }) {
  const [data, setData] = useState();

  useEffect(() => {
    if (objId === null || objId === undefined) {
      return;
    }

    async function retrieveObjectData() {
      const response = await fetch(`path/to/api/objects/${objId}/`);
      const jsonData = response.json();
      setData(jsonData);
    }
    retrieveObjectData();

  }, [objId]);

  if (objId === null || objId === undefined) {
    return (<span>Object ID needs to be set</span>);
  }

  if (data) {
    return (<span>Object ID is {objId}, data is {data}</span>);
  }

  return (<span>Loading...</span>);
}
 18.11.2021 06:34
Другие вопросы по теме
В чем смысл наблюдателей в redux-saga?
Как передать вращающуюся полосу другому компоненту в ReactJS
Показывать только один тостер, если в реакции есть ошибка
Проблема с кодом React в jsfiddle. выручи меня
Как предотвратить дублирование реквизита внутри рендера
Express-typescript-response: отправить ответ json после отправки представления из того же запроса
Как использовать модули css (реагировать семантический интерфейс) в приложении для создания реагирования?
Совместное использование API ответа на результат без состояния и вне then ()
Выделите несколько выбранных значений в опции с помощью ReactJS
CSS позиционирование элементов в заголовке
Похожие вопросы
Angularjs href в контроллере
Ошибка: как заставить js-переменную daterangepicker отображать эхо в php-файле PHP JAVASCRIPT
Нет функции org-babel-execute для javascript в emacs org-babel
Внешняя переменная .js возвращается undefined?
Как создать круговую полосу, используя значения радиальной оси в диаграмме точечной полярности, используя Plotly
Показывать только один тостер, если в реакции есть ошибка
Использование javascript для получения каждого второго воскресенья, соответствующего определенной неделе
Разбор числа с запятыми с помощью регулярного выражения Javascript
Глобальный прослушиватель клавиатуры и мыши в Chrome OS
Как использовать вставку с заменой в JavaScript с помощью Regex
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
