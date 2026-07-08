TOP 45 JavaScript Interview Questions With Detailed Answers
By Sruthy  Updated August 29, 2025
 
 Edited by Kamila
Most frequently asked basic and advanced JavaScript interview questions with detailed answers for every JavaScript Developer. 

If you are preparing for an interview, here are the most frequently asked JS interview questions and answers for your reference.

We have designed the same to get you to the questions you may likely encounter during your technical interview.

Table of Contents: [Show]

Expert Quiz on JavaScript Interview Questions
Take this quick quiz to test your JavaScript knowledge and land your dream job. This quiz on JavaScript interview questions covers essential and advanced concepts with real-world scenarios for your easy understanding.

⚡ JavaScript Interview Questions QUIZ
Master JavaScript – From Basics to Advanced Concepts!
Scenario-Based Questions
Question 1 of 15
How would you implement a custom Promise in JavaScript?
Simple function returning boolean
Class with constructor, then, catch methods
Object with getter/setter properties
Array with callback methods
Next Question ➡️

JavaScript Interview Questions
About JavaScript
JavaScript is a high-level programming language, probably one of the most used programming languages in the world right now. It can program web browsers or even servers.

To understand the importance of JavaScript, disable JavaScript in your browser and try to load the Web page in it. These Web pages will not work properly. Many of the content in them may misbehave. Almost all modern browsers use a combination of JavaScript, CSS, and HTML.

JavaScript is an interpreted programming language. An interpreter is embedded in browsers like Google Chrome, Microsoft Internet Explorer, etc. So, its code can be handled by the JavaScript Engine of the browser.

JavaScript appeared in December 1995 and was initially called LiveScript, although the name was soon changed for marketing reasons. It should not be confused with ‘Java’, which also bears some resemblance but is a completely different language.

Interview Questions for JavaScript Developers
Q #1) What is JavaScript?

Answer: JavaScript is a scripting language developed by Netscape. It can program web browsers or even servers. It can dynamically update the contents of the webpage, which is the beauty of this language.

Q #2) What are the advantages of using External JavaScript?

Answer: Using external JavaScript in our code has many advantages.

These are stated below.

Separation of code is done.
Code maintainability is easy.
The performance is better.
Q #3) In the following code snippet, can you please predict the output or If you get an error, please explain the error?

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
<!DOCTYPE html>
<html>
<body>
<h2> <strong> Sample: Software Testing Help</strong> </h2>
<p id="studentName"></p>
  
<script>
var studentName = "Sajeesh Sreeni"; // String 'Sajeesh Sreeni' stored in studentName
var studentName; // varaible is decalred again
document.getElementById("studentName").innerHTML = 
"Redeclaring the varaible will not lose the value!.<br>"
+"Here the value in studentName is "+ studentName;
  
</script>
</body>
</html>
Answer: This code will not produce any errors. Redeclaration of the variables is allowed in JavaScript. Hence, the value of the variable will not be lost after the execution of the statement here.

Q #4) In the following code snippet, can you please predict the output or if you get an error; please explain the error?

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
<!DOCTYPE html>
<html>
<body>
<h2> <strong> Sample: Software Testing Help</strong> </h2>
<p id="sum_first"></p>
<p id="sum_second"></p>
<script>
var sum_first =50+20+' Sajeesh Sreeni ';
var sum_second= " Sajeesh Sreeni "+50+20;
document.getElementById("sum_first").innerHTML = "The first varaible sum is :"+sum_first +
"<br>The second varaible sum is :"+sum_second ;
</script>
</body>
</html>
Answer: This code will not show any errors!

Output of the code snippet:

      The first variable sum is: 70 Sajeesh Sreeni
   The second variable sum is: Sajeesh Sreeni 5020

Q #5) What is the difference between test () and exec () methods?

Answer: Both test () and exec () are RegExp expression methods.

By using a test (), we will search a string for a given pattern, if it finds the matching text, then it returns the Boolean value ‘true’ or else it returns ‘false’.

But in exec (), we will search a string for a given pattern. If it finds the matching text, then it returns the pattern itself or else it returns ‘null’ value.

Q #6) What are the advantages of JavaScript?

Answer: This Scripting language has many advantages, as stated below.

Lightweight: It is easy to implement. It has a small memory footprint.
Interpreted: It is an interpreted language. Instructions are executed directly.
Object-oriented: It is an object-oriented language.
First-class functions: In JavaScript, a function can be used as a value.
Scripting Language: It’s a language in which instructions are written for a run-time environment.
Q #7) In the following code snippet, can you please predict the output or If you get an error; please explain the error?

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
<!DOCTYPE html>
<html>
<body>
<h2> <strong> Sample: Software Testing Help</strong> </h2>
<p style='text-decoration:underline'>Example Const Variable </p>
<p id="display"></p>
<script>
const first_num;
first_num =1000;
document.getElementById("display").innerHTML = "First Number:"+ first_num;
</script>
</body>
</html>
Answer: The ‘const’ variable ’first_num’ is not initialized with a value, so the code will produce a syntax error.

Output of the code snippet:

Error: Uncaught SyntaxError: Missing initializer in the const declaration

Q #8) Have you used any browsers for debugging? If yes, how is it done?

Answer: By pressing the ‘F12’ key on the keyboard, we can enable debugging in the browser. Choose the ‘Console’ tab to view the results.

In the Console, we can set breakpoints and view the value in variables. All modern browsers have a built-in debugger (for example, Chrome, Firefox, Opera, and Safari). This feature can be turned ON and OFF.

Q #9) What is the use of the ‘debugger’ keyword in JavaScript code?

Answer: Using the ‘debugger’ keyword in the code is like using breakpoints in the debugger.

To test the code, the debugger must be enabled for the browser. If debugging is disabled for the browser, the code will not work. During debugging of the code, the remaining part should stop executing before it goes to the next line.

Q #10) What are the distinct types of Error Name Values?

Answer: There are 6 types of values in ‘Error Name’ property.

Error
Description
Range Error	We will get this error if we use a number outside the range
Syntax Error	This error raises when we use the incorrect syntax. (Please refer Ques No: 7)
Reference Error	This error is thrown if used an undeclared variable Please refer Ques No: 19
Eval Error	Thrown due to the error in eval(). New JavaScript version doesn’t have this error
Type Error	Value is outside the range of types used. Please refer Ques No :22
URI Error
Due to the usage of illegal characters.
Q #11) What is JavaScript hoisting?

Answer: While using the ‘JavaScript Hoisting’ method, when an interpreter runs the code, all the variables are hoisted to the top of the original /current scope. If you have a variable declared anywhere inside the code, then it is brought to the top.

This method is only applicable to the declaration of a variable and does not apply to the initialization of a variable. Functions are also hoisted to the top, whereas function explanations are not hoisted to the top.

Where we declared the variable inside the code doesn’t matter much.

Q #12) What is JavaScript ‘Strict Mode’?

