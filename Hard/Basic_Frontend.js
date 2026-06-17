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
