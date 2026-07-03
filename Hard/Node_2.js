
Useful Node.js interview questions
What is an error-first callback?
How can you avoid callback hells?
How can you listen on port 80 with Node?
What’s the event loop?
What tools can be used to assure consistent style?
What’s the difference between operational and programmer errors?
Why npm shrinkwrap is useful?
What’s a stub? Name a use case.
What’s a test pyramid? How can you implement it when talking about HTTP APIs?
What’s your favourite HTTP framework and why?
Now let’s see the answers!

What is an error-first callback?
Error-first callbacks are used to pass errors and data. The first argument is always an error object that the programmer has to check if something went wrong. Additional arguments are used to pass data.

fs.readFile(filePath, function(err, data) {  
  if (err) {
    //handle the error
  }
  // use the data object
});
How does this question help?

The answer for this question will get you some insight on whether the candidate has some basic knowledge on how async operations work in Node.

Are you looking for help with enterprise-grade Node.js Development?
Hire the Node.js experts of RisingStack!

How can you avoid callback hells?
To do so you have more options:

modularization: break callbacks into independent functions
use Promises
use yield with Generators and/or Promises
How does this question help?

The answer for this question may vary a lot, depending on how up-to-date one is, how closely is she following the latest developments, be it ES6, ES7 or just a new control flow library.

How can you listen on port 80 with Node?
Trick question! You should not try to listen with Node on port 80 (in Unix-like systems) – to do so you would need superuser rights, but it is not a good idea to run your application with it.

Still, if you want to have your Node.js application listen on port 80, here is what you can do. Run the application on any port above 1024, then put a reverse proxy like nginx in front of it.

How does this question help?

This question helps you to find out whether the one you are talking to has any experience operating Node applications.

What’s the event loop?
TL;DR:

It is a magical place filled with unicorns and rainbows – Trevor Norris

Node.js runs using a single thread, at least from a Node.js developer’s point of view. Under the hood Node.js uses many threads through libuv.

Every I/O requires a callback – once they are done they are pushed onto the event loop for execution. If you need a more detailed explanation, I suggest viewing this video:


How does this question help?

This will give you an insight on how deep someone’s knowledge on Node is, if she/he knows what libuv is.

What tools can be used to assure consistent style?
You have plenty of options to do so:

JSLint by Douglas Crockford
JSHint
ESLint
JSCS
These tools are really helpful when developing code in teams, to enforce a given style guide and to catch common errors using static analysis.

How does this question help?

With this you will have some idea if the one you are talking to has any experience on how large scale JavaScript applications should be developed.

What’s the difference between operational and programmer errors?
Operation errors are not bugs, but problems with the system, like request timeout or hardware failure.

On the other hand programmer errors are actual bugs.

How does this question help?

As this question has little to do with Node, you can get a more general idea on the candidate’s level.

Why is npm shrinkwrap useful?
This command locks down the versions of a package’s dependencies so that you can control exactly which versions of each dependency will be used when your package is installed. – npmjs.com

It is useful when you are deploying your Node.js applications – with it you can be sure which versions of your dependencies are going to be deployed.

How does this question help?

This questions helps to get a deeper understanding on the candidate’s knowledge of both the npm cli and Node.js operational best practices.

What’s a stub? Name a use case.
Stubs are functions/programs that simulate the behaviours of components/modules. Stubs provide canned answers to function calls made during test cases. Also, you can assert on with what these stubs were called.

A use-case can be a file read, when you do not want to read an actual file:

var fs = require('fs');

var readFileStub = sinon.stub(fs, 'readFile', function (path, cb) {
  return cb(null, 'filecontent');
});

expect(readFileStub).to.be.called;
readFileStub.restore();
How does this question help?

This question helps to get some clue on one’s testing knowledge – if she/he don’t know what stubs are you can ask how she/he does unit testing.

What’s a test pyramid? How can you implement it when talking about HTTP APIs?
A test pyramid describes that when writings test cases there should be a lot more low-level unit tests than high level end-to-end tests.

When talking about HTTP APIs, it may come down to this:

a lot of low-level unit tests for your models
less integration tests, where your test how your models interact with each other
a lot less acceptance tests, where you test the actual HTTP endpoints
How does this question help?

How experienced your candidate in testing? This question will tell a lot about that, especially if she/he can go into the details of each level, and for each level what kind of tools can be used.

What’s your favourite HTTP framework and why?
There is no right answer for this. The goal here is to understand how deeply one knows the framework she/he uses, if can reason about it, knows the pros, cons.

Things that work better than these questions
As you may already guessed, we are not huge fans of these type of questions. Instead we do believe in small, real-life problems, solved together. During these you will get a very good understanding of how one thinks. But not just that. You will know if she/he is a good fit for your team, as you have to solve something together.

When we are hiring (and we are always hiring) we usually look for a combination of the following:

cultural fit
transparency
self-improvement
bias towards clarity
do things smarter than harder
skill and expertise
Spending as little as half a day with your possible next co-worker is worth more than a thousand questions.

UPDATE: A follow up of this article called Node.js Interview Questions and Answers (2017 Edition) just got published on the RisingStack blog. The majority of the questions are different from what you read in this article, so I recommend to check it out as well!

Node Interview Questions and Answers (2025) - Intermediate Level
Last Updated : 23 Jul, 2025
NodeJS is an open-source, cross-platform runtime environment that allows you to execute JavaScript code on the server side. Built on Chrome’s V8 JavaScript engine, NodeJS is designed for building scalable, high-performance applications, especially with its event-driven, non-blocking (asynchronous) I/O model. It enables developers to use JavaScript for both client-side and server-side scripting, making it a powerful tool for full-stack development.

In this article, we will explore NodeJS interview questions and answers – Intermediate Level 2025, covering the key concepts and topics that are commonly asked in interviews for candidates with 1-2 years of experience. Whether you’re preparing for an upcoming interview or looking to deepen your understanding of NodeJS, this guide will provide insights into the core concepts and practical applications of NodeJS.

Prerequisite
NodeJS Interview Questions and Answers (2025) – Beginner Level
NodeJS Interview Questions and Answers (2025) – Advanced Level
Node Intermediate Interview Questions – 2025
This set contains the intermediate-level questions asked in the interview.

1. What is event-driven programming in NodeJS?
Event-driven programming is used to synchronize the occurrence of multiple events and to make the program as simple as possible. The basic components of an Event-Driven Program are:

A callback function ( called an event handler) is called when an event is triggered.
An event loop that listens for event triggers and calls the corresponding event handler for that event.
2. What is a buffer in NodeJS?
The Buffer class in NodeJS is used to perform operations on raw binary data. Generally, a buffer refers to a particular location in memory. Buffer and array have some similarities, but the difference is that array can be any type, and it can be resizable. Buffers only deal with binary data, and they can not be resized. Each integer in a buffer represents a byte. console.log() function is used to print the Buffer instance.

3. What are streams in NodeJS?
Streams are a type of data-handling method used to read or write input into output sequentially. Streams are used to handle reading/writing files or exchanging information in an efficient way. The stream module provides an API for implementing the stream interface. Examples of the stream object in NodeJS can be a request to an HTTP server and process.stdout are both stream instances.

4. Explain crypto module in NodeJS
The crypto module is used for encrypting, decrypting, or hashing any type of data. This encryption and decryption basically help to secure and add a layer of authentication to the data. The main use case of the crypto module is to convert the plain readable text to an encrypted format and decrypt it when required.

5. What is callback hell?
Callback hell is an issue caused due to a nested callback. This causes the code to look like a pyramid and makes it unable to read To overcome this situation we use promises.

6. Explain the use of timers module in NodeJS
The Timers module in NodeJS contains various functions that allow us to execute a block of code or a function after a set period of time. The Timers module is global, we do not need to use require() to import it. 

It has the following methods:

setTimeout() method
setImmediate() method
setInterval() method
7. Difference between setImmediate() and process.nextTick() methods
Feature

setImmediate()

process.nextTick()

Execution Timing

Executes the callback after the current event loop cycle, but before the I/O tasks.

Executes the callback immediately after the current operation, before any I/O or timers.

Priority

Executes after I/O events and before timers.

Executes before any I/O events or timers.

Stack Overflow Risk

Less likely to cause a stack overflow because it is queued after the current event loop phase.

Can cause a stack overflow if used excessively because it executes before I/O or other operations, potentially blocking the event loop.

Use Case

Used when you want to execute a callback after the event loop is done processing the current phase but before the next one starts.

Used to schedule a callback to be executed before any I/O events or timers in the current phase.

Example

setImmediate(() => { console.log('Immediate'); });

process.nextTick(() => { console.log('Next Tick'); });

8. What are the pros and cons of NodeJS?
Pros of NodeJS

Pros

Explanation

Non-blocking, Asynchronous I/O

NodeJS handles multiple requests simultaneously without waiting for one to finish, making it ideal for I/O-heavy applications like APIs, real-time apps, etc.

High Performance (V8 Engine)

Built on Chrome's V8 JavaScript engine, NodeJS compiles JavaScript directly into machine code, leading to faster execution, especially for I/O-bound tasks.

Active Community

NodeJS has a large, active, and supportive community, making it easier to find solutions to problems and stay updated with the latest advancements.

Cons of NodeJS

Cons

Explanation

Single-Threaded Nature

While the single-threaded model is a benefit for I/O-bound tasks, it limits NodeJS for certain types of applications, especially those requiring heavy computation.

Callback Hell

Asynchronous programming can lead to deeply nested callbacks, which can result in "callback hell" or difficult-to-manage code if not handled properly (e.g., with Promises).

Debugging Difficulties

