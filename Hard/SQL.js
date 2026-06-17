27 распространённых вопросов по SQL с собеседований
Вопросы по SQL на собеседованиях — обычное дело, и чтобы не завалиться, нужно хорошо понимать, как работать с базами данных. В этом списке представлены основные вопросы и задачи по SQL, которые часто встречаются на собеседованиях, а также ответы на них.

[

Как стать разработчиком с нуля
](https://tproger.ru/articles/kak-stat-programmistom/)

Теория
1

Что такое СУБД?
Допустим, есть большая база данных, которой пользуются многие сотрудники: кто-то ищет информацию, а кто-то изменяет или даже удаляет её. Чтобы правильно обрабатывать все эти запросы, нужно специальное программное обеспечение, и именно такое ПО получило название системы управления базами данных (СУБД).

2

Какие типы СУБД в соответствии с моделями данных вы знаете?
Этот вопрос по SQL предполагает не просто назвать, но и дать краткое описание каждому типу.

Существует несколько типов СУБД:

Реляционные, которые поддерживают установку связей между таблицами с помощью первичных и внешних ключей. Пример — MySQL.

Flat File — базы данных с двумерными файлами, в которых содержатся записи одного типа и отсутствует связь с другими файлами, как в реляционных. Пример — Excel.

Иерархические подразумевают наличие записей, связанных друг с другом по принципу отношений один-к-одному или один-ко-многим. А вот для отношений многие-ко-многим следует использовать реляционную модель. Пример — Adabas.

Сетевые похожи на иерархические, но в этом случае «ребёнок» может иметь несколько «родителей» и наоборот. Примеры — IDS и IDMS.

Объектно-ориентированные СУБД работают с базами данных, которые состоят из объектов, используемых в ООП. Объекты группируются в классы и называются экземплярами, а классы в свою очередь взаимодействуют через методы. Пример — Versant.

Объектно-реляционные обладают преимуществами реляционной и объектно-ориентированной моделей. Пример — IBM Db2.

Многомерная модель является разновидностью реляционной и использует многомерные структуры. Часто представляется в виде кубов данных. Пример — Oracle Essbase.

Гибридные состоят из двух и более типов баз данных. Используются в том случае, если одного типа недостаточно для обработки всех запросов. Пример — Altibase HDВ.

3

Что такое первичный ключ?
Первичный ключ или PRIMARY KEY предназначен для однозначной идентификации каждой записи в таблице и является строго уникальным (UNIQUE): две записи таблицы не могут иметь одинаковые значения первичного ключа. Нулевые значения (NULL) в PRIMARY KEY не допускаются. Если в качестве PRIMARY KEY используется несколько полей, их называют составным ключом.

Пример:


Copy
CREATE TABLE USERS (
  id INT NOT NULL,
  name VARCHAR (20) NOT NULL,
  PRIMARY KEY (id)
);
Здесь в качестве первичного ключа используется поле id.

4

Когда используется PRIMARY KEY?
PRIMARY KEY — это первичный ключ, который используется в качестве основного ключа и может быть использован для связи с дочерней таблицей, содержащей внешний ключ.

5

А что такое внешний ключ?
Внешний ключ или FOREIGN KEY также является атрибутом ограничения и обеспечивает связь двух таблиц. По сути, это поле или несколько полей, которые ссылаются на PRIMARY KEY в родительской таблице.

Пример использования:


Copy
CREATE TABLE order (
  order_id INT NOT NULL,
  user_id INT,
  PRIMARY KEY (order_id),
  FOREIGN KEY (user_id) REFERENCES users(id)
);
В данном случае внешний ключ, привязанный к полю user_id в таблице order, ссылается на первичный ключ id в таблице users, и именно по этим полям происходит связывание двух таблиц.

6

Какие ещё ограничения вы знаете, как они работают и указываются?
SQL-ограничения (constraints) указываются при создании или изменении таблицы. Это правила для ограничения типа данных, которые могут храниться в таблице. Действие с данными не будет выполнено, если нарушаются установленные ограничения.

UNIQUE — гарантирует уникальность значений в столбце;

NOT NULL — значение не может быть NULL;

INDEX — создаёт индексы в таблице для быстрого поиска/запросов;

CHECK — значения столбца должны соответствовать заданным условиям;

DEFAULT — предоставляет столбцу значения по умолчанию.

7

Для чего используется ключевое слово ORDER BY?
Для сортировки данных в порядке возрастания (ASC) или убывания (DESC).

Пример использования:


Copy
SELECT * FROM user ORDER BY name DESC;
Выбираются пользователи, которые будут отсортированы по имени в порядке убывания. Дополните ответ на этот вопрос по SQL тем, что без указания DESC данные были бы отсортированы по умолчанию — в порядке возрастания:


Copy
SELECT * FROM user ORDER BY name;
8

Чтобы объединить две таблицы в одну, следует использовать оператор JOIN. Соединение таблиц может быть внутренним (INNER) или внешним (OUTER), причём внешнее соединение может быть левым (LEFT), правым (RIGHT) или полным (FULL).

INNER JOIN — получение записей с одинаковыми значениями в обеих таблицах, т.е. получение пересечения таблиц.

FULL OUTER JOIN — объединяет записи из обеих таблиц (если условие объединения равно true) и дополняет их всеми записями из обеих таблиц, которые не имеют совпадений. Для записей, которые не имеют совпадений из другой таблицы, недостающее поле будет иметь значение NULL.

LEFT JOIN — возвращает все записи, удовлетворяющие условию объединения, плюс все оставшиеся записи из внешней (левой) таблицы, которые не удовлетворяют условию объединения.

RIGHT JOIN — работает точно так же, как и левое объединение, только в качестве внешней таблицы будет использоваться правая.

SQL JOIN
Рассмотрим пример соединения SQL таблиц с использованием INNER JOIN. Следующий запрос выбирает все заказы с информацией о клиенте:


Copy
SELECT Orders.OrderID, Customers.CustomerName
FROM Orders
INNER JOIN Customers ON Orders.CustomerID = Customers.CustomerID;
9

А что такое Self JOIN?
Такой вопрос тоже может прозвучать на собеседовании по SQL. Это выражение используется для того, чтобы таблица объединилась сама с собой, словно это две разные таблицы. Чтобы такое реализовать, одна из таких «таблиц» временно переименовывается.

Например, следующий SQL-запрос объединяет клиентов из одного города:


Copy
SELECT A.CustomerName AS CustomerName1, B.CustomerName AS CustomerName2, A.City
FROM Customers A, Customers B
WHERE A.CustomerID <> B.CustomerID
AND A.City = B.City
ORDER BY A.City;
10

Для чего нужен оператор UNION?
Он используется для объединения полученных данных из двух или более запросов, которые должны иметь одинаковое количество столбцов с одинаковыми типами данных и расположенных в том же порядке.

Пример использования:


Copy
SELECT column(s) FROM first_table
UNION
SELECT column(s) FROM second_table;
11

Как работают подстановочные знаки?
Это специальные символы, которые нужны для замены каких-либо знаков в запросе. Они используются вместе с оператором LIKE, с помощью которого можно отфильтровать запрашиваемые данные.

12

Какими бывают подстановочные знаки?
% — заменить ноль или более символов;

_ — заменить один символ.

Примеры:


Copy
SELECT * FROM user WHERE name LIKE '%test%';
Данный запрос позволяет найти данные всех пользователей, имена которых содержат в себе «test».


Copy
SELECT * FROM user WHERE name LIKE 't_est';
А в этом случае имена искомых пользователей начинаются на «t», после содержат какой-либо символ и «est» в конце.

13

Что делают псевдонимы Aliases?
SQL-псевдонимы нужны для того, чтобы дать временное имя таблице или столбцу. Это нужно, когда в запросе есть таблицы или столбцы с неоднозначными именами. В этом случае для удобства в составлении запроса используются псевдонимы. SQL-псевдоним существует только на время запроса.

Пример:


Copy
SELECT very_long_column_name AS alias_name
FROM table;
14

Для чего нужен оператор INSERT INTO SELECT?
Данный оператор копирует данные из одной таблицы и вставляет их в другую, при этом типы данных в обеих таблицах должны соответствовать.

Пример использования:


Copy
INSERT INTO second_table
SELECT * FROM first_table
WHERE condition;
15

Что такое нормализация и денормализация?
Нормализация отношений в SQL призвана организовать информацию в базе данных таким образом, чтобы она не занимала много места и с ней было удобно работать. Это удаление избыточных данных, устранение дублей, идентификация наборов связанных данных через PRIMARY KEY, etc.

Соответственно, денормализация является обратным процессом, который вносит в нормализованную таблицу избыточные данные.

Подробнее о пяти нормальных формах и форме Бойса-Кодда можно узнать из данного видеокурса:

16

Объясните разницу между командами DELETE и TRUNCATE
Команда DELETE — это DML-операция, которая удаляет записи из таблицы, соответствующие заданному условию:


Copy
DELETE FROM table_name WHERE condition;
При этом создаются логи удаления, то есть операцию можно отменить.

А вот команда TRUNCATE — это DDL-операция, которая полностью пересоздаёт таблицу, и отменить такое удаление невозможно:


Copy
TRUNCATE TABLE table_name;
17

Чем VARCHAR отличается от NVARCHAR?
Главное отличие в том, что VARCHAR хранит значения в формате ASCII, где символ занимает один байт, а NVARCHAR хранит значения в формате Unicode, где символ «весит» 2 байта. Тип VARCHAR следует использовать, если вы уверены, что в значениях не будет Unicode-символов. Например, VARCHAR можно применить к адресам электронной почты, состоящих из ASCII-символов.

Практика
18

Как выбрать записи с нечётными Id?
Один из самых распространённых вопросов на собеседовании. SQL запрос для выбора записей с нечётными id должен выглядеть следующим образом:


Copy
SELECT * FROM sample WHERE id % 2 != 0;
Если остаток от деления id на 2 равен нулю, перед нами чётное значение, и наоборот.

19

Как найти дубли в поле email?

Copy
SELECT email, COUNT(email)
FROM customers
GROUP BY email
HAVING COUNT(email) > 1;
Функция COUNT() возвращает количество строк из поля email. Оператор HAVING работает почти так же, как и WHERE, вот только применяется не для всех столбцов, а для набора, созданного оператором GROUP BY.

20

При выборке из таблицы прибавьте к дате 1 день

Copy
SELECT DATE_ADD(date, 1 DAY) as new_date FROM table;
Функция DATE_ADD() прибавляет к дате заданный промежуток времени. Синтаксис выглядит следующим образом:


Copy
SELECT DATE_ADD(дата, INTERVAL что_прибавить) FROM имя_таблицы WHERE условие;
21

Выберите только уникальные имена

Copy
SELECT DISTINCT name FROM users;
SELECT DISTINCT возвращает разные значения, даже если в выбранном столбце есть дубли.

22

Найдите в таблице среднюю зарплату работников

Copy
SELECT AVG(salary) FROM workers;
Функция AVG() применяется только к числовым типам данных и возвращает среднее значение по столбцу.

23

А теперь получите список сотрудников с зарплатой выше средней

Copy
SELECT * FROM workers
WHERE salary > (SELECT AVG (salary) FROM workers);
24

Даны таблицы workers и departments. Найдите все департаменты без единого сотрудника

Copy
SELECT department_name
FROM workers w
RIGHT JOIN departments d ON (w.department_id = d.department_id)
WHERE first_name IS NULL;
25

Замените в таблице зарплату работника на 1000, если она равна 900, и на 1500 в остальных случаях
Замена значений — одна из наиболее часто встречаемых задач по SQL на собеседованиях. Решить её несложно:


Copy
UPDATE table SET salary =
CASE
WHEN salary = 900 THEN 1000
ELSE 1500
END;
Оператор UPDATE используется для изменения существующих записей. Но ответы на подобные вопросы с собеседований по SQL должны быть более развёрнутыми. Уточните,что после UPDATE следует указать, какие записи должны быть обновлены. В противном случае обновятся все записи в таблице.

В нашем примере условие задаётся через оператор CASE: если текущая зарплата равна 900, изменяем её на 1000, в остальных случаях — на 1500.

26

При выборке из таблицы пользователей создайте поле, которое будет включать в себя и имена, и зарплату

Copy
SELECT CONCAT(name, salary) AS new_field FROM users;
Функция CONCAT() используется для конкатенации (объединения) строк, неявно преобразуя при этом любые типы данных в строки.

27

Переименуйте таблицу

Copy
ALTER TABLE first_table RENAME second_table;
С помощью оператора ALTER TABLE можно добавлять, удалять, изменять столбцы, а также изменять название таблицы.

14 наиболее часто используемых запросов SQL на собеседовании (вопрос/ответ)
Главная » Базы данных » Учебное пособие по SQL » 14 наиболее часто используемых запросов SQL на собеседовании (вопрос/ответ)

20.01.2017
10 наиболее часто используемых запросов SQL (вопрос/ответ)
Время чтения: 6 мин.
В этой статье мы даем некоторые примеры запросов SQL, которые часто задают, когда вы идете на собеседование по программированию, имеющий от одного-двух лет опыта в этой области. Идете ли вы на Java разработчика, QA, BA, поддерживаете профессиональные проекты или любую другую техническую позицию, там могут ожидать от вас ответ на основные вопросы из базы данных и SQL. Также очевидно, что, если вы работаете более 1 года на любом проекте есть хороший шанс, что вы столкнетесь с обработкой базы данных, написание запросов SQL для вставки, обновления, удаления и выбора записей. Один простой, но эффективный способ проверить навыки кандидата в SQL, задавая эти типы простых запросов. Они не являются ни очень сложными и не очень большими, но все же они охватывают все ключевые концепции, которые программист должен знать о SQL.

Эти запросы проверят ваши SQL навыки на работу, как внутреннее и внешнее соединение, фильтрация записей с помощью условий WHERE и HAVING, группировка записей с помощью предложения GROUP BY,  вычисление  суммы, среднего и подсчета записей с помощью  совокупной  функции как AVG(), SUM () и COUNT (), поиск записей с помощью символов подстановки в операторе LIKE, поиска записей в связанном с использованием BETWEEN и IN, запросы DATE и TIME и т.д. Если вы столкнулись с каким — либо интересным запросом в SQL или у вас есть какие — либо проблемы и поиск решения, вы можете разместить его здесь на благо каждого.

SQL Query. Вопросы и ответы
Вопрос 1: SQL-запрос, чтобы найти вторую самую высокую зарплату работника

Ответ: Есть много способов найти вторую самую высокую зарплату работника в SQL, вы можете использовать либо в SQL объединение или подзапрос, чтобы решить эту проблему. Вот SQL-запрос с использованием подзапроса:

select MAX(Salary) from Employee 
WHERE Salary NOT IN (select MAX(Salary) from Employee );
 

См как найти вторую самую высокую зарплату в SQL с большим количеством способов решения этой проблемы.

Читать  Синтаксический анализ оболочки MySQL

Вопрос 2: SQL-запрос, чтобы найти максимальную зарплату от каждого отдела.

Ответ: Вы можете найти максимальную зарплату для каждого отдела, группируя все записи по DeptId, а затем с помощью функции MAX(), чтобы вычислить максимальную зарплату в каждой группе или каждого отдела.

SELECT DeptID, MAX(Salary) FROM Employee  GROUP BY DeptID.
 

Эти вопросы становятся более интересными, если Интервьюер попросит вас напечатать название отдела вместо отдела ID, в этом случае, вам нужно соединить таблицу Employee с Department с использованием внешнего ключа DeptID, убедитесь, что вы используете LEFT or RIGHT OUTER JOIN включая отделов без каких — либо сотрудников. Вот запрос

SELECT DeptName, MAX(Salary) FROM Employee e 
RIGHT JOIN Department d ON e.DeptId = d.DeptID 
GROUP BY DeptName;
 

В этом запросе мы использовали RIGHT OUTER JOIN, потому что нам нужно название отдела из таблицы Department, который находится на правой стороне JOIN, даже если нет никакого упоминания о dept_id в таблице сотрудников.

Вопрос 3: Написать SQL — запрос для отображения текущей даты.


Ответ: SQL имеет встроенную функцию под названием GetDate(), которая возвращает текущую временную метку. Это будет работать в Microsoft SQL Server, другие производители, такие как Oracle и MySQL также имеет эквивалентные функции.

SELECT GetDate();

Вопрос 4: Напишите SQL запрос, чтобы проверить дату в передаваемом запросе, является ли дата данного формата или нет .

Ответ: SQL имеет функцию IsDate(), которая используется для проверки переданное значение, является дата или не указанного формата, он возвращает 1 (истина) или 0 (ложь), соответственно. Помните IsDate() является функцией MSSQL и он может не работать на Oracle, MySQL или любой другой базе данных, но не было бы что — то подобное.

SELECT  ISDATE('1/08/13') AS "MM/DD/YY";
 

Она возвращает 0, потому что прошло дата не в правильном формате.

Читать  Функция верхнего регистра SQL

Вопрос 5: Напишите SQL запрос, чтобы напечатать имя отдельного работника у которого поле DOB составляет от 01/02/1965 до 31/11/1970.

Ответ: Этот SQL-запрос является сложным, но вы можете использовать BETWEEN, чтобы получить все записи, у которых дата выпадает между двумя датами.

SELECT DISTINCT EmpName FROM Employees 
WHERE DOB  BETWEEN ‘01/02/1965’ AND ‘31/11/1970’;
 

Вопрос 6: написать SQL запрос, где найти количество сотрудников в зависимости от пола , чье поле DOB между 01/02/1965 до 31/11/1970.

Ответ :

SELECT COUNT(*), sex from Employees  
WHERE  DOB BETWEEN '01/02/1965' AND '31/11/1970'  
GROUP BY sex;
 

Вопрос 7: Напишите SQL запрос, чтобы найти сотрудника, чья зарплата равна или превышает 20000.

Ответ :

SELECT EmpName FROM  Employees WHERE  Salary>=20000;
 

Вопрос 8: Напишите SQL запрос, чтобы найти имя сотрудника, чье имя начинается с ‘M’

Ответ :

SELECT * FROM Employees WHERE EmpName like 'M%';
 

Вопрос 9: Найти все записи о сотрудниках, содержащие слово «Роман», независимо от того, был ли он, как РОМАН, Роман, или роман.

Ответ :

SELECT * from Employees  WHERE  UPPER(EmpName) like '%РОМАН%';
 

 

Вопрос 10: Напишите SQL запрос, чтобы найти год от даты.

Ответ: Вот как вы можете найти год от даты в SQL Server 2008

SELECT YEAR(GETDATE()) as "Год";
 

Вопрос 11: Написать SQL — запрос для поиска дубликатов строк в базе данных? а затем написать SQL запрос, чтобы удалить их?
Ответ: Вы можете использовать следующий запрос для выбора различных записей:

SELECT * FROM emp a 
WHERE rowid = (SELECT MAX(rowid) FROM EMP b WHERE a.empno = b.empno)
 

удалить:

DELETE FROM emp a 
WHERE rowid != (SELECT MAX(rowid) FROM emp b WHERE a.empno = b.empno);
 

Вопрос 12: Существует таблица, которая содержит два столбца Student и Marks, вам нужно найти всех студентов, чьи оценки являются больше, чем средние оценки, т.е. список студентов выше среднего.

Читать  SQL - значение NULL
Ответ: Этот запрос можно записать с помощью подзапросов, как показано ниже:

SELECT student, marks 
from table where marks > (SELECT AVG(marks) from table)
 

SQL Schema Interview Questions


Вопрос 13: Как вы находите всех сотрудников, которые являются также менеджерами?
Вы дали стандартную таблицу сотрудников с дополнительной колонкой mgr_id , которая содержит идентификатор сотрудника менеджера.

Employee Manager query

Ответ: Вы должны знать о автообъединение, чтобы решить эту проблему. В автообъединение, вы можете присоединить два экземпляра одной и той же таблицы, чтобы выяснить дополнительные подробности, как показано ниже

SELECT e.name, m.name FROM Employee e, Employee m 
WHERE e.mgr_id = m.emp_id;
Запрос покажет имя сотрудника и имя менеджера в два столбца, например

name     manager_name

John            David

Один из последующих изменит этот запрос, чтобы включать в себя сотрудников, которые не имеют статус менеджера. Для того, чтобы решить, что, вместо этого использовать inner join, просто используйте left outer join, он также будет включать сотрудников без менеджеров.

Вопрос 14: У вас есть композитный индекс из трех колонок, как вы обеспечиваете значение двух столбцов в WHERE на выборку? Будет ли индекс использоваться для этой операции?

Например, если индекс находится на EmpId, EmpFirstName и EmpSecondName и вы пишете запрос типа

SELECT * FROM Employee WHERE EmpId=2 and EmpFirstName='Radhe'
 

Если данные в две колонки являются вторичными индексами столбца, то индекс не будет ссылаться, но если данные 2 колонок содержат первичный индекс (первый столбец при создании индекса), то индекс будет ссылаться. В этом случае индекс будет использоваться, поскольку EmpId и EmpFirstName являются первичные столбцы.

Надеюсь, что эта статья поможет вам принять быструю практику всякий раз, когда вы собираетесь присутствовать на любом собеседовании и нет так много времени на чтение книг.
Basic SQL Interview Questions for Freshers


As a fresher looking to start a career in the tech industry, it's essential to have a basic understanding of Structured Query Language. SQL interview questions for freshers often focus on the basics, such as its syntax and data types.



Here, you will find the most common and basic interview questions on SQL for freshers that are crucial for you to prepare. 



1. What is SQL?


SQL stands for Structured Query Language. 



It is a programming language used to manage and modify relational databases. SQL allows you to perform various tasks, such as creating, modifying, and deleting database structures and data. 



It is used in a wide range of applications, from small personal projects to large enterprise systems.



SQL interview questions for freshers will include asking this type of basic concepts. If you are a beginner, it's important to have a good understanding of the fundamentals.



2. What is a Database?


It is a structured set of data that is stored and organized in such a manner that the retrieval and modification of data become efficient. 



You can think of it as a digital filing system that stores information in a structured format. 



Databases are used in a wide range of applications, from small personal projects to large enterprise systems, and can be stored and managed using various software tools such as SQL databases, NoSQL databases, and graph databases. 



These can store a variety of data types, including text, numbers, images, and multimedia files. They provide an efficient way to manage and organize large amounts of data, making it easier to access and analyze.




Recommended Professional
Certificates








3. What is Database Management System (DBMS)?


DBMS is a software system used to manage and manipulate databases. 



It is a set of tools and software that allows users to create, access, update, and manage databases. A DBMS provides an interface between the user and the database, allowing the user to perform various tasks. These tasks include defining the structure of the database, inserting, updating, and deleting data, and querying the database to retrieve specific information. 



It also manages security, backup, and recovery procedures to ensure data is protected and can be restored in case of a failure or disaster. 



Examples of popular DBMSs include Oracle, MySQL, Microsoft SQL Server, PostgreSQL, and MongoDB.



4. What is the difference between DBMS and RDBMS?


DBMS is a software system used to manage databases that may or may not enforce data relationships, normalization, and consistency. 



On the other hand, RDBMS is a type of DBMS that enforces data relationships using keys and ensures data consistency using ACID properties. RDBMS is more suitable for large and complex datasets and requires data to be normalized for better efficiency.



Here is a comparison showing the differences between DBMS and RDBMS:



Feature	DBMS	RDBMS
Data storage	Stores data as files or folders on the operating system	Stores data in tables with rows and columns
Data relationships	Doesn't typically enforce relationships between data	Enforces relationships between tables using keys
Normalization	Doesn't require normalization of data	Requires data to be normalized for better efficiency
Data consistency	Doesn't guarantee data consistency	Enforces data consistency rules using ACID properties
Scalability	Can handle small to medium-sized datasets	Can handle large and complex datasets more efficiently


5. Explain the different types of SQL statements.


There are three primary types of statements in SQL:



a) Data Manipulation Language (DML) Statements: 


