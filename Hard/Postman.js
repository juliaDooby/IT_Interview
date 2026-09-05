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


********************************************************************************

Postman Interview Questions
Common Questions for Postman Interview
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
 

Следующие шаги
Вы можете автоматизировать свои тестовые запуски с помощью программы сбора данных.

30+ Postman Interview Questions & Answers

By
Guest Author
Updated on
June 11, 2025
In this post, we see Postman Interview Questions. Before going ahead, don’t miss this general API Testing Interview Questions.

Let’s move with the actual post on Postman Interview Questions And Answers.

Postman Interview Questions
Postman Interview Questions With Answers
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

41+ Postman Interview Questions & Answers (with Notes) | PART 1
#
testing
#
postman
#
beginners
#
general
In this video, we are going to cover the 41+ Postman interview questions and answers.

✅ Download the Mind map - https://sdet.live/notes
✅ API Testing Postman Playlist - https://sdet.live/4keR



✅ 41+ Postman Interview Questions & Answers
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

37 вопросов по платформе Postman (с 9 образцами ответов)

practicum.yandex.ru
Реклама
•
16+
Короткие курсы для смены профессии
Курсы Практикума, которые идут от 3 до 8 месяцев. Попробуйте бесплатно

Узнать больше
Опубликовано 2022-04-07 18:50 пользователем Журнал HR-Portal

Инженеры-программисты могут использовать интерфейсы прикладного программирования (API) и инструменты для тестирования работы программных продуктов. Одним из таких инструментов является Postman, платформа для совместной работы, используемая для проектирования, разработки и тестирования API. Менеджеры по подбору персонала могут задавать отраслевые или ролевые вопросы о Postman, чтобы проверить ваши знания инструментов API при приеме на должность тестировщика. Знание общих вопросов, которые они могут задать, поможет вам подготовить прямые и краткие ответы и укрепить уверенность в себе.

В этой статье мы рассмотрим девять распространенных вопросов для собеседования с Postman, а также примеры ответов и советы, которые вы можете использовать во время собеседования.

9 вопросов для собеседования по Postman с примерами ответов
Изучите эти вопросы для собеседования с Postman и примеры ответов, чтобы подготовить стратегические ответы для собеседования:

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

25 вопросов по Postman
Оставьте комментарий / Postman, Собеседование / От Diliara Gromche
🔥 Важное для QA-специалистов! 🔥
В QaRocks ты найдешь туториалы, задачи и полезные книги, которых нет в открытом доступе. Уже более 14.000 подписчиков – будь среди нас! Заходи к нам в телеграм канал QaRocks 
Подготовка к собеседованию может оказаться непростой задачей, но знание возможных вопросов и ответов на них может сыграть решающую роль. В этой статье мы собрали 25 основных вопросов и ответов по Postman , которые помогут вам уверенно пройти следующее собеседование.

Почему интервьюеры задают вопросы о Postman?
Основная цель вопросов о Postman – оценить опыт кандидата в использовании платформы Postman API для создания, тестирования и управления API. Интервьюеры хотят убедиться, что кандидат обладает необходимыми техническими навыками и умением решать проблемы для эффективной работы с API в реальной среде. Вопросы часто затрагивают такие темы, как запросы к API, обработка ответов, создание сценариев и автоматизация в среде Postman.

25 вопросов по Postman
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

Советы по подготовке
Ознакомьтесь с функциями Postman: убедитесь, что вы понимаете ключевые функции, такие как коллекции, окружения и консоль Postman. Знание того, как эффективно их использовать, может выделить вас.
Практика написания тестовых скриптов: освойтесь с написанием тестовых скриптов JavaScript в Postman. Сосредоточьтесь на общих задачах, таких как проверка кодов статуса ответа, проверка времени ответа и проверка данных ответа.
Понимание методов аутентификации: разберитесь в различных методах аутентификации, поддерживаемых Postman, таких как Basic Auth, OAuth и API Key. Научитесь их настраивать во вкладке «Авторизация».
Научитесь использовать переменные окружения: освойте использование переменных окружения для управления различными средами и передачи данных между запросами.
Исследуйте автоматизацию с Newman: ознакомьтесь с Newman, инструментом командной строки для запуска коллекций Postman. Узнайте, как интегрировать его с конвейерами CI/CD (CI/CD pipelines) для автоматизированного тестирования.

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
 