Debugging asynchronous code in NodeJS can be tricky due to its non-blocking nature. Stack traces can be harder to follow in a callback-heavy codebase.

9. What is the difference between process.nextTick() and setImmediate() method?
Feature

process.nextTick()

setImmediate()

Execution Timing

Executes the callback immediately after the current operation, before any I/O or timers.

Executes the callback after the current event loop cycle, after I/O events but before timers.

Priority

Has a higher priority than I/O events and timers, making it execute first.

Executes after I/O events but before timers, giving it lower priority than process.nextTick().

Blocking Potential

Can cause a stack overflow if used excessively, as it keeps the event loop busy without yielding.

Less likely to block the event loop, as it schedules the callback in the next iteration.

Use Case

Used for handling situations where you need to execute a callback immediately, before any further I/O events.

Used when you want to schedule a callback for the next iteration of the event loop, after I/O tasks.

Example Command

process.nextTick(() => { console.log('Next Tick'); });

setImmediate(() => { console.log('Immediate'); });

10. Explain the use of passport module in NodeJS
The passport module is used for adding authentication features to our website or web app. It implements authentication measure which helps to perform sign-in operations.

11. What is fork in NodeJS?
Fork is a method in NodeJS that is used to create child processes. It helps to handle the increasing workload. It creates a new instance of the engine which enables multiple processes to run the code.

12. What are the three methods to avoid callback hell?
The three methods to avoid callback hell are:

Using async/await()
Using promises
Using generators
13. What is body-parser in NodeJS?
Body-parser is the NodeJS body-parsing middleware. It is responsible for parsing the incoming request bodies in a middleware before you handle it. It is an NPM module that processes data sent in HTTP requests.

14. What is CORS in NodeJS?
The word CORS stands for “Cross-Origin Resource Sharing”. Cross-Origin Resource Sharing is an HTTP-header based mechanism implemented by the browser which allows a server or an API to indicate any origins (different in terms of protocol, hostname, or port) other than its origin from which the unknown origin gets permission to access and load resources. The cors package available in the npm registry is used to tackle CORS errors in a NodeJS application.

15. Explain the TLS module in NodeJS?
The TLS module provides an implementation of the Transport Layer Security (TLS) and Secure Socket Layer (SSL) protocols that are built on top of OpenSSL. It helps to establish a secure connection on the network.

16. What is the use of url module in NodeJS?
In NodeJS url module is used to split the URL of the website into parts so that it becomes readable and can be used in the different parts of the application. The parse() method is used with the url module to separate the URL of the website into parts.

17. What is REST API?
REST API stands for REpresentational State Transfer API. It is a type of API (Application Programming Interface) that allows communication between different systems over the internet. REST APIs work by sending requests and receiving responses, typically in JSON format, between the client and server.

REST APIs use HTTP methods (such as GET, POST, PUT, DELETE) to define actions that can be performed on resources. These methods align with CRUD (Create, Read, Update, Delete) operations, which are used to manipulate resources over the web.

18. Explain the engine Google uses for NodeJS
The engine used by Google for NodeJS is V8. It is one the fastest engine as it is written in C++. It provides a runtime environment for the execution of JavaScript code. The best part is that the JavaScript engine is completely independent of the browser in which it runs. It has a huge community and is highly portable.

19. Name the tool used for writing consistent code
ESLint is a tool used in many IDEs to write consistent code styles. ESLint is written using NodeJS to provide a fast runtime environment and easy installation via npm.

20. What are the different kinds of HTTP requests?
The most commonly used HTTP requests are:

GET: This request is used to read/retrieve data from a web server. GET returns an HTTP status code of 200 (OK) if the data is successfully retrieved from the server.
PUT: This request is used to modify the data on the server. It replaces the entire content at a particular location with data that is passed in the body payload. If there are no resources that match the request, it will generate one.
POST: This request is used to send data (file, form data, etc.) to the server. On successful creation, it returns an HTTP status code of 201.
DELETE: This request is used to delete the data on the server at a specified location.
21. What are streams in NodeJS?
In NodeJS, streams are a powerful way to handle data in chunks rather than loading the entire data into memory. Streams allow for the efficient processing of large volumes of data, especially in situations where the data size is too large to fit into memory all at once.

There are the four types of the Streams:

Readable Streams: These streams allow you to read data. For example, reading data from a file or receiving HTTP request data. Example:
fs.createReadStream() or http.IncomingMessage.
Writable Streams: These streams allow you to write data. For example, writing data to a file or sending HTTP response data. Example:
 fs.createWriteStream() or http.ServerResponse.
Duplex Streams: These are both readable and writable. You can both read and write data using the same stream. Example: A TCP socket.
Transform Streams: These are a type of duplex stream where the data is transformed as it is read and written. Example: A zlib stream to compress or decompress data.
22.  What is event-driven programming in NodeJS?
Event-driven programming is used to synchronize the occurrence of multiple events and to make the program as simple as possible. The basic components of an Event-Driven Program are:

A callback function ( called an event handler) is called when an event is triggered.
An event loop that listens for event triggers and calls the corresponding event handler for that event.
23. What is the most commonly used libraries in NodeJS?
There are the two most commonly used libraries in NodeJs:

ExpressJS: ExpressJS is a minimal and flexible web application framework for building robust APIs and web apps. It simplifies routing, middleware handling, and request/response management.
Mongoose: An Object Data Modeling (ODM) library for MongoDB and NodeJS, it helps in managing data relationships, schema validation, and business logic.
24. Why is NodeJS preferred over other backend technologies like Java and PHP?
NodeJS is preferred over other backend technologies like Java and PHP for several reasons, especially when building modern, scalable, and high-performance applications. Here's why NodeJS stands out:

Non-Blocking, Asynchronous I/O
Single Programming Language (JavaScript)
High Performance (V8 Engine)
Real-Time Applications
25. What is package.json in NodeJS?
package.json in NodeJS is a metadata file that contains project-specific information such as dependencies, scripts, version, author details, and other configuration settings required for managing and building the project.

{
    "name": "app",
    "version": "1.0.0",
    "main": "index.js",
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
    },
    "keywords": [],
    "author": "",
    "license": "ISC",
    "description": "",
    "dependencies": {
        "express": "^4.21.2"
    }
}
26. How do we create simple ExpressJS application in NodeJS?
Step 1: Install NodeJS

Ensure that you have NodeJS installed on your machine. You can download it from nodejs.org.

Step 2: Create a New Directory

Open a terminal/command prompt and create a new directory for your project:

mkdir express-app
cd express-app
Step 3: Initialize a NodeJS Project

Run npm init to initialize a new NodeJS project. This will create a package.json file:

npm init -y
The -y flag automatically answers "yes" to all prompts.

Step 4: Install Express.js

npm install express 
This will add Express to your node_modules folder and save it as a dependency in package.json.

Create the Main Application File (app.js or index.js)

In the root of your project folder, create a new file named app.js or index.js:

touch app.js
Step 5: Write Your Express Application Code

Open app.js and write the following code to set up a basic Express server:


// Load the Express module
const express = require('express');

const app = express();
app.get('/', (req, res) => {
    res.send('Hello, Express!');
});
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
Run the application by using the command:

node app.js
Open your browser and visit http://localhost:3000. You should see the message: "Hello, Express!".

27. Explain asynchronous and non-blocking APIs in NodeJS.
Asynchronous APIs: They allow NodeJS to start an operation (e.g., reading a file or making a database request) and move on to the next task without waiting for the operation to finish. Once the task completes, a callback function is executed to handle the result.
Non-blocking: It refers to the behavior where an API does not block the execution of subsequent code while waiting for an I/O operation to finish. Instead, NodeJS uses the event loop to continue processing other operations.
28. How to create the simple HTTP server in NodeJS?
You can create a simple HTTP server in NodeJS using the built-in http module:


const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, World!');
});
server.listen(3000, () => {
  console.log('Server is running at http://localhost:3000/');
});
Output:

node app.js
Screenshot-2025-03-05-151651
NodeJS
29.What is a callback function in NodeJS?
A callback is a function which is called after a given task. In NodeJS callback functions prevents any blocking and enables other code to run in the meantime.

30. What are the two types of API functions in NodeJS?
The two types of API functions in NodeJS are:

Asynchronous: It is the non-blocking functions NodeJS.
Synchronous: It is the blocking functions in NodeJS.

Node.js Coding Interview Questions
Ace your Node.js interviews by mastering async JavaScript, backend design, performance, and security. This guide shows what interviewers really test, and how to prepare like a production-ready Node.js engineer.
6 mins read
Mar 10, 2026
editor-page-cover
book
Node.js coding interviews evaluate your ability to build fast, reliable server-side applications by testing a broad mix of asynchronous programming knowledge, backend engineering depth, and practical production experience. Companies assess whether candidates understand how the platform actually behaves under load, not just whether they can write JavaScript syntax.

Key takeaways

Event loop mastery: Interviewers frequently test knowledge of event loop phases, microtask vs. macrotask prioritization, and how blocking code degrades application performance.

Async patterns and concurrency: Candidates are expected to work confidently with callbacks, promises, and async/await while managing error propagation and concurrency limits across I/O-heavy operations.

API design and middleware: Questions cover routing, request validation, authentication, rate-limiting, caching, and how middleware pipelines are structured in frameworks like Express.js or Fastify.

Advanced runtime topics: Senior roles often include questions on the cluster module, worker threads, streams with backpressure handling, and message queue integration for high-throughput workloads.

Security and memory hygiene: Interviews at experienced levels test injection prevention, safe handling of environment variables, V8 heap profiling, and diagnosing memory leaks caused by event listeners or misconfigured closures.