Answer: ‘Strict mode’ is a restricted variant of JavaScript. Usually, this language is ‘not very strict’ in throwing errors. But in ‘Strict mode’ it will throw all types of errors, even the silent errors. Thus, debugging becomes easier. And the chances of making a mistake for the developer are reduced.

Q #13) What are the characteristics of JavaScript ‘Strict Mode’?

Answer: Given below are the characteristics of ‘Strict Mode’:

‘Strict Mode’ will stop developers from creating global variables.
Developers are restricted from using duplicate parameters.
Strict mode will restrict you from using the JavaScript keyword as a variable name or function name.
Strict mode is declared with ‘the use strict’ keyword at the beginning of the script.
All browsers support strict mode.
Q #14) What are Self Invoking Functions?

Answer: They are also known as ‘Immediately Invoked Function Expressions’ or ‘Self-Executing Anonymous Functions’. These functions are invoked automatically in the code, hence they are named as ‘Self Invoking Functions’.

Usually, we define a function and invoke it, but if we want to execute a function automatically where it is explained, and if we are not going to call it again, we can use anonymous functions. And these types of functions have no name.

Q #15) What is the syntax of ‘Self-Invoking Function’? Give an example?

Answer:

The syntax for the self-invoking function:

1
2
(function () {
return () } () ;
Here, the last ‘()’ parenthesis in the syntax states that it is a function expression.

Example of Self-Invoked Functions:

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
<!DOCTYPE html>
<html>
<body>
<h2> <strong> Sample: Software Testing Help</strong> </h2>
<p style='text-decoration:underline'>Example for Self-Invoking </p>
<p id="dispaly_num"></p>
<script>
(function (){
elem = document.getElementById("dispaly_num");
elem.innerHTML = "This function has no name.<br>It is called automatically";
}());
</script>
</body>
</html>
Here, the anonymous function is automatically invoked in the code snippet.

The function is used to set the text property of the <p> tag having ‘display_num’ as Id.

Output of the code snippet:

      This function has no name.
   It is called automatically

Q #16) In the following code snippet, can you please predict the output or If you get an error; please explain the error?

Answer: 

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
<!DOCTYPE html>
<html>
<body>
<h2> <strong> Sample : Software Testing Help</strong> </h2>
<p style='text-decoration:underline'>Example for JavaScript Hoisting </p>
<p id="dispaly_num"></p>
<script>
first_num = 100; // Assign value 100 to num
elem = document.getElementById("dispaly_num");
elem.innerHTML = " Here the variable first_num:<u> "+first_num +"</u> is taken to the top <br>" +
"Since second variable is initialised the value is not taken to the top and it's value is "
+ "<u>"+second_num +"</u> “;
var first_num; // declaration only
var second_num =200; // Initialised the variable
</script>
</body>
</html>
Please refer to previous Q #11. As explained there, the interpreter will take all the variables declared except initialization to the top.

As per this, the ‘first_num’ variable is taken to the top, and the ‘second_num’ variable is initialized with a value, so it is not taken to the top. This code will not throw an error. But the value of ‘second_num’ is undefined.

Output of the code snippet:

        Here the variable first_num: 100 is taken to the top
       Since the second variable is initialized the value is not taken to the top and its value is undefined

Q #17) If you need to hide the JavaScript code from older browser versions, how will you do it?

Answer: In Code, after the <script> tag, add ‘<! –’ HTML tag.

This will not allow the browser to execute the JavaScript code if it were an older version of it. Also, after the end </script> tag, add ‘//–>’ HTML tag.

This method will help in solving compatibility issues and UI issues to an extent.

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
<!DOCTYPE html>
<html>
<body>
<h2> <strong> Sample: Software Testing Help</strong> </h2>
<p id="display"></p>
<script> <!--
document.getElementById("display").innerHTML = "Here I am not using an older version of browser.<br> 
So the code will work in my browser";
//-->
</script>
</body>
</html>
Here, the code snippet after a <script> tag is executed in my browser, as I am not using an older version of the browser.

Output of the code snippet:

      Here I am not using an older version of the browser.
      So the code will work in my browser

Q #18) In the following code snippet, can you please predict the output, or if you get an error, please explain the error?

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
<!DOCTYPE html>
<html>
<body>
<h2> <strong> Sample: Software Testing Help</strong> </h2>
<p style='text-decoration:underline'>Find the output </p>
<p id="display"></p>
<script>
var first_num =500;
var result= function(){
document.getElementById("display").innerHTML = first_num;
var first_num =1000;
}
result();
</script>
</body>
</html>
Answer: Here in the code given above, the value of the ‘first_num’ variable will not be 1000.

In JavaScript, there is no hoisting for variable initialization. The function ‘result ()’ will choose the local variable ‘first_num’, as it is declared inside the function. Since the variable is declared after it is used, the value of ‘first_num’ is undefined.

Output of the code snippet:

Undefined

Q #19) What is the difference between ‘var’ and ‘let’ keywords?

Answer: The differences are:

Var
let


’var’ keyword was introduced in JavaScript code from the beginning Stage itself.	‘let’ keyword is introduced in 2015 only.
’Var’ keyword has function scope. The variable defined with var is available anywhere within the function	A variable declared with ‘let’ keyword has a scope only with in that block. So, let has a Block Scope.
The variable declared with ‘var’ be hoisted	The variable declared with ‘let’ be hoisted
Q #20) In the following code snippet, can you please predict the output, or if you get an error; please explain the error?

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
<!DOCTYPE html>
<html>
<body>
<h2> <strong> Sample: Software Testing Help</strong> </h2>
<p style='text-decoration:underline'>Find the output </p>
<p id="display_first"></p>
<p id="display_second"></p>
<script>
if(true){ 
var first_num =1000; 
let second_num=500; 
}
document.getElementById("display_first").innerHTML = "First Number:" + first_num;
document.getElementById("display_second").innerHTML = "Second Number:" + second_num;
</script>
</body>
</html>
Answer:

Output of the code snippet:

     First Number :1000

We will get ‘First Number :1000’ as output. There is an ‘Uncaught Reference Error’ error as well.

In the code snippet, the scope of ‘second_num’ is only within the if() block. If a developer tries to access the value outside the block, he will get an ‘Uncaught Reference Error’.
Uncaught Reference Error: second_num is not defined.

Q #21) What is the difference between ‘==’ and ‘===’?

Answer: Both ‘==’ and ‘===’ are comparison operators.

‘==’ operator
‘===’ operator


It is known as ‘Type Converting Operator’
It is known as ‘Strict Equality Operator’
It compares Value, do not compare type
It compares both value and type.
Q #22) What is the difference between ‘let’ and ‘const’?

Answer: Differences are as follows:

let
const

using ‘let’ we can change the value of variable any number of times	using ‘const’, after the first assignment of the value we cannot redefine the value again
Consider the code
{
let first_num =1;
first_num=2;
document. write (first_num);
}
Here the code will give an output, since the change in value of first_num is possible.	Consider the code
{
const second_num =1;
second_num=2;
document. write (second_num);
}
Here the code will produce an error, since the ‘second_num’ is assigned with a second value.
Q #23) In the following code snippet, can you please predict the output or If you get an error; please explain the error?

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
<!DOCTYPE html>
<html>
<body>
<h2> <strong> Sample: Software Testing Help</strong> </h2>
<p style='text-decoration:underline'>Example of 'Const' Keyword </p> 
<p id="display_first"></p>
<p id="display_second"></p>
<script>
let first_num =500; 
first_num=501; 
document.getElementById("display_first").innerHTML = "First Number:"+ first_num ; 
const second_num =1000; 
second_num=1001; 
document.getElementById("display_second").innerHTML = "Second Number :"+second_num;
</script>
</body>
</html>
Answer: Please refer to Q #21 before reading further

Output of the code snippet:

 First Number:501

We will also get an error while running the code, as we are trying to change the value of a ‘const’ variable.

Error: Uncaught TypeError: Assignment to constant variable.

Q #24) What is the difference between ‘null’ and ‘undefined’?

Answer: Both keywords represent empty values.

The differences are:

In ‘undefined’, we will define a variable, but we won’t assign a value to that variable. On the other hand, in ‘null’ we will define a variable and assign the ‘null’ value to the variable.
type of (undefined) and type of (null) object.
Q #25) What is the difference between ‘function declaration’ and ‘function expression’?

Answer: It can be explained with an example:

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
19
20
21
<!DOCTYPE html>
<html>
<body>
<h2> <strong> Sample: Software Testing Help</strong> </h2>
<p style='text-decoration:underline'>Example Function Declaration</p> 
<p id="display_add"></p>
<p id="display_sub"></p>
<script>
function add(first_num,second_num){
return first_num + second_num;
}
var substract = function sub(first_num,second_num){
return first_num - second_num;
}
var first_num=700;
var second_num=300;
document.getElementById("display_add").innerHTML = "Sum of the number is:" + add(first_num,second_num);
document.getElementById("display_sub").innerHTML = "Difference of the number is:" + substract(first_num,second_num);
</script>
</body>
</html>
As shown in the example add() is a function declaration and subtract() is a function expression. The syntax of the function declaration is like a function that is saved into a variable.

Function declarations are hoisted, but function expressions are not hoisted.

Q #26) What is ‘settimeout()’?

Answer: It will be better explained with an example.

Consider the code snippet

1
2
3
Console.log (‘First Line’);
Console.log (‘Second Line’);
Console.log (‘Third Line’);
Output of the code snippet:

First Line
Second Line
Third Line

Now you introduce the settimeout() method and wrap the same set of code in it.

1
2
3
4
5
Settimeout(function() {
Console.log (‘First Line’);
},0);
Console.log (‘Second Line’);
Console.log (‘Third Line’);
Output of the code snippet:

Second Line
Third Line
First Line

With the introduction of settimeout(), the processes become asynchronous. The first statements to be placed in the stack is Console.log (‘Second Line’), and Console.log (‘Third Line’), and they will get executed first. You need to wait until everything in the stack is completed first.

Even though ‘0’ is the timeout period, it doesn’t mean that it will be executed right away.

Scenario-Based Questions for JavaScript Interview
Q #27) What is a Closure and how do you use it?

Answer: A closure is an inner function. It can access the outer variables of a function. In Closure, within function_1 there is another function_2 which returns ‘A’ value and function_1 also returns a value; say ‘B’.

Here, sum() is the outer function, and add () is an inner function, it can access all the variables including ‘first_num’ ‘second_num’, and ‘third_num’. The outer function is called the inner function add().

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
<script>
// To find the sum of two numbers using closure method
function sum( first_num, second_num )
{
var sumStr= 600;
function add(first_num , second_num)
{
return (sumStr + (first_num + second_num));
}
return add();
}
document.write("Result is :"+ sum(150,350));
</script>
Output of the code snippet:

The result is: 500

Q #28) In the following code snippet, can you please predict the output or If you get an error; please explain the error?

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
<!DOCTYPE html>
<html>
<body>
<h2> <strong> Sample: Software Testing Help</strong> </h2>
<p style='text-decoration:underline'>Example Assignmnet Statement</p>
<p id="display"></p>
<script>
var x =500;
let y,z,p,q;
q=200;
if(true){
x=y=z=p=q;
document.getElementById("display").innerHTML = "x="+ x + "<br>y :"+ y +"<br>z :"+ z+"<br>p :"+ p+"<br>q :"+ q;
}
</script>
</body>
</html>
Answer: The assignment statements are considered from Right to left.

Output of the code snippet:

x=200
y:200
z:200
p:200
q:200

Q #29) Can you give an example where the code snippet shows the difference between test () and exec () methods?

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
19
<!DOCTYPE html>
<html>
<body>
<h2> <strong> Sample : Software Testing Help</strong> </h2>
<p style='text-decoration:underline'>Example for exec() methods </p>
<p>Click the button to search for a pattern "How“ in the given string "Hello. Good Morning. How do you feel today?"</p>
<p>If the "How" is found, the method will return the pattern </p>
<button onclick="searchTxt()">Search</button>
<p id="result"></p>
<script>
function searchTxt() {
var str = "Hello. Good Morning. How do you feel today?";
var search_patt = new RegExp("How");
var res = search_patt.exec(str);
document.getElementById("result").innerHTML ="Found the pattern :"+ res;
}
</script>
</body>
</html>
Answer: This is an example of the test () and exec () method, Refer Ques No: 5 for more details.

Output of the code snippet:

Found the pattern using exec (): How
Using test () the result is: true

Q #30) Can you give an example showing JavaScript Hoisting?

Answer:

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
<!DOCTYPE html>
<html>
<body>
<h2> <strong> Sample: Software Testing Help</strong> </h2>
<p style='text-decoration:underline'>Example for JavaScript Hoisting </p>
<p id="dispaly_num"></p>
<script>
num = 100; // Assign value 100 to num
elem = document.getElementById("dispaly_num"); 
elem.innerHTML = "Here the variables are used before declaring it." +
" <br>The value of the variable is " + num;
var num; // Declare the varaible </script>
</body>
</html>
Please refer to Q #11 for more details.

Here the variable ‘num’ is used before declaring it. But JavaScript Hoisting will allow it.

Output of the code snippet:

       Here the variables are used before declaring it.
  The value of the variable is 100

Q #31) Can you give an example showing the use of the ‘debugger’ keyword in the JavaScript code?

Answer:

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
19
20
21
22
<!DOCTYPE html>
<html>
<head>
</head>
<body>
<h2> <strong> Sample: Software Testing Help</strong> </h2>
<p style='text-decoration:underline'> Example for debug keyword </p>
<p> Here to test the code, debugger must be enabled for the browser, 
<br>during debugging the code below should stop executing before it goes to the next line. </p>
<p id="wait_result"></p>
<p id="show_result"></p>
<script>
var a = 1000;
var b = 500;
var sum = a + b;
document.getElementById("wait_result").innerHTML = "Adding numbers......<br>
Select 'Resume Script execution' to continue: ";
debugger;
document.getElementById("show_result").innerHTML = "Sum of the numbers : "+sum;
</script>
</body>
</html>
Note: The debugger must be enabled for the browser to test the code. Refer to Ques No: 5 for more details

This is an example of a debugging keyword (Browser used: Chrome)

Output of the code snippet:

Here to test the code, the debugger must be enabled for the browser,
during debugging the code below should stop executing before it goes to the next line.
Adding numbers…
Select ‘Resume Script execution’ to continue:

<Click on ‘Resume Script execution’ Button>

Some of the numbers: 1500

Q #32) In the following code snippet can you please predict the output or If you get an error; please explain the error?

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
<!DOCTYPE html>
<html>
<body>
<h2> <strong> Sample: Software Testing Help</strong> </h2>
<p style='text-decoration:underline'>Example Type Converting </p>
<p id="display"></p>
<script>
var first_num =500;
var first_name='500';
if(first_num == first_name){ 
document.getElementById("display").innerHTML = "Comparison will return 'true' by Type converting Operator ";
}
</script>
</body>
</html>
Answer: Consider the code

1
2
3
4
5
6
7
If (‘100’==100) {
document. write (“It’s a Type Converting Operator”);
}
Here
  typeof(‘100’) is string
   typeof(100) is number
the ‘==’ operator will convert the number type, which is on the right side of the operator to string and compare both values
Output of the code snippet:

Comparison will return ‘true’ by Type converting Operator

Q #33) Are Java and JavaScript similar? If not, then what is the difference between Java & JavaScript?

Answer:

Sl No
Java
JavaScript
1	Java is a general-purpose programming language.	JavaScript is a high-level, interpreted scripting language. 
2	Java is based on Object-Oriented Programming (OOPS)concepts.	JavaScript  is both an  object-oriented  as well as a  functional  scripting.
3	Runs in a Java Virtual Machine ( JVM ) or browser.	Runs on a browser only.
4	Java code needs to get compiled as Java class file.	JavaScript  has no  compilation  step.
Instead, an interpreter in the browser reads over the  JavaScript code , interprets each line, and runs it.
So, in short, these languages are not at all linked with or dependent on each other.

Q #34) Which data types are supported by JavaScript?

Answer: JavaScript supports the following Seven primitives data types and Object:

(i) Boolean: This is a logical data type that can have only two values i.e. true or false. When we check the data type of ‘true’ or ‘false’ using typeof operator, it returns a boolean value.

For Example,  typeof(true) // returns boolean

Boolean values can be used for comparing two variables.

For Example, 

1
2
3
var x = 2;
var y = 3;
x==y //returns false
The boolean value can also be used to check a condition

For Example, 

1
2
3
4
5
var x = 2;
var y = 3;
If(x<y){
alert(‘Hi’);
}
If the above condition ‘x<y’ is true, the alert gets pop up.

A boolean variable can be created using the Boolean() function.

1
2
var myvar = ‘Hi';
Boolean(myvar); // This returns true because the 'myvar' value exists
Also, the Boolean object can be created using the new operator as follows:

1
var myobj = new Boolean(true);
(ii) Null: This is a data type that is represented by only one value, the ‘null’ itself. A null value means no value.

For Example, 

1
2
var x = null;
console.log(x);// This returns null
If we check the data type of a using the typeof operator, we get:

1
typeof(x); // This returns object. type of a null value is an object, not null.
(iii) Undefined: This data type means a variable that is not defined. The variable is declared but it does not contain any value.

For Example, 

1
2
3
4
var x;
console.log(x); // This returns undefined
x=10;//Assign value to x
console.log(x); // This returns 10
The variable ‘a’ has been declared but hasn’t been assigned a value yet.
We can assign a value to a:

(iv) Number: This data type can be a floating-point value, an integer, an exponential value, a ‘NaN’ or an ‘Infinity’.

For Example, 

1
2
3
4
5
var x=10; // This is an integer value
var y=10.5; // decimal value
var c = 10e5 // an exponential value
‘xyz’ * 10; //This returns NaN
10/0; // This returns infinity
Number literal can be created by using the Number() function:

1
2
var x = Number(10);
console.log(x);// This returns 10
Also, the number object can be created using the ‘new’ operator as follows:

1
2
var x= new Number(10);
console.log(x); // This returns 10
(v) BigInt: This is a numeric primitive that can represent integers with arbitrary precision. BigInt is created by appending n to the end of an integer

For Example, 

1
const x = 15n;
The number can be converted to a BigInt with the BigInt(number) function.

1
2
3
const x = 251;
const y = BigInt(x);
y === 251n // returns true
(vi) String: This data type is used to represent textual data.

For Example, 

1
2
var strVar1 = “Hi,how are you?”;
var strVar2 = ‘Hi,how are you?’;
New string can also be created using String() function as follows:

1
var strVar3 = String(‘Hi,how are you?’); // This creates a string literal with value ‘Hi,how are you?’
The String() function is also used to convert a non-string value to a string.

1
String(150); // This statement will create a string ‘150’
The string can also be created using the ‘new’ operator

1
2
var strVar4 = new String(“Hi,how are you?”); // This is a string object
console.log(strVar4); // This will return the string ‘Hi,how are you?’
JavaScript strings are immutable i.e. once a string is created, it can’t be modified. But another string can be created using an operation on the original string.

For Example, 

By concatenating two strings using the concatenation operator (+) or String.concat().
By getting substring using String.substr().
(vii) Symbol: This is a unique and immutable primitive value and used as the key of an Object property. Symbols are new to JavaScript in ECMAScript 2015

A Symbol value represents a unique identifier.

For Example, 

1
2
3
var symVar1 = Symbol("Symbol1");
let symVar2 = Symbol("Symbol1"); 
console.log(symVar1 === symVar2); // This returns "false".
So, many symbols are created with the same description, but with different values.

Symbols can’t be auto-converted.

For Example, 

1
2
var symVar1 = Symbol("Symbol1");
alert(symVar1); // This gives TypeError: Cannot convert a Symbol value to a string
This can be worked using toString() as follows:

1
alert(symVar1.toString()); // Symbol(symVar1), this works
Object data type

An object is a value in memory referenced by an identifier.

Object refers to a data structure having data and instructions to work with the data. Objects sometimes refer to real-world things, For Example,  an employee or a car.

For Example, 

In JavaScript objects, values are written as name:value pairs as below:

1
2
3
4
5
6
7
var car1 = {type:"BMW", model:” The BMW X5“, color:"white"};
An object definition can span multiple lines as follows:
var car1 = {
type:"BMW",
model: "The BMW X5",
color:"white"
};
The name:values pairs are called properties. For Example,  ‘type’ is the property, and ‘BMW’ is the value of the property.

Property values are accessed using objectName.propertyName

or objectName[“propertyName”]

For Example,  car1.type or car1[“type”] , returns ‘BMW’

The value of the object car1 can be changed as follows:

1
car1.type = “Audi”;
Now,

1
console.log(car1) ;//This will return {type:"Audi", model:” The BMW X5“ , color:"white"};
Q #35) Is JavaScript a case-sensitive language?

Answer: Yes, JavaScript is a case-sensitive language. The meaning of this is keywords of the language, variables, function names, and any other identifiers that must always be typed with consistent uppercase or lower-case letters.

For Example,  myVar is a different variable to myvar.

Q #36) How to determine what data type an operand belongs to?

Answer:  Operand data type can be found using the typeof operator

It returns a string indicating the type of the operand.

Syntax: typeof operand

typeof(operand)

The operand can be any variable, object or function.

For Example, 

1
2
3
console.log (typeof 10);// expected output: "number"
console.log (typeof 'hello');// expected output: "string"
console.log (typeof<declared But UndefinedVariable>);//expected output: //"undefined";
Q #37) Why JavaScript is called a loosely typed or dynamic language?

Answer:  JavaScript is called a loosely typed or a dynamic language because JavaScript variables are not directly associated with any value type and any variable can be assigned and re-assigned values of all types:

For Example, 

1
2
3
var myvar = ‘abc’; // myvar is string
myvar =true; // myvar is now a boolean
myvar = 10; // myvar is now a number
JavaScript Interview Questions for Experienced
Q #38) What is null in JavaScript?

Answer: The value null represents the intentional absence of any object value.

This is one of JavaScript’s primitive values.

For Example, 

1
2
Var myvar = null;
console.log(myvar); //This will print null
Q #39) What is NaN?

Answer: NaN is a property of a global object representing Not-A-Number.

For Example, 

1
2
3
4
5
6
7
8
9
function checkValue(x) {
if (isNaN(x)) {
return NaN;
}
return x;
}
  
console.log(checkValue ('5')); //expected output: "5"
console.log(checkValue (‘Any value’)); //expected output: NaN
Q #40) How to split a string into array items?

Answer: A string can be split into an array using the JavaScript split() method. This method takes a single parameter, the character you want to separate the string at, and returns the substrings between the separator as items in an array.

For Example, 

1
2
3
4
5
myDaysString = ''Sunday,Monday,Tuesday,Wednesday”;
String can be split at comma as below:
myDaysArray= myDaysString.split(',');
console.log(myDaysArray[0]); //output is the first item in the array i.e. Sunday
console.log (myDaysArray[myDaysArray.length-1]); //output is the last //item in the array i.e. Wednesday
Q #41) How to join array items into a string?

Answer: Array items can be joined using the join() method.

For Example, 

1
var myDaysArray= ["Sunday","Monday","Tuesday",”Wednesday”];
Array items are joined into a string as follows:

1
2
myDaysString= myDaysArray.join(',');
console.log(myDaysString);//output is joined string i.e.//Sunday,Monday,Tuesday,Wednesday
Q #42) What type of errors does JavaScript have?

Answer: The following are the 2 types of errors:

Syntax errors: These are typos or errors in spelling in the code which cause the program not to run at all or stop working partway through. Usually, error messages are also provided.
Logic errors: These are errors when the syntax is correct, but the logic or code is inaccurate. Here, the program runs successfully without errors. Butthe output results are incorrect. These are often harder to fix than syntax errors as these programs don’t give any error messages for logic errors.
Q #43) How to handle a large number of choices for one condition in an effective way?

Answer: This is done using switch statements:

For Example, 

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
switch (expression) {
case choice1:
code to be run
break;
  
case choice2:
code to be run
break;
  
:
:
  
default:
code to run if there is no case match
}
Q #44) What is a ternary operator?

Answer: The ternary or conditional is an operator that is used to make a quick choice between two options based on a true or false test.

This can be used as a substitute forif…else block when having two choices that are chosen between a true/false condition.

For Example, 

1
2
3
4
if (some condition)
result = ‘result 1’;
else
result = ‘result 2’;
The same code can be written using a ternary operator in a single statement as follows:

1
result = (condition)?‘result 1’:‘result 2’;
Q #45) Suppose, there is an object called a person

const person = {

name : {

first: ‘Bob’,

last: ‘Smith’

}

};

Which of the following is the correct way of accessing the object property ‘first’ ?

person.name.first, or
person[‘name’][‘first’] ?
Answer: Both are correct ways. i.e. using dots like person.name.first or using bracket notation like person[‘name’][‘first’]

Q #46) What is “this”?

Answer: The ‘this’ keyword refers to the current object the code is being written inside.

This is to ensure that the correct values are used when a member’s context changes

For Example, there are two different instances of a person having different names and it is required to print their own name in the alert as follows:

1
2
3
4
5
6
const person1 = {
name: 'Tom',
greeting: function() {
alert('Good Morning! I am ' + this.name + '.');
}
}
Here, output is Good Morning! I am ‘Tom’

1
2
3
4
5
6
const person2 = {
name: 'Jerry',
greeting: function() {
alert('Good Morning! I am ' + this.name + '.');
}
}
Here, the output is Good Morning! I am ‘Jerry’

Q #47) What are Anonymous functions?

Answer: Anonymous functions are functions without having any name and won’t do anything on their own. These are generally used along with an event handler.

For Example, in the following code, anonymous function code i.e. alert(‘Hi’); would run on click of the associated button:

1
2
3
4
5
var myButton = document.querySelector('button');
  
myButton.onclick = function() {
alert('Hi');
}
An anonymous function can also be assigned to the value of a variable.

For Example, 

1
2
3
var myVar = function() {
    alert('Hi');
}
This function can be invoked using:

1
myVar();

Top 30 JavaScript Design Patterns Interview Questions
Last Updated : 23 Jul, 2025
The Design Patterns are basically defined as the reusable and generalized solutions to the common problems that arise during software design and development. Design patterns are not specific to any particular programming language or technology instead, they provide abstract templates or blueprints for solving recurring design-related problems. They help software developers create well-structured, maintainable, and flexible code by promoting best practices and proven solutions.

JavaScript Design Patterns Interview Questions

1. What is Design Pattern in JavaScript?
2. Types of Design Pattern in JavaScript?
3. What are the Main advantages of using design pattern in JavaScript?
4. How does the Module design pattern work in JavaScript?
5. What is the Observer pattern?
6. Explain the Singleton design pattern in JavaScript.
7. How does the Strategy pattern work in JavaScript?
8. Explain the Factory Design Pattern.
9. How does the Prototype pattern work?
10. What is the Decorator pattern in JavaScript?
11. What is Known as Gang of Four?
12. Define the MVC (Model-View-Controller) pattern in JavaScript.
13. Which is the most common used design pattern in javascript?
14. What do you understand by Dependency Injection pattern and how do you implemented it in JavaScript?
15. Explain the Publish-Subscribe pattern and provide an example in JavaScript.
16. How is the Strategy pattern different from the State pattern?
17. Explain the Proxy pattern in JavaScript.
18. How does the Template Method pattern work?
19. Explain the Chain of Responsibility pattern and provide an example in JavaScrip.
20. How is the Factory pattern different from the Abstract Factory pattern?
21. Describe the Proxy pattern and provide a real-world example in JavaScript
22. Explain the Command pattern and provide a use case in JavaScript
23. Describe the Memento pattern with example
24. What is the Revealing Module pattern?
25. How does the State Pattern work, and when it is used in JavaScript?
26. Explain the Flux architecture and how it utilizes the Observer Pattern
27. How does Module Pattern differ from the Revealing Module Pattern?
28. Differentiate between the Factory and Abstract Factory Patterns
29. Explain the Flux Pattern and its relationship with React
30. Example of Revealing Module pattern in JavaScript
Top 30 Interview Questions for Design Patterns in JavaScript
1. What is Design Pattern in JavaScript?
A design pattern is the reusable solution to the common problem in software design and software development. It is basically a general template that can be applied to solve a particular design problem in code.

2. Types of Design Pattern in JavaScript?
There are mainly three types of design patterns:

Creational Design Pattern
Structural Design Pattern
Behavioral Design Pattern
3. What are the Main advantages of using design pattern in JavaScript?
There are so many advantages of using design pattern let's see some of them are:

The Design Patterns in JavaScript capture software engineering experiences.
They are reusable, Scalable and can be used in multiple projects.
They provide transparency to software design.
The Design Patterns provide a solution that helps to define the system architecture.
4. How does the Module design pattern work in JavaScript?
The module pattern is used in JavaScript to provide a structure for organizing code into reusable and maintainable modules. It provides a way to encapsulate variables and functions within a single unit of code, making it easier to manage complex applications.

Let's understand by the help of example:




// Module definition
var MyModule = (function() {
  // Private variables and functions
  var privateVariable = 'I am private';
​
  function privateFunction() {
    console.log('This is a private function');
  }
​
  // Public API (exposed to the outside world)
  return {
    publicVariable: 'I am public',
​
    publicFunction: function() {
      console.log('This is a public function');
      // Accessing private members
      console.log(privateVariable);
      privateFunction();
    }
  };
})();
​
// Using the Module
console.log(MyModule.publicVariable); // Outputs: I am public
MyModule.publicFunction(); // Outputs: This is a public function, I am private, This is a private function

Output
I am public
This is a public function
I am private
This is a private function
5. What is the Observer pattern?
The Observer pattern defines a one-to-many dependency between objects so that when one object changes state, all its dependents are notified and updated automatically.

Example:




// Subject
class Subject {
  constructor() {
    this.observers = [];
  }
​
  addObserver(observer) {
    this.observers.push(observer);
  }
​
  removeObserver(observer) {
    this.observers = this.observers.filter(obs => obs !== observer);
  }
​
  notifyObservers() {
    this.observers.forEach(observer => observer.update());
  }
  
  // Some state change in the subject
  setState(newState) {
    this.state = newState;
    this.notifyObservers();
  }
}
​
// Observer
class Observer {
  constructor(name) {
    this.name = name;
  }
​
  update() {
    console.log(`${this.name} has been notified of the state change.`);
  }
}
​
// Example usage
const subject = new Subject();
​
const observer1 = new Observer("Observer 1");
const observer2 = new Observer("Observer 2");
​
subject.addObserver(observer1);
subject.addObserver(observer2);
​
subject.setState("New State");

Output
Observer 1 has been notified of the state change.
Observer 2 has been notified of the state change.
In this example, Subject maintains a list of observers, and when its state changes (using the setState method), it notifies all registered observers through the notifyObservers method. Observers, in turn, implement an update method to define what actions they should take when notified.

6. Explain the Singleton design pattern in JavaScript
The Singleton pattern ensures that a class has only one instance and provides a global point of access to that instance. It is often used for logging, driver objects, caching, thread pools, or database connections.




var Singleton = (function () {
  var instance;
​
  function createInstance() {
    // Private constructor logic here
​
    return {
      // Public methods and properties
      getInstanceInfo: function () {
        return "I am a singleton instance!";
      }
    };
  }
​
  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    }
  };
})();
​
// Usage
var singletonInstance1 = Singleton.getInstance();
var singletonInstance2 = Singleton.getInstance();
​
console.log(singletonInstance1 === singletonInstance2); // true
console.log(singletonInstance1.getInstanceInfo()); // "I am a singleton instance!"