These SQL statements are used to manipulate data in a database. 



Some of the commonly used DML statements are:



SELECT: for retrieving data from one or more tables.


INSERT: for adding new rows of data to a table.


UPDATE: for changing existing data in a table.


DELETE: for deleting data from a table.



b) Data Definition Language (DDL) Statements: 


These SQL statements are used to define the structure of a database, tables, and columns. 



Some of the commonly used DDL statements are:



CREATE: used to create a new table, database, or other database objects.


ALTER: used to modify the structure of an existing table, database, or other database objects.


DROP: used to delete a table, database, or other database objects.



c) Data Control Language (DCL) Statements: 


These SQL statements are used to control access to the database. 



Some of the commonly used DCL statements are:



GRANT: used to grant privileges to a user or role.


REVOKE: used to revoke privileges from a user or role.



In addition to these statements, SQL also includes other statements such as: 



Transaction Control Language (TCL) statements (e.g., COMMIT, ROLLBACK) 


Session Control Statements (SET, ALTER SESSION) 



These statements allow users to control transactions and the behavior of the session.



6. What is a primary key in SQL?


A primary key is a vital component of a table that serves as a unique identifier for each row. It consists of one or more columns whose values must be unique and non-null. By enforcing data integrity, a primary key ensures that each row in the table can be uniquely identified, and duplicate entries are not allowed.



A primary key column must meet the following requirements:



It must contain a unique value for each row in the table.


It cannot contain null values.


It must have a unique name within the table.


It can be composed of one or more columns.



Primary keys are usually used as a reference for foreign keys in related tables, creating a relationship between them. 



When creating a table, a primary key can be defined using the PRIMARY KEY constraint after the column or columns that should form the primary key. 



Suggested Reading: DBMS Interview Questions and Answers



7. What is a foreign key in SQL?


A foreign key is a crucial element in database design that enables the establishment of relationships between two tables. It is a column or a combination of columns in one table that refers to the primary key of another table. By enforcing referential integrity, a foreign key ensures that data between the two tables remain consistent and accurate.



A foreign key constraint ensures that the data inserted into the table containing the foreign key column corresponds to the data in the table containing the primary key column. This helps to maintain the consistency of the data between the two tables.



8. What is a database index in SQL?


A database index is a powerful tool used to enhance the performance of data retrieval operations in a table.



You can think of an index as a pointer to the location of data in a table. It allows the database engine to quickly locate the rows that match a particular search condition, rather than scanning the entire table.



An index is created on one or more columns of a table, and it can be created on both single and multiple columns. When a query is executed against the table, the database engine uses the index to locate the rows that match the search condition. 



This process is much faster than scanning the entire table, especially when dealing with large tables.



9. What is SQL join?


A join in SQL is an operation that combines rows from two or more tables into a single result set based on a related column between them. 



The join operation is used to retrieve data that is spread across multiple tables, making it possible to query related data in a single statement.



10. What is normalisation in SQL?


Normalisation is a process in SQL database design that involves organising tables and their relationships to minimise data redundancy and improve data integrity. It is a set of rules that ensures that each table in a database contains only related data and eliminates the possibility of inserting or updating redundant data.



There are different levels of normalisation, each with its own set of rules. The most commonly used levels are:



a) First Normal Form (1NF): 


This level ensures that each column of a table contains atomic (indivisible) values, and there are no repeating groups of data.



b) Second Normal Form (2NF): 


This level builds upon the 1NF by ensuring that all non-key columns in a table are dependent on the table's primary key.



c) Third Normal Form (3NF): 


This level builds upon the 2NF by ensuring that all non-key columns in a table are not dependent on other non-key columns.



11. What is denormalisation in SQL?


It is a technique used in database design to optimise the performance of query operations by deliberately introducing redundancy into a table.



In simple terms, denormalisation is the opposite of normalisation, which aims to eliminate redundancy in a database.



Denormalisation involves adding redundant data to a table, either by duplicating columns or by creating new tables that store pre-computed data. This redundancy can help to speed up queries by reducing the need for joins.



12. What is a view in SQL?


A view in SQL is a virtual table that is based on the result of a SQL query. It is a stored query that can be accessed and manipulated just like a table, but does not actually store any data itself.



A view is created by defining a SQL query that retrieves the data that should be included in the view. Once the query is defined, it can be stored as a view, and the view can be accessed just like a regular table.



13. What is the role of a view?


Views in SQL can be used for several purposes, including:



a) Simplifying complex queries: 


A view can be used to simplify a complex query by encapsulating the logic into a single view that can be used as a basis for other queries.



b) Hiding sensitive data: 


A view can be used to hide sensitive data from certain users by only including the data that is necessary for them to perform their tasks.



c) Providing a customized view of data: 


A view can be used to provide a customised view of data for different users or applications, without having to create separate tables.



d) Providing an additional layer of security: 


A view can be used to provide an additional layer of security by restricting access to certain columns or rows of data.



