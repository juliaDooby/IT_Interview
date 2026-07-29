
Реклама

Перетяжка, 22.07, ITGlobal


ГлавнаяСтатьи5 вопросов с собеседования на позицию Junior backend-разработчика на PHP
5 вопросов с собеседования на позицию Junior backend-разработчика на PHP
5 вопросов с ответами решениями, которые можно встретить на собеседовании на должность Junior PHP backend разработчика

Варвара Теренник
17 февр 2021
Обложка: 5 вопросов с собеседования на позицию Junior backend-разработчика на PHP


1


Аватарка эксперта Тимофей Житков
Тимофей Житков
старший преподаватель в <a href="https://inordic.ru/">Nordic IT School</a> и Senior Full Stack Developer в агентстве недвижимости
К нам на курс по web-разработке приходят люди с разной подготовкой и абсолютно разного возраста. В связи с тем, что спрос на IT специалистов стремительно растет, очень многие захотели сменить специальность и попробовать себя в этой перспективной отрасли.

Естественно, все студенты задаются вопросом трудоустройства. Мы дорожим каждым учеником и своей репутацией, поэтому всячески содействуем их будущему. В частности, помогаем в составлении резюме и готовим к собеседованиям, а наши преподаватели (ведущие специалисты таких компаний как Сбербанк, Яндекс, Додо Пицца и т.д.) готовы давать рекомендации перспективным студентам.

Мы, в Noric IT School, готовим специалистов, которые уже к середине курса могут решать практические задачки, которые дают в качестве тестовых в различных IT компаниях.

И вот несколько самых популярных заданий, с которыми сталкиваются начинающие backend-разработчики на php, с примерами их решения.

Напишите функцию Фибоначчи
Числа Фибоначчи – это ряд чисел, в котором каждое следующее число равно сумме двух предыдущих: 1, 1, 2, 3, 5, 8, 13…

Конечно, нужно понимать формулу для того, чтобы заложить ее в код:

Fn = Fn-1 + Fn-2  , n – порядковый номер элемента

<?php
function fibonacci($n) {
   if ($n == 0 ) {
       return 0;
   }
   if ($n == 1 || $n == 2) {
       return 1;
   } else {
       return fibonacci($n - 1) + fibonacci($n -2);
   }
}

Задача на подсчет количества
В данном примере функция получает количество «программистов», на выдаче — правильное склонение слова «программист».

ТЗ: Написать функцию, которая будет параметром принимать целое число (программистов), а на выходе давать это же число + слово “программист” в склонении, соответствующем заданному числу.

Пример: 2 программистА

11 программистОВ

1 программист[ ]

Решение:

Если вы не знакомы с подобного рода задачами – то первое, что нужно сделать — это руками сформировать все возможные варианты, затем понять закономерность, которую потом можно заложить в код.

0 – программистов (про ноль не забываем – он в программировании очень важен)

1 – программист

2 – программиста

3 – программиста

4 – программиста

5 – программистов

6 –  программистов

7 –  программистов

8 – программистов

9 – программистов

10 – программистов

11 – программистов

12 – программистов

13 – программистов

14 – программистов

15 – программистов

16 – программистов

17 – программистов

18 – программистов

19 – программистов

20 – программистов

21 – программист

22 – программиста

Все, перебрали варианты.

В данном случае, чтобы понять закономерность, нужно смотреть остаток от деления на 10, а в каких-то случаях на 100. В зависимости от остатка, определить верное склонение и вывести его.

Обновление По просьбе автора код данного примера обновлён 7 марта 2021 г.

<?php
function countCoders($number) {
   $divTen = $number % 10;
   $divHund = $number % 100;

   if ($divHund > 10 && $divHund < 21) { 
       $word = ' программистов'; 
   } elseif ($divTen > 1 && $divTen < 5) {
       $word = ' программиста';
   } elseif ($divTen == 1) {
       $word = ' программист';
   } else {
       $word = ' программистов';
   }
   return $number . $word;

}

Расскажите про наследование в PHP
Здесь есть один тонкий момент, на котором бывает «валятся» даже сами специалисты, которые проводят интервью.

бложка внешней ссылки
Объектно-ориентированное программирование простым языком — объясняют эксперты
tproger.ru
Решение:  

Наследование — это один из 3-х постулатов ООП (еще полиморфизм и инкапсуляция), который нужен для того, чтобы сильно сократить количество кода и сделать его более удобным для управления. Суть наследования проста: если у вас есть несколько классов (например: User, Message и Comment), с большим количеством идентичных методов (читай копипастных), то можно взять все повторяющиеся методы и вынести их в какой-нибудь новый класс, например, Unit и, с помощью слова extends, подключить все эти методы из Unit в User, Message и Comment.

<?php

    class Unit
    {
        // метод создания новой строки в таблице БД
        public function createLine(array  $fields,array $values)
 { ...}

	  // метод обновления строки в таблице БД
        public function updateLine(array  $fields,array $values) 
  { ...}

	  // метод удаления строки в таблице БД
        public function deleteLine() { ...}	

	  // метод получения строки в таблице БД
        public function getLine() { ...}	

   }

    // класс B наследует свойства и методы класса A
    // но у себя он переопределяет свойство $name
    class User extends Unit {
        /* свои свойства и методы  */
    }

	class Message extends Unit {
        /* свои свойства и методы  */
    }

class Comment extends Unit {
        /* свои свойства и методы  */
    }

Какой профит? Польза в том, что, теперь, вы пишете методы не три раза, а всего один (код сильно сократился). И теперь, если в каком-то методе вдруг что-то нужно поменять, то меняете это в одном месте, а изменения применяются везде.

Тонкий момент: в PHP нет множественного наследования, то есть нельзя в одном классе наследовать методы от двух и более классов.

НО для интерфейсов (не графических) — множественное наследование есть.

Вопрос на засыпку: А как быть, если нету множественного наследования, но очень хочется?

Ответ: для решения этого вопроса используются Трейты и интерфейсы.

Расскажите чем static отличается от self
Это классический вопрос на позднее статическое связывание, который задают как джунам (реже), так и синьорам.

Решение:  

Механизм позднего статического связывания (Late Static Binding) нужен для того, чтобы достучаться до статических свойств (методов), или констант родительского класса в дочерних, даже если они уже переопределены.

Пример:

<?php

    class A
    {
 // защищенное статическое свойство содержит имя класса
        protected static $name = ‘это свойство класса A!’;

   
 // просто возвращает имя класса, причем ключевое слово self
 // будет возвращать свойство $name из того места, где эта
 // переменная определена изначально
        public static function getName() {
            return self::$name;
        }

 // эта функция тоже возвращает свойство $name
 // но уже не из родительского, а из дочерних классов
        public static function getNameSB() {
           
 // ключевое слово static
            return static::$name;
        }

    }

 // класс B наследует свойства и методы класса A
 // но у себя он переопределяет свойство $name
    class B extends A {
        protected static $name = ‘это свойство класса B!’;
    }


    echo A::getName(); // это свойство класса A!
    echo B::getName(); // это свойство класса A!

    echo A::getNameSB(); // это свойство класса A!
    echo B::getNameSB(); // это свойство класса B!

Применить этот механизм можно, например, когда нужно вынести общую логику работы с несколькими таблицами в БД в родительский класс.

Расскажите, что такое $_GET и $_POST и в чем их разница
Вопрос классический и основополагающий, если кандидат не отвечает на него, значит скорее всего это «мимо».

Решение:

$_GET — это, великодушно созданный для нас языком, суперглобальный ассоциативный массив, в котором находятся расфасованные GET параметры – то есть те, что передались в адресной строке или URL после знака ?

$_POST — такой же ассоциативный массив но уже собранный из POST параметров — то есть тех, что передаются в теле запроса.

Вопрос на засыпку: (почему-то многие не отвечают) «а как еще можно получить POST параметры в PHP«?

Ответ:  $_POST это форматированное и подготовленное для удобной работы тело запроса, но есть вариант получить тело запроса «как есть»  с помощью:

file_get_contents('php://input')

Можно встретить такое, например при создании telegram-бота.


Do you want to learn or test your PHP skills for an interview?

Here in this article, we will discuss some of the most common and frequently asked Core PHP interview questions with detailed answers and code samples.

The demand for PHP jobs is increasing day by day. People who are searching or preparing for PHP jobs have to face some common questions in the interview.

Table of Contents: [Show]

Exclusive Quiz on PHP Interview Questions
Challenge yourself with this intense quiz on PHP interview questions. This quiz covers all core concepts of PHP, including OOP, basic & advanced concepts, and error-handling techniques to master PHP and land your dream job.

🚀 PHP Interview Questions QUIZ
Master PHP Concepts & Ace Your Next Interview
Question 1 of 15
Basic Questions
🔍 You need to check if a variable is set and not null. Which function should you use?
empty()
is_null()
defined()
isset()

Top PHP Interview Questions
Core Interview Questions on PHP
So, if you are a fresher and if you wish to make your career as a PHP developer or even an experienced professional looking to secure a higher position, then you must read this article to increase your chances of getting a PHP job easily and quickly.

Given below is the list of the most popular PHP interview questions that are commonly asked in interviews.

Let’s explore!!

Q #1) What is PHP?

Answer: PHP is one of the popular server-side scripting languages for developing a web application.

The full form of PHP is Hypertext Preprocessor. It is used in embedding HTML for creating dynamic content, communicating with a database server, handling sessions, etc.

Q #2) Why do we use PHP?

Answer: There are several benefits of using PHP. First, it is totally free to use. So, anyone can use PHP without any cost and host the site at a minimal cost.

It supports multiple databases. The most commonly used database is MySQL, which is also free to use. Many PHP frameworks are used now for web development, such as CodeIgniter, CakePHP, Laravel, etc.

Recommended reading =>> Laravel Database handling

These frameworks make the web development task much easier than before.

Q #3) Is PHP a strongly typed language?

Answer: No. PHP is a weakly typed or loosely typed language.

This means PHP does not require you to declare data types of variables when you declare any variable, like other standard programming languages, C# or Java. When you store any string value in a variable, then the data type is the string, and if you store a numeric value in that same variable, then the data type is an integer.

Sample code:

1
2
$var = "Hello"; //String
$var = 10; //Integer
Q #4) What is meant by variable variables in PHP?

Answer: When the value of a variable is used as the name of another variable then it is called variable variables. $$ is used to declare variable variables in PHP.

Sample code:

1
2
3
4
$str = "PHP";
$$str = " Programming"; //declaring variable variables
echo "$str ${$str}"; //It will print "PHP programming"
echo "$PHP"; //It will print "Programming"
Q #5) What are the differences between echo and print?

Answer: Both the echo and print methods print the output in the browser, but there is a difference between these two methods.

echo does not return any value after printing the output, and it works faster than the print method. The print method is slower than the echo because it returns a boolean value after printing the output.

Sample code:

1
2
echo "PHP Developer";
$n = print "Java Developer";
Q #6) How can you execute a PHP script from the command line?

Answer: You have to use the PHP command in the command line to execute a PHP script. If the PHP file name is test.php then the following command is used to run the script from the command line.

1
php test.php
Q #7) How can you declare an array in PHP?

Answer: You can declare three types of arrays in PHP. They are numeric, associative, and multidimensional arrays.

Sample code:

1
2
3
4
5
6
//Numeric Array
$computer = array("Dell", "Lenavo", "HP");
//Associative Array
$color = array("Sithi"=>"Red", "Amit"=>"Blue", "Mahek"=>"Green");
//Multidimensional Array
$courses = array ( array("PHP",50), array("JQuery",15), array("AngularJS",20) );
Q #8) What are the uses of the explode() and implode() functions?

Answer: explode() function is used to split a string into an array, and the implode() function is used to make a string by combining the array elements.

Sample code:

1
2
3
4
$text = "I like programming";
print_r (explode(" ",$text));
$strarr = array('Pen','Pencil','Eraser');
echo implode(" ",$strarr);
Q #9) Which function can be used to exit from the script after displaying the error message?

Answer: You can use the exit() or die() function to exit from the current script after displaying the error message.

Sample code:

1
2
if(!fopen('t.txt','r'))
exit(" Unable to open the file");
Sample code:

1
2
if(!mysqli_connect('localhost','user','password'))
die(" Unable to connect with the database");
Q #10) Which function is used in PHP to check the data type of any variable?

Answer: gettype() function is used to check the data type of any variable.

Sample code:

1
2
3
4
echo gettype(true).''; //boolean
echo gettype(10).''; //integer
echo gettype('Web Programming').''; //string
echo gettype(null).''; //NULL
Q #11) How can you increase the maximum execution time of a script in PHP?

Answer: You need to change the value of the max_execution_time directive in the php.ini file to increase the maximum execution time.

For example, if you want to set the max execution time for 120 seconds, then set the value as follows:

1
max_execution_time = 120
Q #12) What is meant by ‘passing the variable by value and reference’ in PHP?

Answer: When the variable is passed as a value, then it is called pass a variable by value.

Here, the main variable remains unchanged even when the passed variable changes.

Sample code:

1
2
3
4
5
6
7
function test($n) {
$n=$n+10;
}
  