Следующие шаги
Вы можете автоматизировать свои тестовые запуски с помощью программы сбора данных.

Postman Interview Questions and Answers
Изучите лучшие вопросы и ответы по Postman для новичков и опытных кандидатов, чтобы подготовиться к собеседованиям.

Всего вопросов: 30
Postman Interview Questions and Answers
Лучшее LIVE пробное интервью, которое стоит посмотреть перед собеседованием
Изучите лучшие вопросы и ответы по Postman для новичков и опытных кандидатов, чтобы подготовиться к собеседованиям.


Инструменты
Что вы можете делать здесь: готовиться к интервью, практиковаться с тестами, изучать учебные материалы, сравнивать связанные темы и использовать бесплатные онлайн-инструменты для валидации, кодирования, хеширования, работы с сетью, SEO и анализа сайтов.

Postman Interview Questions and Answers
Найдите вопрос, чтобы посмотреть ответ.

Найдите вопрос, чтобы посмотреть ответ.
Найти вопрос
Вопросы и ответы для новичков / начинающего уровня
Вопрос 1
What is Postman?
Postman is a popular collaboration platform for API development. It simplifies the process of developing APIs by providing tools for testing, documenting, and sharing APIs.
Сохранить для повторения
Это полезно?
Да
Нет
Добавить комментарий
Посмотреть комментарии
Вопрос 2
Explain the difference between GET and POST requests.
GET requests are used to retrieve data from a server, while POST requests are used to submit data to be processed to a specified resource.
Сохранить для повторения
Это полезно?
Да
Нет
Добавить комментарий
Посмотреть комментарии
Вопрос 3
How do you add a header in a Postman request?
You can add a header in Postman by selecting the 'Headers' tab and then entering the key-value pairs for the headers you want to include.
Сохранить для повторения
Это полезно?
Да
Нет
Добавить комментарий
Посмотреть комментарии
Вопрос 4
What is a Postman collection?
A Postman collection is a group of saved requests. It allows you to organize your API requests into folders, making it easier to manage and run them in a sequence.
Сохранить для повторения
Это полезно?
Да
Нет
Добавить комментарий
Посмотреть комментарии
Вопрос 5
What are the benefits of using Postman over manual API testing?
Postman offers automation, repeatability, and collaboration benefits over manual API testing. It allows for efficient testing, documentation, and sharing of API workflows.
Сохранить для повторения
Это полезно?
Да
Нет
Добавить комментарий
Посмотреть комментарии
Вопрос 6
How can you organize and group requests in Postman?
Requests in Postman can be organized by using folders and subfolders. This helps in keeping related requests together and maintaining a structured workspace.
Сохранить для повторения
Это полезно?
Да
Нет
Добавить комментарий
Посмотреть комментарии
Вопросы и ответы для среднего уровня / опыта от 1 до 5 лет
Вопрос 7
How do you parameterize requests in Postman?
You can parameterize requests in Postman by using variables. Variables can be defined in the request, collection, or environment levels.
Сохранить для повторения
Это полезно?
Да
Нет
Добавить комментарий
Посмотреть комментарии
Вопрос 8
Explain the purpose of Pre-request Scripts in Postman.
Pre-request Scripts in Postman allow you to execute custom JavaScript code before sending a request. It is useful for setting dynamic values or performing actions before the request is sent.
Сохранить для повторения
Это полезно?
Да
Нет
Добавить комментарий
Посмотреть комментарии
Вопрос 9
What is Newman in the context of Postman?
Newman is the command-line companion for Postman. It allows you to run and automate Postman collections using the command line.
Сохранить для повторения
Это полезно?
Да
Нет
Добавить комментарий
Посмотреть комментарии
Вопрос 10
How do you handle authentication in Postman?
Authentication in Postman can be handled by including the required credentials in the request headers or by using the built-in authentication methods provided by Postman.
Сохранить для повторения
Это полезно?
Да
Нет
Добавить комментарий
Посмотреть комментарии
Вопрос 11
What is the purpose of Postman environments?
Postman environments allow you to create sets of variables that can be used across requests. This is useful for managing different configurations, such as development and production.
Сохранить для повторения
Это полезно?
Да
Нет
Добавить комментарий
Посмотреть комментарии
Вопрос 12
How do you handle file uploads in Postman?
File uploads in Postman can be simulated using the 'form-data' request body type. You can select 'File' as a key and choose the file to upload.
Сохранить для повторения
Это полезно?
Да
Нет
Добавить комментарий
Посмотреть комментарии
Вопрос 13
What is the Postman Console, and how is it useful?
The Postman Console is a feature that displays logs and messages from requests and scripts. It is useful for debugging and understanding the flow of requests.
Сохранить для повторения
Это полезно?
Да
Нет
Добавить комментарий
Посмотреть комментарии
Вопрос 14
Explain the purpose of the 'pm.environment' object in Postman scripts.
'pm.environment' is an object in Postman scripts that allows you to access and manipulate variables at the environment level. It is useful for dynamic value assignments.
Сохранить для повторения
Это полезно?
Да
Нет
Добавить комментарий
Посмотреть комментарии
Вопрос 15
How do you handle dynamic variables in Postman?
Dynamic variables in Postman can be handled using environment variables, global variables, or by extracting data from responses and storing them for later use.
Сохранить для повторения
Это полезно?
Да
Нет
Добавить комментарий
Посмотреть комментарии
Вопрос 16
How can you pass data between requests in Postman?
Data can be passed between requests in Postman using variables. You can set variables in one request and use them in subsequent requests within the same collection.
Сохранить для повторения
Это полезно?
Да
Нет
Добавить комментарий
Посмотреть комментарии
Вопрос 17
Explain the purpose of the 'postman.setNextRequest' function.
'postman.setNextRequest' is used to specify the next request to be executed after the current one. It is helpful for creating a sequence of requests.
Сохранить для повторения
Это полезно?
Да
Нет
Добавить комментарий
Посмотреть комментарии
Вопрос 18
Explain the purpose of the 'pm.environment.clear' function.
'pm.environment.clear' is used to clear all variables in the current environment. It is helpful when you need to reset or clean up variables during script execution.
Сохранить для повторения
Это полезно?
Да
Нет
Добавить комментарий
Посмотреть комментарии
Вопрос 19
Explain the concept of Postman environments.
Postman environments allow you to create sets of variables that can be used across requests. This is useful for managing different configurations, such as development and production.
Сохранить для повторения
Это полезно?
Да
Нет
Добавить комментарий
Посмотреть комментарии
Вопросы и ответы для опытного / экспертного уровня
Вопрос 20
Explain how you can share a Postman collection with others.
Postman collections can be shared by exporting them as a JSON file or by using the Postman API. You can also generate a public link to share the collection with others.
Сохранить для повторения
Это полезно?
Да
Нет
Добавить комментарий
Посмотреть комментарии
Вопрос 21
What is the purpose of the Postman test script?
The test script in Postman is used to write assertions and validations. It allows you to verify the response data and ensure that the API is behaving as expected.
Сохранить для повторения
Это полезно?
Да
Нет
Добавить комментарий
Посмотреть комментарии
Вопрос 22
How do you extract data from a response in Postman?
Data can be extracted from a response in Postman using the 'Tests' tab. You can write JavaScript code to extract and store values from the response.
Сохранить для повторения
Это полезно?
Да
Нет
Добавить комментарий
Посмотреть комментарии
Вопрос 23
Explain the difference between 'pm.test' and 'pm.expect' in Postman.
'pm.test' is used to define test cases in Postman scripts, while 'pm.expect' is used to set expectations for assertions. Both are used in the 'Tests' tab.
Сохранить для повторения
Это полезно?
Да
Нет
Добавить комментарий
Посмотреть комментарии
Вопрос 24
How can you handle time delays in Postman scripts?
Time delays can be handled in Postman scripts using the 'setTimeout' function. It allows you to introduce delays between requests or script executions.
Сохранить для повторения
Это полезно?
Да
Нет
Добавить комментарий
Посмотреть комментарии
Вопрос 25
Explain the concept of Postman monitors.
Postman monitors are used for automated and scheduled API testing. They allow you to run collections at predefined intervals and monitor API performance.
Сохранить для повторения
Это полезно?
Да
Нет
Добавить комментарий
Посмотреть комментарии
Вопрос 26
What is the Postman Sandbox?
The Postman Sandbox is a JavaScript execution environment within Postman. It allows you to write and run scripts for requests, tests, and pre-request scripts.
Сохранить для повторения
Это полезно?
Да
Нет
Добавить комментарий
Посмотреть комментарии
Вопрос 27
How can you handle errors in Postman scripts?
Errors in Postman scripts can be handled using try-catch blocks. This allows you to catch and manage errors, preventing them from affecting the entire script execution.
Сохранить для повторения
Это полезно?
Да
Нет
Добавить комментарий
Посмотреть комментарии
Вопрос 28
What is the purpose of the 'pm.sendRequest' function in Postman?
'pm.sendRequest' is used to send an HTTP request from within a Postman script. It allows you to make additional requests based on the results of the current request.
Сохранить для повторения
Это полезно?
Да
Нет
Добавить комментарий
Посмотреть комментарии
Вопрос 29
How do you handle CSRF tokens in Postman?
CSRF tokens in Postman can be handled by extracting them from responses and including them in subsequent requests using variables.
Сохранить для повторения
Это полезно?
Да
Нет
Добавить комментарий
Посмотреть комментарии
Вопрос 30
How do you handle data-driven testing in Postman?
Data-driven testing in Postman can be achieved by using data files, such as CSV or JSON, to provide different sets of input data for the same request or collection of requests.