14. What is a stored procedure in SQL?


The stored procedure is a set of SQL statements that are stored in the database server and can be executed repeatedly without the need to recompile them each time. 



Stored procedures can be thought of as precompiled and stored SQL code that can be called from an application or another SQL statement.



These are commonly used in SQL to encapsulate complex database logic that would otherwise need to be repeated multiple times across different applications or SQL statements. By centralising the logic in a stored procedure, the complexity can be reduced, and the code can be made more modular and reusable.



15. What is a trigger in SQL?


A trigger is a database object that is associated with a table or view and is executed automatically in response to certain database events, such as insert, update, or delete operations on the table or view.



Triggers in SQL are used to: 


enforce business rules


perform complex data validations


audit data changes


perform other tasks that need to be executed automatically when certain database events occur. 



Triggers can be defined to execute either before or after the event that triggers them.



When a trigger is defined on a table, it is automatically executed by the database server whenever the corresponding event occurs. Triggers can contain SQL statements, stored procedures, or other database objects that are executed as part of the trigger's action.



Suggested Reading: Top 28 Java 8 Interview Questions and Answers for Experienced (With Free PDF)



16. What is ACID in database transactions?


ACID stands for Atomicity, Consistency, Isolation, and Durability. These are some important properties that guarantee the reliability of transactions in a database.



a) Atomicity: 


A transaction is an indivisible unit of work that must either be completed in its entirety or not at all. Atomicity ensures that if a transaction is interrupted, all of its changes are rolled back, leaving the database in its original state.



b) Consistency: 


A transaction must ensure that the database remains in a consistent state before and after it executes. This means that the data must satisfy all constraints and rules defined by the schema.



c) Isolation: 


Transactions must be isolated from each other, so that the changes made by one transaction are invisible to other transactions until they are committed.



d) Durability: 


When a transaction is committed, its modifications must be durable and capable of surviving any system failures or crashes that may occur afterwards. Durability ensures that data is not lost due to hardware or software failures.



Together, these properties provide a robust framework for managing database transactions, ensuring that they are reliable, correct, and durable, even in the face of errors, concurrent access, and system failures. 



17. What is difference between SQL and MySQL?


SQL and MySQL are related but distinct concepts. 



Here are some of the key differences between SQL and MySQL:



SQL	MySQL
SQL is a programming language used to manage and manipulate relational databases.	MySQL is an open-source RDBMS that uses SQL as its language for managing data.
SQL is a standardised language that can be used with various RDBMS, such as MySQL, Oracle, SQL Server, etc.	MySQL is a specific RDBMS that can only be used with MySQL databases.
SQL provides a set of commands for creating, updating, and querying databases and their tables, as well as managing users and permissions.	MySQL provides a full-featured database management system, with support for features such as replication, partitioning, and clustering.
SQL commands can be used in a command-line interface, in database management tools, or in programming languages that support SQL.	MySQL is typically accessed through a command-line interface, a graphical user interface, or programming APIs such as JDBC or ODBC.
SQL is a declarative language, which means that you specify what you want to do, and the database management system determines how to execute your commands.	MySQL uses a query optimiser to determine the most efficient way to execute SQL queries.
SQL supports various data types, including integers, decimals, strings, and dates.	MySQL supports a wide range of data types, including integers, decimals, strings, dates, and more.
SQL provides a standard syntax for querying and manipulating data, making it easier to switch between different RDBMS.	MySQL provides a rich set of extensions and features beyond the standard SQL language, which can make it more powerful but also more complex to use.


18. What is a transaction in SQL?


A transaction is a logical unit of work that comprises one or more database operations that must be executed as a single, indivisible unit. It is usually composed of multiple SQL statements, such as INSERT, UPDATE, and DELETE, that modify one or more rows in a database table.



In SQL, a transaction begins with a BEGIN TRANSACTION statement and ends with either a COMMIT or ROLLBACK statement. 



The COMMIT statement permanently saves the changes made by the transaction, while the ROLLBACK statement cancels or undoes the changes made by the transaction.



19. What is the role of transactions in SQL?


Transactions are important for maintaining the consistency and integrity of the data in a database. They allow multiple operations to be performed as a single unit, so that either all of the operations are completed successfully, or none of them are. This helps to prevent partial updates that could leave the database in an inconsistent state.



Example



Consider a banking application that needs to transfer money from one account to another. This involves two separate updates to the account balances: one to deduct the money from the source account, and one to add the money to the destination account. 



By performing these two updates within a transaction, the application can ensure that either both updates are completed successfully, or neither of them are. 



This helps to prevent situations where the balance is deducted from the source account but not added to the destination account, leaving the database in an inconsistent state.



20. What is a cursor in SQL?


A cursor is a database object that provides a mechanism for selecting and processing individual rows of data from a result set. Cursors are typically used to iterate through the results of a query or stored procedure and perform operations on each row.



When a cursor is opened, it creates a temporary result set that represents the rows returned by a SELECT statement. The cursor provides methods for navigating through the result set, such as fetching the next row, moving to the first or last row, or skipping rows. 



Moreover, the cursors also allow you to update or delete individual rows in the result set, which can be useful for performing batch operations on a large data set.




Upcoming Masterclass


21. What is a subquery in SQL?


It is a query that is nested inside another query. It can be used to retrieve data from one or more tables, and the results of the subquery are then used in the main query to perform further operations.



22. What is the use of a subquery?


Subqueries in SQL can be used in a variety of ways, such as:



a) Filtering data: 


A subquery can be used to filter the results of a main query based on a condition. For example, you could use a subquery to retrieve all employees who have a salary greater than the average salary of all employees.



b) Performing calculations: 


A subquery can be used to perform calculations on a set of data, and the results of the subquery can then be used in the main query. For example, you could use a subquery to calculate the total sales for each salesperson, and then use those results to generate a report.



c) Retrieving data for use in a JOIN: 


A subquery can be used to retrieve data that is needed to perform a JOIN operation. For example, you could use a subquery to retrieve the top-selling products in each category, and then use that data to join with other tables to generate a report.



23. What is the difference between a subquery and a join in SQL?


Subqueries are nested queries that can filter data, perform calculations, or retrieve data for use in a JOIN operation. But they can be slower and less efficient than a join, especially for large data sets. 



Whereas, joins combine data from two or more tables based on a common column, and are generally faster and more efficient than subqueries. But they may have limitations on the types of JOINs that can be used. 



Here is a comparison showing differences between subquery and join in SQL:



Subquery	Join
Syntax	SELECT ... FROM table1 WHERE column1 IN (SELECT ...)	SELECT ... FROM table1 JOIN table2 ON table1.column1 = table2.column1
Returns	Single value, single column, or a table	Table
Purpose	Filter data, perform calculations, or retrieve data for use in a JOIN operation	Combine data from two or more tables based on a common column
Execution	Nested inside another query and executed for each row in the outer query (correlated or non-correlated)	Executed as a single query by the database engine
Performance	Can be slower and less efficient than a join, especially for large data sets	Generally faster and more efficient than a subquery
Flexibility	Can be more flexible than a join, allowing for more complex filtering and calculations	May have limitations on the types of JOINs that can be used
Syntax complexity	Can have more complex syntax due to nesting and multiple levels of subqueries	Generally has simpler syntax than a subquery


24. What is the difference between DELETE and TRUNCATE statements?


The DELETE statement deletes specific rows from a table, is logged, and can be rolled back using a transaction. But it is slower for large tables and many deletes. 



Whereas, the TRUNCATE statement removes all rows from a table, has minimal logging, commits automatically, and cannot be rolled back using a transaction. But it is faster for large tables and many deletes. 



The table below shows all the primary differences between the DELETE and TRUNCATE statements in SQL:



DELETE Statement	TRUNCATE Statement
Operation	Deletes specific rows from a table	Removes all rows from a table
Logging	Each row deleted is logged	Minimal logging
Auto-commit	Needs to be committed after every delete	Commits automatically
Rollback	Can be rolled back using a transaction	Cannot be rolled back using a transaction
Performance	Slower for large tables and many deletes	Faster for large tables and many deletes
Trigger	Triggers are executed for each row deleted	Triggers are not executed
Table size	No impact on table size	Resets the table size to initial size
Identity columns	Identity values are not reset	Identity values are reset to initial seed value


SQL Interview Questions for Experienced


SQL interview questions for experienced professionals often focus on more advanced topics such as performance tuning, optimisation, and database design. 



Employers are looking for candidates who can not only write efficient queries but also have a deep understanding of how to manage and organise data at scale.



To excel in advanced SQL interview questions, it's essential to have hands-on experience working with SQL and be able to articulate your thought process and problem-solving skills. 



25. Can you explain the different types of SQL joins?


There are several types of joins in SQL used to combine data from two or more tables based on a common column. 



a) Inner join: 


This type of join returns only the rows from both tables that have matching values in the specified columns.



b) Left join (or Left outer join): 


This type of join returns all the rows from the left table and the matching rows from the right table. 



If there is no match in the right table, the result will still include all the rows from the left table with NULL values in the columns from the right table.



c) Right join (or Right outer join): 


This type of join is similar to a left join but returns all the rows from the right table and the matching rows from the left table. 



If there is no match in the left table, the result will still include all the rows from the right table with NULL values in the columns from the left table.



d) Full join (or Full outer join): 


This type of join returns all the rows from both tables, with NULL values in the columns where there is no match.



e) Cross join (or Cartesian product): 


This type of join returns all possible combinations of rows from both tables. It does not require a common column between the tables.



26. How do you optimize SQL queries for better performance?


Here are some tips to optimise SQL queries for better performance:



a) Use indexes:


Indexes can significantly improve query performance by allowing the database to quickly locate the data needed for a query. Be sure to create indexes on the columns used in WHERE, JOIN, and ORDER BY clauses.



b) Use EXPLAIN: 


The EXPLAIN command can help identify slow queries and suggest ways to optimise them. EXPLAIN displays information about how the database executes a specific query, including the order in which tables are read and the indexes used.



c) Limit the number of results: 


Use the LIMIT keyword to return only the necessary number of rows from a query. This can improve performance by reducing the amount of data that needs to be processed and returned.



d) Avoid using SELECT *: 


Instead of selecting all columns from a table, specify only the columns needed for the query. This can reduce the amount of data that needs to be read and processed.



e) Use subqueries: 


Subqueries can be used to break a complex query into smaller, more manageable parts. This can improve performance by reducing the amount of data that needs to be read and processed at once.



f) Optimise JOINs: 


Be sure to use the appropriate type of JOIN (inner, outer, etc.) for the query. Also, consider using JOINs that are more efficient, such as LEFT JOIN, instead of NOT IN or NOT EXISTS.



g) Avoid using functions on indexed columns: 


Using functions such as UPPER or LOWER on indexed columns can prevent the database from using the index, resulting in slower performance.



h) Use stored procedures: 


Stored procedures can help improve query performance by reducing the amount of network traffic between the application and database server.



i) Use connection pooling: 


Connection pooling can help improve query performance by reducing the overhead associated with creating and destroying database connections.



Such concepts are common if you are looking for SQL interview questions for 5 years experience or more. 



27. Can you explain the difference between a clustered and a non-clustered index?


The choice between a clustered and non-clustered index depends on the specific requirements of the database and the types of queries that will be performed. 



Clustered indexes are generally best for tables that will be frequently accessed using range queries or table scans. Whereas, non-clustered indexes are better for tables that will be frequently accessed using exact match queries.



Clustered Index	Non-Clustered Index
Definition	Index that defines the physical order of data in a table.	Index that does not define the physical order of data in a table.
Structure	B-tree structure, with the data pages arranged in the same order as the index.	B-tree structure, with separate index pages and data pages.
Number	Only one clustered index can be created per table.	Multiple non-clustered indexes can be created per table.
Columns	Can be created on any column(s) in a table, but only one clustered index can be created per table.	Can be created on any column(s) in a table.
Impact on Table	Affects the order of the data in the table.	Does not affect the order of the data in the table.
Query Performance	Generally provides faster query performance for range queries and table scans.	Generally provides faster query performance for exact match queries.
Maintenance	More difficult to maintain, as any changes to the index require reordering the data pages.	Easier to maintain, as any changes to the index do not require reordering the data pages.
Storage	Requires more storage space, as the data pages are physically arranged in the same order as the index.	Requires less storage space, as the index pages and data pages are separate.


28. What is the purpose of the GROUP BY clause in SQL?


The GROUP BY clause in SQL is used to group rows that have the same values in one or more columns into summary rows, like computing the sum, average, count, or other aggregate functions over those groups.



The purpose of the GROUP BY clause is to organise data into groups that can be analysed in aggregate, such as calculating total sales by region, average salary by department, or the number of orders by the customer.



Web Development Career Guides



How to Become a Web Developer?	What does a Web Developer do?
Is Web Development a Good Career?	How to Learn Web Development?
How to Become Backend Developer?	How to Become Full Stack Developer?


29. Give an example of a query in SQL using GROUP BY.


Here's an example of a SQL query using GROUP BY:



SELECT region, COUNT(*) as num_orders, SUM(total_price) as total_sales
FROM orders
GROUP BY region;


Here, the query groups the rows in the "orders" table by region and calculates the number of orders and total sales for each region. The result set would show the total number of orders and total sales for each region.



Without the GROUP BY clause, the query would simply calculate the total number of orders and total sales across all regions, rather than grouping them by region.



It is one of the top SQL interview questions for 3 years experience. 



30. What is a recursive query, and how is it useful in SQL?


A recursive query in SQL is a query that references itself in order to build a hierarchical result set. It is also known as a hierarchical or recursive CTE (Common Table Expression) in SQL.



The recursive query is useful in SQL for representing hierarchical relationships between data, such as a tree structure or an organisational chart. It allows you to easily traverse through the levels of the hierarchy and retrieve all related data.



The recursive query is typically written as a CTE, which is a named temporary result set that can be used within a SQL statement. 



The CTE contains two parts: the initial query and the recursive query. The initial query retrieves the starting rows of the hierarchy, while the recursive query references the CTE itself and retrieves the child rows of each parent row until there are no more children.



31. Give an example of a recursive query in SQL.


Here's an example of a recursive query in SQL:



WITH RECURSIVE cte_hierarchy AS (
  SELECT id, name, manager_id
  FROM employees
  WHERE id = 1
  UNION ALL
  SELECT e.id, e.name, e.manager_id
  FROM employees e
  INNER JOIN cte_hierarchy c ON e.manager_id = c.id
)
SELECT id, name, manager_id
FROM cte_hierarchy;