Output
true
I am a singleton instance!
In this example, the Singleton module is an immediately invoked function expression (IIFE) that encapsulates the logic for creating a singleton instance. The instance variable is used to store the reference to the single instance.

7. How does the Strategy pattern work in JavaScript?
Strategy pattern is a behavioral design pattern that allows the behavior of an object to be selected at runtime. It is one of the Gang of Four (GoF) design patterns, which are widely used in object-oriented programming.

The Strategy pattern is based on the idea of encapsulating a family of algorithms into separate classes that implement a common interface. The pattern consists of three main components: the Context, the Strategy, and the Concrete Strategy.

The Context is the class that contains the object whose behavior needs to be changed dynamically.
The Strategy is the interface or abstract class that defines the common methods for all the algorithms that can be used by the Context object.
The Concrete Strategy is the class that implements the Strategy interface and provides the actual implementation of the algorithm.
Here's a simple example to illustrate how it works:




// Define a set of strategies
​
// Strategy 1
const strategyA = {
  execute: function () {
    console.log("Executing Strategy A");
  },
};
​
// Strategy 2
const strategyB = {
  execute: function () {
    console.log("Executing Strategy B");
  },
};
​
// Context that will use the strategy
function Context(strategy) {
  this.strategy = strategy;
​
  // Method to set a new strategy
  this.setStrategy = function (strategy) {
    this.strategy = strategy;
  };
​
  // Method to execute the current strategy
  this.executeStrategy = function () {
    this.strategy.execute();
  };
}
​
// Example usage
​
const context = new Context(strategyA);
​
context.executeStrategy(); // Output: Executing Strategy A
​
context.setStrategy(strategyB);
context.executeStrategy(); // Output: Executing Strategy B

