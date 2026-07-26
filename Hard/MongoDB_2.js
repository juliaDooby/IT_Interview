Сессии Django
Вопросы
PYTHON
Сессии Django
Я смотрю сеансы в Django, и по умолчанию они хранятся в базе данных. Каковы преимущества сеансов файловой системы и кеширования и когда их следует использовать?

 09.09.2008 00:16
38
2
12 043
5
 Ответы 5
На серверную часть файловой системы стоит обратить внимание только в том случае, если вы не собираетесь использовать базу данных для какой-либо другой части вашей системы. Если вы используете базу данных, то бэкэнду файловой системы нечего рекомендовать.

Серверная часть кэша памяти работает намного быстрее, чем база данных, но вы рискуете очистить сеанс и потерять некоторые данные сеанса.

Если у вас действительно очень, очень посещаемая веб-страница и кодируйте внимательно, чтобы вы могли справиться с потерей сеанса, используйте memcache. Если вы не используете базу данных, используйте кеш файловой системы, но бэкэнд базы данных по умолчанию - лучший, самый безопасный и простой вариант почти во всех случаях.

 09.09.2008 00:58
Я не эксперт по Django, поэтому этот ответ касается хранилищ сеансов в целом. Голосуйте против, если я ошибаюсь.

Производительность и масштабируемость
Выбор хранилища сеансов влияет на производительность и масштабируемость. Это должно быть большой проблемой, только если у вас очень популярное приложение.

Хранилища сеансов базы данных и файловой системы (обычно) поддерживаются дисками, поэтому вы можете дешево проводить много сеансов (потому что диски дешевы), но запросы часто должны ждать, пока данные будут прочитаны (потому что диски медленные). Сеансы Memcached используют ОЗУ, поэтому поддержка того же количества одновременных сеансов будет стоить дороже (потому что ОЗУ дорого), но может быть быстрее (потому что ОЗУ быстро).

Сеансы файловой системы привязаны к блоку, в котором работает ваше приложение, поэтому вы не можете балансировать нагрузку между несколькими серверами приложений, если ваш сайт становится огромным. Сеансы базы данных и memcached позволяют нескольким серверам приложений взаимодействовать с общим хранилищем сеансов.

Простота
Выбор хранилища сеансов также повлияет на то, насколько легко будет развернуть ваш сайт. Отказ от значения по умолчанию будет стоить некоторых сложностей. И у Memcached, и у СУБД есть свои сложности, но ваше приложение, вероятно, в любом случае будет использовать СУБД.

Если у вас нет очень популярного приложения, простота должна быть большей проблемой.

Бонус
Другой подход - сохранить данные сеанса в файлах cookie (все это, а не только идентификатор). Это имеет то преимущество, что хранилище сеансов автоматически масштабируется в зависимости от количества пользователей, но имеет и недостатки. Вы (или ваша структура) должны быть осторожны, чтобы пользователи не подделывали данные сеанса. Вам также нужно, чтобы каждый сеанс был небольшим, потому что все это будет отправляться с каждым запросом.

 09.09.2008 14:11
При выборе серверной части сеанса следует учитывать одну вещь: «как часто изменяются данные сеанса»? Даже сайты с умеренным трафиком пострадают, если данные сеанса будут изменяться при каждом запросе, совершая множество обращений к базе данных для хранения и извлечения данных.

В моей предыдущей работе мы использовали кэш памяти исключительно как серверную часть сеанса, и это работало очень хорошо. Наша административная команда приложила действительно большие усилия для того, чтобы сделать два специальных экземпляра memcached стабильными, как скала, но после небольшого эксперимента с начальной настройкой у нас не было никаких прерываний в работе серверных модулей сеанса.

 19.09.2008 12:20
Если в базе данных есть администратор базы данных, который не является вами, вам может быть запрещено использовать сеанс с поддержкой базы данных (это только интерфейс пользователя). Пока django не поддерживает простое слияние данных из нескольких баз данных, чтобы вы могли иметь специфичные для внешнего интерфейса вещи, такие как сеансы и сообщения пользователей (сообщения в django.contrib.auth также хранятся в базе данных) в отдельной базе данных, вам необходимо сохранить это в виду.

 28.11.2008 18:34
Начиная с Django 1.1, вы можете использовать серверную часть сеанса cached_db.

Это сохраняет сеанс в кеше (используется только с memcached) и записывает его обратно в БД. Если он выпал из кеша, он будет прочитан из БД.

Хотя это медленнее, чем просто использование memcached для хранения сеанса, оно добавляет сеансу постоянство.