Here, the query retrieves the hierarchical relationship between employees starting from the employee with ID 1. The initial query selects the row with ID 1, and the recursive query joins the employees' table with the CTE to retrieve the child rows of each parent row until there are no more children.



32. Can you explain the difference between a transaction and a batch?


A transaction is a single or multiple database operation that must be executed as a single unit of work. Whereas, a batch is a group of one or more T-SQL statements executed as a single unit. 



Transactions ensure atomicity, consistency, isolation, and durability of operations and provide recovery options in case of system failure. On the other hand, batches group statements for ease of execution and do not provide recovery options.



Parameter	Transaction	Batch
Purpose	To ensure atomicity, consistency, isolation, and durability of one or more database operations	To group one or more T-SQL statements into a single unit of work
Scope	A single or multiple SQL statements within a session	A group of one or more SQL batches executed together
Execution	It executes sequentially and cannot be interrupted. If any operation fails, it rolls back the entire transaction	It executes one batch after another, and each batch operates independently
Commit/Rollback	A transaction must either be committed or rolled back as a single unit	A batch does not have to be committed or rolled back, and individual statements within a batch can be committed or rolled back
Error handling	If an error occurs, the transaction rolls back to its original state	If an error occurs, execution of the batch stops, and any uncommitted transactions are rolled back.
Recovery	Transactions provide recovery options in case of system failure	Batches do not provide recovery options in case of system failure.
Locks and Isolation	Transactions provide the ability to lock rows or tables and specify the level of isolation	Batches do not have the ability to lock rows or tables and do not specify the level of isolation.


33. How do you implement data integrity in a SQL database?


Data integrity in a SQL database is implemented to ensure that data is accurate, consistent, and valid throughout the database. There are several ways to implement data integrity in SQL databases:



a) Primary and Foreign Keys: 


Primary keys are used to ensure that each row in a table is unique, while foreign keys are used to enforce referential integrity between tables. By defining primary and foreign keys, you can prevent duplicate or orphaned data.



b) Constraints: 


Constraints are rules that restrict the values that can be entered into a database. For example, a check constraint can be used to ensure that a salary value is greater than zero.



c) Triggers: 


Triggers are special types of stored procedures that are automatically executed in response to specific database events, such as inserting or updating data. Triggers can be used to enforce complex data integrity rules.



d) Transactions: 


Transactions are used to group database operations into a single unit of work that must be executed as a whole or rolled back if any part of the transaction fails. This ensures that data remains consistent during the execution of multiple operations.



e) Views: 


Views are virtual tables that display a subset of data from one or more tables. By creating views with specific filters and rules, you can ensure that only valid data is displayed to end users.



Suggested Reading: Flutter Interview Questions and Answers



34. What is a stored procedure in SQL, and how do you create and execute one?


A stored procedure is a pre-written, compiled SQL program that is stored in a database and can be executed multiple times. Its role is to simplify complicated database operations, improve performance, and enhance security by controlling access to the underlying database tables.



For setting up a stored procedure in SQL, you can use the CREATE PROCEDURE statement followed by the procedure name and parameter list (if any), and the SQL code that defines the logic of the procedure. 



Example:



Here's an example of a simple stored procedure that selects all records from a table:



CREATE PROCEDURE SelectAllCustomers
AS
BEGIN
  SELECT * FROM Customers
END


To execute a stored procedure, you can use the EXECUTE or EXEC statement followed by the procedure name and any required parameters. 



Here's an example of how to execute the stored procedure created above:



EXEC SelectAllCustomers


Stored procedures can also be executed with parameters that allow for dynamic filtering of the data returned. 



Here's an example of a stored procedure that selects records from a table based on a specific customer name:



CREATE PROCEDURE SelectCustomerByName
  @CustomerName varchar(50)
AS
BEGIN
  SELECT * FROM Customers WHERE CustomerName = @CustomerName
END


To execute this stored procedure, you would pass in the customer name parameter as follows:



EXEC SelectCustomerByName 'ABC Company'



35. How do you handle deadlock situations in SQL?


In SQL databases, deadlocks can occur when two or more transactions are in a waiting state, each waiting for the other to release resources necessary to complete their respective tasks. This can result in a situation where both transactions are blocked and cannot proceed, leading to a "deadlock".



To handle deadlock situations in SQL, you can take the following steps:



a) Identify the source of the deadlock: 


You can use SQL Server Profiler or Trace Flags to capture deadlock information and identify the source of the problem.



b) Kill one of the transactions: 


You can use the KILL statement to terminate one of the transactions involved in the deadlock. However, this approach is not always the best solution, as it can cause data inconsistency and result in data loss.



c) Increase lock timeout: 


You can increase the lock timeout value for the SQL Server instance or specific queries to allow more time for transactions to complete. However, this approach can lead to longer query execution times.



d) Improve indexing: 


You can optimize your database indexing to reduce the need for locks and improve query performance. This can help to minimize the likelihood of deadlocks occurring.



e) Restructure transactions: 


You can restructure your SQL transactions to reduce the likelihood of deadlocks occurring. For example, you can minimize the duration of transactions, or change the order in which transactions are executed.



These types of topics are an important part of the interview questions and answers for SQL. 






36. How do you implement security in a SQL database?


Implementing security in a SQL database is an important aspect of database administration. Here are some steps to follow for implementing it:



a) Secure access to the database server: 


Ensure that the database server is physically secure and that only authorized users have access to it.



b) Create strong passwords: 


Require users to create strong passwords, and enforce password policies such as password complexity, expiration, and lockout after a certain number of failed attempts.



c) Limit access to the database: 


Assign database roles and permissions to control access to the database, and restrict access to sensitive data to only authorized users.



d) Use encryption: 


Use encryption to protect sensitive data, such as credit card numbers and social security numbers. SQL Server provides built-in encryption features, such as Transparent Data Encryption (TDE) and Always Encrypted.



e) Implement auditing and monitoring: 


Implement auditing and monitoring tools to track and log database activity, and set up alerts for suspicious activity.



f) Patch and update regularly: 


Keep the SQL Server updated with the latest patches and updates to address known security vulnerabilities.



g) Use firewalls and network security: 


Implement firewalls and network security to protect the database server from external threats.



h) Follow industry best practices: 


Follow industry best practices for security, such as those outlined by the Center for Internet Security (CIS) and the National Institute of Standards and Technology (NIST).



37. How do you implement backup and recovery strategies in SQL?


We can implement backup and recovery strategies in SQL using the following tips:



a) Determine the appropriate backup strategy: 


Determine the appropriate backup strategy based on the size and complexity of the database. Common backup strategies include full backups, differential backups, and transaction log backups.



b) Schedule regular backups: 


Schedule regular backups to ensure that data is backed up at regular intervals. The frequency of backups depends on the volume of data and the recovery point objective (RPO) and the recovery time objective (RTO) for the database.



c) Test backups regularly: 


Test backups regularly to ensure that they are successful and that data can be restored in case of a disaster.



d) Store backups in a secure location: 


Store backups in a secure location to protect them from physical and logical damage. The backup location should be secure and accessible only to authorised personnel.



e) Implement a recovery plan: 


Develop a recovery plan that outlines the steps to be taken in case of a disaster, such as a hardware failure or a natural disaster. The recovery plan should include steps for restoring backups and bringing the database back online.



f) Automate backups: 


Use automation tools to simplify the backup and recovery process. Automation tools can help to reduce the risk of human error and ensure that backups are taken at regular intervals.



g) Monitor the backup process: 


Monitor the backup process to ensure that backups are taken as scheduled and that there are no errors. This can help to identify issues early and prevent data loss.



38. Can you explain the concept of database replication, and how is it useful?


Database replication is the process of creating and maintaining multiple copies of a database in different locations. The purpose of database replication is to improve the availability and reliability of the database and to support distributed computing environments. 



Here are some benefits of database replication:



a) Improved availability: 


By creating multiple copies of the database, database replication improves the availability of the database. If one copy of the database goes down, the application can still access another copy of the database.



b) Improved performance: 


Database replication can improve performance by distributing the workload across multiple copies of the database. This can help to reduce the load on any one database server, and improve the overall performance of the database.



c) Disaster recovery: 


Database replication can also be used as part of a disaster recovery strategy. By replicating the database to a secondary location, you can ensure that the database can be restored in case of a disaster, such as a natural disaster or a hardware failure.



d) Geographic distribution: 


Database replication can support the geographic distribution of the database. This is useful in distributed computing environments where applications need to access the database from different locations around the world.



39. What are the different types of database replication?


a) Master-slave replication:


In master-slave replication, there is one master database and one or more slave databases. The master database is the primary database, and all changes are made to the master database. The changes are then replicated to the slave databases.



b) Multi-master replication: 


In multi-master replication, there are multiple master databases, and all databases can accept changes. Changes made to one master database are then replicated to the other master databases.



c) Snapshot replication: 


In snapshot replication, the database is replicated at a specific point in time, rather than continuously. This is useful for reporting and data analysis purposes.



40. How do you handle large amounts of data that are required to be inserted or updated in the database?


Handling large amounts of data that need to be inserted or updated in a database can be challenging. But there are several strategies that can be used to optimise performance and improve efficiency. 



a) Use batch processing: 


Instead of inserting or updating one record at a time, it can be more efficient to process data in batches. 



This can reduce the number of round-trips between the application and the database and improve performance. Some database drivers support batch processing natively, and many ORM frameworks also have support for batching.



b) Optimise indexes: 


Indexes can significantly improve the performance of queries, but they can also slow down insert and update operations. 



If you're inserting or updating a large number of records, it may be more efficient to temporarily disable indexes and then rebuild them once the operation is complete.



c) Use data partitioning: 


Data partitioning involves splitting large tables into smaller ones based on a partition key, such as date, region, or product type. It helps you boost performance by reducing the amount of data required to be scanned for queries or updates.



d) Use compression: 


Compressing data before it is inserted into the database can reduce the amount of disk space required. It improves performance by reducing the amount of data that needs to be transferred between the application and the database server.



Suggested Reading: Angular Interview Questions and Answers



SQL Interview Questions on Queries


Queries are at the heart of SQL, and employers often ask SQL queries interview questions to test a candidate's ability to write efficient and effective queries. 



The queries are used to retrieve and manipulate data from databases, and it's essential to have a deep understanding of SQL syntax and logic to write effective queries.



Queries in SQL interview questions can cover a wide range of topics, including selecting data from tables, filtering data, sorting data, grouping data, and joining data from multiple tables. 



You can also be asked to write SQL queries from scratch or analyse existing queries and optimise them for performance.



What is a SQL query?


Can you explain the SELECT statement in SQL?


What is the purpose of the WHERE clause in a SQL query?


How do you retrieve data from multiple tables using SQL?


How do you join two or more tables in SQL?


Can you explain the difference between INNER JOIN and OUTER JOIN?


What is a subquery, and how is it used in SQL?


How do you use the GROUP BY clause in SQL?


Can you explain the difference between the HAVING and WHERE clauses?


How do you use the ORDER BY clause in SQL?


How do you use the LIMIT clause in SQL?


How do you use the UNION operator in SQL?


Can you explain the difference between UNION and UNION ALL?


What is a correlated subquery, and how is it used in SQL?


How do you use the EXISTS operator in SQL?


How do you use the IN operator in SQL?


How do you use the LIKE operator in SQL?


Can you explain the difference between a stored procedure and a function in SQL?


How do you pass parameters to a SQL query?


Can you explain the purpose of the DISTINCT keyword in a SQL query?



SQL Interview Questions on Joins


Joining tables is a fundamental concept in databases, and SQL interview questions on joins are a common way for employers to test a candidate's knowledge of it. The joins are used to combine data from two or more tables based on a common column or key, allowing for more complex queries and data analysis.



Interview questions on SQL joins can cover a wide range of topics, including inner joins, outer joins, self-joins, and cross joins. You can also be asked to write SQL queries that involve multiple tables or analyse existing queries and optimise them for performance.



What is a SQL join?


Can you explain the different types of SQL joins?


What is the difference between INNER JOIN and OUTER JOIN?


Can you explain the difference between LEFT JOIN and RIGHT JOIN?


How do you join more than two tables in SQL?


How do you perform a self-join in SQL?


Can you explain the difference between a cross join and an inner join?


What is a natural join, and how is it different from a regular join?


How do you use aliases when joining tables in SQL?


How do you handle null values when joining tables in SQL?


How do you optimise SQL joins for better performance?


What is a subquery, and how is it used in SQL joins?


Can you explain the concept of a join condition in SQL?


How do you join tables on multiple columns in SQL?


How do you join tables with different column names in SQL?


How do you join tables using the ON and USING keywords in SQL?


What is a full outer join, and how is it used in SQL?


How do you join tables from different databases in SQL?


Can you explain the difference between a cartesian product and a join?


How do you troubleshoot issues with SQL joins?






SQL Interview Questions for Testers


In addition to developers and database administrators, testers are also asked SQL interview questions to test their ability to work with databases and perform data-related testing. 



SQL interview questions on testing can cover a wide range of topics, including data validation, data integrity, and data manipulation.



Can you explain the basics of SQL and how it is used in software testing?


How do you retrieve data from a database using SQL?


What is the purpose of the WHERE clause in a SQL query, and how is it useful in testing?


How do you use SQL queries to validate data in a database?


Can you explain the difference between an inner join and an outer join, and how is it useful in testing?


How do you test SQL queries for performance issues?


How do you test SQL queries for accuracy and completeness?


Can you explain the concept of data normalization, and how is it useful in testing?


How do you use SQL queries to test database schema changes?


Can you explain the purpose of the GROUP BY clause in SQL, and how is it useful in testing?


How do you use SQL queries to verify data migrations?


Can you explain the concept of database indexing, and how is it useful in testing?


How do you use SQL queries to test database backup and recovery strategies?


Can you explain the difference between a stored procedure and a function in SQL, and how are they useful in testing?


How do you use SQL queries to test data integrity and consistency?


Can you explain the difference between a subquery and a correlated subquery, and how are they useful in testing?


How do you use SQL queries to test concurrency and locking in a database?


Can you explain the concept of database replication, and how is it useful in testing?


How do you use SQL queries to test security and access control in a database?


Can you explain the difference between a SQL injection attack and a cross-site scripting attack, and how can they be prevented in testing?



SQL Questions for Practice