Output
Executing Strategy A
Executing Strategy B
In this example, we have two strategies (strategyA and strategyB) that encapsulate different algorithms. The Context object is responsible for using the current strategy and can switch between different strategies at runtime using the setStrategy method.

8. Explain the Factory Design Pattern.
The factory method is a creational design pattern, i.e., related to object creation. The Factory Method pattern is used to create objects without specifying the exact class of object that will be created. This pattern is useful when you need to decouple the creation of an object from its implementation.




// Product constructor
function Car(model, year) {
    this.model = model;
    this.year = year;
}
​
// Factory function
function CarFactory() {}
​
CarFactory.prototype.createCar = function (model, year) {
    return new Car(model, year);
};
​
// Usage
const factory = new CarFactory();
const car1 = factory.createCar('Toyota', 2022);
const car2 = factory.createCar('Honda', 2023);
​
console.log(car1); // Car { model: 'Toyota', year: 2022 }
console.log(car2); // Car { model: 'Honda', year: 2023 }

Output
Car { model: 'Toyota', year: 2022 }
Car { model: 'Honda', year: 2023 }
9. How does the Prototype pattern work?
The Prototype pattern creates new objects by copying an existing object, known as the prototype. It is useful when creating many similar objects.

Example:




// Define a prototype object
var carPrototype = {
  drive: function() {
    console.log("Driving the car!");
  },
  stop: function() {
    console.log("Stopping the car!");
  }
};
​
// Create a new object using the prototype
var myCar = Object.create(carPrototype);
​
// Now, myCar has the drive and stop methods
myCar.drive(); // Output: Driving the car!
myCar.stop();  // Output: Stopping the car!

