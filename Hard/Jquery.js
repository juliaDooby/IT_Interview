---------------------------------------------------------------------------------------------
[JQUERY]:
---------------------
⋙ ❍ Почему перед исходным кодом jQuery стоит восклицательный знак? ✔
Восклицательный знак перед исходным кодом jQuery является частью шаблона, называемого "IIFE" (Immediately Invoked Function Expression), который используется для создания самовызывающейся функции.
Этот шаблон позволяет создавать частные области видимости для переменных и функций, чтобы избежать конфликтов имен с другими библиотеками или кодом на странице.
/Восклицательный знак перед исходным кодом jQuery используется для превращения его в выражение, чтобы предотвратить возможные ошибки при объединении файлов JavaScript.
➥ Пример использования IIFE в jQuery:
```javascript
!function(window, document, undefined) {
  ✐ Исходный код jQuery здесь
}(window, document);
```
В этом примере, когда браузер обрабатывает исходный код jQuery, он создает анонимную функцию и немедленно вызывает ее, передавая объекты `window` и `document` как аргументы.
Внутри этой функции происходит инициализация jQuery и создание его приватной области видимости, что помогает избежать конфликтов с глобальными переменными и другими библиотеками.
Восклицательный знак перед функцией является одним из способов предотвратить синтаксическую ошибку, которая может возникнуть из-за предыдущего оператора.
Без восклицательного знака JavaScript интерпретатор может принять исходный код как вызов функции, а это вызовет ошибку, если предыдущий оператор не завершен точкой с запятой. Восклицательный знак превращает функцию в выражение, которое может быть интерпретировано правильно.
-----
⋙ ❍ Расскажите про $.Deferred. Могу посоветовать одно: кроме знания $.Deferred, было бы неплохо упомянуть о нативных Promise'ах? ✔
`$.Deferred` - это часть библиотеки jQuery, которая предоставляет возможность создания объектов обещаний (promises). Обещания (promises) используются для управления асинхронными операциями, такими как загрузка данных с сервера или выполнение асинхронных задач.
`$.Deferred` предоставляет различные методы для создания и манипулирования обещаниями.
Вы можете создать новый объект обещания с помощью `$.Deferred()`, а затем использовать методы, такие как `resolve()` и `reject()`, чтобы разрешить или отклонить обещание.
➥ Пример использования `$.Deferred`:
```javascript
✐ Создание нового обещания
var deferred = $.Deferred();

✐ Загрузка данных с сервера
$.ajax({
  url: 'https://api.example.com/data',
  success: function(data) {
    ✐ Если данные успешно загружены, разрешаем обещание
    deferred.resolve(data);
  },
  error: function() {
    ✐ Если произошла ошибка при загрузке данных, отклоняем обещание
    deferred.reject();
  }
});

✐ Использование обещания
deferred.promise().then(function(data) {
  console.log('Data loaded:', data);
}, function() {
  console.log('Error loading data');
});
```
Нативные `Promise` объекты являются стандартной частью JavaScript с ES6. Они предоставляют аналогичный функционал для работы с асинхронными операциями.
Многие методы, такие как `fetch()` для загрузки данных с сервера, возвращают `Promise` объекты.
➥ Пример использования нативных `Promise`:
```javascript
✐ Загрузка данных с сервера с помощью fetch()
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => {
    console.log('Data loaded:', data);
  })
  .catch(error => {
    console.log('Error loading data:', error);
  });
``
Оба `$.Deferred` и `Promise` предоставляют удобный способ работы с асинхронными операциями, но нативные `Promise` объекты являются стандартом современного JavaScript и обычно предпочтительны для новых проектов.
-----
⋙ ❍ Как создать утечку памяти с помощью jQuery? ✔
Утечка памяти может возникнуть при неправильном использовании обработчиков событий или создании циклических ссылок на объекты.
➥ Вот пример, как можно создать утечку памяти с помощью jQuery, используя неправильное привязывание обработчиков событий:
```javascript
✐ Создаем элемент кнопки
var button = $('<button>Click me</button>');

✐ Добавляем обработчик события на клик по кнопке
button.click(function() {
  ✐ Создаем объект с данными, который ссылается на элемент кнопки
  var data = { button: button };

  ✐ Добавляем обработчик события на элемент документа
  $(document).on('click', function() {
    ✐ При клике по документу, выводим текст кнопки, на которую ссылается объект data
    console.log(data.button.text());
  });
});

