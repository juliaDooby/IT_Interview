Top 150+ JavaScript Interview Questions and Answers for full-stack Web Developer
by Pulak Pramanik 0 comments 996 views
Table of Contents

JavaScript interview Questions and Answer for full-stack Web Developer
Core JavaScript Concepts interview Questions:
interview Questions for JavaScript ES6+ Features:
interview Questions for JavaScript DOM Manipulation:
interview Questions for Asynchronous JavaScript:
interview Questions for JavaScript Modules:
interview Questions for Object-Oriented Programming (OOP) in JavaScript:
interview Questions for Functional Programming in JavaScript:
interview Questions for JavaScript Error Handling and Debugging:
interview Questions for JavaScript Array Manipulation:
interview Questions for JavaScript String Manipulation:
interview Questions for JavaScript Regular Expressions (RegEx):
interview Questions for JavaScript Browser APIs and DOM Manipulation:
interview Questions for Miscellaneous in JavaScript:
interview Questions for JavaScript AJAX and Fetch API:
interview Questions for JavaScript Local Storage and Cookies:
interview Questions for JavaScript Testing:
interview Questions for JavaScript Debugging:
interview Questions for JavaScript Performance Optimization:
interview Questions for JavaScript Security:
interview Questions for JavaScript Frameworks and Libraries:
JavaScript Interview Tips:
Conclusions
Prepare for your full-stack web developer JavaScript interview Questions and Answer From basic concepts to advanced topics, with our comprehensive JavaScript Interview Questions and Answers guide. Master essential concepts and ace your next technical interview.

JavaScript interview Questions and Answer for full-stack Web Developer
Dive into our friendly JavaScript Interview Questions and Answers guide in Full-Stack Web Development, chapter by chapter, designed for full-stack web developers like you! which is base on ECMA Script-262. Whether you’re brushing up on basics or exploring advanced topics, we’ve got you covered with simple explanations and helpful insights to ace your next interview with confidence. Another only Core JavaScript interviews questions & Answers you can prepare it.