Node.js has become one of the most widely used backend technologies, powering everything from real-time chat systems to high-throughput APIs and microservices.

Because of its event-driven, non-blocking nature, Node.js interviews test a unique combination of JavaScript knowledge, backend engineering strength, asynchronous programming mastery, and practical experience with production systems.

Grokking the Coding Interview Patterns

Cover
Grokking the Coding Interview Patterns
I created Grokking the Coding Interview because I watched too many talented engineers fail interviews they should have passed. At Microsoft and Meta, I saw firsthand what separated the candidates who succeeded from the ones who didn't. It wasn't how many LeetCode problems they'd solved. It was whether they could look at an unfamiliar problem and know how to approach it the right way. 
That's what this course teaches. Rather than throwing hundreds of disconnected problems at you, we organize the entire coding interview around 28 fundamental patterns. Each pattern is a reusable strategy. Once you understand two pointers, for example, you can apply them to dozens of problems you've never seen before. 
The course walks you through each pattern step by step, starting with the intuition behind it, then building through increasingly complex applications. As with every course on Educative, you will practice in a hands-on way with 500+ challenges, 17 mock interviews, and detailed explanations for every solution. 
The course is available in Python, Java, JavaScript, Go, C++, and C#, so you can prep in the language you'll actually use in your interview. Whether you're preparing for your first FAANG loop or brushing up after a few years away from interviewing, this course will give you a repeatable framework for cracking the coding interview.

85hrs
Intermediate
579 Challenges
580 Quizzes

Preview
This guide breaks down what Node.js coding interviews truly evaluate, the topics most companies focus on, and the advanced areas you should understand if you want to ace your coding interview.

What Do Node.js Coding Interviews Usually Test?
At its core, a Node.js interview evaluates your ability to build fast, reliable, and maintainable server-side applications using JavaScript. Since Node.js sits at the intersection of backend architecture and asynchronous JavaScript, companies want to assess whether you understand how the platform actually behaves in production.

Interviewers typically evaluate:

Asynchronous programming mastery – Callbacks, promises, async/await, error propagation patterns, concurrency limits, and I/O handling.

API design and backend fundamentals – Routing, request validation, response patterns, middleware processing, authentication, and session handling.

Performance awareness – Throughput, event loop utilization, memory optimization, and load considerations.

Reliability and error handling – Proper try/catch strategies, centralized error handlers, and robustness against crashes.

Real-world patterns – Logging, scaling, configuration management, environment variables, and inter-service communication.

Evaluation Area

What Interviewers Look For

Why It Matters

Async programming

Promises, async/await, error propagation, concurrency

Core to Node’s non-blocking model

API design

Clean routes, validation, auth, middleware

Reflects real backend work

Performance

Event loop health, throughput, and memory use

Node apps fail silently under load

Reliability

Centralized error handling, crash safety

Production stability

Real-world patterns

Logging, config, scaling, env vars

Signals production readiness

Node.js interviews are rarely just about JavaScript syntax. They test whether you can build backend services that behave predictably at scale.

Decode the Coding Interview in Java: Real-World Examples

Cover
Decode the Coding Interview in Java: Real-World Examples
Preparing for coding interviews has become a daunting task. Trying to solve enough practice questions and remember solutions can feel impossible.

Fortunately, the best way to be successful in the coding interview is not to just grind through problems. The best way is to develop the skills to break down a new problem and deploy the right tools to come up with a solution.

That’s why in this course, you’ll prepare for coding interviews by tackling real world problems faced by tech companies. When you solve real problems related to real projects (for example, paginating attendees in a Zoom call), not only will you have more fun preparing, but you’ll also have an easier time remembering what you’ve learned.

After each project, we’ll also show you what kinds of interview problems you’ll now be able to solve using the techniques you just applied, so that your knowledge is adaptable to new problems.

