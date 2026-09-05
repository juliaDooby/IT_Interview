Советы по подготовке
Ознакомьтесь с функциями Postman: убедитесь, что вы понимаете ключевые функции, такие как коллекции, окружения и консоль Postman. Знание того, как эффективно их использовать, может выделить вас.
Практика написания тестовых скриптов: освойтесь с написанием тестовых скриптов JavaScript в Postman. Сосредоточьтесь на общих задачах, таких как проверка кодов статуса ответа, проверка времени ответа и проверка данных ответа.
Понимание методов аутентификации: разберитесь в различных методах аутентификации, поддерживаемых Postman, таких как Basic Auth, OAuth и API Key. Научитесь их настраивать во вкладке «Авторизация».
Научитесь использовать переменные окружения: освойте использование переменных окружения для управления различными средами и передачи данных между запросами.
Исследуйте автоматизацию с Newman: ознакомьтесь с Newman, инструментом командной строки для запуска коллекций Postman. Узнайте, как интегрировать его с конвейерами CI/CD (CI/CD pipelines) для автоматизированного тестирования.

Потренироваться на публичных API (JSONPlaceholder, ReqRes)

Создать 5-10 коллекций с автоматизированными тестами

Понять базовые концепции: HTTP-методы, статус-коды, переменные

Финальные рекомендации:

Для тех, кто только начинает:

Не бойтесь Postman — он простой

Практикуйтесь каждый день (30 минут достаточно)

Используйте публичные API для тренировки

Для тех, кто идет на собеседование:

Повторите 12 вопросов

Откройте Postman и отправьте хотя бы 10 разных запросов

Подготовьте примеры коллекций, которые создавали

Для тех, кто хочет выделиться:

Изучите Newman

Поймите CI/CD интеграцию

Создайте публичную коллекцию на Postman и поделитесь в резюме

API-тестирование — это будущее QA. Postman — это ваш билет в это будущее.

Практикуйтесь. Учитесь. Получайте офферы.


Как подготовиться к собеседованию за 1-2 недели
У вас собеседование через 2 недели. Как подготовиться?

План подготовки (2 недели)
Неделя 1: Теория и базовые навыки

День 1-2: Изучить теорию

Что такое API, REST API

HTTP-методы (GET, POST, PUT, PATCH, DELETE)

HTTP статус-коды (200, 201, 400, 401, 404, 500)

JSON vs XML

Ресурсы:

testengineer.ru/api-testing — на русском

YouTube: "API тестирование для начинающих"

Habr: статьи про REST API

День 3-5: Практика в Postman

Установить Postman

Создать первый запрос (GET)

Создать коллекцию

Работа с переменными (Environment Variables)

Практика:

Используйте публичные API для практики:

JSONPlaceholder: https://jsonplaceholder.typicode.com (fake REST API)

ReqRes: https://reqres.in (fake API для тестирования)

Задания:

GET-запрос: получить список пользователей

POST-запрос: создать пользователя

PUT-запрос: обновить пользователя

DELETE-запрос: удалить пользователя

День 6-7: Автоматизация тестов

Писать тесты в табе Tests

Проверка статус-кода

Проверка response body

Использование Pre-request Scripts

Неделя 2: Практика и подготовка к собеседованию

День 8-10: Продвинутые темы

Authorization (Bearer Token, Basic Auth)

Работа с Collections

Newman (запуск через командную строку)

День 11-12: Практические задания

Создать полноценную коллекцию тестов для API:

Авторизация (получение токена)

CRUD операции (Create, Read, Update, Delete)

Автоматизированные тесты

Экспорт коллекции

День 13-14: Повторение и подготовка ответов

Повторить 12 вопросов из этой статьи

Подготовить ответы своими словами

Попрактиковаться вслух (как на собеседовании)

Ресурсы для подготовки
Курсы (бесплатные):

Stepik: "Тестирование REST API в Postman" — курс на русском

YouTube: "Postman для начинающих QA" — видеоуроки

Документация:

Официальная документация Postman: https://learning.postman.com

Практика:

JSONPlaceholder: https://jsonplaceholder.typicode.com

ReqRes: https://reqres.in

HTTPBin: https://httpbin.org

Вывод: 2 недели достаточно, чтобы подготовиться к собеседованию на junior QA с знанием Postman.


Я пытаюсь отправить данные через почтальона, но метод post ничего не отправляет
Метод $_POST Не возвращает данные от почтальона.

//print_r($POST['Mobile']); (Prints nothing)

if ($_SERVER['REQUEST_METHOD']=='POST'){

$response = array();

print_r($_POST['Mobile']);

if ($db->updateCart(
    $_POST['CartData'],
    $_POST['Mobile']
    )) {
    $response['error'] = false;
    $response['message'] = "positive";
}else{
    $response['error'] = true;
    $response['message'] = "Negative";
}

echo json_encode($response);
}

Я пытался напечатать «что-то» в print_r, и все работает нормально. может кто-нибудь, пожалуйста, скажите, где я делаю неправильно.

Ниже приведено изображение почтальона, которое я пытаюсь отправить.

Я пытаюсь отправить данные через почтальона, но метод post ничего не отправляет

 24.02.2019 08:08
1
0
239
3
Данный вопрос помечен как решенный
 Ответы 3
используйте следующее для получения данных

$data = json_decode(file_get_contents('php://input'), true);
print_r($data);
 24.02.2019 08:15
 Ответ принят как подходящий
Вместо использования вкладки Параметры попробуйте перейти на Тело, выбрать form-data и ввести там свои пары ключ/значение.

Я не думаю, что это имеет какое-либо отношение к PHP. Проблема заключается в том, что вкладка «Параметры» отправляет ваши данные как GET параметры, а не POST данные. Держу пари, что если бы вы print_r($_GET) увидели данные, которые ожидали увидеть в $_POST.

Обновлено: используя как Params, так и Body
Можно передавать настройки в обоих местах. Учитывать:

<?php
/* index.php */
print_r([
  '$_GET' => $_GET,
  '$_POST' => $_POST,
]);
А в Postman просто сделайте так:

Обратите внимание, что переменные в Params находятся в строке запроса.

 24.02.2019 08:20
Поля сообщения должны быть отправлены через тело запроса, а не через строку запроса (когда вы можете ожидать их получения через запрос на получение). В почтальоне перейдите на вкладку body, выберите необработанный формат и тип содержимого JSON и поместите это в тело:

{

"CartData" : "some data", 
"Mobile" : "123456789"

 }

Конвертер datetimeoffset в datetime в golang?
Заголовки ответов APIM различаются между порталом Azure, порталом разработчиков и почтальоном
Как вызвать конечную точку, которая принимает только строковое значение в качестве параметра тела запроса
Как автоматически отправить токен JWT, собранный в предыдущем запросе в Postman
Могу ли я использовать почтальона для методов onCall, созданных как функции в firebase?
Серийная проверка Расширенный установщик PHP для Gumroad
Почтальон sendRequest использует авторизацию из коллекции
Kony Fabric Не удается сгенерировать XML-дерево
Почтовый запрос Джерси 405 Ошибка для потребления Json
Передача большого объекта Javascript, который содержит кавычки, URL-адреса и т. д., Внутри JSON для вызова POST
Похожие вопросы
Уведомление по электронной почте Laravel не обновляет контент
Ошибка HTTP 500 Странно... сайт не может отобразить эту страницу Laravel
Как проверить элементы формы на наличие пробелов перед отправкой с помощью AJAX?
Статус даты завершения события codeigniter
Как сделать, чтобы мой фиксированный заголовок отображался перед телом?
Я хочу подсчитать запись из таблицы по внешнему ключу
Как сделать объект из массива в PHP
Php маршрут с функцией массива и базой данных
Как включить php-страницу с другого сайта на текущий сайт?
Файл PHPExcel больше не пишет

Запрос POST работает в Postman, но не в запросах Python (ответ 200 с обнаружением робота)

Запрос POST работает в Postman, но не в запросах Python (ответ 200 с обнаружением робота)
У меня есть запрос POST, который отлично работает как с Postman, так и с cURL (он возвращает блок данных JSON). Однако, когда я выполняю точно такой же запрос с библиотекой Python Requests, я получаю успешный ответ 200, но вместо моего большого двоичного объекта JSON я получаю это:

<html>
<head>
<META NAME = "robots" CONTENT = "noindex,nofollow">
<script src = "/_Incapsula_Resource?SWJIYLWA=5074a744e2e3d891814e9a2dace20bd4,719d34d31c8e3a6e6fffd425f7e032f3">
</script>
<body>
</body></html>
Я использовал корзины HTTP-запросов, чтобы убедиться, что запрос от Postman/cURL имеет значение точно так же, как и запрос от Python Requests.

Вот мой запрос почтальона в cURL:

curl -X POST \
  https:/someurl/bla/bla \
  -H 'Content-Type: application/json' \
  -H 'Postman-Token: 2488e914-531e-4ac7-ae8d-8490b2242396' \
  -H 'Referer: https://www.host.com/bla/bla/' \
  -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.13; rv:65.0) Gecko/20100101 Firefox/65.0' \
  -H 'cache-control: no-cache' \
  -d '{"json1":"blabla","etc":"etc"}'
... и вот мой код Python:

payload = {
      "json1": "blabla",
      "etc": "etc",
    }

    headers = {
        'Host': 'www.host.com',
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.109 Safari/537.36',
        'Accept': 'application/json, text/javascript, */*; q=0.01',
        'Accept-Language': 'en-US,en;q=0.5',
        'Accept-Encoding': 'gzip, deflate, br',
        'Referer': 'https://www.host.com/bla/bla/', 
        'Content-Type':'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'Connection': 'keep-alive',
        'Origin': 'https://www.host.com',
    }

    s = requests.Session()
    response_raw = s.post(url, json=payload, headers=headers)
    print(response_raw)
    print(response_raw.text)
Я проверил правильность и правильность полезной нагрузки и заголовков. Любая помощь приветствуется; Благодарность!

 26.02.2019 06:08
12
13
15 534
3
 Ответы 3
У меня была аналогичная проблема, которую я смог решить, отправив файл cookie в запросе. Попробуй это:

...
my_cookie = {"Cookie": "cookie text..."}

s = requests.Session()
response_raw = s.post(url, json=payload, headers=headers, cookies=my_cookie)
print(response_raw)
print(response_raw.text)
print(response_raw.content)
Вы можете получить файл cookie на вкладке «Сеть» в консоли браузера «Инструменты разработчика» в разделе «Заголовки запросов». Похоже, вы также можете получить файл cookie с помощью Python CookieJar lib.

 01.05.2019 19:15
Вы получаете ответ об успешном завершении 200, но не данные JSON в ответе.
Это означает, что это просто объект ответа. Содержит только код ответа
чтобы извлечь информацию о блобах из ответа, преобразуйте объект ответа в json
просто json_resp = response_raw.json()
Этот json_resp содержит информацию о вашем фактическом ответе.

 06.05.2020 14:00
Попробуйте передать параметр проверки как false.

requests.get('https://example.com', verify=False)

 10.08.2021 08:17
Другие вопросы по теме
Веб-скрапинг занимает слишком много времени и не выводится в python
Геокодирование с помощью Python — получите адрес только по названию компании
BeautifulSoup находит тег div по тексту внутри
Содержимое в стиле парсинга веб-страниц Python
Проблема с получением второй ссылки, когда первая ссылка содержит определенное ключевое слово рядом с ней
Обратный вызов с функцией jQuery .get()
Механизм повторных запросов
Как получить className, Id и nth:child(n) элемента, чтобы быть хорошим стабильным querySelector?
Как очистить сайт с одним и тем же URL-адресом для нескольких переходов по страницам?
Перебирать слои URL-адресов с помощью R и очищать данные
Похожие вопросы
PHP cURL для проверки входа в API Facebook API access_token на сервере?
Как кодировать запрос в командной строке CURL при передаче запроса в качестве параметра sql
Получить URL-адрес после перенаправления в интернет-архиве
Вызов конечной точки с помощью метода CURL-Post и json поврежден
Веб-скрейпинг - нуб
Microsoft Translator API v3 — PHP с использованием cURL вместо file_get_contents
Запрос Curl Post Ошибка проверки кода Json
Java "ошибка": "Не найдено", "сообщение": "Сообщение отсутствует",
Java Entity java.sql.SQLException: поле «id» не имеет значения по умолчанию
Создание комментария к запросу на вытягивание Bitbucket через REST

Не удалось импортировать Curl в Postman — найдены аргументы без параметров

Не удалось импортировать Curl в Postman — найдены аргументы без параметров
Я попытался вставить необработанный завиток в Postman, используя File >> Import >> Paste Raw Text. Однако я получаю сообщение об ошибке: Ошибка при импорте Curl: найдено 2 аргумента без параметров. Поддерживается только один (URL). Ниже находится завиток.

curl 'https://example.com/api/dataexport/user_token' -X POST -H 'Content-Type: application/json;charset=UTF-8' -H 'Accept: application/json' -H 'Accept: application/vnd.boostr.dataexport' -H 'Accept-Encoding: gzip, deflate, sdch, br' -H 'Connection: keep-alive' --data-binary '{"auth":{"email”:”example@example.com”,”password”:”example”}}’ --compressed
 27.02.2019 01:54
3
0
7 168
3
 Ответы 3
Кавычки в значении --data-binary необходимо заменить с ” (типографские кавычки) на " (кавычки ASCII).

Попробуйте импортировать это:

curl 'https://example.com/api/dataexport/user_token' -X POST -H 'Content-Type: application/json;charset=UTF-8' -H 'Accept: application/json' -H 'Accept: application/vnd.boostr.dataexport' -H 'Accept-Encoding: gzip, deflate, sdch, br' -H 'Connection: keep-alive' --data-binary '{"auth":{"email":"example@example.com","password":"example"}}' --compressed
 27.02.2019 02:44
При копировании запроса из Chrome Dev Tools используйте параметр «Копировать как CURL (bash)», чтобы гарантировать, что Postman примет формат.

 16.12.2020 22:49
--сжатый не поддерживается убери его с конца

и используйте опцию «Копировать как CURL (bash)»

ссылка

Запрос XMLHTTP неверный заголовок ответа
Curl предотвращает тайм-аут чит
API LinkedIn v2: как загрузить изображение с помощью API ugcPosts?
Клон GIT SSH работает локально, но не через удаленный скрипт
PHP: лучший способ сократить (зашифровать/расшифровать) значение параметра длинной строки запроса, но сохранить данные?
Как определить причину неизвестной ошибки сертификата
Удаленный хост закрыл соединение во время рукопожатия для соединения SOAP
Перебирать массив json с несколькими результатами
Запрос POST работает в Postman, но не в запросах Python (ответ 200 с обнаружением робота)
PHP cURL для проверки входа в API Facebook API access_token на сервере?
Похожие вопросы
Веб-API asp.net MVC — регистрирует новый токен носителя, отправленный пользователю
Как я могу отобразить полученный файл из запроса
Не могу отправить сообщение с помощью Gmail API в браузере
Chrome DevTools утверждает сетевые запросы перед выполнением
Вернуть ответ JSON вместо файла 401 Blade
Скрипт Python для циклического просмотра файла и вызова API с запросами, а затем сохранения результатов в текстовый файл
Запрос XMLHTTP неверный заголовок ответа
Запрос нескольких сущностей по идентификатору (ключу) в OData
API инвентаря Zoho json
Код 500 Внутренняя ошибка сервера в SendAsync

Почему тело запроса имеет значение null при загрузке файла с помощью почтальона в Node.js

NODE.JS
Почему тело запроса имеет значение null при загрузке файла с помощью почтальона в Node.js
Я пытаюсь загрузить файл с почтальона на сервер Node.js. Я использую multer и body-parse для разбора тела запроса.

Вариант использования:

когда я использую POST-запрос с raw-JSON в качестве тела в Postman, все работает нормально, и я вижу req.body точно так, как указано в почтальоне, а также я могу назначить новую пару ключ-значение для req.body, чтобы эти новые переменные можно было использовать в дальнейшем промежуточном программном обеспечении на маршруте.
Но когда я пытаюсь загрузить файл от почтальона с данными формы как Body в Postman, я все же могу получить значение из req.body, как указано. Но после среднего уровня мультипликатора вновь назначенные значения для req.body (из промежуточного программного обеспечения) отображаются поврежденными, как req.body становится [Объект: нулевой прототип]. Я могу подтвердить, что Multer работает нормально, но Multer повреждает данные req.body (которые создаются в самом промежуточном программном обеспечении маршрута)
Пожалуйста, помогите определить значение req.body=[Объект: нулевой прототип]

 04.03.2019 16:30
0
2
4 579
3
 Ответы 3
Я столкнулся с похожей проблемой. Если вы используете console.info(req.body) в функции. вы заметите, что тело равно [Объект: нулевой прототип], потому что Multer обрабатывает запрос, так как форма состоит из нескольких частей. Итак, если вы используете объект console.info(req), вы можете найти значения, которые можно получить, и вы можете просто выполнить req.{Name_of_field}, чтобы получить значения.

Если вам нужны разъяснения, пожалуйста, дайте мне знать, я мог бы поделиться кодом.

 30.05.2019 17:32
Шивам Махаджан написал почти так, как есть, но:

Вы можете получить доступ к текстовым полям не в req.{Name_of_field}, а в req.body.{Name_of_field}, как сказано в мультер документы.

 04.09.2019 18:10
Вы можете использовать express-busboy. Добавьте это на свою главную страницу:

const expressBusboy = require('express-busboy');
expressBusboy.extend(app);
и это проанализирует ваши данные формы.

Использование нескольких сервисов для заполнения Angular Data-Table
Почему HTTP называется протоколом без сохранения состояния, даже если он может отправлять информацию о состоянии в своем заголовке Cookie?
Невозможно прочитать свойство get неопределенного при использовании http в службе в Angular 6
Весенняя загрузка AngularJs $http.get пуста
Angular 6 - ответ об ошибке HttpClient.get 401 при попытке прочитать содержимое потока октетов
Ожидание двух http-запросов зависает до тайм-аута
Как определяется https?
Как отправить запрос POST почтальону с помощью AWS Lambda
Как после нажатия кнопки перехватить get-запрос с помощью selenium python?
Как попасть в службу http, развернутую в облаке, от почтальона?
Похожие вопросы
Как лучше всего создать бессерверное приложение в автономном режиме?
Gulp: /usr/local/bin/gulp: нет такого файла или каталога
Как фасадировать (прокси) порт веб-сокета
Как динамически изменить NODE_PATH?
BigQuery: ошибка временной метки клиентской библиотеки NodeJS
Не удается получить доступ к функции в том же классе в nodejs
PHP openssl_encrypt и шифр NodeJS не имеют одинакового вывода
Узел — проверьте, загружен ли на веб-страницу скрипт — например, библиотека Javascript
Экспресс-ошибка Nodejs показывает events.js: 167 throw er; // Необработанное событие "ошибка" ^
Как я могу воспользоваться преимуществами многоядерных систем в узле с помощью модуля кластера

Фрагмент кода Postman С#, работающий на почтальоне, а не в приложении
Вопросы
C#
Фрагмент кода Postman С#, работающий на почтальоне, а не в приложении
У меня есть файл XML, который отправляется в виде данных формы на удаленный сервер. Когда я использую postman, я получаю ответ, который должен был получить.

Ответ почтальона

Затем я использую генератор фрагментов кода для переноса вызова в мое приложение C#, и когда я запускаю приложение, оно не работает.

С# ответ

Фрагмент кода:

var client = new RestClient("http://172.20.27.1/xxxxxx/xxxxxx");
var request = new RestRequest(Method.POST);
request.AddHeader("Postman-Token", "1d9df75d-2c8f-4c92-b861-9f4291145846");
request.AddHeader("cache-control", "no-cache");
request.AddHeader("content-type", "multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW");
request.AddParameter("multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW", "------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name=\"Metas\"; filename=\"C:\\Users\\agufprad\\Desktop\\Pepillo\\FLEX_REMAN_CfgRec_Final_00-00-00-4D_20190311-102223_1010039188_7000AHB.xml\"\r\nContent-Type: application/xml\r\n\r\n\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW--", ParameterType.RequestBody);
IRestResponse response = client.Execute(request);
Есть ли что-то, чего я здесь не вижу?

 13.03.2019 19:04
1
8
631
3
 Ответы 3
Можете ли вы экспортировать + загрузить коллекцию почтальона. Это бы очень помогло.

Пара вещей, которые я провожу с места в карьер

1) У вас есть заголовок токена почтальона - зачем вам это в С#?

2) Никакие составные данные не работают?

3) Вы уверены, что тип контента должен иметь граничные данные?

4) Нет файла, связанного с фрагментом. Почти уверен, что вы не можете просто добавить данные, состоящие из нескольких частей. Ищите AddFile, что может быть вашей проблемой.

5) Работает ли пример из сети? В настоящее время это выглядит так, как будто это будет неправильно сформированный запрос из нескольких частей.

 13.03.2019 19:21
Спасибо всем за ответы, дали представление где искать.

Наконец-то я добавил заголовок к методу публикации request.AddHeader("Accept", "text/plain");

И добавил файл request.AddFile(fileName, Properties.Settings.Default.SaveRoute + fileName);

Большое спасибо!

 13.03.2019 20:51
Я бы посоветовал вам удалить любой параметр длины содержимого, токен почтальона, параметр cookie, сгенерированный генератором кода в Postman, и он должен работать как отдельный запрос.

Удалять

 request.AddHeader("Postman-Token", "1d9df75d-2c8f-4c92-b861-9f4291145846");
 27.06.2019 15:30
Другие вопросы по теме
Как вывести на консоль XML http-ответ или любое его значение
Проверка большого XML с помощью XmlReader
Как центрировать логотип, не имея меню панели действий
Как использовать parseXML JQuery для анализа экранированной строки в XML-объект?
Ошибка установки CPAN XML::DOM - разрешение отклонено
Перебрать простой xml с помощью xslt
Отображение объекта IF_IXML_ELEMENT через DISPLAY_XML_DOCUMENT
Код удаляет только первый набор узлов xml, а не другие
Мне нужно написать в конце XML, но это работает неправильно
Как импортировать данные из XML в R?
Похожие вопросы
Как запретить пользователю 2 десятичных знака в текстовом поле
В чем разница между метапакетом и SDK в .NET Core 2.2?
Я добавил задания следующим образом: но почему у меня дублируется childJob?
Поиск свойств дочернего класса в списке
«Не удалось найти точку входа с именем «OpsConIsDRCPEnabled» в DLL «OraOps12.dll» — Oracle 12c
Как предоставить один интерфейс для получения и обновления ключа, значения?
Этот опрос сервера считается слишком агрессивным?
Проект C# сталкивается с проблемами при развертывании на других машинах
С# несколько комбинаций регистра переключателей в строке
Как синхронизировать данные при присоединении к ранее созданным фотонным комнатам?

PHP
Как отправить данные формы laravel в контроллер с помощью ajax в API
У меня есть форма, которая открывается в веб-представлении Android, я хочу сохранить данные в базу данных, но когда я делаю вызов ajax и пытаюсь распечатать данные, отображается пустой массив, следующий мой код:

<div class = "card-body card-padding">
    <form id = "submitdataform">
        @csrf
        @foreach($formfields as $key=>$value)
            <input type = "hidden" name = "campaign_id" value = "{{$key}}"/>
            @foreach($value as $attrkey)
                <input type = "hidden" name = "attribute_id[]" value = "{{$attrkey->id}}"/>
                <div class = "row">
                    <div class = "col-md-12">
                        <div class = "form-group">
                            <label class = "pure-material-textfield-outlined w-100">
                                {{--<input placeholder = " " type = "text" required>--}}
                                <?php
                                if ($attrkey->attribute_type == 'alpha') {
                                    echo "<input placeholder=' ' type='text' name='attribute_value[]' required>";
                                } elseif ($attrkey->attribute_type == 'date') {
                                    echo "<input placeholder=' ' type='date' name='attribute_value[]' required>";
                                } elseif ($attrkey->attribute_type == 'numberic') {
                                    echo "<input placeholder=' ' type='number' name='attribute_value[]' required>";
                                }
                                ?>
                                <span>{{$attrkey->attribute_name}}</span>
                            </label>
                        </div>
                    </div>

                </div>
            @endforeach
        @endforeach
        <button type = "button" id = "submitbtn">Submit</button>
    </form>
</div>
Теперь вызов ajax

$("#submitbtn").click(function (event) {
    event.preventDefault();
    var data = $("#submitdataform").serialize();
    $.ajax({
        type: "post",
        url: "savecampaigndata",
        data: {data: data},
        contentType: 'application/x-www-form-urlencoded',
        dataType: 'json',
        success: function (data) {
            // Android.passParams('dashboard');
        },
        error: function (data) {
            // Android.passParams(url);
        }
    });
});
И это метод контроллера, где я хочу получить все свои данные,

public function SaveCampaignData(Request $request)
{
    return response()->json($request->all());
    $data = $request->all();
    $attribute_id = [];
    $attribute_value = [];
    $campaign_id = $data['campaign_id'];
    $user_id = Auth::user()->id;

    foreach ($data as $key => $value) {
        if ($key == "attribute_id") {
            foreach ($value as $attrkey) {
                $attribute_id[] = $attrkey;
            }
        } else {
            if ($key == "attribute_value") {
                foreach ($value as $attrvalue) {
                    $attribute_value[] = $attrvalue;
                }
            }
        }
    }

    $mainArray = array_combine($attribute_id, $attribute_value);
    $currentdate = Carbon::now();
    foreach ($mainArray as $key => $value) {
        DB::table('campaign_attribute_values')->insert(
            [
                'campaign_id'              => $campaign_id,
                'campaign_attribute_id'    => $key,
                'user_id'                  => $user_id,
                'campaign_attribute_value' => $value,
                'created_at'               => $currentdate,
                'updated_at'               => $currentdate,
            ]
        );
    }

    if ($this->CheckSmsLimit() > 0) {
        $this->checkAutoReply($campaign_id, $user_id);
    }

    return redirect()->back()->with('success', 'Request Registered');
//        return response()->json(['status' => true, 'message' => 'Record saved succesfully', 'code' => 200]);
}
Это URL-адрес маршрута почтальона:

https://subdomain.xyz.com/savecampaigndata
Но он дает пустой массив в качестве вывода в моем контроллере.

 15.03.2019 11:22
2
10
3 369
3
Данный вопрос помечен как решенный
 Ответы 3
Попробуйте добавить '/' в атрибут URL-адреса вызова ajax и добавить атрибут заголовка также в вызов ajax.

 15.03.2019 12:24
 Ответ принят как подходящий
$("#submitbtn").click(function (event) {
    event.preventDefault();
    var data = $("#submitdataform").serialize();
    $.ajax({
        type: "post",
        url: "{{ url('savecampaigndata) }}",
        data: {data: data},
        success: function (data) {
            // Android.passParams('dashboard');
        },
        error: function (data) {
            // Android.passParams(url);
        }
    });
});
если вы не хотите отправлять токен csrf
тогда

app/Http/Middleware/VerifyCsrfToken.php
и добавьте URL-адрес этого маршрута в массив исключений

protected $except = [
   'savecampaigndata'
];
если хотите
затем добавить в голову

<meta name = "csrf-token" content = "{{ csrf_token() }}">
и в сценарии

$.ajaxSetup({
    headers: {
        'X-CSRF-TOKEN': $('meta[name = "csrf-token"]').attr('content')
    }
});
 15.03.2019 12:25
Похоже, вы получаете пустой ответ из-за csrf. Я вижу, что вы включили его в свою форму, однако, поскольку вы используете serialize, он не будет работать так, как вы ожидаете.

Есть несколько разных способов добавить csrf:

Если ваш скрипт находится внутри вашего блейд-файла, вы можете просто добавить его в объект данных:

data: {
    data: data,
    _token: "{{ csrf_token() }}",
},
Или

в соответствии с документация вы можете добавить следующее внутри <head> вашей страницы:

<meta name = "csrf-token" content = "{{ csrf_token() }}">
а затем включил следующее после того, как вы подключили jQuery:

$.ajaxSetup({
    headers: {
        'X-CSRF-TOKEN': $('meta[name = "csrf-token"]').attr('content')
    }
});
 15.03.2019 12:39
Другие вопросы по теме
Запустите метод или команду, когда срок действия строки истек Laravel
Как я могу получить значение (ID) в соответствии с параметром, который я выбрал в автозаполнении Jquery
Как включить jquery для быстрого рендеринга лезвия laravel в формате PDF
Laravel красноречивый порядок по сумме столбцов связанной модели (имеет много отношений)
Как исправить ошибку foreach в xml laravel 5.7
Как я могу запустить микс Laravel по пользовательскому URL-адресу?
Предоставляет ли VueJS какое-то белое прослушивание параметров перенаправления?
Как получить Car_type, Marks и модель в контроллере Laravel?
Метод POST не поддерживается для этого маршрута. Поддерживаемые методы: GET, HEAD. Ларавель
Сгруппировать результат, полученный через find — laravel красноречиво
Похожие вопросы
Функция array_push(сессия[])
Подсчитайте количество вхождений строк в PHP во второй раз
Получить вставленные записи в последнем запросе/получить количество измененных строк (MySQL)
Замена определения массива в php 5.6
Выберите несколько столбцов, используя разные в codeigniter
Как объединить два массива в запросе MySQL
Как вернуть json без его ключа
Контактная форма не отправляет выпадающие значения
Как сохранить значения массива в новом массиве?
PDO не работает при попытке входа в систему работает старый код

JAVASCRIPT
Запрос обновления клиента работает через POSTMAN, но не через AJAX с использованием частного приложения Shopify
Я пытаюсь обновить тег клиента на Shopify, используя его частное приложение. Я попробовал это с почтальоном, и все работает нормально, но через AJAX он приводит меня к успешному обратному вызову вместо ошибки, но в случае успеха я получаю ссылку для аутентификации вместо записи клиента, как я получаю в почтальоне.

 $.ajax({
    type: "POST",
    url: "https://secret:password@store-name.myshopify.com/admin/customers/1569902297146.json",
    contentType: 'application/json',
    data: JSON.stringify({
       customer: {
         id: "1569902297146",
         email: "example@gmail.com",
         tags: "loyalty-member"
       }
     }),
    success: function(msg, b ,b) {
        console.info(msg);
    },
    error: function(a, b, c) {
        console.info(msg);
    }
});
 31.03.2019 11:49
0
2
350
3
Данный вопрос помечен как решенный
 Ответы 3
 Ответ принят как подходящий
Я не нашел никакого продуктивного ответа/информации в Интернете. Наконец, после пробного использования AJAX я могу добиться успеха.

$.ajax({
    type: "POST",
    url: "https://secret:password@store-name.myshopify.com/admin/customers/1569902297146.json",
    contentType: 'application/json',
    crossDomain: true,
    data: JSON.stringify({
       customer: {
         id: "1569902297146",
         email: "example@gmail.com",
         tags: "loyalty-member"
       }
     }),
    success: function(msg, b ,b) {
        console.info(msg);
    },
    error: function(a, b, c) {
        console.info(msg);
    }
});
Настоящий герой — перекрестный домен. Я не знаю, почему Shoify не разрешает свои запросы PUT и POST без создания crossDomain: правда,

 31.03.2019 13:03
Я думаю, вам не нужно было использовать JSON.stringify

отправлять данные как объект

$.ajax({
    type: "POST",
    url: "https://secret:password@store-name.myshopify.com/admin/customers/1569902297146.json",
    contentType: 'application/json',
    data: {
       customer: {
         id: "1569902297146",
         email: "example@gmail.com",
         tags: "loyalty-member"
       }
     },
    success: function(msg, b ,b) {
        console.info(msg);
    },
    error: function(a, b, c) {
        console.info(msg);
    }
});
 31.03.2019 13:07
Вы все делаете неправильно. Если вы продолжите раскрывать свой пароль таким образом, вы быстро обнаружите, что кто-то будет использовать его, чтобы превратить всех ваших клиентов в имена порнозвезд, в результате чего вы потеряете работу и доверие к себе. Вместо этого вы используете прокси-сервер приложения, встроенный в ваше частное приложение, для выполнения безопасных и защищенных обратных вызовов без CORS без использования пароля.

 31.03.2019 15:14

Как отправить уведомление пользователю с помощью AJAX?
Увеличьте количество (переменная ajax) на 4 при нажатии кнопки, передайте ее в php-скрипт
Как очистить текстовые поля и отправить предупреждающее сообщение с помощью Ajax, если данные не могут быть найдены в таблице MySQL?
Плавающая дата и время в файле ics не работают для календаря yahoo
Сгенерированная кнопка теряет функциональность
Как мне получить доступ к данным моей формы при отправке их из запроса AJAX при использовании Formidable?
Передача определенных значений формы с помощью POST
Как запускать скрипты Python в XAMPP на Mac?
Как исправить «TypeError: X is null»
Способы изменения выпадающего списка при нажатии на список в JavaScript
Похожие вопросы
Я продолжаю получать сообщение об ошибке «Uncaught ReferenceError: imgArray не определен»
Ошибка: не удалось найти представление «location.ejs» в каталоге представлений
Javascript Tic Tac Toe Game: как предупредить пользователя о том, что он выиграл?
Динамически добавлять и удалять класс со страницы angular 7
Как реализовать авторизацию с несколькими запросами с помощью Redux
Изменение языка ввода текста в JS
Как могут быть выполнены атрибуты инициированных событий внедренных тегов html, которые ссылаются на функции в сценарии содержимого расширения Firefox?
Могу ли я добавить имя класса в переменную CSS?
Продолжайте получать Uncaught TypeError: Незаконный вызов?
(Angular) Js - как упростить результат обещания?

Запрос POST от Postman не проходит проверку модели
Внутри моей программы ASP.NET WebApi у меня есть модель Author:

public class Author
{
    public int Id { get; set; }
    [Required] public string Name { get; set; }
}
У меня также есть AuthorsController с методом PostAuthor(Author author):

// POST: api/Authors
[ResponseType(typeof(Author))]
public async Task<IHttpActionResult> PostAuthor(Author author)
{
    if (!ModelState.IsValid)
    {
        return BadRequest(ModelState);
    }

    // etc.
}
Когда я программно отправляю запрос POST внутри своих модульных тестов, возвращается HTTP Status Code 201 Created:

Запрос POST от Postman не проходит проверку модели

Однако, когда я отправляю запрос POST с использованием Почтальон, вместо этого я получаю HTTP Status Code 400 Bad Request:

Запрос POST от Postman не проходит проверку модели

Как видите, когда я отправляю запрос POST с помощью Postman, в метод PostAuthor(Author author) передается аргумент null, и в результате проверка модели завершается неудачно:

Запрос POST от Postman не проходит проверку модели

Что я должен сделать, чтобы POST запросы от Postman могли быть обработаны?

 02.04.2019 10:13
0
5
691
3
 Ответы 3
Если вы отправляете application/json, а ваш API ожидает INBOUND JSON, попробуйте отправить в формате JSON, что-то вроде

{
"Id":"6",
"Name":"P.G. Wodehouse"
}
 02.04.2019 10:19
Пара изменений: определите его как HttpPost и используйте FromBody как

// POST: api/Authors
[HttpPost]
[ResponseType(typeof(Author))]
public async Task<IHttpActionResult> PostAuthor([FromBody] Author author)
{
    if (!ModelState.IsValid)
    {
        return BadRequest(ModelState);
    }

    // etc.
}
 02.04.2019 10:22
Замените = на : в теле почтальона, в конце концов, это JSON.

Примените атрибут tabindex к элементу управления asp:Menu, чтобы получить фокус
Нужно разбить строку и подсчитать вхождение
Как включить CAS Dashboard (конечная точка «/status/dashboard»)
Как использовать API ASP.NET в Android
Сбой входа в базу данных Crystal Report Viewer при переходе на следующую страницу
Использование ASP.NET this.Page в качестве условия для скрытия лабораторий в пользовательском управлении
ASP.NET: цвет фона GridView не меняется при пользовательском событии
Как разделить элемент столбца в представлении с помощью разделителя?
Как изменить текст заголовка DevExpress MVC Grid при экспорте на вертикальный (снизу вверх)
Как получить строку часового пояса «Стандартный» из объекта момента?
Похожие вопросы
Я не могу распечатать richTextBox.Text в текстовом файле для нескольких строк
Событие изменения области и контекст синхронизации
Почему объявление `float` похоже на `public struct Single`
Получить информацию о типе контроллера в промежуточном программном обеспечении (или как отличить запрос к веб-API и для страницы)
Как регистрировать сообщения разговора в базе данных azure sql в Microsoft botframework sdk v4 с помощью С#
Как подключить менеджер очередей с помощью файла CCDT (ошибка 2063) . добавление ChannelDefinitionDirectory в файл app.config
Как обновить все пакеты решения до последней минорной версии Nuget?
Есть ли другой способ получить имя функции в SpecFlow С# без использования контекста?
Освобождение файла .exe из входной строки в виде кода
Как создать статическое глобальное событие, чтобы одна форма могла прослушивать событие другой формы, которое не является родительской формой?

Не удалось отправить почтовый запрос в скрипте Google Apps
Я пытаюсь отправить почтовый запрос для проверки транзакции. Я отправил тот же почтовый запрос с Почтальон и получил ответ, как показано ниже:

Не удалось отправить почтовый запрос в скрипте Google AppsНе удалось отправить почтовый запрос в скрипте Google Apps

Код скрипта приложений.gs:

function postRequest() {
    var url = "https://ravesandboxapi.flutterwave.com/flwv3-pug/getpaidx/api/v2/verify";
    var options = {
        "method": "post",
        "headers": {
            "Content-Type": "application/json"
        },
        "payload": {
            "SECKEY": "FLWSECK-e6db11d1f8a6208de8cb2f94e293450e-X",
            "txref": "MC-1520443531487"
        }
    };

    const response = UrlFetchApp.fetch(url, options);

    Logger.log(JSON.stringify(response));
}
Ответ об ошибке скрипта приложений:

Request failed for https://ravesandboxapi.flutterwave.com/flwv3-pug/getpaidx/api/v2/verify returned code 400.

Truncated server response: SyntaxError: Unexpected token S
   at parse (/app/node_modules/body-parser/lib/types/json.js:83:15)
   at /app/node_mod... (use muteHttpExceptions option to examine full response) (line 299, file "Code")

Что я делаю неправильно или как отправить запрос на публикацию в Google Apps Script?

 02.04.2019 14:52
0
1
2 177
3
Данный вопрос помечен как решенный
 Ответы 3
Это не проблема со скриптом Google Apps, но сервер flutterwave возвращает код ошибки 400.

Вы можете проверить это, добавив «muteHttpExceptions»: true в объект параметров, а затем записав ответ в консоль.

function postRequest1() {
    var url = "https://ravesandboxapi.flutterwave.com/flwv3-pug/getpaidx/api/v2/verify";
    var options = {
        "method": "post",
        "headers": {
            "Content-Type": "application/json"
        },
        "payload": {
            "SECKEY": "FLWSECK-e6db11d1f8a6208de8cb2f94e293450e-X",
            "txref": "MC-1520443531487"
        },
        "muteHttpExceptions": true
    };

    const response = UrlFetchApp.fetch(url, options);
Logger.log(response.getResponseCode())
Logger.log(response.getContentText())
}
 02.04.2019 15:01
 Ответ принят как подходящий
Функция UrlFetchApp.fetch() имеет необычную особенность: вам нужно использовать свойство contentType, чтобы установить тип содержимого полезной нагрузки. По какой-то причине установка заголовка напрямую не работает.

Кроме того, вам нужно JSON.stringify() свою полезную нагрузку.

Поэтому перепишите свой почтовый запрос следующим образом:

function verify() {
    var url = "https://ravesandboxapi.flutterwave.com/flwv3-pug/getpaidx/api/v2/verify";

    var options = {
        "method":"POST",
        "contentType":"application/json",
        "payload":JSON.stringify({
            "SECKEY":"[YOUR-SECRET-KEY]",
            "txref":"[YOUR-TXREF-CODE]"
        })
    };

    return JSON.parse(UrlFetchApp.fetch(url, options));
}
Обратите внимание, что я пропустил ключ и код с текстом-заполнителем. Вы действительно не должны делиться такой конфиденциальной информацией. Если возможно, я настоятельно рекомендую отозвать эти ключи и поручить поставщику услуг выпустить новые.

 02.04.2019 15:13
Спасибо Диму Дизайн за объяснение особенностей UrlFetchApp.fetch().

Все, что я сделал, чтобы заставить его работать, это изменить Content-Type на contentType

function postRequest() {
    var url = "https://ravesandboxapi.flutterwave.com/flwv3-pug/getpaidx/api/v2/verify";
    var options = {
        "method": "post",
        "headers": {
            "contentType": "application/json" // <--  HERE
        },
        "payload": {
            "SECKEY": "FLWSECK-e6db11d1f8a6208de8cb2f94e293450e-X",
            "txref": "MC-1520443531487"
        },
        "muteHttpExceptions": true
    };

    const response = UrlFetchApp.fetch(url, options);

    Logger.log(response.getContentText());
    Logger.log('Response Code: '+response.getResponseCode())
}
С другой стороны, "muteHttpExceptions": true существует, так что я сам буду обрабатывать исключения Http.

Не могу воспроизвести отправку формы через почтовый запрос
Отправка данных из winforms в контроллер mvc передает нулевое значение
Как очистить данные с помощью модуля запросов только в python
Как исправить «ERR_ACCESS_DENIED» при загрузке нескольких файлов
W3 Validator API для загрузки файлов/прямого ввода
Как кодировать данные двоичного файла в ISO-8859-1, чтобы прикрепить их к телу почтового сообщения HTTP
Как распаковать gzip-запрос PHP/Lumen/Laravel?
Ответ на сообщение Flutter http ограничен 1023 символами
Данные Selenium с данными формы
Очистка данных с использованием R-формы со списком в POST
Похожие вопросы
Как проверить, запущен ли HtmlService?
Как получить доступ к Cloud Firestore из Google Таблиц?
Скрипт приложений, как отформатировать ячейку в правильный текст (регистр)
Вставка изображения в Документ Google с помощью скрипта приложений говорит о недопустимых данных изображения
Пользовательские функции Google Apps Script для Google Sheets за пределами Code.gs?
Как преобразовать идентификатор события календаря Google в правильный формат, чтобы API календаря мог читать его в моем скрипте?
Как распечатать все свойства объекта в точечной записи для массива неизвестной глубины в javascript / Google Apps Script (GAS)
Google Sheets — используйте скрипт на нескольких листах
Как записать данные Google Analytics API в новую строку, а не на новый лист
Насколько медленным может быть API-интерфейс Google Sheets?

Более простой способ получить несколько значений из массива
Более простой способ перебора массива response.Body и получения значений определенных элементов Id и DataFields.Value — для использования в журнале консоли.

RESPONSE BODY - это то, что возвращается при отправке запроса в Postman

[
    {
        "Id": "ae61098c-eb7c-4ee8-aca7-aa080112d656",
        "DataFields": [
            {
                "Header": "LocationDetails.LocationID",
                "Value": "BH127"
            }
        ],
    },
    {
        "Id": "84cd9a9f-d085-4642-b484-aa080112d656",
        "DataFields": [
            {
                "Header": "LocationDetails.LocationID",
                "Value": "BH128"
            }
        ],
    },
    {
        "Id": "6629d92b-1dcf-4fc1-a019-aa080112d656",
        "DataFields": [
            {
                "Header": "LocationDetails.LocationID",
                "Value": "BH129"
            }
        ],
    },
    {
        "Id": "47442b4f-f691-4213-b705-aa080112d656",
        "DataFields": [
            {
                "Header": "LocationDetails.LocationID",
                "Value": "BH130"
            }
        ],
    }
]
МОЙ КОД - JavaScript на вкладке "Тесты"

var logReportDataQryResults = JSON.parse(responseBody);
var locationOne = 0;
var locationTwo = 1;
var locationThree = 2;

var boreholeOne = logReportDataQryResults[locationOne].Id;
const objOne = logReportDataQryResults[locationOne].DataFields.find(({ Header }) => Header == 'LocationDetails.LocationID');
const holeOne = objOne ? objOne.Value : 'Not Found';

var boreholeTwo = logReportDataQryResults[locationTwo].Id;
const objTwo = logReportDataQryResults[locationTwo].DataFields.find(({ Header }) => Header == 'LocationDetails.LocationID');
const holeTwo = objTwo ? objTwo.Value : 'Not Found';

var boreholeThree = logReportDataQryResults[locationThree].Id;
const objThree = logReportDataQryResults[locationThree].DataFields.find(({ Header }) => Header == 'LocationDetails.LocationID');
const holeThree = objThree ? objThree.Value : 'Not Found';
Я хочу сделать код более эффективным и читабельным

 09.04.2019 10:57
1
2
73
3
Данный вопрос помечен как решенный
 Ответы 3
Вы можете использовать один объект вместо множества отдельных переменных — используйте .map для перебора местоположений и создания нового массива с необходимой вам информацией:

const logReportDataQryResults = [
    {
        "Id": "ae61098c-eb7c-4ee8-aca7-aa080112d656",
        "DataFields": [
            {
                "Header": "LocationDetails.LocationID",
                "Value": "BH127"
            }
        ],
    },
    {
        "Id": "84cd9a9f-d085-4642-b484-aa080112d656",
        "DataFields": [
            {
                "Header": "LocationDetails.LocationID",
                "Value": "BH128"
            }
        ],
    },
    {
        "Id": "6629d92b-1dcf-4fc1-a019-aa080112d656",
        "DataFields": [
            {
                "Header": "LocationDetails.LocationID",
                "Value": "BH129"
            }
        ],
    },
    {
        "Id": "47442b4f-f691-4213-b705-aa080112d656",
        "DataFields": [
            {
                "Header": "LocationDetails.LocationID",
                "Value": "BH130"
            }
        ],
    }
]

const locations = [0, 1, 2];
const boreholes = locations.map((location) => {
  const { Id, DataFields } = logReportDataQryResults[location];
  const obj = DataFields.find(({ Header }) => Header == 'LocationDetails.LocationID');
  const holeValue = obj ? obj.Value : 'Not Found';
  return { Id, obj, holeValue };
});
console.info(boreholes);
 09.04.2019 11:02
 Ответ принят как подходящий
Вы всегда используете один и тот же шаблон (меняя части, написанные ALL_UPPERCASE):

var boreholeOne = logReportDataQryResults[ LOCATION ].Id;
const objOne = logReportDataQryResults[ LOCATION ].DataFields.find(({ Header }) => Header == 'LocationDetails.LocationID');
const holeOne = objOne ? objOne.Value : 'Not Found';
Вы можете инкапсулировать его в функцию и передать в нее изменяющиеся части:

const getBoreholeValue = (locationId, data) => {
  const id = data[locationId].Id;
  const obj = data[locationId].DataFields.find(({ Header }) => Header == 'LocationDetails.LocationID');
  return obj ? obj.Value : 'Not Found';
}
А затем используйте его следующим образом:

const res1 = getBoreholeValue(0, logReportDataQryResults);
const res2 = getBoreholeValue(1, logReportDataQryResults);
const res3 = getBoreholeValue(2, logReportDataQryResults);
Пример:

const respBody = [
    {
        "Id": "ae61098c-eb7c-4ee8-aca7-aa080112d656",
        "DataFields": [
            {
                "Header": "LocationDetails.LocationID",
                "Value": "BH127"
            }
        ],
    },
    {
        "Id": "84cd9a9f-d085-4642-b484-aa080112d656",
        "DataFields": [
            {
                "Header": "LocationDetails.LocationID",
                "Value": "BH128"
            }
        ],
    },
    {
        "Id": "6629d92b-1dcf-4fc1-a019-aa080112d656",
        "DataFields": [
            {
                "Header": "LocationDetails.LocationID",
                "Value": "BH129"
            }
        ],
    },
    {
        "Id": "47442b4f-f691-4213-b705-aa080112d656",
        "DataFields": [
            {
                "Header": "LocationDetails.LocationID",
                "Value": "BH130"
            }
        ],
    }
]

const getBoreholeValue = (locationId, data) => {
  const id = data[locationId].Id;
  const obj = data[locationId].DataFields.find(({ Header }) => Header == 'LocationDetails.LocationID');
  return obj ? obj.Value : 'Not Found';
}

console.info(getBoreholeValue(0, respBody));
console.info(getBoreholeValue(1, respBody));
console.info(getBoreholeValue(2, respBody));
 09.04.2019 11:15
    var logReportDataQryResults = 
        [
        {
            "Id": "ae61098c-eb7c-4ee8-aca7-aa080112d656",
            "DataFields": [
                {
                    "Header": "LocationDetails.LocationID",
                    "Value": "BH127"
                }
            ],
        },
        {
            "Id": "84cd9a9f-d085-4642-b484-aa080112d656",
            "DataFields": [
                {
                    "Header": "LocationDetails.LocationID",
                    "Value": "BH128"
                }
            ],
        },
        {
            "Id": "6629d92b-1dcf-4fc1-a019-aa080112d656",
            "DataFields": [
                {
                    "Header": "LocationDetails.LocationID",
                    "Value": "BH129"
                }
            ],
        },
        {
            "Id": "47442b4f-f691-4213-b705-aa080112d656",
            "DataFields": [
                {
                    "Header": "LocationDetails.LocationID",
                    "Value": "BH130"
                }
            ],
        }
        ]



    const boreholes=[];

    for (key in logReportDataQryResults) {

        const { Id, DataFields } = logReportDataQryResults[key];
        const obj = DataFields.find(({ Header }) => Header == 'LocationDetails.LocationID');
        const holeValue = obj ? obj.Value : 'Not Found';
        boreholes.push({ "Id": Id,"holeValue": holeValue });
    }
    console.info(boreholes) 
 09.04.2019 11:16

Какой аргумент передается в `np.ones` и как он здесь работает?
Объединить конкретный ключ и значение первого массива во второй массив
Могу ли я написать цикл for, который перебирает как коллекции, так и массивы?
Как рассчитать относительные векторы из списка точек, от одной точки до любой другой точки
JS - Добавить ключ к соответствующему массиву, значения объекта
Метод фильтрации массива для сопоставления идентификаторов и проверки существования свойств
Объединить несколько массивов numpy, присутствующих в списке?
Как создать массив с диапазоном в PostgreSQL
Как получить доступ к членам указателя на указатель на структуру?
Как создать многомерный массив при использовании подготовленных операторов?
Похожие вопросы
Упорядочить ожидание Integer, несмотря на то, что тип поля задан как Float
Проблема с копированием буфера обмена vuejs2
Вызов функции внутри функции в узле js
Как выделить определенный параметр из меню выбора при нажатии?
Как называется функция, которая возвращает выражение с ленивым вычислением?
Непрерывная прокрутка цвета при нажатии
Скрытие столбца с помощью column().visible() в таблице данных не работает
Как использовать плагины SVG.js в vue.js?
Vue.js как заменить текст нажатой кнопки
Может кто-нибудь объяснить мне этот код, он на JavaScript, и я пытаюсь понять, как создаются наблюдаемые

Как исправить ошибку 400 Bad Request в операции .Net Core POST?
Вопросы
ENTITY FRAMEWORK
Как исправить ошибку 400 Bad Request в операции .Net Core POST?
У меня есть API .Net Core 2.1, который публикует данные с использованием ядра EF. Когда я делаю POST-запрос от Postman к http://localhost:3642/task/create, я получаю ошибку 400 Bad Request Error (запрос не может быть выполнен из-за неправильного синтаксиса). Проверить токен AntiForgery с контроллера. Когда я передаю запрос от почтальона с этим изменением, я получаю сообщение о состоянии 200 Ok, но данные не фиксируются в таблице на сервере Sql. Есть ли что-то, что я должен настроить в своем API, что-то еще мне не хватает?

Мой контроллер выглядит следующим образом:

 [HttpPost]
 // [ValidateAntiForgeryToken]
 public async Task<IActionResult> 
Create([Bind("Assignee,Summary,Description")] TaskViewModel taskViewModel)
    {
if (ModelState.IsValid)
            {
                _context.Add(taskViewModel);
 await _context.SaveChangesAsync();
                return RedirectToAction("Index");
            }
            return View();
        }
В TaskViewModel.cs у меня есть:

 public class TaskViewModel 
{
    [Required]
    public long Id { get; set; }

    [Required(ErrorMessage = "Please provide Task Summary")]
    [Display(Name = "Summary")]
    public string Summary { get; set; }

    [Required(ErrorMessage = "Please enter task description")]
    [Display(Name = "Description")]
    public string Description { get; set; }

    [Required(ErrorMessage = "Please select Assignee")]
    [Display(Name = "Assign To")]
    public string Assignee { get; set; }
}
Это моя полезная нагрузка в Postman:

{
    "Assignee": "Ed tshuma",
    "Summary": "Finish reconciliations",
    "Description": "collate all the pending data"
}
 17.04.2019 11:13
13
1
37 935
3
Данный вопрос помечен как решенный
 Ответы 3
Вы должны отправить токен защиты от подделки вместе с запросом, если хотите использовать декоратор [ValidateAntiForgeryToken]. См. эта ссылка для получения дополнительной информации.

Кроме того, даже если ваша модель недействительна, вы return View(). Это означает, что вы получаете статус http 200, даже если отправляете неправильные данные.

Установите точку останова на if (ModelState.IsValid) и проверьте, входите ли вы в нее. Если нет, проверьте формат полезной нагрузки.

Надеюсь, поможет.

РЕДАКТИРОВАТЬ относительно вашей полезной нагрузки и вашей модели: вам необходимо предоставить Id полезную нагрузку из-за декоратора [Required] в вашей модели TaskViewModel. Или вам нужно избавиться от атрибута [Required] на Id. Если вы этого не сделаете, if (ModelState.IsValid) всегда будет ложным.

 17.04.2019 11:22
 Ответ принят как подходящий
Здесь есть ряд проблем. Прежде всего, почему вы сохраняете свою модель представления в базе данных. На самом деле в данном случае это организация, а не модель представления. Вы определенно должны использовать модель представления, но у вас также должен быть отдельный класс сущностей. Затем ваша модель представления должна содержать только те свойства, которые вы действительно хотите разрешить пользователю редактировать, полностью исключая необходимость в атрибуте Bind, которого в любом случае следует избегать. (см.: Бинд это зло).

// added "Entity" to the name to prevent conflicts with `System.Threading.Task`
[Table("Tasks")]
public class TaskEntity
{
    [Key]
    public long Id { get; set; }

    [Required]
    public string Summary { get; set; }

    [Required]
    public string Description { get; set; }

    [Required]
    public string Assignee { get; set; }
}

public class TaskViewModel
{
    [Required(ErrorMessage = "Please provide Task Summary")]
    [Display(Name = "Summary")]
    public string Summary { get; set; }

    [Required(ErrorMessage = "Please enter task description")]
    [Display(Name = "Description")]
    public string Description { get; set; }

    [Required(ErrorMessage = "Please select Assignee")]
    [Display(Name = "Assign To")]
    public string Assignee { get; set; }
}
Также обратите внимание на разделение ответственности. Сущность имеет только то, что имеет значение для базы данных (здесь [Required] указывает, что столбец не должен обнуляться). В то время как модель представления касается только представления. Свойство Id отсутствует, так как оно не нужно и не желательно, а отображаемые имена и сообщения об ошибках, которые должны быть представлены пользователю, размещаются только здесь.

Затем вам нужно будет сопоставить вашу модель представления с вашим классом сущности:

[HttpPost]
[ValidateAntiForgeryToken]
public async Task<IActionResult> Create(TaskViewModel model)
{
    if (!ModelState.IsValid)
        return View(model);

    var task = new TaskEntity
    {
        Assignee = model.Assignee,
        Summary = model.Summary,
        Description = model.Description
    };

    _context.Add(task);
    await _context.SaveChangesAsync();
    return RedirectToAction("Index");
}
Отображение здесь довольно простое, но вы можете использовать библиотеку, такую ​​​​как AutoMapper, чтобы справиться с этим за вас: _mapper.Map<TaskEntity>(model).

Хотя это специально для действия создания, стоит указать на тонкую разницу для обновления. Вы захотите сначала получить существующую задачу из своей базы данных, а затем сопоставить с ней опубликованные значения. Остальное осталось примерно таким же:

[HttpPost]
[ValidateAntiForgeryToken]
public async Task<IActionResult> Update(long id, TaskViewModel model)
{
    if (!ModelState.IsValid)
        return View(model);

    var task = await _context.Tasks.FindAsync(id);
    if (task == null)
        return NotFound();

    task.Assignee = model.Assignee;
    task.Summary = model.Summary;
    task.Description = model.Description;

    await _context.SaveChangesAsync();
    return RedirectToAction("Index");
}
Наконец, что касается основной проблемы из вашего вопроса, есть две проблемы. Во-первых, это действие предназначено для традиционной публикации HTML-формы (x-www-form-urlencoded). Таким образом, нет смысла отправлять на него JSON, и отправить на него JSON не получится. Чтобы проверить это в Postman, вы должны отправить запрос как x-www-form-urlencoded. Если вы этого не сделаете, ваша модель по существу всегда будет недействительной, потому что ничего не будет привязано к вашей модели из тела сообщения.

Чтобы получить JSON, к вашему параметру должен быть применен атрибут FromBody ([FromBody]TaskViewModel model). Однако, если вы это сделаете, вы больше не сможете получать сообщения в традиционной форме, и в этом контексте это то, что будет отправлено. Если вы отправляли через AJAX (где вы могли бы использовать JSON), то вы также должны использовать возвращение JSON или, может быть, PartialView, но не View или редирект.

Наконец, вам нужно включить токен проверки запроса, который должен быть еще одним ключом в имени тела сообщения __RequestVerificationToken. Чтобы получить значение для отправки, вам нужно сначала загрузить GET-версию представления и проверить источник. Там будет скрытый ввод со значением.

 17.04.2019 16:46
Крис Пратт прав, вам нужно отправить __RequestVerificationToken.

Если вы закомментируете атрибут [ValidateAntiForgeryToken], кажется, что вы отправляете данные из Body-raw-JSON, тогда вам нужно использовать [FromBody] для доступа к данным.

[HttpPost]
public async Task<IActionResult> Create([Bind("Assignee,Summary,Description")] [FromBody] TaskViewModel taskViewModel)


Если вы не хотите добавлять [FromBody], вы можете отправить данные с помощью form-data



 19.04.2019 11:13
Другие вопросы по теме
Эффективный способ добавить файл CSV в качестве записей на сервер sql
MongoDB - вставка нескольких типов объектов в одну коллекцию
Исключить контроллер из промежуточного ПО
Путь поиска ASP.NET Core MVC View Component
Принимать только определенный формат DateTime в методе действия
Фреймворк для чистого ядра MVC
Как узнать, запускалась ли задача Hangfire вручную
Как создать представление для выпадающего списка?
Получить значение int из базы данных
Как настроить URL-адрес конечной точки Swagger?
Похожие вопросы
EF Core — составной первичный ключ удаляет один индекс
Фреймворк для чистого ядра MVC
Entity Framework Core не учитывает столбцы Identity
Соединение Linq Query между двумя списками
Entity Framework ASP.NET; HTTP POST: обязательные значения существуют в теле запроса JSON DbEntityValidationException
Получить значение int из базы данных
ASP.NET Core: NullReferenceException при получении внешнего ключа
При добавлении элементов в мою БД (DBContext - EF) эти элементы добавляются в случайные места в таблице, а не друг за другом. Что пойдет не так?
Сложные типы не показывают результата для хранимой процедуры
Как DBContext работает с несколькими сеансами пользователя в C#

Почему объект класса, отправленный в POST, становится NULL?
У меня есть этот метод POST в контроллере API.

public void Post(EngineeringData EngineeringData)
{
    EngineeringDataDAL EngDataDAL = new EngineeringDataDAL();

    EngDataDAL.InsertEngineeringData(EngineeringData);
}
Я отправляю ему тестовые данные, используя POSTMAN.

 EngineeringData = {
    'FunctionalLocation': 'Functional1',
    'WINFileNo': 'WinFileNo-01',
    'EqptType': 'EqptType-01',
    'ComponentTagNo': 'Componenttag-01'
}
но параметр метода null. Почему?

EngineeringData.cs

public class EngineeringData
{
    public int EnggDataID { get; set; }
    public string FunctionalLocation { get; set; }
    public string WinFileNo { get; set; }
    public string EqptType { get; set; }
    public string ComponentTagNo { get; set; }
}
 22.04.2019 19:46
1
2
43
3
Данный вопрос помечен как решенный
 Ответы 3
 Ответ принят как подходящий
Если вы включаете EngineeringData= в свой запрос, это может быть причиной. Насколько мне известно, ASP.Net ожидает, что тело будет простым JSON, а не данными формы.

 22.04.2019 19:51
I have this POST method in api controller.

 public void Post(EngineeringData EngineeringData)
То, что вам, вероятно, не хватает, это

 public void Post([FromBody] EngineeringData EngineeringData)
 22.04.2019 19:52
{ 
    "FunctionalLocation": "Functional1",
    "WINFileNo": "WinFileNo-01",
    "EqptType": "EqptType-01",
    "ComponentTagNo": "Componenttag-01"
}
Попробуйте передать эти данные. Я считаю, что контроллеру должны быть переданы действительные данные JSON для принятия параметров. Также не уверен, нужен ли левый параметр перед знаком =.

 22.04.2019 19:58
Другие вопросы по теме
Не удалось загрузить файл или сборку «PDFLibNet» или одну из ее зависимостей
NPOI при импорте excel - возврат пользовательского интерфейса внутри пользовательского интерфейса вместо таблицы в пользовательском интерфейсе
Nopcommerce — PostProcessPayment пользовательского метода оплаты не перенаправляется на URL-адрес платежного шлюза
Что произойдет, если транзакция.Rollback/Commit никогда не вызывалась до закрытия соединения?
Форматировать пользовательский ввод из текстового поля с помощью javascript в ЧЧ: мм: сс
Удаление элемента из списка на основе свойства
Обновление значений раскрывающегося списка, выбранные значения не должны попадать в следующие раскрывающиеся списки
Как вставить данные в две таблицы на основе параметров
Обработка специального символа '/' в представлении сетки TemplateField
Не удалось получить список элементов в списке
Похожие вопросы
Недопустимое изменение размера столбца в ListView с помощью Expander
SassKit.Multitenancy не совместим с AspNetCore 2.2?
NPOI при импорте excel - возврат пользовательского интерфейса внутри пользовательского интерфейса вместо таблицы в пользовательском интерфейсе
Почему мой шрифт приложения WPF выглядит иначе на моем ПК?
Nopcommerce — PostProcessPayment пользовательского метода оплаты не перенаправляется на URL-адрес платежного шлюза
Как добавить пользовательские заголовки в документ NSwag с помощью C# .NET CORE?
Добавление пары ключ: значение в JToken/JArray
Какой поток используется с Bitmap.Compress()?
Не удается назначить обработчик событий, который использует производный тип для EventArgs в С#
Как добавить растровое изображение в определенный альбом в галерее?

Запрос app.post не работает и выдает ошибку
Я пытаюсь создать внутренний код на стороне сервера для своего веб-сайта. Я попробовал запрос app.get в почтальоне, и он сработал, но когда я попытался Запрос app.post в почтальоне не работал и выдавал мне ошибки.

Я попробовал все решения, которые были доступны в Интернете, и я мог понять (я пользователь Ubuntu).

Скриншот ошибки, который я получаю в Postman

Следующее изображение покажет вам ошибку и формат, который я использовал в почтальоне.

Файл Server.js (основной файл сервера)

const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const app = express();
const mongoose = require("mongoose");
require("dotenv").config();

mongoose.Promise = global.Promise;
mongoose
  .connect(process.env.DATABASE, { useNewUrlParser: true })
  .then(() => console.info("MongoDB Connected"))
  .catch(err => console.info(err));

// // DB config
mongoose.set("useCreateIndex", true);

// const db = require("./config/keys").mongoURI;

// Connect to MongoDB

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

// Models
const { User } = require("./models/user");

//====================================================
//                      USERS
//====================================================

app.post("/api/users/register", (req, res) => {
  const user = new User(req.body);

  user.save((err, doc) => {
    if (err) return res.json({ success: false, err });
    res.status(200).json({ success: true, userdata: doc });
  });
});

app.get("/", (req, res) => res.send("hello world"));

const port = process.env.PORT || 3002;

app.listen(port, () => {
  console.info(`Server running on port ${port}`);
});
Файл модели пользователя (models/user.js)

const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  email: {
    type: String,
    requrired: true,
    trim: true,
    unique: 1
  },
  password: {
    type: String,
    requrired: true,
    minlength: 5
  },
  name: {
    type: String,
    requrired: true,
    maxlength: 100
  },
  lastname: {
    type: String,
    requrired: true,
    maxlength: 100
  },
  cart: {
    type: Array,
    default: []
  },
  history: {
    type: Array,
    default: []
  },
  role: {
    type: Number,
    default: 0
  },
  token: {
    type: String
  }
});

const User = mongoose.model("User", userSchema);

module.exports = { User };
 23.04.2019 14:05
0
2
196
3
Данный вопрос помечен как решенный
 Ответы 3
Запрос почтальона должен быть таким, как показано ниже.

{
   "email": "rohit***@gmail.com",
   "password": "password@123",
   "name": "sher",
   "lastname": "lock"
}
 23.04.2019 14:11
Вы отправляете недопустимый JSON.

Используйте этот JSON для отправки запроса.

 {
      "email":"rohan3131313@gmail.com",
      "password":"password@123",
      "name":"sher",
      "lastname:"lock"
 }
 23.04.2019 14:12
 Ответ принят как подходящий
передайте, что у него есть необработанные данные от почтальона, а затем вызовите post api

{
   "email": "rohan@getMaxListeners.com",
   "password":"pass@123",
   "name":"sher",
   "lastname":"lock"
}
 23.04.2019 14:12
Другие вопросы по теме
Как вставить временную задержку между двумя блоками it блока описания в тесте мокко-чай?
Параметр функции — идентификатор против объекта
Функция Azure NodeJS: обещание blobService.createAppendBlobFromLocalFile не разрешается
Angular 7 CORS выдает ошибку и данные одновременно
API-соединение через узел в форме React
Может ли браузер стать безголовым в середине выполнения, когда он был запущен нормально, или наоборот?
Как реализовать валидатор joi с помощью node js и mongodb
В nodejs простой поисковый запрос с оператором $or
Использовать пакет на GitHub в качестве зависимости без установки Git
Как определить версию хрома, используемую с кукловодом?
Похожие вопросы
Как написать тест для сопоставления данных в массиве в тесте почтальона
Получите идентификатор и установите его в качестве условия на IF для загрузки Progress-Bar
Передать приглашение javascript в переменную PHP
Скользящая анимация при скрытии/показе div
Как я могу преобразовать scrollIntoView с плавной анимацией в обещание?
Как остановить расширение страницы при анимации элемента, чтобы он скользил за пределы экрана?
Как я могу исправить «Ошибка: атрибут <rect> x: ожидаемая длина, «NaNNaN»
Обновление круговой диаграммы chartjs с помощью .keypress() не работает
Отключенное свойство переключателя не работает внутри реактивной формы
Как исправить ошибку превышения времени ожидания для асинхронных тестов и хуков, убедитесь, что вызывается «done()»; если возвращаете обещание, убедитесь, что оно разрешается

PHP
Получить запрос работает в почтальоне, но не работает в браузере
У меня есть веб-приложение, которое использует Angular7 на стороне клиента и CakePHP в Api Я использовал Basic Authentication, затем заменил его на Token Authentication, все запросы работают нормально, кроме одного, который нормально работает только в Postman, но в браузере это странно, потому что кажется, что есть проблема с аутентификацией, но я не мог знать причину.

Запрос должен вернуть большой двоичный объект для загрузки файла, поэтому я использую FPDI в CakePHP, чтобы вернуть pdf

Вот запрос в почтальоне

Заголовок почтальона

Date →Wed, 15 May 2019 12:02:44 GMT
Server →Apache/2.4.33 (Win32) OpenSSL/1.0.2n PHP/5.6.35
X-Powered-By →PHP/5.6.35
Content-Disposition →inline; filename = "doc.pdf"
Cache-Control →private, max-age=0, must-revalidate
Pragma →public
Access-Control-Allow-Origin →*
Keep-Alive →timeout=5, max=100
Connection →Keep-Alive
Transfer-Encoding →chunked
Content-Type →application/pdf
Почтальон ТелоПолучить запрос работает в почтальоне, но не работает в браузереЗапрос в ChromeПолучить запрос работает в почтальоне, но не работает в браузереРабочий запрос с использованием Basic AuthПолучить запрос работает в почтальоне, но не работает в браузерес помощью FireFox

Получить запрос работает в почтальоне, но не работает в браузере

Запрос на звонок

    getWorkListPdf(id: number, cem_id?: number) {
    let uri = `${this.workSessionsUrl}workList/${id}`;
    let params = new HttpParams();
    if (cem_id) {
      params = params.set('cemetery_id', cem_id.toString());
    }
    const Auth = localStorage.getItem("AuthenticationToken");
    let header = new HttpHeaders();
      header = header.append("AuthenticationToken", Auth);
    return this.dataService.get(uri,{ headers: header, params: params, responseType: 'arraybuffer'  })
    .pipe(
      map(res => {
                  return res;
                }
      )
    );
  }
Любая помощь высоко ценится!

 15.05.2019 13:58
11
6
11 445
3
Данный вопрос помечен как решенный
 Ответы 3
Насколько я понимаю, вы хотите пройти аутентификацию с помощью токена носителя вместо базовой авторизации. Если вам нужен базовый, вы можете использовать в своем запросе следующие заголовки:

const httpOptions = {
    headers: new HttpHeaders({ 
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + btoa('username:password')
    })
};
В случае авторизации на предъявителя вы можете сделать следующее:

const httpOptions = {
    headers: new HttpHeaders({ 
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + JSON.parse(your token)
    })
};

Надеюсь, поможет!

 15.05.2019 14:13
Добавьте с учетными данными true в свой запрос.

const httpOptions = {
    headers: new HttpHeaders({
        'Accept': "application/json",
        'Content-Type': "text/plain;charset=UTF-8",
        'Authorization': 'Bearer ' + JSON.parse(your token)
    }), withCredentials: true
};
 15.05.2019 15:48
 Ответ принят как подходящий
Проблема заключалась в том, что Api не может определить, что запрос, который содержит необходимую информацию заголовка для аутентификации, я добавил массив Authentication в AppController, чтобы разрешить использование как Basic Auth, так и Token Auth при получении запроса json, это работает нормально для всех запросов, кроме этого ( Скачать пдф) я пытался добавить

$this->Auth->authenticate['Token'] = array(
                'fields' => array(
                ),
                // 'parameter' => '_token',
                'header' => 'AuthenticationToken',
                'scope' => array(
                    'User.permission_api_login' => true
                )
        );
снова в контроллере, и он отлично работает! кажется, что теперь он может идентифицировать токен и вернуть правильный файл!

 20.05.2019 12:01
Другие вопросы по теме
Angular slickgrid не отображается внутри динамической вкладки (набор вкладок ngx-bootstrap)
Как запомнить геттер TypeScript
Массив/правила запросов Firestore не работают resources.viewers
Преобразование подписки в строку
Передать значение из элемента внутри ngFor в службу
Сбой http-вызова локального хоста Nativescript на iOS
Как искать значение в ngselect?
Angular - Как убедиться, что данные загружаются только один раз
Использовать класс на основе значения свойства
ОШИБКА в ./node_modules/@angular/fire/messaging/messaging.js
Похожие вопросы
Как обновить переменную сеанса после перезагрузки каждой страницы в laravel
Библиотека GD для образа Docker с php:7.1-fpm
Проблема с подключением при размещении проекта: SQLSTATE [HY000] [2002] Отказано в подключении
Есть ли сокращенный способ проверить, существует ли параметр и больше нуля?
Есть ли в PHP эквивалент ASP.NET Placeholder?
Захватить конкретный узел из массива, который спрятан в других
Как сжать/уменьшить качество изображения base64 с помощью php?
Автоматическое заполнение полей при регистрации в Laravel
Какой самый простой способ написать этот PHP-код с синтаксисом Python?
Есть ли способ опубликовать <a> в твите или опубликовать ссылку с текстом, отображаемым вместо URL-адреса?

JAVASCRIPT
Как проверить отсутствие (потенциально) вложенных свойств JSON в Postman?
Я хочу проверить отсутствие вложенного свойства "x"

Тест должен провалиться, если ответ выглядит так

А:

{
    "first": 1,
    "second": {
        "one": 1,
        "two": 2,
        "three": {
            "x": 1,
            "y": 2
        }
    }
}
Но для следующих примеров он должен пройти:

Б:

{
    "first": 1,
    "second": {
        "one": 1,
        "two": 2,
        "three": {
            "y": 2
        }
    }
}
С:

{
    "first": 1,
    "second": {
        "one": 1,
        "two": 2
    }
}
Д:

{
    "first": 1
}
Конечно. Я могу использовать pm.expect(object).to.not.have.property("x") для проверки отсутствия. Но это не будет полезно во всех случаях.

Например, мой тестовый код PostMan:

pm.test("(nested)property 'x' not available", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.second.three).to.not.have.property("x")
});
будет отлично работать для случаев A и B, но не для C и D, потому что родительские "вторые" или "три" свойства могут быть неопределенными. Но я не хочу проверять их отсутствие, потому что это не цель этого конкретного теста.

Есть ли какая-либо функция BDD Chai, которая обеспечивает эту функциональность, или я вынужден реализовать рекурсивную вспомогательную функцию для этого случая?

 17.05.2019 09:46
3
3
926
3
Данный вопрос помечен как решенный
 Ответы 3
Это не совсем то, что вы ищете, но я надеюсь, что это может быть полезно для всех, кто заинтересован.

Сначала преобразуйте JSON в строку, а затем найдите ключевое слово с заключенными в него двойными кавычками, чтобы точно найти точное слово (свойство, которым оно является).

Конечно, это всего лишь концепция, но я думаю, что вы можете попробовать, если ничего не помогает.

Есть возможности для улучшения, я вижу. Так что смело настраивайте, если нужно.

const cases = [{
    "first": 1,
    "second": {
      "one": 1,
      "two": 2,
      "three": {
        "x": 1,
        "y": 2
      }
    }
  },
  {
    "first": 1,
    "second": {
      "one": 1,
      "two": 2,
      "three": {
        "y": 2
      }
    }
  },
  {
    "first": 1,
    "second": {
      "one": 1,
      "two": 2
    }
  },
  {
    "first": 1,
    "example": "notx"
  }
]
const property = "x" // Property that you are looking for its absence
cases.forEach(c => {
  console.info(JSON.stringify(c).includes('"' + property + '"'))
  // True = property is present | False = property is absent
})
 17.05.2019 10:40
 Ответ принят как подходящий
Вы можете использовать встроенные функции Lodash для большей разбивки данных, вместо того, чтобы пытаться сделать все это в инструкции pm.expect().

Функция _.get() может быть полезной для изучения с помощью — https://lodash.com/docs/4.17.11#получить.

 20.05.2019 09:03
Мое окончательное решение:

var a = {
    "first": 1,
    "second": {
        "one": 1,
        "two": 2,
        "three": {
            "x": 1,
            "y": 2
        }
    }
};

var b = {
    "first": 1,
    "second": {
        "one": 1,
        "two": 2,
        "three": {
            "y": 2
        }
    }
};

var c = {
    "first": 1,
    "second": {
        "one": 1,
        "two": 2
    }
};

var d = {
    "first": 1
};


pm.test("(nested)property 'x' NOT available in 'a'", function () { //must fail for a
    var jsonData = a;
    pm.expect(_.get(jsonData, "second.three.x", undefined)).to.be.undefined;
});

pm.test("(nested)property 'x' NOT available in 'b'", function () {
    var jsonData = b;
    pm.expect(_.get(jsonData, "second.three.x", undefined)).to.be.undefined;
});

pm.test("(nested)property 'x' NOT available in 'c'", function () {
    var jsonData = c;
    pm.expect(_.get(jsonData, "second.three.x", undefined)).to.be.undefined;
});

pm.test("(nested)property 'x' NOT available in 'd'", function () {
    var jsonData = d;
    pm.expect(_.get(jsonData, "second.three.x", undefined)).to.be.undefined;
});
 20.05.2019 09:47
Другие вопросы по теме
Получите доступ к веб-сайту с ограниченным доступом OpenVPN с помощью Testcafe
Насмешливая функция, импортированная в начало файла
Экспортировать beforeAll и afterAll в JEST
Протестируйте конкретный метод с уверенностью в Java
Как сохранить результаты отчета из консоли в файл (TestCafe)?
JMeter - несколько функций в поле параметров препроцессора
Как использовать интерфейс Moq Fluent / методы цепочки
CucumberOptions Командная строка Java
При обработке команды произошла неизвестная ошибка на стороне сервера. Исходная ошибка: вы должны включить возможность platformName?
Как установить/определить переменные среды и api_Server в кипарисе?
Похожие вопросы
Невозможно удалить событие touchmove - Vue watcher
Дата и время реального устройства Nativescript
Как импортировать и использовать функцию в другой функции в JS
Как реализовать устанавливаемое и извлекаемое состояние без мутации и переназначения?
Импорт изображений в массив
Draw.io : Почему я не могу печатать текст в IE 11?
Использование библиотеки Color Thief в React не работает
Razor Pages — доступ к значению связанной переменной Razor View после получения запроса ajax на сервере
Почему модальное закрытие события начальной загрузки «стекается»?
Как исправить: ошибка «Это поле обязательно для заполнения» в букмарклете

SIGNALR
Можно ли вызвать в концентратор SignalR из Postman
У меня есть веб-API ASP .Net Core 2.2 с концентратором SignalR. Можно ли вызвать один из его методов (например, SendMessageToAll) с помощью Postman? Проблема в том, что у меня есть только API, без внешнего интерфейса, и мне нужно его протестировать.

Я попытался указать URL-адрес своего концентратора в Postman (api.mydomain.com/chatHub), но тогда я не совсем уверен, как структурировать тело. Я знаю, что SignalR предпочтительно использует WebSockets, и я не знаю, есть ли у PostMan функциональность WebSocket. Я считаю, что SignalR также может выполнять HTTP-запросы, если WebSockets недоступен, что может сделать Postman. Но какое тело я использую? И я использую HTTP GET или POST?

Я видел пост, где человек использовал это тело в Postman:

{
    "Target": "SendMessageToGroup",
    "Arguments": [
        "groupA",
        "hello from server"
    ]
}
Итак, я попробовал то же самое, но когда я нажимаю «Отправить» на почтальоне, метод SendMessageToGroup моего концентратора не срабатывает.

Можно ли вызвать в концентратор SignalR из Postman

Спасибо

 06.06.2019 11:11
25
4
13 885
3
Данный вопрос помечен как решенный
 Ответы 3
 Ответ принят как подходящий
Проверить почтальон > 8. Если вы просто вводите свой концентратор внутри контроллера, вы можете использовать метод концентратора и вызывать его общедоступный метод из http-запроса внутри почтового человека. Или используйте другое приложение: https://stackoverflow.com/a/59543405/4751073

 15.07.2020 05:01
Теперь это возможно с версией Postman> 8.0 с использованием блока запроса WebSocket. Вы можете получить информацию в их сообщении в блоге https://blog.postman.com/postman-supports-websocket-apis/.

 26.05.2021 17:05
у меня работает с ядром asp.net 5 (другие версии не тестировались)

в первую очередь - нужно получить id соединения по почтовому запросу

отправить запрос, чтобы получить идентификатор соединения

затем - соединитесь с id, который вы получили

соединение с полученным идентификатором

после подключения - ваше первое сообщение должно быть {"protocol":"json","version":1}

первое сообщение

то - мы можем использовать этот формат запроса

новое сообщение от почтальона

новое сообщение в браузере

необходимо добавить этот конкретный символ к каждому из ваших запросов веб-сокетов

сеть с js-клиентом

когда конкретный символ не добавлен - запросы не проходят

когда определенный символ не добавлен

 06.03.2022 15:48
Другие вопросы по теме
Массовые запросы API POST/PUT с использованием POSTMAN или любых других средств
Noob - API застревает в простом GET (экспресс, узел)
Почему я должен отключить токен csrf, чтобы публиковать данные с помощью почтальона?
Запрос POST в Postman не работает при добавлении параметров запроса
Какое значение следует указать для параметра «область действия», когда я хочу получить доступ к API-интерфейсу функций Azure, защищенному с помощью Azure AD в Postman
Почтальон - проверить значение из ответа и распечатать на консоли
Spring Controller - тестирование для получения вложенного dto с multipartfile внутри с почтальоном
Как вернуть массив вместо массива объектов в ответе rails json
Преобразование CURL в почтальона
405 Метод не разрешен для УДАЛЕНИЯ
Похожие вопросы
Signalr-Redis «Нет связи с этим идентификатором»
Создание экземпляра класса с IHubContext
Как получить что-то с сервера с помощью SignalR
Концентратор SignalR разрешает значение null внутри обработчика подписки RabbitMQ в ASP.NET Core
SignalR Core, не получая ответа от сервера при подключении клиента
SignalR Core — код состояния: 404, ReasonPhrase: «не найдено», версия: 1.1
JWT + SignalR на ASP Core 3 приводит к 401 несанкционированному доступу
Пользовательская реализация кнопки «Нравится» в ASP .NET CORE с помощью SignalR
Подключение к концентратору сервера из консольного приложения сигнализатора asp.net core 2.2
Как подключиться к концентратору SignalR с помощью ASP.NET Core 2.1

AMAZON WEB SERVICES
Вызов предварительно подписанного URL-адреса S3 с почтальоном
Я пытаюсь использовать предварительно подписанный URL-адрес для загрузки, как описано в документации (https://docs.aws.amazon.com/AmazonS3/latest/dev/PresignedUrlUploadObject.html). Я могу получить предварительно подписанный URL-адрес, но когда я пытаюсь выполнить PUT в Postman, я получаю следующую ошибку:

<Code>SignatureDoesNotMatch</Code>
<Message>The request signature we calculated does not match the signature you provided. Check your key and signing method.</Message>
Очевидно, что структура моего вызова put не соответствует тому, как AWS вычисляет подпись. Я не могу найти много информации о том, что требуется для этого пут-колла.

Я попытался изменить заголовок Content-Type на multipart/form-data и application/octet-stream. Я также попытался отключить раздел заголовков в почтальоне и полагаться на тип тела как для данных формы, так и для двоичных настроек, где я выбираю файл. Настройка form-data приводит к тому, что к вызову добавляется следующее:

Content-Disposition: данные формы; name="thefiletosend.txt"; имя_файла="thefiletosend.txt

Кроме того, я заметил, что почтальон включает то, что он называет «временными заголовками», следующим образом:

Хост: s3.amazonaws.com Content-Type: текстовый/обычный Пользовательский агент: PostmanRuntime/7.13.0 Принять: / Кэш-контроль: без кеша Почтальон-токен: e11d1ef0-8156-4ca7-9317-9f4d22daf6c5,2135bc0e-1285-4438-bb8e-b21d31dc36db Хост: s3.amazonaws.com принять кодировку: gzip, deflate длина содержимого: 14 Соединение: Keep-alive кеш-контроль: без кеша

Заголовок Content-Type может быть одной из проблем, но я не уверен, как исключить эти «временные заголовки» в почтальоне.

Я генерирую предварительно подписанный URL-адрес в лямбде следующим образом:

    public string FunctionHandler(Input input, ILambdaContext context)
    { 
        _logger = context.Logger;
        _key = input.key;
        _bucketname = input.bucketname;

        string signedURL = _s3Client.GetPreSignedURL(new GetPreSignedUrlRequest()
        {
            Verb = HttpVerb.PUT ,
            Protocol = Protocol.HTTPS,
            BucketName = _bucketname,
            Key = _key,
            Expires = DateTime.Now.AddMinutes(5)
        });

        returnObj returnVal = new returnObj() { url = signedURL };

        return JsonConvert.SerializeObject(returnVal);

    }
 06.06.2019 16:00
5
1
11 459
3
Данный вопрос помечен как решенный
 Ответы 3
 Ответ принят как подходящий
Я смог заставить это работать в Postman, используя запрос POST. Вот подробности того, что сработало для меня. Когда я вызываю свою лямбду, чтобы получить предварительно подписанный URL-адрес, вот json, который возвращается (после того, как я замаскировал конфиденциальную и специфичную для приложения информацию):

{
    "attachmentName": "MySecondAttachment.docx",
    "url": "https://my-s3-bucket.s3.amazonaws.com/",
    "fields": {
        "acl": "public-read",
        "Content-Type": "multipart/form-data",
        "key": "attachment-upload/R271645/65397746_MySecondAttachment.docx",
        "x-amz-algorithm": "AWS4-HMAC-SHA256",
        "x-amz-credential": "WWWWWWWW/20200318/us-east-1/s3/aws4_request",
        "x-amz-date": "20200318T133309Z",
        "x-amz-security-token": "XXXXXXXX",
        "policy": "YYYYYYYY",
        "x-amz-signature": "ZZZZZZZZ"
    }
}
В Postman создайте запрос POST и используйте «form-data» для ввода во все поля, которые вы получили, с точно такими же именами полей, которые вы получили в подписанном URL-адресе, показанном выше. Однако не устанавливайте тип содержимого. Затем добавьте еще один ключ с именем «file»:



Справа от слова файла, если вы щелкнете раскрывающийся список, вы можете перейти к файлу и прикрепить его:



На случай, если это поможет, я использую лямбду, написанную на питоне, для создания предварительно подписанного URL-адреса, чтобы пользователь мог загрузить вложение. Код выглядит следующим образом:

signedURL = self.s3.generate_presigned_post(
    Bucket= "my-s3-bucket",
    Key=putkey,
    Fields = {"acl": "public-read", "Content-Type": "multipart/form-data"},
    ExpiresIn = 15,
    Conditions = [
        {"acl": "public-read"},
        ["content-length-range", 1, 5120000]
        ]
    )
Надеюсь это поможет.

 18.03.2020 16:25
Ваш предварительно подписанный URL должен быть похож на https://bucket-name.s3.region.amazonaws.com/folder/filename.jpg?AWSAccessKeyId=XXX&Content-Type=image%2Fjpeg&Expires=XXX&Signature=XXX

Вы можете загрузить на S3 с почтальоном по

Установить указанный выше URL в качестве конечной точки
Выберите PUT запрос,
Body -> binary -> Select file
 16.09.2020 09:27
Ваш предварительно подписанный URL должен быть похож на https://bucket-name.s3.region.amazonaws.com/folder/filename.jpg?AWSAccessKeyId=XXX&Content-Type=image%2Fjpeg&Expires=XXX&Signature=XXX

Вы можете загрузить на S3 с почтальоном по

Установить указанный выше URL в качестве конечной точки Выберите запрос PUT, Тело -> двоичный файл -> Выбрать файл

 08.04.2021 12:10
Другие вопросы по теме
Как я получу ответ об успешной загрузке файла aws в корзину s3 с помощью boto3?
Функция AWS Lambda в VPC не работает с конечной точкой S3
S3ObjectSummary не может вызвать функцию
AWS S3 и Angular, файлы не обновляются
Какое условие можно использовать в политике для принудительного применения корзины S3, требующей шифрования на стороне сервера?
Использование одного и того же доменного имени для внешнего и внутреннего развертывания в aws
Семантика ускорения передачи S3
Доступность и работа мультирегиональных сервисов AWS
Ошибка аутентификации при загрузке файла или отправке электронной почты aws
Попытка переместить все файлы из одного ведра S3 в другое с помощью node.js и exec + aws cli
Похожие вопросы
Необходимо выполнить проверку файла в s3 и скопировать его в две разные таблицы
Сканировать AWS DynamoDB с помощью ScanFilter с вложенным свойством
Как я получу ответ об успешной загрузке файла aws в корзину s3 с помощью boto3?
DynamoDB + Флаттер
Изменяется ли имя отправителя SMS-сообщения AWS SNS для стран, в которых идентификаторы отправителя не поддерживаются?
Функция AWS Lambda в VPC не работает с конечной точкой S3
Экземпляр AWS EC2 недоступен, даже если контейнеры Docker запущены
Как использовать несколько отдельных измерений для пользовательских метрик CloudWatch?
Не удалось создать шлюз API
SageMaker: ClientError: в канале train_lst отсутствует файл .lst. (индивидуальная классификация изображений)

SPRING
Подпись JWT не соответствует локально вычисленной подписи. Достоверность JWT не может быть подтверждена, и ей не следует доверять
Я создаю приложение службы ОТДЫХ на стороне сервера. У меня проблема с токеном аутентификации JWT. Я могу легко получить токен после входа в систему (здесь я использую Почтальон).

Подпись JWT не соответствует локально вычисленной подписи. Достоверность JWT не может быть подтверждена, и ей не следует доверять

Но когда я пытаюсь аутентифицировать запрос на доступ к защищенному контроллеру ОТДЫХ, используя тот же токен, я получаю следующую ошибку:

io.jsonwebtoken.SignatureException: JWT signature does not match locally computed signature. JWT validity cannot be asserted and should not be trusted.
    at io.jsonwebtoken.impl.DefaultJwtParser.parse(DefaultJwtParser.java:354)
    at io.jsonwebtoken.impl.DefaultJwtParser.parse(DefaultJwtParser.java:481)
    at io.jsonwebtoken.impl.DefaultJwtParser.parseClaimsJws(DefaultJwtParser.java:541)
    at com.configuration.jwt.JwtTokenUtil.extractClaims(JwtTokenUtil.java:104)
    at com.configuration.jwt.JwtTokenUtil.getUsernameFromToken(JwtTokenUtil.java:39)
    at com.configuration.jwt.JwtAuthenticationFilter.doFilterInternal(JwtAuthenticationFilter.java:44)
    at org.springframework.web.filter.OncePerRequestFilter.doFilter(OncePerRequestFilter.java:107)
...
это похоже на то, что приложение не помнит сгенерированный токен. Вот запрос на получение от Почтальон, вызвавший эту ошибку:

Подпись JWT не соответствует локально вычисленной подписи. Достоверность JWT не может быть подтверждена, и ей не следует доверять

Я предполагаю, что источником исключения является метод extractClaims моего класса JwtTokenUtil:

@Component
public final class JwtTokenUtil {

    public static final int EXPIRATION_IN_SECONDS = 120;

    private static final String JWT_SECRET = "Some$ecretKey";

    private Clock clock = DefaultClock.INSTANCE;

    @Value("${jwt.secret}")
    private String secret;

    @Value("${jwt.expiration}")
    private Long expiration;

    private JwtTokenUtil() {
        // Hide default constructor
    }

    public String getUsernameFromToken(String token) {
        return extractClaims(token).getSubject();
    }

    public Boolean validateToken(String token, UserDetails userDetails) {
        UserDetailsImp user = (UserDetailsImp) userDetails;
        final String username = getUsernameFromToken(token);
        return (username.equals(user.getUsername()) && !isTokenExpired(token));
    }

    public Date getIssuedAtDateFromToken(String token) {
        return extractClaims(token).getIssuedAt();
    }

    public String generateToken(UserDetails userDetails) {
        Map<String, Object> claims = new HashMap<String, Object>();
        return doGenerateToken(claims, userDetails.getUsername());
    }

    private String doGenerateToken(Map<String, Object> claims, String subject) {
        final Date createdDate = clock.now();
        final Date expirationDate = calculateExpirationDate(createdDate);

        return Jwts.builder().setClaims(claims).setSubject(subject).setIssuedAt(createdDate)
                .setExpiration(expirationDate).signWith(SignatureAlgorithm.HS512, secret).compact();
    }

    private Date calculateExpirationDate(Date createdDate) {
        return new Date(createdDate.getTime() + expiration * 1000);
    }

    public static String createToken(String username, Date issueDate) {
        String jwtToken = Jwts.builder().setSubject(username).setIssuedAt(issueDate)
                .setExpiration(new Date(issueDate.getTime() + EXPIRATION_IN_SECONDS))
                .signWith(SignatureAlgorithm.HS512, JWT_SECRET).compact();

        return jwtToken;
    }

    public static String getSubject(String token) {
        Claims claims = extractClaims(token);
        return claims.getSubject();
    }

    public static String refreshToken(String token, long expirationInSeconds) {
        final Claims claims = extractClaims(token);

        Date now = new Date();
        claims.setIssuedAt(now);
        claims.setExpiration(new Date(now.getTime() + EXPIRATION_IN_SECONDS));

        return createTokenFromClaims(claims);
    }

    public static boolean isTokenExpired(String token) {
        final Claims claims = extractClaims(token);
        Date now = new Date();

        return now.after(claims.getExpiration());
    }

    private static String createTokenFromClaims(Claims claims) {
        return Jwts.builder().setClaims(claims).signWith(SignatureAlgorithm.HS512, JWT_SECRET).compact();
    }

    private static Claims extractClaims(String token) {
        return Jwts.parser().setSigningKey(JWT_SECRET).parseClaimsJws(token).getBody();
    }

}
Это мой JwtAuthenticationFilter класс:

public class JwtAuthenticationFilter extends OncePerRequestFilter {

    @Autowired
    private UserDetailsService userDetailsService;

    @Autowired
    private JwtTokenUtil jwtTokenUtil;

    @Override
    protected void doFilterInternal(HttpServletRequest req, HttpServletResponse res, FilterChain chain)
            throws IOException, ServletException {

        String header = req.getHeader("Authorization");
        String username = null;
        String authToken = null;

        if (header != null && header.startsWith("Bearer ")) {

            authToken = header.replace("Bearer ", "");

            try {

                username = jwtTokenUtil.getUsernameFromToken(authToken);

            } catch (IllegalArgumentException e) {

                logger.error("an error occured during getting username from token", e);

            } catch (ExpiredJwtException e) {

                logger.warn("the token is expired and not valid anymore", e);
            }
        } else {
            logger.warn("couldn't find bearer string, will ignore the header");
        }

        if (username != null && SecurityContextHolder.getContext().getAuthentication() == null) {

            UserDetails userDetails = userDetailsService.loadUserByUsername(username);

            if (jwtTokenUtil.validateToken(authToken, userDetails)) {

                String role = "";

                role = userDetails.getAuthorities().size() > 1 ? "ROLE_ADMIN" : "ROLE_TOURIST";

                UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(
                        userDetails, null, Arrays.asList(new SimpleGrantedAuthority(role)));

                authentication.setDetails(new WebAuthenticationDetailsSource().buildDetails(req));

                logger.info("authenticated user " + username + ", setting security context");

                SecurityContextHolder.getContext().setAuthentication(authentication);
            }
        }

        chain.doFilter(req, res);
    }
}
и я не знаю, имеет ли контроллер входа какое-либо отношение к проблеме, но в любом случае вот код для него:

@PostMapping(value = "/signin")
    public ResponseEntity<?> signin(@Valid @RequestBody LoginForm loginForm) throws AuthenticationException {

        final Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginForm.getUsername(), loginForm.getPassword()));
        SecurityContextHolder.getContext().setAuthentication(authentication);

        final UserDetails user = userService.loadUserByUsername(loginForm.getUsername());

        final String token = jwtTokenUtil.generateToken(user);

        return ResponseEntity.ok(new JwtResponse(token, user.getUsername(), user.getAuthorities()));
    }
Я надеюсь, что кто-то может помочь.

 17.06.2019 23:58
8
1
30 794
3
Данный вопрос помечен как решенный
 Ответы 3
 Ответ принят как подходящий
Я думаю, что EXPIRATION_IN_SECONDS должно быть в миллисекундах, потому что вы добавляете его в getTime(), который находится в миллисекундах. Так что на самом деле должно быть 120000.

 18.06.2019 00:11
Была аналогичная проблема с тем же сообщением об ошибке. Я понял, что это произошло из-за пробелов в предоставленном открытом ключе. Вы можете проверить это. Исправлено с помощью этого фрагмента кода:

   String PUB_KEY = System.getenv("PUBLIC_KEY") ;  // remove ---PUBLIC KEY--- & ---END PUBLIC KEY ---
   String PUBLIC_KEY = "";
        if (!PUB_KEY.isEmpty()) {
            PUBLIC_KEY = PUB_KEY.replace(" ", "");
        }
Надеюсь, поможет.

 06.02.2020 15:21
Возникла та же проблема, в моем случае токен, передаваемый из angular, имеет кавычки в начале/конце. Решается их удалением.

intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token = localStorage.getItem('token');
    if (token) {
        token = token.replace(/^"(.*)"$/, '$1');
    }

    if (token) {
        request = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + token) });
    }

    if (!request.headers.has('Content-Type')) {
        request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
    }

    request = request.clone({ headers: request.headers.set('Accept', 'application/json') });
    console.info("............");
    return next.handle(request);
}

   
 30.07.2021 17:10
Другие вопросы по теме
Поиск способа создания API-соединения HTTPS REST через IP-адрес (включая сертификат SSL)
Вызов службы REST с помощью Business Central и JBPM
Content Тип полезной нагрузки POST-запроса
Будьте уверены: почему я получаю исключение IllegalStateException?
Проблема со службой WCF REST при отключении анонимной аутентификации
Удаление файлов из SharePoint в Интернете, почему это всегда приводит к ошибке 403?
Как Angular узнает, какой Spring Boot REST API вызывать?
Именование ресурсов REST API по пути
REST API на основе фляги: зефир против фляги-успокоения
Как преобразовать данный словарь в объект JSON, содержащий массив JSON в Swift?
Похожие вопросы
Пользовательский AccessDecisionManager неожиданно запускается
JasperReports не может экспортировать файлы PDF
Как представить карту в application.properties — Spring Boot
Как передать значение ключа в одном параметре в Spring REST
Правильный синтаксис Thymeleaf в теге th: replace
Spring Boot — шаблоны Thymeleaf и Json
Ошибка создания bean-компонента с именем: не удалось внедрить автосвязанные зависимости, не удалось разрешить заполнитель
Как избежать избыточного трафика в приложении Spring Boot?
Spring Handle FlashAttributes после RedirectView
Не получается целочисленное значение из файла свойств

POSTMAN
Почему Postman изменяет сохраненные запросы API
Я использую Postman для тестирования API, мне нравится его графический интерфейс и простота использования. Но некоторые вещи, которые он делает, мне совершенно непонятны. Пример: я сохраняю запрос API в коллекцию. Через некоторое время я пытаюсь вспомнить его, и он изменился. Почему?

Сценарий: тестирование API ElasticSearch

ПОЛУЧИТЬ _cat/indices.
Сохранить в коллекцию ElasticSearch.
Отправьте другие запросы ES API.
Удалить индекс: DELETE /index0
Вызов сохраненных _cat/indices
Вместо этого вызывается DELETE /index0. Почему?
 25.06.2019 22:55
1
0
1 344
3
Данный вопрос помечен как решенный
 Ответы 3
 Ответ принят как подходящий
Postman имеет вкладки вверху, где каждая вкладка содержит данные для данного запроса. Когда вы редактируете содержимое вкладки, вы также редактируете сохраненный запрос. Если вы вручную нажмете «Сохранить», изменения в запросе будут сохранены.

Способом избежать этого было бы убедиться, что каждый раз, когда вы пишете новый запрос и не собираетесь вносить изменения в существующий, вы делаете это на новой вкладке запроса (нажмите кнопку + в строке вкладки) , который затем можно при желании сохранить как новый именованный запрос.

 25.06.2019 22:59
Возможно, вы отключили параметр «Всегда спрашивать при закрытии несохраненных вкладок» в «Настройки» -> «Основные». Когда этот параметр отключен, вам не нужно нажимать «Сохранить», он будет автоматически сохраняться при закрытии вкладки.

 02.04.2020 23:11
Чтобы отключить автосохранение, сделайте следующее:

Перейдите в «Настройки» -> «Основные».
Включите параметр Всегда спрашивать при закрытии несохраненных вкладок.
Откройте сохраненный запрос, затем измените что-то в запросе.
Закройте вкладку с запросом. Почтальон спросит, хотите ли вы сохранить изменения. Там будет галочка "всегда отбрасывать несохраненные изменения". Установите флажок.
Нажмите «Не сохранять».
 28.07.2020 21:47
Другие вопросы по теме
Почтальон получает ошибку 404 для ASP.NET Core Web API
Создать запись для current_user с помощью почтальона ruby ​​on rails
Запрос Couchbase Bucket от Postman — нераспознанный параметр в запросе
Интеграционное тестирование развернутых сервисов с помощью «рулевого теста»
Почтовый запрос почтальона возвращает ноль
Заголовки почтальона запрашивают, как сохранить и использовать в следующем запросе
Аутентификация nodejs IBM Cloud Object Storage
Ошибка в Postman 500 Внутренняя ошибка сервера API
Как преобразовать класс в python в фрейм данных pandas?
Отправка HTTP-сообщения с помощью Python, отсутствующие значения при работе с Postman
Похожие вопросы
АДЛС Gen-2. Получить ошибку AuthorizationPermissionMismatch из запроса PUT о создании новой файловой системы почтальоном
Сценарий предварительного запроса Postman повторяет тело запроса JSON
Сбор/экспорт дубликатов почтальона + реимпорт
Проверка подлинности Google Azure Function v2 с помощью Google
Как отправить данные формы с помощью запросов python?
Почтальон не подключается к API Dynamics365 с использованием учетных данных клиента Oauth, консольное приложение работает с теми же данными
Запрещенная ошибка в почтовом запросе при использовании почтальона, но не в curl
Как отправить файл/изображение из React на сервер node.js
Почтальон дает ответ об успехе, в то время как тот же API выдает ошибку при вызове через код
Как «преобразовать» вызов Java REST в вызов Postman REST

JAVASCRIPT
Данные POST в MySQL с помощью NodeJS и Postman
В целом я новичок и пытаюсь использовать MySQL с nodeJS, чтобы иметь возможность интегрировать проекты в WordPress.

app.post('/users/add', (req, res) => {
  id = req.body.id, firstname = req.body.firstname, surname = 
  req.body.surname  
  let sql = "INSERT INTO `users_tbl` VALUES (id, firstname, surname)";          

  db.query(sql, [id, firstname, surname], 
  (err, rows, fields) => {

    if (!err) 
      res.send("User successfully added");
    else 
      console.info(err);
  });
})
С данным кодом я могу добавить через Postman запись, но пустую. Я уже пытался присвоить свои значения ключам после VALUES, но, возможно, мой синтаксис был неправильным.

 03.07.2019 13:06
0
1
2 983
3
Данный вопрос помечен как решенный
 Ответы 3
Добавьте точку останова или используйте console.info, чтобы проверить, действительно ли вы получаете поля тела в req.body. Попробуйте установить «Content-Type» как application/json в заголовках при отправке запроса через почтальона и отправить необработанный json в теле.

 03.07.2019 13:11
app.post('/users/add', (req, res) => {
   id = req.body.id, 
   firstname = req.body.firstname, 
   surname = req.body.surname  
   let sql = "INSERT INTO `users_tbl` (id, firstname, surname) VALUES 
              (?,?,?)";          

   db.query(sql, [id, firstname, surname], (err, rows, fields) => {
       if (!err) 
         res.send("User successfully added");
       else 
         console.info(err);
    });
});
Попробуйте этот код, просто замените свои значения на ? и снова запустите почтальона.

 03.07.2019 13:15
 Ответ принят как подходящий
Предполагая, что вы используете этот модуль.

db.query(sql, [id, firstname, surname]
Здесь вы передаете переменные в свой запрос, чтобы они заменили значения заполнителей.

let sql = "INSERT INTO `users_tbl` VALUES (id, firstname, surname)";
Но здесь вы просто поместили имена столбцов вместо маркеров-заполнителей.

Измените это на:

let sql = "INSERT INTO `users_tbl` VALUES (?, ?, ?)";
В сторону: вам, вероятно, следует, чтобы поле id было полем с автоинкрементом, а не значением, отправленным пользователем.

 03.07.2019 13:16
Другие вопросы по теме
Удаление части строки после определенного символа с помощью mysql
Оптимизация SQL-запроса. Извлечение записей из двух таблиц с несколькими строками во второй таблице
MySQL получает количество столбцов из другой таблицы в подзапросе
При использовании sum() в запросе без возврата результата null
Количество разных идентификаторов пользователей, встречающихся в таблице более 3 раз
Вывод Mysql из двойной строки в один ряд, сгруппированный по ключу
Ошибка даты и времени в сгенерированных столбцах в MySQL
Как упорядочить по столбцу связанной таблицы в красноречивом laravel?
Создать представление mysql для отношений «многие ко многим»
Группировка mysql в mssql со смешанными полями
Похожие вопросы
Блок Mongoose .catch одинаков во многих местах. Как этого избежать?
Использование дат при запросе MSSQL из node.js
Обслуживание предполетного запроса с помощью ExpressJS
Как сделать fillColor градиентом в chart.js?
AmCharts - Как расширить дочерние элементы только первого уровня в Force Directed Tree
Как создать функцию, в которой вы передаете объект и ключ и возвращаете значение вложенного объекта
Примените функциональность ползунка диапазона JS к нескольким селекторам идентификаторов
На основе элементов массива, возвращающих разные выходные данные
Функция обратного вызова второго параметра SetState не работает
Внезапно Chrome начал блокировать всплывающее окно

TL;DR, Key Postman Concepts Interviewers Test
What is Postman and Why Is It Used in API Testing?
Core Postman Interview Questions for Fresher and Junior QA Roles
What is Postman?
What are the main features of Postman?
What is an API? How does Postman help in API testing?
What are HTTP methods? Which ones does Postman support?
What is a Postman Collection?
What is the difference between a request and a collection in Postman?
What is a Postman Workspace?
What are Postman environments?
How do you send a GET request in Postman?
What is the purpose of the Postman Console?
What response codes do you commonly verify in Postman tests?
How do you add query parameters in Postman?
What is the difference between path variables and query parameters?
How do you add headers to a request in Postman?
Is Postman free to use?
Intermediate Postman Questions That Separate Hireable Candidates From the Rest
What are variables in Postman? What are the different types?
What is the difference between global, environment, and local variables?
How do you set and retrieve a variable in a Postman script?
What are pre-request scripts in Postman and when should you use them?
What are test scripts in Postman?
How do you chain requests in Postman using variables?
What is the Postman Collection Runner?
What are Postman Monitors?
What are Mock Servers in Postman?
What is the difference between a mock server and a real server?
How do you handle authentication in Postman API testing?
What is OAuth 2.0 and how do you configure it in Postman?
What is Postman's Collection-level authorization?
How do you import and export collections in Postman?
Can Postman test GraphQL APIs?
What is Newman in Postman and How Is It Used in CI/CD?
How do you integrate Postman/Newman with GitHub Actions?
How do you integrate Postman with Jenkins CI/CD?
What is data-driven testing in Postman?
What are JavaScript assertion libraries available in Postman test scripts?
How do you write a test to validate a JSON schema in Postman?
How do you handle dynamic tokens and session management in Postman?
What is pm.sendRequest() and when would you use it?
How do you handle pagination in Postman testing?
What is postman.setNextRequest() and how does it work?
Postman Newman Interview Questions
What are the most commonly used Newman CLI flags?
What reporters does Newman support?
Postman Collections, Environments, and Variables, Interview Questions
How do you share collections with your team in Postman?
How do you use environment variables to switch between Dev, Staging, and Production?
What is the difference between "Initial Value" and "Current Value" in Postman variables?
Authentication and Authorization in Postman, Interview Questions
What authorization methods does Postman support?
How do you test API security/authorization in Postman?
Data-Driven Testing and CI/CD Integration Questions
What is the difference between running a collection in Postman GUI vs. Newman?
How do you generate a test report from Newman?
How do you handle sensitive data (passwords, API keys) securely in Postman?
Postman vs Swagger, Comparison Questions
What is the difference between Postman and Swagger?
Can Postman import Swagger/OpenAPI specifications?
Postman Flows and AI Features, 2025/2026 Questions
What is Postman Flows?
What are Postman's AI-powered features in 2025–2026?
How do you test WebSocket APIs in Postman?
Conclusion
Frequently Asked Questions
Is Postman free to use?
What programming language do Postman test scripts use?
How many types of variables does Postman support?
Can Postman test GraphQL APIs?
What is Newman and how does it work?
How do you run a Postman collection from the command line?
How do you share Postman collections with a team?
What certifications are available for Postman?
What is the salary of a Postman API tester in India?
What are Postman Monitors and why are they useful?
Can Postman replace Selenium?
Is Postman enough for SDET roles?
Which is better: Postman or REST Assured?
Can Postman automate APIs completely?
Does Postman support microservices testing?
Can Postman test WebSockets and GraphQL together?
How long does it take to learn Postman?
TL;DR, Key Postman Concepts Interviewers Test
Concept	What It Is
Collections	Groups of saved API requests for organized testing
Environments	Variable sets for switching between Dev / Staging / Prod
Newman	Postman’s CLI runner for CI/CD pipeline integration
Pre-request Scripts	JavaScript that runs before a request is sent
Test Scripts	Scheduled, automatic collection runs for API health checks
Monitors	Scheduled, automatic collection runs for API health checks
Mock Servers	Simulate API endpoints before the backend is ready
Postman Flows	Visual, no-code API workflow builder (introduced 2023)
What is Postman and Why Is It Used in API Testing?
Postman is an API development and testing platform that allows developers and QA engineers to send HTTP requests, automate tests, and manage API collections without writing extensive code. It supports REST, SOAP, and GraphQL APIs and is used by over 25 million developers worldwide, including teams at Microsoft, Salesforce, and Twitter.


🚀 Postman began as a simple Chrome extension side project in 2012 and has now grown into one of the world’s most popular API platforms, serving 25M+ developers worldwide.

🔐 Postman includes Vault Variables for encrypted secret storage, a powerful feature many testers still overlook during API automation and CI/CD workflows.

⚙️ Newman, Postman’s CLI runner, returns different exit codes for test failures vs. collection errors, making debugging in Jenkins and GitHub Actions pipelines much easier.

🔗 You can even add a “Run in Postman” button to API documentation or websites, allowing developers to import collections with a single click.

🧪 The Postman Console supports console.table(), making array and object debugging far cleaner and easier than traditional console.log().
Core Postman Interview Questions for Fresher and Junior QA Roles
Beginner-Level Postman Interview Questions
If you’re just getting started with Postman, interviewers will want to check your understanding of the basics, like how to send a request, use environments, or read a response. These beginner-level questions focus on core concepts and the everyday features you’ll use while testing APIs with Postman.

MDN
1. What is Postman?
What is Postman, and why is it used?
Postman is an API platform used for building, testing, and documenting APIs. It provides a GUI to send HTTP/HTTPS requests (GET, POST, PUT, DELETE, PATCH) and inspect responses, without needing to write code. It also supports automated testing via JavaScript test scripts, environment management, and team collaboration through workspaces.

2. What are the main features of Postman?
Postman’s key features include:

Collections:  Organize and group related API requests
Environments:  Manage variables for different configurations (Dev, Staging, Prod)
Test Scripts: Write JavaScript assertions to validate API responses
Mock Servers:  Simulate API endpoints during development
Monitors:  Schedule automated collection runs for health checks
Newman:  CLI runner for CI/CD pipeline integration
Postman Flows: Visual no-code API workflow builder
API Documentation: Auto-generate docs from collections
You May Also Like: Top 100+ Manual Testing Interview Questions and Answers 

3. What is an API? How does Postman help in API testing?
API (Application Programming Interface) is a set of rules that allows one software application to communicate with another. Postman helps in API testing by providing a user-friendly interface to send requests to API endpoints, inspect responses, automate test assertions, and manage test data,  eliminating the need for manual command-line testing using tools like cURL.

4. What are HTTP methods? Which ones does Postman support?
HTTP Method	Purpose
GET	Retrieve data from a server
POST	Send/create new data on a server
PUT	Update an entire existing resource
PATCH	Update part of an existing resource
DELETE	Remove a resource from the server
HEAD	Like GET but returns headers only (no body)
OPTIONS	Returns supported HTTP methods for a URL
Postman supports all standard HTTP methods, including GET, POST, PUT, PATCH, DELETE, HEAD, and OPTIONS.

5. What is a Postman Collection?
A Postman Collection is a group of saved API requests organized into folders. Collections let you group related requests (e.g., all user authentication endpoints), run them in sequence using the Collection Runner, share them with teammates, and export them as JSON for version control. Collections are the core unit of organization in Postman.

6. What is the difference between a request and a collection in Postman?
A request is a single API call (e.g., GET /users). A collection is a container that holds multiple related requests, organized into folders. Collections can be run as a batch using the Collection Runner or Newman CLI, making them the foundation of automated API testing in Postman.

Find out: 10 Common Limitations in Automation Testing 

7. What is a Postman Workspace?
A Postman Workspace is a collaborative environment where teams can organize and share collections, environments, APIs, and mock servers. Workspaces can be Personal (only you), Team (shared with teammates), or Public (open to everyone). They enable collaboration without needing to export and re-import collections manually.

8. What are Postman environments?
A Postman Environment is a set of key-value variable pairs used to switch between different configurations (Dev, Staging, Production) without modifying individual requests. For example, instead of hardcoding https://dev.api.example.com, you set a variable {{base_url}} and define its value differently per environment.

9. How do you send a GET request in Postman?
Open Postman and click New Request
Select GET from the HTTP method dropdown
Enter the API endpoint URL (e.g., https://api.example.com/users)
Click Send
View the response body, status code, headers, and response time in the bottom panel
10. What is the purpose of the Postman Console?
The Postman Console (View → Show Postman Console) is a debugging panel that logs all HTTP requests and responses, including headers, body, and pre-request/test script output. It is the first place you check when a request isn’t behaving as expected. You can also use console.log() in scripts to print values for debugging.

11. What response codes do you commonly verify in Postman tests?
Status Code	Meaning
200 OK	Request succeeded
201 Created	Resource successfully created (POST)
400 Bad Request	Client sent invalid request data
401 Unauthorized	Authentication is required or failed
403 Forbidden	Authenticated but not allowed
404 Not Found	Resource doesn’t exist
500 Internal Server Error	Server-side failure
12. How do you add query parameters in Postman?
In Postman, you can add query parameters two ways:

Method 1: Type them directly in the URL: https://api.example.com/users?page=1&limit=10
Method 2: Click the Params tab below the URL bar and add key-value pairs, Postman automatically appends them to the URL
13. What is the difference between path variables and query parameters?
Path Variable	Query Parameter
Location	Embedded in the URL path	Appended after ?
Example	/users/:id → /users/42	/users?id=42
Required	Usually required	Usually optional
Used for	Identifying a specific resource	Filtering, sorting, pagination
14. How do you add headers to a request in Postman?
Click the Headers tab in the request builder and add key-value pairs. Common headers include:

Content-Type: application/json: tells the server the request body format
Authorization: Bearer <token>:   passes authentication tokens
Accept: application/json:  specifies the expected response format
15. Is Postman free to use?
Yes. Postman offers a free tier that includes unlimited collections, environments, and API calls for individuals. Paid plans (Basic, Professional, Enterprise) add features like team collaboration, advanced mock servers, custom domains for documentation, and priority support. For most interview prep and individual API testing, the free tier is sufficient.

Read More: How to Use a Postman Tool?


Intermediate Postman Questions That Separate Hireable Candidates From the Rest
Intermediate-Level Postman Interview Questions
Once you’ve mastered the basics, interviewers will dig deeper into how you manage workflows, write scripts, and automate testing. 

These intermediate questions test your hands-on experience with Postman’s more powerful features like chaining requests, environment variables, pre-request/test scripts, and the Collection Runner.

16. What are variables in Postman? What are the different types?
Postman variables store reusable values (like base URLs, tokens, or IDs) that can be referenced across requests using double curly braces: {{variable_name}}.,

Variable Type	Scope	Persists After Run?	Best Use Case
Global	All collections & environments	Yes	Constants shared across everything
Environment	Specific environment only	Yes	Dev / Staging / Prod config values
Collection	Within one collection	Yes	Collection-level shared data
Local	Single request or script	No	Temporary, per-request calculation
Data	From external file (CSV/JSON)	No	Data-driven testing
17. What is the difference between global, environment, and local variables?
Global variables in Postman are accessible across all collections and workspaces, making them ideal for constants shared everywhere (e.g., API version). Environment variables are scoped to a specific environment (Dev, Staging, Production), allowing you to switch configurations without modifying individual requests. Local variables exist only during a single request or script execution and are discarded afterward.

18. How do you set and retrieve a variable in a Postman script?
// Set an environment variable

pm.environment.set(“authToken”, “eyJhbGciOiJIUzI1NiJ9…”);

// Set a global variable

pm.globals.set(“userId”, “12345”);

// Set a local (temporary) variable

pm.variables.set(“tempValue”, “abc”);

// Get/retrieve a variable

const token = pm.environment.get(“authToken”);

const id = pm.globals.get(“userId”);

// Log to Postman Console for debugging

console.log(“Token is:”, token);

19. What are pre-request scripts in Postman and when should you use them?
Pre-request scripts are JavaScript code that runs before a request is sent. They are used to:

Generate dynamic data (timestamps, random IDs)
Set authentication tokens before each request
Chain requests by passing data from one call to the next
Perform calculations needed in the request body
// Example: Generate a timestamp before sending

const timestamp = new Date().toISOString();

pm.environment.set(“currentTimestamp”, timestamp);

// Example: Generate a random user ID

const randomId = Math.floor(Math.random() * 10000);

pm.environment.set(“randomUserId”, randomId);

20. What are test scripts in Postman?
Test scripts are JavaScript code that runs after a response is received. They validate that the API behaved as expected by asserting response status codes, body content, response time, and header values using Postman’s pm.test() and pm.expect() methods.

// Check status code is 200

pm.test(“Status code is 200”, function () {

  pm.response.to.have.status(200);

});

// Check response body contains expected field

pm.test(“Response has user ID”, function () {

  const jsonData = pm.response.json();

  pm.expect(jsonData).to.have.property(“id”);

});

// Check response time is under 500ms

pm.test(“Response time is acceptable”, function () {

  pm.expect(pm.response.responseTime).to.be.below(500);

});

// Check a specific field value

pm.test(“User email is correct”, function () {

  const jsonData = pm.response.json();

  pm.expect(jsonData.email).to.eql(“test@example.com”);

});

21. How do you chain requests in Postman using variables?
Request chaining passes data from one request’s response to the next request automatically. For example, after a login request returns an authToken, you capture it and use it in subsequent requests:

// In the Test Script of your LOGIN request:

pm.test(“Capture auth token”, function () {

  const jsonData = pm.response.json();

  pm.environment.set(“authToken”, jsonData.token);

});

Then in the next request, use {{authToken}} in the Authorization header, Postman automatically injects the captured value.

22. What is the Postman Collection Runner?
The Collection Runner is a built-in Postman tool that executes all requests in a collection sequentially or in a defined order. It allows you to:

Run all tests in a collection at once
Use a CSV or JSON data file for data-driven testing
Set the number of iterations
View pass/fail results for each request in a single dashboard
Access it via Runner button in the top toolbar.

23. What are Postman Monitors?
Postman Monitors are scheduled, automated runs of a Postman collection. They allow you to continuously test your API’s health, performance, and correctness at defined intervals (every 5 minutes, hourly, daily). Monitors run in the cloud and send alerts when a test fails,  acting as an API uptime checker. They are particularly useful for catching regressions in production APIs.

Want to go beyond Postman? Learn how Newman, Docker, and Jenkins work together in production HCL GUVI  DevOps Course, available in Tamil & English. 

24. What are Mock Servers in Postman?
A Mock Server in Postman simulates an API endpoint before the actual backend is built. Developers can define expected request-response pairs using examples, and Postman generates a mock URL that returns those responses. This enables frontend and backend teams to work in parallel without waiting for the real API to be ready.

25. What is the difference between a mock server and a real server?
Mock Server	Real Server
Data	Returns predefined, static example	Returns live, dynamic data
Purpose	Development & early-stage testing	Integration & production testing
Speed	Instant setup, no backend needed	Requires backend to be running
Use Case	Parallel development, contract testing	End-to-end, regression testing
26. How do you handle authentication in Postman API testing?
Postman supports multiple authentication methods. You configure them under the Authorization tab of a request or at the collection level (so all requests inherit it):

Auth Type	How It Works
No Auth	Public APIs requiring no authentication
API Key	Key sent in header or query parameter
Basic Auth	Base64-encoded username:password in header
Bearer Token	Token sent in Authorization: Bearer <token> header
OAuth 1.0	Signs requests with a cryptographic signature
OAuth 2.0	Token-based; supports Authorization Code, Client Credentials flows
AWS Signature	AWS-specific signing mechanism
NTLM / Hawk	Windows / specialized auth protocols
Best practice: Set auth at the Collection level and use {{authToken}} variables,  this avoids repeating credentials in every request.

27. What is OAuth 2.0 and how do you configure it in Postman?
OAuth 2.0 is an authorization framework that allows apps to access resources on behalf of a user without exposing credentials. In Postman:

Go to Authorization tab → Select OAuth 2.0
Click Get New Access Token
Enter: Grant Type, Callback URL, Auth URL, Access Token URL, Client ID, and Client Secret
Click Request Token,  Postman handles the token exchange
Use the token in subsequent requests automatically
28. What is Postman’s Collection-level authorization?
When you set authorization at the Collection level, all requests inside that collection automatically inherit those credentials. Individual requests can override this by selecting a different auth type. This is best practice for large collections,  it avoids repeating the same token configuration across dozens of requests and makes token rotation easier.

Explore: Automation Testing 101: An Informative Guide 

29. How do you import and export collections in Postman?
Export: Right-click a collection → Export → choose Collection v2.1 format → saves as JSON
Import: Click Import in the top left → drag and drop the JSON file or paste a URL
Collections can also be shared via a public link or synced through a Postman Workspace for team collaboration
30. Can Postman test GraphQL APIs?
Yes. Postman has built-in GraphQL support. To test a GraphQL API:

Create a new request and set the URL to your GraphQL endpoint
Select GraphQL as the request body type
Write your query in the Query editor,  Postman auto-fetches the schema for autocomplete
Add variables in the GraphQL Variables section

Advanced Postman Interview Questions for Experienced Professionals

Advanced-Level Postman Interview Questions
At the advanced level, it’s all about real-world problem-solving. These questions assess your ability to handle dynamic data, automate token refresh, integrate Postman into CI/CD pipelines, and debug efficiently.

31. What is Newman in Postman and How Is It Used in CI/CD?
Newman is Postman’s open-source command-line collection runner that allows you to execute Postman collections directly from the terminal,  without opening the Postman GUI. It is the primary tool for integrating Postman API tests into CI/CD pipelines like Jenkins, GitHub Actions, CircleCI, and GitLab CI.

Install Newman:

npm install -g newman

Run a collection:

newman run MyCollection.json

Run with an environment file:

newman run MyCollection.json -e dev-environment.json

Run with a data file (data-driven testing):

newman run MyCollection.json -d testdata.csv –reporters cli,htmlextra

Generate an HTML report:

npm install -g newman-reporter-htmlextra

newman run MyCollection.json –reporters htmlextra –reporter-htmlextra-export report.html

32. How do you integrate Postman/Newman with GitHub Actions?
# .github/workflows/api-tests.yml

name: API Tests with Newman

on: [push, pull_request]

jobs:

  newman-tests:

    runs-on: ubuntu-latest

    steps:

      – uses: actions/checkout@v3

      – name: Install Node.js

        uses: actions/setup-node@v3

        with:

          node-version: ’18’

      – name: Install Newman

        run: npm install -g newman newman-reporter-htmlextra

      – name: Run Postman Collection

        run: |

          newman run ./collections/MyAPI.json \

            -e ./environments/staging.json \

            –reporters cli,htmlextra \

            –reporter-htmlextra-export results/report.html

      – name: Upload Report

        uses: actions/upload-artifact@v3

        with:

          name: newman-report

          path: results/report.html

Also Read: Software Testing vs. Quality Assurance (QA) 

33. How do you integrate Postman with Jenkins CI/CD?
Install Node.js and Newman on the Jenkins agent: npm install -g newman
Export your Postman collection and environment as JSON files and commit them to your repository
In the Jenkins pipeline, add a build step to run Newman:
// Jenkinsfile

pipeline {

  agent any

  stages {

    stage(‘API Tests’) {

      steps {

        sh ‘newman run collections/MyAPI.json -e environments/staging.json –reporters cli,junit –reporter-junit-export results/newman-report.xml’

      }

    }

    stage(‘Publish Results’) {

      steps {

        junit ‘results/newman-report.xml’

      }

    }

  }

}

Postman is only one piece of the DevOps pipeline. If you want to confidently answer how Newman fits into Jenkins or GitHub Actions in a real interview, HCL GUVI Advanced DevOps & Cloud Engineering Course covers CI/CD, Docker, Kubernetes, and more,  with hands-on projects and placement support. 

34. What is data-driven testing in Postman?
Data-driven testing runs the same API request multiple times with different input values, sourced from an external CSV or JSON file. This lets you test an endpoint against many data sets in one automated run rather than creating separate requests for each test case.

Step-by-step setup:

Create a CSV file (testdata.csv):
username,password,expectedStatus

admin,password123,200

user1,wrongpass,401

,empty,400


In your Postman test script, use {{username}} and {{password}} as variables in the request body.
In Collection Runner, upload the CSV under Data File and set Iterations to the number of rows.
Via Newman CLI:
newman run MyCollection.json -d testdata.csv

35. What are JavaScript assertion libraries available in Postman test scripts?
Postman uses ChaiJS as its underlying assertion library, exposed through the pm.expect() API. Common assertions:

const data = pm.response.json();

// Type checks

pm.expect(data.id).to.be.a(‘number’);

pm.expect(data.name).to.be.a(‘string’);

// Value checks

pm.expect(data.status).to.equal(‘active’);

pm.expect(data.items).to.have.lengthOf(3);

// Inclusion checks

pm.expect(data.roles).to.include(‘admin’);

pm.expect(data).to.have.property(’email’);

// Negation

pm.expect(data.error).to.be.undefined;

// Nested checks

pm.expect(data.address.city).to.equal(‘Chennai’);

36. How do you write a test to validate a JSON schema in Postman?
const schema = {

  type: “object”,

  required: [“id”, “name”, “email”],

  properties: {

    id: { type: “number” },

    name: { type: “string” },

    email: { type: “string”, format: “email” },

    active: { type: “boolean” }

  }

};

pm.test(“Response matches JSON schema”, function () {

  pm.response.to.have.jsonSchema(schema);

});

37. How do you handle dynamic tokens and session management in Postman?
Use a pre-request script at the collection level to check if a token exists and is valid; if not, send a fresh login request and store the new token:

// Collection-level pre-request script

const token = pm.environment.get(“authToken”);

const tokenExpiry = pm.environment.get(“tokenExpiry”);

if (!token || Date.now() > tokenExpiry) {

  pm.sendRequest({

    url: pm.environment.get(“base_url”) + “/auth/login”,

    method: “POST”,

    header: { “Content-Type”: “application/json” },

    body: {

      mode: “raw”,

      raw: JSON.stringify({

        username: pm.environment.get(“username”),

        password: pm.environment.get(“password”)

      })

    }

  }, function (err, response) {

    const json = response.json();

    pm.environment.set(“authToken”, json.token);

    pm.environment.set(“tokenExpiry”, Date.now() + 3600000); // 1 hour

  });

}

38. What is pm.sendRequest() and when would you use it?
pm.sendRequest() allows you to send an asynchronous HTTP request from within a Postman script (pre-request or test script) without creating a separate request in your collection. Common use cases:

Fetching an auth token before your main request runs
Seeding test data before a test
Cleaning up resources after a test (e.g., deleting a created user)
39. How do you handle pagination in Postman testing?
Use a loop in a pre-request script combined with a counter variable to iterate through pages:

// Test script  capture next page and loop

const response = pm.response.json();

const currentPage = pm.environment.get(“currentPage”) || 1;

if (response.hasNextPage) {

  pm.environment.set(“currentPage”, currentPage + 1);

  postman.setNextRequest(“Get Users”); // Loop back to same request

} else {

  pm.environment.set(“currentPage”, 1);

  postman.setNextRequest(null); // Stop the collection run

}

40. What is postman.setNextRequest() and how does it work?
postman.setNextRequest(“Request Name”) controls the execution flow inside a Collection Runner. It overrides the default sequential execution and jumps to a named request next. Using postman.setNextRequest(null) stops execution immediately. It is used for:

Creating conditional workflows (“if login fails, skip checkout tests”)
Building loops (as shown in pagination example above)
Skipping irrelevant requests based on environment or response
Postman Newman Interview Questions
41. What are the most commonly used Newman CLI flags?
# Basic run

newman run collection.json

# With environment

newman run collection.json -e environment.json

# With data file

newman run collection.json -d data.csv

# Set number of iterations

newman run collection.json -n 5

# Set request timeout (ms)

newman run collection.json –timeout-request 5000

# Multiple reporters

newman run collection.json –reporters cli,junit,htmlextra

# Export JUnit XML (for Jenkins)

newman run collection.json –reporter-junit-export results.xml

# Bail on first failure

newman run collection.json –bail

42. What reporters does Newman support?
Reporter	Use Case
cli	Default; prints results to terminal
json	Outputs raw JSON results
junit	JUnit XML format for Jenkins/CI integration
htmlextra	Rich HTML report with graphs (install separately)
csv	Exports results as CSV
Install htmlextra: npm install -g newman-reporter-htmlextra

Postman Collections, Environments, and Variables,  Interview Questions
43. How do you share collections with your team in Postman?
There are three ways to share Postman collections:

Postman Workspace: Add teammates to a shared workspace; collections sync automatically
Export as JSON: Export the collection file and share via email, Slack, or version control (Git)
Public Link: Generate a shareable link via Share Collection → Get public link (read-only for recipients)
Best practice for teams: Use a shared Team Workspace with Git sync so all changes are versioned.

44. How do you use environment variables to switch between Dev, Staging, and Production?
Create three environments in Postman: Dev, Staging, Production
In each, set the variable base_url with the corresponding URL:
Dev: https://dev.api.myapp.com
Staging: https://staging.api.myapp.com
Production: https://api.myapp.com
In every request, use {{base_url}}/endpoint instead of a hardcoded URL
Switch environments using the dropdown in the top-right corner,  all requests update instantly
45. What is the difference between “Initial Value” and “Current Value” in Postman variables?
Initial Value	Current Value
Synced to Postman cloud?	Yes, visible to all teammates	No,  stays on your local machine only
Use Case	Default/placeholder values for sharing	Actual sensitive values (passwords, tokens)
Best Practice	Use non-sensitive placeholders	Store real secrets here; never commit to Git
Important: Never put real API keys or passwords in Initial Value, they get synced and may be visible to other workspace members.

Authentication and Authorization in Postman,  Interview Questions
46. What authorization methods does Postman support?
Postman supports 8 built-in authorization methods:

No Auth
API Key (Header or Query Parameter)
Basic Auth (username + password, Base64 encoded)
Bearer Token
OAuth 1.0
OAuth 2.0 (most commonly used for modern APIs)
AWS Signature (for AWS API Gateway)
Hawk Authentication / NTLM Authentication
47. How do you test API security/authorization in Postman?
In a real interview, you might be asked to verify that unauthorized users cannot access protected endpoints. Test this by:

// Test that a request without a token returns 401

pm.test(“Unauthenticated request returns 401”, function () {

  pm.response.to.have.status(401);

});

// Test that an expired token returns 401 or 403

pm.test(“Expired token is rejected”, function () {

  pm.expect(pm.response.code).to.be.oneOf([401, 403]);

});

Data-Driven Testing and CI/CD Integration Questions
48. What is the difference between running a collection in Postman GUI vs. Newman?
Postman GUI (Collection Runner)	Newman CLI
Environment	Desktop app	Terminal / CI server
CI/CD Integration	Not possible directly	Yes,  core use case
Automation	Manual trigger	Scriptable; fully automated
Reporting	In-app results	CLI, JUnit, HTML, JSON
Headless	No	Yes
49. How do you generate a test report from Newman?
# Install HTML reporter

npm install -g newman-reporter-htmlextra

# Run and generate report

newman run MyCollection.json \

  -e staging.json \

  –reporters htmlextra \

  –reporter-htmlextra-export ./reports/api-test-report.html \

  –reporter-htmlextra-title “GUVI API Test Report”

The generated HTML file contains: total tests run, pass/fail counts, response time graphs, request/response details for each test.

50. How do you handle sensitive data (passwords, API keys) securely in Postman?
Best practices for handling sensitive data:

Store secrets in Environment → Current Value only (never Initial Value)
Use Postman Vault (paid feature) for encrypted secret storage
In CI/CD pipelines, inject secrets as environment variables and reference them in Newman via –env-var “API_KEY=$API_KEY”
Never commit environment.json files with real secrets to Git,  add them to .gitignore
Use Postman Secret variable type (new in 2024) to mask sensitive values in logs
Postman vs Swagger, Comparison Questions
51. What is the difference between Postman and Swagger?
Feature	Postman	Swagger (OpenAPI)
Primary Purpose	API testing & automation	API documentation & design
Testing	Full test automation, scripting	Basic try-it-out only
Documentation	Auto-generated from collections	Core feature; rich spec format
CI/CD Integration	Yes (via Newman)	Limited
Collaboration	Team workspaces, shared collections	Shared spec files
Code Generation	No	Yes (generate client SDKs)
Best For	QA engineers, testers	API designers, backend developers
Key Insight: Postman and Swagger are complementary, not competing, many teams use Swagger to design the API spec and Postman to test against it. Postman can even import OpenAPI/Swagger specs directly.

52. Can Postman import Swagger/OpenAPI specifications?
Yes. Postman can import OpenAPI 2.0 (Swagger) and OpenAPI 3.0 specifications:

Click Import in Postman
Paste the Swagger JSON/YAML URL or upload the file
Postman automatically generates a collection with all endpoints from the spec
You can then add test scripts, environments, and run the generated collection
Postman Flows and AI Features,  2025/2026 Questions
53. What is Postman Flows?
Postman Flows is a visual, no-code API workflow builder introduced in 2023. It allows you to chain API requests together graphically, connecting inputs and outputs of requests using a drag-and-drop interface,  without writing JavaScript. It supports conditional logic, loops, and data transformation. Flows is used for orchestrating complex API workflows and building lightweight integrations without a separate scripting environment.

54. What are Postman’s AI-powered features in 2025–2026?
Postman launched several AI features in 2025:

AI Request Generation: Describe what you want to test in plain English; Postman generates the request automatically
AI Test Script Suggestions: Postman analyzes your API response and suggests relevant test assertions
Postbot: An AI assistant built into Postman that can write test scripts, explain responses, and suggest improvements
AI Documentation Generation: Automatically generates API documentation from collections
Interview tip: Mentioning awareness of Postbot and AI-assisted testing shows that you stay current with tooling trends,  a positive signal for senior QA roles.

55. How do you test WebSocket APIs in Postman?
Postman added WebSocket request support for testing real-time APIs:

Click New → WebSocket Request
Enter the WebSocket server URL (e.g., wss://echo.websocket.org)
Click Connect to establish the connection
Send messages and view the real-time messages stream in the Messages panel
Add events to listen for specific message types
This is particularly useful for testing chat applications, live dashboards, and streaming data APIs.

    
Postman 

«В чем разница между PUT и PATCH?»

«Как создать Environment Variable?»

«Как автоматизировать тесты в Postman?»

«Что вернет сервер при успешном DELETE-запросе?»

И если вы не знаете — отказ.

Эта статья для тех, кто:

Готовится к собеседованию на позицию junior QA

Хочет понять, что именно спрашивают про Postman

Нужны конкретные ответы на типовые вопросы

Хочет подготовиться за 1-2 недели

Не хочет провалить собеседование из-за незнания базовых вещей

Что такое API-тестирование и зачем оно нужно
Прежде чем разбирать вопросы, давайте поймем: что такое API и зачем его тестировать?

Что такое API
API (Application Programming Interface) — это интерфейс, через который разные программы общаются друг с другом.

Простыми словами:

Представьте, что вы в ресторане. Вы (клиент) хотите заказать еду. Вы не идете на кухню и не готовите сами. Вы говорите официанту (API), что хотите. Официант передает заказ на кухню (сервер), кухня готовит, официант приносит вам еду (ответ).

API работает так же:

Клиент (фронтенд, мобильное приложение) отправляет запрос (request)

API передает запрос на сервер (backend)

Сервер обрабатывает запрос и отправляет ответ (response)

Клиент получает ответ и показывает данные пользователю

Пример:

Вы открываете приложение ВКонтакте. Видите ленту постов. Откуда они взялись?

Приложение отправило запрос к API: GET /api/news_feed

Сервер ВК обработал запрос, взял посты из базы данных

Сервер вернул ответ (JSON с постами)

Приложение показало вам посты

API — это мост между фронтендом и бэкендом.

Что такое REST API
REST (Representational State Transfer) — это архитектурный стиль для создания API.

Основные принципы REST:

Клиент-серверная архитектура: Клиент и сервер независимы.

Без сохранения состояния (stateless): Каждый запрос содержит всю необходимую информацию. Сервер не помнит предыдущие запросы.

Единообразный интерфейс: Стандартные HTTP-методы (GET, POST, PUT, DELETE).

Ресурсы: Все данные представлены как ресурсы (пользователи, посты, заказы).

Пример REST API:

GET /api/users — получить список пользователей GET /api/users/123 — получить пользователя с ID 123 POST /api/users — создать нового пользователя PUT /api/users/123 — обновить пользователя с ID 123 DELETE /api/users/123 — удалить пользователя с ID 123

Зачем тестировать API
Почему API-тестирование важно?

Раннее обнаружение багов: API тестируется до того, как готов интерфейс. Баги находятся раньше.

Независимость от UI: Интерфейс может меняться, но API — стабилен. Тесты не ломаются.

Производительность: API-тесты работают быстрее UI-тестов (нет загрузки браузера, рендеринга).

Покрытие: Можно протестировать сценарии, которые сложно проверить через UI.

Что проверяют при API-тестировании?

Что проверяем	Пример
Функциональность

Создается ли пользователь при POST-запросе?
Корректность данных

Возвращаются ли правильные данные в ответе?
Статус-коды

Возвращает ли сервер 200 при успешном запросе?
Время ответа

Отвечает ли сервер за < 1 секунды?
Безопасность

Можно ли получить данные без авторизации?
Обработка ошибок

Что возвращает сервер при неверных данных?
Вывод: API-тестирование — это обязательный навык для QA в 2025 году. Без него не возьмут даже на junior позицию.

Postman: почему его спрашивают на собеседованиях
Postman — это самый популярный инструмент для тестирования API.

Что такое Postman
Postman — это приложение (desktop или web), которое позволяет:

Отправлять HTTP-запросы к API (GET, POST, PUT, DELETE и т.д.)

Просматривать ответы сервера (JSON, XML, HTML)

Автоматизировать тесты (писать проверки на JavaScript)

Создавать коллекции запросов

Работать с переменными (environment, global)

Запускать тесты через командную строку (Newman)

Почему Postman так популярен?

Бесплатный (есть платная версия, но базовые функции — бесплатны)

Простой интерфейс (интуитивно понятный)

Не требует программирования (для базовых задач)

Поддерживает автоматизацию (для продвинутых задач)

Кроссплатформенный (Windows, Mac, Linux, Web)

Почему Postman спрашивают на собеседованиях
Статистика:

70-80% компаний в России используют Postman для API-тестирования

Обязательное требование для junior QA в большинстве вакансий

8+ миллионов пользователей по всему миру

Альтернативы Postman:

SoapUI — сложнее, для SOAP API

Insomnia — проще, но менее популярен

REST Assured — для автоматизации на Java (не для ручного тестирования)

cURL — консольный инструмент (для продвинутых)

Вывод: Если вы QA и не знаете Postman — вас не возьмут. Это как разработчик, который не знает Git.



Вопрос 1: Что такое REST API и чем он отличается от SOAP?
Почему спрашивают:

Это базовый вопрос. Если вы не знаете разницу между REST и SOAP — собеседование закончено.

Ответ:

REST (Representational State Transfer) — архитектурный стиль для создания API, использует HTTP-методы и обычно возвращает данные в JSON.

SOAP (Simple Object Access Protocol) — протокол обмена данными, использует XML для сообщений.

Основные отличия:

Параметр	REST	SOAP
Формат данных

JSON, XML, HTML	Только XML
Протокол

HTTP, HTTPS	HTTP, SMTP, TCP
Сложность

Простой	Сложный
Скорость

Быстрее	Медленнее
Использование

Веб-приложения, мобильные приложения	Корпоративные системы, банки
Пример REST:

GET /api/users/123 Response: {"id": 123, "name": "Иван", "email": "ivan@mail.ru"}

Пример SOAP:

xml <soap:Envelope> <soap:Body> <GetUser> <UserId>123</UserId> </GetUser> </soap:Body> </soap:Envelope>

Когда использовать REST:

Веб и мобильные приложения

Простые CRUD операции (Create, Read, Update, Delete)

Когда нужна скорость

Когда использовать SOAP:

Банковские системы

Когда нужна высокая безопасность

Когда требуется строгий контракт (WSDL)

Вопрос 2: Какие HTTP-методы вы знаете? В чем разница между GET и POST?
Почему спрашивают:

Это фундаментальный вопрос. Если не знаете HTTP-методы — вы не сможете тестировать API.

Ответ:

Основные HTTP-методы:

Метод	Назначение	Идемпотентный?	Безопасный?
GET

Получить данные	Да	Да
POST

Создать новый ресурс	Нет	Нет
PUT

Обновить ресурс полностью	Да	Нет
PATCH

Обновить ресурс частично	Нет	Нет
DELETE

Удалить ресурс	Да	Нет
HEAD

Получить заголовки (без тела)	Да	Да
OPTIONS

Узнать доступные методы	Да	Да
Разница между GET и POST:

Параметр	GET	POST
Назначение

Получить данные	Создать/отправить данные
Тело запроса

Нет (данные в URL)	Есть (данные в теле)
Кэширование

Да	Нет
История браузера

Сохраняется	Не сохраняется
Безопасность

Данные видны в URL	Данные скрыты
Идемпотентность

Да (можно повторять)	Нет (каждый запрос создает новый ресурс)
Пример GET:

GET /api/users?age=25&city=Moscow

Данные передаются в URL. Можно скопировать ссылку и отправить кому-то.

Пример POST:

POST /api/users Body: { "name": "Иван", "email": "ivan@mail.ru", "age": 25 }

Данные передаются в теле запроса. Нельзя скопировать как ссылку.

Идемпотентность:

GET: Можно отправить 100 раз — результат один и тот же (получите одни и те же данные).

POST: Отправили 100 раз — создали 100 пользователей.

Вопрос 3: Какие HTTP статус-коды вы знаете? Что означает 200, 404, 500?
Почему спрашивают:

Статус-коды — это язык общения с API. Если вы не знаете, что означает 404 — вы не сможете понять, что пошло не так.

Ответ:

HTTP статус-коды делятся на 5 классов:

Класс	Диапазон	Значение
1xx

100-199	Информационные (редко используются)
2xx

200-299	Успех
3xx

300-399	Перенаправление
4xx

400-499	Ошибка клиента
5xx

500-599	Ошибка сервера
Самые важные статус-коды для QA:

Код	Название	Значение	Пример
200

OK	Запрос успешен	GET-запрос вернул данные
201

Created	Ресурс создан	POST-запрос создал пользователя
204

No Content	Успех, но нет данных	DELETE-запрос удалил ресурс
400

Bad Request	Некорректный запрос	Отправили неверные данные
401

Unauthorized	Не авторизован	Нет токена или токен истек
403

Forbidden	Доступ запрещен	Нет прав на ресурс
404

Not Found	Ресурс не найден	Пользователь с таким ID не существует
500

Internal Server Error	Ошибка сервера	Баг на сервере
502

Bad Gateway	Проблема с шлюзом	Сервер недоступен
503

Service Unavailable	Сервис недоступен	Сервер перегружен
Что проверять при тестировании:

GET /users/123 → Ожидаем 200 OK (если пользователь существует)

GET /users/999 → Ожидаем 404 Not Found (если пользователя нет)

POST /users → Ожидаем 201 Created (создан новый пользователь)

DELETE /users/123 → Ожидаем 204 No Content (пользователь удален)

Частая ошибка джунов:

Ожидают 200 OK для всех успешных запросов. Но для POST должен быть 201 Created, а для DELETE — 204 No Content.

Вопрос 4: Что такое JSON? Чем он отличается от XML?
Почему спрашивают:

JSON — основной формат данных в REST API. Если вы не понимаете структуру JSON, вы не сможете проверить ответ сервера.

Ответ:

JSON (JavaScript Object Notation) — текстовый формат для обмена данными.

Пример JSON:

json { "id": 123, "name": "Иван", "age": 25, "email": "ivan@mail.ru", "is_active": true, "roles": ["user", "admin"], "address": { "city": "Москва", "street": "Ленина", "house": 10 } }

Структура JSON:

Объект: { "key": "value" }

Массив: ["item1", "item2"]

Типы данных: string, number, boolean, null, object, array

XML (eXtensible Markup Language):

```xml 123 Иван 25 ivan@mail.ru true user admin
 

Москва Ленина 10
 
```

Разница:

Параметр	JSON	XML
Читаемость

Легче читать	Сложнее читать
Размер

Компактнее	Больше
Скорость парсинга

Быстрее	Медленнее
Типы данных

Есть (string, number, boolean)	Все — строки
Использование

REST API	SOAP, конфигурации
Где используется JSON:

REST API (99% случаев)

Конфигурационные файлы (package.json)

NoSQL базы данных (MongoDB)

Вопрос 5: Как создать коллекцию в Postman и зачем она нужна?
Почему спрашивают:

Collections — базовая функция Postman. Если вы не знаете, как создать коллекцию, вы не сможете организовать тесты.

Ответ:

Collection (Коллекция) — это группа запросов, объединенных по смыслу.

Зачем нужны коллекции:

Организация: Группировка запросов по функциональности (например, "User API", "Order API")

Повторное использование: Один раз настроили, используете много раз

Автоматизация: Можно запустить все запросы из коллекции одной кнопкой

Совместная работа: Можно экспортировать и поделиться с командой

Как создать коллекцию:

Открыть Postman

Нажать "New" → "Collection"

Ввести название: например, "User API Tests"

Добавить описание (опционально)

Сохранить

Структура коллекции:

User API Tests (коллекция) ├── Get all users (запрос) ├── Get user by ID (запрос) ├── Create user (запрос) ├── Update user (запрос) └── Delete user (запрос)

Как добавить запрос в коллекцию:

Создать новый запрос (New → Request)

Ввести название запроса

Выбрать коллекцию, куда сохранить

Настроить запрос (URL, метод, headers, body)

Сохранить

Как запустить всю коллекцию:

Открыть коллекцию

Нажать "Run" (или три точки → Run collection)

Выбрать, какие запросы запустить

Нажать "Run User API Tests"

Postman выполнит все запросы по очереди

Вывод: Collections — это как папки для файлов. Без них ваши запросы будут хаотичными.

Вопрос 6: Что такое Environment Variables и зачем они нужны?
Почему спрашивают:

Переменные окружения — ключевая функция Postman. Без них вы не сможете переключаться между тестовыми и продакшн-окружениями.

Ответ:

Environment Variables (Переменные окружения) — это переменные, которые хранят данные, используемые в запросах.

Зачем нужны:

Переключение между окружениями: dev, stage, production

Хранение токенов: Авторизационный токен, который меняется

Повторное использование: Не нужно везде менять URL вручную

Пример задачи:

У вас есть API с тремя окружениями:

Dev: https://dev-api.example.com

Stage: https://stage-api.example.com

Prod: https://api.example.com

Вы хотите протестировать API на всех трех окружениях. Без переменных вам нужно создать 3 копии каждого запроса. С переменными — создаете одну коллекцию и переключаете окружение.

Как создать Environment:

Нажать на иконку "Environments" (справа вверху)

Нажать "Create Environment" (или "+")

Ввести название: например, "Dev Environment"

Добавить переменные:

base_url: https://dev-api.example.com

auth_token: your_token_here

Сохранить

Как использовать переменные в запросах:

Вместо:

GET https://dev-api.example.com/api/users

Пишете:

GET {{base_url}}/api/users

Postman автоматически подставит значение base_url из активного окружения.

Типы переменных в Postman:

Тип	Scope	Приоритет	Когда использовать
Global

Все коллекции	Низкий	Редко меняющиеся данные
Collection

Одна коллекция	Средний	Данные для конкретной коллекции
Environment

Выбранное окружение	Высокий	Данные, которые меняются между окружениями
Local

Один запрос	Самый высокий	Временные данные
Пример сценария:

Отправили POST /auth/login → Получили токен

Сохранили токен в переменную auth_token (через скрипт в Tests)

Используете токен во всех последующих запросах: Authorization: Bearer {{auth_token}}

Как установить переменную через скрипт:

javascript // В табе Tests pm.environment.set("auth_token", pm.response.json().token);

Вывод: Environment Variables — это как переменные в программировании. Один раз определил, используешь везде.

Вопрос 7: Как автоматизировать тесты в Postman?
Почему спрашивают:

Автоматизация — следующий уровень после ручного тестирования. Если вы знаете, как писать тесты в Postman, вы ценнее как специалист.

Ответ:

Автоматизация в Postman — это написание проверок (assertions) в табе Tests, которые выполняются после каждого запроса.

Что можно проверять:

Статус-код: Вернулся ли код 200?

Время ответа: Ответил ли сервер за < 500ms?

Тело ответа: Есть ли в ответе нужное поле?

Заголовки: Есть ли нужный header?

Язык: JavaScript (но не нужно быть программистом — есть готовые сниппеты)

Пример 1: Проверка статус-кода

javascript pm.test("Status code is 200", function () { pm.response.to.have.status(200); });

Пример 2: Проверка времени ответа

javascript pm.test("Response time is less than 500ms", function () { pm.expect(pm.response.responseTime).to.be.below(500); });

Пример 3: Проверка тела ответа

Ответ сервера:

json { "id": 123, "name": "Иван", "email": "ivan@mail.ru" }

Тест:

javascript pm.test("Response has required fields", function () { var jsonData = pm.response.json(); pm.expect(jsonData).to.have.property('id'); pm.expect(jsonData).to.have.property('name'); pm.expect(jsonData.name).to.eql('Иван'); });

Пример 4: Проверка массива

Ответ:

json [ {"id": 1, "name": "Иван"}, {"id": 2, "name": "Мария"} ]

Тест:

javascript pm.test("Array has 2 users", function () { var jsonData = pm.response.json(); pm.expect(jsonData).to.be.an('array'); pm.expect(jsonData.length).to.eql(2); });

Готовые сниппеты в Postman:

В табе "Tests" справа есть кнопки с готовыми шаблонами:

Status code: Code is 200

Response body: JSON value check

Response time is less than 200ms

Как запустить автоматизированные тесты:

Создать коллекцию с запросами

Добавить тесты в каждый запрос (таб Tests)

Запустить коллекцию: Collection → Run

Postman выполнит все запросы и покажет результаты тестов

Вывод: Автоматизация в Postman — это просто. Даже без знания JavaScript можно использовать готовые сниппеты.

Вопрос 8: Что такое Pre-request Script и когда его использовать?
Почему спрашивают:

Pre-request Scripts — продвинутая функция. Если вы знаете, когда их использовать, вы не просто джун, а джун+.

Ответ:

Pre-request Script — это JavaScript-код, который выполняется до отправки запроса.

Зачем нужен:

Генерация динамических данных: timestamp, случайное число, UUID

Установка переменных: Перед запросом установить токен, который получили ранее

Подготовка данных: Создать хеш, подпись для авторизации

Пример 1: Генерация случайного email

Задача: При создании пользователя нужен уникальный email.

Pre-request Script:

javascript pm.environment.set("random_email", "user" + Math.random().toString(36).substring(7) + "@test.com");

Запрос:

POST /api/users Body: { "name": "Test User", "email": "{{random_email}}" }

Каждый раз будет генерироваться новый email: user7x2k9@test.com

Пример 2: Установка текущего времени

javascript pm.environment.set("timestamp", new Date().toISOString());

Использование:

json { "created_at": "{{timestamp}}" }

Пример 3: Получение токена перед запросом

Если токен хранится в переменной auth_token, но нужно проверить, не истек ли он:

javascript const token = pm.environment.get("auth_token"); if (!token) { // Если токена нет, отправить запрос на получение токена pm.sendRequest({ url: 'https://api.example.com/auth/login', method: 'POST', body: { mode: 'raw', raw: JSON.stringify({ username: 'test', password: 'test123' }) } }, function (err, res) { pm.environment.set("auth_token", res.json().token); }); }

Разница между Pre-request Script и Tests:

Параметр	Pre-request Script	Tests
Когда выполняется

До отправки запроса	После получения ответа
Назначение

Подготовка данных	Проверка ответа
Пример

Генерация email, установка токена	Проверка статус-кода, тела ответа
Вывод: Pre-request Scripts — для подготовки запроса. Tests — для проверки ответа.

Вопрос 9: Как проверить response body в Postman?
Почему спрашивают:

Проверка ответа — основная задача тестирования API. Если вы не знаете, как проверить response body, вы не сможете найти баги.

Ответ:

Response body — это данные, которые вернул сервер.

Форматы:

JSON (99% случаев в REST API)

XML

HTML

Plain text

Что проверять:

Наличие полей: Есть ли поле id, name, email?

Значения полей: name равно "Иван"?

Типы данных: id — число, name — строка?

Структура: Массив или объект?

Размер: Массив содержит 10 элементов?

Пример response:

json { "id": 123, "name": "Иван", "email": "ivan@mail.ru", "age": 25, "is_active": true }

Тесты:

```javascript pm.test("Response has all required fields", function () { var jsonData = pm.response.json();

// Проверка наличия полей
pm.expect(jsonData).to.have.property('id');
pm.expect(jsonData).to.have.property('name');
pm.expect(jsonData).to.have.property('email');

// Проверка значений
pm.expect(jsonData.name).to.eql('Иван');
pm.expect(jsonData.age).to.be.a('number');
pm.expect(jsonData.age).to.be.above(0);
pm.expect(jsonData.is_active).to.be.true;

// Проверка email (регулярное выражение)
pm.expect(jsonData.email).to.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
}); ```

Проверка массива:

Response:

json [ {"id": 1, "name": "Иван"}, {"id": 2, "name": "Мария"}, {"id": 3, "name": "Петр"} ]

Тест:

javascript pm.test("Array contains 3 users", function () { var jsonData = pm.response.json(); pm.expect(jsonData).to.be.an('array'); pm.expect(jsonData.length).to.eql(3); pm.expect(jsonData[0].name).to.eql('Иван'); });

Вакансии для QA-инженеров

a1qa
сегодня
automation qa
~ 323 000 ₽
middle
удалённо

InnoTech Solutions
сегодня
qa инженер (manual)
~ 171 619 ₽
middle
офис Минск

Яндекс Алиса
сегодня
quality engineer (auto)
~ 277 237 ₽
middle
офис Москва
Проверка вложенных объектов:

Response:

json { "user": { "id": 123, "profile": { "firstName": "Иван", "lastName": "Иванов" } } }

Тест:

javascript pm.test("Nested object check", function () { var jsonData = pm.response.json(); pm.expect(jsonData.user.profile.firstName).to.eql('Иван'); });

Вывод: Тестирование response body — это основа API-тестирования. Без этого навыка вы не сможете проверить, правильно ли работает API.

Вопрос 10: В чем разница между PUT и PATCH?
Почему спрашивают:

Многие джуны путают PUT и PATCH. Это частая ошибка, которая показывает, что вы не понимаете REST API.

Ответ:

PUT и PATCH — оба используются для обновления ресурса. Но работают по-разному.

PUT — полная замена ресурса.

PATCH — частичное обновление ресурса.

Пример:

Исходный ресурс (пользователь):

json { "id": 123, "name": "Иван", "email": "ivan@mail.ru", "age": 25 }

Задача: Изменить только email.

Вариант 1: PUT (полная замена)

PUT /api/users/123 Body: { "name": "Иван", "email": "new_email@mail.ru", "age": 25 }

Нужно отправить все поля, даже те, которые не меняются.

Если отправите только:

json { "email": "new_email@mail.ru" }

То name и age будут удалены (или установлены в null).

Вариант 2: PATCH (частичное обновление)

PATCH /api/users/123 Body: { "email": "new_email@mail.ru" }

Отправляете только те поля, которые хотите изменить. Остальные поля остаются без изменений.

Сравнение:

Параметр	PUT	PATCH
Назначение

Полная замена	Частичное обновление
Идемпотентность

Да	Нет (зависит от реализации)
Что отправлять

Все поля	Только измененные поля
Что происходит с неотправленными полями

Удаляются или null	Остаются без изменений
Идемпотентность:

PUT: Отправили 10 раз → результат один и тот же (ресурс в том же состоянии).

PATCH: Зависит от реализации. Может быть идемпотентным, может нет.

Когда использовать PUT:

Когда нужно обновить весь ресурс

Когда API требует все поля

Когда использовать PATCH:

Когда нужно обновить один или несколько полей

Когда не хотите отправлять все данные

Вывод: PUT = замена всего объекта. PATCH = изменение части объекта.

Вопрос 11: Что такое Authorization и как ее тестировать в Postman?
Почему спрашивают:

Большинство API требуют авторизации. Если вы не знаете, как работать с авторизацией, вы не сможете протестировать защищенные эндпоинты.

Ответ:

Authorization (Авторизация) — это проверка, имеет ли пользователь право доступа к ресурсу.

Типы авторизации в API:

Тип	Описание	Пример
No Auth

Без авторизации	Публичные API
API Key

Ключ в header или query	
?api_key=12345

Bearer Token

JWT-токен в header	
Authorization: Bearer <token>

Basic Auth

Логин и пароль в base64	
Authorization: Basic <base64>

OAuth 2.0

Протокол авторизации	Google, Facebook API
Самый популярный: Bearer Token

Как работает:

Отправляете логин и пароль на /auth/login

Сервер возвращает токен (обычно JWT)

Используете токен во всех последующих запросах

Пример:

Шаг 1: Получить токен

``` POST /api/auth/login Body: { "username": "test", "password": "test123" }

Response: { "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." } ```

Шаг 2: Сохранить токен в переменную

В табе Tests:

javascript pm.environment.set("auth_token", pm.response.json().token);

Шаг 3: Использовать токен в запросах

В Postman:

Перейти на таб Authorization

Выбрать тип: Bearer Token

Вставить: {{auth_token}}

Или вручную в Headers:

Authorization: Bearer {{auth_token}}

Что тестировать:

Без токена → 401 Unauthorized

GET /api/users (без Authorization header) → Ожидаем: 401 Unauthorized

С неверным токеном → 401 Unauthorized

GET /api/users Authorization: Bearer wrong_token → Ожидаем: 401 Unauthorized

С валидным токеном → 200 OK

GET /api/users Authorization: Bearer {{auth_token}} → Ожидаем: 200 OK + данные

С истекшим токеном → 401 Unauthorized

(Токен, который истек) → Ожидаем: 401 Unauthorized

Basic Auth:

Логин и пароль отправляются в каждом запросе (в base64).

В Postman:

Таб Authorization → Type: Basic Auth

Ввести Username и Password

Postman автоматически создаст header: Authorization: Basic dXNlcjpwYXNz

OAuth 2.0:

Сложный протокол. Postman поддерживает OAuth 2.0:

Таб Authorization → Type: OAuth 2.0

Ввести параметры: Auth URL, Access Token URL, Client ID, Client Secret

Нажать "Get New Access Token"

Postman выполнит OAuth-флоу и получит токен

Вывод: Авторизация — обязательная часть API-тестирования. Без нее большинство эндпоинтов недоступны.

Вопрос 12: Как запустить коллекцию Postman через командную строку (Newman)?
Почему спрашивают:

Newman — это CLI (Command Line Interface) для Postman. Используется для запуска тестов в CI/CD. Если вы знаете Newman, вы понимаете автоматизацию.

Ответ:

Newman — это инструмент командной строки для запуска коллекций Postman.

Зачем нужен:

CI/CD интеграция: Запускать тесты при каждом коммите

Автоматизация: Запускать тесты по расписанию (cron)

Отчеты: Генерировать HTML-отчеты о результатах тестов

Установка Newman:

bash npm install -g newman

Как запустить коллекцию:

Экспортировать коллекцию из Postman:

Открыть коллекцию → три точки → Export

Сохранить как collection.json

Экспортировать окружение (если используете переменные):

Environment → три точки → Export

Сохранить как environment.json

Запустить через Newman:

bash newman run collection.json -e environment.json

Пример вывода:

``` → User API Tests GET Get all users ✓ Status code is 200 ✓ Response time is less than 500ms

POST Create user ✓ Status code is 201 ✓ Response has user ID


Генерация HTML-отчета:

bash newman run collection.json -e environment.json -r html

Создаст файл newman/report.html с красивым отчетом.

Интеграция с CI/CD (GitHub Actions):

yaml name: API Tests on: [push] jobs: test: runs-on: ubuntu-latest steps: - uses: actions/checkout@v2 - name: Install Newman run: npm install -g newman - name: Run Postman tests run: newman run collection.json -e environment.json

Вывод: Newman — это Postman в командной строке. Нужен для автоматизации и CI/CD.


Частые ошибки джунов на собеседованиях
Разберем типичные ошибки, которые делают junior QA.

Ошибка 1: Не понимают разницу между GET и POST
Проблема:

Интервьюер: «В чем разница между GET и POST?»

Джун: «GET получает данные, POST отправляет данные.»

Что не так:

Ответ поверхностный. Не упомянуты идемпотентность, тело запроса, кэширование.

Правильный ответ:

«GET используется для получения данных. Он идемпотентный, безопасный, данные передаются в URL, можно кэшировать. POST используется для создания ресурса. Не идемпотентный, данные передаются в теле запроса, не кэшируется.»

Ошибка 2: Не знают статус-коды
Проблема:

Интервьюер: «Какой статус-код вернет сервер при успешном создании пользователя?»

Джун: «200 OK.»

Что не так:

200 OK — это для GET. Для POST (создание) должен быть 201 Created.

Правильный ответ:

«201 Created — ресурс успешно создан. 200 OK — для GET-запросов.»

Ошибка 3: Не умеют работать с переменными
Проблема:

Интервьюер просит: «Создайте коллекцию, которая работает на dev и prod окружениях.»

Джун создает 2 коллекции (одну для dev, одну для prod) вместо использования Environment Variables.

Правильный подход:

Создать одну коллекцию, два окружения (Dev, Prod), использовать {{base_url}}.

Ошибка 4: Не проверяют response body
Проблема:

Джун отправляет запрос, видит статус 200, говорит: «Работает!»

Но не проверяет, что в ответе правильные данные.

Правильный подход:

Проверить:

Статус-код

Наличие нужных полей

Правильность значений

Структуру ответа

Ошибка 5: Не понимают, зачем нужна автоматизация
Проблема:

Интервьюер: «Зачем автоматизировать тесты в Postman?»

Джун: «Чтобы быстрее тестировать.»

Правильный ответ:

«Автоматизация позволяет:

Запускать тесты при каждом изменении кода (CI/CD)

Проверять большой объем данных

Регрессионное тестирование (убедиться, что старые функции работают)

Экономить время на ручном тестировании»

Таблица: Ошибки и как их избежать
Ошибка	Последствие	Как избежать
Не знают разницу GET/POST

Показывает незнание основ	Выучить идемпотентность, тело запроса, безопасность
Путают статус-коды

Не смогут правильно протестировать	Выучить: 200, 201, 204, 400, 401, 404, 500
Не используют переменные

Создают дублирующие коллекции	Изучить Environment Variables
Не проверяют response body

Пропускают баги	Писать тесты для проверки ответа
Не понимают зачем автоматизация

Кажется, что не понимают процесс	Понять CI/CD, регрессионное тестирование
Практическое задание на собеседовании
На собеседовании часто просят выполнить практическое задание.

Типичное задание
Задача:

«Вот API: https://reqres.in. Протестируйте его в Postman. Создайте коллекцию с автоматизированными тестами.»

Что нужно сделать:

Изучить документацию API: https://reqres.in

Создать коллекцию с запросами:

GET /api/users — получить список пользователей

GET /api/users/2 — получить конкретного пользователя

POST /api/users — создать пользователя

PUT /api/users/2 — обновить пользователя

DELETE /api/users/2 — удалить пользователя

Добавить автоматизированные тесты:

Проверка статус-кода

Проверка response body

Проверка времени ответа

Использовать переменные:

base_url: https://reqres.in

Сохранить user_id после создания пользователя

Экспортировать коллекцию и отправить интервьюеру

Пример решения
Запрос 1: GET список пользователей

GET {{base_url}}/api/users?page=2

Tests:

```javascript pm.test("Status code is 200", function () { pm.response.to.have.status(200); });

pm.test("Response has data array", function () { var jsonData = pm.response.json(); pm.expect(jsonData.data).to.be.an('array'); pm.expect(jsonData.data.length).to.be.above(0); }); ```

Запрос 2: POST создать пользователя

POST {{base_url}}/api/users Body: { "name": "Иван", "job": "QA Engineer" }

Tests:

```javascript pm.test("Status code is 201", function () { pm.response.to.have.status(201); });

pm.test("Response has id", function () { var jsonData = pm.response.json(); pm.expect(jsonData).to.have.property('id'); pm.environment.set("user_id", jsonData.id); // Сохраняем ID }); ```

Запрос 3: DELETE удалить пользователя

DELETE {{base_url}}/api/users/{{user_id}}

Tests:

javascript pm.test("Status code is 204", function () { pm.response.to.have.status(204); });

Что оценивает интервьюер:

Умеете ли создавать запросы

Используете ли переменные

Пишете ли автоматизированные тесты

Проверяете ли корректность данных

Организуете ли коллекцию логично

Реальные истории: успехи и провалы
История 1: Провал из-за незнания базовых вещей (Алексей, Москва)
Ситуация:

Алексей прошел курсы по тестированию, знал теорию, но Postman открывал 2 раза.

Задание:

«Отправьте GET-запрос на /users и проверьте, что статус-код 200.»

Что произошло:

Алексей открыл Postman, но не знал, куда вписывать URL. Начал искать в меню. Интервьюер подождал 5 минут и сказал: «Спасибо, на этом всё.»

Урок: Практика важнее теории. Откройте Postman и поработайте с ним хотя бы 2-3 часа.

История 2: Успех благодаря подготовке (Мария, Санкт-Петербург)
Ситуация:

Мария готовилась 2 недели, решила 50+ запросов на JSONPlaceholder, создала 5 коллекций.

Задание:

«Протестируйте вот этот API. Создайте коллекцию с автоматизированными тестами.»

Что произошло:

Мария за 30 минут создала коллекцию с 5 запросами, добавила тесты, использовала переменные. Интервьюер был впечатлен. Получила оффер.

Урок: 2 недели практики = оффер.

История 3: Провал из-за незнания статус-кодов (Дмитрий, Новосибирск)
Ситуация:

Интервьюер: «Какой статус-код вернет сервер при успешном DELETE?»

Дмитрий: «200 OK.»

Интервьюер: «А еще варианты?»

Дмитрий: «...»

Правильный ответ: 204 No Content (или 200 OK с телом ответа).

Урок: Выучите базовые статус-коды. Это спрашивают на 100% собеседований.

Чек-лист подготовки к собеседованию
Теория (обязательно знать)
[ ] Что такое API, REST API

[ ] HTTP-методы: GET, POST, PUT, PATCH, DELETE

[ ] Разница между PUT и PATCH

[ ] HTTP статус-коды: 200, 201, 204, 400, 401, 403, 404, 500

[ ] JSON: структура, типы данных

[ ] Разница между JSON и XML

[ ] Что такое идемпотентность

Postman (практические навыки)
[ ] Создать GET-запрос

[ ] Создать POST-запрос с телом (JSON)

[ ] Создать PUT/PATCH-запрос

[ ] Создать DELETE-запрос

[ ] Создать коллекцию

[ ] Добавить запросы в коллекцию

[ ] Создать Environment с переменными

[ ] Использовать переменные в запросах ({{variable}})

[ ] Написать тест на проверку статус-кода

[ ] Написать тест на проверку response body

[ ] Использовать Pre-request Script

[ ] Работать с Authorization (Bearer Token)

[ ] Запустить коллекцию через Runner

[ ] Экспортировать коллекцию

Дополнительно (плюс в карму)
[ ] Знать, что такое Newman

[ ] Понимать CI/CD интеграцию

[ ] Знать разницу между SOAP и REST

[ ] Понимать OAuth 2.0

Заключение: знание Postman = оффер
Вернемся к истории из начала.

    
Common Questions for Postman
Q #1) How can you set headers for all the requests that are in a particular Postman collection?

Answer: Postman collections allow adding pre-request scripts at both the collection and individual request level. To add any script that applies to all the requests that are present in the collection, we will need to add a pre-request script at the collection level.

Please follow the steps below to add a collection-level pre-request script for adding a header to all the requests.

a) Open collection options by right-clicking the collection and navigating to the pre-request script tab.
b) Now add the below script for adding a request header for all the requests.

1
2
3
4
pm.request.headers.add({
    key: 'TestHeader',
    value: 'testValue'
});
c) Click Update to save the collection level pre-request script.

d) Now execute any request in the collection (directly or through the collection runner) and view the request details in the Postman console debugger to validate if the pre-request script is working fine and adding the specified header.

Header from Pre-Request Script
Q #2) What’s the use of Workspaces in Postman?

Answer: Postman workspaces are nothing but collaboration areas or spaces for one or many people to work on the same collection or set of collections. It’s a way to logically separate the collections or requests from each other.

In other words, it is simply an abstraction in terms of the logical separation of requests.

2 types of workspaces are supported by Postman, i.e., Team and Personal.

#1) Team Workspaces are created for collaborating with multiple people who are a part of the same team. Look at it from the perspective of a common shared repository in Git, where anyone can pull the repository code and contribute.

Similarly, for all the people who are part of the team, the workspace gets shared, and everyone can contribute. You can also invite new users to collaborate with your collection by sharing their email addresses, and when someone joins or accepts that invite, they will collaborate with that collection.

#2) Personal workspaces are a way to logically separate collections (or projects) from one another. These are useful when you are working with multiple projects, and you wish to separate the associated requests/collections from each other. Then you can create separate workspaces for both projects.

To create a new workspace (either team or personal), simply click the workspace icon and then click “Create New”.

Once the workspace properties window opens, select whether you want to create a personal or team workspace. For team workspace, you can choose to invite people with their email addresses by asking them to collaborate on the workspace.

This is how the workspace properties window will look.

Postman Workspace
Q #3) How can Postman collections run through the command line?

Answer: Postman has a command-line integration tool called Newman with which you can run any existing Postman collection.

Newman is a NodeJS-based package, which requires just a Node environment to execute the collection and has full parity with the Postman collection runner, i.e., the Newman collection runner supports the Postman capabilities like running assertions, Pre-request scripts, or any other scripts that are associated with the requests that are a part of the collection.

To use Newman:

You need to have Node installed.
Now the Newman package needs to be installed through npm using the command.
1
npm install -g newman
The collection needs to be executed, and the associated environment configuration should be first be exported to its JSON form through the Postman application
Now, run the command to run the Postman collection through Newman.
1
newman run {{path to collection json}} -e {{path to environment json if any}}
Q #4) How can you generate HTML-based reports by running tests through Postman?

Answer: Newman uses the concept of reporters and templates to generate HTML reports for the executed collection.

Hence, to generate HTML reports, you first need to install a reporter. You can install any of the available HTML reporters, like Newman-reporter-html, as a node package through the command below.

1
npm install -g newman-reporter-html
Once the HTML reporter is installed, we can use the Newman command to run the collection with -r flag i.e. the reporter flag, and specify the reporter name as HTML.

The following command is used:

1
newman run {{path to collection json}} -e {{path to environment json if any}} -r html
Please note that, as we have not mentioned the name or folder where we want the reports to get generated, by default the reports will be generated in a folder named “Newman” that gets created in the same directory where the Newman command is executed from.

Q #5) How can we use Postman history and save requests from the Postman history to the existing or new collections?

Answer: Any request executed through the Postman application is available for reference in the History section of the application. So, in case the request was not saved to a collection before it was executed, we can always go back to the history section to fetch the executed request and save it to the collection.

Refer to the screenshot below for more details.

Postman Collection History
Q #6) How can you import requests in formats other than cURL into Postman?

Answer: Postman supports a lot of common request formats to export requests to. Example. Java, C#, Python, PHP, etc. It supports almost all the commonly used libraries and language bindings.

For import requests, it supports cURL for now. i.e., you can paste a curl command in request import, and it gets converted to Postman requests, but the same cannot be done using any other language bindings like Java, Python, etc.

The other way to import multiple requests at once is to import the entire collection directly through a file or collection JSON pasted as raw text in the import window.

Given below is a screenshot of how the import raw text section of the import options will look.

Import Options
Q #7) Is it possible to Log Requests and Responses in Postman?

Answer: Postman allows viewing the response body and other request parameters in the application itself.

But sometimes we have applied pre-request scripts, and as we cannot see details about the request URLs and headers that were used while executing the request, it’s always important to see what the actual request looked like.

To view complete Requests and Responses for the executed collection or individual request, Postman provides an additional tool console called “Postman Console” and it can view all the request/response details.

It’s also useful to see the output of any console.log statements that are a part of the pre-request scripts or tests.

Given below is a screenshot of the Postman console window.

Postman Console Window
Q #8) How can Postman be used to create Mock Servers?

Answer: Postman allows users to simulate backend servers or any API endpoints that are still under active development, and to run an integration test or end-to-end test, you still need to get some pre-defined response through those endpoints.

Postman to create Mock servers
Refer to the above diagram, where a front-end server/API has a few downstream dependencies, of which one dependency is still a work in progress. To reduce the dependency of the front end being able to use the downstream until it’s complete, we can create a mock for the downstream and use it till the time the downstream dependency is not complete.

Thus, mock servers are nothing but a fake implementation for the backend. To create/use mock servers, a user should be registered with Postman, at least for a free account (Postman allows users to register for a free account through their email).

Also, please note that for a free account, the number of calls to a mock server is limited to 1000 (this limit can be increased by buying an enterprise plan or purchasing an additional quota from the Postman account usage page).

Here is a video tutorial:

YouTube video player
To create a mock server, you can use an existing collection, i.e., if you want to create a mock for your entire collection or add requests when creating a mock server.

Follow the steps below to create a mock server:

a) Click New and select “Mock Server”.

b) Add request method(s) to be mocked and add the response code and response body to be returned while the particular API endpoint is called.

Create Mock Server
c) Click Next and choose the mock server name (If you want this mock server to be private, then an authorization header named x-api-key, which will be generated for the user profile through which Postman is signed in, will be required).

Mock Server Name
d) Click “Create Mock Server”. Essentially, this will host your API endpoint on some Postman server and will return the set response whenever the particular endpoint is called.

e) It will also create a new environment file (that was set during the mock server setup) and set the URL of the mocked API endpoint as an environment variable.

f) You are all done, and now, you can use this mocked endpoint to send requests to. This mocked implementation can be used for dependent services in the actual code if the real services are still under deployment.

Mocked Collection
Q #9) How can we use Custom JavaScript Libraries with Postman Pre-request Scripts or Tests?

Answer: Postman sandbox provides a lot of libraries that are built in and are available for use. For a complete list of such libraries, refer here to using these libraries, and you will need to add them in pre-request scripts or tests using ‘require’.

Here is a video tutorial:

YouTube video player
Let’s see one such example using moment.js, which provides a lot of helpful functions to perform formatting around time.

Let’s say there is a POST request that has to say, the created date for a user, and it expects the date format YYYY-MM-DD. Though it could be achieved using plain JavaScript as well, moment.js can do this with one line of code.

Let’s see this in action now. In the pre-request script, just add the following line of code, to get the formatted data stored in an environment variable.

1
2
var moment = require('moment');
pm.environment.set('formattedDate',moment().format('YYYY-MM-DD'));
Another example of the moment could be to add a particular value to the current date and use it in the request body. For example, you want to set a field like an expiry date, to current date + 2 days, as well as with formatting to ‘YYYY-MM-DD’, and you can simply use the script as below.

1
pm.environment.set('expiryDate',moment().add(2,'days').format('YYYY-MM-DD'));
In the above script, we can see that we’ve added or included ‘moment.js’ library and used the object as a simple Javascript code. Similar to pre-request scripts, these libraries or modules can be used in the post-request scripts or tests as well to do similar stuff.

Other libraries are available, like crypto js, which could be useful to convert a text to an encrypted value, like Base 64 or encoded hash, and could be used as a part of the request body.

Q #10) What are Postman monitors?

Answer: Postman monitors are nothing but collection monitors that are set up and executed as per the configured frequency. These are used when someone wants their collection to run at a particular frequency and the results are required to be monitored, with failures being notified through email or slack integration.

Teams with their own infrastructure, like CI and own cloud servers, would not prefer to use Postman-defined monitors, as it would run only on published or public endpoints or on mocked endpoints (if configured through mock servers).

Примеры тестовых сценариев Postman
 08.11.21
Интеграция - WEB-интеграция

 
Перевод статьи https://learning.postman.com/docs/writing-scripts/script-references/test-examples/
От переводчика: перевожу как основу для статьи по полноценному описанию и тестированию API сервиса. До этого были связанные с этой темой статьи по OpenAPI и Использование скриптов . Ссылка на Postman.

---

Postman предоставляет API-интерфейсы JavaScript, которые вы можете использовать в своих сценариях запросов. Объект pm предоставляет большую часть функциональных возможностей для тестирования данных запроса и ответа, а объект postman обеспечивает некоторый дополнительный контроль рабочего процесса.

Вы можете использовать вкладку Tests в своих запросах и коллекциях для написания тестов, которые будут выполняться, когда Postman получит ответ от API, которому вы отправили запрос. Вы можете добавить столько тестов, сколько вам нужно для каждого запроса. Когда вы добавляете тесты в Collections, они будут выполняться после каждого запроса внутри нее.

Postman отображает фрагменты кода справа от области сценария. Вы можете добавить их, чтобы опробовать распространенные сценарии, и настроить их в соответствии с вашими потребностями и деталями запроса / ответа.

 

Начало работы с тестами
Чтобы попробовать написать тестовый сценарий в первый раз, откройте запрос в приложении Postman и откройте вкладку Tests. Введите следующий код JavaScript:

pm.test("Status code is 200", function () {
  pm.response.to.have.status(200);
});
Этот код использует библиотеку pm для запуска testметода. Текстовая строка появится в выводе теста. Функция внутри теста представляет собой утверждение. Тесты почтальона могут использовать синтаксис BDD библиотеки утверждений Chai, который предоставляет возможности для оптимизации того, насколько удобочитаемы ваши тесты для вас и ваших сотрудников. В этом случае код использует цепочки BDD to.haveдля выражения утверждения.

Этот тест проверяет код ответа, возвращаемый API. Если код ответа есть 200, тест пройдет, в противном случае он завершится неудачей. Нажмите Отправить и проверьте вывод результатов теста в области ответов.

Попробуйте изменить код состояния в коде утверждения и запустить его снова, чтобы увидеть, как результаты теста выглядят по-разному, когда они проходят или не проходят.

Вы можете структурировать свои тестовые утверждения различными способами в соответствии с вашей логикой и предпочтениями с точки зрения того, как вы хотите выводить результаты. Следующий код является альтернативным способом выполнения того же теста, что и приведенный выше, с использованием expectсинтаксиса:

pm.test("Status code is 200", () => {
  pm.expect(pm.response.code).to.eql(200);
});
 

Использование нескольких утверждений
Ваши тесты могут включать несколько утверждений как часть одного теста, вы можете использовать это для группировки связанных утверждений.

pm.test("The response has all properties", () => {
    // разобрать json ответ и проверить три свойства
    const responseJson = pm.response.json();
    pm.expect(responseJson.type).to.eql('vip');
    pm.expect(responseJson.name).to.be.a('string');
    pm.expect(responseJson.id).to.have.lengthOf(1);
});
Если какое-либо из содержащихся утверждений завершится неудачно, тест в целом завершится неудачно. Все утверждения должны быть успешными, чтобы тест прошел успешно.

Примечание переводчика: как прервать проверку если условие не выполнено нужно уточнить.

 
Анализ данных тела ответа
Чтобы выполнить утверждения в ваших ответах, вам сначала нужно будет проанализировать данные в объекте JavaScript, который могут использовать ваши утверждения.

Для разбора данных JSON используйте следующий синтаксис:

const responseJson = pm.response.json();
Для разбора XML используйте следующее:

const responseJson = xml2Json(pm.response.text());
Примечание: Если вы имеете дело со сложными XML-ответами, вам может пригодиться запись в журнал консоли.

Для анализа CSV используйте утилиту анализа CSV:

const parse = require('csv-parse/lib/sync');
const responseJson = parse(pm.response.text());
Для анализа HTML вы можете использовать cheerio:

const $ = cheerio.load(pm.response.text());
//вывод html-кода для тестирования
console.log($.html());
 

Обработка ответов, которые не парсятся
Если вы не можете проанализировать тело ответа на JavaScript, потому что оно не отформатировано как JSON, XML, HTML, CSV или любой другой формат данных, поддающийся анализу, вы все равно можете делать утверждения в отношении данных.

Вы можете проверить, содержит ли тело ответа строку:

pm.test("Body contains string",() => {
  pm.expect(pm.response.text()).to.include("customer_id");
});
Это не покажет вам, где была обнаружена строка, потому что она выполняет проверку всего тела ответа. 

Вы также можете проверить, соответствует ли ответ строке (что обычно эффективно только при коротких ответах):

pm.test("Body is string", function () {
  pm.response.to.have.body("whole-body-text");
});
Примечание переводчика: для формата например "x-form-urlencoded" и подобного думаю возможно найти библиотеки и подключить их в тесты.

 

Создание утверждений в HTTP-ответе
Ваши тесты могут проверять различные аспекты ответа на запрос, включая текст, коды состояния, заголовки, файлы cookie, время ответа и многое другое.

 

Тестирование тела ответа
Вы можете проверить наличие определенных значений в теле ответа:

pm.test("Person is Jane", () => {
  const responseJson = pm.response.json();
  pm.expect(responseJson.name).to.eql("Jane");
  pm.expect(responseJson.age).to.eql(23);
});
 

Тестирование кодов состояния
Вы можете проверить код состояния ответа:

pm.test("Status code is 201", () => {
  pm.response.to.have.status(201);
});
Если вы хотите проверить, является ли код состояния одним из набора, вы можете включить их все в массив и использоватьoneOf:

pm.test("Successful POST request", () => {
  pm.expect(pm.response.code).to.be.oneOf([201,202]);
});
 

Тестирование заголовков
Вы можете проверить наличие заголовка ответа:

pm.test("Content-Type header is present", () => {
  pm.response.to.have.header("Content-Type");
});
Вы также можете проверить заголовок ответа, имеющий определенное значение:

pm.test("Content-Type header is application/json", () => {
  pm.expect(pm.response.headers.get('Content-Type')).to.eql('application/json');
});
 

Тестирование файлов cookie
Примечание переводчика: По сути это заголовок с в виде строки c данными разделенными ";".

Вы можете проверить, присутствует ли файл cookie в ответе:

pm.test("Cookie JSESSIONID is present", () => {
  pm.expect(pm.cookies.has('JSESSIONID')).to.be.true;
});
Вы также можете проверить наличие определенного значения файла cookie:

pm.test("Cookie isLoggedIn has value 1", () => {
  pm.expect(pm.cookies.get('isLoggedIn')).to.eql('1');
});
 

Тестирование времени отклика
Вы можете проверить, чтобы время отклика находилось в заданном диапазоне:

pm.test("Response time is less than 200ms", () => {
  pm.expect(pm.response.responseTime).to.be.below(200);
});
 

Общие примеры проверок (assertion)
Читайте дальше, чтобы найти некоторые примеры распространенных проверок, которые могут оказаться полезными в ваших сценариях, как они описаны ниже, или отредактировав детали в соответствии с вашими собственными потребностями.

 
Проверка значения ответа по переменной
Вы можете проверить, имеет ли свойство ответа то же значение, что и переменная (в данном случае переменная среды).

pm.test("Response property matches environment variable", function () {
  pm.expect(pm.response.json().name).to.eql(pm.environment.get("name"));
});
В разделе Использование переменных приведен обзор операций, которые можно использовать для управления переменными в ваших сценариях.

 

Проверка типа значения
Вы можете проверить тип любой части ответа.

/* ответ имеет такую структуру:
{
  "name": "Jane",
  "age": 29,
  "hobbies": [
    "skating",
    "painting"
  ],
  "email": null
}
*/
const jsonData = pm.response.json();
pm.test("Test data type of the response", () => {
  pm.expect(jsonData).to.be.an("object");
  pm.expect(jsonData.name).to.be.a("string");
  pm.expect(jsonData.age).to.be.a("number");
  pm.expect(jsonData.hobbies).to.be.an("array");
  pm.expect(jsonData.website).to.be.undefined;
  pm.expect(jsonData.email).to.be.null;
});
 

Проверка свойств массива
Вы можете проверить, является ли массив пустым или нет, и содержит ли он определенные элементы.

/*
ответ имеет такую структуру:
{
  "errors": [],
  "areas": [ "goods", "services" ],
  "settings": [
    {
      "type": "notification",
      "detail": [ "email", "sms" ]
    },
    {
      "type": "visual",
      "detail": [ "light", "large" ]
    }
  ]
}
*/

const jsonData = pm.response.json();
pm.test("Test array properties", () => {
    //массив ошибок пуст
  pm.expect(jsonData.errors).to.be.empty;
    //массив включает в себя "товары"
  pm.expect(jsonData.areas).to.include("goods");
    
  //получить объект настроек уведомлений
  const notificationSettings = jsonData.settings.find
      (m => m.type === "notification");
  pm.expect(notificationSettings)
    .to.be.an("object", "Could not find the setting");
    //массив "detail" должен включать "sms"
  pm.expect(notificationSettings.detail).to.include("sms");
    //массив "detail" должен включать все перечисленные элементы
  pm.expect(notificationSettings.detail)
    .to.have.members(["email", "sms"]);
});
 

Проверка свойств объекта
Вы можете проверить, что объект содержит ключи или свойства.

pm.expect({a: 1, b: 2}).to.have.all.keys('a', 'b');
pm.expect({a: 1, b: 2}).to.have.any.keys('a', 'b');
pm.expect({a: 1, b: 2}).to.not.have.any.keys('c', 'd');
pm.expect({a: 1}).to.have.property('a');
pm.expect({a: 1, b: 2}).to.be.an('object')
  .that.has.all.keys('a', 'b');
Целью может быть object, set, arrayили map. Если .keysвыполняется без .allили .any, выражение по умолчанию равно .all. Поскольку .keysповедение зависит от type, рекомендуется проверить typeперед использованием .keysс помощью .a.

 
Проверка, что значение находится в наборе
Вы можете проверить значение ответа по списку допустимых параметров.

pm.test("Value is in valid list", () => {
  pm.expect(pm.response.json().type)
    .to.be.oneOf(["Subscriber", "Customer", "User"]);
});
 

Проверка, что объект содержится в ответе
Вы можете проверить, является ли объект частью родительского объекта.

/*
ответ имеет следующую структуру:
{
  "id": "d8893057-3e91-4cdd-a36f-a0af460b6373",
  "created": true,
  "errors": []
}
*/

pm.test("Object is contained", () => {
  const expectedObject = {
    "created": true,
    "errors": []
  };
  pm.expect(pm.response.json()).to.deep.include(expectedObject);
});
Использование .deepзаставляет все.equal.include,.members,.keys, и .propertyутверждения , которые следуют в цепочке, использовать глубокое равенство (свободное равенство) вместо строгого (===) равенства. В то время .eqlкак также сравнивается слабо, .deep.equalприводит к тому, что сравнения с глубоким равенством также используются для любых других утверждений, которые следуют в цепочке, в то время .eqlкак это не так.

 

Проверка текущего окружения
Вы можете проверить активную (выбранную в данный момент) среду в Postman.

pm.test("Check the active environment", () => {
  pm.expect(pm.environment.name).to.eql("Production");
});
 

Устранение распространенных ошибок тестирования
Когда вы сталкиваетесь с ошибками или неожиданным поведением в своих тестовых сценариях, консоль почтальона может помочь вам определить источник. Комбинируя console.logинструкции отладки с утверждениями теста, вы можете изучить содержимое HTTP-запросов и ответов, а также элементы данных почтальона, такие как переменные.


Вы можете записать значение переменной или свойства ответа:

console.log(pm.collectionVariables.get("name"));
console.log(pm.response.json().name);
Вы можете записать тип переменной или свойства ответа:

console.log(typeof pm.response.json().id);
Вы можете использовать журналы консоли для обозначения выполнения кода, иногда известного как "операторы трассировки":

if (pm.response.json().id) {
  console.log("id was found!");
  // do something
} else {
  console.log("no id ...");
  //do something else
}
 

Ошибка проверки равенства
Вы можете столкнуться с AssertionError: expected <value> to deeply equal '<value>'. Например, это может возникнуть при использовании следующего кода:

pm.expect(1).to.eql("1");
Это происходит потому, что тест сравнивает число со строковым значением. Тест вернет значение true только в том случае, если и тип, и значение равны.

 

Ошибка JSON не определен
Вы можете столкнуться с этой ReferenceError: jsonData is not definedпроблемой. Обычно это происходит, когда вы пытаетесь ссылаться на объект JSON, который не был объявлен или находится за пределами области действия вашего тестового кода.

pm.test("Test 1", () => {
  const jsonData = pm.response.json();
  pm.expect(jsonData.name).to.eql("John");
});

pm.test("Test 2", () => {
  pm.expect(jsonData.age).to.eql(29); // jsonData не определен
});
Убедитесь, что любой код, устанавливающий данные вашего ответа в переменную, доступен для всего тестового кода, например, в этом случае вызовconst jsonData = pm.response.json();перед pm.testсделает его доступным для обеих тестовых функций.


Неопределенная ошибка проверки
Вы можете столкнуться с этой AssertionError: expected undefined to deeply equal..проблемой. Обычно это происходит, когда вы ссылаетесь на свойство, которое не существует или находится вне области действия.

pm.expect(jsonData.name).to.eql("John");
В приведенном выше примере, если вы видите AssertionError: expected undefined to deeply equal 'John', это указывает на то, что nameсвойство не определено в jsonDataобъекте.

 
Тест не провалился
Могут быть случаи, когда вы ожидаете, что тест провалится, но этого не происходит.

//тестовая функция не определена должным образом - отсутствует второй параметр
pm.test("Not failing", function () {
    pm.expect(true).to.eql(false);
});
Убедитесь, что ваш тестовый код синтаксически корректен, и повторите попытку отправки запроса.

 
Проверка структуры ответа
Вы можете выполнить проверку схемы JSON с помощью tv4

Примечание переводчика: Tiny Validator (for v4 JSON Schema), устарел, выдает общий статус проверки.

const schema = {
 "items": {
 "type": "boolean"
 }
};
const data1 = [true, false];
const data2 = [true, 123];

pm.test('Schema is valid', function() {
  pm.expect(tv4.validate(data1, schema)).to.be.true;
  pm.expect(tv4.validate(data2, schema)).to.be.true;
});
Вы также можете проверить схему JSON с помощью ajv по умолчанию.

Примечание переводчика: Ajv JSON schema validator, выдает развернутую ошибку AssertionError: expected data to satisfy schema but found following errors:...

const schema = {
  "properties": {
    "alpha": {
      "type": "boolean"
    }
  }
};
pm.test('Schema is valid', function() {
  pm.response.to.have.jsonSchema(schema);
});
Примечание переводчика: Использование Ajv для объекта

var Ajv = require('ajv'),
    ajv = new Ajv({logger: console});

pm.test("Response use a valid schema", function() {
    pm.expect(ajv.validate(cam, RECTILINEAR_SCHEMA)).to.be.true;
    });
 

Отправка асинхронного запроса
Вы можете отправить запрос из своего кода тестов и зарегистрировать ответ.

pm.sendRequest("https://postman-echo.com/get", function (err, response) {
    console.log(response.json());
});
 


Postman Interview Questions

1. What is Postman?

Postman is a collaboration platform for API development. It is a popular API client and it enables you to design, build, share, test, and document APIs.

Using the Postman tool, we can send HTTP/s requests to a service, as well as get their responses. By doing this we can make sure that the service is up and running.

Being originally a Chrome browser plugin, Postman now extends its solution with the native version for both Mac and Windows.

2. Why Postman?

Postman has become a tool of choice for over 8 million users.

Free: It is free to download and use for teams of any size.
Easy: Just download it and send your first request in minutes.
APIs Support: You can make any kind of API call (REST, SOAP, or plain HTTP) and easily inspect even the largest responses.
Extensible: You can customize it for your needs with the Postman API.
Integration: You can easily integrate test suites into your preferred CI/CD service with Newman (command line collection runner)
Community & Support: It has a huge community forum
3. What is an API?

API is an acronym and it stands for Application Programming Interface. API is a set of routines, protocols, and tools for building Software Applications. APIs specify how one software program should interact with other software program.

In simple words, API stands for Application Programming Interface. API acts as an interface between two software applications and allows the two software applications to communicate with each other. API is a collection of software functions which can be executed by another software program.

Must Read: API Testing Complete Tutorial

4. Name some tools used for API Testing?

Some of the tools used to do API Testing are as follows

Postman
Katalon Studio
SoapUI
Tricentis Tosca
Apigee
Jmeter
5. What are the core components of an HTTP request?

An HTTP request includes five key elements:

HTTP methods – Set of request methods to perform desired action for a given resource (GET, PUT, POST, DELETE)
Uniform Resource Identifier (URI) – Describes the resource
HTTP Version, (example- HTTP v1.1)
Request Headers, (example- Content-type : application/json, Content-Length : 511)
Payload – It is basically a Request Body which includes message content.
6. State The Core Components of an HTTP Response?

Every HTTP response contains four key elements.

Status/Response Code – These are response codes issued by a server to a client’s request. For example, 404 means Page Not Found, and 200 means Response is OK.
HTTP Version – describes HTTP version, for example-HTTP v1.1.
Response Header – Includes information for the HTTP response message. For example, Content-type, Content-length, date, status and server type.
Response Body – It contains the data that was requested by a client to server.
7. What API information is exposed in Web Developer tools?

Request headers, Response body, Response cookies

8. What can we use to get API information from web developer tools into Postman?

Copy as cURL can get API information from web developer tools into Postman.

9. In which type of encoding does postman accept authorization credentials?

Postman accepts Base64 encoding only. This is provided inbuilt in postman or else you can also refer 3rd party websites to convert the credentials in base64.

10. Why does Postman accept Base64 encoding only?

We use base64 particularly because it transmits the data into the textual form and sends it in easier form such as HTML form data. Also, we can rely on the same 64 characters in any encoding language that we use.

11. What is meant by the term environment in postman?

An environment in postman is a set of key value pairs. You can create multiple environments in postman which can be switched quickly with a press of a button. There are 2 types of environment, global and local.

12. Can global scope variables have duplicate names in postman?

Since global variables are global i.e. without any environment, global variables cannot have duplicate names. Local variables can have the same name but in different environments.

13. Which one will be preferred in postman- a global variable or a local variable?

In postman, if 2 variables have the same name( one being local, other global) then the higher priority is of the local variable. it will overwrite the global variable.

14. What is a Postman Collection?

A Postman Collection lets us group individual requests together. Simply it allows us to organize the requests into folders.

15. What do you mean by postman monitors?

The postman monitor is used for running collections. Collections are run till specified time defined by the user. Postman Monitor requires the user to be logged in. Monitor reports are shared by users over email on a daily/monthly basis.

16. What do you understand by the term Postman Collection runners?

A postman collection runner is used to perform Data-driven testing. The group of API requests are run in a collection for the multiple iterations with different sets of data.

17. Can local variables be imported in Postman Monitors?

Yes. Postman monitors allow to import local variables but it does not allow to import global variables.

18. What is the purpose of Postman cloud if we are working in a company? Why?

A Postman cloud is a common repository of companies to access Postman collections. In Postman cloud, work can be saved instantly after logging in. Anyone from the team can access data/collections from anywhere.

19. Why is it not preferred to save work in Postman cloud?

It is not preferred to save your work in Postman cloud as company’s work is not allowed to be leaked and remain confidential. Security breaches can be experienced if Postman cloud is used as Postman cloud requires sign in. Therefore Postman Cloud is discouraged for saving work and team workspace is highly encouraged.

20. What is the purpose of status code 304?

It means NOT MODIFIED. It is used to reduce network bandwidth usage in case of conditional GET requests. Response body should be empty. Headers should have date, location etc.

21. Define status code 201?

It means created, when a resource is successfully created using POST or PUT request. It returns a link to a newly created resource using the location header.

22. When do we use global variables, collection variables, and local variables?

Global variables are general purpose variables, ideal for quick results, and prototyping. They are used while passing data to other requests.

Collection variables can be mostly used for storing some constants that do not change during the execution of the collection. They are used for constants that do not change during the execution and also for URLs / authentication credentials if only one environment exists.

Local variables are only available within the request that has set them or when using Newman/Collection runner during the entire execution. They are used whenever you would like to override all other variable scopes.

23. How do you remove local variables?

Local variables are automatically removed once the tests have been executed.

24. How can we stop executing requests or stop the collection run?

postman.setNextRequest(null);

25. What is the difference between form data and x-www-form-urlencoded ?

The difference between the form data and x-www-form-urlencoded is that the url will be encoded when sent through x-www-form-urlencoded.

26. Where are query parameters stored in a GET request?

Query parameters are stored in the URL in a GET request.

27. How can we access a Postman variable?

We can access a Postman variable by entering the variable name as {{var}}

28. What is the HTTP response code for a POST request with incorrect parameters?

400 Bad Request is an ideal response code for request with incorrect parameters.

29. How can you iterate a request 100 times in Postman?

By using Collection Runner

30. How can we organize requests in Postman?

We can organize requests in Postman with the Collections.

31. Which programming language is used for Postman tests?

JavaScript

32. What will execute first in a Collection Run?

Pre-request scripts at the Collection level are executed first in a Collection run.

33. What are some of the JS libraries available in Postman?

Lodash, Moment, GUID

34. Which tool can be used to run Postman Collections in Jenkins?

Newman can be used.

35. How can we log requests and responses in Postman?

We can view requests logs and response logs through the Postman Console window.

36. What is GUID?

GUID stands for Global Unique Identifier. It is basically hexadecimal digits separated by hyphens. GUID solves the purpose of uniqueness.

In Postman, we use this to generate and send a random value to APIs.

{
"id": "{{$guid}}",
}
Read more on GUID here

I would like to conclude this post “Postman Interview Questions” here. Final words, Bookmark this post “Postman Interview Questions And Answers” for future reference.

Postman Interview Questions and Answers
Question - 101 : - What is the significance of 301 status code?
Answer - 101 : -

301 status code represents permanent redirect from one website page to another. It tells the search engine that the old page is outdated and the engine has to index the new page URL.

Question - 102 : - Why is Base64 encoding primarily used in Postman?
Answer - 102 : -

Base64 encoding is primarily used because it does the task of data transmission in a textual format that is easier to be sent in the requests in HTML form statistics format. Another reason why we use this is that using identical 64 characters for encoding is heavily reliable in any language we use.

Question - 103 : - What is the purpose of the 304 status code?
Answer - 103 : -

304 status code stands for NOT MODIFIED. This is used for diminishing the bandwidth of the network in cases of restricted GET requests. In such cases, the response body should be empty or blank and the headers should have a date, location, signature etc.

Question - 104 : - Is it preferable to save our work on Postman Cloud?
Answer - 104 : -

When working on enterprise-level applications for organizations, it is not preferred to store our work on the Postman cloud because of the required privacy and security. In the Postman cloud, there are chances of security breaches by a skilled hacker.

Question - 105 : - What do you understand by the pre-request script?
Answer - 105 : -

Pre-request scripts are those scripts that are used for executing Javascript code before a request is run. It is used for performing pre-processing tasks like setting variables, parameters, headers, body data, etc.

Question - 106 : - If we have a global and a local variable of the same name, which one will be given the most preference in Postman?
Answer - 106 : -

In such cases, the higher precedence is given to the local variable by overwriting the value of the global variable.

Question - 107 : - Does Postman allow flexibility to make use of the command-line?
Answer - 107 : -

Postman provides a command-line tool called Newman using which we can run any Postman collection. It is a NodeJS based package that requires a node environment for executing collections using Newman Collection Runner. It has full parity with Postman’s Collection Runner i.e it provides support for running assertions, pre-request scripts, or other request scripts linked with the requests that belong to the collection.

We can use Newman by following the below steps:

Install Node
Install Newman package using npm command as: npm install -g newman
To run the collection, first export the environment to JSON format in Postman. Then run the below command for running the collection in Newman:
newman run {{path to collection json}} -e {{path to environment json}}

Question - 108 : - How will you generate random numbers of a given range in Postman?
Answer - 108 : -

Suppose you want to generate numbers between the range 1 to N, then it can be done in the pre-request script as follows:

pm.globals.set('randomNumber', Math.floor(Math.random() * N));
We can then use this variable in the URL as:{{randomNumber}}

Question - 109 : - What do you understand by Scratch Pad?
Answer - 109 : -

Scratch Pad is a space provided by Postman that helps us to work without being connected to Postman servers. It provides the flexibility of utilizing some of the features of postman offline. The features include- collection creation, creating requests and the ability to send requests. These are stored locally and once logged in, the work is saved into the workspace.

Postman Interview Questions and Answers
Question - 91 : - Why isn't it better to save your work in the Postman cloud?
Answer - 91 : -

It is not recommended that you save your work in the Postman cloud since company work cannot be leaked and must remain confidential. If Postman cloud is used, security breaches may occur since Postman cloud requires sign-in. As a result, saving work on Postman Cloud is discouraged, while team workspace is highly encouraged.

Question - 92 : - In a Collection Run, what will execute first?
Answer - 92 : -

In a Collection run, pre-request scripts at the Collection level are executed first.

Question - 93 : - What are some of Postman's JS libraries to offer?
Answer - 93 : -

GUID, Lodash, Moment

Question - 94 : - What exactly is a GUID?
Answer - 94 : -

The term GUID refers to a globally unique identifier. Hyphens separate hexadecimal digits in this format. GUID satisfies the requirement for uniqueness.

Question - 95 : - What encoding is accepted by Postman in authorization credentials?
Answer - 95 : -

Postman accepts authorization credentials in Base64 encoding format only. It is provided in Postman by default. If we do not want to use an inbuilt encoding system, we can refer to third-party websites for converting the credentials in base64 format.

Question - 96 : - Can we have the same names for global variables in postman?
Answer - 96 : -

The scope of global variables is limited to the workspace and is global. Due to this, variables having global scope cannot have the same names. We can have the same names for local variables but they need to be part of different variables.

Question - 97 : - What do you know about postman monitor?
Answer - 97 : -

Monitoring is a method of staying in sync with the health and performance of the APIs. Postman provides inbuilt monitoring services that help us be in sync with the API development and performance. The monitors provided by Postman are mainly based on the working of collection runners. They run every request in the collection and analyze the values mentioned in the test scripts. Monitors use the test scripts for validating and monitoring the responses. The reports generated are shared with the developers over emails or alerts in slack, hipchat, etc based on our configuration settings.

Question - 98 : - What is a binary form in POST methods?
Answer - 98 : -

The binary form is designed to help send data in a format that is not possible to be entered manually. These options are used while sending large files like images, CSV files, etc in the POST request. Binary representation is the easiest representation for sending complex data with the request.

Question - 99 : - What are the limitations of Postman?
Answer - 99 : -

Postman is not suitable for processing 1000+ API requests.
If the project is very large, managing the collections and requests become cumbersome.
It is not suitable if we want to manage the workspace in the form of code as there would be a lot of code duplication for dynamic API requests.

Question - 100 : - How can you save the responses of API to a file in Postman?
Answer - 100 : -

We can do this in two ways:

Click on the Download button in the response section.
Click on the arrow beside send button - There will be an option to send and download. Clicking on it will prompt Postman to ask the location of saving the response post successful execution of the request.

Postman Interview Questions and Answers
Question - 81 : - In Postman, how will you create random integers in a particular range?
Answer - 81 : -

If you want to create numbers in the range of 1 to N, you can do so as follows in the pre-request script:

pm.globals.set('randomnumber, Math.floor (Math.random() N));
We can then utilise this variable in the URL as

{{randomNumber}}

Question - 82 : - In Postman, what is digest auth?
Answer - 82 : -

Postman provides the Digest Authorisation method as one of its authorization options. The client sends the request to the API first, and the server responds with a number that can only be used once a realm value and a 401 unauthorised response code. After that, we'll receive an encrypted data array including both the username and password and the previously obtained data from the server. The server generates an encrypted data string from this information and compares it to what was sent to authenticate the request.

This can be done by going to the Authorization tab and selecting "Digest Auth" from the drop-down menu. The fields for both stages of the authentication request are displayed in the Postman window. Based on the data received from the server, the fields required for the second step of the request are auto-filled.

Question - 83 : - What is an application programming interface (API)?
Answer - 83 : -

Application Programming Interface is an abbreviation that stands for Application Programming Interface. API stands for Application Programming Interface, and it is a set of routines, protocols, and tools for creating software applications. APIs define how one piece of software should communicate with another.

API stands for Application Programming Interface in basic terms. API serves as a connection point between two software applications, allowing them to communicate. A programming interface (API) is a set of software capabilities that another application can use.

Question - 84 : - What constitutes an HTTP request's fundamental components?
Answer - 84 : -

An HTTP request consists of five main components:

HTTP methods: A set of request methods used to accomplish a specific action on a resource (GET, PUT, POST, DELETE)
URI (Uniform Resource Identifier): Identifies a resource.
Version of HTTP (example- HTTP v1.1)
Content-type: application/json, Content-Length: 511) Request Headers
Payload: This is a Request Body that contains the message content.

Question - 85 : - What is Postman's Basic Auth?
Answer - 85 : -

In Postman, Basic Auth is an authentication method that allows HTTP user agents such as web browsers to enter a username and password. Once you enter the login and password, it is paired with the request.

Question - 86 : - Postman accepts authorisation credentials in which types of encoding?
Answer - 86 : -

The only codec supported by Postman is Base64. This is built-in to Postman, or you can use third-party websites to convert your credentials to base64.

Question - 87 : - Why does Postman only allow Base64 encoding?
Answer - 87 : -

We utilise base64 because it converts data into text and sends it more straightforwardly, such as HTML form data. We can also rely on the same 64 characters in any encoding language.

Question - 88 : - In Postman, may global scope variables have duplicate names?
Answer - 88 : -

Global variables cannot have duplicate names because they are global; they exist outside of any environment. The names of local variables can be the same in multiple settings.

Question - 89 : - What is a Postman Collection, and how does it work?
Answer - 89 : -

Individual requests can be grouped in a Postman Collection. Simply put, it enables us to categorise requests into folders.

Question - 90 : - What is the purpose of the Postman cloud?
Answer - 90 : -

A Postman cloud is a centralised location where businesses can access Postman collections. Work can be stored instantaneously in the Postman cloud after logging in. Anyone on the team has access to data and collections from any location.


Postman Interview Questions and Answers
Question - 71 : - Is it possible to reuse the authentication token for multiple requests?
Answer - 71 : -

Yes, it is possible to reuse the authentication token for multiple requests. We can achieve it by creating a collection and adding all the requests having the same authentication token to that collection and then assigning the auth token to the same collection. We can apply it to the individual requests by selecting the "Inherit auth from parent" option in the Authorization tab.

Question - 72 : - In POST methods, what is a binary form?
Answer - 72 : -

The binary form is intended to assist in transmitting data in a format that cannot be entered manually. These options are used for submitting large files in a POST request, such as photos, CSV files, etc. The most straightforward encoding for sending complex data with the request is binary.

Question - 73 : - Why does Postman mostly use Base64 encoding?
Answer - 73 : -

Base64 encoding is widely used because it allows data to be transmitted in a textual format that is easier to send in HTML form statistics requests. Another reason we utilise this is that encoding with identical 64 characters is quite reliable in any language.

Question - 74 : - Why is the 304 status code used?
Answer - 74 : -

NOT MODIFIED is the 304 status code. In the case of limited GET queries, this is used to reduce the network's bandwidth. In such circumstances, the response body should be empty or blank, and the headers should include information such as the date, location, and signature, among other things.

Question - 75 : - Why isn't it preferable to save work on the Postman cloud?
Answer - 75 : -

Because of the required privacy and security, it is not recommended that we store our work on the Postman cloud when working on enterprise-level applications for enterprises. A skilled hacker has the potential to compromise the security of the Postman cloud.

Question - 76 : - What are the different variable scopes that Postman offers?
Answer - 76 : -

The following variable scopes are available in Postman:

Global Variables: Global variables allow data to be shared between many collections, requests, and scripts. They can be found all over the office.
Environment Variables: These allow us to customise requests for various development settings, such as local testing, stage testing, and production testing.
Local Variables: These are temporary variables that request scripts can only access. Depending on the needs, they are either limited to a single request or a single collection. These variables are no longer available after the script has finished running.
Variables in a Collection: These variables are set to be available for all requests in the collection. They are unaffected by their surroundings.
Data Variables: These variables come from external JSON or CSV files that define the datasets that Collection Runner or Newman needs to conduct the collection.

Question - 77 : - Can the authentication token be reused for many requests?
Answer - 77 : -

Yes, it's conceivable. It is possible to create a collection, add all requests with the same authentication token, and then assign the authentication token to the collection. Select the "Inherit auth from parent" option on the Authorization tab to apply this to individual requests.

Question - 78 : - What are Postman workspaces? And what purpose do they serve?
Answer - 78 : -

Workspaces are Postman-provided areas/spaces for teams to collaborate on a specific set of collections. It allows you to logically divide requests or collections exclusive to a developer or team, making request administration accessible.

In Postman, there are two sorts of workspaces:

Personal Workspace: These workspaces are essential when working on many projects simultaneously and need logical separation between requests to handle them better.
Team Workspace: These are designed for group collaboration so that multiple people can participate in testing requests.
By publishing the users' email addresses, we can encourage new users to collaborate on our collections. After accepting the invitation, new users can begin contributing to the workspace by adding or changing requests.

Question - 79 : - What is ScratchPad?
Answer - 79 : -

Scratch Pad is a Postman-provided workspace that allows us to operate without relying on Postman servers. It allows you to use some of Postman's capabilities when you're not connected to the internet. The features include creating collections, creating requests, and submitting requests. These are saved locally, and the work is saved into the workspace once you log in.

Question - 80 : - Does Postman give you the option of using the command line?
Answer - 80 : -

Postman supplies the Newman command-line tool, which can be used to run any Postman collection. It's a NodeJS-based package that uses Newman Collection Runner to execute collections. It is fully compatible with Postman's Collection Runner, which means it may run assertions, pre-request scripts, and other request scripts tied to the collection's requests.

Newman can be used by following the procedures below:

Setup Node
Using the npm command, install the Newman package as follows: npm install -g newman
Open Postman and export the environment to JSON format to run the collection. Then use the following command in Newman to run the collection:
newman run {{path to collection json}} -e {{path to environment json}}

Postman Interview Questions and Answers
Question - 61 : - How can you generate random numbers of a given range in Postman?
Answer - 61 : -

In Postman, we can generate random numbers of a given range using some script. Suppose you want to generate numbers between the range of 1 to N, then use the following pre-request script:

pm.globals.set('randomNumber', Math.floor(Math.random()* N));  
Now, use this variable in the URL as {{randomNumber}}

Question - 62 : - What is the full form of GUID? Where is it used?
Answer - 62 : -

GUID is an acronym that stands for Global Unique Identifier. It is a set of hexadecimal digits separated by hyphens and solves the purpose of uniqueness.

In Postman, it is used to generate and send a random value to APIs.

Example:

{  
"id": "{{$guid}}",  
}  

Question - 63 : - What are some examples of the JS libraries available in Postman?
Answer - 63 : -

Some examples of the JS libraries available in Postman are Lodash, Moment, GUID, etc.

Question - 64 : - How can you iterate a request 100 times in Postman?
Answer - 64 : -

We can iterate a request 100 times in Postman using Collection Runner.

Question - 65 : - What are the different Request Method types in Postman?
Answer - 65 : -

The different Request Method types in Postman are as follows:

Get
Post
Put
Delete
Patch
Head
Delete
Question - 66 : -
What is Scratch Pad?

Answer - 66 : -

Postman provides a space known as Scratch Pad. The Scratch Pad facilitates us to work without being connected to Postman servers and also provides the flexibility to utilize some of the features of Postman offline. These features include collection creation, creating requests, and the ability to send requests. The Scratch Pads are stored locally, and once logged in; the work is saved into the workspace.

Question - 67 : - What are the most commonly seen status codes in Postman?
Answer - 67 : -

Following is the list of most commonly seen status codes in Postman:

200 (OK): Status code 200 specifies that the request was correct.
201 (Created): Status code 201 specifies that the value wrapped with the request has been created in the database. Here, it is obvious that the request was correct.
204 (No Content): Status code 204 specifies that the request was correct and received, but there is no content to send. It means there is no response to send to the client by the server.
400 (Bad Request): Status code 400 specifies a bad request. A bad request means that the syntax of the request was incorrect. It appears when we have sent the wrong parameters along with the request URL or in the request's body.
401 (Unauthorized request): Status code 401 specifies an unauthorized request. An unauthorized request is a request for which you are not authorized. This status code appears when we are not authorized to access the server or enter the wrong credentials.
404 (Not Found): Status code 404 specifies that the server was connected, but it could not find what was requested. It simply means "request not found". This status code normally appears when we request a web page not available on the server.

Question - 68 : - How can we access a Postman variable?
Answer - 68 : -

We can access a Postman variable by entering the variable name as {{var}}.

Question - 69 : - What is executed first in a collection run?
Answer - 69 : -

The pre-request scripts at the compilation level are executed first in a collection run.

Question - 70 : - Where are the query parameters stored in a GET request in Postman?
Answer - 70 : -

In the GET request, the query parameters are stored in the URL in Postman.

Postman Interview Questions and Answers
Question - 51 : - What is the use of the 301 status code in Postman?
Answer - 51 : -

In Postman, the 301 status code is used to specify that the page has been permanently redirected from one website page to another. It tells the search engine that the old page is outdated, and the search engine has to index the new page URL.

Question - 52 : - What is the method to organize requests in Postman?
Answer - 52 : -

We can organize requests in Postman with the Collections.

Question - 53 : - What are the various variable scopes provided by Postman?
Answer - 53 : -

Following is a list of several variable scopes provided by Postman:

Global Variables: Global variables allow data access between different collections, requests, and scripts. They are available throughout the workspace.
Local Variables: Local variables are the temporary variables that can be accessed only within the scope of requests scripts. Depending on the requirements, these variables are either scoped to a single request or single collection. These variables are not available once the script execution is completed.
Environment Variables: The Environment variables allow us to tailor the requests about different development environments such as local testing, stage testing, or prod testing.
Collection Variables: The Collection variables are independent of the environment and scoped to be available for all the requests present within the collection.
Data Variables: The Data variables come from external JSON or CSV files and define the datasets required to run the collection in Collection Runner or Newman.

Question - 54 : - What is the difference between the form data and x-www-form-urlencoded?
Answer - 54 : -

The key difference between the form data and x-www-form-urlencoded is that the URL will be prearranged when sent through x-www-form-urlencoded.

Question - 55 : - In which conditions should we use global, collection, and local variables?
Answer - 55 : -

Global variables are the general-purpose variables. They are used while passing data to other requests and are ideal for quick results and prototyping.

Collection variables are generally used for storing some constants that do not change during the execution of the collection. These variables are used for constants that do not change during the execution and URLs / authentication credentials if only one environment exists.

Local variables are the temporary variables and are only available within the request that has set them or when using Newman/Collection runner during the script execution. These variables are used whenever we have to override all other variable scopes.

Question - 56 : - How can we access the history of requests in Postman?
Answer - 56 : -

In Postman, we can access the history of requests in the History tab provided on the Postman application. When we sign into the Postman account, the history will be synced across the devices where you are logged in. After clicking on any of the requests present in the History tab, the view will open the request that we saved while working on it earlier. History also contains the collection runs that were executed as summarized versions.

When you click on the "View More option" on the request, you will see options to save, document, monitor, delete or mock the request. You can also select multiple requests by using Command or Control button and then clicking on the request.

Question - 57 : - Which method is preferred to write the tests?/ JavaScript or Functional?
Answer - 57 : -

The functional method is advised and recommended while writing tests in Postman. Although we can use JavaScript methods, there has been no notice of ending the support for the JavaScript method.

Question - 58 : - How can you organize requests in Postman?
Answer - 58 : -

In Postman, we can use Collections to organize requests.

Question - 59 : - What is the binary form in the Post method in Postman?
Answer - 59 : -

In Postman, the binary form is designed to send the information in a specific format that cannot be entered manually. For example, images, files, etc. Everything in a computer is converted to binary.

Question - 60 : - How can we view request logs and response logs in Postman?
Answer - 60 : -

We can view request logs and response logs in Postman through the Postman Console window.

Postman Interview Questions and Answers
Question - 41 : - What is a binary form in POST methods? What is its usage?
Answer - 41 : -

In POST methods, the binary form is designed to send data easily in a format it is impossible to enter data manually. This is mainly used when sending large files like images, CSV files, etc., in the POST request. The binary representation is one of the easiest representations used for sending complex data with the request.

Question - 42 : - What are the main limitations of Postman?
Answer - 42 : -

Following is the list of key limitations of Postman:

Postman cannot process 1000+ API requests.
In the case of huge projects, it isn't easy to manage the collections and requests.
Postman is not suitable for managing the workspace in the form of code. This is because there would be a lot of code duplication for dynamic API requests.

Question - 43 : - Can we import local variables in Postman Monitors?
Answer - 43 : -

Yes, we can import local variables in Postman Monitors, but it is not allowed to import global variables in Postman Monitors.

Question - 44 : - What is Basic Auth in Postman?
Answer - 44 : -

In Postman, Basic Auth is an authorization technique provided for HTTP user agents like web browsers to enter username and password. After entering the username and password, it gets associated with the request.

Question - 45 : - What is the use of Postman Collection runners?
Answer - 45 : -

The Postman Collection runner is used to perform Data-driven testing. It runs a group of API requests for multiple iterations with different data sets.

Question - 46 : - How can we log requests and responses in Postman?
Answer - 46 : -

We can view requests logs and response logs through the Postman Console window.

Question - 47 : - Which tool can be used to run Postman Collections in Jenkins?
Answer - 47 : -

Newman can be used.

Question - 48 : - What are some of the JS libraries available in Postman?
Answer - 48 : -

Lodash, Moment, GUID

Question - 49 : - What is the procedure to save the responses of API to a file in Postman?
Answer - 49 : -

In Postman, there are two ways to save the responses of an API to a file:

First, click on the download button in the response section.
Second, click on the arrow next to the send button. Here, you will see an option to send and download. After clicking on it, you will get a prompt Postman asking for the location of saving the response post successful request execution.

Question - 50 : - What is the meaning of the status code 304?
Answer - 50 : -

The status code 304 means NOT MODIFIED. It is used to minimize the network bandwidth usage in conditional GET requests. The response body should be empty. Headers should have a date, and location, etc.


Postman Interview Questions and Answers
Question - 31 : - What is the purpose of status code 304?
Answer - 31 : -

It means NOT MODIFIED. It is used to reduce network bandwidth usage in case of conditional GET requests. Response body should be empty. Headers should have date, location etc.

Question - 32 : - Define status code 201?
Answer - 32 : -

It means created, when a resource is successfully created using POST or PUT request. It returns a link to a newly created resource using the location header.

Question - 33 : - When do we use global variables, collection variables, and local variables?
Answer - 33 : -

Global variables are general purpose variables, ideal for quick results, and prototyping. They are used while passing data to other requests.

Collection variables can be mostly used for storing some constants that do not change during the execution of the collection. They are used for constants that do not change during the execution and also for URLs / authentication credentials if only one environment exists.

Local variables are only available within the request that has set them or when using Newman/Collection runner during the entire execution. They are used whenever you would like to override all other variable scopes.

Question - 34 : - How do you remove local variables?
Answer - 34 : -

Local variables are automatically removed once the tests have been executed.

Question - 35 : - How can we stop executing requests or stop the collection run?
Answer - 35 : -

postman.setNextRequest(null);

Question - 36 : - What is the difference between form data and x-www-form-urlencoded ?
Answer - 36 : -

The difference between the form data and x-www-form-urlencoded is that the url will be encoded when sent through x-www-form-urlencoded.

Question - 37 : - What do you understand by status code 201?
Answer - 37 : -

The status code 201 means created when you have successfully created a resource using POST or PUT request. It returns a link to a newly created resource using the location header.

Question - 38 : - Why is it not suggested to save work in Postman cloud?
Answer - 38 : -

It is not suggested and is not preferred to save your work in the Postman cloud as the company's work is not allowed to be leaked and remain confidential. While saving your work on Postman cloud, it may cause a security breach as it requires sign-in. That's why the Postman Cloud is not suggested for saving work, and team workspace is highly preferred.

Question - 39 : - What is digest auth in Postman?
Answer - 39 : -

The digest auth or digest authorization is one of the authorization techniques provided by Postman. This technique lets the clients send the request first to the API and get responses from the server, including a number that can be used only once a real value and 401 unauthorized responses. After that, the client can send back an encrypted data array with both username and password and the data received from the server earlier. Now, the server uses this data to generate an encrypted data string and compares this with what was sent for authenticating the request.

Question - 40 : - What is the use of Postman cloud when we are working in a company?
Answer - 40 : -

The Postman cloud is a common repository of companies to access Postman collections. That is why we use it when we are working in a company. We can save the work instantly in the Postman cloud after logging in. It facilitates the team members to access data/collections from anywhere.

Postman Interview Questions and Answers
Question - 21 : - What are the core components of an HTTP Response?
Answer - 21 : -

Following are the four core components of an HTTP Response:

Status/Response Code: The server generates the status or response codes when the client makes a request. For example, 404 means Page Not Found, and 200 means Response is OK.
HTTP Version: It describes the HTTP version. For example: HTTP v1.1, HTTP v1.3 etc.
Response Header: The Response Header includes the information for the HTTP response message. For example, Content-type, Content-length, date, status, and server type.
Response Body: The Response Body contains the client's data requested from the server.

Question - 22 : - Which type of encoding does Postman accept authorization credentials and why?
Answer - 22 : -

Postman accepts authorization credentials in Base64 encoding only. This is inbuilt in Postman, or else you can refer to a third-party website to convert the credentials in base64. The Base64 authorization credentials are generally used because they transmit the data into a textual form and send it in an easier form, such as HTML form data.

Question - 23 : - Why does Postman accept Base64 encoding only?
Answer - 23 : -

Postman accepts Base64 encoding only because it transmits the data into the textual form and sends it in an easier form, such as HTML form data. This is also preferred because we can rely on the same 64 characters in any encoding language we want to use.

Question - 24 : - What are the core components of an HTTP request?
Answer - 24 : -

Following are the five core components of an HTTP request:

HTTP methods: It is a set of request methods used to perform needed action for a given resource (GET, PUT, POST, and DELETE).
Uniform Resource Identifier (URI): It is a kind of address that describes the resource.
HTTP Version: It specifies the version of the HTTP. For example HTTP v1.1
Request Headers: It specifies the content type and content length of the request. For example: Content-type: application/ JSON, Content-Length: 511
Payload: It is used to specify the Request Body that includes message content.

Question - 25 : - What is the difference between Query Params and Path Variables?
Answer - 25 : -

Query Params or Query Parameters are used for sorting or filtering the resources. On the other hand, Path Variables are used for identifying specific resources.

Question - 26 : - What do you mean by postman monitors?
Answer - 26 : -

The postman monitor is used for running collections. Collections are run till specified time defined by the user. Postman Monitor requires the user to be logged in. Monitor reports are shared by users over email on a daily/monthly basis.

Question - 27 : - What do you understand by the term Postman Collection runners?
Answer - 27 : -

A postman collection runner is used to perform Data-driven testing. The group of API requests are run in a collection for the multiple iterations with different sets of data.

Question - 28 : - Can local variables be imported in Postman Monitors?
Answer - 28 : -

Yes. Postman monitors allow to import local variables but it does not allow to import global variables.

Question - 29 : - What is the purpose of Postman cloud if we are working in a company? Why?
Answer - 29 : -

A Postman cloud is a common repository of companies to access Postman collections. In Postman cloud, work can be saved instantly after logging in. Anyone from the team can access data/collections from anywhere.

Question - 30 : - Why is it not preferred to save work in Postman cloud?
Answer - 30 : -

It is not preferred to save your work in Postman cloud as company’s work is not allowed to be leaked and remain confidential. Security breaches can be experienced if Postman cloud is used as Postman cloud requires sign in. Therefore Postman Cloud is discouraged for saving work and team workspace is highly encouraged.


Postman Interview Questions and Answers
Question - 11 : -
What are the various tools used for API Testing?

Answer - 11 : -

Following is a list of some tools that are used for API Testing:

Postman
SoapUI
Katalon Studio
Tricentis Tosca
Apigee
Jmeter etc.

Question - 12 : - How can you access the Postman variables?
Answer - 12 : -

We can access the Postman variables by using the variable name as:{{variable_name}}

Question - 13 : - What are the different types of API requests supported in Postman?
Answer - 13 : -

Following is a list of the different types of API requests supported in Postman:

GET
POST
PUT
PATCH
COPY
DELETE
HEAD
OPTIONS
LINK
UNLINK
PURGE
LOCK
UNLOCK
PROPFIND
VIEW

Question - 14 : - What is an HTTP request? Give an example of an HTTP request.
Answer - 14 : -

An HTTP request is a programming request made by the client to a named host located on a server. HTTP works as a communication interface or a request-response protocol between a client and server. The main aim of the HTTP request is to access a resource on the server. To make the HTTP request, the client uses components of a URL (Uniform Resource Locator), which includes the information needed to access the resource.
An example of the HTTP request:

A client (browser) sends an HTTP request to the server; then, the server responds to the client. The response sent by the server contains the status information about the request, and it can also contain the requested content.

Question - 15 : - What do you understand by team workspace in Postman?
Answer - 15 : -

As we know, a workspace is a collaborative environment for users to develop and test APIs. In the same way, a team workspace is a workspace that is shared by the whole team working on the same collections of requests. Usually, it is time-consuming and hard to share the collections through external drives or other sharing; the team workspace synchronizes and collaborates all the team's work in one place.

Question - 16 : - What is the use of Postman monitor?
Answer - 16 : -

The Postman monitor is used for running collections. Collections run till the specified time defined by the users. It requires the users to be logged in, and the users share the Monitor reports over an email on a daily or monthly basis.

Question - 17 : - How can you log variable values in Postman?
Answer - 17 : -

In Postman, we can log the variable values in the console by using the following command:

console.log(pm.variables.get("variable_name"));  

Question - 18 : - Which one is preferred in Postman, a global or local variable?
Answer - 18 : -

In Postman, if 2 variables have the same name (one being local, the other global), then the higher priority is of the local variable. The local variable will overwrite the global variable.

Question - 19 : - Can we have two global scope variables with the same name in Postman?
Answer - 19 : -

The global variables are global, so we cannot set duplicate names for them without any environment as it creates confusion for the software. On the other hand, local variables can have the same name but in different environments.

Question - 20 : - What is the meaning of the term environment in Postman?
Answer - 20 : -

In Postman, the term environment is a set of key-value pairs. You can create multiple environments in Postman and switch among them quickly by pressing a button. There are 2 types of environment, global and local.

Postman Interview Questions and Answers
Question - 1 : - What is Postman?
Answer - 1 : -

Postman is an API platform that is used to develop, share, test APIs. It is also used for creating documentation for APIs. Test suites can be quickly designed using Postman, and also it can store test information to be used in other tests.

Question - 2 : - What is a collection in Postman?
Answer - 2 : -

A collection is equivalent to a folder on your computer. It is a set of requests that are grouped together, preferably of the same type. It is one of Postman's most important features, and it also provides nice features such as running a whole group of request together with just one click.

Question - 3 : - What are all the environment variables in Postman?
Answer - 3 : -

A collection of key-value pairs is called an environment. Each name of the variable represents its keys. And referencing the name of the variable allows you to access its value.
It is a set of variables that differentiate among the requests. Such as, we can have an environment for testing, one for development and another for production. We can change the value of the variables to pass the data between requests and tests

Question - 4 : - What is payload in Postman?
Answer - 4 : -

The Payload of an API Module is the body of your request and response message. It contains the data that you send to the server when you make an API request. You can send and receive Payload in different formats, for instance JSON.

Question - 5 : - What is a Pre-request script in Postman?
Answer - 5 : -

Pre-request scripts in Postman to execute JavaScript before a request runs

Scripts in the Pre-request Script tab for a request, collection, or folder, you can carry out pre-processing such as setting variable values, parameters, headers, and body data

Question - 6 : - What was the Postman originally developed?
Answer - 6 : -

When the Postman was developed, it was originally a Chrome browser plugin. It extends its solution with the native version for both Mac and Windows.

Question - 7 : - Why do we use Postman?
Answer - 7 : -

The Postman tool has become a choice of more than 8 million users. Following are the main reasons for using Postman:
It is free: Postman is free software that we can use for API testing. It is free to download and use for teams of any size.
It is easy to use: Postman is an easy-to-use software tool. We can send HTTP requests of various types (such as GET, POST, PUT, PATCH, etc.). We have to download it, and we can send our first request in minutes. It also gives us the ability to save environments for future use.
Community & Support: It has a huge community forum for customer support and extensive documentation.
It is extensible: Postman facilitates us customizing it according to our needs with the Postman API.
APIs Support: It facilitates us to make any API call (REST, SOAP, or plain HTTP) and easily inspect even the largest responses. It also helps manage the end-to-end lifecycle of the API - starting from design to mocking to testing and finally maintaining the APIs.
Runtime Services: Postman provides Runtime Services that help us manage API collections, environments, work-spaces, and different examples.
Integration: Postman facilitates us to easily integrate test suites into our preferred CI/CD tools and services, such as Jenkins with Newman (command-line collection runner).

Question - 8 : - What is an API?
Answer - 8 : -

API is an acronym that stands for "Application Programming Interface". It is a set of routines, protocols, and tools used for building Software applications. API is an interface, so it specifies how one software program should interact with other software programs.

In other words, we can say that API is an Application Programming Interface that acts as an interface between two software applications and allows these two software applications to communicate with each other. API is a collection of software functions that another software program can execute.

Question - 9 : - What are the various authorization methods provided by Postman?
Answer - 9 : -

Postman provides the following API request authorization options:

API Key
Oauth 1.0
Oauth 2.0
Bearer Token
Basic auth
Digest auth
Hawk Authentication
AWS Signature
NTLM Authentication

Question - 10 : - What is the use of the collection in Postman?
Answer - 10 : -

In Postman, a collection is used to group similar requests. It systematically arranges the requests into folders.

➡️ 1. What is Postman?
It is not an API Testing Tool
Postman is collaboration platform for API development
Help you to Design, Share, build , test, Document APIs
Postman supports Protocols - REST, SOAP, and GraphQL
Where as CURL
Source curl.se
Website
https://www.postman.com/
Can use as

➡️ 2. Why use Postman?
Clean and Easy to use UI
You can perform Exploratory Testing of APIs
Dynamic request, data and Collections support
Team workspace, sharing, mocking, monitoring of APIs
Write test case, put them in CI/CD with newman
Import from curl and different ways, sharing as link, explore feature
➡️ 3. When to use Postman?
Context as Software Tester
You have few API request
You don’t want to manage as code
Team is little not well versed with code
You want to cover API test(small collection)
➡️ 4. What are drawbacks of Postman?
Not suitable for the larger or 1000+ API request
For Large project its very clumsy to manage postman requests or collections
Not suitable if you want to manage as Code, lots of duplicate code if multiple API or dynamic request are required.
➡️ 5. What is an API?
API stands for the Application Programming Interface,
They are basically a collection of functions and procedures which allows us to communicate two applications or libraries.

Read more at
https://sdet.live/4Euj
➡️ 6. Can you tell alternates of Postman?
Katalon Studio
SoapUI
Apigee
Jmeter
Tricentis Tosca
hoppscotch.io
➡️ 7. What are different HTTP Methods?
GET
POST
PATCH
PUT
DELETE
OPTIONS
HEAD
➡️ 8. Can you test SOAP request with POSTMAN?
Yes
Demo
https://sdet.live/4Eus
➡️ 9. What is GET request?
Retrieve information from the given server using a given URI.
Requests using GET should only retrieve data and should have no other effect on the data.
➡️ 10. What is POST request?
A POST request is used to send data to the server, for example, customer information, file upload, etc. using HTML forms.
With or without Auth
➡️ 11. What is Patch Request?
Partial Update to the target resource
➡️ 12. What is Put request?
Replaces all current representations of the target resource with the uploaded content.
➡️ 13. What is Delete request?
Removes all current representations of the target resource given by a URI.
➡️ 14. What is HEAD http method?
Same as GET, but transfers the status line and header section only.
➡️ 15. What you validate in API Response?
Status Code
Response Body
Further Testing
Headers

How do import request from dev tools to Postman?

What type of Authentication supports Postman?
No auth
Basic
Digest
Bearer Token
AWS Signature
NTLM
OAuth1,2
API key

What is Basic Auth, How to perform in Postman ?
https://scrolltest.com/2018/11/22/how-to-handle-authentications-with-postman/
Basic access authentication is a method for an HTTP user agent (e.g. a web browser) to provide a username and password when making a request. In the example,
https://learning.postman.com/docs/sending-requests/authorization/#basic-auth

What is digest auth?, How to perform in POSTMAN?
In the Digest Auth. method username and password are sent over the web after applying some hash functions, Therefore which makes it more secure over network.
https://learning.postman.com/docs/sending-requests/authorization/#digest-auth

What is bearer token? And How to use it with POSTMAN?
Bearer tokens allow requests to authenticate using an access key, such as a JSON Web Token (JWT).

What is OAuth 1.0 & 2.0:-
and How to do it with POSTMAN?
They are the way for Internet users to grant websites or applications access to their information on other websites but without giving them the passwords.
https://learning.postman.com/docs/sending-requests/authorization/#oauth-10
https://learning.postman.com/docs/sending-requests/authorization/#oauth-20

1. Что такое API?
Интервьюер может задать этот вопрос, чтобы проверить ваши общие знания об API и их классе применения. При тестировании приложений вы можете использовать API для выполнения запросов к уникальным функциям программы. Вы можете дать краткий ответ, который отражает основное определение API и его функции.

Пример: API - это набор инструментов, процедур и протоколов для создания программного обеспечения. Она действует как мост между двумя программными приложениями, позволяя им взаимодействовать. Разработчики программного обеспечения могут создавать API как интерфейсы, предоставляющие услуги другим программам. Например, вы можете создать погодный API, с помощью которого приложения смогут получать информацию о погоде.

2. Каковы некоторые преимущества Postman?
Интервьюеры могут задать этот вопрос, чтобы оценить ваше общее знание Postman и вклад, который он может внести в ваш рабочий процесс. Вы можете назвать несколько особенностей Postman, которые дают программистам значительные преимущества.

Пример: Postman имеет простой интерфейс, который позволяет вам легко отправить запрос и получить ответ, просто нажав на кнопку. Тестировщики могут настроить пользовательскую среду для тестирования различных приложений. Такая конфигурация может ускорить процесс тестирования за счет хранения переменных, необходимых приложениям для работы. Разработчики, знакомые с JavaScript, также могут автоматизировать тесты в Postman для пользовательской функциональности, например, строить тесты с динамическими параметрами и передавать данные между запросами.

3. Объясните, как использовать глобальные, коллекционные и локальные переменные
Переменные позволяют хранить и повторно использовать значения в Postman. Менеджеры по найму могут задать этот вопрос, чтобы оценить ваш опыт создания пользовательских сред тестирования для клиентов API. В своем ответе вы можете определить области применения каждой переменной.

Пример: Глобальные переменные являются переменными общего назначения и могут быть пригодны для создания прототипов. Вы можете использовать эти переменные для передачи данных другим запросам. Тестировщики программного обеспечения могут использовать переменные коллекции для определения значений внутри группы или хранения элементов, которые остаются неизменными во время выполнения коллекции. При выполнении вызовов запросов в Postman локальные переменные могут передавать данные внутри запросов. Вы можете использовать локальные переменные для переопределения глобальных переменных и переменных коллекции.

4. Объясните, как добавить заголовок к каждому запросу Postman с помощью скрипта pre-request.
Использование скрипта для автоматического добавления заголовков может ускорить тестирование программного обеспечения. Менеджер по найму может задать этот вопрос, чтобы проверить ваш опыт в автоматизации тестов. Вы можете ответить, объяснив свои действия при использовании скрипта для создания заголовков.

Пример: Добавление заголовка с помощью скрипта может гарантировать, что все запросы используют один и тот же заголовок. Вы можете сделать это, открыв консоль почтальона, нажав Вид на заголовке и выбрав Показать консоль почтальона .

Вы также можете выбрать коллекцию, щелкнув по ее названию и добавив заголовок . Чтобы включить заголовок в коллекцию, щелкните коллекцию правой кнопкой мыши, выберите Редактировать и перейдите к скриптам предварительных запросов. Затем вы можете добавить сценарий в зависимости от вашей цели.

5. Что такое коллекция в Postman?
При подаче нескольких запросов вы можете объединить похожие запросы в общую группу. Коллекции могут позволить вам достичь этого. Интервьюер может задать этот вопрос, чтобы определить, как вы организуете множество тестовых примеров. Вы можете ответить, определив коллекцию и объяснив, почему она важна.

Пример: Коллекция Postman - это функция для группировки похожих запросов. Он помогает разработчикам организовывать запросы на тестирование в отдельные папки. Этот порядок может быть полезен, когда несколько тестировщиков работают над одним и тем же приложением, поскольку они могут определить, какие функции приложения требуют более комплексного тестирования.

6. Что такое digest auth?
Postman поддерживает различные методы авторизации запросов приложений. Ведущий специалист по найму может использовать этот вопрос для анализа вашего опыта применения нескольких типов аутентификации для тестовых запросов. Вы можете сосредоточиться на определении digest auth и показать, как разработчики используют его.

Пример: Дайджест-авторизация - это метод, который сервер может использовать для получения учетных данных от веб-клиента. Его отличительной особенностью является то, что он использует одноразовый номер (once), который объединяет имя пользователя, пароль и URI сервера. Клиент Postman создает хэш MD5, используя эти поля, и отправляет запрос на сервер приложений. Чтобы использовать digest auth в Postman, вы можете открыть вкладку 'Authorization tab' и выбрать 'Digest Auth' из выпадающего списка.

7. Что такое облако Postman?
Компании могут использовать облачную среду для хранения своих коллекций Postman. Интервьюер может использовать этот вопрос, чтобы проверить ваше знакомство с инструментами совместной работы в Postman. Вы можете ответить, определив, что такое облако Postman и как его можно использовать.

Пример: Облако Postman - это хранилище, которое компании могут использовать для хранения и обмена коллекциями. Тестировщики могут сохранять свои запросы в облаке после входа в учетную запись Postman своей организации. Любой член команды может получить доступ к облачным коллекциям из любого места. Использование облака может быть удобным, когда несколько групп тестировщиков обмениваются запросами приложений.

8. Рекомендуется ли сохранять информацию в облаке Postman??
Хранение информации в облачных средах может быть сопряжено с рисками безопасности. Менеджер по найму может использовать этот вопрос для оценки мер, которые вы принимаете при выполнении задач, которые могут представлять риск. Вы можете ответить, объяснив, можно ли хранить данные в облаке Postman, и какие факторы влияют на ваш ответ.

Пример: Корпоративные приложения в компании могут предполагать высокий уровень безопасности и конфиденциальности. При работе с конфиденциальными приложениями может быть нежелательно сохранять информацию в облаке Postman. Причина в том, что в облаке могут произойти нарушения безопасности, что приведет к раскрытию конфиденциальной информации компании.

9. Что такое двоичная форма в POST-запросах?
POST-запросы позволяют клиентскому приложению отправлять данные на сервер. Например, при входе в систему браузер ПОСТЫ ваше имя пользователя и пароль для входа на сервер. Интервьюер может попросить изучить ваш опыт тестирования запросов приложений, которые отправляют данные на удаленные серверы. Вы можете сосредоточиться на объяснении бинарной формы в заявках и того, чего она достигает.

Пример: Двоичная форма позволяет клиентским приложениям отправлять двоичные данные. Данные могут включать файлы изображений, видео, аудио и документов. Приложение конвертирует файл в двоичный формат и добавляет его в тело HTTP-запроса. Когда получатель получает запрос, он может извлечь файл из тела запроса и обработать его. Включение файлов в запросы может потреблять больше пропускной способности и иметь большее время отклика, чем обычные запросы.

Дополнительные вопросы для собеседования по Postman
Вот некоторые дополнительные вопросы на собеседовании в Postman, с которыми вы можете столкнуться во время собеседования:

Как вы извлекаете cURL-эквивалент запроса Postman?

Чем полезны рабочие пространства в Postman?

Можно ли повторно использовать токен авторизации для нескольких запросов?

Есть ли ограничения в использовании Postman?

Как много у вас опыта работы с локальными переменными в Postman?

Почему Postman принимает только кодировку Base64?

Глобальная или локальная переменная предпочтительнее в Postman?

Объясните, что такое коллекция почтальонов.

Что такое мониторы Postman?

Расскажите, как бы вы удалили локальные переменные.

Как сохранить ответы Postman в файл?

Объясните, как выполнить итерацию нескольких запросов в Postman.

Перечислите некоторые из библиотек JavaScript, доступных в Postman.

Объясните разницу между данными и x-www-form-url encoded.

Расскажите о назначении кода состояния 304.

Как вы можете получить доступ к переменной Postman?

Дайте определение GUID.

Объясните, как регистрировать запросы и ответы в Postman.

Как написать тестовые примеры в Postman для базовой аутентификации?

Как вы поддерживаете свои знания о Postman в актуальном состоянии??

Как бы ваш предыдущий руководитель или менеджер описал вашу трудовую этику?

Как долго вы используете Postman?

Объясните свой уровень опыта работы с Postman.

Что вы знаете о компании Postman?

Что вам больше всего нравится в Postman?

Каковы были ваши обязанности на предыдущих должностях, где использовался Postman?

Где вы получили образование или подготовку?

Расскажите о вашем опыте использования JavaScript и библиотек JavaScript в Postman.

Советы по проведению собеседования с Postman
Примите во внимание эти советы, которые помогут вам во время следующего собеседования в Postman:

Изучите вакансию. Прежде чем отправиться на собеседование, прочитайте объявление о вакансии, чтобы лучше понять, что работодатель ищет в кандидате. Понимание необходимого уровня опыта работы с Postman может помочь вам подчеркнуть свою квалификацию во время собеседования.

Проведите имитационное собеседование. Проведите шуточное собеседование с членом семьи или другом, чтобы помочь вам подготовить утонченные ответы и соответствующий язык тела. Вы также можете попросить их дать вам обратную связь о результатах вашего собеседования, чтобы вы знали, что нужно улучшить.

Изучите компанию. Посетите веб-сайт компании, чтобы узнать о ней больше, понять ее программное заявление и оценить ее цели. Узнав эту информацию, вы сможете сослаться на нее во время собеседования, чтобы произвести впечатление на менеджеров по найму.

Что такое Postman и как он используется при разработке API?
Объясните разницу между методами HTTP GET, POST, PUT и DELETE.
Как создать новый запрос в Postman?
Что такое переменные окружения в Postman и как их использовать?
Опишите, как использовать Postman для тестирования API эндпойта (endpoint).
Как можно сгруппировать свои запросы в Postman?
Что такое коллекция Postman и как ее создать?
Объясните, как использовать Postman для отправки JSON payload (полезных данных) в запросе POST.
Как осуществляется аутентификация в Postman?
Какова цель Pre-request скрипта в Postman?
Напишите тестовый скрипт в Postman, чтобы проверить, равен ли код статуса ответа 200.
Как можно использовать Postman для проверки конкретных данных ответов?
Объясните, как использовать Postman для объединения запросов с использованием переменных.
Что такое мониторинг коллекций (Postman monitors) и как его настроить?
Как можно экспортировать и импортировать коллекции в Postman?
Напишите тестовый сценарий в Postman для проверки времени отклика API.
Как использовать Postman для тестирования API с различными форматами контента (например, XML, JSON)?
Объясните, как использовать консоль Postman для отладки запросов.
Напишите тестовый скрипт в Postman, чтобы проверить наличие определенного заголовка в ответе.
Как можно использовать Postman для моделирования различных ролей пользователей при тестировании API?
Опишите, как использовать Newman с коллекциями Postman для автоматизированного тестирования.
Напишите тестовый скрипт в Postman, чтобы проверить, что тело ответа содержит определенный ключ.
Как настроить mock-сервер (фиктивный сервер) в Postman?
Объясните, как использовать Postman для тестирования ограничения частоты запросов (rate limiting) на API.
Напишите тестовый скрипт Postman, чтобы проверить, соответствует ли ответ ожидаемому формату (например, проверка схемы JSON).
1. Что такое Postman и как он используется при разработке API?
Как ответить:

Дайте определение Postman как популярного инструмента разработки API.
Объясните, зачем он используется.
Упомяните его основные функции, такие как создание запросов, автоматизированное тестирование и совместная работа.
Пример ответа:

«Postman — это широко используемый инструмент разработки API, который упрощает процесс создания, тестирования и управления API. Он предлагает такие функции, как создание запросов, автоматизированное тестирование и совместная работа в команде, что делает его незаменимым инструментом для разработчиков и инженеров по контролю качества».

2. Объясните разницу между методами HTTP GET, POST, PUT и DELETE.
Как ответить:

Перечислите основные HTTP методы и варианты их использования.
Подчеркните идемпотентность методов GET и PUT.
Пример ответа:

«GET используется для извлечения данных с сервера, а POST — для отправки данных на сервер с целью создания ресурса. PUT обновляет существующий ресурс, а DELETE удаляет его с сервера.

Методы GET и PUT — идемпотентные. Идемпотентность — это свойство HTTP-метода, при котором повторное выполнение одного и того же запроса не приводит к изменению состояния ресурса или к побочным эффектам, отличным от первоначального.

GET — повторный вызов одного и того же GET-запроса всегда возвращает одинаковый результат и не изменяет состояние сервера. PUT — повторное выполнение одного и того же PUT-запроса с одинаковыми данными приведет к тому же состоянию ресурса, что и первый раз, без дополнительных изменений».

3. Как создать новый запрос в Postman?
Как ответить:

Расскажите, как через Postman создать новый запрос.
Пример ответа:

«Чтобы создать новый запрос в Postman, необходимо нажать кнопку «New» и выбрать «HTTP». Задать нужный метод HTTP, ввести URL-адрес запроса и нажать «Send», чтобы выполнить запрос».

4. Что такое переменные окружения в Postman и как их использовать?
Как ответить:

Дайте определение переменным окружения.
Объясните, что они помогают управлять различными средами.
Расскажите, как создавать и использовать их в Postman.
Пример ответа:

«Переменные окружения в Postman — это именованные пары ключ-значение, используемые для хранения динамических данных, которые могут быть вставлены в запросы и скрипты. Они позволяют централизованно управлять параметрами, такими как базовые URL, токены авторизации или другие конфигурационные значения, и автоматически подставлять их в запросы через синтаксис {{имя_переменной}}.

Создание и настройка переменных осуществляется в разделе «Manage Environments», где можно определить набор переменных для каждой среды (например, разработка, тестирование, продакшн)».

5. Опишите, как использовать Postman для тестирования API эндпойта (endpoint).
Как ответить:

Расскажите, как через Postman тестировать API эндпойнт.
Пример ответа:

«Чтобы протестировать эндпойнт API в Postman, необходимо открыть приложение и создать новый запрос, выбрав метод HTTP и введя эндпойнт URL-адреса. Настроить все необходимые заголовки, параметры или данные аутентификации, затем нажать «Send», чтобы выполнить запрос и оценить ответ».

6. Как можно сгруппировать свои запросы в Postman?
Как ответить:

Объясните, что можно использовать коллекции для группировки связанных запросов.
Упомяните возможность использования папок внутри коллекций для лучшей организации.
Подчеркните важность использования понятных наименовании и описаний.
Пример ответа:

«Чтобы организовать свои запросы в Postman, можно использовать коллекции для группировки связанных запросов и папки внутри этих коллекций для лучшей структуры. Кроме того, выбирая понятные наименования и четкие описания для каждого запроса, можно обеспечить ясность и простоту использования».

7. Что такое коллекция Postman и как ее создать?
Как ответить:

Дайте определение коллекции в Postman.
Объясните, что коллекции помогают эффективно организовывать и управлять запросами.
Расскажите, как создать коллекцию.
Пример ответа:

«Коллекция Postman — это группа сохраненных запросов API, которые можно организовать в папки для лучшего управления.

Чтобы создать ее, нужно нажать кнопку «New» и выбрать «Collection». Так можно начать группировать свои запросы».

8. Объясните, как использовать Postman для отправки JSON payload (полезных данных) в запросе POST.
Как ответить:

Дайте определение JSON payload.
Расскажите как его сформировать в Postman.
Пример ответа:

«JSON payload — это тело (данные), отправляемое в HTTP-запросе или получаемое в ответе, закодированное в формате JSON. Он содержит структурированные данные, такие как объекты, массивы, ключи и значения, которые передаются между клиентом и сервером для выполнения операций, например, создания или обновления ресурсов.

Чтобы отправить JSON данные в запросе POST с помощью Postman, нужно открыть приложение и создать новый запрос, выбрав метод POST и введя URL-адрес запроса. Затем перейти на вкладку «Body», выбрать «raw», выбрать «JSON» в раскрывающемся меню, ввести данные JSON в текстовом поле и нажать «Send», чтобы выполнить запрос».

9. Как осуществляется аутентификация в Postman?
Как ответить:

Дайте определение различным типам методов аутентификации, поддерживаемым Postman (Basic Auth, OAuth и API Key).
Укажите, как настроить выбранный метод аутентификации, на вкладке «Authorization» запроса.
Подчеркните важность безопасного хранения и управления учетными данными аутентификации с использованием переменных окружения.
Пример ответа:

«Для аутентификации в Postman можно использовать различные методы:

Basic Auth: Передает логин и пароль в виде закодированной строки в заголовке Authorization.
OAuth: Стандартизированный протокол для авторизации через сторонние сервисы (например, OAuth 2.0), использующий токены доступа.
API Key: Передает ключ API через заголовки, параметры URL или в теле запроса для идентификации клиента.
Для настройки методов аутентификации нужно:

Перейти на вкладку Authorization в запросе.
Выбрать нужный тип аутентификации из списка.
Ввести необходимые данные (логин, пароль, токен, ключ API).
Для удобства лучше использовать переменные окружения для хранения учетных данных.
Важно не забывать о безопасности хранения учетных данных:

Нужно использовать переменные окружения для хранения чувствительных данных (например, {{apiKey}}, {{accessToken}}).
Не вставлять учетные данные напрямую в запросы или коллекции.
Ограничить доступ к переменным и следить за их безопасностью, особенно при совместной работе».
10. Какова цель Pre-request скрипта в Postman?
Как ответить:

Дайте определение Pre-request скрипта в Postman.
Объясните, зачем он нужен.
Пример ответа:

«Pre-request скрипт в Postman — это JavaScript-код, который выполняется перед отправкой HTTP-запроса. Он используется для автоматической подготовки данных, установки переменных, вычислений или выполнения других действий, необходимых перед выполнением основного запроса.

Он нужен:

Для динамического генерации значений (например, токенов, временных меток).
Для установки или обновления переменных окружения или коллекции.
Для выполнения предварительных вычислений или условий, влияющих на запрос.
Для автоматизации повторяющихся задач и повышения гибкости тестирования API».
11. Напишите тестовый скрипт в Postman, чтобы проверить, равен ли код статуса ответа 200.
Как ответить:

Напишите скрип в Postman, используя pm.response.code функцию для получения кода статуса.
Подтвердите, что код состояния равен 200, используя pm.expect.
Пример ответа:

«Чтобы написать тестовый сценарий в Postman для проверки того, равен ли код статуса ответа 200, нужно открыть вкладку «Tests» в своем запросе и вставить скрипт:

pm.test("Статус-код равен 200", function () {

pm.expect(pm.response.code).to.equal(200); });

После этого отправить запрос. В разделе Test Results можно будет увидеть результат проверки — успешна или нет».

12. Как можно использовать Postman для проверки конкретных данных ответов?
Как ответить:

Напишите скрип в Postman, используя pm.response.json() функцию для анализа данных ответа и pm.expect для проверки определенных значений или ключей в ответе.
Пример ответа:

«Чтобы проверить наличие определенных данных ответа в Postman, нужно открыть вкладку «Tests» в своем запросе и вставить скрипт для получения JSON-ответа:

const responseData = pm.response.json();

Для проверки, что ключ ‘status’ равен ‘success’

pm.test("Проверка значения ключа 'status'", function () {

    pm.expect(responseData.status).to.eql('success');

});

Для проверки, что в ответе есть ключ ‘data’ и он не пустой

pm.test("Проверка наличия и непустоты ключа 'data'", function () {

    pm.expect(responseData).to.have.property('data');

    pm.expect(responseData.data).to.not.be.empty;

}); ».

13. Объясните, как использовать Postman для объединения запросов с использованием переменных.
Как ответить:

Дайте определение цепочки запросов в Postman.
Объясните, как устанавливать и получать переменные с помощью функций pm.environment.set и pm.environment.get.
Пример ответа:

«Цепочка запросов — это последовательность запросов, в которых данные, полученные в одном запросе (например, токен или ID), передаются в следующий с помощью переменных. Это позволяет автоматизировать и динамически управлять тестированием API.

Для установки переменной нужно использовать функцию:

pm.environment.set("имя_переменной", значение);

Для получения значения переменной нужно использовать:

const value = pm.environment.get("имя_переменной");

Вкладка «Pre-request Script» в Postman используется для установки или обновления переменных перед выполнением запроса.

Вкладка «Tests» — для извлечения данных из ответа и сохранения их в переменные для использования в следующих запросах.

Это обеспечивает автоматическую передачу данных между запросами и гибкое управление тестированием API».

14. Что такое мониторинг коллекций (Postman monitors) и как его настроить?
Как ответить:

Дайте определение мониторинга коллекций Postman как инструмента для планирования и автоматизации тестов API.
Объясните, что он помогает обеспечить производительность и надежность API с течением времени.
Упомяните, что вы можете настроить его, выбрав коллекцию, настроив расписание и указав окружение.
Пример ответа:

«Мониторинг коллекций Postman — это инструмент для планирования и автоматического выполнения тестов API по расписанию. Он позволяет регулярно запускать коллекции, проверяя их работоспособность и соответствие ожидаемым результатам.

Как он помогает:

Обеспечивает постоянный контроль за производительностью и надежностью API.
Позволяет выявлять проблемы и сбои на ранних этапах, поддерживая качество сервиса с течением времени.
Настройка:

Нужно выбрать нужную коллекцию для мониторинга.
Настроить расписание запусков (например, ежедневно или каждые несколько часов).
Указать окружение (environment), чтобы тесты выполнялись с нужными переменными и настройками».
15. Как можно экспортировать и импортировать коллекции в Postman?
Как ответить:

Объясните, как экспортировать и импортировать коллекции в Postman.
Подчеркните важность использования экспортированного файла для обмена коллекциями с членами команды или в целях резервного копирования.
Пример ответа:

«Чтобы экспортировать коллекцию в Postman, нужно выбрать коллекцию, нажать кнопку «Export» и сохранить файл. 

Чтобы импортировать коллекцию, необходимо нажать кнопку «Import» и выбрать сохраненный файл.

Использование экспортированного файла коллекции в Postman является важным инструментом для обмена коллекциями с членами команды и для резервного копирования. Можно также сохранять разные версии коллекций и отслеживать изменения, что повышает управляемость проектом».

16. Напишите тестовый сценарий Postman для проверки времени отклика API.
Как ответить:

Напишите скрип в Postman, используя pm.response.responseTime функцию для получения времени отклика.
Напишите утверждение, которое будет использоваться pm.expect для проверки времени отклика относительно контрольного показателя.
Пример ответа:

«Чтобы проверить время отклика API в Postman в миллисекундах, нужно открыть вкладку «Tests» в своем запросе и вставить скрипт:

const responseTime = pm.response.responseTime;

Проверка, что время отклика менее 200 миллисекунд

pm.test("Время отклика соответствует эталонному показателю", function () {

    pm.expect(pm.response.responseTime).to.be.below(200);

}); ».

17. Как использовать Postman для тестирования API с различными форматами контента (например, XML, JSON)?
Как ответить:

Объясните, что Postman поддерживает различные форматы контента, такие как XML и JSON.
Укажите, как задать заголовок «Content-Type» в желаемом формате.
Опишите, как использовать вкладку «Body» для ввода данных в указанном формате.
Пример ответа:

«Postman поддерживает работу с различными форматами контента, такими как JSON, XML, текст и другие. Это позволяет удобно отправлять данные в нужном формате для тестирования API.

Чтобы задать заголовок «Content-Type» нужно:

В разделе Headers добавить или выбрать заголовок Content-Type.
Установить его значение в нужный формат, например: application/json для JSON или application/xml для XML
или использовать вкладку Body, чтобы автоматически установить правильный заголовок при выборе формата.

Как использовать вкладку «Body»:

Перейти во вкладку Body.
Выбрать опцию raw (сырые данные).
В выпадающем списке справа выбрать нужный формат: JSON, XML, Text, и т.д.
Ввести данные в выбранном формате».
18. Объясните, как использовать консоль Postman для отладки запросов.
Как ответить:

Объясните как открыть консоль Postman и для чего ее нужно использовать.
Пример ответа:

«Чтобы открыть консоль Postman, нужно щелкнуть значок консоли в нижней части приложения (обычно это иконка в виде терминала или командной строки).

Консоль предназначена для просмотра подробных журналов всех отправленных запросов и полученных ответов. В ней отображаются:

Заголовки запросов и ответов
Тела запросов и ответов
Скрипты, выполняемые до и после запроса
Вся техническая информация, необходимая для диагностики
Консоль помогает выявлять причины проблем с API, устранять ошибки и оптимизировать работу запросов».

19. Напишите тестовый скрипт в Postman, чтобы проверить наличие определенного заголовка в ответе.
Как ответить:

Напишите скрип в Postman, используя pm.response.headers.has функцию для проверки конкретного заголовка.
Напишите утверждение, использующее pm.expect для проверки наличия заголовка.
Пример ответа:

«Чтобы написать тестовый сценарий в Postman для проверки наличия определенного заголовка в ответе, нужно открыть вкладку «Tests» в своем запросе и вставить скрипт:

pm.test("Ответ содержит заголовок Content-Type", function () {

    pm.expect(pm.response.headers.has('Content-Type')).to.be.true;

}); ».

20. Как можно использовать Postman для моделирования различных ролей пользователей при тестировании API?
Как ответить:

Расскажите, что можно использовать переменные окружения для хранения различных учетных данных пользователей.
Упомяните, как переключаться между окружениями для имитации разных ролей.
Подчеркните важность использования вкладки «Авторизация» для настройки доступа на основе ролей.
Пример ответа:

«Переменные окружения в Postman позволяют хранить различные учетные данные пользователей, такие как токены, логины, пароли или другие параметры, необходимые для тестирования API. 

Можно создавать отдельные окружения для разных ролей или сценариев (например, администратор, пользователь, гость) и сохранять в них соответствующие переменные. При выполнении тестов достаточно выбрать нужное окружение — и все переменные автоматически подставятся в запросы.

Вкладка «Авторизация» играет ключевую роль в настройке доступа. Здесь можно задать тип авторизации (например, Bearer Token, Basic Auth или OAuth 2.0) и использовать переменные окружения для автоматической подстановки учетных данных. Это обеспечивает централизованное управление доступом и упрощает тестирование сценариев с разными уровнями прав».

21. Опишите, как использовать Newman с коллекциями Postman для автоматизированного тестирования.
Как ответить:

Объясните, что такое Newman.
Расскажите, как установить Newman с помощью npm и запустить коллекцию с помощью простой команды.
Подчеркните возможность интеграции Newman с конвейерами CI/CD для автоматизированного тестирования.
Пример ответа:

«Newman — это командная строка для выполнения коллекций Postman. Он позволяет запускать API-тесты, созданные в Postman, прямо из терминала или скриптов, что делает его мощным инструментом для автоматизации тестирования и интеграции в процессы CI/CD. Например, можно автоматически запускать проверки API при каждом коммите или релизе.

Для установки Newman глобально нужно в терминале выполнить команду:

npm install -g newman .

Чтобы запустить коллекцию нужно указать путь к файлу коллекции (например, collection.json) с помощью:

newman run collection.json».

22. Напишите тестовый сценарий Postman, чтобы проверить, что тело ответа содержит определенный ключ.
Как ответить:

Напишите скрип в Postman, используя pm.response.json() функцию для анализа тела ответа.
Напишите утверждение, использующее pm.expect для проверки наличия определенного ключа.
Пример ответа:

«Чтобы проверить, что тело ответа содержит определенный ключ в Postman, нужно открыть вкладку «Tests» в своем запросе и вставить скрипт:

Анализируем тело ответа как JSON

const responseBody = pm.response.json();

Проверяем, что в ответе есть ключ ‘yourKey’

pm.test("Ответ содержит ключ 'yourKey'", function () {

    pm.expect(responseBody).to.have.property('yourKey');

}); ».

23. Как настроить mock-сервер (фиктивный сервер) в Postman?
Как ответить:

Объясните, зачем использовать фиктивный сервер и как его настроить в Postman.
Подчеркните важность настройки mock-сервера.
Пример ответа:

«Mock-сервер в Postman позволяет имитировать ответы API без необходимости обращения к реальному серверу. Это особенно полезно для разработки и тестирования, когда реальный API еще недоступен или его использование нежелательно по причинам безопасности или стоимости.

Чтобы создать mock-сервер, в Postman нужно выбрать «New» → «Mock Server». После этого можно настроить его, добавляя коллекции запросов и определяя для них примерные ответы (ответы-заглушки). Эти примеры можно использовать для тестирования различных сценариев, например, успешных ответов, ошибок или особых условий. Это ускоряет разработку, повышает надежность тестирования и помогает выявлять проблемы на ранних этапах».

24. Объясните, как использовать Postman для тестирования ограничения частоты запросов (rate limiting) на API.
Как ответить:

Дайте определение для ограничения частоты запросов (rate limiting).
Объясните, как использовать Postman для быстрой последовательной отправки нескольких запросов с целью проверки ограничения скорости.
Упомяните о важности проверки заголовков ответов на предмет статуса ограничения скорости и информации о повторных попытках.
Пример ответа:

«Ограничение частоты запросов — это механизм, используемый API для ограничения количества запросов, которые клиент может отправить за определённый промежуток времени. Это помогает предотвратить перегрузку сервера, обеспечить равномерное распределение ресурсов и защитить систему от злоупотреблений.

Чтобы проверить, как API реагирует при превышении лимита, можно использовать Postman для последовательной отправки нескольких запросов подряд. Например, создать коллекцию или использовать Runner, чтобы быстро отправлять серию запросов. Если лимит достигнут, сервер обычно возвращает статус-код 429 (Too Many Requests).
Важно также анализировать заголовки ответа, такие как X-RateLimit-Limit, X-RateLimit-Remaining и Retry-After. Они предоставляют информацию о текущем лимите, оставшихся запросах и времени до сброса лимита. Это помогает понять, когда можно снова отправлять запросы и избегать ошибок из-за превышения лимита».

25. Напишите тестовый скрипт Postman, чтобы проверить, соответствует ли ответ ожидаемому формату (например, проверка схемы JSON).
Как ответить:

Напишите скрип в Postman, используя pm.response.json() функцию для анализа тела ответа.
Напишите утверждение, использующееся tv4.validate для проверки ответа на соответствие ожидаемой JSON схеме.
Пример ответа:

«Чтобы проверить, соответствует ли ответ ожидаемому формату с помощью проверки схемы JSON, нужно открыть вкладку «Tests» в своем запросе и вставить скрипт:

Анализируем тело ответа как JSON

const responseBody = pm.response.json();

Определяем ожидаемую JSON-схему

const schema = {

  "type": "object",

  "properties": {

    "id": { "type": "integer" },

    "name": { "type": "string" },

    // добавьте другие свойства по необходимости

  },

  "required": ["id", "name"]

};

Проверяем соответствие тела схемы

pm.test("Ответ соответствует ожидаемой схеме", function () {

  pm.expect(tv4.validate(responseBody, schema)).to.be.true;

}); ».

---

Postman предоставляет API-интерфейсы JavaScript, которые вы можете использовать в своих сценариях запросов. Объект pm предоставляет большую часть функциональных возможностей для тестирования данных запроса и ответа, а объект postman обеспечивает некоторый дополнительный контроль рабочего процесса.

Вы можете использовать вкладку Tests в своих запросах и коллекциях для написания тестов, которые будут выполняться, когда Postman получит ответ от API, которому вы отправили запрос. Вы можете добавить столько тестов, сколько вам нужно для каждого запроса. Когда вы добавляете тесты в Collections, они будут выполняться после каждого запроса внутри нее.

Postman отображает фрагменты кода справа от области сценария. Вы можете добавить их, чтобы опробовать распространенные сценарии, и настроить их в соответствии с вашими потребностями и деталями запроса / ответа.

 
Начало работы с тестами
Чтобы попробовать написать тестовый сценарий в первый раз, откройте запрос в приложении Postman и откройте вкладку Tests. Введите следующий код JavaScript:

pm.test("Status code is 200", function () {
  pm.response.to.have.status(200);
});
Этот код использует библиотеку pm для запуска testметода. Текстовая строка появится в выводе теста. Функция внутри теста представляет собой утверждение. Тесты почтальона могут использовать синтаксис BDD библиотеки утверждений Chai, который предоставляет возможности для оптимизации того, насколько удобочитаемы ваши тесты для вас и ваших сотрудников. В этом случае код использует цепочки BDD to.haveдля выражения утверждения.

Этот тест проверяет код ответа, возвращаемый API. Если код ответа есть 200, тест пройдет, в противном случае он завершится неудачей. Нажмите Отправить и проверьте вывод результатов теста в области ответов.

Попробуйте изменить код состояния в коде утверждения и запустить его снова, чтобы увидеть, как результаты теста выглядят по-разному, когда они проходят или не проходят.


Вы можете структурировать свои тестовые утверждения различными способами в соответствии с вашей логикой и предпочтениями с точки зрения того, как вы хотите выводить результаты. Следующий код является альтернативным способом выполнения того же теста, что и приведенный выше, с использованием expectсинтаксиса:

pm.test("Status code is 200", () => {
  pm.expect(pm.response.code).to.eql(200);
});
 

Использование нескольких утверждений
Ваши тесты могут включать несколько утверждений как часть одного теста, вы можете использовать это для группировки связанных утверждений.

pm.test("The response has all properties", () => {
    // разобрать json ответ и проверить три свойства
    const responseJson = pm.response.json();
    pm.expect(responseJson.type).to.eql('vip');
    pm.expect(responseJson.name).to.be.a('string');
    pm.expect(responseJson.id).to.have.lengthOf(1);
});
Если какое-либо из содержащихся утверждений завершится неудачно, тест в целом завершится неудачно. Все утверждения должны быть успешными, чтобы тест прошел успешно.

Примечание переводчика: как прервать проверку если условие не выполнено нужно уточнить.

 
Анализ данных тела ответа
Чтобы выполнить утверждения в ваших ответах, вам сначала нужно будет проанализировать данные в объекте JavaScript, который могут использовать ваши утверждения.

Для разбора данных JSON используйте следующий синтаксис:

const responseJson = pm.response.json();
Для разбора XML используйте следующее:

const responseJson = xml2Json(pm.response.text());
Примечание: Если вы имеете дело со сложными XML-ответами, вам может пригодиться запись в журнал консоли.

Для анализа CSV используйте утилиту анализа CSV:

const parse = require('csv-parse/lib/sync');
const responseJson = parse(pm.response.text());
Для анализа HTML вы можете использовать cheerio:

const $ = cheerio.load(pm.response.text());
//вывод html-кода для тестирования
console.log($.html());
 

Обработка ответов, которые не парсятся
Если вы не можете проанализировать тело ответа на JavaScript, потому что оно не отформатировано как JSON, XML, HTML, CSV или любой другой формат данных, поддающийся анализу, вы все равно можете делать утверждения в отношении данных.

Вы можете проверить, содержит ли тело ответа строку:

pm.test("Body contains string",() => {
  pm.expect(pm.response.text()).to.include("customer_id");
});
Это не покажет вам, где была обнаружена строка, потому что она выполняет проверку всего тела ответа. 

Вы также можете проверить, соответствует ли ответ строке (что обычно эффективно только при коротких ответах):

pm.test("Body is string", function () {
  pm.response.to.have.body("whole-body-text");
});
Примечание переводчика: для формата например "x-form-urlencoded" и подобного думаю возможно найти библиотеки и подключить их в тесты.


Создание утверждений в HTTP-ответе
Ваши тесты могут проверять различные аспекты ответа на запрос, включая текст, коды состояния, заголовки, файлы cookie, время ответа и многое другое.

 
Тестирование тела ответа
Вы можете проверить наличие определенных значений в теле ответа:

pm.test("Person is Jane", () => {
  const responseJson = pm.response.json();
  pm.expect(responseJson.name).to.eql("Jane");
  pm.expect(responseJson.age).to.eql(23);
});
 

Тестирование кодов состояния
Вы можете проверить код состояния ответа:

pm.test("Status code is 201", () => {
  pm.response.to.have.status(201);
});
Если вы хотите проверить, является ли код состояния одним из набора, вы можете включить их все в массив и использоватьoneOf:

pm.test("Successful POST request", () => {
  pm.expect(pm.response.code).to.be.oneOf([201,202]);
});
 

Тестирование заголовков
Вы можете проверить наличие заголовка ответа:

pm.test("Content-Type header is present", () => {
  pm.response.to.have.header("Content-Type");
});
Вы также можете проверить заголовок ответа, имеющий определенное значение:

pm.test("Content-Type header is application/json", () => {
  pm.expect(pm.response.headers.get('Content-Type')).to.eql('application/json');
});
 

Тестирование файлов cookie
Примечание переводчика: По сути это заголовок с в виде строки c данными разделенными ";".

Вы можете проверить, присутствует ли файл cookie в ответе:

pm.test("Cookie JSESSIONID is present", () => {
  pm.expect(pm.cookies.has('JSESSIONID')).to.be.true;
});
Вы также можете проверить наличие определенного значения файла cookie:

pm.test("Cookie isLoggedIn has value 1", () => {
  pm.expect(pm.cookies.get('isLoggedIn')).to.eql('1');
});
 

Тестирование времени отклика
Вы можете проверить, чтобы время отклика находилось в заданном диапазоне:

pm.test("Response time is less than 200ms", () => {
  pm.expect(pm.response.responseTime).to.be.below(200);
});
 

Общие примеры проверок (assertion)
Читайте дальше, чтобы найти некоторые примеры распространенных проверок, которые могут оказаться полезными в ваших сценариях, как они описаны ниже, или отредактировав детали в соответствии с вашими собственными потребностями.

 
Проверка значения ответа по переменной
Вы можете проверить, имеет ли свойство ответа то же значение, что и переменная (в данном случае переменная среды).

pm.test("Response property matches environment variable", function () {
  pm.expect(pm.response.json().name).to.eql(pm.environment.get("name"));
});
В разделе Использование переменных приведен обзор операций, которые можно использовать для управления переменными в ваших сценариях.

 

Проверка типа значения
Вы можете проверить тип любой части ответа.

/* ответ имеет такую структуру:
{
  "name": "Jane",
  "age": 29,
  "hobbies": [
    "skating",
    "painting"
  ],
  "email": null
}
*/
const jsonData = pm.response.json();
pm.test("Test data type of the response", () => {
  pm.expect(jsonData).to.be.an("object");
  pm.expect(jsonData.name).to.be.a("string");
  pm.expect(jsonData.age).to.be.a("number");
  pm.expect(jsonData.hobbies).to.be.an("array");
  pm.expect(jsonData.website).to.be.undefined;
  pm.expect(jsonData.email).to.be.null;
});
 

Проверка свойств массива
Вы можете проверить, является ли массив пустым или нет, и содержит ли он определенные элементы.

/*
ответ имеет такую структуру:
{
  "errors": [],
  "areas": [ "goods", "services" ],
  "settings": [
    {
      "type": "notification",
      "detail": [ "email", "sms" ]
    },
    {
      "type": "visual",
      "detail": [ "light", "large" ]
    }
  ]
}
*/

const jsonData = pm.response.json();
pm.test("Test array properties", () => {
    //массив ошибок пуст
  pm.expect(jsonData.errors).to.be.empty;
    //массив включает в себя "товары"
  pm.expect(jsonData.areas).to.include("goods");
    
  //получить объект настроек уведомлений
  const notificationSettings = jsonData.settings.find
      (m => m.type === "notification");
  pm.expect(notificationSettings)
    .to.be.an("object", "Could not find the setting");
    //массив "detail" должен включать "sms"
  pm.expect(notificationSettings.detail).to.include("sms");
    //массив "detail" должен включать все перечисленные элементы
  pm.expect(notificationSettings.detail)
    .to.have.members(["email", "sms"]);
});
 

Проверка свойств объекта
Вы можете проверить, что объект содержит ключи или свойства.

pm.expect({a: 1, b: 2}).to.have.all.keys('a', 'b');
pm.expect({a: 1, b: 2}).to.have.any.keys('a', 'b');
pm.expect({a: 1, b: 2}).to.not.have.any.keys('c', 'd');
pm.expect({a: 1}).to.have.property('a');
pm.expect({a: 1, b: 2}).to.be.an('object')
  .that.has.all.keys('a', 'b');
Целью может быть object, set, arrayили map. Если .keysвыполняется без .allили .any, выражение по умолчанию равно .all. Поскольку .keysповедение зависит от type, рекомендуется проверить typeперед использованием .keysс помощью .a.

 

Проверка, что значение находится в наборе
Вы можете проверить значение ответа по списку допустимых параметров.

pm.test("Value is in valid list", () => {
  pm.expect(pm.response.json().type)
    .to.be.oneOf(["Subscriber", "Customer", "User"]);
});
 

Проверка, что объект содержится в ответе
Вы можете проверить, является ли объект частью родительского объекта.

/*
ответ имеет следующую структуру:
{
  "id": "d8893057-3e91-4cdd-a36f-a0af460b6373",
  "created": true,
  "errors": []
}
*/

pm.test("Object is contained", () => {
  const expectedObject = {
    "created": true,
    "errors": []
  };
  pm.expect(pm.response.json()).to.deep.include(expectedObject);
});
Использование .deepзаставляет все.equal.include,.members,.keys, и .propertyутверждения , которые следуют в цепочке, использовать глубокое равенство (свободное равенство) вместо строгого (===) равенства. В то время .eqlкак также сравнивается слабо, .deep.equalприводит к тому, что сравнения с глубоким равенством также используются для любых других утверждений, которые следуют в цепочке, в то время .eqlкак это не так.

 

Проверка текущего окружения
Вы можете проверить активную (выбранную в данный момент) среду в Postman.

pm.test("Check the active environment", () => {
  pm.expect(pm.environment.name).to.eql("Production");
});
 

Устранение распространенных ошибок тестирования
Когда вы сталкиваетесь с ошибками или неожиданным поведением в своих тестовых сценариях, консоль почтальона может помочь вам определить источник. Комбинируя console.logинструкции отладки с утверждениями теста, вы можете изучить содержимое HTTP-запросов и ответов, а также элементы данных почтальона, такие как переменные.

 

Вы можете записать значение переменной или свойства ответа:

console.log(pm.collectionVariables.get("name"));
console.log(pm.response.json().name);
Вы можете записать тип переменной или свойства ответа:

console.log(typeof pm.response.json().id);
Вы можете использовать журналы консоли для обозначения выполнения кода, иногда известного как "операторы трассировки":

if (pm.response.json().id) {
  console.log("id was found!");
  // do something
} else {
  console.log("no id ...");
  //do something else
}
 

Ошибка проверки равенства
Вы можете столкнуться с AssertionError: expected <value> to deeply equal '<value>'. Например, это может возникнуть при использовании следующего кода:

pm.expect(1).to.eql("1");
Это происходит потому, что тест сравнивает число со строковым значением. Тест вернет значение true только в том случае, если и тип, и значение равны.

 

Ошибка JSON не определен
Вы можете столкнуться с этой ReferenceError: jsonData is not definedпроблемой. Обычно это происходит, когда вы пытаетесь ссылаться на объект JSON, который не был объявлен или находится за пределами области действия вашего тестового кода.

pm.test("Test 1", () => {
  const jsonData = pm.response.json();
  pm.expect(jsonData.name).to.eql("John");
});

pm.test("Test 2", () => {
  pm.expect(jsonData.age).to.eql(29); // jsonData не определен
});
Убедитесь, что любой код, устанавливающий данные вашего ответа в переменную, доступен для всего тестового кода, например, в этом случае вызовconst jsonData = pm.response.json();перед pm.testсделает его доступным для обеих тестовых функций.

 

Неопределенная ошибка проверки
Вы можете столкнуться с этой AssertionError: expected undefined to deeply equal..проблемой. Обычно это происходит, когда вы ссылаетесь на свойство, которое не существует или находится вне области действия.

pm.expect(jsonData.name).to.eql("John");
В приведенном выше примере, если вы видите AssertionError: expected undefined to deeply equal 'John', это указывает на то, что nameсвойство не определено в jsonDataобъекте.

 

Тест не провалился
Могут быть случаи, когда вы ожидаете, что тест провалится, но этого не происходит.

//тестовая функция не определена должным образом - отсутствует второй параметр
pm.test("Not failing", function () {
    pm.expect(true).to.eql(false);
});
Убедитесь, что ваш тестовый код синтаксически корректен, и повторите попытку отправки запроса.

 

Проверка структуры ответа
Вы можете выполнить проверку схемы JSON с помощью tv4

Примечание переводчика: Tiny Validator (for v4 JSON Schema), устарел, выдает общий статус проверки.

const schema = {
 "items": {
 "type": "boolean"
 }
};
const data1 = [true, false];
const data2 = [true, 123];

pm.test('Schema is valid', function() {
  pm.expect(tv4.validate(data1, schema)).to.be.true;
  pm.expect(tv4.validate(data2, schema)).to.be.true;
});
Вы также можете проверить схему JSON с помощью ajv по умолчанию.

Примечание переводчика: Ajv JSON schema validator, выдает развернутую ошибку AssertionError: expected data to satisfy schema but found following errors:...

const schema = {
  "properties": {
    "alpha": {
      "type": "boolean"
    }
  }
};
pm.test('Schema is valid', function() {
  pm.response.to.have.jsonSchema(schema);
});
Примечание переводчика: Использование Ajv для объекта

var Ajv = require('ajv'),
    ajv = new Ajv({logger: console});

pm.test("Response use a valid schema", function() {
    pm.expect(ajv.validate(cam, RECTILINEAR_SCHEMA)).to.be.true;
    });
 

Отправка асинхронного запроса
Вы можете отправить запрос из своего кода тестов и зарегистрировать ответ.

pm.sendRequest("https://postman-echo.com/get", function (err, response) {
    console.log(response.json());
});
 

Следующие шаги
Вы можете автоматизировать свои тестовые запуски с помощью программы сбора данных.

Инструменты
Что вы можете делать здесь: готовиться к интервью, практиковаться с тестами, изучать учебные материалы, сравнивать связанные темы и использовать бесплатные онлайн-инструменты для валидации, кодирования, хеширования, работы с сетью, SEO и анализа сайтов.

Вопрос 1
What is Postman?
Postman is a popular collaboration platform for API development. It simplifies the process of developing APIs by providing tools for testing, documenting, and sharing APIs.

Вопрос 2
Explain the difference between GET and POST requests.
GET requests are used to retrieve data from a server, while POST requests are used to submit data to be processed to a specified resource.

Вопрос 3
How do you add a header in a Postman request?
You can add a header in Postman by selecting the 'Headers' tab and then entering the key-value pairs for the headers you want to include.

Вопрос 4
What is a Postman collection?
A Postman collection is a group of saved requests. It allows you to organize your API requests into folders, making it easier to manage and run them in a sequence.

Вопрос 5
What are the benefits of using Postman over manual API testing?
Postman offers automation, repeatability, and collaboration benefits over manual API testing. It allows for efficient testing, documentation, and sharing of API workflows.

Вопрос 6
How can you organize and group requests in Postman?
Requests in Postman can be organized by using folders and subfolders. This helps in keeping related requests together and maintaining a structured workspace.

Вопрос 7
How do you parameterize requests in Postman?
You can parameterize requests in Postman by using variables. Variables can be defined in the request, collection, or environment levels.

Вопрос 8
Explain the purpose of Pre-request Scripts in Postman.
Pre-request Scripts in Postman allow you to execute custom JavaScript code before sending a request. It is useful for setting dynamic values or performing actions before the request is sent.

Вопрос 9
What is Newman in the context of Postman?
Newman is the command-line companion for Postman. It allows you to run and automate Postman collections using the command line.

Вопрос 10
How do you handle authentication in Postman?
Authentication in Postman can be handled by including the required credentials in the request headers or by using the built-in authentication methods provided by Postman.

Вопрос 11
What is the purpose of Postman environments?
Postman environments allow you to create sets of variables that can be used across requests. This is useful for managing different configurations, such as development and production.

Вопрос 12
How do you handle file uploads in Postman?
File uploads in Postman can be simulated using the 'form-data' request body type. You can select 'File' as a key and choose the file to upload.

Вопрос 13
What is the Postman Console, and how is it useful?
The Postman Console is a feature that displays logs and messages from requests and scripts. It is useful for debugging and understanding the flow of requests.

Вопрос 14
Explain the purpose of the 'pm.environment' object in Postman scripts.
'pm.environment' is an object in Postman scripts that allows you to access and manipulate variables at the environment level. It is useful for dynamic value assignments.

Вопрос 15
How do you handle dynamic variables in Postman?
Dynamic variables in Postman can be handled using environment variables, global variables, or by extracting data from responses and storing them for later use.

Вопрос 16
How can you pass data between requests in Postman?
Data can be passed between requests in Postman using variables. You can set variables in one request and use them in subsequent requests within the same collection.

Вопрос 17
Explain the purpose of the 'postman.setNextRequest' function.
'postman.setNextRequest' is used to specify the next request to be executed after the current one. It is helpful for creating a sequence of requests.

Вопрос 18
Explain the purpose of the 'pm.environment.clear' function.
'pm.environment.clear' is used to clear all variables in the current environment. It is helpful when you need to reset or clean up variables during script execution.

Вопрос 19
Explain the concept of Postman environments.
Postman environments allow you to create sets of variables that can be used across requests. This is useful for managing different configurations, such as development and production.

Вопрос 20
Explain how you can share a Postman collection with others.
Postman collections can be shared by exporting them as a JSON file or by using the Postman API. You can also generate a public link to share the collection with others.

Вопрос 21
What is the purpose of the Postman test script?
The test script in Postman is used to write assertions and validations. It allows you to verify the response data and ensure that the API is behaving as expected.

Вопрос 22
How do you extract data from a response in Postman?
Data can be extracted from a response in Postman using the 'Tests' tab. You can write JavaScript code to extract and store values from the response.

Вопрос 23
Explain the difference between 'pm.test' and 'pm.expect' in Postman.
'pm.test' is used to define test cases in Postman scripts, while 'pm.expect' is used to set expectations for assertions. Both are used in the 'Tests' tab.

Вопрос 24
How can you handle time delays in Postman scripts?
Time delays can be handled in Postman scripts using the 'setTimeout' function. It allows you to introduce delays between requests or script executions.

Вопрос 25
Explain the concept of Postman monitors.
Postman monitors are used for automated and scheduled API testing. They allow you to run collections at predefined intervals and monitor API performance.

Вопрос 26
What is the Postman Sandbox?
The Postman Sandbox is a JavaScript execution environment within Postman. It allows you to write and run scripts for requests, tests, and pre-request scripts.

Вопрос 27
How can you handle errors in Postman scripts?
Errors in Postman scripts can be handled using try-catch blocks. This allows you to catch and manage errors, preventing them from affecting the entire script execution.

Вопрос 28
What is the purpose of the 'pm.sendRequest' function in Postman?
'pm.sendRequest' is used to send an HTTP request from within a Postman script. It allows you to make additional requests based on the results of the current request.

Вопрос 29
How do you handle CSRF tokens in Postman?
CSRF tokens in Postman can be handled by extracting them from responses and including them in subsequent requests using variables.

Вопрос 30
How do you handle data-driven testing in Postman?
Data-driven testing in Postman can be achieved by using data files, such as CSV or JSON, to provide different sets of input data for the same request or collection of requests.

Вопрос 1
What is Postman?
Postman is a popular collaboration platform for API development. It simplifies the process of developing APIs by providing tools for testing, documenting, and sharing APIs.

Вопрос 2
Explain the difference between GET and POST requests.
GET requests are used to retrieve data from a server, while POST requests are used to submit data to be processed to a specified resource.

Вопрос 3
How do you add a header in a Postman request?
You can add a header in Postman by selecting the 'Headers' tab and then entering the key-value pairs for the headers you want to include.

Вопрос 4
What is a Postman collection?
A Postman collection is a group of saved requests. It allows you to organize your API requests into folders, making it easier to manage and run them in a sequence.

Вопрос 5
What are the benefits of using Postman over manual API testing?
Postman offers automation, repeatability, and collaboration benefits over manual API testing. It allows for efficient testing, documentation, and sharing of API workflows.

Вопрос 6
How can you organize and group requests in Postman?
Requests in Postman can be organized by using folders and subfolders. This helps in keeping related requests together and maintaining a structured workspace.

Вопрос 7
How do you parameterize requests in Postman?
You can parameterize requests in Postman by using variables. Variables can be defined in the request, collection, or environment levels.

Вопрос 8
Explain the purpose of Pre-request Scripts in Postman.
Pre-request Scripts in Postman allow you to execute custom JavaScript code before sending a request. It is useful for setting dynamic values or performing actions before the request is sent.

Вопрос 9
What is Newman in the context of Postman?
Newman is the command-line companion for Postman. It allows you to run and automate Postman collections using the command line.

Вопрос 10
How do you handle authentication in Postman?
Authentication in Postman can be handled by including the required credentials in the request headers or by using the built-in authentication methods provided by Postman.

Вопрос 11
What is the purpose of Postman environments?
Postman environments allow you to create sets of variables that can be used across requests. This is useful for managing different configurations, such as development and production.

Вопрос 12
How do you handle file uploads in Postman?
File uploads in Postman can be simulated using the 'form-data' request body type. You can select 'File' as a key and choose the file to upload.

Вопрос 13
What is the Postman Console, and how is it useful?
The Postman Console is a feature that displays logs and messages from requests and scripts. It is useful for debugging and understanding the flow of requests.

Вопрос 14
Explain the purpose of the 'pm.environment' object in Postman scripts.
'pm.environment' is an object in Postman scripts that allows you to access and manipulate variables at the environment level. It is useful for dynamic value assignments.

Вопрос 15
How do you handle dynamic variables in Postman?
Dynamic variables in Postman can be handled using environment variables, global variables, or by extracting data from responses and storing them for later use.

Вопрос 16
How can you pass data between requests in Postman?
Data can be passed between requests in Postman using variables. You can set variables in one request and use them in subsequent requests within the same collection.

Вопрос 17
Explain the purpose of the 'postman.setNextRequest' function.
'postman.setNextRequest' is used to specify the next request to be executed after the current one. It is helpful for creating a sequence of requests.

Вопрос 18
Explain the purpose of the 'pm.environment.clear' function.
'pm.environment.clear' is used to clear all variables in the current environment. It is helpful when you need to reset or clean up variables during script execution.

Вопрос 19
Explain the concept of Postman environments.
Postman environments allow you to create sets of variables that can be used across requests. This is useful for managing different configurations, such as development and production.

Вопрос 20
Explain how you can share a Postman collection with others.
Postman collections can be shared by exporting them as a JSON file or by using the Postman API. You can also generate a public link to share the collection with others.

Вопрос 21
What is the purpose of the Postman test script?
The test script in Postman is used to write assertions and validations. It allows you to verify the response data and ensure that the API is behaving as expected.

Вопрос 22
How do you extract data from a response in Postman?
Data can be extracted from a response in Postman using the 'Tests' tab. You can write JavaScript code to extract and store values from the response.

Вопрос 23
Explain the difference between 'pm.test' and 'pm.expect' in Postman.
'pm.test' is used to define test cases in Postman scripts, while 'pm.expect' is used to set expectations for assertions. Both are used in the 'Tests' tab.

Вопрос 24
How can you handle time delays in Postman scripts?
Time delays can be handled in Postman scripts using the 'setTimeout' function. It allows you to introduce delays between requests or script executions.

Вопрос 25
Explain the concept of Postman monitors.
Postman monitors are used for automated and scheduled API testing. They allow you to run collections at predefined intervals and monitor API performance.

Вопрос 26
What is the Postman Sandbox?
The Postman Sandbox is a JavaScript execution environment within Postman. It allows you to write and run scripts for requests, tests, and pre-request scripts.

Вопрос 27
How can you handle errors in Postman scripts?
Errors in Postman scripts can be handled using try-catch blocks. This allows you to catch and manage errors, preventing them from affecting the entire script execution.

Вопрос 28
What is the purpose of the 'pm.sendRequest' function in Postman?
'pm.sendRequest' is used to send an HTTP request from within a Postman script. It allows you to make additional requests based on the results of the current request.

Вопрос 29
How do you handle CSRF tokens in Postman?
CSRF tokens in Postman can be handled by extracting them from responses and including them in subsequent requests using variables.

Вопрос 30
How do you handle data-driven testing in Postman?
Data-driven testing in Postman can be achieved by using data files, such as CSV or JSON, to provide different sets of input data for the same request or collection of requests.

   
Most Asked Postman 
1. Explain the purpose and benefits of using Postman for API testing? 
Postman is a powerful tool for API testing that offers numerous benefits. Its purpose is to simplify and streamline the process of testing APIs. Some benefits of using Postman for API testing include:

Easy API Exploration: Postman provides a user-friendly interface for creating and sending requests to APIs, allowing you to explore and understand their functionalities.
Efficient Testing: With Postman, you can quickly test various scenarios by sending different types of requests (GET, POST, PUT, DELETE) and examining the responses.
Request and Response Validation: Postman allows you to validate API responses, ensuring they meet the expected criteria and identifying any errors or inconsistencies.
Environment Management: Postman lets you create and manage environments, making it convenient to switch between different setups, such as development, staging, and production.
Collaboration and Sharing: Postman facilitates teamwork by enabling the sharing of collections, requests, and test suites, fostering collaboration among developers, testers, and other stakeholders.
2. How do you create and send a request in Postman? 
To create and send a request in Postman, follow these steps:

Open Postman and create a new request by selecting the appropriate HTTP method (e.g., GET, POST) from the dropdown menu.
Enter the request URL in the address bar.
Add any required headers, query parameters, or request body data, depending on the API endpoint's requirements.
Click the "Send" button to send the request to the API server.
Postman will display the response, including the status code, headers, and body, allowing you to analyze the results of your request.

3. What are some key features of Postman that you find most useful in your testing workflow?
 Some key features of Postman that are often found useful in testing workflows include:

Collections: It allows you to organize and group related requests, making managing and executing test suites easier.
Variables and Environments: Postman allows you to define variables and environments, which help parameterize requests and manage different testing environments.
Test Scripts: Postman's test scripts, written in JavaScript, enable you to automate assertions, extract data from responses, and perform complex validations.
Pre-request Scripts: These scripts allow you to perform actions before sending a request, such as setting up dynamic data or configuring authentication.
Request History: Postman keeps a history of previously sent requests, allowing you to revisit and retest them without re-entering the details.
Collection Runner: The Collection Runner feature allows you to execute multiple requests in a collection as a test suite, enabling automation and bulk testing.
4. How do you handle authentication and authorization in Postman?
Postman provides multiple ways to handle authentication and authorization in API requests. Some commonly used methods include:

Basic Authentication: You can include the username and password in the request headers using the "Authorization" header.
Token-based Authentication: Postman allows you to include tokens (such as JWT or OAuth) in the request headers or as query parameters.
API Key: If an API requires an API key, you can pass it as a request header or query parameter.
OAuth 2.0: Postman has built-in OAuth 2.0 support, allowing you to configure and authenticate using various OAuth flows, such as Authorization Code or Client Credentials.
Custom Authentication: Postman's scripting capabilities enable you to implement custom authentication mechanisms by modifying request headers or using specialized libraries.
5. Can you describe the process of creating and running automated tests in Postman?
To create and run automated tests in Postman, follow these steps:

Create a new request in Postman or open an existing one.
Write test scripts using JavaScript to validate the API response, assert specific conditions, or extract data.
Save the request in a collection.
Go to the "Collections" tab and click on the three-dot menu next to the collection name.
Select "Edit" to open the collection, then click on the "Tests" tab.
Write and organize test scripts for the entire collection or individual requests within the collection.
Save the collection.
To run the automated tests, go back to the "Collections" tab and click on the arrow icon next to the collection name.
Choose the desired test environment, if applicable.
Click on "Run" to execute the tests in the collection.
Postman will run the requests and display the test results, highlighting any failures or errors encountered during the execution.
Postman Interview Questions for Freshers
6. What is Postman?
Postman is a collaboration platform for API development. It is a recognized API client that enables you to organize the creation, division, testing, and documentation of APIs. We can send HTTP/s requests to a repair and receive their responses using the Postman tool. It will enable us to approve the service's uptime and functionality.

7. What is a collection in Postman?
In Postman, a collection allows you to group related requests. You can also use it to organize the requests into folders systematically.

8. Why do we use Postman?
Following are some of the most important reasons for using Postman:

It is software that aids with API testing and is available for free use
It aids in managing the complete API lifecycle
It provides Runtime Service to assist with managing API collections, workspaces, environments, and many examples
Additionally, Postman may get integrated with CI/CD programs like Circle CI, Jenkins, etc
It offers a sizable community forum where you can quickly find solutions to any technical problems you run across while using the tool
9. What is an API?
Application Programming Interface is referred to as API. Technically speaking, an API is a collection of steps, functions, and other points of access that a program, an operating system, a library, etc. makes available to programmers so they can use it to communicate with other software programs.

10. Name some tools used for API Testing?
The following list includes some of the tools used for API testing:

Postman 
Tricentis Tosca 
Katalon Studio 
Apigee 
Jmeter
SoapUI
11. What API information is exposed in Web Developer tools?
API information for request headers, response body, and response cookies is exposed in web developer tools.

12. What can we use to get API information from web developer tools into Postman?
Copy as cURL allows Postman to receive API data from web developer tools.

13. Where are query parameters stored in a GET request?
The query parameters for the GET request are saved in Postman's URL.

14. What is meant by the term environment in Postman?
An environment in Postman is a group of key-value pairs. Postman allows you to create various environments that you can switch instantly with a button. There are two different sorts of environments: global and local. They define the variable's scope so you can use it in requests.

15. What are the core components of an HTTP request?
An HTTP request is made up of five major components:

HTTP methods: A collection of request techniques used to carry out particular actions on resources (GET, PUT, POST, DELETE)
URI (Uniform Resource Identifier): locates a resource.
Version of HTTP (example- HTTP v1.1)
Content-Type: application/JSON, Content-Length: 511) Request Headers
Payload: The message content is contained in the request body.
Prepare Yourself to Answer All Questions!AI-Powered Automation Test Engineer ProgramExplore ProgramPrepare Yourself to Answer All Questions!
16. State the Core Components of an HTTP Response?
Four essential components are present in each HTTP response:

According to the HTTP request's resource, the server's status is indicated by the Status/Response Code. Examples include 404 (resource not found) and 200 (response ok).
HTTP Version - Indicates the version of HTTP being used, such as HTTP v1.1.
The response header is where key-value pairs of metadata for the HTTP response message are stored—for instance, content length, content type, response date, and server type.
The response body indicates response message content or resource representation.
17. What is GUID?
Global Unique Identifier is referred to as GUID. It consists of hexadecimal digits separated by hyphens. This Postman identifier GUID fulfills the goal of uniqueness.

18. What is the HTTP response code for a POST request with incorrect parameters?
The correct response code for a request with incorrect parameters is 400 Bad Request.

19. Can local variables be imported in Postman Monitors?
Yes, you can import local variables into Postman Monitors. However, global variables cannot get imported into Postman Monitors.

20. How can you iterate a request 100 times in Postman?
With the help of Collection Runner, Postman allows us to iterate a request 100 times.

21. Which programming language is used for Postman tests?
Postman tests are run using JavaScript.

22. What is a Postman Collection?
We can group several needs using a Postman Collection. It merely enables us to organize the requests into folders.

23. What do you understand by the term Postman Collection runners?
Data-driven testing is carried out by using a Postman collection runner. API requests are collected for numerous iterations with various data sets.

24. What is Postman cloud’s purpose if we work in a company? Why?
A Postman cloud is a shared repository where businesses can access Postman collections. Work can be immediately saved in the Postman cloud after logging in. Data and collections are accessible to team members from any location.

25. Why is it not preferred to save work in Postman cloud?
Since company work cannot be disclosed and must be kept confidential, it is not advised or desired to save your work in the Postman cloud. Since Postman requires sign-in, saving your work there could lead to a security risk.

26. How will you log variable values in Postman?
You may use the following command in Postman to log the variable values on the console:

console.log(pm.variables.get("variable_name"));

27. How do you access postman variables?
You may access a Postman variable using the variable name {{var}}.

28. What are the various authorization methods provided by Postman?
Postman provides the following API request authorization options:

API Key 
Basic auth 
Digest auth 
Hawk Authentication 
Oauth 1.0 
Oauth 2.0 
Bearer Token
NTLM Authentication
AWS Signature 
29. What are the different types of API requests supported in Postman?
The following is a list of the various API requests that Postman supports:

GET
POST
PUT
PATCH
COPY
DELETE
HEAD
OPTIONS
LINK
UNLINK
PURGE
LOCK
UNLOCK
PROPFIND
VIEW
30. How are Query Params different from Path Variables?
Query parameters are used to sort or filter the resources, and Path Variables gets used to identify specific resources.

31. What is Basic Auth in Postman?
Basic Auth is a method of authorization offered by Postman for HTTP user agents, such as web browsers, to enter login and password. It becomes connected with the request after the username and password are entered.

32. What is digest auth in Postman?
One of Postman's authorization techniques is digest auth or digest authorization. Through this method, clients can send requests to the API first and then receive responses from the server, such as 401 illegal responses and numbers that can only be used once as absolute values. 

33. What encoding is accepted by Postman in authorization credentials?
Postman only takes authorization credentials encoded in Base64. Postman already has this feature, or you can use a third-party service to convert the credentials to base64.

34. Can we have the same names for global variables in Postman?
Global variables cannot have identical names since doing so would confuse the software because they are devoid of any environment. The terms of local variables might be the same across various environments.

35. What do you know about the postman monitor?
For running collections, the postman monitor is employed. Collections are kept running for the duration of the user-defined time. The user must get logged in to utilize Postman Monitor. Users regularly send emails to one another to share the monitor reports.

36. What is a binary form in POST methods?
Postman's binary form is made to send data in a format that you cannot manually type. You use these options, which cannot be manually typed, such as an image, a file, etc., because everything in a computer is transformed into binary.

37. What are the limitations of Postman?
The following is a list of Postman's main drawbacks:

Postman cannot process 1000+ API requests.
It might be challenging to manage collections and requests for large projects.
For managing the workspace as code, Postman is not appropriate. It is because dynamic API requests would result in a lot of code duplication.
38. How can you save the responses of API to a file in Postman?
There are two ways to save an API response to a file in Postman:

First, in the response section, click the download button.
Then, press the arrow next to the send button. An option to send and download is available here. After clicking it, Postman will prompt you for the location to save the response after the request gets successfully executed.
39. What is the significance of 301 status code?
When a page has been permanently redirected from one website page to another, Postman's 301 status code gets used to indicate this. The search engine is informed that the old page is out-of-date and has to index the URL of the new page.

40. Define status code 201.
When you successfully create a resource using a POST or PUT request, the status code 201 denotes that the resource has been created. It uses the location header to return a link to a newly built resource.

41. When do we use global variables, collection variables, and local variables?
Global variables are all-purpose variables perfect for prototyping and quick results. They get utilized when transferring data to other requests.

You can most frequently use collection variables to store constants that don't change while the Collection is being executed. They are used for constants that remain the same throughout execution and for URLs and authentication credentials when just one environment is present.

Local variables are only accessible for the duration of the request that set them or while using the Newman/Collection runner. They get used whenever you want to override all other variable scopes.

42. How do you remove local variables?
Once you run and finish the tests, the local variables are automatically eliminated.

43. What is the difference between form data and x-www-form-urlencoded?
The primary distinction between form data and x-www-form-urlencoded is that the URL is pre-arranged when sent via x-www-form-urlencoded.

Want a Top Software Development Job? Start Here!AI-Powered Full Stack Developer ProgramExplore ProgramWant a Top Software Development Job? Start Here!
44. How do you access the history of requests in Postman?
The History tab in the Postman application allows us to access the history of requests. The record will be synced amongst all your logged-in devices when we login into the Postman account. The view will load the request we saved while working on it earlier after clicking on any of the requests shown in the History tab. 

Postman Interview Questions for Experienced
45. Why is Base64 encoding primarily used in Postman?
As a result of the data being transmitted in textual form and being sent in a more accessible format, like HTML form data, the Base64 authorization credentials are typically employed. Base64 is so popular because we can rely on the same 64 characters regardless of the encoding language we use.

46. What is the purpose of the 304 status code?
The meaning of the status code 304 is "Not Modified." It is utilized in conditional GET requests to reduce network bandwidth usage. The response's body must be empty. Dates, locations, and other information should be in the headers.

47. Is it preferable to save our work on Postman Cloud?
Saving your work in the Postman cloud is not recommended because business work cannot be disclosed and must be kept private. Since Postman cloud requires sign-in, security breaches could happen if it gets used. Therefore, using Postman Cloud to save work is discouraged, and team workspace is strongly recommended.

48. What are the various variable scopes provided by Postman?
Postman provides the following variable scopes:

Global Variables
Local Variables
Environment Variables 
Collection Variables
Data Variables
49. Is it possible to reuse the authentication token for multiple requests?
You can indeed use the authentication token more than once. To do this, create a collection, add all requests with the same authentication token, and then assign the Collection with the auth token to the Collection. By choosing "Inherit auth from parent" under the Authorization tab, we may apply it to each request separately.

50. How do you write test cases for basic authentication in Postman?
One of the authentication methods offered by Postman, Basic Authentication, ensures we can specify the username and password along with the API calls. We can achieve this by first configuring the API's credentials by:

Going to the Authorization tab
From the drop-down option, choose Basic Auth
Enter the API's username and password in the corresponding fields
You can write the test cases like this:

pm.test("Is the Request Authenticated?", function () {

       var jsonData = pm.response.json();

       //if authenticated then assert to true

pm.expect(jsonData.authenticated).to.eql(true);

  });

pm.test("Is the Content-Type present?", function () {

pm.response.to.have.header("Content-Type");

  });

pm.test("Is it a successful POST Request?", function () {

pm.response.to.have.status(200);

  });

51. How do you set the same headers for all requests in a Postman Collection?
Pre-request scripts are supported at the collection level and for individual requests in Postman. Any script that applies to every request in the Collection may get included in the pre-request scripts. The steps are as follows:

To access the pre-request tab, right-click the Collection.

Add the script's lines of code below to add a request header for each request included in the Collection.

pm.request.headers.add({

    key: 'TestHeader',

    value: 'testValue'

});

To save the script, click Update.

Run the request in the Collection and check the Postman console to ensure that the headers have been added.

52. What are workspaces in Postman? What are their uses?
Postman workplaces are just areas or spaces where one or more people can collaborate on the same Collection or set of collections. It allows the collections or requests to get logically separated from one another. Postman supports two different types of workspaces: Team and Personal.

53. Does Postman provide a feature to log requests and responses?
The Postman software does allow users to view requests and response parameters. But after applying the pre-request scripts, it is essential to see how you sent the request. To inspect every request and response detail in such circumstances, Postman includes an additional tool called "Postman Console." By having console.log statements in the scripts, you can additionally log the information in the console.

54. How will you stop the execution of upcoming requests or the execution of the collections?
You can use the code below to stop processing the next request: pm.setNextRequest (null);

55. What do you understand by the pre-request script?
Pre-request scripts are those used to run Javascript code before a request is made. Pre-processing tasks, including setting variables, parameters, headers, body data, etc., are performed using it.

56. How can we use Custom Javascript libraries in our scripts with an example?
We may utilize the many built-in tools and libraries that Postman offers to include our pre- or post-request scripts or test cases. Consider the use of the moment.js library. It offers a variety of helpful methods for formatting data around time. Consider a POST request that must provide the generated date for the user, who anticipates the format "DD/MM/YYYY." You can use the moment library with just one line of code. To obtain the data with the proper formatting and then store it in an environment variable, we must add the following lines of code to our pre-request script:

var moment = require('moment');

pm.environment.set('createdDate',moment().format('DD/MM/YYYY'));

57. If we have a global and a local variable of the same name, which one will be given the most preference in Postman?
In certain circumstances, the global variable's value is overwritten to give the local variable higher precedence.

58. Does Postman allow flexibility to make use of the command-line?
Any Postman collection can get executed using the Newman command-line tool that Postman offers. This NodeJS-based package uses the Newman Collection Runner to execute collections and therefore needs a node environment. It supports running assertions, pre-request scripts, or other request scripts linked with the requests that are a part of the Collection, just like Postman's Collection Runner does.

59. How will you generate random numbers of a given range in Postman?
Assuming you want to create numbers between the ranges of 1 to N, the pre-request script can be written as follows:

pm.globals.set('randomNumber', Math.floor(Math.random() * N));

This variable can then be used in the URL as follows:{{randomNumber}}

60. What do you understand about ScratchPad?
Postman allows us to work without a connection to its servers by giving us access to Scratch Pad. It offers the freedom of using some of Postman's functionalities offline. The features include sending requests, creating requests, and adding requests to collections. 

61. How do you get the cURL command based on the details of the REST API obtained from Postman?
You can use the steps listed below to get the cURL command equivalent:

As indicated below, click the Code icon.

Postman_Interview_1

Step 1 - Click on Code 

In response to the REST API request, you will receive the cURL command:

Postman_Interview_2

Step 2 - REST API request 

By choosing the necessary choice from the drop-down, as shown in the image below, we can also obtain the command for the request in several languages, such as C#, Javascript, NodeJs, PHP, etc.

Postman_Interview_3.

Step 3 - Select Language 

1) What is Postman?
The Postman is a highly popular API testing tool that helps the development team create, share, and test an API. The Postman tool provides a GUI interface to the API and a command-line utility for experienced testers.

2) What is an HTTP request?
An HTTP request is a program that the client makes to a name host located on a server. It works as a communication interface or a request-response protocol between a client and server. The primary use of the HTTP request is to access a resource on the server. To initiate the HTTP request, the client uses components of a URL (Uniform Resource Locator) that also includes the information needed to access the resource.

3) State The Core Components of an HTTP Response?
In Postman, every HTTP response contains four key elements.

Response/Status Code- There are response code issues by a sever for client’s request, as 404 means Page Not Found.
HTTP Version- HTTP version name. For example, HTTP v2.2
Response Header- It included information for the HTTP response message. For example. The content length, date, status, server type, etc.
Response Body – It contains the data which a client requested from the server.
4) Why do we use Postman?
Here are some most prominent reasons for using Postman:

It is free to use software which is helpful for API testing
It helps you to manage the end-to-end lifecycle of API
It offers Runtime Service that helps manage API collections, workspaces, environments, and different examples.
You can also integrate Postman with CI/CD tools like Circle CI, Jenkins, etc.
It has a vast community forum that can easily address any technical issues you face while using the tool.
5) What is API?
Application Programming Interface (API) is a software interface that enables two applications to interact with each other without any user intervention. It is a collection of software functions and procedures. API is defined as a code that helps two different software communicate and exchange data with each other.

6) What are the important authorization methods supported by Postman?
Postman offers the following API request authorization options 1) API Key, 2) Oauth 1.0 and 2.0, 3) Basic auth, 4) Digest auth, 5) Bearer Token, 6) AWS Signature, 7) Hawk Authentication, 8) NTLM Authentication.

7) How do you log variable values in Postman?
Postman allows to log the variable values in Postman in the console by using the following command:

console.log(pm.variables.get("guru99"));
8) Postman is available as a native desktop app for?
Postman API testing tool is currently available for Mac, Windows (32-bit / 64-bit), and Linux (32-bit / 64-bit)

9) What is the History tab in Postman?
All the request you send in Postman appears under the History tab of the sidebar. It is very much similar to browser history, which you can clear whenever you want.

10) What is Basic Auth in Postman?
In Postman, Basic Auth is an authorization method provided for HTTP user agents like web browsers to enter username and password. After entering the username and password that you can associate with the request.

11) What is a binary form in POST methods?
Post binary firm is designed to send the information in a format that is impossible to enter manually. These options are used while sending larger files like CSV files, etc.

12) What is the main difference between Authorization and authentication?
Here are a few differences between authorization and Authentication:

Authorization is the act of allowing or permitting someone, whereas authentication is proving that something is genuine.
Authentication always comes first, while authorization comes after authentication.
Authorization is open to anyone with permission, whereas authentication requires you to have a password.
13) What is the Payload in Postman?
The Payload of an API Module is the body of your request and response message. When making an API request, it contains the data you send to the server. You can send and receive Payload in various formats, for example, JSON or XML.

14) What is a collection in Postman?
A collection in Postman enables you to group similar requests. It also allows you to systematically arrange the requests into folders.

15) What is a Pre-Request script?
Pre-request scripts help you to execute JavaScript before a request runs. It allows you to accomplish pre-processing tasks like setting variable values, parameters, headers, and body data.

16) How the Postman variables are accessed?
The Postman variables are always accessed by using the variable name:

{{variable name}}
17) What is the meaning of the term environment in Postman?
The environment in Postman is a set of key-value pairs. Postman allows you to build multiple environments and switch among them with a click of a button.

18) Why does Postman never accepts any other encoding apart from Base64?
You can use base64 as it helps us transmit the data into the textual form and send it as HTML form data. Moreover, we must rely upon the same 64 characters in any encoding language.

19) Which kind of encoding does Postman accepts for authorization credentials?
Postman only accepts Base64 encoding, which is provided inbuilt in Postman. Otherwise, it would benefit when you use 3rd party websites that help you to convert the credentials into base64.

20) What are the different scopes of an environment variable in Postman?
Scope of a variable in Postman is defined as the boundaries it can access.

Here are important scopes of an environment variable in Postman:

Local Scope: This type of variable can be accessed only in the environment in which it was created
Global Scope: This type of variable can be accessed globally in any environment or no environment.
21) Is it possible to import local variables in Postman Monitors?
Postman monitors allow you to import local variables but not global variables.

22) What is the Postman execution order for a collection?
For all the requests in a collection, the scripts will execute in the following given order:

Step 1) A pre-request script associated with a collection will run before every request.
Step 2) A pre-request script associated with a folder will run before every request in a specific folder.
Step 3) A test script associated with a collection will run after every request.
Step 4) A test script associated with a folder will run after the request in the specific folder.

23) Can you have two global scope variables with the same name in Postman?
No, the global scope never has duplicate/same names, while variables having local scope can have the same name in various environments.

24) How do you access postman variables?
You can log the variable values in the console by using the command:

console. Log (pm. Variables.
25) What is the use of the collection in Postman?
In Postman, a collection is used to group similar requests. It helps you to arrange requests systematically into folders.

26) How can you use POSTMAN to generate random numbers in a specific range?
In your Pre-request script define your variable with:

pm.globals.set('randomNum', Math.floor(Math.random() * 5));
Then in your URL call your variable in the URL like so:
Output:

{{randomNum}}
27) How do you remove local variables?
Local variables are automatically removed once the tests have been executed.

28) What is ‘Postman Collection runners?
Postman contains a collection runner that is useful for automating API testing. It helps visualize details of each iteration and test results. A postman collection runner is also used for Data-driven testing.

29) What do you mean by postman monitors?
The postman monitor feature is used for running collections until the user’s specified time. However, the user must be logged in to their account to use this feature.

30) Why saving your work in the Postman cloud is not advisable?
You should not save your work in Postman as your business details do not remain confidential. Moreover, saving your on-Postman cloud may cause a security breach as it requires sign-in. Therefore, saving your work in the Postman cloud is not advisable.

31) What are the standard rules of an API test design?
Here are the key principles of an API test design:

Setup: Create objects, start services, and initialize data.
Execution: Apply API or the scenario, including logging
Verification: It is use for evaluating the result of the execution
Reporting: Indicates Pass, failed, or blocked status
Clean up: Pre-test state
32) What is the Team workspace in Postman?
A Team workspace is a synergetic environment for users where many programmers may develop APIs, provides feedback, and collaborate on the same pools of requests. It also helps to synchronize and collaborates all the team’s work in one place.

33) What is the 301-status code?
301 status code represents a permanent redirect from one website page to another. It tells the search engines that the old page has become outdated, and the engine has to index the new page or URL.

34) What is status code 201?
Status code 201 is created only when a resource is successfully created using a PUT or POST request. It returns a link to a newly created one with the help of the location header.

35) What is the procedure to remove local variables?
The local variables can be automatically removed when you have executed and completed the tests.

36) What is Pre-Request Script in Postman?
In Postman, a pre-request script is a set of rules that runs before executing a request.

37) How are Query Parameters different from Path Variables?
In Postman, Path Variables are used to identify specific resources, and Query Parameters are used to sort or filter the resources.

38) What are the main drawbacks of Postman?
Here are some cons/ disadvantages of using Postman:

Postman cannot process more than 1000 API requests.
It is not easy to manage the collections and requests in a massive size project.
Postman is not an ideal API tool for workspace management in the form of code as there can be lots of code duplication while handing the dynamic API requests.
39) What are some of the JS libraries available in Postman?
Some JS libraries available in Postman are

1) Lodash
2) Moment
3) GUID

40) What is GUID?
GUID is short for Global Unique Identifier. It is hexadecimal digits that are separated by hyphens. This Postman identifier GUID solves the purpose of uniqueness.

41) How can you view log requests and responses in Postman?
You can use the Postman Console window to view request logs and response logs.

42) What is the importance of setNextRequest in Postman?
setNextRequest helps you to define the workflow. It is needed to change the order of the requests being executed.

43) What test code allows you to check whether the response status is 200 or not?
Following is a test code to check whether the response status is 200 or not:

tests[“Status Code is 200”] = responseCode.code === 200;
44) What do you understand by ScratchPad?
Scratch Pad is a place which is provided by Postman that helps you work without the need to connect with Postman servers.

45) How can you iterate a request 100 times in Postman?
You can iterate a request 100 times in Postman by using Collection Runner.

46) What would happen if {{$randomInt}} dynamic variable is added?
You need to add a random integer between 0 and 1000.

47) How do you access variable values from a file inside pre-request and test scripts?
data.var_name
data['var_name']
48) Can you read the Postman Chrome application to read and write cookies?
No, it is impossible to read and write cookies using the app.

49) Which programming language is used for Postman tests?
JavaScript is used for Postman tests.

50) Which tool can be used to run Postman Collections in Jenkins?
Newman can be used to run Postman Collection in Jenkins.

What is Postman?
Postman is a popular collaboration platform for API development. It simplifies the process of developing APIs by providing tools for testing, documenting, and sharing APIs.

Вопрос 2
Explain the difference between GET and POST requests.
GET requests are used to retrieve data from a server, while POST requests are used to submit data to be processed to a specified resource.

Вопрос 3
How do you add a header in a Postman request?
You can add a header in Postman by selecting the 'Headers' tab and then entering the key-value pairs for the headers you want to include.

Вопрос 4
What is a Postman collection?
A Postman collection is a group of saved requests. It allows you to organize your API requests into folders, making it easier to manage and run them in a sequence.

Вопрос 5
What are the benefits of using Postman over manual API testing?
Postman offers automation, repeatability, and collaboration benefits over manual API testing. It allows for efficient testing, documentation, and sharing of API workflows.

Вопрос 6
How can you organize and group requests in Postman?
Requests in Postman can be organized by using folders and subfolders. This helps in keeping related requests together and maintaining a structured workspace.

Вопрос 7
How do you parameterize requests in Postman?
You can parameterize requests in Postman by using variables. Variables can be defined in the request, collection, or environment levels.

Вопрос 8
Explain the purpose of Pre-request Scripts in Postman.
Pre-request Scripts in Postman allow you to execute custom JavaScript code before sending a request. It is useful for setting dynamic values or performing actions before the request is sent.

Вопрос 9
What is Newman in the context of Postman?
Newman is the command-line companion for Postman. It allows you to run and automate Postman collections using the command line.

Вопрос 10
How do you handle authentication in Postman?
Authentication in Postman can be handled by including the required credentials in the request headers or by using the built-in authentication methods provided by Postman.

Вопрос 11
What is the purpose of Postman environments?
Postman environments allow you to create sets of variables that can be used across requests. This is useful for managing different configurations, such as development and production.

Вопрос 12
How do you handle file uploads in Postman?
File uploads in Postman can be simulated using the 'form-data' request body type. You can select 'File' as a key and choose the file to upload.

Вопрос 13
What is the Postman Console, and how is it useful?
The Postman Console is a feature that displays logs and messages from requests and scripts. It is useful for debugging and understanding the flow of requests.

Вопрос 14
Explain the purpose of the 'pm.environment' object in Postman scripts.
'pm.environment' is an object in Postman scripts that allows you to access and manipulate variables at the environment level. It is useful for dynamic value assignments.

Вопрос 15
How do you handle dynamic variables in Postman?
Dynamic variables in Postman can be handled using environment variables, global variables, or by extracting data from responses and storing them for later use.

Вопрос 16
How can you pass data between requests in Postman?
Data can be passed between requests in Postman using variables. You can set variables in one request and use them in subsequent requests within the same collection.

Вопрос 17
Explain the purpose of the 'postman.setNextRequest' function.
'postman.setNextRequest' is used to specify the next request to be executed after the current one. It is helpful for creating a sequence of requests.

Вопрос 18
Explain the purpose of the 'pm.environment.clear' function.
'pm.environment.clear' is used to clear all variables in the current environment. It is helpful when you need to reset or clean up variables during script execution.

Вопрос 19
Explain the concept of Postman environments.
Postman environments allow you to create sets of variables that can be used across requests. This is useful for managing different configurations, such as development and production.

Вопросы и ответы для опытного / экспертного уровня
Вопрос 20
Explain how you can share a Postman collection with others.
Postman collections can be shared by exporting them as a JSON file or by using the Postman API. You can also generate a public link to share the collection with others.

Вопрос 21
What is the purpose of the Postman test script?
The test script in Postman is used to write assertions and validations. It allows you to verify the response data and ensure that the API is behaving as expected.

Вопрос 22
How do you extract data from a response in Postman?
Data can be extracted from a response in Postman using the 'Tests' tab. You can write JavaScript code to extract and store values from the response.

Вопрос 23
Explain the difference between 'pm.test' and 'pm.expect' in Postman.
'pm.test' is used to define test cases in Postman scripts, while 'pm.expect' is used to set expectations for assertions. Both are used in the 'Tests' tab.

Вопрос 24
How can you handle time delays in Postman scripts?
Time delays can be handled in Postman scripts using the 'setTimeout' function. It allows you to introduce delays between requests or script executions.

Вопрос 25
Explain the concept of Postman monitors.
Postman monitors are used for automated and scheduled API testing. They allow you to run collections at predefined intervals and monitor API performance.

Вопрос 26
What is the Postman Sandbox?
The Postman Sandbox is a JavaScript execution environment within Postman. It allows you to write and run scripts for requests, tests, and pre-request scripts.

Вопрос 27
How can you handle errors in Postman scripts?
Errors in Postman scripts can be handled using try-catch blocks. This allows you to catch and manage errors, preventing them from affecting the entire script execution.

Вопрос 28
What is the purpose of the 'pm.sendRequest' function in Postman?
'pm.sendRequest' is used to send an HTTP request from within a Postman script. It allows you to make additional requests based on the results of the current request.

Вопрос 29
How do you handle CSRF tokens in Postman?
CSRF tokens in Postman can be handled by extracting them from responses and including them in subsequent requests using variables.

Вопрос 30
How do you handle data-driven testing in Postman?
Data-driven testing in Postman can be achieved by using data files, such as CSV or JSON, to provide different sets of input data for the same request or collection of requests.

Basic JSON Interview Questions for Developers
Q #1) What is JSON? Explain.

Answer: JSON is an abbreviation of JavaScript Object Notation. It is one of the simplest data interchange formats, independent of programming language and platform. Its lightweight text-based structure makes it easily readable. It is derived from JavaScript for presenting simple data as key-value pairs.

It is often used for serialization and transmission of data between network connections. It is mostly used for data transmission between a web application and the server, thereby making it a popular alternative to the XML format.

Q #2) Who is known as the father of JSON?

Answer: Douglas Crockford is known as the father of JSON. Douglas Crockford was the person who originally defined the JSON format back in 2000.

Q #3) Do all programming languages and platforms support JSON?

Answer: Yes, most of the technologies that work with data transmission between the systems support JSON format. Due to its text-based nature, nearly all programming languages and platforms can support JSON. These include JavaScript, C, C++, C#, Perl, Java, Python, PHP, etc.

Q #4) What is meant by JSON objects?

Answer: An object is defined as a set of key-value pairs. A JSON starts with a left brace “{“ and ends with another right brace “}”. Every key is followed by a colon “:” and the key-value pairs are separated from each other using a comma “,”. So, the JSON object is a collection of keys along with their values arranged in a pre-specified JSON format.

Q #5) What is the extension of the JSON file?

Answer: A JSON file has an extension of “.json”. Being in a text-based format, a JSON file can be viewed or edited using any text editor, like Notepad or Notepad++.

Q #6) Explain in detail the advantages and features of JSON?

Answer: JSON structure possesses numerous advantages over other data interchange formats. They are:

Easy to use and fast in nature. JSON syntax offers easy parsing of data and even faster implementation. The lightweight structure of JSON allows it to respond much faster rate.
It is compatible with numerous operating systems and browsers. This allows JSON schema to be attuned to many platforms without any extra effort to make sure it’s compatible with other platforms.
It supports a wide range of data types, including integers, doubles, strings, Booleans, and more.
Q #7) What are the limitations of JSON?

Answer: JSON is one of the most popular data interchange formats available in today’s scenario. It has several advantages over the other formats, but it also has its own set of limitations too. They are:

As the data gets complex with several nested or hierarchical structures, it becomes complex for human readability.
JSON is not suitable for handling very complex, large data.
JSON doesn’t have support for handling multimedia formats such as rich text or images.
It doesn’t support comments.
Q #8) What are the uses of JSON?

Answer: JSON is mainly used for data interchange between the two systems.

JSON is used prominently for the transmission of serialized data over a network connection between two systems.
APIs and web services use JSON to format and transfer data.
Most modern programming languages can be used with JSON.
JSON can be used with JavaScript applications such as browser plugins and websites.
JSON can be used to read data from the web server and display data on the web pages.
Q #9) Explain JSON syntax rules.

Answer: Several rules describe the structure of the JSON.

These are:

Data inside a JSON is arranged in key-value pairs. The left side represents the key, and the data on the right side represents the value. A colon separates both key and value “:”.
Each set of key-value pairs is separated from the other pairs by using a comma “,”.
Curly braces define the JSON objects. The left curly brace “{“ represents the start of the object, and the right curly brace “}” represents the end of an object.
Arrays are defined within a JSON object by using square brackets “[ ]”.
Q #10) What are the advantages of JSON over XML?

Answer: JSON has emerged as one of the most popular data interchange methods. It has several advantages over XML that help it replace XML as the most popular data transfer format.

JSON is lighter and faster than XML.
JSON has object types, but XML doesn’t define objects as types. JSON has different object types for different sets of data, such as string, integer, boolean, array, etc. All XML objects are categorized as just one data type, i.e., string.
JSON data can be easily accessed as a JSON object using JavaScript. The XML data needs to be parsed and allocated to the variables using APIs. Getting value out of a JSON is as easy as reading an object in your JavaScript programming.
This text-based, lightweight nature makes JSON more accessible and useful than XML.

JSON Scenario-Based Interview Questions
Q #11) What are the similarities between JSON and XML?

Answer: Several similarities can be found between JSON and XML. They are:

Both JSON and XML are used to transfer data between different systems.
Both JSON and XML have a simple structure and are readable by humans.
Both are independent of programming language.
Both JSON and XML support nested or hierarchical structures.
Both of these can be parsed easily through several programs.
Both these structures have support for Unicode.
Q #12) Name the browsers that support JSON format.

Answer: Support for JSON is included in almost all the new versions of the browsers. Internet Explorer, Chrome, Safari, Mozilla Firefox, etc., all support JSON format.

Q #13) Explain the use of the NewtonSoft framework Net.

Answer: Json.net or Newtonsoft is one of the most popular frameworks used in .NET for performing operations with JSON.

It enables users to parse, create, modify, and query JSON using its internal framework objects such as JArray, JValue, JObject, etc.
It provides an easier solution for querying JSON with a syntax similar to XPath.
It enables the user to serialize or deserialize any objects in .NET with its great JSON serializer.
It is faster than contemporary serializers.
Easy to use and simple.
It also supports conversion from XML to JSON or vice versa.
One of the most important features is its free and open-source nature.
Q #14) How to use Newtonsoft or JSON.net for serializing JSON data?

Answer: Newtonsoft or JSON.net is one of the most widely used frameworks for serializing and deserializing JSON structures in a .NET environment.

To start converting the data into a JSON structure, we need to create an object to store the data.

Car car = new car();
Once we have created a new object, we can define/store the keys and variables in that object.

car.Brand = "Hyundai";
car.Name = “Verna”;
car.Color = “Red”;
Once all the data is stored in the defined object, then we can serialize it using SerializeObject.

1
string json = JsonConvert.SerializeObject(car);
The JSON structure will be stored in the string defined. The structure will be something like this:

{
"Brand":"Hyundai",
"Name": "Verna",
"Color": “Red”
}
Q #15) How to use Newtonsoft or JSON.net for deserializing the JSON data?

Answer: Newtonsoft also provides functionality for deserializing the JSON structure to retrieve the data. The deserialization process is just the reverse of serialization. Here, the same steps are followed but in reverse order.

At first, we need to store the JSON that we want to deserialize in a string.

string JSON = @"{
"Brand": "Hyundai",
"Name": "Verna",
"Color": “Red”
}
Once we have stored the JSON structure in a string, we will use the following command to deserialize it and receive different data.

1
Car m = JsonConvert.DeserializeObject&lt;Car>(JSON);
Now, we will retrieve all the data from the JSON list one by one.

string Brand = m.Brand;
string Name = m.Name;
string Color = m.Color;
Q #16) Can a comment be added inside a JSON file?

Answer: As per the structure, JSON doesn’t support any comments. However, a Key or data object can hold your comments. We need to make sure that during the processing of the JSON, your application ignores the given data element.

Q #17) Name some of the most widely used libraries in .net for JSON.

Answer: There are several popular libraries available for JSON in .net. Some of them are:

Newtonsoft: It is one of the most widely used frameworks for converting using C#. It is quite famous because of its flexibility and performance. It also supports JSON to XML conversion.
DataContractJsonSerializer: This is the built-in library provided by Microsoft for handling JSON objects within the .net environment.
Q #18) What is the use of JSON.parse in JavaScript?

Answer: It is used to parse the data present inside the JSON into objects for using its values.

The syntax used to parse JSON data:

string json = ‘{
"Brand": "Hyundai",
"Name": "Verna",
"Color": “Red”
}’
var obj = JSON.parse(json);
This will convert JSON data into an object from which we can retrieve the data for use with the application.

Q #19) Explain JSONP in simple language.

Answer: JSONP is also known as JSON with Padding. It is a communication technique used by JavaScript programs to call data from a server that is present in a domain, which is different from that of the client. JSONP allows users to share data without the restriction of the cross-domain or same-origin policy of the system and the environment.

Q #20) What are the limitations of JSONP?

Answer: JSONP is used to bypass the same-origin policy of web browsers. It may seem like a perfect way to get around the restriction, but it has its own set of limitations as well.

They are:

As all the JSONP calls are made by including a <script> tag, the request made is confined only to the GET method.
It cannot be used for POST or PUT requests.
It can be used only for read-only services and APIs.

JSON
Как отправить файл Multipart и данные json для весенней загрузки
У меня есть вызов api запроса POST, чтобы принять параметры запроса тела json и составной файл со стороны клиента (почтальон или клиент java).

Я хочу передать как данные json, так и составной файл в одном запросе.

Я написал код, как показано ниже.

@RequestMapping(value = "/sendData", method = RequestMethod.POST, consumes = "multipart/form-data")
public ResponseEntity<MailResponse> sendMail(@RequestPart MailRequestWrapper request) throws IOException
Но я не мог этого сделать с помощью клиента отдыха почтальона.

Я использую весеннюю загрузку на стороне сервера.

Может ли кто-нибудь предложить мне этот вопрос.

Заранее спасибо,

 15.10.2018 15:40
11
2
40 130
4
Данный вопрос помечен как решенный
 Ответы 4
 Ответ принят как подходящий
Вы используете @RequestParam и Конвертер для объектов JSON простой пример:

@SpringBootApplication
public class ExampleApplication {

    public static void main(String[] args) {
        SpringApplication.run(ExampleApplication.class, args);
    }

    @Data
    public static class User {
        private String name;
        private String lastName;
    }

    @Component
    public static class StringToUserConverter implements Converter<String, User> {

        @Autowired
        private ObjectMapper objectMapper;

        @Override
        @SneakyThrows
        public User convert(String source) {
            return objectMapper.readValue(source, User.class);
        }
    }

    @RestController
    public static class MyController {

        @PostMapping("/upload")
        public String upload(@RequestParam("file") MultipartFile file, 
                             @RequestParam("user") User user) {
            return user + "\n" + file.getOriginalFilename() + "\n" + file.getSize();
        }

    }

}
и почтальон: 

ОБНОВИТЬ Пример apache httpclient 4.5.6:

зависимость pom.xml:

    <dependency>
        <groupId>org.apache.httpcomponents</groupId>
        <artifactId>httpclient</artifactId>
        <version>4.5.6</version>
    </dependency>
    <dependency>
        <groupId>org.apache.httpcomponents</groupId>
        <artifactId>httpmime</artifactId>
        <version>4.5.6</version>
    </dependency>

   <!--dependency for IO utils-->
    <dependency>
        <groupId>commons-io</groupId>
        <artifactId>commons-io</artifactId>
        <version>2.6</version>
    </dependency>
сервис будет запущен после полного запуска приложения, измените путь File для вашего файла

@Service
public class ApacheHttpClientExample implements ApplicationRunner {

    private final ObjectMapper mapper;

    public ApacheHttpClientExample(ObjectMapper mapper) {
        this.mapper = mapper;
    }

    @Override
    public void run(ApplicationArguments args) {
        try (CloseableHttpClient client = HttpClientBuilder.create().build()) {
            File file = new File("yourFilePath/src/main/resources/foo.json");
            HttpPost httpPost = new HttpPost("http://localhost:8080/upload");

            ExampleApplication.User user = new ExampleApplication.User();
            user.setName("foo");
            user.setLastName("bar");
            StringBody userBody = new StringBody(mapper.writeValueAsString(user), MULTIPART_FORM_DATA);
            FileBody fileBody = new FileBody(file, DEFAULT_BINARY);

            MultipartEntityBuilder entityBuilder = MultipartEntityBuilder.create();
            entityBuilder.addPart("user", userBody);
            entityBuilder.addPart("file", fileBody);
            HttpEntity entity = entityBuilder.build();
            httpPost.setEntity(entity);

            HttpResponse response = client.execute(httpPost);
            HttpEntity responseEntity = response.getEntity();

            // print response
            System.out.println(IOUtils.toString(responseEntity.getContent(), UTF_8));
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

}
вывод консоли будет выглядеть следующим образом:

ExampleApplication.User(name=foo, lastName=bar)
foo.json
41
 15.10.2018 23:16
У вас есть два варианта -

Отправить MultipartFile вместе с данными json

public void uploadFile(@RequestParam("identifier") String identifier, @RequestParam("file") MultipartFile file){
}
ИЛИ

Отправьте данные Json внутри MultipartFile, а затем проанализируйте файл Multipart, как указано ниже, и все.

public void uploadFile(@RequestParam("file") MultipartFile file){
    POJO p = new ObjectMapper().readValue(file.getBytes(), POJO.class);
}
 15.11.2019 12:15
Я застрял с этой проблемой последние несколько часов

Так я наткнулся на вопрос это.

Итоги:
Используйте @ModelAttribute вместо @RequestBody. @ModelAttriute будет работать так же, как и другие обычные (без составного свойства в сущности) сопоставления сущностей.

 15.11.2020 14:57
Я объясняю все здесь в части ответа:

введите описание ссылки здесь

 12.01.2021 12:40
Другие вопросы по теме
Java: невозможно отправить форму с Angular 5, содержащую входной файл типа, в серверную часть REST (Spring Boot)
Rest DSL с Springboot на Camel создает маршруты после перезапуска EAP, выдает исключение
Вызов Rest Assured POST вызывает исключение org.apache.http.NoHttpResponseException
Spring: не удалось поймать выброшенное исключение
Spring Boot Controller: возврат ресурса в том же стиле, что и PagingAndSortingRepository
Не удаляет онлайн-список - Android REST Retrofit
Возврат полезной нагрузки запроса в случае ошибки
Расскажите, пожалуйста, о моем коде Yii2 об аутентификации RESTFul по токену
Создание архитектуры REST
Сообщение / страница WordPress отображаются только в том случае, если пользователь аутентифицирован с помощью внешнего API
Похожие вопросы
Извлечение данных Json из фрейма данных Spark
Как использовать клиент REST с токеном сервера
Массив JavaScript для загрузки нескольких изображений Stringify борется с большими изображениями base64
Fetch in react с json всегда возвращает ошибку
Как мне заставить (через JSON API) Drupal вернуть Json со списком таксономий?
Пагинация на веб-странице PHP с использованием данных JSON
Проблема с передачей переменной PHP в файл AJAX с использованием json_encode
Вложенные массивы в Realm с помощью Swift
Сжать / распаковать данные в TStringWriter
Неожиданный токен I в JSON в позиции 0

Плохой запрос (400) при публикации IFormFile
Вопросы
C#
Плохой запрос (400) при публикации IFormFile
У меня есть проект .NET Core API с простой конечной точкой для загрузки файла:

[Route("api/[controller]")]
[ApiController]
public class FilesController : Controller
{
    private IFilesService _filesService { get; set; }

    public FilesController(IFilesService filesService)
    {
        _filesService = filesService;
    }

    [HttpPost]
    public async Task<IActionResult> UploadFile(IFormFile file)
    {
        var model = await _filesService.UploadFile(file);
        return Ok();
    }
}
Я пытался проверить это с помощью Postman, но каждый раз, когда я отправляю файл в конечную точку, я получаю ошибку 400 Bad Request. Моя конечная точка никогда не попадает.

У меня есть несколько других конечных точек POST, которые работают нормально, поэтому проблема связана либо с этой конкретной конечной точкой, либо с Postman. Вот моя настройка в Postman:

Плохой запрос (400) при публикации IFormFile

Я крутил колеса, пытаясь понять, в чем проблема, но в этом нет ничего особенного, и я следую примерам, которые видел в Интернете.

Что я делаю неправильно?

 01.12.2018 06:18
2
1
2 326
4
Данный вопрос помечен как решенный
 Ответы 4
попробуйте под URL-адресом в клиенте Postman

  http://localhost:5001/api/Files/UploadFile
 01.12.2018 06:24
попробуй это.

[HttpPost]
    public async Task<IActionResult> UploadFile([FromForm]IFormFile file)
    {
        var model = await _filesService.UploadFile(file);
        return Ok();
    }
И удалите атрибут ApiController

 01.12.2018 06:47
 Ответ принят как подходящий
Я вижу, вы установили атрибут [ApiController], поэтому я предполагаю, что вы используете ASP.Net Core 2.1.

Если он еще не установлен, попробуйте изменить services.AddMvc() на services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_1); в Startup.cs.

Некоторое время назад у меня была аналогичная проблема, и вышеуказанное изменение устранило ее для меня. Я нашел ответ на свою проблему здесь.

Надеюсь это поможет!

 01.12.2018 06:59
У меня была такая же проблема при попытке опубликовать FormFile через AJAX, а не через Form.Submit, но я не смог найти полное решение где-либо в Интернете. Я опубликую здесь свое решение, если кто-то еще наткнется на это.

Моя проблема заключалась в атрибуте [AutoValidateAntiForgeryToken] на контроллере, как упомянул Коул В. в своем комментарии. Похоже, это не та проблема, с которой Стивен столкнулся изначально, но очевидно, что @Html.AntiForgeryToken() создаст скрытое поле формы __RequestVerificationToken с токеном, чтобы оно было опубликовано при отправке. Однако, когда вы пытаетесь опубликовать форму вручную, этого не происходит, и вам придется добавить это поле самостоятельно. Для меня клиентский код выглядел так:

        const formData = new FormData();
        formData.append('file', file);
        formData.append(
            '__RequestVerificationToken',
            $('input[name=__RequestVerificationToken]').val());

        $.ajax({
            cache: false,
            type: 'POST',
            url: 'somePostUrl',
            data: formData,
            contentType: false,
            processData: false
        });
Почтальон будет эквивалентен дополнительной паре ключ / значение, хотя нужно будет найти способ получить фактический токен. В целях тестирования, если у вас нет возможности просто удалить атрибут [AutoValidateAntiForgeryToken], потому что он находится в базовом классе, можно вместо этого добавить [IgnoreAntiforgeryToken] к текущему контроллеру или методу конечной точки.

Надеюсь, это избавит кого-то от головной боли в будущем! Я потратил довольно много времени на это ...

 15.03.2021 13:46
Другие вопросы по теме
Веб-API не перенаправляется на страницу входа на сервер идентификации
Пытаюсь заставить мой C# WEB API 2 возвращать объект, но получаю ошибку 500
Пользовательский интерфейс Swagger не будет перечислять мои методы публикации с параметром [FromBody]
Elasticsearch Nest не вставляет документ
Как мне получить сообщение об ошибке от BadRequestErrorMessageResult?
Интеграция алгоритма в файл .r
Как сбросить автоматическое приращение после удаления, используя сначала код?
Получение фабрики классов COM для компонента с CLSID не удалось из-за следующей ошибки: 8000401a
ApiController не работает с ожиданием 404
Веб-API ASP.NET возвращает внутреннюю ошибку сервера 500 при доступе через мобильное приложение xamarin.?
Похожие вопросы
Net core DbContextPool против AddDbContextPool и др
C# - доступ к переменной внутри и вне класса
Значение по умолчанию, если NULL в лямбда-выражении C#
Как использовать флажок, чтобы получить значение true или false?
Создание объекта C# ViewModel
Второй параметр метода C# необязательный
C# do while loop любое слово, начинающееся с y, запускает проверку y / n и разрушает цикл
Асинхронные сокеты в C# без обратной связи
Как Console.Writeline IEnumerable <(int a, int b, int c)>?
Записать агрегат как синтаксис Sql

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
 08.06.2021 20:09
Другие вопросы по теме
Получить GUID списка SPFx с помощью @ pnp / sp
Ошибка «Не удается найти модуль» при использовании ссылок на проекты TypeScript 3
Hapi.js: «Класс расширяет значение undefined, это не конструктор или ноль»
Передавать интерфейсный объект как реквизит без явного указания каждого значения свойства
Существуют ли официальные определения типов Typescript для OpenAPI 3?
Angular / Typescript - Решить асинхронность в массиве
Сохраняйте положение прокрутки, когда вы возвращаетесь назад и меняете маршруты угловой 5
Визуализируйте представление внутри iframe в Angular 6 и продолжайте использовать переменные шаблона
Жасмин шпионит за функцией Get () или Set () класса Typescript
Можно ли в TypeScript использовать ключи «времени выполнения» для определения нового типа?
Похожие вопросы
Получить GUID списка SPFx с помощью @ pnp / sp
Высота SVG с D3.Js
Хотите знать, как работает построение URL при создании сервера и маршрута. Также хочу узнать о команде =>
Оператор распространения вложенных объектов JavaScript
Обнаружение зачеркнутых символов Юникода в Javascript
Предупреждение об отклонении необработанного обещания: ошибка: не удается установить заголовки после их отправки
Смещение сплайна в three.js
Почему я не могу передать `push` в качестве функции foreach?
Избегайте использования специальных символов регулярного выражения в javascript, но при этом сохраняйте целостность строки для соответствия ключевым словам
Линия сжимается и расширяется в html

DJANGO
Нет файла при загрузке в структуру отдыха django
Обновление: ни один из двух ответов ниже не работает. Когда я использую request.FILES["file"] я получаю ключевую ошибку.

Используя django rest framework, я пытаюсь загрузить файл PDF, но приходит запрос, а файла нет. Я пытаюсь загрузить файл из Postman. Запрос на получение работает. Любая помощь очень ценится.

вот мой взгляд

@api_view(['PUT','GET'])
def upload_pdf(request):
    if request.method == 'PUT':
        myfile = request.POST.get('file')
        print("myfile === {}".format(myfile))

    if request.method == 'GET':
        return Response({"message": "Hey there at least this works!"})
Вывод: myfile === Нет

Нет файла при загрузке в структуру отдыха django

 01.03.2019 15:37
1
0
995
3
Данный вопрос помечен как решенный
 Ответы 3
В Django все загруженные файлы попадают в request.FILES, а не в request.POST. Вот почему вы не видите этот файл в данных публикации.

 01.03.2019 15:48
Вы можете попробовать это

from rest_framework.parsers import FileUploadParser

class Fileupload(APIView):
   parser_class = (FileUploadParser,)
   def post(self, request, format=None):
     file = request.FILES['file']
     if 'file' not in request.data:
          raise ParseError("Empty content")
     model_obj = YourModel.objects.get_or_create()

     model_obj.myfile.save(file.name, file, save=True)
Надеюсь, поможет

для более подробной информации см. это

 01.03.2019 15:54
 Ответ принят как подходящий
Проблема не в коде, а в почтальоне. Я не мог понять, как использовать почтальона, и никто ничего не предложил по поводу почтальона. поэтому я только что проверил это с помощью команды curl Это отлично работает...

curl -XPOST -i -F file=@dir/to/test.pdf http://127.0.0.1:8000/api/upload_pdf  
 11.04.2019 19:16
Другие вопросы по теме
Невозможно точно найти определенный текст в теге html с помощью Python
Как найти конкретное значение из индекса?
Динамическое изменение размера строки Tkinter TreeView
Импорт сбивает с толку проверкой Pycharm
Как разбить на куски (подматрицы) или обработать огромную матрицу, дающую ошибку памяти на numpy?
Проблемы с плавающей запятой Pandas с использованием loc
Как реализовать блокировку функции прослушивания в отдельном потоке, в то время как основной продолжает работать в Python
Как сделать запросы scrapy синхронными
Извлечь n символов для первого совпадения слова в файле
Python-docx не может использовать существующий документ — нет стиля с именем «Заголовок»
Похожие вопросы
Представление MySQL превращает SUM столбца INT в десятичный тип
Получить имя пользователя в промежуточном программном обеспечении из токена Django Rest Framework SIMPLE JWT (сторонний)
Джанго: как получить URL-адрес?
Concat QuerySets из разных моделей
Невозможно использовать пользовательскую форму аутентификации с LoginView
Django REST Framework: список путей к файлам в сериализаторе
Почему ведение журнала Django не работает с Gunicorn?
Доступ к веб-сайту проверки подлинности Windows IIS из веб-данных Excel
Поля модели Django с динамическими именами
Как изменить стиль и шрифт django admin css?

C#
Загрузите один файл в веб-API
Я использую этот код для загрузки файла в веб-API. Но мой опубликованный файл показывает Null. Возможно, это потому, что код ожидает несколько файлов в почтальоне. Мне нужно загрузить один файл через почтальона, а не список файлов. Я делюсь кодом.

[HttpPost]
[Route("Upload")]
public async Task<IActionResult> Upload(string targetIdStr, string feedType, 
    string contentType, string dateCreated, string description, List<IFormFile> files)
 01.08.2018 13:49
3
1
11 340
4
 Ответы 4
Хорошо, я дам вам настоящий веб-контроллер api о том, как вы можете загрузить один файл. Класс ниже - это рабочий пример. Просто замените постоянное значение небольшим файлом на вашем диске.

using System.IO;
using Microsoft.AspNetCore.Mvc;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    public class UploadController : Controller
    {
        private const string FILEPATH = @"c:\temp\demo.txt";

        [HttpGet]
        public IActionResult JsonObject()
        {
            var file = new FileInfo(FILEPATH);
            return new OkObjectResult(new FileClass()
            {
                Name = file.Name,
                Content = System.IO.File.ReadAllBytes(FILEPATH)
            });
        }

        [HttpPost]
        public IActionResult Index([FromBody] FileClass file)
        {
            return new NoContentResult();
        }
    }

    public class FileClass
    {
        public string Name { get; set; }
        public byte[] Content { get; set; }
    }
}
Теперь в почтальоне сначала запустите вызов, чтобы получить uri https: // локальный: 44382 / api / upload

Это приведет к ответу json, показывающему вам json, который вам нужно вернуть, в моем случае это было:

{
    "name": "demo.txt",
    "content": "dGVzdCBkYXRh"
}
В почтальоне теперь выберите опцию post, а в теле выберите raw, вставьте в него полученный результат и запустите его. Теперь при отладке вы увидите, что объект json прибыл. На скриншоте ниже показано доказательство работы почтальона: PostMan Example

 01.08.2018 13:57
Здесь есть ряд проблем. Во-первых, сигнатура метода действия будет работать только с запросами в кодировке multipart/form-data. Чтобы принять что-то вроде JSON, вы должны применить атрибут [FromBody] к параметру, что вы можете сделать только один раз. Другими словами, если вы хотите принять что-то вроде JSON, вам нужен класс, который охватывает все эти параметры, позволяющий принимать только этот класс в качестве параметра с атрибутом [FromBody].

Кроме того, если вы надеетесь принять что-то вроде JSON, вы не можете выполнить привязку к IFormFile (или List<IFormFile>), потому что это также работает только для запросов в кодировке multipart/form-data. Вместо этого вы должны выполнить привязку к byte[], а на стороне клиента вам нужно будет преобразовать файл в строку в кодировке base64 для включения в объект JSON.

Если вы на самом деле намереваетесь принимать только запросы в кодировке multipart/form-data (что необычно для API), то вам просто нужно убедиться, что файл в теле сообщения связан с правильным именем files[], то есть проиндексирован.

 01.08.2018 15:23
Не знаете, как создать код на стороне клиента, я полагаю, вы используете FormData в JavaScript? JavaScript API FormData

Код JS - это что-то вроде этого?

var form_data = new FormData();
form_data.append("file", "the file name");
form_data.append("fileID", file_id)
var sendMethod = './Upload';  //this is the url for post
$.ajax({
  type: "POST",
  url: sendMethod,
  data: form_data,
  dataType: 'JSON',
  contentType: false,
  processData: false,
  success: function (response) {
      //......
},
error: function (response) {
      //......
}
);
Сторона сервера,

[HttpPost]
public Task<IActionResult> Upload(HttpPostedFileBase file, int fileID
{
  //......
}
Я не тестировал приведенный выше код, но он должен работать и надеюсь, что это поможет.

 01.08.2018 15:43
Для загрузки одного файла вам необходимо изменить действие, как показано ниже:

        [HttpPost]
        [Route("Upload")]
        public async Task<IActionResult> Upload(string targetIdStr, string feedType,
  string contentType, string dateCreated, string description, IFormFile file)
        {
            return Ok();
        }
Для запроса в PostMan отправьте запрос с post-> Set Body как form-data, как показано ниже


 02.08.2018 10:49
Другие вопросы по теме
Как почтальон отправляет файл через HTTP?
Переменные встроенной среды Postman не оцениваются
Как загрузить все запросы в коллекциях почтальонов одной папкой ??
Идентичные запросы GET в CURL с использованием PHP и Postman имеют разные ответы
Вызов API работает с почтальоном, но Doenst работает с моим кодом
Почтальон GET запрос с ipv6
Неправильный синтаксис curl Post для Elasticsearch в Postman
Невозможно выполнить оператор if в почтальоне
Базовая HTTP-аутентификация с приложением Postman
Неподдерживаемый тип носителя для application / x-www-form-urlencoded и POJO
Похожие вопросы
Как использовать переменную с помощью метода get_range C#?
C# WFA - делегируйте трудоемкую работу другому потоку
Курсор ввода не отцентрован
Время отклика Google API очень велико
System.Diagnostics.Activity имеет значение null в ядре aspnet 2.1
Привязки WPF ReactiveUI в представлении
Как отключить функцию автоматического предложения Windows 10 в приложении WPF?
Выполнение нескольких методов модульного тестирования async приводит к ошибке, но запуск их по отдельности не вызывает
Поле переопределения не работает
Как использовать переменную, назначенную внутри оператора switch, далее в программе?

GMAIL
Gmail api отправить с почтальоном
Я пытаюсь отправить письмо с помощью API Gmail с POSTMAN, используя метод POST

POST https://www.googleapis.com/upload/gmail/v1/users/example@gmail.com/messages/send
но я получаю сообщение об ошибке ниже:

{
    "error": {
        "errors": [
            {
                "domain": "global",
                "reason": "invalidArgument"
                "message": "Recipient address required"
            }
        ],
        "code": 400,
        "message": "Recipient address required"
    }
}
заголовок уже помещен Content-type: message / rfc822

Я знаю, что это нужно закодировать в base64 (web_safe), поэтому я перевел

"From: sender.example@gmail.com\r\n" +
"To: receiver.example@gmail.com\r\n" +
"Subject: Subject Example\r\n" +
"This is content: hope you got it\r\n"
Я также заменил их на web_safe

 replace(/\+/g, '-').replace(///g, '_').replace(/=+$/, ''); 
поэтому у меня есть base64, как показано ниже. поэтому я помещаю raw в тело POST METHOD

{
    "raw": "RnJvbTogc2VuZGVyLmV4YW1wbGVAZ21haWwuY29tDQpUbzogcmVjZWl2ZXIuZXhhbXBsZUBnbWFpbC5jb20NClN1YmplY3Q6IFN1YmplY3QgRXhhbXBsZQ0KVGhpcyBpcyBjb250ZW50OiBob3BlIHlvdSBnb3QgaXQNCg"
}
Я использовал «попробуйте этот api» на сайте разработчиков Google и смог отправить его. https://developers.google.com/gmail/api/v1/reference/users/messages/send

Но с POSTMAN я не могу.

Любая помощь, пожалуйста?

 29.08.2018 10:42
4
2
5 015
4
 Ответы 4
Я думаю, что вам следует установить заголовок Content-type на application/json. Также не забудьте добавить заголовок Authorization.

 05.09.2018 14:31


Если вы хотите получить более подробную информацию, перейдите по ссылке ниже: Как успешно отправить сообщение с помощью нового API REST Gmail?

 29.04.2020 18:51
https://stackoverflow.com/a/61507172/2131809

Если вы хотите получить более подробную информацию, перейдите по ссылке ниже: Gmail API отправляет сообщение без использования кодировки Base64

 29.04.2020 18:53
Это означает, что формат данных неверен. Вы должны попробовать метод ниже, который отлично сработал для меня.

Я использую формат ниже.

From: <FROM@gmail.com>
To: <TO@gmail.com>
Subject: Test Email

Test
В целях тестирования я использовал https://ostermiller.org/calc/encode.html для 64 кодирования над текстовым сообщением. Итак, я получу закодированную строку, как показано ниже

IEZyb206IDxGUk9NQGdtYWlsLmNvbT4KICAgIFRvOiA8VE9AZ21haWwuY29tPgogICAgU3ViamVjdDogVGVzdCBFbWFpbAogICAgCiAgICBUZXN0
Теперь в почтальоне,

URL-адрес Gmail Rest API, который вы должны использовать https://www.googleapis.com/gmail/v1/users/<YOUR@gmail.com>/messages/send

Тип содержимого должен быть json, потому что вы отправляете формат json в теле сообщения.

Content-Type: application/json
В теле

{
    "raw": "IEZyb206IDxGUk9NQGdtYWlsLmNvbT4KICAgIFRvOiA8VE9AZ21haWwuY29tPgogICAgU3ViamVjdDogVGVzdCBFbWFpbAogICAgCiAgICBUZXN0"
}
Итак, наконец, почтальон выглядит так, как показано ниже.




Как только вы отправите запрос в API, вы получите ответ, который выглядит следующим образом

{
    "id": "172016110a227c19",
    "threadId": "172016110a227c19",
    "labelIds": [
        "UNREAD",
        "SENT",
        "INBOX"
    ]
}
 11.05.2020 03:57
Другие вопросы по теме
Запрос Node JS post дает 400, тогда как от Postman он работает
Как установить почтальон в windows server 2007 SP2 (windows vista)
Не удается добавить файл для получения запроса POST
Почтальон IllegalArgumentException: целевой объект не должен быть нулевым ",
Как обновить ресурс API Laravel?
Невозможно отправить json только работу с кодом x-www-form-urlencoded, когда почтальон отправляет конечную точку API Laravel
Почтальон, как использовать получение запросов путем чтения URL-адресов из различных файлов .txt
Поддерживает ли OpenDaylight RESTCONF методы HTTP PUT или POST?
Проблема с тайм-аутом при отправке данных json на узел api
Spring boot не может найти поле формы font-end
Похожие вопросы
Скопировать вложение из Gmail на диск
Что делает этот удаленный javascript, прикрепленный к моей электронной почте? "http://rum-static.pingdom.net/prum.min.js"
Как отфильтровать черновики сообщений из gmail api history.list
Использование IMAPSync для импорта из GMail
Как можно запросить Solr для адреса Gmail, игнорируя точки и плюсы?
Gmail 421-4.7.0 Ошибки
Как выйти из GMail с помощью Python
Сохранять вложения только из новых сообщений
GmailApp не снимает пометку с сообщения Gmail
Шаблон электронной почты html некорректно работает в Gmail

WEB SERVICES
Недействительная пара ключ=значение (отсутствует знак равенства) в заголовке авторизации
При обращении к API от Postman я получаю эту ошибку.

Детали API:
URL-адрес:
https://account-perf.myglobal.com/v1/users/00uk0khprrME7gZOU0h7/credentials/change_password

Заголовок:
Content-Type:application/json
Authorization:Bearer n7mbkw74jsubd7rauhptdnre

Тип:
СООБЩЕНИЕ

Тело:
{"password":"Baddy125@","token":"eyJhbGci...."}
Редактировать 1:
Вызов веб-сервиса для генерации токена

URL-
https://api-perf.myglobal.com/rest/oauth2/v1/токен

Тип-
СООБЩЕНИЕ

Тело-
client_id:abcd
client_secret:xyz
grant_type:client_credentials

 30.03.2019 07:10
3
1
14 575
4
 Ответы 4
Проанализируйте и проверьте путь запроса, если запрос неверен, эта ошибка выдается на шлюзе API. Я наступил на ту же ошибку, когда исправил параметры запроса, все заработало.

Дайте мне знать.

 06.03.2020 15:36
У меня было это всякий раз, когда вызывался любой необработанный метод или ресурс конечной точки. Моя установка представляет собой шлюз API с определенными ресурсами (например, /myendpoint) и определенными методами для этих конечных точек (например, GET).

Чтобы исправить это, я создал лямбда-функцию Node.js, которая только что вернула ошибку 404. Затем я добавил любой метод ANY в корень конечных точек / и указал его как прокси-функцию Lambda для ЛЮБЫХ методов.

Затем я добавил прокси-ресурс, например. /{proxy} -- есть флажок, который вы можете установить при создании ресурса, чтобы передать его прокси. Метод ANY для этого ресурса, указывающий на ту же функцию Lambda, развертывание API, и все готово.

Теперь вместо ошибки токена носителя авторизации я получаю правильную ошибку HTTP 404.

 01.05.2020 21:20
@Matt H - Это довольно хорошая идея, которая вдохновила меня на еще одну.

Предполагая, что все остальные пути в API указаны явно, я создал путь по умолчанию /{proxy+}, который будет возвращать http 404, ресурс сообщения не найден. Вместо использования лямбда я смог создать фиктивный ответ, поэтому нет никаких затрат на то, чтобы заставить лямбду вернуть ответ.

Я создал свои API через спецификацию Open API. Вот как мой YAML для реализации хотел бы

  /{proxy+}:
    x-amazon-apigateway-any-method:
      responses:
        404:
          description: "404 response"
          content: {}
      x-amazon-apigateway-integration:
        responses:
          404:
            statusCode: "404"
            responseTemplates:
              application/json: "{\"message\":\"resource not available\"}"
        requestTemplates:
          application/json: "{\"statusCode\": 404}"
        passthroughBehavior: "when_no_templates"
        type: "mock"
Serverless также имеет возможность указать встроенный фиктивный ответ. Ниже может быть образец:

functions:
  default:
    handler: handler.default
    events:
      - http:
          path: hello
          cors: true
          method: get
          integration: mock
          request:
            template:
              application/json: '{"statusCode": 404}'
          response:
            template: $input.path('$')
            statusCodes:
              404:
                pattern: '' #default method
                template:
                  application/json: '{"statusCode": 404, "message":"resource not found"}'
бессерверный документ: https://www.serverless.com/framework/docs/providers/aws/events/apigateway/#custom-response-templates

 05.01.2021 07:33
Мне удалось сделать это, проксировав маршрут ANY /{proxy+} к лямбде, которая всегда будет отвечать HTTP 404.

Поскольку все остальные маршруты настроены точно, этот ANY /{proxy+} маршрут действует как маршрут по умолчанию и будет перехватывать любой несоответствующий запрос.

Вот как я это сделал с CloudFormation:

Parameters:
    RestAPI:
        Type: String
    RestApiRootResourceId:
        Type: String
    LambdaName:
        Type: String
    Path:
        Type: String

RootResource:
    Type: AWS::ApiGateway::Resource
    Properties:
      RestApiId: !Ref RestAPI
      ParentId: !Ref RestApiRootResourceId
      PathPart: !Ref Path
ProxyResource:
    Type: 'AWS::ApiGateway::Resource'
    Properties:
      RestApiId: !Ref RestAPI
      ParentId: !Ref RestApiRootResourceId
      PathPart: "{proxy+}"
AnyMethod:
    Type: 'AWS::ApiGateway::Method'
    Properties:
    RestApiId: !Ref RestAPI
    ResourceId: !Ref ProxyResource
    HttpMethod: ANY
    Integration:
        IntegrationHttpMethod: POST
        Type: AWS_PROXY
        PassthroughBehavior: WHEN_NO_MATCH
        Uri:
          Fn::Join:
            - ":"
            - - !Sub "arn:aws:apigateway:${AWS::Region}:lambda"
              - !Sub "path/2015-03-31/functions/arn:aws:lambda:${AWS::Region}:${AWS::AccountId}:function"
              - !Sub "${LambdaName}/invocations"
ApiGatewayInvokeLambdaPermissionAny:
    Type: AWS::Lambda::Permission
    Properties:
      Action: lambda:InvokeFunction
      FunctionName:
        Fn::Join:
          - ":"
          - - !Sub "arn:aws:lambda:${AWS::Region}:${AWS::AccountId}:function"
            - !Ref LambdaName
      Principal: apigateway.amazonaws.com
      SourceArn:
        Fn::Join:
          - ":"
          - - !Sub "arn:aws:execute-api:${AWS::Region}:${AWS::AccountId}"
            - !Sub "${RestAPI}/*/ANY/*"
Параметры:

RestAPI — это ваш идентификатор API
RestApiRootResourceId — это идентификатор корневого ресурса (!GetAtt "RestApi.RootResourceId")
LambdaName — это имя вашего лямбда-прокси.
Путь - это то, что у меня есть между сценой и корнем (для конкретного использования)
 31.08.2021 11:52
Другие вопросы по теме
Auth::attempt возвращает true, но перенаправляет на другую страницу и возвращает гостя
Получение AccessToken для Microsoft Graph из службы приложений Azure Easy Auth
Как отправить JWT из веб-API в MVC?
Почему для «аудитории» установлено значение «localhost: <port>» с auth0?
Подзаявка JWT игнорируется во время проверки
Как реализовать SSO IdentityServer4 на основе потока паролей?
Лучшие способы блокировки функций с аутентификацией в Angular 7?
Аутентификация .NET Core при каждом запросе (включая js/spa)
Как подключить facebook, firebase и флаттер?
Как лучше всего назначить идентификатор пользователя - Laravel
Похожие вопросы
Web (ASP.Net) Wcf: не найдена ошибка при подключении из настольного клиента
Как создать запрос HTTP GET к API календаря Google с помощью С#?
Избегайте запроса диалогового окна учетных данных Windows
LINQ Webservice ПОЛУЧИТЬ список похожих продуктов из файла JSON
Ошибка при добавлении ссылки на сервис на сайт DNN
Запустить класс из службы Android
Как создать программу веб-службы Java на Java 5 или более ранней версии на платформе UNIX
Как использовать веб-сервис С#?
Как заставить службу WCF использовать протокол HTTPS
Перехватчики ведения журнала Apache CXF не запускаются в Weblogic в приложении Spring Boot

C#
InvalidDataException: превышен предел длины составного тела 16384
Что я пытаюсь сделать:

Я пытаюсь загрузить multipart/form-data с файлом и BLOB-объектом JSON с помощью Postman в ASP.NET Core 2.2 APIController и передать файл во временный файл на диске, а не полностью в память, поскольку файлы, вероятно, имеют потенциально большой размер (20 МБ - 2 ГБ). Я следовал обоим примерам из https://docs.microsoft.com/en-us/aspnet/core/mvc/models/file-uploads?view=aspnetcore-2.2, начиная с примера с большим файлом, но я также пытался протестировать пример с небольшим файлом с той же ошибкой, похожими, но разными трассировками стека. Сервер использует Kestrel.

Трассировка стека примера большого файла (пойманная в отладчике):

Exception has occurred: CLR/System.IO.InvalidDataException
Exception thrown: 'System.IO.InvalidDataException' in System.Private.CoreLib.dll: 'Multipart body length limit 16384 exceeded.'
   at Microsoft.AspNetCore.WebUtilities.MultipartReaderStream.UpdatePosition(Int32 read)
   at Microsoft.AspNetCore.WebUtilities.MultipartReaderStream.<ReadAsync>d__36.MoveNext()
   at System.Runtime.ExceptionServices.ExceptionDispatchInfo.Throw()
   at System.Runtime.CompilerServices.TaskAwaiter.HandleNonSuccessAndDebuggerNotification(Task task)
   at System.Runtime.CompilerServices.TaskAwaiter`1.GetResult()
   at Microsoft.AspNetCore.WebUtilities.StreamHelperExtensions.<DrainAsync>d__3.MoveNext()
   at System.Runtime.ExceptionServices.ExceptionDispatchInfo.Throw()
   at System.Runtime.CompilerServices.TaskAwaiter.HandleNonSuccessAndDebuggerNotification(Task task)
   at Microsoft.AspNetCore.WebUtilities.MultipartReader.<ReadNextSectionAsync>d__20.MoveNext()
   at System.Runtime.ExceptionServices.ExceptionDispatchInfo.Throw()
   at System.Runtime.CompilerServices.TaskAwaiter.HandleNonSuccessAndDebuggerNotification(Task task)
   at System.Runtime.CompilerServices.TaskAwaiter`1.GetResult()
   at LookupServiceAPI.Helpers.FileStreamingHelper.<StreamFile>d__1.MoveNext() in <hidden-path-to-project>\Helpers\FileStreamingHelper.cs:line 35
Трассировка стека примера небольшого файла (возвращается в ответ, не попадает ни в какие точки останова или перехваты исключений отладчика):

System.IO.InvalidDataException: Multipart body length limit 16384 exceeded.
   at Microsoft.AspNetCore.WebUtilities.MultipartReaderStream.UpdatePosition(Int32 read)
   at Microsoft.AspNetCore.WebUtilities.MultipartReaderStream.ReadAsync(Byte[] buffer, Int32 offset, Int32 count, CancellationToken cancellationToken)
   at Microsoft.AspNetCore.WebUtilities.StreamHelperExtensions.DrainAsync(Stream stream, ArrayPool`1 bytePool, Nullable`1 limit, CancellationToken cancellationToken)
   at Microsoft.AspNetCore.WebUtilities.MultipartReader.ReadNextSectionAsync(CancellationToken cancellationToken)
   at Microsoft.AspNetCore.Http.Features.FormFeature.InnerReadFormAsync(CancellationToken cancellationToken)
   at Microsoft.AspNetCore.Mvc.ModelBinding.FormValueProviderFactory.AddValueProviderAsync(ValueProviderFactoryContext context)
   at Microsoft.AspNetCore.Mvc.ModelBinding.CompositeValueProvider.CreateAsync(ActionContext actionContext, IList`1 factories)
   at Microsoft.AspNetCore.Mvc.ModelBinding.CompositeValueProvider.CreateAsync(ControllerContext controllerContext)
   at Microsoft.AspNetCore.Mvc.Internal.ControllerBinderDelegateProvider.<>c__DisplayClass0_0.<<CreateBinderDelegate>g__Bind|0>d.MoveNext()
--- End of stack trace from previous location where exception was thrown ---
   at Microsoft.AspNetCore.Mvc.Internal.ControllerActionInvoker.InvokeInnerFilterAsync()
   at Microsoft.AspNetCore.Mvc.Internal.ResourceInvoker.InvokeNextResourceFilter()
   at Microsoft.AspNetCore.Mvc.Internal.ResourceInvoker.Rethrow(ResourceExecutedContext context)
   at Microsoft.AspNetCore.Mvc.Internal.ResourceInvoker.Next(State& next, Scope& scope, Object& state, Boolean& isCompleted)
   at Microsoft.AspNetCore.Mvc.Internal.ResourceInvoker.InvokeFilterPipelineAsync()
   at Microsoft.AspNetCore.Mvc.Internal.ResourceInvoker.InvokeAsync()
   at Microsoft.AspNetCore.Routing.EndpointMiddleware.Invoke(HttpContext httpContext)
   at Microsoft.AspNetCore.Routing.EndpointRoutingMiddleware.Invoke(HttpContext httpContext)
   at Microsoft.AspNetCore.Diagnostics.DeveloperExceptionPageMiddleware.Invoke(HttpContext context)
Вот мой базовый код контроллера и вспомогательные классы для примера с большим файлом:

FileStreamingHelper.cs

using System;
using System.Globalization;
using System.IO;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Http.Features;
using Microsoft.AspNetCore.Http.Extensions;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using Microsoft.AspNetCore.WebUtilities;
using Microsoft.Net.Http.Headers;

namespace LookupServiceAPI.Helpers
{
    public static class FileStreamingHelper
    {
        private static readonly FormOptions _defaultFormOptions = new FormOptions();

        public static async Task<FormValueProvider> StreamFile(this HttpRequest request, Stream targetStream)
        {
            if (!MultipartRequestHelper.IsMultipartContentType(request.ContentType))
            {
                throw new Exception($"Expected a multipart request, but got {request.ContentType}");
            }

            // Used to accumulate all the form url encoded key value pairs in the 
            // request.
            var formAccumulator = new KeyValueAccumulator();

            var boundary = request.GetMultipartBoundary();
            var reader = new MultipartReader(boundary, request.Body);
            reader.BodyLengthLimit = Int32.MaxValue;
            reader.HeadersLengthLimit = Int32.MaxValue;
            var section = await reader.ReadNextSectionAsync(); //EXCEPTION HERE
            while (section != null)
            {
                ContentDispositionHeaderValue contentDisposition;
                var hasContentDispositionHeader = ContentDispositionHeaderValue.TryParse(section.ContentDisposition, out contentDisposition);

                if (hasContentDispositionHeader)
                {
                    if (MultipartRequestHelper.HasFileContentDisposition(contentDisposition))
                    {
                        await section.Body.CopyToAsync(targetStream);
                    }
                    else if (MultipartRequestHelper.HasFormDataContentDisposition(contentDisposition))
                    {
                        // Content-Disposition: form-data; name = "key"
                        //
                        // value

                        // Do not limit the key name length here because the 
                        // multipart headers length limit is already in effect.
                        var key = HeaderUtilities.RemoveQuotes(contentDisposition.Name);
                        var encoding = GetEncoding(section);
                        using (var streamReader = new StreamReader(
                            section.Body,
                            encoding,
                            detectEncodingFromByteOrderMarks: true,
                            bufferSize: 1024,
                            leaveOpen: true))
                        {
                            // The value length limit is enforced by MultipartBodyLengthLimit
                            var value = await streamReader.ReadToEndAsync();
                            if (String.Equals(value, "undefined", StringComparison.OrdinalIgnoreCase))
                            {
                                value = String.Empty;
                            }
                            formAccumulator.Append(key.Value, value); // For .NET Core <2.0 remove ".Value" from key

                            if (formAccumulator.ValueCount > _defaultFormOptions.ValueCountLimit)
                            {
                                throw new InvalidDataException($"Form key count limit {_defaultFormOptions.ValueCountLimit} exceeded.");
                            }
                        }
                    }
                }

                // Drains any remaining section body that has not been consumed and
                // reads the headers for the next section.
                section = await reader.ReadNextSectionAsync();
            }

            // Bind form data to a model
            var formValueProvider = new FormValueProvider(
                BindingSource.Form,
                new FormCollection(formAccumulator.GetResults()),
                CultureInfo.CurrentCulture);

            return formValueProvider;
        }

        private static Encoding GetEncoding(MultipartSection section)
        {
            MediaTypeHeaderValue mediaType;
            var hasMediaTypeHeader = MediaTypeHeaderValue.TryParse(section.ContentType, out mediaType);
            // UTF-7 is insecure and should not be honored. UTF-8 will succeed in 
            // most cases.
            if (!hasMediaTypeHeader || Encoding.UTF7.Equals(mediaType.Encoding) || mediaType.Encoding == null)
            {
                return Encoding.UTF8;
            }
            return mediaType.Encoding;
        }
    }
}
MultipartRequestHelper.cs

using System;
using System.IO;
using Microsoft.Net.Http.Headers;

namespace LookupServiceAPI.Helpers
{
    public static class MultipartRequestHelper
    {
        public static bool IsMultipartContentType(string contentType)
        {
            return !string.IsNullOrEmpty(contentType)
                   && contentType.IndexOf("multipart/", StringComparison.OrdinalIgnoreCase) >= 0;
        }

        public static bool HasFormDataContentDisposition(ContentDispositionHeaderValue contentDisposition)
        {
            // Content-Disposition: form-data; name = "key";
            return contentDisposition != null
                   && contentDisposition.DispositionType.Equals("form-data")
                   && string.IsNullOrEmpty(contentDisposition.FileName.Value)
                   && string.IsNullOrEmpty(contentDisposition.FileNameStar.Value);
        }

        public static bool HasFileContentDisposition(ContentDispositionHeaderValue contentDisposition)
        {
            // Content-Disposition: form-data; name = "myfile1"; filename = "Misc 002.jpg"
            return contentDisposition != null
                   && contentDisposition.DispositionType.Equals("form-data")
                   && (!string.IsNullOrEmpty(contentDisposition.FileName.ToString())
                       || !string.IsNullOrEmpty(contentDisposition.FileNameStar.ToString()));
        }
    }
}
Минимальный контроллер:

[Route("api/v0.1/data/excel")]
[ApiController]
public class DataExcelController : ControllerBase
{
    [HttpPost, DisableRequestSizeLimit]
    public async Task<IActionResult> ImportExcel()
    {
        var processID = Guid.NewGuid();
        FormValueProvider multipartContent;
        string tempFilePath = Path.GetTempPath() + processID;
        using(var tempStream = System.IO.File.OpenWrite(tempFilePath))
        {
            multipartContent = await Request.StreamFile(tempStream);
        }
        /** Other unnecessary code **/
        return Ok();
    }
}
Startup.cs

namespace LookupServiceAPI
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_2);

            services.Configure<FormOptions>(x =>
            {
                x.MultipartHeadersLengthLimit = Int32.MaxValue;
                x.MultipartBoundaryLengthLimit = Int32.MaxValue;
                x.MultipartBodyLengthLimit = Int64.MaxValue;
                x.ValueLengthLimit = Int32.MaxValue;
                x.BufferBodyLengthLimit = Int64.MaxValue;
                x.MemoryBufferThreshold = Int32.MaxValue;
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }

            app.UseHttpsRedirection();
            app.UseMvc();
        }
    }
}
Изображение конфигурации Postman (на изображении указаны только заданные значения, значения в заголовках не заданы): InvalidDataException: превышен предел длины составного тела 16384

Вывод консоли почтальона: InvalidDataException: превышен предел длины составного тела 16384

Что я пробовал:

От Превышен предел длины составного тела 16384:

Установить MemoryBufferThreshold
Установить MultipartBodyLengthLimit
Убедитесь, что в заголовках, настроенных почтальоном, Content-Type вручную не установлено значение multipart/form-data.
От Исключение превышено ограничение длины составного тела:

Установить ValueLengthLimit
Б/у [DisableRequestSizeLimit]
Где я думаю проблема, но я не уверен в обходном пути или в том, что вызывает проблему:https://github.com/aspnet/AspNetCore/blob/master/src/Http/WebUtilities/src/MultipartReader.cs#L48-L50

Кажется, преамбула моего запроса выходит за пределы размера 1024 * 16 (16384), установленного для DefaultHeadersLengthLimit, но я понятия не имею, почему это может быть так. Или, если преамбула должна быть больше, чем это, как обойти это, не повторно реализуя весь набор классов или не ожидая, пока Microsoft выпустит исправление, которое, похоже, не идет по конвейеру: https://github.com/aspnet/Mvc/issues/7019https://github.com/aspnet/HttpAbstractions/issues/736

Очевидно, кто-то исправил свою проблему, очень похожую на мою (https://github.com/aspnet/Mvc/issues/5128#issuecomment-307675219) здесь:https://github.com/aspnet/Mvc/issues/5128#issuecomment-307962922, но я не могу понять, как понять, применимо ли это вообще.

Надеюсь, этой информации достаточно. Если нет, пожалуйста, дайте мне знать, что вам нужно, и я буду рад предоставить его или проверить любые предложения. Я застрял, исследуя это и пробуя все, что могу найти, уже более 6 часов.

 08.04.2019 23:56
6
0
6 596
4
Данный вопрос помечен как решенный
 Ответы 4
 Ответ принят как подходящий
Я решил свой вопрос. Оказывается, это был URL, который я использовал.

Чтобы решить мою проблему, я понял, что отправляю на конечную точку http вместо конечной точки https, вызывая перенаправление. Я изменил свой URL-адрес с http://localhost:5000/ на https://localhost:5001/, и все сразу заработало.

Интересно, что это также вызвало проблему в cURL с журналом, выглядящим так:

== Info: Connected to localhost (::1) port 5000 (#0)
=> Send header, 257 bytes (0x101)
0000: POST /api/v0.1/data/excel HTTP/1.1
0024: Host: localhost:5000
003a: User-Agent: curl/7.64.0
0053: Accept: */*
0060: cache-control: no-cache
0079: Content-Length: 13286446
0093: Content-Type: multipart/form-data; boundary=--------------------
00d3: ----7b12fc7773ed7878
00e9: Expect: 100-continue
00ff: 
== Info: Expire in 1000 ms for 0 (transfer 0xa6aa80)
<= Recv header, 33 bytes (0x21)
0000: HTTP/1.1 307 Temporary Redirect
<= Recv header, 37 bytes (0x25)
0000: Date: Tue, 09 Apr 2019 18:04:24 GMT
<= Recv header, 17 bytes (0x11)
0000: Server: Kestrel
<= Recv header, 19 bytes (0x13)
0000: Content-Length: 0
<= Recv header, 54 bytes (0x36)
0000: Location: https://localhost:5001/api/v0.1/data/excel
== Info: HTTP error before end of send, stop sending
<= Recv header, 2 bytes (0x2)
0000: 
== Info: Closing connection 0
Изменение конечной точки также исправило это.

Понятия не имею, почему загрузка multipart/form-data прерывается из-за этого перенаправления. Если у кого-то есть идеи, почему, я был бы рад узнать.

 09.04.2019 20:08
Добавление [FromForm] устранило мою проблему.

например.

[HttpPost]
[RequestFormLimits(ValueLengthLimit = int.MaxValue, MultipartBodyLengthLimit = int.MaxValue)]
[Route("far")]
public SingleResponseModel<bool> UploadFar([FromForm] IFormFile file)
{
    return _fileUploadService.UploadFar(file);
}
 16.10.2020 12:30
У меня похожая проблема, и я обнаружил, что проблема связана с точкой останова отладки в Visual Studio, потому что я думаю, что Visual Studio пытается прочитать поток, а после этого пытается прервать поток,

поэтому попробуйте пропустить представление Request.From в просмотре или быстром просмотре отладки

 29.01.2021 20:34
Я использую ядро ​​​​asp.net 3.1, и я тоже сталкиваюсь с этой ситуацией.

Когда я передаю большой файл в API, это всегда вызывает System.IO.InvalidDataException: Multipart body length limit 16384 exceeded.

Теперь я нашел этот вопрос и прочитал ответ @Sylex, поэтому я использую https://localhost:5001 для запроса API, это работает !!!

Зная, что произошло перенаправление, поэтому я удаляю app.UseHttpsRedirection(); в Startup.cs -> void Configure(), и повторное использование http://localhost:5000/, теперь я могу запросить нормально.

 22.06.2021 04:02
Другие вопросы по теме
Тестирование TypeFilterAttribute с внедрением зависимостей
Сделать изображение доступным через HTTP
Переместите свойства DbSet<TEntity> в отдельный класс в Entity Framework Core
Аутентификация и авторизация в качестве центрального MicroService ASP.NET
Обработка исключений в сервисной структуре
Проблема с Angular/ASP.NET Core 2.1 CORS
Как заставить обратный прокси-сервер Service Fabric работать в Azure
Где находится каталог dist в VS при запуске шаблона Angular?
Drive API v3, C# — иерархия папок
Веб-API дает 404 на IIS, работает на IISExpress
Похожие вопросы
Тестирование TypeFilterAttribute с внедрением зависимостей
Аутентификация пользователя по идентификатору, записанному в базе данных
Как исправить нехватку памяти в системе «Clone.Bitmap» в C#
Чтение листов Excel асинхронно
Использование абстрактного класса с общими параметрами в объекте INotifyPropertyChanged
API служебной шины Microsoft Azure — как добавить AutoDeleteOnIdle в описание подписки
Используя SQlite в Unity, что такое SqliteCommand для копирования таблицы из одной базы данных в другую базу данных, учитывая, что обе таблицы идентичны?
Проблема Xamarin Layout, как сделать кнопку буксировки внизу экрана
С# для чтения значения OUTPUT из хранимой процедуры
Параметр запроса Wiremock.Net с запросом SOQL

POSTMAN
Как изменить текущее значение переменной Postman в области коллекции?
У меня есть переменная "TOKEN" в моем объем коллекции. Я пытаюсь установить значение, используя скрипты Tests, когда делаю запрос. Но переменная не изменилась.

Итак, я пытаюсь использовать переменную объем среды. И это работает.

Почему это не работает в объем коллекции? Я читал о области видимости переменной postman здесь и хорошо ее понимаю.

Вот несколько скриншотов:

1. Сначала я вызываю конечную точку входа.

Как изменить текущее значение переменной Postman в области коллекции?

Ниже приведен результат консоли. Ничего плохого.

Как изменить текущее значение переменной Postman в области коллекции?

Пока я не попытаюсь получить конечную точку всех пользователей, которым требуется токен в заголовке запроса. Статус 401, потому что токен нулевой. Если токен не нулевой, то он вернет 200:

Как изменить текущее значение переменной Postman в области коллекции?

Это изящно работает, когда я добавляю переменную «TOKEN» в среду. Переключение на Нет среды снова приведет к коду состояния 401:

Как изменить текущее значение переменной Postman в области коллекции?

 05.05.2019 11:52
3
6
3 370
4
Данный вопрос помечен как решенный
 Ответы 4
Теперь вы можете использовать:

pm.collectionVariables.set("variable_key", "variable_value");
В своем первоначальном ответе в июне 2019 года я написал, что переменные коллекции не редактируются с помощью скриптов и могут быть изменены только вручную. Как уже отмечалось, это уже не так. . . .*
 01.06.2019 11:12
Отключите Automatic persist variable values в настройках почтальона.

изображение

 31.10.2019 09:27
Кажется, вы можете устанавливать переменные env только тогда, когда выбрана какая-то среда: https://learning.postman.com/docs/postman/scripts/postman-sandbox/#environment-and-global-variables


 07.02.2020 18:27
 Ответ принят как подходящий
Это может быть новым, поскольку этот вопрос был опубликован, но для всех остальных обнаружив это, вы можете установить переменные коллекции, используя:

pm.collectionVariables.set(key, value)
Видеть: https://learning.postman.com/docs/sending-requests/variables/#defining-variables-in-scripts

 20.05.2020 01:19
Другие вопросы по теме
Как добавить элемент в тело json из предварительного запроса или файла данных?
Как найти элемент внутри ответа json, а затем установить переменную на основе содержимого другого элемента внутри этого объекта?
Как отправить массив объектов в теле запроса в формате JSON через Postman?
Доступ к Laravel Api с помощью POSTMAN (404 не найден)
Неопределенная переменная: токен в тесте почтальона входа в систему Laravel
Ошибка токена доступа Twitter OAuth: токен запроса отсутствует
REST (PHP, CURL) PUT/POST XML Проблема: 400 Неверный запрос, ответ «Неверный URL» с Walmart OAuth API (Postman для тестирования)
Запрос app.post не работает и выдает ошибку
Как написать тест для сопоставления данных в массиве в тесте почтальона
Почтальон - отключить алгоритм сопоставления
Похожие вопросы
Ошибка параметра Binding Exception при сборе данных из Mysql
Как загрузить файл (*.txt или *.pdf), полученный от ответа GET API через команду Curl?
Laravel Api Postman Загрузить изображение Возврат Null
404 Не найдено при тестировании API
Приложение пула приложений IIS запрашивает пароль (базовая аутентификация), но ни почтальон, ни бессонница не могут ответить
Получите сегодняшние файлы с помощью поиска с помощью плагина plone.restapi, возвращающего ошибку запроса plone
Тестирование маршрутов API Laravel с использованием POSTMAN
Есть ли способ получить вывод сеанса telnet как часть тестовых сценариев почтальона?
Как вы вводите модуль в Postman?
Не удалось добавить API в Kong

Вопросы
NODE.JS
Как сохранить jwt в файле cookie и передать его функции аутентификации при перенаправлении страницы?
У меня есть экспресс-бэкэнд node.js, созданный с помощью Postman и протестированный с помощью Jest. Написал фронтенд с хбс и следующий шаг их прошивать. Однако я все еще продолжаю получать сообщение об ошибке «пожалуйста, аутентифицируйте» из моей функции аутентификации, что, я думаю, связано с тем, что я не могу успешно передать свой токен jwt.

Итак, на странице входа (пользователи/логин) я хочу войти в систему с адресом электронной почты и паролем, затем я хочу перенаправить на свою страницу (пользователи/я), где я могу выполнять другие действия, принадлежащие этому пользователю.

Внешний интерфейс код страницы входа:

<section class = "login-bg">
        <div class = "login-form">
            <p>Welcome to Task Manager, please log in!</p>
            <form class = "input-group" action = "/users/login" method = "POST">
                <label>Email:</label>
                <input type = "email" name = "email" placeholder = "type your email" value = "{‌{user.email}}" required >
                <label>Password:</label>
                <input type = "password" name = "password" placeholder = "type your password" value = "{‌{user.password}}" required>

                <button class = "button" type = "submit">Log In</button>
            </form>
        </div>
    </section>
Серверная часть

в промежуточном программном обеспечении/auth.js

const jwt = require('jsonwebtoken')
const User = require('../models/user')

const auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '')
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const user = await User.findOne({_id: decoded._id, 'tokens.token': token})

        if (!user) {
            throw new Error()
        }

        req.token = token
        req.user = user
        next()

    } catch (error) {
        res.status(401).send({error: 'Please authenticate.'})
    }
}

module.exports = auth
в src/routers/users.js

router.post('/login', async (req, res) => {
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password)
        const token = await user.generateAuthToken()
        res.cookie('jwt',token, { httpOnly: true, secure: true, maxAge: 3600000 })
        res.redirect('/users/me')
    } catch (error) {
        res.status(400).send()
    }
})
Однако, когда я делаю console.info(document.cookie) в пользователях/я, он говорит, что не определено.

Затем я установил и импортировал cookie-parser в app.js и попытался написать эту часть в src/routers/users.js:

router.get('/me', auth, async (req, res) => {
    console.info('Cookies: ', req.cookies)
    try {
        res.render('me', {name: user.name})
    } catch (error) {
        res.status(500).send()
    }
})
но эта консоль ничего не печатает, возможно, потому что я получаю сообщение об ошибке от авторизации.

У меня также есть файл js, прикрепленный ко мне на странице, но я понятия не имею, смогу ли я написать так, возможно, неправильно:

const userToken = document.cookie.jwt.token

fetch('/users/me', {
    method: 'POST',
    headers: {
     'Authorization': 'Bearer ' + userToken
    }
})
.then(res => res.json())
.then(data => { console.info(data) })
.catch(err => { console.info(err) })
то в Сети/Заголовки у меня

URL-адрес запроса:

http://локальный:3000/пользователи/логин

Метод запроса:

СООБЩЕНИЕ

Код состояния:

302 найдено

Удаленный адрес:

Реферальная политика:

нет-реферера-при-понижении

Заголовки ответа

Связь:

поддерживающий жизнь

Содержание-длина:

62

Тип содержимого:

текст/html; кодировка = utf-8

Дата:

пт, 07 июня 2019 г., 18:41:47 по Гринвичу

Место нахождения:

/пользователи/я

Set-Cookie:

jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Y2Y2NjNlMTQwMTQyYjE0MzhmZTJjNDMiLCJpYXQiOjE1NTk5MzI5MDd9.T_P8O-j98cs9gtahTzspJjx1qNMSe3M2OAyfs; Максимальный возраст=3600; Путь=/; Срок действия = пятница, 07 июня 2019 г., 19:41:47 по Гринвичу; Только HTTP; Безопасный

Отличаться:

Принимать

X-Powered-By:

выражать

Нет файлов cookie запроса, только файлы cookie ответа. Я не уверен, что это значит...@_@

Я хочу передать jwt для успешного входа в систему и правильного отображения моей страницы, как я могу это сделать?

 10.06.2019 12:05
7
2
16 127
4
Данный вопрос помечен как решенный
 Ответы 4
 Ответ принят как подходящий
Ваш файл cookie токена jwt не работает, потому что он объявляет флаг secure: true в следующем коде:

res.cookie('jwt',token, { httpOnly: true, secure: true, maxAge: 3600000 })
что приводит к флагу Secure в ответе HTTP, указывающему, что этот файл cookie доступен только в среде https:

Set-Cookie:
jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Y2Y2NjNlMTQwMTQyYjE0MzhmZTJjNDMiLCJpYXQiOjE1NTk5MzI5MDd9.T_P8O-j98cs9gtahTzspJjx1qNMSe3M5OAySyeH25fs; 
Max-Age=3600; Path=/; 
Expires=Fri, 07 Jun 2019 19:41:47 GMT; HttpOnly; Secure
Поскольку ваш URL-адрес запроса использует HTTP (http://localhost:3000/users/login), браузер будет игнорировать файл cookie.

 10.06.2019 12:26
Из документов экспресс-сессии:
Установите безопасный тег только в том случае, если вы находитесь в рабочей среде.

    if (app.get('env') === 'production') {
      app.set('trust proxy', 1) // trust first proxy
      sess.cookie.secure = true // serve secure cookies
    }
 08.08.2020 21:10
Во-первых: вы не можете просмотреть файл cookie на стороне клиента, потому что вы установили следующее ({secure:true, httpOnly:true}) -secure означает, что он должен использовать файл cookie только в сети https, а -httpOnly означает, что файл cookie должен быть прочитан любым Javascript на стороне клиента.

Во-вторых: вы действительно добавили заголовок «Авторизация» после создания jwt или просто поместили его в файл cookie ?

Если да, то попробуйте:

jwt.verify(token, <your secret>).then(user=> console.info(user)).catch(err=>console.info(err.toString());

Для тех, кто может столкнуться с такой же проблемой в будущем

 24.09.2020 14:41
Убедитесь, что вы установили cookie-parser на свой сервер.

Бегать:

npm i cookie-parser
 13.02.2022 14:49
Другие вопросы по теме
Сохранение данных в MongoDb возвращает ObjectParameterError
Пустое тело почтового запроса — XMLHttpRequest на сервер Express
Ассоциации: множественная реализация hasMany и ownTo
Невозможно получить значение ключа из объекта с помощью ejs
Nodejs (экспресс) работает, но запросы не работают
Как включить файлы css для маршрутизаторов API в экспресс?
Ошибка с сервера node js, но не указывает на какой-либо конкретный файл
Как получить ответ от экспресс-сервера об ошибке, используя axios в приложении реакции
Реагировать на экспресс-развертывание pm2
Nodejs проверяет и обновляет поле базы данных через день после его создания
Похожие вопросы
Создать/обновить файл/код JavaScript с помощью Nodejs
Не удалось установить "@angular/cli"
Как правильно подключить приложение Node.js к узлу Cassandra?
Ошибка: EPERM: операция не разрешена, отключите связь при запуске публикации npm
Синхронизация реализации запросов mysql в узле
Как использовать литералы шаблонов для cms?
Упорядочить включение с условием «Где»
Запрос транзакции Knex и ограничение внешнего ключа Postgres
Как установить ключ массива в качестве индекса в javascript/node js
Не удается разобрать массив объектов JSON

PYTHON
Как преобразовать класс в python в фрейм данных pandas?
Я пытаюсь создать фрейм данных pandas из объекта класса в python.

Объект класса — это вывод скрипта postman python, который я получил из следующего руководства: https://developer.cisco.com/meraki/build/meraki-postman-collection-getting-started/

Я хочу получить результат этого

print(response.text)

который дает:

[{"id":578149602163689207,"name":"Axel Network Test"},{"id":578149602163688579,"name":"Your org"},{"id":578149602163688880,"name":"Your org"},{"id":578149602163688885,"name":"Your org"},{"id":578149602163689038,"name":"Tory's Test Lab"},.......
Я хочу поместить это в фрейм данных pandas со столбцом идентификатора и столбцом имени.

import requests
import pandas as pd

url = "https://api.meraki.com/api/v0/organizations"

headers = {
    'X-Cisco-Meraki-API-Key': "xxxxxxxxxxxxxxxxxxxxxxxxxxx",
    'User-Agent': "PostmanRuntime/7.15.0",
    'Accept': "*/*",
    'Cache-Control': "no-cache",
    'Postman-Token': "7d29cb4e-b022-4954-8fc8-95e5361d15ba,1a3ec8cb-5da8-4983-956d-aab45ed00ca1",
    'accept-encoding': "gzip, deflate",
    'referer': "https://api.meraki.com/api/v0/organizations",
    'Connection': "keep-alive",
    'cache-control': "no-cache"
    }

response = requests.request("GET", url, headers=headers)

я устал писать

df = pd.DataFrame(response, columns=['id', 'name']) 
но это производит много ошибок.

См. журнал ошибок: https://pastebin.com/4BKFYng1.

Как я могу достичь того, чего хочу?

 18.06.2019 12:05
3
5
1 650
4
Данный вопрос помечен как решенный
 Ответы 4
Поскольку текст ответа находится в json, вы можете:
1. Преобразуйте json в dict.
2. Подайте dict как фрейм данных.

#load the json as a dict
data = json.loads(response.text)

df = pd.DataFrame.from_dict(data, orient='index')
df.reset_index(level=0, inplace=True)
Затем вы можете изменить имя столбцов или что-нибудь еще.

 18.06.2019 12:10
После получения ответа вам не хватает десериализации ответа json на объект python, как упоминалось в @ASHu2.

import pandas as pd
import json 
data = json.loads(response.text)
df= pd.DataFrame(data=data, columns=["id","name"]) 
#Optional define index
df.set_index('id', inplace=True)
 18.06.2019 12:11
Попробуй это:

df = pd.DataFrame.from_dict(response.json())

вместо этого:

df = pd.DataFrame(response, columns=['id', 'name'])

 18.06.2019 12:27
 Ответ принят как подходящий
read_json принимает строку JSON или файловый объект JSON.

In [10]: import pandas as pd    

In [11]: df = pd.read_json(response.text)

In [12]: df
Out[12]:
                   id               name
0  578149602163689207  Axel Network Test
1  578149602163688579           Your org
2  578149602163688880           Your org
3  578149602163688885           Your org
4  578149602163689038    Tory's Test Lab
 18.06.2019 12:34
Другие вопросы по теме
Получение ValueError при написании цикла if-else для заполнения столбца фрейма данных на основе условия
Объедините операторы if в одну цепочку операторов сравнения
Как добавить список списка в существующий фрейм данных в виде отдельных столбцов
Преобразование объекта Dask Series в метку времени
Форматирование строки Python в процентах («TypeError: недостаточно аргументов для строки формата»)
Может ли функция вернуться без оператора return?
Сглаживание списка из токенов списка списков в python?
Как преобразовать встроенный файл JSON в CSV в pandas python
Ошибка установки pip3 с пакетом iconservice
Есть ли функция проверки непрерывности в списке?
Похожие вопросы
Как я могу зациклить генератор в этой ситуации?
Как издеваться над flask.request с помощью unittest?
Как упростить этот код о комбинации итераций в python
Показать окно в элементе меню, нажатом Python Maya
Включите регистрацию операторов отладки
Как присвоить значения столбцу с помощью мультииндексного фильтра?
Получение ValueError при написании цикла if-else для заполнения столбца фрейма данных на основе условия
Есть ли способ создать счетчик, размер которого постепенно уменьшается?
Объедините операторы if в одну цепочку операторов сравнения
Как я могу определить репозиторий, отличный от Python, в качестве зависимости для моего пакета Python?

JAVASCRIPT
Как посчитать количество значений в массиве?
Я пытаюсь подсчитать значения массива json.

Я хочу подсчитать количество идентификаторов в массиве данных «sierra», если «beta = b». Следовательно, проверка значения data[].beta на соответствие переменной среды ("B"), установленной на значение "b".

Проблема здесь в том, что у меня нет «sierra» в каждой итерации данных [].

{
  "data": [{
        "alpha": "a",
        "beta": "b",
        "delta": {
            "cat": "dog"
        },
        "gamma": {
            "sierra": {
                "data": [
                    {
                        "type": "alphabet",
                        "id": "a"
                    },
                    {
                        "type": "alphabet",
                        "id": "b"
                    }
                ]
            }
        }
   },
{
        "alpha": "a",
        "beta": "b",
        "delta": {
            "cat": "dog"
        },
        "bravo": {
                "data": [
                    {
                        "type": "number",
                        "id": "1"
                    },
                    {
                        "type": "number",
                        "id": "2"
                    }
                ]
            }
        }
   },
{
        "alpha": "x",
        "beta": "y",
        "delta": {
            "cat": "dog"
        },
        "gamma": {
            "sierra": {
                "data": [
                    {
                        "type": "alphabet",
                        "id": "c"
                    },
                    {
                        "type": "alphabet",
                        "id": "d"
                    }
                ]
            }
        }
   }]
}
Над json находится тело ответа, которое я вижу в почтальоне. "loop" - это количество циклов for.

РЕДАКТИРОВАТЬ 1: Я пробовал это:

1. pm.response.json().data[loop].gamma.sierra.data().id).size()

2. for(var loop =0; loop < pm.response.json().data.length; loop++)
{
 if (pm.response.json().data[loop].beta===pm.variables.get("B"))
{      
        pm.response.json().data.map((item, loop) => {
            if (item.gamma){ // check if gamma key is present
                console.info(item.gamma.sierra.filter(data =>data.id 
                                                      ).length); // 
            }
        });
        result=true;
        break;

    }
}
pm.expect(true).to.eql(result);
Ожидается: 2

Actual: TypeError: Cannot read property 'sierra' of undefined
Actual: item.relationships.apps.filter is not a function
 27.06.2019 08:43
0
10
210
4
Данный вопрос помечен как решенный
 Ответы 4
Вы можете получить к нему доступ следующим образом. Если у вас есть несколько записей данных, вы также можете использовать каждый цикл для расчета.

a = {
 "data": [ 
 {
        "alpha": "a",
        "beta": "b",
        "delta": {
            "cat": "dog"
        },
        "gamma": {
            "sierra": {
                "data": [
                    {
                        "type": "alphabet",
                        "id": "a"
                    },
                    {
                        "type": "alphabet",
                        "id": "b"
                    }
                ]
            }
        }
    }
]
}

console.info(a.data[0].gamma.sierra.data.length);
 27.06.2019 08:45
Вы можете использовать приведенный ниже код:

pm.response.json().data[0].gamma.sierra.data.filter( d => d.id ).length

Надеюсь, поможет.

 27.06.2019 08:48
 Ответ принят как подходящий
Вы можете использовать динамический подход и передать ключ объекта, где вы хотите подсчитать определенный внутренний ключ.

function count(object, key, subKey) {
    const noObject = o => !o || typeof o !== 'object';

    function subCount(object) {
        if (noObject(object)) return 0;
        if (subKey in object) return 1;
        return Object.values(object).reduce((s, o) => s + subCount(o), 0);
    }

    if (noObject(object)) return 0;
    if (key in object) return subCount(object[key]);
    return Object.values(object).reduce((s, o) => s + count(o, key, subKey), 0);
}

var data = { data: [{ alpha: "a", beta: "b", delta: { cat: "dog" }, gamma: { sierra: { data: [{ type: "alphabet", id: "a" }, { type: "alphabet", id: "b" }] } } }] };

console.info(count(data, 'sierra', 'id')); // 2
 27.06.2019 08:51
pm.response.json().data.map((item, loop) => {
    if (item.beta === "b" && item.gamma){ // check if gamma key is present

        console.info(item.gamma.sierra.data.filter(data => data.id).length); // 
    }
});
Джсфиддл

 27.06.2019 09:08
Другие вопросы по теме
«обратное» транспонирование / сведение
Как сохранить значения из списка в массив объектов в ReactJS
$concatArrays с $map игнорирует $concatArrays
Отображать массив двух разных размеров в таблице
Удалить ключ совпадающего номера в [String: [NSNumber]]
Фильтрация вложенного массива JSON в javascript и возврат внутреннего массива, соответствующего критериям
Как я могу уменьшить вложенный массив до одного массива объекта
Использование «этого» в функции javascript, прикрепленной к свойству объекта
Удалить последовательный массив с повторяющимися значениями в многомерном массиве с помощью PHP
Как сохранить данные из ответа json API в массив в ReactJS?
Похожие вопросы
Как преобразовать минуты в часы с помощью moment.js
Сделайте навигационные таблетки bootsrap4.x с тумблером вместо кнопки или ссылки, чтобы он переключался
Как добавить тег ссылки «a» с гиперссылкой в ​​​​приложении Reactjs
Как сохранить значения из списка в массив объектов в ReactJS
Создайте пользовательское событие, например «щелчок» для длинного касания
Динамическое заполнение раскрывающегося списка из xhttp.open("Get"); отклик
Получение значений внутри тега HTML
Введите Eroor :message_str.split не является функцией
Обновление родительского компонента только после завершения работы нескольких дочерних компонентов
Как я могу открыть страницу в новом окне, используя javascript или typescript?

JAVASCRIPT
Получить значение атрибута скрытого элемента формы
Я использую Postman для автоматизации некоторых тестов. Мне нужно получить значение атрибута value в скрытом поле с именем «выполнение»:

<form class = "app-form" method = "post" id = "fm1" action = "login" _lpchecked = "1">
    <input type = "hidden" name = "execution" value = "633ffc0f">
</form>
В почтальоне для этого есть только cheerio. Я пробовал варианты следующего, но ни один из них не работает:

$('input#execution').attr("value");
$('input[name=execution]').attr("value");
$('input[type=hidden]').attr("value");
$(':hidden#execution').attr("value");
$('input:hidden[name=execution]').attr("value");
Большое спасибо!

 22.07.2019 10:28
4
0
2 096
4
Данный вопрос помечен как решенный
 Ответы 4
Вот как вы получаете ценность

const executionValue = $('input[name = "execution"]').val();
console.info(executionValue);
https://jsfiddle.net/chille1987/3dap9yk4/2/

 22.07.2019 10:36
 Ответ принят как подходящий
input[name=execution] у меня работает нормально

console.info($('input[type=hidden]').attr("value"));
console.info($('input[type=hidden]').val());
<script src = "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

<form class = "app-form" method = "post" id = "fm1" action = "login" _lpchecked = "1">
    <input type = "hidden" name = "execution" value = "633ffc0f">
</form>
 22.07.2019 10:45
используйте это для доступа к значению

$('input[name = "execution"]').val();
 22.07.2019 10:58
Используя ваш пример фрагмента HTML, вы мог используете этот базовый код на вкладке Tests, чтобы сохранить это значение в переменной среды в Postman:

const $ = cheerio.load(pm.response.text());

pm.environment.set("hiddenValue", $('input[name = "execution"]').val());
Postman

 22.07.2019 11:15
Другие вопросы по теме
Проблема интерполяции AngularJS со службой перевода
CSS для центрирования всего относительного тела по горизонтали, без обертки или полос прокрутки?
Html-атрибут «Max» со значением с плавающей запятой создает проблемы
Перетаскивание браузера по умолчанию - как его использовать с выделенным текстом?
Как изменить стиль текста?
Ползунок диапазона не сортируется при движении мыши вверх или вниз?
Если еще для тернарного оператора PHP с использованием datatable
Использовать значение из модели или, если оно не определено, использовать значение по умолчанию
Изображение в html не отображается должным образом на странице
Ползунок диапазона не достигает максимального значения, когда также есть шаги
Похожие вопросы
Установите публичный путь в проекте ReactJs с помощью Webpack 4
Как выбрать переключатель по умолчанию с помощью элемента управления слоями leaflet.js?
Html-атрибут «Max» со значением с плавающей запятой создает проблемы
Приведение одного объекта к типу на основе тех же ключей другого объекта
Есть ли действительная цель для вызовов параметризованных функций, которые устанавливаются в прослушивателях событий?
JSONSchema — обязательное свойство, зависящее от родительского свойства
Наблюдаемый Redux не обрабатывает ответ бэкэнда
Как определить 2 последовательных определенного специального символа?
Условный рендеринг не отображается - ReactJS
Перетаскивание браузера по умолчанию - как его использовать с выделенным текстом?

JAVASCRIPT
Ошибка: Ошибка запроса с кодом состояния 400. Различия между отправкой в ​​POSTMAN и в приложении
В POSTMAN это работает:

1) url: https://app/login
2) method: POST
3) body
4) x-www-form-urlencoded
5)username: ****,
password: ****,
grant_type: 'password',
client_secret: '****',
client_id: '****'
В функции submit метод POST при отправке формы не работает. у меня ошибка:

xhr.js?b50d POST https://app/login 400 (Bad Request)

Error: Request failed with status code 400 at createError (createError.js?2d83) at settle (settle.js?467f) at XMLHttpRequest.handleLoad (xhr.js?b50d)

Во вкладке Network в response у меня есть:

{"error":"invalid_client","error_description":"Client credentials were not found in the headers or body"}

Авторизоваться

class Login extends Component {
  constructor (props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }

  handle = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value
    });
  }

  submit = (event) => {
    event.preventDefault();

    const body1 = {
      username: this.state.email,
      password: this.state.password,
      grant_type: 'password',
      client_secret: '****',
      client_id: '****'
    }

    axios({ 
      method: 'post', 
      url: 'https://app/login', 
      body: body1, 
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
      }) 
      .then(res => { 
        if (res.status === 200) {
          console.info(res)
        } 
      }).catch(err => { 
        console.error(err);
      });

  }

  render () {
    return (
      <form action = "" method = "post" onSubmit = {this.submit}>
        <div>
          <label htmlFor = "email">Email</label>
          <input type = "email" required  name = "email"
            value = {this.state.email}
            onChange = {this.handle}  />
        </div>
        <div>
          <label htmlFor = "password">Password</label>
          <input type = "password"name = "password"
            value = {this.state.password}
            onChange = {this.handle}  />
        </div>
        <button type = "submit" value = "Submit">Log</button>
      </form>
    )
  }
}
Чем отличается отправка в POSTMAN и в приложении? Содержимое тела преобразовать в строку?

 24.07.2019 12:12
0
5
9 299
4
Данный вопрос помечен как решенный
 Ответы 4
 Ответ принят как подходящий
Код указывает в Content-Type, что тело будет закодировано строкой URL, но в теле ему предоставляется объект JavaScript. Не похоже, что клиент Axios превращает этот объект тела в значение, закодированное в URL (т.е. из {a: 5, b: 2} в "a=5&b=2"). Код нуждается в функции преобразования этого. Популярным является qs.

В противном случае ваши данные, вероятно, будут преобразованы в строку с помощью метода .toString(), который даст вам "[object Object]", вы сможете увидеть это на вкладке сети инструментов разработчика.

 24.07.2019 12:33
Локальный хост: 3000/API/продукты 404 Ошибка Вы не создали res.get("/api/products") на server.js или не установили прокси. проверьте ниже настройки прокси.

Ошибка прокси: не удалось запросить прокси /api/products Проверь это:

интерфейс /package.json

{ "имя": "интерфейс", "прокси": "http://127.0.0.1:5000", ... }

остановить запуск фронтенда и бэкенда

Сначала запустите бэкенд

запуск нпм

Затем внешний интерфейс

компакт-диск интерфейс запуск нпм

 03.09.2020 08:54
Axios обрабатывает ошибки по-другому.

Чтобы узнать, в чем на самом деле проблема.

Вы должны использовать error.request, чтобы проверить, есть ли ошибка в сделанном вами запросе.

и используйте error.response, чтобы получить обратную связь об ошибке с сервера

аксиос({ метод: 'пост', URL-адрес: 'https://приложение/логин', тело: тело1, заголовки: { «Тип контента»: «application/x-www-form-urlencoded» } }) .тог(рес => { если (рез.статус === 200) { console.info(разрешение) } }).поймать(ошибка => { если (ошибка. запрос) { console.info(ошибка.запрос) } если(ошибка.ответ){ console.info(ошибка.ответ) } });

 30.11.2020 12:51
Код указывает в Content-Type, что тело будет закодировано строкой URL, но в теле ему предоставляется объект JavaScript. Не похоже, чтобы клиент Axios превращал этот объект тела в значение, закодированное в URL (т.е. из {a: 5, b: 2} в "a=5&b=2"). Код нуждается в функции преобразования этого. Популярным является qs.

npm i qs;
import qs as qs;

axios.post(your_url,
  qs.strigify({
      key1:value1,
      key2:value2,
 }),{
headers:{
   'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
}
})
 15.01.2021 12:45
Другие вопросы по теме
Изображения карточек React Native не отображаются
Мне не удалось стилизовать активный маршрут в React с помощью реактивного маршрутизатора
Локальное состояние дочернего компонента изменяется, когда изменения происходят внутри родительского компонента: ReactJS
Зачем передавать ссылку на функцию вместо метода в событии onClick кнопки в ReactJS?
Как запустить функцию useEffect после нажатия на событие?
Array.prototype.indexOf() работает по-другому в React.js
Как в React дочерний компонент вызывает функцию, которая выполняется в контексте родителя?
Передать динамическое значение компоненту более высокого порядка
Фильтрация через массив объектов JSON с помощью пользовательского интерфейса
Ошибка щелчка триггера onClick: current.click не является функцией
Похожие вопросы
Действия при нажатии на динамические флажки
Я получаю разные результаты из консоли и innerHTML
Таймаут запроса??? как использовать routerlink для перехода на 3 страницы
Как я могу очистить данные из нескольких v-текстовых полей при нажатии кнопки?
Javascript Сравните значение данных в цикле с if
Плавное воспроизведение встроенного видео в формате html5 путем полной предварительной загрузки видео
Невозможно отправить электронную почту через nodemailer в nodejs
Почему мы можем использовать свойство height вместо свойства max-height в анимированном аккордеоне?
Как преобразовать плоский массив объектов (возможно, с несколькими родителями) во вложенный массив объектов
Как сделать вызов функции в foreach() с помощью javascript

GIT
Как подсчитать все запросы на вытягивание с помощью REST API Azure DevOps
Я пытаюсь использовать REST API Azure DevOps для подсчета общего количества запросов на вытягивание в нашем репозитории и, в конечном итоге, использовать его, чтобы получить больше полезной информации из данных git.

Я попытался использовать запрос GET к репозиторию, чтобы вернуть список запросов на вытягивание, но API Azure ограничивает количество ответов до 101 на запрос. Вы можете использовать $top и $skip, чтобы изменить количество и количество возвращаемых ответов, и $count, чтобы подсчитать возвращенные ответы. Это, однако, по-прежнему ограничивает результаты до 1000 при абсолютном максимуме и возвращает весь набор данных, содержащихся в PR, когда мне действительно просто нужно знать количество экземпляров в нем, мне не нужно, чтобы его данные были возвращается вообще, так как это дает ОГРОМНЫЕ результаты на больших репозиториях.

Вот запрос GET, который я использую:

https://dev.azure.com/{organization}/{project}/_apis/git/repositories/{repository}/pullrequests?$top=999&$count=true&searchCriteria.status=all&api-version=5.0
И вот тестовый скрипт, который я использую для возврата количества элементов с помощью Postman

var body = JSON.parse(responseBody);
tests[body.value.length + " Pull Requests in this Repository" ] = true;
Это возвращает количество ответов, как и ожидалось, но не желательно, равное 101. Любые советы и рекомендации очень ценятся!

 24.07.2019 22:48
5
5
4 401
4
Данный вопрос помечен как решенный
 Ответы 4
The Azure API limits the responses to 101 per request

Это ограничение по умолчанию, как и было задумано. Поскольку вы можете получить тысячи записей в одном запросе API, и он разбит на страницы, чтобы предоставить только определенное количество результатов за вызов. Итак, вам нужно использовать top и skip для разбиения на страницы остальных.

А также, если вы не хотите просматривать его данные, которые вообще возвращаются, поскольку это дает ОГРОМНЫЕ результаты в репозиториях, здесь есть скрипт, который может помочь вам напрямую выполнить подсчет:

  var body = JSON.parse(responseBody);
  tests["Count: "  + body.value.length] = true;
Добавьте этот скрипт в тестовое задание, результат будет отображаться в Результат испытаний после выполнения API, см. рис. ниже:



В настоящее время меня не беспокоит результат с большими данными.

Надеюсь, это поможет вам.

 25.07.2019 12:13
 Ответ принят как подходящий
Простой пример кода powershell:

function GetPullRequest{
    param(
[string]$org,
[string]$project,
[string]$repo,
[string]$token
)
    $base64AuthInfo = [Convert]::ToBase64String([Text.Encoding]::ASCII.GetBytes(("{0}:{1}" -f "test",$token)))
    $count=0
    $i=0
    do{
        $uri = "https://dev.azure.com/$org/$project/_apis/git/repositories/$repo/pullRequests?api-version=5.0&`$top=100&`$skip=$i"
        $i+=100
        Write-Output $uri
        $result= Invoke-RestMethod -Method Get -Uri $Uri -ContentType "application/json" -Headers @{Authorization=("Basic {0}" -f $base64AuthInfo)} -Body $bodyJson
        Write-Output $result.Count
        $count+=$result.Count
        if ($result.Count-lt 100){
            break;
        }
    }while($true)
    write-output "Finish. Total Pull Request count: $count";
}

GetPullRequest -org "your organization" -project "your teamproject" -repo "your repository" -token "your personal access token"
 25.07.2019 16:54
Я даю ответ на python, так как считаю, что для некоторых это может быть полезнее, чем скрипт powershell или postman, поскольку это то, что я использовал в своей окончательной реализации.

Надеюсь, это поможет некоторым другим!

Во-первых, это код...

def count_PRs():
   skip = 0
   count = 0
   while True:
        # Retrieve next Pull Requests based on pager value, or all remaining if less than value
        req_url=("https://%s/%s//%s/_apis/git/repositories/%s/pullrequests?$top=%s&$skip=%s&searchCriteria.status=all&api-version=%s" % (instance, organization, project, repository, pager, skip, api_version))
        response = requests.get(req_url, auth=(username, password)).json()

        # If no data returned, break out of loop, otherwise count items returned
        if len(response["value"]) == 0:
            break
        else:
            count += len(response["value"])
            skip += pager

   return count
Теперь объяснение того, что здесь происходит, чтобы вы могли ПОНЯТЬ это, а не просто использовать это вслепую...

Во-первых, URL-адрес запроса создается с переменными, которые вы должны предварительно определить.

req_url=("https://%s/%s//%s/_apis/git/repositories/%s/pullrequests?$top=%s&$skip=%s&searchCriteria.status=all&api-version=%s" % (instance, organization, project, repository, pager, skip, api_version))
Это: экземпляр, организация, проект, репозиторий, пейджер, пропуск, версия_апи.

Экземпляр, организация, проект и репозиторий основаны на вашем сценарии использования, поэтому я не могу вам помочь.

Значение «пейджер» — это количество элементов, возвращаемых за вызов, из моего использования я заметил, что Azure API в настоящее время ограничивает это значение 1000, но это может измениться в будущем, я постараюсь обновить это, если замечу.

Значение «пропустить» представляет, какие запросы на извлечение уже были подсчитаны, поэтому оно начинается с 0, а затем увеличивается на значение пейджера для каждой итерации в цикле, чтобы не учитывать один и тот же PR несколько раз.

Следующая строка отправляет запрос и сохраняет ответ в переменной ответа:

response = requests.get(req_url, auth=(username, password)).json()
Существует заголовок аутентификации, который содержит имя пользователя и пароль. Ранее я настроил токен личного доступа на странице Azure DevOps, и этот PAT — это то, что вы должны использовать для своего пароля здесь, это значительно проще, чем попытка аутентификации с помощью OAuth2.0, и я бы рекомендовал сделать это прежде всего.

В этом разделе проверяется, получаете ли вы все еще новые запросы на вытягивание в ответе, и если нет, он прерывает цикл while, чтобы вернуть счетчик.

if len(response["value"]) == 0:
    break
Если вы получили ответ, этот раздел подсчитывает запросы на вытягивание и добавляет их к подсчету, а затем увеличивает переменную пропуска перед переходом к следующей итерации.

else:
    count += len(response["value"])
    skip += pager
Мне потребовалась целая вечность, чтобы понять это, и я очень надеюсь, что это может помочь вам в будущем, если да, рассмотрите возможность голосования! Любые вопросы, которые у вас есть, задавайте их в комментариях, и я постараюсь помочь вам, как только смогу.

 07.08.2019 17:08
Код ниже может помочь. Здесь я извлекаю все запросы на извлечение для проекта. Вывод будет помещен в excel. Пожалуйста, следите за комментариями в строке

#+++Declaring all the parameters+++
Param(
   [string]$collectionurl = "https://dev.azure.com/<organizationname>",
   [string]$project = "<Projectname>",
   [string]$token = "<PAT>",
   [string]$Filename = '<local path>'
)

#++PassingToken as Base 64++
$auth = [Convert]::ToBase64String([Text.Encoding]::ASCII.GetBytes(("{0}:{1}" -f "",$token)))

#++Generating Pull Request Base URL++
$pullRequestURL = "$collectionurl/$project/_apis/git/pullrequests?searchCriteria.status=all&&api-version=5.1"

#++Passing Respone in variable++           
$pullRequest = (Invoke-RestMethod -Uri $pullRequestURL -Method Get -Headers @{Authorization=("Basic {0}" -f $auth)}).value

#++Displaying result on screen( this step can be avoided )++
Write-Output $pullRequest
#++Counting Active vs Completed Request++
Write-host "Count of active pull request:" ($pullRequest | where({$_.status -eq 'active'})).count
Write-host "Count of completed pull request:" ($pullRequest | where({$_.status -eq 'completed'})).count

#++Temporary Object to store varaible values"
$output = @()
Write-Output $output

#++Extracting Values and storing in Object++
foreach ($request in $pullRequest) {
    $customObject = new-object PSObject -property @{
          "RepositoryName" = $request.repository.name
          "Status" = $request.status
          "PullRequestId" = $request.pullRequestId
          "SourceBranch" = $request.sourceRefName
          "TargetBranch" = $request.targetRefName
          "CreatedBy" = $request.createdBy.displayName
          "Reviewers" = $request.reviewers.displayName
          "CreatedDate" = $request.creationDate
          "ClosedDate" = $request.closedDate
          "MergeStrategy" = $request.completionOptions.mergeStrategy
        }
        $output += $customObject
        }
#++Generating excel out of Object++     
$output | Select `
            RepositoryName,
            Status,
            PullRequestId,
            SourceBranch,
            TargetBranch,
            CreatedBy,
            Reviewers,
            CreatedDate,
            ClosedDate,
            MergeStrategy | export-csv -Path $Filename -NoTypeInformation
 07.01.2020 06:29
Другие вопросы по теме
Как добавить вложения к существующему рабочему элементу в Azure DevOps с помощью С#
Анализ SonarQube, показывающий покрытие кода 0
Можно ли реализовать обнаружение клонирования кода в конвейере Azure Devops Build?
Могу ли я заставить NugetRestore работать с build.cake на azure devops (TFS)
Как повторно использовать шаблоны yaml в другом командном проекте Azure DevOps?
Не удается найти модуль «../lib/tsc.js» при выпуске машинописного приложения в Azure
Как отредактировать/обновить шаг «Получить источники» по умолчанию в задаче сборки TFS?
Разверните приложение Nodejs на виртуальной машине azure linux с помощью конвейера выпуска azure
Можем ли мы обновить файл web.config с помощью WinRM — задача развертывания веб-приложения IIS
Клон Azure-DevOps показывает ссылки как предупреждения
Похожие вопросы
Если я выполню git reset --hard на своем локальном компьютере, будет ли также сброшен репозиторий на github?
Как игнорировать файлы симулятора для Xamarin в .gitignore?
Как объединить изменения рабочего элемента с ветвями, отличными от исходной?
Как получить коммит, сделанный кем-то другим в вашей ветке?
Как исправить отслеживание .vscode в gitignore
Попытка pip установить частное репо в DockerFile
Миграция с SVN на GIT Запрошенные типы аутентификации не поддерживаются
Как объединить активную ветку с другой веткой локально?
Необходимо опубликовать на сервере, чтобы отразить изменения javascript
Как запустить сборку в конвейерах Azure, отправив теги в github

C#
Почему почтальон заменяет символы в моей строке запроса на получение?
Я делаю запрос на получение через почтальона, и когда запрос достигает моего контроллера, такие символы, как «+», преобразуются в пустые места «». API написан на c#.

Мой код контроллера:

[RoutePrefix("")]
public partial class _DesifrarCusController : CaramlController, I_DesifrarCusController 
{
    [HttpGet]
    [Route("descifrarCus")]
    public IHttpActionResult GetDescifrarCusResponse( [FromUri] string cus = null ) {
        return Ok (ExecGetDescifrarCusResponse(cus));
        //return Ok();
    }
}
Кто-нибудь знает, что почтальон делает со строкой запроса?

Я попытался отправить строку между кавычками и символами ascii, но проблема не устранена.

Добавляю захват заголовков почтальона

 23.12.2022 08:57
1
8
138
4
Данный вопрос помечен как решенный
 Ответы 4
Почтальон отправляет данные из запроса, кодируя их с помощью urlencode. Это нормально. Отправка таких длинных данных из URL-адреса не является лучшей практикой. Я рекомендую использовать HttpPost и отправлять данные из тела.

 23.12.2022 09:03
 Ответ принят как подходящий
Вам нужно закодировать параметр на Postman. Сначала добавьте параметр на вкладке Params

затем выберите значение и щелкните правой кнопкой мыши выбранное значение EncodeURIComponent

то вы получите закодированный параметр

Ссылка: https://learning.postman.com/docs/sending-requests/requests/

 23.12.2022 09:28
Данные в URI должны быть UrlEncoded. Когда ваше приложение C# получает данные, оно декодирует их, заменяя знаки «плюс» пробелами (что, честно говоря, является старым стандартом).

Почтальон не сделает это за вас автоматически, но может помочь.

Если у вас есть такое значение.

Вы можете выбрать текст и щелкнуть его правой кнопкой мыши, чтобы получить возможность кодировать значение.

Это правильно закодирует значение, и оно будет получено в вашем приложении C#, как и ожидалось.

 23.12.2022 09:29
Как упоминалось в других ответах, это проблема кодирования. В качестве альтернативы вы можете использовать [FromBody], а затем просто поместить свою строку в часть запроса тела почтальона.

public IHttpActionResult GetDescifrarCusResponse( [FromBody] string cus = null ) {
        return Ok (ExecGetDescifrarCusResponse(cus));
        //return Ok();
    }
 23.12.2022 09:35
Другие вопросы по теме
С# API.Attributes.source.get вернул null
Пытаясь создать простой интерфейс, который позволяет нам получать температуру города с помощью python (+ Tkinter), я продолжаю получать KeyError: 'main'
Замените ссылку на получение html-кнопкой
Keycloak — Использование curl API для создания клиента Keycloak с ролью «view_users»
Ошибка CORS при получении данных из API функций Azure
Django rest api csv в json
Как отправить и получить изображение с помощью lumen laravel в API?
Как я могу пройти через вложенный цикл и показать данные
Экспорт всех заданий из jenkins, включая историю выполнения
SvelteKit: получение API только один раз
Похожие вопросы
Как игнорировать чувствительный к регистру тип данных Enum в аннотациях данных в .NET
Повторяющаяся ошибка: XLS0305: закрывающий тег для элемента <CollectionView> не найден, хотя у него есть закрывающий тег
Проверка подлинности Windows для приложения Blazor Server — всплывающее окно входа
С# API.Attributes.source.get вернул null
Wpf Могу ли я отображать изображения в DocumentViewer?
Как отображать имя вместо идентификатора в ASP.NET Core?
ASP.NET Core 7.0 — настройка URL-адреса приложения Kestrel
Как запретить Visual Studio 2022 автоматически добавлять пространство имен после копирования кодов из другого места
«Word обнаружил нечитаемый контент» после загрузки файла с помощью C# Web API
Почему эта конкретная команда PowerShell не работает в .NET 6 (раньше она работала в .NET 4)

TESTING
Проверить значение заголовка ответа в тестах Postman
Я хотел бы проверить значение из конкретного заголовка ответа («Местоположение») в качестве результатов теста в Postman. В документации почтальона я нашел примеры того, как проверить наличие заголовков с помощью

pm.test("Content-Type is present", function () {
   pm.response.to.have.header("Content-Type");
});
Но я ищу что-то вроде

pm.test("Location value is correct", function () {
   CODE HERE THAT CHECKS "Location" HEADER EQUALS TO SOMETHING;
});
 13.03.2018 10:58
31
0
20 602
5
Данный вопрос помечен как решенный
 Ответы 5
 Ответ принят как подходящий
Я наконец нашел решение:

pm.test("Redirect location is correct", function () {
   pm.response.to.have.header("Location");
   pm.response.to.be.header("Location", "http://example.com/expected-redirect-url");
});
 13.03.2018 11:17
Вот еще один способ получить конкретный заголовок ответа в разделе «Тесты» ...

loc = pm.response.headers.get("Location");

На всякий случай, если для последующих запросов требуется конкретная информация, например значение заголовка, вы также можете сохранить / установить ее как переменную среды, как показано ниже, и повторно использовать в дальнейшем

pm.environment.set("redirURL", loc);

var loc = null;
pm.test("Collect redirect location", function () {
   pm.response.to.have.header("Location");
   loc = pm.response.headers.get("Location");
   if (loc !== undefined) {
      pm.environment.set("redirURL", loc);
   }
});
Преимущество в том, что значением, собранным в переменной, можно управлять.

Но все зависит от ситуации. Например, вы можете захотеть извлечь и предварительно / постобработать URL-адрес перенаправления.

Например,

При запуске тестовой коллекции вы хотите собрать значение в переменной и изменить его так, чтобы оно указывало на хост: порт ложного сервера.

 15.09.2019 12:04
HeadersList имеет метод has(item, valueopt) → {Boolean}, поэтому самый простой способ проверить заголовок:

const base_url = pm.variables.get("base_url")

pm.test("Redirect to OAuth2 endpoint", () => {
    pm.expect(pm.response.headers.has("Location",`${base_url}/oauth2/`)).is.true
})
 03.07.2020 08:34
pm.test("Location value is correct", function () {
   pm.expect(pm.response.headers.get('Location')).to.eql('http://google.com');
});
 06.04.2021 14:19
Postman также поддерживает синтаксис ES6 / ES2015, что позволяет нам использовать стрелочные функции.

Итак, вот как простой тест для проверки наличия общих заголовков ответов:

pm.test("Verify response headers are present ", () => {
    pm.response.to.have.header("Date");
    pm.response.to.have.header("Content-Length");
    pm.response.to.have.header("Content-Type");
});
Конечно, вы можете проверить любые пользовательские заголовки, которые вы могли вернуть своим API.

 13.04.2021 12:32
Другие вопросы по теме
Прокрутите вниз в структуре роботов Appium
Лучшие практики тестовой учетной записи Auth0
Дженкинс: После процесса сборки загрузите Jetty и запустите тест
Получить разрешение приложения для Android
Автоматическая сборка Docker Hub зависит от другого репозитория Docker Hub
WPF Application Automation Testing Framework поддерживает встроенные веб-страницы
Тестирование 10.000 VU в JMeter за 10 секунд
Можем ли мы отправить данные на тест эспрессо
Ошибка javascript драйвера Selenium Building Internet Explorer
Вложенный цикл в pytest
Похожие вопросы
Как автоматизировать сигнал, поступающий от медицинского устройства?
Транспортир ошибок и селен: StaleElementReferenceError: ссылка на устаревший элемент: элемент не прикреплен к документу страницы
Ожидайте ошибок И другого статуса в Rspec
Лучшие практики тестовой учетной записи Auth0
Как я могу проверить, определен ли метод в классе Perl 6?
Инструментальные тесты пользовательского интерфейса с включенным proguard
Ошибка при попытке запустить тесты behat. usr / bin / env Неверный аргумент
Написание тестов для .NET API
Как написать тестовый пример для сервисов отдыха без использования сервера?
Запись сценариев мобильного приложения с помощью jmeter

JAVA
Доступ к API keycloak от почтальона
Я попытался получить доступ к API keycloak от почтальона. но он показывает 400 неверных запросов.

Я звонил api в формате ниже.

http://{hostname}:8080/auth/realms/master/protocol/openid-connect/token?username=admin&password=admin&client_id=admin-cli&grant_type=password
В заголовках я поставил content_type as application/x-www-form-urlencoded

Я получаю ответ, как показано ниже.

{
    "error": "invalid_request",
    "error_description": "Missing form parameter: grant_type"
}
Может ли кто-нибудь мне помочь. Любая помощь будет оценена по достоинству. заранее спасибо

 16.03.2018 06:06
19
1
27 162
5
Данный вопрос помечен как решенный
 Ответы 5
URL-адрес, который вы используете, предназначен для получения токена.

Запрос токена должен быть вызовом POST, запрос, который вы публикуете, - запросом GET. Ниже пример CURL о том, как запросить access_token

curl -X POST \
   http://{hostname}:8080/auth/realms/{realm}/protocol/openid-connect/token \
   -H 'Content-Type: application/x-www-form-urlencoded' \
   -d 'username=admin&password=admin&grant_type=password&client_id=admin-cli'
 16.03.2018 15:00
 Ответ принят как подходящий
Немного поздно для этого вопроса, но вы спросили о почтальоне, а не о завитке. Итак, вам нужно поместить параметры в x-www-form-urlencoded 

 20.03.2018 11:50
Вы вызываете API через POST-клиент

URL - http: // localhost: 8080 / auth / realms / Demo / protocol / openid-connect / token

Итак, здесь, в приведенном выше URL-адресе, я использую Demo в качестве своей области вместо master.

Тип содержимого - «Content-Type»: «application / x-www-form-urlencoded»

Params:

{
"client_secret" : "90ec9638-7647-4e65-ad20-b82df3341084",
"username" : "ankur",
"password" : "123456",
"grant_type" : "password",
"client_id": "app-client"
}
Установите заголовок, как показано ниже



Данные необходимо передать, как показано ниже

 04.05.2018 20:31
Вы также можете использовать CURL для получения информации

curl -L -X POST 'http://<serveraddress>/auth/realms/<realmname>/protocol/openid-connect/token' -H 'Content-Type: application/x-www-form-urlencoded' --data-urlencode 'client_id=<clientid>' --data-urlencode 'grant_type=password' --data-urlencode 'client_secret=<clientsecret>' --data-urlencode 'scope=openid' --data-urlencode 'username=<username>' --data-urlencode 'password=<password>'
 27.05.2020 09:56
Я создал коллекцию Postman, чтобы помочь нам начать работу с API Keycloak. Кто угодно может сохранить следующий json-файл и импортировать его в Postman:

{
"info": {
    "_postman_id": "07a9d691-5b1c-4869-990b-551da29590fe",
    "name": "Keycloak",
    "schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
},
"item": [
    {
        "name": "GET REALM",
        "request": {
            "method": "GET",
            "header": [],
            "url": {
                "raw": "{{KEYCLOAK_URL}}admin/realms/{{KEYCLOAK_REALM}}",
                "host": [
                    "{{KEYCLOAK_URL}}admin"
                ],
                "path": [
                    "realms",
                    "{{KEYCLOAK_REALM}}"
                ]
            }
        },
        "response": []
    },
    {
        "name": "GET USERS",
        "event": [
            {
                "listen": "prerequest",
                "script": {
                    "id": "dfda403a-35b8-4704-840d-102eddac32e6",
                    "exec": [
                        ""
                    ],
                    "type": "text/javascript"
                }
            }
        ],
        "protocolProfileBehavior": {
            "disableBodyPruning": true
        },
        "request": {
            "method": "GET",
            "header": [],
            "body": {
                "mode": "urlencoded",
                "urlencoded": []
            },
            "url": {
                "raw": "{{KEYCLOAK_URL}}admin/realms/{{KEYCLOAK_REALM}}/users",
                "host": [
                    "{{KEYCLOAK_URL}}admin"
                ],
                "path": [
                    "realms",
                    "{{KEYCLOAK_REALM}}",
                    "users"
                ]
            }
        },
        "response": []
    }
],
"auth": {
    "type": "bearer",
    "bearer": [
        {
            "key": "token",
            "value": "{{KEYCLOAK_TOKEN}}",
            "type": "string"
        }
    ]
},
"event": [
    {
        "listen": "prerequest",
        "script": {
            "id": "c3ae5df7-b1e0-4af1-988b-c592df3fd98e",
            "type": "text/javascript",
            "exec": [
                "const echoPostRequest = {",
                "  url: pm.environment.get('KEYCLOAK_URL') + 'realms/master/protocol/openid-connect/token',",
                "  method: 'POST',",
                "  header: 'Content-Type:application/x-www-form-urlencoded',",
                "  body: {",
                "    mode: 'urlencoded',",
                "    urlencoded: [",
                "        {key:'username', value:pm.environment.get('KEYCLOAK_USER')}, ",
                "        {key:'password', value:pm.environment.get('KEYCLOAK_PASSWORD')}, ",
                "        {key:'client_id', value:'admin-cli'}, ",
                "        {key:'grant_type', value:'password'}",
                "    ]",
                "  }",
                "};",
                "",
                "var getToken = true;",
                "",
                "if (!pm.environment.get('KEYCLOAK_TOKEN_EXPIRY') || ",
                "    !pm.environment.get('KEYCLOAK_TOKEN')) {",
                "    console.info('Token or expiry date are missing')",
                "} else if (pm.environment.get('KEYCLOAK_TOKEN_EXPIRY') <= (new Date()).getTime()) {",
                "    console.info('Token is expired')",
                "} else {",
                "    getToken = false;",
                "    console.info('Token and expiry date are all good');",
                "}",
                "",
                "if (getToken === true) {",
                "    pm.sendRequest(echoPostRequest, function (err, res) {",
                "    console.info(err ? err : res.json());",
                "        if (err === null) {",
                "            console.info('Saving the token and expiry date')",
                "            var responseJson = res.json();",
                "            pm.environment.set('KEYCLOAK_TOKEN', responseJson.access_token)",
                "    ",
                "            var expiryDate = new Date();",
                "            expiryDate.setSeconds(expiryDate.getSeconds() + responseJson.expires_in);",
                "            pm.environment.set('KEYCLOAK_TOKEN_EXPIRY', expiryDate.getTime());",
                "        }",
                "    });",
                "}"
            ]
        }
    },
    {
        "listen": "test",
        "script": {
            "id": "fdb69bb4-14a5-43b4-97e2-af866643e390",
            "type": "text/javascript",
            "exec": [
                ""
            ]
        }
    }
],
"variable": [
    {
        "id": "698bbb41-d3f9-47f8-9848-4a1c32f9cca4",
        "key": "token",
        "value": ""
    }
],
"protocolProfileBehavior": {}}
И я создал предварительный сценарий, чтобы получить токен и настроить его по запросу, как вы можете видеть на изображении ниже: 

Вы должны создать следующие переменные среды: KEYCLOAK_USER, KEYCLOAK_PASSWORD и KEYCLOAK_URL, где URL-адрес должен быть https: // {ваша установка keycloak} / auth /

 31.07.2020 04:28
Другие вопросы по теме
Как проверить наличие нескольких допустимых кодов статуса в Postman?
Как получить результаты по запросу Jira Rest API?
Отсутствие ГРАНИЦЫ из заголовка при использовании почтальона для загрузки файла в ядро ​​asp.net
Запросить токен доступа в Postman для приложения-функции Azure, защищенного Azure AD B2C
Объект json без типа после размещения на сервере Apache
Я не могу понять, почему мой запрос SOAP не работает
Как устранить ошибку «invalidMockError»?
TypeError: задача не является функцией
Когда я использую GET на своем веб-сайте, это нормально, но когда я использую Postman, нет результата
Недопустимая полезная нагрузка сообщения JSON в Post Man
Похожие вопросы
Spring Boot 2 + OAuth2: настройка обмена кодом аутентификации для токена
Как получить другой цвет при каждом нажатии?
Как пропустить элементы в цикле jsp?
Невозможно запустить приложение springboot, возникает исключение OptimisticLockException
Получить элемент по идентификатору в раздуваемом LinearLayout
Время строки, переданное из переменной класса AsyncTask, не преобразуется в объект даты в android, но работает нормально, когда я жестко кодирую жало
Выпуск ArrayListName.add (новый ArrayListName (.......));
Как реализовать MouseListener для объекта, не относящегося к графическому интерфейсу пользователя, в определенной области?
Maven link скомпилированные классы вместо jar
Создание универсальной матрицы Java

POSTMAN
Жетон на предъявителя в почтальоне
Я хочу установить Bearer Token в почтальоне

По какой-то причине у моего почтальона нет опции Bearer Token в раскрывающемся списке Auth

Что я могу сделать в Postman, чтобы показать эту опцию? Есть идеи, где я могу это найти? С Уважением.

 12.04.2018 01:01
48
2
108 855
5
Данный вопрос помечен как решенный
 Ответы 5
 Ответ принят как подходящий
Я не уверен, относятся ли эти 2 изображения к одному и тому же приложению Postman или нет, но функция Bearer Token появилась только в версии 5.3.0.

Вы можете просто вручную добавить заголовок запроса Authorization со значением Bearer <my_token>.

Это просто - фиктивное значение для демонстрационных целей - фактическое значение должно быть Bearer + your token value.

Auth Header

Это должно работать без необходимости использовать эту опцию из раскрывающегося списка. Это будет только автоматически копировать то, что вы в любом случае будете делать вручную.

 12.04.2018 03:22
Я использую Postman v7.0.9.

Добавьте переменную accessToken в переменную окружения почтальона.



Затем используйте вкладку «Тесты», чтобы написать javascript.



let jsonData = pm.response.json();
let token = jsonData.accessToken;
pm.environment.set('accessToken', token);
Если вы используете текущую версию, тип «Bearer Token» находится на вкладке «Авторизация».



 08.05.2019 07:58
Я столкнулся с этой проблемой очень давно. И я решил эту проблему, установив версию Desktop и снова войдя в систему с учетной записью Google. После этого Жетон на предъявителя виден у почтальона!

В моем случае я использовал Windows 8.1 и 64 бит.

здесь можно получить настольную версию

 01.07.2019 06:08
У вас есть несколько вариантов для добавления типа авторизации:

1) Нажмите заголовки Go и добавьте => ключ: Значение авторизации: носитель

2) Создать коллекцию> выбрать авторизацию

3) щелкните код и добавьте заголовки



headers:
{
  'Postman-Token': '55..',
  'cache-control': 'no-cache',
  'Authorization': 'Bearer eyJhbG...'
}
 01.07.2019 13:44
Февраль, 2021 - Следующие сработали для меня
В типе выберите «Жетон на предъявителя».

Введите токен в поле, как показано на скриншоте ниже:



 06.02.2021 21:41
Другие вопросы по теме
Тест почтальона выдает ошибку «TypeError: невозможно прочитать свойство get of undefined»
Отправка электронной почты (Office 365) с помощью почтальона без входа в систему из браузера
Обычная проверка подлинности почтальона без имени пользователя и пароля
Использование переменных Postman в командной среде
Тестирование API Postman для моих тестовых случаев
Как обработать "Недействительную заключительную цитату в строке 2; найдено" \ "" вместо разделителя "," "в newman
Ошибка отсутствия содержимого HTTP 204 в POST-запросе ASP.NET CORE
Проверка ответа JSON на основе данных CSV
Выгрузка в хранилище BLOB-объектов Azure с дополнительными параметрами в веб-API
Не удалось получить значение json в веб-API ядра asp.net
Похожие вопросы
AWS CLI - как сгенерировать токены безопасности для когнитивного пользователя
Newman.run вызывает увеличение heapUsed, но не освобождает память при повторении в итерациях
Почтальон: упорядочивание полей в запросе данных формы
Подкаталог newman run коллекции
Python3 правильно запрашивает публикацию, но ничего не получает (но в браузере все в порядке)
Исключение ошибки: косвенная модификация перегруженного свойства laravel
Запустите newman в локальной сборке вместо развертывания в тестовой среде с помощью TeamCity
Есть ли способ показать прошедшее время обработки запроса в почтальоне?
IOS: как вызвать метод публикации, который содержит некоторые параметры и файл (вложение)?
Уведомление Firebase Push отправлено, но onMessage () не срабатывает

JAVASCRIPT
GET против POST для получения HTML-страницы
Могу правильно получить html-страницу с помощью почтальона GET, но получаю ошибку при загрузке html-страницы с помощью POST с использованием почтальона Детали ошибки: 404 не найдено 404 не найдено

У нас есть код внешнего интерфейса на html / JS и код внутреннего интерфейса на nodeJS

 16.07.2018 09:13
0
0
163
5
Данный вопрос помечен как решенный
 Ответы 5
Хорошо, если данные извлекаются только с помощью метода GET, и если он выдает ошибку 404, это означает, что вы, возможно, не создали какой-либо маршрут с помощью метода POST. Один и тот же маршрут с другим методом рассматривается как другой маршрут, например

1) ПОЛУЧИТЬ http://example.com/fetch

2) POST http://example.com/fetch

2 разных маршрута. Вам нужно определить каждый отдельно

 16.07.2018 09:17
Я считаю, что для данных получение предпочтительным методом является GET, а POST следует использовать для обновления ресурсов на стороне сервера, а не для их получения. Если POST возвращает 404, возможно, у вас не настроен маршрут POST или доступ POST может быть отключен сам по себе в конфигурации вашего сервера.

 16.07.2018 09:19
Обычно метод «GET» используется при запросе html-страницы, например, все браузеры используют «GET» для запроса целевой страницы любого URL-адреса.

Публикация обычно используется для отправки данных и входа в систему.

 16.07.2018 09:19
 Ответ принят как подходящий
Это может произойти по многим причинам. Проверьте свой импорт, маршруты и URL-адрес запроса. Хотя это не способ получить ваш html через метод POST. Использование метода GET - правильный путь.

 const express = require("express");
 const router = express.Router();
     router.post("/", (req, res, next) => {
     res.render("index", { title: "Express" });
     console.info(req);
     });
 module.exports = router;


 16.07.2018 09:20
You need to create a route for POST requests to get the HTML.

Я предполагаю, что вы должны использовать какой-то фреймворк, например, экспресс-маршрутизатор, для маршрутизации ваших страниц. В коде вашего маршрутизатора у вас будет что-то вроде

app.get('/myHtmlPage', function(req, res) { // some code })

так что вы возвращаете свою страницу для выполнения запросов GET. Вам нужно создать похожий маршрут, например app.post('/myHtmlPage', function(req, res) { // some code })
чтобы получить ту же страницу для запросов POST.

 16.07.2018 09:29
Другие вопросы по теме
Как отобразить величину (значение) каждого столбца в диаграмме URL-адресов изображений Google
Ошибка установки npm в электронном приложении с узлом: команда не найдена
Не удается сохранить вложенный массив JSON в MongoDB с помощью Mongoose
Макет статических методов es6 классы для тестирования
Отобразить 2 две записи таблицы в nodejs
Как получить IP-адрес внутри cors Dynamic Origin?
Loopback - скачать pdf удаленным методом
Заполнить группу выбора html с помощью внешнего json
Как я могу создать rest API с помощью nodejs и ограничить доступ пользователей с помощью IP-адреса или домена из белого списка?
Проблемы с трансляцией сообщений с Socket.io
Похожие вопросы
Переменная не назначается внутри обещания
Передайте класс в качестве аргумента для page.evaluate в Puppeteer
Как изменить параметр JSON в api с помощью Javascript?
Кнопка входа в Google не отображается в React
Вставьте json в столбец json
Окно сообщение Событие срабатывает более одного раза
Как передать параметры из веб-пакета в код?
ReCaptcha v2 не загружается в навигации vue-router
Фоновая служба в AngularJS
Как запретить пользователям закрывать окно в Oracle APEX Builder

JAVASCRIPT
Как получить ключ и значение из объекта JSON в Javascript (почтальон)
У меня есть такой объект JSON, я хочу получить доступ к элементам массива списка с ключом и значением в почтальоне.

{
    "data": {
        "total": 1,
        "list": [
            {
                "id": 53,
                "name": "Sonu",
                "mobileNo": "6543213456",
                "address": "Greeny Pathway",
                "city": "NewYork",
                "mode": "Weekly",
                "duration": "15",
                "qty": null

            }
        ]
    },
    "success": true,
    "message": ""
}
Как разделить его как ключ и значение в Javascript, например,

Key:   id,name,mobileNo,address,city,..
Value: 53,Sonu,6543213456,Greeny Pathway,NewYork,....
 30.10.2018 05:20
2
2
19 762
5
Данный вопрос помечен как решенный
 Ответы 5
вы можете использовать следующие коды:

const keys = Object.keys(jsonObject);
const values = Object.values(jsonObject);
Но ваш объект JSON глубокий, вы должны сгладить его, а затем использовать keys и values из Object, чтобы разделить их.

 30.10.2018 05:25
Вы можете использовать ключ и значение отдельно в массиве.

var a = {
    "data": {
        "total": 1,
        "list": [
            {
                "id": 53,
                "name": "Sonu",
                "mobileNo": "6543213456",
                "address": "Greeny Pathway",
                "city": "NewYork",
                "mode": "Weekly",
                "duration": "15",
                "qty": null,

            }
        ]
    },
    "success": true,
    "message": ""
}

var keyval = Object.keys(a.data.list[0])
console.info(keyval)
var values = Object.values(a.data.list[0])
console.info(values)
 30.10.2018 05:27
Объекты JSON - это пара ключ-значение, вы не можете получить ключи и значения в форме объекта по своему желанию, но вы можете получить оба в виде массивов из этого кода.

var key = []
var values = []
list.map(function(l){  keys = Object.getOwnPropertyNames(l); 
keys.map(function(key) {values.push(l[key]);})})
 30.10.2018 05:29
Сначала удалите запятую из строки: "qty": null,, иначе это вызовет ошибку при разборе json.

var resultJSON = `{
    "data": {
        "total": 1,
        "list": [
            {
                "id": 53,
                "name": "Sonu",
                "mobileNo": "6543213456",
                "address": "Greeny Pathway",
                "city": "NewYork",
                "mode": "Weekly",
                "duration": "15",
                "qty": null

            }
        ]
    },
    "success": true,
    "message": ""
}`;


var result = $.parseJSON(resultJSON);

var myList = result.data.list[0];

$.each(myList, function(k, v) {
    //display the key and value pair
    alert(k + ' is ' + v);
});
<script src = "https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
 30.10.2018 06:16
 Ответ принят как подходящий
Наконец-то это сработало для меня! (В Postman Script)

var resdata = JSON.parse(responseBody);
console.info(resdata);

key = Object.keys(resdata.data.list[0]);
console.info(key);

value =Object.values(resdata.data.list[0]);
console.info(value);
 30.10.2018 08:35
Другие вопросы по теме
JSONSerialization создает неверный объект JSON. Быстрый
Python: как установить значение из JSON в качестве индекса в списке?
Ошибка записи JSON в файл, дополнительные данные: строка 1, столбец 2347 (char 2346)
Как распечатать значения из файла JSON
Угловая сериализация даты с определенным форматом в запросе POST
Как отключить кеширование в Swift
Java / Jackson - «Нераспознанный токен», передающий параметр объекта JSON
Преобразовать два массива в объект - JavaScript
Нужно ли строго определять тип значения JSON?
Javascript - добавление объекта в файл JSON
Похожие вопросы
Передать переменную C# в кнопку HTML
ИИ следит за препятствием и избегает столкновения с ним
Почему мой дочерний компонент не отображает реквизиты?
Регулярное выражение для соответствия дате в формате ММ-ДД-ГГГГ ЧЧ: мм: СС
«TypeError: невозможно прочитать свойство 'add' of undefined» в созданном жизненном цикле (Vue, buefy)
Несколько модальных окон с одним и тем же скриптом
Браузер Firefox медленно загружает приложение AngularJS
Реакция: попытка передать массив функциональному компоненту, но он не отобразит
Разница в использовании async / await и promises?
Asp.net mvc всплывающее модальное чтение из строки таблицы

JAVASCRIPT
Как сравнить два объекта JSON, исключая поля, указанные в отдельном массиве? (Postman Script)
У меня есть два объекта JSON, один из которых вводится, а другой выводится, я хочу проверить, совпадает ли вывод с вводом, который я указал на вводе вместе с ключом и значением, также он не должен сравниваться для полей, которые я указал в 'exclude ' множество.

Json Object1:(input)
{
    "name": "Sonu",
    "city": "NewYork",
    "Amount": 5000,
    "mode": "Weekly",
    "duration": "15",
    "createdCanvasAgentId": 2,
    "isActive": 1
}
Json Object2:(output)
{
    "id": 53,
    "name": "Sonu",
    "city": "NewYork",
    "Amount": 5000,
    "mode": "Weekly",
    "duration": "15",
    "qty": null,
    "createdCanvasAgentId": 2,
    "isActive": true
}
Поля, которыми следует пренебречь при сравнении, находятся в массиве exclude

exclude = {"id","qty","isActive"}
Фрагмент кода выглядит следующим образом:

//Input 
var en_val = pm.environment.get("my_array");
console.info(en_val);

keysave = Object.keys(JSON.parse(en_val));
console.info(keysave);

valuesave=Object.values(JSON.parse(en_val));
console.info(valuesave);

// Output
var resdata = JSON.parse(responseBody);
console.info(resdata);

keylist = Object.keys(resdata.data.list[0]);
console.info(keylist);

valuelist =Object.values(resdata.data.list[0]);
console.info(valuelist);

// exclude contains array of values that need not be compared
var ex=pm.environment.get("exclude");
var excludeKeys = Object.keys(JSON.parse(ex));
 31.10.2018 07:19
1
0
4 125
5
Данный вопрос помечен как решенный
 Ответы 5
Вы можете воспользоваться вторым аргументом в JSON.parse(text, reviver)

reviver - если функция, это определяет, как значение, первоначально созданное в результате синтаксического анализа, преобразуется перед возвратом.

Также вам следует воспользоваться встроенными помощниками lodash.

Вот полный пример теста в Postman

const original = {
    city: 'New York'
}

const json = '{"id":10,"city":"New York","qty":5}'
const exclude = ['id', 'qty']
const reviverFilter = (k, v) => exclude.includes(k) ? undefined : v
const expected = JSON.parse(json, reviverFilter)

pm.test('Equals', function() {
    pm.expect(_.isEqual(original, expected)).to.be.true
});
 31.10.2018 07:39
Может быть, вы можете использовать метод _.isEqual из lodash?

Этот метод _.isEqual вернет истину, если оба они одинаковы. Что касается исключающей части, я считаю, что вы можете передать функцию в качестве третьего параметра во время вызова, который эта функция будет выполнять проверку, чтобы игнорировать свойство, которое вы хотите игнорировать. И я предлагаю вам использовать _.includes для обработки проверки внутри функции. Надеюсь, это поможет..

Спасибо.

[https://lodash.com/docs/4.17.10#isEqual] [https://lodash.com/docs/4.17.10#includes]

 31.10.2018 07:40
Пользовательская реализация сравнения двух объектов с ключами для исключения.

var b = {
    "id": 51,
    "name": "Sonsssu",
    "city": "NewYork",
    "Amount": 5000,
    "mode": "Weekly",
    "duration": "15",
    "qty": null,
    "createdCanvasAgentId": 2,
    "isActive": true
};
var a = {
    "name": "Sonu",
    "city": "NewYork",
    "Amount": 5000,
    "mode": "Weekly",
    "duration": "15",
    "createdCanvasAgentId": 2,
    "isActive": 1
};
var exclude = ["id","qty","isActive"];

function compareObject(first, second,excludeKeys) {
    var excludes = {};
    var isSame = true;
    if (excludeKeys) {
        excludeKeys.forEach(function (key) {
            if (!excludes.hasOwnProperty(key)) {
                excludes[key] = 1;
            }
        });
    }
    Object.keys(first).forEach(function (key) {
        if (!excludes.hasOwnProperty(key)){
            if (first[key] !== second[key]){
                isSame = false;
            }
        }
    });
    return isSame;
}

console.info(compareObject(a,b.exclude));
 31.10.2018 08:19
Вы должны написать функцию для преобразования исходных объектов во временные объекты, а затем сравнить их.

function convertToObjectWithExcludeKeys(orginalObject, excludeKeys){
    var newObj = {};
    Object.keys(orginalObject).map(key => {
      if (excludeKeys.indexOf(key) < 0){
        newObj[key] = orginalObject[key];  
      }

    })
    return newObj;
}


var b = {
    "id": 51,
    "name": "Sonsssu",
    "city": "NewYork",
    "Amount": 5000,
    "mode": "Weekly",
    "duration": "15",
    "qty": null,
    "createdCanvasAgentId": 2,
    "isActive": true
};
var a = {
    "name": "Sonu",
    "city": "NewYork",
    "Amount": 5000,
    "mode": "Weekly",
    "duration": "15",
    "createdCanvasAgentId": 2,
    "isActive": 1
};

var excludeKeys = ["id","qty","isActive"];

//Convert original objects to temporary objects with exclude keys
var tmpA = convertToObjectWithExcludeKeys(a, excludeKeys);
var tmpB = convertToObjectWithExcludeKeys(b, excludeKeys);

console.info("tmpA", tmpA);
console.info("tmpB", tmpB);

//Then compare them .....
 31.10.2018 08:55
 Ответ принят как подходящий
Json Object 1: keysave,valuesave
Json Object 2: keylist,valuelist
//values that aren't need to be checked
exclude = ["id","qty","isActive"]
Код:

 var ex1=pm.environment.get("exclude");
    var resp=[];
    for (var i in keysave)
     {    
        console.info(keysave[i]);    
        if (ex1.indexOf(keysave[i]) < 0)   
        {           
            var flag =0;        
            for (var j in keylist) 
            {       
                if (keylist[j] === keysave[i] && valuelist[j] === valuesave[i])
                {           
                    flag = 0;           
                    break;      
                }       
                else 
                {                       
                    flag = 1;

                }   
            }           
            if (flag === 0)
            {       
                console.info("Matched value "+keysave[i]);   
            }   
            else 
            {       
                console.info("None matched value "+keysave[i]);  
                resp.push(keysave[i])       
                console.info(resp);  
            }       
        }
    }
    if (resp.length > 0)
    {    
        tests[resp] = false;
    }
    else
    {    
        tests['Both JSON are Equal'] = true;
    }
 05.11.2018 07:27
Другие вопросы по теме
Найдите путь к элементу JSON с динамическим ключом с помощью Play JSON
Как показать предупреждающее сообщение при неверных учетных данных для входа в React Native?
Отправить массив объекта в JSON в angular
Разобрать массив Json с помощью скриптов Google
Как выбрать переключатель с помощью ngFor внутри каждой строки с двумя переключателями
Условие между строкой и строкой json
Как получить доступ к jsonarray с помощью модификации
Как отправлять объекты JavaScript с клиентской стороны и как получать и анализировать их в Spring Boot Back-end?
Как мы можем найти ожидаемую строку таблицы при преобразовании данных json в таблицу данных
Десериализация JSON с использованием JObject и LINQ
Похожие вопросы
Угловой: переключатель темного и светлого режима Bootstrap 4
Jbox не отображает содержимое, кнопка подтверждения и кнопка отмены
Выберите вариант, флажок, радиотеги, если они пустые
Как удалить предупреждение «Нет сети» в моем PWA на iOS
Почему моя функция не отправляет переменные в ajax?
Проблема при создании компилятора Antlr4 в JavaScript: неожиданный результат при преобразовании JavaScript в Python
Добавить параметры в (colspos и rowspos) в скрытое поле в jqgrid
Javascript - неопределенный массив значений поля ввода при нажатии Enter
Сравните 24-часовой формат времени в moment.js
Конвертировать временные интервалы из API в выбранный часовой пояс

API
GraphQL API - какой-нибудь инструмент автоматизации для его тестирования?
Я хочу протестировать GraphQL API. На данный момент я использую GraphiQL, но ищу любой автоматизированный инструмент ... Похоже, что SOAPUI не поддерживает тестирование GraphQL.

Любые идеи?

Спасибо.

 25.11.2018 09:40
5
2
8 150
5
Данный вопрос помечен как решенный
 Ответы 5
Что конкретно вы хотите протестировать?

У нас есть ряд автоматических тестов для проверки работоспособности, которые мы запускаем при каждой сборке:

Схема действительна (согласно graphql-js)? Это может быть удивительно легко испортить, если ваша реализация позволяет, например, несколько определений одного и того же типа или любое другое количество тонких ошибок.

Это критическое изменение схемы? Если это так, прервите сборку, если нет специального сообщения git commit, подтверждающего и принимающего его. С graphql-js это довольно просто - запустить запрос самоанализа для текущего производства, запустить его для текущей сборки и использовать встроенную функцию findBreakingChanges.

Обратите внимание, что тесты graphql-js не означают, что ваш сервер должен быть написан на JS - наш написан на ReasonML с использованием ocaml-graphql-сервер, а затем при сборке мы используем набор тестов узла, чтобы поразить его, как это сделал бы любой другой клиент.

Наконец, помимо этого, у нас есть несколько тестов, которые запускают запросы / мутации для сквозного тестирования сервера API. В целом, до сих пор это было довольно устойчиво к регрессу.

И имейте в виду, что вы можете просто подключиться к серверу GraphQL с помощью любого http-клиента, в вашем наборе тестов нет имеют для поддержки GraphQL. Я бы порекомендовал этот маршрут помимо проверок работоспособности, о которых я упоминал выше.

 25.11.2018 10:09
 Ответ принят как подходящий
У вас в основном есть несколько вариантов, которые я видел:

Платформа Apollo GraphQL. Он предоставляет вам полноценную телеметрию на ваших индивидуальных преобразователях и может интегрироваться с VS Code, чтобы ваши разработчики знали, насколько дорого обходится их запрос в режиме реального времени. Но ты за это заплатишь.

Инструмент наблюдения, такой как Медовая расческа или DataDog, тоже платный.

Напишите свой. Для достаточно простого случая использования это может иметь смысл, но если вы ищете богатый набор функций, вероятно, имеет смысл покупать, а не создавать.

 16.12.2018 05:35
Я использую SoapUI 5.4.0 (версия сообщества), и у меня нет проблем с тестированием запросов GraphQL. Считайте их запросом на отдых и добавляйте заголовок, например Тип содержимого: приложение / graphql

см. изображение для всех деталей.

SoapUI GraphQL example

 29.05.2019 06:15
Karate - единственный инструмент с открытым исходным кодом, который объединяет автоматизацию тестирования API, имитацию и тестирование производительности в единую унифицированную структуру.

https://github.com/intuit/karate

 18.06.2019 11:06
Для автоматизированного тестирования есть https://github.com/ohler55/graphql-test-tool/gtt. Он написан на go, но как отдельное приложение его можно использовать с любым сервером GraphQL. Мы используем его для модульного тестирования и CI.

 08.01.2020 20:44
Другие вопросы по теме
Протестируйте login_view, передав запрос с помощью набора запросов
Jmeter: контролируйте количество запросов, выполняемых одновременно
Тест на должности - функция
Могу ли я сделать заготовку для ряда результатов? "sinon.stub (). callsFake (() => {})" AssertionError: NaN
Wrapper.children (). debug () и .html () в Enzyme / Karma возвращают разное содержимое
Как выполнить интеграционный тест на моей конечной точке веб-API Asp.Net, куда я загружаю файл?
URL-адрес перенаправления с удаленной отладкой Chrome на устройствах Android
Абстрактные ключевые слова в Robot Framework
Есть ли способ проверить, содержит ли шаблон фляги ссылку?
Angular модульное тестирование асинхронных и проблем с синхронизацией
Похожие вопросы
Как лучше всего объединить методы GET и POST в api промежуточного программного обеспечения?
Нет модуля с именем googleapiclient при попытке импортировать данные Google Таблиц
Решение проблемы с вызовом API в React JS (ошибка 400)
Получить поле из API на brightspace
Аксиос поставить не происходит бросать запрещено
Доступ запрещен, VKApi, groups.getRequests
Получение ответа api этого твиттера {"errors": [{"code": 215, "message": "Bad Authentication data."}]}, Пожалуйста
Получить значение <td> с помощью Ajax
Преобразование полезной нагрузки из requestjs перед отправкой клиенту
Как использовать строку пользовательского агента с API?

С# ошибка основного носителя asp.net = "invalid_token"
Может кто-нибудь, пожалуйста, помогите мне решить эту проблему? Я тестирую API с помощью Postman

Я следую учебнику по ядру asp.net.

И сейчас я занимаюсь его аутентификацией.

Я не очень понимаю, в чем причина ошибки.

В учебнике у него есть логин, и он возвращает токен.

Это код для входа. Который работает. Я знаю, что это работает, потому что возвращает токен. Я также пытался использовать неверный логин. и он возвращает 401 Unauthorized Но когда я использую правильные учетные данные для входа, которые находятся в базе данных. Он возвращает токен

[HttpPost("login")]
public async Task<IActionResult> Login(UserForLoginDto userForLoginDto)
    {
        var userFromRepo = await _repo.Login(userForLoginDto.Username.ToLower(), userForLoginDto.Password);

        if (userFromRepo == null)
            return Unauthorized();

        var claims = new[]
        {
            new Claim(ClaimTypes.NameIdentifier, userFromRepo.Id.ToString()),
            new Claim(ClaimTypes.Name, userFromRepo.Username)
        };

        var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config.GetSection("AppSettings:Token").Value));

        var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256Signature);

        var tokenDescriptor = new SecurityTokenDescriptor
        {
            Subject = new ClaimsIdentity(claims),
            Expires = DateTime.Now.AddDays(1),
            SigningCredentials = creds
        };

        var tokenHandler = new JwtSecurityTokenHandler();

        var token = tokenHandler.CreateToken(tokenDescriptor);

        return Ok(new {
            token = tokenHandler.WriteToken(token)
        });
}
Затем следующая часть руководства — ограничить доступ. Пользователь должен сначала войти в систему, чтобы просмотреть содержимое.

Ниже приведен код

services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
            .AddJwtBearer(options =>{
                options.TokenValidationParameters = new TokenValidationParameters{
                    ValidateIssuerSigningKey = true,
                    IssuerSigningKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(Configuration.GetSection("AppSettings:Token").Value)),
                    ValidateIssuer = false
                };
            });
Затем включил

app.UseAuthentication();
Я также включил [Authorize] в контроллере значений.

[Authorize]
[Route("api/[controller]")]
[ApiController]
public class ValuesController : ControllerBase
Это скрин почтальона

С# ошибка основного носителя asp.net = &quot;invalid_token&quot;

Я следовал учебнику. Я вставляю токен, полученный при входе в систему. Но это дает мне ошибку

WWW-Authenticate →Bearer error = "invalid_token", error_description = "The audience is invalid"
Почему мне выдает ошибку invalid token если токен от логина? Как я могу это исправить? Я искал некоторое время, но я не могу решить это сам. Спасибо.

 28.01.2019 06:11
14
5
25 939
5
 Ответы 5
Недавно я сделал нечто подобное, используя токен JWT, который отлично работает с Postman. Мой подход к созданию токена JWT немного отличается, В вашем случае проблема может быть связана с тем, что вы не указалиэмитент и аудитория.

Можете ли вы попробовать следующее.

   var claims = new List<Claim>
    {
        new Claim(ClaimTypes.WindowsAccountName, this.User.Identity.Name)
    };
    Claim userIdClaim = new Claim("UserId", "12345");
    claims.Add(userIdClaim);
    //Avoid Replay attack
    claims.Add(new Claim(ClaimTypes.GivenName, "User GivenName"));
    claims.Add(new Claim(ClaimTypes.Surname, "UserSurname"));
    claims.Add(new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()));

    string[] roles = "Role1,Role2,Role23".Split(",");

    foreach (string role in roles)
    {
        claims.Add(new Claim(role, ""));
    }

    var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("veryVerySecretKey"));
    var key1 = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("ASEFRFDDWSDRGYHF")); 
    var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

    var encryptingCreds = new EncryptingCredentials(key1, SecurityAlgorithms.Aes128KW, SecurityAlgorithms.Aes128CbcHmacSha256);
    var handler = new JwtSecurityTokenHandler();
    var t = handler.CreateJwtSecurityToken();
    var token = handler.CreateJwtSecurityToken("http://localhost:61768/", "http://localhost:61768/"
        , new ClaimsIdentity(claims)
        , expires: DateTime.Now.AddMinutes(1)
        , signingCredentials: creds
        , encryptingCredentials :encryptingCreds
        , notBefore:DateTime.Now
        ,  issuedAt:DateTime.Now);
    return new JwtSecurityTokenHandler().WriteToken(token);
А мой ConfigureServices выглядит так

services.AddAuthentication()
            .AddJwtBearer(options =>
             {
                 options.RequireHttpsMetadata = false;
                 options.SaveToken = true;
                 options.TokenValidationParameters = new TokenValidationParameters
                 {
                     ValidateIssuer = true,
                     ValidateAudience = true,
                     ValidateLifetime = true,
                     ValidateIssuerSigningKey = true,
                     ValidIssuer = "http://localhost:61768/",
                     ValidAudience = "http://localhost:61768/",
                     TokenDecryptionKey= new SymmetricSecurityKey(Encoding.UTF8.GetBytes("ASEFRFDDWSDRGYHF")),
                     IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("veryVerySecretKey")),
                     ClockSkew = TimeSpan.Zero
                 };
             });
Примечание. Измените эмитента и ключ соответствующим образом.

 28.01.2019 06:31
Ошибка, которую вы получили, связана с аудиторией, вы должны либо включить ValidAudience, либо установить для ValidateAudience значение false в своих параметрах.

services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
        .AddJwtBearer(options => {
            options.TokenValidationParameters = new TokenValidationParameters{
            ValidateIssuerSigningKey = true,
            IssuerSigningKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(Configuration.GetSection("AppSettings:Token").Value)),
            ValidateIssuer = false,
            ValidateAudience = false
          };
        });
 28.01.2019 07:25
У меня такая же проблема. Обратите внимание, что порядок в функции Настройка.
app.usemvc (); должен быть внизу. Нравится:

public void Configure(IApplicationBuilder app, IHostingEnvironment env)
{
    if (env.IsDevelopment())
    {
        app.UseDeveloperExceptionPage();
    }

    app.UseAuthentication();
    app.UseMvc();
}
 27.10.2019 21:27
Ответ Ram Kumaran (https://stackoverflow.com/a/54396550/8210755) работает для меня. Это могло произойти после обновления до net core 3.1 или после обновления IdentityServer до 4.3.1.

Я заменил закомментированный код на AddJwtBearer

 services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
            //.AddIdentityServerAuthentication(options =>
            //{
            //    options.Authority = Configuration.GetSection("IdentityServerUrl").Value;
            //    options.RequireHttpsMetadata = false;
            //    options.ApiName = "api1";
            //});
            .AddJwtBearer(o =>
             {
                 o.Authority = Configuration.GetSection("IdentityServerUrl").Value;
                 o.RequireHttpsMetadata = false;
                 o.TokenValidationParameters = new Microsoft.IdentityModel.Tokens.TokenValidationParameters
                 {
                     ValidateAudience = false
                 };
             });
Полезная ссылка на документ: https://docs.identityserver.io/_/downloads/en/latest/pdf/ Использование ValidateAudience в ложном доказательстве концепции

 27.07.2020 08:01
У меня была аналогичная проблема, когда .net Core 3 API не аутентифицировал свои токены.

Решение для меня было в Startup/Configure(), чтобы поместить app.UseAuthentication() перед app.UseAuthorization().

 public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
 {
    app.UseAuthentication();

    app.UseAuthorization();
 }
 08.08.2020 11:30
Другие вопросы по теме
Используйте одну страницу макета в нескольких основных проектах asp.net
.NET Core создает ненулевое ограничение FK с помощью IdentityUser
JQuery недоступен в представлении Razor ASP.NET Core 2.2
Форма PartialViewResult не будет очищать значения результата ajax - ASP.NET Core Razor С#
Ошибка в ответе от метода PUT с использованием сжатия
HttpClient, вызывающий API, не проходит аутентификацию cookie
Поведение Docker для ядра C# (тип Linux) — связанное со сборкой образа
Мой сайт выходит из системы каждый раз, когда я возвращаюсь
Записи NLog в SQL Server в .NET Core 2.2
Как генерировать ссылки с помощью помощников тегов привязки для маршрутов не по умолчанию?
Похожие вопросы
Как читать XML-документ и добавлять его значения в поля со списком и текстовые поля
.NET Core создает ненулевое ограничение FK с помощью IdentityUser
Отсутствует аннотация OData для ответа Microsoft.AspNet.OData
Как получить доступ к экземплярам объектов из другого класса?
Как заархивировать только файл и папку по пути в С#
Как скопировать содержимое открытого экземпляра блокнота?
Получить данные из SQL Server на основе столбца данных в datatable Epplus С#
С# MVC Core Печать файла Excel с использованием Process(), PDF работает нормально, но Excel продолжает загружаться
Проблемы с обменом переменными между файлами в С#
Межобъектное взаимодействие Unity между сценами: КАК?

JWT
Как декодировать токен jwt в POSTMAN?
Я хочу декодировать токен jwt, который я получил с помощью Postman, и реализовать его в REST API. Как мне это сделать? Я видел, как люди выкладывали код для декодирования токена jwt (ссылка: Как декодировать токен jwt в javascript без использования библиотеки?), но я не понимаю, как это сделать в почтальоне? Какой URL нужен для декодирования jwt? Какие заголовки, авторизация нужна?

 14.12.2020 06:46
5
2
6 598
5
Данный вопрос помечен как решенный
 Ответы 5
https://jwt.io/ если хотите, которые могут решить вашу проблему, вы также можете скачать некоторые плагины, если вы используете любую IDE

 14.12.2020 07:01
 Ответ принят как подходящий
Postman поддерживает библиотеку cryptojs: https://learning.postman.com/docs/writing-scripts/script-references/postman-sandbox-api-reference/#using-external-libraries

Добавьте приведенный ниже пример в тестовый скрипт postman:

let jwt = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ0b3B0YWwuY29tIiwiZXhwIjoxNDI2NDIwODAwLCJodHRwOi8vdG9wdGFsLmNvbS9qd3RfY2xhaW1zL2lzX2FkbWluIjp0cnVlLCJjb21wYW55IjoiVG9wdGFsIiwiYXdlc29tZSI6dHJ1ZX0.UsrGn95rk5DStcC_WwIr3WIv5rHe2IApX56I58l8uyo`

a = jwt.split('.');


//a.forEach(function (val) {
    var words = CryptoJS.enc.Base64.parse(a[1]);
    var textString = CryptoJS.enc.Utf8.stringify(words);

    console.info(textString)
//})
Выход:

HmacSHA256 — это не алгоритм шифрования, а алгоритм хеширования, поэтому его невозможно декодировать, поскольку хеширование — это односторонняя функция.

так как последняя часть находится в форме

HMACSHA256 of ( base64(header) + "." + base64(body) )
вы можете попробовать создать его и приравнять оба равны

 14.12.2020 15:05
Вы можете вручную проанализировать, используя функцию atob, которая декодирует строку Base64. (https://developer.mozilla.org/pt-BR/docs/Web/API/atob)

И это доступно в сценариях Postman.

Что-то вроде этого:

// Sample JWT
let jwt = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'

let [jwtHeader, jwtPayload, jwtSignature] = jwt.split('.')

let jwtPayloadJsonString = atob(jwtPayload)

console.info(jwtPayloadJsonString)

let jwtPayloadJson = JSON.parse(jwtPayloadJsonString)

console.info(jwtPayloadJson)

 02.05.2022 15:57
Основываясь на ответе PDHide, я придумал этот готовый к использованию фрагмент для Postman:

var jsonData = JSON.parse(responseBody);

let [header, payload, signature] = jsonData.access_token.split('.');

function decode(x) {
    let wordArray = CryptoJS.enc.Base64.parse(x);
    let str = CryptoJS.enc.Utf8.stringify(wordArray);
    return JSON.parse(str);
}

console.info("Header: ", decode(header));
console.info("Payload: ", decode(payload));
См. эту ссылку для получения дополнительной информации о трех частях токена JSONWeb (заголовок, полезная нагрузка и подпись).

 13.05.2022 10:59
с помощью CryptoJS

const payloadRaw = jwt.split('.')[1]
const payloadBase64 = CryptoJS.enc.Base64.parse(payloadRaw);
const payload = JSON.parse(payloadBase64.toString(CryptoJS.enc.Utf8));
 28.02.2023 19:52
Другие вопросы по теме
Роль Azure AD не отображается в токене аутентификации или идентификатора для гостевого пользователя
Как узнать, к какой коллекции/папке принадлежит моя открытая вкладка?
Вложенный запрос мангуста
Android залп отправляет пустой запрос на сервер со статусом 200
Утверждение даты и времени тела ответа в Postman
Почтальон: установить EnvironmentVariable
KeyError в Flask Python
Интеграция с командами Microsoft через API Postman
Почему возникла ошибка Invalid_Key из API метаданных MailChimp?
Динамическое значение данных post json реализовано в почтальоне
Похожие вопросы
JsonWebTokenError: неправильно сформирован jwt (создание API в ExpressJs)
JWT Auth выдает ошибку при попытке войти в систему пользователя
Совместное использование аутентификации/авторизации JWT
Ktor application.conf — конфигурация JWT
Безопасное весеннее загрузочное приложение без входа пользователя в систему
Аутентификация JWT, роли, определенные в атрибуте Authorize, игнорируются
Как добавить внедрение зависимостей в ISecurityTokenValidator из AddJwtBearer в .net C# Web API
Платформа API OpenApi не использует токен JWT
Как правильно настроить конфигурацию безопасности Spring boot 3?
Multi-Tenancy с аутентификацией JWT и проверкой пользователя для арендатора

FIREBASE
Получите токен доступа Firebase в POSTMAN
В своем веб-приложении я использую Firebase для аутентификации, чтобы получить доступ к любому API, мне нужно пройти аутентификацию из firebase.

Вопрос: Как я могу получить токен доступа к firebase в Postman?

У меня есть 2 решения этой проблемы:

1) Получите токен доступа из firebase в почтальоне, сохраните этот токен доступа в глобальном env почтальона. переменная, а затем я могу выполнить другой запрос API. (Здесь я не знаю, как получить токен доступа в почтальоне)

2) Выполните вход в систему в браузере, скопируйте токен доступа из сетевого запроса, сохраните его в bash_profile и затем используйте в Postman. (Здесь я не знаю, как читать переменную окружения ОС)

 20.04.2018 07:37
14
2
11 676
6
Данный вопрос помечен как решенный
 Ответы 6
 Ответ принят как подходящий
Простой способ получить токен доступа из firebase:

создать html-файл в каталоге
скопируйте в html файл содержимое firebase auth краткое руководство
замените firebase-app.js и firebase-auth.js, как описано в веб-настройка firebase, чтобы указать им правильное расположение cdn в Интернете.
замените скрипт firebase.init кодом инициализации из вашего приложения на консоли следующим образом:
var config = {
    apiKey: "my secret api key",
    authDomain: "myapp.firebaseapp.com",
    databaseURL: "https://myapp.firebaseio.com",
    projectId: "myapp-bookworm",
    storageBucket: "myapp.appspot.com",
    messagingSenderId: "xxxxxxxxxxxxx"
};
firebase.initializeApp(config);
откройте HTML-файл в своем браузере и либо войдите, либо зарегистрируйтесь. Должно отображаться значение объекта Firebase auth currentUser.

проверьте HTML и разверните элемент quickstart-account-details. При этом должен отображаться объект json.

скопировать содержимое accessToken

В почтальоне перейдите к авторизации, выберите токен на предъявителя и вставьте скопированный токен в поле значения токена.

Теперь у вас должна быть возможность вызывать apis, защищенные firebase auth. Имейте в виду, что это только получает и передает токен доступа, поэтому после истечения срока действия токена вам может потребоваться запросить новый (шаги с 5 по 8).

можно еще посмотреть это
Надеюсь это поможет!

 08.01.2019 05:39
Если вы хотите использовать только Postman и не хотите создавать интерфейс, вы можете использовать этот запрос аутентификации в Postman: POST https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key = {API_KEY}

В Body вы должны отправить следующую строку JSON:

{"email":"{YOUR_EMAIL_ADDRESS}","password":"{PASSWORD}","returnSecureToken":true}
Тип содержимого - application / json (будет установлен в Postman автоматически). Вы можете найти Firebase API_KEY в настройках проекта Firebase (это ключ веб-API).

В качестве ответа вы получите объект JSON, а idToken - это токен, который вам нужен для всех ваших запросов API в качестве токена-носителя.

Чтобы настроить этот токен автоматически, вы можете добавить следующий код на вкладке «Тесты» в свой запрос авторизации:

var jsonData = JSON.parse(responseBody);
postman.setGlobalVariable("id_token", jsonData.idToken);
Для всех ваших запросов API вы должны установить авторизацию на Bearer Token, а значение токена - {{id_token}}.

Теперь токен будет автоматически использоваться после того, как вы выполнили запрос аутентификации и получили ответ.

 19.11.2019 14:59
В дополнение к сообщение naptoon:

var jsonData = JSON.parse(responseBody);
postman.setGlobalVariable("id_token", jsonData.idToken);
Это «старый стиль», то есть устарело почтальоном. «Новый стиль» - это:

pm.environment.set("id_token", pm.response.json().idToken);
 31.07.2020 12:48
перейдите к сценарию предварительного запроса и добавьте этот код (используйте свой API_KEY, USER_EMAIL, USER_PASSWORD)

  const reqObject = {
    url: "https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key = {API_KEY}", // API_KEY -> your API key from firebase config 
    method: 'POST',
    header: 'Content-Type:application/json',
    body: {
        mode: 'raw',
        raw: JSON.stringify({ "email": {USER_EMAIL}, "password": {USER_PASSWORD}, "returnSecureToken": true })
    }
};

pm.sendRequest(reqObject, (err, res) => {
    const idToken = res.json().idToken;  // your idToken
    pm.environment.set("FIREBASE_TOKEN", idToken ); // set environment variable FIREBASE_TOKEN with value idToken 
});
этот код добавит переменную среды FIREBASE_TOKEN, но вы можете делать все, что хотите, с idToken =)

 03.10.2020 13:29
Я столкнулся с необходимостью сделать это там, где промежуточная и производственная среды требуют другого Firebase idToken, но локальные не используют его. Я расширил ответы naptoon и leo, чтобы использовать конечную точку verifyPassword в identitytoolkit как часть предварительного запроса:

const apiKey = pm.environment.get('api_key');

if ( ! apiKey) {
    return
}

const tokenEnv = pm.environment.get('token_env')

if (tokenEnv && tokenEnv === pm.environment.name) {
    const tokenTimestamp = Number.parseInt(pm.environment.get('token_timestamp'), 10)
    const elapsed = Date.now() - tokenTimestamp
    if (elapsed < 20 * 60000) {
        return
    }
}

pm.sendRequest({
    url: `https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=${apiKey}`,
    method: 'POST',
    header: {
        'Content-Type': 'application/json',
    },
    body: {
        mode: 'raw',
        raw: JSON.stringify({
            email: pm.environment.get('auth_username'),
            password: pm.environment.get('auth_password'),
            returnSecureToken: true,
        }),
    },
}, function (err, res) {
    let json
    if ( ! err) {
        json = res.json()
        if (json.error) {
            err = json.error
        }
    }
    if (err) {
        pm.environment.unset('auth_token')
        pm.environment.unset('token_env')
        pm.environment.unset('token_timestamp')
        throw err
    }
    pm.expect(json.idToken).to.not.be.undefined
    pm.environment.set('auth_token', json.idToken)
    pm.environment.set('token_env', pm.environment.name)
    pm.environment.set('token_timestamp', Date.now())
})
Токен доступа кэшируется для данной среды на срок до 20 минут (я не реализовал токен обновления). Маркер очищается, если среда отличается от последнего запроса или возникает ошибка.

 18.11.2020 22:22
Скопируйте приведенный ниже блок кода и поместите его на вкладку «сценарии предварительного запроса» запроса в Postman. Он автоматически получает токен и помещает его в заголовок «Авторизация» каждый раз, когда вы делаете запрос. Вам не нужно добавлять заголовок или авторизацию вручную. Вам даже не нужно беспокоиться об истечении срока действия токена.

Очевидно, замените ключ API приложения, имя пользователя и заполнители пароля.

const postRequest = {
  url: 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key = {APP_API_Key}',
  method: 'POST',
  header: {
    'Content-Type': 'application/json'
  },
  body: {
    mode: 'raw',
    raw: JSON.stringify({
    "email": "{Your_Email}",
    "password": "{Your_Password}",
    "returnSecureToken": true
})
  }
};

pm.sendRequest(postRequest, (error, response) => {
  var jsonData = response.json();
  pm.globals.set("id_token", jsonData.idToken)
});

pm.request.headers.add({key: 'Authorization', value: '{{id_token}}'})
 20.05.2021 08:15
Другие вопросы по теме
Консоль firebase | добавить пользователя по номеру мобильного
Создать новую учетную запись с помощью Cloud Functions Request / Express
Facebook registerCallbackManager выдает ошибку (вход в Facebook с помощью Firebase)
Как получить токен обновления для API Google с помощью аутентификации Firebase
Свяжите вход Expo / Google с аутентификацией firebase
Аутентификация Firebase не работает после создания подписанного APK (вход в Google)
Приложение Ionic3 с аутентификацией firebase автоматически выводит пользователя из системы через 24 часа (логин не сохраняется)
Получите электронную почту перед входом в систему - GoogleSignIn
Firebase auth с Mithril для входа / регистрации в бессерверном SPA
Firebase с Google (ТОЛЬКО вход)
Похожие вопросы
Консоль firebase | добавить пользователя по номеру мобильного
Firebase увеличивает количество значков с iOS
Как загрузить несколько изображений на firebase с помощью Swift?
Зависимость Android com.android.support:support-v4 имеет другую версию
Ошибка сборки angular firebase при попытке сборки ionic
Обновить значение данных firebase при определенном условии
Об Android Firebase для получения данных (нет ошибки установщика / поля)
Firestore (4.13.0): ВНУТРЕННЯЯ НЕОБРАБОТАННАЯ ОШИБКА
Как и где найти последнюю версию firebase-ui?
Уведомления Firebase и Azure по расписанию в Xamarin

POSTMAN
Как настроить токен на предъявителя в почтальоне из переменной среды?
Я настроил коллекцию в PostMan и могу успешно сохранить значение токена-носителя в переменной среды, используя следующий тест

var jsonData = JSON.parse(responseBody);
pm.environment.set("mytoken", jsonData.token);
но как мне настроить новый вызов, чтобы использовать его?

Я пробовал добавить заголовок с

Authorization Bearer <mytoken>
но когда я публикую статус 401 Unauthorized

 17.06.2018 07:23
4
1
7 278
6
Данный вопрос помечен как решенный
 Ответы 6
 Ответ принят как подходящий
В заголовках мне нужно было использовать

для ключа

Authorization 
для значения

Bearer {{mytoken}}
 17.06.2018 07:51
Как сказала Кристен. Или загрузите последнее настольное приложение почтальона, поскольку при авторизации у них есть возможность добавить токен на предъявителя в заголовок

 17.06.2018 08:38
Резюме:

Создайте переменную для хранения значения токена аутентификации в одном месте для использования во всей вашей коллекции.
Установите метод авторизации по умолчанию для всей вашей коллекции.
Вместо установки заголовка авторизации для каждого запроса установите авторизацию для каждого запроса на использование «Наследовать аутентификацию от родителя», чтобы автоматически заполнить запрос правильными заголовками аутентификации.
Вы можете определять переменные в средах и коллекциях Postman, чтобы упростить ваши запросы, задав значение в одном месте и ссылаясь на него в любом количестве мест. Таким образом, вы можете создать переменную для значения вашего токена на предъявителя. Сделайте это, отредактировав свою коллекцию и перейдя на вкладку «Переменные», чтобы добавить новую переменную.

While editing your collection go to the Variables tab to add a new variable you can use throughout your collection.

Также при редактировании вашей коллекции перейдите на вкладку «Авторизация», чтобы установить авторизацию по умолчанию для всех запросов в вашей коллекции. Вы можете установить тип авторизации для вашей коллекции на предъявитель и установить значение токена как вашу определенную переменную. Это позволит вам использовать один и тот же токен авторизации для всех ваших запросов в вашей коллекции:

Also while editing your collection go the Authorization tab to set a default authorization for all requests within your collection.

Затем, чтобы использовать метод авторизации коллекции по умолчанию, вам нужно будет установить запросы в этой коллекции, чтобы установить Тип авторизации на «Наследовать аутентификацию от родителя». Это позволит вам не добавлять вручную заголовок авторизации к каждому запросу. Каждый запрос в коллекции с выбранным типом авторизации «Наследовать аутентификацию от родительского» будет автоматически заполнять запрос соответствующими заголовками для авторизации, если вы определили параметр по умолчанию для коллекции, как на предыдущем изображении.

Set each request to use the Authorization Type "Inherit auth from parent".

 06.06.2019 19:30
Вы можете использовать вкладку Tests для написания кода, который обновляет переменную среды, как описано в этом ссылка на сайт. Подробнее о тестовых скриптах здесь.


Предполагая, что ответ на вызов аутентификации:

{
    "token": "woaejrlajfaoidhfalskdjfalsdijfasd"
}
Затем во вкладке Tests вы можете написать примерно так:

var jsonData = JSON.parse(responseBody);
postman.setEnvironmentVariable("token", jsonData.token);
Это обновит переменную token всякий раз, когда вы запускаете вызов аутентификации. Эта переменная token должна использоваться в заголовках всех вызовов API для автоматического обновления.

Также проверьте наследование авторизации.

 21.01.2020 00:36
Я использую сценарий после входа в систему на вкладке тестов, как показано ниже;

let jsonData = JSON.parse(responseBody);

pm.collectionVariables.set("jwt_token", jsonData.data.token);


и создайте переменную коллекции, как показано ниже; 

 26.03.2021 12:29
pm.environment.set("JWT",pm.response.json().token)
Примечание: JWT - это переменная среды, которую вы установили в своей среде.

 28.04.2021 18:55
Другие вопросы по теме
Выполните запрос почтальона несколько раз, используя массив из предыдущего шага
Есть ли обходной путь для ошибки Postman, когда контент возвращается с 204?
Приложение Postman не добавляет файлы cookie в запрос
Как импортировать внешний модуль javascript в почтальон?
Как выполнить несколько postman.setNextRequest
Невозможно разветвить мои тесты с помощью переменной в Postman
Как пропустить итерацию в сборщике с файлом данных в почтальоне
Запросить повторное использование в Postman
NTLM с Postman показывает "JSONError | Неожиданный токен '<' в соотношении 1: 1"
Добавление переменных Postman в тело сообщения JSON внутри полей имени ключа
Похожие вопросы
Идентификатор сеанса не работает с Express
Тестирование API с помощью почтальона
Получить параметры запроса с помощью Flask-RESTful
Мой php-код не работает с почтальоном, когда я вставляю параметры
Запрос POST Guzzle к JWT API становится неавторизованным, пока Postman работает
Различные ответы Insomnia и Postman на веб-запрос
Получение внутренней ошибки сервера 500 при модернизации
Как получить необработанные данные JSON от Postman на Java
AADSTS50001: приложение с именем X не было найдено в клиенте с именем Y при аутентификации Postman в Azure AD
Rails API Get с параметрами

REACTJS
Вызов API работает с почтальоном, но Doenst работает с моим кодом
Поэтому мне нужно обновить некоторую информацию о пользователе, она отлично работает с почтальоном, но когда я пытаюсь ввести ее в response-native, я должен делать что-то не так в теле метода fetch. В почтальоне я устанавливаю x-www-form-urlencoded и набираю ключи следующим образом:

Ключ ----- Значение

мото ----- тест

и это, кажется, работает, но когда я пытаюсь сделать то же самое со своим кодом, я почему-то терплю неудачу, вот мой код

updateUser(){

 return fetch(url,{
    method: "PATCH",
    headers: {
        "X-Auth-Token": bearerToken,
        "Content-Type":"application/x-www-form-urlencoded"
    },
      body: JSON.stringify({
                  moto: this.state.moto
          }
    })
  }
)
Я получаю ответ 200, что означает, что вызов работает, но я должен каким-то образом установить параметр moto неправильно. Любые идеи ?

 31.07.2018 09:43
1
0
2 547
6
 Ответы 6
"Content-Type":"application/x-www-form-urlencoded"

должно быть

"Content-Type": "application / json"

 31.07.2018 09:45
form-urlencoded сильно отличается от вашего body: JSON.stringify().

Вместо этого вы захотите использовать объект FormData:

const body = new FormData();
body.append('moto', this.state.moto);
fetch(url, {
  method: "PATCH",
  headers: {
    "X-Auth-Token": bearerToken,
    "Content-Type": "application/x-www-form-urlencoded"
  },
  body,
})
 31.07.2018 09:46
APICall = () => { 
  fetch(‘Your http URL’, {
    method: 'PATCH',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    ‘X-Auth-Token’: bearerToken,
    },
    body: JSON.stringify({ 
      moto: this.state.moto
    }) 
  }).then((response) => response.json())
      .then((responseJson) => {      
    if (responseJson.statuscode == 1) {
      Alert.alert('Success');
    } else {
      Alert.alert(responseJson.message);
    }
    }).catch((error) => {
      console.error(error);
    });
}
 31.07.2018 14:03
наконец исправил это, установив тело на

   body: 
      `moto=${this.state.moto}`
похоже, что заголовки urlencoded требуют параметров в виде параметр1 = значение1 & параметр2 = значение2

 01.08.2018 10:05
componentDidMount() {
return fetch(“Your URL”, {
    method: 'post',
    headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
        "Authorization": “token”
    },
    body: "firstName=Nikhil&favColor=blue&password=easytoguess"
})
    .then((response) => response.json())
    .then(function (data) {
        alert(“Success”)
        console.info('Request succeeded with JSON response', data);
    })
    .catch(function (error) {
        alert("error occur")
        console.info('Request failed', error);
    });
}
 01.08.2018 11:26
const formData = new FormData();

formData.append('email', 'test@gmail.com');
formData.append('password', '123456');

fetch("https://test.com/api/login", {
    method: 'post',
    body: formData
})
.then(res => res.json())
.then(
(result) => {
    console.info(result);
}).catch(err => {
    console.info(err);
})
 25.07.2020 07:32
Другие вопросы по теме
Python: добавление задержки после каждого элемента при выгрузке результатов из списка URL-адресов в файл JSON
Symfony 3.4 - Возвращает массив JsonResponse
Получить заголовок местоположения из ответа, httpclient
Единый API для различных баз данных на Python
Повторное использование формы в нескольких представлениях
Запрос PHP curl никогда не завершается
Файл загрузки curl в foreach измените значение моего сообщения
Какое значение по умолчанию для крайнего срока gPRC (java)
Как скрыть ключ API на стороне клиента?
Zoho Projects API - токен аутентификации
Похожие вопросы
Форма PropType - выдает ошибку при объявлении
Npm http-сервер "страница не найдена" при обновлении страницы
Передача реквизита из компонента в статический метод
Есть ли способ обнаружить изменения в объекте окна?
Мини-версия Semantic-UI-React Sidebar при свертывании
Как добавить и удалить активный класс в навигации в React JS
Не удается найти URL-адрес файла с помощью xhr.open ('post', url, true) - Статус: 404 node js
Как поделиться гиперссылкой на параметризованное представление в reactjs
Реагировать на setState на основе текущего состояния
Переопределить стилизованные компоненты в React

JAVASCRIPT
Есть ли простой способ преобразовать этот JSON туда и обратно?
Мы используем Postman для тестирования нашего API. Некоторые объекты, которые мы возвращаем, очень многословны и непросты в обращении, поэтому я хочу создать вспомогательный метод, чтобы сделать их немного более краткими. Я знаю, что существуют всевозможные библиотеки преобразования, такие как узел-json-преобразование, выбратьтрансформировать, jsontransforms и т. д., но, к сожалению, я могу использовать только Библиотеки Postman Sandbox и vanilla JS.

Я ищу самый простой (наименьшее количество место и функций) способ преобразования этого объекта:

var verbose = [
    {
        "Key": "Name",
        "Value": "John Doe",
        "Instance": 1
    },
    {
        "Key": "Age",
        "Value": "33",
        "Instance": 1
    },
    {
        "Key": "Child",
        "Value": "Jane",
        "Instance": 1
    },
    {
        "Key": "Child",
        "Value": "Rocky",
        "Instance": 2
    }];
в это:

var concise =  {
    "Name": "John Doe",
    "Age": "33",
    "Child": ["Jane", "Rocky"]
};
и обратно в развернутую форму.

Я уже пробовал собственный способ foreach-ing для каждого объекта и добавления свойств/значений к новому объекту, но вскоре он стал уродливым, когда я добрался до пар ключ/значение с несколькими экземплярами. Я могу представить, что есть более простой способ использования map/reduce, но я не знаком с этими методами.

 27.02.2019 11:12
1
3
131
6
Данный вопрос помечен как решенный
 Ответы 6
Ты можешь сделать:

const verbose = [{"Key": "Name","Value": "John Doe","Instance": 1},{"Key": "Age","Value": "33","Instance": 1},{"Key": "Child","Value": "Jane","Instance": 1},{"Key": "Child","Value": "Rocky","Instance": 2}];
const concise = Object.values(verbose.reduce((a, {Key, Value}) => (Key === 'Child' ? a.childs[0].Child.push(Value) : a.keys.push({[Key]: Value}), a), {keys: [], childs: [{Child: []}]})).flat(1);

console.info(concise);
.as-console-wrapper { max-height: 100% !important; top: 0; }
 27.02.2019 11:18
Исходя из того, как я понял ваш вопрос, вы хотите создать пары ключ-значение из вашего массива объектов verbose. Однако, если есть конфликты ключей, значения должны быть преобразованы в массив.

Имея это в виду, вам придется:

Используйте forEach для циклического просмотра массива объектов.
Если ключ не конфликтует, мы просто создаем новую пару ключ-значение
Если ключ конфликтует, то это становится немного сложнее:
Если ключ конфликтует, и это первое вхождение, мы преобразуем значение в паре ключ-значение в массив
Если ключ конфликтует, и это не первый случай, мы знаем, что смотрим на массив
Теперь у определенно есть массив, поэтому мы помещаем в него наше значение.
См. доказательство концепции ниже:

var verbose = [{
    "Key": "Name",
    "Value": "John Doe",
    "Instance": 1
  },
  {
    "Key": "Age",
    "Value": "33",
    "Instance": 1
  },
  {
    "Key": "Child",
    "Value": "Jane",
    "Instance": 1
  },
  {
    "Key": "Child",
    "Value": "Rocky",
    "Instance": 2
  }];

var concise = {};
verbose.forEach(function(i) {
  var key = i['Key'];
  var value = i['Value'];
  
  // If item exists, we want to convert the value into an array of values
  if (key in concise) {
    var item = concise[key];
    
    // If it is not an array already, we convert it to an array
    if (!Array.isArray(item))
      item = [item];
      
    item.push(value);
    concise[key] = item;
  }
  
  // If item does not exist, we simply create a new key-value pair
  else {
    concise[key] = value;
  }
});
console.info(concise);
 27.02.2019 11:32
const verbose = [{
    "Key": "Name",
    "Value": "John Doe",
    "Instance": 1
  },
  {
    "Key": "Age",
    "Value": "33",
    "Instance": 1
  },
  {
    "Key": "Child",
    "Value": "Jane",
    "Instance": 1
  },
  {
    "Key": "Child",
    "Value": "Rocky",
    "Instance": 2
  }
];
let concise = {};

verbose.forEach(item => {
  const values = Object.values(item)
  if (concise[values[0]])  concise = {...concise, [values[0]]: [concise[values[0]], values[1]]};
  else concise = {...concise, ...{[values[0]]: values[1]}}
})

 27.02.2019 11:35
Попробуй это. Я написал обе функции преобразования. Я вижу, что другие ответы содержат только подробные и краткие требования.

let verbose = [{
    "Key": "Name",
    "Value": "John Doe",
    "Instance": 1
  },
  {
    "Key": "Age",
    "Value": "33",
    "Instance": 1
  },
  {
    "Key": "Child",
    "Value": "Jane",
    "Instance": 1
  },
  {
    "Key": "Child",
    "Value": "Rocky",
    "Instance": 2
  }
]

let concise = {
  "Name": "John Doe",
  "Age": "33",
  "Child": ["Jane", "Rocky"]
}

verboseToConcise = (verbose) => {
  let obj = {}
  verbose.forEach(v => {
    let key = obj[v.Key]
    if (key) typeof key === 'string' ? obj[v.Key] = [key, v.Value] : key.push(v.Value)
    else obj[v.Key] = v.Value
  })
  return obj
}

conciseToVerbose = (concise) => {
  let arr = []
  Object.entries(concise).forEach(([key, value]) => {
    if (typeof value === 'object') {
      for (let i = 0; i < value.length; i++){
        arr.push({
          "Key": key,
          "Value": value[i],
          "Instance": i+1
        })
      }
    } else {
      arr.push({
        "Key": key,
        "Value": value,
        "Instance": 1
      })
    }
  })
  return arr
}

console.info(verboseToConcise(verbose))
console.info(conciseToVerbose(concise))
 27.02.2019 11:38
 Ответ принят как подходящий
Здесь я предполагаю, что все атрибуты являются многозначными, а затем уменьшаю те, которые имеют длину 1, до простого значения. Это немного медленнее, чем обратный подход, когда вы предполагаете, что значения являются однозначными, и переводите их в массивы, когда они доказывают обратное, чтобы соблюдать порядок, установленный Instance.

function makeConcise(verbose) {
  let concise = {};
  verbose.forEach(({Key, Value, Instance}) => {
    if (!concise[Key]) concise[Key] = [];
    concise[Key][Instance - 1] = Value;
  });
  Object.keys(concise).forEach(Key => {
    if (concise[Key].length == 1) concise[Key] = concise[Key][0];
  });
  return concise;
}
Обратная функция так же проста:

function makeVerbose(concise) {
  let verbose = [];
  Object.keys(concise).forEach(Key => {
    if (Array.isArray(concise[Key])) {
      concise[Key].forEach((Value, index) => {
        verbose.push({Key, Value, Instance: index + 1});
      });
    } else {
      verbose.push({Key, Value: concise[Key], Instance: 1});
    }
  });
  return verbose;
}
 27.02.2019 11:38
Я также попробовал использовать reduce:

Обновлено: без синтаксиса распространения ..., с Object.assign и array.concat

Обновлено еще раз: я хотел попробовать вернуть его снова. В этом коде мы теряем значение Instance :(

var verbose = [
  {
    Key: 'Name',
    Value: 'John Doe',
    Instance: 1,
  },
  {
    Key: 'Age',
    Value: '33',
    Instance: 1,
  },
  {
    Key: 'Child',
    Value: 'Jane',
    Instance: 1,
  },
  {
    Key: 'Child',
    Value: 'Rocky',
    Instance: 2,
  },
]

const concise = verbose.reduce(
  (p, n) =>
    Object.assign(p, {
      [n.Key]: !p.hasOwnProperty(n.Key)
        ? n.Value
        : typeof p[n.Key] === 'string'
        ? [p[n.Key], n.Value]
        : p[n.Key].concat(n.Value),
    }),
  {},
)

console.info(concise)
// { Name: 'John Doe', Age: '33', Child: [ 'Jane', 'Rocky' ] }

const backAgain = Object.entries(concise).reduce(
  (p, [k, v]) =>
    Array.isArray(v)
      ? p.concat(v.map(x => ({ Key: k, Value: x })))
      : p.concat({ Key: k, Value: v }),
  [],
)

console.info(backAgain)
// [ { Key: 'Name', Value: 'John Doe' },
//  { Key: 'Age', Value: '33' },
//  { Key: 'Child', Value: 'Jane' },
//  { Key: 'Child', Value: 'Rocky' } ]
 27.02.2019 11:44
Другие вопросы по теме
Как я могу удалить элемент из json, используя метод ниже?
Как сделать проекцию на строку json
Фильтровать массив JSON в Swift
Время разбора строки, чтение из входного файла (плоский текст)
Можно ли сжать объект JSON в памяти
Не удается отправить json на экспресс-сервер из браузера
Проверка Json не соответствует схеме json
Как я могу опубликовать данные с именем класса в Retrofit
Изменить конкретное значение JSON (C#)
Java.lang.IllegalStateException: ожидается BEGIN_OBJECT
Похожие вопросы
Регулярное выражение, состоящее из 3 символов или более, минимум один минус, максимум 3 цифры
Javascript перехватывает http-выборку из веб-работника + URL-адреса файлов
Нужно хранить данные Google Place Api и управлять ими?
Установить куки в браузере с помощью javascript
Тернарный оператор Javascript с двумя истинными (?) условными операторами
Intend Chrome через html тег href
Функция remove() не определена в IE11
Необязательный универсальный на основе аргумента функции
Реакция: как обновить один компонент, когда что-то происходит с другим компонентом
EncodeURIComponent против Handlebars.Utils.escapeExpression

JMETER
Автоматизировать отправку запроса и сохранение ответа
Есть URL-адрес, по которому я хочу нажать и сохранить ответ. Идентификатор URL-адреса необходимо увеличивать каждый раз и сохранять ответ. Например -

Первый запрос получения - http://google.com/getdata/? Id = 1

Первый ответ - один

Второй запрос - http://google.com/getdata/? Id = 2

Второй ответ - два

и так далее...

Я хочу каждый раз выполнять запрос с увеличением идентификатора и сохранять ответ

Я пробовал использовать скрипач, но не могу понять, как увеличить идентификатор и сохранить ответ.

P.S. - Мне нужно сделать около 600000 просмотров

 02.04.2018 09:59
1
2
1 353
7
 Ответы 7
В JMeter вам нужно щелкнуть, Ctrl + 0 и Ctrl + 1 для создания, Thread Group и HTTP-запрос

В группе потоков введите необходимое количество обращений в Number of Threads (users).

В HTTP-запросе поместите в Server Name or IP www.google.com и в Path / getdata /? Id = $ {__ threadNum}

__threadNum создаст увеличивающееся число от потока 1 до числа совпадений.

Для небольшого количества совпадений или отладки вы можете добавить Просмотр дерева результатов для просмотра запроса / ответа, нажав Ctrl + 9 на уровне плана тестирования / группы потоков.

Чтобы сохранить ответ, используйте постпроцессор, особенно добавив Средство извлечения регулярных выражений под HTTP-запросом, нажав Ctrl + 2.

Allows the user to extract values from a server response using a Perl-type regular expression. As a post-processor, this element will execute after each Sample request in its scope, applying the regular expression, extracting the requested values, generate the template string, and store the result into the given variable name.

Импортируйте, чтобы заметить, что для нагрузочное тестирование вам нужно работать в режиме без графического интерфейса, что означает вызов jmeter с использованием командной строки как jmeter -n -t myTest.jmx

you will use Command-line mode (called Non-GUI mode) to run it for the Load Test. Don't run load test using GUI mode !

Для сохранения всех ответов в один файл см. сохранить данные ответа или, если вы хотите сохранить файл для каждого потока / пользователя, вы можете добавить Сохранить ответы в файл

 02.04.2018 11:06
Пожалуйста, найдите снимок ниже для вашего сценария.

Scenario_Testplan

Сначала перейдите в свойства пользователя и введите «sample_variables = ID, Response_File_Name» или любое другое имя, которое вы выберете для переменных. Перезапустите jmeter. Создайте план ниже: -

Конфигурация набора данных CSV для получения дополнительных значений и имени файла ответов
HTTP-запрос будет использовать $ {ID}
При сохранении ответа в файл будет использоваться $ {Response_File_Name}.
Надеюсь, это поможет.

 02.04.2018 11:15
Поскольку упоминается тег «Почтальон», я могу помочь вам относительно того, как реализовать это в Почтальоне. У Postman есть отличная особенность использования «переменных».

Вы можете использовать переменные среды или глобальные переменные.

Подробнее об этом читайте в их документации: https://www.getpostman.com/docs/v6/postman/environments_and_globals/variables

Вы можете использовать глобальную переменную, такую ​​как «счетчик», и установить ее на 1 / любую начальную точку, которую вы хотите. Затем вы можете изменить свой запрос следующим образом: http://google.com/getdata/?Id = {{iteration}}

Теперь в скрипте запроса Тесты можно написать следующий скрипт

let i = parseInt(pm.globals.get('iteration')) + 1; pm.globals.set('iteration', i);

Также для доступа к ответу вы можете использовать следующую команду в скрипте Контрольная работа: console.info(pm.response); // Use pm.response as per your needs

Сохраните запрос в коллекцию. Теперь загрузите Бегущий почтальон и выберите коллекцию. Теперь вы можете поставить 6,00,000 итераций и нажать кнопку «Выполнить»!

Помните, что тяжелые итерации вызовут снижение производительности.

 02.04.2018 12:04
Я бы сделал это с помощью командной строки, используя цикл while с загибом URL-адреса, сохраняя результат тела в стандартном выводе в файл. Это выглядело бы примерно так:

for i in {1..600000}; do curl "http://google.com/getdata/?id=$i" > body-result-id-$i; done
Я не смог проверить строку выше, потому что у меня сейчас нет доступа к консоли, но я думаю, что она должна работать.

 02.04.2018 12:29
Скрипач:

Откройте редактор сценариев (Control + r), затем добавьте следующий код внутри OnBeforeResponse

 static function OnBeforeResponse(oSession: Session) {
        if (oSession.oRequest["X-SAVE-ME"] != "")
        {
            oSession.SaveResponseBody("C:\\tempfiddler\\" + oSession.SuggestedFilename);
        }

    }
Перейдите на вкладку «Composer» и включите заголовок X-SAVE-ME с любым значением в URL-адресе, замените Я БЫ на # (точно так: http://google.com/getdata/?Id=#). Скрипач теперь будет запрашивать начальное и конечное значение идентификатора перед выполнением. ;

 02.04.2018 23:02
В Burp это можно сделать с помощью инструмента Intruder. Сначала запишите образец запроса в Burp. Если вы не знаете, как это сделать, обратитесь к документации начиная.

Затем щелкните запрос правой кнопкой мыши и выберите «Отправить злоумышленнику».

На вкладке «Позиции» в Intruder сначала нажмите «Очистить», затем выберите раздел, который нужно изменить, и нажмите «Добавить».

На вкладке Payloads выберите тип Payload как «Numbers» и настройте диапазон.

Нажмите "Начать атаку".

Для получения дополнительной информации обратитесь к документация.

 03.04.2018 11:27
Еще одно решение - вы можете использовать счетчик в jmeter. Что вы можете найти снизу пути Группа потоков> configElement> Counter.

Настройте счетчик в соответствии с вашими потребностями.
Дайте ссылочное имя i для счетчика.
Используйте переменную в своем запросе
Для дополнительной информации.

CounterForIncrementID

 03.04.2018 12:17
Другие вопросы по теме
Неизвестный столбец 'work_order_id' в 'списке полей' при вставке данных в базу данных mysql
403 Запрещенная ошибка при использовании Webrequest в C#, но работает в почтальоне
<title> Ошибка 403 В запрос не был включен действительный крошка </title>, получая то же самое в Eclipse с использованием restassured
Скрипты PostMan Test: проверка содержимого JSON ответа
Req не имеет тела при публикации с помощью Postman
Почтальон - преобразование даты в формате ISO в метку времени UNIX
Output response Body где-нибудь со скриптом newman из коллекции почтальонов
Извлеките значение из ответа XML и установите его как глобальную переменную в Postman
Оплата через Lyft API
Получите Twitter Timeline (JSON) с помощью клиента Postman
Похожие вопросы
Получение дочерних значений случайным образом в JSON
Невозможно войти в систему из-за '__RequestVerificationToken'
Имя пользователя и пароль для аутентификации Base64
Скопируйте файл .jtl из рабочей области Jenkins в другую папку
Как передать набор значений из одной группы потоков Jmeter в другую
Как мне войти в SalesForce с помощью SOAP в JMeter?
Jmeter - Командная строка не может писать - папка не пуста
Ошибка утверждения данных ответа не отображается на панели инструментов Jmeter
Не удалось открыть мое приложение после смены прокси
Подсчет количества кодов ответа в JMeter 4.0

POSTMAN
Добавить заголовок к каждому запросу в Postman в сценарии предварительного запроса
Я хочу автоматически добавлять заголовок к каждому запросу во всей моей коллекции, используя этот сценарий предварительного запроса:

pm.request.headers.add({
    'key': "myvar",
    'value': pm.environment.get("myvar")    
});
Myvar - переменная среды.

К сожалению, это не работает. Я что-то пропустил?

 02.07.2018 10:12
21
0
27 984
7
Данный вопрос помечен как решенный
 Ответы 7
Похоже, pm.request.headers.add() в настоящее время не обновляет отправляемый запрос. Он был отмечен как запрос функции: https://github.com/postmanlabs/postman-app-support/issues/4631

Возможно, вы уже знаете, что вы можете создавать предустановленные заголовки (из раскрывающегося списка «Предустановки»), чтобы немного упростить настройку заголовков. И в разделе «Настройки» есть пара опций для включения определенных заголовков. Но эти предложения не добавляют автоматически заголовок к каждому запросу во всей коллекции, как вы спрашиваете.

ОБНОВИТЬ: Почтальон добавил поддержку этого в приложении Почтальон (v7.0.9).

 03.07.2018 19:15
Это скопировано отсюда, но у меня это сработало.

https://gist.github.com/madebysid/b57985b0649d3407a7aa9de1bd327990

pm.sendRequest({
    url: "https://mydomain/ers/config/endpoint",
    method: 'GET',
    header: {
        'content-type': 'application/json',
        'accept': 'application/json',
        //'x-site-code': pm.environment.get("x-site-code")
        'X-CSRF-TOKEN': 'fetch'
    },
    body: {
        mode: 'raw'//,
        raw: JSON.stringify({ email: pm.environment.get("email"), password: pm.environment.get("password") })
    }
}, function (err, res) {

    pm.environment.set("X-CSRF-TOKEN", "Bearer " + res.json().token);
});
 18.09.2018 12:26
В тестовом разделе входа в систему используйте этот скрипт, чтобы запомнить токен в среде.

var jsonData = JSON.parse(responseBody);

tests["Body contains result"] = responseBody.has("result");

var result = jsonData.result

tests["result contains user"] = result.user !== null
var user = result.user
tests["result contains token"] = result.token !== null
var token = result.token
var accessToken = token.accessToken
var refreshToken = token.refreshToken

postman.setEnvironmentVariable("accessToken", accessToken);
postman.setEnvironmentVariable("refreshToken", refreshToken);
в каждом вызове, для которого требуется токен, используйте токен, подобный этому, в разделе заголовка

Authorization = Bearer {{accessToken}}
 01.03.2019 17:47
Думаю, может быть, вы можете попробовать такой способ:

  // Add or update an existing header

 pm.request.headers.upsert({
 'key': "myvar",
 'value': pm.environment.get("myvar") 
 });
Это было обновлено в приложении Postman (v7.0.9). Для получения дополнительной информации вы можете обратиться к: https://github.com/postmanlabs/postman-app-support/issues/1947

 19.06.2019 12:28
Начиная с Почтальон v7.0.9, это теперь возможно путем добавления сценария предварительного запроса в коллекцию.

Для этого перейдите в свою коллекцию, щелкните ее правой кнопкой мыши, выберите «Редактировать» и перейдите на вкладку Pre-request Scripts, где вы можете добавить свой фрагмент, то есть:

pm.request.headers.add({
  key: 'X-HEADER-TEST',
  value: '1'
});
 10.07.2019 18:41
 Ответ принят как подходящий
Для тех, кто пробует это на postman ~ 7.10.0, вы можете программно добавлять заголовки в сценарий предварительного запроса, в запрос или в коллекцию (в коллекцию добавляются заголовки ко всем запросам внутри коллекции).

pm.request.headers.add({ 
    // These keys appears when you set a header by hand. Just for fun they are here
    disabled: false,
    description:{
        content: "DescriptionTest",
        type: "text/plain"
    },
    // Your header, effectively
    key: 'KeyTest', 
    name: 'NameTest', 
    // If you set a variable you can access it
    // HeaderTest here has value = "ValueHeaderTest"
    value: pm.collectionVariables.get("HeaderTest")
});
Генератор фрагментов кода не буду показывает добавленный заголовок:

GET /get_info.php HTTP/1.1
Host: 192.168.15.25:8001
Content-type: application/json
User-Agent: PostmanRuntime/7.19.0
Accept: */*
Host: 192.168.15.25:8001
Accept-Encoding: gzip, deflate
Connection: keep-alive
Но Консоль Почтальона:

GET /get_info.php HTTP/1.1
Content-type: application/json
KeyTest: ValueHeaderTest
User-Agent: PostmanRuntime/7.19.0
Accept: */*
Host: 192.168.15.25:8001
Accept-Encoding: gzip, deflate
Connection: keep-alive
 21.01.2020 16:40
Это определенно работает. Удалите кавычки на ключ и значение

pm.request.headers.add({
    key: "myvar",
    value: pm.environment.get("myvar")    
});
 18.02.2020 05:15
Другие вопросы по теме
Резервное копирование конфигурации почтальона в файл - среда и настройки
Запрос POST с кодом ошибки 400 с pydev Eclipse, но работает с Postman
Передача параметра в веб-службу asmx при использовании из C#
Разбор данных в multipart / form-data в Lambda (Node.js)
Как я могу использовать RestApi для обновления развертывания в k8s?
Java EE - возврат статуса 415
Получение запроса содержит ошибку неверных учетных данных аутентификации FCM
"InvalidServerResponse" во время почтового запроса к приложению NodeJS
Как получить поле gcm.notification.body в полезной нагрузке push-уведомления gcm
Передача параметра веб-сервису asmx в Postman
Похожие вопросы
Spring Boot REST API генерирует ошибку 404 Not Found
Сообщение об ошибке недоступности данных при запуске скрипта из Runner
Запрос работы от почтальона, но сброс из Axios в командной строке
Невозможно выполнить POST с двоичным файлом на сервер Node.js Express
Cookie отсутствует в ответе Restsharp, но отсутствует в Postman
Метод C# GET для приема JSON в качестве входного параметра в NancyFx и проверки его из POSTMAN
Точка интеграции Postman Clean up
Ошибка Postman 304 Not Modified, api пружинного упора
Как сохранить ответ на запрос API в Postman в файл JSON при запуске коллекции
Как настроить Postman так, чтобы он генерировал curl-код для Windows

POSTMAN
Как мне интегрировать вход в систему Amazon Cognito в почтальоне?
Я использовал пул пользователей Amazon Cognito для входа в систему. Когда я открываю свое веб-приложение, я перенаправляюсь на

https://<domain>.auth.<region>.amazoncognito.com/login?response_type=code&client_id=<client id>&redirect_uri=<callback> . 
После входа в систему с именем пользователя / паролем пользователя из пула я буду перенаправлен на URL-адрес обратного вызова с кодом в качестве параметра запроса. Я могу использовать это, чтобы получить жетоны. Как мне интегрировать это в почтальон, чтобы я мог использовать токен для моего следующего запроса?

 12.09.2018 06:27
28
0
37 113
7
 Ответы 7
Вариант использования, который вы хотите реализовать, может быть достигнут с помощью авторизации OAuth 2.0. Если вы можете получить Auth URL/ Access Token URL, Client ID и Client Secret - вы сможете это сделать.

Вот ссылка на документацию по различным поддерживаемым нами типам авторизации, включая вышеупомянутый - https://www.getpostman.com/docs/v6/postman/sending_api_requests/authorization.

 12.09.2018 11:53
У меня есть пример этого ... 

URL-адрес обратного вызова, определенный в консоли Cognito User Pool в разделе Интеграция приложений / Настройки клиента приложения.
URL-адрес конечной точки входа в ваш домен. Это будет в разделе "Пул пользователей Cognito / Интеграция приложений / Имя домена".
Идентификатор клиента находится в разделе "Пул пользователей Cognito" / "Общие настройки" / "Клиенты приложений".
Перечислите области, которые вы хотите включить в токен доступа. Их необходимо включить в настройках пула пользователей Cognito / интеграции приложений / клиента приложения. Это могут быть стандартные или нестандартные прицелы. Пользовательские области определены в разделе «Интеграция приложений / серверы ресурсов» и должны включать идентификатор сервера ресурсов (например, https://myresource.com/myscope).
Нажмите "Запросить токен". 
Теперь вы можете войти в свой пул пользователей Cognito и получить токен доступа! Проблема в том, что если у вас есть токен доступа, его нельзя использовать в Postman, потому что Cognito ожидает, что он будет пустым, а Postman автоматически добавляет к токену «Bearer»:  Однако токен можно использовать в cURL: curl -i -H "Authorization: dyJraWQiOiI1YVcwTUlqN1hBaHg4Yzh4Q3JNT2RsQjhZWjlCR3NQOE9BbkFlVFJtUklRPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiI3YmEwZmMzOC01ZDcwkYS05MTI5ZTBmYTUzNTEiLCJ0b2tlbl91c2UiOiJhY2Nlc3MiLCJzY29wZSI6Imh0dHBzOlwvXC9hcGkubXk5MC5jb21cL3BvbGljZURlcGFydG1lbnRzLnJlYWQiLCJhdXRoX3RpbWUiOjE1NDA1OTIzMTYsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC51cy1lYXN0LTEuYW1hem9uYXdzLmNvbVwvdXMtZWFzdC0xX2xIbGo4NXpRYSIsImV4cCI6MTU0MDU5NTkxNiwiaWF0IjoxNTQwNTkyMzE2LCJ2ZXJzaW9uIjoyLCJqdGkiOiJhN2JiOWU2MC1kNmY1LTQ3ODYtODMwYi0xODdkZDZmYTZlODAiLCJjbGllbnRfaWQiOiI2MzhlYmZ1dTdiZDRkMXVkYnRzY2pxcnJncyIsInVzZXJuYW1lIjoicm9qbyJ9.O_GAxfFX3IQfLUu5Hxr05Wrk_2QDwNSL8tvDdEU0Dzs9d1XhQPafT6ney6yiGnKPOwsO8HhWdbT1QdDmByjuwQAURf1Da4Au7c-yhfgJcqWuHWZ4mledTSP8ukXqihMb4PoaDdU4JXyOdMLa50dBXVMgJNyXTpIulWOxFhiTW6DeQbnxNDk94cGNz_CTKCEqKStiloFZfLR7ndSrWqdOQ_SU__YV0RyKXZyK5yguv3nkUcI6cuKpbPVIZ5DNdpufbrtOLuZcC6HePBKrbTKjSZCt5-swy3YrwnY4ApTX7QUFzof6FylWaLA_KVP3Zv6ksSJ_IjBMFH1NRVHh4lbsOA" \ https://xxxxx.execute-api.us-east-1.amazonaws.com/v1/myresource/1234

 27.10.2018 06:29
пользователя yl.

Спасибо Роберту Джордану за его сообщение конфигурации почтальона OAuth2.0 выше.

Я постараюсь охватить здесь всю часть определения пула пользователей Cognito, чтобы упростить задачу.

ОК,

Откройте консоль Cognito и выполните следующие действия:

1) создать новый пул пользователей

name: Test1
left panel menu->Attributes
Выберите следующие переключатели:

o Email address or phone number - Users can use an email address or phone number as
  their "username" to sign up and sign in.
   o Allow email addresses   
И флажки:

[v] email
[v] name
Скриншот:



Нажмите кнопку [Создать пул]. (если это еще не доступно мастеру - нажмите опцию [Просмотреть подробности] в меню левой панели)

2) меню левой панели-> Клиенты приложений

нажмите: [добавить клиент приложения]

Имя клиента приложения: me1

снимите все флажки, кроме:

[v] Enable username password based authentication (ALLOW_USER_PASSWORD_AUTH)
Оставьте радиокнопки как есть:

o Enabled (Recommended)
Скриншот:



нажмите [создать клиент приложения]

3) скопируйте и сохраните «Идентификатор клиента приложения»

это строковый формат, аналогичный 5psjts111111117jclis0mu28q

Скриншот:



4) меню левой панели-> Настройки клиента приложений

Enabled Identity Providers: [v]Select all
[v] Cognito User Pool
URL-адреса обратного вызова: укажите URL-адрес api gw или https://www.google.com/

OAuth 2.0
 Allowed OAuth Flows
   [v] Implicit grant
 Allowed OAuth Scopes
   [v] openid
Скриншот:



5) меню левой панели-> Имя домена

введите строку в поле префикса, например: music123456789

проверьте, доступен ли он, используя кнопку «Проверить».

ваш домен сейчас: https://music123456789.auth.us-east-1.amazoncognito.com

Скриншот:



6) меню левой панели-> Пользователи и группы

нажмите [Создать пользователя]

Имя пользователя (обязательно): Your.Mail@company.com

снимите все флажки [v]

Временный пароль: Xx123456!

электронная почта: Your.Mail@company.com

7) в ПОЧТОВОЙ

Нажмите новый запрос

войдите во вкладку "Авторизация"

Выберите ТИП: OAuth 2.0.

нажмите кнопку [Получить новый токен доступа] и введите:

Имя токена: myToken123

Тип гранта: выберите «неявный» из списка.

URL обратного вызова: https://www.google.com/
(как в пункте 4 или в консоли когнито-> Интеграция приложений-> Настройки клиента приложения)

URL авторизации: https://music123456789.auth.us-east-1.amazoncognito.com/login
(как в пункте 5 + суффикс '/ login', то, что вы определили в когнитивном консоль-> Интеграция приложений-> Имя домена)

Идентификатор клиента: 5psjts343gm7gm7jclis0mu28q (идентификатор клиента приложения - как в 3,

то, что вы определили в консоли когнито-> Общие настройки-> Клиенты приложений)

Область действия: openid (как в 4, что вы определили в консоли когнито -> Приложение настройки клиента-> Разрешенные области OAuth)
COGNITO в конфигурацию idp OKTA
При подключении Cognito к Okta IDP конфигурация должна быть следующей:

Настройка Okta 

Настройка Cognito 

Настройка почтальона 

 16.01.2020 16:04
Если ваш клиент поддерживает USER_PASSWORD_AUTH, вы можете запросить действительные токены на предъявителя с помощью клиента aws.

read -s -p "Password: " && \
    aws cognito-idp initiate-auth \
        --client-id <client id> \
        --auth-flow USER_PASSWORD_AUTH \
        --auth-parameters "USERNAME=<username>,PASSWORD=$REPLY"
Его можно добавить в Postman в разделе «Авторизация / Тип: токен на предъявителя».

 21.12.2020 06:59
В дополнение к очень подробным объяснениям Роберта Джордана и Илева я заставил его работать, используя id_token вместо Токен доступа.



На странице сведений о токене скопируйте id_token и добавьте его в заголовок вручную без префикса Bearer: 

Источник: https://github.com/postmanlabs/postman-app-support/issues/6987

 30.12.2020 00:52
Для Postman 8.5.1 и пула пользователей AWS Chalice + Cognito на бэкэнде у меня есть рабочий пример:

Collection folder settings, Authorization tab

Cognito> Пулы пользователей>> Интеграция приложений> Настройки клиента приложения

App settings configuration

О варах:

{{cognito_callback_url}} - URL-адреса вашего обратного вызова из клиента приложения настройки
{{ognito_auth_url}} - Cognito> Пулы пользователей> > Интеграция приложений> Доменное имя + / логин (https: //.....auth.ap-south-1.amazoncognito.com/login)
{{ognito_client_id}} - веб-идентификатор вашего клиента приложения из клиента приложения настройки
{{cognito_scope}} - используйте openid
Теперь нажмите Получить новый токен доступа внизу и авторизуйтесь, используя существующие пользовательские данные из пула.

 17.06.2021 10:50
Я подумал, что опубликую дополнительную информацию об использовании когнито с эластичным балансировщиком нагрузки. Балансировщики нагрузки AWS не поддерживает аутентификацию через заголовки :( вы можете заставить его работать на почтальоне, скопировав файлы cookie из успешного веб-запроса в запрос почтальона

 25.07.2021 11:24
Другие вопросы по теме
Отклонить запрос на регистрацию в пулах пользователей Cognito с помощью NETCore 2.1
AWS Cognito Trigger Post Authenticated - Lambda Nodejs 8.10 - возвращает ошибку настраиваемого ответа TypeError: невозможно установить свойство
Aws AuthenticationHandler
Cognito - электронные письма не отправляются после импорта пользователей
Какое значение использовать для ключа в CognitoCachingCredentialsProvider.setLogins?
AWS Cognito - получение подпрограммы пользователя в функции Lambda Trigger
Доступ к идентификатору пользователя в AWS Lambda
Атрибуты пользовательского пула отключены с помощью модуля аутентификации AWS Amplify
Как указать собственное сообщение об ошибке в Android с помощью когнито
Список всех пользователей Cognito
Похожие вопросы
Почтальон не может отправить почтовый запрос на сервер и сервер, обнаружив его как запрос на получение вместо публикации
Как передать обычный текст в качестве тела запроса с помощью NestJS?
Загрузить изображение с URL через Drive API
Разница между http: client и Requests
Как решить код ошибки 45: сериализовать / десериализовать Springboot LocalDate с помощью Json ObjectMapper
Почему POST-запрос от POSTMAN возвращает пустой?
Утверждение в почтальоне для проверки формата даты
POSTMAN - Newman Run Iteration Json File на определенной конечной точке
Многостраничная форма конечной точки Postman и Silverstripe API с загрузкой файла
Как обойти предварительную проверку в HTTP-сообщении со сложным типом мультимедиа с помощью Electron?

PHP
Запрос PATCH и PUT не работает с данными формы
Я использую Laravel для создания RESTFUL приложения, и я тестирую приложение с помощью Postman. В настоящее время существует проблема для PATCH или PUT, если данные отправляются из Postman с данными формы.

// Parameter `{testimonial}` will be sent to backend.
Route::post  ('testimonials/{testimonial}', 'TestimonialController@update');

// Parameter `{testimonial}` will not be sent to backend (`$request->all()` will be empty) if sent from Postman with form-data.
Route::patch ('testimonials/{testimonial}', 'TestimonialController@update');
Route::put   ('testimonials/{testimonial}', 'TestimonialController@update');
Используя данные формы, $request->all() подойдет для POST.
Использование x-www-form-urlencoded, $request->all() подойдет для PATCH, PUT и POST.
Однако, если я отправляю PUT и PATCH с данными формы из Postman, $request->all() будет пустым (параметры не будут отправлены на бэкэнд).
Сейчас решение - использовать POST для обновления модели. Я хочу знать, почему PATCH и PUT не работают при отправке с данными формы из Postman.

 05.06.2018 06:15
38
7
37 068
8
 Ответы 8
Это известная проблема, и предлагаемое решение согласно следующему Github комментарий состоит в том, что при отправке запросов PATCH / PUT вы должны сделать следующее:

You should send POST and set _method to PUT (same as sending forms) to make your files visible

По сути, вы отправляете запрос POST с параметром, который устанавливает фактический метод, и Laravel, кажется, это понимает.

Согласно документация:

Since HTML forms can't make PUT, PATCH, or DELETE requests, you will need to add a hidden _method field to spoof these HTTP verbs. The @method Blade directive can create this field for you:

<form action = "/foo/bar" method = "POST">
    @method('PUT')

    ...
</form> 
В качестве альтернативы вы можете использовать вспомогательную функцию method_field для выполнения вышеуказанного:

The method_field function generates an HTML hidden input field containing the spoofed value of the form's HTTP verb. For example, using Blade syntax:

<form method = "POST">
    {{ method_field('PUT') }}
</form>
 05.06.2018 06:22
Метод Laravel PATCH и PUT не работает с form-data, это известная проблема Symfony и даже PHP (для этого Google - Laravel использует множество пакетов фундамента Symfony, включая Request).

Если вам не нужно передавать файл (ы) через запрос, измените form-data на raw с типом содержимого json. Например: {"name":"changed"}. Он будет читаться как php://input, и ваш код должен работать нормально ($request->all() теперь ["name" => "changed]).

Если вам нужно передать файл (ы), на мой взгляд, НЕ передает его в методах REST API. Вы можете написать другой метод, чтобы делать все, что вам нужно с вашим файлом (файлами) (например: POST form-data -> загрузить файл -> обновить базу данных -> вернуть путь к файлу / url / даже его содержимое base64), тогда вы можете использовать его вывод / result, чтобы продолжить использование вашего метода patch / put (raw с типом содержимого json). Я всегда так делаю, когда работаю с файлами в API.

Надеюсь на эту помощь!

 05.06.2018 06:54
Типы носителей формы не имеют какой-либо семантики, определенной для PATCH, поэтому использовать их действительно плохая идея (см. https://www.rfc-editor.org/errata/eid3169).

Для PUT ожидаемым поведением будет сохранение только закодированной в форме полезной нагрузки (в этом формате). Вы действительно этого хотите?

 05.06.2018 10:05
Я узнал, как решить эту проблему, здесь, в этом посте, и хотел бы поделиться тем, что я сделал.

На следующем изображении показано, как я настраиваю Postman для отправки запроса HTTP POST, захожу в запрос СТАВИТЬ и заставляю его получать мои файлы.

Я не уверен, что это правильный способ сделать RESTFul API. Но работает нормально

An example on Postman how to setup your HTTP Request

 20.03.2020 22:12
так как все упомянули выше и все объяснили, но все же я не вижу ответа для случаев использования REST API, поэтому я последовал ответу @Caique Andrade и отправил запрос POST и сформировал свою URL-ссылку следующим образом:

url = 'https://yourwebsite.com/api/v1/users/$id?_method=PUT';
$id - это идентификатор переменной для пользователя.

?_method=PUT добавлен в запрос POST url для подмены запроса, и он работает.

в моем случае я использовал Dart во флаттере и отправил почтовый запрос с использованием пакета Http Laravel перехватывает этот запрос POST как запрос PUT

 22.05.2020 18:52
Как уже упоминалось, это не проблема Symfony (или laravel, или любого другого фреймворка), это ограничение PHP.

Изучив несколько хороших RFC для ядра php, команда разработчиков ядра, похоже, несколько сопротивляется реализации чего-либо, связанного с модернизацией обработки HTTP-запросов. Впервые об этой проблеме было сообщено в 2011 году, и это не похоже на то, чтобы иметь собственное решение.

Тем не менее, мне удалось найти это расширение PECL. Я не очень хорошо знаком с pecl и, похоже, не мог заставить его работать с грушей. но я использую CentOS и Remi PHP с пакетом yum.

Я запустил yum install php-pecl-apfd, и он буквально сразу устранил проблему (ну, мне пришлось перезапустить мои докер-контейнеры, но это было само собой разумеющимся).

То есть request->all() и files->get() снова начали работать с запросами PATCH и PUT с использованием multipart/form-data.

Я считаю, что есть и другие пакеты в различных вариантах Linux, и я уверен, что любой, кто больше знает о расширениях pear / pecl / general php, может без проблем запустить его на Windows или Mac.

 25.06.2020 15:43
Как говорит @DazBaldwin, это ограничение php, и его можно решить, установив расширение apfd. На окнах просто загрузите файл dll здесь в соответствии с настройками вашей системы и поместите php_apfd.dll в каталог путь к php / ext, наконец, поместите extension = apfd в файл php.ini.

это сработало для меня на окнах.

 26.10.2020 21:20
Вы можете использовать метод публикации. const form = новый просто добавьте form.append ('_ method', 'PATCH');

 30.01.2021 06:14
Другие вопросы по теме
Как вставить много тегов с помощью внешнего ключа?
Советы по сохранению данных пользователя во время аутентификации в социальных сетях (Laravel Socialite)
.htaccess для нескольких установок laravel на общем хостинге
Строка поиска из базы данных, содержащая определенные символы laravel 5
Неявная привязка ресурса Laravel 5.6 не работает
Есть ли практические ограничения для Eloquent ORM при активной загрузке?
Возвращение красноречивых отношений Laravel без временных меток
Несколько одинаковых идентификаторов "Select Option", динамический код Javascript
«Неверный параметр файла» при импорте файла .gz в phpmyadmin
Параметр экземпляра объекта модели функции ресурсов laravel
Похожие вопросы
Как отправить настраиваемый атрибут для загрузки файла фрагмента
Проблема с кодировкой символов при отправке SMS-сообщений
Советы по сохранению данных пользователя во время аутентификации в социальных сетях (Laravel Socialite)
Выполнить возврат, затем вызвать другую функцию в PHP
Пользовательский AUTO_INCREMENT
Как поместить тег php в файл .js?
.htaccess для нескольких установок laravel на общем хостинге
"самый простой код PHP preg", чтобы проверить помощь точки в строке
Не могу загрузить класс на Slim 3
Корпус переключателя не работает должным образом

JAVASCRIPT
Почтальон получает значение из JSON, где равно значению в массиве, используя javascript
В настоящее время используется последняя версия Postman: 6.7.4 (последняя)

Я пытаюсь получить значение из тела ответа JSON и сохранить его в переменной среды, НО значение «имя пользователя» должно быть равно моему предпочтительному имени пользователя.

Обычно я извлекаю такое значение:

var jsonData = pm.response.json();
pm.environment.set("useridToken", jsonData.Customers[0].userid);
Это дало бы мне первый элемент в списке, но я нет хочу получить ни первый, ни второй элемент из списка. Например, я хочу получить useridгдеusernameРАВНЫЙ "Билли".

Вывод ответа тела:

{
"Customers": [
    {
        "id": 24,
        "userid": 73063,
        "username": "BOB",
        "firstname": "BOB",
        "lastname": "LASTNAME
    },
    {
        "id": 25,
        "userid": 73139,
        "username": "Billy",
        "firstname": "Billy",
        "lastname": "lasty"
    }
   ]
}
Какие-нибудь советы?

Помнится в SoapUI было так:

$.channels[?(@.is_archived=='false')].id[0]
Я думаю, это невозможно сделать в JS в Postman?

 27.02.2019 10:20
9
2
8 136
8
Данный вопрос помечен как решенный
 Ответы 8
 Ответ принят как подходящий
Вы можете использовать: Массив.прототип.найти():

const data = {
  "Customers": [{
      "id": 24,
      "userid": 73063,
      "username": "BOB",
      "firstname": "BOB",
      "lastname": "LASTNAME"
    },
    {
      "id": 25,
      "userid": 73139,
      "username": "Billy",
      "firstname": "Billy",
      "lastname": "lasty"
    }
  ]
}

const user = data.Customers.find(u => u.username === 'Billy')
const userid = user ? user.userid : 'not found'

console.info(user)
console.info(userid)
 27.02.2019 10:24
find(), как указывает другой ответ, является лучшим решением здесь, но если имя пользователя не уникально и вам нужен массив пользователей, где имя пользователя «Билли», используйте filter()

const jsonData = {
  "Customers": [{
      "id": 24,
      "userid": 73063,
      "username": "BOB",
      "firstname": "BOB",
      "lastname": "LASTNAME"
    },
    {
      "id": 25,
      "userid": 73139,
      "username": "Billy",
      "firstname": "Billy",
      "lastname": "lasty"
    }
  ]
}
console.info(jsonData.Customers.filter(c => c.username === 'Billy'))
 27.02.2019 10:28
Ваш userid также можно получить с помощью filter следующим образом:

const data = {
  "Customers": [{
      "id": 24,
      "userid": 73063,
      "username": "BOB",
      "firstname": "BOB",
      "lastname": "LASTNAME"
    },
    {
      "id": 25,
      "userid": 73139,
      "username": "Billy",
      "firstname": "Billy",
      "lastname": "lasty"
    }
  ]
};
const username = 'Billy';
const user = data.Customers.filter(obj => obj.username.toLowerCase() === username.toLowerCase())[0];
const userid = user ? user['userid'] : null;

console.info(userid);
Примечание:.toLowerCase() здесь необязателен, вы можете использовать его в зависимости от вашего состояния.

Тогда вы можете просто установить его как -

pm.environment.set("useridToken", userid);
 27.02.2019 10:31
В тестовом сценарии Postman вы можете использовать some функции Javascript. В вашем случае слишком много способов сделать. Я покажу вам, как решить ваш случай с помощью функции Array.find:

var jsonData = pm.response.json();
var user = jsonData.Customers.find(function(user) {
    return user.username === 'Billy';
    // OR you could config username in postman env
    // return user.username === pm.variables.get("username_to_find"); 
});
pm.environment.set("useridToken", user.userid);
 27.02.2019 10:36
Попробуй это

const userid = data.Customers.find(u => u.username === 'Billy') || 'not found';
 27.02.2019 11:00
Повторение ответ с наибольшим количеством голосов на данный момент, немного изменен.
Также добавление решения, вдохновленного другой ответ Лодаша.1

const jsonData = {
  Customers: [{
    id: 24,
    userid: 73063,
    username: 'BOB',
    firstname: 'BOB',
    lastname: 'LASTNAME'
  }, {
    id: 25,
    userid: 73139,
    username: 'Billy',
    firstname: 'Billy',
    lastname: 'lasty'
  }]};
for (const i in jsonData.Customers) {
  console.info('userid of customer['+i+']: '+jsonData.Customers[i].userid);
}
const userId_UsingFind = (name) => {
  const user = jsonData.Customers.find(item => item.username === name);
  return user ? user.userid : user;
};
console.info('Using .find(), userid of "Billy": '+userId_UsingFind('Billy'));
console.info('Using .find(), userid of "Joe": '+userId_UsingFind('Joe'));

const userId_Native = (name) => {
  for (const i in jsonData.Customers) {
    if (jsonData.Customers[i].username === name) {
      return jsonData.Customers[i].userid;
    }
  }
};
console.info('Native loop, userid of "Billy": '+userId_Native('Billy'));
console.info('Native loop, userid of "Joe": '+userId_Native('Joe'));
Как видно из кода, решение с использованием .find() одновременно короткое и элегантное.

1 Предполагая, что желаемый результат является userid из первыйBilly. Чтобы получить множество из userid:s для вхождений все изBilly см. ответ, который возвращает массив userid:s .

 11.02.2021 11:20
В этом ответе показано решение с использованием библиотеки JavaScript. Лодаш.
Это нет предназначено в качестве рекомендации, но просто для доказательства того, что это возможный, чтобы использовать Lodash.
Это вдохновлено другой лодаш ответ.1

const jsonData = {
  Customers: [{
    id: 24,
    userid: 73063,
    username: 'BOB',
    firstname: 'BOB',
    lastname: 'LASTNAME'
  }, {
    id: 25,
    userid: 73139,
    username: 'Billy',
    firstname: 'Billy',
    lastname: 'lasty'
  }]
};

const userId_Lodash = (name) => {
  let userId;
  _.forEach(jsonData.Customers, (item) => {
    if (item.username === name) { userId = item.userid; }
  });
  return userId;
};
console.info('Lodash loop, userid of "Billy": ' + userId_Lodash('Billy'));
console.info('Lodash loop, userid of "Dave": ' + userId_Lodash('Dave'));
<script src = "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.19/lodash.js"></script>
Что касается рассматриваемого вопроса, я не вижу особой причины использовать Lodash библиотека.
Но в других примерах это может иметь еще больше смысла.

1 В размещенном вопросе не указано, является ли желаемый результат первыйuserid соответствующий Billy или все такой идентификатор пользователя:s. Этот ответ дает попадание первый.

 12.02.2021 11:52
Этот ответ вдохновлен другой ответ, который выводит массив. 1

В оригинальном плакате четко не указано, будет ли желаемый результат должно быть не замужемuserid (предположительно первое появление?) - или массив, содержащий всеuserid:s, соответствующий «Билли».

Этот ответ показывает решение последнего случая с использованием Лодаш.

const jsonData = {
  Customers: [{
    userid: 73063,
    username: 'BOB'
  }, {
    userid: 73138,
    username: 'Billy'
  }, {
    userid: 74139,
    username: 'Billy'
  }]
};

const userIds = [];
_.forEach(_.filter(jsonData.Customers, c => c.username === 'Billy'),
  item => { userIds.push(item.userid); });
console.info(userIds);
<script src = "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.19/lodash.js"></script>
1 Этот ответ очень полезен, поскольку он подсказывает, как отфильтровать соответствующие объекты массива Customers. Однако оригинальный постер хочет (массив) userid(s), который является номер, а не массивом из объекты, что содержитuserid:s. Вот как мой ответ здесь разные.

 12.02.2021 15:22
Другие вопросы по теме
JavaScript - вставлять объекты внутри объекта в глобальный массив
Сравните значения двух разных массивов
Инициализировать тензорную переменную без элементов только форму
Добавить свойство к каждому объекту конкретной структуры JS?
Как работает эта однострочная функция Javascript?
Jq — Как отфильтровать объект с несколькими целыми числами
Javascript: проверка на совпадение массива ключевых слов в строке
Отображение соответствующих данных из jQuery JSON при выборе флажка
Инициализация параметра Fortran с аргументом намерения (в)
Как рекурсивно добавить размеры в массив MATLAB?
Похожие вопросы
JavaScript - вставлять объекты внутри объекта в глобальный массив
Angular — синхронный XMLHttpRequest для загрузки JSON активов
Создание настраиваемого поля ввода с веб-компонентами, добавляемыми через шаблон и настраиваемыми перед добавлением в DOM
Суммируйте пользовательские атрибуты переключателей и отобразите их в текстовом поле
Node.js + Apache — https://localhost:3000/socket.io/ ERR_CONNECTION_REFUSED
Создайте статический сайт один раз и разверните его на нескольких хостах
Изменить выбранный div из строки запроса
Карта Google, добавление поля к позиции zoomControlOptions
Js — Как вызвать асинхронную функцию в Promise .then()
Преобразовать объект в массив javascript, когда объект не имеет кавычек

JAVA
"Content type" application / json; charset = UTF-8 'not supported "в приложении Spring Rest
Когда я делаю POST-запрос на локальный: 8080 / API / пользователи для создания нового пользователя, я получаю следующую ошибку:

{
    "timestamp": "2018-05-28T09:44:55.704+0000",
    "status": 415,
    "error": "Unsupported Media Type",
    "message": "Content type 'application/json;charset=UTF-8' not supported",
    "path": "/api/users/"
}
&quot;Content type&quot; application / json; charset = UTF-8 &apos;not supported &quot;в приложении Spring Rest

Это тело запроса, выбран JSON (application / json). Это дает ту же ошибку, даже если я удалю роли и оставлю их равными нулю.

&quot;Content type&quot; application / json; charset = UTF-8 &apos;not supported &quot;в приложении Spring Rest

Тип содержимого заголовка также является application / json.

&quot;Content type&quot; application / json; charset = UTF-8 &apos;not supported &quot;в приложении Spring Rest

Это мой контроллер:

@PostMapping("/api/users" )
public User createUser(@Valid @RequestBody User user) {
    securityService.autologin(user.getUsername(), user.getPassword());
    return userService.createUser(user);
}
Функция createUser в UserService:

public User createUser(@Valid @RequestBody User user) {
    user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
    user.setRoles(new HashSet<>(roleRepository.findAll()));
    return userRepository.save(user);
}
редактировать
Это мой класс пользователя:

@Entity
@Table(name = "user")
@EntityListeners(AuditingEntityListener.class)
@JsonIgnoreProperties(value = {"createdAt", "updatedAt"}, 
                      allowGetters = true)
public class User implements Serializable{

    private static final long serialVersionUID = 1L;


    public User() {
        super();
        // TODO Auto-generated constructor stub
    }

    @Id
    @Column(name = "user_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "user_name")
    private String name;

    @Column(name = "user_email")
    private String email;

    @Column(name = "user_password")
    @NotBlank
    private String password;

    @Column(name = "user_status")
    private String status;

    @Column(name = "user_tel")
    private String tel;

    @Column(name = "user_confirmation")
    private String confirmation;

    @Column(name = "user_birth_date")
    @Temporal(TemporalType.DATE)
    private Date birth_date;

    @Column(nullable = false, updatable = false)
    @Temporal(TemporalType.TIMESTAMP)
    @CreatedDate
    private Date createdAt;

    @Column(nullable = false)
    @Temporal(TemporalType.TIMESTAMP)
    @LastModifiedDate
    private Date updatedAt;

    @JsonManagedReference
    @ManyToMany
    @JoinTable(name = "user_role", joinColumns = @JoinColumn(name = "user_id"), inverseJoinColumns = @JoinColumn(name = "role_id"))
    private Set<Role> roles;

    @Column(name = "username")
    @NotBlank
    private String username;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getTel() {
        return tel;
    }

    public void setTel(String tel) {
        this.tel = tel;
    }

    public String getConfirmation() {
        return confirmation;
    }

    public void setConfirmation(String confirmation) {
        this.confirmation = confirmation;
    }

    public Date getBirth_date() {
        return birth_date;
    }

    public void setBirth_date(Date birth_date) {
        this.birth_date = birth_date;
    }

    public Date getCreatedAt() {
        return createdAt;
    }

    public Date getUpdatedAt() {
        return updatedAt;
    }

    public void setUpdatedAt(Date updatedAt) {
        this.updatedAt = updatedAt;
    }

    public Set<Role> getRoles() {
        return roles;
    }

    public void setRoles(Set<Role> roles) {
        this.roles = roles;
    }
}
 28.05.2018 11:52
23
12
68 883
9
Данный вопрос помечен как решенный
 Ответы 9
Установите @Produces(MediaType.APPLICATION_JSON) в свою функцию, чтобы установить ее в mime-типе json.

Вы можете проверить этот рестапи для получения дополнительной информации.

 28.05.2018 11:57
Вы можете попробовать что-то вроде

@PostMapping(value = "/rest/account/json", consumes = {"application/json"})

 28.05.2018 11:59
 Ответ принят как подходящий
Я смог решить эту проблему, удалив @JsonManagedReference.

 28.05.2018 15:30
Вы указали content-type = application / json. Я думаю, вам, возможно, придется также проверить свойство заголовка «Принять» (application / json)

postman screenshot

 21.11.2018 16:03
В нем четко указано, что тип мультимедиа не поддерживается, что означает, что из-за какой-либо проблемы вызов операции не может быть завершен. поэтому проверьте, что запрашивает ваша служба, и правильно ли вы отправляете все поля. В большинстве случаев возникает проблема с отображением. Проверить консоль на наличие ошибок.

 10.04.2019 14:15
Вместо этого вы можете использовать "application / json"



 17.01.2020 10:54
В моем случае произошел сбой Джексона, зарегистрированный как ПРЕДУПРЕЖДЕНИЕ:

Failed to evaluate Jackson deserialization for type [[simple type, class ***]]: com.fasterxml.jackson.databind.JsonMappingException: Conflicting setter definitions for property [...]

Я случайно перегрузил сеттер, поэтому Джексон не смог решить эту проблему, и пружина выбросила 415.

 28.05.2020 12:20
Возможен случай, когда кто-то по ошибке оставляет 2 геттера для одного и того же свойства, и десериализация Джексона не может быть оценена.

Это бросает

Failed to evaluate Jackson deserialization for type [[simple type,
class com.org..*..*]]:
com.fasterxml.jackson.databind.exc.InvalidDefinitionException:
Conflicting getter definitions for property \"field_name\":
com.org..*..*#getterBName() vs com.org..*..*#gettername()"
В этом случае просто удалите лишний получатель этого поля.

 27.01.2021 07:15
Я также столкнулся с этой ошибкой как WARN с десериализацией Джексона. Моя ситуация более тесно связана с ответом Klaudia, где у меня было поле участника в моем POJO для службы, которую я пометил с помощью @JsonIgnore, но я переименовал свои методы получения и установки в getService () и setService () для краткости вместо имя переменной, которое соответствует более длинному названному интерфейсу службы. Добавление @JsonIgnore в геттер и сеттер с разными именами устранило ошибку.

 20.03.2021 20:14
Другие вопросы по теме
RequestMapping работает с частными методами
Spring Boot - доступ к значениям из application.yml
Spring-boot: запуск работает, а java-jar - нет
Установите точное имя файла при загрузке файлов
Запрос @ElementCollection Map
Я не получаю строку возврата restcontroller на страницу jsp
Iframe перекрестного происхождения перезаписывает идентификатор сеанса
Как преобразовать тип данных с помощью шаблона Spring Mongo
Проблема с получением ролей пользователей в приложении Spring Rest
Консоль показывает ошибку, как показано на изображении, и необходимо избавиться от нее
Похожие вопросы
Как поместить текст подписи слева на флажке, переключателях и слайдере?
RequestMapping работает с частными методами
Ошибка сборки Android Studio gradle: не удалось найти bundletools.jar (com.android.tools.build:bundletools:010-alpha01)
Создать банку с META-INF \ services для расширения модуля Jboss
Отражение Java: вызов абстрактных методов интерфейса без создания экземпляра
Spring Boot - доступ к значениям из application.yml
Сканер пользовательского ввода неизвестный источник
Как сделать метод доступным во всех подпакетах
Spring-boot: запуск работает, а java-jar - нет
Как получить доступ к веб-странице с неправильной конфигурацией базы данных

JAVASCRIPT
Почтальон: Как утверждать, что все элементы массива существуют в другом массиве?
Я утверждаю, что элементы в массиве1 существуют в массиве2 или нет, ниже приведены образцы массива,

var array1 = [
        {
            "name": "appe",
            "loc": "war",
            "order": 5,
            "neck": "NO",
            "end": false
        },
        {
            "name": "con",
            "loc": "conve",
            "order": 15,
            "neck": "NO",
            "end": true
        }]

var array2 = [{"neck":"NO"
"end":true,
"loc":"conve",
"name":"con",
"order":15
}]
код, который я пробовал -

const lodash = require("lodash");
    for(var i = 0; i < array2.length; i++ )
    {
            tests['response json contain Data'] = lodash._.has(points, array2[i]);
            //pm.expect(array2[i]).to.be.oneOf(array1);

    }
ошибка, которую я получаю -

response json contain Data | AssertionError: expected false to be truthy
РЕДАКТИРОВАТЬ после очередной попытки2 -

pm.expect(array2[i]).to.be.oneOf(array1);
ошибка -

AssertionError | expected { Object (name, loc, ...) } to be one of [ Array(20) ]
попытка3 -

pm.expect(array1).to.deep.equal(array2);
ошибка -

AssertionError | expected [ Array(20) ] to deeply equal [ Array(18) ]
что я делаю не так?. что я хочу, так это то, что если какой-либо элемент в массиве2 не находится в массиве1, он должен потерпеть неудачу.
Спасибо

 12.07.2019 13:37
4
0
4 844
3
Данный вопрос помечен как решенный
 Ответы 3
var array1 = [{
    "name": "appe",
    "loc": "war",
    "order": 5,
    "neck": "NO",
    "end": false
  },
  {
    "name": "con",
    "loc": "conve",
    "order": 15,
    "neck": "NO",
    "end": true
  }
]

var array2 = [{
  "neck": "NO",
  "end": true,
  "loc": "conve",
  "name": "con",
  "order": 15
}]

array2.forEach( item => {
  if ( !array1.includes(item)){
  throw 'doesn\'t include' 
  }
})
 12.07.2019 13:55
what I want is if any one element in array2 is not in array1 it should fail

var array1 = [{
    "name": "appe",
    "loc": "war",
    "order": 5,
    "neck": "NO",
    "end": false
  },
  {
    "name": "con",
    "loc": "conve",
    "order": 15,
    "neck": "NO",
    "end": true
  }
]

var array2 = [{
  "neck": "NO",
  "end": true,
  "loc": "conve",
  "name": "con",
  "order": 15
}, {
  "neck": "NOo",
  "end": true,
  "loc": "conve",
  "name": "con",
  "order": 15
}];

// Finds at least one object on array2 which is not in array1.
// The function some finds at least one according to the 
// result of findIndex which is using a handler who executes 
// the function every.
// The function every, basically, compares every key-value 
// between array2 and array1.
let result = array2.some(o => array1.findIndex(ao => Object.entries(o).every(([key, value]) => ao[key] === value)) === -1);

console.info(result); // Returns true because one element is not in array1
 12.07.2019 13:55
 Ответ принят как подходящий
Библиотека утверждений Chai включена Postman по умолчанию в свое приложение. Поэтому вам нужно использовать to.deep.equal. Он будет сравнивать вложенные массивы, а также вложенные объекты.

РЕШЕНИЕ:

pm.test("verify two objects", function () {
  var array1 = [{
    "name": "appe",
    "loc": "war",
    "order": 5,
    "neck": "NO",
    "end": false
  },
  {
    "name": "con",
    "loc": "conve",
    "order": 15,
    "neck": "NO",
    "end": true
  }];

  var array2 = [{
    "neck": "NO",
    "end": true,
    "loc": "conve",
    "name": "con",
    "order": 15
  }, 
  {
    "neck": "NOo",
    "end": true,
    "loc": "conve",
    "name": "con",
    "order": 15
  }];

  pm.expect(array1).to.deep.equal(array2); // Failed
  pm.expect(array1).to.deep.equal(array1); // Passed

});
 12.07.2019 14:18
Другие вопросы по теме
Как преобразовать массив Json в схему Avro
Как использовать массив включает и проверять объект по свойству объекта
Сортировка массива JSON по одному полю во время итерации с использованием JS
Как преобразовать многомерное значение ключа в один массив?
Как отправить массив строк с помощью tcp в С#
Несколько значений для ключа в ksh
Преобразование «строкового объекта» в массив Int32, а затем в массив Uint32
Как преобразовать JSON ARRAY из IRESTRESPONSE в массив C#
Матрица, созданная двумя массивами, не имеет ожидаемых размеров
Как создать динамический массив хэшей в Ruby on rails
Похожие вопросы
Mongo db Порядок записи
Маршрутизатор React не отображает маршруты с одним идентификатором при обновлении
Как динамически добавить диапазон типов ввода css в функцию javascript setAttribute
Rails/Webpack: не удается получить доступ к библиотеке JS
Функция не работает должным образом — оба элемента не отражают переданные аргументы
Проверка массива объектов на равенство и размещение соответственно
Моя страница не прокручивается даже после применения всех методов, которые я мог найти в Интернете
ExpressJS RESTapi динамически устанавливает маршруты
Компоненты игры не будут отображаться после добавления оператора if/else
Как разбирать визуально связный текст в отображаемом HTML?

JAVASCRIPT
Почтальон - изменение всех вхождений символа в строке
В почтальоне я хочу изменить все вхождения косой черты на подчеркивание в моей строке.

До сих пор я написал тест, который анализирует ответ JSON и помещает строку, которую я хочу, в массив, с этого момента мой код выглядит следующим образом:

//an example string is below

var string =  "1/7842/0889#001";

// convert / to _
var slash = "/";
var newstring = string.replace (slash, "_");


// This just changes the first occurrence of the slash to an underscore
Я пытался использовать модификатор `g', и это не помогло в Postman.

var newstring = string.replace (/slash/g, "_");
Я хочу, чтобы строка закончилась как

"1_7842_0889#001";

 24.07.2019 10:54
1
1
3 882
3
Данный вопрос помечен как решенный
 Ответы 3
Разделите его с помощью косой черты и соедините их с помощью _

var string =  "1/7842/0889#001";

var strArray = string.split('/');

var newString = strArray.join("_");
Или в одну строку

var newString = string.split('/').join("_");
 24.07.2019 11:08
 Ответ принят как подходящий
Вам нужно избежать / в вашем регулярном выражении с помощью '\'

//an example string is below
var string =  "1/7842/0889#001";

// convert / to _
var newstring = string.replace (///g, "_"); // prints 1_7842_0889#001

console.info(newstring);
 24.07.2019 11:08
User regular expression which will help  us to replace the characters globally by adding g
Все регулярные выражения будут находиться внутри // Итак, для вашего вопроса поможет следующий код

Ул.заменить(///, "_")

Added / just to escape it's value
 24.07.2019 11:18
Другие вопросы по теме
Сравнение строкового значения с данными .json для теста API в Postman
JSON не показывает, как это должно быть в Postman
OAuth 2.0 {"error_description":"Неверный эмитент или подпись."} в Postman
ASP.NET — не удается сразу получить ответ об ошибке при загрузке очень большого файла?
Почему мое сообщение почтальона (данные) не доходит до моего приложения для Android?
Получить значение атрибута скрытого элемента формы
Http-запрос работает в PostMan, но не в JS
Как исправить «Ошибка типа: невозможно прочитать заголовок свойства неопределенного» в Javascript
Как опубликовать сообщение с изображением с помощью Postman
Как исправить ошибку при попытке получить список пользователей в Slack
Похожие вопросы
Как получить атрибут, зная имя класса в javaScript
Ошибка выполнения: ошибка TS2307: не удается найти модуль «листовка»
Циклическая вставка с foreach
Получить данные из действия контроллера в jquery datatable
Передача значения радиокнопки
Реагировать на собственную анимированную задержку не учитывает заданное значение
Как изменить семейство шрифтов всплывающей подсказки Highchart
Как получить значение как каждый отдельный объект javascript
Jquery не обнаруживает щелчок после добавления элемента
Показать все метки в Chart.js

GRAPHQL
Поддерживает ли Postman GraphQL Beta подписку?
Я пытаюсь использовать Postman v7.3.4 для разработки и тестирования API-интерфейсов GraphQL. Однако при использовании подписка GraphQL ответ никогда не показывает данные, вместо этого он показывает что-то вроде следующего:

{
    "data": null,
    "extensions": {
        "tracing": {
            "version": 1,
            "startTime": "2019-07-29T20:40:20.1062162Z",
            "endTime": "2019-07-29T20:40:22.7282162Z",
            "duration": 2621830500,
            "parsing": {
                "startOffset": 8100,
                "duration": 160500
            },
            "validation": {
                "startOffset": 8100,
                "duration": 160500
            },
            "execution": {
                "resolvers": []
            }
        }
    }
}
При использовании чего-то вроде ГрафиQL ответ показывает значение подписки при его изменении.

Я просмотрел Документация почтальона, но не смог определить, действительно ли поддерживаются подписки.

Итак, мой вопрос: поддерживает ли Postman v7.3.4 подписку? Планируется ли поддержка в будущем?

 29.07.2019 23:00
11
0
2 931
3
Данный вопрос помечен как решенный
 Ответы 3
Подписки GraphQL работают через WebSocket, а конечные точки WebSocket в настоящее время не поддерживаются Postman.

Вот запрос функции для поддержки WebSocket в Postman: https://github.com/postmanlabs/postman-app-support/issues/4009

 15.05.2021 22:16
 Ответ принят как подходящий
Почтальон теперь поддерживает соединения через веб-сокет: -

https://blog.postman.com/postman-supports-websocket-apis/

 20.12.2021 08:53
Чтобы расширить информацию, идея состоит в том, чтобы подписаться на веб-сокет и отправить ему сообщение с запросом.

Если вы хотите попробовать, например, демо-версию npalm (https://github.com/npalm/blog-graphql-spring-service.git), вы можете подписаться на ws://localhost:8080/subscriptions и запросить примечания:

Postman screen

 03.01.2022 14:33
Другие вопросы по теме
Авторизация в эмуляторе хранилища Azure с помощью почтальона?
Как прочитать тело ответа при ошибке API с помощью curl?
Получите информацию о конкретном канале из Slack с помощью Postman
Аутентификация токена DRF: { "detail": "Учетные данные аутентификации не были предоставлены." }
Почтальон Как использовать значение из ответа и использовать его в послесловии запроса
Контекст Go http не может зафиксировать сигнал отмены, когда запрос имеет тело (завиток, почтальон)
Получение синтаксической ошибки для тройного вложенного объекта JSON при тестировании в Postman
Почтальон 404 не найден
Почтальон - Сравните два ответа, игнорируя порядок и некоторые специфические свойства
Преобразование сценария JMeter в Postman
Похожие вопросы
Запросы GraphQL через Apollo
Как сделать пользовательский тип с определенным значением в graphQl
React apollo не обновляет данные после мутации
Фильтрация GraphQL по встроенному идентификатору
Использование graphql github api для получения информации о коммите по идентификатору
Как выполнить запрос GraphQL onClick в React с помощью Apollo?
Как использовать GraphQL API из основного приложения Nativescript?
Поиск конкретных результатов с определенной строкой в ​​GraphQL
Как изменить родительский узел до того, как он будет передан распознавателю?
Можно ли сгенерировать значения из объединения буквенных типов Typescript во время выполнения?

PYTHON
Зачем получать разные данные в инструментах разработчика браузера по сравнению с BeautifulSoap/Postman?
Я хочу удалить данные с этой веб-страницы

Я хочу получить все блоги... которые находятся под тегом результата (<div class = "results">)

В инструментах браузера под тегом результата отображается 10 фрагментов... Зачем получать разные данные в инструментах разработчика браузера по сравнению с BeautifulSoap/Postman?

Но с помощью Beautifulsoap я получаю

<div class = "results">
</div>
и у почтальона то же самое..

Я так и делаю..

topicuri = "\"
r = s.get(topicuri)
soup = BeautifulSoup(r.text, 'html.parser')
pages = soup.find('div', {'class': 'results'})
print(pages)
 23.03.2022 10:54
2
0
65
3
Данный вопрос помечен как решенный
 Ответы 3
Веб-сайт использует Javascript для отображения фрагментов. BeautifulSoup не выполняет Javascript, в отличие от браузера. Вы, вероятно, захотите использовать движок Chromium в Python для парсинга контента на основе Javascript.

 23.03.2022 10:59
Как уже упоминалось, requests не удалось отобразить JavaScript, но есть две альтернативы:

Используйте requests и выполните запрос на публикацию по вашему URL-адресу
Используйте selenium, чтобы получить визуализацию page_source, как вы ожидаете.
Пример
from selenium import webdriver
from selenium.webdriver.common.by import By
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from bs4 import BeautifulSoup

url = 'https://search.donanimhaber.com/portal?q=vodafone&p=3&devicetype=browsermobile&order=date_desc&in=all&contenttype=all&wordtype=both&range=all'
driver = webdriver.Chrome(ChromeDriverManager().install())
driver.maximize_window()
wait = WebDriverWait(driver, 10)
driver.get(url)

wait.until(EC.presence_of_all_elements_located((By.XPATH, './/div[@class = "results"]/div[@class = "snippet"]')))

content = driver.page_source
soup = BeautifulSoup(content,"html.parser")

pages = soup.find_all('div', {'class': 'snippet'})

for p in pages:
    print(p.h2.text.strip())
Выход
Vodafone'dan dijital sağlık projelerine ücretsiz 5G desteği
Vodafone'un son 15 yılda Türkiye ekonomisine katkısı açıklandı
"Yarını Kodlayanlar" projesinde gençler afet sorunlarına çözümler üretti
Küresel akıllı saat pazarı yılın ilk çeyreğinde yüzde 35 büyüdü
Vodafone Türkiye'nin ilk çeyrek sonuçları açıklandı: Servis gelirlerinde yüzde 19 artış
Netflix'e yeni eklenen dizi ve filmleri takip edebileceğiniz site
Sony ve SinemaTV anlaştı! Spider-Man, Venom 2 ve daha fazlası TV'de ilk kez SinemaTV'de yayınlanacak
Vodafone ve Riot Games, Türkiye'nin ilk 5G Wild Rift turnuvasını duyurdu
Türkiye'de kaç kişi numara taşıma ile operatör değiştirdi?
Turkcell'in Ramazan'a özel Salla Kazan kampanyası başladı
 23.03.2022 11:13
 Ответ принят как подходящий
Вы также можете получить данные из ответов API на вызовы json.

import requests
import json 
body= "vodafone"
headers= {
    'content-type': 'application/json'
   }

api_url = "https://search.donanimhaber.com/api/search/portal/?q=vodafone&p=3&devicetype=browsermobile&order=date_desc&in=all&contenttype=all&wordtype=both&daterange=all"

jsonData = requests.post(api_url, data=json.dumps(body), headers=headers).json()

for item in jsonData['contents']:
    categoryName=item['categoryName']
    print(categoryName)
Выход:

Operatörler - Kurumsal Haberler
Operatörler - Kurumsal Haberler
Operatörler - Kurumsal Haberler
Mobil Aksesuarlar
Operatörler - Kurumsal Haberler
Kripto Para
Sinema ve Dizi
Mobil Oyunlar
Operatörler - Kurumsal Haberler
Operatörler - Kurumsal Haberler
 23.03.2022 12:13
Другие вопросы по теме
Использование пользовательского шрифта в css с использованием zip-файла в реагирующем приложении
Угловой ngFor отображает 3 кнопки в строке
Нужно показать текст чуть выше определенных заголовков таблицы
Открыть изображения в новой вкладке в производственной сборке Vitepress
Как извлечь ссылки с помощью BeautifulSoup
Мое веб-приложение Angular маршрутизируется через кнопки, как и ожидалось, но когда я ввожу путь к странице в URL-адресе, маршрутизация не работает. При размещении на firebase
Как сгруппировать классы в CSS - Tailwind
Вся веб-страница уничтожается горизонтальной полосой прокрутки .... ничего не может сделать, кроме как ждать
Как сделать область выбора области карты Angular svg?
Как показать заголовок GitBook?
Похожие вопросы
Как выполнить группу по списку в python?
Перенос переменных Python — Julia
Преобразование биграмм в N-граммы в фрейме данных Pyspark
Как сделать программу с помощью tkinter, которая открывает полноэкранный режим в другом разрешении окна
Tensorboard не показывает результаты с использованием ray rllib
Извлечение информации из словаря в фрейме данных
Удалить значение из вложенного списка словарей
Как нарисовать шаблон фигур с помощью Tkinter Canvas?
Поиск XPATH для поля даты, где правый щелчок отключен — Selenium Python
Найдите диапазон из столбца pandas за каждый месяц

JAVA
Как отправить файл и данные через необработанный JSON от Postman
В настоящее время я разрабатываю микросервис, который получает изображение, высоту и ширину для изменения размера этого изображения в этом разрешении. Я сделал всю свою бэкэнд-сторону, теперь я борюсь на передней стороне. Что я пытаюсь сделать, так это отправить изображение, высоту и ширину в том же почтовом запросе от почтальона. После поиска я не нашел способ сделать это. Я могу отправить его через параметр запроса, но я не думаю, что это правильный путь, может быть, я ошибаюсь. Но, думая, что я должен пройти весь мой объект через параметр запроса звучит некрасиво.

То, что я пытаюсь сделать, это в почтальоне Body JSON/необработанные значения передачи трех атрибутов, которые представляют собой составной файл, который принимает изображение, высоту и ширину для разрешения. Я могу успешно передать ширину и высоту, но я не знаю, как передать изображение из тела в необработанном виде.

Пожалуйста, кто-нибудь может дать какую-нибудь идею?

Это моя модель.

public class TaskDTO {
    private int height;
    private int width;
    private MultipartFile multipartfile;
Конечная точка

@PostMapping("/task")
    public void createTask(@RequestBody TaskDTO taskDTO){
        //taskService.createTask(file, width, height);
        //System.out.println(file);
        System.out.println(taskDTO.toString());

        //System.out.println(taskDTO.toString());


    }
Почтальон Тест

Как отправить файл и данные через необработанный JSON от Postman

 17.05.2022 15:40
0
0
30
3
Данный вопрос помечен как решенный
 Ответы 3
Вы можете отправить файл только с помощью form-data, а не raw. В этом пункте вам нужно будет найти @RequestParam MultipartFile file.

Другой момент - отправить файл в виде массива байтов. Но перед этим вам нужно будет преобразовать файл в байты.

 17.05.2022 15:44
Вы можете отправить составное сообщение.

См. этот ответ: https://stackoverflow.com/a/8616667/20654

В почтальоне вы выбираете

POST

Потом форма-данные и в ключе можно выбрать файл

Example

Смотрите это для более подробного ответа:

https://stackoverflow.com/a/16022213/20654

 17.05.2022 16:10
 Ответ принят как подходящий
Вот пример использования @ModelAttribute:

ДТО 

Контроллер

Почтальон UI

 17.05.2022 16:11
Другие вопросы по теме
Как добавить составной внешний ключ с помощью данных Spring JPA и Hibernate?
Внешние зависимости Eclipse для Spring Boot — почему не отображаются все зависимости для загрузки Spring для данного проекта?
Spring Не удается получить доступ к контроллеру REST на локальном хосте (404)
Spring Boot запускает @Bean в соответствии с условием
Не удалось правильно отфильтровать время в запросе ElasticSearch
Контроллер Autowired в тесте Spring Boot имеет значение null
Как установить параметр Jpa Query из MessagingGateway?
Класс X не может быть приведен к классу Boolean (X находится в безымянном модуле загрузчика 'app'; логическое значение находится в модуле java.base загрузчика 'bootstrap
Как решить неправильные зависимости с помощью maven и openapi
Spring Boot + Flyway + Testcontainers (mariaDB): таблица «xxxx» не существует
Похожие вопросы
Превышен лимит времени в упражнении hackerearth
Не удается преобразовать DataBufferInt в DataBufferByte для определенных изображений
Как добавить составной внешний ключ с помощью данных Spring JPA и Hibernate?
Объединение Java Gremlin с ошибкой несовместимых типов проекта
Как мне делать математику с переменными экземпляра объекта после того, как я создал объект в java
Есть ли специальный учебник для реализации поисковой системы с фильтрами, такими как местоположение в студии Android?
Почему объект mockito mockito в файле stepdef Cucumber имеет значение Null?
Слушатель только для первого щелчка по JTextField
Удаление слова внутри текстового файла
Как прочитать текстовую запись на карте NFC Mifare Classic 1K в Android

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

 18.10.2022 13:52
Другие вопросы по теме
Spring Boot Microservice Intellij не работает
Почтальон - изменить часть возврата POST на localhost
Сохранение переменной коллекции Postman из тела ответа
Не удалось сгенерировать токен доступа для Powerbi
Использование AWS EC2 API (https) с шаблонами запуска EC2 — параметр LaunchTemplate не распознан
Azure Active Directory B2C, Postman получает токен доступа без взаимодействия с браузером
Большая разница во времени отклика между результатом JMeter и Postman
POSTMAN: TypeError: невозможно прочитать свойства неопределенного (чтение «данных»)
Почему я получаю эту ошибку: Ошибка почтальона: неправильный заголовок части?
Как отправить файл и данные через необработанный JSON от Postman
Похожие вопросы
Как использовать несколько переменных и строк в команде os.system()?
Получить все комбинации двоичной строки с перестановкой битов по определенным индексам (Python)
Приступить к поведению сигналов по умолчанию
Python: из str в int или с плавающей запятой с помощью input()
Словарь Python, чтение списка и добавление значений словаря
Pyrevit ISelectionFilter не работает со связанными элементами
Pandas импортирует данные столбца в неправильном порядке во фрейм данных
Скрипт Orange Python создает пользовательскую метку времени (Orange Data Mining Windows 10)
Полосы прокрутки на странице Streamlit слишком малы
«Все запрошенные пакеты уже установлены», но «ModuleNotFoundError»

JAVA
Исключение класса автоконфигурации дает ошибку 404 не найдено
Я использую безопасность Spring в своем приложении для шифрования пароля пользователя в базе данных. В связи с этим я получаю сообщение «Используя сгенерированный пароль безопасности: XXXXXX» в моем журнале загрузки Spring при запуске приложения. Я не хотел, чтобы этот пароль генерировался, поэтому я использую @SpringBootApplication (exclude = {SecurityAutoConfiguration.class}) в своем основном классе. Ниже мой основной класс

package com.example.policymanagementsystem;
import org.apache.catalina.webresources.TomcatURLStreamHandlerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication (exclude = {SecurityAutoConfiguration.class })
@ComponentScan( basePackages = {"com.example.policymanagementsystem.bean"})
public class PolicymanagementsystemApplication {

    public static void main(String[] args) {
        SpringApplication.run(PolicymanagementsystemApplication.class, args);
        }
}
Таким образом, пароль не генерируется при запуске весеннего загрузочного приложения, но когда я нажимаю API от почтальона, он дает мне ошибку 404 Not found для всех других API. Мне не нужна аутентификация ни для одного из моих API, поэтому я указал ниже конфигурацию в классе SecurityConfiguration.

@Override
    protected void configure(HttpSecurity http) throws Exception {

        http.cors().and().csrf().disable();
        http.authorizeRequests().antMatchers("/admin/**").permitAll().antMatchers("/user/**").permitAll().anyRequest().authenticated();
        
http.exceptionHandling()
        .authenticationEntryPoint(
            (request, response, ex) -> {
                response.sendError(
                    HttpServletResponse.SC_UNAUTHORIZED,
                    ex.getMessage()
                );
            }
        );
 http.addFilterBefore(jwtTokenFilter, UsernamePasswordAuthenticationFilter.class);
}
Пожалуйста, предложите мне какой-нибудь способ, чтобы я мог исключить SecurityAutoConfiguration.class и не получить ошибку 404, не найденную в моем ответе почтальона для любого API. Заранее спасибо!

 08.10.2022 08:50
1
3
98
3
Данный вопрос помечен как решенный
 Ответы 3
Удалите исключающую часть из @SpringBootApplication и. Добавьте эти две строки в файл application.properties.

spring.security.user.name=abc
spring.security.user.password=xxx

Попробуйте этот код для SecurityConfiguration. и удалите .anyRequest().authenticated(); потому что вам это не нужно.

http
                .csrf().disable()
                .authorizeRequests()
                .antMatchers("/admin").hasAuthority("ADMIN")
//                .antMatchers("/post").authenticated()
                .antMatchers("/post","/deleteComment/**", "/deletePost/**", "/updateComment/**",
                        "/updateCommentPage/**", "/updatePostPage/**","/api/draft/**","/api/post/**").hasAnyAuthority("USER","ADMIN")
                .antMatchers("/","/api","/api/addComment/**","/api/viewPost/**").permitAll()
                .and().formLogin()
                .loginPage("/login").permitAll()
                .and().httpBasic().and()
                .logout().invalidateHttpSession(true)
                .clearAuthentication(true)
                .logoutRequestMatcher(new AntPathRequestMatcher("/logout"))
                .logoutSuccessUrl("/logout-success").permitAll();
 08.10.2022 09:02
Ваша установка на самом деле требует аутентификации - .anyRequest().authenticated(); Вы можете разрешить все для любого запроса, который должен это сделать.

http.authorizeRequests().anyRequest().permitAll();
 08.10.2022 09:34
 Ответ принят как подходящий
Я нашел решение для этого, ошибка 404 не найдена была из-за того, что я не аннотировал поле в одном из классов моей модели с аннотацией @Id. Это решено сейчас.

 09.10.2022 05:44
Другие вопросы по теме
Spring boot получить все сопоставления запросов, путь, параметры, тип ответа
Запрос почтальона возвращает ошибку 406, все еще работает
Не удалось оценить выражение изнутри PreAuthorize во время тестов
Есть ли способ получить URI запроса весной?
Springboot 403 Запрещено при вызове из WebApp
Как сделать конкретный запрос или мутацию GraphQL в качестве общедоступного API в весенней загрузочной безопасности?
Spring-integration jdbc outbound-gateway совет для обработки пустых наборов результатов
Значение Bigdecimal заменить или получить правильный результат при делении
База данных H2 не создает таблицу из schema.sql
Как обрабатывать исключения в Spring, которые не выбрасываются не на уровне контроллера?
Похожие вопросы
Как Spring Boot RSocket обнаруживает отключение?
Spring boot получить все сопоставления запросов, путь, параметры, тип ответа
Сериализация Джексона с рекурсивной структурой, печатающая только qNodeId, а не дополнительные дочерние узлы
Selector.select() не блокируется после чтения SelectionKey.isReadable
Как выйти из окна после теста на селен? Проблема с нулем в драйвере
Оператор возврата в логическом методе
Группа Splunk по статистике с условием where
Не удается получить правильный цвет при наведении курсора на узел изображения в javafx
Запрос почтальона возвращает ошибку 406, все еще работает
Группа Splunk по количеству URL-адресов запросов

POSTMAN
Сценарий предварительного запроса Postman Global, который наследуют все коллекции
Postman, вероятно, самая удивительная программа, с которой я когда-либо сталкивался в своей карьере разработчика программного обеспечения.

Однако есть кое-что, на чем я застрял, и я верю, что там есть ответ...

У меня есть огромный сценарий предварительного запроса, который я копирую в каждую новую коллекцию почтальона, которую я создаю. Сценарий предварительного запроса выполняет разные действия, включая настройку сервера для выполнения моего запроса, генерацию ссылочных номеров и многие другие задачи.

Проблема в том, что у меня есть возможность скопировать этот код повсюду. Каждая коллекция, которую я создаю, получает один и тот же кусок кода. А затем, по прошествии времени, я обновляю свой кусок кода, а затем забываю, в какой коллекции есть последние обновления.

Мне сказали, что в Postman можно настроить глобальный сценарий предварительного запроса, который будет выполняться всей коллекцией. Я потратил некоторое время на поиск в Интернете, и я не могу найти ответ.

Любая помощь будет принята с благодарностью...

 07.12.2022 17:35
3
1
175
3
Данный вопрос помечен как решенный
 Ответы 3
Мне сказали, что в Postman можно настроить глобальный сценарий предварительного запроса, который будет выполняться всей коллекцией. Я потратил некоторое время на поиск в Интернете, и я не могу найти ответ.

Это исходило от самого Почтальона? Я почти уверен, что веб-перехватчики коллекций устанавливаются для каждой коллекции, так как эту тему я уже подробно исследовал ранее. Я пошел проверить на всякий случай, если вы можете пропустить название коллекции, чтобы заставить ее * или что-то в этом роде, но нет:

В связи с этим единственное предложение, которое у меня есть для вас, — это создать коллекцию утилит, которая пересекает все коллекции с заданным условным именем, например PRS-X, PRS-Y. Для этих коллекций ваша утилита будет редактировать каждую коллекцию, чтобы добавить/обновить сценарий предварительного запроса.

Как вы, наверное, знаете, вы можете запускать это по требованию, планировать его или запускать другую автоматизацию (например, обновление вашего сценария предварительного запроса).

 12.12.2022 15:17
 Ответ принят как подходящий
Я думаю, что вы не можете сделать это с более «настоящими коллекциями» без какого-либо специального сценария оболочки.

Если бы это было возможно, я думаю, они бы упомянули об этом здесь. https://learning.postman.com/docs/writing-scripts/pre-request-scripts/

Почтальон поддерживает только один сценарий предварительного запроса для каждой «настоящей коллекции», но вы можете имитировать «подколлекции» одной верхней коллекции, создавая папки под «настоящей коллекцией».

Таким образом, реальной коллекцией будет моя-серверная-коллекция — она содержит ваш сценарий предварительного запроса, и каждый контроллер Rest API является подпапкой в ​​​​этой коллекции — так что вы получите тот же эффект.

 16.12.2022 15:50
Вы переходите на вкладку «Среды» и нажимаете значок «Создать новую среду».

В окнах Environment добавьте к нему имя и переменную для вашего скрипта предварительного запроса. например preRequestScript и установите значение вашего кода предварительного запроса. (Конечно, сохраните)

Наконец, вы можете перейти к своим коллекциям, отредактировать ту, которую хотите, и выбрать «Глобальную» среду, которую вы создали, из раскрывающегося списка.

После того, как вы закончите, глобальный сценарий предварительного запроса будет выполняться перед каждым запросом в выбранной вами коллекции.

 16.12.2022 16:42
Другие вопросы по теме
Пренебрежение JSON { при POST
FastAPI, SQLalchemy; Используя Postman, я не могу правильно опубликовать необработанный запрос тела JSON. Он отлично работает с параметрами, а не с необработанным телом JSON
Скрипт динамического предварительного запроса Postman
Сценарий Google Apps вызывает API проверки адреса
Протестируйте REST API на реальном сервере (без localhost )
Как создать переменную из тела ответа в Postman?
Почему почтальон не может отправить значение в виде целого числа?
Загрузка файла С#: веб-метод не принимает данные формы, отправленные вместе с загруженным файлом
Почтальон: тест для проверки количества строк тела ответа
Отправьте Json с аксиомами в Strapi
Похожие вопросы
Как мы можем добавить время сна в тесте почтальона?
Для службы GRPC в NET 6 Postman показывает логические свойства как [], когда они имеют ложное значение
DoPost(e) безрезультатно - скрипт Google как API
Тело запроса публикации с файлом и текстом
Как разрешить «Доступ к запрошенному ресурсу запрещен»?
Параметры запроса с почтальоном и Spring
Токен носителя работает в почтальоне, но не на сервере
E.startsWith не является ошибкой функции при импорте cURL в Postman
Как получить доступ к хранилищу таблиц Azure с помощью общего ключа доступа в Postman?
Почтальон с OAuth2.0 для зарегистрированного приложения в Azure Active Directory завершается с ошибкой с недопустимым ресурсом

POSTMAN
NetSuite REST API с Postman: запись не найдена при использовании Suiteql
Я пытаюсь запросить некоторые записи, такие как поставщик и клиент, используя suiteql с REST API, используя Postman. Проблема в том, что он каждый раз возвращает одну и ту же ошибку:

«Неверный поисковый запрос. Далее следует подробное необработанное описание. Произошла ошибка поиска: запись «клиент» не найдена».

Я пытался:

другой синтаксис, такой как «Клиент», «КЛИЕНТ», «Клиенты», «Клиенты», «КЛИЕНТЫ». но без изменений.
Я добавил клиентский доступ к роли.
Есть ли что-то, что нужно активировать при использовании suiteql с остальным API?

 10.01.2023 10:39
0
0
125
3
Данный вопрос помечен как решенный
 Ответы 3
Можете ли вы сначала попробовать выбрать * от клиента и посмотреть, возвращаются ли какие-либо результаты, а затем продолжить добавление ваших условий, таких как дата, созданная больше, чем начало этого года

 10.01.2023 11:18
SELECT id, companyname, email, datecreated
FROM customer
WHERE datecreated >= BUILTIN.RELATIVE_RANGES('TFY', 'START')
AND datecreated <= BUILTIN.RELATIVE_RANGES('TFY', 'END');
 10.01.2023 13:25
 Ответ принят как подходящий
NetSuite этого не говорит, но для того, чтобы запись была доступна для поиска, пользователь должен иметь следующие разрешения:

Транзакции:

Найти транзакцию
Все необходимые записи
Списки:

Выполнить поиск
Все необходимые записи
Настраивать:

ВЕБ-сервисы REST
Войдите, используя токены доступа или Oauth 2.0
Отчеты:

Рабочая книга Suite Analytics
 11.01.2023 11:07
Другие вопросы по теме
Azure Synapse — есть ли способ пакетного импорта данных из источника ODBC?
В подсписке наборов, как заполнить сохраненные поиски с помощью редактирования | просмотреть столбец для каждой строки?
2-я функция не выполняется — SuiteScript
Проверка статуса перед отправкой письма
SuiteScript UserEvent submitField
SuiteScript или Workflow для включения/выключения автоматически сгенерированных номеров
Как я могу получить значение поля в режиме просмотра с помощью клиентского скрипта?
SuiteScript 2.0 — загрузка пользовательских данных таблицы записей
Рендеринг «Формы транзакций в формате PDF» в NetSuite — отсутствует логотип и 2 других поля
Не можете определить объект Map в сценарии Map/Reduce?
Похожие вопросы
Как передать логин и пароль при авторизации в Laravel
Приложение Spring и внешний сервер tomcat HTTP2
Как отправить объект Map<> в запросе почтальона в загрузочное приложение Spring?
Пользовательская привязка ASP.NET Web API [FromForm] для свойства списка объектов не работает с Postman, но работает с Swagger
Разбор строки JSON. Я получаю ошибку, когда пытаюсь взять данные в массив
Отправить более 1 файла через запрос публикации HttpClient С#
Как получить этот конкретный формат даты в предварительном запросе почтальона
Почтальон не может прочитать последнюю цифру URL
Как проверить ключ JSON из глобальных переменных с помощью javascript
Почему почтальон заменяет символы в моей строке запроса на получение?

JSON
Почтальон JSON Body Комментарии - я не хочу отправлять комментарии, просто хочу использовать их как напоминание для себя
Я не хочу отправлять комментарий как часть JSON, я просто хочу иметь комментарий в качестве напоминания для себя на вкладке PostMan Body для запроса JSON.

Например, у меня есть тело JSON, например:

/* just some comment here */
{
    "username": "mike",
    "usertype": 1,
    "userid": "3333333",
    "id": "kasd331"
}
Если я удалю комментарий вверху (/* just some comment here */) и отправлю этот запрос и тело, все будет работать. Однако с комментарием выше PostMan показывает мне ошибку:

IOExceptionMapper: Неожиданный символ ('/' (код 47)): может быть (нестандартный) комментарий? (не распознается как один, так как функция «ALLOW_COMMENTS» не включена для синтаксического анализатора) в [Источник: org.apache.cxf.transport.http.AbstractHTTPDestination$1@3b0fb52a; строка: 1, столбец: 2 ]

Как я могу использовать комментарии в теле JSON в PostMan?

 17.12.2020 18:43
3
0
4 235
3
Данный вопрос помечен как решенный
 Ответы 3
 Ответ принят как подходящий
Добавление комментариев как // является способом javascript, в postman javascript поддерживается только в тестовых и предварительных разделах скрипта запроса.

Комментарии не поддерживаются в теле , вы можете добавить комментарии в описании запроса или нажав комментарий рядом с кнопкой отправки.

или

Но нельзя добавлять комментарии, относящиеся к телу

если вы нажмете консоль и проверите тело запроса:

вы можете видеть, что все, что вы даете в части тела, отправляется как тело запроса. Поэтому, если ваш API предназначен для игнорирования комментария и принимает только действительный json, тогда комментарий может работать, иначе он не будет работать.

 18.12.2020 03:08
Если вам это нужно для одного запроса, а не для всей коллекции, вы можете установить скрипт pre-request следующим образом:

const rawData = pm.request.body.toString();
const strippedData = rawData.replace(
    /\\"|"(?:\\"|[^"])*"|(//.*|/\*[\s\S]*?\*/)/g,
    (m, g) => g ? "" : m
);
pm.request.body.update(JSON.stringify(JSON.parse(strippedData)));
Пожалуйста, обратитесь к этому ответу для настройки уровня коллекции: https://stackoverflow.com/a/67493035/8247069

 11.05.2021 21:20
Комментарии будут работать, если вызывающий API их поддерживает. Чтобы прокомментировать любую строку в теле запроса, мы можем просто использовать //. смотрите здесь

 30.11.2022 15:50
Другие вопросы по теме
Node.js Приведение к ошибке ObjectId на почтальоне, но я не использую никакую переменную, я просто тестирую маршрут
Запрос API, как использовать почтальон
Как передать переменную сеанса в почтальоне
Почему я получаю ошибку «Недостаточная область действия», отправляя json через почтальона?
Как получить все файлы из пути URL-адреса SharePoint, в пути которого есть общие документы %20Documents?
Почтовый запрос почтальона для Azure FormRecognizer не работает
Как декодировать токен jwt в POSTMAN?
Роль Azure AD не отображается в токене аутентификации или идентификатора для гостевого пользователя
Как узнать, к какой коллекции/папке принадлежит моя открытая вкладка?
Вложенный запрос мангуста
Похожие вопросы
Десериализация и экспорт вложенных данных JSON API в CSV
SQL Server анализирует JSON для обновления другой таблицы
Преобразование данных JSON в объект Python при игнорировании списков
Использование модели yang ietf-routing
После обновления файла json с помощью groovy данные файла содержат дополнительные фигурные скобки и объект «контент»
Как установить цвет серии диаграммы
Как кодировать иностранные символы для импорта в shopify через API с помощью PHP и CURL
CURL возвращает данные JSON
Каким будет эквивалент T-SQL условия Oracle JSON_EQUAL?
Новый объект перезаписывается старым объектом в цикле в javascript

REST
LinkedIn API :: как получить токен доступа носителя
Использовать официальный API LinkedIn непросто, и я не могу найти действующую документацию.

Следуя официальной документации я создал новое приложение, чтобы получить Client ID и Client Secret

Когда я теперь делаю вызов POST через Postman в https://www.linkedin.com/oauth/v2/accessToken, это то, что я получаю:

{
    "error": "invalid_grant_type",
    "error_description": "The passed in grant_type is invalid"
}
Где я не прав?

ИЗМЕНИТЬ ПОСЛЕ ПОМОЩИ @Amit Singh

Благодаря @AmitSingh я смог создать 2 разных приложения, тест с потоком учетных данных клиента дал мне в результате ошибку при получении токена:

{
    "error": "access_denied",
    "error_description": "This application is not allowed to create application tokens"
}
Когда я пытаюсь использовать трехэтапный рабочий процесс LinkedIn, я получаю Unauthorized

РЕДАКТИРОВАТЬ 3: ДОБРАТЬСЯ ЧЕРЕЗ POSTMAN

Теперь я вижу, что могу попросить Почтальона выполнить эту работу, однако, когда я нажимаю Get New Access Token, открывается страница с ошибкой. Я считаю, что ошибка может быть в этих 4 элементах:

Token name: может быть, мне нужно дать особое имя токена?
Auth URL: Я установил https://www.getpostman.com/oauth2/callback, как описано здесь, но, может быть, мне нужно установить что-то еще?
Access Token URL: Я оставила это поле пустым, может быть, мне нужно что-то добавить сюда?
State: Я установил случайную строку, например Hello123Boy, но, возможно, мне нужно добавить что-то еще. Может быть, это слишком долго. Может быть, слишком короткий. Может быть, он должен содержать символы и т. д.?
...Кроме того, в руководстве , на которое вы ссылаетесь , говорится, что приложение должно иметь:

r_liteprofile
rw_company_admin
w_member_social
у моего ничего нет:

Будучи недавно созданным, все еще находится на рассмотрении. Там написано, что это может занять до 90 дней. Это правда?

4-е ИЗМЕНЕНИЕ: Я ХОЧУ ВЕРИТЬ!

Вот и все, по крайней мере, теперь я получаю сообщение об ошибке: Bummer, something went wrong. The redirect_uri does not match the registered value. Это удивительно: наконец, ошибка, которая говорит, где проблема!

В приложении на вкладке «Товары» я выбираю Sign In with LinkedIn. Как Авторизованные URL-адреса перенаправления для вашего приложения, которые я установил https://www.getpostman.com/oauth2/callback

В Postman я настраиваю Auth URL и Access Token URL, как вы сказали:

 20.12.2020 22:45
6
16
6 473
3
Данный вопрос помечен как решенный
 Ответы 3
Предполагая, что вы создали свое приложение, добавили правильный URL-адрес перенаправления и включили продукт «Войти с помощью LinkedIn» для своего приложения, проблема, с которой вы столкнулись, вероятно, заключается в том, что первый вызов возвращает страницу входа, на которой ваши пользователи должны пройти аутентификацию. .

отправить запрос на https://www.linkedin.com/oauth/v2/authorization (вы, кажется, сделали это)
проанализируйте ответ шага 1 и извлеките все значения формы, добавьте имя пользователя и пароль для имитации входа пользователя
сделать запрос POST и использовать значения из предыдущего шага в качестве данных x-www-form-urlencoded
вручную следуйте заголовку перенаправления с шага 3
запишите второй заголовок перенаправления, но не следуйте ему - вместо этого извлеките код
POST-код с предыдущего шага на https://www.linkedin.com/oauth/v2/accessToken и получить в ответ access_token
Отсюда я смог успешно перейти к коду авторизации, выполнив следующие шаги. Я не уверен, пользуетесь ли вы онлайн-почтальоном, но вот мой полный экспортный файл коллекции для справки:

{
    "info": {
        "_postman_id": "397761c9-4287-43f2-860a-3c34cb710d50",
        "name": "Linkedin oAuth",
        "schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
    },
    "item": [
        {
            "name": "01 request Login form",
            "event": [
                {
                    "listen": "test",
                    "script": {
                        "exec": [
                            "const $ = cheerio.load(pm.response.text());\r",
                            "var inputs = $('form').serializeArray();\r",
                            "var payload = '';\r",
                            "inputs.forEach(i => {\r",
                            "    payload += encodeURIComponent(i.name)+ '=' + encodeURIComponent(i.value) + '&';\r",
                            "})\r",
                            "payload += 'session_key='+ encodeURIComponent(pm.collectionVariables.get('username')) + '&'\r",
                            "payload += 'session_password='+ encodeURIComponent(pm.collectionVariables.get('password'))\r",
                            "\r",
                            "pm.collectionVariables.set(\"form_data\", payload);"
                        ],
                        "type": "text/javascript"
                    }
                }
            ],
            "request": {
                "method": "GET",
                "header": [],
                "url": {
                    "raw": "https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id = {{client_id}}&redirect_uri = {{redirect_uri}}&scope=r_liteprofile&state = {{$guid}}",
                    "protocol": "https",
                    "host": [
                        "www",
                        "linkedin",
                        "com"
                    ],
                    "path": [
                        "oauth",
                        "v2",
                        "authorization"
                    ],
                    "query": [
                        {
                            "key": "response_type",
                            "value": "code"
                        },
                        {
                            "key": "client_id",
                            "value": "{{client_id}}"
                        },
                        {
                            "key": "redirect_uri",
                            "value": "{{redirect_uri}}"
                        },
                        {
                            "key": "scope",
                            "value": "r_liteprofile"
                        },
                        {
                            "key": "state",
                            "value": "{{$guid}}"
                        }
                    ]
                }
            },
            "response": []
        },
        {
            "name": "02 Submit login form",
            "event": [
                {
                    "listen": "prerequest",
                    "script": {
                        "exec": [
                            ""
                        ],
                        "type": "text/javascript"
                    }
                },
                {
                    "listen": "test",
                    "script": {
                        "exec": [
                            "var url = 'https://www.linkedin.com'+ pm.response.headers.get(\"Location\");\r",
                            "pm.collectionVariables.set('first_redirect', url);\r",
                            "//console.info(pm.collectionVariables.get('first_redirect'));"
                        ],
                        "type": "text/javascript"
                    }
                }
            ],
            "protocolProfileBehavior": {
                "followRedirects": false
            },
            "request": {
                "method": "POST",
                "header": [
                    {
                        "key": "Content-Type",
                        "value": "application/x-www-form-urlencoded",
                        "type": "text"
                    }
                ],
                "body": {
                    "mode": "raw",
                    "raw": "{{form_data}}",
                    "options": {
                        "raw": {
                            "language": "text"
                        }
                    }
                },
                "url": {
                    "raw": "https://www.linkedin.com/checkpoint/lg/login-submit",
                    "protocol": "https",
                    "host": [
                        "www",
                        "linkedin",
                        "com"
                    ],
                    "path": [
                        "checkpoint",
                        "lg",
                        "login-submit"
                    ]
                }
            },
            "response": []
        },
        {
            "name": "03 handle login-success redirect",
            "event": [
                {
                    "listen": "test",
                    "script": {
                        "exec": [
                            "var sdk = require('postman-collection');\r",
                            "var redirect = new sdk.Url(pm.response.headers.get(\"Location\"));\r",
                            "pm.collectionVariables.set('code', redirect.query.filter(q => q.key === 'code').map(k => k.value)[0]);\r",
                            "//console.info(pm.collectionVariables.get('code'));"
                        ],
                        "type": "text/javascript"
                    }
                },
                {
                    "listen": "prerequest",
                    "script": {
                        "exec": [
                            "console.info(pm.variables.get('first_redirect'));\r",
                            "pm.request.url.update(pm.variables.get('first_redirect'));"
                        ],
                        "type": "text/javascript"
                    }
                }
            ],
            "protocolProfileBehavior": {
                "followRedirects": false
            },
            "request": {
                "method": "GET",
                "header": [],
                "url": {
                    "raw": "{{first_redirect}}",
                    "host": [
                        "{{first_redirect}}"
                    ]
                }
            },
            "response": []
        },
        {
            "name": "04 Get Auth Code",
            "request": {
                "method": "POST",
                "header": [],
                "url": {
                    "raw": "https://www.linkedin.com/oauth/v2/accessToken?grant_type=authorization_code&code = {{code}}&redirect_uri = {{redirect_uri}}&client_id = {{client_id}}&client_secret = {{client_secret}}",
                    "protocol": "https",
                    "host": [
                        "www",
                        "linkedin",
                        "com"
                    ],
                    "path": [
                        "oauth",
                        "v2",
                        "accessToken"
                    ],
                    "query": [
                        {
                            "key": "grant_type",
                            "value": "authorization_code"
                        },
                        {
                            "key": "code",
                            "value": "{{code}}"
                        },
                        {
                            "key": "redirect_uri",
                            "value": "{{redirect_uri}}"
                        },
                        {
                            "key": "client_id",
                            "value": "{{client_id}}"
                        },
                        {
                            "key": "client_secret",
                            "value": "{{client_secret}}"
                        }
                    ]
                }
            },
            "response": []
        }
    ],
    "event": [
        {
            "listen": "prerequest",
            "script": {
                "type": "text/javascript",
                "exec": [
                    ""
                ]
            }
        },
        {
            "listen": "test",
            "script": {
                "type": "text/javascript",
                "exec": [
                    ""
                ]
            }
        }
    ],
    "variable": [
        {
            "key": "client_id",
            "value": "your app id"
        },
        {
            "key": "client_secret",
            "value": "your app secret"
        },
        {
            "key": "redirect_uri",
            "value": "your urlencoded redirect uri such as https%3A%2F%2Flocalhost%3A8080"
        },
        {
            "key": "username",
            "value": "user login"
        },
        {
            "key": "password",
            "value": "user password"
        }
    ]
}
 28.12.2020 10:46
 Ответ принят как подходящий
Рабочие процессы учетных данных LinkedIn
LinkedIn предлагает 2 различных рабочих процесса учетных данных.

Трехсторонний рабочий процесс LinkedIn — Когда вы хотите использовать API, который будет получать доступ к данным участников LinkedIn. Требуется тип предоставления кода авторизации.
Поток учетных данных клиента LinkedIn — Когда вы хотите использовать API, который будет получать доступ к ресурсам, не являющимся членами. Требуется предоставление учетных данных клиента.
Что такое типы грантов?
«Тип гранта» относится к тому, как вы получили токен доступа в рабочем процессе OAuth.

Поддерживается несколько типов грантов. Некоторые из них:

Учетные данные клиента — используется, когда вы хотите получить доступ к своим собственным ресурсам, а не к каким-либо другим пользователям

Код авторизации — используется, когда приложение хочет получить доступ к данным клиента.

Обновить токен — Обмен просроченного токена доступа на действующий токен доступа, используемый для предотвращения повторного участия пользователя.

Пароль — используется, когда существует высокое доверие между приложением и пользователем, например. В мобильном приложении LinkedIn вы указываете свое имя пользователя и пароль

Поток учетных данных клиента
Что тебе нужно знать
Используемый здесь тип гранта — учетные данные клиента — client_credentials.
Не забудьте установить Content-Type на application/x-www-form-urlencoded для всех запросов POST в OAuth.
Шаги
Создайте приложение и получите свой идентификатор клиента и секрет клиента. Шаги показаны в соответствующих документах, указанных выше. Допустим, у них есть значения — <client_id> и <client_secret>.

Отправьте требуемый POST на https://www.linkedin.com/oauth/v2/accessToken со следующей информацией.

Параметры

grant_type : client_credentials
client_id  : <client_id>
client_secret : <client_secret>
ПРИМЕЧАНИЕ. client_credentials — это буквальный текст, который необходимо ввести для grant_type.

Ответ вернет объект JSON, содержащий ваш токен доступа и срок его действия в секундах.

Ответ

{
   "access_token" : <access_token>,
   "expires_in" : "1800"
}
Используйте <access_token>, полученный на шаге 2, для запросов к API.

Пример

Request URL: https://www.linkedin.com/v2/jobs
Request type: GET

Parameters
Authorization: Bearer <access_token>
LinkedIn 3-этапный рабочий процесс
Что тебе нужно знать
Тип гранта будет Код авторизации - code, так как вы хотите получить доступ к данным пользователя.

Ваш Content-Type должен быть application/x-www-form-urlencoded для всех запросов POST в OAuth.

URL-адреса перенаправления — это URL-адреса, на которые ваш сервер OAuth будет перенаправлять пользователя после успешной авторизации.

Они сверяются с предоставленными вами URL-адресами перенаправления, чтобы убедиться, что они не являются мошенническими.
Это должны быть абсолютные URL.
Аргументы URL игнорируются и не могут включать #.
Шаги
Создайте приложение и укажите URL-адреса перенаправления, если они еще не предоставлены. Проверьте документы, чтобы узнать, как это сделать.

Получите свой идентификатор клиента и секрет клиента. Допустим, это значения <client_id> и <client_secret>.

Генерировать случайную, трудно угадываемую строку. Допустим, это <random-string>.

Выберите один из URL-адресов перенаправления, предоставленных на шаге 1, на который вы хотите, чтобы пользователь перенаправлялся после авторизации. Допустим, это <redirect_uri>.

Предположим, вы хотите:

r_emailaddress - Получить его адрес электронной почты
w_member_social - Публикуйте, комментируйте и лайкайте посты от имени пользователя.
Они называются «областями разрешений», например, в отношении каких разрешений пользователь аутентифицирует вас. При отправке этих областей в вашем запросе они должны быть закодированы в URL-адресе и разделены пробелами. В данном конкретном случае наша область действия будет scope: r_emailaddress%20w_member_social. У нас есть URL-кодирование областей, упомянутых выше.

Добавление дополнительной информации об областях из документов Microsoft:

Области действия, доступные вашему приложению, зависят от того, к каким продуктам или партнерским программам у вашего приложения есть доступ. На вкладке «Аутентификация» вашего приложения будут отображаться текущие доступные области. Вы можете подать заявку на новые продукты на вкладке «Продукты». В случае одобрения ваше приложение получит доступ к новым областям.

Отправьте запрос POST на https://www.linkedin.com/oauth/v2/authorization со следующей информацией.

Параметры

response_type : code
client_id  : <client_id>
redirect_uri : <redirect_uri>
state : <random_string>
scope : r_emailaddress%20w_member_social
После запроса пользователю будет представлен экран аутентификации LinkedIn, и ему будет предложено утвердить запрос.

После того, как пользователь одобрит запрос и <redirect_uri> будет проверен, пользователь будет перенаправлен на предоставленный <redirect_uri> вместе с кодом доступа <access_code> и значением в аргументе state. Допустим, в аргументе состояния есть <state_value>.

Убедитесь, что <state_value> равно <random_string>, прежде чем работать с <access_code> для получения токена доступа в целях безопасности. Кроме того, из соображений безопасности используйте <access_code> в течение 30 минут после выдачи.

Затем отправьте запрос POST на https://www.linkedin.com/oauth/v2/accessToken со следующей информацией, чтобы получить токен доступа.

Параметры

grant_type : authorization_code
client_id  : <client_id>
client_secret : <client_secret>
redirect_uri : <redirect_uri>
code : <access_code>
ПРИМЕЧАНИЕ. authorization_code — это буквальный текст, который нужно передать в grant_type.

Вы должны получить такой же ответ, как и в рабочем процессе учетных данных клиента, содержащий ваш токен доступа и срок действия.

Ответ

{
   "access_token" : <access_token>,
   "expires_in" : "1800"
}
Используйте <access_token>, полученный на шаге 9, для запросов к API.

Пример

Request URL: `https://www.linkedin.com/v2/me`
Request type: GET

Parameters:
Authorization: Bearer <access_token>
Как это сделать в Почтальоне?
Создайте новую коллекцию.
Щелкните правой кнопкой мыши, выберите «Редактировать коллекцию» и перейдите на вкладку «Авторизация».
В «Тип» выберите «OAuth2.0», нажмите «Получить новый токен доступа».
Вы увидите экран, на котором есть все знакомые термины, упомянутые выше. Заполните их, поставьте галочку «Авторизовать через браузер» для авторизации.
Теперь у вас есть токен доступа, и вы можете приступать к вызовам API.
Postman был разработан, чтобы упростить такие операции, но вы должны знать, как это сделать. Для получения более подробной информации вы можете прочитать их официальные документы.

 01.01.2021 21:04
Благодаря @timur и @AmitSingh я наконец добрался до аутентификации в LinkedIn API.

Краткое пошаговое решение в картинках:

Авторизованные URL-адреса перенаправления для вашего приложения = https://oauth.pstmn.io/v1/callback

Области OAuth 2.0 = должны иметь r_emailaddress и r_liteprofile

Во вкладке "Товары" набор Sign In with LinkedIn

Теперь откройте Postman > Collections > New Collection > Authorization и установите параметры как на картинке:

ТИП = OAUTH 2.0
Имя токена = ставьте все, что хотите
URL-адрес обратного вызова = https://oauth.pstmn.io/v1/callback (должен стать серым после того, как вы отметите Authorize using browser)
Отметьте Authorize using browser
URL-адрес авторизации = https://www.linkedin.com/oauth/v2/authorization
URL токена доступа = https://www.linkedin.com/oauth/v2/accessToken
Идентификатор клиента = идентификатор клиента, который вы найдете в своем приложении LinkedIn.
Секрет клиента = секрет клиента, который вы найдете в своем приложении LinkedIn.
Сфера = r_liteprofiler_emailaddress
Состояние = ставь что хочешь
Теперь нажмите на Get New Access Token, в вашем браузере откроется страница, и вы сможете войти в систему, используя свою учетную запись LinkedIn. После этого вы аутентифицированы.

Теперь используйте код, предоставленный @timur, и в Postman перейдите в «Импорт»> «Загрузить файл» и импортируйте этот файл .JSON. Теперь у вас есть 4 запроса, и вы можете перетаскивать их в свою коллекцию.

 03.01.2021 22:52
Другие вопросы по теме
Код PHP для чтения источника веб-страницы и получения атрибута из тега с использованием PHP
PHP добавить Получить переменную к URL
Не удалось вернуть ответ на запрос API GET в функции Android Kotlin
Ionic/Angular - хранить содержимое асинхронного запроса http.get в переменной
Как выбрать и распечатать конкретное значение JSON с помощью запроса Python GET
Модуль запросов Python застревает на request.get() и истекает время ожидания
Как я могу решить это имя не определено
Избавиться от номера идентификатора в адресе ссылки с помощью .htaccess
HTTP Получить время для ответа
HTML, похоже, пытается отобразить переменную до того, как она будет инициализирована в Angular
Похожие вопросы
Настройка Keycloak через его REST API с помощью cUrl
Ограничение доступа к определенным конечным точкам функций Azure (REST API)
API PiXhost - загрузка изображений
React Hooks — проблема с useEffect и onClick
Spring не может проанализировать действительный LocalDateTime
Как получить результат от асинхронной функции внутри синхронной функции в машинописном тексте?
Импорт "rest_framework" не может быть разрешен. Но я установил djangorestframework, я не знаю, что происходит
Переменная метода вызова Powershell в URL-адресе
Как передать список целых чисел в виде данных json в API-интерфейс Spring Boot Rest?
Как прочитать параметр URL и тип тела в Fast API Python

REST
Установите токен доступа с помощью Postman
У меня есть API для отдыха, и я хочу отправить ему запрос с помощью Postman. Запрос должен быть отправлен с токеном аутентификации носителя. Как я могу добавить это?

 21.12.2020 10:39
5
0
7 674
3
Данный вопрос помечен как решенный
 Ответы 3
 Ответ принят как подходящий
Вы можете добавить параметр заголовка с Authorization в качестве ключа и Bearer <insert_your_token_here> в качестве значения.

 21.12.2020 10:40
У вас есть вкладка "Авторизация" в вашем запросе в Почтальоне. Вы можете выбрать «Bearer Token» и вставить туда свой токен.

 21.12.2020 10:47
В более новых версиях Postman вы можете напрямую использовать вкладку «Авторизация», выбрать «Тип» как «Токен на предъявителя» и указать там свой токен. Почтальон автоматически добавляет «Bearer» в качестве префикса к вашему токену и использует его в заголовках.

Однако, если для реализации вашего сервера требуется префикс, отличный от «Bearer», вы можете указать его в поле «Префикс заголовка».

 14.04.2023 11:44
Другие вопросы по теме
Actionscript 3.0: Как обмениваться данными между главным окном и всплывающим окном, пока главное окно не получит ответ на вход сервера
Как я могу защитить свой API ASP.NET с помощью собственной системы токенов
Аутентификация PyMongo с докером
Весенняя аутентификация с neo4j
Как правильно использовать токен аутентификации GitHub?
Сбой Heroku при следовании примеру Basic Auth на веб-сайте Plotly Dash
Azure b2c неавторизован при выполнении вызовов API в веб-API .net5
Вход в отдельную вкладку в Shiny
Защита ресурсов, обслуживаемых из META-INF/ресурсов с аутентификацией в quarkus
Проблема SignalR с миграцией .Net Core 5.0, app.UseSignalR -> app.UseEndpoints
Похожие вопросы
LinkedIn API :: как получить токен доступа носителя
Настройка Keycloak через его REST API с помощью cUrl
Ограничение доступа к определенным конечным точкам функций Azure (REST API)
API PiXhost - загрузка изображений
React Hooks — проблема с useEffect и onClick
Spring не может проанализировать действительный LocalDateTime
Как получить результат от асинхронной функции внутри синхронной функции в машинописном тексте?
Импорт "rest_framework" не может быть разрешен. Но я установил djangorestframework, я не знаю, что происходит
Переменная метода вызова Powershell в URL-адресе
Как передать список целых чисел в виде данных json в API-интерфейс Spring Boot Rest?

ANDROID
Модификация 2, отправляющая пустое тело запроса клиента Android на весеннюю загрузку на сервере со статусом 200, тогда как в почтальоне он работает нормально
Я изо всех сил пытался отправить тело запроса на сервер с одним параметром на сервер из клиента Android, который дает мне статус 200 в случае успеха, но с пустым телом запроса. Все отлично работает в почтальоне с успешной транзакцией.

API ниже - это то, что я вызываю

@POST("user/loginwithotp")
@Headers({
        "Content-Type: application/json;charset=UTF-8"
})
Call<ResponseAPI> saveMobile(@Body AuthenticationVO authenticationVO);
Ниже приведен код для модифицированного клиента

                     public static Retrofit getClient() {
        String baseUrl = "http://192.168.xx.xx:8080/dmp/";


        Gson gson = new GsonBuilder()
                .setLenient()
                .create();

        HttpLoggingInterceptor interceptor = new HttpLoggingInterceptor();
        interceptor.setLevel(HttpLoggingInterceptor.Level.BODY);
        OkHttpClient client = new   OkHttpClient.Builder().addInterceptor(interceptor).build();

      Retrofit retrofit = new Retrofit.Builder()
                .baseUrl(baseUrl) //if all api base url is same only add here. If not same then add url as string in “getClient()” method and then pass that here
                .addConverterFactory(GsonConverterFactory.create(gson))
                .client(client)
                .build();
        return retrofit;
    }

 public static VuAPIServices geVuAPIServices() {
        VuAPIServices vuAPIServices = getClient().create(VuAPIServices.class);
        return vuAPIServices;
    }
}

Код активности ниже

    public AuthenticationVO createRequest(){
        customLoader.show();
      AuthenticationVO authenticationVO = new AuthenticationVO ();
          authenticationVO.setMobileNumber(mobileNumber);
        return authenticationVO;

    }
    public void saveMobile(AuthenticationVO authenticationVO){

        Call<ResponseAPI> responseAPICall = ApiClient.geVuAPIServices().saveMobile (authenticationVO);
        responseAPICall.enqueue(new Callback<ResponseAPI>() {
            @Override
            public void onResponse(Call<ResponseAPI> call, retrofit2.Response<ResponseAPI> response) {
                customLoader.dismiss();
                if (response.isSuccessful()) {
                    Log.d("response", "code = " + response.code());
                    Log.d("response", "code = " + response.body());

//                    sessionManager.setLogin(true);
//                    sessionManager.setLoginMobile(mobileNumber);
//                    Intent home = new Intent(getApplicationContext(), VU_OTPHandler.class);
//                    home.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK | Intent.FLAG_ACTIVITY_CLEAR_TOP | Intent.FLAG_ACTIVITY_CLEAR_TASK);
//                    startActivity(home);
//                    finish();
                } else {
                    Log.i("onEmptyResponse", "Returned empty response");//Toast.makeText(getContext(),"Nothing returned",Toast.LENGTH_LONG).show();
         }
                Toast.makeText(VuLogin.this, "saved successfully", Toast.LENGTH_LONG).show();
            }
            @Override
            public void onFailure(Call<ResponseAPI> call, Throwable t) {
                Toast.makeText(VuLogin.this, "Request Failed "+t.getLocalizedMessage(), Toast.LENGTH_LONG).show();

            }
        });
Почтальон изображения

Это контроллер ниже на стороне сервера, который я написал

 @PostMapping(path = ENDPOINT_MOBILE_OTP)
    public AuthenticationVO signInWithOTP(@Valid @RequestBody AuthenticationVO authenticationVO){
        System.out.println("login request is:-"+authenticationVO.toString());
        try {
        if (authenticationVO != null && authenticationVO.getMobileNumber()!=null) {
            MultitenantUtility.request = httpRequest;
            String tenantId = multitenantUtility.resolveCurrentTenantIdentifier();
            if (tenantId != null) {
                multitenantUtility.setCurrentTenant(tenantId);
                authenticationVO = userService.checkLoginCredentialsWithOTP(authenticationVO);
            } else {
                System.out.println("request body is empty");
                //throw new DMPBadRequestException("Request body is empty");
            }
            }
        else {
            System.out.println("Mobile Number is mandatory");
            //throw new DMPBadRequestException("Request body is empty");
        }
        }
        catch(Exception e) 
        {
            System.out.println("Excepton "+e);
        }
        finally
        {
            multitenantUtility.clearThreadLocal();
            LOGGER.info("authenticateUser - before returning");
        }
        
        
        return authenticationVO;
    }
Пожалуйста, ребята, помогите мне в этом вопросе. несколько дней я потратил на попытки заставить его работать много методов, которые я пробовал, но ничего не получалось. Пожалуйста, помогите мне узнать, что мне не хватает. заранее спасибо

 22.12.2020 06:55
1
0
1 057
3
Данный вопрос помечен как решенный
 Ответы 3
Попробуй это...

Заменить строку ниже

Call<ResponseAPI> saveMobile(@Body AuthenticationVO authenticationVO);
с

Call<ResponseAPI> saveMobile(@Body RequestBody jsonObject);
Теперь в нижней строке также нужно изменить

        Call<ResponseAPI> responseAPICall = ApiClient.geVuAPIServices().saveMobile (authenticationVO);
с

try {
        JSONObject jsonObject = new JSONObject();
        jsonObject.put("mobileNumber", 0123456789);
        RequestBody body = RequestBody.create(MediaType.parse("application/json; charset=utf-8"), (jsonObject.toString()));

    }catch (Exception e){
        e.printStackTrace();
    }
  Call<ResponseAPI> responseAPICall = ApiClient.geVuAPIServices().saveMobile (body);
  //now continue as your code
  responseAPICall.enque.....
Также попробуйте изменить модифицированный клиент с помощью этого

public static Retrofit getClient(String baseUrl) {

    Gson gson = new GsonBuilder()
            .setLenient()
            .create();

    HttpLoggingInterceptor interceptor = new HttpLoggingInterceptor();
    interceptor.setLevel(HttpLoggingInterceptor.Level.BODY);
    OkHttpClient client = new   OkHttpClient.Builder().addInterceptor(interceptor).build();

    retrofit = new Retrofit.Builder()
            .baseUrl(baseUrl) //if all api base url is same only add here. If not same then add url as string in “getClient()” method and then pass that here
            .addConverterFactory(GsonConverterFactory.create(gson))
            .client(client)
            .build();
    return retrofit;
}
Надеюсь, это сработает

 22.12.2020 07:05
 Ответ принят как подходящий
Я решил проблему, добавив хост в заголовки перехвата, и вся проблема была решена.

Отдельное спасибо @pratik vekariya за ваши добрые усилия

 28.12.2020 05:45
Использовать:

        @RequestMapping(
                value = "/",
                method = RequestMethod.POST,
                produces = "application/json"
        )
Вместо @PostMapping("/")

При этом он будет работать нормально

 04.03.2022 14:42
Другие вопросы по теме
Почему @Cacheable не работал при использовании в контроллере и интерфейсе
Как исправить ошибку CORS в приложении Vue.js и Spring Boot
Spring MVC: выдает параметры запроса привязки к общему списку
Как передать spring.datasource.data из докера как полный путь?
Преобразование инъекции Spring @Value не работает в тесте @SpringJUnitConfig
Проверка пароля и подтверждение пароля Spring Boot
Объект аутентификации Spring boot SAML 2 null
Получить значение свойства объекта Spring Boot Java
Команда curl для запуска проекта Java Spring Boot
Не удается запустить программу «C:\Program Files (x86)\Java\jdk1.8.0_11\jre\bin\java.exe»: ошибка CreateProcess = 206, имя файла или расширение слишком длинное
Похожие вопросы
Как удалить эмулятор из окна инструментов Android Studio
Откройте приложение, если оно установлено, в противном случае откройте в магазине Google Play. (Джаваскрипт)
Хотите добавить значок домашнего экрана для Android Chrome на свой сайт
Почему мой код записывает полный путь к идентификатору документа в Firestore?
Устаревание Drawable.getOpacity()
MissingPluginException (не найдена реализация для метода init на канале plugins.flutter.io/google_sign_in) после публикации в Google Play Store
Если ViewBinding и GoogleMap используются вместе, возникнет ошибка
Как добавить меню параметров (3 точки и/или значки действий) в действие с вкладками?
Миграция MediatorLiveData в SharedFlow
Сохранить выбранный элемент и использовать его на другой странице

ANDROID
Модификация 2, отправляющая пустое тело запроса клиента Android на весеннюю загрузку на сервере со статусом 200, тогда как в почтальоне он работает нормально
Я изо всех сил пытался отправить тело запроса на сервер с одним параметром на сервер из клиента Android, который дает мне статус 200 в случае успеха, но с пустым телом запроса. Все отлично работает в почтальоне с успешной транзакцией.

API ниже - это то, что я вызываю

@POST("user/loginwithotp")
@Headers({
        "Content-Type: application/json;charset=UTF-8"
})
Call<ResponseAPI> saveMobile(@Body AuthenticationVO authenticationVO);
Ниже приведен код для модифицированного клиента

                     public static Retrofit getClient() {
        String baseUrl = "http://192.168.xx.xx:8080/dmp/";


        Gson gson = new GsonBuilder()
                .setLenient()
                .create();

        HttpLoggingInterceptor interceptor = new HttpLoggingInterceptor();
        interceptor.setLevel(HttpLoggingInterceptor.Level.BODY);
        OkHttpClient client = new   OkHttpClient.Builder().addInterceptor(interceptor).build();

      Retrofit retrofit = new Retrofit.Builder()
                .baseUrl(baseUrl) //if all api base url is same only add here. If not same then add url as string in “getClient()” method and then pass that here
                .addConverterFactory(GsonConverterFactory.create(gson))
                .client(client)
                .build();
        return retrofit;
    }

 public static VuAPIServices geVuAPIServices() {
        VuAPIServices vuAPIServices = getClient().create(VuAPIServices.class);
        return vuAPIServices;
    }
}

Код активности ниже

    public AuthenticationVO createRequest(){
        customLoader.show();
      AuthenticationVO authenticationVO = new AuthenticationVO ();
          authenticationVO.setMobileNumber(mobileNumber);
        return authenticationVO;

    }
    public void saveMobile(AuthenticationVO authenticationVO){

        Call<ResponseAPI> responseAPICall = ApiClient.geVuAPIServices().saveMobile (authenticationVO);
        responseAPICall.enqueue(new Callback<ResponseAPI>() {
            @Override
            public void onResponse(Call<ResponseAPI> call, retrofit2.Response<ResponseAPI> response) {
                customLoader.dismiss();
                if (response.isSuccessful()) {
                    Log.d("response", "code = " + response.code());
                    Log.d("response", "code = " + response.body());

//                    sessionManager.setLogin(true);
//                    sessionManager.setLoginMobile(mobileNumber);
//                    Intent home = new Intent(getApplicationContext(), VU_OTPHandler.class);
//                    home.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK | Intent.FLAG_ACTIVITY_CLEAR_TOP | Intent.FLAG_ACTIVITY_CLEAR_TASK);
//                    startActivity(home);
//                    finish();
                } else {
                    Log.i("onEmptyResponse", "Returned empty response");//Toast.makeText(getContext(),"Nothing returned",Toast.LENGTH_LONG).show();
         }
                Toast.makeText(VuLogin.this, "saved successfully", Toast.LENGTH_LONG).show();
            }
            @Override
            public void onFailure(Call<ResponseAPI> call, Throwable t) {
                Toast.makeText(VuLogin.this, "Request Failed "+t.getLocalizedMessage(), Toast.LENGTH_LONG).show();

            }
        });
Почтальон изображения

Это контроллер ниже на стороне сервера, который я написал

 @PostMapping(path = ENDPOINT_MOBILE_OTP)
    public AuthenticationVO signInWithOTP(@Valid @RequestBody AuthenticationVO authenticationVO){
        System.out.println("login request is:-"+authenticationVO.toString());
        try {
        if (authenticationVO != null && authenticationVO.getMobileNumber()!=null) {
            MultitenantUtility.request = httpRequest;
            String tenantId = multitenantUtility.resolveCurrentTenantIdentifier();
            if (tenantId != null) {
                multitenantUtility.setCurrentTenant(tenantId);
                authenticationVO = userService.checkLoginCredentialsWithOTP(authenticationVO);
            } else {
                System.out.println("request body is empty");
                //throw new DMPBadRequestException("Request body is empty");
            }
            }
        else {
            System.out.println("Mobile Number is mandatory");
            //throw new DMPBadRequestException("Request body is empty");
        }
        }
        catch(Exception e) 
        {
            System.out.println("Excepton "+e);
        }
        finally
        {
            multitenantUtility.clearThreadLocal();
            LOGGER.info("authenticateUser - before returning");
        }
        
        
        return authenticationVO;
    }
Пожалуйста, ребята, помогите мне в этом вопросе. несколько дней я потратил на попытки заставить его работать много методов, которые я пробовал, но ничего не получалось. Пожалуйста, помогите мне узнать, что мне не хватает. заранее спасибо

 22.12.2020 06:55
1
0
1 057
3
Данный вопрос помечен как решенный
 Ответы 3
Попробуй это...

Заменить строку ниже

Call<ResponseAPI> saveMobile(@Body AuthenticationVO authenticationVO);
с

Call<ResponseAPI> saveMobile(@Body RequestBody jsonObject);
Теперь в нижней строке также нужно изменить

        Call<ResponseAPI> responseAPICall = ApiClient.geVuAPIServices().saveMobile (authenticationVO);
с

try {
        JSONObject jsonObject = new JSONObject();
        jsonObject.put("mobileNumber", 0123456789);
        RequestBody body = RequestBody.create(MediaType.parse("application/json; charset=utf-8"), (jsonObject.toString()));

    }catch (Exception e){
        e.printStackTrace();
    }
  Call<ResponseAPI> responseAPICall = ApiClient.geVuAPIServices().saveMobile (body);
  //now continue as your code
  responseAPICall.enque.....
Также попробуйте изменить модифицированный клиент с помощью этого

public static Retrofit getClient(String baseUrl) {

    Gson gson = new GsonBuilder()
            .setLenient()
            .create();

    HttpLoggingInterceptor interceptor = new HttpLoggingInterceptor();
    interceptor.setLevel(HttpLoggingInterceptor.Level.BODY);
    OkHttpClient client = new   OkHttpClient.Builder().addInterceptor(interceptor).build();

    retrofit = new Retrofit.Builder()
            .baseUrl(baseUrl) //if all api base url is same only add here. If not same then add url as string in “getClient()” method and then pass that here
            .addConverterFactory(GsonConverterFactory.create(gson))
            .client(client)
            .build();
    return retrofit;
}
Надеюсь, это сработает

 22.12.2020 07:05
 Ответ принят как подходящий
Я решил проблему, добавив хост в заголовки перехвата, и вся проблема была решена.

Отдельное спасибо @pratik vekariya за ваши добрые усилия

 28.12.2020 05:45
Использовать:

        @RequestMapping(
                value = "/",
                method = RequestMethod.POST,
                produces = "application/json"
        )
Вместо @PostMapping("/")

При этом он будет работать нормально

 04.03.2022 14:42
Другие вопросы по теме
Почему @Cacheable не работал при использовании в контроллере и интерфейсе
Как исправить ошибку CORS в приложении Vue.js и Spring Boot
Spring MVC: выдает параметры запроса привязки к общему списку
Как передать spring.datasource.data из докера как полный путь?
Преобразование инъекции Spring @Value не работает в тесте @SpringJUnitConfig
Проверка пароля и подтверждение пароля Spring Boot
Объект аутентификации Spring boot SAML 2 null
Получить значение свойства объекта Spring Boot Java
Команда curl для запуска проекта Java Spring Boot
Не удается запустить программу «C:\Program Files (x86)\Java\jdk1.8.0_11\jre\bin\java.exe»: ошибка CreateProcess = 206, имя файла или расширение слишком длинное
Похожие вопросы
Как удалить эмулятор из окна инструментов Android Studio
Откройте приложение, если оно установлено, в противном случае откройте в магазине Google Play. (Джаваскрипт)
Хотите добавить значок домашнего экрана для Android Chrome на свой сайт
Почему мой код записывает полный путь к идентификатору документа в Firestore?
Устаревание Drawable.getOpacity()
MissingPluginException (не найдена реализация для метода init на канале plugins.flutter.io/google_sign_in) после публикации в Google Play Store
Если ViewBinding и GoogleMap используются вместе, возникнет ошибка
Как добавить меню параметров (3 точки и/или значки действий) в действие с вкладками?
Миграция MediatorLiveData в SharedFlow
Сохранить выбранный элемент и использовать его на другой странице

JAVASCRIPT
Тест почтальона должен быть случайным с названием, содержащимся
У меня есть тест, который я хотел бы изменить, но я просто не знаю, как это сделать. Для этого теста я получаю случайный элемент из массива ответов и устанавливаю переменную коллекции CategoryID. Проблема в том, что я использую CategoryID для своих запросов PUT и могу изменять элементы, которые не следует изменять. Я хотел бы получить идентификатор категории из случайного элемента, заголовок которого содержит «Тест», если это возможно, я просто не знаю, как это сделать, и был бы признателен за помощь. Мой единственный опыт работы с Postman связан с курсом Udemy, поэтому буду благодарен за любую помощь.

Вот тест, который мне нужно изменить:

pm.test('Ensure item is there', () => {
pm.expect(response).to.be.an('array');
pm.expect(response.length).to.be.above(0);

const index = Math.trunc(Math.random() * response.length);
const item = response[index];
pm.expect(item).to.be.an('object');
pm.expect(item).to.haveOwnProperty('id');
pm.collectionVariables.set('CategoryID', item.id);
});
Вот пример ответа:

[
{
    "title": "Testprimary",
    "color": "salmon",
    "id": "273bda70-2dbc-429f-b143-045dccbffea7",
    "lastModified": "2024-03-06T22:12:43.161"
},
{
    "title": "Relationships",
    "color": "FF63C7",
    "id": "b46c40c2-37e1-46d7-a8e1-0ea235f071ec",
    "lastModified": "2024-01-25T22:18:22.6177142"
}]
Вот еще раз тест с тем, что я придумал. В блоке if я хотел бы получить еще один элемент из массива. Как мне это сделать, не дублируя уже имеющийся код?

pm.test('Ensure item is there', () => {
pm.expect(response).to.be.an('array');
pm.expect(response.length).to.be.above(0);

const index = Math.trunc(Math.random() * response.length);
const item = response[index];
pm.expect(item).to.be.an('object');
pm.expect(item).to.haveOwnProperty('id');
if (!item.title.includes('TEST')) {
    console.info(item.id);
    console.info(item.title);
    
} 
else {
    pm.collectionVariables.set('CategoryID', item.id);
} 

});
 06.03.2024 23:23
2
2
118
3
Данный вопрос помечен как решенный
 Ответы 3
 Ответ принят как подходящий
Я нашел способ сделать это, не получая случайное число или что-то в этом роде.

pm.test('Ensure item is there', () => {
   pm.expect(response).to.be.an('array');
   pm.expect(response.length).to.be.above(0);

   var element = response.filter(function(item) { return item.title.includes ('TEST'); });
   if (element.length > 0) {
       const index = Math.trunc(Math.random() * element.length);
       const item = element[index];
       pm.collectionVariables.set('CategoryID', item.id);
   } 
});
Это работает намного лучше. По сути, я фильтрую массив, чтобы получить все элементы с именем TEST, а затем использую блок if, чтобы получить случайный элемент из массива элементов с именем TEST, а затем устанавливаю CategoryID.

 08.03.2024 18:22
Попробуйте с этим:

pm.test("title contains Test", function () {
    array.forEach((x) => {
        if (x.title.includes("Test")){
            pm.collectionVariables.set('categorieId', x.id)
        } else {
            console.info('does not contain')
        }
    })
})
Надеюсь, поможет

 11.03.2024 08:06
Это должно вернуть случайный (выборочный) идентификатор из вашего массива фильтров.

На основании следующего ответа.

[
    {
        "title": "Test One",
        "color": "Blue",
        "id": "1"
    },
    {
        "title": "Relationships",
        "color": "Pink",
        "id": "2"
    },
    {
        "title": "Test Two",
        "color": "Orange",
        "id": "3"
    }
]
Я завернул все в тестовый блок PM. Как только первое утверждение pm.expect завершится неудачей, он прекратит выполнение кода внутри этого блока.

Поэтому у меня есть несколько утверждений, проверяющих, что исходный массив существует, отфильтрованный массив существует, а также существует случайный идентификатор заголовка теста, прежде чем я установлю переменную коллекции.

const response = pm.response.json();

pm.test('Set random test title ID', () => {
    pm.expect(response, "response is not an array").to.be.an('array').that.is.not.empty;
    let testTitles = response.filter(obj => obj.title.includes('Test'));
    pm.expect(testTitles, "no test titles").to.be.an('array').that.is.not.empty;
    let randomTestTitleId = (_.sample(testTitles)).id
    pm.expect(randomTestTitleId).to.not.be.undefined;
    console.info(`Random test ID: ${randomTestTitleId}`)
    pm.collectionVariables.set("CategoryID", randomTestTitleId);
});
Мне пришлось несколько раз запустить его с Postman Echo, поскольку два объекта — это не очень большой пул выборки.

Я тестировал пример ответа только с одним объектом с тестом в заголовке (который все еще проходит) и без каких-либо объектов с тестом, что совершенно справедливо терпит неудачу. Поскольку для массивов существует два теста, я добавил собственный текст утверждения.

 11.03.2024 15:32
Другие вопросы по теме
Серверу не удалось аутентифицировать запрос — API REST хранилища очередей Azure (метод PUT)
Почтальон не может отправить сообщение в OWASP ZAP с той же конфигурацией прокси-сервера
Keycloak 23, тестирует API токена, всегда получает 401Unauthorized
Как мне создать цикл, который выполняет POST для каждого значения массива в почтальоне
XERO API — BankTransactions не отображает отдельные элементы
Извлеките несколько значений из ответа Json для запроса Post, требующего каждого значения
Вызов контроллера приводит к ошибке http 404: невозможно проверить первый сертификат
FastAPI не сохраняет данные в базу данных MySQL
Почтальон Запуск коллекций в разных средах
Как получить токен доступа для Rumble API?
Похожие вопросы
Как исправить мой DataTable, чтобы stateSave работал правильно?
Могу ли я использовать локальный хост, созданный с помощью node.js, для хранения всех данных, представленных на моем веб-сайте? без SQL или какой-либо БД. Просто HTML
Файл GLB не загружается в Three.js
JS использует функцию внутри функции
Что вызывает эту странную ошибку горизонтального расстояния (?) между кнопками при добавлении элемента списка в неупорядоченный список через JavaScript?
Определить, показывает ли reportValidity() в настоящее время сообщение validityMessage в элементе DOM?
Как проверить состояние и выполнить функцию после некоторой задержки в React?
Задержка перехода игнорируется в цикле
Суммировать значения свойств, когда идентификатор совпадает, и возвращать результат с помощью JavaScript
Вызов функции из внешнего файла JavaScript в HTML

JAVASCRIPT
Некоторые запросы работают, а другие нет на почтальоне
Я новичок и пытаюсь создать приложение с использованием NodeJs и ExpressJs. Я тестирую серверную часть с помощью почтальона. некоторые запросы работают отлично, а другие нет, я получаю сообщение о невозможности получить URL-адрес, код 404 не найден уже несколько часов, и, как я уже упоминал, другие маршруты работают очень хорошо.

На стороне сервера все вроде нормально, тип содержимого — JSON, я проверил код несколько раз и не вижу ошибки. есть идеи, пожалуйста? Спасибо 🙏.

Сервер: Некоторые запросы работают, а другие нет на почтальоне Ответ почтальона: Некоторые запросы работают, а другие нет на почтальоне

Модель:

module.exports = (_db) => {
  db = _db;
  return SearchModel;
};
class SearchModel {
  //Get a product by name
  static getProductByName(productName) {
    return db
      .query('SELECT * FROM Products WHERE productName = ?', [
        productName
      ])
      .then((res) => {
        console.info(res);
        return res;
      })
      .catch((error) => {
        console.info(error);
        return error;
      });
  }
  // Get products by gender
  static getProductByGender(gender) {
    return db
      .query('SELECT * FROM Products WHERE gender = ?', [gender])
      .then((res) => {
        return res;
      })
      .catch((error) => {
        return error;
      });
  }
  // Get products by brand
  static getProductByBrand(brand) {
    return db
      .query('SELECT * FROM Products WHERE brand=?', [brand])
      .then((res) => {
        return res;
      })
      .catch((error) => {
        return error;
      });
  }
  // Get products by mouvement
  static getProductByMouvement(mouvement) {
    return db
      .query('SELECT * FROM Products WHERE mouvement=?', [mouvement])
      .then((res) => {
        return res;
      })
      .catch((error) => {
        return error;
      });
  }
}
Маршрут:

  // Get a product by name
  module.exports = (app, db) => {
  const searchModel = require('../models/SearchModel')(db);

  // Route pour afficher un produit par son nom
  app.get('/api/v1/Search/name', async (req, res) => {
    const productByName = await searchModel.getProductByName(
      req.body.productName,
    );

    if (productByName.code) {
      res.json({ status: 500, msg: 'Server Error!' });
    } else if (!productByName) {
      res.json({ status: 404, msg: 'Product not found!' });
    } else {
      res.json({ status: 200, result: productByName, msg: 'Voilà!' });
    }
  });
};
 24.05.2024 15:57
0
6
84
3
Данный вопрос помечен как решенный
 Ответы 3
Вы уверены, что в параметрах запроса GET стоит body?

Это правильный путь:

app.get('/path', (req, res) => {
  const productName= req.query.productName;

  // Do something with the query parameters
  console.info(productName);
  
  res.send('Query parameters received');
});
А поскольку продукт не найден, вы возвращаете 404, что означает, что страница не найдена, насколько показывает PostMan.

 24.05.2024 16:34
req.body в GET и DELETE запросе недействителен, вместо него следует использовать параметры или запросы. Нравиться:

app.get('/api/v1/Search/:name', async (req, res) => {
  const name = req.params.name
  console.info(name) //    try /api/v1/Search/abc => name = 'abc'
})
// or
app.get('/api/v1/Search', async (req, res) => {
  const name = req.query.name
  console.info(name) //    try /api/v1/Search/?name=abc => name = 'abc'
})
 25.05.2024 09:56
 Ответ принят как подходящий
проблема для меня заключалась в том, что я забыл добавить searchRoute в базу данных в server.js! На это ушло 2 дня 😑, но теперь все работает хорошо.

app.get('/', async (req, res) => {
          res.json({ status: 200  });
        });
        userRoute(app, db);
        productRoute(app, db);
        orderRoute(app, db);
        authRoute(app, db);
        searchRoute(app, db);
      })
      .catch((error) => console.info(error));
Спасибо за ваши ответы, они заставили меня провести небольшое исследование и кое-что узнать.

 25.05.2024 21:10
Другие вопросы по теме
Expressjs не отправляет ответ
Могут ли файлы кода с расширением .cts в Node.js использовать синтаксис модуля ESM для импорта и экспорта?
Как развернуть внешнее приложение React Router с бэкэндом NodeJS на Render
AWS EC2 продолжает выходить из контейнера Docker (конвейер Jenkins)
Как я могу решить декоратор свойств
Как определить исходящую очередь в примере программы IBM mq от codeengine
Проверьте, работает ли какое-либо системное приложение в полноэкранном режиме nodeJS
Как использовать ReadableStream, возвращаемый клиентом Graph?
Как получить данные ReadableStream из res.body в JS
Ошибка Angular 18 после обновления: произошло необработанное исключение: (0, os_1.availableParallelism) не является функцией
Похожие вопросы
Модальный jquery и автозаполнение не работают с кнопкой обратной передачи
Пустое пространство создается в верхней части веб-страницы, когда положение навигационной панели установлено фиксированным
Expressjs не отправляет ответ
Кнопка отключения пользовательского дескриптора темы DaisyUI
Как сообщить странице React/Next.js, что темный режим включен?
Извлечение кода с помощью RegEx и Python из функции JavaScript
Javascript Fetch с использованием POST всегда возвращает статус 400
Как получить доступ к астрореквизитам внутри тега сценария?
Почему цикл do/ while бесконечен после того, как ожидалось, что условие будет выполнено?
Как развернуть внешнее приложение React Router с бэкэндом NodeJS на Render

JAVASCRIPT
Журнал консоли почтальона не позволяет писать строку в следующей строке
Я пытаюсь отобразить строку на мультилинии с помощью \n в консоли почтальона. Как я могу это сделать?

Пример:

var mystr='line\n another line\n another line';
console.info(mystr);
Ожидая:

line
another line
another line
Получающий:

lineanother lineanother line
Примечание: в блокноте Firefox он работает должным образом.

 22.03.2018 08:48
4
4
1 695
4
 Ответы 4
Я не думаю, что вы можете добиться этого в консоли Postman - возможно, стоит поднять вопрос о проекте Postman на github, если его еще нет.

Я бы предложил сделать то же самое, что и комментарии, добавив, что \n работает на любой другой консоли, кроме этой, что странно.

Я думаю, что на данный момент единственный способ - это просто добавить несколько операторов console.info(), чтобы ваши вары печатались на новых строках.

Другой вариант - поместить то, что вам нужно, в array - это не идеально, но информация будет отображаться в консоли в отдельных строках.

Postman Console

 22.03.2018 09:39
Журнал консоли почтальона не позволяет писать строку в следующей строке # 1477

Задал тот же вопрос о почтальоне GitHub, я обновлю здесь, как только получу решение.

Спасибо, @Danny Dainton :)

 22.03.2018 09:49
введите 3 раза console.info:

console.info('linea1');
console.info('linea2');
console.info('linea3');
 22.03.2018 16:06
Вы можете напечатать многострочный текст следующим образом:

console.info("hello", '\n', "world");
Что будет отображаться в консоли следующим образом:



 12.08.2018 11:13
Другие вопросы по теме
Ошибка выдачи при преобразовании в идентификатор объекта в nodejs
Запрос к API работает в Postman, но не когда я пытаюсь с laravel / guzzle
Как я могу установить переменную среды в почтальоне из полученных данных ответа?
Можно ли отправить объект в запросе GET с помощью почтальона?
Как использовать GET curl в почтальоне?
Конфигурация нескольких маршрутов не работает для действий PUT и Delete в веб-API
Кодировка Base64 для нескольких переменных
Как узнать, существует ли адрес электронной почты в Elasticsearch?
Почтальон RSA шифрование
Запрос POST не работает из кода Angular5, но работает из Postman
Похожие вопросы
Перерисовывает пользовательскую точку
Как снова загрузить векторную карту при изменении раскрывающегося меню?
Как получить свойство имени выбранной точки на карте высокого разрешения
Реализация кода параллакса ge1doot
Использование Javascript для получения только currentSrc всех элементов массива запроса Xpath
Javascript string.replace ("% 3Cbr% 3E", "\ n") не работает с переменной encodeURIComponent ()
Как вызвать асинхронный метод для события, ориентированного на вкладку?
Классы ES6 - вызов методов из события щелчка
Как создать позицию легенды в pie chart.js?
Все встроенные функции при window.print ();

PHP
Преобразование запроса POSTMAN в Curl
Я вызываю свой веб-сервис java (запрос POST) через POSTMAN следующим образом, который отлично работает (т.е. я вижу, как мои записи вставляются в базу данных):

Преобразование запроса POSTMAN в Curl

А вот как выглядит содержимое вкладки Headers(1):

Преобразование запроса POSTMAN в Curl

Вместо того, чтобы вызывать его через POSTMAN, я должен вызвать тот же запрос в PHP, используя CURL. Мне интересно, есть ли способ экспортировать эту команду в команду curl, чтобы я мог использовать ее в своем PHP-коде? Я нашел противоположный подход во многих местах в Интернете, где кто-то просил преобразовать запрос на основе Curl в POSTMAN, но не мог понять, как сделать наоборот.

Некоторые статья, которые я нашел для завивки почтальону

 22.03.2018 16:36
245
2
144 220
4
Данный вопрос помечен как решенный
 Ответы 4
 Ответ принят как подходящий


Вы можете увидеть кнопку «Код» на прилагаемом снимке экрана, нажмите ее, и вы сможете получить свой код на многих разных языках, включая PHP cURL.



 22.03.2018 16:53
Начиная с Postman 8, вам нужно посетить здесь



 10.02.2021 18:01
Если вы, как и я, используете MacOS и у вас все еще есть Postman v7, вам нужно щелкнуть здесь многоточие, чтобы найти вариант кода



 23.03.2021 20:05
Первый ответ здесь работает со старыми версиями Postman. В последних выпусках в 2021 году cURL можно найти, щелкнув этот значок (обведен красным) 

 21.04.2021 06:47
Другие вопросы по теме
Получение и удаление сообщения по IMAP с помощью cURL
Как получить заголовок ответа curlpp
Скрипт входа curl в Visual C#
Возможные проблемы совместимости между последними выпусками SOAP / PHP Exchange 2010?
Как объявить тело CURL для вызова CoinBase API в php
Сообщение libcurl - подчеркивание заменено пробелом (ubuntu)
ClamAV: невозможно выделить память
Чтение переменной JavaScript в Ruby через запрос curl
Отправка POST через curl на сервер не работает
Можно ли использовать xdmp: save с REST?
Похожие вопросы
Многостраничная структура Laravel JWT
Передача данных во внешний интерфейс без таймера
Цикл по вложенным массивам PHP
Плагин Wordpress Ultimate Popup - держать модальное окно открытым даже при нажатии вне?
Передача значений массива в PHP с использованием ajax
Разрешить аутентифицированному пользователю видеть только свои данные
Неработающие ссылки внутри почтовой программы PHP с AngularJS
Конфликт php javascript в файле шаблона wordpress
Выберите 2 самые новые даты из массива и расположите по порядку
Невозможно загрузить локальный ресурс на странице просмотра PHP CI

.NET
WebApi 2.0 - не найден HTTP-ресурс, соответствующий URI запроса
В приведенном ниже коде я нажимаю на конструктор, но не на действие. URL-адрес http: // локальный: 64704 / api / mytest / mymethod. Та же проблема, когда я пытался изменить маршрутизацию следующим образом:

config.Routes.MapHttpRoute(
            name: "DefaultApi",
            routeTemplate: "api/{controller}/{action}"
        );

[Route("api/[controller]")]
public class MyTestController : ApiController
{
    readonly IMyFacade myFacade;
    public MyTestController(IMyFacade myFacade) => this.myFacade = myFacade;

    [HttpPost]
    [Route("mymethod")]
    public IHttpActionResult MyMethodName([FromBody]MyModel model)
    {
        //some code here

        return Ok();
    }
}

public static void Register(HttpConfiguration config)
{
    // Web API configuration and services

    // Web API routes
    config.MapHttpAttributeRoutes();

    config.Routes.MapHttpRoute(
        name: "DefaultApi",
        routeTemplate: "api/{controller}/{id}",
        defaults: new { id = RouteParameter.Optional }
    );
}
Обновление 1

public class WebApiApplication : HttpApplication
{
    protected void Application_Start()
    {
        GlobalConfiguration.Configure(WebApiConfig.Register);
        UnityConfig.RegisterComponents();
    }
}
Обновление 2

        public static void RegisterComponents()
    {
        var container = new UnityContainer();

        // register all your components with the container here
        // it is NOT necessary to register your controllers

        // e.g. container.RegisterType<ITestService, TestService>();

        /* ...... */

        GlobalConfiguration.Configuration.DependencyResolver = new UnityDependencyResolver(container);
    }
Обновление 3 { «Поле1»: «1», "Поле2": "какой-то ключ", "Поле3": "конечно какое-то имя" }

 23.03.2018 11:35
1
0
9 400
4
Данный вопрос помечен как решенный
 Ответы 4
Вы используете глаголы HttpPost в действии, убедитесь, что вы используете метод HttpPost при отправке запроса.

 23.03.2018 11:55
 Ответ принят как подходящий
Проблема возникает из-за того, что вы ожидаете, что атрибут Route наверху контроллера будет объединен с атрибутом Route наверху метода. Это не так в .net WebApi 2.0 (добавлено в .net core mvc)

Вместо этого вы должны использовать атрибут RoutePrefix на контроллере, чтобы объединить маршрут контроллера с маршрутами метода.

[RoutePrefix("api/[controller]")]
public class MyTestController : ApiController
{
    readonly IMyFacade myFacade;
    public MyTestController(IMyFacade myFacade) => this.myFacade = myFacade;

    [HttpPost]
    [Route("mymethod")]
    public IHttpActionResult MyMethodName([FromBody]MyModel model)
    {
        //some code here

        return Ok();
    }
}
 23.03.2018 12:31
WebApiConfig

public static class WebApiConfig
{
    public static void Register(HttpConfiguration config)
    {
        // Web API configuration and services

        // Web API routes
        config.MapHttpAttributeRoutes();

        config.Routes.MapHttpRoute(
            name: "DefaultApi",
            routeTemplate: "api/{controller}/{id}",
            defaults: new { id = RouteParameter.Optional }
        );
    }
}
Global.asax

 public class WebApiApplication : System.Web.HttpApplication
 {
     protected void Application_Start()
     {
         AreaRegistration.RegisterAllAreas();
         GlobalConfiguration.Configure(WebApiConfig.Register);
         FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
         RouteConfig.RegisterRoutes(RouteTable.Routes);
         BundleConfig.RegisterBundles(BundleTable.Bundles);
     }
 }
Контроллер

public class MyTestController : ApiController
{      
    [HttpPost]
    [Route("mymethod")]
    public IHttpActionResult MyMethodName([FromBody]MyModel model)
    {
        return Ok();
    }
}
Во время отладки

Отправка PostRequest

 23.03.2018 12:34
В контроллере вам необходимо указать атрибут RoutePrefix вместо Маршрут, как показано в коде ниже.

// Specify 'RoutePrefix' attribute instead of 'Route'
[RoutePrefix("api/[controller]")]
public class MyTestController : BaseController
{
    [HttpPost]
    [Route("mymethod")]
    public HttpResponseMessage MyMethodName([FromBody]MyModel model)
    {
        return Request.CreateResponse(System.Net.HttpStatusCode.OK);
    }
}
и попробуй еще раз.

 23.03.2018 12:40
Другие вопросы по теме
Проверка подлинности на основе сертификата клиента
C# Web api получение данных POST из JSON
Как отправить объект JavaScript на стороне сервера (ASP NET MVC)?
Как передать все маршруты одному контроллеру в веб-API?
Пользовательский интерфейс Swagger: добавление раздела API вручную
Как вручную назначить токен контексту пользователя в WebApi
Могу ли я получить информацию, отличную от имени пользователя / идентификатора, из веб-API токена на предъявителя
Почему порядок отображения маршрута имеет значение в RouteConfig.cs
Как использовать более высокую версию для веб-контроллера API
Требуется версия API, но не указана. webapi
Похожие вопросы
Использование Firebase Admin SDK в firebase-database-dotnet
Рекурсивный метод C#
Есть ли у меня где-нибудь скрытый файл конфигурации?
Приложение JMeter для записи .Net получает неправильный ответ
Как сослаться на сборку .NET и указать ее зависимости?
Использование CloneState в VB.Net - RateExpense.CloneState не клонирует списки ставок
Список передачи .NET для действия перенаправления
Как программно указать привязку и конечную точку с помощью C# для службы, описанной в описании?
Восстановить внезапно потерянные кнопки панели инструментов, панель инструментов, кнопки состояния, строки меню из существующего проекта C#
Очистка кеша регулярных выражений в C#

JAVASCRIPT
Невозможно отправить смс с smsgateway.me после его обновления
Отправлял смс программно с помощью php с localhost. Но сегодня, после обновления smsgateway.me до v4, я не могу отправлять сообщения. На самом деле я не знаю, как передать ключ API в данный пример. Я много пробовал, но безуспешно.

Request Endpoint
Endpoint:   https://smsgateway.me/api/v4/message/send
Method: POST
Request Parameters
Name    Location    Required    Description
Content body    true    JSON payload with the information of SMS messages the API should send
Пример запроса

[
  {
    "phone_number": "07791064781",
    "message": "Hello World",
    "device_id": 1
  },
  {
    "phone_number": "07791064782",
    "message": "Hello World",
    "device_id": 2
  }
]
Я также уточняю у почтальона, но он возвращает "500 Internal Server Error"

Не могли бы вы проверить и помочь мне. Спасибо.

 11.05.2018 16:00
0
1
3 678
4
Данный вопрос помечен как решенный
 Ответы 4
 Ответ принят как подходящий
Я прочитал документацию на их сайте, и похоже, что вы, возможно, забыли отправить ключ API с запросом. Если у вас есть ключ API, вам необходимо отправить его в заголовке Authorization.

Authorization: <the api key here>
Используя Postman, вы можете установить этот заголовок и повторить попытку.

 11.05.2018 16:41
В прошлом году я нашел smsGateway.php и смог программно реализовать отправку sms, но 10 мая 2018 года приложение перестало работать, я заметил, что приложение смогло подключиться к серверу smsGateway, но не смогло получить сообщения и Причина заключалась в том, что программа не смогла разместить sms на сервере smsGateway и, глядя глубже, ошибка заключалась в том, что идентификатор устройства был неправильным, а это неправда, углубившись в проблему, я обнаружил, что новая версия была реализована с v3 до v4 и дополнительная информация была необходима для отправки формы моей php-программы на сервер smsGateway, это ключ авторизации, который вы можете найти, когда заходите на веб-страницу со своим логином и паролем. Проблема в том, как интегрироваться в smsGateway.php. Я все еще ищу эту программу с изменениями в новой версии, но я еще не смог ее найти.

16 мая 2018 г. smsgateway.me опубликовал руководство по интеграции некоторого программного обеспечения для программной отправки sms-сообщений. Это новая проблема, если у вас есть версия PHP 5.3, у вас могут возникнуть проблемы с интеграцией новых программ. Кстати намного сложнее, чем v3.

Также есть примечание: «Обратите внимание, что мы все еще работаем над документацией и скоро представим новые SDK!» что меня немного пугает. Я все еще работаю над интеграцией, но я обновляю версию PHP до 5.6 и смотрю, достаточно ли этого для устранения сообщений об ошибках.

После обновления моего php до 5.5 я смог заставить smsgateway.me работать с https://github.com/smsgatewayme/client-php скачать очередной набор файлов программ

require_once(__DIR__ . '/autoload.php');
use SMSGatewayMe\Client\ApiClient;
use SMSGatewayMe\Client\Configuration;
use SMSGatewayMe\Client\Api\MessageApi;
use SMSGatewayMe\Client\Model\SendMessageRequest;

$clients = new SMSGatewayMe\Client\ClientProvider(
    "your key from website"
);
$sendMessageRequest = new SMSGatewayMe\Client\Model\SendMessageRequest
([
    'phoneNumber' => $HAMiLote['HASMSTel'], 
    'message' => $AXMessage, 'deviceId' => 100701
]);
$sentMessages =   
$clients->getMessageClient()->sendMessages([$sendMessageRequest]);

?><pre><?php print_r($sentMessages); ?></pre><?php
 12.05.2018 18:42
Поскольку документация на веб-сайте новая и нет примера отправки sms на несколько номеров телефонов, я хочу поделиться этим кодом jQuery, который можно использовать для отправки sms с помощью smsgateway.me.

var p = {
    "phone1": "9999999999",
    "phone2": "8888888888"
};

for (var key in p) {
    if (p.hasOwnProperty(key)) {
        var phone_number = p[key];
        var message = "Test SMS";
        var device_id = 1;
        var obj = [{
            "phone_number": phone_number,
            "message": message,
            "device_id": device_id
        }];
        var mydata = JSON.stringify(obj);
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://smsgateway.me/api/v4/message/send",
            "method": "POST",
            "headers": {
                "Authorization": "YOUR_API_KEY",
                "Content-Type": "application/json",
            },
            "processData": false,
            data: mydata
        }
        $.ajax(settings).done(function(response) {
            console.info(response);
        });
    }
}
Этот код jQuery работает нормально, но иногда он отправляет несколько sms на любой номер в данном js-объекте. Это может быть из-за шлейфа for.

 13.05.2018 21:36
Получите токен от https://smsgateway.me. Войдите в свою учетную запись и нажмите на настройки, после чего вы увидите токен.

public function sendMsgWithSmsGatewayApi($msg,$number,$deviceid)
    {
        $curl = curl_init();
        curl_setopt_array($curl, array(
          CURLOPT_URL => "https://smsgateway.me/api/v4/message/send",
          CURLOPT_SSL_VERIFYPEER=>false,
          CURLOPT_RETURNTRANSFER => true,
          CURLOPT_ENCODING => "",
          CURLOPT_MAXREDIRS => 10,
          CURLOPT_TIMEOUT => 30,
          CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
          CURLOPT_CUSTOMREQUEST => "POST",
          CURLOPT_POSTFIELDS => "[{\"phone_number\": \"$number\", \"message\": \"$msg\", \"device_id\": $deviceid}]",
          CURLOPT_HTTPHEADER => array(
            "Cache-Control: no-cache",
            "Postman-Token: 0dfb5acc-f0ae-415b-a5d3-ca12a2dfdfd3",
            "authorization: Your-Token-here"
          ),
        ));

        $response = curl_exec($curl);
        $err = curl_error($curl);

        curl_close($curl);

        if ($err) {
          echo "cURL Error #:" . $err;
        } else {
          echo $response;
        }
    }
 18.05.2018 07:53
Другие вопросы по теме
Jinja 2 - Значение из списка
Преобразование толчка в массив
Прокручиваемый вид
Vue.js объединяет данные из RESP API
React Native filter json-объект с большим количеством аргументов
Как использовать Json (C#) для сериализации объекта, игнорируя определенные свойства
Лучший подход к сохранению некоторых данных в файл JSON
Нужен совет по быстрому хранению больших сериализованных объектов
Вложенный цикл JSON-массива ionic 3
Python не может json.loads () вложенный JSON от Kafka
Похожие вопросы
Какое __typename должно быть в состоянии связи Apollo?
Как использовать несколько плагинов next.js (машинописный текст и стилус)
Как я могу создать файл поверхности, используя несколько файлов DICOM в JavaScript, используя Papaya?
Как получить координаты ссылки в iframe в javascript
Получить последнюю дату года указанной даты
Неожиданный символ '@' в @import в конфигурации webpack
Добавление компонентов, таких как компонент изображения Instagram
Ng-checked с ng-change не работает
Google Maps JavaScript API V3 - отображение нескольких маршрутов
Уведомить пользователя о том, что видеофайл не поддерживается браузером

SPRING
Spring / Postman Тип содержимого application / octet-stream не поддерживается
Я использую Postman для отправки следующего запроса: Spring / Postman Тип содержимого application / octet-stream не поддерживается

Мой контроллер выглядит так:

@RestController
@RequestMapping(path = RestPath.CHALLENGE)
public class ChallengeController {

    private final ChallengeService<Challenge> service;

    @Autowired
    public ChallengeController(ChallengeService service) {
        this.service = service;
    }

    @ApiOperation(value = "Creates a new challenge in the system")
    @RequestMapping(method = RequestMethod.POST, consumes = {MediaType.MULTIPART_FORM_DATA_VALUE, MediaType.APPLICATION_OCTET_STREAM_VALUE},
        produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.CREATED)
    public ChallengeDto create(@ApiParam(value = "The details of the challenge to create") @RequestPart("challengeCreate") @Valid @NotNull @NotBlank ChallengeCreateDto challengeCreate,
                           @ApiParam(value = "The challenge file") @RequestPart("file") @Valid @NotNull @NotBlank MultipartFile file) {
        return service.create(challengeCreate, file);
    }
}
Я уже пытался изменить "потребление", чтобы удалить APPLICATION_OCTET_STREAM_VALUE на MULTIPART_FORM_DATA_VALUE, а также пытался удалить его, но ничего из этого не помогло.

Скажите, пожалуйста, если вам нужна дополнительная информация. Спасибо.

 17.05.2018 17:17
23
3
47 460
4
 Ответы 4
Использование @RequestParam для получения строки и файла решит эту проблему. В Postman используйте Content-Type как "multipart / form-data", а в Body определите ваш ввод как данные формы.

Обратитесь к https://stackoverflow.com/a/38336206/1606838

Пример:

 @PostMapping(consumes = {"multipart/form-data"})
public Output send(@RequestParam String input, @RequestParam MultipartFile file) {

}
 27.11.2018 10:24
Чтобы Spring @RequestPart работал с json-объектами, в Postman вам нужно отправить json-объект как Файл вместо Текст.

Поместите содержимое ChallengeCreateDto в файл json и сохраните его как challenge.json. Затем загрузите этот файл в Postman с типом Файл. Я приложил скриншот того, каким должен быть запрос в Postman, чтобы было понятнее.

Вы также можете использовать @PostMapping вместо @RequestMapping в более новых версиях Spring, как показано здесь.

@ResponseStatus(HttpStatus.CREATED)
@PostMapping()
public ChallengeDto create(@RequestPart("challengeCreate") ChallengeCreateDto challengeCreate, 
    @RequestPart("file") MultipartFile file) {
        return service.create(challengeCreate, file);
    }

 24.08.2019 20:58
Content-Type - это параметр заголовка, по умолчанию он не проверяется и по умолчанию имеет значение application-octet-stream. Просто установите флажок под элементом ленты заголовков (который после проверки по умолчанию имеет значение application / json). 

 26.10.2019 01:07
@Rokin Ответ хорош, но не нужно помещать json в файл и загружать. Вы также можете добиться этого, передав тип содержимого в объект json. Почтальон поддерживает параметры типа содержимого при отправке данных формы. для получения дополнительной информации см. изображение ниже, которое является самоописательным.

 01.04.2020 12:26
Другие вопросы по теме
Как сделать отдельные контроллеры REST для вложенных ресурсов? Весенний ботинок
API Azure isMemberOf дает «Недостаточно прав для завершения операции». ошибка при попытке доступа с виртуальной машины Azure
Будьте уверены - значение извлечения JsonPath
Метод в java-приложении. Какой метод должен возвращать данные из Rest Api
Как написать преобразователь String в POJO в моей службе Spring Boot Rest?
Как вызвать несколько запросов на отдых с помощью Axios
Сервис отдыха недоступен в jboss
Как получить доступ к изображениям локальной папки в папке проекта в Angular-cli
Несоответствие данных между ответом Json и базой данных
Есть ли какой-либо фильтр JSON для ограничения неопределенных свойств, которые передаются в HTTP-запросе в Spring REST API
Похожие вопросы
Ошибка Spring Data JPA 'jpaMappingContext', IllegalStateException: ожидается, что можно будет разрешить тип, но получено значение null
Нулевой указатель с использованием @Autowire Environment внутри @Component в подпакете
Почему зависимости не добавляются в путь к классам, когда я запускаю проект весенней загрузки в IntellJ IDEA?
Spring интеграция Java DSL - динамическое создание IntegrationFlows
Метод в java-приложении. Какой метод должен возвращать данные из Rest Api
Как написать преобразователь String в POJO в моей службе Spring Boot Rest?
Невозможно обработать составные / отчетные данные в Spring 5.0.1. Он только обнаруживает multipart / form-data в запросе
Как заставить CDI / Weld работать с новым ключевым словом?
AspectJ: пользовательский файл * .aj игнорируется
Как запретить HTTP-запрос DELETE в Springboot?

NPM
Ошибка пакета NPM - 'newman' не распознается как внутренняя или внешняя команда
Я установил последнюю версию Newman (3.10.0) на свой 64-битный компьютер Win 10.

C:\Users\ABC>npm install -g newman
C:\Users\ABC\AppData\Roaming\npm\newman -> C:\Users\ABC\AppData\Roaming\npm\node_modules\newman\bin\newman.js
+ newman@3.10.0
added 195 packages in 57.852s
Однако я не могу использовать newman и получаю сообщение об ошибке ниже при доступе.

C:\Users\ABC>newman -h
'newman' is not recognized as an internal or external command,
operable program or batch file.
Я добавил переменную окружения для NODE_PATH, указывающую на каталог newman C:\Users\ABC\AppData\Roaming\npm\node_modules\newman

но не повезло. Может ли кто-нибудь помочь.

 17.07.2018 14:22
2
0
8 250
4
Данный вопрос помечен как решенный
 Ответы 4
 Ответ принят как подходящий
Проблема была устранена после устранения неполадок с Node Application. На моем компьютере была установлена ​​предыдущая версия Node (32-разрядная), и она не была полностью удалена после того, как я удалил ее. Когда я установил 64-разрядную версию Node, обе записи присутствовали в переменной среды и вызвали конфликт.

Когда я вручную удалил как установочную папку, так и переменную env, newman работал правильно.

 15.08.2018 18:14
Я установил узел, vc redist и новичок один раз (на чистом 64-битном Windows 7), и проблема, похоже, связана с неправильной установкой новичок. И новичок, и узел должны быть установлены из сеанса администратора (а не только с правами администратора). Я установил новичок от обычного пользователя, настройка системного пути верна, но пользовательская среда не была установлена:

path=C:\Users\gagarin\AppData\Roaming\npm

Итак, я скопировал

C:\Users\<regular_user>\AppData\Roaming\npm

на C:\Users\admin\AppData\Roaming\npm и запустите C:\Users\admin\AppData\Roaming\npm\newman.cmd из сеанса администратора. После этого команда новичок стала работать в админке. К сожалению, он работает в обычном сеансе пользователя, только если я набираю полный путь к newman, например

Blockquote

c:> C: \ Users \ admin \ AppData \ Roaming \ npm \ newman run ....

 07.08.2019 11:01
Я также получал ту же ошибку, и я выполнил следующие шаги, чтобы устранить ее: 1. Знайте, какой пользователь запускает jenkins. Простой способ - это создать задание jenkins и в его разделе «Сборка» выполнить команду кто я 2. Если отображается «Системный пользователь», выполните следующие действия: 2.a. Установите C: \ Users \ I823285 \ AppData \ Roaming \ npm и C: \ Users \ I823285 \ AppData \ Roaming \ npm \ node_modules \ newman \ bin в SYSTEM ENV. ПЕРЕМЕННЫЕ. б. Перезапустите Jenkins, запустив CMD от имени ADMIN, перейдите в папку установки Jenkins, затем введите jenkins.exe restart. c. Перестроить проект УСПЕШНЫЙ!

 06.05.2020 21:49
Добавление в переменную Дорожка в разделе Environment Variable решает проблему, даже если мы добавляем не в NODE_PATH

C: \ Users \ ваш логин \ AppData \ Roaming \ npm

После выполнения этой командной строки снова открыть

 08.10.2020 11:06
Другие вопросы по теме
Проверка вложенной схемы JSON в Postman
ОШИБКА POSTMAN SYMFONY
Как получить одну строку с MySQL и NodeJS?
Запрос почтальона Laravel возвращает без проверки подлинности
Запросить веб-службу wcf с почтальоном
GET против POST для получения HTML-страницы
Как прикрепить токен в шапку скриптом автоматизации в почтальоне
Анализ тональности с помощью Text Analytics API и Postman
Как отправить токен доступа в почтальоне
Запрос Microsoft Graph BadRequest
Похожие вопросы
Nodejs отправляет ошибку подключения Sybase
Проблемы зависимости упрощенной схемы с метеором и железным кликом
NodeJS - использовать пакет и его зависимости от локальной системы
Когда я запускаю npm install, он терпит неудачу
Неверный объект конфигурации в webpack при настройке модулей CSS
Как исправить уязвимости npm вручную?
Сохраняются ли значения целостности и перекрестного происхождения SRI в package.json или в другом месте?
После установки nodejs, когда выполняется команда npm -v, он говорит, что префикс -g не распознается, в чем причина этого
Проблема с настройкой eslint для экспресс-проекта
NPM зависает в командной строке, но работает на PowerShell

POSTMAN
Почтальон: сохранить ответ в глобальной переменной
С PostMan, как можно сохранить следующий ответ:

[
    {
        "id": "6254c754-5a97-43fd-9b48-c428b9bd69e5",
        "name": "fdsfds",
        "description": "fdzf",
        "type": 0,
        "createDate": "2018-08-01T17:49:29.071+01:00",
        "lastUpdateDate": "2018-08-01T17:49:29.071+01:00",
        "lastUpdateUser": null,
        "variables": null,
        "instructions": null
    }
]
по переменной? Например id?

var jsonData = pm.response.json();

console.info(jsonData.id);

pm.globals.set("variable_key", jsonData.id);
 01.08.2018 19:32
2
2
7 816
4
 Ответы 4
Вы не можете сохранять объекты JS непосредственно в глобальной переменной, но вы можете использовать библиотеку JSON для преобразования вашего объекта в строку и сохранения, как в следующем коде:

// create the JS Object
var obj = {
    foo: "bar",
    some_number: 91
}

// convert the obj to string and save in the globals
pm.globals.set("my_obj", JSON.stringify(obj));

// get obj from globals and parse to JS Object again
var obj_from_globals = JSON.parse(pm.globals.get("my_obj"));

// print int he console
console.info(obj_from_globals);
Вы должны ожидать этого в своей консоли:



 01.08.2018 21:45
Я думаю, что решу это с помощью:

var jsonData = pm.response.json();

for (var key in jsonData) {
if (jsonData.hasOwnProperty(key)) {
var seqDelete = jsonData[key].id;
console.info(seqDelete);
}
}
pm.globals.set("seqDelete", seqDelete);
Это не совсем так. Если у меня есть многомерный массив, он получает только одно значение идентификатора

 01.08.2018 23:32
чтобы установить переменную окружения "authkey" из ответа

var obj = pm.response.json()["token"];
pm.environment.set("authkey", obj);
 24.04.2019 21:04
Это ответ, с которым я работаю:

{id: "myId", version: "2.0", name: "test"…}
Вот как я устанавливаю значение id из ответа в мою глобальную переменную appId:

var requestJson = JSON.parse(request.data);
console.info(requestJson)
postman.setGlobalVariable("appId", requestJson.id);
Результат:

result

 20.04.2021 13:30
Другие вопросы по теме
Неправильный синтаксис curl Post для Elasticsearch в Postman
Невозможно выполнить оператор if в почтальоне
Базовая HTTP-аутентификация с приложением Postman
Неподдерживаемый тип носителя для application / x-www-form-urlencoded и POJO
Создание API SendTransaction для Биткойн
Как добавить данные в запрос JSON?
Варианты совместного использования коллекции почтальонов для предприятия?
Ошибка VSTS REST API при использовании базовой авторизации (имя пользователя и пароль)
Почтальон: «Не удалось получить ответ» при передаче токена паспорта laravel
Как использовать аксиомы (сообщение) в реакции
Похожие вопросы
Как передать несколько значений параметров для одного и того же ключа в GET с помощью Postman
Как отправить уведомление от почтальона на firebase?
Создайте запрос PostMan GET с JWT
Загрузите один файл в веб-API
Как почтальон отправляет файл через HTTP?
Переменные встроенной среды Postman не оцениваются
Как загрузить все запросы в коллекциях почтальонов одной папкой ??
Идентичные запросы GET в CURL с использованием PHP и Postman имеют разные ответы
Вызов API работает с почтальоном, но Doenst работает с моим кодом
Почтальон GET запрос с ipv6

NODE.JS
Json Web Token verify () возвращает неверный формат jwt
const jwt = require("jsonwebtoken");
const SECRET = "superSuperSecret";

module.exports = function(req, res, next) {
    const token = req.body.token || req.query.token || req.headers[ "x-access-token" ];
    if (token) {
        return jwt.verify(token, SECRET, function(err, decoded) {
            if (err) {
                return res.json({
                    success: false,
                    message: "Failed to authenticate token.",
                });
            }
            req.user = decoded;
            return next();
        });
    }
    return res.unauthorized();
};
Я использую Postman для тестирования своего API. Я устанавливаю заголовок с ключом x-access-token и значением superSuperSecret. У меня ошибка {"name":"JsonWebTokenError","message":"jwt malformed","level":"error"}. Я использую этот https://github.com/FortechRomania/express-mongo-example-project/blob/master/src/middlewares/validateToken.js

 14.08.2018 22:05
4
2
38 313
4
Данный вопрос помечен как решенный
 Ответы 4
 Ответ принят как подходящий
Вы не можете передать какое-либо значение в качестве токена. Для создания токена вам понадобится jwt.sign(). См. Документацию JWT для получения дополнительной информации.

Также,

Для имени заголовка запроса просто используйте Authorization, а не x-access-token. Поместите предъявителя перед жетоном.

Authorization: Bearer TOKEN_STRING
Каждая часть JWT представляет собой значение в кодировке base64url. Вы можете получить свой токен как:

var token = req.headers.authorization.split(' ')[1];
 14.08.2018 22:21
Насколько я понимаю, вы отправляете не фактический токен JWT, а секрет. Действительный токен JWT состоит из трех частей, разделенных точками, например:

eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c

https://jwt.io/

Как вы можете видеть на вышеуказанном веб-сайте, superSuperSecret не является допустимым токеном JWT.

 14.08.2018 22:22
Примечание:

JWT вернет jwt искажен, если токен имеет значение null / недействительную подпись, которая передается в функцию jwt.verifty

let token = null;
let payload = jwt.verify(token, 'secretKey'); // ERROR : jwt malformed

 31.10.2019 11:30
Также я думаю, что jwt.verify с обратным вызовом - это асинхронная функция

 24.03.2021 13:00
Другие вопросы по теме
Загрузить изображение в sql с помощью экспресс в nodejs
Nodemailer несколько получателей почты с MongoDB
Сервер API ExpressJS с клиентской частью ReactJS
Не удается получить /blah.html - .ejs не может загрузить html?
Ошибка при получении ответа, если сервер nodejs отправляет ответ после некоторой задержки
Кажется, я не могу понять структуру папок, и он говорит, что система не может найти мой файл?
Отображение объекта JSON в EJS при нажатии на div
Приложение карты с использованием vue-nodejs
Повторение класса div мопса в приложении Express с данными MySQL
Сервер узла не возвращает никакого ответа после запроса API
Похожие вопросы
Лучший способ структурировать данные MongoDB для конкретных настроек даты
FindOneAndUpdate с Upsert всегда вставляет нового пользователя
NuxtJS: EmailJS не может найти зависимость 'fs'
NodeJS HTTP-запрос GET
Ошибка при запуске npm install -g composer-cli в Windows 10
Клиентский тест скорости
Что не так с моим JSON в этом запросе Oauth?
Поиск в тексте PDF с помощью Node.js
Как отправить tcp-сообщение на удаленный сервер с помощью socket.io
Запускать лямбда-функции в том же лямбда-коде из AWS

JAVASCRIPT
Как сгенерировать случайное число, длина числа должна быть 21 и должна иметь префикс "01" в Postman
Я использую приведенный ниже код для генерации случайного числа. Результат должен быть длиной 21 и с префиксом, начинающимся с "01".

postman.setGlobalVariable('RandomOrderId', "01"+ Math.floor(Math.random() * 1234567890123456789));
Однако иногда он генерирует вывод длиной 20, 19 и так далее. Как мне убедиться, что он всегда генерирует случайное число длиной 21 и префиксом "01"?

 17.08.2018 16:44
2
0
301
4
Данный вопрос помечен как решенный
 Ответы 4
Math.random дает вам случайное число от 0 до 1, умножение его на миллион дает вам что-то от нуля до миллиона. Если вы хотите разрешить ведущие числа, вы можете преобразовать число в строку и добавить необходимое количество ведущих нулей, если это возможно в вашем случае. В противном случае вы можете сгенерировать 21 случайное число от 0 до 9 и объединить их в случайное огромное число (которое также может иметь ведущие нули).

Код может выглядеть так:

var s = "01";
    for(var i = 0; i < 21; i++) {
        s = s + Math.floor(Math.random() * 10);
    }
    console.info(s);
 17.08.2018 16:54
Попробуйте ввести этот JS:

var len = 21;
parseInt((Math.random() * 20 + 1) * Math.pow(20,len-1), 20);
 17.08.2018 16:58
 Ответ принят как подходящий
Используйте нижеприведенный

postman.setGlobalVariable('RandomOrderId', "01"+ Math.floor(1000000000000000000 + Math.random() * 1000000000000000000));
Подтвердите, используя приведенную ниже

function getRandomInt() {
  return ( "01" + Math.floor(1000000000000000000 + Math.random() * 1000000000000000000));
}

console.info(getRandomInt());
console.info(getRandomInt());
console.info(getRandomInt());
console.info(getRandomInt());
console.info(getRandomInt());
 17.08.2018 17:37
Вы также можете использовать метод Lodash_.случайный() в Postman. Установите нижнее и верхнее значения для диапазона, и он вернет 19-значное число между этими значениями. Префикс 01 можно добавить прямо к глобальному значению.

const lowerLimit = 1000000000000000000
const upperLimit = 9999999999999999999

pm.globals.set("randomNumber", `01${_.random(lowerLimit,upperLimit)}`)
Просто другой способ получить тот же результат, что и принятый ответ.

 20.08.2018 15:33
Другие вопросы по теме
Заголовок ошибки консоли почтальона содержит недопустимые символы
Как разместить службы nodejs на сервере nginx в VirtualMachine?
Непредвиденная ошибка поля при отправке запроса на публикацию?
Обновить переменную среды в Postman с помощью Newman
Установите переменную тестовой коллекции, доступную для каждого теста запроса в Postman
Как отправить файл с помощью двоичного файла Body в Jmeter?
REST API - цены на AWS EC2 в час
JSON из URL-адреса возвращает null
Json Web Token verify () возвращает неверный формат jwt
Параметр заголовка с подчеркиванием в HTTP-запросах недоступен на стороне сервера при запросе через почтальона
Похожие вопросы
Как лучше всего искать пользователя по имени?
Создание массива объектов в JS
Как подсчитать случайный вывод в цикле?
Использование обработчика on () для динамических элементов не работает
Замыкания и область видимости JavaScript: как передать переменную внешней области видимости функции обратного вызова, которая передается в качестве аргумента?
При нажатии div перемещается вниз
D3.js v4 - как добавить кнопку масштабирования с поведением масштабирования колесной мыши по умолчанию
Перенос расширения Chrome в веб-расширение
Ошибка TSLint «Ожидается цикл for-of» вместо цикла «for» при этой простой итерации »
Не удается загрузить PDF-файл, полученный из BLOB, через сервлет

LARAVEL
Как обновить ресурс API Laravel?
Как обновить ресурс API Laravel?I использовал встроенный метод resource на моих маршрутах для конкретного контроллера для генерации стандартных маршрутов CRUD, но я не могу понять, как обновить ресурс. Я пытаюсь создать API, поэтому использую App\Http\Resources, а не только модели. Вот код моего контроллера, который пытается обновить, но он не работает:

public function update(Request $request, Sample $sample)
{
    $sample = Sample::where('id', $request->id)->update($request->all());   
}
Я использую почтальон для проверки своих маршрутов и пытаюсь выполнить запрос put с необработанным обновленным JSON на app.dev/api/samples/1, но после помещения запроса get на тот же URL-адрес я вижу, что значения не изменились. Как я могу заставить это обновление работать?

Обновлено: вот мой файл маршрутов api.php

Route::resource('samples', 'SampleController');
 28.08.2018 06:58
0
8
6 503
4
 Ответы 4
Вы можете написать это. Надеюсь, это решит вашу проблему,

public function update(Request $request, Sample $sample)
{
    $sample = $sample->update($request->all());   
}
 28.08.2018 07:09
Если это стандартный маршрут / контроллер ресурсов Laravel и ваша конечная точка - api/samples/1 тогда ваш метод обновления PATCH / PUT должен выглядеть примерно так:

public function update(Request $request, $id)
{
    $sample = Sample::find($id);
    $sample->update($request->all());
}
Если ваше тело JSON, вам, вероятно, понадобятся:

$sample->update($request->json()->all());

 28.08.2018 07:09
Вам необходимо определить столбцы в модели как заполняемые, чтобы их можно было обновить позже. Все, что вам нужно сделать, это добавить следующую строку в Sample Model.

protected $fillable = [ 'name', 'content'];
Если это все еще не работает, не стесняйтесь спрашивать.

 28.08.2018 07:47
в заголовке почтальона попробуйте ввести вот так, я использую x-www-form-urlencoded:

Key                  Value                            Description
Accept          application/json
Content-Type    application/x-www-form-urlencoded
в вашем теле в почтальоне попробуйте использовать x-www-form-urlencoded:

key         value
name        update
content     new content
 29.08.2018 05:52
Другие вопросы по теме
Обработка очереди параллельными / асинхронными запросами
Как создать HTTP-запрос Java в таком формате?
Angular - как проверить ожидающие запросы?
Доступно ли безопасное соединение SSL без вызова браузера?
Laravel: преобразование запроса в другой
Как я могу запросить данные json
Webscraper в Node.js возвращает пустой массив с асинхронностью и обещанием
Настройка заголовка и перенаправления ajax
На запрошенном ресурсе отсутствует заголовок Access-Control-Allow-Origin. Следовательно, источник "http://mydomainname.net" не имеет доступа
Изменить переменные EJS без обновления страницы Nodejs
Похожие вопросы
Создание политики в Laravel
Список Laravel править
Как избавиться от слишком большого количества операторов if в laravel?
Laravel 5 error 500 ошибка сервера. Неперехваченное ErrorException: файл_пуска_контент (/ var / www / laravel / storage / framework / views /
Результаты поиска Laravel на второй странице
Завершение промежуточного программного обеспечения Laravel не вызывается при использовании версии конструктора
Вход в Laravel продолжает выдавать ошибку исключения без аутентификации
Цикл ошибки через вложенный объект Json Laravel
Laravel Nova: Как я могу расширить ресурсы и использовать их в пользовательском инструменте Nova?
Отсутствует ZIP-архив с расширением PHP при попытке установить laravel из композитора

JAVA
Как получить токен доступа с помощью client_credentials, используя Java-код?
У меня есть API, для которого требуется токен доступа, чтобы получить ответ. В postman мы используем OAuth 2.0 для получения токена доступа, указав имя пользователя и пароль клиента. Аналогичным образом я хочу получить новый токен доступа.

Вот пример кода, который я пробовал до сих пор.

import java.io.*;
import java.net.URL;
import java.net.URLEncoder;
import java.util.Map;
import java.lang.reflect.Type;
import javax.net.ssl.HttpsURLConnection;

// Google Gson Libraries used for Json Parsing
import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;

public class AuthGoogle {

    /**
     * @param args
     * @throws IOException 
     */
    public static void main(String[] args) throws IOException {
        // TODO Auto-generated method stub
         String grantType = "client_credentials";
            String applicationID = "application";
            String username = "username";
            String password = "password";
            String url = "url_link";
            HttpsURLConnection httpConn = null;
            BufferedReader in = null;

            try {

                // Create the data to send
                StringBuilder data = new StringBuilder();
                data.append("grant_type = " + URLEncoder.encode(grantType, "UTF-8"));
                data.append("&amp;client_id = " + URLEncoder.encode(applicationID, "UTF-8"));
                data.append("&amp;username = " + URLEncoder.encode(username, "UTF-8"));
                data.append("&amp;password = " + URLEncoder.encode(password, "UTF-8"));

                // Create a byte array of the data to be sent
                byte[] byteArray = data.toString().getBytes("UTF-8");

                // Setup the Request
                URL request = new URL(null, url,  new sun.net.www.protocol.https.Handler());
                httpConn = (HttpsURLConnection)request.openConnection();
                httpConn.setRequestMethod("POST");
                httpConn.setRequestProperty("Content-Type", "application/x-www-form-urlencoded");
                httpConn.setRequestProperty("Content-Length", "" + byteArray.length);
                httpConn.setDoOutput(true);

                // Write data
                OutputStream postStream = httpConn.getOutputStream();
                postStream.write(byteArray, 0, byteArray.length);
                postStream.close();

                // Send Request &amp; Get Response
                InputStreamReader reader = new InputStreamReader(httpConn.getInputStream());
                in = new BufferedReader(reader);

                // Get the Json reponse containing the Access Token
                String json = in.readLine();
                System.out.println("Json String = " + json);

                // Parse the Json response and retrieve the Access Token
                Gson gson = new Gson();
                Type mapType  = new TypeToken<Map<String,String>>(){}.getType();
                Map<String,String> ser = gson.fromJson(json, mapType);
                String accessToken = ser.get("access_token");
                System.out.println("Access Token = " + accessToken);

            } catch (java.io.IOException e) {

                // This exception will be raised if the server didn't return 200 - OK
                // Retrieve more information about the error
                System.out.println(e.getMessage());

            } finally {

                // Be sure to close out any resources or connections
                if (in != null) in.close();
                if (httpConn != null) httpConn.disconnect();
            }
        }

}
Я получаю вывод как Connection refused: connect.

Еще один код, который я пробовал: -

import org.apache.oltu.oauth2.client.OAuthClient;
import org.apache.oltu.oauth2.client.URLConnectionClient;
import org.apache.oltu.oauth2.client.request.OAuthClientRequest;
import org.apache.oltu.oauth2.client.response.OAuthJSONAccessTokenResponse;
import org.apache.oltu.oauth2.common.OAuth;
import org.apache.oltu.oauth2.common.message.types.GrantType;

import java.io.BufferedReader;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import org.apache.commons.codec.binary.Base64;

public class OltuJavaClient {

    public static final String TOKEN_REQUEST_URL = "url_link";
    public static final String CLIENT_ID = "client_id";
    public static final String CLIENT_SECRET = "client_pass";

    public static void main(String[] args) {
        try {
            OAuthClient client = new OAuthClient(new URLConnectionClient());

            OAuthClientRequest request =
                    OAuthClientRequest.tokenLocation(TOKEN_REQUEST_URL)
                    .setGrantType(GrantType.CLIENT_CREDENTIALS)
                    .setClientId(CLIENT_ID)
                    .setClientSecret(CLIENT_SECRET)
                    // .setScope() here if you want to set the token scope
                    .buildQueryMessage();
            request.addHeader("Accept", "application/json");
            request.addHeader("Content-Type", "application/json");
            request.addHeader("Authorization", base64EncodedBasicAuthentication());

            String token = client.accessToken(request, OAuth.HttpMethod.POST, OAuthJSONAccessTokenResponse.class).getAccessToken();
            System.out.println(token.toString());

        } catch (Exception exn) {
            exn.printStackTrace();
        }
    }

    private static String base64EncodedBasicAuthentication() {
        // TODO Auto-generated method stub
        return null;
    }
}
Вот я получаю эту ошибку: -OAuthProblemException{error='unsupported_response_type', description='Invalid response! Response body is not application/json encoded', uri='null', state='null', scope='null', redirectUri='null', responseStatus=0, parameters = {}}

Можем ли мы так поступить? Любые зацепки будут оценены.

 03.09.2018 09:08
2
0
15 422
4
 Ответы 4
В принципе, вместо него следует использовать buildBodyMessage. Внутренне все заголовки, такие как Content-Type, Authorization, также могут быть удалены. Обратите внимание, что Content-Type устанавливается внутри при вызове client.accessToken (например, headers.put(OAuth.HeaderType.CONTENT_TYPE, OAuth.ContentType.URL_ENCODED);), поэтому ручная установка Content-Type переопределит его значение, что приведет к сбою запроса.

    try {
        OAuthClient client = new OAuthClient(new URLConnectionClient());

        OAuthClientRequest request = OAuthClientRequest.tokenLocation(TOKEN_REQUEST_URL)
                .setGrantType(GrantType.CLIENT_CREDENTIALS)
                .setClientId(CLIENT_ID)
                .setClientSecret(CLIENT_SECRET)
                .setScope(SCOPE)
                .buildBodyMessage();

        System.out.println(request.getBody());

        String token = client.accessToken(request, OAuth.HttpMethod.POST, OAuthJSONAccessTokenResponse.class).getAccessToken();
        System.out.println(token);
    } catch (Exception exn) {
        exn.printStackTrace();
    }
 03.09.2018 15:18
Задайте тип предоставления в теле запроса, используя указанную ниже строку кода. Точно будет работать

String grant_type = "client_credentials";    
String scope = "generate-ads-output";    

httpPost.addHeader("Content-Type", "application/x-www-form-urlencoded");    
StringEntity input = null;    
try {    
input = new StringEntity("grant_type = " + grant_type);     

    httpPost.setEntity(input);    
 } 
 catch (UnsupportedEncodingException e) {    
        e.printStackTrace();    
   }
 11.09.2019 19:54
Я пишу код, который мне подходит. это :

package fwutech.test;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.io.Reader;
import java.net.URL;
import java.net.URLConnection;
import java.security.KeyManagementException;
import java.security.NoSuchAlgorithmException;
import java.security.cert.X509Certificate;
import java.util.Map;

import javax.net.ssl.HostnameVerifier;
import javax.net.ssl.HttpsURLConnection;
import javax.net.ssl.SSLContext;
import javax.net.ssl.SSLSession;
import javax.net.ssl.TrustManager;
import javax.net.ssl.X509TrustManager;
import java.lang.reflect.Type;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;

public class Main {

    public static void main(String[] args) throws IOException, NoSuchAlgorithmException, KeyManagementException {

        // Create a trust manager that does not validate certificate chains
        TrustManager[] trustAllCerts = new TrustManager[] {new X509TrustManager() {
                public java.security.cert.X509Certificate[] getAcceptedIssuers() {
                    return null;
                }
                public void checkClientTrusted(X509Certificate[] certs, String authType) {
                }
                public void checkServerTrusted(X509Certificate[] certs, String authType) {
                }
            }
        };

        // Install the all-trusting trust manager
        SSLContext sc = SSLContext.getInstance("SSL");
        sc.init(null, trustAllCerts, new java.security.SecureRandom());
        HttpsURLConnection.setDefaultSSLSocketFactory(sc.getSocketFactory());

        // Create all-trusting host name verifier
        HostnameVerifier allHostsValid = new HostnameVerifier() {
            public boolean verify(String hostname, SSLSession session) {
                return true;
            }
        };

        // Install the all-trusting host verifier
        HttpsURLConnection.setDefaultHostnameVerifier(allHostsValid);
        StringBuilder data = new StringBuilder();
        data.append("grant_type=client_credentials");
        byte[] byteArray = data.toString().getBytes("UTF-8");
        URL url = new URL("https://192.168.15.82:8243/token");
        HttpsURLConnection con = (HttpsURLConnection)url.openConnection();
        con.setRequestMethod("POST");
        con.setConnectTimeout(5000);
        con .setDoOutput(true);
        con.setRequestProperty("Authorization",
                "Basic WFFWWFh5dElKeHBvcGxBd3JieGFNTEZzUDQ4YTppWWZpakJTbEJJUkpGQ2Z2NndpR2VzNWdpYU1h");
        OutputStream postStream = con.getOutputStream();
        postStream.write(byteArray, 0, byteArray.length);
        postStream.close();
//      curl -k -d "grant_type=client_credentials" -H "Authorization: Basic WFFWWFh5dElKeHBvcGxBd3JieGFNTEZzUDQ4YTppWWZpakJTbEJJUkpGQ2Z2NndpR2VzNWdpYU1h" https://192.168.15.82:8243/token
        InputStreamReader reader = new InputStreamReader(con.getInputStream());
        BufferedReader in = new BufferedReader(reader);
        String json = in.readLine();
        System.out.println("Json String = " + json);

        // Parse the Json response and retrieve the Access Token
        Gson gson = new Gson();
        Type mapType  = new TypeToken<Map<String,String>>(){}.getType();
        Map<String,String> ser = gson.fromJson(json, mapType);
        String accessToken = ser.get("access_token");
        System.out.println("Access Token = " + accessToken);
        in.close();
        con.disconnect();
    }

}
 03.01.2020 15:21
Лучший способ получить токен доступа с помощью JAVA 11 java.net.http.

Вот пример кода:

//Cliend id and client secret
var keys = "clientid goes here:Client secret goes here";
var URL = "http://localhost:8080/api/token"

HashMap<String, String> parameters = new HashMap<>();
parameters.put("grant_type", "client_credentials");
String form = parameters.keySet().stream()
        .map(key -> key + " = " + URLEncoder.encode(parameters.get(key), StandardCharsets.UTF_8))
        .collect(Collectors.joining("&"));

String encoding = Base64.getEncoder().encodeToString(keys.getBytes());
HttpClient client = HttpClient.newHttpClient();

HttpRequest request = HttpRequest.newBuilder().uri(URI.create(url))
        .headers("Content-Type", "application/x-www-form-urlencoded", "Authorization", "Basic "+encoding)
        .POST(BodyPublishers.ofString(form)).build();
HttpResponse<?> response = client.send(request, BodyHandlers.ofString());
System.out.println(response.statusCode() + response.body().toString());
 23.06.2020 14:11
Другие вопросы по теме
Android: специальные символы вызывают проблемы при переходе к успокаивающим службам
Cpprestsdk Сообщение SSL не работает в Windows7, но работает в Windows 10
React / api - как разобрать и сопоставить массив внутри ответа api
Получение данных из API на стороне клиента без указания ключа
Форма входа в Джерси Аутентификация
Rest API / Soap UI Tool - Как передать cookie вручную при достижении конечной точки
Внешний ключ всегда равен нулю в отношении один ко многим - данные загрузки Spring с JPA
Flask - получение запросов с параметром json с помощью cURL
Какова стандартная практика React - хранить полученные данные в родительском компоненте?
Записать байтовый массив в файл Javascript
Похожие вопросы
Почему я не могу создать в Windows папку с именем «con»?
Ярлыки слайдера не отображаются
Использование GraalVM для запуска Java на Heroku
Заголовок ответа Access-Control-Allow-Credentials - "", который должен иметь значение "true"
Какие параметры я должен передать, чтобы равномерно разделить работу между вызовами функций?
Tomcat: добавлены дополнительные JAR-файлы - перезагрузка контекста
Android TabbedActivity - указание регистра отсутствует в "MainActivity.java"
Как использовать ResultSet, возвращаемый методом java в SOAPUI, с помощью Groovy script?
Объединение строк с последующим добавлением в цикл
Не удается управлять профилями maven в IntelliJ

JAVA
Как получить токен доступа с помощью client_credentials, используя Java-код?
У меня есть API, для которого требуется токен доступа, чтобы получить ответ. В postman мы используем OAuth 2.0 для получения токена доступа, указав имя пользователя и пароль клиента. Аналогичным образом я хочу получить новый токен доступа.

Вот пример кода, который я пробовал до сих пор.

import java.io.*;
import java.net.URL;
import java.net.URLEncoder;
import java.util.Map;
import java.lang.reflect.Type;
import javax.net.ssl.HttpsURLConnection;

// Google Gson Libraries used for Json Parsing
import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;

public class AuthGoogle {

    /**
     * @param args
     * @throws IOException 
     */
    public static void main(String[] args) throws IOException {
        // TODO Auto-generated method stub
         String grantType = "client_credentials";
            String applicationID = "application";
            String username = "username";
            String password = "password";
            String url = "url_link";
            HttpsURLConnection httpConn = null;
            BufferedReader in = null;

            try {

                // Create the data to send
                StringBuilder data = new StringBuilder();
                data.append("grant_type = " + URLEncoder.encode(grantType, "UTF-8"));
                data.append("&amp;client_id = " + URLEncoder.encode(applicationID, "UTF-8"));
                data.append("&amp;username = " + URLEncoder.encode(username, "UTF-8"));
                data.append("&amp;password = " + URLEncoder.encode(password, "UTF-8"));

                // Create a byte array of the data to be sent
                byte[] byteArray = data.toString().getBytes("UTF-8");

                // Setup the Request
                URL request = new URL(null, url,  new sun.net.www.protocol.https.Handler());
                httpConn = (HttpsURLConnection)request.openConnection();
                httpConn.setRequestMethod("POST");
                httpConn.setRequestProperty("Content-Type", "application/x-www-form-urlencoded");
                httpConn.setRequestProperty("Content-Length", "" + byteArray.length);
                httpConn.setDoOutput(true);

                // Write data
                OutputStream postStream = httpConn.getOutputStream();
                postStream.write(byteArray, 0, byteArray.length);
                postStream.close();

                // Send Request &amp; Get Response
                InputStreamReader reader = new InputStreamReader(httpConn.getInputStream());
                in = new BufferedReader(reader);

                // Get the Json reponse containing the Access Token
                String json = in.readLine();
                System.out.println("Json String = " + json);

                // Parse the Json response and retrieve the Access Token
                Gson gson = new Gson();
                Type mapType  = new TypeToken<Map<String,String>>(){}.getType();
                Map<String,String> ser = gson.fromJson(json, mapType);
                String accessToken = ser.get("access_token");
                System.out.println("Access Token = " + accessToken);

            } catch (java.io.IOException e) {

                // This exception will be raised if the server didn't return 200 - OK
                // Retrieve more information about the error
                System.out.println(e.getMessage());

            } finally {

                // Be sure to close out any resources or connections
                if (in != null) in.close();
                if (httpConn != null) httpConn.disconnect();
            }
        }

}
Я получаю вывод как Connection refused: connect.

Еще один код, который я пробовал: -

import org.apache.oltu.oauth2.client.OAuthClient;
import org.apache.oltu.oauth2.client.URLConnectionClient;
import org.apache.oltu.oauth2.client.request.OAuthClientRequest;
import org.apache.oltu.oauth2.client.response.OAuthJSONAccessTokenResponse;
import org.apache.oltu.oauth2.common.OAuth;
import org.apache.oltu.oauth2.common.message.types.GrantType;

import java.io.BufferedReader;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import org.apache.commons.codec.binary.Base64;

public class OltuJavaClient {

    public static final String TOKEN_REQUEST_URL = "url_link";
    public static final String CLIENT_ID = "client_id";
    public static final String CLIENT_SECRET = "client_pass";

    public static void main(String[] args) {
        try {
            OAuthClient client = new OAuthClient(new URLConnectionClient());

            OAuthClientRequest request =
                    OAuthClientRequest.tokenLocation(TOKEN_REQUEST_URL)
                    .setGrantType(GrantType.CLIENT_CREDENTIALS)
                    .setClientId(CLIENT_ID)
                    .setClientSecret(CLIENT_SECRET)
                    // .setScope() here if you want to set the token scope
                    .buildQueryMessage();
            request.addHeader("Accept", "application/json");
            request.addHeader("Content-Type", "application/json");
            request.addHeader("Authorization", base64EncodedBasicAuthentication());

            String token = client.accessToken(request, OAuth.HttpMethod.POST, OAuthJSONAccessTokenResponse.class).getAccessToken();
            System.out.println(token.toString());

        } catch (Exception exn) {
            exn.printStackTrace();
        }
    }

    private static String base64EncodedBasicAuthentication() {
        // TODO Auto-generated method stub
        return null;
    }
}
Вот я получаю эту ошибку: -OAuthProblemException{error='unsupported_response_type', description='Invalid response! Response body is not application/json encoded', uri='null', state='null', scope='null', redirectUri='null', responseStatus=0, parameters = {}}

Можем ли мы так поступить? Любые зацепки будут оценены.

 03.09.2018 09:08
2
0
15 422
4
 Ответы 4
В принципе, вместо него следует использовать buildBodyMessage. Внутренне все заголовки, такие как Content-Type, Authorization, также могут быть удалены. Обратите внимание, что Content-Type устанавливается внутри при вызове client.accessToken (например, headers.put(OAuth.HeaderType.CONTENT_TYPE, OAuth.ContentType.URL_ENCODED);), поэтому ручная установка Content-Type переопределит его значение, что приведет к сбою запроса.

    try {
        OAuthClient client = new OAuthClient(new URLConnectionClient());

        OAuthClientRequest request = OAuthClientRequest.tokenLocation(TOKEN_REQUEST_URL)
                .setGrantType(GrantType.CLIENT_CREDENTIALS)
                .setClientId(CLIENT_ID)
                .setClientSecret(CLIENT_SECRET)
                .setScope(SCOPE)
                .buildBodyMessage();

        System.out.println(request.getBody());

        String token = client.accessToken(request, OAuth.HttpMethod.POST, OAuthJSONAccessTokenResponse.class).getAccessToken();
        System.out.println(token);
    } catch (Exception exn) {
        exn.printStackTrace();
    }
 03.09.2018 15:18
Задайте тип предоставления в теле запроса, используя указанную ниже строку кода. Точно будет работать

String grant_type = "client_credentials";    
String scope = "generate-ads-output";    

httpPost.addHeader("Content-Type", "application/x-www-form-urlencoded");    
StringEntity input = null;    
try {    
input = new StringEntity("grant_type = " + grant_type);     

    httpPost.setEntity(input);    
 } 
 catch (UnsupportedEncodingException e) {    
        e.printStackTrace();    
   }
 11.09.2019 19:54
Я пишу код, который мне подходит. это :

package fwutech.test;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.io.Reader;
import java.net.URL;
import java.net.URLConnection;
import java.security.KeyManagementException;
import java.security.NoSuchAlgorithmException;
import java.security.cert.X509Certificate;
import java.util.Map;

import javax.net.ssl.HostnameVerifier;
import javax.net.ssl.HttpsURLConnection;
import javax.net.ssl.SSLContext;
import javax.net.ssl.SSLSession;
import javax.net.ssl.TrustManager;
import javax.net.ssl.X509TrustManager;
import java.lang.reflect.Type;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;

public class Main {

    public static void main(String[] args) throws IOException, NoSuchAlgorithmException, KeyManagementException {

        // Create a trust manager that does not validate certificate chains
        TrustManager[] trustAllCerts = new TrustManager[] {new X509TrustManager() {
                public java.security.cert.X509Certificate[] getAcceptedIssuers() {
                    return null;
                }
                public void checkClientTrusted(X509Certificate[] certs, String authType) {
                }
                public void checkServerTrusted(X509Certificate[] certs, String authType) {
                }
            }
        };

        // Install the all-trusting trust manager
        SSLContext sc = SSLContext.getInstance("SSL");
        sc.init(null, trustAllCerts, new java.security.SecureRandom());
        HttpsURLConnection.setDefaultSSLSocketFactory(sc.getSocketFactory());

        // Create all-trusting host name verifier
        HostnameVerifier allHostsValid = new HostnameVerifier() {
            public boolean verify(String hostname, SSLSession session) {
                return true;
            }
        };

        // Install the all-trusting host verifier
        HttpsURLConnection.setDefaultHostnameVerifier(allHostsValid);
        StringBuilder data = new StringBuilder();
        data.append("grant_type=client_credentials");
        byte[] byteArray = data.toString().getBytes("UTF-8");
        URL url = new URL("https://192.168.15.82:8243/token");
        HttpsURLConnection con = (HttpsURLConnection)url.openConnection();
        con.setRequestMethod("POST");
        con.setConnectTimeout(5000);
        con .setDoOutput(true);
        con.setRequestProperty("Authorization",
                "Basic WFFWWFh5dElKeHBvcGxBd3JieGFNTEZzUDQ4YTppWWZpakJTbEJJUkpGQ2Z2NndpR2VzNWdpYU1h");
        OutputStream postStream = con.getOutputStream();
        postStream.write(byteArray, 0, byteArray.length);
        postStream.close();
//      curl -k -d "grant_type=client_credentials" -H "Authorization: Basic WFFWWFh5dElKeHBvcGxBd3JieGFNTEZzUDQ4YTppWWZpakJTbEJJUkpGQ2Z2NndpR2VzNWdpYU1h" https://192.168.15.82:8243/token
        InputStreamReader reader = new InputStreamReader(con.getInputStream());
        BufferedReader in = new BufferedReader(reader);
        String json = in.readLine();
        System.out.println("Json String = " + json);

        // Parse the Json response and retrieve the Access Token
        Gson gson = new Gson();
        Type mapType  = new TypeToken<Map<String,String>>(){}.getType();
        Map<String,String> ser = gson.fromJson(json, mapType);
        String accessToken = ser.get("access_token");
        System.out.println("Access Token = " + accessToken);
        in.close();
        con.disconnect();
    }
}
 03.01.2020 15:21
Лучший способ получить токен доступа с помощью JAVA 11 java.net.http.

Вот пример кода:

//Cliend id and client secret
var keys = "clientid goes here:Client secret goes here";
var URL = "http://localhost:8080/api/token"

HashMap<String, String> parameters = new HashMap<>();
parameters.put("grant_type", "client_credentials");
String form = parameters.keySet().stream()
        .map(key -> key + " = " + URLEncoder.encode(parameters.get(key), StandardCharsets.UTF_8))
        .collect(Collectors.joining("&"));

String encoding = Base64.getEncoder().encodeToString(keys.getBytes());
HttpClient client = HttpClient.newHttpClient();

HttpRequest request = HttpRequest.newBuilder().uri(URI.create(url))
        .headers("Content-Type", "application/x-www-form-urlencoded", "Authorization", "Basic "+encoding)
        .POST(BodyPublishers.ofString(form)).build();
HttpResponse<?> response = client.send(request, BodyHandlers.ofString());
System.out.println(response.statusCode() + response.body().toString());
 23.06.2020 14:11
Другие вопросы по теме
Android: специальные символы вызывают проблемы при переходе к успокаивающим службам
Cpprestsdk Сообщение SSL не работает в Windows7, но работает в Windows 10
React / api - как разобрать и сопоставить массив внутри ответа api
Получение данных из API на стороне клиента без указания ключа
Форма входа в Джерси Аутентификация
Rest API / Soap UI Tool - Как передать cookie вручную при достижении конечной точки
Внешний ключ всегда равен нулю в отношении один ко многим - данные загрузки Spring с JPA
Flask - получение запросов с параметром json с помощью cURL
Какова стандартная практика React - хранить полученные данные в родительском компоненте?
Записать байтовый массив в файл Javascript
Похожие вопросы
Почему я не могу создать в Windows папку с именем «con»?
Ярлыки слайдера не отображаются
Использование GraalVM для запуска Java на Heroku
Заголовок ответа Access-Control-Allow-Credentials - "", который должен иметь значение "true"
Какие параметры я должен передать, чтобы равномерно разделить работу между вызовами функций?
Tomcat: добавлены дополнительные JAR-файлы - перезагрузка контекста
Android TabbedActivity - указание регистра отсутствует в "MainActivity.java"
Как использовать ResultSet, возвращаемый методом java в SOAPUI, с помощью Groovy script?
Объединение строк с последующим добавлением в цикл
Не удается управлять профилями maven в IntelliJ

DATABASE
Обновить значение столбца в laravel 5.4
i want to update privacy of a post

my controller

   public function changePostsPrivacy(Request $request){
            $userId = $request->user()->id;
            $postid = $request->get('id');
            //dd($postid);
            $privacy = $request->get('privacy');//dd($privacy);
            $user = User::where(['id' => $userId, 'hide' => 0])->first();
            if ($user && $postid && in_array($privacy, [1,0])){
                DB::table('posts')->update(['creator_id' => $userId, 'id' => $postid],[
                    'privacy' => $privacy,
                ]);
            }
        }
Route :

 Route::group(['middleware'=>['auth:api', \App\Http\Middleware\OnlyRegisteredUsers::class]], function(){
        /**
         * Group for registered users only APIs
         */
        Route::post('changePostsPrivacy','UserController@changePostsPrivacy');
    });
Migration

 public function up()
    {
        Schema::create('posts', function (Blueprint $table) {
            $table->increments('id');
            $table->string('title');
            $table->longText('content');
            $table->string('short_description');
            $table->unsignedInteger('media_id')->nullable();
            $table->foreign('media_id')->references('id')->on('medias');
            $table->unsignedInteger('creator_id');
            $table->foreign('creator_id')->references('id')->on('users');
            $table->boolean('hide')->default(0);
            $table->timestamps();
        });
    }
new column added in this this migration

 public function up()
        {
            Schema::table('posts', function (Blueprint $table) {
                $table->integer('privacy')->after('creator_id');
            });
        }
when i want to add privacy to any post it gives me an error

"message": "SQLSTATE[23000]: Integrity constraint violation: 1451 Cannot delete or update a parent row: a foreign key constraint fails (webdb.comments, CONSTRAINT comments_post_id_foreign FOREIGN KEY (post_id) REFERENCES posts (id)) (SQL: update posts set creator_id = 17, id = 48)",

 11.10.2018 13:28
0
0
5 106
4
Данный вопрос помечен как решенный
 Ответы 4
 Ответ принят как подходящий
Вы должны использовать условие where в сообщении о конфиденциальности обновления

DB::table('posts')->where(['creator_id' => $userId, 'id' => $postid])->update(['privacy' => $privacy])
 11.10.2018 13:32
Если у вас есть модель Post, вы можете:

Post::where(['creator_id' => $userId, 'id' => $postid])->update(['privacy' => $privacy]);
Чтобы предотвратить любую ошибку внешнего ключа, вы должны использовать запрос на подтверждение, чтобы проверить, предоставлены ли user_id и post_idсуществуют.

 11.10.2018 13:40
public function changePostsPrivacy(Request $request){
            $userId = $request->user()->id;
            $postid = $request->get('id');
            $privacy = $request->get('privacy');
            $user = User::where(['id' => $userId, 'hide' => 0])->first();
            if ($user && $postid && in_array($privacy, [1,0])){
                DB::table('posts')->update([
                    'privacy' => $privacy,
                ]);
            }
Идентификатор создателя и идентификатор не требуется обновлять.

 11.10.2018 13:56
Вы также можете попробовать это.

$post = Post::where(['creator_id' => $userId, 'id' => $postid])->first();
$post->privacy = $privacy;
$post->save();
 15.10.2018 15:03
Другие вопросы по теме
Преобразовать переменную имени входа с помощью функции обрезки для поиска в базе данных
Как перенаправить на маршрут Laravel при вызове из JS Ajax
Laravel v5.7 принадлежит к не возвращает модель после установки Laravel Passport v7
Вызов неопределенного метода stdClass :: links ()
Пустая страница в обновлении Laravel Eloquent
Неопределенная переменная laravel controller / route
Вложенная проверка маршрута REST API
LARAVEL: отправка почты, хранящейся в БД, с использованием редактора WYSIWYG
Мое избранное изображение не отображается, когда я пытаюсь установить его в качестве фонового изображения
Перенаправление с сообщением об ошибке не работает в Laravel 5.6
Похожие вопросы
Как мне вставить пустой DateTime в базу данных MS Access?
Ошибки нет, но данные не вставлены
Эйфель: убегающие персонажи
Как мы можем смоделировать иерархию сотрудников (инженер-программист, старший инженер-программист, менеджер и т. д.) Вместе с их обязанностями?
В соединении отказано для PostgreSQL, невозможно перезапустить из активного состояния (завершено)
Как вывести только что «искомые» данные на странице в таблице?
Присоединяйтесь к Value MySQL
Mysql добавить существующий столбец в другую таблицу
Получение информации из базы данных для отображения в проектах
Выполнение SQL VERTICA составляет 30/60/90 дней

JAVA
Сообщение - "не удалось прочитать приветственное значение - вам необходимо заполнить таблицу: hibernate_sequence"
Моя проблема заключается в следующем: когда я создаю запрос POST в приложении «Почтальон». Это то, что я пытаюсь отправить

  {"name": "John Doe", "email":"jdoe@test.com", "city": "London"}
Я получаю следующую ошибку:

{
"timestamp": "2018-11-19T20:16:00.486+0000",
"status": 500,
"error": "Internal Server Error",
"message": "could not read a hi value - you need to populate the table: hibernate_sequence; nested exception is org.hibernate.id.IdentifierGenerationException: could not read a hi value - you need to populate the table: hibernate_sequence",
"path": "/api/ver01/product"
}
Я искал ответ в окне поиска, но ни один из них мне не помог. Поэтому я думаю, что проблема в sql-коде, но я не уверен. Весь проект написан в intelliJ IDE.

Это мой класс продукта.

package com.hubertkulas.webstore.store.archetype;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.math.BigDecimal;
import java.sql.Date;

@Entity
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Product {

@Id
@GeneratedValue(strategy = GenerationType.AUTO)
private Long id;

private boolean contact;
private String email;
private String category;
private String name;
private String city;

private String model;
private BigDecimal price;

@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "MM-dd-yyyy")
private Date date;



public String getName() {
    return name;
}

public void setName(String name) {
    this.name = name;
}

public String getEmail() {
    return email;
}

public void setEmail(String email) {
    this.email = email;
}

public String getCity() {
    return city;
}

public void setCity(String city) {
    this.city = city;
}

public String getCategory() {
    return category;
}

public void setCategory(String category) {
    this.category = category;
}

public String getModel() {
    return model;
}

public void setModel(String model) {
    this.model = model;
}

public BigDecimal getPrice() {
    return price;
}

public void setPrice(BigDecimal price) {
    this.price = price;
}

public Date getDate() {
    return date;
}

public void setDate(Date date) {
    this.date = date;
}

public boolean isContact() {
    return contact;
}

public void setContact(boolean contact) {
    this.contact = contact;
}

public Long getId() {
    return id;
}

// setter for id because Jackson will use it
public void setId(Long id) {
    this.id = id;
}
}
Это мой класс ProductController

package com.hubertkulas.webstore.store.controllers;
import com.hubertkulas.webstore.store.archetype.Product;
import com.hubertkulas.webstore.store.jparepository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/ver01/product")
public class ProductController {

//injecting ProductRepository when ProductController is called
@Autowired
private ProductRepository productRepository;

@GetMapping
public List<Product> list() {
    //finds all of the records and returns it
   return productRepository.findAll();
}

@PostMapping
@ResponseStatus(HttpStatus.OK)
public void create(@RequestBody Product product){
    productRepository.save(product);
}



@GetMapping("/{id}")
public Product get(@PathVariable("id") long id){
    // return specific record with added id
    return productRepository.getOne(id);
}

}
Это мой интерфейс ProductRepository

package com.hubertkulas.webstore.store.jparepository;

import com.hubertkulas.webstore.store.archetype.Product;
import org.springframework.data.jpa.repository.JpaRepository;

//Using Jpa for CRUD operations
public interface ProductRepository extends JpaRepository<Product, Long> {
}
А это моя база данных

CREATE TABLE
product
(
    id BIGINT NOT NULL,
    contact BOOLEAN NOT NULL,
    email VARCHAR,
    category VARCHAR,
    name VARCHAR,
    city VARCHAR,
    date DATETIME,
    price NUMERIC,
    model VARCHAR,
    PRIMARY KEY (id)
);

CREATE TABLE
hibernate_sequence
(
    next_val BIGINT
);

INSERT INTO product (id, contact, email, category, name, city, date, price)
VALUES (1, 1, 'abraham@site.com', 'Electronics', 'Abraham Westbrom', 'New 
York', 4419619200000, '3250');
INSERT INTO product (id, contact, email, category, name, city, date, price)
VALUES (2, 1, 'udon@site.com', 'Electronics', 'Udon Hon', 'London', 
4419619200000, '799');
INSERT INTO product (id, contact, email, category, name, city, date, price)
VALUES (3, 0, 'mateuszsinus@site.com', 'Software', 'Mateusz Sinus', 
'Warsaw', 4419619200000, '10000');

INSERT INTO hibernate_sequence (next_val) VALUES (4);
 19.11.2018 21:28
9
1
13 778
4
Данный вопрос помечен как решенный
 Ответы 4
 Ответ принят как подходящий
Ваша таблица hibernate_sequence неверна.

См. 2.6.10. Использование таблицы идентификаторов:

create table hibernate_sequences(
    sequence_name VARCHAR NOT NULL,
    next_val INTEGER NOT NULL
)
 19.11.2018 21:40
Если вы создаете схему с использованием весенней загрузки для локальной базы данных, а jpa настроен на автоматическое создание и удаление, в идеале вы не столкнетесь с такой ситуацией.

spring.jpa.hibernate.ddl-auto=create-drop
Но при постановке / производстве вы хотите обрабатывать определение схемы (DDL) отдельно, поэтому hibernate_sequence должен иметь начальное значение, а для запуска должно быть достаточно 0. Он сообщает программной библиотеке, с какого номера запускать идентификатор автогенерации.

spring.jpa.hibernate.ddl-auto=validate

INSERT INTO <schema_name>.hibernate_sequence (next_val) VALUES (0);
Вышеупомянутый работает для MYSQL

 23.12.2019 11:40
Можете добавить

spring:
jpa:hibernate:ddl-auto: create-drop 
в вашем файле application.yml или application.properties Делайте это только тогда, когда у вас есть усеченная таблица, иначе вы можете добавить INSERT INTO <schema_name>.hibernate_sequence (next_val) VALUES (1);

 09.04.2020 15:07
отбросьте таблицу и создайте заново с next_val в качестве первичного ключа

 16.11.2021 08:00
Другие вопросы по теме
Как написать SQL-запрос для удаления заданного набора специальных символов из выбранного столбца?
Группировка столбцов из вложенного выбора
Форматирование конкретной даты в требуемый формат в блокноте ++
ПРОМЕЖУТОЧНЫЕ ИТОГИ ГРУППЫ BY В ORACLE
SQL Group даты по дням недели и подсчет
Не удается вставить данные, ошибка внешнего ключа на postgresql
Доступ к двум таблицам одновременно в .net
Ускорьте запрос activerecord для уникального подсчета
Использование Dlookup внутри SQL в VBA для Microsoft Access вызывает неизвестную ошибку
Postgresql, почему INNER JOIN намного медленнее, чем WHERE
Похожие вопросы
Не могу найти решение для java.lang.NullPointerException
Как использовать нестатические данные из другого класса
Вернуть логическое значение
Нахождение смежных элементов в 2-м массиве и их подсчет
Весенняя загрузка, jdbcTemplate, Java
Добавление новых объектов в ArrayList с помощью конструктора
Как создать метод setTime на java в базовом коде часов
Swagger-ui с безопасностью Spring
Сохранение необработанных данных InputStream Java как PCAP для просмотра в Wireshark
Как написать регулярное выражение для соответствия шаблону в Java?

JSON
Laravel - как показать ответ JSON после изменения метода HTTP в Postman?
У меня есть API, и есть метод входа в систему с типом запроса POST, поэтому, когда я нажимаю путь API в почтальоне с типом запроса POST, он работает нормально, но когда я меняю тип запроса на GET, он показывает ошибку, я хочу показать здесь ответ JSON, как это сделать

Это метод POST

Laravel - как показать ответ JSON после изменения метода HTTP в Postman?

Это с методом GET

Laravel - как показать ответ JSON после изменения метода HTTP в Postman?

 20.11.2018 13:46
0
9
1 242
4
 Ответы 4
Просто добавьте "_method" в тело сообщения POST.

Параметр _method может принимать значения [GET, POST, PUT, DELETE].

Пример :

_method: GET
name: xxxx
email: xxxx@xxx.com
password: 123xxx
 20.11.2018 13:54
Я думаю, что ваш маршрут "api / auth / singup" принимает только запрос POST, вам нужно посмотреть файл маршрута и разрешить метод GET.

 20.11.2018 13:55
Вы можете обработать исключение в App\Exceptions\Handler, как показано ниже:

// if (request()->expectsJson())
// Or if you want to handle just for `api` routs:
if (request()->is('api/*')) {
    if ($exception instanceof MethodNotAllowedExceptionFormatter) {
        return response()->json(['message' => 'your message here'], 405);
    }
}
Но если вы хотите разрешить оба запроса GET & POST через свой маршрут, вы можете сделать это в своем файле web.php:

Route::match(['GET', 'POST'], 'login', 'YourController@method');
А затем в вашем контроллере сделайте это:

function yourMethod () {
    if (request()->method() == \Illuminate\Http\Request::METHOD_GET) {
        // do this;
    }
    else if (request()->method() == \Illuminate\Http\Request::METHOD_POST) {
        // do that;
    }
}
 20.11.2018 14:06
В вашем файле api.php добавьте общий маршрут, чтобы перехватить все несовпадающие маршруты и оттуда отправить вашу ошибку.

Route::get('/{any}', function () {
    $data = [
        'error' => [
            'message' => 'Unkown endpoint',
            'statusCode' => 404
        ]
    ];
    return Response::json($data, 404);
})->where('any', '.*');
 20.11.2018 14:12
Другие вопросы по теме
Laravel5: неопределенная переменная контроллера и модели: название
В laravel 5.4. обновление композитора FatalThrowableError Class 'Unisharp \ Laravelfilemanager \ LaravelFilemanagerServiceProvider' не найден
Тест Laravel не работает при запуске всего набора тестов, ReflectionException: конфигурация класса не существует
Использование ключа предварительного утверждения для транзакции PayPal без аутентификации пользователя
Создать диаграмму Морриса в Laravel
Сортировать по hasMany отношений
Laravel Eloquent - Почему take (n) работает, а limit (n) - нет?
Соединение Redis [кеш] не настроено, ошибка с laravel
Показать кнопку за 10 минут до начала сеанса
Laravel composer.json полностью настроен
Похожие вопросы
My Service Worker не загружает страницу в автономном режиме, и манифест не извлекается
Как получить данные axios из обещания
Разбор Json в Node.js, который содержит числа в качестве ключевого параметра
Сортировка индекса из вложенного JSON с Javascript
Как получить данные из json для создания зависимого поля выбора и отображения результатов при нажатии
Локальный файл из репозитория не сохраняется после редактирования (groovy / jenkins)
Robot Framework - TypeError: строковые индексы должны быть целыми числами при разборе Json
ORACLE APEX Как загрузить файл JSON со стороны клиента?
Найти владельца инстанса EC2 с помощью Athena и CloudTrail
Добавление поддержки обратной совместимости для старой структуры JSON

WINDOWS 7
Черное окно при запуске Postman в Windows 7
При запуске Postman в Windows 7

Это экран, который я вижу:

Черное окно при запуске Postman в Windows 7

Как я могу отладить, почему это происходит? И что можно исправить?

 20.11.2018 21:24
0
3
2 058
4
 Ответы 4
Это последняя версия Postman? Вы можете попробовать: https://www.getpostman.com/docs/v6/postman/launching_postman/installation_and_updates#troubleshooting-postman-updates

 21.11.2018 19:01
У меня такая же проблема. Также отставало переключение между запросами в почтальоне. Я решил это, выйдя из системы и снова войдя в систему (версия 6.5.3 / windows 10). Примерно через минуту после того, как я снова вошел в систему, он снова заработал нормально.

 29.11.2018 11:13
У меня была такая же проблема, но я ее решил:

Перейти к Панель управления -> Система -> Свойства системы -> Дополнительно -> Переменные среды

Нажмите Новый

Введите переменную ( POSTMAN_DISABLE_GPU ) и значение (true).

Нажмите В ПОРЯДКЕ

https://thewikihow.com/video_xpakS_yy1LE

 16.04.2019 10:41
Очистите папку indexDb и файл резервной копии в этих папках: C: \ Users \ AppData \ Local \ Postman C: \ Users \ AppData \ Roaming \ Почтальон

Со временем они становятся слишком большими, и Postman терпит крах.

 30.12.2019 10:45
Другие вопросы по теме
Электронный браузер блокирует окно iframe x-origin
Тест установки для приложения Vue.js-electronic, использующего Vuex
Nodejs / electronic Отменить тайм-аут браузера Chrome
Как сканировать исправления с помощью узла и электрона?
Как проверить производительность приложения Electron?
Как мне обрабатывать пользовательские плагины в Electron?
NG-Bootstrap - Раскрывающийся список - Выберите значение
Проблема с установкой электрона в Linux / macOS
Как получить путь к файлу вложения (NSItemProvider) в Swift 'Share App Extension'?
Открытие нового окна - Электрон
Похожие вопросы
LocalReport в WinForms Font Squashed (сжатый)
Прокси-сервер Cloud sql как услуга в Windows 7
Драйверы, помеченные как неподписанные в Windows 7
Sbt неразрешенная зависимость от Windows 7
Сертификат не найден, если приложение WCF размещено как служба Windows в Windows 7
Как заставить Wildfly 14 не перезаписывать файл standalone.xml с символической ссылкой?
Сброс дисплея Windows 7 без выхода из системы
Что заставляет WTContextManager () this: ... выводиться в консоль?
Какие клавиши в представлении консоли Eclipse перемещают фокус на строку кнопок?
Ошибка 2 при чтении SOFTWARE \ Microsoft \ Cryptography \ MachineGUID в Win 8, 8.1 и 7

JAVASCRIPT
Прокрутите вложенный объект JSON, чтобы найти идентификатор значения
    "results": {
    "data": {
        "facets": {
            "60749428": {
                "id": 60749428,
                "name": "KC Content Content Kind"
            },
            "60750276": {
                "id": 60750276,
                "name": "KC Content Product Version"
            },
            "69107204": {
                "id": 69107204,
                "name": "KC Video Audience"
            },
            "69127027": {
                "id": 69127027,
                "name": "KC Content Kind ID"
            }
        }
    }
}
Я хочу пройти через этот вложенный объект json, перейдя к объекту фасета и сказать, если атрибут name равен «KC Content Kind ID», а затем вернуть идентификатор для этого соответствующего атрибута имени.

Итак, после получения моего вызова api с почтальоном я пытался получить соответствующий идентификатор «KC Content Kind ID» в своей функции успеха таким образом, но, поскольку это не массив, мне было интересно, будет ли каждый из них работать в jquery.

    //Get Available Kinds
function getAvailableKinds() {
    $.ajax({
        url: csexe + "/api/v2/facets/" +getLocationId(),
        dataType: "json",
        type: "GET",
        beforeSend: function(xhr) {
            xhr.setRequestHeader ("OTCSticket", getAuthToken());
        },
        success: function(response) {
            var obj = response.results.data.facets;
            $.each(obj, function(item, value){
                 if ( value == 'KC Content Kind ID') {
                     var idRequired = obj.id;
                 }
            });
        },
        error: function(jqXHR, textStatus, errorThrown){
            alert("An error occurred... Look at the console");
            $("body").html('<p>status code: '+jqXHR.status+'</p><p>Error Thrown: ' + errorThrown + '</p><p>Response Text:</p><div>'+jqXHR.responseText + '</div>');
        }
    });
 29.11.2018 17:12
2
2
3 686
4
 Ответы 4
Просто проанализируйте строку и выполните простой цикл.

var jsonObj = (JSON.parse("your json here")).data.facets;

for (i = 0; i<jsonObj.length;i++)
{
    if (jsonObj[i].name == "KC Content Kind ID")
        return jsobObj[i].id;
}
 29.11.2018 17:17
Я думаю, что самый простой способ добиться этого - использовать функцию Object.values вместе с Array.prototype.filter. Затем вы можете взять первый элемент из массива, возвращаемого методом filter (поскольку каждый идентификатор должен быть уникальным), и отобразить его идентификатор.

const o = { "results": { "data": { "facets": { "60749428": { "id": 60749428, "name": "KC Content Content Kind" }, "60750276": { "id": 60750276, "name": "KC Content Product Version" }, "69107204": { "id": 69107204, "name": "KC Video Audience" }, "69127027": { "id": 69127027, "name": "KC Content Kind ID"}}}}};

const [a] = Object.values(o.results.data.facets).filter(f => f.name == "KC Content Kind ID");

console.info(a.id);
 29.11.2018 17:18
вы можете использовать Object.keys и find

const obj = {"results": {"data": {"facets": {"60749428": {"id": 60749428,"name": "KC Content Content Kind"},"60750276": {"id": 60750276,"name": "KC Content Product Version"},"69107204": {"id": 69107204,"name": "KC Video Audience"},"69127027": {"id": 69127027,"name": "KC Content Kind ID"}}}}};
    
const facets = obj.results.data.facets;
const result = Object.keys(facets).find(v => facets[v].name === 'KC Content Kind ID');
//your object keys are equal to id, you can just return key
console.info(result);

// if your object keys can be different from id you can do this
console.info(facets[result].id);
 29.11.2018 17:21
var obj = {
  "results": {
    "data": {
      "facets": {
        "60749428": {
          "id": 60749428,
          "name": "KC Content Content Kind"
        },
        "60750276": {
          "id": 60750276,
          "name": "KC Content Product Version"
        },
        "69107204": {
          "id": 69107204,
          "name": "KC Video Audience"
        },
        "69127027": {
          "id": 69127027,
          "name": "KC Content Kind ID"
        }
      }
    }
  }
};
let facets = obj.results.data.facets;
let id; 
for(let key in facets){
  if (facets[key].name == 'KC Content Kind ID'){
    id = facets[key].id;
    break;
  }
}
console.info(id);
 29.11.2018 17:30
Другие вопросы по теме
{{$ timestamp}} возвращает время 1970 года, а не текущее время
GET Запрос на URL-адрес (для принятия условий) возвращает ту же страницу, что и тело ответа, но работает в POSTMAN
Как я могу записать результат request.POST в Python?
415-неподдерживаемый тип носителя
Ошибка при попытке получить версию newman в windows 7
Как преобразовать запрос POST из POSTMAN в .exe или .jar?
В почтальоне, как мне взять тело ответа и использовать его в новом запросе в тестах
Загрузить файл test с Postman
Ошибка REST - запрос содержит тело объекта, но не заголовок Content-Type. Введенный тип мультимедиа application / octet-stream не поддерживается для этого ресурса
Как проверить данные Json почтальоном?
Похожие вопросы
Проверить, содержит ли часть объекта другой объект целиком
Хотите удалить часть строки с помощью регулярного выражения
Краткий способ получить ключи объекта, включая ключи из цепочки прототипов
Javascript перемещает мою функцию Node6 Firebase в шаблон async / await Node8
Как загрузить html-страницы со слайдами
Ошибка выполнения в ionic: отсутствует таблица действий
Найти и отключить <a href>
Как сделать эквивалент Flask Safe в вызове ajax
Как получить SelectedIndex Telerik / Kendo DropDownListFor?
Как объединить объекты в массив по атрибуту даты

ANDROID
Twitter API Postman: код 32: не удалось аутентифицировать вас
Я хочу протестировать Twitter api для приложения в будущем. Я пытался проверить это с помощью Postman, но все время получаю эту ошибку.

"code": 32, "message": "Could not authenticate you."

Я создал новое приложение из своей учетной записи разработчика и поместил все сгенерированные токены в почтальон следующим образом:

Twitter API Postman: код 32: не удалось аутентифицировать вас

Мои параметры такие же, как на этом скриншоте: (с правильными токенами)

Twitter API Postman: код 32: не удалось аутентифицировать вас

Мне нужно проверить что-то важное? Надеюсь, кто-то уже сталкивался с этой проблемой или просто может мне с этим помочь.

 17.12.2018 16:53
17
0
21 062
4
Данный вопрос помечен как решенный
 Ответы 4
 Ответ принят как подходящий
На вкладке «Авторизация» в Postman выберите «Заголовки запроса» в раскрывающемся списке «Добавить данные авторизации в:».

Полезная ссылка: https://developer.twitter.com/en/docs/basics/authentication/guides/authorizing-a-request.html

 17.12.2018 19:43
Ошибка 32 «Не удалось аутентифицировать вас» также может возникнуть, когда содержимое твита запускает фильтр цензуры Twitter.

 03.05.2019 21:02
Для тех, у кого все еще есть проблемы ...

Моя проблема заключалась в том, что заголовок Content-Type: application/x-www-form-urlencoded не был установлен для моего запроса POST при тестировании с помощью Postman. Как только я это добавил, все было хорошо.

 03.05.2020 23:57
Еще одна вещь, которую следует проверить, - это символ ! в публикуемом статусе. Убедитесь, что он правильно закодирован.

Подробнее см. Здесь: https://groups.google.com/d/msg/google-appengine/6ILDt39anbs/gEwMVBNJLkYJ

 13.08.2020 14:56
Другие вопросы по теме
Изображение в ArrayBuffer в Js
Получение данных с помощью реакции и сопоставления
API-интерфейс Blogger всегда возвращает ошибку 401
Запрос на выборку с использованием Django rest framework не возвращает данные
Что, если я создам простой контроллер в Groovy и Grails и буду использовать его в качестве контроллера Rest API, кроме расширения RestFulController?
Аутентификация Trello API не дает действительный токен пользователя, если я отключусь
Android kotlin / JAVA - jloop AsyncHttpClient проверяет, существует ли extern файл
Безопасность для API с использованием Sitecore JSS
Как работают составные данные формы?
Почему я не могу получить форму тела Angular
Похожие вопросы
Запуск службы, когда мобильный телефон подключен к зарядному устройству (ACTION_POWER_CONNECTED) в Android Oreo
Получить полный HTML-текст div
Как обрабатывать MotionEvent.ACTION_MOVE в нескольких CustomViews?
Как перемещаться по фрагменту, не добавляя его в стек с помощью NavController?
Как изменить видимость пунктов меню панели навигации из WebInternface
Отчет о доставке сообщения FCM не получен
RecyclerView: намерение позиции элемента
BackupManager requestRestore () устарел, какая альтернатива?
Ошибка Выполнение не выполнено для задачи ': app: kaptDemoProductionDebugKotlin'.?
Запуск службы и ссылки на объекты

C#
Как передать объект JSON в качестве параметра из Postman в веб-API ASP.NET
Я хочу передать объект json в качестве параметра строки запроса (не из тела) в URL-адрес веб-API ASP.NET Core от почтальона. Пожалуйста, дайте мне знать, как пройти? под образцом структуры объекта JSOB:

здесь 'names - это строковый массив

"students":[
      {
         "id":"1",
         "names":["john", "james"]
      },
      {
         "id":"2",
         "names":["peter", "harry"]
     }
]
 19.12.2018 01:19
3
1
15 077
4
 Ответы 4
Попробуй это:

?students[0][id]=1&students[0][names][0]=john&students[0][names][1]=james&students[1][id]=2&students[1][names][0]=peter&students[1][names][1]=harry
 19.12.2018 01:39
Я предполагаю, что вы используете это в GET (иначе нет смысла это делать). Я также предполагаю, что вы хотите, чтобы параметр students URL-адреса был установлен для этого массива.

Вы должны URL-адрес закодировать всю строку. Для этого вы можете использовать онлайн-кодировщик, например https://www.urlencoder.org. Для этого потребуется:

[{"id":"1","names":["john","james"]},{"id":"2","names":["peter","harry"]}]
И превратите это в это:

%5B%7B%22id%22%3A%221%22%2C%22names%22%3A%5B%22john%22%2C%22james%22%5D%7D%2C%7B%22id%22%3A%222%22%2C%22names%22%3A%5B%22peter%22%2C%22harry%22%5D%7D%5D
Вот что вы должны указать в своем URL:

http://example.com?students=%5B%7B%22id%22%3A%221%22%2C%22names%22%3A%5B%22john%22%2C%22james%22%5D%7D%2C%7B%22id%22%3A%222%22%2C%22names%22%3A%5B%22peter%22%2C%22harry%22%5D%7D%5D
Но я надеюсь, что это показывает, почему никто не делает этого :) Это грязно и может очень быстро затянуться.

Ответ @RomanMarusyk немного более цивилизованный, но подпись вашего контроллера должна соответствовать ему: вы бы приняли List<Student> (или как там называется ваш студенческий класс).

В идеале такие объекты JSON должны быть в теле запроса, и вы должны использовать метод HTTP, который принимает тело (например, POST или PUT).

 19.12.2018 01:40
Это демо, которое я сделал, вы можете сослаться на

В Postman не забудьте установить «Тип содержимого» на «приложение / json» в Заголовки, иначе вы можете получить ошибку - 415 Unsupported MediaType.

https://localhost:44388/api/student/?students[0].id=1&students[0].name[0]=john&students[0].name[1]=james&students[1].id=2&students[1].name[0]=peter&students[1].name[1]=harry
Студенческая модель

 public class Student
{
    public int Id { get; set; }
    public string[] Name { get; set; }
}
В Контроллере не забудьте добавить [FromQuery] в параметр действия.

[Route("api/[controller]")]
[ApiController]
public class StudentController : ControllerBase
{
    [HttpPost]
    public void PostStudent([FromQuery]List<Student> students)
    {
    }
}
Скриншот параметра студентов



Как сказал Габриэль Люси, объект Json лучше всего передавать в теле запроса.

 19.12.2018 09:35
Просто в дополнение к ответу Сюэли Чен я тестировал его в .net core2.2

Студенческая модель

 public class Student
{
    public int Id { get; set; }
    public string[] Name { get; set; }
}

В Postman установите для Content-Type значение application / json в заголовках, а также установите [Produces("Application/json")] на контроллере Side
. В контроллере, если вы не используете [FromQuery] в параметре действия, он также будет работать, и я думаю, что это просто Extra type Casting, и я также буду использовать ресурсы для преобразования. Если мы не используем его, он также будет работать, и я изменю параметр, почему вы получаете список студентов в параметре, он также будет словом без него.

[Route("api/[controller]")]
[ApiController]
public class StudentController : ControllerBase
{
    [Produces("application/json")]
    [HttpPost]
    public void PostStudent(Student students)
    {
          // you can get data here from students objects
    }
}
 06.03.2019 21:25
Другие вопросы по теме
Как лучше всего преобразовать маринованный словарь Python с помощью библиотеки полок Python (bsddb) в файл JSON, который имеет значения кортежа для ключей словаря
React TypeError: циклическое значение объекта вложено
Десериализовать строку JSON в массив или список
Ansible извлечение var из JSON
Создание файла конфигурации для сопоставления модели в формате json с csv
Многоязычный HTML с JQuery и вложенным JSON
Конкретный маршрут страницы в ReactJS через JSON Id
Как разобрать предложение json с помощью jquery?
Обращение к System.OutOfMemoryException в стеке Owin
Как вернуть строку из функции fetch-node
Похожие вопросы
Отчет Crystal выдает ошибку «система не может найти указанный путь» при настройке параметров
Несколько конфигураций вызова NSubstitute для метода, обращающегося к различным свойствам параметра ссылочного типа (чтобы избежать исключения NullReferenceException)
MySQL с ядром EntityFramework - составной внешний ключ
Добавление данных в кросс-таблицу, созданную EF с помощью AutoMapper
Как я могу заменить несколько букв одновременно в шифре Цезаря?
FileSystemWacher блокирует некоторые файлы
Task.Run иногда возвращается дважды
Непрерывный запуск консольного приложения в фоновом режиме до выключения системы
Для входа в систему ..NET core identity требуется два щелчка мышью
Почему C# не удаляет слушателей из делегата действия?

C#
Почтальон не может установить значения параметра словаря для веб-API C#
Ниже приведен код, написанный для проверки чтения словарного ключа и значений из Postman.

Метод веб-API C#:

[OperationContract]
[WebInvoke(Method = "POST", UriTemplate = "Service/testdictionary",
BodyStyle = WebMessageBodyStyle.WrappedRequest)]
[ScriptMethod(ResponseFormat = ResponseFormat.Json)]
public void testdictionary(Dictionary<string,object> data)
{
if (data != null)
{
string str1 = data["a1"].ToString();
string str2 = data["a2"].ToString();
string str3 = data["a3"].ToString();
}
}
Тело ввода почтальона: (raw и JSON (application / json))

{
"data": {
"a1": "b1",
"a2": "b2",
"a3": "b3"
}
}
Как я вызываю метод из Postman:

Почтальон не может установить значения параметра словаря для веб-API C#

В чем проблема: Всякий раз, когда я пытаюсь назначить данные объекта словаря от почтальона, в коде C# он назначается как пустой словарь.

Что требуется: Я хочу прочитать элемент словаря от почтальона в свой код API.

 21.12.2018 16:07
0
8
2 133
4
 Ответы 4
Ваши элементы не являются data["a1"], data["a2"] и т. д. У вас есть словарь ОДНОГО элемента, ключ которого - "данные", так что это data["data"]. Ваше значение для этого элемента - объект со свойствами a1, a2 и a3. Не уверен, что это работает в вашем приложении WCF, но в веб-API это JToken из библиотеки Newtonsoft Json.Net.

Если вам нужен Dictionary с ключами a1, a2, a3, вам необходимо настроить тело JSON, чтобы исключить уровень «данных»:

{
"a1": "b1",
"a2": "b2",
"a3": "b3"
}
UPDATE

Если по какой-то причине вы не можете изменить структуру JSON, вы можете создать класс со свойством data типа Dictionary<string,object>:

public class TheData
{
    public Dictionary<string, object> data {get;set;}
}
Тогда ваш метод api примет тип TheData вместо Dictionary<string,object>:

public void testdictionary(TheData _data)
{
    ...
и ваш код получит доступ к словарю, например:

string d1 = _data.data["a1"].ToString(); // d1 == "b1" 
 22.12.2018 15:34
Попробуй это.

Я пытался! работает нормально.

using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace StackOverFlowProblemWebApi.Controllers
{
    public class TestController : ApiController
    {
        [HttpPost]
        public IHttpActionResult TestDictionary([FromBody]Dictionary<string,object> data)
        {
            if (data != null)
            {
                string string1 = data["a1"].ToString();
                string string2 = data["a2"].ToString();
                string string3 = data["a3"].ToString();

                return Ok("Data Recieved."); // When the data is successfully recieved.
            }
            else
                return BadRequest("Data is not received.");
        }
    }
}


Смотреть! вы это видели: данные получены. ...

 22.12.2018 16:41
Удалось решить мою проблему как обходной путь, могу сказать аналогичный словарь.

Какое решение: Используйте объект класса вместо словаря.

Вот мое решение:

Я добавляю класс, структуру похожую на словарь, который я хотел. (Единственное, что мне нужно закодировать дополнительную строку кода, чтобы объявить класс с ключами, чего я раньше избегал)

Вот мой код из веб-api:

    public class mydictionary
    {
        public string a1 { get; set; }
        public string a2 { get; set; }
        public string a3 { get; set; }
    }

    [OperationContract]
    [WebInvoke(Method = "POST", UriTemplate = "Service/testdictionary",
    BodyStyle = WebMessageBodyStyle.WrappedRequest)]
    [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
    public string testdictionary(mydictionary data)
    {
        if (data != null)
        {
            string str1 = data.a1.ToString();
            string str2 = data.a2.ToString();
            string str3 = data.a3.ToString();
            return "success".ToString();
        }
       else
        {
            return "unsuccess".ToString();
        }

    }
Вот мой ввод и вывод Postman: Почтальон снимок экрана

 23.12.2018 18:54
В моем случае это сработало в таком формате ActionParam = [{Ключ: 'orderId', значение: '200'}]; ActionParam - это свойство словаря в модели, которое также протестировано в WCF.

 20.07.2019 20:34
Другие вопросы по теме
Скрипт предварительного запроса загрузки файла с методом 2-кратного попадания multipart / form-data в Postman
Как передать объект в заголовке с помощью запроса post man post?
Java - как получить заголовок http в реализации интерфейса?
Запрос api получает правильный ответ через почтальона, но запрос curl на стороне сервера получает нулевой ответ
Загруженный файл .txt через POSTMAN поврежден (добавлен Content-Disposition, Content-type) JAX-RS
Тело запроса Postman [POST] обрабатывается неправильно
Запрос python - загрузка файла
Не получает правильный ответ в формате json от почтальона
Newman cli версии 4.2.3 и 4.2.0 дает неправильный результат, но почтальон возвращает правильный результат
Bing Local Business Search API | Отправка запроса с почтальоном
Похожие вопросы
C# выставлять события со свойствами
Нулевые поля при частичном обновлении мутации в GraphQL .NET
Как я могу получить доступ к данным из моей функции для использования в другой?
Совместное использование экземпляра класса со связанными классами
XSLT: удалить узлы с пустым конкретным внуком
Заставить свойство зависимостей всегда вызывать PropretyChangedCallback
Автозаполнение VerticalAlignment
Замена только одного символа "\ n" в вхождении строки
Ядро Entity Framework и доступ к MS
Тест функций Azure с конвейерами Azure DevOps

LARAVEL
Получение ошибки при загрузке файла с помощью почтальона
Я пытаюсь загрузить файл изображения. Когда я вызываю свой API для загрузки файла с помощью почтальона, получаю ошибку типа Fatal error: Call to a member function file() on array.

Я не смог отправить этот файл на свой контроллер Laravel. Как разместить файлы в Laravel. Кто-нибудь может помочь мне решить эту проблему?

Вот моя функция контроллера,

public function edit(Request $request){

    $request = $request->input();
    if (empty($request)) {
        $request = json_decode(file_get_contents('php://input'),true);
    }

    $to_return = array();

    $file = $request->file('files'); 
}
в этой строке $file = $request->file('files'); получает фатальную ошибку.

 07.01.2019 10:43
0
1
236
4
 Ответы 4
установить метод как сообщение .. и в теле ... изменить вариант с form data на w-xxx-formurlencod ... и попробовать ..

 07.01.2019 10:47
Если вы хотите загружать файлы с помощью Postman и Laravel, просто удалите настройку заголовка Content-Type в Postman.

 07.01.2019 11:02
установить метод как сообщение

и в теле ... выберите радио, которое показывает закодированный URL

 07.01.2019 11:22
увидеть изображение ... нажмите на текст, установите его как летать

 07.01.2019 11:32
Другие вопросы по теме
Проверка прогресса загрузки файла, если файл отправлен как FormData в Angular 7?
Загрузка нескольких файлов не работает multipart / form-data image
Невозможно загрузить изображение Vue
Команда списка FTP выдает исключение MalformedServerReplyException: усеченный ответ сервера
Как загрузить файл в любую директорию с помощью PHP
Принять двоичный файл в теле запроса на сервере node.js
Нужна помощь в загрузке нескольких больших файлов (40 МБ - 2 ГБ) с использованием массива foreach
Мне нужен сервер для загрузки и скачивания данных
Как получить актуальный файл после загрузки в Laravel?
Предупреждение: file_get_contents (): имя файла не может быть пустым
Похожие вопросы
Как запустить предложение where для числовых строковых столбцов в Laravel?
Невозможно отправить сообщение без адреса отправителя в laravel 5.4
Crudbooster, вставьте данные с моим запросом в функцию before_add admincontroller
Допустимый объем памяти 134217728 байт исчерпан (попытка выделить 31989760 байт) В цикле do ... while
Вставьте URL-адрес / путь в маркер карт Google, Laravel
Можно ли создать отдельные страницы ошибок для бэкэнда и внешнего интерфейса в laravel?
Как я могу найти один идентификатор, если я сохраню его в массиве в одном поле в laravel?
Как создать администратора без создания таблицы администратора в базе данных и с одним маршрутом входа и контроллером на одной странице?
Laravel 5.5 красноречивый построитель запросов создает неправильный запрос при сохранении URL-адреса со строкой запроса
PHPSpreadsheet не может установить поле рабочего листа

JAVASCRIPT
Как вставить массив в ajax?
У меня модальный, внутри модального есть форма, когда я нажимаю кнопку отправки, она делает это.

jquery-код:

  $('#add-new-content-form').on('submit', e => {
    e.preventDefault();
    
    //I want to add this block dates to the data
    let blockdates = $("#block-dates").val();

    let title = $("#card-title").val();
    let catalogId = $("#catalog").val();
    let categoryId = $("#category").val();
    let subcategoryId = $('#subcategory').val();
    let why = $("#why").val();
    let description = $('#card-description').val();
    let cancellationPolicy = $('#cancellation-policy').val();
    let displayPrice = $('#display-price').val();
    let displayDiscounted = $('#discounted-price').val();
    let displayMaxPax = $('#display-maxpax').val();
    let data = {
      "blockDates":[
                 { 
		          "description": "national araw ng mga puso day!",
		          "notAvailableDate": "2019-02-14 10:00:00"
	             },
	             { 
		          "description": "chinese new year!",
		          "notAvailableDate": "2019-02-25 10:00:00"
	             }
               ],
      "title": title,
      "catalogId": catalogId,
      "categoryId": categoryId,
      "subcategoryId": subcategoryId,
      "why": why,
      "description": description,
      "cancellationPolicy": cancellationPolicy,
      "displayPrice": displayPrice,
      "displayDiscounted": displayDiscounted,
      "displayMaxPax": displayMaxPax
    };
     let content = ajax("api/unitContents", JSON.stringify(data), "POST");
    // window.location.replace("/category");
  });
Теперь в почтальоне есть что-то вроде этого:

{   
"blockDates":[ 
    { 
        "description": "national araw ng mga puso day!",
        "notAvailableDate": "2019-02-14 10:00:00"
    },
    { 
        "description": "chinese new year!",
        "notAvailableDate": "2019-02-25 10:00:00"
    }
],
"location":{
    "identifier":"UBZ190asas11",
    "name": "abulalas,purok 4",
    "address" : "abulalas1 hagonoy bulacan",
    "lat" : 12141.00,
    "lng" : 123251.00
},
"units": 2,
"title": "sample unit content",
"catalogId": 6,
"categoryId": 22,
"subcategoryId": 13,
"contentOptions": [ 
     {
        "name":"bannana boat",
        "maxPax":8,
        "isAvailableDayTime":[
            9,10,11,12,13,15,16,17,18,
            33,34,35,36,37,39,38,39,40,
            56,57,58,59,60,62,63,64,65,
            80,81,82,83,84,86,87,88,89,
            104,105,106,107,108,110,111,112,113,
            128,129,130,131,132,134,135,136,137,
            152,153,154,155,156,158,159,160,161
        ],
        "inventoryNeededSet":[
            {
            "inventoryId": 1,
            "count":1
            },
            {
            "inventoryId": 1,
            "count":2
            }
        ],
        "paxPrices": [
            {
                "count": 5,
                "pricePerPax": 200,
                "totalPrice": 1000,
                "fee": 100
            },
            {
                "count": 1,
                "pricePerPax": 200,
                "totalPrice": 200,
                "fee": 10
            }
        ]
     },
     {
        "name":"bannana with island tour",
        "maxPax":10,
        "isAvailableDayTime":[
            9,10,11,12,13,15,16,17,18,
            33,34,35,36,37,39,38,39,40,
            56,57,58,59,60,62,63,64,65,
            80,81,82,83,84,86,87,88,89,
            104,105,106,107,108,110,111,112,113,
            128,129,130,131,132,134,135,136,137,
            152,153,154,155,156,158,159,160,161
        ],
        "inventoryNeededSet":[
            {
            "inventoryId": 1,
            "count":2
            },
            {
            "inventoryId": 1,
            "count":2
            }
        ],
        "paxPrices": [
            {
                "count": 5,
                "pricePerPax": 200,
                "totalPrice": 1000,
                "fee": 100
            },
            {
                "count": 1,
                "pricePerPax": 200,
                "totalPrice": 200,
                "fee": 10
            }
        ]
     }

],
"photos": [
    "https://samplephoto1.com",
    "https://samplephoto2.com",
    "https://samplephoto3.com"
],
"videos": [
    "https://samplevid1.com",
    "https://samplevid2.com",
    "https://samplevid3.com"
],
"why": "sample why",
"description": "sample desc",
"cancellationPolicy":"cancellationPolicy",
"displayPrice": 300,
"displayDiscounted": 250,
"displayMaxPax": 2
}

дело в том, что я хочу сохранить дату блокировки, каков синтаксис вставки даты блокировки?

======================ОБНОВЛЕНО======================

 30.01.2019 07:06
0
1
617
4
 Ответы 4
Для выполнения вашего кода необходим jQuery. Попробуйте после вставки <script src='https://code.jquery.com/jquery-3.3.1.min.js'></script> перед вашим кодом.

 30.01.2019 07:27
Попробуйте это перед строкой переменной данных:

data.blockdates = $("#block-dates").val();

 30.01.2019 07:34
Если у вас let blockdates = $("#block-dates").val();

Вы можете добавить blockdates в data следующим образом.

data['blockdates']=blockdates;

 30.01.2019 07:36
Возможно, вам придется сначала сохранить элементы в объекте. Затем вы можете добавить их в массив.

blockDates= [];
var description = $("#card-description").val();
var notAvailableDate = $("##block-dates").val();

var blockdate = {description, notAvailableDate};

blockDates.push(blockdate);

in this way => let content = ajax("api/unitContents", JSON.stringify(data, blockDates), "POST");
или

    let data = {
          "title": title,
          "catalogId": catalogId,
          "categoryId": categoryId,
          "subcategoryId": subcategoryId,
          "why": why,
          "cancellationPolicy": cancellationPolicy,
          "displayPrice": displayPrice,
          "displayDiscounted": displayDiscounted,
          "displayMaxPax": displayMaxPax,
          "blockDates": blockDates 
        };

in this way => `let content = ajax("api/unitContents", JSON.stringify(data), "POST");`
 30.01.2019 07:46
Другие вопросы по теме
Получите введенный URL-адрес, прежде чем перенаправить меня на автономную страницу
Сообщение проверки нарушает поле моего адреса электронной почты
Как создать отдельное событие щелчка для каждой кнопки ввода, отображаемой с помощью цикла while
Как клонировать/копировать html-таблицу с помощью javascript/jquery
Есть ли какой-нибудь плагин для chrome, который показывает, какая функция/метод запускается при щелчке элемента?
Как заблокировать прокрутку в div
Случайные числа из разных переменных в одну переменную
Добавьте атрибут ID в < input type = "text" >, который динамически назначается с помощью API и с использованием Javascript/$ Jquery
Jquery для автоматической отправки формы после получения значения от ajax
Обновление данных из ввода
Похожие вопросы
Изменения, сделанные на внешней html-странице, не работают
Как вставить интерактивную диаграмму в pdf?
Передача экземпляра Socket.IO для маршрутизации файлов
Получите введенный URL-адрес, прежде чем перенаправить меня на автономную страницу
Как создать отдельное событие щелчка для каждой кнопки ввода, отображаемой с помощью цикла while
Как клонировать/копировать html-таблицу с помощью javascript/jquery
Почему компонент класса реакции всегда должен вызывать super(props) в своем конструкторе?
Пример командной строки модуля простого узла
Как подключиться к серверу mysql в zeit-now
Алгоритм создания случайной сетки для materialUI со строками, которые в сумме составляют до 3 столбцов

NODE.JS
TypeError: ожидаемая строка, но полученный почтальон массива
Я пытался отправить данные формы, которые имеют несколько полей с одинаковым именем, я получаю ответ «TypeError: ожидаемая строка, но полученный массив».

Я думаю, что проблема с почтальоном, я хочу иметь несколько полей участников, и они будут добавлены в массив.

TypeError: ожидаемая строка, но полученный почтальон массива

окончательные результаты массива

// this is from models/Battle

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const BattleSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    date: {
        type: Date, 
        default: Date.now
    },
    category: {
        type: Number, 
        required: true // this will come from the selected category 
    },
    winner: {
        type: Number, 
        default: 0
    },
    status: {
        type: Number, 
        default: 0 // 0 means the battle is closed, 1 means the battle is open for votes, the status will stay 0 until all participants dropped
    },
    participants: [
        {
          participant: {
            type: Schema.Types.ObjectId,
            required: true
          }
        }
    ]
    
 

});

module.exports = Battle = mongoose.model('battles', BattleSchema);

//this is from routes/api/battles

// @route   POST api/battles
// @desc    Create battle
// @access  Private
router.post(
    '/create-battle',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
      const { errors, isValid } = validateBattleInput(req.body);
  
      // Check Validation
      if (!isValid) {
        // If any errors, send 400 with errors object
        return res.status(400).json(errors);
        console.info(errors);
      }

      const newBattle = new Battle({
         user: req.user.id,
         category: req.body.category,
         participant: req.body.participant
      });      

      //save
      newBattle.save().then(battle => {       

        // const participant = req.body.participant;
        const participant = req.body.participant;


        // add participants to array 
        battle.participants.push( participant );
        console.info(typeof req.body.participant);

        // get the inserted id  
        const battleId = battle._id;
        res.json(battle);      

      
      });
    }
);

// this is battle validation 
const Validator = require('validator');
const isEmpty = require('./is-empty');
var bodyParser = require('body-parser');

module.exports = function validateBattleInput(data) {
  let errors = {};

  data.category = !isEmpty(data.category) ? data.category : '';
  data.participant = !isEmpty(data.participant) ? data.participant : '';

  if (Validator.isEmpty(data.category)) {
    errors.category = 'Category field is required';
  }

  // if (Validator.isEmpty(data.challenger)) {
  //     errors.challenger = 'Challenger field is required';
  // }

  if (Validator.isEmpty(data.participant)) {
    errors.participant = 'Participant field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
 06.02.2019 01:25
1
1
3 603
4
 Ответы 4
попробуйте на вкладке «тело» выбрать «сырой», а затем справа выберите «JSON (application/json)» вместо «текст».

Я предполагаю, что ваша конечная точка API использует JSON вместо данных формы в кодировке URL, просто потому, что вы используете API, используя экспресс и мангуст. но вы должны уточнить это по вопросу, если это не так.

Напишите правильное тело JSON, я имею в виду, используйте двойные кавычки для ключей, как в:

{"model": { "property": "value",  "property2": 1}}
и попробуйте с оберткой объекта {"model": <YOUR BODY HERE>} или без нее, чтобы увидеть, что работает для вас, поскольку обычно обертывают объект, но иногда люди не используют их. (увидев это в вашем коде: req.body.participant, я думаю, что вы, вероятно, этого не сделаете).

(PS: не имеет отношения к вопросу, но лично предпочитаю ARC или Insomnia для остальных клиентов, так как интерфейс для них чище)

 06.02.2019 01:57
Если вы хотите, чтобы данные отправлялись в массиве участников, все поля должны быть участниками, а не участниками

попробуйте отправить данные через необработанные данные, а затем выберите приложение/данные для лучшего форматирования

 06.02.2019 05:32
TypeError: ожидаемая строка, но полученный массив. --- выдает ошибку как в почтальоне, так и в окне терминала. Я подозреваю, что это может быть несоответствие определения пользовательской схемы

Пожалуйста, проверьте пользовательскую схему вашей пользовательской модели, например название: { тип: Строка, требуется: правда } он получает что-то другое, чем ожидалось.

 20.04.2019 00:00
При тестировании в почтальоне - только что выяснилось, что значение ключа должно соответствовать переменным, определенным вашей функцией проверки. Лучше быть последовательным в своем развитии.

 20.04.2019 00:13
Другие вопросы по теме
Ошибка React Express Heroku 503 для маршрутов POST
Как вызвать один и тот же API несколько раз в Express Route?
Не удалось найти представление, даже если все остальное найдено
Объект> массив> объект forEach> массив> переменная push не сохраняется после закрытия цикла forEach
Получение данных Emberjs из Express Api
Как объединить фрагменты загрузки видео Node.js
Как я могу вызвать req.flash() изнутри мангуста?
Поймай все с маршрутами Next
Конечная точка API работает в URL-адресе браузера, но не в клиентском приложении
Код 14 при докеризации веб-приложения с использованием node.js и MongoDB
Похожие вопросы
Электрон «требуется не определено»
Couchbase извлекает реляционные документы в nodeJS
Node.js в Ubuntu без NGINX или любого другого прокси-сервера не предпочтителен или даже невозможен?
Как использовать подстановочный знак внутри fs.existsSync или statSync или readFileSync
Npmrc несколько реестров для одной и той же области
Как я могу обработать ошибку, разрешен только один тип параметра возобновления, но было найдено несколько?
Module.exports не определен при добавлении метода класса
Запрос с диапазоном дат с использованием запроса Sequelize с Postgres в узле
Как работать с обещанием, когда функция возвращает значение через некоторое время
Как создать несколько дочерних вилок и отправить несколько сообщений между дочерними процессами и основным процессом

JAVA
Карта как параметр в почтовом запросе RestAPI
Я создал API с параметром Map<String, Integer>, например:

@RequestMapping(value = "upload", method = RequestMethod.POST)
public ResponseEntity<String> handleContactsFileUpload(@RequestParam("file") MultipartFile file,
                                                       @RequestParam("name") String name,
                                                       @RequestParam("campaignAppItemId") Long campaignAppItemId,
                                                       @RequestParam("fileColumnHeaders") Map<String,Integer> fileColumnHeaders) throws Exception {
    if (file == null)
        return new ResponseEntity<>("No file uploaded", HttpStatus.BAD_REQUEST);
    contactService.handleContactsFile(file, name, campaignAppItemId,fileColumnHeaders);
    return new ResponseEntity<>("File uploaded successfully", HttpStatus.OK);
}
Я пытаюсь вызвать это через Postman: Карта как параметр в почтовом запросе RestAPI

Я передал fileColumnHeaders внутри Body->Form Data как на скриншоте.

Затем я получил такое сообщение в Postman:

Failed to convert value of type 'java.lang.String' to required type 'java.util.Map'; nested exception is java.lang.IllegalStateException: Cannot convert value of type 'java.lang.String' to required type 'java.util.Map': no matching editors or conversion strategy found.

Кто-нибудь знает, почему пришло это сообщение? Как мы можем передать карту в качестве параметра в запросе Rest API? Как мы можем передать карту через Postman?

 07.02.2019 13:07
1
8
20 790
4
Данный вопрос помечен как решенный
 Ответы 4
 Ответ принят как подходящий
Вы можете использовать @RequestBody вместо @RequestParam для Карт и других нетривиальных типов данных и объектов - таким образом Spring сопоставит JSON, представляющий параметр вашей карты, с объектом домена, который затем сериализуется и может быть преобразован в объект Java.

 07.02.2019 13:33
Я думаю, что это может сработать:

@RequestMapping(value = "upload/{fileColumnHeaders}", method = RequestMethod.POST)
public ResponseEntity<String> handleContactsFileUpload(@RequestParam("file") MultipartFile file,
                                                       @RequestParam("name") String name,
                                                       @RequestParam("campaignAppItemId") Long campaignAppItemId,
                                                       @MatrixVariable Map<String,Integer> fileColumnHeaders) throws Exception {
    if (file == null)
        return new ResponseEntity<>("No file uploaded", HttpStatus.BAD_REQUEST);
    contactService.handleContactsFile(file, name, campaignAppItemId,fileColumnHeaders);
    return new ResponseEntity<>("File uploaded successfully", HttpStatus.OK);
}
Поместите все остальные параметры в тело, но добавьте fileColumnHeaders к URL-адресу следующим образом:

/upload/firstName=1;lastName=2;address=3;phone=4

Вам также понадобится эта дополнительная конфигурация:

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void configurePathMatch(PathMatchConfigurer configurer) {
        UrlPathHelper urlPathHelper = new UrlPathHelper();
        urlPathHelper.setRemoveSemicolonContent(false);
        configurer.setUrlPathHelper(urlPathHelper);
    }
}
 07.02.2019 16:43
Во-первых, вы создаете объект DTO, чтобы получить все данные из вашего запроса.

public class FormDataDTO {

    private MultipartFile file;

    private String name;

    private Long campaignAppItemId;

    private Map<String,Integer> fileColumnHeaders;

    // getters, setters
}
Во-вторых, вы можете отобразить FormDataDTO из своего запроса без какой-либо аннотации:

@RequestMapping(value = "upload", method = RequestMethod.POST)
public ResponseEntity<String> handleContactsFileUpload(FormDataDTO formDataDTO){
    // your logic code here
}
Наконец, form-data в вашем запросе будет: 

 07.02.2019 17:17
... Или просто создайте конвертер:

@Component
@RequiredArgsConstructor
public class StringToMapConverter implements Converter<String, Map<String, Object>> {

  private final ObjectMapper objectMapper;

  @Override
  public Map<String, Object> convert(String source) {
    try {
      return objectMapper.readValue(source, new TypeReference<Map<String, String>>() {
      });
    } catch (final IOException e) {
      return null;
    }
  }

}
 07.02.2019 17:38
Другие вопросы по теме
Как перенаправить другую ссылку с сообщением сервера весной
MockMvc не возвращает созданный ресурс в почтовом ответе
Образы из Docker compose не работают должным образом при запуске из команды docker run
Настройте Spring Security в нескольких местах
Метод Mockito @Before вызывается после @PostConstruct
Spring Boot 2.0.4 + Hibernate 5 — ленивая выборка коллекций вне области действия контроллера без вызова геттеров
Ответ отправляется обратно очень поздно после установки метода setResult DeferredResult
Oracle DB - ссылка Java на неинициализированный набор для определенного пакета
Junit Spring избегает двойной загрузки источника данных контекста приложения
Узлы Hazelcast не получают первое опубликованное сообщение
Похожие вопросы
Групповой набор данных spark по месяцам с метки времени в java
Хранилище ключей исключения нулевого указателя из электронного токена цифровой подписи с использованием java
Как динамически построить условие booleanbuilder со многими OR
Как выбрать выпадающее значение
Как преобразовать несколько атрибутов объекта в List<String> с помощью Java 8
Добавление пользовательского рендерера в разные части
CriteriaBuilder с критериями дочерних ассоциаций. Спящий режим
Проверьте, находится ли мышь рядом с маркером в JFreeChart
Listview показывает только последний элемент снова и снова
Как перенаправить другую ссылку с сообщением сервера весной

JAVA
Не найден основной конструктор или конструктор по умолчанию для интерфейса java.util.List Rest API Spring boot
Я передаю тело запроса POST-запросу почтальона, аналогичному этому:

 "name":"Mars",
"artifacts":[
   {
      "elements":[
         {
            "name":"carbon",
            "amount":0.5,
            "measurement":"g"
         }
      ],
      "typeName":"typeA"
   },
   {
      "elements":[
         {
            "name":"hydrogen",
            "amount":0.2,
            "measurement":"g"
         }
      ],
      "typeName":"typeB"
   }
]
Метод создания в остальном контроллере выглядит так.

  @RequestMapping("/create")
  public Planet create(@RequestBody Planet data) {
      Planet mars = planetService.create(data.getName(),data.getArtifacts());
      return mars;
Планета и все ее вложенные объекты имеют конструктор по умолчанию, такой как:

public Planet() {}
Однако я не могу создать новый объект планеты из-за отсутствия конструктора по умолчанию. Пожалуйста помоги!

Обновлено: Класс планеты

public class Planet {
@JsonProperty("name")
private String name;
@Field("artifacts")
private List<Artifact> artifacts;

public Planet() {}

public Planet(String name, List<Artifact> artifacts)
{
this.name = name;
this.artifacts = artifacts;
}
//setters and getters

}
Класс артефакта:

public class Artifact() {
@Field("elements")
private List<Element> elements;
@JsonProperty("typeName")
private String typeName;

public Artifact() {}

public Artifact(String typeName, List<Element> elements)
{
this.typeName = typeName;
this.elements = elements;
}
}
Класс элемента:

public class Element() {
@JsonProperty("elementName")
private String name;
@JsonProperty("amount")
private double amount;
@JsonProperty("measurement")
private String measurement;

public Element() {}

public Element(String name, double amount, String measurement)
{
//assignments
}
}
 13.02.2019 06:45
10
2
38 382
4
Данный вопрос помечен как решенный
 Ответы 4
вы должны написать, как показано ниже:

...
public String create(@RequestBody JSONObject requestParams) {
      String name=requestParams.getString("name");
      List<Planet> planetArtifacts=requestParams.getJSONArray("artifacts").toJavaList(Planet.Class);
...
 13.02.2019 06:55
 Ответ принят как подходящий
Я не понимаю, с какой проблемой вы столкнулись, но я сразу вижу ошибку, поэтому, догадавшись, что это проблема, с которой вы столкнулись, я собираюсь дать вам решение.

Создайте класс, который соответствует вашей структуре данных json, например:

Class PlanetData {
    private String name;
    private List<Planet> artifacts;

    public PlanetData(String name, List<Planet> artifacts){
        name = name;
        artifacts = artifacts;
    }

    // include rest of getters and setters here.
}
Тогда ваш контроллер должен выглядеть так. По сути, вам нужно было поставить @RequestBody ко всем параметрам, которые вы хотите получить из запроса JSON. Раньше вы добавляли @RequestBody только к параметру имени, а не к параметру артефакта, и, поскольку тело запроса можно использовать только один раз, поэтому вам нужен класс-оболочка для получения полного тела запроса с использованием одной аннотации @RequestBody.

@RequestMapping("/create")
  public String create(@RequestBody PlanetData data) {
      Planet mars = planetService.create(data.getName(),data.getArtifacts());
      return mars.toString();
  }
Редактировать: Глядя на класс Planet, он также нуждается в некоторой модификации.

public class Planet {
private String typeName; // key in json should match variable name for proper deserialization or you need to use some jackson annotation to map your json key to your variable name.
private List<Element> elements;

public Planet() {}

public Planet(String typeName, List<Element> elements)
{
this.typeName = typeName;
this.elements = elements;
}
//setters and getters. Remember to change your setters and getter from name to typeName.

}
Надеюсь, это решит вашу проблему.

 13.02.2019 07:00
Я думаю, он пытается вызвать new List(), у которого нет конструктора. Попробуйте использовать new ArrayList<>() в своих подписях.

Если это работает таким образом, вы нашли ошибку. Затем переосмыслите свою концепцию вызова методов, поскольку обычно вы хотите избежать использования реализаций List в сигнатурах методов.

 13.02.2019 07:10
У меня была такая же ошибка, когда я забыл @RequestBody перед параметром

  @RequestMapping("/create")
  public Planet create(@RequestBody Planet data) {
 01.08.2019 15:00
Другие вопросы по теме
Журналы не сохраняются в файле
Подключение Spring Boot к AWS RDS MySQL — SSLHandshakeException: получено фатальное предупреждение: unknown_ca
Реализация, предоставленная для BatchConfigurer, не учитывается при использовании @EnableBatchProcessing(modular=true)
При каких условиях app.setBannerMode(Banner.Mode.OFF); игнорируется?
Consul с Spring Cloud Gateway — межсервисная связь
Как использовать swagger без аннотаций
Неожиданный в разделе Spring при использовании синхронизированного
SpringBoot — значение среды ведения журнала не может быть открыто и будет игнорироваться
Использование Spring Data JDBC в приложении Spring Boot
Невозможно изменить пользователя по умолчанию rabbitmq
Похожие вопросы
Большая путаница в нотации O
Ошибка Java: модуль javafx.base не найден
Как настроить путь сборки для проекта java 6 на установленной машине java 8?
Как заставить скрипт веб-драйвера селена ждать ответа от внутреннего API-запроса?
Почему System.exit(0) не требуется в моем коде?
JDK 11 + Solaris 64-битная проблема: - ClassCastException: класс sun.font.CompositeFont не может быть преобразован в класс sun.font.PhysicalFont
Если мы изменим значение строки, то будет создан новый объект. Итак, как мы можем получить доступ к предыдущему строковому объекту
Как отображать значения на веб-странице с помощью angular7
Есть ли способ получить информацию о подсистеме конфигурации wildfly с помощью java?
Различное поведение условного оператора при использовании jdk1.7 и jdk1.8

WCF
Почтальон показывает «Не удалось получить ответ», хотя ответ в порядке
У меня есть служба WCF, к которой я делаю запросы API. Этот вызов API возвращает объект ответа JSON, а также может возвращать его в сжатии GZIP, когда значение «gzip» используется в заголовке «Accept-Encoding».

Проблема в том, что когда я пытаюсь получить ответ в GZIP, Почтальон показывает «Не удалось получить ответ», хотя я вижу, что ответ и содержимое ответа в порядке (код состояния 200) в Fiddler и может легко распаковать содержимое ответа в моем С# клиент.

Я посмотрел в Postman Console, но вижу только "Ошибка: неправильная проверка заголовка". Я почти не пытался найти какую-либо документацию, касающуюся этой проверки заголовка, но не смог ее найти.

Это заголовки запроса:

POST /correction/v1/document?lang=US HTTP/1.1
Content-Type: text/plain
Accept-Encoding: gzip
User-Agent: PostmanRuntime/7.6.0
Accept: */
content-length: 630
Connection: close
Это заголовки ответов:

HTTP/1.1 200 OK
Content-Length: 512
Content-Type: application/json; charset=utf-8
Content-Encoding: gzip
Server: Microsoft-HTTPAPI/2.0
Date: Sun, 24 Feb 2019 14:05:50 GMT
Connection: close
Единственное, что я подозреваю неправильно, это сообщение от Fiddler:

Почтальон показывает «Не удалось получить ответ», хотя ответ в порядке
Я интегрировал этот код в свой, чтобы использовать GZIP в WCF. https://github.com/carlosfigueira/WCFSamples/tree/master/MessageEncoder/GZipEncoderAndAutoFormatSelection

По сути, он захватывает ответ перед возвратом клиенту и использует GZipStream для сжатия.

 24.02.2019 15:37
1
0
4 540
4
 Ответы 4
У меня такая же проблема, я добавил следующий заголовок, чтобы решить эту проблему.

Accept-Encoding : * 


 11.09.2019 20:16
У меня возникла эта проблема, когда служба REST возвращала содержимое zip (также известное как формат WinZip). Я решил ошибку, сжав данные с помощью 7zip для получения истинного формата gzip.

 05.06.2020 17:16
Я смог решить аналогичную проблему, используя заголовок Accept-Encoding: */* или, если вы хотите быть конкретным, сделайте Accept-Encoding: */* таким образом, HTTP-клиент сможет обработать ответ в зависимости от типа полученного кодирования, в случае gzip, это расшифрует ответ и покажет его как обычный текст.

 18.03.2021 16:57
Для себя я удалил «Accept-Encoding» в заголовке запроса.

 06.07.2021 17:25
Другие вопросы по теме
Играть в! Фреймворк 2.6! Фильтр Gzip, если размер ответа превышает 50 байт
Принуждение облачного хранилища Google к ответу Content-Encoding
Как прочитать определенную строку из файла gzip с помощью python
.Net Framework 4.5 Неверный заголовок GZip запроса на мыло Ошибка
Perl6: большие сжатые файлы читаются построчно
Prestashop 1.5.6.2 .htaccess и сжатие gzip
Декодировать поток GZIP в PHP из С#
При извлечении моего файла .json.gz к нему добавляются некоторые символы, и файл не может быть сохранен как файл json
Итерация по 2 столбцам структурированного файла
Как перебирать и распаковывать файлы «.gz» в python?
Похожие вопросы
Тип операции службы WCF не поддерживается
WCF Изменить кодировку сообщения с Utf-16 на Utf-8
Обнаружение ошибки Soap с помощью пользовательского объекта С#
.NET Core 2.2: как использовать WSDL для справки по WCF
WCF Datacontract для XML глубже, чем один слой
Запустите TCP службы WCF, не будучи локальным администратором
Svcutil не генерирует все классы
Мыло WCF, показывающее параметр операции как элемент дочернего уровня
Веб-служба WCF, похоже, работает в бесконечном цикле
WCF передает целочисленный массив через параметр объекта