Postman Interview Questions and Answers
Найдите вопрос, чтобы посмотреть ответ.

Найдите вопрос, чтобы посмотреть ответ.
Найти вопрос
Вопросы и ответы для новичков / начинающего уровня
Вопрос 1
What is Postman?
Postman is a popular collaboration platform for API development. It simplifies the process of developing APIs by providing tools for testing, documenting, and sharing APIs.
Сохранить для повторения
Это полезно?
Да
Нет
Добавить комментарий
Посмотреть комментарии
Вопрос 2
Explain the difference between GET and POST requests.
GET requests are used to retrieve data from a server, while POST requests are used to submit data to be processed to a specified resource.
Сохранить для повторения
Это полезно?
Да
Нет
Добавить комментарий
Посмотреть комментарии
Вопрос 3
How do you add a header in a Postman request?
You can add a header in Postman by selecting the 'Headers' tab and then entering the key-value pairs for the headers you want to include.
Сохранить для повторения
Это полезно?
Да
Нет
Добавить комментарий
Посмотреть комментарии
Вопрос 4
What is a Postman collection?
A Postman collection is a group of saved requests. It allows you to organize your API requests into folders, making it easier to manage and run them in a sequence.
Сохранить для повторения
Это полезно?
Да
Нет
Добавить комментарий
Посмотреть комментарии
Вопрос 5
What are the benefits of using Postman over manual API testing?
Postman offers automation, repeatability, and collaboration benefits over manual API testing. It allows for efficient testing, documentation, and sharing of API workflows.
Сохранить для повторения
Это полезно?
Да
Нет
Добавить комментарий
Посмотреть комментарии
Вопрос 6
How can you organize and group requests in Postman?
Requests in Postman can be organized by using folders and subfolders. This helps in keeping related requests together and maintaining a structured workspace.
Сохранить для повторения
Это полезно?
Да
Нет
Добавить комментарий
Посмотреть комментарии
Вопросы и ответы для среднего уровня / опыта от 1 до 5 лет
Вопрос 7
How do you parameterize requests in Postman?
You can parameterize requests in Postman by using variables. Variables can be defined in the request, collection, or environment levels.
Сохранить для повторения
Это полезно?
Да
Нет
Добавить комментарий
Посмотреть комментарии
Вопрос 8
Explain the purpose of Pre-request Scripts in Postman.
Pre-request Scripts in Postman allow you to execute custom JavaScript code before sending a request. It is useful for setting dynamic values or performing actions before the request is sent.
Сохранить для повторения
Это полезно?
Да
Нет
Добавить комментарий
Посмотреть комментарии
Вопрос 9
What is Newman in the context of Postman?
Newman is the command-line companion for Postman. It allows you to run and automate Postman collections using the command line.
Сохранить для повторения
Это полезно?
Да
Нет
Добавить комментарий
Посмотреть комментарии
Вопрос 10
How do you handle authentication in Postman?
Authentication in Postman can be handled by including the required credentials in the request headers or by using the built-in authentication methods provided by Postman.
Сохранить для повторения
Это полезно?
Да
Нет
Добавить комментарий
Посмотреть комментарии
Вопрос 11
What is the purpose of Postman environments?
Postman environments allow you to create sets of variables that can be used across requests. This is useful for managing different configurations, such as development and production.
Сохранить для повторения
Это полезно?
Да
Нет
Добавить комментарий
Посмотреть комментарии
Вопрос 12
How do you handle file uploads in Postman?
File uploads in Postman can be simulated using the 'form-data' request body type. You can select 'File' as a key and choose the file to upload.
Сохранить для повторения
Это полезно?
Да
Нет
Добавить комментарий
Посмотреть комментарии
Вопрос 13
What is the Postman Console, and how is it useful?
The Postman Console is a feature that displays logs and messages from requests and scripts. It is useful for debugging and understanding the flow of requests.
Сохранить для повторения
Это полезно?
Да
Нет
Добавить комментарий
Посмотреть комментарии
Вопрос 14
Explain the purpose of the 'pm.environment' object in Postman scripts.
'pm.environment' is an object in Postman scripts that allows you to access and manipulate variables at the environment level. It is useful for dynamic value assignments.
Сохранить для повторения
Это полезно?
Да
Нет
Добавить комментарий
Посмотреть комментарии
Вопрос 15
How do you handle dynamic variables in Postman?
Dynamic variables in Postman can be handled using environment variables, global variables, or by extracting data from responses and storing them for later use.
Сохранить для повторения
Это полезно?
Да
Нет
Добавить комментарий
Посмотреть комментарии
Вопрос 16
How can you pass data between requests in Postman?
Data can be passed between requests in Postman using variables. You can set variables in one request and use them in subsequent requests within the same collection.
Сохранить для повторения
Это полезно?
Да
Нет
Добавить комментарий
Посмотреть комментарии
Вопрос 17
Explain the purpose of the 'postman.setNextRequest' function.
'postman.setNextRequest' is used to specify the next request to be executed after the current one. It is helpful for creating a sequence of requests.
Сохранить для повторения
Это полезно?
Да
Нет
Добавить комментарий
Посмотреть комментарии
Вопрос 18
Explain the purpose of the 'pm.environment.clear' function.
'pm.environment.clear' is used to clear all variables in the current environment. It is helpful when you need to reset or clean up variables during script execution.
Сохранить для повторения
Это полезно?
Да
Нет
Добавить комментарий
Посмотреть комментарии
Вопрос 19
Explain the concept of Postman environments.
Postman environments allow you to create sets of variables that can be used across requests. This is useful for managing different configurations, such as development and production.
Сохранить для повторения
Это полезно?
Да
Нет
Добавить комментарий
Посмотреть комментарии
Вопросы и ответы для опытного / экспертного уровня
Вопрос 20
Explain how you can share a Postman collection with others.
Postman collections can be shared by exporting them as a JSON file or by using the Postman API. You can also generate a public link to share the collection with others.
Сохранить для повторения
Это полезно?
Да
Нет
Добавить комментарий
Посмотреть комментарии
Вопрос 21
What is the purpose of the Postman test script?
The test script in Postman is used to write assertions and validations. It allows you to verify the response data and ensure that the API is behaving as expected.
Сохранить для повторения
Это полезно?
Да
Нет
Добавить комментарий
Посмотреть комментарии
Вопрос 22
How do you extract data from a response in Postman?
Data can be extracted from a response in Postman using the 'Tests' tab. You can write JavaScript code to extract and store values from the response.
Сохранить для повторения
Это полезно?
Да
Нет
Добавить комментарий
Посмотреть комментарии
Вопрос 23
Explain the difference between 'pm.test' and 'pm.expect' in Postman.
'pm.test' is used to define test cases in Postman scripts, while 'pm.expect' is used to set expectations for assertions. Both are used in the 'Tests' tab.
Сохранить для повторения
Это полезно?
Да
Нет
Добавить комментарий
Посмотреть комментарии
Вопрос 24
How can you handle time delays in Postman scripts?
Time delays can be handled in Postman scripts using the 'setTimeout' function. It allows you to introduce delays between requests or script executions.
Сохранить для повторения
Это полезно?
Да
Нет
Добавить комментарий
Посмотреть комментарии
Вопрос 25
Explain the concept of Postman monitors.
Postman monitors are used for automated and scheduled API testing. They allow you to run collections at predefined intervals and monitor API performance.
Сохранить для повторения
Это полезно?
Да
Нет
Добавить комментарий
Посмотреть комментарии
Вопрос 26
What is the Postman Sandbox?
The Postman Sandbox is a JavaScript execution environment within Postman. It allows you to write and run scripts for requests, tests, and pre-request scripts.
Сохранить для повторения
Это полезно?
Да
Нет
Добавить комментарий
Посмотреть комментарии
Вопрос 27
How can you handle errors in Postman scripts?
Errors in Postman scripts can be handled using try-catch blocks. This allows you to catch and manage errors, preventing them from affecting the entire script execution.
Сохранить для повторения
Это полезно?
Да
Нет
Добавить комментарий
Посмотреть комментарии
Вопрос 28
What is the purpose of the 'pm.sendRequest' function in Postman?
'pm.sendRequest' is used to send an HTTP request from within a Postman script. It allows you to make additional requests based on the results of the current request.
Сохранить для повторения
Это полезно?
Да
Нет
Добавить комментарий
Посмотреть комментарии
Вопрос 29
How do you handle CSRF tokens in Postman?
CSRF tokens in Postman can be handled by extracting them from responses and including them in subsequent requests using variables.
Сохранить для повторения
Это полезно?
Да
Нет
Добавить комментарий
Посмотреть комментарии
Вопрос 30
How do you handle data-driven testing in Postman?
Data-driven testing in Postman can be achieved by using data files, such as CSV or JSON, to provide different sets of input data for the same request or collection of requests.