Practical questions on SQL are a great way to prepare for the interview and ensure that you're confident and comfortable with the language. These questions are designed to test your knowledge of syntax and logic, and they can cover a wide range of topics, including data manipulation, data modeling, and database design.



SQL questions to practice can range from simple queries that retrieve data from a single table to more complex queries that involve multiple tables and require advanced skills. They can also include questions about database management, data normalisation, and data security.



Write a SQL query to retrieve all the records from a table named "customers".


Write a SQL query to retrieve the first name, last name, and email address of all customers whose last name is "Smith".


Write a SQL query to retrieve the total number of orders for each customer.


Write a SQL query to retrieve the top 10 highest-paid employees.


Write a SQL query to retrieve the average salary of all employees.


Write a SQL query to retrieve the names of all customers who have placed an order in the last 30 days.


Write a SQL query to retrieve the names of all customers who have never placed an order.


Write a SQL query to retrieve the number of orders placed by each customer in the year 2021.


Write a SQL query to retrieve the names of all customers who have placed an order for a product with a price greater than $100.


Write a SQL query to retrieve the names of all customers who have placed an order for a product with a price greater than the average price of all products.


Write a SQL query to retrieve the names of all customers who have placed an order for a product that is out of stock.


Write a SQL query to retrieve the names of all customers who have placed an order for a product that is not in stock.


Write a SQL query to retrieve the total revenue generated by each product.


Write a SQL query to retrieve the names of all employees who do not have a manager.


Write a SQL query to retrieve the names of all employees who have at least one subordinate.



Wrapping Up:



SQL is a fundamental language for managing and analysing data, and SQL interviews are an important part of the recruitment process for roles involving data management and analysis. 



Our comprehensive write-up covered a wide range of SQL questions and answers for interview, from basic questions for freshers to advanced questions for experienced professionals, as well as practice questions for candidates to prepare for their upcoming SQL interviews.



By reviewing and practising these questions, you'll be able to demonstrate your expertise in SQL and showcase your ability to work with databases and perform data-related tasks. It's important to not only know the syntax and logic of SQL but also to understand the underlying principles of data management and database design.



Remember to stay calm and confident during your SQL interview, and use these questions as an opportunity to showcase your skills and knowledge of SQL. By doing so, you'll be one step closer to securing your dream job and advancing your career in data management and analysis.

65 вопросов и ответов на собеседовании по PL/SQL (2026 г.)
Автор:
Фиона БраунФиона Браун
обновлено
28 июня 2024

Добавить Guru99 на Google
Вот вопросы и ответы на собеседовании по PL/SQL для новичков и опытных кандидатов, желающих получить работу своей мечты.
 

Содержание:

Вопросы и ответы на собеседовании по PL/SQL для первокурсников
1) Что такое PL SQL?
Oracle PL/SQL — это расширение языка SQL, которое сочетает в себе возможности манипулирования данными SQL с вычислительной мощностью процедурного языка для создания сверхмощных SQL-запросов. PL/SQL обеспечивает бесперебойную обработку операторов SQL за счет повышения безопасности, переносимости и надежности базы данных.
PL/SQL означает «расширения процедурного языка для языка структурированных запросов».

👉 Бесплатная загрузка в формате PDF: Вопросы и ответы для интервью по PL/SQL

2) Различайте % ROWTYPE и TYPE RECORD.
%ТИП СТРОКИ используется, когда запрос возвращает всю строку таблицы или представления.
ТИП ЗАПИСИ с другой стороны, используется, когда запрос возвращает столбец из разных таблиц или представлений.

Например. ТИП r_emp ЗАПИСЬ (sno smp.smpno%type,sname smp sname %type)

e_rec smp%ТИП СТРОКИ

Курсор c1 выбирает smpno,dept из smp;

e_rec c1 %ТИП СТРОКИ

3) Объясните использование курсора.
Курсор — это именованная частная область в SQL, из которой можно получить доступ к информации. Им необходимо обрабатывать каждую строку отдельно для запросов, которые возвращают несколько строк.


4) Покажите код курсора для цикла.
Курсор неявно объявляет %ROWTYPE как индекс цикла. Затем он открывает курсор, получает строки значений из активного набора в полях записи и закрывается, когда все записи обработаны.

Например.

FOR smp_rec IN C1 LOOP

totalsal=totalsal+smp_recsal;

ENDLOOP;
5) Объясните использование триггера базы данных.
Программный модуль PL/SQL, связанный с определенной таблицей базы данных, называется триггером базы данных. Он используется для:

1) Аудит изменений данных.

2) Прозрачно регистрируйте события.

3) Обеспечивать соблюдение сложных бизнес-правил.

4) Поддерживать таблицы реплик

5) Получение значений столбцов

6) Внедрение комплексных разрешений безопасности

6) Каковы два типа исключений.
Часть блока PL/SQL, обрабатывающая ошибки, называется Exception. Они имеют два типа: user_defined и предопределенные.

7) Показать некоторые предопределенные исключения.
DUP_VAL_ON_INDEX

ZERO_DIVIDE

ДАННЫЕ НЕ НАЙДЕНЫ

TOO_MANY_ROWS

CURSOR_ALREADY_OPEN

НЕПРАВИЛЬНЫЙ НОМЕР

INVALID_CURSOR

ПРОГРАММА_ОШИБКА

ВРЕМЯ _ON_RESOURCE

STORAGE_ERROR

ВХОД_ЗАПРЕЩЕН

VALUE_ERROR

и так далее

8) Объясните Raise_application_error.
Это процедура пакета DBMS_STANDARD, которая позволяет выдавать определяемые пользователем сообщения об ошибках из триггера базы данных или сохраненной подпрограммы.

9) Покажите, как вызываются функции и процедуры в блоке PL SQL.
Функция вызывается как часть выражения.

total:=calculate_sal('b644')

Процедура вызывается как оператор в PL/SQL.

calculate_bonus('b644');

СТАТЬИ ПО ТЕМЕ
Обработка исключений в Oracle PL/SQL (примеры)
Oracle PL/SQL Вставка, обновление, удаление и выбор в [Пример]
SQL против PL-SQL против T-SQL – разница между ними
Oracle Тип записей PL/SQL с примерами
10) Объясните две виртуальные таблицы, доступные во время выполнения триггера базы данных.
Столбцы таблицы называются OLD.column_name и NEW.column_name.

Для триггеров, связанных с INSERT, доступны только значения NEW.column_name.

Для триггеров, связанных с DELETE, доступны только значения OLD.column_name.

Для триггеров, связанных с ОБНОВЛЕНИЕМ, доступны оба столбца таблицы.

11) Какие правила следует применять к значениям NULL при сравнении?
1) NULL никогда не бывает ИСТИНОЙ или ЛОЖЬЮ.

2) NULL не может быть равным или неравным другим значениям.

3) Если значение в выражении равно NULL, то само выражение оценивается как NULL, за исключением оператора конкатенации (||).

12) Как компилируется процесс PL SQL?
Процесс компиляции включает в себя проверку синтаксиса, процессы связывания и генерации p-кода.

Проверка синтаксиса проверяет коды PL SQL на наличие ошибок компиляции. Когда все ошибки исправлены, переменным, содержащим данные, присваивается адрес хранилища. Это называется Привязка. P-код — это список инструкций для механизма PL SQL. P-код хранится в базе данных для именованных блоков и используется при следующем выполнении.

13) Различайте синтаксические ошибки и ошибки времени выполнения.
Синтаксическая ошибка может быть легко обнаружена компилятором PL/SQL. Например, неправильное написание.

Ошибка времени выполнения обрабатывается с помощью раздела обработки исключений в файле Блок PL / SQL. Например, оператор SELECT INTO, который не возвращает ни одной строки.

14) Объясните фиксацию, откат и точку сохранения.
Для оператора COMMIT справедливо следующее:

Другие пользователи могут видеть изменения данных, внесенные транзакцией.
Блокировки, полученные в результате транзакции, снимаются.
Работа, выполняемая транзакцией, становится постоянной.
Инструкция ROLLBACK выдается, когда транзакция завершается, и верно следующее.

Работа, выполненная при переходе, отменяется, как если бы она никогда не выполнялась.
Все блокировки, полученные в результате транзакции, снимаются.
Он отменяет всю работу, проделанную пользователем в транзакции. С помощью SAVEPOINT можно отменить только часть транзакции.

15) Определите неявные и явные курсоры.
По умолчанию курсор является неявным. Пользователь не может контролировать или обрабатывать информацию в этом курсоре.

Если запрос возвращает несколько строк данных, программа определяет явный курсор. Это позволяет приложению обрабатывать каждую строку последовательно по мере того, как курсор возвращает ее.

16) Объясните ошибку мутирующей таблицы.
Это происходит, когда триггер пытается обновить строку, которую он использует в данный момент. Это устраняется с помощью представлений или временных таблиц, поэтому база данных выбирает одно и обновляет другое.

17) Когда требуется заявление о декларировании?
Оператор DECLARE используется анонимными блоками PL SQL, например, с автономными несохраненными процедурами. Если он используется, он должен быть первым в отдельном файле.

18) Сколько триггеров можно применить к таблице?
К одной таблице можно применить максимум 12 триггеров.

19) В чем важность SQLCODE и SQLERRM?
SQLCODE возвращает значение номера ошибки для последней обнаруженной ошибки, тогда как SQLERRM возвращает сообщение для последней ошибки.

20) Если курсор открыт, как его найти в блоке PL SQL?
можно использовать переменную состояния курсора %ISOPEN.

Вопросы для собеседования по PL/SQL для опытных
21) Покажите два исключения курсора PL/SQL.
Cursor_Already_Open

Неверный_курсор

22) Какие операторы работают с NULL?
NVL преобразует NULL в другое указанное значение.

var:=NVL(var2,'Hi');

IS NULL и IS NOT NULL можно использовать для проверки того, является ли значение переменной NULL или нет.

23) Имеет ли SQL*Plus движок PL/SQL?
Нет, в SQL*Plus нет встроенного механизма PL/SQL. Таким образом, весь код PL/SQL отправляется непосредственно в ядро ​​базы данных. Это гораздо более эффективно, поскольку каждое утверждение не удаляется индивидуально.

24) Какие пакеты доступны разработчикам PL SQL?
Серия пакетов DBMS_, например DBMS_PIPE, DBMS_DDL, DBMS_LOCK, DBMS_ALERT, DBMS_OUTPUT, DBMS_JOB, DBMS_UTILITY, DBMS_SQL, DBMS_TRANSACTION, UTL_FILE.

25) Объясните три основные части триггера.
Триггерное заявление или событие.
Ограничение
Действие
26) Что такое функции персонажа?
INITCAP, UPPER, SUBSTR, LOWER и LENGTH — это символьные функции. Групповые функции дают результаты на основе групп строк, а не отдельных строк. Это МАКС, МИН, AVG, СЧИТАТЬ и СУММ.

27) Объясните ТТИТЛ и БТИТЛ.
Команды TTITLE и BTITLE, управляющие верхними и нижними колонтитулами отчета.

28) Покажите атрибуты курсора PL/SQL.
%ISOPEN: Проверяет, открыт курсор или нет

%ROWCOUNT: Количество строк, которые обновляются, удаляются или извлекаются.

%FOUND: Проверяет, выбрал ли курсор какую-либо строку. Это правда, если строки извлекаются

%NOT FOUND: Проверяет, выбрал ли курсор какую-либо строку. Это правда, если строки не извлекаются.

29) Что такое пересечение?
Пересечение — это произведение двух таблиц, в котором перечислены только совпадающие строки.

30) Что такое последовательности?
Последовательности используются для генерации порядковых номеров без затрат на блокировку. Его недостатком является то, что порядковый номер теряется при откате транзакции.

31) Как бы вы ссылались на значения столбцов ДО и ПОСЛЕ того, как вы вставили и удалили триггеры?
Используя ключевое слово «new.column name», триггеры могут ссылаться на значения столбца новой коллекции. Используя ключевое слово «old.column name», они могут ссылаться на значения столбцов старой коллекции.

32) Как используются ключевые слова SYSDATE и USER?
SYSDATE относится к текущей системной дате сервера. Это псевдоколонка. USER также является псевдостолбцом, но относится к текущему пользователю, вошедшему в сеанс. Они используются для отслеживания изменений, происходящих в таблице.

33) Как ROWID помогает ускорить выполнение запроса?
ROWID — это логический адрес строки, а не физический столбец. Он состоит из номера блока данных, номера файла и номера строки в блоке данных. Таким образом, время ввода-вывода при получении строки сводится к минимуму, что приводит к ускорению запроса.

34) Для чего используются ссылки на базу данных?
Ссылки на базы данных создаются для формирования связи между различными базами данных или различными средами, такими как тестирование, разработка и производство. Ссылки на базу данных доступны только для чтения и позволяют получить доступ и к другой информации.

35) Что делает выбор курсора?
При выборе курсора набор результатов считывается построчно.

36) Что делает закрытие курсора?
Закрытие курсора очищает частную область SQL, а также освобождает память.

37) Объясните использование управляющего файла.
Это двоичный файл. Он записывает структуру базы данных. Он включает в себя расположение нескольких файлов журналов, имена и временные метки. Их можно хранить в разных местах, чтобы облегчить поиск информации в случае повреждения одного файла.

38) Объясните последовательность
Согласованность показывает, что данные не будут отображаться другим пользователям до тех пор, пока данные не будут зафиксированы, поэтому согласованность сохраняется.

39) Различия между анонимными блоками и подпрограммами.
Анонимные блоки — это безымянные блоки, которые нигде не сохраняются, пока подпрограммы компилируются и сохраняются в базе данных. Они компилируются во время выполнения.

40) Разница между DECODE и CASE.
Операторы DECODE и CASE очень похожи, но CASE — это расширенная версия DECODE. DECODE не допускает использования заявлений о принятии решений вместо них.

выберите decode(totalsal=12000,'high',10000,'medium') как decode_tesr из smp, где smpno в (10,12,14,16);

Этот оператор возвращает ошибку.

CASE напрямую используется в PL SQL, а DECODE используется в PL SQL только через SQL.

41) Объясните автономную транзакцию.
Автономная транзакция — это независимая транзакция от основной или родительской транзакции. Он не является вложенным, если он запускается другой транзакцией.

Существует несколько ситуаций, в которых можно использовать автономные транзакции, такие как регистрация событий и аудит.

42) Различайте SGA и PGA.
SGA означает глобальную область системы, тогда как PGA означает глобальную область программы или процесса. PGA выделяется только 10% объема ОЗУ, а SGA - 40% объема ОЗУ.

