https://www.frontendinterviewhandbook.com/ru/javascript-questions
https://github.com/h5bp/Front-end-Developer-Interview-Questions

Что спрашивают
И вот, наконец, что конкретно спрашивают. Вопросы брались из памяти, по этому, в некоторых пунктах сохранилась формулировка авторов, а в некоторых только суть вопроса.

Вопросы по Теории:

Пирамида тестирования. В том числе как она может меняться, почему, и хорошо это или плохо

Техники тест-дизайна. Часто просят вспомнить какие техники ты используешь на практике, привести примеры. Либо просят на конкретном примере рассказать какие техники применишь для какого кейса (ниже приведу пример)

Признаки (характеристики) качественного продукта

Как измерить качество / метрики качества

Каким критериям должно соответствовать приложение на тесте / условия "тестируемости"

Agile общий

Agile тестирование

Функциональное и не функциональное тестирование какие подвиды в каждом

Penetration тестирование

Автоматизация: какие виды тестов и кто реализует, на каком этапе тестирования используются, как запустить процесс автоматизации, какие сценарии можно не автоматизировать

Кейсы тестирования:

Есть форма с полями. Придумать тест-кейсы с обозначением какую технику тест дизайна используешь в каждом из кейсов. Пример полей:

Имя (с ограничением по количеству символов)

Специальность врача (дропдаун)

Имя врача (дропдаун зависит от специальности)

дата (виджет)

время (виджет)

кнопка отправить

Есть какой-то http запрос рассказать из чего состоит и придумать тест-кейсы

Вы пришли на проект в котором 500+ ручных тесткейсов - что будете делать, какой план

Что делать если нет требований к задаче

Какие нефункциональные тесты можно применить к какому-то веб запросу

Общие технические вопросы:

GIT - чем отличается git pull от git fetch и другие команды гита

tcp / upd чем отличаются протоколы

из чего состоит http запрос

в чем отличие http от https и в каких случаях можно использовать http и почему

что такое двух- и трех- уровневая архитектура, толстый и тонкий клиент.

сохранили какую-то формочку - что происходит с запросом дальше

приходит в девтулзах json как он отрисовывается на фронте

приходит html в запросе с уже сформированной инфой - где он обработался и сформировался

nginx что и для чего

как приложение понимает к какому серверу запрос если там передается красивый хост а не ip сервера

идемпотентность http-методов

Python + Pytest:

декораторы

фикстуры

контекст менеджеры

магические функции (для чего нужен init в классе, enter и exit в менеджерах контекста)

хуки

отличие == от is

что вернет print(True + 4)

итерируемые объекты

a=3 - какой тип данных?

изменяемые и не изменяемые типы данных

написать класс (с какими-то методами), а потом еще один который от него наследуется

есть 2 слова. Написать функцию которая будет принимать эти 2 слова и проверять можно ли составить второе слово из первого

написать проверки валидации пароля

написать функцию для определения счастливого билета

часто дают задачи с уже написанным кодом который содержит ошибку которую вам нужно исправить. Конкретные примеры я привести не могу, но как правило это задачи на знания особенностей разных типов данных, циклов, классов

написать функцию которая принимает на вход слово, длину и высоту и выводит слово всегда в центре, согласно референсу:

    ##############
    #            #
    #    test    #
    #            #
    ##############
SQL:

написать простой селект с использованием LIKE

селект с джойном

селект с агрегатной функцией

как сделать селект из 2-х таблиц без джойна

как очистить данные таблицы

как удалить/создать таблицу

как удалить/создать бд

что такое транзакции

что такое первичный ключ

может ли быть составной первичный ключ

что такое внешний ключ

View в БД и их отличия от таблиц

Оператор UNION и ограничения на его использование

Linux терминал:

как найти строку в документе

с помощью какой утилиты можно подключиться к удаленному Linux серверу и как оттуда скопировать файл на локальную машину
https://www.pvsm.ru/sobesedovanie-voprosy/409923


С какими вопросами и задачами столкнулся на собеседованиях
Что касается самих заданий: тут их огромное множество. Бывает, просто устно опрашивают на понимание базовых принципов:

семантика HTML5;
что такое DOM;
как работает ключевое слово this (частый вопрос);
что такое замыкание (частый вопрос);
вопросы по Bootstrap 4 (по адаптивной верстке в целом);
перечислить все известные способы, как можно отцентрировать div на экране (позиционирование);
всегда спрашивают про какие-либо фреймворки (React Vue Angular);
вопросы о БЭМ;
что такое нотация «О большое» (алгоритмическая сложность кода);
общие вопросы про препроцессоры (Less/Sass).
По практике: она выполняется либо на листочке, либо предоставляют компьютер, либо дают задание домой. На листочке просят:

сверстать какой-то макет нарисованный;
в виде теста (выбери правильный ответ);
разные задачи.Мне попадалась задача «палиндром» – сделал рекурсией благодаря Хекслету, до этого рекурсию не понимал совсем;
Задачи на компьютере:

парсинг страницы интернет магазина: надо вытащить все артикулы товаров;
попадались задачи на создание объекта по заданному массиву:
дают задачи с написанным кодом (написать результат на выходе из функции).
Домашняя работа (присылают задание на почту): там опять же верстка, или надо написать какие-то функции. Заданий было очень много, задают разные вопросы. Частенько по базам данных, по особенностям запросов на сервер и прочее. Выше писал, что стек технологий, которыми должен владеть frontend-программист, очень сильно отличается от компании к компании.



Темы, которые нужно знать
Базовый уровень (школьный этап ВОШ):

Переменные, условия, циклы, функции
Массивы и строки
Сортировка (пузырьковая, быстрая, sorted в Python)
Поиск (бинарный поиск)
Базовая математика: делимость, простые числа, НОД/НОК
Продвинутый уровень (региональный/финал ВОШ):

Динамическое программирование
Графы (BFS, DFS, Дейкстра)
Жадные алгоритмы
Стеки, очереди, деревья
Теория чисел, комбинаторика


Где тренироваться
Codeforces — главная платформа для тренировок. Рейтинговые контесты каждую неделю
Acmp.ru — архив задач российских олимпиад с объяснениями
Informatics.msk.ru — платформа для школьников, задачи ВОШ
LeetCode — задачи уровня собеседований в компании (больше для старших)
Яндекс.Контест — задачи и контесты от Яндекса

Full Stack Developer (MEAN) Interview Preparation (Step-by-Step Guide with Tips and Examples)
Rishabh Jain
Rishabh Jain
Updated Jun 15, 2026
5 min read
Full Stack Developer (MEAN) Interview Preparation (Step-by-Step Guide with Tips and Examples)
Feeling overwhelmed by the complexities of the MEAN stack? You’re not alone. A clear roadmap focusing on MongoDB, Express.js, Angular, and Node.js will help you confidently navigate your interview prep.

Overcoming Common Interview Prep Pain Points
Frontend with Angular: Understanding components, services, dependency injection, and RxJS.

Backend with Node.js & Express: Developing RESTful APIs, middleware, and security measures.

Databases & MongoDB: Schema design, querying, and performance optimization.

Full-Stack Integration: Connecting Angular with Node.js and MongoDB effectively.

System Design & Deployment: Building scalable apps and deploying them on cloud platforms.

Your 4-Week Preparation Roadmap
A structured plan for mastering the MEAN stack in 4 weeks.

Week 1: Strengthen JavaScript & Angular Basics
Focus: Reinforce JavaScript fundamentals and dive into Angular essentials.

Daily Goals:

Day 1: Review JavaScript fundamentals (ES6+ features, closures, promises, async/await).

Day 2: Learn Angular components, templates, and data binding.

Day 3: Work with Angular directives, pipes, and services.

Day 4: Understand Angular dependency injection and lifecycle hooks.

Day 5: Learn Angular forms (template-driven and reactive).

Day 6: Explore Angular routing and navigation.

Day 7: Practice coding challenges using Angular.

Tip: Be prepared to explain Angular’s architecture and lifecycle in depth.

Week 2: Backend Development with Node.js & Express
Focus: Learn backend fundamentals and API development with Express.

Daily Goals:

Day 1: Set up a Node.js environment and learn Express basics.

Day 2: Build RESTful APIs with Express and handle routing.

Day 3: Implement JWT authentication and authorization.

Day 4: Work with Express middleware and error handling.

Day 5: Integrate Express with MongoDB using Mongoose.

Day 6: Learn about validation and input sanitization.

Day 7: Develop a small backend application with Express.

Tip: Practice error handling and middleware design in Express to optimize backend performance.

Week 3: Master MongoDB & Full-Stack Integration
Focus: Work with MongoDB and integrate the full stack (Angular + Node.js).

Daily Goals:

Day 1: Learn MongoDB CRUD operations, schemas, and indexes.

Day 2: Design efficient MongoDB data models and optimize queries.

Day 3: Integrate MongoDB with your Express backend using Mongoose.

Day 4: Connect Angular with Express backend using HTTP requests.

Day 5: Implement state management in Angular using services and RxJS.

Day 6: Deploy a simple MEAN stack application.

Day 7: Practice debugging and optimizing full-stack applications.

Tip: Focus on handling asynchronous requests in both Angular and Node.js effectively.

Week 4: System Design & Mock Interviews
Focus: Study system design principles and participate in mock interviews.

Daily Goals:

Day 1: Understand basic system design principles (scalability, redundancy, and fault tolerance).

Day 2: Study caching (Redis) and its application in full-stack systems.

Day 3: Learn about microservices architecture and API gateways.

Day 4: Practice designing scalable systems (e.g., e-commerce, social media app).

Day 5: Conduct a mock technical interview focusing on MEAN stack topics.

Day 6: Work on refining behavioral interview answers using the STAR method.

Day 7: Review and finalize your portfolio or personal project for the interview.

Tip: Be ready to discuss how to optimize and scale a MEAN stack app to handle large-scale traffic.

Bringing It All Together
By following this roadmap, you’ll build a solid foundation in the MEAN stack and be fully prepared for your Full Stack MEAN Developer interview.

Master Angular & TypeScript: Build dynamic, efficient front-end applications.

Develop Secure & Scalable APIs: Implement Express and Node.js with MongoDB integration.

Deploy Full-Stack Applications: Learn about cloud deployment and scaling strategies.

Start your journey today and confidently navigate your MEAN stack interview!


<li><span style="font-family: Arial, Helvetica, sans-serif;">Как переадресовать страницу в JavaScript?</span></li>
<li><span style="font-family: Arial, Helvetica, sans-serif;">Сколько параметров можно передать функции?</span></li>
<li><span style="font-family: Arial, Helvetica, sans-serif;">Нужно алертом вывести какое-то сообщение, спустя 3 секунды после запуска скрипта. Как это сделать?</span></li>
<li><span style="font-family: Arial, Helvetica, sans-serif;">Чем отличается наследование в JavaScript от наследования в PHP?</span></li>
<li><span style="font-family: Arial, Helvetica, sans-serif;">Приведи пример наследования в JavaScript.</span></li>
<li><span style="font-family: Arial, Helvetica, sans-serif;">Пара слов об объектах в JavaScript?</span></li>
<li><span style="font-family: Arial, Helvetica, sans-serif;">Что представляет из себя метод объекта в JavaScript?</span></li>
<li><span style="font-family: Arial, Helvetica, sans-serif;">Зачем в JavaScript перед переменной писать var?<a name="more"></a></span></li>
<li><span style="font-family: Arial, Helvetica, sans-serif;">Есть две функции: function f(a,b) { return a+b } и var f = function(a,b) { return a+b } Есть ли между ними разница? Если есть то какая?</span></li>
<li><span style="font-family: Arial, Helvetica, sans-serif;">Как создать массив в JavaScript?</span></li>
<li><span style="font-family: Arial, Helvetica, sans-serif;">Можно ли в JavaScript использовать функцию в качестве конструктора?</span></li>
<li><span style="font-family: Arial, Helvetica, sans-serif;">Сколько и какие конструкции для циклов есть в JavaScript?</span></li>
<li><span style="font-family: Arial, Helvetica, sans-serif;">Что cделает код: break me_baby; ?</span></li>
<li><span style="font-family: Arial, Helvetica, sans-serif;">Можно ли задать массив таким образом: var a = &#8220;a,b&#8221;.split(&#8216;,&#8217;)?</span></li>
<li><span style="font-family: Arial, Helvetica, sans-serif;">Что выведет alert(typeof null); ?</span></li>
<li><span style="font-family: Arial, Helvetica, sans-serif;">Что выведет alert(null instanceof Object); ?</span></li>
<li><span style="font-family: Arial, Helvetica, sans-serif;">0.1+ 0.2 == 0.3 ?</span></li>
<li><span style="font-family: Arial, Helvetica, sans-serif;">Что выведет alert(typeof NaN); ?</span></li>
<li><span style="font-family: Arial, Helvetica, sans-serif;">Что выведет alert(NaN === NaN); ?</span></li>
<li><span style="font-family: Arial, Helvetica, sans-serif;">В чём различие свойств innerHTML и outerHTML?</span></li>
<li><span style="font-family: Arial, Helvetica, sans-serif;">Какая разница между операторами == и ===?</span></li>
<li><span style="font-family: Arial, Helvetica, sans-serif;">В чем разница между Object.getOwnPropertyNames() и Object.keys()?</span></li>
<li><span style="font-family: Arial, Helvetica, sans-serif;">С помощью какой конструкции языка можно управлять потоком выполнения скрипта и отслеживать ошибки?</span></li>
<li><span style="font-family: Arial, Helvetica, sans-serif;">Почему вызов a(); происходит успешно, а вызов b(); выдает ошибку?</span></li>
<li><span style="font-family: Arial, Helvetica, sans-serif;">Что такое глобальные переменные ? Как они создаются ? Какие проблемы связаны с использованием глобальных переменных?</span></li>
<li><span style="font-family: Arial, Helvetica, sans-serif;">Что такое замыкания (closure) в JavaScript?</span></li>
<li><span style="font-family: Arial, Helvetica, sans-serif;">Напишите функцию принимающую строку с именем файла и возвращающую расширение (фрагмент после последней точки).</span></li>
<li><span style="font-family: Arial, Helvetica, sans-serif;">Что вернет выражение +new Date()? Чем отличается от Date.now().</span></li>
<li><span style="font-family: Arial, Helvetica, sans-serif;">Какое значение возвращает данное предложение ~~3.14?</span></li>
<li><span style="font-family: Arial, Helvetica, sans-serif;">Какое значение возвращает данное предложение?</span></li>
<li><span style="font-family: Arial, Helvetica, sans-serif;">Что покажут эти два alert?</span></li>
<li><span style="font-family: Arial, Helvetica, sans-serif;">Чему равно foo.length?</span></li>
<li><span style="font-family: Arial, Helvetica, sans-serif;">Что такое prototype в javascript?</span></li>
<li><span style="font-family: Arial, Helvetica, sans-serif;">Какие способы навешивания обработчиков событий вы знаете?</span></li>
<li><span style="font-family: Arial, Helvetica, sans-serif;">Eсть ли разница между window и document?</span></li>
<li><span style="font-family: Arial, Helvetica, sans-serif;">Вызываются ли document.onload и window.onload одновременно?</span></li>
<li><span style="font-family: Arial, Helvetica, sans-serif;">Является ли атрибут (attribute) аналогом свойства (property)?</span></li>
<li><span style="font-family: Arial, Helvetica, sans-serif;">Как остановить дальнейшее распространение события?</span></li>
<li><span style="font-family: Arial, Helvetica, sans-serif;">Назовите различные пути для получения элемента из DOM дерева?</span></li>
<li><span style="font-family: Arial, Helvetica, sans-serif;">Какой наибыстрейший метод для получения элемента через css селектор?</span></li>
<li><span style="font-family: Arial, Helvetica, sans-serif;">Могу ли я удалить удалить обработчик события с элемента?</span></li>
<li><span style="font-family: Arial, Helvetica, sans-serif;">Почему querySelectorAll(&#8216;.my-class&#8217;) медленнее, чем getElementsByClassName(&#8216;my-class&#8217;)?</span></li>
<li><span style="font-family: Arial, Helvetica, sans-serif;">Почему я не могу использовать forEach или похожий метод массива для NodeList?</span></li>
<li><span style="font-family: Arial, Helvetica, sans-serif;">Если вам необходимо реализовать getElementByAttribute, как вы будете это делать?</span></li>
<li><span style="font-family: Arial, Helvetica, sans-serif;">Как бы вы добавили класс к элементу через селектор?</span></li>
<li><span style="font-family: Arial, Helvetica, sans-serif;">Как я могу запустить обработчик в фазе захвата, а не в фазе всплытия?</span></li>
<li><span style="font-family: Arial, Helvetica, sans-serif;">Как проверить, что один элемент является дочерним другому?</span></li>
<li><span style="font-family: Arial, Helvetica, sans-serif;">Какой метод больше всего подходит для создания DOM элемента? Что лучше innerHTML или createElement?</span></li>
<li><span style="font-family: Arial, Helvetica, sans-serif;">Каким образом можно предотвратить множественный вызов обработчика для одного события?</span></li>
<li><span style="font-family: Arial, Helvetica, sans-serif;">Что делает createDocumentFragment и для чего можно его использовать?</span></li>
<li><span style="font-family: Arial, Helvetica, sans-serif;">Что такое reflow?</span></li>
<li><span style="font-family: Arial, Helvetica, sans-serif;">Как я могу проверить были событие отменено или нет?</span></li>
<li><span style="font-family: Arial, Helvetica, sans-serif;">Какие причины reflow? Как можно уменьшить reflow?</span></li>
<li><span style="font-family: Arial, Helvetica, sans-serif;">Что такое repaint и когда оно происходит?</span></li>
<li><span style="font-family: Arial, Helvetica, sans-serif;">Есть ли что-то такое о чём нужно позаботится при использовании node.cloneNode()?</span></li>
<li><span style="font-family: Arial, Helvetica, sans-serif;">Как быть уверенным в том, что DOM подготовлен и можно выполнять JavaScript, как реализовать $(document).ready?</span></li>
<li><span style="font-family: Arial, Helvetica, sans-serif;">Что такое всплытие?</span></li>
<li><span style="font-family: Arial, Helvetica, sans-serif;">Как можно уничтожить несколько элементов с одним вызовом click?</span></li>
<li><span style="font-family: Arial, Helvetica, sans-serif;">Как предотвратить нажатие по ссылке?</span></li>
<li><span style="font-family: Arial, Helvetica, sans-serif;">Создайте кнопку, которая удаляется при нажатии на неё, и создаются две новые кнопки в этом же месте.</span></li>
<li><span style="font-family: Arial, Helvetica, sans-serif;">Как отлавливать все нажатия на странице?</span></li>
<li><span style="font-family: Arial, Helvetica, sans-serif;">Как получить весь текст на странице?</span></li>
<li><span style="font-family: Arial, Helvetica, sans-serif;">Что такое defer и async?</span></li>
<li><span style="font-family: Arial, Helvetica, sans-serif;">Какие существуют типы нод?</span></li>
</ul>
<h3>
<a href="http://jsehelper.blogspot.com/2016/01/javascript.html" style="font-family: arial, helvetica, sans-serif;"><span style="font-family: Arial, Helvetica, sans-serif;">Перейти к ответам &#9658;&#9658;</span></a></h3>
<div>
<span style="font-family: Arial, Helvetica, sans-serif;"><br /></span></div>
<h4 style="text-align: left;">
<a href="http://jsehelper.blogspot.com/2016/01/angularjs.html" style="text-align: justify;"><span style="font-family: Arial, Helvetica, sans-serif;">AngularJS.</span></a></h4>
<div style="text-align: left;">
</div>
<ul style="text-align: left;">
<li><span style="font-family: Arial, Helvetica, sans-serif; text-align: justify;">Что такое AngularJS?</span></li>
<li><span style="font-family: Arial, Helvetica, sans-serif; text-align: justify;">Какие преимущества использования AngularJS?</span></li>
<li><span style="font-family: Arial, Helvetica, sans-serif; text-align: justify;">Какие основные компоненти AngularJS ви знаете?</span></li>
<li><span style="font-family: Arial, Helvetica, sans-serif; text-align: justify;">Что такое AngularJS выражения? Отличие выражений AngularJS от выражений в JS.</span></li>
<li><span style="font-family: Arial, Helvetica, sans-serif; text-align: justify;">Что такое scope в AngularJS?</span></li>
<li><span style="font-family: Arial, Helvetica, sans-serif; text-align: justify;">Что такое rootScope в AngularJS?</span></li>
<li><span style="font-family: Arial, Helvetica, sans-serif; text-align: justify;">Что такое директива (directive) в AngularJS? Назовите несколько основных директив.</span></li>
<li><span style="font-family: Arial, Helvetica, sans-serif; text-align: justify;">Какие есть типы использования директив в AngularJS?</span></li>
<li><span style="font-family: Arial, Helvetica, sans-serif; text-align: justify;">Что такое Сервис (service), в AngularJS?</span></li>
<li><span style="font-family: Arial, Helvetica, sans-serif; text-align: justify;">Что такое &nbsp;модуль (module) &nbsp;в AngularJS?</span></li>
<li><span style="font-family: Arial, Helvetica, sans-serif; text-align: justify;">Что такое &nbsp;фильтр (filter) &nbsp;в Angular?</span></li>
<li><span style="font-family: Arial, Helvetica, sans-serif; text-align: justify;">Что такое контролер (controller) &nbsp;в Angular?</span></li>
<li><span style="font-family: Arial, Helvetica, sans-serif; text-align: justify;">Что катое провайдер (provider) в AngularJS?</span></li>
<li><span style="font-family: Arial, Helvetica, sans-serif; text-align: justify;">Что катое &nbsp; шаблон в AngularJS?</span></li>
<li><span style="font-family: Arial, Helvetica, sans-serif; text-align: justify;">Что такое &nbsp;ижектор (injector) &nbsp;в AngularJS?</span></li>
<li><span style="font-family: Arial, Helvetica, sans-serif; text-align: justify;">Что такое &nbsp;Внедрение зависимости (Dependency Injection) &nbsp;в AngularJS?</span></li>
<li><span style="font-family: Arial, Helvetica, sans-serif; text-align: justify;">Для чего нужен сервис $ location?</span></li>
<li><span style="font-family: Arial, Helvetica, sans-serif; text-align: justify;">Какие CSS классы предоставляються для оформления форм?</span></li>
<li><span style="font-family: Arial, Helvetica, sans-serif; text-align: justify;">Что такое Компилятор, на какие фазы делятся фазы компиляции angular приложения.</span></li>
<li><span style="font-family: Arial, Helvetica, sans-serif; text-align: justify;">Опишите MVC компоненты в контексте Angular?</span></li>
<li><span style="font-family: Arial, Helvetica, sans-serif; text-align: justify;">Опишите директиву ng-app?</span></li>
<li><span style="font-family: Arial, Helvetica, sans-serif; text-align: justify;">Опишите директиву ng-model?</span></li>
<li><span style="font-family: Arial, Helvetica, sans-serif; text-align: justify;">Опишите директиву ng-bind?</span></li>
<li><span style="font-family: Arial, Helvetica, sans-serif; text-align: justify;">Опишите директиву ng-controller?</span></li>
<li><span style="font-family: Arial, Helvetica, sans-serif; text-align: justify;">Опишите директиву ng-init?</span></li>
<li><span style="font-family: Arial, Helvetica, sans-serif; text-align: justify;">Опишите директиву &nbsp;ng-repeat?</span></li>
</ul>
<h3 style="text-align: left;">
<a href="http://jsehelper.blogspot.com/2016/01/angularjs.html" style="text-align: justify;"><span style="font-family: Arial, Helvetica, sans-serif;">Перейти к ответам &#9658;&#9658;</span></a></h3>
<div>
<span style="font-family: Arial, Helvetica, sans-serif;"><br /></span></div>
<h3 style="text-align: justify;">
<span style="font-family: Arial, Helvetica, sans-serif;"><a href="http://jsehelper.blogspot.com/2016/04/jquery-1.html">JQuery.</a></span></h3>
<div>
<ul style="text-align: justify;">
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Что такое jQuery?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Какие преимущества jQuery?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Чем отличаются JavaScript от jQuery?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">jQuery это библиотека для написания сценариев на стороне клиента или на стороне сервера?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Является ли jQuery стандартом W3C?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Как начать работать с jQuery?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Что является отправной точкой начала выполнения кода в JQuery?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Что означает знак доллара ($) в JQuery?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Можем ли мы иметь несколько функций document.ready() на одной и той же странице?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Можем ли мы использовать наш собственный символ вместо знака $ в JQuery?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Можно ли на стороне клиента использовать другие библиотеки, такие как MooTools, Prototype вместе с JQuery?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Что такое jQuery.noConflict?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Какая разница между window.onload, document.ready() и $(function(){...});?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Какая разница между jquery.js и jquery.min.js ?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Что такое селектор &nbsp;в JQuery, какие типы селекторов вы знаете?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Какие селекторы в JQuery самые быстрые?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Как выбрать все элементы с id = idname</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Как выбрать все элементы div с id = idname</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Как выбрать все элементы с class = classname&nbsp;</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Как выбрать все элементы div с class = classname&nbsp;</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Как выбрать все span элементы в элементах div</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Как выбрать все div и span элементы&nbsp;</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Как выбрать предыдущий элемент от найденного</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Как выбрать следующий элемент от найденного&nbsp;</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Как выбрать все span элементы в элементах div, где span является прямым потомком div&#8217;a&nbsp;</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Как выбрать все span после первого элемента div?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Как выбрать первый li в ul?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Как выбрать div`ы у которых нет класса cls?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Как выбрать элементы с активной анимацией?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Как выбрать div-ы которые содержат класс firstclass и класс secondclass?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Как выбрать все div-ы с атрибутом title = test?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Как выбрать все отмеченные чекбоксы?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Как выбрать все input с type = radio?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Как выбрать видимый div с именем red, который содержит тег span?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Что выберет этот фільтр $("a[rel~= 'external ']"); ?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Что выберет этот фільтр $("div[name=apple]:visible:has(p)"); ?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Найти все элементы div с классом one, а также все элементы p с классом two, затем добавить им всем класс three и визуально плавно спустить вниз?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Сделать так, чтобы при нажатии на элемент &lt;а&gt; алертом выводилось "Hello world!".&nbsp;</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Что быстрее document.getElementByID('txtName') или $('#txtName')?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Какая разница между $(this) и 'this' в jQuery?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Как проверить, что элемент пустой?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Как проверить существует ли элемент в JQuery?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Для чего используется функция jQuery ".each()"?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Какая разница между $('div') и $('&lt;div/&gt;') в jQuery?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Какая разница между parent(), parents(), closest() в jQuery?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Какая разница между get() и eq() методами в jQuery?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Как добавить анимацию в jQuery?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Как отключить JQuery анимацию?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Как остановить текущую запущенную анимацию в JQuery?&nbsp;</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">В чем разница между методами .empty () .remove () и .detach () в JQuery?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Какая разница между .bind() .live() .delegate() и .on()?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Как создать клон объекта в JQuery?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">В чем разница между prop и attr?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Что такое event.preventDefault?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">В чем разница между event.PreventDefault и event.stopPropagation?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Как проверить есть переменная числом, используя JQuery 1.7+?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Как проверить тип данных переменной в JQuery?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Как привязать обработчик события к выбранному элементу, которое должно быть выполнено только один раз?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Можно ли удерживать или задержать выполнение document.ready на некоторое время?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Что такое цепочка методов в jQuery?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Можем ли мы использовать JQuery, чтобы сделать AJAX запрос?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Какими методами можно сделать AJAX запрос в JQuery?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Что такое отсроченные(Deferred) объекты в jQuery?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Что делает метод finish()?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Можно ли не указывать протокол в URL когда jQuery ссылается на CDNs?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Что такое jQuery плагины и какие преимущества их использования?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Что такое jQuery UI?</span></li>
</ul>
<h3 style="text-align: left;">
</h3>
<h3 style="text-align: justify;">
<span style="font-family: Arial, Helvetica, sans-serif;"><a href="http://jsehelper.blogspot.com/2016/04/jquery-1.html">Перейти к ответам &#9658;&#9658;</a></span></h3>
<div>
<span style="font-family: Arial, Helvetica, sans-serif;"><br /></span></div>
<h3 style="text-align: left;">
<span style="font-family: Arial, Helvetica, sans-serif;"><a href="http://jsehelper.blogspot.com/2016/04/json.html">JSON.</a></span></h3>
<div>
<ul style="text-align: justify;"><span style="font-family: Arial, Helvetica, sans-serif;">
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Что такое JSON?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Что такое JSON Schema?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Что такое JSON объект?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Какие есть правила синтаксиса JSON объекта (массива)? Приведите пример объекта JSON?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Какие типы данных, поддерживаются в JSON?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Каковы недостатки JSON?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Что такое JSONP?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Какое расширение JSON-файла?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Какой MIME-тип в JSON?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Для чего используется JSON?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Какие преимущества использования JSON?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Какие браузеры поддерживают JSON?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Какая функция используется для преобразования текста JSON в объект?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Что такое JSON Parser?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Что такое JSON-RPC?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Что такое JSON-RPC-Java?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Какова роль JSON.stringify?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Как создать JSON из массива PHP?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Как получить PHP массив из JSON объекта?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Как парсить JSON в JQuery?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Какая функция используется для кодирования JSON в PHP?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Как парсить JSON в JavaScript?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Как создать JSON объект из JavaScript?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Валидациия JSON в PHP?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Валидациия JSON в javascript?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Валидациия JSON в jQuery?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Как получить JSON ответ в Ajax?</span></li>
</span></ul>
<div>
<h3 style="text-align: justify;">
<span style="font-family: Arial, Helvetica, sans-serif;"><a href="http://jsehelper.blogspot.com/2016/04/json.html">Перейти к ответам &#9658;&#9658;</a></span></h3>
</div>
<div>
<span style="font-family: Arial, Helvetica, sans-serif;"><br /></span></div>
<div>
<h3 style="text-align: left;">
<span style="font-family: Arial, Helvetica, sans-serif;">
<a href="http://jsehelper.blogspot.com/2016/04/bootstrap-twitter-bootstrap-1.html">Bootstrap.</a></span></h3>
</div>
<div>
<ul style="text-align: justify;"><span style="font-family: Arial, Helvetica, sans-serif;">
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Что такое Twitter Bootstrap?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Какие основные преимущества Bootstrap?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Что включает в себя пакет Bootstrap?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Какие основные инструменты Bootstrap?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Что такое отзывчивый или адаптивный дизайн?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Что такое Contextual классы таблицы в Bootstrap?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Что такое Bootstrap Grid System?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Что такое Bootstrap media запросы?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Какие виды контейнеров в Bootstrap вы знаете?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Покажите основную табличную структуру в Bootstrap.</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Что такое Offset смещение столбцов?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Как можно упорядочить столбцы в Bootstrap?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Какими двума способами вы можете отобразить код в Bootstrap?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Как сделать изображения responsive(отзывчивым)?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Какие основные этапы создания формы в Bootstrap?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">В чом разница между вертикальною и горизонтальной формой?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Объясните типографику и ссылки в Bootstrap.</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Что такое Нормализация(Normalize) в Bootstrap?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Что такое Lead Body Copy?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Какие типы списков поддерживаются в Bootstrap?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Что такое Glyphicons?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Как использовать Glyphicons?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Что такое плагин Transition?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Что такое Modal плагин?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Как использовать плагин Dropdown?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Что такое Bootstrap карусель?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Что такое группа кнопок?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Какой класс используется для основной группы кнопок?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Какой класс используется, чтобы нарисовать панель кнопок?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Какие классы могут быть применены к группе кнопок вместо изменения размера каждой кнопки?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Какой класс отображает набор кнопок вертикально, а не горизонтально?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Что такое input группы?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Как создать меню навигации с вкладками?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Как создать меню навигации с кнопками?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Как создать вертикальное меню навигации с кнопками?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Что такое bootstrap navbar?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Как создать navbar в bootstrap?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Что такое bootstrap breadcrumb?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Какой класс используется для базовой нумерации страниц(pagination)?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Как настраивать ссылки нумерации страниц?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Что такое bootstrap метки?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Что такое bootstrap бейджики?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Что такое Bootstrap Jumbotron?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Что такое Bootstrap page header?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Как создать миниатюры thumbnails, используя Bootstrap?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Как настроить миниатюры, используя Bootstrap?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Что такое bootstrap alerts?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Как создать bootstrap alert?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Как создать Bootstrap Dismissal Alert?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Как создать прогресс-бар, используя Bootstrap?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Как создать альтернативный прогресс-бар, используя bootstrap?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Как создать прогресс-бар в полоску, используя bootstrap?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Как создать анимированный прогресс-бар, используя bootstrap?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Как создать набор прогресс-баров, используя bootstrap?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Что такое bootstrap медиа-объекты?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Для чего нужен класс ".media" в bootstrap?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Для чего нужен класс ".media-list" &nbsp;класса в bootstrap?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Что такое bootstrap panels?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Как создать bootstrap панель с заголовком?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Как создать bootstrap панель с footer?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Какие контекстные классы доступны для оформления панелей?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Как объединить несколько bootstrap панелей?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Можете ли вы поместить таблицу в панель?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Как стилизовать таблицу горизонтальными разделителями?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Как стилизовать таблицу повторяющимся разным фоном строк?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Как добавить границы к ячейкам таблицы?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Как добавить изменение фона строки при наведении курсора?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Как уменьшить отступ ячеек наполовину?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Как сделать разноцветным фон строк таблицы?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Что такое bootstrap well?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Что такое scrollspy плагин?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Что такое affix плагин?</span></li>
</span></ul>
<h3 style="text-align: justify;">
<span style="font-family: Arial, Helvetica, sans-serif;"><a href="http://jsehelper.blogspot.com/2016/04/bootstrap-twitter-bootstrap-1.html">Перейти к ответам &#9658;&#9658;</a></span></h3>
<div>
<span style="font-family: Arial, Helvetica, sans-serif;"><br /></span></div>
<h3 style="text-align: left;">
<span style="font-family: Arial, Helvetica, sans-serif;">
<a href="http://jsehelper.blogspot.com/2016/05/mongodb.html">MongoDB.</a></span></h3>
<div>
<ul style="text-align: justify;"><span style="font-family: Arial, Helvetica, sans-serif;">
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Что такое NoSQL?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Какие есть типы хранилищ данных в NoSQL?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Что такое MongoDB?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">На каком языке написана MongoDB?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Какие языки программирования можно использовать с MongoDB?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Использует ли таблицы для хранения данных, база данных MongoDB?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Какие преимущества MongoDB?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Какие недостатки MongoDB?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Что такое пространство имен в MongoDB?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Что такое репликация?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Поддерживает ли MongoDB ограничения внешнего ключа(foreign key)?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Как мы можем достичь primary key - foreign key отношения в MongoDB?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Объясните структуру ObjectID в MongoDB.</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Если удалить документ из базыданных, удалится ли он с диска?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Что такое индексы в MongoDB?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Сколько индексов создается по умолчанию в MongoDB для новой коллекции?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Что такое скрытый запрос в MongoDB?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Поддерживает ли MongoDB поиск текста?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Какая команда позволяет получить все индексы определенной коллекции?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Что такое Шардинг в MongoDB?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">По умолчанию, MongoDB пишет и читает данные из primary и secondary наборов реплик. Правда ето или ложь?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Почему MongoDB не является предпочтительным решением для 32-битных систем?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Какая команда,позволяет проверить, являетесь ли вы на главном сервере или нет?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Что такое GridFS?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Что такое Map/Reduce?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Каков создать/удалить коллекцию в MongoDB?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Какова роль профайлера в MongoDB?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Какая команда позволяет вставить документ?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Приведите пример использования индекса в MongoDB.</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Какой метод вернёт список всех документов в колекции?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Что такое селекторы запросов в MongoDB?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Что вы знаете об обновлении/вставке в MongoDB?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Что вы знаете об &nbsp;условных оператораторах в MongoDB?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Как удалить документ в MongoDB?</span></li>
</span></ul>
<h3 style="text-align: justify;">
<span style="font-family: Arial, Helvetica, sans-serif;"><a href="http://jsehelper.blogspot.com/2016/05/mongodb.html">Перейти к ответам &#9658;&#9658;</a></span></h3>
</div>
<div>
<span style="font-family: Arial, Helvetica, sans-serif;"><br /></span></div>
<div>
<h3 style="text-align: left;">
<span style="font-family: Arial, Helvetica, sans-serif;"><a href="http://jsehelper.blogspot.com/2016/05/maven-1.html">Maven.</a></span></h3>
<ul style="text-align: justify;">
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Что такое сборка проекта, автоматизация сборки?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Что такое Maven? Как он работает?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Какие преимущества Maven?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Какие недостатки Maven?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Какими аспектами управляет Maven?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Как узнать какую версию Maven вы используете?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Для чего создан Maven?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Какая структура каталогов в Maven?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Где вы хранятся файлы классов при компиляции проекта Maven?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Что такое pom.xml?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Какую информацию содержит pom.xml?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Что такое супер POM?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Какие элементы необходимы для минимального POM?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Что такое зависимости в Maven?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Что такое артефакт в Maven?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Что такое плагин в Maven?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Что такое задача в Maven?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Что такое архетип в Maven?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Что такое репозиторий в Maven?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Какие типы репозитория существуют в Maven?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Какая команда установляет JAR-файл в локальное хранилище?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Какой порядок поиска зависимостей Maven?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Какие два файла настройки есть в Maven, как они называются и где расположены?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Что такое жизненный цикл сборки в Maven?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Назовите основные фазы жизненного цикла сборки Maven?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Что делает команда mvn site?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Что делает команда mvn clean?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Из каких фаз состоит жизненный цикл сборки Clean?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Из каких фаз состоит жизненный цикл сборки Default (Build)?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Из каких фаз состоит жизненный цикл сборки Site?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Что сделает эта команда "mvn clean dependency:copy-dependencies package"?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Что такое профиль сборки (Build Profile)?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Какие типы профилей сборки (Build Profiles) вы знаете?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Как вы можете активировать профили сборки?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Для чего используются Maven плагины?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Какие типы плагинов существуют в Maven?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Когда Maven использует внешние зависимости?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Что нужно определить для внешней зависимости?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Какая команда создает новый проект на основе архетипа?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Что такое SNAPSHOT в Maven?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">В чем разница между snapshot и версией?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Что такое транзитивная зависимость в Maven?&nbsp;</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Как Maven определяет какую версию зависимостей использовать когда встречается множественный вариант вибора?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Что такое область видимости зависимостей (dependency scope)? Назовите значения dependency scope.</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Какой минимальный набор информации нужен для сопоставления ссылки зависимостей на раздел dependencyManagement?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Как сослаться на свойство(property) определенное в файле pom.xml?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Для чего нужен элемент &lt;execution&gt; в POM файле?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Каким образом можно исключить зависимость в Maven?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Что является полным именем артефакта?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Если вы не определяете никакой информации, где же ваш POM унаследует ее?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">При сборке проекта Maven постоянно проверяет наличие обновлений в интернете. Можете ли вы собрать проект без интернета?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Если при сборке проекта в тестах произошла ошибка. Как собрать проект без запуска тестов?&nbsp;</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Как запустить только один тест?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Как остановить распространение наследования плагинов для дочерних POM?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Какие теги pom.xml визнаете.</span></li>
</ul>
<h3 style="text-align: justify;">
<span style="font-family: Arial, Helvetica, sans-serif;"><a href="http://jsehelper.blogspot.com/2016/05/maven-1.html">Перейти к ответам &#9658;&#9658;</a></span></h3>
</div>
</div>
</div>
</div>
<div>
<span style="font-family: Arial, Helvetica, sans-serif;"><br /></span></div>
<div>
<h3 style="text-align: left;">
<span style="font-family: Arial, Helvetica, sans-serif;"><a href="https://jsehelper.blogspot.nl/2016/08/apache-ant-1.html">Ant.</a></span></h3>
<ul style="text-align: justify;">
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Что такое Apache Ant?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Как начать использовать ant?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Для чего нужен build.xml, из чего он состоит?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Напишите команду чтобы запустить процесс сборки, из командной строки.</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Что вы знаете о теге Project.</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Что вы знаете о теге Target.</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">В каком порядке выполняются цели объявление в атрибуте depends?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Что вы знаете о теге Property.</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Являются ли имена свойств чувствительными к регистру?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Как использовать ant-contrib задачи?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Какие символы разделители используются в path-like структурах в ant?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Как установить classpath в ant скрипт?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Расскажите о задачах в ant.</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Краткое описание основных задач категории Archive Tasks.</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Краткое описание основных задач категории Compile Tasks.</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Краткое описание основных задач категории Execution Tasks.</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Краткое описание основных задач категории File Tasks.</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Краткое описание основных задач категории Miscellaneous Tasks.</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Краткое описание основных задач категории Property Tasks.</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Какие типы данных предусмотренный в Apache Ant?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Что представляет собой тип DirSet?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Какие атрибуты DirSet вы знаете?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Что представляет собой тип FileSet?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Какие атрибуты FileSet вы знаете?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Что представляет собой тип PatternSet?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Как я могу использовать ant, чтобы запустить Java приложение?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Как установить property-файл в ant скрипт?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Как импортировать jar-файлы?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Как использовать clean в ant скрипте?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Как компилировать с помощью ant?</span></li>


Junior Front-end Developer Interview Questions
01

Explain what the "box model" CSS is and the layout components that make it up?
The CSS box model is a rectangular layout paradigm for HTML elements. It consists of the following elements:

Content - The content of the field, which reflects all images and text

Padding - the transparent area that surrounds the content (the amount of space between the border and the content)

Border - border surrounding the padding (if any) and content

Margin - is the transparent area around the border (the amount of space between the border and any neighboring elements)

02

What are some of the main benefits of REST web services?
Here are some of the main benefits of REST web services:

The learning curve is very simple because it works based on HTTP protocols
Supports several data transfer technologies such as ext, XML, JSON, image, etc.
Has no predefined contract between server and client, so loosely coupled implementation
REST is a very lightweight protocol
REST methods can be easily tested in the browser
03

What is Cross-Site Scripting (XSS)?
Cross-Site Scripting (XSS) is an attack that occurs when an attacker uses a web application to send malicious code to a different end-user. This code is usually in the form of a browser-side script.

The page provided by the server when someone requests it is unaltered. The XSS attack exploits weaknesses in the page that include a variable submitted in a request to show up in the raw form in the response. The page will only display what was sent along with this request.

04

What is "strict mode"?
Strict Mode is a new ECMAScript 5 feature that allows you to specify a program or function in n a "strict" operating context. This strict context prevents some actions and also throws more exceptions.

Here's an example of such a strict mode:

// Non-strict code ...

(Function () {

  "Use strict";

  // Define your library strictly ...

}) ();

// Non-strict code ...

05

What is a CSS rule?
Web browsers often apply the CSS rule to documents to influence their content. This CSS rule is formed from several things:

A selector that selects from a list of elements to which you want to apply updated property values.
A set of properties, which have values ​​set to update how the HTML content is displayed
It is also worth adding that the set of CSS rules contained in the stylesheet determines how the web page should look.

06

What is meant by the KISS principle?
KISS, a backronym for "keep it simple, stupid" is a design principle that was invented by the U.S. Navy in 1960. The KISS principle states that almost all systems work best when they remain simple rather than made complicated. That is why design should always be kept simple and avoid unnecessary complexity.

07

What is the difference between span and div?
Div is a block element
Span is an inline element
Placing a block element inside an inline element is illegal. Although a div can have a p tag, and a p tag can have a span, a span can't have a div or p tag inside.

08

When would you use ReactJS?
This open-source front-end JavaScript library is primarily used for the front-end development of one-page applications as well as for managing the view layer for mobile and web apps.

09

What is polymorphism?
In the object-oriented programming paradigm, Polymorphism is the ability of an action or method to perform different functions based on the object it’s acting upon. Some aspects of Polymorphism include overloading, overriding and dynamic method binding.

10

When would you use jQuery?
jQuery is a good option for simple tasks. It has several advantages over other frameworks.

easy to expand
Easy to use and learn
Easy to use for DOM manipulation and traversal.
Cross-browser support (IE 6.0+, FF 1.5+, Safari 2.0+, Opera 9.0+)
AJAX Capabilities
Ways to change and apply CSS, and create animations
Lots of plug-ins for all kinds of needs
Mid Front-end Developer Interview Questions
01

What does SOLID mean? What are its principles?
S - Single-responsibility principle. A class should have only one job

O - Open-closed principle. Objects must be open for extension but closed for modification.

L - Liskov substitution principle. Let q (x) be a property provable about objects of x of type T. Then q (y) should be provable for objects y of type S where S is a subtype of T.

I - Interface segregation principle. You cannot force clients to implement an interface that they are not using.

D - Dependency Inversion Principle. Entities must depend on abstractions, not on concretions.

02

What is ClickJacking?
ClickJacking is a malicious technique that is used to trick users into clicking on a certain element that is in reality different from the element that is presented to a user. ClickJacking is used to illegally obtain personal information or to take control over someone's device.

03

What is load balancing and how does the front-end load balancer work?
Load balancing is a method for allocating capacities across numerous machines or clusters. A front-end load balancer is a server that uses a virtual IP address to accept requests from a client; it ensures that no single machine is overloaded or underloaded. A load balancer determines the most suitable reverse proxy service based on the specified scheduling algorithm and forwards the requests to the needed reverse proxy server.

04

What is Coercion in JavaScript?
Coercion is a JavaScript conversion between two different built-in types. There are two forms of coercion: explicit and implicit.

Here is an example of explicit coercion:

var a = "42";

var b = Number (a)

a; // "42"

b; // 42 - the number!

Here's an example of an implicit coercion:

var a = "42";

var b = a * 1; // "42" implicitly coerced to 42 here

a; // "42"

b; // 42 - the number!

05

What is a Mixin?
Mixin is one of the blocks of code with which we can group CSS declarations. We can reuse these declarations on the site.

Here's how to define Mixin:

@mixin grid ($ flex: true / * default argument * /) {

@if $ flex {

        @include flex;

} @Else {

        display: block;

}

}

Here's what you need to do to use Mixin:

/ * Scss * /

.row {

    @include grid (true);

}

/ * Css * /

.row {

    display: -webkit-flex;

    display: flex;

}

06

What's the difference between "resetting" and "normalizing" CSS? Which one is better to use and why?
Resetting - designed to remove all default browser styles on elements. Margins, padding, and fonts are reset to the same.

Normalizing - keeps styles that are useful rather than dumping everything. It can also fix all errors for common browser dependencies.

It's better to use resetting if you are working on a very unconventional website design and need to create a lot of your style.

07

What is the semantic difference between PUT and POST?
PUT puts a file or resource at a particular URI and exactly at that URI. If there is already a file in this URI, then PUT will replace it.

POST sends data to a specific URI and waits for a file or resource in that URI to process the request. At this point, the server decides what to do with the data in the context of that resource.

08

What is a Grid System?
A grid system is a framework that allows developers to arrange content both vertically and horizontally. These systems include two main elements - rows and columns.

Examples of Grid Systems are:
Simple grid
Pure
Flexbox Grid
Bootstrap
Foundation
09

When would you use AngularJS vs jQuery?
jQuery is the only tool that can solve a single specific problem like dom manipulation, while AngularJS is a complete web framework that includes different kinds of tools for solving different problems like routing, model bindings, dom manipulation, etc. JqLite (a subset of jQuery) is part of the AngularJS and you use it to solve the dom-manipulation thing.

10

What is webpack?
Webpack is an open-source JavaScript module bundler. Its main purpose is to put all of the assets, including Javascript, images, fonts, and CSS, in a dependency graph. Webpack gives control over how to treat different assets it encounters.

Senior Front-end Developer Interview Questions
01

Explain the Prototype Design Pattern
The Prototype Pattern creates new objects. But the peculiarity is that instead of creating non-initialized objects, it returns objects that are initialized with values ​​ copied from a prototype - or sample - object.

One example is the initialization of business objects with values ​​that match the default values ​​in the database. Classical languages ​​rarely use the Prototype pattern, but JavaScript being a prototypal language uses this pattern in the construction of new objects and their prototypes.

02

What is Closure in JavaScript?
The closure is a function that is defined inside another function and which also has access to a variable. This variable is declared and defined in the parent function scope.

The closure has access to the variable in three scopes:

Variable declared in his scope
Variable declared in parent function scope
Variable declared in the global namespace
An example of such a closure:

var globalVar = "abc";  // Parent self invoking function

(Function outerFunction (outerArg) {// begin of scope outerFunction  // Variable declared in outerFunction function scope

var outerFuncVar = 'x';   // Closure self-invoking function

(Function innerFunction (innerArg) {// begin of scope innerFunction  // variable declared in innerFunction function scope

var innerFuncVar = "y";

console.log (

"OuterArg =" + outerArg + "\ n" + "OuterFuncVar =" + outerFuncVar + "\ n" + "InnerArg =" + innerArg + "\ n" + "InnerFuncVar =" + innerFuncVar + "\ n" + "GlobalVar =" + globalVar)  // end of scope innerFunction

}) (five); // Pass 5 as parameter  // end of scope outerFunction

}) (7); // Pass 7 as parameter

03

What is Content Security Policy?
Content Security Policy (CSP) is an HTTP header that allows operators to monitor and control where resources can be loaded onto their website. Using this header is one of the best ways to prevent cross-site scripting (XSS) vulnerabilities. Since there are difficulties with retrofitting CSPs on all existing websites, CSP is a must for all new websites, and it is highly recommended to implement CSPs on all existing high-risk sites.

The biggest benefit of CSP is disabling the use of unsafe-inline JavaScript. Inline JavaScript means that data that users enter incorrectly on the site can generate code that will be interpreted by the browser like JavaScript. By using CSP to disable inline JavaScript, you can effectively eliminate almost all XSS attacks against your site.

04

What are IIFEs?
This stands for Immediately-Invoked Function Expression. This pattern is often used to avoid polluting the global namespace because all the variables used inside the IIFE are not visible outside its scope.

Example using IIFEs:

(Function IIFE () {

console.log ("Hello!");

}) ();

// "Hello!"

05

How will you handle HTTP errors in Angular applications?
You can work with HTTP errors if you attach a "catch" to your request. For example:

import {Injectable} from '@ angular / core';

import {Observable} from 'rxjs / Observable';

import {HttpClient} from '@ angular / common / http';

import 'rxjs / add / observable / throw';

@Injectable ()

export class Client {

constructor (

public http: HttpClient

) {}

public fetch () {

return this.http.post ('https://thisurliswrong123123.com ", {})

.catch ((err) => {

// Do messaging and error handling here

return Observable.throw (err)

});

}

}

06

Explain tsconfig.json file
This file is used to give the options about TypeScript used for the Angular project.

{

"CompilerOptions" {

"Target": "es5",

"Module": "commonjs",

"ModuleResolution": "node",

"SourceMap": true,

"EmitDecoratorMetadata": true,

"ExperimentalDecorators": true,

"Lib": ["es2015", "dom"],

"NoImplicitAny": true,

"SuppressImplicitAnyIndexErrors": true

}

}

07

What components are in Angular?
Each program consists of components. Each component is a logical boundary of functionality for the application. Below we have given what the component consists of:

Class - This is like a C or Java class which consists of properties and methods

Metadata - This is used to decorate the class and extend the functionality of the class

Template - This is used to define the HTML view which is displayed in the application

08

How to use a function A class?
function functionName (name) {

this.name = name;

}

// Creating an object

var functionName = new functionName ("WTEN")

console.log (functionName.name) // WTEN

09

Why is the W3c Standard Code needed?
One of the main goals of such standards is to provide cross-platform compatibility and more compact file sizes. These standards aim to decouple "content" from "formatting" by implementing CSS. It eases maintenance and development.

10

What is the difference between == and ===?
The 3 equal signs mean "equality without type coercion". Using the triple equals, the values ​​must be equal in type as well.

== is equal to

=== is exactly equal to (value and type)

0 == false // true

0 === false // false, because they are of a different type

1 == "1" // true, auto type coercion

1 === "1" // false, because they are of a different type




Как переадресовать страницу в JavaScript?</span></li>
<li><span style="font-family: Arial, Helvetica, sans-serif;">Сколько параметров можно передать функции?</span></li>
<li><span style="font-family: Arial, Helvetica, sans-serif;">Нужно алертом вывести какое-то сообщение, спустя 3 секунды после запуска скрипта. Как это сделать?</span></li>
<li><span style="font-family: Arial, Helvetica, sans-serif;">Чем отличается наследование в JavaScript от наследования в PHP?</span></li>
<li><span style="font-family: Arial, Helvetica, sans-serif;">Приведи пример наследования в JavaScript.</span></li>
<li><span style="font-family: Arial, Helvetica, sans-serif;">Пара слов об объектах в JavaScript?</span></li>
<li><span style="font-family: Arial, Helvetica, sans-serif;">Что представляет из себя метод объекта в JavaScript?</span></li>
<li><span style="font-family: Arial, Helvetica, sans-serif;">Зачем в JavaScript перед переменной писать var?<a name="more"></a></span></li>
<li><span style="font-family: Arial, Helvetica, sans-serif;">Есть две функции: function f(a,b) { return a+b } и var f = function(a,b) { return a+b } Есть ли между ними разница? Если есть то какая?</span></li>
<li><span style="font-family: Arial, Helvetica, sans-serif;">Как создать массив в JavaScript?</span></li>
<li><span style="font-family: Arial, Helvetica, sans-serif;">Можно ли в JavaScript использовать функцию в качестве конструктора?</span></li>
<li><span style="font-family: Arial, Helvetica, sans-serif;">Сколько и какие конструкции для циклов есть в JavaScript?</span></li>
<li><span style="font-family: Arial, Helvetica, sans-serif;">Что cделает код: break me_baby; ?</span></li>
<li><span style="font-family: Arial, Helvetica, sans-serif;">Можно ли задать массив таким образом: var a = &#8220;a,b&#8221;.split(&#8216;,&#8217;)?</span></li>
<li><span style="font-family: Arial, Helvetica, sans-serif;">Что выведет alert(typeof null); ?</span></li>
<li><span style="font-family: Arial, Helvetica, sans-serif;">Что выведет alert(null instanceof Object); ?</span></li>
<li><span style="font-family: Arial, Helvetica, sans-serif;">0.1+ 0.2 == 0.3 ?</span></li>
<li><span style="font-family: Arial, Helvetica, sans-serif;">Что выведет alert(typeof NaN); ?</span></li>
<li><span style="font-family: Arial, Helvetica, sans-serif;">Что выведет alert(NaN === NaN); ?</span></li>
<li><span style="font-family: Arial, Helvetica, sans-serif;">В чём различие свойств innerHTML и outerHTML?</span></li>
<li><span style="font-family: Arial, Helvetica, sans-serif;">Какая разница между операторами == и ===?</span></li>
<li><span style="font-family: Arial, Helvetica, sans-serif;">В чем разница между Object.getOwnPropertyNames() и Object.keys()?</span></li>
<li><span style="font-family: Arial, Helvetica, sans-serif;">С помощью какой конструкции языка можно управлять потоком выполнения скрипта и отслеживать ошибки?</span></li>
<li><span style="font-family: Arial, Helvetica, sans-serif;">Почему вызов a(); происходит успешно, а вызов b(); выдает ошибку?</span></li>
<li><span style="font-family: Arial, Helvetica, sans-serif;">Что такое глобальные переменные ? Как они создаются ? Какие проблемы связаны с использованием глобальных переменных?</span></li>
<li><span style="font-family: Arial, Helvetica, sans-serif;">Что такое замыкания (closure) в JavaScript?</span></li>
<li><span style="font-family: Arial, Helvetica, sans-serif;">Напишите функцию принимающую строку с именем файла и возвращающую расширение (фрагмент после последней точки).</span></li>
<li><span style="font-family: Arial, Helvetica, sans-serif;">Что вернет выражение +new Date()? Чем отличается от Date.now().</span></li>
<li><span style="font-family: Arial, Helvetica, sans-serif;">Какое значение возвращает данное предложение ~~3.14?</span></li>
<li><span style="font-family: Arial, Helvetica, sans-serif;">Какое значение возвращает данное предложение?</span></li>
<li><span style="font-family: Arial, Helvetica, sans-serif;">Что покажут эти два alert?</span></li>
<li><span style="font-family: Arial, Helvetica, sans-serif;">Чему равно foo.length?</span></li>
<li><span style="font-family: Arial, Helvetica, sans-serif;">Что такое prototype в javascript?</span></li>
<li><span style="font-family: Arial, Helvetica, sans-serif;">Какие способы навешивания обработчиков событий вы знаете?</span></li>
<li><span style="font-family: Arial, Helvetica, sans-serif;">Eсть ли разница между window и document?</span></li>
<li><span style="font-family: Arial, Helvetica, sans-serif;">Вызываются ли document.onload и window.onload одновременно?</span></li>
<li><span style="font-family: Arial, Helvetica, sans-serif;">Является ли атрибут (attribute) аналогом свойства (property)?</span></li>
<li><span style="font-family: Arial, Helvetica, sans-serif;">Как остановить дальнейшее распространение события?</span></li>
<li><span style="font-family: Arial, Helvetica, sans-serif;">Назовите различные пути для получения элемента из DOM дерева?</span></li>
<li><span style="font-family: Arial, Helvetica, sans-serif;">Какой наибыстрейший метод для получения элемента через css селектор?</span></li>
<li><span style="font-family: Arial, Helvetica, sans-serif;">Могу ли я удалить удалить обработчик события с элемента?</span></li>
<li><span style="font-family: Arial, Helvetica, sans-serif;">Почему querySelectorAll(&#8216;.my-class&#8217;) медленнее, чем getElementsByClassName(&#8216;my-class&#8217;)?</span></li>
<li><span style="font-family: Arial, Helvetica, sans-serif;">Почему я не могу использовать forEach или похожий метод массива для NodeList?</span></li>
<li><span style="font-family: Arial, Helvetica, sans-serif;">Если вам необходимо реализовать getElementByAttribute, как вы будете это делать?</span></li>
<li><span style="font-family: Arial, Helvetica, sans-serif;">Как бы вы добавили класс к элементу через селектор?</span></li>
<li><span style="font-family: Arial, Helvetica, sans-serif;">Как я могу запустить обработчик в фазе захвата, а не в фазе всплытия?</span></li>
<li><span style="font-family: Arial, Helvetica, sans-serif;">Как проверить, что один элемент является дочерним другому?</span></li>
<li><span style="font-family: Arial, Helvetica, sans-serif;">Какой метод больше всего подходит для создания DOM элемента? Что лучше innerHTML или createElement?</span></li>
<li><span style="font-family: Arial, Helvetica, sans-serif;">Каким образом можно предотвратить множественный вызов обработчика для одного события?</span></li>
<li><span style="font-family: Arial, Helvetica, sans-serif;">Что делает createDocumentFragment и для чего можно его использовать?</span></li>
<li><span style="font-family: Arial, Helvetica, sans-serif;">Что такое reflow?</span></li>
<li><span style="font-family: Arial, Helvetica, sans-serif;">Как я могу проверить были событие отменено или нет?</span></li>
<li><span style="font-family: Arial, Helvetica, sans-serif;">Какие причины reflow? Как можно уменьшить reflow?</span></li>
<li><span style="font-family: Arial, Helvetica, sans-serif;">Что такое repaint и когда оно происходит?</span></li>
<li><span style="font-family: Arial, Helvetica, sans-serif;">Есть ли что-то такое о чём нужно позаботится при использовании node.cloneNode()?</span></li>
<li><span style="font-family: Arial, Helvetica, sans-serif;">Как быть уверенным в том, что DOM подготовлен и можно выполнять JavaScript, как реализовать $(document).ready?</span></li>
<li><span style="font-family: Arial, Helvetica, sans-serif;">Что такое всплытие?</span></li>
<li><span style="font-family: Arial, Helvetica, sans-serif;">Как можно уничтожить несколько элементов с одним вызовом click?</span></li>
<li><span style="font-family: Arial, Helvetica, sans-serif;">Как предотвратить нажатие по ссылке?</span></li>
<li><span style="font-family: Arial, Helvetica, sans-serif;">Создайте кнопку, которая удаляется при нажатии на неё, и создаются две новые кнопки в этом же месте.</span></li>
<li><span style="font-family: Arial, Helvetica, sans-serif;">Как отлавливать все нажатия на странице?</span></li>
<li><span style="font-family: Arial, Helvetica, sans-serif;">Как получить весь текст на странице?</span></li>
<li><span style="font-family: Arial, Helvetica, sans-serif;">Что такое defer и async?</span></li>
<li><span style="font-family: Arial, Helvetica, sans-serif;">Какие существуют типы нод?</span></li>
</ul>
<h3>
<a href="http://jsehelper.blogspot.com/2016/01/javascript.html" style="font-family: arial, helvetica, sans-serif;"><span style="font-family: Arial, Helvetica, sans-serif;">Перейти к ответам &#9658;&#9658;</span></a></h3>
<div>
<span style="font-family: Arial, Helvetica, sans-serif;"><br /></span></div>
<h4 style="text-align: left;">
<a href="http://jsehelper.blogspot.com/2016/01/angularjs.html" style="text-align: justify;"><span style="font-family: Arial, Helvetica, sans-serif;">AngularJS.</span></a></h4>
<div style="text-align: left;">
</div>
<ul style="text-align: left;">
<li><span style="font-family: Arial, Helvetica, sans-serif; text-align: justify;">Что такое AngularJS?</span></li>
<li><span style="font-family: Arial, Helvetica, sans-serif; text-align: justify;">Какие преимущества использования AngularJS?</span></li>
<li><span style="font-family: Arial, Helvetica, sans-serif; text-align: justify;">Какие основные компоненти AngularJS ви знаете?</span></li>
<li><span style="font-family: Arial, Helvetica, sans-serif; text-align: justify;">Что такое AngularJS выражения? Отличие выражений AngularJS от выражений в JS.</span></li>
<li><span style="font-family: Arial, Helvetica, sans-serif; text-align: justify;">Что такое scope в AngularJS?</span></li>
<li><span style="font-family: Arial, Helvetica, sans-serif; text-align: justify;">Что такое rootScope в AngularJS?</span></li>
<li><span style="font-family: Arial, Helvetica, sans-serif; text-align: justify;">Что такое директива (directive) в AngularJS? Назовите несколько основных директив.</span></li>
<li><span style="font-family: Arial, Helvetica, sans-serif; text-align: justify;">Какие есть типы использования директив в AngularJS?</span></li>
<li><span style="font-family: Arial, Helvetica, sans-serif; text-align: justify;">Что такое Сервис (service), в AngularJS?</span></li>
<li><span style="font-family: Arial, Helvetica, sans-serif; text-align: justify;">Что такое &nbsp;модуль (module) &nbsp;в AngularJS?</span></li>
<li><span style="font-family: Arial, Helvetica, sans-serif; text-align: justify;">Что такое &nbsp;фильтр (filter) &nbsp;в Angular?</span></li>
<li><span style="font-family: Arial, Helvetica, sans-serif; text-align: justify;">Что такое контролер (controller) &nbsp;в Angular?</span></li>
<li><span style="font-family: Arial, Helvetica, sans-serif; text-align: justify;">Что катое провайдер (provider) в AngularJS?</span></li>
<li><span style="font-family: Arial, Helvetica, sans-serif; text-align: justify;">Что катое &nbsp; шаблон в AngularJS?</span></li>
<li><span style="font-family: Arial, Helvetica, sans-serif; text-align: justify;">Что такое &nbsp;ижектор (injector) &nbsp;в AngularJS?</span></li>
<li><span style="font-family: Arial, Helvetica, sans-serif; text-align: justify;">Что такое &nbsp;Внедрение зависимости (Dependency Injection) &nbsp;в AngularJS?</span></li>
<li><span style="font-family: Arial, Helvetica, sans-serif; text-align: justify;">Для чего нужен сервис $ location?</span></li>
<li><span style="font-family: Arial, Helvetica, sans-serif; text-align: justify;">Какие CSS классы предоставляються для оформления форм?</span></li>
<li><span style="font-family: Arial, Helvetica, sans-serif; text-align: justify;">Что такое Компилятор, на какие фазы делятся фазы компиляции angular приложения.</span></li>
<li><span style="font-family: Arial, Helvetica, sans-serif; text-align: justify;">Опишите MVC компоненты в контексте Angular?</span></li>
<li><span style="font-family: Arial, Helvetica, sans-serif; text-align: justify;">Опишите директиву ng-app?</span></li>
<li><span style="font-family: Arial, Helvetica, sans-serif; text-align: justify;">Опишите директиву ng-model?</span></li>
<li><span style="font-family: Arial, Helvetica, sans-serif; text-align: justify;">Опишите директиву ng-bind?</span></li>
<li><span style="font-family: Arial, Helvetica, sans-serif; text-align: justify;">Опишите директиву ng-controller?</span></li>
<li><span style="font-family: Arial, Helvetica, sans-serif; text-align: justify;">Опишите директиву ng-init?</span></li>
<li><span style="font-family: Arial, Helvetica, sans-serif; text-align: justify;">Опишите директиву &nbsp;ng-repeat?</span></li>
</ul>
<h3 style="text-align: left;">
<a href="http://jsehelper.blogspot.com/2016/01/angularjs.html" style="text-align: justify;"><span style="font-family: Arial, Helvetica, sans-serif;">Перейти к ответам &#9658;&#9658;</span></a></h3>
<div>
<span style="font-family: Arial, Helvetica, sans-serif;"><br /></span></div>
<h3 style="text-align: justify;">
<span style="font-family: Arial, Helvetica, sans-serif;"><a href="http://jsehelper.blogspot.com/2016/04/jquery-1.html">JQuery.</a></span></h3>
<div>
<ul style="text-align: justify;">
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Что такое jQuery?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Какие преимущества jQuery?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Чем отличаются JavaScript от jQuery?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">jQuery это библиотека для написания сценариев на стороне клиента или на стороне сервера?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Является ли jQuery стандартом W3C?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Как начать работать с jQuery?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Что является отправной точкой начала выполнения кода в JQuery?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Что означает знак доллара ($) в JQuery?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Можем ли мы иметь несколько функций document.ready() на одной и той же странице?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Можем ли мы использовать наш собственный символ вместо знака $ в JQuery?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Можно ли на стороне клиента использовать другие библиотеки, такие как MooTools, Prototype вместе с JQuery?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Что такое jQuery.noConflict?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Какая разница между window.onload, document.ready() и $(function(){...});?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Какая разница между jquery.js и jquery.min.js ?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Что такое селектор &nbsp;в JQuery, какие типы селекторов вы знаете?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Какие селекторы в JQuery самые быстрые?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Как выбрать все элементы с id = idname</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Как выбрать все элементы div с id = idname</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Как выбрать все элементы с class = classname&nbsp;</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Как выбрать все элементы div с class = classname&nbsp;</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Как выбрать все span элементы в элементах div</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Как выбрать все div и span элементы&nbsp;</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Как выбрать предыдущий элемент от найденного</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Как выбрать следующий элемент от найденного&nbsp;</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Как выбрать все span элементы в элементах div, где span является прямым потомком div&#8217;a&nbsp;</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Как выбрать все span после первого элемента div?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Как выбрать первый li в ul?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Как выбрать div`ы у которых нет класса cls?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Как выбрать элементы с активной анимацией?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Как выбрать div-ы которые содержат класс firstclass и класс secondclass?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Как выбрать все div-ы с атрибутом title = test?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Как выбрать все отмеченные чекбоксы?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Как выбрать все input с type = radio?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Как выбрать видимый div с именем red, который содержит тег span?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Что выберет этот фільтр $("a[rel~= 'external ']"); ?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Что выберет этот фільтр $("div[name=apple]:visible:has(p)"); ?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Найти все элементы div с классом one, а также все элементы p с классом two, затем добавить им всем класс three и визуально плавно спустить вниз?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Сделать так, чтобы при нажатии на элемент &lt;а&gt; алертом выводилось "Hello world!".&nbsp;</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Что быстрее document.getElementByID('txtName') или $('#txtName')?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Какая разница между $(this) и 'this' в jQuery?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Как проверить, что элемент пустой?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Как проверить существует ли элемент в JQuery?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Для чего используется функция jQuery ".each()"?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Какая разница между $('div') и $('&lt;div/&gt;') в jQuery?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Какая разница между parent(), parents(), closest() в jQuery?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Какая разница между get() и eq() методами в jQuery?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Как добавить анимацию в jQuery?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Как отключить JQuery анимацию?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Как остановить текущую запущенную анимацию в JQuery?&nbsp;</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">В чем разница между методами .empty () .remove () и .detach () в JQuery?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Какая разница между .bind() .live() .delegate() и .on()?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Как создать клон объекта в JQuery?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">В чем разница между prop и attr?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Что такое event.preventDefault?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">В чем разница между event.PreventDefault и event.stopPropagation?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Как проверить есть переменная числом, используя JQuery 1.7+?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Как проверить тип данных переменной в JQuery?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Как привязать обработчик события к выбранному элементу, которое должно быть выполнено только один раз?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Можно ли удерживать или задержать выполнение document.ready на некоторое время?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Что такое цепочка методов в jQuery?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Можем ли мы использовать JQuery, чтобы сделать AJAX запрос?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Какими методами можно сделать AJAX запрос в JQuery?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Что такое отсроченные(Deferred) объекты в jQuery?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Что делает метод finish()?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Можно ли не указывать протокол в URL когда jQuery ссылается на CDNs?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Что такое jQuery плагины и какие преимущества их использования?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Что такое jQuery UI?</span></li>
</ul>
<h3 style="text-align: left;">
</h3>
<h3 style="text-align: justify;">
<span style="font-family: Arial, Helvetica, sans-serif;"><a href="http://jsehelper.blogspot.com/2016/04/jquery-1.html">Перейти к ответам &#9658;&#9658;</a></span></h3>
<div>
<span style="font-family: Arial, Helvetica, sans-serif;"><br /></span></div>
<h3 style="text-align: left;">
<span style="font-family: Arial, Helvetica, sans-serif;"><a href="http://jsehelper.blogspot.com/2016/04/json.html">JSON.</a></span></h3>
<div>
<ul style="text-align: justify;"><span style="font-family: Arial, Helvetica, sans-serif;">
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Что такое JSON?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Что такое JSON Schema?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Что такое JSON объект?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Какие есть правила синтаксиса JSON объекта (массива)? Приведите пример объекта JSON?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Какие типы данных, поддерживаются в JSON?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Каковы недостатки JSON?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Что такое JSONP?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Какое расширение JSON-файла?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Какой MIME-тип в JSON?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Для чего используется JSON?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Какие преимущества использования JSON?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Какие браузеры поддерживают JSON?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Какая функция используется для преобразования текста JSON в объект?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Что такое JSON Parser?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Что такое JSON-RPC?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Что такое JSON-RPC-Java?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Какова роль JSON.stringify?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Как создать JSON из массива PHP?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Как получить PHP массив из JSON объекта?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Как парсить JSON в JQuery?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Какая функция используется для кодирования JSON в PHP?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Как парсить JSON в JavaScript?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Как создать JSON объект из JavaScript?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Валидациия JSON в PHP?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Валидациия JSON в javascript?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Валидациия JSON в jQuery?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Как получить JSON ответ в Ajax?</span></li>
</span></ul>
<div>
<h3 style="text-align: justify;">
<span style="font-family: Arial, Helvetica, sans-serif;"><a href="http://jsehelper.blogspot.com/2016/04/json.html">Перейти к ответам &#9658;&#9658;</a></span></h3>
</div>
<div>
<span style="font-family: Arial, Helvetica, sans-serif;"><br /></span></div>
<div>
<h3 style="text-align: left;">
<span style="font-family: Arial, Helvetica, sans-serif;">
<a href="http://jsehelper.blogspot.com/2016/04/bootstrap-twitter-bootstrap-1.html">Bootstrap.</a></span></h3>
</div>
<div>
<ul style="text-align: justify;"><span style="font-family: Arial, Helvetica, sans-serif;">
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Что такое Twitter Bootstrap?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Какие основные преимущества Bootstrap?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Что включает в себя пакет Bootstrap?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Какие основные инструменты Bootstrap?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Что такое отзывчивый или адаптивный дизайн?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Что такое Contextual классы таблицы в Bootstrap?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Что такое Bootstrap Grid System?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Что такое Bootstrap media запросы?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Какие виды контейнеров в Bootstrap вы знаете?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Покажите основную табличную структуру в Bootstrap.</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Что такое Offset смещение столбцов?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Как можно упорядочить столбцы в Bootstrap?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Какими двума способами вы можете отобразить код в Bootstrap?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Как сделать изображения responsive(отзывчивым)?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Какие основные этапы создания формы в Bootstrap?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">В чом разница между вертикальною и горизонтальной формой?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Объясните типографику и ссылки в Bootstrap.</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Что такое Нормализация(Normalize) в Bootstrap?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Что такое Lead Body Copy?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Какие типы списков поддерживаются в Bootstrap?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Что такое Glyphicons?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Как использовать Glyphicons?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Что такое плагин Transition?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Что такое Modal плагин?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Как использовать плагин Dropdown?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Что такое Bootstrap карусель?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Что такое группа кнопок?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Какой класс используется для основной группы кнопок?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Какой класс используется, чтобы нарисовать панель кнопок?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Какие классы могут быть применены к группе кнопок вместо изменения размера каждой кнопки?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Какой класс отображает набор кнопок вертикально, а не горизонтально?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Что такое input группы?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Как создать меню навигации с вкладками?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Как создать меню навигации с кнопками?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Как создать вертикальное меню навигации с кнопками?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Что такое bootstrap navbar?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Как создать navbar в bootstrap?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Что такое bootstrap breadcrumb?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Какой класс используется для базовой нумерации страниц(pagination)?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Как настраивать ссылки нумерации страниц?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Что такое bootstrap метки?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Что такое bootstrap бейджики?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Что такое Bootstrap Jumbotron?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Что такое Bootstrap page header?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Как создать миниатюры thumbnails, используя Bootstrap?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Как настроить миниатюры, используя Bootstrap?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Что такое bootstrap alerts?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Как создать bootstrap alert?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Как создать Bootstrap Dismissal Alert?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Как создать прогресс-бар, используя Bootstrap?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Как создать альтернативный прогресс-бар, используя bootstrap?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Как создать прогресс-бар в полоску, используя bootstrap?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Как создать анимированный прогресс-бар, используя bootstrap?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Как создать набор прогресс-баров, используя bootstrap?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Что такое bootstrap медиа-объекты?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Для чего нужен класс ".media" в bootstrap?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Для чего нужен класс ".media-list" &nbsp;класса в bootstrap?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Что такое bootstrap panels?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Как создать bootstrap панель с заголовком?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Как создать bootstrap панель с footer?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Какие контекстные классы доступны для оформления панелей?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Как объединить несколько bootstrap панелей?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Можете ли вы поместить таблицу в панель?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Как стилизовать таблицу горизонтальными разделителями?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Как стилизовать таблицу повторяющимся разным фоном строк?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Как добавить границы к ячейкам таблицы?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Как добавить изменение фона строки при наведении курсора?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Как уменьшить отступ ячеек наполовину?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Как сделать разноцветным фон строк таблицы?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Что такое bootstrap well?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Что такое scrollspy плагин?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Что такое affix плагин?</span></li>
</span></ul>
<h3 style="text-align: justify;">
<span style="font-family: Arial, Helvetica, sans-serif;"><a href="http://jsehelper.blogspot.com/2016/04/bootstrap-twitter-bootstrap-1.html">Перейти к ответам &#9658;&#9658;</a></span></h3>
<div>
<span style="font-family: Arial, Helvetica, sans-serif;"><br /></span></div>
<h3 style="text-align: left;">
<span style="font-family: Arial, Helvetica, sans-serif;">
<a href="http://jsehelper.blogspot.com/2016/05/mongodb.html">MongoDB.</a></span></h3>
<div>
<ul style="text-align: justify;"><span style="font-family: Arial, Helvetica, sans-serif;">
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Что такое NoSQL?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Какие есть типы хранилищ данных в NoSQL?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Что такое MongoDB?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">На каком языке написана MongoDB?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Какие языки программирования можно использовать с MongoDB?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Использует ли таблицы для хранения данных, база данных MongoDB?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Какие преимущества MongoDB?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Какие недостатки MongoDB?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Что такое пространство имен в MongoDB?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Что такое репликация?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Поддерживает ли MongoDB ограничения внешнего ключа(foreign key)?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Как мы можем достичь primary key - foreign key отношения в MongoDB?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Объясните структуру ObjectID в MongoDB.</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Если удалить документ из базыданных, удалится ли он с диска?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Что такое индексы в MongoDB?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Сколько индексов создается по умолчанию в MongoDB для новой коллекции?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Что такое скрытый запрос в MongoDB?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Поддерживает ли MongoDB поиск текста?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Какая команда позволяет получить все индексы определенной коллекции?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Что такое Шардинг в MongoDB?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">По умолчанию, MongoDB пишет и читает данные из primary и secondary наборов реплик. Правда ето или ложь?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Почему MongoDB не является предпочтительным решением для 32-битных систем?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Какая команда,позволяет проверить, являетесь ли вы на главном сервере или нет?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Что такое GridFS?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Что такое Map/Reduce?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Каков создать/удалить коллекцию в MongoDB?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Какова роль профайлера в MongoDB?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Какая команда позволяет вставить документ?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Приведите пример использования индекса в MongoDB.</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Какой метод вернёт список всех документов в колекции?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Что такое селекторы запросов в MongoDB?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Что вы знаете об обновлении/вставке в MongoDB?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Что вы знаете об &nbsp;условных оператораторах в MongoDB?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: &quot;arial&quot; , &quot;helvetica&quot; , sans-serif;">Как удалить документ в MongoDB?</span></li>
</span></ul>
<h3 style="text-align: justify;">
<span style="font-family: Arial, Helvetica, sans-serif;"><a href="http://jsehelper.blogspot.com/2016/05/mongodb.html">Перейти к ответам &#9658;&#9658;</a></span></h3>
</div>
<div>
<span style="font-family: Arial, Helvetica, sans-serif;"><br /></span></div>
<div>
<h3 style="text-align: left;">
<span style="font-family: Arial, Helvetica, sans-serif;"><a href="http://jsehelper.blogspot.com/2016/05/maven-1.html">Maven.</a></span></h3>
<ul style="text-align: justify;">
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Что такое сборка проекта, автоматизация сборки?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Что такое Maven? Как он работает?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Какие преимущества Maven?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Какие недостатки Maven?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Какими аспектами управляет Maven?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Как узнать какую версию Maven вы используете?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Для чего создан Maven?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Какая структура каталогов в Maven?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Где вы хранятся файлы классов при компиляции проекта Maven?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Что такое pom.xml?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Какую информацию содержит pom.xml?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Что такое супер POM?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Какие элементы необходимы для минимального POM?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Что такое зависимости в Maven?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Что такое артефакт в Maven?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Что такое плагин в Maven?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Что такое задача в Maven?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Что такое архетип в Maven?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Что такое репозиторий в Maven?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Какие типы репозитория существуют в Maven?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Какая команда установляет JAR-файл в локальное хранилище?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Какой порядок поиска зависимостей Maven?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Какие два файла настройки есть в Maven, как они называются и где расположены?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Что такое жизненный цикл сборки в Maven?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Назовите основные фазы жизненного цикла сборки Maven?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Что делает команда mvn site?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Что делает команда mvn clean?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Из каких фаз состоит жизненный цикл сборки Clean?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Из каких фаз состоит жизненный цикл сборки Default (Build)?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Из каких фаз состоит жизненный цикл сборки Site?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Что сделает эта команда "mvn clean dependency:copy-dependencies package"?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Что такое профиль сборки (Build Profile)?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Какие типы профилей сборки (Build Profiles) вы знаете?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Как вы можете активировать профили сборки?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Для чего используются Maven плагины?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Какие типы плагинов существуют в Maven?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Когда Maven использует внешние зависимости?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Что нужно определить для внешней зависимости?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Какая команда создает новый проект на основе архетипа?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Что такое SNAPSHOT в Maven?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">В чем разница между snapshot и версией?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Что такое транзитивная зависимость в Maven?&nbsp;</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Как Maven определяет какую версию зависимостей использовать когда встречается множественный вариант вибора?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Что такое область видимости зависимостей (dependency scope)? Назовите значения dependency scope.</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Какой минимальный набор информации нужен для сопоставления ссылки зависимостей на раздел dependencyManagement?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Как сослаться на свойство(property) определенное в файле pom.xml?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Для чего нужен элемент &lt;execution&gt; в POM файле?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Каким образом можно исключить зависимость в Maven?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Что является полным именем артефакта?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Если вы не определяете никакой информации, где же ваш POM унаследует ее?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">При сборке проекта Maven постоянно проверяет наличие обновлений в интернете. Можете ли вы собрать проект без интернета?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Если при сборке проекта в тестах произошла ошибка. Как собрать проект без запуска тестов?&nbsp;</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Как запустить только один тест?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Как остановить распространение наследования плагинов для дочерних POM?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Какие теги pom.xml визнаете.</span></li>
</ul>
<h3 style="text-align: justify;">
<span style="font-family: Arial, Helvetica, sans-serif;"><a href="http://jsehelper.blogspot.com/2016/05/maven-1.html">Перейти к ответам &#9658;&#9658;</a></span></h3>
</div>
</div>
</div>
</div>
<div>
<span style="font-family: Arial, Helvetica, sans-serif;"><br /></span></div>
<div>
<h3 style="text-align: left;">
<span style="font-family: Arial, Helvetica, sans-serif;"><a href="https://jsehelper.blogspot.nl/2016/08/apache-ant-1.html">Ant.</a></span></h3>
<ul style="text-align: justify;">
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Что такое Apache Ant?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Как начать использовать ant?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Для чего нужен build.xml, из чего он состоит?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Напишите команду чтобы запустить процесс сборки, из командной строки.</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Что вы знаете о теге Project.</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Что вы знаете о теге Target.</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">В каком порядке выполняются цели объявление в атрибуте depends?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Что вы знаете о теге Property.</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Являются ли имена свойств чувствительными к регистру?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Как использовать ant-contrib задачи?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Какие символы разделители используются в path-like структурах в ant?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Как установить classpath в ant скрипт?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Расскажите о задачах в ant.</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Краткое описание основных задач категории Archive Tasks.</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Краткое описание основных задач категории Compile Tasks.</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Краткое описание основных задач категории Execution Tasks.</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Краткое описание основных задач категории File Tasks.</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Краткое описание основных задач категории Miscellaneous Tasks.</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Краткое описание основных задач категории Property Tasks.</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Какие типы данных предусмотренный в Apache Ant?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Что представляет собой тип DirSet?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Какие атрибуты DirSet вы знаете?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Что представляет собой тип FileSet?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Какие атрибуты FileSet вы знаете?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Что представляет собой тип PatternSet?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Как я могу использовать ant, чтобы запустить Java приложение?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Как установить property-файл в ant скрипт?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Как импортировать jar-файлы?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Как использовать clean в ant скрипте?</span></li>
<li style="font-size: medium; font-weight: normal;"><span style="font-family: Arial, Helvetica, sans-serif;">Как компилировать с помощью ant?</span></li>

Вопросы по CSS
Расскажите о блочной модели CSS

Блочная модель CSS – это прямоугольное пространство вокруг элемента HTML, в котором определяются границы, поля и отступы.

Границы – определяют максимальную область, в которой будет содержаться элемент. Мы можем сделать границу видимой, невидимой, определить высоту и ширину элемента и т.п. Поля – определяют расстояния между границами и элементом.

Отступы – определяют расстояния между границами и соседними элементами.

Что такое "reset" CSS и для чего он нужен?

Каждый браузер устанавливает свои значения стилей по умолчанию для различных HTML-элементов. С помощью CSS Reset мы можем нивелировать эту разницу для обеспечения кроссбраузерности стилей.

Например, вы используете элемент a в вашем документе. Большинство браузеров, как Internet Explorer и Firefox, добавляют ссылке синий цвет и подчёркивание. Однако представьте, что через пять лет кто-то решил создать новый браузер (назовём его UltraBrowser). Разработчикам браузера не нравился синий цвет и раздражало подчёркивание, поэтому они решили выделять ссылки красным цветом и полужирным шрифтом. Именно исходя из этого, если вы установите базовое значение стилей для элемента a, то он гарантированно будет таким, каким вы хотите его видеть, а не как предпочитают его отображать разработчики UltraBrowser.

Подробней: https://habrahabr.ru/post/45296/

Что такое "normalize" CSS и для чего он нужен?

Normalize.css является альтернативой CSS Reset. Проект является продуктом сотен часов глубокого исследования различий между изначальными стилями браузера. Это исследование провели Николас Галахер и Джонатан Нил.

Цели normalize.css:
сохранять полезные настройки браузера, а не стирать их;
нормализовать стили для широкого круга HTML-элементов;
корректировать ошибки и основные несоответствия браузера;
совершенствовать юзабилити незаметными улучшениями;
объяснять код, используя комментарии и детальную документацию.
Он поддерживает широкий диапазон браузеров (в том числе мобильных) и включает в себя CSS, который нормализует HTML5-элементы, типографику, списки, встраиваемый контент, формы и таблицы.

Несмотря на то, что проект основан на принципе нормализации, он использует стандартные настройки там, где они предпочтительны.

Подробней:
https://htmlacademy.ru/blog/64-about-normalize-css
https://habrahabr.ru/company/htmlacademy/blog/342052/
Чем отличается reset.css от normalize.css?

Reset.css накладывает однородный визуальный стиль, выравнивая стили по умолчанию почти для всех элементов. В отличие от этого, normalize.css сохраняет многие полезные стили браузеров по умолчанию. Это значит, что не требуется повторно объявлять стили для всех стандартных элементов типографики.

Когда элемент имеет различные стили по умолчанию в разных браузерах, normalize.css там, где это возможно, стремится сделать эти стили совместимыми и соответствующими современными стандартам.

Подробней: https://htmlacademy.ru/blog/64-about-normalize-css

Объясните, что такое плавающие элементы (floats) и как они работают?\*

Float определяет, по какой стороне будет выравниваться элемент, при этом остальные элементы будут обтекать его с других сторон. Плавающие (обтекающие) элементы сначала выстраиваются в нормальном потоке, затем образуется новый поток, и они сдвигаются либо вправо, либо влево (в зависимости от выбранного значения) в родительском контейнере. Иными словами, они идут по порядку друг за другом. Учитывая, что в родительском контейнере есть достаточно свободного места, эти плавающие элементы не подстраиваются и не выравниваются для распределения пространства между этими самыми элементами.
Как правило, плавающий элемент обязательно должен иметь фиксированную ширину. Это гарантирует, что float ведет себя так как и ожидалось, избегая проблем в некоторых браузерах.
Используя свойство clear, вы можете указать пять значений: left, right, both, inherit, и none. Это свойство определяет, по какой стороне будет выравниваться элемент, при этом остальные элементы будут обтекать его с других сторон. Например, если вы укажите «left», элемент задействует отмену обтекания с левого края плавающего элемента. При этом все другие элементы на этой стороне будут опущены вниз, и располагаться под текущим элементом.
Правило, которое я обнаружил для себя, прекрасно работает для моих float-макетов.В своем HTML коде, я почти всегда сначала создаю плавающие элементы во время разметки, прежде чем добавлять простые элементы, которые могут взаимодействовать с ними. Вы экономите большую часть времени, и это дает желаемый результат.
Но и тут бывают проблемы, когда вы помещаете в родительский блок плавающие элементы, родительский контейнер не может определить динамически высоту своих дочерних элементов, поэтому родительский контейнер будет иметь высоту равную нулю. Это может поломать вашу верстку. Существует метод, который позволяет родительскому элементу, определить свое пространство с учетом каких-либо плавающих элементов внутри. Можно использовать CSS свойство overflow (переполнение) со значением hidden (скрыть). Обратите внимание, что значение свойства overflow не предназначено для такого рода использования, и может вызывать некоторые проблемы, такие как скрытие нужного контента в данный момент или появление нежелательных полос прокрутки.
Хак: для очистки плавающих элементов лучше применять ‘overflow:auto’ к родительскому элементу.
Обратите внимание, что данный трюк не очищает плавающие элементы — он просто растягивает родительский контейнер. Вы можете принудительно очистить float, если вы добавите очищающий элемент после последнего плавающего элемента, или вы можете добавить в любом нужном вам месте, создав тем самым новый поток. Родительский элемент не умеет очищать дочерние плавающие элементы.
9 правил:
Плавающие элементы прижимаются к границам своих контейнеров, но не дальше.
Любой плавающий элемент будет находится либо рядом, либо ниже предыдущего элемента. Если элементы прижаты влево, второй элемент появится точно справа от первого. Если они прижаты вправо, второй элемент появится слева от первого (reverse).
Элемент с левым обтеканием, не может быть правее, чем элемент с правым обтеканием.
Плавающие элементы не могут подняться выше верхнего края родительского контейнера (однако становится еще сложнее, когда задействованы отступы).
Плавающий элемент не может быть выше своего соседа плавающего элемента.
Плавающий элемент не может быть выше своего соседа строчного элемента.
Плавающий элемент совместно со своим таким же соседом элементом, не могут выходить за края родительского контейнера.
Плавающий элемент должен быть помещен как можно выше.
Элемент с левым обтеканием должен быть помещен как можно дальше влево, как это возможно, элемент с правым обтеканием должен быть помещен как можно дальше вправо, как это возможно.
Подробней: https://habrahabr.ru/post/273471/

Какие вы знаете методы запрета обтекания (clearing) и какие где применяются?

Хак: для очистки плавающих элементов лучше применять ‘overflow:auto’ к родительскому элементу.

.clearfix:after {
  content: "";
  display: table;
  clear: both;
}
Что такое CSS спрайты? Как они реализуются на странице или сайте?

CSS спрайт — это техника оптимизации производительности, которая сочетает в себе несколько изображений в одном изображении, называемом спрайт-лист (sprite sheet) или набор плиток (tile set). Спрайты уменьшают нагрузку на сеть за счет сокращения количества загрузок с сервера, необходимых для отображения веб-страницы.

Подробней: https://habrahabr.ru/post/159027/

Как Вы обеспечиваете отображение страниц в старых/ограниченных браузерах?

Полифилы, кроссбраузерные решения
Проверка нужной версии на спец. сервисах
Скачивание старые версий браузеров(хард метод)
https://caniuse.com/ (софт метод)
Предупреждение о устаревшем браузере
Какими способами можно визуально скрыть элемент (оставив его доступным для экранного диктора, screen reader)?

position: relative; left: -5000px

Вы когда-нибудь использовали сеточную верстку (grid system, grid design)? Если да, какая Ваша любимая?

grid design: https://habrahabr.ru/post/23792/

grid system: http://htmlbook.ru/blog/css-grid-i-flexbox-sravnenie-na-praktike

Что такое flexbox?

Направлена на предоставление более эффективного способа выравнивания и распределения места между элементами в контейнере (родительском блоке), даже если их размер неизвестен или динамический.
Основная идея flex-блоков, обладать способностью изменять свою ширина/высота (и другое), чтобы наилучшим образом заполнять свободное место (в основном, для поддержки адаптивности на всех видах устройств и размеров экрана).
В основном элементы будут распределяться либо вдоль главной оси, либо вдоль поперечной оси контейнера.
Flex-блоки лучше всего подходят для составных частей приложения и мелкомасштабных компонентов на странице, в то время как grid-блоки больше используется для компонентов на странице большого масштаба.
Также как существует inline-block, inline-table, существует и inline-flex.
Подробней: https://habrahabr.ru/post/273471/#display

Как задать flexbox?

Для начала нам нужно выбрать, какие элементы следует выкладывать в виде flex блоков. Для этого мы устанавливаем специальное значение display в родительском элементе тех элементов, которые вы хотите оформить. display: flex;

Примечание: Вы также можете установить значение display inline-flex, если хотите расставить inline элементы как flex блоки.

Подробней: https://developer.mozilla.org/ru/docs/Learn/CSS/CSS_layout/Flexbox

Какие оси есть в flexbox?

Главная ось (main axis) проходит в том направлении, вдоль которого расположены Flex элемнеты (например, в строку слева направо или вдоль колонок вниз.) Начало и конец этой оси называются main start и main end.
Поперечная ось (сross axis) проходит перпендикулярно Flex элементам. Начало и конец этой оси называются cross start and cross end.
Родительский элемент, на который назначено свойство display: flex называется flex container.
Элементы, размещённые в нём как Flex блоки называются flex items
Подробней: https://developer.mozilla.org/ru/docs/Learn/CSS/CSS_layout/Flexbox

Какое свойство flexbox отвечает за направление flex items?

В Flexbox есть свойство под названием flex-direction, которое определяет направление главной оси (в каком направлении располагаются flexbox дети) — по умолчанию ему присваивается значение row, т.е. располагать дочерние элементы в ряд слева направо (для большинства языков) или справа налево (для арабских языков).

row | row-reverse | column | column-reverse
row The flex container's main-axis is defined to be the same as the text direction. The main-start and main-end points are the same as the content direction.
row-reverse Behaves the same as row but the main-start and main-end points are permuted.
column The flex container's main-axis is the same as the block-axis. The main-start and main-end points are the same as the before and after points of the writing-mode.
column-reverse Behaves the same as column but the main-start and main-end are permuted.
Подробней: https://developer.mozilla.org/ru/docs/Learn/CSS/CSS_layout/Flexbox

Какое правило flexbox задает вывод flex items в одну строку или в несколько строк?

Свойство CSS flex-wrap

nowrap | wrap | wrap-reverse
Подробней: https://developer.mozilla.org/ru/docs/Learn/CSS/CSS_layout/Flexbox

flex-flow сокращение, расскажите?

На этом этапе нужно заметить, что сществует сокращение для свойств flex-direction и flex-wrap — flex-flow. Например, вы можете заменить

flex-direction: row;
flex-wrap: wrap;

flex-flow: row wrap;

Подробней: https://developer.mozilla.org/ru/docs/Learn/CSS/CSS_layout/Flexbox

Как можно гибко изменять размеры flex элементов?

article {
  flex: 1 200px;
}

article:nth-of-type(3) {
  flex: 2 200px;
}
Это просто означает, что каждому flex элементу сначала будет дано 200px от свободного места. Потом оставшееся место будет поделено в соответствии с частями пропорций.

Подробней: https://developer.mozilla.org/ru/docs/Learn/CSS/CSS_layout/Flexbox

сокращённое свойство flex

flex это сокращённое свойство, в которым можно задать до трёх разных свойств:

Значение пропорции. Оно может быть установлено отдельно с помощью свойства flex-grow.
Следующее значение пропорции — flex-shrink — вступает в роль, когда flex элементы переполняют контейнер. Оно указывает, сколько забирается от размера каждого flex элемента, чтобы он перестал переполнять контейнер. Это продвинутая функция flexbox.
Значение минимального размера, как мы обсуждали ранее. Оно может быть установлено отдельно с помощью свойства flex-basis.
Подробней: https://developer.mozilla.org/ru/docs/Learn/CSS/CSS_layout/Flexbox

Расскажите про flex-grow, flex-shrink, flex-basis?

Свойство CSS flex-grow определяет, какую часть свободного пространства может занять контейнер, в соотношении с другими контейнерами.
flex-shrink — свойство CSS, которое определяет фактор сжатия flex-элемента. Flex-элементы будут заполнять контейнер в зависимости от значения flex-shrink, когда стандартная ширина flex-элементов шире, чем flex-контейнер.
flex-basis CSS свойство задает базовые размеры флекс элемента, а именно ширину. Это свойство определяет размер содержимого контента, если оно не было заданно свойством box-sizing.
Подробней:
https://developer.mozilla.org/ru/docs/Web/CSS/flex-grow
https://developer.mozilla.org/ru/docs/Web/CSS/flex-shrink
https://developer.mozilla.org/ru/docs/Web/CSS/flex-basis
Что такое css grid?

Значение grid позволяет нам создавать макет сетки. Она направлена на решении проблем со старыми методами компоновки блоков, имеющих float и inline-block, которые в свою очередь имеют недостатки, и действительно не предназначались для макета страницы.
Основная идея grid-концепции, управлять содержимым, обеспечивая механизм распределения имеющегося пространство блоков в столбцы и строки, с помощью набора заранее установленных размеров.
Вместе с этим фактом мы можем устранить проблемы, которые появляются при разработке, опираясь на старую технику разработки сайтов, теперь вы тратите меньше усилий.
Не поддерживается. Только в IE10+.
Также как существует inline-block, inline-table, inline-flex, существует и inline-grid
Подробней:
https://habrahabr.ru/post/273471/#display
https://habrahabr.ru/post/325760/
https://developer.mozilla.org/ru/docs/Web/CSS/CSS_Grid_Layout
Можно ли использовать css grid и flexbox вместе?

Flexbox и Grid это не два противоборствующих свойства, они наоборот дополняют друг друга.

Grid - инструмент позиционирования основных блоков страницы.

Flexbox - инструмент позиционирования элементов внутри блоков, спозиционированных с помощью Grid.

Как оптимизировать страницы для печати?

https://habrahabr.ru/company/ruvds/blog/317776/
https://habrahabr.ru/post/160997/
Какие есть подводные камни в оптимизации производительности CSS?

Переотрисовка (repaint):
Также известное, как redraw — это событие, которое происходит всякий раз, когда что-то делается видимым на странице, если ранее оно было скрыто (visibility:hidden, overflow:hidden, display:none, и др), или наоборот (visibility:visible, overflow:auto, display:static, и др), когда происходят какие-то изменения в макете. Примером может быть что угодно: добавление к элементу рамки, изменение цвета фона, изменение видимости стилей — все это приводит к переотрисовке страницы. Тем самым данное событие может дорого вам обойтись в плане производительности, так как нагружает браузерный движок поиском, проходами по всем элементам, чтобы определить, что является видимым уже, а что должно отобразиться.

Перерасчет (reflow):
Перерасчет (или перекомпоновка) носит более значительный характер. Это событие будет происходить всякий раз, когда происходят манипуляции с DOM-деревом HTML документа, или когда стиль, который влияет на расположение, изменяется у элемента, это событие будет происходит всякий раз, когда атрибут class у элемента изменяется, или всякий раз, когда изменяется размер окна браузера. Цель перерасчета в том, чтобы определить, где различные части сайты теперь должны отображаться. Если вы измените родительские свойства, тогда его потомки также будут пересчитаны. Элементы, которые появляются после того, как DOM было сформировано, будут сформированы заново. Если изменяется дочерний элемент, тогда будет пересчитан и родительский элемент, чтобы учесть изменения своих потомков. Затем, происходит переотрисовка.

Перерасчет также очень дорого обходится в плане производительности, и является одной из главных причин медленной работы скриптов, особенно на устройствах с низкой вычислительной мощности, таких как телефоны

Минимальный перерасчет (minimal reflow):
Долгий перерасчет может повлиять на весь документ, всю веб-страницу. Чем больше документ, тем дольше перерасчет. Меньше HTML-кода лучше производительность. Элементы с абсолютным позиционирование или фиксированным, не влияют на структуру главного документа, так как они находятся в отдельном потоке, если в них произошли изменения, только они будут подвержены перерасчету. Конечно, документ, в котором произойдут изменения, все равно будут полностью переотрисованы, но эта проблема имеет слабый характер, чем перерасчет всего DOM-дерева.

Так что анимация не должны быть применена ко всему документу, было бы лучшим, если бы анимации применялись только для позиционированных элементов. Для большинства случаев, это очень важно.

Что вызывает перерасчет:
Изменение размера окна
Изменение шрифта
Добавлении или удалении стилей
Динамическое изменение, пользователь вводит текст в поле ввода
Активация CSS псевдо-классов, к примеру, событие :hover
Манипулирования с атрибутом class
Сценарии манипулирования с DOM-деревом
Расчет значений offsetWidth и offsetHeight
Задание свойств в атрибут style
Как свести к минимуму влияние перерасчета на производительность:
Изменение атрибутов класса у элементов, делайте как можно реже (минимум манипуляций в DOM-дереве).
Избегайте установки нескольких встроенных стилей.
Применяйте анимацию к элементам, которые имеют фиксированное или абсолютное позиционирование.
Избегайте табличной разметки. Даже незначительные изменения в ячейке таблицы вызовут перерасчет на всех остальных узлах таблицы.
Не используйте «CSS expressions» (также известное, как «IE expressions»)
Примечание:
Потеть над селекторами, используемых в современных браузерах, бесполезно. Большинство методов выборки сейчас настолько быстрые и эффективные, что на это действительно не стоит тратить много времени. Кроме того, есть различия в различных браузерах, и у каждого есть свои медленные селекторы.

Чрезмерные неиспользуемые стили, скорее всего, они будут бить по производительность, чем любые селекторы, которые вы добавили в свой документ. Следует прибираться в своих css-стилях. 3000 строк неиспользуемых или избыточных на странице стилей, в наше время, это не редкость. Если разные стили используются на разных страницах вашего сайта, разбейте ваш один и единственный styles.css на несколько дополнительных, это будет лучшим вариантом.

Подробней: https://habrahabr.ru/post/273471/#repaints_and_reflows

Объясните, как браузер определяет, на какие элементы накладывать CSS стили?

CSSOM (объектная модель CSS) — это объект, представляющий стили, связанные с DOM. Он выглядит так же как DOM, но с соответствующими стилями для каждого узла. Не имеет значения были ли стили объявлены явно или наследуются.

Подробней: https://habrahabr.ru/post/320430/

Слышали ли о системе БЭМ (Блок-Элемент-Модификатор)?

https://ru.bem.info/methodology/quick-start/
https://habrahabr.ru/post/162385/
https://habrahabr.ru/post/203440/
https://medium.com/@dedguran/введение-в-методологию-бэм-e6b156e1f795
Какие еще методологии верстки вы знаете?

https://habrahabr.ru/post/256109/
https://operatino.github.io/MCSS/
Вопросы по javascript
Что-такое хэш-таблица?

Хэш-табли́ца или хеш-табли́ца — это структура данных, реализующая интерфейс ассоциативного массива, а именно, она позволяет хранить пары (ключ, значение) и выполнять три операции: операцию добавления новой пары, операцию поиска и операцию удаления пары по ключу.

Подробней: https://ru.wikipedia.org/wiki/Хеш-таблица

Что такое web workers и зачем они нужны?

Web Workers предоставляют простое средство для запуска скриптов в фоновом потоке. Поток Worker'а может выполнять задачи без вмешательства в пользовательский интерфейс. К тому же, они могут осуществлять ввод/вывод, используя XMLHttpRequest (хотя атрибуты responseXML и channel всегда будут равны null). Существующий Worker может отсылать сообщения в JavaScript код, который его создал, отправляя сообщения в обработчик событий, указанный этим кодом (и наоборот).

Подробней: https://developer.mozilla.org/ru/docs/DOM/Using_web_workers

Какие ограничения накладываются на поток Web Worker?

Потоки web worker не могут изменять HTML элементы, глобальные переменные и некоторые свойства окон, такие как window.location. Вы можете использовать типы данных javascript, вызовы XMLHttpRequest и прочее.

Как создать поток web worker в JavaScript?

Подробней:
https://developer.mozilla.org/ru/docs/DOM/Using_web_workers
https://habrahabr.ru/post/132785/
Как уничтожить объект web worker?

w.terminate();

Зачем в HTML 5 введены события server-sent?

Подробней:

https://ru.wikipedia.org/wiki/Server-sent_events
https://habrahabr.ru/post/120429/
Что такое неопределенные (undefined) и необъявленные (undeclared) переменные?

undefined - значение
undeclared - ошибка ReferenceError
Подробней: https://habrahabr.ru/post/159313/

Что такое замыкание и как/для чего его используют?

Замыкания — это функции, ссылающиеся на независимые (свободные) переменные. Другими словами, функция, определённая в замыкании, «запоминает» окружение, в котором она была создана.

Подробней
https://htmlacademy.ru/blog/195-lets-learn-javascript-closures
https://habrahabr.ru/post/38642/
Объясните "JavaScript module pattern" и где он (паттерн) применяется?

Первостепенная задача не засорять пространство имен, но с модульностью ES2015 как таковая необходимость отпала.

Вторстепенная задача классическое ООП. Публичные члены класса доступны всем, приватные только самому классу. В первой части есть ссылка на реальный пример модуля в ts

Как Вы организуете свой код? (module pattern, наследование)?

Подробней: https://habrahabr.ru/post/131714/

В чем разница между host-объектами и нативными объектами?

Встроенные объекты: String, Math, RegExp, Object, Function и т.д. - основные предопределенные объекты, всегда доступные в JavaScript. Определено в спецификации ECMAScript.

Объекты хоста: объекты типа window, XmlHttpRequest, узлы DOM и т.д., которые предоставляются средой браузера. Они отличаются от встроенных объектов, потому что не все окружения будут иметь одни и те же объекты хоста. Если JavaScript работает за пределами браузера, например, на языке сценариев на стороне сервера, например, в Node.js, будут доступны разные объекты хоста.

Объекты пользователя: объекты, определенные в JavaScript-коде.

В чем разница между .call и .apply?

.call() - вызывает ту же функцию с указанными аргументами
.apply() - вызывает ту же функцию с аргументами, указанными в массиве
.bind() - создает новую функцию с тем же самым телом функции с заданным значением this (первый аргумент) и возвращает эту функцию.
Во всех случаях первый аргумент используется как значение this внутри функции.

Подробней:
https://learn.javascript.ru/call-apply
https://habrahabr.ru/sandbox/33838/
Что делает и для чего нужна функци Function.prototype.bind?

Метод bind() создаёт новую функцию, которая при вызове устанавливает в качестве контекста выполнения this предоставленное значение. В метод также передаётся набор аргументов, которые будут установлены перед переданными в привязанную функцию аргументами при её вызове.

Подробней: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Function/bind

Объясните, как работает наследование в JavaScript?

Модель наследования в JavaScript может озадачить опытных разработчиков на высокоуровневых объектно-ориентированных языках (таких, например, как Java или C++), поскольку она динамическая и не включает в себя реализацию понятия class (хотя ключевое слово class, бывшее долгие годы зарезервированным, и приобрело практическое значение в стандарте ES2015, однако, Class в JavaScript ES>=6 представляет собой лишь "синтаксический сахар" поверх прототипно-ориентированной модели наследования).

В плане наследования JavaScript работает лишь с одной сущностью: объектами. Каждый объект имеет внутреннюю ссылку на другой объект, называемый его прототипом. У объекта-прототипа также есть свой собственный прототип и так далее до тех пор, пока цепочка не завершится объектом, у которого свойство prototype равно null. По определению, null не имеет прототипа и является завершающим звеном в цепочке прототипов.

Хотя прототипную модель наследования некоторые относят к недостаткам JavaScript, на самом деле она мощнее классической. К примеру, поверх неё можно предельно просто реализовать классическое наследование, а вот попытки совершить обратное непременно вынудят вас попотеть.

Подробней:
https://developer.mozilla.org/ru/docs/Web/JavaScript/Inheritance_and_the_prototype_chain
https://learn.javascript.ru/class-inheritance
https://habrahabr.ru/post/131714/
Задача, что смущает в этом коде?
```js setInterval(() => { document.getElementById('bigCookie').click() }, 100) ```

(()=> { var cookie = document.querySelector('#bigCookie'); setInterval(()=> { cookie.click(); }, 100); })()

Чтобы не дергать DOM на каждом цикле

setInterval(c => c.click(), 100, bigCookie), ибо любой легальный для js-идентификаторов id элемента: это одноимённое свойство глобального объекта. Но, он может быть переопределен находящемся на странице скриптом.

Общие вопросы о веб-разработке:
Используете вы Perfect Pixel или что-то аналогичное?

Следует уточнить про допуски при верстке, 5px - 10px
Можете ли пояснить разницу между progressive enhancement и graceful degradation?

graceful degradation будет пониматься как отказоустойчивость клиентских веб-интерфейсов. Постепенная деградация может выражаться в возможности работы при отключённом JavaScript, в достаточно аккуратном отображении интерфейса в браузере, не поддерживающем новые свойства CSS3, в адекватном отображении сайта при отключенных изображениях. В каждом из этих случаев работа пользователя с интерфейсом будет в принципе возможна, хотя и не так удобна.

Что же такое progressive enhancement? Чаще всего этот термин переводят, как прогрессивное улучшение. Прогрессивное улучшение предполагает, что веб-интерфейсы должны создаваться поэтапно, циклически, от простого к сложному. На каждом из этапов должен получаться законченный веб-интерфейс, который будет лучше, красивее и удобнее предыдущего. Можно сказать, что сейчас таких этапов четыре

«Старый-добрый-HTML»
«CSS»
«CSS3»
«JavaScript»
Источник: https://htmlacademy.ru/blog/7-progressive-enhancement

Что такое прогрессивный JPEG?

Подробней: https://habrahabr.ru/post/165645/

Что такое feature detection (определение возможностей браузера)?

Feature detection определяет, поддерживает ли браузер тот или иной блок кода и запускает различный код в зависимости от того, поддерживает или нет, так чтобы браузер всегда мог показать рабочий код, вместо репортов об ошибках.

2 способа определения в js:
распарсить юзер-агент, определить версию браузера и писать в коде свитчи по версии браузера
Проверить наличие свойства или метода в window(dom, bom, javascript):
if("geolocation" in navigator) {
	navigator.geolocation.getCurrentPosition(function(position) {
	// show the location on a map, perhaps using the Google Maps API
	});
} else {
	// Give the user a choice of static maps instead perhaps
}
1 способ в css:
@supports
Подробней:
https://developer.mozilla.org/de/Learn/Tools_and_testing/Cross_browser_testing/Feature_detection
https://habrahabr.ru/post/336466/
Как проверить что куки включенны?\*

if (!navigator.cookieEnabled) {
  alert( 'Включите cookie для комфортной работы с этим сайтом' );
}
Объясните, что означает "Семантическая разметка"

Семантическая вёрстка, или семантический HTML-код, — это подход к созданию веб-страниц на языке HTML, основанный на использовании HTML-тегов в соответствии с их семантикой (предназначением), а также предполагающий логичную и последовательную иерархию страницы. Он противопоставляется подходу, при котором написание HTML-кода определяется внешним видом веб-страницы. Для оформления веб-страниц, написанных в соответствии с семантикой, используются каскадные таблицы стилей (CSS). Стандарт HTML с самого начала включал в себя ряд семантических тегов, но большую популярность семантическая вёрстка получила после начала работ над HTML5.

Источник: https://ru.wikipedia.org/wiki/Семантическая_вёрстка

Как можно оптимизировать загрузку внешних ресурсов на странице?

Уменьшите количество HTTP-запросов
Используйте поддомены для параллельного скачивания
Используйте кэш браузера
Используйте CDN для загрузки популярных JavaScript библиотек
Используйте Gzip- сжатие
Подробней по каждому пункту: https://habrahabr.ru/post/137239/

Каково преимущество в подгрузке внешних ресурсов с нескольких доменов?

Cогласно спецификации HTTP/1.1 на браузеры накладываются ограничения на количество одновременно загружаемых компонентов сайта, а именно не более 2-х компонентов с одного хоста. Поэтому если на Вашем сайте много графики, то ее лучше вынести на отдельный поддомен или поддомены. Для Вас это будет один и тот же сервер, а для браузера – разные. Чем больше поддоменов Вы создадите, тем больше файлов браузер сможет одновременно загрузить и тем быстрее загрузится вся страница сайта. Вам остается лишь изменить адрес картинок на новый. Очень простой, но действенный способ.

Назовите три способа уменьшения времени загрузки страницы (воспринимаемого или реального)

Помещайте CSS файлы в начале страницы
Помещайте javascript в конец страницы
Минимизируйте css и javascript
Оптимизируйте ваши изображения
Не масштабируйте изображения
Подробней по каждому пункту: https://habrahabr.ru/post/137239/

Что такое FOUC (Flash Of Unstyled Content)? Как его избежать?

Flash of Unstyled Content (FOUC) – это кратковременное появление неоформленных HTML-элементов в некоторых версиях браузеров – сразу же после создания визуальных элементов и до полного применения стилей CSS.

`css {display: block}` на компонент
В `` инлайнится код, необходимый для показа минимум 600px высоты страницы без загрузки дополнительных стилей.
Что такое критический путь рендеринга веб-страниц?

Критический путь рендеринга – это набор минимально необходимых для начала отрисовки страницы действий, ресурсов и вычислений.

Критический путь можно измерять в количестве критических ресурсов, минимальном времени загрузки (измеряется в RTT) и объеме критических ресурсов (в байтах).

Для иллюстрации возьмем простейший пример: HTML страницу размером 1 кб без внешних ресурсов. Критический путь будет: 1 ресурс (HTML-документ), 1 RTT (минимально), 1 кб трафика. Однако, таких простых страниц в природе почти не встретить, поэтому покажем, как можно определять критический путь на реальных веб-страницах.

Подробней: https://habrahabr.ru/post/262239/

Что такое WebSQL?

WebSQL DB — это API для доступа к полноценному SQL-хранилищу данных, основанному на SQLite. Впрочем, последнее обстоятельство — скорее, особенность реализации и стандартом не оговаривается, хотя диалект SQL используется именно от SQLite.

Подробней:
(en) https://developer.mozilla.org/en-US/docs/Mozilla/Tech/XPCOM/Storage
https://habrahabr.ru/post/84654/
(Раздел: За пределами пары ключ/значение: конкурентное видение) http://htmlbook.ru/html5/storage
Является ли WebSQL частью спецификации HTML 5?

Нет. Многие относят его к HTML 5, но WebSQL не является частью спецификации HTML 5. Спецификация основана на SQLite.

Поддержка браузерами: https://caniuse.com/#search=websql

Является ли, Drag and drop частью спецификации? Какие drag-события Вам известны?

Да, это часть спецификации

dragstart, dragenter, dragover, dragleave, drag, drop, dragend

Подробней: https://developer.mozilla.org/ru/docs/Web/Guide/HTML/Drag_and_drop#events

Является ли Web workers частью спецификации HTML 5?

Да. Worker - это объект, созданный при помощи конструктора (например, Worker()), который запускает JavaScript файл по имени — этот файл содержит код, который будет выполнен в потоке Worker'а; объекты Workers запускаются в другом глобальном контексте, который отличается от текущего window. Таким образом, использование переменной window для получения текущего глобального контекста (вместо self) внутри Worker вернет ошибку.

https://developer.mozilla.org/ru/docs/DOM/Using_web_workers
https://html.spec.whatwg.org/multipage/#toc-workers
Является ли service workers частью спецификации HTML 5?

Service worker запускается в контексте worker'ов, поэтому он не имеет доступа к DOM и работает в потоке отдельном от основного потока JavaScript, управляющего вашим приложением, а следовательно — не блокирует его. Он призван быть полностью асинхронным; как следствие, синхронные API, такие как XHR и localStorage, в service worker'е использовать нельзя.

Подробней:
https://developer.mozilla.org/ru/docs/Web/API/Service_Worker_API
https://html.spec.whatwg.org/multipage/#toc-workers
Что такое гиперссылка?

Часть гипертекстового документа, ссылающаяся на другой элемент (команда, текст, заголовок, примечание, изображение) в самом документе, на другой объект (файл, каталог, приложение), расположенный на локальном диске или в компьютерной сети, либо на элементы этого объекта.

Подробней: https://ru.wikipedia.org/wiki/Гиперссылка

Что такое GraphQL?

В двух словах, GraphQL это синтаксис, который описывает как запрашивать данные, и, в основном, используется клиентом для загрузки данных с сервера. GraphQL имеет три основные характеристики:

Позволяет клиенту точно указать, какие данные ему нужны.
Облегчает агрегацию данных из нескольких источников.
Использует систему типов для описания данных.
Подробней: https://habrahabr.ru/post/326986/

Что такое HTTP?

Протокол передачи гипертекста (Hypertext Transfer Protocol - HTTP) это прикладной протокол для передачи гипертекстовых документов, таких как HTML. Он создан для связи между веб-браузерами и веб-серверами, хотя в принципе HTTP может использоваться и для других целей. Протокол следует классической клиент-серверной модели, когда клиент открывает соединение, создаёт запрос, а затем ждет ответа. HTTP - это stateless-протокол, то есть сервер не сохраняет никаких данных (состояние) между двумя парами "запрос-ответ". Несмотря на то, что HTTP основан на TCP/IP, он так же может использовать любой транспорт, который не теряет молча сообщения (то есть он обязан знать дошло ли сообщение до адресата).

Подробней:
https://developer.mozilla.org/ru/docs/Web/HTTP
https://ru.wikipedia.org/wiki/HTTP
https://habrahabr.ru/post/215117/
Если через консоль, примеру curl'oм, запросить сайт, что мы увидим?

Стандартный ответ страницы, как для браузера

Еще желательно знать, как организовывается докачка файлов, после восстановления соединения.

Подробней: https://ru.wikipedia.org/wiki/HTTP

Перечислите хотя бы 4 метода HTTP:

GET, POST, PUT, DELETE

Подробней:
https://developer.mozilla.org/ru/docs/Web/HTTP
https://ru.wikipedia.org/wiki/HTTP
Назовите 5 классов ошибок при HTTP запросе:

1xx Информирование о процессе передачи.
2xx Информирование о случаях успешного принятия и обработки запроса клиента. В зависимости от статуса, сервер может ещё передать заголовки и тело сообщения.
3xx Сообщает клиенту, что для успешного выполнения операции необходимо сделать другой запрос (как правило по другому URI). Из данного класса пять кодов 301, 302, 303, 305 и 307 относятся непосредственно к перенаправлениям (редирект). Адрес, по которому клиенту следует произвести запрос, сервер указывает в заголовке Location. При этом допускается использование фрагментов в целевом URI.
4xx Указание ошибок со стороны клиента. При использовании всех методов, кроме HEAD, сервер должен вернуть в теле сообщения гипертекстовое пояснение для пользователя.
5xx Информирование о случаях неудачного выполнения операции по вине сервера. Для всех ситуаций, кроме использования метода HEAD, сервер должен включать в тело сообщения объяснение, которое клиент отобразит пользователю.
Подробней:
https://developer.mozilla.org/ru/docs/Web/HTTP
https://ru.wikipedia.org/wiki/HTTP
В чем отличия HTTP/1 от HTTP/2?

Протокол HTTP/2 является бинарным. По сравнению с предыдущим стандартом изменены способы разбиения данных на фрагменты и транспортирования их между сервером и клиентом.

В HTTP/2 сервер имеет право послать то содержимое, которое ещё не было запрошено клиентом. Это позволит серверу сразу выслать дополнительные файлы, которые потребуются браузеру для отображения страниц, без необходимости анализа браузером основной страницы и запрашивания необходимых дополнений.

Также часть улучшений получена за счёт мультиплексирования запросов и ответов для преодоления проблемы «head-of-line blocking» протоколов HTTP 1; сжатия передаваемых заголовков и введения явной приоритезации запросов.

Так же поддерживает приоритетность загрузки

Подробней: https://ru.wikipedia.org/wiki/HTTP/2

Где именно хранятся данные session и как сервер понимает как сопоставить конкретные данные session конкретному http запросу?

Сессии могут храниться на клиенте (signed cookie session). При этом используется подпись куки с помощью HMAC, чтобы данные сессии не могли быть свободно изменены клиентом. Но обычно сессии хранятся на сервере. Тут выбор огромный: от баз данных и key-value хранилищ (Redis, например) до простых файлов. При этом, клиенту посылается кука ID сессии (так сервер идентифицирует юзера), которую злоумышленник может стащить. Таким кукам, дабы защитить юзеров от XSS, ставится флаг HttpOnly, который советует браузеру не давать эту куку скриптам вроде JS. В этом случае, стащить куку получится только завладев браузером, файловой системой юзера или через багу браузера.

Подробней: https://developer.mozilla.org/ru/docs/Web/HTTP/Куки

Что такое HTTPS?

HTTPS (HyperText Transfer Protocol Secure) — расширение протокола HTTP для поддержки шифрования в целях повышения безопасности. Данные в протоколе HTTPS передаются поверх криптографических протоколов SSL или TLS. В отличие от HTTP с TCP-портом 80, для HTTPS по умолчанию используется TCP-порт 443

Подробней:
https://yandex.ru/blog/company/77455
https://ru.wikipedia.org/wiki/HTTPS
Что такое REST?

REST (Representational State Transfer — «передача состояния представления») — архитектурный стиль взаимодействия компонентов распределённого приложения в сети. REST представляет собой согласованный набор ограничений, учитываемых при проектировании распределённой гипермедиа-системы. В определённых случаях (интернет-магазины, поисковые системы, прочие системы, основанные на данных) это приводит к повышению производительности и упрощению архитектуры. В широком смысле[уточнить] компоненты в REST взаимодействуют наподобие взаимодействия клиентов и серверов во Всемирной паутине. REST является альтернативой RPC.

Подробней:
https://ru.wikipedia.org/wiki/REST
https://habrahabr.ru/post/38730/
Что такое протокол-SOAP?

SOAP (Simple Object Access Protocol — простой протокол доступа к объектам) — протокол обмена структурированными сообщениями в распределённой вычислительной среде. Первоначально SOAP предназначался в основном для реализации удалённого вызова процедур (RPC). Сейчас протокол используется для обмена произвольными сообщениями в формате XML, а не только для вызова процедур. Официальная спецификация последней версии 1.2 протокола никак не расшифровывает название SOAP. SOAP является расширением протокола XML-RPC.

Подробней:
https://ru.wikipedia.org/wiki/SOAP
Что такое нотация О-большое?

В информатике временна́я сложность алгоритма определяет время работы, используемое алгоритмом, как функции от длины строки, представляющей входные данные. Временная сложность алгоритма обычно выражается с использованием нотации «O» большое, которая исключает коэффициенты и члены меньшего порядка. Если сложность выражена таким способом, говорят об асимптотическом описании временной сложности, т.е. при стремлении размера входа к бесконечности. Например, если время, которое нужно алгоритму для выполнения работы, для всех входов длины n не превосходит 5n3 + 3n для некоторого n (большего некоторого n0), асимптотическая временная сложность равна O (n3).

Подробней:
https://ru.wikipedia.org/wiki/Временная_сложность_алгоритма
https://habrahabr.ru/post/195482/
https://habrahabr.ru/post/188010/
Опишите несколько способов коммуникаций между серверов и клиентом. Опишите работу нескольких сетевых протоколов на высоком уровне(IP, TCP, HTTP/S/2, UDP, RTC, DNS, etc.).\*

Что такое HMAC?

HMAC (сокращение от англ. hash-based message authentication code, код аутентификации (проверки подлинности) сообщений, использующий хеш-функции) — в информатике (криптографии), один из механизмов проверки целостности информации, позволяющий гарантировать то, что данные, передаваемые или хранящиеся в ненадёжной среде, не были изменены посторонними лицами (см. человек посередине). Механизм HMAC использует MAC, описан в RFC 2104, в стандартах организаций ANSI, IETF, ISO и NIST. MAC — стандарт, описывающий способ обмена данными и способ проверки целостности передаваемых данных с использованием секретного ключа. Два клиента, использующие HMAC, как правило, разделяют общий секретный ключ. HMAC — надстройка над MAC; механизм обмена данными с использованием секретного ключа (как в MAC) и хеш-функций. В зависимости от используемой хеш-функции выделяют HMAC-MD5, HMAC-SHA1, HMAC-RIPEMD128, HMAC-RIPEMD160 и т. п.

Подробней: https://ru.wikipedia.org/wiki/HMAC

Что такое CORS?

CORS (Cross-Origin Resource Sharing,"Совместное использование ресурсов между разными источниками") - это система, состоящая из отправки HTTP заголовков, которые определяют: заблокировать или выполнить запрос к ограниченному ресурсу на веб-странице из другого домена, отличного от домена происхождения запрашиваемого ресурса.

The same-origin security policy ("правило ограничения домена") по умолчанию запрещает междоменные запросы. CORS предоставляет веб-серверам возможность контролировать междоменные запросы и позволяет производить безопасный обмен данными между разными доменами.

Подробней:
https://developer.mozilla.org/ru/docs/Словарь/CORS
https://habrahabr.ru/company/pentestit/blog/337146/
https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy
Что такое архитектурный-паттерн MVC?

Model-View-Controller (MVC, «Модель-Представление-Контроллер», «Модель-Вид-Контроллер») — схема разделения данных приложения, пользовательского интерфейса и управляющей логики на три отдельных компонента: модель, представление и контроллер — таким образом, что модификация каждого компонента может осуществляться независимо

Модель (Model) предоставляет данные и реагирует на команды контроллера, изменяя свое состояние.
Представление (View) отвечает за отображение данных модели пользователю, реагируя на изменения модель.
Контроллер (Controller) интерпретирует действия пользователя, оповещая модель о необходимости изменений.
Есть passive model & active model. Но из-за веба, этот паттер, претерпел изменения, что вносит смуту, и вряд ли получится найти 3 программиста, у которых совпадет понимание этого паттерна. Главное понимать общие черты, чтобы суметь отличить от MVVM(bindings) ;)

Признаки контроллера:
Контроллер определяет, какие представление должно быть отображено в данный момент;
События представления могут повлиять только на контроллер.контроллер может повлиять на модель и определить другое представление.
Возможно несколько представлений только для одного контроллера;
Подробней:
https://codepen.io/fikorte/pen/Rjgmqr?limit=all&page=2&q=mvc+example
https://codepen.io/broneks/pen/RWRLRG?editors=1010
https://codepen.io/kyliepace/pen/aNepxV?editors=1010
https://codepen.io/bobodeity/pen/xPbwzX
https://habrahabr.ru/company/devexpress/blog/305812/
https://codepen.io/MrCheater/pen/GqQpYY?editors=1010
Что такое архитектурный-паттерн MVP?

Данный подход позволяет создавать абстракцию представления. Для этого необходимо выделить интерфейс представления с определенным набором свойств и методов. Презентер, в свою очередь, получает ссылку на реализацию интерфейса, подписывается на события представления и по запросу изменяет модель.

Признаки презентера:
Двухсторонняя коммуникация с представлением;
Представление взаимодействует напрямую с презентером, путем вызова соответствующих функций или событий экземпляра презентера;
Презентер взаимодействует с View путем использования специального интерфейса, реализованного представлением;
Один экземпляр презентера связан с одним отображением.
Подробеней:
https://habrahabr.ru/post/215605/

https://stackoverflow.com/questions/2056/what-are-mvp-and-mvc-and-what-is-the-difference

https://habrahabr.ru/post/171925/

https://habrahabr.ru/company/mobileup/blog/313538/

Что такое архитектурный-паттерн MVVM?

Данный подход позволяет связывать элементы представления со свойствами и событиями View-модели. Можно утверждать, что каждый слой этого паттерна не знает о существовании другого слоя.

Признаки презентера:
Двухсторонняя коммуникация с представлением;
View-модель — это абстракция представления. Обычно означает, что свойства представления совпадают со свойствами View-модели / модели
View-модель не имеет ссылки на интерфейс представления (IView). Изменение состояния View-модели автоматически изменяет представление и наоборот, поскольку используется механизм связывания данных (Bindings)
Один экземпляр View-модели связан с одним отображением.
Подробней:
https://habrahabr.ru/post/215605/

https://ru.wikipedia.org/wiki/Model-View-ViewModel

https://habrahabr.ru/company/mobileup/blog/313538/

Что такое DCI?

https://habrahabr.ru/post/151169/

Что такое DOM?

Объектная Модель Документа (DOM) является программным интерфейсом для HTML, XML и SVG документов. Это обеспечивает структурированное представление документа (дерева), и определяет способ, по которому структура может быть доступна для программы, для изменения структуры документа, его стиля и содержания. DOM обеспечивает представление документа в виде структурированной группы узлов и объектов, которые имеют свойства и методы. По сути, она связывает веб -страницы со скриптами или языками программирования.

DOM (Document Object Model — «объектная модель документа») — это независящий от платформы и языка программный интерфейс, позволяющий программам и скриптам получить доступ к содержимому HTML-, XHTML- и XML-документов, а также изменять содержимое, структуру и оформление таких документов.

Подробней:
https://developer.mozilla.org/ru/docs/DOM/DOM_Reference
https://ru.wikipedia.org/wiki/Document_Object_Model
Что такое Virtual DOM? Как он работает?

Virtual DOM - это абстракция HTML DOM, которая выборочно отображает поддеревья узлов на основе изменений состояния. Он обеспечивает минимальное количество манипуляций с DOM, чтобы поддерживать ваши компоненты в актуальном состоянии.

Подробней:
https://medium.com/treenodes/intro-to-react-2-41b84dd74b5d
https://habrahabr.ru/post/256965/
https://medium.com/devschacht/how-to-write-your-own-virtual-dom-c166b56cf01f
Что такое Shadow DOM?

Спецификация Shadow DOM является отдельным стандартом. Частично он уже используется для обычных DOM-элементов, но также применяется для создания веб-компонентов.

Shadow DOM – это внутренний DOM элемента, который существует отдельно от внешнего документа. В нём могут быть свои ID, свои стили и так далее. Причём снаружи его, без применения специальных техник, не видно, поэтому не возникает конфликтов.

Подробней:
https://learn.javascript.ru/shadow-dom
https://habrahabr.ru/post/180377/
https://habrahabr.ru/post/259187/
https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM
Чем отличаются между собой Shadow DOM и Virtual DOM и Regular Dom?

Virtual DOM – полное представление реального DOM. Его самой важной особенностью является группировка изменений и выполнение одиночного повторного рендеринга вместо множества мелких. Если коротко, то можно сказать, что Virtual DOM решает проблемы, связанные с производительностью (Не буду вдаваться в подробности принципа работы Virtual DOM. В рамках этой статьи достаточно знать, зачем он нужен.)

Shadow DOM, как настоящий интроверт, надежно защищает себя от влияния окружающих элементов и не заинтересован и не интересуется изменениями снаружи. Спросите себя, какую главную UI-проблему решают фреймворки типа React и VueJS?

Инкапсуляция

CSS – сложная штука. Все становится еще сложнее, если вы соединяете стили, пытаясь повторно их использовать в различных комбинациях. Это неизбежно приводит к регрессивным ошибкам интерфейса, сложному обслуживанию и плохой масштабируемости. И все же, я считаю, что основная проблема это не CSS, а то, как мы его используем.

Shadow DOM – инструмент, помогающий обойти инкапсуляцию DOM на нативном уровне. Суть не просто в CSS, а в элементах.

В отличие от обычного DOM Shadow DOM идет маленькими кусочками. То есть это не полное представление всего DOM. Представьте Shadow DOM в виде лего, формирующего реальный DOM, где каждый кирпичик представляет собой отдельный DOM.

Shadow DOM – это инкапсуляция.

Подробней:
https://develoger.com/shadow-dom-virtual-dom-889bf78ce701
Что такое ООП и на каких 4х постулатах оно стоит?

абстрагирование для выделения в моделируемом предмете важного для решения конкретной задачи по предмету, в конечном счете — контекстное понимание предмета, формализуемое в виде класса;

инкапсуляция для быстрой и безопасной организации собственно иерархической управляемости: чтобы было достаточно простой команды «что делать», без одновременного уточнения как именно делать, так как это уже другой уровень управления;

наследование для быстрой и безопасной организации родственных понятий: чтобы было достаточно на каждом иерархическом шаге учитывать только изменения, не дублируя все остальное, учтенное на предыдущих шагах;

полиморфизм для определения точки, в которой единое управление лучше распараллелить или наоборот — собрать воедино.

Подробней: https://ru.wikipedia.org/wiki/Объектно-ориентированное_программирование

Что такое инкапсуляция?

Инкапсуляция - это механизм, который объединяет данные и методы, манипулирующие этими данными, и защищает и то и другое от внешнего вмешательства или неправильного использования. Когда методы и данные объединяются таким способом, создается объект.

Подробней:
https://ru.wikipedia.org/wiki/Инкапсуляция_(программирование)
https://habrahabr.ru/post/87205/
Какие классификации паттернов проектирования Вы знаете?

Порождающие паттерны беспокоятся о гибком создании объектов без внесения в программу лишних зависимостей.

Структурные паттерны показывают различные способы построения связей между объектами.

Поведенческие паттерны заботятся об эффективной коммуникации между объектами.

Подробней:
https://refactoring.guru/ru/design-patterns/classification
https://ru.wikipedia.org/wiki/Шаблон_проектирования
Назовите паттерны, которые относятся к порождающим

Одиночка(Singleton):
Одиночка — это порождающий паттерн проектирования, который гарантирует, что у класса есть только один экземпляр, и предоставляет к нему глобальную точку доступа.

https://ru.wikipedia.org/wiki/Одиночка_(шаблон_проектирования)

https://refactoring.guru/ru/design-patterns/singleton

https://github.com/torokmark/design_patterns_in_typescript/tree/master/singleton

Абстрактная фабрика(Abstract factory)
Абстрактная фабрика — это порождающий паттерн проектирования, который позволяет создавать семейства связанных объектов, не привязываясь к конкретным классам создаваемых объектов.

https://ru.wikipedia.org/wiki/Абстрактная_фабрика_(шаблон_проектирования)

https://refactoring.guru/ru/design-patterns/abstract-factory

https://github.com/torokmark/design_patterns_in_typescript/tree/master/abstract_factory

Фабричный метод(Factory method)
Фабричный метод — это порождающий паттерн проектирования, который определяет общий интерфейс для создания объектов в суперклассе, позволяя подклассам изменять тип создаваемых объектов.

https://ru.wikipedia.org/wiki/Фабричный_метод_(шаблон_проектирования)

https://refactoring.guru/ru/design-patterns/factory-method

https://github.com/torokmark/design_patterns_in_typescript/tree/master/factory_method

Строитель(Builder)
Строитель — это порождающий паттерн проектирования, который позволяет создавать сложные объекты пошагово. Строитель даёт возможность использовать один и тот же код строительства для получения разных представлений объектов.

https://ru.wikipedia.org/wiki/Строитель_(шаблон_проектирования)

https://refactoring.guru/ru/design-patterns/builder

https://github.com/torokmark/design_patterns_in_typescript/tree/master/builder

Прототип(Prototype)
Прототип — это порождающий паттерн проектирования, который позволяет копировать объекты, не вдаваясь в подробности их реализации.

https://ru.wikipedia.org/wiki/Прототип_(шаблон_проектирования)

https://refactoring.guru/ru/design-patterns/prototype

https://github.com/torokmark/design_patterns_in_typescript/tree/master/prototype

Менее известные:
Отложенная инициализация(Lazy initialization)
Объект, инициализируемый во время первого обращения к нему.

https://ru.wikipedia.org/wiki/Отложенная_инициализация

Пул одиночек(Multiton)
Гарантирует, что класс имеет поименованные экземпляры объекта и обеспечивает глобальную точку доступа к ним.

https://ru.wikipedia.org/wiki/Объектный_пул

Получение ресурса есть инициализация(Resource acquisition is initialization (RAII))
Получение некоторого ресурса совмещается с инициализацией, а освобождение — с уничтожением объекта.

https://ru.wikipedia.org/wiki/Получение_ресурса_есть_инициализация

Назовите паттерны, которые относятся к структурным

Адаптер(Adapter / Wrapper)
Адаптер — это структурный паттерн проектирования, который позволяет объектам с несовместимыми интерфейсами работать вместе.

https://ru.wikipedia.org/wiki/Адаптер_(шаблон_проектирования)

https://refactoring.guru/ru/design-patterns/adapter

https://github.com/torokmark/design_patterns_in_typescript/tree/master/adapter

Мост(Bridge)
Мост — это структурный паттерн проектирования, который разделяет один или несколько классов на две отдельные иерархии — абстракцию и реализацию, позволяя изменять их независимо друг от друга.

https://ru.wikipedia.org/wiki/Мост_(шаблон_проектирования)

https://refactoring.guru/ru/design-patterns/bridge

https://github.com/torokmark/design_patterns_in_typescript/tree/master/bridge

Компоновщик(Composite)
Компоновщик — это структурный паттерн проектирования, который позволяет сгруппировать объекты в древовидную структуру, а затем работать с ними так, если бы это был единичный объект.

https://ru.wikipedia.org/wiki/Composite

https://refactoring.guru/ru/design-patterns/composite

https://github.com/torokmark/design_patterns_in_typescript/tree/master/composite

Декоратор(Decorator)
Декоратор — это структурный паттерн проектирования, который позволяет динамически добавлять объектам новую функциональность, оборачивая их в полезные «обёртки».

https://ru.wikipedia.org/wiki/Декоратор_(шаблон_проектирования)

https://refactoring.guru/ru/design-patterns/decorator

https://github.com/torokmark/design_patterns_in_typescript/tree/master/decorator

Фасад(Facade)
Фасад — это структурный паттерн проектирования, который предоставляет простой интерфейс к сложной системе классов, библиотеке или фреймворку.

https://ru.wikipedia.org/wiki/Фасад_(шаблон_проектирования)

https://refactoring.guru/ru/design-patterns/facade

https://github.com/torokmark/design_patterns_in_typescript/tree/master/facade

Приспособленец(Flyweight) или Легковес
Легковес — это структурный паттерн проектирования, который позволяет вместить бóльшее количество объектов в отведённую оперативной память за счёт экономного разделения общего состояния объектов между собой, вместо хранения одинаковых данных в каждом объекте.

https://ru.wikipedia.org/wiki/Flyweight

https://refactoring.guru/ru/design-patterns/flyweight

https://github.com/torokmark/design_patterns_in_typescript/tree/master/flyweight

Заместитель(Proxy)
Заместитель — это структурный паттерн проектирования, который позволяет подставлять вместо реальных объектов специальные объекты-заменители. Эти объекты перехватывают вызовы к оригинальному объекту, позволяя сделать что-то до или после передачи вызова оригиналу.

https://ru.wikipedia.org/wiki/Proxy_(шаблон_проектирования)

https://refactoring.guru/ru/design-patterns/proxy

https://github.com/torokmark/design_patterns_in_typescript/tree/master/proxy

Менее известные:
Единая точка входа(Front controller)
Обеспечивает унифицированный интерфейс для интерфейсов в подсистеме. Front Controller определяет высокоуровневый интерфейс, упрощающий использование подсистемы.

https://ru.wikipedia.org/wiki/Единая_точка_входа_(шаблон_проектирования)

Назовите паттерны, которые относятся к поведенческим

Цепочка обязанностей(Chain of responsibility)
Цепочка обязанностей — это поведенческий паттерн проектирования, который позволяет передавать запросы последовательно по цепочке обработчиков. Каждый последующий обработчик решает, может ли он обработать запрос сам и стоит ли передавать запрос дальше по цепи.

https://ru.wikipedia.org/wiki/Chain_of_Responsibility

https://refactoring.guru/ru/design-patterns/chain-of-responsibility

https://github.com/torokmark/design_patterns_in_typescript/tree/master/chain_of_responsibility

Команда, Action, Transaction(Command)
Команда — это поведенческий паттерн проектирования, который превращает запросы в объекты, позволяя передавать их как аргументы при вызове методов, ставить запросы в очередь, логировать их, а также поддерживать отмену операций.

https://ru.wikipedia.org/wiki/Команда_(шаблон_проектирования)

https://refactoring.guru/ru/design-patterns/command

https://github.com/torokmark/design_patterns_in_typescript/tree/master/command

Интерпретатор(Interpreter)
Решает часто встречающуюся, но подверженную изменениям, задачу.

https://ru.wikipedia.org/wiki/Интерпретатор_(шаблон_проектирования)

https://github.com/torokmark/design_patterns_in_typescript/tree/master/interpreter

Итератор, Cursor(Iterator)


Итератор — это поведенческий паттерн проектирования, который даёт возможность последовательно обходить элементы составных объектов, не раскрывая их внутреннего представления.

https://ru.wikipedia.org/wiki/Итератор_(шаблон_проектирования)

https://refactoring.guru/ru/design-patterns/iterator

https://github.com/torokmark/design_patterns_in_typescript/tree/master/iterator

Посредник(Mediator)
Посредник — это поведенческий паттерн проектирования, который позволяет уменьшить связанность множества классов между собой, благодаря перемещению этих связей в один класс-посредник.

https://ru.wikipedia.org/wiki/Mediator

https://refactoring.guru/ru/design-patterns/mediator

https://github.com/torokmark/design_patterns_in_typescript/tree/master/mediator

Хранитель(Memento)
Снимок — это поведенческий паттерн проектирования, который позволяет делать снимки состояния объектов, не раскрывая подробностей их реализации. Затем снимки можно использовать, чтобы восстановить прошлое состояние объектов.

https://ru.wikipedia.org/wiki/Хранитель_(шаблон_проектирования)

https://refactoring.guru/ru/design-patterns/memento

https://github.com/torokmark/design_patterns_in_typescript/tree/master/memento

Наблюдатель(Observer)
Наблюдатель — это поведенческий паттерн проектирования, который создаёт механизм подписки, позволяющий одним объектам следить и реагировать на события, происходящие в других объектах.

https://ru.wikipedia.org/wiki/Наблюдатель_(шаблон_проектирования)

https://refactoring.guru/ru/design-patterns/observer

https://github.com/torokmark/design_patterns_in_typescript/tree/master/observer

https://ru.wikipedia.org/wiki/Издатель-подписчик_(шаблон_проектирования)

Состояние(State)
Состояние — это поведенческий паттерн проектирования, который позволяет объектам менять поведение в зависимости от своего состояния. Извне создаётся впечатление, что изменился класс объекта.

https://ru.wikipedia.org/wiki/Состояние_(шаблон_проектирования)

https://refactoring.guru/ru/design-patterns/state

https://github.com/torokmark/design_patterns_in_typescript/tree/master/state

Стратегия(Strategy)
Стратегия — это поведенческий паттерн проектирования, который определяет семейство схожих алгоритмов и помещает каждый из них в собственный класс. После чего, алгоритмы можно взаимозаменять прямо во время исполнения программы.

https://ru.wikipedia.org/wiki/Стратегия_(шаблон_проектирования)

https://refactoring.guru/ru/design-patterns/strategy

https://github.com/torokmark/design_patterns_in_typescript/tree/master/strategy

Шаблонный метод(Template method)
Шаблонный метод — это поведенческий паттерн проектирования, который определяет скелет алгоритма, перекладывая ответственность за некоторые его шаги на подклассы. Паттерн позволяет подклассам переопределять шаги алгоритма, не меняя его общей структуры.

https://ru.wikipedia.org/wiki/Шаблонный_метод_(шаблон_проектирования)

https://refactoring.guru/ru/design-patterns/template-method

https://github.com/torokmark/design_patterns_in_typescript/tree/master/template_method

Посетитель(Visitor)
Посетитель — это поведенческий паттерн проектирования, который позволяет создавать новые операции, не меняя классы объектов, над которыми эти операции могут выполняться.

https://ru.wikipedia.org/wiki/Посетитель_(шаблон_проектирования)

https://refactoring.guru/ru/design-patterns/visitor

https://github.com/torokmark/design_patterns_in_typescript/tree/master/visitor

Что такое функциональное программирование?

Функциона́льное программи́рование — раздел дискретной математики и парадигма программирования, в которой процесс вычисления трактуется как вычисление значений функций в математическом понимании последних (в отличие от функций как подпрограмм в процедурном программировании).

Противопоставляется парадигме императивного программирования, которая описывает процесс вычислений как последовательное изменение состояний (в значении, подобном таковому в теории автоматов). При необходимости, в функциональном программировании вся совокупность последовательных состояний вычислительного процесса представляется явным образом, например, как список.

Функциональное программирование предполагает обходиться вычислением результатов функций от исходных данных и результатов других функций, и не предполагает явного хранения состояния программы. Соответственно, не предполагает оно и изменяемость этого состояния (в отличие от императивного, где одной из базовых концепций является переменная, хранящая своё значение и позволяющая менять его по мере выполнения алгоритма).

Подробней:
https://ru.wikipedia.org/wiki/Функциональное_программирование
https://habrahabr.ru/post/142351/
https://ru.stackoverflow.com/questions/417898/Что-такое-функциональное-программирование
https://tproger.ru/translations/functional-programming-concepts/
https://habrahabr.ru/post/337880/


Вопросы по HTML:
Для чего нужен doctype и сколько разновидностей Вы можете назвать?

Элемент DOCTYPE предназначен для указания типа текущего документа — DTD (document type definition, описание типа документа). Это необходимо, чтобы браузер понимал, как следует интерпретировать текущую веб-страницу, поскольку HTML существует в нескольких версиях, кроме того, имеется XHTML (EXtensible HyperText Markup Language, расширенный язык разметки гипертекста), похожий на HTML, но различающийся с ним по синтаксису. Чтобы браузер «не путался» и понимал, согласно какому стандарту отображать веб-страницу и необходимо в первой строке кода задавать DOCTYPE.

HTML 4.01
HTML 5
XHTML 1.0
XHTML 1.1
Подробней про то, как указывать теги для определенного Doctype: http://htmlbook.ru/html/%21doctype
Хорошая полезная подробная статья: https://habrahabr.ru/post/71364/
Что такое режим совместимости (Quirks Mode) и стандартный режим (Standards Mode)

На сегодняшний день существует три режима отображения, которые используются движками разметки (layout engines) браузеров: режим совместимости (quirks mode), частично стандартный режим (almost standards mode) и стандартный режим (full standards mode). В режиме совместимости (quirks mode), разметка эмулирует нестандартное поведение браузеров Navigator 4 и Internet Explorer 5. Этот режим необходим для поддержки сайтов, созданных до начала широкого применения веб стандартов. В стандартном режиме (full standards mode) поведение браузера соответствует (будем надеяться) описанному в спецификациях HTML и CSS. В частично стандартном режиме (almost standards mode) реализовано лишь незначительное количество так называемых "странностей" (quirks).

Если вы будете пользоваться неполным тегом DOCTYPE, устаревшим его видом, или вообще забудете про него, броузер перейдет в «загадочный» (quirk) режим и будет исходить из предположения, что вы писали код страницы с ошибками и вольно отступали от стандартов, т.е. так, как писали в конце 90-ых годов. В этом режиме броузер попытается разобрать вашу страницу по правилам обратной совместимости и выведет на экран, например, CSS так, как его вывел бы Internet Explorer 4-ой версии, а DOM будет работать так, как он работал именно в этом броузере (IE переключается в свой старый DOM, а Mozilla и Netscape 6 переключается вообще в бог знает что).

Подробней
https://developer.mozilla.org/ru/docs/Web/HTML/Quirks_Mode_and_Standards_Mode
https://habrahabr.ru/post/71364/
В чем разница между HTML и XHTML?

XHTML - это приложение XML, которое является довольно строгим языком с угловыми скобками.
HTML - это приложение SGML, которое является гораздо менее строгим языком с угловой скобкой.
(XML также является применением SGML.)
При написании кода XHTML придерживаются того же синтаксиса, который характерен для HTML. При этом разница между HTML и XHTML состоит в наборе некоторых обязательных правил.

Правила XHTML следующие.
Все теги и их атрибуты должны быть набраны в нижнем регистре (строчными символами).
Значения любых атрибутов необходимо заключать в кавычки.
Требуется закрывать все теги, даже такие, которым не сопоставлен закрывающий тег.
Должна соблюдаться правильная вложенность тегов.
Нельзя использовать сокращенные атрибуты тегов.
Вместо атрибута name следует указывать id.
Следует определять DTD (document type definition, описание типа документа) с помощью элемента DOCTYPE.
Подробнее с примерами: http://htmlbook.ru/xhtml/sintaksis-xhtml

Могут ли возникнуть проблемы при подаче страниц с типом application/xhtml+xml?

MIME (Multipurpose Internet Mail Extensions, многоцелевые расширения интернет-почты) — стандарт Интернет, является частью протокола HTTP. Задача MIME это идентификация типа содержимого документа по его заголовку. К примеру, текстовый файл имеет тип text/plain, а HTML-файл — text/html. Отправка заголовка обычно происходит на основе расширения файла веб-сервером.

Документы XHTML по умолчанию отправляются как text/html, что в действительности говорит о том, что мы имеем дело с HTML, а не XHTML-файлом. Чтобы задействовать возможности XHTML требуется отдавать файл с типом application/xhtml+xml. Если у вас установлен веб-сервер Apache, то вы можете сделать это через директиву AddType, добавив следующую строку в файл .htaccess, расположенный в корне сайта.

AddType application/xhtml+xml .xhtml

В данном случае мы говорим, что все файлы с расширением .xhtml отдавать как application/xhtml+xml. Если документы формируются через PHP, то можно отдавать заголовок следующим образом:

header ("Content-type: application/xhtml+xml");

Учтите, что эта строка должна идти до вывода любого текста на странице.

Браузер Internet Explorer до версии 8.0 включительно не поддерживает тип application/xhtml+xml и не сможет отобразить страницу, которая отдаётся с этим типом. Остальные браузеры, в том числе IE9, понимают этот тип как переход в стандартный режим.

Тип application/xhtml+xml необходим в случае, когда в документе применяется MathML (Mathematical Markup Language, язык математической разметки), предназначенный для добавления формул или SVG (Scalable Vector Graphics, масштабируемая векторная графика), язык разметки для создания на странице векторных рисунков. Если вы ничего не знаете об этих технологиях и пока не собираетесь их использовать, лучше отдавать документ как text/html. Это позволит охватить наибольшее количество браузеров и поисковых систем.

По сути, тип text/html для файлов с расширением .html или .htm настроен автоматически, поэтому не требуется предпринимать каких-либо действий для этого типа.

согласование содержимого для переключения между application/xhtml+xml и text/html так же, как вы описываете, не замечая проблем с поисковыми роботами. Строго говоря, вы должны учитывать значения q в заголовке accept, который указывает предпочтение пользовательского агента к каждому типу контента. Если пользовательский агент предпочитает принимать text/html, но будет принимать application/xhtml+xml в качестве альтернативы, то для обеспечения максимальной безопасности вы должны иметь страницу text/html.

Какая связь между SGML, HTML, XML и XHTML?

SGML (Standard generalized markup language — стандартный обобщённый язык разметки) – это стандарт, который определяет разметку документа.

HTML – это язык разметки, который описывается с помощью SGML.

Итак, с помощью SGML было создано DTD (определение типа документа), на которое ссылается и которого должен придерживаться HTML. Поэтому вы всегда можете найти декларацию «DOCTYPE» в начале страницы HTML, которая определяет, какое DTD будет использовать браузер при разборе кода страницы.

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
Разбор кода по стандарту SGML был связан с определёнными трудностями, поэтому был создан XML, чтобы облегчить эту процедуру. XML использует SGML. Например, в SGML вы должны использовать открывающие и закрывающие теги, тогда как в XML вы можете использовать самозакрывающиеся теги, которые закрываются автоматически. XHML был создан из XML и использовался в HTML 4.0. Поэтому, например, в HTML, основанном на SGML, тег недопустим, а в XHTML он допускается. Вы можете использовать XML определение документа, как показано в следующем примере:

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
Вкратце, SGML стоит в основе всего. Старые версии HTML основаны на SGML, а HTML 4.0 использует XHTML, построенный на основе XML.

Как следует оформлять страницу, в которой контент может быть на разных языках?

От гугла: https://support.google.com/webmasters/answer/182192?hl=ru

Чем полезны data- атрибуты?

HTML5 спроектирован с возможностью расширения данных ассоциированных с каким-либо элементом, но в то же время не обязательно имеющих определённое значение. data-* атрибуты позволяют хранить дополнительную информацию в стандартных элементах HTML, без хаков вроде нестандартных атрибутов, лишних DOM-свойств или Node.setUserData().

Синтаксис HTML
<article
	id="electriccars"
	data-columns="3"
	data-index-number="12314"
	data-parent="cars">
</article>
Доступ в JavaScript

var article = document.getElementById('electriccars');
article.dataset.columns // "3"
article.dataset.indexNumber // "12314"
article.dataset.parent // "cars"
Доступ в CSS

article::before {
	content: attr(data-parent);
}
Подробнее: https://developer.mozilla.org/ru/docs/Web/Guide/HTML/Using_data_attributes

Если рассматривать HTML5 как открытую web-платформу, на чем она строится, из каких компонентов состоит?

HTML5 (англ. HyperText Markup Language, version 5) — язык для структурирования и представления содержимого всемирной паутины. Это пятая версия HTML. Хотя стандарт был завершён (рекомендованная версия к использованию) только в 2014 году (предыдущая, четвёртая, версия опубликована в 1999 году), ещё с 2013 года[4] браузерами оперативно осуществлялась поддержка, а разработчиками — использование рабочего стандарта (англ. HTML Living Standard). Цель разработки HTML5 — улучшение уровня поддержки мультимедиа-технологий с одновременным сохранением обратной совместимости, удобочитаемости кода для человека и простоты анализа для парсеров.

Во всемирной паутине долгое время использовались стандарты HTML 4.01, XHTML 1.0 и XHTML 1.1. Веб-страницы на практике оказывались свёрстаны с использованием смеси особенностей, представленных различными спецификациями, включая спецификации программных продуктов, например веб-браузеров, а также сложившихся общеупотребительных приёмов. HTML5 был создан как единый язык разметки, который мог бы сочетать синтаксические нормы HTML и XHTML. Он расширяет, улучшает и рационализирует разметку документов, а также добавляет единый API для сложных веб-приложений.

В HTML5 реализовано множество новых синтаксических особенностей. Например, элементы video, audio и canvas, а также возможность использования SVG и математических формул. Эти новшества разработаны для упрощения создания и управления графическими и мультимедийными объектами в сети без необходимости использования сторонних API и плагинов. Другие новые элементы, такие как section, article, header и nav, разработаны для того, чтобы обогащать семантическое содержимое документа (страницы). Новые атрибуты были введены с той же целью, хотя ряд элементов и атрибутов был удалён. Некоторые элементы, например a, menu и cite, были изменены, переопределены или стандартизированы. API и DOM стали основными частями спецификации HTML5. HTML5 также определяет некоторые особенности обработки ошибок вёрстки, поэтому синтаксические ошибки должны рассматриваться одинаково всеми совместимыми браузерами.

Подробнее: https://ru.wikipedia.org/wiki/HTML5

В чем отличия HTML5 от HTML4.01 и XHTML1.0

Ниже представлен список отличий(не все):

Изменён синтаксис
Встраивание SVG и MathML в text/html
Новые элементы:
<article>, <aside>, <audio>, <canvas>, <command>, <datalist>, <details>, <embed>, <figcaption>, <figure>, <footer>, <header>, <hgroup>, <keygen>, <main>, <mark>, <meter>, <nav>, <output>, <progress>, <rp>, <rt>, <ruby>, <section>, <source>, <summary>, <time>, <video>, <wbr>

Новые компоненты ввода:
date/time, email, url, search, number, range, tel, color

Новые атрибуты: charset (в meta), async (в script)
Глобальные атрибуты, которые могут быть применены ко всем элементам: id, tabindex, hidden, data-* (пользовательские атрибуты данных)
Элементы, которые будут исключены:
<acronym>, <applet>, <basefont>, <big>, <center>, <dir>, <font>, <frame>, <frameset>, <isindex>, <noframes>, <strike>, <tt>

Подробнее: https://ru.wikipedia.org/wiki/HTML5

Что такое HTTP cookie?

HTTP cookie (web cookie, cookie браузера) - это небольшой фрагмент данных, отправляемый сервером на браузер пользователя, который тот может сохранить и отсылать обратно с новым запросом к данному серверу. Это, в частности, позволяет узнать, с одного ли браузера пришли оба запроса (например, для аутентификации пользователя). Они запоминают информацию о состоянии для протокола HTTP, который сам по себе этого делать не умеет.

Получив HTTP-запрос, вместе с откликом сервер может отправить заголовок Set-Cookie с ответом. Cookie обычно запоминаются браузером и посылаются в значении заголовка HTTP Cookie с каждым новым запросом к одному и тому же серверу. Можно задать срок действия cookie, а также срок его жизни, после которого cookie не будет отправляться. Также можно указать ограничения на путь и домен, то есть указать, в течении какого времени и к какому сайту оно отсылается.

Подробней: https://developer.mozilla.org/ru/docs/Web/HTTP/Куки

Что такое Secure ("безопасные") и HttpOnly cookies?

"Безопасные" (secure) cookie отсылаются на сервер только если запрос выполняется по протоколу SSL и HTTPS. Однако важные данные никогда не следует передавать или хранить в cookies, поскольку сам их механизм весьма уязвим в отношении безопасности, а флаг secure никакого дополнительного шифрования или средств защиты не обеспечивает. Начиная с Chrome 52 and Firefox 52, незащищенные сайты (http:) не могут создавать куки с флагом secure.

Куки HTTPonly не доступны из JavaScript через свойства Document.cookie, и через XMLHttpRequest и Request API, что помогает избежать межсайтового скриптинга (XSS). Устанавливайте этот флаг для тех cookie, к которым не требуется обращаться через JavaScript. В частности, если куки используются только для поддержки сеанса, то в JavaScript они не нужны, так что в этом случае следует устанавливать флаг HttpOnly.

Set-Cookie: id=a3fWa; Expires=Wed, 21 Oct 2015 07:28:00 GMT; Secure; HttpOnly

Подробней: https://developer.mozilla.org/ru/docs/Web/HTTP/Куки

Объясните разницу между cookies, sessionStorage и localStorage.

LocalStorage
Плюсы:
Веб-хранилище можно рассматривать упрощенно как усовершенствование файлов cookie, обеспечивая гораздо большую емкость хранилища. Если вы посмотрите исходный код Mozilla, мы увидим, что 5120KB (5 МБ), равный 2,5 миллионам символов в Chrome), является размером хранилища по умолчанию для весь домен. Это дает вам значительно больше возможностей для работы, чем обычный cookie 4 КБ.
Данные не отправляются обратно на сервер для каждого HTTP-запроса (HTML, изображения, JavaScript, CSS и т.д.) - уменьшение количества трафика между клиентом и сервером.
Данные, хранящиеся в localStorage, сохраняются до явного удаления. Сделанные изменения сохраняются и доступны для всех текущих и будущих посещений сайта.
Минусы:
Он работает в политике одного и того же происхождения. Таким образом, сохраненные данные будут доступны только в том же месте.
Cookies
Плюсы:
По сравнению с другими, ничего.
Минусы:
Предел 4Kб предназначен для всего файла cookie, включая имя, значение, дату истечения срока годности и т.д. Чтобы поддерживать большинство браузеров, держите имя менее 4000 байт и общий размер файла cookie под 4093 байтами.
Данные отправляются обратно на сервер для каждого HTTP-запроса (HTML, изображения, JavaScript, CSS и т.д.) - увеличение количества трафика между клиентом и сервером.
Обычно допустимы следующие действия:
300 файлов cookie
4096 байт для каждого файла cookie
20 файлов cookie для каждого домена
81920 байт для каждого домена (задано 20 файлов cookie максимального размера 4096 = 81920 байт.)
sessionStorage
Плюсы:
Он похож на localStorage.
Изменения доступны только для каждого окна (или вкладки в браузерах, таких как Chrome и Firefox). Сделанные изменения сохраняются и доступны для текущей страницы, а также для будущих посещений сайта в том же окне. Когда окно закрыто, хранилище удаляется.
Минусы:
Данные доступны только внутри окна/вкладки, в котором он был установлен.
Данные не сохраняются, т.е. будут потеряны после закрытия окна/вкладки.
Подобно localStorage, работает в политике одинакового происхождения. Таким образом, сохраненные данные будут доступны только в том же месте.
Подробней:
LocalStorage: https://developer.mozilla.org/ru/docs/Web/API/Window/localStorage
Cookies: https://developer.mozilla.org/ru/docs/Web/HTTP/Куки
SessionStorage: https://developer.mozilla.org/ru/docs/Web/API/Window/sessionStorage
Каким способом, возможно вложить js-объект в localstorage?

localStorage.setItem(‘Object’, JSON.stringify(Object))

Нужно ли в 5-м ХТМЛ закрывать /> одиночные теги ?

По спецификации - не нужно. Закрывающие слэши предполагаются в XHTML, а в HTML (любой версии) они не нужны.

По здравому смыслу - тоже не нужно. Валидатор w3c так же не ругается.

Что такое кэш приложения в HTML5?

Доступность в оффлайне становится всё более важной для веб-приложений. Да, все браузеры имеют механизмы кэширования, но они ненадежны и работают не всегда ожидаемо. HTML5 устраняет некоторые из этих неприятностей с помощью интерфейса ApplicationCache.

Использование интерфейса кэша даёт вашему приложению три преимущества:

автономный просмотр — пользователи могут исследовать ваш сайт целиком, когда они находятся в оффлайне;
скорость — ресурсы кэшируются локально, поэтому загружаются быстрее;
снижение нагрузки на сервер — браузер загружает с сервера только изменённые ресурсы.
Кэш приложения (или AppCache) позволяет разработчику указать, какие файлы браузер должен кэшировать и сделать доступными для оффлайновых пользователей. Ваше приложение будет работать корректно, даже если пользователь нажимает кнопку «Обновить», находясь в автономном режиме.
Подробней, как настроить и обновлять: http://htmlbook.ru/blog/rukovodstvo-po-ispolzovaniyu-kesha-prilozheniya

Дайте описание след. разделам в файле манифеста кеша: CACHE, NETWORK и FALLBACK.

CACHE - Это стандартный раздел для записи. Файлы, перечисленные в этом блоке (или сразу после CACHE MANIFEST) будут явно кэшированы после того как они скачаны в первый раз.
NETWORK - Файлы, перечисленные в этом разделе, это ресурсы, которые требуют подключения к серверу. Все запросы к этим ресурсам идут в обход кэша, даже если пользователь находится в оффлайне. Можно использовать * для задания шаблона.
FALLBACK Дополнительный раздел указывает резервные страницы, если ресурс недоступен. Первый URL является ресурсом, второй резервом. Оба адреса должны быть относительны и быть в том же месте, что и файл манифеста. Можно использовать * для задания шаблона.
Подробней, как настроить и обновлять: http://htmlbook.ru/blog/rukovodstvo-po-ispolzovaniyu-kesha-prilozheniya

Объясните разницу между ```<script>, <script async> и <script defer>```

Просто script с src:
Получить страницу HTML (например, index.html)
Начните синтаксический анализ HTML
Парсер встречает тег ```<script>```, ссылающийся на внешний файл script.
Браузер запрашивает файл script. Между тем, синтаксический анализатор блокирует и останавливает анализ другого HTML на вашей странице.
Через некоторое время загрузится и затем выполняется script.
Парсер продолжает анализировать остальную часть HTML-документа.
async: Поддерживается всеми браузерами, кроме IE9-. Скрипт выполняется полностью асинхронно. То есть, при обнаружении ```<script async src="...">``` браузер не останавливает обработку страницы, а спокойно работает дальше. Когда скрипт будет загружен – он выполнится.

defer: Поддерживается всеми браузерами, включая самые старые IE. Скрипт также выполняется асинхронно, не заставляет ждать страницу, но есть два отличия от async.

Первое – браузер гарантирует, что относительный порядок скриптов с defer будет сохранён.

Второе отличие – скрипт с defer сработает, когда весь HTML-документ будет обработан браузером.

Подробнее: https://learn.javascript.ru/external-script#асинхронные-скрипты-defer-async

Какое будет поведение ```<script async defer>```?

При одновременном указании async и defer в современных браузерах будет использован только async, в IE9- – только defer (не понимает async).

Подробнее: https://learn.javascript.ru/external-script#асинхронные-скрипты-defer-async

Что такое прогрессивный рендеринг?

Прогрессивное рендеринг - это имя, данное методам, используемым для рендеринга содержимого для отображения как можно быстрее. Раньше он был гораздо более распространенным в дни перед широкополосным доступом в Интернет, но он по-прежнему полезен в современном развитии, поскольку мобильные соединения данных становятся все более популярными (и ненадежными!)

Примеры таких методов:
Ленивая загрузка изображений, где (как правило) некоторые javascript загружают изображение, когда оно попадает в окно просмотра браузеров, вместо загрузки всех изображений при загрузке страницы.
Приоритет видимого содержимого (или выше рендеринга сложения), где вы включаете только минимальные css/content/скрипты, необходимые для количества страницы, которая будет отображаться в чтобы браузер отображался как можно быстрее, вы можете использовать отложенный javascript (domready/load) для загрузки других ресурсов и контента.
Подробнее:
Совсем глубоко: https://habrahabr.ru/post/210558/
Как рендерит: https://habrahabr.ru/post/224187/
https://habrahabr.ru/post/320430/
https://stackoverflow.com/questions/33651166/what-is-progressive-rendering
Что такое meta теги?

`````` определяет метатеги, которые используются для хранения информации предназначенной для браузеров и поисковых систем. Например, механизмы поисковых систем обращаются к метатегам для получения описания сайта, ключевых слов и других данных. Разрешается использовать более чем один метатег, все они размещаются в контейнере ``````. Как правило, атрибуты любого метатега сводятся к парам «имя=значение», которые определяются ключевыми словами content, name или http-equiv.

Аттрибуты:
charset: Задает кодировку документа.
content: Устанавливает значение атрибута, заданного с помощью name или http-equiv.
http-equiv: Предназначен для конвертирования метатега в заголовок HTTP.
name: Имя метатега, также косвенно устанавливает его предназначение.
Подробнее об аттрибутах: http://htmlbook.ru/html/META

Как можно с помощью meta-тега, указать HTTP - заголовок?

<meta http-equiv="Content-Type" content="text/html" />

Много подброней: https://ru.wikipedia.org/wiki/Метатеги

Расскажите о meta-теге с name=viewport

Типичный сайт, оптимизированный для мобильных устройств, содержит следующий мета-тег:

<meta name="viewport" content="width=device-width, initial-scale=1">
Свойство width определяет размер окна просмотра. Он может быть установлен на определенное количество пикселей, скажем,width=600 или на специальное значение device-width, которое означает ширину экрана в пикселях CSS в масштабе 100%. (Есть также соответствующие значения height и device-height, которые могут быть полезны для страниц с элементами, которые изменяют размер или положение на основе высоты окна просмотра).

Свойство initial-scale контролирует уровень масштабирования при первой загрузке страницы. Свойства maximum-scale, minimum-scale и user-scalable определяют, как пользователям разрешено увеличивать или уменьшать страницу.

"user-scalable=no" запрещается любое масштабирование

Подброней: https://developer.mozilla.org/ru/docs/Mozilla/Mobile/Viewport_meta_tag

Какие теги практически обязательно должны быть в ```head```?

<meta charset="utf-8">
<meta http-equiv="x-ua-compatible" content="ie=edge"> <!-- Use the content="ie-edge" tag if your project
    supports Internet Explorer prior to version 11. -->
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
<title>Page Title</title>
Много больше информации о том, что должно быть в head: https://gethead.info/

Есть ли разница: `meta charset="utf-8"` и `meta http-equiv="Content-Type" content="text/html; charset=utf-8"`?
В HTML5 они эквивалентны

Используйте ```meta charset="utf-8"``` для веб-браузеров при использовании HTML5.

Используйте ```meta http-equiv="Content-Type" content="text/html; charset=utf-8"``` при использовании HTML4 или XHTML или для устаревших парсеров dom, например DOMDocument в php

Как сделать чтобы все гиперссылки сайта открывались в новом окне, т.е чтобы по умолчанию использовался `target="_blank"`?

Нужно в области head прописать тег base с атрибутом `target="_blank"`:

<head><base target=”_blank”></head>
А как теперь быть, если какую-то из гиперссылок я захочу открыть в этом же окне, т.е. не создавая новое?

В тег `a` этой ссылки вам уже нужно будет добавить атрибут `target="_self"`, ибо по умолчанию сейчас у нас используется `target="_blank"`

Что такое аттрибут target и какие значения он принимает и что делает?

По умолчанию, при переходе по ссылке документ открывается в текущем окне или фрейме. При необходимости, это условие может быть изменено атрибутом target тега . В XHTML применение этого атрибута запрещено. Все значения аттрибуты начинаются с \_

blank - Загружает страницу в новое окно браузера.
self - Загружает страницу в текущее окно.
parent - Загружает страницу во фрейм-родитель, если фреймов нет, то это значение работает как self.
top - Отменяет все фреймы и загружает страницу в полном окне браузера, если фреймов нет, то это значение работает как self.
Подробней: http://htmlbook.ru/html/a/target

Что такое абсолютная и относительная ссылка?

<a href=”http://google.com/example.html”>Абсолютная ссылка</a>

<a href=”../../example.html”>Относительная ссылка</a>

Какие новые элементы форм введены в HTML 5?

В HTML 5 введены десять новых важных элементов форм:
Color;
Date;
Datetime-local;
Email;
Time;
Url;
Range;
Telephone;
Number;
Search;
Что такое элемент datalist в HTML 5?

Элемент datalist в HTML 5 помогает реализовать функцию автозаполнения в поле для ввода.

<input list="Country">
<datalist id="Country">
	<option value="India">
	<option value="Italy">
	<option value="Iran">
	<option value="Israel">
	<option value="Indonesia">
</datalist>
Подробней: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/datalist

Что такое элемент output в HTML 5?

Элемент output требуется, когда вы хотите отобразить сумму двух введённых чисел в виде текста. Например, у вас есть два поля для ввода и вы хотите сложить числа из этих двух полей и отобразить их сумму в виде текста. Ниже приведён пример использования элемента output в HTML 5:

<form onsubmit="return false" oninput="o.value = parseInt(a.value) + parseInt(b.value)">
	<input name="a" type="number"> +
	<input name="b" type="number"> =
	<output name="o" />
</form>
Вы можете заменить «parseInt» на «valueAsNumber» для простоты. Также вы можете использовать атрибут «for» элемента output для повышения читаемости.

<output name="o" for="a b"></output>
Подробней: http://htmlbook.ru/blog/element-output

Что такое свойство valueAsNumber?

В HTML5 представлено свойство JavaScript valueAsNumber для полей формы (в частности: number, date, range). Оно возвращает значение в виде числа, а не строки, то есть нам больше не нужно использовать parseInt или parseFloat, и оператор + складывает, а не склеивает.

<form onsubmit="return false" oninput="o.value = a.valueAsNumber + b.valueAsNumber">
	<input name="a" id="a" type="number" step="any"> +
	<input name="b" id="b" type="number" step="any"> =
	<output name="o" for="a b"></output>
</form>
Подробней: http://htmlbook.ru/blog/element-output

Для чего нужен атрибут autocomplete? Какие параметры принимает?

Этот атрибут помогает заполнять поля форм текстом, который был введён в них ранее. Значения сохраняет и подставляет браузер, при этом автозаполнение по соображениям безопасности может отключаться пользователем в настройках и не может в таком случае управляться атрибутом autocomplete.

on - Включает автозаполнение текста.
off - Отключает автозаполнение. Это значение обычно используется для отмены сохранения в браузере важных данных (паролей, номеров банковских карт), а также редко вводимых или уникальных данных (капча).
Подробней: http://htmlbook.ru/html/input/autocomplete

Какой формат у input type="date" в HTML5

YYYY-MM-DD

Какой метод запускает проигрывание аудио-файла?

var sound = new Audio(«file.wav»);

sound.play();

Какой формат видео файлов сейчас поддерживается html5?

MPEG 4

Какие элементы в HTML5 могут иметь aria атрибут?

Любой элемент

Знаете ли вы тег dfn и за что он отвечает?

Как правило, в документе, когда упоминается новый термин, он выделяется курсивом и дается его определение. При использовании этого термина в дальнейшем, он считается уже известным читателю. Тег dfn применяется для выделения таких терминов при их первом появлении в тексте.

Браузеры отображают содержимое контейнера с помощью курсивного начертания.

Подробней: http://htmlbook.ru/html/DFN

Что такое SVG?

язык разметки масштабируемой векторной графики, созданный Консорциумом Всемирной паутины (W3C) и входящий в подмножество расширяемого языка разметки XML, предназначен для описания двумерной векторной и смешанной векторно/растровой графики в формате XML. Поддерживает как неподвижную, так и анимированную интерактивную графику — или, в иных терминах, декларативную и скриптовую.

Подробней: https://ru.wikipedia.org/wiki/SVG

Что такое canvas в HTML 5?
Это HTML элемент, использующийся для рисования графики средствами языков программирования (обычно это JavaScript). Он может, к примеру, использоваться для рисования графов, создания коллажей или простой (и не очень) анимации. Изображения в правой части статьи являются примерами использования , примеры их создания приводятся в этой статье.

Подробней: https://developer.mozilla.org/ru/docs/Web/API/Canvas_API/Tutorial

В чём разница между canvas и SVG?

SVG
Плюсы:
Нет зависимости от разрешения — SVG лучше подходит для кроссплатформенных пользовательских интерфейсов, так как позволяет масштабировать изображение при различных разрешениях экрана.
SVG очень хорошо поддерживает анимацию. Элементы могут быть анимированы с использованием описательного синтаксиса или с помощью JavaScript.
Можно получить полный контроль над каждым элементом, используя SVG DOM API в JavaScript.
SVG хранится в формате XML, что предоставляет больше возможностей браузерам по обеспечению доступности SVG документов по сравнению с элементом canvas. Таким образом, SVG выглядит лучшим решением для пользовательских интерфейсов веб-приложений.
Минусы:
Низкая скорость рендеринга при увеличении сложности документа (рисунка), так как используется модель DOM
Скорее всего, SVG не подходит для таких приложений как игры. Возможно лучшим выбором будет комбинация HTML Canvas + SVG.
Canvas
Плюсы:
Высокая производительность при отрисовке любых 2D объектов.
Стабильная производительность — всё есть пиксель. Производительность падает только при увеличении разрешения изображения.
Можно сохранить полученное изображение в PNG или JPG файл.
Лучше всего подходит для создания растровой графики (например, в играх, фракталов и т.п.), редактирования изображений и операций, требующих манипулирования на уровне пикселей.
Минусы:
Отрисовка основана на пикселях.
Не существует API для анимации. Вам придется прибегать к использованию таймеров и других событий для обновления канвы.
Слабые возможности по рендерингу текста.
Возможно, не самый лучший выбор, когда доступность имеет решающее значение. Канва предоставляет вам поверхность для рисования в выбранном контексте (2D и 3D). Можно указать альтернативный контент внутри элемента canvas, который будет показан браузером при невозможности отображения графики. Кроме того, вы можете выполнить проверку доступности выбранного Canvas API с помощью JavaScript. На основе этого вы можете обеспечить различную функциональность для пользователей браузеров с разной поддержкой HTML 5 Canvas.
HTML 5 Canvas не подходит для создания веб-сайтов или интерфейсов веб-приложений, так как пользовательские интерфейсы обычно должны быть динамическими и интерактивными, а Canvas требует от вас постоянной перерисовки каждого элемента в интерфейсе.
Подробней:
https://habrahabr.ru/company/simbirsoft/blog/332750/
https://developer.mozilla.org/ru/docs/Web/API/Canvas_API/Tutorial
В каких случаях лучше выбрать canvas, а в каких svg?

HTML 5 Canvas следует использовать для:
Редактирования изображений: обрезки, изменения размеров, фильтров (удаления эффекта красных глаз, создания эффекта сепии, изменения цветности или яркости)
Создания растровой графики: визуализации данных, создания фракталов и графиков функций.
Анализа изображений: создания гистограмм и т.п.
Создания игровой графики, такой как спрайты и фоны.
SVG следует использовать для:
Создания пользовательских интерфейсов веб-приложений, независимых от разрешения экрана.
Высокоинтерактивных анимированных пользовательских интерфейсов.
Графиков и диаграмм.
Редактирования векторных изображений.
Что такое WebGL?

WebGL (Web-based Graphics Library) — программная библиотека для языка программирования JavaScript, позволяющая создавать на JavaScript интерактивную 3D-графику, функционирующую в широком спектре совместимых с ней веб-браузеров. За счёт использования низкоуровневых средств поддержки OpenGL, часть кода на WebGL может выполняться непосредственно на видеокартах. WebGL — это контекст элемента canvas HTML, который обеспечивает API 3D графики без использования плагинов. Спецификация версии 1.0 была выпущена 3 марта 2011 года. Проект по созданию библиотеки управляется некоммерческой организацией Khronos Group.

Подробней: https://ru.wikipedia.org/wiki/WebGL

Перечислите блочные элементы, которые Вам известны(хотя бы 5).


<address>, <article>, <aside>, <audio>, <blockquote>, <canvas>, <dd>, <div>, <dl>, <fieldset>, <figcaption>, <figure>, <footer>, <form>, <h1>, <h2>, <h3>, <h4>, <h5>, <h6>, <header>, <hgroup>, <hr>, <li>, <main>, <nav>, <noscript>, <ol>, <output>, <p>, <pre>, <section>, <table>, <tfoot>, <ul>, <video>

Подробней: https://developer.mozilla.org/ru/docs/Web/HTML/Block-level_elements

Перечислите строчные элементы, которые Вам известны(хотя бы 5).

b, big, i, small, tt

abbr, acronym, cite, code, dfn, em, kbd, strong, samp, time, var

a, bdo, br, img, map, object, q, script, span, sub, sup

button, input, label, select, textarea

Подробней: https://developer.mozilla.org/ru/docs/Web/HTML/Строчные_Элементы

Дайте пояснения, для какой цели добавленны след. элементы: article, aside, audio, canvas, figcaption, figure, footer, header, hgroup, output, section, video. (Кратко)

article: Тег article задает содержание сайта вроде новости, статьи, записи блога, форума или др. Элемент должен содержать часть самодостаточной информации, которая может быть вырвана из контекста всей страницы без потери смысла.
aside: Определяет блок сбоку от контента для размещения рубрик, ссылок на архив, меток и другой информации. Такой блок, как правило, называется «сайдбар» или «боковая панель».
audio: Добавляет, воспроизводит и управляет настройками аудиозаписи на веб-странице. Путь к файлу задается через атрибут src или вложенный тег source. Внутри контейнера audio можно написать текст, который будет выводиться в браузерах, не работающих с этим тегом.
canvas: Это HTML элемент, использующийся для рисования графики средствами языков программирования (обычно это JavaScript).
figcaption: Содержит описание для тега figure. Тег figcaption должен быть первым или последним элементом в группе.
figure: Используется для группирования любых элементов, например, изображений и подписей к ним.
footer: Тег footer задаёт «подвал» сайта или раздела, в нём может располагаться имя автора, дата документа, контактная и правовая информация.
header: Тег header задает «шапку» сайта или раздела, в которой обычно располагается заголовок.
hgroup: Используется для группирования заголовков веб-страницы или раздела. Внутри располагаются теги заголовков от h1 до h6. Данный тег исключён из версии HTML от W3C, но остался в версии WHATWG, будущее элемента пока не определено.
output: Определяет область в которую выводится информация, преимущественно с помощью скриптов.
section: Задаёт раздел документа, может применяться для блока новостей, контактной информации, глав текста, вкладок в диалоговом окне и др. Раздел обычно содержит заголовок. Допускается вкладывать один тег section внутрь другого.
video: Добавляет, воспроизводит и управляет настройками видеоролика на веб-странице. Путь к файлу задается через атрибут src или вложенный тег source.
Подробней:
https://developer.mozilla.org/ru/docs/Web/HTML/Element/article
https://developer.mozilla.org/ru/docs/Web/HTML/Element/aside
https://developer.mozilla.org/ru/docs/Web/HTML/Element/audio
https://developer.mozilla.org/ru/docs/Web/HTML/Element/canvas
https://developer.mozilla.org/ru/docs/Web/HTML/Element/figure
https://developer.mozilla.org/ru/docs/Web/HTML/Element/footer
https://developer.mozilla.org/ru/docs/Web/HTML/Element/header
https://developer.mozilla.org/ru/docs/Web/HTML/Element/hgroup
https://developer.mozilla.org/ru/docs/Web/HTML/Element/section
https://developer.mozilla.org/ru/docs/Web/HTML/Element/video
На какие события video или audio можно подписаться?(Кандидат может не знать ни одного. Это легко гуглится в работе)

abort, canplay, ended, loadstart, pause, play, playing

Подробней: https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Media_events

Чем отличается article от section?

Чтобы не было путаницы, разберём где и когда использовать разные контейнеры:
div — контейнер общего назначения, не обязательно смысловой. Дивы используются для разметки мелких блоков, создания сетки и декоративных эффектов.
section — более крупный логический контейнер, объединяющий содержание по смыслу. Например, блок «О компании», список товаров, раздел личной информации в профиле и так далее.
article — самостоятельный, цельный и независимый раздел документа. Этот раздел можно в неизменном виде использовать в различных местах, в том числе и на других сайтах. Примеры: статья, пост в блоге, сообщение на форуме и так далее.
Подробней: https://habrahabr.ru/post/214407/

Для чего нужен тег noscript?

Элемент HTML noscript определяет секцию html кода, которая будет вставлена, если в браузере пользователя нет либо отключена поддержка JavaScript'а.

Подробней: https://developer.mozilla.org/ru/docs/Web/HTML/Element/noscript

Что такое категории контента в HTML5, cколько их, расскажите о них.

Каждый элемент HTML принадлежит некоторому количеству категорий контента, которые объединяют элементы с общим набором характеристик. Такая группировка является свободной, то есть не задает на самом деле отношение между элементами таких типов, но помогает определить и описать их поведение и правила, которым они должны следовать, особенно когда дело доходит до сложных деталей. Также возможна ситуация, когда элемент не входит ни в одну из этих категорий.

Существует три типа категорий контента:
Основные категории контента, описывающие общие для многих элементов правила;
Категории контента для элементов форм, описывающие общие правила для элементов форм;
Особые категории контента, описывающие редкие категории, актуальные только для нескольких элементов, возможно, лишь в особом контексте.
Подробней: https://developer.mozilla.org/ru/docs/Web/Guide/HTML/Content_categories

Какие категории считаются основными категориями контента?

Метаданные: Элементы, принадлежащие к категории метаданных, изменяют отображение или поведение HTML-документа, связывают его с другими документами и предоставляют другую дополнительную информацию о документе.
Потоковый контент: Элементы основного потока обычно содержат текст и встроенный контент.
Секционный контент: Подобные элементы создают секции (блоки) в текущей структуре документа, определяющие область действия заголовочного контента и элементов header и footer
Заголовочный контент: Заголовочный контент задает заголовок секции, явно отмеченной структурным элементом или неявно – самим заголовочным.
Фразовый контент: Фразовый контент определяет текст и его формат. Серии фразового контента образуют параграфы.
Встроенный контент: Встроенный контент импортирует в документ другой ресурс или вставляет содержимое на другом языке разметки или принадлежащее другому пространству имен.
Интерактивный контент: К интерактивному контенту относятся элементы, который специально разработаны для взаимодействия с пользователем.
Явный контент: Контент считается явным, когда он не скрыт и не является пустым, это контент, который отображен и предметен. У элементов потокового или фразового контента должен быть хотя бы один явный узел.
Контент форм: Контент форм включает в себя элементы, у которых есть владелец формы, обозначенный атрибутом form. Владелецем формы является либо элемент form либо элемент, id которого указан в атрибуте form.
Подробней: https://developer.mozilla.org/ru/docs/Web/Guide/HTML/Content_categories

Отличие i от em и strong от b т. д.?

Следует отметить, что теги b и strong, также как i и em, несмотря на сходный результат, не совсем эквивалентны и заменяемы. Первый тег b — относится к тегам физической разметки и устанавливает жирный текст, а тег strong — является тегом логической разметки и определяет важность помеченного текста. Такое разделение тегов на логическое и физическое форматирование изначально предназначалось, чтобы сделать HTML универсальным, в том числе не зависящим от устройства вывода информации. Теоретически, если воспользоваться, например, речевым браузером, то текст, оформленный с помощью тегов b и strong, будет отмечен по-разному. Однако получилось так, что в популярных браузерах результат использования этих тегов равнозначен.

Можно ли вложить p в другой такой же p? Можно ли вложить div в p?

Синтаксически div и p внутри p является недопустимым во всех стандартах HTML. Более того, при использовании соответствующего парсера HTML невозможно разместить элемент div внутри p в DOM, потому что открывающий тег div автоматически закрывает элемент p.

Какие теги запрещены в html5? (хотя бы 3, не страшно если ни одного)

<applet> <ins> <col />, <colgroup> <area /> <basefont /> <center> <bdo> <dir> <font> <frame /> <frameset> <iframe> <isindex> <noframes> <strike> <u> <tbody> <tfoot> <thead>

Чем отличается класс (class) от идентификатора (id) в HTML?

Идентификаторы:
В коде документа каждый идентификатор уникален и должен быть включён лишь один раз.
Имя идентификатора чувствительно к регистру.
Через метод getElementById можно получить доступ к элементу по его идентификатору и изменить свойства элемента.
Стиль для идентификатора имеет приоритет выше, чем у классов.
Классы:
Классы могут использоваться в коде неоднократно.
Имена классов чувствительны к регистру.
Классы можно комбинировать между собой, добавляя несколько классов к одному тегу.
Какое событие сработает при потери фокуса элементом формы?

Событие onblur возникает при потере элемента фокуса. Это обычно происходит, если щелкнуть на другой элемент текущего документа. Событие onblur противоположно по своему действию событию onfocus.

Подробенй:
http://htmlbook.ru/html/attr/onBlur
https://developer.mozilla.org/ru/docs/Web/Events/blur
Для чего существует тег q?

Тег q используется для выделения в тексте цитат. Содержимое контейнера автоматически отображается в браузере в кавычках.

Подробней: http://htmlbook.ru/html/Q

Что такое "Якорь"?

Якорем называется закладка с уникальным именем на определенном месте веб-страницы, предназначенная для создания перехода к ней по ссылке. Якоря удобно применять в документах большого объема, чтобы можно было быстро переходить к нужному разделу.

Подробней: http://htmlbook.ru/samhtml/yakorya

Расскажите про тег keygen

Используется для генерации пары ключей — закрытого и открытого. Когда форма отправляется на сервер, закрытый ключ сохраняется на локальном компьютере, а открытый ключ передается вместе с формой. Сами ключи необходимы для шифрования и расшифровки данных, создания и проверки цифровой подписи.

Подробней:
http://htmlbook.ru/html/KEYGEN
https://developer.mozilla.org/en-US/docs/Web/HTML/Element/keygen
Для олдскульных ребят, существует ли тег basefont и за что он отвечает?

Не существует, ни за что не отвечает

Существовал, убран из html5

Тег basefont предназначен для задания шрифта, размера и цвета текста по умолчанию. Указанные значения будут использоваться во всем документе за исключением тега font, в котором можно переопределить параметры оформления текста. Допускается использование тега в контейнере head или body, причем несколько раз. Это позволяет изменять вид шрифта для части документа.

Подробней: http://htmlbook.ru/html/basefont

About
Вопросы с ответами для собеседований фронта, собирал для себя, чтобы не потерять

Resources
 Readme
 Activity
Stars
 123 stars
Watchers
 2 watching
Forks
 20 forks
Report repository
Releases
No releases published
Packages
No packages published
Contributors
1
@yofi2tofi
yofi2tofi
Footer
© 2026 GitHub, I

Junior Front-end Developer Interview Questions
01

Explain what the "box model" CSS is and the layout components that make it up?
The CSS box model is a rectangular layout paradigm for HTML elements. It consists of the following elements:

Content - The content of the field, which reflects all images and text

Padding - the transparent area that surrounds the content (the amount of space between the border and the content)

Border - border surrounding the padding (if any) and content

Margin - is the transparent area around the border (the amount of space between the border and any neighboring elements)

02

What are some of the main benefits of REST web services?
Here are some of the main benefits of REST web services:

The learning curve is very simple because it works based on HTTP protocols
Supports several data transfer technologies such as ext, XML, JSON, image, etc.
Has no predefined contract between server and client, so loosely coupled implementation
REST is a very lightweight protocol
REST methods can be easily tested in the browser
03

What is Cross-Site Scripting (XSS)?
Cross-Site Scripting (XSS) is an attack that occurs when an attacker uses a web application to send malicious code to a different end-user. This code is usually in the form of a browser-side script.

The page provided by the server when someone requests it is unaltered. The XSS attack exploits weaknesses in the page that include a variable submitted in a request to show up in the raw form in the response. The page will only display what was sent along with this request.

04

What is "strict mode"?
Strict Mode is a new ECMAScript 5 feature that allows you to specify a program or function in n a "strict" operating context. This strict context prevents some actions and also throws more exceptions.

Here's an example of such a strict mode:

// Non-strict code ...

(Function () {

  "Use strict";

  // Define your library strictly ...

}) ();

// Non-strict code ...

05

What is a CSS rule?
Web browsers often apply the CSS rule to documents to influence their content. This CSS rule is formed from several things:

A selector that selects from a list of elements to which you want to apply updated property values.
A set of properties, which have values ​​set to update how the HTML content is displayed
It is also worth adding that the set of CSS rules contained in the stylesheet determines how the web page should look.

06

What is meant by the KISS principle?
KISS, a backronym for "keep it simple, stupid" is a design principle that was invented by the U.S. Navy in 1960. The KISS principle states that almost all systems work best when they remain simple rather than made complicated. That is why design should always be kept simple and avoid unnecessary complexity.

07

What is the difference between span and div?
Div is a block element
Span is an inline element
Placing a block element inside an inline element is illegal. Although a div can have a p tag, and a p tag can have a span, a span can't have a div or p tag inside.

08

When would you use ReactJS?
This open-source front-end JavaScript library is primarily used for the front-end development of one-page applications as well as for managing the view layer for mobile and web apps.

09

What is polymorphism?
In the object-oriented programming paradigm, Polymorphism is the ability of an action or method to perform different functions based on the object it’s acting upon. Some aspects of Polymorphism include overloading, overriding and dynamic method binding.

10

When would you use jQuery?
jQuery is a good option for simple tasks. It has several advantages over other frameworks.

easy to expand
Easy to use and learn
Easy to use for DOM manipulation and traversal.
Cross-browser support (IE 6.0+, FF 1.5+, Safari 2.0+, Opera 9.0+)
AJAX Capabilities
Ways to change and apply CSS, and create animations
Lots of plug-ins for all kinds of needs
Mid Front-end Developer Interview Questions
01

What does SOLID mean? What are its principles?
S - Single-responsibility principle. A class should have only one job

O - Open-closed principle. Objects must be open for extension but closed for modification.

L - Liskov substitution principle. Let q (x) be a property provable about objects of x of type T. Then q (y) should be provable for objects y of type S where S is a subtype of T.

I - Interface segregation principle. You cannot force clients to implement an interface that they are not using.

D - Dependency Inversion Principle. Entities must depend on abstractions, not on concretions.

02

What is ClickJacking?
ClickJacking is a malicious technique that is used to trick users into clicking on a certain element that is in reality different from the element that is presented to a user. ClickJacking is used to illegally obtain personal information or to take control over someone's device.

03

What is load balancing and how does the front-end load balancer work?
Load balancing is a method for allocating capacities across numerous machines or clusters. A front-end load balancer is a server that uses a virtual IP address to accept requests from a client; it ensures that no single machine is overloaded or underloaded. A load balancer determines the most suitable reverse proxy service based on the specified scheduling algorithm and forwards the requests to the needed reverse proxy server.

04

What is Coercion in JavaScript?
Coercion is a JavaScript conversion between two different built-in types. There are two forms of coercion: explicit and implicit.

Here is an example of explicit coercion:

var a = "42";

var b = Number (a)

a; // "42"

b; // 42 - the number!

Here's an example of an implicit coercion:

var a = "42";

var b = a * 1; // "42" implicitly coerced to 42 here

a; // "42"

b; // 42 - the number!

05

What is a Mixin?
Mixin is one of the blocks of code with which we can group CSS declarations. We can reuse these declarations on the site.

Here's how to define Mixin:

@mixin grid ($ flex: true / * default argument * /) {

@if $ flex {

        @include flex;

} @Else {

        display: block;

}

}

Here's what you need to do to use Mixin:

/ * Scss * /

.row {

    @include grid (true);

}

/ * Css * /

.row {

    display: -webkit-flex;

    display: flex;

}

06

What's the difference between "resetting" and "normalizing" CSS? Which one is better to use and why?
Resetting - designed to remove all default browser styles on elements. Margins, padding, and fonts are reset to the same.

Normalizing - keeps styles that are useful rather than dumping everything. It can also fix all errors for common browser dependencies.

It's better to use resetting if you are working on a very unconventional website design and need to create a lot of your style.

07

What is the semantic difference between PUT and POST?
PUT puts a file or resource at a particular URI and exactly at that URI. If there is already a file in this URI, then PUT will replace it.

POST sends data to a specific URI and waits for a file or resource in that URI to process the request. At this point, the server decides what to do with the data in the context of that resource.

08

What is a Grid System?
A grid system is a framework that allows developers to arrange content both vertically and horizontally. These systems include two main elements - rows and columns.

Examples of Grid Systems are:
Simple grid
Pure
Flexbox Grid
Bootstrap
Foundation
09

When would you use AngularJS vs jQuery?
jQuery is the only tool that can solve a single specific problem like dom manipulation, while AngularJS is a complete web framework that includes different kinds of tools for solving different problems like routing, model bindings, dom manipulation, etc. JqLite (a subset of jQuery) is part of the AngularJS and you use it to solve the dom-manipulation thing.

10

What is webpack?
Webpack is an open-source JavaScript module bundler. Its main purpose is to put all of the assets, including Javascript, images, fonts, and CSS, in a dependency graph. Webpack gives control over how to treat different assets it encounters.

Senior Front-end Developer Interview Questions
01

Explain the Prototype Design Pattern
The Prototype Pattern creates new objects. But the peculiarity is that instead of creating non-initialized objects, it returns objects that are initialized with values ​​ copied from a prototype - or sample - object.

One example is the initialization of business objects with values ​​that match the default values ​​in the database. Classical languages ​​rarely use the Prototype pattern, but JavaScript being a prototypal language uses this pattern in the construction of new objects and their prototypes.

02

What is Closure in JavaScript?
The closure is a function that is defined inside another function and which also has access to a variable. This variable is declared and defined in the parent function scope.

The closure has access to the variable in three scopes:

Variable declared in his scope
Variable declared in parent function scope
Variable declared in the global namespace
An example of such a closure:

var globalVar = "abc";  // Parent self invoking function

(Function outerFunction (outerArg) {// begin of scope outerFunction  // Variable declared in outerFunction function scope

var outerFuncVar = 'x';   // Closure self-invoking function

(Function innerFunction (innerArg) {// begin of scope innerFunction  // variable declared in innerFunction function scope

var innerFuncVar = "y";

console.log (

"OuterArg =" + outerArg + "\ n" + "OuterFuncVar =" + outerFuncVar + "\ n" + "InnerArg =" + innerArg + "\ n" + "InnerFuncVar =" + innerFuncVar + "\ n" + "GlobalVar =" + globalVar)  // end of scope innerFunction

}) (five); // Pass 5 as parameter  // end of scope outerFunction

}) (7); // Pass 7 as parameter

03

What is Content Security Policy?
Content Security Policy (CSP) is an HTTP header that allows operators to monitor and control where resources can be loaded onto their website. Using this header is one of the best ways to prevent cross-site scripting (XSS) vulnerabilities. Since there are difficulties with retrofitting CSPs on all existing websites, CSP is a must for all new websites, and it is highly recommended to implement CSPs on all existing high-risk sites.

The biggest benefit of CSP is disabling the use of unsafe-inline JavaScript. Inline JavaScript means that data that users enter incorrectly on the site can generate code that will be interpreted by the browser like JavaScript. By using CSP to disable inline JavaScript, you can effectively eliminate almost all XSS attacks against your site.

04

What are IIFEs?
This stands for Immediately-Invoked Function Expression. This pattern is often used to avoid polluting the global namespace because all the variables used inside the IIFE are not visible outside its scope.

Example using IIFEs:

(Function IIFE () {

console.log ("Hello!");

}) ();

// "Hello!"

05

How will you handle HTTP errors in Angular applications?
You can work with HTTP errors if you attach a "catch" to your request. For example:

import {Injectable} from '@ angular / core';

import {Observable} from 'rxjs / Observable';

import {HttpClient} from '@ angular / common / http';

import 'rxjs / add / observable / throw';

@Injectable ()

export class Client {

constructor (

public http: HttpClient

) {}

public fetch () {

return this.http.post ('https://thisurliswrong123123.com ", {})

.catch ((err) => {

// Do messaging and error handling here

return Observable.throw (err)

});

}

}

06

Explain tsconfig.json file
This file is used to give the options about TypeScript used for the Angular project.

{

"CompilerOptions" {

"Target": "es5",

"Module": "commonjs",

"ModuleResolution": "node",

"SourceMap": true,

"EmitDecoratorMetadata": true,

"ExperimentalDecorators": true,

"Lib": ["es2015", "dom"],

"NoImplicitAny": true,

"SuppressImplicitAnyIndexErrors": true

}

}

07

What components are in Angular?
Each program consists of components. Each component is a logical boundary of functionality for the application. Below we have given what the component consists of:

Class - This is like a C or Java class which consists of properties and methods

Metadata - This is used to decorate the class and extend the functionality of the class

Template - This is used to define the HTML view which is displayed in the application

08

How to use a function A class?
function functionName (name) {

this.name = name;

}

// Creating an object

var functionName = new functionName ("WTEN")

console.log (functionName.name) // WTEN

09

Why is the W3c Standard Code needed?
One of the main goals of such standards is to provide cross-platform compatibility and more compact file sizes. These standards aim to decouple "content" from "formatting" by implementing CSS. It eases maintenance and development.

10

What is the difference between == and ===?
The 3 equal signs mean "equality without type coercion". Using the triple equals, the values ​​must be equal in type as well.

== is equal to

=== is exactly equal to (value and type)

0 == false // true

0 === false // false, because they are of a different type

1 == "1" // true, auto type coercion

1 === "1" // false, because they are of a different type

42 реальных вопроса для собеседования на должность фронтенд разработчика
Готовитесь к собеседованию на фронтенд разработчика? Эта статья — ваш гид по 40 реальным вопросам, которые задают на интервью в 2026 году. От основ JavaScript и React до продвинутых тем: TypeScript, Server Components, производительность, AI-инструменты и Edge Computing.

К
Кодик

Автор

20 янв. 2026 г.
13 мин чтения

0

Поделиться
В 2026 году фронтенд собеседования в российских IT-компаниях превратились в что-то среднее между экзаменом по квантовой физике и игрой "Кто хочет стать миллионером". Только вместо звонка другу у тебя есть 5 секунд, чтобы объяснить, чем useEffect отличается от useLayoutEffect, и почему это вообще кого-то должно волновать.


🎯 Категория: "Базовый уровень" (aka "это должны знать все, но половина не знает")
1. Что такое фронтенд разработка вообще?
Зачем спрашивают: Проверяют, понимаете ли вы масштаб своей профессии или думаете, что это просто "делать кнопочки красивыми".

Нормальный ответ: Фронтенд — это всё, что видит и с чем взаимодействует пользователь. HTML, CSS, JavaScript, фреймворки, производительность, доступность, адаптивность... и да, иногда даже "кнопочки красивые".

Реальность 2026: Фронтенд давно перестал быть просто версткой. Теперь это целая архитектура с SSR, edge computing, AI-интеграциями и микрофронтендами. В общем, "просто кнопочки" — это было в 2015.

2. В чем разница между == и ===?
Зачем спрашивают: Классика жанра. Если не знаешь — иди учить основы.

Короткий ответ:

== сравнивает значения с приведением типов (может привести "5" к 5)

=== строгое сравнение (типы должны совпадать)

Мем-комментарий: Использование == в 2026 — это как носить крокосы на собеседование. Технически можно, но зачем?

3. Что такое DOM?
Зачем спрашивают: Без этого знания во фронтенде делать нечего.

Ответ: Document Object Model — древовидная структура представления HTML-документа. JavaScript манипулирует DOM, чтобы изменять страницу динамически.

Актуально в 2026: Теперь еще спрашивают про Virtual DOM (React), Signals (Solid/Angular), и как это всё оптимизирует рендеринг. Потому что просто DOM — это слишком просто.

4. Объясните позиционирование в CSS: relative, absolute, fixed, sticky
Зачем спрашивают: Проверяют, понимаете ли вы, как элементы ведут себя на странице.

Быстрая шпаргалка:

relative — сдвигается от своей обычной позиции, но место резервируется

absolute — выдергивается из потока, позиционируется относительно ближайшего positioned родителя

fixed — прилипает к окну браузера, не скроллится

sticky — гибрид: ведёт себя как relative, пока не достигнет точки прилипания, тогда становится fixed

Фишка 2026: В эпоху CSS Container Queries и CSS Grid, position: absolute используется всё реже. Но его всё равно спрашивают 🤷‍♂️

🔥 100 000+ учеников уже с нами
Устал читать теорию?
Пора кодить!
Кодик — приложение, где ты учишься программировать через практику. AI-наставник, интерактивные уроки, реальные проекты.

🤖
AI 24/7
🎓
Сертификаты
💰
Бесплатно
🚀 Начать учиться
Присоединились сегодня
К
Кодик

★★★★★
4.9
Курсов
30+
Заданий
15 000+
Учеников
100K+
🔥 Категория: "JavaScript — язык, который всех бесит, но все используют"
5. Что такое замыкание (closure)?
Зачем спрашивают: Потому что это фундаментальная концепция JS, и без неё никуда.

Объяснение для людей: Функция "запоминает" переменные из внешней области видимости, даже когда эта область уже завершилась.

function createCounter() {
  let count = 0;
  return function() {
    count++;
    return count;
  }
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
Где используется в реале: Приватные переменные, обработчики событий, хуки React... везде.

6. В чем разница между null и undefined?
Быстро:

undefined — переменная объявлена, но значение не присвоено

null — программист явно указал "здесь ничего нет"

Философский вопрос 2026: Почему typeof null === 'object'? Ответ: баг в JavaScript, который теперь исторический и его уже не исправить 😅

7. Что такое Event Loop?
Зачем спрашивают: Проверяют понимание асинхронности в JavaScript.

Объяснение без боли:

JavaScript однопоточный. Event Loop — это механизм, который позволяет выполнять асинхронный код:

Call Stack выполняет синхронный код

Асинхронные операции (setTimeout, fetch) отправляются в Web APIs

Когда готовы — попадают в очередь (Task Queue)

Event Loop проверяет: Call Stack пустой? → Берёт из очереди и выполняет

Тренд 2026: Теперь еще нужно знать про microtasks (Promises) vs macrotasks (setTimeout). Потому что одного event loop уже мало 🙃

8. var, let, const — в чём разница?
Коротко и ясно:

var — старая школа, function scope, hoisting, проблемы

let — block scope, можно переприсвоить

const — block scope, нельзя переприсвоить (но объект можно мутировать!)

Правило 2026: Используй const по умолчанию, let когда нужно, var не используй вообще.

⚛️ Категория: "React — потому что без него никуда в 2026"
9. Что такое React Hooks и зачем они нужны?
Контекст: До хуков были классовые компоненты. Они работали, но код был многословным.

Хуки в 2026: Стандарт индустрии. Основные:

useState — локальное состояние

useEffect — побочные эффекты (API, подписки, DOM)

useContext — доступ к контексту

useRef — ссылки на DOM или сохранение значений

useMemo / useCallback — оптимизация

useReducer — сложная логика состояния

Новинка 2026: React Compiler (React Forget) автоматически оптимизирует код, так что ручная мемоизация нужна реже. Но на собесах про неё всё равно спрашивают!

10. Правила использования хуков
Два железных правила:

Вызывай хуки только на верхнем уровне (не в циклах, условиях, вложенных функциях)

Вызывай хуки только в React-компонентах или кастомных хуках

Почему: React отслеживает порядок вызова хуков. Если он меняется — всё ломается.

11. useEffect vs useLayoutEffect — в чем разница?
Вопрос-ловушка 2026:

useEffect выполняется после рендера (асинхронно)

useLayoutEffect выполняется до отрисовки в браузере (синхронно)

Когда использовать useLayoutEffect: Когда нужно измерить DOM или сделать изменения до того, как пользователь что-то увидит (чтобы не было "мерцания").

В 99% случаев: Нужен обычный useEffect.

12. Что такое Virtual DOM?
Простыми словами: Легковесная копия реального DOM в памяти. React сравнивает (diff) старый Virtual DOM с новым, вычисляет минимальные изменения и обновляет только их в реальном DOM.

Почему это важно: Прямая работа с DOM медленная. Virtual DOM ускоряет процесс.

Альтернативы в 2026: Svelte компилирует всё в vanilla JS без Virtual DOM, Solid.js использует fine-grained reactivity (Signals). Но React пока доминирует в России.

13. Как работает useState?
Базово:

const [count, setCount] = useState(0);
Что происходит:

useState(0) инициализирует состояние

Возвращает массив: [текущее значение, функция обновления]

При вызове setCount компонент перерендеривается

Нюанс: Обновление состояния асинхронно! setCount(count + 1) не сразу меняет count.

Functional update (важно!):

setCount(prev => prev + 1); // Надёжнее
14. Что такое Context API?
Проблема: Пробрасывать props через 10 уровней компонентов — боль.

Решение: Context API позволяет "телепортировать" данные напрямую потребителям.

Когда использовать: Темы, авторизация, язык интерфейса.

Когда НЕ использовать: Для всего состояния приложения. Для сложной логики лучше Redux Toolkit, Zustand или Jotai.

15. Объясните lifecycle компонента
В классовых компонентах: componentDidMount, componentDidUpdate, componentWillUnmount

В функциональных компонентах с хуками:

useEffect(() => {
  // componentDidMount + componentDidUpdate
  
  return () => {
    // componentWillUnmount (cleanup)
  };
}, [deps]); // Зависимости определяют, когда запускать
Пустой массив зависимостей []: Сработает только при монтировании (аналог componentDidMount).

🎨 Категория: "CSS — потому что центрировать div всё еще сложно"
16. Flexbox vs Grid — когда что использовать?
Flexbox: Одномерные лейауты (строки или столбцы)

.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
Grid: Двумерные лейауты (строки И столбцы одновременно)

.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
Правило 2026: Используй Grid для структуры страницы, Flexbox для компонентов внутри.

17. Что такое CSS Variables (Custom Properties)?
Суть: Переменные в CSS, которые можно переиспользовать.

:root {
  --primary-color: #3498db;
  --spacing: 16px;
}

.button {
  background: var(--primary-color);
  padding: var(--spacing);
}
Преимущества в 2026:

Легко менять темы (dark mode)

Можно манипулировать через JavaScript

Нативная поддержка браузеров

18. Как оптимизировать производительность CSS?
Актуальные советы 2026:

Critical CSS: Инлайнить критичный CSS в <head>, остальное грузить асинхронно

Минификация и сжатие

Avoid CSS in JS в runtime: Используй решения с compile-time (StyleX от Meta, Tailwind)

Container Queries: Вместо медиазапросов для адаптива компонентов


⚡ Категория: "Производительность — или как не сделать сайт тормозом"
19. Что такое Core Web Vitals?
Google в 2026 еще строже к производительности:

LCP (Largest Contentful Paint): Время загрузки основного контента (цель: < 2.5с)

INP (Interaction to Next Paint): Заменил FID, измеряет отзывчивость (цель: < 200ms)

CLS (Cumulative Layout Shift): Стабильность визуальной части (цель: < 0.1)

Почему важно: Влияет на SEO и конверсию.

20. Lazy Loading — что и как?
Изображения:

<img src="image.jpg" loading="lazy" alt="описание">
Компоненты React:

const HeavyComponent = lazy(() => import('./HeavyComponent'));

<Suspense fallback={<div>Загрузка...</div>}>
  <HeavyComponent />
</Suspense>
Тренд 2026: Next.js делает это автоматически для страниц и компонентов.

21. Code Splitting — как и зачем?
Проблема: Один огромный bundle грузится долго.

Решение: Разбить код на чанки, грузить по требованию.

Webpack/Vite делают это автоматически:

import('./module').then(module => {
  // используем модуль
});
React + Next.js 2026: Всё из коробки с app router и server components.

22. Мемоизация в React: useMemo, useCallback, React.memo
Когда использовать:

React.memo: Оборачивает компонент, предотвращает ререндер если props не изменились

const ExpensiveComponent = React.memo(function Component({ data }) {
  // ...
});
useMemo: Кэширует результат вычислений

const expensiveValue = useMemo(() => {
  return computeExpensiveValue(a, b);
}, [a, b]);
useCallback: Кэширует функцию

const handleClick = useCallback(() => {
  doSomething(a, b);
}, [a, b]);
Важно в 2026: Не оптимизируй преждевременно! React Compiler скоро всё это сделает автоматически.

🌐 Категория: "Современный стек — AI, TypeScript и серверные штуки"
23. TypeScript — зачем он нужен?
Короткий ответ: Статическая типизация для JavaScript. Меньше багов, лучше автодополнение, легче рефакторить.

Статистика 2026: TypeScript стал стандартом в российских IT-компаниях. 80%+ новых проектов используют TS.

На собесе могут спросить:

Что такое interface vs type

Как работают Generics

Что такое Union Types и Type Guards

24. Server Components в React — что это?
Новинка React 18+, популярность взлетела в 2026:

Компоненты рендерятся на сервере

Меньше JavaScript отправляется клиенту

Доступ к базе данных напрямую из компонента

Пример (Next.js App Router):

async function ProductPage({ id }) {
  const product = await db.products.findById(id); // прямо в компоненте!
  return <div>{product.name}</div>
}
Преимущества: Быстрее загрузка, меньше бандл, лучше SEO.

25. Edge Computing — что и зачем?
Идея: Выполнять код на edge-серверах (ближе к пользователю), а не на одном центральном сервере.

Преимущества:

Меньше latency (задержка)

Лучше для пользователей из разных регионов России

Экономия ресурсов

Примеры: Cloudflare Workers, Vercel Edge Functions, Yandex Cloud Functions.

На собесе 2026: Спрашивают о понимании архитектуры и когда это нужно.

26. AI в разработке — как используете?
Реальность 2026: AI-инструменты стали частью workflow в российских компаниях.

Популярные инструменты:

GitHub Copilot — автодополнение кода

Cursor / Windsurf — AI IDE

ChatGPT / Claude / Яндекс GPT — объяснение кода, отладка, генерация

Различные российские AI-ассистенты

Что могут спросить:

Как AI помогает в работе?

Какие ограничения AI-кода видите?

Как проверяете качество AI-генерированного кода?

Важно: AI — это инструмент, не замена понимания основ.

🔧 Категория: "Инструменты и экосистема"
27. npm vs yarn vs pnpm — разница?
Все — пакетные менеджеры:

npm: Стандарт, идёт с Node.js

yarn: Быстрее, лучше кэширование (Yarn 2+ ещё быстрее, но спорно)

pnpm: Самый экономный по дискам (использует symlinks), супербыстрый

Тренд 2026: pnpm набирает популярность в монорепозиториях российских компаний.

28. Webpack vs Vite vs Turbopack — что выбрать?
Webpack: Старый добрый, гибкий, но медленный на больших проектах.

Vite: Использует ES modules для dev-режима → мгновенный запуск. esbuild для продакшена.

Turbopack: Новый сборщик от Vercel (Next.js), написан на Rust, ещё быстрее Vite.

Вывод 2026: Vite — стандарт для новых проектов. Turbopack набирает обороты.

29. Что такое monorepo и зачем он нужен?
Monorepo: Один репозиторий для нескольких пакетов/приложений.

Инструменты: Turborepo, Nx, Lerna.

Преимущества:

Общий код между проектами

Единая версионность

Легче делать кросс-проектные изменения

Когда использовать: Большие команды (как в Яндексе, VK), микрофронтенды, дизайн-системы.

🧪 Категория: "Тестирование — потому что 'works on my machine' не работает"
30. Виды тестирования во фронтенде
Unit тесты: Тестируют отдельные функции/компоненты (Jest, Vitest)

Integration тесты: Тестируют взаимодействие между частями (React Testing Library)

E2E тесты: Тестируют весь флоу пользователя (Playwright, Cypress)

Тренд 2026: Playwright вытесняет Cypress. Vitest заменяет Jest в Vite-проектах.

31. React Testing Library — основные принципы
Философия: Тестируй так, как пользователь взаимодействует с приложением.

Плохо:

wrapper.find('.button').simulate('click'); // тестирование деталей реализации
Хорошо:

const button = screen.getByRole('button', { name: /submit/i });
fireEvent.click(button);
На собесе спросят: Как тестируешь хуки, асинхронный код, mocking API.

🎭 Категория: "Поведенческие вопросы и soft skills"
32. Расскажите о проекте, которым гордитесь
Что хотят услышать:

Проблема, которую решали

Технологии и подход

Ваша роль

Результат (метрики!)

Структура STAR: Situation → Task → Action → Result

Пример:

"Дашборд в CRM загружался 5 секунд. Я профилировал через Chrome DevTools, нашёл тяжёлые зависимости, сделал code splitting и lazy loading. Время загрузки упало до 2 секунд, engagement вырос на 18%."

33. Как вы остаетесь в курсе трендов?
Хорошие ответы 2026:

Читаю обновления фреймворков (React blog, Next.js changelog)

Смотрю доклады с конференций (HolyJS, FrontendConf, React Summit)

Участвую в open-source

Пробую новые технологии в pet-проектах

Подписан на девблоги и рассылки

Состою в Telegram-сообществах разработчиков

🚀 Кстати, о Telegram-сообществах!
Если вы хотите не просто читать статьи раз в месяц, а каждый день видеть полезный контент по программированию в своей ленте — присоединяйтесь к сообществу Кодик в Telegram!

Там выходят краткие посты, разборы задач, новости из мира фронтенда и бэкенда, а ещё есть общение с другими разработчиками. Это как витамины для мозга программиста — каждый день по чуть-чуть, но эффект накопительный 💪

34. Опишите сложную техническую проблему, которую решали
Что проверяют: Навыки решения проблем и техническую глубину.

Схема ответа:

Проблема: Что сломалось, симптомы

Диагностика: Как искали причину (инструменты, гипотезы)

Решение: Что сделали

Итог: Результат и что узнали

Бонус: Упомяните, что документировали решение для команды.

🚀 Категория: "Продвинутый уровень — вопросы для мидлов и сеньоров"
35. Микрофронтенды — что это и когда использовать?
Идея: Разбить фронтенд на независимые части, которые разрабатываются отдельными командами.

Подходы:

Module Federation (Webpack 5)

Iframe (старая школа, но работает)

Web Components

Когда НЕ использовать: Маленькие команды, простые приложения.

Когда использовать: Большие команды (Яндекс, VK, Сбер), легаси-системы, нужна независимость деплоя.

Тренд 2026: Паттерн зреет в российских компаниях, но не для всех. Осторожно с хайпом!

36. Доступность (a11y) — что важно знать?
Основы:

Семантичный HTML (используй правильные теги)

ARIA-атрибуты когда нужно

Клавиатурная навигация (всё должно работать без мыши)

Контраст цветов (WCAG AA/AAA стандарты)

Альт-тексты для изображений

Инструменты: Lighthouse, axe DevTools, WAVE.

Важно в России 2026: Для госпроектов и крупных компаний accessibility становится обязательным требованием.

37. Как бы вы спроектировали систему аутентификации?
Проверка: Архитектурное мышление.

Ключевые аспекты:

JWT vs Session-based auth

Refresh tokens

Хранение токенов (httpOnly cookies vs localStorage)

CSRF защита

OAuth / Social login (ВКонтакте, Яндекс ID, Telegram)

Модный ответ 2026: NextAuth.js, Clerk, Supabase Auth — готовые решения вместо написания с нуля.

38. State management в 2026 — что использовать?
Варианты:

Redux Toolkit — всё еще мощный для сложных приложений

Zustand — легковесный, простой API

Jotai / Recoil — atomic state

TanStack Query (React Query) — для серверного состояния

Context API — для простых случаев

Тренд: Разделяйте client state (UI) и server state (данные с API). Для второго используйте TanStack Query.

39. Что такое hydration в SSR/SSG?
SSR (Server-Side Rendering): Сервер отдаёт готовый HTML.

Hydration: React "оживляет" этот HTML на клиенте, прикрепляя обработчики событий.

Проблема: Если клиентский код не совпадает с серверным — hydration error.

Новинка 2026: Partial Hydration и Islands Architecture (Astro) — гидратация только интерактивных частей.

40. Performance Optimization — чек-лист
Checklist для собеседования:

✅ Lazy loading (изображения, компоненты, routes)

✅ Code splitting (динамические импорты)

✅ Tree shaking (удаление неиспользуемого кода)

✅ Мемоизация (React.memo, useMemo, useCallback)

✅ Debounce / Throttle (поиск, скролл)

✅ Виртуализация длинных списков (react-window, TanStack Virtual)

✅ Оптимизация изображений (WebP, AVIF, responsive images)

✅ CDN для статики

✅ HTTP/2, HTTP/3

✅ Prefetch / Preload критичных ресурсов

🎯 Категория: "Хитрые вопросы — ловушки и задачки"
41. Что выведет этот код?
console.log(1);
setTimeout(() => console.log(2), 0);
Promise.resolve().then(() => console.log(3));
console.log(4);
Ответ: 1, 4, 3, 2

Почему:

Синхронный код выполняется первым: 1, 4

Microtasks (Promises) выполняются до macrotasks (setTimeout)

Поэтому: Promise (3), потом setTimeout (2)

Это классика для проверки понимания Event Loop.

42. В чем разница между map() и forEach()?
forEach: Просто итерирует, ничего не возвращает.

map: Создаёт новый массив на основе преобразования.

const numbers = [1, 2, 3];

numbers.forEach(n => console.log(n * 2)); // выводит, но не сохраняет

const doubled = numbers.map(n => n * 2); // [2, 4, 6]
Правило: Нужен новый массив → map. Просто сделать что-то с каждым элементом → forEach.

🎓 Подведём итоги
Фронтенд собеседования в российских IT-компаниях в 2026 — это микс:

Базовых знаний (HTML, CSS, JavaScript)

Фреймворков (React доминирует, но знание альтернатив — плюс)

Производительности и оптимизации

Современных инструментов (TypeScript, Vite, AI-ассистенты)

Архитектурного мышления (когда что использовать и почему)

Soft skills (коммуникация, решение проблем, работа в команде)

📚 Как готовиться эффективно?
Понимай основы глубоко — без них никуда

Практикуй код — не просто читай, пиши

Делай pet-проекты — применяй знания на практике

Изучай реальные кодбейзы — читай код популярных библиотек

Mock interviews — тренируй формат собеседования

🚀 А хотите прокачивать фронтенд системно и с удовольствием?
Тогда вам точно нужно попробовать Кодик — приложение для изучения программирования с практикой прямо в телефоне!

Почему Кодик крут:
✅ Практика с первой минуты — не просто теория, а настоящие задачи

✅ Интерактивные уроки — прям в приложении пишешь код и сразу видишь результат

✅ Удобно везде — в метро, в очереди, на диване — учись где угодно

✅ Структурированная программа — от основ до продвинутых тем

✅ Сообщество — в Telegram-канале делятся опытом, разбирают задачи, обсуждают тренды

👉 Скачай Кодик и начни кодить уже сегодня!
👉 Подписывайся на Telegram-канал — каждый день полезные посты, которые помогут не забывать материал и держать руку на пульсе фронтенд-трендов!

P.S.
Помни: На собеседовании не обязательно знать всё. Важнее показать:

Умение думать и решать проблемы

Готовность учиться

Понимание основ и способность их применять

Умение объяснять свои мысли

Даже если не знаешь ответ — рассуждай вслух. Интервьюеры ценят процесс мышления, а не только финальный ответ.

Удачи на собесах! 🚀 И помни: каждое собеседование — это опыт. Даже если не прошёл — ты узнал, что учить дальше.


40 Best Frontend Developer Interview Questions & Answers
By Jebasta

Jan 20, 2026 9 Min Read 10435 Views

(Last Updated)

Are you preparing for a front-end developer interview and wondering what kinds of questions to expect? Are you scared about where to go and how to prepare for these interviews? Worry not, we’ve got you covered!

Whether you’re a fresher trying to land your first role or a seasoned developer aiming for a senior position, interviewers often test your knowledge across a spectrum, from HTML and CSS basics to complex topics like React architecture, performance optimization, and JavaScript internals. 

This article breaks down 40 essential frontend developer interview questions and answers, categorized by difficulty level: Fresher, Intermediate, Advanced, and Scenario-based. Each section is designed to help you reinforce key concepts, sharpen your coding logic, and walk into your interview with clarity and confidence. So, without further ado, let us get started!

Quick Answer

If you’re preparing for a frontend developer interview, it’s best to study questions in a structured way and move through the levels step by step. Begin with easy HTML, CSS, and JavaScript basics. In the intermediate stage, focus on browser behavior, UI state, debugging, and asynchronous logic. The advanced level covers performance, JavaScript internals, design patterns, build tools, and React architecture. Finally, scenario-based questions help you apply all of this knowledge to real-world frontend problems.

Table of contents
Frontend Developer Interview Questions & Answers: Fresher Level
What is HTML, and how is it used in front-end development?
Can you explain what CSS is and why it's important in web design?
What is JavaScript, and why is it used in web development?
What is the difference between inline, internal, and external CSS?
How would you explain the difference between margin and padding in CSS?
How would you define responsive web design, and why is it important?
What are some well-known frontend frameworks or libraries, and how do they compare in use cases?
Can you explain the CSS box model and its components, and how it affects layout and design?
What strategies do you use for optimizing website performance, and what tools do you use for performance evaluation?
What is your approach to debugging code, and what tools or techniques do you use?
Frontend Developer Interview Questions & Answers: Intermediate Level
What is the difference between null and undefined in JavaScript?
Explain event delegation in JavaScript.
What are arrow functions, and how are they different from traditional functions?
What is the difference between var, let, and const in JavaScript?
What is the DOM and how do you manipulate it using JavaScript?
Explain the concept of Promises in JavaScript.
How does React differ from Vanilla JS?
What is the Virtual DOM?
How do you center a div both vertically and horizontally using CSS?
How do you pass data between components in React?
Frontend Developer Interview Questions & Answers: Advanced Level
What are closures in JavaScript?
What are debouncing and throttling in JavaScript?
How do you optimize the performance of a React app?
What is tree shaking in modern JavaScript?
What is the difference between server-side rendering (SSR) and client-side rendering (CSR)?
What is a Service Worker?
How does code splitting work in Webpack?
Write a function to check if a string is a palindrome.
What are hooks in React? Name a few and explain.
What is hydration in React?
Frontend Developer Interview Questions & Answers - Scenario Based
Your webpage takes 6–8 seconds to load on mobile devices. How would you investigate and fix the issue?
A user reports that the UI looks broken only on older browsers. How would you approach this issue?
Your React application freezes temporarily when navigating between pages. What steps would you take to diagnose the performance issue?
You’re asked to design a form with 20+ fields, validations, and conditional visibility. How do you organize and manage it efficiently?
A button works fine locally but doesn’t work on the production build. What debugging steps do you take?
You must implement dark mode and allow it to switch instantly without reloading the page. How would you structure it?
You see layout shifting as images load on the page. How do you prevent cumulative layout shift (CLS)?
Your app needs to support offline mode. How do you make it work smoothly?
You need to secure an API call in a frontend-only application. What would you do, knowing frontend code can’t hide secrets?
A feature works on low-speed 3G but fails on high-speed broadband. What could cause this paradox?
Conclusion
FAQs
How should I prepare for a frontend developer interview?
What are some common challenges faced during frontend interviews, and how can I overcome them?
How important are frontend frameworks in interviews, and which ones should I focus on?
Frontend Developer Interview Questions & Answers: Fresher Level
Frontend Developer Interview Questions & Answers: Fresher Level
If you’re just starting your journey into frontend development, interviewers will expect you to have a solid understanding of the fundamentals, from HTML and CSS to basic JavaScript and DOM concepts. 

This section focuses on core concepts, syntax familiarity, and simple logic-based questions that help assess your readiness for entry-level roles. Mastering these will build a strong foundation for your technical growth.

1. What is HTML, and how is it used in front-end development?
HTML, or HyperText Markup Language, is the backbone of web development. It provides the basic structure of web pages by using markup to denote text, links, and other content. HTML tags are used to define elements such as headings, paragraphs, and lists, which are essential for creating the structure of web pages.

2. Can you explain what CSS is and why it’s important in web design?
CSS, or Cascading Style Sheets, is used for styling the visual presentation of web pages. It allows developers to apply styles to web documents, such as colors, fonts, and layouts, making the user interface appealing and enhancing the user experience. CSS is important for creating a consistent look and feel across a website.

3. What is JavaScript, and why is it used in web development?
JavaScript is a high-level, interpreted scripting language used to build interactive and dynamic web applications.

Why it’s used:

Handle user interactions (clicks, form inputs)
Modify page content without reloading (DOM manipulation)
Communicate with servers (AJAX, Fetch API)
Built full apps (e.g., React, Vue, Angular)
4. What is the difference between inline, internal, and external CSS?
There are 3 ways to apply CSS to HTML, each with different use cases:

Inline CSS:  Applied directly on the element via the style attribute. Use only for quick testing or one-off styles.

html
<h1 style="color: red;">Hello</h1>
Internal CSS: Placed within <style> tags in the HTML <head>. Useful for small projects or page-specific styles.

html
<style>

  p {

    font-size: 16px;

  }

</style>
External CSS: Linked through a .css file. Best for maintainability, reuse, and larger projects.

html
<link rel="stylesheet" href="styles.css">
MDN
5. How would you explain the difference between margin and padding in CSS?
Margin is the space outside the border of an element, while padding is the space between an element’s border and its content. Visually, the margin creates space around elements, and padding increases the inner space of an element without affecting its size.

6. How would you define responsive web design, and why is it important?
Responsive web design is an approach to web design that makes web pages render well on a variety of devices and window or screen sizes. It’s important because it ensures that users have a good viewing experience no matter what device they’re using, improving accessibility and user satisfaction.

7. What are some well-known frontend frameworks or libraries, and how do they compare in use cases?
Popular frontend frameworks and libraries include React, Angular, and Vue.js. React is known for its virtual DOM and efficient rendering, Angular for its comprehensive framework that includes everything from testing to animation, and Vue.js for its simplicity and progressive framework approach. Each has its strengths and is chosen based on project requirements, team expertise, and specific use cases.

8. Can you explain the CSS box model and its components, and how it affects layout and design?
The CSS box model is a fundamental concept in web design and development, encompassing the layout of HTML elements. It consists of four components: content, padding, border, and margin. 

These components determine the space taken up by an element on a page and how it interacts with other elements. Understanding the box model is important for accurately positioning and styling elements.

9. What strategies do you use for optimizing website performance, and what tools do you use for performance evaluation?
Optimizing website performance can involve minifying CSS and JavaScript files, optimizing images, implementing lazy loading, etc. Tools like Google PageSpeed Insights, Lighthouse, and WebPageTest.org are commonly used to evaluate and provide insights into a website’s performance, offering actionable recommendations for improvement.

Read About Optimizing Website Performance: 9 Strategies for Faster Loading User Interfaces

10. What is your approach to debugging code, and what tools or techniques do you use?
Debugging involves systematically diagnosing and fixing coding errors. Common techniques include using console.log in JavaScript to output values to the console, employing breakpoints in developer tools to pause execution and inspect variables, and using linting tools to identify syntax errors and potential bugs.

Frontend Developer Interview Questions & Answers: Intermediate Level
Frontend Developer Interview Questions & Answers: Intermediate Level
As you move beyond the basics, interviews begin to test your hands-on experience, your understanding of browser behavior, and how well you apply JavaScript, React, and CSS concepts in real-world scenarios. 

This section covers questions that gauge your ability to write efficient code, manage UI state, debug problems, and work with asynchronous logic—all essential skills for mid-level developers.

11. What is the difference between null and undefined in JavaScript?
Both null and undefined represent the absence of a value, but they’re used in different contexts:

Undefined: A variable that has been declared but not assigned a value.

javascript

let x;

console.log(x); // undefined

null: A deliberate assignment indicating "no value" or "empty".

javascript

let x = null;

console.log(x); // null
Use Cases:

Use undefined for uninitialized values.
Use null when explicitly resetting or clearing values.
12. Explain event delegation in JavaScript.
Event delegation is a pattern where a single event listener is attached to a parent element instead of multiple children.

Why? Because events bubble up from the target element to ancestors. This improves performance and supports dynamically added elements.

Example:

html

<ul id="menu">

  <li>Home</li>

  <li>About</li>

</ul>

<script>

  document.getElementById("menu").addEventListener("click", function(e) {

    if (e.target.tagName === "LI") {

      console.log("Clicked:", e.target.innerText);

    }

  });

</script>
Benefits:

Fewer event listeners (better memory usage).
Supports dynamically created child elements.
13. What are arrow functions, and how are they different from traditional functions?
Arrow functions provide a concise syntax for writing functions and behave differently in terms of this context.

Syntax Comparison:

javascript

// Traditional function

function add(a, b) {

  return a + b;

}

// Arrow function

const add = (a, b) => a + b;
Key Differences:

Arrow functions do not have their own this.
Useful in callbacks (like map, forEach, or inside React components).
Example:

javascript

const person = {

  name: "Alex",

  greet: function() {

    setTimeout(() => {

      console.log(`Hello, ${this.name}`);

    }, 1000);

  }

};

person.greet(); // "Hello, Alex"
14. What is the difference between var, let, and const in JavaScript?
Keyword	Scope	Hoisting	Reassignable	Use Case
var	Function	Yes	Yes	Legacy code, avoid in ES6+
let	Block	No	Yes	Use for variable data
const	Block	No	No	Use for constants/immutables
Difference between var, let, and const
15. What is the DOM and how do you manipulate it using JavaScript?
DOM (Document Object Model) is the browser’s in-memory tree representation of your HTML page. You can read, modify, or delete elements dynamically using JavaScript.

✅ Common DOM APIs:

// Select element

const btn = document.getElementById("myBtn");

// Change text

btn.innerText = "Click Me";

// Add event

btn.addEventListener("click", () => alert("Clicked!"));
16. Explain the concept of Promises in JavaScript.
A Promise is a JavaScript object that represents the eventual completion or failure of an asynchronous operation.

Syntax:

javascript

const promise = new Promise((resolve, reject) => {

  const success = true;

  success ? resolve("Done!") : reject("Error!");

});
17. How does React differ from Vanilla JS?
React is a JavaScript library for building component-based UIs, while Vanilla JS means coding everything manually with plain JavaScript.

Feature	React	Vanilla JS
UI Structure	Component-based	DOM nodes/scripts
DOM Handling	Virtual DOM (efficient diffing)	Direct DOM manipulation
State Mgmt	useState, Context, Redux	Manual variable tracking
Productivity	Higher (with JSX, tooling)	Lower for complex apps
Differences between React and Vanilla JS
18. What is the Virtual DOM?
The Virtual DOM (VDOM) is an in-memory representation of the actual DOM used by frameworks like React to efficiently update the UI.

How it works:

React renders the UI to the Virtual DOM.
It compares (diffs) with the previous version.
Only the changed elements are updated in the real DOM (patching).
19. How do you center a div both vertically and horizontally using CSS?
There are multiple modern ways to center a div. The most flexible and widely used method is with Flexbox:

Using Flexbox:

css

.parent {

  display: flex;

  justify-content: center;

  align-items: center;

  height: 100vh;

}
HTML:

html

<div class="parent">

  <div class="child">Centered Box</div>

</div>
Other methods:

Using position: absolute with transform: translate(-50%, -50%)
Using CSS Grid (place-items: center)
20. How do you pass data between components in React?
React supports several methods to pass or share data across components:

Props (Parent → Child): Props are passed from a parent component to a child:

<Child message="Hello" />

Callback Functions (Child → Parent):  A parent passes a function to the child to receive data:

<Child onSend={handleData} />

Context API (Global Sharing): Ideal for app-wide themes, user info, etc.

State Management Tools (Redux, Zustand, Jotai):  For larger apps with complex data flows.

These intermediate questions help bridge the gap between beginner-level concepts and the more advanced architectural and performance optimization topics.

Frontend Developer Interview Questions & Answers: Advanced Level
Frontend Developer Interview Questions & Answers: Advanced Level
At the advanced level, you’re expected to demonstrate deep technical insight, architectural thinking, and the ability to optimize and scale applications. 

This section includes questions on performance tuning, design patterns, build tools, and advanced JavaScript concepts like closures, service workers, and React internals. 

21. What are closures in JavaScript?
A closure is created when a function remembers the variables from its outer scope, even after the outer function has finished executing.

Example:

javascript

function outer() {

  let count = 0;

  return function inner() {

    count++;

    return count;

  };

}

const counter = outer();

console.log(counter()); // 1

console.log(counter()); // 2
Here, inner() forms a closure over count, preserving its state across calls.

22. What are debouncing and throttling in JavaScript?
Both are performance optimization techniques for controlling how often a function is executed, especially during high-frequency events like scroll or keypress.

Debouncing:

Delays function execution until after a pause.
Useful for search boxes or resize events.
Example:

javascript

function debounce(fn, delay) {

  let timeout;

  return (...args) => {

    clearTimeout(timeout);

    timeout = setTimeout(() => fn(...args), delay);

  };

}
Throttling:

Limits function execution to once every x ms.
Useful for scroll animations or window resize handlers.
Example:

javascript

function throttle(fn, limit) {

  let lastCall = 0;

  return (...args) => {

    const now = new Date().getTime();

    if (now - lastCall >= limit) {

      lastCall = now;

      fn(...args);

    }

  };

}
23. How do you optimize the performance of a React app?
React apps can suffer performance issues with unnecessary re-renders, large bundle sizes, or inefficient state management.

Key optimization strategies:

Memoization
React.memo for functional components
useMemo and useCallback to prevent function/object recreation
Lazy loading
Code splitting with React.lazy() and Suspense
Avoid anonymous functions in the render
Use the Production Build
Run npm run build to get the optimized version
Efficient state handling
Minimize re-renders by lifting the state wisely and splitting components
24. What is tree shaking in modern JavaScript?
Tree shaking is a build optimization technique used by bundlers like Webpack, Rollup, or ESBuild to eliminate unused or dead code from the final JavaScript bundle.

Example:

javascript

// utils.js

export function used() { return 'used'; }

export function unused() { return 'not used'; }
If you only import used(), unused() gets shaken off during build if your bundler supports it and you’re using ES modules.

25. What is the difference between server-side rendering (SSR) and client-side rendering (CSR)?
Aspect	Server-Side Rendering (SSR)	Client-Side Rendering (CSR)
Rendering	Done on the server	Done in the browser
SEO	Better (HTML is ready when crawled)	Poorer (HTML is loaded via JS)
Load Time	Faster first load (TTFB optimized)	Faster after first load
Frameworks	Next.js, Nuxt.js	React, Angular, Vue (by default)
Difference between server-side rendering (SSR) and client-side rendering (CSR)
26. What is a Service Worker?
A Service Worker is a background script (JavaScript) that:

Runs independently of the main thread
Can intercept network requests
Enables offline caching, background sync, and push notifications
Example use:

Cache API responses to serve offline content
Speed up page load by serving static assets from cache
27. How does code splitting work in Webpack?
Code splitting allows you to split your app into multiple bundles (chunks) that can be loaded on demand.

Benefits:

Reduces initial load time
Improves performance on slower networks
Dynamic Import Example:

import('./heavyModule.js').then(module => {

  module.doSomething();

});
28. Write a function to check if a string is a palindrome.
A palindrome is a word or phrase that reads the same forward and backward.

Clean JavaScript Solution:

function isPalindrome(str) {

  const cleaned = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();

  return cleaned === cleaned.split('').reverse().join('');

}

console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
29. What are hooks in React? Name a few and explain.
Hooks are functions that let you use state and lifecycle features in functional components.

Common Hooks:

useState: Add local state to a function
const [count, setCount] = useState(0);
useEffect: Run side effects (like fetching data)
useEffect(() => { fetchData(); }, []);
useContext: Consume global context values
useRef: Persist values between renders without triggering re-renders
useReducer: Complex state logic with actions (Redux-like)
30. What is hydration in React?
Hydration is the process which React takes over a server-rendered HTML page and attaches event listeners to make it interactive.

How it works:

HTML is rendered on the server and sent to the browser.
React loads on the client.
React “hydrates” the static markup—binding interactivity.
Example (Next.js handles hydration automatically):

export default function Page({ data }) {

  return <div>{data.title}</div>;

}
At the advanced level, it’s not just about solving problems; it’s about building scalable, performant, and maintainable frontend applications.

If you want to learn everything related to full-stack development, consider enrolling in HCL GUVI’s IIT-M Pravartak certified Full Stack Development Course that helps you learn it from scratch with mentor support and provides you with hands-on experience by giving unlimited access to Programming Practice Platforms with 1500+ Problem Statements

Frontend Developer Interview Questions & Answers – Scenario Based
In modern frontend interviews, scenario-driven questions have become far more valuable than traditional theoretical ones. They reveal how a developer thinks, how they solve real-world problems, and how they approach performance, accessibility, debugging, and user experience challenges. Instead of memorizing definitions, candidates must demonstrate practical decision-making which is the exact skill set needed to build, maintain, and scale today’s complex web applications. The following scenario-based questions help assess not just knowledge, but problem-solving, architecture awareness, and the ability to handle unpredictable situations that arise in real frontend projects.

1. Your webpage takes 6–8 seconds to load on mobile devices. How would you investigate and fix the issue?
Start by using Lighthouse or Chrome DevTools to identify bottlenecks such as heavy images, render-blocking scripts, or large bundle sizes. Lazy-load non-critical assets and compress images. Split JavaScript bundles and defer scripts that aren’t needed on initial load. Optimize fonts and reduce unnecessary network requests.

2. A user reports that the UI looks broken only on older browsers. How would you approach this issue?
Check browser compatibility using tools like Can I Use. Verify polyfills for missing features, such as Promise, fetch, or CSS grid gaps. Add Babel transpilation for older ES versions and ensure responsive fallbacks exist. Test the layout in problematic browsers and implement graceful degradation where needed.

3. Your React application freezes temporarily when navigating between pages. What steps would you take to diagnose the performance issue?
Use React DevTools Profiler to inspect components that re-render unnecessarily. Check for heavy computations inside render or state updates in parent components. Implement memoization techniques like React.memo(), useCallback(), or useMemo(). Consider code-splitting and moving expensive logic to web workers.

4. You’re asked to design a form with 20+ fields, validations, and conditional visibility. How do you organize and manage it efficiently?
Break the form into reusable components and group fields logically. Use a form library (Formik, React Hook Form) for validation and state management. Create a schema-driven configuration to handle conditional logic cleanly. Keep validation rules centralized for easier maintenance.

5. A button works fine locally but doesn’t work on the production build. What debugging steps do you take?
Check for environment variable differences and build-time conditions. Open DevTools to inspect errors in the console or network tab. Validate that the script bundling and minification didn’t break logic. Confirm that the production API endpoints and event handlers are correctly wired.

6. You must implement dark mode and allow it to switch instantly without reloading the page. How would you structure it?
Use CSS custom properties and toggle a root-level class. Store the theme preference in localStorage. Update variables like color, background, and borders dynamically. Ensure all components use theme-aware variables instead of hardcoded values.

7. You see layout shifting as images load on the page. How do you prevent cumulative layout shift (CLS)?
Set width and height attributes or aspect-ratio boxes for images to reserve space before they load. Use object-fit for responsive behavior. Defer non-critical images with lazy loading. Optimize responsive layout with proper container sizes.

8. Your app needs to support offline mode. How do you make it work smoothly?
Use a service worker to cache static assets and API responses. Implement a fallback UI when the network is unavailable. Store data in IndexedDB or localStorage temporarily and sync it when the user reconnects. Design the app to function gracefully without real-time data.

9. You need to secure an API call in a frontend-only application. What would you do, knowing frontend code can’t hide secrets?
Never store secrets on the frontend. Move sensitive operations to a backend or serverless function. Use short-lived tokens, CORS restrictions, and domain protection. From the frontend, only call the backend and never direct third-party APIs with private keys.

10. A feature works on low-speed 3G but fails on high-speed broadband. What could cause this paradox?
Race conditions: fast networks may cause multiple rapid requests, breaking assumptions in the logic. Missing debounce/throttle on inputs, or relying on response order, could cause unpredictable behavior. Inspect asynchronous flows and enforce correct ordering.


Ответы на вопросы с собеседования на Senior Frontend Developer
https://t.me/devjoraFebruary 21, 2025
Важно! Как работать с материалом

Для тех, кто смотрит видео - материалы идут последовательно задаваемым вопросам.

Чтобы извлечь максимальную пользу, рекомендую разбираться в следующем порядке:

Прослушать вопрос
Попытаться ответить самостоятельно
Заглянуть в материалы и изучить тему
Снова прослушать вопрос и ответить на него
Также подписывайтесь на https://t.me/devjora - там много важной информации для построения карьеры frontend-разработчика.

HTML и CSS
Семантика

Отличный гайд от Доки
Доклад Артёма Арутюняна. Чтобы понимать семантику в широком смысле, не про HTML и CSS. Контент сложный, но годный
Доступность

Теория на Доке
Практические советы от Дмитрия Батогова
Инкапсуляция стилей

Здесь почитать о проблеме
Видео от Евгения Паромова о решениях
Не забыть про shadow DOM
Сеть и интернет
Пользователь вводит URL и нажимает кнопку

Про DNS и общую схему глобально
Здесь можно посмотреть про handshake
Очень мощный доклад про рендренинг страницы в браузере от Сергея UfoCoder’а
HTTP

Хороший справочник по видам HTTP запросов
Парадигмы программирования
Общая информация

Статья про парадигмы программирования. Советую прочитать пример в конце статьи от Саши Беспоясова. Чуть оффтопа, порекомендую также сам блог Саши и его Solid . Крайне крутой автор, советую.
ООП

Книга «Погружение в паттерны проектирования» от Refactoring Guru. Очень мощный материал, для начала прочитать Введение в ООП и Принципы проектирования, короче то что до самих паттернов. Если прочитать эти две главы осознанно и постараться применить — даст нереальный буст к скилам.
Функционально программирование

Общие понятия из функционального программирования 
Сильная книга про ФП в JS
Реактивное программирование

Общее знакомство с РП
Простое объяснение от Айти Синяка, то что с redux saga можно скипнуть
Жемчужина - статья Артема Арутюняна о РП. Полезно следить за докладами Артема, он часто говорит о реактивности и ее паттернах, его блог(реально не реклама): @artalog
Front-End Reactive Architectures by Luca Mezzalira (Apress, 2018). Книгу сложно найти, но можно купить.
JavaScript
Типы

Статья про обертки для примитивных типов
Структуры данных

Общее про Map и Set
Общее про WeakMap и WeakSet
Про сборщик мусора 
Про O-нотацию лучше всего в «Грокаем алгоритмы». Советую прочитать всю первую главу, но можно перейти сразу к 29 странице. Также из этой книги прочитать главу два, обратить внимание как в памяти хранится массив и связанный список Рекомендую выполнять упражнения из обоих глав. 
Про O-нотацию для встроенных сущностей js
Упражнения из книги «Выразительный JavaScript». Задача «Список»
Асинхронность

Очень большая тема, начать можно с понимания слова «асинхронность» - не знаю что подойдет лучше, стоит просто нагуглить это понятие.

Если уже знакомы промисы, Event Loop и т.п., то просто сюда. На данный момент это лучший материал по соотношению время/польза.

Если тема новая, стоит изучить:

Легендарный видос про Event Loop, обязателен для всех frontend разрабов
 Хорошее видео от Ulbi. Закрепит базу 
Лекция про node.js, смотреть первые 10 мин про nginx, дальше опцианально(но если интересен node, то это лучшая лекция). Доклад даст понимание, что Event Loop это скорее паттерн, а не выдумка браузера и тем более JS. На этом этапе уже стоит понимать, что JS вообще не знает про цикл событий. 
Практика асинхронности: Promise, async/await
Лекция от Григория Бизюкина. Короткая лекция о всех аспектах асинхронности в JS. Очень полезно перед собеседованиями
Курс от Тимура Шемсединова про асинхронность. Глубокий и сложный материал, хотя бы немного стоит ознакомиться
Библиотеки и фреймворки
Глобально про компонентный подход
Про преимущества использования фреймворков и библиотек в видео от Евгения Паромова о главном достоинстве React
О подходе «данные вниз, события наверх» из документации lit.js(но можно использовать с любой либой/фреймворком)
Фреймворк и библиотека: супер простое объяснение во втором абзаце. Неплохой видос от АйтиБороды(да, когда-то он делал годный контент) 
Про реактивность React из статьи Артура Арутюняна
SPA, SSR, SSG
Статья про SSR от Дена Абрамова
Видео от Айти Синяка
Сравнение CSR, SSR и SSG 
Islands Architecture
Islands Architecture от Astro
TypeScript
Общее про типизацию (статическая/динамическая, строгая/не строгая и т.п.)
Про TS в разрезе тестирования и безопасности кода
Оригинальная статья от Kent C. Dodds’a
Про перегрузку функций лучше всего в документации TS
Про полиморфизм и LSP лучше всего прочитать в этой книжке(там очень понятно)
Про компиляцию enum
Про параметрический полиморфизм и сравнение с ad-hoc на примере Java
По TS в целом еще хочется порекомендовать: 

Школа по TypeScript от Ильи Климова. Можно нагуглить материалы, или сходить к нему на поток(я пойду, когда откроется) 
Также супер ресурс для практики
Список задач для тренировки
Сборка
Про source map
System Design
Про физические носители информации. Для хардкорных, я когда-то изучал память по этим материалам
Общий видос про архитектуру web приложений
Что такое S3
О брокерах сообщений
Простыми словами про балансировщик нагрузки
Простое объяснение Docker
Простое объяснение Kubernetes
Базовые знания про Redis
Про краулеры на примере реализации
Для хардкорных книги + практика по книгам

Проходим собеседование на разработчика: 20 вопросов, которые вам могут задать на интервью
Хотите успешно пройти собеседование на должность веб-разработчика или только готовитесь к интервью? Мы знаем, как вам помочь! Ловите нашу подборку из 20 вопросов для собеседования с разработчиком. Мы специально собрали их для проверки ваших знаний и опыта в разнообразных аспектах веб-разработки. Эти вопросы, от базовых до продвинутых, помогут вам подготовиться к сложным ситуациям собеседования при приеме на работу. 

icon strelkaicons
узнай больше на курсе
DevOps-инженер с нуля
Стань DevOps-инженером с нуля и научись использовать инструменты и методы DevOps
Подробнее о курсе
Полный курс по сетевым технологиям
Полный курс по сетевым технологиям от Мерион Нетворкс - учим с нуля сетевых инженеров и DevOPS специалистов
Подробнее о курсе
Python программист с нуля
Стань разработчиком на одном из самых популярных языков программирования - Python
Подробнее о курсе
Предлагаем начать с основ, которые часто встречаются на интервью. Независимо от того, являетесь ли вы сениором или джуном, эти вопросы могут быть полезными для проверки вашего понимания фундаментальных принципов веб-разработки. В статье мы будем указывать как английские термины, так и их аналоги на русском.  

1. В чем разница между клиентским (client-side) и серверным (server-side) программированием?
Основное отличие заключается в месте исполнения. Клиентская разработка предполагает написание кода, который запускается в браузере пользователя и отвечает за взаимодействие с пользовательским интерфейсом. 

Серверное программирование имеет дело с кодом, выполняемым на веб-сервере. Обычно он обрабатывает запросы, взаимодействует с базами данных и генерирует контент для веб-сайтов.

2. Для чего нужны файлы HTTP cookies?
HTTP cookies — это небольшие фрагменты данных, которые отправляются с веб-сайта и хранятся в браузере пользователя. Они используются для хранения информации о конкретном пользователе. Например, это данные о входе в систему, аутентификация пользователя, его предпочтения и активность.

3. Объясните концепцию отзывчивого веб-дизайна (responsive web design)?
Отзывчивый веб-дизайн (от англ. Responsive web design) — это метод проектирования веб-сайтов, обеспечивающий правильное отображение сайта на различных устройствах и при разных размерах экрана. При его создании используются гибкие макеты, плавные сетки и CSS медиазапросы, чтобы внешний вид сайта автоматически настраивался под каждое устройство пользователя.

4. Что такое сеть доставки контента (CDN)?
Сеть доставки контента (от англ. Content delivery network, CDN) — это система серверов, расположенных по всему миру, чтобы быстрее и эффективнее доставлять веб-контент (например, HTML, изображения или видео). CDN снижает время загрузки веб-страницы, кешируя содержимое и доставляя его с сервера, расположенного географически ближе к пользователю.

5. Перечислите общие методы оптимизации производительности веб-приложений
Распространенные методы оптимизации производительности могут быть:

Сокращение HTTP-запросов за счет объединения файлов, использования спрайтов, встраивания CSS и JavaScript.
Минимизация размеров файлов за счет минификации, gzip-сжатия и оптимизации изображений.
Кеширование ресурсов на стороне клиента и сервера.
Использование CDN для уменьшения задержек.
Улучшение времени ответа сервера.
6. Что такое совместное использование ресурсов между разными источниками (CORS)?
Совместное использование ресурсов между разными источниками (от англ. Cross-origin resource sharing, CORS) — это механизм, обеспечивающий безопасное взаимодействие между веб-приложениями, которые работают на разных доменах. Когда веб-страница пытается загрузить ресурсы с сервера, находящегося в другом источнике, браузер обычно блокирует такие запросы из соображений безопасности. CORS позволяет серверу определить, разрешено ли веб-странице выполнять запросы к его ресурсам, и, если да, то какие именно запросы разрешены. Это достигается путем добавления специальных HTTP-заголовков к ответам сервера. 

7. Для чего нужны HTML, CSS и JavaScript в веб-разработке?
HTML (HyperText Markup Language) используется для структурирования контента в интернете, а CSS (Cascading Style Sheets) отвечает за стилизацию и верстку, делая контент визуально привлекательным. 

JavaScript — это язык программирования. С его помощью можно добавить интерактивные функции на сайт. Например, проверку форм, анимацию, взаимодействие с API и другие.

8. Что представляет собой боксовая модель CSS?
Боксовая модель CSS описывает состав каждого HTML-элемента на веб-странице. Она состоит из четырех областей: content (содержимое), border (граница), margin (пространство вокруг границы), padding (пространство между содержимым и границей).

9. Что такое распространение событий в JavaScript?
Распространение событий (англ. Event propagation) — это процесс передачи событий через древовидную структуру DOM (Document Object Model). Этот процесс состоит из трех этапов:

Захват (capturing): событие движется от вершины дерева к целевому элементу.
Цель (target): Событие достигает целевого элемента.
Всплытие (bubbling): После того как событие было обработано на целевом элементе, оно событие движется обратно.
Разработчики могут контролировать эту передачу с помощью команд ’stopPropagation()’ и ‘preventDefault()’.

10. Что такое объектная модель документа (DOM)?
Объектная модель документа (от англ. Document Object Model, DOM) — это программный интерфейс в виде набора HTML-документов. Они представляют собой дерево тегов, с которым можно взаимодействовать, модифицировать их с помощью скриптового языка JavaScript. Каждый объект — это часть документа, например элемент, атрибут или текстовый узел.

11. Как добиться прогрессивного рендеринга в веб-приложениях?
Это один из вопросов собеседования для старших веб-разработчиков. Здесь вам важно продемонстрировать глубокие знания, умение решать проблемы и понимание сложных концепций веб-разработки.

Итак, прогрессивный рендеринг предполагает разделение веб-страницы на мелкие части и приоритизацию отображения самого важного контента сначала. Чтобы добиться этого, можно использовать асинхронную загрузку ресурсов, отложенную загрузку изображений и серверный рендеринг для начальной загрузки страницы.

12. В чем преимущества использования пре- и постпроцессоров CSS?
Использование пре- и постпроцессоров вместе позволяет создавать более поддерживаемый, масштабируемый и эффективный CSS-код, экономя время и усилия разработчиков.

Преимущества препроцессоров CSS (например, Sass, Less, Stylus): расширяют CSS такими функциями, как переменные, миксины и вложенные правила, делая его более удобным в использовании и менее повторяющимся. Преимущества постпроцессоров CSS (например, PostCSS, Autoprefixer): помогают работать с префиксами поставщиков, добавляют полифилы и оптимизируют CSS для повышения производительности.

13. Как решить проблему совместимости с браузерами?
Чтобы решить проблему с совместимостью браузеров, нужно:

Использовать функции обнаружения с помощью Modernizr, чтобы обеспечить резервирование или полифилы для неподдерживаемых функций.
Применить техники прогрессивного улучшения и плавного ухудшения.
Использовать CSS reset или normalize.css для поддержания согласованности стилей в различных браузерах.
Протестировать приложение в браузерах и на различных устройствах
14. Как обеспечить безопасную аутентификацию в веб-приложениях?
Безопасная аутентификация в веб-приложениях может быть реализована следующими методами:

Безопасное хранение паролей с использованием методов хеширования, например, bcrypt.
Внедрение двухфакторной аутентификации (2FA).
Использование безопасных процессов сброса пароля с токенами и временными ограничениями.
Применение протокола HTTPS для шифрования данных между клиентом и сервером.
15. Объясните, что такое веб-компоненты и каковы их преимущества
Веб-компоненты — это набор API-интерфейсов веб-платформы, которые позволяют разработчикам создавать многократно используемые, модульные и инкапсулированные пользовательские HTML-элементы. 

К преимуществам веб-компонентов относятся:

Повторное использование и сопровождаемость кода.
Их использование позволяет сократить зависимость от внешних библиотек и фреймворков.
Более простая настройка стилей и тем, обеспечивающих лучшую согласованность пользовательского интерфейса
Улучшенная производительность путем снижения сложности DOM.
16. В чем разница между React и Angular?
React — это библиотека JavaScript, её используют в основном для создания быстрых и отзывчивых пользовательских интерфейсов. Она ориентирована на компонентную архитектуру и использует виртуальный DOM, обеспечивающий эффективное обновление и рендеринг.

Angular — это полноценный фреймворк для создания динамических одностраничных приложений. Он использует реальный DOM и предлагает такие инструменты, как внедрение зависимостей, двусторонняя привязка данных и встроенная система модулей, таких как маршрутизация и управление состоянием. Это делает Angular универсальным и улучшает процесс разработки.

17. Что такое межсайтовый скриптинг (XSS) и как его предотвратить?
Межсайтовый скриптинг или XSS (Cross-site scripting) — это тип уязвимости в системе безопасности. Из-за него злоумышленники могут внедрить вредоносные скрипты на веб-страницы, что приводит к несанкционированному доступу, краже данных и другим вредным последствиям. 

Как его предотвратить?

Проверять и чистить вводимые и выводимые пользователем данные.
Внедрить политику безопасности контента (CSP), чтобы ограничить источники скриптов и других ресурсов.
Использовать безопасные методы для манипуляций с DOM, такие как `textContent` вместо `innerHTML`.
18. Что представляет собой объединение ресурсов и почему оно важно?
Объединение ресурсов или Asset bundling собирает CSS, JavaScript и другие ресурсы в один или несколько минифицированных файлов. Этот процесс сокращает количество HTTP-запросов, снижает время загрузки и повышает производительность. Он также помогает в управлении кешем и упорядочивании кода.

19. Объясните концепцию server push в HTTP/2
Server push — это функция в HTTP/2, которая позволяет серверу прямо и асинхронно отправлять ресурсы в кеш клиента еще до того, как они будут запрошены. Это уменьшает задержки загрузки содержимого, например, CSS и файлы JavaScript.

20. Как измерить производительность веб-приложения?
Для этого разработчики используют различные инструменты, методы и метрики, такие как:

Анализ производительности и профилирования Lighthouse, WebPageTest и Chrome DevTools.
Мониторинг ключевых показателей производительности: First Contentful Paint (FCP), Time to Interactive (TTI) и Largest Contentful Paint (LCP).
Отслеживание реальных пользователей (RUM) и мониторинг производительности приложений (APM) для измерения опыта конечных пользователей и производительности на стороне сервера.
Нагрузочное тестирование и стресс-тестирование для оценки поведения системы.

30 вопросов на собеседовании фронтенд разработчика
12 мая 2023, отредактировано 28 мар 2026

Казалось бы, вопросы на собеседовании frontend разработчика Junior не должны отличаться от стандартных задачек с IT-сайтов. Даже мы приводили 5 простых тестовых заданий для младшего фронтенд-программиста.

Ключевые выводы:
• Собеседование фронтенд-разработчика охватывает JavaScript, CSS, HTML, сетевые протоколы и архитектурные паттерны
• Интервьюеры часто просят сравнить технологии (let vs const, cookie vs localStorage, сброс vs нормализация CSS)
• Помимо теории, важно уметь писать код: проверка типов, работа с DOM, асинхронность
• Знание REST API, Event loop и методов оптимизации загрузки страницы критически важно для junior-позиции
Но складывается впечатление, что работодатели с каждым годом придумывают больше заковыристых вопросов, чтобы поставить кандидата в тупик. Такие мы рассмотрим в том числе.

Держите популярные вопросы с frontend интервью.

1. Разница между let, var и const
let, var и const — это ключевые слова, используемые в JavaScript для объявления переменных.

var долгое время был основным способом объявления переменных в JavaScript до появления let и const. var имеет область видимости функции и может быть изменен в любом месте в этой функции.

Пример:

function myFunction() {
  var x = 1;
  if (true) {
    var x = 2; // переназначение переменной x
    console.log(x); // 2
  }
  console.log(x); // 2
}

let и const были добавлены в стандарт ECMAScript 6 (ES6) и имеют блочную область видимости. let может быть изменен, но const не может.

Примеры:

// пример с let
function myFunction() {
  let x = 1;
  if (true) {
    let x = 2; // создание новой переменной x
    console.log(x); // 2
  }
  console.log(x); // 1
}

// пример с const
const PI = 3.14;
PI = 3.14159; // TypeError: Assignment to constant variable.

Используйте let, если вы собираетесь изменять значение переменной, и const, если не собираетесь. Используйте var, если вам нужно поддерживать совместимость со старыми браузерами или если вы хотите использовать его особенности, такие как функциональная область видимости.

2. Разница между cookie, sessionStorage и localStorage
Вот он, родной и горячо любимый HTML.

cookie, sessionStorage и localStorage — это технологии для хранения данных на стороне клиента в браузере. Однако, у них есть различия в использовании и хранении данных.

cookie — небольшой фрагмент данных, который отправляется сервером в браузер, а затем сохраняется в браузере клиента. Cookie могут храниться в течение определённого периода времени, определяемого сервером. Они используются для сохранения пользовательских настроек, данных авторизации и другой информации о пользователях.

Пример:

document.cookie = "username=John Doe; expires=Thu, 18 Dec 2023 12:00:00 UTC; path=/";

sessionStorage — объект, который позволяет сохранять данные в браузере на время сессии, т.е. пока вкладка браузера открыта. Данные сохраняются в виде пары ключ-значение, и они могут быть использованы для сохранения состояния приложения или другой информации, которая должна быть доступна только в течение сессии.

Пример:

sessionStorage.setItem('username', 'John');
console.log(sessionStorage.getItem('username')); // выводит "John"

localStorage — объект, который позволяет сохранять данные в браузере на неопределенный период времени, т.е. данные будут доступны даже после закрытия браузера и перезагрузки компьютера. Данные также сохраняются в виде пары ключ-значение и могут быть использованы для сохранения состояния приложения или другой информации, которая должна быть доступна в любое время.

Пример:

localStorage.setItem('username', 'John');
console.log(localStorage.getItem('username')); // выводит "John"

В целом, разница между cookie, sessionStorage и localStorage заключается в их жизненном цикле и времени жизни, а также в том, как они могут быть использованы в приложениях.

3. Какая технология наиболее популярна сейчас и точно будет популярна ещё несколько лет?
Резкий скачок от чисто технических вопросов на собеседовании Junior frontend к чисто философским, не так ли? Но сегодня это нормальная практика, и ей не стоит удивляться.

Сразу хочется подчеркнуть, что здесь нет единого правильного варианта ответа, ведь фронт-енд в последние годы стал очень многогранен, обзавёлся кучей прогрессивных библиотек и фреймворков. Поэтому давайте поразмышляем в несколько творческом ключе.

Сейчас в веб-разработке наиболее популярным языком является JavaScript и его фреймворки, такие как React, Angular и Vue.js. JavaScript используется для создания интерактивных пользовательских интерфейсов, а также для создания бэкенд-серверов с помощью Node.js.


Не стоит забывать и о набирающих популярность технологиях, которые связаны с искусственным интеллектом, машинным обучением и анализом данных. Скорее всего, они также будут иметь значительное влияние на веб-разработку в будущем. В частности, библиотеки и фреймворки для визуализации данных, такие как D3.js и Chart.js, станут очень популярны в создании интерактивных графиков и диаграмм на веб-сайтах.

4. Напишите простую функцию, чтобы проверить, является ли число целым
Здесь всё просто:

function isInteger(num) {
  return num % 1 === 0;
}

Эта функция принимает число в качестве аргумента и возвращает true, если число является целым, и false, если число имеет дробную часть.

Например:

console.log(isInteger(4)); // true
console.log(isInteger(4.2)); // false
console.log(isInteger(-3)); // true

5. Что такое прогрессивная отрисовка?
Да, некоторые вопросы для фронтенд разработчика могут быть даже такими.

Прогрессивная отрисовка — это метод веб-разработки, который позволяет поэтапно отображать содержимое веб-страницы по мере его загрузки. Сначала отображается минимальное количество информации, а затем дополнительные элементы и детали добавляются по мере загрузки страницы.

Этот подход особенно полезен для улучшения пользовательского опыта и снижения времени загрузки страницы. Пользователи могут начать взаимодействовать с сайтом намного быстрее, чем если бы они должны были ждать, пока вся страница будет загружена полностью.

Кроме того, прогрессивная отрисовка также может быть полезна для оптимизации производительности, поскольку она позволяет снизить объем передаваемых данных и ускорить время отклика сервера.

бложка внешней ссылки
5 простых тестовых заданий на позицию Junior Frontend-разработчик
tproger.ru
Примеры технологий, которые позволяют использовать прогрессивную отрисовку, включают в себя постраничную подгрузку контента, ленивую загрузку изображений и использование CSS-анимации для плавного отображения элементов страницы.

6. На что стоит обратить внимание при разработке мультиязычных сайтов?
При разработке мультиязычных сайтов необходимо обратить внимание на следующие аспекты:

Выбор подходящей системы управления контентом (CMS). Некоторые CMS, такие как WordPress и Drupal, предоставляют встроенную поддержку мультиязычности, что может значительно упростить разработку и управление мультиязычными сайтами.
Кодирование текста и использование правильных языковых символов. Кодировка должна соответствовать требованиям языков, на которых будет отображаться сайт. Например, для языков, использующих кириллицу, должна быть выбрана кодировка UTF-8.
Организация контента на сайте. Необходимо разработать систему, которая позволит организовать контент на сайте таким образом, чтобы пользователи могли легко найти информацию на нужном им языке. Для этого можно использовать разделение контента на языковые версии или использовать переключатели языков.
Локализация. При переводе текста на другой язык необходимо учитывать культурные особенности языка и местные нормы и стандарты. Кроме того, может потребоваться локализация форматов дат, валют и других данных, которые зависят от конкретного региона.
Тестирование и отладка. Необходимо тщательно протестировать все языковые версии сайта, чтобы убедиться, что контент отображается корректно, а функциональность работает правильно на всех языках.
SEO-оптимизация для каждого языка. Для каждой языковой версии сайта необходимо провести SEO-анализ и оптимизировать контент, мета-теги и другие аспекты для местных поисковых систем и языковых запросов пользователей.Например, таким бы было оформление sitemap.xml, будь у Tproger английская версия:

    https://tproger.ru
    
    

Подробнее о мультиязычной настройке Sitemap можно почитать в документации Google.

Учитывая эти аспекты, можно разработать качественный мультиязычный сайт, который будет удобен и понятен для пользователей на разных языках.

7. Написать код для получения текущего URL
В JavaScript можно получить текущий URL страницы, используя свойство window.location.href:

const currentUrl = window.location.href;
console.log(currentUrl); // выведет текущий URL в консоль

Подобные вопросы на собеседовании frontend разработчика звучат нечасто, но всё же ответ должен быть полным.

Итак, это свойство возвращает текущий URL, включая протокол, имя хоста, порт (если он есть), путь и параметры запроса. Если необходимо получить только определенную часть URL (например, только путь), можно использовать другие свойства объекта window.location, такие как pathname или search.

8. Разница между &lt;script&gt;, &lt;script async&gt; и &lt;script defer&gt;
Тег <script> используется для загрузки и выполнения JavaScript-кода на веб-странице. Тег <script> может иметь атрибуты async и defer, которые позволяют задать способ загрузки скрипта.

<script> будет загружаться и выполняться синхронно, т.е. парсер HTML-документа остановится на этом теге, выполнит скрипт, и только после этого продолжит загрузку страницы.

<script async> будет загружаться асинхронно, т.е. парсер HTML-документа продолжит загрузку страницы без ожидания загрузки и выполнения скрипта. Как только скрипт будет загружен, он начнет выполняться, даже если страница еще не полностью загружена.

<script defer> также будет загружаться асинхронно, но его выполнение будет отложено до того момента, когда страница будет полностью загружена.

Примеры:

Важно отметить, что использование атрибутов async и defer может повлиять на порядок выполнения скриптов на странице, поэтому необходимо тщательно планировать их использование. Подобные развёрнутые ответы на вопросы на собеседовании фронтенд разработчика дадут вам значительное преимущество.

9. Что такое REST и RESTful API?
REST (Representational State Transfer) — это архитектурный стиль, используемый при проектировании распределенных систем. Он был описан в диссертации Роя Филдинга в 2000 году и является основой для создания RESTful API.

RESTful API — это веб-сервис, который использует протокол HTTP для обмена данными. Он предоставляет возможность получать, создавать, обновлять и удалять данные на удаленном сервере, используя стандартные HTTP-методы (GET, POST, PUT, DELETE и т. д.).

RESTful API использует ресурсы (например, товары, пользователи, заказы) и URI (Uniform Resource Identifier) для доступа к этим ресурсам. Клиент отправляет запросы на сервер, указывая URI и метод HTTP, а сервер возвращает ответ, который может содержать данные в различных форматах (например, JSON или XML).

бложка внешней ссылки
Основы REST: теория и практика
tproger.ru
Принципы RESTful API:

Клиент-серверная архитектура: сервер и клиент независимы друг от друга, что позволяет развивать их независимо.
Отсутствие состояния (stateless): каждый запрос клиента должен содержать всю необходимую информацию для его обработки, без сохранения состояния на сервере.
Кэширование: клиенты могут кэшировать ответы сервера, чтобы уменьшить количество запросов.
Единообразие интерфейса: единообразный интерфейс между клиентом и сервером упрощает взаимодействие и увеличивает его надежность.
Слои: клиент не должен знать о слоях на сервере, которые обрабатывают запросы.
RESTful API является широко используемым в веб-разработке и предоставляет удобный и гибкий способ обмена данными между сервером и клиентом.

10. Разница между «сбросом» и «нормализацией» CSS
Заметили, что вопросы Junior frontend разработчику часто включают в себя какие-то сравнения? Это неспроста. Интервьюеры специально «гоняют» по отличиям, чтобы одним махом понять вашу осведомлённость во всех сравниваемых элементах.

Ответить на этот фронтенд вопрос несложно.

Сброс CSS и нормализация CSS — это два разных подхода к обнулению стилей веб-страницы.

Сброс CSS — это процесс обнуления стилей, чтобы убрать браузерные стили по умолчанию, которые могут отличаться от одного браузера к другому. Цель сброса CSS — создать «чистую» страницу, на которой все элементы имеют одинаковый вид в разных браузерах. Пример кода:

/* сброс CSS */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

Нормализация CSS — это процесс создания единообразных стилей для разных элементов, чтобы веб-страница выглядела одинаково во всех браузерах. В отличие от сброса CSS, нормализация CSS сохраняет некоторые стили по умолчанию браузера, но при этом пытается сделать их единообразными. Пример:

/* нормализация CSS */
html {
  font-size: 62.5%;
}
body {
  font-size: 1.6rem;
  line-height: 1.5;
  font-family: Arial, sans-serif;
}

Оба подхода могут использоваться в зависимости от нужд проекта. Если вы хотите создать полностью уникальный дизайн, то возможно вам нужен сброс CSS. Если же вы хотите сохранить некоторые стили браузера, но при этом сделать веб-страницу более единообразной, то нормализация CSS может быть более подходящим вариантом.

11. Что такое «трёхстороннее рукопожатие»?
Медленно но уверенно вопросы для frontend разработчика перетекли в сферу безопасности.

Трехстороннее рукопожатие (Triple Handshake) — это проблема безопасности в компьютерных сетях, которая возникает при использовании SSL/TLS-соединений.

В процессе установки безопасного соединения SSL/TLS между клиентом и сервером происходит обмен сообщениями, который состоит из трех шагов (трехстороннее рукопожатие):

Клиент отправляет серверу сообщение SYN с произвольным начальным номером (seq).
Сервер отправляет клиенту сообщение SYN-ACK, подтверждающее получение сообщения SYN и содержащее свой собственный произвольный начальный номер (seq) и номер последовательности подтверждения (ack), который равен начальному номеру клиента +1.
Клиент отправляет серверу сообщение ACK с номером подтверждения, который равен начальному номеру сервера +1.
Проблема Triple Handshake возникает, когда злоумышленник нарушает правильный порядок шагов рукопожатия, вставляя свой сервер между клиентом и настоящим сервером. В этом случае злоумышленник может получить доступ к конфиденциальной информации, передаваемой между клиентом и сервером.


Чтобы избежать проблемы Triple Handshake, необходимо использовать проверенные и безопасные протоколы SSL/TLS и устанавливать соединение только с доверенными серверами.

12. Что такое NaN?
Это специальное значение в JavaScript, которое означает «не число» (Not-a-Number).

Возможные причины, по которым значение становится NaN:

Попытка выполнить математическую операцию с нечисловым значением.
Попытка выполнить математическую операцию, результат которой не может быть представлен числом, например деление нуля на ноль или вычисление квадратного корня из отрицательного числа.
Преобразование строки в число, если строка не является валидным числом.
let result1 = 10 / "hello"; // result1 будет равен NaN
let result2 = Math.sqrt(-1); // result2 будет равен NaN
let result3 = parseInt("hello"); // result3 будет равен NaN

Значение NaN имеет интересное свойство: оно не равно ни одному другому значению, включая само себя. Поэтому существует специальная функция isNaN(), которая позволяет проверить, является ли значение NaN:

let result = isNaN(NaN); // result будет равен true
let result2 = isNaN("hello"); // result2 будет равен true, потому что строка "hello" не может быть преобразована в число
let result3 = isNaN(10); // result3 будет равен false, потому что 10 - это число

13. Как реализовать отложенную загрузку изображений?
Да, такие вопросы фронтенд разработчик должен щёлкать, как семечки.

Отложенная загрузка изображений — это способность страницы загружать изображения только тогда, когда они понадобятся пользователю. Это может ускорить время загрузки страницы и уменьшить использование данных. Есть несколько способов реализации отложенной загрузки изображений.

Lazy Loading — техника, которая позволяет отложить загрузку изображений, находящихся за пределами видимой области. Для этого можно использовать библиотеки, такие как Lazysizes или Intersection Observer API.

Атрибуты data- — Вы можете использовать атрибут data- вместе с атрибутом src, чтобы отложить загрузку изображения:

Затем вы можете использовать JavaScript, чтобы загрузить изображение, когда оно станет видимым:

const img = document.querySelector('img');
img.setAttribute('src', img.getAttribute('data-src'));

Использование CSS для изменения размера изображения, уменьшения его качества или изменения его формата. Например, вы можете использовать свойство "background-image" для загрузки изображения как фон элемента:

.element {
  background-image: url(path-to-image.jpg);
}

Это не полный список способов реализации отложенной загрузки изображений, и выбор конкретных методов зависит от требований проекта и целевой аудитории.

14. Что такое Event loop и как он работает?
это механизм в JavaScript, который позволяет выполнить асинхронный код и обрабатывать события, такие как клики мыши, нажатия клавиш и таймеры.

Event loop работает внутри JavaScript движка и состоит из двух основных фаз: фаза синхронизации и фаза выполнения задач. В фазе синхронизации обрабатываются синхронные операции, такие как выполнение кода и обработка событий, которые были помещены в очередь в прошлый цикл. В фазе выполнения задач обрабатываются асинхронные операции, такие как колбэки таймеров и событий.

Когда JavaScript выполняет код, все синхронные операции помещаются в очередь. Когда очередь становится пустой, Event loop проверяет, есть ли в очереди асинхронные операции. Если есть, они выполняются в порядке их добавления в очередь.

Например, если мы вызываем setTimeout с задержкой в 1 секунду, функция setTimeout помещает колбэк функцию в очередь и устанавливает таймер на 1 секунду. Когда таймер сработает, колбэк функция будет добавлена в очередь, и Event loop выполнит ее.

Важно понимать, что фаза выполнения задач может быть перервана фазой синхронизации. Например, если мы запускаем бесконечный цикл, который занимает все ресурсы процессора, JavaScript не сможет выполнить другие задачи, пока цикл не закончится.

Event loop является важным концептом в асинхронном программировании на JavaScript, поэтому важно понимать, как он работает, чтобы писать эффективный и предсказуемый асинхронный код.

15. В чём разница между .call и .apply?
Методы .call() и .apply() используются для вызова функции с заданным значением this, а также для передачи аргументов в функцию. Основная разница между ними заключается в способе передачи аргументов.

Метод .call() принимает список аргументов, переданных в функцию через запятую. В то же время, метод .apply() принимает массив аргументов, переданных в функцию.

Вот пример использования методов .call() и .apply():

function greet(name, age) {
  console.log(`Hello, my name is ${name} and I am ${age} years old.`);
}

greet.call(null, 'John', 30);
// выводит: Hello, my name is John and I am 30 years old.

greet.apply(null, ['Jane', 25]);
// выводит: Hello, my name is Jane and I am 25 years old.

В обоих случаях мы вызываем функцию greet() с this равным null. В первом случае мы передаем два аргумента в функцию через запятую, а во втором случае мы передаем массив из двух аргументов в функцию.

Понравился такой формат? Держите ещё 15 интересных вопросов к собеседованию фронтенд. Проверьте себя: пишите свои ответы в комментариях.

Как изменить цвет в svg файле? Назовите хотя бы один способ.
Как можно протестировать API-сервис?
Какие проблемы могут возникнуть при использовании атрибута «defer» для подключения скриптов?
Как можно реализовать адаптивное изображение, чтобы снизить нагрузку на сервер и ускорить загрузку страницы?
В каких случаях используются анонимные функции?
Что такое специфичность CSS-селекторов и как она работает?
Представьте HTML5 как открытую веб-платформу. Из каких блоков состоит HTML5?
В чём различия между Long-Polling, Websockets и Server-Sent Events?
Какие преимущества/недостатки в использовании CSS препроцессоров?
Напишите цикл, который перебирает числа до 100, возвращая «Типичный» на числа кратные 3, «программист» на числа кратные 5 и «Типичный программист» на числа кратные 3 и 5.
В чём разница между == и ===?
Использовали ли вы систему сеток, и если да, то какую вы предпочитаете?
Для чего нужен doctype?
Опишите, как бы вы реализовали самый обычный слайдер.
Какие преимущества и недостатки у CSS и JavaScript анимаций?

Вопросы на собеседовании Frontend-разработчику
Frontend-разработка считается одной из самых популярных областей для новичков в программировании. И на собеседовании спрашивают самые разные вопросы, порой — по самым неожиданным темам. К чему готовиться? Рассказали в статье

Время чтения: 3 минуты

Редакция Kata Academy

Редакция Kata Academy

Редакция Kata Academy
Frontend-программисты используют различные технологии для работы. Важно знать, за что отвечает каждая из них:

– HTML отображает содержимое страницы: кнопки, ссылки, заголовки, абзацы и списки. Это строительный блок сайтов, он используется для маркировки контента.

– CSS несёт ответственность за стиль веб-страниц: отвечает за анимацию, цвета и макеты. Это позволяет программистам управлять макетом веб-приложения или сайта. В то время как HTML отображает элементы на странице, CSS отвечает за то, каким пользователи видят контент.

– JavaScript является одним из трёх основных элементов разработки. Они нужны для того, чтобы создать веб-страницу. В настоящее время сложно визуализировать данные на сайте без JavaScript. Именно этот язык программирования делает их интерактивными.

– Фреймворки, библиотеки и препроцессоры. Эти инструменты ускоряют процесс разработки. Не обязательно знать их все, но перед собеседованием лучше посмотреть вакансию и проверить, какие технологии нужны определённому работодателю. Так ты сконцентрируешься на самых востребованных навыках.

– Навыки тестирования и отладки. В любом коде могут быть ошибки, которые нажо исправить. Отладка простыми словами — найти эти баги и мочь их исправить.

– Контроль версий. Способ отслеживания и модификации кода проекта — это контроль версий. Git считается наиболее популярным программным обеспечением, которое используется для этих целей. Ты можешь использовать Git, чтобы вернуться к более ранней версии кода и не переписывать всё вручную.
Как устроиться на работу Frontend-разработчиком?Читайте также
Вопросы интервью для Junior Frontend developer
Чтобы проверить твои знания, работодатели могут задавать вопросы о HTML, CSS, JavaScript, SQL, jQuery и других инструментах. Могут спросить о прошлом месте работы, мягких навыках, рабочих процессах и т.д. Разберём, как лучше ответить на подобные вопросы.

1) Какова роль веб-разработчика? Какие наиболее важные аспекты работы и почему? Роль веб-разработчика будет варьироваться в зависимости от конкретного описания должности. Чаще всего обязанности следующие:

– Проектирование, разработка, программирование, тестирование, обновление и отладка веб-приложений и сайтов.
– Сотрудничество с дизайнерами, другими разработчиками, UX-специалистами, командами продаж и маркетинга.
– Поддержка обслуживания сайтов, приложений и других веб-продуктов.

Это самые общие задачи веб-разработки. Как мы уже писали выше, перед собеседованием изучи вакансию, чтобы понимать, какие обязанности требует конкретный работодатель.

2) С какими языками программирования вы знакомы? Здесь HR хочет убедиться, что у тебя есть опыт работы с широким спектром различных языков программирования. Это про насмотренность и знания о разработке приложений и сайтов, которые имеются в твоём портфолио.

3) Какой ваш любимый сайт? Почему? Подготовь ответы заранее. Чем подробнее представишь анализ сайта, тем лучше. Вопрос показывает осведомлённость о трендах веб-разработки.

4) Как вы следите за изменениями в отрасли? Здесь нужно ссылаться на чтение блогов о веб-разработке, можно рассказать о вебинарах, семинарах и прочих образовательных проектах, которые получилось посетить.
Скачивай чек-лист «Как выйти на доход 150к» с подробным планом и сделай свой первый шаг к доходу мечты.
Скачать! 
Общие вопросы для интервью по веб-разработке:
– Определите метатеги HTML.
– Какая разница между div и span?
– Что такое ClickJacking?
– В чём разница между HTML и XHTML?
– В чём разница между ES5 и ES6?
– Что такое React JS?
– Что такое stringify?
– Укажите все элементы модели CSS Box.
– В чём разница между MySQL и MongoDB?
– Укажите разницу между == и ===?
– Для чего используется npm?
– Что такое webpack?
– Чем отличаются JavaScript и jQuery?
– Что такое strict mode?
– В чём разница между PUT и POST?

Лучше всего самостоятельно подготовить ответы на эти вопросы. Так, пока ищешь ответы, дополнительно изучаешь необходимую информацию. Важно не просто заучить ответы на вопросы, а понять их и уметь объяснить то или иное умозаключение.

Кстати, начать свой путь в IT ты можешь прямо сейчас в Kata. Понятные материалы и поддержка опытных менторов. Переходи по ссылке, чтобы узнать подробнее!
Обучение с личным ментором, поддержкой
при поиске работы и оплатой на выбор: сразу или после трудоустройства
Узнать, как устроено обучение и трудоустройство
Frontend — понятный вход
в IT с поддержкой до оффера
FAQ
Какие вопросы чаще всего задают frontend‑разработчику на собеседовании в 2025 году?

На собеседовании могут спросить про основы HTML, CSS, JavaScript, адаптивность, асинхронность, работу с API, основы React или Vue, а также про Git, архитектуру и взаимодействие с backend.

Какие вопросы по JavaScript нужно обязательно знать frontend‑разработчику на собеседовании?

Обязательно повтори: типы данных, замыкания, hoisting, this, async/await, промисы, работа с DOM, обработка событий и методы массивов (map, filter, reduce).

Какие темы по HTML и CSS спрашивают на собеседовании frontend‑разработчика?

Часто задают вопросы про семантику HTML, отличие id и class, блочную модель, flex, grid, адаптивность, медиа-запросы, позиционирование элементов и специфику каскада.

Какие вопросы задают по React на собеседовании начинающему frontend‑разработчику?

Спрашивают про компоненты, пропсы, состояние (useState, useEffect), жизненный цикл, ключи в списках, роутинг и базовые паттерны. Также важно понимать разницу между классовыми и функциональными компонентами.

Как подготовиться к собеседованию frontend‑разработчику без большого опыта?

Повтори теорию, решай задачи на Codewars, сделай несколько pet-проектов, подготовь краткое самопрезентационное вступление и изучи типовые вопросы по HTML, CSS, JS, Git и React. Желательно — всё это показать в GitHub-портфолио.

Вопросы кандидату на должность front-end разработчика

Замечание: Этот репозиторий содержит подборку вопросов, которые могут быть использованы на собеседованиях на должность фронтенд-разработчика. Здесь предлагаются лишь идеи, не нужно задавать все вопросы сразу (иначе в один час точно не уложитесь).

Также имейте в виду, что многие вопросы не требуют однозначного короткого ответа, а лишь помогают завести беседу на ту или иную тему (предоставляя кандидату возможность показать себя во всей красе).

Содержание
Авторы
Общие вопросы
Вопросы по HTML
Вопросы по CSS
Вопросы по JavaScript
Вопросы по тестированию
Вопросы по производительности
Вопросы по сетям
Примеры кода на JavaScript
“Светская беседа”
[⬆] Авторы
Этот проект был запущен в 2009 году в сотрудничестве с @paul_irish @bentruyman @cowboy @ajpiano @SlexAxton @boazsender @miketaylr @vladikoff @gf3 @jon_neal @sambreed и @iansym.

В настоящее время этот проект поддерживают:

roblarsen
vvscode
С тех пор он был активным благодаря этим замечательным людям.

[⬆] Общие вопросы:
Что вы изучили вчера/на этой неделе?
Что вас привлекает в программировании?
С какой технической сложностью вы недавно столкнулись и как с ней справились?
Какие методы для повышения производительности вы использовали при создании или обслуживании сайта?
Можете ли вы описать некоторые методы SEO, которые вы использовали в последнее время?
Можете ли вы объяснить общие принципы относительно фронтенд-безопасности или недавние проблемы, которые вы решили?
Какие действия вы лично предприняли в недавних проектах для повышения удобства использования вашего кода?
Расскажите о предпочитаемой среде разработки.
С какими системами контроля версий вы знакомы?
Можете ли вы описать порядок действий при создании новой веб-страницы?
Если у вас есть 5 разных файлов со стилями, какой лучший способ интегрировать их в сайт?
Можете ли вы описать разницу между прогрессивным улучшением и изящной деградацией?
Как можно оптимизировать загрузку внешних ресурсов на странице?
Сколько ресурсов браузер может одновременно загружать с одного домена?
Какие есть исключения?
Назовите три способа уменьшения времени загрузки страницы (воспринимаемого или реального).
Если вы присоединились к проекту, где для форматирования используются табы, а вы привыкли использовать пробелы, как вы поступите?
Опишите, как бы вы реализовали примитивное слайд-шоу.
Если бы у вас была возможность освоить новую технологию в этом году, что бы это было?
Объясните важность стандартов и комитетов по стандартам.
Что такое FOUC (Flash Of Unstyled Content)? Как его избежать?
Объясните, что такое ARIA и скринридеры, а также как сделать сайт доступным.
Какие преимущества и недостатки у CSS и JavaScript анимаций?
Что означает CORS и какую проблему решает?
[⬆] Вопросы по HTML:
Для чего нужен doctype?
Как следует оформлять страницу, содержимое которой может быть на разных языках?
На что необходимо обратить внимание при разработке мультиязычных сайтов?
Для чего нужны атрибуты, начинающиеся с data-?
Представьте HTML5 как открытую веб-платформу. Из каких блоков состоит HTML5?
Объясните разницу между cookie, sessionStorage и localStorage.
Объясните разницу между <script>, <script async> и <script defer>.
Почему хорошей практикой считается располагать <link> для подключения CSS между <head></head>, а <script> для подключения JS ставить перед </body>? Знаете ли вы исключения?
Что такое прогрессивная отрисовка?
Для чего используется атрибут srcset в теге изображения? Опишите процесс, который использует браузер при оценке содержимого этого атрибута.
Приходилось ли вам работать с языками HTML-шаблонизации?
Объясните разницу в поведении между тегами <button> и <input type="button"> внутри формы?
Объясните разницу между тегами <strong> и <b>?
Приведи примеры использования тега <label>?
Чем тег <a> отличается от тега <button> с точки зрения функциональности и использования?
[⬆] Вопросы по CSS:
Что такое специфичность CSS-селекторов и как она работает?

В чем разница между «сбросом» и «нормализацией» CSS? Что бы вы выбрали и почему?

Объясните, что такое плавающие элементы (floats) и как они работают.

Объясните, что такое z-index и как формируется контекст наложения.

Объясните, что такое блочный контекст форматирования и как он работает.

Какие вы знаете методы запрета обтекания (clearing) и в каких случаях они применяются?

Как вы решаете стилевые проблемы, связанные с особенностями браузеров?

Как вы обеспечиваете отображение страниц в браузерах с ограниченными возможностями?

Какие приёмы/процессы вы при этом используете?
Какими способами можно визуально скрыть элемент (оставив его доступным только для скринридера)?

Использовали ли вы систему сеток, и если да, то какую вы предпочитаете?

Приходилось ли вам использовать или реализовывать медиазапросы или вёрстку под мобильные устройства?

Вы знакомы со стилизацией SVG?

Можете ли вы привести пример свойства @media, отличного от screen?

На что нужно обратить внимание при написании эффективного CSS?

Какие преимущества/недостатки в использовании CSS препроцессоров?

Опишите, что вам нравится и не нравится в CSS препроцессорах, которыми вы пользовались.
Как вы реализуете макет, который использует нестандартные шрифты?

Объясните, как браузер определяет, на какие элементы накладывать CSS стили?

Объясните, что такое псевдоэлементы и для чего они нужны.

Объясните своими словами, что такое блочная модель.

Что делает * { box-sizing: border-box; }? В чем его преимущества?

Что означает свойство display и можете ли вы привести несколько примеров его использования?

В чем разница между строчным и блочно-строчным элементом?

В чем разница между относительным, фиксированным, абсолютным и статически позиционированным элементом?

Какими CSS-фреймворками вы пользовались? Что бы вы хотели в них изменить/улучшить?

Пользовались ли вы Flexbox или Grid?

Можете ли вы объяснить разницу между отзывчивым (responsive) сайтом и сайтом, сделанным по принципу mobile-first?

Вы имеете опыт работы с ретиновой графикой? Если да, то какие методы вы использовали?

В каком случае вы предпочтёте использовать translate() вместо абсолютного позиционирования и наоборот? И почему?

Можете ли вы привести пример псевдокласса?

Какие новые псевдоклассы появились за последние год-два?
В чем отличие между em и rem? Как они рассчитываются?

Какие проблемы появляются при попытке переопределить стили компонента их UI-библиотеки? Какие способы решения существуют?

Что такое @layer и как это могло бы помочь решить проблему переопределения стилей?
Объясните, что такое vh и vw?

Какие проблемы возникают на мобильных устройствах при использовании vh? Как их можно решить?
Что такое пользовательские css свойства?

Как ограничить их область видимости?
Какой цвет применится и почему?

.red {
  color: red;
}
.blue {
  color: blue
}
<div class="blue red">Hello world</div>
Как можно оптимизировать данный код? (Возможно несколько решений)
main h1 {
  color: red;
}
main p {
  color: red;
}
main a {
  color: red;
}
[⬆] Вопросы по JavaScript:
Объясните делегирование событий.
Объясните, как this работает в JavaScript.
Расскажите, как работает прототипное наследование.
Что вы думаете о AMD против CommonJS?
Объясните, почему это не является IIFE: function foo(){ }();.
Что необходимо изменить, чтобы это стало IIFE?
В чём различие между переменными, значение которых: null, undefined и не объявлено?
Как бы вы проверили их на каждое из этих значений?
Что такое замыкание и как/для чего его используют?
Можете ли вы описать основное различие между циклом forEach и циклом .map()? И в каких случаях каждый из них используется?
Расскажите про другие популярные методы итерации массивов.
В каких случаях обычно используются анонимные функции?
Как вы организуете свой код? (module pattern, classical inheritance)
В чем разница между host-объектами и нативными объектами?
В чем разница между: function Person(){}, var person = Person(), и var person = new Person()?
В чем разница между .call и .apply?
Что делает и для чего нужна функция Function.prototype.bind?
В чем разница между feature detection (определение возможностей браузера), feature inference (предположение возможностей) и анализом строки user-agent?
Расскажите об Ajax как можно более подробно.
Какие преимущества и недостатки в использовании Ajax?
Объясните, как работает JSONP (и почему это не совсем AJAX).
Вы когда-нибудь использовали шаблонизацию на JavaScript?
Если да, то какие библиотеки вы использовали?
Расскажите, что такое поднятие (hoisting).
Объясните, что такое всплытие событий (event bubbling).
В чём разница между «атрибутом» (attribute) и «свойством« (property)?
Почему не следует расширять нативные JavaScript-объекты?
В чём разница между событием document load и событием document DOMContentLoaded?
В чём разница между == и ===?
Объясните same-origin policy в контексте JavaScript.
Сделайте так, чтобы этот код работал:
duplicate([1,2,3,4,5]); // [1,2,3,4,5,1,2,3,4,5]
Почему тернарный оператор так называется?
Что делает строчка "use strict";? Какие достоинства и недостатки от ее использования?
Напишите цикл, который перебирает числа до 100, возвращая “fizz” на числа кратные 3, “buzz” на числа кратные 5 и “fizzbuzz” на числа кратные 3 и 5
Почему считается хорошим тоном оставить глобальную область видимости (global scope) в нетронутом состоянии?
Для чего используют событие load? Есть ли у этого события недостатки? Знаете ли вы какие-либо альтернативы, и в каких случаях бы стали их использовать?
Расскажите, что такое одностраничное приложение, и как сделать его SEO-оптимизированным.
Насколько вы опытны в работе с промисами (promises) и/или их полифилами?
Какие преимущества и недостатки при использовании промисов вместо колбэков (callbacks)?
Каковы преимущества и недостатки написания JavaScript-кода на языке, который компилируется в JavaScript?
Какие инструменты и методы вы используете при отладке кода?
Какие языковые конструкции вы используете для итерации по свойствам объекта и элементам массива?
Объясните разницу между изменяемыми (mutable) и неизменяемыми (immutable) объектами.
Приведите пример неизменяемого объекта в JavaScript.
Какие преимущества и недостатки у неизменяемости?
Как вы можете достигнуть неизменяемости в вашем коде?
Объясните разницу между синхронными и асинхронными функциями.
Что такое цикл событий (event loop)?
В чём разница между стеком вызовов (call stack) и очередью событий (task queue)?
Объясните разницу при использовании foo в function foo() {} и var foo = function() {}
В чём различие между переменными, созданными при помощи let, var и const?
Можем ли мы менять свойства объекта объявленного через const? Как мы можем изменить это поведение?
В чём разница между классом в ES6 и функцией-конструктором в ES5?
Можете ли вы привести пример использования стрелочных функции =>? Чем они отличаются от других функций?
Дайте определение функции высшего порядка.
Можете ли вы привести пример деструктуризации объекта или массива?
Шаблонные строки в ES6 намного упрощают создание строк, можете ли вы привести пример их использования?
Можете ли вы привести пример каррированной функции (curry function) и в чём их преимущество?
В чём преимущества использования spread оператора и чем он отличается от rest оператора?
Каким образом можно обмениваться кодом между файлами?
Для чего используются статические члены класса?
Объясните разницу между event.target и event.currentTarget?
Объясните разницу между event.preventDefault() и event.stopPropagation()?
[⬆] Вопросы по тестированию:
Какие преимущества/недостатки в тестировании собственного кода?
Какие инструменты вы будете использовать для тестирования работоспособности своего кода?
В чём различие между юнит-тестами и функциональными/интеграционными тестами?
Для чего предназначены линтеры (code style linting tool)?
[⬆] Вопросы по производительности:
Какие инструменты вы используете, чтобы найти недостатки в производительности вашего кода?
Какие вы знаете способы улучшения производительности при скроллинге на вебсайте?
Объясните разницу между раскладкой (layout), painting и композитингом (compositing).
[⬆] Вопросы по сетям:
Почему лучше загружать ресурсы для сайта с нескольких доменов?
Опишите весь процесс, начиная с ввода адреса сайта в адресную строку до окончания его загрузки на экране.
В чём различия между Long-Polling, Websockets и Server-Sent Events?
Опишите следующие заголовки HTTP-запросов и ответов:
Разницу между Expires, Date, Age и If-Modified-…
Do Not Track
Cache-Control
Transfer-Encoding
ETag
X-Frame-Options
Что такое HTTP-методы? Перечислите все HTTP-методы, которые вы знаете, и объясните их.
[⬆] Примеры кода на JavaScript
Вопрос: Чему равно foo?

var foo = 10 + '20';
Вопрос: Что выводит код ниже?

console.log(0.1 + 0.2 == 0.3);
Вопрос: Как сделать, чтобы это выражение работало?

add(2, 5); // 7
add(2)(5); // 7
Вопрос: Какое значение возвращает данное выражение?

"i'm a lasagna hog".split("").reverse().join("");
Вопрос: Чему равно window.foo?

( window.foo || ( window.foo = "bar" ) );
Вопрос: Что покажут эти два alert?

var foo = "Hello";
(function() {
  var bar = " World";
  alert(foo + bar);
})();
alert(foo + bar);
Вопрос: Чему равно foo.length?

var foo = [];
foo.push(1);
foo.push(2);
Вопрос: Чему равно foo.x?

var foo = {n: 1};
var bar = foo;
foo.x = foo = {n: 2};
Вопрос: Что выводит код ниже?

console.log('one');
setTimeout(function() {
  console.log('two');
}, 0);
console.log('three');
Вопрос: В чем разница между этими четырьмя промисами (promises)?

doSomething().then(function () {
  return doSomethingElse();
});

doSomething().then(function () {
  doSomethingElse();
});

doSomething().then(doSomethingElse());

doSomething().then(doSomethingElse);
[⬆] «Светская беседа»:
Самое крутое, что вы когда-либо делали и чем гордитесь?
Что вы больше всего любите в ваших инструментах разработки?
Кто из фронтенд-сообщества вас вдохновляет?
У вас есть какие-нибудь личные проекты? Какого рода?
Какая ваша любимая “фишка” Internet Explorer?
Какой кофе вы предпочитаете?

30 вопросов на собеседовании фронтенд разработчика

Казалось бы, вопросы на собеседовании frontend разработчика Junior не должны отличаться от стандартных задачек с IT-сайтов. Даже мы приводили 5 простых тестовых заданий для младшего фронтенд-программиста.

Ключевые выводы:
• Собеседование фронтенд-разработчика охватывает JavaScript, CSS, HTML, сетевые протоколы и архитектурные паттерны
• Интервьюеры часто просят сравнить технологии (let vs const, cookie vs localStorage, сброс vs нормализация CSS)
• Помимо теории, важно уметь писать код: проверка типов, работа с DOM, асинхронность
• Знание REST API, Event loop и методов оптимизации загрузки страницы критически важно для junior-позиции
Но складывается впечатление, что работодатели с каждым годом придумывают больше заковыристых вопросов, чтобы поставить кандидата в тупик. Такие мы рассмотрим в том числе.

Держите популярные вопросы с frontend интервью.

1. Разница между let, var и const
let, var и const — это ключевые слова, используемые в JavaScript для объявления переменных.

var долгое время был основным способом объявления переменных в JavaScript до появления let и const. var имеет область видимости функции и может быть изменен в любом месте в этой функции.

Пример:

function myFunction() {
  var x = 1;
  if (true) {
    var x = 2; // переназначение переменной x
    console.log(x); // 2
  }
  console.log(x); // 2
}

let и const были добавлены в стандарт ECMAScript 6 (ES6) и имеют блочную область видимости. let может быть изменен, но const не может.

Примеры:

// пример с let
function myFunction() {
  let x = 1;
  if (true) {
    let x = 2; // создание новой переменной x
    console.log(x); // 2
  }
  console.log(x); // 1
}

// пример с const
const PI = 3.14;
PI = 3.14159; // TypeError: Assignment to constant variable.

Используйте let, если вы собираетесь изменять значение переменной, и const, если не собираетесь. Используйте var, если вам нужно поддерживать совместимость со старыми браузерами или если вы хотите использовать его особенности, такие как функциональная область видимости.

2. Разница между cookie, sessionStorage и localStorage
Вот он, родной и горячо любимый HTML.

cookie, sessionStorage и localStorage — это технологии для хранения данных на стороне клиента в браузере. Однако, у них есть различия в использовании и хранении данных.

cookie — небольшой фрагмент данных, который отправляется сервером в браузер, а затем сохраняется в браузере клиента. Cookie могут храниться в течение определённого периода времени, определяемого сервером. Они используются для сохранения пользовательских настроек, данных авторизации и другой информации о пользователях.

Пример:

document.cookie = "username=John Doe; expires=Thu, 18 Dec 2023 12:00:00 UTC; path=/";

sessionStorage — объект, который позволяет сохранять данные в браузере на время сессии, т.е. пока вкладка браузера открыта. Данные сохраняются в виде пары ключ-значение, и они могут быть использованы для сохранения состояния приложения или другой информации, которая должна быть доступна только в течение сессии.

Пример:

sessionStorage.setItem('username', 'John');
console.log(sessionStorage.getItem('username')); // выводит "John"

localStorage — объект, который позволяет сохранять данные в браузере на неопределенный период времени, т.е. данные будут доступны даже после закрытия браузера и перезагрузки компьютера. Данные также сохраняются в виде пары ключ-значение и могут быть использованы для сохранения состояния приложения или другой информации, которая должна быть доступна в любое время.

Пример:

localStorage.setItem('username', 'John');
console.log(localStorage.getItem('username')); // выводит "John"

В целом, разница между cookie, sessionStorage и localStorage заключается в их жизненном цикле и времени жизни, а также в том, как они могут быть использованы в приложениях.

3. Какая технология наиболее популярна сейчас и точно будет популярна ещё несколько лет?
Резкий скачок от чисто технических вопросов на собеседовании Junior frontend к чисто философским, не так ли? Но сегодня это нормальная практика, и ей не стоит удивляться.

Сразу хочется подчеркнуть, что здесь нет единого правильного варианта ответа, ведь фронт-енд в последние годы стал очень многогранен, обзавёлся кучей прогрессивных библиотек и фреймворков. Поэтому давайте поразмышляем в несколько творческом ключе.

Сейчас в веб-разработке наиболее популярным языком является JavaScript и его фреймворки, такие как React, Angular и Vue.js. JavaScript используется для создания интерактивных пользовательских интерфейсов, а также для создания бэкенд-серверов с помощью Node.js.


Не стоит забывать и о набирающих популярность технологиях, которые связаны с искусственным интеллектом, машинным обучением и анализом данных. Скорее всего, они также будут иметь значительное влияние на веб-разработку в будущем. В частности, библиотеки и фреймворки для визуализации данных, такие как D3.js и Chart.js, станут очень популярны в создании интерактивных графиков и диаграмм на веб-сайтах.

4. Напишите простую функцию, чтобы проверить, является ли число целым
Здесь всё просто:

function isInteger(num) {
  return num % 1 === 0;
}

Эта функция принимает число в качестве аргумента и возвращает true, если число является целым, и false, если число имеет дробную часть.

Например:

console.log(isInteger(4)); // true
console.log(isInteger(4.2)); // false
console.log(isInteger(-3)); // true

5. Что такое прогрессивная отрисовка?
Да, некоторые вопросы для фронтенд разработчика могут быть даже такими.

Прогрессивная отрисовка — это метод веб-разработки, который позволяет поэтапно отображать содержимое веб-страницы по мере его загрузки. Сначала отображается минимальное количество информации, а затем дополнительные элементы и детали добавляются по мере загрузки страницы.

Этот подход особенно полезен для улучшения пользовательского опыта и снижения времени загрузки страницы. Пользователи могут начать взаимодействовать с сайтом намного быстрее, чем если бы они должны были ждать, пока вся страница будет загружена полностью.

Кроме того, прогрессивная отрисовка также может быть полезна для оптимизации производительности, поскольку она позволяет снизить объем передаваемых данных и ускорить время отклика сервера.

бложка внешней ссылки
5 простых тестовых заданий на позицию Junior Frontend-разработчик
tproger.ru
Примеры технологий, которые позволяют использовать прогрессивную отрисовку, включают в себя постраничную подгрузку контента, ленивую загрузку изображений и использование CSS-анимации для плавного отображения элементов страницы.

6. На что стоит обратить внимание при разработке мультиязычных сайтов?
При разработке мультиязычных сайтов необходимо обратить внимание на следующие аспекты:

Выбор подходящей системы управления контентом (CMS). Некоторые CMS, такие как WordPress и Drupal, предоставляют встроенную поддержку мультиязычности, что может значительно упростить разработку и управление мультиязычными сайтами.
Кодирование текста и использование правильных языковых символов. Кодировка должна соответствовать требованиям языков, на которых будет отображаться сайт. Например, для языков, использующих кириллицу, должна быть выбрана кодировка UTF-8.
Организация контента на сайте. Необходимо разработать систему, которая позволит организовать контент на сайте таким образом, чтобы пользователи могли легко найти информацию на нужном им языке. Для этого можно использовать разделение контента на языковые версии или использовать переключатели языков.
Локализация. При переводе текста на другой язык необходимо учитывать культурные особенности языка и местные нормы и стандарты. Кроме того, может потребоваться локализация форматов дат, валют и других данных, которые зависят от конкретного региона.
Тестирование и отладка. Необходимо тщательно протестировать все языковые версии сайта, чтобы убедиться, что контент отображается корректно, а функциональность работает правильно на всех языках.
SEO-оптимизация для каждого языка. Для каждой языковой версии сайта необходимо провести SEO-анализ и оптимизировать контент, мета-теги и другие аспекты для местных поисковых систем и языковых запросов пользователей.Например, таким бы было оформление sitemap.xml, будь у Tproger английская версия:

    https://tproger.ru
    
    

Подробнее о мультиязычной настройке Sitemap можно почитать в документации Google.

Учитывая эти аспекты, можно разработать качественный мультиязычный сайт, который будет удобен и понятен для пользователей на разных языках.

7. Написать код для получения текущего URL
В JavaScript можно получить текущий URL страницы, используя свойство window.location.href:

const currentUrl = window.location.href;
console.log(currentUrl); // выведет текущий URL в консоль

Подобные вопросы на собеседовании frontend разработчика звучат нечасто, но всё же ответ должен быть полным.

Итак, это свойство возвращает текущий URL, включая протокол, имя хоста, порт (если он есть), путь и параметры запроса. Если необходимо получить только определенную часть URL (например, только путь), можно использовать другие свойства объекта window.location, такие как pathname или search.

8. Разница между &lt;script&gt;, &lt;script async&gt; и &lt;script defer&gt;
Тег <script> используется для загрузки и выполнения JavaScript-кода на веб-странице. Тег <script> может иметь атрибуты async и defer, которые позволяют задать способ загрузки скрипта.

<script> будет загружаться и выполняться синхронно, т.е. парсер HTML-документа остановится на этом теге, выполнит скрипт, и только после этого продолжит загрузку страницы.

<script async> будет загружаться асинхронно, т.е. парсер HTML-документа продолжит загрузку страницы без ожидания загрузки и выполнения скрипта. Как только скрипт будет загружен, он начнет выполняться, даже если страница еще не полностью загружена.

<script defer> также будет загружаться асинхронно, но его выполнение будет отложено до того момента, когда страница будет полностью загружена.

Примеры:

Важно отметить, что использование атрибутов async и defer может повлиять на порядок выполнения скриптов на странице, поэтому необходимо тщательно планировать их использование. Подобные развёрнутые ответы на вопросы на собеседовании фронтенд разработчика дадут вам значительное преимущество.

9. Что такое REST и RESTful API?
REST (Representational State Transfer) — это архитектурный стиль, используемый при проектировании распределенных систем. Он был описан в диссертации Роя Филдинга в 2000 году и является основой для создания RESTful API.

RESTful API — это веб-сервис, который использует протокол HTTP для обмена данными. Он предоставляет возможность получать, создавать, обновлять и удалять данные на удаленном сервере, используя стандартные HTTP-методы (GET, POST, PUT, DELETE и т. д.).

RESTful API использует ресурсы (например, товары, пользователи, заказы) и URI (Uniform Resource Identifier) для доступа к этим ресурсам. Клиент отправляет запросы на сервер, указывая URI и метод HTTP, а сервер возвращает ответ, который может содержать данные в различных форматах (например, JSON или XML).

бложка внешней ссылки
Основы REST: теория и практика
tproger.ru
Принципы RESTful API:

Клиент-серверная архитектура: сервер и клиент независимы друг от друга, что позволяет развивать их независимо.
Отсутствие состояния (stateless): каждый запрос клиента должен содержать всю необходимую информацию для его обработки, без сохранения состояния на сервере.
Кэширование: клиенты могут кэшировать ответы сервера, чтобы уменьшить количество запросов.
Единообразие интерфейса: единообразный интерфейс между клиентом и сервером упрощает взаимодействие и увеличивает его надежность.
Слои: клиент не должен знать о слоях на сервере, которые обрабатывают запросы.
RESTful API является широко используемым в веб-разработке и предоставляет удобный и гибкий способ обмена данными между сервером и клиентом.

10. Разница между «сбросом» и «нормализацией» CSS
Заметили, что вопросы Junior frontend разработчику часто включают в себя какие-то сравнения? Это неспроста. Интервьюеры специально «гоняют» по отличиям, чтобы одним махом понять вашу осведомлённость во всех сравниваемых элементах.

Ответить на этот фронтенд вопрос несложно.

Сброс CSS и нормализация CSS — это два разных подхода к обнулению стилей веб-страницы.

Сброс CSS — это процесс обнуления стилей, чтобы убрать браузерные стили по умолчанию, которые могут отличаться от одного браузера к другому. Цель сброса CSS — создать «чистую» страницу, на которой все элементы имеют одинаковый вид в разных браузерах. Пример кода:

/* сброс CSS */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

Нормализация CSS — это процесс создания единообразных стилей для разных элементов, чтобы веб-страница выглядела одинаково во всех браузерах. В отличие от сброса CSS, нормализация CSS сохраняет некоторые стили по умолчанию браузера, но при этом пытается сделать их единообразными. Пример:

/* нормализация CSS */
html {
  font-size: 62.5%;
}
body {
  font-size: 1.6rem;
  line-height: 1.5;
  font-family: Arial, sans-serif;
}

Оба подхода могут использоваться в зависимости от нужд проекта. Если вы хотите создать полностью уникальный дизайн, то возможно вам нужен сброс CSS. Если же вы хотите сохранить некоторые стили браузера, но при этом сделать веб-страницу более единообразной, то нормализация CSS может быть более подходящим вариантом.

11. Что такое «трёхстороннее рукопожатие»?
Медленно но уверенно вопросы для frontend разработчика перетекли в сферу безопасности.

Трехстороннее рукопожатие (Triple Handshake) — это проблема безопасности в компьютерных сетях, которая возникает при использовании SSL/TLS-соединений.

В процессе установки безопасного соединения SSL/TLS между клиентом и сервером происходит обмен сообщениями, который состоит из трех шагов (трехстороннее рукопожатие):

Клиент отправляет серверу сообщение SYN с произвольным начальным номером (seq).
Сервер отправляет клиенту сообщение SYN-ACK, подтверждающее получение сообщения SYN и содержащее свой собственный произвольный начальный номер (seq) и номер последовательности подтверждения (ack), который равен начальному номеру клиента +1.
Клиент отправляет серверу сообщение ACK с номером подтверждения, который равен начальному номеру сервера +1.
Проблема Triple Handshake возникает, когда злоумышленник нарушает правильный порядок шагов рукопожатия, вставляя свой сервер между клиентом и настоящим сервером. В этом случае злоумышленник может получить доступ к конфиденциальной информации, передаваемой между клиентом и сервером.


Чтобы избежать проблемы Triple Handshake, необходимо использовать проверенные и безопасные протоколы SSL/TLS и устанавливать соединение только с доверенными серверами.

12. Что такое NaN?
Это специальное значение в JavaScript, которое означает «не число» (Not-a-Number).

Возможные причины, по которым значение становится NaN:

Попытка выполнить математическую операцию с нечисловым значением.
Попытка выполнить математическую операцию, результат которой не может быть представлен числом, например деление нуля на ноль или вычисление квадратного корня из отрицательного числа.
Преобразование строки в число, если строка не является валидным числом.
let result1 = 10 / "hello"; // result1 будет равен NaN
let result2 = Math.sqrt(-1); // result2 будет равен NaN
let result3 = parseInt("hello"); // result3 будет равен NaN

Значение NaN имеет интересное свойство: оно не равно ни одному другому значению, включая само себя. Поэтому существует специальная функция isNaN(), которая позволяет проверить, является ли значение NaN:

let result = isNaN(NaN); // result будет равен true
let result2 = isNaN("hello"); // result2 будет равен true, потому что строка "hello" не может быть преобразована в число
let result3 = isNaN(10); // result3 будет равен false, потому что 10 - это число

13. Как реализовать отложенную загрузку изображений?
Да, такие вопросы фронтенд разработчик должен щёлкать, как семечки.

Отложенная загрузка изображений — это способность страницы загружать изображения только тогда, когда они понадобятся пользователю. Это может ускорить время загрузки страницы и уменьшить использование данных. Есть несколько способов реализации отложенной загрузки изображений.

Lazy Loading — техника, которая позволяет отложить загрузку изображений, находящихся за пределами видимой области. Для этого можно использовать библиотеки, такие как Lazysizes или Intersection Observer API.

Атрибуты data- — Вы можете использовать атрибут data- вместе с атрибутом src, чтобы отложить загрузку изображения:

Затем вы можете использовать JavaScript, чтобы загрузить изображение, когда оно станет видимым:

const img = document.querySelector('img');
img.setAttribute('src', img.getAttribute('data-src'));

Использование CSS для изменения размера изображения, уменьшения его качества или изменения его формата. Например, вы можете использовать свойство "background-image" для загрузки изображения как фон элемента:

.element {
  background-image: url(path-to-image.jpg);
}

Это не полный список способов реализации отложенной загрузки изображений, и выбор конкретных методов зависит от требований проекта и целевой аудитории.

14. Что такое Event loop и как он работает?
это механизм в JavaScript, который позволяет выполнить асинхронный код и обрабатывать события, такие как клики мыши, нажатия клавиш и таймеры.

Event loop работает внутри JavaScript движка и состоит из двух основных фаз: фаза синхронизации и фаза выполнения задач. В фазе синхронизации обрабатываются синхронные операции, такие как выполнение кода и обработка событий, которые были помещены в очередь в прошлый цикл. В фазе выполнения задач обрабатываются асинхронные операции, такие как колбэки таймеров и событий.

Когда JavaScript выполняет код, все синхронные операции помещаются в очередь. Когда очередь становится пустой, Event loop проверяет, есть ли в очереди асинхронные операции. Если есть, они выполняются в порядке их добавления в очередь.

Например, если мы вызываем setTimeout с задержкой в 1 секунду, функция setTimeout помещает колбэк функцию в очередь и устанавливает таймер на 1 секунду. Когда таймер сработает, колбэк функция будет добавлена в очередь, и Event loop выполнит ее.

Важно понимать, что фаза выполнения задач может быть перервана фазой синхронизации. Например, если мы запускаем бесконечный цикл, который занимает все ресурсы процессора, JavaScript не сможет выполнить другие задачи, пока цикл не закончится.

Event loop является важным концептом в асинхронном программировании на JavaScript, поэтому важно понимать, как он работает, чтобы писать эффективный и предсказуемый асинхронный код.

15. В чём разница между .call и .apply?
Методы .call() и .apply() используются для вызова функции с заданным значением this, а также для передачи аргументов в функцию. Основная разница между ними заключается в способе передачи аргументов.

Метод .call() принимает список аргументов, переданных в функцию через запятую. В то же время, метод .apply() принимает массив аргументов, переданных в функцию.

Вот пример использования методов .call() и .apply():

function greet(name, age) {
  console.log(`Hello, my name is ${name} and I am ${age} years old.`);
}

greet.call(null, 'John', 30);
// выводит: Hello, my name is John and I am 30 years old.

greet.apply(null, ['Jane', 25]);
// выводит: Hello, my name is Jane and I am 25 years old.

В обоих случаях мы вызываем функцию greet() с this равным null. В первом случае мы передаем два аргумента в функцию через запятую, а во втором случае мы передаем массив из двух аргументов в функцию.

Понравился такой формат? Держите ещё 15 интересных вопросов к собеседованию фронтенд. Проверьте себя: пишите свои ответы в комментариях.

Как изменить цвет в svg файле? Назовите хотя бы один способ.
Как можно протестировать API-сервис?
Какие проблемы могут возникнуть при использовании атрибута «defer» для подключения скриптов?
Как можно реализовать адаптивное изображение, чтобы снизить нагрузку на сервер и ускорить загрузку страницы?
В каких случаях используются анонимные функции?
Что такое специфичность CSS-селекторов и как она работает?
Представьте HTML5 как открытую веб-платформу. Из каких блоков состоит HTML5?
В чём различия между Long-Polling, Websockets и Server-Sent Events?
Какие преимущества/недостатки в использовании CSS препроцессоров?
Напишите цикл, который перебирает числа до 100, возвращая «Типичный» на числа кратные 3, «программист» на числа кратные 5 и «Типичный программист» на числа кратные 3 и 5.
В чём разница между == и ===?
Использовали ли вы систему сеток, и если да, то какую вы предпочитаете?
Для чего нужен doctype?
Опишите, как бы вы реализовали самый обычный слайдер.
Какие преимущества и недостатки у CSS и JavaScript анимаций?
Часто задаваемые вопросы
Какие вопросы задают на собеседовании frontend?
На собеседовании фронтенд-разработчика спрашивают про JavaScript (типы данных, замыкания, Event loop, промисы), HTML/CSS (семантика, специфичность селекторов, Flexbox/Grid), работу с DOM, HTTP-протокол, REST API и основы фреймворков (React, Vue, Angular). Также могут дать практическое задание на написание кода.

Нужно ли знать алгоритмы для фронтенда?
Базовое понимание алгоритмов и структур данных полезно, но для junior-фронтенда они не являются ключевым требованием. Важнее знать JavaScript, DOM API, CSS и основы работы браузера. Алгоритмические задачи чаще встречаются на собеседованиях в крупные компании (FAANG-уровня).

Как подготовиться к собеседованию frontend-разработчика?
Изучите основы JavaScript (ES6+), HTML5 и CSS3. Разберите частые вопросы про let/const/var, замыкания, промисы, Event loop. Практикуйтесь в решении задач на написание кода. Подготовьте портфолио с проектами и будьте готовы объяснить архитектурные решения в своих работах.

Вопросы и ответы для собеседования на позицию frontend-разработчик. Часть 1
Простой
20 мин
166K
Веб-разработка
*
JavaScript
*

Всем привет! В этой статье хотел бы поделиться вопросами и ответами, которые я задаю на собеседованиях фронтенд-разработчикам и которые попадались мне, когда я сам искал работу. Здесь собраны вопросы именно по JavaScript. В дальнейшем планирую рассмотреть TypeScript отдельно, а также React и связанные с ним технологии.

Советую не заучивать их, а разобраться в каждом примере, так как все вопросы являются типовыми и могут встретиться только в другой формулировке. Если что-то не понятно, лучше посмотреть в документации, а не прочитать и забыть. Также рекомендую подписаться на мой канал, где я стараюсь выкладывать интересный материал, который также поможет вам при прохождении собеседования.

Стартуем! 🚀

1. Что такое цикл событий (event loop) и как он работает?
Цикл событий (event loop) - это механизм, используемый в JavaScript и других языках программирования для обработки событий и выполнения асинхронного кода. Он позволяет программе эффективно обрабатывать события, такие как пользовательские действия, таймеры, сетевые запросы и другие асинхронные операции.

Работа цикла событий в JavaScript обычно выглядит следующим образом:

Ожидание событий: Цикл событий начинает свою работу, ожидая возникновения событий. Это могут быть пользовательские действия (например, щелчки мыши или нажатия клавиш), таймеры, сетевые запросы или другие асинхронные операции.

Обработка событий: Когда событие происходит, оно помещается в очередь событий (event queue). Цикл событий извлекает событие из очереди и передает его на обработку.

Выполнение обработчиков событий: Цикл событий вызывает соответствующий обработчик события, который содержит код, который должен быть выполнен в ответ на событие. Обработчик выполняется синхронно, то есть блокирует выполнение других событий до завершения.

Обработка асинхронного кода: Если в обработчике события есть асинхронный код, такой как таймеры или сетевые запросы, он не блокирует выполнение других событий. Вместо этого асинхронный код помещается в очередь задач (task queue) для выполнения в будущем.

Возврат к ожиданию событий: После выполнения всех обработчиков событий и обработки асинхронного кода, цикл событий возвращается к ожиданию новых событий. Процесс повторяется, пока не будет завершена работа программы.

Цикл событий позволяет JavaScript выполнять асинхронный код без блокировки основного потока выполнения. Это позволяет создавать отзывчивые веб-приложения, которые могут обрабатывать пользовательские действия и одновременно выполнять другие задачи, такие как загрузка данных или анимации.

Еще можно почитать здесь.

2. Какие типы данных есть в JS?
Часто кандидаты ошибаются, когда отвечают на этот вопрос, почему так происходит не понятно.

Всего в JS 8 типов данных:

Число (number)

Строка (string)

Булевый (логический) тип (boolean)

BigInt

Symbol

null

undefiend

Object

3. Что такое NaN? Какого типа это значение? Как можно узнать, равно ли значение переменной NaN?
NaN расшифровывается как "Not A Number", это "false" (ложное) значение. Будьте аккуратны, выражение typeof NaN возвращает тип Number. Чтобы проверить значение переменной на соответствие NaN можно, воспользовавшись встроенным методом isNaN() или используя оператор тройного равенства ===.

let x = NaN;
console.log(isNaN(x)); // true

let y = 5 / "hello";
console.log(Number.isNaN(y)); // true

let z = 10;
console.log(isNaN(z)); // false
Объяснить с
4. В чем разница между let, const и var?
Начнем с var:

Переменные, объявленные с помощью var, имеют функциональную область видимости или область видимости внутри целого файла.

Переменные var могут быть переопределены и переобъявлены в той же области видимости.

Переменные var поднимаются (hoisted) в начало своей области видимости, что означает, что их можно использовать до их фактического объявления.

Пример:

console.log(x); // undefined
var x = 5;
console.log(x); // 5
Объяснить с
let:

Переменные, объявленные с помощью let, имеют блочную область видимости, ограниченную фигурными скобками {}.

Переменные let не могут быть переобъявлены в той же области видимости, но могут быть переопределены.

Переменные let не поднимаются (не hoisted) и не могут быть использованы до их объявления.

Пример:

console.log(x); // ReferenceError: x is not defined
let x = 5;
console.log(x); // 5
Объяснить с
const:

Переменные, объявленные с помощью const, также имеют блочную область видимости.

Переменные const должны быть инициализированы при объявлении и их значение не может быть изменено после этого.

Переменные const не могут быть переобъявлены или переопределены.

const также создает неизменяемую ссылку на объект, поэтому значения внутри объекта могут быть изменены, но сама ссылка остается неизменной.

Примеры:

const x = 5;
console.log(x); // 5

x = 10; // TypeError: Assignment to constant variable.
Объяснить с
const a = [];
a.push(1); // Так можно

const b = {};
b['a'] = 1; // Так тоже можно
Объяснить с
5. Что такое this? Отличие this в function declaration и стрелочных функциях
this - это специальное ключевое слово в JavaScript, которое ссылается на объект, в контексте которого выполняется текущий код. Значение this зависит от контекста вызова функции и может быть разным в различных ситуациях.

Функции (function declaration):

В функциях объявления значение this определяется во время выполнения функции, в зависимости от способа вызова функции.

Если функция вызывается как метод объекта, то this ссылается на сам объект, на котором вызывается метод.

Если функция вызывается как обычная функция, то this ссылается на глобальный объект (в браузере это объект window).

Пример:

function sayHello() {
  console.log(this.name);
}

const person = {
  name: 'John',
  sayHello: sayHello
};

person.sayHello(); // Выводит 'John'

const greet = person.sayHello;
greet(); // Выводит undefined (или ошибку, если 'use strict' включен)
Объяснить с
Стрелочные функции (arrow functions):

В стрелочных функциях значение this определяется лексически, оно берется из окружающего контекста, в котором функция была определена.

Стрелочные функции не имеют своего собственного this, поэтому они не создают новый контекст this и не зависят от способа вызова.

Вместо этого, this в стрелочных функциях ссылается на this окружающего контекста.

Пример:

const person = {
  name: 'John',
  sayHello: function() {
    const greet = () => {
      console.log(this.name);
    };
    greet();
  }
};

person.sayHello(); // Выводит 'John'
Объяснить с
6. С помощью чего в JS реализуются наследование?
В JavaScript наследование реализуется с помощью прототипов. Прототипное наследование - это механизм, который позволяет объектам наследовать свойства и методы других объектов. Еще появился новый в ECMAScript 2015 с помощью ключевого слова class.

Каждый объект в JavaScript имеет внутреннюю ссылку на прототип (prototype), которая указывает на другой объект. 

Существует несколько способов реализации наследования в JavaScript, рассмотрим их все.

Прототипное наследование с использованием prototype:

Создается конструктор (функция-класс), у которого есть свойство prototype.

Создаются новые объекты с помощью этого конструктора с помощью ключевого слова new.

Прототип нового объекта устанавливается равным прототипу конструктора.

Пример:

function Animal(name) {
  this.name = name;
}

Animal.prototype.sayHello = function() {
  console.log('Hello, my name is ' + this.name);
};

function Dog(name, breed) {
  Animal.call(this, name);
  this.breed = breed;
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function() {
  console.log('Woof!');
};

const myDog = new Dog('Buddy', 'Labrador');
myDog.sayHello(); // Выводит 'Hello, my name is Buddy'
myDog.bark(); // Выводит 'Woof!'
Объяснить с
Наследование с использованием class (введено в ECMAScript 2015):

Используется ключевое слово class для определения класса.

Используется ключевое слово extends для указания родительского класса.

Методы родительского класса могут быть переопределены или расширены в дочернем классе с помощью ключевого слова super.

Пример

class Animal {
  constructor(name) {
    this.name = name;
  }

  sayHello() {
    console.log('Hello, my name is ' + this.name);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }

  bark() {
    console.log('Woof!');
  }
}

const myDog = new Dog('Buddy', 'Labrador');
myDog.sayHello(); // Выводит 'Hello, my name is Buddy'
myDog.bark(); // Выводит 'Woof!'
Объяснить с
7. Что такое IIFE (Immediately Invoked Function Expression)?
IIFE (Immediately Invoked Function Expression) - это выражение функции, которое вызывается немедленно после его определения. Оно позволяет создавать локальную область видимости для переменных и функций, чтобы избежать конфликтов имен и сохранить приватность данных.

IIFE обычно используется для создания модулей, эмуляции блока кода с областью видимости или для выполнения некоторых инициализаций при загрузке страницы.

Пример IIFE:

(function() {
  // Код, который будет выполнен немедленно
  var x = 5;
  console.log(x); // Выводит 5
})();

// Переменные и функции, определенные внутри IIFE, не видны в глобальной области видимости
console.log(x); // ReferenceError: x is not definedВ приведенном примере, функция обернута в круглые скобки (function() { ... }), чтобы превратить ее в выражение. Затем, после закрывающей скобки, добавляются еще одни круглые скобки () для вызова функции немедленно.
Объяснить с
В приведенном примере, функция обернута в круглые скобки (function() { ... }), чтобы превратить ее в выражение. Затем, после закрывающей скобки, добавляются еще одни круглые скобки () для вызова функции немедленно.

IIFE может принимать аргументы, например:

(function(name) {
  console.log('Hello, ' + name);
})('John'); // Выводит 'Hello, John'
Объяснить с
IIFE также может возвращать значение, которое может быть присвоено переменной:

var result = (function() {
  return 5 + 3;
})();

console.log(result); // Выводит 8
Объяснить с
Использование IIFE помогает изолировать код и предотвращает его влияние на глобальную область видимости, что способствует более безопасному и организованному коду.

8. В чем разница между == и ===?
В JavaScript операторы сравнения == (двойное равенство) и === (тройное равенство) используются для сравнения значений. Они имеют следующие различия:

== (двойное равенство):

Оператор == выполняет нестрогое сравнение, сравнивая значения с приведением типов, если это необходимо.

Если типы операндов различаются, JavaScript пытается привести их к одному типу перед сравнением.

Например, при сравнении числа и строки, строка будет преобразована в число перед сравнением.

Пример

console.log(5 == '5'); // true
console.log(true == 1); // true
console.log(null == undefined); // true
Объяснить с
=== (тройное равенство):

Оператор === выполняет строгое сравнение, сравнивая значения без приведения типов.

Он сравнивает значения и типы операндов, и возвращает true только если они идентичны.

Пример:

console.log(5 === '5'); // false
console.log(true === 1); // false
console.log(null === undefined); // false
Объяснить с
9. Что такое замыкание в JavaScript?
В JavaScript замыкание (closure) - это комбинация функции и лексического окружения, в котором эта функция была объявлена. Замыкание позволяет функции сохранять доступ к переменным из своего внешнего лексического окружения, даже после того, как это окружение было удалено.

Небольшие примеры:

function outerFunction() {
  var outerVariable = 'Hello';

  function innerFunction() {
    console.log(outerVariable);
  }

  return innerFunction;
}

var closure = outerFunction();
closure(); // Вывод: Hello
Объяснить с
function createCounter() {
  var count = 0;

  return {
    increment: function() {
      count++;
      console.log(count);
    },
    decrement: function() {
      count--;
      console.log(count);
    }
  };
}

var counter = createCounter();
counter.increment(); // Вывод: 1
counter.increment(); // Вывод: 2
counter.decrement(); // Вывод: 1
Объяснить с
10. Что такое Promise, и какие бывают состояния
Promise - это объект в JavaScript, который представляет результат асинхронной операции. Промис позволяет обрабатывать результат операции, когда он станет доступным, вместо того, чтобы блокировать выполнение кода и ожидать завершения операции.

Промис может находиться в одном из трех состояний:

Pending: Исходное состояние промиса. Он находится в ожидании выполнения или отклонения операции.

Fulfilled: Промис переходит в это состояние, когда операция успешно завершается. В этом случае промис возвращает результат операции.

Rejected: Промис переходит в это состояние, когда операция завершается с ошибкой. В этом случае промис возвращает причину ошибки.

Пример использования промиса:

function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = 'Some data';
      // Имитация успешного выполнения операции
      resolve(data);
      // Имитация ошибки
      // reject('Error occurred');
    }, 2000);
  });
}

fetchData()
  .then(result => {
    console.log('Результат:', result);
  })
  .catch(error => {
    console.log('Ошибка:', error);
  });
Объяснить с
11. В чем разница и схожесть между null и undefined?
Null и undefined - это два различных значения в JavaScript, которые указывают на отсутствие значения.

Различия:

null - это явное значение, которое указывает на отсутствие или намеренное присвоение пустого значения. undefined - это значение, которое указывает на отсутствие присвоенного значения.

null - это объектный тип данных, который представляет отсутствие объекта. undefined - это примитивный тип данных.

null может быть присвоен явно, чтобы указать на отсутствие значения. undefined - это значение, которое присваивается переменной по умолчанию, когда она объявлена, но не инициализирована.

Сходства:

Осутствие значения: Оба значения, null и undefined, указывают на отсутствие значения.

Истинность: Оба значения рассматриваются как ложные (falsy) в логическом контексте. Это означает, что они преобразуются в false, когда используются в условных выражениях.

Присваивание: Оба значения могут быть присвоены переменным или свойствам объекта.

Тип данных: Оба значения являются уникальными значениями и не имеют своих собственных типов данных.

В целом, null используется, когда явно указывается отсутствие значения, в то время как undefined указывает на отсутствие присвоенного значения.

12. Почему результатом сравнения двух похожих объектов является false?
Результатом сравнения двух похожих объектов в JavaScript может быть false, потому что сравнение объектов происходит по ссылке, а не по содержимому.

Когда мы сравниваем два объекта, JavaScript проверяет, указывают ли оба операнда на один и тот же объект в памяти. Если это так, то результатом будет true. Однако, если операнды указывают на разные объекты, даже если они имеют одинаковую структуру и значения свойств, результатом будет false.

Пример:

const obj1 = { name: 'John', age: 25 };
const obj2 = { name: 'John', age: 25 };

console.log(obj1 === obj2); // Вывод: false
Объяснить с
В этом примере obj1 и obj2 содержат одинаковые свойства и значения, но они являются разными объектами в памяти. Поэтому результатом сравнения obj1 === obj2 будет false.

Если вам нужно сравнить содержимое двух объектов, вам придется реализовать собственную логику сравнения, перебирая свойства объектов и сравнивая их значения.

13. Для чего используется директива «use strict»?
Директива "use strict" используется в JavaScript для включения строгого режима выполнения кода. Когда эта директива указана в начале скрипта или функции, JavaScript выполняет код в строгом режиме, что означает, что некоторые неявные или устаревшие функции и конструкции языка будут запрещены или изменены, а некоторые ошибки будут вызывать исключения.

В основном используется для:

Предотвращение ошибок

Устранение неявных глобальных переменных

Запрет использования некоторых устаревших функций и конструкций

Улучшение безопасности

Примеры:

"use strict";
x = 10; // Ошибка: переменная "x" не была объявлена, если бы не было use strict создалась бы глобальная переменная
Объяснить с
"use strict";

function sum(a, a, c) { // Ошибка: Повторное объявление параметра функции запрещено в строгом режиме
  return a + a + c;
}

console.log(sum(1, 2, 3));
Объяснить с
"use strict";

delete Object.prototype; // Ошибка: Удаление свойства объекта запрещено в строгом режиме
Объяснить с
14. В чем разница между методами call, apply, bind?
Методы call, apply и bind являются частью языка JavaScript и используются для управления контекстом выполнения функций. Вот их основные различия:

call: Этот метод вызывает функцию с указанным контекстом и аргументами, переданными в виде отдельных аргументов. Синтаксис метода call выглядит следующим образом: function.call(context, arg1, arg2, ...). При использовании call аргументы передаются в виде списка, разделенного запятыми.

apply: Этот метод вызывает функцию с указанным контекстом и аргументами, переданными в виде массива. Синтаксис метода apply выглядит следующим образом: function.apply(context, [arg1, arg2, ...]). При использовании apply аргументы передаются в виде массива.

bind: Этот метод создает новую функцию, привязанную к указанному контексту. Он не вызывает функцию немедленно, а возвращает новую функцию, которую можно вызвать позже. Синтаксис метода bind выглядит следующим образом: function.bind(context). При использовании bind контекст функции фиксируется, и при вызове новой функции этот контекст будет сохраняться.

Примеры:

const obj = {
  name: 'John',
  greet: function(message) {
    console.log(`${message}, ${this.name}!`);
  }
};

const otherObj = {
  name: 'Jane'
};

// Использование метода call
obj.greet.call(otherObj, 'Hello'); // Вывод: Hello, Jane!

// Использование метода apply
obj.greet.apply(otherObj, ['Hi']); // Вывод: Hi, Jane!

// Использование метода bind
const boundGreet = obj.greet.bind(otherObj);
boundGreet('Hey'); // Вывод: Hey, Jane!
Объяснить с
function sum(a, b) {
  return a + b;
}

const numbers = [1, 2];

// Использование метода call с массивом аргументов
const result1 = sum.call(null, ...numbers);
console.log(result1); // Вывод: 3

// Использование метода apply с массивом аргументов
const result2 = sum.apply(null, numbers);
console.log(result2); // Вывод: 3

// Использование метода bind для создания каррированной функции
const addFive = sum.bind(null, 5);
const result3 = addFive(3);
console.log(result3); // Вывод: 8
Объяснить с
15. Что такое функции высшего порядка?
Функции высшего порядка - это функции, которые могут принимать другие функции в качестве аргументов или возвращать функции в качестве результата. В JavaScript функции высшего порядка являются мощным инструментом, позволяющим создавать более гибкий и модульный код. Вот несколько примеров функций высшего порядка:

Функция обратного вызова (Callback): Функция, которая передается в качестве аргумента в другую функцию и вызывается внутри нее. Это позволяет передавать логику выполнения внутрь другой функции.

Пример:

function calculate(num1, num2, operation) {
  return operation(num1, num2);
}

function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

const result1 = calculate(5, 3, add); // Вызов функции calculate с функцией add
console.log(result1); // Вывод: 8

const result2 = calculate(5, 3, multiply); // Вызов функции calculate с функцией multiply
console.log(result2); // Вывод: 15
Объяснить с
Функция обертка (Wrapper): Функция, которая принимает другую функцию и возвращает новую функцию, добавляя дополнительную логику или изменяя поведение оригинальной функции.

Пример:

function withLogging(func) {
  return function(...args) {
    console.log('Calling function:', func.name);
    const result = func(...args);
    console.log('Result:', result);
    return result;
  };
}

function multiply(a, b) {
  return a * b;
}

const wrappedMultiply = withLogging(multiply);
const result = wrappedMultiply(5, 3);
console.log(result); // Вывод: 15
Объяснить с
16. Как создать объект, не имеющий прототипа?
В JavaScript объекты обычно наследуют свойства и методы от своих прототипов. Однако, существует несколько способов создания объекта без прототипа:

Использование Object.create(null): Метод Object.create(null) создает новый объект с указанным прототипом null, что означает, что объект не будет наследовать свойства и методы от какого-либо прототипа.

Пример:

const obj = Object.create(null);
console.log(obj.toString); // Вывод: undefined
Объяснить с
Использование литерала объекта и null в качестве прототипа: Можно создать объект, используя литерал объекта и установив его прототип в null.

Пример:

const obj = Object.setPrototypeOf({}, null);
console.log(obj.toString); // Вывод: undefined
Объяснить с
Использование функции-конструктора без прототипа: Можно создать функцию-конструктор, которая не имеет прототипа, и создать объект с помощью этой функции.

Пример:

function NoPrototype() {
  // Пустая функция-конструктор без прототипа
}

const obj = new NoPrototype();
console.log(obj.toString); // Вывод: undefined
Объяснить с
Обратите внимание, что объекты без прототипа могут быть полезны в определенных случаях, но они также могут ограничивать функциональность и использование стандартных методов и свойств. Поэтому рекомендуется использовать объекты без прототипа с осторожностью и только в случаях, когда это действительно необходимо.

17. Что такое async/await?
async/await - это синтаксический сахар в языке программирования, который позволяет писать асинхронный код в более понятном и линейном стиле. Он используется в языках, поддерживающих асинхронное программирование, таких как JavaScript, C#, Python и других.

Преимущества использования async/await включают более простой и понятный синтаксис, отсутствие необходимости в явном использовании колбэков или цепочек промисов, а также возможность использования блоков try/catch для обработки ошибок.

Примеры:

async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log('Ошибка:', error);
  }
}

fetchData();
Объяснить с
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function delayedFunction() {
  console.log('Начало выполнения');
  await delay(2000);
  console.log('Задержка окончена');
}

delayedFunction();
Объяснить с
const axios = require('axios');

async function fetchData() {
  try {
    const response = await axios.get('https://api.example.com/data');
    const data = response.data;
    console.log(data);
  } catch (error) {
    console.log('Ошибка:', error);
  }
}

fetchData();
Объяснить с
18. В чем разница между spread-оператором и rest-оператором?
Spread-оператор и rest-оператор - это два разных оператора, которые используются в JavaScript для работы с массивами и объектами.

Spread-оператор (...):

Распространяет элементы массива или свойства объекта.

Используется для создания нового массива или объекта, содержащего элементы или свойства исходного массива или объекта.

Распаковывает элементы массива или свойства объекта, позволяя передавать их в другие функции или объединять с другими массивами или объектами.

Пример:

const numbers = [1, 2, 3];
const newArray = [...numbers, 4, 5]; // [1, 2, 3, 4, 5]

const person = { name: 'John', age: 30 };
const newPerson = { ...person, city: 'New York' }; // { name: 'John', age: 30, city: 'New York' }
Объяснить с
Rest-оператор (...):

Собирает оставшиеся аргументы функции в массив.

Используется для объявления параметра функции, который будет содержать все оставшиеся аргументы, переданные при вызове функции.

Пример:

function sum(...numbers) {
  let total = 0;
  for (let number of numbers) {
    total += number;
  }
  return total;
}

console.log(sum(1, 2, 3, 4, 5)); // 15

function printNames(first, last, ...middle) {
  console.log('First name:', first);
  console.log('Last name:', last);
  console.log('Middle names:', middle);
}

printNames('John', 'Doe', 'Smith', 'Johnson', 'Williams');
// First name: John
// Last name: Doe
// Middle names: ['Smith', 'Johnson', 'Williams']
Объяснить с
19. Как определить наличие свойства в объекте?
В JavaScript есть несколько способов определить наличие свойства в объекте.

Оператор in: Можно использовать оператор in, чтобы проверить наличие свойства в объекте или его прототипе.

const obj = { name: 'John', age: 30 };

console.log('name' in obj); // true
console.log('city' in obj); // false
Объяснить с
Метод hasOwnProperty(): Метод hasOwnProperty() проверяет, содержит ли объект указанное свойство и не учитывает свойства в прототипе объекта.

const obj = { name: 'John', age: 30 };

console.log(obj.hasOwnProperty('name')); // true
console.log(obj.hasOwnProperty('city')); // false
Объяснить с
Сравнение со значением undefined: Можно сравнить значение свойства с undefined, чтобы определить его наличие.

const obj = { name: 'John', age: 30 };

console.log(obj.name !== undefined); // true
console.log(obj.city !== undefined); // false
Объяснить с
Использование Object.keys(): Можно использовать метод Object.keys() для получения массива всех свойств объекта и затем проверить наличие свойства в этом массиве.

const obj = { name: 'John', age: 30 };

console.log(Object.keys(obj).includes('name')); // true
console.log(Object.keys(obj).includes('city')); // false
Объяснить с
20. Чем отличается Map от WeakMap?
Map и WeakMap - это две разные структуры данных в JavaScript, которые предоставляют ассоциативное отображение ключей на значения.

Вот основные отличия между Map и WeakMap:

Сильные ссылки и сборка мусора: В Map используются сильные ссылки на ключи, что означает, что если объект, используемый в качестве ключа, больше не используется, он не будет удален из памяти, пока есть ссылка на него. В WeakMap используются слабые ссылки на ключи, что означает, что если объект, используемый в качестве ключа, больше не имеет других ссылок, кроме ссылки из WeakMap, он может быть удален сборщиком мусора.

Ключи: В Map ключами могут быть любые значения, включая примитивы и объекты. В WeakMap ключами могут быть только объекты.

Итерация: Map поддерживает итерацию с помощью методов keys(), values() и entries(), которые возвращают итераторы для перебора ключей, значений и пар ключ-значение соответственно. WeakMap не поддерживает эти методы, поскольку слабые ссылки могут быть непредсказуемыми и не гарантируют порядок итерации.

Размер: Map имеет свойство size, которое возвращает количество элементов в Map. WeakMap не имеет свойства size, поскольку слабые ссылки не позволяют точно определить количество элементов.

Методы: Map предоставляет различные методы для работы с элементами, такие как set(), get(), has(), delete() и другие. WeakMap предоставляет только методы get(), set(), has() и delete().

В целом, Map обычно используется для обычных случаев ассоциативного отображения, когда ключи и значения должны оставаться в памяти, пока есть ссылки на них. WeakMap полезен, когда вам нужно ассоциативное отображение с объектами в качестве ключей, и вы хотите, чтобы объекты могли быть автоматически удалены из WeakMap, когда больше нет ссылок на них.

Еще можно почитать здесь и здесь.

21. Чем отличается Set от WeakSet?
Основное отличие между Set и WeakSet заключается в типе значений, которые они могут содержать, и в поведении при сборке мусора. Set может содержать любые значения и не удаляет их автоматически, а WeakSet может содержать только объекты и может быть автоматически очищен сборщиком мусора, если на объект больше нет ссылок.

Еще можно почитать здесь и здесь.

22. Как работает сборщик мусора в JS?
Сборщик мусора в JavaScript является встроенной функцией, которая автоматически освобождает память, занятую объектами, которые больше не используются в программе. Он следит за объектами, которые были созданы во время выполнения программы, и определяет, когда они больше не доступны для использования.

Сборщик мусора в JS использует алгоритм под названием "Mark and Sweep" (Пометка и Очистка). Вот как это работает:

Пометка (Mark): Сборщик мусора начинает с корневых объектов, таких как глобальный объект (window в браузере) и все объекты, на которые есть ссылки из корневых объектов. Он помечает эти объекты как активные.

Распространение (Propagation): Сборщик мусора рекурсивно проходит через все активные объекты и помечает объекты, на которые они ссылаются, как активные. Этот процесс продолжается до тех пор, пока все достижимые объекты не будут помечены.

Очистка (Sweep): После завершения пометки и распространения, сборщик мусора проходит по всей памяти и освобождает память, занятую не помеченными объектами. Он удаляет эти объекты и восстанавливает память для будущего использования.

Еще можно почитать здесь и здесь.

Также есть вопросы, которые не относятся напрямую к JavaScript, но я всегда задаю их, чтобы проверить кандидата на common knowledge.

1. Расскажите как работает браузер?
Браузер - это программное обеспечение, которое позволяет пользователям просматривать и взаимодействовать с веб-страницами. Вот основные шаги, которые браузер выполняет для отображения веб-страницы:

Ввод URL: Пользователь вводит URL (Uniform Resource Locator) в адресную строку браузера. URL указывает на веб-страницы, которую пользователь хочет посетить.

DNS-запрос: Браузер отправляет DNS-запрос (Domain Name System) на DNS-сервер, чтобы получить IP-адрес сервера, на котором хранится веб-страница. DNS-сервер преобразует доменное имя (например, www.example.com) в соответствующий IP-адрес.

Установка соединения: Браузер устанавливает TCP-соединение с сервером, используя полученный IP-адрес. Это позволяет браузеру отправлять и получать данные от сервера.

Запрос страницы: Браузер отправляет HTTP-запрос (Hypertext Transfer Protocol) на сервер, запрашивая веб-страницу. Запрос может содержать различные параметры, такие как метод запроса (GET, POST и т. д.), заголовки и тело запроса.

Получение ответа: Сервер обрабатывает запрос и отправляет обратно HTTP-ответ, содержащий запрошенную веб-страницу. Ответ может также содержать различные заголовки, статус ответа и тело ответа.

Рендеринг страницы: Браузер получает ответ от сервера и начинает обрабатывать его. Он анализирует HTML-код страницы, строит DOM (Document Object Model) - внутреннее представление страницы, и создает дерево элементов.

Загрузка ресурсов: Браузер загружает все связанные ресурсы, такие как изображения, стили CSS, скрипты JavaScript и другие файлы, указанные в HTML-коде страницы.

Отображение страницы: Браузер использует полученные ресурсы и информацию о стилях для отображения страницы на экране. Он располагает элементы в соответствии с их CSS-свойствами, применяет шрифты, цвета и другие стили, и отображает содержимое страницы.

2. Что такое DOM
DOM (Document Object Model) - это программное представление веб-страницы или XML-документа в виде древовидной структуры. DOM представляет каждый элемент документа (такие как теги, текстовые блоки, атрибуты) в виде объектов, которые можно манипулировать с помощью языков программирования, таких как JavaScript.

В JS DOM представлен объектом Document. DOM предоставляет стандартизированый способ доступа и изменения содержимого, структуры и стилей веб-страницы. Он позволяет программистам создавать динамические и интерактивные веб-приложения, изменять содержимое страницы, добавлять или удалять элементы, изменять атрибуты и стили, а также реагировать на события, такие как щелчки мыши или нажатия клавиш.

3. Из чего состоит HTTP запрос
На этот вопрос можно ответить так:

Метод запроса (Request Method): Определяет тип операции, которую клиент хочет выполнить на сервере. Некоторые распространенные методы запроса включают GET, POST, PUT, DELETE и HEAD.

Заголовки (Headers): Представляют собой метаданные, которые передаются вместе с запросом и содержат дополнительную информацию о запросе, такую как тип содержимого, аутентификация, кеширование и другие параметры.

Тело запроса (Request Body): Используется только в некоторых методах запроса, таких как POST или PUT. Оно содержит данные, которые клиент отправляет на сервер, например, форму для отправки или JSON-объект.

4. Что такое специфичность в CSS
Специфичность в CSS определяет, какой стиль будет применен к элементу, когда есть несколько правил, которые могут быть применены к нему. Это позволяет браузеру определить, какое правило имеет больший приоритет и должно быть применено.

Приоритет такой: инлайн стили, селектор ид, селектор класса, селектор тега.

Если два правила имеют одинаковую специфичность, то последнее правило в таблице стилей будет применено.

5. Разница между cookie, sessionStorage и localStorage
Веб-браузеры предоставляют несколько способов хранения данных на стороне клиента, таких как cookie, sessionStorage и localStorage.

Cookie:

Cookie - это небольшие текстовые файлы, которые хранятся на компьютере пользователя.

Cookie создаются сервером и отправляются в браузер, где они хранятся и отправляются обратно на сервер при каждом запросе.

Cookie имеют ограничение по размеру (обычно до 4 КБ) и количество (обычно до 20).

Cookie могут иметь срок годности, после которого они автоматически удаляются.

Cookie могут быть доступны как на сервере, так и на клиенте.

Cookie могут использоваться для хранения информации, такой как предпочтения пользователя, данные аутентификации и отслеживание состояния сеанса.

sessionStorage:

sessionStorage - это механизм хранения данных, доступный только в рамках одной вкладки браузера.

Данные, сохраненные в sessionStorage, остаются доступными только во время сеанса работы с текущей вкладкой браузера. При закрытии вкладки данные удаляются.

sessionStorage имеет ограничение по размеру (обычно до 5 МБ).

sessionStorage может использоваться для временного хранения данных, таких как состояние формы или временные настройки.

localStorage:

localStorage - это механизм хранения данных, доступный в рамках одного домена.

Данные, сохраненные в localStorage, остаются доступными даже после закрытия браузера и перезапуска компьютера.

localStorage имеет ограничение по размеру (обычно до 5 МБ).

localStorage может использоваться для хранения постоянных данных, таких как настройки пользователя или кэшированные данные.

Конечно, это не все вопросы, которые могут быть заданы на реальном собеседовании, но они покрывают около 70% технической части. 

Вопросы для собеседования Frontend разработчика (React)
23 сентября 2024
111
3 мин
Оглавление
Задачи и сложности
343 целевых кандидата и 16 собеседований
10 вопросов для собеседования фронтенд-разработчика (React)
Показать ещё
Недавно ко мне обратился СEO расширяющейся IT-компании с интересной, но непростой задачей. В условиях запуска новых продуктов им срочно был нужен квалифицированный Frontend Middle Engineer с опытом работы на React. И это всё — в полностью удаленном формате.

Задачи и сложности
Главная сложность заключалась не только в поиске специалиста с техническими навыками, но и в том, чтобы этот человек идеально подходил по личностным качествам.

Компании нужен был разработчик, который может работать самостоятельно, обладает высокой ответственностью и при этом умеет быть открытым и вовлеченным членом команды. Задача не из лёгких, ведь такие люди — как редкие бриллианты в море стандартных резюме.
343 целевых кандидата и 16 собеседований
Воронка сначала наполнилась быстро: за первую неделю мы собрали 343 резюме целевых кандидатов. Но, как известно, не каждый разработчик с опытом React — именно тот, кто нужен.

Еще больше про найм у меня в телеграм канале :)

После первичного отбора, собеседование прошли 16 целевых кандидатов. Мы составили точные вопросы для собеседований, чтобы понять, кто действительно соответствует требованиям.
10 вопросов для собеседования фронтенд-разработчика (React)
Вот те самые вопросы, которые помогли мне найти того самого идеального кандидата:

Расскажите в двух словах о том, чем вы занимались в последнем проекте? В чем заключается ваша работа?
Важно понять, как специалист структурирует информацию о своей роли и задачах.
Расскажите о команде, с которой вы работаете. Как распределяются роли?
Умение работать в команде и понимание её динамики — важный аспект, особенно при удаленной работе.
В каких еще проектах вы принимали участие? Какова была ваша роль в этих проектах?
Этот вопрос помогает раскрыть глубину и разнообразие опыта.
Какая самая сложная задача, с которой вы сталкивались, и как вы её решили?
Способность справляться с вызовами показывает уровень самостоятельности и креативности.
Какие виды автоматизации сборки вы использовали? Чем обоснована необходимость использования GULP или Webpack?
Знание инструментов сборки, таких как Webpack, показывает техническую осведомленность кандидата.
Есть ли у вас опыт с Server-Side Rendering (SSR)?
Мы выясняли, есть ли у кандидата навыки работы с SSR для оптимизации производительности приложения.
Можете привести примеры из вашей практики, как вы использовали API?
Практические примеры работы с API говорят о глубине опыта во взаимодействии с внешними сервисами.
Какие утилиты вы используете для автоматической проверки «чистоты» кода?
Здесь проверяется знание ESlint, Stylelint и Sonar — ключевых инструментов для поддержания качества кода.
Приходилось ли вам оптимизировать работу приложения? Как вы это делали? Насколько удалось оптимизировать?
Вопрос об оптимизации показывает, насколько кандидат ориентирован на производительность и качество продукта.
Как вы оцениваете свою работу над проектами с точки зрения эффективности?
Самооценка и критическое мышление важны для долгосрочной работы в проекте.
Результат
Всего за 18 дней мы вывели на работу того самого разработчика, который идеально соответствовал всем требованиям руководителей компании. Он не только показал высокий уровень профессиональных навыков, но и вписался в команду благодаря своим личностным качествам.

А благодаря тому, что мы нашли специалиста имеющего все необходимые компетенции, онбординг занял минимальный срок, после которого сразу приступил к рабочим задачам 🔥

Вопросы и задачи на собеседовании фронтенд-разработчика в 2025 году


Варианты вопросов с ответами для frontend junior во время технического собеседования

Вопросы и ответы для Middle фронтенд-разработчиков

Практические задачи для Junior фронтенд-разработчиков

Практические задачи для Middle фронтенд-разработчиков

Собеседования для программистов часто проходят в несколько этапов. Для тех, кто претендует на должность фронтенд-разработчика, испытания усложняются необходимостью продемонстрировать не только технические навыки, но и уровень креативного мышления.

Первый этап собеседования обычно сосредоточен на проверке софт-скиллов кандидата. Работодатели хотят убедиться, что кандидат обладает необходимыми коммуникативными навыками, способностью работать в команде и креативностью. Затем следует техническое интервью.

Варианты вопросов с ответами для frontend junior во время технического собеседования
Быть фронтенд-разработчиком сегодня — значит сочетать в себе дизайнерские и программные таланты, обеспечивая бесперебойную работу интерфейсов и их взаимодействие с сервером.

1. Как добавить CSS к HTML -документу?   

Несколькими способами: внутренним (внутри тега <style>), внешним (ссылкой на CSS-файл) и встроенным (через атрибут style).

2. Что такое селекторы в CSS ?

Селекторы выбирают элементы HTML для применения стилей. Есть классовые, идентификаторные и универсальные селекторы, а также комбинированные селекторы.

3. Как объявить функцию в JavaScript ?

Функцию можно создать, используя ключевое слово function:

function myFunction() { 
  // код 
}
4. Что такое событие в JavaScript и как его обработать?

Событие — это любое действие, совершенное пользователем или браузером, которое можно отследить и обработать. Примеры событий: клики, ввод текста, загрузка страницы. Для обработки событий используется метод addEventListener:

element.addEventListener('click', function() {
  // код обработки события
});
5. Что такое Flexbox и как его использовать?

Flexbox — модель компоновки CSS для создания адаптивных макетов. Позволяет выравнивать и распределять пространство между элементами контейнера. Используется через свойства display: flex;.

6. Как работает сетка ( Grid ) в CSS ?

Это двухмерная система компоновки, создающая сложные макеты. Основные свойства: grid-template-columns, grid-template-rows и grid-gap.

7. Что такое медиазапросы в CSS ?

Медиазапросы создают адаптивные макеты, изменяя стили в зависимости от характеристик устройства (например, ширины экрана). Пример: @media (max-width: 600px) { /* стили */ }.

8. Как выполнять асинхронные операции в JavaScript ?

Асинхронные операции выполняются с помощью колбеков, промисов (Promise) и async/await.

9. Как обеспечить доступность ( accessibility ) веб-приложения?

Использовать семантические теги, атрибуты ARIA, обеспечить поддержку клавиатуры и создать четкие контрасты.

10. Как реализовать адаптивные изображения для различных устройств и экранов?

Применять атрибуты srcset и sizes для <img> или элементы <picture> для предоставления различных версий изображений в зависимости от размеров экрана.

Вопросы и ответы для Middle фронтенд-разработчиков
1. Какие методы оптимизации CSS вы знаете и как они применяются?

Методы включают минификацию, объединение файлов, использование критического CSS и асинхронную загрузку не критических стилей.

2. Как сделать элемент фиксированным при прокрутке страницы (например, фиксированный заголовок)?

Использовать свойство position: fixed; для элемента, чтобы он оставался на месте при прокрутке страницы.

3. В чем разница между null и undefined в JavaScript ?

null — это значение, присваиваемое переменной, чтобы указать на отсутствие значения. undefined означает, что переменная была объявлена, но не инициализирована.

4. Как работают хуки ( hooks ) в React ?

Хуки — функции для использования состояния и других возможностей React в функциональных компонентах. Примеры: `useState`, `useEffect`.

5. Что такое состояние ( state ) и пропсы ( props ) в React ?

Состояние — объект, управляющий динамическими данными компонента. Пропсы — данные, передаваемые в компонент извне.

6. Как работает роутинг в SPA ( Single Page Application )?

Роутинг управляет навигацией в SPA без перезагрузки страницы. Используются библиотеки, такие как React Router, для определения маршрутов и отображения компонентов.

7. Что такое webpack и как он используется?

webpack — модульный сборщик JavaScript, компилирующий модули и их зависимости в один или несколько пакетов для улучшения производительности.

8. Что такое компоненты высшего порядка ( HOC ) в React ?

HOC — функции, принимающие компонент и возвращающие новый компонент с дополнительной функциональностью.

9. Как управлять состоянием в больших приложениях?

Использовать библиотеки для управления состоянием, такие как Redux или Context API, для управления глобальным состоянием и разделения ответственности между компонентами.

10. Что такое CSS - in - JS и как его применять?

CSS-in-JS — метод написания внутри JavaScript. Популярные библиотеки включают styled-components и Emotion.

11. Какая технология для фронтенд-разработки будет наиболее популярна в ближайшем будущем?

В настоящее время React является одной из самых популярных технологий благодаря своей гибкости и активному сообществу. Ожидается, что она останется на вершине благодаря постоянным обновлениям и интеграции с новыми инструментами. Однако, стоит обратить внимание и на другие технологии, такие как Svelte и Vue.js, которые также набирают популярность за счет своей простоты и производительности.

Практические задачи для Junior фронтенд-разработчиков
1. Создание адаптивного навигационного меню

Описание задачи: Разработайте адаптивное навигационное меню, которое корректно работает на различных устройствах, от настольных компьютеров до мобильных телефонов. Навигационное меню должно включать несколько пунктов, которые, при уменьшении ширины экрана, сворачиваются в "гамбургер-меню".

Технические требования:

Используйте HTML и CSS.
Реализуйте адаптивность с помощью медиазапросов.
Добавьте простую анимацию для открытия и закрытия «гамбургер-меню».
Пример кода:

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Adaptive Navigation Menu</title>
    <style>
        body {
            font-family: Arial, sans-serif;
        }
        .menu {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 10px;
            background-color: #333;
        }
        .menu a {
            color: white;
            text-decoration: none;
            padding: 10px;
        }
        .menu .hamburger {
            display: none;
            cursor: pointer;
        }
        .menu-links {
            display: flex;
        }
        @media (max-width: 600px) {
            .menu .hamburger {
                display: block;
            }
            .menu-links {
                display: none;
                flex-direction: column;
                width: 100%;
                background-color: #333;
            }
            .menu-links a {
                padding: 10px;
                border-top: 1px solid #444;
            }
        }
    </style>
</head>
<body>
<nav class="menu">
    <div class="logo">Logo</div>
    <div class="hamburger" onclick="toggleMenu()">☰</div>
    <div class="menu-links" id="menuLinks">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Contact</a>
    </div>
</nav>

<script>
    function toggleMenu() {
        var menuLinks = document.getElementById('menuLinks');
        if (menuLinks.style.display === 'flex') {
            menuLinks.style.display = 'none';
        } else {
            menuLinks.style.display = 'flex';
        }
    }
</script>
</body>
</html>
2. Валидация формы регистрации

Описание задачи: Создайте форму регистрации с полями для имени пользователя, электронной почты и пароля. Реализуйте валидацию полей в реальном времени с помощью JavaScript. Убедитесь, что пользователю отображаются соответствующие сообщения об ошибках, если данные введены неправильно.

Технические требования:

Используйте HTML и CSS для создания формы.
Реализуйте валидацию с применением JavaScript.
Обеспечьте валидацию на уровне фронтенда (например, проверка формата электронной почты, длины пароля и т.д.).
Пример кода:

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registration Form</title>
    <style>
        body {
            font-family: Arial, sans-serif;
        }
        form {
            max-width: 400px;
            margin: auto;
            padding: 20px;
            border: 1px solid #ccc;
            border-radius: 10px;
        }
        input {
            display: block;
            width: 100%;
            padding: 10px;
            margin-bottom: 10px;
            border-radius: 5px;
            border: 1px solid #ccc;
        }
        .error {
            color: red;
            font-size: 0.9em;
        }
    </style>
</head>
<body>
<form id="registrationForm">
    <h2>Register</h2>
    <input type="text" id="username" placeholder="Username" required>
    <span class="error" id="usernameError"></span>
    <input type="email" id="email" placeholder="Email" required>
    <span class="error" id="emailError"></span>
    <input type="password" id="password" placeholder="Password" required>
    <span class="error" id="passwordError"></span>
    <button type="submit">Register</button>
</form>

<script>
    const form = document.getElementById('registrationForm');
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');

    const usernameError = document.getElementById('usernameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        validateUsername();
        validateEmail();
        validatePassword();
    });

    username.addEventListener('input', validateUsername);
    email.addEventListener('input', validateEmail);
    password.addEventListener('input', validatePassword);

    function validateUsername() {
        if (username.value.trim().length < 3) {
            usernameError.textContent = 'Username must be at least 3 characters long';
        } else {
            usernameError.textContent = '';
        }
    }

    function validateEmail() {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email.value.trim())) {
            emailError.textContent = 'Enter a valid email address';
        } else {
            emailError.textContent = '';
        }
    }

    function validatePassword() {
        if (password.value.trim().length < 6) {
            passwordError.textContent = 'Password must be at least 6 characters long';
        } else {
            passwordError.textContent = '';
        }
    }
</script>
</body>
</html>
Практические задачи для Middle фронтенд-разработчиков
1. Создание интерактивного календаря с React

Описание задачи: Разработайте интерактивный календарь с возможностью добавления и удаления событий. Календарь должен отображать текущий месяц, с возможностью навигации между месяцами, и позволять пользователям создавать, редактировать и удалять события на определенные даты.

Технические требования:

Используйте React для создания компонентов.
Реализуйте состояние и управление событиями с помощью хуков.
Добавьте стилизацию для улучшения пользовательского опыта.
Обеспечьте функциональность навигации между месяцами.
Пример кода:

import React, { useState } from 'react';
import './Calendar.css'; // Добавьте собственные стили

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

function Calendar() {
const [currentDate, setCurrentDate] = useState(new Date());
const [events, setEvents] = useState({});

const handleEventChange = (date, event) => {
setEvents({
...events,
[date]: event,
});
};

const renderDaysOfWeek = () => {
return daysOfWeek.map((day) => (
<div key={day} className="calendar-day-of-week">
    {day}
</div>
));
};

const renderDaysInMonth = () => {
const startDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
const days = [];

for (let i = 0; i < startDay; i++) {
days.push(<div key={`empty-${i}`} className="calendar-day empty"></div>);
}

for (let day = 1; day <= daysInMonth; day++) {
const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day).toDateString();
days.push(
<div key={day} className="calendar-day">
    <span>{day}</span>
    <input
            type="text"
            value={events[date] || ''}
    onChange={(e) => handleEventChange(date, e.target.value)}
    placeholder="Add event"
    />
</div>
);
}

return days;
};

const handlePrevMonth = () => {
setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
};

const handleNextMonth = () => {
setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
};

return (
<div className="calendar">
    <div className="calendar-header">
        <button onClick={handlePrevMonth}>Prev</button>
        <h2>{currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</h2>
        <button onClick={handleNextMonth}>Next</button>
    </div>
    <div className="calendar-grid">
        {renderDaysOfWeek()}
        {renderDaysInMonth()}
    </div>
</div>
);
}

export default Calendar;
2. Реализация поисковой системы с использованием Vue.js

import React, { useState } from 'react';
import './Calendar.css'; // Добавьте собственные стили

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

function Calendar() {
const [currentDate, setCurrentDate] = useState(new Date());
const [events, setEvents] = useState({});

const handleEventChange = (date, event) => {
setEvents({
...events,
[date]: event,
});
};

const renderDaysOfWeek = () => {
return daysOfWeek.map((day) => (
<div key={day} className="calendar-day-of-week">
    {day}
</div>
));
};

const renderDaysInMonth = () => {
const startDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
const days = [];

for (let i = 0; i < startDay; i++) {
days.push(<div key={`empty-${i}`} className="calendar-day empty"></div>);
}

for (let day = 1; day <= daysInMonth; day++) {
const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day).toDateString();
days.push(
<div key={day} className="calendar-day">
    <span>{day}</span>
    <input
            type="text"
            value={events[date] || ''}
    onChange={(e) => handleEventChange(date, e.target.value)}
    placeholder="Add event"
    />
</div>
);
}

return days;
};

const handlePrevMonth = () => {
setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
};

const handleNextMonth = () => {
setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
};

return (
<div className="calendar">
    <div className="calendar-header">
        <button onClick={handlePrevMonth}>Prev</button>
        <h2>{currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</h2>
        <button onClick={handleNextMonth}>Next</button>
    </div>
    <div className="calendar-grid">
        {renderDaysOfWeek()}
        {renderDaysInMonth()}
    </div>
</div>
);
}

export default Calendar;
Описание задачи: Создайте простую поисковую систему с использованием Vue.js.Приложение должно позволять пользователям вводить запросы и показывать результаты из заранее заданного списка элементов. Реализуйте фильтрацию результатов в реальном времени по мере ввода запроса.

Технические требования:

Используйте Vue.jsдля создания компонентов.
Реализуйте реактивность и управление состоянием с помощью Vuex или Composition API.
Добавьте стилизацию для улучшения пользовательского опыта.
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vue.js Search System</title>
    <script src="https://unpkg.com/vue@next"></script>
    <style>
        body {
            font-family: Arial, sans-serif;
        }
        .search-container {
            max-width: 600px;
            margin: auto;
            padding: 20px;
            border: 1px solid #ccc;
            border-radius: 10px;
        }
        .search-results {
            margin-top: 20px;
        }
        .search-result {
            padding: 10px;
            border-bottom: 1px solid #ccc;
        }
    </style>
</head>
<body>
<div id="app">
    <div class="search-container">
        <input type="text" v-model="query" placeholder="Search..." />
        <div class="search-results">
            <div v-for="result in filteredResults" :key="result" class="search-result">
                {{ result }}
            </div>
        </div>
    </div>
</div>

<script>
    const { createApp, computed } = Vue;

    createApp({
        data() {
            return {
                query: '',
                items: ['Apple', 'Banana', 'Orange', 'Pineapple', 'Strawberry', 'Blueberry', 'Mango']
            };
        },
        computed: {
            filteredResults() {
                return this.items.filter(item =>
                    item.toLowerCase().includes(this.query.toLowerCase())
                );
            }
        }
    }).mount('#app');
</script>
</body>
</html>

<style>
    pre {
        background-color: #272822;
        color: #f8f8f2;
        padding: 12px 16px;
        border-radius: 8px;
        overflow-x: auto;
        font-family: Consolas, Monaco, monospace;
        margin: 20px;
    }
    strong {
        font: var(--title-h6);
        color: var(--heading-color);
    }
</style>


55 вопросов для найма Frontend разработчика
Команда HURMA
12 February 2022

15 мин

31362

8

3

0
Рекрутинг технического специалиста – это всегда лотерея. Даже качественный скрин и часовое CBI не гарантируют хороший результат для рекрутера. Сложность состоит не только в оценке компетенций, но и в прогнозировании поведения кандидата в будущем.

Воронка рекрутинга
Воронка рекрутинга для разработчиков выглядит вполне стандартно: на первом этапе к поиску специалиста подключается сорсер, а дальше информация о кандидате попадает к техническому рекрутеру.

На этом этапе важно проанализировать резюме и не упустить ключевые моменты о технических навыках, общем опыте работы с технологиями. Оценивайте любые спорные моменты, например, город/страну проживания, места работы, количество работодателей. Когда кандидатов много и они очень нужны рынку, всегда есть соблазн отправить специалиста дальше по воронке, просмотрев резюме только поверхностно.

Любые вопросы необходимо задавать до звонка, просто написав письмо или личное сообщение в мессенджер для уточнения всех деталей.

Прескрин: вопросы относительно soft skills для frontend разработчика
Следующий важный этап работы рекрутера – прескрин с кандидатом, который подходит под заявленные требования. На звонке нужно узнать ключевые мотиваторы и проверить soft skills frontend-разработчика.

«Человек должен сразу понять, куда он идет. И я говорю не только о позиции или стеке. Frontend-разработчик должен выяснить себе целые компании и примерно представлять процессы внутри. Для меня мотивированный кандидат – специалист, желающий разобраться в продукте. Он смотрит презентации и видео, а после спрашивает, что именно его интересует. Он желает выяснить, как работает», – говорит технический рекрутер в HURMA.

20 вопросов для оценки soft skills у frontend разработчика
Как вы взаимодействуете с членами команды при разработке проекта?
Как вы разрешаете конфликты или разногласия относительно технических решений в команде?
Как вы управляете своим временем и приоритетами в процессе разработки?
Как вы общаетесь с нетехническими членами команды или клиентами?
Как вы реагируете на конструктивную критику вашей работы?
Как вы реагируете на стрессовые ситуации или трудности при разработке?
Как вы ведете себя во время собеседования или дискуссии с другими членами команды?
Как вы понимаете и внедряете принципы взаимопомощи и коллаборации в команде?
Как вы решаете технические проблемы, с которыми сталкиваетесь при разработке?
Как вы оцениваете свои возможности и определяете объем работы для себя и для других в команде?
Как вы стимулируете и поддерживаете творческий подход к решению проблем в команде?
Как вы сотрудничаете с другими разработчиками, чтобы обеспечить надлежащую интеграцию фронтенда с бэкендом?
Как вы оцениваете потребности пользователей и внедряете их фидбек в процессе разработки?
Как вы стимулируете инновации и вводите новые идеи в вашей команде?
Как вы работаете с большим объемом информации или данных в вашем проекте?
Как вы общаетесь и сотрудничаете с другими отделами, такими как дизайн или маркетинг?
Как вы решаете сложные задачи, требующие долгосрочного планирования и стратегического мышления?
Как вы стимулируете развитие ваших навыков и ответственности в работе?
Как вы выявляете и решаете проблемы с производительностью в вашей команде?
Как вы относитесь к открытости, открытому обмену мнениями и открытым дискуссиям в вашей команде?
Вопросы на этом этапе могут быть совершенно другими. Здесь все зависит от позиции, опыта самого кандидата, его поведения, актуальных фреймворков, технологий. Универсальный шаблон не существует. Просто запомните, что для каждой технической позиции будет свой набор требований.

Технический взгляд
На следующем этапе (в случае с продуктовой компанией HURMA) технический рекрутер отправляет информацию о претенденте непосредственно Head of Engineering. Он получает скоркард с первыми отметками (4 или 5, если встреча прошла успешно).

Обратная связь от технического специалиста с большим опытом позволяет «свежим» взглядом еще раз посмотреть на кандидата и найти неочевидные проблемы, блокируя моменты.

Если с мотивацией, soft skills и общим опытом нет никаких проблем, кандидат двигается дальше по воронке на этап технического интервью.

Как провести техническое интервью: вопросы для собеседования frontend разработчика?
«Оптимально, чтобы техническое интервью проводил наемный менеджер. Если это невозможно, то важно присутствовать, чтобы составить свое мнение относительно кандидата. Если загрузка не позволяет менеджеру присутствовать на интервью, важно доверять интервьюерам, которых он просит оценить кандидата. Для нового интервьюера важна обратная связь от менеджера после первых собеседований, он помогает прийти к общим ценностям», – говорит Head of Engineering в HURMA.

Базовые вопросы по HTML и CSS:

На что нужно обратить внимание при разработке мультиязычных сайтов?
Что такое прогрессивная развертка?
Объясни разницу между script, script async и script defer.
Какие существуют принципы семантической верстки?
Что такое #shadow-root в инспекторе HTML-страницы?
Названия популярные CSS-методологии и их отличия.
Как изменить цвет в svg файле?
Базовые вопросы по Javascript:

Что такое замыкание (closure) и какие сценарии его использования?
Что такое Event loop и как он работает? Можешь в подробностях рассказать о микро- и макрозадачах?
Посредством чего в JS реализуются наследования?
Как объекты превращаются в примитивы?
Как работает «сборщик мусора» в JS?
Объясни разницу между cookie, sessionstorage и localstorage.
Что такое webpack?
Что такое XSS (Cross-Site Scripting)?
Базовые вопросы по React:

Как работает алгоритм Virtual DOM?
Какие библиотеки менеджмента состояния React-приложения вы знаете? Зачем они нужны?
Как бы вы построили хорошую архитектуру проекта на React?
В чем разница между функциональными и классовыми компонентами?
Расскажи об основных библиотеках React, которые ты знаешь. Какие у них плюсы и минусы?
Базовые вопросы по Vue:

Какие преимущества Vue.js?
Расскажи о хуках жизненного цикла компонента в Vue.js?
Как подключить внешний css-файл в Vue?
Как реализовать двухстороннюю привязку?
Что такое Vue Router?
Базовые вопросы по Angular:

Как подготовить сборник к деплою?
Зачем нужна forroot-функция модуля?
Что такое Ngrx? Когда следует использовать?
Как работает Dependency injection?
Как протестировать API-сервис?
Помните, что эффективно подключать тимлиды на баррейзинге (финальном этапе отбора). Крайне рекомендуется это делать в том случае, если они не проводили техническое интервью. Так мы снижаем риск получить кота в мешке. Кроме того, кандидату приятно познакомиться с человеком, который будет его непосредственным руководителем, если соискатель в будущем получит оффер от компании.

«Хорошей практикой считается постоянное наследие всей воронки рекрутинга. Для этого на каждом этапе мы анализируем обратную связь от соискателя и работаем над неочевидными вопросами. Между нанимающим менеджером, тимлидом, сорсером и техническим рекрутером сохраняется постоянная связь через ATS HURMA. Это позволяет сократить срок найма конкурентного специалиста до 3–4 дней. Тесная работа в команде помогает быстро нанимать лучших frontend разработчиков», – считает технический рекрутер в HURMA.


CBI: интервью по компетенциям для технического специалиста
Если кандидат на техническом интервью показал себя хорошо, он попадает на CBI. На этом этапе его компетенции рассматриваются более подробно. Для этого используется стандартная техника STAR, где подробнее анализируется опыт и позиции.

Очень часто кандидат не проходит дальше из-за отсутствия необходимых soft skills. Тимлид оценивает не только его способности, но и общий fit: подойдет ли новый член команде, хорошо ли он впишется в коллектив, насколько он конфликтен, амбициозен, эмпатичен.

Рассмотрим примеры:

Кандидат хорошо показал себя на техническом интервью и отвечает позиции Middle+, но тяжело вступает в коммуникацию, не показывает нужных разговорных навыков, остается закрытым и не идет на контакт. На CBI можно узнать истинные причины такого поведения человека.
Кандидат не четко указывает причину увольнения с прежней должности, дает отдаленные комментарии по этому поводу. Тогда команда определяет настоящие мотивы увольнения, смотрит на его поведение в конфликтной ситуации, думает о проблемах, которые могут возникнуть именно с этим разработчиком через 6–8 месяцев. Достаточно ли у него мотивации для самостоятельного обучения? Он ищет помощи со стороны или может справиться с трудом самостоятельно?
«Частый запрос от кандидатов – это менторство и обучение внутри компании. 

Претенденты стремятся, чтобы их буквально тыкали носом в заблуждение. Запрос направлен не на код ревю, а на получение более глубоких знаний. Даже на позиции Middle и Senior приходят кандидаты для которых один из основных мотиваторов – это менторство или обучение чему-то новому.

В то же время, они не всегда готовы делиться своими знаниями или они не делали этого раньше. Для нас отсутствие желания делиться опытом является признаком профессиональной незрелости», – делится опытом Head of Engineering в HURMA

Вопросы для CBI интервью
В каких компаниях тебе хотелось бы поработать и почему? Что привлекает в продукте и аутсорсе?
Если в течение нескольких лет ты будешь занимать одну должность – это ок для тебя?
Рассматриваешь ли ты для себя в будущем переход с одной технологии на другую?
Опиши свою работу на прошлом проекте и расскажи, как сильно выросли твои компетенции за это время.
Назови свой основной skill, позволяющий тебе эффективно развиваться.
Легко найти один язык с человеком, если добавить в интервью открытые вопросы или общаться на разные темы. Правильный small-talk способствует расслабленному разговору, впоследствии кандидат отвечает на все более открыто. Такие эмоциональные качели – один из способов получить нужную нам информацию.

Совершенно другой подход состоит в том, чтобы «раскачать» человека согласно его триггерам или болевым моментам. К примеру, спросить его относительно того, почему он не желает работать с определенной технологией или фреймворком.

Комитет: комплексно рассматриваем frontend разработчика
Финальный этап найма технического специалиста – еще один коллегиальный скрин кандидата. На комитете оцениваются плюсы и минусы претендента, а также проходят дебаты по спорным моментам.

На этом этапе обязательно подключаются CEO и HRD, которые оценивают риски со своей стороны. Возможно, технические специалисты пропустили что-нибудь важное, что влияет на бренд работодателя. К примеру, это может быть образование, пробелы в профессиональной деятельности, работа в силовых структурах и т.д. На комитете решается, нужно ли дополнительно пригласить фидбек и рекомендации по предыдущим местам работы.

Оцениваются все факты и определяется финальный рейтинг в оффере. Также рассматривается вариант контроффера, если кандидат получил несколько предложений от других компаний или предоффера, когда необходимо согласовать сумму.

Главная особенность рекрутинга
С наймом frontend разработчиков всегда не просто: они понимают свою ценность на рынке, могут часто менять компании, остаются нелояльными к маленьким командам. Помните, что воронка должна включать максимальное число релевантных кандидатов, чтобы в ней появился нужный вам претендент. В среднем по индустрии, количество лиц, дошедших до этапа прескрина, составляет не более 10%, а оффер получают не более 1–2%.

Поэтому важно на всех этапах воронки работать очень тщательно и индивидуально подходить к каждому кандидату. Это касается задания вопросов для технического интервью и CBI, а также проверки soft skills. Используя качественную систему ATS, вы сможете легко корректировать каждый этап рекрутинга, а также быстро анализировать кандидатов и искать подход к каждому из них.


Top 100 Frontend Developer Interview Questions and Answers
Basic Level Interview Questions and Answers
Q1. What are meta tags in HTML?
Meta Tags go inside the head section of an HTML Page. They are not for the interface but are very important for the browser and SEO purposes. Meta tags consists of many fields like meta-titles, meta-description, and even character encoding.

Q2. What are the basic design elements of an HTML page?
The basic elements of design are as given below.

head: the head tag where most of the meta data, important links and scripts are added.
body: the body of the document with all divs and other elements are enclosed in.
section: multiple parts of the html page are enclosed in various sections.
divs: <div> tag defines a division of multiple parts in an HTML document.
h and p tags: text parts are stored in h and p tags of an HTML document.
img tag: image tags hold url for images in src to preview images in a document.
a tag: a tags hold links in their href attribute to open external web pages in a document.
Q3. What npm stands for ?
Npm stands for Node Package Manager. 

Q4.What is npm used for?
NPM are used for Command-line utility to install packages, they do version management and dependency management of Node.js packages.

Q5. What is Webpack?
Webpack is a build tool that puts all of your assets, including Javascript, images, fonts, and CSS, in a dependency graph. Webpack allows you to use require() in your source code to point to local files, like images, and decide how they are processed in your final Javascript bundle, like replacing the path with a URL pointing to a CDN.

Q6. Why and when should I use Webpack?
We use it for complex Frontend Applications with many non-code static assets like CSS, images, fonts, etc, then yes, Webpack will give you great benefits.

Q7: What is Sass?
SaSS stands for Syntactically Awesome StyleSheets is a CSS preprocessor that will add power and elegance to the basic language. This allows you to use variables, mixins, nested rules, and inline imports, with a fully CSS-compatible syntax. Sass keeps huge stylesheets well-organized, and get small stylesheets up and run quickly.

Q8. What is the difference between JavaScript and jQuery different?
JQuery is a library built with the JavaScript language, and JavaScript is the language itself. 

Q9. What is Content Security Policy? 
Content security Policy is also known as CSP, and is a header in HTML this lets soite operators gain complete control over the resources which are loading on the site. 

Q10. What is Cross-Site Scripting (XSS)?
XSS. – Cross-Site Scripting is an attack that takes place when any attacker uses a web application to send any malicious code, in the form of browser side script, to another user. 

Q11. What is User Centered Design?
User-centered designs are where the designer only focuses on the things according to the needs of users and keeps them in every phase of designing. 

Q12. What is callback hell?
JavaScript which uses callbacks and is hard to get the right intuitively. The callbacks which are stacked in the form of pyramid structure. 

Q13. What is Strict Mode in ECMAScript?
A new feature in ECMAScript 5 is The Strict mode which lets you place a function, or a program in a “strict” context of operating. 

Q14. What does SOLID stand for?
S.O.L.I.D is an object-oriented design principle, and stands for:

S- single responsibility principle 

O- open-closed principle 

L- Liskov Substitution principle 

I- interface segregation principle 

D- dependency. 

Q15. What is a grid system in CSS?
The structure which lets your content be placed on both horizontal and vertical sides in a consistent and manageable way. They have two key components of; Rows and Columns. 

Q16. What are ways to decrease page load time?
The best ways to decrease the page load time are given below.

Image optimization – smaller. size or quality
Clear Browser cache
Compress and optimize content 
Q17. What are attributes in HTML
Attributes are the properties that you can add to an HTML tag and change the way the tag behaves or is displayed.
You can add attributes right after the name of the HTML tag, inside the brackets. 
Q18. How to Display a Table on an HTML Webpage?
You can use the HTML <table> tag to create an HTML table.

Q19. How to include CSS Styling in HTML?
There are mainly three methods to add CSS or styling to an HTML page.

Inline CSS: is useful when a single element needs to be styled or when a little quantity of styling is required.
An External Style Sheet: apply a style to many elements or HTML pages, it employs an external style sheet.
Internal Style Sheet: An internal style sheet is useful when a single HTML document has a distinct style and numerous elements.
Q20. What is Eager and Lazy Loading?
Eager loading: is the default module-loading approach. Eager loading feature modules are loaded before a program starts. You usually reserve this for applications that are not very large.

Lazy Loading: depends on the demand, when lazy loading dynamically loads the feature modules. It speeds up the application. Lazy loading is useful in larger applications where all the modules are not required right after an application starts.

Q21. What is Typescript? 
TypeScript is a superset of JavaScript. It is an object-oriented programming language whose code is compiled in JavaScript. TypeScript supports all JavaScript frameworks and libraries. It aids in production of faster code and leads to better performance.

Q22. How is TypeScript better than JavaScript?
It points out compilation errors during development phase.
It has support for strong types and static typing.
It has better interface and generics.
It provides an excellent tooling support along with IntelliSense.
Q23. How would you ensure a web design is user-friendly?
An app should be compatible with various platforms and should specifically work well on mobile platforms. Applications should properly be checked for user inputs and constant checks should be done for applications for different inputs.

Q24. What’s the difference between Function Declaration and Function Expression?
Function Declaration 

function abc(){
    return 5;
}

Function Expression 

var a = function abc(){
    return
}

25. How to use HTML5 and CSS3 to create interactive user interfaces?
You can structure your HTML using semantic tags like <header>, <nav>, <main>, and <footer> to create a clear structure for your webpage. You can use CSS3 for styling, apply CSS styles to your HTML elements to create visually appealing interfaces.

26. How would you differentiate between HTML elements and tags?
HTML elements are the basic building blocks of websites. These are the containers that contain content and provide the structure for websites. They can also be nested within each other to create more complex content. HTML tags are the instructions to tell a browser for how to display the HTML elements.

27. What does DOCTYPE mean?
DOCTYPE stands for “Document Type Definition.” This is a HTML language element that defines the type of document required for a web page, and it has two parts. The document type name and the public identifier. 

28. Explain the difference between inline, inline-block, and block.
Inline elements are displayed inline, that is the start and end of the component will not occupy its line. 
Inline-block elements are like inline elements, they can have a width and height, meaning an inline-block element occupies its space like a block element. 
Block elements are displayed on their line and occupy the full width available, which means that other elements will be pushed to the following line.
29. What are the differences between the different position properties: Relative, Absolute, Static, and Fixed.
Relative moves an element from its current position.
Absolute moves an element from its current position or the parent element’s position. Absolute elements don’t occupy space in DOM flow.
Static is the default position.
Fixed gives an element a fixed position relative to the device screen. None of these elements move during scrolling.
30. How would you differentiate between a document and a window.
Window object will have properties like inner width, inner height, length, whether it was previously closed, its parent, and its name. The window is the first thing that gets loaded into the browser. The document object is defined as any document that gets loaded inside the window object, such as HTML, ASPX, or PHP, and has properties such as cookies, title, and URL, to name a few.

31. What is UX design?
UX design or the User Experience design, is the process of designing and enhancing the overall experience that users have while interacting with a product, system, or a service. It will focus on creating user-centered designs that are intuitive, efficient, and enjoyable for usage.

32. What is the difference between UX and UI?
UX design is concerned with the experience and usability of a product, whereas UI design focuses on the visual and interactive elements that enable users to interact with the product. UX design deals with user research, user flows, and overall usability, while UI design deals with the visual presentation and aesthetics of the interface. Both UX and UI design are crucial in creating successful and user-centered designs, and they often work closely together to achieve cohesive and impactful user experiences.

33. What is a CDN?
A content delivery network (CDN) is a system that delivers content to users based on geographic location. CDNs can deliver websites, software applications, and other types of digital content.

34. What are the differences between HTML5 and HTML4?
HTML5, the latest version of HTML, has several new elements and attributes. It also supports audio and video playback and introduces support for local storage.

35. Migrate the code given below in HTML4 to HTML5.
In HTML4, the standard way to display “Hello World” would be to use the <h1> heading element to represent the heading of the document. Consider the example below.

<!DOCTYPE html>
<html>
 <head>
  <title>Hello World</title>
 </head>
 <body>
  <h1>Hello World</h1>
 </body>
</html>

In HTML5, the structure and syntax remain similar to HTML4. Here’s an example of displaying “Hello World” in HTML5:

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hello World! Site Title</title>
  </head>
  <body>
    <h1>Hello World!</h1>
  </body>
</html>

36. How do floats work?
Floats pushes an element to the left or right. The float property can have any one of four values given below.

Inherited: Element inherits the parent’s float value.
None: This is the default value; the element doesn’t float.
Left: Element float to the container’s left.
Right: Element floats to the container’s right.
37. What is a CSS reset, and how does it differ from normalize.css?
Reset.css eliminates all browser default styles, such as margin, padding, and border. Normalize.css sets a standard book-like appearance (e.g., bold headings, margins between two paragraphs, common font) across all browsers.

38. What’s an AJAX request, and how would an AJAX request be used?
AJAX stands for asynchronous JavaScript and XML and is a client-side process written in JavaScript. It is used to get or post data from a remote server without needing to reload the page.

39. What are hooks in React? Which React hooks do you use?
In React, hooks are functions that allow you to use state and other React features in functional components. They were introduced in React version 16.8 as a way to write reusable logic and manage stateful behavior without using class components.

40. What is the benefit of using React Hooks?
Hooks have a lot of benefit to us as developers, and they are going to change the way we write components for the better. They already help us to write clearer and more concise code – it’s like we went on a code diet and we lost a lot of weight and we look better and feel better. It brings out our jawline and makes us feel lighter on our toes. It’s the one change that works for us.

Expert Level Interview Questions and Answers
Q41. What is Stringify?
To transform a JavaScript object to a string data type, The Stringify method is used. 

Q42. State the elements of the CSS Box Model.
CSS Box Model consist of 4 elements stated below.

Content
Padding
Border
Margin 
Q43. What is the benefit of a Srcset?
To generate multiple new solutions of exact images on several devices, we can use the Srcset. This will help improve the overall UI. 

Q44. What is ‘Version Control System’ in Git?
A version control system (VCS) is a program that keeps record of any changes to a file or set of data. It helps to restore it to a previous version if required. This will guarantee that everyone in the team is working to the most up-to-date version of the file or project. 

Q45. Explain the purpose of the Git Push Command.
The Git push command pushes the contents of a local repository to a remote repository. It runs a push after it has changed a local repository to share the changes with remote team members.

Q46.Explain the purpose of the Git Pull Command.
Git pull is a command that pulls changes from a remote repository and merges them into the local repository. It’s made up of two sub commands: git fetch and then git merge.

Q47. List a few Git Commands and state their functions.
Git Config – Configure the username and email address
Git init – Initializes a new local Git repository
Git Add – Adds one or more files to the staging area (git add . for more than one file)
Git Diff – View the changes made to the file
Git Commit – Commit changes to the head but not to the remote repository
Git reset – Undo local changes to the state of a Git repo
Git Status – Displays the state of the working directory and staging area
Git Merge – Merge a branch into an active or main branch
Git Push – Upload content from the local repository to a remote repository to share among remote team.
Git Pull – Fetch and download content from a remote repository
Q48. Explain the Difference Between Git Pull and Git Fetch
Git Fetch 

Downloads only new data from a remote repository using Git fetch.
Does not include any of this new information in your working files.
Updates the remote-tracking branches.
Command – git fetch origin or git fetch –-all
Git Pull

Git pull takes new data and integrates it with the current working files, updates the current HEAD branch with the latest modifications from the remote server.
It attempts to combine remote modifications with the changes made locally.
Command – git pull origin master
Q49. State the different types of CSS Selectors
for Universal Selector
ul for list items
# for id
For class
input [type=”text”] { attribute selector }
* {
 color: "green";
 font-size: 20px;
 line-height: 25px;
}

.element1 {
 color: "blue";
}

#class1 {
  color: "red";
}

ul {
 font-size: 20px;
}

Q50. How do you use media queries to provide responsiveness for different screen sizes?
Media queries are a CSS3 feature that allows us to apply different styles based on the screen’s or device’s width. To use media queries, you should include a viewport meta tag in your HTML. Then, write your CSS code using media queries and integrate it the HTML too.

Q51. What is a higher-order component in React with an example?
Higher-order components allows us to encapsulate common functionalities and apply them to multiple components without repeating code. It is a very powerful pattern for code reuse and enhances component behavior in React applications.

Q52. What is the difference between an anonymous function and a named function?
A named function can be referenced in the future from anywhere in the code, whereas an anonymous function cannot — although it will run when it occurs in-line

Q53. How are JavaScript and jQuery Different?
There are a number of distinctions in the two, some of them are as below.

JavaScript is an independent language and can exist on its own. jQuery has to be converted to JavaScript for the browser’s in-built JavaScript engine to interpret and run it.
JavaScript is a high-level, interpreted, client-side scripting language. A combination of the (ECMA) European Computer Manufacturers Association script and the (DOM) Document Object Model. jQuery is a lightweight JavaScript library that contains only the DOM.
JavaScript uses more lines of code as developers need to write their own code. jQuery uses fewer lines of code for the same functionality as the code is already written in its library. Developers just have to import the library and use the relevant function/method of the library in our code.
Q54. Write a code snippet to reverse a string
The reverseString function takes a string as an argument and uses the split(), reverse(), and join() methods to reverse it. Here are the details with the code snippet on how to use each method.

function reverseString(str) { 
return str.split('').reverse().join(''); 
} 
let reversed = reverseString("hello"); 
console.log(reversed); // outputs "olleh"

The split() method splits the string into an array of individual characters.  
The reverse() method reverses the order of the array elements.  
The join() method joins the elements of the array back into a single string.
Q55. What is currying in JavaScript?
Currying is a technique in JavaScript that allows a function to be partially applied, or “pre-filled,” with some of its arguments. There are several situations where this can be useful, for example:

To create functions with a fixed set of arguments that we can easily reuse. 
Abstracting away certain arguments to make a function more flexible and reusable. 
To improve the readability and clarity of code by breaking up complex functions into smaller, more focused functions. 
To understand how currying works, consider the following example shown below.
function add(a, b) { 
return a + b; 
}

Q56. What does this return?
Promise.resolve(5);
You can pass any type of value we want to Promise.resolve, either a promise or a non-promise. The method itself returns a promise with the resolved value (). If you pass a regular function, it’ll be a resolved promise with a regular value. If you pass a promise, it’ll be a resolved promise with the resolved value of that passed promise. In the case shown above, we only passed the numerical value 5. so it returns a resolved promise with the value 5. The output for this code is 5.

Q57. What’s the output of the code snippet shown below?
async function getData() {
return await Promise.resolve('I made it!');
}

const data = getData();
console.log(data);

An async function always returns a promise. The await still has to wait for the promise to resolve: a pending promise gets returned when we call getData() in order to set data equal to it. The answer to this will be Promise {}.

Q58. What does the code snippet below return?
const firstPromise = new Promise((res, rej) => {
setTimeout(res, 500, 'one');
});

const secondPromise = new Promise((res, rej) => {
setTimeout(res, 100, 'two');
});

Promise.race([firstPromise, secondPromise]).then(res => console.log(res));
When we pass multiple promises to the Promise.race method, it resolves/rejects the first promise that resolves/rejects. We can pass a timer of 500ms to the setTimeout function for the first promise (firstPromise), and 100ms for the second promise (secondPromise). This means that the secondPromise resolves first with the value of ‘two’. and then holds the value of ‘two’, which gets logged. So the answer will be “two”.

Q59. Explain how the Box Sizing Property works in CSS?
Box Sizing property defines how the height and width of a box can be calculated. 

Content Box – The default width and height apply only to the element’s content. Padding and border are added outside the box.

Padding Box – You add the dimensions to both element’s content and padding. It adds the border outside the box.

Border Box – The dimensions are added to the content, padding, and border. 

Q60. What does the ‘important’ keyword means in CSS?
The ‘important’ keyword indicates the highest precedence, and it overrides the cascaded property. against any other similar one applied for the same type of element.

Q62. What are CSS Sprites?
CSS sprites minimize the loading time of a web page by combining multiple small pictures into a single image. They decrease the number of HTTP requests and, as a result, takes longer time for pages to load.

Q63. What is Callback function in JavaScript?
In JavaScript, a callback function is a function that we pass as an argument to another function and executes at a later time or in response to a specific event. The receiving function can then invoke or “call back” the passed-in function to perform some action or provide a result.

Consider the code snippet shown below.

function greet(name, callback) {
  console.log("Hello, " + name + "!");
  callback();
}

function sayGoodbye() {
  console.log("Goodbye!");
}

greet("John", sayGoodbye);

Q64. How can you delete duplicates from a JavaScript array?
One is the filtering technique, pass three arguments to call the filter() function. These will be the array, current element, and current element index.
The For loop, stores all the repeated elements in an empty array.
Q65. What is an Event in React?
An event is an action triggered by the user or any system event, like pressing a key, a mouse key, etc. 

Q67. How do you create an event in React?
In React, you can create an event by attaching event handlers to JSX elements. Event handlers are functions that specify the behavior or action to be taken when a specific event occurs, such as a button click or a form submission.

Here’s an example of creating and handling an event in React:

import React from 'react';

class MyComponent extends React.Component {
  handleClick() {
    console.log('Button clicked');
  }

  render() {
    return (
      <button onClick={this.handleClick}>Click me</button>
    );
  }
}

In this example, we have a MyComponent class component with a handleClick method that logs a message to the console when the button is clicked.

Within the JSX code, we attach the handleClick method to the onClick event of the <button> element. This tells React to call the handleClick method whenever the button is clicked.

When the button is clicked, the handleClick method is executed, and the message “Button clicked” is logged to the console.

React supports various event types such as onClick, onChange, onSubmit, and many more. You can attach event handlers to different elements and respond to specific user actions based on your application’s needs.

Q68. What are Components in ReactJS?
Components are the building blocks of a React application that represent a part of the user interface.

A component we use in one area of the application can be reused in another area. This helps speed up the development process.
A component can contain several other components.
A component must define a render method that specifies how the component renders to the DOM in its minimal form.
A component can also receive props. These are properties passed by its parent to specify values.
Q69. What is a State in React?
A state is an object that stores the values of properties belonging to a component that could change over a period of time. 

Q70. How do you implement it?
In React, you can implement state using the useState hook (for functional components) or by extending the React.Component class and using the this.state property (for class components). Consider the example below.

import React, { useState } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
In this example, we use the useState hook to create a state variable called count and a function called setCount to update the state. The initial value of count is set to 0 using the useState hook.

We define an increment function that increases the count state by one when the button is clicked. The updated state is then reflected in the JSX code.

Class Component with this.state:
jsx
Copy code
import React from 'react';

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  increment() {
    this.setState(prevState => ({ count: prevState.count + 1 }));
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment.bind(this)}>Increment</button>
      </div>
    );
  }
}

Q71. How do you Implement React Routing?
A routing library like the React Router provides a declarative way to handle routing and navigation within a React application. It has a step by step procedure to implement routing in the entire application.

Q72. What is Data Binding and how does it work?
Data binding is a method of manipulating web page elements by using a web browser. It is useful in interactive elements like forms, calculators, tutorials, and games on web pages.

Q73. Which Data Binding methods does Angular use?
Angular used The Two-way Data Binding method. Any modifications made to the user interface mirror the elements in the model state and vice versa. 

Q74. What are Promises and Observables in Angular?
These concepts deal with asynchronous events. In Angular, Promises deal with one at a time, whereas Observables deal with a sequence of events over time.

Promises are objects that emit only one value at a time. They go into effect right once they’re created and we cannot stop them. They are Promises to the child Push Errors.
Observables – Observables are only executed when the subscribe() method is used to subscribe to them. They aid in the execution of tasks such as forEach, filter, and retry, among others.
Q75. What are the use cases of Vue.js JavaScript framework?
It is perfect to use in small projects that are lesser reactive, display a modal, or include a form using Ajax, etc.
We can also use it on large single-page applications using its Vuex and Router components.
It is helpful to create events, binding classes, update element content, etc.
Q76. What are the benefits of using Node.js?
Faster code execution.
It can drive asynchronous I/O using its event-driven architecture.
Has similar properties to Java for example forming packaging, threading, and forming loops.
Single-threaded model.
No hassles of video or audio buffering by cutting down significant processing time.
Q77. How is Next.js related to React.js?
Next.js is a framework built on top of React.js. It extends React’s capabilities by providing additional features and functionalities specifically for server-side rendering (SSR), static site generation (SSG), and building full-stack web applications.

Q78. How does the Ionic Framework helps us create Hybrid Mobile Applications?
The Ionic Framework is a popular open-source framework for building hybrid mobile applications. It leverages web technologies such as HTML, CSS, and JavaScript to create cross-platform mobile apps that run on iOS, Android, and other platforms.

Q79. How do Ionic and other JavaScript frameworks work together for Hybrid Application Development?
Ionic and other JavaScript frameworks can work together by leveraging their strengths and integrating them in various ways.

While using Ionic as a UI Framework you can use Ionic alongside other JavaScript frameworks such as Angular, React, or Vue. Ionic provides a library of UI components and styling that can be easily integrated into your existing framework-based application. For example, you can incorporate Ionic components into your React app using the @ionic/react package or utilize Ionic with Vue.js using the @ionic/vue package.

Q80. Which JavaScript Library is based on the MVC (Model-View-Controller) architectural pattern?
Angular is a full-fledged, opinionated framework that is based on the Model-View-Controller (MVC) architectural pattern. It provides a complete solution for building large-scale applications by offering built-in features like dependency injection, routing, form handling, and state management.

Advanced Level Interview Questions and Answers
Q81. What Is JSX?
JSX is a JavaScript syntactic extension. It is used in React to describe how the user interface should look like. We can write HTML structures in the same file as JavaScript code by utilizing JSX. It makes the code easier to comprehend and debug, as it avoids use of complex JS DOM structures.

Q82. What is Virtual DOM?
Virtual DOM is the lightweight version of the Real DOM that React retains in memory. It is faster than the Real DOM, as when an object changes its state, The Virtual DOM updates only that object in the real DOM rather than updating every object.

Q83. What are Pure Components in React?
A React component is considered pure if it renders the same output for the same state and props.

React.Component is the base class for React components. React.PureComponent is a variation of React.Component class and does a shallow comparison of props and state.

Q84. What is the difference between Pure and High Order Components in React?
Pure Components optimize rendering by preventing unnecessary re-renders based on shallow comparisons of props and state. On the other hand, Higher-Order Components are functions that take a component and return an enhanced version with additional functionality or behavior. They are useful for code reuse and enhancing component behavior. While both concepts are useful in different scenarios, they serve distinct purposes in React development.

Q85. What is AoT Compilation? 
(AOT) Ahead of Time compilation translates your code as it is being built, rather than when it is downloaded and run by the browser. This guarantees that the browser renders content quickly. Include the —aot option with the ng build or ng serve commands to specify AOT compilation. 

Q86. How is AoT Compilation different from JiT?
The (JIT) Just-in-Time compilation technique converts computer code to machine code while it is being run. Dynamic compilation is another name for it. When you use the ng build or ng serve CLI commands, by default it uses JIT compilation.

Q87. What are the main differences between SPA and SSR?
SPA (Single Page Application) and SSR (Server Side Rendering) are two different approaches to building web applications.

The choice between SPA and SSR depends on the specific requirements of your application. SPAs are often preferred for complex interactive applications where responsiveness and interactivity are crucial. SSR is preferred for content-heavy websites, improved SEO, or when initial load time is a priority. In some cases, a hybrid approach called “SSR with hydration” can be used, combining the benefits of both approaches.

Q88. Do we have to use SCSS/SASS for every project? Is the usual CSS enough?
No, it is not compulsory to use SCSS/SASS for every project, and the normal CSS code is mostly enough.
SCSS/SASS is a preprocessor for CSS that allows you to write CSS with variables, nested selectors, functions, and more. It can help you write more organized and maintainable CSS, and is useful for huge projects. So it is optional for some projects.

Q89. Angular is a framework, React is a library. What is the difference between a framework and a library?
A library is a collection of pre-written code that we can reuse to perform specific tasks, such as creating user interfaces or handling network requests. A library typically provides a set of functions or classes that can we can call by the developer’s code to accomplish a particular task. Libraries are designed to be flexible and can be used in a variety of applications.

On the other hand, a framework is a more comprehensive set of tools and conventions that provides a structure for building an entire application. A framework typically includes a set of libraries and tools, as well as a set of rules and best practices that guide the development process. Frameworks provide a more prescriptive approach to application development, and developers must often follow the framework’s guidelines closely to ensure that their code integrates correctly with the rest of the application.

Q90. What is the main difference between Angular and React?
Angular and React are both popular frontend frameworks used for developing web applications. The choice between Angular and React depends on factors such as the project’s complexity, team expertise, requirements, and personal preferences. Angular is suitable for large-scale applications with robust features and built-in tools, while React offers flexibility, performance, and a more lightweight approach to UI development.

Q91. How would you implement a design that has a lot of animations and transitions?
When implementing a design with many animations and transitions, you can utilize CSS animations, CSS transitions, and JavaScript-based animation libraries to bring the design to life. Here’s a general approach:

For CSS Animations and Transitions:

Use CSS keyframes and animation properties to define animations for specific elements or components. This allows you to specify different states and transitions between them.
Apply CSS transition properties (e.g., transition, transition-property, transition-duration) to smoothly animate changes in CSS properties, such as opacity, position, size, or color.
Utilize CSS transforms (e.g., translate, rotate, scale) to create 2D or 3D transformations and animations.
Q92. What is your process for debugging frontend code?
Debugging is a common task for frontend developers. Your answer to this question can show the interviewer how you approach problems and solve them. Describe your process in detail, including what tools you use and why they’re important.

Q93. What makes a good user interface?
User interfaces are the way users interact with a website or application. They include things components like buttons, drop-down menus and other elements that allow people to use software. A good user interface is one that is easy to navigate and understand.

Q94. What is the output of the code snippet given below?
async function* range(start, end) {
for (let i = start; i <= end; i++) {
yield Promise.resolve(i);
}
}

(async () => {
const gen = range(1, 3);
for await (const item of gen) {
console.log(item);
}
})();
Option A: Promise {1} Promise {2} Promise {3}
Option. B: Promise {} Promise {} Promise {}
Option C: 1 2 3
Option D: undefined undefined undefined

The generator function range returns an async object with promises for each item in the range we pass: Promise{1}, Promise{2}, Promise{3}. We set the variable gen equal to the async object, after which we loop over it using a for await … of loop. We set the variable item equal to the returned Promise values: first Promise{1}, then Promise{2}, then Promise{3}. Since we’re awaiting the value of item, the resolved promise, the resolved values of the promises get returned: 1, 2, then 3. The correct answer is C.

Q95. What are Progressive Web Apps (PWA) and how they can be created by Ionic?
Ionic to create Progressive Web Apps that can run offline, have an app-like experience, and can be installed on users’ devices. PWAs can leverage service workers, caching, and other web technologies to provide a native-like experience. You can combine Ionic’s UI components with a JavaScript framework of your choice to build PWAs.

Q96. What are the benefits of Cordova integration with Ionic Framework?
Ionic integrates with Cordova (or PhoneGap), to access native device capabilities using JavaScript. Cordova plugins provide a bridge between your JavaScript code and native APIs, and enable features like camera access, geolocation, push notifications, and more. You can use Cordova plugins in conjunction with any JavaScript framework, including Ionic, to add native functionality to your hybrid mobile app.

Q97. How does the Ionic CLI aids in development using the framework?
Ionic CLI and Tooling: The Ionic Command Line Interface (CLI) provides a set of useful commands to create, build, and test your Ionic apps. The CLI simplifies the development process by automating common tasks such as project setup, building, and running the app on emulators or physical devices.

Q98. How does SPA’s and SSR’s work with SEO and Optimization?
SPA: Single-Page Applications typically require additional effort to ensure good Search Engine Optimization (SEO) and proper social media sharing. Since most content loads dynamically, search engines and social media crawlers may have difficulty indexing and understanding the content.
SSR: Server-Side Rendering provides better support for SEO and social media sharing since the complete HTML is generated on the server and can be easily indexed by search engines. The server can also provide specific metadata for social media sharing.
Q99. How does Angular uses two-way Data Binding?
In Angular, two-way data binding is a feature that allows synchronization of data between the component and the template in both directions. It enables automatic updates to the data in the component when the user interacts with the template, as well as updates to the template when the data in the component changes.

The [(ngModel)] directive is used for two-way data binding. It combines the property binding ([ngModel]) and event binding ((ngModelChange)) into a single directive.

Q100. How can you use Advanced Animation Techniques in your Frontend Applications?
Animation libraries like as GSAP (GreenSock Animation Platform), Anime.js, and Framer Motion provide advanced animation capabilities, timeline control, and additional easing functions. These animation libraries offer a more fine-grained control over animations, including options for sequencing, delays, callbacks, and advanced effects.

Technical and Language Questions
Developer Tools and Technologies
Problem Solving Exercises
Conducting Your Interview
Hiring developers?
Save time and avoid mis-hires with our technical assessment tests
FIND OUT MORE
21 Junior Front-End Developer Interview Questions
Eric Philips
June 23, 2022

Front-end developers are one of the top 10 In-Demand IT Jobs in 2022 but identifying the best candidates can be a challenge when it comes to finding the right mix of hard and soft skills, not to mention individuals that will fit into your company’s culture.

Your interview needs to cover a particular set of technologies that are core to doing front development. It’s also important to move from the realm of the theoretical to the practical — solving problems and asking questions that pertain to particular instances of code is much more useful for gauging the depth of an interviewee’s knowledge.

Technical and Language Questions
There are a number of technologies that are essential to a front-end developer. In general, asking very specific questions is not as useful as using open-ended questions as a jumping off point to discuss issues in more detail. 

Questions about Web protocols (HTTP and HTTPs, TCP/IP)
Why it’s important
These protocols explain how browsers communicate with clients. Knowledge of them is essential for understanding how your application is functioning and troubleshooting.

What sort of questions you might ask
1. Compare and contrast GET and a POST requests

The most important thing the candidate should identify is that these are both HTTP methods, but GET requests use a query string to retrieve resources while POST requests send data to create or update a resource with data stored in the rest body. This W3 Schools page contains a handy table comparing the two.

2. When might you encounter a PUT request?

The semantic distinction between Put and POST is somewhat nuanced, but if a candidate has worked at all with Web Services, they will recognize that PUT requests are generally used to update resources whereas POST is used to create new resources.

3. How does HTTP relate to the TCP/IP stack?

Although not necessarily essential, candidates may be familiar with the notion that there are different layers to communication protocols used to connect computer systems and that HTTP is an Application layer used by web clients and web servers built on top of the Transport/Transmission layer (TCP) and the Network/Path control layer (IP). See this discussion of the TCP/IP protocols for more information.

Questions About HTML
Why it’s important
HTML is the underlying mechanism for structuring elements on a web page or web application. It is the markup language that browsers understand and parse in order to display text and images. A developer needs to be fluent in how to create HTML documents and how to interpret HTML source code.

What sort of questions you might ask
4. What is the difference between a tag and an attribute in HTML?

Candidates should be able to identify that tags define page elements and the text enclosed by them (if any), usually with a start and end tag while attributes are name value pairs that pertain to tags and are defined within a start tag. Common attributes include id (which must be unique to identify an element on a page), class and style. In the example below, “p” is a tag while “style” is an attribute.

<p style=“color:blue;”>This is a paragraph</p>

For more information see this explainer.

5. What is the difference between a span and div tag? When would you use either?

Both are generic structural elements, but <div> tags are by default block level events (meaning they span the page and by default will not appear on the same line) while <span> tags are inline elements and multiple may appear on the same line. 

See this page for examples and a table comparing the two.

6. What is the role of the head tag in an HTML document?

Candidates should identify that the head contains machine-readable metadata about the page and typical sub elements include the title, meta tags, script tags, and stylesheets of (or links to stylesheets). They are not to be confused with header tags of various levels of headings (<h1>, <h2>, etc) which define the structure of the page as you would in an outline.

7. What is the DOM?

The Document Object Model is a tree type Object Model for HTML and is an API for JavaScript that allows the structure of the page to be dynamically modified by adding, changing, or removing HTML elements and attributes as well as CSS styles. 

Questions about CSS (Cascading Style Sheets)
Why it’s important
CSS is used in conjunction with HTML and is another essential technology a front-end developer needs to be versed in. While HTML provides structure, CSS defines how elements get displayed, whether it be colors, positioning, or text styling.

What sort of questions you might ask
8. Describe different types of selectors used in CSS

CSS styles can be applied to particular classes, elements, elements with given attributes, or based on a unique identifier of an element. Additionally there are a number of “pseudo” classes based on an end user’s interaction with elements such as editing a form field or hovering over the element with a mouse.

A full guide to css selectors can be found here.

9. Describe the CSS boxing model

The CSS box model is used for the purpose of affecting the layout of a page through properties that wrap around the content of each element including its margin, border, and padding which may be modified above, below, and to the sides of that element.

CSS diagram
Understanding margins, borders, and padding
10. What are different ways to hide an element with CSS?

Elements may be hidden by removing them from the DOM or changing CSS properties such as display, visibility or the HTML5 attribute hidden. Which method you use has different effects on the layout and accessibility of the element through keyboard navigation. Here’s a good primer.

Questions about JavaScript
Why it’s important
While HTML provides structure and CSS defines display, JavaScript makes web pages dynamic — it is a scripting language that all browsers support and is necessary to make web applications interactive.

What sort of questions might you ask
11. What is a callback in JavaScript?

Callback functions are a key part of JavaScript. Callbacks are used to develop asynchronous code by ensuring a given function is not going to run unto after a given task is completed. Callback functions take advantage of the fact that functions themselves are objects and may be passed as arguments to another function. Sounds complicated? See this guide to JavaScript Callback functions.

12. Describe how lexical scoping works in JavaScript

The visibility and access of variables and functions is affected by the scope in which they are declared. These items can be global in scope, and therefore accessible to all code, or local to a block of code or function. Inner functions are lexically bound by outer functions, meaning they have access to variables declared by their outer functions.

13. How would you define and use classes in JavaScript?

A class is essentially a template for encapsulated, reusable code for which there may be multiple instances of (referred to as objects), as you would in any object oriented language. Classes contain data in the form of variables and functions that execute code. You declare classes either as functions or with the class keyword. Classes have a special function called a constructor used to set its internal values when a new instance is created. Other functions may be called on an instance as needed.

Have them create a simple class and create two instances, printing out a member variable value that is distinct for each instance. It might look as follows:

class Employee {

  constructor(name_param) {

    this.name = name_param;

  }

}

var employeeInstance1 = new Employee(“John”);

var employeeInstance2 = new Employee(“Jane”);

console.log(employeeInstance1.name); // prints “John” to the console

console.log(employeeInstance2.name); // prints “Jane” to the console

Questions about front-end Frameworks: React, Angular, Vue, jQuery
Why it’s important
These sort of frameworks provide mechanisms for creating complex, dynamic applications using the underlying technologies of HTML, CSS, and JavaScript.

What sort of questions to ask
Generally you should target your interview questions to frameworks that you use in house. Alternatively, if the candidate you are interviewing does not have experience in the framework you are using but does have experience with another, you can see how in-depth their knowledge is on that framework to see if they are likely to be able to adapt to your technology stack.

Covering all of these frameworks in depth is beyond the scope of this article, so please see these resources instead:

Angular Interview Questions
React Interview Questions
Vue Interview Questions
jQuery Interview Questions
Working with Web Services
Why it’s important 
Front-ends that invoke micro services is a popular design pattern. Front-end developers must often work against and troubleshoot issues with Web Service APIs to get data to display to end users.

What sort of questions to ask
14. How might you invoke a web service?

There are a variety of different methods that can be used to invoke web services such as:

XMLHttpRequest
fetch
Axios (a popular open source library)
jQuery (using $,ajax() )
Below is an example of calling a REST service through jQuery.

$(document).ready(function() {

    $.ajax({

        url: “http://rest-service.guides.spring.io/greeting”

    }).then(function(data) {

       $(‘.greeting-id’).append(data.id);

       $(‘.greeting-content’).append(data.content);

    });

});

15. What are the main characteristics of a RESTful service?

A RESTful API (REST being short for REpresentational State Transfer) is an architectural style that uses HTTP requests to access and transform resources through web services. Such APIs are designed to be stateless and makes use of the native verbs of HTTP (GET, POST, PUT, DELETE) as well as the notion that resources should be uniquely identifiable through a single URL that return back status representations of resources as JSON or XML/

16. What sort of web services have you worked with in the past?

For this question, assuming the candidate has invoked web services, you should be probing to get a sense of their understanding of the different operations and endpoints that could be invoked through the API and what sort of payloads and errors might come back from such invocations.

Common APIs might include:

Google Maps Platform (to search place information using a variety of categories)
Stripe (for payment processing)
Other Free Web Services
Developer Tools and Technologies
In addition to the specific technologies used to create front ends, you need to get an understanding for your candidate’s experience with development tools, technologies, and best practices to ensure they will be a productive member of your team.

Questions about Managing Code with Version Control 
Why it’s important
Managing code is an essential part of the development process. Even junior developers should have some familiarity with how to branch and merge code.

Sorts of questions you might ask
17. What does a merge conflict look like?

Merge conflicts happen when you have competing commits in branches that are being merged. This can happen when changes have been made on the same lines of code. You need to decide which lines need to be incorporated into the final merge.

Below is an example as to what the conflict will look like in a file, where one line reads “open an issue” in the HEAD branch whereas it reads “ask your question in IRC”.

If you have questions, please

<<<<<<< HEAD

open an issue

=======

ask your question in IRC.

>>>>>>> branch-a

In this case both options could be incorporated in a single line (e.g. “please open an issue or ask in our IRC channel”). The conflict markers must be deleted (<<<<<<<, =======, >>>>>>>) in order to complete the merge.

Problems can arise during merges when it affects the ability of the code to compile. Sometimes resolving the conflict may require developers to work together. Ask the candidate about any particularly difficult merge issues they have faced and how they resolved those issues as well as best practices to avoid merge conflicts.

More Git related questions can be found here. 

Questions about Debugging Code
Why it’s important 
A good way to introduce a junior developer to your codebase is to have them fix issues in your backlog, so you’ll want to see what their aptitude is for troubleshooting.

Sorts of questions you might ask
18. Identify and explain the logical error

Show the candidate a section of code and ask them to spot the logical error (such as a mistake that occurs because of operator precedence). For instance, here is a simple example that tests their understanding of JavaScript equality.

function greet(person) {

  if (person == { name: ‘amy’ }) {

    return ‘hey amy’

  } else {

    return ‘hey arnold’

  }

}

greet({ name: ‘amy’ })

In this case, because we are comparing objects and not primitives, the quality operation is comparing by reference not value.

As an exercise, have them put this code into a web page and open it in a browser. Have them modify the code so it will be invoked when the page loads. Then ask them to open up the developer console and set a breakpoint so they can step through the code.

Questions About Data Structures
Why it’s important
You want to get a sense of the candidate’s familiarity with high level programming concepts that will impact code performance. Developers with a more traditional academic background should be able to handle these questions better than self-taught programmers, so you should manage your expectations accordingly.

Sorts of questions you might ask
19. Describe the difference between a List vs. a Set 

A List is an ordered sequence of elements that may be duplicated whereas a Set is a collection of distinct elements which is unordered.

Orderly line of objects
The way you structure and organize your data will impact performance
20. Compare and contrast use cases for a stack vs. a queue

The main differences between stack and queue are that stack uses LIFO (last in first out) method to access and add data elements whereas Queue uses FIFO (first in first out) method to access and add data elements. 

Use a queue when you want to get things out in the order that you put them in (an example would be handing calls in a call center in the order they were received). Use a stack when you want to get things out in the reverse order than you put them in (good examples would be the browser back button or handling undo operations in a text editor).

Questions About Code Security
Why it’s important 
Although it may not be a deal breaker, having sense of how much a candidate has dealt with security issues with code is a good data point to have as you will want to make sure they are mindful of issue

Sorts of questions you might ask
21. What is cross-site scripting (XSS)?

XSS is a type of “attack”, in which malicious code is injected into otherwise trusted websites.

The end user’s browser, unaware of any trickery, will execute the script. The malicious script will gain access to cookies, session tokens, or any other sensitive information retained by the browser. There are various types of attack, including reflected, stored, and DOM-based XSS. Attacks can be prevented by sanitizing input, encoding output and using appropriate response headers.

Problem Solving Exercises
You will also need to engage your potential hire with problem solving exercises.

This is potentially the most illuminating portion of the interview, as it will allow you to gauge not only how a candidate thinks, but how they interact with you.

While some up front technical questions about particular technologies that are relatively straight forward can be a good start to getting a sense of a candidate’s knowledge base, problem solving exercises can actually get into implementation.

We suggest choosing a problem that is actually fairly straightforward to solve without any hidden tricks or gotchas — they simply require the ability to understand the parameters and walk through the solution, even if it means some brute force is necessary and perhaps some friendly prodding. You can also see how well they communicate their thought process as they attempt to come to a solution. River crossing problems are useful in this way, such as the classic wolf, goat, and cabbage problem.  

? ? ?‍♂️ ?

The good thing about such a problem is it allows you to then approach how you might model the problem in code and even build a web application around it using HTML, CSS, and JavaScript. This allows the candidate to show some creativity in their approach.  

It also allows you to talk about user experience and how to create user friendly interfaces. How would you explain to end users the different options they have? How would you provide feedback to end users? Can they create a design that will be flexible enough to accommodate changes to the requirements, such as another element to take across the river.

Conducting Your Interview
CodinGame has a screening tool that allows you to conduct an initial screening focused on essential technical questions. CodinGame technical tests will ensure candidates match your skills requirements. You can even compare how candidates fared against each other before moving to the next step in your interview process.

According to our 2022 tech hiring survey, candidates and recruiters agree that live coding interviews are the best option for interviews. 78% of developers and 79% of recruiters say that a live coding interview is their preferred interview format and 74% of developers think live coding interviews are the best way to showcase their skills.  

Another advantage of live coding interviews is they allow for an interactive experience with candidates. This is helpful when candidates aren’t an exact match for the skillset you’re looking for.. By working together on a piece of code, youcan better sense whether or not a candidate could potentially grow into the role. CoderPad is an ideal tool for this purpose as it allows you to ask the more complex follow-up questions with coding exercises.

Top Front-End Developer Interview Questions
/ Web Development / By Pathways2Advancement.org
If you’re reading this then you’re likely preparing for an upcoming front-end developer interview or you’re anticipating one in the near future.  First, we’re going to briefly discuss the technical skills you’ll need to help you stand out during your job-hunting process.  Then, we’ll dive right into some of the top front-end developer interview questions and sample answers to help you prepare for this important step in your career as a front-end developer.

What Skills Do You Need to Succeed as a Front-End Developer Applicant?
A front-end developer is a web developer who specializes in the design and programming of a website’s front end, or what the user sees.  So naturally you’ll need a wide array of website design skills to complete any given design and development job.  HTML and CSS knowledge is usually a required skill, as well as a high level of efficiency is a must.  Experience with different programs is needed to complete a website build on any given project from start to completion. Some tools that come in handy for front-end web designers include WordPress (or other CMS platforms), PHP, Drupal, C+, and other programming languages are just some examples of these common tools.

Soft skills such as communication is an essential in order to grasp the complete scope of a website project. Therefore, the ability to communicate clearly with other team members and departments including web developers, marketing team members, graphic designers, and even sales staff is important. Content writing, SEO knowledge, Photoshop skills, and experience with implementing SEO tactics are needed skills for any front-end website designer in today’s world.

Preparing for an Interview as a Front-End Developer
The most important thing you can do to prepare for this interview is to research the company where you are applying. You’ll need to review and completely understand the requirements and recommended skills listed in the front-end developer job description. You should also think about what their culture is like and how that might be different from your previous companies you’ve either applied to or worked.

It’s important to have an idea of some questions you might be asked in order to prepare for a front-end developer interview. Preparation can be challenging since there are no recommended questions or frameworks provided by employers.

Top 5 Front End Developer Key Questions

1. What is a responsive web page design?
Responsive design allows one single version of a website to work on any size screen or device. Regardless of the size of the screen being viewed or the type of device responsive design can be implemented. With the use of HTML and CSS, the website components will move around the page to be viewed appropriately on a desktop, iPad or tablet, and even mobile phones. Sometimes components of a website are removed or even added, depending on which device is being viewed. The main coding languages used in responsive design are HTML and CSS.

2. When do you use JPEG and when do you use PNG?
JPEGs are used in any situation when a small file is needed and transparency is not. A lightweight JPEG can be optimized even further using tools that will lighten the weight and optimize the photo. Websites need to load fast and keeping images lightweight helps website pages load quicker.

A PNG can offer many levels of transparency through the use of alpha channels, which a JPEG does not offer. Full transparency will be used in most cases with the logo. PNGs are used for most fading-type effects and even used on button fades. PNGs offer a higher level of photo quality than JPEGs, however, it does come with a bigger load on the site. In most cases, the quality can make up for the extra weight.

3. What is a CSS file and why is it used?
CSS works in tandem with HTML. They are a team. HTML is the building block of a website, which creates the structure of a webpage, by placing headlines and paragraphs where needed. HTML also handles embedding of images, video, and other media.

CSS is short for Cascading Style Sheets. CSS is used in all of the stylings of items on the page. Colors of backgrounds, text, borders, and anything on the page are controlled through what is called the style sheet. CSS is also used to style all elements on the page such as; the size of the headline, font type, borders, underlining, italics, image sizes, and more.

If a CSS file is linked incorrectly or unavailable, a website will look very strange to the user, lacking all colors and organization that would normally be seen when viewing the front-end of a website.

4. How many H1 tags go on a website page and why?
Every website page only needs one H1 tag. Think of the H1 tag as the main heading and the decider of what is to follow on the page. The H1 tag sets the tone for all the following information. Every page on a website needs a unique H1 tag. Search engines rank and place web pages by the information they find. If there is more than one H1 tag, this will confuse the search engines and hurt SEO efforts and it can confuse actual human readers. With a proper unique title, the odds of ranking better in search engines are great. If more headings are desired below the H1 tag, use the H2, H3, which are available for subheadings.

5. What are W3C standards and why is it important for front-end web design?
The W3C is an international community working on building website standards all front-end web developers need to follow. The goal of the W3C is to develop and implement design procedures that will help ensure websites will look appropriate across all web browsers. The W3C continues the development of protocols and guidelines ensuring the longevity of growth on the web. The organization was started in 1994 and offers a great number of resources for the Front-end website designer.

Wrapping Up the Front-End Developer Interview
The interview process is a critical step in the hiring process. It’s a time for both the employer and the candidate to gain insight into each other’s understanding of the position, their skills and personality. While interviews can be nerve-wracking, they are crucial to understanding whether or not you and the company are a right fit for each other. Take this opportunity to learn as much as you can about the role and the company. Ask questions and take your time answering their questions.

Ultimately, your preparation for an interview as a front-end developer can dictate the success you’ll have in the process. If you’re confident in your skills and do everything you can to have an idea of what to expect from the interview, then you’ll be in a great position to perform at your very best.

Список вопросов для собеседования разработчика по телефону
Руководитель департамента управления персоналом, попросила создать список вопросов для собеседования разработчика (программиста) по телефону. Согласно устным требованиям, вопросы разбил на блоки.

Обратите внимание, что ответ может быть не полным, ответа на вопрос может не быть совсем, просто нужно понять ширину знаний, цель - отсеять разработчиков-новичков.

1. SQL

вопрос: часто ли вы пишите SQL-запросы:
ответ: да

вопрос: что используют в SQL-запросе, чтобы сгруппировать результаты
ответ: GROUP BY

вопрос: что используют в SQL-запросе, чтобы вывести уникальный список строк
ответ: 
- DISTINCT
- GROUP BY

вопрос: что используют в SQL-запросе, чтобы упорядочить список строк
ответ: ORDER BY

вопрос: что используют в SQL-запросе, чтобы применить условие после группировки строк
ответ: HAVING

вопрос: какие JOIN-операторы вы знаете:
ответ: ожидается услышать хотя бы 2 первых:
- INNER JOIN
- LEFT JOIN
- RIGHT JOIN
- FULL OUTER JOIN
- CROSS JOIN

вопрос: что такое транзакция
ответ может быть приблизительно следующим:
- группа логически объединённых последовательных операций по работе с данными, выполненная или отмененная целиком
- ряд/стек SQL-запросов, в рамках которого либо выполняются все SQL запросы, либо не выполняется ни одного

вопрос: какие типы индексов в sql вы знаете
ответ: ожидается услышать хотя бы несколько из перечисленных ниже:
- кластеризованный
- некластеризованный / heap / куча
- уникальный / unique
- составной / composite
- покрывающий / covering

вопрос: какие структуры данных вы знаете
ответ: ожидается услышать хотя бы несколько из перечисленных тут

2. Временная сложность алгоритма

вопрос: знаете ли вы, что такое временная сложность алгоритма
ответ: да

вопрос: какая будет временная сложность алгоритма, при выборе значения по ключу в хэш-таблице, в которой нет коллизий
ответ может быть одним из следующих:
 - постоянная
 - O(1)
подсказка: читается как "О от одного", где О - буква

вопрос: какая будет временная сложность алгоритма, при нахождении значения в хэш-таблице без использования ключа
ответ может быть одним из следующих:
 - линейная
 - O(n)
подсказка: читается как "О от эн", где О - буква, n - буква

вопрос: какая будет временная сложность алгоритма, при выборе значения по ключу в хэш-таблице, в которой есть коллизии
ответ может быть одним из следующих:
 - логарифмическая
 - O(log n)
подсказка: читается как "О от лог эн", где О - буква, log - слово логарифм, n - буква

3. Протоколы передачи данных

вопрос: чем в двух словах UDP отличается от TCP
ответ: ожидается услышать что-то подобное
UDP — простой протокол, не устанавливает соединение, ненадежный, неупорядоченные данные
TCP — тяжеловесный, устанавливает соединение, упорядоченность данных

вопрос: какие протоколы прикладного уровня передачи данных TCP/IP вы знаете
ответ: ожидается услышать несколько из перечисленных ниже:
- HTTP (Hyper Text Transfer Protocol)
- FTP (File Transfer Protocol)
- POP3 (Post Office Protocol)
- SMTP (Simple Mail Transfer Protocol)
- TELNET — это протокол удаленного доступа

вопрос: какие популярные HTTP-протоколы/способы передачи данных вы знаете:
ответ: ожидается услышать все из перечисленных ниже:

- XML-RPC
- SOAP
- REST/RESTful

вопрос: объясните принципиальную разницу между SOAP и REST
ответ: REST/RESTful является архитектурным стилем, в то время как SOAP является протоколом

вопрос: какие популярные текстовые форматы для REST вы знаете:
- JSON
- XML

4. Паттерны проектирования приложения

вопрос: Вы знаете что такое паттерны проектирования приложения?
ответ: да

вопрос: какие бывают паттерны
ответ: порождающие, структурные, поведенческие

вопрос: какие вы знаете порождающие паттерны (Creational)
ответ: ожидается услышать несколько из перечисленных ниже:
1.1. Абстрактная фабрика (Abstract Factory)
1.2. Строитель (Builder)
1.3. Фабричный Метод (Factory Method)
1.4. Пул одиночек (Multiton)
1.5. Объектный пул (Pool)
1.6. Прототип (Prototype)
1.7. Простая Фабрика (Simple Factory)
1.8. Одиночка (Singleton)
1.9. Статическая Фабрика (Static Factory)

вопрос: какие вы знаете структурные шаблоны проектирования (Structural)
ответ: ожидается услышать несколько из перечисленных ниже:
2.1. Адаптер (Adapter / Wrapper)
2.2. Мост (Bridge)
2.3. Компоновщик (Composite)
2.4. Преобразователь Данных (Data Mapper)
2.5. Декоратор (Decorator)
2.6. Внедрение Зависимости (Dependency Injection)
2.7. Фасад (Facade)
2.8. Текучий Интерфейс (Fluent Interface)
2.9. Приспособленец (Flyweight)
2.10. Прокси (Proxy)
2.11. Реестр (Registry)

вопрос: какие вы знаете поведенческие шаблоны проектирования (Behavioral)
ответ: ожидается услышать несколько из перечисленных ниже:
3.1. Цепочка Обязанностей (Chain Of Responsibilities)
3.2. Команда (Command)
3.3. Итератор (Iterator)
3.4. Посредник (Mediator)
3.5. Хранитель (Memento)
3.6. Объект Null (Null Object)
3.7. Наблюдатель (Observer)
3.8. Спецификация (Specification)
3.9. Состояние (State)
3.10. Стратегия (Strategy)
3.11. Шаблонный Метод (Template Method)
3.12. Посетитель (Visitor)

вопрос: какие еще вы знаете шаблоны проектирования
ответ: ожидается услышать несколько из перечисленных ниже (хорошо, если будет упомянут Закон Деметры):
- Data Access Object (DAO) 
- Entity (сущность)
- Repository (выполняет работу с данными сущности)
- Memory Storage (выполняет работу аналогичную работе Repository или является еще более глубоким уровнем работы с данными, по отношению к Repository)
- Data Source Provider (Datasource Adapter)
- Query Object

5. Linux (линукс):

вопрос: писали ли Вы шелл скрипты?
ответ: да

вопрос: какие linux команды/утилиты используете для отслеживания работы сервера:
ответ: ожидается услышать несколько из перечисленных: ps,top,htop,netstat

вопрос: какие linux команды/утилиты применяете при чтении логов:
ответ: ожидается услышать несколько из перечисленных: tail,less,grep,vim,nano,awk

вопрос: какие linux команды/утилиты применяете при редактировании больших текстовых файлов:
ответ: ожидается услышать несколько из перечисленных: sed,awk,vim

вопрос: какие linux команды/утилиты применяете для разбиения больших текстовых файлов на маленькие:
ответ: awk

А какие бы вы задали вопросы по телефону и какой ожидали бы слышать ответ?

Топ 9 вопросов на интервью Middle FrontEnd девелоперу (React) в 2022 году
16.08.2022 asnpostinterview, React
Перевод статьи Top 9 interview questions for a Middle FE (React) developer in 2022


В одной из моих предыдущих статей я предоставил список вопросов для собеседования с разработчиком Junior FE (React) в 2022 году. Теперь я предлагаю вам ответить на эти 9 вопросов и посмотреть, являетесь ли вы разработчиком Middle FE (React).

Желаем удачи и приступим!


1. Что такое REST API?

Ответ:

REST API — это API, который соответствует принципам разработки REST. Он также известен как RESTful API. REST означает передачу репрезентативного состояния. REST API — это архитектурный стиль для API, который использует HTTP-запросы для доступа и использования данных.

Принципы проектирования REST, также известные как архитектурные ограничения:

Единый интерфейс. Все запросы API для одного и того же ресурса должны выглядеть одинаково, независимо от того, откуда поступает запрос. REST API должен гарантировать, что одна и та же часть данных, например имя или адрес электронной почты пользователя, принадлежит только одному универсальному идентификатору ресурса (URI). Ресурсы не должны быть слишком большими, но должны содержать всю информацию, которая может понадобиться клиенту.
Разделение на клиент-сервер. В дизайне REST API клиентские и серверные приложения должны быть полностью независимы друг от друга. Единственная информация, которую должно знать клиентское приложение, — это URI запрошенного ресурса; никаким другим образом он не может взаимодействовать с серверным приложением. Точно так же серверное приложение не должно изменять клиентское приложение, кроме как передавать ему запрошенные данные через HTTP.
Отсутствие состояния. API-интерфейсы REST не имеют состояния, а это означает, что каждый запрос должен включать всю информацию, необходимую для его обработки. Другими словами, REST API не требуют сеансов на стороне сервера. Серверным приложениям не разрешено хранить какие-либо данные, связанные с запросом клиента.
Кэшируемость. Когда это возможно, ресурсы должны кэшироваться на стороне клиента или сервера. Ответы сервера также должны содержать информацию о том, разрешено ли кэширование доставленного ресурса. Цель состоит в том, чтобы повысить производительность на стороне клиента и повысить масштабируемость на стороне сервера.
Многоуровневая системная архитектура. В REST API вызовы и ответы проходят через разные уровни. Как правило, не предполагайте, что клиентское и серверное приложения подключаются друг к другу напрямую. В коммуникационной петле может быть несколько разных посредников. REST API должны быть разработаны таким образом, чтобы ни клиент, ни сервер не могли сказать, взаимодействует ли он с конечным приложением или с посредником.
Код по запросу (необязательно). REST API обычно отправляют статические ресурсы, но в некоторых случаях ответы могут также содержать исполняемый код (например, апплеты Java). В этих случаях код должен выполняться только по запросу.
2. Что такое кликджекинг?

Ответ:

Кликджекинг, также известный как «атака с исправлением пользовательского интерфейса», — это когда злоумышленник использует несколько прозрачных или непрозрачных слоев, чтобы заставить пользователя нажать кнопку или ссылку на другой странице, когда он намеревался нажать на страницу верхнего уровня. Таким образом, злоумышленник «перехватывает» клики, предназначенные для его страницы, и перенаправляет их на другую страницу, которая, скорее всего, принадлежит другому приложению, домену или тому и другому.

Используя аналогичную технику, нажатия клавиш также могут быть перехвачены. С тщательно продуманной комбинацией таблиц стилей, фреймов и текстовых полей пользователь может поверить, что он вводит пароль к своей электронной почте или банковскому счету, но вместо этого вводит его в невидимый фрейм, контролируемый злоумышленником.

3. Каковы плюсы и минусы рендеринга на стороне сервера в React?
Ответ:

Плюсы:

Браузеру предоставляется быстрая начальная загрузка веб-страницы, т.к. она готова к отображению HTML;
Отличный пользовательский интерфейс, даже если у пользователя плохое соединение, устаревшее устройство или отключен JavaScript в браузере, потому что весь основной контент готов к отображению;
Содержимое веб-страницы индексируется быстрее, что приводит к лучшему SEO-рейтингу;
Отличный вариант для статических страниц, поскольку рендеринг на стороне сервера загружает контент быстро и эффективно.

Минусы:

SSR требует больше ресурсов и может быть дорогостоящим, поскольку вся обработка выполняется на сервере;
Для сложных приложений большое количество запросов к серверу может замедлить работу сайта;
Повышенная нагрузка со многими пользователями может привести к узким местам;
Настройка SSR может быть сложной и утомительной.
4. Что вы знаете о спрайтах изображений CSS?
Ответ:

Спрайт изображения CSS представляет собой набор изображений, помещенных в одно изображение. Веб-страница с большим количеством изображений может долго загружаться и генерировать несколько запросов к серверу. Гораздо удобнее отправлять изображения в виде одного изображения с точки зрения экономии памяти и полосы пропускания. Использование положения фона как способа различения отдельных изображений в одном файле изображения, что позволяет сократить количество HTTP-запросов.

5. Что такое оператор «use strict» в JS? Почему мы это используем?
Ответ:

Он был представлен в ES5. Это способ включить строгий режим JavaScript.

Строгий режим вносит несколько изменений в обычную семантику JavaScript:

Устраняет некоторые тихие ошибки JavaScript, заменяя их ошибками генерирования;
Исправляет ошибки, которые мешают движкам JavaScript выполнять оптимизацию: код в строгом режиме иногда можно заставить работать быстрее, чем идентичный код, но не в строгом режиме;
Запрещает некоторый синтаксис, который, вероятно, будет определен в будущих версиях ECMAScript.
6. В чем разница между «git pull» и «git fetch»?
Ответ:

git fetch — это команда, позволяющая загружать объекты из другого репозитория.

git pull — это команда, которая позволяет вам получать данные из другого репозитория или локальной ветки и интегрироваться с ними.

Из этого определения видно, что git pull на самом деле является git fetch, за которым следуют дополнительные действия — обычно это git merge.

git fetch — более безопасная альтернатива, потому что она извлекает все коммиты с вашего удаленного компьютера, но не вносит никаких изменений в ваши локальные файлы.

С другой стороны, git pull работает быстрее, поскольку вы выполняете несколько действий за одно. Это более сложное действие, и важно понимать, что вы будете вносить изменения и сразу же применять их к вашей текущей проверенной ветке.

7. Что делает «git rebase»?
Ответ:

«git rebase» — это изменение базы вашей ветки с одного коммита на другой, что создает впечатление, будто вы создали свою ветку из другого коммита. Внутри Git выполняет это, создавая новые коммиты и применяя их к указанной базе. Очень важно понимать, что несмотря на то, что ветка выглядит одинаково, она состоит из совершенно новых коммитов.

8. Что такое prop drilling в React?
Ответ:

prop drilling — это передача данных через несколько вложенных дочерних компонентов в глубоко вложенный компонент. Проблема такого подхода в том, что большинство компонентов, через которые передаются эти данные, не используют эти данные. Они просто используются в качестве среды для транспортировки этих данных к компоненту назначения.

Чтобы избежать этого, мы можем использовать хук useContext().

9. Что такое error boundaries в React?
Ответ:

Согласно официальному документу React: «error boundaries — это компоненты React, которые перехватывают ошибки JavaScript в любом месте своего дочернего дерева компонентов, регистрируют эти ошибки и отображают резервный пользовательский интерфейс вместо дерева компонентов, которое потерпело крах. Error boundaries улавливают ошибки во время рендеринга, в методах жизненного цикла и конструкторах всего дерева под ними».

Вопросы и задачи на техническом собеседовании JS в 2025 году
HR
07 апреля 2025
Блог
Поделиться:
СОДЕРЖАНИЕ

Вопросы и ответы для Junior JavaScript-разработчиков

Вопросы и ответы для Middle JavaScript-разработчиков

Практические задачи для Junior JavaScript-разработчиков

Практические задачи для Middle JavaScript-разработчиков

Как повысить шансы на успех

В 2025 году рынок IT продолжает активно развиваться, и требования к кандидатам становятся все более строгими. Чтобы успешно пройти собеседование на должность JS-разработчика, важно не только хорошо знать JavaScript, но и понимать его ключевые особенности.

Рассмотрим основные аспекты JS-разработки, типичные вопросы и задачи, которые помогут подготовиться и произвести впечатление на собеседовании.

Вопросы и ответы для Junior JavaScript-разработчиков
1. Ключевые особенности JavaScript?

Асинхронность с использованием Promises и async/await.
Работа с DOM для манипуляции элементами на странице.
Поддержка ООП и функционального программирования.
2. Как работает метод fetch и для чего он используется?

Метод fetch используется для выполнения HTTP-запросов. Он возвращает Promise и позволяет делать асинхронные запросы к серверу для получения данных.

Пример:

fetch('https://api.example.com/data')
.then(response => response.json())
.then(data => console.log(data));
3. Что такое DOM и как с ним работать в JS?

Это структура данных, представляющая документ в виде дерева объектов для взаимодействия с HTML и XML.

4. Как можно манипулировать классами элементов с помощью JS?

Используя методы classList.add, classList.remove и classList.toggle, можно добавлять, удалять и переключать классы у элементов.

const element = document.getElementById('myElement');
element.classList.add('newClass');
element.classList.remove('oldClass');
element.classList.toggle('activeClass');
5.Чтотакое callback — функция и как она работает?

Callback — это функция, которая передается в другую как аргумент и выполняется после завершения определенной операции. Часто применяется для обработки асинхронных задач, таких как запросы к серверу или таймеры.

function fetchData(callback) {
  setTimeout(() => {
    callback('Data received');
  }, 1000);
}
fetchData(message => console.log(message));
6. Как создать элемент и добавить его в DOM?

Использовать метод createElement для создания нового элемента и appendChild для добавления его в Document Object Model.

Пример:

const newElement = document.createElement('div');
newElement.textContent = 'Новый элемент';
document.body.appendChild(newElement);
7. Что такое async и await, и как они упрощают работу с асинхронным кодом?

async делает функцию асинхронной и возвращает Promise, а await приостанавливает выполнение function до тех пор, пока Promise не будет выполнен. Это позволяет писать асинхронный код в синхронном стиле.

async function getData() {
  const response = await fetch('https://api.example.com/data');
  const data = await response.json();
  console.log(data);
}
getData();
8. Какие современные фреймворки вы знаете и для чего они используются?

Современные фреймворки, такие как React, Angular и Vue.js, используются для разработки пользовательских интерфейсов. Они помогают создавать компоненты, управлять состоянием приложения и упрощают взаимодействие с DOM.

9. Что такое JSON и как с ним работать в JS?

JSON — это текстовый формат для обмена данными, основанный на синтаксисе JavaScript. В JS для работы с ним используются два метода: JSON.stringify преобразует объект в строку JSON, а JSON.parse превращает строку JSON обратно в объект.

const obj = { name: 'Alice' };
const jsonString = JSON.stringify(obj); // '{"name":"Alice"}'
const parsedObj = JSON.parse(jsonString); // { name: 'Alice' }
10. Что такое модульность в JS и как ее можно достичь?

Модульность — это подход к организации кода, при котором функциональность разбивается на независимые и повторно используемые модули. В JavaScript это можно достичь с помощью модулей ES6.

11. В чем преимущество React?

В простоте создания интерактивных интерфейсов.

Вопросы и ответы для Middle JavaScript-разработчиков
1. Как работает прототипное наследование в JS?

Прототипное наследование работает через цепочку прототипов. У каждого объекта есть скрытое свойство [[Prototype]], которое ссылается на другой объект. Если нужное свойство или метод не найдены в самом объекте, JS ищет их в его прототипе, и так далее по цепочке. Это позволяет объектам наследовать функциональность друг от друга.

Пример:

const parent = { name: "Parent" };
const child = Object.create(parent);
console.log(child.name); // "Parent"
2. Что такое Web Workers и зачем они нужны?

Web Workers позволяют выполнять JS-код в отдельном потоке, не блокируя основной поток. Это полезно для выполнения тяжелых вычислений.

3. Как оптимизировать производительность JS-кода?

Использовать debounce и throttle для обработки событий.
Минимизировать количество операций с DOM.
Использовать ленивую загрузку (lazy loading).
4. Что такое мемоизация и как ее реализовать?

Это оптимизационная техника, при которой результаты дорогостоящих вызовов функций сохраняются и повторно используются при повторных вызовах с теми же аргументами. Это помогает ускорить выполнение программы, избегая повторных вычислений.

Например:

function memoize(func) {
  const cache = new Map();
  return function(...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    }
    const result = func(...args);
    cache.set(key, result);
    return result;
  };
}
5.Как работает Virtual DOM в React?

Virtual DOM — это легковесная копия реального DOM. React использует её для оптимизации обновлений интерфейса, сравнивая изменения и применяя только необходимые обновления.

6. Что такое Tree Shaking и как его использовать?

Tree Shaking — это процесс удаления неиспользуемого кода из финального бандла. Он взаимодействует с модулями ES6 и поддерживается инструментами, такими как Webpack.

7. Как работает useEffect в React?

useEffect в React используется для выполнения побочных эффектов в функциональных компонентах. Он принимает два аргумента: функцию, которая выполняет эффект, и массив зависимостей. Если зависимости изменяются, function эффекта запускается снова. Если массив пуст, эффект выполняется только один раз после монтирования компонента.

Пример:

useEffect(() => {
  console.log("Компонент обновлен");
}, [dependency]);
8.Что такое Server-Side Rendering (SSR) и зачем он нужен?

SSR — это рендеринг приложения на сервере, что улучшает SEO и скорость загрузки. Популярные решения: Next.jsи Nuxt.js.

9. Как работает метод addEventListener и какие события можно обрабатывать?

Метод addEventListener добавляет обработчик для указанного события (например, клик, ввод текста) к элементу.

Пример:

const button = document.getElementById('myButton');
button.addEventListener('click', () => {
  console.log('Button clicked');
});
10. Что такое WebAssembly и как его использовать с JavaScript?

WebAssembly (Wasm) — это бинарный формат, позволяющий выполнять код на других языках (например, C++) в браузере. Он используется для тяжелых вычислений, которые JS не может эффективно обработать.

Практические задачи для Junior JavaScript-разработчиков
1. Напишите функцию, которая вычисляет факториал числа. Факториал числа n определяется как произведение всех положительных целых чисел от 1 до n (n!).

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

// Пример использования:
console.log(factorial(5)); // 120
console.log(factorial(0)); // 1
2. Напишите функцию, которая определяет, является ли переданное слово палиндромом. Палиндром — это слово, которое читается одинаково в обоих направлениях (как слева направо, так и справа налево).

function isPalindrome(word) {
    let left = 0;
    let right = word.length - 1;

    while (left < right) {
        if (word[left] !== word[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

// Пример использования:
console.log(isPalindrome("radar")); // true
console.log(isPalindrome("hello")); // false
Практические задачи для Middle JavaScript-разработчиков
1. Реализуйте функцию, которая выполняет «дебаунс» (debounce) для другой function. Дебаунс — это техника, которая ограничивает частоту выполнения функции, чтобы она вызывалась не чаще одного раза за заданный интервал времени.

function debounce(func, delay) {
    let timeoutId;
    return function(...args) {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}

// Пример использования:
function printMessage(message) {
    console.log(message);
}

const debouncedPrintMessage = debounce(printMessage, 2000);
debouncedPrintMessage("Hello, World!"); // Сообщение выведется через 2 секунды

2. Создайте класс EventEmitter для реализации шаблона проектирования «Издатель-Подписчик» (Publisher-Subscriber). Класс должен иметь методы для подписки, отписки и вызова событий.

class EventEmitter {
    constructor() {
        this.events = {};
    }

    on(event, listener) {
        if (!this.events[event]) {
            this.events[event] = [];
        }
        this.events[event].push(listener);
    }

    off(event, listener) {
        if (!this.events[event]) return;

        this.events[event] = this.events[event].filter(l => l !== listener);
    }

    emit(event, ...args) {
        if (!this.events[event]) return;

        this.events[event].forEach(listener => {
            listener.apply(this, args);
        });
    }
}

// Пример использования:
const emitter = new EventEmitter();

function onUserLogin(username) {
    console.log(`${username} logged in`);
}

emitter.on('login', onUserLogin);
emitter.emit('login', 'Alice'); // Выведет: "Alice logged in"

emitter.off('login', onUserLogin);
emitter.emit('login', 'Alice'); // Ничего не выведет, так как слушатель удален
Как повысить шансы на успех
Подготовка к собеседованию на позицию JavaScript-разработчика требует не только технических знаний, но и умения презентовать себя. Частые ошибки: недостаточное понимание базовых концепций (например, замыкания, асинхронности), неумение объяснить свой код и отсутствие практики решения задач на собеседованиях.

Советы:

Повторите основы JavaScript, включая действия с фреймворками и DOM.
Практикуйтесь решать задачи на платформах вроде LeetCode или Codewars.
Готовьтесь к вопросам о реальных проектах: расскажите, какие задачи решали и какие технологии использовали.
Не бойтесь задавать уточняющие вопросы, если что-то непонятно.
Главное — будьте уверены в своих силах, но не переоценивайте их. Честность и готовность учиться часто ценятся выше, чем идеальные ответы.

Вопросы и задачи на собеседовании frontend-разработчика в 2024 году
HR
11 декабря 2023
Блог
Поделиться:
СОДЕРЖАНИЕ


Варианты вопросов с ответами для frontend junior во время технического собеседования

С какими системами контроля версий вы знакомы

Какими способами можно визуально скрыть элемент?

Сколько ресурсов браузер может одновременно загружать с одного домена?

Сколько ресурсов браузер может одновременно загружать с одного домена?

Назовите 3 способа уменьшения времени загрузки страницы.

Что такое плавающие элементы (floats) и как они работают

Варианты вопросов с ответами для frontend middle во время технического собеседования

Как можно оптимизировать загрузку внешних ресурсов на странице?

Практические задачи для frontend junior

Практические задачи для frontend middle
Собеседования для программистов зачастую проходят в несколько этапов и довольно сложны. В случае поиска работы на должность фронтенд-разработчика дополнительные затруднения вызывает проверка не только технических навыков, но и уровня креативного мышления. 


Первая часть собеседования – это проверка soft skill фронтендера. Затем наступает время следующего испытания по конкретным техническим компетенциям (hard skill).



Полина Кондакова
Руководитель направления подбора персонала
Чтобы хорошо подготовиться к этапу технического собеседования, потребуется освежить знания JavaScript, HTML и CSS. То есть тех знаний, без которых сложно представить работу современного Frontend Developer.

В процессе интервью вам наверняка придется также продемонстрировать знание популярных библиотек и фреймворков для фронтенда.


В этой статье вы найдете наиболее распространенные вопросы и задачи с собеседований на должность разработчика, а также развернутые ответы на них.


Варианты вопросов с ответами для frontend junior во время технического собеседования

Фронтендер сейчас – достаточно универсальный боец в мире веб-разработки. Он должен быть верстальщиком, уметь создавать логику работы клиентской части, а также понимать работу серверной части веб-приложения.


Поэтому, пожалуй, стоит начать вопросы для джунов с горячо любимого HTML.


В чем разница между элементами div и span?

Div – блочный элемент, а span – строчный элемент. В соответствии с семантическими требованиями div используют для группировки контента в секции, а span – для оформления текста и изображений.


Разница между cookie, sessionStorage и localStorage

Сookie, sessionStorage и localStorage – это технологии для хранения данных в браузере на стороне клиента. Различия заключаются в использовании и хранении данных.


Cookie – небольшой и наиболее защищенный способ хранения данных пользователя, который отправляется сервером в браузер, а затем сохраняется в браузере клиента. LocalStorage и sessionStorage предназначены для хранения данных на клиенте, их нельзя прочитать с сервера, и они не подходят для хранения конфиденциальных данных.


Какая технология наиболее популярна сейчас и точно будет популярна ещё несколько лет?



Вопросы с философским уклоном уже стали нормой на современных собеседованиях. Здесь нет единого правильного варианта ответа, ведь Front-end в последние годы стал очень многогранен, обзавелся множеством прогрессивных библиотек и фреймворков. 


Наиболее популярным языком сейчас является JavaScript и его фреймворки: React, Angular и Vue.js. Стоит помнить также и о технологиях, которые связаны с искусственным интеллектом, машинным обучением и анализом данных. В частности, такие библиотеки и фреймворки для визуализации данных, как D3.js и Chart.js, станут наверняка использовать для создания интерактивных графиков и диаграмм на веб-сайтах.


С какими системами контроля версий вы знакомы

Git – стандарт в индустрии, это децентрализованная система контроля версий. А также централизованные системы. Например, Subversion или SVN.


Какими способами можно визуально скрыть элемент?

с помощью свойства display;

с помощью свойства opacity;

с помощью свойства visibility;

с помощью position:absolute;

уменьшить размеры элемента до нуля.


Сколько ресурсов браузер может одновременно загружать с одного домена?

Это HTML-теги, которые используют для описания метаданных веб-страницы. Метаданные – это данные, которые описывают другие данные, а в вебе описывают HTML-документы. Метаданные важно указывать, чтобы поисковики правильно отображали сайт в поисковой выдаче, и он выводился на первые строчки поиска. Еще метатеги делают сайт удобнее для пользователей: позволяют быстрее понять, о чем он. 


Сколько ресурсов браузер может одновременно загружать с одного домена?

Современные браузеры обычно поддерживают шесть одновременных соединений и параллельных загрузок.


Назовите 3 способа уменьшения времени загрузки страницы.



Минимизация количества запросов.

Lazy-loading.

Минификация CSS и JS.




Как реализовать примитивное слайд-шоу?

Подготовка разметки: сделать контейнер и блоки для слайдов. 


Написать CSS для скрытия всех слайдов, кроме одного. 


Написать JavaScript-код, который будет менять CSS: отображать слайды по очереди с помощью изменения классов, при этом используя setInterval.


Что такое плавающие элементы (floats) и как они работают

CSS-свойство float размещает элемент справа или слева от контейнера, в котором он находится. Браузер визуально убирает этот элемент из обычного потока. В результате окружающие элементы и текст «обтекают» элемент. Свойство float часто используют для верстки текстового контента страниц. Например, статей с иллюстрациями.


В чем разница между «сбросом» и «нормализацией» CSS?

Сброс и нормализация CSS – это два разных подхода к обнулению стилей веб-страницы.


Сброс CSS – это процесс обнуления стилей, чтобы убрать браузерные стили по умолчанию, которые могут отличаться от одного браузера к другому. Цель сброса CSS в том, чтобы создать «чистую» страницу, на которой все элементы имеют одинаковый вид в разных браузерах.


Нормализация CSS – это процесс создания единообразных стилей для разных элементов, чтобы веб-страница выглядела одинаково во всех браузерах. В отличие от сброса CSS, нормализация CSS сохраняет некоторые стили по умолчанию браузера, но при этом пытается сделать их единообразными. 


Оба подхода могут использоваться в зависимости от нужд проекта. Если вы хотите создать полностью уникальный дизайн, то возможно вам нужен сброс CSS. Если же вы хотите сохранить некоторые стили браузера, но при этом сделать веб-страницу более единообразной, то нормализация CSS может быть более подходящим вариантом.


Варианты вопросов с ответами для frontend middle во время технического собеседования

Что такое Event loop и как он работает?

Это механизм в JavaScript, который позволяет выполнить асинхронный код и обрабатывать события: клики мыши, нажатия клавиш и таймеры. Event loop работает внутри JS движка и состоит из двух основных фаз: фаза синхронизации и фаза выполнения задач. В фазе синхронизации обрабатываются синхронные операции, такие как выполнение кода и обработка событий, которые были помещены в очередь в прошлый цикл. В фазе выполнения задач обрабатываются асинхронные операции, такие как колбеки таймеров и событий.


Когда JavaScript выполняет код, все синхронные операции помещаются в очередь. Когда очередь становится пустой, Event loop проверяет, есть ли в очереди асинхронные операции. Если есть, они выполняются в порядке их добавления в очередь.


В чём разница между call и apply?

Методы call() и apply() используются для вызова функции с заданным значением this, а также для передачи аргументов в функцию. Основная разница между ними заключается в способе передачи аргументов: 


Метод call() принимает список аргументов, переданных в функцию через запятую. 


Метод apply() принимает массив аргументов, переданных в функцию.


Что такое псевдоклассы в CSS?

В CSS псевдоклассы используются для описания стилей элементов, находящихся в особых состояниях. Псевдоклассы можно использовать совместно с CSS-селекторами для настройки внешнего вида элементов на основе их состояний.


В чем разница между следующими видами позиционирования элементов: относительное, фиксированное, абсолютное, статическое?

Относительное позиционирование – это когда элемент смещается относительно его положения, задаваемого по умолчанию.

Фиксированное позиционирование – когда настраивают положение элемента, ориентируясь на края окна браузера.

Абсолютное позиционирование – это размещение элемента относительно ближайшего позиционированного родительского элемента. Именно там, где указано разработчиком.

Статическое позиционирование – это режим позиционирования по умолчанию, при использовании которого элементы выводятся в порядке, указанном в документе.


Чем отличаются PUT- и POST-запросы?

PUT-запросы приводят к замене целевого ресурса на данные, передаваемые в запросе. Его можно использовать для обновления содержимого существующего ресурса или для создания нового ресурса.


POST-запросы приводят к специфической для ресурса обработке данных, передаваемых в запросе. Их можно использовать для выполнения различных действий. В том числе, для создания новых ресурсов, для выгрузки файлов на сервер, для отправки форм.


PUT-запросы являются идемпотентными, а POST-запросы – нет. 


В чём отличия технологии Long Polling, протокола WebSocket и событий, генерируемых сервером?

Технология Long Polling применяется при взаимодействии клиентских и серверных систем. Клиент отправляет серверу запрос, ответ на него поступает, когда в распоряжении сервера оказываются данные, запрошенные клиентом. После этого клиент выполняет новый запрос.

Протокол WebSocket позволяет устанавливать долгоживущие двусторонние соединения между клиентом и сервером.

В основе событий, генерируемых сервером, лежит использование долгоживущего HTTP-соединения, которое используется для отправки клиенту новых данных по инициативе сервера.


Как можно оптимизировать загрузку внешних ресурсов на странице?

Использовать кэширование, ленивую загрузку (lazy-loading), поддомены. Если используется HTTP/1.1, для HTTP/2, то это неактуально. Можно оптимизировать сборку JS-кода, минифицировать, использовать CDN, gzip-сжатие, css- и svg-спрайты, настроить кэширование.


Что такое прогрессивная отрисовка?

Такие вопросы на собеседовании для фронтенд-разработчика тоже могут встретиться.


Прогрессивная отрисовка – это метод веб-разработки, который позволяет поэтапно отображать содержимое веб-страницы по мере его загрузки. Сначала отображается минимальное количество информации, а затем дополнительные элементы. Детали добавляются по мере загрузки страницы.


Этот подход помогает ускорить начало взаимодействовать пользователя с сайтом – не приходится ждать полной загрузки страницы. Еще прогрессивная отрисовка позволяет снизить объем передаваемых данных и ускорить время отклика сервера.


Что такое «трехстороннее рукопожатие»?

А вот и вопрос из сферы безопасности.


Трехстороннее рукопожатие (Triple Handshake) – это проблема безопасности в компьютерных сетях, которая возникает при использовании SSL/TLS-соединений.


В процессе установки безопасного соединения SSL/TLS между клиентом и сервером происходит обмен сообщениями, который состоит из трех шагов (трех рукопожатий:


Клиент отправляет серверу сообщение SYN с произвольным начальным номером (seq).

Сервер отправляет клиенту сообщение SYN-ACK, подтверждающее получение сообщения SYN и содержащее свой собственный произвольный начальный номер (seq) и номер последовательности подтверждения (ack), который равен начальному номеру клиента +1.

Клиент отправляет серверу сообщение ACK с номером подтверждения, который равен начальному номеру сервера +1.


Проблема Triple Handshake возникает, когда злоумышленник нарушает правильный порядок шагов рукопожатия, вставляя свой сервер между клиентом и настоящим сервером. В этом случае злоумышленник может получить доступ к конфиденциальной информации, передаваемой между клиентом и сервером.


Чтобы избежать проблемы Triple Handshake, необходимо использовать проверенные и безопасные протоколы SSL/TLS и устанавливать соединение только с доверенными серверами.


Что такое NaN?

Это специальное значение в JavaScript, которое означает «не число» (Not-a-Number).


Возможные причины, по которым значение становится NaN:


Попытка выполнить математическую операцию с нечисловым значением.

Попытка выполнить математическую операцию, результат которой не может быть представлен числом. Например, деление нуля на ноль или вычисление квадратного корня из отрицательного числа.

Преобразование строки в число, если строка не является валидным числом.


Значение NaN имеет интересное свойство: оно не равно ни одному другому значению, включая само себя. Поэтому существует специальная функция isNaN(), которая позволяет проверить, является ли значение NaN.


Практические задачи для frontend junior

Задача 1. Реализовать методы, которые в процессе выполнения строки (2).plus(3).minus(1) дали бы на выходе 4.


Ответ:


Поскольку, мы работаем с числами, надо расширить прототип Number новыми методами.


Number.prototype.plus = function (value) {

return this + value;

}

Number.prototype.minus = function (value) {

return this - value;

}


Число два будет доступно через this в функции plus. Из нее мы возвращаем результат сложения числа, на которое указывает this и числа, переданного в качестве аргумента. Аналогично для minus.


Задача 2. Можно ли из js менять значения в before, after?


Ответ:


Нет, единственное что мы можем — это удалить класс, у которого указаны before или after, либо наоборот добавить.


Практические задачи для frontend middle

Задача 1. Каким образом можно обойтись без промисов?


Ответ:


По старинке, вводили переменную-счетчик и как-только наступало окончание очередного асинхронного действия, сравнивали переменную с общем количеством.


Задача 2. Объяснить, в какой последовательности выведутся цифры и почему так.


console.log(1);

setTimeout(function() {

console.log(2);

}, 0)

console.log(3);


1, 3, 2. Так как, хоть js и асинхронен, но внутри него есть очередь выполнения и setTimeout, и setInterval. Если им указан 0, помещают вызов функции в конец очереди.


Задача 3. Как подключить js, css? Плюсы, минусы разных способов?


Ответ:


Можно с помощью тегов


<script></script>

<style></style>  


прямо на странице или


<script src="script.js"><script>

<link rel="stylesheet" href="/css/style.css">


подключаем из внешних файлов.


Минус подключения внешних файлов заключается в том, что для их закачки открываются дополнительные соединения. Может случиться так, что мы не сможем закачать, а если это еще и JS-файл, подключенный где-то в начале, то мы рискуем показать пользователю пустую страницу.


Размещение стилей и скриптов в самом документе, в этом плане, надежнее. Но при этом скрипты и стили совершенно не кэшируются.

HTML и CSS - два основных навыка Фронтенд разработчика. Вам будет трудно встретить веб-разработчика, который не имеет хотя бы базового понимания этих двух направлений.
Однако некоторые считают, что HTML и CSS не следует уважать так же, как другим языкам, потому что ни один из них не требует внутренней логики. Это потому, что HTML и CSS являются декларативными языками, которые инструктируют веб-браузер отображать веб-страницы, а не использовать вычислительный код.

Несмотря на то, что некоторые могут подумать, что для разработчиков становится все более ценным обладать глубокими знаниями и опытом работы на этих двух языках. Проверка навыков HTML и CSS не менее важна, чем владение такими языками, как Java и C ++. Несомненно, любой человек, имеющий смутные технические знания, должен иметь базовое понимание HTML и CSS.

HTML и CSS составляют основу фронтенд разработки вместе с JavaScript. Фактически, вы также найдете довольно много back-end разработчиков, которые регулярно используют эти языки. Хотя вы никогда не найдете разработчика, который использует только эти языки, HTML и CSS достаточно важны для современной разработки программного обеспечения, чтобы гарантировать, что разработчики интерфейсов могут использовать их эффективно. Хотя начать работу с ними несложно, для продвинутых приложений требуются глубокие навыки и понимание. Важно убедиться, что ваш программист понимает это.

1. Что такое HTML и CSS и для чего они используются?
1.1 Что такое HTML?
HTML или язык разметки гипертекста - это стандартный язык разметки для создания веб-страниц и веб-приложений. Языки разметки отличаются от языков программирования тем, что не выполняют никакой логики. Вместо этого HTML предназначен для создания структурированного документа с использованием таких элементов, как изображения, формы, списки и т.д. Браузер должен затем интерпретировать этот документ для создания веб-страниц, которые вы в конечном итоге просматриваете (например, ту, которую вы читаете. сейчас).

1.2 Что такое CSS?
CSS или каскадные таблицы стилей предоставляют стандартное определение того, как различные элементы должны отображаться на странице. Что я имею в виду? Представьте, что вы хотите, чтобы художник покрасил ваш дом, вы можете указать ему цвет, который вы хотите для каждой отдельной стены. Это было бы похоже на предоставление инструкций только с использованием HTML. Для этого потребуется много инструкций для вашего художника и потребуется больше времени на написание.

Но если вы хотите, чтобы все стены вашего дома были одного цвета. В этом случае вы бы посоветовали своему маляру покрасить каждую стену в определенный цвет. Это все равно что давать инструкции с помощью CSS. С помощью CSS вы можете определить стандартный вид элемента на своей странице, чтобы всякий раз, когда вы создаете новый элемент, все ваши стандарты дизайна оставались неизменными. Это требует меньше инструкций и означает, что новые элементы, такие как цвета и шрифты, будут соответствовать остальной части страницы.

1.3 Для чего используются HTML и CSS?
При совместном использовании HTML и CSS являются краеугольными камнями всемирной паутины. Оба они очень популярны, а основные концепции легко усвоить. Взятые с помощью JavaScript, они являются двумя из трех основных навыков Фронтенд разработчика. Но Front-end программист должен знать больше, чем просто базовые концепции, чтобы делать хорошо работу.

2. Что важно знать ИТ-рекрутеру о навыках фронтенд-разработчика HTML и CSS?
2.1. Стандарты
Консорциум World Wide Web (W3C) - это международная организация по стандартизации, которая создает стандарты HTML и CSS. Тем не менее, последняя версия HTML - это HTML5, который следует стандарту WHATWG (так называемый HTML Living Standard), а не стандарту W3C. Не существует единой версии CSS, потому что, начиная с CSS 3, он разделен на модули, и каждый модуль имеет независимую версию.

Практически каждый разработчик, не говоря уже о Front-end разработчике, должен иметь хотя бы базовое понимание HTML и CSS. Разработчик HTML или CSS редко бывает автономным. В большинстве случаев это всего лишь один из навыков Front-end разработчика, Full-stack программиста или графического / веб-дизайнера.

Стандарты меняются не очень часто. Однако новые функции появляются регулярно, поэтому разработчикам необходимо быть в курсе последних событий. В последние годы наблюдается постоянный поток новых функций и обновлений CSS. Настолько, что серверные разработчики могут даже не осознавать, насколько мощной стала эта технология.

2.2 Инструменты
Каждый браузер интерпретирует CSS и HTML по-своему. Разработчик должен знать различия между браузерами и их поддержку разных версий HTML / CSS. Кроме того, разработчики должны знать, какие инструменты они могут использовать для создания кроссбраузерного HTML / CSS-контента.

Front-end разработчики, использующие JavaScript фреймворки, обычно работают с библиотеками, полными готовых к использованию компонентов. Однако создание готового к производству приложения требует адаптации стиля к дизайну продукта. Такая адаптация часто требует глубоких знаний CSS.

Чтобы упростить и ускорить работу веб-страниц, разработчики часто используют дополнительные инструменты, такие как интерфейсные фреймворки (например, Bootstrap) или язык таблиц стилей (например, LESS или SCSS).

2.3 Пользовательский опыт (UX)
UX - жизненно важный компонент фронтенд разработки. Компетентный программист внешнего интерфейса должен обладать способностью просматривать веб-страницы или приложения с точки зрения пользователя. Это означает комплексную оптимизацию UX. Предлагать улучшения для приложения, такие как удаление ненужных кликов или повышение производительности за счет оптимизации скорости загрузки страницы, - это два примера оптимизации.

Адаптивный веб-дизайн (RWD) - еще одна важная техника, которую разработчики интерфейса должны учитывать для UX. Это подход, который предполагает, что дизайн и разработка должны реагировать на поведение и среду пользователя в зависимости от размера экрана, платформы и ориентации.

Наконец, a11y (это аббревиатура от термина «доступность») становится широко обсуждаемым движением в технических кругах и еще одним важным аспектом UX. Это не относится к конкретному стандарту, измерению или закону, имеющему отношение к технологии, а скорее к изменению способа создания веб-сайтов с учетом интересов людей с ограниченными возможностями. Проект направлен на то, чтобы сделать веб-страницы более удобоваримыми, актуальными и простыми для людей с ограниченными возможностями, будь то нарушение зрения или другая форма заболевания.

3. Проверка навыков Front-end разработчика в области HTML и CSS на основании резюме.
Первый намек на знание HTML и CSS Front-end разработчика у многих IT рекрутеров - это то, что написано в резюме кандидата. Помимо простых навыков HTML и CSS (которые должны быть даны любому разработчику внешнего интерфейса), очень важно увидеть, насколько хорошо кандидат осведомлен о техническом стеке внешнего интерфейса. Вот глоссарий навыков, на которые нужно обратить внимание, и краткое изложение всего, что должен знать ваш кандидат, чтобы помочь вам лучше понять, что нужно искать в его опыте программиста.

3.1 Глоссарий HTML и CSS для ит рекрутеров
Front-end фреймворки: Bootstrap, Foundation, Semantic UI, Pure, UIkit, Bulma
Препроцессоры CSS: Sass, LESS, Stylus, CSS-Crush, Myth, Rework, Compass, PostCSS
Фреймворки HTML5: Skeleton, HTML KickStart, Montage, SproutCore, Zebra,
Анимации: Адаптивный веб-дизайн (RWD)
Доступность: A11Y
Конвенции: Блок модификатор элемента
Инструменты: Модули CSS, CSS в JS
Другое / Разное: HTML5 шаблон

3.2. Стандарты HTML - типы HTML
HTML 4 - основная версия HTML, рекомендованная W3C в 1997 году.
XHTML - расширение HTML4, просто более строгая версия HTML 4. В него включены некоторые функции XML в HTML.
HTML5 - последняя версия стандарта HTML. Наиболее широко используемый.

3.3. Стандарты CSS
CSS 2 - спецификация CSS уровня 2, опубликованная W3C в 1998 г.
CSS 2.1 - CSS уровня 2, версия 1, исправленные ошибки в CSS2
CSS 3 - разделение спецификации на несколько разделов, называемых модулями, значительное изменение. CSS 3 представил множество новых функций, таких как новые селекторы, новые свойства, изменения блочной модели и многое другое.

3.4. Фреймворки HTML и CSS
Базовый HTML и CSS легко кодировать, но уровень сложности современных веб-сайтов может потребовать очень много времени для написания кода. К счастью, от разработчиков не требуется создавать все с нуля. Существуют доступные фреймворки, которые предлагают помощь с готовыми к использованию компонентами и предоставляют простой способ настройки внешнего вида страницы.

Наиболее популярные фреймворки:
Бутстрап (версия 4)
Foundation (последняя версия 6)
3.5 Другие области HTML и CSS, о которых должен знать ваш кандидат
Поскольку основы CSS довольно легко освоить, есть некоторые области CSS, которые требуют дополнительных усилий для эффективного использования разработчиками. Это включает:

Модель CSS Flexbox
CSS-сетка
Модель CSS Box
Элементы макета с абсолютным позиционированием
Элементы макета с поплавками
CSS-анимации
HTML / CSS вопросы и ответы на собеседовании4. Вопросы и ответы на собеседовании по HTML / CSS

4. Вопросы для собеседования чтобы проверить навыки Front-end разработчика - HTML и CSS
4.1. HTML вопросы и ответы на собеседовании ћ
Что делает doctype?
Doctype определяет, к какой версии HTML относится документ.

Чего следует опасаться при проектировании или разработке многоязычных сайтов?
Ответы кандидата на этот вопрос должны продемонстрировать, есть ли у него опыт создания крупномасштабных сайтов из разных регионов мира. Ответы, которые включают следующие темы, являются хорошим показателем информированного кандидата: поддержка Unicode для кодирования, направление слева направо и справа налево, автоматизация перевода валют, дат и формы множественного числа, а также параметризация переведенных строк

Опишите разницу между <script>, <script async> и <script defer>.
Ответы на этот вопрос связаны со знанием кандидатом того, как выполняется JavaScript в веб-приложении. Обычно сценарии выполняются последовательно, <script async> и <defer> - это методы загрузки сценариев в другом порядке.

Почему обычно рекомендуется размещать CSS <link> между <head> </head> и JS <script> непосредственно перед </body>? Вы знаете исключения?
Ответы на этот вопрос демонстрируют высокий уровень понимания структуры HTML-документа. Ссылки CSS внутри <head> гарантируют, что любой контент на странице будет правильно структурирован с самого начала рендеринга (без временных вспышек контента). С другой стороны, загрузка JS из нижней части <body> побудит браузер выполнить JS после отображения содержимого.

Что такое прогрессивный рендеринг?
Ответы продемонстрируют внимание кандидата к эффективности своих сайтов. Прогрессивный рендеринг - это метод более быстрой загрузки просматриваемых фрагментов страниц.

4.2. CSS вопросы и ответы на собеседовании
В чем особенность селектора CSS и как он работает?
Этот вопрос предназначен для того, чтобы узнать, имел ли кандидат возможность создавать и / или поддерживать большие веб-сайты, на которых он мог отвечать за несколько таблиц стилей (потенциально конфликтующих). Если к определенному блоку применено много конфликтующих таблиц стилей, CSS необходимо определить, какая из них более важна.

В чем разница между «сбросом» и «нормализацией» CSS? Что бы вы выбрали и почему?
Ответы покажут, есть ли у кандидата опыт устранения различий между браузерами. Сброс - это удаление стилей по умолчанию, а нормализация - унификация результатов.

Опишите поплавки и то, как они работают.
Ответы определяют фундаментальные аспекты CSS. Поплавки определяют, как разместить элемент внутри контейнера .

Опишите BFC (контекст форматирования блока) и то, как он работает.
Ответ определяет, понимает ли кандидат, как блоки структурируют страницу и как они могут адаптироваться друг к другу.

Какие существуют различные методы очистки и какие из них подходят для какого контекста?
Ответы на этот вопрос демонстрируют фундаментальные знания CSS. Три наиболее распространенных метода: «Clear: both», свойство переполнения и псевдоселектор «: after».

Как вы подойдете к исправлению проблем со стилем, специфичных для браузера?
Ответы на этот вопрос должны относиться к тому, понимает ли кандидат, как гарантировать единообразный внешний вид для пользователей на многих различных устройствах. Примером решения может быть normalize.css.

Как вы обслуживаете свои страницы в браузерах с ограниченными функциями?
Ответы продемонстрируют осведомленность кандидатов о том, что некоторые пользователи могут использовать более старые версии браузеров и что функции CSS в базе кода могут не поддерживаться. Это особенно важно при создании крупномасштабных сайтов, таких как сайты публикации новостей.

Какие методы / процессы вы используете?
Изящная деградация - предоставляет запасной вариант для отсутствующей функции браузера, поэтому, если что-то не поддерживается, предоставляется аналогичный UX, насколько это возможно.
Прогрессивное улучшение - фокусируется на предоставлении функций для базовых пользователей и добавлении новых функций только в том случае, если браузер поддерживает их.

Какими способами можно визуально скрыть контент (и сделать его доступным только для программ чтения с экрана)?
Ответы на этот вопрос позволяют проверить, есть ли у кандидата опыт предоставления доступа к веб-сайтам (a11y), то есть обеспечения равного UX для людей с ограниченными возможностями. Этот конкретный сценарий должен происходить, когда контент визуально очевиден для зрячих пользователей, а резервная информация доступна для программ чтения с экрана для предоставления информации.

5. Техническая проверка навыков разработчиков интерфейсов HTML и CSS с помощью онлайн-теста.
Важно увидеть, знает ли разработчик основные концепции, более важно знать, могут ли они применить их к реальной работе. Это можно сделать с помощью теста кодирования или собеседования по программированию, но не все платформы для этих тестов созданы одинаковыми.

5.1 Какие тесты кодирования HTML и CSS вы должны выбрать для проверки навыков фронтенд-разработчика?
При поиске подходящего онлайн- теста на HTML и CSS вы должны убедиться, что он соответствует следующим критериям:
Тест должен отражать реальную выполняемую работу с использованием HTML и CSS в реальных интерфейсных проектах.
Экономия времени - максимум один-два часа.
Отправляется автоматически и может быть доставлен куда угодно, чтобы предоставить вам и вашему кандидату гибкость.
Не ограничивайтесь проверкой того, отображает ли код страницу, но также проверяйте эффективность кода и то, насколько хорошо он отображается на нескольких платформах.
Будьте как можно ближе к естественной среде фронтенд-разработки и позвольте кандидату получить доступ к тем ресурсам, с которыми он обычно работает.
Предоставьте кандидатам доступ ко всем библиотекам, фреймворкам и другим инструментам, которые они обычно использовали бы, включая наиболее важные для работы.
Сопоставьте способности кандидата с соответствующим тестом

Junior full stack веб-разработчик: полный план развития
Кто же такой full stack веб-разработчик, и с чем его едят? Понятные ответы на непонятные вопросы, обязательные к прочтению.


3
1

12





Маст хэв!
Независимо от вашего пути и карьерных целей, есть некоторые вещи, которые должен знать каждый разработчик.

Изучите, как использовать Git (особенно в командной среде), клонировать репозитории, делать коммиты, создавать ветки и мержить код.
Отладка. Frontend или backend – везде могут быть ошибки. Ознакомьтесь с инструментами отладки для вашей IDE.
Существует много сред разработки, которые вы можете использовать, но выберите одну и досконально изучите ее (знание горячих клавиш и инструментов сделает вас лучшим разработчиком).
Методологии (Agile / SCRUM / Kanban) – при работе в команде, скорее всего, вы будете использовать какую-либо методологию разработки продукта, поэтому убедитесь, что вы знакомы с тем, как они работают.
Frontend
Junior full stack веб-разработчик: полный план развития

Чем занимается Full stack веб-разработчик? Этим:

реализация дизайна с использованием HTML / CSS;
взаимодействие с DOM с помощью JavaScript;
работа со сторонними API.
Разберем подробнее каждое из направлений.

HTML / CSS
Ожидается, что младший full stack веб-разработчик будет хорошо ориентироваться в таких темах:

использование HTML для создания веб-страницы;
стилизация элементов с использованием CSS;
способы применения CSS к HTML – встроенные стили, таблица стилей, etc.
После того, как у вас появятся базовые знания, рассмотрите более продвинутые вещи:

CSS Grid и Flexbox для разметки и более удобного позиционирования элементов.
SCSS сделает обычный CSS более управляемым с помощью переменных.
Фреймворки
Следующий этап – знакомство с CSS-фреймворками. В основном это элементы и стили "из коробки", которые вы могли уже использовать в проектах. Это сильно экономит время. Не распыляйтесь, весь мир не объять: выберите один фреймворк и хорошо его изучите. Как только овладеете одним – другие будет легче познать.

Bootstrap
Bootstrap популярен и используется во многих компаниях.

Ну и зачем изучать CSS / HTML с нуля, если можно использовать фреймворк?

Да, есть фреймворки, которые облегчают жизнь. Но часто приходится кастомизировать самописные проекты, а для этого нужно знать основы.

Отзывчивый дизайн
Важно учитывать множество мобильных устройств при создании проектов интерфейсов. К счастью, CSS-фреймворки делают создание "отзывчивости" простым.

Media Queries. Зная, как использовать CSS для создания адаптивных конструкций, нужно понять, как использовать media queries. Так вы определите, как элементы должны выглядеть на разных размерах экранов.
Избегайте использования пикселей для указания размеров. Изображение с шириной 100px, всегда будет иметь ширину 100 пикселей, независимо от размера экрана. Попытайтесь использовать rem, vh и vw для достижения отзывчивости.
JavaScript
Да, это прекрасный язык программирования JavaScript. Для успешного развития в среде front-end вам нужно знать язык JavaScript, и знать хорошо. По мере того, как фреймворки приходят и уходят, основные элементы ЯП остаются прежними.

Вот минимум знаний для Джуна:

объекты, функции, условия, циклы и операторы;
модули;
массивы (включая способы управления ими);
работа с данными с помощью Fetch API;
манипуляции с DOM и использование Events;
Async / Await (необязательная, но действительно полезная тема);
JSON;
ES6+;
тестирование (Jest, Enzyme, Chai и т. д.)
Повышения навыка программирования на JavaScript:

Создайте игру Super Mario (вы узнаете JavaScript, манипулируя DOM и используя события).
Создайте админку, показывающую статистику, которая извлекается из API. Например, панель мониторинга Twitter, GitHub и т. д. (вы научитесь работать с API и JSON).
Не беспокойтесь о внешнем виде. Сосредоточьтесь на изучении JavaScript, а не CSS/HTML. Вы всегда сможете сделать его красивым позже, если хотите.
JavaScript фреймворки
Самые популярные на данный момент: Angular.js, React.js и Vue.js.

Если вы уже изучили JavaScript основы и имеете крепкую базу, изучение фреймворков будет большим плюсом к вашему скиллу Джуна.

React
Он имеет постоянную поддержку от Facebook, массу тематических онлайн-сообществ и является самым популярным в отрасли на данный момент.

Если вы выполнили описанные выше шаги и немного познали язык JavaScript, изучение React не должно составить труда. Младший full stack веб-разработчик должен знать:

о React-компонентах и том, как они работают;
как использовать State и Props в компонентах;
JSX и как использовать его для отображения HTML элементов на веб-странице;
как и когда компоненты повторно визуализируются;
React hooks;
NPM, Webpack и Babel.
Оттачивание скилов:

Переделайте любой из ваших предыдущих проектов JavaScript под React.
Создайте калькулятор (хороший способ потренировать state management и React Hooks).
Создайте собственный Twitter, GitHub или ленту новостей. Используйте общедоступные API для получения данных и отображения их в приложении.
Не беспокойтесь об идеальном внешнем виде, а сосредоточьтесь на том, чтобы заставить его работать, а также на изучении концепций React.
Redux
Redux – это стейт менеджмент фреймворк, полезно дополняющий React. Если грубо, то это front-end БД, хранящая состояние веб-приложения.

В Redux много подводных камней, поэтому не волнуйтесь, если вы не сразу все "схватываете". Сосредоточьтесь на понимании основ и управлении состоянием с React.

Есть ряд доступных инструментов, способных помочь вам с отладкой React / Redux:

React Dev Tools
Redux Dev Tools
Браузеры
Full stack веб-разработчик должен знать все о браузерах: Chrome, Firefox и Edge являются основными. Разберитесь с такими направлениями:

отладка (например, Chrome Developer Tools);
работа с хранилищем (локальное хранилище, сессионное хранилище, куки);
особенности браузера – самая большая проблема веб-разработки.
Развертывание и хостинг
Вы должны знать, как развернуть и где захостить веб-приложение. Это благотворно отразится на вашем портфолио, знаниях, и получении работы. Используйте управляемый сервис – пусть трудную работу за вас выполнит кто-то еще:

GitHub Pages
Heruko
Netlify
Digital Ocean
AWS
Firebase
Back-end
Junior full stack веб-разработчик: полный план развития

Full stack веб-разработчик обычно делает это:

создает API, использующее какой-то интерфейс (часто возвращая JSON);
занимается написанием бизнес-логики и валидации;
интегрирует сторонние API;
реализует сохранение и чтение данных из БД.
Языки программирования
Основные языки программирования:

Java
C#
Python
js
Go
PHP
Какой бы язык вы ни выбрали, убедитесь, что вы знаете следующее:

процесс создания API
основы языка
как подключиться к БД
как сделать запрос
управление пакетами
написание тестов
REST API и JSON
Создание хорошего REST API является одной из основных задач бекенд-разработчика. Вам придется знать:

как создать хороший ответ;
как обрабатывать запросы;
запрос аутентификации;
документирование API.
REST API – мост между бекендом и фронтендом, поэтому убедитесь, что вы понимаете, как это работает.

JSON нужен для передачи данных через REST API. Данные в нем представлены в виде объектов и массивов.

БД, DevOps и full stack веб-разработчик
Junior full stack веб-разработчик: полный план развития

Это сложная отрасль, необходимая, если вы захотите углубиться в DevOps. Будет большим плюсом знать:

управление БД;
платформы для хостинга (AWS, Azure, Google и т. д);
CI / CD (Jenkins, GitLab и т. д.);
журналирование и мониторинг.
Продвинутые темы
Ниже приведены дополнительные темы, рекомендуемые к рассмотрению только после того, как осилите все базовые.

Аутентификация на JWT / OAuth
Это основной метод проверки подлинности, разрешающий пользователям войти в систему.

Шаблоны проектирования
Изучение шаблонов проектирования облегчит решение распространенных проблем и поможет стать лучшим разработчиком.

Прогрессивные веб-приложения и мобильная разработка
Прогрессивные веб-приложения – это приложения, работающие как нативные на телефоне пользователя. Изучите этот вопрос, если появится дополнительное время.

React Native – позволяет писать код на React, компилируемый в Android / IOS.

Flutter – инструмент похож на React Native, только использует Dart.

Командная строка
Вам нужно знать:

как подключиться к серверу по SSH;
как перемещаться по файловой системе (cd, ls и т. д.);
редактирование файлов с помощью Vim или аналогичного.
Оригинал

Другие материалы по теме:
ТОП-6 рецептов на чистом HTML и CSS без использования JS
Дорожная карта web-разработчика Java в 2019 году

Чек-лист вопросов на собеседовании Frontend-разработчику (Junior, Middle)
Дата обновления: 19.02.2026  Время чтения: 5 мин.

Что нужно знать frontend-разработчику для устройства на работу? Рассказываем в материале.

Составили совместно с руководителем отдела разработки компании FRED Шамилем Азиевым список вопросов для собеседования на фронтенд-разработчика. Информация полезна обеим сторонам: и рекрутеру, чтобы знать, что спросить на собеседовании, и соискателю, чтобы быть готовым к вопросам. Для удобства разделили их – для джуниор-специалистов и миддлов.

PromoPult — единый автопилот для запуска и аналитики онлайн-рекламы

Все инструменты в одном месте: SEO, контекст, таргет, реклама и аналитика Wildberries.
Бесплатный тест SEO на 2 недели — без предоплаты, сайт выйдет в топ Яндекса и Google.
Все деньги идут на рекламу, пользоваться инструментами платформы можно бесплатно.
Простая настройка рекламы и наглядная аналитика — даже для новичков.
Бесплатная маркировка рекламы и отчеты в ОРД.
Полный комплект закрывающих документов.
Бесплатная настройка рекламы при пополнении баланса от 3000 ₽.
Регистрируйтесь и оцените PromoPult в деле!

Реклама. ООО "Клик.ру". ИНН 7743771327. erid:2VtzqxFCx5k

Шамиль Азиев
Шамиль Азиев
Уточним, что заучивать наизусть не стоит, поскольку это ориентировочные вопросы и ответы и могут быть разные вариации формулировок.

Какие hard skills должны быть у фронтенд-разработчика
Чтобы попасть куда-то хотя бы на испытательный срок или стажировку с дальнейшим трудоустройством, джуниор/стажер обязан знать:

GIT
HTML и CSS
JS
TypeScript
Figma
DevTools (инструменты браузера)
ООП, функциональное программирование, архитектура, рефакторинг, оптимизация
А вообще, для работы понадобятся:

Какой-нибудь фреймворк, на котором работает работодатель (React, Vue, Angular, Nuxt, Node)
JSON
API
Мы проверяем, насколько соискатель хорошо знаком с этими инструментами, потому что от этого напрямую зависит скорость работы, а значит и ценность каждого часа специалиста для компании. Ведь даже с теоретической базой или «умением гуглить» один специалист может верстать проект в 2-3-4 раза медленнее опытного, а самое важное в нашей работе – это сроки.

Отдел разработки компании Fred
Отдел разработки компании Fred
В разных компаниях рекрутеры могут задавать на собеседовании разные вопросы, единой методички тут нет. Но есть базовые темы, в которых специалист, претендующий на место frontend-разработчика, должен обязательно разбираться. Вот несколько таких вопросов.

Теоретические вопросы для junior специалиста:
Что такое переменные и функции, ложные значения
В чем разница между <script>,<script async> и <script defer>
В чем разница между атрибутами и свойствами?
Разница между cookie, sessionStorage и localStorage
В чем разница между атрибутами и свойствами?
Что такое плавающие элементы (floats) и как они работают
Для специалиста уровня джун+
Перечислить плюсы и минусы использования Ajax.
Рассказать, как работает прототипное наследование?
Как объекты преобразуются в примитивы?
На что стоит обратить внимание при разработке мультиязычных сайтов?
Как вы оптимизируете производительность веб-приложения? В ответе упомяните такие техники, как минимизация и сжатие файлов (HTML, CSS, JS), lazy loading изображений, использование CDN и кэширование. Обсудите важность анализа производительности с помощью инструментов (например, Lighthouse) и мониторинга загрузки страниц.
Что такое Responsive Design и какие методологии вы использовали для его реализации? Объясните, что Responsive Design — это подход к веб-дизайну, который делает страницы удобными для просмотра на различных устройствах. Упомяните методологии, такие как медиазапросы, флексбокс и гриды, а также использование подхода Mobile First.
Для миддл frontend-разработчика:
Что такое bind/call/apply
В каком порядке выведется console.log (рассказать про кучу и движке v8)
setTimeout(() => console.log('timeout'), 0); 
const promise = new Promise((resolve, reject) => {
    console.log('my promise');
    resolve();
});
promise.then(() => console.log('promise finished'));
console.log('goodbye');

Рассказать о DOM и процессе рендеринга страницы
Что такое Content Security Policy / CORS / XSS?
Преобразовать 79998887766 в +7 (999) 888 77-66
Как вы работаете с API в своих приложениях? В ответе расскажите, как вы используете `fetch`, `axios` или другие библиотеки для работы с API. Упомяните о внедрении асинхронного программирования (async/await), обработке ответов и ошибок, а также о том, как вы управляете состоянием данных (например, с помощью Redux или Context API).
Что такое состояние (state) в React, и как вы им управляете? Объясните понятие состояния и его роль в управлении данными компонентов. Расскажите про работу с локальным состоянием через `useState`, глобальным состоянием через Context API или Redux, а также о том, как вы обрабатываете побочные эффекты с использованием `useEffect`.


ЧИТАЙТЕ ТАКЖЕ
Чек-лист вопросов на собеседовании Python-разработчику
21.12.2023
Практические вопросы:
Написать код для получения текущего URL
Привести пример замыкания в Джаваскрипт
Написать простую функцию, чтобы проверить, является ли число целым
Сверстать небольшую форму/калькулятор (дизайн в Figma)
Сверстать какой-нибудь блок с параллаксом и градиентом (дизайн в Figma)
На вакансию фронтендера зачастую бывает много откликов и всех провести через собеседование с техническом директором невозможно. В последнее время настраивал автосортировку и выдавал небольшое тестовое задание, которое будет проверять хоть какие-то умения. Потому что в теории можно знать много, а вот как человек будет справляться на практике — это другой вопрос.

Мы даем маленький блок или маленький макет, который можно сделать буквально за 2 часа.

Примеры для задания «Сверстать небольшую форму/калькулятор (дизайн в Figma)»:

кредитный калькулятор
калькулятор рабочих дней
калькулятор НДС
форма заполнения заявки с валидацией полей (имя, телефон с учетом региона, почта, дата рождения)
Пример выполнения задания «Сверстать какой-нибудь блок с параллаксом и градиентом (дизайн в Figma)» могу показать в популярном видео, в нем человек в режиме онлайн делает это за час, параллельно комментируя и объясняя зрителям, что и как он делает:



Софт скиллы frontend-разработчика
Несмотря на устоявшееся мнение, что для программистов soft skills не особо важны, пожалуй, стоит уточнить: какие именно это софт скиллы и что «не особо важны» не значит, что их не должно быть вовсе.

Без мягких некоторых навыков успешно работать в коллективе не получится даже специалистам технических профессий.

Для нас важно, чтобы соискатель на должность фронтенда был способен:

Самостоятельно ставить себе задачи на протяжении длительного времени, занимаясь только согласованием видения с архитекторами.
Принимать решения, на первый взгляд противоречащие общепринятым подходам, но позволяющие эффективно решить поставленную задачу в рамках текущих ограничений.
Читать техническую документацию.
Отвечать за свои ошибки, он не ищет виноватых, а ищет способы решения возникающих проблем. Охотно берет новые обязанности в соответствии с менторингом или тимлидингом.
Инициировать коммуникации по мере возникновения проблем в текущих задачах. Способен оппонировать другим разработчикам, в том числе и вышестоящим, если уверен в своих аргументах. Отслеживает результаты коммуникаций в контексте конкретных действий. Интересуется бизнес-спецификой проектов и направлениями их развития.
На основании личного опыта предугадывать задачи, запросы команды и потребности.
Оценивать чужой код сугубо с точки зрения критериев, важных для проекта в текущем контексте. Не пытаться всем навязывать свои подходы.
Умеет гуглить и изобретать.

Junior full stack веб-разработчик: полный план развития
Кто же такой full stack веб-разработчик, и с чем его едят? Понятные ответы на непонятные вопросы, обязательные к прочтению.


3
1

12





Маст хэв!
Независимо от вашего пути и карьерных целей, есть некоторые вещи, которые должен знать каждый разработчик.

Изучите, как использовать Git (особенно в командной среде), клонировать репозитории, делать коммиты, создавать ветки и мержить код.
Отладка. Frontend или backend – везде могут быть ошибки. Ознакомьтесь с инструментами отладки для вашей IDE.
Существует много сред разработки, которые вы можете использовать, но выберите одну и досконально изучите ее (знание горячих клавиш и инструментов сделает вас лучшим разработчиком).
Методологии (Agile / SCRUM / Kanban) – при работе в команде, скорее всего, вы будете использовать какую-либо методологию разработки продукта, поэтому убедитесь, что вы знакомы с тем, как они работают.
Frontend
Junior full stack веб-разработчик: полный план развития

Чем занимается Full stack веб-разработчик? Этим:

реализация дизайна с использованием HTML / CSS;
взаимодействие с DOM с помощью JavaScript;
работа со сторонними API.
Разберем подробнее каждое из направлений.

HTML / CSS
Ожидается, что младший full stack веб-разработчик будет хорошо ориентироваться в таких темах:

использование HTML для создания веб-страницы;
стилизация элементов с использованием CSS;
способы применения CSS к HTML – встроенные стили, таблица стилей, etc.
После того, как у вас появятся базовые знания, рассмотрите более продвинутые вещи:

CSS Grid и Flexbox для разметки и более удобного позиционирования элементов.
SCSS сделает обычный CSS более управляемым с помощью переменных.
Фреймворки
Следующий этап – знакомство с CSS-фреймворками. В основном это элементы и стили "из коробки", которые вы могли уже использовать в проектах. Это сильно экономит время. Не распыляйтесь, весь мир не объять: выберите один фреймворк и хорошо его изучите. Как только овладеете одним – другие будет легче познать.

Bootstrap
Bootstrap популярен и используется во многих компаниях.

Ну и зачем изучать CSS / HTML с нуля, если можно использовать фреймворк?

Да, есть фреймворки, которые облегчают жизнь. Но часто приходится кастомизировать самописные проекты, а для этого нужно знать основы.

Отзывчивый дизайн
Важно учитывать множество мобильных устройств при создании проектов интерфейсов. К счастью, CSS-фреймворки делают создание "отзывчивости" простым.

Media Queries. Зная, как использовать CSS для создания адаптивных конструкций, нужно понять, как использовать media queries. Так вы определите, как элементы должны выглядеть на разных размерах экранов.
Избегайте использования пикселей для указания размеров. Изображение с шириной 100px, всегда будет иметь ширину 100 пикселей, независимо от размера экрана. Попытайтесь использовать rem, vh и vw для достижения отзывчивости.
JavaScript
Да, это прекрасный язык программирования JavaScript. Для успешного развития в среде front-end вам нужно знать язык JavaScript, и знать хорошо. По мере того, как фреймворки приходят и уходят, основные элементы ЯП остаются прежними.

Вот минимум знаний для Джуна:

объекты, функции, условия, циклы и операторы;
модули;
массивы (включая способы управления ими);
работа с данными с помощью Fetch API;
манипуляции с DOM и использование Events;
Async / Await (необязательная, но действительно полезная тема);
JSON;
ES6+;
тестирование (Jest, Enzyme, Chai и т. д.)
Повышения навыка программирования на JavaScript:

Создайте игру Super Mario (вы узнаете JavaScript, манипулируя DOM и используя события).
Создайте админку, показывающую статистику, которая извлекается из API. Например, панель мониторинга Twitter, GitHub и т. д. (вы научитесь работать с API и JSON).
Не беспокойтесь о внешнем виде. Сосредоточьтесь на изучении JavaScript, а не CSS/HTML. Вы всегда сможете сделать его красивым позже, если хотите.
JavaScript фреймворки
Самые популярные на данный момент: Angular.js, React.js и Vue.js.

Если вы уже изучили JavaScript основы и имеете крепкую базу, изучение фреймворков будет большим плюсом к вашему скиллу Джуна.

React
Он имеет постоянную поддержку от Facebook, массу тематических онлайн-сообществ и является самым популярным в отрасли на данный момент.

Если вы выполнили описанные выше шаги и немного познали язык JavaScript, изучение React не должно составить труда. Младший full stack веб-разработчик должен знать:

о React-компонентах и том, как они работают;
как использовать State и Props в компонентах;
JSX и как использовать его для отображения HTML элементов на веб-странице;
как и когда компоненты повторно визуализируются;
React hooks;
NPM, Webpack и Babel.
Оттачивание скилов:

Переделайте любой из ваших предыдущих проектов JavaScript под React.
Создайте калькулятор (хороший способ потренировать state management и React Hooks).
Создайте собственный Twitter, GitHub или ленту новостей. Используйте общедоступные API для получения данных и отображения их в приложении.
Не беспокойтесь об идеальном внешнем виде, а сосредоточьтесь на том, чтобы заставить его работать, а также на изучении концепций React.
Redux
Redux – это стейт менеджмент фреймворк, полезно дополняющий React. Если грубо, то это front-end БД, хранящая состояние веб-приложения.

В Redux много подводных камней, поэтому не волнуйтесь, если вы не сразу все "схватываете". Сосредоточьтесь на понимании основ и управлении состоянием с React.

Есть ряд доступных инструментов, способных помочь вам с отладкой React / Redux:

React Dev Tools
Redux Dev Tools
Браузеры
Full stack веб-разработчик должен знать все о браузерах: Chrome, Firefox и Edge являются основными. Разберитесь с такими направлениями:

отладка (например, Chrome Developer Tools);
работа с хранилищем (локальное хранилище, сессионное хранилище, куки);
особенности браузера – самая большая проблема веб-разработки.
Развертывание и хостинг
Вы должны знать, как развернуть и где захостить веб-приложение. Это благотворно отразится на вашем портфолио, знаниях, и получении работы. Используйте управляемый сервис – пусть трудную работу за вас выполнит кто-то еще:

GitHub Pages
Heruko
Netlify
Digital Ocean
AWS
Firebase
Back-end
Junior full stack веб-разработчик: полный план развития

Full stack веб-разработчик обычно делает это:

создает API, использующее какой-то интерфейс (часто возвращая JSON);
занимается написанием бизнес-логики и валидации;
интегрирует сторонние API;
реализует сохранение и чтение данных из БД.
Языки программирования
Основные языки программирования:

Java
C#
Python
js
Go
PHP
Какой бы язык вы ни выбрали, убедитесь, что вы знаете следующее:

процесс создания API
основы языка
как подключиться к БД
как сделать запрос
управление пакетами
написание тестов
REST API и JSON
Создание хорошего REST API является одной из основных задач бекенд-разработчика. Вам придется знать:

как создать хороший ответ;
как обрабатывать запросы;
запрос аутентификации;
документирование API.
REST API – мост между бекендом и фронтендом, поэтому убедитесь, что вы понимаете, как это работает.

JSON нужен для передачи данных через REST API. Данные в нем представлены в виде объектов и массивов.

БД, DevOps и full stack веб-разработчик
Junior full stack веб-разработчик: полный план развития

Это сложная отрасль, необходимая, если вы захотите углубиться в DevOps. Будет большим плюсом знать:

управление БД;
платформы для хостинга (AWS, Azure, Google и т. д);
CI / CD (Jenkins, GitLab и т. д.);
журналирование и мониторинг.
Продвинутые темы
Ниже приведены дополнительные темы, рекомендуемые к рассмотрению только после того, как осилите все базовые.

Аутентификация на JWT / OAuth
Это основной метод проверки подлинности, разрешающий пользователям войти в систему.

Шаблоны проектирования
Изучение шаблонов проектирования облегчит решение распространенных проблем и поможет стать лучшим разработчиком.

Прогрессивные веб-приложения и мобильная разработка
Прогрессивные веб-приложения – это приложения, работающие как нативные на телефоне пользователя. Изучите этот вопрос, если появится дополнительное время.

React Native – позволяет писать код на React, компилируемый в Android / IOS.

Flutter – инструмент похож на React Native, только использует Dart.

Командная строка
Вам нужно знать:

как подключиться к серверу по SSH;
как перемещаться по файловой системе (cd, ls и т. д.);
редактирование файлов с помощью Vim или аналогичного.
Оригинал

Другие материалы по теме:
ТОП-6 рецептов на чистом HTML и CSS без использования JS
Дорожная карта web-разработчика Java в 2019 году

Чек-лист вопросов на собеседовании Frontend-разработчику (Junior, Middle)
Дата обновления: 19.02.2026  Время чтения: 5 мин.

Лиана Санамян

Редактор и автор портала Otzyvmarketing.ru. Опыт работы в digital-маркетинге более 5 лет, с текстами работаю более 8 лет. Магистр филологии и ...


Что нужно знать frontend-разработчику для устройства на работу? Рассказываем в материале.

Составили совместно с руководителем отдела разработки компании FRED Шамилем Азиевым список вопросов для собеседования на фронтенд-разработчика. Информация полезна обеим сторонам: и рекрутеру, чтобы знать, что спросить на собеседовании, и соискателю, чтобы быть готовым к вопросам. Для удобства разделили их – для джуниор-специалистов и миддлов.

PromoPult — единый автопилот для запуска и аналитики онлайн-рекламы

Все инструменты в одном месте: SEO, контекст, таргет, реклама и аналитика Wildberries.
Бесплатный тест SEO на 2 недели — без предоплаты, сайт выйдет в топ Яндекса и Google.
Все деньги идут на рекламу, пользоваться инструментами платформы можно бесплатно.
Простая настройка рекламы и наглядная аналитика — даже для новичков.
Бесплатная маркировка рекламы и отчеты в ОРД.
Полный комплект закрывающих документов.
Бесплатная настройка рекламы при пополнении баланса от 3000 ₽.
Регистрируйтесь и оцените PromoPult в деле!

Реклама. ООО "Клик.ру". ИНН 7743771327. erid:2VtzqxFCx5k

Шамиль Азиев
Шамиль Азиев
Уточним, что заучивать наизусть не стоит, поскольку это ориентировочные вопросы и ответы и могут быть разные вариации формулировок.

Какие hard skills должны быть у фронтенд-разработчика
Чтобы попасть куда-то хотя бы на испытательный срок или стажировку с дальнейшим трудоустройством, джуниор/стажер обязан знать:

GIT
HTML и CSS
JS
TypeScript
Figma
DevTools (инструменты браузера)
ООП, функциональное программирование, архитектура, рефакторинг, оптимизация
А вообще, для работы понадобятся:

Какой-нибудь фреймворк, на котором работает работодатель (React, Vue, Angular, Nuxt, Node)
JSON
API
Мы проверяем, насколько соискатель хорошо знаком с этими инструментами, потому что от этого напрямую зависит скорость работы, а значит и ценность каждого часа специалиста для компании. Ведь даже с теоретической базой или «умением гуглить» один специалист может верстать проект в 2-3-4 раза медленнее опытного, а самое важное в нашей работе – это сроки.

Отдел разработки компании Fred
Отдел разработки компании Fred
В разных компаниях рекрутеры могут задавать на собеседовании разные вопросы, единой методички тут нет. Но есть базовые темы, в которых специалист, претендующий на место frontend-разработчика, должен обязательно разбираться. Вот несколько таких вопросов.

Теоретические вопросы для junior специалиста:
Что такое переменные и функции, ложные значения
В чем разница между <script>,<script async> и <script defer>
В чем разница между атрибутами и свойствами?
Разница между cookie, sessionStorage и localStorage
В чем разница между атрибутами и свойствами?
Что такое плавающие элементы (floats) и как они работают
Для специалиста уровня джун+
Перечислить плюсы и минусы использования Ajax.
Рассказать, как работает прототипное наследование?
Как объекты преобразуются в примитивы?
На что стоит обратить внимание при разработке мультиязычных сайтов?
Как вы оптимизируете производительность веб-приложения? В ответе упомяните такие техники, как минимизация и сжатие файлов (HTML, CSS, JS), lazy loading изображений, использование CDN и кэширование. Обсудите важность анализа производительности с помощью инструментов (например, Lighthouse) и мониторинга загрузки страниц.
Что такое Responsive Design и какие методологии вы использовали для его реализации? Объясните, что Responsive Design — это подход к веб-дизайну, который делает страницы удобными для просмотра на различных устройствах. Упомяните методологии, такие как медиазапросы, флексбокс и гриды, а также использование подхода Mobile First.
Для миддл frontend-разработчика:
Что такое bind/call/apply
В каком порядке выведется console.log (рассказать про кучу и движке v8)
setTimeout(() => console.log('timeout'), 0); 
const promise = new Promise((resolve, reject) => {
    console.log('my promise');
    resolve();
});
promise.then(() => console.log('promise finished'));
console.log('goodbye');

Рассказать о DOM и процессе рендеринга страницы
Что такое Content Security Policy / CORS / XSS?
Преобразовать 79998887766 в +7 (999) 888 77-66
Как вы работаете с API в своих приложениях? В ответе расскажите, как вы используете `fetch`, `axios` или другие библиотеки для работы с API. Упомяните о внедрении асинхронного программирования (async/await), обработке ответов и ошибок, а также о том, как вы управляете состоянием данных (например, с помощью Redux или Context API).
Что такое состояние (state) в React, и как вы им управляете? Объясните понятие состояния и его роль в управлении данными компонентов. Расскажите про работу с локальным состоянием через `useState`, глобальным состоянием через Context API или Redux, а также о том, как вы обрабатываете побочные эффекты с использованием `useEffect`.


ЧИТАЙТЕ ТАКЖЕ
Чек-лист вопросов на собеседовании Python-разработчику
21.12.2023
Практические вопросы:
Написать код для получения текущего URL
Привести пример замыкания в Джаваскрипт
Написать простую функцию, чтобы проверить, является ли число целым
Сверстать небольшую форму/калькулятор (дизайн в Figma)
Сверстать какой-нибудь блок с параллаксом и градиентом (дизайн в Figma)
На вакансию фронтендера зачастую бывает много откликов и всех провести через собеседование с техническом директором невозможно. В последнее время настраивал автосортировку и выдавал небольшое тестовое задание, которое будет проверять хоть какие-то умения. Потому что в теории можно знать много, а вот как человек будет справляться на практике — это другой вопрос.

Мы даем маленький блок или маленький макет, который можно сделать буквально за 2 часа.

Примеры для задания «Сверстать небольшую форму/калькулятор (дизайн в Figma)»:

кредитный калькулятор
калькулятор рабочих дней
калькулятор НДС
форма заполнения заявки с валидацией полей (имя, телефон с учетом региона, почта, дата рождения)
Пример выполнения задания «Сверстать какой-нибудь блок с параллаксом и градиентом (дизайн в Figma)» могу показать в популярном видео, в нем человек в режиме онлайн делает это за час, параллельно комментируя и объясняя зрителям, что и как он делает:



Софт скиллы frontend-разработчика
Несмотря на устоявшееся мнение, что для программистов soft skills не особо важны, пожалуй, стоит уточнить: какие именно это софт скиллы и что «не особо важны» не значит, что их не должно быть вовсе.

Без мягких некоторых навыков успешно работать в коллективе не получится даже специалистам технических профессий.

Для нас важно, чтобы соискатель на должность фронтенда был способен:

Самостоятельно ставить себе задачи на протяжении длительного времени, занимаясь только согласованием видения с архитекторами.
Принимать решения, на первый взгляд противоречащие общепринятым подходам, но позволяющие эффективно решить поставленную задачу в рамках текущих ограничений.
Читать техническую документацию.
Отвечать за свои ошибки, он не ищет виноватых, а ищет способы решения возникающих проблем. Охотно берет новые обязанности в соответствии с менторингом или тимлидингом.
Инициировать коммуникации по мере возникновения проблем в текущих задачах. Способен оппонировать другим разработчикам, в том числе и вышестоящим, если уверен в своих аргументах. Отслеживает результаты коммуникаций в контексте конкретных действий. Интересуется бизнес-спецификой проектов и направлениями их развития.
На основании личного опыта предугадывать задачи, запросы команды и потребности.
Оценивать чужой код сугубо с точки зрения критериев, важных для проекта в текущем контексте. Не пытаться всем навязывать свои подходы.
Умеет гуглить и изобретать.

Top 40 Front End Developer Interview Questions and Answers [2026]
You're about to embark on the next step of your career as a front-end developer. But how do you get started?

First, note that a front-end developer can mean many things. When we normally say "front-end," we mean web applications. But it can also mean iOS, Android, Microsoft, osX, or even Linux applications. Front-end developers focus primarily on design and sometimes, IDEs. Know what type of front-end role you're going for before you start studying — because there will be technical questions involved.

But before we dive into our front end developer interview questions, let's explore what it means to be a front-end developer and what people are likely to ask.

Front-End Developer Interviews: What Can You Expect?
When interviewing for a front-end developer role, expect questions about your skills and experience with HTML, CSS, and JavaScript. An interviewer may also ask questions about your experience with specific frameworks or libraries, such as React or Angular.

Talk about your process for building web applications, including how you structure your code and handle cross-browser compatibility issues. 

In general, the first interview will qualify you with basic questions. The second interview will be more of a "meet and greet" to determine whether you fit the team and company culture. 

And the third (and hopefully final) interview may either be a coding test (more common for full-stack or back-end developers) or a panel interview (with people who will work with you).



Now, let's get started with those front-end interview questions.

Basic Front End Interview Questions
You've just started your career. We’ll start with entry-level front end developer interview questions for beginner roles. 

These front end engineering interview questions aim to confirm you know the basics of development and design.

1. What is a CDN?
A content delivery network (CDN) is a system for delivering content to users based on geographic location. CDNs can deliver websites, software applications, and other types of digital content.

2. What is AJAX?
AJAX is a web development technique for creating asynchronous web applications. AJAX allows you to create dynamic, responsive web applications that can be updated without reloading the page.

3. What are the differences between HTML and XHTML?
HTML is the standard markup language for creating web pages. XHTML is a stricter and more well-defined version of HTML. It's frequently used for formatting more complex documents within a stated taxonomy.

HTML code:

<!DOCTYPE html>
<html>
<body>

<h1 style="background-color: red;">Hello World!</h1>
<p>This is a paragraph.</p>

</body>
</html>

XHTML code:

<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/css" 
    href="http://www.w3.org/MarkUp/style/xhtml2.css"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 2.0//EN"
    "http://www.w3.org/MarkUp/DTD/xhtml2.dtd">
<html xmlns="http://www.w3.org/2002/06/xhtml2/" xml:lang="en"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://www.w3.org/2002/06/xhtml2/
        http://www.w3.org/MarkUp/SCHEMA/xhtml2.xsd"
>
<head><title>Hello World!</title></head>
<body><p>This is a paragraph.</p></body>
</html>
4. What is responsive design?
Responsive design is a web development technique that creates websites compatible with multiple devices with different screen sizes. Responsive websites are designed to look good on both desktop and mobile devices.

5. What are the different types of CSS selectors?
CSS selectors are used to select elements in an HTML document. There are several types of CSS selectors, including class selectors, ID selectors, and attribute selectors.

6. What is a pseudo-class?
A pseudo-class is a selector that styles an element based on its state. For example, the :hover pseudo-class styles an element when the user hovers over it with their mouse but does nothing when they don't.

7. What is a CSS reset?
A CSS reset is a set of rules applied to all browsers to normalize the default styling of HTML elements. It’s particularly useful when stripping the formatting of HTML elements.

8. What is a CSS grid system?
A CSS grid system is a set of rules that can be used to create a responsive layout. There are many different grid systems available, but the most popular one is Bootstrap. Bootstrap makes it easier to create layouts that react predictably without having to reinvent the wheel.

9. What is a CSS preprocessor?
A CSS preprocessor is a tool that allows you to write CSS in a more concise and structured manner. The most popular CSS preprocessors are Less and Sass. They aren't very useful for small projects but become exponentially more powerful as a project grows.

10. What are the benefits of using a CSS preprocessor?
There are several benefits of using a CSS preprocessor, such as writing code in a more structured and concise manner, reducing the amount of code that needs to be written, and making it easier to maintain and update code. More importantly, it makes it easier to manage a project among large numbers of devs.

11. What is Bootstrap?
Bootstrap is a popular CSS framework providing a set of rules for creating responsive layouts.

12. What are the benefits of using bootstrap?
Some benefits of using bootstrap include reducing required written code, having a consistent framework across multiple projects, and easier creation of responsive layouts.

13. What is a task runner?
Task runners are tools that help automate common tasks in the development process, such as minification, compilation, linting, etc. Some of the most popular task runners are Gulp and Grunt.

14. What are the benefits of using a task runner?
The benefits of using a task runner include reducing the amount of time spent on repetitive tasks, automating tedious and error-prone tasks, and making it easier to manage the development process.

And also expect these front end developer interview questions, which will have unique answers based on your own personal experiences...

15. What made you become a front-end developer?
16. What is your favorite thing about being a front-end developer?
Intermediate Front-End Engineer Interview Questions
You've probably been a front-end developer for at least a few years, which is forever in development time. It's time to prove your knowledge. 

Interestingly, these questions are usually less technical. Instead, interviewers want to know broader information about how you solve problems. These frontend developer interview questions reflect a different type of frontend developer interview, focused more on experience than skills.

17. What type of front-end development do you specialize in?
A lot of front-end developers are jacks-of-all-trades. But your interviewer wants to know where most of your experience lies. Do you have more experience with Angular than React? Do you prefer vanilla JavaScript over using a framework?

18. What is your favorite CSS framework?
Do you like the grid system of Bootstrap? The simplicity of Foundation? Most interviewers will be somewhat familiar with the most popular systems, but if you can surprise them (and justify your answer), you may gain points. 



19. How would you optimize a website's performance?
This is a broad question with many potential answers. 

First, you should make sure that your code is minified and compressed. This reduces the size of your files, which makes them faster to download. 

Second, you should use caching wherever possible. This stores frequently used files locally, so they don't need to be downloaded every time a user visits your site. But don’t overdo it, or your site won’t be as dynamic as you want — it won’t update as reliably.

Finally, you should use a content delivery network (CDN). This distributes your files across multiple servers, so users can download them from their respective locations. 

20. What is your favorite front-end development tool?
A front-end development tool is any software that helps develop a website or web application. Some of the most popular front-end development tools are code editors and IDEs, task runners, and CSS preprocessors. Play it safe by mentioning something like Sass or Git, or get more in the weeds with a specialized tool. You can even suggest that your favorite tool is a color picker or a UI tester.

21. How would you go about debugging a website?
As with speeding up a website, debugging a website is broad. But what they're really asking is for the general steps you might take. Some of the most common methods include using the browser’s developer tools, using an automated quality assurance suite, debugging the code line-by-line, or using the "rubber duck" method of debugging.

22. What are some common issues that you have faced with cross-browser compatibility?
Some of the most common issues with cross-browser compatibility are different browsers rendering CSS differently, different browsers supporting different HTML and CSS features, and different browsers having different levels of support for standards. This is particularly difficult as many browsers differ depending on the platform, and the platform differs so widely; someone can open Chrome OS on a smart fridge today.

23. What are some of the common front-end development challenges that you have faced?
Some of the most common front-end development challenges include cross-browser compatibility issues, dealing with legacy code, and optimizing website performance. Another issue developers frequently run into (but unfortunately less frequently address) is the ability to make their code ADA compliant.

Also be prepared for these personal front end developer interview questions...

24. What blogs do you follow when it comes to front-end development?
25. What websites are your favorite, in terms of design and development?
Advanced Front End Developer Questions
Once you have five or six years under your belt, interviewers will rarely ask you complex questions about technology, design, development, or even user experience. Instead, front end developer interview questions and answers for experienced applicants tend to be more focused on your career and your successes. Prepare for these challenging front end web developer interview questions.

26. Discuss the biggest achievement of your career.
Be ready to discuss a time when you made a significant impact on a project. This is your opportunity to really sell yourself, so make sure you have a great story to tell. If you can, try to connect your achievement to the company's values or mission statement. Don't be afraid to highlight how a team member or manager helped you. This shows you're a team player.

27. Discuss the biggest challenge of your career.
This is not the time to discuss a personal challenge, like overcoming your fear of public speaking. Instead, focus on a professional challenge that you faced and overcame, such as developing for a defunct system, or encountering a particular UI/UX challenge. Talk about what the problem was, how you tackled it, and what the result was. As with the previous question, try to connect your story to the company's values or mission

28. What was your last project? How did it go?
This is a great opportunity to talk about something you're passionate about. If your last project was particularly challenging or successful, mention it. Be specific about the technologies you used and any unique ways you used them.

29. How do you effectively manage your time?
This is an important question for any developer, as work can be varied and unpredictable. Talk about the tools you use to manage your time (such as a Pomodoro timer) and how you use them. You might also discuss how you prioritize your tasks and deal with unexpected interruptions.

30. What do you do when you get stuck?
No one likes being stuck, but it's a fact of life for any programmer. Talk about methods you use to get unstuck, such as asking for help, doing research, or taking a break. Also, mention how you prevent yourself from getting stuck in the first place, such as research in advance and making sure you don't stretch the project's scope.

31. What do you do when you get something wrong?
Everyone makes mistakes. The important thing is how you react when you make a mistake. Talk about the steps you take to fix mistakes, such as undoing your changes or writing tests. Also, mention how you prevent yourself from making the same mistake twice, such as keeping better documentation.

Technical Front-End Developer Questions
Apart from regular entry-level front-end developer questions, you're likely to run into some technical questions about HTML, CSS, and JavaScript.

HTML Front-End Developer Questions
Realistically, every front-end developer should know HTML, even if you're developing for iOS or Android. 

32. What are the differences between HTML5 and HTML4?
HTML5, the latest version of HTML, includes several new elements and attributes. It also supports audio and video playback and introduces support for local storage.

33. How would you create a custom error page?
A custom error page is a page that is displayed when an error occurs. To create a custom error page, you would first need to create a file called "error.php" or "error.html." Then, you would need to edit the .htaccess file to point to the custom error page.

34. How do you use media queries to optimize for different screen sizes?
Media queries are a CSS3 feature that allows you to apply different styles based on the screen’s width. To use media queries, you would first need to include a viewport meta tag in your HTML. Then, you would need to write your CSS using media queries -- but integrating it into the HTML is important, too.

JavaScript Front-End Developer Questions
If you need to master any programming language for impeccable web or mobile development: it’s JavaScript. 

35. What is the difference between == and ===?
== checks for value equality, while === checks for both value and type equality.

36. What is the difference between an anonymous function and a named function?
A named function can be referenced in the future from anywhere in the code, whereas an anonymous function cannot — although it will run when it occurs in-line.

37. What is an event loop?


An event loop is the foundation of real-time JavaScript response. It runs at intervals to test for an event. You will need to initiate event loops to scan for user behaviors like clicks.

CSS Front-End Developer Questions
CSS and HTML are so frequently used together that they are generally learned together and very well integrated. But you should still know where CSS ends and HTML begins. Learn more about CSS to kickstart your development career.

38. What are the differences between inline, embedded, and external stylesheets?
Inline styles are written as a part of the code (<div style=”background-color: blue”>), embedded styles are style sheets embedded in the header of the page, and external style sheets are linked within the header of the page.

39. How do you create a responsive layout?
You can create a responsive layout by using a framework like Bootstrap. Alternatively, you will need to manually detect the screen’s size and make changes. Responsive layout best practices include creating a “fail-proof” system that collapses elements if they are too small to be viewed.

40. How do you use animation and transitions?
Most animations and transitions are brought into CSS through JavaScript; another way in which CSS, JavaScript, and HTML are so entwined. You might name an element in CSS and set its parameters with CSS only to process an animation with JavaScript. There are some built-in animations and transitions in CSS, but they tend to be fairly rudimentary.

Tips and Tricks for Front End Developer Interview Questions
A front-end developer interview can be stress-free, to a certain extent. The career is growing by leaps and bounds; don't try to prove yourself too much. Walk in with a clean portfolio and prepare with test questions and answers.

Do your research. Before the interview, make sure to do your research on the company and the position you are applying for. This will help you prepare for questions and show the interviewer that you’re motivated and have a genuine interest in the role.
Practice, practice, practice. Whether it’s doing a mock interview with a friend or family member, or just going over common questions in your head, practicing beforehand will help you feel more confident and less nervous during the actual interview.
Build your portfolio. If you're fairly new to the industry or making a switch, build a portfolio with the top sites that you've worked on.
Know where you are in the pipeline. Initial interviews are just "touch-base" interviews. You should slowly get to know your interview team and the position, and then dig more into your technical skills.
Be personable. At the end of the day, the interviewer wants to get to know you as a person. The best way to be genuine is to briefly talk about your interests and hobbies outside of work, as well as any personal projects you may be working on.
Ask questions. Asking questions shows you’re engaged in the conversation and gives you an opportunity to learn more about the company and the role.
Don't be afraid to say you don't know. If you don't know something, explain how you would find out.
After the interview, send a thank-you note to the interviewer. Today, it can be as simple as shooting a message on Slack.

How to Practice for Code Interviews
There are generally three types of questions in coding interviews: algorithm, data structure, and system design. Familiarize yourself with each type and practice solving them. 

Even experienced engineers struggle with coding interviews. You can practice for loops and sorting all you want, but when it comes down to it, you're being asked to solve a puzzle on command. All you can do is practice the fundamentals.

100 Front End Interview Questions Challenge

Conclusion: Want to Become a Front-End Developer?
Congrats! You made it to the end of our giant list of front end developer interview questions. 

If you’re interested in becoming a front-end developer, there are a few things you should keep in mind. First, it’s important to have a strong understanding of HTML, CSS, and JavaScript. You should also be familiar with various front-end frameworks and libraries, as well as tools like Gulp and Grunt. And lastly, don’t forget the importance of soft skills like communication and problem-solving to be successful in this role.

Those are all the front end developer questions we have. What are your next steps? Consider expanding your knowledge with a course!

Take One of the Best Web Developer Courses!

Frequently Asked Questions
1. What are Front-end Interviews Like?
Front-end interviews tend to focus on technical skills, such as your knowledge of HTML, CSS, and JavaScript. You may also be asked questions about various front-end frameworks and libraries, determined by the systems you are interviewing for. There may be a great chasm between a front-end developer for iOS and a front-end developer for web applications.

2. Is a Front-end Interview Hard?
If you know your stuff, it shouldn't be. While your average front end development interview questions will be straightforward, code questions can make people nervous. You will frequently undergo coding interviews in JavaScript, which might involve iterating through loops or other basic tasks that a front-end developer may not frequently be do otherwise.

3. What Skills Does a Front-end Developer Need?
You’ll need a solid understanding of HTML, JavaScript, and CSS. Additionally, basics of User Interface design User Experience design knowledge helps immensely. A front-end developer is frequently called upon for design mechanics as much as technical components.

Top 80 Frontend Interview Questions and Answers
Lesson 9 of 33By Kusum Saini

Last updated on Jun 22, 2026739852
Top 80 Frontend Interview Questions and Answers
PreviousNext
Table of Contents
Front End Developer Interview Questions for FreshersFront End Developer Interview Questions for Experienced Git Interview QuestionsHTML Interview QuestionsCSS Interview QuestionsView More
A comprehensive front-end developer interview will assess your core knowledge, problem-solving ability, and hands-on experience. Be prepared for questions on HTML, CSS, JavaScript, and popular frameworks, as well as scenarios related to performance optimization, debugging, and collaboration skills.

Front End Developer Interview Questions for Freshers
1. What are Meta Tags in HTML?
Meta tags are those tags that go inside the Head tag of the HTML page
Meta tags are not for the interface; they are important for the browser
Meta tags are always in name or value pairs
Meta tags consist of character encoding, title, and even description
2. State some basic design elements.
Some of the basic elements of design are 

Line: a line mark made with any pen or brush, or even any edge created when two shapes meet
Size: it is the area occupied by one shape with respect to another
Texture: the surface of the shape - Smooth, soft, hard, glossy, and such
Color: The light reflected from the objects. The three characteristics of color are hue, value, and intensity
3. What is Load Balancing?
Load balancing is the distribution of all the incoming network traffic across the backend servers.

4. What does npm stand for?
npm stands for Node Package Manager.

5. What is scope in JavaScript? 
In JavaScript, every function has its scope. It is basically a collection of rules for how variables are accessed and variables themselves.

Unleash Your Career as a Full Stack Developer!AI-Powered Full Stack Developer ProgramEXPLORE COURSEUnleash Your Career as a Full Stack Developer!
6. How are JavaScript and jQuery different?
jQuery is a library built with JavaScript, and JavaScript is the language itself.

7. What is Content Security Policy? 
Content Security Policy, also known as CSP, is a header in HTML that lets the site operators gain full control over the resources that are loading on the site.

8. What is Cross-Site Scripting (XSS)?
XSS, Cross-Site Scripting, is an attack that takes place when an attacker uses a web application to send malicious code, in the form of browser-side script, to another user. 

9. What is User-Centered Design?
User-centered designs are those designs that the designer solely focuses on, which are according to the needs of users and them in every phase of designing. 

10. What is callback hell?
JavaScript, which uses callbacks and is hard to get the right intuition. The callbacks are stacked in the form of a pyramid structure.

11. What is Polymorphism?
The word Polymorphism means having many different forms. In an object-oriented context, polymorphism refers to a single interface with multiple functions. 

12. What is Strict Mode?
A new feature of ECMAScript 5 is Strict mode, which lets you place a function, or a program, in a “strict” context of operation.

13. What is meant by the KISS principle? 
KISS, a backronym of “Keep it simple, stupid” was the principal design in the US Navy in 1960. The KISS principle states that the simpler the system, the better it works. 

14. What does SOLID stand for?
S.O.L.I.D is an acronym of object-oriented design principles 

S- single responsibility principle 

O- open-closed principle 

L- liskov substitution principle 

I- interface segregation principle 

D- dependency

15. What is ClickJacking?
Clickjacking is an attack that lets the developer fool the users into thinking that they are clicking one thing, but they are clicking something else.

Learn Core to Advanced Java ConceptsJava Certification Training CourseExplore ProgramLearn Core to Advanced Java Concepts
16. What is Coercion in JavaScript? 
The conversion of two different built-in Types of JavaScript is called Coercion. It comes in two forms, Explicit and implicit. 

17. What is IIFE?
IIFE stands for Immediately-Invoked Function Expression. This executes immediately after you create it.

18. What is a grid system in CSS?
A structure that lets the content be placed both horizontally and vertically in a consistent and manageable way. There are two key components of the Grid system: Rows and Columns. 

19. What is Mixin?
A Mixin is a code block that lets us group CSS declarations that we can reuse in our site. 

20. Mention ways to decrease page load time.
The best ways to decrease the page load time are 

Image optimization
Browser cache
Compress and optimize content 
Front-End Developers earn an average salary of $126,000, but the role is not just about making pages look good. Simplilearn’s Front-End Developer roadmap shows how responsive design, API integration, accessibility, and performance optimization shape the career.
Front End Developer Interview Questions for Experienced 
21. What is Stringify?
To transform a JavaScript object to a string, Stringify is used. 

22. State the elements of the CSS Box Model.
CSS Box Model consist of 4 elements 

Content
Padding
Border
Margin 
23. What is the benefit of Srcset?
When we want to generate many new solutions of exact images on several devices, Srcset is used. This helps improve the UI. 

24. What is MySQL?
MySQL is a relational Database Management System that uses SQL as its standard language to manage its database. MySQL, just like other databases, uses a Table-like structure.

25. What is MongoDB?
MongoDB is a NoSQL database that shows the data elements using a JSON-like Structure. To make changes in MongoDB, the programmer has to use MongoDB Query Language.

Accelerate your career as a skilled Full Stack Developer by enrolling in a unique AI-Powered Full Stack Developer Course. Get complete development and testing knowledge on the latest technologies by opting for this course.
Git Interview Questions
26. What is a ‘Version Control System’? 
Version_Control_Git.

A version control system (VCS) is a program that records changes to a file or set of data, allowing for the restoration of previous versions if necessary. This guarantees that everyone on the team is working on the most up-to-date version of the file. 

27. Differentiate Between Centralized and Distributed Version Control Systems.
VersionControlSystemTypes

In a Centralized Version Control System:

It stores all file versions on a central server.
No developer has a complete copy of the local system's files.
If the project's central server fails, you will lose all the project's data.
In a Distributed Version Control System:

Every developer has a copy of all the code versions on their computer.
Improves the ability to work offline and eliminates the need for a single backup location.
Learn Java With Expert-Led TrainingJava Certification Training CourseExplore ProgramLearn Java With Expert-Led Training
28. Explain Git Push and Git Pull
Git_Push

The 'git push' command is used to push the contents of a local repository to a remote repository. It runs a push after it has changed a local repository to share the changes with remote team members.

Git_Pull.

The 'git pull' command is used to retrieve changes from a remote repository and merge them into the local repository. It consists of two commands: git fetch followed by git merge.

29. Name a few Git Commands and Functions
Git Config - Configure the username and email address
Git init - Initialize a local Git repository
Git Add - Add one or more files to the staging area
Git Diff - View the changes made to the file
Git Commit - Commit changes to the head but not to the remote repository
Git reset - Undo local changes to the state of a Git repo
Git Status - Displays the state of the working directory and staging area
Git Merge - Merge a branch into an active branch
Git Push - Upload content from the local repository to a remote repository
Git Pull - Fetch and download content from a remote repository
30. Explain the Difference Between Git Pull and Git Fetch
Git Fetch 
It downloads only new data from a remote repository using Git fetch
It does not include any of this new information in your working files
To update the remote-tracking branches, run Git fetch at any time
Command - git fetch origin
Git Pull
Git pulls new data and integrates it with the current working files, updating the current HEAD branch with the latest modifications from the remote server
It attempts to combine remote changes with those made locally
Command - git pull origin master
Basics to Advanced - Learn It All!Java Certification Training CourseExplore ProgramBasics to Advanced - Learn It All!
31. What is a Merge Conflict in Git, and how can it be resolved?
When you have merging branches with opposing commits, a merge conflict occurs, and Git needs your help to select which changes to include in the final merge.

Resolve using GitHub conflict editor.
When competing for line changes, i.e., when users make different modifications to the same line of the same file on other branches in your Git repository, this is done to avoid merging conflicts.

Step 1: Under your repository name, click Pull requests. 

GitConflictEditor_1

Step 2: Click the pull request with the merge conflict you'd like to resolve in the "Pull Requests" list. Click Resolve conflicts near the bottom of your pull request.

GitConflictEditor_2.

Step 3: Decide whether you want to maintain just your branch's changes, only the other branch's changes, or make a completely new modification that includes both branches' changes. 

Step 4: Remove the conflict markers and apply the desired changes in the final merge. 

GitConflictEditor_3.

Step 5: If your file has more than one merge conflict, scroll down to the next set of conflict markers and repeat steps 4 and 5 to resolve the issue. Mark the file as resolved once you've resolved all the conflicts.

GitConflictEditor_4.

Step 6: If you have more than one file with a conflict, navigate to the left side of the screen and select the following file you wish to edit under "Conflicting Files". Then repeat the above steps until you've resolved all the merge conflicts in your pull request.

GitConflictEditor_5

Step 7: Click Commit merge once you've resolved all of your merge conflicts. It merges the entire base branch into your head branch as a result of this. Click Merge pull request to combine your pull requests.

GitConflictEditor_6.

Resolve the issue by creating a local clone of the repository and then commit the update to your GitHub branch.

It resolves all other forms of merge conflicts using this method. To push the update, you can use the command line or a program like GitHub Desktop.

Step 1: Open Git Bash. Go to the local Git repository where the merge conflict exists.

GitConflictBash_1

Step 2: Make a list of the files that have been affected by the merge dispute. In this case, a merge conflict exists in the file styleguide.md.

GitConflictBash_2.

Step 3: Open the file with merge conflicts in a text editor, such as Sublime Text or Atom. Look for the conflict marker "<<<<<<" if you want to see where the merging conflict started in your file.

After the line "<<<<<<HEAD", you'll see the changes from the base branch.

Step 4: Next, you’ll see =======, which divides your changes from the changes in the other branch, followed by >>>>>>> BRANCH-NAME

Step 5: Decide whether you want to simply maintain your branch's changes, only the other branch's changes, or make a completely new modification that includes both branches' changes.

Step 6: Delete the conflict markers, <<<<<, =====, >>>>> and make changes you want in the final merge. 

Step 7: Add or stage your changes. Commit your changes with a comment. 

You may now combine the branches using the command line, or you can upload your changes to your GitHub remote repository and merge them in a pull request.

32. What is Git Stash?
GitStash

33. Differentiate Between Git Merge and Git Rebase
Assume you're working on a new feature in a dedicated branch, and another team member pushes new commits to the master branch. 

Merge 
Git_Merge.

Merge is used to incorporate new commits into your feature branch. Every time you need to include modifications, this requires an extra merging commit. It taints the history of your feature branch.

Rebase 
Git_Rebase

You can rebase the feature branch into master instead of merging it. This incorporates all the new commits in the master branch. It also rewrites the project history by creating brand new commits for each commit in the original branch.

Advance Your Full Stack Career!AI-Powered Full Stack Developer ProgramEXPLORE COURSEAdvance Your Full Stack Career!
HTML Interview Questions
HTML is an integral part of frontend development. The following set of frontend interview questions is based on HTML.

34. What is an Attribute in HTML?
<h1>Hello</h1>
<p>Welcome</p>
<br>
<h2>Click on the button to subscribe</h2>
<button>Subscribe</button>
Attributes are the properties that can be added to an HTML tag, changing the way the tag behaves or is displayed.
It adds attributes right after the name of the HTML tag, inside the brackets. 
35. What is a Marquee in HTML?
The marquee is used to scroll the text on the webpage.
It automatically scrolls the image or text up, down, left, or right.
You must use <marquee> tags to apply a marquee.
36. What is Semantic HTML? How does it work?
Semantic HTML is a type of coding.
It is the use of HTML markup to emphasize the content's semantics or meaning.
Consider the following scenario: The <b></b> tag is not used for bold statements in semantic HTML, while the <i></i> element is used for italic.
Instead, you use the <em></em> and <strong></strong> tags.
37. How do you display a Table on an HTML Webpage?
HTML_Table

To display data in a tabular format, use the HTML table> tag.
It's also used to control the page's layout, including the header section, navigation bar, body content, and footer section.
38. What is SVG in HTML?
<svg width="100" height="100">
<circle cx="50" cy="50" r="40" stroke="yellow" stroke-width="4" fill="red" />
</svg>
HTML SVG is a markup language that describes vector and raster graphics. XML text files define SVG pictures and associated behaviors.
It's typically used for X, Y coordinate system diagrams like pie charts and 2-dimensional graphs.
39. In HTML, how do you separate a section of text?
In HTML, you use the following tags to divide a chunk of text:

<br> tag: It's a character that's used to break up a line of text. It transfers the text flow to a new line by breaking the existing line.

<p> tag: This tag is used to create a text paragraph.

<blockquote>: This tag is used to indicate big quoted passages.

40. How do you Create Nested Web Pages in HTML?
<!DOCTYPE html>
<html>
<body>
<h2>HTML Iframes example</h2>
<p>specify the size of the iframe using the height and width attributes:</p>
<iframe src="https://simplilearn.com/" height="600" width="800"></iframe>
</body>
</html>
You refer a webpage within a webpage to as a nested web page.
Using HTML's built-in iframe tag, you can create nested web pages.
Launch your career as a Full Stack Developer with Simplilearn's comprehensive AI-Powered Full Stack Developer Course. Learn front-end and back-end skills, along with real-world project experience, and gain the certification that top employers trust. Start your journey today!
41. Differentiate Between Ordered List and Unordered List
<!DOCTYPE html>
<html>
<body>
<h2>HTML List Example</h2>
<ul>
<li>Coffee</li>
<li>Tea</li>
<li>Milk</li>
</ul>
<ol>
<li>Coffee</li>
<li>Tea</li>
<li>Milk</li>
</ol>
</body>
</html>
HTML_List

An unordered list uses <ul> </ul> tags, and each element of the list is written between <li> </li> tags.
An ordered list uses <ol> </ol> tag,s and each element of the list is written between <li> </li> tags.
Now that we are familiar with HTML questions, let’s look at the next set of frontend interview questions - CSS

CSS Interview Questions
42. What is the best way to include CSS Styling in HTML?
There are three methods for incorporating CSS into HTML:

You use inline CSS when only a single element needs to be styled or when a small quantity of styling is required.
External Style Sheet: When a style is applied to many elements or HTML pages, it employs an external style sheet.
Internal Style Sheet: An internal style sheet is employed when a single HTML document has a distinct style and numerous elements.
43. Mention the different types of CSS Selectors
Universal Selector
Type Selector (Element Selector)
Class Selector
ID Selector
Attribute Selector
Descendant Selector
Child Selector
Adjacent Sibling Selector
General Sibling Selector
Pseudo-classes
Pseudo-elements
Group Selector
44. What are Sass, Less, and Stylus?
Sass, Less, and Stylus are all CSS preprocessors that extend the functionality of CSS by introducing features like variables, nested rules, mixins, and functions to make CSS more powerful and maintainable.

Sass: Popular and feature-rich, with both .scss (CSS-like) and .sass (indented) syntax.
Less: Simpler syntax and easier to learn, with similar features to Sass.
Stylus: Offers the most flexibility, with a more forgiving and customizable syntax.
45. Explain Box Sizing Property
Box Sizing property defines how the height and width of a box are calculated. 

Content Box - The default width and height apply only to the element’s content. Padding and border are added outside the box.

Padding Box - You add the dimensions to both elements’ content and padding. It adds the border outside the box.

Border Box - The dimensions are added to the content, padding, and border. 

46. What are the different ways to hide an Element using CSS?
display: none

Hides the content and doesn’t store it in the DOM

visibility: hidden

It adds the element to the DOM and takes up space. However, it is not visible to the user's

position: absolute

You can make the element appear outside the screen

47. What does ‘Important’ in CSS mean?
The ‘important’ keyword indicates the highest precedence, and it overrides the cascaded property.

p {
color:blue !important;
}
#thing {
color: green;
}
<p id="thing">Will be BLUE.</p>
48. What are CSS Sprites?
Since each image sends out an HTTP request separately, a web page with a high number of photos takes longer to load.
CSS sprites are used to minimize the loading time of a web page by combining multiple small pictures into a single image.
It reduces the number of HTTP requests and, consequently, the time it takes for pages to load.
49. Which Property is used to underline, strike through, and overline Text?
CSS_Text

The CSS text-decoration property is used to apply underline, strike-through, and overline styles to text.

Values:

underline: Adds a line under the text.
line-through: Adds a line through the middle of the text (strike-through).
overline: Adds a line above the text.
Build Projects and Gain Job-Ready SkillsJava Certification Training CourseExplore ProgramBuild Projects and Gain Job-Ready Skills
JavaScript Interview Questions
JavaScript is used to add user interaction to an application. The following section targets the commonly asked JavaScript frontend interview questions.

50. What are the various Data Types in JavaScript?
JavaScript has many data types to provide the basic functionality needed for a web application. They are mentioned in this table. 

JavaScript_DataTypes.

51. What is Callback in JavaScript?
JavaScript_CallBack

A callback is a JavaScript function that is sent as an argument or parameter to another function.

You call this function whenever the function to which it is provided is called.

52. What’s the difference between a Function Declaration and a Function Expression?
Function Declaration 
function abc()
{
return 5;
}
Within the main JavaScript code, it declares this as a separate statement. It is possible to invoke it before the function has been defined. It provides improved code readability.

Function Expression 
var a = function abc()
{
return
}
It is created within an expression or another construct. It is typically used when a conditional declaration of a function is required. 

53. What do you understand about Cookies in JavaScript? 
A cookie is a small piece of data sent by a website and stored on the user's computer by the web browser used to access the page.

Cookies are used to remember information for later use and to keep track of a website's browsing activities.

The simplest approach to make a cookie with JavaScript is to do it as follows:

document.cookie = "key1 = value1; key2 = value2; expires = date";

To delete a cookie, simply set an expiration date and time; specifying the correct path of the cookie is a good practice. 

function delete_cookie(name)
{
document.cookie = name + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
}
54. What are Closures in JavaScript?
Closures in JavaScript are a feature where an inner function has access to the outer function’s variables.

A closure has three scope chains:

Has access to the variable defined within its curly braces, which is its scope.
Has access to the outer functions' variables.
Has the ability to access global variables.
55. What are Imports and Exports in JavaScript?
Export 
export const sqrt = Math.sqrt;
export function square(x) {
return x * x;
}
export function diag(x, y) {
return sqrt(square(x) + square(y));
}
This file exports two functions that calculate the squares and the diagonal of the input, respectively.

Import 
import { square, diag } from "calc";
console.log(square(4)); // 16
console.log(diag(4, 3)); // 5
Here you import those functions and pass input to those functions to calculate the square and diagonal.

56. What is the difference between Undefined, Undeclared, and Null in JavaScript?
var x
console.log(x) //Undefined variable
var y=NULL
console.log(y) //Null Variable
console.log(z) //Undeclared Variable
Undefined: Undefined means a variable has been declared, but a value has not yet been assigned to that variable.

Null: Null is an assignment value that you can assign to any variable that is meant to contain no value.

Undeclared: Variables that are not declared or that do not exist in a program or application.

57. What is the best way to remove Duplicates from a JavaScript Array?
You can delete duplicates from a JavaScript array in one of two ways:

By employing the filtering technique, Three arguments are required to call the filter() function. These are the array, current element, and current element index.

The For loop is used to store all the repeated elements in an empty array.

Become a Full Stack Developer in Just 9 Months!AI-Powered Full Stack Developer ProgramEXPLORE COURSEBecome a Full Stack Developer in Just 9 Months!
ReactJS Interview Questions
React is a popular Frontend JavaScript library. It is vital to have a good understanding of a JavaScript framework or library for app development. 

The following segment of frontend interview questions comprises React questions.

58. What Is JSX?
React_JSX

JSX is a JavaScript syntactic extension. It's a term used in React to describe how the user interface should look.
You can write HTML structures in the same file as JavaScript code by utilizing JSX.
Because it avoids the use of complicated JS DOM structures, JSX makes the code easier to comprehend and debug.
59. What is Virtual DOM?
React_DOM

The Virtual DOM is the lightweight version of the Real DOM that React retains in memory.
Because nothing is drawn on the screen during Real DOM processing, it is substantially slower than handling virtual DOM.
When an object's state changes, Virtual DOM updates only that object in the real DOM rather than all of them.
60. What are React Extensions? Name a few of them.
React is more than just a UI framework; it encompasses a range of extensions that encompass the entire application architecture.
It has a server-side rendering feature.
Supports the creation of mobile apps.
Flux and Redux, among other things, have been added to the mix.
Flux is Facebook's application architecture for developing online applications.
React Native allows you to create mobile apps entirely in JavaScript.
React_Extensions

61. What is an Event in React? How do you create one?
React_Event.

An event is an action triggered by the user or any system event, such as pressing a key or a mouse key.

62. What are Components in ReactJS?
React_Components

Components are the building blocks of a React application, representing a part of the user interface.

A component used in one area of the application can be reused in another area. This helps speed up the development process.
A component can contain several other components.
A component must define a render method that specifies how the component renders to the DOM in its minimal form.
A component can also receive props. These are properties passed by its parent to specify values.
63. What is a State in React? How do you implement it?
A state is an object that stores the values of properties belonging to a component that could change over a period of time. 

React_State

Here are a few features of a State - 

You can change a state as a result of a user's action or changes in the network.
React re-renders the component to the browser whenever the state of an object changes.
You initialize the state object in the constructor.
It can store multiple properties in the state object.
this.setState() is used to update the value of the state object.
The setState() function merges the new and old state and the previous state in a shallow merge.
64. What are Higher Order and Pure Components in React?
Higher Order Components 
A higher-order component is a function that takes a component and returns a new component.
It facilitates the reusing of component logic.
 const NewComponent = higherOrderComponent(originalComponent)

Pure Components 
React.Component is the base class for React components. React.PureComponent is a variation of React.Component class and does a shallow comparison of props and state.
A React component can be considered pure if it renders the same output for the same state and props.
65. How do you implement React Routing?
React_Routing.

Considering that you have the App, About, and Contact components, routing can be implemented using the code shown above. 

React is widely used for front-end development, and understanding UI elements, such as dropdowns, is crucial. Check out our guide on how to create a functional React dropdown menu to enhance your front-end skills.

Learn Java With Expert-Led TrainingJava Certification Training CourseExplore ProgramLearn Java With Expert-Led Training
Angular Interview Questions 
If you are well-versed in the Angular Framework, then these frontend interview questions on Angular will be helpful.

66. What is Data Binding, and how does it work? Which Data Binding methods does Angular use?
Data binding is a method of manipulating web page elements through the use of a web browser. It's utilized in interactive elements like forms, calculators, tutorials, and games on web pages.

DataBinding-Angular_Interview_Questions

Angular uses Two-way Data Binding. Any modifications made to the user interface mirror the elements in the model state and vice versa. 

67. What is Typescript? 
TypeScript

TypeScript is an object-oriented programming language that is a superset of JavaScript. Simply put, it's JavaScript with a slew of other remarkable capabilities. All TypeScript code is eventually compiled to JavaScript.

TypeScript supports all JavaScript libraries and frameworks, among other essential characteristics. Angular is a single-page application framework written in JavaScript.
With the rise in code complexity, JavaScript needed to meet OOP's criteria, which led to the creation of TypeScript.
TypeScript aids in the production of faster code, which improves performance.
68. What is AoT Compilation? How is it different from JiT? 
Ahead of Time (AOT), compilation translates your code as it is being built, rather than when it is downloaded and run by the browser. This guarantees that the browser renders content quickly. Include the aot option with the ng build or ng serve commands to specify AOT compilation.

The Just-in-Time (JIT) compilation technique converts computer code to machine code while it is being executed or run. Dynamic compilation is another name for it. When you use the ng build or ng serve CLI commands, by default, it uses JIT compilation.

69. What are Pipes in Angular? Explain its types.
Angular_Pipes.

Pipes are simple functions that accept an input value, process it, and return an altered value as an output, in a more technical sense. Angular has several built-in pipes. You can, however, make custom pipes to meet your specific requirements.

The following are some major features:

The pipe "|" symbol is used to define pipes.
Pipes can be linked together in a chain.
The colon (:) sign can be used to provide arguments to pipes.
Pure Pipes 
These are pipes with just pure functions. As a result, a pure pipe uses no internal state, and the output remains constant as long as the parameters provided remain constant. When Angular detects a change in the arguments being given, it invokes the pipe. Throughout all components, a single instance of the pure pipe is used.

Impure Pipes 
Angular calls an impure pipe for every change detection cycle, regardless of changes in the input fields. For these pipes, it produces multiple pipe instances. The inputs to these pipes can be changed.

All pipes are pure by default. On the other hand, the pure attribute can be used to identify impure pipes, as demonstrated below.

@Pipe({
  name: 'demopipe',
  pure : true/false 
})
export class DemopipePipe implements PipeTransform {
70. In Angular, what are Promises and Observables?
While both concepts in Angular deal with asynchronous events, Promises handle one at a time, whereas observables handle a sequence of events over time.

Promises are objects that emit only one value at a time. They take effect immediately once they're created and can't be stopped. They are Promises to the child, Push Errors.
Observables are only executed when the subscribe() method is used to subscribe to them. Over a period, they emit multiple values. They aid in the execution of tasks such as forEach, filter, and retry, among others. Subscribers receive errors as a result of their actions. The listener stops receiving new data when the unsubscribe() method is performed.
71. What are Form Control and Form Groups?
Form Control 
Angular_FormControl

It enables validation through the Form Control class.
It produces a new instance of this class for each input field.
These instances allow you to verify the field's values to see if they've been touched, untouched, or dirty.
Form Group
Angular_FormGroup.

A group of controls is represented by the FormGroup class.
Multiple control groups are possible in a form.
If all the controls are valid, the Form Group class returns True.
It also includes a list of all validation problems.
72. What is Eager and Lazy Loading?
Eager loading - The default module-loading approach is eager loading. Eager loading feature modules are loaded before the program starts. You usually reserve this for applications that aren't too large.

Lazy Loading - When needed, lazy loading dynamically loads the feature modules. This speeds up the application. It's utilized in larger applications where not all the modules are required right at the start.

73. In Angular, what is String Interpolation?
String interpolation is a one-way data-binding method that delivers data from TypeScript code to an HTML view. Double curly braces are used to indicate it. This template expression allows the data from the component to be displayed in the view.

Gain in-depth knowledge of front-end and back-end languages, databases, and cloud technologies with our AI-Powered Full Stack Developer Course. Get hands-on experience with live projects and earn a recognized certification.
Generic Interview Questions
Not all questions will be core technical in nature. The interviewer would also like to understand your take on specific frontend-related questions or suggestions. The final segment of the frontend interview questions tutorial addresses some general questions and answers.

74. What are the Advantages of TypeScript Over JavaScript?
TypeScript points out compilation errors during development.
Supports strongly typed and static typing.
Enhanced features, including interfaces, generics, and more.
Provides excellent tooling support with IntelliSense.
75. How is a Web Developer different from a Web Designer?
Web Developer
Web Designer
Build web applications using languages like HTML, CSS, and JavaScript

Design web applications using tools like Adobe Photoshop, Sketch

They frequently use JavaScript frameworks for more streamlined development

They frequently use Adobe Creative Cloud for most of their design needs

It requires good coding skills

It requires good graphic design skills

Have to keep themselves up to date with the latest web frameworks and libraries

Have to keep themselves up to date with the latest design trends and color palettes

76. What is Backend Development?
Backend_Development.

Web development that occurs at the back end of programs is accurately termed back-end development. Back-end development covers server-side web application logic and integration and activities, like writing APIs, creating libraries, and working with system components, instead of frontend development, which focuses on customer-facing services and programs.

Back-end developers build code that enables a database and an application to communicate with each other. Backend developers are responsible for the back end of a website, which encompasses servers, databases, and applications, and they control what you don't see.

77. What is CoffeeScript?
CoffeeScript is a JavaScript-compiling programming language.
It's an attempt to demonstrate the positive aspects of JavaScript in a straightforward manner.
It also makes it easier to develop JavaScript code by providing a more consistent syntax and avoiding the peculiarities of the JavaScript language.
78. How would you ensure a web design is user-friendly?
A frontend developer should work closely with the user experience team to visualize the app's design.
They should also test the web application and take user input.
The app developed should be compatible with various platforms and must ultimately run smoothly on mobile phones.
79. Would you recommend a Web Designer Role or a Web Developer Role?
It is a matter of preference. 

If you are inclined towards the creative aspect, consider a Web/UX Designer role.
If you are inclined towards the coding aspect, consider the Web Developer role.
80. How would you increase Page Performance?
You should clean the HTML document up
External HTTP requests could be minimized
Sprites, compressed images, and smaller images can be included
At the bottom of the page, include the JavaScript
Optimize CSS, JavaScript, and HTML
Caching and CDN

Junior Front-end Developer Interview Questions
01

Explain what the "box model" CSS is and the layout components that make it up?
The CSS box model is a rectangular layout paradigm for HTML elements. It consists of the following elements:

Content - The content of the field, which reflects all images and text

Padding - the transparent area that surrounds the content (the amount of space between the border and the content)

Border - border surrounding the padding (if any) and content

Margin - is the transparent area around the border (the amount of space between the border and any neighboring elements)

02

What are some of the main benefits of REST web services?
Here are some of the main benefits of REST web services:

The learning curve is very simple because it works based on HTTP protocols
Supports several data transfer technologies such as ext, XML, JSON, image, etc.
Has no predefined contract between server and client, so loosely coupled implementation
REST is a very lightweight protocol
REST methods can be easily tested in the browser
03

What is Cross-Site Scripting (XSS)?
Cross-Site Scripting (XSS) is an attack that occurs when an attacker uses a web application to send malicious code to a different end-user. This code is usually in the form of a browser-side script.

The page provided by the server when someone requests it is unaltered. The XSS attack exploits weaknesses in the page that include a variable submitted in a request to show up in the raw form in the response. The page will only display what was sent along with this request.

04

What is "strict mode"?
Strict Mode is a new ECMAScript 5 feature that allows you to specify a program or function in n a "strict" operating context. This strict context prevents some actions and also throws more exceptions.

Here's an example of such a strict mode:

// Non-strict code ...

(Function () {

  "Use strict";

  // Define your library strictly ...

}) ();

// Non-strict code ...

05

What is a CSS rule?
Web browsers often apply the CSS rule to documents to influence their content. This CSS rule is formed from several things:

A selector that selects from a list of elements to which you want to apply updated property values.
A set of properties, which have values ​​set to update how the HTML content is displayed
It is also worth adding that the set of CSS rules contained in the stylesheet determines how the web page should look.

06

What is meant by the KISS principle?
KISS, a backronym for "keep it simple, stupid" is a design principle that was invented by the U.S. Navy in 1960. The KISS principle states that almost all systems work best when they remain simple rather than made complicated. That is why design should always be kept simple and avoid unnecessary complexity.

07

What is the difference between span and div?
Div is a block element
Span is an inline element
Placing a block element inside an inline element is illegal. Although a div can have a p tag, and a p tag can have a span, a span can't have a div or p tag inside.

08

When would you use ReactJS?
This open-source front-end JavaScript library is primarily used for the front-end development of one-page applications as well as for managing the view layer for mobile and web apps.

09

What is polymorphism?
In the object-oriented programming paradigm, Polymorphism is the ability of an action or method to perform different functions based on the object it’s acting upon. Some aspects of Polymorphism include overloading, overriding and dynamic method binding.

10

When would you use jQuery?
jQuery is a good option for simple tasks. It has several advantages over other frameworks.

easy to expand
Easy to use and learn
Easy to use for DOM manipulation and traversal.
Cross-browser support (IE 6.0+, FF 1.5+, Safari 2.0+, Opera 9.0+)
AJAX Capabilities
Ways to change and apply CSS, and create animations
Lots of plug-ins for all kinds of needs
Mid Front-end Developer Interview Questions
01

What does SOLID mean? What are its principles?
S - Single-responsibility principle. A class should have only one job

O - Open-closed principle. Objects must be open for extension but closed for modification.

L - Liskov substitution principle. Let q (x) be a property provable about objects of x of type T. Then q (y) should be provable for objects y of type S where S is a subtype of T.

I - Interface segregation principle. You cannot force clients to implement an interface that they are not using.

D - Dependency Inversion Principle. Entities must depend on abstractions, not on concretions.

02

What is ClickJacking?
ClickJacking is a malicious technique that is used to trick users into clicking on a certain element that is in reality different from the element that is presented to a user. ClickJacking is used to illegally obtain personal information or to take control over someone's device.

03

What is load balancing and how does the front-end load balancer work?
Load balancing is a method for allocating capacities across numerous machines or clusters. A front-end load balancer is a server that uses a virtual IP address to accept requests from a client; it ensures that no single machine is overloaded or underloaded. A load balancer determines the most suitable reverse proxy service based on the specified scheduling algorithm and forwards the requests to the needed reverse proxy server.

04

What is Coercion in JavaScript?
Coercion is a JavaScript conversion between two different built-in types. There are two forms of coercion: explicit and implicit.

Here is an example of explicit coercion:

var a = "42";

var b = Number (a)

a; // "42"

b; // 42 - the number!

Here's an example of an implicit coercion:

var a = "42";

var b = a * 1; // "42" implicitly coerced to 42 here

a; // "42"

b; // 42 - the number!

05

What is a Mixin?
Mixin is one of the blocks of code with which we can group CSS declarations. We can reuse these declarations on the site.

Here's how to define Mixin:

@mixin grid ($ flex: true / * default argument * /) {

@if $ flex {

        @include flex;

} @Else {

        display: block;

}

}

Here's what you need to do to use Mixin:

/ * Scss * /

.row {

    @include grid (true);

}

/ * Css * /

.row {

    display: -webkit-flex;

    display: flex;

}

06

What's the difference between "resetting" and "normalizing" CSS? Which one is better to use and why?
Resetting - designed to remove all default browser styles on elements. Margins, padding, and fonts are reset to the same.

Normalizing - keeps styles that are useful rather than dumping everything. It can also fix all errors for common browser dependencies.

It's better to use resetting if you are working on a very unconventional website design and need to create a lot of your style.

07

What is the semantic difference between PUT and POST?
PUT puts a file or resource at a particular URI and exactly at that URI. If there is already a file in this URI, then PUT will replace it.

POST sends data to a specific URI and waits for a file or resource in that URI to process the request. At this point, the server decides what to do with the data in the context of that resource.

08

What is a Grid System?
A grid system is a framework that allows developers to arrange content both vertically and horizontally. These systems include two main elements - rows and columns.

Examples of Grid Systems are:
Simple grid
Pure
Flexbox Grid
Bootstrap
Foundation
09

When would you use AngularJS vs jQuery?
jQuery is the only tool that can solve a single specific problem like dom manipulation, while AngularJS is a complete web framework that includes different kinds of tools for solving different problems like routing, model bindings, dom manipulation, etc. JqLite (a subset of jQuery) is part of the AngularJS and you use it to solve the dom-manipulation thing.

10

What is webpack?
Webpack is an open-source JavaScript module bundler. Its main purpose is to put all of the assets, including Javascript, images, fonts, and CSS, in a dependency graph. Webpack gives control over how to treat different assets it encounters.

Senior Front-end Developer Interview Questions
01

Explain the Prototype Design Pattern
The Prototype Pattern creates new objects. But the peculiarity is that instead of creating non-initialized objects, it returns objects that are initialized with values ​​ copied from a prototype - or sample - object.

One example is the initialization of business objects with values ​​that match the default values ​​in the database. Classical languages ​​rarely use the Prototype pattern, but JavaScript being a prototypal language uses this pattern in the construction of new objects and their prototypes.

02

What is Closure in JavaScript?
The closure is a function that is defined inside another function and which also has access to a variable. This variable is declared and defined in the parent function scope.

The closure has access to the variable in three scopes:

Variable declared in his scope
Variable declared in parent function scope
Variable declared in the global namespace
An example of such a closure:

var globalVar = "abc";  // Parent self invoking function

(Function outerFunction (outerArg) {// begin of scope outerFunction  // Variable declared in outerFunction function scope

var outerFuncVar = 'x';   // Closure self-invoking function

(Function innerFunction (innerArg) {// begin of scope innerFunction  // variable declared in innerFunction function scope

var innerFuncVar = "y";

console.log (

"OuterArg =" + outerArg + "\ n" + "OuterFuncVar =" + outerFuncVar + "\ n" + "InnerArg =" + innerArg + "\ n" + "InnerFuncVar =" + innerFuncVar + "\ n" + "GlobalVar =" + globalVar)  // end of scope innerFunction

}) (five); // Pass 5 as parameter  // end of scope outerFunction

}) (7); // Pass 7 as parameter

03

What is Content Security Policy?
Content Security Policy (CSP) is an HTTP header that allows operators to monitor and control where resources can be loaded onto their website. Using this header is one of the best ways to prevent cross-site scripting (XSS) vulnerabilities. Since there are difficulties with retrofitting CSPs on all existing websites, CSP is a must for all new websites, and it is highly recommended to implement CSPs on all existing high-risk sites.

The biggest benefit of CSP is disabling the use of unsafe-inline JavaScript. Inline JavaScript means that data that users enter incorrectly on the site can generate code that will be interpreted by the browser like JavaScript. By using CSP to disable inline JavaScript, you can effectively eliminate almost all XSS attacks against your site.

04

What are IIFEs?
This stands for Immediately-Invoked Function Expression. This pattern is often used to avoid polluting the global namespace because all the variables used inside the IIFE are not visible outside its scope.

Example using IIFEs:

(Function IIFE () {

console.log ("Hello!");

}) ();

// "Hello!"

05

How will you handle HTTP errors in Angular applications?
You can work with HTTP errors if you attach a "catch" to your request. For example:

import {Injectable} from '@ angular / core';

import {Observable} from 'rxjs / Observable';

import {HttpClient} from '@ angular / common / http';

import 'rxjs / add / observable / throw';

@Injectable ()

export class Client {

constructor (

public http: HttpClient

) {}

public fetch () {

return this.http.post ('https://thisurliswrong123123.com ", {})

.catch ((err) => {

// Do messaging and error handling here

return Observable.throw (err)

});

}

}

06

Explain tsconfig.json file
This file is used to give the options about TypeScript used for the Angular project.

{

"CompilerOptions" {

"Target": "es5",

"Module": "commonjs",

"ModuleResolution": "node",

"SourceMap": true,

"EmitDecoratorMetadata": true,

"ExperimentalDecorators": true,

"Lib": ["es2015", "dom"],

"NoImplicitAny": true,

"SuppressImplicitAnyIndexErrors": true

}

}

07

What components are in Angular?
Each program consists of components. Each component is a logical boundary of functionality for the application. Below we have given what the component consists of:

Class - This is like a C or Java class which consists of properties and methods

Metadata - This is used to decorate the class and extend the functionality of the class

Template - This is used to define the HTML view which is displayed in the application

08

How to use a function A class?
function functionName (name) {

this.name = name;

}

// Creating an object

var functionName = new functionName ("WTEN")

console.log (functionName.name) // WTEN

09

Why is the W3c Standard Code needed?
One of the main goals of such standards is to provide cross-platform compatibility and more compact file sizes. These standards aim to decouple "content" from "formatting" by implementing CSS. It eases maintenance and development.

10

What is the difference between == and ===?
The 3 equal signs mean "equality without type coercion". Using the triple equals, the values ​​must be equal in type as well.

== is equal to

=== is exactly equal to (value and type)

0 == false // true

0 === false // false, because they are of a different type

1 == "1" // true, auto type coercion

1 === "1" // false, because they are of a different type

home-05
Hiring front-end developers?
We have the people you are looking for!


Собеседование для фронтенд-разработчика на JavaScript: самые лучшие вопросы
9 мин
214K
Блог компании RUVDS.com
JavaScript
*
Веб-разработка
*
Перевод
Автор оригинала: Boris Cherny
Недавно мне довелось побывать на встрече участников проекта FreeCodeCamp в Сан-Франциско. Если кто не знает, Free Code Camp — это сообщество, нацеленное на изучение JavaScript и веб-программирования. Там один человек, который готовился к собеседованиям на позицию фронтенд-разработчика, попросил меня подсказать, какие вопросы по JavaScript стоит проработать. Я немного погуглил, но не смог найти подходящего списка вопросов, на который я бы мог дать ссылку и сказать: «Разбери эти вопросы и работа твоя». Некоторые списки были близки к тому, что мне хотелось найти, некоторые выглядели очень уж простыми, но все они были либо неполными, либо содержали вопросы, которые вряд ли кто станет задавать на реальном собеседовании.

image

В итоге я решил составить собственный список. В него входят и те вопросы, которые задавали мне, когда я искал работу, и те, которые задавал я, когда искал сотрудников на позиции фронтенд-разработчиков. Обратите внимание на то, что некоторые компании (вроде Google) уделяют особое внимание таким вещам, как проектирование эффективных алгоритмов. Поэтому, если вы хотите в подобной компании работать, в дополнение к приведённым тут вопросам, порешайте задачки с соревнований CodeJam.

Я буду добавлять и редактировать ответы на эти вопросы здесь. Если у вас возникнет желание что-нибудь дополнить или улучшить — буду рад вашим пулл-реквестам.

Вопросы разбиты на несколько разделов:

Теория.
Программирование.
Отладка.
Проектирование систем.

Итак, вот мои вопросы.

Теория

Интервьюируемый должен обладать чётким пониманием концепций, которые затрагивают вопросы из этого раздела, должен уметь всё это объяснить. Программирование тут не требуется.

Что такое нотация «О-большое» и как ей пользоваться?
Что такое DOM?
Что такое цикл событий?
Что такое замыкание?
Как работает прототипное наследование и чем оно отличается от классической модели наследования? (По моему мнению, это не особенно полезный вопрос, но многим нравится его задавать.)
Как работает ключевое слово this?
Что такое всплытие событий и как работает этот механизм? (Мне этот вопрос тоже не нравится, но его часто задают на собеседованиях.)
Опишите несколько способов обмена данными между клиентом и сервером. Расскажите, не вдаваясь в подробности, о том, как работают несколько сетевых протоколов (IP, TCP, HTTP/S/2, UDP, RTC, DNS, и так далее).
Что такое REST и почему эта технология популярна?
Мой сайт тормозит. Расскажите о шагах по его диагностированию и исправлению. Опишите популярные подходы к оптимизации, и расскажите о том, когда их следует использовать.
Какими фреймворками вы пользовались? Каковы их сильные и слабые стороны? Почему программисты пользуются фреймворками? Проблемы какого рода решают фреймворки?

Программирование

Ответы на эти вопросы предполагают реализацию функций на JavaScript. За каждым вопросом следуют тесты, которые должно успешно проходить решение.

▍Простые задания

Реализуйте функцию isPrime(), которая возвращает true или false, указывая, является ли переданное ей число простым.

isPrime(0)                          // false
isPrime(1)                          // false
isPrime(17)                         // true
isPrime(10000000000000)             // false
Объяснить с

Реализуйте функцию factorial(), которая возвращает факториал переданного ей числа.

factorial(0)                        // 1
factorial(1)                        // 1
factorial(6)                        // 720
Объяснить с

Реализуйте функцию fib(), возвращающую n-ное число Фибоначчи.

fib(0)                              // 0
fib(1)                              // 1
fib(10)                             // 55
fib(20)                             // 6765
Объяснить с

Реализуйте функцию isSorted(), которая возвращает true или false в зависимости о того, отсортирован ли переданный ей числовой массив.

isSorted([])                        // true
isSorted([-Infinity, -5, 0, 3, 9])  // true
isSorted([3, 9, -3, 10])            // false
Объяснить с

Создайте собственную реализацию функции filter().

filter([1, 2, 3, 4], n => n < 3)    // [1, 2]
Объяснить с

Создайте собственную реализацию функции reduce().

reduce([1, 2, 3, 4], (a, b) => a + b, 0) // 10
Объяснить с

Реализуйте функцию reverse(), которая обращает порядок следования символов переданной ей строки. Не пользуйтесь встроенной функцией reverse().

reverse('')                         // ''
reverse('abcdef')                   // 'fedcba'
Объяснить с

Создайте собственную реализацию функции indexOf() для массивов.

indexOf([1, 2, 3], 1)               // 0
indexOf([1, 2, 3], 4)               // -1
Объяснить с

Реализуйте функцию isPalindrome(), которая возвращает true или false в зависимости от того, является ли переданная ей строка палиндромом (функция нечувствительна к регистру и к наличию в строке пробелов).

isPalindrome('')                                // true
isPalindrome('abcdcba')                         // true
isPalindrome('abcd')                            // false
isPalindrome('A man a plan a canal Panama')     // true
Объяснить с

Реализуйте функцию missing(), которая принимает неотсортированный массив уникальных чисел (то есть, числа в нём не повторяются) от 1 до некоего числа n, и возвращает число, отсутствующее в последовательности. Там может быть либо одно отсутствующее число, либо их может не быть вовсе.

Способны ли вы добиться того, чтобы функция решала задачу за время O(N)? Подсказка: есть одна хорошая формула, которой вы можете воспользоваться.

missing([])                         // undefined
missing([1, 4, 3])                  // 2
missing([2, 3, 4])                  // 1
missing([5, 1, 4, 2])               // 3
missing([1, 2, 3, 4])               // undefined
Объяснить с

Реализуйте функцию isBalanced() которая принимает строку и возвращает true или false, указывая на то, сбалансированы ли фигурные скобки, находящиеся в строке.

isBalanced('}{')                      // false
isBalanced('{{}')                     // false
isBalanced('{}{}')                    // true
isBalanced('foo { bar { baz } boo }') // true
isBalanced('foo { bar { baz }')       // false
isBalanced('foo { bar } }')           // false
Объяснить с

▍Задания средней сложности

Реализуйте функцию fib2(). Она похожа на функцию fib() из предыдущей группы заданий, но поддерживает числа вплоть до 50. Подсказка: используйте мемоизацию.

fib2(0)                               // 0
fib2(1)                               // 1
fib2(10)                              // 55
fib2(50)                              // 12586269025
Объяснить с

Реализуйте функцию isBalanced2(). Она похожа на функцию isBalanced() из предыдущей группы заданий, но поддерживает три типа скобок: фигурные {}, квадратные [], и круглые (). При передаче функции строки, в которой имеются неправильные скобочные последовательности, функция должна возвращать false.

isBalanced2('(foo { bar (baz) [boo] })') // true
isBalanced2('foo { bar { baz }')         // false
isBalanced2('foo { (bar [baz] } )')      // false
Объяснить с

Реализуйте функцию uniq(), которая принимает массив чисел и возвращает уникальные числа, найденные в нём. Может ли функция решить эту задачу за время O(N)?

uniq([])                              // []
uniq([1, 4, 2, 2, 3, 4, 8])           // [1, 4, 2, 3, 8]
Объяснить с

Реализуйте функцию intersection(), которая принимает два массива и возвращает их пересечение. Можете ли вы добиться того, чтобы функция решала эту задачу за время O(M+N), где M и N — длины массивов?

intersection([1, 5, 4, 2], [8, 91, 4, 1, 3])    // [4, 1]
intersection([1, 5, 4, 2], [7, 12])             // []
Объяснить с

Создайте реализацию функции sort(), которая сортирует числовой массив за время O(N×log(N)).

sort([])                              // []
sort([-4, 1, Infinity, 3, 3, 0])      // [-4, 0, 1, 3, 3, Infinity]
Объяснить с

Реализуйте функцию includes(), которая возвращает true или false в зависимости от того, встречается ли переданное ей число в переданном ей отсортированном массиве. Может ли функция решить эту задачу за время O(log(N))?

includes([1, 3, 8, 10], 8)            // true
includes([1, 3, 8, 8, 15], 15)        // true
includes([1, 3, 8, 10, 15], 9)        // false
Объяснить с

Реализуйте функцию assignDeep(), которая похожа на Object.assign(), но выполняет глубокое объединение объектов. Для того, чтобы не усложнять задачу, можно исходить из допущения, что объекты могут содержать только числа и другие объекты (в них не может быть массивов, строк, и так далее).

assignDeep({ a: 1 }, {})              // { a: 1 }
assignDeep({ a: 1 }, { a: 2 })        // { a: 2 }
assignDeep({ a: 1 }, { a: { b: 2 } }) // { a: { b: 2 } }
assignDeep({ a: { b: { c: 1 }}}, { a: { b: { d: 2 }}, e: 3 })
// { a: { b: { c: 1, d: 2 }}, e: 3 }
Объяснить с

Реализуйте функцию reduceAsync(), которая похожа на функцию reduce() из группы простых заданий, но работает с функциями, возвращающими promise-объекты, каждый из которых должен быть разрешён до перехода к следующему.

let a = () => Promise.resolve('a')
let b = () => Promise.resolve('b')
let c = () => new Promise(resolve => setTimeout(() => resolve('c'), 100))
await reduceAsync([a, b, c], (acc, value) => [...acc, value], [])
// ['a', 'b', 'c']
await reduceAsync([a, c, b], (acc, value) => [...acc, value], ['d'])
// ['d', 'a', 'c', 'b']
Объяснить с

Реализуйте функцию seq(), пользуясь тем же подходом, что и при работе над функцией reduceAsync(). Эта функция должна принимать массив функций, которые возвращают promise-объекты, и разрешать их один за другим.

let a = () => Promise.resolve('a')
let b = () => Promise.resolve('b')
let c = () => Promise.resolve('c')
await seq([a, b, c])                  // ['a', 'b', 'c']
await seq([a, c, b])                  // ['a', 'c', 'b']
Объяснить с

▍Сложные задания

Некоторые задания из этой группы связаны с созданием структур данных. Не нужно запоминать все тонкости их функционирования, достаточно понимания их устройство, при этом сведения о предоставляемом ими интерфейсе можно найти в интернете. Далее, нужно знать, для чего эти структуры данных используются, каковы их ограничения в сравнении с другими структурами данных.

Реализуйте функцию permute(), которая возвращает массив строк, содержащий все пермутации заданной строки.

permute('')             // []
permute('abc')          // ['abc', 'acb', 'bac', 'bca', 'cab', 'cba']
Объяснить с

Создайте самостоятельную реализацию функции debounce().

let a = () => console.log('foo')
let b = debounce(a, 100)
b()
b()
b() // только этот вызов должен вызывать a()
Объяснить с

Реализуйте класс LinkedList, не используя встроенные массивы JavaScript ( [] ). Ваш LinkedList должен поддерживать лишь 2 метода: add() и has().

class LinkedList {...}
let list = new LinkedList(1, 2, 3)
list.add(4)                           // undefined
list.add(5)                           // undefined
list.has(1)                           // true
list.has(4)                           // true
list.has(6)                           // false
Объяснить с

Реализуйте класс HashMap, не используя встроенные объекты JavaScript ( {} ) или функцию map(). Вам дана функция hash(), которая принимает строку и возвращает некое число. Эти числа, в основном, уникальны, но возможна и ситуация, когда двум разным строкам соответствуют одинаковые числа.

function hash (string) {
  return string
    .split('')
    .reduce((a, b) => ((a << 5) + a) + b.charCodeAt(0), 5381)
}
Объяснить с

Ваша реализация HashMap должна поддерживать лишь 2 метода: get() и set().

let map = new HashMap
map.set('abc', 123)                   // undefined
map.set('foo', 'bar')                 // undefined
map.set('foo', 'baz')                 // undefined
map.get('abc')                        // 123
map.get('foo')                        // 'baz'
map.get('def')                        // undefined
Объяснить с

Реализуйте класс BinarySearchTree. Он должен поддерживать 4 метода: add(), has(), remove(), и size().

let tree = new BinarySearchTree
tree.add(1, 2, 3, 4)
tree.add(5)
tree.has(2)                           // true
tree.has(5)                           // true
tree.remove(3)                        // undefined
tree.size()                           // 4
Объяснить с

Реализуйте класс BinaryTree, который поддерживает поиск в ширину, а также функции симметричного, прямого и обратного поиска в глубину.

let tree = new BinaryTree
let fn = value => console.log(value)
tree.add(1, 2, 3, 4)
tree.bfs(fn)                          // undefined
tree.inorder(fn)                      // undefined
tree.preorder(fn)                     // undefined
tree.postorder(fn)                    // undefined
Объяснить с

Отладка

При ответе на следующие вопросы сначала постарайтесь понять, почему представленный код не работает. Объясните причину ошибки. Затем предложите пару вариантов исправления проблемы и перепишите код, реализуя один из предложенных вариантов. В итоге программа должна работать правильно.

Необходимо, чтобы этот код выводил в лог hey amy, но он выводит hey arnold. Почему?

function greet(person) {
  if (person == { name: 'amy' }) {
    return 'hey amy'
  } else {
    return 'hey arnold'
  }
}
greet({ name: 'amy' })
Объяснить с

Необходимо, чтобы этот код выводил в лог числа 0, 1, 2, 3 в указанном порядке, но он этого не делает (Однажды вы столкнётесь с этой ошибкой. Некоторые люди любят задавать этот вопрос на собеседованиях).

for (var i = 0; i < 4; i++) {
  setTimeout(() => console.log(i), 0)
}
Объяснить с

Необходимо, чтобы этот код выводил в лог doggo, но он выводит лишь undefined.

let dog = {
  name: 'doggo',
  sayName() {
    console.log(this.name)
  }
}
let sayName = dog.sayName
sayName()
Объяснить с

Попытка вызова метода bark() объекта Dog вызывает ошибку. Почему?

function Dog(name) {
  this.name = name
}
Dog.bark = function() {
  console.log(this.name + ' says woof')
}
let fido = new Dog('fido')
fido.bark()
Объяснить с

Почему функция isBig() возвращает именно такой результат?

function isBig(thing) {
  if (thing == 0 || thing == 1 || thing == 2) {
    return false
  }
  return true
}
isBig(1)    // false
isBig([2])  // false
isBig([3])  // true
Объяснить с

Проектирование систем

Если вы не уверены, что знаете, что такое «проектирование систем», сначала почитайте это.

1. Расскажите о реализации виджета автозавершения вводимого пользователем текста. Данные для автозавершения загружаются с сервера. Рассмотрите клиентскую и серверную части системы.

Как бы вы спроектировали клиентскую часть системы, которая поддерживает следующие возможности:

Получение данных с применением серверного API.
Вывод результатов в виде дерева, когда у элементов могут быть родительские и дочерние элементы, то есть, подсказки автозаполнения — это не обычный плоский список.
Поддержка, помимо обычных текстовых фрагментов, элементов разных типов: флажков, радиокнопок, иконок.

Как выглядит API компонента?
Как выглядит серверное API?
Какие соображения, касающиеся производительности, нужно учитывать для того, чтобы виджет работал в режиме реального времени, выводя подсказки по мере ввода данных пользователем? Есть ли здесь какие-нибудь пограничные случаи (например, когда пользователь вводит текст быстро при медленном сетевом соединении)?
Как бы вы спроектировали сетевую подсистему и серверную часть высокопроизводительного решения такого рода? Как организовали бы взаимодействие клиента и сервера? Как данные хранятся на сервере? Как всё это масштабируется для поддержки больших объёмов данных и большого количества клиентов?

2. Расскажите о реализации сервиса, подобного Twitter, описав клиентскую и серверную части (этот вопрос бессовестно украден у моего друга Майкла Ву).

Как твиты загружаются с сервера и выводятся в пользовательском интерфейсе?
Как, при обновлении твитов, обновляется лента? Как клиентская часть приложения узнаёт о появлении новых твитов?
Как выполняется поиск по твитам? Как организован поиск по автору? Расскажите о том, как спроектирована база данных, серверная часть приложения и API.

Итоги

Надеемся, эти вопросы пригодятся и тем, кто собирается на собеседования, и тем, кто их проводит. А если вы не относитесь ни к тем, ни к другим, полагаем, вопросы помогут вам поддерживать себя в хорошей программистской форме.

Вот, кстати, ещё несколько мест, куда можно заглянуть, если вам хочется попрактиковаться: The Algorithm Design Manual, задачи с соревнований CodeJam, репозиторий keon/algorithms. А вот — несколько ресурсов, которые будут полезны JS-разработчикам: JavaScript Allonge, You Don’t Know JS, Effective JavaScript.

Уважаемые читатели! Если у вас есть на примете вопросы, которые, по вашему мнению, стоит добавить в этот список (или если вы обнаружите ошибку) — расскажите нам и напишите автору этого материала.
Теги:JavaScriptразработкапоиск работы

Q1. How do I prepare for a front-end developer interview?
When you're preparing for your Front-end developer interview, try to code most of your layout without taking a glance at the result till the end. If CSS, HTMLare the most important aspect of front-end development, then JavaScript tops the list of important skills to own. Organisations will spend a lot of time during your interview to test your understanding of Javascript.

Q2. Why should we hire you as frontend developer
Freshers:  While interviewing for front-end developer jobs for freshers you can come across this question. The best answer would be, " I have just begun my career, and do not have practical achievements, but I wish to explore and experience my potential by giving the best services to the company. It will be my privilege to work with your organization."
Experienced: The best answer would be, “You should hire me for the role of front-end developer owing to my proven ability to create effective front-end user interfaces in line with contemporary best practices. I have experience working with JavaScript, along with the React framework, to create front-end applications.”

Q3. What is the most challenging work you have ever done as a front-end developer
The biggest challenges faced as a front-end developer are:

Make sure each UI element like button, link navigation,  works as planned despite the user having JavaScript or cookies disabled.
Make sure everything looks similar across all browsers.
HTML tables.
Debugging JavaScript code.

Top 50 Frontend Interview Questions and Answers
 04 Sep 2025
 Career
 5.12K Views
 38 min read

Learn with an interactive course and practical hands-on labs
Free Online HTML Course with Certificate: Learn HTML In 21 Days
We live in the internet world. Every day we surf several web pages, websites, and mobile apps for one or the other reason. Our lives are so connected with various applications that any software company cannot imagine working without hiring the best front-end developers. Today the upcoming technocrats are very much fascinated with making and designing websites and apps and get a good front-end developer salary.

So, to help you make your career in front-end development, we have compiled a set of frequently asked front-end developer interview questions and answers. It will make you feel confident while giving the interview and crack it.

Basic Frontend Interview Questions for Freshers
What skills are required for a front-end developer?
The client side of development, which includes everything a user sees and interacts with on a website, is the responsibility of a front-end developer. He is the one who makes it all happen, from the layout and design to the functionality and responsiveness.
Some of the basic technical skills required for a front-end developer are HTML, CSS, JavaScript, JQuery,React, Angular, testing and debugging skills, knowledge of version control systems like Git, etc.

What skills are required for a front-end developer

Read more: Top 10 Front-End Developer Skills You Need to Know

Explain the term, responsive design.
It is a method to make your webpage or website compatible to be displayed on any device may it be a desktop or phone or even a smartwatch. It tries to make an easy navigation of the site with a minimum of scrolling, panning, and resizing across all devices. React, Angular, etc are some of the popular frameworks for building such designs.
Do you have any idea regarding the CSS box model?
The CSS box model comprises the following four elements:
Content - The body of the page comes here
Padding - Area around your content
Border - Space between padding if given and content
Margin - Area around the border
Do you have any idea regarding the CSS box model

Enlist and brief the features of HTML5, which are not in HTML.
Some new features in HTML5 include:
DOCTYPE declaration –
section: Section tag defines a section in the document, such as a header, footer, or in other sections of the document. It is used to define the structure of the document.
header: The header tag defines the head section of the document. A header section always appears at the top of the document.
footer: The footer tag defines the footer section of the document. A footer section always sticks at the bottom of the document.
article: The article tag defines an independent piece of the content of a document.
main: The main tag defines the main section in the document that contains the main content of the document.
figcaption:The figcaption tag defines the caption for the media element, such as an image or video.
Read more: Semantic HTML5 Elements with Examples
Differentiate Anonymous and Named functions.
The anonymous function is a function without a name. It cannot be accessed after it is created but can only be retrieved by a variable in which it is stored. You can give as many arguments as you want to an anonymous function but only a single expression.
Syntax
 function(){
 // Function Body
}
Example
 var anony = function () {
 console.log(“This is an anonymous function");
 };
 anony();
Named Functions are normal functions with a name. You can use it in an expression or a statement.
Syntax
 function display(){
 // function body
} 
Example
function display() {
 console.log (`This is a named function`);
 }; 
Describe user-centered design.
We all know that webpages are built for the convenience of the users. So, it becomes the responsibility of the developers to keep in mind how users would like to view the page while using it. It inculcates various techniques to include the users at each stage of the design process. This way, one can get deep insights into the users' likes and dislikes. Thus, you can get a complete understanding of how your product will be used by the users for whom you designed it.
What is markup in HTML?
Markup refers to the sequence of characters or other symbols that you insert at certain places in a text or word processing file to indicate how the file should look when it is printed or displayed or to describe its logical structure. The markup indicators are often called tags in HTML.
What are JavaScript data types?
These are the eight data types in JavaScript:
Number: an integer or a floating-point number
String: textual data
Boolean: true or false
BigInt: an integer with arbitrary precision
Object: key-value pairs of collection of data
null: denotes a null value
undefined: a data type whose variable is not initialized
Symbol: data type whose instances are unique and immutable
Describe the function of CSS in Web Design.
CSS stands for Cascading Style Sheet, which is needed to give the look and feel of any website. They help in the management of font styles, sizes and color combinations that are required for web pages. One change in the CSS file will cause a change to the entire website because web pages retrieve data every time and then display it. It is a part of web designing that incorporates steps and processes to make your website more attractive by adding new menu styles to it.
Differentiate between HTML and XHTML.
Below are the differences between HTML and XHTML:
HTML stands for Hypertext Markup Language, whereas XHTML stands for Extensible Markup Language.
A static webpage is an HTML webpage, and dynamic web pages are XHTML.
XHTML is stricter than HTML.
An XML application of HTML is defined as XHTML.
All modern browsers support XHTML.
What is the difference between “ == “ and “ === “ operators?
Both are comparison operators. The difference between both the operators is that “==” is used to compare values, whereas “ === “ is used to compare both values and types.
Example
var a = 7;
var b = "7";
(a == b) // Returns true since the value of both a and b is the same
(a === b) // Returns false since the typeof x is number and typeof y is string
What are Pseudo elements and Pseudo classes?
Pseudo-elements allow us to create items that do not normally exist in the document tree,
::before
::after
::first-letter
::first-line
::selection
Example
p: :first-line {
 color: blue;
 font-variant: small-caps;
}
In the above code, the color will appear only on the first line of the paragraph.
A CSS pseudo-class is a keyword added to a selector that specifies a special state of the selected elements. Pseudo-classes let you apply a style to an element not only with the content of the document tree but also concerning external factors.
: link
: visited
: hover
: active
: focus
Example

/* mouse over link */
a:hover {
 color: #FFOOFF;
}
In the above example, the color applies to the anchor tag when it’s hovered.

What are the two types of Web Storage in HTML5?
Session Storage: It stores data from the current session only. It means that the data stored in session storage clears automatically when the browser is closed.
Local Storage: In local storage, data is not deleted automatically when the current browser window is closed.
What is a task runner? What are the benefits of using a task runner?
A task runner is a software tool or framework that helps you streamline and simplify repetitive tasks. It automates and manages various tasks, processes, and workflows in software development and other areas. Task runners are commonly used in web development, build processes, and project automation.
The benefits of using a task runner include reducing the amount of time spent on repetitive tasks, automating tedious and error-prone tasks, and making it easier to manage the development process.

What type of language is JavaScript, statically typed or dynamically typed?
JavaScript is a dynamically typed language. In a dynamically typed language, the type of a variable is checked during run-time and so, variables in JS are not associated with any type. A variable can hold the value of any data type.
Example
var a = 50;
var a = "ScholarHat";
In the above code, the variable a that is assigned a number type can be converted to a string type.

What is DHTML?
DHTML is a combination of HTML, XHTML, JavaScript, jQuery, and CSS. It is a term describing the art of making dynamic and interactive web pages.
Why are meta tags used in HTML?
Meta tags in HTML are used by the developer to tell the browser about the page description, author of the template, character set, keywords, and many more.
Meta tags are used for search engine optimization to tell the search engine about the page's contents.

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale = 1.0">
<meta name="description" content="HTML interview questions">
<meta name="author" content="Author Name">
<meta name="copyright" content="All Rights Reserved">
Why should we use the float property in CSS?
The float property in CSS is used for positioning the HTML elements horizontally, either towards the left or right of the container.
Example
 float-container {
 float: right; 
} 
In the above code, the element to which the class is applied ensures that the element is positioned on the right of the container. If you specify the float value as left, then the element will be placed on the left side of the container.

What is the difference between responsive and adaptive development?
The Differences Between responsive and adaptive development are as follows:

Adaptive Design	Responsive Design
It focuses on developing websites based on multiple fixed layout sizes.	It focuses on showing content based on available browser space.
When a website developed using the adaptive design is opened on the desktop browser, first, the available space is detected, and then the layout with the most appropriate sizes is picked and used for the display of contents. Resizing the browser window does not affect the design.	When a website developed using responsive design is opened on a desktop browser and when we try to resize the browser window, the content of the website is dynamically and optimally rearranged to accommodate the window.
Generally, adaptive designs use six standard screen widths: 320 px, 480 px, 760 px, 960 px, 1200 px, and 1600 px. These sizes are detected, and appropriate layouts are loaded.	This design makes use of CSS media queries for changing styles depending on the target device properties for adapting to different screens.
It takes a lot of time and effort to first examine the options and realities of the end users and then design the best possible adaptive solutions for them.	Generally, responsive design takes very little time to build and design fluid websites that can accommodate content from the screen depending on the screen size.
Gives a lot of control over the design to develop sites for specific screens.	Not much control over the design is offered here.
What is the significant sign that your site isn’t responsive or having issues?
Horizontal bar presence on desktop or mobile screens is the main sign that the site is having responsive mistakes and will become the reason for failing to check or test devices individually.
Intermediate Frontend Interview Questions and Answers
List some of the JQuery functions used for web page designing.
Simple slide panel
Simple disappearing effect
Chainable transition effect
Accordion#1 and Accordion#2
Animated hover effect
Entire block clickable
Collapsible panels
Image replacement gallery
Styling different link types
How is margin different from padding in CSS?
The margin property in CSS is used to create space around the elements. We can also create space for borders defined at the exteriors. The following margin properties are listed below:
margin-top
margin-right
margin-bottom
margin-left
The values of the margin property are:

auto: The browser auto-calculates the margin while we use this.
length: The value of this property can be in px, pt, cm, em, etc. The values can be positive or negative.
%: We can also give a percentage value as a margin to the element.
inherit: Using this property, the margin properties can be inherited from the parent elements.
The padding property is used for generating the space around the element’s content and inside any known border. The padding also has sub-properties like:

padding-top
padding-right
padding-bottom
padding-left
You cannot put negative padding values. It is not allowed.



The above image clearly shows that the Margin is the outermost entity of the CSS Box Model. It lies outside of the borders, whereas the padding lies within the borders.

What is the difference between an attribute and a property?
Attributes are written in the HTML markup and set the initial configuration of an element, while properties reflect the element's current state in the DOM.

Attributes can be accessed or modified using getAttribute() and setAttribute(), whereas properties are accessed directly on the DOM object (e.g., element.value).

Changing an attribute updates the markup but might not affect the live element behavior, while updating a property changes the actual behavior or state of the element.

Attributes provide static values defined at load time, whereas properties allow for real-time, interactive changes via JavaScript.

In <input value="Hello">, the "value" attribute is set as "Hello", while the input.value property may return a different value if the user has typed something else.

How many different methods are there to make an object in JavaScript?
There are several methods in JavaScript to declare or construct an object.
Object
using Class
create Method
Object Literals
using Function
Object Constructor
What do you mean by SVG element?
SVG is a subset of XML format; it stands for Scalable Vector Graphics, which is used to create vector graphics with support for interactivity and animation.
SVG is resolution-independent as it does not lose its quality when they are resized or zoomed.
SVG is mainly used for vector-type diagrams like pie charts, 2-dimensional graphs in an X, and Y coordinate system, etc.
Let's see an example of drawing a circle with an SVG tag.
 <svg width="100" height="100"> 
 <circle cx="50" cy="50" r="40" stroke="yellow" stroke-width="4" fill="red" /> 
 </svg> 
What do you mean by the term SOLID?
SOLID is the acronym for the five design principles in the field of object-oriented design. They are:
S- single responsibility principle
O- open-closed principle
L- Liskov Substitution Principle
I- interface segregation principle
D- dependency
Any idea regarding the KISS principle used in designing?
KISS stands for Keep it Simple, Stupid.
According to this principle, strive for simplicity while designing your website or building any product. It is very easy to complicate things, but very difficult to simplify them. Ex: You must have observed that Apple products are very easy to operate for any type of user. This is because they pay attention to simplicity and user-friendly interfaces.

When does DOM reflow occur?
The web browser process for recalculating the positions and geometries of elements in the document, for re-rendering part or all of the document, is known as reflow.
Reflow occurs when:

Insert, remove, or update an element in the DOM
Modify content on the page, e.g., the text in an input box
Move a DOM element
Animate a DOM element
Take measurements of an element, such as offsetHeight or getComputedStyle.
Change a CSS style
Is JavaScript a pass-by-reference or pass-by-value language?
The variable's data is always a reference for objects, hence, it's always passed by value. Hence, if you supply an object and alter its members inside the method, the changes continue outside of it. It appears as if it is passed by reference in this case. However, if you modify the values of the object variable, the change will not last, demonstrating that it is indeed passed by value.
If I say to differentiate JavaScript and jQuery in one line, how will you do it?
JavaScript is a language while jQuery is a library built in JavaScript that increases the convenience of developers in using the JavaScript language.
Explain Canvas.
Canvas in HTML is a pixel-based graphic, and it is one of the new features of HTML5.
It provides a space in the document where we can draw graphics by using JavaScript, and it is resolution-dependent, hence, the quality will be affected when it's zoomed or resized.
A canvas is a rectangular area on an HTML page. It is specified with a canvas element. By default, the <canvas> element has no border and no content; it is like a container.
<canvas id = "mycanvas" width ="200" height ="100"> </canvas> 
What is the role of deferred scripts in JavaScript?
The processing of HTML code while the page loads is disabled by nature till the script has halted. Your page will be affected if your network is a bit slow or if the script is very hefty. When you use Deferred, the script waits for the HTML parser to finish before executing it. This reduces the time it takes for web pages to load, making them appear more quickly.
What are JavaScript Design Patterns?
JavaScript design patterns are repeatable approaches for errors that sometimes arise when building JavaScript browser applications. They truly assist us in making our code more stable.
They are classified into 3 categories

Creational Design Pattern: The object generation mechanism is seen by the JavaScript Creational Design Pattern. They aim to make items that are appropriate for a certain scenario.
Structural Design Pattern: It explains how the classes and objects we've generated so far can be combined to construct bigger frameworks. This pattern makes it easier to create relationships between items by defining a straightforward way to do so.
Behavioral Design Pattern: It highlights the patterns of communication between objects in JavaScript. As a result, communication may be carried out with greater freedom.
Explain the difference between the .detach() and remove() methods in jQuery.
The detach() and remove() methods are the same, except that .detach() retains all jQuery data associated with the removed elements and .remove() does not. detach() is therefore useful when removed elements may need to be reinserted into the DOM later.
Define iframe in HTML
The iframe tag is written as. An iframe is used to display different document content inside the different document content in a rectangular region in the browser. When different document content is embedded into the current HTML content, it is known as an inline iframe. The src attribute contains the path to the document that occupies the inline iframe.
Read More: iframes in HTML
Advanced Frontend Interview Questions and Answers

1. If I want to optimize my website’s performance, what are all the things I need to do?

Well, this question can be answered from various perspectives. However, the most common answer to this will include
Compression of your code so that the file size gets reduced and it becomes faster to download.
Store the files that frequently come into play at a place so that every time a user visits the site, he/she is not required to download them. This concept is known as caching.
Use CDN i.e., Content Delivery Network. With this, your files will be distributed across multiple servers so that it will be convenient for them to download them from their situated place.
How does overflow: hidden work?
The overflow property in CSS is used for specifying whether the content has to be clipped or the scrollbars have to be added to the content area when the content size exceeds the specified container size where the content is enclosed. If the value of overflow is hidden, the content gets clipped past the size of the container, thereby making the content invisible.
Example
div {
 width: 100px;
 height: 100px;
 overflow: hidden;
}
Here, if the content of the div is very large and exceeds the height of 100px, the content gets clipped post 100px, and the rest of the content is not made visible.

What is the difference between prototypal and classical inheritance?
The Differences Between Prototypal and classical Inheritance are as follows:

Aspect	Prototypal Inheritance	Classical Inheritance	Example Language
Definition	Objects inherit directly from other objects using prototype chains.	Objects are created from classes and inherited via class hierarchies.	JavaScript
Structure	Flexible, object-based, and dynamic structure.	Rigid, class-based structure with constructors.	Java, C++
Inheritance Mechanism	Achieved by linking objects through their prototype.	Achieved by extending classes through defined hierarchies.	Python (class-based)
Flexibility	More flexible, allowing runtime extension or modification.	More static and defined at compile-time or class definition.	C#, Java
Usage	Used in prototype-based languages like JavaScript.	Used in classical OOP languages with strong typing.	C++, Java
Explain the various Ajax functions available in jQuery.
The following Ajax functions are available in jQuery
.ajaxStart() - register the handler to be called when the first Ajax request begins.
.ajaxStop() - register the handler to be called when all requests are complete.
.ajaxSuccess() - register the handler to be called when an Ajax request is completed.
What is a marquee in HTML?
A marquee allows you to put a scrolling text on a web page. According to the marquee settings, it is either scrolled horizontally across or vertically up or down your web page. To do this, place whatever text you want to appear scrolling within the marquee and marquee tags.
Differentiate between HTML tags and HTML attributes
HTML Tags	HTML Attributes
HTML tags are generally the starting and ending parts of the HTML code.	HTML attributes are used to define the character of the HTML elements.
They define a way to represent and hold HTML elements in the program.	They are generally used to provide additional styling to the element.
They begin with < symbol and end with > symbol.	They are always placed in the opening tag of an element.
They are like keywords, where every single tag has a unique meaning.	They provide various additional properties to the existing HTML element.
Read more: Basics of HTML

How is JavaScript different from Java?
Java	JavaScript
Java is a complete and strongly typed programming language used for backend coding.	JavaScript is a weakly typed, lightweight programming language (most commonly known as scripting language) and has more relaxed syntax and rules.
Java is an object-oriented programming (OOPS) language or structured programming language such as C and C++.	JavaScript is a client-side scripting language, and it doesn't fully support the OOPS concept. It resides inside the HTML documents and is used to make web pages interactive (not achievable with simple HTML).
Java creates applications that can run on any virtual machine (JVM) or browser.	JavaScript code can run only in the browser, but it can now run on the server via Node.js.
The Java code needs to be compiled.	The JavaScript code doesn't require to be complied.
Java objects are class-based. You can't make any program in Java without creating a class.	JavaScript Objects are prototype-based.
Java programs consume more memory.	JavaScript code is used in HTML web pages and requires less memory.
The file extension of the Java program is ".Java" and it translates source code into bytecodes which are then executed by JVM (Java Virtual Machine).	The JavaScript file extension is ".js" and it is interpreted but not compiled. Every browser has a JavaScript interpreter to execute the JS code.
Java supports multithreading.	JavaScript doesn't support multithreading.
Java uses a thread-based approach to concurrency.	JavaScript uses an event-based approach to concurrency.
What is Web Accessibility?
Web Accessibility is a way to design, develop, and code websites and web tools that people with disabilities can also use. It makes using the technology easy for certain people who have difficulties in listening or seeing. It makes sure that the web is also usable by those people with a wide range of disabilities.
What is the purpose of the z-index in CSS and how is it used?
z-index is used for specifying the vertical stacking of the overlapping elements that occur at the time of its positioning. It specifies the vertical stack order of the elements positioned which helps to define how the display of elements should happen in cases of overlapping.The default value of this property is 0 and can be either positive or negative.
Z-Index can take the following values apart from 0:

Auto: Sets the stack order equal to its parents.
Number: Orders the stack order.
Initial: Sets this property to its default value (0).
Inherit: Inherits this property from its parent element.
Remember that the elements having a lower value of z-index is stacked lower than the ones with a higher z-index.

How many tags in HTML can be used to separate a section of text?
There are mainly 3 tags in HTML to separate a section of texts.
<br> tag - Usually <br> tag is used to separate the line of text. It breaks the current line and conveys the flow to the next line
<p> tag - The <p> tag contains the text in the form of a new paragraph.
<blockquote> tag - It is used to define a large quoted section. If you have a large quotation, then put the entire text within <blockquote>............./blockquote tag.
What is tweeting in CSS?
Tweening is the process of filling the gaps between the key sequences, i.e. between the keyframes that are already created. Keyframes are those frames that represent the start and end points of animation action. Tweening involves generating intermediate keyframes between two images that give the impression that the first one has evolved smoothly to the second image. For this purpose, we use properties like transforms - matrix, translate, scale, rotate, etc.
What is meant by Progressive Rendering?
Progressive rendering is a process to boost the web page's rendering content process. Now the rendering process is utilized in modern web development to enhance the mobile data uses of the user, async HTML fragments, prioritizing visible content, and lazy loading of images.
How CoffeeScript is advantageous over JavaScript?
Write less, do more: CoffeeScript lets you write less code compared to JavaScript for the same functionality.
Easy to read: The syntax is simpler and cleaner, making it easier to understand than JavaScript.
Reliable: It’s a secure language that helps in building dynamic and stable applications.
Readable and maintainable: Offers cleaner syntax with operator aliases, making code easier to manage.
Class support: Unlike JavaScript’s prototypes, CoffeeScript supports classes and inheritance in a simpler way.
No var needed: Variables are declared without var, reducing scoping issues.
Less clutter: No need for semicolons or braces; indentation handles code blocks.
Library friendly: Fully compatible with JavaScript libraries, giving access to a wide range of tools.
Differentiate Null and Undefined in JavaScript.
Null	Undefined
A null is an object with no value.	Undefined is a type.
Null is an intentional absence of the value. It is one of the primitive values of JavaScript.	In Undefined, the value does not exist in the compiler. It is the global object.
typeof null; // "object"	typeof undefined; // "undefined"
Null is equal to undefined but not identical. null == undefined // true	null === undefined // false
A variable is defined as null when trying to convey that the variable is empty.	A variable is defined as undefined when we try to convey that the variable does not exist or is not available.
Null is also referred to as false. e.g. null ? console.log("true") : console.log("false") // false	When a variable is not assigned a value, it is called Undefined. e.g. var temp; if(temp === undefined) console.log("true"); else console.log("false");
Why do we use the “use strict”; statement?
The 'use strict' keyword is used to define strict mode at the start of the script. Strict mode is supported by all browsers.
Summary
In this Frontend tutorial, we saw the most commonly asked Frontend Interview Questions and Answers from basic to advanced levels. Frontend development can lead you to become a full-stack developer. So, to become a trained front-end developer, consider our Frontend Certification Program.

Senior Frontend Engineer
20 April, 2022 | Job Offer
Who We Are

Outdoorsy is the most trusted RV rental and outdoor experiences marketplace on the planet. We have grown from a lofty white-board idea in 2015 to over $1B in total transactions. With offices worldwide in the US, Canada, Australia, Europe and the UK, we’re mobilizing the 56+ million idle RVs and camper vans around the world to ensure everyone has the access, choice, and opportunity to safely spend more time outside.

Our mission: to make memorable outdoor experiences accessible to everyone.

Over 3,000,000 vacation nights were booked on Outdoorsy. And 93% of reviewed Outdoorsy bookings receive 5-star ratings. With over 600,000 families and adventure seekers — and 250,000 RVs, travel trailers, and campervans to choose from — that’s a lot of sunset selfies taken! Outdoorsy rentals are available in 4,800 cities in 14 countries and counting.

For all the RV, motorhome, and campervan owners in our community, we are creating jobs and helping individuals, couples, and families realize financially life-changing freedom. RV owners who rent their unused RV through Outdoorsy can earn upwards of $48,000 each year through their own rental business.

Outdoorsy has been recognized on the Forbes list of America’s Best Startup Employers in both 2020 and 2021.

Most importantly, we’re a company built on trust. Our core values include:

We always put the customer ahead of ourselves.
We do the right thing.
We keep it simple and amplify the positives.
We like winning.
We make long-term progress in the world.
We repay our gratitude in every community interaction.
We make the world a better place.
We unleash the power of our people.
Who You Are

A hands on engineer who enjoys frontend development that has built and refactored code bases to follow best practices. You’re a stickler for proper architecture and you’re not afraid to voice your opinion if something isn’t designed properly. Comprehensive test coverage is a must for any code. Security, stability and performance are always top of mind when building new functionality or reviewing pull requests from the team.

Ideal Experience

5+ years of experience.
Experience with Frontend technologies: React, Next.js and Typescript.
Parts of the apps are still in the process of being migrated out of Ember.
Experience building global consumer facing apps that are accessible.
Experience working in startup fast paced environments.
Creative problem solver who enjoys collaboration.
REST API Interfaces.
Good Git hygiene and comfortable with Github:
Feature Branches
Pull requests
Code Review
Comfortable working with tools such as Asana, Jira, etc.
Benefits:

We believe that life’s best memories are made outside and that, when you can’t be outside, you should be somewhere you feel a part of something bigger — as you would when soaking in the sunrise over the sandstone cliffs of the Grand Canyon. You should be somewhere you can test out new paths and be proud of the results, as you would when selecting a hiking route at Yosemite.

You should be somewhere that supports and challenges your skillset as much as it rewards it, as would be when summiting a 14er in Colorado.

Your happiness inside and outside our walls matters to us. That’s why we offer comprehensive benefits that make your life easier, including: full health insurance coverage (health, dental and vision), an open and friendly working environment, positive office culture, two (2) fully paid annual recreation vehicle trips a year, monthly social events.

As an equal opportunity employer, we value and strive for diversity as much at our company as we do in the outdoors. We do not discriminate on the basis of race, religion, color, national origin, gender, sexual orientation, age, marital status, veteran status, or disability status. We are champions of inclusivity and believe that stars shine the brightest when teams come together in a circle, as would be when gathering around a campfire.

We prioritize your productivity and support what makes you most successful, which is why each new addition to the Outdoorsy team spends their first week onboarding and meeting key members across company departments — from product and finance to engineering and marketing. We do this with one overarching goal in mind: no matter where you look, you’re guaranteed to see a smiling face looking back at you. And yes, that includes the bathroom mirror.

Our team connects personally to the idea of getting outside, escaping routine, and getting closer to the things that make us feel alive. We believe more time away from screens, traffic, and the trappings of modern life are crucial to mental wellness and — ultimately — personal health, happiness, and success.

When we’re not outside — preferably toasting with craft beers on our office’s rooftop courtyard —we’re dreaming about it. When we’re not on the road, we’re talking about it. When we’re not on a
trip, we’re planning for the next one. Preferably from the Outdoorsy embrace of Rainier, Arches, or Yellowstone — just a few of the names we’ve given our conference rooms.

100+ Вопросов Для Подготовки К Собеседованию На Frontend Разработчика
 7/6/2023
 4-minute read
HTTP
Что такое https?
Какие есть методы?
Какие коды ответов знаете и что они означают?
HTML
Что такое DOCTYPE?
Какие теги и атрибуты используете?
Как добавить ссылку которая будет открываться в новом окне?
Что делает тег link и для чего нужен?
Какие теги используются для создания таблиц?
Какие теги используются для создания списков?
Что такое блочные и строчные элементы и в чем их разница?
Как вставить другой сайт на страницу?
Что делает noscript тэг?
Что такое абсолютные и относительные пути?
Что такое семантика и семантичные элементы и какими пользуетесь?
Что такое метатеги и зачем нужны?
Как показывать разные изображения в зависимости от ширины браузера?
HTML регистрозависимый или регистронезависимый?
Что будет если написать код в котором не закрыт тег? Например:
This is a paragraph.

Что такое кодировка и на что она влияет и как ее задать?
Что такое Drag/Drop и как его реализовать в html?
Что такое canvas и как его использовали?
Какие способы оптимизации скорости загрузки страницы вы используете?
Как работает валидация форм в html?
Что такое “доступность” и для чего нужна?
Что такое СЕО оптимизация и как вы ее делаете?
Браузер
Какие браузерные api вы использовали?
Что такое Server Side Rendering?
Какие есть локальные хранилища данных в браузере?
Что такое WebWorkers, для чего нужны и как вы их использовали?
CSS
Что такое селектор и какие селекторы используете?
Какие комбинации селекторов знаете?
Что такое псевдокласс и какие знаете?
Что такое псевдоэлементы?
Что такое спрайты и для чего нужны?
Что такое css счетчики и зачем нужны?
Чем отличается единица измерения em и rem?
Чем отличается единица измерения vw и vh?
Что такое приоретизация стилей и как она работает?
Какой цвет получит параграф?
<style>
  #demo {
    color: blue;
  }
  .test {
    color: green;
  }
  p {
    color: red;
  }
</style>

<p id="demo" class="test">Hello World!</p>
Что делает свойство box-sizing?
Что такое !important?
Что такое css функции и какие знаете?
Что такое блочная модель?
Что такое иконочный шрифт и какие используете?
Как убрать стандартные точки у списка ul?
Чем отличается display: none и visibility: hidden?
Какие виды позиционирования знаете?
Что такое z-index и как работает и для чего нужен?
Что будет если задать элементу position: relative и top: 100px?
Что такое overflow и как работает?
Какие способы центрирования блока/контента знаете?
Что делает ключевое слово currentcolor?
Какие способы анимаций знаете?
Что делает object-fit?
Что такое css variables и как ими пользоваться?
Как адаптировать стили под разные разрешения экрана?
Что такое flexbox, для чего нужен и как вы его используете?
Что такое grid, для чего нужен и как вы его используете?
Как писать кроссбраузерный css?
Что такое float и для чего нужен?
JavaScript
В чем разница между var, const и let?
Какие типы данных есть в js?
Что такое ссылочные типы данных?
И в чем разница ссылочных типов от примитивных?
В javascript строгая типизация или гибкая?
Что делает оператор typeof?
Какие арифметические операторы есть в js? А инкремент и декремент?
А какие операторы присваивания есть помимо стандартного “=”?
Какие операторы сравнения знаете?
В чем разница между == и ===? Что лучше использовать?
Что получится в результате следующего вычисления "Hello" + 5
Какие логические операторы знаете?
Используете ли вы побитовые операторы?
Что такое контекст и область видимости?
Что такое this?
Как вызвать функцию с заданным this?
Что такое события в javascript и какие события знаете?
Как обрабатывать события?
Какие методы строк знаете?
Что такое шаблонная строка?
Что такое регулярные выражения?
Как вы используете регулярные выражения?
Какие методы массива знаете?
Как объеденить два массива?
Как отсортировать массив?
Какие условные операторы знаете?
Как прервать выполнение цикла?
Как пропустить итерацию цикла?
Что такое преобразование типов?
Как работает обработка ошибок в javascript?
Что такое hosting?
Что такое “strict mode” и что делает?
Чем стрелочная фукнция отличается от обычной функции объявленой через function?
Как вы дебажити свой код?
Что такое асинхронность и как работает в js?
Что такое Promise и как им пользоваться?
Какие методы Promise знаете?
Что такое async/await?
Что такое DOM?
Что такое всплытие событий?
Какие способы взаимодействия с DOM знаете?
Как можно получить dom элемент?
Какие способы вставки / удаления dom элементов знаете?
Что такое ajax?