Для получения дополнительной информации см .: Django Docs: использование кешированных сессий

И с тех пор это был верный путь.

— 
Hassan Baig
 01.02.2019 18:47



Phpinfo () и pecl search mongo показывают разные версии mongodb
Вопросы
PHP
Phpinfo () и pecl search mongo показывают разные версии mongodb
Я установил MongoDB на свой локальный компьютер, ссылка на сайт ниже

http://linuxforever.info/2017/04/13/how-to-install-mongodb-3-4-in-linux-mint-18-ubuntu-16-04/

Я сделал простую демонстрацию MongoDB, и когда я запустил проект, я получил ошибку вроде

Fatal error: Call to undefined method MongoDB\Driver\WriteConcern::isDefault()

Я проверил версию MongoDB с обеих сторон (phpinfo.php и терминал), она другая.

Терминал => команда pecl search mongo

Matched packages, channel pecl.php.net: Package Stable/(Latest) Local mongo 1.6.16 (stable) MongoDB database driver mongodb 1.4.3 (stable) 1.4.3 MongoDB driver for PHP

Phpinfo =>

MongoDB extension version 1.2.9 MongoDB extension stability stable libbson bundled version 1.5.5 libmongoc bundled version 1.5.5

Пожалуйста, помогите мне решить эту проблему. заранее спасибо

 31.05.2018 12:39
1
5
1 067
5
 Ответы 5
Попробуйте установить, используя следующую команду:

  pecl install mongodb 
Добавьте расширение к вашему файлу php.ini в конце

extension = mongodb.so
Переустановите свой сервер php и apache

Используйте композитор для загрузки пакетов mongo db

composer require mongodb/mongodb 
Запустите следующий код после вышеуказанного процесса

    <?php  
require 'vendor/autoload.php';  
// Creating Connection  
$con = new MongoDB\Client("mongodb://localhost:27017");  
// Creating Database  
$db = $con->yourdbname;  
// Creating Document  
$collection = $db->employee;  
// Insering Record  
$collection->insertOne( [ 'name' =>'Peter', 'email' =>'peter@abc.com' ] );  
// Fetching Record  
$record = $collection->find( [ 'name' =>'Peter'] );  
foreach ($record as $employe) {  
echo $employe['name'], ': ', $employe['email']."<br>";  
} 
 31.05.2018 12:44
MongoDB\Driver\WriteConcern::isDefault() был представлен в ext-mongodb 1.3

У вас есть MongoDB extension version 1.2.9, поскольку вы делите вывод phpinfo().

Вам необходимо обновить расширение.

ОБНОВИТЬ

Вы можете скачать последнее расширение по следующей ссылке

https://pecl.php.net/package/mongodb

Linux Mint основан на Debian, и вы можете установить на него следующий пакет для обновления https://ubuntu.pkgs.org/18.04/ubuntu-universe-amd64/php-mongodb_1.3.4-1build1_amd64.deb.html

 31.05.2018 13:00
<?php
require_once './vendor/autoload.php';
$con = new MongoDB\Client("mongodb://localhost:27017");

// Creating Database
$db = $con->yourdbname;
// Creating Document
$collection = $db->employee;
// Insering Record
$collection->insertOne( [ 'name' =>'Peter', 'email' =>'peter@abc.com'] );
// Fetching Record
$record = $collection->find( [ 'name' =>'Peter'] );
foreach ($record as $employe) {
   echo $employe['name'], ': ', $employe['email']."<br>";
}

?>
 31.05.2018 13:09


пожалуйста, проверьте этот экран коротко

 01.06.2018 09:26
У меня была аналогичная проблема, которую я решил через несколько часов. Надеюсь, это сэкономит время другим. Я использую macOS Sierra.

Задний план
Я запустил sudo pecl install mongodb, чтобы обновить драйвер mongo. Мне не нужно было добавлять расширение в php.ini, потому что оно было из более старой версии.

PHP отказался распознавать обновленный драйвер mongo. Я также получал бы Fatal error: Call to undefined ... isDefault () error при попытке выполнить запросы.

Исправление
Шаг 1
Найдите полный путь расширения драйвера mongodb новый.

Есть несколько способов сделать это.

При обновлении драйвера (например, sudo pecl install mongodb) будет выведено что-то вроде:

Installing '/usr/local/Cellar/php71/7.1.2_13/lib/php/extensions/no-debug-non-zts-20160303/mongodb.so'