43) Каково расположение Pre_defined_functions.
Они хранятся в стандартном пакете под названием «Функции, процедуры и пакеты».

44) Объясните полиморфизм в PL SQL.
Полиморфизм — особенность ООП. Это возможность создавать переменную, объект или функцию в нескольких формах. PL/SQL поддерживает полиморфизм в форме перегрузки программного модуля внутри функции-члена или пакета. Во время перегрузки следует избегать однозначной логики.

45) Каково использование MERGE?
MERGE используется для объединения нескольких операторов DML в один.

Синтаксис: объединиться с именем таблицы.

использование (запрос)

включено (условие соединения)

когда не совпадает, тогда

команда [вставить/обновить/удалить]

при совпадении тогда

команда [вставить/обновить/удалить]

Вопросы для собеседования по PL/SQL для людей с опытом работы более 5 лет
46) Могут ли одновременно выполняться 2 запроса в системе распределенной базы данных?
Да, они могут выполняться одновременно. Один запрос всегда независим от второго запроса в системе распределенных баз данных на основе двухфазной фиксации.

47) Объясните Raise_application_error.
Это процедура пакета DBMS_STANDARD, которая позволяет выдавать определяемые пользователем сообщения об ошибках из триггера базы данных или сохраненной подпрограммы.

48) Для чего используется параметр out, хотя оператор return также может использоваться в pl/sql?
Параметры Out допускают использование более одного значения в вызывающей программе. Параметр Out не рекомендуется использовать в функциях. Процедуры можно использовать вместо функций, если требуется несколько значений. Таким образом, эти процедуры используются для выполнения параметров Out.

49) Как бы вы конвертировали дату в юлианский формат?
Мы можем использовать строку формата J:

SQL > выберите to_char(to_date('29-Mar-2013','dd-mon-yyyy'),'J') как юлианский из двойного;

Джулиан

50) Объясните КАТУШКУ
Команда Spool может печатать выходные данные операторов sql в файл.

катушка/tmp/sql_outtxt

выберите smp_name, smp_id из smp, где dept='accounts';

катушка выключена;

51) Укажите, из чего состоит пакет PL/SQL?
Пакет PL/SQL состоит из

Таблица PL/SQL и операторы TYPE записи
Процедуры и функции
курсоры
Переменные (таблицы, скаляры, записи и т. д.) и константы
Имена исключений и прагмы для связи номера ошибки с исключением.
курсоры
52) Назовите преимущества пакетов PL/SQL?
Это дает несколько преимуществ, таких как

Принудительное сокрытие информации: Он предлагает свободу выбора, сохранять ли данные конфиденциальными или общедоступными.
Дизайн сверху вниз: Вы можете разработать интерфейс для кода, скрытого в пакете, до того, как вы фактически реализуете сами модули.
Сохранение объекта: Объекты, объявленные в спецификации пакета, ведут себя как глобальные данные для всех объектов PL/SQL в приложении. Вы можете изменить пакет в одном модуле, а затем перенести эти изменения в другой модуль.
Объектно-ориентированный дизайн: Пакет дает разработчикам полный контроль над тем, как можно использовать модули и структуры данных внутри пакета.
Гарантия целостности транзакции: Обеспечивает уровень целостности транзакций.
Улучшение производительности: RDBMS автоматически tracпроверяет корректность всех программных объектов, хранящихся в базе данных, и повышает производительность пакетов.
53) Укажите, какие существуют различные методы для trace — это код PL/SQL?
TracАнализ кода — это важный метод измерения производительности кода во время выполнения. Существуют различные методы для этого. tracвключает в себя

DBMS_APPLICATION_INFO
СУБД_TRACE
DBMS_SESSION и DBMS_MONITOR
утилиты trcess и tkproof
54) Упомяните, что делает иерархический профилировщик?
Иерархический профилировщик мог бы профилировать вызовы, выполняемые в PL/SQL, помимо устранения разрыва между недостатками и ожидаемыми показателями производительности. tracК преимуществам иерархического профилировщика относятся:

Отдельная отчетность по SQL и затраты времени PL/SQL
Сообщает количество различных вызовов подпрограмм, выполненных в PL/SQL, и время, затраченное на каждый вызов подпрограммы.
Несколько интерактивных аналитических отчетов в формате HTML с использованием утилиты командной строки.
Более эффективен, чем обычные профилировщики и другие подобные устройства. tracкоммунальные услуги
55) Упомяните, что позволяет вам делать PLV msg?
Сообщение PLV позволяет вам

Назначьте отдельное текстовое сообщение указанной строке в таблице PL/SQL.
Он извлекает текст сообщения по номеру
Он автоматически заменяет стандартные сообщения вашими собственными. Oracle сообщения об ошибках с переключателем ограничения
Пакетная загрузка номеров и текста сообщений из таблицы базы данных напрямую из таблицы PLV msg PL/SQL.
56) Назовите, что предлагает пакет PLV (PL/Vision)?
Значение нулевой замены
Набор процедур утверждения
Разные утилиты
Набор констант, используемых в PL Vision
Предопределенные типы данных
57) Назовите, в чем польза PLVprs и PLVprsps?
ПЛВпрс: Это расширение для анализа строк для PL/SQL и самый низкий уровень функциональности анализа строк.
ПЛВпрспс: Это пакет самого высокого уровня для анализа исходного кода PL/SQL на отдельные атомы. Для выполнения работы он полагается на другие пакеты синтаксического анализа.
58) Объясните, как можно заранее скопировать файл в содержимое файла и файл в таблицу PL/SQL PL/SQL?
Одним вызовом программы – «процедура копирования», вы можете скопировать все содержимое одного файла в другой файл. А чтобы скопировать содержимое файла непосредственно в таблицу PL/SQL, вы можете использовать программу «файл2pstab».

59) Объясните, как заранее выполняется обработка исключений PL/SQL?
Для пакетов обработка исключений PL/SQL предоставляет эффективный плагин PLVexc. PLVexc поддерживает четыре различных действия по обработке исключений.

Продолжить обработку
Запишите, а затем продолжите
Остановить обработку
Запишите, а затем остановите обработку
Для тех исключений, которые возникают повторно, вы можете использовать оператор RAISE.

60) Укажите, с какой проблемой можно столкнуться при записи информации журнала в таблицу базы данных в PL/SQL?
При записи информации в таблицу базы данных возникает проблема: информация становится доступна только после того, как новые строки будут зафиксированы в базе данных. Это может быть проблемой, поскольку PLVlog обычно используется для... track ошибок, и во многих таких случаях текущая транзакция завершалась неудачей или требовала отката.

61) Укажите, какая функция используется для передачи журнала таблицы PL/SQL в таблицу базы данных?
Чтобы передать журнал таблицы PL/SQL, используйте функцию таблицы журнала базы данных. «ПРОЦЕДУРА ps2db» используется.

62) Когда вам нужно использовать точку сохранения PLVlog по умолчанию для «отката к»?
Точка сохранения «отката к» по умолчанию для PLVlog используется, когда пользователи включили действие отката и не предоставили альтернативную точку сохранения при вызове put_line. Точка сохранения по умолчанию инициализируется константой c none.

63) Почему PLVtab считается самым простым способом доступа к таблице PL/SQL?
Таблица PL/SQL наиболее близка к массивам в PL/SQL, и для доступа к этой таблице необходимо сначала объявить тип таблицы, а затем объявить саму таблицу PL/SQL. Но используя PLVtab, вы можете избежать определения собственного типа таблицы PL/SQL и упростить доступ к таблице данных PL/SQL.

64) Упомяните, что позволяет вам делать PLVtab, когда вы показываете содержимое таблиц PL/SQL?
PLVtab позволяет вам выполнять следующие действия при отображении содержимого таблиц PL/SQL.

Отображение или скрытие заголовка таблицы
Отображать или скрывать номера строк для значений таблицы.
Показывать префикс перед каждой строкой таблицы
65) Объясните, как можно сохранить или поместить сообщение в таблицу?
Сохранить сообщение в таблице можно двумя способами.

Загружать отдельные сообщения с обращениями к add_text процедуры
Загружать наборы сообщений из таблицы базы данных с помощью load_from_dbms процедуры
66) Укажите, для чего используется функция «процедура модуля» в PL/SQL?
«Процедура модуля» позволяет преобразовать все строки кода в определенную программную единицу одним вызовом процедуры. Есть три аргумента для модулей

модуль_вход
кор_ин
Последний_модуль_вход
67) Упомяните, что делают PLVcmt и PLVrb в PL/SQL?
PL/Vision предлагает два пакета, которые помогут вам управлять обработкой транзакций в приложении PL/SQL. Это PLVcmt и PLVrb.

PLVcmt: Пакет PLVcmt охватывает логику и сложность обработки коммитов
ПЛВрб: Он предоставляет программный интерфейс для отката активности в PL/SQL.


Видеоигры
Детям
Всё о Дзене
Вакансии
Дзен на 
iOS и Android

Ещё

Тайский SPA-салон в Жулебино! Настоящие мастера из Тайланда

taisun.ru
8 495 295-57-07
Реклама
Калинкин
304 подписчика
Подписаться

20 часто задаваемых вопросов и ответов при собеседовании по SQL [2023]
27 апреля 2023
2640
9 мин
Оглавление
Каковы основные команды SQL?
Каковы четыре важных оператора SQL?
Что означает первичный ключ в SQL?
Показать ещё
Вопросы по SQL
Язык структурированных запросов (SQL) - это стандартный язык программирования, используемый администраторами баз данных и аналитиками данных для запросов к базам данных. Он широко используется в языках программирования веб-сайтов, приложений и других платформ.

Он используется для доступа к данным в базе данных и манипулирования ими, включая создание и изменение таблиц и столбцов, и запрос данных с помощью команд SQL.

Этот пост, несомненно, даст вам некоторое представление, если вы ищете вопросы и ответы, которые можно использовать при подготовке к собеседованию по SQL. При приеме на работу инженера по обработке данных, аналитика данных, администратора базы данных и т.д. Следует ожидать следующих вопросов.

Каковы основные команды SQL?
Некоторые из наиболее важных команд SQL являются:

SELECT – извлекает данные из базы данных.
CREATE TABLE – создает новую таблицу.
DELETE – удаляет данные из базы данных.
INSERT INTO – вставляет новые данные в базу данных.
ALTER DATABASE – изменяет базу данных.
CREATE DATABASE – создает новую базу данных.
UPDATE – обновляет данные в базе данных.
Каковы четыре важных оператора SQL?
Основные инструкции SQL разделены на эти категории:

Инструкции языка определения данных (DDL)
Инструкции языка обработки данных (DML)
Инструкции языка управления данными (DCL)
Инструкции языка управления транзакциями (TCL)
Что означает первичный ключ в SQL?
Первичный ключ - это столбец (или набор столбцов), который позволяет однозначно идентифицировать каждую строку в базе данных. Базы данных SQL придают большое значение первичным ключам. Они предоставляют каждой строке в таблице базы данных уникальный идентификатор. Первичный ключ может состоять из одного или нескольких полей, и в каждой таблице может быть только один первичный ключ.

Что такое типы данных SQL?
Тип данных - это атрибут, который описывает тип данных, которые объект может хранить, таких как двоичные строки, числовые данные, символьные данные, финансовые данные, данные даты и времени и так далее.

В SQL типы данных подразделяются на следующие группы:

Точные цифры
Приблизительные цифры
Дата и время
Символьные строки
Символьные строки в Юникоде
Двоичные строки
Где имена пользователей и пароли хранятся в SQL Server?
Имена пользователей и пароли хранятся в sys.server principals таблицы SQL и sys.sql для входа в систему соответственно. Пароли не хранятся в обычном тексте.

Что такое SQL-инъекция?
Атаки с использованием SQL-инъекций являются одним из наиболее распространенных типов кибератак на сегодняшний день. Они позволяют злоумышленникам получать доступ к данным, манипулируя базой данных приложения. Это может привести к широкому спектру негативных последствий, от финансовых потерь до потери конфиденциальных данных. Лучший способ защиты от атак с использованием SQL-инъекций - это в первую очередь предотвратить их возникновение.

Что такое триггер в SQL и его типы?
Триггер - это особый тип хранимой процедуры, которая автоматически запускается при возникновении события на сервере базы данных. Триггеры используются для оценки данных до или после модификации данных с использованием инструкций DDL и DML.

Существует три типа триггеров – LOGON, DDL и DML.

Триггеры ВХОДА В СИСТЕМУ: Эти триггеры запускаются, когда пользователь инициирует событие входа в систему.
Триггеры DDL запускаются всякий раз, когда выдается команда DDL, такая как CREATE, ALTER или DROP.
Триггеры DML: они запускаются всякий раз, когда команда DML изменяет данные. Сопоставимо со ВСТАВКОЙ, ОБНОВЛЕНИЕМ и УДАЛЕНИЕМ
Как бы вы провели различие между однорядными и многострочными функциями?
На одну строку в таблице могут влиять функции одной строки одновременно. Они выполняют строку, а затем просто возвращают один результат. Хорошо известно, что преобразования длины и регистра являются однорядными функциями.

На строки таблицы может влиять множество функций строк одновременно. Они также известны как групповые функции, выполняющие несколько строк перед возвратом одного вывода.

Что такое нормализация базы данных и каковы ее основные четыре типа в SQL?
Нормализация базы данных - это процесс, посредством которого данные упорядочиваются для более быстрого доступа и уменьшения избыточности данных. Столбцы и таблицы базы данных упорядочиваются во время нормализации, чтобы убедиться, что любые зависимости правильно поддерживаются ограничениями целостности базы данных.

Четыре типа процессов нормализации базы данных заключаются в следующем:

Первая обычная форма (1 NF)
Вторая нормальная форма (2 NF)
Третья обычная форма (3 NF)
Нормальная форма Бойса Кодда или четвертая нормальная форма (BCNF или 4 NF)
Что такое индексы и ограничения в SQL?
Индексы являются одним из наиболее важных понятий в SQL. Они позволяют нам быстро находить определенные строки данных в больших базах данных. Они также помогают нам применять ограничения, которые представляют собой правила, указывающие базе данных, как вести себя при выполнении определенных условий.

Индексы используются для повышения производительности запросов за счет ускорения поиска данных в таблицах. Они также используются для улучшения читаемости данных в таблицах.

Ограничения используются для ограничения типа данных, которые могут помещаться в таблицу. Это гарантирует точность и надежность данных в таблице. Если есть какое-либо нарушение между ограничением и действием с данными, действие прерывается.