Output
Driving the car!
Stopping the car!
10. What is the Decorator pattern in JavaScript?
The Decorator pattern allows behavior to be added to an individual object, either statically or dynamically, without affecting the behavior of other objects from the same class.




function Coffee() {
  this.cost = function () {
    return 5;
  };
}
​
function MilkDecorator(coffee) {
  this.cost = function () {
    return coffee.cost() + 2;
  };
}
​
function SugarDecorator(coffee) {
  this.cost = function () {
    return coffee.cost() + 1;
  };
}
​
var coffee = new Coffee();
coffee = new MilkDecorator(coffee);
coffee = new SugarDecorator(coffee);
​
console.log(coffee.cost()); // Output: 8

Output
8
11. What is Known as Gang of Four?
The four authors who published the book Design Patterns Elements of Reusable Object-Oriented Software are known as Gang of Four. The name of four authors are Erich Gamma, Ralph Johnson, Richard Hel, and John Vlissides.

12. Define the MVC (Model-View-Controller) pattern in JavaScript
MVC is an architectural design pattern that separates an application into three interconnected components: Model (data and business logic), View (user interface), and Controller (handles user input and updates the model and view).

13. Which is the most common used design pattern in javascript?
One of the most commonly used design patterns in JavaScript is the Module Pattern. The Module Pattern is a way to encapsulate a set of functionalities, creating a modular and organized structure for your code. It leverages closures to provide private and public members, allowing for better control over the scope and access to variables and functions.