Кроме того, вы можете поискать его: find / -name "mongodb.so" на Mac или Linux.

Шаг 2
Найдите свой файл php.ini. Опять же, есть несколько разных способов. Повторение phpinfo () в php сообщит вам, где он находится. В качестве альтернативы вы можете запустить find / -name php.ini.

Моя находилась по адресу /usr/local/etc/php/7.1/php.ini

Шаг 3
Отредактируйте файл php.ini и замените

extension = "mongodb.so"

с путем к новому расширению:

extension = "/usr/local/Cellar/php71/7.1.2_13/lib/php/extensions/no-debug-non-zts-20160303/mongodb.so"

Шаг 4
Сохраните и повторите свой запрос.

Больше информации
В моем случае php.ini фактически включал расширение mongo из /usr/local/etc/php/7.1/conf.d/ext-mongodb.ini, так что это был файл, который я редактировал. Однако я успешно протестировал оба решения.


Как найти имя набора реплик?
Вопросы
MONGODB
Как найти имя набора реплик?
У меня есть экземпляр M0, созданный на mongodb.com со всеми настройками по умолчанию. Я скопировал строку подключения URI из диалогового окна Atlas Connection. Он был распознан в mongoDB Compass, и форма сведений о подключении была автоматически заполнена.

Несколько недель он работал нормально, и я мог просматривать свои документы. И вдруг я получаю:

An error occurred while loading navigation: 'not master and slaveOk=false': It is recommended to change your read preference in the connection dialog to Primary Preferred or Secondary Preferred or provide a replica set name for a full topology connection.

Я искал и предлагаю явно указать Replica Set Name. В автоматических настройках Read Preference установлен как Primary, а Replica Set Name пуст.

Почему эта ошибка возникает внезапно и как узнать имя набора реплик, которое нужно использовать?

 28.06.2018 18:41
5
0
12 506
5
 Ответы 5
Why is this error occurring suddenly

Сообщение об ошибке появляется из-за того, что Выборы набора реплик изменил государственный экземпляра, к которому вы подключаетесь, с Начальный на Вторичный.

Когда подключение с помощью MongoDB Compass и не указано имя набора реплик. Подключение будет прямым подключением к экземпляру, а не подключением к набору реплик (автоматическое обнаружение топологии).

how do I find out the replica set name to use?

На странице проекта Атлас MongoDB выберите ссылку Deployment в меню слева. На вкладке Processes в представлении Topology вы должны увидеть имя набора реплик (это должно быть представление по умолчанию, отображаемое при нажатии на Deployment).

В целом, имя набора реплик - это имя кластера плюс -shard-0. то есть имя кластера test, имя набора реплик - test-shard-0.

 04.07.2018 04:32
Чтобы найти имя набора реплик:
Откройте оболочку mongo и введите команду:

rs.status()
это даст вам документ с именем набора реплик (под ключом set):

{
    "set" : "Name of your replica set",
    ...
}
 07.03.2019 10:52
На самом деле вы можете легко ввести в Mongo Shell следующее:

rs.status().set
Это вернет вам имя набора реплик

 14.09.2019 11:34
В оболочке mongo - я выполнил rs.status () и скопировал имя набора. В клиенте Compass я выбрал ранее использовавшуюся / «Недавнюю» строку подключения с левой стороны и щелкнул ссылку «Заполнять поля подключения по отдельности» над полем строки. Перейдите на вкладку «Дополнительные параметры» и вставьте имя набора в поле «Имя набора реплик» (мое ранее было пустым) Это исправило это для меня, и я смог подключиться.

 29.07.2020 01:17
При локальном подключении к первичному серверу mongod вы заметите, что в приглашении указано имя набора реплик. Пример:

ssh -i "keyfile.pem" MongoDrimary: 27017 (подключение к серверу MongoD) mongo (подключение к базе данных MongoD)

s0: PRIMARY> (Приглашение оболочки Mongo)

В приведенной выше подсказке: "s0" относится к имени набора реплик. «Первичная» относится к первичной реплике.

rs.status (), хотя для хорошего требуется, чтобы вы прошли аутентификацию в БД, которая может


Top 15 MongoDB Interview Questions & Answers (2024)
In today's data-driven world, MongoDB has become a go-to solution for many organizations looking to leverage the power of NoSQL databases. As a job seeker or a tech recruiter, understanding the intricacies of MongoDB can be a game-changer.

This article delves into what MongoDB is and provides a comprehensive list of the top 15 MongoDB interview questions with answers to help you ace your next interview or find the perfect candidate.