Каковы обычно используемые ограничения SQL?
Обычно используемые ограничения SQL являются:

CREATE INDEX: Эта команда гарантирует, что для таблиц будут созданы индексы, что упростит поиск данных.
FOREIGN KEY: внешний ключ таблицы должен соединять таблицы с похожими атрибутами.
DEFAULT: если для полей столбца не указано значение, для этих полей предоставляется значение по умолчанию.
UNIQUE: это указывает, что каждое значение в столбце должно быть различным.
PRIMARY KEY: первичный ключ таблицы должен идентифицировать каждую строку.
NOT NULL: это условие гарантирует, что значения NULL не будут приняты столбцами.
CHECK: Это гарантирует, что каждое поле столбца соответствует заранее установленному требованию.
Равен ли NULL 0 в SQL?
Нулевое значение в SQL обозначает значение, которое недоступно или назначено. Пробел (‘ ‘) или ноль (0) не эквивалентны значению NULL. Вы не можете сравнить значение NULL с любым другим значением, используя операторы сравнения, такие как “=” или”>”, поскольку оно не может быть равно или неравно любому другому значению.

Как предотвратить атаки с использованием SQL-инъекций?
Наряду с постоянным сканированием и тестированием на проникновение, такие методы безопасности, как проверка входных данных, очистка, подготовленные инструкции и параметризованные SQL-запросы, имеют решающее значение для предотвращения атак с использованием SQL-инъекций. Кроме того, быстрые средства защиты, такие как брандмауэр, помогли бы защитить базу данных SQL.

Что такое динамический SQL и когда вы можете его использовать?
Динамический SQL - это функция, которую вы можете использовать для изменения ваших запросов во время выполнения на основе одного или нескольких критериев, включая текущую дату, текущее время или любые другие критерии, которые вы выбираете.

Вы можете использовать динамический SQL для значимого изменения ваших запросов, что может помочь вам достичь ваших целей или просто улучшить ваши навыки программирования. Независимо от того, создаете ли вы новое приложение, улучшаете базу данных или добавляете функциональность хранилища данных в свою производственную систему, вы можете использовать Dynamic SQL для выполнения всего этого.

Каковы различные типы ключей в SQL?
Первичный ключ: каждая строка или запись в таблице базы данных уникально идентифицируется полем, называемым первичным ключом. Уникальное значение должно быть в первичном ключе. Поля первичного ключа не могут содержать нулевые значения. В таблице, состоящей из одного или нескольких полей, может быть только один первичный ключ.

Внешний ключ: поле или группа полей в таблице, которая относится к первичному ключу другой таблицы, называется внешним ключом. Таблицы с первичными ключами называются родительскими таблицами, в то время как таблицы с внешними ключами называются дочерними таблицами.

Суперключ: суперключ - это ключ или набор ключей, которые помогают идентифицировать записи в таблице. Хотя для идентификации записи требуются не все атрибуты, суперключ может содержать один или несколько из них.

Ключ-кандидат: Ключ-кандидат - это подмножество суперключов, которые могут использоваться для идентификации записей в базе данных на основе одного или нескольких атрибутов. В отличие от Superkey, все функции ключа-кандидата должны быть полезны для идентификации записей.

Составной ключ: Составной ключ представляет собой комбинацию двух или более столбцов в таблице, которая используется для идентификации строк в таблице. Составной ключ - это первичный ключ с каким-либо другим атрибутом или столбцом.

Какие типы индексов существуют в SQL?
Ниже приведены типы индексов в SQL

Хэш-индекс
Некластеризованный, оптимизированный для памяти
Кластеризованный индекс
Некластеризованный индекс
Уникальный индекс
Индекс хранилища столбцов
Индекс с включенными столбцами
Индекс по вычисляемым столбцам
Отфильтрованный индекс
Пространственный индекс
XML-индекс
Полнотекстовый указатель
Что вы подразумеваете под буферным пулом и упоминаете о его преимуществах?
В SQL пул буферов также называется буферным кэшем. Пул буферов может использоваться всеми ресурсами для хранения своих кэшированных страниц данных. При настройке экземпляра SQL Server можно указать размер пула буферов. Размер пула буферов определяет, сколько страниц он может содержать.

Ниже приведены преимущества пула буферов:

Улучшения в производительности ввода-вывода
Рост пропускной способности транзакций
Сокращение задержек ввода-вывода
Повышение производительности чтения
Что вы подразумеваете под зависимостью и упоминаете различные зависимости?
Когда на один объект ссылается имя в инструкции SQL, хранящейся в другом объекте, устанавливается зависимость между двумя объектами. Термин “ссылочный объект” относится к объекту, который появляется в выражении SQL, тогда как термин “ссылающийся объект” относится к объекту, который содержит выражение SQL.

Ниже приведены различные типы зависимостей в SQL.

Функциональная зависимость
Полнофункциональная зависимость
Многозначная зависимость
Транзитивная зависимость
Частичная зависимость
Что такое соединения SQL и какие соединения SQL наиболее популярны?
Объединения являются фундаментальной частью управления данными в SQL. Они позволяют объединить две или более таблиц для создания единой таблицы, которую можно использовать для анализа данных. Они также предоставляют способ фильтрации результатов на основе критериев в одной таблице, что может быть полезно при попытке найти определенные строки или столбцы в большой таблице.

В SQL существует четыре основных типа соединений: ВНУТРЕННЕЕ СОЕДИНЕНИЕ, ВНЕШНЕЕ СОЕДИНЕНИЕ, ПЕРЕКРЕСТНОЕ СОЕДИНЕНИЕ и САМОСТОЯТЕЛЬНОЕ СОЕДИНЕНИЕ.

Что такое операторы set в SQL?
Данные из одной или нескольких таблиц одного типа могут быть объединены с помощью оператора set. Операторы SQL set и SQL join похожи, но есть некоторые ключевые различия. Операторы SQL set собирают записи из разных запросов, тогда как соединения SQL объединяют столбцы из разных таблиц. Составные SQL-запросы - это те, которые включают операции set.

Топ-50 вопросов по базам данных на техническом собеседовании
#Разное  
Пройдите тест, узнайте какой профессии подходите
Сколько вам лет
0%
Для кого эта статья:

Люди, готовящиеся к техническим собеседованиям на позицию специалиста по базам данных
Начинающие и опытные разработчики, желающие улучшить свои навыки SQL и понимание баз данных
Студенты и выпускники курсов по программированию и аналитике данных, стремящиеся попасть в IT сферу

Перед техническим собеседованием на позицию специалиста по базам данных многие испытывают нервозность и неуверенность. Неудивительно – разнообразие вопросов в этой области огромно: от базового синтаксиса SQL до тонкостей настройки производительности и выбора между различными типами СУБД. Знание типичных вопросов и правильных стратегий ответа на них превращает интервью из стрессового испытания в возможность продемонстрировать свою экспертизу. Подготовил для вас 50+ проверенных вопросов, которые реально задают на собеседованиях, и рассказываю, как отвечать на них, чтобы произвести максимальное впечатление. 🚀

Что спрашивают на собеседовании: 50+ вопросов по базам данных
Подготовка к техническому собеседованию по базам данных требует систематического подхода. Вопросы на собеседовании обычно разделяются на несколько ключевых категорий, каждая из которых проверяет различные аспекты вашей компетенции. 📊

Алексей Петров, технический директор

Однажды мы искали разработчика в команду, отвечающую за критически важную финансовую систему. Один из кандидатов особенно запомнился. Когда я спросил его о нормализации, он не просто дал определение, а рассказал, как в предыдущем проекте столкнулся с денормализованной схемой, вызывавшей аномалии при обновлении. Он продемонстрировал, как перепроектировал структуру, применяя 3НФ, и как это улучшило целостность данных. Затем объяснил, почему в некоторых случаях сознательно отступил от строгой нормализации ради производительности. Этот практический подход к теории мгновенно выделил его среди других претендентов. Мы наняли его, и за три года он вырос до ведущего архитектора баз данных.

Вот основные категории вопросов, которые вы можете ожидать:

Категория вопросов	Частота появления	Сложность
Основы SQL	Очень высокая (95%)	Начальная/Средняя
Проектирование БД	Высокая (80%)	Средняя
Оптимизация и индексы	Высокая (75%)	Средняя/Высокая
Транзакции и изоляция	Средняя (60%)	Высокая
NoSQL технологии	Средняя (50%)	Средняя
Практические задания	Высокая (70%)	Зависит от позиции
Независимо от уровня позиции, рекрутеры всегда проверяют следующие фундаментальные вопросы:

Что такое первичный и внешний ключи? Какую роль они играют?
Объясните разницу между INNER JOIN, LEFT JOIN, RIGHT JOIN и FULL JOIN.
Что такое нормализация? Расскажите о формах нормализации.
Как работают индексы? Когда их использование может быть неэффективным?
Что такое транзакции и зачем они нужны?
Расскажите о различиях между кластерным и некластерным индексами.
Объясните разницу между DELETE, TRUNCATE и DROP.
Что такое представления (views) и когда их использовать?
Какие типы соединений (JOIN) вы знаете и когда их применяете?
Как работают хранимые процедуры? В чем их преимущества и недостатки?
Для позиций среднего и старшего уровня следует также ожидать вопросы о:

Стратегиях масштабирования баз данных
Репликации и шардинге
Оптимизации сложных запросов
Проектировании схем для высоконагруженных систем
Тонкостях различных СУБД (PostgreSQL, MySQL, MS SQL Server, Oracle)
Приготовьтесь также к ситуационным вопросам: "Как бы вы подошли к проектированию базы данных для X?", где X может быть социальной сетью, e-commerce платформой или системой бронирования. Это проверка вашей способности применять теоретические знания к реальным сценариям. 🧩

Фундаментальные SQL вопросы: основы реляционных баз данных
Знание фундаментальных концепций SQL и реляционных баз данных — основа, без которой невозможно пройти техническое собеседование. Вот ключевые вопросы, которые обязательно стоит проработать: 💡

Что такое SQL и каковы его основные компоненты? Объясните, что SQL (Structured Query Language) — это язык программирования для работы с реляционными базами данных. Упомяните DDL (Data Definition Language), DML (Data Manipulation Language), DCL (Data Control Language) и TCL (Transaction Control Language).

Чем отличаются операторы WHERE и HAVING? WHERE фильтрует строки до группировки, а HAVING — после. HAVING работает с агрегированными данными и используется с GROUP BY.

Что такое нормализация и зачем она нужна? Опишите нормализацию как процесс организации данных для минимизации избыточности. Упомяните нормальные формы (1НФ, 2НФ, 3НФ, БКНФ, 4НФ, 5НФ) и их назначение.

Объясните разницу между разными типами JOIN. Детально опишите INNER JOIN, LEFT JOIN, RIGHT JOIN, FULL JOIN и CROSS JOIN, приведите примеры их использования.

Что такое подзапрос? Какие типы подзапросов существуют? Расскажите о вложенных запросах, коррелированных подзапросах и их применении.

Вот более сложные вопросы, которые часто задают кандидатам среднего и высокого уровня:

Объясните разницу между декларативными и процедурными языками. К какому типу относится SQL?
Что такое транзакция? Расскажите о свойствах ACID.
Какие уровни изоляции транзакций существуют? Какие проблемы они решают?
Расскажите о блокировках в БД (shared locks, exclusive locks). Как они связаны с транзакциями?
Что такое deadlock? Как его можно избежать?
Ирина Соколова, ведущий разработчик баз данных

Мы проводили интервью на позицию разработчика с опытом SQL. Один кандидат с уверенным резюме споткнулся на вопросе о разнице между LEFT и RIGHT JOIN. После нескольких неудачных попыток объяснить он признался, что всегда использовал только LEFT JOIN, "переворачивая" таблицы при необходимости.

Это натолкнуло меня на мысль проверить его понимание более фундаментальных концепций. Я нарисовала простую схему с двумя таблицами и попросила написать запрос, возвращающий определённый результат. К моему удивлению, он начал писать запрос без чёткого понимания отношений между таблицами.

Этот опыт показал мне важность проверки не только формальных знаний, но и практического понимания. Теперь я всегда прошу кандидатов объяснить свой ход мыслей и даю практические задания с визуализацией. Настоящее мастерство проявляется не в заученных определениях, а в способности применять концепции на практике.

При подготовке обратите внимание на разницу между теоретическими знаниями и практическим опытом. Интервьюеры ценят кандидатов, способных не просто дать определение, но и объяснить практический контекст.

Вот примеры практико-ориентированных вопросов:

В каких случаях вы бы использовали VIEW вместо обычного запроса?
Когда стоит использовать хранимые процедуры, а когда лучше выполнять логику на уровне приложения?
Приведите пример, когда денормализация базы данных может быть оправданной.
Как бы вы спроектировали схему для системы, где пользователи могут следить за обновлениями других пользователей?
Отвечая на эти вопросы, старайтесь приводить примеры из своего опыта. Это демонстрирует не только знание теории, но и практические навыки решения реальных задач. 🔍

NoSQL и современные тренды: вопросы на собеседовании
С ростом потребности в обработке больших объемов неструктурированных данных, NoSQL базы данных заняли значительное место в современном ландшафте технологий. Готовясь к собеседованию, обязательно изучите этот раздел, особенно если позиция предполагает работу с распределенными системами или большими данными. 🌐

Вот основные вопросы, которые часто задают на собеседованиях по NoSQL:

Объясните основные различия между SQL и NoSQL базами данных. Подчеркните разницу в структуре (схема vs. схема-меньше), масштабируемости (вертикальная vs. горизонтальная), поддержке ACID и моделях данных.

Назовите основные типы NoSQL баз данных и приведите примеры каждого типа. Упомяните документоориентированные (MongoDB, CouchDB), столбцовые (Cassandra, HBase), ключ-значение (Redis, DynamoDB) и графовые (Neo4j, ArangoDB) базы данных.

Что такое CAP-теорема? Как она влияет на выбор базы данных? Объясните компоненты CAP: Consistency (согласованность), Availability (доступность) и Partition tolerance (устойчивость к разделению). Объясните, почему система может гарантировать только два из трех свойств одновременно.

В каких случаях предпочтительнее использовать NoSQL вместо реляционных баз данных? Расскажите о сценариях с большими объемами данных, необходимостью горизонтального масштабирования, работой с неструктурированными данными, высокими требованиями к производительности записи.