14. What do you understand by Dependency Injection pattern and how do you implemented it in JavaScript?
The Dependency Injection pattern involves supplying an external dependency to a software component rather than creating it within the component. In JavaScript, this can be achieved through constructor injection or property injection.

15. Explain the Publish-Subscribe pattern and provide an example in JavaScript.
The Publish-Subscribe pattern, also known as the Observer pattern, allows multiple objects to listen and respond to events. This pattern is used to establish communication between objects without them being directly coupled.




// Publisher (Subject)
class NewsAgency {
  constructor() {
    this.subscribers = [];
  }
​
  // Method to subscribe a new observer
  subscribe(observer) {
    this.subscribers.push(observer);
  }
​
  // Method to unsubscribe an observer
  unsubscribe(observer) {
    this.subscribers = this.subscribers.filter(subscriber => subscriber !== observer);
  }
​
  // Method to notify all subscribers about a news update
  notify(news) {
    this.subscribers.forEach(subscriber => {
      subscriber.update(news);
    });
  }
}
​
// Subscriber (Observer)
class NewsSubscriber {
  constructor(name) {
    this.name = name;
  }
​
  // Update method to be called when notified
  update(news) {
    console.log(`${this.name} received news: ${news}`);
  }
}
​
// Example usage
const newsAgency = new NewsAgency();
​
const subscriber1 = new NewsSubscriber("Subscriber 1");
const subscriber2 = new NewsSubscriber("Subscriber 2");
​
// Subscribers subscribe to the news agency
newsAgency.subscribe(subscriber1);
newsAgency.subscribe(subscriber2);
​
// News agency notifies subscribers about a news update
newsAgency.notify("Breaking News: Important event!");
​
// Output:
// Subscriber 1 received news: Breaking News: Important event!
// Subscriber 2 received news: Breaking News: Important event!

