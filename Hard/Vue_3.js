RedDeveloper
Блог
Вопросы
Теги
Поиск...
Как обработать запрос ошибки 404 в vuejs SPA с сервером nginx
Вопросы
NGINX
Как обработать запрос ошибки 404 в vuejs SPA с сервером nginx
Я настроил свой SPA vue-cli версии 3, чтобы любые запросы, не найденные в моем файле routes.js, по умолчанию использовали мое представление 404, как показано в официальном документация:

Вставлено внизу файла routes.js:

{ // catches 404 errors
  path: '*',
  name: '404',
  component: () => import(/* webpackChunkName: "NotFoundComponent" */ './views/NotFoundComponent.vue'),
},
Вставлено в конфигурационный файл nginx:

location / {
  try_files $uri $uri/ /index.html;
}
Это успешно предупреждает пользователя о том, что запрошенная страница не существует.

Мой вопрос:

Я хотел бы, чтобы компонент ошибки 404 возвращал заголовок ответа 404 (текущий возвращает код состояния 200), а также регистрировал эту ошибку в файле nginx error.log. Я полагаю, что это возможно только при использовании конфигурации nginx. Кто-нибудь достиг этой цели?

Я заметил, что эта проблема рассматривается на следующей странице в официальных документах vue-cli, но она касается только серверов node express, а не nginx: https://router.vuejs.org/guide/essentials/history-mode.html#caveat

 24.09.2018 01:04
4
2
10 042
3
Данный вопрос помечен как решенный
 Ответы 3
 Ответ принят как подходящий
Я думаю, что это похоже на решение Node - вы должны повторить все свои маршруты в конфигурации nginx, чтобы правильно вернуть код состояния 404, основная идея заключается в том, что вы должны использовать модификатор «равно» в местах и ​​определить error_page для возврата того же файла index.html, но с 404 код состояния, пример:

server {
    listen       80;
    server_name  localhost;
    root /my/dir/with/app
    error_page  404 /index.html;

    location = / {
        try_files $uri $uri/ /index.html;
    }

    location = /books {
        try_files $uri $uri/ /index.html;
    }

    # example nested page
    location = /books/authors {
        try_files $uri $uri/ /index.html;
    }

    # example dynamic route to access book by id
    location ~ /books/\d+$ {
        try_files $uri $uri/ /index.html;
    }
}
Вероятно, эту конфигурацию можно упростить или улучшить, потому что я не очень хорошо разбираюсь в конфигурации nginx, но она работает.

 24.09.2018 11:34
Я решил это простым способом, вырвавшись из экосистемы Vue, иначе это не сработает или потребует много усилий.

Сделайте следующий маршрут в своем маршрутизаторе Vue:

{
  path: '*',
  name: 'PageNotFound',
  component: PageNotFound
}
Компонент PageNotFound должен иметь следующий код:

<script>
export default {
  name: 'PageNotFound',
  created() {
    window.location.href = "/404/"
  }
}
</script>
Конфигурация nginx должна возвращать 404 при получении маршрута /404/:

server {
    ...
    location ~ ^/404/$ {
        return 404;
    }
    ...
}
Я не думаю, что это сработает в среде рендеринга на стороне сервера. В таком случае вам может потребоваться поместить оператор, содержащий window.location.href, в метод mounted.

 07.02.2019 13:11
Для тех, кто сталкивается с этой проблемой, и чтобы сэкономить часы головной боли.
Предостережения с приведенными выше ответами

Простая перезагрузка страницы с новым URL-адресом (например, /notfound) не решает эту проблему, поскольку это означает, что потенциальный паук уже получил 200.
Простое копирование маршрутов - это половина решения. Это работает с URL-адресами, которые никогда не изменятся, и путем проверки правильности структуры URL-адресов. Так, например, он может проверить, имеет ли идентификатор книги в books/123 правильный формат, но не может проверить, действительно ли books/123 существует в бэкэнде.
Вот два подхода, которые могут решить вышеуказанные проблемы.

Попросите Nginx сделать зеркальный подзапрос к бэкэнду, чтобы проверить, действительно ли существует ресурс. Затем всегда вернет index.html, но со статусом из ответа подзапроса. Это очень сложно с Nginx, так как из-за его конструкции очень сложно комбинировать ответы.
Обратный API должен возвращать index.html для Accept: text/html. Тогда Nginx просто нужно переслать ответы.
Первое решение - заноза в заднице для тех, кто не знаком с Nginx. Требуется получить Lua с OpenResty, и тогда вы снова столкнетесь со всевозможными причудами с тем, как работает Nginx. В результате вы получаете много трудночитаемого кода, и это усложняет задачу, если вы еще больше захотите ввести кеширование.

Второе решение проще. Единственный возможный минус заключается в том, что это означает, что вы не можете просматривать API из браузера, если это что-то в настоящее время у вас есть.

nginx.config (когда API отвечает index.html на Accept: text/html)

    location / {
      try_files $uri $uri/ @fallback;
    }

    location @fallback {
      rewrite ^(.*) /api$1 break;
      proxy_set_header "Accept" "text/html";
      proxy_pass http://localhost:8000;
    }
В этом случае Nginx сначала попытается обслужить файл, а в случае, если он не найдет его локально, выполнит откат.

В резервном варианте мы переписываем URI, чтобы он соответствовал ожиданиям внутреннего сервера. В этом примере я добавляю api/ к каждому запросу. Затем я добавляю заголовок Accept: text/html, чтобы серверный API отвечал index.html вместо JSON. И, наконец, мы напрямую возвращаем ответ клиенту.

Это дает следующие преимущества:

Он не полагается на Nginx, поэтому может работать с любым обратным прокси. Самое главное, что он не полагается на прокси-сервер, чтобы иметь определенные функции.
Работает даже во время разработки без запущенного Nginx.
Легко писать тесты для. Вам просто нужно протестировать свой серверный API на то, чтобы выдавать index.html при наличии Accept: text/html для любой конечной точки.
Не требует вручную обновлять конфигурацию Nginx с каждой новой конечной точкой.
Кроме того, вы можете изменить конфигурацию, чтобы Nginx следил за перенаправлениями изнутри, и, возможно, даже не просматривая серверный API для URL-адресов, которые никогда не меняются.

 22.05.2020 20:16
Другие вопросы по теме
Импорт файла json вызывает ошибку в моем приложении Vue
Как сгруппировать данные из атрибутов с помощью циклов for в VueJS
Vuetify extra margin <v-select>
Как использовать тернарный оператор в привязке Vue
Какой инструмент использовать для выделения синтаксиса с помощью vue js
Неправильная папка компиляции стиля Encore Vue.js
Vue js отправляет данные между двумя компонентами без реквизита
Wordpress API: как получить пост по категориям с помощью vue js на laravel
Vue Nuxt nuxtServerInit не загружает данные
Ссылка привязки Vue в компоненте без рендеринга
Похожие вопросы
Перенаправить http-запрос на веб-сайт из iframe с обратным прокси-сервером перед сайтом
Поддомен certbot и nginx установлен на centos7
Облако google переустановило nginx по ошибке, как я могу вернуть его обратно
Docker nginx healthcheck не работает, но скрипт работает, когда проверка работоспособности не определена
Простой сервер Nginx на докере возвращает 503
Почему моему прокси-серверу Nginx удалось найти веб-сервер моего узла, поскольку мой docker-compose не предоставляет ни одного порта веб-сервера в сети?
Укажите субдомен в каталог на том же сервере с NGINX
Сервер Express не отвечает с правильными заголовками cors
Как запустить админку Wordpress на поддомене сайта?
Как изменить среду приложения Rails в Digital Ocean?
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
Как остановить создание vue cli "report.html"?
Вопросы
VUE.JS
Как остановить создание vue cli "report.html"?
Vue CLI v3 всегда создает "dist / report.html" при сборке для производства. Это отчет анализатора пакетов веб-пакетов.

Я не могу найти способ остановить создание этого файла.

Как избежать создания "report.html" при создании приложения Vue CLI 3 для производства?

Вот мои скрипты package.json:

"scripts": {
    "dev": "npm run serve",
    "serve": "vue-cli-service serve",
    "build": "vue-cli-service build",
    "lint": "vue-cli-service lint",
    "test:e2e": "vue-cli-service test:e2e",
    "test:unit": "vue-cli-service test:unit"
  },
 25.10.2018 02:32
2
2
2 684
3
Данный вопрос помечен как решенный
 Ответы 3
Убедитесь, что ваш сценарий npm build не содержит параметра --report.

"scripts": {
    "serve": "vue-cli-service serve",
    "lint": "vue-cli-service lint",
    "build": "vue-cli-service build",
    "report": "vue-cli-service build --report",
}
 25.10.2018 02:40
 Ответ принят как подходящий
Пока что единственный способ отключить его - через vue.config.js:

pluginOptions: {
    webpackBundleAnalyzer: {
        analyzerMode: "disabled"
    }
},
Было бы неплохо узнать, почему эта вещь всегда включена в Vue CLI 3.

 25.10.2018 04:32
Я хотел бы поделиться некоторыми обновлениями Vue CLI 3.8.4:

Vue CLI
webpack-bundle-analyzer является зависимостью от @vue/cli-service@^3.9.0
По умолчанию vue-cli-service build не генерирует ни dist/report.html, ни dist/report.json.
Согласно Документация Vue CLI:
--report генерирует dist/report.html
--report-json генерирует dist/report.json. Кстати, этот JSON-файл может быстро стать огромным.
Оба аргумента можно суммировать (генерируются как report.html, так и report.json). Когда я тестировал, суммирование обоих аргументов значительно увеличило время сборки
Анализатор пакетов Webpack
Vue CLI не запускает автоматически веб-сервер для предварительного просмотра файлов отчетов. Если вы хотите использовать webpack-bundle-analyzer стандартным способом, необходимо обновить конфигурацию веб-пакета:

// in {root folder}/vue.config.js
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

module.exports = {
  configureWebpack: {
    plugins: [new BundleAnalyzerPlugin()]
  }
};
Даже без --report или --report-json, report.html всегда будет генерироваться, и порт 8888 должен быть доступен, так как http://localhost:8888 будет запрошен

 23.07.2019 08:27
Другие вопросы по теме
Как добавить eslint в существующий проект vue-cli?
Использование Vue CLI в Cloud9 IDE (контейнер): «Недопустимый заголовок хоста»
Производственная сборка vue-cli не отображает статические изображения
Cypress.js e2e проверить все элементы не определены
Связанное местоположение точки останова неверно при отладке vue в Chrome
Как получить intellisense для методов модулей, которые импортируются из псевдонима в .vue
Как использовать шаблон как из текущего файла, так и из файла, который импортирован как миксины в vue-cli
Невозможно распространить объект с добавлением babel-plugin-transform-object-rest-spread для настройки vue cli 3
Как я могу сообщить Vue-cli, где находится точка входа в мое приложение?
Модульное тестирование компонента vue, использующего vue-cli, не может тестировать родительские методы?
Похожие вопросы
Как создать компонент, отображающий несколько строк внутри таблицы в React или Vue
Коммит Vuex не работает без параметра полезной нагрузки
Используйте TinyMCE с Vue
Nativescript Sentry не получает данные пользователя при сбое приложения
Как использовать плагин Vue в магазине?
Как добавить eslint в существующий проект vue-cli?
ApexCharts Как динамически обновлять масштаб оси Y?
Добавление v-меню к кнопке заставляет ее исчезнуть в Vuetify
Vue-router: перейти к вложенному состоянию / маршруту по имени и параметрам
Как вызвать функцию в v-если мой не работает
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
HTML-заголовок сгенерированного набора проектов Vue Cli 3
Вопросы
VUE.JS
HTML-заголовок сгенерированного набора проектов Vue Cli 3
В настоящее время после создания проекта с помощью Vue CLI 3 он называется «Vue App».

Если я установлю заголовок в созданном хуке через название документа, браузер все равно будет мигать «Vue App» перед отображением заголовка, установленного через document.title.

Ищете способ установить заголовок HTML для проекта, сгенерированного Vue CLI 3, без предварительного мигания заголовка по умолчанию "Vue App".

 25.10.2018 13:06
18
0
9 044
3
Данный вопрос помечен как решенный
 Ответы 3
 Ответ принят как подходящий
Вы можете установить заголовок в /public/index.html статически.

Установка пустой строки в index.html и сохранение обновления в хуке избавляет от мигания.

 25.10.2018 13:28
Вы можете добавить postinstall в раздел scripts на вашем package.json с помощью следующей команды: "postinstall": "cp ./public/index.html ./node_modules/@vue/cli-service/lib/config/index-default.html"

 09.04.2020 04:35
также Вы можете использовать пользовательский index.html по-другому, изменив свой vue.config.js:


module.exports = {
  publicPath: '/',
  chainWebpack: config => {
    config
      .plugin("html")
      .tap(args => {
        args[0].template = './public/index.html'
        return args
      })
  }
};

 16.04.2020 06:50
Другие вопросы по теме
Как остановить создание vue cli "report.html"?
Как сделать HTTP-запрос GET видеопотока в тег img html с помощью axios?
Vuex - получать сообщение об ошибке при запуске, но все работает как положено?
Производственная сборка vue-cli не отображает статические изображения
Вывод нескольких сборок веб-пакетов с помощью vue-cli
Разверните приложение Vue.js на страницах gitlab, даже если развертывание прошло успешно, ничего не отображается
Связанное местоположение точки останова неверно при отладке vue в Chrome
Импорт / экспорт переменных javascript для проекта vuejs
Как получить intellisense для методов модулей, которые импортируются из псевдонима в .vue
Vue cli 3 - ProvidePlugin не работает (vue.config.js)
Похожие вопросы
Как получить исходный элемент в обработчике события нажатия кнопки? iView
Отключить выбранные параметры в v-autocomplete в vuetify
Как с помощью Vue.js очистить метод, который отклонен с помощью lodash?
Vee-validate Проверять только некоторые поля
Ассоциативные массивы - доступ к параметрам
Created () {метод axios.get не работает при попытке отобразить контент из БД
Auth :: user () - свойство или метод "{username}" не определены [Vue, Laravel]
Element-ui view не может обновляться сразу в области слота
Правильный способ установки значений на основе сервера в Vuex
Радиокнопка Vue.js не отмечена по умолчанию
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
Как обеспечить включение магазина vuex в мою сборку?
Вопросы
JAVASCRIPT
Как обеспечить включение магазина vuex в мою сборку?
У меня есть приложение Vue, использующее vue cli 3. Я следую руководству здесь, чтобы попробовать создать свое приложение с vue-cli-service build --target wc --name my-element [entry].

Чтобы проверить результат, у меня есть файл index.html:

<!DOCTYPE html>
<html lang = "en">
  <head>
    <meta charset = "UTF-8" />
    <meta name = "viewport" content = "width=device-width, initial-scale=1.0" />
    <meta http-equiv = "X-UA-Compatible" content = "ie=edge" />
    <title>Document</title>
  </head>

  <body>
    <my-project></my-project>
    <script src = "https://unpkg.com/vue"></script>
    <script src = "my-project.min.js"></script>
  </body>
</html>
Но при открытии index.html в моем браузере появляется следующая ошибка: Как обеспечить включение магазина vuex в мою сборку?

И это указывает на этот раздел my-project.min.js:

Как обеспечить включение магазина vuex в мою сборку?

Мой main.js:

import "@babel/polyfill";
import Vue from "vue";
import MyProject from "./MyProject.vue";
import router from "./router";
import store from "./store/index";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(MyProject),
}).$mount("#app");
Мой магазин разделен на отдельные файлы для действий, геттеров, мутаций и состояния:

Как обеспечить включение магазина vuex в мою сборку?

И store / index.js выглядит так:

import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import state from "./state";
import * as getters from "./getters";
import * as mutations from "./mutations";
import * as actions from "./actions";

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
});
Во время разработки все в проекте работает отлично, но когда я создаю проект, кажется, что vuex добавляется неправильно.

 08.11.2018 21:21
5
1
1 402
3
Данный вопрос помечен как решенный
 Ответы 3
Я думаю, эта линия может доставить вам проблемы

import store from "./store/index";

попробуйте изменить его на:

import store from "./store";

Часть index подразумевается, и мне интересно, сбрасывает ли она по какой-то причине CLI.

 08.11.2018 22:42
 Ответ принят как подходящий
Похоже, вам просто нужно включить CDN для Vuex (после CDN для Vue) в ваш index.html.

Согласно этой странице Vuex - Установка # Прямая загрузка / CD

Include Vuex after Vue and it will install itself automatically

В документах Vue CLI 3 - Цели сборки говорится, что Vue является внешним, и вы позаботились об этом с помощью CDN для Vue, но я предполагаю, что то же самое относится к любым другим библиотекам, которые подключены к Vue с помощью оператора Vue.use() (например, Vue Router, если ваш компонент определяет дочерние маршруты).

<!DOCTYPE html>
<html lang = "en">
  <head>
    <meta charset = "UTF-8" />
    <meta name = "viewport" content = "width=device-width, initial-scale=1.0" />
    <meta http-equiv = "X-UA-Compatible" content = "ie=edge" />
    <title>Document</title>
  </head>

  <body>
    <my-project></my-project>
    <script src = "https://unpkg.com/vue"></script>
    <script src = "https://unpkg.com/vuex"></script>
    <script src = "my-project.min.js"></script>
  </body>
</html>
Загрузка магазина в веб-компоненты
Поскольку в режиме разработки main.js добавляет ваш магазин в Vue, в режиме prod store необходимо внедрить внутрь веб-компонента. Следующего дополнения достаточно, чтобы дать вам работающее свойство this.$store, см. Магазин не работает в веб-компонентах

<template>
 ...
</template>

<script>
import store from "../store/index";

export default {
  props: [...],
  store,
  ...
}
 09.11.2018 01:23
Простым решением было бы использовать

Vue.use(Vuex)

внутри main.js вместо store/index.js

Я надеюсь ответ будет полезным

 28.05.2020 09:04
Другие вопросы по теме
Как сделать резервный img в v-img в Vuetify?
Как добавить внешний скрипт в компонент vue?
Перехватчики Axios и асинхронная загрузка
Совместное использование локального хранилища с другими системами
Роль пользователя маршрутизации Vue JS, потерянный пользователь и данные при перезагрузке
Компонент позиции поверх фиксированного app.vue
Почему управление состоянием (Flux) не использует статические функции вместо именованных свойств
Как создать адаптивный макет в vuetify?
Вести журнал rootState и всех мутаций, которые произошли в смонтированном хуке компонента?
О том, что изменение не запускается в шаблоне Vue
Похожие вопросы
Javascript getElementById undefined
Рендеринг данных JSON в таблицы HTML
Как зациклить массив в JavaScript
Простая функция, которая зацикливает массив до определенного индекса, а затем суммирует все до найденного индекса
Сравните ключ в объекте в массиве с другим ключом в объекте в другом массиве и объедините их вместе, если значения равны
Ng-mouseleave, но с клавиатурой
Выполнить java-программу в сценарии bash для цикла, используя неожиданный токен nodejs
Создание объектов из источника событий
Firebase Auth photoURL всегда возвращает значение null
Как я могу заставить компонент повторно визуализироваться с помощью хуков в React?
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
Как заставить тестовое покрытие отображать все файлы vue в Vue-cli 3 с помощью jest
Вопросы
VUE.JS
Как заставить тестовое покрытие отображать все файлы vue в Vue-cli 3 с помощью jest
Мне сложно настроить Vue CLI 3 с Jest для демонстрации тестового покрытия. Я сделал все возможное, чтобы он заработал, но он все еще не покрывает:

Ran all test suites.
----------|----------|----------|----------|----------|-------------------|
File      |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
----------|----------|----------|----------|----------|-------------------|
All files |        0 |        0 |        0 |        0 |                   |
----------|----------|----------|----------|----------|-------------------|

=============================== Coverage summary ===============================
Statements   : Unknown% ( 0/0 )
Branches     : Unknown% ( 0/0 )
Functions    : Unknown% ( 0/0 )
Lines        : Unknown% ( 0/0 )
Ниже приведен отрывок из моей конфигурации:

jest.config.js:

module.exports = {
  moduleFileExtensions: [
    'js',
    'jsx',
    'json',
    'vue'
  ],
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
    '^.+\\.jsx?$': 'babel-jest'
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  snapshotSerializers: [
    'jest-serializer-vue'
  ],
  testMatch: [
    '**/tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)'
  ],
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  testURL: 'http://localhost/'
}
package.json:

....
"scripts": {
  "test:unit": "nyc vue-cli-service test:unit"
},
"nyc": {
  "check-coverage": true,
  "per-file": true,
  "lines": 90,
  "statements": 90,
  "functions": 90,
  "branches": 90,
  "include": [
    "src/**/*.{js,vue}"
  ],
  "exclude": [
    "src/*.js"
  ],
  "reporter": [
    "lcov",
    "text",
    "text-summary"
  ],
  "extension": [
    ".js",  
    ".vue"
  ],
  "verbose": true,
  "cache": true,
  "all": true
}
Как правильно настроить Vue CLI 3 и Jest для отображения тестового покрытия?

 11.11.2018 15:48
15
0
14 534
3
 Ответы 3
У Jest есть собственные средства покрытия, поэтому удалите nyc из package.json:

"scripts": {
  // "test:unit": "nyc vue-cli-service test:unit" // DELETE
  "test:unit": "vue-cli-service test:unit"
},
// "nyc": {...} // DELETE
Чтобы включить покрытие Jest, установите collectCoverage и collectCoverageFrom в jest.config.js (согласно vue-test-utils документы):

collectCoverage: true,
collectCoverageFrom: [
  'src/**/*.{js,vue}',
  '!src/main.js', // No need to cover bootstrap file
],
При запуске yarn test:unit консольный вывод должен выглядеть следующим образом:

console screenshot

Демо GitHub

Также обратите внимание, что в выводе консоли Jest перечислены только файлы, содержащие исполняемый JavaScript (methods для Vue SFC). Если вы работаете с шаблоном, сгенерированным Vue CLI по умолчанию, HelloWorld.vue не содержит methods, поэтому он не будет указан. На скриншоте выше я добавил в HelloWorld.vue неиспользуемый метод, чтобы продемонстрировать отчет Jest о непокрытых строках.

 11.11.2018 16:12
Хотя ответ @ tony19 совершенно верен, вам не обязательно добавлять что-либо в свою настраиваемую конфигурацию jest. Для проекта, созданного с помощью службы Vue CLI, простое добавление следующего скрипта в package.json работало нормально, и покрытие проявляется для компонентов Vue:

"test:coverage": "vue-cli-service test:unit --coverage",
Вы можете добавить дополнительные параметры, такие как изменение репортера (ов) и наличие отдельной конфигурации Jest только для этого сценария. Чтобы получить полный список опций, вы можете запустить в своем терминале следующую команду:

 npx vue-cli-service test:unit help
И среди этих опций вы найдете collectCoverage и collectCoverageFrom, которые могут помочь вам сохранить все в сценарии, вместо того, чтобы иметь собственный файл конфигурации.

 30.04.2019 17:40
Если вы не используете плагин Vue CLI @vue/cli-plugin-unit-jest, вы все равно можете создать отчет о тестовом покрытии для компонентов Vue. Вы можете настроить Jest следующим образом:

jest.config.js

module.exports = {
  moduleFileExtensions: ['js', 'json', 'vue'],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.vue$': 'vue-jest'
  },
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{js,vue}', '!src/main.js']
}
Затем вы можете создать отчет о покрытии, просто запустив npx jest.

Отчеты о покрытии будут выглядеть следующим образом:

(1) Терминал

(2) HTML

 05.08.2019 00:26
Другие вопросы по теме
Vue js vuelidate не может прочитать настраиваемую проверку внутри схемы динамической проверки
Чтение данных из базы данных mongodb с использованием vuejs и nodejs
Почему функция не вызывается с помощью v-on click в vue js?
Vuejs Prop постоянно меняется
Загрузить еще кнопку в vuejs
Приложение Vue.js в докер-контейнере с горячей перезагрузкой
Vue-carousel goToPage для программного перехода на выбранную страницу
Nuxtj - Лучшая практика для загрузки всей информации о пользователях после процесса аутентификации
Как передать компонент в список Vuex?
Я не могу интегрировать файл запроса js в vue
Похожие вопросы
Vue js vuelidate не может прочитать настраиваемую проверку внутри схемы динамической проверки
Получение значения идентичности из базы данных с помощью обещаний
Чтение данных из базы данных mongodb с использованием vuejs и nodejs
Почему функция не вызывается с помощью v-on click в vue js?
MapActions с полезной нагрузкой
Vuejs Prop постоянно меняется
This. $ set не может сортировать после
Загрузить еще кнопку в vuejs
Vuetify - добавить наложение слоя загрузки при событии щелчка
Приложение Vue.js в докер-контейнере с горячей перезагрузкой
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
«Ошибка анализа: неожиданный токен <...» с использованием VueCli3 и airbnb eslint
Вопросы
VUE.JS
«Ошибка анализа: неожиданный токен <...» с использованием VueCli3 и airbnb eslint
Я знаю, что это может показаться повторяющимся вопросом, я все еще получаю этот тип ошибок eslint после того, как попробую следующее:

https://github.com/prettier/prettier/issues/3720 (я уже установил eslint-plugin-vue)

Ошибка синтаксического анализа Vue.js eslint.: Неожиданный токен (не совсем связано с моим вопросом, но я все равно пробовал)

https://github.com/vuejs/eslint-plugin-vue/issues/186

«Неожиданный токен <» для VueJS, работающего с Webpack

Вот часть моей настройки package.json:

"devDependencies": {
    "@vue/cli-plugin-babel": "^3.0.5",
    "@vue/cli-plugin-eslint": "^3.0.5",
    "@vue/cli-plugin-unit-jest": "^3.0.5",
    "@vue/cli-service": "^3.0.5",
    "@vue/eslint-config-airbnb": "^4.0.0",
    "@vue/test-utils": "^1.0.0-beta.20",
    "babel-core": "7.0.0-bridge.0",
    "babel-eslint": "^10.0.1",
    "babel-jest": "^23.6.0",
    "eslint": "^5.8.0",
    "eslint-config-airbnb-base": "^13.1.0",
    "eslint-plugin-import": "^2.14.0",
    "eslint-plugin-vue": "^5.0.0-0",
    "vue-template-compiler": "^2.5.17"
  },
  "eslintConfig": {
    "root": true,
    "env": {
      "node": true
    },
    "extends": [
      "plugin:vue/essential",
      "@vue/airbnb"
    ],
    "rules": {},
    "parserOptions": {
      "parser": "babel-eslint",
      "ecmaVersion": 6
    }
  },
Вот мой файл .eslintrc.js:

module.exports = {
  parserOptions: {
    sourceType: 'module',
    allowImportExportEverywhere: true,
  },
  rules: {
    'no-console': 0,
  },
  plugins: ['vue'],
};
Вот подробная версия ошибки eslint:

error: Parsing error: Unexpected token < at src/App.vue:1:1:
> 1 | <template>
    | ^
  2 |   <div id = "app">
  3 |     <router-view/>
  4 |   </div>
Вот мой исходный код App.vue:

<template>
  <div id = "app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'BuilderApp',
  data() {
    return {
      dragEvents: ['drag', 'dragstart', 'dragend', 'dragover', 'dragenter', 'dragleave', 'drop'],
    };
  },
  mounted() {
    // prevent default action for all defined dragEvents
    if (this.dragAndDropCapable()) {
      this.dragEvents.forEach((dragEvent) => {
        document.getElementById('app').addEventListener(dragEvent, (e) => {
          e.preventDefault();
          e.stopPropagation();
        }, false);
      });
    }
  },
  methods: {
    dragAndDropCapable() {
      const testDiv = document.createElement('div');
      return (('draggable' in testDiv)
          || ('ondragstart' in testDiv && 'ondrop' in testDiv))
          && 'FormData' in window
          && 'FileReader' in window;
    },
  },
};
</script>

<style>
.filter-disable .filter-count {
  background: #dadada;
}
</style>
Я не уверен, что мне не хватает.

 03.12.2018 21:43
6
1
4 921
3
 Ответы 3
Вам не хватает "синтаксического анализатора" в вашем файле .eslintrc.

Вот мой .eslintrc

{
  "parser": "vue-eslint-parser",
  "parserOptions": {
    "ecmaVersion": 7,
    "sourceType": "module"
  }
}
vue-eslint-parser doc

 21.04.2019 05:10
У меня была такая же проблема, и она была исправлена ​​добавлением файла .eslintrc.json с чем-то вроде:

{
    "rules": {
        "no-console": 0,
        "quotes": [2, "double", "avoid-escape"]
    },
    "parser":"vue-eslint-parser",
    "parserOptions": {
        "ecmaVersion": 7,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true,
            "modules": true
        }
    }
}
А потом мне пришлось установить eslint-plugin-vue после это.

Я нашел это решение в здесь и здесь.

И я забыл упомянуть, что я тоже слежу за этим один, после всех изменений.

Надеюсь, это поможет довольно просто, но я этого не знал.

 04.02.2020 23:50
Смените ваш methods: {...} на methods: function(){...}

У меня была аналогичная проблема с:

created: {
    url_parts = window.location.href.split("/")
    slug = url_parts[3]
    url = `/api/inventory/product/${slug}`

    axios
      .get(url, slug)
      .then(...)
}

Я получал следующую ошибку:

Failed to compile.

./src/components/StoreInfo.vue
Module Error (from ./node_modules/eslint-loader/index.js):

/Users/alkadelik/Documents/Dev/Django/div/cart_cli/src/components/StoreInfo.vue
  30:4  error  Parsing error: Unexpected token, expected ","

  16 | 
  17 |     url_parts = window.location.href.split("/")
> 18 |     slug = url_parts[3]
     |     ^
  19 |     url = ""
Ошибка исчезла, когда я преобразовался в:

created: function(){
    const axios = require('axios'); // had to introduce this

    // also notice the introduction of 'let'
    let url_parts = window.location.href.split("/")
    let slug = url_parts[3]
    let url = `/api/inventory/product/${slug}`

    axios
      .get(url, slug)
      .then(...)
}
 04.05.2020 12:01
Другие вопросы по теме
В чем разница между плагином ESLInt и правилом ESLInt? Нужно ли сначала создать собственный плагин для создания настраиваемого правила?
Eslint no-unused-var для фабрики декораторов
Считается ли импорт большого количества вещей делом, специфичным для React?
Materialize-css с помощью React, инициализация компонентов с использованием метода жизненного цикла React
Идентификатор 'normal_push' не в верблюжьем регистре
Как добавить валидацию опор, чтобы избавиться от ошибки линтинга?
Где Firebase указывает с помощью ESLint?
ESlint: компонент должен быть записан как чистая ошибка функции, когда я создаю компонент класса с использованием redux
Разрушение по имени аргумента от объекта
Отображение списка в React и получение ошибки Eslint «нет неиспользуемых выражений»
Похожие вопросы
Переключение между компонентами в приложении Vue
Разделение массива объектов на основе уникальных комбинаций двух свойств
Добавить аутентификацию Google в базу данных Firebase Real Time
Vuejs, отображающий данные API с использованием привязки атрибутов
Preloader в приложении Vue.js?
Vue загружает все чанки по первому запросу
Глобальная шина событий с использованием Vuex - всегда уведомлять подписчиков
Динамическое переключение видимости строки таблицы - bootstrap-vue
Программно установить фокус на кнопке в Vuetify
Как передать данные компоненту, который уже объявлен в default.vue, и вызвать его с других страниц?
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
VSCode не меняет двойные кавычки на одинарные в <template> при использовании Vetur, Prettier и Vue-Cli 3
Вопросы
VUE.JS
VSCode не меняет двойные кавычки на одинарные в <template> при использовании Vetur, Prettier и Vue-Cli 3
Я пытаюсь настроить свой редактор VSCode для автоформатирования моего кода Vuejs. Я использую расширение Vetur, Красивее расширение и Расширение ESLint.

Проблема в том, что когда я сохраняю свои файлы .vue, одинарные кавычки автоматически меняются на двойные кавычки в моих элементах <template>:

Когда я пишу такой код, а потом сохраняю ...

<template>
    <section>
        <section v-if='errored'>
        ...snip...
</template>
VSCode автоматически заменяет одинарные кавычки на двойные в разделе .vue template следующим образом:

<template>
    <section>
        <section v-if = "errored"> <-------- 
        ...snip...
</template>
И тогда я получаю предупреждения и ошибки для остальной части кода <template>. Однако код в разделах <script> и <style> однофайловых компонентов .vue остался нетронутым / и / или исправлен правильно .... это просто раздел <template>, который имеет указанную выше проблему. Итак, у меня правильные настройки?

Мои настройки:

Я установил свой конфигурационный файл Prettier в корне проекта .prettierrc.js следующим образом:

module.exports = {
    singleQuote: true
};
Мой .eslintrc.js выглядит так:

module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    'plugin:prettier/recommended',
    '@vue/prettier'
  ],
  rules: {
    'no-console': 'off',
    'no-debugger': 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
};
А потом в моем Пользовательские настройки VSCode у меня есть:

...snip..
"vetur.validation.template": false, <-- turn off Vetur’s linting feature and rely on ESLint + Prettier, instead
  "eslint.validate": [
    {
      "language": "vue",
      "autoFix": true
    },
    {
      "language": "html",
      "autoFix": true
    },
    {
      "language": "javascript",
      "autoFix": true
    }
  ],
  "eslint.autoFixOnSave": true,
  "editor.formatOnSave": true
И файл package.json приложения содержит следующие devDependencies:

"devDependencies": {
    "@vue/cli-plugin-babel": "^3.2.0",
    "@vue/cli-plugin-eslint": "^3.2.1",
    "@vue/cli-service": "^3.2.0",
    "@vue/eslint-config-prettier": "^4.0.1",
    "node-sass": "^4.9.4",
    "sass-loader": "^7.1.0",
    "vue-template-compiler": "^2.5.17"
  }
 07.12.2018 16:53
5
0
4 660
3
 Ответы 3
Единственный способ заставить это работать - это удалить следующее из моего .eslintrc.js

'plugin:prettier/recommended',
'@vue/prettier'
 17.01.2019 20:01
Я создал файл с именем .prettierrc.js в каталоге, в котором запущен npm run serve in.

Этот файл содержит:

module.exports = {
    singleQuote: true,
    trailingComma: "es5",
    printWidth: 200
};
Сейчас это в основном работает, за исключением вызовов методов, длина которых превышает 200. Тогда pretier забывает запятую в конце.

 06.03.2019 14:35
Смена форматтера по умолчанию с красивее на ветур сработала для меня

 13.12.2020 18:25
Другие вопросы по теме
Добавьте фразу в конец каждого вхождения в Visual Studio Code, используя Regex, который начинается с, не заканчивается и не содержит специального знака
Запустите "код". когда вы набираете "код" в bash или терминале
Сборка тортов - Как решить эту проблему «MSBUILD: ошибка MSB1009: файл проекта не существует»
Ссылка на изменение кода VS для торговой площадки
VSCode API: встроенные входы в определенных строках
Как удалить пустые строки в VS Code?
Отладчик VS Code Java
Python VsCode: не удается найти parser.pyx
Visual Studio Code - Android SDK не может быть найден
Нет модуля с именем <имя модуля> при запуске вложенного модуля
Похожие вопросы
Это хорошая практика или необходимость защищать API с помощью аутентификации, даже если данные не являются конфиденциальными?
Модальный компонент в VueJS
Есть ли способ версионировать интерфейс Vue и проверить с помощью бэкэнда, является ли это последней версией?
Vue-i18n: интерполяция компонентов с помощью тегов html
Приращение проблемы с реактивностью Nuxt / Vuex / Vue
ОПЦИИ 404 при загрузке файла Vue.js
Vue проверяет, вызывает ли действие другое действие с помощью spyOn
Хорошее решение для виртуализированного просмотра чата в Vue.js
Есть ли способ загружать папки с помощью testcafe?
Как решить require не определен?
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
Vue Js 2 / Vue-CLI 3 / При размещении показывает пустую пустую страницу
Вопросы
VUE.JS
Vue Js 2 / Vue-CLI 3 / При размещении показывает пустую пустую страницу
Приложение Vue Js отлично работает в режиме разработки, но когда я загружаю его на сервер, оно просто отображает пустую страницу. Все ресурсы отображаются в консоли разработчика. Я использую пакет vue-router.

VueJs 2 / Vue-CLI-3

Ниже мой App.vue

<template>
  <div id = "app">
    <m-nav/>
    <router-view></router-view>  
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  name: 'app',
  components: {
    'm-nav':Navbar

  }
}


</script>



<style>

</style>
Это мой main.js

import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import HomePage from './components/HomePage.vue'
import Brochure from './components/Brochure.vue'
import Register from './components/Register.vue'

Vue.config.productionTip = false

Vue.use(VueRouter);

const routes = [
    {
        path:'/',
        component: HomePage
    },
    {
        path:'/download',
        component: Brochure
    },
    {
        path:'/register',
        component: Register
    }
];

const router = new VueRouter({
    routes,
    mode: 'history'
});

new Vue({
    router,
    render: h => h(App),
}).$mount('#app');
после запуска npm run build отображается пустая страница, хотя я вижу кое-что в DOM <div id = "app"></div>

http://prntscr.com/lvasvo

Я не понимаю, где ошибся! Проект завершен, но на этой части застрял! :(

 15.12.2018 14:40
6
1
3 564
3
 Ответы 3
Просто столкнитесь с той же проблемой с проектом vue-cli3. И моя основная причина возникновения этой проблемы заключается в том, что мое приложение не развертывается в корне домена, а не на подпутье.

Есть несколько сложных настроек:

vue.config.js (это исключение vue-cli3): для установки publicPath:/my-app/;

router.js (при условии, что ваш файл конфигурации vue-router таков): для установки base:/my-app/; И остерегайтесь режима роутера история:

для этого режима нужен дополнительный конфигурация на стороне сервера, я использую nginX, это моя конфигурация:
location /my-app {
         alias /var/www/my-app;
         try_files $uri /index.html last;
         index index.html;
}
И остерегайтесь различий между alias и root.

этот режим не поддерживает относительный путь publicPath:./ в vue.config.js.
 06.05.2019 09:25
следуйте этим советам:

используйте <% = BASE_URL%> для тегов скриптов и ссылок, которые написаны на index.html
создайте vue.config.js в корне проекта и настройте свой общедоступный путь для режима производства и разработки, например:
module.exports = {
  publicPath:
    process.env.NODE_ENV === "production" ? "/" : "/"
  }
};
просто используйте относительный путь, чтобы узнать больше, прочтите эту ссылку:

https://cli.vuejs.org/config/#publicpath

создать config.vue.js

 11.04.2020 13:19
В моем случае проблема заключалась в функции Router.beforeEach, которая была у меня в файле index.js внутри папки маршрутизатора для добавления защиты маршрута. Мне пришлось переписать его после обновления с Vue 2 до Vue 3, чтобы он заработал.

 07.09.2021 06:53
Другие вопросы по теме
Обслуживайте страницу 404 с приложением, созданным с помощью Vue-CLI
Как настроить webpack через vue-cli 3 для использования sass
Настройте Vue CLI для использования внешних библиотек и инструментов разработчика с исходными картами
Проблема с декоратором VueJS + TypeScript
«Ошибка команды ERROR: npm install --loglevel error» при попытке выполнить «vue create»
Загрузчик webpack-modernizr-loader с Vue CLI 3
Периодическая ошибка «TypeError:« exports »is-read-only» с Webpack и Vue-CLI
Как исключить конкретный файл из загрузчика babel при использовании настройки vue-cli?
Ошибка: не удается найти модуль css-selector-tokenizer
Ошибка Vue js: свойство или метод «смузи» не определены в экземпляре, но используются во время рендеринга
Похожие вопросы
Как правильно внедрить элемент приложения в веб-пакет? - Получение [предупреждение Vue]: не удается найти элемент: #app
Как я могу протестировать вызов API в vuejs с помощью jest?
Получение данных из другой базы данных (Android и Nativescript vue js)
Как правильно использовать режим модуля Vuex для Nuxt JS?
Доступ к папке с ресурсами с помощью параметра URL-адреса компонента
Изменение порядка элементов DOM на экранах разных размеров
Как выполнить модульное тестирование компонента Vue, который использует Axios (или другое асинхронное обновление)?
Разделение строк из текстового поля и отображение их в раскрывающемся меню W / Vue JS
Добавление файлов в хранилище firebase в vue.js из форм
Почему «moduleName» в статистике Webpack включает «+ 4 модуля»?
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
Vm не определен - vueJS с vueCLI
Вопросы
JAVASCRIPT
Vm не определен - vueJS с vueCLI
Я использую vue-cli для своего проекта. vue-route и vuex также добавлены в проект. Маршруты хорошие рабочие. пока я проверяю данные хранилища vuex в пути, я получаю ошибку vm is not defined. Вы можете найти блоки кода ниже.

main.js

// Application
var vm = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

window.vm = vm;
router.js

import Vue from 'vue'
import Router from 'vue-router'
import auth from './controller/authController'
import Login from './views/Login.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', component: Dashboard, beforeEnter: auth.checkAuth },
    { path: '/login', component: Login }
  ]
})
Проблема начинается с этого момента. Auth js имеет определение vm из-за доступа к хранилищу vuex.

авторизация js

function checkAuth() {
  vm.$store.getters.getServerPath();
.... bla bla 
.... bla bla 
}
Я надеюсь, что кто-нибудь даст мне совет. При необходимости могу поделиться более подробной информацией.

 19.12.2018 11:54
1
5
2 671
3
Данный вопрос помечен как решенный
 Ответы 3
Вы можете экспортировать и импортировать экземпляр vue, а не полагаться на доступность оконного объекта.

main.js

// Application
var vm = new Vue({
  router,
  store,
  render: h => h(App)
})
vm.$mount('#app')

export const vueInstance = vm
auth.js

import { vueInstance } from '@/main'
function checkAuth() {
  vueInstance.$store.getters.getServerPath();
.... bla bla 
.... bla bla 
}
 19.12.2018 12:21
 Ответ принят как подходящий
Я думаю, что более стандартный подход в этом случае - импортировать и экспортировать сам магазин vuex, а не экземпляр vue.

Итак, в вашем auth.js вы импортируете магазин, а затем напрямую получаете доступ к его получателям:

import store from '@/app/store/main.store'; // or whatever path it is
function checkAuth() {
  store.getters.getServerPath();
.... bla bla 
.... bla bla 
}
Хотя я считаю, что это лучше, чем экспорт экземпляра (или хранилища) в window, вы спрашиваете, почему vm не определен в вашем коде. В этом я не уверен,

вы пробовали ссылаться на vm прямо из window? Я действительно не знаю, но код vue-cli или babel, вероятно, устанавливают strict mode, поэтому вам нужно явно ссылаться на свойства window из window:

function checkAuth() {
  window.vm.$store.getters.getServerPath();
.... bla bla 
.... bla bla 
}
 19.12.2018 12:35
Похоже, вы используете VueCLI3 при установке. Попробуйте это, не вставляя в window..

main.js

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
router.js

import auth from './auth'
...
{ path: '/', component: Dashboard, beforeEnter: auth.checkAuth }
auth.js

import store from './store'
...
function checkAuth() {
  store.getters.getServerPath();
}
export default checkAuth
 19.12.2018 12:50
Другие вопросы по теме
Как создать разные версии одного и того же приложения VUEJS
Импорт файла Vanilla js в компонент Vue.js
Создание загружаемых QR-кодов в интерфейсе java-скрипта
Vuejs переключает класс на тело при нажатии кнопки в компонентах
У меня вопрос о структуре компонентов Vue
О vue-cli 3.x main.js
Как вернуть значение из цикла. js, vuejs
Как сделать обратное тому, что обычно делает слот vuejs в соответствии с документацией?
Chartist.js отображение подсказок в vue.js
Объявление поля данных vue-property-decorator vuejs
Похожие вопросы
Используйте файл xlsx, загруженный клиентом (листовка)
Диаграмма React VX: React не распознает опору `xScale` в элементе DOM
Как не показывать null в форме
Число регулярных выражений между
Могу ли я иметь бэкэнд javascript / node без запуска на нем сервера?
Сопоставление и отображение нескольких массивов внутри объекта - Reactjs
Новое окно без фокуса
Как дать API-интерфейс выборки внутри переключателя в React Native?
Angular получает массивы с числами в качестве ключей и присваивает их моим переменным
Состояние переменных между вызовами функций в Javascript
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
Как глобально объявить jQuery внутри проекта Vue-CLI 3?
Вопросы
JAVASCRIPT
Как глобально объявить jQuery внутри проекта Vue-CLI 3?
Я видел много вопросов об этом на SO и в других местах, но пока мне не повезло.

Для небольшого контекста я создал веб-сайт SPA на основе проекта Vue, который я создал с помощью «старой» команды. Не помню, какой, но выглядел он примерно так:

vue init webpack <my project>

Недавно я понял, что мне будет проще поддерживать, обновлять и улучшать Vue-CLI 3 по разным контекстным причинам, поэтому я установил @vue/cli, создал новый проект и начал копировать / вставлять файлы из моего старого проекта в новый. .

В старом проекте был каталог build с различными конфигурационными файлами webpack, и мне нужно было, чтобы jQuery был установлен глобально для пакета, который я хотел использовать, поэтому я добавил следующее в «базовую» конфигурацию Webpack.

new webpack.ProvidePlugin({
  $: 'jquery',
  jQuery: 'jquery'
}),
Однако с новым проектом все, что у меня есть в качестве файла конфигурации, - это babel.config.js и vue.config.js в корне проекта, нет ни build, ни каталога config.

Я попытался установить jQuery глобально с помощью следующих строк в моем файле main.js:

import jQuery from 'jquery'

window.$ = window.jQuery = jQuery
global.$ = global.jQuery = jQuery
Но каждый раз, когда я перезагружаю свою страницу, я получаю следующее сообщение:

jQuery is not defined

Итак, пока я использую CDN-версию jQuery, но мне не нравится это решение.

Как мне продолжить работу над проектом Vue-CLI 3?

заранее спасибо

 20.12.2018 12:57
3
4
1 668
3
 Ответы 3
Вы можете перейти на public / index.html и добавить тег скрипта в тело с маршрутом к вашему файлу jquery или cdn. Если вы поместите его в общедоступную папку jquery, это будет выглядеть так:

<body>
    <div id = "app"></div>
    <script type = "text/javascript" src = "/jquery/jquery-3.4.1.min.js"></script>
</body>
Я не уверен, что это именно то, что вам нужно, но это сделает его доступным во всем вашем проекте.

 13.05.2020 22:03
Если вы используете плагины JQuery, вы должны сделать это в своем main.js:

/*
* If using Jquery plugins they will expect to be available in the global namespace, 
* which isn’t the case when you import/require it. So manually assign jquery to 
* window. Use require instead of import because the imports are hoisted to the
* top of a file by the compiler, which would break VueJS code.
*/
const $ = require('jquery')
window.jQuery = window.$ = $;
 05.11.2020 01:35
Вы можете использовать плагины Vue. Это позволяет добавлять новое свойство к каждому отдельному компоненту.

В main.js

import Vue from 'vue';
import jQuery from 'jquery';

Vue.use({
  install (V) {
    V.$jQuery = V.prototype.$jQuery = jQuery
  }
})
Тогда вы можете использовать jQuery везде в компоненте.

В MyComponent.vue

import Vue from 'vue'

export default {
  mounted () {
    this.$jQuery('h1').text('Hello World')
    Vue.$jQuery('h1').text('Hello World')
  }
}
Еще один файл js.

В util.js

import Vue from 'vue'

Vue.$jQuery('h1').text('Hello World')
 05.11.2020 03:51
Другие вопросы по теме
Остановить тайм-аут, когда пользователь щелкает и удерживает изображение
Условная карусель с гладкой каруселью
Как распознать jQuery .change () в списке выбора в IE?
Таблица фильтров с раскрывающимся списком
Почему не удается получить элементы ввода при добавлении динамического ввода с помощью jquery.find (": input")?
Как вызвать событие щелчка по выбранному элементу? (не изменить)
JQuery найти, если ближайший элемент что-то содержит, затем добавить CSS
Загрузка файла json в приоритетном порядке в Javascript Typescript
Как уменьшить значение переменной?
Добавить изображения как событие рядом в полном календаре jquery
Похожие вопросы
Как работает Facebook FB.api?
Как правильно сделать экран загрузки с помощью React Redux
Остановить тайм-аут, когда пользователь щелкает и удерживает изображение
Правильное место для объявления многих модулей, предоставляющих аналогичные услуги в javascript
Ошибка подключения с использованием функции Google Cloud и Google Cloud SQL
Нужно сосредоточить внимание на div в React
Доступ к условно визуализированному элементу холста в React для построения графика
Как я могу зафиксировать, что выполнение кода на стороне сервера завершено?
Динамически загружать строку углового шаблона в компонент
Условная карусель с гладкой каруселью
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
Vue CLI - сохранить конфигурационный файл как внешний после компиляции
Вопросы
VUE.JS
Vue CLI - сохранить конфигурационный файл как внешний после компиляции
Я разрабатываю приложение с Vue CLI. Это приложение представляет собой веб-интерфейс, который должен взаимодействовать с Rest API на плате.

Итак, поскольку доска будет двигаться, IP-адрес доски будет меняться со временем в зависимости от того, где я нахожусь.

Это текущее дерево моего проекта:

Vue CLI - сохранить конфигурационный файл как внешний после компиляции

Конфигурация IP содержится в файле Settings.js:

export const Settings = {
    // Server configuration
    SERVER_IP: '127.0.0.1',
    SERVER_PORT: '9000',

    SERVER_PROTOCOL: 'http', // http or https

    // Website configuration
    DEBUG_MODE: true
};
И в своих файлах я импортирую этот IP-адрес со следующим утверждением:

import {Settings} from '../../Settings'
const ip = Settings.SERVER_IP;

// Do stuff
Это прекрасно работает. Но проблема в том, что мне приходится все перекомпилировать при смене IP. Поскольку Settings.js скомпилирован с другими файлами JS.

Итак, я хотел бы знать, есть ли способ сохранить файл конфигурации, который останется в каталоге dist / и будет прочитан моим JS-приложением во время выполнения. Так что мне не придется перекомпилировать все каждый раз при изменении IP-адреса моего сервера приложений.

Тай за помощь :)

 02.01.2019 11:33
8
0
4 179
3
 Ответы 3
Вы заранее знаете полный список IP-адресов? Если это так, вы можете создать функцию, которая возвращает правильный IP-адрес в зависимости от логики времени / местоположения.

В противном случае вы можете попробовать переместить файл настроек в общую папку, добавить в свой файл .gitignore, убедившись, что вы ссылаетесь на него в своем public / index.html. Теперь он будет находиться вне скомпилированного приложения Vue, и к нему можно будет получить доступ из Vue как глобальную переменную настроек.

Поэтому вместо import {Settings} from '../../Settings' вы должны ссылаться на window.Settings.

например const ip = window.Settings.SERVER_IP;

Таким образом, вы можете редактировать настройки напрямую, без необходимости каждый раз перекомпилировать.

 03.01.2019 17:48
вы можете создать файл config.json в общедоступный каталог, а затем в основном js вы можете принести его и загрузить файл конфигурации. Теперь ваш dist создан с помощью этого config.json.

fetch('/config.json').then(res => res.json()).then(config => {
     .......
})
 08.11.2019 08:36
Мое решение для Vue основано на решение для Angular.

Вы можете иметь переменные среды точно так же, как используют серверные разработчики.

Но разница в том, что внутренний код выполняется внутри сервера, а внешний код - это не что иное, как файлы на диске, которые вы удаляете как статические, не давая им даже возможности запускать и проверять переменные env перед удалением.

Но ваш код выполняется внутри браузера. Так что это идеальное и единственное подходящее место для зависти.

Однако вы должны подготовить этот env заранее - в соответствии с вашим внутренним env.

Вот план:

Вы исключаете из компиляции свой файл настроек (см. Ниже).
Ваш файл настроек «конструирует» env перед запуском приложения Vue.
Из вашего кода вы используете этот env, а также можете обновить этот env во время выполнения.
Итак, вот ваша окончательная структура кода:

root_project_dir:
├─> cfg
│   └── settings.js
├─> public
│   ├── favicon.ico
│   └── index.html
├─> src
│   ├── App.vue
│   ├─> assets
│   │   └── logo.png
│   ├─> components
│   ├─> layouts
│   ├── main.js
│   ├─> plugins
│   ├─> router
│   ├─> store
│   └─> views
└── vue.config.js
Создайте файл настроек cfg / settings.js:

/*
This file goes as an asset without any of compilation even after build process.
Thus, it can be replaced in a runtime by different file in another environment.

Example for Docker:
  docker run -v ./local_cfg_dir:cfg image:tag
*/

(function(window) {
  window.__env = window.__env || {};

  window.__env.api = {
    "url": "http://127.0.0.1:8000",
    "timeout": 80000
  };
  window.__env.captcha = {
    "enabled": true,
    "key": "Mee1ieth1IeR8aezeiwi0cai8quahy"
  };
  window.__env.rollbar = {
    "enabled": true,
    "token": "zieriu1Saip5Soiquie6zoo7shae0o"
  };
  window.__env.debug = true;
})(this);
Предоставьте Плагин Webpack Copy инструкцию для копирования файлов cfg на этапе npm запустить сборку в vue.config.js (вы не можете изменить это имя):

module.exports = {
  chainWebpack: config => {
    config.plugin("copy").tap(([pathConfigs]) => {
      pathConfigs.unshift({
        from: "cfg",
        to: "cfg"
      });
      return [pathConfigs]})
  },
  transpileDependencies: ["vuetify"]
};
Проверьте полученную конфигурацию webpack и убедитесь, что она была применена (внизу вывода):

vue inspect
Теперь, когда вы соберете проект, вы увидите его в результирующем каталоге:

dist
 ├─> cfg
 │   └── settings.js
 ├─> css
 │   ├── app.06b1fea6.css
 │   └── chunk-1f2efba6.a298b841.css
 ├── favicon.ico
 ├─> img
 │   └── logo.09e0e4e1.png
 ├── index.html
 └─> js
     ├── app.8fc75c19.js
     ├── app.8fc75c19.js.map
     └── chunk-vendors.1ab49693.js.map
Таким образом, вы можете запустить эту настройку в общедоступный / index.html, прежде чем запускать приложение в том же окне:

  <body>
    <script src = "/cfg/settings.js"></script>
    <div id = "app"></div>
    <!-- built files will be auto injected -->
  </body>
Теперь оно у вас в окне:



И из любого места в коде вы можете добраться до этого env:

Vue.use(VueReCaptcha, { siteKey: window.__env.captcha.key })
Примечание:

Если вы хотите быть «DevOps-совместимым», вам нужно иметь настройки во вложенном каталоге (cfg в нашем примере). Это даст возможность монтировать в Kubernetes / Swarm без перезаписи всего каталога dist.

 03.01.2020 11:03
Другие вопросы по теме
Vuejs - предварительная отрисовка SEO
Ионная служба, показывающая пустую страницу
Внедрение пряжи для управления зависимостями и запущенное обновление пряжи - получение предупреждений жизненного цикла и сборка теперь не выполняется
Проблема компиляции веб-пакета при обновлении angular до последней версии
Tinymce внезапно перестает работать, когда я добавляю загрузчик css в конфигурацию webpack
Импортировать scss в компонент реакции на SSR
Узел JS с веб-пакетом
Как разделить медиа-запросы в конфигурации webpack?
Электрону не удалось загрузить ресурс
Ошибка синтаксического анализа модуля: неожиданный токен при рендеринге компонентов React
Похожие вопросы
Сохранить значение изменяется, но не влияет на вычисляемое свойство в компоненте
Событие vuejs @click внутри всплывающей подсказки не работает
Vuejs - предварительная отрисовка SEO
Как заполнить HTML-код с жестко заданными / статическими параметрами выбора vuetify?
Имя свойства состояния Vuex - соглашение или требование?
Как устранить ошибку «Модуль не найден: ошибка: не удается разрешить« fs »» в nuxt.js?
Показать больше меньше с Vuejs
Вложенный массив Firestore
Сбой проекта Boilerplate Vue на router-link и router-view
Конфликт конфигурации ESLint с использованием TypeScript и Prettier в проекте Nuxt
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
Как убрать предупреждение [vue/no-use-v-if-with-v-for]?
Вопросы
JAVASCRIPT
Как убрать предупреждение [vue/no-use-v-if-with-v-for]?
Итак, у меня есть элемент div, который поддерживает v-for и v-if, он работает нормально и вывод правильный, но это предупреждение меня очень раздражает:

[vue/no-use-v-if-with-v-for] Переменная 'prit_type_ids' внутри директивы 'v-for' должна быть заменена вычисляемым свойством, которое вместо этого возвращает отфильтрованный массив. Вы не должны смешивать «v-for» с «v-if».

Есть ли способ убрать это предупреждение? Я уже добавил этот блок кода в свой .eslintrc.js.

Источник: https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/no-use-v-if-with-v-for.md#wrench-options

Я поставил его в правильном месте? или нет.

rules: {
// allow debugger during development
'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
"vue/no-use-v-if-with-v-for": ["error", {
    "allowUsingIterationVar": true
  }],
}
В общем, с этим у меня есть вложенный цикл, где конкретный элемент в первом цикле сравнивает значение из второго цикла, если оно совпадает, он помещает данные из 2-го цикла в соответствующий столбец в 1-м цикле .

Вот код:

    <div class = "columns is-mobile" v-if = "!loading">
      <div class = "column" v-for = "x in firstSection" v-bind:key = "x[0]">
        <div class = "box">
          <article class = "media">
            <div class = "media-content">
              <div class = "content">
                <div class = "tags has-addons">
                  <span class = "tag is-medium">Version number: </span>
                  <span class = "tag is-dark is-medium">{{ x[0] }}</span>
                </div>
                <div class = "tags has-addons">
                  <span class = "tag is-medium">Version Effective Date: </span>
                  <span class = "tag is-dark is-medium">{{ x[1] }} </span>
                </div>
                <div class = "tags has-addons">
                  <span class = "tag is-medium">Version Expiration Date: </span>
                  <span class = "tag is-dark is-medium">{{ x[2] }}</span>
                </div>
              </div>
              <hr>
               <a class = "button is-dark  is-fullwidth is-medium" @click = "showPackages" v-html = "xPackageButton"> </a>
            </div>
          </article>
        </div>
        <div v-if = "xSeen">
          <div class = "notification" v-for = "(pack, index) in packages" v-bind:key = "index" v-if = "pack[0] == x[0]">
              <p class = "is-size-7"> <strong> {{ pack[2] }} </strong> </p> 
              <p class = "is-size-7">  {{ pack[1] }} </p>
              <hr>
              <p class = "is-size-7">  {{ pack[3] }} </p>
              <p class = "is-size-7">  {{ pack[4] }} </p>

              <div v-for = "(param, index) in prit_type_ids" v-bind:key = "index" v-if = "param[1] == pack[4]">
              <p class = "is-size-7">  {{ param[0] }}  </p> 
              </div>
          </div>
        </div>
      </div>
    </div>
Коды работают нормально, но дело в том, что у меня все еще есть предупреждение, хотя я уже добавил запись в правила.

Я просто хочу удалить предупреждение.

Спасибо, парни.

 31.01.2019 04:29
13
0
19 511
3
Данный вопрос помечен как решенный
 Ответы 3
Вы можете отключить выборочные правила eslint в своем <template>, добавив HTML-комментарий, подобный этому:

<!-- eslint-disable vue/no-use-v-if-with-v-for,vue/no-confusing-v-for-v-if -->
Вы также можете использовать:

<!-- eslint-disable -->

... code that breaks linting ...

<!-- eslint-enable -->
 31.01.2019 05:05
 Ответ принят как подходящий
Вам нужно отключить правило в параметрах конфигурации eslintrc следующим образом:

rules: {
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "vue/no-use-v-if-with-v-for": "off"
}
Ссылка: https://eslint.org/docs/user-guide/configuring#configuring-rules

Насколько я понимаю, вы следовали инструкциям по установке "allowUsingIterationVar": true, который не работает. Это связано с тем, что вы уже указали "error" в синтаксисе литерала массива, который включает правило в соответствии с руководством по настройке eslint. Как указано на справочной странице, указанной выше, первый элемент в массиве всегда указывает серьезность правила.

В приведенном выше примере конфигурации я использую простую строку для отключения правила следующим образом:

"vue/no-use-v-if-with-v-for": "off"
 20.02.2019 10:20
Насколько я понимаю, вы специально спрашивали, как игнорировать это предупреждение, но это напоминание для тех, кто может получить больше пользы от исправления, а не от игнорирования:

Предупреждение есть по уважительной причине, оно предупреждает вас, потому что этот подход снизит производительность, поэтому вам лучше последовать совету линтера и заменить его вычисляемым свойством, которое будет быстрее из-за того, как кэширование вычисляемого свойства

https://vuejs.org/v2/guide/computed.html#Computed-Caching-vs-Methods

 06.01.2021 09:22
Другие вопросы по теме
Ползунок ценового диапазона в Vue
Невозможно прочитать свойство '$moment' неопределенного
Разбиение на страницы с помощью Vue JS
Путь sockjs-node перезаписывается с помощью baseUrl webpack-dev-server
Сдвиг маркера по заданному пользовательскому вводу
Как я могу импортировать файл JS из папки в моем проекте Vue JS?
Как исправить ошибку установки Vue в информации Laravel
Добавление вертикальных линий на диаграммы
Как создать линейную диаграмму Google с помощью оболочки vue-google-charts в Vue.js?
Добавьте обещание неопределенного метода в массив, который будет разрешен позже в Promise.all()
Похожие вопросы
Преобразование DateTime C# в DateTime JavaScript
Javascript в теге script не выполняется за проходом прокси-сервера nginx
Экспорт * как... синтаксис дает мне ошибку в коде Visual Studio
Как заменить «NaN» пробелом в массиве
Проблема с использованием локального .csv в d3 в реакции
Как расширить интерфейс TypeScript и восстановить его
Декораторы не вызываются для каждого экземпляра класса
Оповещение SweetAlert отображается частично в поле зрения
Анализ различий в синтаксисе облачного кода, вызывающих сбой запроса
Репликация Eloquent в Laravel с изменением некоторых столбцов
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
Как поместить код Vue в тег <code> в vue
Вопросы
JAVASCRIPT
Как поместить код Vue в тег <code> в vue
Я впервые делаю пакет npm, делаю демо-версию пакета и хочу привести пример использования компонента.

когда я помещаю использование компонента внутри тега pre и code, как это

показывает эту ошибку

Templates should only be responsible for mapping the state to the UI. Avoid placing tags with side-effects in your templates, such as <style>, as they will not be parsed.
это мой код (App.vue):

<template>
<pre>
    <code>
        <template>
            <vlider
            :id = "'first'"
            :vlider-data = "slider"
            :theme = "'theme-dark'"
            v-model = "inputRange"
            @click = "vliderClick()"
            >
                <template> slot = "bullet" slot-scope = "bullet"
                    <label>{{ bullet.data.label }}</label>
                    <i
                    class = "em"
                    :class = "[`em-${bullet.data.extras.icon}`]"
                    ></i> 
                    <a target = "_blank" :href = "bullet.data.extras.learnMore">Learn more ?</a>
                </template>
            </vlider>
        </template>
        <script>
            import Vlider from "vlider";

            export default {
                name: "app",
                components: {
                    Vlider
                },
                data() {
                    return {
                        inputRange: null,
                        slider: [
                            {label: "Angry", color: "#ffc300", extras: { icon: 'angry', learnMore: 'http://localhost/'}},
                            {label: "Expressionless", color: "#ffb0fe", extras: { icon: 'expressionless', learnMore: 'http://localhost/'}},
                            {label: "Astonished", color: "#ff6bd6", extras: { icon: 'astonished', learnMore: 'http://localhost/'}},
                            {label: "Confounded", color: "#ff9d76", extras: { icon: 'confounded', learnMore: 'http://localhost/'}},
                            {label: "Okay?", color: "#51eaea", extras: { icon: 'face_with_raised_eyebrow', learnMore: 'http://localhost/'}},
                            {label: "Blush", color: "#fb3569", extras: { icon: 'blush', learnMore: 'http://localhost/'}}
                        ]
                    };
                },
                watch: {
                    inputRange() {
                        console.info(this.inputRange)
                    }
                },
                methods: {
                    vliderClick() {
                        console.info(`clicked`)
                    }
                }
            };
        </script>
        <style>
            import "vlider/src/sass/vlider.scss"
        </style>
    </code>
</pre>
</template>

<script>
import Vlider from "vlider";
...
</script>
Я ожидаю, что это будет работать так же, как обычный тег в HTML. Я пытался загрузить некоторые пакеты кода npm, это все еще не работает, мне нужна ваша помощь и предложения, спасибо за вашу помощь.

 18.02.2019 16:50
0
0
9 321
3
Данный вопрос помечен как решенный
 Ответы 3
 Ответ принят как подходящий
пользователь v-htmlдокументы и не забывайте использовать \ после каждого разрыва строки, чтобы продолжить строку и игнорировать '' как текстовый контекст с помощью \'

так и будет:

    <div v-html = "example">
     <pre>
      ...
     </pre>    
    </div>
или

<div>
  {{example}}
</div>
и example вы определяете его внутри data()

 18.02.2019 17:25
Предполагается, что директива v-пре говорит Vue не компилировать эту часть шаблона, но Vue, похоже, по-прежнему выдает те же предупреждения, если его содержимое включает (например) тег <script>. В любом случае он не показывает свое содержимое как необработанный HTML. Вы захотите вытащить это в переменную данных, а нет использовать здесь v-html (что делает противоположное тому, что вы хотите):

new Vue({
  el: '#app',
  data() {
    return {
      codeSample: `
<template>
    <vlider
    :id = "'first'"
    :vlider-data = "slider"
    :theme = "'theme-dark'"
    v-model = "inputRange"
    @click = "vliderClick()"
    >
        <template> slot = "bullet" slot-scope = "bullet"
            <label>{{ bullet.data.label }}</label>
            <i
            class = "em"
            :class = "['em-\${bullet.data.extras.icon}']"
            ></i> 
            <a target = "_blank" :href = "bullet.data.extras.learnMore">Learn more ?</a>
        </template>
    </vlider>
</template>
<script>
    import Vlider from "vlider";
    export default {
        name: "app",
        components: {
            Vlider
        },
        data() {
            return {
                inputRange: null,
                slider: [
                    {label: "Angry", color: "#ffc300", extras: { icon: 'angry', learnMore: 'http://localhost/'}},
                    {label: "Expressionless", color: "#ffb0fe", extras: { icon: 'expressionless', learnMore: 'http://localhost/'}},
                    {label: "Astonished", color: "#ff6bd6", extras: { icon: 'astonished', learnMore: 'http://localhost/'}},
                    {label: "Confounded", color: "#ff9d76", extras: { icon: 'confounded', learnMore: 'http://localhost/'}},
                    {label: "Okay?", color: "#51eaea", extras: { icon: 'face_with_raised_eyebrow', learnMore: 'http://localhost/'}},
                    {label: "Blush", color: "#fb3569", extras: { icon: 'blush', learnMore: 'http://localhost/'}}
                ]
            };
        },
        watch: {
            inputRange() {
                console.info(this.inputRange)
            }
        },
        methods: {
            vliderClick() {
                console.info('clicked')
            }
        }
    };
</\script>
<style>
    import "vlider/src/sass/vlider.scss"
</style>
        `
    }
  }
});
<script src = "https://cdnjs.cloudflare.com/ajax/libs/vue/2.5.17/vue.js"></script>
<div id = "app">
  <pre><code>{{codeSample}}</code></pre>
</div>
Встраивание больших фрагментов HTML в переменную данных, конечно, немного неуклюже и требует некоторого экранирования различных фрагментов (например, включенного тега ${...} и </script> в вашем примере). Это может быть проще в обслуживании, если вы импортируете эту строку HTML через ajax или как импорт веб-пакета, а не напрямую встраиваете ее внутрь data(), как я сделал здесь.

(Вы также можете взглянуть на vue-highlightjs, если хотите раскрасить синтаксис ваших примеров кода; это также зависит от наличия исходного кода в переменной данных компонента, а не встроенного в шаблон.)

Или легкий способ
Если вы хотите избежать HTML-кода раньше времени, вы можете вставить его прямо в шаблон и использовать v-pre, чтобы указать Vue игнорировать любые символы усов во встроенном HTML-коде:

new Vue({
  el: '#app'
});
<script src = "https://unpkg.com/vue@latest/dist/vue.js"></script>
<div id = "app">

  <pre><code v-pre>&lt;script&gt;... {{foo}} &lt;/script&gt;</code></pre>

</div>
 18.02.2019 17:49
Поэтому я исправляю это, используя этот веб-сайт для кодирования моего кода https://mothereff.in/html-entities.

а затем я использую закодированную версию, помещаю ее в переменную и передаю в v-html, а vue обрабатывает ее как строку и отображает как строку

<pre>
  <code v-html = "yourCodeVariable">
  </code>
</pre>
...
<script>
...
data() {
  return {
     yourCodeVariable: `your encoded html code here`
  }
}
...
 19.02.2019 07:37
Другие вопросы по теме
Как я могу хранить набор компонентов для некоторых отдельных приложений vue?
Динамическое назначение стилей элементу DOM в Polymer 3.0
Отключить отдельные куски для css, vue cli 3, webpack 4
Значение данных vue js возвращает неопределенное значение внутри метода
Передать данные из события в VueJS
Как передать массив объектов дочернему компоненту в VueJS 2.x
Как совместить vue-multiselect с vue-treeSelect?
Vue: как лучше всего избежать TypeError внутри вычисляемых свойств
Как мне обрабатывать oauth в Nuxt с отдельным сервером API?
Как включить сложное приложение Vue в Laravel
Похожие вопросы
Допустимый шаблон имени регулярного выражения
Затенение глобального свойства 'undefined'
Как добавить наложение изображения в JS с помощью FileReader?
Не могу добавить данные в IndexedDB, где проблема в моем коде?
Я должен заменить некоторые специальные символы в Code by Zapier
Данные JSON недоступны во внешней функции, предназначенной для сравнения входных данных с json и последующего вывода
У меня проблемы с роутингом с параметрами в reactjs
Как сделать веб-страницу белой, пока моя строка не будет изменена
Рендеринг холста Mapbox на половине экрана
Jquery addClass добавляет класс в div, но также мгновенно удаляет его
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
VueJs CLI 3 — как добавить внешнюю библиотеку
Вопросы
VUE.JS
VueJs CLI 3 — как добавить внешнюю библиотеку
У меня есть приложение vue, созданное последней версией интерфейс командной строки vue (vue 3.5.1), с использованием следующей командной строки:

vue ui

Это моя структура папок:

app_vue:
|- node_modules
|- публично
|- источник:
|---- активы
|---- компоненты:
|---------List.vue
|---- библиотеки:
|--------- нумерация страниц:
|------------- css:
|----------------- разбиение на страницы.css
|------------- js:
|----------------- разбиение на страницы.js
| ...

Папка библиотеки не существует, пока я ее не создал вручную.

Я также создаю вручную файл vue.config.js, но я не знаю, что я должен добавить сюда.

const path = require('path')
module.exports = {}
Мой List.vue:

<template>
  <div>
     ...
     <div id = "pagination"></div> 
  </div>
</template>
<script>
  // how use pagination.js ???
  export default {
   ...
  }
</script>
<style>
  //how use pagination.css ???
  ...
<..style>
Я хочу использовать библиотеки нумерация страниц в компоненте List.vue.
Я хочу использовать что-то вроде этого:

libs/pagination/pagination.css

не

../../libs/pagination/pagination.css

Как я могу это сделать.

 18.03.2019 20:13
1
0
2 386
3
 Ответы 3
Если вы хотите использовать файлы только в своих компонентах/представлениях, вы импортируете то, что хотите, в файлы, которым они нужны: импортируйте MyLib из "../path/to/libs"; является примером.

Однако, если вы хотите, чтобы что-то было добавлено глобально, вы можете добавить их в свой App.vue (или базовый компонент Vue) в теге стиля без области видимости:

<style>
@import "https://cdn.materialdesignicons.com/2.5.94/css/materialdesignicons.min.css";
@import "https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900|Material+Icons";

#app {
  font-family: "Hilda-Regular", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
В приведенном выше примере все стили будут доступны для всего вашего приложения. Если вы поместите какие-либо стили в тег стиля ограниченный, они будут привязаны к этому компоненту или представлению.

 18.03.2019 20:35
Если вы хотите импортировать эту библиотеку, и это ES6 или другой модуль, вы можете использовать параметр цепочкаWebpack и определить что-то вроде

 module.exports = (api, options) => {
   api.chainWebpack(webpackConfig => {
     webpackConfig.resolve
      .alias
      .set('~', api.resolve('lib'))
   }
}
Для большего примера вы можете посмотреть здесь

 18.03.2019 20:50
Следующее решение работает для меня.

vue.config.js

const path = require('path')

module.exports = {
    chainWebpack: config => {
        config.resolve.alias
            .set('libs', path.resolve(__dirname, 'src/libs/'))
    }
}
List.vue

<script>
   import { Pagination } from "libs/pagination/js/Pagination.js"
   import 'libs/pagination/css/pagination.css'

   export default {
       ...
       mounted()
       {
           console.info(new Pagination("#pagination"))
       }
       ...
   }
</script>
 18.03.2019 23:12
Другие вопросы по теме
Как я могу развернуть приложение Vue в подкаталог?
Как импортировать файлы css в дочерние компоненты vue 3?
Vue.js - элемент DOM не удаляется из родительского компонента после изменения маршрута в
Как правильно использовать слот внутри веб-компонента vue js и применять стили
Как обмениваться модулями узла между приложением vue-cli 3?
Оболочка Windows Power: vue --version «не распознана»
Как использовать VueJS axios-oauth-client и API Google Photos?
Как использовать exclude с загрузчиком babel в vue cli3?
Что такое файл chunk-vendors.js и как он создается? (веб-пакет)
Предупреждение об определении свойства Vue, даже если оно определено в экземпляре
Похожие вопросы
Импорт изображения с помощью threejs в проект VueJS
Как вы можете скрыть или не показывать вкладки, если для этой конкретной вкладки ничего не отображается в vue?
Предыдущие и текущие данные в хуках жизни Vue
Как должны быть структурированы данные для линейных графиков с vue/chart.js
Vuejs визуализирует тег <svg> на компоненте
Вопрос об API с двумя фреймворками, использующими Laravel и Vue.js
Вложенный аналогичный маршрут в vue-router не отображает компоненты глубокого уровня
Заголовки условных обозначений кольцевой диаграммы ApexCharts не отражают предоставленные метки данных (застряли как «серия-1» и т. д.)
Vue - стиль пользовательского ввода в сообщении подтверждения (разрешить определенные теги html)
Статические файлы отсутствуют в приложении VueJS
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
Служба проверки типов Vue CLI игнорирует ограничения памяти
Вопросы
TYPESCRIPT
Служба проверки типов Vue CLI игнорирует ограничения памяти
DevOps потребовал, чтобы мы ограничили наши сборки внешнего интерфейса примерно 1 ГБ ОЗУ, чтобы наш экземпляр Jenkins не выключался. Мы используем стандартный @vue/cli проект с TypeScript. Однако служба проверки типов TS игнорирует все попытки ограничить использование памяти, которая всегда составляет 2048 МБ.

Я пытался отключить его и полагаться на fork-ts-checker-webpack-plugin, но это приводит к другим проблемам.

Основываясь на том, что я нашел, это должно работать:

$ NODE_OPTIONS=--max_old_space_size=1024 \
    NODE_ENV=production \
    node \
    --max_old_space_size=1024 \
    --max-old-space-size=1024 \
    node_modules/.bin/vue-cli-service build
Обратите внимание, что я понятия не имею, как работают эти ограничения памяти, так как я плохо разбираюсь во внутреннем устройстве Node. Но, несмотря на это, служба проверки типов всегда начинается с ограничения в 2048 МБ.

Я не уверен, что это проблема, связанная с тем, как Vue CLI настраивает Webpack/TS.

 20.03.2019 11:18
20
0
11 458
3
Данный вопрос помечен как решенный
 Ответы 3
 Ответ принят как подходящий
Я столкнулся с той же проблемой (хотя в моем случае я хотел увеличить лимит памяти, а не уменьшить его). Мне удалось изменить конфигурацию ForkTsCheckerWebpackPlugin, настроив встроенный в Vue CLI webpack.config:

// in vue.config.js

const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
  configureWebpack: config => {

    // get a reference to the existing ForkTsCheckerWebpackPlugin
    const existingForkTsChecker = config.plugins.filter(
      p => p instanceof ForkTsCheckerWebpackPlugin,
    )[0];

    // remove the existing ForkTsCheckerWebpackPlugin
    // so that we can replace it with our modified version
    config.plugins = config.plugins.filter(
      p => !(p instanceof ForkTsCheckerWebpackPlugin),
    );

    // copy the options from the original ForkTsCheckerWebpackPlugin
    // instance and add the memoryLimit property
    const forkTsCheckerOptions = existingForkTsChecker.options;
    forkTsCheckerOptions.memoryLimit = 8192;

    config.plugins.push(new ForkTsCheckerWebpackPlugin(forkTsCheckerOptions));
  },
};
Теперь, когда я запускаю свою сборку, я вижу это в своем выводе:

-  Building for production...
Starting type checking service...
Using 1 worker with 8192MB memory limit
Подробнее об опции configureWebpack здесь: https://cli.vuejs.org/config/#configurewebpack

Чтобы увидеть конфигурацию Webpack по умолчанию, используемую Vue CLI, вы можете проверить ее, запустив vue inspect: https://cli.vuejs.org/guide/webpack.html#inspecting-the-project-s-webpack-config

 23.04.2019 13:43
в vue.config.js

const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const os=require('os');
module.exports = {
    //......,
    chainWebpack: config => {
        config
            .plugin('fork-ts-checker')
            .tap(args => {
                let totalmem=Math.floor(os.totalmem()/1024/1024); //get OS mem size
                let allowUseMem= totalmem>2500? 2048:1000;
                // in vue-cli shuld args[0]['typescript'].memoryLimit
                args[0].memoryLimit = allowUseMem;
                return args
            })
    },
   //......
}
 05.06.2019 12:59
в node_modules/fork-ts-checker-webpack-plugin/lib/index.js

declare class ForkTsCheckerWebpackPlugin {
    static readonly DEFAULT_MEMORY_LIMIT = 4096;
    static readonly ONE_CPU = 1;
    static readonly ALL_CPUS: number;
    static readonly ONE_CPU_FREE: number;
    static readonly TWO_CPUS_FREE: number;
    readonly options: Partial<Options>;
 25.05.2020 08:24
Другие вопросы по теме
Переместите файлы из папки сборки (после сборки) в другую папку с относительным путем — Webpack
Реагируйте, как добавить пользовательское веб-приложение с файлом js
Webpack-dev-server Сеть недоступна
Сервер vuejs npm dev не показывает обновленный вывод
Файл изображения Webpack не отображается
Sh: команда веб-пакета не найдена
Как установить вебпак? Когда я устанавливал, я столкнулся с этой ошибкой и не знал, как ее исправить
Я пытаюсь обслуживать свое приложение для реагирования из Express, почему я получаю 404?
Невозможно прочитать свойство thisCompilation неопределенного - react-scripts-ts
Загружать стили, только если компонент был импортирован в Vue.js
Похожие вопросы
Описать не определено исключение для Typescript, Mocha и VSCode
Как использовать компоненты ngx-Admin без использования ngx-Admin Starter Kit?
Computed нельзя назначить Observable после обновления до Knockout.js 3.5.0
Управление пользователем — Firebase и Angular
Директива InnerHTML, игнорирующая теги html в Angular
React JS: вызов метода дочернего компонента в родительском компоненте (React with typescript)
Цикл for для создания пары ключ-значение в TypeScript (ES 6)
Почему свойство моего многомерного массива не обновляется
Невозможно вызвать службу Angular 6 из HTML EventListener
Как получить данные строки, нажав кнопку в ag-сетке
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
Псевдоним проекта Vue cli 3 src для @ или ~/ не работает
Вопросы
JAVASCRIPT
Псевдоним проекта Vue cli 3 src для @ или ~/ не работает
Я установил проект с помощью vue cli 3, но по мере роста проекта импорт компонентов становится уродливым, в итоге я импортирую компонент, например

import Component from '../../../../components/folder/Component.vue'
Я просто хочу создать псевдоним папки src и сделать

import Component from '@components/folder/Component.vue'
Я читал, что мне нужно изменить vue.config.js, я сделал это, но ошибка та же самая.

Module not found: Error: Can't resolve '@components/Permissions/PermissionsTable'
Это мой vue.config.js

  const path = require("path");

  const vueSrc = "./src";

  module.exports = {
    runtimeCompiler: true,
    css: {
      modules: true
    },
    configureWebpack: {
      resolve: {
        alias: {
          "@": path.join(__dirname, vueSrc)
        }
      }
    }
  };
Я что-то пропустил? Что еще мне делать?

 23.03.2019 03:05
13
2
25 241
3
 Ответы 3
Мне не хватало extensions: ['.js', '.vue', '.json'], и в импорте приходится использовать '@/components/...'

 23.03.2019 03:36
Полный пример:

const path = require("path");
const vueSrc = "./src";
module.exports = {
  runtimeCompiler: true,
  css: {
    modules: true
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, vueSrc)
      },
      extensions: ['.js', '.vue', '.json']
    }
  }
};
Хотя я не уверен, что расширения - это решение проблемы, которая у вас была. Это просто добавит расширения, если вы не написали их в определении импорта: https://webpack.js.org/configuration/resolve/#resolveextensions

У меня есть ощущение, что это была скорее проблема с отсутствующим /. Так что вместо @components/Permissions/PermissionsTable должно было быть @/components/Permissions/PermissionsTable, потому что вы не добавили / в конце вашего vueSrc. Поэтому webpack просто прикрепит его к ./src вот так: ./srccomponents/Permissions/PermissionsTable.

 01.05.2020 10:32
Для Vue CLI вам необходимо создать файл в корневой папке проекта - jsconfig.json

{
  "include": ["./src/**/*"],
  "compilerOptions": {
    "baseUrl": "src",
    "paths": {
      "@/*": ["./*"]
    }
  },
  "exclude": ["node_modules"]
}
и все, помог мне с PhpStorm

 13.04.2021 15:37
Другие вопросы по теме
Как получить доступ к экспортированному объекту vm (основной экземпляр vue) из компонента?
Компонент автозаполнения Google требует обновления для правильной загрузки Vuejs
Как вызвать функцию после завершения загрузки vue-lazyload?
Эзотерическая ошибка в производстве: «Ошибка типа: e не определено»
Как передать данные vue в laravel @include
Не удается прочитать свойство «$ router» неопределенного?
С vue.js, как правильно работать с vue-неуправляемыми элементами dom
Как убрать скобки из массива
Условное отображение значков только один раз в зависимости от свойства
Глобальное событие $root в vue никогда не приходит
Похожие вопросы
Как сделать так, чтобы аргумент ожидался как идентификатор пользователя?
Почему я получаю ошибку бесконечного цикла в p5.js?
Создание полноэкранного всплывающего окна и обновление полосы прокрутки
Как заставить selenium webdriver возвращать весь HTML с сайта?
Разрешить Promise или добавить обратный вызов после метода Array push()
Коннектор Google Data Studio: выполнить обещание?
Изображения с главной страницы на сайте исчезают на мобильных устройствах
Переход градиентной заливки одного узла среди множества
Создайте квадраты с функцией и переместите изображение с идентификатором в JavaScript
Настройка свойства объекта на параметр значения в скобках и без скобок
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
«Не удается прочитать свойство« обновление »неопределенного» при запуске приложения vue
Вопросы
VUE.JS
«Не удается прочитать свойство« обновление »неопределенного» при запуске приложения vue
У меня есть проект, который отлично работает уже несколько месяцев и может работать npm run serve без проблем. Мне приходится завершать работу и снова запускать команду всякий раз, когда я переключаю сети, но это никогда не было проблемой, и сервер всегда мог запуститься снова.

До сих пор - что бы я ни делал, я не могу запустить сервер. Я получаю эту ошибку:

npm run serve

> xbs@0.6.2 serve D:\workspace\[PROJECT]
> vue-cli-service serve

 INFO  Starting development server...
 10% building 1/1 modules 0 active ERROR  TypeError: Cannot read property 'upgrade' of undefined
TypeError: Cannot read property 'upgrade' of undefined
    at Server.<anonymous> (D:\workspace\[PROJECT]\node_modules\webpack-dev-server\lib\Server.js:667:47)
    at Array.forEach (<anonymous>)
    at new Server (D:\workspace\[PROJECT]\node_modules\webpack-dev-server\lib\Server.js:666:22)
    at serve (D:\workspace\[PROJECT]\node_modules\@vue\cli-service\lib\commands\serve.js:137:20)
    at <anonymous>
    at process._tickCallback (internal/process/next_tick.js:188:7)
    at Function.Module.runMain (module.js:695:11)
    at startup (bootstrap_node.js:191:16)
    at bootstrap_node.js:612:3
В последний раз я получил это сообщение, когда забыл установить файлы .env, но это ранее рабочая копия со всеми установленными необходимыми файлами и никаких изменений с момента последнего рабочего прогона.

Я даже пытался получить новую копию репозитория, запустить npm i и настроить все файлы env, но все равно не получается.

npm run lint и npm run build все еще могут работать, только npm run serve.

Я что-то упустил?

 26.03.2019 03:26
7
5
8 417
3
 Ответы 3
Проблема снова была с файлами .env. Мой vue.config.js пытался получить доступ к ранее установленной переменной среды, которая с тех пор была удалена.

Только странно, что до сих пор не было никаких проблем?

 26.03.2019 07:04
Я предполагаю, что ваш devServer.proxy.target пуст! Вы можете установить эту конфигурацию

 11.05.2020 05:38
Для меня это было то, что я забыл создать (или скопировать с другого ПК) файл .env после клонирования и попытаться запустить свой проект на другом ПК.

 14.01.2022 20:50
Другие вопросы по теме
Npm install Expo cli, останавливается на extraxt: rxjs
Expo cli и ошибка ADB: не удается подключиться к демону
Npm начинает выдавать статус ошибки 1, требование не является функцией
TS2339: свойство «контакты» не существует для типа «Навигатор»
Как использовать частный пакет NPM с самостоятельным размещением с узлом Google App Engine, стандартная среда
Как запустить код Visual Studio локально с помощью localhost?
Сбросить Git в VSCode?
Зависимости npm (бессерверная среда) не установлены в последней версии Jenkins (CJE)
Я не могу войти в репозиторий myGet npm (sencha/extjs-ce)
Неопределенный nameToPath при использовании ClojureScript: npm-deps
Похожие вопросы
Состояние не определено внутри действия vuex
Nuxt.js — предварительная загрузка шрифтов в продакшене
Отображать элементы v-for в пределах одной текстовой области
Приложение Dockerized Vue — следует ли использовать переменные env docker или node?
Vue.js и Pouch — PouchDB не является конструктором
Как Vue js может загрузить изображение из папки /dist/, если оно не существует?
Как условно отображать JS в created() или Mount()
Vue Как объединить два массива из одного объекта?
Как я могу реактивно обновить значение в компоненте из значения хранилища?
Как аутентифицировать клиента для остальных API диалогового потока v2
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
Как обработать запрос ошибки 404 в vuejs SPA с сервером nginx
Вопросы
NGINX
Как обработать запрос ошибки 404 в vuejs SPA с сервером nginx
Я настроил свой SPA vue-cli версии 3, чтобы любые запросы, не найденные в моем файле routes.js, по умолчанию использовали мое представление 404, как показано в официальном документация:

Вставлено внизу файла routes.js:

{ // catches 404 errors
  path: '*',
  name: '404',
  component: () => import(/* webpackChunkName: "NotFoundComponent" */ './views/NotFoundComponent.vue'),
},
Вставлено в конфигурационный файл nginx:

location / {
  try_files $uri $uri/ /index.html;
}
Это успешно предупреждает пользователя о том, что запрошенная страница не существует.

Мой вопрос:

Я хотел бы, чтобы компонент ошибки 404 возвращал заголовок ответа 404 (текущий возвращает код состояния 200), а также регистрировал эту ошибку в файле nginx error.log. Я полагаю, что это возможно только при использовании конфигурации nginx. Кто-нибудь достиг этой цели?

Я заметил, что эта проблема рассматривается на следующей странице в официальных документах vue-cli, но она касается только серверов node express, а не nginx: https://router.vuejs.org/guide/essentials/history-mode.html#caveat

 24.09.2018 01:04
4
2
10 042
3
Данный вопрос помечен как решенный
 Ответы 3
 Ответ принят как подходящий
Я думаю, что это похоже на решение Node - вы должны повторить все свои маршруты в конфигурации nginx, чтобы правильно вернуть код состояния 404, основная идея заключается в том, что вы должны использовать модификатор «равно» в местах и ​​определить error_page для возврата того же файла index.html, но с 404 код состояния, пример:

server {
    listen       80;
    server_name  localhost;
    root /my/dir/with/app
    error_page  404 /index.html;

    location = / {
        try_files $uri $uri/ /index.html;
    }

    location = /books {
        try_files $uri $uri/ /index.html;
    }

    # example nested page
    location = /books/authors {
        try_files $uri $uri/ /index.html;
    }

    # example dynamic route to access book by id
    location ~ /books/\d+$ {
        try_files $uri $uri/ /index.html;
    }
}
Вероятно, эту конфигурацию можно упростить или улучшить, потому что я не очень хорошо разбираюсь в конфигурации nginx, но она работает.

 24.09.2018 11:34
Я решил это простым способом, вырвавшись из экосистемы Vue, иначе это не сработает или потребует много усилий.

Сделайте следующий маршрут в своем маршрутизаторе Vue:

{
  path: '*',
  name: 'PageNotFound',
  component: PageNotFound
}
Компонент PageNotFound должен иметь следующий код:

<script>
export default {
  name: 'PageNotFound',
  created() {
    window.location.href = "/404/"
  }
}
</script>
Конфигурация nginx должна возвращать 404 при получении маршрута /404/:

server {
    ...
    location ~ ^/404/$ {
        return 404;
    }
    ...
}
Я не думаю, что это сработает в среде рендеринга на стороне сервера. В таком случае вам может потребоваться поместить оператор, содержащий window.location.href, в метод mounted.

 07.02.2019 13:11
Для тех, кто сталкивается с этой проблемой, и чтобы сэкономить часы головной боли.
Предостережения с приведенными выше ответами

Простая перезагрузка страницы с новым URL-адресом (например, /notfound) не решает эту проблему, поскольку это означает, что потенциальный паук уже получил 200.
Простое копирование маршрутов - это половина решения. Это работает с URL-адресами, которые никогда не изменятся, и путем проверки правильности структуры URL-адресов. Так, например, он может проверить, имеет ли идентификатор книги в books/123 правильный формат, но не может проверить, действительно ли books/123 существует в бэкэнде.
Вот два подхода, которые могут решить вышеуказанные проблемы.

Попросите Nginx сделать зеркальный подзапрос к бэкэнду, чтобы проверить, действительно ли существует ресурс. Затем всегда вернет index.html, но со статусом из ответа подзапроса. Это очень сложно с Nginx, так как из-за его конструкции очень сложно комбинировать ответы.
Обратный API должен возвращать index.html для Accept: text/html. Тогда Nginx просто нужно переслать ответы.
Первое решение - заноза в заднице для тех, кто не знаком с Nginx. Требуется получить Lua с OpenResty, и тогда вы снова столкнетесь со всевозможными причудами с тем, как работает Nginx. В результате вы получаете много трудночитаемого кода, и это усложняет задачу, если вы еще больше захотите ввести кеширование.

Второе решение проще. Единственный возможный минус заключается в том, что это означает, что вы не можете просматривать API из браузера, если это что-то в настоящее время у вас есть.

nginx.config (когда API отвечает index.html на Accept: text/html)

    location / {
      try_files $uri $uri/ @fallback;
    }

    location @fallback {
      rewrite ^(.*) /api$1 break;
      proxy_set_header "Accept" "text/html";
      proxy_pass http://localhost:8000;
    }
В этом случае Nginx сначала попытается обслужить файл, а в случае, если он не найдет его локально, выполнит откат.

В резервном варианте мы переписываем URI, чтобы он соответствовал ожиданиям внутреннего сервера. В этом примере я добавляю api/ к каждому запросу. Затем я добавляю заголовок Accept: text/html, чтобы серверный API отвечал index.html вместо JSON. И, наконец, мы напрямую возвращаем ответ клиенту.

Это дает следующие преимущества:

Он не полагается на Nginx, поэтому может работать с любым обратным прокси. Самое главное, что он не полагается на прокси-сервер, чтобы иметь определенные функции.
Работает даже во время разработки без запущенного Nginx.
Легко писать тесты для. Вам просто нужно протестировать свой серверный API на то, чтобы выдавать index.html при наличии Accept: text/html для любой конечной точки.
Не требует вручную обновлять конфигурацию Nginx с каждой новой конечной точкой.
Кроме того, вы можете изменить конфигурацию, чтобы Nginx следил за перенаправлениями изнутри, и, возможно, даже не просматривая серверный API для URL-адресов, которые никогда не меняются.

 22.05.2020 20:16
Другие вопросы по теме
Импорт файла json вызывает ошибку в моем приложении Vue
Как сгруппировать данные из атрибутов с помощью циклов for в VueJS
Vuetify extra margin <v-select>
Как использовать тернарный оператор в привязке Vue
Какой инструмент использовать для выделения синтаксиса с помощью vue js
Неправильная папка компиляции стиля Encore Vue.js
Vue js отправляет данные между двумя компонентами без реквизита
Wordpress API: как получить пост по категориям с помощью vue js на laravel
Vue Nuxt nuxtServerInit не загружает данные
Ссылка привязки Vue в компоненте без рендеринга
Похожие вопросы
Перенаправить http-запрос на веб-сайт из iframe с обратным прокси-сервером перед сайтом
Поддомен certbot и nginx установлен на centos7
Облако google переустановило nginx по ошибке, как я могу вернуть его обратно
Docker nginx healthcheck не работает, но скрипт работает, когда проверка работоспособности не определена
Простой сервер Nginx на докере возвращает 503
Почему моему прокси-серверу Nginx удалось найти веб-сервер моего узла, поскольку мой docker-compose не предоставляет ни одного порта веб-сервера в сети?
Укажите субдомен в каталог на том же сервере с NGINX
Сервер Express не отвечает с правильными заголовками cors
Как запустить админку Wordpress на поддомене сайта?
Как изменить среду приложения Rails в Digital Ocean?
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
Как установить бета-версию vuetify 2.0 в новый проект vue cli?
Вопросы
VUE.JS
Как установить бета-версию vuetify 2.0 в новый проект vue cli?
Vuetify 2.0.0-beta.0 только что был выпущен, и я хочу попробовать его и поиграть в новом тестовом приложении vue. Но я получаю ошибки, когда пытаюсь установить его в новый новый проект. Вот шаги, которые я предпринял.

Я использую @vue/cli v3.8.2 для создания нового проекта с настройками по умолчанию:

vue create testapp
что дает мне успешный результат:

?  Successfully created project testapp.
?  Get started with the following commands:

 $ cd testapp
 $ npm run serve
Затем я добавляю в проект плагин vuetify с предустановкой по умолчанию (рекомендуется):

cd testapp
vue add vuetify
что дает мне успех:

?  Installing vue-cli-plugin-vuetify...

+ vue-cli-plugin-vuetify@0.5.0
added 1 package from 1 contributor and audited 23942 packages in 9.235s
found 0 vulnerabilities

✔  Successfully installed plugin: vue-cli-plugin-vuetify

? Choose a preset: Default (recommended)

?  Invoking generator for vue-cli-plugin-vuetify...
?  Installing additional dependencies...

added 11 packages from 49 contributors and audited 23980 packages in 9.252s
found 0 vulnerabilities

⚓  Running completion hooks...

✔  Successfully invoked generator for plugin: vue-cli-plugin-vuetify
Теперь в package.json вижу версию vuetify: "vuetify": "^1.5.5"

Теперь я обновляю его до v2.0.0-beta.0 следующим образом:

npm install vuetify@2.0.0-beta.0
Я снова получаю успех:

+ vuetify@2.0.0-beta.0
updated 1 package and audited 23980 packages in 10.302s
found 0 vulnerabilities
Теперь, когда я пытаюсь запустить его:

npm run serve
Я получаю сообщение об ошибке:

> testapp@0.1.0 serve c:\temp\testapp
> vue-cli-service serve

 INFO  Starting development server...
 98% after emitting CopyPlugin

 ERROR  Failed to compile with 99 errors                                                                                                                                                                                           6:17:04 PM

This dependency was not found:

* vuetify/src/stylus/app.styl in ./src/plugins/vuetify.js

To install it, you can run: npm install --save vuetify/src/stylus/app.styl
Failed to resolve loader: sass-loader
You may need to install it.
Если я установлю sass-loader следующим образом:

npm i -D node-sass sass-loader
Я получаю успех. Затем я пытаюсь запустить его снова:

npm run serve
Теперь снова я получаю другую ошибку:

 ERROR  Failed to compile with 1 errors                                                                                                                                                                                            6:27:06 PM

This dependency was not found:

* vuetify/src/stylus/app.styl in ./src/plugins/vuetify.js

To install it, you can run: npm install --save vuetify/src/stylus/app.styl
Я застрял здесь, так как не знаю, как исправить эту ошибку. npm install --save vuetify/src/stylus/app.styl явно не работает. Также я не смог заставить его работать, следуя официальному проверить страницу для этой бета-версии.

 29.05.2019 18:30
10
1
10 938
2
Данный вопрос помечен как решенный
 Ответы 2
Не включайте файлы .styl, они в принципе устарели.
Удалите node-sass и установите sass

$ npm uninstall node-sass
$ npm i -D sass
И измените свой файл plugins/vuetify.js

import Vue from 'vue'
import Vuetify from 'vuetify'


Vue.use(Vuetify)
export default new Vuetify({ theme: { ... } })

И main.js

new Vue({
  ...
  vuetify, // we add vuetify here
  render: (h) => h(App),
}).$mount('#app')
Обратите внимание, что параметры темы изменены в v2, теперь можно настраивать темную тему, например.

theme: {
  dark: true,
  themes: {
    light: {
      primary: '#42a5f5',
      //...
    },
    dark: {
      primary: '#2196F3.
    },
  },
},
options: {
  customProperties: true,
},
icons: {
  iconfont: 'md', // default is 'mdi'
}
Подробнее о sass в документы и документы в новом стиле.

 29.05.2019 22:12
 Ответ принят как подходящий
После создания нового проекта vue выполните следующие команды:

# yarn
$ yarn add https://github.com/vuetifyjs/vue-cli-plugin-vuetify.git#dev -D
$ vue invoke vuetify

# npm
$ npm install https://github.com/vuetifyjs/vue-cli-plugin-vuetify.git#dev --save-dev
$ vue invoke vuetify
Я думаю, что это сработает даже с уже созданным вами проектом. Просто попробуйте команды выше.

Для получения дополнительной информации проверьте выпуск v2.0.0-бета.0

 29.05.2019 22:28
Другие вопросы по теме
Использование item-text в качестве функции для настройки элементов Vietify v-combobox
Vuetify бесплатный шаблон блочных элементов тематического блога
Как сделать так, чтобы флажок Vuetify точно отражал его значение?
$vuetify.goTo('#foo') не работает на странице другого маршрутизатора
Как я могу получить измененное значение из vuetify select, выпустив шаблон атомарного проектирования?
Добавьте модальное всплывающее окно для vuetify vue.js
Как добавить значок с прекрасным шрифтом к вновь созданному элементу в vueJS/Vuetify?
CSS - установить общую ширину всех дочерних элементов равной их родительской
Предотвратить разрушение div при скрытии или удалении всех дочерних элементов
Аргументы и параметры функции не работают в проекте vuetify с использованием ключевого слова «это»?
Похожие вопросы
Есть ли лучший способ изменить отображение кнопок в javascript/Vue?
Карта листовок Vue2 не отображается должным образом в модальном режиме BoostrapVue
LocalStorage не обновляется в Vuex
Выполнить метод после того, как все обещания внутри данного метода разрешены
Получение ответа на почтовый запрос после успешного завершения публикации
Прервать обещание в действии Vuex при ошибке API
Как ограничить длину ввода для элемента v-select?
Сетка Ag: развернуть/свернуть с нумерацией страниц
Модуль @google-cloud/speech не поддерживается для Vue JS?
Vue + TypeScript — рекомендуемое соглашение о структуре папок для размещения пользовательских типов?
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
Общая папка vue-cli3 img не отображается
Вопросы
VUE.JS
Общая папка vue-cli3 img не отображается
Кто-нибудь знает, как использовать атрибут src с файлом img в общей папке проекта vue? Браузер не находит изображение.

Я использую Vue CLI 3.7.0

▼ папки

 |
 +-- src
 |    
 +-- public
       |  
       +-- favicon.ico
       +-- logo.png
       +-- index.html
Я пробовал что-то вроде :src = "xxx", но это не сработало.

<template>
    <div>
        <img :src = "'/favicon.ico'">
        <img :src = "`${publicPath}favicon.ico`">
     </div>
</template>

<script>
    export default {
        data: function() {
            return {
                publicPath: process.env.BASE_URL
            };
        }
    }
</script>
 13.06.2019 09:39
2
10
4 101
2
Данный вопрос помечен как решенный
 Ответы 2
Просто используйте <img src = "/favicon.ico">.

 14.06.2019 11:19
 Ответ принят как подходящий
Обновлять
Судя по комментариям ниже, ты бежишь

vue serve
Только Vue CLI проект знает о каталоге public и process.env.BASE_URL. Вам нужно запустить проект вместо использования мгновенное прототипированиеvue serve.

Другими словами, бегите

npm run serve
См. https://cli.vuejs.org/guide/cli-service.html#using-the-binary

Если у вас есть такая файловая структура

├── public
│   ├── favicon.html
│   ├── index.html
│   ├── logo.png
тогда ваш код для отображения logo.png должен выглядеть так

<template>
  <div>
    <img :src = "`${publicPath}logo.png`">
  </div>
</template>

<script>
export default {
  data () {
    return {
      publicPath: process.env.BASE_URL
    }
  }
}
</script>
См. https://cli.vuejs.org/guide/html-and-static-assets.html#the-public-folder

Если у вас есть изображение в

├── public
│   ├── img
│   │   ├── logo.png
тогда ваш код шаблона компонента становится

<img :src = "`${publicPath}img/logo.png`">
 19.06.2019 07:18
Другие вопросы по теме
Получение свойства не определено, когда я считаю, что сделал это правильно
Как использовать слоты в HTML с компонентами одного файла
Шаблон Vue срабатывает более одного раза при использовании, я думаю, мне нужен уникальный ключ где-то
Как инициализировать значение «данных» по умолчанию для возвращаемого значения функции обратного вызова?
Глубокий наблюдатель VueJS - определенное свойство для нескольких объектов
VueJS2: Должен ли я писать функции в data()?
Ключ/значение объекта VueJs не реагирует в цикле v-for
Как использовать ветку пути в vueJS с Proyect Symfony - как правильно использовать FSRouting
Динамическое использование axios.all
Как зациклить тег img src с помощью vuejs?
Похожие вопросы
Создать проект для существующего репозитория
Изображения в компоненте Vue при использовании Webpack Encore
Vue Loader не может разрешить '@'
Имя шаблона Vue.Js и имя тега
Vue не отображает второй компонент, если предыдущий самозавершается
Почему мои Карты Google переполняют мой контейнер сетки CSS?
Получение свойства не определено, когда я считаю, что сделал это правильно
Сбой в Vue в производстве
Ошибка интеграции Django и VueJS. Ошибка загрузки компонента VueJS в Django
Синтаксическая ошибка при настройке отладки nuxt/vue с кодом vs
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
Панель навигации не обновляется при успешном входе пользователя
Вопросы
VUE.JS
Панель навигации не обновляется при успешном входе пользователя
Я создаю свой первый проект Vue-Cli 3 с API-интерфейсом Rails 6 в качестве бэкэнда.

У меня есть компонент навигации, который должен обновляться при успешном входе пользователя в систему, прямо сейчас, когда пользователь входит в систему, он перенаправляется на панель управления пользователя, но навигация остается в виде зарегистрированного представления навигации. Он будет успешно изменен, когда я принудительно обновлю страницу.

Поскольку я новичок в Vue, это может быть небольшой проблемой, однако я изо всех сил пытаюсь найти какие-либо ссылки по этой проблеме.

Я использую Axios Axios-Vue и JWTSessions для обработки токенов/сеансов.

вот мой код компонента Navigation.vue:

<template>
  <div class = "font-sans antialiased">
    <nav class = "flex items-center justify-between flex-wrap bg-loadze-blue p-6 fixed w-full">
      <div class = "flex items-center flex-no-shrink text-gray-900 mr-6">
        <span class = "font-semibold text-xl tracking-tight text-white">Loadze.co</span>
      </div>
      <div class = "block sm:hidden">
        <button @click = "toggle" class = "flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white">
          <svg class = "fill-current h-3 w-3" viewBox = "0 0 20 20" xmlns = "http://www.w3.org/2000/svg"><title>Menu</title><path d = "M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        </button>
      </div>
      <div :class = "open ? 'block': 'hidden'" class = "w-full flex-grow sm:flex sm:items-center sm:w-auto">
        <div class = "text-sm sm:flex-grow">
          <router-link to = "/home" class = "no-underline block mt-4 sm:inline-block sm:mt-0 text-teal-lighter hover:text-white mr-4" v-if = "!signedIn()">Home</router-link>
          <router-link to = "/about" class = "no-underline block mt-4 sm:inline-block sm:mt-0 text-teal-lighter hover:text-white mr-4" v-if = "!signedIn()">About</router-link>
          <router-link to = "/features" class = "no-underline block mt-4 sm:inline-block sm:mt-0 text-teal-lighter hover:text-white mr-4" v-if = "!signedIn()">Features</router-link>
          <router-link to = "/pricing" class = "no-underline block mt-4 sm:inline-block sm:mt-0 text-teal-lighter hover:text-white mr-4" v-if = "!signedIn()">Pricing</router-link>
          <router-link to = "/contact" class = "no-underline block mt-4 sm:inline-block sm:mt-0 text-teal-lighter hover:text-white mr-4" v-if = "!signedIn()">Contact Us</router-link>
        </div>
        <div>
          <router-link to = "/signup" class = "text-sm no-underline block mt-4 sm:inline-block sm:mt-0 text-teal-lighter hover:text-white mr-4" v-if = "!signedIn()">Sign up</router-link>
          <router-link to = "/signin" class = "text-sm no-underline block mt-4 sm:inline-block sm:mt-0 text-teal-lighter hover:text-white mr-4" v-if = "!signedIn()">Sign in</router-link>
          <a href = "#" @click.prevent = "signOut" class = "text-sm no-underline block mt-4 sm:inline-block sm:mt-0 text-teal-lighter hover:text-white mr-4" v-if = "signedIn()">Logout</a>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navigation',
  data () {
    return {
      open: false
    }
  },
  methods: {
    toggle () {
      this.open = !this.open
    },
    setError (error, text) {
      this.error = (error.response && error.response.data && error.response.data.error) || text
    },
    signedIn () {
      return localStorage.signedIn
    },
    signOut () {
      this.$http.secured.delete('/signin')
        .then(response => {
          delete localStorage.csrf
          delete localStorage.signedIn
          this.$router.replace('/')
        })
        .catch(error => this.setError(error, 'Can not sign out'))
    }
  }
}
</script>

<style>

</style>
и это компонент Signin.vue (скрипт, код формы длинный. Пожалуйста, дайте мне знать, если вам нужно его увидеть) код:

<script>
export default {
  name: 'Signin',
  data () {
    return {
      email: '',
      password: '',
      error: ''
    }
  },
  created () {
    this.checkSignedIn()
  },
  updated () {
    this.checkSignedIn()
  },
  methods: {
    signin () {
      this.$http.plain.post('/signin', { email: this.email, password: this.password })
        .then(response => this.signinSuccessful(response))
        .catch(error => this.signinFailed(error))
    },
    signinSuccessful (response) {
      if (!response.data.csrf) {
        this.signinFailed(response)
        return
      }
      localStorage.scrf = response.data.csrf
      localStorage.signedIn = true
      this.error = ''
      this.$router.replace('/dashboard')
    },
    signinFailed (error) {
      this.error = (error.response && error.response.data && error.response.data.error) || ''
      delete localStorage.csrf
      delete localStorage.signedIn
    },
    checkSignedIn () {
      if (localStorage.signedIn) {
        this.$router.replace('/dashboard')
      }
    }
  }
}
</script>
 28.06.2019 20:06
0
0
842
2
Данный вопрос помечен как решенный
 Ответы 2
Чтобы ваш объект localStorage был реактивным, он должен быть частью данных компонентов или вычисляемых свойств. Самым простым решением будет сохранение состояния аутентификации в vuex, а затем предоставление его вашим компонентам с помощью vuex mapGetter. Затем вы обновляете состояние с помощью действия vuex, когда пользователь входит в систему. Если вы не знакомы с vuex, на их веб-сайте есть пример, которого должно быть достаточно для этого.

 28.06.2019 22:15
 Ответ принят как подходящий
Вы используете функцию для условного отображения (v-if = "!signedIn()"), но функция ничего не возвращает, что означает, что в шаблоне ничего не отображается реактивно.

Попробуйте добавить новое свойство данных, которое можно обновить при входе в систему:

<template>
  ...
  <div class = "text-sm sm:flex-grow">
    <router-link to = "/home" v-if = "!isSignedIn">Home</router-link>
    <router-link to = "/about" v-if = "!isSignedIn">About</router-link>
    <router-link to = "/features" v-if = "!isSignedIn">Features</router-link>
    <router-link to = "/pricing" v-if = "!isSignedIn">Pricing</router-link>
    <router-link to = "/contact" v-if = "!isSignedIn">Contact Us</router-link>
  </div>
  ...
</template>
<script>
export default {
  name: 'Signin',
  data () {
    return {
      email: '',
      password: '',
      error: '',
      isSignedIn: false // <= here
    }
  },
  //...
  methods: {
    signin () {
      this.$http.plain.post('/signin', { email: this.email, password: this.password })
        .then(response => {
          this.signinSuccessful(response)
          this.isSignedIn = true // <= and here
        }).catch(error => this.signinFailed(error))
    },
    //...
  }
}
</script>
Затем в функции выхода из системы вы можете вернуть isSignedIn значение false.

 29.06.2019 22:58
Другие вопросы по теме
Почему я не могу получить доступ к своему собственному серверу Vue Webpack через локальную сеть с другого устройства?
Предотвратить прокрутку в VueJS
Как вручную включить файлы CSS/JS для автономного использования при использовании Vue.js CLI?
Маркеры Google Maps странно обновляются при изменении границ
Настройка public/index.html в vue-cli
Создать и опубликовать папку dist на страницах github
Служба запуска NPM показывает старое состояние моего проекта vuejs на локальном хосте
Создать проект для существующего репозитория
Как использовать слоты в HTML с компонентами одного файла
Сборщик модулей Vue-cli VS и средство запуска задач
Похожие вопросы
Vue CLI не создает подкаталог
Перебор массива и копирование измененных элементов в другой массив возвращает только повторения последнего набора модификаций
Axios.post.then вызывается после всего остального
Как настроить параметры и аргументы в мутациях Vuex
Vuetify редактирование v-data-table
Это работает, но я думаю, что это противоречит цели использования фреймворка
Как внедрить ag-grid в nuxt.js
Как я могу условно отобразить список с помощью v-for, оценив одно из значений итерации как вычисленное значение?
Vue не может найти динамический источник элемента vuetify v-img
Vuejs не может получать данные с помощью шины событий
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
Макет кладки VueJS
Вопросы
JAVASCRIPT
Макет кладки VueJS
В настоящее время я работаю над проектом VueJS и его vue cli 3. Я пытаюсь внедрить MasonryJS в свой проект Vue, но я застрял. Я не мог понять, как я могу реализовать такой макет кладки для своего проекта vue.

;
(function(window) {

  /**
   * GridLoaderFx obj.
   */
  function GridLoaderFx(el, options) {
    this.el = el;
    this.items = this.el.querySelectorAll('.grid__item > .grid__link');
  }

  /**
   * Effects.
   */
  GridLoaderFx.prototype.effects = {

    'Shu': {
      lineDrawing: true,
      animeLineDrawingOpts: {
        duration: 800,
        delay: function(t, i) {
          return i * 150;
        },
        easing: 'easeInOutSine',
        strokeDashoffset: [anime.setDashoffset, 0],
        opacity: [{
            value: [0, 1]
          },
          {
            value: [1, 0],
            duration: 200,
            easing: 'linear',
            delay: 500
          }
        ]
      },
      animeOpts: {
        duration: 800,
        easing: [0.2, 1, 0.3, 1],
        delay: function(t, i) {
          return i * 150 + 800;
        },
        opacity: {
          value: [0, 1],
          easing: 'linear'
        },
        scale: [0.5, 1]
      }
    }
  };

  GridLoaderFx.prototype._render = function(effect) {
    // Reset styles.
    this._resetStyles();

    var self = this,
      effectSettings = this.effects[effect],
      animeOpts = effectSettings.animeOpts

    if (effectSettings.perspective != undefined) {
      [].slice.call(this.items).forEach(function(item) {
        item.parentNode.style.WebkitPerspective = item.parentNode.style.perspective = effectSettings.perspective + 'px';
      });
    }

    if (effectSettings.origin != undefined) {
      [].slice.call(this.items).forEach(function(item) {
        item.style.WebkitTransformOrigin = item.style.transformOrigin = effectSettings.origin;
      });
    }

    if (effectSettings.lineDrawing != undefined) {
      [].slice.call(this.items).forEach(function(item) {
        // Create SVG.
        var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg'),
          path = document.createElementNS('http://www.w3.org/2000/svg', 'path'),
          itemW = item.offsetWidth,
          itemH = item.offsetHeight;

        svg.setAttribute('width', itemW + 'px');
        svg.setAttribute('height', itemH + 'px');
        svg.setAttribute('viewBox', '0 0 ' + itemW + ' ' + itemH);
        svg.setAttribute('class', 'grid__deco');
        path.setAttribute('d', 'M0,0 l' + itemW + ',0 0,' + itemH + ' -' + itemW + ',0 0,-' + itemH);
        path.setAttribute('stroke-dashoffset', anime.setDashoffset(path));
        svg.appendChild(path);
        item.parentNode.appendChild(svg);
      });

      var animeLineDrawingOpts = effectSettings.animeLineDrawingOpts;
      animeLineDrawingOpts.targets = this.el.querySelectorAll('.grid__deco > path');
      anime.remove(animeLineDrawingOpts.targets);
      anime(animeLineDrawingOpts);
    }

    if (effectSettings.revealer != undefined) {
      [].slice.call(this.items).forEach(function(item) {
        var revealer = document.createElement('div');
        revealer.className = 'grid__reveal';
        if (effectSettings.revealerOrigin != undefined) {
          revealer.style.transformOrigin = effectSettings.revealerOrigin;
        }
        if (effectSettings.revealerColor != undefined) {
          revealer.style.backgroundColor = effectSettings.revealerColor;
        }
        item.parentNode.appendChild(revealer);
      });

      var animeRevealerOpts = effectSettings.animeRevealerOpts;
      animeRevealerOpts.targets = this.el.querySelectorAll('.grid__reveal');
      animeRevealerOpts.begin = function(obj) {
        for (var i = 0, len = obj.animatables.length; i < len; ++i) {
          obj.animatables[i].target.style.opacity = 1;
        }
      };
      anime.remove(animeRevealerOpts.targets);
      anime(animeRevealerOpts);
    }

    if (effectSettings.itemOverflowHidden) {
      [].slice.call(this.items).forEach(function(item) {
        item.parentNode.style.overflow = 'hidden';
      });
    }

    animeOpts.targets = effectSettings.sortTargetsFn && typeof effectSettings.sortTargetsFn === 'function' ? [].slice.call(this.items).sort(effectSettings.sortTargetsFn) : this.items;
    anime.remove(animeOpts.targets);
    anime(animeOpts);
  };

  GridLoaderFx.prototype._resetStyles = function() {
    this.el.style.WebkitPerspective = this.el.style.perspective = 'none';
    [].slice.call(this.items).forEach(function(item) {
      var gItem = item.parentNode;
      item.style.opacity = 0;
      item.style.WebkitTransformOrigin = item.style.transformOrigin = '50% 50%';
      item.style.transform = 'none';

      var svg = item.parentNode.querySelector('svg.grid__deco');
      if (svg) {
        gItem.removeChild(svg);
      }

      var revealer = item.parentNode.querySelector('.grid__reveal');
      if (revealer) {
        gItem.removeChild(revealer);
      }

      gItem.style.overflow = '';
    });
  };

  window.GridLoaderFx = GridLoaderFx;

  var body = document.body,
    grids = [].slice.call(document.querySelectorAll('.grid')),
    masonry = [],
    currentGrid = 0,
    // Switch grid radio buttons.
    switchGridCtrls = [].slice.call(document.querySelectorAll('.control__radio')),
    // Choose effect buttons.
    fxCtrls = [].slice.call(document.querySelectorAll('.control--effects > .control__btn')),
    // The GridLoaderFx instances.
    loaders = [],
    loadingTimeout;

  function init() {
    // Preload images
    imagesLoaded(body, function() {
      // Initialize Masonry on each grid.
      grids.forEach(function(grid) {
        var m = new Masonry(grid, {
          itemSelector: '.grid__item',
          columnWidth: '.grid__sizer',
          percentPosition: true,
          transitionDuration: 0
        });
        masonry.push(m);
        // Hide the grid.
        grid.classList.add('grid--hidden');
        // Init GridLoaderFx.
        loaders.push(new GridLoaderFx(grid));
      });

      // Show current grid.
      grids[currentGrid].classList.remove('grid--hidden');
      // Init/Bind events.
      initEvents();
      // Remove loading class from body
      body.classList.remove('loading');
      loaders[currentGrid]._render('Shu');
    });
  }

  function initEvents() {
    // Switching grids radio buttons.
    switchGridCtrls.forEach(function(ctrl) {
      ctrl.addEventListener('click', switchGrid);
    });
    // Effect selection.
    fxCtrls.forEach(function(ctrl) {
      ctrl.addEventListener('click', applyFx);
    });
  }


  function applyFx(ev) {
    // Simulate loading grid to show the effect.
    clearTimeout(loadingTimeout);
    grids[currentGrid].classList.add('grid--loading');

    loadingTimeout = setTimeout(function() {
      grids[currentGrid].classList.remove('grid--loading');

      // Apply effect.
      loaders[currentGrid]._render(ev.target.getAttribute('data-fx'));
    }, 500);
  }

  init();

})(window);
.js .loading::before,
.js .loading::after {
  content: '';
  position: fixed;
  z-index: 1000;
}

.loading::before {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #2c2d31;
}

.loading::after {
  top: 50%;
  left: 50%;
  width: 40px;
  height: 40px;
  margin: -20px 0 0 -20px;
  border: 8px solid #383a41;
  border-bottom-color: #565963;
  border-radius: 50%;
  animation: animLoader 0.8s linear infinite forwards;
}

@keyframes animLoader {
  to {
    transform: rotate(360deg);
  }
}

a {
  text-decoration: none;
  color: #f2f2f2;
  outline: none;
}

.hidden {
  position: absolute;
  overflow: hidden;
  width: 0;
  height: 0;
  pointer-events: none;
}


/* Icons */

.content--side {
  position: relative;
  z-index: 100;
  width: 15vw;
  min-width: 130px;
  max-height: 100vh;
  padding: 0 1em;
  order: 2;
}

.content--center {
  flex: 1;
  max-width: 100vw;
}

.content--related {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  padding: 8em 1em 3em;
  text-align: center;
  order: 5;
}

.media-related {
  width: 100%;
}

.media-item {
  padding: 1em;
}

.media-item__img {
  max-width: 100%;
  /*opacity: 0.7;*/
  /*transition: opacity 0.3s;*/
}

.media-item:hover .media-item__img,
.media-item:focus .media-item__img {
  opacity: 1;
}

.media-item__title {
  font-size: 1em;
  max-width: 220px;
  padding: 0.5em;
  margin: 0 auto;
}

@keyframes octocat-wave {
  0%,
  100% {
    transform: rotate(0);
  }
  20%,
  60% {
    transform: rotate(-25deg);
  }
  40%,
  80% {
    transform: rotate(10deg);
  }
}


/* Grid */

.grid {
  position: relative;
  z-index: 1;
  display: block;
  margin: 2% 5%;
}

.grid--hidden {
  position: fixed !important;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  pointer-events: none;
  opacity: 0;
}

.js .grid--loading::before,
.js .grid--loading::after {
  content: '';
  z-index: 1000;
}

.js .grid--loading::before {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #2c2d31;
}

.js .grid--loading::after {
  position: absolute;
  top: calc(25vh - 20px);
  left: 50%;
  width: 40px;
  height: 40px;
  margin: 0 0 0 -20px;
  border: 8px solid #383a41;
  border-bottom-color: #565963;
  border-radius: 50%;
  animation: animLoader 0.8s linear forwards infinite;
}

.grid__sizer {
  margin-bottom: 0 !important;
}

.grid__link,
.grid__img {
  display: block;
}

.grid__img {
  width: 100%;
}

.grid__deco {
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
}

.grid__deco path {
  fill: none;
  stroke: #fff;
  stroke-width: 2px;
}

.grid__reveal {
  position: absolute;
  z-index: 50;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  opacity: 0;
  background-color: #2c2d31;
}

.grid__item {}

.grid__item:hover>.cm-pic-author {
  opacity: 1;
}

.grid__item:hover>.cm-pic-social {
  opacity: 1;
}

.cm-pic-social {
  transition: opacity 0.6s ease-in-out;
  position: absolute;
  right: 10px;
  top: 10px;
  opacity: 0;
}

.cm-pic-social a {
  color: #ffffff;
  font-family: 'Roboto', sans-serif;
  text-shadow: 0 0 2px rgba(0, 0, 0, 0.6);
  font-size: .9em;
  text-decoration: none;
}

.cm-pic-social a:not(:last-child) {
  margin-right: 1em;
}

.cm-pic-author {
  transition: opacity 0.6s ease-in-out;
  position: absolute;
  left: 10px;
  bottom: 10px;
  opacity: 0;
}

.cm-pic-author a {
  font-family: 'Roboto', sans-serif;
  font-size: .9em;
  text-decoration: none;
  color: #ffffff;
  text-shadow: 0 0 2px rgba(0, 0, 0, 0.6);
}

.cm-pic-author a img {
  width: 35px;
  height: 35px;
  object-position: center;
  object-fit: cover;
  border: 1px solid #ffffff;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
  margin-right: 10px;
}

.grid .grid__item,
.grid .grid__sizer {
  width: calc(100% - 20px);
  margin: 0 10px 20px;
}

@media only screen and (min-width: 576px) {
  .grid .grid__item,
  .grid .grid__sizer {
    width: calc((100% / 2) - 20px);
    margin: 0 10px 20px;
  }
}


/* min-width 1200px, large screens */

@media only screen and (min-width: 1200px) {
  .grid .grid__item,
  .grid .grid__sizer {
    width: calc((100% / 3) - 20px);
    margin: 0 10px 20px;
  }
}


/* min-width 1500px, xlarge screens */

@media only screen and (min-width: 1500px) {
  /* Grid types */
  .grid-masonry .grid__item,
  .grid-masonry .grid__sizer {
    width: calc(25% - 20px);
    margin: 0 10px 20px;
  }
}


/* min-width 1800px, xlarge screens */

@media only screen and (min-width: 1800px) {
  /* Grid types */
  .grid-masonry .grid__item,
  .grid-masonry .grid__sizer {
    width: calc(20% - 20px);
    margin: 0 10px 20px;
  }
}


/*!* min-width 2400px, xlarge screens 5k*!*/


/*@media only screen and (min-width: 2400px){*/


/*!* Grid types *!*/


/*.grid-masonry .grid__item,*/


/*.grid-masonry .grid__sizer {*/


/*width: calc(16.666666% - 20px);*/


/*margin: 0 10px 20px;*/


/*}*/


/*}*/
<script src = "https://cdnjs.cloudflare.com/ajax/libs/animejs/2.2.0/anime.min.js"></script>
<script src = "https://cdnjs.cloudflare.com/ajax/libs/masonry/4.2.2/masonry.pkgd.min.js"></script>
<script src = "https://unpkg.com/imagesloaded@4/imagesloaded.pkgd.min.js"></script>
<div class = "content content--center">
  <div class = "grid grid-masonry">
    <div class = "grid__sizer"></div>
    <div class = "grid__item">
      <a class = "grid__link" href = "image-details.html">
        <img class = "grid__img" src = "https://i.imgur.com/dCFlYyG.jpg" alt = "Some image" />
      </a>

      <div class = "cm-pic-social d-flex">
        <a href = ""><span><img width = "16px" src = "images/add.svg" alt = ""></span> Collection</a>
        <a href = ""><span><img width = "16px" src = "images/love.svg" alt = ""></span> 50</a>
      </div>

      <div class = "cm-pic-author d-flex">
        <a href = "personal-profile-follow.html"><img src = "images/author@2x.png" alt = "">J. Alexa</a>
      </div>

    </div>
    <div class = "grid__item">
      <a class = "grid__link" href = "#"><img class = "grid__img" src = "https://i.imgur.com/Zneml4H.jpg" alt = "Some image" /></a>

      <div class = "cm-pic-social d-flex">
        <a href = ""><span><img width = "16px" src = "images/add.svg" alt = ""></span> Collection</a>
        <a href = ""><span><img width = "16px" src = "images/love.svg" alt = ""></span> 50</a>
      </div>

      <div class = "cm-pic-author d-flex">
        <a href = ""><img src = "images/author@2x.png" alt = "">J. Alexa</a>
      </div>

    </div>
    <div class = "grid__item">
      <a class = "grid__link" href = "#"><img class = "grid__img" src = "https://i.imgur.com/H4bbqpA.jpg" alt = "Some image" /></a>
      <div class = "cm-pic-social d-flex">
        <a href = ""><span><img width = "16px" src = "images/add.svg" alt = ""></span> Collection</a>
        <a href = ""><span><img width = "16px" src = "images/love.svg" alt = ""></span> 50</a>
      </div>

      <div class = "cm-pic-author d-flex">
        <a href = ""><img src = "images/author@2x.png" alt = "">J. Alexa</a>
      </div>
    </div>
    <div class = "grid__item">
      <a class = "grid__link" href = "#"><img class = "grid__img" src = "https://i.imgur.com/9Q9pgmR.jpg" alt = "Some image" /></a>
      <div class = "cm-pic-social d-flex">
        <a href = ""><span><img width = "16px" src = "images/add.svg" alt = ""></span> Collection</a>
        <a href = ""><span><img width = "16px" src = "images/love.svg" alt = ""></span> 50</a>
      </div>

      <div class = "cm-pic-author d-flex">
        <a href = ""><img src = "https://i.imgur.com/9Q9pgmR.jpg" alt = "">J. Alexa</a>
      </div>
    </div>
    <div class = "grid__item">
      <a class = "grid__link" href = "#"><img class = "grid__img" src = "https://picsum.photos/600/800" alt = "Some image" /></a>
      <div class = "cm-pic-social d-flex">
        <a href = ""><span><img width = "16px" src = "images/add.svg" alt = ""></span> Collection</a>
        <a href = ""><span><img width = "16px" src = "images/love.svg" alt = ""></span> 50</a>
      </div>

      <div class = "cm-pic-author d-flex">
        <a href = ""><img src = "images/author@2x.png" alt = "">J. Alexa</a>
      </div>
    </div>
    <div class = "grid__item">
      <a class = "grid__link" href = "image-details.html">
        <img class = "grid__img" src = "https://i.imgur.com/dCFlYyG.jpg" alt = "Some image" />
      </a>

      <div class = "cm-pic-social d-flex">
        <a href = ""><span><img width = "16px" src = "images/add.svg" alt = ""></span> Collection</a>
        <a href = ""><span><img width = "16px" src = "images/love.svg" alt = ""></span> 50</a>
      </div>

      <div class = "cm-pic-author d-flex">
        <a href = "personal-profile-follow.html"><img src = "images/author@2x.png" alt = "">J. Alexa</a>
      </div>

    </div>
    <div class = "grid__item">
      <a class = "grid__link" href = "#"><img class = "grid__img" src = "https://i.imgur.com/Zneml4H.jpg" alt = "Some image" /></a>

      <div class = "cm-pic-social d-flex">
        <a href = ""><span><img width = "16px" src = "images/add.svg" alt = ""></span> Collection</a>
        <a href = ""><span><img width = "16px" src = "images/love.svg" alt = ""></span> 50</a>
      </div>

      <div class = "cm-pic-author d-flex">
        <a href = ""><img src = "images/author@2x.png" alt = "">J. Alexa</a>
      </div>

    </div>
    <div class = "grid__item">
      <a class = "grid__link" href = "#"><img class = "grid__img" src = "https://i.imgur.com/H4bbqpA.jpg" alt = "Some image" /></a>
      <div class = "cm-pic-social d-flex">
        <a href = ""><span><img width = "16px" src = "images/add.svg" alt = ""></span> Collection</a>
        <a href = ""><span><img width = "16px" src = "images/love.svg" alt = ""></span> 50</a>
      </div>

      <div class = "cm-pic-author d-flex">
        <a href = ""><img src = "images/author@2x.png" alt = "">J. Alexa</a>
      </div>
    </div>
    <div class = "grid__item">
      <a class = "grid__link" href = "#"><img class = "grid__img" src = "https://i.imgur.com/9Q9pgmR.jpg" alt = "Some image" /></a>
      <div class = "cm-pic-social d-flex">
        <a href = ""><span><img width = "16px" src = "images/add.svg" alt = ""></span> Collection</a>
        <a href = ""><span><img width = "16px" src = "images/love.svg" alt = ""></span> 50</a>
      </div>

      <div class = "cm-pic-author d-flex">
        <a href = ""><img src = "https://i.imgur.com/9Q9pgmR.jpg" alt = "">J. Alexa</a>
      </div>
    </div>
    <div class = "grid__item">
      <a class = "grid__link" href = "#"><img class = "grid__img" src = "https://picsum.photos/600/800" alt = "Some image" /></a>
      <div class = "cm-pic-social d-flex">
        <a href = ""><span><img width = "16px" src = "images/add.svg" alt = ""></span> Collection</a>
        <a href = ""><span><img width = "16px" src = "images/love.svg" alt = ""></span> 50</a>
      </div>

      <div class = "cm-pic-author d-flex">
        <a href = ""><img src = "images/author@2x.png" alt = "">J. Alexa</a>
      </div>
    </div>

  </div>
</div>
Теперь я пытаюсь реализовать его как компонент vue, чтобы я мог отображать на любой странице просмотра.

Спасибо

 29.06.2019 17:19
2
1
3 482
2
Данный вопрос помечен как решенный
 Ответы 2
 Ответ принят как подходящий
вы можете установить его с помощью npm

npm install masonry-layout --save

а затем импортируйте его в свой компонент (или глобальный, если хотите)

Компонент

import Masonry from "masonry-layout";

export default {

    mounted: function () {

        // initialization of masonry

        var grid = document.querySelector('.masonry-grid');
        var msnry = new Masonry( grid, {
            // options...
            columnWidth: '.masonry-grid-sizer',
            itemSelector: '.masonry-grid-item',
            percentPosition: true
        });
    }
}
шаблон

  <template>
   <div>
    <!-- Blog Masonry Blocks -->
    <div class = "container ">
        <div class = "masonry-grid row ">
            <div class = "masonry-grid-sizer col-sm-1"></div>

            <div class = "masonry-grid-item col-lg-3">
                ...
            </div>

            <div class = "masonry-grid-item col-lg-3">
                ...
            </div>

            <div class = "masonry-grid-item col-lg-3">
                ...
            </div>
        </div>
    </div>
  </div>
</template>
 01.07.2019 20:31
Попробуйте установить npm install vue-masonry-css --save-dev это очень легко реализовать. https://github.com/paulcollett/vue-masonry-css

<masonry
  :cols = "3"
  :gutter = "30"
  >
  <div v-for = "(item, index) in items" :key = "index">Item: {{index + 1}}</div>
</masonry>
 20.08.2020 11:17
Другие вопросы по теме
Import firebase.firestore() возвращает значение undefined
Перемещение файла PhpStorm Vuejs добавляет «/ типы» в оператор импорта «vuex»
Как динамически добавить класс только к одному значению в li?
Ссылки на вложенные представления Vue и vue-router, содержащие ссылку на маршрутизатор в формате JSON
Выравнивание элементов портфеля
Vue.js/Vuetify: как сделать действия v-card реактивными?
Как исправить раскрывающийся список выбора динамической категории ввода с помощью ajax/json в vuejs
Как заполнить форму из данных состояния хранилища, возвращенных из vuex, с помощью геттеров?
Как сбросить объекты данных после нажатия кнопки
Добавление конфигурации pug-plain-loader в vue.config.js
Похожие вопросы
Как передать «это» из класса A в класс B?
Пытаюсь изменить цвет фона для определенных букв
Как исправить «Fetch API не может загрузить http://localhost:3000/static/js/0.chunk.js из-за проверок контроля доступа»
Как отключить редактирование ячеек в gridApi, если данные существуют в строках, но я хочу восстановить редактирование ячеек в пустых строках
Как я могу получать данные в режиме реального времени с сервера, чтобы обновить график диаграммы?
Как анимировать рисование линий на ткани холста JS
Форма Extjs и текстовая область не могут обрабатывать ввод с угловыми скобками ('<>'). Странное поведение, пользовательский интерфейс просто умирает
Как исправить Показывать div при прокрутке (React)
Как фильтровать данные из состояния в зависимости от значения ввода
Discord.js срабатывал несколько раз
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
Как добавить диалоговое окно vuetify в существующее приложение?
Вопросы
VUE.JS
Как добавить диалоговое окно vuetify в существующее приложение?
Я создал диалоговое приложение/компонент vue, используя vue cli. Он состоит из образца кнопки, по которой нужно щелкнуть, чтобы имитировать загрузку диалогового окна (Что мне нужно) при нажатии ссылки в существующем приложении. У меня есть пара проблем. При использовании v-app он добавляет оболочку приложения, которую мне не нужно видеть, поскольку это единственный диалог, который я хочу. Это создает огромные пробелы, которые не нужны. Если я удалю его, возникнет ошибка [Vuetify] Unable to locate target [data-app], и диалог не загрузится, когда <div @click='getInformation('USA')'></div> используется в существующем приложении.

Пробовал удалить v-app и просто использовать шаблон, но ошибка не исчезла. Кажется, мне нужно каким-то образом указать v-app. Потерянный здесь

Пример того, как я пытаюсь это сделать, но не работаю в App.vue

<template>
    <div v-resize = "onResize">
        <v-dialog>
            <v-card>
            {{ information }}
            </v-card>
        </v-dialog>
    </div>
</template>

<script>

export default {
  data() {
    return {
      isMobile: false,
      information: []
    };
  },
  methods: {
    onResize() {
      if (window.innerWidth < 425) this.isMobile = true;
      else this.isMobile = false;
    },
    getInformatiom(country) {
        axios
          .get(`${api}/${country}/info`, {
            headers: {
              Authorization: `token`
            }
          })
          .then(response => {
            this.information = response.data.info;
          });   
    }
  }
};
main.js

import Vue from "vue";
import App from "./App.vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";

Vue.use(Vuetify);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
Диалоговый компонент готов к работе, просто у него так много проблем с его отображением, когда он вызывается из существующего приложения. Просто примечание: существующее приложение не использует Vue, его единственный классический asp, я только обновляю диалоговое окно на странице, чтобы оно выглядело/работало лучше, используя vue/vuetify. Любая помощь будет БЛАГОДАРНА

 15.07.2019 20:35
1
2
1 068
2
Данный вопрос помечен как решенный
 Ответы 2
 Ответ принят как подходящий
Вам НУЖЕН элемент v-app с vuetify.

Попробуйте это, чтобы использовать приложение только при отображении диалогового окна. Затем используйте CSS для настройки v-app.

<v-app v-if='this.information && this.information.length'>
   <v-dialog>...</v-dialog>
</v-app>
 16.07.2019 08:26
Я бы использовал max-width опору v-dialog, сделал ее динамической, добавив :max-width, а затем привязал ее к вычисляемому свойству, которое подписывается на размер вашего экрана. Я бы не стал пытаться управлять им из внешнего div. См. здесь полный список вариантов размеров https://vuetifyjs.com/en/components/dialogs

 16.07.2019 08:27
Другие вопросы по теме
Vuejs Динамическое изменение заполнения?
Как настроить данные таблицы с помощью BootstrapVue?
Vuetify autocomplete похожие элементы не отображаются
Как создать событие из функционального компонента JSX в Vuejs
Ошибка сборки Vue js
В Bootstrap + Vue, как использовать значение свойства данных внутри vb-modal?
Установите мета-свойства по умолчанию на Vue Router
Обнаружение неопределенного/нулевого свойства объекта в приложении vue
Доступ к ответу от одного запроса GET в другом
Получить входные значения из дочерних компонентов в Vue
Похожие вопросы
Vue Chart.js — могу ли я указать линейному графику значение по умолчанию для отсутствующих данных?
Vue, Vuex, JavaScript: include() не работает должным образом
Как изменить вкладки Vuetify вместе с vue-router программно
Запустите JavaScript на vue.js
Как отображать элементы магазина в цикле v-for с сеткой Vuetify?
Vuetify — точки останова для столбцов
Как передать элемент из смонтированного в HTML-шаблон
Как включить второй раскрывающийся список только после выбора первого раскрывающегося списка?
Vuetify autocomplete похожие элементы не отображаются
Как я могу получить имя текущего маршрута в vue.js?
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
Не удалось создать проект с шаблоном vue cli 3 из-за svg в css
Вопросы
VUE.JS
Не удалось создать проект с шаблоном vue cli 3 из-за svg в css
При переходе на vue-cli 3 я столкнулся со следующей проблемой. Я импортирую css плагина в свой app.scss.

Эта строка: background-image: url(default-skin.svg); нарушает работу yarn build, что вызывает следующую ошибку:

Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):
ReferenceError: navigator is not defined
Вот мой vue.config.js:

const path = require('path')
const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin')

const ASSETS_DIR = 'static'

module.exports = {
  assetsDir: ASSETS_DIR,
  runtimeCompiler: true,
  chainWebpack: config => {
    config
      .plugin('provide-plugin')
        .use(webpack.ProvidePlugin, [{
          axios: "axios",
          $: "jquery",
          jQuery: "jquery",
          _: "lodash",
          mapGetters: ['vuex', 'mapGetters'],
          mapActions: ['vuex', 'mapActions']
        }])
        .end()
      .plugin('copy-plugin')
        .use(CopyWebpackPlugin, [
          [{
            from: path.resolve(__dirname, 'static'),
            to: ASSETS_DIR,
            ignore: ['.*']
          }]
        ])
        .end()
      .plugin('sprite-loader-plugin')
        .use(SpriteLoaderPlugin)

    config.module
      .rule('svg')
        .test(/\.svg$/)
        .use('file-loader')
          .loader('svg-sprite-loader')
  }
}
Любое решение?

Обновить

CSS, который нарушает сборку пряжи

Package.json:

{
  "name": "f2c",
  "version": "1.0.0",
  "description": "A Vue.js project",
  "author": "Victor Ponamariov <victor.ponamariov@gmail.com>",
  "private": true,
  "scripts": {
    "serve": "vue-cli-service serve",
    "build": "vue-cli-service build",
    "lint": "vue-cli-service lint"
  },
  "dependencies": {
    "animate.css": "^3.6.1",
    "axios": "^0.18.0",
    "blueimp-canvas-to-blob": "^3.14.0",
    "fabric": "^2.3.3",
    "flexboxgrid": "^6.3.1",
    "intl-tel-input": "^12.4.0",
    "jquery": "^3.3.1",
    "libphonenumber-js": "^1.2.21",
    "lodash": "^4.17.10",
    "masonry-layout": "^4.2.1",
    "moment": "^2.22.2",
    "nprogress": "^0.2.0",
    "perfect-scrollbar": "^1.4.0",
    "photoswipe": "^4.1.2",
    "portal-vue": "^1.3.0",
    "raven-js": "^3.25.2",
    "sharer.js": "^0.3.3",
    "stickyfilljs": "^2.0.5",
    "tippy.js": "^2.5.2",
    "vee-validate": "^2.0.6",
    "vue": "^2.5.2",
    "vue-analytics": "^5.14.0",
    "vue-carousel": "^0.9.0",
    "vue-clipboard2": "^0.1.1",
    "vue-cropperjs": "^2.2.0",
    "vue-gtm": "^1.0.2",
    "vue-i18n": "^8.0.0",
    "vue-infinite-loading": "^2.3.3",
    "vue-infinite-scroll": "^2.0.2",
    "vue-meta": "^1.5.2",
    "vue-mq": "^0.2.1",
    "vue-multiselect": "^2.1.0",
    "vue-perfect-scrollbar": "^0.1.0",
    "vue-popperjs": "^1.2.6",
    "vue-router": "^3.0.1",
    "vue-select": "^2.4.0",
    "vue-slider-component": "^2.7.4",
    "vue-social-sharing": "^2.3.3",
    "vue-star-rating": "^1.6.0",
    "vue-sweetalert2": "^1.5.2",
    "vue-tippy": "^2.0.18",
    "vue-yandex-metrika": "^1.6.1",
    "vuex": "^3.0.1"
  },
  "devDependencies": {
    "@vue/cli-plugin-babel": "^3.0.0-rc.5",
    "@vue/cli-plugin-eslint": "^3.0.0-rc.5",
    "@vue/cli-service": "^3.0.0-rc.5",
    "copy-webpack-plugin": "^4.5.2",
    "node-sass": "^4.9.2",
    "normalize.css": "^8.0.0",
    "postcss-import": "^11.1.0",
    "postcss-url": "^7.3.2",
    "sass-loader": "^7.0.3",
    "svg-sprite-loader": "^3.8.0",
    "vue-template-compiler": "^2.5.16",
    "webpack-svgstore-plugin": "^4.0.3"
  },
  "eslintConfig": {
    "root": true,
    "env": {
      "node": true
    },
    "extends": [
      "plugin:vue/essential",
      "eslint:recommended"
    ],
    "globals": {
      "$": false,
      "jQuery": false,
      "_": false,
      "axios": false,
      "VK": false,
      "gapi": false,
      "FB": false,
      "mapGetters": false,
      "mapActions": false
    },
    "rules": {},
    "parserOptions": {
      "parser": "babel-eslint"
    }
  },
  "postcss": {
    "plugins": {
      "autoprefixer": {},
      "postcss-import": {},
      "postcss-url": {}
    }
  },
  "browserslist": [
    "> 1%",
    "last 2 versions",
    "not ie <= 8"
  ]
}
Структура папок приложения:

Не удалось создать проект с шаблоном vue cli 3 из-за svg в css

 24.08.2018 03:07
9
5
1 540
3
 Ответы 3
Попробуйте удалить папку модулей узлов, а затем снова запустите yarn install.

Если не сработало, попробуйте:

global.navigator = {
  userAgent: 'node.js'
};
 26.08.2018 11:08
Ссылка vue-pswipe, GuoQichen использует эту конфигурацию для svg.

config.module
  .rule('svg')
  .use('file-loader')
  .clear()
  .loader('url-loader')
  .options({
    limit: 4 * 1024,
    name: 'img/[name].[hash:8].[ext]',
  })
 29.08.2018 02:54
У меня нет исправления или полного объяснения, но есть обходной путь ...

Проблема, по-видимому, вызвана postcss-import при импорте файла CSS из тега <style> SFC:

// App.vue
<style lang = "scss">
  @import 'app.scss'; /* imports default.css -> default-skin.svg */
</style>
Вы можете обойти ошибку сборки, переместив импорт в тег <script> (или в main.js):

// App.vue
<script>
  import 'app.scss'; /* imports default.css -> default-skin.svg */
</script>
см. Репозиторий GitHub

 01.09.2018 09:55
Другие вопросы по теме
Команда Vue не найдена
Включить файл проверки html в корень Vue
Vue-cli 3.x - изменить src и общедоступные каталоги
Отладка NativeScript-Vue при использовании vue-cli-template
Vue / cli 3 неудовлетворенные зависимости
'vue' не распознается как внутренняя или внешняя команда, работающая программа или командный файл
Как переименовать index.html в сборке vue.js?
Как настроить виртуальный хост для проекта Vue CLI 3
Странная ошибка @ vue-cli 3 с зависимостью пакета @ vue / eslint-config-standard @ ^ 3.0.1
Vue.js - загрузка глобального файла _variables.scss
Похожие вопросы
VueJS: <template> vs <div> или связанный для группировки элементов для условного рендеринга
Vue не может прочитать свойство undefined
Vee-validate не работает с областями действия с использованием Nuxt.js и Vuetify
Как привязать событие закрытия окна в vuejs
Vue CLI 3: горячая перезагрузка требует много времени для восстановления
Установить цвет <span> во время итерации списка
Неожиданное поле появляется при загрузке файлов CSV в Node.js с помощью Multer
Vue не обновляет массив информации v-for
Почему компонент Vue не обновляется при изменении выбора
Laravel и Vue в WAMP - компоненты не компилируются, просто отображаются как их имена компонентов
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
Как изменить соответствие файлов по умолчанию модульному тесту в vue-cli 3
Вопросы
VUE CLI 3
Как изменить соответствие файлов по умолчанию модульному тесту в vue-cli 3
Я использую vue-cli 3.0 и создал проект с ручными функциями выбора модульного теста (mocha + chai). Соответствующие файлы по умолчанию: любые файлы в tests/unit, которые заканчиваются на .spec.(ts|js). Есть ли способ изменить целевой каталог и шаблон файлов?

Я хочу изменить целевой каталог с tests/unit на root directory, где находится файл package.json. Но я не могу найти, как изменить целевой каталог.

И я попробовал это, чтобы изменить шаблон файла. Но это не работает.

"scripts": {
    "test:unit": "vue-cli-service test:unit --glob '*.test.js'"
}
Я также читал это: https://github.com/vuejs/vue-cli/issues/1245. Мне нужно именно то, что сказал @iamceege. Стоит ли самому устанавливать тестовую среду без настроек по умолчанию?

 31.08.2018 10:12
1
0
2 412
3
 Ответы 3
package.json

"scripts": {
   ...,
   "test": "vue-cli-service test:unit --watch --recursive 'src/**/*_test.ts'",
   ...
},
Официальная документация:

Параметры плагина модульного тестирования (mocha)

Аргументы веб-пакета (мокко)

 09.09.2018 10:36
попробуйте без одинарных кавычек вокруг капли

"scripts": {
    "test:unit": "vue-cli-service test:unit --glob *.test.js"
}
 02.04.2019 02:20
В вашем файле jest.config.js вы можете определить переменную testMatch. Полный вариант здесь.

Поскольку вам нужен корневой каталог, вы можете попробовать что-то вроде:

// inside jest.config.js
    testMatch: [
      '*.test.js']
Обратите внимание, что вы можете объединить несколько селекторов в массив.

 04.06.2021 03:57
Другие вопросы по теме
Как добавить правила оптимизации cssnano в vue-cli 3?
Как изменить конфигурацию микса на vue.config.js
Не удалось создать проект с шаблоном vue cli 3 из-за svg в css
Vue CLI 3: горячая перезагрузка требует много времени для восстановления
Развертывание Vue js в продакшене кажется сложнее, чем
Vuejs - Ошибка при перенаправлении в производственном режиме
Vue-cli 3.x - изменить src и общедоступные каталоги
Импортировать модуль js в файл js в vuejs2
Vue / cli 3 неудовлетворенные зависимости
Как добавить PurifyCSS в проект Vue CLI 3 в vue.config.js
Похожие вопросы
Почему для vue-cli есть две команды запуска vuejs?
Не удалось загрузить изображение стандартной настройки Vuetify (babel / eslint)
Объедините зависимость vue в сборку веб-компонента с помощью vue-cli 3
Vagrant VirtualBox Local Dev Env, Ubuntu, Yarn, Vue CLI 3 - Проблемы
Проект VUE CLI-3 не работает на IE-11
Использование vuex store с npm-link в проекте vue-cli 3 теряет $ store
Можно ли создать распространяемый виджет Vue с однофайловыми компонентами?
Файлы node cmd собираются в root вместо папки .bin?
Vue-CLI 3.0 - как изменить производственные ссылки?
V-form и v-text-field не работают в vue cli 3.0
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
Невозможно получить доступ к проекту Vue по IP-адресу на других устройствах vue cli 3 npm
Вопросы
NPM
Невозможно получить доступ к проекту Vue по IP-адресу на других устройствах vue cli 3 npm
У меня есть проект, созданный с помощью vue cli 3. Когда я запускаю команду «npm run serve», появляется следующее сообщение об успешном завершении (я заменил свой IP-адрес на поддельные #):

App running at:
- Local: http://localhost:8080/
- Network: http://1.2.3.4:8080/
На моем компьютере все отлично работает. На моем собственном компьютере я могу получить доступ как по локальному, так и по IP-адресу, но я не могу получить доступ с помощью сетевого адреса на других устройствах, подключенных к той же сети Wi-Fi.

Я пробовал следующее:

On vue.config.js:
devServer: {
    host: '0.0.0.0'
}

and
devServer: {
    open: process.platform === 'darwin',
    host: '0.0.0.0',
    port: 8080,
    https: false,
    hotOnly: false
}

on my package.json:
"scripts": {
    "serve": "vue-cli-service serve --host 0.0.0.0",
    "build": "vue-cli-service build",
    "lint": "vue-cli-service lint"
}

and
"scripts": {
    "serve": "vue-cli-service serve --host 0.0.0.0 --allowed-hosts 1.2.3.4",
    "build": "vue-cli-service build",
    "lint": "vue-cli-service lint"
}
Мой сервер tomcat работает на порту 80, и он отлично работает как на моем компьютере, так и на других устройствах ... Я не уверен, что еще делать ...

Это страница ошибки, с которой я столкнулся: Невозможно получить доступ к проекту Vue по IP-адресу на других устройствах vue cli 3 npm Как мне сделать так, чтобы я мог получить доступ к своему проекту vue с других устройств в той же сети?

Спасибо за ваше время и помощь!

 14.09.2018 19:39
23
0
7 676
3
 Ответы 3
Потому что вы получаете доступ только к своему устройству. Давайте попробуем удалить --allowed-hosts 1.2.3.4

 28.08.2019 09:41
Во-первых, в параметре host сервера разработчика вы должны добавить законный IP-адрес вашего маршрутизатора, чтобы он работал, но если вам не требуются определенные настройки, просто хотите, чтобы он обслуживался в вашей сети:

Обычно я просто делаю это в своем package.json:

 "serve": "vue-cli-service serve",
и vue.config.js, вы можете удалить все, что связано с devServer. Это создаст сервер разработки, который будет работать в вашей сети.

 04.11.2020 11:07
До настоящего времени npm run serve в любом проекте Vue.js позволит вам получить доступ к проекту с любого устройства локально или в сети (приложение, работающее в):

Vue.js Serve Project

Если вы находитесь в Windows (в качестве хоста) и проект недоступен с других устройств в сети по указанному адресу через интерфейс командной строки, вам необходимо разрешить входящие подключения Node.js в настройках брандмауэра:

Allow Inbound Connections Node.js Firewall

Найдите правила, связанные с Node.js, и измените их, разрешив входящие соединения:

Allow Inbound Connections Windows

В моем случае у меня было 4 правила, связанных с Node.js, после разрешения входящих подключений я смог получить доступ к проекту, обслуживаемому с моего рабочего стола, на моем мобильном устройстве в той же сети.

 16.07.2021 17:28
Другие вопросы по теме
Datatables Ajax Cant отрисовывает компонент Vue
Ссылка на слот для определения родительской функции
Как я могу использовать данные в дочернем компоненте, которые обновляются в родительском компоненте с помощью Vue.js?
Nativescript vue, как получить файл .apk?
VueJS v-for: удалить дубликаты
V-образный вид с использованием фигурных скобок
Определите родительский метод
Функция в vuejs выполняется более одного раза
Как получить идентификатор определенного узла дерева, когда я нажимаю на него, а затем передаю эти данные в свою переменную
Vue-i18n - Обнаруживает «неизвестный» тип токена
Похожие вопросы
Папка шрифтов Rails 5.2 в активах выдает ошибку 404 (не найдено)
Node.js Анализируйте огромный CSV и находите конкретную строку данных по идентификатору
Может resolveWithFullResponse: true сделать ответ более сложным с точки зрения сети?
Как создать конкретную версию Angular Project с помощью CLI?
Ошибка синтаксического анализа: неожиданный токен = ReactJs
MomentJS недействительная дата
Как обновить версию npm
Угловые ошибки запуска в package.json
Ошибка при установке старой версии кордовы
Обработка исключений в node js, например java?
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
Не могу установить переменные env в моем проекте vuejs2
Вопросы
VUEJS2
Не могу установить переменные env в моем проекте vuejs2
Я пытаюсь установить URL-адрес API в файле .env, мой файл .env находится в корневой папке моего проекта. Я использую префикс VUE_APP_.

Согласно документу файл .env загружается в любом случае. Так не должен ли я получать его каждый раз?

Я использую MacOS, без Vuex.

Мой файл .env

VUE_APP_API_URL: '"http://localhost:3000/"'
Мой файл .vue

        data() {
            return {
                test: process.env.VUE_APP_API_URL
            }
        },
Я ожидал получить http://локальный: 3000/, но получил undefined

 07.04.2019 10:37
0
0
93
2
Данный вопрос помечен как решенный
 Ответы 2
Вам нужно будет сослаться на файл .env в Webpack, чтобы переменные были скомпилированы в сборку. Причина, по которой вы не можете ссылаться на переменные, заключается в том, что они не анализируются в вашей сборке/общедоступной папке.

я бы использовал что-то вроде https://github.com/mrsteele/dotenv-вебпак

 07.04.2019 17:05
 Ответ принят как подходящий
Ваш синтаксис неверен в вашем файле .env. Это VUE_APP_API_URL = с = не :.
И вам не нужны двойные а также простые кавычки.

Это должно работать следующим образом:

VUE_APP_API_URL = 'http://localhost:3000/'
 08.04.2019 00:43
Другие вопросы по теме
Angular 6 разница между .env и environment.ts
Создайте новую переменную bash из значения переменной dict bash
Emacs: как настроить домашнюю среду в зависимости от имени пользователя
Файл конфигурации .npmrc не читает переменную среды для загрузки модуля частного узла
System.getenv() не может получить параметр переопределения, установленный в IntelliJ IDEA
Все переменные среды Vue-cli 3 не определены
Можно ли передать динамическую переменную в process.env, чтобы получить переменную env? Например, process.env['имя переменной']
Как установить переменные среды с помощью Node?
Переменные из отдельного файла, загруженного во время выполнения скрипта NPM
Как использовать переменные ENV в Artisan Commands в Laravel 5.8?
Похожие вопросы
Вручную монтировать глобально зарегистрированный компонент Vue в устаревшее приложение?
Vue.js: Есть ли способ сделать кнопки «v-if» реактивными через наблюдатель?
Компонент VueJS не показывает правильные данные
Упаковать приложение nuxt в другую среду
Как включить локальные файлы сценариев в Vue
Как визуализировать компоненты, сгенерированные из строки внутри метода?
Ошибка привязки данных Vuejs 2
Регистрация компонента Vue JS
Как использовать вычисляемые свойства в vue-классе для v-модели?
Vue-test-utils: не удалось перезаписать свойство $route, обычно это вызвано плагином, который добавил свойство как значение только для чтения
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
Как использовать exclude с загрузчиком babel в vue cli3?
Вопросы
VUE.JS
Как использовать exclude с загрузчиком babel в vue cli3?
Я хочу использовать exclude, чтобы игнорировать некоторые каталоги, чтобы не компилировать, но в Vue Cli3 это не работает. Мой вариант:

chainWebpack: config => {
  config.module
    .rule('js')
    .test(/\.jsx?$/)
    .use('babel-loader')
    .loader('babel-loader')
    .exclude
    .add(resolve('src/libs/iview'))  // this line not work
    .end();
  }
Ошибка:

 TypeError: Cannot read property 'add' of undefined
 08.03.2019 04:29
0
0
1 269
2
 Ответы 2
Просто удалите это:

.use('babel-loader')
.loader('babel-loader')
и это работает.

 08.03.2019 04:55
Чтобы исключить файл из транспайла Babel, вы можете использовать параметр excludes для js babel-loader. Пример ниже.

Предостережения:

Строки должны быть абсолютными путями (при необходимости используйте path.resolve)
Регулярное выражение работает
Функции работают
// const path = require('path') // somewhere at the top of the file...
chainWebpack: config => {
  config.module
    .rule('js')
      .exclude
      .add(/path/to/folder/.+\.ignore/) // Regexp: ignore anything inside of path/to/folder that has .ignore in the file extension
//    .add(path.resolve('./path/to/the/folder')) // example with a nix folder
//    .add('C:\\path\\to\\the\\folder\\') // absolute path, example with a Windows folder
    .end()
}
Команда vue inspect module.rules вернет:

[...]
/* config.module.rule('js') */
  {
    test: /\.m?jsx?$/,
    exclude: [
      function () { /* omitted long function */ },
      'C:\\path\\to\\the\\folder\\'
    ],
    use: [
      /* config.module.rule('js').use('cache-loader') */
      {
        loader: 'cache-loader',
        options: {
          cacheDirectory: '[...]\\node_modules\\.cache\\babel-loader',
          cacheIdentifier: '2e75750d'
        }
      },
      /* config.module.rule('js').use('babel-loader') */
      {
        loader: 'babel-loader'
      }
    ]
  }
 27.11.2019 13:07
Другие вопросы по теме
Не удается найти модуль «babel-preset-реагировать»
Не удается скомпилировать большой статический массив или набор в Babel/Vue
Ошибки консоли Reactjs: «Объект компонентов устарел» и «ReferenceError: требование не определено»
Ошибка Webencore: обнаружен дубликат плагина/пресета
Зачем использовать Webpack для объединения приложений, работающих в среде узла
Транспилить gulp-babel с >=ES6 на ES5
Babel не работает при импорте из `node_modules` через загрузчик Webpack
Babel оценивает переменную в строку
Ошибка Babel Webpack: вам может понадобиться соответствующий загрузчик для обработки этого типа файла
Babel с babel-preset-env, похоже, игнорирует конфигурацию списка браузеров
Похожие вопросы
Как сгенерировать pdf из html и css в Vuejs?
Маршруты API Laravel не найдены
Vue "v-for" показывает только последнюю итерацию (в v-select)
Vuejs получил синтаксическую ошибку при производственной сборке
Перетаскивание в VueJS
@import "./assets/scss/style" вызывает сбой приложения
Не удалось установить cookie с флягой
Как получить объект в v-модели? Vuetify
Dedupe CSS в режиме разработки Vue.js
Как тестировать простые компоненты Vue (не отдельные файловые компоненты)
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
.env VUE_APP_ переменная json?
Вопросы
VUE.JS
.env VUE_APP_ переменная json?
Начал использовать vue cli 3 и наткнулся на вариант использования, на который я не могу найти ответа.

Как я могу установить переменную среды через файл .env (например, .env.development, .env.production и т. д.), Который предоставляет объект JSON? Кроме того, есть ли способ загрузить содержимое внешних файлов в переменную среды (то есть, требуется)?

Благодарю за помощь!

 04.10.2018 17:58
1
0
2 119
3
Данный вопрос помечен как решенный
 Ответы 3
Вы должны различать, какой профиль использует точка . (как .env.production или .env.development), и формат должен быть KEY = value, вы не можете поместить здесь объект json, только строки, но вы можете использовать JSON.parse в своем коде для десериализации любой строки в файл.

Vue cli разрешит доступ только к переменным среды, которые начинаются с VUE_APP_, а для доступа - process.env.VUE_APP_SECRET.

Вы можете найти это и многое другое в документы

 04.10.2018 20:04
Вы можете stringObj = JSON.stringfy (YourJson), Затем сохраните эту строку внутри VUE_APP_SOME_KEY_NAME.

но когда вы будете его использовать, вам сначала придется использовать JSON.parse ().

Таким образом, вы не можете напрямую хранить объект json в файле .dotEnv значения ключа.

Другой вариант - загрузить эти файлы json на основе process.env.NODE_ENV. like: require (`config.${process.env.NODE_ENV}.js)

 05.10.2018 08:00
 Ответ принят как подходящий
Я нашел решение своей проблемы ...

Хотя предыдущие ответы жизнеспособны, я не хотел использовать JSON.parse каждый раз, когда хотел использовать JSON в переменной среды.

Подход, который я использовал, заключался в том, чтобы хранить в каждом файле, зависящем от среды (например, .env-development, .env-production, .env-test), путь к файлу, содержащему JSON. Например...

VUE_APP_JSON_FILE=./.env.development.json-data
Этот файл будет содержать необработанный JSON ...

Затем в моем vue.config.js я использовал webpack DefinePlugin, чтобы загрузить файл и сделать его доступным через глобальную переменную. Например...

new webpack.DefinePlugin({
     VUE_APP_JSON: JSON.stringify(process.env.VUE_APP_JSON_FILE)
})
Определение новой переменной сделает json доступным как объект, где в моем приложении я могу просто ссылаться на VUE_APP_JSON.property. Это избавляет меня от необходимости JSON.parse переменной во всем моем приложении.

 15.10.2018 13:42
Другие вопросы по теме
Vue - компилировать другую папку вне / src в проекте Vue.js
Как я могу прочитать значения из статического файла config.json в TypeScript в файле Vue после запуска build: electronic в Vue CLI 3?
Vue CLI 3 не конвертирует поставщиков на ES5
Машинопись Vue CLI 3 - свойство 'x' не существует для типа 'Vue'
Почему я получаю ERR_CONNECTION_TIMED_OUT в Vue.js?
VueJS - [Предупреждение Vue]: не удалось смонтировать компонент: шаблон или функция рендеринга не определены
Как добавить leaflet.timeline к слою?
Интегрируйте Vue-CLI 3 с Symfony 4
Добавление Vuetify в шаблон проекта из vue-cli 3: добавление тегов скрипта в App.vue нарушает работу приложения?
Добавление Leaflet.timeline npm в Vue-cli 3 устарело? TypeError: невозможно прочитать свойство 'bottomleft' из undefined
Похожие вопросы
Предупреждение JavaScript: присвоение свойству параметра функции
VueJS - неизвестный тип локального действия: addProductToCart, глобальный тип: cart / addProductToCart
NativeScript-Vue Canvas и requestAnimationFrame
Редактировать значение props дочернего компонента прямо в теге компонента
Шаблон не работает в IE из-за специального символа
Nuxt.js: понимание компонента <nuxt-child>
Настройки отладчика для Chrome в VS Code с Vue.js
Как мне тестировать компоненты vue при использовании Firebase?
Используйте компоненты Vue.js внутри классического приложения ASP
Пользовательский эффект перехода между шаговыми панелями
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
Отключить плагин PWA в Vue CLI 3
Вопросы
VUE.JS
Отключить плагин PWA в Vue CLI 3
У меня возникли проблемы с кешированием файлов с помощью работника службы по умолчанию, который поставляется с VueCLI 3. Я бы предпочел просто использовать механизм кеширования браузера по умолчанию, но не могу отключить плагин PWA, так как его нет в файле vue.config.js. . Передача пустого объекта параметру pwa также не работает, поскольку объект объединяется, а не перезаписывается.

 14.10.2018 10:35
20
0
9 543
3
Данный вопрос помечен как решенный
 Ответы 3
 Ответ принят как подходящий
Я решил это, выполнив следующие действия:

Удаление файла registerServiceWorker.js
удаление импорта registerServiceWorker.js из main.js.
удаление плагина PWA из devDependencies в package.json.
 14.10.2018 10:35
Vue включил метод отключения pwa для определенных сборок в версии 4. Теперь вы можете добавить --skip-plugins pluginname во время сборки. Этот сработал для меня отлично:

 npx vue-cli-service build --skip-plugins pwa,workbox
Ссылка: https://cli.vuejs.org/guide/cli-service.html#skipping-plugins

 07.04.2019 15:35
Есть открытое, но принятое предложение добавить это к основным функциям: https://github.com/vuejs/vue-cli/issues/3830

Обновлено:

Через командная строка: https://cli.vuejs.org/guide/cli-service.html#skipping-plugins

npx vue-cli-service build --skip-plugins pwa,workbox

Через vue.config.js:

module.exports = {
  chainWebpack: config => {
    config.plugins.delete('pwa');
    config.plugins.delete('workbox');
  }
}
 03.07.2019 11:12
Другие вопросы по теме
Почему карта openlayers не работает в vue-cli 3
Как построить без хеширования файлов в VueCli
Точка входа - webpack.config.js vs vue.config.js
В vue-cli 3.0 как сгенерировать полный webpack.config.js
Как отключить горячую замену модуля с помощью vue-cli-service serve?
Vue Dev Tools - не работает кнопка «Открыть в редакторе». Как это исправить?
Приложение Vue CLI3, атрибуты srcset и размеры HTML не поддерживаются?
Vuejs image src динамическая загрузка не работает
Vue-CLI с 4-х пространственным идентификатором
Проверить версию vuetify
Похожие вопросы
Как изменить значение в дочернем компоненте Vue
Сохраненное состояние vuex не работает с защитой навигации маршрутизатора vue
JWT не работает на живом сервере с Vuejs, Laravel
Как получить доступ к значениям объекта JSON с помощью шагов vue?
Vue.js это не определено внутри вычисляемого свойства
Как получить доступ к состоянию в js файле VUEX
Расширить и переназначить компонент vuetify
Vue: как дождаться завершения одного метода перед запуском другого
Как заставить CSS IntelliSense работать над проектом Nuxt?
Модальное окно не активно
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
Как я могу сообщить Vue-cli, где находится точка входа в мое приложение?
Вопросы
JAVASCRIPT
Как я могу сообщить Vue-cli, где находится точка входа в мое приложение?
Мое приложение разделено на API и UI. Стратегия развертывания требует, чтобы они совместно использовали package.json. Файловая структура выглядит как

client/
       src/
           main.js
api/
package.json
vue.config.js
Я использую стандартные скрипты vue-cli.

package.json

"scripts": {
  "serve:ui": "vue-cli-service serve",
  "build:ui": "vue-cli-service build",
  "lint:ui": "vue-cli-service lint",
  "test:unit": "vue-cli-service test:unit"
}
Когда я делаю npm run serve:ui, я получаю

This relative module was not found:

* ./src/main.js in multi ./node_modules/@vue/cli-service/node_modules/webpack-dev-server/client?http://10.0.2.15:8080/sockjs-node ./node_modules/@vue/cli-service/node_modules/webpack/hot/dev-server.js ./src/main.js
Итак, я попытался изменить vue.config.json согласно документы:

vue.config.js

const path = require('path');
module.exports = {
    entry: {
        app: './client/src/main.js'
    }
}
Теперь я получаю сообщение об ошибке:

 ERROR  Invalid options in vue.config.js: "entry" is not allowed
Как мне сообщить vue-cli, где находится точка входа в мое приложение?

 16.10.2018 20:24
11
2
10 237
3
Данный вопрос помечен как решенный
 Ответы 3
 Ответ принят как подходящий
На основе этого Проблема с Github я обнаружил, что вы можете передать настраиваемую точку входа только в командной строке. Это верно как для build, так и для serve. См. Также в документации единственный блок кода, демонстрирующий это.

Usage: vue-cli-service serve [options] [entry]
Я изменил свой сценарий на

    "serve:ui": "vue-cli-service serve client/src/main.js",
и теперь он может найти точку входа.

 16.10.2018 20:31
Я считаю, что вы пытаетесь запустить приложение nodejs с vue в качестве интерфейса. Некоторое время назад я столкнулся с некоторыми проблемами, аналогичными этой, и исправил их, установив в проект laravel-mix, который помогает мне скомпилировать vue.

"scripts": {
    "start": "node app.js",
    "dev": "NODE_ENV=development webpack --progress --hide-modules --config=node_modules/laravel-mix/setup/webpack.config.js",
    "watch": "NODE_ENV=development webpack --watch --progress --hide-modules --config=node_modules/laravel-mix/setup/webpack.config.js | nodemon app.js",
    "hot": "NODE_ENV=development webpack-dev-server --inline --hot --config=node_modules/laravel-mix/setup/webpack.config.js",
    "production": "NODE_ENV=production webpack --progress --hide-modules --config=node_modules/laravel-mix/setup/webpack.config.js | node app.js"
  },
Поэтому, когда я запускаю npm run watch, он запускает команду vue-cli и включает приложение узла. все в реальном времени. Создайте новый файл в корневом каталоге с именем webpack.mix.js.

Вставьте эти строки:

let mix = require("laravel-mix");
mix.js("src/js/app.js", "public/js")
   .sass('src/scss/app.scss', 'public/css’);
src/js/app.js - это основной файл vue, который компилируется в public/css.

 16.10.2018 20:42
Вы можете добавить entry в вариант страниц и убедиться, что вы также включили template.

vue.config.js

module.exports = {
  pages: {
    app: {
      entry: 'client/src/main.js',
      template: 'client/public/index.html',
    },
  },
};
Если вам не нравится отдельный файл для этой конфигурации, вы также можете добавить его в файл package.json:

package.json

  "vue": {
    "pages": {
      "index": {
        "entry": "client/src/main.js",
        "template": "client/public/index.html"
      }
    }
  },
 15.07.2019 23:01
Другие вопросы по теме
Vuex должен вызвать Vue.use (Vuex) перед созданием экземпляра магазина
Использовать константу в качестве имени свойства в шаблоне
Не удается разрешить 'products.json' в местоположении файла с абсолютным путем в vue / webpack
Как привязать метод, передав имя метода через переменную в @click
Асинхронная задача не реагирует в представлении vuejs
Насколько безопасно использовать Vue.js для встраиваемого контента?
Vue: отображать тег <script> внутри переменной (строки данных)
Vue JS - Как отображать изображение с динамическим URL без ошибок?
Вычисленное свойство vuejs для цикла не увеличивает
SyntaxError: неожиданный импорт токена при использовании Nuxt 2.0 build.transpile
Похожие вопросы
Как добавить изображение в React с помощью посылки?
Как присвоить значение из php моей переменной скрипта, которое будет использоваться для координат flighplan в googlemap?
Vuex должен вызвать Vue.use (Vuex) перед созданием экземпляра магазина
Самая быстрая функция, которая возвращает истину, если часть символов str1 может быть переставлена, чтобы соответствовать str2, в противном случае возвращает ложь
Переменная не определена при использовании this.str
JQuery - добавлять изменения с помощью флажков
Функция onClick не вызывает метод
Str.toString () возвращает [объект Object]
Регулярное выражение для соответствия нескольким подсетям, разделенным пробелом
Код JavaScript для проверки активности сеанса
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
Используйте веб-пакет для использования определенного файла в зависимости от среды узла
Вопросы
NODE.JS
Используйте веб-пакет для использования определенного файла в зависимости от среды узла
Я работаю над приложением Vue (используя cli 3). Стороннему интерфейсному компоненту требуется файл конфигурации. Я хотел бы использовать разные файлы в зависимости от окружения моего узла, но не знаю, как это сделать. Например, в моей структуре каталогов могут быть tree.production.js и tree.development.js. В моем основном javascript я не могу указать

import {tree} from `./assets/tree.${process.env.NODE_ENV}.js`;
Я также не могу использовать файлы .env для указания

import {tree} from `./assets/tree.${process.env.VUE_APP_TREE}.js`;
Я хотел бы попробовать использовать веб-пакет а-ля vue.config.js, чтобы использовать правильный файл и переименовать его в tree.js, чтобы в моем коде я мог просто указать

import {tree} from "./assets/tree.js"
Или на самом деле какие-нибудь лучшие практики, как добиться этого довольно обыденного и, казалось бы, рутинного переключения dev/prod.

Что-то типа

//vue.config.js
module.exports = {
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      // do something with tree.production.js...
    } else {
      // do something with tree.development.js
    }
  }
}
 28.01.2019 21:02
5
0
1 682
2
Данный вопрос помечен как решенный
 Ответы 2
жаль слышать, что у вас возникли проблемы с этим. Вы правы, вы не сможете использовать статическое решение для импорта для загрузки вашего файла. Однако есть варианты, в зависимости от того, что вы планируете делать с tree.js. Я не знаю, что такое дерево, но я предполагаю, что вас интересует только запуск вашего кода в среде веб-пакета.

Итак, какие варианты у вас есть, возможно, рассмотрите один из этих вариантов:

Динамический импорт
Это кажется мне наиболее вероятным, что вы хотите, если вы можете использовать асинхронный подход со своим кодом, вы можете динамически загружать свой код (также воспользоваться преимуществами разделения кода):

https://webpack.js.org/guides/code-splitting/#dynamic-imports
https://medium.com/front-end-weekly/webpack-and-dynamic-imports-doing-it-right-72549ff49234
Условная загрузка через прокси
В этом ответе Алехандро Сильва использовал прокси-файл для условной загрузки файла на основе ENV_VAR. Вы можете настроить веб-пакет, чтобы он не требовал невозможных путей.

Условная сборка на основе среды с использованием Webpack
Другие, которые могут соответствовать вашим требованиям
признать виновным — для загрузки и объединения конфигурации
 28.01.2019 21:35
 Ответ принят как подходящий
Корень вашей проблемы в том, что ES6 import (и export) анализируются статически, то есть вы не можете иметь динамические значения, как вы пытаетесь. Вы можете попробовать динамический импорт, используя синтаксис import().then(module => ...), но здесь это не совсем то, что вам нужно.

Я думаю, вы ищете разрешение.псевдоним. В конфигурации вашего веб-пакета это будет выглядеть примерно так:

  //...
  resolve: {
    alias: {
      'assets/tree': path.resolve(__dirname, `path/to/assets/tree.${process.env.NODE_ENV}.js`)
    }
  }
и внутри вашего приложения вы должны импортировать его следующим образом:

import { tree } from 'assets/tree';
 28.01.2019 21:53
Другие вопросы по теме
Селектор Google captcha DOM не работает — document.querySelector('#g-captcha-response').value
Vue.js вставляет блок для каждого 6-го элемента цикла
Источник ссылки на ютуб
Изменение объекта данных Vue
Изменение порядка слоев с помощью Vue2Leaflet
Vue router принудительно использует popstate
Стили области действия vuejs не работают с d3js
Как перебирать эти поля ввода, но каждый ввод имеет свое собственное состояние?
Как получить доступ к хранилищу в методе mount() с помощью NUXT.js?
Повторяющееся имя отслеживания Google Analytics
Похожие вопросы
UDP-прокси для NodeJS
Простой ответ AWS Lambda имеет значение null, если обратный вызов вызывается в другом контексте
Ш: 1: огурец.js: не найдено
Попытка получить данные из базы данных SQLite с помощью NodeJS
Как лямбда-функция, использующая очередь SQS, может отправить сообщение в очередь недоставленных сообщений?
Как я могу получить доступ к: ToString()
Readable.destroy() не генерирует события «закрыть» и «ошибка» Node.js
Как исправить ошибку React Native «шутка-ускорение-карта: коллизия имен модуля ускорения»?
Как предотвратить появление ошибки «чтение ECONNRESET»
Невозможно сохранить сеанс с VueJS (передняя часть) и NodeJs (задняя часть)
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
VUE CLI 3 — Тестирование однофайловых компонентов с помощью Mocha + webpack
Вопросы
TESTING
VUE CLI 3 — Тестирование однофайловых компонентов с помощью Mocha + webpack
Я пытаюсь следовать документации, упомянутой здесь Утилиты для тестирования Vue.

Ниже то, что я сейчас настроил.

Настройка проекта: Vue CLI 3.2.1 с Node v8.11.2

devDependencies:

"@vue/cli-plugin-babel": "^3.2.0",
"@vue/cli-plugin-eslint": "^3.2.0",
"@vue/cli-service": "^3.2.0",
"@vue/test-utils": "^1.0.0-beta.28",
"babel-eslint": "^10.0.1",
"babel-plugin-istanbul": "^5.1.0",
"cross-env": "^5.2.0",
"eslint": "^5.8.0",
"eslint-config-standard": "^12.0.0",
"eslint-loader": "^2.1.1",
"eslint-plugin-import": "^2.14.0",
"eslint-plugin-node": "^8.0.0",
"eslint-plugin-promise": "^4.0.1",
"eslint-plugin-standard": "^4.0.0",
"eslint-plugin-vue": "^5.0.0-0",
"expect": "^24.0.0",
"istanbul-instrumenter-loader": "^3.0.1",
"jsdom": "^13.2.0",
"jsdom-global": "^3.0.2",
"mocha": "^5.2.0",
"mocha-webpack": "^1.1.0",
"node-sass": "^4.10.0",
"nyc": "^13.1.0",
"sass-loader": "^7.1.0",
"vue-template-compiler": "^2.5.17",
"webpack-cli": "^3.2.1",
"webpack-node-externals": "^1.7.2"
И конфиг nyc внутри package.json тоже:

"nyc": {
    "include": [
      "src/**/*.(js|vue)"
    ],
    "instrument": false,
    "sourceMap": false
  },
vue.config.js:

const nodeExternals = require('webpack-node-externals')
const path = require('path')
let isCoverage = process.env.NODE_ENV === 'coverage';

module.exports = {
    mode: 'development',
    externals: [nodeExternals()],
    devtool: 'inline-cheap-module-source-map',
    output: {
        // use absolute paths in sourcemaps (important for debugging via IDE)
        devtoolModuleFilenameTemplate: '[absolute-resource-path]',
        devtoolFallbackModuleFilenameTemplate: '[absolute-resource-path]?[hash]'
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ].concat(
            isCoverage ? {
                test: /\.(js|ts)/,
                include: path.resolve('src'),
                loader: 'istanbul-instrumenter-loader',
                options: { esModules: true }
            }: [],
            {
                test: /.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
            },
            {
                test: /\.ts$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'ts-loader'
            }
        )
    },
    target: 'node',
    externals: [nodeExternals()],
    devtool: "inline-cheap-module-source-map"
}
Структура моей тестовой папки выглядит так:

VUE CLI 3 — Тестирование однофайловых компонентов с помощью Mocha + webpack

Мой тестовый код выглядит так:

VUE CLI 3 — Тестирование однофайловых компонентов с помощью Mocha + webpack

До сих пор я пытался запустить эти команды:

"test-ci": "mocha-webpack --webpack-config vue.config.js --require test/setup.js test/**/*.js"
"cover": "cross-env NODE_ENV=coverage nyc --reporter=lcov --reporter=text npm run test-ci"
Если я запущу тест-ci, он выведет это: WEBPACK Compiled successfully in 631ms Но это просто пустая страница после того, как если я запустил обложка, то на выходе nyc ничего не регистрируется:

VUE CLI 3 — Тестирование однофайловых компонентов с помощью Mocha + webpack

Что я здесь делаю неправильно?

 31.01.2019 07:12
2
0
1 306
2
 Ответы 2
Я столкнулся с той же проблемой, и включение файлов vue и js по отдельности исправило ее для меня.

"nyc": {
    "include": [
      "src/**/*.js",
      "src/**/*.vue"
    ],
    "instrument": false,
    "sourceMap": false
  },
 02.03.2019 14:56
Несмотря на использование node v10.16.0 и vue-cli 3.11.0, здесь я столкнулся с той же проблемой. Ответ Мохита не сработал, но сработал следующий синтаксис:

// package.json
  "nyc": {
        "extension": [
            ".js",
            ".vue"
        ]
  },
 02.10.2019 19:26
Другие вопросы по теме
Как передавать данные между компонентами в Vue.js?
Как импортировать bootstrap.bundle.min.js в проект vue с помощью webpack
Загрузка файла VueJS не принимает файл
Результат ответа Laravel Vue js не обновляется после вызова axios
Как убрать предупреждение [vue/no-use-v-if-with-v-for]?
Ползунок ценового диапазона в Vue
Невозможно прочитать свойство '$moment' неопределенного
Разбиение на страницы с помощью Vue JS
Путь sockjs-node перезаписывается с помощью baseUrl webpack-dev-server
Сдвиг маркера по заданному пользовательскому вводу
Похожие вопросы
Spring попытка внедрить зависимости @Autowired в экземпляр Mocked
Ошибка: ожидалась одна операция сопоставления для критерия "Match DocumentNode", но ничего не найдено
Может ли Espresso работать без намеренного запуска активности?
Проверка формы модульного тестирования Angular — элемент управления остается нетронутым
Тестовая подписка в сервисе
Глобальное отключение анимаций, отличных от Animator, для тестирования эспрессо
Можно ли смоделировать результат функции, запускаемой нажатием кнопки, с помощью testcafe/node?
Protractor.explore() и .pause() и .enterRepl() сталкиваются с ошибкой TypeError
Угловые испытания, наблюдаемые в процессе эксплуатации
JMeter без графического интерфейса в проблеме Jenkins с Include Controller
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
Сборка Vue CLI 3 выводит файлы с тильдой «~»
Вопросы
VUE.JS
Сборка Vue CLI 3 выводит файлы с тильдой «~»
В своем приложении я создал различные компоненты, которые используют общие компоненты пользовательского интерфейса, такие как AppButton, AppSelect и т. д. Я использую функцию разделения кода веб-пакета для ленивой загрузки компонентов и получения отдельного фрагмента. Используя команду сборки Vue CLI 3, я готов развернуть файлы в папке dist.

Кто-нибудь знает, что означает тильда "~"? Например, в папке dist я могу найти имя типа settings-diet~start-personalization.6e2ac313.js, которое содержит тильду.

Сборка Vue CLI 3 выводит файлы с тильдой «~»

 01.02.2019 12:44
5
0
1 314
2
 Ответы 2
Начиная с Веб-пакет 4.2.0, разделитель для имен файлов разделенных фрагментов можно настроить с помощью splitChunks.automaticNameDelimiter.

 01.02.2019 12:55
I'm using webpack's code splitting feature to lazy load components and get a separate chunk.

Вот почему: вы лениво загружаете модули.

В этом случае похоже, что происходит одно из двух:

у вас есть запись settings-diet, которая где-то в своем дереве требует файл start-personalization. Вместо включения исходного кода этого требуемого файла в пакет settings-diet он извлекается ("разделяется") из основного пакета в отдельный файл. Затем этот отдельный файл может быть загружен только тогда, когда это необходимо, то есть лениво.

этот файл содержит модули, общие для записей settings-diet и start-personalization.

Символ ~ указывает, что все, что находится справа от него, было извлечено из того, что находится слева. Используемый символ настраивается с помощью свойства конфигурации splitChunks.automaticNameDelimiter.

Это работа SplitChunksPlugin:

By default it only affects on-demand chunks, because changing initial chunks would affect the script tags the HTML file should include to run the project.

 01.02.2019 13:01
Другие вопросы по теме
Как исправить «Не удается разрешить @babel/runtime/regenerator в связанном модуле npm»?
Использование асинхронных компонентов с компонентами загрузки и ошибок в Vue Router
Всплывающая подсказка Bootstrap с поппером, не работающим через веб-пакет
Проверка React PropType не работает с Webpack 4
Как исправить эту ошибку с помощью сборки npm run?
Браузер react-router v4Роутер не работает
Vue-cli собрать lib SSR - проблема с CSS
Относительная проблема URL-адреса img в файле Sass созданного приложения Create React App
Как разделить большой подфайл на отдельный фрагмент в webpack 2
Как вы включаете целую папку полифиллов с помощью веб-пакета?
Похожие вопросы
Как игнорировать «похоже, что firebase-admin был установлен в неподдерживаемой среде»?
Свойство или метод «контакт» не определен в экземпляре, но на него ссылаются во время рендеринга Vuejs Laravel
Геттер хранилища Vuex всегда возвращает false
Срок действия токена CSRF VueJS + Laravel Passport истек Как его обновить
Как лучше всего хранить константы в Nuxt?
Vue — отключить Eslint
Правильный способ передачи реквизита всем дочерним элементам через слот-область в Vue.js
Один и тот же код VueJS ведет себя по-разному в двух разных средах
Как вы импортируете файл JSON с помощью VueJS/Typescript?
Как реактивность Vue.js работает под капотом?
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
Проект Vue cli 3, динамический src в пути к изображению не работает
Вопросы
VUE.JS
Проект Vue cli 3, динамический src в пути к изображению не работает
Я ссылаюсь на URL-адрес изображения в компоненте vue, например

<img alt = "Vue logo" src = "~statics/reports/logo.png">
это работает

но при попытке

<img alt = "Vue logo" :src = "getURL()">


data() {
    return { imgPath: "~statics/reports/logo.png" };
  },

  methods: {

    getURL() {
        // 

      // console.info(path)
      return (this.imgPath)
    }
  },
это терпит неудачу

Моя структура папок Проект Vue cli 3, динамический src в пути к изображению не работает

В первом случае путь разрешается в

http://localhost:8081/img/logo.82b9c7a5.png
и автоматически обслуживается сервером разработки

Путь не разрешен во втором случае остается http://localhost:8081/~statics/reports/logo.png

Я использую сгенерированную vue cli 3 конфигурацию по умолчанию для webpack.

Я не хочу использовать относительные пути для всех изображений, например ../images/, так как это делает их более подробными. Я пробовал require(pathVariable) тоже не работает Пожалуйста, помогите с разрешением пути img, когда URL-адрес является динамическим, т.е. имя актива исходит от сервера, и я добавляю путь в методе или вычисляю и использую :src dynamicbinding для его обслуживания.

 01.02.2019 14:18
8
0
9 992
2
Данный вопрос помечен как решенный
 Ответы 2
 Ответ принят как подходящий
Второй способ не работает, потому что "~" пытается получить этот актив из node_modules. Подробнее об управлении активами можно прочитать здесь: https://cli.vuejs.org/guide/html-and-static-assets.html#относительный путь-импорт.

Чтобы исправить это, просто используйте require, как показано ниже:

data() {
  return {
    imgPath: require('@/statics/logo.png')
  }
}
..или прямо в шаблоне:

<img alt = "Vue logo" :src = "require('@/statics/logo.png')">
 01.02.2019 15:22
Для проектов Vue 3 вы можете использовать следующее:

<img src = "./assets/logo.png" />
 02.11.2020 20:38
Другие вопросы по теме
Ошибка при поиске модулей ядра узла во время сборки веб-пакета в Windows
Сборка Vue CLI 3 выводит файлы с тильдой «~»
Как исправить «Не удается разрешить @babel/runtime/regenerator в связанном модуле npm»?
Использование асинхронных компонентов с компонентами загрузки и ошибок в Vue Router
Всплывающая подсказка Bootstrap с поппером, не работающим через веб-пакет
Проверка React PropType не работает с Webpack 4
Как исправить эту ошибку с помощью сборки npm run?
Браузер react-router v4Роутер не работает
Vue-cli собрать lib SSR - проблема с CSS
Относительная проблема URL-адреса img в файле Sass созданного приложения Create React App
Похожие вопросы
URL-адрес ответа перенаправления аутентификации VueJs Oauth Axios
Как получить значение «id» в качестве значения параметра и «cname» в качестве метки параметра при использовании «v-select» в vuejs?
Использование карты Google в Vue/Laravel
Как создавать подключаемые компоненты Vue
Select2 в Vue.js не определен
Как я могу отобразить результат createElement() в Vue.js без создания компонента
Сортировка индексов массива в javascript
Сборка Vue CLI 3 выводит файлы с тильдой «~»
Как игнорировать «похоже, что firebase-admin был установлен в неподдерживаемой среде»?
Свойство или метод «контакт» не определен в экземпляре, но на него ссылаются во время рендеринга Vuejs Laravel
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
VueJS + Typescript: свойство не существует для типа
Вопросы
TYPESCRIPT
VueJS + Typescript: свойство не существует для типа
Я создал простое приложение Vue с помощью vue-cli 3 и настроил с помощью TypeScript. Я также установил axios и пытаюсь использовать его в mounted(), чтобы загружать данные и отображать их в компоненте.

Вот код:

<script lang='ts'>

import { Component, Prop, Vue } from 'vue-property-decorator';
import SearchBar from '@/components/prods_comp/SearchBar.vue';
import ProdsTable from '@/components/prods_comp/ProdsTable.vue';

@Component({
  components: {
    SearchBar,
    ProdsTable,
  },
})
export default class MainProds extends Vue {

  @Prop({ default: 'Produits' }) private message!: string;

  mounted() {
    const baseURI = 'http://localhost:8069';
    this.$http({
      method: 'POST',
      url: baseURI + '/vue_web_services/msg/',
      headers: { 'content-type': 'application/json',},
      data: {
      }
    }).then(function (response) {
      console.info(response.data);
    });
  }
}

</script>
Это довольно простой вызов API. Оно работает. Проблема в том, что это сообщение продолжает появляться в консоли:

ERROR in D:/ODOO/Vue/bons_commande/src/components/prods_comp/MainProds.vue
26:10 Property '$http' does not exist on type 'MainProds'.
    24 |   mounted() {
    25 |     const baseURI = 'http://localhost:8069';
  > 26 |     this.$http({
       |          ^
    27 |       method: 'POST',
    28 |       url: baseURI + '/vue_web_services/msg/',
    29 |       crossdomain: true,
Обновлено: Вот main.ts:

import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VueSweetalert2 from 'vue-sweetalert2';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/scss/tailwind.scss';
import axios from 'axios';

Vue.config.productionTip = false;
Vue.prototype.$http = axios;

Vue.use(ElementUI);
Vue.use(VueSweetalert2);

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
 04.02.2019 17:03
10
0
17 187
2
Данный вопрос помечен как решенный
 Ответы 2
Создайте файл плагина, как показано ниже, и используйте этот плагин в main.ts.

Подробная документация -- https://vuejs.org/v2/guide/typescript.html#Augmenting-Types-for-Use-with-Plugins

import _Vue from 'vue';
import Axios from 'axios';
export function AxiosPlugin<AxiosPlugOptions>(Vue: typeof _Vue, options?: AxiosPluginOptions): void {
   // do stuff with options
   Vue.prototype.$http = Axios;
 }
export class AxiosPluginOptions { // add stuff } 
import { AxiosStatic } from 'axios';
declare module 'vue/types/vue' {
   interface Vue {
     $http: AxiosStatic;
 }
}
 05.02.2019 11:09
 Ответ принят как подходящий
Похоже, вам может не хватать vue-axios, который добавляет $http к прототипу Vue, позволяя вызывать this.$http() из отдельных файловых компонентов.

Чтобы решить проблему:

Установите vue-axios из командной строки:

npm i -S vue-axios
Добавьте следующий код в main.ts:

import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
 06.02.2019 02:20
Другие вопросы по теме
Как сделать элемент <tr> в vuejs, который содержит <slot> с помощью html
Правильный способ обработки v-if с v-for в Vue
Использование магического комментария webpack [request] объединяет динамические модули в один
Bootstrap при изменении текстовой области не обновляется
Перезагрузить данные компонента на основе состояния vuex
Как переименовать файл app.js в index.html с помощью VueCli 3
VueJS не запускает событие ввода при первом вводе в IE11
Не рисует вертикальную линию при наведении, когда я быстро перемещаю курсор
Как я могу отобразить элемент выбранного идентификатора в vuejs?
Не удается собрать проект на iOS Код ошибки 70, как исправить?
Похожие вопросы
Ionic 4 и выход маршрутизатора с вкладками из материала
Позиция SourceMap не найдена для трассировки: AssertionError (Karma-Typescript)
Есть ли семантическая разница между псевдонимами типов и интерфейсами?
Можно ли перегрузить функцию без указания подписи?
Как присвоить значения типу с необязательными свойствами?
Angular Redirection выполняет мой метод так же, как и NgOnInit. Почему?
Есть ли способ использовать Loopback 4 со строгим режимом, установленным в tsconfig?
Отправка строковых данных и файлов через единую конечную точку на сервер на базе Spring
Как использовать локальную переменную angular вне области действия шаблона?
Как установить параметр true/false с помощью mat-select (multiselect) Angular Material
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
Как скрыть/отобразить кнопку маршрутизатора для определенного компонента в vuejs
Вопросы
JAVASCRIPT
Как скрыть/отобразить кнопку маршрутизатора для определенного компонента в vuejs
Я использую router-link в качестве кнопки для перехода между различными компонентами. Есть ли способ скрыть компонент для определенного компонента.

<router-link :to = "{path: prevPage }" tag = "button" class = "btn btn-primary">
 12.02.2019 14:31
0
5
2 072
2
Данный вопрос помечен как решенный
 Ответы 2
 Ответ принят как подходящий
Вы можете получить путь текущего маршрута двумя способами

v-if = "$route.path != '/'"
или

v-if = "$router.currentRoute.path != '/'"
Оба они возвращают строку, которая равна пути текущего маршрута, всегда разрешенному как абсолютный путь.

Вы можете проверить документацию: https://router.vuejs.org/api/#route-object-properties

Вы можете проверить эту скрипку: https://jsfiddle.net/Farouk_Mekkaoui/7xvpje08/12/

 12.02.2019 14:51
Ответ выше помог мне пройти большую часть пути, но кое-что, что сработало для меня немного лучше, используя именованные маршруты, было:

v-if = "$router.currentRoute.name != 'routeNameHere'"
 25.05.2020 08:38
Другие вопросы по теме
Как скачать csv, сгенерированный из papaparse?
Недостаток неиспользования компонентов Ionic в мобильном приложении
Проблема с VueJS DOM
Как свойство «value» в v-tabs и v-tab-item контролирует видимость?
Обнаружение, когда IE11 со встроенной утечкой памяти исчерпает память (1,5 ГБ перерабатываемого пула)
Vue slideToggle не плавный
Перетащите элемент, но отпустите массив других элементов
Vue.js выдает несколько предупреждений: Invalid prop: проверка типа не удалась для prop «items». Ожидаемый массив, получена строка со значением ""
Не получен заголовок Set-Cookie с почтовым запросом axios
Как изменить маршрутизатор nuxt.js для использования пользовательского пути?
Похожие вопросы
Собственный способ JavaScript для просмотра дерева документов при сравнении объектов
Как преобразовать kebab-case в PascalCase?
Фильтр JQuery на основе совпадения текста в строке
Я хочу запустить пользовательский JS, но браузер говорит, что это небезопасно, и не загружает его, не разрешив скрипт вручную в браузере
Решить Минимизировать глубину критических запросов - Производительность страницы
Кнопка Paypal Checkout — конфигурация среды — Angular 6
Как отложить «новую функцию» от кэширования параметров при компиляции, дождаться ее использования
Есть ли эквивалент для «учетных данных» fetch: «include» или XMLHttpRequest «withCredentials» для WebSocket?
Сделать передний план прозрачным, но не фон
[phantomjs.launcher]: фатальное исключение Windows, код 0xc0000005
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
Как развернуть Vue js SPA на моем сервере Django?
Вопросы
JAVASCRIPT
Как развернуть Vue js SPA на моем сервере Django?
В настоящее время я следую этому руководству по интеграции моего внешнего интерфейса Vue.js с моим внутренним интерфейсом Django: https://medium.com/@williamgnlee/simple-integrated-django-vue-js-web-application-configured-for-heroku-deployment-c4bd2b37aa70

На данный момент я просто хочу иметь возможность отображать шаблонную страницу Vue.js index.html по умолчанию на моем сервере Django в http://локальный:8000/.

Я использовал django-admin startproject django-vue-template для инициализации Django и во вновь созданной папке django-vue-template я запустил vue create . для инициализации Vue CLI. Затем я запустил npm run build, поэтому дерево папок моего проекта теперь выглядит как это.

Я также добавил эти изменения в свой settings.py:

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [os.path.join(BASE_DIR, 'dist')],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]
STATICFILES_DIRS = [
  os.path.join(BASE_DIR, 'dist/static'),
]
а также эти изменения в моем urls.py:

urlpatterns = [
  path('admin/', admin.site.urls),
  url(r'^$', TemplateView.as_view(template_name='index.html')),
]
Согласно руководству, я уже должен видеть страницу Vue.js index.html на http://локальный:8000/, когда запускаю python manage.py runserver, но ничего не отображается, кроме белого экрана, и когда я проверяю консоль, меня засыпают ошибкой 404, как показано здесь.

Похоже, что Django может найти мой index.html, но не может найти и импортировать файлы css и js, необходимые для работы функций SPA.

 12.02.2019 15:05
4
1
1 282
2
Данный вопрос помечен как решенный
 Ответы 2
 Ответ принят как подходящий
Вы должны настроить его вручную Убедитесь, что в верхней части index.html должны быть:

{% load static %}
тогда все ссылки выглядят так:

<script src = "{% static "app.d34dcca9.js" %}"></script>
так же, как файлы CSS или изображения.

 30.12.2019 11:02
Вы также можете решить эту проблему с помощью следующих настроек vue.config.js:

module.exports = {
  assetsDir: 'static',
 26.05.2020 20:23
Другие вопросы по теме
Opencv: ошибка: (-210) в пороге функции
Я пытаюсь установить пакеты (Numpy) в Pycharm, получаю ошибку pip
Как переменные внутри моего списка, кортежа или любой подобной структуры данных могут быть отражены в списке?
Преобразование xml в фрейм данных pandas python
Как я могу продолжать запрашивать у пользователя ввод до тех пор, пока пользователь не введет целое число и значение, отличное от 0, на Python с помощью цикла While?
Как добавить элемент в список, который находится внутри списка?
Используйте python 3 в reticulate наshinyapps.io
Ввод значений в столбец в фрейме данных pandas из другого кадра данных на основе проверки нескольких условий
Поиск элемента в xml с помощью python
Распознавание изображений — Tensorflow
Похожие вопросы
Скачать файл MVC с javascript
Можно ли получить имя файла в задаче gulp4 gulp.watch?
Доступ к массиву свойств с определенным идентификатором
Как добавить новый текст рядом с текстом внутри элемента метки
Как установить setCatchHandler по умолчанию в Google Workbox v4?
Как создать один плагин в пользовательском модуле drupal 7?
Структура файла Electron + Typescript
Создание элемента OPTION и функций
Функция в jQuery активируется слишком много раз
Преобразование массива объектов в новую структуру массива
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
Создайте исполняемый файл для Windows с помощью Vue CLI Plugin Electron Builder в Linux
Вопросы
ELECTRON
Создайте исполняемый файл для Windows с помощью Vue CLI Plugin Electron Builder в Linux
Я пытаюсь собрать исполняемый файл для Windows из своего Linux, но пока мне это не удалось.

По документация, мне подсказывает, что здесь я мог бы настроить, например, выходную папку.

pluginOptions: {
    electronBuilder: {
      outputDir: 'desktop-for-windows',
    },
  },
а если работает но ничего не говорит о том как сменить платформу(с.о) для сборки. также попробуйте протестировать следующую команду:

npm run electron:build --win
но по умолчанию он собирается для Linux

 13.02.2019 21:53
3
0
5 265
2
Данный вопрос помечен как решенный
 Ответы 2
 Ответ принят как подходящий
Столкнулся с тем же самым, пытаясь перейти от более старой плиты котла к использованию Vue-CLI 3 только сейчас.

Запустите это из каталога проекта и посмотрите, работает ли это:
./node_modules/.bin/vue-cli-service electron:build --windows

Я получил --windows из файла ui.js в каталоге vue-cli-plugin-electron-builder под node_modules. Другие варианты: --linux и --macos. Я удивлен, что не вижу флаг --all или что все не по умолчанию.

Если вы добавите "build:win": "vue-cli-service electron:build --windows" под scripts в свой package.json, то вместо этого вы сможете запускать npm run build:win оттуда.

 30.03.2019 22:48
Я только что столкнулся с той же проблемой и нашел довольно простой ответ. Вы можете просто запустить npm run electron:build -- --linux deb --win nsis в каталоге проекта.

Подробнее об этом здесь: https://nklayman.github.io/vue-cli-plugin-electron-builder/guide/recipes.html#многоплатформенная сборка

 01.07.2020 19:54
Другие вопросы по теме
Не разрешено загружать локальный ресурс
Приложение Electron зависает при выходе, хотя все события выхода успешно запущены
Использование Google Cloud HSM для подписи исполняемых файлов
Electron MediaPlayPause globalShortcut привязка на macOS Mojave
Используйте плагин inetc для nsis с электронным компоновщиком
Доступ к имени приложения внутри пользовательского скрипта
Создать пользовательскую страницу после завершения установки
Удалить данные localStorage при удалении приложения
Ошибка команды: java -jar
Electronic-builder, как установить переменные среды узла
Похожие вопросы
Электронный веб-просмотр не воспроизводит видео на YouTube автоматически
Измените значки настольных приложений на Mac программно. 2019
Electron + React Proxy Port для API
Электрон не может найти модуль grpc.node
Электронные глобальные переменные или БД
Как я могу получить постоянные разрешения в электронном приложении?
Структура файла Electron + Typescript
Не удается отобразить pdf, передав Uint8Array в параметре файла viewer.html при использовании pdfjs
Доступ к файлам cookie процесса рендеринга с помощью основного процесса электрона
Неуместный макет материала-интерфейса страницы с реакцией
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
Отключить отдельные куски для css, vue cli 3, webpack 4
Вопросы
VUE.JS
Отключить отдельные куски для css, vue cli 3, webpack 4
Я использую проект, созданный с помощью последней версии vue cli 3. Я использую конфигурацию по умолчанию. Мой маршрутизатор имеет много динамически импортируемых маршрутов. И мои css, и js разбиты на несколько фрагментов во время работы в производстве. Пока поведение с js желательно. Мои файлы css довольно малы, я хотел бы отключить фрагменты для css.

Как мне настроить webpack для этого через файл vue.config.js. Пожалуйста, помогите с точной командой, так как я нахожу конфигурацию веб-пакета и синтаксис цепочки очень запутанными. Спасибо :)

 18.02.2019 14:16
8
0
12 227
2
 Ответы 2
Создайте файл в корне проекта vue.config.js
Я также использую несколько других вариантов, но вам нужен этот.

const path = require('path');

module.exports = {
  lintOnSave: true,
  filenameHashing: false,
  chainWebpack: config => {
    config.optimization.delete('splitChunks')
  }
};
Это удалит созданные фрагменты и позволит вам использовать только один файл CSS, а также JS.

filenameHashing: false эта часть удалит хеширование файлов.
config.optimization.delete('splitChunks') это удалит куски.
Точнее с вашим требованием.

Используйте эти конфигурации

module.exports = {
  lintOnSave: true,
  filenameHashing: false,
  configureWebpack: {
    optimization: {
      cacheGroups: {
        default: false,
        // Merge all the CSS into one file
        styles: {
          name: 'styles',
          test: /\.s?css$/,
          chunks: 'all',
          minChunks: 1,
          reuseExistingChunk: true,
          enforce: true,
        },
      },
    }
  }
};
Таким образом, ваш JS-код будет разделен на куски, а CSS-файл будет объединен в один.

Подробнее, если вы хотите настроить свои фрагменты JS, вы можете использовать эти настройки.

module.exports = {
  lintOnSave: true,

  filenameHashing: false,
  configureWebpack:{
    optimization: {
      cacheGroups: {
        default: false,
        // Custom common chunk
        bundle: {
          name: 'commons',
          chunks: 'all',
          minChunks: 3,
          reuseExistingChunk: false,
        },
        // Customer vendor
        vendors: {
          chunks: 'initial',
          name: 'vendors',
          test: 'vendors',
        },
        // Merge all the CSS into one file
        styles: {
          name: 'styles',
          test: /\.s?css$/,
          chunks: 'all',
          minChunks: 1,
          reuseExistingChunk: true,
          enforce: true,
        },
      },
    }
  }
};
 27.03.2019 08:44
Для Webpack 4 вы можете увидеть этот пример (vue.config.js):

const WebpackBundleAnalyzer= require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  lintOnSave: false,
  runtimeCompiler: true,
  filenameHashing:false,
  productionSourceMap: false,
  configureWebpack: {
    resolve: {
       symlinks: false
    },
    optimization: {
      splitChunks: {
       cacheGroups: {
          app: {
            chunks: 'all',
            name: 'main',
            test: /[\/]src[\/](.*)[\/]/,
          },
          flagIcons: {
            chunks: 'all',
            name: 'flagIcons',                
           //test: /[\/]node_modules[\/]@coreui[\/]((icons).*)[\/]/,
            test: /[\/]node_modules[\/]@coreui[\/]icons[\/]js[\/]((flag).*)[\/]/,
          },
          freeIcons: {
            chunks: 'all',
            name: 'freeIcons',                
           //test: /[\/]node_modules[\/]@coreui[\/]((icons).*)[\/]/,
            test: /[\/]node_modules[\/]@coreui[\/]icons[\/]js[\/]((free).*)[\/]/,
          },
          brandIcons: {
            chunks: 'all',
            name: 'brandIcons',                
            test: /[\/]node_modules[\/]@coreui[\/]icons[\/]js[\/]((brand).*)[\/]/,
          },
          vendors: {
            chunks: 'all',
            name: 'vendors',
            test: /[\/]node_modules[\/]@coreui[\/]((?!icons).*)[\/]/,
          },
          // Merge all the CSS into one file
          styles: {
            name: 'styles',
            test: /\.s?css$/,
            chunks: 'all',
            minChunks: 1,
            reuseExistingChunk: true,
            enforce: true,
          }
        }
      }
    },

    plugins:[new WebpackBundleAnalyzer()]
  }
}

вы можете удалить "WebpackBundleAnalyzer" после того, как будете удовлетворены результатами.

 10.01.2020 01:29
Другие вопросы по теме
Неправильные пути при загрузке React SPA с вложенным маршрутом, но работают при загрузке от root
Как загрузить файл JS без обновления страницы с помощью vue js
Лучшая структура веб-пакета для монорепозитория с двумя реагирующими приложениями, использующими общие файлы
Реакция сборки webpack 4 вызывает ошибку токена, но запуск запуска работает
Webpack-dev-server только запрос прокси "localhost"
Как запустить реагирующее приложение с помощью webpack-dev-server?
Webpack для копирования файлов и преобразования псевдонимов путей ТОЛЬКО
SCRIPT1003: ожидается ':' main.js (143651,12) Ошибка в IE-11 после обновления версии микса laravel с 2.0 до 4.0.14
Импорт CSS-url из SASS с помощью Webpack
Настроить горячую перезагрузку модуля для ElectronJS + Vue
Похожие вопросы
Значение данных vue js возвращает неопределенное значение внутри метода
Передать данные из события в VueJS
Как передать массив объектов дочернему компоненту в VueJS 2.x
Как совместить vue-multiselect с vue-treeSelect?
Vue: как лучше всего избежать TypeError внутри вычисляемых свойств
Как мне обрабатывать oauth в Nuxt с отдельным сервером API?
Как включить сложное приложение Vue в Laravel
Как импортировать мои переменные SCSS в Webpack для глобального использования. (Вью)
Как запустить функцию на стороне сервера с помощью Node.js, а не на стороне браузера с помощью Javascript?
Передайте аргумент (командную строку), который будет использоваться файлом .env.[mode] во время сборки в Vue.js
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
Vue cli3 включить CORS
Вопросы
VUE.JS
Vue cli3 включить CORS
У меня была эта проблема в течение почти 2 дней, любая помощь будет спасением жизни.

У меня есть приложение vue, работающее в режиме разработки 8080, и я пытаюсь интегрировать вход в блок стек, и это приложение пытается прочитать http://локальный/манифест.json, поэтому я поместил его в статический каталог, но оно выдает мне ошибку cors, у нас есть решение для этого vue cli такие конфигурации, как vue.config.js?

 19.02.2019 12:48
8
1
15 094
2
Данный вопрос помечен как решенный
 Ответы 2
 Ответ принят как подходящий
«Правильный ответ» на самом деле не помогает в этом случае.

Blockstack должен иметь возможность попасть в файл manifest.json (в данном случае localhost:8080/manifest.json). Когда сервер не поддерживает CORS, Blockstack выдает ошибку.

ОП спрашивает, как заставить «vue-cli-service serve» выполнять запросы COR. Для этого нам нужно изменить сервер разработки Webpack, чтобы разрешить запрос CORS.

Добавьте vue.config.js (если его еще нет)

module.exports = {
  configureWebpack: {
    devServer: {
      headers: { "Access-Control-Allow-Origin": "*" }
    }
  }
};
 03.12.2019 16:01
У меня была такая же проблема, как у вас. Я применил то, что говорится в документации vue-js, чтобы поместить некоторый код в vue.config.js следующим образом.

module.exports = {
  devServer: {
    proxy: 'http://localhost:4000'
  }
}
но это не помогло бы. См. эту документацию https://cli.vuejs.org/config/#devсервер. У меня есть отдельный бэкэнд, который находится в laravel. Что я сделал, потратив слишком много времени на разрешение cors в vue-js, я применил cors к своему бэкэнд-файлу index.php, и это сработало как шарм. Проблема в том, что вы на самом деле не знаете, откуда это берется, но смотрите как на переднюю часть, так и на внутреннюю сторону, а затем пытаетесь найти решение с обеих сторон.

 28.01.2021 05:10
Другие вопросы по теме
Vuex — запустить функцию после нескольких отправок
Vue cli проверяет css из консоли разработки браузера
Как поместить код Vue в тег <code> в vue
Отключить отдельные куски для css, vue cli 3, webpack 4
Передайте аргумент (командную строку), который будет использоваться файлом .env.[mode] во время сборки в Vue.js
Как я могу развернуть папку vue cli dist в прямой панели управления администратором?
Есть ли способ импортировать глобальный список компонентов из определенной папки?
Компоненты пакета vue, использующие синтаксис класса
Не удается загрузить файл CSS с упакованной библиотекой Vue (npm)
Создайте исполняемый файл для Windows с помощью Vue CLI Plugin Electron Builder в Linux
Похожие вопросы
Сохранить положение прокрутки при обновлении DOM в vue.js
Browserify/vueify: внедрить глобальный файл scss во все компоненты
Нужна ли мне среда модульного тестирования, если я уже использую Cypress в приложении Vue.js?
Dropzone не определяется при использовании внутри компонента
Vue.js: измените значения таблицы реактивным способом
Vue.js — можно ли использовать динамический импорт Javascript для загрузки компонентов с другого сервера?
Методов приглашения не существует
Почему я получаю сообщение об ошибке отсутствия сервера npm на Vue.js?
Как добавить DOCTYPE при создании xml с помощью пакета npm «xmlbuilder»
Vuetify.js — IE11 не отображает таблицы данных с babel-polyfill
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
Отключить кеш-загрузчик в webpack 4 vue cli 3
Вопросы
CACHING
Отключить кеш-загрузчик в webpack 4 vue cli 3
Я использую проект vue-cli 3/webpack 4. Моя сборка создается на AWS Codebuild, который запускает новый экземпляр виртуальной машины для каждой сборки. Cache -loader в webpack кэширует результаты работы babel-loader, vue-loader и terser. Но так как я запускаю новый экземпляр виртуальной машины каждый раз, я не пользуюсь этим. Если само кеширование имеет некоторые накладные расходы, лучше отключить его, как это предлагается в некоторых местах, таких как здесь.

Как настроить веб-пакет через объект vue.conf, чтобы удалить загрузчик кеша. Спасибо

Мой проект сгенерировал конфигурацию веб-пакета для производства:

rules: [
      /* config.module.rule('vue') */
      {
        test: /\.vue$/,
        use: [
          /* config.module.rule('vue').use('cache-loader') */
          {
            loader: 'cache-loader',
            options: {
              cacheDirectory: '/Users/digitalsuppliers/work/new_build_branch/bmsconsole-client/node_modules/.cache/vue-loader',
              cacheIdentifier: '22f91b09'
            }
          },
          /* config.module.rule('vue').use('vue-loader') */
          {
            loader: 'vue-loader',
            options: {
              compilerOptions: {
                preserveWhitespace: false
              },
              cacheDirectory: '/Users/digitalsuppliers/work/new_build_branch/bmsconsole-client/node_modules/.cache/vue-loader',
              cacheIdentifier: '22f91b09'
            }
          }
        ]
      },

{
        test: /\.jsx?$/,
        exclude: [
          function () { /* omitted long function */ }
        ],
        use: [
          /* config.module.rule('js').use('cache-loader') */
          {
            loader: 'cache-loader',
            options: {
              cacheDirectory: '/Users/digitalsuppliers/work/new_build_branch/bmsconsole-client/node_modules/.cache/babel-loader',
              cacheIdentifier: 'e8179b56'
            }
          },
          /* config.module.rule('js').use('thread-loader') */
          {
            loader: 'thread-loader'
          },
          /* config.module.rule('js').use('babel-loader') */
          {
            loader: 'babel-loader'
          }
        ]
  }
 28.02.2019 15:26
3
0
4 720
2
 Ответы 2
Одним из решений является отключение кеша полностью или только в производстве/разработке в зависимости от состояния. Чтобы использовать его, откройте свой vue.config-js и напишите там

module.exports = {
  chainWebpack: config => {
    // disable cache for prod only, remove the if to disable it everywhere
    // if (process.env.NODE_ENV === 'production') {
      config.module.rule('vue').uses.delete('cache-loader');
      config.module.rule('js').uses.delete('cache-loader');
      config.module.rule('ts').uses.delete('cache-loader');
      config.module.rule('tsx').uses.delete('cache-loader');
    // }
  },
В этом примере я закомментировал условие, поэтому cache-loader вообще не используется.

 19.05.2019 15:23
если вы смонтируете компонент vue с помощью маршрутизации, попытаетесь ли вы импортировать компонент в асинхронный режим? не синхронный путь.

когда router/index.js загружается.. тогда может быть поможет вам.

бывший.

component: () => ({
        component: import('@/views/your/pageComponent.vue'),
        loading: this.loading,
        error: this.error,
        delay: this.delay,
        timeout: this.timeout,
      })
 24.06.2021 09:08
Другие вопросы по теме
Почему в документации vue говорится, что ссылки не являются реактивными, хотя на самом деле они активны?
Динамически вызывать свойство объекта в цикле v-for
Проблема реактивности vue с :disabled
Конфигурация Nginx для нескольких статических сайтов на одном экземпляре сервера
Как рассчитать разницу состояний Vuex, не вызывая реактивности
Как изолировать/охватить глобальный css в vue
NuxtServerInit не работает в режиме модуля Vuex - Nuxt.js
Состояние Vue.js не обновляется: решено
Как использовать Vue watch в объектах
Возможно ли извлечь правила vuetify во внешний файл для повторного использования?
Похожие вопросы
Gson сохраняет JSON на диск и загружает обратно в память
Пользовательское имя в кеше Redis
Как кэшировать медленную инициализацию ресурсов с C# Web API REST Server?
Как совместно использовать и кэшировать библиотеки DLL для мультитенантного приложения
GeneaLabs/laravel-model-caching не кэширует мой красноречивый запрос с нетерпеливой загрузкой
Как реализовать настраиваемый кеш в приложении C# UWP
В чем разница между @CacheEvict(...) и @CacheEvict(value, allEntries)?
Обслуживаемые пользователи Кэшированные страницы учетных записей других пользователей
Очистить кэш по весеннему расписанию?
Как предотвратить кеширование фона CSS
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
CSS-модули Vue
Вопросы
VUEJS2
CSS-модули Vue
Я пытался придумать решение для нашей библиотеки компонентов, которое будет отображать стили по-разному в зависимости от проекта, в который они импортированы. В своем исследовании я нашел возможное решение в модулях CSS. Проблема, с которой я сейчас сталкиваюсь, заключается в том, что когда я использую именованные модули, они компилируются в один и тот же класс css, поэтому стили в двух разных именованных модулях перезаписывают друг друга. Документация на веб-сайте Vue очень тонкая, поэтому я не уверен, правильно ли я сейчас реализую свой код. Может ли кто-нибудь сообщить мне, если я что-то упустил или у них была похожая проблема раньше?

<template>
  <button :class = "a.button" type = "button" v-on = "$listeners">
    <slot/>
  </button>
</template>

<script>
export default {
  console.info(this.a, this.b)
}
</script>

<style module = "a">
.button {
  background-color: red;
}
/* identifiers injected as a */
</style>

<style module = "b">
.button {
  background-color: blue;
}
/* identifiers injected as b */
</style>
В моем console.info(this.a, this.b) консоль возвращает оба отображаемых имени класса как одно и то же {button: "index_button_2JdpP"} {button: "index_button_2JdpP"}, так что явно есть проблема в моем коде или я неправильно понимаю цель именования модуля CSS.

 28.02.2019 19:27
1
0
327
2
 Ответы 2
Я нашел обходной путь, импортировав файлы CSS в свой скрипт и установив свои стили с вычисляемым свойством.

<template>
  <button type = "button" :class = "styles.button" v-on = "$listeners">
    <slot/>
  </button>
</template>

<script>
import remax from './remax.scss'
import crm from './crm.scss'

export default {
  computed: {
    styles() {
      return remax
    },
  }
}
</script>

<style modules lang = "scss"></style>
К сожалению, подобные действия привели к тому, что некоторые стили были добавлены в мой проект, но это может быть связано с моей реализацией в файле scss.

 28.02.2019 21:11
Есть такой способ, для решения этой или похожей проблемы, Если импортировать через , указать модуль в конце файла и обработать Computed. Затем вы можете назвать классы css одинаковыми, они не будут перезаписаны. По крайней мере для меня.

 <template>
  <div id = "app" :class = "BaseApp.Container">
    <router-view :class = "BaseView.Container" />
  </div>
</template>
<script>
import BaseApp from "@/components/Base/Styles/BaseApp.css?module";
import BaseView from "@/components/Base/Styles/BaseView.css?module";
export default {
  components: {},
  computed: {
    BaseApp() {
      return BaseApp;
    },
    BaseView() {
      return BaseView;
    },
  },
};
</script>
 14.10.2020 09:15
Другие вопросы по теме
Отключить кеш-загрузчик в webpack 4 vue cli 3
Vue JS — модульный тест — локальное хранилище не определено
Модульный тест Vue Cli с шуткой, как запустить один тест
Проект заявлен с vue-cli 2 или 3
Ошибка ссылки на веб-пакет window.location.hostname не может быть найдена, vue.js
Vuetify — обнаружено несколько экземпляров Vue
Как создать веб-компонент с помощью vue-cli
Hot-Module-Replacement (HMR) внезапно перестал работать в проекте vue-cli 3
Vuex - изменять объекты состояния только на геттерах
Как импортировать функцию из файла .js при использовании Typescript и Vue
Похожие вопросы
Как установить язык в vuetify?
Nuxt маршрутизация на нескольких уровнях
Document.elementFromPoint(x, y) не сообщает о правильных дочерних элементах
Как прокручивать вкладки в VueJS с помощью Bootstrap-vue
Должны ли мы использовать v-model для изменения хранилища Vuex?
Запросы Graphql, сгенерированные amplify, работают хорошо, но выдают ошибки из-за правил аутентификации. Почему?
Динамически вызывать свойство объекта в цикле v-for
Нужно сделать v-модель динамической
Vue обновляет текст всей кнопки после изменения конкретной кнопки
Является ли доступ к свойствам `data` через `wrapper.vm` правильным способом, в соответствии с документами?
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
Объединение Express 4 и Vue CLI 3
Вопросы
NODE.JS
Объединение Express 4 и Vue CLI 3
Я построил проект с Vue CLI 3 и Express 4, и до сих пор все шло прямо вперед, так как у меня был внутренний сервер в одной папке, а внешний интерфейс в другой, но теперь я останавливаюсь, пытаясь развернуть оба на одном Хостинг узлов. Позвольте мне рассказать немного больше.

Моя структура проекта на данный момент:

Project:
  - node_modules/
  - package.json

Project/Frontend (Vue CLI 3):
  - node_modules/
  - package.json
  - app.js
  - dist/
  - <other folders like "public","tests","src",etc>        

Project/Backend (Express 4):
  - node_modules/
  - package.json
  - app.js
  - <other folders like "controllers" and stuff>
Теперь проблема в том, что мне нужно объединить оба в одном приложении Node, чтобы развернуть его на хостинге.

Я бы хотел, чтобы Express (Backend) запускал сервер и обслуживал dist/ из Frontend, но проблема в том, что выбранная мной служба хостинга просто запускает npm install в корневой папке, что бесполезно, так как мне нужно пакет «Экспресс» (и некоторые другие) для запуска сервера. Поскольку его нет в корневой папке, он не устанавливает никаких пакетов и, очевидно, не запускается.

Я создал конфигурацию npm корневого уровня, чтобы попытаться скомпилировать интерфейс, а затем скопировать dist/ в серверную часть Express. Но поскольку служба хостинга не устанавливает ничего, кроме корневой конфигурации npm, cd вход во внешний интерфейс, а затем сборка не удалась, так как он пропускает node_modules.

Мне каким-то образом удалось это сделать, установив веб-пакет в папку бэкэнда npm, настроив его для объединения приложения Express и скопировав пакет и dist/ из внешнего интерфейса в корневую папку проекта, а затем запустив npm на корневом уровне:

cd frontend && npm run build && cd ../backend && webpack
и после этого пропихнул рут dist/ на хостинг, что вроде и сработало, но "муторно" и не оптимально, тем более, что мне нужно каждый раз собирать его на локальном компе и только тогда заливать. Если бы я каким-то образом мог использовать пакеты корневого npm для создания внешнего интерфейса и внутреннего интерфейса службы хостинга, это было бы здорово, но я считаю, что здесь управление версиями — это еще одна проблема, поскольку оба будут использовать одни и те же пакеты npm.

Есть ли лучшее и/или более чистое решение для этого?

Если какой-либо детали не хватает, просто дайте мне знать.

Спасибо за любую помощь заранее.

 06.03.2019 15:27
0
0
2 212
2
 Ответы 2
Вы должны попробовать Лерна. Это позволяет вам иметь несколько проектов js в одном репо (или в одной папке) с package.json в корневой папке, где вы можете добавить скрипт для взаимодействия со всем вашим проектом.

Например, вы должны иметь возможность добавить стартовый скрипт, который будет находиться в вашей папке с различными приложениями, установить ваши зависимости и запустить/создать этот проект.

 14.03.2019 15:54
Вы можете использовать скрипт, который запускает и npm install, и построение передней части, и запуск задней части.

const resolve = require('path').resolve
const cp = require('child_process')

const frontend = resolve(__dirname, 'Frontend')
const backend = resolve(__dirname, 'Backend')

cp.exec('npm install', { env: process.env, cwd: frontend }, () => {
  cp.exec('npm run build', { env: process.env, cwd: frontend })
})

cp.exec('npm install', { env: process.env, cwd: backend }, () => {
  cp.exec('npm run start', { env: process.env, cwd: backend })
})
 18.03.2019 15:52
Другие вопросы по теме
Как сделать nodemailer многоразовым в нескольких модулях?
Ошибка при загрузке файлов с помощью FilePond и multer (expressjs)
Как лучше всего хранить конфиденциальные учетные данные в Node?
Я хочу выполнить функцию при запуске моего экспресс-сервера node.js и выполнить модуль аутентификации, правильно ли это?
Как визуализировать модальное окно, используя экспресс и руль
Совместимость ExpressJs с версией NodeJs
Использование нескольких FindOne в Mongodb
Узел +Экспресс-динамическая маршрутизация
Проверка статуса нескольких веб-сайтов с помощью Node JS
Редактировать концепцию загрузки изображения страницы с помощью Nodejs
Похожие вопросы
Как сделать nodemailer многоразовым в нескольких модулях?
Код ошибки: 10021, сообщение об ошибке: "Uncaught TypeError: n(...).connect не является функцией"
Как передать клиентский пакет (веб-пакет) на сервер NodeJS?
Как загрузить исполняемый файл NPM на сервер Nexus
Требования и варианты размещения службы приложений Azure
Отправил запрос POST с помощью JS и обработал данные с помощью Node
Как получить сообщение с помощью чата Google Hangout Spaces.message.get в Node js
Идентифицировать 360-градусные изображения из узла js
Модульное тестирование и продолжение — локальное хранилище
Ошибка: 1252. Клиент не поддерживает протокол аутентификации, запрошенный сервером; рассмотрите возможность обновления клиента MySQL
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
Юнит-тесты, созданные исключениями vue-cli
Вопросы
VUE CLI 3
Юнит-тесты, созданные исключениями vue-cli
После создания проекта с vue-cli (v3.5.1) модульный тест, который был создан автоматически, не работает, когда я запускаю: «npm run test: unit».

После запуска vue create я вручную выбрал следующие параметры: TS, Router, Vuex, Linter, Unit, E2E, синтаксис компонента в стиле класса: да, Babel: нет, режим истории: нет, линтер: TSLint, Lint при сохранении , решение для модульного тестирования: Mocha, решение для тестирования E2E Cypress, файлы конфигурации: выделенные файлы Юнит-тесты, созданные исключениями vue-cli.

Вывод «npm run test: unit» приведен ниже.

WEBPACK Compiled successfully in 7321ms
MOCHA Testing...
RUNTIME EXCEPTION Exception occurred while loading your tests
ReferenceError: performance is not defined at Module../node_modules/vue/dist/vue.runtime.esm.js
Я попытался изменить сценарий npm, используемый для запуска теста, как показано ниже (не был уверен, что включение исходит от Node, и я не думаю, что это должно быть), но я просто получаю сообщение об ошибке, указывающее, что perf_hooks был не найден в \node_modules\mocha-webpack\lib.

"test:unit": "vue-cli-service test:unit --include perf_hooks"
Пример кода: https://github.com/derek-baker/super-duper-гуакамоле

 19.03.2019 14:37
0
0
662
2
Данный вопрос помечен как решенный
 Ответы 2
 Ответ принят как подходящий
Если в дополнение к приведенным выше параметрам я решу включить Babel в качестве функции, а также использовать Babel вместе с TypeScript для автоматически определяемых полифилов, модульный тест выполняется, как и ожидалось. Пример рабочего конфига ниже.

{
  "name": "vue-cli-test",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "serve": "vue-cli-service serve",
    "build": "vue-cli-service build",
    "lint": "vue-cli-service lint",
    "test:e2e": "vue-cli-service test:e2e",
    "test:unit": "vue-cli-service test:unit"
  },
  "dependencies": {
    "vue": "^2.6.6",
    "vue-class-component": "^6.0.0",
    "vue-property-decorator": "^7.0.0",
    "vue-router": "^3.0.1",
    "vuex": "^3.0.1"
  },
  "devDependencies": {
    "@types/chai": "^4.1.0",
    "@types/mocha": "^5.2.4",
    "@vue/cli-plugin-babel": "^3.5.0",
    "@vue/cli-plugin-e2e-cypress": "^3.5.0",
    "@vue/cli-plugin-typescript": "^3.5.0",
    "@vue/cli-plugin-unit-mocha": "^3.5.0",
    "@vue/cli-service": "^3.5.0",
    "@vue/test-utils": "1.0.0-beta.29",
    "chai": "^4.1.2",
    "typescript": "^3.2.1",
    "vue-template-compiler": "^2.5.21"
  }
}
 20.03.2019 15:39
Вы должны сфальсифицировать isServerBuild есть открытый вопрос https://github.com/vuejs/vue-cli/issues/2270#issue-351812395

ссылка на webpack мокко https://github.com/vuejs/vue-cli/blob/dev/packages/%40vue/cli-plugin-unit-mocha/index.js#L5

быстрое средство:

// vue.config.js
module.exports = {
    chainWebpack: (config) => {
      if (process.env.NODE_ENV === 'test') {    
        config.merge({
            // target: 'node',
            devtool: 'inline-cheap-module-source-map'
        })
        config.module
        .rule('vue')
          .use('vue-loader')
          .tap(options => {
            options.isServerBuild = false
            return options
          })
        } 
    },  
        
    
  };


 17.12.2020 11:10
Другие вопросы по теме
Тестирование однофайловых компонентов с помощью Mocha + webpack получило RUNTIME EXCEPTION Исключение при загрузке ваших тестов в модульном тесте на vuejs
Как имитировать navigator.language для модульного теста машинописного текста
Создание отчета о покрытии nyc для проекта VueJS с помощью @ vue / cli-plugin-unit-mocha, TypeScript и SFC
Не удается загрузить изображения PNG и GIF в webpack.config.js
Проблема с модулем не обнаружена при написании модульных тестов для интерфейса Vue.js с использованием веб-пакета mocha
Как разделить файлы для mocha-webpack
Mocha-webpack не находит тесты
Исключение теста Mocha при загрузке тестов
Ошибка компиляции mocha-webpack - неожиданный символ '#'
Что вызывает эту проблему: «Превышено время ожидания 10000 мс. Для асинхронных тестов и перехватчиков убедитесь, что вызывается «done ()»;»
Похожие вопросы
VueJs CLI 3 — как добавить внешнюю библиотеку
Как я могу развернуть приложение Vue в подкаталог?
Как импортировать файлы css в дочерние компоненты vue 3?
Vue.js - элемент DOM не удаляется из родительского компонента после изменения маршрута в
Как правильно использовать слот внутри веб-компонента vue js и применять стили
Как обмениваться модулями узла между приложением vue-cli 3?
Оболочка Windows Power: vue --version «не распознана»
Как использовать VueJS axios-oauth-client и API Google Photos?
Как использовать exclude с загрузчиком babel в vue cli3?
Что такое файл chunk-vendors.js и как он создается? (веб-пакет)
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
Как синхронизировать состояния между серверной частью и интерфейсом с помощью vuex и vue-router?
Вопросы
VUE.JS
Как синхронизировать состояния между серверной частью и интерфейсом с помощью vuex и vue-router?
Я разрабатываю одностраничное приложение, используя vue-cli3 и npm.

Проблема: заполнение базового целочисленного значения (хранящегося в состоянии vuex) с именем прилавок, которое было увеличено/уменьшено в бэкэнде, во внешнем интерфейсе, который отображает новое значение.

Мутации увеличения/уменьшения работают нормально на обоих компонентах (Frontend/Backend), но похоже, что мутации не работают на одном и том же экземпляре маршрута: при увеличении/уменьшении счетчика в бэкенде значение не обновляется во внешнем интерфейсе и в противном случае .

store.js:

Содержит состояние, которое необходимо синхронизировать между Backend/Frontend.

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    counter: 10
  },
  mutations: {
    increment (state) {
      state.counter++
    },
    decrement (state) {
      state.counter--
    }
  }
})
index.js:

Определяет маршруты, которые должен предоставить vue-router.

import Vue from 'vue'
import Router from 'vue-router'
import Frontend from '@/components/Frontend'
import Backend from '@/components/Backend'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Frontend',
      component: Frontend
    },
    {
      path: '/backend',
      name: 'Backend',
      component: Backend
    }
  ],
  mode: 'history'
})
основной.js:

Запускает экземпляр Vue и предоставляет глобальные экземпляры хранить и маршрутизатор.

import Vue from 'vue'
import App from './App'
import router from './router'
import { sync } from 'vuex-router-sync'
import store from './store/store'

Vue.config.productionTip = false

sync(store, router)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
Frontend.vue/Backend.vue:

Оба (Frontend/Backend) используют здесь один и тот же код. Они используют состояние прилавок для его отображения и изменения.

<template>
  <div> Counter: {{ getCounter }}
    <br>
    <p>
      <button @click = "increment">+</button>
      <button @click = "decrement">-</button>
    </p>
  </div>
</template>

<script>
export default {
  name: 'Frontend',
  methods: {
    increment () {
      this.$store.commit('increment')
    },
    decrement () {
      this.$store.commit('decrement')
    }
  },
  computed: {
    getCounter () {
      return this.$store.state.counter
    }
  }
}
</script>
Было бы здорово, если бы кто-нибудь сказал мне, что мне не хватает или я неправильно понял концепцию vuex и vue-router.

 22.03.2019 15:08
12
13
1 844
2
 Ответы 2
Свойства компонента @sebikolon, определенные в data () => {}, являются реактивными, методы — нет, они вызываются один раз. Вместо {{ getCounter }} просто используйте {{ $store.state.counter }}. ИЛИ инициирует свойство в каждом компоненте, который получает значение вашего состояния.

data: function () {
    return {
        counter: $store.state.counter,
    }
}
 22.03.2019 16:01
Просто возьмите счетчик из магазина для обоих компонентов. Вам не нужно data, так как магазин уже реактивен.

<template>
  <div> Counter: {{ counter }}
    <br>
    <p>
      <button @click = "increment">+</button>
      <button @click = "decrement">-</button>
    </p>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'Frontend',
  methods: {
    ...mapMutations([
      'increment',
      'decrement',
    ])
  },
  computed: {
    ...mapState({
        counter: state => state.counter,
    })
  }
}
</script>
Для справки:

mapState: https://vuex.vuejs.org/guide/state.html#the-mapstate-helper
mapMutations: https://vuex.vuejs.org/guide/mutations.html#committing-mutations-in-components
 15.01.2020 15:35
Другие вопросы по теме
Ошибка при выполнении операции CRUD с использованием Vuex в vuejs
Очистите поле при отправке (vee-validate vue)
Как отслеживать глубокое значение объекта при использовании vuex
Vuex - обновить весь объект внутри массива
VUEX: слот панели расширения Vuetify не обновляется после добавления элемента
Нужно несколько экземпляров модуля Vuex для нескольких экземпляров Vue
Где я могу поместить логику авторизации в vue.js?
Обновление массива в vuex не реагирует на компонент
Как получить доступ к методам vue/vuex mapActions с похожим именем, но с другим пространством имен?
Vue.js — Неизвестный пользовательский элемент: <router-view>
Похожие вопросы
Элемент Datepicker показывает «вчера» не как отключенный, когда часовой пояс +14
Пагинация. Как сделать переход между страницами по нажатию на цифры
Передача пользовательского события в Laravel Blade View
Как поставить другую позицию на случайно добавленное изображение? Vue.js
Vue js CLI 2 импортирует и использует плагин javascript
В чем разница между знаками равенства "=" и двоеточием ":" в Vue JS?
Как я могу одновременно создать разные слова для каждого игрока в vue js?
API Google Диска после подписи Google — Vue.Js
Ошибка при выполнении операции CRUD с использованием Vuex в vuejs
Vue // this.$root.$off отписывает все экземпляры компонента от глобального события
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
Интернационализация заголовка таблицы данных Vuetify
Вопросы
VUE.JS
Интернационализация заголовка таблицы данных Vuetify
Я пытаюсь интернационализировать заголовок таблицы данных, используя Vuetify + I18n.

Когда я перевожу свой обычный код, он работает правильно, но теперь мне нужно перевести заголовок моей таблицы данных, созданной с помощью Vuetify.

Я уже пытался добавить код this.$vuetify.t('$vuetify.activity.username') или this.$t('$vuetify.activity.username') в шапку, но ничего не происходит. Язык всегда остается английским (en).

Кто-нибудь знает, как это исправить?

Я отправляю ниже свой код.

Заранее спасибо.

Activity.vue

export default {
  data () {
    return {
      headers: [
        { text: 'ID', value: 'id', width: '1%', align: 'left' },
        { text: this.$vuetify.t('$vuetify.activity.username'), value: 'username', width: '1%' },
        ...
      ]
    }
  },
  ...
}
main.js

import messages from './assets/lang'

Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: 'en',
  messages
})

// Vue.use(Vuetify)
Vue.use(Vuetify, {
  lang: {
    t: (key, ...params) => i18n.t(key, params)
  }
})
./активы/язык/index.js

module.exports = {
  en: {
    ...
    $vuetify: {
      dataIterator: {
        rowsPerPageText: 'Items per page:',
        ...
      },
      ...
      activity: {
        username: 'Username'
      }
    }
  },
  pt: {
    ...
    $vuetify: {
      dataIterator: {
        rowsPerPageText: 'Itens por página:',
        ...
      },
      ...
      activity: {
        username: 'Nome do usuário'
      }
    }
  }
}
 01.04.2019 19:28
6
2
10 068
2
Данный вопрос помечен как решенный
 Ответы 2
 Ответ принят как подходящий
Для Vuetify 2.x

<v-data-table :headers = "headers" ...
И поместите в вычисленные данные

 computed: {   
    headers () {
      return [
        {
          text: this.$t('title'),
          align: 'left',
          sortable: false,
          value: 'title'
        },
Для Vuetify 1.x

вы можете поместить свою функцию перевода в слот headerCell. Это не сработает, если вы поместите функцию в объект headers: в Activity.vue, просто поместите туда свои ключи перевода и используйте шаблон со слотом.

<v-data-table>
    ....
    <template slot = "headerCell" slot-scope = "props">
        {{ $t(props.header.text) }}
    </template>
    ....
 01.05.2019 03:17
Вы можете поместить свой заголовок в вычисляемую функцию. Когда локальные изменения, заголовки будут обновлены

computed:{

    headers(){
      return [
        { text: 'ID', value: 'id', width: '1%', align: 'left' },
        { text: this.$vuetify.t('$vuetify.activity.username'), value: 'username', width: '1%' },
        ...
      ]
    }
...
}
 27.05.2019 12:33
Другие вопросы по теме
Vuetify/автозаполнение: группа стилей
Как использовать кнопку внутри слота метки v-text-field
Проблема выравнивания сложенных значков Font Awesome в Chrome
Как протестировать компонент vue, содержащий дочерний компонент v-text-field Vuetify?
Как использовать vuetify.css и bootstrap на одной странице?
Vuetify Не удалось найти цель при использовании присоединения к v-autocomplete
Как использовать вкладки Vuetify с vue-router через имя маршрутизатора
Vuetify css сокрушает Bootstrap css
Как увеличить размер шрифта в заголовке v-data-table
Как заполнить v-текстовое поле данными json
Похожие вопросы
Как отобразить одну строку данных из облачного хранилища с помощью vue.js
Ядро ASP.NET. Как я могу аннулировать JWT-токен после смены пароля
Как решить noscript - не работает должным образом без включенного JavaScript при обслуживании приложения Vue
Фильтрация с помощью Vue.js, получение значения объекта
Какой формат `en.js` или `ja.js` в ленивой загрузке vue-i18n
Включить зависимость для плагина vue
Слоты родительского компонента внутри дочернего компонента vue 2.x
Как перейти к другому приложению с помощью реактивного маршрутизатора?
Один и тот же uuid два раза + Vuex + uuidv4()
Проект Vue.js с использованием Vue I18n получил следующую ошибку: «TypeError: i18n is undefined»
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
Как вы включаете vuetify внутри веб-компонента
Вопросы
VUE.JS
Как вы включаете vuetify внутри веб-компонента
Я создаю веб-компонент, используя следующую команду:

vue-cli-service build --target wc --name my-element 'src/components/mycomponent.vue'
Я хотел бы использовать Vuetify внутри этого компонента. Как добавить его в mycomponent.vue, чтобы он находился внутри теневого корня компонента?

Этот компонент будет динамически загружаться в приложения, созданные с использованием других фреймворков/стилей. Я хочу, чтобы веб-компонент мог использовать, например, v-btn, v-layout и т. д. внутри него.

Спасибо, Донни

 02.04.2019 07:01
4
3
5 669
2
Данный вопрос помечен как решенный
 Ответы 2
 Ответ принят как подходящий
Начиная с версии 1.3 вы можете импортировать отдельные компоненты, А ля карт...

<template>
  <!-- whatever -->
</template>

<script>
import { VBtn, VLayout } from 'vuetify/lib'

export default {
  name: 'MyElement',
  components {
    VBtn,
    VLayout
  },
  // etc
}
</script>
См. https://vuetifyjs.com/en/framework/a-la-carte#importing-components

 02.04.2019 07:13
Для vuetify 2.x требуется инициализация экземпляра Vue следующим образом.

// plugins/vuetify.js
import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify);

const opts = {};

export default new Vuetify(opts);
// main.js
import Vue from 'vue';
import App from './app.vue';
import vuetify from './plugins/vuetify';

new Vue({
  vuetify,
  render: h => h(App),
}).$mount('#app');

Вместо этого вам нужно переместить такую ​​инициализацию в ваш веб-компонент.

<template>
  ...
</template>

<script>
import { VBtn, VLayout } from 'vuetify/lib'
import vuetify from '../plugins/vuetify';

export default {
  name: 'MyWebComponent',
  vuetify,
  components: {
    VBtn,
    VLayout
  },
  ...
}
</script>

<style>
  ...
</style>
 16.12.2019 08:53
Другие вопросы по теме
Медленная прокрутка вверх с помощью Vuetify
Интернационализация заголовка таблицы данных Vuetify
Vuetify/автозаполнение: группа стилей
Как использовать кнопку внутри слота метки v-text-field
Проблема выравнивания сложенных значков Font Awesome в Chrome
Как протестировать компонент vue, содержащий дочерний компонент v-text-field Vuetify?
Как использовать vuetify.css и bootstrap на одной странице?
Vuetify Не удалось найти цель при использовании присоединения к v-autocomplete
Как использовать вкладки Vuetify с vue-router через имя маршрутизатора
Vuetify css сокрушает Bootstrap css
Похожие вопросы
Как развернуть nodejs и vuejs на героку
Динамическое обновление имени заголовка с помощью Ag-Grid
Вставьте строку в атрибут массива в таблице Dynamodb без дублирования
Как заставить два входа реагировать друг на друга в Vue.js
Как получить значение атрибута данных в компоненте в другом компоненте без использования шины событий?
Автобус событий Vue ожидает монтирования
Laravel/Vue JS - невозможно загружать файлы с устройств Android
Я создаю приложение в Vue. Мне нужно сохранить информацию для последующего использования, это хороший способ использовать js-cookie?
Vue Froala и Laravel Mix - не удается найти модуль «babel-runtime/core-js/json/stringify»
Жизненный цикл маршрутизации Vue
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
Vue.js: показать/скрыть кнопки на панели навигации в зависимости от состояния магазина Vuex, когда пользователь вошел в систему или нет
Вопросы
JAVASCRIPT
Vue.js: показать/скрыть кнопки на панели навигации в зависимости от состояния магазина Vuex, когда пользователь вошел в систему или нет
Я создаю панель навигации, которая показывает или скрывает кнопки в зависимости от того, вошел ли пользователь в систему или нет. Для этого я сохраняю состояние на Vuex и localStorage.

Я пытаюсь создать динамическое меню, используя список объектов (например, rightMenu), который содержит информацию о кнопках (например, маршрут, заголовок и флаг, который указывает, может ли кнопка отображаться или нет, если пользователь вошел в систему) .

Всегда, когда пользователь входит в систему, this.$store.state.auth.isUserLoggedIn меняется на true, однако шаблон не меняется, кнопка остается в том же исходном состоянии, когда пользователь не вошел в систему. Например: кнопка sign out не отображается при обновлении this.$store.state.auth.isUserLoggedIn. Но когда я нажимаю ctrl+F5 и страница перезагружается, кнопки отображаются правильно. В этом случае, например, кнопка sign out отображается правильно, когда я перезагружаю страницу вручную.

Я думаю о том, чтобы заставить страницу перезагружаться снова, когда пользователь входит в систему или выходит из нее, однако я считаю, что это не очень хороший вариант.

Кто-нибудь может мне помочь?

Я даю код, который я использую ниже.

Заранее спасибо.

Menu.vue > шаблон

<div>
    <v-toolbar color='grey darken-3' dark>
        <v-toolbar-title>Site</v-toolbar-title>

        ...

        <v-toolbar-items class='hidden-sm-and-down'>
            <v-btn v-for='item in rightMenu' :key='item.title'
                   :to='item.to' v-if='item.showButton' flat>
                   {{ item.title }}
            </v-btn>
        </v-toolbar-items>

    </v-toolbar>

    <router-view/>
</div>
Menu.vue > скрипт

export default {
  data () {
    return {
      rightMenu: [
        { to: '/sign_in', title: 'sign in'
          showButton: !this.$store.state.auth.isUserLoggedIn },
        { to: '/sign_up', title: 'sign up'
          showButton: !this.$store.state.auth.isUserLoggedIn },
        { to: '/sign_out', title: 'sign out'
          showButton: this.$store.state.auth.isUserLoggedIn }
      ]
    }
  },
  ...
}
store.js

const store = new Vuex.Store({
  state: {
    auth: {
      token: '',
      isUserLoggedIn: false
    }
  },
  mutations: {
    setAuthToken (state, token) {  // I use it on the Login
      state.auth.token = token
      state.auth.isUserLoggedIn = !!token
      localStorage.setItem('store', JSON.stringify(state))
    },
    cleanAuth (state) {  // I use it on the Logout
      state.auth = {
        token: '',
        isUserLoggedIn: false
      }
      localStorage.setItem('store', JSON.stringify(state))
    }
  }
  ...
})
РЕДАКТИРОВАТЬ 1:

Когда я явно использую this.$store.state.auth.isUserLoggedIn в своем коде, он работает хорошо. Итак, кнопка появляется и исчезает правильно. Я привожу ниже пример:

Menu.vue > шаблон

<v-toolbar-items class='hidden-sm-and-down'>
    <v-btn v-if='this.$store.state.auth.isUserLoggedIn' flat> 
      Test {{ this.$store.state.auth.isUserLoggedIn }}
    </v-btn>
</v-toolbar-items>
Следовательно, я считаю, что проблема в связывании showButton с this.$store.state.auth.isUserLoggedIn.

 08.04.2019 19:10
1
2
2 901
2
Данный вопрос помечен как решенный
 Ответы 2
Используйте свойство computed, чтобы сделать это reactive:

<template>
...
<v-btn v-for='item in rightMenu' :key='item.title'
  :to='item.to' v-if='isUserLoggedIn(item.title)' flat>
  {{ item.title }}
</v-btn>
...
</template>

<script>
...
computed: {
  isUserLoggedIn() {
    return (title) => {  // you'll not have any caching benefits
      if (title === 'sign out') {
        return this.$store.state.auth.isUserLoggedIn;
      }
      return !this.$store.state.auth.isUserLoggedIn;
    }
  }
}
...
</script>
 08.04.2019 19:45
 Ответ принят как подходящий
Благодаря ответам Криса Ли, Андрея Георгиу и Саджиба Хана я смог решить свою проблему.

Андрей Георгиу объяснил, что я не могу получить доступ к вычисляемым свойствам в data(), а Крис Ли предложил вместо этого использовать вычисляемую переменную. Эти ответы плюс пример Саджиба Хана я смог придумать в решении, которое я поделюсь ниже. Я надеюсь, что это поможет другим в будущем.

Короче говоря, я создал вычисляемое свойство, которое возвращает мой массив, и всегда при обновлении this.$store.state.auth.isUserLoggedIn массив изменяется вместе (следовательно, и меню).

Я намерен создать mapGetter для своего this.$store.state.auth.isUserLoggedIn. Как только я это сделаю, я обновлю ответ.

Большое спасибо, ребята.

<script>
export default {
  data () {
    return { ... }
  },
  computed: {
    rightMenu () {
      return [
        { title: 'sign_in', to: '/sign_in', 
            showButton: !this.$store.state.auth.isUserLoggedIn },
        { title: 'sign_up', to: '/sign_up', 
            showButton: !this.$store.state.auth.isUserLoggedIn },
        { title: 'sign_out', to: '/sign_out',
            showButton: this.$store.state.auth.isUserLoggedIn }
      ]
    }
  }
}
</script>
РЕДАКТИРОВАТЬ 1: Решение с использованием mapGetters

Menu.vue

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return { ... }
  },
  computed: {
    ...mapGetters([
      'isUserLoggedIn'
    ]),
    rightMenu () {
      return [
        { title: 'sign_in', to: '/sign_in', 
            showButton: !this.$store.state.auth.isUserLoggedIn },
        { title: 'sign_up', to: '/sign_up', 
            showButton: !this.$store.state.auth.isUserLoggedIn },
        { title: 'sign_out', to: '/sign_out',
            showButton: this.$store.state.auth.isUserLoggedIn }
      ]
    }
  }
}
</script>
store.js

Я добавил следующий геттер:

...
getters: {
  isUserLoggedIn (state) {
    return state.auth.isUserLoggedIn
  }
}
...
 08.04.2019 20:34
Другие вопросы по теме
Автозаполнение Vue в laravel
Как сделать снимок экрана определенного элемента html div в vue.js
Интеграция редактора AG-Grid Vue: разница между 20.1.0 и 20.2.0
$emit выполняется до вычисления
Сохранение выбранных значений фильтров элементов в компоненте списка после возврата из просмотра компонента элемента
Как выровнять содержимое по центру компонента v-card в Vuetify?
Твиттер намерен поделиться японским текстом, который не работает в IE11
Перевести текст из скрипта с помощью Vue-i18n
Как я могу получить конкретную информацию в зависимости от того, какой проект я нажимаю?
Как принудительно перезагрузить узел #vuetify #treeview?
Похожие вопросы
Как обрабатывать условные операторы в стилизованном компоненте
Как многократно отображать один и тот же компонент с одним и тем же реквизитом?
Почему этот фрагмент кода не заменяет первую букву каждого слова?
Есть ли способ вставить переменную js в полезную нагрузку json?
Как получить доступ к вложенной информации в ответе JSON API?
Кукловод: найти iframe по классу
Попытка вызвать функции в javascript, т.е. файл JS из классического ASP
Какой алгоритм шифрования хэшей использует web3? ethereumjs-util Sha3 возвращает другой результат
Автозаполнение Vue в laravel
«SyntaxError: неожиданный идентификатор» в классе javascript
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
Почему клонированный проект, созданный с помощью vue-cli-3, не распознает «@» как путь?
Вопросы
NODE.JS
Почему клонированный проект, созданный с помощью vue-cli-3, не распознает «@» как путь?
Итак, я нахожусь в ситуации, когда я создал новый проект Vue с помощью vue-cli-3. Я работал над ним несколько недель.

Я решил переключиться на свой ноутбук с рабочего стола, так как я буду путешествовать. Поэтому я нажал на репозиторий на своем рабочем столе, а теперь на своем ноутбуке я сделал git clone проект и использовал npm install.

Теперь, когда я запускаю npm serve == vue-cli-service serve, я получаю сообщение об ошибке, что проект не распознает модули, начинающиеся с @, например, import movements from '@/data/movements'.

Я попробовал тот же процесс с моим рабочим ноутбуком, и все работало нормально. Я что-то пропустил во время клонирования из текущего репо или что случилось? Пожалуйста, почему это происходит?

Я обнаружил, что вы можете использовать vue.config.js и просто переписать конфигурацию Webpack (что помогает), но зачем мне переписывать конфигурацию при работе над проектом с другого компьютера?

Это мой файл .gitignore, я не думаю, что он блокирует важные файлы.

.DS_Store
node_modules
/dist

# local env files
.env.local
.env.*.local

# Log files
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Editor directories and files
.idea
.vscode
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw*
 15.04.2019 23:43
0
0
691
2
Данный вопрос помечен как решенный
 Ответы 2
Согласно документация новой версии, @ указывает на каталог src только в шаблонах.

If the URL starts with @, it's also interpreted as a module request. This is useful because Vue CLI by default aliases @ to <projectRoot>/src. (templates only)

Что вы можете попробовать, так это удалить символ ^ из вашего файла package.json, чтобы вернуться к предыдущей версии vue, а затем снова сделать npm install. Надеюсь, это сработает.

 25.04.2019 14:26
 Ответ принят как подходящий
Обновление: в «@» не было ничего плохого, но git испортил мои имена файлов.

Каким-то образом мой клонированный проект имел movements.js с маленькой буквой m, хотя я переименовал его в заглавную M Movements.js перед фиксацией и отправкой.

 26.04.2019 15:06
Другие вопросы по теме
Как предотвратить изменение формы выбора до завершения диалога в Vue
Использование всплывающей подсказки Nativescript vue
Как получить значение из ввода без использования v-модели в Vue.js?
Запуск функции ПОСЛЕ полного отображения маршрута в Nuxt.js
Vuejs обновляет дочерний компонент при обновлении родительских данных
Можно ли передавать данные из компонента Polymer в компонент Vue?
Когда обновлять токен JWT?
Как убедиться, что элементы DOM, которыми я хочу манипулировать, загрузились, прежде чем пытаться что-либо сделать с ними в Vue.js?
Перейти к позиции по клику (класс доступа из другого компонента Vue)
Реквизиты компонентов Vue не обновляются
Похожие вопросы
Express и PassportJs - стратегия Google OAuth2.0 не дает мне объект req.user
Есть ли способ получить все предложения во внешнем модуле в VS Code?
Fs.readFile возвращает строку, но с пробелом между каждым символом и добавлением символов
Невозможно обновить модель Revit для Basic Viewer
Множественная вставка внутри QueryFile
Как скрыть поле в обратном вызове document.save() в мангусте?
Сбой сборки NG в Azure Pipelines с ошибкой NPM 134
Сообщение об ошибке: MongoError: неверная аутентификация Ошибка аутентификации через строку URI
Vuejs обновляет дочерний компонент при обновлении родительских данных
Neo4J всегда по умолчанию использует числа NodeJS как числа с плавающей запятой при использовании параметризованных запросов
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

vRedDeveloper
Блог
Вопросы
Теги
Поиск...
Объединение нескольких классов CSS в один
Вопросы
VUE.JS
Объединение нескольких классов CSS в один
В проекте Vue я хочу объединить несколько классов css, которые я использую для двух элементов, чтобы навести порядок в моем html. Мне сказали, что я могу сделать что-то подобное с cli, однако я понятия не имею, как это сделать.

.common-class {
  @apply .class1 .class2 ...;
}
 19.04.2019 08:59
1
0
104
2
Данный вопрос помечен как решенный
 Ответы 2
Вы можете использовать LESS в своих файлах Vue и использовать псевдокласс продлевать для объединения стилей.

<style lang = "less">
.class1{

}
.class2{

}
.common-class {
  &:extend(.class1);
  &:extend(.class2);
}
</style>
 19.04.2019 09:12
 Ответ принят как подходящий
Вы всегда можете создать свойство computed, которое возвращает эти два класса вместе:

new Vue({
  el: "#app",
  computed: {
    combineStyles() {
      return 'foo bar'
    }
  }
})
.foo {
  color: red;
}

.bar {
  font-size: 2rem;
}
<script src = "https://cdnjs.cloudflare.com/ajax/libs/vue/2.5.17/vue.js"></script>

<div id = "app">
  <p :class = "combineStyles">foo bar</p>
</div>
Препроцессор CSS не требуется. Однако, если вы хотите использовать препроцессор CSS, тогда следить за документами.

 19.04.2019 09:57
Другие вопросы по теме
Почему клонированный проект, созданный с помощью vue-cli-3, не распознает «@» как путь?
Как обновить мою глобальную установку vue-cli до последней версии?
Как правильно включить скрипты из купленной темы в Vue.js
Прокси-сервер Vue devServer не помогает, я все еще получаю ошибку CORS
Vue.js: показать/скрыть кнопки на панели навигации в зависимости от состояния магазина Vuex, когда пользователь вошел в систему или нет
Не могу установить переменные env в моем проекте vuejs2
Все переменные среды Vue-cli 3 не определены
Как вы включаете vuetify внутри веб-компонента
Интернационализация заголовка таблицы данных Vuetify
Проект Vue.js с использованием Vue I18n получил следующую ошибку: «TypeError: i18n is undefined»
Похожие вопросы
Могу ли я определить, когда все изображения загружены, чтобы изменить переменную isLoaded на true?
Vuejs v-show в пользовательском компоненте vue вызывает TypeError: невозможно прочитать свойство '_withTask' неопределенного
Все реквизиты и данные vue выдают ошибку «Свойство» «не существует для типа» с машинописным текстом
Импорт компонентов и css отдельно в vue.js
Как внести изменения в панель навигации, когда пользователь входит в систему?
Ошибки в консоли браузера, запросы к /sockjs-node/info?t=1555629946494
Магазин Vuex не определен в vue-router
Невозможно получить данные из API (ресурс заблокирован клиентом) в Vuex
Изображение require() в nuxt с горячей перезагрузкой с помощью веб-пакета HRM
Как правильно встроить скрипт JW Player в VueJS?
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
Объединение нескольких классов CSS в один
Вопросы
VUE.JS
Объединение нескольких классов CSS в один
В проекте Vue я хочу объединить несколько классов css, которые я использую для двух элементов, чтобы навести порядок в моем html. Мне сказали, что я могу сделать что-то подобное с cli, однако я понятия не имею, как это сделать.

.common-class {
  @apply .class1 .class2 ...;
}
 19.04.2019 08:59
1
0
104
2
Данный вопрос помечен как решенный
 Ответы 2
Вы можете использовать LESS в своих файлах Vue и использовать псевдокласс продлевать для объединения стилей.

<style lang = "less">
.class1{

}
.class2{

}
.common-class {
  &:extend(.class1);
  &:extend(.class2);
}
</style>
 19.04.2019 09:12
 Ответ принят как подходящий
Вы всегда можете создать свойство computed, которое возвращает эти два класса вместе:

new Vue({
  el: "#app",
  computed: {
    combineStyles() {
      return 'foo bar'
    }
  }
})
.foo {
  color: red;
}

.bar {
  font-size: 2rem;
}
<script src = "https://cdnjs.cloudflare.com/ajax/libs/vue/2.5.17/vue.js"></script>

<div id = "app">
  <p :class = "combineStyles">foo bar</p>
</div>
Препроцессор CSS не требуется. Однако, если вы хотите использовать препроцессор CSS, тогда следить за документами.

 19.04.2019 09:57
Другие вопросы по теме
Почему клонированный проект, созданный с помощью vue-cli-3, не распознает «@» как путь?
Как обновить мою глобальную установку vue-cli до последней версии?
Как правильно включить скрипты из купленной темы в Vue.js
Прокси-сервер Vue devServer не помогает, я все еще получаю ошибку CORS
Vue.js: показать/скрыть кнопки на панели навигации в зависимости от состояния магазина Vuex, когда пользователь вошел в систему или нет
Не могу установить переменные env в моем проекте vuejs2
Все переменные среды Vue-cli 3 не определены
Как вы включаете vuetify внутри веб-компонента
Интернационализация заголовка таблицы данных Vuetify
Проект Vue.js с использованием Vue I18n получил следующую ошибку: «TypeError: i18n is undefined»
Похожие вопросы
Могу ли я определить, когда все изображения загружены, чтобы изменить переменную isLoaded на true?
Vuejs v-show в пользовательском компоненте vue вызывает TypeError: невозможно прочитать свойство '_withTask' неопределенного
Все реквизиты и данные vue выдают ошибку «Свойство» «не существует для типа» с машинописным текстом
Импорт компонентов и css отдельно в vue.js
Как внести изменения в панель навигации, когда пользователь входит в систему?
Ошибки в консоли браузера, запросы к /sockjs-node/info?t=1555629946494
Магазин Vuex не определен в vue-router
Невозможно получить данные из API (ресурс заблокирован клиентом) в Vuex
Изображение require() в nuxt с горячей перезагрузкой с помощью веб-пакета HRM
Как правильно встроить скрипт JW Player в VueJS?
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
Укажите выходной каталог ресурсов при сборке в режиме разработки
Вопросы
VUE.JS
Укажите выходной каталог ресурсов при сборке в режиме разработки
Я использую Vue CLI для встраивания своего приложения в один из моих существующих php-проектов. В случае работы со сгенерированными файлами в php мне нужно переместить ресурсы в каталог ../public/assets/. К сожалению, похоже, это не работает в среде разработки (рабочий режим работает нормально, но мне действительно нужно проверить интеграцию vue в php-приложение).

Я что-то делаю не так или это известное ограничение?

Вот конфиг:

// vue.config.js
module.exports = {
    outputDir: '../public',
    assetsDir: './assets',
    indexPath: './views/index.html'
};
 22.04.2019 17:10
0
0
1 548
2
Данный вопрос помечен как решенный
 Ответы 2
Согласно документации, вы можете просто скопировать assets в свою папку public/assets и ссылаться на них по абсолютному пути.

https://cli.vuejs.org/guide/html-and-static-assets.html#static-assets-handling

Static assets can be handled in two different ways:

Imported in JavaScript or referenced in templates/CSS via relative paths. Such references will be handled by webpack.

Placed in the public directory and referenced via absolute paths. These assets will simply be copied and not go through webpack.

 25.04.2019 13:54
 Ответ принят как подходящий
Из-за того, что HMR находится в режиме разработки, это пока невозможно реализовать. Вот ссылка на сообщение на форуме Vue.js.

 02.05.2019 10:30
Другие вопросы по теме
Как получить URL-адрес изображения в vue из проекта django rest
Как переключить класс, чтобы показать, какая вкладка активна в VueJS?
Как передать данные с динамическим ключом в раскрывающемся списке семантического пользовательского интерфейса?
Импортировать все компоненты vue js в один файл
Как реализовать аналитику Google в приложении vue на нескольких доменах?
Изменение состояния на true при вводе нового элемента и изменение на false через 5 секунд
419 Ошибка при попытке опубликовать на мой контроллер
Как правильно установить h1 в другом компоненте?
Как получить высоту дочернего компонента?
Что именно вычисляет свойства в vuejs?
Похожие вопросы
Есть способ сделать так, чтобы закусочная открывалась только один раз?
Как переключить класс, чтобы показать, какая вкладка активна в VueJS?
Vue.js некоторые элементы в карточке не реагируют
Как передать данные с динамическим ключом в раскрывающемся списке семантического пользовательского интерфейса?
Vuejs typescript и дочерние компоненты «Избегайте прямого изменения реквизита»
Browsersync вызывает ошибку «Отказано в выполнении встроенного скрипта…» в SPA, если маршрут находится не в корневом каталоге
Как я могу использовать proxyTable для запроса перекрестного происхождения в vue-cli?
Запрос Ajax не дает никаких данных
Импортировать все компоненты vue js в один файл
Как отобразить несколько вариантов выбора в Sweetalert2 с помощью VueJS?
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
Развертывание приложения Vue.js с помощью конвейера выпуска azure devops
Вопросы
VUE.JS
Развертывание приложения Vue.js с помощью конвейера выпуска azure devops
У меня есть приложение vue.js, которое создается и строится с использованием vue-cli 3. У меня есть некоторые переменные среды в файлах .env.test и .env.prod.

Для сборки приложения я использую конвейер сборки azure devops, где запускаю команду: npm run build:test или нпм run build:prod

При этом создаются различные артефакты, которые вводятся для Stage в конвейере выпуска azure devops.

Проблема, с которой я столкнулся, заключается в том, что я не хочу иметь отдельные сборки для каждой среды. Я хочу создать один и развернуть его в разных средах. Возможно ли это?

Как мне обрабатывать эти переменные, чтобы собрать один раз пакет для всех сред? Это хорошая практика? Или у меня должны быть разные конвейеры для разных сред, как сейчас?

 23.05.2019 00:39
10
4
5 343
2
Данный вопрос помечен как решенный
 Ответы 2
 Ответ принят как подходящий
С точки зрения КИ
Должен быть только один build pipeline, который будет создавать артефакт независимо от среды, в которой он будет работать.

.env.prod может использоваться для развертывания артефактов в любых средах (Development, Production и т. д.)

Вы должны предоставить конфигурацию с токенами, которые будут заменены на этапе развертывания/релиза:

env_key1=#{token_key1}#
env_key2=#{token_key2}#
env_key3=#{token_key3}#
Поэтому просто создайте проект и опубликуйте артефакт, используя один файл конфигурации для всех сред.

С точки зрения компакт-диска
Я бы рекомендовал использовать одиночный release pipeline с несколькими этапами. (Development, Production и т. д.). 

Укажите отдельные variables groups на основе stages. Это позволяет хранить переменные отдельно, логически сгруппировать и использовать Azure Key Vault в качестве источника секретов. Имена переменных должны совпадать с токенами среды (без префикса и суффикса).



Добавьте любой Task, который вы хотите, в Stage, который найдет и заменит жетоны.

В настоящее время я использую расширение Replace Tokens из торговой площадки. В зависимости от stage будет заменена другая группа переменных. Replace Tokens задача выполняет всю работу автоматически, т.е. сканирует js файлы и заменяет токены. Префикс и суффикс токена по умолчанию: #{}#, но задача позволяет указать желаемый вами вариант. 

 25.09.2019 12:25
Итак, у нас была аналогичная проблема. Мы собираемся обновить наше решение для работы с группой переменных, но если вам нужен способ сделать это без нее, вы всегда можете сделать что-то вроде этого:

- script: |
    npm install
    npm run test:unit
    if [ $? -ne 0 ]; then
        exit 1
    fi
    npm run build-prod
  condition: and(succeeded(), not(in(variables['Build.Reason'], 'PullRequest', 'Manual')))
  displayName: 'npm install, test and build for prod'

- script: |
    npm install
    npm run test:unit
    if [ $? -ne 0 ]; then
        exit 1
    fi
    npm run build
  condition: and(succeeded(), in(variables['Build.Reason'], 'PullRequest', 'Manual'))
  displayName: 'npm install, test and build for test'
Итак, быстрый разбор сценариев. Если сборка была частью PullRequet или руководства, нам нужна была промежуточная сборка, в которой использовался сценарий сборки по умолчанию. В противном случае мы предполагали, что сборка предназначена для производства (вам понадобятся некоторые политики ветвей, чтобы обеспечить это). Затем конвейер релиза проверил наличие тега сборки a, который мы установили следующим образом:

- task: PowerShell@2
  condition: and(succeeded(), not(in(variables['Build.Reason'], 'PullRequest', 'Manual')))
  inputs:
    targetType: 'inline'
    script: 'Write-Host "##vso[build.addbuildtag]release"'

- task: PowerShell@2
  condition: and(succeeded(), in(variables['Build.Reason'], 'PullRequest', 'Manual'))
  inputs:
    targetType: 'inline'
    script: 'Write-Host "##vso[build.addbuildtag]test"'
Теперь, как я уже сказал, мы отходим от этого, но это работало довольно хорошо, и это позволило нам иметь одну сборку, которую можно было бы развернуть с правильными настройками без необходимости делать что-то слишком причудливое.

Если вы используете что-то подобное, последним шагом будет фильтрация сборок, когда они попадают в конвейер выпуска, на основе тега сборки и ветки.

 17.12.2019 04:00
Другие вопросы по теме
Как получить статус сборки конкретной ветки с помощью встраиваемого плагина статуса сборки в Jenkins
Уменьшение размера пакета React/MERN Stack Bundle — в основном удаление дубликатов D3
Использование библиотеки линейной алгебры Eigen, импортированной рабочей областью в пакете
Delphi Tokyo 10.2 нуждается в перестройке всего проекта после обновления кода из репозитория
Сборка Jenkins не может отправить код в GIT
Сбой сборки при добавлении зависимости диалогового потока
Все вкусы продукта объединяются в один вариант сборки
Как ограничить электронные письма об ошибках сборки только определенной веткой в ​​travis CI?
ClassNotFoundException для разрешенного пакета OSGI
Как создать несколько приложений в проекте angular 7 в одной команде сборки?
Похожие вопросы
Анимация холста из Vue
Windows Vue-CLI 3.5 + процесс node.js не определен - проблема среды
Использование фильтра Vue.js в условном операторе
Как правильно использовать Vue.set()?
Часы Vue неожиданно вызвали дважды
Nuxt JS LocalStorage в универсальном режиме не работает
Как не иметь доступа вручную / войти после входа в систему - VueJS?
VueJs: как повторно использовать модальное диалоговое окно начальной загрузки
Отправьте повторяющиеся параметры запроса на маршрутизатор Vue
Неверный источник привязки Firebase при попытке использовать readyCallback с vuefire
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
Это правильная глобальная связь компонентов в vue?
Вопросы
VUE.JS
Это правильная глобальная связь компонентов в vue?
я делаю модальные всплывающие компоненты myPopup.vue для глобального.

и импортируйте это в App.vue и main.js я использую это для глобального, определяю некоторый объект Vue.прототип

сделать о методе всплывающего окна в Vue.прототип например, «показать» или «скрыть», любой другой.

но я думаю, что это может быть анти-шаблон .. Я хочу найти больше лучших практик.

в App.vue

<div id = "app>
  <my-popup-component></my-popup-conponent>
  <content></content>
</div>
main.js

...
Vue.prototype.$bus = new Vue(); // global event bus
Vue.prototype.$popup = {
  show(params) {
    Vue.prototype.$bus.$emit('showPopup', params);
  },
  hide() {
    Vue.prototype.$bus.$emit('hidePopup');
  }
}

Vue.component('my-popup-component', { ... });
...
myPopup.vue

....
export default {
...

  created() {
    this.$bus.$on('showPopup', this.myShow);
    this.$bus.$on('hidePopup', this.myHide);
  }
...
потребность-всплывающее-component.vue

methods: {
  showPopup() {
    this.$popup.show({
      title: 'title',
      content: 'content',
      callback: this.okcallback
    }); 
  }
}
Вроде работает хорошо, но не знаю правильно ли это. Есть ли другой способ?

 24.05.2019 09:03
2
0
1 293
2
Данный вопрос помечен как решенный
 Ответы 2
 Ответ принят как подходящий
Я был очень удивлен, читая ваше решение, но если вы чувствуете, что оно простое и работает, почему бы и нет?

я бы сделал так:

Добавьте логическое свойство в состояние (или любые данные, необходимые для отображения всплывающего окна), отражающие отображение всплывающего окна.
используйте mapState в App.vue, чтобы добавить реактивное логическое значение в компонент
используйте v-if или покажите в шаблоне App.vue во всплывающем объявлении
создайте мутацию showPopup, которая принимает логическое значение и соответствующим образом обновляет состояние
вызывать мутацию из любого места, в любое время, когда мне нужно показать/скрыть всплывающее окно
Это будет следовать шаблону vue. Все, что находится в состоянии, компоненты пользовательского интерфейса отражают состояние, мутации мутируют состояние.

Ваше решение работает, хорошо, но оно не соответствует структуре vue, например, инструменты отладки vue будут бесполезны в вашем случае. Я считаю, что лучше иметь минимальное количество шаблонов в одном приложении, для обслуживания, передачи другим людям и так далее.

 24.05.2019 09:26
Вы каким-то образом пытаетесь создать глобальный компонент, который, возможно, захотите использовать в своих разных проектах.

Вот как я думаю, что я бы сделал это -

Как мне повторно использовать модальный диалог вместо создания 3 отдельных диалогов

Сделайте отдельный компонент modal, скажем - commonModal.vue.

Теперь в свой commonModal.vue примите единичный prop, скажем data: {}.

Теперь в разделе htmlcommonModal

<div class = "modal">
  <!-- Use your received data here which get received from parent -->
  <your modal code />
</div>
Теперь импортируйте commonModal в потребляющий/родительский компонент. Создайте свойство данных в родительском компоненте, скажем, isVisible: false и вычисляемое свойство для data, которое вы хотите отобразить в modal, скажем, modalContent.

Теперь используйте это так

<main class = "foo">
   <commonModal v-show = "isVisible" :data = "data" />
   <!-- Your further code -->
</main>
Вышеизложенное поможет вам повторно использовать модальное окно, и вам просто нужно отправить data из родительского компонента.

Как узнать, какой модальный диалог запущен?

Просто проверьте свойство isVisible, чтобы проверить, открыто ли modal или нет. Если isVisible = false, то ваш модал не виден и наоборот

Как мой компонент глобального диалога будет информировать родительский компонент о его текущем состоянии

Теперь вы можете подумать, как закрыть модальное окно и сообщить об этом родительскому компоненту. При нажатии кнопки триггер closeModal для этого

Создайте метод — closeModal и внутри компонента commonModal и emit событие.

closeModal() { 
  this.$emit('close-modal')
}
Теперь это вызовет пользовательское событие, которое может быть прослушано потребляющим компонентом.

Итак, в вашем родительском компоненте просто используйте это настраиваемое событие, например, следующее, и закройте свой модальный

<main class = "foo">
  <commonModal v-show = "isVisible" :data = "data" @close- modal = "isVisible = false"/>
  <!-- Your further code -->
</main>
 24.05.2019 09:53
Другие вопросы по теме
Как передать событие клика на другую кнопку и вызвать всплывающее окно
Как передать значение v-модели между компонентами
Как получить доступ к ключевым кадрам с ограниченной областью действия из JS
Как получить доступ к `PromiseValue` в ответе аксиом в VueJs
Поддержка локали Quasar QDate не работает
Как правильно удалить элемент v-for в Vue?
Как сделать динамический условный рендеринг в цикле vuejs (v-if в v-for)
Что означает this.$root в компоненте?
Vue JS: открыть компонент меню с помощью кнопки, закрыть с помощью щелчка вне меню
Для чего в Vue используются inheritAttrs: false и $attrs?
Похожие вопросы
Предотвратить разрушение div при скрытии или удалении всех дочерних элементов
У меня проблемы с методом "AXIOS PATCH"
Как использовать сложную переменную в качестве ключа объекта в выражении усов vue data?
Получить только один раз данные из twitch API
Аргументы и параметры функции не работают в проекте vuetify с использованием ключевого слова «это»?
Настройка route-guard в интерфейсе аутентификации Vue.js/Firebase
Как передать событие клика на другую кнопку и вызвать всплывающее окно
Как размыть элемент при нажатии в vue
"Соединение отклонено! Selenium server запущен?" ошибка в тестах VueJS Nightwatch E2E с использованием ChromeDriver и Chrome
Как передать значение v-модели между компонентами
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
Почему я получаю ERR_CONNECTION_TIMED_OUT в Vue.js?
Вопросы
VUE.JS
Почему я получаю ERR_CONNECTION_TIMED_OUT в Vue.js?
После создания нового проекта с vue cli 3 я получаю эту ошибку:

GET http://192.168.1.13:8080/sockjs-node/info?t=1538257166715 net::ERR_CONNECTION_TIMED_OUT sockjs.js?9be2:1605

Операционная система: Windows 10

 30.09.2018 20:58
26
3
12 966
2
Данный вопрос помечен как решенный
 Ответы 2
 Ответ принят как подходящий
Создайте vue.config.js со следующим кодом:

module.exports = {
devServer: {

    host: 'localhost'
    }
};
https://cli.vuejs.org/config/#devserver

 05.12.2018 12:26
Чтобы расширить ответ Алексея ...

Если ваше интерфейсное приложение и внутренний сервер API не работают на одном и том же хосте, вам потребуется проксировать запросы API к серверу API во время разработки. Это можно настроить с помощью параметра devServer.proxy в vue.config.js. https://cli.vuejs.org/config/#devserver

module.exports = {
  devServer: {
    proxy: 'http://localhost:8080'
  }
}
 21.03.2020 18:13
Другие вопросы по теме
Отображение файлов css в inspect-elements magento
Пользовательский интерфейс Netflix - какая технология веб-фреймворка и архитектура сервера используются
Флажок Angular Material Двусторонняя привязка
Проблемы с синхронизацией Angular IO
Маршрутизация на Vue с SSR и Laravel
Не может получить доступ к $ state или $ state.current
Доступ к значениям Map <K, V> в DTO из JSON?
Должен ли я добавить очищенные данные, прежде чем я смогу извлечь данные?
Время выполнения обратного вызова отличается от ожидаемого в Chrome
В Vue.js, как заставить навигацию исчезать при прокрутке вниз и исчезать, где scroll pageYOffset = 0
Похожие вопросы
Vue: сделать дочерний компонент осведомленным об изменении свойства, измененного его родительским элементом
Пользовательское отслеживание кликов для Vuejs
Vue: <tag> </tag> против <tag />
Размещение чипа Vue на холсте HTML
Как хранить данные из API в localStorage с VueJS
Конфигурация Vue Webpack не уменьшает изображения
Как передавать миксины в качестве свойств и использовать их в дочерних компонентах с помощью Vue.js
Запрос на отправку работал, но перенаправляет на страницу с ошибкой
Как передать объекты в aws-ampify-vue SignUp?
Событие срабатывания триггера компонента по щелчку на первом компоненте при динамическом добавлении
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
Vue - компилировать другую папку вне / src в проекте Vue.js
Вопросы
VUE.JS
Vue - компилировать другую папку вне / src в проекте Vue.js
У меня есть обычный проект Vue.js (созданный с использованием v3.0.3), который использует WebSockets. Также в корне проекта находится папка /server, содержащая код Node.js, в котором содержится аспект многопользовательской игры и код сокета.

Однако, поскольку папка /server не зависит от папки /src из проекта Vue.js, как мне использовать конфигурацию веб-пакета Vue CLI и добавить компиляцию babel (с использованием Webpack) для соответствующей компиляции как /src?

Vue - компилировать другую папку вне / src в проекте Vue.js

https://cli.vuejs.org/guide/webpack.html#simple-configuration

 03.10.2018 21:06
6
6
1 662
2
Данный вопрос помечен как решенный
 Ответы 2
 Ответ принят как подходящий
Мне удалось импортировать Babel-Cli и просто компилировать / запускать вот так:

./node_modules/.bin/nodemon --exec babel-node --presets env,stage-2 server.js
и это сработало.

 13.10.2018 04:48
Собственно, вам нужно добавить файл .babelrc и объявить в нем параметры presets, env и т. д.

Не знаю, почему вы не извлекаете из-за доступа к конфигурации webpack. В конфигурации веб-пакета вы можете объявить свою папку src или исключить другие папки, такие как node_modlules или пользовательскую папку server.

Например, см. Конфигурацию веб-пакета для вашей проблемы:

module.exports = {
  ~~~
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: ['node_modules', 'server'],
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
            ~~~
И посмотрите образец файла .babelrc:

{
  "presets": [
    "es2015",
    "es2016",
    "es2017",
    "env",
    "stage-0"
  ],
  "plugins": [
    "transform-class-properties",
    "transform-object-rest-spread",
      [
        "transform-runtime",
        {
          "helpers": true,
          "polyfill": true,
          "regenerator": true
        }
      ]
    ],
    "env": {
      "development": {
        "compact": false
      }
    }
  }
Затем вы должны использовать свои команды webpack для сборки:

webpack -p --config ./webpack.production.config.js
 01.05.2020 23:16
Другие вопросы по теме
Модули TypeScript и ES - мне вообще нужен накопительный пакет / веб-пакет?
Папка входа / выхода Webpack sass-loader
'Неожиданная строка' при запуске кармы с webpack / babel
Как мне использовать сертификаты / аутентификацию с web-grpc?
Как загрузить файл _variables.scss для всех компонентов Vue с помощью sass-resource-loader в Vue CLI 3.04?
React.JS новые модули CSS
Множественные манифесты ресурсов Symfony Encore
Как скомпилировать js-файлы, которые не являются веб-страницами в gatsbyjs
Смущает опция useBuiltIns в @ babel / preset-env (с использованием интеграции со списком браузеров)
Babel 7, IE> 9, webpack 3, синтаксическая ошибка IE для ES6
Похожие вопросы
VueJS - Vue не определен
Как передать объект из экземпляра vue в данные экземпляра
Обновление объекта данных, передаваемого по компонентам Vue
Как перечислить дочерние виртуальные машины определенного типа компонента в VueJS?
Как изменить vue-loader vue-cli для обновления transformAssetsUrl
Vuex показывает неправильный результат уменьшения
Vue автоматически экранирует символы HTML
Heroku, как развернуть приложение Loopback, которое не находится в корневом каталоге репозитория git?
Vue.js test-utils, как тестировать функции в смонтированном хуке жизненного цикла
Действия vuex, которые не требуют фиксации мутации
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
Импорт / экспорт переменных javascript для проекта vuejs
Вопросы
JAVASCRIPT
Импорт / экспорт переменных javascript для проекта vuejs
Вероятно, это не лучший пример того, почему кто-то захочет экспортировать / импортировать переменные из одного javascript в другой, но, надеюсь, он достаточно хорош.

У меня есть один файл javascript, в котором я инициирую переменную, давайте вызовем этот счетчик переменных, а файл javascript находится в CounterModel.js. У меня также есть файл javascript, который на самом деле что-то делает с моим счетчиком под названием CounterController.js.

В моих файлах vue я хочу запустить свой счетчик в App.vue и изменить его в Counter.vue.

Итак, у меня есть эта настройка ниже, и она дает мне три похожих предупреждения, поэтому я, должно быть, делаю что-то не так. Поэтому я хотел бы спросить:

Что здесь не так?

выход

WARNING  Compiled with 3 warnings                                                                                                                                                    06:35:49

 warning  in ./src/App.vue?vue&type=script&lang=js&

"export 'default' (imported as 'counter') was not found in './api/CounterModel'

 warning  in ./src/components/counter/Counter.vue?vue&type=script&lang=js&

"export 'default' (imported as 'counterController') was not found in '../../api/CounterController'

 warning  in ./src/components/counter/Counter.vue?vue&type=script&lang=js&

"export 'default' (imported as 'counterController') was not found in '../../api/CounterController'
CounterModel.js

export let counter

async function initiateCounter () {
  counter = 0
}

module.exports = {
  initiateCounter
}
CounterController.js

import { counter } from './CounterModel'

async function incrementCounter () {
  counter++
}

async function getCounter () {
  return counter
}

module.exports = {
  incrementCounter,
  getCounter
}
App.vue

<template>
<div>
      <router-view></router-view>
</div>
</template>

<script>

import counter from '~/api/CounterModel'

export default {
  name: 'App',
  async created () {
    await counter.initiateCounter()
  }
}

</script>
Counter.vue

<template>

<div>
      <button v-on:click = "incrementCounter">Add 1</button>
    {{ counter }}
</div>
</template>

<script>
import counterController from '~/api/CounterController'

export default {
  name: 'Counter',
  data () {
    return {
      counter: null
    }
  },
  methods: {
    incrementCounter: async function () {
      counterController.incrementCounter()
    },
    getCounter: async function () {
      this.counter = counterController.getCounter()
    }
  },
  async created () {
    await this.getCounter()
  }
}
</script>
 22.10.2018 07:38
0
0
3 455
2
Данный вопрос помечен как решенный
 Ответы 2
 Ответ принят как подходящий
Прежде всего, не следует путать импорт / экспорт и require / module.exports. import / export - это синтаксис ES6, а require / module.export - синтаксис Commonjs.

в App.vue, если вы используете import counter from '~/api/CounterModel', это означает, что вы должны экспортировать счетчик по умолчанию в свой CounterModel.js
let counter=0; export default counter

В противном случае вы можете использовать import {counter} from '~/api/CounterModel'

Та же причина для import counterController from '~/api/CounterController'. Если вы хотите использовать импорт в вашем файле Counter.vue, используйте синтаксис экспорта ES6 в вашем CounterController.js вместо module.exports.
`` ''

import { counter } from './CounterModel'

async function incrementCounter () {
  counter++
}

async function getCounter () {
  return counter
}

export incrementCounter;
export getCounter;
`` ''

Также следует отметить, что счетчик, который вы только что импортировали, на самом деле не редактируется. Потому что ES6 считает импортированное значение постоянным. Он получит typeError, если вы попытаетесь изменить. Но его можно изменить в CounterModel.js

 22.10.2018 10:14
Я хотел бы добавить, что самая большая проблема, с которой я столкнулся, заключалась в удалении последнего предупреждения. я думал, что это связано с экспортом и импортом счетчика в файлы javascript, но на самом деле речь шла об импорте функций счетчика в файлы vue, о которых он выдавал предупреждения.

Это -> import counter from '~/api/CounterModel' требует экспорта по умолчанию.

Фактический код содержит два объекта, один «app.js» и один «counter.js», где объект приложения необходим для изменения «счетчика». Надеюсь, «приложение» никогда не нуждается в каких-либо изменениях за пределами его собственного файла.

Итак, то, что я действительно хотел, было ближе к этому:

app.js

export let app

async function initialiseApp () {
  app = window.safe.initialiseApp()
}

export default {
  initialiseApp
}
counter.js

import { app } from '~/api/safenetwork'

async function createCounter () {
  counter = await app.createCounter()
}

async function incrementCounter () {
  await counter.increment()
}

async function getCounter () {
  return counter
}

export default {
  createCounter,
  incrementCounter,
  getCounter
}
 22.10.2018 21:22
Другие вопросы по теме
Импорт функции из другого модуля
Импорт файла .png во время выполнения Unity Android
Экспорт / импорт файла png Android Unity
Невозможно импортировать файлы JavaScript в проект JavaScript UWP
Как заставить SQL Server читать из файлов?
Как мне контролировать, как SQLite3 импортирует файл CSV?
Импортируйте SVG из файла и добавьте его в пакет в Angular 2+
Ошибка при импорте класса в другой файл с помощью Python
Как мне импортировать модули, которые используются внутри файла Python 3?
Как загрузить JSON в проект Stackblitz?
Похожие вопросы
Как разрешить клики по дочернему элементу svg с видимостью: скрыто?
Эффект свечения в Phaser3?
Год не отображается в Datepicker
Ошибка при попытке подключения службы wsdl
Можете ли вы вернуть массив из xml-запроса?
Недействительный ответ JSON (платформа Codeigniter)
Как показать предупреждающее сообщение, когда данные вставляются в базу данных с помощью ajax?
Как показать всплывающую подсказку вместо суммы в санкее
Как сохранить свойства компонента в состоянии redux?
Получение изображений одинакового размера на php
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
Vue.js: определение вычисляемых переменных среды в vue.config.js (vue cli 3)
Вопросы
JAVASCRIPT
Vue.js: определение вычисляемых переменных среды в vue.config.js (vue cli 3)
В документации для Vue CLI 3 сказано здесь https://cli.vuejs.org/guide/mode-and-env.html#using-env-variables-in-client-side-code:

You can have computed env vars in your vue.config.js file. They still need to be prefixed with VUE_APP_. This is useful for version info process.env.VUE_APP_VERSION = require('./package.json').version

Это именно то, чем я хочу заниматься. Но я не мог понять, как на самом деле определить env var в vue.config.js. Я пытался:

module.exports = {
    process.env.VUE_APP_VERSION: require("../package.json").version,
    ...
}
Но это просто выдает ошибку:

ERROR  SyntaxError: Unexpected token .
    /Users/lhermann/htdocs/langify/frontend/vue.config.js:2
    process.env.VUE_APP_VERSION: require("../package.json").version,
           ^
Кто-нибудь знает?

 01.11.2018 04:49
5
0
4 457
2
Данный вопрос помечен как решенный
 Ответы 2
 Ответ принят как подходящий
Переменные среды не являются частью экспорта конфигурации, вы просто устанавливаете их в файле vue.config.js, например

process.env.VUE_APP_VERSION = require('./package.json').version

module.exports = {
  // other config, eg configureWebpack
}
Я поднял запрос функции, чтобы добавить пример в документы ~ https://github.com/vuejs/vue-cli/issues/2864

 01.11.2018 05:21
Общие переменные среды:
Согласно Документация по переменным среды и режимам, вы можете указать переменные env, поместив файлы .env в корень вашего проекта.

Переменные будут автоматически доступны в process.env.variableName вашего проекта. Загруженные переменные также доступны для всех команд, плагинов и зависимостей vue-cli-service.

.env                # loaded in all cases
.env.local          # loaded in all cases, ignored by git
.env.[mode]         # only loaded in specified mode
.env.[mode].local   # only loaded in specified mode, ignored by git
Ваши файлы .env должны выглядеть следующим образом:

VUE_APP_MY_ENV_VARIABLE=value
VUE_APP_ANOTHER_VARIABLE=value
Обратите внимание, что только переменные, которые начинаются с VUE_APP_, будут статически встроены в клиентский комплект с webpack.DefinePlugin.

Вычисляемые переменные среды:
Если вам нужны переменные, требующие предварительной обработки, вы можете использовать свойство chainWebpackvue.config.js, чтобы ввести все, что захотите:

// vue.config.js

module.exports = {
  // ...,
  chainWebpack: config => {
    config.plugin('define').tap(args => {
      args[0]['process.env'].APP_VERSION = `"${require("../package.json").version}"`
      return args
    })
  }
  // ...
}
Используя этот метод, вы можете вводить что угодно с любыми именами; вы не связаны ограничением VUE_APP_.

 13.12.2019 06:41
Другие вопросы по теме
Использование get и set для объекта свойства данных - VueJS
Динамический компонент Vue.js с динамическими данными
Ошибка - не перехвачено (в обещании) TypeError: невозможно прочитать данные свойства undefined
Bootstrap-vue tabs - открыть содержимое вкладки с привязкой в ​​URL-адресе
Axios не определен во Vue
V-model жалуется на реквизит и данные
Работа с вложенными селекторами и модулями vuejs css
Как отобразить изображение из статической папки django в vue с помощью v-html
Что происходит с неразрешенными обещаниями после уничтожения компонента Vue?
Дочерние компоненты Vuex не могут получить доступ к этому. $ Store (undefined)
Похожие вопросы
Как проанализировать веб-страницу, созданную с помощью Javascript, с помощью Python (BS4?)
Размещение нескольких изображений на веб-странице, обновляемых через API
Как вернуть первый и второй элемент в функции карты объектов?
Управление потоком выполнения в обещании
Как узнать количество слов после нажатия на слово в абзаце?
Req.body.content дает undefined - Express JS
Как я могу назначить координату переменной javascript и рисовать линии с помощью moveTo и lineTo вокруг этих переменных?
Загрузка напрямую в S3
Получите список воскресений на следующие три месяца
Как построить второй список обещаний из первого списка обещаний и выполнить итерацию
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
Относительный модуль не найден: vue-lottie
Вопросы
VUE.JS
Относительный модуль не найден: vue-lottie
После новой сборки с vue-cli (3.0.0-rc.5) путь к модулю lottie недоступен. Стоит ли играть с конфигами?

./lottie.vue в ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs. js ?? ref - 0-0! ./ node_modules / vue-loader / lib ?? vue-loader-options! ./ src / components / HelloWorld.vue? vue & type = script & lang = js &
<template>
<div id = "app">
    <lottie :options = "defaultOptions" :height = "400" :width = "400" v-on:animCreated = "handleAnimation"/>
    <div>
        <p>Speed: x{{animationSpeed}}</p>
        <input type = "range" value = "1" min = "0" max = "3" step = "0.5"
               v-on:change = "onSpeedChange" v-model = "animationSpeed">
    </div>
    <button v-on:click = "stop">stop</button>
    <button v-on:click = "pause">pause</button>
    <button v-on:click = "play">play</button>
</div>
<script>
      import Lottie from './lottie.vue';
      import * as animationData from './assets/data.json';
      export default {
        name: 'app',
        components: {
          'lottie': Lottie
        },
        data() {
          return {
            defaultOptions: {animationData: animationData},
            animationSpeed: 1
          }
        },
        methods: {
          handleAnimation: function (anim) {
            this.anim = anim;
          },
          stop: function () {
            this.anim.stop();
          },
          play: function () {
            this.anim.play();
          },
          pause: function () {
            this.anim.pause();
          },
          onSpeedChange: function () {
            this.anim.setSpeed(this.animationSpeed);
          }
        }
      }
    </script>
 02.11.2018 14:20
1
0
1 785
2
Данный вопрос помечен как решенный
 Ответы 2
 Ответ принят как подходящий
Если вы используете пакет vue-lottie, тогда импорт должен быть

import Lottie from 'vue-lottie';
Это связано с тем, что пакет lottie находится в папке node_modules, и вы должны указать правильный путь или использовать прямой импорт имени пакета. Кстати, я считаю, что текущая версия Vue cli - v3.1.1, поэтому вам обязательно стоит обновить ее.

 02.11.2018 16:41
Если по-прежнему не работает, измените animationData на animationData.default в defaultOptions.

defaultOptions: { animationData: animationData.default }
 15.03.2019 08:20
Другие вопросы по теме
Как мне обновить одну зависимость в package-lock.json без каких-либо побочных эффектов?
Как сделать поток работы автоматически каждый раз после пряжи?
Nodejs - Как получить версию зависимости
Npm install --save web3@1.0.0-beta.36 не работает на Mac
Не удалось создать проект Angular из-за устаревшего round-json
Просмотр файлов SASS с помощью NPM node-sass
Npm installaton останавливается на "Запуск 'create theme.config' ..."
Обновить / поднять версию пакета npm перед фиксацией Git
Что-то уже работает в порту
В какой файл метеора должны идти операторы импорта npm?
Похожие вопросы
Как мне обновить элементы async в b-таблице из Bootstrap-Vue, повторно используя функцию поставщика элементов?
Обновление данных из дочернего компонента - Vue.js / Axios / Laravel
Vue.js: альтернативный индекс для v-for
Избегайте использования параметра URL-адреса с помощью метода GET при нажатии на стрелку назад в браузере
Как лучше отобразить элементы внутри карточки?
Vue JS async и ожидание дает ошибку в VSCode
По модулю в цикле v-for
Список Vue.js не обновляется при изменении данных
Vue.js обновляет массив, не перезагружая все данные
Методы в том же компоненте - автоматическое обновление
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
Изменить шрифт по умолчанию в vuetify не работает (vue-cli 3) [Vuetify 1.X]
Вопросы
VUETIFY.JS
Изменить шрифт по умолчанию в vuetify не работает (vue-cli 3) [Vuetify 1.X]
Мне известен вопрос изменить-по умолчанию-шрифт-в-vuetify в SO, но он не решает мою проблему, поскольку он был опубликован до выхода vue-cli-3, поэтому идеи здесь не применяются как таковые, официальные документы от Vuetify о том, как изменить темы и другие параметры don нет действительного шага, когда проект создается с помощью vue-cli 3.

Пока мои попытки выглядят так:

vue create fooproject (с использованием конфигурации по умолчанию, но даже если я не использую конфигурацию по умолчанию, но выбираю то, что я хочу в проекте, и выбираю css-препроцессор в качестве стилуса вручную, это не сработает)

vue добавить vuetify

он создает каталог плагинов: src / plugins, где хранит vuetify.js

добавьте v-btn в компонент HelloWorld только для того, чтобы знать, подействовал ли шрифт

Затем я смогу импортировать ../stylus/main.styl, где у меня есть:

@import '~ vuetify / src / stylus / settings / _variables' $ body-font-family = 'Open Sans', без засечек; $ heading-font-family = 'Монтсеррат', без засечек; @import '~ vuetify / src / stylus / main'

Я даже пробовал с @import '~ vuetify / src / stylus / main', нужно ли мне также делать vue, добавлять дополнительные зависимости стилуса-загрузчика или что-то еще? Потому что это именно то, что НЕ рекомендуется на веб-сайте Vuetify.

Журнал ошибок: ошибок нет, я просто продолжаю использовать шрифт Roboto в кнопках материалов

Замечания?

Другие попытки: Я попытался выполнить шаги, написанные Джейкоб Э. Доусон, но, вероятно, мне не хватает чего-то очень глупого.

Редактировать: в связанной статье с носителя в то время не указывалось, что по состоянию на сентябрь 2019 года она не была привязана к определенной версии Vue.

 07.11.2018 15:34
8
2
9 767
2
Данный вопрос помечен как решенный
 Ответы 2
Обновлено:
Возможно, некоторые стили не работают при импорте стилей из main.styl:
https://github.com/vuetifyjs/vuetify/issues/3583

Все загружается, есть ли ошибки?

Кажется, это должно сработать, если, может быть, у вас где-то нет опечаток или неправильных путей?
Например, stylus должен быть styles в вашем @require '~vuetify/src/stylus/main.styl'.

do I have to do also vue add stylus-loader?

Он уже должен быть добавлен за вас.

Если вы не выбрали конкретный препроцессор CSS (например, стилус) во время установки vue-cli, вам необходимо добавить его вручную. npm i -S stylus stylus-loader

module: {
  rules: [
    {
      test: /\.styl$/,
      loader: ['style-loader', 'css-loader', 'stylus-loader']
    }
  ]
}
 08.11.2018 12:32
 Ответ принят как подходящий
Итак, я просто взглянул на это быстрым и свежим взглядом, в конце концов, это было что-то глупое, если проект создается с помощью vue-cli 3 (либо пользовательский выбор, либо по умолчанию), то, очевидно, в компоненте App.vue мне пришлось выньте семейство шрифтов из раздела стилей, поскольку оно перезаписывает CSS:

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif; /* this was it */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
 23.11.2018 16:54
Другие вопросы по теме
Как настроить переменные среды с помощью vue-cli 3?
Как я могу запустить одну команду для объединения библиотек и вывода отдельно в vue-cli3.0?
Vue CLI v3 - как узнать, какие файлы JS следует разделить на части в другом файле (файлах)
Создание изображений webp (в качестве альтернативной версии) из исходных изображений в Vue CLI 3
Относительный модуль не найден: vue-lottie
Vue.js: определение вычисляемых переменных среды в vue.config.js (vue cli 3)
Проблема с vue.js webpack: невозможно добавить плагин в vue.config.js с помощью configureWebpack
Vue cli 3 - отчеты кода Стамбула Нью-Йорка, не включая файлы vue
Vue Cli init my-app вызывает "слишком много аргументов"
Как отлаживать модульные тесты Vue CLI 3 с помощью WebStorm? Отладчик не достигает точки останова
Похожие вопросы
При установке флажка A активируются флажки A и B. Но установка флажка B должна запускать только флажок B в Vuetify
Как остановить распространение / открытие v-extension-panel при использовании v-edit-dialog?
Vuetify - проблема макета для v-data-table
Проблема Vuetify 1.3 v-autocomplete calculateMinWidth
Передача реквизита / атрибута вложенному компоненту внутри пользовательского компонента
Таблица Vuetify не прокручивается в ie11
Vue.js - восстановить входное значение, если модель отклоняет изменения
Событие выхода из Vuetify Snackbar
Vuetify.js: как отобразить текст в правом верхнем углу компонента v-img v-card?
Uncaught TypeError: невозможно прочитать свойство length of undefined в vueJs (реализация AmChart)
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
Vue-Cli не устанавливается
Вопросы
NODE.JS
Vue-Cli не устанавливается
У меня узел 11.2.0

Продолжайте получать эту ошибку.

Andrews-MacBook-Pro:vueTutorial aharris$ npm install -g @vue/cli
npm WARN deprecated hoek@5.0.4: This version is no longer maintained. Please upgrade to the latest version.
npm WARN deprecated cross-spawn-async@2.2.5: cross-spawn no longer requires a build toolchain, use it instead
npm WARN checkPermissions Missing write access to /usr/local/lib/node_modules
npm WARN @apollographql/apollo-upload-server@5.0.3 requires a peer of graphql@^0.13.1 but none is installed. You must install peer dependencies yourself.

npm ERR! path /usr/local/lib/node_modules
npm ERR! code EACCES
npm ERR! errno -13
npm ERR! syscall access
npm ERR! Error: EACCES: permission denied, access '/usr/local/lib/node_modules'
npm ERR!  { [Error: EACCES: permission denied, access '/usr/local/lib/node_modules']
npm ERR!   stack:
npm ERR!    "Error: EACCES: permission denied, access '/usr/local/lib/node_modules'",
npm ERR!   errno: -13,
npm ERR!   code: 'EACCES',
npm ERR!   syscall: 'access',
npm ERR!   path: '/usr/local/lib/node_modules' }
npm ERR! 
npm ERR! The operation was rejected by your operating system.
npm ERR! It is likely you do not have the permissions to access this file as the current user
npm ERR! 
npm ERR! If you believe this might be a permissions issue, please double-check the
npm ERR! permissions of the file and its containing directories, or try running
npm ERR! the command again as root/Administrator (though this is not recommended).

npm ERR! A complete log of this run can be found in:
npm ERR!     /Users/aharris/.npm/_logs/2018-11-25T18_43_42_502Z-debug.log
 25.11.2018 19:53
2
0
4 549
2
Данный вопрос помечен как решенный
 Ответы 2
 Ответ принят как подходящий
Вы столкнулись с проблемой прав доступа к файлам.

Параметр -g для npm означает «глобально», который установит этот файл в системный каталог, в частности, на ваш компьютер /usr/local/lib/node_modules, где владельцем, возможно, является root и с разрешением rwxr-xr-x, означает, что те, кто не является root, не будут иметь разрешения на запись.

Затем вы можете использовать sudo для получения этого разрешения или, как сказал Модули NPM не будут устанавливаться глобально без sudo, установите префикс npm в путь, в котором у вас есть разрешения:

$ npm config set prefix '~/.npm-packages'
 25.11.2018 20:02
Все, что вам нужно сделать, это запустить ту же команду с sudo перед ней,

$ sudo npm install -g @ vue / cli

и вам будет предложено ввести пароль администратора.

 05.01.2019 17:41
Другие вопросы по теме
V-validate files. каждый не является функцией
В массиве объектов, наблюдаемых с помощью Vue-watch, как получить индекс объекта, который был изменен?
Компоненты Vue.js не работают в файлах jsp
Как vue-cli может поддерживать дополнительный SCSS, например для тем?
VueJS - визуализировать компонент только один раз
HTTP-запрос 500 внутренняя ошибка сервера на Axios положить
Превышен максимальный стек вызовов с использованием маршрутизатора Vue Js
Невозможно назначить только для чтения свойство 'exports' объекта '# <Object>'
Перезагрузить компонент с помощью vue-router
Использование Vue или React в HTMLQuestion Amazon MTurk
Похожие вопросы
Узел записывает неправильную дату в Mongo
Проект Node Js с Docker выдает ошибку отсутствия такого файла или каталога /var/www/package.json
Цепной узел и java-команды в Docker CMD
Что такое полноценное обещание
Node.js ошибка кучи JS из памяти - независимо от параметра max-old-space-size
Передача данных в модальное окно в Electron
Node.js выводит не так, как ожидалось
Почему ошибки прошивки не работают постоянно?
Загрузите html-страницу после проверки учетных данных с помощью настраиваемых заголовков с помощью javascript
Невозможно вернуть значение NULL для поля, не допускающего значения NULL, GraphQl
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
Сообщите App.vue, что вызывается событие обслуживающего работника
Вопросы
VUE.JS
Сообщите App.vue, что вызывается событие обслуживающего работника
У меня есть проект, созданный с использованием Vue CLI 3 с включенным плагином Vue PWA. Я хотел бы отобразить баннер, предлагающий пользователю щелкнуть ссылку «Обновить» в приложении, как описано здесь в разделе «Подход № 3».

Но в моем приложении Vue.js, поскольку код сервисного работника выполняется в main.js, а мой баннер закусочной встроен в мой компонент App.vue, я не уверен, как запустить мой метод showRefreshUI() после того, как событие сервисного работника updated() было называется.

main.js (применимая часть)

import Vue from 'vue';
import App from './App';
import './registerServiceWorker';

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
register-service-worker (применимая часть)

import { register } from 'register-service-worker';

if (process.env.NODE_ENV === 'production') {
  register(`${process.env.BASE_URL}service-worker.js`, {
    updated (registration) {
      console.info('New content is available; please refresh.');
      // I'd like to call App.vue's showRefreshUI() method from here.
    },
  });
}
App.vue (применимая часть)

<script>
export default {
  name: 'App',
  mounted () {
    // Alternatively, I'd like to call this.showRefreshUI() from here
    // when the service worker's updated() method is called.
  },

  methods: {
    showRefreshUI () {
      // My code to show the refresh UI banner/snackbar goes here.
    },
  },
};
</script>
Если я не могу вызвать метод showRefreshUI() из main.js, как я могу передать что-то из события updated() в ловушку жизненного цикла App.vuemounted(), чтобы выполнить то же самое?

 08.12.2018 07:47
5
0
1 878
2
Данный вопрос помечен как решенный
 Ответы 2
Я не уверен, но думаю, вы могли бы использовать для этой цели настраиваемое событие. Что-то вроде этого может сработать для вас ..

1) Создайте настраиваемое событие в вашем main.js ..

main.js

import Vue from 'vue';
import App from './App';
import './registerServiceWorker';

const updateEvent = new Event('SWUpdated');

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
2) Отправьте настраиваемое событие при обновлении работника службы.

register-service-worker

import { register } from 'register-service-worker';

if (process.env.NODE_ENV === 'production') {
  register(`${process.env.BASE_URL}service-worker.js`, {
    updated (registration) {
      console.info('New content is available; please refresh.');
      document.dispatchEvent(updateEvent);
    },
  });
}
3) Присоедините прослушиватель событий к объекту документа в вашем хуке mounted, который прослушивает ваше настраиваемое событие. Удалите прослушиватель событий в ловушке beforeDestroy ..

App.vue

<script>
export default {
  name: 'App',
  mounted () {
    document.addEventListener('SWUpdated', this.showRefreshUI);
  },
  beforeDestroy () {
    document.removeEventListener('SWUpdated', this.showRefreshUI);
  },
  methods: {
    showRefreshUI () {
      // My code to show the refresh UI banner/snackbar goes here.
    },
  },
};
</script>
 08.12.2018 10:19
 Ответ принят как подходящий
Последним рабочим решением для меня было оставить main.js нетронутым, а вместо этого:

register-service-worker (применимая часть)

import { register } from 'register-service-worker';

const UpdatedEvent = new CustomEvent('swUpdated', { detail: null });

if (process.env.NODE_ENV === 'production') {
  register(`${process.env.BASE_URL}service-worker.js`, {
    updated (registration) {
      console.info('New content is available; please refresh.');
      UpdatedEvent.detail = registration;
      document.dispatchEvent(UpdatedEvent);
    },
  });
}
App.vue (применимая часть)

<script>
export default {
  name: 'App',
  data () {
    return {
      registration: null,
    };
  },
  mounted () {
    document.addEventListener('swUpdated', this.showRefreshUI);
  },
  beforeDestroy () {
    document.removeEventListener('swUpdated', this.showRefreshUI);
  },
  methods: {
    showRefreshUI (e) {
      this.registration = e.detail;
      // My code to show the refresh UI banner/snackbar goes here.
    },
  },
};
</script>
 09.12.2018 11:47
Другие вопросы по теме
Как защитить ключ API с помощью Nuxt и проверить
Подчеркивание текстового поля Vue Material Design не отображается
Как получить доступ к вложенному объекту в javascript с помощью foreach
Обновить значение на Vuetify Slider
Панель поиска в приложении Vue flickr не дает ожидаемых результатов
Запрос данных из коллекции Firebase
Модальный компонент в VueJS
Предварительная выборка данных api в Vuex с помощью Nuxt.js
Перенаправление Vuejs 303
Функция рендеринга в Vuejs
Похожие вопросы
Как защитить ключ API с помощью Nuxt и проверить
Как получить доступ к вложенному объекту в javascript с помощью foreach
Vue-chartjs не может отображать метки и наборы данных
Обновить значение на Vuetify Slider
Проблемы с опцией экземпляра Vue Apollo, не удается правильно настроить
Панель поиска в приложении Vue flickr не дает ожидаемых результатов
Глобальная регистрация компонентов во Vuejs во вложенных папках
Почему htaccess перенаправляет "в цикл"
Как заставить Vue обновлять фактическую DOM сразу, когда nextTick не работает, из файла .vue?
Невозможно переопределить стили в vuetify
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
Плагин Vue PWA, настраивающий пути значков и назначение манифеста
Вопросы
VUEJS2
Плагин Vue PWA, настраивающий пути значков и назначение манифеста
Я приложил 2 скриншота, один из моих vue.config.js, а другой - части неминифицированного вывода, создаваемого моей сборкой.

Что происходит: я хочу изменить пути значков и путь к манифесту. По какой-то причине официальный способ изменить это не работает. Прямо сейчас это пустые места, однако он не работал, когда было что-то еще (просто попробовал с 'foo / bar' в качестве пути, когда я набирал это для тройной проверки).

Я смущен, потому что, кажется, я делаю все именно так, как должен, в соответствии с официальными документами. Могу ли я заметить что-нибудь, чего не хватает мне другим взглядом? Плагин Vue PWA, настраивающий пути значков и назначение манифеста

Плагин Vue PWA, настраивающий пути значков и назначение манифеста

 18.12.2018 17:54
1
2
2 727
2
 Ответы 2
Неважно, решено обновлением моих зависимостей.

предполагаю, что это было исправлено в патче, который я не уловил

 18.12.2018 22:14
Привет Эрик Уайт

В какой-то момент у меня возникла такая же проблема, и я решил ее следующим образом:

Скопируйте изображения в папку "общественный"

пример: Добавляем папку "фавикон" в "общественный", "фавикон" содержит 5 изображений
[project]/public/favicon/favicon-32x32.png
[project]/public/favicon/favicon-16x16.png
[project]/public/favicon/apple-touch-icon-152x152.png
[project]/public/favicon/safari-pinned-tab.svg
[project]/public/favicon/msapplication-icon-144x144.png
Чтобы добавить изображения в свой html: измените "vue.config.js" и добавьте.

// Inside vue.config.js
module.exports = {
  // ... other vue-cli plugin options ...
  pwa: {
  // ...
    iconPaths: {
      favicon32: 'favicon/favicon-32x32.png',
      favicon16: 'favicon/favicon-16x16.png',
      appleTouchIcon: 'favicon/apple-touch-icon-152x152.png',
      maskIcon: 'favicon/safari-pinned-tab.svg',
      msTileImage: 'favicon/msapplication-icon-144x144.png'
    }
  // ...
  }
}
Чтобы изменить путь и имя "manifest.json", измените "vue.config.js" и добавьте:

// Inside vue.config.js
module.exports = {
  // ... other vue-cli plugin options ...
  pwa: {
  // ...
    manifestPath: 'my_new_manifest.json',
  // ...
  }
}
Чтобы изменить свойства "manifest.json" (имя, изображения, цвет и т. д.), Измените "vue.config.js" и добавьте:

// Inside vue.config.js
module.exports = {
  // ... other vue-cli plugin options ...
  pwa: {
    // ...
    manifestOptions: {
      name: 'etc ..',
      short_name: 'etc ..',
      theme_color: '# f44647',
      background_color: '# f44647',
      start_url: 'index.html',
      display: 'standalone',
      orientation: 'portrait',
      icons: [
        {
          src: './favicon/favicon-32x32.png',
          sizes: '32x32',
          type: 'image/png'
        },
        {
          src: './favicon/favicon-16x16.png',
          sizes: '16x16',
          type: 'image/png'
        },
        {
          src: './favicon/apple-touch-icon-152x152.png',
          sizes: '152x152',
          type: 'image/png'
        },
        {
          src: './favicon/safari-pinned-tab.svg',
          sizes: '942x942',
          type: 'image/svg+xml'
        },
        {
          src: './favicon/msapplication-icon-144x144.png',
          sizes: '144x144',
          type: 'image/png'
        },
      ]
    },
    // ...
  }
}
ПРИМЕЧАНИЕ
патроны не является поддерживаемым параметром.
excludeChucks не является поддерживаемым параметром.
Если вам нужно протестировать сервис-воркер локально, построить приложение и запустить простой HTTP-сервер из вашего каталога сборки. Рекомендуется использовать окно браузера в режиме инкогнито, чтобы избежать проблем с кешем вашего браузера.
Не забудьте увидеть Документация VUE, он очень подробный, я оставляю вам ссылку ниже @ vue / cli-plugin-pwa
 01.05.2020 13:11
Другие вопросы по теме
Автономный PWA, мертвое пространство после скрытия клавиатуры
Как использовать Google Cloud SQL в прогрессивном веб-приложении для автономной базы данных
Принудительно открыть мое прогрессивное веб-приложение в Chrome из WebView
Как отправить push-уведомление на мобильные устройства (Android Crome) PWA
Laravel Progressive Image с использованием вмешательства изображения
Angular 7 pwa / SwPush - push-уведомления не работают
Регистрация пользователя Laravel для разработки веб-приложения с помощью вызова API
PWA не кэшируется при обновлении в режиме полета
PWA не загружается, когда маршрутизатор находится в режиме истории (проект на основе Vue CLI 3)
Не удается получить значок заставки в Android Chrome PWA
Похожие вопросы
Использование классов с родительской страницы в автономном компоненте Vue
Маршрутизатор vue не обновляет URL-адрес новыми данными того же объекта
Синтаксические ошибки в коде vue.js для автозаполнения
Компонент vue (статический) не работает. Я хочу решение
Включите локальные файлы CSS в один компонент vue
Как ускорить загрузку видео vuejs
Vue.js Update Array не работает с этим. $ Set
Событие Vuetify data-table @input не запускается, когда выбрана отдельная строка
Обновить родительские данные из рекурсивного дочернего компонента
Как добавить и запустить старый код Three Js в компонент страницы Vue
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
Vue js удаляет тег скрипта при компиляции
Вопросы
JAVASCRIPT
Vue js удаляет тег скрипта при компиляции
Я новичок в Vue.js, и у меня возникла проблема, которую я не могу решить. Я использую Vue cli 3 и в свой код добавляю настраиваемый тег (не компонент) в свой шаблон с тег скрипта внутри.

<ra type = "outstream" pid = "888666574" ra_init = "open" ra_end = "open" skin = "dark" hasConsent = "1">
    <script type = "text/javascript" src = "https://s.test.com/script.js"></script>
</ra>
Этот скрипт выполняет поиск по настраиваемому тегу ra, поэтому он должен находиться внутри тега. Проблема в том, что когда я проверяю сайт с помощью devTools, тег ra пуст. То есть в сценарии этого нет. Я думаю, что, возможно, Vue удаляет скрипт, чтобы предотвратить XSS или что-то в этом роде, но мне нужно запустить этот скрипт.

Кто-то знает, что происходит?

Спасибо! :)

 19.12.2018 15:47
2
1
1 026
2
Данный вопрос помечен как решенный
 Ответы 2
 Ответ принят как подходящий
mounted() {
  let script = document.createElement('script');
  script.setAttribute('src', 'https://s.test.com/script.js');

  let wrapper = document.createElement('ra');
  wrapper.appendChild(script);
  wrapper.setAttribute('pid','888666574');
  wrapper.setAttribute('ra_init','open');
  wrapper.setAttribute('ra_end','open');
  wrapper.setAttribute('skin','dark');
  wrapper.setAttribute('hasConsent','1');
  document.body.appendChild(wrapper);
}  
Попробуй, надеюсь, это поможет

 19.12.2018 16:05
Просто вставьте теги сценария в тег шаблона. Итак, VueJs не удаляет эти теги скрипта.

<template>
    <script></script>
</template>
 25.04.2019 17:50
Другие вопросы по теме
Протестируйте несколько кейсов на основе propsdata в vuejs
Есть ли способ сгенерировать статические идентификаторы в Vue.Js?
Всплывающее меню в VueJS без JQuery?
Надстрочный индекс результата .toFixed ()
El-popover в v-for, открывать только одно всплывающее окно на строку
Пытаюсь загрузить mp3-файл с помощью nuxt, но получаю сообщение «Вам может потребоваться соответствующий загрузчик для обработки этого типа файла»
Как заставить Vue Router Guard ждать Vuex?
[Предупреждение Vue]: Ошибка при рендеринге: "TypeError: Невозможно получить свойство 'Id' неопределенной или нулевой ссылки
Невозможно изменить фоновое изображение: URL-адрес ссылки с помощью jquery после axios
Vuejs обновить шаблон после возврата ajax
Похожие вопросы
Откройте новое окно и закройте другое
Как разобрать объект и исключить свойство?
Показать / скрыть div условно
Неопределенные переменные реагируют учебник
JQuery выберите родительский элемент, затем другой div
Предоставить доступ к файлам на Google Диске с помощью скрипта приложений Google
Мокко до хука не запускается до сюиты
Заблокирован кросс-исходный фрейм в расширении Chrome
Протестируйте несколько кейсов на основе propsdata в vuejs
Надстройка Office для MacOS getFileAsync. Внутренняя ошибка
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
Как обслуживать Vue-CLI с помощью Laravel index.php
Вопросы
PHP
Как обслуживать Vue-CLI с помощью Laravel index.php
Я купил шаблон Vue, в котором используется vue-cli. Проблема в том, что когда я запускаю npm run dev, приложение работает на http: // локальный: 8080 /

У меня уже есть laravel, работающий на https: //develop.local/

Как запустить сервер vue-cli на https: //develop.local/ (в режиме разработки)?

Как настроить и переместить index.html (из каталога vue) в resources/views/index.blade.php laravel, чтобы он мог обрабатываться public/index.php laravel?

Большое Вам спасибо.

 28.12.2018 09:12
3
3
2 975
2
 Ответы 2
Вам нужно немного знать Laravel. В основном Laravel использует папку resources \ assets \ js, связанную с VueJs или другой библиотекой javascript. Компоненты VueJs должны находиться в папке resources \ assets \ js \ components.

Сначала вы можете скомпилировать купленную табличку vuejs и найти ее в соответствии с ресурсами \ assets \ js и Папка resources \ assets \ js \ components. После этого вы можете использовать свои компоненты на ресурсах / views / index.blade.php или на другой странице лезвия.

Остальное - это бизнес Laravel.

 28.12.2018 09:32
Laravel уже настраивает это за вас. Итак, чтобы использовать Vue в Laravel, вы должны установить зависимости laravel-mix и vuejs. Вы можете сделать это, запустив команду npm install в своем терминале.

После этого следует использовать компоненты vue. Вы можете добавить любой компонент на любые блейд-страницы. Вы должны добавить app.js на эту страницу. Не забудьте запустить команду npm run watch, чтобы собрать весь собственный код JavaScript.

 28.12.2018 09:40
Другие вопросы по теме
Маршрут не определен. (ларавел)
Laravel aimeos - проблема нарушения ограничений целостности
Корзина для покупок
Illuminate / Database / QueryException с сообщением 'SQLSTATE [42S22]: столбец не найден: 1054
Нестатический метод Illuminate \ Database \ Eloquent \ Model :: update () не должен вызываться статически
Laravel Eloquent не может вставить в базу данных
Отношения модели laravel hasOne
Как подключить Nginx Ingress к приложению Laravel
Как выполнить цикл с использованием оператора foreach в моем представлении лезвия laravel?
Объединение двух или более объектов в vuejs
Похожие вопросы
Почему мои изображения располагаются друг под другом, если я установил для всех значение col-6?
Экранирование MySQL UPDATE (ЕСЛИ ДЛИНА)
Переменная остается пустой при использовании AJAX при отправке запроса в файл php
Проблема с пространством имен в пользовательском пакете php, невозможно "использовать joelwmale / RSSFeedPHP"
Смешанный контент на поддомене - как заменить мета-ссылки http на https
Добавьте настраиваемое поле под платежной страной в Woocommerce Checkout
Ffmpeg конвертирует mov в mp4
Суммировать элементы из многомерного массива по ключу
Laravel Невозможно загрузить js с данными с данными на странице лезвия ajax
Маршрут не определен. (ларавел)
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
Vue Cli 3 - Typescript - стили Vuetify не работают с отдельным файлом шаблона с @WithRender
Вопросы
TYPESCRIPT
Vue Cli 3 - Typescript - стили Vuetify не работают с отдельным файлом шаблона с @WithRender
Мой исходный код выглядит следующим образом:

<script lang='ts'>
import { Vue, Component, Prop } from 'vue-property-decorator';
import WithRender from './ali-ums-progress.html';
import Constants from '../../constants';

@WithRender
@Component
export default class AliUMSProgress extends Vue {
}
</script>

<style lang='scss' scoped>
  @import './ali-ums-progress.scss';
</style>
Файлы HTML и scss хранятся отдельно. При использовании @WithRender содержимое html отображается, но стили vuetify по умолчанию не работают.

Может ли кто-нибудь помочь мне здесь?

 17.01.2019 06:18
0
0
1 018
2
Данный вопрос помечен как решенный
 Ответы 2
 Ответ принят как подходящий
Я нашел решение для этого ...

После установки vuetify с помощью команды «vue добавить vuetify» создается файл «SRC / плагины / vuetify.ts».

В этом файле замена строки импортировать Vuetify из vuetify / lib на импортировать Vuetify из vuetify решила мою проблему.

 18.01.2019 07:35
Файл плагина Vuetify должен содержать импорт стиля, как показано ниже (документация):

import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css' <------ here
Vue.use(Vuetify);

export default new Vuetify({
});
У меня это сработало.

 19.07.2020 15:12
Другие вопросы по теме
Как сделать так, чтобы визитка с изображением расширялась, чтобы при нажатии отображалось описание изображения?
Vuetify - переключатель видимости активатора меню списка
Vuetife перезаписывает стили в области видимости компонентов
Открытая панель навигации Vuetify, такая как мобильное приложение
Можно ли использовать динамически назначаемые вычисляемые свойства в v-for
Как изолировать глобальные стили Vuetify
Как ограничить ввод определенными значениями без проверки кодов клавиш и без мерцания значения?
Установите для vuetify v-autocomplete пустое значение
Как перестать отображать сообщение об ошибке встроенной проверки в Vuetify?
Отфильтровывает элементы типа с вычисляемым свойством и отображает их на соответствующей вкладке
Похожие вопросы
Нарисуйте пирамиду в Typescript, используя d3.js, чтобы использовать ее в power bi
Для редактирования динамически добавленных значений
Как регистрировать все внешние HTTP-запросы Axios в NestJS
Как уменьшить строку в настраиваемый объект, используя несколько разделителей, Uncaught (в обещании): TypeError: невозможно прочитать свойство undefined
Как использовать awesome-typescript-loader с babel для транспиляции определенного модуля узла?
Как правильно написать многострочный код в комментарии JSDoc в проекте javascript / typescript в VSCode?
Отображение данных из вызова API внутри другого вызова API
Как сделать ключи не доступными только для чтения при отображении типа?
Как создать правила перенаправления в React без перенаправления на тот же маршрут?
Как мне написать функцию TypeScript для объединения действий?
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
Как обновить пути к файлам в VueJs, если я использую CLI3
Вопросы
JAVASCRIPT
Как обновить пути к файлам в VueJs, если я использую CLI3
Я немного запутался и мне нужна помощь с VueJs. Я использую Vue CLI3 и создал новый проект Vue, в котором все работает, в консоли нет ошибок и т. д. Однако после запуска задачи сборки копия в моей папке dist отображается как пустая страница. Я узнал, что это связано с необходимостью обновить assetsPublicPath: и удалить косую черту «/». Мне сказали, что для этого нужно обновить конфигурационный файл index.js, но в моем проекте такого файла нет? Мне также сказали, что есть config folder, но его нет?

Поэтому, как мне обновить следующее

от assetsPublicPath: '/',

на assetsPublicPath: '',

 17.01.2019 20:47
0
0
90
2
 Ответы 2
Взгляните на файл документация. Если у вас нет vue.config.js, просто создайте его. Я бы выглядел примерно так:

// vue.config.js
module.exports = {
  // Any of the config options will come here. Everything you'll need is in the docs
  publicPath: ''
}
 17.01.2019 23:16
Создайте только vue.config.js в своем проекте и используйте его внутри. Файл автоматически загружается сервером vue cli. После публикации файла вашего хостинга или сервера он должен работать.

module.exports = {
  css: {
    extract: true
  },
  publicPath: process.env.NODE_ENV === "production" ? "" : "",
  outputDir: "dist"
};
 18.01.2019 00:00
Другие вопросы по теме
Установка данных компонента vue из внешнего файла javascript
Изменить свойство загрузчика vue img
Вызов обновлен на графике
Использование различных текстовых значений с компонентом vuetify
Логика обработки входа пользователя в приложение Node/Vuejs
Vue.js — Typescript: сокращение ожидаемого метода в литерале объекта
Показать предупреждение начальной загрузки с условием (Vue.js): как я могу получить доступ к этой переменной, чтобы изменить ее значение?
Проверка формы Vuetify, сообщение об ошибке проверки не отображается
Возвращенные данные из почтового запроса не переданы в шаблон vue
Bootstrap Modal не будет отображаться при нажатии
Похожие вопросы
Почему мой $().css({ "видимость": "видимый"}) не работает?
VBA проверяет наличие предупреждений на веб-странице в <li> </li> и запускает Sub, если обнаружено
Как эффективно добавлять/вставлять элементы в массив, если их еще нет
Как использовать console.info именно то, что мне нужно, используя метод forEach
IndexedDB с двумя транзакциями: 1 чтение, затем 1 обновление
Невозможно выбрать предложения, нажав (работает только вкладка) react-places-autocomplete. (не проблема z-индекса)
Meteor не обслуживает все файлы HTML в каталоге
Функция щелчка применяется ко всем элементам одного класса
Установка данных компонента vue из внешнего файла javascript
Почему не происходит автоматическое обновление вывода на location.hash?
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
Vue cli 3 — не удается найти модуль «@vue/cli-plugin-babel»
Вопросы
TYPESCRIPT
Vue cli 3 — не удается найти модуль «@vue/cli-plugin-babel»
Я использую vue cli 3 с поддержкой машинописного текста. На самом деле, я пытаюсь создать веб-компонент с помощью vuejs.

main.ts

import Vue from 'vue';
import './plugins/vuetify';
import App from './App.vue';
import router from './router';
import store from './store';
import wrap from '@vue/web-component-wrapper';

import RoleManagement from './views/role-management/RoleManagement.vue';

const CustomElement = wrap(Vue, RoleManagement);
window.customElements.define('custom-component', CustomElement);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
Команда для создания веб-компонента выглядит следующим образом:

vue-cli-service build --target wc --name пользовательский компонент ./src/main.ts

После получения этой ошибки

Не удается найти модуль '@vue/cli-plugin-babel'

 18.01.2019 07:03
7
5
14 446
2
 Ответы 2
столкнулся с этой проблемой с v3.1.2, но она работает, когда я понижаюсь до версии 3.1.0 (с предупреждением, что эта версия больше не поддерживается) временное решение. Это может быть возможной вашей проблемой

 04.02.2019 14:36
Кажется, что он не запускается при прямом вызове vue-cli-service. Каким-то образом это может быть обходной путь, позвонив через нпм-скрипт.

Почему бы вам не попробовать установить

scripts: {
   build: "vue-cli-service build"
}
в вашем package.json и попробуйте позже с

npm run build --target wc --name custom-component ./src/main.ts
 27.05.2020 18:39
Другие вопросы по теме
Laravel mix & response - Ошибка сборки модуля при встроенном импорте
Не удается найти модуль «babel-runtime/regenerator». Импорт локально или импорт из NPM
Как перенести один конкретный файл/папку внутри node_module с es6 на es5 с помощью babel-loader?
При обновлении с Babel до версии 7 возникли проблемы с браузером
Как использовать awesome-typescript-loader с babel для транспиляции определенного модуля узла?
РегенераторВремя выполнения не определено в chunk-vendors в современной сборке vue-cli
Путь компиляции Babel с подстановочным знаком, но с сохранением структуры папок
Script1010: неопознанный синтаксис | Невозможно преобразовать ES6 в ES5 с помощью Babel для IE11
JEST: как заглушить метод, который был вызван в конструкторе класса
ReferenceError: [BABEL] /home/sriram/Desktop/gooodbet/client/scripts/test.js: Неизвестный параметр: /node_modules/babel-preset-react-app/index.js.overrides
Похожие вопросы
Ошибка синтаксического анализа при вызове Switch Input Call Typescript и проблема с реакцией (React/Typescript)
Чтобы отправить данные из диалогового компонента в другие компоненты в angular 6
Производительность CRUD - вопрос собеседования
Как использовать импорт и экспорт с транспиляцией Typescript?
Как установить несколько значений в форме?
Angular 7 + Материал: при использовании нескольких мат-флажков внутри формы данные загружаются в поля только после взаимодействия с ними
Интерфейс машинописного текста: необязательный, но не неопределенный
JSDoc, документирование словаря с записями по умолчанию
Проблема с группировкой по датам
Почему мой SectionList иногда отображает только один раздел?
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
Как настроить Service Worker на основе переменных среды?
Вопросы
WEBPACK
Как настроить Service Worker на основе переменных среды?
Обновлено: это выглядит как дубликат этого Нерешенный вопрос. Отметить это как отвеченное или удалить?

Я использую InjectManifest из workbox-webpack-plugin внутри приложения Vue CLI 3. Пользовательский сервисный работник, в который я внедряю, обрабатывает Firebase Cloud Messaging (FCM). Мне нужно прослушивать сообщения от разных отправителей в зависимости от моей среды (локальной, промежуточной и рабочей).

В идеале service-worker.js должен выглядеть так:

importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js');

firebase.initializeApp({
    'messagingSenderId': process.env.VUE_APP_FCM_SENDER_ID
});
Однако этот код, похоже, не затрагивается веб-пакетом, так как рабочий сервис вывода по-прежнему читает process.env.VUE_APP_FCM_SENDER_ID вместо жестко заданного ключа.

Как я могу запустить своего работника службы через веб-пакет, чтобы разрешать переменные среды?

 24.01.2019 23:38
21
0
6 827
2
Данный вопрос помечен как решенный
 Ответы 2
 Ответ принят как подходящий
Возможно, для вас сейчас уже слишком поздно, но для других это то, как я пытался обойти это. Этот процесс по-прежнему использует файл .env для переменных, связанных с вашей средой.
Идея состоит в том, чтобы создать новый скрипт, который загружает файл .env, который создает новый файл, заполненный переменными из файла .env.
. После процесса сборки мы просто импортируем только что сгенерированный файл в sw.js, чтобы его можно было использовать.

Вот шаги.
Сначала создайте файл с именем swEnvbuild.js, который будет вашим скриптом, запускаемым после webpack.

//swEnvBuild.js - script that is separate from webpack
require('dotenv').config(); // make sure you have '.env' file in pwd
const fs = require('fs');

fs.writeFileSync('./dist/public/swenv.js',
`
const process = {
  env: {
    VUE_APP_FCM_SENDER_ID: conf.VUE_APP_FCM_SENDER_ID
  }
}
`);
Во-вторых, мы импортируем файл, созданный из swEnvBuild.js, с именем swenv.js в наш sw.js.

// sw.js
importScripts('swenv.js'); // this file should have all the vars declared
console.info(process.env.VUE_APP_FCM_SENDER_ID);
И, наконец, чтобы это работало с помощью одной команды, просто добавьте следующее в свои сценарии npm (при условии, что вы используете Linux/Mac).

scripts: {
  "start": "webpack && node swEnvBuild.js"
}
Надеюсь, это должно помочь. Я хотел бы, чтобы был более чистый способ сделать это, поэтому я был бы рад узнать, как и другие решения.

 15.03.2019 00:14
У меня была такая же проблема, и ключ в том, чтобы заставить процесс сборки веб-пакета выводить переменные окружения, которые он использует, чтобы их можно было импортировать в работника службы. Это избавляет вас от необходимости дублировать ваши определения env var во что-то еще, что предварительно обрабатывает вашего работника службы (что в любом случае просто беспорядочно, потому что этот файл находится в системе управления версиями).

создать новый плагин Webpack

// <project-root>/vue-config/DumpVueEnvVarsWebpackPlugin.js
const path = require('path')
const fs = require('fs')

const pluginName = 'DumpVueEnvVarsWebpackPlugin'

/**
 * We to configure the service-worker to cache calls to both the API and the
 * static content server but these are configurable URLs. We already use the env var
 * system that vue-cli offers so implementing something outside the build
 * process that parses the service-worker file would be messy. This lets us
 * dump the env vars as configured for the rest of the app and import them into
 * the service-worker script to use them.
 *
 * We need to do this as the service-worker script is NOT processed by webpack
 * so we can't put any placeholders in it directly.
 */

module.exports = class DumpVueEnvVarsWebpackPlugin {
  constructor(opts) {
    this.filename = opts.filename || 'env-vars-dump.js'
  }

  apply(compiler) {
    const fileContent = Object.keys(process.env)
      .filter(k => k.startsWith('VUE_APP_'))
      .reduce((accum, currKey) => {
        const val = process.env[currKey]
        accum += `const ${currKey} = '${val}'\n`
        return accum
      }, '')
    const outputDir = compiler.options.output.path
    if (!fs.existsSync(outputDir)) {
      // TODO ideally we'd let Webpack create it for us, but not sure how to
      // make this run later in the lifecycle
      fs.mkdirSync(outputDir)
    }
    const fullOutputPath = path.join(outputDir, this.filename)
    console.debug(
      `[DumpVueEnvVarsWebpackPlugin] dumping env vars to file=${fullOutputPath}`,
    )
    fs.writeFileSync(fullOutputPath, fileContent)
  }
}
используйте плагин в вашем конфиге vue-cli (vue.config.js или vue-config/config.default.js, если ваш конфиг разбит на несколько файлов)

// import our plugin (change the path to where you saved the plugin script)
const DumpVueEnvVarsWebpackPlugin = require('./DumpVueEnvVarsWebpackPlugin.js')

module.exports = {
  // other stuff...
  configureWebpack: {
    plugins: [
      // We add our plugin here
      new DumpVueEnvVarsWebpackPlugin({ filename: 'my-env-vars.js' })
    ],
  },
}
в нашем скрипте сервис-воркера мы теперь можем импортировать файл, который мы написали с помощью нашего плагина Webpack (он будет там после сборки, а сервис-воркеры не запускаются в режиме разработки, так что мы должны быть в безопасности)

importScripts('./my-env-vars.js') // written by DumpVueEnvVarsWebpackPlugin
const fcmSenderId = VUE_APP_FCM_SENDER_ID // comes from script imported above
console.debug(`Using sender ID = ${fcmSenderId}`)

// use the variable
firebase.initializeApp({
    'messagingSenderId': fcmSenderId
})
Это не идеально, но, безусловно, выполняет свою работу. Это D-R-Y, так как вам нужно только определить все ваши env vars в одном месте, и все приложение использует одни и те же значения. Кроме того, он не обрабатывает файлы, находящиеся в системе контроля версий. Мне не нравится, что плагин запускается слишком рано в жизненном цикле Webpack, поэтому нам нужно создать каталог dist, но, надеюсь, кто-то умнее меня найдет для этого решение.

 16.07.2019 08:22
Другие вопросы по теме
Как настроить несколько сред сборки в Azure DevOps/TFS2018?
Является ли функция-член D std.process.environment.toAA ошибочной?
Получить все переменные среды в Dlang
Как установить учетные данные AWS для пользовательских www-данных для приложения Django с помощью NGINX
Как создать файл и установить переменную среды и получить данные внутри файла в build.gradle?
Как проверить наличие переменных среды во время компиляции в Visual Studio 2017 C++?
Изменение значений env через контроллер в laravel
Не могу получить ключ среды для чтения в моей программе nodejs
Как красиво манипулировать переменными среды с помощью скриптов bash?
Как я могу изменить среду Python Anaconda глобально или навсегда
Похожие вопросы
Пряжа + путь поиска webpack
Веб-сокет сервера разработки хоста Vue в подкаталоге
Включить общие ресурсы в Angular
Как устранить ошибку «Критическая зависимость: запрос зависимости является выражением» для моего пакета npm?
Ошибка при добавлении react-native-web в существующее приложение react-native
App.UseStaticFiles() не работает. Index.cshtml загружается несколько раз
Слияние Webpack Scaffold webpackOptions не работает, почему?
Webpack терпит неудачу при попытке скомпилировать в производственном режиме
Проблема с рендерингом компонентов ReactJS CRUD в приложении Rails с помощью Webpacker
Ошибка Angular: Webpack был инициализирован с использованием объекта конфигурации, который не соответствует схеме API
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
Используйте веб-пакет для использования определенного файла в зависимости от среды узла
Вопросы
NODE.JS
Используйте веб-пакет для использования определенного файла в зависимости от среды узла
Я работаю над приложением Vue (используя cli 3). Стороннему интерфейсному компоненту требуется файл конфигурации. Я хотел бы использовать разные файлы в зависимости от окружения моего узла, но не знаю, как это сделать. Например, в моей структуре каталогов могут быть tree.production.js и tree.development.js. В моем основном javascript я не могу указать

import {tree} from `./assets/tree.${process.env.NODE_ENV}.js`;
Я также не могу использовать файлы .env для указания

import {tree} from `./assets/tree.${process.env.VUE_APP_TREE}.js`;
Я хотел бы попробовать использовать веб-пакет а-ля vue.config.js, чтобы использовать правильный файл и переименовать его в tree.js, чтобы в моем коде я мог просто указать

import {tree} from "./assets/tree.js"
Или на самом деле какие-нибудь лучшие практики, как добиться этого довольно обыденного и, казалось бы, рутинного переключения dev/prod.

Что-то типа

//vue.config.js
module.exports = {
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      // do something with tree.production.js...
    } else {
      // do something with tree.development.js
    }
  }
}
 28.01.2019 21:02
5
0
1 682
2
Данный вопрос помечен как решенный
 Ответы 2
жаль слышать, что у вас возникли проблемы с этим. Вы правы, вы не сможете использовать статическое решение для импорта для загрузки вашего файла. Однако есть варианты, в зависимости от того, что вы планируете делать с tree.js. Я не знаю, что такое дерево, но я предполагаю, что вас интересует только запуск вашего кода в среде веб-пакета.

Итак, какие варианты у вас есть, возможно, рассмотрите один из этих вариантов:

Динамический импорт
Это кажется мне наиболее вероятным, что вы хотите, если вы можете использовать асинхронный подход со своим кодом, вы можете динамически загружать свой код (также воспользоваться преимуществами разделения кода):

https://webpack.js.org/guides/code-splitting/#dynamic-imports
https://medium.com/front-end-weekly/webpack-and-dynamic-imports-doing-it-right-72549ff49234
Условная загрузка через прокси
В этом ответе Алехандро Сильва использовал прокси-файл для условной загрузки файла на основе ENV_VAR. Вы можете настроить веб-пакет, чтобы он не требовал невозможных путей.

Условная сборка на основе среды с использованием Webpack
Другие, которые могут соответствовать вашим требованиям
признать виновным — для загрузки и объединения конфигурации
 28.01.2019 21:35
 Ответ принят как подходящий
Корень вашей проблемы в том, что ES6 import (и export) анализируются статически, то есть вы не можете иметь динамические значения, как вы пытаетесь. Вы можете попробовать динамический импорт, используя синтаксис import().then(module => ...), но здесь это не совсем то, что вам нужно.

Я думаю, вы ищете разрешение.псевдоним. В конфигурации вашего веб-пакета это будет выглядеть примерно так:

  //...
  resolve: {
    alias: {
      'assets/tree': path.resolve(__dirname, `path/to/assets/tree.${process.env.NODE_ENV}.js`)
    }
  }
и внутри вашего приложения вы должны импортировать его следующим образом:

import { tree } from 'assets/tree';
 28.01.2019 21:53
Другие вопросы по теме
Селектор Google captcha DOM не работает — document.querySelector('#g-captcha-response').value
Vue.js вставляет блок для каждого 6-го элемента цикла
Источник ссылки на ютуб
Изменение объекта данных Vue
Изменение порядка слоев с помощью Vue2Leaflet
Vue router принудительно использует popstate
Стили области действия vuejs не работают с d3js
Как перебирать эти поля ввода, но каждый ввод имеет свое собственное состояние?
Как получить доступ к хранилищу в методе mount() с помощью NUXT.js?
Повторяющееся имя отслеживания Google Analytics
Похожие вопросы
UDP-прокси для NodeJS
Простой ответ AWS Lambda имеет значение null, если обратный вызов вызывается в другом контексте
Ш: 1: огурец.js: не найдено
Попытка получить данные из базы данных SQLite с помощью NodeJS
Как лямбда-функция, использующая очередь SQS, может отправить сообщение в очередь недоставленных сообщений?
Как я могу получить доступ к: ToString()
Readable.destroy() не генерирует события «закрыть» и «ошибка» Node.js
Как исправить ошибку React Native «шутка-ускорение-карта: коллизия имен модуля ускорения»?
Как предотвратить появление ошибки «чтение ECONNRESET»
Невозможно сохранить сеанс с VueJS (передняя часть) и NodeJs (задняя часть)
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


Frontend
Вопросы
Тренажер вопросов
Тесты
Задачи
Поиск по сайту
K
Вопросы по Vue
Как получить доступ к глобальным свойствам функциональных компонентов?
Как получить доступ к локальным плагинам в проекте?
Как получить доступ к родительскому экземпляру?
Как получить доступ к корневому экземпляру?
Как применить линтинг для CSS?
Какие проблемы могут возникнуть при обнаружении изменений в массивах?
Какова структура фабрики асинхронных компонентов?
Что такое асинхронные компоненты?
Рекомендуется ли использовать async для вычисляемых свойств?
Как выполнять асинхронные операции?
Какова цель опции browserslist?
Как цепочить фильтры в Vue 2?
Как изменить локализацию в Vue?
Как решить циклические зависимости между компонентами?
Как объединить локальные вычисляемые свойства с помощником mapState?
Зачем нужны комментарии во vue?
Как сделать commit с payload?
Как передать данные от дочернего компонента к родительскому с помощью событий?
Что вы имеете в виду под контекстом компонента для слотов?
Как собрать действия?
Что такое Composition API?
Можно ли использовать вычисляемое свойство в другом вычисляемом свойстве?
Что такое условные директивы?
Как добиться условной группы элементов?
Объясните структуру createElement с аргументами
Какие существуют способы создания фильтров в Vue 2?
Как создать функциональные компоненты с использованием vue-loader?
Как создать функции из слотов?
Как создать плагин?
Как создать реактивные объекты
Как создать поведение плагинов пользовательского интерфейса?
Что такое извлечение CSS?
Как использовать CSS-модули в Vue.js?
Могу ли я использовать CSS-модули для препроцессоров?
Что такое пользовательские блоки?
Что такое пользовательские директивы?
Что такое пользовательское форматирование?
Можно ли использовать пользовательское имя инъекции для CSS-модулей?
Как определить пользовательские псевдонимы модификаторов клавиш?
Какие стратегии слияния пользовательских опций?
Как настроить директиву v-model для компонента?
Каков поток данных для props?
Как реализовать локализацию даты и времени?
Как использовать глубокие селекторы?
Каково поведение пространства имен по умолчанию в Vuex?
Какова основная разница между методом и вычисляемым свойством?
В чем разница между shallowRef и markRaw в Vue 3?
В чем разница между VueJS и ReactJS?
Каковы различия между мутациями и действиями в Vuex?
Какие существуют различные сборки Vue.js?
Каковы аргументы хуков директивы?
Можно ли отправить действие с использованием payload или объекта?
Как вызвать действия (dispatch actions)?
Как диспатчить действия в компонентах?
Как отобразить состояние хранилища в компонентах vue?
Что произойдет, если использовать дублирующиеся имена полей?
Как можно написать дублирующиеся виртуальные узлы в компоненте?
Что такое динамические компоненты?
Что такое динамическое сопоставление маршрутов?
Как узнать версию VueJS, используя API?
Какова разница между полными и только runtime сборками Vue?
Что такое сокращенная запись функций в хуках директив?
Что такое функциональные компоненты?
Что такое глобальные миксины?
Что такое глобальная регистрация компонентов?
Как обрабатывать множественное число?
Какова цель API hotUpdate в хранилище Vuex?
Как проводить тестирование в Vue.js?
Как использовать плагин?
Как использовать обработчики событий
Как определить, выполняется ли код на клиенте или сервере?
Почему не стоит использовать директивы v-if и v-for на одном элементе?
Как я могу использовать импортированную константу в секции шаблона?
Как инжектировать store в дочерние компоненты?
Что такое встроенные шаблоны?
Какова цель тега <keep-alive>?
Что такое модификаторы ключевых событий?
Могу ли я использовать локальные пресеты?
Зачем нужна локальная регистрация в Vue?
В чем разница между локальной и глобальной регистрацией в модульной системе?
Что такое помощник mapGetter?
Каковы стратегии слияния в миксинах Vue?
Что такое доступ к стилю методом?
Возможно ли смешивание локальных и глобальных стилей?
Как реализовать модель для пользовательских компонентов ввода?
Что такое локальное состояние модуля?
Какие модификаторы кнопок мыши поддерживаются?
Какова причина рекомендации использовать многословные названия компонентов?
Как добавить несколько новых слотов в один компонент?
Как мутировать состояние в плагинах?
Обязательно ли использовать константы для типов мутаций?
Что такое мутации в Vuex?
Что такое навигационные охранники в Vue Router?
Нужен ли промис для Vuex?
Что такое вложенные маршруты?
Как представить односторонний поток данных в Vuex?
Утекают ли стили родителя в дочерние компоненты в scoped CSS?
Как передать несколько значений директиве во Vue?
Как выполнять мутации в компонентах?
Что такое плагины и какие у них разные службы?
Какие возможные типы пропсов в Vue?
Что такое доступ к свойствам стилей?
Что такое props?
Каковы доступные валидации для props в Vue?
Какие возможные способы предоставить переходы?
Какова цель renderError?
Какой лучший способ перерисовать компонент?
Как сделать изменения параметров маршрутизатора реактивными?
Почему нельзя обновлять состояние напрямую?
Что такое рекурсивные компоненты?
В чем разница между ref и reactive в Vue 3?
Как зарегистрировать директивы локально?
Что такое удаленные пресеты?
Как удалить реактивность в Vue 3?
Что такое функция рендеринга?
В чем преимущества функции рендеринга по сравнению с шаблонами?
Нужно ли полностью заменять локальное состояние на Vuex?
Как повторно использовать элементы с атрибутом key?
Каково приоритет соответствия маршрутов?
Могу ли я использовать сборки времени выполнения для всех шаблонов?
Что такое Scoped CSS?
Какие сходства между VueJS и ReactJS?
Какие проблемы решают однокомпонентные файлы?
Нарушает ли использование одномодульных файлов (Single File Components) принцип разделения озабоченности?
Что такое единое дерево состояния?
Какие основные компоненты паттерна управления состоянием?
Какие правила сохранения состояния при горячей перезагрузке?
Могу ли я выполнять мутации непосредственно в строгом режиме?
Как стилизовать динамически сгенерированное содержимое, используя scoped CSS?
Могу ли я использовать стилизованные компоненты в Vue.js?
Какие особенности у stylelint?
Какие модификаторы поддерживаются в v-model?
Что делает Suspense в Vue 3?
Как синхронизировать текущий маршрут в Vuex хранилище?
Что делает Teleport в Vue 3?
Каковы эквиваленты шаблона в функциях рендеринга?
Как протестировать мутации?
Как протестировать свои геттеры?
Как вызвать наблюдателей при инициализации?
Как реализовать двустороннюю привязку данных в Vue?
Как использовать директиву v-for в шаблоне?
Как использовать директиву v-model с двунаправленным вычисляемым свойством?
Как использовать vue-router и привести пример?
Какова цель директивы v-for?
Как использовать директиву v-for с диапазоном?
Какова цель директивы v-on во Vue.js?
В чем разница между директивами v-show и v-if?
Какое поведение версий у плагинов-пресетов?
Каковы преимущества VueJS перед ReactJS?
В чем разница между VueJS и Angular?
Что такое Vue CLI?
Какие возможности предоставляет Vue CLI?
Что такое плагины в vue CLI?
Основная цель компилятора Vue.js?
Как обеспечить соответствие приложения Vue стандартам CSP?
Какие функции хуков предоставляет директива?
Какие модификаторы событий предоставляет Vue?
Что такое фильтры в Vue 2?
Что такое экземпляр Vue?
Какие методы жизненного цикла VueJS (vue 2 и vue 3)
Что такое лоадер Vue.js?
Можно ли передавать параметры для фильтров в Vue 2?
Что такое vue router и какие его особенности?
Что такое VueJS?
Основные особенности VueJS?
Что такое getters в Vuex?
Поддерживает ли Vuex горячую загрузку?
Что такое модули в Vuex?
Каковы подводные камни мутаций Vuex?
Что такое неймспейсы в Vuex?
Что такое плагин Vuex?
Что такое Vuex Store?
Каковы отличия между хранилищем Vuex и обычным глобальным объектом?
Структура приложения Vuex?
Что такое watchEffect в Vue 3?
Как отслеживать изменения вложенных данных?
Как отслеживать изменения объекта маршрута?
Что такое миксины?
Что такое слоты в Vue?
Что такое вспомогательный метод mapState?
Когда компоненту нужен единственный корневой элемент?
Когда стоит повторно использовать модули?
Почему data компонента должен быть функцией?
Почему мутации должны быть синхронными?
Зачем нужен атрибут key в директиве v-for?
Что такое X Templates?
Главная
/
Вопросы
/
Вопросы по Vue
/
Что такое Composition API?
Что такое Composition API?
Composition API — это новый способ организации и написания кода в Vue.js, который появился в версии 3.0. Основная идея этого подхода заключается в том, чтобы улучшить организацию кода, сделать его более реиспользуемым и удобным для работы. В отличие от Options API, который был стандартом в предыдущих версиях Vue, Composition API предлагает более гибкий и мощный способ работы с состоянием и логикой компонентов.

Основные понятия
С помощью Composition API вы можете использовать функции для создания логики вашего компонента и организации кода. Вот несколько ключевых понятий:

setup(): Это функция, которая вызывается перед созданием компонента. Здесь вы можете определять реактивные состояния, вычисляемые свойства и методы.
reactive(): Функция, которая позволяет создать реактивный объект.
ref(): Функция, которая позволяет создать реактивное примитивное значение.
computed(): Функция для создания вычисляемых свойств.
watch(): Функция для наблюдения за изменениями значений реактивных объектов.
Пример использования
Давайте рассмотрим, как можно создать простой компонент с использованием Composition API.

Пример компонента
<template>
  <div>
    <h1>Счетчик: {{ count }}</h1>
    <button @click="increment">Увеличить</button>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    // Создаем реактивное состояние
    const count = ref(0);

    // Функция для увеличения счетчика
    const increment = () => {
      count.value++;
    };

    // Возвращаем реактивные значения и методы
    return {
      count,
      increment,
    };
  },
};
</script>

<style scoped>
h1 {
  color: blue;
}
button {
  padding: 10px;
  font-size: 16px;
}
</style>
Объяснение кода
Мы создаем шаблон, который отображает текущее значение счетчика и кнопку для его увеличения.
В функции setup определяем реактивное состояние count с помощью ref(0), что позволяет хранить текущее значение счетчика.
Функция increment увеличивает значение счетчика. Обратите внимание, что для доступа к значению ref нужно использовать .value.
В конце функции setup мы возвращаем все реактивные значения и методы, которые мы хотим использовать в шаблоне.
Заключение
Composition API обеспечивает большую гибкость и модульность кода. Новички в Vue.js могут находить его немного запутанным по сравнению с Options API, но как только вы освоитесь с этим подходом, вы оцените его преимущества в создании сложных приложений. Основное внимание уделите пониманию своих реактивных данных и тому, как вы планируете их использовать в ваших компонентах. Наблюдайте за изменениями и экспериментируйте, чтобы лучше понять возможности Composition API.

Предыдущий вопрос
Как собрать действия?
Следующий вопрос
Можно ли использовать вычисляемое свойство в другом вычисляемом свойстве?
Содержание:
Основные понятия
Пример использования
Заключение
Редактировать
Вопросы
Вопросы по HTML
Вопросы по CSS
Вопросы по JS
Вопросы по TS
Вопросы по React
Вопросы по Vue
Вопросы по Angular
Вопросы по Nuxt
Вопросы по Nest.js
Вопросы по Node.js
Вопросы по Docker
Вопросы по Git
Вопросы по Веб-разработке
Тесты
Тесты по HTML
Тесты по CSS
Тесты по JS
Тесты по TS
Тесты по React
Тесты по Vue
Тесты по Angular
Тесты по Nuxt
Тесты по Nest.js
Тесты по Node.js
Тесты по Docker
Тесты по Git
Задачи
Задачи по JS
Тренажер вопросов
Frontend
© 2026 Все права защищены
Политика конфиденциальности
Согласие на обработку персональных данных


Frontend
Вопросы
Тренажер вопросов
Тесты
Задачи
Поиск по сайту
K
Вопросы по Vue
Как получить доступ к глобальным свойствам функциональных компонентов?
Как получить доступ к локальным плагинам в проекте?
Как получить доступ к родительскому экземпляру?
Как получить доступ к корневому экземпляру?
Как применить линтинг для CSS?
Какие проблемы могут возникнуть при обнаружении изменений в массивах?
Какова структура фабрики асинхронных компонентов?
Что такое асинхронные компоненты?
Рекомендуется ли использовать async для вычисляемых свойств?
Как выполнять асинхронные операции?
Какова цель опции browserslist?
Как цепочить фильтры в Vue 2?
Как изменить локализацию в Vue?
Как решить циклические зависимости между компонентами?
Как объединить локальные вычисляемые свойства с помощником mapState?
Зачем нужны комментарии во vue?
Как сделать commit с payload?
Как передать данные от дочернего компонента к родительскому с помощью событий?
Что вы имеете в виду под контекстом компонента для слотов?
Как собрать действия?
Что такое Composition API?
Можно ли использовать вычисляемое свойство в другом вычисляемом свойстве?
Что такое условные директивы?
Как добиться условной группы элементов?
Объясните структуру createElement с аргументами
Какие существуют способы создания фильтров в Vue 2?
Как создать функциональные компоненты с использованием vue-loader?
Как создать функции из слотов?
Как создать плагин?
Как создать реактивные объекты
Как создать поведение плагинов пользовательского интерфейса?
Что такое извлечение CSS?
Как использовать CSS-модули в Vue.js?
Могу ли я использовать CSS-модули для препроцессоров?
Что такое пользовательские блоки?
Что такое пользовательские директивы?
Что такое пользовательское форматирование?
Можно ли использовать пользовательское имя инъекции для CSS-модулей?
Как определить пользовательские псевдонимы модификаторов клавиш?
Какие стратегии слияния пользовательских опций?
Как настроить директиву v-model для компонента?
Каков поток данных для props?
Как реализовать локализацию даты и времени?
Как использовать глубокие селекторы?
Каково поведение пространства имен по умолчанию в Vuex?
Какова основная разница между методом и вычисляемым свойством?
В чем разница между shallowRef и markRaw в Vue 3?
В чем разница между VueJS и ReactJS?
Каковы различия между мутациями и действиями в Vuex?
Какие существуют различные сборки Vue.js?
Каковы аргументы хуков директивы?
Можно ли отправить действие с использованием payload или объекта?
Как вызвать действия (dispatch actions)?
Как диспатчить действия в компонентах?
Как отобразить состояние хранилища в компонентах vue?
Что произойдет, если использовать дублирующиеся имена полей?
Как можно написать дублирующиеся виртуальные узлы в компоненте?
Что такое динамические компоненты?
Что такое динамическое сопоставление маршрутов?
Как узнать версию VueJS, используя API?
Какова разница между полными и только runtime сборками Vue?
Что такое сокращенная запись функций в хуках директив?
Что такое функциональные компоненты?
Что такое глобальные миксины?
Что такое глобальная регистрация компонентов?
Как обрабатывать множественное число?
Какова цель API hotUpdate в хранилище Vuex?
Как проводить тестирование в Vue.js?
Как использовать плагин?
Как использовать обработчики событий
Как определить, выполняется ли код на клиенте или сервере?
Почему не стоит использовать директивы v-if и v-for на одном элементе?
Как я могу использовать импортированную константу в секции шаблона?
Как инжектировать store в дочерние компоненты?
Что такое встроенные шаблоны?
Какова цель тега <keep-alive>?
Что такое модификаторы ключевых событий?
Могу ли я использовать локальные пресеты?
Зачем нужна локальная регистрация в Vue?
В чем разница между локальной и глобальной регистрацией в модульной системе?
Что такое помощник mapGetter?
Каковы стратегии слияния в миксинах Vue?
Что такое доступ к стилю методом?
Возможно ли смешивание локальных и глобальных стилей?
Как реализовать модель для пользовательских компонентов ввода?
Что такое локальное состояние модуля?
Какие модификаторы кнопок мыши поддерживаются?
Какова причина рекомендации использовать многословные названия компонентов?
Как добавить несколько новых слотов в один компонент?
Как мутировать состояние в плагинах?
Обязательно ли использовать константы для типов мутаций?
Что такое мутации в Vuex?
Что такое навигационные охранники в Vue Router?
Нужен ли промис для Vuex?
Что такое вложенные маршруты?
Как представить односторонний поток данных в Vuex?
Утекают ли стили родителя в дочерние компоненты в scoped CSS?
Как передать несколько значений директиве во Vue?
Как выполнять мутации в компонентах?
Что такое плагины и какие у них разные службы?
Какие возможные типы пропсов в Vue?
Что такое доступ к свойствам стилей?
Что такое props?
Каковы доступные валидации для props в Vue?
Какие возможные способы предоставить переходы?
Какова цель renderError?
Какой лучший способ перерисовать компонент?
Как сделать изменения параметров маршрутизатора реактивными?
Почему нельзя обновлять состояние напрямую?
Что такое рекурсивные компоненты?
В чем разница между ref и reactive в Vue 3?
Как зарегистрировать директивы локально?
Что такое удаленные пресеты?
Как удалить реактивность в Vue 3?
Что такое функция рендеринга?
В чем преимущества функции рендеринга по сравнению с шаблонами?
Нужно ли полностью заменять локальное состояние на Vuex?
Как повторно использовать элементы с атрибутом key?
Каково приоритет соответствия маршрутов?
Могу ли я использовать сборки времени выполнения для всех шаблонов?
Что такое Scoped CSS?
Какие сходства между VueJS и ReactJS?
Какие проблемы решают однокомпонентные файлы?
Нарушает ли использование одномодульных файлов (Single File Components) принцип разделения озабоченности?
Что такое единое дерево состояния?
Какие основные компоненты паттерна управления состоянием?
Какие правила сохранения состояния при горячей перезагрузке?
Могу ли я выполнять мутации непосредственно в строгом режиме?
Как стилизовать динамически сгенерированное содержимое, используя scoped CSS?
Могу ли я использовать стилизованные компоненты в Vue.js?
Какие особенности у stylelint?
Какие модификаторы поддерживаются в v-model?
Что делает Suspense в Vue 3?
Как синхронизировать текущий маршрут в Vuex хранилище?
Что делает Teleport в Vue 3?
Каковы эквиваленты шаблона в функциях рендеринга?
Как протестировать мутации?
Как протестировать свои геттеры?
Как вызвать наблюдателей при инициализации?
Как реализовать двустороннюю привязку данных в Vue?
Как использовать директиву v-for в шаблоне?
Как использовать директиву v-model с двунаправленным вычисляемым свойством?
Как использовать vue-router и привести пример?
Какова цель директивы v-for?
Как использовать директиву v-for с диапазоном?
Какова цель директивы v-on во Vue.js?
В чем разница между директивами v-show и v-if?
Какое поведение версий у плагинов-пресетов?
Каковы преимущества VueJS перед ReactJS?
В чем разница между VueJS и Angular?
Что такое Vue CLI?
Какие возможности предоставляет Vue CLI?
Что такое плагины в vue CLI?
Основная цель компилятора Vue.js?
Как обеспечить соответствие приложения Vue стандартам CSP?
Какие функции хуков предоставляет директива?
Какие модификаторы событий предоставляет Vue?
Что такое фильтры в Vue 2?
Что такое экземпляр Vue?
Какие методы жизненного цикла VueJS (vue 2 и vue 3)
Что такое лоадер Vue.js?
Можно ли передавать параметры для фильтров в Vue 2?
Что такое vue router и какие его особенности?
Что такое VueJS?
Основные особенности VueJS?
Что такое getters в Vuex?
Поддерживает ли Vuex горячую загрузку?
Что такое модули в Vuex?
Каковы подводные камни мутаций Vuex?
Что такое неймспейсы в Vuex?
Что такое плагин Vuex?
Что такое Vuex Store?
Каковы отличия между хранилищем Vuex и обычным глобальным объектом?
Структура приложения Vuex?
Что такое watchEffect в Vue 3?
Как отслеживать изменения вложенных данных?
Как отслеживать изменения объекта маршрута?
Что такое миксины?
Что такое слоты в Vue?
Что такое вспомогательный метод mapState?
Когда компоненту нужен единственный корневой элемент?
Когда стоит повторно использовать модули?
Почему data компонента должен быть функцией?
Почему мутации должны быть синхронными?
Зачем нужен атрибут key в директиве v-for?
Что такое X Templates?
Главная
/
Вопросы
/
Вопросы по Vue
/
Как собрать действия?
Как собрать действия?
В контексте разработки приложений на Vue.js под "сборкой действий" может пониматься объединение различных методов или функций для более сложной логики, которая может быть использована в вашем приложении. Это может касаться как Vuex для управления состоянием, так и обычных методов компонента.

Пример с использованием Vuex
Если вы используете Vuex для управления состоянием вашего приложения, вы можете создать действия (actions), которые будут выполнять асинхронные операции или обрабатывать более сложную логику. Давайте рассмотрим, как это можно реализовать.

Создайте хранилище: В этом примере мы создадим простое хранилище, в котором у нас будет действие для получения данных с API и мутация для обновления состояния.
// store.js
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        users: []
    },
    mutations: {
        SET_USERS(state, users) {
            state.users = users;
        }
    },
    actions: {
        async fetchUsers({ commit }) {
            try {
                let response = await fetch('https://jsonplaceholder.typicode.com/users');
                let data = await response.json();
                commit('SET_USERS', data);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        }
    }
});
В этом примере мы создали действие fetchUsers, которое запрашивает данные с API и затем вызывает мутацию SET_USERS, чтобы обновить состояние.

Вызывайте действие в компоненте: Теперь давайте используем это действие в компоненте Vue.

<template>
  <div>
    <h1>Список пользователей</h1>
    <ul>
      <li v-for="user in users" :key="user.id">{{ user.name }}</li>
    </ul>
  </div>
</template>

<script>
  import { mapState } from 'vuex';

  export default {
    computed: {
      ...mapState(['users'])
    },
    created() {
      this.$store.dispatch('fetchUsers');
    }
  }
</script>
В этом компоненте мы используем метод жизненного цикла created для вызова действия fetchUsers при создании компонента. Это позволит нам загрузить пользователей в момент их отображения.

Сборка действий вручную
Если вы не используете Vuex, вы также можете комбинировать функции внутри компонента. Например, вы можете создать несколько методов, которые будут выполнять определенные задачи, а затем вызывать их по очереди.


<template>
  <div>
    <button @click="performActions">Выполнить действия</button>
  </div>
</template>

<script>
  export default {
    methods: {
      actionOne() {
        console.log('Действие первое выполнено.');
      },
      actionTwo() {
        console.log('Действие второе выполнено.');
      },
      performActions() {
        this.actionOne();
        this.actionTwo();
      }
    }
  }
</script>
В данном примере метод performActions объединяет два других метода: actionOne и actionTwo. Это позволяет вам контролировать и управлять последовательностью выполнения действий внутри вашего компонента.

Заключение
Сборка действий в Vue.js — это мощный инструмент для создания функциональности вашего приложения. Этот процесс может осуществляться как через Vuex для управления глобальным состоянием, так и через локальные методы компонентов. Понимание того, как правильно структурировать и комбинировать действия, поможет вам создавать более сложные и отзывчивые приложения.

Предыдущий вопрос
Что вы имеете в виду под контекстом компонента для слотов?
Следующий вопрос
Что такое Composition API?
Содержание:
Пример с использованием Vuex
Сборка действий вручную
Заключение
Редактировать
Вопросы
Вопросы по HTML
Вопросы по CSS
Вопросы по JS
Вопросы по TS
Вопросы по React
Вопросы по Vue
Вопросы по Angular
Вопросы по Nuxt
Вопросы по Nest.js
Вопросы по Node.js
Вопросы по Docker
Вопросы по Git
Вопросы по Веб-разработке
Тесты
Тесты по HTML
Тесты по CSS
Тесты по JS
Тесты по TS
Тесты по React
Тесты по Vue
Тесты по Angular
Тесты по Nuxt
Тесты по Nest.js
Тесты по Node.js
Тесты по Docker
Тесты по Git
Задачи
Задачи по JS
Тренажер вопросов
Frontend
© 2026 Все права защищены
Политика конфиденциальности
Согласие на обработку персональных данных


Frontend
Вопросы
Тренажер вопросов
Тесты
Задачи
Поиск по сайту
K
Вопросы по Vue
Как получить доступ к глобальным свойствам функциональных компонентов?
Как получить доступ к локальным плагинам в проекте?
Как получить доступ к родительскому экземпляру?
Как получить доступ к корневому экземпляру?
Как применить линтинг для CSS?
Какие проблемы могут возникнуть при обнаружении изменений в массивах?
Какова структура фабрики асинхронных компонентов?
Что такое асинхронные компоненты?
Рекомендуется ли использовать async для вычисляемых свойств?
Как выполнять асинхронные операции?
Какова цель опции browserslist?
Как цепочить фильтры в Vue 2?
Как изменить локализацию в Vue?
Как решить циклические зависимости между компонентами?
Как объединить локальные вычисляемые свойства с помощником mapState?
Зачем нужны комментарии во vue?
Как сделать commit с payload?
Как передать данные от дочернего компонента к родительскому с помощью событий?
Что вы имеете в виду под контекстом компонента для слотов?
Как собрать действия?
Что такое Composition API?
Можно ли использовать вычисляемое свойство в другом вычисляемом свойстве?
Что такое условные директивы?
Как добиться условной группы элементов?
Объясните структуру createElement с аргументами
Какие существуют способы создания фильтров в Vue 2?
Как создать функциональные компоненты с использованием vue-loader?
Как создать функции из слотов?
Как создать плагин?
Как создать реактивные объекты
Как создать поведение плагинов пользовательского интерфейса?
Что такое извлечение CSS?
Как использовать CSS-модули в Vue.js?
Могу ли я использовать CSS-модули для препроцессоров?
Что такое пользовательские блоки?
Что такое пользовательские директивы?
Что такое пользовательское форматирование?
Можно ли использовать пользовательское имя инъекции для CSS-модулей?
Как определить пользовательские псевдонимы модификаторов клавиш?
Какие стратегии слияния пользовательских опций?
Как настроить директиву v-model для компонента?
Каков поток данных для props?
Как реализовать локализацию даты и времени?
Как использовать глубокие селекторы?
Каково поведение пространства имен по умолчанию в Vuex?
Какова основная разница между методом и вычисляемым свойством?
В чем разница между shallowRef и markRaw в Vue 3?
В чем разница между VueJS и ReactJS?
Каковы различия между мутациями и действиями в Vuex?
Какие существуют различные сборки Vue.js?
Каковы аргументы хуков директивы?
Можно ли отправить действие с использованием payload или объекта?
Как вызвать действия (dispatch actions)?
Как диспатчить действия в компонентах?
Как отобразить состояние хранилища в компонентах vue?
Что произойдет, если использовать дублирующиеся имена полей?
Как можно написать дублирующиеся виртуальные узлы в компоненте?
Что такое динамические компоненты?
Что такое динамическое сопоставление маршрутов?
Как узнать версию VueJS, используя API?
Какова разница между полными и только runtime сборками Vue?
Что такое сокращенная запись функций в хуках директив?
Что такое функциональные компоненты?
Что такое глобальные миксины?
Что такое глобальная регистрация компонентов?
Как обрабатывать множественное число?
Какова цель API hotUpdate в хранилище Vuex?
Как проводить тестирование в Vue.js?
Как использовать плагин?
Как использовать обработчики событий
Как определить, выполняется ли код на клиенте или сервере?
Почему не стоит использовать директивы v-if и v-for на одном элементе?
Как я могу использовать импортированную константу в секции шаблона?
Как инжектировать store в дочерние компоненты?
Что такое встроенные шаблоны?
Какова цель тега <keep-alive>?
Что такое модификаторы ключевых событий?
Могу ли я использовать локальные пресеты?
Зачем нужна локальная регистрация в Vue?
В чем разница между локальной и глобальной регистрацией в модульной системе?
Что такое помощник mapGetter?
Каковы стратегии слияния в миксинах Vue?
Что такое доступ к стилю методом?
Возможно ли смешивание локальных и глобальных стилей?
Как реализовать модель для пользовательских компонентов ввода?
Что такое локальное состояние модуля?
Какие модификаторы кнопок мыши поддерживаются?
Какова причина рекомендации использовать многословные названия компонентов?
Как добавить несколько новых слотов в один компонент?
Как мутировать состояние в плагинах?
Обязательно ли использовать константы для типов мутаций?
Что такое мутации в Vuex?
Что такое навигационные охранники в Vue Router?
Нужен ли промис для Vuex?
Что такое вложенные маршруты?
Как представить односторонний поток данных в Vuex?
Утекают ли стили родителя в дочерние компоненты в scoped CSS?
Как передать несколько значений директиве во Vue?
Как выполнять мутации в компонентах?
Что такое плагины и какие у них разные службы?
Какие возможные типы пропсов в Vue?
Что такое доступ к свойствам стилей?
Что такое props?
Каковы доступные валидации для props в Vue?
Какие возможные способы предоставить переходы?
Какова цель renderError?
Какой лучший способ перерисовать компонент?
Как сделать изменения параметров маршрутизатора реактивными?
Почему нельзя обновлять состояние напрямую?
Что такое рекурсивные компоненты?
В чем разница между ref и reactive в Vue 3?
Как зарегистрировать директивы локально?
Что такое удаленные пресеты?
Как удалить реактивность в Vue 3?
Что такое функция рендеринга?
В чем преимущества функции рендеринга по сравнению с шаблонами?
Нужно ли полностью заменять локальное состояние на Vuex?
Как повторно использовать элементы с атрибутом key?
Каково приоритет соответствия маршрутов?
Могу ли я использовать сборки времени выполнения для всех шаблонов?
Что такое Scoped CSS?
Какие сходства между VueJS и ReactJS?
Какие проблемы решают однокомпонентные файлы?
Нарушает ли использование одномодульных файлов (Single File Components) принцип разделения озабоченности?
Что такое единое дерево состояния?
Какие основные компоненты паттерна управления состоянием?
Какие правила сохранения состояния при горячей перезагрузке?
Могу ли я выполнять мутации непосредственно в строгом режиме?
Как стилизовать динамически сгенерированное содержимое, используя scoped CSS?
Могу ли я использовать стилизованные компоненты в Vue.js?
Какие особенности у stylelint?
Какие модификаторы поддерживаются в v-model?
Что делает Suspense в Vue 3?
Как синхронизировать текущий маршрут в Vuex хранилище?
Что делает Teleport в Vue 3?
Каковы эквиваленты шаблона в функциях рендеринга?
Как протестировать мутации?
Как протестировать свои геттеры?
Как вызвать наблюдателей при инициализации?
Как реализовать двустороннюю привязку данных в Vue?
Как использовать директиву v-for в шаблоне?
Как использовать директиву v-model с двунаправленным вычисляемым свойством?
Как использовать vue-router и привести пример?
Какова цель директивы v-for?
Как использовать директиву v-for с диапазоном?
Какова цель директивы v-on во Vue.js?
В чем разница между директивами v-show и v-if?
Какое поведение версий у плагинов-пресетов?
Каковы преимущества VueJS перед ReactJS?
В чем разница между VueJS и Angular?
Что такое Vue CLI?
Какие возможности предоставляет Vue CLI?
Что такое плагины в vue CLI?
Основная цель компилятора Vue.js?
Как обеспечить соответствие приложения Vue стандартам CSP?
Какие функции хуков предоставляет директива?
Какие модификаторы событий предоставляет Vue?
Что такое фильтры в Vue 2?
Что такое экземпляр Vue?
Какие методы жизненного цикла VueJS (vue 2 и vue 3)
Что такое лоадер Vue.js?
Можно ли передавать параметры для фильтров в Vue 2?
Что такое vue router и какие его особенности?
Что такое VueJS?
Основные особенности VueJS?
Что такое getters в Vuex?
Поддерживает ли Vuex горячую загрузку?
Что такое модули в Vuex?
Каковы подводные камни мутаций Vuex?
Что такое неймспейсы в Vuex?
Что такое плагин Vuex?
Что такое Vuex Store?
Каковы отличия между хранилищем Vuex и обычным глобальным объектом?
Структура приложения Vuex?
Что такое watchEffect в Vue 3?
Как отслеживать изменения вложенных данных?
Как отслеживать изменения объекта маршрута?
Что такое миксины?
Что такое слоты в Vue?
Что такое вспомогательный метод mapState?
Когда компоненту нужен единственный корневой элемент?
Когда стоит повторно использовать модули?
Почему data компонента должен быть функцией?
Почему мутации должны быть синхронными?
Зачем нужен атрибут key в директиве v-for?
Что такое X Templates?
Главная
/
Вопросы
/
Вопросы по Vue
/
Что вы имеете в виду под контекстом компонента для слотов?
Что вы имеете в виду под контекстом компонента для слотов?
Слоты в Vue.js — это особая функция, которая позволяет вам создавать более гибкие и переиспользуемые компоненты. Контекст слота определяет, какие данные могут быть доступны в содержимом слота при его использовании внутри родительского компонента. Давайте разберем это подробнее.

Что такое слоты?
Слот в Vue — это пространство, которое вы можете заполнить пользовательским содержимым в вашем компоненте. Это позволяет создавать компоненты, которые могут адаптироваться к разным случаям использования.

Вот простой пример:

<template>
  <div class="card">
    <h2>Заголовок карточки</h2>
    <slot></slot> <!-- Здесь будет вставлено содержимое слота -->
  </div>
</template>

<script>
export default {
  name: 'Card'
}
</script>
Теперь, когда вы хотите использовать компонент Card, вы можете вставить какой-либо контент в слот:

<template>
  <Card>
    <p>Это содержимое карточки!</p>
  </Card>
</template>

<script>
import Card from './Card.vue';

export default {
  components: {
    Card
  }
}
</script>
Что такое контекст слота?
Контекст слота — это объект, который содержит данные, доступные в слоте, когда он рендерится. Например, если ваш компонент передает некоторые данные в слот, эти данные будут доступны для использования в содержимом слота.

Рассмотрим более сложный пример с использованием named slots (именованных слотов) и передачи контекста:

<template>
  <div>
    <slot name="header" :title="title"></slot>
    <slot name="content" :info="contentInfo"></slot>
  </div>
</template>

<script>
export default {
  name: 'CustomComponent',
  data() {
    return {
      title: 'Пример заголовка',
      contentInfo: 'Некоторая информация для контента'
    }
  }
}
</script>
Теперь при использовании этого компонента вы можете получить доступ к контексту слотов следующим образом:

<template>
  <CustomComponent>
    <template v-slot:header="{ title }">
      <h1>{{ title }}</h1>
    </template>

    <template v-slot:content="{ info }">
      <p>{{ info }}</p>
    </template>
  </CustomComponent>
</template>

<script>
import CustomComponent from './CustomComponent.vue';

export default {
  components: {
    CustomComponent
  }
}
</script>
В этом примере мы определили два именованых слота: header и content. В каждом из этих слотов передаются данные из родительского компонента. Важно заметить, что синтаксис v-slot:slotName="{ variable }" позволяет извлекать данные из контекста слота.

Заключение
Контекст слота в Vue.js предоставляет возможность передавать данные из родительского компонента в слот, что делает его мощным инструментом для построения динамичных и гибких интерфейсов. Надеюсь, это объяснение поможет вам лучше понять, как работать со слотами и контекстом в Vue!

Предыдущий вопрос
Как передать данные от дочернего компонента к родительскому с помощью событий?
Следующий вопрос
Как собрать действия?
Содержание:
Что такое слоты?
Что такое контекст слота?
Заключение
Редактировать
Вопросы
Вопросы по HTML
Вопросы по CSS
Вопросы по JS
Вопросы по TS
Вопросы по React
Вопросы по Vue
Вопросы по Angular
Вопросы по Nuxt
Вопросы по Nest.js
Вопросы по Node.js
Вопросы по Docker
Вопросы по Git
Вопросы по Веб-разработке
Тесты
Тесты по HTML
Тесты по CSS
Тесты по JS
Тесты по TS
Тесты по React
Тесты по Vue
Тесты по Angular
Тесты по Nuxt
Тесты по Nest.js
Тесты по Node.js
Тесты по Docker
Тесты по Git
Задачи
Задачи по JS
Тренажер вопросов
Frontend
© 2026 Все права защищены
Политика конфиденциальности
Согласие на обработку персональных данных


Frontend
Вопросы
Тренажер вопросов
Тесты
Задачи
Поиск по сайту
K
Вопросы по Vue
Как получить доступ к глобальным свойствам функциональных компонентов?
Как получить доступ к локальным плагинам в проекте?
Как получить доступ к родительскому экземпляру?
Как получить доступ к корневому экземпляру?
Как применить линтинг для CSS?
Какие проблемы могут возникнуть при обнаружении изменений в массивах?
Какова структура фабрики асинхронных компонентов?
Что такое асинхронные компоненты?
Рекомендуется ли использовать async для вычисляемых свойств?
Как выполнять асинхронные операции?
Какова цель опции browserslist?
Как цепочить фильтры в Vue 2?
Как изменить локализацию в Vue?
Как решить циклические зависимости между компонентами?
Как объединить локальные вычисляемые свойства с помощником mapState?
Зачем нужны комментарии во vue?
Как сделать commit с payload?
Как передать данные от дочернего компонента к родительскому с помощью событий?
Что вы имеете в виду под контекстом компонента для слотов?
Как собрать действия?
Что такое Composition API?
Можно ли использовать вычисляемое свойство в другом вычисляемом свойстве?
Что такое условные директивы?
Как добиться условной группы элементов?
Объясните структуру createElement с аргументами
Какие существуют способы создания фильтров в Vue 2?
Как создать функциональные компоненты с использованием vue-loader?
Как создать функции из слотов?
Как создать плагин?
Как создать реактивные объекты
Как создать поведение плагинов пользовательского интерфейса?
Что такое извлечение CSS?
Как использовать CSS-модули в Vue.js?
Могу ли я использовать CSS-модули для препроцессоров?
Что такое пользовательские блоки?
Что такое пользовательские директивы?
Что такое пользовательское форматирование?
Можно ли использовать пользовательское имя инъекции для CSS-модулей?
Как определить пользовательские псевдонимы модификаторов клавиш?
Какие стратегии слияния пользовательских опций?
Как настроить директиву v-model для компонента?
Каков поток данных для props?
Как реализовать локализацию даты и времени?
Как использовать глубокие селекторы?
Каково поведение пространства имен по умолчанию в Vuex?
Какова основная разница между методом и вычисляемым свойством?
В чем разница между shallowRef и markRaw в Vue 3?
В чем разница между VueJS и ReactJS?
Каковы различия между мутациями и действиями в Vuex?
Какие существуют различные сборки Vue.js?
Каковы аргументы хуков директивы?
Можно ли отправить действие с использованием payload или объекта?
Как вызвать действия (dispatch actions)?
Как диспатчить действия в компонентах?
Как отобразить состояние хранилища в компонентах vue?
Что произойдет, если использовать дублирующиеся имена полей?
Как можно написать дублирующиеся виртуальные узлы в компоненте?
Что такое динамические компоненты?
Что такое динамическое сопоставление маршрутов?
Как узнать версию VueJS, используя API?
Какова разница между полными и только runtime сборками Vue?
Что такое сокращенная запись функций в хуках директив?
Что такое функциональные компоненты?
Что такое глобальные миксины?
Что такое глобальная регистрация компонентов?
Как обрабатывать множественное число?
Какова цель API hotUpdate в хранилище Vuex?
Как проводить тестирование в Vue.js?
Как использовать плагин?
Как использовать обработчики событий
Как определить, выполняется ли код на клиенте или сервере?
Почему не стоит использовать директивы v-if и v-for на одном элементе?
Как я могу использовать импортированную константу в секции шаблона?
Как инжектировать store в дочерние компоненты?
Что такое встроенные шаблоны?
Какова цель тега <keep-alive>?
Что такое модификаторы ключевых событий?
Могу ли я использовать локальные пресеты?
Зачем нужна локальная регистрация в Vue?
В чем разница между локальной и глобальной регистрацией в модульной системе?
Что такое помощник mapGetter?
Каковы стратегии слияния в миксинах Vue?
Что такое доступ к стилю методом?
Возможно ли смешивание локальных и глобальных стилей?
Как реализовать модель для пользовательских компонентов ввода?
Что такое локальное состояние модуля?
Какие модификаторы кнопок мыши поддерживаются?
Какова причина рекомендации использовать многословные названия компонентов?
Как добавить несколько новых слотов в один компонент?
Как мутировать состояние в плагинах?
Обязательно ли использовать константы для типов мутаций?
Что такое мутации в Vuex?
Что такое навигационные охранники в Vue Router?
Нужен ли промис для Vuex?
Что такое вложенные маршруты?
Как представить односторонний поток данных в Vuex?
Утекают ли стили родителя в дочерние компоненты в scoped CSS?
Как передать несколько значений директиве во Vue?
Как выполнять мутации в компонентах?
Что такое плагины и какие у них разные службы?
Какие возможные типы пропсов в Vue?
Что такое доступ к свойствам стилей?
Что такое props?
Каковы доступные валидации для props в Vue?
Какие возможные способы предоставить переходы?
Какова цель renderError?
Какой лучший способ перерисовать компонент?
Как сделать изменения параметров маршрутизатора реактивными?
Почему нельзя обновлять состояние напрямую?
Что такое рекурсивные компоненты?
В чем разница между ref и reactive в Vue 3?
Как зарегистрировать директивы локально?
Что такое удаленные пресеты?
Как удалить реактивность в Vue 3?
Что такое функция рендеринга?
В чем преимущества функции рендеринга по сравнению с шаблонами?
Нужно ли полностью заменять локальное состояние на Vuex?
Как повторно использовать элементы с атрибутом key?
Каково приоритет соответствия маршрутов?
Могу ли я использовать сборки времени выполнения для всех шаблонов?
Что такое Scoped CSS?
Какие сходства между VueJS и ReactJS?
Какие проблемы решают однокомпонентные файлы?
Нарушает ли использование одномодульных файлов (Single File Components) принцип разделения озабоченности?
Что такое единое дерево состояния?
Какие основные компоненты паттерна управления состоянием?
Какие правила сохранения состояния при горячей перезагрузке?
Могу ли я выполнять мутации непосредственно в строгом режиме?
Как стилизовать динамически сгенерированное содержимое, используя scoped CSS?
Могу ли я использовать стилизованные компоненты в Vue.js?
Какие особенности у stylelint?
Какие модификаторы поддерживаются в v-model?
Что делает Suspense в Vue 3?
Как синхронизировать текущий маршрут в Vuex хранилище?
Что делает Teleport в Vue 3?
Каковы эквиваленты шаблона в функциях рендеринга?
Как протестировать мутации?
Как протестировать свои геттеры?
Как вызвать наблюдателей при инициализации?
Как реализовать двустороннюю привязку данных в Vue?
Как использовать директиву v-for в шаблоне?
Как использовать директиву v-model с двунаправленным вычисляемым свойством?
Как использовать vue-router и привести пример?
Какова цель директивы v-for?
Как использовать директиву v-for с диапазоном?
Какова цель директивы v-on во Vue.js?
В чем разница между директивами v-show и v-if?
Какое поведение версий у плагинов-пресетов?
Каковы преимущества VueJS перед ReactJS?
В чем разница между VueJS и Angular?
Что такое Vue CLI?
Какие возможности предоставляет Vue CLI?
Что такое плагины в vue CLI?
Основная цель компилятора Vue.js?
Как обеспечить соответствие приложения Vue стандартам CSP?
Какие функции хуков предоставляет директива?
Какие модификаторы событий предоставляет Vue?
Что такое фильтры в Vue 2?
Что такое экземпляр Vue?
Какие методы жизненного цикла VueJS (vue 2 и vue 3)
Что такое лоадер Vue.js?
Можно ли передавать параметры для фильтров в Vue 2?
Что такое vue router и какие его особенности?
Что такое VueJS?
Основные особенности VueJS?
Что такое getters в Vuex?
Поддерживает ли Vuex горячую загрузку?
Что такое модули в Vuex?
Каковы подводные камни мутаций Vuex?
Что такое неймспейсы в Vuex?
Что такое плагин Vuex?
Что такое Vuex Store?
Каковы отличия между хранилищем Vuex и обычным глобальным объектом?
Структура приложения Vuex?
Что такое watchEffect в Vue 3?
Как отслеживать изменения вложенных данных?
Как отслеживать изменения объекта маршрута?
Что такое миксины?
Что такое слоты в Vue?
Что такое вспомогательный метод mapState?
Когда компоненту нужен единственный корневой элемент?
Когда стоит повторно использовать модули?
Почему data компонента должен быть функцией?
Почему мутации должны быть синхронными?
Зачем нужен атрибут key в директиве v-for?
Что такое X Templates?
Главная
/
Вопросы
/
Вопросы по Vue
/
Как передать данные от дочернего компонента к родительскому с помощью событий?
Как передать данные от дочернего компонента к родительскому с помощью событий?
В Vue.js распространенной практикой является передача данных от дочернего компонента к родительскому при помощи событий. Это важно для эффективной работы вашего приложения, так как компоненты во Vue являются независимыми и должны взаимодействовать между собой минимально.

Как это работает?
Когда дочерний компонент хочет сообщить родительскому о каком-либо событии (например, о нажатии кнопки или изменении данных), он может создать и дискредитировать событие. Родительский компонент подписывается на это событие и обрабатывает его, получая необходимые данные.

Пример
Давайте посмотрим на простой пример.

Шаг 1: Создадим дочерний компонент
Создайте файл ChildComponent.vue:


<template>
  <div>
    <button @click="sendMessage">Отправить сообщение родителю</button>
  </div>
</template>

<script>
  export default {
    methods: {
      sendMessage() {
        // Создаем событие с названием 'message'
        this.$emit('message', 'Привет, я из дочернего компонента!');
      }
    }
  }
</script>
В этом примере мы создаем метод sendMessage, который вызывает $emit() для отправки события с именем message. Вторым аргументом можно передать данные, которые вы хотите отправить (в данном случае это строка).

Шаг 2: Создадим родительский компонент
Теперь создадим родительский компонент, который будет подписываться на это событие. В файле ParentComponent.vue:


<template>
  <div>
    <h1>Родительский компонент</h1>
    <ChildComponent @message="receiveMessage"/>
    <p>Сообщение от дочернего компонента: {{ receivedMessage }}</p>
  </div>
</template>

<script>
  import ChildComponent from './ChildComponent.vue';

  export default {
    components: {
      ChildComponent
    },
    data() {
      return {
        receivedMessage: ''
      };
    },
    methods: {
      receiveMessage(message) {
        // Обрабатываем полученное сообщение
        this.receivedMessage = message;
      }
    }
  }
</script>
Здесь мы импортируем дочерний компонент и используем его в шаблоне. Так же, в родительском компоненте, мы подписываемся на событие message и связываем его с методом receiveMessage, где обрабатываем полученное сообщение.

Результат
Теперь, когда пользователь нажимает кнопку в дочернем компоненте, родительский компонент получает сообщение и отображает его на экране. Это простая, но мощная схема взаимодействия между компонентами во Vue.js.

Заключение
Использование событий для связи между дочерними и родительскими компонентами позволяет вам создавать модульные и гибкие приложения. Этот метод делает ваше приложение более управляемым и понятным. Учитесь и экспериментируйте с отправкой различных данных между компонентами, чтобы закрепить ваши навыки!

Предыдущий вопрос
Как сделать commit с payload?
Следующий вопрос
Что вы имеете в виду под контекстом компонента для слотов?
Содержание:
Как это работает?
Пример
Результат
Заключение
Редактировать
Вопросы
Вопросы по HTML
Вопросы по CSS
Вопросы по JS
Вопросы по TS
Вопросы по React
Вопросы по Vue
Вопросы по Angular
Вопросы по Nuxt
Вопросы по Nest.js
Вопросы по Node.js
Вопросы по Docker
Вопросы по Git
Вопросы по Веб-разработке
Тесты
Тесты по HTML
Тесты по CSS
Тесты по JS
Тесты по TS
Тесты по React
Тесты по Vue
Тесты по Angular
Тесты по Nuxt
Тесты по Nest.js
Тесты по Node.js
Тесты по Docker
Тесты по Git
Задачи
Задачи по JS
Тренажер вопросов
Frontend
© 2026 Все права защищены
Политика конфиденциальности
Согласие на обработку персональных данных


Frontend
Вопросы
Тренажер вопросов
Тесты
Задачи
Поиск по сайту
K
Вопросы по Vue
Как получить доступ к глобальным свойствам функциональных компонентов?
Как получить доступ к локальным плагинам в проекте?
Как получить доступ к родительскому экземпляру?
Как получить доступ к корневому экземпляру?
Как применить линтинг для CSS?
Какие проблемы могут возникнуть при обнаружении изменений в массивах?
Какова структура фабрики асинхронных компонентов?
Что такое асинхронные компоненты?
Рекомендуется ли использовать async для вычисляемых свойств?
Как выполнять асинхронные операции?
Какова цель опции browserslist?
Как цепочить фильтры в Vue 2?
Как изменить локализацию в Vue?
Как решить циклические зависимости между компонентами?
Как объединить локальные вычисляемые свойства с помощником mapState?
Зачем нужны комментарии во vue?
Как сделать commit с payload?
Как передать данные от дочернего компонента к родительскому с помощью событий?
Что вы имеете в виду под контекстом компонента для слотов?
Как собрать действия?
Что такое Composition API?
Можно ли использовать вычисляемое свойство в другом вычисляемом свойстве?
Что такое условные директивы?
Как добиться условной группы элементов?
Объясните структуру createElement с аргументами
Какие существуют способы создания фильтров в Vue 2?
Как создать функциональные компоненты с использованием vue-loader?
Как создать функции из слотов?
Как создать плагин?
Как создать реактивные объекты
Как создать поведение плагинов пользовательского интерфейса?
Что такое извлечение CSS?
Как использовать CSS-модули в Vue.js?
Могу ли я использовать CSS-модули для препроцессоров?
Что такое пользовательские блоки?
Что такое пользовательские директивы?
Что такое пользовательское форматирование?
Можно ли использовать пользовательское имя инъекции для CSS-модулей?
Как определить пользовательские псевдонимы модификаторов клавиш?
Какие стратегии слияния пользовательских опций?
Как настроить директиву v-model для компонента?
Каков поток данных для props?
Как реализовать локализацию даты и времени?
Как использовать глубокие селекторы?
Каково поведение пространства имен по умолчанию в Vuex?
Какова основная разница между методом и вычисляемым свойством?
В чем разница между shallowRef и markRaw в Vue 3?
В чем разница между VueJS и ReactJS?
Каковы различия между мутациями и действиями в Vuex?
Какие существуют различные сборки Vue.js?
Каковы аргументы хуков директивы?
Можно ли отправить действие с использованием payload или объекта?
Как вызвать действия (dispatch actions)?
Как диспатчить действия в компонентах?
Как отобразить состояние хранилища в компонентах vue?
Что произойдет, если использовать дублирующиеся имена полей?
Как можно написать дублирующиеся виртуальные узлы в компоненте?
Что такое динамические компоненты?
Что такое динамическое сопоставление маршрутов?
Как узнать версию VueJS, используя API?
Какова разница между полными и только runtime сборками Vue?
Что такое сокращенная запись функций в хуках директив?
Что такое функциональные компоненты?
Что такое глобальные миксины?
Что такое глобальная регистрация компонентов?
Как обрабатывать множественное число?
Какова цель API hotUpdate в хранилище Vuex?
Как проводить тестирование в Vue.js?
Как использовать плагин?
Как использовать обработчики событий
Как определить, выполняется ли код на клиенте или сервере?
Почему не стоит использовать директивы v-if и v-for на одном элементе?
Как я могу использовать импортированную константу в секции шаблона?
Как инжектировать store в дочерние компоненты?
Что такое встроенные шаблоны?
Какова цель тега <keep-alive>?
Что такое модификаторы ключевых событий?
Могу ли я использовать локальные пресеты?
Зачем нужна локальная регистрация в Vue?
В чем разница между локальной и глобальной регистрацией в модульной системе?
Что такое помощник mapGetter?
Каковы стратегии слияния в миксинах Vue?
Что такое доступ к стилю методом?
Возможно ли смешивание локальных и глобальных стилей?
Как реализовать модель для пользовательских компонентов ввода?
Что такое локальное состояние модуля?
Какие модификаторы кнопок мыши поддерживаются?
Какова причина рекомендации использовать многословные названия компонентов?
Как добавить несколько новых слотов в один компонент?
Как мутировать состояние в плагинах?
Обязательно ли использовать константы для типов мутаций?
Что такое мутации в Vuex?
Что такое навигационные охранники в Vue Router?
Нужен ли промис для Vuex?
Что такое вложенные маршруты?
Как представить односторонний поток данных в Vuex?
Утекают ли стили родителя в дочерние компоненты в scoped CSS?
Как передать несколько значений директиве во Vue?
Как выполнять мутации в компонентах?
Что такое плагины и какие у них разные службы?
Какие возможные типы пропсов в Vue?
Что такое доступ к свойствам стилей?
Что такое props?
Каковы доступные валидации для props в Vue?
Какие возможные способы предоставить переходы?
Какова цель renderError?
Какой лучший способ перерисовать компонент?
Как сделать изменения параметров маршрутизатора реактивными?
Почему нельзя обновлять состояние напрямую?
Что такое рекурсивные компоненты?
В чем разница между ref и reactive в Vue 3?
Как зарегистрировать директивы локально?
Что такое удаленные пресеты?
Как удалить реактивность в Vue 3?
Что такое функция рендеринга?
В чем преимущества функции рендеринга по сравнению с шаблонами?
Нужно ли полностью заменять локальное состояние на Vuex?
Как повторно использовать элементы с атрибутом key?
Каково приоритет соответствия маршрутов?
Могу ли я использовать сборки времени выполнения для всех шаблонов?
Что такое Scoped CSS?
Какие сходства между VueJS и ReactJS?
Какие проблемы решают однокомпонентные файлы?
Нарушает ли использование одномодульных файлов (Single File Components) принцип разделения озабоченности?
Что такое единое дерево состояния?
Какие основные компоненты паттерна управления состоянием?
Какие правила сохранения состояния при горячей перезагрузке?
Могу ли я выполнять мутации непосредственно в строгом режиме?
Как стилизовать динамически сгенерированное содержимое, используя scoped CSS?
Могу ли я использовать стилизованные компоненты в Vue.js?
Какие особенности у stylelint?
Какие модификаторы поддерживаются в v-model?
Что делает Suspense в Vue 3?
Как синхронизировать текущий маршрут в Vuex хранилище?
Что делает Teleport в Vue 3?
Каковы эквиваленты шаблона в функциях рендеринга?
Как протестировать мутации?
Как протестировать свои геттеры?
Как вызвать наблюдателей при инициализации?
Как реализовать двустороннюю привязку данных в Vue?
Как использовать директиву v-for в шаблоне?
Как использовать директиву v-model с двунаправленным вычисляемым свойством?
Как использовать vue-router и привести пример?
Какова цель директивы v-for?
Как использовать директиву v-for с диапазоном?
Какова цель директивы v-on во Vue.js?
В чем разница между директивами v-show и v-if?
Какое поведение версий у плагинов-пресетов?
Каковы преимущества VueJS перед ReactJS?
В чем разница между VueJS и Angular?
Что такое Vue CLI?
Какие возможности предоставляет Vue CLI?
Что такое плагины в vue CLI?
Основная цель компилятора Vue.js?
Как обеспечить соответствие приложения Vue стандартам CSP?
Какие функции хуков предоставляет директива?
Какие модификаторы событий предоставляет Vue?
Что такое фильтры в Vue 2?
Что такое экземпляр Vue?
Какие методы жизненного цикла VueJS (vue 2 и vue 3)
Что такое лоадер Vue.js?
Можно ли передавать параметры для фильтров в Vue 2?
Что такое vue router и какие его особенности?
Что такое VueJS?
Основные особенности VueJS?
Что такое getters в Vuex?
Поддерживает ли Vuex горячую загрузку?
Что такое модули в Vuex?
Каковы подводные камни мутаций Vuex?
Что такое неймспейсы в Vuex?
Что такое плагин Vuex?
Что такое Vuex Store?
Каковы отличия между хранилищем Vuex и обычным глобальным объектом?
Структура приложения Vuex?
Что такое watchEffect в Vue 3?
Как отслеживать изменения вложенных данных?
Как отслеживать изменения объекта маршрута?
Что такое миксины?
Что такое слоты в Vue?
Что такое вспомогательный метод mapState?
Когда компоненту нужен единственный корневой элемент?
Когда стоит повторно использовать модули?
Почему data компонента должен быть функцией?
Почему мутации должны быть синхронными?
Зачем нужен атрибут key в директиве v-for?
Что такое X Templates?
Главная
/
Вопросы
/
Вопросы по Vue
/
Как сделать commit с payload?
Как сделать commit с payload?
В Vue.js, когда вы используете Vuex для управления состоянием приложения, часто возникает необходимость отправлять данные в store. Это делается с помощью методов commit или dispatch. В этом ответе мы сосредоточимся на методе commit, который используется для изменения состояния.

Что такое commit?
Метод commit вызывается для выполнения мутации (mutation) в Vuex. Мутация — это единственный способ изменения состояния в Vuex, и обязательным параметром для commit является тип мутации, а также дополнительные данные (payload), которые передаются в мутацию.

Пример использования commit с payload
Давайте рассмотрим простой пример, чтобы продемонстрировать, как передать payload вместе с commit.

Создание Vuex Store
Сначала создайте папку store и файл index.js для вашего Vuex store:

// store/index.js
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment(state, payload) {
      state.count += payload.amount; // Здесь мы добавляем amount к count
    }
  },
  actions: {
    incrementAction({ commit }, amount) {
      commit('increment', { amount }); // Коммитим и передаем payload
    }
  }
});
Здесь мы создаем состояние count и мутацию increment, которая увеличивает значение count на значение, переданное в payload.

Использование Vuex Store в компоненте
Теперь вы можете использовать этот store в вашем Vue-компоненте:

<template>
  <div>
    <p>Счетчик: {{ count }}</p>
    <button @click="increment">Увеличить на 1</button>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState(['count']) // Подключаем состояние count из Vuex
  },
  methods: {
    ...mapActions(['incrementAction']), // Подключаем action incrementAction
    increment() {
      this.incrementAction(1); // Вызываем action с payload
    }
  }
};
</script>
В этом компоненте мы отображаем текущее значение счетчика и предоставляем кнопку для увеличения счетчика. Когда пользователь нажимает кнопку, вызывается метод increment, который, в свою очередь, вызывает action incrementAction с 1 в качестве payload.

Заключение
Используя метод commit с payload в Vuex, вы можете легко управлять состоянием вашего приложения. Это позволяет вызывать мутации с динамическими данными, что делает ваше приложение более гибким и расширяемым. Не забудьте изучить дополнительные возможности Vuex, такие как actions, которые позволяют асинхронно выполнять логику перед вызовом мутаций.

Предыдущий вопрос
Зачем нужны комментарии во vue?
Следующий вопрос
Как передать данные от дочернего компонента к родительскому с помощью событий?
Содержание:
Что такое commit?
Пример использования commit с payload
Заключение
Редактировать
Вопросы
Вопросы по HTML
Вопросы по CSS
Вопросы по JS
Вопросы по TS
Вопросы по React
Вопросы по Vue
Вопросы по Angular
Вопросы по Nuxt
Вопросы по Nest.js
Вопросы по Node.js
Вопросы по Docker
Вопросы по Git
Вопросы по Веб-разработке
Тесты
Тесты по HTML
Тесты по CSS
Тесты по JS
Тесты по TS
Тесты по React
Тесты по Vue
Тесты по Angular
Тесты по Nuxt
Тесты по Nest.js
Тесты по Node.js
Тесты по Docker
Тесты по Git
Задачи
Задачи по JS
Тренажер вопросов
Frontend
© 2026 Все права защищены
Политика конфиденциальности
Согласие на обработку персональных данных


Frontend
Вопросы
Тренажер вопросов
Тесты
Задачи
Поиск по сайту
K
Вопросы по Vue
Как получить доступ к глобальным свойствам функциональных компонентов?
Как получить доступ к локальным плагинам в проекте?
Как получить доступ к родительскому экземпляру?
Как получить доступ к корневому экземпляру?
Как применить линтинг для CSS?
Какие проблемы могут возникнуть при обнаружении изменений в массивах?
Какова структура фабрики асинхронных компонентов?
Что такое асинхронные компоненты?
Рекомендуется ли использовать async для вычисляемых свойств?
Как выполнять асинхронные операции?
Какова цель опции browserslist?
Как цепочить фильтры в Vue 2?
Как изменить локализацию в Vue?
Как решить циклические зависимости между компонентами?
Как объединить локальные вычисляемые свойства с помощником mapState?
Зачем нужны комментарии во vue?
Как сделать commit с payload?
Как передать данные от дочернего компонента к родительскому с помощью событий?
Что вы имеете в виду под контекстом компонента для слотов?
Как собрать действия?
Что такое Composition API?
Можно ли использовать вычисляемое свойство в другом вычисляемом свойстве?
Что такое условные директивы?
Как добиться условной группы элементов?
Объясните структуру createElement с аргументами
Какие существуют способы создания фильтров в Vue 2?
Как создать функциональные компоненты с использованием vue-loader?
Как создать функции из слотов?
Как создать плагин?
Как создать реактивные объекты
Как создать поведение плагинов пользовательского интерфейса?
Что такое извлечение CSS?
Как использовать CSS-модули в Vue.js?
Могу ли я использовать CSS-модули для препроцессоров?
Что такое пользовательские блоки?
Что такое пользовательские директивы?
Что такое пользовательское форматирование?
Можно ли использовать пользовательское имя инъекции для CSS-модулей?
Как определить пользовательские псевдонимы модификаторов клавиш?
Какие стратегии слияния пользовательских опций?
Как настроить директиву v-model для компонента?
Каков поток данных для props?
Как реализовать локализацию даты и времени?
Как использовать глубокие селекторы?
Каково поведение пространства имен по умолчанию в Vuex?
Какова основная разница между методом и вычисляемым свойством?
В чем разница между shallowRef и markRaw в Vue 3?
В чем разница между VueJS и ReactJS?
Каковы различия между мутациями и действиями в Vuex?
Какие существуют различные сборки Vue.js?
Каковы аргументы хуков директивы?
Можно ли отправить действие с использованием payload или объекта?
Как вызвать действия (dispatch actions)?
Как диспатчить действия в компонентах?
Как отобразить состояние хранилища в компонентах vue?
Что произойдет, если использовать дублирующиеся имена полей?
Как можно написать дублирующиеся виртуальные узлы в компоненте?
Что такое динамические компоненты?
Что такое динамическое сопоставление маршрутов?
Как узнать версию VueJS, используя API?
Какова разница между полными и только runtime сборками Vue?
Что такое сокращенная запись функций в хуках директив?
Что такое функциональные компоненты?
Что такое глобальные миксины?
Что такое глобальная регистрация компонентов?
Как обрабатывать множественное число?
Какова цель API hotUpdate в хранилище Vuex?
Как проводить тестирование в Vue.js?
Как использовать плагин?
Как использовать обработчики событий
Как определить, выполняется ли код на клиенте или сервере?
Почему не стоит использовать директивы v-if и v-for на одном элементе?
Как я могу использовать импортированную константу в секции шаблона?
Как инжектировать store в дочерние компоненты?
Что такое встроенные шаблоны?
Какова цель тега <keep-alive>?
Что такое модификаторы ключевых событий?
Могу ли я использовать локальные пресеты?
Зачем нужна локальная регистрация в Vue?
В чем разница между локальной и глобальной регистрацией в модульной системе?
Что такое помощник mapGetter?
Каковы стратегии слияния в миксинах Vue?
Что такое доступ к стилю методом?
Возможно ли смешивание локальных и глобальных стилей?
Как реализовать модель для пользовательских компонентов ввода?
Что такое локальное состояние модуля?
Какие модификаторы кнопок мыши поддерживаются?
Какова причина рекомендации использовать многословные названия компонентов?
Как добавить несколько новых слотов в один компонент?
Как мутировать состояние в плагинах?
Обязательно ли использовать константы для типов мутаций?
Что такое мутации в Vuex?
Что такое навигационные охранники в Vue Router?
Нужен ли промис для Vuex?
Что такое вложенные маршруты?
Как представить односторонний поток данных в Vuex?
Утекают ли стили родителя в дочерние компоненты в scoped CSS?
Как передать несколько значений директиве во Vue?
Как выполнять мутации в компонентах?
Что такое плагины и какие у них разные службы?
Какие возможные типы пропсов в Vue?
Что такое доступ к свойствам стилей?
Что такое props?
Каковы доступные валидации для props в Vue?
Какие возможные способы предоставить переходы?
Какова цель renderError?
Какой лучший способ перерисовать компонент?
Как сделать изменения параметров маршрутизатора реактивными?
Почему нельзя обновлять состояние напрямую?
Что такое рекурсивные компоненты?
В чем разница между ref и reactive в Vue 3?
Как зарегистрировать директивы локально?
Что такое удаленные пресеты?
Как удалить реактивность в Vue 3?
Что такое функция рендеринга?
В чем преимущества функции рендеринга по сравнению с шаблонами?
Нужно ли полностью заменять локальное состояние на Vuex?
Как повторно использовать элементы с атрибутом key?
Каково приоритет соответствия маршрутов?
Могу ли я использовать сборки времени выполнения для всех шаблонов?
Что такое Scoped CSS?
Какие сходства между VueJS и ReactJS?
Какие проблемы решают однокомпонентные файлы?
Нарушает ли использование одномодульных файлов (Single File Components) принцип разделения озабоченности?
Что такое единое дерево состояния?
Какие основные компоненты паттерна управления состоянием?
Какие правила сохранения состояния при горячей перезагрузке?
Могу ли я выполнять мутации непосредственно в строгом режиме?
Как стилизовать динамически сгенерированное содержимое, используя scoped CSS?
Могу ли я использовать стилизованные компоненты в Vue.js?
Какие особенности у stylelint?
Какие модификаторы поддерживаются в v-model?
Что делает Suspense в Vue 3?
Как синхронизировать текущий маршрут в Vuex хранилище?
Что делает Teleport в Vue 3?
Каковы эквиваленты шаблона в функциях рендеринга?
Как протестировать мутации?
Как протестировать свои геттеры?
Как вызвать наблюдателей при инициализации?
Как реализовать двустороннюю привязку данных в Vue?
Как использовать директиву v-for в шаблоне?
Как использовать директиву v-model с двунаправленным вычисляемым свойством?
Как использовать vue-router и привести пример?
Какова цель директивы v-for?
Как использовать директиву v-for с диапазоном?
Какова цель директивы v-on во Vue.js?
В чем разница между директивами v-show и v-if?
Какое поведение версий у плагинов-пресетов?
Каковы преимущества VueJS перед ReactJS?
В чем разница между VueJS и Angular?
Что такое Vue CLI?
Какие возможности предоставляет Vue CLI?
Что такое плагины в vue CLI?
Основная цель компилятора Vue.js?
Как обеспечить соответствие приложения Vue стандартам CSP?
Какие функции хуков предоставляет директива?
Какие модификаторы событий предоставляет Vue?
Что такое фильтры в Vue 2?
Что такое экземпляр Vue?
Какие методы жизненного цикла VueJS (vue 2 и vue 3)
Что такое лоадер Vue.js?
Можно ли передавать параметры для фильтров в Vue 2?
Что такое vue router и какие его особенности?
Что такое VueJS?
Основные особенности VueJS?
Что такое getters в Vuex?
Поддерживает ли Vuex горячую загрузку?
Что такое модули в Vuex?
Каковы подводные камни мутаций Vuex?
Что такое неймспейсы в Vuex?
Что такое плагин Vuex?
Что такое Vuex Store?
Каковы отличия между хранилищем Vuex и обычным глобальным объектом?
Структура приложения Vuex?
Что такое watchEffect в Vue 3?
Как отслеживать изменения вложенных данных?
Как отслеживать изменения объекта маршрута?
Что такое миксины?
Что такое слоты в Vue?
Что такое вспомогательный метод mapState?
Когда компоненту нужен единственный корневой элемент?
Когда стоит повторно использовать модули?
Почему data компонента должен быть функцией?
Почему мутации должны быть синхронными?
Зачем нужен атрибут key в директиве v-for?
Что такое X Templates?
Главная
/
Вопросы
/
Вопросы по Vue
/
Зачем нужны комментарии во vue?
Зачем нужны комментарии во vue?
В Vue.js опция comments относится к возможности отображения комментариев внутри виртуального DOM. Виртуальный DOM представляет собой легковесную копию реального DOM, которая позволяет Vue более эффективно обновлять визуальное представление приложения.

Зачем нужны комментарии?
Комментарий в контексте Vue.js может использоваться для различных целей, одна из которых — упрощение процесса разработки и отладки. Комментарии могут служить:

Документацией для разработчиков. Они помогают понять, к какому участку кода относится определенный компонент или функция.
Маргинацией между элементами, что может быть полезно для структурирования кода и улучшения его читаемости.
Расширением функциональности в будущем, используя специальные комментарии, которые интерпретируются фреймворком для добавления определенных функций.
Пример использования комментариев
Рассмотрим простой пример, где мы будем использовать комментарии в компоненте Vue.


<template>
  <div>
    <!-- Заголовок приложения -->
    <h1>{{ title }}</h1>
    <!-- Описание приложения -->
    <p>{{ description }}</p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        title: "Привет, Vue!",
        description: "Это пример использования комментариев в Vue."
      };
    }
  };
</script>

<style scoped>
  h1 {
    color: blue;
  }

  p {
    font-size: 16px;
  }
</style>
В этом коде мы видим комментарии, которые помогают понять, какой контент представлен в различных частях шаблона. Это улучшает читаемость кода для других разработчиков, которые могут с ним работать в будущем.

Итог
Комментарии в Vue.js не только помогают в документировании кода, но и делают его более управляемым и структурированным. Хотя Vue не имеет специальной опции в конфигурации для активации комментариев, их использование внутри шаблонов и скриптов по-прежнему считается хорошей практикой и способствует качеству кода.

Предыдущий вопрос
Как объединить локальные вычисляемые свойства с помощником mapState?
Следующий вопрос
Как сделать commit с payload?
Содержание:
Зачем нужны комментарии?
Пример использования комментариев
Итог
Редактировать
Вопросы
Вопросы по HTML
Вопросы по CSS
Вопросы по JS
Вопросы по TS
Вопросы по React
Вопросы по Vue
Вопросы по Angular
Вопросы по Nuxt
Вопросы по Nest.js
Вопросы по Node.js
Вопросы по Docker
Вопросы по Git
Вопросы по Веб-разработке
Тесты
Тесты по HTML
Тесты по CSS
Тесты по JS
Тесты по TS
Тесты по React
Тесты по Vue
Тесты по Angular
Тесты по Nuxt
Тесты по Nest.js
Тесты по Node.js
Тесты по Docker
Тесты по Git
Задачи
Задачи по JS
Тренажер вопросов
Frontend
© 2026 Все права защищены
Политика конфиденциальности
Согласие на обработку персональных данных


Frontend
Вопросы
Тренажер вопросов
Тесты
Задачи
Поиск по сайту
K
Вопросы по Vue
Как получить доступ к глобальным свойствам функциональных компонентов?
Как получить доступ к локальным плагинам в проекте?
Как получить доступ к родительскому экземпляру?
Как получить доступ к корневому экземпляру?
Как применить линтинг для CSS?
Какие проблемы могут возникнуть при обнаружении изменений в массивах?
Какова структура фабрики асинхронных компонентов?
Что такое асинхронные компоненты?
Рекомендуется ли использовать async для вычисляемых свойств?
Как выполнять асинхронные операции?
Какова цель опции browserslist?
Как цепочить фильтры в Vue 2?
Как изменить локализацию в Vue?
Как решить циклические зависимости между компонентами?
Как объединить локальные вычисляемые свойства с помощником mapState?
Зачем нужны комментарии во vue?
Как сделать commit с payload?
Как передать данные от дочернего компонента к родительскому с помощью событий?
Что вы имеете в виду под контекстом компонента для слотов?
Как собрать действия?
Что такое Composition API?
Можно ли использовать вычисляемое свойство в другом вычисляемом свойстве?
Что такое условные директивы?
Как добиться условной группы элементов?
Объясните структуру createElement с аргументами
Какие существуют способы создания фильтров в Vue 2?
Как создать функциональные компоненты с использованием vue-loader?
Как создать функции из слотов?
Как создать плагин?
Как создать реактивные объекты
Как создать поведение плагинов пользовательского интерфейса?
Что такое извлечение CSS?
Как использовать CSS-модули в Vue.js?
Могу ли я использовать CSS-модули для препроцессоров?
Что такое пользовательские блоки?
Что такое пользовательские директивы?
Что такое пользовательское форматирование?
Можно ли использовать пользовательское имя инъекции для CSS-модулей?
Как определить пользовательские псевдонимы модификаторов клавиш?
Какие стратегии слияния пользовательских опций?
Как настроить директиву v-model для компонента?
Каков поток данных для props?
Как реализовать локализацию даты и времени?
Как использовать глубокие селекторы?
Каково поведение пространства имен по умолчанию в Vuex?
Какова основная разница между методом и вычисляемым свойством?
В чем разница между shallowRef и markRaw в Vue 3?
В чем разница между VueJS и ReactJS?
Каковы различия между мутациями и действиями в Vuex?
Какие существуют различные сборки Vue.js?
Каковы аргументы хуков директивы?
Можно ли отправить действие с использованием payload или объекта?
Как вызвать действия (dispatch actions)?
Как диспатчить действия в компонентах?
Как отобразить состояние хранилища в компонентах vue?
Что произойдет, если использовать дублирующиеся имена полей?
Как можно написать дублирующиеся виртуальные узлы в компоненте?
Что такое динамические компоненты?
Что такое динамическое сопоставление маршрутов?
Как узнать версию VueJS, используя API?
Какова разница между полными и только runtime сборками Vue?
Что такое сокращенная запись функций в хуках директив?
Что такое функциональные компоненты?
Что такое глобальные миксины?
Что такое глобальная регистрация компонентов?
Как обрабатывать множественное число?
Какова цель API hotUpdate в хранилище Vuex?
Как проводить тестирование в Vue.js?
Как использовать плагин?
Как использовать обработчики событий
Как определить, выполняется ли код на клиенте или сервере?
Почему не стоит использовать директивы v-if и v-for на одном элементе?
Как я могу использовать импортированную константу в секции шаблона?
Как инжектировать store в дочерние компоненты?
Что такое встроенные шаблоны?
Какова цель тега <keep-alive>?
Что такое модификаторы ключевых событий?
Могу ли я использовать локальные пресеты?
Зачем нужна локальная регистрация в Vue?
В чем разница между локальной и глобальной регистрацией в модульной системе?
Что такое помощник mapGetter?
Каковы стратегии слияния в миксинах Vue?
Что такое доступ к стилю методом?
Возможно ли смешивание локальных и глобальных стилей?
Как реализовать модель для пользовательских компонентов ввода?
Что такое локальное состояние модуля?
Какие модификаторы кнопок мыши поддерживаются?
Какова причина рекомендации использовать многословные названия компонентов?
Как добавить несколько новых слотов в один компонент?
Как мутировать состояние в плагинах?
Обязательно ли использовать константы для типов мутаций?
Что такое мутации в Vuex?
Что такое навигационные охранники в Vue Router?
Нужен ли промис для Vuex?
Что такое вложенные маршруты?
Как представить односторонний поток данных в Vuex?
Утекают ли стили родителя в дочерние компоненты в scoped CSS?
Как передать несколько значений директиве во Vue?
Как выполнять мутации в компонентах?
Что такое плагины и какие у них разные службы?
Какие возможные типы пропсов в Vue?
Что такое доступ к свойствам стилей?
Что такое props?
Каковы доступные валидации для props в Vue?
Какие возможные способы предоставить переходы?
Какова цель renderError?
Какой лучший способ перерисовать компонент?
Как сделать изменения параметров маршрутизатора реактивными?
Почему нельзя обновлять состояние напрямую?
Что такое рекурсивные компоненты?
В чем разница между ref и reactive в Vue 3?
Как зарегистрировать директивы локально?
Что такое удаленные пресеты?
Как удалить реактивность в Vue 3?
Что такое функция рендеринга?
В чем преимущества функции рендеринга по сравнению с шаблонами?
Нужно ли полностью заменять локальное состояние на Vuex?
Как повторно использовать элементы с атрибутом key?
Каково приоритет соответствия маршрутов?
Могу ли я использовать сборки времени выполнения для всех шаблонов?
Что такое Scoped CSS?
Какие сходства между VueJS и ReactJS?
Какие проблемы решают однокомпонентные файлы?
Нарушает ли использование одномодульных файлов (Single File Components) принцип разделения озабоченности?
Что такое единое дерево состояния?
Какие основные компоненты паттерна управления состоянием?
Какие правила сохранения состояния при горячей перезагрузке?
Могу ли я выполнять мутации непосредственно в строгом режиме?
Как стилизовать динамически сгенерированное содержимое, используя scoped CSS?
Могу ли я использовать стилизованные компоненты в Vue.js?
Какие особенности у stylelint?
Какие модификаторы поддерживаются в v-model?
Что делает Suspense в Vue 3?
Как синхронизировать текущий маршрут в Vuex хранилище?
Что делает Teleport в Vue 3?
Каковы эквиваленты шаблона в функциях рендеринга?
Как протестировать мутации?
Как протестировать свои геттеры?
Как вызвать наблюдателей при инициализации?
Как реализовать двустороннюю привязку данных в Vue?
Как использовать директиву v-for в шаблоне?
Как использовать директиву v-model с двунаправленным вычисляемым свойством?
Как использовать vue-router и привести пример?
Какова цель директивы v-for?
Как использовать директиву v-for с диапазоном?
Какова цель директивы v-on во Vue.js?
В чем разница между директивами v-show и v-if?
Какое поведение версий у плагинов-пресетов?
Каковы преимущества VueJS перед ReactJS?
В чем разница между VueJS и Angular?
Что такое Vue CLI?
Какие возможности предоставляет Vue CLI?
Что такое плагины в vue CLI?
Основная цель компилятора Vue.js?
Как обеспечить соответствие приложения Vue стандартам CSP?
Какие функции хуков предоставляет директива?
Какие модификаторы событий предоставляет Vue?
Что такое фильтры в Vue 2?
Что такое экземпляр Vue?
Какие методы жизненного цикла VueJS (vue 2 и vue 3)
Что такое лоадер Vue.js?
Можно ли передавать параметры для фильтров в Vue 2?
Что такое vue router и какие его особенности?
Что такое VueJS?
Основные особенности VueJS?
Что такое getters в Vuex?
Поддерживает ли Vuex горячую загрузку?
Что такое модули в Vuex?
Каковы подводные камни мутаций Vuex?
Что такое неймспейсы в Vuex?
Что такое плагин Vuex?
Что такое Vuex Store?
Каковы отличия между хранилищем Vuex и обычным глобальным объектом?
Структура приложения Vuex?
Что такое watchEffect в Vue 3?
Как отслеживать изменения вложенных данных?
Как отслеживать изменения объекта маршрута?
Что такое миксины?
Что такое слоты в Vue?
Что такое вспомогательный метод mapState?
Когда компоненту нужен единственный корневой элемент?
Когда стоит повторно использовать модули?
Почему data компонента должен быть функцией?
Почему мутации должны быть синхронными?
Зачем нужен атрибут key в директиве v-for?
Что такое X Templates?
Главная
/
Вопросы
/
Вопросы по Vue
/
Как объединить локальные вычисляемые свойства с помощником mapState?
Как объединить локальные вычисляемые свойства с помощником mapState?
В Vue.js mapState — это вспомогательная функция из Vuex, которая позволяет вам синхронизировать состояние вашего Vuex хранилища с компонентами Vue. Тем не менее, иногда вам может потребоваться использовать локальные вычисляемые свойства вместе с глобальным состоянием, полученным через mapState. В этом ответе мы объясним, как это сделать, и предоставим кодовые примеры.

Основная структура
Для начала давайте создадим простой Vue компонент, который использует mapState для извлечения состояния из хранилища и создает локальное вычисляемое свойство для обработки или модификации этого состояния.

Шаг 1: Настройка Vuex хранилища
Мы начнем с создания простого хранилища Vuex:

// store.js
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    counter: 0
  },
  mutations: {
    increment(state) {
      state.counter++;
    }
  }
});

export default store;
Шаг 2: Использование mapState в компоненте
Теперь мы создадим компонент, который будет использовать mapState для извлечения значения counter, а также будет иметь локальное вычисляемое свойство doubleCounter.

// CounterComponent.vue
<template>
  <div>
    <p>Счетчик: {{ counter }}</p>
    <p>Удвоенный счетчик: {{ doubleCounter }}</p>
    <button @click="increment">Увеличить</button>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    // Используем mapState для получения значения из хранилища
    ...mapState(['counter']),
    
    // Локальное вычисляемое свойство
    doubleCounter() {
      return this.counter * 2; // Удваиваем значение счетчика
    }
  },
  methods: {
    increment() {
      this.$store.commit('increment');
    }
  }
};
</script>
Пояснение к коду
mapState: Это оператор, который позволяет нам организовать связи между состоянием из Vuex и свойствами компонента. В нашем примере мы используем его, чтобы получить состояние счетчика из хранилища.
Локальное вычисляемое свойство: doubleCounter — это локальное вычисляемое свойство, которое использует значение из состояния Vuex. Таким образом, всякий раз, когда значение counter изменяется (например, при нажатии кнопки), значение doubleCounter также автоматически обновляется.
Методы: Метод increment вызывает мутацию increment, которая изменяет состояние в хранилище, увеличивая значение counter.
Заключение
Таким образом, вы можете легко сочетать глобальное состояние из Vuex с локальными вычисляемыми свойствами в ваших компонентах Vue. Это дает вам гибкость в управлении данными и позволяет делать ваш код более организованным и удобным для понимания. Теперь вы можете использовать инструкции, приведенные в этом ответе, для создания более сложных компонентов, взаимодействующих с Vuex.

Предыдущий вопрос
Как решить циклические зависимости между компонентами?
Следующий вопрос
Зачем нужны комментарии во vue?
Содержание:
Основная структура
Редактировать
Вопросы
Вопросы по HTML
Вопросы по CSS
Вопросы по JS
Вопросы по TS
Вопросы по React
Вопросы по Vue
Вопросы по Angular
Вопросы по Nuxt
Вопросы по Nest.js
Вопросы по Node.js
Вопросы по Docker
Вопросы по Git
Вопросы по Веб-разработке
Тесты
Тесты по HTML
Тесты по CSS
Тесты по JS
Тесты по TS
Тесты по React
Тесты по Vue
Тесты по Angular
Тесты по Nuxt
Тесты по Nest.js
Тесты по Node.js
Тесты по Docker
Тесты по Git
Задачи
Задачи по JS
Тренажер вопросов
Frontend
© 2026 Все права защищены
Политика конфиденциальности
Согласие на обработку персональных данных


Frontend
Вопросы
Тренажер вопросов
Тесты
Задачи
Поиск по сайту
K
Вопросы по Vue
Как получить доступ к глобальным свойствам функциональных компонентов?
Как получить доступ к локальным плагинам в проекте?
Как получить доступ к родительскому экземпляру?
Как получить доступ к корневому экземпляру?
Как применить линтинг для CSS?
Какие проблемы могут возникнуть при обнаружении изменений в массивах?
Какова структура фабрики асинхронных компонентов?
Что такое асинхронные компоненты?
Рекомендуется ли использовать async для вычисляемых свойств?
Как выполнять асинхронные операции?
Какова цель опции browserslist?
Как цепочить фильтры в Vue 2?
Как изменить локализацию в Vue?
Как решить циклические зависимости между компонентами?
Как объединить локальные вычисляемые свойства с помощником mapState?
Зачем нужны комментарии во vue?
Как сделать commit с payload?
Как передать данные от дочернего компонента к родительскому с помощью событий?
Что вы имеете в виду под контекстом компонента для слотов?
Как собрать действия?
Что такое Composition API?
Можно ли использовать вычисляемое свойство в другом вычисляемом свойстве?
Что такое условные директивы?
Как добиться условной группы элементов?
Объясните структуру createElement с аргументами
Какие существуют способы создания фильтров в Vue 2?
Как создать функциональные компоненты с использованием vue-loader?
Как создать функции из слотов?
Как создать плагин?
Как создать реактивные объекты
Как создать поведение плагинов пользовательского интерфейса?
Что такое извлечение CSS?
Как использовать CSS-модули в Vue.js?
Могу ли я использовать CSS-модули для препроцессоров?
Что такое пользовательские блоки?
Что такое пользовательские директивы?
Что такое пользовательское форматирование?
Можно ли использовать пользовательское имя инъекции для CSS-модулей?
Как определить пользовательские псевдонимы модификаторов клавиш?
Какие стратегии слияния пользовательских опций?
Как настроить директиву v-model для компонента?
Каков поток данных для props?
Как реализовать локализацию даты и времени?
Как использовать глубокие селекторы?
Каково поведение пространства имен по умолчанию в Vuex?
Какова основная разница между методом и вычисляемым свойством?
В чем разница между shallowRef и markRaw в Vue 3?
В чем разница между VueJS и ReactJS?
Каковы различия между мутациями и действиями в Vuex?
Какие существуют различные сборки Vue.js?
Каковы аргументы хуков директивы?
Можно ли отправить действие с использованием payload или объекта?
Как вызвать действия (dispatch actions)?
Как диспатчить действия в компонентах?
Как отобразить состояние хранилища в компонентах vue?
Что произойдет, если использовать дублирующиеся имена полей?
Как можно написать дублирующиеся виртуальные узлы в компоненте?
Что такое динамические компоненты?
Что такое динамическое сопоставление маршрутов?
Как узнать версию VueJS, используя API?
Какова разница между полными и только runtime сборками Vue?
Что такое сокращенная запись функций в хуках директив?
Что такое функциональные компоненты?
Что такое глобальные миксины?
Что такое глобальная регистрация компонентов?
Как обрабатывать множественное число?
Какова цель API hotUpdate в хранилище Vuex?
Как проводить тестирование в Vue.js?
Как использовать плагин?
Как использовать обработчики событий
Как определить, выполняется ли код на клиенте или сервере?
Почему не стоит использовать директивы v-if и v-for на одном элементе?
Как я могу использовать импортированную константу в секции шаблона?
Как инжектировать store в дочерние компоненты?
Что такое встроенные шаблоны?
Какова цель тега <keep-alive>?
Что такое модификаторы ключевых событий?
Могу ли я использовать локальные пресеты?
Зачем нужна локальная регистрация в Vue?
В чем разница между локальной и глобальной регистрацией в модульной системе?
Что такое помощник mapGetter?
Каковы стратегии слияния в миксинах Vue?
Что такое доступ к стилю методом?
Возможно ли смешивание локальных и глобальных стилей?
Как реализовать модель для пользовательских компонентов ввода?
Что такое локальное состояние модуля?
Какие модификаторы кнопок мыши поддерживаются?
Какова причина рекомендации использовать многословные названия компонентов?
Как добавить несколько новых слотов в один компонент?
Как мутировать состояние в плагинах?
Обязательно ли использовать константы для типов мутаций?
Что такое мутации в Vuex?
Что такое навигационные охранники в Vue Router?
Нужен ли промис для Vuex?
Что такое вложенные маршруты?
Как представить односторонний поток данных в Vuex?
Утекают ли стили родителя в дочерние компоненты в scoped CSS?
Как передать несколько значений директиве во Vue?
Как выполнять мутации в компонентах?
Что такое плагины и какие у них разные службы?
Какие возможные типы пропсов в Vue?
Что такое доступ к свойствам стилей?
Что такое props?
Каковы доступные валидации для props в Vue?
Какие возможные способы предоставить переходы?
Какова цель renderError?
Какой лучший способ перерисовать компонент?
Как сделать изменения параметров маршрутизатора реактивными?
Почему нельзя обновлять состояние напрямую?
Что такое рекурсивные компоненты?
В чем разница между ref и reactive в Vue 3?
Как зарегистрировать директивы локально?
Что такое удаленные пресеты?
Как удалить реактивность в Vue 3?
Что такое функция рендеринга?
В чем преимущества функции рендеринга по сравнению с шаблонами?
Нужно ли полностью заменять локальное состояние на Vuex?
Как повторно использовать элементы с атрибутом key?
Каково приоритет соответствия маршрутов?
Могу ли я использовать сборки времени выполнения для всех шаблонов?
Что такое Scoped CSS?
Какие сходства между VueJS и ReactJS?
Какие проблемы решают однокомпонентные файлы?
Нарушает ли использование одномодульных файлов (Single File Components) принцип разделения озабоченности?
Что такое единое дерево состояния?
Какие основные компоненты паттерна управления состоянием?
Какие правила сохранения состояния при горячей перезагрузке?
Могу ли я выполнять мутации непосредственно в строгом режиме?
Как стилизовать динамически сгенерированное содержимое, используя scoped CSS?
Могу ли я использовать стилизованные компоненты в Vue.js?
Какие особенности у stylelint?
Какие модификаторы поддерживаются в v-model?
Что делает Suspense в Vue 3?
Как синхронизировать текущий маршрут в Vuex хранилище?
Что делает Teleport в Vue 3?
Каковы эквиваленты шаблона в функциях рендеринга?
Как протестировать мутации?
Как протестировать свои геттеры?
Как вызвать наблюдателей при инициализации?
Как реализовать двустороннюю привязку данных в Vue?
Как использовать директиву v-for в шаблоне?
Как использовать директиву v-model с двунаправленным вычисляемым свойством?
Как использовать vue-router и привести пример?
Какова цель директивы v-for?
Как использовать директиву v-for с диапазоном?
Какова цель директивы v-on во Vue.js?
В чем разница между директивами v-show и v-if?
Какое поведение версий у плагинов-пресетов?
Каковы преимущества VueJS перед ReactJS?
В чем разница между VueJS и Angular?
Что такое Vue CLI?
Какие возможности предоставляет Vue CLI?
Что такое плагины в vue CLI?
Основная цель компилятора Vue.js?
Как обеспечить соответствие приложения Vue стандартам CSP?
Какие функции хуков предоставляет директива?
Какие модификаторы событий предоставляет Vue?
Что такое фильтры в Vue 2?
Что такое экземпляр Vue?
Какие методы жизненного цикла VueJS (vue 2 и vue 3)
Что такое лоадер Vue.js?
Можно ли передавать параметры для фильтров в Vue 2?
Что такое vue router и какие его особенности?
Что такое VueJS?
Основные особенности VueJS?
Что такое getters в Vuex?
Поддерживает ли Vuex горячую загрузку?
Что такое модули в Vuex?
Каковы подводные камни мутаций Vuex?
Что такое неймспейсы в Vuex?
Что такое плагин Vuex?
Что такое Vuex Store?
Каковы отличия между хранилищем Vuex и обычным глобальным объектом?
Структура приложения Vuex?
Что такое watchEffect в Vue 3?
Как отслеживать изменения вложенных данных?
Как отслеживать изменения объекта маршрута?
Что такое миксины?
Что такое слоты в Vue?
Что такое вспомогательный метод mapState?
Когда компоненту нужен единственный корневой элемент?
Когда стоит повторно использовать модули?
Почему data компонента должен быть функцией?
Почему мутации должны быть синхронными?
Зачем нужен атрибут key в директиве v-for?
Что такое X Templates?
Главная
/
Вопросы
/
Вопросы по Vue
/
Как решить циклические зависимости между компонентами?
Как решить циклические зависимости между компонентами?
Циклические зависимости между компонентами в Vue могут привести к различным проблемам, включая ошибки при рендеринге и проблемы с производительностью. Когда два или более компонента ссылаются друг на друга, это может создать бесконечный цикл зависимостей. Рассмотрим, как можно предотвратить и решать такие циклические зависимости.

Причины циклических зависимостей
Циклические зависимости возникают, когда компонент A импортирует компонент B, а компонент B в свою очередь импортирует компонент A (или обращается к нему). Это может произойти, если вы не правильно структурируете свои компоненты.

Способы решения
Пересмотрите архитектуру компонентов
Убедитесь, что компоненты выполняют только одну задачу или имеют четкое предназначение. Попробуйте вынести общую логику в родительский или отдельный компонент.
// Компонент A
<template>
  <div>
    <ComponentB :someData="dataForB" />
  </div>
</template>

<script>
import ComponentB from './ComponentB.vue';

export default {
  components: {
    ComponentB,
  },
  data() {
    return {
      dataForB: 'Данные для компонента B',
    };
  },
};
</script>
Используйте Vuex или Provide/Inject
Для обмена состоянием между компонентами вместо прямых зависимостей можно использовать Vuex (для глобального состояния) или механизм Provide/Inject.
// Root компонент (App.vue)
<template>
  <ChildComponent />
</template>

<script>
import { provide } from 'vue';
import ChildComponent from './ChildComponent.vue';

export default {
  setup() {
    const sharedState = reactive({ value: 'Общее состояние' });
    provide('sharedState', sharedState);
  },
  components: {
    ChildComponent,
  },
};
</script>
// Child компонент (ChildComponent.vue)
<template>
  <div>{{ sharedState.value }}</div>
</template>

<script>
import { inject } from 'vue';

export default {
  setup() {
    const sharedState = inject('sharedState');
    return { sharedState };
  },
};
</script>
Ленивая загрузка компонентов
Если цикла избежать нельзя, рассмотрите вариант с использованием динамического импорта компонентов. Это позволит загружать компоненты только по мере необходимости.
// Компонент A
<template>
  <div>
    <button @click="loadComponentB">Загрузить компонент B</button>
    <component :is="componentB" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      componentB: null,
    };
  },
  methods: {
    async loadComponentB() {
      this.componentB = (await import('./ComponentB.vue')).default;
    },
  },
};
</script>
Заключение
Циклические зависимости могут вызвать множество проблем в приложениях Vue. Главный подход к их решению — это хорошая архитектура компонентов и использование Vuex или Provide/Inject для обмена состоянием между компонентами. Также можно использовать ленивую загрузку, чтобы избежать зависимости в момент компиляции. Регулярно пересматривайте свои компоненты и их взаимодействие, чтобы предотвратить появление таких зависимостей в будущем.

Предыдущий вопрос
Как изменить локализацию в Vue?
Следующий вопрос
Как объединить локальные вычисляемые свойства с помощником mapState?
Содержание:
Причины циклических зависимостей
Способы решения
Заключение
Редактировать
Вопросы
Вопросы по HTML
Вопросы по CSS
Вопросы по JS
Вопросы по TS
Вопросы по React
Вопросы по Vue
Вопросы по Angular
Вопросы по Nuxt
Вопросы по Nest.js
Вопросы по Node.js
Вопросы по Docker
Вопросы по Git
Вопросы по Веб-разработке
Тесты
Тесты по HTML
Тесты по CSS
Тесты по JS
Тесты по TS
Тесты по React
Тесты по Vue
Тесты по Angular
Тесты по Nuxt
Тесты по Nest.js
Тесты по Node.js
Тесты по Docker
Тесты по Git
Задачи
Задачи по JS
Тренажер вопросов
Frontend
© 2026 Все права защищены
Политика конфиденциальности
Согласие на обработку персональных данных


Frontend
Вопросы
Тренажер вопросов
Тесты
Задачи
Поиск по сайту
K
Вопросы по Vue
Как получить доступ к глобальным свойствам функциональных компонентов?
Как получить доступ к локальным плагинам в проекте?
Как получить доступ к родительскому экземпляру?
Как получить доступ к корневому экземпляру?
Как применить линтинг для CSS?
Какие проблемы могут возникнуть при обнаружении изменений в массивах?
Какова структура фабрики асинхронных компонентов?
Что такое асинхронные компоненты?
Рекомендуется ли использовать async для вычисляемых свойств?
Как выполнять асинхронные операции?
Какова цель опции browserslist?
Как цепочить фильтры в Vue 2?
Как изменить локализацию в Vue?
Как решить циклические зависимости между компонентами?
Как объединить локальные вычисляемые свойства с помощником mapState?
Зачем нужны комментарии во vue?
Как сделать commit с payload?
Как передать данные от дочернего компонента к родительскому с помощью событий?
Что вы имеете в виду под контекстом компонента для слотов?
Как собрать действия?
Что такое Composition API?
Можно ли использовать вычисляемое свойство в другом вычисляемом свойстве?
Что такое условные директивы?
Как добиться условной группы элементов?
Объясните структуру createElement с аргументами
Какие существуют способы создания фильтров в Vue 2?
Как создать функциональные компоненты с использованием vue-loader?
Как создать функции из слотов?
Как создать плагин?
Как создать реактивные объекты
Как создать поведение плагинов пользовательского интерфейса?
Что такое извлечение CSS?
Как использовать CSS-модули в Vue.js?
Могу ли я использовать CSS-модули для препроцессоров?
Что такое пользовательские блоки?
Что такое пользовательские директивы?
Что такое пользовательское форматирование?
Можно ли использовать пользовательское имя инъекции для CSS-модулей?
Как определить пользовательские псевдонимы модификаторов клавиш?
Какие стратегии слияния пользовательских опций?
Как настроить директиву v-model для компонента?
Каков поток данных для props?
Как реализовать локализацию даты и времени?
Как использовать глубокие селекторы?
Каково поведение пространства имен по умолчанию в Vuex?
Какова основная разница между методом и вычисляемым свойством?
В чем разница между shallowRef и markRaw в Vue 3?
В чем разница между VueJS и ReactJS?
Каковы различия между мутациями и действиями в Vuex?
Какие существуют различные сборки Vue.js?
Каковы аргументы хуков директивы?
Можно ли отправить действие с использованием payload или объекта?
Как вызвать действия (dispatch actions)?
Как диспатчить действия в компонентах?
Как отобразить состояние хранилища в компонентах vue?
Что произойдет, если использовать дублирующиеся имена полей?
Как можно написать дублирующиеся виртуальные узлы в компоненте?
Что такое динамические компоненты?
Что такое динамическое сопоставление маршрутов?
Как узнать версию VueJS, используя API?
Какова разница между полными и только runtime сборками Vue?
Что такое сокращенная запись функций в хуках директив?
Что такое функциональные компоненты?
Что такое глобальные миксины?
Что такое глобальная регистрация компонентов?
Как обрабатывать множественное число?
Какова цель API hotUpdate в хранилище Vuex?
Как проводить тестирование в Vue.js?
Как использовать плагин?
Как использовать обработчики событий
Как определить, выполняется ли код на клиенте или сервере?
Почему не стоит использовать директивы v-if и v-for на одном элементе?
Как я могу использовать импортированную константу в секции шаблона?
Как инжектировать store в дочерние компоненты?
Что такое встроенные шаблоны?
Какова цель тега <keep-alive>?
Что такое модификаторы ключевых событий?
Могу ли я использовать локальные пресеты?
Зачем нужна локальная регистрация в Vue?
В чем разница между локальной и глобальной регистрацией в модульной системе?
Что такое помощник mapGetter?
Каковы стратегии слияния в миксинах Vue?
Что такое доступ к стилю методом?
Возможно ли смешивание локальных и глобальных стилей?
Как реализовать модель для пользовательских компонентов ввода?
Что такое локальное состояние модуля?
Какие модификаторы кнопок мыши поддерживаются?
Какова причина рекомендации использовать многословные названия компонентов?
Как добавить несколько новых слотов в один компонент?
Как мутировать состояние в плагинах?
Обязательно ли использовать константы для типов мутаций?
Что такое мутации в Vuex?
Что такое навигационные охранники в Vue Router?
Нужен ли промис для Vuex?
Что такое вложенные маршруты?
Как представить односторонний поток данных в Vuex?
Утекают ли стили родителя в дочерние компоненты в scoped CSS?
Как передать несколько значений директиве во Vue?
Как выполнять мутации в компонентах?
Что такое плагины и какие у них разные службы?
Какие возможные типы пропсов в Vue?
Что такое доступ к свойствам стилей?
Что такое props?
Каковы доступные валидации для props в Vue?
Какие возможные способы предоставить переходы?
Какова цель renderError?
Какой лучший способ перерисовать компонент?
Как сделать изменения параметров маршрутизатора реактивными?
Почему нельзя обновлять состояние напрямую?
Что такое рекурсивные компоненты?
В чем разница между ref и reactive в Vue 3?
Как зарегистрировать директивы локально?
Что такое удаленные пресеты?
Как удалить реактивность в Vue 3?
Что такое функция рендеринга?
В чем преимущества функции рендеринга по сравнению с шаблонами?
Нужно ли полностью заменять локальное состояние на Vuex?
Как повторно использовать элементы с атрибутом key?
Каково приоритет соответствия маршрутов?
Могу ли я использовать сборки времени выполнения для всех шаблонов?
Что такое Scoped CSS?
Какие сходства между VueJS и ReactJS?
Какие проблемы решают однокомпонентные файлы?
Нарушает ли использование одномодульных файлов (Single File Components) принцип разделения озабоченности?
Что такое единое дерево состояния?
Какие основные компоненты паттерна управления состоянием?
Какие правила сохранения состояния при горячей перезагрузке?
Могу ли я выполнять мутации непосредственно в строгом режиме?
Как стилизовать динамически сгенерированное содержимое, используя scoped CSS?
Могу ли я использовать стилизованные компоненты в Vue.js?
Какие особенности у stylelint?
Какие модификаторы поддерживаются в v-model?
Что делает Suspense в Vue 3?
Как синхронизировать текущий маршрут в Vuex хранилище?
Что делает Teleport в Vue 3?
Каковы эквиваленты шаблона в функциях рендеринга?
Как протестировать мутации?
Как протестировать свои геттеры?
Как вызвать наблюдателей при инициализации?
Как реализовать двустороннюю привязку данных в Vue?
Как использовать директиву v-for в шаблоне?
Как использовать директиву v-model с двунаправленным вычисляемым свойством?
Как использовать vue-router и привести пример?
Какова цель директивы v-for?
Как использовать директиву v-for с диапазоном?
Какова цель директивы v-on во Vue.js?
В чем разница между директивами v-show и v-if?
Какое поведение версий у плагинов-пресетов?
Каковы преимущества VueJS перед ReactJS?
В чем разница между VueJS и Angular?
Что такое Vue CLI?
Какие возможности предоставляет Vue CLI?
Что такое плагины в vue CLI?
Основная цель компилятора Vue.js?
Как обеспечить соответствие приложения Vue стандартам CSP?
Какие функции хуков предоставляет директива?
Какие модификаторы событий предоставляет Vue?
Что такое фильтры в Vue 2?
Что такое экземпляр Vue?
Какие методы жизненного цикла VueJS (vue 2 и vue 3)
Что такое лоадер Vue.js?
Можно ли передавать параметры для фильтров в Vue 2?
Что такое vue router и какие его особенности?
Что такое VueJS?
Основные особенности VueJS?
Что такое getters в Vuex?
Поддерживает ли Vuex горячую загрузку?
Что такое модули в Vuex?
Каковы подводные камни мутаций Vuex?
Что такое неймспейсы в Vuex?
Что такое плагин Vuex?
Что такое Vuex Store?
Каковы отличия между хранилищем Vuex и обычным глобальным объектом?
Структура приложения Vuex?
Что такое watchEffect в Vue 3?
Как отслеживать изменения вложенных данных?
Как отслеживать изменения объекта маршрута?
Что такое миксины?
Что такое слоты в Vue?
Что такое вспомогательный метод mapState?
Когда компоненту нужен единственный корневой элемент?
Когда стоит повторно использовать модули?
Почему data компонента должен быть функцией?
Почему мутации должны быть синхронными?
Зачем нужен атрибут key в директиве v-for?
Что такое X Templates?
Главная
/
Вопросы
/
Вопросы по Vue
/
Как изменить локализацию в Vue?
Как изменить локализацию в Vue?
Изменение локализации в приложениях на Vue — это важный аспект, особенно если ваше приложение предназначено для многоязычной аудитории. В этом ответе мы рассмотрим, как можно реализовать смену локали с помощью библиотеки Vue I18n, которая является наиболее популярным решением для интернационализации Vue-приложений.

Установка Vue I18n
Сначала вам нужно установить пакет Vue I18n. Это можно сделать с помощью npm или yarn:

npm install vue-i18n
или

yarn add vue-i18n
Основная настройка Vue I18n
После установки необходимо установить и настроить Vue I18n в вашем приложении. Вот базовый пример того, как это может выглядеть:

import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

// Определяем сообщения для разных локалей
const messages = {
  en: {
    welcome: 'Welcome',
    changeLocale: 'Change Language'
  },
  ru: {
    welcome: 'Добро пожаловать',
    changeLocale: 'Сменить язык'
  }
};

// Создаем экземпляр VueI18n
const i18n = new VueI18n({
  locale: 'en', // Устанавливаем начальную локаль
  messages, // Передаем переводы
});

// Создаем ваше Vue-приложение
new Vue({
  i18n,
  el: '#app',
  data: {
    currentLocale: 'en'
  },
  methods: {
    switchLocale() {
      this.currentLocale = this.currentLocale === 'en' ? 'ru' : 'en';
      this.$i18n.locale = this.currentLocale; // Меняем локаль
    }
  },
  template: `
    <div>
      <h1>{{ $t('welcome') }}</h1>
      <button @click="switchLocale">{{ $t('changeLocale') }}</button>
    </div>
  `
});
Описание кода
Импорт библиотеки: Мы импортируем Vue и VueI18n, а затем устанавливаем Vue I18n как плагин.
Определение сообщений: Создается объект messages, содержащий переводы для каждого текста в ваших компонентах.
Создание экземпляра VueI18n: Мы создаем экземпляр i18n, указывая начальную локаль и доступные переводы.
Создание Vue-приложения: Здесь мы добавляем метод switchLocale, который будет переключать локаль между английским и русским языками.
Использование перевода: При помощи {{ $t('welcome') }} мы выводим текст в зависимости от текущей локали.
Заключение
Теперь вы знаете, как реализовать смену локализации в вашем Vue-приложении с помощью Vue I18n. Это позволяет вашему приложению поддерживать несколько языков и адаптироваться к различным пользователям. С помощью этой библиотеки вы сможете легко расширять локализацию в вашем проекте и добавлять новые языки по мере необходимости.

Предыдущий вопрос
Как цепочить фильтры в Vue 2?
Следующий вопрос
Как решить циклические зависимости между компонентами?
Содержание:
Установка Vue I18n
Основная настройка Vue I18n
Описание кода
Заключение
Редактировать
Вопросы
Вопросы по HTML
Вопросы по CSS
Вопросы по JS
Вопросы по TS
Вопросы по React
Вопросы по Vue
Вопросы по Angular
Вопросы по Nuxt
Вопросы по Nest.js
Вопросы по Node.js
Вопросы по Docker
Вопросы по Git
Вопросы по Веб-разработке
Тесты
Тесты по HTML
Тесты по CSS
Тесты по JS
Тесты по TS
Тесты по React
Тесты по Vue
Тесты по Angular
Тесты по Nuxt
Тесты по Nest.js
Тесты по Node.js
Тесты по Docker
Тесты по Git
Задачи
Задачи по JS
Тренажер вопросов
Frontend
© 2026 Все права защищены
Политика конфиденциальности
Согласие на обработку персональных данных


Frontend
Вопросы
Тренажер вопросов
Тесты
Задачи
Поиск по сайту
K
Вопросы по Vue
Как получить доступ к глобальным свойствам функциональных компонентов?
Как получить доступ к локальным плагинам в проекте?
Как получить доступ к родительскому экземпляру?
Как получить доступ к корневому экземпляру?
Как применить линтинг для CSS?
Какие проблемы могут возникнуть при обнаружении изменений в массивах?
Какова структура фабрики асинхронных компонентов?
Что такое асинхронные компоненты?
Рекомендуется ли использовать async для вычисляемых свойств?
Как выполнять асинхронные операции?
Какова цель опции browserslist?
Как цепочить фильтры в Vue 2?
Как изменить локализацию в Vue?
Как решить циклические зависимости между компонентами?
Как объединить локальные вычисляемые свойства с помощником mapState?
Зачем нужны комментарии во vue?
Как сделать commit с payload?
Как передать данные от дочернего компонента к родительскому с помощью событий?
Что вы имеете в виду под контекстом компонента для слотов?
Как собрать действия?
Что такое Composition API?
Можно ли использовать вычисляемое свойство в другом вычисляемом свойстве?
Что такое условные директивы?
Как добиться условной группы элементов?
Объясните структуру createElement с аргументами
Какие существуют способы создания фильтров в Vue 2?
Как создать функциональные компоненты с использованием vue-loader?
Как создать функции из слотов?
Как создать плагин?
Как создать реактивные объекты
Как создать поведение плагинов пользовательского интерфейса?
Что такое извлечение CSS?
Как использовать CSS-модули в Vue.js?
Могу ли я использовать CSS-модули для препроцессоров?
Что такое пользовательские блоки?
Что такое пользовательские директивы?
Что такое пользовательское форматирование?
Можно ли использовать пользовательское имя инъекции для CSS-модулей?
Как определить пользовательские псевдонимы модификаторов клавиш?
Какие стратегии слияния пользовательских опций?
Как настроить директиву v-model для компонента?
Каков поток данных для props?
Как реализовать локализацию даты и времени?
Как использовать глубокие селекторы?
Каково поведение пространства имен по умолчанию в Vuex?
Какова основная разница между методом и вычисляемым свойством?
В чем разница между shallowRef и markRaw в Vue 3?
В чем разница между VueJS и ReactJS?
Каковы различия между мутациями и действиями в Vuex?
Какие существуют различные сборки Vue.js?
Каковы аргументы хуков директивы?
Можно ли отправить действие с использованием payload или объекта?
Как вызвать действия (dispatch actions)?
Как диспатчить действия в компонентах?
Как отобразить состояние хранилища в компонентах vue?
Что произойдет, если использовать дублирующиеся имена полей?
Как можно написать дублирующиеся виртуальные узлы в компоненте?
Что такое динамические компоненты?
Что такое динамическое сопоставление маршрутов?
Как узнать версию VueJS, используя API?
Какова разница между полными и только runtime сборками Vue?
Что такое сокращенная запись функций в хуках директив?
Что такое функциональные компоненты?
Что такое глобальные миксины?
Что такое глобальная регистрация компонентов?
Как обрабатывать множественное число?
Какова цель API hotUpdate в хранилище Vuex?
Как проводить тестирование в Vue.js?
Как использовать плагин?
Как использовать обработчики событий
Как определить, выполняется ли код на клиенте или сервере?
Почему не стоит использовать директивы v-if и v-for на одном элементе?
Как я могу использовать импортированную константу в секции шаблона?
Как инжектировать store в дочерние компоненты?
Что такое встроенные шаблоны?
Какова цель тега <keep-alive>?
Что такое модификаторы ключевых событий?
Могу ли я использовать локальные пресеты?
Зачем нужна локальная регистрация в Vue?
В чем разница между локальной и глобальной регистрацией в модульной системе?
Что такое помощник mapGetter?
Каковы стратегии слияния в миксинах Vue?
Что такое доступ к стилю методом?
Возможно ли смешивание локальных и глобальных стилей?
Как реализовать модель для пользовательских компонентов ввода?
Что такое локальное состояние модуля?
Какие модификаторы кнопок мыши поддерживаются?
Какова причина рекомендации использовать многословные названия компонентов?
Как добавить несколько новых слотов в один компонент?
Как мутировать состояние в плагинах?
Обязательно ли использовать константы для типов мутаций?
Что такое мутации в Vuex?
Что такое навигационные охранники в Vue Router?
Нужен ли промис для Vuex?
Что такое вложенные маршруты?
Как представить односторонний поток данных в Vuex?
Утекают ли стили родителя в дочерние компоненты в scoped CSS?
Как передать несколько значений директиве во Vue?
Как выполнять мутации в компонентах?
Что такое плагины и какие у них разные службы?
Какие возможные типы пропсов в Vue?
Что такое доступ к свойствам стилей?
Что такое props?
Каковы доступные валидации для props в Vue?
Какие возможные способы предоставить переходы?
Какова цель renderError?
Какой лучший способ перерисовать компонент?
Как сделать изменения параметров маршрутизатора реактивными?
Почему нельзя обновлять состояние напрямую?
Что такое рекурсивные компоненты?
В чем разница между ref и reactive в Vue 3?
Как зарегистрировать директивы локально?
Что такое удаленные пресеты?
Как удалить реактивность в Vue 3?
Что такое функция рендеринга?
В чем преимущества функции рендеринга по сравнению с шаблонами?
Нужно ли полностью заменять локальное состояние на Vuex?
Как повторно использовать элементы с атрибутом key?
Каково приоритет соответствия маршрутов?
Могу ли я использовать сборки времени выполнения для всех шаблонов?
Что такое Scoped CSS?
Какие сходства между VueJS и ReactJS?
Какие проблемы решают однокомпонентные файлы?
Нарушает ли использование одномодульных файлов (Single File Components) принцип разделения озабоченности?
Что такое единое дерево состояния?
Какие основные компоненты паттерна управления состоянием?
Какие правила сохранения состояния при горячей перезагрузке?
Могу ли я выполнять мутации непосредственно в строгом режиме?
Как стилизовать динамически сгенерированное содержимое, используя scoped CSS?
Могу ли я использовать стилизованные компоненты в Vue.js?
Какие особенности у stylelint?
Какие модификаторы поддерживаются в v-model?
Что делает Suspense в Vue 3?
Как синхронизировать текущий маршрут в Vuex хранилище?
Что делает Teleport в Vue 3?
Каковы эквиваленты шаблона в функциях рендеринга?
Как протестировать мутации?
Как протестировать свои геттеры?
Как вызвать наблюдателей при инициализации?
Как реализовать двустороннюю привязку данных в Vue?
Как использовать директиву v-for в шаблоне?
Как использовать директиву v-model с двунаправленным вычисляемым свойством?
Как использовать vue-router и привести пример?
Какова цель директивы v-for?
Как использовать директиву v-for с диапазоном?
Какова цель директивы v-on во Vue.js?
В чем разница между директивами v-show и v-if?
Какое поведение версий у плагинов-пресетов?
Каковы преимущества VueJS перед ReactJS?
В чем разница между VueJS и Angular?
Что такое Vue CLI?
Какие возможности предоставляет Vue CLI?
Что такое плагины в vue CLI?
Основная цель компилятора Vue.js?
Как обеспечить соответствие приложения Vue стандартам CSP?
Какие функции хуков предоставляет директива?
Какие модификаторы событий предоставляет Vue?
Что такое фильтры в Vue 2?
Что такое экземпляр Vue?
Какие методы жизненного цикла VueJS (vue 2 и vue 3)
Что такое лоадер Vue.js?
Можно ли передавать параметры для фильтров в Vue 2?
Что такое vue router и какие его особенности?
Что такое VueJS?
Основные особенности VueJS?
Что такое getters в Vuex?
Поддерживает ли Vuex горячую загрузку?
Что такое модули в Vuex?
Каковы подводные камни мутаций Vuex?
Что такое неймспейсы в Vuex?
Что такое плагин Vuex?
Что такое Vuex Store?
Каковы отличия между хранилищем Vuex и обычным глобальным объектом?
Структура приложения Vuex?
Что такое watchEffect в Vue 3?
Как отслеживать изменения вложенных данных?
Как отслеживать изменения объекта маршрута?
Что такое миксины?
Что такое слоты в Vue?
Что такое вспомогательный метод mapState?
Когда компоненту нужен единственный корневой элемент?
Когда стоит повторно использовать модули?
Почему data компонента должен быть функцией?
Почему мутации должны быть синхронными?
Зачем нужен атрибут key в директиве v-for?
Что такое X Templates?
Главная
/
Вопросы
/
Вопросы по Vue
/
Как цепочить фильтры в Vue 2?
Как цепочить фильтры в Vue 2?
Vue.js предоставляет возможность использовать фильтры для форматирования данных непосредственно в шаблонах. Но что делать, если вам нужно применить несколько фильтров к одному и тому же значению? В этой статье мы рассмотрим, как цепочить фильтры в Vue 2.

Основы фильтров
Для начала, давайте посмотрим, как создаются и используются фильтры в Vue. Фильтры — это функции, которые могут быть применены к данным, выводимым в шаблонах. Вы можете создать фильтр и использовать его следующим образом:

// Определение фильтра
Vue.filter('currency', function (value) {
  return '$' + value.toFixed(2);
});

// Использование фильтра в шаблоне
<div>{{ price | currency }}</div>
В этом примере мы создали фильтр currency, который форматирует число как валюту.

Цепочка фильтров
Чтобы использовать несколько фильтров подряд, вы можете просто добавлять их один за другим через символ | в вашем шаблоне. Например:

// Определение второго фильтра
Vue.filter('exclamation', function (value) {
  return value + '!';
});

// Использование нескольких фильтров
<div>{{ message | currency | exclamation }}</div>
В этом примере вы сначала применяете фильтр currency, чтобы форматировать message как валюту, а затем фильтр exclamation, чтобы добавить восклицательный знак.

Пример использования
Ниже представлен полный пример:

<!DOCTYPE html>
<html>
<head>
    <title>Vue Chain Filters Example</title>
    <script src="https://cdn.jsdelivr.net/npm/vue@2"></script>
</head>
<body>
    <div id="app">
        <p>Цена: {{ price | currency | exclamation }}</p>
    </div>

    <script>
        Vue.filter('currency', function (value) {
            return '$' + value.toFixed(2);
        });

        Vue.filter('exclamation', function (value) {
            return value + '!';
        });

        new Vue({
            el: '#app',
            data: {
                price: 23.456
            }
        });
    </script>
</body>
</html>
Особенности и советы
Порядок фильтров: Обратите внимание, что порядок применения фильтров имеет значение. Вы всегда должны учитывать, как данные будут изменяться на каждом этапе.
Производительность: Фильтры не являются вычисляемыми свойствами, и они не кешируются. Если ваши фильтры будут вызываться часто, это может сказаться на производительности. В таких случаях лучше использовать вычисляемые свойства.
Применение: Фильтры чаще всего используются для форматирования. Если вам нужно более сложное поведение, подумайте о создании методов или вычисляемых свойств.
Теперь, когда вы знаете, как цепочить фильтры в Vue 2, вы можете более гибко управлять выводом данных в ваших приложениях!

Предыдущий вопрос
Какова цель опции browserslist?
Следующий вопрос
Как изменить локализацию в Vue?
Содержание:
Основы фильтров
Цепочка фильтров
Пример использования
Особенности и советы
Редактировать
Вопросы
Вопросы по HTML
Вопросы по CSS
Вопросы по JS
Вопросы по TS
Вопросы по React
Вопросы по Vue
Вопросы по Angular
Вопросы по Nuxt
Вопросы по Nest.js
Вопросы по Node.js
Вопросы по Docker
Вопросы по Git
Вопросы по Веб-разработке
Тесты
Тесты по HTML
Тесты по CSS
Тесты по JS
Тесты по TS
Тесты по React
Тесты по Vue
Тесты по Angular
Тесты по Nuxt
Тесты по Nest.js
Тесты по Node.js
Тесты по Docker
Тесты по Git
Задачи
Задачи по JS
Тренажер вопросов
Frontend
© 2026 Все права защищены
Политика конфиденциальности
Согласие на обработку персональных данных


Frontend
Вопросы
Тренажер вопросов
Тесты
Задачи
Поиск по сайту
K
Вопросы по Vue
Как получить доступ к глобальным свойствам функциональных компонентов?
Как получить доступ к локальным плагинам в проекте?
Как получить доступ к родительскому экземпляру?
Как получить доступ к корневому экземпляру?
Как применить линтинг для CSS?
Какие проблемы могут возникнуть при обнаружении изменений в массивах?
Какова структура фабрики асинхронных компонентов?
Что такое асинхронные компоненты?
Рекомендуется ли использовать async для вычисляемых свойств?
Как выполнять асинхронные операции?
Какова цель опции browserslist?
Как цепочить фильтры в Vue 2?
Как изменить локализацию в Vue?
Как решить циклические зависимости между компонентами?
Как объединить локальные вычисляемые свойства с помощником mapState?
Зачем нужны комментарии во vue?
Как сделать commit с payload?
Как передать данные от дочернего компонента к родительскому с помощью событий?
Что вы имеете в виду под контекстом компонента для слотов?
Как собрать действия?
Что такое Composition API?
Можно ли использовать вычисляемое свойство в другом вычисляемом свойстве?
Что такое условные директивы?
Как добиться условной группы элементов?
Объясните структуру createElement с аргументами
Какие существуют способы создания фильтров в Vue 2?
Как создать функциональные компоненты с использованием vue-loader?
Как создать функции из слотов?
Как создать плагин?
Как создать реактивные объекты
Как создать поведение плагинов пользовательского интерфейса?
Что такое извлечение CSS?
Как использовать CSS-модули в Vue.js?
Могу ли я использовать CSS-модули для препроцессоров?
Что такое пользовательские блоки?
Что такое пользовательские директивы?
Что такое пользовательское форматирование?
Можно ли использовать пользовательское имя инъекции для CSS-модулей?
Как определить пользовательские псевдонимы модификаторов клавиш?
Какие стратегии слияния пользовательских опций?
Как настроить директиву v-model для компонента?
Каков поток данных для props?
Как реализовать локализацию даты и времени?
Как использовать глубокие селекторы?
Каково поведение пространства имен по умолчанию в Vuex?
Какова основная разница между методом и вычисляемым свойством?
В чем разница между shallowRef и markRaw в Vue 3?
В чем разница между VueJS и ReactJS?
Каковы различия между мутациями и действиями в Vuex?
Какие существуют различные сборки Vue.js?
Каковы аргументы хуков директивы?
Можно ли отправить действие с использованием payload или объекта?
Как вызвать действия (dispatch actions)?
Как диспатчить действия в компонентах?
Как отобразить состояние хранилища в компонентах vue?
Что произойдет, если использовать дублирующиеся имена полей?
Как можно написать дублирующиеся виртуальные узлы в компоненте?
Что такое динамические компоненты?
Что такое динамическое сопоставление маршрутов?
Как узнать версию VueJS, используя API?
Какова разница между полными и только runtime сборками Vue?
Что такое сокращенная запись функций в хуках директив?
Что такое функциональные компоненты?
Что такое глобальные миксины?
Что такое глобальная регистрация компонентов?
Как обрабатывать множественное число?
Какова цель API hotUpdate в хранилище Vuex?
Как проводить тестирование в Vue.js?
Как использовать плагин?
Как использовать обработчики событий
Как определить, выполняется ли код на клиенте или сервере?
Почему не стоит использовать директивы v-if и v-for на одном элементе?
Как я могу использовать импортированную константу в секции шаблона?
Как инжектировать store в дочерние компоненты?
Что такое встроенные шаблоны?
Какова цель тега <keep-alive>?
Что такое модификаторы ключевых событий?
Могу ли я использовать локальные пресеты?
Зачем нужна локальная регистрация в Vue?
В чем разница между локальной и глобальной регистрацией в модульной системе?
Что такое помощник mapGetter?
Каковы стратегии слияния в миксинах Vue?
Что такое доступ к стилю методом?
Возможно ли смешивание локальных и глобальных стилей?
Как реализовать модель для пользовательских компонентов ввода?
Что такое локальное состояние модуля?
Какие модификаторы кнопок мыши поддерживаются?
Какова причина рекомендации использовать многословные названия компонентов?
Как добавить несколько новых слотов в один компонент?
Как мутировать состояние в плагинах?
Обязательно ли использовать константы для типов мутаций?
Что такое мутации в Vuex?
Что такое навигационные охранники в Vue Router?
Нужен ли промис для Vuex?
Что такое вложенные маршруты?
Как представить односторонний поток данных в Vuex?
Утекают ли стили родителя в дочерние компоненты в scoped CSS?
Как передать несколько значений директиве во Vue?
Как выполнять мутации в компонентах?
Что такое плагины и какие у них разные службы?
Какие возможные типы пропсов в Vue?
Что такое доступ к свойствам стилей?
Что такое props?
Каковы доступные валидации для props в Vue?
Какие возможные способы предоставить переходы?
Какова цель renderError?
Какой лучший способ перерисовать компонент?
Как сделать изменения параметров маршрутизатора реактивными?
Почему нельзя обновлять состояние напрямую?
Что такое рекурсивные компоненты?
В чем разница между ref и reactive в Vue 3?
Как зарегистрировать директивы локально?
Что такое удаленные пресеты?
Как удалить реактивность в Vue 3?
Что такое функция рендеринга?
В чем преимущества функции рендеринга по сравнению с шаблонами?
Нужно ли полностью заменять локальное состояние на Vuex?
Как повторно использовать элементы с атрибутом key?
Каково приоритет соответствия маршрутов?
Могу ли я использовать сборки времени выполнения для всех шаблонов?
Что такое Scoped CSS?
Какие сходства между VueJS и ReactJS?
Какие проблемы решают однокомпонентные файлы?
Нарушает ли использование одномодульных файлов (Single File Components) принцип разделения озабоченности?
Что такое единое дерево состояния?
Какие основные компоненты паттерна управления состоянием?
Какие правила сохранения состояния при горячей перезагрузке?
Могу ли я выполнять мутации непосредственно в строгом режиме?
Как стилизовать динамически сгенерированное содержимое, используя scoped CSS?
Могу ли я использовать стилизованные компоненты в Vue.js?
Какие особенности у stylelint?
Какие модификаторы поддерживаются в v-model?
Что делает Suspense в Vue 3?
Как синхронизировать текущий маршрут в Vuex хранилище?
Что делает Teleport в Vue 3?
Каковы эквиваленты шаблона в функциях рендеринга?
Как протестировать мутации?
Как протестировать свои геттеры?
Как вызвать наблюдателей при инициализации?
Как реализовать двустороннюю привязку данных в Vue?
Как использовать директиву v-for в шаблоне?
Как использовать директиву v-model с двунаправленным вычисляемым свойством?
Как использовать vue-router и привести пример?
Какова цель директивы v-for?
Как использовать директиву v-for с диапазоном?
Какова цель директивы v-on во Vue.js?
В чем разница между директивами v-show и v-if?
Какое поведение версий у плагинов-пресетов?
Каковы преимущества VueJS перед ReactJS?
В чем разница между VueJS и Angular?
Что такое Vue CLI?
Какие возможности предоставляет Vue CLI?
Что такое плагины в vue CLI?
Основная цель компилятора Vue.js?
Как обеспечить соответствие приложения Vue стандартам CSP?
Какие функции хуков предоставляет директива?
Какие модификаторы событий предоставляет Vue?
Что такое фильтры в Vue 2?
Что такое экземпляр Vue?
Какие методы жизненного цикла VueJS (vue 2 и vue 3)
Что такое лоадер Vue.js?
Можно ли передавать параметры для фильтров в Vue 2?
Что такое vue router и какие его особенности?
Что такое VueJS?
Основные особенности VueJS?
Что такое getters в Vuex?
Поддерживает ли Vuex горячую загрузку?
Что такое модули в Vuex?
Каковы подводные камни мутаций Vuex?
Что такое неймспейсы в Vuex?
Что такое плагин Vuex?
Что такое Vuex Store?
Каковы отличия между хранилищем Vuex и обычным глобальным объектом?
Структура приложения Vuex?
Что такое watchEffect в Vue 3?
Как отслеживать изменения вложенных данных?
Как отслеживать изменения объекта маршрута?
Что такое миксины?
Что такое слоты в Vue?
Что такое вспомогательный метод mapState?
Когда компоненту нужен единственный корневой элемент?
Когда стоит повторно использовать модули?
Почему data компонента должен быть функцией?
Почему мутации должны быть синхронными?
Зачем нужен атрибут key в директиве v-for?
Что такое X Templates?
Главная
/
Вопросы
/
Вопросы по Vue
/
Какова цель опции browserslist?
Какова цель опции browserslist?
browserslist — это конфигурация, используемая в различных инструментах для фронтенд-разработки, таких как Babel, Autoprefixer и ESLint. Она позволяет указать, какие браузеры (и их версии) ваш проект должен поддерживать. Это особенно важно для обеспечения кросс-браузерной совместимости вашего приложения и эффективного использования технологий.

Зачем нужно использовать browserslist?
Совместимость: Озаботиться тем, чтобы ваш код работал во всех поддерживаемых браузерах, значит обеспечить пользователям лучший опыт.
Автоматизация: Инструменты сборки, такие как Babel и Autoprefixer, используют эту информацию для автоматического добавления необходимого кода и префиксов, чтобы обеспечить поддержку указанных браузеров.
Обновляемость: Если новые версии браузеров появляются, вы можете легко обновить список поддерживаемых браузеров, не меняя всю кодовую базу.
Как настроить browserslist?
Конфигурация browserslist может быть указана в разных местах вашего проекта:

В package.json
В отдельном файле browserslist
Пример в package.json
{
  "browserslist": [
    "> 0.5%",
    "last 2 versions",
    "Firefox ESR",
    "not dead"
  ]
}
В этом примере:

> 0.5% обозначает, что ваш проект поддерживает браузеры, которые имеют более 0.5% доли на рынке.
last 2 versions означает последние две версии каждого браузера.
Firefox ESR добавляет поддержку для расширенной службы поддержки Firefox.
not dead исключает браузеры, которые больше не поддерживаются.
Пример в отдельном файле
Вы также можете создать файл .browserslistrc в корне вашего проекта:

> 0.5%
last 2 versions
Firefox ESR
not dead
Как проверить, какие браузеры поддерживаются?
Вы можете использовать команду npx browserslist для отображения списков поддерживаемых браузеров на основе вашей конфигурации. Вот команда:

npx browserslist
При выполнении вы получите список браузеров, соответствующий вашей конфигурации.

Заключение
Опция browserslist является важным инструментом для обеспечения поддержки актуальных версий браузеров. Правильная настройка поможет избежать проблем с совместимостью и упростит работу с инструментами для фронтенд-разработки. Помните, что поддержка устаревших браузеров может ухудшить производительность и увеличить размеры выходного кода, поэтому разумно ограничивать ваши целевые платформы актуальными и популярными версиями браузеров.

Предыдущий вопрос
Как выполнять асинхронные операции?
Следующий вопрос
Как цепочить фильтры в Vue 2?
Содержание:
Зачем нужно использовать browserslist?
Как настроить browserslist?
Как проверить, какие браузеры поддерживаются?
Заключение
Редактировать
Вопросы
Вопросы по HTML
Вопросы по CSS
Вопросы по JS
Вопросы по TS
Вопросы по React
Вопросы по Vue
Вопросы по Angular
Вопросы по Nuxt
Вопросы по Nest.js
Вопросы по Node.js
Вопросы по Docker
Вопросы по Git
Вопросы по Веб-разработке
Тесты
Тесты по HTML
Тесты по CSS
Тесты по JS
Тесты по TS
Тесты по React
Тесты по Vue
Тесты по Angular
Тесты по Nuxt
Тесты по Nest.js
Тесты по Node.js
Тесты по Docker
Тесты по Git
Задачи
Задачи по JS
Тренажер вопросов
Frontend
© 2026 Все права защищены
Политика конфиденциальности
Согласие на обработку персональных данных


Frontend
Вопросы
Тренажер вопросов
Тесты
Задачи
Поиск по сайту
K
Вопросы по Vue
Как получить доступ к глобальным свойствам функциональных компонентов?
Как получить доступ к локальным плагинам в проекте?
Как получить доступ к родительскому экземпляру?
Как получить доступ к корневому экземпляру?
Как применить линтинг для CSS?
Какие проблемы могут возникнуть при обнаружении изменений в массивах?
Какова структура фабрики асинхронных компонентов?
Что такое асинхронные компоненты?
Рекомендуется ли использовать async для вычисляемых свойств?
Как выполнять асинхронные операции?
Какова цель опции browserslist?
Как цепочить фильтры в Vue 2?
Как изменить локализацию в Vue?
Как решить циклические зависимости между компонентами?
Как объединить локальные вычисляемые свойства с помощником mapState?
Зачем нужны комментарии во vue?
Как сделать commit с payload?
Как передать данные от дочернего компонента к родительскому с помощью событий?
Что вы имеете в виду под контекстом компонента для слотов?
Как собрать действия?
Что такое Composition API?
Можно ли использовать вычисляемое свойство в другом вычисляемом свойстве?
Что такое условные директивы?
Как добиться условной группы элементов?
Объясните структуру createElement с аргументами
Какие существуют способы создания фильтров в Vue 2?
Как создать функциональные компоненты с использованием vue-loader?
Как создать функции из слотов?
Как создать плагин?
Как создать реактивные объекты
Как создать поведение плагинов пользовательского интерфейса?
Что такое извлечение CSS?
Как использовать CSS-модули в Vue.js?
Могу ли я использовать CSS-модули для препроцессоров?
Что такое пользовательские блоки?
Что такое пользовательские директивы?
Что такое пользовательское форматирование?
Можно ли использовать пользовательское имя инъекции для CSS-модулей?
Как определить пользовательские псевдонимы модификаторов клавиш?
Какие стратегии слияния пользовательских опций?
Как настроить директиву v-model для компонента?
Каков поток данных для props?
Как реализовать локализацию даты и времени?
Как использовать глубокие селекторы?
Каково поведение пространства имен по умолчанию в Vuex?
Какова основная разница между методом и вычисляемым свойством?
В чем разница между shallowRef и markRaw в Vue 3?
В чем разница между VueJS и ReactJS?
Каковы различия между мутациями и действиями в Vuex?
Какие существуют различные сборки Vue.js?
Каковы аргументы хуков директивы?
Можно ли отправить действие с использованием payload или объекта?
Как вызвать действия (dispatch actions)?
Как диспатчить действия в компонентах?
Как отобразить состояние хранилища в компонентах vue?
Что произойдет, если использовать дублирующиеся имена полей?
Как можно написать дублирующиеся виртуальные узлы в компоненте?
Что такое динамические компоненты?
Что такое динамическое сопоставление маршрутов?
Как узнать версию VueJS, используя API?
Какова разница между полными и только runtime сборками Vue?
Что такое сокращенная запись функций в хуках директив?
Что такое функциональные компоненты?
Что такое глобальные миксины?
Что такое глобальная регистрация компонентов?
Как обрабатывать множественное число?
Какова цель API hotUpdate в хранилище Vuex?
Как проводить тестирование в Vue.js?
Как использовать плагин?
Как использовать обработчики событий
Как определить, выполняется ли код на клиенте или сервере?
Почему не стоит использовать директивы v-if и v-for на одном элементе?
Как я могу использовать импортированную константу в секции шаблона?
Как инжектировать store в дочерние компоненты?
Что такое встроенные шаблоны?
Какова цель тега <keep-alive>?
Что такое модификаторы ключевых событий?
Могу ли я использовать локальные пресеты?
Зачем нужна локальная регистрация в Vue?
В чем разница между локальной и глобальной регистрацией в модульной системе?
Что такое помощник mapGetter?
Каковы стратегии слияния в миксинах Vue?
Что такое доступ к стилю методом?
Возможно ли смешивание локальных и глобальных стилей?
Как реализовать модель для пользовательских компонентов ввода?
Что такое локальное состояние модуля?
Какие модификаторы кнопок мыши поддерживаются?
Какова причина рекомендации использовать многословные названия компонентов?
Как добавить несколько новых слотов в один компонент?
Как мутировать состояние в плагинах?
Обязательно ли использовать константы для типов мутаций?
Что такое мутации в Vuex?
Что такое навигационные охранники в Vue Router?
Нужен ли промис для Vuex?
Что такое вложенные маршруты?
Как представить односторонний поток данных в Vuex?
Утекают ли стили родителя в дочерние компоненты в scoped CSS?
Как передать несколько значений директиве во Vue?
Как выполнять мутации в компонентах?
Что такое плагины и какие у них разные службы?
Какие возможные типы пропсов в Vue?
Что такое доступ к свойствам стилей?
Что такое props?
Каковы доступные валидации для props в Vue?
Какие возможные способы предоставить переходы?
Какова цель renderError?
Какой лучший способ перерисовать компонент?
Как сделать изменения параметров маршрутизатора реактивными?
Почему нельзя обновлять состояние напрямую?
Что такое рекурсивные компоненты?
В чем разница между ref и reactive в Vue 3?
Как зарегистрировать директивы локально?
Что такое удаленные пресеты?
Как удалить реактивность в Vue 3?
Что такое функция рендеринга?
В чем преимущества функции рендеринга по сравнению с шаблонами?
Нужно ли полностью заменять локальное состояние на Vuex?
Как повторно использовать элементы с атрибутом key?
Каково приоритет соответствия маршрутов?
Могу ли я использовать сборки времени выполнения для всех шаблонов?
Что такое Scoped CSS?
Какие сходства между VueJS и ReactJS?
Какие проблемы решают однокомпонентные файлы?
Нарушает ли использование одномодульных файлов (Single File Components) принцип разделения озабоченности?
Что такое единое дерево состояния?
Какие основные компоненты паттерна управления состоянием?
Какие правила сохранения состояния при горячей перезагрузке?
Могу ли я выполнять мутации непосредственно в строгом режиме?
Как стилизовать динамически сгенерированное содержимое, используя scoped CSS?
Могу ли я использовать стилизованные компоненты в Vue.js?
Какие особенности у stylelint?
Какие модификаторы поддерживаются в v-model?
Что делает Suspense в Vue 3?
Как синхронизировать текущий маршрут в Vuex хранилище?
Что делает Teleport в Vue 3?
Каковы эквиваленты шаблона в функциях рендеринга?
Как протестировать мутации?
Как протестировать свои геттеры?
Как вызвать наблюдателей при инициализации?
Как реализовать двустороннюю привязку данных в Vue?
Как использовать директиву v-for в шаблоне?
Как использовать директиву v-model с двунаправленным вычисляемым свойством?
Как использовать vue-router и привести пример?
Какова цель директивы v-for?
Как использовать директиву v-for с диапазоном?
Какова цель директивы v-on во Vue.js?
В чем разница между директивами v-show и v-if?
Какое поведение версий у плагинов-пресетов?
Каковы преимущества VueJS перед ReactJS?
В чем разница между VueJS и Angular?
Что такое Vue CLI?
Какие возможности предоставляет Vue CLI?
Что такое плагины в vue CLI?
Основная цель компилятора Vue.js?
Как обеспечить соответствие приложения Vue стандартам CSP?
Какие функции хуков предоставляет директива?
Какие модификаторы событий предоставляет Vue?
Что такое фильтры в Vue 2?
Что такое экземпляр Vue?
Какие методы жизненного цикла VueJS (vue 2 и vue 3)
Что такое лоадер Vue.js?
Можно ли передавать параметры для фильтров в Vue 2?
Что такое vue router и какие его особенности?
Что такое VueJS?
Основные особенности VueJS?
Что такое getters в Vuex?
Поддерживает ли Vuex горячую загрузку?
Что такое модули в Vuex?
Каковы подводные камни мутаций Vuex?
Что такое неймспейсы в Vuex?
Что такое плагин Vuex?
Что такое Vuex Store?
Каковы отличия между хранилищем Vuex и обычным глобальным объектом?
Структура приложения Vuex?
Что такое watchEffect в Vue 3?
Как отслеживать изменения вложенных данных?
Как отслеживать изменения объекта маршрута?
Что такое миксины?
Что такое слоты в Vue?
Что такое вспомогательный метод mapState?
Когда компоненту нужен единственный корневой элемент?
Когда стоит повторно использовать модули?
Почему data компонента должен быть функцией?
Почему мутации должны быть синхронными?
Зачем нужен атрибут key в директиве v-for?
Что такое X Templates?
Главная
/
Вопросы
/
Вопросы по Vue
/
Как выполнять асинхронные операции?
Как выполнять асинхронные операции?
Асинхронные операции в JavaScript, а следовательно и в Vue.js, позволяют выполнять длительные задачи (например, запросы к серверу) без блокировки основного потока выполнения. Это особенно важно для обеспечения отзывчивости пользовательского интерфейса.

Основные методы обработки асинхронных операций
1. Промисы (Promises)
Промисы — это объекты, представляющие значение, которое может быть доступно сейчас, позже или никогда. Промисы позволяют обрабатывать результаты асинхронных операций.

Пример использования промиса:
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = { message: "Данные получены!" };
      resolve(data);
      // reject("Ошибка получения данных");
    }, 2000);
  });
}

fetchData()
  .then(response => {
    console.log(response.message);
  })
  .catch(error => {
    console.error(error);
  });
В этом примере функция fetchData возвращает промис, который после задержки в 2 секунды либо возвращает данные, либо вызывает ошибку.

2. Async/Await
async и await — это синтаксическийSugar-перспектива для работы с промисами, который делает код асинхронным и более читаемым.

Пример использования async/await:
async function getData() {
  try {
    const response = await fetchData();
    console.log(response.message);
  } catch (error) {
    console.error(error);
  }
}

getData();
В этом примере мы используем async перед функцией getData, чтобы объявить её асинхронной. Внутри этой функции мы используем await, чтобы "подождать" результат выполнения fetchData(), тем самым не блокируя обработку остальных операций.

Обработка асинхронных операций в Vue.js
В Vue.js асинхронные операции часто выполняются в методах компонентов или в хуках жизненного цикла.

Пример выполнения асинхронной операции в Vue компоненте:
<template>
  <div>
    <h1>{{ message }}</h1>
    <button @click="loadData">Загрузить данные</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "Пожалуйста, загрузите данные."
    }
  },
  methods: {
    async loadData() {
      try {
        const response = await fetchData();
        this.message = response.message;
      } catch (error) {
        this.message = "Ошибка при загрузке данных.";
        console.error(error);
      }
    }
  }
}
</script>
В этом примере в компоненте Vue добавлен метод loadData, который загружает данные при нажатии на кнопку. После получения данных значение message обновляется, и пользователь видит сообщение.

Заключение
Асинхронные операции в Vue.js позволяют делать приложения быстрыми и отзывчивыми. Используя промисы и синтаксис async/await, вы можете легко обрабатывать запросы и результаты операций, избегая блокировки основного потока выполнения. Главное — помнить о необходимости обработки ошибок для гарантии стабильной работы вашего приложения.

Предыдущий вопрос
Рекомендуется ли использовать async для вычисляемых свойств?
Следующий вопрос
Какова цель опции browserslist?
Содержание:
Основные методы обработки асинхронных операций
Обработка асинхронных операций в Vue.js
Заключение
Редактировать
Вопросы
Вопросы по HTML
Вопросы по CSS
Вопросы по JS
Вопросы по TS
Вопросы по React
Вопросы по Vue
Вопросы по Angular
Вопросы по Nuxt
Вопросы по Nest.js
Вопросы по Node.js
Вопросы по Docker
Вопросы по Git
Вопросы по Веб-разработке
Тесты
Тесты по HTML
Тесты по CSS
Тесты по JS
Тесты по TS
Тесты по React
Тесты по Vue
Тесты по Angular
Тесты по Nuxt
Тесты по Nest.js
Тесты по Node.js
Тесты по Docker
Тесты по Git
Задачи
Задачи по JS
Тренажер вопросов
Frontend
© 2026 Все права защищены
Политика конфиденциальности
Согласие на обработку персональных данных


Frontend
Вопросы
Тренажер вопросов
Тесты
Задачи
Поиск по сайту
K
Вопросы по Vue
Как получить доступ к глобальным свойствам функциональных компонентов?
Как получить доступ к локальным плагинам в проекте?
Как получить доступ к родительскому экземпляру?
Как получить доступ к корневому экземпляру?
Как применить линтинг для CSS?
Какие проблемы могут возникнуть при обнаружении изменений в массивах?
Какова структура фабрики асинхронных компонентов?
Что такое асинхронные компоненты?
Рекомендуется ли использовать async для вычисляемых свойств?
Как выполнять асинхронные операции?
Какова цель опции browserslist?
Как цепочить фильтры в Vue 2?
Как изменить локализацию в Vue?
Как решить циклические зависимости между компонентами?
Как объединить локальные вычисляемые свойства с помощником mapState?
Зачем нужны комментарии во vue?
Как сделать commit с payload?
Как передать данные от дочернего компонента к родительскому с помощью событий?
Что вы имеете в виду под контекстом компонента для слотов?
Как собрать действия?
Что такое Composition API?
Можно ли использовать вычисляемое свойство в другом вычисляемом свойстве?
Что такое условные директивы?
Как добиться условной группы элементов?
Объясните структуру createElement с аргументами
Какие существуют способы создания фильтров в Vue 2?
Как создать функциональные компоненты с использованием vue-loader?
Как создать функции из слотов?
Как создать плагин?
Как создать реактивные объекты
Как создать поведение плагинов пользовательского интерфейса?
Что такое извлечение CSS?
Как использовать CSS-модули в Vue.js?
Могу ли я использовать CSS-модули для препроцессоров?
Что такое пользовательские блоки?
Что такое пользовательские директивы?
Что такое пользовательское форматирование?
Можно ли использовать пользовательское имя инъекции для CSS-модулей?
Как определить пользовательские псевдонимы модификаторов клавиш?
Какие стратегии слияния пользовательских опций?
Как настроить директиву v-model для компонента?
Каков поток данных для props?
Как реализовать локализацию даты и времени?
Как использовать глубокие селекторы?
Каково поведение пространства имен по умолчанию в Vuex?
Какова основная разница между методом и вычисляемым свойством?
В чем разница между shallowRef и markRaw в Vue 3?
В чем разница между VueJS и ReactJS?
Каковы различия между мутациями и действиями в Vuex?
Какие существуют различные сборки Vue.js?
Каковы аргументы хуков директивы?
Можно ли отправить действие с использованием payload или объекта?
Как вызвать действия (dispatch actions)?
Как диспатчить действия в компонентах?
Как отобразить состояние хранилища в компонентах vue?
Что произойдет, если использовать дублирующиеся имена полей?
Как можно написать дублирующиеся виртуальные узлы в компоненте?
Что такое динамические компоненты?
Что такое динамическое сопоставление маршрутов?
Как узнать версию VueJS, используя API?
Какова разница между полными и только runtime сборками Vue?
Что такое сокращенная запись функций в хуках директив?
Что такое функциональные компоненты?
Что такое глобальные миксины?
Что такое глобальная регистрация компонентов?
Как обрабатывать множественное число?
Какова цель API hotUpdate в хранилище Vuex?
Как проводить тестирование в Vue.js?
Как использовать плагин?
Как использовать обработчики событий
Как определить, выполняется ли код на клиенте или сервере?
Почему не стоит использовать директивы v-if и v-for на одном элементе?
Как я могу использовать импортированную константу в секции шаблона?
Как инжектировать store в дочерние компоненты?
Что такое встроенные шаблоны?
Какова цель тега <keep-alive>?
Что такое модификаторы ключевых событий?
Могу ли я использовать локальные пресеты?
Зачем нужна локальная регистрация в Vue?
В чем разница между локальной и глобальной регистрацией в модульной системе?
Что такое помощник mapGetter?
Каковы стратегии слияния в миксинах Vue?
Что такое доступ к стилю методом?
Возможно ли смешивание локальных и глобальных стилей?
Как реализовать модель для пользовательских компонентов ввода?
Что такое локальное состояние модуля?
Какие модификаторы кнопок мыши поддерживаются?
Какова причина рекомендации использовать многословные названия компонентов?
Как добавить несколько новых слотов в один компонент?
Как мутировать состояние в плагинах?
Обязательно ли использовать константы для типов мутаций?
Что такое мутации в Vuex?
Что такое навигационные охранники в Vue Router?
Нужен ли промис для Vuex?
Что такое вложенные маршруты?
Как представить односторонний поток данных в Vuex?
Утекают ли стили родителя в дочерние компоненты в scoped CSS?
Как передать несколько значений директиве во Vue?
Как выполнять мутации в компонентах?
Что такое плагины и какие у них разные службы?
Какие возможные типы пропсов в Vue?
Что такое доступ к свойствам стилей?
Что такое props?
Каковы доступные валидации для props в Vue?
Какие возможные способы предоставить переходы?
Какова цель renderError?
Какой лучший способ перерисовать компонент?
Как сделать изменения параметров маршрутизатора реактивными?
Почему нельзя обновлять состояние напрямую?
Что такое рекурсивные компоненты?
В чем разница между ref и reactive в Vue 3?
Как зарегистрировать директивы локально?
Что такое удаленные пресеты?
Как удалить реактивность в Vue 3?
Что такое функция рендеринга?
В чем преимущества функции рендеринга по сравнению с шаблонами?
Нужно ли полностью заменять локальное состояние на Vuex?
Как повторно использовать элементы с атрибутом key?
Каково приоритет соответствия маршрутов?
Могу ли я использовать сборки времени выполнения для всех шаблонов?
Что такое Scoped CSS?
Какие сходства между VueJS и ReactJS?
Какие проблемы решают однокомпонентные файлы?
Нарушает ли использование одномодульных файлов (Single File Components) принцип разделения озабоченности?
Что такое единое дерево состояния?
Какие основные компоненты паттерна управления состоянием?
Какие правила сохранения состояния при горячей перезагрузке?
Могу ли я выполнять мутации непосредственно в строгом режиме?
Как стилизовать динамически сгенерированное содержимое, используя scoped CSS?
Могу ли я использовать стилизованные компоненты в Vue.js?
Какие особенности у stylelint?
Какие модификаторы поддерживаются в v-model?
Что делает Suspense в Vue 3?
Как синхронизировать текущий маршрут в Vuex хранилище?
Что делает Teleport в Vue 3?
Каковы эквиваленты шаблона в функциях рендеринга?
Как протестировать мутации?
Как протестировать свои геттеры?
Как вызвать наблюдателей при инициализации?
Как реализовать двустороннюю привязку данных в Vue?
Как использовать директиву v-for в шаблоне?
Как использовать директиву v-model с двунаправленным вычисляемым свойством?
Как использовать vue-router и привести пример?
Какова цель директивы v-for?
Как использовать директиву v-for с диапазоном?
Какова цель директивы v-on во Vue.js?
В чем разница между директивами v-show и v-if?
Какое поведение версий у плагинов-пресетов?
Каковы преимущества VueJS перед ReactJS?
В чем разница между VueJS и Angular?
Что такое Vue CLI?
Какие возможности предоставляет Vue CLI?
Что такое плагины в vue CLI?
Основная цель компилятора Vue.js?
Как обеспечить соответствие приложения Vue стандартам CSP?
Какие функции хуков предоставляет директива?
Какие модификаторы событий предоставляет Vue?
Что такое фильтры в Vue 2?
Что такое экземпляр Vue?
Какие методы жизненного цикла VueJS (vue 2 и vue 3)
Что такое лоадер Vue.js?
Можно ли передавать параметры для фильтров в Vue 2?
Что такое vue router и какие его особенности?
Что такое VueJS?
Основные особенности VueJS?
Что такое getters в Vuex?
Поддерживает ли Vuex горячую загрузку?
Что такое модули в Vuex?
Каковы подводные камни мутаций Vuex?
Что такое неймспейсы в Vuex?
Что такое плагин Vuex?
Что такое Vuex Store?
Каковы отличия между хранилищем Vuex и обычным глобальным объектом?
Структура приложения Vuex?
Что такое watchEffect в Vue 3?
Как отслеживать изменения вложенных данных?
Как отслеживать изменения объекта маршрута?
Что такое миксины?
Что такое слоты в Vue?
Что такое вспомогательный метод mapState?
Когда компоненту нужен единственный корневой элемент?
Когда стоит повторно использовать модули?
Почему data компонента должен быть функцией?
Почему мутации должны быть синхронными?
Зачем нужен атрибут key в директиве v-for?
Что такое X Templates?
Главная
/
Вопросы
/
Вопросы по Vue
/
Рекомендуется ли использовать async для вычисляемых свойств?
Рекомендуется ли использовать async для вычисляемых свойств?
В Vue.js вычисляемые свойства (computed properties) предназначены для вычисления и кэширования значений на основе реактивных данных. Они обычно являются синхронными, то есть возвращают результат мгновенно на основе текущих значений зависимых данных. Однако в некоторых случаях может возникнуть необходимость использовать асинхронный код внутри вычисляемых свойств. Давайте рассмотрим, почему это может быть не лучшей идеей.

Почему не стоит использовать async для вычисляемых свойств
Природа вычисляемых свойств: Основная задача вычисляемых свойств — возвращать значения немедленно. Если вы будете их объявлять как асинхронные, это нарушит ожидаемое поведение, поскольку computed не может ждать, пока будет выполнен асинхронный код. Вместо этого он вернет промис, и это может стать источником путаницы.
Проблемы с кэшем: Вычисляемые свойства кэшируют их результаты на основе зависимостей. Если ваш код асинхронный, он не сможет корректно кэшировать значения, так как результат может изменяться между вызовами.
Простота кода: Использовать асинхронный код в вычисляемых свойствах усложняет чтение и понимание кода. Это может запутать других разработчиков, которые читают ваш код.
Альтернативный подход
Если вам нужно получить данные асинхронно и использовать их в компоненте, лучше воспользоваться методами created или mounted, а также использовать реактивные свойства или методы. Рассмотрим пример:

<template>
  <div>
    <h1>Данные: {{ data }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: null,
    };
  },
  async created() {
    this.data = await this.fetchData();
  },
  methods: {
    async fetchData() {
      const response = await fetch('https://api.example.com/data');
      const result = await response.json();
      return result;
    },
  },
};
</script>
В этом примере мы загружаем данные асинхронно в методе created, а затем сохраняем их в реактивном свойстве data, которое может быть использовано в шаблоне. Такой подход позволяет сохранить удобство работы с реактивностью Vue и избежать сложностей, связанных с асинхронными вычисляемыми свойствами.

Заключение
Не рекомендуется использовать async в вычисляемых свойствах Vue. Это может привести к путанице и проблемам с кэшированием. Вместо этого используйте методы жизненного цикла компонента для загрузки данных асинхронно и сохранения их в реактивных свойствах.

Предыдущий вопрос
Что такое асинхронные компоненты?
Следующий вопрос
Как выполнять асинхронные операции?
Содержание:
Почему не стоит использовать async для вычисляемых свойств
Альтернативный подход
Заключение
Редактировать
Вопросы
Вопросы по HTML
Вопросы по CSS
Вопросы по JS
Вопросы по TS
Вопросы по React
Вопросы по Vue
Вопросы по Angular
Вопросы по Nuxt
Вопросы по Nest.js
Вопросы по Node.js
Вопросы по Docker
Вопросы по Git
Вопросы по Веб-разработке
Тесты
Тесты по HTML
Тесты по CSS
Тесты по JS
Тесты по TS
Тесты по React
Тесты по Vue
Тесты по Angular
Тесты по Nuxt
Тесты по Nest.js
Тесты по Node.js
Тесты по Docker
Тесты по Git
Задачи
Задачи по JS
Тренажер вопросов
Frontend
© 2026 Все права защищены
Политика конфиденциальности
Согласие на обработку персональных данных

  
Frontend
Вопросы
Тренажер вопросов
Тесты
Задачи
Поиск по сайту
K
Вопросы по Vue
Как получить доступ к глобальным свойствам функциональных компонентов?
Как получить доступ к локальным плагинам в проекте?
Как получить доступ к родительскому экземпляру?
Как получить доступ к корневому экземпляру?
Как применить линтинг для CSS?
Какие проблемы могут возникнуть при обнаружении изменений в массивах?
Какова структура фабрики асинхронных компонентов?
Что такое асинхронные компоненты?
Рекомендуется ли использовать async для вычисляемых свойств?
Как выполнять асинхронные операции?
Какова цель опции browserslist?
Как цепочить фильтры в Vue 2?
Как изменить локализацию в Vue?
Как решить циклические зависимости между компонентами?
Как объединить локальные вычисляемые свойства с помощником mapState?
Зачем нужны комментарии во vue?
Как сделать commit с payload?
Как передать данные от дочернего компонента к родительскому с помощью событий?
Что вы имеете в виду под контекстом компонента для слотов?
Как собрать действия?
Что такое Composition API?
Можно ли использовать вычисляемое свойство в другом вычисляемом свойстве?
Что такое условные директивы?
Как добиться условной группы элементов?
Объясните структуру createElement с аргументами
Какие существуют способы создания фильтров в Vue 2?
Как создать функциональные компоненты с использованием vue-loader?
Как создать функции из слотов?
Как создать плагин?
Как создать реактивные объекты
Как создать поведение плагинов пользовательского интерфейса?
Что такое извлечение CSS?
Как использовать CSS-модули в Vue.js?
Могу ли я использовать CSS-модули для препроцессоров?
Что такое пользовательские блоки?
Что такое пользовательские директивы?
Что такое пользовательское форматирование?
Можно ли использовать пользовательское имя инъекции для CSS-модулей?
Как определить пользовательские псевдонимы модификаторов клавиш?
Какие стратегии слияния пользовательских опций?
Как настроить директиву v-model для компонента?
Каков поток данных для props?
Как реализовать локализацию даты и времени?
Как использовать глубокие селекторы?
Каково поведение пространства имен по умолчанию в Vuex?
Какова основная разница между методом и вычисляемым свойством?
В чем разница между shallowRef и markRaw в Vue 3?
В чем разница между VueJS и ReactJS?
Каковы различия между мутациями и действиями в Vuex?
Какие существуют различные сборки Vue.js?
Каковы аргументы хуков директивы?
Можно ли отправить действие с использованием payload или объекта?
Как вызвать действия (dispatch actions)?
Как диспатчить действия в компонентах?
Как отобразить состояние хранилища в компонентах vue?
Что произойдет, если использовать дублирующиеся имена полей?
Как можно написать дублирующиеся виртуальные узлы в компоненте?
Что такое динамические компоненты?
Что такое динамическое сопоставление маршрутов?
Как узнать версию VueJS, используя API?
Какова разница между полными и только runtime сборками Vue?
Что такое сокращенная запись функций в хуках директив?
Что такое функциональные компоненты?
Что такое глобальные миксины?
Что такое глобальная регистрация компонентов?
Как обрабатывать множественное число?
Какова цель API hotUpdate в хранилище Vuex?
Как проводить тестирование в Vue.js?
Как использовать плагин?
Как использовать обработчики событий
Как определить, выполняется ли код на клиенте или сервере?
Почему не стоит использовать директивы v-if и v-for на одном элементе?
Как я могу использовать импортированную константу в секции шаблона?
Как инжектировать store в дочерние компоненты?
Что такое встроенные шаблоны?
Какова цель тега <keep-alive>?
Что такое модификаторы ключевых событий?
Могу ли я использовать локальные пресеты?
Зачем нужна локальная регистрация в Vue?
В чем разница между локальной и глобальной регистрацией в модульной системе?
Что такое помощник mapGetter?
Каковы стратегии слияния в миксинах Vue?
Что такое доступ к стилю методом?
Возможно ли смешивание локальных и глобальных стилей?
Как реализовать модель для пользовательских компонентов ввода?
Что такое локальное состояние модуля?
Какие модификаторы кнопок мыши поддерживаются?
Какова причина рекомендации использовать многословные названия компонентов?
Как добавить несколько новых слотов в один компонент?
Как мутировать состояние в плагинах?
Обязательно ли использовать константы для типов мутаций?
Что такое мутации в Vuex?
Что такое навигационные охранники в Vue Router?
Нужен ли промис для Vuex?
Что такое вложенные маршруты?
Как представить односторонний поток данных в Vuex?
Утекают ли стили родителя в дочерние компоненты в scoped CSS?
Как передать несколько значений директиве во Vue?
Как выполнять мутации в компонентах?
Что такое плагины и какие у них разные службы?
Какие возможные типы пропсов в Vue?
Что такое доступ к свойствам стилей?
Что такое props?
Каковы доступные валидации для props в Vue?
Какие возможные способы предоставить переходы?
Какова цель renderError?
Какой лучший способ перерисовать компонент?
Как сделать изменения параметров маршрутизатора реактивными?
Почему нельзя обновлять состояние напрямую?
Что такое рекурсивные компоненты?
В чем разница между ref и reactive в Vue 3?
Как зарегистрировать директивы локально?
Что такое удаленные пресеты?
Как удалить реактивность в Vue 3?
Что такое функция рендеринга?
В чем преимущества функции рендеринга по сравнению с шаблонами?
Нужно ли полностью заменять локальное состояние на Vuex?
Как повторно использовать элементы с атрибутом key?
Каково приоритет соответствия маршрутов?
Могу ли я использовать сборки времени выполнения для всех шаблонов?
Что такое Scoped CSS?
Какие сходства между VueJS и ReactJS?
Какие проблемы решают однокомпонентные файлы?
Нарушает ли использование одномодульных файлов (Single File Components) принцип разделения озабоченности?
Что такое единое дерево состояния?
Какие основные компоненты паттерна управления состоянием?
Какие правила сохранения состояния при горячей перезагрузке?
Могу ли я выполнять мутации непосредственно в строгом режиме?
Как стилизовать динамически сгенерированное содержимое, используя scoped CSS?
Могу ли я использовать стилизованные компоненты в Vue.js?
Какие особенности у stylelint?
Какие модификаторы поддерживаются в v-model?
Что делает Suspense в Vue 3?
Как синхронизировать текущий маршрут в Vuex хранилище?
Что делает Teleport в Vue 3?
Каковы эквиваленты шаблона в функциях рендеринга?
Как протестировать мутации?
Как протестировать свои геттеры?
Как вызвать наблюдателей при инициализации?
Как реализовать двустороннюю привязку данных в Vue?
Как использовать директиву v-for в шаблоне?
Как использовать директиву v-model с двунаправленным вычисляемым свойством?
Как использовать vue-router и привести пример?
Какова цель директивы v-for?
Как использовать директиву v-for с диапазоном?
Какова цель директивы v-on во Vue.js?
В чем разница между директивами v-show и v-if?
Какое поведение версий у плагинов-пресетов?
Каковы преимущества VueJS перед ReactJS?
В чем разница между VueJS и Angular?
Что такое Vue CLI?
Какие возможности предоставляет Vue CLI?
Что такое плагины в vue CLI?
Основная цель компилятора Vue.js?
Как обеспечить соответствие приложения Vue стандартам CSP?
Какие функции хуков предоставляет директива?
Какие модификаторы событий предоставляет Vue?
Что такое фильтры в Vue 2?
Что такое экземпляр Vue?
Какие методы жизненного цикла VueJS (vue 2 и vue 3)
Что такое лоадер Vue.js?
Можно ли передавать параметры для фильтров в Vue 2?
Что такое vue router и какие его особенности?
Что такое VueJS?
Основные особенности VueJS?
Что такое getters в Vuex?
Поддерживает ли Vuex горячую загрузку?
Что такое модули в Vuex?
Каковы подводные камни мутаций Vuex?
Что такое неймспейсы в Vuex?
Что такое плагин Vuex?
Что такое Vuex Store?
Каковы отличия между хранилищем Vuex и обычным глобальным объектом?
Структура приложения Vuex?
Что такое watchEffect в Vue 3?
Как отслеживать изменения вложенных данных?
Как отслеживать изменения объекта маршрута?
Что такое миксины?
Что такое слоты в Vue?
Что такое вспомогательный метод mapState?
Когда компоненту нужен единственный корневой элемент?
Когда стоит повторно использовать модули?
Почему data компонента должен быть функцией?
Почему мутации должны быть синхронными?
Зачем нужен атрибут key в директиве v-for?
Что такое X Templates?
Главная
/
Вопросы
/
Вопросы по Vue
/
Что такое асинхронные компоненты?
Что такое асинхронные компоненты?
Асинхронные компоненты — это мощный инструмент во фреймворке Vue.js, позволяющий загружать компоненты только тогда, когда они действительно нужны. Это помогает сократить размер начального пакета приложения и улучшить производительность.

Когда вы используете асинхронные компоненты, Vue создает компонент только в момент его использования, что предотвращает загрузку всех компонентов сразу, что может значительно снизить время загрузки приложения. Это особенно полезно в крупных приложениях, где может быть много различных компонентов.

Как создать асинхронный компонент
Для создания асинхронного компонента, вы можете использовать функцию defineAsyncComponent, которая доступна в Vue 3, или просто передать функцию, возвращающую промис в Vue 2. Рассмотрим оба подхода.

Пример с использованием Vue 3
// Импортируем необходимые инструменты из Vue
import { createApp, defineAsyncComponent } from 'vue';

// Создание асинхронного компонента
const AsyncComponent = defineAsyncComponent(() => {
    return new Promise((resolve) => {
        setTimeout(() => {
            // Импортируем компонент только через несколько секунд
            resolve(import('./MyComponent.vue'));
        }, 2000);
    });
});

// Создание приложения
const app = createApp({
    components: {
        AsyncComponent
    },
    template: `<div><h1>Асинхронный компонент</h1><AsyncComponent /></div>`
});

// Монтируем приложение
app.mount('#app');
В этом примере мы создаем асинхронный компонент, который загружается через 2 секунды. При этом он будет загружен только когда потребуется рендер страница с ним.

Пример с использованием Vue 2
В Vue 2 вы можете создать асинхронный компонент следующим образом:

// Создание асинхронного компонента
const AsyncComponent = () => ({
    // Загрузка компонента с помощью промиса
    component: import('./MyComponent.vue'),
    // Функция, которая возвращает предшествующий компонент
    loading: {
        template: '<p>Загрузка...</p>'
    },
    // Функция, которая возвращает компонент ошибок
    error: {
        template: '<p>Ошибка при загрузке компонента.</p>'
    },
    // Таймаут
    delay: 200,
    // Время до показа сообщения об ошибке
    timeout: 3000
});

// Создание приложения
new Vue({
    el: '#app',
    components: {
        AsyncComponent
    },
    template: `<div><h1>Асинхронный компонент</h1><AsyncComponent /></div>`
});
В этом коде асинхронный компонент будет загружаться по мере необходимости, и если компонент не загрузится в течение 3 секунд, появится сообщение об ошибке.

Преимущества асинхронных компонентов
Снижение времени загрузки: Компоненты загружаются по мере необходимости, что сокращает начальное время загрузки приложения.
Оптимизация использования ресурсов: Вы загружаете только те компоненты, которые нужны. Это экономит как память, так и сетевые ресурсы.
Улучшение пользовательского опыта: Показ "загрузки" или "ошибки" во время ожидания улучшает взаимодействие с пользователем и делает приложение более отзывчивым.
Использование асинхронных компонентов в Vue является отличным способом оптимизировать ваше приложение, особенно когда оно становится большим и сложным. Надеюсь, этот материал помог вам лучше понять, что такое асинхронные компоненты и как их использовать!

Предыдущий вопрос
Какова структура фабрики асинхронных компонентов?
Следующий вопрос
Рекомендуется ли использовать async для вычисляемых свойств?
Содержание:
Как создать асинхронный компонент
Преимущества асинхронных компонентов
Редактировать
Вопросы
Вопросы по HTML
Вопросы по CSS
Вопросы по JS
Вопросы по TS
Вопросы по React
Вопросы по Vue
Вопросы по Angular
Вопросы по Nuxt
Вопросы по Nest.js
Вопросы по Node.js
Вопросы по Docker
Вопросы по Git
Вопросы по Веб-разработке
Тесты
Тесты по HTML
Тесты по CSS
Тесты по JS
Тесты по TS
Тесты по React
Тесты по Vue
Тесты по Angular
Тесты по Nuxt
Тесты по Nest.js
Тесты по Node.js
Тесты по Docker
Тесты по Git
Задачи
Задачи по JS
Тренажер вопросов
Frontend
© 2026 Все права защищены
Политика конфиденциальности
Согласие на обработку персональных данных

  
Frontend
Вопросы
Тренажер вопросов
Тесты
Задачи
Поиск по сайту
K
Вопросы по Vue
Как получить доступ к глобальным свойствам функциональных компонентов?
Как получить доступ к локальным плагинам в проекте?
Как получить доступ к родительскому экземпляру?
Как получить доступ к корневому экземпляру?
Как применить линтинг для CSS?
Какие проблемы могут возникнуть при обнаружении изменений в массивах?
Какова структура фабрики асинхронных компонентов?
Что такое асинхронные компоненты?
Рекомендуется ли использовать async для вычисляемых свойств?
Как выполнять асинхронные операции?
Какова цель опции browserslist?
Как цепочить фильтры в Vue 2?
Как изменить локализацию в Vue?
Как решить циклические зависимости между компонентами?
Как объединить локальные вычисляемые свойства с помощником mapState?
Зачем нужны комментарии во vue?
Как сделать commit с payload?
Как передать данные от дочернего компонента к родительскому с помощью событий?
Что вы имеете в виду под контекстом компонента для слотов?
Как собрать действия?
Что такое Composition API?
Можно ли использовать вычисляемое свойство в другом вычисляемом свойстве?
Что такое условные директивы?
Как добиться условной группы элементов?
Объясните структуру createElement с аргументами
Какие существуют способы создания фильтров в Vue 2?
Как создать функциональные компоненты с использованием vue-loader?
Как создать функции из слотов?
Как создать плагин?
Как создать реактивные объекты
Как создать поведение плагинов пользовательского интерфейса?
Что такое извлечение CSS?
Как использовать CSS-модули в Vue.js?
Могу ли я использовать CSS-модули для препроцессоров?
Что такое пользовательские блоки?
Что такое пользовательские директивы?
Что такое пользовательское форматирование?
Можно ли использовать пользовательское имя инъекции для CSS-модулей?
Как определить пользовательские псевдонимы модификаторов клавиш?
Какие стратегии слияния пользовательских опций?
Как настроить директиву v-model для компонента?
Каков поток данных для props?
Как реализовать локализацию даты и времени?
Как использовать глубокие селекторы?
Каково поведение пространства имен по умолчанию в Vuex?
Какова основная разница между методом и вычисляемым свойством?
В чем разница между shallowRef и markRaw в Vue 3?
В чем разница между VueJS и ReactJS?
Каковы различия между мутациями и действиями в Vuex?
Какие существуют различные сборки Vue.js?
Каковы аргументы хуков директивы?
Можно ли отправить действие с использованием payload или объекта?
Как вызвать действия (dispatch actions)?
Как диспатчить действия в компонентах?
Как отобразить состояние хранилища в компонентах vue?
Что произойдет, если использовать дублирующиеся имена полей?
Как можно написать дублирующиеся виртуальные узлы в компоненте?
Что такое динамические компоненты?
Что такое динамическое сопоставление маршрутов?
Как узнать версию VueJS, используя API?
Какова разница между полными и только runtime сборками Vue?
Что такое сокращенная запись функций в хуках директив?
Что такое функциональные компоненты?
Что такое глобальные миксины?
Что такое глобальная регистрация компонентов?
Как обрабатывать множественное число?
Какова цель API hotUpdate в хранилище Vuex?
Как проводить тестирование в Vue.js?
Как использовать плагин?
Как использовать обработчики событий
Как определить, выполняется ли код на клиенте или сервере?
Почему не стоит использовать директивы v-if и v-for на одном элементе?
Как я могу использовать импортированную константу в секции шаблона?
Как инжектировать store в дочерние компоненты?
Что такое встроенные шаблоны?
Какова цель тега <keep-alive>?
Что такое модификаторы ключевых событий?
Могу ли я использовать локальные пресеты?
Зачем нужна локальная регистрация в Vue?
В чем разница между локальной и глобальной регистрацией в модульной системе?
Что такое помощник mapGetter?
Каковы стратегии слияния в миксинах Vue?
Что такое доступ к стилю методом?
Возможно ли смешивание локальных и глобальных стилей?
Как реализовать модель для пользовательских компонентов ввода?
Что такое локальное состояние модуля?
Какие модификаторы кнопок мыши поддерживаются?
Какова причина рекомендации использовать многословные названия компонентов?
Как добавить несколько новых слотов в один компонент?
Как мутировать состояние в плагинах?
Обязательно ли использовать константы для типов мутаций?
Что такое мутации в Vuex?
Что такое навигационные охранники в Vue Router?
Нужен ли промис для Vuex?
Что такое вложенные маршруты?
Как представить односторонний поток данных в Vuex?
Утекают ли стили родителя в дочерние компоненты в scoped CSS?
Как передать несколько значений директиве во Vue?
Как выполнять мутации в компонентах?
Что такое плагины и какие у них разные службы?
Какие возможные типы пропсов в Vue?
Что такое доступ к свойствам стилей?
Что такое props?
Каковы доступные валидации для props в Vue?
Какие возможные способы предоставить переходы?
Какова цель renderError?
Какой лучший способ перерисовать компонент?
Как сделать изменения параметров маршрутизатора реактивными?
Почему нельзя обновлять состояние напрямую?
Что такое рекурсивные компоненты?
В чем разница между ref и reactive в Vue 3?
Как зарегистрировать директивы локально?
Что такое удаленные пресеты?
Как удалить реактивность в Vue 3?
Что такое функция рендеринга?
В чем преимущества функции рендеринга по сравнению с шаблонами?
Нужно ли полностью заменять локальное состояние на Vuex?
Как повторно использовать элементы с атрибутом key?
Каково приоритет соответствия маршрутов?
Могу ли я использовать сборки времени выполнения для всех шаблонов?
Что такое Scoped CSS?
Какие сходства между VueJS и ReactJS?
Какие проблемы решают однокомпонентные файлы?
Нарушает ли использование одномодульных файлов (Single File Components) принцип разделения озабоченности?
Что такое единое дерево состояния?
Какие основные компоненты паттерна управления состоянием?
Какие правила сохранения состояния при горячей перезагрузке?
Могу ли я выполнять мутации непосредственно в строгом режиме?
Как стилизовать динамически сгенерированное содержимое, используя scoped CSS?
Могу ли я использовать стилизованные компоненты в Vue.js?
Какие особенности у stylelint?
Какие модификаторы поддерживаются в v-model?
Что делает Suspense в Vue 3?
Как синхронизировать текущий маршрут в Vuex хранилище?
Что делает Teleport в Vue 3?
Каковы эквиваленты шаблона в функциях рендеринга?
Как протестировать мутации?
Как протестировать свои геттеры?
Как вызвать наблюдателей при инициализации?
Как реализовать двустороннюю привязку данных в Vue?
Как использовать директиву v-for в шаблоне?
Как использовать директиву v-model с двунаправленным вычисляемым свойством?
Как использовать vue-router и привести пример?
Какова цель директивы v-for?
Как использовать директиву v-for с диапазоном?
Какова цель директивы v-on во Vue.js?
В чем разница между директивами v-show и v-if?
Какое поведение версий у плагинов-пресетов?
Каковы преимущества VueJS перед ReactJS?
В чем разница между VueJS и Angular?
Что такое Vue CLI?
Какие возможности предоставляет Vue CLI?
Что такое плагины в vue CLI?
Основная цель компилятора Vue.js?
Как обеспечить соответствие приложения Vue стандартам CSP?
Какие функции хуков предоставляет директива?
Какие модификаторы событий предоставляет Vue?
Что такое фильтры в Vue 2?
Что такое экземпляр Vue?
Какие методы жизненного цикла VueJS (vue 2 и vue 3)
Что такое лоадер Vue.js?
Можно ли передавать параметры для фильтров в Vue 2?
Что такое vue router и какие его особенности?
Что такое VueJS?
Основные особенности VueJS?
Что такое getters в Vuex?
Поддерживает ли Vuex горячую загрузку?
Что такое модули в Vuex?
Каковы подводные камни мутаций Vuex?
Что такое неймспейсы в Vuex?
Что такое плагин Vuex?
Что такое Vuex Store?
Каковы отличия между хранилищем Vuex и обычным глобальным объектом?
Структура приложения Vuex?
Что такое watchEffect в Vue 3?
Как отслеживать изменения вложенных данных?
Как отслеживать изменения объекта маршрута?
Что такое миксины?
Что такое слоты в Vue?
Что такое вспомогательный метод mapState?
Когда компоненту нужен единственный корневой элемент?
Когда стоит повторно использовать модули?
Почему data компонента должен быть функцией?
Почему мутации должны быть синхронными?
Зачем нужен атрибут key в директиве v-for?
Что такое X Templates?
Главная
/
Вопросы
/
Вопросы по Vue
/
Какова структура фабрики асинхронных компонентов?
Какова структура фабрики асинхронных компонентов?
Асинхронные компоненты в Vue.js позволяют нам загружать компоненты по требованию, когда они действительно необходимы. Это позволяет сократить объем загружаемого JavaScript и улучшить время загрузки приложения. В этом ответе мы рассмотрим, как создать асинхронный компонент с использованием фабрики асинхронных компонентов.

Структура асинхронной фабрики компонентов
Фабрика асинхронных компонентов позволяет вам определять, как загружать компонент. Структура обычно выглядит следующим образом:

const AsyncComponent = () => ({
  // Загружаем компонент, возвращая Promise
  component: import('./MyComponent.vue'),
  // Вы можете указать, что показывать во время загрузки
  loading: LoadingComponent,
  // Ошибка загрузки компонента
  error: ErrorComponent,
  // Время ожидания до начала отображения компонента загрузки
  delay: 200,
  // Время до отображения сообщения об ошибке
  timeout: 3000
});
Объяснение параметров:
component: Это основное поле, в котором вы указываете, как загружать ваш компонент. Используя import(), вы создаете динамический импорт, который возвращает Promise.
loading: Это компонент, который будет показываться, пока основной компонент загружается. Например, это может быть спиннер или индикатор загрузки.
error: Это компонент, который будет отображаться в случае ошибки загрузки.
delay: Это время в миллисекундах, которое должно пройти перед тем, как отображать компонент в состоянии загрузки.
timeout: Это максимальное время ожидания загрузки компонента. Если компонент не загружается в течение этого времени, отображается компонент ошибки.
Пример использования
Вот как вы можете использовать асинхронный компонент в вашем Vue-приложении:

<template>
  <div>
    <h1>Добро пожаловать в наше приложение!</h1>
    <async-component/>
  </div>
</template>

<script>
const AsyncComponent = () => ({
  component: import('./MyComponent.vue'),
  loading: {
    template: '<p>Загрузка...</p>'
  },
  error: {
    template: '<p>Ошибка при загрузке компонента!</p>'
  },
  delay: 200,
  timeout: 3000
});

export default {
  components: {
    AsyncComponent
  }
}
</script>
В этом примере, когда вы используете <async-component/>, Vue автоматически загружает компонент MyComponent.vue, показывая при этом сообщение «Загрузка...». Если загрузка займет более 3000 мс, отобразится сообщение об ошибке «Ошибка при загрузке компонента!».

Заключение
Использование асинхронных компонентов — это мощный способ оптимизации вашего Vue-приложения. Это позволяет разбивать ваш код на небольшие части, которые загружаются по мере необходимости, тем самым улучшая производительность и пользовательский опыт. Попробуйте использовать асинхронные компоненты в ваших проектах, и вы увидите разницу!

Предыдущий вопрос
Какие проблемы могут возникнуть при обнаружении изменений в массивах?
Следующий вопрос
Что такое асинхронные компоненты?
Содержание:
Структура асинхронной фабрики компонентов
Пример использования
Заключение
Редактировать
Вопросы
Вопросы по HTML
Вопросы по CSS
Вопросы по JS
Вопросы по TS
Вопросы по React
Вопросы по Vue
Вопросы по Angular
Вопросы по Nuxt
Вопросы по Nest.js
Вопросы по Node.js
Вопросы по Docker
Вопросы по Git
Вопросы по Веб-разработке
Тесты
Тесты по HTML
Тесты по CSS
Тесты по JS
Тесты по TS
Тесты по React
Тесты по Vue
Тесты по Angular
Тесты по Nuxt
Тесты по Nest.js
Тесты по Node.js
Тесты по Docker
Тесты по Git
Задачи
Задачи по JS
Тренажер вопросов
Frontend
© 2026 Все права защищены
Политика конфиденциальности
Согласие на обработку персональных данных


Frontend
Вопросы
Тренажер вопросов
Тесты
Задачи
Поиск по сайту
K
Вопросы по Vue
Как получить доступ к глобальным свойствам функциональных компонентов?
Как получить доступ к локальным плагинам в проекте?
Как получить доступ к родительскому экземпляру?
Как получить доступ к корневому экземпляру?
Как применить линтинг для CSS?
Какие проблемы могут возникнуть при обнаружении изменений в массивах?
Какова структура фабрики асинхронных компонентов?
Что такое асинхронные компоненты?
Рекомендуется ли использовать async для вычисляемых свойств?
Как выполнять асинхронные операции?
Какова цель опции browserslist?
Как цепочить фильтры в Vue 2?
Как изменить локализацию в Vue?
Как решить циклические зависимости между компонентами?
Как объединить локальные вычисляемые свойства с помощником mapState?
Зачем нужны комментарии во vue?
Как сделать commit с payload?
Как передать данные от дочернего компонента к родительскому с помощью событий?
Что вы имеете в виду под контекстом компонента для слотов?
Как собрать действия?
Что такое Composition API?
Можно ли использовать вычисляемое свойство в другом вычисляемом свойстве?
Что такое условные директивы?
Как добиться условной группы элементов?
Объясните структуру createElement с аргументами
Какие существуют способы создания фильтров в Vue 2?
Как создать функциональные компоненты с использованием vue-loader?
Как создать функции из слотов?
Как создать плагин?
Как создать реактивные объекты
Как создать поведение плагинов пользовательского интерфейса?
Что такое извлечение CSS?
Как использовать CSS-модули в Vue.js?
Могу ли я использовать CSS-модули для препроцессоров?
Что такое пользовательские блоки?
Что такое пользовательские директивы?
Что такое пользовательское форматирование?
Можно ли использовать пользовательское имя инъекции для CSS-модулей?
Как определить пользовательские псевдонимы модификаторов клавиш?
Какие стратегии слияния пользовательских опций?
Как настроить директиву v-model для компонента?
Каков поток данных для props?
Как реализовать локализацию даты и времени?
Как использовать глубокие селекторы?
Каково поведение пространства имен по умолчанию в Vuex?
Какова основная разница между методом и вычисляемым свойством?
В чем разница между shallowRef и markRaw в Vue 3?
В чем разница между VueJS и ReactJS?
Каковы различия между мутациями и действиями в Vuex?
Какие существуют различные сборки Vue.js?
Каковы аргументы хуков директивы?
Можно ли отправить действие с использованием payload или объекта?
Как вызвать действия (dispatch actions)?
Как диспатчить действия в компонентах?
Как отобразить состояние хранилища в компонентах vue?
Что произойдет, если использовать дублирующиеся имена полей?
Как можно написать дублирующиеся виртуальные узлы в компоненте?
Что такое динамические компоненты?
Что такое динамическое сопоставление маршрутов?
Как узнать версию VueJS, используя API?
Какова разница между полными и только runtime сборками Vue?
Что такое сокращенная запись функций в хуках директив?
Что такое функциональные компоненты?
Что такое глобальные миксины?
Что такое глобальная регистрация компонентов?
Как обрабатывать множественное число?
Какова цель API hotUpdate в хранилище Vuex?
Как проводить тестирование в Vue.js?
Как использовать плагин?
Как использовать обработчики событий
Как определить, выполняется ли код на клиенте или сервере?
Почему не стоит использовать директивы v-if и v-for на одном элементе?
Как я могу использовать импортированную константу в секции шаблона?
Как инжектировать store в дочерние компоненты?
Что такое встроенные шаблоны?
Какова цель тега <keep-alive>?
Что такое модификаторы ключевых событий?
Могу ли я использовать локальные пресеты?
Зачем нужна локальная регистрация в Vue?
В чем разница между локальной и глобальной регистрацией в модульной системе?
Что такое помощник mapGetter?
Каковы стратегии слияния в миксинах Vue?
Что такое доступ к стилю методом?
Возможно ли смешивание локальных и глобальных стилей?
Как реализовать модель для пользовательских компонентов ввода?
Что такое локальное состояние модуля?
Какие модификаторы кнопок мыши поддерживаются?
Какова причина рекомендации использовать многословные названия компонентов?
Как добавить несколько новых слотов в один компонент?
Как мутировать состояние в плагинах?
Обязательно ли использовать константы для типов мутаций?
Что такое мутации в Vuex?
Что такое навигационные охранники в Vue Router?
Нужен ли промис для Vuex?
Что такое вложенные маршруты?
Как представить односторонний поток данных в Vuex?
Утекают ли стили родителя в дочерние компоненты в scoped CSS?
Как передать несколько значений директиве во Vue?
Как выполнять мутации в компонентах?
Что такое плагины и какие у них разные службы?
Какие возможные типы пропсов в Vue?
Что такое доступ к свойствам стилей?
Что такое props?
Каковы доступные валидации для props в Vue?
Какие возможные способы предоставить переходы?
Какова цель renderError?
Какой лучший способ перерисовать компонент?
Как сделать изменения параметров маршрутизатора реактивными?
Почему нельзя обновлять состояние напрямую?
Что такое рекурсивные компоненты?
В чем разница между ref и reactive в Vue 3?
Как зарегистрировать директивы локально?
Что такое удаленные пресеты?
Как удалить реактивность в Vue 3?
Что такое функция рендеринга?
В чем преимущества функции рендеринга по сравнению с шаблонами?
Нужно ли полностью заменять локальное состояние на Vuex?
Как повторно использовать элементы с атрибутом key?
Каково приоритет соответствия маршрутов?
Могу ли я использовать сборки времени выполнения для всех шаблонов?
Что такое Scoped CSS?
Какие сходства между VueJS и ReactJS?
Какие проблемы решают однокомпонентные файлы?
Нарушает ли использование одномодульных файлов (Single File Components) принцип разделения озабоченности?
Что такое единое дерево состояния?
Какие основные компоненты паттерна управления состоянием?
Какие правила сохранения состояния при горячей перезагрузке?
Могу ли я выполнять мутации непосредственно в строгом режиме?
Как стилизовать динамически сгенерированное содержимое, используя scoped CSS?
Могу ли я использовать стилизованные компоненты в Vue.js?
Какие особенности у stylelint?
Какие модификаторы поддерживаются в v-model?
Что делает Suspense в Vue 3?
Как синхронизировать текущий маршрут в Vuex хранилище?
Что делает Teleport в Vue 3?
Каковы эквиваленты шаблона в функциях рендеринга?
Как протестировать мутации?
Как протестировать свои геттеры?
Как вызвать наблюдателей при инициализации?
Как реализовать двустороннюю привязку данных в Vue?
Как использовать директиву v-for в шаблоне?
Как использовать директиву v-model с двунаправленным вычисляемым свойством?
Как использовать vue-router и привести пример?
Какова цель директивы v-for?
Как использовать директиву v-for с диапазоном?
Какова цель директивы v-on во Vue.js?
В чем разница между директивами v-show и v-if?
Какое поведение версий у плагинов-пресетов?
Каковы преимущества VueJS перед ReactJS?
В чем разница между VueJS и Angular?
Что такое Vue CLI?
Какие возможности предоставляет Vue CLI?
Что такое плагины в vue CLI?
Основная цель компилятора Vue.js?
Как обеспечить соответствие приложения Vue стандартам CSP?
Какие функции хуков предоставляет директива?
Какие модификаторы событий предоставляет Vue?
Что такое фильтры в Vue 2?
Что такое экземпляр Vue?
Какие методы жизненного цикла VueJS (vue 2 и vue 3)
Что такое лоадер Vue.js?
Можно ли передавать параметры для фильтров в Vue 2?
Что такое vue router и какие его особенности?
Что такое VueJS?
Основные особенности VueJS?
Что такое getters в Vuex?
Поддерживает ли Vuex горячую загрузку?
Что такое модули в Vuex?
Каковы подводные камни мутаций Vuex?
Что такое неймспейсы в Vuex?
Что такое плагин Vuex?
Что такое Vuex Store?
Каковы отличия между хранилищем Vuex и обычным глобальным объектом?
Структура приложения Vuex?
Что такое watchEffect в Vue 3?
Как отслеживать изменения вложенных данных?
Как отслеживать изменения объекта маршрута?
Что такое миксины?
Что такое слоты в Vue?
Что такое вспомогательный метод mapState?
Когда компоненту нужен единственный корневой элемент?
Когда стоит повторно использовать модули?
Почему data компонента должен быть функцией?
Почему мутации должны быть синхронными?
Зачем нужен атрибут key в директиве v-for?
Что такое X Templates?
Главная
/
Вопросы
/
Вопросы по Vue
/
Какие проблемы могут возникнуть при обнаружении изменений в массивах?
Какие проблемы могут возникнуть при обнаружении изменений в массивах?
Когда вы работаете с Vue.js и массивами, важно понимать, как Vue отслеживает изменения в ваших данных. Реактивность — одна из основных функций Vue, и она позволяет автоматически обновлять интерфейс при изменении данных. Однако с массивами есть свои нюансы, о которых стоит знать.

Реактивность массивов в Vue
Vue использует геттеры и сеттеры для отслеживания изменений в объектах и массивах. Однако не все изменения могут быть обнаружены автоматически. Вот несколько моментов, на которые стоит обратить внимание:

Прямое присваивание элементов массива: Если вы изменяете элемент массива напрямую с помощью индекса, Vue не сможет отследить это изменение.
Например:
this.items[0] = 'Новое значение'; // это не вызовет обновление интерфейса

Чтобы позволить Vue отслеживать изменения, используйте метод Vue.set():
Vue.set(this.items, 0, 'Новое значение'); // это сработает
Изменение длины массива: При изменении длины массива (например, с помощью метода length) Vue не сможет отследить это изменение.
Например:
this.items.length = 0; // не вызовет обновление интерфейса

Вместо этого используйте методы массива, такие как splice() или push():
this.items.splice(0, this.items.length); // это сработает
Методы массива: Большинство методов массива, таких как push(), pop(), shift(), unshift(), splice(), sort(), и reverse() работают корректно и вызывают обновления в интерфейсе.
Например:
this.items.push('Новое значение'); // вызовет обновление интерфейса
Полезные советы
Если вам нужно изменить массив и вызвать обновление интерфейса, всегда используйте методы массива, которые Vue может отследить.
Если вы работаете с большими массивами и производительность имеет значение, рассматривайте возможность использования библиотек, таких как lodash, которые предоставляют полезные утилиты для работы с коллекциями.
Пример кода
Ниже приведен простой пример Vue-приложения с использованием реактивного массива:

<template>
  <div>
    <h1>Список элементов</h1>
    <ul>
      <li v-for="(item, index) in items" :key="index">{{ item }}</li>
    </ul>
    <button @click="addItem">Добавить элемент</button>
    <button @click="updateItem">Обновить первый элемент</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: ['Первый элемент', 'Второй элемент', 'Третий элемент']
    };
  },
  methods: {
    addItem() {
      this.items.push('Новый элемент'); // обновление с помощью push()
    },
    updateItem() {
      // Неправильный способ
      // this.items[0] = 'Обновленный элемент'; // не вызовет обновление
      // Правильный способ
      this.$set(this.items, 0, 'Обновленный элемент'); // вызовет обновление
    }
  }
}
</script>
Заключение
Понимание особенностей реактивности массивов в Vue является важным аспектом для успешной разработки. Соблюдение правил и использование рекомендуемых методов поможет избежать неожиданных проблем во время разработки.

Предыдущий вопрос
Как применить линтинг для CSS?
Следующий вопрос
Какова структура фабрики асинхронных компонентов?
Содержание:
Реактивность массивов в Vue
Полезные советы
Пример кода
Заключение
Редактировать
Вопросы
Вопросы по HTML
Вопросы по CSS
Вопросы по JS
Вопросы по TS
Вопросы по React
Вопросы по Vue
Вопросы по Angular
Вопросы по Nuxt
Вопросы по Nest.js
Вопросы по Node.js
Вопросы по Docker
Вопросы по Git
Вопросы по Веб-разработке
Тесты
Тесты по HTML
Тесты по CSS
Тесты по JS
Тесты по TS
Тесты по React
Тесты по Vue
Тесты по Angular
Тесты по Nuxt
Тесты по Nest.js
Тесты по Node.js
Тесты по Docker
Тесты по Git
Задачи
Задачи по JS
Тренажер вопросов
Frontend
© 2026 Все права защищены
Политика конфиденциальности
Согласие на обработку персональных данных


Frontend
Вопросы
Тренажер вопросов
Тесты
Задачи
Поиск по сайту
K
Вопросы по Vue
Как получить доступ к глобальным свойствам функциональных компонентов?
Как получить доступ к локальным плагинам в проекте?
Как получить доступ к родительскому экземпляру?
Как получить доступ к корневому экземпляру?
Как применить линтинг для CSS?
Какие проблемы могут возникнуть при обнаружении изменений в массивах?
Какова структура фабрики асинхронных компонентов?
Что такое асинхронные компоненты?
Рекомендуется ли использовать async для вычисляемых свойств?
Как выполнять асинхронные операции?
Какова цель опции browserslist?
Как цепочить фильтры в Vue 2?
Как изменить локализацию в Vue?
Как решить циклические зависимости между компонентами?
Как объединить локальные вычисляемые свойства с помощником mapState?
Зачем нужны комментарии во vue?
Как сделать commit с payload?
Как передать данные от дочернего компонента к родительскому с помощью событий?
Что вы имеете в виду под контекстом компонента для слотов?
Как собрать действия?
Что такое Composition API?
Можно ли использовать вычисляемое свойство в другом вычисляемом свойстве?
Что такое условные директивы?
Как добиться условной группы элементов?
Объясните структуру createElement с аргументами
Какие существуют способы создания фильтров в Vue 2?
Как создать функциональные компоненты с использованием vue-loader?
Как создать функции из слотов?
Как создать плагин?
Как создать реактивные объекты
Как создать поведение плагинов пользовательского интерфейса?
Что такое извлечение CSS?
Как использовать CSS-модули в Vue.js?
Могу ли я использовать CSS-модули для препроцессоров?
Что такое пользовательские блоки?
Что такое пользовательские директивы?
Что такое пользовательское форматирование?
Можно ли использовать пользовательское имя инъекции для CSS-модулей?
Как определить пользовательские псевдонимы модификаторов клавиш?
Какие стратегии слияния пользовательских опций?
Как настроить директиву v-model для компонента?
Каков поток данных для props?
Как реализовать локализацию даты и времени?
Как использовать глубокие селекторы?
Каково поведение пространства имен по умолчанию в Vuex?
Какова основная разница между методом и вычисляемым свойством?
В чем разница между shallowRef и markRaw в Vue 3?
В чем разница между VueJS и ReactJS?
Каковы различия между мутациями и действиями в Vuex?
Какие существуют различные сборки Vue.js?
Каковы аргументы хуков директивы?
Можно ли отправить действие с использованием payload или объекта?
Как вызвать действия (dispatch actions)?
Как диспатчить действия в компонентах?
Как отобразить состояние хранилища в компонентах vue?
Что произойдет, если использовать дублирующиеся имена полей?
Как можно написать дублирующиеся виртуальные узлы в компоненте?
Что такое динамические компоненты?
Что такое динамическое сопоставление маршрутов?
Как узнать версию VueJS, используя API?
Какова разница между полными и только runtime сборками Vue?
Что такое сокращенная запись функций в хуках директив?
Что такое функциональные компоненты?
Что такое глобальные миксины?
Что такое глобальная регистрация компонентов?
Как обрабатывать множественное число?
Какова цель API hotUpdate в хранилище Vuex?
Как проводить тестирование в Vue.js?
Как использовать плагин?
Как использовать обработчики событий
Как определить, выполняется ли код на клиенте или сервере?
Почему не стоит использовать директивы v-if и v-for на одном элементе?
Как я могу использовать импортированную константу в секции шаблона?
Как инжектировать store в дочерние компоненты?
Что такое встроенные шаблоны?
Какова цель тега <keep-alive>?
Что такое модификаторы ключевых событий?
Могу ли я использовать локальные пресеты?
Зачем нужна локальная регистрация в Vue?
В чем разница между локальной и глобальной регистрацией в модульной системе?
Что такое помощник mapGetter?
Каковы стратегии слияния в миксинах Vue?
Что такое доступ к стилю методом?
Возможно ли смешивание локальных и глобальных стилей?
Как реализовать модель для пользовательских компонентов ввода?
Что такое локальное состояние модуля?
Какие модификаторы кнопок мыши поддерживаются?
Какова причина рекомендации использовать многословные названия компонентов?
Как добавить несколько новых слотов в один компонент?
Как мутировать состояние в плагинах?
Обязательно ли использовать константы для типов мутаций?
Что такое мутации в Vuex?
Что такое навигационные охранники в Vue Router?
Нужен ли промис для Vuex?
Что такое вложенные маршруты?
Как представить односторонний поток данных в Vuex?
Утекают ли стили родителя в дочерние компоненты в scoped CSS?
Как передать несколько значений директиве во Vue?
Как выполнять мутации в компонентах?
Что такое плагины и какие у них разные службы?
Какие возможные типы пропсов в Vue?
Что такое доступ к свойствам стилей?
Что такое props?
Каковы доступные валидации для props в Vue?
Какие возможные способы предоставить переходы?
Какова цель renderError?
Какой лучший способ перерисовать компонент?
Как сделать изменения параметров маршрутизатора реактивными?
Почему нельзя обновлять состояние напрямую?
Что такое рекурсивные компоненты?
В чем разница между ref и reactive в Vue 3?
Как зарегистрировать директивы локально?
Что такое удаленные пресеты?
Как удалить реактивность в Vue 3?
Что такое функция рендеринга?
В чем преимущества функции рендеринга по сравнению с шаблонами?
Нужно ли полностью заменять локальное состояние на Vuex?
Как повторно использовать элементы с атрибутом key?
Каково приоритет соответствия маршрутов?
Могу ли я использовать сборки времени выполнения для всех шаблонов?
Что такое Scoped CSS?
Какие сходства между VueJS и ReactJS?
Какие проблемы решают однокомпонентные файлы?
Нарушает ли использование одномодульных файлов (Single File Components) принцип разделения озабоченности?
Что такое единое дерево состояния?
Какие основные компоненты паттерна управления состоянием?
Какие правила сохранения состояния при горячей перезагрузке?
Могу ли я выполнять мутации непосредственно в строгом режиме?
Как стилизовать динамически сгенерированное содержимое, используя scoped CSS?
Могу ли я использовать стилизованные компоненты в Vue.js?
Какие особенности у stylelint?
Какие модификаторы поддерживаются в v-model?
Что делает Suspense в Vue 3?
Как синхронизировать текущий маршрут в Vuex хранилище?
Что делает Teleport в Vue 3?
Каковы эквиваленты шаблона в функциях рендеринга?
Как протестировать мутации?
Как протестировать свои геттеры?
Как вызвать наблюдателей при инициализации?
Как реализовать двустороннюю привязку данных в Vue?
Как использовать директиву v-for в шаблоне?
Как использовать директиву v-model с двунаправленным вычисляемым свойством?
Как использовать vue-router и привести пример?
Какова цель директивы v-for?
Как использовать директиву v-for с диапазоном?
Какова цель директивы v-on во Vue.js?
В чем разница между директивами v-show и v-if?
Какое поведение версий у плагинов-пресетов?
Каковы преимущества VueJS перед ReactJS?
В чем разница между VueJS и Angular?
Что такое Vue CLI?
Какие возможности предоставляет Vue CLI?
Что такое плагины в vue CLI?
Основная цель компилятора Vue.js?
Как обеспечить соответствие приложения Vue стандартам CSP?
Какие функции хуков предоставляет директива?
Какие модификаторы событий предоставляет Vue?
Что такое фильтры в Vue 2?
Что такое экземпляр Vue?
Какие методы жизненного цикла VueJS (vue 2 и vue 3)
Что такое лоадер Vue.js?
Можно ли передавать параметры для фильтров в Vue 2?
Что такое vue router и какие его особенности?
Что такое VueJS?
Основные особенности VueJS?
Что такое getters в Vuex?
Поддерживает ли Vuex горячую загрузку?
Что такое модули в Vuex?
Каковы подводные камни мутаций Vuex?
Что такое неймспейсы в Vuex?
Что такое плагин Vuex?
Что такое Vuex Store?
Каковы отличия между хранилищем Vuex и обычным глобальным объектом?
Структура приложения Vuex?
Что такое watchEffect в Vue 3?
Как отслеживать изменения вложенных данных?
Как отслеживать изменения объекта маршрута?
Что такое миксины?
Что такое слоты в Vue?
Что такое вспомогательный метод mapState?
Когда компоненту нужен единственный корневой элемент?
Когда стоит повторно использовать модули?
Почему data компонента должен быть функцией?
Почему мутации должны быть синхронными?
Зачем нужен атрибут key в директиве v-for?
Что такое X Templates?
Главная
/
Вопросы
/
Вопросы по Vue
/
Какие проблемы могут возникнуть при обнаружении изменений в массивах?
Какие проблемы могут возникнуть при обнаружении изменений в массивах?
Когда вы работаете с Vue.js и массивами, важно понимать, как Vue отслеживает изменения в ваших данных. Реактивность — одна из основных функций Vue, и она позволяет автоматически обновлять интерфейс при изменении данных. Однако с массивами есть свои нюансы, о которых стоит знать.

Реактивность массивов в Vue
Vue использует геттеры и сеттеры для отслеживания изменений в объектах и массивах. Однако не все изменения могут быть обнаружены автоматически. Вот несколько моментов, на которые стоит обратить внимание:

Прямое присваивание элементов массива: Если вы изменяете элемент массива напрямую с помощью индекса, Vue не сможет отследить это изменение.
Например:
this.items[0] = 'Новое значение'; // это не вызовет обновление интерфейса

Чтобы позволить Vue отслеживать изменения, используйте метод Vue.set():
Vue.set(this.items, 0, 'Новое значение'); // это сработает
Изменение длины массива: При изменении длины массива (например, с помощью метода length) Vue не сможет отследить это изменение.
Например:
this.items.length = 0; // не вызовет обновление интерфейса

Вместо этого используйте методы массива, такие как splice() или push():
this.items.splice(0, this.items.length); // это сработает
Методы массива: Большинство методов массива, таких как push(), pop(), shift(), unshift(), splice(), sort(), и reverse() работают корректно и вызывают обновления в интерфейсе.
Например:
this.items.push('Новое значение'); // вызовет обновление интерфейса
Полезные советы
Если вам нужно изменить массив и вызвать обновление интерфейса, всегда используйте методы массива, которые Vue может отследить.
Если вы работаете с большими массивами и производительность имеет значение, рассматривайте возможность использования библиотек, таких как lodash, которые предоставляют полезные утилиты для работы с коллекциями.
Пример кода
Ниже приведен простой пример Vue-приложения с использованием реактивного массива:

<template>
  <div>
    <h1>Список элементов</h1>
    <ul>
      <li v-for="(item, index) in items" :key="index">{{ item }}</li>
    </ul>
    <button @click="addItem">Добавить элемент</button>
    <button @click="updateItem">Обновить первый элемент</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: ['Первый элемент', 'Второй элемент', 'Третий элемент']
    };
  },
  methods: {
    addItem() {
      this.items.push('Новый элемент'); // обновление с помощью push()
    },
    updateItem() {
      // Неправильный способ
      // this.items[0] = 'Обновленный элемент'; // не вызовет обновление
      // Правильный способ
      this.$set(this.items, 0, 'Обновленный элемент'); // вызовет обновление
    }
  }
}
</script>
Заключение
Понимание особенностей реактивности массивов в Vue является важным аспектом для успешной разработки. Соблюдение правил и использование рекомендуемых методов поможет избежать неожиданных проблем во время разработки.

Предыдущий вопрос
Как применить линтинг для CSS?
Следующий вопрос
Какова структура фабрики асинхронных компонентов?
Содержание:
Реактивность массивов в Vue
Полезные советы
Пример кода
Заключение
Редактировать
Вопросы
Вопросы по HTML
Вопросы по CSS
Вопросы по JS
Вопросы по TS
Вопросы по React
Вопросы по Vue
Вопросы по Angular
Вопросы по Nuxt
Вопросы по Nest.js
Вопросы по Node.js
Вопросы по Docker
Вопросы по Git
Вопросы по Веб-разработке
Тесты
Тесты по HTML
Тесты по CSS
Тесты по JS
Тесты по TS
Тесты по React
Тесты по Vue
Тесты по Angular
Тесты по Nuxt
Тесты по Nest.js
Тесты по Node.js
Тесты по Docker
Тесты по Git
Задачи
Задачи по JS
Тренажер вопросов
Frontend
© 2026 Все права защищены
Политика конфиденциальности
Согласие на обработку персональных данных


Frontend
Вопросы
Тренажер вопросов
Тесты
Задачи
Поиск по сайту
K
Вопросы по Vue
Как получить доступ к глобальным свойствам функциональных компонентов?
Как получить доступ к локальным плагинам в проекте?
Как получить доступ к родительскому экземпляру?
Как получить доступ к корневому экземпляру?
Как применить линтинг для CSS?
Какие проблемы могут возникнуть при обнаружении изменений в массивах?
Какова структура фабрики асинхронных компонентов?
Что такое асинхронные компоненты?
Рекомендуется ли использовать async для вычисляемых свойств?
Как выполнять асинхронные операции?
Какова цель опции browserslist?
Как цепочить фильтры в Vue 2?
Как изменить локализацию в Vue?
Как решить циклические зависимости между компонентами?
Как объединить локальные вычисляемые свойства с помощником mapState?
Зачем нужны комментарии во vue?
Как сделать commit с payload?
Как передать данные от дочернего компонента к родительскому с помощью событий?
Что вы имеете в виду под контекстом компонента для слотов?
Как собрать действия?
Что такое Composition API?
Можно ли использовать вычисляемое свойство в другом вычисляемом свойстве?
Что такое условные директивы?
Как добиться условной группы элементов?
Объясните структуру createElement с аргументами
Какие существуют способы создания фильтров в Vue 2?
Как создать функциональные компоненты с использованием vue-loader?
Как создать функции из слотов?
Как создать плагин?
Как создать реактивные объекты
Как создать поведение плагинов пользовательского интерфейса?
Что такое извлечение CSS?
Как использовать CSS-модули в Vue.js?
Могу ли я использовать CSS-модули для препроцессоров?
Что такое пользовательские блоки?
Что такое пользовательские директивы?
Что такое пользовательское форматирование?
Можно ли использовать пользовательское имя инъекции для CSS-модулей?
Как определить пользовательские псевдонимы модификаторов клавиш?
Какие стратегии слияния пользовательских опций?
Как настроить директиву v-model для компонента?
Каков поток данных для props?
Как реализовать локализацию даты и времени?
Как использовать глубокие селекторы?
Каково поведение пространства имен по умолчанию в Vuex?
Какова основная разница между методом и вычисляемым свойством?
В чем разница между shallowRef и markRaw в Vue 3?
В чем разница между VueJS и ReactJS?
Каковы различия между мутациями и действиями в Vuex?
Какие существуют различные сборки Vue.js?
Каковы аргументы хуков директивы?
Можно ли отправить действие с использованием payload или объекта?
Как вызвать действия (dispatch actions)?
Как диспатчить действия в компонентах?
Как отобразить состояние хранилища в компонентах vue?
Что произойдет, если использовать дублирующиеся имена полей?
Как можно написать дублирующиеся виртуальные узлы в компоненте?
Что такое динамические компоненты?
Что такое динамическое сопоставление маршрутов?
Как узнать версию VueJS, используя API?
Какова разница между полными и только runtime сборками Vue?
Что такое сокращенная запись функций в хуках директив?
Что такое функциональные компоненты?
Что такое глобальные миксины?
Что такое глобальная регистрация компонентов?
Как обрабатывать множественное число?
Какова цель API hotUpdate в хранилище Vuex?
Как проводить тестирование в Vue.js?
Как использовать плагин?
Как использовать обработчики событий
Как определить, выполняется ли код на клиенте или сервере?
Почему не стоит использовать директивы v-if и v-for на одном элементе?
Как я могу использовать импортированную константу в секции шаблона?
Как инжектировать store в дочерние компоненты?
Что такое встроенные шаблоны?
Какова цель тега <keep-alive>?
Что такое модификаторы ключевых событий?
Могу ли я использовать локальные пресеты?
Зачем нужна локальная регистрация в Vue?
В чем разница между локальной и глобальной регистрацией в модульной системе?
Что такое помощник mapGetter?
Каковы стратегии слияния в миксинах Vue?
Что такое доступ к стилю методом?
Возможно ли смешивание локальных и глобальных стилей?
Как реализовать модель для пользовательских компонентов ввода?
Что такое локальное состояние модуля?
Какие модификаторы кнопок мыши поддерживаются?
Какова причина рекомендации использовать многословные названия компонентов?
Как добавить несколько новых слотов в один компонент?
Как мутировать состояние в плагинах?
Обязательно ли использовать константы для типов мутаций?
Что такое мутации в Vuex?
Что такое навигационные охранники в Vue Router?
Нужен ли промис для Vuex?
Что такое вложенные маршруты?
Как представить односторонний поток данных в Vuex?
Утекают ли стили родителя в дочерние компоненты в scoped CSS?
Как передать несколько значений директиве во Vue?
Как выполнять мутации в компонентах?
Что такое плагины и какие у них разные службы?
Какие возможные типы пропсов в Vue?
Что такое доступ к свойствам стилей?
Что такое props?
Каковы доступные валидации для props в Vue?
Какие возможные способы предоставить переходы?
Какова цель renderError?
Какой лучший способ перерисовать компонент?
Как сделать изменения параметров маршрутизатора реактивными?
Почему нельзя обновлять состояние напрямую?
Что такое рекурсивные компоненты?
В чем разница между ref и reactive в Vue 3?
Как зарегистрировать директивы локально?
Что такое удаленные пресеты?
Как удалить реактивность в Vue 3?
Что такое функция рендеринга?
В чем преимущества функции рендеринга по сравнению с шаблонами?
Нужно ли полностью заменять локальное состояние на Vuex?
Как повторно использовать элементы с атрибутом key?
Каково приоритет соответствия маршрутов?
Могу ли я использовать сборки времени выполнения для всех шаблонов?
Что такое Scoped CSS?
Какие сходства между VueJS и ReactJS?
Какие проблемы решают однокомпонентные файлы?
Нарушает ли использование одномодульных файлов (Single File Components) принцип разделения озабоченности?
Что такое единое дерево состояния?
Какие основные компоненты паттерна управления состоянием?
Какие правила сохранения состояния при горячей перезагрузке?
Могу ли я выполнять мутации непосредственно в строгом режиме?
Как стилизовать динамически сгенерированное содержимое, используя scoped CSS?
Могу ли я использовать стилизованные компоненты в Vue.js?
Какие особенности у stylelint?
Какие модификаторы поддерживаются в v-model?
Что делает Suspense в Vue 3?
Как синхронизировать текущий маршрут в Vuex хранилище?
Что делает Teleport в Vue 3?
Каковы эквиваленты шаблона в функциях рендеринга?
Как протестировать мутации?
Как протестировать свои геттеры?
Как вызвать наблюдателей при инициализации?
Как реализовать двустороннюю привязку данных в Vue?
Как использовать директиву v-for в шаблоне?
Как использовать директиву v-model с двунаправленным вычисляемым свойством?
Как использовать vue-router и привести пример?
Какова цель директивы v-for?
Как использовать директиву v-for с диапазоном?
Какова цель директивы v-on во Vue.js?
В чем разница между директивами v-show и v-if?
Какое поведение версий у плагинов-пресетов?
Каковы преимущества VueJS перед ReactJS?
В чем разница между VueJS и Angular?
Что такое Vue CLI?
Какие возможности предоставляет Vue CLI?
Что такое плагины в vue CLI?
Основная цель компилятора Vue.js?
Как обеспечить соответствие приложения Vue стандартам CSP?
Какие функции хуков предоставляет директива?
Какие модификаторы событий предоставляет Vue?
Что такое фильтры в Vue 2?
Что такое экземпляр Vue?
Какие методы жизненного цикла VueJS (vue 2 и vue 3)
Что такое лоадер Vue.js?
Можно ли передавать параметры для фильтров в Vue 2?
Что такое vue router и какие его особенности?
Что такое VueJS?
Основные особенности VueJS?
Что такое getters в Vuex?
Поддерживает ли Vuex горячую загрузку?
Что такое модули в Vuex?
Каковы подводные камни мутаций Vuex?
Что такое неймспейсы в Vuex?
Что такое плагин Vuex?
Что такое Vuex Store?
Каковы отличия между хранилищем Vuex и обычным глобальным объектом?
Структура приложения Vuex?
Что такое watchEffect в Vue 3?
Как отслеживать изменения вложенных данных?
Как отслеживать изменения объекта маршрута?
Что такое миксины?
Что такое слоты в Vue?
Что такое вспомогательный метод mapState?
Когда компоненту нужен единственный корневой элемент?
Когда стоит повторно использовать модули?
Почему data компонента должен быть функцией?
Почему мутации должны быть синхронными?
Зачем нужен атрибут key в директиве v-for?
Что такое X Templates?
Главная
/
Вопросы
/
Вопросы по Vue
/
Как применить линтинг для CSS?
Как применить линтинг для CSS?
Линтинг — это процесс анализа кода с целью выявления ошибок, стиля и потенциальных проблем. Для CSS это особенно полезно, так как помогает поддерживать единство стиля, улучшает читаемость кода и предотвращает ошибки.

В этом ответе мы рассмотрим, как настроить линтинг для CSS с помощью инструмента stylelint, одного из самых популярных линтеров для CSS.

Установка Stylelint
Для начала, нужно установить stylelint. Если у вас уже есть проект с npm, вы можете просто выполнить следующую команду:

npm install --save-dev stylelint stylelint-config-standard
stylelint: основной библиотека линтера.
stylelint-config-standard: популярная конфигурация настроек по умолчанию, которая содержит множество правил для проверки CSS.
Настройка Stylelint
После установки вам нужно создать файл конфигурации для stylelint. Обычно это делается в корне вашего проекта, и файл называется .stylelintrc.json или .stylelintrc.js.

Пример файла .stylelintrc.json:

{
  "extends": "stylelint-config-standard",
  "rules": {
    "color-no-invalid-hex": true,
    "declaration-colon-space-after": "always",
    "block-no-empty": true,
    "indentation": 2
  }
}
В этом файле вы можете задавать свои правила линтинга. Например:

color-no-invalid-hex: проверяет недопустимые шестнадцатеричные цвета.
declaration-colon-space-after: требует наличие пробела после двоеточия в объявлениях.
block-no-empty: запрещает пустые блоки.
indentation: задает количество пробелов для отступа.
Запуск Stylelint
Вы можете запустить stylelint вручную в командной строке, указывая файлы или каталоги, которые хотите проверить:

npx stylelint "**/*.css"
Здесь **/*.css указывает на все CSS файлы в проекте.

Интеграция в редактор кода
В большинстве популярных редакторов кода есть плагины для автоматической проверки линтинга при написании кода. Например, для Visual Studio Code вы можете установить расширение "Stylelint", которое будет подсказывать вам о нарушениях стиля в реальном времени.

Пример ошибки линтинга
Допустим, у вас есть следующий CSS код:

body {
  color: #fff
  background-color: #000;
}
С помощью stylelint вы получите ошибку, поскольку после двоеточия в первой строке не хватает точки с запятой. Это поможет вам сразу заметить проблему и исправить её.

Заключение
Использование линтеров, таких как stylelint, — это отличный способ поддержания чистоты и порядка в вашем CSS коде. Они помогают предотвращать распространенные ошибки и принудительно соблюдают стиль в вашем проекте. Начните с установки и простых правил, а затем постепенно настраивайте линтинг под свои нужды!

Предыдущий вопрос
Как получить доступ к корневому экземпляру?
Следующий вопрос
Какие проблемы могут возникнуть при обнаружении изменений в массивах?
Содержание:
Установка Stylelint
Настройка Stylelint
Запуск Stylelint
Интеграция в редактор кода
Пример ошибки линтинга
Заключение
Редактировать
Вопросы
Вопросы по HTML
Вопросы по CSS
Вопросы по JS
Вопросы по TS
Вопросы по React
Вопросы по Vue
Вопросы по Angular
Вопросы по Nuxt
Вопросы по Nest.js
Вопросы по Node.js
Вопросы по Docker
Вопросы по Git
Вопросы по Веб-разработке
Тесты
Тесты по HTML
Тесты по CSS
Тесты по JS
Тесты по TS
Тесты по React
Тесты по Vue
Тесты по Angular
Тесты по Nuxt
Тесты по Nest.js
Тесты по Node.js
Тесты по Docker
Тесты по Git
Задачи
Задачи по JS
Тренажер вопросов
Frontend
© 2026 Все права защищены
Политика конфиденциальности
Согласие на обработку персональных данных


Frontend
Вопросы
Тренажер вопросов
Тесты
Задачи
Поиск по сайту
K
Вопросы по Vue
Как получить доступ к глобальным свойствам функциональных компонентов?
Как получить доступ к локальным плагинам в проекте?
Как получить доступ к родительскому экземпляру?
Как получить доступ к корневому экземпляру?
Как применить линтинг для CSS?
Какие проблемы могут возникнуть при обнаружении изменений в массивах?
Какова структура фабрики асинхронных компонентов?
Что такое асинхронные компоненты?
Рекомендуется ли использовать async для вычисляемых свойств?
Как выполнять асинхронные операции?
Какова цель опции browserslist?
Как цепочить фильтры в Vue 2?
Как изменить локализацию в Vue?
Как решить циклические зависимости между компонентами?
Как объединить локальные вычисляемые свойства с помощником mapState?
Зачем нужны комментарии во vue?
Как сделать commit с payload?
Как передать данные от дочернего компонента к родительскому с помощью событий?
Что вы имеете в виду под контекстом компонента для слотов?
Как собрать действия?
Что такое Composition API?
Можно ли использовать вычисляемое свойство в другом вычисляемом свойстве?
Что такое условные директивы?
Как добиться условной группы элементов?
Объясните структуру createElement с аргументами
Какие существуют способы создания фильтров в Vue 2?
Как создать функциональные компоненты с использованием vue-loader?
Как создать функции из слотов?
Как создать плагин?
Как создать реактивные объекты
Как создать поведение плагинов пользовательского интерфейса?
Что такое извлечение CSS?
Как использовать CSS-модули в Vue.js?
Могу ли я использовать CSS-модули для препроцессоров?
Что такое пользовательские блоки?
Что такое пользовательские директивы?
Что такое пользовательское форматирование?
Можно ли использовать пользовательское имя инъекции для CSS-модулей?
Как определить пользовательские псевдонимы модификаторов клавиш?
Какие стратегии слияния пользовательских опций?
Как настроить директиву v-model для компонента?
Каков поток данных для props?
Как реализовать локализацию даты и времени?
Как использовать глубокие селекторы?
Каково поведение пространства имен по умолчанию в Vuex?
Какова основная разница между методом и вычисляемым свойством?
В чем разница между shallowRef и markRaw в Vue 3?
В чем разница между VueJS и ReactJS?
Каковы различия между мутациями и действиями в Vuex?
Какие существуют различные сборки Vue.js?
Каковы аргументы хуков директивы?
Можно ли отправить действие с использованием payload или объекта?
Как вызвать действия (dispatch actions)?
Как диспатчить действия в компонентах?
Как отобразить состояние хранилища в компонентах vue?
Что произойдет, если использовать дублирующиеся имена полей?
Как можно написать дублирующиеся виртуальные узлы в компоненте?
Что такое динамические компоненты?
Что такое динамическое сопоставление маршрутов?
Как узнать версию VueJS, используя API?
Какова разница между полными и только runtime сборками Vue?
Что такое сокращенная запись функций в хуках директив?
Что такое функциональные компоненты?
Что такое глобальные миксины?
Что такое глобальная регистрация компонентов?
Как обрабатывать множественное число?
Какова цель API hotUpdate в хранилище Vuex?
Как проводить тестирование в Vue.js?
Как использовать плагин?
Как использовать обработчики событий
Как определить, выполняется ли код на клиенте или сервере?
Почему не стоит использовать директивы v-if и v-for на одном элементе?
Как я могу использовать импортированную константу в секции шаблона?
Как инжектировать store в дочерние компоненты?
Что такое встроенные шаблоны?
Какова цель тега <keep-alive>?
Что такое модификаторы ключевых событий?
Могу ли я использовать локальные пресеты?
Зачем нужна локальная регистрация в Vue?
В чем разница между локальной и глобальной регистрацией в модульной системе?
Что такое помощник mapGetter?
Каковы стратегии слияния в миксинах Vue?
Что такое доступ к стилю методом?
Возможно ли смешивание локальных и глобальных стилей?
Как реализовать модель для пользовательских компонентов ввода?
Что такое локальное состояние модуля?
Какие модификаторы кнопок мыши поддерживаются?
Какова причина рекомендации использовать многословные названия компонентов?
Как добавить несколько новых слотов в один компонент?
Как мутировать состояние в плагинах?
Обязательно ли использовать константы для типов мутаций?
Что такое мутации в Vuex?
Что такое навигационные охранники в Vue Router?
Нужен ли промис для Vuex?
Что такое вложенные маршруты?
Как представить односторонний поток данных в Vuex?
Утекают ли стили родителя в дочерние компоненты в scoped CSS?
Как передать несколько значений директиве во Vue?
Как выполнять мутации в компонентах?
Что такое плагины и какие у них разные службы?
Какие возможные типы пропсов в Vue?
Что такое доступ к свойствам стилей?
Что такое props?
Каковы доступные валидации для props в Vue?
Какие возможные способы предоставить переходы?
Какова цель renderError?
Какой лучший способ перерисовать компонент?
Как сделать изменения параметров маршрутизатора реактивными?
Почему нельзя обновлять состояние напрямую?
Что такое рекурсивные компоненты?
В чем разница между ref и reactive в Vue 3?
Как зарегистрировать директивы локально?
Что такое удаленные пресеты?
Как удалить реактивность в Vue 3?
Что такое функция рендеринга?
В чем преимущества функции рендеринга по сравнению с шаблонами?
Нужно ли полностью заменять локальное состояние на Vuex?
Как повторно использовать элементы с атрибутом key?
Каково приоритет соответствия маршрутов?
Могу ли я использовать сборки времени выполнения для всех шаблонов?
Что такое Scoped CSS?
Какие сходства между VueJS и ReactJS?
Какие проблемы решают однокомпонентные файлы?
Нарушает ли использование одномодульных файлов (Single File Components) принцип разделения озабоченности?
Что такое единое дерево состояния?
Какие основные компоненты паттерна управления состоянием?
Какие правила сохранения состояния при горячей перезагрузке?
Могу ли я выполнять мутации непосредственно в строгом режиме?
Как стилизовать динамически сгенерированное содержимое, используя scoped CSS?
Могу ли я использовать стилизованные компоненты в Vue.js?
Какие особенности у stylelint?
Какие модификаторы поддерживаются в v-model?
Что делает Suspense в Vue 3?
Как синхронизировать текущий маршрут в Vuex хранилище?
Что делает Teleport в Vue 3?
Каковы эквиваленты шаблона в функциях рендеринга?
Как протестировать мутации?
Как протестировать свои геттеры?
Как вызвать наблюдателей при инициализации?
Как реализовать двустороннюю привязку данных в Vue?
Как использовать директиву v-for в шаблоне?
Как использовать директиву v-model с двунаправленным вычисляемым свойством?
Как использовать vue-router и привести пример?
Какова цель директивы v-for?
Как использовать директиву v-for с диапазоном?
Какова цель директивы v-on во Vue.js?
В чем разница между директивами v-show и v-if?
Какое поведение версий у плагинов-пресетов?
Каковы преимущества VueJS перед ReactJS?
В чем разница между VueJS и Angular?
Что такое Vue CLI?
Какие возможности предоставляет Vue CLI?
Что такое плагины в vue CLI?
Основная цель компилятора Vue.js?
Как обеспечить соответствие приложения Vue стандартам CSP?
Какие функции хуков предоставляет директива?
Какие модификаторы событий предоставляет Vue?
Что такое фильтры в Vue 2?
Что такое экземпляр Vue?
Какие методы жизненного цикла VueJS (vue 2 и vue 3)
Что такое лоадер Vue.js?
Можно ли передавать параметры для фильтров в Vue 2?
Что такое vue router и какие его особенности?
Что такое VueJS?
Основные особенности VueJS?
Что такое getters в Vuex?
Поддерживает ли Vuex горячую загрузку?
Что такое модули в Vuex?
Каковы подводные камни мутаций Vuex?
Что такое неймспейсы в Vuex?
Что такое плагин Vuex?
Что такое Vuex Store?
Каковы отличия между хранилищем Vuex и обычным глобальным объектом?
Структура приложения Vuex?
Что такое watchEffect в Vue 3?
Как отслеживать изменения вложенных данных?
Как отслеживать изменения объекта маршрута?
Что такое миксины?
Что такое слоты в Vue?
Что такое вспомогательный метод mapState?
Когда компоненту нужен единственный корневой элемент?
Когда стоит повторно использовать модули?
Почему data компонента должен быть функцией?
Почему мутации должны быть синхронными?
Зачем нужен атрибут key в директиве v-for?
Что такое X Templates?
Главная
/
Вопросы
/
Вопросы по Vue
/
Как получить доступ к корневому экземпляру?
Как получить доступ к корневому экземпляру?
В рамках разработки приложений на Vue.js иногда возникает необходимость получить доступ к корневому экземпляру приложения. Это может понадобиться для различных целей, например, для передачи данных между компонентами или для настройки глобальных параметров. Давайте рассмотрим, как это можно сделать.

1. Понимание корневого экземпляра Vue
Когда вы создаете Vue-приложение, обычно вы создаете экземпляр Vue с помощью конструктора new Vue() (или createApp в Vue 3). Этот экземпляр — корневой экземпляр вашего приложения.

Пример создания корневого экземпляра:

const app = Vue.createApp({
  data() {
    return {
      message: 'Привет, мир!'
    };
  },
});

app.mount('#app');
2. Доступ к экземпляру внутри компонентов
Чтобы получить доступ к корневому экземпляру внутри компонента, вы можете использовать this.$root. this в контексте компонента указывает на текущий экземпляр, а $root позволяет получить доступ к корневому экземпляру.

Пример:

const app = Vue.createApp({
  data() {
    return {
      message: 'Привет, мир!'
    };
  },
  methods: {
    updateMessage(newMessage) {
      this.message = newMessage;
    }
  },
});

const ChildComponent = {
  template: `<button @click="changeMessage">Изменить сообщение</button>`,
  methods: {
    changeMessage() {
      this.$root.updateMessage('Сообщение изменено!');
    }
  }
};

app.component('child-component', ChildComponent);
app.mount('#app');
3. Получение данных из корневого экземпляра
Если вам нужно получить данные из корневого экземпляра, вы можете это сделать следующим образом:

const ChildComponent = {
  template: `<div>{{ rootMessage }}</div>`,
  computed: {
    rootMessage() {
      return this.$root.message;
    }
  }
};
4. Преимущества и недостатки доступа к корневому экземпляру
Преимущества:

Удобно для передачи данных между удаленными компонентами.
Позволяет за пределами компонента управлять состоянием приложения.
Недостатки:

Использование $root может привести к повышенной связанности между компонентами, что затрудняет поддержку кода.
Лучше использовать Vuex или другие механизмы управления состоянием для крупных приложений.
Заключение
Доступ к корневому экземпляру Vue может быть полезен в определенных сценариях, но важно помнить о том, что это может повлиять на архитектуру вашего приложения. Следуйте принципам модульности и старайтесь использовать более гибкие подходы, такие как управление состоянием, если ваше приложение становится более сложным.

Предыдущий вопрос
Как получить доступ к родительскому экземпляру?
Следующий вопрос
Как применить линтинг для CSS?
Содержание:
1. Понимание корневого экземпляра Vue
2. Доступ к экземпляру внутри компонентов
3. Получение данных из корневого экземпляра
4. Преимущества и недостатки доступа к корневому экземпляру
Заключение
Редактировать
Вопросы
Вопросы по HTML
Вопросы по CSS
Вопросы по JS
Вопросы по TS
Вопросы по React
Вопросы по Vue
Вопросы по Angular
Вопросы по Nuxt
Вопросы по Nest.js
Вопросы по Node.js
Вопросы по Docker
Вопросы по Git
Вопросы по Веб-разработке
Тесты
Тесты по HTML
Тесты по CSS
Тесты по JS
Тесты по TS
Тесты по React
Тесты по Vue
Тесты по Angular
Тесты по Nuxt
Тесты по Nest.js
Тесты по Node.js
Тесты по Docker
Тесты по Git
Задачи
Задачи по JS
Тренажер вопросов
Frontend
© 2026 Все права защищены
Политика конфиденциальности
Согласие на обработку персональных данных

  
Frontend
Вопросы
Тренажер вопросов
Тесты
Задачи
Поиск по сайту
K
Вопросы по Vue
Как получить доступ к глобальным свойствам функциональных компонентов?
Как получить доступ к локальным плагинам в проекте?
Как получить доступ к родительскому экземпляру?
Как получить доступ к корневому экземпляру?
Как применить линтинг для CSS?
Какие проблемы могут возникнуть при обнаружении изменений в массивах?
Какова структура фабрики асинхронных компонентов?
Что такое асинхронные компоненты?
Рекомендуется ли использовать async для вычисляемых свойств?
Как выполнять асинхронные операции?
Какова цель опции browserslist?
Как цепочить фильтры в Vue 2?
Как изменить локализацию в Vue?
Как решить циклические зависимости между компонентами?
Как объединить локальные вычисляемые свойства с помощником mapState?
Зачем нужны комментарии во vue?
Как сделать commit с payload?
Как передать данные от дочернего компонента к родительскому с помощью событий?
Что вы имеете в виду под контекстом компонента для слотов?
Как собрать действия?
Что такое Composition API?
Можно ли использовать вычисляемое свойство в другом вычисляемом свойстве?
Что такое условные директивы?
Как добиться условной группы элементов?
Объясните структуру createElement с аргументами
Какие существуют способы создания фильтров в Vue 2?
Как создать функциональные компоненты с использованием vue-loader?
Как создать функции из слотов?
Как создать плагин?
Как создать реактивные объекты
Как создать поведение плагинов пользовательского интерфейса?
Что такое извлечение CSS?
Как использовать CSS-модули в Vue.js?
Могу ли я использовать CSS-модули для препроцессоров?
Что такое пользовательские блоки?
Что такое пользовательские директивы?
Что такое пользовательское форматирование?
Можно ли использовать пользовательское имя инъекции для CSS-модулей?
Как определить пользовательские псевдонимы модификаторов клавиш?
Какие стратегии слияния пользовательских опций?
Как настроить директиву v-model для компонента?
Каков поток данных для props?
Как реализовать локализацию даты и времени?
Как использовать глубокие селекторы?
Каково поведение пространства имен по умолчанию в Vuex?
Какова основная разница между методом и вычисляемым свойством?
В чем разница между shallowRef и markRaw в Vue 3?
В чем разница между VueJS и ReactJS?
Каковы различия между мутациями и действиями в Vuex?
Какие существуют различные сборки Vue.js?
Каковы аргументы хуков директивы?
Можно ли отправить действие с использованием payload или объекта?
Как вызвать действия (dispatch actions)?
Как диспатчить действия в компонентах?
Как отобразить состояние хранилища в компонентах vue?
Что произойдет, если использовать дублирующиеся имена полей?
Как можно написать дублирующиеся виртуальные узлы в компоненте?
Что такое динамические компоненты?
Что такое динамическое сопоставление маршрутов?
Как узнать версию VueJS, используя API?
Какова разница между полными и только runtime сборками Vue?
Что такое сокращенная запись функций в хуках директив?
Что такое функциональные компоненты?
Что такое глобальные миксины?
Что такое глобальная регистрация компонентов?
Как обрабатывать множественное число?
Какова цель API hotUpdate в хранилище Vuex?
Как проводить тестирование в Vue.js?
Как использовать плагин?
Как использовать обработчики событий
Как определить, выполняется ли код на клиенте или сервере?
Почему не стоит использовать директивы v-if и v-for на одном элементе?
Как я могу использовать импортированную константу в секции шаблона?
Как инжектировать store в дочерние компоненты?
Что такое встроенные шаблоны?
Какова цель тега <keep-alive>?
Что такое модификаторы ключевых событий?
Могу ли я использовать локальные пресеты?
Зачем нужна локальная регистрация в Vue?
В чем разница между локальной и глобальной регистрацией в модульной системе?
Что такое помощник mapGetter?
Каковы стратегии слияния в миксинах Vue?
Что такое доступ к стилю методом?
Возможно ли смешивание локальных и глобальных стилей?
Как реализовать модель для пользовательских компонентов ввода?
Что такое локальное состояние модуля?
Какие модификаторы кнопок мыши поддерживаются?
Какова причина рекомендации использовать многословные названия компонентов?
Как добавить несколько новых слотов в один компонент?
Как мутировать состояние в плагинах?
Обязательно ли использовать константы для типов мутаций?
Что такое мутации в Vuex?
Что такое навигационные охранники в Vue Router?
Нужен ли промис для Vuex?
Что такое вложенные маршруты?
Как представить односторонний поток данных в Vuex?
Утекают ли стили родителя в дочерние компоненты в scoped CSS?
Как передать несколько значений директиве во Vue?
Как выполнять мутации в компонентах?
Что такое плагины и какие у них разные службы?
Какие возможные типы пропсов в Vue?
Что такое доступ к свойствам стилей?
Что такое props?
Каковы доступные валидации для props в Vue?
Какие возможные способы предоставить переходы?
Какова цель renderError?
Какой лучший способ перерисовать компонент?
Как сделать изменения параметров маршрутизатора реактивными?
Почему нельзя обновлять состояние напрямую?
Что такое рекурсивные компоненты?
В чем разница между ref и reactive в Vue 3?
Как зарегистрировать директивы локально?
Что такое удаленные пресеты?
Как удалить реактивность в Vue 3?
Что такое функция рендеринга?
В чем преимущества функции рендеринга по сравнению с шаблонами?
Нужно ли полностью заменять локальное состояние на Vuex?
Как повторно использовать элементы с атрибутом key?
Каково приоритет соответствия маршрутов?
Могу ли я использовать сборки времени выполнения для всех шаблонов?
Что такое Scoped CSS?
Какие сходства между VueJS и ReactJS?
Какие проблемы решают однокомпонентные файлы?
Нарушает ли использование одномодульных файлов (Single File Components) принцип разделения озабоченности?
Что такое единое дерево состояния?
Какие основные компоненты паттерна управления состоянием?
Какие правила сохранения состояния при горячей перезагрузке?
Могу ли я выполнять мутации непосредственно в строгом режиме?
Как стилизовать динамически сгенерированное содержимое, используя scoped CSS?
Могу ли я использовать стилизованные компоненты в Vue.js?
Какие особенности у stylelint?
Какие модификаторы поддерживаются в v-model?
Что делает Suspense в Vue 3?
Как синхронизировать текущий маршрут в Vuex хранилище?
Что делает Teleport в Vue 3?
Каковы эквиваленты шаблона в функциях рендеринга?
Как протестировать мутации?
Как протестировать свои геттеры?
Как вызвать наблюдателей при инициализации?
Как реализовать двустороннюю привязку данных в Vue?
Как использовать директиву v-for в шаблоне?
Как использовать директиву v-model с двунаправленным вычисляемым свойством?
Как использовать vue-router и привести пример?
Какова цель директивы v-for?
Как использовать директиву v-for с диапазоном?
Какова цель директивы v-on во Vue.js?
В чем разница между директивами v-show и v-if?
Какое поведение версий у плагинов-пресетов?
Каковы преимущества VueJS перед ReactJS?
В чем разница между VueJS и Angular?
Что такое Vue CLI?
Какие возможности предоставляет Vue CLI?
Что такое плагины в vue CLI?
Основная цель компилятора Vue.js?
Как обеспечить соответствие приложения Vue стандартам CSP?
Какие функции хуков предоставляет директива?
Какие модификаторы событий предоставляет Vue?
Что такое фильтры в Vue 2?
Что такое экземпляр Vue?
Какие методы жизненного цикла VueJS (vue 2 и vue 3)
Что такое лоадер Vue.js?
Можно ли передавать параметры для фильтров в Vue 2?
Что такое vue router и какие его особенности?
Что такое VueJS?
Основные особенности VueJS?
Что такое getters в Vuex?
Поддерживает ли Vuex горячую загрузку?
Что такое модули в Vuex?
Каковы подводные камни мутаций Vuex?
Что такое неймспейсы в Vuex?
Что такое плагин Vuex?
Что такое Vuex Store?
Каковы отличия между хранилищем Vuex и обычным глобальным объектом?
Структура приложения Vuex?
Что такое watchEffect в Vue 3?
Как отслеживать изменения вложенных данных?
Как отслеживать изменения объекта маршрута?
Что такое миксины?
Что такое слоты в Vue?
Что такое вспомогательный метод mapState?
Когда компоненту нужен единственный корневой элемент?
Когда стоит повторно использовать модули?
Почему data компонента должен быть функцией?
Почему мутации должны быть синхронными?
Зачем нужен атрибут key в директиве v-for?
Что такое X Templates?
Главная
/
Вопросы
/
Вопросы по Vue
/
Как получить доступ к корневому экземпляру?
Как получить доступ к корневому экземпляру?
В рамках разработки приложений на Vue.js иногда возникает необходимость получить доступ к корневому экземпляру приложения. Это может понадобиться для различных целей, например, для передачи данных между компонентами или для настройки глобальных параметров. Давайте рассмотрим, как это можно сделать.

1. Понимание корневого экземпляра Vue
Когда вы создаете Vue-приложение, обычно вы создаете экземпляр Vue с помощью конструктора new Vue() (или createApp в Vue 3). Этот экземпляр — корневой экземпляр вашего приложения.

Пример создания корневого экземпляра:

const app = Vue.createApp({
  data() {
    return {
      message: 'Привет, мир!'
    };
  },
});

app.mount('#app');
2. Доступ к экземпляру внутри компонентов
Чтобы получить доступ к корневому экземпляру внутри компонента, вы можете использовать this.$root. this в контексте компонента указывает на текущий экземпляр, а $root позволяет получить доступ к корневому экземпляру.

Пример:

const app = Vue.createApp({
  data() {
    return {
      message: 'Привет, мир!'
    };
  },
  methods: {
    updateMessage(newMessage) {
      this.message = newMessage;
    }
  },
});

const ChildComponent = {
  template: `<button @click="changeMessage">Изменить сообщение</button>`,
  methods: {
    changeMessage() {
      this.$root.updateMessage('Сообщение изменено!');
    }
  }
};

app.component('child-component', ChildComponent);
app.mount('#app');
3. Получение данных из корневого экземпляра
Если вам нужно получить данные из корневого экземпляра, вы можете это сделать следующим образом:

const ChildComponent = {
  template: `<div>{{ rootMessage }}</div>`,
  computed: {
    rootMessage() {
      return this.$root.message;
    }
  }
};
4. Преимущества и недостатки доступа к корневому экземпляру
Преимущества:

Удобно для передачи данных между удаленными компонентами.
Позволяет за пределами компонента управлять состоянием приложения.
Недостатки:

Использование $root может привести к повышенной связанности между компонентами, что затрудняет поддержку кода.
Лучше использовать Vuex или другие механизмы управления состоянием для крупных приложений.
Заключение
Доступ к корневому экземпляру Vue может быть полезен в определенных сценариях, но важно помнить о том, что это может повлиять на архитектуру вашего приложения. Следуйте принципам модульности и старайтесь использовать более гибкие подходы, такие как управление состоянием, если ваше приложение становится более сложным.

Предыдущий вопрос
Как получить доступ к родительскому экземпляру?
Следующий вопрос
Как применить линтинг для CSS?
Содержание:
1. Понимание корневого экземпляра Vue
2. Доступ к экземпляру внутри компонентов
3. Получение данных из корневого экземпляра
4. Преимущества и недостатки доступа к корневому экземпляру
Заключение
Редактировать
Вопросы
Вопросы по HTML
Вопросы по CSS
Вопросы по JS
Вопросы по TS
Вопросы по React
Вопросы по Vue
Вопросы по Angular
Вопросы по Nuxt
Вопросы по Nest.js
Вопросы по Node.js
Вопросы по Docker
Вопросы по Git
Вопросы по Веб-разработке
Тесты
Тесты по HTML
Тесты по CSS
Тесты по JS
Тесты по TS
Тесты по React
Тесты по Vue
Тесты по Angular
Тесты по Nuxt
Тесты по Nest.js
Тесты по Node.js
Тесты по Docker
Тесты по Git
Задачи
Задачи по JS
Тренажер вопросов
Frontend
© 2026 Все права защищены
Политика конфиденциальности
Согласие на обработку персональных данных

  
Frontend
Вопросы
Тренажер вопросов
Тесты
Задачи
Поиск по сайту
K
Вопросы по Vue
Как получить доступ к глобальным свойствам функциональных компонентов?
Как получить доступ к локальным плагинам в проекте?
Как получить доступ к родительскому экземпляру?
Как получить доступ к корневому экземпляру?
Как применить линтинг для CSS?
Какие проблемы могут возникнуть при обнаружении изменений в массивах?
Какова структура фабрики асинхронных компонентов?
Что такое асинхронные компоненты?
Рекомендуется ли использовать async для вычисляемых свойств?
Как выполнять асинхронные операции?
Какова цель опции browserslist?
Как цепочить фильтры в Vue 2?
Как изменить локализацию в Vue?
Как решить циклические зависимости между компонентами?
Как объединить локальные вычисляемые свойства с помощником mapState?
Зачем нужны комментарии во vue?
Как сделать commit с payload?
Как передать данные от дочернего компонента к родительскому с помощью событий?
Что вы имеете в виду под контекстом компонента для слотов?
Как собрать действия?
Что такое Composition API?
Можно ли использовать вычисляемое свойство в другом вычисляемом свойстве?
Что такое условные директивы?
Как добиться условной группы элементов?
Объясните структуру createElement с аргументами
Какие существуют способы создания фильтров в Vue 2?
Как создать функциональные компоненты с использованием vue-loader?
Как создать функции из слотов?
Как создать плагин?
Как создать реактивные объекты
Как создать поведение плагинов пользовательского интерфейса?
Что такое извлечение CSS?
Как использовать CSS-модули в Vue.js?
Могу ли я использовать CSS-модули для препроцессоров?
Что такое пользовательские блоки?
Что такое пользовательские директивы?
Что такое пользовательское форматирование?
Можно ли использовать пользовательское имя инъекции для CSS-модулей?
Как определить пользовательские псевдонимы модификаторов клавиш?
Какие стратегии слияния пользовательских опций?
Как настроить директиву v-model для компонента?
Каков поток данных для props?
Как реализовать локализацию даты и времени?
Как использовать глубокие селекторы?
Каково поведение пространства имен по умолчанию в Vuex?
Какова основная разница между методом и вычисляемым свойством?
В чем разница между shallowRef и markRaw в Vue 3?
В чем разница между VueJS и ReactJS?
Каковы различия между мутациями и действиями в Vuex?
Какие существуют различные сборки Vue.js?
Каковы аргументы хуков директивы?
Можно ли отправить действие с использованием payload или объекта?
Как вызвать действия (dispatch actions)?
Как диспатчить действия в компонентах?
Как отобразить состояние хранилища в компонентах vue?
Что произойдет, если использовать дублирующиеся имена полей?
Как можно написать дублирующиеся виртуальные узлы в компоненте?
Что такое динамические компоненты?
Что такое динамическое сопоставление маршрутов?
Как узнать версию VueJS, используя API?
Какова разница между полными и только runtime сборками Vue?
Что такое сокращенная запись функций в хуках директив?
Что такое функциональные компоненты?
Что такое глобальные миксины?
Что такое глобальная регистрация компонентов?
Как обрабатывать множественное число?
Какова цель API hotUpdate в хранилище Vuex?
Как проводить тестирование в Vue.js?
Как использовать плагин?
Как использовать обработчики событий
Как определить, выполняется ли код на клиенте или сервере?
Почему не стоит использовать директивы v-if и v-for на одном элементе?
Как я могу использовать импортированную константу в секции шаблона?
Как инжектировать store в дочерние компоненты?
Что такое встроенные шаблоны?
Какова цель тега <keep-alive>?
Что такое модификаторы ключевых событий?
Могу ли я использовать локальные пресеты?
Зачем нужна локальная регистрация в Vue?
В чем разница между локальной и глобальной регистрацией в модульной системе?
Что такое помощник mapGetter?
Каковы стратегии слияния в миксинах Vue?
Что такое доступ к стилю методом?
Возможно ли смешивание локальных и глобальных стилей?
Как реализовать модель для пользовательских компонентов ввода?
Что такое локальное состояние модуля?
Какие модификаторы кнопок мыши поддерживаются?
Какова причина рекомендации использовать многословные названия компонентов?
Как добавить несколько новых слотов в один компонент?
Как мутировать состояние в плагинах?
Обязательно ли использовать константы для типов мутаций?
Что такое мутации в Vuex?
Что такое навигационные охранники в Vue Router?
Нужен ли промис для Vuex?
Что такое вложенные маршруты?
Как представить односторонний поток данных в Vuex?
Утекают ли стили родителя в дочерние компоненты в scoped CSS?
Как передать несколько значений директиве во Vue?
Как выполнять мутации в компонентах?
Что такое плагины и какие у них разные службы?
Какие возможные типы пропсов в Vue?
Что такое доступ к свойствам стилей?
Что такое props?
Каковы доступные валидации для props в Vue?
Какие возможные способы предоставить переходы?
Какова цель renderError?
Какой лучший способ перерисовать компонент?
Как сделать изменения параметров маршрутизатора реактивными?
Почему нельзя обновлять состояние напрямую?
Что такое рекурсивные компоненты?
В чем разница между ref и reactive в Vue 3?
Как зарегистрировать директивы локально?
Что такое удаленные пресеты?
Как удалить реактивность в Vue 3?
Что такое функция рендеринга?
В чем преимущества функции рендеринга по сравнению с шаблонами?
Нужно ли полностью заменять локальное состояние на Vuex?
Как повторно использовать элементы с атрибутом key?
Каково приоритет соответствия маршрутов?
Могу ли я использовать сборки времени выполнения для всех шаблонов?
Что такое Scoped CSS?
Какие сходства между VueJS и ReactJS?
Какие проблемы решают однокомпонентные файлы?
Нарушает ли использование одномодульных файлов (Single File Components) принцип разделения озабоченности?
Что такое единое дерево состояния?
Какие основные компоненты паттерна управления состоянием?
Какие правила сохранения состояния при горячей перезагрузке?
Могу ли я выполнять мутации непосредственно в строгом режиме?
Как стилизовать динамически сгенерированное содержимое, используя scoped CSS?
Могу ли я использовать стилизованные компоненты в Vue.js?
Какие особенности у stylelint?
Какие модификаторы поддерживаются в v-model?
Что делает Suspense в Vue 3?
Как синхронизировать текущий маршрут в Vuex хранилище?
Что делает Teleport в Vue 3?
Каковы эквиваленты шаблона в функциях рендеринга?
Как протестировать мутации?
Как протестировать свои геттеры?
Как вызвать наблюдателей при инициализации?
Как реализовать двустороннюю привязку данных в Vue?
Как использовать директиву v-for в шаблоне?
Как использовать директиву v-model с двунаправленным вычисляемым свойством?
Как использовать vue-router и привести пример?
Какова цель директивы v-for?
Как использовать директиву v-for с диапазоном?
Какова цель директивы v-on во Vue.js?
В чем разница между директивами v-show и v-if?
Какое поведение версий у плагинов-пресетов?
Каковы преимущества VueJS перед ReactJS?
В чем разница между VueJS и Angular?
Что такое Vue CLI?
Какие возможности предоставляет Vue CLI?
Что такое плагины в vue CLI?
Основная цель компилятора Vue.js?
Как обеспечить соответствие приложения Vue стандартам CSP?
Какие функции хуков предоставляет директива?
Какие модификаторы событий предоставляет Vue?
Что такое фильтры в Vue 2?
Что такое экземпляр Vue?
Какие методы жизненного цикла VueJS (vue 2 и vue 3)
Что такое лоадер Vue.js?
Можно ли передавать параметры для фильтров в Vue 2?
Что такое vue router и какие его особенности?
Что такое VueJS?
Основные особенности VueJS?
Что такое getters в Vuex?
Поддерживает ли Vuex горячую загрузку?
Что такое модули в Vuex?
Каковы подводные камни мутаций Vuex?
Что такое неймспейсы в Vuex?
Что такое плагин Vuex?
Что такое Vuex Store?
Каковы отличия между хранилищем Vuex и обычным глобальным объектом?
Структура приложения Vuex?
Что такое watchEffect в Vue 3?
Как отслеживать изменения вложенных данных?
Как отслеживать изменения объекта маршрута?
Что такое миксины?
Что такое слоты в Vue?
Что такое вспомогательный метод mapState?
Когда компоненту нужен единственный корневой элемент?
Когда стоит повторно использовать модули?
Почему data компонента должен быть функцией?
Почему мутации должны быть синхронными?
Зачем нужен атрибут key в директиве v-for?
Что такое X Templates?
Главная
/
Вопросы
/
Вопросы по Vue
/
Как получить доступ к родительскому экземпляру?
Как получить доступ к родительскому экземпляру?
Когда вы работаете с Vue.js, иногда возникает необходимость получить доступ к родительскому экземпляру компонента. Это может быть полезно, когда дочерний компонент нуждается в данных или методах, которые определены в родительском компоненте.

Доступ к родительскому экземпляру
Чтобы получить доступ к родительскому экземпляру в дочернем компоненте, вы можете использовать свойство $parent. Это свойство ссылается на родительский компонент и позволяет получать доступ к его данным и методам.

Пример
Рассмотрим следующий пример, в котором у нас есть родительский компонент ParentComponent и дочерний компонент ChildComponent.

<!-- ParentComponent.vue -->
<template>
    <div>
        <h1>Родительский компонент</h1>
        <p>Сообщение: {{ message }}</p>
        <child-component></child-component>
    </div>
</template>

<script>
    import ChildComponent from './ChildComponent.vue';

    export default {
        components: {
            ChildComponent
        },
        data() {
            return {
                message: 'Привет от родителя!'
            };
        },
        methods: {
            showAlert() {
                alert('Метод родителя был вызван из дочернего компонента!');
            }
        }
    };
</script>
<!-- ChildComponent.vue -->
<template>
    <div>
        <button @click="getMessage">Получить сообщение от родителя</button>
        <button @click="callParentMethod">Вызвать метод родителя</button>
    </div>
</template>

<script>
    export default {
        methods: {
            getMessage() {
                // Получаем доступ к сообщению родителя
                const parentMessage = this.$parent.message;
                alert(`Сообщение от родителя: ${parentMessage}`);
            },
            callParentMethod() {
                // Вызов метода родителя
                this.$parent.showAlert();
            }
        }
    };
</script>
Объяснение кода
Родительский компонент (ParentComponent.vue):
Содержит переменную message и метод showAlert.
Включает дочерний компонент ChildComponent.
Дочерний компонент (ChildComponent.vue):
Содержит две кнопки: одна для получения сообщения от родителя, а другая для вызова метода родителя.
Использует this.$parent для доступа к данными и методам родительского компонента.
Важно отметить
Хотя использование $parent может быть полезным, оно не всегда рекомендуется, так как это создает зависимость между компонентами. Если возможно, рассмотрите варианты передачи данных через props или использование глобального состояния (например, Vuex) для управления состоянием вашего приложения.

Заключение
Получить доступ к родительскому экземпляру в Vue.js можно легко с помощью $parent. Однако будьте осторожны с этой практикой и старайтесь придерживаться принципов работы с компонентами, чтобы избежать чрезмерной связанности.

Предыдущий вопрос
Как получить доступ к локальным плагинам в проекте?
Следующий вопрос
Как получить доступ к корневому экземпляру?
Содержание:
Доступ к родительскому экземпляру
Заключение
Редактировать
Вопросы
Вопросы по HTML
Вопросы по CSS
Вопросы по JS
Вопросы по TS
Вопросы по React
Вопросы по Vue
Вопросы по Angular
Вопросы по Nuxt
Вопросы по Nest.js
Вопросы по Node.js
Вопросы по Docker
Вопросы по Git
Вопросы по Веб-разработке
Тесты
Тесты по HTML
Тесты по CSS
Тесты по JS
Тесты по TS
Тесты по React
Тесты по Vue
Тесты по Angular
Тесты по Nuxt
Тесты по Nest.js
Тесты по Node.js
Тесты по Docker
Тесты по Git
Задачи
Задачи по JS
Тренажер вопросов
Frontend
© 2026 Все права защищены
Политика конфиденциальности
Согласие на обработку персональных данных

  
Frontend
Вопросы
Тренажер вопросов
Тесты
Задачи
Поиск по сайту
K
Вопросы по Vue
Как получить доступ к глобальным свойствам функциональных компонентов?
Как получить доступ к локальным плагинам в проекте?
Как получить доступ к родительскому экземпляру?
Как получить доступ к корневому экземпляру?
Как применить линтинг для CSS?
Какие проблемы могут возникнуть при обнаружении изменений в массивах?
Какова структура фабрики асинхронных компонентов?
Что такое асинхронные компоненты?
Рекомендуется ли использовать async для вычисляемых свойств?
Как выполнять асинхронные операции?
Какова цель опции browserslist?
Как цепочить фильтры в Vue 2?
Как изменить локализацию в Vue?
Как решить циклические зависимости между компонентами?
Как объединить локальные вычисляемые свойства с помощником mapState?
Зачем нужны комментарии во vue?
Как сделать commit с payload?
Как передать данные от дочернего компонента к родительскому с помощью событий?
Что вы имеете в виду под контекстом компонента для слотов?
Как собрать действия?
Что такое Composition API?
Можно ли использовать вычисляемое свойство в другом вычисляемом свойстве?
Что такое условные директивы?
Как добиться условной группы элементов?
Объясните структуру createElement с аргументами
Какие существуют способы создания фильтров в Vue 2?
Как создать функциональные компоненты с использованием vue-loader?
Как создать функции из слотов?
Как создать плагин?
Как создать реактивные объекты
Как создать поведение плагинов пользовательского интерфейса?
Что такое извлечение CSS?
Как использовать CSS-модули в Vue.js?
Могу ли я использовать CSS-модули для препроцессоров?
Что такое пользовательские блоки?
Что такое пользовательские директивы?
Что такое пользовательское форматирование?
Можно ли использовать пользовательское имя инъекции для CSS-модулей?
Как определить пользовательские псевдонимы модификаторов клавиш?
Какие стратегии слияния пользовательских опций?
Как настроить директиву v-model для компонента?
Каков поток данных для props?
Как реализовать локализацию даты и времени?
Как использовать глубокие селекторы?
Каково поведение пространства имен по умолчанию в Vuex?
Какова основная разница между методом и вычисляемым свойством?
В чем разница между shallowRef и markRaw в Vue 3?
В чем разница между VueJS и ReactJS?
Каковы различия между мутациями и действиями в Vuex?
Какие существуют различные сборки Vue.js?
Каковы аргументы хуков директивы?
Можно ли отправить действие с использованием payload или объекта?
Как вызвать действия (dispatch actions)?
Как диспатчить действия в компонентах?
Как отобразить состояние хранилища в компонентах vue?
Что произойдет, если использовать дублирующиеся имена полей?
Как можно написать дублирующиеся виртуальные узлы в компоненте?
Что такое динамические компоненты?
Что такое динамическое сопоставление маршрутов?
Как узнать версию VueJS, используя API?
Какова разница между полными и только runtime сборками Vue?
Что такое сокращенная запись функций в хуках директив?
Что такое функциональные компоненты?
Что такое глобальные миксины?
Что такое глобальная регистрация компонентов?
Как обрабатывать множественное число?
Какова цель API hotUpdate в хранилище Vuex?
Как проводить тестирование в Vue.js?
Как использовать плагин?
Как использовать обработчики событий
Как определить, выполняется ли код на клиенте или сервере?
Почему не стоит использовать директивы v-if и v-for на одном элементе?
Как я могу использовать импортированную константу в секции шаблона?
Как инжектировать store в дочерние компоненты?
Что такое встроенные шаблоны?
Какова цель тега <keep-alive>?
Что такое модификаторы ключевых событий?
Могу ли я использовать локальные пресеты?
Зачем нужна локальная регистрация в Vue?
В чем разница между локальной и глобальной регистрацией в модульной системе?
Что такое помощник mapGetter?
Каковы стратегии слияния в миксинах Vue?
Что такое доступ к стилю методом?
Возможно ли смешивание локальных и глобальных стилей?
Как реализовать модель для пользовательских компонентов ввода?
Что такое локальное состояние модуля?
Какие модификаторы кнопок мыши поддерживаются?
Какова причина рекомендации использовать многословные названия компонентов?
Как добавить несколько новых слотов в один компонент?
Как мутировать состояние в плагинах?
Обязательно ли использовать константы для типов мутаций?
Что такое мутации в Vuex?
Что такое навигационные охранники в Vue Router?
Нужен ли промис для Vuex?
Что такое вложенные маршруты?
Как представить односторонний поток данных в Vuex?
Утекают ли стили родителя в дочерние компоненты в scoped CSS?
Как передать несколько значений директиве во Vue?
Как выполнять мутации в компонентах?
Что такое плагины и какие у них разные службы?
Какие возможные типы пропсов в Vue?
Что такое доступ к свойствам стилей?
Что такое props?
Каковы доступные валидации для props в Vue?
Какие возможные способы предоставить переходы?
Какова цель renderError?
Какой лучший способ перерисовать компонент?
Как сделать изменения параметров маршрутизатора реактивными?
Почему нельзя обновлять состояние напрямую?
Что такое рекурсивные компоненты?
В чем разница между ref и reactive в Vue 3?
Как зарегистрировать директивы локально?
Что такое удаленные пресеты?
Как удалить реактивность в Vue 3?
Что такое функция рендеринга?
В чем преимущества функции рендеринга по сравнению с шаблонами?
Нужно ли полностью заменять локальное состояние на Vuex?
Как повторно использовать элементы с атрибутом key?
Каково приоритет соответствия маршрутов?
Могу ли я использовать сборки времени выполнения для всех шаблонов?
Что такое Scoped CSS?
Какие сходства между VueJS и ReactJS?
Какие проблемы решают однокомпонентные файлы?
Нарушает ли использование одномодульных файлов (Single File Components) принцип разделения озабоченности?
Что такое единое дерево состояния?
Какие основные компоненты паттерна управления состоянием?
Какие правила сохранения состояния при горячей перезагрузке?
Могу ли я выполнять мутации непосредственно в строгом режиме?
Как стилизовать динамически сгенерированное содержимое, используя scoped CSS?
Могу ли я использовать стилизованные компоненты в Vue.js?
Какие особенности у stylelint?
Какие модификаторы поддерживаются в v-model?
Что делает Suspense в Vue 3?
Как синхронизировать текущий маршрут в Vuex хранилище?
Что делает Teleport в Vue 3?
Каковы эквиваленты шаблона в функциях рендеринга?
Как протестировать мутации?
Как протестировать свои геттеры?
Как вызвать наблюдателей при инициализации?
Как реализовать двустороннюю привязку данных в Vue?
Как использовать директиву v-for в шаблоне?
Как использовать директиву v-model с двунаправленным вычисляемым свойством?
Как использовать vue-router и привести пример?
Какова цель директивы v-for?
Как использовать директиву v-for с диапазоном?
Какова цель директивы v-on во Vue.js?
В чем разница между директивами v-show и v-if?
Какое поведение версий у плагинов-пресетов?
Каковы преимущества VueJS перед ReactJS?
В чем разница между VueJS и Angular?
Что такое Vue CLI?
Какие возможности предоставляет Vue CLI?
Что такое плагины в vue CLI?
Основная цель компилятора Vue.js?
Как обеспечить соответствие приложения Vue стандартам CSP?
Какие функции хуков предоставляет директива?
Какие модификаторы событий предоставляет Vue?
Что такое фильтры в Vue 2?
Что такое экземпляр Vue?
Какие методы жизненного цикла VueJS (vue 2 и vue 3)
Что такое лоадер Vue.js?
Можно ли передавать параметры для фильтров в Vue 2?
Что такое vue router и какие его особенности?
Что такое VueJS?
Основные особенности VueJS?
Что такое getters в Vuex?
Поддерживает ли Vuex горячую загрузку?
Что такое модули в Vuex?
Каковы подводные камни мутаций Vuex?
Что такое неймспейсы в Vuex?
Что такое плагин Vuex?
Что такое Vuex Store?
Каковы отличия между хранилищем Vuex и обычным глобальным объектом?
Структура приложения Vuex?
Что такое watchEffect в Vue 3?
Как отслеживать изменения вложенных данных?
Как отслеживать изменения объекта маршрута?
Что такое миксины?
Что такое слоты в Vue?
Что такое вспомогательный метод mapState?
Когда компоненту нужен единственный корневой элемент?
Когда стоит повторно использовать модули?
Почему data компонента должен быть функцией?
Почему мутации должны быть синхронными?
Зачем нужен атрибут key в директиве v-for?
Что такое X Templates?
Главная
/
Вопросы
/
Вопросы по Vue
/
Как получить доступ к локальным плагинам в проекте?
Как получить доступ к локальным плагинам в проекте?
В Vue.js есть возможность использовать локальные плагины для расширения функциональности вашего приложения. Локальные плагины позволяют вам добавлять дополнительные функциональные возможности без необходимости глобальной регистрации. В этом ответе мы рассмотрим, как вы можете создать и использовать локальный плагин в вашем проекте Vue.

Что такое плагин в Vue?
Плагины в Vue — это объекты, которые могут добавлять глобальные функциональности, такие как компоненты, методы, директривы и т.д. Плагины могут быть локальными или глобальными, и в этом примере мы сосредоточимся на локальных плагинов.

Создание локального плагина
Для создания локального плагина вам нужно будет создать файл с функцией, которая будет принимать экземпляр Vue в качестве параметра. Ниже приведён пример создания простого локального плагина, который добавляет метод для форматирования строки:

Шаг 1: Создайте файл плагина
Создайте файл myPlugin.js в вашем проекте:

// src/myPlugin.js

export default {
  install(Vue) {
    Vue.prototype.$formatString = function (str) {
      return str.trim().toUpperCase();
    };
  },
};
Шаг 2: Используйте плагин в компоненте
Теперь мы можем использовать данный локальный плагин в нашем компоненте. В примере ниже мы создадим новый компонент MyComponent.vue, где будем использовать этот плагин.

<template>
  <div>
    <h1>Форматированная строка: {{ formattedString }}</h1>
  </div>
</template>

<script>
import myPlugin from '@/myPlugin';  // Импортируем наш локальный плагин

export default {
  name: 'MyComponent',
  plugins: [myPlugin],  // Подключаем плагин к компоненту
  data() {
    return {
      originalString: '  Привет, Мир!  ',
    };
  },
  computed: {
    formattedString() {
      return this.$formatString(this.originalString);  // Используем метод плагина
    },
  },
};
</script>
Шаг 3: Регистрация плагина в приложении
Чтобы сделать плагин доступным в приложении, вам нужно зарегистрировать его в основном файле приложения, например, в main.js:

// src/main.js
import Vue from 'vue';
import App from './App.vue';
import myPlugin from './myPlugin';  // Импортируем наш плагин

Vue.use(myPlugin);  // Регистрация плагина

new Vue({
  render: h => h(App),
}).$mount('#app');
Использование плагина в других компонентах
Теперь, когда плагин зарегистрирован в приложении, вы можете использовать его в любых компонентах, как мы сделали в MyComponent.vue. Вызывайте метод $formatString из любого компонента, как показано ниже:

<template>
  <div>
    <h1>Привет, мир!</h1>
    <p>Отформатированная строка: {{ formatted }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: '  Привет!  ',
    };
  },
  computed: {
    formatted() {
      return this.$formatString(this.message);
    },
  },
};
</script>
Заключение
Теперь вы знаете, как создать и использовать локальные плагины в вашем Vue приложении. Это мощный инструмент для добавления функциональности и улучшения структурированности вашего кода. Попрактикуйтесь в создании различных плагинов, чтобы расширить возможности вашего приложения!

Предыдущий вопрос
Как получить доступ к глобальным свойствам функциональных компонентов?
Следующий вопрос
Как получить доступ к родительскому экземпляру?
Содержание:
Что такое плагин в Vue?
Создание локального плагина
Использование плагина в других компонентах
Заключение
Редактировать
Вопросы
Вопросы по HTML
Вопросы по CSS
Вопросы по JS
Вопросы по TS
Вопросы по React
Вопросы по Vue
Вопросы по Angular
Вопросы по Nuxt
Вопросы по Nest.js
Вопросы по Node.js
Вопросы по Docker
Вопросы по Git
Вопросы по Веб-разработке
Тесты
Тесты по HTML
Тесты по CSS
Тесты по JS
Тесты по TS
Тесты по React
Тесты по Vue
Тесты по Angular
Тесты по Nuxt
Тесты по Nest.js
Тесты по Node.js
Тесты по Docker
Тесты по Git
Задачи
Задачи по JS
Тренажер вопросов
Frontend
© 2026 Все права защищены
Политика конфиденциальности
Согласие на обработку персональных данных

  
Frontend
Вопросы
Тренажер вопросов
Тесты
Задачи
Поиск по сайту
K
Вопросы по Vue
Как получить доступ к глобальным свойствам функциональных компонентов?
Как получить доступ к локальным плагинам в проекте?
Как получить доступ к родительскому экземпляру?
Как получить доступ к корневому экземпляру?
Как применить линтинг для CSS?
Какие проблемы могут возникнуть при обнаружении изменений в массивах?
Какова структура фабрики асинхронных компонентов?
Что такое асинхронные компоненты?
Рекомендуется ли использовать async для вычисляемых свойств?
Как выполнять асинхронные операции?
Какова цель опции browserslist?
Как цепочить фильтры в Vue 2?
Как изменить локализацию в Vue?
Как решить циклические зависимости между компонентами?
Как объединить локальные вычисляемые свойства с помощником mapState?
Зачем нужны комментарии во vue?
Как сделать commit с payload?
Как передать данные от дочернего компонента к родительскому с помощью событий?
Что вы имеете в виду под контекстом компонента для слотов?
Как собрать действия?
Что такое Composition API?
Можно ли использовать вычисляемое свойство в другом вычисляемом свойстве?
Что такое условные директивы?
Как добиться условной группы элементов?
Объясните структуру createElement с аргументами
Какие существуют способы создания фильтров в Vue 2?
Как создать функциональные компоненты с использованием vue-loader?
Как создать функции из слотов?
Как создать плагин?
Как создать реактивные объекты
Как создать поведение плагинов пользовательского интерфейса?
Что такое извлечение CSS?
Как использовать CSS-модули в Vue.js?
Могу ли я использовать CSS-модули для препроцессоров?
Что такое пользовательские блоки?
Что такое пользовательские директивы?
Что такое пользовательское форматирование?
Можно ли использовать пользовательское имя инъекции для CSS-модулей?
Как определить пользовательские псевдонимы модификаторов клавиш?
Какие стратегии слияния пользовательских опций?
Как настроить директиву v-model для компонента?
Каков поток данных для props?
Как реализовать локализацию даты и времени?
Как использовать глубокие селекторы?
Каково поведение пространства имен по умолчанию в Vuex?
Какова основная разница между методом и вычисляемым свойством?
В чем разница между shallowRef и markRaw в Vue 3?
В чем разница между VueJS и ReactJS?
Каковы различия между мутациями и действиями в Vuex?
Какие существуют различные сборки Vue.js?
Каковы аргументы хуков директивы?
Можно ли отправить действие с использованием payload или объекта?
Как вызвать действия (dispatch actions)?
Как диспатчить действия в компонентах?
Как отобразить состояние хранилища в компонентах vue?
Что произойдет, если использовать дублирующиеся имена полей?
Как можно написать дублирующиеся виртуальные узлы в компоненте?
Что такое динамические компоненты?
Что такое динамическое сопоставление маршрутов?
Как узнать версию VueJS, используя API?
Какова разница между полными и только runtime сборками Vue?
Что такое сокращенная запись функций в хуках директив?
Что такое функциональные компоненты?
Что такое глобальные миксины?
Что такое глобальная регистрация компонентов?
Как обрабатывать множественное число?
Какова цель API hotUpdate в хранилище Vuex?
Как проводить тестирование в Vue.js?
Как использовать плагин?
Как использовать обработчики событий
Как определить, выполняется ли код на клиенте или сервере?
Почему не стоит использовать директивы v-if и v-for на одном элементе?
Как я могу использовать импортированную константу в секции шаблона?
Как инжектировать store в дочерние компоненты?
Что такое встроенные шаблоны?
Какова цель тега <keep-alive>?
Что такое модификаторы ключевых событий?
Могу ли я использовать локальные пресеты?
Зачем нужна локальная регистрация в Vue?
В чем разница между локальной и глобальной регистрацией в модульной системе?
Что такое помощник mapGetter?
Каковы стратегии слияния в миксинах Vue?
Что такое доступ к стилю методом?
Возможно ли смешивание локальных и глобальных стилей?
Как реализовать модель для пользовательских компонентов ввода?
Что такое локальное состояние модуля?
Какие модификаторы кнопок мыши поддерживаются?
Какова причина рекомендации использовать многословные названия компонентов?
Как добавить несколько новых слотов в один компонент?
Как мутировать состояние в плагинах?
Обязательно ли использовать константы для типов мутаций?
Что такое мутации в Vuex?
Что такое навигационные охранники в Vue Router?
Нужен ли промис для Vuex?
Что такое вложенные маршруты?
Как представить односторонний поток данных в Vuex?
Утекают ли стили родителя в дочерние компоненты в scoped CSS?
Как передать несколько значений директиве во Vue?
Как выполнять мутации в компонентах?
Что такое плагины и какие у них разные службы?
Какие возможные типы пропсов в Vue?
Что такое доступ к свойствам стилей?
Что такое props?
Каковы доступные валидации для props в Vue?
Какие возможные способы предоставить переходы?
Какова цель renderError?
Какой лучший способ перерисовать компонент?
Как сделать изменения параметров маршрутизатора реактивными?
Почему нельзя обновлять состояние напрямую?
Что такое рекурсивные компоненты?
В чем разница между ref и reactive в Vue 3?
Как зарегистрировать директивы локально?
Что такое удаленные пресеты?
Как удалить реактивность в Vue 3?
Что такое функция рендеринга?
В чем преимущества функции рендеринга по сравнению с шаблонами?
Нужно ли полностью заменять локальное состояние на Vuex?
Как повторно использовать элементы с атрибутом key?
Каково приоритет соответствия маршрутов?
Могу ли я использовать сборки времени выполнения для всех шаблонов?
Что такое Scoped CSS?
Какие сходства между VueJS и ReactJS?
Какие проблемы решают однокомпонентные файлы?
Нарушает ли использование одномодульных файлов (Single File Components) принцип разделения озабоченности?
Что такое единое дерево состояния?
Какие основные компоненты паттерна управления состоянием?
Какие правила сохранения состояния при горячей перезагрузке?
Могу ли я выполнять мутации непосредственно в строгом режиме?
Как стилизовать динамически сгенерированное содержимое, используя scoped CSS?
Могу ли я использовать стилизованные компоненты в Vue.js?
Какие особенности у stylelint?
Какие модификаторы поддерживаются в v-model?
Что делает Suspense в Vue 3?
Как синхронизировать текущий маршрут в Vuex хранилище?
Что делает Teleport в Vue 3?
Каковы эквиваленты шаблона в функциях рендеринга?
Как протестировать мутации?
Как протестировать свои геттеры?
Как вызвать наблюдателей при инициализации?
Как реализовать двустороннюю привязку данных в Vue?
Как использовать директиву v-for в шаблоне?
Как использовать директиву v-model с двунаправленным вычисляемым свойством?
Как использовать vue-router и привести пример?
Какова цель директивы v-for?
Как использовать директиву v-for с диапазоном?
Какова цель директивы v-on во Vue.js?
В чем разница между директивами v-show и v-if?
Какое поведение версий у плагинов-пресетов?
Каковы преимущества VueJS перед ReactJS?
В чем разница между VueJS и Angular?
Что такое Vue CLI?
Какие возможности предоставляет Vue CLI?
Что такое плагины в vue CLI?
Основная цель компилятора Vue.js?
Как обеспечить соответствие приложения Vue стандартам CSP?
Какие функции хуков предоставляет директива?
Какие модификаторы событий предоставляет Vue?
Что такое фильтры в Vue 2?
Что такое экземпляр Vue?
Какие методы жизненного цикла VueJS (vue 2 и vue 3)
Что такое лоадер Vue.js?
Можно ли передавать параметры для фильтров в Vue 2?
Что такое vue router и какие его особенности?
Что такое VueJS?
Основные особенности VueJS?
Что такое getters в Vuex?
Поддерживает ли Vuex горячую загрузку?
Что такое модули в Vuex?
Каковы подводные камни мутаций Vuex?
Что такое неймспейсы в Vuex?
Что такое плагин Vuex?
Что такое Vuex Store?
Каковы отличия между хранилищем Vuex и обычным глобальным объектом?
Структура приложения Vuex?
Что такое watchEffect в Vue 3?
Как отслеживать изменения вложенных данных?
Как отслеживать изменения объекта маршрута?
Что такое миксины?
Что такое слоты в Vue?
Что такое вспомогательный метод mapState?
Когда компоненту нужен единственный корневой элемент?
Когда стоит повторно использовать модули?
Почему data компонента должен быть функцией?
Почему мутации должны быть синхронными?
Зачем нужен атрибут key в директиве v-for?
Что такое X Templates?
Главная
/
Вопросы
/
Вопросы по Vue
/
Как получить доступ к глобальным свойствам функциональных компонентов?
Как получить доступ к глобальным свойствам функциональных компонентов?
Функциональные компоненты в Vue.js — это упрощённый способ создания компонентов, которые не имеют состояния (состояние не хранится в самом компоненте) и обычно используются для представления UI без сложной логики. Для работы с ними необходимо понимать, как извлекать и использовать глобальные свойства.

Глобальные свойства в Vue.js
Глобальные свойства в Vue.js — это свойства, доступные во всех компонентах вашего приложения. Например, вы можете устанавливать их в экземпляре Vue, используя метод app.config.globalProperties.

Вот пример, как установить глобальное свойство:

const app = Vue.createApp({});

app.config.globalProperties.$myGlobalProperty = 'Это глобальное свойство';

app.mount('#app');
Доступ к глобальным свойствам во функциональных компонентах
Теперь, чтобы получить доступ к глобальным свойствам внутри функционального компонента, вы можете передать их через контекст (context). Вот пример функционального компонента, который использует глобальное свойство:

const MyFunctionalComponent = (props, context) => {
    return Vue.h('div', `Глобальное свойство: ${context.root.$myGlobalProperty}`);
}
Полный пример
Давайте соберем все вместе в один простой пример:

const app = Vue.createApp({});

// Устанавливаем глобальное свойство
app.config.globalProperties.$myGlobalProperty = 'Это глобальное свойство';

const MyFunctionalComponent = (props, context) => {
    return Vue.h('div', `Глобальное свойство: ${context.root.$myGlobalProperty}`);
}

// Регистрация функционального компонента
app.component('my-functional-component', MyFunctionalComponent);

// Монтируем приложение
app.mount('#app');
Заключение
Глобальные свойства являются мощным инструментом в Vue.js, особенно в функциональных компонентах. Они помогают вам вынести часто используемые значения и функции, делая ваш код более чистым и легким для управления. Просто помните, что доступ к этим свойствам происходит через контекст компонента, что позволяет сохранять ясность и организованность кода.

Если у вас есть дополнительные вопросы по этой теме, не стесняйтесь их задавать!

Следующий вопрос
Как получить доступ к локальным плагинам в проекте?
Содержание:
Глобальные свойства в Vue.js
Доступ к глобальным свойствам во функциональных компонентах
Полный пример
Заключение
Редактировать
Вопросы
Вопросы по HTML
Вопросы по CSS
Вопросы по JS
Вопросы по TS
Вопросы по React
Вопросы по Vue
Вопросы по Angular
Вопросы по Nuxt
Вопросы по Nest.js
Вопросы по Node.js
Вопросы по Docker
Вопросы по Git
Вопросы по Веб-разработке
Тесты
Тесты по HTML
Тесты по CSS
Тесты по JS
Тесты по TS
Тесты по React
Тесты по Vue
Тесты по Angular
Тесты по Nuxt
Тесты по Nest.js
Тесты по Node.js
Тесты по Docker
Тесты по Git
Задачи
Задачи по JS
Тренажер вопросов
Frontend
© 2026 Все права защищены
Политика конфиденциальности
Согласие на обработку персональных данных