60+ Top Postman Interview Questions & Answers
By Haroon Ahamed Kitthu
Share This Article:
Last updated on Jun 16, 202682408
60+ Top Postman Interview Questions and Answers
Postman is a widely used API testing and development tool that simplifies working with APIs. As the demand for robust and efficient APIs grows, proficiency in using Postman has become a valuable skill for software developers, quality assurance engineers, and API enthusiasts.

To help you prepare for an interview focused on Postman, we have compiled a comprehensive list of common Postman interview questions. Whether you are a beginner or have some experience with Postman, these questions will cover various aspects of the tool, from basic concepts to advanced features.

Whether you are a beginner aiming to enter the world of API testing or an experienced professional looking to validate your skills, this collection of Postman interview questions will serve as a valuable resource to help you prepare effectively. 

Want a Top Software Development Job? Start Here!AI-Powered Full Stack Developer ProgramExplore ProgramWant a Top Software Development Job? Start Here!
Most Asked Postman Interview Questions
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

Learn 15+ In-Demand Tools and Skills!AI-Powered Automation Test Engineer ProgramExplore ProgramLearn 15+ In-Demand Tools and Skills!
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

Top 47 Postman Interview Questions and Answers (2026)
By :
Thomas HamiltonThomas Hamilton
Updated
February 13, 2026