✐ Добавляем кнопку на страницу
$('body').append(button);
```
В этом примере при каждом клике по документу создается новый обработчик события, который ссылается на объект `data`, содержащий ссылку на элемент кнопки.
Поскольку каждый обработчик события сохраняет ссылку на `data`, объект `data` не будет удален сборщиком мусора после удаления кнопки из DOM, что приводит к утечке памяти.
Чтобы избежать утечек памяти при использовании обработчиков событий в jQuery, рекомендуется правильно удалять обработчики событий, когда они больше не нужны, или использовать методы jQuery для делегирования событий, которые автоматически удаляют обработчики при удалении элементов из DOM.
➥ пример:
var jqSelector = $("#selector"),
    nativeSelector = document.getElementById("selector");
✐ Удаляем элемент "нативным" способом
nativeSelector.parentNode.removeChild(nativeSelector);
✐ Выводим закешированное значение селектора jQuery
console.log(jqSelector); // Привет, jQuery.cache!
Этот пример демонстрирует разницу между удалением элемента DOM с использованием jQuery и с использованием нативного JavaScript, и как это может привести к утечке памяти в jQuery.
```javascript
var jqSelector = $("#selector"), // Создаем jQuery объект для элемента с id "selector"
    nativeSelector = document.getElementById("selector"); // Получаем ссылку на элемент DOM с id "selector"

✐ Удаляем элемент "нативным" способом
nativeSelector.parentNode.removeChild(nativeSelector);

✐ Выводим закешированное значение селектора jQuery
console.log(jqSelector); // Привет, jQuery.cache!
```
В этом примере, хотя элемент DOM был удален нативным способом с помощью `removeChild()`, jQuery не знает об этом и продолжает хранить ссылку на элемент в своем кэше. Поэтому при попытке обратиться к элементу через закешированный селектор jQuery, он все еще присутствует в кэше и выведется в консоль.
Это может привести к утечке памяти, поскольку удаленный элемент все еще хранится в кэше jQuery и не может быть собран сборщиком мусора. Чтобы избежать подобных утечек, следует убеждаться, что элементы DOM удаляются с помощью методов jQuery, таких как `remove()`, вместо нативных методов удаления.
-----
⋙ ❍ jQuery.extend. Рассказать всё про функцию, возможно попросят написать аналог. Примеси в JS? ✔
`jQuery.extend()` - это метод jQuery, который используется для объединения содержимого одного или нескольких объектов в один объект.
Он может быть использован для создания нового объекта, который содержит свойства и методы из различных источников.
Вот основные возможности `jQuery.extend()`:
1. Объединение объектов: Метод `jQuery.extend()` объединяет содержимое двух или более объектов в один объект.
2. Рекурсивное объединение: По умолчанию `jQuery.extend()` производит глубокое, рекурсивное объединение объектов, то есть если объекты содержат вложенные объекты, они также будут объединены.
3. Замена или добавление свойств: Если второй объект содержит свойство с таким же именем как и в первом объекте, оно будет заменено значением из второго объекта.
Если свойство отсутствует в первом объекте, оно будет добавлено из второго объекта.
➥ Пример использования `jQuery.extend()`:
```javascript
var obj1 = { a: 1, b: 2 };
var obj2 = { b: 3, c: 4 };

var result = $.extend({}, obj1, obj2);

console.log(result); // { a: 1, b: 3, c: 4 }
```
Этот пример объединяет свойства из объектов `obj1` и `obj2` в новый объект `result`.
/Примеси (Mixins) в JavaScript - это техника, которая позволяет добавлять функциональность одного объекта к другому объекту.
Она обычно реализуется путем копирования свойств и методов одного объекта в другой объект.
Примеси позволяют создавать гибкие и модульные системы, где функциональность может быть легко добавлена или удалена из объектов.
➥ Вот пример простой примеси в JavaScript:
```javascript
✐ Примесь для логирования
var logMixin = {
  log: function(message) {
    console.log(message);
  }
};

✐ Объект, к которому мы хотим добавить функциональность логирования
var obj = {};

✐ Примешиваем функциональность логирования к объекту
$.extend(obj, logMixin);