Core JavaScript Concepts interview Questions:
What is JavaScript?
JavaScript is a high-level, interpreted programming language used to create interactive effects within web browsers.
What are the data types in JavaScript?
JavaScript has six primitive data types: string, number, boolean, null, undefined, and symbol. Additionally, there is an object data type.
Explain hoisting in JavaScript.
Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope during the compile phase.
What is the difference between undefined and null?
undefined represents a variable that has been declared but has not been assigned a value, while null is an assignment value representing no value.
What is the this keyword in JavaScript?
The this keyword refers to the object to which the current code belongs. Its value depends on how a function is called.
What is the difference between == and ===?
== is used for equality comparison, where JavaScript performs type coercion if operands are of different types. === is used for strict equality comparison, where types and values must be the same.
Explain closures in JavaScript.
A closure is the combination of a function bundled together with references to its surrounding state. It gives you access to an outer function’s scope from an inner function.
What is event delegation in JavaScript?
Event delegation is a technique for listening to events where you delegate the responsibility of handling events to a common ancestor instead of handling the events on individual elements.
What is the event loop in JavaScript?
The event loop is a single-threaded mechanism that handles asynchronous callbacks in JavaScript. It continuously checks the call stack and the task queue, pushing tasks from the queue onto the stack when the stack is empty.
Explain the difference between let, const, and var.
var is function-scoped, let and const are block-scoped. var can be redeclared and reassigned, let can be reassigned but not redeclared, and const cannot be reassigned or redeclared.
What is the difference between dot notation and bracket notation?
Dot notation is used to access properties of an object using the dot (.) operator.
Bracket notation is used to access properties using square brackets ([]), and it allows for dynamic property names.
Explain object destructuring in JavaScript.
Object destructuring allows you to extract multiple properties from an object into separate variables.
interview Questions for JavaScript ES6+ Features:
What are arrow functions in JavaScript?
Arrow functions are a concise way to write anonymous function expressions in JavaScript, with a more intuitive syntax and lexical scoping of this.
What is a callback function?
A callback function is a function passed as an argument to another function, which is then invoked inside the outer function.
Explain destructuring in JavaScript.
Destructuring allows you to extract values from arrays or properties from objects into distinct variables.
What are template literals in JavaScript?
Template literals are string literals that allow embedded expressions, providing an easier way to concatenate strings and interpolate variables.
What is the ... spread operator in JavaScript?
The spread operator allows an iterable to be expanded in places where multiple arguments (for function calls) or multiple elements (for array literals) are expected.
What are the Map and Set data structures in JavaScript?
Map is a collection of key-value pairs, and Set is a collection of unique values.
Explain async/await in JavaScript.
async/await is a syntactic sugar for writing asynchronous code. It allows you to write asynchronous code in a synchronous manner, making it easier to read and maintain.
What are Promises in JavaScript?
Promises are objects representing the eventual completion or failure of an asynchronous operation. They are used to handle asynchronous computations.
What is the for...of loop in JavaScript?
The for...of loop is used to iterate over iterable objects such as arrays, strings, maps, sets, etc.
Explain the Object.entries() and Object.fromEntries() methods.
Object.entries() returns an array of a given object’s own enumerable string-keyed property [key, value] pairs. Object.fromEntries() transforms a list of key-value pairs into an object.
What is the Symbol data type in JavaScript?
Symbol is a primitive data type introduced in ECMAScript 6, used to create unique identifiers for object properties.
Explain the this keyword in JavaScript?
this refers to the object to which a function belongs or is called upon.
Explain the difference between function declaration and function expression.
Function declarations are hoisted, meaning they can be called before they’re defined.
Function expressions are not hoisted and cannot be called before they’re defined.
interview Questions for JavaScript DOM Manipulation:
What is the Document Object Model (DOM)?
The DOM is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content.
Explain how you would add an event listener in JavaScript.
You can use the addEventListener() method to attach an event handler to an element.
What is the difference between innerText and innerHTML?
innerText sets or returns the text content of the specified node, while innerHTML sets or returns the HTML content of an element.
How can you create elements dynamically in JavaScript?
You can use the document.createElement() method to create a new element, and then append it to an existing element using methods like appendChild().
Explain event bubbling and event capturing.
Event bubbling is the process where the event is first captured and handled by the innermost element and then propagated to outer elements. Event capturing is the opposite; the event is first captured by the outermost element and propagated to the inner elements.
What is the difference between window.onload and document.ready?
window.onload fires when the entire page (including images and external resources) is loaded, while document.ready (used in jQuery) fires when the DOM is ready, which may be before images are fully loaded.
How can you remove an element from the DOM?
You can use the removeChild() method to remove a child node from an element.
What is event delegation, and how does it work?
Event delegation is a technique for handling events where you attach a single event listener to a parent element instead of individual child elements. When an event occurs, it bubbles up to the parent, and you can determine which child element triggered the event.
What are data attributes, and how are they used?
Data attributes allow you to store extra information on HTML elements in the form of custom attributes prefixed with data-. They are commonly used to store data for JavaScript to access.
How can you get and set attributes of an HTML element in JavaScript?
You can use methods like getAttribute() and setAttribute() to get and set attributes of an HTML element.
How do you access elements in the DOM using JavaScript?
Using methods like getElementById(), getElementsByClassName(), getElementsByTagName(), querySelector(), and querySelectorAll().
How do you manipulate HTML content using JavaScript?
By accessing element properties such as innerHTML, textContent, innerText, value, etc.
How do you add and remove event listeners in JavaScript?
Using the addEventListener() method to add listeners and the removeEventListener() method to remove them.
Explain event propagation in JavaScript.
Event propagation refers to the order in which event handlers are executed when an event occurs on a DOM element.
interview Questions for Asynchronous JavaScript:
What is asynchronous programming in JavaScript?
Asynchronous programming is a programming paradigm that allows the CPU to perform other tasks while waiting for long-running tasks (such as I/O operations) to complete.
Explain callbacks in JavaScript.
A callback is a function passed as an argument to another function, which will be invoked or executed later.
What is the callback hell? How can you avoid it?
Callback hell refers to the situation where multiple nested callbacks make the code difficult to read and maintain. You can avoid it by using promises, async/await, or modularizing your code.
What are promises in JavaScript?
Promises are objects representing the eventual completion or failure of an asynchronous operation. They allow you to handle asynchronous computations in a more manageable way.
Explain the fetch API in JavaScript.
The fetch API is a modern replacement for XMLHttpRequest for making HTTP requests. It provides a more flexible and powerful interface for fetching resources from the network.
What are async functions in JavaScript?
Async functions are a syntactic sugar for writing asynchronous code using promises. They allow you to write asynchronous code in a synchronous manner, making it easier to read and maintain.
What is the purpose of the await keyword in JavaScript?
The await keyword is used to pause the execution of an async function until a promise is settled (resolved or rejected), and to resume execution after the promise is settled, with the resolved value returned by the promise.
How can you handle errors in asynchronous code in JavaScript?
You can use try...catch blocks or .catch() method chaining to handle errors in asynchronous code.
Explain the difference between Promise.all() and Promise.race().
Promise.all() takes an array of promises and returns a single promise that resolves when all of the input promises have resolved. Promise.race() takes an array of promises and returns a single promise that resolves or rejects as soon as one of the input promises resolves or rejects.
What are generators in JavaScript?
Generators are functions that can be paused and resumed. They allow you to generate a sequence of values lazily, on-demand.
interview Questions for JavaScript Modules:
What are modules in JavaScript?
Modules are reusable pieces of code that encapsulate related functionality.
How do you create and export modules in JavaScript?
Using the export keyword to export functions, variables, or objects from a module.
How do you import modules in JavaScript?
Using the import keyword to import functions, variables, or objects from a module.
What are named exports and default exports?
Named exports allow you to export multiple values from a module, while default exports allow you to export a single value.
interview Questions for Object-Oriented Programming (OOP) in JavaScript:
What is object-oriented programming (OOP)?
Object-oriented programming is a programming paradigm based on the concept of “objects,” which can contain data in the form of fields (properties) and code in the form of procedures (methods).
How can you create objects in JavaScript?
You can create objects using object literals, constructor functions, or the class syntax introduced in ES6.
Explain the concept of prototypes in JavaScript.
Prototypes are the mechanism by which JavaScript objects inherit features from one another. Each object has a prototype object from which it inherits properties and methods.
What is inheritance in JavaScript?
Inheritance is a mechanism by which an object can inherit properties and methods from another object. It allows for code reuse and promotes modularity.
What are constructor functions in JavaScript?
Constructor functions are functions used to create objects with a specific structure and behavior. They are typically used with the new keyword to create new instances of objects.
What is the prototype property in JavaScript?
The prototype property allows you to add properties and methods to an object’s prototype, which are then inherited by all instances of that object.
How do you create prototypes in JavaScript?
By adding properties and methods to the prototype object of a constructor function.
What is prototype chaining in JavaScript?
Prototype chaining is the process of searching for properties and methods in an object’s prototype chain if they are not found in the object itself.
Explain prototypal inheritance in JavaScript.
Prototypal inheritance is the ability of objects to inherit properties and methods from other objects.
What is the class keyword in JavaScript?
The class keyword is a syntactic sugar for defining constructor functions and prototype methods in a more concise and readable way.
Explain the super keyword in JavaScript.
The super keyword is used to call methods on an object’s parent class. It is used within constructor functions and methods of child classes to call corresponding methods or constructors of the parent class.
What is method chaining in JavaScript?
Method chaining is a technique where multiple methods are called on the same object in a single statement, with each method returning the object itself, allowing for the creation of fluent interfaces.
What is encapsulation in JavaScript?
Encapsulation is the bundling of data and methods that operate on the data into a single unit (object). It allows for the hiding of implementation details and the exposure of a controlled interface to the outside world.
What are constructors in JavaScript?
Constructors are special methods used for initializing objects created with a class.
interview Questions for Functional Programming in JavaScript:
What is functional programming?
Functional programming is a programming paradigm that treats computation as the evaluation of mathematical functions and avoids changing state and mutable data.
Explain pure functions in JavaScript.
A pure function is a function that always returns the same result given the same input and does not have any side effects. It does not modify variables outside its scope or change the state of the program.
What are higher-order functions in JavaScript?
Higher-order functions are functions that can take other functions as arguments or return functions as their result. They are a fundamental concept in functional programming.
What is currying in JavaScript?
Currying is the process of transforming a function that takes multiple arguments into a sequence of functions that each take a single argument. It allows for partial application of functions.
What is immutability in JavaScript?
Immutability is the concept of not changing the state of an object after it has been created. In JavaScript, immutable data structures are often used to ensure that data remains unchanged.
What is function composition in JavaScript?
Function composition is the process of combining two or more functions to produce a new function. It involves passing the output of one function as the input to another function.
Explain the map, filter, and reduce functions in JavaScript.
map is used to transform each element of an array using a given function. filter is used to create a new array with elements that pass a certain condition. reduce is used to reduce an array to a single value by applying a function to each element.
What are side effects in JavaScript?
Side effects are changes made to the state of a program that are observable outside the function performing the computation. They can include modifying external variables, performing I/O operations, or throwing exceptions.
What is memoization in JavaScript?
Memoization is an optimization technique used to speed up function calls by caching the results of expensive function calls and returning the cached result when the same inputs occur again.
What is recursion in JavaScript?
Recursion is a programming technique where a function calls itself in order to solve smaller instances of the same problem. It is often used in situations where a problem can be divided into smaller subproblems.
interview Questions for JavaScript Error Handling and Debugging:
How can you debug JavaScript code?
You can use browser developer tools, console.log statements, breakpoints, and debugging statements like debugger to debug JavaScript code.
What is error handling in JavaScript?
Error handling is the process of anticipating and responding to errors that may occur during the execution of a program. It involves catching and handling exceptions to prevent program crashes.
Explain the try…catch…finally statement in JavaScript.
The try...catch...finally statement is used for error handling in JavaScript. The try block contains the code that may throw an exception, the catch block handles the exception if one occurs, and the finally block executes code regardless of whether an exception was thrown.
What is the throw statement in JavaScript?
The throw statement is used to explicitly throw an exception. It can be used in conjunction with the try...catch statement to handle errors.
What is the console object in JavaScript?
The console object provides access to the browser’s debugging console and methods for logging messages, warnings, errors, and other information.
How can you log messages to the console in JavaScript?
You can use methods like console.log(), console.warn(), console.error(), and console.info() to log messages to the console.
What is the difference between console.log() and console.dir()?
console.log() is used to log a message to the console, while console.dir() is used to display an interactive list of the properties of a specified JavaScript object.
Explain the debugger statement in JavaScript.
The debugger statement is used to pause the execution of JavaScript code and start a debugging session. It can be placed anywhere in the code, and when encountered, it will cause the browser’s debugger to open.
What is source mapping in JavaScript debugging?
Source mapping is a technique used to map the generated code (e.g., minified or transpiled code) back to its original source code, making it easier to debug.
What are some common debugging techniques in JavaScript?
Some common debugging techniques include using breakpoints, stepping through code, inspecting variables, logging messages to the console, and using the browser’s developer tools.
What is the finally block in error handling?
The finally block is used to execute code, regardless of whether an exception is thrown or caught.
Explain the throw statement in JavaScript.
The throw statement allows you to throw an exception explicitly.
interview Questions for JavaScript Array Manipulation:
What are arrays in JavaScript?
Arrays are ordered collections of values, each identified by an index. They can contain values of any data type, including other arrays.
How can you create an array in JavaScript?
You can create an array using array literals ([]) or the Array() constructor.
Explain how you can access and modify elements in an array in JavaScript.
You can access elements in an array using bracket notation (array[index]), and you can modify elements by assigning new values to specific indices.
What are array methods in JavaScript?
Array methods are built-in functions that can be called on arrays to perform common operations such as adding or removing elements, iterating over elements, and transforming arrays.
What is the push() method in JavaScript?
The push() method adds one or more elements to the end of an array and returns the new length of the array.
What is the pop() method in JavaScript?
The pop() method removes the last element from an array and returns that element.
What is the shift() method in JavaScript?
The shift() method removes the first element from an array and returns that element, shifting all subsequent elements to a lower index.
What is the unshift() method in JavaScript?
The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.
Explain the splice() method in JavaScript.
The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
What is the slice() method in JavaScript?
The slice() method returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included) where begin and end represent the index of items in that array.
interview Questions for JavaScript String Manipulation:
What are strings in JavaScript?
Strings are sequences of characters used to represent text. They can be created using string literals or the String() constructor.
How can you concatenate strings in JavaScript?
You can concatenate strings using the + operator or the concat() method.
What is the charAt() method in JavaScript?
The charAt() method returns the character at the specified index (position) in a string.
What is the split() method in JavaScript?
The split() method splits a string into an array of substrings based on a specified separator and returns the new array.
What is the substring() method in JavaScript?
The substring() method returns a subset of a string between two indices, not including the end index.
What is the substr() method in JavaScript?
The substr() method returns a substring of a string starting from a specified index and optionally including a specified number of characters.
What is the toUpperCase() method in JavaScript?
The toUpperCase() method returns the calling string value converted to uppercase.
What is the toLowerCase() method in JavaScript?
The toLowerCase() method returns the calling string value converted to lowercase.
What is the trim() method in JavaScript?
The trim() method removes whitespace from both ends of a string.
What is the replace() method in JavaScript?
The replace() method returns a new string with some or all matches of a pattern replaced by a replacement string.
interview Questions for JavaScript Regular Expressions (RegEx):
What are regular expressions in JavaScript?
Regular expressions are patterns used to match character combinations in strings. They are a powerful tool for text processing and manipulation.
How can you create a regular expression in JavaScript?
You can create a regular expression using the RegExp constructor or a literal notation (/pattern/flags).
What are flags in regular expressions?
Flags are optional parameters that modify the behavior of a regular expression (e.g., i for case-insensitive matching, g for global matching).
How do you use regular expressions in JavaScript?
Using methods like test(), exec(), match(), replace(), search(), and split().
Explain the test() method in JavaScript regular expressions.
The test() method executes a search for a match between a regular expression and a specified string. It returns true if a match is found, otherwise false.
Explain the exec() method in JavaScript regular expressions.
The exec() method executes a search for a match in a specified string. It returns an array containing the matched text if a match is found, otherwise null.
What are character classes in JavaScript regular expressions?
Character classes allow you to match any one of a range of characters. They are denoted by square brackets ([ ]) and can contain individual characters or ranges.
What are quantifiers in JavaScript regular expressions?
Quantifiers specify the number of occurrences of a character or group in a regular expression. They include * (zero or more), + (one or more), ? (zero or one), and {} (specific number of occurrences).
What are capturing groups in JavaScript regular expressions?
Capturing groups are portions of a pattern that are enclosed in parentheses. They allow you to extract and manipulate parts of a matched string.
What are lookahead and lookbehind assertions in JavaScript regular expressions?
Lookahead and lookbehind assertions are zero-length assertions that match a string only if it is followed or preceded by another string, respectively.
What are boundary matchers in JavaScript regular expressions?
Boundary matchers are used to match positions where specific boundaries occur in a string. They include ^ (start of string), $ (end of string), \b (word boundary), and \B (non-word boundary).
What are flags in JavaScript regular expressions?
Flags are optional parameters that modify the behavior of a regular expression. They are appended to the end of a regular expression literal and include i (case-insensitive), g (global match), and m (multiline).
interview Questions for JavaScript Browser APIs and DOM Manipulation:
What are browser APIs in JavaScript?
Browser APIs are sets of functions and methods provided by web browsers to interact with various aspects of the browser environment, such as the DOM, HTML5 features, CSS styling, and more.
Explain the localStorage and sessionStorage APIs in JavaScript.
localStorage and sessionStorage are web storage APIs that allow you to store key-value pairs locally in the browser. localStorage persists data even after the browser is closed, while sessionStorage data is cleared when the session ends (i.e., when the browser is closed).
What is the addEventListener() method in JavaScript?
The addEventListener() method is used to attach an event listener to an element. It takes an event type and a callback function as arguments and executes the callback when the specified event occurs on the element.
What is the fetch() API in JavaScript?
The fetch() API is used to make asynchronous HTTP requests in JavaScript. It returns a promise that resolves to the response to the request.
What is the XMLHttpRequest object in JavaScript?
The XMLHttpRequest object is a built-in browser object used to make HTTP requests in JavaScript. It provides an easy way to send and receive data from a web server asynchronously.
What are WebSockets in JavaScript?
WebSockets are a communication protocol that provides full-duplex communication channels over a single TCP connection. They enable real-time, bidirectional communication between a client and a server.
What is the Canvas API in JavaScript?
The Canvas API is a HTML5 feature that allows you to draw graphics and animations on a web page using JavaScript.
What is the Web Storage API in JavaScript?
The Web Storage API provides mechanisms by which browsers can store key/value pairs in a much more intuitive fashion than using cookies.
What is the File API in JavaScript?
The File API provides access to the contents of files using JavaScript, allowing web applications to read and manipulate files on the client’s system.
What is the Geolocation API in JavaScript?
The Geolocation API allows web applications to retrieve the geographical location information of a user’s device.
interview Questions for Miscellaneous in JavaScript:
What are polyfills in JavaScript?
Polyfills are pieces of code (usually JavaScript) that provide modern functionality on older browsers that do not natively support it.
What is the JavaScript event loop?
The event loop is a mechanism that allows JavaScript to perform non-blocking I/O operations by handling asynchronous callbacks in a single-threaded environment.
What are some common JavaScript performance optimization techniques?
Some common performance optimization techniques include minimizing DOM manipulation, reducing HTTP requests, optimizing JavaScript code, using caching techniques, and lazy-loading resources.
What are some security considerations when working with JavaScript?
Some security considerations include avoiding injection attacks (such as XSS and SQL injection), validating and sanitizing user input, using secure authentication and authorization mechanisms, and protecting sensitive data.
How can you improve the accessibility of a web application using JavaScript?
You can improve accessibility by ensuring proper semantic HTML markup, providing alternative text for images, implementing keyboard navigation, using ARIA roles and attributes, and testing with screen readers.
What are some best practices for writing clean and maintainable JavaScript code?
Some best practices include using meaningful variable and function names, following consistent coding style conventions, avoiding unnecessary global variables, modularizing code, commenting code where necessary, and writing unit tests.
How can you optimize website performance for mobile devices using JavaScript?
You can optimize performance for mobile devices by minimizing file sizes (e.g., JavaScript, CSS, and images), using responsive design techniques, lazy-loading resources, minimizing DOM manipulation, and testing on real mobile devices.
What are some JavaScript design patterns, and when would you use them?
Some common design patterns include Singleton, Module, Factory, Observer, and MVC. You would use design patterns to solve recurring design problems and improve code maintainability, scalability, and reusability.
What are some tools and libraries commonly used in JavaScript development?
Some common tools and libraries include package managers (such as npm and Yarn), task runners (such as Gulp and Grunt), build tools (such as webpack and Babel), testing frameworks (such as Jest and Mocha), and front-end libraries and frameworks (such as React, Angular, and Vue.js).
Explain the difference between cookies, localStorage, and sessionStorage.
Cookies are small pieces of data stored in the browser that are sent with every HTTP request. They have a limited size (typically 4KB) and are sent to the server with every request, which can impact performance. localStorage and sessionStorage are newer web storage APIs that allow larger amounts of data (up to 5MB) to be stored locally in the browser. localStorage data persists even after the browser is closed, while sessionStorage data is cleared when the session ends (i.e., when the browser is closed).
interview Questions for JavaScript AJAX and Fetch API:
What is AJAX in JavaScript?
AJAX (Asynchronous JavaScript and XML) is a technique for updating parts of a web page without reloading the whole page.
How do you make AJAX requests in JavaScript?
Using the XMLHttpRequest object or the newer fetch() API.
What is the Fetch API in JavaScript?
The Fetch API provides an interface for fetching resources asynchronously across the network.
How do you use the Fetch API to make HTTP requests?
By calling the fetch() function with the URL of the resource you want to fetch.
What are promises in the Fetch API?
Promises are used to handle the results of asynchronous operations in the Fetch API.
How do you handle errors in Fetch API requests?
By chaining a .catch() method to the promise returned by the fetch() function.
interview Questions for JavaScript Local Storage and Cookies:
What is local storage in JavaScript?
Local storage is a mechanism that allows web applications to store data locally within the user’s browser.
How do you use local storage in JavaScript?
By using the localStorage object, which provides methods like setItem(), getItem(), removeItem(), and clear().
What are cookies in JavaScript?
Cookies are small pieces of data stored on the client’s browser by websites.
How do you create and read cookies in JavaScript?
By setting cookie values using the document.cookie property and reading them from the same property.
What are the differences between local storage and cookies?
Local storage has a larger storage capacity than cookies.
Local storage data is not sent with every HTTP request, while cookies are.
Local storage data is stored indefinitely, while cookies can have expiration dates.
interview Questions for JavaScript Testing:
What is unit testing in JavaScript?
Unit testing is the process of testing individual units or components of a software application in isolation.
How do you write unit tests in JavaScript?
Using testing frameworks like Jasmine, Mocha, or Jest, and assertion libraries like Chai or Expect.
What is test-driven development (TDD)?
Test-driven development is a software development process where tests are written before the code is implemented.
What is mocking in JavaScript testing?
Mocking is the process of creating simulated versions of objects or functions in order to test the behavior of other objects or functions.
What is code coverage in JavaScript testing?
Code coverage is a measure used to describe the degree to which the source code of a program has been tested.
interview Questions for JavaScript Debugging:
How do you debug JavaScript code?
Using browser developer tools like Chrome DevTools or Firefox Developer Tools.
By inserting console.log() statements into the code.
What are breakpoints in JavaScript debugging?
Breakpoints are points in the code where execution will pause so that you can inspect the state of the program.
How do you set breakpoints in JavaScript code?
By clicking on the line number in the source code or using the debugger statement.
interview Questions for JavaScript Performance Optimization:
What are some common performance issues in JavaScript?
Inefficient DOM manipulation, excessive memory usage, long-running JavaScript code, blocking operations, etc.
How do you optimize JavaScript performance?
Minifying and compressing JavaScript code.
Reducing DOM manipulation.
Optimizing images and other media files.
What is lazy loading in JavaScript?
Lazy loading is a technique where resources are loaded only when they are needed, rather than all at once.
How do you implement lazy loading in JavaScript?
By deferring the loading of non-critical resources until they are needed, often using Intersection Observer API or custom JavaScript.
interview Questions for JavaScript Security:
What are some common security vulnerabilities in JavaScript?
Cross-site scripting (XSS), Cross-site request forgery (CSRF), SQL injection, insecure direct object references, etc.
How do you prevent XSS attacks in JavaScript?
By properly escaping user input, validating and sanitizing data, and using Content Security Policy (CSP) headers.
What is Content Security Policy (CSP) in JavaScript?
CSP is a security standard that helps prevent XSS attacks by allowing website administrators to control which resources can be loaded and executed on their web pages.
How do you handle authentication and authorization in JavaScript applications?
By using techniques like JSON Web Tokens (JWT), OAuth, and session management.
interview Questions for JavaScript Frameworks and Libraries:
What are some popular JavaScript frameworks and libraries?
React, Angular, Vue.js, jQuery, Bootstrap, Express.js, Node.js, etc.
What is React and how does it differ from other frameworks?
React is a JavaScript library for building user interfaces. It uses a virtual DOM and a component-based architecture.
What is Angular and how does it differ from React?
Angular is a JavaScript framework for building single-page applications. It provides a full-featured MVC architecture and two-way data binding.
What is Vue.js and how does it differ from React and Angular?
Vue.js is a progressive JavaScript framework for building user interfaces. It is more lightweight and easier to learn than React and Angular.
How do you choose between different JavaScript frameworks and libraries?
It depends on factors like project requirements, team expertise, performance, community support, and ecosystem.
What are some advantages of using JavaScript frameworks and libraries?
They provide pre-built components and tools for building applications faster.
They have active communities and ecosystems with extensive documentation and resources.
What are some disadvantages of using JavaScript frameworks and libraries?
They may introduce a learning curve for developers.
They can add overhead to the application size and complexity.
JavaScript Interview Tips:
Practice coding regularly to improve your problem-solving skills.
Review common algorithms and data structures used in JavaScript.
Be prepared to discuss your previous projects and experiences.
Stay updated on the latest developments in JavaScript and web development.
Ask questions during the interview to demonstrate your interest and understanding.
Conclusions
This comprehensive list covers various aspects of JavaScript that are commonly asked in interviews for full-stack web development positions. Make sure to understand each concept thoroughly and practice coding examples to solidify your understanding. Good luck with your interviews!

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