What is MongoDB?
MongoDB is an open-source, document-oriented NoSQL database designed for scalability and flexibility. Unlike traditional relational databases that use tables and rows, MongoDB uses collections and documents. This approach allows for a more dynamic schema, making it easier to handle various types of data and evolving application requirements.

Key Features of MongoDB
Scalability: Easily scale horizontally by adding more servers.
Flexibility: Use dynamic schemas that can be modified without downtime.
Performance: High read and write throughput.
Replication: Ensure data availability with built-in replication.
Indexing: Support for complex queries and full-text search with efficient indexing.
Top 15 MongoDB Interview Questions with Answers
1. What are the differences between SQL and NoSQL databases?
Answer:

SQL Databases: Structured query language, relational model, fixed schema, supports ACID properties.
NoSQL Databases: Non-relational, document-oriented, flexible schema, designed for distributed data storage, and eventual consistency.
2. Explain the structure of a MongoDB document.
Answer:

A MongoDB document is a JSON-like format composed of field-value pairs. Each document is stored in a collection and can have a different structure from other documents in the same collection, offering flexibility in data representation.

3. What are the advantages of using MongoDB?
Answer:

Schema-less design allows for easy data integration.
High performance for read and write operations.
Horizontal scalability.
Rich query language with support for ad-hoc queries.
Robust security features.
4. What is a replica set in MongoDB?
Answer:

A replica set is a group of MongoDB servers that maintain the same data set, providing redundancy and high availability. It consists of a primary node and multiple secondary nodes. The primary node handles all write operations, while secondary nodes replicate the data from the primary.

5. How does sharding work in MongoDB?
Answer:

Sharding is the process of distributing data across multiple servers. In MongoDB, a shard is a partition of the data, and each shard is a separate database. The process ensures that the database can handle large data sets and high throughput operations by distributing the load.

6. What is the Aggregation Framework in MongoDB?
Answer:

The Aggregation Framework allows users to process data and return computed results. It uses a pipeline approach where documents are passed through a sequence of stages, each performing a specific operation like filtering, grouping, or sorting.

7. Describe the difference between find() and findOne() methods.
Answer:

find(): Returns a cursor to all documents that match the query criteria.
findOne(): Returns the first document that matches the query criteria.
8. What is an index in MongoDB and why is it important?
Answer:

An index in MongoDB is a data structure that improves the speed of data retrieval operations. Indexes store a small portion of the data set in an easy-to-traverse form, significantly enhancing query performance.

9. Explain the purpose of the $set operator.
Answer:

The $set operator is used to update the value of a field in a document. If the field does not exist, $set will add it.

10. What is GridFS and when would you use it?
Answer:

GridFS is a specification for storing and retrieving large files, such as images and videos, in MongoDB. It splits the file into smaller chunks and stores each chunk as a separate document. Use GridFS when you need to store files larger than 16 MB, which is the BSON-document size limit.

11. How does MongoDB ensure data consistency?
Answer:

MongoDB ensures data consistency using write concerns and replica sets. Write concerns allow you to specify the level of acknowledgment requested from MongoDB for write operations, ensuring data is written to multiple nodes.

12. What is a capped collection?
Answer:

A capped collection is a fixed-size collection that automatically overwrites the oldest entries when it reaches its maximum size. It maintains the insertion order and is used for high-throughput operations like logging.

13. Describe the process of indexing a field in MongoDB.
Answer:

To index a field, use the createIndex() method. For example, db.collection.createIndex({ field: 1 }) creates an ascending index on the specified field. Indexing improves the performance of queries on that field.

14. What is a BSON and how is it different from JSON?
Answer:

BSON (Binary JSON) is a binary representation of JSON-like documents. Unlike JSON, BSON includes additional data types like Date and BinData, and it is designed to be efficient in both storage and scanning.

15. How do you perform a backup and restore in MongoDB?
Answer:

Backup: Use the mongodump command to create a binary export of the data.
Restore: Use the mongorestore command to import the binary data back into MongoDB.
Conclusion
Understanding MongoDB and preparing for related interview questions can significantly boost your career prospects as a database professional. For tech recruiters, having a solid grasp of these concepts ensures you find the right talent to meet your organization's needs.

Whether you are preparing for an interview or looking to hire top-notch developers, Tech for Hire services can help bridge the gap between talent and opportunity. Explore our services today to find the perfect match for your tech needs. By focusing on the critical aspects of MongoDB and the essential questions asked in interviews, you are better equipped to navigate the competitive tech landscape.