✐ Теперь объект `obj` имеет метод `log()`
obj.log("Hello, world!"); // Выведет: "Hello, world!"
```
Этот пример показывает, как можно добавить функцию `log()` из примеси `logMixin` к объекту `obj` с помощью `jQuery.extend()`.
/`jQuery.extend()` - это функция библиотеки jQuery, которая позволяет объединить содержимое одного или нескольких объектов в один объект.
Она может использоваться для расширения объектов новыми свойствами и методами или для создания нового объекта, содержащего свойства из различных источников.
➥ Пример использования `jQuery.extend()`:
```javascript
var obj1 = { a: 1, b: 2 };
var obj2 = { b: 3, c: 4 };

var result = $.extend({}, obj1, obj2);

console.log(result); // { a: 1, b: 3, c: 4 }
```
/Примеси (Mixins) в JavaScript - это техника, которая позволяет добавлять функциональность одного объекта к другому объекту.
Это достигается путем копирования свойств и методов одного объекта в другой. Примеси позволяют создавать гибкие и модульные системы, где функциональность может быть легко добавлена или удалена из объектов.
➥ Пример использования примеси в JavaScript:
```javascript
var logMixin = {
  log: function(message) {
    console.log(message);
  }
};

var obj = {};

$.extend(obj, logMixin);

obj.log("Hello, world!"); // Выведет: "Hello, world!"
```
Этот пример добавляет функцию `log()` из примеси `logMixin` к объекту `obj` с помощью `jQuery.extend()`.
-----
⋙ ❍ Составьте AJAX-запрос на сервер, используя jQuery. Разумеется, вы должны знать, как использовать функции $.ajax, $.get, $.post и устанавливать настройки в $.ajaxSettings? ✔
➥ Вот примеры использования различных методов jQuery для выполнения AJAX-запросов:
1. Использование `$.ajax()`:
```javascript
$.ajax({
  url: 'https://api.example.com/data',
  method: 'GET',
  dataType: 'json',
  success: function(response) {
    console.log('Data loaded:', response);
  },
  error: function(xhr, status, error) {
    console.error('Error loading data:', error);
  }
});
```
2. Использование `$.get()`:
```javascript
$.get('https://api.example.com/data', function(response) {
  console.log('Data loaded:', response);
}, 'json')
.fail(function(xhr, status, error) {
  console.error('Error loading data:', error);
});
```
3. Использование `$.post()`:
```javascript
$.post('https://api.example.com/data', { param1: 'value1', param2: 'value2' }, function(response) {
  console.log('Data loaded:', response);
}, 'json')
.fail(function(xhr, status, error) {
  console.error('Error loading data:', error);
});
```
4. Настройка `$.ajaxSettings`:
```javascript
$.ajaxSetup({
  headers: {
    'Authorization': 'Bearer your_access_token'
  }
});