$m=5;
test($m);
echo $m;
When the variable is passed as a reference, then it is called pass variable by reference. Here, both the main variable and the passed variable share the same memory location, and & is used for reference.

So, if one variable changes, then the other will also change.

Sample code:

1
2
3
4
5
6
function test(&$n) {
    $n=$n+10;
}
$m=5;
test($m);
echo $m;
Q #13) Explain type casting and type juggling.

Answer: The way by which PHP can assign a particular data type for any variable is called typecasting. The required type of variable is mentioned in the parenthesis before the variable.

Sample code:

1
2
$str = "10"; // $str is now string
$bool = (boolean) $str; // $bool is now boolean
PHP does not support datatype for variable declaration. The type of the variable is changed automatically based on the assigned value, and it is called type juggling.

Sample code:

1
2
$val = 5; // $val is now number
$val = "500" //$val is now string
Q #14) How can you make a connection with MySQL server using PHP?

Answer: You have to provide MySQL hostname, username, and password to make a connection with the MySQL server in mysqli_connect() method or by declaring a database object of the mysqli class.

Sample code:

1
2
$mysqli = mysqli_connect("localhost","username","password");
$mysqli = new mysqli("localhost","username","password");
Q #15) How can you retrieve data from the MySQL database using PHP?

Answer: Many functions are available in PHP to retrieve the data from the MySQL database.

Few functions are mentioned below:

a) mysqli_fetch_array() – It is used to fetch the records as a numeric array or an associative array.

Sample code:

1
2
3
4
5
6
7
// Associative or Numeric array
$result=mysqli_query($DBconnection,$query);
$row=mysqli_fetch_array($result,MYSQLI_ASSOC);
echo "Name is $row[0] 
";
echo "Email is $row['email'] 
";
b) mysqli_fetch_row() – It is used to fetch the records in a numeric array.

Sample code:

1
2
3
4
//Numeric array
$result=mysqli_query($DBconnection,$query);
$row=mysqli_fetch_array($result);
printf ("%s %s\n",$row[0],$row[1]);
c) mysqli_fetch_assoc() – It is used to fetch the records in an associative array.

Sample code:

1
2
3
4
// Associative array
$result=mysqli_query($DBconnection,$query);
$row=mysqli_fetch_array($result);
printf ("%s %s\n",$row["name"],$row["email"]);
d) mysqli_fetch_object() – It is used to fetch the records as an object.

Sample code:

1
2
3
4
// Object
$result=mysqli_query($DBconnection,$query);
$row=mysqli_fetch_array($result);
printf ("%s %s\n",$row->name,$row->email);
Intermediate Level PHP Interview Questions
Q #16) What are the differences between mysqli_connect and mysqli_pconnect?

Answer:

mysqli_pconnect() function is used for making a persistent connection with the database that does not terminate when the script ends.

mysqli_connect() function searches for any existing persistence connection first, and if no persistence connection exists, then it will create a new database connection and terminate the connection at the end of the script.

Sample code:

1
2
3
4
5
6
$DBconnection = mysqli_connect("localhost","username","password","dbname");
// Check for valid connection
if (mysqli_connect_errno())
{
echo "Unable to connect with MySQL: " . mysqli_connect_error();
}
mysqli_pconnect() function is depreciated in the new version of PHP, but you can create a persistence connection using mysqli_connect with the prefix p.

Q #17) Which function is used in PHP to count the total number of rows returned by any query?

Answer:

mysqli_num_rows() function is used to count the total number of rows returned by the query.

Sample code:

1
2
3
$mysqli = mysqli_connect("hostname","username","password","DBname");
$result=mysqli_query($mysqli,"select * from employees");
$count=mysqli_num_rows($result);
Q #18) How can you create a session in PHP?

Answer:

session_start() function is used in PHP to create a session.

Sample code:

1
2
3
session_start(); //Start session
$_SESSION['USERNAME']='Fahmida'; //Set a session value
unset($_SESSION['USERNAME']; //delete session value
Q #19) What is the use of imagetypes() method?

Answer: image types() function returns the list of supported images of the installed PHP version. You can use this function to check if a particular image extension is supported by PHP or not.

Sample code:

1
2
3
4
//Check BMP extension is supported by PHP or not
if (imagetypes() &IMG_BMP) {
    echo "BMP extension Support is enabled";
}
Q #20) Which function can you use in PHP to open a file for reading or writing, or both?

Answer: You can use fopen() function to read or write, or to do both in PHP.

Sample code:

1
2
3
$file1 = fopen("myfile1.txt","r"); //Open for reading
$file2 = fopen("myfile2.txt","w"); //Open for writing
$file3 = fopen("myfile3.txt","r+"); //Open for reading and writing
Q #21) What is the difference between include() and require()?

Answer: Both include() and require() functions are used for including a PHP script from one file to another file. But there is a difference between these functions.

If any error occurs at the time of including a file using include() function, then it continues the execution of the script after showing an error message. require() function stops the execution of a script by displaying an error message if an error occurs.

Sample code:

1
2
if (!include(‘test.php’)) echo “Error in file inclusion”;
if (!require(‘test.php’)) echo “Error in file inclusion”;
Q #22) Which function is used in PHP to delete a file?

Answer:

unlink() function is used in PHP to delete any file.

Sample code:

1
unlink('filename');
Q #23) What is the use of strip_tags() method?

Answer: strip_tags() function is used to retrieve the string from a text by omitting HTML, XML and PHP tags. This function has one mandatory parameter and one optional parameter. The optional parameter is used to accept particular tags.

Sample code:

1
2
3
4
//Remove all tags from the text
echo strip_tags("<b>PHP</b> is a popular <em>scripting</em> language");
//Remove all tags excluding <b> tag
echo strip_tags("<b>PHP</b> is a popular <em>scripting</em> language","<b>");
Q #24) How can you send an HTTP header to the client in PHP?

Answer: The header() function is used to send a raw HTTP header to a client before any output is sent.

Sample code:

1
header('Location: http://www.your_domain/');
Q #25) Which functions are used to count the total number of array elements in PHP?

Answer: count() and sizeof() functions can count the total number of array elements in PHP.

Sample code:

1
2
3
4
$names=array(“Asa”,”Prinka”,”Abhijeet”);
echo count($names);
$marks=array(95,70,87);
echo sizeof($marks);
Q #26) What is the difference between substr() and strstr()?

Answer:

substr() function returns a part of the string based on the starting point and length. Length parameter is optional for this function, and if it is omitted, then the remaining part of the string from the starting point will be returned.

strstr() function searches for the first occurrence of a string inside another string. The third parameter of this function is optional, and it is used to retrieve the part of the string that appears before the first occurrence of the searching string.

Sample code:

1
2
echo substr("Computer Programming",9,7); //Returns “Program”
echo substr("Computer Programming",9); //Returns “Programming”
Sample code:

1
2
echo strstr("Learning Laravel 5!","Laravel"); //Returns Laravel 5!
echo strstr("Learning Laravel 5!","Laravel",true); //Returns Learning
Q #27) How can you upload a file using PHP?

Answer: To upload a file by using PHP, you have to do the following tasks.

(i) Enable file_uploads directive

Open php.ini file and find the file_uploads directive and make it on.

1
file_uploads = On
(ii) Create an HTML form using enctype attribute and file element for uploading the file.

1
2
3
4
<form action="upload.php" method="post" enctype="multipart/form-data">
<input type="file" name="upd" id="upd">
<input type="submit" value="Upload" name="upload">
</form>
(iii) Write a PHP script to upload the file

1
2
3
4
5
if (move_uploaded_file($_FILES["upd"]["tmp_name"], "Uploads/")) {
echo "The file ". basename( $_FILES["upd"]["name"]). " is uploaded.";
} else {
echo "There is an error in uploading.";
}
Q #28) How can you declare a constant variable in PHP?

Answer: define() function is used to declare a constant variable in PHP. Constant variable is declared without the $ symbol.

Sample code:

1
define("PI",3.14);
Q #29) Which function is used in PHP to search for a particular value in an array?

Answer: in_array() function is used to search for a particular value in an array.

Sample code:

1
2
3
4
5
6
7
$languages = array("C#", "Java", "PHP", "VB.Net");
if (in_array("PHP", $languages)) {
echo "PHP is in the list";
}
else {
echo "php is not in the list";
}
Scenario-Based Interview Questions for PHP Developers
Q #30) What is the use of the $_REQUEST variable?

Answer: The $_REQUEST variable is used to read the data from the submitted HTML form.

Sample code:

Here, the $_REQUEST variable is used to read the submitted form field with the name ‘username’. If the form is submitted without any value, then it will print as “Name is empty”, otherwise it will print the submitted value.

1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
<?php
if (isset($_POST['submit'])) {
// collect value of input field
$name = $_REQUEST['username'];
if (empty($name)) {
echo "Name is empty";
} else {
echo $name;
}
}
else
{
?>
<form method="post" action="#">
Name: <input type="text" name="username">
<input type="submit" name="submit">
</form>
<?php } ?>
Q #31) What is the difference between for and Foreach loop in PHP?

Answer: For loop is mainly used for iterating a pre-defined number of times, and Foreach loop is used for reading array elements or MySQL result sets, where the number of iterations can be unknown.

Sample code:

1
2
3
4
//Loop will iterate for 5 times
for ($n = 0; $n <= 5; $n++) {
echo "The number is: $n <br>";
}
Sample code:

1
2
3
4
//Loop will iterate based on array elements 
$parts = array("HDD", "Monitor", "Mouse", "Keyboard"); 
foreach ($parts as $value) { 
      echo "$value <br>"; }
Q #32) How long does a PHP session last?

Answer: By default, session data will last for 24 minutes or 1440 seconds in PHP. But if you want, you can change the duration by modifying the value of gc_maxlifetime directive in php.ini file. To set the session time for 30 minutes, open php.ini file and set the value of gc_maxlifetime directive as follows,
gc_maxlifetime = 1800

Q #33) What is the difference between “= =” and “= = =” operators?

Answer: “= = =” is called a strictly equivalent operator that is used to check the equivalency of two values by comparing both data types and values.

Sample code:

10 and “10” are equal by value but are not equal by data type. One is a string and the other is a number. So, if the condition is false and print “n is not equal to 10”.

1
2
3
4
5
$n = 10;
if ($n === "10")
echo "n is equal to 10";
else
echo "n is not equal to 10"; //This will print
Q #34) Which operator is used to combine string values in PHP?

Answer: Two or more string values can be combined by using ‘.’ operator.

Sample code:

1
2
3
$val1 = "Software ";
$val2 = "Testing";
echo $val1.$val2; // The output is “Software Testing”
Q #35) What is PEAR?

Answer: The full form of PEAR is “PHP Extension and Application Repository”.

Anyone can download reusable PHP components by using this framework at a free of cost. It contains different types of packages from different developers.

Website: https://pear.php.net

Q #36) What type of errors can occur in PHP?

Answer: Different types of errors can occur in PHP.

Some major error types are mentioned below:

Fatal Errors– The execution of the script stops when this error occurs.
Sample code:

1
2
3
4
5
function f1() 
{ echo "function 1"; 
}
f2(); 
echo “Testing Fatal Error”;
In the following script, f1() function is declared, but f2() function is called, which is not declared. The execution of the script will stop when f2() function will call. So, “Testing Fatal Error” will not be printed.

Parse Errors– This type of error occurs when the coder uses the wrong syntax in the script.
Sample code:

1
2
echo "This is a testing script<br/>"
echo "error";
Here, semicolon(;) is missing at the end of the first echo statement.

Warning Errors- This type of error does not stop the execution of a script. It continues the script even after displaying the error.
Sample code:

1
2
$handler = fopen("test.txt","r");
echo "Opening File";
In the following script, if the test.txt file does not exist in the current location, then a warning message will display to show the error and print “Opening File” text by continuing the execution.

Notice Errors- This type of error shows a minor error of the script and continues the execution after displaying the error.
Here, the variable $a is defined but $b is not defined. So, a notice of the undefined variable will display for “echo $b” statement and print “Checking notice error” by continuing the script.

Sample code:

1
2
3
$a = 100;
echo $b;
echo "Checking notice error";
Q #37) Does PHP support multiple inheritance?

Answer: PHP does not support multiple inheritance. To implement the features of multiple inheritances, the interface is used in PHP.

Sample code:

1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
interface Isbn { 
public function setISBN($isbn);
}
interface Type{
public function setType($type); 
}
class bookDetails implements Isbn, Type {
private $isbn; 
private $type; 
public function setISBN($isbn)
{ 
$this -> isbn = $isbn; 
}
public function setType($type)
{ 
$this -> type = $type; 
}
}
Here, two interfaces, Isbn and Type are declared and implemented in a class, book details to add the feature of multiple inheritance in PHP.

Q #38) What are the differences between a session and a cookie?

Answer: The session is a global variable that is used in the server to store the session data. When a new session is created, the cookie with the session ID is stored on the visitor’s computer. The session variable can store more data than the cookie variable.

Session data are stored in a $_SESSION array, and Cookie data are stored in a $_COOKIE array. Session values are removed automatically when the visitor closes the browser, and cookie values are not removed automatically.

Q #39) What is the use of mysqli_real_escape_string() function?

Answer: mysqli_real_escape_string() function is used to escape special characters from the string for using a SQL statement

Sample code:

1
2
3
$DBconnection=mysqli_connect("localhost","username","password","dbname");
$productName = mysqli_real_escape_string($con, $_POST['proname']);
$ProductType = mysqli_real_escape_string($con, $_POST['protype']);
Q #40) Which functions are used to remove whitespaces from the string?

Answer: There are three functions in PHP to remove the whitespaces from the string.

trim() – It removes whitespaces from the left and right side of the string.
ltrim() – It removes whitespaces from the left side of the string.
rtrim() – It removes whitespaces from the right side of the string.
Sample code:

1
2
3
4
$str = " Tutorials for your help";
$val1 = trim($str);
$val2 = ltrim($str);
$val3 = rtrim($str);
PHP Interview Questions for Experienced
Q #41) What is a persistence cookie?

Answer: A cookie file that is stored permanently in the browser is called a persistence cookie. It is not secure and is mainly used for tracking a visitor for long times.

This type of cookie can be declared as follows,

1
setccookie ("cookie_name", "cookie_value", strtotime("+2 years");
Q #42) How can a cross-site scripting attack be prevented by PHP?

Answer: Htmlentities() function of PHP can be used for preventing cross-site scripting attacks.

Q #43) Which PHP global variable is used for uploading a file?

Answer: $_FILE[] array contains all the information of an uploaded file.

The use of various indexes of this array is mentioned below:

$_FILES[$fieldName][‘name’] – Keeps the original file name.
$_FILES[$fieldName][‘type’] – Keeps the file type of an uploaded file.
$_FILES[$fieldName][‘size’] – Stores the file size in bytes.
$_FILES[$fieldName][‘tmp_name’] – Keeps the temporary file name, which is used to store the file in the server.
$_FILES[$fieldName][‘error’] – Contains the error code related to the error that appears during the upload.
Q #44) What is meant by public, private, protected, static, and final scopes?

Answer:

Public– Variables, classes, and methods that are declared public can be accessed from anywhere.
Private– Variables, classes, and methods that are declared private can be accessed by the parent class only.
Protected– Variables, classes, and methods that are declared protected can be accessed by the parent and child classes only.
Static– The variable that is declared static can keep its value after losing its scope.
Final– This scope prevents the child class from declaring the same item again.
Q #45) How can image properties be retrieved in PHP?

Answer:

getimagesize() – It is used to get the image size.
exif_imagetype() – It is used to get the image type.
imagesx() – It is used to get the image width.
imagesy() – It is used to get the image height.
Q #46) What is the difference between an abstract class and interface?

Answer:

Abstract classes are used for closely related objects, and interfaces are used for unrelated objects.
A PHP class can implement multiple interfaces, but can’t inherit multiple abstract classes.
You can implement common behavior in the abstract class, but not in an interface.
Q #47) What is garbage collection?

Answer: It is an automated feature of PHP.

When it runs, it removes all session data that have not been accessed for a long time. It runs on the/tmp directory, which is the default session directory.

PHP directives that are used for garbage collection include:

session.gc_maxlifetime (default value, 1440)
session.gc_probability (default value, 1)
session.gc_divisor (default value, 100)
Q #48) Which library is used in PHP to do various types of Image work?

Answer: Using the GD library, various types of image work can be done in PHP. Image work includes rotating images, cropping an image, creating image thumbnail, etc.

Q #49) What is URL rewriting?

Answer: Appending the session ID to every local URL of the requested page to keep the session information is called URL rewriting.

The disadvantages of these methods are that they don’t allow persistence between sessions and that the user can easily copy and paste the URL and send it to another user.

Q #50) What is PDO?

Answer: The full form of PDO is PHP Data Objects.

It is a lightweight PHP extension that uses a consistence interface for accessing the database. Using PDO, a developer can easily switch from one database server to the other. But it does not support all the advanced features of the new MySQL server.

Suggested reading =>> Laravel Interview Questions

Conclusion
I hope this article will increase your confidence level to face any PHP interview. Feel free to contact us and suggest missing PHP interview questions that you face in an interview.

Wish you all success for your interview!!

Was this helpful?
Recommended Reading
Interview Questions and Answers
Top Interview Questions & Answers
Lists popular Software Testing and related Technical Interview Questions and answers on the most common software testing & technical topics: Let us see some of the most frequently asked interview questions and answers on Software Testing and other related technical topics in the tutorials listed below. Select the link you…

50+ Bootstrap Interview Questions and Answers
Bootstrap Interview Questions and Answers
Most frequently asked Bootstrap interview questions and answers: Here, in this article, we have included a list of the most popular interview questions and answers for cracking Bootstrap interviews. This will help in cracking the interview for both experienced and fresher candidates. Let's go!! => Visit Here To Learn Bootstrap…

ETL Testing Interview Questions and Answers
ETL Testing
List of Most Frequently Asked ETL Testing Tools Interview Questions And Answers to Help You Prepare For The Upcoming Interview: Business information and the data are of key importance to any business and company. Many companies invest a lot of time and money in the process of analyzing and sorting…

Top 50 Most Popular CCNA Interview Questions and Answers
CCNA Interview Questions and Answers
Top 50 most popularly asked interview questions and answers for cracking any CCNA interview are listed in this article. Firstly, we would recommend you to go through the tutorials of CCNA series that we have posted earlier, in order to understand the basics of CCNA. These questions will definitely help…

READ MORE FROM THIS SERIES:

Group Discussion Rules and Tips
Top 90 SQL Interview Questions and Answers for 2026
SQL Server Interview Questions and Answers (2026)
Interview Questions and Answers
30+ Top Scrum Master Interview Questions and Answers
Top 30 PL/SQL Interview Questions and Answers in 2026
Top 20 JIRA Interview Questions and Answers
Top 35 Linux Interview Questions and Answers
Top 20 Business Analyst Interview Questions and Answers
Top 45 Web Services Interview Questions and Answers (RESTful, SOAP, Security que…
Top 24 Data Modeling Interview Questions for Data Engineers
TOP 70+ UNIX Interview Questions with Answers
Top 40 C Programming Interview Questions for Developers
Top 40 Popular J2EE Interview Questions and Answers You Should Read
Top 60 Networking Interview Questions and Answers
Top 20 Leadership Interview Questions and Answers
Top 32 IBM DataStage Interview Questions And Answers
Top 31 Most Important SAP BO Interview Questions and Answers
Top 20 RESTful Web Services Interview Questions and Answers
Top 50+ Database Interview Questions and Answers
Top 30 SAS Interview Questions and Answers
Top JMeter Interview Questions and Answers for 2026
Top 35 Android Interview Questions and Answers
60 Top Unix Shell Scripting Interview Questions and Answers
Top 64 Scenario-Based Informatica Interview Questions with Answers
Top 31 Agile Interview Questions and Answers
50+ Top Core Java Interview Questions and Answers (2026)
Top JSON Interview Questions and Answers
60+ Top VBScript Interview Questions and Answers (2026 LIST)
Top 30 Eclipse Interview Questions and Answers
Top Teradata Interview Questions and Answers
25+ Most Popular ADO.NET Interview Questions and Answers
Top 50 C# Interview Questions with Answers
Top 30 DBMS Interview Questions and Answers
Top Oracle Interview Questions: Oracle Basic, SQL, PL/SQL Questions
Top Oracle DBA, RAC, and Performance Tuning Interview Questions
Top 50 Most Popular CCNA Interview Questions and Answers
Top 20+ .NET Interview Questions and Answers
Top Oracle Forms and Reports Interview Questions
Top Oracle Apps Technical and Oracle SOA Interview Questions
Top 30+ Popular Cucumber Interview Questions and Answers
Top 30+ JMS (Java Message Service) Interview Questions
TOP 45 JavaScript Interview Questions With Detailed Answers
Top 20 Latest DevOps Interview Questions and Answers for 2026
50+ Bootstrap Interview Questions and Answers
Top 20 TestNG Interview Questions and Answers
30+ TOP Servlet Interview Questions and Answers (2026 LIST)
35+ Top Apache Tomcat Interview Questions and Answers
48 Top AngularJS Interview Questions and Answers (2026 LIST)
Top 30+ Popular CSS Interview Questions and Answers
30 Top HTML Interview Questions and Answers (2026 LIST)
50 Top PHP Interview Questions and Answers (For ALL)
Top 20 Java Interview Programs for Coding with Answers
Top 12 Mockito Interview Questions (Mocking Framework Interview)
Top 40 MySQL Interview Questions And Answers
Top 61 Python Interview Questions And Answers
Top 48 Spring Interview Questions (Crack an Interview in 2026)
Top 25+ Azure Test Plan or TFS Interview Questions
TOP 35 HTML5 Interview Questions and Answers
Top 25 Perl Interview Questions You Should Prepare in 2026
TOP 70 C++ Interview Questions and Answers [Includes Advanced]
25+ Top Spring MVC Interview Questions and Answers
Top 36 Jenkins Interview Questions For 2026
Top 15 Popular Specflow Interview Questions
Spock Interview Questions with Answers (Most Popular)
Top 50 Swift Interview Questions (Swift iOS Interview)
Top 25 Software Engineering Interview Questions [LATEST 2026]
Top 38 Desktop Support Engineer Interview Questions and Answers
Graphic Design Resume Guide: Example And Templates For 2026
Top 45 XML Interview Questions And Answers for 2026 [LATEST]
50 Top Salesforce Interview Questions and Answers (Updated 2026)
Top 49 Salesforce Admin Interview Questions And Answers 2026
Top 84 Salesforce Developer Interview Questions And Answers 2026
Top 35 ASP.Net And Web API Interview Questions With Answers
Top 20 Most Common Help Desk Interview Questions & Answers (2026)
Top 18 Most Common Call Center Interview Questions & Answers 2026
Top 10 Most Popular Postman Interview Questions With Answers
Top 35 Frequently Asked Struts Interview Questions & Answers
Top 20 HR Interview Questions and Answers
Top 20+ Employee Exit Interview Questions To Ask
Top 15+ Important Unix Commands Interview Questions For Beginners
Top 40 GIT Interview Questions and Answers In 2026
Top 25 Technical Support Interview Questions With Answers
Top 25 Computer Architecture Interview Questions And Answers
50+ Most Common jQuery Interview Questions And Answers (Updated 2026)
Top 51 ElasticSearch Interview Questions & Answers in 2026
Top 30 Programming / Coding Interview Questions & Answers
Top 35 Management Interview Questions With Answers
Top 29 Data Engineer Interview Questions And Answers
Top 40 Java 8 Interview Questions & Answers [Most Important]
31 Most Frequently Asked Maven Interview Questions & Answers
30+ Top Java Collections Interview Questions With Answers (2026 LIST)
Top 25 Java Web Services Interview Questions & Answers
TOP 30 AWS Interview Questions and Answers in 2026
How To Write A Follow Up Email After Interview?
Top 40 SAP CRM Interview Questions and Answers
Top 36 Most Important Chef Interview Questions And Answers
Top 35 Puppet Interview Questions And Answers
Top 31 Popular Python Flask Interview Questions With Answers
JSP Interview Questions And Answers in 2026
Top 30+ OOPS Interview Questions And Answers With Examples
How To Write An Email To A Recruiter [Six Email Templates]
Top 25+ Web Developer Interview Questions and Answers
40+ PHP Laravel Interview Questions And Answers (2026 LIST)
Top 25+ JDBC Interview Questions And Answers
Top 30+ JSF Interview Questions And Answers
Salesforce Lightning Interview Questions And Answers
SAP Hybris Interview Questions And Answers
Top 30 Node.js Interview Questions and Answers
Top 25 Popular Appium Interview Questions And Answers
Top 30 Frequently Asked Ajax Interview Questions And Answers
35 Frequently Asked MongoDB Interview Questions And Answers
39 Salesforce Solution Architect Interview Questions And Answers
Top 30 Popular Scrum Master Interview Questions And Answers
Top 20 Machine Learning Interview Questions And Answers
Top 30+ Data Structure Interview Questions And Answers
Top 28 VMware Interview Questions And Answers
20 Reasons Why You are Not Getting Hired (with Solutions)
Top 25 Microservices Interview Questions And Answers
Top 26 Project Management Interview Questions for Managers
Top 27 Azure Interview Questions And Answers
42 Most Common TypeScript Interview Questions And Answers
Top 25 Interview Questions for Managers with Answers
50 Most Common React Interview Questions And Answers
A Perfect Thank You Email After an Interview (4 Samples)
Top 30+ Bulma Interview Questions and Answers With Examples
Top 40+ Hibernate Interview Questions & Answers in 2026
Top 30 Java Architect Interview Questions with Answers (2026)
Top 40 Spring Boot Interview Questions 2026 (MOST ASKED)
Top 40 Full Stack Developer Interview Questions & Answers
IBM Careers: A Complete IBM Jobs & Internships Guide 2026
Top 50 Behavioral Interview Questions and Sample Answers

Get the Premium eBook 
Download your copy now 👇
Our Bestselling eBook 'Software Testing Career package' Now Available FREE for Limited Period
Enter your email..

DOWNLOAD NOW!
Leave a Comment
Comment

Name
Name *
Email
Email *

About SoftwareTestingHelp
Helping our community since 2006! Most popular portal for Software professionals with 400 million+ visits and 500,000+ followers! You will absolutely love our creative content on QA, Dev, Software Tools & Services Reviews!

Learn In This Article:
Exclusive Quiz on PHP Interview Questions
Core Interview Questions on PHP
Intermediate Level PHP Interview Questions
Scenario-Based Interview Questions for PHP Developers
PHP Interview Questions for Experienced
Conclusion
Software Testing Help

Communication Details

Main Office: A708, City Vista, Fountain Road, Kharadi, Pune, MH, 411014.

Email Us: info@softwaretestinghelp.com

Facebook Linkedin X-twitter Youtube
Software Testing Tools

Test Management Tools
Web Application Testing Software
Cross Browser Testing Tools
Best ETL Testing Tools
Mobile Testing Tools
Regression Testing Tools
Defect Tracking Tools
GUI Testing Tools
Requirements Management Tools
ALL Testing Tools
Performance Testing Tools

Performance Testing Tools
Performance Testing Services
Computer Stress Test Tools
Cloud- Load Testing Service
Performance Testing Guide
Database Performance Tools
Website Performance Testing Tools
Application Performance Monitoring
Automation Testing Tools

Unit Testing Tools
API Testing Tools
Best ETL Tools
Open Source Testing Tools
Functional Testing Tools
Selenium Alternatives
Accessibility Testing Tools
Mobile Automation Tools
Automation Testing Software
Automation Testing Services
Data Tools

Data Masking Tools
Data Modeling Tools
Data Analysis Tools
Data Migration Software
Data Integration Tools
Data Mapping Tools
Data Loss Prevention
Test Data Management Tools
Data Recovery Software
Data Analytics Companies
ALL Data Tools
Coding Software

Best Code Editors
Code Coverage Tools
Low-Code Development Tools
Static Code Analysis Tools
Source Code Management Tools
Version Control Software
Code Review Tools
Javascript Online Editors
Code Review Tools
Code Quality Tools
Security Testing Tools

Penetration Testing Tools
App Security Testing Tools
Web Security Scanners
Vulnerability Assessment
Mobile App Security
Malware Removal Tools
Anti-Ransomware Tools
Spyware Removal Tools
Mobile Pen Testing Tools
Pen Testing as a Service
DAST Software
Testing Service Providers

Managed Testing Services
Mobile Testing Services
Software Testing Services
Performance Testing Services
Penetration Testing Companies
Cyber Security Companies
QA Outsourcing Companies
USA Testing Companies
Website Testing Services
Regression Testing Services
Software Development

Custom Software Companies
App Development Tools
Software Development Tools
Game Development Companies
Software Companies USA
SaaS Development Companies
Android App Development
DevOps Tools
DevOps Service Providers
App Development Companies
Healthcare Dev Companies
Networking Tools

Network Management
Network Security Tools
Network Scanning Tools
Application Scanners
Network Testing Tools
Network Monitoring Tools
Network Security Tools
Server Monitoring Tools
Network Mapping Software
SIEM Tools
System Monitoring Tools
Infrastructure Monitoring Tools
Project Management Tools

Project Management Software
Project Management Apps
Agile Project Management Tools
Workflow Management Software
Task Management Software
Team Collaboration Tools
JIRA Alternatives
Project Planning Tools
Team Management Software
Cloud Tools

Cloud Monitoring Tools
Crowdsourcing Platforms
Cloud Management
Crowdsourced Testing Companies
Cloud Mobile Testing
Cloud Computing Companies
Cloud Managed Services
Cloud Testing Tools
Cloud Security Companies
ALL Categories
Security Software

Free Antivirus Software
Cybersecurity Software
Internet Security Tools
External Vulnerability Scanner
Website Malware Scanner
Web Security Scanners
Zero Trust Security
Vulnerability Assessment
ALL Security Tools
IT Management Tools

Remote Desktop Software
Configuration Management
Incident Management Software
Change Management Software
IT Asset Management
Managed IT Services
ITSM Tools
Remote Monitoring Software
Remote Access Software
Asset Discovery Tools
Workload Automation Tools
IT Automation Tools

About us | Contact us | Advertise
All articles are copyrighted and cannot be reproduced without permission. SoftwareTestingHelp® is a registered trademark.
©SoftwareTestingHelp 2025 — Read our Copyright Policy | Privacy Policy | Terms | Cookie Policy | Affiliate Disclaimer

Software Testing Help


AI Engine Chatbot


Редактор и автор портала Otzyvmarketing.ru.

Все статьи  Бизнес Вебмастеринг
Чек-лист вопросов на собеседовании PHP-разработчику
Дата обновления: 19.02.2026  Время чтения: 4 мин.


Качественная подготовка – залог успешного собеседования. Особенно, если дело касается IT-сферы. Здесь лишнее волнение и ненужные ошибки могут стоить хорошего оффера.

Чтобы облегчить вам жизнь, мы подготовили для вас чек-лист с вопросами, которые могут задать на собеседовании PHP-разработчику. Уделим особое внимание теоретическому блоку для Junior и вкратце рассмотрим вопросы для Middle и Senior.

SEO, Директ, VK Ads, Авито и Wildberries — в одном кабинете

PromoPult ведёт рекламу на автопилоте:

один логин вместо пяти;
без абонентской платы и агентских комиссий — платите только за то, что используете;
возврат до 19% от расходов бонусами.
Реклама. ООО "Клик.ру". ИНН 7743771327. erid:2VtzqxFCx5k
Junior
Начинающий специалист должен иметь базовые знания PHP (синтаксис, переменные, функции и пр.), понимать основные концепции разработки и уметь работать с Git. Неплохо, если потенциальный джун уже знает о фреймворках (например, Laravel, Symfony) и умеет использовать их для решения различных задач.

Hard Skills
Основы:

Что такое PHP?
Это скриптовый язык программирования, с помощью которого можно создавать сайты и веб-приложения. Наследует синтаксис С, Java и Perl.

Какие есть версии PHP?
С первой по восьмую (кроме шестой – ее разработку признали неперспективной).

Синтаксис:

Что такое short tags и как это используется?
Это короткий синтаксис. Обычно код располагается между открывающими и закрывающими скобками – <?php и ?>. Благодаря short tags можно отбросить php и оставить только <?. Или вместо echo использовать =.

Зачем изолировать код PHP от HTML?
Чтобы использовать смешанное содержимое скрипта для обеспечения удобства и простоты понимания.

В чем разница между $this и self?
Первое – ссылка на текущий объект, второе – на текущий класс.

Типы данных:

Какие типы данных бывают?
Скалярные, составные и специальные.

Какая типизация данных применяется в PHP и что это значит?
Динамическая – не нужно объявлять переменную и указывать ее тип при объявлении.

Что такое переменные и как они используются?
Это именованные области в памяти для хранения данных. Они начинаются с букв или подчеркивания, перед именем ставится $.

Константы:

Что такое константа?
Это уникальное имя, содержащее какие-нибудь данные.

Что такое волшебные константы?
Это предопределенные константы – например, __LINE__, __TRAIT__ и т.д.

Операторы:

Что такое операторы?
Это выражение или выражения, которые используются для выполнения каких-либо действий.

Какие операторы бывают?
Присваивания, логические, сравнения, строковые, массивов и т.д.

Зачем нужны арифметические операторы?
Для выполнения простейших математических операций – сложения, вычитания, умножения и т.д.

Зачем нужны логические операторы?
Для проверки истинности/ложности – например, и ($a and $b), или ($a or $b).

Управляющие конструкции:

Обязателен ли тег ?> в конце файла?
Не обязателен. Если в файле только PHP-код, лучше не ставить закрывающий тег – иначе в вывод может попасть конечный пробел.

В чем отличие циклов while и do while?
В первом случае условие проверяется в начале, во втором – в конце. Поэтому тело второго цикла выполнится как минимум раз.

Строки:

Что общего у echo и print и в чем их отличия?
Это операторы для вывода текста. Первый может принять несколько аргументов и вывести их на экран, второй – только один аргумент.

Какая функция переворачивает строку?
Функция strrev().

Функции:

Что такое функции?
Это набор операторов для выполнения определенных действий. Они начинаются со слова function, затем идет имя функции и круглые скобки, в которых заключены параметры.

Как можно передать аргументы в функцию?
По значению и по ссылке. Еще есть значения по умолчанию.

Что такое рекурсия?
Это функция, вызывающая саму себя.

Классы и объекты:

Что такое ООП?
Это объектно-ориентированное программирование – подход, при котором программу рассматривают как совокупность объектов, которые взаимодействуют друг с другом. У каждого объекта есть свойство и поведение. Благодаря ООП можно писать код быстрее и делать его более читаемым.

Перечислите концепции ООП
Инкапсуляция (объединение методов и данных, их защита от вмешательства извне), наследование (наследование одним объектом методов и свойств другого) и полиморфизм (создание общего интерфейса для схожих действий).

Можно ли в PHP делать множественные наследования?
Нельзя – у класса есть только один родитель. Но можно эмулировать через функцию _call().

Что такое классы?
Это модели еще не существующих объектов, которые описывают его устройство.

Чем отличаются локальная и глобальная переменные?
Первая доступна в конкретном методе, вторая – во всей программе.

Soft Skills
Коммуникабельность. Разработчики регулярно общаются в команде, с другими сотрудниками, заказчиками и т.д. Нужно уметь доносить свои мысли, задавать правильные вопросы, давай фидбек.
Командная работа. Программист – командный игрок. Он должен делиться информацией с коллегами, вовремя просить о помощи (и оказывать ее другим), принимать критику и уметь брать на себя ответственность.
Адаптивность. Сфера разработки не стоит на месте – регулярно появляются разные изменения. Поэтому важно всегда держать руку на пульсе и уметь адаптироваться.
Готовность к обучению. Т.к. в IT все постоянно меняется, важно быть готовым к постоянному обучению и самосовершенствованию. Нужно изучать новые технологии и методы и отслеживать все тенденции в разработке.
Организованность. Нужно уметь планировать свою работу и управлять временем – иначе велик риск перегореть или отстать от более успешных коллег или конкурентов.
Наконец, не забываем про целеустремленность – плох тот джун, что не хочет стать сеньором.



ЧИТАЙТЕ ТАКЖЕ
Чек-лист вопросов на собеседовании Python-разработчику
21.12.2023
Middle и Senior
Middle-разработчик должен не только в совершенстве знать PHP, но и HTML, CSS, JavaScript, действительно применять на практике концепции ООП, разбираться во фронтенде и бэкенде, уметь читать чужой код и т.д.

У Senior-разработчика должен быть не только широкий кругозор (у него наивысший уровень экспертизы в рабочей группе) и огромный опыт в разработке, но и навыки управления командой и проектами. Он должен уметь принимать важные решения и нести за это ответственность.

Что такое spread-оператор?
Какие типы уязвимостей бывают и как от них защищаться?
Чем отличаются SOAP и REST?
Что такое стрелочные и анонимные функции?
Когда появилась новая версия PHP и в чем ее нововведения? Почему после PHP 5 идет сразу PHP7?
Какие бывают паттерны проектирования?
Какие бывают REQUEST-методы?
Какую команду нужно использовать для удаления коммита в Git?
Расскажите о CQRS
Как правильно писать DTO?
Как проходит реальное собеседование на позицию Senior – в этом видео:



Видео открывается с иностранным IP

Автор статьи

Лиана Санамян

Редактор и автор портала Otzyvmarketing.ru. Опыт работы в digital-маркетинге более 5 лет, с текстами работаю более 8 лет. Магистр филологии и ...

Опубликовано
26.02.2024

Обновлено: 19.02.2026
ЕЩЕ ПО ТЕМЕ
Как создать логотип с помощью нейросети - инструкция

Статус в WhatsApp: как посмотреть и добавить - быстрый способ

Комментарии

Сергей Покоев

29.04.2024

странный достаточно набор вопросов. Мало того, что охватывает малую часть знаний, так вопросы весьма специфичные, не знание которых не говорит что человек не соответствует уровню. Например, мне, как нанимающему нафига знание, почему не было 6 версии php? Да и с чего бэкэнд разработчик уровня Middle должен в совершенстве знать js и прочее, если он не фулл стек?

Добавить комментарий
Текст комментария

Подпишитесь на нас в соцсетях
Узнавайте о новостях и событиях там, где вам удобно


Вконтакте

Telegram

YouTube

PromoPult (SeoPult)
Прежде чем выбрать — попробуйте сами
14 дней SEO в PromoPult бесплатно. Без карты и подписки. Один кабинет для SEO, Директа, VK Ads и Wildberries.

Начать бесплатно
реклама



otzyvmarketing
Авторитетные отзывы от специалистов интернет-рынка

Контакты
Реклама на сайте
FAQ для сервисов
Виджеты для сервисов
 Добавить компанию
Пользовательское соглашение
Правила сайта
Профессии
Промокоды
Кабинет представителя
© 2015-2026 otzyvmarketing.ru