Что такое шардинг? Как он реализован в различных NoSQL решениях? Опишите шардинг как способ горизонтального масштабирования путем распределения данных по нескольким серверам и как разные NoSQL базы данных (например, MongoDB, Cassandra) реализуют эту концепцию.

Тип NoSQL БД	Примеры	Лучшие сценарии использования	Ограничения
Документоориентированные	MongoDB, CouchDB	Контент-менеджмент, мобильные приложения	Сложные транзакции, связи между документами
Столбцовые	Cassandra, HBase	Временные ряды, большие данные	ACID-транзакции, сложные запросы
Ключ-значение	Redis, DynamoDB	Кеширование, сессии, профили	Запросы по вторичным атрибутам
Графовые	Neo4j, ArangoDB	Соцсети, рекомендации, маршрутизация	Масштабирование, высокие требования к памяти
Для более продвинутого уровня подготовьтесь к следующим вопросам:

Какие существуют модели согласованности данных в распределенных системах? Расскажите о eventual consistency.
Что такое векторные часы (vector clocks) и как они используются в NoSQL базах данных?
Объясните понятие BASE в контексте NoSQL и сравните его с ACID.
Расскажите о технике MapReduce и ее применении в обработке больших данных.
Как реализуется репликация в NoSQL базах данных? Какие существуют стратегии?
Не забудьте также подготовиться к вопросам о новых трендах в области баз данных:

Что такое NewSQL? Как эти решения пытаются объединить преимущества SQL и NoSQL?
Расскажите о потоковой обработке данных и ее связи с базами данных.
Какова роль искусственного интеллекта и машинного обучения в современных системах баз данных?
Что такое мультимодельные базы данных? Приведите примеры.
Какие существуют подходы к работе с временными рядами в базах данных?
При ответе на вопросы о NoSQL обязательно подкрепляйте теорию реальными примерами из практики. Если у вас есть опыт миграции с SQL на NoSQL или обратно, истории успеха или неудачи — обязательно поделитесь ими. Это покажет, что вы не просто знакомы с технологиями, но понимаете контекст их применения. 📈

Оптимизация запросов и производительность баз данных
Вопросы оптимизации запросов и повышения производительности баз данных являются критически важной частью собеседования, особенно для позиций среднего и старшего уровня. Эта область демонстрирует вашу способность не просто писать запросы, но и создавать эффективные, масштабируемые решения. 🚀

Вот ключевые вопросы, на которые следует подготовить ответы:

Что такое план выполнения запроса и как его интерпретировать? Объясните, как СУБД строит план запроса, какие операции (sequential scan, index scan, nested loops) в нем отображаются, и как анализировать план для выявления проблемных мест.

Расскажите о различных типах индексов. Когда следует использовать каждый из них? Опишите B-tree, Hash, GIN, GiST индексы, их особенности и оптимальные сценарии использования.

Как работает кластеризация таблиц? В чем разница между кластерным и некластерным индексом? Объясните влияние кластеризации на физическое хранение данных и производительность различных типов запросов.

Какие существуют методы оптимизации запросов с соединениями (joins)? Расскажите о стратегиях выбора порядка соединения таблиц, использовании индексов для соединений, материализованных представлениях.

Что такое партиционирование таблиц? Какие типы партиционирования вы знаете? Объясните горизонтальное и вертикальное партиционирование, стратегии (по диапазону, по списку значений, по хешу) и влияние на производительность.

Вопросы продвинутого уровня, которые часто задают опытным специалистам:

Как влияет кеширование на производительность базы данных? Расскажите о различных уровнях кеширования.
Объясните концепцию блокировок и уровней изоляции с точки зрения производительности.
Какие типичные проблемы производительности возникают при масштабировании базы данных и как их решать?
Расскажите о техниках оптимизации запросов с подзапросами. Когда лучше использовать JOIN вместо подзапроса?
Как оптимизировать работу с временными таблицами и промежуточными результатами?
При подготовке обратите внимание на конкретные примеры оптимизации, которые вы можете привести из своего опыта:

Случаи, когда добавление индекса значительно улучшило производительность
Ситуации, когда переписывание запроса дало значительный прирост скорости
Примеры оптимизации схемы данных или архитектуры приложения
Опыт работы с профилировщиками и инструментами мониторинга
Также будьте готовы к практическим заданиям, таким как:

Анализ и оптимизация предложенного запроса
Интерпретация плана выполнения и предложение улучшений
Проектирование схемы с учетом требований к производительности
Обсуждение стратегии шардинга или партиционирования для конкретного кейса
Важно продемонстрировать системный подход к оптимизации. Расскажите о методологии:

Идентификация узких мест (через мониторинг, профилирование)
Анализ причин (проблемы с запросами, схемой, инфраструктурой)
Разработка решений (оптимизация запросов, индексирование, кеширование)
Тестирование и измерение результатов
Постоянный мониторинг и поддержание производительности
Помните, что интервьюеры ищут не только технические знания, но и понимание бизнес-контекста оптимизации. Будьте готовы обсудить компромиссы между производительностью, стоимостью и сложностью поддержки различных решений. 🔧

Практические задачи по SQL: как успешно решать на собеседовании
Практические задачи по SQL — это часто заключительный и решающий этап технического собеседования. Здесь уже недостаточно теоретических знаний; вы должны продемонстрировать способность применять их для решения реальных задач. Это ваш шанс выделиться и показать не только технические навыки, но и подход к решению проблем. 💪

Типичные форматы практических заданий на собеседовании:

Написание запроса по заданному описанию
Оптимизация существующего запроса
Проектирование схемы базы данных для определенного сценария
Отладка проблемного SQL-кода
Устный разбор подхода к сложному запросу
Вот пример типичной задачи и подход к ее решению:

SQL
Скопировать код
-- Даны таблицы:
-- employees (id, name, department_id, salary)
-- departments (id, name, location)
-- 
-- Напишите запрос, который вернет имена сотрудников, зарабатывающих больше 
-- среднего по своему департаменту, вместе с названием департамента.

Процесс решения такой задачи можно разбить на следующие шаги:

Анализ требований — что именно нужно получить?
Визуализация структуры данных — как связаны таблицы?
Декомпозиция сложного запроса — сначала рассчитаем среднюю зарплату по департаментам, затем сравним с ней зарплаты сотрудников
Написание и тестирование — пошагово напишем запрос
SQL
Скопировать код
WITH avg_salaries AS (
SELECT department_id, AVG(salary) as avg_salary
FROM employees
GROUP BY department_id
)
SELECT e.name as employee_name, d.name as department_name
FROM employees e
JOIN departments d ON e.department_id = d.id
JOIN avg_salaries a ON e.department_id = a.department_id
WHERE e.salary > a.avg_salary
ORDER BY d.name, e.name;

При решении практических задач на собеседовании помните о следующих советах:

Мыслите вслух — интервьюерам важно понимать ваш ход мыслей, даже если вы не сразу приходите к правильному ответу
Уточняйте требования — если что-то не ясно, лучше спросить, чем строить предположения
Используйте поэтапный подход — начните с простого решения, затем улучшайте его
Объясняйте компромиссы — если вы выбираете между несколькими подходами, обоснуйте свой выбор
Обсудите производительность — прокомментируйте, как ваш запрос будет выполняться и можно ли его оптимизировать
Типичные темы практических заданий, к которым стоит подготовиться:

Агрегация и группировка — запросы с функциями GROUP BY, HAVING, агрегатными функциями
Оконные функции — использование ROW_NUMBER(), RANK(), LEAD(), LAG() для анализа данных
Сложные соединения — многотабличные JOIN с различными условиями
Иерархические запросы — работа с древовидными структурами (например, организационная структура компании)
Временные ряды — анализ данных с временными метками, расчет изменений во времени
Особенно популярны задачи в контексте бизнес-аналитики:

Расчет ключевых метрик (DAU, MAU, конверсия)
Когортный анализ пользователей
Выявление аномалий в данных
Анализ воронки продаж или регистрации
Расчет LTV (lifetime value) клиентов
Наконец, всегда готовьтесь к задачам, связанным с вашим резюме. Если вы указали опыт работы с определенными видами данных или задач, интервьюеры могут проверить это соответствующими практическими заданиями. 🎯
  
SQL - типичные вопросы на собеседовании
разбираем вопросы, которые часто задают программистам-соискателям, особенно тем, кто занимается backend или fullstack разработкой
Изложенный материал рассчитан на начинающих разработчиков, которые уже обладают некоторыми начальными теоретическими знаниями о реляционных базах данных и понимают принципы упорядочивания, распределения информации в таблицах, нормирования данных.
Участие в собеседованиях и прохождение различных интервью выявило ряд повторяющихся вопросов, которые встречаются с завидной регулярностью.

Вообще, тема собеседований достаточно широкая, и охватывает не только технические знания, многое зависит от участников этого процесса, их подготовки и целей, здесь мы сконцентрируемся на типичных, часто встречающихся вопросах, и не только относящихся непосредственно к программированию.

К тому же, некоторые подобные вопросы могут возникать и в процессе работы, здесь будет своего рода напоминалка.

Перечисленное здесь - это только маленькая толика того, что реально должен изучить, понимать, и применять на практике программист. Незнание ответов на эти вопросы, еще не показатель уровня интеллекта программиста, это только его неосведомленность, она не мешает программировать, но создает определенные трудности при выполнении типичных задач.

Приступим!

  Нормализация базы данных  
Цель нормализации: исключить избыточное дублирование данных, которое является причиной аномалий, возникших при добавлении, редактировании и удалении кортежей(строк таблицы).

Процесс преобразования отношений базы данных к виду, отвечающему нормальным формам, называется нормализацией.

Нормальная форма — требование, предъявляемое к структуре таблиц в теории реляционных баз данных для устранения из базы избыточных функциональных зависимостей между атрибутами (полями таблиц).


Всего выделяют условия 8 нормальных форм (в некоторых источниках используется другое количество), но в основном в реляционных базах данных на практике используются требования первых 3-4 нормальных форм.

Некоторые нормальные формы высокого уровня применимы к базам данных определеного рода (например, хронологическим).

Применение требований большего числа нормальных форм к базе данных приводит к существенному увеличению количества таблиц, что в целом может ухудшать осмысление структуры данных при наличии в них большого количества атрибутов. Тем более это становится не практично при средних и малых объемах базы данных.

  CRUD  
Аббревиатура CRUD обозначает набор элементарных действий над данными:

CREATE (создание) - создание данных - занесение в место хранения (таблицу/таблицы);
READ (чтение) - получение копии данных из места хранения;
UPDATE (обновление) - изменение содержимого (состава) данных в месте хранения, без изменения типа;
DELETE (удаление) - удаление данных из места хранения;
Несмотря на то, что данная аббревиатура изначально не имела отношения именно к базам данных, но использование аналогичного функционала в работе с базами данных закрепило ее применение и при работе с данными в различных СУБД (система управления базами данных).


  SELECT  
Оператор Select (выборка) - получение данных из места хранения.

синтаксис

SELECT column1, column2, columnN FROM table_name;
где column1, column2, columnN - названия полей (колонок) таблицы из которых будут получены данные, table_name - имя таблицы, из которой будут получены данные.

Если необходимо извлечь все поля таблицы, то можно использовать следующий синтаксис:

SELECT * FROM table_name;
  INSERT  
INSERT INTO используется для добавления новых строк данных в таблицу хранения в базе данных.

синтаксис

INSERT INTO table_name (column1, column2, column3,...columnN) VALUES (value1, value2, value3,...valueN);
где column1, column2, columnN - названия полей (колонок) таблицы в которые будут добавлены данные, table_name - имя таблицы, в которую будут добавлены данные, value1, value2, value3,...valueN - значения добавляемых данных.

Не нужно указывать столбцы в запросе SQL, если добавляются значения для всех столбцов таблицы. Но значения должны быть в том же порядке, что и столбцы в таблице. Синтаксис будет выглядеть так:

INSERT INTO table_name VALUES (value1,value2,value3,...valueN);
  UPDATE  
UPDATE используется для изменения существующих записей в таблице.

синтаксис

UPDATE table_name SET column1 = value1, column2 = value2...., columnN = valueN;
где column1, column2, columnN - названия полей (колонок) таблицы в которых будут обновлены данные, table_name - имя таблицы, в которой будут обновлены данные, value1, value2,...valueN - новые значения данных.

При этом будут изменены значения всех записей. Если необходимо изменить значения определенного поля (полей) таблицы, то можно использовать следующий синтаксис:

UPDATE table_name SET column1 = value1, column2 = value2...., columnN = valueN WHERE [condition];
где [condition] - условие для поиска соответствующего поля таблицы.

  DELETE  
DELETE используется для удаления существующих записей из таблицы.

синтаксис

DELETE FROM table_name;
где table_name - имя таблицы, из которой будут удалены данные.

Если необходимо удалить только определенные строки, то можно использовать следующий синтаксис:

DELETE FROM table_name WHERE [condition];
где [condition] - условие для поиска соответствующего поля таблицы.

  LEFT JOIN  
LEFT JOIN возвращает все значения из левой таблицы, плюс совпавших значений из таблицы справа или NULL, в случае отсутствия совпадения.


синтаксис

SELECT table1.column1, table2.column2... FROM table1
LEFT JOIN table2 ON table1.common_field = table2.common_field;
где table1 - имя таблицы слева, из которой будут получены все данные,

table2 - имя таблицы справа, из которой будут получены значения при совпадении требований или NULL, при отсутствии,

column1, column2... - названия соответствующих колонок таблиц,

table1.common_field = table2.common_field - требование для отбора, соответствующие значения полей в левой и правой таблице.

  ALIASES  
ALIASES временные имена для столбцов или таблиц, используются для сокращения кода, чтобы упростить его чтение или когда вы выполняете самосоединение (то есть: перечисление одной и той же таблицы более одного раза в операторе FROM).

синтаксис

column_name [ AS ] alias_column;
table_name [ AS ] alias_table;
где column_name - имя колонки в базе данных, alias_column - временное имя колонки в пределах запроса,

table_name - имя таблицы в базе данных, alias_table - временное имя таблицы в рамках запроса.

[ AS ] может не применяться (опускаться) в свежих версиях СУБД.

пример

SELECT p.product_id as "product code", p.product_name, s.supplier_name
FROM products p
INNER JOIN suppliers s
ON p.supplier_id = s.supplier_id
ORDER BY p.product_name;
стоит обратить внимание, что если алиас состоит из раздельных слов, то название надо брать в кавычки.