(This course is also available in Rust, C++, C#, Go, Python, Ruby, Elixir, Scala, Swift, Kotlin, and JavaScript.)

18hrs
Beginner
195 Challenges
1418 Illustrations

Preview
What Topics Do Node.js Interview Rounds Usually Cover?
Topic Category

Examples

Interview Focus

Core JavaScript

Closures, prototypes, scoping

Language fundamentals

Async internals

Event loop, microtasks vs macrotasks

Concurrency reasoning

Frameworks

Express, Nest, Fastify

Practical backend experience

Databases

MongoDB, SQL, and indexing

Data modeling & efficiency

Testing

Jest, mocks, integration tests

Code reliability

Runtime & deployment

Logging, profiling, env config

Production awareness

Modern Node.js interview rounds typically span both JavaScript patterns and backend engineering concepts. The most common topics include:

Core JavaScript behaviors – Closures, prototypes, this binding, event delegation, hoisting, scoping, and modules.

Async operations – Timers, microtasks vs macrotasks, event loop phases, scheduling, concurrency patterns, and I/O handling.

Framework experience – Express.js is the most commonly tested framework, but questions may also involve Nest.js, Fastify, Koa, or Hapi.

API and service design – CRUD operations, pagination, error handling, authentication, rate-limiting, caching, and versioning.

Database interaction – Working with MongoDB, PostgreSQL, or MySQL; connection pooling; schema design; and indexing basics.

Testing – Unit tests, integration tests, mocking patterns, and testing strategies using Jest, Mocha, or similar libraries.

Deployment and runtime considerations – Environment configuration, logging strategies, monitoring, memory leaks, and performance profiling.

These topics reflect how Node.js engineers actually spend their time in real environments, so interviews are structured around practical skill evaluation rather than theoretical trivia.

Are Questions About npm and Package Management Common in Node.js Interviews?
Yes. npm and package management in general are fundamental parts of developing applications in Node.js. Interviewers expect you to demonstrate an understanding of:

Dependency versioning: Caret (^), tilde (~), semantic versioning, and version resolution.

Package.json responsibilities: Scripts, dependencies vs devDependencies, engines, and project metadata.

Security principles: Checking for vulnerabilities, dependency audits, and avoiding unmaintained packages.

Global vs. local installs: How npm resolves modules, how the node_modules tree is structured, and when global installs make sense.

Monorepos and workspaces: Some companies will ask about npm workspaces or yarn/pnpm usage, especially in large-scale projects.

widget

npm questions are common because dependency management mistakes often lead to production issues, security vulnerabilities, or bloated deployments. Strong candidates show awareness of how to use npm responsibly.

Will Advanced Topics Like Clusters or Stream Handling Come Up During Node.js Coding Interviews?
It depends on the role. For mid-level or backend-heavy roles, advanced Node.js topics often appear in interviews.

Topic

Junior

Mid-level

Senior

Clustering

Aware

Explains scaling

Designs multi-core strategy

Streams

Basic usage

Backpressure handling

High-throughput pipelines

Worker threads

Rare

Conditional use

CPU-heavy architecture

Queues

Conceptual

Implements jobs

Designs async systems

Cluster module and scaling: Interviewers may ask how Node.js scales across CPU cores, how clustering works under the hood, and what types of workloads benefit from it.

Streams: Readable, writable, transform streams, piping, buffering, backpressure, file I/O, and stream error handling.

Worker threads: When to use workers, CPU-intensive tasks, and the differences compared to clustering.

Message queues and background processing: Bull, RabbitMQ, Kafka, and Node-based job execution strategies.

Companies rarely expect junior candidates to explain these deeply, but senior engineers are often evaluated on their ability to work with high-throughput or CPU-heavy applications.

If the role mentions performance, distributed systems, microservices, or real-time features, you should expect questions involving streams, workers, and clustering.

Is Memory Usage, Debugging, or Security Ever Part of the Node.js Coding Interview?
Yes, especially for experienced positions. Node.js applications frequently run into memory leaks, excessive CPU usage, or unhandled exceptions, so companies often want to know whether you can diagnose issues effectively.

widget

Common areas include:

Memory usage awareness: Understanding the V8 heap, garbage collection, memory profiling, and common causes of leaks, such as event listeners, caching, closures, or misconfigured intervals.

Debugging skills: Using Chrome DevTools, Node’s built-in inspector, logging strategies, breakpoints, and diagnosing async stack traces.

Security considerations: Avoiding insecure patterns such as eval, preventing injection attacks, sanitizing inputs, protecting secrets, and using libraries responsibly.

Node.js applications are often exposed to the public internet, making memory and security skills essential for safe production deployment.

How Does the Node.js Event Loop Actually Work in Interviews?
The event loop is one of the most important interview topics for Node.js engineers. It demonstrates that you understand how Node handles concurrency, scheduling, and asynchronous operations.

Interviewers may ask you to explain:

Event loop phases: Timers, pending callbacks, idle/prepare, poll, check, and close callbacks.

Macro tasks vs micro tasks: setTimeout, setImmediate, promises, nextTick, and how they are prioritized.

I/O behavior: Why Node.js can handle large numbers of connections efficiently, and how libuv interacts with the OS.

Concurrency limits: The thread pool behavior, the relationship between CPU-bound tasks, and event loop blocking.

Blocking vs non-blocking code: Which operations block the loop, and how can they be avoided to prevent freezing the application?

Understanding the event loop shows that you know how Node.js achieves its performance characteristics and how to write code that does not degrade under load.

What Are Common Node.js Security Interview Questions?
Security is a major topic in Node.js interviews because backend engineers must ensure user data is protected and applications are robust against common web threats.

Common security questions include:

Preventing injection attacks – SQL injection, command injection, NoSQL injection, and unsafe string concatenation.

Handling authentication securely – Token-based authentication, hashed passwords, cookie security, and session expiration.

Managing environment variables – Using .env files properly, preventing leakage of secrets, and enforcing correct configs across environments.

Avoiding unsafe Node.js features – Dangers of eval, Function(), insecure regex patterns, and tailable logs.

Rate-limiting and throttling – Preventing abuse of public endpoints.

Package vulnerabilities – Working with npm audits and dependency review.

A strong Node.js engineer understands that performance is irrelevant if the application is vulnerable, so many companies emphasize security topics during the interview.

Final Thoughts
Node.js Coding Interview Questions evaluate much more than JavaScript syntax. Companies want engineers who understand the platform’s asynchronous nature, event-driven architecture, performance behavior, security considerations, and real-world operational challenges. By preparing across the full spectrum of topics, such as asynchronous code, API design, npm usage, streams, clustering, debugging, memory usage, and security, you position yourself as a capable backend engineer ready to build production-grade Node.js services.

Advanced Node.JS Interview Questions and Answers
1. What according to you is the scope of NodeJs in the present domain of Information Technology?
The fact is latency, scalability, as well as reliability, are the essential KPIs in the present world of Information Technology dealing with the webserver domain. NodeJs is basically a JavaScript runtime that simply makes sure of high throughput and low latency under all circumstances. It is based on a non-blocking approach which simply makes sure that no precious time gets wasted on the I/O requests to be acknowledged at the server end. 

2. Can you name the two important types of API which you can find in the Node.JS approach?
These are, Synchronous which are considered for the blocking functions, and the second is Asynchronous which are generally considered for the Non-blocking ones. 

3. What are the important applications in IT in which the Node.Js approach can be considered?
The biggest application of Node.JS is in real-time web application building. In addition to this, it can be considered in distributed systems for sub-programming collection. More applications include its use in general applications and in some complex network applications. 

In addition to this, Node.JS can be used for creating, reading, writing, as well as closing the files on the server. Some users often use it for the purpose of editing the data in the database. Moreover, it has applications when it comes to generating web page content.

4. Name the file you need to run the Node.JS on a windows server?
It is an MSI installer and the same can be downloaded from the official website of Node.JS

5. What exactly do you know about Node.JS and how does it work?
It is basically an approach for server-side scripting that is very essential when it comes to building error-free scalable programs. One of the key benefits of this approach is its non-blocking I/O approach that doesn’t let the users face any problems and this is one of the key benefits of NodeJS. It basically works on a V8 environment and is purely based on the utilization of JavaScript for getting the I/O outcomes which are of high quality. The users can easily make sure of the single-threaded event loop.

6. In a step-wise manner, tell how the control flow generally controls the functional calls in the Node.JS?
The first step towards the accomplishment of this task is to simply control the order of execution. Next is to collect the concerned data from the data warehouse or from the server. After this, a limit is generally imposed on the concurrency and then the sequence of the concerned tasks is to be followed.

MindMajix Youtube Channel

7. What does the term I/O mean in Node.JS?
Node.JS has an important application with this term. It basically means Input and Output and is generally considered for accessing any feature which is present in the outer environment of the program or the application. It is generally loaded to the machine memory so that the concerned program can be made to run in a very reliable manner. 

8. What exactly adds latency in the server and affects the scalability?
Generally, the existence of multiple threads leads to a system that is often loaded with the tasks that generally engage the precious cycles on the scheduling of threads. This is exactly what adds latency and imposes a strict upper limit on the scalability. 

9. Can you tell something about event-driven programming and what role it play in the Node.JS approach?
It is basically a programming paradigm that decides the exact flow of the program. The same is purely and largely based on some of the important events such as sub-programs and messages and sometimes even on threads. Generally, it is considered an application architecture approach useful for smooth handling of the programs and assuring their effective running. 

10. What exactly do you know about a Node.JS file and when it is to be initiated on the server?
It is basically a file that generally provides information on the important tasks that are to be executed in the server environment at different levels. It should be initiated prior to any effect in the server domain. Generally, the events are defined as the process of grabbing the port on the server.

11. How to update a dependency using npm?
Update package.json and change the version of the dependency to be updated and run the following command.

12. Which module is used for web-based operations?
An HTTP module is used for web-based operations.

var Http = require(“http”)

fs module provides both synchronous as well as asynchronous methods.

13. fs module provides both synchronous as well as asynchronous methods.
True.

14. Mention some of the leading benefits of using the Node.JS approach to other similar technologies?
First of all, it is very reliable to work with and is best when it comes to saving a lot of time. Also, it is widely known to build network programs that are highly scalable. All the tasks can be accomplished in a fast way due to its I/O approach and in addition to this; it is capable to synchronize almost everything to get results far beyond any imagination. Node.JS is also known for its excellent concurrency. The biggest advantage that it offers to the users is that it almost never gets blocked.

 Related Article Basic NodeJS Interview Questions and Answers
15. Define the Control Function in Node.JS in your own way?
It is basically considered as a generic code that is capable to be run among the different asynchronous function calls. The best thing about it is its compatibility with the functional calls that make it useful for different tasks. 

16. What is the prime benefit that Node.JS can offer to the user being a single-threaded approach?
It simply makes sure of the scalability, as well as performance and this is because synchronization when done on a single thread help avoid the typical web loads that often create issues.

17. What are the features of Node.JS you are familiar with?
In Node.Js, all the APIs are asynchronous 
A Node.JS server never waits for anything
There is a notification mechanism that simply lets the users get information about the response from the last API
It is fast as it is built on the V8 JavaScript engine
There is a full-fledge library available that helps users in the proper execution of the code
It is based on a single thread model 
The Node.JS server can easily handle a very large number of requests without facing the downtime 
There is no buffering at all as already mentioned.
[ Check out Basic Examples of NodeJS ]

18. What exactly is a module in the Node.JS and is it possible for the users to change the same if they need the same is felt?
A module is nothing but a series or a group of functions that a user needs to include in the concerned program or application. Yes, it is possible to change the same by the users. The users can also create new modules if the same is required. 

19. What is Callback in the Node.JS environment?
It is basically a function that is generally executed at the last stage or at the end of a task assigned to the server. This is useful in enabling the users to run another code in the time being without facing the blocking issue. As Node.JS is an asynchronous platform, it largely depends on the callback option and most of the features it has are based on the same. Generally, it’s the APIs present in the Node.JS which support it.

20. What exactly Global is in the Node.Js and what’s their significance?
This is actually a keyword in Node.JS which is simply considered for the purpose of representing the global namespace object. It is possible to deploy some of them for the module scope and this is one of the best things about them. 

21. While working in the Node.JS environment, which framework you have used mostly?
The answer to this question depends on the overall experience of the user. Generally, the “Express” is the framework that is used commonly so you can answer it against this question. 

22. What is the Modularize option and when you can use it while working on a Node.JS server?
It is basically an option that simply lets the users avoid the situation callback hell. It does so by simply splitting the callbacks into functions which are small in size and are generally independent. The functions can be joined at a later stage in order to make them work together.

23. Name a few important tasks that you can perform simply with the help of the event loop?
A lot of tasks can be performed with the help of this and a few important ones are marinating the Input/output operations, handling blocking, as well as handling heavy computation problems.

25. What exactly do you know about the REPL in the Node.JS environment?
It stands for the Read Eval Print Loop and is generally engaged in performing various tasks that are related to Printing, Looping, Reading, as well as execution. A number of ad-hoc Java statements are present in the server that can easily be executed with the help of REPL. The JavaScript can be made to enter directly in the shell post the tasks such as debugging, testing, as well as experimenting, which can be performed reliably. 

26. Do you think there are some disadvantages of using the Node.JS approach? If so, tell me what?
Ans) Yes, there are a few drawbacks that are associated. The fact is any intensive CPU computation can block the Node.JS responsiveness up to a great extent. Therefore, a threaded platform is a better option but it needs more time and effort to get things done in a rightful manner. There are no favorable outcomes that the users can make sure of if the relational database is deployed with the Node.JS approach.

27. Is it possible in Node.JS to import external libraries Name the command that can be used for this?
Yes, this is possible and for this, the command “require” is generally considered. 

28. While working with the Node.JS server, what you will do in case the problem of blocking of I/O will be there?
The event-based model present can directly be inserted at the core of the Node.JS server. Generally, for this task, an event loop is considered rather than considering the threads. 

29. Compare Node.JS with Ajax simply
Ajax is a client-side approach whereas Node.JS is a server-based approach. It is generally used for updating the contents of the page and the good thing is users need not worry about the refreshment of the page for this. On the other hand, the same is required in the Node.JS approach for developing the software. Unlike Ajax, it is executed in the server than in the browser.

Explore Comparison Between AngularJS vs Node.JS
30. Mention any one problem which you faced with the technical features of the Node.JS
Sometimes, it becomes difficult for the users to have one process for scaling with the server and this creates issues in the long run. 

31. Tell something about the callback hell in the Node.JS environment?
When the heavily nested calls back are considered in the server, this situation arrives and blocks the code up to some extent resulting in its unreadability and complexity to maintain and run.

32. Name a few IDE’s which you can consider for the development of the Node.JS?
This includes:

JetBrains WebStorm
Cloud 9
Komoda IDE
JetBrains Intelij IDEA
Atom 
Eclipse.
33. What is the promise mechanism in the Node.JS approach and what is its significance?
It is basically an approach that is considered for avoiding the callback hell situation. It gives an additional path for writing the async codes and users can simply make sure of avoiding the same in the shortest possible time. 

34. Tell some examples of the server where you will use the Node.JS and why
The Node.JS technology can be considered in the gaming servers, social media servers, streaming servers, advertisement servers, as well as in collaborative servers. This is because these servers have to handle a lot of requests and the Node.JS technology is good enough to be considered in the ones that have a large volume of traffic/requests.