Add Guru99 on Google
The Postman is a popular API testing tool that helps the development team create, share, and test documents of API. The Postman tool provides a GUI interface to test an API and a command-line utility for experienced testers. This API testing tool also helps you to create the request as per the need of API. The Postman team has also released a Chrome extension that can be used to test the API from your browser.

Postman Interview Questions for Freshers and Experienced
The list below covers all the Postman questions for freshers and professional-level candidates. This Postman interview questions guide will help you crack the interview and help you get your dream job for software testing.

1) What is Postman?
The Postman is a highly popular API testing tool that helps the development team create, share, and test an API. The Postman tool provides a GUI interface to the API and a command-line utility for experienced testers.

2) What is an HTTP request?
An HTTP request is a program that the client makes to a name host located on a server. It works as a communication interface or a request-response protocol between a client and server. The primary use of the HTTP request is to access a resource on the server. To initiate the HTTP request, the client uses components of a URL (Uniform Resource Locator) that also includes the information needed to access the resource.

Postman Interview Questions
Postman Interview Questions
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

RELATED ARTICLES
Postman Tutorial
How to Download & Install Postman for Windows?
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

Postman Interview Questions and Answers
Найдите вопрос, чтобы посмотреть ответ.

Найдите вопрос, чтобы посмотреть ответ.
Найти вопрос
Вопросы и ответы для новичков / начинающего уровня
Вопрос 1
What is Postman?
Postman is a popular collaboration platform for API development. It simplifies the process of developing APIs by providing tools for testing, documenting, and sharing APIs.
Сохранить для повторения
Это полезно?
Да
Нет
Добавить комментарий
Посмотреть комментарии
Вопрос 2
Explain the difference between GET and POST requests.
GET requests are used to retrieve data from a server, while POST requests are used to submit data to be processed to a specified resource.
Сохранить для повторения
Это полезно?
Да
Нет
Добавить комментарий
Посмотреть комментарии
Вопрос 3
How do you add a header in a Postman request?
You can add a header in Postman by selecting the 'Headers' tab and then entering the key-value pairs for the headers you want to include.
Сохранить для повторения
Это полезно?
Да
Нет
Добавить комментарий
Посмотреть комментарии
Вопрос 4
What is a Postman collection?
A Postman collection is a group of saved requests. It allows you to organize your API requests into folders, making it easier to manage and run them in a sequence.
Сохранить для повторения
Это полезно?
Да
Нет
Добавить комментарий
Посмотреть комментарии
Вопрос 5
What are the benefits of using Postman over manual API testing?
Postman offers automation, repeatability, and collaboration benefits over manual API testing. It allows for efficient testing, documentation, and sharing of API workflows.
Сохранить для повторения
Это полезно?
Да
Нет
Добавить комментарий
Посмотреть комментарии
Вопрос 6
How can you organize and group requests in Postman?
Requests in Postman can be organized by using folders and subfolders. This helps in keeping related requests together and maintaining a structured workspace.
Сохранить для повторения
Это полезно?
Да
Нет
Добавить комментарий
Посмотреть комментарии
Вопросы и ответы для среднего уровня / опыта от 1 до 5 лет
Вопрос 7
How do you parameterize requests in Postman?
You can parameterize requests in Postman by using variables. Variables can be defined in the request, collection, or environment levels.
Сохранить для повторения
Это полезно?
Да
Нет
Добавить комментарий
Посмотреть комментарии
Вопрос 8
Explain the purpose of Pre-request Scripts in Postman.
Pre-request Scripts in Postman allow you to execute custom JavaScript code before sending a request. It is useful for setting dynamic values or performing actions before the request is sent.
Сохранить для повторения
Это полезно?
Да
Нет
Добавить комментарий
Посмотреть комментарии
Вопрос 9
What is Newman in the context of Postman?
Newman is the command-line companion for Postman. It allows you to run and automate Postman collections using the command line.
Сохранить для повторения
Это полезно?
Да
Нет
Добавить комментарий
Посмотреть комментарии
Вопрос 10
How do you handle authentication in Postman?
Authentication in Postman can be handled by including the required credentials in the request headers or by using the built-in authentication methods provided by Postman.
Сохранить для повторения
Это полезно?
Да
Нет
Добавить комментарий
Посмотреть комментарии
Вопрос 11
What is the purpose of Postman environments?
Postman environments allow you to create sets of variables that can be used across requests. This is useful for managing different configurations, such as development and production.
Сохранить для повторения
Это полезно?
Да
Нет
Добавить комментарий
Посмотреть комментарии
Вопрос 12
How do you handle file uploads in Postman?
File uploads in Postman can be simulated using the 'form-data' request body type. You can select 'File' as a key and choose the file to upload.
Сохранить для повторения
Это полезно?
Да
Нет
Добавить комментарий
Посмотреть комментарии
Вопрос 13
What is the Postman Console, and how is it useful?
The Postman Console is a feature that displays logs and messages from requests and scripts. It is useful for debugging and understanding the flow of requests.
Сохранить для повторения
Это полезно?
Да
Нет
Добавить комментарий
Посмотреть комментарии
Вопрос 14
Explain the purpose of the 'pm.environment' object in Postman scripts.
'pm.environment' is an object in Postman scripts that allows you to access and manipulate variables at the environment level. It is useful for dynamic value assignments.
Сохранить для повторения
Это полезно?
Да
Нет
Добавить комментарий
Посмотреть комментарии
Вопрос 15
How do you handle dynamic variables in Postman?
Dynamic variables in Postman can be handled using environment variables, global variables, or by extracting data from responses and storing them for later use.
Сохранить для повторения
Это полезно?
Да
Нет
Добавить комментарий
Посмотреть комментарии
Вопрос 16
How can you pass data between requests in Postman?
Data can be passed between requests in Postman using variables. You can set variables in one request and use them in subsequent requests within the same collection.
Сохранить для повторения
Это полезно?
Да
Нет
Добавить комментарий
Посмотреть комментарии
Вопрос 17
Explain the purpose of the 'postman.setNextRequest' function.
'postman.setNextRequest' is used to specify the next request to be executed after the current one. It is helpful for creating a sequence of requests.
Сохранить для повторения
Это полезно?
Да
Нет
Добавить комментарий
Посмотреть комментарии
Вопрос 18
Explain the purpose of the 'pm.environment.clear' function.
'pm.environment.clear' is used to clear all variables in the current environment. It is helpful when you need to reset or clean up variables during script execution.
Сохранить для повторения
Это полезно?
Да
Нет
Добавить комментарий
Посмотреть комментарии
Вопрос 19
Explain the concept of Postman environments.
Postman environments allow you to create sets of variables that can be used across requests. This is useful for managing different configurations, such as development and production.
Сохранить для повторения
Это полезно?
Да
Нет
Добавить комментарий
Посмотреть комментарии
Вопросы и ответы для опытного / экспертного уровня
Вопрос 20
Explain how you can share a Postman collection with others.
Postman collections can be shared by exporting them as a JSON file or by using the Postman API. You can also generate a public link to share the collection with others.
Сохранить для повторения
Это полезно?
Да
Нет
Добавить комментарий
Посмотреть комментарии
Вопрос 21
What is the purpose of the Postman test script?
The test script in Postman is used to write assertions and validations. It allows you to verify the response data and ensure that the API is behaving as expected.
Сохранить для повторения
Это полезно?
Да
Нет
Добавить комментарий
Посмотреть комментарии
Вопрос 22
How do you extract data from a response in Postman?
Data can be extracted from a response in Postman using the 'Tests' tab. You can write JavaScript code to extract and store values from the response.
Сохранить для повторения
Это полезно?
Да
Нет
Добавить комментарий
Посмотреть комментарии
Вопрос 23
Explain the difference between 'pm.test' and 'pm.expect' in Postman.
'pm.test' is used to define test cases in Postman scripts, while 'pm.expect' is used to set expectations for assertions. Both are used in the 'Tests' tab.
Сохранить для повторения
Это полезно?
Да
Нет
Добавить комментарий
Посмотреть комментарии
Вопрос 24
How can you handle time delays in Postman scripts?
Time delays can be handled in Postman scripts using the 'setTimeout' function. It allows you to introduce delays between requests or script executions.
Сохранить для повторения
Это полезно?
Да
Нет
Добавить комментарий
Посмотреть комментарии
Вопрос 25
Explain the concept of Postman monitors.
Postman monitors are used for automated and scheduled API testing. They allow you to run collections at predefined intervals and monitor API performance.
Сохранить для повторения
Это полезно?
Да
Нет
Добавить комментарий
Посмотреть комментарии
Вопрос 26
What is the Postman Sandbox?
The Postman Sandbox is a JavaScript execution environment within Postman. It allows you to write and run scripts for requests, tests, and pre-request scripts.
Сохранить для повторения
Это полезно?
Да
Нет
Добавить комментарий
Посмотреть комментарии
Вопрос 27
How can you handle errors in Postman scripts?
Errors in Postman scripts can be handled using try-catch blocks. This allows you to catch and manage errors, preventing them from affecting the entire script execution.
Сохранить для повторения
Это полезно?
Да
Нет
Добавить комментарий
Посмотреть комментарии
Вопрос 28
What is the purpose of the 'pm.sendRequest' function in Postman?
'pm.sendRequest' is used to send an HTTP request from within a Postman script. It allows you to make additional requests based on the results of the current request.
Сохранить для повторения
Это полезно?
Да
Нет
Добавить комментарий
Посмотреть комментарии
Вопрос 29
How do you handle CSRF tokens in Postman?
CSRF tokens in Postman can be handled by extracting them from responses and including them in subsequent requests using variables.
Сохранить для повторения
Это полезно?
Да
Нет
Добавить комментарий
Посмотреть комментарии
Вопрос 30
How do you handle data-driven testing in Postman?
Data-driven testing in Postman can be achieved by using data files, such as CSV or JSON, to provide different sets of input data for the same request or collection of requests.