Output
Subscriber 1 received news: Breaking News: Important event!
Subscriber 2 received news: Breaking News: Important event!
16. How is the Strategy pattern different from the State pattern?
The Strategy pattern defines a family of algorithms, encapsulates each one, and makes them interchangeable and the State pattern allows an object to alter its behavior when its internal state changes.

17. Explain the Proxy pattern in JavaScript.
The Proxy pattern provides a surrogate or placeholder for another object to control access to it. It is useful for implementing lazy loading, access control, and logging.

Let's see a simple example of using the Proxy pattern to create a basic logging proxy:




// Original object
const realSubject = {
  request: function() {
    console.log("Real subject handles the request.");
  }
};
​
// Proxy handler
const handler = {
  request: function() {
    console.log("Proxy handles the request before forwarding it to the real subject.");
    realSubject.request();
  }
};
​
// Creating a Proxy
const proxy = new Proxy(realSubject, handler);
​
// Using the Proxy
proxy.request();

Output
Real subject handles the request.
In this example, the proxy object intercepts the request operation and logs a message before forwarding the request to the realSubject. You can customize the behavior of the proxy by defining different traps in the handler object.

18. How does the Template Method pattern work?
The Template Method pattern defines the skeleton of an algorithm in the superclass but lets subclasses override specific steps of the algorithm without changing its structure.

Example:




// Abstract class with the template method
function AbstractClass() {}
​
AbstractClass.prototype.templateMethod = function () {
  this.step1();
  this.step2();
  this.step3();
};
​
AbstractClass.prototype.step1 = function () {
  console.log("AbstractClass: Step 1");
};
​
AbstractClass.prototype.step2 = function () {
  console.log("AbstractClass: Step 2");
};
​
AbstractClass.prototype.step3 = function () {
  console.log("AbstractClass: Step 3");
};
​
// Concrete subclass inheriting from AbstractClass
function ConcreteClass() {}
​
ConcreteClass.prototype = Object.create(AbstractClass.prototype);
ConcreteClass.prototype.constructor = ConcreteClass;
​
// Override specific steps in the template method
ConcreteClass.prototype.step2 = function () {
  console.log("ConcreteClass: Step 2 overridden");
};
​
// Usage
const concreteObject = new ConcreteClass();
concreteObject.templateMethod();

Output
AbstractClass: Step 1
ConcreteClass: Step 2 overridden
AbstractClass: Step 3
19. Explain the Chain of Responsibility pattern and provide an example in JavaScript.
The Chain of Responsibility pattern passes a request along a chain of handlers. In JavaScript, this is often used in event handling where multiple objects can handle an event, and the event is passed through a chain of handlers until one handles it.