[ Explore Latest Article - In the right place at the right time - Node.JS ]

35. Is it free to use Node.js?
Yes! Node.js is released under the MIT LICENSE and is free to use.

36. Is Node a single-threaded application?
Yes! Node uses a single-threaded model with event looping.

37. How to uninstall a dependency using npm?
Use following command to uninstall a module.C:Nodejs_WorkSpace>npm uninstall dependency-name.

Hiring
I am a dev
Most asked NodeJS interview questions
Beginners

1.

What is Node.js and why is it used?
Node.js is a server-side platform built on the V8 JavaScript engine. It's used for building fast and scalable network applications.

2.

How does Node.js handle asynchronous operations?
Node.js uses callbacks, promises, and async/await patterns for handling asynchronous operations.

3.

Can you show an example of a simple server created with Node.js?
const http = require('http');
http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(3000);
console.log('Server running at http://localhost:3000/');
This code snippet creates a basic HTTP server that responds with 'Hello World' for every request.

4.

Explain 'require' in Node.js.
'require' is a built-in function to include external modules in a Node.js file.

5.

What does 'console.log(process.pid)' output?
It outputs the process ID of the Node.js process.

6.

What is the event loop in Node.js?
The event loop is a mechanism that handles asynchronous callbacks in Node.js.

7.

What are error-first callbacks?
Error-first callbacks are the standard in Node.js for passing errors and data. The first argument is an error object, with the actual data as the second argument.

8.

What is the use of the 'fs' module in Node.js?
The 'fs' module is used to interact with the file system, allowing reading and writing of files.

9.

How can you avoid callback hell?
To avoid callback hell, you can use promises, async/await, or modularize callbacks.

10.

What is a Buffer in Node.js?
A Buffer is a chunk of memory allocated outside of the V8 JavaScript engine that can store binary data.

11.

How do you serve static files in a Node.js application?
Use the Express framework and its 'static' middleware, or manually set up file serving using the 'fs' and 'http' modules.

12.

How do you create a RESTful API in Node.js?
You create a RESTful API by setting up HTTP routes that handle requests according to REST principles, typically using Express.js.

13.

What is middleware in the context of Node.js and Express?
Middleware is a function that has access to the request object, response object, and the 'next' function in the application's request-response cycle.

14.

What is a package.json file?
A package.json file holds metadata about the project and includes a list of dependencies required by the application.

15.

Can Node.js be used for front-end and back-end development?
Node.js is primarily used for server-side (back-end) development, but when paired with tools like webpack or Browserify, it can also be involved in front-end build processes.

Most asked NodeJS interview questions
Beginners

1.

What is Node.js and why is it used?
2.

How does Node.js handle asynchronous operations?
3.

Can you show an example of a simple server created with Node.js?
const http = require('http');
http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(3000);
console.log('Server running at http://localhost:3000/');
4.

Explain 'require' in Node.js.
5.

What does 'console.log(process.pid)' output?
6.

What is the event loop in Node.js?
7.

What are error-first callbacks?
8.

What is the use of the 'fs' module in Node.js?
9.

How can you avoid callback hell?
10.

What is a Buffer in Node.js?
11.

How do you serve static files in a Node.js application?
12.

How do you create a RESTful API in Node.js?
13.

What is middleware in the context of Node.js and Express?
14.

What is a package.json file?
15.

Can Node.js be used for front-end and back-end development?
Hire Develpoper

HIRE EXPERT NODEJS DEVELOPERTS ON-DEMAND!
Hire in days

not weeks

1600+ on-demand

tech talents

Starting from $45/hour

Advanced

1.

Explain how Node.js handles child processes.
Node.js can create child processes using the 'child_process' module, to execute other scripts or programs.

const { exec } = require('child_process');
exec('node -v', (error, stdout, stderr) => {
  if (error) {
    console.error(`exec error: ${error}`);
    return;
  }
  console.log(`Node.js version: ${stdout}`);
});
2.

What is the purpose of module.exports?
The module.exports is used to expose functions, objects, or variables for use in other files.

3.

How does Node.js support multi-threading? Provide an example.
Node.js uses worker threads to achieve multi-threading. Below is an example of creating a worker thread.

const { Worker, isMainThread, parentPort } = require('worker_threads');
if (isMainThread) {
  const worker = new Worker(__filename);
  worker.once('message', (message) => {
    console.log(message);
  });
} else {
  parentPort.postMessage('Hello from the worker thread');
}
4.

Discuss streams in Node.js and their types.
Streams in Node.js are objects that let you read data from a source or write data to a destination continuously. The four types are Readable, Writable, Duplex, and Transform streams.

5.

How do you ensure that a function does not block the event loop? Provide code.
To avoid blocking the event loop, you can use asynchronous functions or create child processes. An example using async/await:

async function fetchData() {
  let data = await someAsyncOperation();
  return data;
}
6.

What are Microservices in Node.js?
Microservices in Node.js are small, independent services that work together in an application, each running in its own process and communicating via APIs.

7.

How does the cluster module work, and when would you use it?
The cluster module allows you to create child processes that all share server ports, enhancing performance by load balancing incoming connections across multiple worker processes.

8.

What is the Node.js event emitter and give an example of how it is used?
The event emitter is a module in Node.js that allows objects to publish events to be consumed by other objects. See the example below:

const EventEmitter = require('events');
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();
myEmitter.on('event', () => {
  console.log('an event occurred!');
});
myEmitter.emit('event');
9.

Why might you use the 'net' module in Node.js?
The 'net' module is used for creating TCP or IPC servers and clients.

10.

Discuss garbage collection in Node.js. How can you manually trigger it?
Garbage collection in Node.js is a memory management process for deallocating objects that are no longer needed. To trigger it manually, use '--expose-gc' flag and 'global.gc()'.

11.

How do you debug a Node.js application?
You can debug Node.js applications using the built-in 'debugger' keyword, Node.js Inspector or debugging tools in IDEs such as VSCode.

12.

Explain how you can handle uncaught exceptions in Node.js.
Uncaught exceptions can be handled with the 'process.on('uncaughtException', handler)' listener, which catches exceptions not caught by any try/catch.

13.

What is the difference between process.nextTick() and setImmediate()?
process.nextTick() defers the execution of a callback until the next iteration of the event loop, which is before any I/O events. setImmediate() executes a callback after the current event loop cycle and after any I/O events.

14.

Discuss how you can monitor the performance of a Node.js application.
You can monitor performance using tools like PM2, Node.js Application Metrics or the built-in 'perf_hooks' module.

15.

What are V8 native bindings in Node.js and why are they useful?
V8 native bindings allow Node.js to call C++ functions from JavaScript code. They are useful for performing tasks that are computationally intensive or not possible in pure JavaScript.

Top 30 Node.js Interview Questions and Answers for All Levels
By Jaishree Tomar

Oct 10, 2025 8 Min Read 3332 Views

(Last Updated)

Preparing for Node.js interviews requires a thorough understanding of this popular server-side platform. Node.js has gained tremendous traction in the development community, with demand for full-stack developers growing faster than other tech roles. 

And with the immense amount of resources on the internet, I know that preparation can be pretty confusing. Hence, I’ve drafted this article after immense research.

Here, you’ll find the top 30 Node.js interview questions and answers spanning all difficulty levels to help you prepare effectively. From fundamental concepts for beginners to complex topics for senior developers, you’ll find concise, easy-to-understand explanations that highlight Node.js’s key features—including its event-driven architecture, cross-platform compatibility, and the powerful ecosystem of over 50,000 packages available through NPM. Let’s begin!

Table of contents
Basic Node.js Interview Questions and Answers
What is Node.js?
Why is Node.js popular?
How does Node.js work?
What is the difference between JavaScript and Node.js?
What are the key features of Node.js?
What is NPM?
How do you install Node.js?
Intermediate Node.js Interview Questions and Answers
What is the Event Loop in Node.js?
What is a callback function?
What are Promises in Node.js?
What is the difference between setTimeout and setImmediate?
What is the use of process.nextTick()?
What is the role of package.json?
What is the difference between synchronous and asynchronous functions?
Advanced Node.js Interview Questions and Answers
What is clustering in Node.js?
What are worker threads?
What is the difference between spawn() and fork()?
What is the buffer class in Node.js?
What is the reactor pattern?
What is the role of libuv in Node.js?
Node.js Interview Questions and Answers: Modules and Architecture
What are Node.js modules?
What is module.exports?
What is require() in Node.js?
What is middleware in Node.js?
What is the use of the fs module?
What are streams in Node.js?
Node.js Interview Questions and Answers: Performance and Best Practices
How to improve Node.js performance?
What is a memory leak, and how can to avoid it?
How to handle errors in Node.js?
What are some common security practices in Node.js?
Concluding Thoughts…
Basic Node.js Interview Questions and Answers
Mastering the fundamentals is crucial when preparing for Node.js interview questions. Let’s explore the essential concepts you need to know to build a strong foundation.

01 2
1. What is Node.js?
Node.js is an open-source, cross-platform JavaScript runtime environment that executes JavaScript code outside a web browser. Built on Chrome’s V8 JavaScript engine, it allows developers to use JavaScript for server-side scripting. Essentially, Node.js is neither a programming language nor a framework—it’s an environment that helps in running JavaScript on the server side.

2. Why is Node.js popular?
Node.js has gained immense popularity for several compelling reasons:

Easy to learn: Its JavaScript foundation makes it accessible for web developers
Highly scalable: Capable of handling numerous simultaneous connections with high throughput
Speed: Non-blocking thread execution ensures faster and efficient operations
Rich ecosystem: Access to over 1 million packages in the NPM registry
Unified language: Frontend and backend can be managed with JavaScript, streamlining development
Cross-platform: Works across Windows, Linux, macOS, and more
3. How does Node.js work?
Node.js operates on a unique architecture that sets it apart from traditional servers:

Uses an event-driven, non-blocking I/O model that makes it lightweight and efficient
Runs a single-threaded event loop to handle multiple concurrent requests
When a client sends a request, it’s added to an event queue, processed by the event loop
For time-consuming operations like file reading, Node.js doesn’t wait but continues processing other requests
Once an operation completes, a callback function is triggered to handle the result
4. What is the difference between JavaScript and Node.js?
Though related, JavaScript and Node.js serve different purposes:

JavaScript	Node.js
Primarily runs in browsers	Runs on the server-side
Can manipulate DOM and access browser APIs	Full access to the file system and server capabilities
Limited by browser compatibility	Control over the environment and version
No direct file system access	Full access to file system and server capabilities
Uses ES Modules system in modern browsers	Supports both CommonJS and ES module systems
5. What are the key features of Node.js?
Node.js comes with several distinctive features that make it a powerful choice:

Asynchronous and event-driven: APIs never block, the server moves to the next API after calling it
Single-threaded but highly scalable: Uses event looping for non-blocking responses
Very fast execution: Built on Google Chrome’s V8 JavaScript engine
No buffering: Applications output data in chunks
Cross-platform compatibility: Runs on various operating systems
MIT License: Free and open-source
MDN
6. What is NPM?
NPM (Node Package Manager) is the default package manager for Node.js and the world’s largest software registry. First thing to remember, NPM serves multiple crucial functions:

Manages dependencies of your Node.js projects
Provides access to over 1 million open-source packages
Allows installation of specific versions of packages
Comes bundled with Node.js installation
Consists of a command-line client and an online registry of packages
Helps in defining scripts for your project in the package.json file
7. How do you install Node.js?
Installing Node.js is straightforward across different platforms:

For Windows:

Download the Windows Installer directly from node.js.org
Run the installer and follow the installation steps
For macOS:

Using Homebrew: brew install node
Or download the macOS Installer from node.js.org
For Linux (Ubuntu):

sudo apt update

sudo apt install node.js

Using Node Version Manager (recommended):

Install nvm first, which allows managing multiple Node.js versions
Then run: nvm install <version> to install a specific version
Use nvm use <version> to switch between versions
Choosing the right Node.js version is important—the LTS (Long Term Support) version is recommended for most users as it provides stability.

Intermediate Node.js Interview Questions and Answers
Once you’ve got a handle on the basics, diving into intermediate Node.js interview questions reveals the platform’s true power. Let’s explore the concepts that separate beginners from experienced Node.js developers.

02 2
8. What is the Event Loop in Node.js?
The Event Loop is the heart of Node.js that enables non-blocking I/O operations despite using a single JavaScript thread. It works by offloading operations to the system kernel whenever possible, allowing Node.js to handle thousands of concurrent connections efficiently.

The Event Loop follows a specific order of operations through six phases:

Timers phase: Executes callbacks scheduled by setTimeout() and setInterval()
Pending callbacks phase: Handles I/O callbacks deferred to the next loop iteration
Idle/Prepare phase: Used internally by Node.js
Poll phase: Retrieves new I/O events and executes most callbacks
Check phase: Runs setImmediate() callbacks
Close callbacks phase: Executes close event callbacks (like socket disconnects)
Between iterations, Node.js checks if it’s waiting for any asynchronous I/O operations before continuing or shutting down.

9. What is a callback function?
A callback function is a function passed as an argument to another function, which is then executed when a specific event occurs or an operation completes. They’re fundamental to Node.js’s asynchronous programming model.

For example:

fs.readFile(‘/file.json’, (err, data) => {

  if (err) {

    console.log(err);

    return;

  }

  console.log(data);

});

In this pattern, the anonymous function is the callback that runs after the file reading completes. Node.js commonly uses an error-first callback pattern where the first parameter is reserved for an error object.

While callbacks work well for simple cases, they can lead to “callback hell” with multiple nested callbacks, making code difficult to read and maintain.

10. What are Promises in Node.js?
Promises are objects representing the eventual completion or failure of an asynchronous operation. They provide a more elegant way to handle asynchronous code compared to callbacks.

A Promise exists in one of three states:

Pending: Initial state, neither fulfilled nor rejected
Fulfilled: The operation completed successfully
Rejected: The operation failed
Promises can be chained using .then() and .catch() methods:

doSomething()

  .then(result => doSomethingElse(result))

  .then(newResult => doThirdThing(newResult))

  .catch(error => handleError(error));

This approach avoids callback nesting, improves readability, and provides better error handling through the chain.

11. What is the difference between setTimeout and setImmediate?
Both functions schedule asynchronous execution of callbacks, but behave differently in the Event Loop:

setTimeout(fn, 0)	setImmediate(fn)
Executes in the Timers phase	Executes in the Check phase
Runs after a specified delay	Runs after the current poll phase completes
Minimum delay is not guaranteed to be exact	Designed to execute immediately after I/O events
When called within an I/O cycle, setImmediate() will always execute before any timers. Outside an I/O context, the order is non-deterministic and can vary.

12. What is the use of process.nextTick()?
process.nextTick() is a unique Node.js function that schedules a callback to execute after the current operation completes but before the Event Loop continues to the next phase.

console.log(‘Start’);

process.nextTick(() => {

  console.log(‘nextTick callback’);

});

console.log(‘End’);

// Output: Start, End, nextTick callback

Unlike other asynchronous methods, process.nextTick() doesn’t technically belong to the Event Loop. It processes callbacks immediately after the current operation finishes, making it execute more immediately than setImmediate() despite their confusing names.

Use process.nextTick() when you need to ensure a callback runs immediately after the current function completes but before any I/O events are processed.

13. What is the role of package.json?
The package.json file is the heart of any Node.js project, containing metadata about the project and its dependencies. Its key roles include:

Dependency management: Lists all packages required for the project
Script definition: Defines custom commands to automate tasks
Project identification: Contains name, version, description, and author
Entry point specification: Defines the main file that runs when the package is required
License information: Specifies how others can use your code
This file is automatically referenced when you run npm install, which downloads all dependencies specified in it.

14. What is the difference between synchronous and asynchronous functions?
In Node.js, the distinction between synchronous and asynchronous functions is crucial:

Synchronous functions:

Block the execution of code until the operation completes
Also called “blocking” functions
Execute sequentially, line by line
Simpler to read and debug
Can degrade performance for I/O-heavy operations
Asynchronous functions:

Don’t block code execution while waiting for operations to complete
Also called “non-blocking” functions
Use callbacks, Promises, or async/await to handle results
Better performance for I/O operations
More complex flow control
For example, fs.readFileSync() will halt your program until file reading completes, while fs.readFile() allows your code to continue executing while the file is being read.

Node.js performs significantly better when using asynchronous functions for I/O operations, as they allow the server to handle many concurrent requests without waiting.

Advanced Node.js Interview Questions and Answers
Advancing to more complex Node.js interview questions requires understanding the platform’s internal architecture. These advanced Node.js interview questions often separate senior developers from mid-level programmers.

03 2
15. What is clustering in Node.js?
Clustering in Node.js enables running multiple Node.js instances that share server ports. Since Node.js runs single-threaded by default, clustering helps utilize all CPU cores on multi-core systems.

The mechanism works through:

A primary process that acts as a load balancer
Child processes (workers) created via child_process.fork()
Workload distribution using either round-robin (default) or direct socket assignment
Implementing clustering can dramatically improve performance—tests show applications handling triple the requests per second and reducing response times by 75% compared to non-clustered applications.

16. What are worker threads?
Worker threads allow parallel JavaScript execution within a single Node.js instance, introduced in Node.v10.5.0 and stabilized in v12.

Unlike clustering, worker threads:

Share memory through transferring ArrayBuffer instances or sharing a SharedArrayBuffer
Are ideal for CPU-intensive tasks, not I/O operations
Run within the same process but in separate V8 instances
As a result, worker threads prevent CPU-intensive operations from blocking the main thread, keeping your application responsive during complex calculations.

17. What is the difference between spawn() and fork()?
Both functions create child processes, yet serve different purposes:

spawn()	fork()
Creates a streaming interface	Creates a communication channel
Ideal for binary/encoded data transfer	Best for JSON/XML message passing
Doesn’t create a new V8 instance	Creates a new Node.js V8 instance
Useful for large data streams (images, logs)	Designed for inter-process communication
Typically, fork() is what you’ll use when needing worker processes within a Node.js environment.

18. What is the buffer class in Node.js?
Buffer in Node.js represents fixed-length byte sequences, handling binary data that JavaScript alone cannot process efficiently. Essentially, it’s a subclass of JavaScript’s Uint8Array with additional methods.

Key methods include:

Buffer.alloc(size): Creates a zero-filled buffer
Buffer.from(data): Creates a buffer from existing data
toString(): Converts buffer to string
Buffers are particularly useful when working with files, network operations, or any binary data processing.

19. What is the reactor pattern?
The reactor pattern forms the architectural foundation of Node.js. In essence, it’s an event handling pattern where a single-threaded event loop demultiplexes incoming requests to the appropriate handlers.

The pattern follows these steps:

Application initiates I/O with a handler function
Event Demultiplexer manages multiple I/O operations
Event Loop processes items in the Event Queue
Handlers execute without blocking other operations
This non-blocking approach allows Node.js to handle thousands of concurrent connections efficiently.