$.ajax({
  url: 'https://api.example.com/data',
  method: 'GET',
  dataType: 'json',
  success: function(response) {
    console.log('Data loaded:', response);
  },
  error: function(xhr, status, error) {
    console.error('Error loading data:', error);
  }
});
```
Обратите внимание, что во всех этих примерах используется обработка успешного выполнения запроса с помощью метода `success()` и обработка ошибок с помощью метода `error()` или методов `fail()`. Вы можете выбрать наиболее подходящий метод в зависимости от вашего случая использования.
-----
⋙ ❍ Как добавить класс к объекту, используя jQuery? ✔
Чтобы добавить класс к элементу с помощью jQuery, вы можете использовать метод `addClass()`. Вот пример:
```javascript
✐ Выбираем элемент по его идентификатору и добавляем ему класс
$('#myElement').addClass('myClass');
```
Этот код добавит класс `myClass` к элементу с идентификатором `myElement`.
Если вы хотите добавить несколько классов одновременно, вы можете передать их в качестве аргументов через пробел:
```javascript
$('#myElement').addClass('class1 class2 class3');
```
Также можно использовать функцию обратного вызова для добавления классов на основе определенных условий:
```javascript
$('#myElement').addClass(function() {
  if (условие) {
    return 'class1';
  } else {
    return 'class2';
  }
});
```
Этот код добавит класс `class1` или `class2` в зависимости от выполнения условия.
---------------------------------------------------------------------------------------------

50+ Most Common jQuery Interview Questions And Answers (Updated 2026)
By Sruthy  Updated January 21, 2026
 
 Edited by Kamila
This tutorial lists the most frequently asked jQuery interview questions and answers to help you prepare for your upcoming jQuery interview.

If you are preparing for a jQuery interview, then here are the most frequently asked jQuery interview questions with answers and examples for your reference.

We have tried to bring together all the possible questions that you may likely encounter during your technical interview to check your competency in jQuery.

Table of Contents: [Show]

Expert Quiz on jQuery Interview Questions
A tailored quiz on jQuery interview questions for both freshers and experienced professionals. This quiz covers all questions on essential jQuery concepts, DOM Manipulation & Events, AJAX & Animations, and Advanced Concepts to level up your jQuery skills.

jQuery Interview Prep Quiz
Master JavaScript library skills and excel in your jQuery interviews
Question 1 of 20
What is jQuery and what is its primary purpose?
A server-side framework for building web applications and APIs
A database management system for storing web application data
CSS framework
A fast, lightweight JavaScript library for DOM manipulation

jquery interview questions and answers
What is jQuery?
jQuery is a document object model manipulation JavaScript library that is mainly used in managing and traversing over HTML documents, web element event handling, special effects on the DOM, Ajax communications, and multiple browser JavaScript development.

jQuery is a lightweight JavaScript library that contains the following features:

HTML/DOM manipulation
CSS manipulation
HTML event methods
Effects and animations
AJAX
Utilities
Basic jQuery Interview Questions
Q #1) Can you explain what jQuery is ?

Answer: jQuery is a fast, lightweight, and feature-rich JavaScript library. It is an easy-to-use, cross-browser compatible API for HTML document traversal & manipulation, event handling, adding animation effects to web pages, and helps in Ajax interactions.

Q #2) Can you differentiate between JavaScript and jQuery?

Answer: JavaScript is an open-source scripting language that makes static web pages into dynamic pages, which are used to validate form data before submitting it to a server.

jQuery is a lightweight, fast JavaScript library, browser compatible, used for HTML document traversal & manipulation, event handling, adding animation effects to web pages, and helping in Ajax interactions.

Q #3) Explain the various jQuery effects methods.

Answer: jQuery effects methods help us to add some special effects to HTML elements present in the DOM of web pages, and these methods can be grouped into fade, slide, hide, show, and special effects.

The list of jQuery effects methods is given below.

show(): This method can display /show the selected element.
hide(): This method hides the element selected.
toggle(): This method helps to toggle between show() and hide() methods for the selected element.
fadeIn(): This method helps hidden elements on the page to fade in (displayed), i.e., make hidden elements into opaque elements.
fadeOut(): This method helps to hide an element from the web page by making the colored element transparent; in other words, it fades out.
fadeToggle(): This method helps to modify the state of the selected element, i.e. hidden selected element into a visible one and a visible selected element into a hidden element.
slideUp(): This method can help selected HTML elements slide upward.
slideDown(): This method can help selected HTML elements slide downward.
slideToggle(): This method helps to modify the position of the selected element; i.e., if the selected element slides upwards from its position, then it will slide down, and if the selected element slides downwards from its position, then it will slide up.
animate(): This method can change selected elements from one state to another with CSS styles. The CSS property value, such as position, color, or shape, changes within a particular interval, resulting in an animated effect.
Q #4) Give some examples of Ajax methods in jQuery.

Answer: Ajax helps to send and retrieve data as well as change the content of the web page from a server without any need for the entire page to reload. jQuery Ajax methods such as load(), get(), post() facilitate Ajax calls made by the application.

Q #5) Explain the functionality of the Ajax() method.

Answer: Ajax() method sends asynchronous HTTP requests to the server and receives the data from the server. Ajax() method is valuable as it offers the ability to specify both success and failure callbacks.

Q #6) Explain the functionality of the Ajax load() method.

Answer: The load() method sends HTTP requests to load data as HTML or text content from a server and puts the returned data into the selected DOM element(s).

Q #7) Elaborate jQuery Ajax Events.

Answer: Ajax methods trigger an event handler that results in jQuery Ajax Events. Some of the examples of jQuery Ajax Events are listed below.

These events are categorized into local events and global events.

ajaxStart(): It is a Global Event. This event triggers as a result of the start of an Ajax request, provided no other Ajax request is currently running.
beforeSend(): It is a Local Event, as the name indicates, this event gets invoked before the Ajax request starts, thereby allowing modification of XMLHttpRequest objects.
ajaxSend(): It is a Global Event, and this event gets called before the Ajax request is run.
success(): It is a Local Event. This event triggers only if the Ajax request was successfully sent ( i.e., while sending the Ajax request, the event does not display any error from the server or data).
ajaxSuccess(): It is a Global Event, triggers only if the request sent was successful.
error(): It is a Local Event that gets triggered if an error occurs while executing the request. (You can have either ean rror or a successful callback while sending Ajax request)
ajaxError(): It is a Global Event, which behaves the same as its local counterpart error() event.
complete(): It is a Local Event. This event gets called regardless of the request being successful or resulting in an error, and complete callbacks are received, even for synchronous requests.
ajaxComplete(): It is a Global Event, which behaves the same as its local counterpart complete() event, even for synchronous requests.
ajaxStop(): It is a Global Event that gets triggered when no Ajax requests are still being processed/ pending for processing.
Q #8) Explain the functionality of ajaxComplete() method.

Answer: The ajaxComplete() gets called regardless of the request being successful or resulting in an error, and a complete callback is received, even for synchronous requests.

Q #9) Explain the functionality of ajaxStart() method.

Answer: The ajaxStart() event is a global event that triggers as a result of the Starting of an Ajax request, provided no other Ajax requests are currently running.

Q #10) Explain some examples of Events in jQuery.

Answer: Actions on HTML elements across web pages are events in jQuery or JavaScript, thereby making dynamic web pages.

A few examples of events are listed below.

Clicking the mouse over an element, such as a button.
Sending input element values from the HTML form.
Reset the form elements to their default values or reload a page.
Pressing or typing one or more keys on the keyboard.
Scrolling of the web page, etc.
Q #11) Explain examples of some of the categories of jQuery events.

Answer: jQuery events are categorized based on their types:

Mouse Events such as click & dblclick.
Keyboard Events such as keyup & keydown.
Form Events such as submit, focus & change.
Document/Window Events such as load, unload & scroll.
Q #12) Explain the functionality of the jQuery CSS() method.

Answer: CSS() method in jQuery is used to check the present value of the style property, add or change the style property of the selected element. The jQuery CSS() method is used to GET and SET the DOM element’s CSS style properties.

Q #13) Differentiate between find() and children() methods.

Answer: .find() and .children() are used to locate the child of the matched DOM elements. .find() travels to any level down, whereas .children() travels a single level down to locate the element.

Let’s consider the following DOM structure in an HTML document.

findJQ
Syntax in jQuery .find() API to locate an element within <li> tag with class “item-ii”.

1
$("li.item-li").find("li").css("background-color","yellow");
The result of the above method call is a yellow background on items A, B, 1, 2, 3, and C as shown in the image.

findOP
.find() method selects all child elements of the DOM element being traversed.

Syntax in jQuery .children() API to locate an element with <ul> tag with class “level-2”.

1
$( "ul.level-2" ).children().css( "background-color", "yellow" );
The result of the above method call is a yellow background on items A, B, and C as shown in the image below.

childrenOP
.children() method selects single-level elements of the DOM element being traversed.

Q #14) Explain various types of selectors and their functionality in jQuery.

Answer: jQuery selectors are used to locate/select HTML elements from the DOM hierarchy based on their attributes, as listed below.

name
id
class
type
values
Basic Selector Types are:

Name
ID
Class Name
Universal selector, such as *, which selects all elements in a DOM.
Multiple elements. Example: <li>, <p>, <span>.
Attribute selector, Example: identify/select elements based on their attributes like color, font style, or background color.
Example of Multiple elements and Attribute selectors in jQuery is explained below.

Example of Multiple Elements
In the above jQuery code, the class attribute is a selector, and the font color of the text inside the HTML tag element is changed to green. This code will affect/change the font color of texts inside all those elements that have class attributes.

Q #15) Differentiate between the ID and Class selector in jQuery.

Answer: Each HTML element can have only one ID; in other words, an element can be identified with a unique ID, whereas you can use the same class on multiple elements.

Example of ID selector in jQuery to hide a DOM element with an ID as its attribute, say a <div> element with an ID of “gold_coin”

1
$('#gold_coin').hide();
If you want to hide, say all links have their class as “raw”,

1
$('a.raw').hide();
Intermediate Level Questions for jQuery Interview
Q #16) Explain the advantages of jQuery Ajax methods.

Answer: Ajax can request and receive data from the server without page reloading with the help of DOM and JavaScript.

Advantages of using Ajax methods in jQuery are listed below:

It allows us to take out the entire page reload and gives us the flexibility to load only a part of the page.
Simple API.
Cross-Browser support.
GET and POST are supported.
Upload JSON, XML, HTML, or script document.
Q #17) Differentiate between onload() and document.ready() jQuery methods.

Answer: The difference between onload() and document.ready() methods is that the onload() method of JavaScript will get called only after all the objects in the web document are completely displayed/loaded.

Whereas the document.ready() method gets called when the DOM structure gets loaded in the document. document.ready() method gets called very fast when compared to the onload() method, as the latter wait until the images are completely displayed.

Q #18) Explain the functionality of the connect() method of jQuery.

Answer: jQuery connect() is a plugin that is used to connect/bind a function to another function by assigning a handler. We can use an event of a DOM element using this function.

Q #19) Briefly explain the bootstrap and JavaScript plug-ins.

Answer: Bootstrap is a framework or toolset that includes HTML, CSS, and JavaScript to build a webpage or web application. Many of Bootstrap’s components require JavaScript plugins to function.

Q #20) Explain the Applications for jQuery Mobile.

Answer: jQuery Mobile is an open-source, cross-browser compatible framework designed to build mobile applications accessible on all smartphones, tablets, and desktop devices.

jQuery Mobile is created on jQuery and the User Interface of jQuery for rendering various special effects, handling Ajax requests/responses, and touch events, along with a variety of widgets.

Q #21) Differentiate between jquery.min.js and jquery.js

Answer: jquery.min.js and jquery.js have the same functionality; jquery.min.js has all empty spaces removed to make the file smaller in size and faster to load, resulting in script execution.

Having JS files minified in a production environment means that they will load faster and give quicker and better page performance.

Q #22) Explain the possibility of the jQuery HTML method for HTML and XML documents.

Answer: jQuery HTML method is not available on XML documents; it only works for HTML documents.

Q #23) Explain the functionality of jQuery UI (user interface).

Answer: jQuery UI is a jQuery library that provides building various user interface objects, such as multiple record lists where the users can select, sort, drag, drop, and resize particular DOM elements.

UI library also creates built-in widgets such as auto-complete, checkbox, radio buttons, datepicker, menu, etc., as well as adding effects, hiding, showing, or toggling, and other animations.

Q #24) Explain the functionality of a Data Table plug-in for jQuery.

Answer: Data Table is a jQuery plug-in that, when applied to records, is displayed in a tabular form.

We can sort the data across single and multiple columns, search for specific records, add pagination and records per page, and navigate the records in a table. Data Table can be applied to static data, arrays, data in JSON, and AJAX responses.

Q #25) Explain any of the advantages of hosting a jQuery from a CDN.

Answer: Hosting jQuery from the Content Delivery Network (CDN) helps in high availability and high performance at a lower cost and low network load, improved latency (lesser time is taken to send and receive a data packet from the server), and offers a device-specific version of content.

Example: Responsiveness to mobile screen size, and secured storage capacity for sensitive data or files.

Q #26) Identify any difference between .detach() and .remove() of jQuery.

Answer: detach() method of jQuery removes the selected element; however, it retains data and events. .remove() method of jQuery removes elements, data, and events.

Q #27) Can I use a jQuery library for server scripting?

Answer: jQuery is a client-side scripting JavaScript library. It can not be used for server-side scripting.

Q #28) Can you give some situations or scenarios for using jQuery?

Answer:

We can use jQuery in the following situations/scenarios:

We can apply a jQuery function that can change CSS static or dynamic properties.
We can call functions on events such as Form events, Keyboard events, Mouse events, and Browser events with the help of jQuery.
We can manipulate (add, edit, or delete) DOM elements using jQuery.
jQuery can be used for animation effects on the HTML element by gradually changing its static position to another position.
jQuery Scenario-Based Interview Questions
Q #29) List the four parameters used for the jQuery Ajax method.

Answer: URL address where the request is sent, Type of request, viz. GET or POST, Data/content to be sent to the server, and conditions for the browser to either allow or not cache the page requested are the four parameters used forthe jQuery Ajax method.

Q #30) Explain the functionality of the jQuery filter.

Answer: .filter() in jQuery will check for the matched element, and the attribute can be added to the matched element.

For example, for the .filter(), it can be as given below.

filterjQ
Line of code in jQuery.filter() API to locate/filter out list elements is as follows.

1
$( "li" ).filter( ":even" ).css( "background-color", "yellow" );
The result of the above method call is a yellow background for texts Physics, Mathematics, History, French, etc., that is at index 0, 2, 4, and so on, (remember index starts from 0, hence 0 is an even number) as shown in the image below.

filterOP
Q #31) What special character is used as a shortcut for jQuery?

Answer: $ is used in place of jQuery.

Example: jQuery(document).ready(function() ; can be used as $(document).ready(function()

Q #32) Explain the different ways in which we can debug jQuery.

Answer: There are a few ways in which we can debug jQuery code.

Modern-day browsers such as Google Chrome, Mozilla Firefox, Opera, and Safari have built-in Javascript debugger. To debug the jQuery code, Press F12 from your keyboard, and the browser with the built-in debugger will open a UI, wherein you select the ‘Console’ menu. The error will be displayed in the console menu if any.

You can write console.log() into the code to get the error text, you can also write debugger; in between the code line, due to debugger the script will start in debug mode, pressing F12 into the browser will open the console which will debug the code, pressing F10 will read values of the jQuery objects, and this is how we can debug jQuery code.

Q #33) Explain the possible ways in which we can include jQuery on a page.

Answer: You can download the compressed production version jquery-3.4.1.min.js from the https://jquery.com/download/ site, and save it into the lib folder under the project folder.

i) We can reference jQuery from the local folder at project/lib/Scripts as below.

1
<script src="Scripts/jquery-3.4.1.min.js"></script>
ii) We can reference from content delivery network sites such as Microsoft CDN as below.

1
<script src="https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.4.1.js"></script>
Q #34) Explain the functionality of .each() method in jQuery.

Answer: jQuery .each() is used to iterate/list the DOM elements present in the jQuery object.

Example

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
var veg_list = {
Onion,
Capsicum,
Sweet Potato,
Cauliflower,
Bitter Gourd,
Brinjal
};
 
$.each(veg_list, function (index, value) {
console.log(value);
});
 
// displays output  as Onion Capsicum Sweet Potato, Cauliflower Bitter Gourd Brinjal
Q #35) Differentiate between .prop() and .attr() methods of jQuery.

Answer: The following is the difference between .prop() and .attr().

Example:

code_attr
jQuery code contains the attr() method that modifies attribute values of an image, as shown below.

effectofattr
.attr() method of jQuery changes attributes like width and border of the image.

$(selector).attr(attribute of the element, value to which attributes are changed to).

.prop() method in jQuery is used to return and modify DOM properties such as checked, selected, or disabled state.

<input type="checkbox" value="pink" checked>Pink<br>
For input type as a checkbox, the value is pink, and the DOM property is checked.

prop_ex
jQuery code contains the prop() method that modifies the display property of an element.

prop_JQ
.attr() method helps us to select a value that is “pink” here, whereas .prop() method selects the property that is “checked” here.

Q #36) Explain the functionality of jQuery.noConflict.

Answer: noConflict() method of jQuery is applied to resolve conflicts when we need to use frameworks, other than jQuery.

For example, many JavaScript libraries such as Mootools, Prototype, Zepto, etc. use $, a function or variable name, that is used as a replacement for text jQuery in the jQuery code, and in such cases, .noConflict() method allows to use $ shortcut identifier, by allowing other scripts to use it.

Q #37) Differentiate between width() vs css(‘width’) in jQuery.

Answer: There are two different methods in jQuery to change the width of an element. The first way is to use .css(property) and the other way is to use .property().

Example:

1
2
$(selector).css(property,value_change);
$(selector).property(value_change);
In .css(property), which in this case is width, we have to add px in the value_change, say 300px.

We can use .property(value_change), which in this case is width, and you do not have to add px, but the direct value.

Q #38) Where can we apply the param() method in jQuery?

Answer: We can display an array, plain object or jQuery object in the form of a stream of bytes so that they can be stored into memory, file, or database using param() method in jQuery.

Q #39) Differentiate between $(this) and this in jQuery.

Answer: $(this) is a jQuery object, whereas this is a JavaScript global object reference, using this we can refer DOM element in an HTML document.

$(this) references the parent object, whereas this refers to a DOM element, which in the case of an array, represents an object with .each() method, that displays the current iteration.

Q #40) Describe the functionality of read cookies, write cookies, and delete cookies in jQuery.

Answer: When websites are visited, cookies are data values, such as the name of the user, that gets stored in small text files on the computer. While revisiting websites, the cookies help to remember the user’s name. JavaScript and jQuery create, read, and delete cookies with the document.cookie property.

Advanced Questions for jQuery Interview
Q #41) What is the use of the serialize() method in jQuery?

Answer: It serializes the form values so that its serialized values can be used in the URL query string while making an AJAX request.

.serialize() method of jQuery returns the input values of an HTML form in the form of a string.

Q #42) What is the use of the val() method in jQuery?

Answer: .val() method helps to find the value of an attribute of an HTML element. For example, form elements such as input, select, and textarea. Val() is also applied to find the value of all matched elements from checkboxes and radio buttons, as well as a drop-down list.

Example explained with syntax

1
2
3
4
5
6
// form elements such as dropdown with select tag and id mylst, the value of the selected option will have syntax as below
 
$( "select#mylst option:checked" ).val();
// form element such as a set of radio buttons with input type as radio and name rdobtn, the value can be retrieved
 
$( "input[type=radio][name=rdobtn]:checked" ).val();
Q #43) What is Method Chaining in jQuery? What advantages does it offer?

Answer: With jQuery method chaining, multiple actions can be applied on a single line of code, as all the methods return jQuery objects that can be utilized to call another method.

Without chaining, jQuery methods are called one after another in a separate line, whereas with chaining, jQuery methods are written in dot separated single lines of code.

Without chaining multiple lines of code that need to be written, jQuery searches the entire DOM for matched elements, then single methods in each line of code are applied. Whereas Chaining needs only a one-time selection of a matched element from the DOM, making better performance.

Q #44) What is the difference between jQuery.get() and jQuery.ajax()?

Answer: jQuery.ajax() method is used to send HTTP Ajax requests, whereas jQuery.get() method is used to send HTTP GET requests to load data from the server.

Q #45) What is QUnit?

Answer: QUnit is a framework, that tests JavaScript code written for jQuery, jQuery UI, and jQuery Mobile, using assertions and test fixtures to verify the expected results.

Q #46) How jQuery store data related to an element?

Answer: jQuery.data() method aids in attaching any type of data to DOM elements, free from memory leaks. jQuery makes sure that data is removed along with the DOM elements removed via jQuery methods.

Code for storing and retrieving data related to an element.

1
2
$('#myDiv').data('keyName', { foo : 'bar'});
$('#myDiv').data('keyName'); // { foo : 'bar'}
Q #47) Can you explain the various procedures of extracting a query string with regular expressions?

Answer: We can accomplish extracting a query string with a regular expression in the following two ways.

String-based approach: This method helps in deriving a String by comparing equivalent regular expressions, using .replace() method.
Regular expression approach: The most powerful method for extracting a query string and pattern must be used, which is compared with strings in JavaScript. Using .exec() and .test() methods for comparing with patterns. match(), matchAll(), replace(), search() and split() are other few methods for String.
Q #48) Explain the concept of the finish method in jQuery.

Answer: To stop all the queued animations and to help them place in their final state, the .finish() method is used.

Q #49) Differentiate between calling stop (true, true) and the finish method.

Answer: .finish() method helps in clearing the queue & helps the animations to enter into their end state, whereas .stop() method is called on an element, by forcing the currently running animation to stop instantly.

Q #50) How can you write a browser-specific code using jQuery?

Answer: We can write browser-specific code in jQuery using navigator.userAgent to identify the browser from Internet Explorer, Chrome, Firefox, Safari, and Opera, as the code is written below.

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
if (navigator.userAgent.search("MSIE") >= 0) {
// JQuery Code once navigator.userAgent identifies Microsoft Internet Explorer browser.
}
else if (navigator.userAgent.search("Chrome") >= 0) {
// JQuery Code once navigator.userAgent identifies Google Chrome browser.
}
 
else if (navigator.userAgent.search("Firefox") >= 0) {
// JQuery Code once navigator.userAgent identifies Mozilla Firefox browser.
}
 
else if (navigator.userAgent.search("Safari") >= 0 && navigator.userAgent.search("Chrome") < 0) {
// JQuery Code once navigator.userAgent identifies either Safari or Chrome browser type.
}
 
else if (navigator.userAgent.search("Opera") >= 0) {
// JQuery Code once navigator.userAgent identifies Opera browser.
}
Q #51) What is the procedure to check the data type of any variable in jQuery?

Answer: jQuery function type() is used to identify the data type of any variable, such as an array, string, number, function or object data type.