// Step 1: Request
class ExpenseRequest {
  constructor(amount) {
    this.amount = amount;
  }
}
​
// Step 2: Handler
class Approver {
  constructor(name, approvalLimit) {
    this.name = name;
    this.approvalLimit = approvalLimit;
    this.nextApprover = null; // Reference to the next handler in the chain
  }
​
  setNextApprover(nextApprover) {
    this.nextApprover = nextApprover;
  }
​
  processRequest(expenseRequest) {
    if (expenseRequest.amount <= this.approvalLimit) {
      console.log(`${this.name} approved the expense request of $${expenseRequest.amount}`);
    } else if (this.nextApprover) {
      console.log(`${this.name} cannot approve. Passing to ${this.nextApprover.name}`);
      this.nextApprover.processRequest(expenseRequest);
    } else {
      console.log(`No one can approve the expense request of $${expenseRequest.amount}`);
    }
  }
}
​
// Step 3: ConcreteHandlers
const manager = new Approver("Manager", 1000);
const director = new Approver("Director", 5000);
const vp = new Approver("VP", 10000);
​
manager.setNextApprover(director);
director.setNextApprover(vp);
​
// Step 4: Client
const expenseRequest1 = new ExpenseRequest(800);
const expenseRequest2 = new ExpenseRequest(4500);
const expenseRequest3 = new ExpenseRequest(12000);
​
// The client initiates the request and starts the chain
manager.processRequest(expenseRequest1);
manager.processRequest(expenseRequest2);
manager.processRequest(expenseRequest3);

Output
Manager approved the expense request of $800
Manager cannot approve. Passing to Director
Director approved the expense request of $4500
Manager cannot approve. Passing to Director
Director cannot appr...
20. How is the Factory pattern different from the Abstract Factory pattern?
The Factory pattern involves creating objects through a common interface, while the Abstract Factory pattern provides an interface for creating families of related or dependent objects without specifying their concrete classes.

21. Describe the Proxy pattern and provide a real-world example in JavaScript.
The Proxy pattern provides a surrogate or placeholder for another object to control access to it. In JavaScript, a common example is the Proxy API, which allows you to create a proxy for another object with custom behavior.




// Real subject
class RealSubject {
  request() {
    console.log("RealSubject: Handling request");
  }
}
​
// Proxy
class ProxySubject {
  constructor(realSubject) {
    this.realSubject = realSubject;
  }
​
  request() {
    // Perform some additional logic before forwarding the request to the real subject
    console.log("ProxySubject: Performing pre-request actions");
    
    // Call the request method of the real subject
    this.realSubject.request();
    
    // Perform some additional logic after the request is handled by the real subject
    console.log("ProxySubject: Performing post-request actions");
  }
}
​
// Usage
const realSubject = new RealSubject();
const proxy = new ProxySubject(realSubject);
​
// Accessing the real subject through the proxy
proxy.request();

Output
ProxySubject: Performing pre-request actions
RealSubject: Handling request
ProxySubject: Performing post-request actions
22. Explain the Command pattern and provide a use case in JavaScript.
The Command pattern involves encapsulating a request as an object, allowing for parameterization of clients with different requests, queuing of requests, and logging of the requests. In JavaScript, it's commonly used in UI components and event handling.

23. Describe the Memento pattern with example.
The Memento pattern captures and externalizes an object's internal state so that the object can be restored to this state later.

Let's see the example:




// Originator: Object whose state needs to be saved
class Originator {
  constructor(state) {
    this.state = state;
  }
​
  // Save the current state to a memento
  save() {
    return new Memento(this.state);
  }
​
  // Restore the state from a memento
  restore(memento) {
    this.state = memento.getState();
  }
​
  // Modify the state
  setState(newState) {
    this.state = newState;
  }
​
  // Display the current state
  displayState() {
    console.log(`Current State: ${this.state}`);
  }
}
​
// Memento: Object that stores the state of the originator
class Memento {
  constructor(state) {
    this.state = state;
  }
​
  getState() {
    return this.state;
  }
}
​
// Caretaker: Manages and stores mementos
class Caretaker {
  constructor() {
    this.mementos = [];
  }
​
  addMemento(memento) {
    this.mementos.push(memento);
  }
​
  getMemento(index) {
    return this.mementos[index];
  }
}
​
// Example usage
const originator = new Originator("Initial State");
const caretaker = new Caretaker();
​
originator.displayState(); // Current State: Initial State
​
// Save the current state
caretaker.addMemento(originator.save());
​
// Modify the state
originator.setState("Modified State");
originator.displayState(); // Current State: Modified State
​
// Restore the state from the memento
originator.restore(caretaker.getMemento(0));
originator.displayState(); // Current State: Initial State

Output
Current State: Initial State
Current State: Modified State
Current State: Initial State
24. What is the Revealing Module pattern?
The Revealing Module pattern is defined as an extension of the Module pattern, where only the parts of the module pattern that should be public are revealed, and keeping the rest private.

25. How does the State Pattern work, and when it is used in JavaScript?
The State Pattern basically allows an object to alter its behavior when its internal state changes. The pattern represents states as separate classes and delegates the state-specific behavior to these classes. This can make the object's behavior more modular and easier to extend.




// State interface
class State {
  handleState() {}
}
​
// Concrete state 1
class ConcreteState1 extends State {
  handleState() {
    console.log("Handling state 1");
  }
}
​
// Concrete state 2
class ConcreteState2 extends State {
  handleState() {
    console.log("Handling state 2");
  }
}
​
// Context
class Context {
  constructor() {
    this.state = new ConcreteState1();
  }
​
  setState(state) {
    this.state = state;
  }
​
  request() {
    this.state.handleState();
  }
}
​
// Example usage
const context = new Context();
​
context.request(); // Output: Handling state 1
​
context.setState(new ConcreteState2());
context.request(); // Output: Handling state 2

Output
Handling state 1
Handling state 2
26. Explain the Flux architecture and how it utilizes the Observer Pattern.
Flux is an architectural pattern used in building client-side web applications. It involves unidirectional data flow and uses the Observer Pattern to handle updates between different components of the application. It's commonly associated with React applications.

27. How does Module Pattern differ from the Revealing Module Pattern?
The Module Pattern is a way to encapsulate private and public members using closures. The Revealing Module Pattern is a variation where the pattern reveals only the necessary functions and properties.

28. Differentiate between the Factory and Abstract Factory Patterns
Factory Pattern: Creates objects without specifying the exact class of the object to be created. It uses a method to create objects.
Abstract Factory Pattern: Provides an interface for creating families of related or dependent objects without specifying their concrete classes.
29. Explain the Flux Pattern and its relationship with React
The Flux Pattern is an architecture for managing state in a JavaScript application. It is commonly associated with React.js. The key components are the dispatcher, stores, and views. Actions trigger updates in the stores, which then notify the views to re-render. This unidirectional flow helps in managing complex state in large applications.

30. Example of Revealing Module pattern in JavaScript



const RevealingModule = (function () {
    let privateVar = 10;
​
    function privateFunction() {
        console.log("Private function");
    }
​
    function publicFunction() {
        console.log("Public function");
    }
​
    return {
        publicFunction: publicFunction
    };
})();

Output
Conclusion
These interview questions of design pattern in JavaScript cover a wide range of topics related to design patterns in JavaScript and software design principles. Preparing answers to these questions will help you demonstrate your understanding of JavaScript design patterns and their practical applications in interviews.