20. What is the role of libuv in Node.js?
Libuv is a cross-platform C library that provides the asynchronous I/O foundation for Node.js. Furthermore, it abstracts system-level operations across different operating systems.

Its responsibilities include:

Implementing the event loop
Managing the thread pool (default size: 4 threads)
Providing consistent APIs for networking, file system, and DNS operations
Handling system-specific mechanisms (epoll on Linux, kqueue on macOS, IOCP on Windows)
Consequently, libuv enables Node.js to deliver consistent performance across platforms while maintaining its non-blocking behavior.

Node.js Interview Questions and Answers: Modules and Architecture
Understanding Node.js modules and architecture forms the foundation for building scalable applications. Most advanced Node.js interview questions focus on these core architectural elements.

04 2
21. What are Node.js modules?
Modules in Node.js are self-contained blocks of code that can be exported and reused across projects. They help maintain the DRY (Don’t Repeat Yourself) principle and organize complex logic into manageable chunks. Node.js supports three main types of modules:

Built-in modules: Pre-packaged with Node.js (http, url, path, fs)
Local modules: Custom JavaScript files you create
Third-party modules: External packages available through NPM
Modules help break down your application into smaller, focused components, making them more maintainable and easier to debug.

22. What is module.exports?
module.exports is a special object included in every Node.js file by default. It determines what a module exposes to other files when they import it. For instance:

function sayHello(userName) {

  console.log(`Hello ${userName}!`);

}

module.exports = sayHello;

Alternatively, you can export multiple functions or values:

exports.getName = () => ‘Jim’;

exports.getLocation = () => ‘Munich’;

Keep in mind that whatever you assign to module.exports becomes the exported value of your module.

23. What is require() in Node.js?
The require() function imports modules in Node.js, following the CommonJS specification. When called, it:

Reads the JavaScript file
Executes the code inside
Returns the exported object
For example:

const fs = require(‘fs’);            // Built-in module

const myModule = require(‘./myModule’); // Local module

Node.js caches modules after the first load, improving performance by preventing repeated execution.

24. What is middleware in Node.js?
Middleware refers to functions that access the request (req), response (res), and the next middleware function (next) in an application’s request-response cycle. These functions can:

Modify request/response objects
End the request-response cycle
Call the next middleware function
A typical middleware structure looks like:

const loggerMiddleware = (req, res, next) => {

  console.log(`${req.method} ${req.url}`);

  next(); // Pass control to next middleware

};

Middleware functions can be chained together, creating a pipeline for processing requests.

25. What is the use of the fs module?
The file system (fs) module provides file operations functionality in Node.js. It’s a built-in module that allows you to work with files on your server, commonly used for:

Reading files (fs.readFile, fs.readFileSync)
Writing files (fs.writeFile, fs.writeFileSync)
Managing directories (fs.mkdir, fs.rmdir)
Checking file status (fs.stat)
Most fs methods have both synchronous and asynchronous versions, allowing flexibility based on your application needs.

26. What are streams in Node.js?
Streams are data-handling methods that process data sequentially in chunks rather than loading entire files into memory. They’re particularly valuable when working with large datasets, making them memory-efficient and time-efficient.

Node.js provides four types of streams:

Readable: For data consumption (e.g., fs.createReadStream())
Writable: For data output (e.g., fs.createWriteStream())
Duplex: Both readable and writable (e.g., TCP sockets)
Transform: Modify data while reading/writing (e.g., compression)
Given that streams process data in chunks, they’re ideal for handling large files or real-time data processing.

Node.js Interview Questions and Answers: Performance and Best Practices
Performance optimization is critical for production-ready node.js applications. When preparing for node.js interview questions, understanding these best practices can set you apart from other candidates.

05 1
27. How to improve Node.js performance?
Optimizing Node.js performance requires attention to several key areas:

Profiling and monitoring tools: Use Node.js’s built-in V8 profiler or tools like Clinic.js to identify bottlenecks
Event loop optimization: Avoid blocking the event loop with synchronous operations or heavy computations
Use worker threads: Offload CPU-intensive tasks to worker threads to keep the main thread responsive
Implement clustering: Utilize all CPU cores by creating multiple Node.js instances that share server ports
Optimize database queries: Implement connection pooling and fetch only necessary data
Moreover, proper memory management plays a crucial role in maintaining performance. Monitor CPU usage patterns and implement asynchronous operations wherever possible.

28. What is a memory leak, and how can to avoid it?
A memory leak occurs when your Node.js application doesn’t release memory that’s no longer needed, causing gradual degradation of system resources. In simple terms, it’s orphaned blocks of memory on the Heap not released by the garbage collector.

Common causes include:

Global variables: Never garbage collected during application lifetime
Closures: Holding references to large objects
Event listeners: Not properly detached when no longer needed
Timers and intervals: Not cleared when no longer needed
To prevent memory leaks, regularly monitor memory usage with tools like Heapdump or memwatch. Additionally, always clear intervals and timeouts, remove event listeners when components are destroyed, and avoid excessive global variables.

29. How to handle errors in Node.js?
Effective error handling improves application robustness and reduces debugging time. Node.js errors fall into two categories:

Operational errors: Expected runtime problems (invalid input, connection failures)
Programmer errors: Actual bugs in code (reading undefined properties)
For proper error handling:

Use try/catch blocks with async/await rather than callbacks
Create custom Error classes with meaningful properties
Implement centralized error-handling middleware
Subscribe to unhandledRejection events
Primarily, avoid displaying stack traces to users and implement proper logging to track errors systematically.

30. What are some common security practices in Node.js?
Security is non-negotiable for production applications. Key practices include:

Input validation: Sanitize all user inputs to prevent injection attacks
Set NODE_ENV to production: Reduces information exposed in error messages
Implement proper authentication: Use secure authentication mechanisms
Use HTTPS: Encrypt data in transit
Avoid global variables: They can leak information between requests
Enable two-factor authentication: For npm and GitHub accounts to protect your code
Validate dependencies: Regularly check for vulnerabilities in third-party packages
To illustrate, memory leaks and security vulnerabilities often go unnoticed until they cause major issues. Therefore, implement continuous monitoring and adhere to these best practices from the start.

If you want to master Node.js and build scalable web applications, HCL GUVI’s Node.js Certification Course is the perfect launchpad. Designed by industry experts, it offers hands-on projects and real-world interview prep to help you build a successful backend development career.

✨🐢 NodeJS 2024 🚀✨ Interview Question

https://github.com/tshemsedinov/NodeJS-Interview-Questions

Interview questions and recommendations for app and system backend developers.

Translations: EN, UA, RU.

55 Interview Questions for Applied Node.js Backend Engineer
60 Interview Questions for System Node.js Backend Engineer
Answers to these questions
Notes on Interview Techniques
How to Conduct Interviews
Notes for Candidates
Links
55 Interview Questions for Applied Backend Developer
An application programmer developes product, domain model, domain logic and processes. An application programmer needs to know node.js as a tool, its capabilities, concepts, advantages and disadvantages, but does not need to dive deeply into the platform code, does not need to build a layer between node.js and application code, does not need to invent frameworks (within the product), invent generic tools and libraries that are not domain specific. If this happens, he performs both roles - system and applied, they should be separated as much as possible: separate repositories, separate working hours and position, separate goals and tasks. If you need questions for system developer see the next section.

What can you do with for await on a request: IncomingMessage instance?
How does node.js natively hash passwords and in what cases we need external dependencies for this?
What API does nodejs/undici implement?
What is a modern replacement for the node:domain API?
When can we use synchronous versions of file operations from node:fs instead of asynchronous ones and what should we look for when making such a decision?
Propose best practices for handling errors in asynchronous code.
How can vulnerabilities appear in node projects? Explain on of the following for your choice: XSS, Path traversal, SQL injection, CSRF? How to prevent them?
How is a race condition possible in asynchronous programming? And how to protect your code from it?
What are the pros and cons of splitting code into .js and separate .d.ts typings?
Give several typical design patterns for Node.js (based on GoF and not only) with examples.
В чем заключается проблема толстых контролеров? (с примерами на ноде)
Приведите примеры протекания абстракций (типичных для ноды).
Как можно создать Singleton с помощью системы модульности в ноде?
Как проще всего реализовать паттерн Strategy на JavaScript (и где его использовать в ноде)?
Приведите пример паттерна Adapter из встроенных библиотек ноды (есть несколько).
Какой паттерн проектирования реализует EventEmitter?
Как связаны контракты EventEmitter и Readable?
Какие вы можете привести антипаттерны (или примеры плохого стиля) программирования для node.js?
Зачем нам следующие поля Error: error.cause, error.code, error.message, error.stack?
Как скопировать папку с вложенными файлами и папками с помощью node:fs?
Можем ли мы делать real-time приложения на Node.js?
Какие есть подходы к логированию? Их отличия, плюсы и минусы.
Где хранить секреты? (ключи api, точены и пароли от баз данных)
Почему нужно делать return await внутри асинхронных функций и методов а не возвращать промис?
Как не заблокировать обслуживание других пользователей, обрабатывая запрос от одного из них?
Что делать если обработка запроса привела к необходимости завершить процесс (ведь он обслуживает много запросов параллельно)?
Какие стили и парадигмы программирования вы используете в node.js приложениях? Почему?
В чем слабые стороны node.js? Что на ноде писать плохо или невозможно?
В чем разница между stateful and stateless подходами для node.js приложений? Как выбрать?
Как ограничить пропускную способность эндпоинта (кол-во запросов в единицу времени)?
В чем опасность примесей (mixins) для прикладного кода? (с типичными примерами на Node.js)
Как реализовать архитектурную границу в приложениях на node.js?
Что такое DI (внедрение зависимостей) и как его реализовать на ноде? (желательно несколько вариантов)
Почему middleware является антипаттерном? И как писать без него?
Как снизить зацепление кода в приложениях на node.js?
Почему нужно добавлять префикс node: при загрузке встроенных модулей?
Зачем нужен AbortController? Приведите примеры API, где он используется.
JSON сериализация и десериализация может работать долго и заблокировать поток, что с этим делать?
Как могут утечь все соединения из пула конекшенов к базе данных и как это предотвратить?
Как вы организовываете слой доступа к данным?
В чем преимущество async/await и промисов перед callback в ноде? Где невозможно обойтись без callback?
Что делать, если в двух частях одного приложения вам нужны разные версии npm зависимостей?
Какие Web API появились в ноде в последнее время и зачем их туда тянут?
Что можно использовать вместо устаревших pm2 и forever в современном мире?
Как сделать бизнес-логику независимой от фреймворка и от протокола, через который приходят запросы?
Почему нам больше не нужны axios, request, node-fetch?
Для чего нам могут быть необходимы очереди внутри приложения и внешние MQ системы?
Чем может быть опасно, если зависимость патчит глобальные объекты, классы и прототипы?
Что такое Node.js LTS и что он нам дает?
Для чего нам Websocket, почему в 2023 брать socket.io плохой вариант и что брать для Websocket?
Что дает флаг --watch?
В каком состоянии сейчас нативный test runner в node.js?
Есть ли возможность в node.js поставлять приложение в виде одного исполняемого файла, как и зачем?
Какие есть способы трекинга асинхронных контекстов и нужны ли они вообще?
Когда и как нужно обновлять версии node.js в проектах?
60 Interview Questions for System Node.js Backend Engineer
Системный (платформенный) программист пишет код, не связанный с предметной областью: фреймворки, сетевые протоколы, транслятор, компиляторы, интерпретаторы, библиотеки, занимается вещами, которые могут быть переиспользованы в сотнях и тысячах разных проектов. Это называется производство средств производства. Систем программисту нужно знать node.js гораздо глубже, не только, его возможности, концепции, преимущества и недостатки, но и недокументированные возможности и даже баги, особенности платформы, которые очень редко используются, потому, что он строит прослойку между node.js и прикладным кодом, а прослойка эта позволяет делать прикладной код более абстрактным и приближенным к предметной области.

Чего не хватает в ESM, но есть (поддерживается) в CJS?
Для чего используется new Error.captureStackTrace?
Почему node.js не однопоточный? Докажите, что даже не был однопоточным.
Как связаны node:async_hooks и AsyncLocalStorage?
Какие в ноде встроенные средства сериализации аналогичны JSON только для бинарной сериализации?
Как следить за изменениями файлов и директорий на диске и какие с этим могут возникать проблемы?
Чем заменить deprecated fs.exists и почему его выпиливают из ноды?
Что такое back pressure для стримов и какая проблема была бы без него?
Как защитить SharedArrayBuffer от записи из разных worker_threads?
Докажите, что любой модуль в ноде при загрузке оборачивается в функцию и создает замыкание?
Где в ноде используется паттерн Revealing constructor (открытый конструктор, есть много таких мест)?
Как сделать переопределение write для экземпляра Writable без создания класса наследника?
В чем причина медленных вызовов из JavaScript кода к аддонам на C, C++ или подключенных через N-API?
Что такое MessagePort и BroadcastChannel?
Чем отличаются fs.stat, fs.fstat, fs.lstat?
Почему важно выполнять правило eslint: consistent-return учитывая оптимизацию v8?
Зачем в ноде есть WASI и какие возможности он нам дает?
Что можно сделать при помощи node:vm (любые примеры)?
Какие вы знаете deprecated API и какова стратегия их вывода из употребления?
Какие вы знаете проблемы, баги и узкие места в node.js?
Объясните, как можно написать (или напишите) адаптеры асинхронности promisify и callbackify?
Почему у event loop есть фазы? Почему мало одной очереди?
Чем отличаются микротаски и макротаски?
В чем особенности обработки uncaught exceptions в Node.js?
Чем отличаются nextTick, setImmediate и setTimeout?
Зачем есть ref() и unref() у таймеров, сокетов, серверов и других подобных классов?
Почему server.connections сделали deprecated и что как теперь получить подключения?
Перечислите основные случаи, приводящие к утечке памяти и как с этим бороться?
Чем отличается node:cluster и node:child_process? И когда cluster может становиться узким местом?
В каких случаях нужно отключать автоматическую сборку мусора и брать ее вызов в свои руки?
Какие есть способы отладки приложений и в каких случаях вы их используете?
Как сбросить кеш require для определенной библиотеки? Как быть в случае ESM?
Откуда берутся идентификаторы __dirname и __filename, require и import, fetch и Array?
Почему следует отказаться от использования библиотеки node:url?
Какие можно предложить стратегии масштабирования для приложений на ноде? Сравните их.
Чем отличаются cpu-intensive, ram-intensive и io-intensive задачи? Приведите примеры.
Почему не нужно использовать process.on('multipleResolves', handler)?
Расскажите, на что влияет опция noDelay у серверов, метод setNoDelay у request и socket?
Как работает keep-alive в http протоколе и как мы можем управлять им из ноды?
Для чего используется модуль node:perf_hooks? И может ли он работать с воркерами?
Что вы думаете про экспериментально API итерируемых методов (filter, map, reduce...) у стримов?
Какие вы знаете способы интернационализации приложений?
Используете ли вы встроенный test runner и библиотеку node:assert?
Какие вы использовали ключи при запуске ноды?
Как сдампить хип процесса и что с ним дальше делать?
Как построить flame graph?
Расскажите про ALPN и SNI и их поддержку в ноде.
Как реализовать автоматическую перезагрузку процесса нативными средствами при изменении кода?
Для чего нам модуль, который называется модуль, а именно node:module?
Как работать с самоподписанными SSL сертификатами? И в чем ограничение их использования?
Для чего в node.js есть Web Crypto API и в чем разница с node:crypto?
Для чего в node.js есть Web Streams API и в чем разница с node:stream?
Для чего нужны классы Blob и File из node:buffer?
В чем разница моделей прав доступа module-based и process-based?
Что и почему было deprecated в node:async_hooks?
Для чего нужен класс AsyncResource и как им пользоваться?
Как найти вызовы всех deprecated API в node.js приложении?
Как работать с зависимостями в single executable?
Знаете ли вы о проблемах с нативным test runner в node.js?
Какие новые возможности JavaScript появились в node.js при обновлении до версий 18 и 20?
Answers to these questions
Если вас интересуют ответы, то тут у меня самый большой бесплатный курс по ноде, который обновляется каждый год: https://github.com/HowProgrammingWorks/Index/blob/master/Courses/NodeJS.md а тут новый практически курс с ревью кода, созвонами по 2 раза в неделю, ответами на вопросы, лайвкодингом и большим архивом решений даля практических задач: https://github.com/HowProgrammingWorks/Index/blob/master/Courses/NodeJS-2022-2023.md И там и там есть все ответы.

Notes on Interview Techniques
Я сторонник того, чтобы давать людям на собесах возможность листать доки, гуглить и даже спрашивать у нейронок. Что должен проверять собес? Эффективность, способность решать задачи, а не задротство, зубрежку и феноменальную память. Если вы начнете это делать, то внезапно для себя выявите, что даже при этом многие люди не справляются, полный интернет шедевров говнокода, оверинженеринга и архитектурного маразма. Еще мне важно, чтобы человек показал свое субъективное мнение, даже эмоциональную позицию по отношению к конкретным решениям и технологиям, именно это он будет проявлять в работе. А что сейчас на собесах происходит: эффект ивентлупа — люди вызубрили и могут наизусть рассказать фазы и красиво объяснить, а применить для принятия решений в коде не смогут, т.е. оно ничего не дает им в каждодневной работе.
Эти вопросы можно задавать любому уровню (джун, мидл, синьор), потому, что эти уровни релевантны только внутри конкретной компании или даже уже - продуктовой команды, а так, каждый из уровней ответит на них с разной степенью глубины.
Прикладной и системный программисты - это две разные специальности, как водитель и автомеханик. Оба они знают что такое двигатель, сцепление, тормоза, рессоры, но работа заключается в разном, хоть автомеханик тоже может водить машину, а некоторые водители умеют их чинить.
How to Conduct Interviews
Время собеседования ограничено, мы не можем позволить себе вести время по 2-3 часа на человека. Писать код на собеседованиях - это обычно долго и неэффективно (но иногда можно, если это всем комфортно и если код концептуальный, иллюстративный и не длинный).
Давайте список вопросов заранее, например за неделю или вообще публикуйте список специально для вакансии заранее, вот прям много вопросов, 100-200 и попросите промаркировать соискателя 2-4 символами, например: знаю / не знаю или хорошо знаю, справлюсь, слышал, не знаю. Потом на собеседовании вам останется выяснить, адекватно ли себя оценивает кандидат, проверив всего на нескольких вопросах. А в результате вы получите полную картину.
Notes for Candidates
Экономьте свое время и время интервьюера, не нужно травить байки и лить воду, говорить намеками. Запишите свой ответ на любой вопрос голосом и прослушайте. Если вы понимаете, что ваша речь невнятна, потренируйтесь, можете взять друга и поговорить с ним. Старайтесь высказываться не заученными выражениями, а поддерживать диалог двух профессионалов.
Links
❓ Сatalog of Interview Questions
🔁 Async 2024
🚀 Node.js 2024
🤖 Self Assessment
